#!/usr/bin/env node
/* 提取 HTML 内 calc-core 块 → 断言文章锚点 → 输出详细复算数据 */
"use strict";
const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.join(__dirname, "LLM推理卡数速查表.html"), "utf8");
const m = html.match(/<!-- CALC-CORE-START -->([\s\S]*?)<!-- CALC-CORE-END -->/);
if (!m) { console.error("找不到 calc-core 块"); process.exit(1); }
/* 剥掉 <script ...> 开标签与 </script> 闭标签 */
const coreCode = m[1].replace(/<script[^>]*>/, "").replace(/<\/script>/, "");

/* 用 module 重新执行 */
const sandbox = { module: { exports: {} } };
(new Function("module", "exports", coreCode))(sandbox.module, sandbox.module.exports);
const C = sandbox.module.exports.CALC || sandbox.module.exports;
if (!C || !C.solve) { console.error("CALC 提取失败"); process.exit(1); }

const byId = (a, id) => a.find(x => x.id === id);
const M = id => byId(C.MODELS, id);
const CD = id => byId(C.CARDS, id);
const f = (n, d) => n == null || !isFinite(n) ? "—" : n.toFixed(d == null ? 0 : d);

let fails = 0;
function assert(label, got, want, tol, unit) {
  tol = tol == null ? 0.05 : tol;
  unit = unit || "";
  const ok = typeof want === "number"
    ? Math.abs(got - want) <= tol + 1e-9
    : got === want;
  const mark = ok ? "  PASS" : "✗ FAIL";
  if (!ok) fails++;
  console.log(`${mark}  ${label}: got=${typeof got === "number" ? got.toFixed(2) : got}${unit}  want=${want}${unit} (tol ±${tol})`);
}

console.log("======= 一、口径自洽（可用显存）=======");
assert("H200 可用 = 141×0.9−6", C.usable(CD("H200")), 120.9, 0.01, "GB");
assert("B300 可用 = 288×0.9−6", C.usable(CD("B300")), 253.2, 0.01, "GB");
assert("910C 可用 = 128×0.9−6", C.usable(CD("910C")), 109.2, 0.01, "GB");

console.log("\n======= 二、文章锚点回归（70B 稠密 · 权重 70GB · 8 路 ==文章表头）=======");
const l70 = M("llama70"), H200 = CD("H200"), B300 = CD("B300"), C910 = CD("910C");

// KV 每 token：GQA 80×8×128×2×2B = 327,680B = 0.328 MB
let kv = C.kvOf(l70);
assert("70B 每 token KV", kv.perTok / 1e6, 0.328, 0.002, "MB");

assert("H200 装 70B FP8 = ceil(70/120.9) = 1", C.loadCards(l70, "FP8", H200), 1, 0);
assert("910C 装 70B BF16（140>109.2）= 2", C.loadCards(l70, "BF16", C910), 2, 0);

// @8K 内存上限 = 51GB/2.68GB = 19.0
let s = C.solve(l70, "FP8", H200, 8);
assert("H200 @8K 内存上限 capN", s.capN, 19.005, 0.1, "路");
assert("H200 @8K @30 并发 n30 = min(19.0, 34.1)", s.n30, 19.005, 0.15, "路");
assert("H200 @8K @60 n60（文章取整口径 4）", s.n60, 3.73, 0.35, "路");
assert("H200 @8K 瓶颈 @30 = C", s.bt30, "C", null);

s = C.solve(l70, "FP8", H200, 32);
assert("H200 @32K n30", s.n30, 4.7, 0.15, "路");          // 文章 4.7 → 取整 5
assert("H200 @32K n60", s.n60, 0.85, 0.2, "路");          // 文章 1
assert("H200 @32K 瓶颈 @30 = C", s.bt30, "C", null);

s = C.solve(l70, "FP8", B300, 8);
assert("B300 @8K n30", s.n30, 68.0, 1.0, "路");           // 文章 68
assert("B300 @8K n60", s.n60, 24.1, 1.0, "路");           // 文章 24

s = C.solve(l70, "FP8", B300, 32);
assert("B300 @32K n30（文章未取整 17.1）", s.n30, 17.09, 0.3, "路");
assert("B300 @32K n60", s.n60, 6.05, 0.3, "路");          // 文章 6

s = C.solve(l70, "FP8", C910, 8);
assert("910C @8K n30", s.n30, 14.4, 0.8, "路");           // 文章 14（时延上限）
assert("910C @8K 瓶颈 = B", s.bt30, "B", null);

s = C.solve(l70, "FP8", C910, 32);
assert("910C @32K n30", s.n30, 3.5, 0.3, "路");           // 文章 3
assert("910C @32K 瓶颈 = B", s.bt30, "B", null);

assert("910C 单流 = 3200/70", C.singleTps(l70, "FP8", C910), 45.7, 0.2, " tok/s"); // 文章 46
assert("H200 单流 = 4800/70", C.singleTps(l70, "FP8", H200), 68.6, 0.2, " tok/s");
assert("B300 单流 = 8000/70", C.singleTps(l70, "FP8", B300), 114.3, 0.2, " tok/s");

console.log("\n======= 三、新模型复算（KV 结构来自 config/技术报告）=======");
// Qwen3-235B：KV = 94×4×128×2×2 = 96,256B = 0.096MB … 文章口径 0.19 是 GQA 4头×128 ×2 ×94 层?
// 文章写 0.19 MB/token（GQA 4 头 ×128），其口径 = 2×94×4×128×2B = 192,512B；我们按公式 2*L*kvH*hd*2B 一致 → 0.1925
kv = C.kvOf(M("qwen235"));
assert("Qwen3-235B 每 token KV", kv.perTok / 1e6, 0.1925, 0.003, "MB");
s = C.solve(M("qwen235"), "NVFP4", B300, 32);
assert("Qwen3-235B · B300 · NVFP4 @32K n30", s.n30, 21.2, 2.5, "路");   // 文章 21
s = C.solve(M("qwen235"), "FP8", B300, 32);
console.log(`         (FP8 @32K n30 = ${f(s.n30, 1)} 路 — 文章「约 2 路」)`);

// DeepSeek-V4.1-Flash：CED+CSA2 官方口径 890B/token（历史版本已退役，文章锚点在页面 fixture 内联复算）
kv = C.kvOf(M("dsv41f"));
assert("DSV4.1-Flash 每 token KV（官方 890B）", kv.perTok, 890, 1, " B");
s = C.solve(M("dsv41f"), "FP8+FP4", B300, 32);
assert("DSV4.1-Flash 权重 FP8+FP4", C.weightGB(M("dsv41f"), "FP8+FP4"), 510, 0.1, "GB");
console.log(`         (DSV4.1F B300×${s.load} @32K n30 = ${f(s.n30, 0)} 路 → 页面显示 >999 截断：调度上限未计，见 ⑦)`);

// 文章历史锚点（退役模型结构回归，仅验证公式）：MLA 61×576×2B = 70,272B = 0.0703MB；B300×3 池 88.6GB
const v3Ref = { totalB: 671, actB: 37, type: "moe", wsB: { FP8: 671 }, kv: { type: "MLA", L: 61, lat: 512, rope: 64 } };
kv = C.kvOf(v3Ref);
assert("历史 MLA 结构回归 · 每 token KV", kv.perTok / 1e6, 0.0703, 0.002, "MB");
s = C.solve(v3Ref, "FP8", B300, 32);
assert("历史 MLA 结构回归 · B300×3 KV 池", s.pool, 88.6, 0.1, "GB");     // 文章 83（粗）
console.log(`         (V3 组级 n30@32K = ${f(s.n30, 1)} 路 — 文章 36)`);

// Kimi K3：24 MLA 层×576×2B=27,648B/token，69 KDA 层每路 429MB 固定
kv = C.kvOf(M("k3"));
assert("K3 每 token KV（仅 MLA 部分）", kv.perTok, 27648, 1, " B");
assert("K3 每路固定状态", kv.fixedMB, 429, 1, " MB");
// K3 @32K：SeqKV=0.856GB + 0.429 = 1.285GB/路；16×H200 池 = 16×120.9−1561 = 373GB → 290 路 容量；
// 时延：等效读取 = 1561×(104/2800 + 0.3×(1−104/2800)) = 1561×0.323 = 504GB
// n30 = (4800×16/30 − 504)/0.856 = 1661 路?? → capped by 时延公式 N=(bw/v−W)/KV
// K3 官方口径 16×H200（非最小装卡组）：池 = 16×120.9−1561 = 373GB → 容量 ≈290 路
let s16 = C.solveN(M("k3"), "QAT-MXFP4", H200, 32, 16);
console.log(`         K3 官方 16×H200 @32K：n30 = ${f(s16.n30, 0)} 路 / 池 ${f(s16.pool, 0)}GB（官方 1M 上下文口径 40-45 路为含视觉塔+启动缓冲的实测，本表 32K 短上下文理论值更高属预期）`);
console.log(`         K3 最小装卡组 ${C.loadCards(M("k3"), "QAT-MXFP4", H200)} 卡 @32K n30 = ${f(C.solve(M("k3"), "QAT-MXFP4", H200, 32).n30, 1)} 路（表B 口径：刚好装下时 KV 池极小）`);

// DeepSeek-V4：9.8KB/token（vLLM 9.62GiB/1M 折 bf16）
kv = C.kvOf(M("dsv4"));
assert("DSV4 每 token KV", kv.perTok, 9842, 5, " B");
s = C.solve(M("dsv4"), "QAT-MXFP4", B300, 32);
console.log(`         DSV4 B300×2（${s.load}卡）@32K n30 = ${f(s.n30, 0)} 路`);

// GLM-5.3（与前代同底座）：MLA 78×576×2B = 89,856B = 0.0899MB
kv = C.kvOf(M("glm53"));
assert("GLM-5.3 每 token KV（MLA 存储口径）", kv.perTok / 1e6, 0.0899, 0.002, "MB");
console.log(`         GLM-5.3 FP8 装 8×H200：load=${C.loadCards(M("glm53"), "FP8", H200)}（官方口径 8 卡 ✓，实算 7 向上取 TP 度 2 幂后 8）`);

console.log("\n======= 四、表A 行扫（装卡数异常值）=======");
C.CARDS.forEach(card => {
  const bad = [];
  C.MODELS.forEach(mm => {
    mm.quants.forEach(q => {
      const w = C.weightGB(mm, q);
      const load = C.loadCards(mm, q, card);
      if (load > 64) bad.push(`${mm.name}/${q}=${load}卡`);
    });
  });
  console.log(`${card.label}: ${bad.length ? bad.join("  ") : "全部 ≤64 卡"}`);
});

console.log("\n======= 五、JS 语法与 DOM 自检 ========");
// 提取渲染层 script（最后一个 <script> 无 src）并语法检查
const scripts = html.match(/<script>([\s\S]*?)<\/script>/g) || [];
let syntaxOK = true;
scripts.forEach((sc, i) => {
  const code = sc.replace(/<\/?script>/g, "");
  try { new Function(code); } catch (e) {
    syntaxOK = false;
    console.log(`script[${i}] 语法错误: ${e.message}`);
  }
});
console.log(syntaxOK ? "  PASS  所有内联 script 语法检查通过" : "  FAIL  存在语法错误");

console.log(`\n========== 结果：${fails === 0 ? "全部通过 ✓" : fails + " 项失败 ✗"} ==========`);
process.exit(fails === 0 ? 0 : 1);
