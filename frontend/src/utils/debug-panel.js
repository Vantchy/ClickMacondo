/* ================================================================
   debug-panel.js — 破解版章节跳转面板
   快捷键：Ctrl+Shift+D  打开/关闭面板
   控制台：debugJump(n)   直接跳转到第 n 章 (0=序章, 1-20=正文, 21=终章)
   ================================================================ */

window.__IS_DEBUG__ = true;

(function () {
  'use strict';

  let panelVisible = false;
  let panelEl = null;

  /* ---- 章节列表 ---- */
  const CHAPTER_LIST = [
    { num: 0,  label: '序章',          subtitle: '羊皮卷的召唤' },
    { num: 1,  label: '第一章',        subtitle: '宿命之环' },
    { num: 2,  label: '第二章',        subtitle: '失眠症' },
    { num: 3,  label: '第三章',        subtitle: '丽贝卡——家族扩张' },
    { num: 4,  label: '第四章',        subtitle: '自动钢琴、皮埃特罗·克雷斯皮' },
    { num: 5,  label: '第五章',        subtitle: '蕾梅黛丝与初战' },
    { num: 6,  label: '第六章',        subtitle: '第一次战争、阿尔卡蒂奥暴政' },
    { num: 7,  label: '第七章',        subtitle: '奥雷里亚诺上校的战争循环' },
    { num: 8,  label: '第八章',        subtitle: '何塞·阿尔卡蒂奥归来、美人儿蕾梅黛丝' },
    { num: 9,  label: '第九章',        subtitle: '狂欢节屠杀、费尔南达登场' },
    { num: 10, label: '第十章',        subtitle: '大罢工、三千人屠杀' },
    { num: 11, label: '第十一章',      subtitle: '四年大雨、衰败开始' },
    { num: 12, label: '第十二章',      subtitle: '乌尔苏拉之死' },
    { num: 13, label: '第十三章',      subtitle: '梅梅与马乌里肖·巴比伦' },
    { num: 14, label: '第十四章',      subtitle: '香蕉公司的终结' },
    { num: 15, label: '第十五章',      subtitle: '梅梅之死、私生子的出现' },
    { num: 16, label: '第十六章',      subtitle: '加斯通到来、阿玛兰妲·乌尔苏拉回归' },
    { num: 17, label: '第十七章',      subtitle: '近亲之爱、羊皮卷破译' },
    { num: 18, label: '第十八章',      subtitle: '最后一个布恩迪亚的诞生' },
    { num: 19, label: '第十九章',      subtitle: '毁灭、蚂蚁、飓风' },
    { num: 20, label: '第二十章',      subtitle: '百年孤独的终局' },
    { num: 21, label: '终章',          subtitle: '羊皮卷的见证者' }
  ];

  /* ---- 创建面板 DOM ---- */
  function createPanel() {
    if (panelEl) return;

    panelEl = document.createElement('div');
    panelEl.id = 'debug-chapter-panel';
    panelEl.innerHTML = buildPanelHTML();
    document.body.appendChild(panelEl);

    // 绑定事件
    panelEl.querySelectorAll('.debug-chapter-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const num = parseInt(this.dataset.chapter);
        doJump(num);
      });
    });

    // 点击遮罩关闭
    panelEl.addEventListener('click', function (e) {
      if (e.target === panelEl) hidePanel();
    });
  }

  function buildPanelHTML() {
    const currentChapter = (typeof GameState !== 'undefined') ? GameState.chapter : -1;

    let btnsHTML = '';
    CHAPTER_LIST.forEach(ch => {
      const isCurrent = ch.num === currentChapter;
      btnsHTML += `
        <button class="debug-chapter-btn${isCurrent ? ' current' : ''}"
                data-chapter="${ch.num}"
                title="跳转到${ch.label}：${ch.subtitle}">
          <span class="debug-ch-num">${ch.num === 0 ? '序' : ch.num === 21 ? '终' : ch.num}</span>
          <span class="debug-ch-label">${ch.label}</span>
          <span class="debug-ch-sub">${ch.subtitle}</span>
        </button>`;
    });

    return `
      <div class="debug-panel-overlay">
        <div class="debug-panel-container">
          <div class="debug-panel-header">
            <span>🔧 调试模式 · 章节跳转</span>
            <button class="debug-panel-close" title="关闭 (Ctrl+Shift+D)">✕</button>
          </div>
          <div class="debug-panel-hint">
            点击任意章节直接跳转 — <strong>跨章状态保留</strong>（记忆/线索/好感/标签不丢失）
          </div>
          <div class="debug-chapter-grid">
            ${btnsHTML}
          </div>
          <div class="debug-panel-footer">
            <span>Ctrl+Shift+D 开关面板</span>
            <span>|</span>
            <span>控制台: <code>debugJump(n)</code></span>
          </div>
        </div>
      </div>`;
  }

  /* ---- 跳转逻辑 ---- */
  function doJump(chapterNum) {
    if (typeof GameEngine === 'undefined' || !GameEngine.debugJumpToChapter) {
      console.warn('GameEngine.debugJumpToChapter 不可用');
      return;
    }
    if (GameEngine.debugJumpToChapter(chapterNum)) {
      if (typeof Renderer !== 'undefined') Renderer.render();
      // 更新面板高亮
      refreshCurrentHighlight();
    }
  }

  function refreshCurrentHighlight() {
    if (!panelEl) return;
    const current = (typeof GameState !== 'undefined') ? GameState.chapter : -1;
    panelEl.querySelectorAll('.debug-chapter-btn').forEach(btn => {
      const num = parseInt(btn.dataset.chapter);
      btn.classList.toggle('current', num === current);
    });
  }

  /* ---- 显示/隐藏 ---- */
  function showPanel() {
    if (!panelEl) createPanel();
    refreshCurrentHighlight();
    panelEl.classList.add('visible');
    panelVisible = true;
  }

  function hidePanel() {
    if (!panelEl) return;
    panelEl.classList.remove('visible');
    panelVisible = false;
  }

  function togglePanel() {
    if (panelVisible) hidePanel();
    else showPanel();
  }

  /* ---- 全局快捷键 ---- */
  document.addEventListener('keydown', function (e) {
    // Ctrl+Shift+D 开关面板
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
      e.preventDefault();
      togglePanel();
    }
    // Esc 关闭面板
    if (e.key === 'Escape' && panelVisible) {
      hidePanel();
    }
  });

  /* ---- 注入 CSS ---- */
  function injectCSS() {
    const style = document.createElement('style');
    style.textContent = `
      #debug-chapter-panel { display: none; }
      #debug-chapter-panel.visible { display: block; }

      .debug-panel-overlay {
        position: fixed; inset: 0; z-index: 99999;
        background: rgba(20,14,8,0.85);
        display: flex; align-items: center; justify-content: center;
        backdrop-filter: blur(6px);
      }
      .debug-panel-container {
        background: linear-gradient(170deg, #2a1e14 0%, #1a120a 100%);
        border: 1px solid rgba(184,137,62,0.4);
        border-radius: 16px;
        padding: 24px 28px 20px;
        max-width: 780px; width: 92vw;
        max-height: 88vh; overflow-y: auto;
        box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(184,137,62,0.08);
      }
      .debug-panel-header {
        display: flex; align-items: center; justify-content: space-between;
        margin-bottom: 12px;
        font-family: var(--font-title, serif);
        font-size: 1.1rem; color: var(--gold-light, #d4b878);
        letter-spacing: 0.06em;
      }
      .debug-panel-close {
        background: none; border: 1px solid rgba(184,137,62,0.3);
        color: var(--gold-dim, #b8986a); font-size: 1rem;
        width: 30px; height: 30px; border-radius: 50%;
        cursor: pointer; transition: all 0.2s;
      }
      .debug-panel-close:hover {
        background: rgba(184,137,62,0.15); color: #fff;
      }
      .debug-panel-hint {
        font-size: 0.72rem; color: var(--gold-dim, #b8986a);
        margin-bottom: 16px; font-style: italic; line-height: 1.5;
      }
      .debug-panel-hint strong { color: #c0a878; }
      .debug-chapter-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 6px;
      }
      .debug-chapter-btn {
        display: flex; align-items: center; gap: 8px;
        background: rgba(184,137,62,0.06);
        border: 1px solid rgba(184,137,62,0.15);
        border-radius: 8px; padding: 8px 12px;
        cursor: pointer; transition: all 0.18s;
        text-align: left; color: inherit; font-family: inherit;
      }
      .debug-chapter-btn:hover {
        background: rgba(184,137,62,0.16);
        border-color: rgba(184,137,62,0.45);
        transform: translateY(-1px);
        box-shadow: 0 3px 12px rgba(0,0,0,0.3);
      }
      .debug-chapter-btn.current {
        background: rgba(184,137,62,0.2);
        border-color: var(--gold-light, #d4b878);
        box-shadow: 0 0 12px rgba(184,137,62,0.15);
      }
      .debug-chapter-btn.current .debug-ch-num {
        background: var(--gold-light, #d4b878);
        color: #1a120a;
      }
      .debug-ch-num {
        display: inline-flex; align-items: center; justify-content: center;
        width: 24px; height: 24px; border-radius: 6px;
        background: rgba(184,137,62,0.2); color: var(--gold-light, #d4b878);
        font-size: 0.7rem; font-weight: 700; flex-shrink: 0;
      }
      .debug-ch-label {
        font-size: 0.78rem; color: #c0a878; font-weight: 600;
        white-space: nowrap;
      }
      .debug-ch-sub {
        font-size: 0.64rem; color: #8a7a60;
        overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .debug-panel-footer {
        margin-top: 16px; padding-top: 10px;
        border-top: 1px solid rgba(184,137,62,0.12);
        display: flex; align-items: center; justify-content: center;
        gap: 10px; font-size: 0.65rem; color: #6a5a40;
      }
      .debug-panel-footer code {
        background: rgba(184,137,62,0.12); padding: 2px 7px;
        border-radius: 4px; font-size: 0.68rem; color: #b8986a;
      }
    `;
    document.head.appendChild(style);
  }

  /* ---- 初始化 ---- */
  function init() {
    if (typeof GameEngine === 'undefined') {
      // 延迟重试（模块加载顺序：game-engine.js 在 debug-panel.js 之前）
      setTimeout(init, 300);
      return;
    }
    injectCSS();
    createPanel();
    console.log('%c🔧 破解面板已就绪 %cCtrl+Shift+D 打开 | 控制台 debugJump(n) 直接跳转',
      'color:#c0a878;font-weight:bold;', 'color:#8a9ab0;');
  }

  // DOM 加载后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/* ---- 控制台快捷命令 ---- */
window.debugJump = function (chapterNum) {
  if (typeof GameEngine === 'undefined' || !GameEngine.debugJumpToChapter) {
    console.warn('GameEngine 未就绪');
    return;
  }
  if (chapterNum < 0 || chapterNum > 21) {
    console.warn('章节号范围: 0 (序章) ~ 21 (终章)');
    return;
  }
  if (GameEngine.debugJumpToChapter(chapterNum)) {
    if (typeof Renderer !== 'undefined') Renderer.render();
    console.log('✅ 已跳转到第 ' + chapterNum + ' 章');
  }
};
