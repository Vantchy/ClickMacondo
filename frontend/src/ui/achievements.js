/* ================================================================
   js/achievements.js — 成就系统
   依赖：js/config.js (ACHIEVEMENTS), js/game-state.js (GameState)
   ================================================================ */

function checkAchievements() {
  const unlocked = getUnlockedAchievements();
  return unlocked;
}

function getUnlockedAchievements() {
  const unlocked = [];
  ACHIEVEMENTS.forEach(ach => {
    if (ach.cond(GameState)) unlocked.push(ach.id);
  });
  // 持久化
  const stored = JSON.parse(localStorage.getItem('cien_anos_achievements') || '[]');
  const merged = [...new Set([...stored, ...unlocked])];
  localStorage.setItem('cien_anos_achievements', JSON.stringify(merged));
  return merged;
}

function isAchievementUnlocked(achId) {
  const stored = JSON.parse(localStorage.getItem('cien_anos_achievements') || '[]');
  return stored.includes(achId);
}

function clearAchievements() {
  localStorage.removeItem('cien_anos_achievements');
}

/* ---- 成就解锁通知 ---- */
let _lastAchievementCheck = [];

function checkAndNotifyAchievements() {
  const current = getUnlockedAchievements();
  const newly = current.filter(id => !_lastAchievementCheck.includes(id));
  _lastAchievementCheck = current;
  newly.forEach(id => {
    const ach = ACHIEVEMENTS.find(a => a.id === id);
    if (ach) {
      setTimeout(() => {
        const toast = document.getElementById('toast');
        if (toast) {
          toast.innerHTML = `<span style="font-size:1.2rem;">${ach.icon}</span> 成就解锁：<strong>${ach.name}</strong>`;
          toast.classList.add('show');
          if (toast._timer) clearTimeout(toast._timer);
          toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
        }
      }, 1000);
    }
  });
}

// 初始化成就检查列表
function initAchievementTracking() {
  _lastAchievementCheck = getUnlockedAchievements();
}
