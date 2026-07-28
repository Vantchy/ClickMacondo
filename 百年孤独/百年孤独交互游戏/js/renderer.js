/* ================================================================
   js/renderer.js — 主渲染器 + 全局事件处理函数
   依赖：js/game-state.js, js/game-engine.js, js/chapter-registry.js
   ================================================================ */

const Renderer = {
  /* 渲染整个页面 */
  render() {
    const scene = GameEngine.getCurrentScene();
    if (!scene) return;
    this.renderLeftPage(scene);
    this.renderRightPage(scene);
    this.updateTopBar(scene);
    this.updateBookmark();
  },

  /* 渲染左页（叙事区） */
  renderLeftPage(scene) {
    const leftPage = document.getElementById('left-page');
    if (!leftPage) return;

    // 淡出
    leftPage.classList.add('fading');

    setTimeout(() => {
      let html = '';
      const lp = scene.leftPage;

      // 场景标题
      if (scene.title) {
        html += `<div class="scene-title">${scene.title}</div>`;
      }

      // 说话者
      if (lp.speaker) {
        const colorClass = this._getSpeakerClass(lp.speaker);
        html += `<div class="speaker-label ${colorClass}" style="color: ${lp.speakerColor || ''}">${lp.speaker}：</div>`;
      }

      // 正文段落
      if (lp.paragraphs) {
        lp.paragraphs.forEach(p => {
          html += `<p class="narrative-paragraph">${p}</p>`;
        });
      }

      // 引用1
      if (lp.quotes) {
        lp.quotes.forEach(q => {
          html += `<span class="narrative-quote">${q}</span>`;
        });
      }

      // 引用后正文
      if (lp.postQuote) {
        lp.postQuote.forEach(p => {
          html += `<p class="narrative-paragraph">${p}</p>`;
        });
      }

      // 引用2
      if (lp.quotes2) {
        lp.quotes2.forEach(q => {
          html += `<span class="narrative-quote">${q}</span>`;
        });
      }

      // 引用2后正文
      if (lp.postQuote2) {
        lp.postQuote2.forEach(p => {
          html += `<p class="narrative-paragraph">${p}</p>`;
        });
      }

      // 过渡文字
      if (lp.transition) {
        html += `<div class="transition-text">${lp.transition}</div>`;
      }

      leftPage.innerHTML = html;
      leftPage.scrollTop = 0;
      leftPage.classList.remove('fading');
    }, 300);
  },

  /* 渲染右页（交互区） */
  renderRightPage(scene) {
    const rightPage = document.getElementById('right-page');
    if (!rightPage) return;

    rightPage.classList.add('fading');

    setTimeout(() => {
      let html = '';

      if (scene.type === 'choice' && scene.choices) {
        // 选项模式
        html += `<div class="right-section-title">做出你的选择</div>`;
        html += `<div class="choices-list">`;
        scene.choices.forEach(choice => {
          html += `
            <button class="choice-btn" data-choice-id="${choice.id}" onclick="handleChoice('${choice.id}')">
              <span class="choice-label">${choice.label}</span>
              <span class="choice-desc">${choice.description}</span>
            </button>`;
        });
        html += `</div>`;
      } else if (scene.type === 'settlement' && scene.settlement) {
        // 结算模式
        const st = scene.settlement;
        html += `<div class="right-section-title">📋 结算</div>`;
        html += `<div class="settlement-panel">`;

        if (st.summary) {
          html += `<div class="settlement-summary">${st.summary}</div>`;
        }

        // 显示本轮获得的标签
        if (GameState.choiceLog.length > 0) {
          const lastChoice = GameState.choiceLog[GameState.choiceLog.length - 1];
          if (lastChoice && lastChoice.tags.length > 0) {
            html += `<div style="text-align:center;margin:12px 0;">`;
            html += `<div style="font-size:0.75rem;color:var(--gold-dim);margin-bottom:6px;">获得标签：</div>`;
            lastChoice.tags.forEach(t => {
              html += `<span class="tag-badge">${t}</span>`;
            });
            html += `</div>`;
          }
        }

        // 宿命值
        const fateLevel = GameState.getFateLevel();
        html += `<div class="fate-summary" style="color: ${fateLevel.color}">`;
        const chMaxF = getChapterMaxFate();
        html += `宿命值：${GameState.fateCounter} / ${chMaxF} · ${fateLevel.level}`;
        html += `</div>`;
        html += `<div style="font-size:0.75rem;color:var(--gold-dim);text-align:center;margin-top:4px;">${fateLevel.desc}</div>`;

        // 记忆碎片
        if (GameState.choiceLog.length > 0) {
          const lastChoice = GameState.choiceLog[GameState.choiceLog.length - 1];
          if (lastChoice && lastChoice.memory && memoryRegistry[lastChoice.memory]) {
            const mem = memoryRegistry[lastChoice.memory];
            html += `<div class="memory-card">`;
            html += `<div class="memory-card-title">💎 ${mem.title}</div>`;
            html += `<div class="memory-card-desc">${mem.description}</div>`;
            html += `</div>`;
          }
        }

        // 下一步按钮
        if (st.nextScene) {
          html += `<button class="next-btn" onclick="handleNext('${st.nextScene}')">${st.nextLabel || '继续'}</button>`;
        } else if (st.isChapterEnd) {
          let nextChapterNum = GameState.chapter + 1;
          const lastChoice = GameState.choiceLog.length > 0 ? GameState.choiceLog[GameState.choiceLog.length - 1] : null;
          if (lastChoice && lastChoice.targetChapter) {
            nextChapterNum = lastChoice.targetChapter;
          }
          const nextChapterId = chapterNumToId(nextChapterNum);
          const nextChapterData = chapters[nextChapterId];

          if (st.isFinalEnd) {
            html += `<button class="next-btn" onclick="showEndingCredits()">${st.nextLabel || '查看致谢名单'}</button>`;
            html += `<div style="text-align:center;margin-top:16px;font-style:italic;color:var(--gold-dim);font-size:0.85rem;">`;
            html += `<p>羊皮卷已经合上。你走过了百年的孤独。</p>`;
            html += `</div>`;
          } else if (nextChapterData) {
            const enterLabel = '进入' + nextChapterData.title;
            html += `<button class="next-btn" onclick="GameEngine.goToNextChapter();Renderer.render();populateChapterSelect();">${enterLabel}</button>`;
            html += `<div style="text-align:center;margin-top:16px;font-style:italic;color:var(--gold-dim);font-size:0.85rem;">`;
            const nextMeta = CHAPTER_META[nextChapterId];
            if (nextMeta && nextMeta.subtitle) {
              const possessed = nextChapterData.possessedCharacter || '未知';
              html += `<p>你将附身于 <strong style="color:var(--gold-light);">${possessed}</strong></p>`;
              html += `<p style="margin-top:4px;">— ${nextMeta.subtitle}</p>`;
            }
            html += `</div>`;
          } else {
            html += `<button class="next-btn" style="opacity:0.6;cursor:default;">终章 · 故事结束</button>`;
            html += `<div style="text-align:center;margin-top:16px;font-style:italic;color:var(--gold-dim);font-size:0.85rem;">`;
            html += `<p>羊皮卷已经合上。故事到此结束。</p>`;
            html += `</div>`;
          }
        }

        html += `</div>`;
      } else if (scene.type === 'narrative') {
        // 纯叙事（分支结果）——显示"继续"按钮
        html += `<div class="right-section-title">继续旅程</div>`;
        html += `<div style="text-align:center;padding:20px;">`;
        html += `<p style="color:var(--gold-dim);font-style:italic;margin-bottom:16px;">阅读完左页的叙事内容后，点击继续。</p>`;
        html += `<button class="next-btn" onclick="handleContinue()">继续 ▸</button>`;
        html += `</div>`;
      }

      rightPage.innerHTML = html;
      rightPage.scrollTop = 0;
      rightPage.classList.remove('fading');
    }, 300);
  },

  /* 更新顶部栏 */
  updateTopBar(scene) {
    const progressLabel = document.getElementById('progress-label');
    const fateValue = document.getElementById('fate-value');
    const chapterData = getCurrentChapterData();
    const chapterTitle = chapterData ? chapterData.title : '未知章节';

    if (progressLabel) {
      if (GameState.chapter === 0) {
        progressLabel.textContent = '序章' + (scene.round > 0 ? ' · 时代选择' : '');
      } else if (scene.round === 0) {
        progressLabel.textContent = chapterTitle;
      } else if (scene.type === 'settlement' && scene.settlement && scene.settlement.isChapterEnd) {
        progressLabel.textContent = chapterTitle + ' · 章末结算';
      } else {
        progressLabel.textContent = chapterTitle + ' · 第' + scene.round + '轮';
      }
    }

    if (fateValue) {
      const oldValue = parseInt(fateValue.textContent) || 0;
      const newValue = GameState.fateCounter;
      fateValue.textContent = newValue;

      // 颜色
      const fateLevel = GameState.getFateLevel();
      fateValue.style.color = fateLevel.color;

      // 跳动动画（仅当值改变时）
      if (oldValue !== newValue) {
        fateValue.classList.remove('pulse');
        void fateValue.offsetWidth; // 触发回流
        fateValue.classList.add('pulse');
      }
    }
  },

  /* 更新书签/进度指示 */
  updateBookmark() {
    // 预留：可在顶部栏显示进度条
  },

  /* 获取说话者CSS类 */
  _getSpeakerClass(speaker) {
    if (speaker.includes('乌尔苏拉')) return 'ursula';
    if (speaker.includes('何塞')) return 'jose';
    if (speaker.includes('梅尔基亚德斯')) return 'melquiades';
    return 'narrator';
  }
};

/* ---- 全局事件处理函数 ---- */
function handleChoice(choiceId) {
  const result = GameEngine.selectChoice(choiceId);
  if (result) {
    // 先渲染分支叙事（左页）+ 继续按钮（右页）
    Renderer.render();
    // 检查是否解锁记忆碎片
    if (result.effects.memory) {
      setTimeout(() => {
        showToast(`💎 解锁记忆碎片：「${result.effects.memory}」`);
      }, 600);
    }
  }
}

function handleContinue() {
  const scene = GameEngine.getCurrentScene();
  if (scene && scene.type === 'narrative' && scene.nextScene) {
    GameEngine.goToScene(scene.nextScene);
    Renderer.render();
  }
}

function handleNext(nextSceneId) {
  // 检测是否为章末结算，标记章节完成
  const currentScene = GameEngine.getCurrentScene();
  if (currentScene && currentScene.settlement && currentScene.settlement.isChapterEnd) {
    GameState.markChapterCompleted(GameState.chapter);
  }
  GameEngine.goToScene(nextSceneId);
  Renderer.render();
}
