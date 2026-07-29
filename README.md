# ClickMacondo — 百年孤独 · 宿命之环

> **"命中注定一百年处于孤独的世家，不会有出现在世上的第二次机会。"**
>
> 基于加夫列尔·加西亚·马尔克斯《百年孤独》的交互式文字冒险游戏，将魔幻现实主义文学经典转化为沉浸式数字体验。

---

## 🎮 游戏简介

玩家以"灵魂"形态被吉卜赛智者**梅尔基亚德斯**召唤到马孔多。在每一章中，玩家**附身**布恩迪亚家族的不同成员——何塞·阿尔卡蒂奥·布恩迪亚、奥雷里亚诺·布恩迪亚上校、乌尔苏拉、阿玛兰妲等——在命运的关键节点做出选择。

你的每一次抉择会影响：
- **🏷️ 标签（Tags）**：定义玩家的性格倾向（如"执着勘探者"、"家族的守望者"）
- **💫 宿命与羁绊**：双轴数值体系——顺从命运 vs 反抗命运、与家族的连接强度
- **💾 记忆碎片（Memories）**：解锁隐藏的叙事片段，部分可跨章节解锁隐藏选项
- **🔍 隐藏线索（Clues）**：叙事中可点击发现的秘密道具
- **❤️ 人物关系值（Relationships）**：与家族成员的好感度（0-100），影响对话和隐藏剧情
- **📖 结局走向**：7 种不同结局，由全程累积的烙印模式决定

---

## 📁 项目结构

```
ClickMacondo/
├── README.md
├── .gitignore
│
├── frontend/                          # 🎯 主游戏应用
│   ├── circle-of-fate.html            # 🔑 唯一入口页面（SPA）
│   ├── styles/
│   │   └── styles.css                 # 全局样式（~57KB，羊皮纸/古籍视觉风格）
│   ├── assets/
│   │   ├── audio/
│   │   │   └── elias_weber-*.mp3     # 背景音乐（25MB）
│   │   └── data/
│   │       ├── chapters-data.js       # 章节数据（主文件）
│   │       ├── chapters-data-1.js     # 章节数据（批次1）
│   │       ├── chapters-data-2.js     # 章节数据（批次2）
│   │       ├── chapters-data-3.js     # 章节数据（批次3）
│   │       ├── chapters-data-4.js     # 章节数据（批次4）
│   │       └── chapters-data-5.js     # 章节数据（批次5）
│   └── src/
│       ├── app.js                     # 🚀 应用入口 / 全局事件绑定
│       ├── core/                      # 核心逻辑层
│       │   ├── chapter-registry.js    # 章节注册系统（chapters/memory/familyTree 注册表）
│       │   ├── game-state.js          # 全局游戏状态（单例 GameState）
│       │   ├── game-engine.js         # 游戏引擎（选择处理、场景跳转、章节切换）
│       │   └── renderer.js            # 主渲染器（左页叙事 / 右页交互 / 探索场景）
│       ├── ui/                        # UI 交互层
│       │   ├── ui.js                  # Toast、封面动画、致谢名单、主菜单、BGM
│       │   ├── achievements.js        # 成就系统（30+ 条件判定）
│       │   ├── sidebar.js             # 侧边栏管理（家族树/档案/简介/关系查询）
│       │   └── settings.js            # 设置面板（字体/音量/重置）
│       └── utils/                     # 工具与数据层
│           ├── config.js              # 全局常量（章节元数据、167条关系库、成就/结局/线索定义）
│           └── storage.js             # 存档系统（1个自动存档 + 6个手动槽位）
│
├── story-viewer/                      # 📖 百年孤独故事画卷（独立应用）
│   ├── story-explorer.html            # 插图故事浏览器（~2000行）
│   └── images/                        # 24 张章节插画
│       ├── page-1.jpg
│       └── scene-1.png ~ scene-23.png
│
└── docs/                              # 📚 项目文档
    ├── dev-tree-diagram.md            # 开发依赖关系图
    ├── dev-tree-viewer.html           # 依赖关系可视化浏览器
    ├── doc-instruction/               # 技术文档
    │   ├── docs structure.txt         # 项目文档结构说明
    │   ├── ARCHITECTURE_circle-of-fate.md   # 文件架构全景图
    │   └── CODE_EXPLANATION_circle-of-fate.md # 代码完整说明
    └── Story-ideas/                   # 设计文档
        ├── project-spec.md            # 可玩性增强方案（项目说明书）
        ├── implementation-guide.md    # 实施指南（精确到文件/字段）
        └── manual.md                  # 行动指南（设计总纲/因果全景图）
```

---

## 🚀 快速开始

项目无需安装，纯静态文件，直接在浏览器中打开即可：

- **主游戏**：在浏览器中打开 [`frontend/circle-of-fate.html`](frontend/circle-of-fate.html)
- **故事画卷**：在浏览器中打开 [`story-viewer/story-explorer.html`](story-viewer/story-explorer.html)

---

## 🛠 技术栈

| 层级 | 技术 |
|------|------|
| 结构 | 纯 HTML5（单文件入口，SPA） |
| 样式 | CSS3（羊皮纸/古籍视觉风格，CSS 变量统管全局色调） |
| 逻辑 | 原生 JavaScript（ES6+，12 个模块，按依赖顺序通过 `<script>` 标签加载） |
| 数据 | 静态 JS 对象（6 个章节数据文件，调用 `registerChapter()` 注册） |
| 存储 | 浏览器 `localStorage`（自动存档 + 6 槽位手动存档 + 成就持久化） |
| 字体 | Google Fonts（Cormorant Garamond、Cinzel、Noto Serif SC） |
| 音频 | HTML5 `<audio>` + Web Audio API（单曲 BGM 循环播放） |

**无框架、无构建工具、无包管理器** —— 下载即可运行。

---

## 📖 游戏系统

### 四层因果体系

| 层 | 机制 | 说明 |
|----|------|------|
| A. 标记累积 + 阈值门 | 跨章累积标志（characterFlags） | 关卡章检查阈值触发不同叙事变体 |
| B. 场景变体 | 同一场景 2-3 个版本 | 仅关键章 30-50% 场景有变体 |
| C. 回声文本 | 叙事中插入"你记得…" | 让过去的选择在当下的叙事中闪现 |
| D. 隐藏线索 | 每章 1-2 个彩色可点文字 | 获得跨章道具 → 解锁后续隐藏选项 |

### 双轴 × 四象限

```
           高羁绊 ↑
                 │
    家族守望者    │    命运追随者
    (为家人而活)  │    (理解一切，仍选择连接)
                 │
    ─────────────┼─────────────→ 高宿命
                 │
    孤独反抗者    │    孤绝先知
    (搏斗命运，   │    (看透一切，
     独自一人)    │     与谁都不相连)
                 │
           低羁绊 ↓
```

### 章节规模

- **22 个章节**：序章 + 第1-20章 + 终章
- **场景类型**：叙事（narrative）、选择（choice）、探索（exploration）、结算（settlement）
- **7 种结局**：由全程宿命/羁绊烙印模式 + 线索收集数决定

---

## 🔑 键盘快捷键

| 按键 | 功能 |
|------|------|
| `←` | 回退到上一页 |
| `→` / `Space` | 前进到下一页 / 确认选择 |
| `1` `2` `3` `4` | 在选择页高亮对应选项 |
| `Esc` | 关闭面板 / 呼出主菜单 |

---

## 👥 作者

**Vantchy** & **Corrofea**

---

*"多年以后，面对行刑队，奥雷里亚诺·布恩迪亚上校将会回想起父亲带他去见识冰块的那个遥远的下午。"*
