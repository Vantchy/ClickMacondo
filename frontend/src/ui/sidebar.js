/* ================================================================
   js/sidebar.js — 侧边栏管理（家族树、历史档案、个人简介、关系查询）
   依赖：js/game-state.js, js/chapter-registry.js, js/config.js
   ================================================================ */

const SidebarManager = {
  /* 家族树 */
  openFamilyTree() {
    const overlay = document.getElementById('sidebar-family-overlay');
    const panel = document.getElementById('sidebar-family');
    const content = document.getElementById('family-content');
    if (!overlay || !panel || !content) return;

    const chData = getCurrentChapterData();
    const possessedChar = chData ? chData.possessedCharacter : null;
    const allMembers = familyTreeToArray();
    const members = allMembers.filter(m => GameState.encounteredCharacters.includes(m.name));
    members.sort((a, b) => a.generation - b.generation);

    let html = '';
    if (members.length === 0) {
      html += '<div style="text-align:center;color:var(--gold-dim);padding:20px;font-style:italic;">尚未遇到任何家族成员。<br>继续旅程来发现他们。</div>';
    } else {
      let lastGen = null;
      const GEN_LABELS = { 0: '外部人物', 1: '第一代', 2: '第二代', 3: '第三代', 4: '第四代', 5: '第五代', 6: '第六代' };
      members.forEach((member, i) => {
        if (member.generation !== lastGen) {
          if (lastGen !== null) {
            html += '<div class="family-tree-connector"></div>';
          }
          const genLabel = GEN_LABELS[member.generation] || ('第' + member.generation + '代');
          html += `<div style="font-family:var(--font-title);font-size:0.75rem;color:var(--gold-light);margin:16px 0 6px;letter-spacing:0.08em;padding-bottom:4px;border-bottom:1px solid rgba(184,137,62,0.18);">${genLabel}</div>`;
          lastGen = member.generation;
        }
        const isCurrent = possessedChar && member.name === possessedChar;
        html += `
          <div class="family-member ${isCurrent ? 'current' : ''}">
            <div class="fm-name">${isCurrent ? '► ' : ''}${member.name}</div>
            <div class="fm-relation">${member.relation}</div>
            <div style="font-size:0.72rem;color:#c0b090;margin-top:4px;line-height:1.4;">${member.description}</div>
          </div>`;
      });
    }

    content.innerHTML = html;
    overlay.classList.add('open');
    panel.classList.add('open');
  },

  closeFamilyTree() {
    document.getElementById('sidebar-family-overlay').classList.remove('open');
    document.getElementById('sidebar-family').classList.remove('open');
  },

  /* 历史档案 */
  openArchives() {
    const overlay = document.getElementById('sidebar-archives-overlay');
    const panel = document.getElementById('sidebar-archives');
    const content = document.getElementById('archives-content');
    if (!overlay || !panel || !content) return;

    let html = '';

    const sortedChapterIds = Object.keys(chapters).sort((a, b) => {
      const na = chapters[a].chapterNumber;
      const nb = chapters[b].chapterNumber;
      return na - nb;
    });
    sortedChapterIds.forEach(chId => {
      const ch = chapters[chId];
      if (!ch.memories) return;
      const chMemories = Object.values(ch.memories);
      if (chMemories.length === 0) return;

      html += `<div style="font-size:0.75rem;color:var(--gold-dim);margin:12px 0 8px;">${ch.title}</div>`;

      chMemories.forEach(mem => {
        const unlocked = GameState.memories.includes(mem.id);
        html += `
          <div class="archive-item ${unlocked ? 'unlocked' : 'locked'}">
            <div class="archive-chapter">第${ch.chapterNumber}章</div>
            <div class="archive-title">${unlocked ? '◆ ' : ''}${mem.title}</div>
            <div class="archive-desc">${unlocked ? mem.description : '尚未解锁……做出不同的选择来发现这段记忆。'}</div>
          </div>`;
      });
    });

    if (Object.keys(memoryRegistry).length === 0 || GameState.memories.length === 0) {
      html += '<div style="text-align:center;color:var(--gold-dim);padding:20px;font-style:italic;">尚未解锁任何记忆碎片。<br>在游戏中做出选择来收集它们。</div>';
    }

    // v2.0: 隐藏线索分类
    html += '<div style="margin-top:24px;padding-top:16px;border-top:1px solid rgba(184,137,62,0.18);">';
    html += '<div style="font-size:0.75rem;color:var(--gold-dim);margin:12px 0 8px;">◈ 隐藏线索</div>';
    if (typeof CLUE_DEFS !== 'undefined') {
      const clueEntries = Object.values(CLUE_DEFS);
      // 按章节排序
      clueEntries.sort((a, b) => (a.chapter || 0) - (b.chapter || 0));
      clueEntries.forEach(clue => {
        const found = GameState.hasClue ? GameState.hasClue(clue.id) : false;
        html += '<div class="clue-collection-item ' + (found ? 'found' : 'missing') + '">';
        html += '<span>' + (found ? '◈ ' : '？ ') + '</span>';
        const chapterLabel = (clue.chapter != null) ? (clue.chapter === 0 ? '序章' : '第' + clue.chapter + '章') : '未知';
        html += '<span>' + (found ? clue.name : '尚未发现 — ' + chapterLabel) + '</span>';
        html += '</div>';
      });
    }
    html += '</div>';

    content.innerHTML = html;
    overlay.classList.add('open');
    panel.classList.add('open');
  },

  closeArchives() {
    document.getElementById('sidebar-archives-overlay').classList.remove('open');
    document.getElementById('sidebar-archives').classList.remove('open');
  },

  /* 个人简介 */
  openProfile() {
    const overlay = document.getElementById('sidebar-profile-overlay');
    const panel = document.getElementById('sidebar-profile');
    const content = document.getElementById('profile-content');
    if (!overlay || !panel || !content) return;

    const chapterData = getCurrentChapterData();
    const chapterTitle = chapterData ? chapterData.title : '未知章节';
    const possessedChar = chapterData ? chapterData.possessedCharacter || '未知角色' : '未知角色';
    let html = '';

    // 状态概览
    html += '<div class="profile-section">';
    html += '<h4>当前状态</h4>';
    html += `<p class="profile-choice-log">附身角色：<strong>${possessedChar}</strong></p>`;
    html += `<p class="profile-choice-log">章节进度：${chapterTitle} · 第${Math.max(0, GameState.round)}轮</p>`;
    html += '</div>';

    // v2.1: 标签按章节下拉查看
    html += '<div class="profile-section">';
    html += '<h4>⁂ 标签收集 <span style="font-size:0.6rem;color:var(--gold-dim);">(' + GameState.tags.length + ' 已获得)</span></h4>';
    html += this._renderTagDropdown();
    html += '</div>';

    // 选择记录 (精简)
    html += '<div class="profile-section">';
    html += '<h4>¶ 选择记录</h4>';
    if (GameState.choiceLog.length === 0) {
      html += '<p class="profile-choice-log" style="color:var(--gold-dim);font-style:italic;">尚未做出选择。</p>';
    } else {
      // 只显示最近10条
      const recentLogs = GameState.choiceLog.slice(-10);
      recentLogs.forEach((log, i) => {
        const chNum = log.chapter || '?';
        html += `<p class="profile-choice-log">Ch${chNum}.R${log.round}：<strong>${log.label}</strong> → ${(log.tags||[]).join('、') || '无标签'}</p>`;
      });
      if (GameState.choiceLog.length > 10) {
        html += `<p class="profile-choice-log" style="text-align:center;color:var(--gold-dim);">……还有 ${GameState.choiceLog.length - 10} 条记录</p>`;
      }
    }
    html += '</div>';

    // v2.0: 角色关系值（显示档位+精确数值）
    html += '<div class="profile-section">';
    html += '<h4>↭ 羁绊之人</h4>';
    if (!GameState.relationships || Object.keys(GameState.relationships).length === 0) {
      html += '<p class="profile-choice-log" style="color:var(--gold-dim);font-style:italic;">尚未建立与他人的羁绊。<br>继续旅程来影响你与他人的关系。</p>';
    } else {
      const relEntries = Object.entries(GameState.relationships);
      relEntries.sort((a, b) => b[1] - a[1]);
      const displayedChars = relEntries.slice(0, 10);
      displayedChars.forEach(([charName, value]) => {
        const tier = GameState.getRelationshipTier
          ? GameState.getRelationshipTier(charName)
          : GameState.getRelationshipLevel(charName);
        const tierLabel = tier ? tier.tier : '';
        const tierColor = tier ? tier.color : 'var(--gold-dim)';
        const tierDesc = tier ? (tier.desc || '') : '';
        const barColor = value >= 70 ? '#6a9a5a' : value >= 30 ? '#c4910a' : '#a05040';
        html += '<div class="relationship-item">';
        html += '<div class="rel-name">' + charName + ' <span style="color:' + tierColor + ';font-size:0.65rem;">— ' + tierLabel + '</span><span style="float:right;font-size:0.7rem;color:' + tierColor + ';font-weight:600;">' + value + '/100</span></div>';
        html += '<div class="rel-bar-wrap"><div class="rel-bar-fill" style="width:' + value + '%;background:' + barColor + ';"></div></div>';
        html += '<div class="rel-label">' + tierDesc + '</div>';
        html += '</div>';
      });
      if (relEntries.length > 10) {
        html += '<p class="profile-choice-log" style="text-align:center;color:var(--gold-dim);">……还有 ' + (relEntries.length - 10) + ' 人</p>';
      }
    }
    html += '</div>';

    // v2.0: 当前象限
    html += '<div class="profile-section">';
    html += '<h4>◎ 当前象限 <span class="help-icon" onclick="event.stopPropagation();SidebarManager.showDefinitionsPopup(\'quadrant\')" title="点击查看象限定义">？</span></h4>';
    const quadrant = (typeof GameEngine !== 'undefined' && GameEngine.getCurrentQuadrant)
      ? GameEngine.getCurrentQuadrant()
      : (typeof getQuadrantLabel !== 'undefined' ? getQuadrantLabel(GameState.fateCounter || 0, GameState.bondCounter || 0) : null);
    if (quadrant) {
      html += '<div class="quadrant-label" style="color:' + quadrant.color + ';font-size:0.9rem;text-align:center;margin:6px 0;">' + quadrant.name + '</div>';
      html += '<p class="profile-choice-log" style="color:var(--gold-dim);font-style:italic;text-align:center;">' + quadrant.desc + '</p>';
    } else {
      html += '<p class="profile-choice-log" style="color:var(--gold-dim);font-style:italic;">尚未形成象限……</p>';
    }
    html += '</div>';

    // v2.0: 宿命烙印
    html += '<div class="profile-section">';
    html += '<h4>✧ 宿命烙印 <span class="help-icon" onclick="event.stopPropagation();SidebarManager.showDefinitionsPopup(\'fateImprint\')" title="点击查看烙印定义">？</span></h4>';
    html += this._renderImprintTrack(GameState.fateImprint || {}, 'fate');
    html += '</div>';

    // v2.0: 羁绊烙印
    html += '<div class="profile-section">';
    html += '<h4>↭ 羁绊烙印 <span class="help-icon" onclick="event.stopPropagation();SidebarManager.showDefinitionsPopup(\'bondImprint\')" title="点击查看烙印定义">？</span></h4>';
    html += this._renderImprintTrack(GameState.bondImprint || {}, 'bond');
    html += '</div>';

    // v2.0: 线索收集
    html += '<div class="profile-section">';
    html += '<h4>◈ 隐藏线索</h4>';
    const foundClues = (GameState.clueFragments || []).length;
    const totalClues = (typeof CLUE_DEFS !== 'undefined') ? Object.keys(CLUE_DEFS).length : 30;
    html += '<p class="profile-choice-log" style="text-align:center;color:var(--gold-dim);margin-bottom:8px;">已发现 ' + foundClues + ' / ' + totalClues + ' 条</p>';

    // 列出已获得的具体线索
    if (foundClues > 0 && typeof CLUE_DEFS !== 'undefined') {
      const clueEntries = Object.values(CLUE_DEFS);
      clueEntries.sort((a, b) => (a.chapter || 0) - (b.chapter || 0));
      clueEntries.forEach(clue => {
        if (GameState.clueFragments.includes(clue.id)) {
          const chapterLabel = (clue.chapter != null) ? (clue.chapter === 0 ? '序章' : '第' + clue.chapter + '章') : '未知';
          html += '<div class="clue-collection-item found" style="padding:4px 6px;">';
          html += '<span>◈ </span>';
          html += '<span>' + clue.name + ' <span style="font-size:0.58rem;color:var(--gold-dim);">— ' + chapterLabel + '</span></span>';
          html += '</div>';
        }
      });
    }
    html += '</div>';

    content.innerHTML = html;
    overlay.classList.add('open');
    panel.classList.add('open');
  },

  /* v2.0: 渲染烙印色块行 */
  _renderImprintTrack(imprint, type) {
    if (!imprint || Object.keys(imprint).length === 0) {
      return '<p class="profile-choice-log" style="color:var(--gold-dim);font-style:italic;">尚未记录烙印……<br>完成章节后烙印将在此显示。</p>';
    }
    const CHAPTER_NAMES = {
      1:'一',2:'二',3:'三',4:'四',5:'五',6:'六',7:'七',8:'八',9:'九',10:'十',
      11:'十一',12:'十二',13:'十三',14:'十四',15:'十五',16:'十六',17:'十七',18:'十八',19:'十九',20:'二十'
    };
    let html = '<div class="imprint-track">';
    const entries = Object.entries(imprint).sort((a, b) => parseInt(a[0]) - parseInt(b[0]));
    entries.forEach(([chNum, level]) => {
      const title = CHAPTER_NAMES[chNum] ? ('Ch' + CHAPTER_NAMES[chNum]) : ('Ch' + chNum);
      html += '<span class="imprint-dot ' + level + '" title="' + title + ': ' + level + '"></span>';
    });
    html += '</div>';
    return html;
  },

  /* v2.0: 显示定义说明弹窗 */
  showDefinitionsPopup(topic) {
    // 移除已有弹窗
    const existing = document.getElementById('definitions-popup');
    if (existing) existing.remove();

    let title = '';
    let html = '';

    if (topic === 'quadrant' || !topic) {
      title = '◎ 象限说明';
      html += '<div class="def-section"><div class="def-section-title">四象限体系</div>';
      html += '<p class="def-text">你的宿命值（✧）和羁绊值（↭）共同决定你所在的象限。每个象限不是标签——是一种阅读命运的方式。</p>';
      html += '<div class="def-grid">';
      html += '<div class="def-card"><div class="def-card-name" style="color:var(--gold-light);">◉ 家族守望者</div><div class="def-card-desc">高宿命 + 高羁绊<br>理解一切，仍选择连接。<br>你在羊皮卷每一页边缘都写了注释。</div></div>';
      html += '<div class="def-card"><div class="def-card-name" style="color:#8a9ab0;">◎ 孤绝先知</div><div class="def-card-desc">高宿命 + 低羁绊<br>看透一切，与谁都不相连。<br>你理解了全部——代价是独自一人。</div></div>';
      html += '<div class="def-card"><div class="def-card-name" style="color:var(--gold);">↝ 命运追随者</div><div class="def-card-desc">低宿命 + 高羁绊<br>顺从命运的流动。<br>你让某些人活得更久、死得更暖。</div></div>';
      html += '<div class="def-card"><div class="def-card-name" style="color:#a05040;">◆ 孤独反抗者</div><div class="def-card-desc">低宿命 + 低羁绊<br>搏斗命运，独自一人。<br>你和命运互相撕扯——最后谁都没赢。</div></div>';
      html += '</div></div>';
    }

    if (topic === 'fateImprint' || !topic) {
      title = title || '¶ 烙印说明';
      html += '<div class="def-section"><div class="def-section-title">✧ 宿命烙印档位</div>';
      html += '<p class="def-text">每章结束时，根据宿命值占比判定本章烙印。烙印永久保存，影响终局判定和下一章的起始动量。</p>';
      html += '<div class="def-list">';
      html += '<div class="def-item"><span class="def-dot fate-rebel"></span><strong>抗争者</strong> — 宿命值 ≤ 1/3 最大值。下一章起始宿命 = 0（从空白开始）</div>';
      html += '<div class="def-item"><span class="def-dot fate-follower"></span><strong>追随者</strong> — 宿命值在 1/3 ~ 2/3 之间。下一章起始宿命 = 最大值 × 1/3</div>';
      html += '<div class="def-item"><span class="def-dot fate-witness"></span><strong>见证者</strong> — 宿命值 ≥ 2/3 最大值。下一章起始宿命 = 最大值 × 2/3（惯性最强）</div>';
      html += '</div></div>';
    }

    if (topic === 'bondImprint' || !topic) {
      title = title || '¶ 烙印说明';
      html += '<div class="def-section"><div class="def-section-title">↭ 羁绊烙印档位</div>';
      html += '<p class="def-text">每章结束时，根据羁绊值占比判定本章羁绊烙印。与宿命烙印平行运作。</p>';
      html += '<div class="def-list">';
      html += '<div class="def-item"><span class="def-dot bond-estranged"></span><strong>疏离者</strong> — 羁绊值 ≤ 1/3 最大值。与家族若即若离，独自面对命运</div>';
      html += '<div class="def-item"><span class="def-dot bond-bonded"></span><strong>羁绊者</strong> — 羁绊值在 1/3 ~ 2/3 之间。与他人相连，在关系中找到意义</div>';
      html += '<div class="def-item"><span class="def-dot bond-soul_of_family"></span><strong>家族的魂</strong> — 羁绊值 ≥ 2/3 最大值。成为家族的心脏——每一次跳动都牵动所有人</div>';
      html += '</div></div>';
    }

    html += '<div class="def-section"><div class="def-section-title">↻ 动量规则</div>';
    html += '<p class="def-text">上一章的烙印决定下一章的起始值——选择有惯性，但不是锁死。你可以转向，但要用力。</p>';
    html += '</div>';

    // 创建弹窗
    const popup = document.createElement('div');
    popup.id = 'definitions-popup';
    popup.className = 'definitions-popup';
    popup.innerHTML = `
      <div class="definitions-popup-inner">
        <div class="definitions-popup-header">
          <span>${title}</span>
          <button class="definitions-popup-close" onclick="SidebarManager.closeDefinitionsPopup()">✕</button>
        </div>
        <div class="definitions-popup-body">${html}</div>
        <div class="definitions-popup-footer">
          <span style="font-size:0.6rem;color:var(--gold-dim);">点击其他 ？可查看对应说明</span>
        </div>
      </div>
    `;
    document.body.appendChild(popup);

    // 点击遮罩关闭
    popup.addEventListener('click', function(e) {
      if (e.target === popup) SidebarManager.closeDefinitionsPopup();
    });
  },

  /** 关闭定义弹窗 */
  closeDefinitionsPopup() {
    const popup = document.getElementById('definitions-popup');
    if (popup) {
      popup.classList.add('closing');
      setTimeout(() => popup.remove(), 300);
    }
  },

  /* v2.1: 下拉式章节标签查看 */
  _renderTagDropdown() {
    // 从所有已注册章节中提取可能的标签
    const chapterTags = {};
    const allTags = new Set(GameState.tags);

    Object.values(chapters).forEach(chData => {
      const chNum = chData.chapterNumber;
      if (!chNum || chNum === 0) return;
      if (!chapterTags[chNum]) {
        chapterTags[chNum] = { title: chData.title || ('第' + chNum + '章'), all: new Set(), obtained: new Set(), missing: new Set() };
      }
      if (chData.scenes) {
        Object.values(chData.scenes).forEach(scene => {
          if (scene.type === 'choice' && scene.choices) {
            scene.choices.forEach(choice => {
              if (choice.effects && choice.effects.tags) {
                choice.effects.tags.forEach(t => {
                  chapterTags[chNum].all.add(t);
                  if (allTags.has(t)) chapterTags[chNum].obtained.add(t);
                  else chapterTags[chNum].missing.add(t);
                });
              }
            });
          }
        });
      }
    });

    const sortedChapters = Object.entries(chapterTags).sort((a, b) => parseInt(a[0]) - parseInt(b[0]));
    const currentChapter = GameState.chapter;

    // 章节下拉选择器
    let html = '<select id="tag-chapter-select" onchange="SidebarManager._switchTagChapter(this.value)" style="width:100%;padding:6px 10px;background:#14100c;color:#d4b070;border:1px solid rgba(184,137,62,0.3);border-radius:6px;font-family:var(--font-ui);font-size:0.75rem;margin-bottom:8px;cursor:pointer;">';
    html += '<option value="all">◈ 全部章节概览</option>';
    sortedChapters.forEach(([chNum, ct]) => {
      const total = ct.all.size;
      const got = ct.obtained.size;
      const pct = total > 0 ? Math.round((got/total)*100) : 0;
      const bar = '█'.repeat(Math.round(pct/10)) + '░'.repeat(10-Math.round(pct/10));
      const marker = chNum == currentChapter ? '' : '';
      html += '<option value="' + chNum + '"' + (chNum == currentChapter ? ' selected' : '') + '>第' + chNum + '章 ' + ct.title.split('·')[0] + ' [' + got + '/' + total + '] ' + bar + marker + '</option>';
    });
    html += '</select>';

    // 当前选中章节的详情（默认显示当前所在章节）
    const showChapter = currentChapter || (sortedChapters.length > 0 ? sortedChapters[0][0] : null);
    html += '<div id="tag-detail-area" style="max-height:300px;overflow-y:auto;">';
    html += this._renderTagDetail(showChapter, chapterTags);
    html += '</div>';

    return html;
  },

  /** 切换标签查看章节 */
  _switchTagChapter(chNum) {
    const area = document.getElementById('tag-detail-area');
    if (!area) return;
    const chapterTags = {};
    const allTags = new Set(GameState.tags);
    Object.values(chapters).forEach(chData => {
      const cn = chData.chapterNumber;
      if (!cn || cn === 0) return;
      if (!chapterTags[cn]) chapterTags[cn] = { title: chData.title || '', all: new Set(), obtained: new Set(), missing: new Set() };
      if (chData.scenes) {
        Object.values(chData.scenes).forEach(scene => {
          if (scene.type === 'choice' && scene.choices) {
            scene.choices.forEach(choice => {
              if (choice.effects && choice.effects.tags) {
                choice.effects.tags.forEach(t => {
                  chapterTags[cn].all.add(t);
                  if (allTags.has(t)) chapterTags[cn].obtained.add(t);
                  else chapterTags[cn].missing.add(t);
                });
              }
            });
          }
        });
      }
    });
    area.innerHTML = this._renderTagDetail(chNum, chapterTags);
  },

  /** 渲染单个章节的标签详情 */
  _renderTagDetail(chNum, chapterTags) {
    if (chNum === 'all' || !chNum) {
      // 全部章节概览
      let html = '<div style="display:flex;flex-direction:column;gap:3px;">';
      const sorted = Object.entries(chapterTags).sort((a,b) => parseInt(a[0])-parseInt(b[0]));
      sorted.forEach(([cn, ct]) => {
        if (ct.all.size === 0) return;
        const got = ct.obtained.size, total = ct.all.size;
        const pct = total > 0 ? Math.round((got/total)*100) : 0;
        const barColor = pct >= 100 ? '#6a9a5a' : pct >= 50 ? '#c4910a' : '#a05040';
        html += '<div style="display:flex;align-items:center;gap:6px;padding:3px 0;border-bottom:1px solid rgba(184,137,62,0.06);">';
        html += '<span style="font-size:0.65rem;color:var(--gold-dim);min-width:36px;">Ch' + cn + '</span>';
        html += '<div style="flex:1;height:5px;background:rgba(184,137,62,0.08);border-radius:3px;overflow:hidden;">';
        html += '<div style="width:' + pct + '%;height:100%;background:' + barColor + ';border-radius:3px;"></div></div>';
        html += '<span style="font-size:0.6rem;color:var(--gold-dim);min-width:30px;text-align:right;">' + got + '/' + total + '</span>';
        html += '</div>';
      });
      html += '</div>';
      return html;
    }

    const ct = chapterTags[chNum];
    if (!ct || ct.all.size === 0) return '<p style="color:var(--gold-dim);font-style:italic;text-align:center;padding:10px;">本章无标签</p>';

    const got = ct.obtained.size, total = ct.all.size;
    let html = '<div style="text-align:center;margin-bottom:6px;font-size:0.65rem;color:var(--gold-dim);">进度：' + got + '/' + total + ' (' + Math.round((got/total)*100) + '%)</div>';

    // 已获得
    if (ct.obtained.size > 0) {
      html += '<div style="margin-bottom:6px;"><span style="font-size:0.58rem;color:#8ab880;">✓ 已获得 (' + ct.obtained.size + ')</span></div>';
      html += '<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px;">';
      [...ct.obtained].sort().forEach(t => {
        html += '<span class="tag-badge tag-obtained">' + t + '</span>';
      });
      html += '</div>';
    }

    // 未获得
    if (ct.missing.size > 0) {
      html += '<div style="margin-bottom:6px;"><span style="font-size:0.58rem;color:#a09080;">○ 未获得 (' + ct.missing.size + ')</span></div>';
      html += '<div style="display:flex;flex-wrap:wrap;gap:4px;">';
      [...ct.missing].sort().forEach(t => {
        html += '<span class="tag-badge tag-missing">' + t + '</span>';
      });
      html += '</div>';
    }

    return html;
  },

  closeProfile() {
    document.getElementById('sidebar-profile-overlay').classList.remove('open');
    document.getElementById('sidebar-profile').classList.remove('open');
  },

  /* 关系查询 */
  openRelations() {
    const overlay = document.getElementById('sidebar-relations-overlay');
    const panel = document.getElementById('sidebar-relations');
    if (!overlay || !panel) return;

    const allNames = Object.keys(familyTreeRegistry);
    const members = allNames.map(n => familyTreeRegistry[n]);
    members.sort((a, b) => a.generation - b.generation);

    const sel1 = document.getElementById('relation-char1');
    const sel2 = document.getElementById('relation-char2');
    if (!sel1 || !sel2) return;

    const GEN_LABELS = {0:'外部', 1:'第一代', 2:'第二代', 3:'第三代', 4:'第四代', 5:'第五代', 6:'第六代'};
    const optionsHTML = members.map(m => {
      const genLabel = GEN_LABELS[m.generation] || ('第'+m.generation+'代');
      const encountered = GameState.encounteredCharacters.includes(m.name) ? '' : '（未遇到）';
      return `<option value="${m.name}">${m.name} — ${genLabel}${encountered}</option>`;
    }).join('');
    sel1.innerHTML = optionsHTML;
    sel2.innerHTML = optionsHTML;

    document.getElementById('relation-result').innerHTML = '';

    overlay.classList.add('open');
    panel.classList.add('open');
  },

  closeRelations() {
    document.getElementById('sidebar-relations-overlay').classList.remove('open');
    document.getElementById('sidebar-relations').classList.remove('open');
  },

  queryRelation() {
    const raw1 = document.getElementById('relation-char1').value;
    const raw2 = document.getElementById('relation-char2').value;
    const resultDiv = document.getElementById('relation-result');
    if (!raw1 || !raw2 || !resultDiv) return;

    if (raw1 === raw2) {
      resultDiv.innerHTML = '<div style="color:var(--gold-dim);text-align:center;padding:12px;font-style:italic;">请选择两个不同的人物</div>';
      return;
    }

    const name1 = resolveCharacterName(raw1);
    const name2 = resolveCharacterName(raw2);

    const direct = findRelation(name1, name2);
    const path = findRelationPath(name1, name2);

    let html = '<div style="padding:12px;background:rgba(184,137,62,0.08);border:1px solid rgba(184,137,62,0.2);border-radius:3px;">';
    html += '<div style="font-family:var(--font-title);font-size:0.85rem;color:var(--gold-light);margin-bottom:10px;">↝ 关系查询结果</div>';

    if (direct) {
      const [label, event] = direct;
      html += '<div style="margin-bottom:12px;">';
      html += '<div style="font-size:0.9rem;color:var(--gold-light);margin-bottom:4px;"><strong>' + name1 + '</strong> 与 <strong>' + name2 + '</strong></div>';
      html += '<div style="font-size:1rem;color:#e8d0a0;margin:6px 0;letter-spacing:0.04em;">' + label + '</div>';
      html += '<div style="font-size:0.8rem;color:#c0b090;line-height:1.7;margin-top:8px;padding-top:8px;border-top:1px solid rgba(184,137,62,0.15);">' + event + '</div>';
      html += '</div>';
    } else if (path && path.length > 0) {
      html += '<div style="margin-bottom:12px;">';
      html += '<div style="font-size:0.9rem;color:var(--gold-light);margin-bottom:6px;"><strong>' + name1 + '</strong> 与 <strong>' + name2 + '</strong></div>';
      html += '<div style="font-size:0.78rem;color:var(--gold-dim);margin-bottom:8px;">无直接记录的关系，通过以下链路关联：</div>';
      let chainText = '<strong>' + name1 + '</strong>';
      for (let i = 0; i < path.length; i++) {
        const edge = path[i];
        if (i < path.length - 1) {
          const letter = String.fromCharCode(97 + i); // a, b, c, ...
          chainText += ' ↔ ' + letter + '（' + edge.label + '）';
        } else {
          chainText += ' ↔ <strong>' + name2 + '</strong>（' + edge.label + '）';
        }
      }
      html += '<div style="font-size:0.78rem;color:#c0b090;line-height:1.8;">' + chainText + '</div>';
      html += '</div>';
    } else {
      html += '<div style="color:var(--gold-dim);text-align:center;padding:12px;font-style:italic;">未找到两人之间的关联路径。<br>他们可能来自完全不同的时代与谱系。</div>';
    }

    html += '</div>';
    resultDiv.innerHTML = html;
  }
};
