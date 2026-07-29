# 🏛️ `circle-of-fate.html` 文件架构全景图

> **入口文件**: [frontend/circle-of-fate.html](frontend/circle-of-fate.html)  
> **项目**: 百年孤独 · 宿命之环（互动叙事游戏）  
> **生成日期**: 2026-07-29

---

## 一、项目总览

```
ClickMacondo/
├── README.md
├── frontend/                          ← 🎯 主应用目录
│   ├── circle-of-fate.html            ← 🔑 唯一入口页面
│   ├── styles/
│   │   └── styles.css                 ← 全局样式（57KB）
│   ├── assets/
│   │   ├── audio/
│   │   │   └── elias_weber-… .mp3     ← 背景音乐（25MB）
│   │   └── data/
│   │       ├── chapters-data.js       ← 章节数据（主文件）
│   │       ├── chapters-data-1.js     ← 章节数据（扩展1）
│   │       ├── chapters-data-2.js     ← 章节数据（扩展2）
│   │       ├── chapters-data-3.js     ← 章节数据（扩展3）
│   │       ├── chapters-data-4.js     ← 章节数据（扩展4）
│   │       └── chapters-data-5.js     ← 章节数据（扩展5）
│   └── src/
│       ├── app.js                     ← 🚀 应用入口 / 胶水代码
│       ├── core/                      ← 核心逻辑层
│       │   ├── chapter-registry.js
│       │   ├── game-state.js
│       │   ├── game-engine.js
│       │   └── renderer.js
│       ├── ui/                        ← UI 交互层
│       │   ├── ui.js
│       │   ├── achievements.js
│       │   ├── sidebar.js
│       │   └── settings.js
│       └── utils/                     ← 工具 / 数据层
│           ├── config.js
│           └── storage.js
├── story-viewer/                      ← 📖 外部：故事画卷
│   ├── story-explorer.html
│   └── images/                        ← 26 张插图
└── docs/                              ← 📚 项目文档
    ├── project-spec.md
    ├── implementation-guide.md
    ├── manual.md
    └── docs structure.txt
```

---

## 二、依赖关系图（加载顺序 = 从上到下）

`circle-of-fate.html` 在第 369–399 行按**严格顺序**加载 JS 模块。下面的箭头 `A → B` 表示 **B 依赖 A**（B 的代码引用了 A 中定义的全局变量/函数）。

```
┌─────────────────────────────────────────────────────────────────────┐
│                    circle-of-fate.html                              │
│                                                                     │
│  <link> ─── styles/styles.css                                      │
│  <link> ─── Google Fonts (外部CDN)                                  │
│  <audio> ── assets/audio/… .mp3                                    │
│  <a>    ── ../story-viewer/story-explorer.html                     │
│                                                                     │
│  ★ JS 加载顺序（共12个模块）：                                       │
└─────────────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────┐
│ ① config.js         │  ← 零依赖：纯数据定义
│ src/utils/          │    常量 CHAPTER_META, RELATION_DB, ACHIEVEMENTS,
│                     │    ENDING_DEFS, CHARACTER_GENDERS/ALIASES
│ 提供全局函数：       │   辅助函数 resolveCharacterName, findRelation,
│                     │   findRelationPath, determineEnding 等
└────────┬────────────┘
         │ 被以下依赖
         ├──────────────────────────────────────────────┐
         ▼                                              ▼
┌─────────────────────┐                    ┌─────────────────────┐
│ ② chapter-registry  │                    │ ⑤ achievements.js   │
│ src/core/           │                    │ src/ui/             │
│                     │                    │                     │
│ 注册系统：          │                    │ 成就系统：          │
│  chapters{}         │                    │  checkAchievements()│
│  memoryRegistry{}   │                    │  checkAndNotify…()  │
│  familyTreeRegistry{}│                   │                     │
│                     │                    │ 依赖：config +      │
│ 依赖：config.js     │                    │      game-state     │
│ 提供：registerChapter│                   └─────────┬───────────┘
│       getCurrentChapterData                       │
│       getGlobalProgress                           │
└────────┬────────────────────┐                     │
         │                    │                     │
         ▼                    ▼                     │
┌──────────────────┐  ┌──────────────────┐         │
│ ③ chapters-data  │  │ ④ game-state.js  │◄────────┘
│ assets/data/     │  │ src/core/        │
│                  │  │                  │
│ 6个文件依次加载： │  │ 全局状态对象：    │
│  chapters-data   │  │  GameState{}     │
│  chapters-data-1 │  │                  │
│  chapters-data-2 │  │ 字段：chapter,   │
│  chapters-data-3 │  │ scene, round,    │
│  chapters-data-4 │  │ tags, memories,  │
│  chapters-data-5 │  │ history, choices, │
│                  │  │ relationships{}  │
│ 调用              │  │                  │
│ registerChapter() │  │ 方法：reset(),   │
│ 填充 chapters{}   │  │ toJSON(),        │
│ 填充 memories{}   │  │ fromJSON(),      │
│ 填充 familyTree{} │  │ adjustRelation() │
│                  │  │                  │
│ 依赖：chapter-   │  │ 依赖：chapter-   │
│       registry   │  │       registry   │
└──────────────────┘  └────────┬─────────┘
                               │ 被以下依赖
          ┌────────────────────┼────────────────────┐
          ▼                    ▼                    ▼
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ ⑥ ui.js          │  │ ⑦ storage.js     │  │ ⑩ sidebar.js     │
│ src/ui/          │  │ src/utils/       │  │ src/ui/          │
│                  │  │                  │  │                  │
│ UI工具函数：      │  │ 存档系统：        │  │ 侧边栏管理：      │
│  showToast()     │  │  StorageManager  │  │  SidebarManager  │
│  showCover()     │  │  SaveLoadPanel   │  │                  │
│  showMainMenu()  │  │                  │  │ openFamilyTree() │
│  BGM{}           │  │ autoSave/autoLoad│  │ openArchives()   │
│  showCredits()   │  │ saveToSlot()     │  │ openProfile()    │
│  getBigSave()    │  │ loadFromSlot()   │  │ openRelations()  │
│  成就/书签页面    │  │ 6个手动槽位       │  │ queryRelation()  │
│                  │  │                  │  │                  │
│ 依赖：game-state │  │ 依赖：game-state │  │ 依赖：game-state │
│       game-engine│  │       chapter-reg│  │       chapter-reg│
│       (惰性)     │  │       ui (Toast) │  │       config     │
│       storage    │  │                  │  │                  │
│       (惰性)     │  │                  │  │                  │
└────────┬─────────┘  └────────┬─────────┘  └──────────────────┘
         │                     │
         ▼                     ▼
┌──────────────────────────────────────────────┐
│ ⑧ game-engine.js                             │
│ src/core/                                    │
│                                              │
│ 游戏引擎核心：                                 │
│  GameEngine{}                                │
│                                              │
│ 核心方法：                                    │
│  selectChoice()      — 处理选择分支           │
│  goToScene()         — 场景跳转               │
│  switchToChapter()   — 章节切换               │
│  goToNextChapter()   — 推进到下一章           │
│  navigateBack()      — 翻页：上一页           │
│  navigateForward()   — 翻页：下一页/自动推进  │
│  encounterChapterMembers() — 人物遭遇         │
│  filterChoicesByMemories() — 条件选项过滤     │
│                                              │
│ 依赖：game-state + chapter-registry          │
│       + storage + ui                         │
└────────────────────┬─────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│ ⑨ renderer.js                                │
│ src/core/                                    │
│                                              │
│ 主渲染器：                                    │
│  Renderer{}                                  │
│                                              │
│ 渲染方法：                                    │
│  render()           — 渲染整个页面            │
│  renderLeftPage()   — 左页：叙事区            │
│  renderRightPage()  — 右页：交互区            │
│                                              │
│ 全局事件处理函数：                             │
│  handleChoice()     — 处理选项点击            │
│  handleContinue()   — 继续按钮               │
│  handleNext()       — 下一步                 │
│  handleHotspotClick() — 探索热点             │
│  showMemoryPopup()  — 记忆碎片弹窗            │
│  selectChoice()     — 两步确认选择            │
│                                              │
│ 依赖：game-state + game-engine               │
│       + chapter-registry                     │
└────────────────────┬─────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│ ⑪ settings.js                                │
│ src/ui/                                      │
│                                              │
│ 设置面板：                                    │
│  SettingsPanel{}                             │
│                                              │
│  open() / close()                            │
│  setFontSize() — 小/中/大                    │
│  setVolume()    — BGM 音量                   │
│  resetGame()    — 重置全部数据               │
│  loadSettings() — 从 localStorage 恢复       │
│                                              │
│ 依赖：game-state + game-engine               │
│       + storage + achievements + ui          │
└────────────────────┬─────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│ ⑫ app.js                                     │
│ src/                                         │
│                                              │
│ 🚀 应用入口（胶水代码）：                      │
│  init() — DOMContentLoaded 时执行            │
│                                              │
│ 初始化流程：                                  │
│  1. 加载设置 (SettingsPanel)                  │
│  2. 初始化 BGM                               │
│  3. 尝试自动读档 (StorageManager)             │
│  4. 渲染初始场景 (Renderer)                   │
│  5. 无存档→显示封面 / 有存档→直接进入        │
│  6. 绑定全部 DOM 事件                         │
│  7. 键盘导航（方向键翻页、数字键选择、Esc）    │
│  8. 进度条拖动跳转                            │
│                                              │
│ 依赖：全部上述模块                            │
└──────────────────────────────────────────────┘
```

---

## 三、HTML ↔ JS 模块功能映射表

下表列出了 `circle-of-fate.html` 中的每个 UI 区域由哪个 JS 模块渲染/控制：

| HTML 区域 | 对应 DOM ID | 负责模块 | 关键函数 |
|-----------|------------|---------|---------|
| 开头封面 | `#cover-overlay` | `ui.js` | `showCover()`, `animateCoverTitle()` |
| 致谢名单 | `#credits-overlay` | `ui.js` | `showCredits()`, `closeCredits()` |
| 主菜单 | `#mainmenu-overlay` | `ui.js` | `showMainMenu()`, `hideMainMenu()` |
| 成就书签 | `#achievements-overlay` | `ui.js` + `achievements.js` | `openAchievementsPage()` |
| 记忆碎片集 | `#bookmarks-overlay` | `ui.js` | `openBookmarksPage()` |
| 设置面板 | `#settings-overlay` | `settings.js` | `SettingsPanel.open()` |
| 存档/读档 | `#saveload-overlay` | `storage.js` | `SaveLoadPanel.open()` |
| 左页（叙事） | `#left-page` | `renderer.js` | `Renderer.renderLeftPage()` |
| 右页（交互） | `#right-page` | `renderer.js` | `Renderer.renderRightPage()` |
| 顶部栏 | `#top-bar` | `renderer.js` | `Renderer.updateTopBar()` |
| 进度条 | `#reading-progress` | `renderer.js` + `app.js` | 渲染 + 拖动事件 |
| 记忆碎片弹窗 | `#memory-popup` | `renderer.js` | `showMemoryPopup()` |
| Toast 提示 | `#toast` | `ui.js` | `showToast()` |
| 家族树侧边栏 | `#sidebar-family` | `sidebar.js` | `SidebarManager.openFamilyTree()` |
| 历史档案侧边栏 | `#sidebar-archives` | `sidebar.js` | `SidebarManager.openArchives()` |
| 个人简介侧边栏 | `#sidebar-profile` | `sidebar.js` | `SidebarManager.openProfile()` |
| 关系查询侧边栏 | `#sidebar-relations` | `sidebar.js` | `SidebarManager.openRelations()` |
| BGM 音频 | `#bgm-audio` | `ui.js` | `BGM.init()`, `BGM.tryPlay()` |

---

## 四、数据流向图

```
                    ┌──────────────┐
                    │  config.js   │
                    │  静态数据定义  │
                    └──────┬───────┘
                           │ 常量被各处引用
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
┌───────────────┐  ┌──────────────┐  ┌──────────────┐
│chapter-registry│  │ achievements │  │   sidebar    │
│  注册表        │  │   成就判定    │  │   关系查询    │
└───────┬───────┘  └──────────────┘  └──────────────┘
        │
        ▼
┌───────────────┐     ┌──────────────────────────────┐
│ chapters-data │────▶│  chapters{} / memoryRegistry  │
│  (6个文件)    │     │  / familyTreeRegistry         │
└───────────────┘     └──────────────┬───────────────┘
                                     │
                                     ▼
                            ┌───────────────┐
                            │  game-state   │
                            │  GameState{}  │
                            │               │
                            │  运行时状态    │
                            │  currentScene │
                            │  tags[]       │
                            │  memories[]   │
                            │  history[]    │
                            │  choices[]    │
                            └───────┬───────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              ▼                     ▼                     ▼
     ┌──────────────┐      ┌──────────────┐      ┌──────────────┐
     │ game-engine  │      │   storage    │      │   renderer   │
     │              │      │              │      │              │
     │ 选择处理      │◄─────│ autoSave()   │      │ 页面渲染      │
     │ 场景跳转      │      │ autoLoad()   │─────▶│ DOM 更新      │
     │ 章节切换      │      │ saveToSlot() │      │              │
     └──────┬───────┘      └──────────────┘      └──────────────┘
            │                                                │
            │  ┌─────────────────────────────────────────┐   │
            └──│         localStorage                    │◀──┘
               │  • cien_anos_autosave  (自动存档)       │
               │  • cien_anos_slot_1~6 (手动槽位)       │
               │  • cien_anos_achievements (成就)        │
               │  • cien_anos_big_save (大存档卡片)      │
               │  • settings_fontSize / settings_volume  │
               └─────────────────────────────────────────┘
```

---

## 五、外部关联文件

| 文件路径 | 关联方式 | 用途 |
|---------|---------|------|
| `frontend/styles/styles.css` | `<link>` 引用 | 全局样式表，定义所有视觉风格 |
| `frontend/assets/audio/… .mp3` | `<audio>` 引用 | 背景音乐（25MB MP3） |
| `story-viewer/story-explorer.html` | 主菜单链接跳转 | 独立的插图故事浏览器（97KB HTML） |
| `story-viewer/images/` | story-explorer 内部引用 | 26 张百年孤独插画 |
| Google Fonts CDN | 外部 `<link>` | Cormorant Garamond, Cinzel, Noto Serif SC |
| `docs/project-spec.md` | 项目文档 | 项目规格说明书（27KB） |
| `docs/implementation-guide.md` | 项目文档 | 实现指南（35KB） |
| `docs/manual.md` | 项目文档 | 用户手册（30KB） |
| `docs/docs structure.txt` | 项目文档 | 文档结构说明（2.5KB） |
| `README.md` | 项目文档 | 项目说明 |

---

## 六、修改指南：常见需求 → 对应文件

| 想修改什么 | 改哪个文件 | 说明 |
|-----------|-----------|------|
| 页面标题/字体/颜色 | `styles/styles.css` | 全局样式 |
| 封面动画/致谢名单文字 | `src/ui/ui.js` | `showCover()`, `showCredits()` |
| 添加/修改章节剧情 | `assets/data/chapters-data*.js` | 在 `registerChapter()` 调用中编辑 |
| 章节标题/编号/元数据 | `src/utils/config.js` | 修改 `CHAPTER_META` 对象 |
| 添加/修改角色 | `src/utils/config.js` | 修改 `CHARACTER_GENDERS`, `RELATION_DB` |
| 添加/修改成就 | `src/utils/config.js` | 修改 `ACHIEVEMENTS` 数组 |
| 修改选择分支逻辑 | `src/core/game-engine.js` | `selectChoice()`, `switchToChapter()` |
| 修改页面渲染样式 | `src/core/renderer.js` | `renderLeftPage()`, `renderRightPage()` |
| 修改 UI 布局/新增面板 | `frontend/circle-of-fate.html` | HTML 结构 + `src/ui/ui.js` |
| 修改侧边栏内容 | `src/ui/sidebar.js` | 家族树/档案/简介/关系查询 |
| 修改存档逻辑 | `src/utils/storage.js` | `StorageManager`, `SaveLoadPanel` |
| 修改设置功能 | `src/ui/settings.js` | `SettingsPanel` |
| 修改键盘快捷键 | `src/app.js` | `keydown` 事件监听 |
| 修改故事画卷 | `story-viewer/story-explorer.html` | 独立页面 |

---

## 七、全局变量/函数速查表

> 所有模块通过全局作用域通信（非 ES Module），了解这些名称有助于快速定位代码。

| 名称 | 定义位置 | 类型 |
|------|---------|------|
| `CHAPTER_META` | `config.js` | 常量对象 |
| `CHAPTER_ORDER` | `config.js` | 常量数组 |
| `CHARACTER_GENDERS` | `config.js` | 常量对象 |
| `CHARACTER_ALIASES` | `config.js` | 常量对象 |
| `RELATION_DB` | `config.js` | 常量数组 |
| `ACHIEVEMENTS` | `config.js` | 常量数组 |
| `ENDING_DEFS` | `config.js` | 常量对象 |
| `resolveCharacterName()` | `config.js` | 函数 |
| `findRelation()` | `config.js` | 函数 |
| `findRelationPath()` | `config.js` | 函数 |
| `determineEnding()` | `config.js` | 函数 |
| `chapters` | `chapter-registry.js` | 全局对象 |
| `memoryRegistry` | `chapter-registry.js` | 全局对象 |
| `familyTreeRegistry` | `chapter-registry.js` | 全局对象 |
| `registerChapter()` | `chapter-registry.js` | 函数 |
| `getCurrentChapterData()` | `chapter-registry.js` | 函数 |
| `getGlobalProgress()` | `chapter-registry.js` | 函数 |
| `chapterNumToId()` | `chapter-registry.js` | 函数 |
| `getChapterForScene()` | `chapter-registry.js` | 函数 |
| `GameState` | `game-state.js` | 全局对象 |
| `checkAchievements()` | `achievements.js` | 函数 |
| `checkAndNotifyAchievements()` | `achievements.js` | 函数 |
| `clearAchievements()` | `achievements.js` | 函数 |
| `showToast()` | `ui.js` | 函数 |
| `showCover()` | `ui.js` | 函数 |
| `showMainMenu()` | `ui.js` | 函数 |
| `showCredits()` | `ui.js` | 函数 |
| `BGM` | `ui.js` | 全局对象 |
| `StorageManager` | `storage.js` | 全局对象 |
| `SaveLoadPanel` | `storage.js` | 全局对象 |
| `GameEngine` | `game-engine.js` | 全局对象 |
| `Renderer` | `renderer.js` | 全局对象 |
| `SidebarManager` | `sidebar.js` | 全局对象 |
| `SettingsPanel` | `settings.js` | 全局对象 |
| `handleChoice()` | `renderer.js` | 全局函数 |
| `handleContinue()` | `renderer.js` | 全局函数 |
| `showMemoryPopup()` | `renderer.js` | 全局函数 |
| `selectChoice()` | `renderer.js` | 全局函数 |
| `confirmChoice()` | `renderer.js` | 全局函数 |
| `init()` | `app.js` | 入口函数 |
