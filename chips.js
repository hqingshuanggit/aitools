window.CHIP_DB = {
  "meta": {
    "schema": "2.0",
    "updated": "2026-10-01",
    "units": {
      "perf": "TFLOPS（10^12 FLOP/s）；int8 记 TOPS 数值，展示为 TOPS",
      "bw": "GB/s（显存带宽与卡间互联）；网卡速率为 Gbps",
      "power": "W 或 kW",
      "weight": "kg",
      "u": "U（1U = 44.45 mm）",
      "area": "m²",
      "load": "kN/m²"
    },
    "disclaimer": "参数整理自公开规格与厂商文档；同型号存在多来源冲突者已标注 confidence 与 perfNote。正式选型、采购与施工图设计必须以厂商最新 datasheet 及书面确认为准。",
    "sources": [
      {
        "id": "nv-dgx-h100",
        "ref": "NVIDIA DGX H100 / SuperPOD 部署文档",
        "level": "official"
      },
      {
        "id": "nv-dgx-h200",
        "ref": "NVIDIA DGX H200 部署文档",
        "level": "official"
      },
      {
        "id": "nv-dgx-a100",
        "ref": "NVIDIA DGX A100 部署文档",
        "level": "official"
      },
      {
        "id": "nv-gb200",
        "ref": "NVIDIA GB200 NVL72 参考架构",
        "level": "vendor"
      },
      {
        "id": "nv-b300",
        "ref": "NVIDIA B300 / Blackwell Ultra 公开资料",
        "level": "vendor"
      },
      {
        "id": "nv-gb300",
        "ref": "NVIDIA GB300 NVL72 公开资料",
        "level": "vendor"
      },
      {
        "id": "huawei-a800t-a2",
        "ref": "华为 Atlas 800T A2 产品文档",
        "level": "vendor"
      },
      {
        "id": "huawei-a800t-a3",
        "ref": "华为 Atlas 800T A3 产品文档",
        "level": "vendor"
      },
      {
        "id": "sheet-local",
        "ref": "AI算力硬件速查表.html（本项目内整理表）",
        "level": "vendor"
      },
      {
        "id": "3rd",
        "ref": "第三方媒体与实测汇总（存在口径冲突者）",
        "level": "thirdparty"
      }
    ]
  },
  "cards": [
    {
      "id": "A100_SXM_80",
      "vendor": "NVIDIA",
      "name": "A100 80GB SXM4",
      "arch": "Ampere / TSMC 7nm",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": 400,
      "tdpMax": null,
      "memGB": 80,
      "memType": "HBM2e",
      "memBW": 2039,
      "perf": {
        "fp64": 9.7,
        "fp32": 19.5,
        "tf32": 156,
        "fp16": 312,
        "bf16": 312,
        "fp8": null,
        "int8": 624
      },
      "perfBasis": "dense",
      "scaleUp": {
        "type": "NVLink3",
        "bwGBs": 600
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "受限/EOL",
      "supply": "境外",
      "confidence": "official",
      "perfNote": "Ampere 无 FP8；TF32/FP16 为 Tensor Core 稠密值（含稀疏为 312/624）",
      "notes": "已停产，市场以二手/租赁为主；无现行对华限制但已非新建算力首选。二手卡需关注 HBM 健康度与剩余质保。",
      "techNote": "现存装机量大，常用于教学、小规模微调与推理兜底。",
      "risks": [
        "出口管制与合规"
      ],
      "srcIds": []
    },
    {
      "id": "L40",
      "vendor": "NVIDIA",
      "name": "L40",
      "arch": "Ada AD102 / TSMC 4N",
      "process": null,
      "formFactor": null,
      "cls": "infer",
      "tdp": 300,
      "tdpMax": null,
      "memGB": 48,
      "memType": "GDDR6 ECC",
      "memBW": 864,
      "perf": {
        "fp64": null,
        "fp32": 90.5,
        "tf32": 181,
        "fp16": 181,
        "bf16": 181,
        "fp8": null,
        "int8": 362
      },
      "perfBasis": "dense",
      "scaleUp": {
        "type": null,
        "bwGBs": 64
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "量产出货",
      "supply": "境外",
      "confidence": "official",
      "perfNote": "无 FP8 Transformer Engine；INT8 362 TOPS 为稠密值（速查表 v1 的 724 为含稀疏口径）",
      "notes": "无 FP8 Transformer Engine，多卡张量并行需走 PCIe（比 NVLink 慢一个量级）。供应宽松，租赁市场常见，适合 transitional 采购。",
      "techNote": "图形+AI 双功能，含 RT Core，可做渲染/Omniverse/合成数据。",
      "risks": [],
      "srcIds": []
    },
    {
      "id": "L40S",
      "vendor": "NVIDIA",
      "name": "L40S",
      "arch": "Ada AD102 / TSMC 4N",
      "process": null,
      "formFactor": null,
      "cls": "infer",
      "tdp": 350,
      "tdpMax": null,
      "memGB": 48,
      "memType": "GDDR6 ECC",
      "memBW": 864,
      "perf": {
        "fp64": null,
        "fp32": 91.6,
        "tf32": 183,
        "fp16": 362,
        "bf16": 362,
        "fp8": 733,
        "int8": 733
      },
      "perfBasis": "dense",
      "scaleUp": {
        "type": null,
        "bwGBs": 64
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "量产出货",
      "supply": "境外",
      "confidence": "official",
      "perfNote": "无 NVLink，多卡并行走 PCIe Gen4 x16",
      "notes": "L40 的 AI 增强版：解锁 Transformer Engine，FP8 吞吐翻倍。风冷双槽即可部署，是 350W 级风冷机房的典型上限型号。",
      "techNote": "TP=2 张量并行相对单机推理损失约 35–55%（PCIe 瓶颈）；模型 > 48GB 时应换 H100/H200 而非堆两张 L40S。",
      "risks": [],
      "srcIds": []
    },
    {
      "id": "H100_SXM",
      "vendor": "NVIDIA",
      "name": "H100 SXM5 80GB",
      "arch": "Hopper / TSMC 4N",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": 700,
      "tdpMax": null,
      "memGB": 80,
      "memType": "HBM3",
      "memBW": 3350,
      "perf": {
        "fp64": 33.5,
        "fp32": 66.9,
        "tf32": 494.7,
        "fp16": 989.4,
        "bf16": 989.4,
        "fp8": 1979,
        "int8": 1979
      },
      "perfBasis": "dense",
      "scaleUp": {
        "type": "NVLink4",
        "bwGBs": 900
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "受限/EOL",
      "supply": "境外",
      "confidence": "official",
      "perfNote": "Hopper 官方稠密值；含稀疏则各精度 ×2。旧版模型该行 fp16=1513、tf32=756、fp8=3026 口径来源不明，已按 datasheet 修正",
      "notes": "对华出口管制品类，正规渠道不可直采；市场上所谓 “现货” 多为灰色渠道，存在固件、质保与合规三重风险，不建议用于核心项目。",
      "techNote": "（另有 H100 NVL 94GB 版本，3.9 TB/s；PCIe 版本性能指标以 NVIDIA 官方为准）",
      "risks": [
        "出口管制与合规"
      ],
      "srcIds": []
    },
    {
      "id": "H800_SXM_80",
      "vendor": "NVIDIA",
      "name": "H800 80GB SXM5（中国版）",
      "arch": "Hopper / TSMC 4N",
      "process": null,
      "formFactor": "SXM",
      "cls": "train",
      "tdp": 700,
      "tdpMax": null,
      "memGB": 80,
      "memType": "HBM3",
      "memBW": 3350,
      "perf": {
        "fp64": 33.5,
        "fp32": 66.9,
        "tf32": 494.7,
        "fp16": 989.4,
        "bf16": 989.4,
        "fp8": 1979,
        "int8": 1979
      },
      "perfBasis": "dense",
      "scaleUp": {
        "type": "NVLink4",
        "bwGBs": 400
      },
      "scaleOut": {
        "type": "IB/RoCE",
        "note": null
      },
      "status": "受限/EOL",
      "supply": "境外",
      "confidence": "vendor",
      "perfNote": "算力规格与 H100 SXM 一致（官方稠密值）；差异在互联：NVLink 带宽由 900 降至 400 GB/s。NVLink 削减会明显影响单机内集合通信，大规模训练更依赖 Scale-out 网络",
      "notes": "H100 的中国特供版，2023 年前国内新建训练集群主力型号。现已列入出口管制，新增采购不可得，存量以维保与二手扩容为主。",
      "techNote": "单机 8 卡内集合通信效率低于同规模 H100；实测大集群训练吞吐通常低于 H100。选型时不宜直接按 H100 的算力指标折算产能。",
      "risks": [
        "出口管制与合规"
      ],
      "srcIds": []
    },
    {
      "id": "H200_SXM",
      "vendor": "NVIDIA",
      "name": "H200 SXM",
      "arch": "Hopper / TSMC 4N",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": 700,
      "tdpMax": null,
      "memGB": 141,
      "memType": "HBM3e",
      "memBW": 4800,
      "perf": {
        "fp64": 33.5,
        "fp32": 66.9,
        "tf32": 494.7,
        "fp16": 989.4,
        "bf16": 989.4,
        "fp8": 1979,
        "int8": 1979
      },
      "perfBasis": "dense",
      "scaleUp": {
        "type": "NVLink4",
        "bwGBs": 900
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "受限/EOL",
      "supply": "境外",
      "confidence": "official",
      "perfNote": "与 H100 同算力，显存容量与带宽翻倍",
      "notes": "与 H100 同算力但显存翻倍，是 decode 型推理性价比标杆；同样受管制。若只能选国产对标，优先考虑昇腾 910C/950DT 与摩尔线程 S5000 实测对比。",
      "techNote": "141GB/4.8TB/s 的组合长期是推理选型的 “甜点” 参照线。",
      "risks": [
        "出口管制与合规"
      ],
      "srcIds": []
    },
    {
      "id": "H20",
      "vendor": "NVIDIA",
      "name": "H20（中国版）",
      "arch": "Hopper / TSMC 4N",
      "process": null,
      "formFactor": null,
      "cls": "infer",
      "tdp": 400,
      "tdpMax": null,
      "memGB": 96,
      "memType": "HBM3",
      "memBW": 4000,
      "perf": {
        "fp64": null,
        "fp32": 44,
        "tf32": 74,
        "fp16": 148,
        "bf16": 148,
        "fp8": 296,
        "int8": 296
      },
      "perfBasis": "dense",
      "scaleUp": {
        "type": "NVLink4",
        "bwGBs": 900
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "受限/EOL",
      "supply": "境外",
      "confidence": "vendor",
      "perfNote": "中国版型号，算力大幅削减、保留大显存与高带宽；不同来源 FP16 有 74/148 TFLOPS 两种口径，此处取厂商稠密值",
      "notes": "算力被大幅削减但保留大显存/高带宽。对华政策多次反复（一度停供），采购需按政策窗口动态调整，供应链不确定性最高的一档。",
      "techNote": "国产对标品：昆仑芯 M100、燧原 L600、昇腾 950PR 均以超越 H20 为宣传锚点。",
      "risks": [],
      "srcIds": []
    },
    {
      "id": "B200_SXM",
      "vendor": "NVIDIA",
      "name": "B200",
      "arch": "Blackwell / TSMC 4NP 双die",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": 1000,
      "tdpMax": null,
      "memGB": 192,
      "memType": "HBM3e",
      "memBW": 8000,
      "perf": {
        "fp64": 40,
        "fp32": 75,
        "tf32": null,
        "fp16": 2250,
        "bf16": 2250,
        "fp8": 4500,
        "int8": 4500
      },
      "perfBasis": "dense",
      "scaleUp": {
        "type": "NVLink5",
        "bwGBs": 1800
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "受限/EOL",
      "supply": "境外",
      "confidence": "vendor",
      "perfNote": "Blackwell 稠密值；FP4 约 9 PFLOPS（含稀疏 18 PFLOPS）。FP64 已大幅削弱，HPC 场景需单独评估",
      "notes": "SXM 形态需高密机柜；DGX B200 单机 GPU 可用显存标称 180GB/卡（8 卡 1440GB）。属管制品类，国内正规供给受限。",
      "techNote": "NV-HBI 片间 10 TB/s；FP64 大幅削弱（约 37 TFLOPS），HPC 场景需单独评估。",
      "risks": [
        "出口管制与合规"
      ],
      "srcIds": []
    },
    {
      "id": "GB200_NVL72",
      "vendor": "NVIDIA",
      "name": "GB200 NVL72（机架）",
      "arch": "Grace + Blackwell 双die",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": 1200,
      "tdpMax": null,
      "memGB": 192,
      "memType": "HBM3e",
      "memBW": 8000,
      "perf": {
        "fp64": 40,
        "fp32": 75,
        "tf32": null,
        "fp16": 2250,
        "bf16": 2250,
        "fp8": 4500,
        "int8": 4500
      },
      "perfBasis": "dense",
      "scaleUp": {
        "type": "NVLink5",
        "bwGBs": 1800
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "受限/EOL",
      "supply": "境外",
      "confidence": "vendor",
      "perfNote": "整机柜型号，单卡参数同 B200（NVLink5 域内 130 TB/s 聚合）；机架整体 120 kW 级，强制液冷",
      "notes": "整机架交付：72 GPU + 36 Grace，必配液冷。交付周期长且需整机房土建配套，采购前先过机房电力/承重/水路评审。",
      "techNote": "机架级指标：FP4 约 0.72 EFLOPS 稠密 / 1.44 EFLOPS 稀疏；NVLink5 域 130 TB/s。",
      "risks": [],
      "srcIds": []
    },
    {
      "id": "B300_SXM",
      "vendor": "NVIDIA",
      "name": "B300（Blackwell Ultra）",
      "arch": "Blackwell Ultra / TSMC 4NP",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": 1100,
      "tdpMax": 1400,
      "memGB": 288,
      "memType": "HBM3e",
      "memBW": 8000,
      "perf": {
        "fp64": 40,
        "fp32": 80,
        "tf32": null,
        "fp16": 2250,
        "bf16": 2250,
        "fp8": 4500,
        "int8": null
      },
      "perfBasis": "dense",
      "scaleUp": {
        "type": "NVLink5",
        "bwGBs": 1800
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "量产出货",
      "supply": "境外",
      "confidence": "thirdparty",
      "perfNote": "Blackwell Ultra 与 B200 同代同算力：FP16/BF16 稠密 2250 TFLOPS、FP8 4500 TFLOPS（Ultra 主要提升在 FP4 与显存容量）；INT8 未正式公布；风冷 1100 W 与液冷 1400 W 两个 bin，下单须写明",
      "notes": "当前 Blackwell 顶配单卡。注意 1100W（如 DGX B300 风冷）与 1400W 液冷两个 bin，下单必须写明 bin 与冷却形态，否则整机厂商会用不同 SKU 替代。",
      "techNote": "attention 层吞吐约 2× B200；NVFP4 相对 FP8 显存占用降约 1.8×。媒体报道 lead time 已从 36 周回落至约 18 周（待核）。",
      "risks": [],
      "srcIds": []
    },
    {
      "id": "GB300_NVL72",
      "vendor": "NVIDIA",
      "name": "GB300 NVL72（机架）",
      "arch": "Grace + Blackwell Ultra",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": 1200,
      "tdpMax": null,
      "memGB": 288,
      "memType": "HBM3e",
      "memBW": 8000,
      "perf": {
        "fp64": 40,
        "fp32": 80,
        "tf32": null,
        "fp16": 2250,
        "bf16": 2250,
        "fp8": 4500,
        "int8": null
      },
      "perfBasis": "dense",
      "scaleUp": {
        "type": "NVLink5",
        "bwGBs": 1800
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "量产出货",
      "supply": "境外",
      "confidence": "vendor",
      "perfNote": "整机柜型号，单卡参数同 B300（FP16/BF16 稠密 2250 TFLOPS、FP8 4500 TFLOPS，INT8 未正式公布）；机架整体约 120–140 kW，强制液冷",
      "notes": "机架 = 72×B300 + 36×Grace，全液冷。融资租赁与整机托管形态更易落地（规避自有机房改造）。",
      "techNote": "机架级：FP4 约 1.1 EFLOPS 稠密 / 1.44 EFLOPS 稀疏；FP8 720 PFLOPS；NVLink 域 130 TB/s。",
      "risks": [],
      "srcIds": []
    },
    {
      "id": "RUBIN_R200",
      "vendor": "NVIDIA",
      "name": "Rubin R200 / Vera Rubin NVL144",
      "arch": "Rubin / TSMC 3nm 双die+I/O die",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": 1800,
      "tdpMax": null,
      "memGB": 288,
      "memType": "HBM4",
      "memBW": 20500,
      "perf": {
        "fp64": 25,
        "fp32": null,
        "tf32": null,
        "fp16": null,
        "bf16": null,
        "fp8": 8300,
        "int8": null
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": "NVLink6",
        "bwGBs": 3600
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "路线图",
      "supply": "境外",
      "confidence": "thirdparty",
      "perfNote": null,
      "notes": "厂商发布会口径，不同来源对单卡 HBM 容量（144 或 288GB）与 FP4 峰值（25 或 50 PFLOPS）存在冲突，且暂未获第三方实测验证。采购排期按 2027 年规模化供应做基准更稳妥。",
      "techNote": "NVLink6 3.6 TB/s/卡；NVL144 机架标称 3.6 EFLOPS FP4 推理、约 20.7TB HBM4、260 TB/s NVLink 聚合。同代 Rubin CPX（128GB GDDR7）主打长上下文。",
      "risks": [
        "参数口径待核"
      ],
      "srcIds": []
    },
    {
      "id": "MI300X",
      "vendor": "AMD",
      "name": "MI300X",
      "arch": "CDNA3 / 5nm+6nm",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": 750,
      "tdpMax": null,
      "memGB": 192,
      "memType": "HBM3",
      "memBW": 5300,
      "perf": {
        "fp64": 81.7,
        "fp32": 163.4,
        "tf32": null,
        "fp16": 1307,
        "bf16": 1307,
        "fp8": 2614,
        "int8": 2614
      },
      "perfBasis": "dense",
      "scaleUp": {
        "type": "Infinity Fabric",
        "bwGBs": 896
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "量产出货",
      "supply": "境外",
      "confidence": "official",
      "perfNote": "CDNA3 官方值",
      "notes": "国际第二货源基准；Azure/Oracle/Meta 已规模部署。ROCm 生态是落地门槛，需实测目标模型吞吐。",
      "techNote": null,
      "risks": [
        "软件生态"
      ],
      "srcIds": []
    },
    {
      "id": "MI325X",
      "vendor": "AMD",
      "name": "MI325X",
      "arch": "CDNA3 / 5nm+6nm",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": 1000,
      "tdpMax": null,
      "memGB": 256,
      "memType": "HBM3e",
      "memBW": 6000,
      "perf": {
        "fp64": 81.7,
        "fp32": 163.4,
        "tf32": null,
        "fp16": 1307,
        "bf16": 1307,
        "fp8": 2614,
        "int8": 2614
      },
      "perfBasis": "dense",
      "scaleUp": {
        "type": "Infinity Fabric",
        "bwGBs": 1000
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "量产出货",
      "supply": "境外",
      "confidence": "official",
      "perfNote": "MI300X 显存升级版",
      "notes": "MI300X 的显存升级版，带宽提升有限，属于 “大容量” 路线。",
      "techNote": null,
      "risks": [],
      "srcIds": []
    },
    {
      "id": "MI355X",
      "vendor": "AMD",
      "name": "MI355X",
      "arch": "CDNA4 / TSMC 3nm (N3P)",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": 1400,
      "tdpMax": null,
      "memGB": 288,
      "memType": "HBM3E",
      "memBW": 8000,
      "perf": {
        "fp64": 10.1,
        "fp32": null,
        "tf32": null,
        "fp16": 2500,
        "bf16": 2500,
        "fp8": 5000,
        "int8": 10000
      },
      "perfBasis": "dense",
      "scaleUp": {
        "type": "Infinity Fabric",
        "bwGBs": 1075
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "量产出货",
      "supply": "境外",
      "confidence": "vendor",
      "perfNote": "CDNA4 官方稠密口径 FP16 2500 TFLOPS（速查表 v1 的 2300 已订正）；液冷必选；FP4 20 PFLOPS 为含稀疏口径",
      "notes": "2026 年出货主力：288GB HBM3E 是当前少数可放超大 MoE 的单卡方案；液冷必选。Oracle 已部署超 13 万卡规模集群。",
      "techNote": "FP4/FP6 为 CDNA4 新增，20 PFLOPS FP4 为厂商含稀疏口径。",
      "risks": [
        "参数口径待核"
      ],
      "srcIds": []
    },
    {
      "id": "MI455X",
      "vendor": "AMD",
      "name": "MI455X / MI400 系列（Helios）",
      "arch": "CDNA5 / TSMC 2nm",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": 1600,
      "tdpMax": null,
      "memGB": 432,
      "memType": "HBM4",
      "memBW": 19600,
      "perf": {
        "fp64": 40,
        "fp32": null,
        "tf32": null,
        "fp16": null,
        "bf16": null,
        "fp8": 20000,
        "int8": null
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": "UALink",
        "bwGBs": 300
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "小批量/爬坡",
      "supply": "境外",
      "confidence": "thirdparty",
      "perfNote": null,
      "notes": "厂商发布值，尚未第三方实机验证；Helios 机架 72×MI455X + 18×EPYC Venice，号称 2.9 EF FP4 推理 / 1.4 EF FP8 训练。Oracle/OpenAI/Anthropic/Meta 已签部署意向。",
      "techNote": "同系列另有 MI440X（企业级风冷 8 卡机箱）与 MI430X（HPC/主权 AI，原生 FP64）。",
      "risks": [],
      "srcIds": []
    },
    {
      "id": "ASCEND_910",
      "vendor": "华为昇腾",
      "name": "Ascend 910（初代）",
      "arch": "达芬奇 / TSMC 7nm",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": 310,
      "tdpMax": null,
      "memGB": 32,
      "memType": "HBM2",
      "memBW": 400,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": 256,
        "bf16": null,
        "fp8": null,
        "int8": 512
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": "HCCS",
        "bwGBs": 240
      },
      "scaleOut": {
        "type": "IB/RoCE",
        "note": null
      },
      "status": "受限/EOL",
      "supply": "国产",
      "confidence": "vendor",
      "perfNote": "初代产品，已停产",
      "notes": "历史基准，已停产，存量用于老旧集群扩容 parts 替换。",
      "techNote": null,
      "risks": [],
      "srcIds": []
    },
    {
      "id": "ASCEND_910B",
      "vendor": "华为昇腾",
      "name": "Ascend 910B",
      "arch": "达芬奇 / SMIC N+1 (7nm级)",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": 350,
      "tdpMax": null,
      "memGB": 64,
      "memType": "HBM2e",
      "memBW": 1600,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": 320,
        "bf16": null,
        "fp8": null,
        "int8": 640
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": "HCCS",
        "bwGBs": 400
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "量产出货",
      "supply": "国产",
      "confidence": "thirdparty",
      "perfNote": "不同来源 FP16 有 313/320/376 TFLOPS、带宽 1.2/1.6 TB/s 多种口径，按型号后缀 B1–B4 区分；官方未公开 BF16/FP8 口径",
      "notes": "国产份额最大的存量主力（Atlas 800T A2）。不同来源对 FP16（313/320/376 TFLOPS）与带宽（1.2/1.6 TB/s）口径不一，以型号后缀（B1/B2/B3/B4）区分，下单须写清。",
      "techNote": "弱点：低精度（FP8）能力弱，HBM 容量偏小，做大模型训练需依赖集群规模。",
      "risks": [
        "参数口径待核"
      ],
      "srcIds": []
    },
    {
      "id": "ASCEND_910C",
      "vendor": "华为昇腾",
      "name": "Ascend 910C",
      "arch": "达芬奇 / SMIC N+2 双die",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": 600,
      "tdpMax": null,
      "memGB": 128,
      "memType": "HBM2e/HBM3",
      "memBW": 3200,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": 640,
        "bf16": null,
        "fp8": null,
        "int8": 1280
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": "MatrixLink",
        "bwGBs": 784
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "量产出货",
      "supply": "国产",
      "confidence": "thirdparty",
      "perfNote": "FP16 有 640/800 TFLOPS 两种口径，此处取保守下界；INT8 按 FP16 的 2 倍取 1280 TOPS（第三方 1600 TOPS 口径为 2.5 倍关系，已下调）；官方路线图未给 FP8；带宽 1.6/3.2 TB/s 口径冲突，取厂商 3.2 TB/s；TDP 600 W 为单芯口径，双芯整卡另有 1000 W 说法，采购须书面确认",
      "notes": "当前国内训练主力。产能与良率是主要瓶颈（第三方估计良率约 30%）；华为已明确优先保国内需求，2026 不做海外规模扩张。获取方式为项目报备 + 配额排程，非现货市场逻辑。",
      "techNote": "推理性能约为 H100 的 60%（DeepSeek 2025 实测口径）；CloudMatrix 384 超节点靠规模而非单卡补性能。",
      "risks": [
        "参数口径待核",
        "产能与交期"
      ],
      "srcIds": []
    },
    {
      "id": "ASCEND_950PR",
      "vendor": "华为昇腾",
      "name": "Ascend 950PR",
      "arch": "SIMD+SIMT / 自研 HiBL 1.0",
      "process": null,
      "formFactor": null,
      "cls": "infer",
      "tdp": null,
      "tdpMax": null,
      "memGB": 128,
      "memType": "HiBL 1.0",
      "memBW": 1600,
      "perf": {
        "fp64": 2,
        "fp32": null,
        "tf32": null,
        "fp16": null,
        "bf16": null,
        "fp8": 1000,
        "int8": null
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": "2.0",
        "bwGBs": 2000
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "量产出货",
      "supply": "国产",
      "confidence": "vendor",
      "perfNote": null,
      "notes": "推理优先型号，官方称单卡达 H20 的 ~2.87×。全新自研内存路线（HiBL 1.0），需评估长期备件与内存供应稳定性；已规模商用（Atlas 950 SuperPoD 大规模部署）。",
      "techNote": "支持 FP32/HF32/FP16/BF16/FP8/MXFP8/HiF8/MXFP4；HiF8 为自研精度，不等价于标准 FP8。",
      "risks": [],
      "srcIds": []
    },
    {
      "id": "ASCEND_950DT",
      "vendor": "华为昇腾",
      "name": "Ascend 950DT",
      "arch": "SIMD+SIMT / 自研 HiZQ 2.0",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": null,
      "tdpMax": null,
      "memGB": 144,
      "memType": "HiZQ 2.0",
      "memBW": 4000,
      "perf": {
        "fp64": 2,
        "fp32": null,
        "tf32": null,
        "fp16": null,
        "bf16": null,
        "fp8": 1000,
        "int8": null
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": "2.0",
        "bwGBs": 2000
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "路线图",
      "supply": "国产",
      "confidence": "vendor",
      "perfNote": null,
      "notes": "训练+推理融合型号，首次采用自研 HiZQ 2.0 内存。新建设施按其口径做设计时应预留延期/改版缓冲；据称可互联 8192 卡，1024 卡版本已落地。",
      "techNote": "1024 卡规模理论 FP8 总算力约 1 EFLOPS。",
      "risks": [
        "参数口径待核"
      ],
      "srcIds": []
    },
    {
      "id": "ASCEND_960DT",
      "vendor": "华为昇腾",
      "name": "Ascend 960DT",
      "arch": "SIMD+SIMT（未公开工艺）",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": null,
      "tdpMax": null,
      "memGB": 288,
      "memType": null,
      "memBW": 9600,
      "perf": {
        "fp64": 4,
        "fp32": null,
        "tf32": null,
        "fp16": null,
        "bf16": null,
        "fp8": 2000,
        "int8": null
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": "2.2",
        "bwGBs": 2200
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "路线图",
      "supply": "国产",
      "confidence": "vendor",
      "perfNote": null,
      "notes": "路线图值，发布会口径；新增自研 HiF4（4bit）。仅可作为 2027 年立项参考，不可写入交付承诺。",
      "techNote": "Atlas 960 超节点：业界首个 NPO 近封装光互连，单节点 4096 卡。",
      "risks": [
        "供应尚未落地",
        "参数口径待核"
      ],
      "srcIds": []
    },
    {
      "id": "ASCEND_960PR",
      "vendor": "华为昇腾",
      "name": "Ascend 960PR",
      "arch": "SIMD+SIMT（未公开工艺）",
      "process": null,
      "formFactor": null,
      "cls": "infer",
      "tdp": null,
      "tdpMax": null,
      "memGB": 192,
      "memType": null,
      "memBW": 2400,
      "perf": {
        "fp64": 8,
        "fp32": null,
        "tf32": null,
        "fp16": null,
        "bf16": null,
        "fp8": 2000,
        "int8": null
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": "2.2",
        "bwGBs": 2200
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "路线图",
      "supply": "国产",
      "confidence": "vendor",
      "perfNote": null,
      "notes": "推理型号，FP4 较 FP8 有 4× 提升（自研 HiF4 优势），主打推理单位成本。",
      "techNote": null,
      "risks": [],
      "srcIds": []
    },
    {
      "id": "ASCEND_970",
      "vendor": "华为昇腾",
      "name": "Ascend 970 / 980（规划）",
      "arch": "未公开",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": null,
      "tdpMax": null,
      "memGB": 288,
      "memType": null,
      "memBW": 14400,
      "perf": {
        "fp64": 14,
        "fp32": null,
        "tf32": null,
        "fp16": null,
        "bf16": null,
        "fp8": 3600,
        "int8": null
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": "4.4",
        "bwGBs": 4400
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "路线图",
      "supply": "国产",
      "confidence": "thirdparty",
      "perfNote": null,
      "notes": "官方路线图（τ Scaling Law，一年一代），2029 年 980 数据标注为 preliminary。不可用于任何近期采购决策，仅用于长期机房规划（供电/制冷余量）。",
      "techNote": "即使 980（2029）指标仍低于同期 NVIDIA Rubin/下一代  ——  差距主要靠系统级 scale-up 弥补，代价是高功耗。",
      "risks": [
        "供应尚未落地"
      ],
      "srcIds": []
    },
    {
      "id": "HYGON_K100",
      "vendor": "海光",
      "name": "DCU K100 标准版（深算二号）",
      "arch": "类 CUDA GPGPU / 7nm",
      "process": null,
      "formFactor": null,
      "cls": "hybrid",
      "tdp": 300,
      "tdpMax": null,
      "memGB": 32,
      "memType": "GDDR6",
      "memBW": 520,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": 100,
        "bf16": null,
        "fp8": 300,
        "int8": 200
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": "xGMI",
        "bwGBs": 184
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "量产出货",
      "supply": "国产",
      "confidence": "thirdparty",
      "perfNote": "实测带宽约 520 GB/s，显著低于理论 768 GB/s；显存另有 64GB HBM2e 版本",
      "notes": "存量 CUDA 迁移首选：生态兼容度国产最优， DTK 软件栈。注意实测带宽显著低于理论值（约 520 GB/s），带宽敏感负载需谨慎。",
      "techNote": "不同来源对显存（32GB GDDR6 vs 64GB HBM2e）和 FP16（100 vs 150 TFLOPS）口径冲突，下单须以具体 SKU 的 datasheet 为准。",
      "risks": [
        "参数口径待核",
        "软件生态"
      ],
      "srcIds": []
    },
    {
      "id": "HYGON_K100_AI",
      "vendor": "海光",
      "name": "DCU K100 AI 版 / 深算三号",
      "arch": "7nm + Chiplet",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": 350,
      "tdpMax": null,
      "memGB": 64,
      "memType": "HBM3",
      "memBW": 896,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": 196,
        "bf16": null,
        "fp8": 400,
        "int8": 392
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": "PCIe",
        "bwGBs": 184
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "量产出货",
      "supply": "国产",
      "confidence": "thirdparty",
      "perfNote": null,
      "notes": "命名口径混乱是本厂商最大风险：媒体亦有 “深算三号 = Z100” 且参数 180 TFLOPS FP16 / 32GB / 1.0 TB/s 的互斥说法；另有官方侧表述为 “HBM 带宽 1.8 TB/s”。必须向原厂锁定型号 - 参数 - 文档三者一致的书面确认。",
      "techNote": "优势：x86 协同、类 CUDA 迁移成本最低、信创合规；短板：千卡以上线性度与算子覆盖（公开实测约 0.6）。",
      "risks": [
        "出口管制与合规",
        "参数口径待核",
        "软件生态"
      ],
      "srcIds": []
    },
    {
      "id": "HYGON_Z4",
      "vendor": "海光",
      "name": "深算四号（在研）",
      "arch": "未公开",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": null,
      "tdpMax": null,
      "memGB": null,
      "memType": null,
      "memBW": null,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": null,
        "bf16": null,
        "fp8": null,
        "int8": null
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": null,
        "bwGBs": null
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "路线图",
      "supply": "国产",
      "confidence": "thirdparty",
      "perfNote": null,
      "notes": "厂商规划：性能提升 2×，配第二代 Scale-up 交换芯片 HySwitch2.0（单芯片 192 卡互联，两层网络支撑数万卡）。参数待官方发布。",
      "techNote": "市场预计 DCU 全年出货约 50 万颗（第三方预测，待核）。",
      "risks": [],
      "srcIds": []
    },
    {
      "id": "MLU370_X8",
      "vendor": "寒武纪",
      "name": "MLU370-X8",
      "arch": "MLUarch03 / TSMC 7nm",
      "process": null,
      "formFactor": null,
      "cls": "infer",
      "tdp": 150,
      "tdpMax": null,
      "memGB": 48,
      "memType": "LPDDR5",
      "memBW": 307,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": 96,
        "bf16": null,
        "fp8": null,
        "int8": 256
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": "MLU-Link",
        "bwGBs": 200
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "量产出货",
      "supply": "国产",
      "confidence": "thirdparty",
      "perfNote": null,
      "notes": "性价比之王（公开报价约 1.4–1.5 万元的级别），中小模型推理与视频编解码场景首选；生态活跃度高、vLLM 有插件。适合替换 A100/V100 级推理节点。",
      "techNote": "无 HBM，带宽是硬伤，不适合大模型训练。",
      "risks": [
        "软件生态"
      ],
      "srcIds": []
    },
    {
      "id": "MLU590",
      "vendor": "寒武纪",
      "name": "MLU590（思元590）",
      "arch": "MLUarch05 / 7nm Chiplet",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": 450,
      "tdpMax": null,
      "memGB": 96,
      "memType": "HBM2e",
      "memBW": 2760,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": 256,
        "bf16": null,
        "fp8": null,
        "int8": 512
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": "MLU-Link",
        "bwGBs": null
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "量产出货",
      "supply": "国产",
      "confidence": "thirdparty",
      "perfNote": "官方仅公开 INT8 512 TOPS / FP16 256 TFLOPS / 96GB HBM2e；FP16 另有 314/345 口径",
      "notes": "已进入字节/百度/阿里/腾讯等供应链。官方仅公开 INT8 512 TOPS / FP16 256 TFLOPS / 96GB HBM2e，其余为第三方口径； FP16 有 256/314/345 TFLOPS 三种互斥说法，报价与验收指标需明确出处。",
      "techNote": "能效比约 5 TOPS/W（厂商口径），训练性能约 A100 的 80%（厂商口径）。",
      "risks": [
        "参数口径待核"
      ],
      "srcIds": []
    },
    {
      "id": "MLU690",
      "vendor": "寒武纪",
      "name": "MLU690（思元690）",
      "arch": "MLUarch 双die 封装",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": 400,
      "tdpMax": null,
      "memGB": 192,
      "memType": "HBM3e",
      "memBW": 2400,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": 500,
        "bf16": null,
        "fp8": null,
        "int8": 1024
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": "MLU-Link",
        "bwGBs": 480
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "量产出货",
      "supply": "国产",
      "confidence": "thirdparty",
      "perfNote": "带宽 2.4/3.8 TB/s 口径冲突，取保守值；FP16 500–700 TFLOPS 区间取下界",
      "notes": "国产显存容量最大的在售卡之一，训练场景常被用于对标 H100。各来源参数差异极大（带宽 2.4 vs 3.8 TB/s；互联 480 GB/s vs >890 Gbps），必须索取官方 datasheet 后再做集群设计。",
      "techNote": "2026 上半年寒武纪营收 59.96 亿元（同比 +108%），思元 690 已稳定量产；供应链提示：热销型号现货溢价高，建议长协锁量。",
      "risks": [
        "参数口径待核"
      ],
      "srcIds": []
    },
    {
      "id": "KLX_R480",
      "vendor": "昆仑芯",
      "name": "R480-X8（昆仑芯 2 代）",
      "arch": "XPU-R / 7nm",
      "process": null,
      "formFactor": null,
      "cls": "infer",
      "tdp": 150,
      "tdpMax": null,
      "memGB": 32,
      "memType": "GDDR6",
      "memBW": 512,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": 128,
        "bf16": null,
        "fp8": null,
        "int8": 256
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": "XCCL",
        "bwGBs": 200
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "量产出货",
      "supply": "国产",
      "confidence": "thirdparty",
      "perfNote": null,
      "notes": "二代主力推理卡，风冷可部署，中小互联网推理场景仍有存量采购价值。",
      "techNote": null,
      "risks": [],
      "srcIds": []
    },
    {
      "id": "KLX_P800",
      "vendor": "昆仑芯",
      "name": "P800（昆仑芯 3 代）",
      "arch": "XPU-P/R / 7nm",
      "process": null,
      "formFactor": null,
      "cls": "infer",
      "tdp": 300,
      "tdpMax": null,
      "memGB": 96,
      "memType": "HBM2e/HBM3",
      "memBW": 2400,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": 345,
        "bf16": null,
        "fp8": null,
        "int8": 1280
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": "XCCL",
        "bwGBs": 200
      },
      "scaleOut": {
        "type": "IB/RoCE",
        "note": null
      },
      "status": "量产出货",
      "supply": "国产",
      "confidence": "thirdparty",
      "perfNote": "显存 64/96GB、带宽 2.4/4.0 TB/s 口径冲突，取保守值；FP8 有 320 / 640 TFLOPS 两种口径且 320 低于 FP16(345 TFLOPS)，架构上不成立，故 FP8 置缺（显示「—」），待具体 SKU 确认后补录",
      "notes": "推理场景最成熟的国产卡之一：百度内部 3.2 万卡集群已点亮，2026.04 天池 256 卡超节点点亮（吞吐 +25%、推理效率 +50%）。支持硬件级 vXPU 切分（最小 1% 算力 / 1GB 显存，最多 32 实例），多租户共享算力场景优势明显。",
      "techNote": "注意：显存/带宽/FP8 在不同来源差异极大（64GB vs 96GB、2.4 vs 4 TB/s、FP8 320 vs 640 TFLOPS），务必核对具体 SKU。",
      "risks": [
        "参数口径待核"
      ],
      "srcIds": []
    },
    {
      "id": "KLX_M100",
      "vendor": "昆仑芯",
      "name": "M100（第 4 代，推理）",
      "arch": "全国产供应链",
      "process": null,
      "formFactor": null,
      "cls": "infer",
      "tdp": null,
      "tdpMax": null,
      "memGB": null,
      "memType": null,
      "memBW": null,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": null,
        "bf16": null,
        "fp8": null,
        "int8": null
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": null,
        "bwGBs": null
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "样片/未量产",
      "supply": "国产",
      "confidence": "unknown",
      "perfNote": null,
      "notes": "对标 H20 的高性价比推理芯片，参数未正式发布。目前仍处于实物展出阶段，不可写入采购清单；建议作为 2027 年推理扩容的候选跟踪项。",
      "techNote": null,
      "risks": [],
      "srcIds": []
    },
    {
      "id": "KLX_M300",
      "vendor": "昆仑芯",
      "name": "M300",
      "arch": "未公开",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": null,
      "tdpMax": null,
      "memGB": null,
      "memType": null,
      "memBW": null,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": null,
        "bf16": null,
        "fp8": null,
        "int8": null
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": null,
        "bwGBs": null
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "路线图",
      "supply": "国产",
      "confidence": "unknown",
      "perfNote": null,
      "notes": "面向超大规模多模态训练/推理，2025.11 百度世界大会首次披露，参数待发布。",
      "techNote": null,
      "risks": [],
      "srcIds": []
    },
    {
      "id": "MTT_S4000",
      "vendor": "摩尔线程",
      "name": "MTT S4000",
      "arch": "MUSA 春晓 / 7nm",
      "process": null,
      "formFactor": null,
      "cls": "infer",
      "tdp": null,
      "tdpMax": null,
      "memGB": 48,
      "memType": "GDDR6",
      "memBW": 768,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": 100,
        "bf16": null,
        "fp8": 200,
        "int8": 200
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": null,
        "bwGBs": null
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "量产出货",
      "supply": "国产",
      "confidence": "thirdparty",
      "perfNote": null,
      "notes": "GDDR6 显存，带宽是瓶颈；适合图形+轻量推理混合负载、桌边/边缘场景。已被 MTT S5000 取代为主力。",
      "techNote": null,
      "risks": [],
      "srcIds": []
    },
    {
      "id": "MTT_S5000",
      "vendor": "摩尔线程",
      "name": "MTT S5000",
      "arch": "MUSA 第四代「平湖」",
      "process": null,
      "formFactor": null,
      "cls": "hybrid",
      "tdp": 350,
      "tdpMax": null,
      "memGB": 80,
      "memType": "未公开",
      "memBW": 1600,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": null,
        "bf16": null,
        "fp8": 1000,
        "int8": 2048
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": "MTLink",
        "bwGBs": 784
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "量产出货",
      "supply": "国产",
      "confidence": "vendor",
      "perfNote": "官方口径为单卡 AI 稠密算力 1000 TFLOPS（液冷）/ 920 TFLOPS（风冷），未区分精度，记入 FP8 列并标注不可与他卡横比",
      "notes": "国产 “全功能 GPU” 代表：图形+AI+HPC 通吃，CUDA 迁移代价低，已 Day-0 适配 GLM-5 / Qwen3.5 / DeepSeek 等主流模型。已通过国家《安全可靠测评》，适配政务、金融、能源等信创场景。集群线性度官方称 95%，北京/无锡/杭州已多地交付。",
      "techNote": "官方仅给 “单卡 AI 稠密算力最高 1000 TFLOPS” 的口径，未区分精度，与同表其他卡的 FP8 数值不可直接横比。",
      "risks": [
        "参数口径待核",
        "软件生态"
      ],
      "srcIds": []
    },
    {
      "id": "MX_C500",
      "vendor": "沐曦",
      "name": "曦云 C500",
      "arch": "XCORE 1.0 / 7nm",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": 450,
      "tdpMax": null,
      "memGB": 64,
      "memType": "HBM2e",
      "memBW": 1800,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": null,
        "bf16": null,
        "fp8": null,
        "int8": 480
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": "MetaXLink，2–64",
        "bwGBs": 256
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "量产出货",
      "supply": "国产",
      "confidence": "thirdparty",
      "perfNote": null,
      "notes": "千卡集群线性度 88–90%，支持 1024 卡以上单集群互联；MXMACA 软件栈 API 层兼容 CUDA。",
      "techNote": null,
      "risks": [
        "软件生态"
      ],
      "srcIds": []
    },
    {
      "id": "MX_C550",
      "vendor": "沐曦",
      "name": "曦云 C550 / C588 / C500X",
      "arch": "XCORE 1.0 / 1.5",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": null,
      "tdpMax": null,
      "memGB": 64,
      "memType": "HBM2e",
      "memBW": null,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": null,
        "bf16": null,
        "fp8": null,
        "int8": null
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": null,
        "bwGBs": null
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "量产出货",
      "supply": "国产",
      "confidence": "thirdparty",
      "perfNote": null,
      "notes": "同一系列衍生型号较多（含 Shanghai Cube 液冷整机柜、光互连超节点），选型前需明确SKU与组网形态。",
      "techNote": null,
      "risks": [],
      "srcIds": []
    },
    {
      "id": "MX_C600",
      "vendor": "沐曦",
      "name": "曦云 C600",
      "arch": "XCORE 1.5 / 国产 7nm",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": null,
      "tdpMax": null,
      "memGB": 144,
      "memType": "HBM3e",
      "memBW": 3350,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": null,
        "bf16": null,
        "fp8": 1000,
        "int8": 2000
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": "MetaXLink",
        "bwGBs": 256
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "量产出货",
      "supply": "国产",
      "confidence": "vendor",
      "perfNote": "官方公开 FP8 1 PFLOPS / INT8 2000 TOPS / 144GB HBM3e / ≥3.35 TB/s；功耗未公开",
      "notes": "国产化闭环做得很扎实的旗舰：晶圆代工/封装/大容量显存均有国产方案，已通过国家安全性和稳定性测试。接近 H100 水平（官方目标为下一代 C700）。2026 年 5 月量产，是新上项目的国产主力候选之一。",
      "techNote": "新增 FP8 Tensor 及 Tensor 转置指令。供应链提示：量产初期产能爬坡，交期按 20 周以上预估。",
      "risks": [
        "产能与交期"
      ],
      "srcIds": []
    },
    {
      "id": "MX_C700",
      "vendor": "沐曦",
      "name": "曦云 C700（在研）",
      "arch": "国产先进工艺（未披露）",
      "process": null,
      "formFactor": null,
      "cls": "hybrid",
      "tdp": null,
      "tdpMax": null,
      "memGB": null,
      "memType": null,
      "memBW": null,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": null,
        "bf16": null,
        "fp8": null,
        "int8": null
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": null,
        "bwGBs": null
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "路线图",
      "supply": "国产",
      "confidence": "thirdparty",
      "perfNote": null,
      "notes": "官方目标整体性能对标 H100，并新增 FP4 低精度。2025.04 立项，进度快但尚未流片，切勿按此排产。",
      "techNote": "CTO 明确关键环节均有国产化方案，地缘政治风险相对可控。",
      "risks": [],
      "srcIds": []
    },
    {
      "id": "BR100",
      "vendor": "壁仞",
      "name": "BR100",
      "arch": "原创「壁立仞」架构 / 7nm",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": null,
      "tdpMax": null,
      "memGB": 64,
      "memType": "HBM2e",
      "memBW": 2300,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": 1024,
        "bf16": null,
        "fp8": null,
        "int8": 2048
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": "128",
        "bwGBs": 128
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "小批量/爬坡",
      "supply": "国产",
      "confidence": "thirdparty",
      "perfNote": null,
      "notes": "参数纸面亮眼但公开市场供给、软件栈与案例资料偏少，缺少系统的大模型部署文档；如需采用建议先做 3–6 个月 POC 再做商务决策。",
      "techNote": null,
      "risks": [
        "软件生态"
      ],
      "srcIds": []
    },
    {
      "id": "BL_166",
      "vendor": "壁仞",
      "name": "壁砺 166M / 166L / 166C",
      "arch": "未公开",
      "process": null,
      "formFactor": null,
      "cls": "infer",
      "tdp": null,
      "tdpMax": null,
      "memGB": null,
      "memType": null,
      "memBW": null,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": null,
        "bf16": null,
        "fp8": null,
        "int8": null
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": null,
        "bwGBs": null
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "小批量/爬坡",
      "supply": "国产",
      "confidence": "unknown",
      "perfNote": null,
      "notes": "2026 年官网主推产品线（166M 风冷 OAM / 166L 液冷 OAM / 166C 推理卡），参数未公开，需直接向原厂索取标书资料。差异化在于光互连技术。",
      "techNote": null,
      "risks": [
        "参数口径待核"
      ],
      "srcIds": []
    },
    {
      "id": "TGC_150",
      "vendor": "天数智芯",
      "name": "天垓150（训练）",
      "arch": "7nm GPGPU",
      "process": null,
      "formFactor": null,
      "cls": "train",
      "tdp": 350,
      "tdpMax": null,
      "memGB": 64,
      "memType": "HBM2e",
      "memBW": 1600,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": null,
        "bf16": null,
        "fp8": null,
        "int8": 384
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": null,
        "bwGBs": null
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "小批量/爬坡",
      "supply": "国产",
      "confidence": "thirdparty",
      "perfNote": null,
      "notes": "国内首个实现 7nm GPGPU 量产。兼容性测试通过率较高，但开源资料与生态文档匮乏，社区支撑弱，适合有自研工程能力的团队做小规模验证。",
      "techNote": null,
      "risks": [
        "软件生态"
      ],
      "srcIds": []
    },
    {
      "id": "TGC_100",
      "vendor": "天数智芯",
      "name": "天垓100 / 智铠100（推理）",
      "arch": "7nm / 未公开",
      "process": null,
      "formFactor": null,
      "cls": "infer",
      "tdp": 250,
      "tdpMax": null,
      "memGB": 32,
      "memType": "HBM2",
      "memBW": 1200,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": 147,
        "bf16": null,
        "fp8": null,
        "int8": 295
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": null,
        "bwGBs": null
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "小批量/爬坡",
      "supply": "国产",
      "confidence": "thirdparty",
      "perfNote": null,
      "notes": "天垓100 偏训练入门，智铠100 偏推理。参数来源有限，实际部署建议以实测吞吐为准。",
      "techNote": null,
      "risks": [],
      "srcIds": []
    },
    {
      "id": "SY_L600",
      "vendor": "燧原",
      "name": "L600（云燧阡衷）",
      "arch": "邃思400 / SMIC 7nm + CoWoS（长电）",
      "process": null,
      "formFactor": null,
      "cls": "hybrid",
      "tdp": null,
      "tdpMax": null,
      "memGB": 144,
      "memType": "HBM2e/HBM3e",
      "memBW": 3600,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": 148,
        "bf16": null,
        "fp8": null,
        "int8": null
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": null,
        "bwGBs": 800
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "样片/未量产",
      "supply": "国产",
      "confidence": "thirdparty",
      "perfNote": "FP16 有 148/400 TFLOPS 口径冲突，取保守下界；功耗未公开",
      "notes": "对标 H20 的第四代训推一体产品，原生 FP8。截至 2026.09 已回片但未大规模量产交付，建议列入观察名单而非当期采购名单；公司已于 2026 年启动科创板 IPO（募资 60 亿元）。",
      "techNote": "OGX400 单机八卡 OAM 全互联：1152GB 显存 / 28.8 TB/s 带宽；ESL 超节点支持 64 卡全带宽互联。",
      "risks": [
        "供应尚未落地"
      ],
      "srcIds": []
    },
    {
      "id": "SY_S60",
      "vendor": "燧原",
      "name": "S60",
      "arch": "邃思系列（未公开）",
      "process": null,
      "formFactor": null,
      "cls": "infer",
      "tdp": null,
      "tdpMax": null,
      "memGB": 48,
      "memType": null,
      "memBW": 672,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": 392,
        "bf16": null,
        "fp8": null,
        "int8": null
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": null,
        "bwGBs": null
      },
      "scaleOut": {
        "type": null,
        "note": null
      },
      "status": "小批量/爬坡",
      "supply": "国产",
      "confidence": "thirdparty",
      "perfNote": null,
      "notes": "上一代训推一体产品，公开资料有限，2025 年 AI 加速卡出货约 6.6 万张（份额约 1.7%，据其招股书）。",
      "techNote": null,
      "risks": [],
      "srcIds": []
    },
    {
      "id": "A800_SXM_80",
      "vendor": "NVIDIA",
      "name": "A800 80GB SXM4（中国版）",
      "arch": "Ampere / TSMC 7nm",
      "process": null,
      "formFactor": "SXM",
      "cls": "train",
      "tdp": 400,
      "tdpMax": null,
      "memGB": 80,
      "memType": "HBM2e",
      "memBW": 2039,
      "perf": {
        "fp64": 9.7,
        "fp32": 19.5,
        "tf32": 156,
        "fp16": 312,
        "bf16": 312,
        "fp8": null,
        "int8": 624
      },
      "perfBasis": "dense",
      "scaleUp": {
        "type": "NVLink3",
        "bwGBs": 400
      },
      "scaleOut": {
        "type": "IB/RoCE",
        "note": null
      },
      "status": "受限/EOL",
      "supply": "境外",
      "confidence": "official",
      "perfNote": "A100 的中国版，算力规格相同（NVIDIA 官方 datasheet 口径）；差异在互联：NVLink 带宽由 600 降至 400 GB/s",
      "notes": "已停产且属管制品类；存量市场为主，新建项目不建议选用。",
      "techNote": null,
      "risks": [
        "出口管制与合规"
      ],
      "srcIds": []
    },
    {
      "id": "ASCEND_910B4",
      "vendor": "华为昇腾",
      "name": "Ascend 910B4（Atlas 800T A2 早批次）",
      "arch": "达芬奇 / SMIC N+1",
      "process": null,
      "formFactor": "OAM",
      "cls": "train",
      "tdp": 310,
      "tdpMax": null,
      "memGB": 64,
      "memType": "HBM2e",
      "memBW": 1472,
      "perf": {
        "fp64": null,
        "fp32": null,
        "tf32": null,
        "fp16": 224,
        "bf16": null,
        "fp8": null,
        "int8": 448
      },
      "perfBasis": "mixed",
      "scaleUp": {
        "type": "HCCS",
        "bwGBs": 392
      },
      "scaleOut": {
        "type": "RoCE",
        "note": null
      },
      "status": "量产出货",
      "supply": "国产",
      "confidence": "thirdparty",
      "perfNote": "910B 的后缀版本之一，性能低于 910B；以具体型号后缀的 datasheet 为准",
      "notes": "与 910B 混部时集群受最慢卡拖累，建议按后缀分批组网。",
      "techNote": null,
      "risks": [
        "参数口径待核"
      ],
      "srcIds": []
    }
  ],
  "nodes": [
    {
      "id": "HGX_H100_8",
      "name": "8×H100 SXM 通用 HGX 服务器",
      "card": "H100_SXM",
      "cardsPerNode": 8,
      "u": 6,
      "weightKg": 85,
      "basePowerW": 1200,
      "psuEff": 0.94,
      "nicCount": 8,
      "nicRateGbps": 200,
      "nicType": "NDR400 IB / 200G RoCE",
      "storPorts": 2,
      "coolingDefault": "air",
      "rackMode": false,
      "rackDensity": {
        "airRec": 1,
        "airMax": 2,
        "liqRec": 4,
        "liqMax": 4,
        "basis": "NVIDIA DGX H100 / SuperPOD 部署文档：风冷每柜 1 台（满配 6.8 kW），液冷可达 4 台",
        "caveat": "厂商密度基于其配套机柜的供电与散热配置，液冷 4 台/柜需约 27 kW 级机柜"
      },
      "srcIds": [
        "nv-dgx-h100"
      ]
    },
    {
      "id": "HGX_H800_8",
      "name": "8×H800 SXM 通用 HGX 服务器",
      "card": "H800_SXM_80",
      "cardsPerNode": 8,
      "u": 6,
      "weightKg": 85,
      "basePowerW": 1200,
      "psuEff": 0.94,
      "nicCount": 8,
      "nicRateGbps": 200,
      "nicType": "NDR400 IB / 200G RoCE",
      "storPorts": 2,
      "coolingDefault": "air",
      "rackMode": false,
      "rackDensity": {
        "airRec": 1,
        "airMax": 2,
        "liqRec": 4,
        "liqMax": 4,
        "basis": "与 DGX H100 同代整机形态（风冷满配约 6.8 kW/台），机柜密度参照 H100 部署文档",
        "caveat": "H800 的 NVLink 带宽低于 H100，同一机柜密度下的训练效率低于 H100，扩容时应按实测吞吐校核"
      },
      "srcIds": [
        "nv-dgx-h100"
      ]
    },
    {
      "id": "HGX_H200_8",
      "name": "8×H200 SXM 通用 HGX 服务器",
      "card": "H200_SXM",
      "cardsPerNode": 8,
      "u": 6,
      "weightKg": 85,
      "basePowerW": 1200,
      "psuEff": 0.94,
      "nicCount": 8,
      "nicRateGbps": 200,
      "nicType": "NDR400 IB / 200G RoCE",
      "storPorts": 2,
      "coolingDefault": "air",
      "rackMode": false,
      "rackDensity": {
        "airRec": 1,
        "airMax": 2,
        "liqRec": 4,
        "liqMax": 4,
        "basis": "NVIDIA DGX H200：与 H100 同机箱与同机柜密度",
        "caveat": "同上"
      },
      "srcIds": [
        "nv-dgx-h200"
      ]
    },
    {
      "id": "HGX_H20_8",
      "name": "8×H20 通用 HGX 服务器",
      "card": "H20",
      "cardsPerNode": 8,
      "u": 6,
      "weightKg": 85,
      "basePowerW": 1200,
      "psuEff": 0.94,
      "nicCount": 8,
      "nicRateGbps": 200,
      "nicType": "200G IB / RoCE",
      "storPorts": 2,
      "coolingDefault": "air",
      "rackMode": false,
      "rackDensity": {
        "airRec": 2,
        "airMax": 3,
        "liqRec": 4,
        "liqMax": 4,
        "basis": "H20 单卡 400 W，单机箱约 4.4 kW，风冷 2–3 台/柜（工程推算）",
        "caveat": "无厂商正式机柜密度文档，为按功耗的工程推算值"
      },
      "srcIds": []
    },
    {
      "id": "HGX_A100_8",
      "name": "8×A100 SXM 通用 HGX 服务器",
      "card": "A100_SXM_80",
      "cardsPerNode": 8,
      "u": 6,
      "weightKg": 80,
      "basePowerW": 1000,
      "psuEff": 0.94,
      "nicCount": 8,
      "nicRateGbps": 200,
      "nicType": "HDR200 IB / 200G RoCE",
      "storPorts": 2,
      "coolingDefault": "air",
      "rackMode": false,
      "rackDensity": {
        "airRec": 2,
        "airMax": 3,
        "liqRec": 4,
        "liqMax": 4,
        "basis": "NVIDIA DGX A100：单机箱 6.5 kW，风冷每柜 2–3 台，液冷 4 台",
        "caveat": "同上"
      },
      "srcIds": [
        "nv-dgx-a100"
      ]
    },
    {
      "id": "HGX_A800_8",
      "name": "8×A800 SXM 通用 HGX 服务器",
      "card": "A800_SXM_80",
      "cardsPerNode": 8,
      "u": 6,
      "weightKg": 80,
      "basePowerW": 1000,
      "psuEff": 0.94,
      "nicCount": 8,
      "nicRateGbps": 200,
      "nicType": "HDR200 IB / 200G RoCE",
      "storPorts": 2,
      "coolingDefault": "air",
      "rackMode": false,
      "rackDensity": {
        "airRec": 2,
        "airMax": 3,
        "liqRec": 4,
        "liqMax": 4,
        "basis": "参照 DGX A100 机箱与密度（A800 为中国版同规格机箱）",
        "caveat": "同上"
      },
      "srcIds": []
    },
    {
      "id": "HGX_B200_8",
      "name": "8×B200 SXM 液冷服务器",
      "card": "B200_SXM",
      "cardsPerNode": 8,
      "u": 8,
      "weightKg": 110,
      "basePowerW": 1600,
      "psuEff": 0.95,
      "nicCount": 8,
      "nicRateGbps": 400,
      "nicType": "XDR800 IB / 400G RoCE",
      "storPorts": 2,
      "coolingDefault": "liquid",
      "rackMode": false,
      "rackDensity": {
        "airRec": null,
        "airMax": null,
        "liqRec": 2,
        "liqMax": 2,
        "basis": "NVIDIA GB200 参考架构：B200 需冷板液冷，单机箱约 9.6 kW",
        "caveat": "无风冷方案；液冷每柜 2 台对应约 19 kW/柜"
      },
      "srcIds": [
        "nv-gb200"
      ]
    },
    {
      "id": "HGX_B300_8",
      "name": "8×B300 SXM 液冷服务器",
      "card": "B300_SXM",
      "cardsPerNode": 8,
      "u": 8,
      "weightKg": 115,
      "basePowerW": 1800,
      "psuEff": 0.95,
      "nicCount": 8,
      "nicRateGbps": 400,
      "nicType": "XDR800 IB / 400G RoCE",
      "storPorts": 2,
      "coolingDefault": "liquid",
      "rackMode": false,
      "rackDensity": {
        "airRec": null,
        "airMax": null,
        "liqRec": 2,
        "liqMax": 2,
        "basis": "NVIDIA B300 参考：单机箱约 10.6 kW（风冷 bin）至 13 kW（液冷 bin）",
        "caveat": "风冷 bin 需确认机柜散热能力；液冷每柜 2 台对应约 21–26 kW/柜"
      },
      "srcIds": [
        "nv-b300"
      ]
    },
    {
      "id": "ATLAS_A2_910B_8",
      "name": "8×昇腾 910B（Atlas 800T A2）",
      "card": "ASCEND_910B",
      "cardsPerNode": 8,
      "u": 4,
      "weightKg": 78,
      "basePowerW": 900,
      "psuEff": 0.94,
      "nicCount": 8,
      "nicRateGbps": 200,
      "nicType": "200G RoCE",
      "storPorts": 2,
      "coolingDefault": "air",
      "rackMode": false,
      "rackDensity": {
        "airRec": 2,
        "airMax": 4,
        "liqRec": 6,
        "liqMax": 6,
        "basis": "华为 Atlas 800T A2 产品文档：4U/台，风冷每柜 2–4 台",
        "caveat": "910B 存在 B1–B4 后缀，功耗与带宽按后缀确认"
      },
      "srcIds": [
        "huawei-a800t-a2"
      ]
    },
    {
      "id": "ATLAS_A2_910B4_8",
      "name": "8×昇腾 910B4（Atlas 800T A2）",
      "card": "ASCEND_910B4",
      "cardsPerNode": 8,
      "u": 4,
      "weightKg": 72,
      "basePowerW": 850,
      "psuEff": 0.94,
      "nicCount": 8,
      "nicRateGbps": 200,
      "nicType": "200G RoCE",
      "storPorts": 2,
      "coolingDefault": "air",
      "rackMode": false,
      "rackDensity": {
        "airRec": 2,
        "airMax": 4,
        "liqRec": 6,
        "liqMax": 6,
        "basis": "同 Atlas 800T A2 机箱密度",
        "caveat": "参数以具体型号后缀 datasheet 为准"
      },
      "srcIds": []
    },
    {
      "id": "ATLAS_A3_910C_8",
      "name": "8×昇腾 910C（Atlas 800T A3）",
      "card": "ASCEND_910C",
      "cardsPerNode": 8,
      "u": 10,
      "weightKg": 78,
      "basePowerW": 950,
      "psuEff": 0.94,
      "nicCount": 8,
      "nicRateGbps": 200,
      "nicType": "200G RoCE",
      "storPorts": 2,
      "coolingDefault": "liquid",
      "rackMode": false,
      "rackDensity": {
        "airRec": 1,
        "airMax": 2,
        "liqRec": 3,
        "liqMax": 3,
        "basis": "华为 Atlas 800T A3 产品文档：10U/台，液冷每柜 3 台（约 17 kW/柜）",
        "caveat": "910C 单机箱功耗按 5.75 kW 估（8×600 W + 基础 950 W）"
      },
      "srcIds": [
        "huawei-a800t-a3"
      ]
    },
    {
      "id": "HGX_MI300X_8",
      "name": "8×MI300X 服务器",
      "card": "MI300X",
      "cardsPerNode": 8,
      "u": 6,
      "weightKg": 82,
      "basePowerW": 1200,
      "psuEff": 0.94,
      "nicCount": 8,
      "nicRateGbps": 200,
      "nicType": "200G IB / RoCE",
      "storPorts": 2,
      "coolingDefault": "air",
      "rackMode": false,
      "rackDensity": {
        "airRec": 1,
        "airMax": 2,
        "liqRec": 4,
        "liqMax": 4,
        "basis": "AMD Instinct 参考平台：750 W/卡，与 H100 同级密度",
        "caveat": "工程推算，无厂商机柜密度文档"
      },
      "srcIds": []
    },
    {
      "id": "HGX_MI325X_8",
      "name": "8×MI325X 服务器",
      "card": "MI325X",
      "cardsPerNode": 8,
      "u": 6,
      "weightKg": 82,
      "basePowerW": 1200,
      "psuEff": 0.94,
      "nicCount": 8,
      "nicRateGbps": 200,
      "nicType": "200G IB / RoCE",
      "storPorts": 2,
      "coolingDefault": "liquid",
      "rackMode": false,
      "rackDensity": {
        "airRec": null,
        "airMax": null,
        "liqRec": 4,
        "liqMax": 4,
        "basis": "MI325X 1000 W/卡，单机箱约 9.2 kW，液冷 4 台/柜",
        "caveat": "工程推算"
      },
      "srcIds": []
    },
    {
      "id": "HGX_MI355X_8",
      "name": "8×MI355X 液冷服务器",
      "card": "MI355X",
      "cardsPerNode": 8,
      "u": 6,
      "weightKg": 90,
      "basePowerW": 1300,
      "psuEff": 0.95,
      "nicCount": 8,
      "nicRateGbps": 400,
      "nicType": "400G IB / RoCE",
      "storPorts": 2,
      "coolingDefault": "liquid",
      "rackMode": false,
      "rackDensity": {
        "airRec": null,
        "airMax": null,
        "liqRec": 2,
        "liqMax": 2,
        "basis": "MI355X 1400 W/卡，液冷必选，单机箱约 12.5 kW",
        "caveat": "工程推算"
      },
      "srcIds": []
    },
    {
      "id": "AI_L40S_8",
      "name": "8×L40S 推理服务器",
      "card": "L40S",
      "cardsPerNode": 8,
      "u": 4,
      "weightKg": 55,
      "basePowerW": 900,
      "psuEff": 0.94,
      "nicCount": 2,
      "nicRateGbps": 100,
      "nicType": "100G RoCE",
      "storPorts": 2,
      "coolingDefault": "air",
      "rackMode": false,
      "rackDensity": {
        "airRec": 4,
        "airMax": 8,
        "liqRec": 10,
        "liqMax": 10,
        "basis": "L40S 350 W/卡，4U/8 卡机箱约 3.7 kW，风冷 4–8 台/柜",
        "caveat": "工程推算；实际以整机厂商热设计为准"
      },
      "srcIds": []
    },
    {
      "id": "AI_L40S_4",
      "name": "4×L40S 推理服务器",
      "card": "L40S",
      "cardsPerNode": 4,
      "u": 4,
      "weightKg": 48,
      "basePowerW": 650,
      "psuEff": 0.94,
      "nicCount": 2,
      "nicRateGbps": 100,
      "nicType": "100G RoCE",
      "storPorts": 2,
      "coolingDefault": "air",
      "rackMode": false,
      "rackDensity": {
        "airRec": 4,
        "airMax": 8,
        "liqRec": 10,
        "liqMax": 10,
        "basis": "同 L40S 机箱密度，4 卡版本约 2.05 kW",
        "caveat": "工程推算"
      },
      "srcIds": []
    },
    {
      "id": "AI_L40_8",
      "name": "8×L40 推理服务器",
      "card": "L40",
      "cardsPerNode": 8,
      "u": 4,
      "weightKg": 55,
      "basePowerW": 900,
      "psuEff": 0.94,
      "nicCount": 2,
      "nicRateGbps": 100,
      "nicType": "100G RoCE",
      "storPorts": 2,
      "coolingDefault": "air",
      "rackMode": false,
      "rackDensity": {
        "airRec": 4,
        "airMax": 8,
        "liqRec": 10,
        "liqMax": 10,
        "basis": "L40 300 W/卡，4U/8 卡机箱约 3.3 kW",
        "caveat": "工程推算"
      },
      "srcIds": []
    },
    {
      "id": "RACK_NVL72_GB200",
      "name": "GB200 NVL72 整机柜",
      "card": "GB200_NVL72",
      "cardsPerNode": 72,
      "u": null,
      "weightKg": null,
      "basePowerW": null,
      "psuEff": null,
      "nicCount": 72,
      "nicRateGbps": 400,
      "nicType": "Scale-out 网口：每 GPU 1×400G（CX7 IB / RoCE），整柜 72 口；GB300 另有 800G 档",
      "storPorts": 0,
      "coolingDefault": "liquid",
      "rackMode": true,
      "rackPowerW": 120000,
      "rackWeightKg": 3800,
      "rackDensity": {
        "airRec": null,
        "airMax": null,
        "liqRec": 1,
        "liqMax": 1,
        "basis": "整柜交付，强制液冷",
        "caveat": "机柜功率按整机柜方案计，不参与 U 位口径"
      },
      "srcIds": [
        "nv-gb200"
      ]
    },
    {
      "id": "RACK_NVL72_GB300",
      "name": "GB300 NVL72 整机柜",
      "card": "GB300_NVL72",
      "cardsPerNode": 72,
      "u": null,
      "weightKg": null,
      "basePowerW": null,
      "psuEff": null,
      "nicCount": 72,
      "nicRateGbps": 400,
      "nicType": "Scale-out 网口：每 GPU 1×400G（保守取值，GB300 可选 800G 档），整柜 72 口",
      "storPorts": 0,
      "coolingDefault": "liquid",
      "rackMode": true,
      "rackPowerW": 132000,
      "rackWeightKg": 3800,
      "rackDensity": {
        "airRec": null,
        "airMax": null,
        "liqRec": 1,
        "liqMax": 1,
        "basis": "整柜交付，强制液冷",
        "caveat": "同上"
      },
      "srcIds": [
        "nv-gb300"
      ]
    },
    {
      "id": "GEN_8_6U_AIR",
      "name": "通用 8 卡 6U 风冷机箱",
      "card": "*",
      "cardsPerNode": 8,
      "u": 6,
      "weightKg": 85,
      "basePowerW": 1200,
      "psuEff": 0.94,
      "nicCount": 8,
      "nicRateGbps": 200,
      "nicType": "200G IB / RoCE",
      "storPorts": 2,
      "coolingDefault": "air",
      "rackMode": false,
      "rackDensity": null,
      "srcIds": []
    },
    {
      "id": "GEN_8_6U_LIQ",
      "name": "通用 8 卡 6U 冷板液冷机箱",
      "card": "*",
      "cardsPerNode": 8,
      "u": 6,
      "weightKg": 90,
      "basePowerW": 1200,
      "psuEff": 0.94,
      "nicCount": 8,
      "nicRateGbps": 400,
      "nicType": "400G IB / RoCE",
      "storPorts": 2,
      "coolingDefault": "liquid",
      "rackMode": false,
      "rackDensity": null,
      "srcIds": []
    },
    {
      "id": "GEN_8_4U_AIR",
      "name": "通用 8 卡 4U 风冷机箱",
      "card": "*",
      "cardsPerNode": 8,
      "u": 4,
      "weightKg": 75,
      "basePowerW": 1000,
      "psuEff": 0.94,
      "nicCount": 8,
      "nicRateGbps": 200,
      "nicType": "200G RoCE",
      "storPorts": 2,
      "coolingDefault": "air",
      "rackMode": false,
      "rackDensity": null,
      "srcIds": []
    },
    {
      "id": "GEN_8_10U_LIQ",
      "name": "通用 8 卡 10U 液冷机箱",
      "card": "*",
      "cardsPerNode": 8,
      "u": 10,
      "weightKg": 100,
      "basePowerW": 1200,
      "psuEff": 0.94,
      "nicCount": 8,
      "nicRateGbps": 400,
      "nicType": "400G IB / RoCE",
      "storPorts": 2,
      "coolingDefault": "liquid",
      "rackMode": false,
      "rackDensity": null,
      "srcIds": []
    },
    {
      "id": "GEN_4_4U_AIR",
      "name": "通用 4 卡 4U 风冷机箱",
      "card": "*",
      "cardsPerNode": 4,
      "u": 4,
      "weightKg": 48,
      "basePowerW": 700,
      "psuEff": 0.94,
      "nicCount": 4,
      "nicRateGbps": 100,
      "nicType": "100G RoCE",
      "storPorts": 2,
      "coolingDefault": "air",
      "rackMode": false,
      "rackDensity": null,
      "srcIds": []
    },
    {
      "id": "GEN_2_2U_AIR",
      "name": "通用 2 卡 2U 风冷机箱",
      "card": "*",
      "cardsPerNode": 2,
      "u": 2,
      "weightKg": 28,
      "basePowerW": 450,
      "psuEff": 0.94,
      "nicCount": 2,
      "nicRateGbps": 100,
      "nicType": "100G RoCE",
      "storPorts": 1,
      "coolingDefault": "air",
      "rackMode": false,
      "rackDensity": null,
      "srcIds": []
    }
  ],
  "switches": [
    {
      "id": "sw-100g-48",
      "role": "管理 / 存储",
      "name": "100G 48 口盒式交换机",
      "ports": 48,
      "portRateGbps": 100,
      "u": 1,
      "powerW": 350,
      "note": "管理网与存储接入常规档"
    },
    {
      "id": "sw-200g-32",
      "role": "Leaf / Spine",
      "name": "200G 32 口交换机",
      "ports": 32,
      "portRateGbps": 200,
      "u": 1,
      "powerW": 600,
      "note": "NDR200 训练网常规档"
    },
    {
      "id": "sw-400g-32",
      "role": "Leaf / Spine",
      "name": "400G 32 口交换机",
      "ports": 32,
      "portRateGbps": 400,
      "u": 1,
      "powerW": 800,
      "note": "NDR400 / 400G RoCE 常规档"
    },
    {
      "id": "sw-400g-64",
      "role": "Leaf / Spine",
      "name": "400G 64 口交换机",
      "ports": 64,
      "portRateGbps": 400,
      "u": 1,
      "powerW": 1400,
      "note": "高密度机型，适合大集群 spine 收敛"
    },
    {
      "id": "sw-800g-64",
      "role": "Leaf / Spine",
      "name": "800G 64 口交换机",
      "ports": 64,
      "portRateGbps": 800,
      "u": 1,
      "powerW": 1800,
      "note": "XDR800 / 800G 档"
    }
  ],
  "defaults": {
    "scenario": "train",
    "cardId": "H100_SXM",
    "cardCount": 512,
    "nodeId": null,
    "cpnOverride": null,
    "compute": {
      "mfuTrain": 0.45,
      "mfuInfer": 0.35,
      "mfuHybrid": 0.4,
      "primaryPrecisionTrain": "bf16",
      "primaryPrecisionInfer": "int8",
      "bytesPerParamTrain": 16,
      "bytesPerParamInfer": 2,
      "vramUsableRatioTrain": 0.85,
      "vramKvReserveRatio": 0.3,
      "countChassisPadding": true
    },
    "rack": {
      "mode": "vendor",
      "maxKw": 12,
      "availU": 40,
      "spareRackRatio": 0,
      "swPerRack": 6,
      "netRackPerComputeRack": 10,
      "edgeRacks": 1,
      "torDeployment": false,
      "torUplinkReserveU": 2,
      "tareWeightKg": 200,
      "accessoryWeightKg": 50,
      "rackFootprintM2": 0.72
    },
    "site": {
      "areaPerRackM2": 2.5,
      "auxAreaRatio": 0.35,
      "racksPerModule": 120,
      "clearHeightM": 4.5
    },
    "power": {
      "pue": 1.25,
      "coolingCalc": "pue",
      "cop": 4.5,
      "envelopeLossRatio": 0.03,
      "coolingMargin": 1.15,
      "distEff": 0.94,
      "auxLoadPerRackKw": 0.15,
      "switchPowerW": 800,
      "redundancyGrade": "2N",
      "capacityMargin": 0.15,
      "annualHours": 8760,
      "avgLoadFactor": 0.85
    },
    "floor": {
      "designLoadKNm2": 12,
      "useNodeWeight": true,
      "kgPerKw": 3.6
    },
    "net": {
      "goal": "auto",
      "fabric": "ib",
      "nicPerNodeOverride": 0,
      "nicRateGbps": 200,
      "oversub": 1,
      "switchId": "sw-400g-32",
      "dacRatio": 0.35,
      "avgLinkLenM": 25,
      "fibersPerLink": 2,
      "mgmtPortsPerNode": 1,
      "storagePortsPerNode": 2,
      "storageSwitchPorts": 48,
      "mgmtSwitchPorts": 48
    }
  },
  "paramMeta": {
    "scenario": {
      "label": "业务场景",
      "unit": "—",
      "group": "场景",
      "basis": "决定 MFU、主用精度与可驻留模型口径",
      "src": "模型设定"
    },
    "compute.mfuTrain": {
      "label": "训练 MFU",
      "unit": "%",
      "group": "算力",
      "basis": "有效算力 = 理论峰值 × MFU",
      "src": "业界大规模训练公开区间 35%–55%"
    },
    "compute.mfuInfer": {
      "label": "推理等效利用率",
      "unit": "%",
      "group": "算力",
      "basis": "推理场景等效吞吐利用率",
      "src": "工程假设，建议以实测吞吐校准"
    },
    "compute.mfuHybrid": {
      "label": "混部 MFU",
      "unit": "%",
      "group": "算力",
      "basis": "训练与推理混部场景取值",
      "src": "工程假设"
    },
    "compute.primaryPrecisionTrain": {
      "label": "训练主用精度",
      "unit": "—",
      "group": "算力",
      "basis": "有效算力按该精度理论峰值折算",
      "src": "业界主流为 bf16 / fp16"
    },
    "compute.primaryPrecisionInfer": {
      "label": "推理主用精度",
      "unit": "—",
      "group": "算力",
      "basis": "推理吞吐按该精度口径",
      "src": "int8 / fp8 常见"
    },
    "compute.bytesPerParamTrain": {
      "label": "训练每参数字节数",
      "unit": "B/参数",
      "group": "算力",
      "basis": "含权重、梯度与优化器状态；bf16 权重 2 + fp32 主副本 4 + Adam m/v 8 + 梯度 2",
      "src": "工程惯例（ZeRO-1 口径）"
    },
    "compute.bytesPerParamInfer": {
      "label": "推理每参数字节数",
      "unit": "B/参数",
      "group": "算力",
      "basis": "bf16 / fp16 权重占用",
      "src": "工程惯例"
    },
    "compute.vramUsableRatioTrain": {
      "label": "训练可用显存占比",
      "unit": "%",
      "group": "算力",
      "basis": "扣除框架、通信库与碎片后的可用比例",
      "src": "工程惯例 80%–90%"
    },
    "compute.vramKvReserveRatio": {
      "label": "推理 KV Cache 预留",
      "unit": "%",
      "group": "算力",
      "basis": "推理显存中预留给 KV Cache 与激活的比例",
      "src": "工程惯例，长上下文场景需上调"
    },
    "rack.mode": {
      "label": "机柜数取值口径",
      "unit": "—",
      "group": "机柜",
      "basis": "vendor=厂商官方密度优先；strict=三口径取严；power=功率；u=U 位",
      "src": "模型设定"
    },
    "rack.maxKw": {
      "label": "单机柜功率上限",
      "unit": "kW/柜",
      "group": "机柜",
      "basis": "按列头柜 / rPP 额定容量计，非使用时功率",
      "src": "GB50174 A 级常见 8–12 kW；高密与液冷可至 20–40 kW"
    },
    "rack.availU": {
      "label": "单机柜可用 U 数",
      "unit": "U",
      "group": "机柜",
      "basis": "42U 机柜扣除 PDU、TOR、理线架与通风预留",
      "src": "工程惯例 38–40U"
    },
    "rack.spareRackRatio": {
      "label": "扩容预留机柜比例",
      "unit": "%",
      "group": "机柜",
      "basis": "在最终机柜数上额外预留的比例",
      "src": "用户设定"
    },
    "rack.netRackPerComputeRack": {
      "label": "网络柜配比",
      "unit": "计算柜/网络柜",
      "group": "机柜",
      "basis": "每 N 个计算柜配 1 个网络柜",
      "src": "工程惯例"
    },
    "rack.edgeRacks": {
      "label": "边界 / 安全 / 管理柜",
      "unit": "柜",
      "group": "机柜",
      "basis": "园区边界与安全设备占用",
      "src": "工程惯例"
    },
    "rack.swPerRack": {
      "label": "单机柜交换机台数",
      "unit": "台/柜",
      "group": "机柜",
      "basis": "网络设备柜可容纳的交换机台数",
      "src": "工程惯例（按供电与 U 位）"
    },
    "rack.tareWeightKg": {
      "label": "空机柜自重",
      "unit": "kg/柜",
      "group": "结构",
      "basis": "含柜体、前后门与侧板",
      "src": "工程惯例"
    },
    "rack.accessoryWeightKg": {
      "label": "柜内附件重量",
      "unit": "kg/柜",
      "group": "结构",
      "basis": "PDU、理线架、盲板等",
      "src": "工程惯例"
    },
    "rack.rackFootprintM2": {
      "label": "单机柜净占地",
      "unit": "m²/柜",
      "group": "结构",
      "basis": "600×1200 机柜本体占地",
      "src": "工程惯例"
    },
    "site.areaPerRackM2": {
      "label": "单位机柜占地",
      "unit": "m²/柜",
      "group": "机房",
      "basis": "含冷热通道与维护通道均摊后的占地",
      "src": "工程惯例 2.0–3.0 m²/柜"
    },
    "site.auxAreaRatio": {
      "label": "辅助区占比",
      "unit": "辅助/主设备",
      "group": "机房",
      "basis": "电力室、电池间、空调机房、弱电间、走廊等相对主设备区的面积比",
      "src": "工程惯例 25%–40%"
    },
    "site.racksPerModule": {
      "label": "单机房模块机柜数",
      "unit": "柜/模块",
      "group": "机房",
      "basis": "用于判断是否需要拆分多个机房模块",
      "src": "工程惯例"
    },
    "power.pue": {
      "label": "PUE 目标",
      "unit": "—",
      "group": "电力与制冷",
      "basis": "园区总能耗 ÷ IT 能耗",
      "src": "设目标值；寒冷地区 + 液冷可至 1.10–1.20"
    },
    "power.coolingCalc": {
      "label": "制冷耗电口径",
      "unit": "—",
      "group": "电力与制冷",
      "basis": "pue=按 PUE 反推；cop=按显冷量与 COP 正算",
      "src": "模型设定"
    },
    "power.cop": {
      "label": "制冷机组 COP",
      "unit": "—",
      "group": "电力与制冷",
      "basis": "制冷量 ÷ 制冷机组耗电，仅在 cop 口径下生效",
      "src": "工程惯例 4.0–6.0"
    },
    "power.envelopeLossRatio": {
      "label": "围护结构附加得热",
      "unit": "% of IT",
      "group": "电力与制冷",
      "basis": "新风、照明与围护结构传热附加到制冷负荷的比例",
      "src": "工程惯例 2%–5%"
    },
    "power.coolingMargin": {
      "label": "制冷选型裕量系数",
      "unit": "×",
      "group": "电力与制冷",
      "basis": "制冷设备选型相对计算负荷的裕量",
      "src": "工程惯例 1.10–1.20"
    },
    "power.distEff": {
      "label": "配电综合效率",
      "unit": "%",
      "group": "电力与制冷",
      "basis": "UPS 与配电链路综合效率",
      "src": "工程惯例 92%–96%"
    },
    "power.auxLoadPerRackKw": {
      "label": "辅助负载",
      "unit": "kW/柜",
      "group": "电力与制冷",
      "basis": "弱电、照明与安防等辅助用电",
      "src": "工程惯例"
    },
    "power.switchPowerW": {
      "label": "单台交换机功耗",
      "unit": "W/台",
      "group": "电力与制冷",
      "basis": "计入 IT 功耗",
      "src": "以交换机档位数据为准时可被覆盖"
    },
    "power.redundancyGrade": {
      "label": "供电冗余等级",
      "unit": "—",
      "group": "电力与制冷",
      "basis": "N / N+1 / 2N，决定变压器与 UPS 装机容量",
      "src": "GB50174 分级"
    },
    "power.capacityMargin": {
      "label": "市电认购裕量",
      "unit": "%",
      "group": "电力与制冷",
      "basis": "市电容量需求相对计算值的认购裕量",
      "src": "工程惯例 10%–20%"
    },
    "power.avgLoadFactor": {
      "label": "年平均负载率",
      "unit": "%",
      "group": "电力与制冷",
      "basis": "用于折算年耗电量",
      "src": "工程惯例 80%–90%"
    },
    "floor.designLoadKNm2": {
      "label": "楼面设计承重",
      "unit": "kN/m²",
      "group": "结构",
      "basis": "结构专业给定的楼面活荷载设计值",
      "src": "由建筑结构图纸确定"
    },
    "floor.useNodeWeight": {
      "label": "承重算法",
      "unit": "—",
      "group": "结构",
      "basis": "优先使用机型标称重量；关闭时按 kW × kgPerKw 折算",
      "src": "模型设定"
    },
    "floor.kgPerKw": {
      "label": "功率折算重量系数",
      "unit": "kg/kW",
      "group": "结构",
      "basis": "仅在缺少机型重量时使用",
      "src": "旧模型沿用值；按机型重量反算约为 45–60 kg/kW，结果偏保守"
    },
    "net.goal": {
      "label": "组网目标",
      "unit": "—",
      "group": "网络",
      "basis": "auto=按卡型与规模自动判定",
      "src": "模型设定"
    },
    "net.fabric": {
      "label": "训练互联",
      "unit": "—",
      "group": "网络",
      "basis": "IB / RoCE / 双平面",
      "src": "用户设定"
    },
    "net.oversub": {
      "label": "收敛比（超分比）",
      "unit": ":1",
      "group": "网络",
      "basis": "叶交换机下联与上联端口数之比",
      "src": "训练建议 1:1 或 2:1；推理可放宽"
    },
    "net.switchId": {
      "label": "交换机档位",
      "unit": "—",
      "group": "网络",
      "basis": "叶 / 脊交换机的单台端口数与速率",
      "src": "见 chips.js switches"
    },
    "net.dacRatio": {
      "label": "铜缆（DAC/ACC）占比",
      "unit": "%",
      "group": "网络",
      "basis": "短距链路走铜缆的比例，影响光模块数量",
      "src": "工程惯例 30%–50%"
    },
    "net.fibersPerLink": {
      "label": "每链路光纤芯数",
      "unit": "芯/链路",
      "group": "网络",
      "basis": "双纤双向",
      "src": "工程惯例"
    },
    "cardId": {
      "label": "上次选择的卡型",
      "unit": "—",
      "group": "场景",
      "basis": "仅用于界面回显与默认选中，不参与计算",
      "src": "用户设定"
    },
    "cardCount": {
      "label": "上次填写的卡数",
      "unit": "张",
      "group": "场景",
      "basis": "配置条数量输入框的默认值；实际计算以算力池条目为准",
      "src": "用户设定"
    },
    "nodeId": {
      "label": "上次选择的机型",
      "unit": "—",
      "group": "场景",
      "basis": "界面回显；未手动指定时按卡型自动匹配机型",
      "src": "用户设定"
    },
    "cpnOverride": {
      "label": "每机箱卡数覆盖值",
      "unit": "张/机箱",
      "group": "场景",
      "basis": "覆盖机型标称每箱卡数；切换卡型时自动清空，避免沿用上一机型的取值",
      "src": "用户设定"
    },
    "compute.countChassisPadding": {
      "label": "按机箱补齐卡数",
      "unit": "—",
      "group": "算力",
      "basis": "开启时实配卡数 = 机箱数 × 每箱卡数；关闭时按需求卡数计。整柜交付不可拆分，恒按整柜补齐",
      "src": "模型设定"
    },
    "rack.torDeployment": {
      "label": "TOR 交换机入柜",
      "unit": "—",
      "group": "机柜",
      "basis": "开启时从单机柜可用 U 位中扣除上行设备占用 U",
      "src": "用户设定"
    },
    "rack.torUplinkReserveU": {
      "label": "TOR 上行预留 U 位",
      "unit": "U",
      "group": "机柜",
      "basis": "TOR 入柜部署时从可用 U 位中扣除的 U 数",
      "src": "工程惯例"
    },
    "site.clearHeightM": {
      "label": "机房净高要求",
      "unit": "m",
      "group": "机房",
      "basis": "当前版本不参与面积计算，作为机房土建条件记录",
      "src": "用户设定"
    },
    "power.annualHours": {
      "label": "年运行小时数",
      "unit": "h",
      "group": "电力与制冷",
      "basis": "年耗电量 = 设施总功耗 × 年运行小时数 × 年平均负载率",
      "src": "8760 h 对应全年连续运行"
    },
    "net.nicPerNodeOverride": {
      "label": "每机箱网口数覆盖值",
      "unit": "口/机箱",
      "group": "网络",
      "basis": "预留字段，当前版本未启用，端口数取机型标称 nicCount",
      "src": "用户设定（暂不生效）"
    },
    "net.nicRateGbps": {
      "label": "单网口速率",
      "unit": "Gbps",
      "group": "网络",
      "basis": "Scale-out 聚合带宽 = 网口总数 × 单口速率；宜与机型网卡规格一致",
      "src": "用户设定"
    },
    "net.avgLinkLenM": {
      "label": "平均链路长度",
      "unit": "m",
      "group": "网络",
      "basis": "当前版本不参与计算，作为布线工程量参考",
      "src": "用户设定"
    },
    "net.mgmtPortsPerNode": {
      "label": "每机箱管理网口数",
      "unit": "口/机箱",
      "group": "网络",
      "basis": "管理交换机数量 = 管理端口总数 ÷ 每台北向端口数",
      "src": "工程惯例 1 口/机箱"
    },
    "net.storagePortsPerNode": {
      "label": "每机箱存储网口数",
      "unit": "口/机箱",
      "group": "网络",
      "basis": "存储交换机数量 = 存储端口总数 ÷ 每台北向端口数",
      "src": "工程惯例 1–2 口/机箱"
    },
    "net.storageSwitchPorts": {
      "label": "存储交换机端口数",
      "unit": "口/台",
      "group": "网络",
      "basis": "单台存储交换机的接入端口数",
      "src": "用户设定"
    },
    "net.mgmtSwitchPorts": {
      "label": "管理交换机端口数",
      "unit": "口/台",
      "group": "网络",
      "basis": "单台管理交换机的接入端口数",
      "src": "用户设定"
    }
  },
  "presets": [
    {
      "id": "train-h100",
      "name": "示例 · 大模型训练集群",
      "inputs": {
        "scenario": "train",
        "cardId": "H100_SXM",
        "cardCount": 512
      },
      "patch": {
        "rack.maxKw": 12,
        "power.pue": 1.25,
        "net.oversub": 1,
        "net.fabric": "ib",
        "net.switchId": "sw-400g-32"
      }
    },
    {
      "id": "infer-l40s",
      "name": "示例 · 在线推理集群",
      "inputs": {
        "scenario": "infer",
        "cardId": "L40S",
        "cardCount": 128
      },
      "patch": {
        "rack.maxKw": 8,
        "power.pue": 1.3,
        "net.oversub": 4,
        "net.fabric": "roce",
        "net.switchId": "sw-100g-48",
        "net.nicRateGbps": 100
      }
    },
    {
      "id": "cmp-ascend",
      "name": "示例 · 国产训练替代",
      "inputs": {
        "scenario": "train",
        "cardId": "ASCEND_910C",
        "cardCount": 512
      },
      "patch": {
        "rack.maxKw": 15,
        "power.pue": 1.3,
        "net.fabric": "roce",
        "net.oversub": 2
      }
    },
    {
      "id": "train-b200",
      "name": "示例 · 高密液冷训练",
      "inputs": {
        "scenario": "train",
        "cardId": "B200_SXM",
        "cardCount": 1024
      },
      "patch": {
        "rack.maxKw": 40,
        "power.pue": 1.15,
        "power.coolingCalc": "cop",
        "power.cop": 5,
        "net.oversub": 1,
        "net.switchId": "sw-800g-64",
        "net.nicRateGbps": 400
      }
    }
  ]
};
