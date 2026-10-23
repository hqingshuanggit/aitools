/**
 * 站点导航（所有页面共用 · 单一注册处）
 * ------------------------------------------------------------------
 * 新增页面两步：
 *   1. 在下方 PAGES 数组追加一条 { href:"文件名.html", label:"菜单名" }；
 *   2. 在新页面 <div class="wrap"> 之后插入：<script src="site-nav.js"></script>
 *
 * 预留未上线入口：追加 { href:"", label:"页面名", on:false }，
 * 前端显示为灰色「建设中」，上线时补上 href 并去掉 on:false 即可。
 *
 * 注意：文件改名后需同步修改 href；本文件与各页面需放在同一目录。
 */
(function () {
  "use strict";

  var PAGES = [
    { href: "AI芯片参数速查表.html", label: "AI 芯片参数速查表" },
    { href: "算力集群配置模型.html", label: "算力集群配置模型" },
    { href: "算力电力速查.html", label: "算力电力速查" }
    /* —— 预留入口示例（上线时补 href、去掉 on:false）——
    , { href: "", label: "成本测算模型", on: false }
    , { href: "", label: "机房检查清单", on: false }
    */
  ];

  var BRAND = "算力工具箱"; /* 左侧站点名，改这里即可全局生效 */

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
                     .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /* 当前页识别：取 URL 末段文件名（兼容 file:// 与 http(s)://，含中文名转码） */
  var cur = "";
  try { cur = decodeURIComponent(location.pathname.split("/").pop() || "").toLowerCase(); }
  catch (e) { cur = (location.pathname.split("/").pop() || "").toLowerCase(); }

  var items = PAGES.map(function (p) {
    var href = String(p.href || "").trim();
    if (href && href.toLowerCase() === cur) {
      return '<span class="sn-item sn-cur" title="当前页面">' + esc(p.label) + "</span>";
    }
    if (p.on === false || !href) {
      return '<span class="sn-item sn-off" title="建设中 · 敬请期待">' + esc(p.label) +
             "<em>建设中</em></span>";
    }
    return '<a class="sn-item" href="' + esc(href) + '">' + esc(p.label) + "</a>";
  }).join("");

  var css = [
    "#site-nav{display:flex;align-items:center;flex-wrap:wrap;gap:8px;",
    "background:#fff;border:1px solid #e3e6ea;border-radius:10px;",
    "padding:9px 14px;margin:0 0 12px;font-size:13px;",
    'font-family:-apple-system,BlinkMacSystemFont,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",system-ui,sans-serif}',
    "#site-nav .sn-brand{display:inline-flex;align-items:center;gap:7px;font-weight:600;",
    "color:#1f2328;font-size:12.5px;letter-spacing:.5px;margin-right:6px;white-space:nowrap}",
    "#site-nav .sn-brand .sn-dot{width:8px;height:8px;border-radius:2px;background:#1f6feb;flex:none}",
    "#site-nav .sn-item{display:inline-flex;align-items:center;gap:5px;padding:4px 12px;",
    "border-radius:20px;border:1px solid transparent;white-space:nowrap;text-decoration:none;",
    "cursor:pointer;color:#5b6570;line-height:1.4;transition:background .15s,color .15s,border-color .15s}",
    "#site-nav a.sn-item:hover{color:#1f6feb;border-color:#a8c7f5;background:#eaf2fe;text-decoration:none}",
    "#site-nav .sn-cur{background:#1f6feb;color:#fff;font-weight:600;cursor:default}",
    "#site-nav .sn-off{color:#b6bcc4;cursor:default;background:#f6f7f9}",
    "#site-nav .sn-off em{font-style:normal;font-size:10px;color:#c2c8cf;",
    "border:1px solid #e3e6ea;border-radius:3px;padding:0 4px;line-height:1.5}",
    "@media print{#site-nav{display:none}}"
  ].join("");

  var box = document.createElement("div");
  box.id = "site-nav";
  box.innerHTML =
    "<style>" + css + "</style>" +
    '<span class="sn-brand"><span class="sn-dot"></span>' + esc(BRAND) + "</span>" +
    items;

  /* 插到本 <script> 标签之前；script 置于各页 .wrap 容器开头，导航即与正文同宽对齐 */
  var me = document.currentScript;
  if (me && me.parentNode) {
    me.parentNode.insertBefore(box, me);
  } else {
    var root = document.body || document.documentElement;
    root.insertBefore(box, root.firstChild);
  }
})();
