# 🏛️ `circle-of-fate.html` 文件架构全景图

> **入口文件**: [frontend/circle-of-fate.html](frontend/circle-of-fate.html)（正式版）/ [frontend/circle-of-fate-unlock.html](frontend/circle-of-fate-unlock.html)（破解版）
> **项目**: 百年孤独 · 宿命之环（互动叙事游戏）
> **生成日期**: 2026-08-04

---

## 一、项目总览

```
ClickMacondo/
├── README.md
├── frontend/                          ← 🎯 主应用目录
│   ├── circle-of-fate.html            ← 🔑 正式版入口
│   ├── circle-of-fate-unlock.html     ← 🔓 破解版入口（含调试工具）
│   ├── styles/
│   │   └── styles.css                 ← 全局样式（2,914 行）
│   ├── assets/
│   │   ├── audio/
│   │   │   └── elias_weber-… .mp3     ← 背景音乐（25MB）
│   │   └── data/
│   │       ├── chapters-data.js       ← 章节数据（主文件，404 行）
│   │       ├── chapters-data-1.js     ← 章节数据（扩展1，965 行）
│   │       ├── chapters-data-2.js     ← 章节数据（扩展2，329 行）
│   │       ├── chapters-data-3.js     ← 章节数据（扩展3，416 行）
│   │       ├── chapters-data-4.js     ← 章节数据（扩展4，141 行）
│   │       └── chapters-data-5.js     ← 章节数据（扩展5，595 行）
│   └── src/
│       ├── app.js                     ← 🚀 应用入口 / 胶水代码（270 行）
│       ├── core/                      ← 核心逻辑层
│       │   ├── chapter-registry.js    ← 章节注册系统（163 行）
│       │   ├── game-state.js          ← 全局游戏状态（378 行）
│       │   ├── game-engine.js         ← 游戏引擎（827 行）
│       │   └── renderer.js            ← 主渲染器（761 行）
│       ├── ui/                        ← UI 交互层
│       │   ├── ui.js                  ← Toast/封面/主菜单/BGM/收集页（707 行）
│       │   ├── achievements.js        ← 成就系统（88 行）
│       │   ├── sidebar.js             ← 侧边栏管理（568 行）
│       │   └── settings.js            ← 设置面板（110 行）
│       └── utils/                     ← 工具 / 数据层
│           ├── config.js              ← 全局常量/配置（639 行）
│           ├── storage.js             ← 存档系统（244 行）
│           ├── sfx.js                 ← 🔔 音效系统（129 行）⭐ 新增
│           └── debug-panel.js         ← 🔓 破解面板（328 行，仅解锁版）⭐ 新增
├── story-viewer/                      ← 📖 外部：故事画卷
│   ├── story-explorer.html
│   └── images/                        ← 24 张插图
└── docs/                              ← 📚 项目文档
    ├── dev-tree-diagram.md
    ├── dev-tree-viewer.html
    ├── improvement-plan.md            ← 改进计划 ⭐ 新增
    ├── doc-instruction/
    │   ├── docs structure.txt
    │   ├── ARCHITECTURE_circle-of-fate.md
    │   └── CODE_EXPLANATION_circle-of-fate.md
    └── Story-ideas/
        ├── project-spec.md
        ├── implementation-guide.md
        └── manual.md
```

---

## 二、依赖关系图（加载顺序 = 从上到下）

`circle-of-fate.html` 在第 506–534 行按**严格顺序**加载 JS 模块。下面的箭头 `A → B` 表示 **B 依赖 A**（B 的代码引用了 A 中定义的全局变量/函数）。

```
┌─────────────────────────────────────────────────────────────────────┐
│                    circle-of-fate.html                              │
│                                                                     │
│  <link> ─── styles/styles.css                                      │
│  <link> ─── Google Fonts (外部CDN)                                  │
│  <audio> ── assets/audio/… .mp3                                    │
│  <a>    ── ../story-viewer/story-explorer.html                     │
│                                                                     │
│  ★ JS 加载顺序（正式版 18 个文件，破解版 20 个文件）：              │
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
│  familyTreeRegistry{}│                   │  initAchievement…() │
│                     │                    │                     │
│ 依赖：config.js     │                    │ 依赖：config +      │
│ 提供：registerChapter│                   │      game-state     │
│       getCurrentChapterData               └─────────┬───────────┘
│       getGlobalProgress                             │
│       getTotalPageCount                             │
│       getCurrentPageIndex                           │
│       getSceneAtPageIndex                           │
└────────┬────────────────────┐                     │
         │                    │                     │
         ▼                    ▼                     │
┌──────────────────┐  ┌──────────────────┐         │
│ ③④ chapters-data │  │ ⑨ game-state.js  │◄────────┘
│ assets/data/     │  │ src/core/        │
│                  │  │                  │
│ 6个文件依次加载： │  │ 全局状态对象：    │
│  chapters-data-1 │  │  GameState{}     │
│  chapters-data   │  │                  │
│  chapters-data-2 │  │ 字段：chapter,   │
│  chapters-data-3 │  │ scene, round,    │
│  chapters-data-4 │  │ tags, memories,  │
│  chapters-data-5 │  │ history, choices, │
│                  │  │ relationships{}  │
│ 调用              │  │ _maxpg           │
│ registerChapter() │  │                  │
│ 填充 chapters{}   │  │ 方法：reset(),   │
│ 填充 memories{}   │  │ toJSON(),        │
│ 填充 familyTree{} │  │ fromJSON(),      │
│                  │  │ adjustRelation() │
│ 依赖：chapter-   │  │                  │
│       registry   │  │ 依赖：chapter-   │
└──────────────────┘  │       registry   │
                      └────────┬─────────┘
                               │ 被以下依赖
          ┌────────────────────┼────────────────────┐
          ▼                    ▼                    ▼
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ ⑩ ui.js          │  │ ⑪ storage.js     │  │ ⑮ sidebar.js     │
│ src/ui/          │  │ src/utils/       │  │ src/ui/          │
│                  │  │                  │  │                  │
│ UI工具函数：      │  │ 存档系统：        │  │ 侧边栏管理：      │
│  showToast()     │  │  StorageManager  │  │  SidebarManager  │
│  showCover()     │  │  SaveLoadPanel   │  │                  │
│  showMainMenu()  │  │                  │  │ openFamilyTree() │
│  BGM{}           │  │ autoSave/autoLoad│  │ openArchives()   │
│  showCredits()   │  │ saveToSlot()     │  │ openProfile()    │
│  updateBigSave() │  │ loadFromSlot()   │  │ openRelations()  │
│  startPlayTime…()│  │ 6个手动槽位       │  │ queryRelation()  │
│  openTagCollec…()│  │                  │  │                  │
│  openClueCollec…()│ │ 依赖：game-state │  │ 依赖：game-state │
│  openEndingsGal…()│ │       chapter-reg│  │       chapter-reg│
│  openGameplay…()  │ │       ui (Toast) │  │       config     │
│  closeGameplay…() │ │                  │  │                  │
│  成就/书签/       │  │                  │  │                  │
│  标签/线索/结局页  │  │                  │  │                  │
│                  │  │                  │  │                  │
│ 依赖：game-state │  │                  │  │                  │
│       game-engine│  │                  │  │                  │
│       (惰性)     │  │                  │  │                  │
│       storage    │  │                  │  │                  │
│       (惰性)     │  │                  │  │                  │
└────────┬─────────┘  └────────┬─────────┘  └──────────────────┘
         │                     │
         ▼                     ▼
┌──────────────────────────────────────────────┐
│ ⑫ game-engine.js                             │
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
│  debugJumpToChapter() — 调试跳转 ⭐ 新增      │
│                                              │
│ 依赖：game-state + chapter-registry          │
│       + storage + ui                         │
└────────────────────┬─────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│ ⑬ renderer.js                                │
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
│ ⑯ settings.js                                │
│ src/ui/                                      │
│                                              │
│ 设置面板：                                    │
│  SettingsPanel{}                             │
│                                              │
│  open() / close()                            │
│  setFontSize() — 小/中/大                    │
│  setVolume()    — BGM 音量                   │
│  resetGame()    — 重置游戏数据               │
│  nukeAll()      — 清除全部数据 ⭐ 新增        │
│  loadSettings() — 从 localStorage 恢复       │
│                                              │
│ 依赖：game-state + game-engine               │
│       + storage + achievements + ui          │
└────────────────────┬─────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│ ⑰ sfx.js  ⭐ 新增                            │
│ src/utils/                                   │
│                                              │
│ Web Audio API 音效系统（零依赖，纯代码合成）：  │
│  SFX{}                                       │
│                                              │
│  SFX.playSelect()   — 选项选中音（轻触羊皮纸）│
│  SFX.playConfirm()  — 确认执行音（落印质感）  │
│  SFX.playPageTurn() — 翻页音（书页沙沙声）    │
│                                              │
│ 依赖：无（纯 Web Audio API）                  │
└────────────────────┬─────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│ ⑱ app.js                                     │
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
│  8. 进度条拖动跳转 ⭐ 新增                    │
│  9. 初始化成就追踪 ⭐ 新增                    │
│                                              │
│ 依赖：全部上述模块                            │
└──────────────────────────────────────────────┘
         │
         │ （仅破解版 circle-of-fate-unlock.html 继续加载）
         ▼
┌──────────────────────────────────────────────┐
│ ⑲ debug-panel.js  ⭐ 新增（仅破解版）         │
│ src/utils/                                   │
│                                              │
│ 破解版章节跳转面板：                           │
│  Ctrl+Shift+D — 打开/关闭面板                │
│  debugJump(n)  — 控制台直接跳转到第 n 章      │
│  点击左上角章节名 — 打开面板                  │
│                                              │
│ 提供：debugTogglePanel(), debugJump()        │
│ 设置：window.__IS_DEBUG__ = true             │
│                                              │
│ 依赖：game-state + game-engine + renderer    │
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
| 记忆碎片集 | `#bookmarks-overlay` | `ui.js` | `openBookmarksPage()`, `closeArchiveBookmarks()` |
| 标签收集册 ⭐ | `#tagcollection-overlay` | `ui.js` | `openTagCollectionPage()`, `closeTagCollection()` |
| 结局回廊 ⭐ | `#endings-gallery-overlay` | `ui.js` | `openEndingsGallery()`, `closeEndingsGallery()` |
| 隐藏线索册 ⭐ | `#cluecollection-overlay` | `ui.js` | `openClueCollectionPage()`, `closeClueCollection()` |
| 玩法介绍 ⭐ | `#gameplay-overlay` | `ui.js` | `openGameplayIntro()`, `closeGameplayIntro()` |
| 设置面板 | `#settings-overlay` | `settings.js` | `SettingsPanel.open()` |
| 存档/读档 | `#saveload-overlay` | `storage.js` | `SaveLoadPanel.open()` |
| 左页（叙事） | `#left-page` | `renderer.js` | `Renderer.renderLeftPage()` |
| 右页（交互） | `#right-page` | `renderer.js` | `Renderer.renderRightPage()` |
| 顶部栏 | `#top-bar` | `renderer.js` | `Renderer.updateTopBar()` |
| 进度条 | `#reading-progress` | `renderer.js` + `app.js` | 渲染 + 拖动跳转事件 |
| 页码指示器 | `#page-indicator` | `renderer.js` + `chapter-registry.js` | `getTotalPageCount()`, `getCurrentPageIndex()` |
| 记忆碎片弹窗 | `#memory-popup` | `renderer.js` | `showMemoryPopup()` |
| Toast 提示 | `#toast` | `ui.js` | `showToast()` |
| 家族树侧边栏 | `#sidebar-family` | `sidebar.js` | `SidebarManager.openFamilyTree()` |
| 历史档案侧边栏 | `#sidebar-archives` | `sidebar.js` | `SidebarManager.openArchives()` |
| 个人简介侧边栏 | `#sidebar-profile` | `sidebar.js` | `SidebarManager.openProfile()` |
| 关系查询侧边栏 | `#sidebar-relations` | `sidebar.js` | `SidebarManager.openRelations()` |
| BGM 音频 | `#bgm-audio` | `ui.js` | `BGM.init()`, `BGM.tryPlay()` |
| 音效 ⭐ | Web Audio API | `sfx.js` | `SFX.playSelect()`, `SFX.playConfirm()`, `SFX.playPageTurn()` |
| 破解面板 ⭐ | `#debug-chapter-panel` | `debug-panel.js`（仅解锁版） | `debugTogglePanel()`, `debugJump()` |

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
                            │  _maxpg       │
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
     │ debugJump()⭐ │      └──────────────┘      └──────────────┘
     └──────┬───────┘                                    │
            │                                            │
            │  ┌─────────────────────────────────────┐   │
            ├──│  SFX  ⭐ (音效反馈)                  │───┘
            │  │  playSelect / playConfirm /         │
            │  │  playPageTurn                       │
            │  └─────────────────────────────────────┘
            │
            │  ┌─────────────────────────────────────────┐
            └──│         localStorage                    │◀──┘
               │  • cien_anos_autosave  (自动存档)       │
               │  • cien_anos_slot_1~6 (手动槽位)       │
               │  • cien_anos_achievements (成就)        │
               │  • cien_anos_big_save (大存档卡片)      │
               │  • cien_anos_tags (跨存档标签)           │
               │  • cien_anos_clues (跨存档线索)          │
               │  • cien_anos_endings (已解锁结局)        │
               │  • settings_fontSize / settings_volume  │
               └─────────────────────────────────────────┘
```

---

## 五、外部关联文件

| 文件路径 | 关联方式 | 用途 |
|---------|---------|------|
| `frontend/styles/styles.css` | `<link>` 引用 | 全局样式表（2,914 行），定义所有视觉风格 |
| `frontend/assets/audio/… .mp3` | `<audio>` 引用 | 背景音乐（25MB MP3） |
| `story-viewer/story-explorer.html` | 主菜单链接跳转 | 独立的插图故事浏览器 |
| `story-viewer/images/` | story-explorer 内部引用 | 24 张百年孤独插画（1 JPG + 23 PNG） |
| Google Fonts CDN | 外部 `<link>` | Cormorant Garamond, Cinzel, Noto Serif SC |
| `docs/Story-ideas/project-spec.md` | 项目文档 | 可玩性增强方案 |
| `docs/Story-ideas/implementation-guide.md` | 项目文档 | 实施指南 |
| `docs/Story-ideas/manual.md` | 项目文档 | 行动指南 |
| `docs/improvement-plan.md` | 项目文档 | 改进计划 ⭐ 新增 |
| `docs/doc-instruction/ARCHITECTURE_circle-of-fate.md` | 项目文档 | 文件架构全景图（本文件） |
| `docs/doc-instruction/CODE_EXPLANATION_circle-of-fate.md` | 项目文档 | 代码完整说明 |
| `docs/doc-instruction/docs structure.txt` | 项目文档 | 文档结构说明 |
| `docs/dev-tree-diagram.md` | 开发工具 | 依赖关系图（Markdown） |
| `docs/dev-tree-viewer.html` | 开发工具 | 依赖关系可视化浏览器 |
| `README.md` | 项目文档 | 项目说明 |

---

## 六、修改指南：常见需求 → 对应文件

| 想修改什么 | 改哪个文件 | 说明 |
|-----------|-----------|------|
| 页面标题/字体/颜色 | `styles/styles.css` | 全局样式（2,914 行） |
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
| 修改点击音效 ⭐ | `src/utils/sfx.js` | `SFX.playSelect/Confirm/PageTurn` |
| 修改主菜单项 ⭐ | `circle-of-fate.html` + `src/ui/ui.js` | 菜单按钮 HTML + JS 处理函数 |
| 修改标签/线索/结局收集页 ⭐ | `src/ui/ui.js` | `openTagCollectionPage()` 等 |
| 修改进度条拖动行为 ⭐ | `src/app.js` | `seekFromEvent()` |
| 修改破解面板 ⭐ | `src/utils/debug-panel.js` | 仅解锁版加载 |

---

## 七、全局变量/函数速查表

> 所有模块通过全局作用域通信（非 ES Module），了解这些名称有助于快速定位代码。

### 常量

| 名称 | 定义位置 | 类型 |
|------|---------|------|
| `CHAPTER_META` | `config.js` | 常量对象 |
| `CHAPTER_ORDER` | `config.js` | 常量数组 |
| `CHARACTER_GENDERS` | `config.js` | 常量对象 |
| `CHARACTER_ALIASES` | `config.js` | 常量对象 |
| `RELATION_DB` | `config.js` | 常量数组 |
| `ACHIEVEMENTS` | `config.js` | 常量数组 |
| `ENDING_DEFS` | `config.js` | 常量对象 |

### 函数

| 名称 | 定义位置 | 用途 |
|------|---------|------|
| `resolveCharacterName()` | `config.js` | 解析角色名称 |
| `findRelation()` | `config.js` | 查找两人关系 |
| `findRelationPath()` | `config.js` | 查找关系路径（BFS） |
| `determineEnding()` | `config.js` | 判定结局类型 |
| `registerChapter()` | `chapter-registry.js` | 注册章节数据 |
| `getCurrentChapterData()` | `chapter-registry.js` | 获取当前章节对象 |
| `getGlobalProgress()` | `chapter-registry.js` | 计算全书进度百分比 |
| `chapterNumToId()` | `chapter-registry.js` | 章节号→ID 转换 |
| `getChapterForScene()` | `chapter-registry.js` | 场景→章节反查 |
| `getTotalPageCount()` | `chapter-registry.js` | 计算全书总页数 ⭐ |
| `getCurrentPageIndex()` | `chapter-registry.js` | 获取当前全局页码 ⭐ |
| `getSceneAtPageIndex()` | `chapter-registry.js` | 页码反查场景 ⭐ |
| `checkAchievements()` | `achievements.js` | 检查成就解锁 |
| `checkAndNotifyAchievements()` | `achievements.js` | 检查并弹出通知 |
| `clearAchievements()` | `achievements.js` | 清除成就数据 |
| `initAchievementTracking()` | `achievements.js` | 初始化成就追踪 ⭐ |
| `showToast()` | `ui.js` | 弹出 Toast 提示 |
| `showCover()` | `ui.js` | 显示封面动画 |
| `showMainMenu()` | `ui.js` | 显示主菜单 |
| `showCredits()` | `ui.js` | 显示致谢名单 |
| `updateBigSave()` | `ui.js` | 更新大存档卡片 ⭐ |
| `startPlayTimeTracking()` | `ui.js` | 开始计时游玩时长 ⭐ |
| `refreshBigSaveCard()` | `ui.js` | 刷新主菜单存档卡片 ⭐ |
| `openTagCollectionPage()` | `ui.js` | 打开标签收集册 ⭐ |
| `openClueCollectionPage()` | `ui.js` | 打开隐藏线索册 ⭐ |
| `openEndingsGallery()` | `ui.js` | 打开结局回廊 ⭐ |
| `openGameplayIntro()` | `ui.js` | 打开玩法介绍 ⭐ |
| `closeGameplayIntro()` | `ui.js` | 关闭玩法介绍 ⭐ |
| `closeTagCollection()` | `ui.js` | 关闭标签收集 ⭐ |
| `closeClueCollection()` | `ui.js` | 关闭线索收集 ⭐ |
| `closeEndingsGallery()` | `ui.js` | 关闭结局回廊 ⭐ |
| `closeArchiveBookmarks()` | `ui.js` | 关闭记忆碎片集 ⭐ |
| `continueFromMenu()` | `ui.js` | 主菜单"继续阅读" ⭐ |
| `startNewGame()` | `ui.js` | 主菜单"重新开始" ⭐ |
| `exitToCover()` | `ui.js` | 主菜单"回到封面" ⭐ |
| `handleChoice()` | `renderer.js` | 处理选项点击 |
| `handleContinue()` | `renderer.js` | 处理继续按钮 |
| `showMemoryPopup()` | `renderer.js` | 显示记忆碎片弹窗 |
| `selectChoice()` | `renderer.js` | 两步确认：第一步高亮 |
| `confirmChoice()` | `renderer.js` | 两步确认：第二步执行 |
| `init()` | `app.js` | 应用入口函数 |
| `debugTogglePanel()` | `debug-panel.js` | 打开/关闭破解面板 ⭐ |
| `debugJump()` | `debug-panel.js` | 控制台跳转命令 ⭐ |

### 全局对象

| 名称 | 定义位置 | 用途 |
|------|---------|------|
| `chapters` | `chapter-registry.js` | 章节注册表 |
| `memoryRegistry` | `chapter-registry.js` | 记忆碎片注册表 |
| `familyTreeRegistry` | `chapter-registry.js` | 家族树注册表 |
| `GameState` | `game-state.js` | 全局游戏状态单例 |
| `GameEngine` | `game-engine.js` | 游戏引擎对象 |
| `Renderer` | `renderer.js` | 主渲染器对象 |
| `BGM` | `ui.js` | 背景音乐控制对象 |
| `StorageManager` | `storage.js` | 自动存档管理器 |
| `SaveLoadPanel` | `storage.js` | 手动存档面板对象 |
| `SidebarManager` | `sidebar.js` | 侧边栏管理器 |
| `SettingsPanel` | `settings.js` | 设置面板对象 |
| `SFX` ⭐ | `sfx.js` | 音效控制对象 |
| `__IS_DEBUG__` ⭐ | `debug-panel.js` | 调试模式标志（破解版为 true） |

---

## 八、正式版 vs 破解版 JS 加载对比

| 序号 | 正式版 (circle-of-fate.html) | 破解版 (circle-of-fate-unlock.html) |
|------|---------------------------|----------------------------------|
| 1 | `config.js` | `config.js` |
| 2 | `chapter-registry.js` | `chapter-registry.js` |
| 3-8 | `chapters-data-1~5.js` + `chapters-data.js` | 同正式版 |
| 9 | `game-state.js` | `game-state.js` |
| 10 | `achievements.js` | `achievements.js` |
| 11 | `ui.js` | `ui.js` |
| 12 | `storage.js` | `storage.js` |
| 13 | `game-engine.js` | `game-engine.js` |
| 14 | `renderer.js` | `renderer.js` |
| 15 | `sidebar.js` | `sidebar.js` |
| 16 | `settings.js` | `settings.js` |
| 17 | `sfx.js` ⭐ | `sfx.js` ⭐ |
| 18 | `app.js` | `app.js` |
| 19 | — | `debug-snapshot.js`（预留） |
| 20 | — | `debug-panel.js` ⭐ |

---

> **文档生成时间**：2026-08-04
> **分析范围**：`circle-of-fate.html` + `circle-of-fate-unlock.html` + 全部 14 个 JS 模块 + 6 个章节数据文件
> **总代码量**：约 7,800 行（JS，含数据文件），约 11,500 行（含 HTML + CSS）
