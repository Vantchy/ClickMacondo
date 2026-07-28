# ClickMacondo — 百年孤独 · 宿命之环

基于《百年孤独》的交互式文字冒险游戏，将马尔克斯魔幻现实主义文学经典转化为沉浸式数字体验。

## 项目结构

```
ClickMacondo/
├── frontend/                  # 主游戏
│   ├── assets/
│   │   ├── audio/             # 音频资源
│   │   └── data/              # 章节数据
│   ├── src/
│   │   ├── core/              # 游戏核心引擎（状态、渲染、章节注册）
│   │   ├── ui/                # UI 组件（侧边栏、设置、成就）
│   │   ├── utils/             # 工具函数（配置、存储）
│   │   └── app.js             # 应用入口
│   ├── styles/                # 样式文件
│   ├── circle-of-fate.html    # 主游戏页面（宿命之环）
│   └── unlocked.html          # 独立离线版（全内容解锁，全部内联）
├── story-viewer/              # 百年孤独故事浏览页
│   ├── images/                # 章节插画
│   └── story-explorer.html    # 故事浏览入口
├── docs/                      # 项目文档
├── README.md
└── .gitignore
```

## 快速开始

- **主游戏**：在浏览器中打开 `frontend/circle-of-fate.html`
- **离线版**：在浏览器中打开 `frontend/unlocked.html`
- **故事浏览**：在浏览器中打开 `story-viewer/story-explorer.html`

## 技术栈

- 纯 HTML / CSS / JavaScript（无框架依赖）
- 模块化 JS 架构（按依赖顺序通过 `<script>` 标签加载）
- localStorage 存档系统
- Web Audio API 音效引擎
