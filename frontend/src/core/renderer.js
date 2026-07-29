/* ================================================================
   js/renderer.js — 主渲染器 + 全局事件处理函数
   依赖：js/game-state.js, js/game-engine.js, js/chapter-registry.js
   ================================================================ */

/* ---- 两步确认选择（防误触） ---- */
let _selectedChoiceId = null;

/** 点击或按键选中一个选项 */
function selectChoice(choiceId) {
  const scene = GameEngine.getCurrentScene();
  if (!scene || scene.type !== 'choice') return;
  // 锁定模式下不可选择
  if (GameState.sceneChoices[scene.id]) return;

  if (_selectedChoiceId === choiceId) {
    // 再次点击同一选项 → 确认
    confirmChoice();
  } else {
    // 首次选中 → 高亮
    _selectedChoiceId = choiceId;
    Renderer._highlightChoice(choiceId);
  }
}

/** 确认当前选中的选项 */
function confirmChoice() {
  if (!_selectedChoiceId) return;
  const id = _selectedChoiceId;
  _selectedChoiceId = null;
  handleChoice(id);
}

/** 清除选中状态 */
function clearChoiceSelection() {
  _selectedChoiceId = null;
  const prev = document.querySelector('.choice-selected');
  if (prev) prev.classList.remove('choice-selected');
}

const Renderer = {
  /* 渲染整个页面 */
  render() {
    clearChoiceSelection();
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

      // 正文段落（v2.0: 处理线索文字高亮）
      if (lp.paragraphs) {
        lp.paragraphs.forEach(p => {
          html += `<p class="narrative-paragraph">${this._processClueText(p, scene)}</p>`;
        });
      }

      // 引用1
      if (lp.quotes) {
        lp.quotes.forEach(q => {
          html += `<span class="narrative-quote">${this._processClueText(q, scene)}</span>`;
        });
      }

      // 引用后正文
      if (lp.postQuote) {
        lp.postQuote.forEach(p => {
          html += `<p class="narrative-paragraph">${this._processClueText(p, scene)}</p>`;
        });
      }

      // 引用2
      if (lp.quotes2) {
        lp.quotes2.forEach(q => {
          html += `<span class="narrative-quote">${this._processClueText(q, scene)}</span>`;
        });
      }

      // 引用2后正文
      if (lp.postQuote2) {
        lp.postQuote2.forEach(p => {
          html += `<p class="narrative-paragraph">${this._processClueText(p, scene)}</p>`;
        });
      }

      // 过渡文字
      if (lp.transition) {
        html += `<div class="transition-text">${this._processClueText(lp.transition, scene)}</div>`;
      }

      // v2.0: 回声文本
      if (scene.echoText) {
        const echoCondition = scene.echoCondition;
        let showEcho = true;
        if (echoCondition) {
          if (echoCondition.flag && echoCondition.min) {
            showEcho = GameState.getFlag(echoCondition.flag) >= echoCondition.min;
          }
          if (echoCondition.memory && !GameState.memories.includes(echoCondition.memory)) {
            showEcho = false;
          }
          if (echoCondition.clue && !GameState.hasClue(echoCondition.clue)) {
            showEcho = false;
          }
        }
        if (showEcho) {
          html += `<div class="echo-text">${scene.echoText}</div>`;
        }
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
        const lockedChoiceId = GameState.sceneChoices[scene.id];
        const isLocked = !!lockedChoiceId;

        // 选项模式 — 可玩性增强：根据记忆碎片过滤选项
        const visibleChoices = GameEngine.filterChoicesByMemories
          ? GameEngine.filterChoicesByMemories(scene)
          : scene.choices;

        html += `<div class="right-section-title">${isLocked ? '你的选择' : '做出你的选择'}</div>`;
        html += `<div class="choices-list">`;
        visibleChoices.forEach(choice => {
          const isChosen = isLocked && choice.id === lockedChoiceId;
          const isSecret = choice.isSecretOption || choice.requiredMemory;
          let btnClass = 'choice-btn';
          if (isSecret) btnClass += ' secret-option';
          if (isChosen) btnClass += ' choice-chosen';
          else if (isLocked) btnClass += ' choice-dimmed';

          // v2.0: 不再展示情感代价/收益标签——后果在叙事中自然浮现
          const onclickAttr = isLocked ? '' : `onclick="selectChoice('${choice.id}')"`;
          const selectedClass = (!isLocked && _selectedChoiceId === choice.id) ? ' choice-selected' : '';
          html += `
            <div class="${btnClass}${selectedClass}" data-choice-id="${choice.id}" ${onclickAttr}>
              <span class="choice-label">${isChosen ? '▶ ' : ''}${choice.label}</span>
              <span class="choice-desc">${choice.description}</span>
            </div>`;
        });

        // v2.2: 隐藏选项灰位提示 — 当过滤后选项数少于原始选项数时显示
        if (!isLocked && visibleChoices.length < scene.choices.length) {
          html += `
            <div class="choice-btn choice-locked-hint">
              <span class="choice-label">？？？</span>
              <span class="choice-desc">—— 需要特定的线索、记忆或羁绊才能解锁此选项 ——</span>
            </div>`;
        }

        html += `</div>`;
      } else if (scene.type === 'settlement' && scene.settlement) {
        // 结算模式
        const st = scene.settlement;
        html += `<div class="right-section-title">▸ 结算</div>`;
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

        // v2.0: 展示宿命/羁绊值变化
        html += this._renderFateBondChanges();

        // v2.0: 展示好感度变化
        html += this._renderRelationshipChanges();

        // v2.0: 展示情感结算（保留羊皮卷的回响，不展示数字）
        html += this._renderEmotionalCost();

        // v2.3: 渲染象限叙事 — 让玩家看到"因为我是谁，所以我看到这个"
        html += this._renderQuadrantNarrative(st);


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
            html += `<button class="next-btn" onclick="GameEngine.goToNextChapter();Renderer.render();">${enterLabel}</button>`;
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
        html += `<div class="right-section-title">◈ 探索这个场景</div>`;
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
        const continueDisabled = (scene.requiredDiscoveries != null && scene.requiredDiscoveries > 0) ? ' disabled' : '';
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

    // v2.0: 更新双轴显示
    const fateDisplay = document.getElementById('fate-display');
    const bondDisplay = document.getElementById('bond-display');
    if (fateDisplay) {
      fateDisplay.textContent = '✧ 宿命 ' + GameState.fateCounter;
    }
    if (bondDisplay) {
      bondDisplay.textContent = '↭ 羁绊 ' + GameState.bondCounter;
    }

    // 阅读进度条 + 页码
    const progressFill = document.getElementById('reading-progress-fill');
    const progressThumb = document.getElementById('reading-progress-thumb');
    const pageIndicator = document.getElementById('page-indicator');
    const pageCount = GameState.history.length;
    const currentPage = GameState.historyIndex + 1;
    const pct = pageCount > 1 ? ((currentPage - 1) / (pageCount - 1)) * 100 : 0;
    if (progressFill) progressFill.style.width = pct + '%';
    if (progressThumb) progressThumb.style.left = pct + '%';
    if (pageIndicator) {
      const gp = getGlobalProgress();
      pageIndicator.textContent = '第 ' + currentPage + ' / ' + pageCount + ' 页　·　全书 ' + gp + '%';
    }

  },

  /* 更新书签/进度指示 */
  updateBookmark() {
    // 预留：可在顶部栏显示进度条
  },

  /* v2.0: 处理线索文字——将 triggerText 包裹为可点击 span */
  _processClueText(text, scene) {
    if (!text || !scene || !scene.leftPage || !scene.leftPage.clues) return text;
    let result = text;
    scene.leftPage.clues.forEach(clue => {
      const trigger = clue.triggerText;
      if (!result.includes(trigger)) return;
      const discovered = GameState.hasClue(clue.itemId);
      const cls = discovered ? 'clue-text discovered' : 'clue-text';
      const onclick = discovered ? '' : `onclick="event.stopPropagation();handleClueClick('${clue.itemId}')"`;
      result = result.replace(
        trigger,
        `<span class="${cls}" data-clue-id="${clue.itemId}" ${onclick} title="${discovered ? '已发现：' + clue.itemId : '点击发现线索'}">${trigger}</span>`
      );
    });
    return result;
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

  /* v2.0: 渲染宿命/羁绊值变化 */
  _renderFateBondChanges() {
    const fateChange = GameState._lastFateChange || 0;
    const bondChange = GameState._lastBondChange || 0;
    if (fateChange === 0 && bondChange === 0) return '';

    let html = '<div class="fatebond-change-panel">';
    html += '<div class="fatebond-change-title">¶ 本次选择的影响</div>';
    html += '<div class="fatebond-change-items">';

    if (fateChange !== 0) {
      const sign = fateChange > 0 ? '+' : '';
      const cls = fateChange > 0 ? 'fb-change-positive' : 'fb-change-negative';
      const label = fateChange > 0 ? '宿命值上升' : '宿命值下降';
      html += `<span class="fb-change-item ${cls}">✧ ${label} ${sign}${fateChange}</span>`;
    }

    if (bondChange !== 0) {
      const sign = bondChange > 0 ? '+' : '';
      const cls = bondChange > 0 ? 'fb-change-positive' : 'fb-change-negative';
      const label = bondChange > 0 ? '羁绊值上升' : '羁绊值下降';
      html += `<span class="fb-change-item ${cls}">↭ ${label} ${sign}${bondChange}</span>`;
    }

    if (fateChange === 0 && bondChange === 0) {
      html += '<span class="fb-change-item fb-change-neutral">— 无变化 —</span>';
    }

    html += '</div></div>';
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
      html += (isPositive ? '+ ' : '− ');
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
  },

  /* v2.3: 渲染象限叙事 — 让宿命/羁绊值在每轮结算时产生可见的叙事反馈 */
  _renderQuadrantNarrative(st) {
    if (!st.quadrantNarratives) return '';
    const quadrant = GameEngine.getCurrentQuadrant ? GameEngine.getCurrentQuadrant() : null;
    if (!quadrant) return '';
    const narrative = st.quadrantNarratives[quadrant.id];
    if (!narrative) return '';

    return `<div class="quadrant-narrative">
      <div class="quadrant-narrative-label">${quadrant.name}</div>
      <div class="quadrant-narrative-text">${narrative}</div>
    </div>`;
  },

  /** 高亮指定选项（两步确认的第一步） */
  _highlightChoice(choiceId) {
    document.querySelectorAll('.choice-btn').forEach(el => {
      el.classList.remove('choice-selected');
    });
    const target = document.querySelector('.choice-btn[data-choice-id="' + choiceId + '"]');
    if (target) target.classList.add('choice-selected');
  }
};

/* ---- 探索场景状态追踪 ---- */
let _explorationState = {}; // { hotspotId: true } — 当前探索场景已发现的热点

/** 重置渲染器模块级状态（游戏重置时调用） */
function resetRendererState() {
  _explorationState = {};
  _selectedChoiceId = null;
}

/* ---- 全局事件处理函数 ---- */
function handleChoice(choiceId) {
  clearChoiceSelection();
  const result = GameEngine.selectChoice(choiceId);
  if (result) {
    // 先渲染分支叙事（左页）+ 继续按钮（右页）
    Renderer.render();
    // 检查是否解锁记忆碎片 — 右下角弹窗
    if (result.effects.memory && memoryRegistry[result.effects.memory]) {
      setTimeout(() => {
        showMemoryPopup(memoryRegistry[result.effects.memory]);
      }, 500);
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
    // v2.0: 记录本章烙印（与 goToNextChapter 保持一致）
    if (GameState.chapter >= 1) {
      GameEngine.recordChapterImprint(GameState.chapter);
    }
    GameState.markChapterCompleted(GameState.chapter);
    // 检查成就
    checkAchievements();
    checkAndNotifyAchievements();
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

/* ---- v2.0: 隐藏线索点击处理 ---- */

/** 点击线索文字 */
function handleClueClick(clueId) {
  // 查找线索定义
  const clueDef = (typeof CLUE_DEFS !== 'undefined') ? CLUE_DEFS[clueId] : null;
  if (!clueDef) return;

  // 已发现的不重复触发
  if (GameState.hasClue(clueId)) return;

  // 添加到游戏状态
  GameState.addClueFragment(clueId);
  GameState._lastClueFound = clueId;
  // v2.1: 持久化线索
  if (typeof persistClue === 'function') persistClue(clueId);

  // 显示线索弹窗
  showCluePopup(clueDef);

  // 更新该线索文字的样式
  const clueEls = document.querySelectorAll('.clue-text[data-clue-id="' + clueId + '"]');
  clueEls.forEach(el => {
    el.classList.add('discovered');
    el.removeAttribute('onclick');
    el.title = '已发现：' + clueDef.name;
  });

  // 自动存档
  if (typeof StorageManager !== 'undefined') StorageManager.autoSave();
}

/** 显示线索发现弹窗 */
function showCluePopup(clueDef) {
  // 移除已有弹窗
  const existing = document.getElementById('clue-popup');
  if (existing) existing.remove();

  const popup = document.createElement('div');
  popup.id = 'clue-popup';
  popup.className = 'clue-popup';
  popup.innerHTML = `
    <div class="clue-popup-icon">◈</div>
    <div class="clue-popup-title">${clueDef.name}</div>
    <div class="clue-popup-desc">${clueDef.desc}</div>
    <div class="clue-popup-hint">已加入线索藏品 · ${clueDef.unlocksIn ? '可在后续章节解锁隐藏选项' : ''}</div>
    <button class="clue-popup-close" onclick="closeCluePopup()">收下线索</button>
  `;
  document.body.appendChild(popup);

  // 4.5 秒后自动关闭
  setTimeout(() => {
    closeCluePopup();
  }, 5000);
}

/** 关闭线索弹窗 */
function closeCluePopup() {
  const popup = document.getElementById('clue-popup');
  if (popup) {
    popup.classList.add('closing');
    setTimeout(() => popup.remove(), 400);
  }
}

/* ---- 记忆碎片弹窗（右下角滑入/滑出） ---- */
let memoryPopupTimer = null;
function showMemoryPopup(mem) {
  const popup = document.getElementById('memory-popup');
  if (!popup || !mem) return;

  document.getElementById('memory-popup-title').textContent = mem.title;
  document.getElementById('memory-popup-desc').textContent = mem.description;

  // 清除之前的计时器，先隐藏再重新触发
  if (memoryPopupTimer) clearTimeout(memoryPopupTimer);
  popup.classList.remove('show');
  void popup.offsetWidth; // 触发回流，确保动画重新播放

  // 滑入
  popup.classList.add('show');

  // 4 秒后滑出
  memoryPopupTimer = setTimeout(() => {
    popup.classList.remove('show');
  }, 4500);
}
