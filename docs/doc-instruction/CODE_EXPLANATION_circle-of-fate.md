# 《百年孤独 · 宿命之环》— 代码完整说明

> 基于 `frontend/circle-of-fate.html` 及其全部依赖模块的逐层解析

---

## 目录

1. [项目概述](#1-项目概述)
2. [HTML 结构全景](#2-html-结构全景)
3. [CSS 样式体系](#3-css-样式体系)
4. [JavaScript 模块架构](#4-javascript-模块架构)
5. [数据流与状态管理](#5-数据流与状态管理)
6. [核心游戏机制](#6-核心游戏机制)
7. [UI 交互系统](#7-ui-交互系统)
8. [存档系统](#8-存档系统)
9. [成就与记忆碎片](#9-成就与记忆碎片)
10. [场景类型详解](#10-场景类型详解)
11. [章节注册与数据加载](#11-章节注册与数据加载)

---

## 1. 项目概述

**《百年孤独 · 宿命之环》** 是一款基于网页的文字互动小说（Interactive Fiction / Visual Novel），以加夫列尔·加西亚·马尔克斯的《百年孤独》为蓝本改编。

### 1.1 技术栈

| 层级 | 技术 |
|------|------|
| 结构 | 纯 HTML5（单文件入口） |
| 样式 | 外部 CSS（`styles/styles.css`） |
| 逻辑 | 原生 JavaScript（ES6+，12 个模块） |
| 数据 | 静态 JS 对象（6 个章节数据文件） |
| 存储 | 浏览器 `localStorage` |
| 字体 | Google Fonts（Cormorant Garamond, Cinzel, Noto Serif SC） |
| 音频 | HTML5 `<audio>` 元素（单曲 BGM 循环） |

### 1.2 核心玩法

玩家以"附身"方式代入布恩迪亚家族的不同成员，在关键叙事节点做出选择，推动故事发展。选择会影响：
- **标签（Tags）**：定义玩家的性格倾向（如"不屈者"、"家族的守望者"）
- **记忆碎片（Memories）**：解锁隐藏的叙事片段
- **人物关系值（Relationships）**：与家族成员的好感度（0-100）
- **结局走向**：终章根据累积状态路由到三种结局之一

### 1.3 章节规模

- **22 个章节**：序章 + 第1-20章 + 终章
- **每个章节** 包含多个场景（Scene），场景类型包括：叙事、选择、探索、结算
- **6 个章节数据文件**（`chapters-data.js` ~ `chapters-data-5.js`）按批次加载

---

## 2. HTML 结构全景

文件 [circle-of-fate.html](frontend/circle-of-fate.html) 是单页应用（SPA）的入口，所有 UI 层都通过 CSS 控制显隐（`display`/`opacity`/class 切换），无页面跳转。

### 2.1 结构层次图

```
<body>
├── #cover-overlay           ← 开头动态封面（逐字动画 + 漂浮粒子）
│   ├── #cover-particles
│   ├── #cover-title-wrap
│   └── #cover-hint
│
├── #credits-overlay         ← 结尾致谢名单（纵向滚动动画）
│   ├── #credits-scroll
│   └── #credits-restart
│
├── #mainmenu-overlay        ← 主菜单（全屏宿命感页面）
│   ├── #mainmenu-particles
│   └── #mainmenu-content
│       ├── .mm-title-wrap
│       ├── .mm-savecard     ← 大存档记录卡片
│       └── .mm-options      ← 7 个菜单按钮
│
├── #achievements-overlay    ← 成就书签页（模态弹窗）
├── #bookmarks-overlay       ← 记忆碎片集（模态弹窗）
│
├── 背景层
│   ├── <audio> #bgm-audio   ← 背景音乐
│   ├── #book-bg             ← 书本背景纹理
│   ├── #book-texture        ← 叠加纹理
│   └── #vignette            ← 暗角效果
│
├── #app-container           ← 主应用容器
│   ├── #top-bar             ← 顶部栏（进度标签 + 情绪 + 菜单按钮）
│   ├── #book-area           ← 书页区域
│   │   ├── #left-page       ← 左页：叙事区
│   │   ├── #spine           ← 书脊装饰
│   │   └── #right-page      ← 右页：交互区
│   ├── #reading-progress    ← 可拖动的阅读进度条
│   ├── #page-indicator      ← 页码指示器
│   └── #bottom-bar          ← 底部栏（6 个功能按钮）
│
├── 4 个侧边栏（sidebar）
│   ├── #sidebar-family      ← 家族树
│   ├── #sidebar-archives    ← 历史档案
│   ├── #sidebar-profile     ← 个人简介
│   └── #sidebar-relations   ← 关系查询
│
├── #settings-overlay        ← 设置面板（字体大小 + 音量 + 重置）
├── #memory-popup            ← 记忆碎片弹窗（右下角滑入）
├── #toast                   ← Toast 提示
├── #saveload-overlay        ← 存档/读档槽位面板（6 个槽位）
│
└── 12 个 <script> 标签      ← 按依赖顺序加载
```

### 2.2 关键设计模式

- **单页应用**：所有面板通过添加/移除 CSS class（如 `.open`、`.hidden`、`.show`）控制显隐
- **双页书布局**：`#left-page`（叙事文本）+ `#right-page`（选择/交互），模拟翻书体验
- **遮罩关闭**：所有弹窗/侧边栏都有对应的 overlay，点击遮罩区域即可关闭

---

## 3. CSS 样式体系

样式文件为 [styles/styles.css](frontend/styles/styles.css)，核心设计语言：

- **色调**：深棕/羊皮纸色系（`#1a1410` 底色，`#d4b070` 金色文字）
- **CSS 变量**：`--gold`、`--gold-light`、`--gold-dim` 等统管全局金色调
- **字体族**：
  - `--font-title`：Cinzel（英文标题衬线）
  - `--font-body`：Cormorant Garamond（正文衬线）
  - `--font-cn`：Noto Serif SC（中文衬线）
  - `--font-ui`：系统 UI 字体
- **动画**：封面逐字淡入、粒子漂浮、致谢名单滚动、弹窗滑入/滑出、页面淡入淡出

---

## 4. JavaScript 模块架构

### 4.1 加载顺序与依赖关系

```
加载顺序（依赖方向自上而下）：

 1. config.js               ← 零依赖：常量、角色、关系、成就定义
 2. chapter-registry.js     ← 依赖 config（CHAPTER_META, CHAPTER_ORDER）
 3. chapters-data-1.js      ← 依赖 chapter-registry（registerChapter）
 4. chapters-data.js        ← 同上
 5. chapters-data-2.js      ← 同上
 6. chapters-data-3.js      ← 同上
 7. chapters-data-4.js      ← 同上
 8. chapters-data-5.js      ← 同上
 9. game-state.js           ← 依赖 chapter-registry（getCurrentChapterData）
10. achievements.js         ← 依赖 config + game-state
11. ui.js                   ← 依赖 game-state + game-engine（惰性）+ storage（惰性）
12. storage.js              ← 依赖 game-state + ui
13. game-engine.js          ← 依赖 game-state + storage + ui
14. renderer.js             ← 依赖 game-state + engine
15. sidebar.js              ← 依赖 game-state + chapter-registry
16. settings.js             ← 依赖 engine + storage + achievements + ui
17. app.js                  ← 依赖所有模块（入口/胶水代码）
```

### 4.2 模块职责速查表

| 模块 | 文件路径 | 核心职责 |
|------|----------|----------|
| **config** | `src/utils/config.js` | 章节元数据、人物性别/别名/关系数据库、成就定义、结局定义 |
| **chapter-registry** | `src/core/chapter-registry.js` | 章节注册表、全局进度计算、场景↔章节映射 |
| **game-state** | `src/core/game-state.js` | 单一游戏状态对象、标签/记忆/关系/历史管理 |
| **game-engine** | `src/core/game-engine.js` | 选择处理、场景跳转、章节切换、翻页导航 |
| **renderer** | `src/core/renderer.js` | 左页叙事渲染、右页交互渲染、探索场景渲染 |
| **app** | `src/app.js` | 初始化、全部事件绑定、键盘导航 |
| **ui** | `src/ui/ui.js` | Toast、封面动画、致谢名单、主菜单、BGM、终章评价 |
| **storage** | `src/utils/storage.js` | 6 槽位手动存档 + 独立自动存档 |
| **achievements** | `src/ui/achievements.js` | 成就检查、解锁通知、持久化 |
| **sidebar** | `src/ui/sidebar.js` | 家族树、历史档案、个人简介、关系查询 |
| **settings** | `src/ui/settings.js` | 字体大小、音量、游戏重置 |

---

## 5. 数据流与状态管理

### 5.1 GameState — 全局单例状态

游戏只有一个全局状态对象 `GameState`，所有模块直接读写它：

```javascript
GameState = {
  currentScene: 'void_awakening',  // 当前场景 ID
  chapter: 0,                      // 当前章节编号（0=序章, 1-20, 21=终章）
  round: 0,                        // 当前轮次
  tags: [],                        // 已获得的标签（如 '不屈者'）
  memories: [],                    // 已解锁的记忆碎片 ID 列表
  history: ['void_awakening'],     // 场景访问历史（支持前后翻页）
  historyIndex: 0,                 // 当前在历史中的位置
  choices: [],                     // 已做选择的 ID 列表
  sceneChoices: {},                // { sceneId: choiceId } — 锁定已做选择（回退不可更改）
  choiceLog: [],                   // 选择的详细日志
  completedChapters: {},           // { chapterNum: true } — 已完成的章节
  encounteredCharacters: [],       // 已遇到的人物名称列表
  characterFlags: {},              // { flagName: count } — 跨章节条件追踪
  relationships: {},               // { characterName: value } — 关系值 (0-100)
  relationshipLog: [],             // 关系值变动日志
  hasCompletedGame: false,         // 是否已通关
  playthroughCount: 0,             // 通关次数
}
```

### 5.2 数据流向

```
用户操作（点击/键盘）
    │
    ▼
app.js 事件处理
    │
    ├─→ GameEngine.selectChoice()   ← 处理选择
    │       ├─→ GameState（更新标签/记忆/关系）
    │       └─→ StorageManager.autoSave()
    │
    ├─→ GameEngine.navigateBack/Forward()  ← 翻页
    │       └─→ GameState.historyIndex 变化
    │
    └─→ Renderer.render()           ← 重新渲染
            ├─→ renderLeftPage()    ← 更新叙事文本
            ├─→ renderRightPage()   ← 更新交互区
            └─→ updateTopBar()      ← 更新进度/情绪
```

### 5.3 localStorage 持久化键名

| 键名 | 用途 |
|------|------|
| `cien_anos_autosave` | 自动存档（每次操作后自动写入） |
| `cien_anos_slot_1` ~ `cien_anos_slot_6` | 6 个手动存档槽位 |
| `cien_anos_big_save` | 大存档记录（主菜单展示用元数据） |
| `cien_anos_achievements` | 已解锁成就 ID 列表 |
| `settings_fontSize` | 字体大小设置 |
| `settings_volume` | 音量设置 |

---

## 6. 核心游戏机制

### 6.1 场景类型系统

每个章节由多个场景（Scene）组成，每个场景有一个 `type` 字段：

| 类型 | 说明 | 右页显示内容 |
|------|------|-------------|
| `choice` | 选择场景 | 2-3 个选项按钮，部分选项被记忆碎片锁定 |
| `narrative` | 纯叙事场景 | "继续"按钮，阅读后点击推进 |
| `settlement` | 结算场景 | 标签展示、关系变化、情感结算、"羊皮卷的另一页" |
| `exploration` | 探索场景 | 可点击的热点（hotspot），需达到最低发现数才能继续 |

### 6.2 选择机制

每个选项（Choice）的数据结构：

```javascript
{
  id: 'choice_xxx',
  label: '选项短标签',
  description: '选项详细描述',
  effects: {
    tags: ['标签1', '标签2'],        // 选择后获得的标签
    memory: 'mem_xxx',               // 解锁的记忆碎片 ID
    relationshipEffects: {           // 关系值变化
      '角色名': +10,                  // 正数 = 好感上升
      '角色名': -15                   // 负数 = 好感下降
    },
    characterFlags: {                // 跨章节标记
      'flag_name': 1
    },
    targetChapter: 5                 // 序章专用：跳转到的目标章节
  },
  nextScene: 'scene_xxx',            // 选择后跳转的场景 ID
  requiredMemory: 'mem_xxx',         // 需要持有某记忆碎片才能看到此选项
  isSecretOption: true,              // 秘密选项标记
  alternativeNarrative: '未选之路的叙事...'  // 结算页展示"另一种可能"
}
```

**两步确认防误触**：
1. 首次点击/按数字键 → 高亮选项（黄色边框）
2. 再次点击同一选项 或 按空格 → 确认选择

**选择锁定**：一旦做出选择，回退到该场景时不可更改（`sceneChoices` 锁定）。

### 6.3 翻页导航系统

```
history = [scene1, scene2, scene3, scene4, scene5]
                                              ↑
                                         historyIndex = 4（当前）
                          
← 左箭头：historyIndex--（回退到 scene4）
→ 右箭头：historyIndex++（前进到 scene6，如无则自然推进）

在历史中间做新选择 → 截断"未来"分支（丢弃 scene4, scene5）
```

### 6.4 章节推进流程

```
序章（选择时代入口）
    │
    ├─→ 选择"建立马孔多" → 跳转到第1章
    ├─→ 选择"战争年代"   → 跳转到第5章
    └─→ 选择"衰败时代"   → 跳转到第11章
                              │
                    逐章推进（需完成当前章）
                              │
                    第20章完成 → 终章
                              │
                    根据 tags/memories 决定结局
                    ├─ 反抗者结局（tags 含 '不屈者'/'解放者'/'反抗者'）
                    ├─ 宿命见证者结局（memories ≥ 10）
                    └─ 宿命旁观者结局（默认兜底）
```

### 6.5 人物关系系统

- **初始化**：首次遇到角色时，关系值设为 50
- **调整**：通过选项的 `relationshipEffects` 增减（±5 ~ ±25）
- **档位**：
  - 0-25：疏远（灰褐色）
  - 26-45：冷淡（浅褐色）
  - 46-65：普通（暖金色）
  - 66-85：亲近（亮金色）
  - 86-100：至交（金色高亮）
- **查看**：个人简介侧边栏 → "羁绊之人"区域，显示关系值进度条

---

## 7. UI 交互系统

### 7.1 封面动画（`showCover()`）

1. 生成 40 个随机漂浮粒子（`cover-particle`）
2. "百 年 孤 独" 逐字淡入动画（每个字延迟 0.18s）
3. 点击任意位置 → 封面隐藏，主菜单弹出

### 7.2 主菜单（`showMainMenu()`）

- 7 个按钮：继续阅读、重新开始、成就书签、记忆碎片集、故事画卷（外链）、设置、回到封面
- 大存档卡片：显示当前进度、附身角色、标签数、记忆数、游玩时长、已完成章节数
- 游玩时长追踪：每分钟自动 +1 写入 `cien_anos_big_save`

### 7.3 致谢名单（`showCredits()`）

- 纵向滚动动画（`creditsRoll`），持续约 25 秒
- 显示原著、游戏设计、剧本改编、程序开发等制作人员名单
- 底部显示终章评价（根据完成章节数 + 记忆碎片数评定称号）
- 25 秒后可点击"重新翻开羊皮卷"按钮重置游戏

### 7.4 底部栏功能按钮

| 按钮 | 功能 |
|------|------|
| 💾 存档 | 打开存档面板（6 槽位），手动保存 |
| 📂 读档 | 打开读档面板，从槽位恢复 |
| 🌳 家族树 | 打开侧边栏：已遇人物按世代排列 |
| 📜 历史档案 | 打开侧边栏：全部记忆碎片（按章节分组） |
| 👤 个人简介 | 打开侧边栏：当前状态、标签、选择记录、关系值 |
| 🔗 关系查询 | 打开侧边栏：选择两人查询关系（直接/间接路径 BFS） |

### 7.5 键盘快捷键

| 按键 | 功能 |
|------|------|
| `←` | 回退到上一页 |
| `→` / `Space` | 前进到下一页（或确认选择） |
| `1` `2` `3` | 在选择页高亮对应选项 |
| `Esc` | 关闭当前打开的面板，或呼出主菜单 |

### 7.6 探索场景（Exploration）

- 右页显示一个"探索区域"，包含多个可点击热点（hotspot）
- 每个热点有一个位置（`position: {x, y}`）和发现后的叙事文本
- 点击热点 → 弹出叙事弹窗 → 标记为已发现
- 达到 `requiredDiscoveries` 数量后，"继续旅程"按钮启用
- 发现全部热点 → 解锁成就"马孔多的探索者"

---

## 8. 存档系统

### 8.1 双层存档设计

| 层级 | 键名 | 触发时机 | 用途 |
|------|------|----------|------|
| 自动存档 | `cien_anos_autosave` | 每次选择/场景跳转后自动触发 | 断点续玩、主菜单"继续阅读" |
| 手动槽位 | `cien_anos_slot_1` ~ `cien_anos_slot_6` | 用户手动操作 | 关键节点备份、多路线探索 |

### 8.2 存档数据结构

```javascript
// 自动存档：直接存储 GameState.toJSON()
{ currentScene, chapter, round, tags, memories, history, ... }

// 手动槽位：包装一层元数据
{
  state: { /* GameState.toJSON() */ },
  meta: {
    timestamp: '2026/07/29 14:30',
    chapterTitle: '第五章 · 蕾梅黛丝与初战',
    chapter: 5,
    round: 3,
    sceneTitle: '战前抉择',
    sceneId: 'ch5_choice_war'
  }
}
```

### 8.3 存档面板 UI

- 6 个槽位，用中文数字（壹～陆）标识
- 空槽位：显示"保存到此"
- 已占用槽位：显示章节/轮次/时间，提供"读取"/"覆盖"/"删除"三个操作
- 覆盖和删除有确认对话框

---

## 9. 成就与记忆碎片

### 9.1 成就系统

**23 个成就**，分为几类：

| 类别 | 示例 | 触发条件 |
|------|------|----------|
| 进度成就 | "宿命之环"、"失眠症患者" | 完成特定章节 |
| 选择成就 | "磁铁与执着" | 选择特定选项（通过 tags 判断） |
| 收集成就 | "记忆收藏家"、"记忆大师" | 解锁 5/10 个记忆碎片 |
| 关系成就 | "羁绊之人" | 与任意角色关系值 ≥ 85 |
| 探索成就 | "马孔多的探索者"、"线索猎人" | 发现所有热点 / 使用线索解锁隐藏选项 |
| 多周目 | "轮回之人" | 通关 ≥ 2 次 |
| 终局成就 | "百年闭环"、"蚂蚁的行军" | 完成全部章节 |

**持久化**：已解锁成就存储在 `localStorage` 的 `cien_anos_achievements` 中，即使重置游戏也不会丢失。

**通知机制**：每次章节结算时调用 `checkAndNotifyAchievements()`，对比新旧列表，弹出新解锁成就的 Toast。

### 9.2 记忆碎片

- 每个章节可以定义若干记忆碎片（`memories`）
- 通过特定选择解锁（`choice.effects.memory`）
- 解锁后在右下角弹出滑入动画（4.5 秒后自动消失）
- 可在"历史档案"侧边栏和"记忆碎片集"弹窗中查看全部
- 某些选项要求持有特定记忆碎片才能可见（`requiredMemory`）

---

## 10. 场景类型详解

### 10.1 选择场景（type: 'choice'）

```
左页：叙事文本 → 右页：2-3 个选项按钮
    │
    ├─ 选项 1 ─→ nextScene A
    ├─ 选项 2 ─→ nextScene B（可能需要 requiredMemory）
    └─ 选项 3 ─→ nextScene C（可能是 isSecretOption）
```

渲染逻辑（`renderRightPage`）：
- 未锁定：显示全部可见选项，可点击选择
- 已锁定：显示已选选项高亮，其余灰化
- 秘密选项有特殊 CSS 类（`secret-option`）
- 情感成本和收益以标签形式展示

### 10.2 叙事场景（type: 'narrative'）

```
左页：叙事文本（可能有 speaker, paragraphs, quotes）
右页："继续"按钮
```

- 本质上是过场文本，阅读后点击继续推进
- `nextScene` 指向下一个场景

### 10.3 结算场景（type: 'settlement'）

```
右页展示：
├── 结算摘要（summary）
├── 本轮获得的标签
├── "羊皮卷的另一页"（未选选项的替代叙事）
├── 关系值变化（💛+10 / 💔-15）
├── 情感结算
└── 下一步按钮（进入下一章 / 查看致谢名单）
```

- `isChapterEnd`：章末结算，标记章节完成
- `isFinalEnd`：终章结算，触发致谢名单

### 10.4 探索场景（type: 'exploration'）

```
右页展示：
├── 探索区域（含多个可点击热点）
├── 发现进度（已发现 X / Y）
└── 继续按钮（达到最低发现数后启用）
```

---

## 11. 章节注册与数据加载

### 11.1 注册流程

```javascript
// 章节数据文件中的调用方式
registerChapter({
  id: 'chapter5',
  title: '第五章 · 蕾梅黛丝与初战',
  chapterNumber: 5,
  possessedCharacter: '奥雷里亚诺·布恩迪亚',
  initialScene: 'ch5_scene1',
  familyMembers: [/* 本章出现的家族成员 */],
  memories: { /* 本章的记忆碎片 */ },
  moods: { /* 场景情绪映射 */ },
  scenes: {
    ch5_scene1: {
      id: 'ch5_scene1',
      type: 'narrative',
      round: 1,
      title: '场景标题',
      leftPage: {
        speaker: '说话者',
        paragraphs: ['段落1', '段落2'],
        quotes: ['引用文字']
      },
      nextScene: 'ch5_choice1'
    },
    ch5_choice1: {
      id: 'ch5_choice1',
      type: 'choice',
      round: 1,
      title: '选择标题',
      leftPage: { /* 左页叙事 */ },
      choices: [/* 2-3 个选项 */]
    }
    // ... 更多场景
  }
});
```

### 11.2 全局注册表

注册后数据合并到三个全局对象：

| 注册表 | 变量名 | 内容 |
|--------|--------|------|
| 章节表 | `chapters` | `{ chapterId: chapterData }` |
| 记忆碎片表 | `memoryRegistry` | `{ memoryId: memoryData }` |
| 家族树表 | `familyTreeRegistry` | `{ name: memberData }` |

### 11.3 全局进度计算

`getGlobalProgress()` 遍历全部 22 个章节的所有场景，计算当前场景在全书中的百分比位置，用于阅读进度条的"全书 X%"显示。

---

## 附录：文件清单

```
frontend/
├── circle-of-fate.html          ← 入口 HTML（本文件）
├── styles/
│   └── styles.css               ← 全局样式
├── assets/
│   ├── audio/
│   │   └── elias_weber-mists-in-the-elven-lands-127808.mp3  ← BGM
│   └── data/
│       ├── chapters-data-1.js   ← 章节数据（批次1）
│       ├── chapters-data.js     ← 章节数据（批次2）
│       ├── chapters-data-2.js   ← 章节数据（批次3）
│       ├── chapters-data-3.js   ← 章节数据（批次4）
│       ├── chapters-data-4.js   ← 章节数据（批次5）
│       └── chapters-data-5.js   ← 章节数据（批次6）
└── src/
    ├── app.js                   ← 应用入口/事件绑定
    ├── core/
    │   ├── chapter-registry.js  ← 章节注册系统
    │   ├── game-engine.js       ← 游戏引擎
    │   ├── game-state.js        ← 游戏状态管理
    │   └── renderer.js          ← 主渲染器
    ├── ui/
    │   ├── achievements.js      ← 成就系统
    │   ├── settings.js          ← 设置面板
    │   ├── sidebar.js           ← 侧边栏管理
    │   └── ui.js                ← Toast/封面/菜单/BGM
    └── utils/
        ├── config.js            ← 全局配置/常量
        └── storage.js           ← 存档/读档
```

---

> **文档生成时间**：2026-07-29  
> **分析范围**：`circle-of-fate.html` + 全部 12 个 JS 模块 + 章节数据结构  
> **总代码量**：约 3500 行（HTML + JS，不含章节数据）
