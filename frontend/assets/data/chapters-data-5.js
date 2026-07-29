/* chapters-data-5.js — 第13-20章 + 终章游戏数据 */

/* ================================================================
   第十三章 · 梅梅与马乌里肖·巴比伦
   ================================================================ */
registerChapter({
  id: 'chapter13', title: '第十三章 · 梅梅与马乌里肖·巴比伦',
  initialScene: 'ch13_opening', possessedCharacter: '梅梅（雷纳塔·蕾梅黛丝）', chapterNumber: 13,
  preview: '<p>第十四章 · 香蕉公司的终结</p>',
  nextLabel: '进入第十四章 · 香蕉公司的终结',
  scenes: {
    ch13_opening: { id:'ch13_opening', type:'narrative', chapter:13, round:0, title:'第一只蝴蝶', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你一整天都心不在焉。手指在钢琴键上划过——弹的不是母亲指定的练习曲，是你脑子里一直在绕的旋律。没有名字，没有谱子——只是在你心里嗡嗡作响。','然后你看见了——一只黄色的蝴蝶。它从窗口飞进来，绕着你的手指转了一圈——然后落在一个男人的肩膀上。他站在门外——你没有注意到他是什么时候来的。他叫马乌里肖·巴比伦。他开着一辆黄色的福特车——车上总有蝴蝶跟着。','你是梅梅。你是费尔南达的女儿——但你也是布恩迪亚。你的心已经在跳着不同于你母亲规划的节奏。'], clues: [{ triggerText: '蝴蝶', itemId: 'butterfly_wing', narrative: '一片黄蝴蝶的翅膀——它落在地上时还在轻轻颤动。你不知道蝴蝶会不会痛。但你知道——当钢琴响起的时候，有些事情就再也不会回到过去了。', unlocksIn: ['chapter15'] }] }, echoText: '你记得自动钢琴第一次奏响的那个晚上——皮埃特罗站在钢琴旁的姿势，丽贝卡在楼上，阿玛兰妲在缝衬衫。现在琴声又响了——但听的人已经换了一代。', choices:null, nextScene:'ch13_r1_choice' },

    ch13_r1_choice: { id:'ch13_r1_choice', type:'choice', chapter:13, round:1, title:'第一轮选择 · 蝴蝶之约', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['马乌里肖·巴比伦——香蕉公司机械师的学徒。他身上总有机油味——和蝴蝶。黄色的蝴蝶总是跟着他——像他是一朵移动的花。','他约你去电影院——不是马孔多的电影院（马孔多没有），是省城的。你母亲费尔南达决不会允许——但你不是你母亲。'], transition:'你选择——' }, choices:[
      { id:'ch13_r1_a', label:'偷偷去——不让母亲知道', description:'爱情不需要许可。翻窗，穿过花园——让他带你去。蝴蝶会为你们开路。', nextScene:'ch13_r1a', effects:{ tags:['偷偷恋爱者'], memory:null, fate: -1, bond: 2 } },
      { id:'ch13_r1_b', label:'告诉母亲——争取她的理解', description:'你不是离家出走——你是去爱。告诉费尔南达——也许她会理解。也许她不会。', nextScene:'ch13_r1b', effects:{ tags:['坦诚者'], memory:null, fate: 1, bond: 1 } },
      { id:'ch13_r1_c', label:'拒绝——保持安全的距离', description:'他是香蕉公司的工人——你母亲永远不会接受。趁还没有陷得太深——停下来。', nextScene:'ch13_r1c', effects:{ tags:['自制者'], memory:'未赴的约', fate: 1, bond: -1 } }
    ], settlement:'ch13_r1_settlement' },
    ch13_r1a: { id:'ch13_r1a', type:'narrative', chapter:13, round:1, title:'偷偷恋爱者', leftPage:{ speaker:'梅梅', speakerColor:'#a52020', paragraphs:['你翻过窗户——费尔南达在午睡。马乌里肖的福特车等在街角。你坐上车——汽油味混着花香。他笑了——他的牙齿很白，在黄色的蝴蝶之间一闪一闪。你去了电影院——但不记得电影放了什么。你只记得他的手放在你手上——蝴蝶在外面拍打着车窗。']}, choices:null, nextScene:'ch13_r1_settlement' },
    ch13_r1b: { id:'ch13_r1b', type:'narrative', chapter:13, round:1, title:'坦诚者', leftPage:{ speaker:'梅梅', speakerColor:'#a52020', paragraphs:['你站在费尔南达面前——告诉她：有一个男孩。香蕉公司的——但他是好人。费尔南达的脸像石像——然后她站起来，走进房间，关上了门。不是发怒——是沉默。她的沉默比喊叫更响。但你已经说了——说出来之后你的心轻了一半。']}, choices:null, nextScene:'ch13_r1_settlement' },
    ch13_r1c: { id:'ch13_r1c', type:'narrative', chapter:13, round:1, title:'自制者', leftPage:{ speaker:'梅梅', speakerColor:'#a52020', paragraphs:['你说："不。"马乌里肖的蝴蝶停了一下——然后飞走了。他看着你——他知道了。他没有说什么——只是开着他的福特车离开了。但那天晚上——一只黄色的蝴蝶停在你枕边。你没有赶它走——你让它在那里陪了你一整夜。有些爱没有被发生——但也没有被忘记。']}, choices:null, nextScene:'ch13_r1_settlement' },
    ch13_r1_settlement: { id:'ch13_r1_settlement', type:'settlement', chapter:13, round:1, title:'第一轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['黄蝴蝶开始出现在马孔多——不是一只两只，是成百上千。它们跟着马乌里肖——然后跟着梅梅。蝴蝶是爱情的使者——但也是危险的预兆。费尔南达看见蝴蝶的时候——她不是在欣赏。']}, settlement:{ summary:'第一轮完成。梅梅的心已经飞向了蝴蝶的方向。', nextScene:'ch13_r2_choice', nextLabel:'进入第二轮' } },

    ch13_r2_choice: { id:'ch13_r2_choice', type:'choice', chapter:13, round:2, title:'第二轮选择 · 费尔南达的愤怒', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['费尔南达发现了——不是蝴蝶，是电影院的门票。她在梅梅的口袋里找到了一张撕了一半的电影票。她拿着票在桌子上质问梅梅——票在发抖，不是因为她的手在抖，是因为她的整个世界观都被这半张纸撕碎了。','"你和一个工人——出去？"这不是问句。这是判决。费尔南达在她的人生剧本里——梅梅要嫁给贵族，要住在省城，要在教堂里举办婚礼。马乌里肖·巴比伦——这个满手机油的男人——不在剧本里。'], transition:'你选择——' }, choices:[
      { id:'ch13_r2_a', label:'反抗——维护你的爱', description:'站在母亲面前，告诉她：你爱他。不管她同不同意——你已经决定了。', nextScene:'ch13_r2a', effects:{ tags:['反抗的女儿'], memory:null, fate: 0, bond: 2 } },
      { id:'ch13_r2_b', label:'低头——但暗地继续', description:'表面上服从——让母亲以为你放弃了。但暗地里继续见他。用更巧妙的方式。', nextScene:'ch13_r2b', effects:{ tags:['伪装者'], memory:null, fate: 0, bond: 2 } },
      { id:'ch13_r2_c', label:'妥协——和他约定将来', description:'现在时机不对——但可以等。和马乌里肖约定：等时机成熟再在一起。', nextScene:'ch13_r2c', effects:{ tags:['耐心的爱人'], memory:null, fate: 1, bond: -1 } }
    ], settlement:'ch13_r2_settlement' },
    ch13_r2a: { id:'ch13_r2a', type:'narrative', chapter:13, round:2, title:'反抗的女儿', leftPage:{ speaker:'梅梅', speakerColor:'#a52020', paragraphs:['你看着费尔南达——告诉她你爱他。"他满手机油——但他从来不让我觉得我不重要。你嫁给了布恩迪亚家的人——难道不是因为爱情？"费尔南达的脸白了。不是因为被说服——是因为她从来没有被这样对等地质问过。']}, choices:null, nextScene:'ch13_r2_settlement' },
    ch13_r2b: { id:'ch13_r2b', type:'narrative', chapter:13, round:2, title:'伪装者', leftPage:{ speaker:'梅梅', speakerColor:'#a52020', paragraphs:['你低下头——告诉费尔南达你放弃了。她怀疑——但她宁愿相信。而你继续偷偷见马乌里肖——在夜里，在后院，在黄蝴蝶最密集的地方。你学会了活在两个世界里——一个费尔南达能看见的，一个只有蝴蝶能进入的。']}, choices:null, nextScene:'ch13_r2_settlement' },
    ch13_r2c: { id:'ch13_r2c', type:'narrative', chapter:13, round:2, title:'耐心的爱人', leftPage:{ speaker:'梅梅', speakerColor:'#a52020', paragraphs:['你找马乌里肖谈了。他沉默了很久——然后说："我可以等。"蝴蝶在他周围飞舞——它们的翅膀频率变慢了，像是在配合这两个决定等待的年轻人。你不知道要等多久——但至少你知道他不是一个人。蝴蝶会陪着他。']}, choices:null, nextScene:'ch13_r2_settlement' },
    ch13_r2_settlement: { id:'ch13_r2_settlement', type:'settlement', chapter:13, round:2, title:'第二轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['费尔南达的愤怒像一堵墙——但梅梅的心是蝴蝶。蝴蝶不会被墙困住——它们会飞过去。虽然费尔南达不知道——她以为她的女儿已经屈服了。但她还不了解布恩迪亚家的固执。']}, settlement:{ summary:'第二轮完成。爱情与母亲的权威碰撞了。', nextScene:'ch13_r3_choice', nextLabel:'进入第三轮' } },

    ch13_r3_choice: { id:'ch13_r3_choice', type:'choice', chapter:13, round:3, title:'第三轮选择 · 夜间的幽会', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['深夜。黄蝴蝶在后院的棕榈树下聚集——它们的光芒在黑暗中像摇动的烛火。马乌里肖在等你。他每天都来——不管下雨还是晴天。他已经等了很久。','费尔南达不知道——但她感觉到了。她今天在后院的草丛里发现了汽油的痕迹。她让人在后院放了岗哨——门房每晚都守着。但马乌里肖有他的途径——他翻墙，爬树，避开一切障碍——只为见你几分钟。'], transition:'你选择——' }, choices:[
      { id:'ch13_r3_a', label:'继续——每晚见他', description:'费尔南达的岗哨挡不住爱情。每天晚上——在后院，在蝴蝶的掩护下。', nextScene:'ch13_r3a', effects:{ tags:['不悔的爱人'], memory:null, fate: 0, bond: 2 } },
      { id:'ch13_r3_b', label:'减少频率——更谨慎', description:'现在太危险了。减少见面——但每次见面都更珍贵。让他知道你不是不爱——是更爱。', nextScene:'ch13_r3b', effects:{ tags:['谨慎的爱人'], memory:null, fate: 1, bond: -1 } },
      { id:'ch13_r3_c', label:'一起去省城——私奔', description:'马孔多容不下这个爱情。和他一起离开——去一个没有岗哨和蝴蝶也要重新开始的地方。', nextScene:'ch13_r3c', effects:{ tags:['私奔者'], memory:null, fate: 1, bond: -1 } }
    ], settlement:'ch13_r3_settlement' },
    ch13_r3a: { id:'ch13_r3a', type:'narrative', chapter:13, round:3, title:'不悔的爱人', leftPage:{ speaker:'梅梅', speakerColor:'#a52020', paragraphs:['你每晚都去后院。马乌里肖看着你来的时候——蝴蝶会突然变得更多。你们不说很多话——只是坐在一起，让蝴蝶落在你们身上。你不在乎费尔南达——你不在乎岗哨。你只知道：这些夜晚是你在布恩迪亚家最属于你自己的时刻。']}, choices:null, nextScene:'ch13_r3_settlement' },
    ch13_r3b: { id:'ch13_r3b', type:'narrative', chapter:13, round:3, title:'谨慎的爱人', leftPage:{ speaker:'梅梅', speakerColor:'#a52020', paragraphs:['你告诉他——少来一些。他点了点头。"不是因为不爱你——是因为爱你太多。"他笑了——蝴蝶在他肩头震动了一下。你们减少到每周一次——但每次见面都像一整年的浓缩。讲不完的话，握不够的手。']}, choices:null, nextScene:'ch13_r3_settlement' },
    ch13_r3c: { id:'ch13_r3c', type:'narrative', chapter:13, round:3, title:'私奔者', leftPage:{ speaker:'梅梅', speakerColor:'#a52020', paragraphs:['你拉着他的手——凌晨三点。福特车发动了——蝴蝶在后面追了几百米，然后它们停下来了——它们知道这次是真正的告别。你们开往省城——没有计划，没有钱，没有祝福。但你们有彼此。这也许不够——但这比费尔南达能理解的"足够"多得多。']}, choices:null, nextScene:'ch13_r3_settlement' },
    ch13_r3_settlement: { id:'ch13_r3_settlement', type:'settlement', chapter:13, round:3, title:'第三轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['爱情在蝴蝶的掩护下继续生长——但费尔南达的耐心已经耗尽了。她不会善罢甘休——因为在她眼里这不是爱情，是背叛。']}, settlement:{ summary:'第三轮完成。你在母亲的监控下选择了爱的方式。', nextScene:'ch13_r4_choice', nextLabel:'进入第四轮' } },

    ch13_r4_choice: { id:'ch13_r4_choice', type:'choice', chapter:13, round:4, title:'第四轮选择 · 费尔南达的报复', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['费尔南达的报复来得很快。她不是自己去做的——她叫来了警察。在后院——在那个你每晚和马乌里肖约会的地方——枪响了。不是杀人的枪——是射向天花的枪。但子弹打破的不只是空气——是你的世界。','马乌里肖倒在地上——子弹打中了他的脊椎。他没有死——但他再也站不起来了。费尔南达把他送到了遥远的医院——她付了钱，条件是他永远不回来。蝴蝶消失了——不是一只一只，是同时全部消失。空气里只剩下汽油味。'], transition:'你选择——' }, choices:[
      { id:'ch13_r4_a', label:'去他的医院——陪着他', description:'马乌里肖需要你。不管费尔南达怎么想——你要去陪着他直到他站起来。', nextScene:'ch13_r4a', effects:{ tags:['忠诚的爱人'], memory:null, fate: -1, bond: 2 } },
      { id:'ch13_r4_b', label:'留在家——但永不忘恨', description:'你不能去——但你会记住。在你的心里为费尔南达建一座坟。', nextScene:'ch13_r4b', effects:{ tags:['怀恨者'], memory:null, fate: 1, bond: -1 } },
      { id:'ch13_r4_c', label:'把自己关起来——不说话', description:'你不去任何地方——也不说任何话。用沉默建造一座监狱——把自己和世界隔开。', nextScene:'ch13_r4c', effects:{ tags:['沉默的囚徒'], memory:'沉默的监狱', fate: 0, bond: -2 } }
    ], settlement:'ch13_r4_settlement' },
    ch13_r4a: { id:'ch13_r4a', type:'narrative', chapter:13, round:4, title:'忠诚的爱人', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你去了医院。马乌里肖躺在床上——下半身动不了了，但他的眼睛看见你的时候还是亮了一下。蝴蝶没有跟来——但它们把位置留给了你。你坐在他床边，握着他的手。油污已经洗掉了——但他闻起来还是像机油。你不在乎。']}, choices:null, nextScene:'ch13_r4_settlement' },
    ch13_r4b: { id:'ch13_r4b', type:'narrative', chapter:13, round:4, title:'怀恨者', leftPage:{ speaker:'梅梅', speakerColor:'#a52020', paragraphs:['你留在家里——但你不和费尔南达说话了。不是一天两天——是永远。你在同一张桌子上吃饭——但你看着她的时候，眼睛是空的。费尔南达知道——她每次看到你的眼神就低下头。她赢了这场仗——但她失去了女儿。']}, choices:null, nextScene:'ch13_r4_settlement' },
    ch13_r4c: { id:'ch13_r4c', type:'narrative', chapter:13, round:4, title:'沉默的囚徒', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你把自己关在房间里。不说话，不吃饭——只喝水。费尔南达在门外哭——但你没有开门。你在房间里写了一封信——没有寄出。你写满了马乌里肖的名字——一遍又一遍。蝴蝶没有再回来——但你也不需要它们了。你已经变成了自己的蝴蝶——只是翅膀被折断了。']}, choices:null, nextScene:'ch13_r4_settlement' },
    ch13_r4_settlement: { id:'ch13_r4_settlement', type:'settlement', chapter:13, round:4, title:'第四轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['黄蝴蝶从马孔多消失了。夏天结束得很快——没有了蝴蝶，天空变得空阔而无聊。梅梅的心像被冻住了一样——但费尔南达的战争还在继续。']}, settlement:{ summary:'第四轮完成。爱情被子弹打断——你选择了如何面对。', nextScene:'ch13_r5_choice', nextLabel:'进入最终轮' } },

    ch13_r5_choice: { id:'ch13_r5_choice', type:'choice', chapter:13, round:5, title:'第五轮选择 · 修道院', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['费尔南达决定把梅梅送走——送到远方的修道院。"让你在那里学会规矩。"她说。这不是建议——是命令。梅梅的行李已经打包好了——两件裙子，一本圣经，一张马乌里肖的照片（藏在内衬里）。','费尔南达站在门口——她的脸像石像一样。梅梅看着她——这对母女之间已经没有任何东西可以说的了。所有的话都被那声枪响说完了。'], transition:'你选择——' }, choices:[
      { id:'ch13_r5_a', label:'顺从——但带着他的记忆', description:'去修道院——但在心里藏好马乌里肖的照片和你们的每一个夜晚。费尔南达可以决定你住哪——不能决定你是谁。', nextScene:'ch13_r5a', effects:{ tags:['带着爱的囚徒'], memory:'藏起照片的行李', fate: -2, bond: 1 } },
      { id:'ch13_r5_b', label:'最后一次反抗——拒绝上车', description:'你已经没有什么可以失去的了。站在门口——不上去。让全世界都看见费尔南达的女儿不服从。', nextScene:'ch13_r5b', effects:{ tags:['最后的反抗者'], memory:null, fate: 2, bond: -1 } },
      { id:'ch13_r5_c', label:'走——但发誓有一天回来', description:'现在走吧——让费尔南达以为她赢了。但你在心里刻下一个誓言：有一天你会回来。不是为了她——是为了自己。', nextScene:'ch13_r5c', effects:{ tags:['带着誓言的流放者'], memory:null, fate: 1, bond: 0 } },
      { id:'ch13_r5_d', label:'梅梅——你不是被流放，你是带着爱离开', description:'你了解梅梅——她不是会恨的人。在修道院的围墙里，她还会梦见蝴蝶。告诉她：爱不会因为距离变淡。', nextScene:'ch13_r5a', requiredRelationship: { character: '梅梅（雷纳塔·蕾梅黛丝·布恩迪亚）', min: 60 }, effects:{ tags:['为梅梅送行的人'], memory:null, fate: 0, bond: 2 } },
      { id:'ch13_r5_e', label:'你听过那首未寄出的乐谱——为梅梅弹一个音符', description:'皮埃特罗的钢琴还在角落里积灰。你坐下来——不会弹，但你按下一个键。一个音符——一声为梅梅送行的钟。', nextScene:'ch13_r5a', requiredClue: 'unsent_score', effects:{ tags:['弹响回声的人'], memory:null, fate: 0, bond: 2 } },
      { id:'ch13_r5_f', label:'你记得钢琴的最后一个音符——它还在空气里', description:'皮埃特罗弹完最后一支曲的那个下午——音符没有消失，它挂在空气中等了这么多年。现在你听见了——那不是告别，是邀请。', nextScene:'ch13_r5a', requiredMemory: '最后的音符', effects:{ tags:['听见回声的人'], memory:null, fate: 0, bond: 1 } }
    ], settlement:'ch13_r5_settlement' },
    ch13_r5a: { id:'ch13_r5a', type:'narrative', chapter:13, round:5, title:'带着爱的囚徒', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你上了车。没有哭。你把照片贴在内衬上——每走一公里，你就摸一下那个口袋。修道院很冷，修女很严，圣经很厚——但你的手总是放在那个口袋里。马乌里肖在那里——蝴蝶也在那里。费尔南达不知道——她永远也不会知道。']}, choices:null, nextScene:'ch13_r5_settlement' },
    ch13_r5b: { id:'ch13_r5b', type:'narrative', chapter:13, round:5, title:'最后的反抗者', leftPage:{ speaker:'梅梅', speakerColor:'#a52020', paragraphs:['你站在门口——不上去。费尔南达的脸抽了一下。你看了她一眼——不是恨，是失望。你转身走回了房子——不是去你的房间，是去后院的棕榈树下。那里曾经有蝴蝶——现在什么都没有了。但至少你是站着来到最后的。']}, choices:null, nextScene:'ch13_r5_settlement' },
    ch13_r5c: { id:'ch13_r5c', type:'narrative', chapter:13, round:5, title:'带着誓言的流放者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你上了车。车子开动的时候——你回头看了马孔多一眼。栗树在风中摇晃——那些房间的窗户紧闭着。你在心里说：我会回来的。不是为了费尔南达——是为了这所房子，为了蝴蝶，为了那个被子弹打断脊椎但仍然对你微笑的人。']}, choices:null, nextScene:'ch13_r5_settlement' },
    ch13_r5_settlement: { id:'ch13_r5_settlement', type:'settlement', chapter:13, round:5, title:'第五轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['梅梅走了。布恩迪亚家失去了最后一只黄蝴蝶。后院的棕榈树还在——但在它下面再也没有人坐着等待爱情了。费尔南达以为她赢了——但布恩迪亚家里没有人真正赢过。只有活下来的人。']}, settlement:{ summary:'最终轮完成。梅梅的爱情结束了——以她无法选择的方式。', nextScene:'chapter13_end', nextLabel:'查看章末结算' } },
    chapter13_end: { id:'chapter13_end', type:'settlement', chapter:13, round:6, title:'第十三章 · 章末结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['第十三章完结。梅梅被送往修道院——黄蝴蝶永不回来。','但一个婴儿被偷偷送到了布恩迪亚家门口——梅梅和马乌里肖的孩子。费尔南达会把这个孩子藏起来——不让他知道自己的来历。他的名字，暂时，还不重要。']}, settlement:{ summary:'第十三章完结。蝴蝶已散——但果实已经种下。', isChapterEnd:true, nextLabel:'进入第十四章 · 香蕉公司的终结', quadrantNarratives: { guardian: '黄蝴蝶飞走了——但你知道它们来过。在棕榈树下，在钢琴声里。', prophet: '你看见爱情在规则面前碎成粉末——不是第一次了。也不会是最后一次。', follower: '你试图保护她——但有些墙太高了。至少你试过。至少你在她身边站过一分钟。', rebel: '你对抗了整个家族的规则——输了吗？也许。但你让规矩知道有人不服从。这就够了。' } } }
  },
  memories: {
    '未赴的约': { id:'未赴的约', title:'未赴的约', description:'你说了"不"——但蝴蝶还是飞来了。一只停在你枕边——陪你一整夜。有些爱没被发生，但没被忘记。', chapter:13 },
    '沉默的监狱': { id:'沉默的监狱', title:'沉默的监狱', description:'你把自己关在房间里——不说话，不吃饭。你写了一封信——没有寄出。写满了他的名字。', chapter:13 },
    '藏起照片的行李': { id:'藏起照片的行李', title:'藏起照片的行李', description:'照片贴在内衬上——每走一公里就摸一下那个口袋。费尔南达不知道——永远不会。', chapter:13 }
  },
  familyMembers: [
    { name:'梅梅（雷纳塔·蕾梅黛丝·布恩迪亚）', relation:'女儿（费尔南达/奥雷里亚诺第二）', generation:5, isCurrent:false, description:'费尔南达的女儿。她的爱情被母亲的子弹打碎——黄蝴蝶从此离开了马孔多。' },
    { name:'马乌里肖·巴比伦', relation:'被爱者', generation:0, isCurrent:false, description:'香蕉公司机械师的学徒。总被黄蝴蝶围绕。被费尔南达的枪弹打断了脊椎。' }
  ]
});

/* ================================================================
   第十四章 · 香蕉公司的终结
   ================================================================ */
registerChapter({
  id: 'chapter14', title: '第十四章 · 香蕉公司的终结',
  initialScene: 'ch14_opening', possessedCharacter: '何塞·阿尔卡蒂奥第二', chapterNumber: 14,
  preview: '<p>第十五章 · 梅梅之死、私生子的出现</p>',
  nextLabel: '进入第十五章 · 私生子的出现',
  scenes: {
    ch14_opening: { id:'ch14_opening', type:'narrative', chapter:14, round:0, title:'罢工前夜', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['油灯在黑暗中晃动——那种摇曳不定的、随时会熄灭的光。你是何塞·阿尔卡蒂奥第二。你是那场屠杀之后唯一坚持讲述的人——但现在你累了。不是身体累——是心累。','香蕉公司的铁轨正在被拆掉——工棚空了，外国人都走了。但他们留下的不是空地——是记忆。是三千人的重量。你每晚都听见他们在火车站的方向低声说话——但别人都说你在发疯。'], clues: [{ triggerText: '香蕉公司', itemId: 'banana_company_seal', narrative: '你在拆掉的工棚废墟里发现一枚铁质印章——"联合果品公司"。上面的字已经锈了，但当你把它拿起来的时候，铁在掌心里还是凉的——就像三千具尸体还没有完全失去温度一样。', unlocksIn: ['chapter19'] }] }, choices:null, nextScene:'ch14_r1_choice' },

    ch14_r1_choice: { id:'ch14_r1_choice', type:'choice', chapter:14, round:1, title:'第一轮选择 · 最后的工人', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['香蕉公司已经撤走了——但有几个工人留了下来。他们住在废弃的工棚里——没有工资，没有食物，没有未来。他们来找你——何塞·阿尔卡蒂奥第二，老罢工领袖。"我们该怎么办？"','你看着他们——他们的脸上还有那场屠杀的阴影。你也不知道该怎么办。但你至少可以告诉他们一件事。'], transition:'你选择——' }, choices:[
      { id:'ch14_r1_a', label:'组织他们——要求赔偿', description:'不能就这样算了。帮他们组织起来——向政府和公司要求应得的赔偿。', nextScene:'ch14_r1a', effects:{ tags:['不倦的组织者'], memory:null, fate: 1, bond: 1 } },
      { id:'ch14_r1_b', label:'告诉他们真相——至少让他们知道', description:'也许拿不到赔偿——但至少他们应该知道发生了什么。讲给他们听。', nextScene:'ch14_r1b', effects:{ tags:['真相传递者'], memory:null, fate: 0, bond: -1 } },
      { id:'ch14_r1_c', label:'劝他们离开——保护性命', description:'继续斗下去只会死更多人。劝他们离开马孔多——去别的地方重新开始。', nextScene:'ch14_r1c', effects:{ tags:['保护者'], memory:null, fate: -1, bond: 2 } }
    ], settlement:'ch14_r1_settlement' },
    ch14_r1a: { id:'ch14_r1a', type:'narrative', chapter:14, round:1, title:'不倦的组织者', leftPage:{ speaker:'何塞·阿尔卡蒂奥第二', speakerColor:'#1a3a4a', paragraphs:['你帮他们写了一封请愿书。你知道政府不会看——但你在信末签了你的名字：布恩迪亚。这个名字在马孔多还有分量——哪怕它的光芒正在黯淡。工人们学会了在信上签名——这是他们第一次用笔而不是用工具来战斗。']}, choices:null, nextScene:'ch14_r1_settlement' },
    ch14_r1b: { id:'ch14_r1b', type:'narrative', chapter:14, round:1, title:'真相传递者', leftPage:{ speaker:'何塞·阿尔卡蒂奥第二', speakerColor:'#1a3a4a', paragraphs:['你坐在废弃的工棚里——给他们讲那场屠杀。你说了机枪的位置，军官的脸，尸体的数量。他们听着——有些人哭了，有些人握紧了拳头。你讲完之后——一个老人说："我儿子在里面。谢谢你还记得他。"']}, choices:null, nextScene:'ch14_r1_settlement' },
    ch14_r1c: { id:'ch14_r1c', type:'narrative', chapter:14, round:1, title:'保护者', leftPage:{ speaker:'何塞·阿尔卡蒂奥第二', speakerColor:'#1a3a4a', paragraphs:['你劝他们走——不是为了逃避，是为了活着。有些人听了——有些人没有。你知道留下来的那些人可能会死——但你没办法替他们做决定。你只是把他们每一个人的名字记在心里——加入那三千个名字之中。']}, choices:null, nextScene:'ch14_r1_settlement' },
    ch14_r1_settlement: { id:'ch14_r1_settlement', type:'settlement', chapter:14, round:1, title:'第一轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['香蕉公司彻底撤走了——留下的是废墟、骷髅和被从官方记录里抹去的名字。但有些人还记得——因为有一个布恩迪亚为他们记住了。']}, settlement:{ summary:'第一轮完成。你帮助了最后的工人。', nextScene:'ch14_r2_choice', nextLabel:'进入第二轮' } },

    ch14_r2_choice: { id:'ch14_r2_choice', type:'choice', chapter:14, round:2, title:'第二轮选择 · 记忆的孤独', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['马孔多的人不再谈论香蕉公司——也不再谈论那三千人。不是因为他们忘记了——是因为他们累了。他们想要生活继续——哪怕继续意味着假装什么都没发生。','只有你还在说。你在广场上、在市场上、在教堂门口——告诉大家真相。他们绕着你走——不是他们恨你，是他们害怕：如果承认你对了，他们这些年沉默的罪也就坐实了。'], transition:'你选择——' }, choices:[
      { id:'ch14_r2_a', label:'继续讲述——哪怕被人当成疯子', description:'真相比你自己的名声更重要。继续讲——哪怕全世界都说你疯了。', nextScene:'ch14_r2a', effects:{ tags:['不屈的见证者'], memory:null, fate: 2, bond: 0 } },
      { id:'ch14_r2_b', label:'退一步——改用写作', description:'说话没人听——那就写。写下真相，藏起来，留给后人。语言的寿命比人长。', nextScene:'ch14_r2b', effects:{ tags:['转向文字者'], memory:'被封存的真相', fate: 0, bond: -1 } },
      { id:'ch14_r2_c', label:'放弃——接受遗忘', description:'你累了。也许遗忘是人类学会的最痛但也是最有用的技能。放弃讲述——让风把它带走。', nextScene:'ch14_r2c', effects:{ tags:['疲倦的放弃者'], memory:null, fate: -1, bond: 1 } }
    ], settlement:'ch14_r2_settlement' },
    ch14_r2a: { id:'ch14_r2a', type:'narrative', chapter:14, round:2, title:'不屈的见证者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你继续在广场上讲述。孩子们朝你扔石头——大人把他们拉走了。你不怪那些孩子——他们是被教成这样的。但有一天——一个男孩没走。他问你："你说的是真的吗？""是的。""那你为什么还在这里？你不怕吗？""怕——但更怕没人记得。"']}, choices:null, nextScene:'ch14_r2_settlement' },
    ch14_r2b: { id:'ch14_r2b', type:'narrative', chapter:14, round:2, title:'转向文字者', leftPage:{ speaker:'何塞·阿尔卡蒂奥第二', speakerColor:'#1a3a4a', paragraphs:['你不再在广场上喊了。你走进梅尔基亚德斯的旧房间——那个时间不会流逝的地方——开始写。你写下了一切：日期，数字，名字，每一个你还记得的细节。然后把纸藏在书架最深处。你不知道谁会读到——但你知道它们会在这里等着。']}, choices:null, nextScene:'ch14_r2_settlement' },
    ch14_r2c: { id:'ch14_r2c', type:'narrative', chapter:14, round:2, title:'疲倦的放弃者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你停止了讲述。不是因为你不相信了——是因为你发现：真相和相信之间隔着一条很宽的河。你可以游过去——但河对岸已经没有人了。你坐在那间古老的房间里——让时间轻轻地把你和世界之间的线剪断。']}, choices:null, nextScene:'ch14_r2_settlement' },
    ch14_r2_settlement: { id:'ch14_r2_settlement', type:'settlement', chapter:14, round:2, title:'第二轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['真相在马孔多的土壤里——像一颗被踩得太深的种子。它还在——但没有人浇水。只有一个人还在浇水——哪怕别人说他在浇一块石头。']}, settlement:{ summary:'第二轮完成。你选择了如何与遗忘抗争。', nextScene:'ch14_r3_choice', nextLabel:'进入第三轮' } },

    ch14_r3_choice: { id:'ch14_r3_choice', type:'choice', chapter:14, round:3, title:'第三轮选择 · 秘密继承人', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['一个婴儿被送到了布恩迪亚家门口。没有人知道是谁送的——但你知道。这是梅梅的孩子——马乌里肖·巴比伦的儿子。费尔南达把他藏了起来——不让他知道自己的出身。','你看见这个男孩在走廊里爬——他的眼睛像梅梅，嘴巴像马乌里肖。但他不会知道自己是谁——费尔南达会确保这一点。她把他锁在房子里——不让他上学，不让他和其他孩子玩。她说他是"捡来的"。'], transition:'你选择——' }, choices:[
      { id:'ch14_r3_a', label:'告诉他真相——将来', description:'现在他太小了。但等他长大了——你要告诉他他是谁。他是布恩迪亚——不是捡来的。', nextScene:'ch14_r3a', effects:{ tags:['真相的守护者'], memory:null, fate: 1, bond: 1 } },
      { id:'ch14_r3_b', label:'服从费尔南达——保持沉默', description:'费尔南达有她的理由——也许不知道比被遗弃更幸福。让他安静长大——没有标签和恩怨。', nextScene:'ch14_r3b', effects:{ tags:['沉默的顺从者'], memory:null, fate: -1, bond: 0 } },
      { id:'ch14_r3_c', label:'偷偷给他留下线索', description:'你不能直接说——但你可以留一些东西。一封信，一件物——让他在你的记事中发现自己的真相。', nextScene:'ch14_r3c', effects:{ tags:['线索的埋藏者'], memory:'留给男孩的信', fate: 0, bond: 2 } }
    ], settlement:'ch14_r3_settlement' },
    ch14_r3a: { id:'ch14_r3a', type:'narrative', chapter:14, round:3, title:'真相的守护者', leftPage:{ speaker:'何塞·阿尔卡蒂奥第二', speakerColor:'#1a3a4a', paragraphs:['你看着他在走廊里长大——从爬变成走，从走变成跑。你在心里记下了所有要告诉他的话——关于他的母亲，关于黄蝴蝶，关于他为什么不应该相信费尔南达说他是"捡来的"。你会等到他足够大的那天——然后让他知道自己真正的名字。']}, choices:null, nextScene:'ch14_r3_settlement' },
    ch14_r3b: { id:'ch14_r3b', type:'narrative', chapter:14, round:3, title:'沉默的顺从者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你没有说。你看着男孩在费尔南达的谎言里长大——他不知道自己是谁，不知道自己的父母，不知道这个家的历史。但你看着他——你在他眼睛里看见了一样东西：好奇。他会自己去找到答案的。因为他是布恩迪亚——布恩迪亚家的人最后总能找到真相。']}, choices:null, nextScene:'ch14_r3_settlement' },
    ch14_r3c: { id:'ch14_r3c', type:'narrative', chapter:14, round:3, title:'线索的埋藏者', leftPage:{ speaker:'何塞·阿尔卡蒂奥第二', speakerColor:'#1a3a4a', paragraphs:['你写了一封信——封好，放在梅尔基亚德斯的书架里。信上写着：你的母亲叫梅梅，你的父亲叫马乌里肖·巴比伦。你不是捡来的——你是被藏起来的。你不知道男孩会不会找到这封信——但你把它放在了他终有一天会去的地方。因为布恩迪亚家的每个男孩都会被那间古老的房间吸引。']}, choices:null, nextScene:'ch14_r3_settlement' },
    ch14_r3_settlement: { id:'ch14_r3_settlement', type:'settlement', chapter:14, round:3, title:'第三轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['那个男孩在布恩迪亚家的走廊里长大——被锁着，被藏着，被说成"捡来的"。但他的血脉是真的——总有一天他会发现。而那一天——费尔南达不会在场。']}, settlement:{ summary:'第三轮完成。你决定了梅梅儿子的命运。', nextScene:'ch14_r4_choice', nextLabel:'进入第四轮' } },

    ch14_r4_choice: { id:'ch14_r4_choice', type:'choice', chapter:14, round:4, title:'第四轮选择 · 官方记忆的抹除', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['来了一队政府官员——带着笔和墨，带着新的教科书。他们逐家逐户地"更正"历史。香蕉公司？从来没有雇过超过一百人。屠杀？纯粹是工人之间的小冲突——没有死人。','你是何塞·阿尔卡蒂奥第二。你是唯一还剩下来的见证者。你被叫去"纠正"——被文明地威胁：如果你再说话，你会被送进精神病院。'], transition:'你选择——' }, choices:[
      { id:'ch14_r4_a', label:'拒绝签字——继续抗争', description:'不签。让他们把你送去精神病院——那里的墙挡不住真话。', nextScene:'ch14_r4a', effects:{ tags:['不屈服者'], memory:null, fate: 2, bond: 0 } },
      { id:'ch14_r4_b', label:'假意配合——暗地记录', description:'表面签字——但他们不注意的时候，把真相藏在不会被发现的地方。', nextScene:'ch14_r4b', effects:{ tags:['地下记录者'], memory:null, fate: 1, bond: 0 } },
      { id:'ch14_r4_c', label:'签字——但留下你的故事在别处', description:'在官方文件上签字——但在此之前，你已经把真实留在了梅尔基亚德斯的房间里。让他们擦掉纸上的字——擦不掉房间里的。', nextScene:'ch14_r4c', effects:{ tags:['双面者'], memory:null, fate: 0, bond: -1 } }
    ], settlement:'ch14_r4_settlement' },
    ch14_r4a: { id:'ch14_r4a', type:'narrative', chapter:14, round:4, title:'不屈服者', leftPage:{ speaker:'何塞·阿尔卡蒂奥第二', speakerColor:'#1a3a4a', paragraphs:['你拒绝了。他们派人来——你站在梅尔基亚德斯的房间里。他们不敢进来——那间房间有某种让他们不安的东西。你在门口说："我不会签字。如果你要带我走——你现在就带我走。"他们没有带——他们走开了。不是因为怕你，是因为怕那间房间——怕它里面装着的所有沉默。']}, choices:null, nextScene:'ch14_r4_settlement' },
    ch14_r4b: { id:'ch14_r4b', type:'narrative', chapter:14, round:4, title:'地下记录者', leftPage:{ speaker:'何塞·阿尔卡蒂奥第二', speakerColor:'#1a3a4a', paragraphs:['你签了字——但当天夜里，你用碳笔在羊皮卷的边缘写满了日记：真实的数字，真实的名字，真实的日期。这些羊皮卷不会说谎——因为它们是用一种只有这个家族的最终继承者才能破译的语言写的。']}, choices:null, nextScene:'ch14_r4_settlement' },
    ch14_r4c: { id:'ch14_r4c', type:'narrative', chapter:14, round:4, title:'双面者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你签字了。墨水在纸上干得很快——比你想象的快。走出办公室的时候，天正下着小雨——不是当年那种雨，是很普通的、会停的雨。你感觉到了轻松——不是因为放弃了真相，是因为把它放在了比法律更安全的地方。']}, choices:null, nextScene:'ch14_r4_settlement' },
    ch14_r4_settlement: { id:'ch14_r4_settlement', type:'settlement', chapter:14, round:4, title:'第四轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['官方记录被"纠正"了。教科书上写着马孔多从未有过香蕉公司。但有一间房间——时间不会流逝的房间里——真相还在这里。它在等着读它的人。']}, settlement:{ summary:'第四轮完成。你面对了官方对记忆的抹除。', nextScene:'ch14_r5_choice', nextLabel:'进入最终轮' } },

    ch14_r5_choice: { id:'ch14_r5_choice', type:'choice', chapter:14, round:5, title:'第五轮选择 · 告别梅尔基亚德斯的房间', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你很老了。你坐在梅尔基亚德斯的房间里——这间时间不会流逝的房间。窗外马孔多正在缓慢地腐烂——墙壁上爬满了苔藓，栗树的叶子掉光了，走廊里已经很久没有人走动了。','但你不在了——你还在这里。你是最后的见证者。你把手放在羊皮卷上——它们很冷，像冰块。你感觉到了什么——一种召唤。像是梅尔基亚德斯在说些什么，用一种你不需要学就已经懂了的语言。'], transition:'你选择——' }, choices:[
      { id:'ch14_r5_a', label:'留在房间里——直到最后一刻', description:'这间房间保护了你一辈子。在这里闭上眼睛——让羊皮卷做你的裹尸布。', nextScene:'ch14_r5a', effects:{ tags:['忠诚的守护者'], memory:'房间里的最后一眼', fate: -1, bond: 2 } },
      { id:'ch14_r5_b', label:'走出去——最后一次讲述', description:'在生命的尽头，离开这间房间——到广场上去，最后一次告诉人们真相。', nextScene:'ch14_r5b', effects:{ tags:['最后的呐喊者'], memory:null, fate: 2, bond: -1 } },
      { id:'ch14_r5_c', label:'把钥匙交给那个男孩', description:'你应该让梅梅的儿子继承这间房间。把钥匙给他——让他自己找到这里。', nextScene:'ch14_r5c', effects:{ tags:['传递者'], memory:'传递的钥匙', fate: 0, bond: 2 } },
      { id:'ch14_r5_d', label:'你记得火车往海边开了——去追那两百节车厢', description:'火车是往海边开的。两百节车厢——装的是人。你知道他们去了哪里——也许你追不上火车，但你可以追查真相。', nextScene:'ch14_r5b', requiredClue: 'train_direction', effects:{ tags:['追火车的人'], memory:null, fate: 2, bond: -1 } },
      { id:'ch14_r5_e', label:'你一个人锁上门——有些见证只能独自完成', description:'不需要观众，不需要理解。你一个人坐在梅尔基亚德斯的房间里——只有你和真相。有时候最深的见证需要最少的陪伴。', nextScene:'ch14_r5a', requiredBond: { max: 2 }, effects:{ tags:['独自见证的人'], memory:null, fate: 1, bond: -1 } }
    ], settlement:'ch14_r5_settlement' },
    ch14_r5a: { id:'ch14_r5a', type:'narrative', chapter:14, round:5, title:'忠诚的守护者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你坐在那张旧椅子上。窗外的光慢慢暗下来——不是日落，是更缓慢的、更深的暗。你把羊皮卷抱在怀里——它们吸收了你的体温。你想：你已经做了你能做的一切。真相还在——只是换了一个容器。它不再在你的声音里——它在这些羊皮卷里。']}, choices:null, nextScene:'ch14_r5_settlement' },
    ch14_r5b: { id:'ch14_r5b', type:'narrative', chapter:14, round:5, title:'最后的呐喊者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你推开那扇几十年没打开过的门，走出房间。你的脚步不快——但每步都稳。你穿过走廊——没有人，没有声音。你推开大门——马孔多的街道在暮色里是空的。你站在广场中央——对着空无一人的广场说出了那三千人的故事。没有人听到——但你说完了。然后你坐在广场的长凳上——闭上了眼睛。']}, choices:null, nextScene:'ch14_r5_settlement' },
    ch14_r5c: { id:'ch14_r5c', type:'narrative', chapter:14, round:5, title:'传递者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你找到那个男孩——他正在走廊的阴影里读着什么。你在他手里放了一把钥匙。"这是哪里的？""你会知道的。"他看了你一眼——他的眼睛像梅梅。你转身走了——不是离开，是退场。你知道那间房间会等来它的下一个读者——因为羊皮卷从来不等任何人，但它会在每个布恩迪亚最需要的时候主动打开。']}, choices:null, nextScene:'ch14_r5_settlement' },
    ch14_r5_settlement: { id:'ch14_r5_settlement', type:'settlement', chapter:14, round:5, title:'第五轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['何塞·阿尔卡蒂奥第二走了。他是最后一个亲眼见过那场屠杀的人。现在真相被锁在羊皮卷里——或锁在一个男孩掌心中的钥匙里。','风从梅尔基亚德斯的房间吹出来——带着墨水的气味。一个新的布恩迪亚正在走廊里长大。他不知道自己将解开什么——但他会知道的。']}, settlement:{ summary:'最终轮完成。最后的见证者离开了——但真相留了下来。', nextScene:'chapter14_end', nextLabel:'查看章末结算' } },
    chapter14_end: { id:'chapter14_end', type:'settlement', chapter:14, round:6, title:'第十四章 · 章末结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['第十四章完结。香蕉公司的记忆在马孔多被正式抹去——但在一间时间不会流逝的房间里，羊皮卷仍在低声讲述着一切。','那个男孩还不知道——但他即将成为破解它们的人。']}, settlement:{ summary:'第十四章完结。官方历史被篡改——但真相在羊皮卷里安然无恙。', isChapterEnd:true, nextLabel:'进入第十五章 · 私生子的出现', quadrantNarratives: { guardian: '香蕉公司走了——留下生锈的铁轨和空荡荡的工人宿舍。你记住了。', prophet: '你记录了香蕉公司的一切——从此没有人能说它没发生过。历史在纸上比在土地上更持久。', follower: '你没有选择阵营——你选择了人。不是工人也不是公司——是站在两者之间的那些具体的人。', rebel: '你拒绝遗忘——即使官方公告说"什么都没发生"。你知道什么发生了。你说出来了。' } } }
  },
  memories: {
    '被封存的真相': { id:'被封存的真相', title:'被封存的真相', description:'你不再在广场上喊——你走进梅尔基亚德斯的房间，写下了一切。藏在书架最深处。', chapter:14 },
    '留给男孩的信': { id:'留给男孩的信', title:'留给男孩的信', description:'你在书架里藏了一封信——告诉他他的父母是谁。布恩迪亚家的每个男孩都会被那间房间吸引。', chapter:14 },
    '房间里的最后一眼': { id:'房间里的最后一眼', title:'房间里的最后一眼', description:'你把羊皮卷抱在怀里——它们吸收了你的体温。真相不再在你的声音里——它在这卷纸里。', chapter:14 },
    '传递的钥匙': { id:'传递的钥匙', title:'传递的钥匙', description:'你把钥匙放在男孩手里。"这是哪里的？""你会知道的。"他眼睛像梅梅。', chapter:14 }
  },
  familyMembers: []
});

/* ================================================================
   第十五章 · 梅梅之死、私生子的出现
   ================================================================ */
registerChapter({
  id: 'chapter15', title: '第十五章 · 梅梅之死、私生子的出现',
  initialScene: 'ch15_opening', possessedCharacter: '奥雷里亚诺（私生子）', chapterNumber: 15,
  preview: '<p>第十六章 · 加斯通到来、阿玛兰妲·乌尔苏拉回归</p>',
  nextLabel: '进入第十六章 · 阿玛兰妲·乌尔苏拉回归',
  scenes: {
    ch15_opening: { id:'ch15_opening', type:'narrative', chapter:15, round:0, title:'包裹', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['费尔南达·德尔·卡皮奥站在厨房里——厨房已经不是乌尔苏拉时代的模样了。墙壁上覆着灰，灶台冰冷。','她听见了敲门声——门口放着一个篮子。篮子里有一个婴儿——裹在一条旧披肩里。篮子上没有纸条——但婴儿的眼睛太像梅梅了，不需要纸条。费尔南达抱起他——不是因为爱，是因为不能让邻居看见。','这个婴儿被锁在布恩迪亚家的房子里长大——费尔南达说他是"捡来的"——一个私生子，一个不能被承认的布恩迪亚。他不知道自己是谁——直到有一天他发现了一间时间不会流逝的房间。'], clues: [{ triggerText: '私生子', itemId: 'bastard_name', narrative: '一张小纸条上写着一个名字——墨水很新。这个孩子从出生就被藏起来了。但他的名字已经写在了羊皮卷上——梅尔基亚德斯没有忘记任何一个人。', unlocksIn: ['chapter17'] }] }, choices:null, nextScene:'ch15_r1_choice' },

    ch15_r1_choice: { id:'ch15_r1_choice', type:'choice', chapter:15, round:1, title:'第一轮选择 · 被锁住的童年', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你在这所房子里长大——但你从来没有出过门。费尔南达说外面很危险——但你偷看窗外的时候，看见孩子们在街上奔跑。你不明白：为什么他们可以，你不行？','你在走廊里独自玩耍——你发现了很多奇怪的东西：栗树下被绑着的老人，厨房里揉面的百岁盲女，还有一间奇怪的房间——它的门总是锁着。'], transition:'你选择——' }, choices:[
      { id:'ch15_r1_a', label:'顺从——在房子里寻找秘密', description:'你不出门——但你在房子里探索每一个角落，每一本旧书，每一个锁着的房间。', nextScene:'ch15_r1a', effects:{ tags:['内向的探索者'], memory:null, fate: -1, bond: 2 } },
      { id:'ch15_r1_b', label:'反抗——偷跑出去', description:'费尔南达不让你出去——但你是布恩迪亚。翻墙！去街上看看真正的世界。', nextScene:'ch15_r1b', effects:{ tags:['私自出逃者'], memory:null, fate: 1, bond: -1 } },
      { id:'ch15_r1_c', label:'向费尔南达提问——我是谁', description:'你不想偷跑，不想到处寻找——你想直接问她。"我是谁？为什么我不能出去？"', nextScene:'ch15_r1c', effects:{ tags:['质疑者'], memory:null, fate: 0, bond: 1 } }
    ], settlement:'ch15_r1_settlement' },
    ch15_r1a: { id:'ch15_r1a', type:'narrative', chapter:15, round:1, title:'内向的探索者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你在房子里找到了很多门——有些锁着，有些没有。你发现了一间旧实验室——里面有你曾曾祖父的星盘。你发现了一口箱子——里面装满了羊皮纸。你不认识上面的字——但你每天都会来看它们。它们在你眼里不是文字——是密码。有朝一日你会解开它们。']}, choices:null, nextScene:'ch15_r1_settlement' },
    ch15_r1b: { id:'ch15_r1b', type:'narrative', chapter:15, round:1, title:'私自出逃者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你翻过墙——摔了一跤，膝盖破了皮。但外面——天啊，外面好大。你沿着街道跑——没有人认识你。你走进了一家商店——第一次知道世界上有需要用钱交换的东西。费尔南达后来用棍子打了你——但你不在乎。因为你知道墙外面有世界。']}, choices:null, nextScene:'ch15_r1_settlement' },
    ch15_r1c: { id:'ch15_r1c', type:'narrative', chapter:15, round:1, title:'质疑者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你站在费尔南达面前——直视她。"我是谁？"她的脸僵住了。"你是捡来的。""谁捡的？""我。""从哪捡的？""门口。"你不相信——但你知道再问下去她也不会说了。你退后一步——不是放弃，是开始。你会自己去找到答案。']}, choices:null, nextScene:'ch15_r1_settlement' },
    ch15_r1_settlement: { id:'ch15_r1_settlement', type:'settlement', chapter:15, round:1, title:'第一轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['这个男孩在布恩迪亚家的阴影里长大——他不认识世界，不认识自己，但他在慢慢拼凑拼图。而那间锁着的房间——正在静静地等他。']}, settlement:{ summary:'第一轮完成。你在被囚禁的童年中选择自己的道路。', nextScene:'ch15_r2_choice', nextLabel:'进入第二轮' } },

    ch15_r2_choice: { id:'ch15_r2_choice', type:'choice', chapter:15, round:2, title:'第二轮选择 · 发现羊皮卷', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你发现那扇门没有锁。也许是一直没锁——也许是你长到足够大时它自己开了。你走进去——这间房间不像家里的其他地方。这里没有灰尘——没有霉斑——时间在这里不流动。','书架上放满了书——古老的、用一种你不认识的语言写的书。桌上有一叠羊皮纸——上面的字迹很密，每一个字符都像在微微颤动。你不认识这种语言——但你被它吸引。它像磁铁一样拉着你。'], transition:'你选择——' }, choices:[
      { id:'ch15_r2_a', label:'每天来——尝试破译', description:'你不需要老师——羊皮卷本身就是老师。每天来这里，一个字一个字地学。', nextScene:'ch15_r2a', effects:{ tags:['自学者'], memory:null, fate: -1, bond: 2 } },
      { id:'ch15_r2_b', label:'找何塞·阿尔卡蒂奥第二帮助', description:'他是唯一在这间房间里待过的人。去问他——这些羊皮卷是什么意思？', nextScene:'ch15_r2b', effects:{ tags:['求助者'], memory:null, fate: 1, bond: -1 } },
      { id:'ch15_r2_c', label:'把羊皮卷放回原处——时候未到', description:'你感觉自己还没准备好。这些字看起来太古老、太重要了——不该由你来碰。再等等。', nextScene:'ch15_r2c', effects:{ tags:['敬畏者'], memory:null, fate: 0, bond: 1 } }
    ], settlement:'ch15_r2_settlement' },
    ch15_r2a: { id:'ch15_r2a', type:'narrative', chapter:15, round:2, title:'自学者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你开始每天来这间房间。你找到了梅尔基亚德斯留下的字典——他用梵文、西语和另一种更古老的语言对照写的。你一个字一个字地学——像在破解世界上最复杂的密码。因为这就是世界上最复杂的密码——布恩迪亚家的历史，被写在一种只有布恩迪亚才能读懂的语言里。']}, choices:null, nextScene:'ch15_r2_settlement' },
    ch15_r2b: { id:'ch15_r2b', type:'narrative', chapter:15, round:2, title:'求助者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你找到了何塞·阿尔卡蒂奥第二——他已经很老了，大部分时间都在自言自语。但你问他羊皮卷的事——他停住了。他看了你很久——然后说："那卷纸上写的是你——和这个家的全部。读下去。不用问我——我什么也不知道。"他在说谎——你知道。但他不想替你走这条路。']}, choices:null, nextScene:'ch15_r2_settlement' },
    ch15_r2c: { id:'ch15_r2c', type:'narrative', chapter:15, round:2, title:'敬畏者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你把羊皮卷放回了原处。但你每天都会来这间房间——不是来读，是来闻那个气味。你坐在梅尔基亚德斯坐过的椅子上——看着窗外正在腐烂的马孔多。你不急。你知道有朝一日你会打开那些纸。但不是今天。']}, choices:null, nextScene:'ch15_r2_settlement' },
    ch15_r2_settlement: { id:'ch15_r2_settlement', type:'settlement', chapter:15, round:2, title:'第二轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['羊皮卷在等——它不催。它知道总有一天，这个家族的最后一个男孩会坐下来把它读完。它等了那么久了——再等几年不算什么。']}, settlement:{ summary:'第二轮完成。你发现了羊皮卷——命运的钥匙。', nextScene:'ch15_r3_choice', nextLabel:'进入第三轮' } },

    ch15_r3_choice: { id:'ch15_r3_choice', type:'choice', chapter:15, round:3, title:'第三轮选择 · 费尔南达的衰老', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['费尔南达老了。她的声音不再那样咄咄逼人——她开始忘记东西。她有时叫你"陌生人"，有时叫你"梅梅"。她的眼睛不再看人——她只是盯着窗外——窗帘永远拉着。','你看着她——这个把你锁了一辈子的女人。你现在比她还高了——你可以轻易推开她走出那扇门。但你没有——不是因为怕她，是因为某种更复杂的东西：她喂养了你，尽管是以她不懂的方式。'], transition:'你选择——' }, choices:[
      { id:'ch15_r3_a', label:'原谅她——照顾她的晚年', description:'她做了她以为正确的事。现在她老了——她需要有人帮她端水、吃药、换床单。', nextScene:'ch15_r3a', effects:{ tags:['宽恕者'], memory:null, fate: -1, bond: 2 } },
      { id:'ch15_r3_b', label:'离开她——找回自己的生活', description:'你不欠她的。你被她锁了太多年——现在该轮到你了。走出这所房子——去世界看看。', nextScene:'ch15_r3b', effects:{ tags:['解放者'], memory:null, fate: 1, bond: -1} },
      { id:'ch15_r3_c', label:'留下来——但不再顺从', description:'你照顾她——以你自己的方式。不是仆人，是监护者。你来决定规则——不再是她。', nextScene:'ch15_r3c', effects:{ tags:['成熟的监护者'], memory:null, fate: 1, bond: 0 } },
      { id:'ch15_r3_d', label:'原谅她——你终于理解了她那些规矩背后是什么', description:'费尔南达的规矩曾经让你窒息。但现在你看见了：她不是在控制——她是在害怕。一个外来者在这个疯狂家族里唯一能抓住的就是规矩。原谅不是忘记——是理解。', nextScene:'ch15_r3a', requiredBond: { min: 4 }, effects:{ tags:['跨越规矩的人'], memory:null, fate: -1, bond: 2 } }
    ], settlement:'ch15_r3_settlement' },
    ch15_r3a: { id:'ch15_r3a', type:'narrative', chapter:15, round:3, title:'宽恕者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你帮她端水，喂她吃药。她不说话——但她也不再叫错你的名字。有一天她看着你——说了一声"谢谢"。声音很轻——但你听到了。这两个字在她的字典里等于一整页的忏悔。']}, choices:null, nextScene:'ch15_r3_settlement' },
    ch15_r3b: { id:'ch15_r3b', type:'narrative', chapter:15, round:3, title:'解放者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你推开大门。阳光刺眼——但你走出来了。你在马孔多的街道上走——这个一直被锁着的人终于自由了。但自由是什么——你不知道。你走到河边——看着水流动。它没有告诉你答案——但它告诉你：你可以继续走了。']}, choices:null, nextScene:'ch15_r3_settlement' },
    ch15_r3c: { id:'ch15_r3c', type:'narrative', chapter:15, round:3, title:'成熟的监护者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你留在房子里——但你是你自己的主人了。你拉开窗帘——让阳光涌进来。费尔南达抗议——但你不再听她的了。你给她端水——但你也给自己倒了一杯。她不习惯——但她学会了不说。']}, choices:null, nextScene:'ch15_r3_settlement' },
    ch15_r3_settlement: { id:'ch15_r3_settlement', type:'settlement', chapter:15, round:3, title:'第三轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['费尔南达老了——权力在转移。这个曾经统治布恩迪亚家的铁女人正在慢慢被时间磨平。而那个她试图锁住的孩子——正在变成房子的主人。']}, settlement:{ summary:'第三轮完成。你与费尔南达的关系到达了转折点。', nextScene:'ch15_r4_choice', nextLabel:'进入最终轮' } },

    ch15_r4_choice: { id:'ch15_r4_choice', type:'choice', chapter:15, round:4, title:'第四轮选择 · 你是谁', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你破译了羊皮卷的第一行字。你的手在抖——不是因为难，是因为你读懂了。那行字写的是：","家族的第一个人被捆在一棵树上，最后一个人正被蚂蚁吃掉。","你停下笔——你需要想一想。这行字说的是谁？被绑在树上的是栗树下的老人。被蚂蚁吃掉的是——你不敢往下想。','但你还需要知道：你是谁。你在这卷羊皮纸里——是什么角色？是旁观者？是继承者？是最后的布恩迪亚？'], transition:'你选择——' }, choices:[
      { id:'ch15_r4_a', label:'继续翻译——快速寻找答案', description:'不能停下——继续读。用最快的速度破译羊皮卷——答案就在其中。', nextScene:'ch15_r4a', effects:{ tags:['急切者'], memory:null, fate: 2, bond: -1 } },
      { id:'ch15_r4_b', label:'慢慢来——怕读到结局', description:'你预感结局不会美好。慢慢读——让每一个字都被消化掉，不要一次太快地走到终点。', nextScene:'ch15_r4b', effects:{ tags:['谨慎者'], memory:null, fate: -1, bond: 0 } },
      { id:'ch15_r4_c', label:'停下来——去院子里走走', description:'你感到窒息。放下笔——走出去，到栗树下呼吸一下空气。你不需要今天就找到答案。', nextScene:'ch15_r4c', effects:{ tags:['暂停者'], memory:null, fate: 0, bond: 1} },
      { id:'ch15_r4_d', label:'你见过蝴蝶的翅膀——在翻译中放慢速度', description:'黄蝴蝶的翅膀还在地上轻轻颤动。你忽然明白了——梅尔基亚德斯不是在催促你。他是在等你。等你自己准备好——像蝴蝶等待翅膀变干。', nextScene:'ch15_r4b', requiredClue: 'butterfly_wing', effects:{ tags:['蝴蝶的读者'], memory:null, fate: -1, bond: 1 } },
      { id:'ch15_r4_e', label:'你记得栗树上的绳结——用同样的方法标记羊皮卷', description:'何塞·阿尔卡蒂奥·布恩迪亚在栗树上留下绳结——不是捆绑，是标记。你也用绳结标记羊皮卷的关键页——让后来的人知道在哪里停下来。', nextScene:'ch15_r4b', requiredMemory: '栗树下的绳结', effects:{ tags:['用绳结标记的人'], memory:null, fate: 0, bond: 1 } }
    ], settlement:'ch15_r4_settlement' },
    ch15_r4a: { id:'ch15_r4a', type:'narrative', chapter:15, round:4, title:'急切者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你日夜不停地翻译——忘记吃饭，忘记睡觉。羊皮卷在你眼中不再是文字——它变成了一幅幅画面：你看见了磁铁，看见了冰块，看见了蕾梅黛丝升天，看见了栗树下的老人。然后你看见了自己——你是羊皮卷中预言的那个人。你在读这本书的时候——这本书也正在读完你。']}, choices:null, nextScene:'ch15_r4_settlement' },
    ch15_r4b: { id:'ch15_r4b', type:'narrative', chapter:15, round:4, title:'谨慎者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你每天只翻译一小段。不是因为懒——是因为每个字都太沉重。你读到了一个女人晾床单时被风吹起——你知道那是美人儿蕾梅黛丝。你读到了三千人被装在火车上运走——你知道那是何塞·阿尔卡蒂奥第二见过的。每个字都在和你对话——你不是在阅读历史，你是在寻找自己。']}, choices:null, nextScene:'ch15_r4_settlement' },
    ch15_r4c: { id:'ch15_r4c', type:'narrative', chapter:15, round:4, title:'暂停者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你放下笔——走出房间。栗树下老人还在画圆圈。你坐在他身边——他不知道你是谁，不知道你是他的后代。但他抬起头——他浑浊的眼睛在你脸上停了一下，然后他笑了。你不知道他在笑什么——但你也笑了。有些答案不需要翻译。']}, choices:null, nextScene:'ch15_r4_settlement' },
    ch15_r4_settlement: { id:'ch15_r4_settlement', type:'settlement', chapter:15, round:4, title:'第四轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['羊皮卷被翻译了第一页——第二页——越来越快的东西被揭露出来。这个男孩开始知道他是布恩迪亚——不是一个"捡来的"孩子。他正在接近书的末尾——虽然他还不知道末尾写的是什么。']}, settlement:{ summary:'第四轮完成。羊皮卷的秘密被逐步揭开。', nextScene:'chapter15_end', nextLabel:'查看章末结算' } },
    chapter15_end: { id:'chapter15_end', type:'settlement', chapter:15, round:5, title:'第十五章 · 章末结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['第十五章完结。私生子奥雷里亚诺破解了羊皮卷的第一部分——他知道了自己是谁，知道了这所房子的故事。','但有一件事他还没有读到——关于他的命运。羊皮卷的最后几页——正等着他。']}, settlement:{ summary:'第十五章完结。你发现了身份——但真正的秘密还在后面。', isChapterEnd:true, nextLabel:'进入第十六章 · 阿玛兰妲·乌尔苏拉回归', quadrantNarratives: { guardian: '梅梅死了——但她的孩子还活着。你接过那个婴儿的时候，接过了整个家族下一个百年的重量。', prophet: '修道院的墙隔开了母女。你看见了这个模式——在每一代重复的同一个故事。', follower: '你去了修道院——在门外站了很久。没有进去。有些门进去会碎——你选择留在门外，完整地记住她。', rebel: '你拒绝接受"这就是命"。你把婴儿抱回来——不是因为你相信能改变什么，是因为不能什么都不做。' } } }
  },
  memories: {},
  familyMembers: [
    { name:'奥雷里亚诺（私生子）', relation:'梅梅与马乌里肖之子', generation:6, isCurrent:true, description:'被费尔南达藏在布恩迪亚家的男孩。他的任务是破解羊皮卷——而他本身就是羊皮卷的最后一页。' }
  ]
});

/* ================================================================
   第十六章 · 加斯通到来、阿玛兰妲·乌尔苏拉回归
   ================================================================ */
registerChapter({
  id: 'chapter16', title: '第十六章 · 加斯通到来、阿玛兰妲·乌尔苏拉回归',
  initialScene: 'ch16_opening', possessedCharacter: '奥雷里亚诺', chapterNumber: 16,
  preview: '<p>第十七章 · 近亲之爱、羊皮卷破译</p><p style="margin-top:8px;">你将附身于奥雷里亚诺，</p><p>在爱与预言之间做出最终的抉择。</p>',
  nextLabel: '进入第十七章 · 近亲之爱',
  scenes: {
    ch16_opening: { id:'ch16_opening', type:'narrative', chapter:16, round:0, title:'归来者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['马孔多在下雨。它已经下了很多年，还将继续下很多年。街道上积着绿色的水洼，墙壁上爬满苔藓。','然后门推开了。一个女人站在门口——穿着欧洲的时装，眼睛里带着布鲁塞尔的光。她是阿玛兰妲·乌尔苏拉——从欧洲回来的布恩迪亚。她身后跟着一个男人——加斯通，她的丈夫。','她看着这所正在腐烂的房子——看着走廊里那个正在读羊皮卷的年轻人。她的心跳了一下——但她还不知道为什么。'], clues: [{ triggerText: '从欧洲回来的', itemId: 'return_ticket', narrative: '她的行李箱夹层里有一张船票——从布鲁塞尔到马孔多。票根还在，边缘已经磨毛了。单程票——她从来没有打算回去。在买下这张票的那个下午，她已经在心里和欧洲道了别——只是她当时还不知道。', unlocksIn: ['chapter17'] }] }, choices:null, nextScene:'ch16_r1_choice' },
    ch16_r1_choice: { id:'ch16_r1_choice', type:'choice', chapter:16, round:1, title:'第一轮选择 · 初见', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['她看着你——你看着羊皮卷。她走进那间时间不会流逝的房间——"你是谁？"你抬头——她的眼睛像另一个布恩迪亚，但你不知道像谁。','加斯通站在门口——他看起来不太确定自己为什么在这里。阿玛兰妲·乌尔苏拉说要回来重建家园——但他看见的是一片废墟。','但你不关心加斯通。你关心的是：这个女人的眼睛——为什么你在羊皮卷里读到过它们？'], transition:'你选择——' }, choices:[
      { id:'ch16_r1_a', label:'告诉她羊皮卷的秘密', description:'她是布恩迪亚——她有权知道。把你正在翻译的事告诉她。', nextScene:'ch16_r1a', effects:{ tags:['坦诚的守护者'], memory:null, fate: -1, bond: 2 } },
      { id:'ch16_r1_b', label:'保持距离——观察她', description:'你不了解她。让她先证明自己——然后再决定可以告诉她多少。', nextScene:'ch16_r1b', effects:{ tags:['谨慎者'], memory:null, fate: 1, bond: -1 } },
      { id:'ch16_r1_c', label:'欢迎她——帮忙重建', description:'她回来修复这所房子——你可以帮忙。在共同劳作中慢慢认识彼此。', nextScene:'ch16_r1c', effects:{ tags:['合作者'], memory:null, fate: 0, bond: 0 } }
    ], settlement:'ch16_r1_settlement' },
    ch16_r1a: { id:'ch16_r1a', type:'narrative', chapter:16, round:1, title:'坦诚的守护者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你带她走进梅尔基亚德斯的房间——给她看羊皮卷。她的手指翻过纸页——她不懂这种语言，但她感觉到了它的重量。"这写的是谁？""我们。全部的人。从建村到……最后。"她看着你——她的眼睛里有一种你后来才知道是什么的东西。']}, choices:null, nextScene:'ch16_r1_settlement' },
    ch16_r1b: { id:'ch16_r1b', type:'narrative', chapter:16, round:1, title:'谨慎者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你没有告诉她羊皮卷的事。但你在走廊里观察她——她擦洗墙壁的样子像乌尔苏拉，她笑的样子像梅梅。她丈夫在角落里无所适从——他不属于这里。而她——她一步一步地重新变成了布恩迪亚。']}, choices:null, nextScene:'ch16_r1_settlement' },
    ch16_r1c: { id:'ch16_r1c', type:'narrative', chapter:16, round:1, title:'合作者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你帮她清理院子——栗树下的泥土已经硬得像石头。你们一起工作了几个星期——她擦墙壁，你修屋顶。你们说话不多——但手上的默契在慢慢生长。加斯通看着这一切——他知道有些东西正在发生，但他没有语言去描述它。']}, choices:null, nextScene:'ch16_r1_settlement' },
    ch16_r1_settlement: { id:'ch16_r1_settlement', type:'settlement', chapter:16, round:1, title:'第一轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['阿玛兰妲·乌尔苏拉回来了——带着一个男人和一个梦想。但布恩迪亚家的魔力已经在他们之间悄悄工作。']}, settlement:{ summary:'第一轮完成。她回来了——命运也随之而来。', nextScene:'ch16_r2_choice', nextLabel:'进入第二轮' } },
    ch16_r2_choice: { id:'ch16_r2_choice', type:'choice', chapter:16, round:2, title:'第二轮选择 · 加斯通的离开', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['加斯通感觉到了——他的妻子正在远离他。不是出轨——是更深的：她的心已经在马孔多生了根。他提议回去——"欧洲有你的诊所，你的生活。"她犹豫了。','他最后说服她尝试——用一封航空信。他订了机票——但信上没有写日期。他知道自己在赌。'], transition:'你选择——' }, choices:[
      { id:'ch16_r2_a', label:'劝她留下', description:'不要让她走——马孔多需要她，羊皮卷需要她。有些话如果现在不说——就永远没机会了。', nextScene:'ch16_r2a', effects:{ tags:['挽留者'], memory:null, fate: -1, bond: 2 } },
      { id:'ch16_r2_b', label:'不干涉——让她自己选', description:'婚姻是她的——去留也是她的。你不能替她做这个决定。', nextScene:'ch16_r2b', effects:{ tags:['尊重者'], memory:null, fate: 0, bond: 1 } },
      { id:'ch16_r2_c', label:'告诉加斯通真相', description:'她正在爱上马孔多——或许不止马孔多。让加斯通知道——他的心虽然会碎，但比被骗好。', nextScene:'ch16_r2c', effects:{ tags:['诚实者'], memory:null, fate: 1, bond: -1 } }
    ], settlement:'ch16_r2_settlement' },
    ch16_r2a: { id:'ch16_r2a', type:'narrative', chapter:16, round:2, title:'挽留者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你在走廊上拦住她。"不要走。"她看着你——你第一次看见她目光里有一种不确定。"为什么？""因为……马孔多需要你。"你差点说"我需要你"——但你没有。她留下来了。加斯通的信被收进了抽屉里——没有寄出去。']}, choices:null, nextScene:'ch16_r2_settlement' },
    ch16_r2b: { id:'ch16_r2b', type:'narrative', chapter:16, round:2, title:'尊重者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你什么都没有说。阿玛兰妲·乌尔苏拉在加斯通和布恩迪亚之间纠结了很久。最后——她留下来了。不是因为你说服了她——是因为她每天在走廊上和你的肩膀擦过的时候，已经做了决定。你没有推——所以她没有反抗的对象。']}, choices:null, nextScene:'ch16_r2_settlement' },
    ch16_r2c: { id:'ch16_r2c', type:'narrative', chapter:16, round:2, title:'诚实者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你找到加斯通——告诉他：她不会走了。不是因为马孔多——是因为她找到了她以为在欧洲能找到但实际上在马孔多等着她的东西。加斯通沉默了很久。然后他说："我知道了。"他订了一张单程票——给他自己一个人。']}, choices:null, nextScene:'ch16_r2_settlement' },
    ch16_r2_settlement: { id:'ch16_r2_settlement', type:'settlement', chapter:16, round:2, title:'第二轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['加斯通走了——或留下来了。但无论如何——阿玛兰妲·乌尔苏拉已经做了选择。她的选择不是你——是马孔多。但马孔多在这个时刻——就是你。']}, settlement:{ summary:'第二轮完成。三角关系的解体。', nextScene:'ch16_r3_choice', nextLabel:'进入第三轮' } },
    ch16_r3_choice: { id:'ch16_r3_choice', type:'choice', chapter:16, round:3, title:'第三轮选择 · 接近', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['加斯通走了以后——房子里只剩下你们两个人。（还有栗树下的老人——但他不算数了。）','你们白天一起修房子——晚上一起读羊皮卷。她的头发在烛光下是暗金色的。她翻译拉丁文的速度比你还快——因为她在欧洲学过。但她的笑声是你没有听过的——在这个古老的房间里，笑声听起来像一种会被禁用的语言。'], transition:'你选择——' }, choices:[
      { id:'ch16_r3_a', label:'吻她', description:'你不想再等了。烛光、羊皮卷、她的头发——这些信号不需要翻译。', nextScene:'ch16_r3a', effects:{ tags:['勇敢的爱人'], memory:null, fate: 1, bond: 2 } },
      { id:'ch16_r3_b', label:'等待——保持友谊', description:'太快了。她刚送走丈夫——你需要给她时间。哪怕你的心已经在你的舌头上跳动了。', nextScene:'ch16_r3b', effects:{ tags:['克制的爱人'], memory:null, fate: -1, bond: 1 } },
      { id:'ch16_r3_c', label:'用羊皮卷表达', description:'你不会说话——但你会在羊皮卷的翻译边缘写下一行小字：你在这里。在所有的名字里——你在读的这一页里。', nextScene:'ch16_r3c', effects:{ tags:['以笔代口者'], memory:'羊皮卷边缘的情书', fate: 0, bond: 1 } }
    ], settlement:'ch16_r3_settlement' },
    ch16_r3a: { id:'ch16_r3a', type:'narrative', chapter:16, round:3, title:'勇敢的爱人', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你俯身过去——她的嘴唇在等你。这不是一个温柔的吻——这是一个积压了很久的吻。羊皮卷从桌上滑落——纸页散了一地。但她没有在意——她的手在你的头发里。外面——栗树下的老人停止了画圆圈。也许他感觉到了——这个家里又有一对布恩迪亚在重复同一个错误。或是同一个命运。']}, choices:null, nextScene:'ch16_r3_settlement' },
    ch16_r3b: { id:'ch16_r3b', type:'narrative', chapter:16, round:3, title:'克制的爱人', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你后退了——不是因为不想，是因为太想了。她看着你——她的眼睛里有一瞬间的不解，然后变成了微笑。不是失望——是理解。那天晚上你们没有接吻——但你们的影子在烛光中靠得很近，比你们的身体更近。']}, choices:null, nextScene:'ch16_r3_settlement' },
    ch16_r3c: { id:'ch16_r3c', type:'narrative', chapter:16, round:3, title:'以笔代口者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你在羊皮卷的空白边缘写下一行字：在这里，在所有预言的句号之前，你的名字出现了——而我正在用墨水的速度靠近它。她没有看到你写的字——但第二天，她在同一页上画了一朵很小的花。你没有看见——直到很晚才发现。那朵花在羊皮卷的边缘——像一枚承诺。']}, choices:null, nextScene:'ch16_r3_settlement' },
    ch16_r3_settlement: { id:'ch16_r3_settlement', type:'settlement', chapter:16, round:3, title:'第三轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['爱情在这间时间不会流逝的房间里悄悄生长——不声张，不请求。但走廊里的每一个裂缝都在传递一个消息：这所房子里又要有一个布恩迪亚爱上另一个布恩迪亚了。']}, settlement:{ summary:'第三轮完成。禁忌之爱开始萌芽。', nextScene:'ch16_r4_choice', nextLabel:'进入第四轮' } },
    ch16_r4_choice: { id:'ch16_r4_choice', type:'choice', chapter:16, round:4, title:'第四轮选择 · 重建家园', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['阿玛兰妲·乌尔苏拉看着这所房子——腐烂、破败、几乎要倒。但她看见的不是废墟——她看见的是她的童年，是乌尔苏拉的厨房，是走廊里的阳光。','她说："我们要重建它。"不是疑问句——是布恩迪亚式的决定。她拿出了她在欧洲赚的钱——不多，但足够。'], transition:'你选择——' }, choices:[
      { id:'ch16_r4_a', label:'全力帮忙重建', description:'和她一起——修墙、换梁、种花。让这所房子重新活过来。', nextScene:'ch16_r4a', effects:{ tags:['重建者'], memory:null, fate: -1, bond: 2 } },
      { id:'ch16_r4_b', label:'保护羊皮卷——不让重建打扰', description:'房子可以修——但羊皮卷不能被干扰。划定区域——梅尔基亚德斯的房间不能动。', nextScene:'ch16_r4b', effects:{ tags:['保护者'], memory:null, fate: 2, bond: -1 } },
      { id:'ch16_r4_c', label:'反对——房子不值得修', description:'马孔多已经死了。与其修房子——不如离开这里，去一个新地方重新开始。', nextScene:'ch16_r4c', effects:{ tags:['现实主义者'], memory:null, fate: 1, bond: -1 } },
      { id:'ch16_r4_d', label:'你保护过丽贝卡——现在用同样的方式保护这所房子', description:'那年你站在丽贝卡和伤害之间——没有犹豫。现在这所房子也需要有人站在它和遗忘之间。不是用墙壁——是用记忆。', nextScene:'ch16_r4a', requiredFlag: { flag: 'protected_rebeca', min: 1 }, effects:{ tags:['守护房子的人'], memory:null, fate: -1, bond: 2 } }
    ], settlement:'ch16_r4_settlement' },
    ch16_r4a: { id:'ch16_r4a', type:'narrative', chapter:16, round:4, title:'重建者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你们一起修墙——她的手被钉子砸破了，你的肩膀被木梁压青了。但晚上——当你们坐在刚修好的走廊上看着夕阳时，你觉得这所房子在微笑。不是因为新木头——是因为有人在乎它。']}, choices:null, nextScene:'ch16_r4_settlement' },
    ch16_r4b: { id:'ch16_r4b', type:'narrative', chapter:16, round:4, title:'保护者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你同意重建——但你要求梅尔基亚德斯的房间保持原样。阿玛兰妲·乌尔苏拉不理解——但她尊重了。她在那间房间的门外画了一条线——工匠不能跨过这条线。线这边的世界在变——线那边的时间继续静止。']}, choices:null, nextScene:'ch16_r4_settlement' },
    ch16_r4c: { id:'ch16_r4c', type:'narrative', chapter:16, round:4, title:'现实主义者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你告诉她：马孔多已经死了。街道空了，商店关了，没有人会回来。与其修一所注定要倒的房子——不如离开。她看了你很久——然后说："你去吧。我不走。"她没有解释——但她看着栗树的方向。也许她也听见了她祖母的声音在说：这所房子会一直站着——哪怕里面的人来了又走。']}, choices:null, nextScene:'ch16_r4_settlement' },
    ch16_r4_settlement: { id:'ch16_r4_settlement', type:'settlement', chapter:16, round:4, title:'第四轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['房子在慢慢被修复——或继续腐烂。但重要的是：阿玛兰妲·乌尔苏拉在这里。只要她还在这所房子里——这所房子就还有理由站着。']}, settlement:{ summary:'第四轮完成。你面对了家园的未来。', nextScene:'ch16_r5_choice', nextLabel:'进入最终轮' } },
    ch16_r5_choice: { id:'ch16_r5_choice', type:'choice', chapter:16, round:5, title:'第五轮选择 · 承认', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['一天晚上——她在走廊上等你。她没有说话——只是站着。她的影子被月光拉得很长——一直延伸到你的脚边。','你知道她要说什么——你心里一直都知道。这不是可以被永远推迟的问题。你们擦过了肩膀太多次，在烛光下对视了太久。现在这一刻来了——你需要说出那三个字。或不说。'], transition:'你选择——' }, choices:[
      { id:'ch16_r5_a', label:'说"我爱你"', description:'说出来——不要再逃避。这是禁忌，但她不是你的姐妹——她是你的曾曾祖母的曾曾孙女。隔了太多代人。', nextScene:'ch16_r5a', effects:{ tags:['告白者'], memory:'走廊上的告白', fate: 0, bond: 2 } },
      { id:'ch16_r5_b', label:'用行动——而不是语言', description:'不说——但握住她的手。让她感觉到你的手指在说话——不需要翻译。', nextScene:'ch16_r5b', effects:{ tags:['沉默的恋人'], memory:null, fate: 0, bond: 1 } },
      { id:'ch16_r5_c', label:'说不——尽管爱', description:'你知道这不对。哪怕隔了那么多代——你们还是布恩迪亚。拒绝她——不是因为不爱，是因为太爱。', nextScene:'ch16_r5c', effects:{ tags:['自我牺牲者'], memory:'被拒绝的走廊', fate: 2, bond: -2} },
      { id:'ch16_r5_d', label:'你不需要语言——她知道你爱她', description:'你们之间已经不需要"我爱你"了。她看你的眼神——你知道。你也用同样的眼神看她。不是沉默——是一种比语言更古老的理解。', nextScene:'ch16_r5a', requiredRelationship: { character: '阿玛兰妲·乌尔苏拉', min: 70 }, effects:{ tags:['无需语言的人'], memory:null, fate: 0, bond: 2 } },
      { id:'ch16_r5_e', label:'你撕下过一页预言——在那页空白上写新的开始', description:'羊皮卷有一页被你撕掉了。现在那页空白在你手里——不是缺口，是自由。拿起笔——在上面写下第一个不是预言的字。', nextScene:'ch16_r5a', requiredMemory: '被撕下的一页', effects:{ tags:['在空白上书写的人'], memory:null, fate: 2, bond: 0 } }
    ], settlement:'ch16_r5_settlement' },
    ch16_r5a: { id:'ch16_r5a', type:'narrative', chapter:16, round:5, title:'告白者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你说出来了。三个字。走廊里的回声把它们一直传到栗树下——老人抬起头，也许他听见了。她哭了——不是难过，是释放。她扑进你怀里——你们的影子在月光下合成一个。羊皮卷在房间里无声地翻过一页——梅尔基亚德斯早就写好了这一刻。']}, choices:null, nextScene:'ch16_r5_settlement' },
    ch16_r5b: { id:'ch16_r5b', type:'narrative', chapter:16, round:5, title:'沉默的恋人', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你没有说——但你握住了她的手。她的手指在你的掌心里动了一下——像一条鱼。不是挣扎——是确认。你不需要语言——布恩迪亚家的爱情从来不是用语言来传递的。语言做的事是背叛——手指做的事是承诺。']}, choices:null, nextScene:'ch16_r5_settlement' },
    ch16_r5c: { id:'ch16_r5c', type:'narrative', chapter:16, round:5, title:'自我牺牲者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你说不。她看着你——她的眼睛里没有恨，只有一种更深的东西：她知道你在说谎。但她没有拆穿——因为她也怕。怕这个家族的诅咒，怕羊皮卷里写的结局。她转身走开了——但她的脚步很慢，每一步都在给你后悔的机会。你没有追上去——但你的心追了。']}, choices:null, nextScene:'ch16_r5_settlement' },
    ch16_r5_settlement: { id:'ch16_r5_settlement', type:'settlement', chapter:16, round:5, title:'第五轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['爱情被承认了——或以沉默的形式被封存了。但无论你选择哪一条路——它都已经发生了。羊皮卷上写着——虽然你还没有读到那一页。']}, settlement:{ summary:'最终轮完成。禁忌之爱被说出口了——或封存了。', nextScene:'chapter16_end', nextLabel:'查看章末结算' } },
    chapter16_end: { id:'chapter16_end', type:'settlement', chapter:16, round:6, title:'第十六章 · 章末结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['第十六章完结。阿玛兰妲·乌尔苏拉和奥雷里亚诺——两个布恩迪亚——证明了即使在一切都在腐烂的马孔多，爱情仍然可以是一种建设而不是拆毁。','但羊皮卷的下一页——正在以比他们的爱情更快的速度翻译着自己。']}, settlement:{ summary:'第十六章完结。爱情在马孔多的废墟中开花了。', isChapterEnd:true, nextLabel:'进入第十七章 · 近亲之爱', quadrantNarratives: { guardian: '阿玛兰妲·乌尔苏拉回来了——带着欧洲的海风。房子还是那所房子，但门框矮了——不是房子缩了，是你长高了。', prophet: '你看见了两个世界的碰撞——欧洲与马孔多，未来与过去。它们不会融合——只会擦肩而过。', follower: '你张开双臂欢迎她——不是因为确定，是因为她是家人。有时候这就够了。', rebel: '你不相信那个欧洲男人能理解马孔多——不是因为他不够好，是因为他不是在这里腐烂的。' } } }
  },
  memories: {
    '羊皮卷边缘的情书': { id:'羊皮卷边缘的情书', title:'羊皮卷边缘的情书', description:'你在边缘写下：在所有预言的句号之前，你的名字出现了。第二天她在同一页画了一朵花。', chapter:16 },
    '走廊上的告白': { id:'走廊上的告白', title:'走廊上的告白', description:'你说出了三个字。回声传到栗树下——老人抬起头。羊皮卷无声地翻过一页。', chapter:16 },
    '被拒绝的走廊': { id:'被拒绝的走廊', title:'被拒绝的走廊', description:'你说不。她走开了——但每一步都很慢。你没有追——但你的心追了。', chapter:16 }
  },
  familyMembers: [
    { name:'阿玛兰妲·乌尔苏拉', relation:'第五代布恩迪亚', generation:5, isCurrent:false, description:'从布鲁塞尔归来的布恩迪亚。带着一个丈夫和一个梦想——但她的心留在了马孔多。' },
    { name:'加斯通', relation:'丈夫（阿玛兰妲·乌尔苏拉）', generation:0, isCurrent:false, description:'阿玛兰妲·乌尔苏拉的欧洲丈夫。他不属于马孔多——从未属于过。' }
  ]
});

/* ================================================================
   第十七章 · 近亲之爱、羊皮卷破译
   ================================================================ */
registerChapter({
  id: 'chapter17', title: '第十七章 · 近亲之爱、羊皮卷破译',
  initialScene: 'ch17_opening', possessedCharacter: '奥雷里亚诺', chapterNumber: 17,
  preview: '<p>第十八章 · 最后一个布恩迪亚的诞生</p><p style="margin-top:8px;">你将附身于奥雷里亚诺，</p><p>见证家族的最后一刻。</p>',
  nextLabel: '进入第十八章 · 最后一个布恩迪亚的诞生',
  scenes: {
    ch17_opening: { id:'ch17_opening', type:'narrative', chapter:17, round:0, title:'卷轴的低语', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['梅尔基亚德斯的房间。午夜。烛火摇动。你已经在这间屋子里坐了无数个夜晚了。你熟悉它的每一道裂缝、每一块发霉的墙皮。但今晚——不一样。','羊皮卷在你眼前不再是文字——它们的翻译速度在自动加快。不是你在读它们——是它们在读你。每一页都对应着马孔多正在发生的事——你读到建村的时候，栗树下的老人动了动；你读到失眠症的时候，走廊里有脚步声响起。','阿玛兰妲·乌尔苏拉坐在你身边——她的手放在你的手上。你们不需要说话——因为羊皮卷正在替你们说。'], clues: [{ triggerText: '羊皮卷', itemId: 'melquiades_handwriting', narrative: '笔迹是你认识的——梅尔基亚德斯的手。一百年前他写下这些字的时候就知道你会读到。不是预言——是邀请。他在每一页的空白处都给你留了位置。', unlocksIn: ['epilogue'] }] }, echoCondition: { clue: 'melquiades_mirror' }, echoText: '你记得梅尔基亚德斯说："从哪儿开始，就从哪儿结束。"你终于明白——他不是在说羊皮卷。他是在说你。', choices:null, nextScene:'ch17_r1_choice' },

    ch17_r1_choice: { id:'ch17_r1_choice', type:'choice', chapter:17, round:1, title:'第一轮选择 · 确认关系', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你们已经在一起了——那种比任何婚姻都更牢固的、被羊皮卷预言绑定的在一起。但费尔南达说过的话还在走廊里回响："这个家族会被诅咒——如果布恩迪亚和布恩迪亚之间有了孩子。"','阿玛兰妲·乌尔苏拉不怕——她是欧洲回来的，不信古老的诅咒。但你——你每一天都在羊皮卷里读到越来越近的结局。你开始害怕——不是怕诅咒，是怕预言。'], transition:'你选择——' }, choices:[
      { id:'ch17_r1_a', label:'拥抱爱情——不管预言', description:'羊皮卷写的是过去——不是命令。你们可以选择自己的未来。继续爱她——不怕一切。', nextScene:'ch17_r1a', effects:{ tags:['无畏的爱人'], memory:null, fate: 2, bond: 0 } },
      { id:'ch17_r1_b', label:'克制——避免孩子', description:'你们可以在一起——但不要让预言实现。不要让布恩迪亚和布恩迪亚的孩子出生。', nextScene:'ch17_r1b', effects:{ tags:['谨慎的爱人'], memory:null, fate: -2, bond: 1 } },
      { id:'ch17_r1_c', label:'停止翻译——不去看结局', description:'也许不知道结局就可以不被它影响。放下羊皮卷——活在当下，不去读那最后一页。', nextScene:'ch17_r1c', effects:{ tags:['逃避预言者'], memory:null, fate: 0, bond: 2 } },
      { id:'ch17_r1_d', label:'你见过那张纸条——承认你们是同一条血脉', description:'私生子的名字写在那张小纸条上。墨水很新——是最近写的。你不是一个人——你的血液里流着和她一样的名字。', nextScene:'ch17_r1a', requiredClue: 'bastard_name', effects:{ tags:['血脉的认领者'], memory:null, fate: 1, bond: 1 } },
      { id:'ch17_r1_e', label:'你上次读完了羊皮卷——这一次，带着全知回来', description:'你已经知道羊皮卷的最后一页写的是什么。但这一次你不是来验证预言的——你是来寻找上次漏掉的那些边缘空白。梅尔基亚德斯在每一页都给你留了位置。', nextScene:'ch17_r1a', requiredPlaythrough: 2, effects:{ tags:['全知的回归者'], memory:null, fate: 1, bond: 0 } }
    ], settlement:'ch17_r1_settlement' },
    ch17_r1a: { id:'ch17_r1a', type:'narrative', chapter:17, round:1, title:'无畏的爱人', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你选择了爱——不是因为它安全，是因为它已经发生了。你们在这个正在腐烂的房子里做爱——墙壁在颤抖，不是因为结构，是因为历史本身在震动。马孔多已经很久没有感受到这种力量了——不是毁灭的力量，是创造的力量。']}, choices:null, nextScene:'ch17_r1_settlement' },
    ch17_r1b: { id:'ch17_r1b', type:'narrative', chapter:17, round:1, title:'谨慎的爱人', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你们在一起——但你们小心地避免了最后一件事。晚上你们只是拥抱着入睡——你的手放在她的头发上，她的呼吸在你胸前平稳。你们不是不想要更多——是太清楚"更多"可能意味着什么。']}, choices:null, nextScene:'ch17_r1_settlement' },
    ch17_r1c: { id:'ch17_r1c', type:'narrative', chapter:17, round:1, title:'逃避预言者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你合上了羊皮卷。它在你手中像一只终于安静下来的鸟。你把它放回书架——转过来面对阿玛兰妲·乌尔苏拉。你们不再讨论预言——你们只讨论今天。今天需要修哪面墙，今天吃什么，今天的日落是什么颜色。但预言在书架上——它在等。它知道你终究会回来。']}, choices:null, nextScene:'ch17_r1_settlement' },
    ch17_r1_settlement: { id:'ch17_r1_settlement', type:'settlement', chapter:17, round:1, title:'第一轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['爱已经发生了——无论你们选择如何面对它。羊皮卷在书架上——或敞在桌上——继续以它自己不可逆转的速度被翻译着。']}, settlement:{ summary:'第一轮完成。你面对了爱情与预言的冲突。', nextScene:'ch17_r2_choice', nextLabel:'进入第二轮' } },

    ch17_r2_choice: { id:'ch17_r2_choice', type:'choice', chapter:17, round:2, title:'第二轮选择 · 破译加速', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['羊皮卷的翻译速度在加快——快到你觉得不是你在读它，是它在你的脑海里直接印上文字。你看到了何塞·阿尔卡蒂奥·布恩迪亚被绑在栗树下的那一天——不是文字，是画面。你看到了蕾梅黛丝升天的那个下午——你甚至感觉到了一滴上天堂之前的雨水。','然后你看到了一行字——它让你停下了呼吸：","家族的第一个人被捆在一棵树上，最后一个人正被蚂蚁吃掉。","'], transition:'你选择——' }, choices:[
      { id:'ch17_r2_a', label:'继续读——面对全部真相', description:'不能逃避。读完它——哪怕最后一句是你不想看到的。', nextScene:'ch17_r2a', effects:{ tags:['勇敢的读者'], memory:null, fate: 1, bond: 2 } },
      { id:'ch17_r2_b', label:'出去走走——消化一下', description:'你需要空气。放下羊皮卷——和阿玛兰妲·乌尔苏拉一起去栗树下走走。', nextScene:'ch17_r2b', effects:{ tags:['暂停者'], memory:null, fate: 1, bond: -1 } },
      { id:'ch17_r2_c', label:'撕掉那一页——改变预言', description:'如果你撕掉它——也许预言就不会实现了？也许羊皮卷不是绝对的？', nextScene:'ch17_r2c', isSecretOption: true, effects:{ tags:['反抗者'], memory:'被撕下的一页', fate: 0, bond: 1 } },
      { id:'ch17_r2_d', label:'你理解金鱼的循环——陪老人做最后一条', description:'你记得父亲作坊里的金鱼——做好了熔掉，熔掉了再做。不是徒劳——是仪式。现在栗树下的老人也在画圆圈——陪他做最后一条金鱼。', nextScene:'ch17_r2b', requiredClue: 'goldfish_cycle', effects:{ tags:['金鱼的继承者'], memory:null, fate: 0, bond: 2 } }
    ], settlement:'ch17_r2_settlement' },
    ch17_r2a: { id:'ch17_r2a', type:'narrative', chapter:17, round:2, title:'勇敢的读者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你继续读。羊皮卷在你眼前展开——你看到了你自己。看到你坐在这间房间里读羊皮卷的画面被写进了羊皮卷里。你忽然明白了——梅尔基亚德斯写的不是过去，不是未来——是现在。是每一个正在发生的现在。你在读的时候——故事同时在被创造。']}, choices:null, nextScene:'ch17_r2_settlement' },
    ch17_r2b: { id:'ch17_r2b', type:'narrative', chapter:17, round:2, title:'暂停者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你牵着阿玛兰妲·乌尔苏拉的手走到栗树下。老人正在画圆圈——他听见了你们的脚步声，但他没有抬头。风把栗树的枯叶吹下来——它们落在你们的头发上。你们没有讨论预言——你们只是站着——像两棵也在慢慢被时间削平的树。']}, choices:null, nextScene:'ch17_r2_settlement' },
    ch17_r2c: { id:'ch17_r2c', type:'narrative', chapter:17, round:2, title:'反抗者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你伸手撕下那一页——它在你手指下发出干裂的声音。但你低头一看——那一页还在。你撕掉的是空白的边缘——真正的文字像长在纸上的苔藓，你揭不掉。你尝试了几次——每次都只能撕到空白。预言不能被撕掉——它只能在它该发生的时候自己消失。']}, choices:null, nextScene:'ch17_r2_settlement' },
    ch17_r2_settlement: { id:'ch17_r2_settlement', type:'settlement', chapter:17, round:2, title:'第二轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['羊皮卷的翻译不可逆。每一页被读完后——马孔多的对应部分就会从现实中消失。不是毁灭——是完成。']}, settlement:{ summary:'第二轮完成。你面对了预言的不可逆性。', nextScene:'ch17_r3_choice', nextLabel:'进入第三轮' } },

    ch17_r3_choice: { id:'ch17_r3_choice', type:'choice', chapter:17, round:3, title:'第三轮选择 · 她的恐惧', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['阿玛兰妲·乌尔苏拉也读了羊皮卷——只读了一小段——就被吓得脸都白了。她读到了那句关于"最后一个人正被蚂蚁吃掉"的话。她开始做梦——梦里有蚂蚁从墙缝里涌出来，爬过她的脚踝，爬过孩子的摇篮。','她醒来的时候——手心全是汗。她看着你——"我们不会有孩子吧？"她的声音在抖。但你不知道答案——你还没读到那一页。'], transition:'你选择——' }, choices:[
      { id:'ch17_r3_a', label:'安慰她——不会有事', description:'抱住她，告诉她这只是一个古老的预言。不一定会发生——不一定是指你们。', nextScene:'ch17_r3a', effects:{ tags:['安慰者'], memory:null, fate: 0, bond: 2 } },
      { id:'ch17_r3_b', label:'诚实——告诉她你也不知道', description:'不给她虚假的承诺。预言可能是真的——但你们会一起面对。不管发生什么。', nextScene:'ch17_r3b', effects:{ tags:['诚实的伴侣'], memory:null, fate: 1, bond: 0 } },
      { id:'ch17_r3_c', label:'重新翻译——看看有没有误解', description:'也许是翻译错了。重新检查那一段——用字典，用逻辑，用一切可能的解读方式。', nextScene:'ch17_r3c', effects:{ tags:['学者'], memory:null, fate: 2, bond: -1 } },
      { id:'ch17_r3_d', label:'用铜镜照一照羊皮卷——看那些倒写的字', description:'梅尔基亚德斯的铜镜还在你口袋里。你把它举到羊皮卷前——镜面里，那些倒写的字变成了正写的。你读出了你从未见过的句子。', nextScene:'ch17_r3c', requiredClue: 'melquiades_mirror', effects:{ tags:['镜中读者'], memory:null, fate: 1, bond: 1 } },
      { id:'ch17_r3_e', label:'你了解她的恐惧——因为你也有同样的恐惧', description:'阿玛兰妲·乌尔苏拉害怕的不是预言——是失去你。你也害怕失去她。但你知道：恐惧不是停止的理由——是抱得更紧的理由。告诉她你不会放手。', nextScene:'ch17_r3a', requiredRelationship: { character: '阿玛兰妲·乌尔苏拉', min: 60 }, effects:{ tags:['理解恐惧的人'], memory:null, fate: 0, bond: 2 } }
    ], settlement:'ch17_r3_settlement' },
    ch17_r3a: { id:'ch17_r3a', type:'narrative', chapter:17, round:3, title:'安慰者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你抱住她。她的手在你的背后——你感觉到她的身体在慢慢放松。你不确定自己在说实话——但你在说爱。有时候爱比事实更能让人挺过黑夜。她睡着了——她的呼吸很平稳。你看着她在月光下的脸——你不知道她能拥有多少日子。但今晚——她在呼吸。']}, choices:null, nextScene:'ch17_r3_settlement' },
    ch17_r3b: { id:'ch17_r3b', type:'narrative', chapter:17, round:3, title:'诚实的伴侣', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你看着她的眼睛——告诉她："我也不知道。可能是真的。可能不是。但不管发生什么——我们都在这里。在一起。"她沉默了很久——然后点了点头。她没有哭——但你看见她的嘴角动了一下。不是微笑——是接受。']}, choices:null, nextScene:'ch17_r3_settlement' },
    ch17_r3c: { id:'ch17_r3c', type:'narrative', chapter:17, round:3, title:'学者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你们点起更多的蜡烛——逐字逐句地检查那段预言。字典翻烂了——羊皮卷被摊开在桌上。你们发现了一个词——它可以被翻译成"被吃掉"，也可以被翻译成"被带回"。蚂蚁不是食肉者——它们是收集者。但不管怎么翻译——结果都不改变：最后一个人不会活着。']}, choices:null, nextScene:'ch17_r3_settlement' },
    ch17_r3_settlement: { id:'ch17_r3_settlement', type:'settlement', chapter:17, round:3, title:'第三轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['预言在房间里像一团雾气——你看不见它，但你能感觉到它在每一口呼吸里。阿玛兰妲·乌尔苏拉不再讨论它——但她的沉默比任何尖叫都更响。']}, settlement:{ summary:'第三轮完成。你面对她的恐惧——用爱或真相回应。', nextScene:'ch17_r4_choice', nextLabel:'进入第四轮' } },

    ch17_r4_choice: { id:'ch17_r4_choice', type:'choice', chapter:17, round:4, title:'第四轮选择 · 栗树下的老人', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['何塞·阿尔卡蒂奥·布恩迪亚——家族的第一个人——仍然被绑在栗树下。他已经很多年没有说过人话了——他说的都是梅尔基亚德斯教他的古老语言。但你听得懂——因为你现在正在翻译同样的语言。','他说的是："冰……它在烧……磁铁……没有黄金……大海……灰白的……""然后他抬起头——他的眼睛在百年之后忽然变得清澈。他看见了阿玛兰妲·乌尔苏拉。他笑了笑——然后说："乌尔苏拉，你还在揉面？"她不是乌尔苏拉——但她是。她就站在那里——就像百年前那个女人站在门口，双手叉腰，看着丈夫用一头骡子和一对山羊换两块磁铁。'], transition:'你选择——' }, choices:[
      { id:'ch17_r4_a', label:'陪他说话——用古老的语言', description:'你是唯一能懂他的人了。坐下来——用梅尔基亚德斯的语言和他对话。让他最后有人能听懂。', nextScene:'ch17_r4a', effects:{ tags:['最后的对话者'], memory:'古老语言的对话', fate: 0, bond: 2 } },
      { id:'ch17_r4_b', label:'解开他的绳子——让他自由', description:'他被绑了一百年了——没有人绑着他，是那些绳子忘了可以被解开。解开它们。让他走。', nextScene:'ch17_r4b', effects:{ tags:['解放者'], memory:null, fate: 1, bond: 1 } },
      { id:'ch17_r4_c', label:'让他安静——不要打扰', description:'他在栗树下找到了自己的世界——不需要你来改变它。让他继续画圆圈——不要去触碰那种平衡。', nextScene:'ch17_r4c', effects:{ tags:['尊重者'], memory:null, fate: 0, bond: -1 } },
      { id:'ch17_r4_d', label:'你见过水渍羊皮纸——在雨水的痕迹里读出另一种翻译', description:'那张被雨水浸透的羊皮纸——字迹模糊了，但你能感觉到纸上残留的温度。你忽然意识到：模糊也是一种翻译。有些东西写得太清楚反而会错。', nextScene:'ch17_r4a', requiredClue: 'water_stained_parchment', effects:{ tags:['雨水的译者'], memory:null, fate: 1, bond: 1 } }
    ], settlement:'ch17_r4_settlement' },
    ch17_r4a: { id:'ch17_r4a', type:'narrative', chapter:17, round:4, title:'最后的对话者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你蹲在他身边——用你学到的古老语言和他说话。他浑浊的眼睛忽然亮了一下——像煤炭在最暗的火里微微发光。你们说着那些词——磁铁、冰块、大海、栗树。他说得很慢——每说一个字就像翻一页羊皮纸。他说的最后一个词是"冰"——然后他笑了。他不再说话了——但他的笑还挂在嘴角。']}, choices:null, nextScene:'ch17_r4_settlement' },
    ch17_r4b: { id:'ch17_r4b', type:'narrative', chapter:17, round:4, title:'解放者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你解开了绳子——它已经腐烂得几乎不需要解。老人看着自己的手腕——上面有被绳子勒了一百年的痕迹。他试着站起来——但他太老了，肌肉已经忘记了如何支撑体重。他站不起来——但他自由了。他爬了几步——远离了栗树。然后他停下来，躺在阳光下——闭上眼睛。']}, choices:null, nextScene:'ch17_r4_settlement' },
    ch17_r4c: { id:'ch17_r4c', type:'narrative', chapter:17, round:4, title:'尊重者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你没有碰绳子。他继续画圆圈——他的嘴唇在动，但声音出不来。阿玛兰妲·乌尔苏拉蹲在他面前，把他膝盖上的面包屑拍掉——就像乌尔苏拉一百年前做的一样。老人没有抬头——但他画的那个圆圈歪了一下。也许是巧合——也许是问候。']}, choices:null, nextScene:'ch17_r4_settlement' },
    ch17_r4_settlement: { id:'ch17_r4_settlement', type:'settlement', chapter:17, round:4, title:'第四轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['栗树下——家族的第一个布恩迪亚正在完成他在这个世界上的最后几个动作。他不再说话——但他画在泥土里的圆圈开始变得越来越完整。']}, settlement:{ summary:'第四轮完成。你与始祖对话——或安静地看他老去。', nextScene:'ch17_r5_choice', nextLabel:'进入最终轮' } },

    ch17_r5_choice: { id:'ch17_r5_choice', type:'choice', chapter:17, round:5, title:'第五轮选择 · 真相浮现', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你读到羊皮卷的倒数第二页。你的手在颤抖——不是因为你读不懂——是因为你读到了你自己的名字。在梅尔基亚德斯的字体里——写着你。写着阿玛兰妲·乌尔苏拉。写着你们正在发生的爱——写着即将出生的孩子——写着蚂蚁。','你明白了。你不需要继续读最后一页——因为你正在活最后一页。羊皮卷写完了全部——包括你此刻在此处犹豫要不要翻下去的这一个动作。'], transition:'你选择——' }, choices:[
      { id:'ch17_r5_a', label:'翻到最后一页——接受命运', description:'读完它。知道自己的结局——然后去面对它。既然已经被写好了——那就活成它最好的版本。', nextScene:'ch17_r5a', effects:{ tags:['接受者'], memory:null, fate: 2, bond: 0 } },
      { id:'ch17_r5_b', label:'不翻——用余生去猜', description:'留下最后一页——不去看结局。你们的余生会是一个谜——也许这比知道答案更仁慈。', nextScene:'ch17_r5b', effects:{ tags:['悬念保持者'], memory:null, fate: 0, bond: 0} },
      { id:'ch17_r5_c', label:'把羊皮卷烧掉', description:'如果预言不存在——你们就可以自由。把羊皮卷扔进火里——连同它的所有句号。', nextScene:'ch17_r5c', effects:{ tags:['焚书者'], memory:'灰烬中的字', fate: -2, bond: -1 } },
      { id:'ch17_r5_d', label:'你不接受这个结局——用你自己的方式合上它', description:'羊皮卷说你要被飓风抹去。但谁说的？梅尔基亚德斯写了一百年——但他没有写到最后一行。最后一行是你的。', nextScene:'ch17_r5a', requiredFate: { max: 2 }, effects:{ tags:['不服从结局的人'], memory:null, fate: 2, bond: 0 } },
      { id:'ch17_r5_e', label:'你把铜镜举到羊皮卷前——镜面里，倒写的字变成了正写', description:'梅尔基亚德斯的铜镜映出了羊皮卷上的字——倒写的变成了正写，隐藏的变成了可见。但你看见的不只是预言：在每一行之间，你都看见了空白。老人给你留了位置——不是一个句号，是一段留白。你不是在读预言——你是在完成它。', nextScene:'ch17_r5a', requiredClue: 'melquiades_mirror', requiredFate: { min: 4 }, requiredBond: { min: 4 }, effects:{ tags:['预言的合著者'], memory:null, fate: 1, bond: 1 } }
    ], settlement:'ch17_r5_settlement' },
    ch17_r5a: { id:'ch17_r5a', type:'narrative', chapter:17, round:5, title:'接受者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你翻到了最后一页。你读到了蚂蚁——读到了飓风——读到"注定要一百年孤独的家族不会有第二次机会在大地上出现。"你放下羊皮卷。阿玛兰妲·乌尔苏拉在看你的脸——你的表情告诉她了一切。她没有问——她只是握紧了你的手。你们的手现在很冷——但在一起。']}, choices:null, nextScene:'ch17_r5_settlement' },
    ch17_r5b: { id:'ch17_r5b', type:'narrative', chapter:17, round:5, title:'悬念保持者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你没有翻最后一页。你把它合上了——把那一页压在所有已经读过的书页下面。你们走出房间——在走廊上站着。月光很亮——比你在羊皮卷里读过的任何一页都亮。"我们还有多少时间？"她问。你耸了耸肩——你不想骗她，但你也不想告诉她你知道的一切——包括你不知道的那些。']}, choices:null, nextScene:'ch17_r5_settlement' },
    ch17_r5c: { id:'ch17_r5c', type:'narrative', chapter:17, round:5, title:'焚书者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你把羊皮卷扔进火里——它在火焰中卷曲，黑色的字迹在高温下短暂地发光——然后消失了。你看着它烧成灰。但灰烬落在地上——形成的图案和羊皮卷上的字迹一模一样。第二天早上——羊皮卷在桌上完整如初。火焰没有改变任何东西——除了你的手，它们还在发烫。']}, choices:null, nextScene:'ch17_r5_settlement' },
    ch17_r5_settlement: { id:'ch17_r5_settlement', type:'settlement', chapter:17, round:5, title:'第五轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['预言被读到了——或没有被读到。但不管你怎么选——羊皮卷还在。它一直在——它会一直在——直到最后一个字被读完，最后一个布恩迪亚离开马孔多。']}, settlement:{ summary:'最终轮完成。你面对了预言的最后一页。', nextScene:'chapter17_end', nextLabel:'查看章末结算' } },
    chapter17_end: { id:'chapter17_end', type:'settlement', chapter:17, round:6, title:'第十七章 · 章末结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['第十七章完结。你读到了自己的命运——或选择了不去读它。','但有一个声音正在变大——不是羊皮卷的沙沙声，不是蚂蚁的脚步声——是一个婴儿的啼哭。']}, settlement:{ summary:'第十七章完结。羊皮卷的预言行至倒数第二页。', isChapterEnd:true, nextLabel:'进入第十八章 · 最后一个布恩迪亚的诞生', quadrantNarratives: { guardian: '羊皮卷上的第一句——"家族的第一个人被捆在一棵树上，最后一个人正被蚂蚁吃掉。"你在中间——你是那个没有被写下来的人。', prophet: '你破解了全部——一百年的命运在纸上展开。理解了全部。也失去了全部。因为理解得太完整的人，再也没有什么东西需要去信。', follower: '你读懂了羊皮卷——但你没有合上。你在每一页边缘写了注释。你知道命运是写好的——但注释是你自己的。', rebel: '羊皮卷有一页是空白的——你把它撕下来了。梅尔基亚德斯没有写你——因为他写不了。不在书里的人不需要结局。' } } }
  },
  memories: {
    '被撕下的一页': { id:'被撕下的一页', title:'被撕下的一页', description:'你试图撕掉预言——但真文字像苔藓，你只能撕掉空白。预言不能被撕——只能在它发生的时候自己消失。', chapter:17 },
    '古老语言的对话': { id:'古老语言的对话', title:'古老语言的对话', description:'你用梅尔基亚德斯的语言和他说话。他一百年来第一次被人听懂。最后一个词是"冰"。', chapter:17 },
    '灰烬中的字': { id:'灰烬中的字', title:'灰烬中的字', description:'羊皮卷在火焰中短暂发光——然后消失了。但第二天早上它又在桌上——完整如初。', chapter:17 }
  },
  familyMembers: []
});

/* ================================================================
   第十八章 · 最后一个布恩迪亚的诞生
   ================================================================ */
registerChapter({
  id: 'chapter18', title: '第十八章 · 最后一个布恩迪亚的诞生',
  initialScene: 'ch18_opening', possessedCharacter: '奥雷里亚诺', chapterNumber: 18,
  preview: '<p>第十九章 · 毁灭、蚂蚁、飓风</p><p style="margin-top:8px;">你将附身于奥雷里亚诺，</p><p>在飓风中面对预言的全部重量。</p>',
  nextLabel: '进入第十九章 · 毁灭、蚂蚁、飓风',
  scenes: {
    ch18_opening: { id:'ch18_opening', type:'narrative', chapter:18, round:0, title:'血与水的夜', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['阿玛兰妲·乌尔苏拉在你的怀里剧烈地颤抖。她的额头上全是汗——她的眼睛睁开着，但目光穿过了你，穿过了屋顶，望向某个你无法跟随的地方。','她在分娩。这所房子已经很久没有听见婴儿的啼哭了——上一次可能是梅梅，可能是更早的某个布恩迪亚。现在走廊里回荡着她的喊声——栗树下的老人动了动手指。他知道——家族正在诞生最后一个成员。','你握着她的手——你不知道该说什么，所以你只是握着。'], clues: [{ triggerText: '婴儿的啼哭', itemId: 'baby_blanket', narrative: '摇篮旁边放着一块叠好的襁褓——上面绣着布恩迪亚的家徽。针脚很细，不知道是谁绣的。也许是乌尔苏拉——在失明之前。也许是你母亲——在她被送走之前。襁褓还是新的——一次都没有用过。明天它会沾上第一个婴儿的体温。', unlocksIn: ['epilogue'] }] }, echoText: '你记得乌尔苏拉说过的话——"别死。"现在你看着最后一个布恩迪亚躺在摇篮里。你不知道该对她说"别死"还是"你可以走了"。', choices:null, nextScene:'ch18_r1_choice' },

    ch18_r1_choice: { id:'ch18_r1_choice', type:'choice', chapter:18, round:1, title:'第一轮选择 · 分娩', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['分娩持续了整整一夜。没有医生——马孔多已经没有医生了。没有助产士——你是唯一能帮她的人。你的手在抖——但你的声音很稳。','阿玛兰妲·乌尔苏拉喊了很多人的名字——她的母亲，她的祖母，乌尔苏拉——她喊了加斯通一次。但她握着的手是你的。'], transition:'你选择——' }, choices:[
      { id:'ch18_r1_a', label:'专注接生——保持冷静', description:'你不能慌。她是你在乎的人——保持专注，把每一个步骤都做好。深呼吸。', nextScene:'ch18_r1a', effects:{ tags:['冷静的接生者'], memory:null, fate: -1, bond: 2 } },
      { id:'ch18_r1_b', label:'祈祷——向任何可能听见的力量', description:'你从来没有信过神——但今晚不是关于信仰，是关于希望。向梅尔基亚德斯祈祷，向乌尔苏拉祈祷。', nextScene:'ch18_r1b', effects:{ tags:['祈祷者'], memory:null, fate: 2, bond: -1 } },
      { id:'ch18_r1_c', label:'跑出去找人帮忙', description:'马孔多一定还有人在——哪怕一个老人，一个懂草药的乡下女人。出去找。', nextScene:'ch18_r1c', effects:{ tags:['求助者'], memory:null, fate: 1, bond: 0 } }
    ], settlement:'ch18_r1_settlement' },
    ch18_r1a: { id:'ch18_r1a', type:'narrative', chapter:18, round:1, title:'冷静的接生者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你深呼吸——然后开始工作。你的手比你想象的更稳。阿玛兰妲·乌尔苏拉看着你的脸——你的沉着让她也慢下了呼吸。在黎明前最黑暗的时候——你听见了一声啼哭。它来了——轻的、湿的、带着生命的重量。']}, choices:null, nextScene:'ch18_r1_settlement' },
    ch18_r1b: { id:'ch18_r1b', type:'narrative', chapter:18, round:1, title:'祈祷者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你闭上眼睛——在心里叫了所有你能想到的名字。梅尔基亚德斯。乌尔苏拉。蕾梅黛丝——虽然你从未见过她。你甚至叫了你从未认识的母亲——梅梅。你在心里说：帮帮她。不是在向神祈祷——是在向这个家族所有走了的人请求保佑。啼哭声响起的时候——你觉得那是他们一起在回应。']}, choices:null, nextScene:'ch18_r1_settlement' },
    ch18_r1c: { id:'ch18_r1c', type:'narrative', chapter:18, round:1, title:'求助者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你跑出房子——雨后的街道是空的。你敲了几扇门——没人应。马孔多已经空了。你跑回房子的时候——阿玛兰妲·乌尔苏拉自己在用力——她的声音在走廊里回荡，像一种古老的力量。你在门口站住了——她做到了——在你跑出去的时候。孩子已经出生了。']}, choices:null, nextScene:'ch18_r1_settlement' },
    ch18_r1_settlement: { id:'ch18_r1_settlement', type:'settlement', chapter:18, round:1, title:'第一轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['一个婴儿——布恩迪亚家的最后一个孩子——来到了这个世界。他的哭声很响——但这所房子已经很久没有听见婴儿的哭声了，墙壁似乎不习惯这种震动。']}, settlement:{ summary:'第一轮完成。最后一个布恩迪亚诞生了。', nextScene:'ch18_r2_choice', nextLabel:'进入第二轮' } },

    ch18_r2_choice: { id:'ch18_r2_choice', type:'choice', chapter:18, round:2, title:'第二轮选择 · 孩子的名字', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['孩子出生了——是个男孩。他的皮肤是粉红色的，但眼睛已经很亮了。你抱着他——这是你第一次抱着一个和你血脉相连的人。','阿玛兰妲·乌尔苏拉躺在床上——虚弱，但微笑。"叫他什么？"她问。你忽然想起了费尔南达——想起她收到那个"捡来的"婴儿时一定带着多少恐惧。但现在你不怕了。'], transition:'你选择——' }, choices:[
      { id:'ch18_r2_a', label:'奥雷里亚诺——像你一样', description:'这是布恩迪亚家的名字——每一代都有一个奥雷里亚诺。延续传统。', nextScene:'ch18_r2a', effects:{ tags:['传统维护者'], memory:null, fate: 0, bond: 2 } },
      { id:'ch18_r2_b', label:'何塞·阿尔卡蒂奥——像始祖', description:'用家族创始人的名字——让他带着第一个布恩迪亚的名字开始最后一个布恩迪亚的人生。', nextScene:'ch18_r2b', effects:{ tags:['致敬者'], memory:null, fate: 0, bond: 2 } },
      { id:'ch18_r2_c', label:'一个全新的名字', description:'不用旧名字——给他一个新的。不属于任何历史——只属于他自己。打破循环。', nextScene:'ch18_r2c', effects:{ tags:['革新者'], memory:null, fate: 1, bond: 0} },
      { id:'ch18_r2_d', label:'名字不重要——重要的是他属于这个家', description:'奥雷里亚诺还是何塞·阿尔卡蒂奥——都不重要。重要的是栗树还在、房子还在、你也还在。名字是循环——但爱不是。给他任何一个名字——然后给他你全部的守护。', nextScene:'ch18_r2a', requiredBond: { min: 4 }, effects:{ tags:['超越名字的人'], memory:null, fate: 0, bond: 2 } }
    ], settlement:'ch18_r2_settlement' },
    ch18_r2a: { id:'ch18_r2a', type:'narrative', chapter:18, round:2, title:'传统维护者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你给他取名叫奥雷里亚诺——像你，像上校，像所有曾祖父之前的曾祖父。阿玛兰妲·乌尔苏拉点了点头。"奥雷里亚诺。"她说，这几个字从她嘴里出来的时候带着笑。你不知道这个奥雷里亚诺会不会也发动三十二场起义——还是他会做一条金鱼。']}, choices:null, nextScene:'ch18_r2_settlement' },
    ch18_r2b: { id:'ch18_r2b', type:'narrative', chapter:18, round:2, title:'致敬者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你给他取名叫何塞·阿尔卡蒂奥——像栗树下的老人。老人听见这个名字的时候——动了一下手指。也许他听懂了。也许他只是碰巧——但你在那一刻觉得，这条已经快要断掉的链子在两端的名字之间被拉紧了一点。']}, choices:null, nextScene:'ch18_r2_settlement' },
    ch18_r2c: { id:'ch18_r2c', type:'narrative', chapter:18, round:2, title:'革新者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你给他取了一个全新的名字——不像任何布恩迪亚。阿玛兰妲·乌尔苏拉惊讶了一下——然后笑了。"它好听。"她说。栗树下的老人没有反应——他从来不知道这个名字。也许这样更好。']}, choices:null, nextScene:'ch18_r2_settlement' },
    ch18_r2_settlement: { id:'ch18_r2_settlement', type:'settlement', chapter:18, round:2, title:'第二轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['孩子有了名字——不管是什么名字，他都是布恩迪亚家谱上的最后一个名字。走廊里的风突然停了——世界在等待。']}, settlement:{ summary:'第二轮完成。你给最后一个布恩迪亚起了名字。', nextScene:'ch18_r3_choice', nextLabel:'进入第三轮' } },

    ch18_r3_choice: { id:'ch18_r3_choice', type:'choice', chapter:18, round:3, title:'第三轮选择 · 阿玛兰妲·乌尔苏拉之死', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['分娩顺利——但第二天阿玛兰妲·乌尔苏拉开始流血。不是普通的那种——是止不住的那种。她的脸色越来越白——像羊皮纸。','她没有喊——她很安静。她看着天花板——看着那些裂缝——她说："我终于明白了——为什么乌尔苏拉在失明之前一直擦墙壁。"她的嘴唇在动，但声音越来越轻。'], transition:'你选择——' }, choices:[
      { id:'ch18_r3_a', label:'守在她身边——不走开', description:'你没有放手。她的手指越来越冷——但你一直握着。她走的时候不是一个人。', nextScene:'ch18_r3a', effects:{ tags:['不离不弃者'], memory:'最后的诀别', fate: -1, bond: 2 } },
      { id:'ch18_r3_b', label:'去找药——哪怕希望渺茫', description:'你不能眼睁睁看着她走。跑去河对岸——也许废弃的香蕉公司医院里还有止血的药。', nextScene:'ch18_r3b', effects:{ tags:['最后的努力者'], memory:null, fate: 1, bond: 0 } },
      { id:'ch18_r3_c', label:'把婴孩放在她怀里', description:'让她最后一次抱着孩子离开。让她的最后一刻是作为一个母亲——而不是一个流血的女人。', nextScene:'ch18_r3c', effects:{ tags:['慈悲者'], memory:'怀抱中的离去', fate: 0, bond: 2 } },
      { id:'ch18_r3_d', label:'你看见了循环——她的离开不是终结', description:'阿玛兰妲·乌尔苏拉走了——但羊皮卷说循环会继续。你看见了：她的孩子就是下一行。死亡不是句号——是换行。你抱起孩子——继续读。', nextScene:'ch18_r3a', requiredFate: { min: 4 }, effects:{ tags:['看见换行的人'], memory:null, fate: 1, bond: 0 } }
    ], settlement:'ch18_r3_settlement' },
    ch18_r3a: { id:'ch18_r3a', type:'narrative', chapter:18, round:3, title:'不离不弃者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你握着她的手——她的手指在你掌心里变冷。她的眼睛还睁着——但不是在看天花板了，是在看你。她笑了一下——很轻——然后她的手指松开了。你不知道她最后看见了什么——也许是你，也许是栗树下的老人，也许是她小时候在后院里追着的那只蝴蝶。']}, choices:null, nextScene:'ch18_r3_settlement' },
    ch18_r3b: { id:'ch18_r3b', type:'narrative', chapter:18, round:3, title:'最后的努力者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你跑出去——马孔多的街道在你脚下像一条陌生的河流。你找到了废弃的医院——药柜是空的。你跑回来的时候——她已经走了。她床边是空的——但她的手还放在床沿，像是在等你回来把药递给她。你没有药——你只有你的眼泪。你把它们放进她的手心里——代替那些不存在的药。']}, choices:null, nextScene:'ch18_r3_settlement' },
    ch18_r3c: { id:'ch18_r3c', type:'narrative', chapter:18, round:3, title:'慈悲者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你把孩子放在她怀里。她的眼睛亮了一点——她用最后的力气把孩子抱紧了。她的嘴唇贴着孩子的额头——她说了什么，但声音太轻了。也许是"对不起"——也许是"我爱你"。孩子感觉到了什么——他停止了啼哭。她闭上了眼睛——带着孩子的心跳在她胸前缓缓停止。']}, choices:null, nextScene:'ch18_r3_settlement' },
    ch18_r3_settlement: { id:'ch18_r3_settlement', type:'settlement', chapter:18, round:3, title:'第三轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['阿玛兰妲·乌尔苏拉死了。在你怀里，或在药瓶的空响中，或在孩子的呼吸里。她走了——像这个家族所有女人一样：坚强，安静，在最后时刻给予。']}, settlement:{ summary:'第三轮完成。她走了——以你选择的方式。', nextScene:'ch18_r4_choice', nextLabel:'进入最终轮' } },

    ch18_r4_choice: { id:'ch18_r4_choice', type:'choice', chapter:18, round:4, title:'第四轮选择 · 独自面对', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['现在只剩下你和孩子了。栗树下的老人不算数——他已经不再属于这个世界了。房子里很安静——安静到你能听见蚂蚁在墙壁里行军的声音。','你抱着孩子——他正在哭。你不知道该如何做一个父亲——你是被费尔南达锁大的，你从来没有看过一个真正的父亲应该是什么样。但你看着这个婴儿——看着他粉红色的脸——你想起了你在羊皮卷里读到的东西。'], transition:'你选择——' }, choices:[
      { id:'ch18_r4_a', label:'接受——独自抚养他', description:'你可能是最后一个布恩迪亚了——但你不是一个人。把孩子养大——哪怕世界在倒塌。', nextScene:'ch18_r4a', effects:{ tags:['父亲'], memory:null, fate: -1, bond: 2 } },
      { id:'ch18_r4_b', label:'哭泣——释放悲伤', description:'你不装坚强。你坐在她刚刚离开的床边——抱着孩子——哭了出来。', nextScene:'ch18_r4b', effects:{ tags:['允许悲痛者'], memory:null, fate: 0, bond: 0 } },
      { id:'ch18_r4_c', label:'继续翻译——用工作麻痹自己', description:'你不能停下来。羊皮卷还剩下最后一页——你需要读完它。哪怕只是为了让自己不要想到她。', nextScene:'ch18_r4c', effects:{ tags:['逃避者'], memory:null, fate: 2, bond: -1 } },
      { id:'ch18_r4_d', label:'你签过处决令——现在你握着一个新生命', description:'你的手签过处决令——现在这双手抱起了一个婴儿。不是赎罪——是提醒：同一双手，可以用来终结，也可以用来开始。', nextScene:'ch18_r4a', requiredFlag: { flag: 'signed_death', min: 1 }, effects:{ tags:['曾被权力标记的人'], memory:null, fate: -1, bond: 2 } },
      { id:'ch18_r4_e', label:'你从灰烬中看见了字——把它们重新写下来', description:'你烧过羊皮卷——但灰烬里的字并没有消失。它们在火光中变得更亮了——像梅尔基亚德斯在对你眨眼睛。重新拿起笔——从灰烬中抄写那些没有被烧掉的句子。', nextScene:'ch18_r4a', requiredMemory: '灰烬中的字', effects:{ tags:['从灰烬中抄写的人'], memory:null, fate: 1, bond: 0 } }
    ], settlement:'ch18_r4_settlement' },
    ch18_r4a: { id:'ch18_r4a', type:'narrative', chapter:18, round:4, title:'父亲', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你站起来——抱着孩子。你不知道怎么换尿布，不知道喂什么，不知道他为什么一直哭。但你知道一件事：你不会把他锁起来。你不会骗他说他是"捡来的"。你不会做费尔南达做过的事。他会在阳光下长大——哪怕这是马孔多最后的阳光。']}, choices:null, nextScene:'ch18_r4_settlement' },
    ch18_r4b: { id:'ch18_r4b', type:'narrative', chapter:18, round:4, title:'允许悲痛者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你哭了。不是布恩迪亚式的沉默的眼泪——是嚎啕。孩子在你的怀里被你哭声惊吓到了——但他停了下来，用手摸你的脸。他的手很小——比蚂蚁还小。他的手放在你湿了的脸上——你不知道他在想什么，但他不再哭了。也许他理解——也许他只是在把你当成一块会颤抖的木头。']}, choices:null, nextScene:'ch18_r4_settlement' },
    ch18_r4c: { id:'ch18_r4c', type:'narrative', chapter:18, round:4, title:'逃避者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你走进了梅尔基亚德斯的房间——把孩子放在旁边的摇篮里。你翻开羊皮卷——最后一页在等着。你强迫你的眼睛看着那些扭曲的字迹——不去想她，不去想刚才发生的事。羊皮卷不会让你逃避——它在你的眼下越来越清晰。你没有办法不读完——因为你就是它写的那个最后的人。']}, choices:null, nextScene:'ch18_r4_settlement' },
    ch18_r4_settlement: { id:'ch18_r4_settlement', type:'settlement', chapter:18, round:4, title:'第四轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['你一个人了——但你不是一个人。孩子在摇篮里——呼吸均匀。栗树下的老人还在画圆圈。蚂蚁在墙里行军——它们的脚步声很轻，但它们在靠近。']}, settlement:{ summary:'第四轮完成。你在废墟中面对了独自一人的生活。', nextScene:'chapter18_end', nextLabel:'查看章末结算' } },
    chapter18_end: { id:'chapter18_end', type:'settlement', chapter:18, round:5, title:'第十八章 · 章末结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['第十八章完结。阿玛兰妲·乌尔苏拉走了——最后一个布恩迪亚孩子诞生了。','蚂蚁正在爬向摇篮——它们还没有到达。但羊皮卷说：它们会来的。']}, settlement:{ summary:'第十八章完结。生命与死亡同在——家族的最后时刻将至。', isChapterEnd:true, nextLabel:'进入第十九章 · 毁灭、蚂蚁、飓风', quadrantNarratives: { guardian: '最后一个布恩迪亚在摇篮里——你还不知道他的名字。你只知道他的姓氏。就够了。', prophet: '你看见了结局——蚂蚁已经在地板下排队了。你知道会发生什么——但你没有阻止。不是冷漠——是理解。', follower: '你守在摇篮边——即使知道结局。不是因为你认为你能改变它——是因为你想让这个孩子在消失之前被看着。', rebel: '你抱起婴儿——想跑。但马孔多的边界已经收缩到只有这所房子。你跑不出去——但你可以选择抱得更紧一点。' } } }
  },
  memories: {
    '最后的诀别': { id:'最后的诀别', title:'最后的诀别', description:'你握着她的手——她的手指松开了。她笑了——很轻。你不知道她最后看见了什么。', chapter:18 },
    '怀抱中的离去': { id:'怀抱中的离去', title:'怀抱中的离去', description:'你把孩子放在她怀里。她用最后的力气抱紧了他——然后闭上了眼睛。', chapter:18 }
  },
  familyMembers: []
});

/* ================================================================
   第十九章 · 毁灭、蚂蚁、飓风
   ================================================================ */
registerChapter({
  id: 'chapter19', title: '第十九章 · 毁灭、蚂蚁、飓风',
  initialScene: 'ch19_opening', possessedCharacter: '奥雷里亚诺（终极视角）', chapterNumber: 19,
  preview: '<p>第二十章 · 百年孤独的终局</p><p style="margin-top:8px;">你不再附身于任何人——</p><p>你成为了意识的重量本身。</p>',
  nextLabel: '进入第二十章 · 百年孤独的终局',
  scenes: {
    ch19_opening: { id:'ch19_opening', type:'narrative', chapter:19, round:0, title:'蚂蚁的行军', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你听到的声音不是风声——是比风声更细、更密的，无数只微小的脚爪同时摩擦地板的声音。','你低头——走廊的地砖上有一条红色的线在移动。不是血——是蚂蚁。成千上万的蚂蚁排成队列，从墙缝里涌出来，穿过走廊，爬向摇篮。你知道它们要去哪里——你读过这行字。','孩子在摇篮里睡觉。他还不知道——他的名字在羊皮卷的最后一页上。'], clues: [{ triggerText: '蚂蚁', itemId: 'ant_trail', narrative: '你蹲下来——蚂蚁排成一列，正在搬运一块比它们每个都大的白色碎屑。你不知道那是什么——你不想知道。蚂蚁不会停——它们按照羊皮卷上写好的路线行进。你看着它们——看了很久。然后你站起来——走向摇篮。', unlocksIn: ['epilogue'] }] }, echoText: '风起了——不是从窗外，是从羊皮卷的第一页吹来的。你知道这是什么风——梅尔基亚德斯在第一行就写下了这场飓风。他一直在等这一页被翻开。', choices:null, nextScene:'ch19_explore' },

    ch19_explore: {
      id: 'ch19_explore', type: 'exploration', chapter: 19, round: 0,
      title: '探索 · 飓风中的房子',
      leftPage: {
        speaker: '旁白', speakerColor: '#4a2a18',
        paragraphs: [
          '布恩迪亚家宅在风中呻吟。墙灰像雪一样从天花板上剥落，门在铰链上来回撞击——没有节奏，像垂死的心跳。',
          '蚂蚁的队伍已经穿过了走廊。但在它们带走孩子之前——这所房子还有最后几件东西想让你看见。最后一间时间不会流逝的房间、最后一个空摇篮、最后一扇窗外——马孔多还没有完全消失。',
          '触碰这所房子里最后的记忆——在你合上羊皮卷之前。'
        ]
      },
      hotspots: [
        { id: 'hs_ants', label: '蚂蚁的行军路线', position: { x: '60%', y: '70%' }, narrative: '你顺着蚂蚁的路线往回走——它们从墙角的裂缝里出来，穿过走廊、穿过门槛、穿过那个很多年没打开过的柜子。它们的队列里有什么东西——白色的、软的。你不敢仔细看。但你蹲下来——不是阻止它们，是目送它们。这是羊皮卷写好的最后一段路——你想亲眼看着它走完。', discoveredText: '你跟着蚂蚁走完了最后一段路。' },
        { id: 'hs_melquiades_room', label: '梅尔基亚德斯的房间', position: { x: '25%', y: '25%' }, narrative: '这间房间的时间不流逝——是你最后的庇护所。羊皮卷还摊在桌上，翻到最后一页。墨水瓶里的墨水没有干——好像老人刚刚出去，马上就会回来。你摸了摸椅背——是温的。不是真的温——是你希望它是温的。这间房间从建村的第一年就在这里等你了。现在它等到了。', discoveredText: '你走进了那间时间不流逝的房间。' },
        { id: 'hs_cradle', label: '破碎的摇篮', position: { x: '50%', y: '45%' }, narrative: '摇篮空了。襁褓掉在地上——绣着布恩迪亚家徽的那块。它从来没有被用过。不——它被用了一百年。从第一个孩子到最后一个——每一个布恩迪亚都在这个摇篮里睡过。但这一次——这一次蚂蚁来得比母亲的手更快。你弯下腰——把襁褓叠好。你做不到更多——但你可以把最后一件布恩迪亚的衣服叠整齐。', discoveredText: '你叠好了最后一块襁褓。' },
        { id: 'hs_window', label: '窗外——初代马孔多', position: { x: '85%', y: '15%' }, narrative: '窗外是飓风。但如果你仔细看——在风眼里，你能看见二十多间芦竹房子，沿河岸排开。那是初代马孔多。一个年轻的男人扛着两块磁铁走向河边。一个年轻的女人双手叉腰站在门口。河对岸的吉卜赛帐篷还在——没有变旧，没有腐烂。风眼里没有时间——初代马孔多永远在开始。飓风不是结束——是让一切回到开始。', discoveredText: '你在风眼里看见了初代马孔多。' }
      ],
      requiredDiscoveries: 3,
      nextScene: 'ch19_r1_choice'
    },

    ch19_r1_choice: { id:'ch19_r1_choice', type:'choice', chapter:19, round:1, title:'第一轮选择 · 蚂蚁与孩子', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['蚂蚁爬上了摇篮。它们不是要吃孩子——它们是来带走他。因为羊皮卷写好了：最后一个布恩迪亚会被蚂蚁带走。','你看见了——红线在白色的床单上延伸。孩子还在睡。他是无辜的——他只是生在了错误的家，错误的时间，错误的羊皮卷页上。'], transition:'你选择——' }, choices:[
      { id:'ch19_r1_a', label:'赶走蚂蚁——保护孩子', description:'预言说他会死——但你不接受。用手拍，用水冲，用火烧——不管用什么方法，赶走它们。', nextScene:'ch19_r1a', effects:{ tags:['反抗预言者'], memory:null, fate: 1, bond: 1 } },
      { id:'ch19_r1_b', label:'抱起孩子——逃跑', description:'离开这所房子。离开马孔多。如果预言只适用于这里——那就带着他离开这里。', nextScene:'ch19_r1b', effects:{ tags:['逃亡者'], memory:null, fate: 2, bond: -1 } },
      { id:'ch19_r1_c', label:'站着——看着预言实现', description:'你伸出手——但你的手停住了。也许有些预言不应该被阻止。也许阻止它会让更糟的事情发生。', nextScene:'ch19_r1c', effects:{ tags:['见证者'], memory:'蚂蚁带走的孩子', fate: -1, bond: 2 } },
      { id:'ch19_r1_d', label:'你见过香蕉公司的印章——知道谁该为这一切负责', description:'铁质印章上的字已经锈了——但"联合果品公司"还隐约可辨。你知道蚂蚁只是执行者——真正开始这一切的，是那枚印章在合同上落下的那一刻。', nextScene:'ch19_r1a', requiredClue: 'banana_company_seal', effects:{ tags:['印章的控诉者'], memory:null, fate: 2, bond: -1 } }
    ], settlement:'ch19_r1_settlement' },
    ch19_r1a: { id:'ch19_r1a', type:'narrative', chapter:19, round:1, title:'反抗预言者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你扑向摇篮——用手掌拍打蚂蚁。但蚂蚁没有减少——它们从你手指间的缝隙穿过，像水穿过渔网。你的手变红了——不是血，是蚂蚁。你大喊——声音在空房子里回荡。但蚂蚁不停——它们从来不会停。预言不是靠数量来执行的——是靠不可阻挡。']}, choices:null, nextScene:'ch19_r1_settlement' },
    ch19_r1b: { id:'ch19_r1b', type:'narrative', chapter:19, round:1, title:'逃亡者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你抱起孩子跑出房子——穿过走廊，穿过院子，穿过栗树下。老人抬起头——他没有说话，但他看着你抱着孩子的样子，好像他年轻时也曾这样抱着某人。你跑向马孔多的尽头——但你发现蚂蚁已经在街道上等着了。不管你去哪里——它们已经到了。']}, choices:null, nextScene:'ch19_r1_settlement' },
    ch19_r1c: { id:'ch19_r1c', type:'narrative', chapter:19, round:1, title:'见证者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你站着——看着。那不是残忍——是一种超越了感情的接受。蚂蚁爬过床单——它们轻轻地抱起孩子，像抱着一件最轻的、最珍贵的收藏品。孩子没有哭——也许他在梦里，在看见一个没有蚂蚁的、他从未去过的世界。当你再低头时——摇篮空了。蚂蚁带走了他。地上只剩下一条渐渐消失的红线。']}, choices:null, nextScene:'ch19_r1_settlement' },
    ch19_r1_settlement: { id:'ch19_r1_settlement', type:'settlement', chapter:19, round:1, title:'第一轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['孩子被蚂蚁带走了——或没有被带走。但摇篮空了。走廊里只有风的回声——和那个正在被翻到最后一页的羊皮卷。']}, settlement:{ summary:'第一轮完成。最后一个布恩迪亚孩子——被蚂蚁带走了。', nextScene:'ch19_r2_choice', nextLabel:'进入第二轮' } },

    ch19_r2_choice: { id:'ch19_r2_choice', type:'choice', chapter:19, round:2, title:'第二轮选择 · 飓风来临', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['风来了——不是微风，是飓风。它从东北方向来——从香蕉公司曾经喷吐蒸汽的那个方向。天空变成了一片浑浊的黄色——像梅尔基亚德斯的羊皮纸。','窗子被吹飞了——不是一扇一扇，是所有窗子同时飞出去。墙上的石灰像雪花一样飘落。栗树在风中剧烈摇晃——老人没有动，他还在画圆圈。他画的那个最大的圆圈——也许是为这阵风准备的。','马孔多正在被抹去——不是被敌人，不是被时间——是被风。被一种早在建村之前就已经写好的风。'], transition:'你选择——' }, choices:[
      { id:'ch19_r2_a', label:'回到梅尔基亚德斯的房间——读完羊皮卷', description:'在对的地方，读对的东西。在那间时间不会流逝的房间里——把你的故事读完。', nextScene:'ch19_r2a', effects:{ tags:['最后的读者'], memory:null, fate: 2, bond: 0 } },
      { id:'ch19_r2_b', label:'跑出房子——看马孔多最后一眼', description:'如果一切都要消失——至少你的眼睛可以见证。跑出去，站在街道上——看看这个小镇最后的样子。', nextScene:'ch19_r2b', effects:{ tags:['最后的眺望者'], memory:'马孔多的最后一瞥', fate: 0, bond: 1 } },
      { id:'ch19_r2_c', label:'站在栗树下——和始祖一起等待', description:'走到栗树下——坐在老人旁边。他是第一个，你是最后一个。一起等待风把你们两人都带走。', nextScene:'ch19_r2c', effects:{ tags:['循环的闭合者'], memory:null, fate: -1, bond: 2 } },
      { id:'ch19_r2_d', label:'你感受到了风的重量——那不是风，是百年', description:'晾床单的绳子还在晃。风带走了她——也带走了所有人。但你知道：风不是结束。风只是把故事从一个地方搬到了另一个地方。', nextScene:'ch19_r2b', requiredClue: 'weight_of_wind', effects:{ tags:['感受风的人'], memory:null, fate: 0, bond: 1 } }
    ], settlement:'ch19_r2_settlement' },
    ch19_r2a: { id:'ch19_r2a', type:'narrative', chapter:19, round:2, title:'最后的读者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你走回梅尔基亚德斯的房间——风在外面咆哮，但这间房间里是安静的。你翻开羊皮卷最后一页——你读到的不是字，是画面。你看见了你自己——坐在这间房间里，在这一刻，读着这页纸。你明白了：这卷纸上写的最后一个故事——就是"你在读这卷纸"这件事。故事的主角不是布恩迪亚——故事的主角是阅读本身。']}, choices:null, nextScene:'ch19_r2_settlement' },
    ch19_r2b: { id:'ch19_r2b', type:'narrative', chapter:19, round:2, title:'最后的眺望者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你推开大门——风几乎把你吹倒。街上什么都没有了——屋子一间一间地在风中像纸牌一样折叠。你可以看见马孔多的尽头——那座教堂，那个广场，那些曾经摆过磁铁和放大镜的帐篷位置。它们都在风中解体——不是被吹走，是被抹去。像黑板上的字——擦了就没有了。']}, choices:null, nextScene:'ch19_r2_settlement' },
    ch19_r2c: { id:'ch19_r2c', type:'narrative', chapter:19, round:2, title:'循环的闭合者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你走到栗树下。老人抬起头——他的眼睛在风里是闭着的。你坐在他身边——你们的肩膀几乎碰上了。风在你们耳边呼啸——但他继续画他的圆圈，你继续数你的呼吸。你不是在等死——你是在完成一个圆圈。第一个布恩迪亚和最后一个布恩迪亚，被同一阵风，在同一个地方，以同一种安静——收进同一页纸里。']}, choices:null, nextScene:'ch19_r2_settlement' },
    ch19_r2_settlement: { id:'ch19_r2_settlement', type:'settlement', chapter:19, round:2, title:'第二轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['飓风在席卷马孔多——房子一间间倒塌，街道一条条消失。但梅尔基亚德斯的房间还没有倒——不是因为它更坚固，是因为它的时间还没有到。']}, settlement:{ summary:'第二轮完成。你选择了面对飓风的方式。', nextScene:'ch19_r3_choice', nextLabel:'进入最终轮' } },

    ch19_r3_choice: { id:'ch19_r3_choice', type:'choice', chapter:19, round:3, title:'第三轮选择 · 最后的时刻', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['羊皮卷上最后的文字在你眼前成形。你不需要读了——你已经知道。","注定要一百年孤独的家族不会有第二次机会在大地上出现。","风在房子外面咆哮——墙壁正在被剥掉。你没有多少时间了。','你在这间时间不会流逝的房间里——在读着这最后一页。当你读完最后一行字的那一刻——这间房间的时间会和外面的时间对齐。然后风会进来——然后一切都会结束。'], transition:'你选择——' }, choices:[
      { id:'ch19_r3_a', label:'读完最后一行——接受结束', description:'你有勇气开始——你也有勇气结束。读完它。让风来做它该做的事。', nextScene:'ch19_r3a', effects:{ tags:['完成者'], memory:null, fate: 1, bond: 0 } },
      { id:'ch19_r3_b', label:'闭上眼睛——不读最后一行', description:'也许不读完——故事就不会结束。也许最后一个字永远不被读到的故事可以永远活下去。', nextScene:'ch19_r3b', effects:{ tags:['永恒的悬念'], memory:'未完的最后一行', fate: 0, bond: -1} },
      { id:'ch19_r3_c', label:'在羊皮卷末尾写下自己的名字', description:'你不是只被预言——你也可以预言。拿起梅尔基亚德斯的鹅毛笔——在羊皮卷末尾加上一个词。', nextScene:'ch19_r3c', effects:{ tags:['续写者'], memory:'自己写下的名字', fate: 2, bond: 0 } },
      { id:'ch19_r3_d', label:'你独自站在飓风中——不需要任何人的手', description:'飓风来了。你一个人站在马孔多的废墟中央——不是被抛弃，是选择独自面对。有些终结不需要陪伴——它们需要完整的清醒。', nextScene:'ch19_r3a', requiredBond: { max: 2 }, effects:{ tags:['独自面对飓风的人'], memory:null, fate: 1, bond: -2 } },
      { id:'ch19_r3_e', label:'你记得狂欢节的血——在飓风中喊出那些名字', description:'狂欢节那天你没有忘记——你发誓不忘记。现在飓风要抹去一切——但你在风眼中站起来，一个一个喊出他们的名字。三千人——他们听见了。', nextScene:'ch19_r3a', requiredFlag: { flag: 'remembered_carnival', min: 1 }, effects:{ tags:['在飓风中喊名字的人'], memory:null, fate: 2, bond: 0 } }
    ], settlement:'ch19_r3_settlement' },
    ch19_r3a: { id:'ch19_r3a', type:'narrative', chapter:19, round:3, title:'完成者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你读完了最后一行。句子在你脑海里回荡——像一声钟响。风找到你的时候——你已经准备好了。房间里的时间第一次开始流动——灰尘开始落下，墙皮开始剥落。你把羊皮卷抱在怀里——它在你胸前散成碎片。不是风撕的——是它完成了自己的使命。']}, choices:null, nextScene:'ch19_r3_settlement' },
    ch19_r3b: { id:'ch19_r3b', type:'narrative', chapter:19, round:3, title:'永恒的悬念', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你停在了最后一个句号之前。手指放在最后一行字上——没有读。你感觉到风在等待——它在等你的眼睛扫完这最后一行。你笑了笑——然后把羊皮卷合上了。你不知道它写的是什么——但你知道：你让它永远不会发生。只要不被读完，故事就不会结束。你在暴风眼中找到了自己的永恒。']}, choices:null, nextScene:'ch19_r3_settlement' },
    ch19_r3c: { id:'ch19_r3c', type:'narrative', chapter:19, round:3, title:'续写者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你拿起梅尔基亚德斯的鹅毛笔——它在你的指间是温热的，像刚刚被用过。你在羊皮卷的最后写下了你的名字——不是奥雷里亚诺，不是布恩迪亚——是你给自己选的名字。一个不属于任何家族的名字。你放下笔——墨水在风中被吹干，但名字已经刻进了羊皮纸的纤维里。你不是预言的对象——你是合作者。']}, choices:null, nextScene:'ch19_r3_settlement' },
    ch19_r3_settlement: { id:'ch19_r3_settlement', type:'settlement', chapter:19, round:3, title:'最终轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['羊皮卷读完了——或没有。风把马孔多从地图上抹去了——但有一个布恩迪亚在废墟中坐着，手里握着一页纸。他不确定自己是否还在——但他感觉到了一种从未有过的轻盈。']}, settlement:{ summary:'最终轮完成。马孔多被飓风抹去了——但你还在，以某种方式。', nextScene:'chapter19_end', nextLabel:'查看章末结算' } },
    chapter19_end: { id:'chapter19_end', type:'settlement', chapter:19, round:4, title:'第十九章 · 章末结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['第十九章完结。马孔多消失了——布恩迪亚家族消失了。蚂蚁完成了它们的使命，飓风完成了它的。','但羊皮卷的最后一页——还停留在你眼睛停下的那个字上。只要你没有读完它——马孔多就在某处，继续活着。']}, settlement:{ summary:'第十九章完结。飓风带走了马孔多——但故事也许还没有结束。', isChapterEnd:true, nextLabel:'进入第二十章 · 百年孤独的终局', quadrantNarratives: { guardian: '飓风来了——准时得像一个约会。你站在风中——不是被抓走的，是自己站进去的。', prophet: '你看着马孔多被抹去——像梅尔基亚德斯写的那样。你不是被飓风带走的——你是和飓风一起离开的。', follower: '你牵着那些你爱的人——在风中站在一起。风可以把房子吹走——但它吹不走牵着的手。', rebel: '你与飓风搏斗——用身体，用记忆，用你知道的每一个名字。最后你输了——但你让风花了整整一百页才把你带走。' } } }
  },
  memories: {
    '蚂蚁带走的孩子': { id:'蚂蚁带走的孩子', title:'蚂蚁带走的孩子', description:'你站着看着。蚂蚁轻轻抱起孩子——像抱着一件最珍贵的收藏品。摇篮空了——地上只剩一条红线。', chapter:19 },
    '马孔多的最后一瞥': { id:'马孔多的最后一瞥', title:'马孔多的最后一瞥', description:'你站在街道上——屋子一间间在风中像纸牌一样折叠。马孔多在解体——像黑板上的字被擦掉。', chapter:19 },
    '未完的最后一行': { id:'未完的最后一行', title:'未完的最后一行', description:'你停在了最后一个句号之前。只要不被读完——故事就不会结束。在暴风眼中找到了永恒。', chapter:19 },
    '自己写下的名字': { id:'自己写下的名字', title:'自己写下的名字', description:'你拿起鹅毛笔——在羊皮卷末尾写下了你的名字。不是预言的对象——是合作者。', chapter:19 }
  },
  familyMembers: []
});

/* ================================================================
   第二十章 · 百年孤独的终局
   ================================================================ */
registerChapter({
  id: 'chapter20', title: '第二十章 · 百年孤独的终局',
  initialScene: 'ch20_opening', possessedCharacter: '不再附身——意识的重量', chapterNumber: 20,
  preview: '<p>终章 · 羊皮卷的见证者</p><p style="margin-top:8px;">羊皮卷翻到了最后一页——</p><p>梅尔基亚德斯在等你。</p>',
  nextLabel: '进入终章 · 羊皮卷的见证者',
  scenes: {
    ch20_opening: { id:'ch20_opening', type:'narrative', chapter:20, round:0, title:'虚无中的回响', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['没有地点。没有时间。你只是感知。','你感知不到你的身体——你不再有手去触摸冰块，不再有耳朵去听雨声，不再有嘴唇去尝她煮得太苦的咖啡。你只剩一个没有边界的意识，悬浮在一片灰白的光中。','但你还记得。磁铁。放大镜。栗树。冰。你记得每一个选择，每一个标签，每一个在走廊的阴影里站着的夜晚。那些记忆不依附于一个名字——它们自己就是名字。你的名字。'], clues: [{ triggerText: '栗树', itemId: 'circle_on_tree', narrative: '树干上刻着一个完美的圆——没有起点，没有终点。你不知道是谁刻的——也许是你，也许是何塞·阿尔卡蒂奥·布恩迪亚在绑在树上的某个下午。圆的里面是空的——那是留给你的位置。', unlocksIn: ['epilogue'] }] }, choices:null, nextScene:'ch20_r1_choice' },

    ch20_r1_choice: { id:'ch20_r1_choice', type:'choice', chapter:20, round:1, title:'第一轮选择 · 记忆的重量', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你感到你的记忆在涌出来——不是作为文字，是作为画面。它们从你的意识中升起，像气泡一样漂浮在你周围。','你看见何塞·阿尔卡蒂奥·布恩迪亚蹲在地上，手里握着两块磁铁。你看见乌尔苏拉在厨房里揉面。你看见奥雷里亚诺上校站在行刑队的墙前——他没有蒙眼。你看见阿玛兰妲缝着她的裹尸布。你看见梅梅的蝴蝶，三千人的火车，四年的大雨，美人升天——最后你看见了自己。你坐在一个屏幕前——你的手还在键盘上。'], transition:'你选择——' }, choices:[
      { id:'ch20_r1_a', label:'拥抱全部记忆——轻或重都要', description:'这些不是负担——是你存在过的证据。把它们全部收进心里——连同那些最痛的。', nextScene:'ch20_r1a', effects:{ tags:['全盘接受者'], memory:null, fate: 1, bond: 1 } },
      { id:'ch20_r1_b', label:'选择留下温暖的部分', description:'让那些最痛的记忆离去——只留下让你微笑的。你不欠那些痛苦——你可以选择放下。', nextScene:'ch20_r1b', effects:{ tags:['选择记忆者'], memory:null, fate: -1, bond: 0 } },
      { id:'ch20_r1_c', label:'放手——全部忘记', description:'一百年的孤独已经够了。放下一切——让自己变轻。你不是记忆的囚徒。', nextScene:'ch20_r1c', effects:{ tags:['释放者'], memory:null, fate: 0, bond: 1 } }
    ], settlement:'ch20_r1_settlement' },
    ch20_r1a: { id:'ch20_r1a', type:'narrative', chapter:20, round:1, title:'全盘接受者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你张开双臂——所有的画面涌入你体内。不只是一百年——是整个人类用记忆建造的大教堂。你感到沉重——但沉重不是坏事。你没有坠落——你停在了空中，因为你承载的重量刚好等于你能承担的全部——不多不少。']}, choices:null, nextScene:'ch20_r1_settlement' },
    ch20_r1b: { id:'ch20_r1b', type:'narrative', chapter:20, round:1, title:'选择记忆者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你选出了最亮的那些——冰块的下午，乌尔苏拉的汤，蕾梅黛丝升天时的床单，阿玛兰妲·乌尔苏拉推开门的那一刻。那些暗的——你让它们漂走了。它们沉入灰色的光里——你知道它们还在某处，但它们不再属于你了。']}, choices:null, nextScene:'ch20_r1_settlement' },
    ch20_r1c: { id:'ch20_r1c', type:'narrative', chapter:20, round:1, title:'释放者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你放手了。一百年的记忆从你身上滑落——像冰块在阳光下融化。你感到自己变轻——变成一缕刚刚形成的风，还没有决定要往哪个方向吹。没有名字，没有历史，没有孤独。只有纯粹的、未经雕琢的自由。']}, choices:null, nextScene:'ch20_r1_settlement' },
    ch20_r1_settlement: { id:'ch20_r1_settlement', type:'settlement', chapter:20, round:1, title:'第一轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['记忆——这个家族最重的遗产——在你手中变成了你可以选择保留或放下的东西。你不是被记忆控制的。你是控制记忆的人。']}, settlement:{ summary:'第一轮完成。你选择了记忆的重量。', nextScene:'ch20_r2_choice', nextLabel:'进入最终轮' } },

    ch20_r2_choice: { id:'ch20_r2_choice', type:'choice', chapter:20, round:2, title:'第二轮选择 · 永恒的回归', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['一片安静的白色。不是羊皮纸的白——是某种更深沉的、包含了所有颜色的白。你感觉有一个人在你身后——不是梅尔基亚德斯。是你自己。','你回头——你看见了：那个在屏幕上握着鼠标或手指悬在键盘上的人。那人就是你——从故事开始之前就在阅读的你。你们面对面看着——读者和被写入书中的灵魂。你已经分不清谁是创造者，谁是被创造的了。也许从来就分不清。'], transition:'你选择——' }, choices:[
      { id:'ch20_r2_a', label:'合上书——带着那些故事继续生活', description:'故事已经讲完了——但你还活着。合上它，站起来，走进你自己的生活里。带着所有布恩迪亚在你身上留下的痕迹。', nextScene:'ch20_r2a', effects:{ tags:['回归者'], memory:null, fate: 0, bond: 1 } },
      { id:'ch20_r2_b', label:'再读一遍——从另一个入口', description:'回到序章——从另一个时代重新开始。看看如果你选择了另一条路，这个家族会不会有不同的结局。', nextScene:'ch20_r2b', effects:{ tags:['循环者'], memory:null, fate: 1, bond: 0 } },
      { id:'ch20_r2_c', label:'写下你自己的开始', description:'不要合上书——打开一页空白的纸，写下你自己的故事。不是布恩迪亚的——是你自己的。', nextScene:'ch20_r2c', effects:{ tags:['创作者'], memory:'空白的第一页', fate: 2, bond: 0} },
      { id:'ch20_r2_d', label:'乌尔苏拉的汤还在灶上——合上书，去喝一碗', description:'你穿越了整个百年——从冰块到飓风，从第一页到最后一页。但乌尔苏拉的厨房从未熄灭过炉火。放下羊皮卷——那碗汤已经热了一百年了。', nextScene:'ch20_r2a', requiredRelationship: { character: '乌尔苏拉·伊瓜兰', min: 90 }, effects:{ tags:['回到灶边的人'], memory:null, fate: 0, bond: 2 } },
      { id:'ch20_r2_e', label:'你不是第一次合上这本书——但这一次，你知道合上之后是什么', description:'上一次合上书时你感到的是一种终结。这一次你知道：合上不是结束——是留白。空白的第一页一直在等你——它从来都不是空白的。它一直在等你写第一行。', nextScene:'ch20_r2c', requiredPlaythrough: 2, effects:{ tags:['知道合上之后是什么的人'], memory:null, fate: 1, bond: 0 } }
    ], settlement:'ch20_r2_settlement' },
    ch20_r2a: { id:'ch20_r2a', type:'narrative', chapter:20, round:2, title:'回归者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你合上了羊皮卷。也许只是一本书，也许是一生。窗外的世界还在——你的椅子还在，你的茶杯还在。你站起来的时候——觉得自己的肩膀上有一种奇怪的重量。不是负担——是遗产。一百年的孤独在你体内，但它不再孤独了。因为它被读过了——被理解过了——被你带走了。']}, choices:null, nextScene:'ch20_r2_settlement' },
    ch20_r2b: { id:'ch20_r2b', type:'narrative', chapter:20, round:2, title:'循环者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你翻回第一页。梅尔基亚德斯还在那里——他笑了，像在说："我告诉过你会回来的。"你伸出手——触摸了另一页羊皮纸。这一次你选了一个不同的时代——这次你是奥雷里亚诺，站在失眠症开始蔓延的那个夜晚。你的命运从这里分叉——但最终会不会又走向同一个终点？你不知道——但你再来了。也许故事的意义就在再来一次之中。']}, choices:null, nextScene:'ch20_r2_settlement' },
    ch20_r2c: { id:'ch20_r2c', type:'narrative', chapter:20, round:2, title:'创作者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你打开一页空白的纸。你不姓布恩迪亚——或你可能姓。你不曾活在一百年前——或你可能活过。但你已经不害怕空白了——因为你已经看过空白是怎么被填满的。你拿起笔——你的手指在页面上悬着。第一句不需要完美——它只需要真实。','你开始写。']}, choices:null, nextScene:'ch20_r2_settlement' },
    ch20_r2_settlement: { id:'ch20_r2_settlement', type:'settlement', chapter:20, round:2, title:'最终轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['马孔多消失了——但你没有。你还在这里，在一张椅子上，手握着一本书或一个屏幕——你意识到：一百年的孤独不是布恩迪亚家的故事——是所有愿意坐下来读完它的人的故事。']}, settlement:{ summary:'最终轮完成。故事结束了——但你的故事刚刚开始。', nextScene:'chapter20_end', nextLabel:'查看章末结算' } },
    chapter20_end: { id:'chapter20_end', type:'settlement', chapter:20, round:3, title:'第二十章 · 章末结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['你读完了。一百年的风刮过——它没有把你吹走。它把你留在了这里。','最后一页羊皮卷已经合上。但梅尔基亚德斯的鹅毛笔还在动——他正在写后记。你想看看他写了什么吗？']}, settlement:{ summary:'第二十章完结。百年的孤独结束了——但你没有。', isChapterEnd:true, nextLabel:'进入终章 · 羊皮卷的见证者', quadrantNarratives: { guardian: '飓风来了——准时得像一个约会。你站在风中——不是被抓走的，是自己站进去的。', prophet: '你看着马孔多被抹去——像梅尔基亚德斯写的那样。你不是被飓风带走的——你是和飓风一起离开的。', follower: '你牵着那些你爱的人——在风中站在一起。风可以把房子吹走——但它吹不走牵着的手。', rebel: '你与飓风搏斗——用身体，用记忆，用你知道的每一个名字。最后你输了——但你让风花了整整一百页才把你带走。' } } }
  },
  memories: {
    '空白的第一页': { id:'空白的第一页', title:'空白的第一页', description:'你打开空白的纸——拿起了笔。第一句不需要完美——只需要真实。你开始写。', chapter:20 }
  },
  familyMembers: []
});

/* ================================================================
   终章 · 羊皮卷的见证者
   ================================================================ */
registerChapter({
  id: 'epilogue', title: '终章 · 羊皮卷的见证者',
  initialScene: 'epi_opening', possessedCharacter: '你自己——不再是任何附身对象', chapterNumber: 21,
  preview: '',
  nextLabel: '',
  moods: {
    'epilogue_rebel': '飓风正在撕碎天空 —— 你站在废墟里，手里攥着一页逆风飞来的羊皮纸',
    'epilogue_witness': '推开那扇门 —— 灰尘没有积在这里。时间在这间屋子里停止了奔跑',
    'epilogue_bystander': '站在栗树外面 —— 你离得足够远，远到灰尘落不到你身上',
    'epi_opening': '你听见了自己的呼吸 —— 这是全部章节以来，你第一次意识到你在呼吸'
  },
  scenes: {
    /* ── 结局入口：宿命反抗者 ── */
    epilogue_rebel: { id:'epilogue_rebel', type:'narrative', chapter:21, round:0, title:'飓风之中', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['飓风从北边吹来——不是循序渐进的风，是整片天空砸下来的风。马孔多的屋顶被掀开，像被一只看不见的手翻开书页。你站在废墟中央——不是逃不掉，是不想逃。','你看着那些名字被风撕成碎片——布恩迪亚、布恩迪亚、布恩迪亚——它们在风里旋转了最后一圈，然后消失。但有一页羊皮纸没有被吹走——它逆着风向，朝你飞来。','你伸出手。碎片落在掌心。上面只有一行字——不是梵文，不是梅尔基亚德斯的字迹。是你自己写的。"至少这一行，是我写的。"你握紧拳头。风停了。']}, choices:null, nextScene:'epi_rebel_settlement' },
    epi_rebel_settlement: { id:'epi_rebel_settlement', type:'settlement', chapter:21, round:1, title:'反抗者 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['你曾经以为你在对抗命运——你选了不该选的，拒绝了本该接受的，在每一个路口朝反方向迈了一步。现在你知道了：你不是在对抗——你是在书写。羊皮卷上从来不是预言——是邀请。你只是接受了邀请。','梅尔基亚德斯的声音从很远的地方传来——也许是他自己，也许只是风声："你做到了我没有预料的事。恭喜你——你让这个老人惊讶了。"']}, settlement:{ summary:'你以宿命反抗者的身份走完了百年。你不是读者——你是合著者。', isChapterEnd:true, isFinalEnd:true, nextLabel:'重新开始 · 再次翻开羊皮卷', emotionalCost:'飓风中你抓住的那页纸上只有一行字。那行字是："至少这一行，是我写的。"这句话不是梅尔基亚德斯写的，不是命运写的——是你。你用它替换了羊皮卷的最后一页。为此你付出了代价：你将永远记得马孔多——在所有现实都否认它曾经存在过的世界里，只有你一个人记得。' } },

    /* ── 结局入口：宿命见证者 ── */
    epilogue_witness: { id:'epilogue_witness', type:'narrative', chapter:21, round:0, title:'梅尔基亚德斯的房间', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你推开那扇门——梅尔基亚德斯的房间。灰尘没有积在这里——时间在这间屋子里停止了奔跑。老人坐在窗边，鹅毛笔悬在羊皮纸上方，一滴墨水迟迟不肯落下。','他回过头。他的眼睛还是那么亮——两颗没熄灭的炭。"来了？我等了你一百年。"他放下笔，合上羊皮卷。封面上没有标题——只有一个名字。你的名字。','"你已经读完了。"他说。不是疑问句。"每一页、每一个选择、每一个你没选的路口——你都在这里了。"']}, choices:null, nextScene:'epi_witness_settlement' },
    epi_witness_settlement: { id:'epi_witness_settlement', type:'settlement', chapter:21, round:1, title:'见证者 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['他把羊皮卷递给你。"拿着。这是你的了。"你接过来——羊皮纸还有温度，像刚刚被阳光晒过。你翻开最后一页——最后一行写着："然后他将合上这本书，回到他自己的生活中去——但他会记得。"','梅尔基亚德斯站起身，走到窗口。窗外不再是马孔多——是你来的那个世界。他侧过身——让你走过去。']}, settlement:{ summary:'你以宿命见证者的身份走完了百年。羊皮卷在你手中——不再是预言，是记忆。', isChapterEnd:true, isFinalEnd:true, nextLabel:'合上羊皮卷', emotionalCost:'你理解了命运的必然。这不是屈服——是理解。理解了为什么乌尔苏拉失明后看见的比任何人都多，理解了为什么上校打了三十二场败仗仍然活着，理解了为什么飓风在最后一刻才来——因为它等你读完。这份理解的代价是：你不能再问"如果当时选了另一边会怎样"。你只能接受你已经选的路——并学会在其中找到平静。' } },

    /* ── 结局入口：宿命旁观者 ── */
    epilogue_bystander: { id:'epilogue_bystander', type:'narrative', chapter:21, round:0, title:'栗树之外', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你站在栗树外面。蚂蚁列队从门槛上爬过——它们扛着比身体大三倍的叶子碎片，像一支沉默的军队。屋子里传出婴儿最后的啼哭——然后安静了。你没有进去。','你靠在栗树干枯的树干上——树干上还有何塞·阿尔卡蒂奥·布恩迪亚被绑过的凹痕。你伸手摸了摸那些纹路——不是想知道什么，只是想触碰。你只是一个路过此地的旅人——你从来没有属于这间屋子，但你也从来没有真正离开过。','风起了。蚂蚁消失了。房子开始碎裂——但你站得很远，远到灰尘落不到你身上。你见证过。仅此而已。']}, choices:null, nextScene:'epi_bystander_settlement' },
    epi_bystander_settlement: { id:'epi_bystander_settlement', type:'settlement', chapter:21, round:1, title:'旁观者 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['百年孤独——你翻开了，阅读了，在每一个十字路口选择了一条路。但你从来没有让这个故事进入你骨头最深处的那块地方。也许你是对的。也许保持距离是唯一一种不会被飓风刮走的方式。','马孔多消失了。栗树消失了。你还在——站在一片没有名字的空地上，手里没有羊皮卷。但你的口袋里有一粒栗子——不知道什么时候掉进去的。']}, settlement:{ summary:'你以宿命旁观者的身份走完了百年。你在每一个路口做了选择——但从未让自己真正属于其中任何一条路。', isChapterEnd:true, isFinalEnd:true, nextLabel:'离开马孔多', emotionalCost:'你从未让自己真正属于这间屋子。你隔着一段安全的距离看完了百年的悲欢——没有人因你多活，没有人因你早死。代价是：当飓风来临时，你没有失去任何东西。包括那些你本可以拥有的羁绊。' } },

	    /* ── 结局入口：合著者 ── */
	    epilogue_coauthor: { id:'epilogue_coauthor', type:'narrative', chapter:21, round:0, title:'合著者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你推开那扇门——梅尔基亚德斯的房间。老人坐在窗边，背对着你。他没有回头——但他知道是你。','"你来了。"他说。他的声音很平静——不是欢迎，不是告别，是确认。确认你终于走完了这漫长的百年。','"我在羊皮卷上写了布恩迪亚家的全部命运——但你做了什么？"他转过身。他的眼睛还是那么亮——两颗没熄灭的炭。"你在每一页边缘都写了注释。你没有改写命运——你回应了它。这就是合著者。"','他把鹅毛笔递给你。"剩下的你自己写。不是布恩迪亚的——是你自己的。"']}, choices:null, nextScene:'epi_coauthor_settlement' },
	    epi_coauthor_settlement: { id:'epi_coauthor_settlement', type:'settlement', chapter:21, round:1, title:'合著者 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['你接过了笔。羊皮卷在你手中还有温度——不是火焰的温度，是人手的温度。梅尔基亚德斯站起身，推开窗户。窗外的马孔多正在被飓风抹去——但你看见的不是毁灭，是完成。','他侧过身——让你走过去。窗外不再是一百年前的泥巴房——是你来的那个世界。你的房间，你的桌子，你还没有写完的那页纸。']}, settlement:{ summary:'你以合著者的身份走完了百年。你理解了命运的必然——但在每一页边缘都写了注释。梅尔基亚德斯合上书时对你点了点头——"你不仅是读者。你是合著者。"', isChapterEnd:true, isFinalEnd:true, nextLabel:'合上羊皮卷', emotionalCost:'你在每一页边缘写了注释——这意味着你同时既是读者又是作者。你付出了理解全部的代价：你不能再假装自己只是旁观者。你参与了——而参与是最重的负担，也是最轻的。' } },

	    /* ── 结局入口：孤独智者 ── */
	    epilogue_prophet: { id:'epilogue_prophet', type:'narrative', chapter:21, round:0, title:'孤独智者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你站在飓风的边缘——不在风眼里，不在风中，就在那个恰好不会被吹走的位置。你看见了马孔多的全部——从第一间泥巴房到最后一片被风刮走的瓦片。','你知道每一条走廊里发生过什么，你知道每一碗汤的咸淡，你知道每一个布恩迪亚临死前最后看见的是什么。但你知道这些——不是因为你经历过。是因为你理解了。理解了一切。理解了全部。','理解是另一种孤独——比失眠症更深、比战争更长、比任何爱情都更彻底的孤独。你看透了命运的每一个折角——但你从未走进其中任何一页。你站在风外面——读完了全部。像一个读完书却无法合上的人。']}, choices:null, nextScene:'epi_prophet_settlement' },
	    epi_prophet_settlement: { id:'epi_prophet_settlement', type:'settlement', chapter:21, round:1, title:'孤独智者 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['飓风停了。马孔多不见了。你还在——站在一片什么都没有的空地上。你的手上没有羊皮卷——但你的脑海里装着一百年。','你知道了全部——但这全部没有其他人能分享。你是这个世界上唯一还记得马孔多的人。这不是诅咒——是你选择的理解方式。你选择了看透一切——代价是独自一人。']}, settlement:{ summary:'你以孤独智者的身份走完了百年。你看了全部，理解了全部——但从未属于其中任何一页。飓风带走了马孔多——但你还在。作为最后一个记得的人。', isChapterEnd:true, isFinalEnd:true, nextLabel:'离开马孔多', emotionalCost:'你看懂了全部——但这份理解是一座没有门的塔。你站在塔顶，看见了所有的路、所有的结局——但你不再走任何一条路。代价是：你知道每个人都如何死去——但你不再认识他们活着时的体温。' } },

	    /* ── 结局入口：为爱赴死 ── */
	    epilogue_lover: { id:'epilogue_lover', type:'narrative', chapter:21, round:0, title:'为爱赴死', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你没有改变结局——你早就知道结局无法改变。但你让某些人活得久了一点，死得暖了一点。乌尔苏拉多喝了一碗热汤，奥雷里亚诺上校在行刑队前想起的不只是冰块——还有你的手覆在他手背上的温度。','你站在马孔多的废墟里。飓风正在靠近——但你先闻到的不是风的气味，是汤。乌尔苏拉的汤。有人在叫你吃饭。那个声音来自很远的地方——也许是一百年前，也许是昨天。','你转身。厨房的灯还亮着。桌上摆了两副碗筷。汤还在冒热气。乌尔苏拉在最后一页抬起眼睛。"你回来了？汤还热着。"']}, choices:null, nextScene:'epi_lover_settlement' },
	    epi_lover_settlement: { id:'epi_lover_settlement', type:'settlement', chapter:21, round:1, title:'为爱赴死 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['你坐下来喝汤。汤很咸——她总是放太多盐。但它是热的。风在外面呼啸——但这间厨房还在，这碗汤还在，这一刻还在。','你没有改变历史。你改变了一碗汤的温度。一百年后——也许这碗汤比羊皮卷上的任何一行字都更重。']}, settlement:{ summary:'你以命运追随者的身份走完了百年。你没能改变结局——但你让某些人活得更久、死得更暖。乌尔苏拉在最后一页抬起头——"你回来了？汤还热着。"', isChapterEnd:true, isFinalEnd:true, nextLabel:'回到马孔多的厨房', emotionalCost:'你为爱付出了全部——爱不是武器，打不过飓风。但爱是你在废墟里闻到汤的气味——然后知道往哪儿走。代价是：你会为每一个没能多喝一碗汤的人而背负终身的饥饿。' } },

	    /* ── 结局入口：飓风中的人 ── */
	    epilogue_hurricane: { id:'epilogue_hurricane', type:'narrative', chapter:21, round:0, title:'飓风中的人', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你和命运互相撕扯——从第一页撕到最后一页。你拒绝过，你反抗过，你逃过——你也被击败过。飓风来了——它不讲道理。但你不讲道理的韧劲刚好和它打个平手。','你没有被吹走——但也没有赢。你站在废墟中央——马孔多已经没了，栗树倒了，房子塌了。但你的脚印还在泥土里——深深地嵌着，像一个签名。','飓风带走了你的名字——但带不走你站过的位置。羊皮卷上没有你——但马孔多的泥土记得。记得所有那些你拒绝合上书页的夜晚，记得你在每一个路口选择了更难的那条路。']}, choices:null, nextScene:'epi_hurricane_settlement' },
	    epi_hurricane_settlement: { id:'epi_hurricane_settlement', type:'settlement', chapter:21, round:1, title:'飓风中的人 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['风停了。天空一片干净的灰白——像一张被擦干净的黑板。什么都没有了——房子，树，人，名字。但地上有脚印。你的脚印。','你蹲下来，摸了摸那对脚印——它们还是温热的。你忽然笑了——不是胜利的笑，是那种和命运打了这么久、谁都没赢的笑。你站起身来——开始走。不是回家——是去下一个需要脚印的地方。']}, settlement:{ summary:'你以孤独反抗者的身份走完了百年。你和命运互相撕扯，最后谁都没赢。飓风带走了一切——包括你的名字。但你的脚印留在了马孔多的泥土里。', isChapterEnd:true, isFinalEnd:true, nextLabel:'走向下一片荒野', emotionalCost:'你和命运搏斗了一百年——最后你们同时倒下了。飓风带走了你的名字，但地上留着你的脚印。代价是：你不属于任何一个结局。你属于搏斗本身——而搏斗没有终点，只有暂停。' } },

	    /* ── 结局入口：均衡烙印 ── */
	    epilogue_balanced: { id:'epilogue_balanced', type:'narrative', chapter:21, round:0, title:'均衡烙印', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['梅尔基亚德斯在等你。他面前摊着羊皮卷——翻到了最后一页。那一页是模糊的——不是字迹褪色了，是字迹在流动。它们不肯固定成一个形状。','"我写不了你。"他说。不是愤怒——是好奇。一个活了一百多年的老人——见过一切，写过一切——但写不了你。"你不是任何一个固定的形状。你在每一页之间流动。你是反抗者的火，是追随者的手，是见证者的眼——你从来不只做其中一种。"','他合上羊皮卷——封面上你的名字在微微发光。它也是流动的——不是被墨水固定住的。是一只刚形成的蝴蝶，翅膀还没有干。']}, choices:null, nextScene:'epi_balanced_settlement' },
	    epi_balanced_settlement: { id:'epi_balanced_settlement', type:'settlement', chapter:21, round:1, title:'均衡烙印 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['"你走吧。"梅尔基亚德斯说。"不是离开——是开始。"你看着他——一百年来他第一次看起来像一个需要休息的老人。他把鹅毛笔放回墨水瓶——这是他这辈子第一次放下笔。','你推开门。外面不是马孔多，不是飓风，不是废墟——是一条全新的走廊。它不属于任何一间你见过的房子。你迈出第一步——走廊在你脚下延长。你不需要知道它通向哪里——因为你就是那个还没有被写下的结局。']}, settlement:{ summary:'你以均衡烙印的身份走完了百年。你的轮廓在羊皮卷上是模糊的——梅尔基亚德斯说："我写不了你。你不是任何一个固定的形状——你在每一页之间流动。"', isChapterEnd:true, isFinalEnd:true, nextLabel:'走进新的走廊', emotionalCost:'你没有选择任何一条固定的路——而是走了所有的路。你不是任何一个标签可以定义的人。代价是：你将永远是一个"之间的人"——不属于任何一页，但属于每一页之间的空白。那片空白是你自己赢来的。' } },
    /* ── 原有终章流程（作为见证者路线的延续，保留兼容）── */
    epi_opening: { id:'epi_opening', type:'narrative', chapter:21, round:0, title:'你来了', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你终于停下了手指。屏幕上的最后一段叙述已经沉入黑暗——留下的只有你面前这片安静的光。你听见了你自己的呼吸——这是全部章节以来，你第一次意识到你在呼吸。','你不是任何布恩迪亚。你不是那个扛着磁铁走进丛林的男人，不是那个在战争间隙用冰块记忆抵抗行刑队的上校，不是那个缝了一辈子裹尸布却从未穿上自己的女人。你是你自己——但你看过他们全部。你把他们的故事活过一次——不是作为阅读，是作为沉浸。你为他们做了选择。','现在——时间走完了。风从马孔多刮过去之后——你仍然坐在这里。']}, choices:null, nextScene:'epi_eye' },
    epi_eye: { id:'epi_eye', type:'narrative', chapter:21, round:0, title:'宿命之眼', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你注意到屏幕中央有一粒光。它不是烛火，不是太阳——是一只眼睛的形状。它的虹膜是由你所有的选择编织而成的。你选的每一个A、每一个B、每一个C——在虹膜上变成了或深或浅的轮纹。','这只眼睛不眨眼。它只是看着你。不是审判——是全知。它把走过的所有弯折的路口、所有被记忆碎片铺成的小径——从它深处折射回来，让你自己看一遍。','你看得久了——你发现那只眼里的虹膜不是梅尔基亚德斯的。是你自己的。']}, choices:null, nextScene:'epi_judgment' },
    epi_judgment: { id:'epi_judgment', type:'narrative', chapter:21, round:0, title:'宿命之眼的判定', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['宿命之眼开始低语——不是用声音，而是把词语放在你心里你以为是自己的思考的地方。','它说：你曾经以为你在控制这个游戏。你点了A——她活过来一些；点了B——他死得更勇敢一点。但事实上，这个游戏也在控制你。它给你选择，然后把你在选择中暴露的每一次犹豫、每一个倾向——都还给你。你不是在玩一个游戏。你是在显现。','你的标签浮现了——不是作为列表，是作为影像。每一个标签都是一张定格画面，展开像一本摊开在你面前的书。']}, choices:null, nextScene:'epi_settlement' },
    epi_settlement: { id:'epi_settlement', type:'settlement', chapter:21, round:1, title:'终章 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['宿命之眼合上了——像一声没有声音的吞气。它降下一片光——浅金的、深蓝的、灰白的、深红的——这些颜色来自你全部的旅途：你的反抗、你的宿命、你丢下的和你带走的。','最后一句话——不是梅尔基亚德斯说的，不是羊皮卷写的——是你自己对自己说的。不需要被任何人听见。']}, settlement:{ summary:'游戏结束。你走过了百年的孤独——但你没有变成孤独本身。你带着布恩迪亚的故事——带着它们，继续走你自己的路。感谢你来过马孔多。', isChapterEnd:true, isFinalEnd:true, nextLabel:'重新开始 · 回到序章' } }
  },
  memories: {},
  familyMembers: []
});
