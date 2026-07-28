# 《百年孤独·宿命之环》网页生成指令（联合版）

---

## 一、项目概述

将《百年孤独·宿命之环》第一章完整版转换为一个**书页风格的交互叙事网页**。页面视觉模拟一本摊开的旧书，内容分列左右两页，选项在同一页面内呈现，不产生跨页左右滚动阅读。

---

## 二、核心设计原则

### 2.1 书页布局
- **左右两栏**：模拟摊开的书页，左页与右页并列
- **左侧页**：展示叙事文本（场景标题、正文、说话者标注）
- **右侧页**：展示当前可选项（选项按钮）或结算信息
- **同页交互**：所有点击、切换、反馈均在当前页面完成，不跳转新页

### 2.2 功能分区
页面分为四个区域：

```
┌──────────────────────────────────────────────────────────┐
│ 顶部栏（全局导航）                                      │
│ [章节目录] [当前章节/轮次] [宿命值] [设置⚙️]           │
├────────────────────────────┬─────────────────────────────┤
│                            │                             │
│      左页（叙事区）        │      右页（交互区）         │
│                            │                             │
│  · 场景标题               │  · 当前选项列表             │
│  · 说话者+正文            │  · 每个选项为可点击按钮      │
│  · 过渡文字（灰色斜体）    │  · 悬停/选中状态反馈        │
│  · 记忆碎片提示（底部）    │  · 结算时显示标签/数值      │
│                            │                             │
├────────────────────────────┴─────────────────────────────┤
│ 底部栏                                                  │
│ [存档] [读档] [家族树🌳] [历史档案📜] [个人简介👤]      │
└──────────────────────────────────────────────────────────┘
```

### 2.3 封闭阅读区
- **左页与右页共同构成一个阅读视野**
- 所有叙事内容在这两页范围内完整呈现
- **不需要上下滚动阅读长文本**——内容过长时，采用翻页式分段
- 选项点击后，左右页内容同步更新（左页换新叙事，右页换新选项）

---

## 三、功能模块说明

### 3.1 顶部栏（全局控制）

| 元素 | 功能 |
|------|------|
| 章节目录 | 下拉菜单，显示已解锁章节 |
| 当前进度 | "第一章 · 第X轮选择" |
| 宿命值 | 图标+数值（0-10），颜色随数值变化 |
| 设置按钮 | 齿轮图标，点击弹出设置面板 |

**设置面板内容：**
- 字体大小（小/中/大）
- 背景音乐音量（滑块）
- 音效开关
- 重置游戏（确认对话框）

### 3.2 左页（叙事区）

**展示内容：**
1. **场景标题**（如"第一轮选择 · 磁铁"）
2. **说话者标注**（如"乌尔苏拉："或"你选择——"）
3. **正文文本**（支持斜体、粗体、引号）
4. **过渡文本**（灰色斜体，位于场景底部，作为情感连接）

**样式要求：**
- 字体：衬线字体（如 Cormorant Garamond）
- 行距：1.8，便于阅读
- 首行缩进：2字符
- 说话者颜色区分（如乌尔苏拉为深红，梅尔基亚德斯为暗金）

### 3.3 右页（交互区）

**选择模式：**
- 显示当前轮次的选项列表（2-3个选项）
- 每个选项为卡片式按钮，悬停时有轻微上浮效果
- 点击后，按钮短暂高亮，然后左右页同时更新

**结算模式：**
- 显示本轮获得的标签列表
- 显示宿命值变化动画
- 显示"进入下一轮"或"进入下一章"按钮

**记忆碎片触发：**
- 当选择解锁记忆碎片时，右页底部弹出碎片卡片
- 碎片卡片包含：标题、简短描述、图标

### 3.4 底部栏（辅助功能）

| 按钮 | 功能 |
|------|------|
| 存档 | 保存当前进度到 localStorage |
| 读档 | 读取存档，恢复状态 |
| 家族树 | 弹出侧边栏/模态框，显示布恩迪亚家族谱系 |
| 历史档案 | 弹出侧边栏/模态框，显示已解锁的章节摘要和记忆碎片 |
| 个人简介 | 弹出侧边栏/模态框，显示当前玩家状态（标签、宿命值、已做选择） |

---

## 四、数据结构规范

### 4.1 场景数据

```javascript
{
  id: 'scene_01_magnet',          // 唯一标识
  type: 'choice',                  // 'narrative' | 'choice' | 'settlement'
  chapter: 1,                      // 所属章节
  round: 1,                        // 第几轮选择（1-5）
  title: '第一轮选择 · 磁铁',      // 场景标题
  leftPage: {                      // 左页内容
    speaker: '乌尔苏拉',           // 说话者（可选）
    speakerColor: '#8b1a1a',       // 说话者颜色
    paragraphs: [                  // 正文段落数组
      '那是我们仅有的牲口。你拿它们换了两块废铁？'
    ],
    transition: '你选择——'         // 底部过渡文字（可选）
  },
  choices: [                       // 右页选项（仅当 type === 'choice'）
    {
      id: 'choice_a',
      label: '拖着磁铁走进丛林',
      description: '你不回答她。你扛起磁铁，走进密林...', // 悬停提示
      nextScene: 'scene_02_a',
      effects: {
        tags: ['执着勘探者'],
        fate: 2,
        memory: null
      }
    }
  ],
  settlement: {                    // 结算数据（仅当 type === 'settlement'）
    summary: '无论你选了哪一条路...', // 结算文本
    tags: ['执着勘探者'],
    fateTotal: 5,
    fateLevel: '宿命追随者',
    memories: ['覆手'],
    nextButton: '进入第二章'
  },
  memoryFragment: {                // 记忆碎片（可选）
    id: '覆手',
    title: '覆手',
    description: '你和奥雷里亚诺一起按住冰块...'
  }
}
```

### 4.2 游戏状态

```javascript
const gameState = {
  currentScene: 'scene_01_magnet',
  chapter: 1,
  round: 1,
  tags: [],
  fateCounter: 0,
  memories: [],
  history: [],          // 已访问场景ID
  choices: [],          // 已选选项ID
  chapterEntry: null    // 下一章入口条件
}
```

---

## 五、UI/视觉设计规范

### 5.1 书页背景
- 使用你提供的书页背景图
- 背景图覆盖整个页面，左右两页自然拼接
- 书页中缝有轻微阴影，模拟书脊凹陷
- 文字区域半透明白色底色（rgba(255,248,235,0.85)），确保文字清晰

### 5.2 配色方案

| 用途 | 色值 |
|------|------|
| 页面背景 | 书页图（覆盖） |
| 文字底色 | rgba(255, 248, 235, 0.88) |
| 主文字 | #2c1810 |
| 标题文字 | #5a3825 |
| 过渡文字 | #8a7a6a（斜体） |
| 说话者-乌尔苏拉 | #8b1a1a |
| 说话者-何塞 | #2c3e50 |
| 说话者-梅尔基亚德斯 | #b8860b |
| 说话者-旁白 | #5a3825 |
| 选项按钮-默认 | #f5ede4 |
| 选项按钮-边框 | #c4a882 |
| 选项按钮-悬停 | #e8d5c0 |
| 选项按钮-选中 | #d4a574 |
| 宿命值-低(0-3) | #6b8e6b |
| 宿命值-中(4-7) | #b8860b |
| 宿命值-高(8-10) | #8b1a1a |

### 5.3 字体

```css
/* 从 Google Fonts 加载 */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Cinzel:wght@400;700&display=swap');

--font-body: 'Cormorant Garamond', 'Georgia', serif;
--font-title: 'Cinzel', 'Times New Roman', serif;
--font-mono: 'Courier New', monospace;
```

### 5.4 选项按钮样式

```css
.choice-btn {
  display: block;
  width: 100%;
  padding: 16px 20px;
  margin-bottom: 12px;
  background: rgba(245, 237, 228, 0.9);
  border: 1px solid #c4a882;
  border-radius: 4px;
  font-family: var(--font-body);
  font-size: 1.05rem;
  text-align: left;
  color: #2c1810;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;
}

.choice-btn:hover {
  background: #e8d5c0;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.choice-btn .choice-label {
  font-weight: 600;
  color: #5a3825;
  margin-right: 8px;
}

.choice-btn .choice-desc {
  font-size: 0.9rem;
  color: #6a5a4a;
}
```

---

## 六、交互与动画

### 6.1 场景切换动画
- 选项点击后，当前页面内容**淡出**（0.3s）
- 新内容**淡入**（0.4s）
- 颜色：书页背景保持不变，只有文字和选项区域变化

### 6.2 宿命值变化
- 每次选择后，顶部宿命值数字变化
- 变化时数字闪烁/跳动
- 颜色随数值段变化

### 6.3 翻页感（不实际翻页）
- 场景切换时，左右内容同步更新
- 左页内容上滑移出，新内容滑入（类似翻页效果，但同一页内）
- 或者保持淡入淡出，更安静、更书卷气

### 6.4 记忆碎片解锁
- 解锁时，右页底部滑入碎片卡片
- 卡片带金色边框，轻微发光
- 3秒后自动收起为小图标

---

## 七、侧边栏功能

### 7.1 家族树（🌳）
- 从底部栏点击触发
- 右侧滑出面板，或全屏模态框
- 展示布恩迪亚家族主要成员
- 当前附身角色高亮
- 可点击角色名跳转到对应章节（如已解锁）

### 7.2 历史档案（📜）
- 展示已解锁的记忆碎片
- 按章节分类
- 灰色显示未解锁的碎片（仅显示标题+问号）
- 点击已解锁碎片可查看详情

### 7.3 个人简介（👤）
- 当前玩家状态总览
- 已获得标签列表
- 宿命值及等级
- 各轮选择记录
- 当前附身角色

---

## 八、文件结构

```
/chapter1/
  index.html                    # 入口页面（轻量）
  /src/
    /data/
      chapter1.js               # 第一章完整数据
      tags.js                   # 全局标签定义
    /core/
      engine.js                 # 游戏引擎（场景切换、状态管理）
      state.js                  # 游戏状态对象
    /ui/
      renderer.js               # 主渲染器（左右页内容）
      sidebar.js                # 侧边栏（家族树/档案/简介）
      settings.js               # 设置面板
      animations.js             # 动画控制
    /components/
      choiceButton.js           # 选项按钮组件
      narrativeBlock.js         # 叙事块组件
      memoryCard.js             # 记忆碎片卡片
    /styles/
      main.css                  # 主样式
      sidebar.css               # 侧边栏样式
      settings.css              # 设置面板样式
      animations.css            # 动画样式
    /utils/
      storage.js                # 存档/读档
      helpers.js                # 工具函数
  /shared/
    /data/
      familyTree.js             # 家族树数据
    /styles/
      variables.css             # CSS变量
      reset.css                 # 重置样式
  /assets/
    /images/
      book-bg.jpg               # 书页背景图
    /fonts/
      (Google Fonts 在线加载)
```

---

## 九、代码规范摘要

### 9.1 模块导出
```javascript
// 每个模块导出一个默认对象或类
export const chapter1Data = { ... }
export class GameEngine { ... }
export function renderScene(data) { ... }
```

### 9.2 章节扩展接口
```javascript
// 后续章节只需提供相同接口
export const chapterData = {
  id: 'chapter2',
  title: '失眠症',
  scenes: { ... },
  initialScene: 'scene_01'
}
```

### 9.3 状态更新原则
```javascript
// 所有状态变更通过 engine 的方法进行，不直接修改 state
engine.selectChoice(choiceId);
engine.goToScene(sceneId);
engine.saveGame();
engine.loadGame();
```

---

## 十、交付要求

1. **单页HTML**（所有资源内联或通过ES Module加载）
2. **所有15个选项分支完整实现**
3. **书页左右布局**，背景使用你提供的书页图
4. **响应式**：桌面双栏，移动端单栏（左页在上，右页在下）
5. **存档/读档**功能完整
6. **家族树/历史档案/个人简介**侧边栏完整
7. **设置面板**完整
8. **代码含中文注释**
9. **不依赖外部框架**（仅原生JS + CSS）
10. **保持模块化**，便于后续章节添加

---

## 十一、开发顺序建议

AI可按以下顺序生成代码：

1. `shared/styles/variables.css` + `reset.css`
2. `src/styles/main.css` + `animations.css`（书页布局，左右分栏）
3. `src/data/chapter1.js`（完整数据）
4. `src/core/state.js` + `engine.js`
5. `src/ui/renderer.js`（左右页渲染）
6. `src/components/choiceButton.js` + `narrativeBlock.js`
7. `src/ui/sidebar.js`（家族树/档案/简介）
8. `src/ui/settings.js`
9. `src/utils/storage.js`
10. `index.html`（入口）

---

**指令结束**

---

## 使用说明

将以上指令连同第一章完整版Markdown内容提交给AI，它应能生成一个完整的、书页风格的交互叙事网页。

**关键区别（相比上一版）：**
- ✅ 明确左右分栏布局
- ✅ 交互在同一页面内完成
- ✅ 顶部栏+侧边栏功能完整
- ✅ 家族树/历史档案/个人简介作为辅助功能
- ✅ 书页背景图融入设计
- ✅ 不跨页滚动阅读