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
}

/** 获取当前章节数据 */
function getCurrentChapterData() {
  if (GameState.chapter === 0) return chapters['prologue'] || null;
  return chapters[chapterNumToId(GameState.chapter)] || null;
}

/** 计算当前章节宿命值上限（所有选择中最高宿命之和） */
function getChapterMaxFate() {
  const chData = getCurrentChapterData();
  if (!chData || !chData.scenes) return 10;
  let maxFate = 0;
  Object.values(chData.scenes).forEach(scene => {
    if (scene.type === 'choice' && scene.choices) {
      let roundMax = 0;
      scene.choices.forEach(c => {
        if (c.effects && c.effects.fate) {
          roundMax = Math.max(roundMax, c.effects.fate);
        }
      });
      maxFate += roundMax;
    }
  });
  return maxFate || 10; // 兜底：至少10
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

/** 动态生成章节下拉菜单 — 显示所有已知章节，已注册数据的可用 */
function populateChapterSelect() {
  const select = document.getElementById('chapter-select');
  if (!select) return;

  select.innerHTML = '';
  const currentChNum = GameState.chapter;

  CHAPTER_ORDER.forEach(chId => {
    const meta = CHAPTER_META[chId];
    if (!meta) return;
    const chData = chapters[chId]; // 可能为 null（尚未注册数据）
    const displayTitle = getChapterDisplayTitle(chId);
    const chNum = meta.num;

    const option = document.createElement('option');
    option.value = chNum;
    option.dataset.chapterId = chId;
    option.textContent = displayTitle;

    // 判断章节状态
    const isRegistered = !!chData;
    const isCompleted = GameState.isChapterCompleted(chNum);
    const isCurrent = (chNum === currentChNum);
    const isNext = (chNum === currentChNum + 1);

    // 未注册数据的章节禁用
    if (!isRegistered) {
      option.disabled = true;
      option.textContent += '（敬请期待）';
    }
    // 已完成的章节（可查看）
    else if (isCompleted && !isCurrent) {
      option.textContent += ' ✓';
    }
    // 未到达且未完成的章节全部锁定（包括紧邻下一章）
    else if (!isCurrent && !isCompleted) {
      option.disabled = true;
      option.textContent += ' 🔒';
    }

    if (isCurrent) {
      option.selected = true;
    }

    select.appendChild(option);
  });

  // 切换章节事件（只绑定一次）
  if (!select._chapterListenerAttached) {
    select._chapterListenerAttached = true;
    select.addEventListener('change', function(e) {
      const targetChapter = parseInt(e.target.value);
      if (targetChapter !== GameState.chapter) {
        if (GameEngine.switchToChapter(targetChapter)) {
          Renderer.render();
          const chData = getCurrentChapterData();
          const targetChId = chapterNumToId(targetChapter);
          const targetChData = chapters[targetChId];
          const isViewing = GameState.isChapterCompleted(targetChapter) && targetChapter < GameState.chapter;
          if (isViewing) {
            showToast('📖 正在查看 ' + (targetChData ? targetChData.title : '第' + targetChapter + '章') + ' 的结算数据');
          } else {
            showToast('已跳转至 ' + (targetChData ? targetChData.title : '第' + targetChapter + '章'));
          }
          populateChapterSelect();
        }
      }
    });
  }
}
