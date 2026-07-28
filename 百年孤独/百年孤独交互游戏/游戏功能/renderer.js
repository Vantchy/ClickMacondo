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
      // 可玩性增强：渲染边缘文字（Marginalia）
      if (scene.marginalia && scene.marginalia.text) {
        this._renderMarginalia(leftPage, scene.marginalia);
      }
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
        // 选项模式 — 可玩性增强：根据记忆碎片过滤选项
        const visibleChoices = GameEngine.filterChoicesByMemories
          ? GameEngine.filterChoicesByMemories(scene)
          : scene.choices;

        html += `<div class="right-section-title">做出你的选择</div>`;
        html += `<div class="choices-list">`;
        visibleChoices.forEach(choice => {
          const isSecret = choice.isSecretOption || choice.requiredMemory;
          const secretClass = isSecret ? ' secret-option' : '';
          // 情感成本标记
          let costGainHtml = '';
          if (choice.emotionalCost) {
            costGainHtml += `<span class="choice-cost">⚠ 失去：${choice.emotionalCost}</span>`;
          }
          if (choice.emotionalGain) {
            costGainHtml += `<span class="choice-gain">✦ 获得：${choice.emotionalGain}</span>`;
          }
          html += `
            <button class="choice-btn${secretClass}" data-choice-id="${choice.id}" onclick="handleChoice('${choice.id}')">
              <span class="choice-label">${choice.label}</span>
              <span class="choice-desc">${choice.description}</span>
              ${costGainHtml}
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
            // 可玩性增强：显示碎片解锁提示
            if (mem.unlockHint) {
              html += `<div style="font-size:0.72rem;color:var(--gold-dim);margin-top:6px;font-style:italic;border-top:1px dotted rgba(184,137,62,0.15);padding-top:6px;">🔑 ${mem.unlockHint}</div>`;
            }
            html += `</div>`;
          }
        }

        // 可玩性增强：展示"羊皮卷的另一页"（未选选项的叙事）
        html += this._renderAlternativeNarratives();

        // 可玩性增强：展示关系值变化
        html += this._renderRelationshipChanges();

        // 可玩性增强：展示情感结算
        html += this._renderEmotionalCost();

        // 可玩性增强：展示命运预告（如果结算数据中有 fateForecast）
        if (st.fateForecast) {
          html += `<div class="fate-forecast">`;
          html += `<div class="fate-forecast-label">🔮 命运预告</div>`;
          html += `<div class="fate-forecast-text">${st.fateForecast}</div>`;
          html += `</div>`;
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

      } else if (scene.type === 'exploration' && scene.hotspots) {
        // 可玩性增强：自由探索场景
        html += `<div class="right-section-title">🔍 探索这个场景</div>`;
        html += `<div style="text-align:center;color:var(--gold-dim);font-size:0.8rem;margin-bottom:12px;font-style:italic;">点击闪烁的光点来发现隐藏的事物</div>`;
        html += `<div class="exploration-area" id="exploration-area">`;
        html += `<div class="exploration-bg-hint">触碰那些微光……</div>`;
        scene.hotspots.forEach(hotspot => {
          const discoveredAttr = hotspot._discovered ? ' discovered' : '';
          html += `
            <div class="hotspot${discoveredAttr}"
                 id="${hotspot.id}"
                 style="left:${hotspot.position.x};top:${hotspot.position.y};"
                 onclick="handleHotspotClick('${hotspot.id}')">
              <div class="hotspot-marker"></div>
              <div class="hotspot-label">${hotspot.label}</div>
            </div>`;
        });
        html += `</div>`;
        html += `<div class="exploration-progress" id="exploration-progress">已发现 0 / ${scene.requiredDiscoveries || scene.hotspots.length}</div>`;
        const continueDisabled = (scene.requiredDiscoveries || 1) > 0 ? ' disabled' : '';
        html += `<button class="exploration-continue-btn" id="exploration-continue-btn"${continueDisabled} onclick="handleExplorationContinue('${scene.nextScene}')">继续旅程 ▸</button>`;
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
    const moodLabel = document.getElementById('mood-label');
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

    // 可玩性增强：更新角色情绪状态
    if (moodLabel) {
      const chId = chapterData ? chapterData.id : null;
      let moodText = '';
      if (chId && typeof getCurrentMood === 'function') {
        moodText = getCurrentMood(chId, scene.id) || '';
      }
      // 场景数据也可直接提供 mood
      if (!moodText && scene.mood) {
        moodText = scene.mood;
      }
      moodLabel.textContent = moodText;
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
  },

  /* 可玩性增强：渲染边缘文字 */
  _renderMarginalia(container, marginaliaData) {
    if (!marginaliaData || !marginaliaData.text) return;
    const styleClass = marginaliaData.style || 'whisper';
    const el = document.createElement('div');
    el.className = 'marginalia marginalia-' + styleClass;
    el.textContent = marginaliaData.text;
    container.appendChild(el);
    // 追踪边缘文字阅读
    if (typeof GameEngine !== 'undefined' && GameEngine.trackMarginaliaRead) {
      GameEngine.trackMarginaliaRead();
    }
  },

  /* 可玩性增强：渲染"羊皮卷的另一页" */
  _renderAlternativeNarratives() {
    const chapterData = getCurrentChapterData();
    if (!chapterData || !chapterData.scenes) return '';
    const lastChoiceLog = GameState.choiceLog.length > 0
      ? GameState.choiceLog[GameState.choiceLog.length - 1]
      : null;
    if (!lastChoiceLog) return '';

    // 找到包含被选中选项的选择场景（通过 choice ID 匹配）
    let choiceScene = null;
    for (const scene of Object.values(chapterData.scenes)) {
      if (scene.type === 'choice' && scene.choices) {
        const found = scene.choices.some(c => c.id === lastChoiceLog.choiceId);
        if (found) { choiceScene = scene; break; }
      }
    }
    if (!choiceScene) return '';

    const unselectedChoices = choiceScene.choices.filter(
      c => c.id !== lastChoiceLog.choiceId && c.alternativeNarrative
    );

    if (unselectedChoices.length === 0) return '';

    // 追踪"另一种可能"已读
    if (typeof GameEngine !== 'undefined' && GameEngine.trackAltNarrativeSeen) {
      setTimeout(() => GameEngine.trackAltNarrativeSeen(), 100);
    }

    let html = '<div class="alt-narrative-panel">';
    html += '<div class="alt-narrative-title">📜 羊皮卷的另一页</div>';
    unselectedChoices.forEach(choice => {
      html += '<div class="alt-narrative-item">' + choice.alternativeNarrative + '</div>';
    });
    html += '</div>';
    return html;
  },

  /* 可玩性增强：渲染关系值变化 */
  _renderRelationshipChanges() {
    const recentChanges = GameState.relationshipLog.slice(-5);
    if (recentChanges.length === 0) return '';
    // 只显示最近一次选择引起的关系变化
    const lastChoiceLabel = GameState.choiceLog.length > 0
      ? GameState.choiceLog[GameState.choiceLog.length - 1].label
      : '';
    const changesForLastChoice = recentChanges.filter(c => c.reason === lastChoiceLabel);
    if (changesForLastChoice.length === 0) return '';

    let html = '<div class="rel-changes">';
    changesForLastChoice.forEach(change => {
      const isPositive = change.delta > 0;
      const cls = isPositive ? 'rel-change-positive' : 'rel-change-negative';
      const sign = isPositive ? '+' : '';
      html += '<span class="rel-change-item ' + cls + '">';
      html += (isPositive ? '💛 ' : '💔 ');
      html += change.character + ' ' + sign + change.delta;
      html += '</span>';
    });
    html += '</div>';
    return html;
  },

  /* 可玩性增强：渲染情感结算 */
  _renderEmotionalCost() {
    const scene = GameEngine.getCurrentScene();
    if (!scene || !scene.settlement || !scene.settlement.emotionalCost) return '';

    let html = '<div class="emotional-cost-panel">';
    html += '<div class="emotional-cost-text">' + scene.settlement.emotionalCost + '</div>';
    html += '</div>';
    return html;
  }
};

/* ---- 探索场景状态追踪 ---- */
let _explorationState = {}; // { hotspotId: true } — 当前探索场景已发现的热点

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

/* ---- 可玩性增强：探索场景事件处理 ---- */

/** 点击探索场景中的热点 */
function handleHotspotClick(hotspotId) {
  const scene = GameEngine.getCurrentScene();
  if (!scene || scene.type !== 'exploration' || !scene.hotspots) return;

  const hotspot = scene.hotspots.find(h => h.id === hotspotId);
  if (!hotspot) return;

  // 已发现的热点不重复触发
  if (_explorationState[hotspotId]) return;
  _explorationState[hotspotId] = true;

  // 追踪热点发现
  if (typeof GameEngine !== 'undefined' && GameEngine.trackHotspotDiscovered) {
    GameEngine.trackHotspotDiscovered();
  }

  // 更新热点视觉状态
  const hotspotEl = document.getElementById(hotspotId);
  if (hotspotEl) {
    hotspotEl.classList.add('discovered');
  }

  // 显示发现叙事弹窗
  const popup = document.createElement('div');
  popup.className = 'hotspot-narrative-popup';
  popup.id = 'hotspot-narrative-popup';
  popup.innerHTML = `
    <div class="hotspot-narrative-text">${hotspot.narrative}</div>
    <div style="text-align:center;color:var(--gold-dim);font-size:0.68rem;margin-bottom:10px;font-style:italic;">${hotspot.discoveredText || ''}</div>
    <button class="hotspot-narrative-close" onclick="closeHotspotPopup()">继续探索</button>
  `;
  document.body.appendChild(popup);

  // 更新发现进度
  updateExplorationProgress(scene);

  // 检查是否所有热点都已发现
  if (typeof GameEngine !== 'undefined' && GameEngine.trackHotspotDiscovered) {
    const allFound = scene.hotspots.every(h => _explorationState[h.id]);
    if (allFound) {
      GameState._allHotspotsFound = true;
    }
  }
}

/** 关闭热点叙事弹窗 */
function closeHotspotPopup() {
  const popup = document.getElementById('hotspot-narrative-popup');
  if (popup) {
    popup.remove();
  }
}

/** 更新探索进度显示 */
function updateExplorationProgress(scene) {
  if (!scene || !scene.hotspots) return;
  const found = Object.keys(_explorationState).filter(id => _explorationState[id]).length;
  const required = scene.requiredDiscoveries || scene.hotspots.length;
  const total = scene.hotspots.length;

  const progressEl = document.getElementById('exploration-progress');
  if (progressEl) {
    progressEl.textContent = '已发现 ' + found + ' / ' + total + (required < total ? '（需要 ' + required + ' 个）' : '');
  }

  // 达到要求数量后启用继续按钮
  if (found >= required) {
    const continueBtn = document.getElementById('exploration-continue-btn');
    if (continueBtn) {
      continueBtn.disabled = false;
      continueBtn.textContent = '继续旅程 ▸';
    }
  }
}
window.updateExplorationProgress = updateExplorationProgress; // 暴露给全局

/** 探索场景的"继续"按钮 */
function handleExplorationContinue(nextSceneId) {
  const scene = GameEngine.getCurrentScene();
  if (!scene || scene.type !== 'exploration') return;

  const required = scene.requiredDiscoveries || (scene.hotspots ? scene.hotspots.length : 0);
  const found = Object.keys(_explorationState).filter(id => _explorationState[id]).length;

  if (found < required) {
    if (typeof showToast === 'function') {
      showToast('还需要发现更多事物才能继续……');
    }
    return;
  }

  // 清理探索状态
  _explorationState = {};

  // 跳转到下一个场景
  GameEngine.goToScene(nextSceneId);
  Renderer.render();
}
