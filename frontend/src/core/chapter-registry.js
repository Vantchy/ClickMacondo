/* ================================================================
   js/chapter-registry.js — 章节注册系统
   依赖：js/config.js (CHAPTER_META, CHAPTER_ORDER)
   ================================================================ */

/* ---- 全局章节注册表 ---- */
const chapters = {};           // { chapterId: chapterData }
const memoryRegistry = {};    // { memoryId: memoryData } — 全局记忆碎片
const familyTreeRegistry = {}; // { name: memberData } — 全局家族树（去重）

/** 注册一个章节的数据 */
function registerChapter(data) {
  chapters[data.id] = data;
  // 合并记忆碎片
  if (data.memories) {
    Object.assign(memoryRegistry, data.memories);
  }
  // 合并家族成员
  if (data.familyMembers) {
    data.familyMembers.forEach(m => {
      if (!familyTreeRegistry[m.name]) {
        familyTreeRegistry[m.name] = { ...m, firstAppearedIn: data.id };
      }
    });
  }
  // 合并情绪状态
  if (data.moods && typeof registerChapterMoods === 'function') {
    registerChapterMoods(data.id, data.moods);
  }
}

/** 获取当前章节数据 */
function getCurrentChapterData() {
  if (GameState.chapter === 0) return chapters['prologue'] || null;
  return chapters[chapterNumToId(GameState.chapter)] || null;
}

/** 根据场景 ID 反查其所属章节号（跨章导航必需） */
function getChapterForScene(sceneId) {
  for (const [chId, chData] of Object.entries(chapters)) {
    if (chData.scenes && chData.scenes[sceneId]) {
      const meta = CHAPTER_META[chId];
      return meta ? meta.num : 0;
    }
  }
  return null; // 未找到
}

/** 获取当前章节中所有记忆碎片 */
function getCurrentChapterMemories() {
  const chData = getCurrentChapterData();
  if (!chData || !chData.memories) return [];
  return Object.values(chData.memories);
}

/** 将 familyTreeRegistry 转为数组 */
function familyTreeToArray() {
  return Object.values(familyTreeRegistry);
}

/** 将章节编号转换为章节ID（处理终章的特殊ID映射） */
function chapterNumToId(num) {
  if (num === 0) return 'prologue';
  if (num === 21) return 'epilogue';
  return 'chapter' + num;
}

/** 获取章节显示标题（如 "第一章 · 宿命之环"） */
function getChapterDisplayTitle(chapterId) {
  const meta = CHAPTER_META[chapterId];
  const chData = chapters[chapterId];
  if (chData) return chData.title;
  if (meta) return meta.shortName + (meta.subtitle ? ' · ' + meta.subtitle : '');
  return chapterId;
}
