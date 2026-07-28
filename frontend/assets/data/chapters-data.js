/* ================================================================
   chapters-data.js — 序章 至 第二十章 + 终章 全部游戏数据
   该文件由 index.html 中的 <script> 标签加载
   依赖：registerChapter() 函数（已在 index.html 中定义）
   ================================================================ */

/* ================================================================
   序章 · 羊皮卷的召唤
   ================================================================ */
registerChapter({
  id: 'prologue',
  title: '序章 · 羊皮卷的召唤',
  initialScene: 'void_awakening',
  possessedCharacter: '被召唤的灵魂',
  chapterNumber: 0,
  preview: '',
  nextLabel: '',
  moods: {
    'void_awakening': '悬浮于虚空 —— 没有身体，只有感知，如一粒尚未落定的尘埃',
    'colors_unfold': '颜色正在展开 —— 你嗅到了河水、泥土和某种烧焦的甜腥味',
    'era_choice': '站在时间的岔路口 —— 三卷羊皮纸摊开，每一页都是百年'
  },
  scenes: {
    /* 虚无中醒来 */
    void_awakening: {
      id: 'void_awakening', type: 'narrative', chapter: 0, round: 0,
      title: '虚无',
      leftPage: {
        speaker: '旁白', speakerColor: '#4a2a18',
        paragraphs: [
          '你悬浮着，像一滴墨水滴入墨水中——没有方向，没有边界。',
          '然后你听见了声音。笔尖划过羊皮纸的沙沙声，墨水渗入纤维的呼吸声。',
          '一个老人坐在窗边，背对着你。窗外是马孔多的夜空。他穿着一件黑色的长袍，袖口磨得发白。'
        ],
        quotes: ['"多年以后，面对行刑队，奥雷里亚诺·布恩迪亚上校将会回想起父亲带他去见识冰块的那个遥远的下午。"'],
        postQuote: [
          '他停了笔。他没有回头，但你知道他感觉到了你。',
          '他转过身。苍老，干枯，眼睛深陷，但眼神明亮得像两颗没熄灭的炭。他是梅尔基亚德斯。',
          '"来了？我等你很久了。"',
          '你张开口，但没有声音。你没有身体——你只是一个被召唤到这个世界的灵魂。',
          '他走向你，伸出手来。指尖所到之处，黑暗开始有了颜色。'
        ]
      },
      marginalia: { text: '第一页第一行。读到这里时我停了下来——我不确定自己准备好面对这一百年的重量。', style: 'whisper' },
      choices: null, nextScene: 'colors_unfold'
    },

    /* 颜色的展开 */
    colors_unfold: {
      id: 'colors_unfold', type: 'narrative', chapter: 0, round: 0,
      title: '颜色的展开',
      leftPage: {
        speaker: '旁白', speakerColor: '#4a2a18',
        paragraphs: [
          '绿色——河岸边的蕨草，院子里被露水打湿的青苔，乌尔苏拉晾衣绳上的旧绿裙子。',
          '黄色——尘土在午后阳光里飞扬的颜色，吉卜赛人帐篷顶上褪了色的金边。蓝色——天空，河，墨水的沉淀。红色——血，火，花。',
          '你看见了马孔多。二十多座泥巴和芦竹盖成的房屋，沿河岸排开，像一排沉睡的甲壳虫。'
        ],
        quotes: ['"每一个被召唤的灵魂，都要自己决定从哪里开始读。"'],
        postQuote: [
          '他摊开三卷羊皮纸。"从哪儿开始，就从哪儿结束。这就是宿命的法则。"'
        ]
      },
      choices: null, nextScene: 'era_choice'
    },

    /* 时代选择 */
    era_choice: {
      id: 'era_choice', type: 'choice', chapter: 0, round: 1,
      title: '时代选择 · 三卷羊皮纸',
      leftPage: {
        speaker: '梅尔基亚德斯', speakerColor: '#c4910a',
        paragraphs: [
          '三卷羊皮纸并排放在你面前。第一卷画着一条河和二十多座泥巴房——建村之初。第二卷画着一座白色大房子，人影憧憧——家族鼎盛。第三卷画着军队，扛着步枪穿过热带雨林——战争年代。'
        ],
        quotes: ['"从哪儿开始，就从哪儿结束。从哪儿跌入，就从哪儿爬起。"'],
        postQuote: [
          '老人退后一步，双手交叠在身前，像一个等待顾客翻看布料的商人。',
          '"看够了，就碰一碰你选的那页纸。碰一碰，你就进去了。"'
        ],
        transition: '选择你要进入的时代——'
      },
      marginalia: { text: '三个入口——三条通往同一间屋子的走廊。无论你从哪扇门进，栗树都在那里等你。', style: 'echo' },
      choices: [
        {
          id: 'era_a', label: '建村之初',
          description: '降临在建村之初，附身于何塞·阿尔卡蒂奥·布恩迪亚。从吉卜赛人到冰块，完整经历马孔多的百年命运。',
          nextScene: 'era_a_narrative',
          effects: { tags: ['从头开始'], fate: 0, memory: null, targetChapter: 1 },
          alternativeNarrative: '若你选择从家族鼎盛开始——你将错过磁铁在手中嗡鸣的那个早晨。何塞·阿尔卡蒂奥·布恩迪亚会独自拖着磁铁走进丛林，乌尔苏拉站在门口，手叉着腰——这个画面永远只存在于羊皮卷的前几页。'
        },
        {
          id: 'era_b', label: '家族鼎盛',
          description: '降临在家族最辉煌的时刻，附身于奥雷里亚诺。见证失眠症瘟疫、丽贝卡的到来与钢琴曲的忧伤。',
          nextScene: 'era_b_narrative',
          effects: { tags: ['中途降临'], fate: 0, memory: null, targetChapter: 2 },
          alternativeNarrative: '若你选择从建村之初开始——你将赤脚踩在马孔多最初的泥地上。那二十多间芦竹房子在河岸边排开时，还没有人知道失眠症、战争和香蕉公司会长成后来那么多的鬼魂。'
        },
        {
          id: 'era_c', label: '战争年代',
          description: '降临在战争爆发的前夜，附身于奥雷里亚诺上校。站在自由党和保守党之间，手握一封信和一把枪。',
          nextScene: 'era_c_narrative',
          effects: { tags: ['战争降临者'], fate: 0, memory: null, targetChapter: 5 },
          alternativeNarrative: '若你选择从战争年代开始——你将直接从枪口下理解"孤独"的含义。但你将错过冰块、失眠症和自动钢琴——那些让战争之所以成为战争的事物。'
        }
      ],
      settlement: 'prologue_end'
    },

    /* 建村之初叙事 */
    era_a_narrative: {
      id: 'era_a_narrative', type: 'narrative', chapter: 0, round: 1,
      title: '建村之初',
      leftPage: {
        speaker: '梅尔基亚德斯', speakerColor: '#c4910a',
        paragraphs: [
          '你碰了碰第一页羊皮纸。纸张很薄，几乎透明，摸上去有一种不属于纸的温度——像人的皮肤，像刚刚熄灭的烛芯，像一块正在融化的冰。',
          '你在黑暗中被拉成一条线。你穿越了声音，穿越了颜色，穿越了时间。你听见一个女人在远处喊"吃饭了"，你听见吉卜赛人的鼓声在河对岸响起。',
          '然后你睁开眼睛。你站在马孔多的泥土上。你有一个名字：何塞·阿尔卡蒂奥·布恩迪亚。你有一双手，手里攥着两块磁铁。'
        ],
        quotes: ['"去吧。一百年后，我会再叫你回来的。"']
      },
      choices: null, nextScene: 'prologue_end'
    },

    /* 家族鼎盛叙事 */
    era_b_narrative: {
      id: 'era_b_narrative', type: 'narrative', chapter: 0, round: 1,
      title: '家族鼎盛',
      leftPage: {
        speaker: '梅尔基亚德斯', speakerColor: '#c4910a',
        paragraphs: [
          '你碰了碰第二页羊皮纸。你看见一座白色的大房子，墙壁刷得雪白，门上挂着一副锈迹斑斑的盔甲。院子里一棵栗树正在生长，房子里人影憧憧。',
          '你睁开眼睛的时候，正站在走廊的阴影里。你的名字是奥雷里亚诺。你三岁就能预言——你看见客厅桌上的锅在移动，你说："它要掉下来了。"然后它就掉下来了。',
          '但现在你不是三岁了。你是少年，站在门口，看着一个抱着骨灰盒的女孩从外面走来。她的眼睛像两口干涸的井。她叫丽贝卡。'
        ],
        quotes: ['"这个时代是最吵闹的。也是最孤独的。人最多的时候，往往最孤独。"']
      },
      choices: null, nextScene: 'prologue_end'
    },

    /* 战争年代叙事 */
    era_c_narrative: {
      id: 'era_c_narrative', type: 'narrative', chapter: 0, round: 1,
      title: '战争年代',
      leftPage: {
        speaker: '梅尔基亚德斯', speakerColor: '#c4910a',
        paragraphs: [
          '你碰了碰第三页羊皮纸。你看见的不是房子，而是军队——一排排细长的人影扛着步枪，穿过热带雨林。最前面的人裹着一件军用斗篷，面色冷峻。',
          '你睁开眼睛的时候，手里握着一封信和一把枪。你是奥雷里亚诺·布恩迪亚上校。你身上有十七个弹孔，来自十四次暗杀、七十三次伏击和一次行刑队。你都活了下来。',
          '但你今晚坐在这里——在一间简陋的作战室里——不是因为战争。是因为一个女人。她的名字是蕾梅黛丝。她死的时候才十四岁。'
        ],
        quotes: ['"这个时代没有钢琴曲，没有吉卜赛人的帐篷。这个时代只有开枪的人，和等待的人。"', '"乌尔苏拉会等你。"']
      },
      choices: null, nextScene: 'prologue_end'
    },

    /* 序章结算 */
    prologue_end: {
      id: 'prologue_end', type: 'settlement', chapter: 0, round: 2,
      title: '序章 · 结算',
      leftPage: {
        speaker: null, speakerColor: null,
        paragraphs: [
          '你伸出手，碰了碰那页被你选中的羊皮纸。纸张很薄，几乎透明，摸上去有一种不属于纸的温度。',
          '你在黑暗中被拉成一条线。你穿越了声音，穿越了颜色，穿越了时间。',
          '然后你睁开眼睛。你站在马孔多的泥土上。你有一个名字。你有一个身体。你有一双手。',
          '梅尔基亚德斯放下笔，看了你最后一眼："去吧。一百年后，我会再叫你回来的。"'
        ]
      },
      settlement: {
        summary: '序章完成。你选择了进入马孔多的时代。这不是选择的结束——而是所有选择的开始。羊皮卷已经翻开。你准备好了吗？',
        isChapterEnd: true,
        nextLabel: '进入你的时代',
        fateForecast: '梅尔基亚德斯在羊皮卷第一页的空白处写道："一百年后，飓风将从同一个方向吹来——带走一切。你此刻的选择，决定你在飓风中站在哪里。"'
      }
    }
  },
  memories: {},
  familyMembers: [
    { name: '梅尔基亚德斯', relation: '吉卜赛智者 · 羊皮卷守护者', generation: 0, isCurrent: false, description: '他知道一切，包括那些尚未发生的事情。他正在用鹅毛笔蘸着一种你叫不出名字的墨水，写下布恩迪亚家族的命运。' }
  ]
});

/* ================================================================
   第二章 · 失眠症
   ================================================================ */
registerChapter({
  id: 'chapter2',
  title: '第二章 · 失眠症',
  initialScene: 'ch2_opening',
  possessedCharacter: '何塞·阿尔卡蒂奥·布恩迪亚',
  chapterNumber: 2,
  preview: '<p>第三章 · 丽贝卡——家族扩张</p><p style="margin-top:8px;">你将附身于奥雷里亚诺，</p><p>见证一个抱着骨灰盒的女孩如何改变整个家族。</p><p style="margin-top:8px;font-weight:600;color:var(--gold-light);">失眠症最可怕的不是无法入睡——</p><p style="font-weight:600;color:var(--gold-light);">而是忘记了你是谁。</p>',
  nextLabel: '进入第三章 · 丽贝卡——家族扩张',
  scenes: {
    ch2_opening: {
      id: 'ch2_opening', type: 'narrative', chapter: 2, round: 0,
      title: '第二幕开启 · 血与记忆',
      leftPage: {
        speaker: '旁白', speakerColor: '#4a2a18',
        paragraphs: [
          '你感到一只手握着什么——比笔更重，比磁铁更重。是一支长矛。',
          '你站在尘土飞扬的院子里。对面站着普鲁登西奥·阿基拉尔。他正举着一只斗鸡，鸡脚上绑着铁刺。',
          '他笑了："你倒是能打。可你老婆怕你的鸡不行——她不敢让你上床，怕你那只鸡飞起来。"',
          '围观者哄笑。你把手里的长矛转了一下。你不记得你是怎么抬起手臂的——矛尖从普鲁登西奥的喉咙里穿过去，血喷出来，溅在你脸上。',
          '乌尔苏拉站在院子门口。她穿着白色的裙子，裙摆沾了泥。她张嘴想说话，但嘴唇只是动了动。然后她转身回屋了。'
        ]
      },
      choices: null, nextScene: 'ch2_r1_choice'
    },

    ch2_r1_choice: {
      id: 'ch2_r1_choice', type: 'choice', chapter: 2, round: 1,
      title: '第一轮选择 · 血债',
      leftPage: {
        speaker: '旁白', speakerColor: '#4a2a18',
        paragraphs: [
          '黎明。普鲁登西奥的尸体横在院子里。血在泥土上凝结成一块暗红色的饼。乌尔苏拉从你身后走出来，径直踩过血污，走到鸡窝前收了三个蛋，走回厨房。她自始至终没有低头看一眼。',
          '你明白：这座院子里不能有坟墓。但你不知道该怎么办。'
        ],
        transition: '你选择——'
      },
      choices: [
        { id: 'ch2_r1_a', label: '埋葬普鲁登西奥', description: '在栗树下挖一个坑，给他一个体面的坟墓。但死人的灵魂不会轻易安息……', nextScene: 'ch2_r1a', effects: { tags: ['罪与埋葬'], fate: 2, memory: '栗树下的声音' } },
        { id: 'ch2_r1_b', label: '拖出村子埋葬', description: '用旧蓆裹住尸体，拖到河对岸的密林里，埋在吉贝树下，矛尖朝下。', nextScene: 'ch2_r1b', effects: { tags: ['远离血债'], fate: 1, memory: null } },
        { id: 'ch2_r1_c', label: '告知全村人', description: '把村民们叫来，公开承认你做了什么，接受他们的审判。', nextScene: 'ch2_r1c', effects: { tags: ['公开忏悔者'], fate: 2, memory: '村庄的审判' } }
      ],
      settlement: 'ch2_r1_settlement'
    },

    ch2_r1a: { id: 'ch2_r1a', type: 'narrative', chapter: 2, round: 1, title: '罪与埋葬', leftPage: { speaker: '何塞·阿尔卡蒂奥·布恩迪亚', speakerColor: '#1a3a4a', paragraphs: ['你在栗树下挖了一个坑。不深，但你用黏土抹平了底部，铺了干草。你把普鲁登西奥放进去，把那只斗鸡也放了进去——它昨晚从屋顶上摔下来断了脖子。', '那天夜里你醒来，听见栗树下有什么东西在走动。你走到院子里，月光下什么也没有。但鸡窝里的鸡全死了——七只鸡，整整齐齐排在栗树下。你忽然觉得：这院子尽头有人正看着你。'] }, choices: null, nextScene: 'ch2_r1_settlement' },
    ch2_r1b: { id: 'ch2_r1b', type: 'narrative', chapter: 2, round: 1, title: '远离血债', leftPage: { speaker: '何塞·阿尔卡蒂奥·布恩迪亚', speakerColor: '#1a3a4a', paragraphs: ['你用旧蓆裹住普鲁登西奥，拖着他穿过整个村子。天还没亮透，街道上没有人。你把他拖到河边，塞进独木舟，在密林深处选了一棵吉贝树，在树根之间埋了他。', '你回来的时候，乌尔苏拉已经把院子里的血迹冲洗干净了。她什么也没说，只是把一碗汤放在桌上。汤里漂着几根鸡毛——你不知道她是不是故意的。'] }, choices: null, nextScene: 'ch2_r1_settlement' },
    ch2_r1c: { id: 'ch2_r1c', type: 'narrative', chapter: 2, round: 1, title: '公开忏悔', leftPage: { speaker: '何塞·阿尔卡蒂奥·布恩迪亚', speakerColor: '#1a3a4a', paragraphs: ['你把村民们叫来，站在尸体旁边，说了实话。没有人说话。没有人指责你。他们只是看着你——用一种你从未见过的目光：不是恐惧，是疏远。', '那天之后，马孔多的人遇见你时会主动绕开。没有人再请你帮他们修理农具。但乌尔苏拉却开始挽着你的手臂走过村子的主街。她从来没有问过你为什么要杀他。'] }, choices: null, nextScene: 'ch2_r1_settlement' },

    ch2_r1_settlement: { id: 'ch2_r1_settlement', type: 'settlement', chapter: 2, round: 1, title: '第一轮 · 结算', leftPage: { speaker: null, speakerColor: null, paragraphs: ['普鲁登西奥的尸体处理了。但他的灵魂没有。从此以后，每个满月的夜晚，你会听见栗树下有人在走动。乌尔苏拉说她听不见。但你知道——是他在等着你。'] }, settlement: { summary: '第一轮选择完成。血债已埋，但灵魂未安。', nextScene: 'ch2_r2_choice', nextLabel: '进入第二轮' } },

    ch2_r2_choice: {
      id: 'ch2_r2_choice', type: 'choice', chapter: 2, round: 2,
      title: '第二轮选择 · 失眠症降临',
      leftPage: {
        speaker: '乌尔苏拉', speakerColor: '#a52020',
        paragraphs: [
          '丽贝卡来了——抱着父母的骨灰盒，赤着脚，脚背上全是湿泥。她坐在桌旁，一言不发地嚼着泥土——那是她每天半夜从院子墙角抠下来的。',
          '一周后，失眠症开始在马孔多蔓延。第一个人发现自己睡不着。然后第二个。然后第三个。没有人惊慌——起初。但后来他们发现：失眠症不只是让人无法入睡，它还会让人失去记忆。',
          '乌尔苏拉站在厨房门口，手里拿着一把勺子——她正盯着勺子看了很久。"这是什么？"她问。她不是开玩笑。'
        ],
        transition: '你选择——'
      },
      choices: [
        { id: 'ch2_r2_a', label: '用标签标记一切', description: '在每件物品上写下名字：桌子、椅子、门、奶牛——你必须阻止遗忘。', nextScene: 'ch2_r2a', effects: { tags: ['标记者'], fate: 2, memory: '标签上的墨水' } },
        { id: 'ch2_r2_b', label: '寻找梅尔基亚德斯', description: '吉卜赛人知道一切。也许他知道如何治愈失眠症。骑上骡子去找他。', nextScene: 'ch2_r2b', effects: { tags: ['求索者'], fate: 2, memory: null } },
        { id: 'ch2_r2_c', label: '接受遗忘', description: '也许遗忘不是诅咒——也许它是一种释放。让记忆自己选择留下还是离开。', nextScene: 'ch2_r2c', effects: { tags: ['接受遗忘者'], fate: 1, memory: '遗忘的平静', antiFate: true } }
      ],
      settlement: 'ch2_r2_settlement'
    },

    ch2_r2a: { id: 'ch2_r2a', type: 'narrative', chapter: 2, round: 2, title: '标记者', leftPage: { speaker: '何塞·阿尔卡蒂奥·布恩迪亚', speakerColor: '#1a3a4a', paragraphs: ['你拿起墨水和笔，开始在每件物品上写字：桌子、椅子、门、奶牛、锅、勺。你在墙上用大字写着："这是墙。你住在墙里。你叫何塞·阿尔卡蒂奥·布恩迪亚。"', '你在栗树上挂了一个牌子："栗树。树下埋着普鲁登西奥·阿基拉尔。"乌尔苏拉看到那块牌子的时候，沉默了很久。然后她拿起笔，在下面加了一行："以及他留下的所有夜晚。"'] }, choices: null, nextScene: 'ch2_r2_settlement' },
    ch2_r2b: { id: 'ch2_r2b', type: 'narrative', chapter: 2, round: 2, title: '求索者', leftPage: { speaker: '何塞·阿尔卡蒂奥·布恩迪亚', speakerColor: '#1a3a4a', paragraphs: ['你骑上骡子，在河边找到了梅尔基亚德斯。他已经老了很多。你告诉他失眠症的事，他沉默了一会儿，然后说："我可以帮你——但代价很高。你愿意用什么来换清醒？"', '"……你要什么？""我要你记得的一切关于你父亲的事。全部。"你发现你已经没有什么可以给他了——你上次已经把面容的记忆卖给了他。你忽然笑了，笑得苦涩。"我已经付不起了。"'] }, choices: null, nextScene: 'ch2_r2_settlement' },
    ch2_r2c: { id: 'ch2_r2c', type: 'narrative', chapter: 2, round: 2, title: '接受遗忘', leftPage: { speaker: '何塞·阿尔卡蒂奥·布恩迪亚', speakerColor: '#1a3a4a', paragraphs: ['你坐在院子里，看着全村人一个接一个地忘记事物的名字。你没有在墙上写字。你没有去求梅尔基亚德斯。你只是坐在栗树下，手握着一小块冰——它正在慢慢融化。', '你忽然想：也许遗忘不是诅咒。也许它是唯一能让人重新开始的恩赐。那天晚上你睡着了——自从失眠症开始以来第一次。你梦见你父亲的脸——清晰，完整，带着笑。你不记得你醒着的时候是否还记得他。但在梦里，他一直都在。'] }, choices: null, nextScene: 'ch2_r2_settlement' },

    ch2_r2_settlement: { id: 'ch2_r2_settlement', type: 'settlement', chapter: 2, round: 2, title: '第二轮 · 结算', leftPage: { speaker: null, speakerColor: null, paragraphs: ['失眠症像潮水一样淹没了整个村子。有人在墙上写满了标签。有人在河边等待永远不回来的吉卜赛人。有人在遗忘中睡着了——并从此再也没有醒来。', '但马孔多没有死去。它只是学会了在一半的记忆中继续生活。'] }, settlement: { summary: '第二轮选择完成。你选择了对抗遗忘的方式——或选择接受它。', nextScene: 'ch2_r3_choice', nextLabel: '进入第三轮' } },

    ch2_r3_choice: {
      id: 'ch2_r3_choice', type: 'choice', chapter: 2, round: 3,
      title: '第三轮选择 · 丽贝卡的秘密',
      leftPage: {
        speaker: '旁白', speakerColor: '#4a2a18',
        paragraphs: [
          '丽贝卡在你们家住了三个月了。她白天不再吃泥土——乌尔苏拉用了草药和祈祷。但夜里你不确定。你听见她房间里有声音——不是哭声，是一种更奇怪的、像小动物在墙根下刨土的声音。',
          '有一天你推开她的房门。她坐在地上，嘴角沾着泥，膝盖上放着那个骨灰盒——盒盖开着。盒子里不是骨灰。是泥土。满满一盒泥土。',
          '她抬起头看你。她的眼睛里没有羞耻，没有恐惧——只有一种你从未在任何人脸上见过的东西：一种告诉你"我不属于这里"的沉默。'
        ],
        transition: '你选择——'
      },
      choices: [
        { id: 'ch2_r3_a', label: '带她去教堂祈祷', description: '也许她的痛苦需要的是救赎，而不是隐藏。带她去见镇上的神父。', nextScene: 'ch2_r3a', effects: { tags: ['信仰的引路人'], fate: 1, memory: null } },
        { id: 'ch2_r3_b', label: '陪她一起吃泥土', description: '你蹲在她身边，把手伸进骨灰盒，拿起一小块泥土放进嘴里。', nextScene: 'ch2_r3b', effects: { tags: ['共苦者'], fate: 2, memory: '泥土的味道' } },
        { id: 'ch2_r3_c', label: '把骨灰盒锁起来', description: '你不能让她继续这样下去。把盒子拿走，告诉她：从现在开始，这里就是你的家。', nextScene: 'ch2_r3c', effects: { tags: ['剪断脐带者'], fate: 2, memory: null } }
      ],
      settlement: 'ch2_r3_settlement'
    },

    ch2_r3a: { id: 'ch2_r3a', type: 'narrative', chapter: 2, round: 3, title: '信仰的引路人', leftPage: { speaker: '何塞·阿尔卡蒂奥·布恩迪亚', speakerColor: '#1a3a4a', paragraphs: ['你带丽贝卡去镇上的小教堂。神父听了她的事，给她倒了圣水，念了祝福词。丽贝卡跪在圣坛前，嘴唇翕动，但没有发出声音。', '你站在教堂门口，看着她的背影。夕阳从彩色玻璃窗照进来，把她染成一片一片的红色和蓝色。你不知道她在祈祷什么——但那天之后，她不再半夜偷偷吃泥了。她换成白天吃。'] }, choices: null, nextScene: 'ch2_r3_settlement' },
    ch2_r3b: { id: 'ch2_r3b', type: 'narrative', chapter: 2, round: 3, title: '共苦者', leftPage: { speaker: '何塞·阿尔卡蒂奥·布恩迪亚', speakerColor: '#1a3a4a', paragraphs: ['你蹲在她身边，把手伸进骨灰盒，拿起一小块泥土放进嘴里。泥在舌尖上化开——湿的，凉的，带着一种深埋在地下的气味。像河底的淤泥，像被雨水浸透的墓穴。', '丽贝卡看着你。她的眼睛瞪得很大。然后她笑了——那是你第一次看见她笑。她的牙齿上沾着泥，但你忽然觉得，那比任何人的微笑都更接近快乐。', '你们并肩坐着，吃着泥土，没有说话。窗外马孔多的夜晚正在缓缓降临。失眠症还在蔓延——但今晚你不怕。'] }, choices: null, nextScene: 'ch2_r3_settlement' },
    ch2_r3c: { id: 'ch2_r3c', type: 'narrative', chapter: 2, round: 3, title: '剪断脐带', leftPage: { speaker: '何塞·阿尔卡蒂奥·布恩迪亚', speakerColor: '#1a3a4a', paragraphs: ['你拿走了骨灰盒。丽贝卡尖叫着扑向你——她的手指抓碎了你的衣领。但你没有松手。你把骨灰盒锁进柜子里，钥匙放进口袋。', '"从现在开始，这里就是你的家。"你说。她蹲在柜子前面，哭了整整一个下午。但第二天早上，她走到厨房里，拿了一块面包——不是泥。这是她第一次自己拿起面包。'] }, choices: null, nextScene: 'ch2_r3_settlement' },

    ch2_r3_settlement: { id: 'ch2_r3_settlement', type: 'settlement', chapter: 2, round: 3, title: '第三轮 · 结算', leftPage: { speaker: null, speakerColor: null, paragraphs: ['丽贝卡开始在这个家里有了位置。她帮乌尔苏拉揉面，帮你在实验室里递工具。她仍然会在夜晚醒来，站在窗口看着远山。但她不再只是一个"来的人"——她正在变成"我们的人"。'] }, settlement: { summary: '第三轮选择完成。丽贝卡的秘密被你触碰了——结果取决于你的方式。', nextScene: 'ch2_r4_choice', nextLabel: '进入第四轮' } },

    ch2_r4_choice: {
      id: 'ch2_r4_choice', type: 'choice', chapter: 2, round: 4,
      title: '第四轮选择 · 清醒的代价',
      leftPage: {
        speaker: '梅尔基亚德斯', speakerColor: '#c4910a',
        paragraphs: [
          '梅尔基亚德斯回来了。他带回来一种绿色的药水——他说能治好失眠症，但有一个条件：服下药水的人将永远忘记自己最快乐的那一天。',
          '"不是失去记忆，"他说，"是失去温暖。你会记得那天发生了什么——但你不会再感受到那一天的阳光、风、那个人握着你的手时的温度。它变成了一页没有墨水的纸。"',
          '他把药瓶放在桌上。"你可以自己喝。也可以让全镇的人都喝。但你得先决定——值不值得。"'
        ],
        transition: '你选择——'
      },
      choices: [
        { id: 'ch2_r4_a', label: '自己先喝下药水', description: '承受代价——忘记你最快乐的一天，然后把这药分给全村人。', nextScene: 'ch2_r4a', effects: { tags: ['牺牲者'], fate: 3, memory: '失去温度的一天' } },
        { id: 'ch2_r4_b', label: '让全镇投票决定', description: '你不能替别人做这个决定。把全村人叫来，把药瓶和代价都摆在桌上。', nextScene: 'ch2_r4b', effects: { tags: ['民主者'], fate: 1, memory: null } },
        { id: 'ch2_r4_c', label: '拒绝——寻找别的办法', description: '"一定有别的方法。"你把药瓶还给梅尔基亚德斯。你不想用记忆换清醒。', nextScene: 'ch2_r4c', effects: { tags: ['不屈者'], fate: 1, memory: null, antiFate: true } }
      ],
      settlement: 'ch2_r4_settlement'
    },

    ch2_r4a: { id: 'ch2_r4a', type: 'narrative', chapter: 2, round: 4, title: '牺牲者', leftPage: { speaker: '何塞·阿尔卡蒂奥·布恩迪亚', speakerColor: '#1a3a4a', paragraphs: ['你拔开瓶塞，喝了下去。药水很苦——但苦的不是味道，是之后发生的事。你记得乌尔苏拉嫁给你那天——但你再也感觉不到那天阳光的温度了。你知道那是阳光，但你摸不到它了。', '你把药分给了全村人。失眠症退去了。标签被摘下来，遗忘停了下来。但每个马孔多人都在心里缺失了同一样东西——他们最温暖的那段记忆，变成了一个空洞。那个空洞不会痛，但它会漏风。'] }, choices: null, nextScene: 'ch2_r4_settlement' },
    ch2_r4b: { id: 'ch2_r4b', type: 'narrative', chapter: 2, round: 4, title: '民主者', leftPage: { speaker: '何塞·阿尔卡蒂奥·布恩迪亚', speakerColor: '#1a3a4a', paragraphs: ['你把全村人叫到广场上。梅尔基亚德斯站在中间，把药瓶举起来，解释了代价。村民们沉默了很长时间。', '最后是乌尔苏拉第一个站起来。"我喝。"她说，"我宁愿忘记阳光的感觉，也不要忘记勺子的名字——因为我还要给一家人做饭。"人们一个一个站起来。那天马孔多有七十三个人喝了那瓶药水。', '每个人都有了自己永远失去温度的那一天。但每个人也都记住了勺子的名字。'] }, choices: null, nextScene: 'ch2_r4_settlement' },
    ch2_r4c: { id: 'ch2_r4c', type: 'narrative', chapter: 2, round: 4, title: '不屈者', leftPage: { speaker: '何塞·阿尔卡蒂奥·布恩迪亚', speakerColor: '#1a3a4a', paragraphs: ['你把药瓶还给梅尔基亚德斯。他看了你很久，然后说："你是第一个拒绝我的人。"他把药瓶收进袖子里。', '"失眠症不靠药水，"他说，"靠的是反复——反复地做一件事，反复地说一个名字，反复地在心上刻一条痕迹。遗忘不是被治好的——是被更用力地记住的。"那天晚上你在栗树下坐到很晚。你开始用鹅毛笔写下你记得的每一件事——不是为了对抗遗忘。是为了告诉它：你可以来这里，但我不搬走。'] }, choices: null, nextScene: 'ch2_r4_settlement' },

    ch2_r4_settlement: { id: 'ch2_r4_settlement', type: 'settlement', chapter: 2, round: 4, title: '第四轮 · 结算', leftPage: { speaker: null, speakerColor: null, paragraphs: ['失眠症开始退去。不是因为药水，就是因为时间。遗忘的潮水退去之后，马孔多的海滩上留下了许多贝壳——那些是人们在墙上写下的标签，在彼此手上划过的痕迹，在夜里说过无数次的名字。'] }, settlement: { summary: '第四轮选择完成。失眠症的退去不是因为药水——而是因为有人坚持记住了。', nextScene: 'ch2_r5_choice', nextLabel: '进入最终轮' } },

    ch2_r5_choice: {
      id: 'ch2_r5_choice', type: 'choice', chapter: 2, round: 5,
      title: '第五轮选择 · 栗树下的结局',
      leftPage: {
        speaker: '旁白', speakerColor: '#4a2a18',
        paragraphs: [
          '何塞·阿尔卡蒂奥·布恩迪亚老了。不只是年纪——是他的心老了。他在实验室里待的时间越来越长，嘴里念念有词，说的话越来越像那些他曾经写在墙上的标签——重复，循环，没有起点也没有终点。',
          '有一天早晨，乌尔苏拉发现他蹲在栗树下，用一根树枝在地上画圆圈。他在画磁铁，画放大镜，画冰块。一套永远重复的图案。',
          '"他疯了。"村民们说。但你知道他没有疯——他只是去了一个他们去不了的地方。',
          '乌尔苏拉站在栗树下，手里拿着绳子。不是要绑他——是要帮他。她看着你。'
        ],
        transition: '你选择——'
      },
      choices: [
        { id: 'ch2_r5_a', label: '让他留在栗树下', description: '绑住他——不是为了惩罚，是为了保护。让他在树下度过最后的岁月。', nextScene: 'ch2_r5a', effects: { tags: ['守护者'], fate: 3, memory: '栗树下的绳结' } },
        { id: 'ch2_r5_b', label: '带他去河边', description: '你不信他疯了。解开他的绳子，带他去河边——也许他只是需要看见更大的东西。', nextScene: 'ch2_r5b', effects: { tags: ['解放者'], fate: 2, memory: '河边的午后' } },
        { id: 'ch2_r5_c', label: '和他一起画圆圈', description: '你蹲在他身边，拿起另一根树枝。你和他一起画——磁铁、放大镜、冰块。', nextScene: 'ch2_r5c', effects: { tags: ['同行至终点'], fate: 2, memory: '画在泥土中的永恒' } }
      ],
      settlement: 'ch2_r5_settlement'
    },

    ch2_r5a: { id: 'ch2_r5a', type: 'narrative', chapter: 2, round: 5, title: '守护者', leftPage: { speaker: '旁白', speakerColor: '#4a2a18', paragraphs: ['你用绳子把他绑在栗树下。他没有挣扎。乌尔苏拉在旁边站了很久——她没有哭。她只是走过去，把一件旧外套披在他肩上，把一碗热汤放在他手边。', '从那天起，何塞·阿尔卡蒂奥·布恩迪亚就住在栗树下了。他白天画圆圈，晚上数星星。有时候村里的人会来看他——不是看他疯，是看他那种不再困扰的神情。他们说他疯了——但你没有见过比他更平静的人。'] }, choices: null, nextScene: 'ch2_r5_settlement' },
    ch2_r5b: { id: 'ch2_r5b', type: 'narrative', chapter: 2, round: 5, title: '解放者', leftPage: { speaker: '旁白', speakerColor: '#4a2a18', paragraphs: ['你解开他的绳子。他站起来，揉了揉手腕。他看了看你——眼神很清醒。"走吧。"你说。', '你们走到河边。河水在夕阳下像一条正在融化的金色道路。他蹲下来，把手伸进水里。"水是湿的。"他说——像在告诉自己。"是的，水是湿的。"你回答。"那我还没忘记。"他笑了。那天晚上他自己走回家，坐在饭桌上，吃了三碗汤。'] }, choices: null, nextScene: 'ch2_r5_settlement' },
    ch2_r5c: { id: 'ch2_r5c', type: 'narrative', chapter: 2, round: 5, title: '同行至终点', leftPage: { speaker: '旁白', speakerColor: '#4a2a18', paragraphs: ['你蹲在他身边，拿起另一根树枝。你没有说话。你只是和他一起画——磁铁、放大镜、冰块。一遍，又一遍，又一遍。', '乌尔苏拉从厨房窗口看着你们两个人蹲在栗树下、用手在泥土里画着彼此看不懂的图形。她没有出来阻止。她只是站在那里，把手在围裙上擦了又擦。', '很多年后，当有人问起何塞·阿尔卡蒂奥·布恩迪亚是怎么变疯的，她会说："他没有疯。他只是去了一个我们不敢陪他去的地方。但有一个人陪他去了。"'] }, choices: null, nextScene: 'ch2_r5_settlement' },

    ch2_r5_settlement: { id: 'ch2_r5_settlement', type: 'settlement', chapter: 2, round: 5, title: '第五轮 · 结算', leftPage: { speaker: null, speakerColor: null, paragraphs: ['失眠症远去了。马孔多的人又开始睡着了——但那种睡眠和以前不一样了。以前的睡眠是遗忘，现在的睡眠是休息。人们在墙上写下的标签被雨水冲淡，但他们的手还记得碗的弧度，勺子的重量，爱人的名字。'] }, settlement: { summary: '最终轮选择完成。你决定了何塞·阿尔卡蒂奥·布恩迪亚在栗树下的命运——也决定了你自己的。', nextScene: 'chapter2_end', nextLabel: '查看章末结算' } },

    chapter2_end: {
      id: 'chapter2_end', type: 'settlement', chapter: 2, round: 6,
      title: '第二章 · 章末结算',
      leftPage: { speaker: null, speakerColor: null, paragraphs: ['你合上羊皮卷的第二章。失眠症已经结束，但有些东西永远不会回来——那些被遗忘的温暖日子像被橡皮擦去的字迹，虽然还能隐约看出轮廓，但再也读不出颜色了。', '梅尔基亚德斯在阴影里说："下一章会更拥挤。有人要来了——抱着一个箱子，带着一种病。她的名字叫丽贝卡。"'] },
      settlement: { summary: '第二章完结。你在五轮选择中面对了血、遗忘和疯狂——你选择了如何记住，也选择了如何放手。', isChapterEnd: true, nextLabel: '进入第三章 · 丽贝卡——家族扩张' }
    }
  },
  memories: {
    '栗树下的声音': { id: '栗树下的声音', title: '栗树下的声音', description: '你埋葬了普鲁登西奥，但每个满月的夜晚，你都会听见他在栗树下走动。', chapter: 2 },
    '标签上的墨水': { id: '标签上的墨水', title: '标签上的墨水', description: '你在每件物品上写了名字。乌尔苏拉在"栗树"下加了一行："以及他留下的所有夜晚。"', chapter: 2 },
    '泥土的味道': { id: '泥土的味道', title: '泥土的味道', description: '你陪丽贝卡吃了一口泥土。它在舌尖上化开——湿的，凉的，带着一种深埋在地下的气味。', chapter: 2 },
    '失去温度的一天': { id: '失去温度的一天', title: '失去温度的一天', description: '你喝下梅尔基亚德斯的药水，永远失去了最快乐那天的温度。你记得阳光——但你再也感觉不到它了。', chapter: 2 },
    '遗忘的平静': { id: '遗忘的平静', title: '遗忘的平静', description: '你选择接受遗忘。那天晚上你梦见了父亲的脸——清晰，完整。在梦里，他一直都在。', chapter: 2 },
    '村庄的审判': { id: '村庄的审判', title: '村庄的审判', description: '你公开承认了自己的罪行。村民们疏远了你——但乌尔苏拉开始挽着你的手臂走过主街。', chapter: 2 },
    '河边的午后': { id: '河边的午后', title: '河边的午后', description: '你解开他的绳子，带他去河边。"水是湿的。""是的。""那我还没忘记。"他笑了。', chapter: 2 },
    '栗树下的绳结': { id: '栗树下的绳结', title: '栗树下的绳结', description: '你把他绑在栗树下——不是为了惩罚，是为了保护。他从此住在树下，比任何人都平静。', chapter: 2 },
    '画在泥土中的永恒': { id: '画在泥土中的永恒', title: '画在泥土中的永恒', description: '你和他一起蹲在栗树下，在泥土里画着磁铁、放大镜、冰块。一遍又一遍。', chapter: 2 }
  },
  familyMembers: [
    { name: '普鲁登西奥·阿基拉尔', relation: '死者', generation: 0, isCurrent: false, description: '在斗鸡场上被何塞·阿尔卡蒂奥·布恩迪亚用长矛刺穿喉咙。死后灵魂在栗树下徘徊。' },
    { name: '丽贝卡', relation: '养女', generation: 2, isCurrent: false, description: '抱着父母骨灰盒来到布恩迪亚家的女孩。吃泥土，带着一种没有人能叫出名字的病。' }
  ]
});
