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

/** 计算当前页面在全部故事线中的全局进度百分比（按场景数，非轮次） */
function getGlobalProgress() {
  const tot = getTotalPageCount();
  const cur = getCurrentPageIndex();
  return tot > 0 ? parseFloat(((cur / tot) * 100).toFixed(1)) : 0;
}

/* ---- 场景遍历辅助（提取公共逻辑，避免重复遍历 22 章） ---- */

/** 遍历全部章节的所有场景，回调 fn(sceneId, chNum, globalIndex1based)
 *  场景排序规则：先按 round 升序，同 round 内按数据文件中的定义顺序（叙事顺序）。
 *  使用显式 insertionOrder 索引打破平局，确保跨引擎确定性（不依赖 sort 稳定性）。 */
function _forEachScene(fn) {
  let idx = 0;
  for (const chId of CHAPTER_ORDER) {
    const chData = chapters[chId];
    if (!chData || !chData.scenes) continue;
    const meta = CHAPTER_META[chId];
    const chNum = meta ? meta.num : 0;

    // 记录数据文件中的定义顺序（Object.keys 对非整数键按插入顺序返回）
    const sceneKeys = Object.keys(chData.scenes);
    const insertionOrder = {};
    sceneKeys.forEach((sid, i) => { insertionOrder[sid] = i; });

    const sceneIds = sceneKeys.sort((a, b) => {
      const ra = chData.scenes[a].round || 0;
      const rb = chData.scenes[b].round || 0;
      if (ra !== rb) return ra - rb;
      // 同 round 内按数据文件定义顺序；显式 tiebreaker 确保不依赖引擎 sort 稳定性
      return (insertionOrder[a] || 0) - (insertionOrder[b] || 0);
    });

    for (const sid of sceneIds) {
      idx++;
      fn(sid, chNum, idx);
    }
  }
  return idx; // 返回场景总数
}

// 清除已缓存的场景总数（排序规则变更后需重新计算）
let _totalPageCount = null;
function getTotalPageCount() {
  if (_totalPageCount !== null) return _totalPageCount;
  _totalPageCount = _forEachScene(() => {});
  return _totalPageCount;
}

/** 当前场景的全局页码（1-indexed，按章→轮次排序） */
function getCurrentPageIndex() {
  let found = 0;
  _forEachScene((sid, chNum, idx) => {
    if (chNum === GameState.chapter && sid === GameState.currentScene) {
      found = idx;
    }
  });
  // 回退：如果按章节+场景ID找不到（可能是跨章导航后 GameState.chapter 未及时同步），
  // 则忽略章节号仅按场景ID查找，同时自动修正 GameState.chapter
  if (!found) {
    _forEachScene((sid, chNum, idx) => {
      if (sid === GameState.currentScene) {
        found = idx;
        if (GameState.chapter !== chNum) {
          GameState.chapter = chNum;
        }
      }
    });
  }
  return found || 1; // 未注册场景兜底为 1
}

/** 根据全局页码反查场景（1-indexed，拖动进度条跳转用） */
function getSceneAtPageIndex(targetIdx) {
  let result = null;
  _forEachScene((sid, chNum, idx) => {
    if (idx === targetIdx) result = { chapterNum: chNum, sceneId: sid };
  });
  return result;
}

/** 根据全局进度百分比反查最近的场景（保留兼容） */
function getSceneAtGlobalProgress(pct) {
  const tot = getTotalPageCount();
  const targetIdx = Math.max(1, Math.round((pct / 100) * tot));
  return getSceneAtPageIndex(targetIdx);
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
