/* chapters-data-4.js — 第11-15章游戏数据 */

/* ================================================================
   第十一章 · 四年大雨、衰败开始
   ================================================================ */
registerChapter({
  id: 'chapter11', title: '第十一章 · 四年大雨、衰败开始',
  initialScene: 'ch11_opening', possessedCharacter: '奥雷里亚诺第二', chapterNumber: 11,
  preview: '<p>第十二章 · 乌尔苏拉之死</p>',
  nextLabel: '进入第十二章 · 乌尔苏拉之死',
  scenes: {
    ch11_opening: { id:'ch11_opening', type:'narrative', chapter:11, round:0, title:'雨开始落下', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你站在佩特拉·科特斯的院子里。头顶的天空从蓝色变成灰色，从灰色变成一种你从未见过的颜色——不是黑不是白，是某种介于遗忘与记忆之间的色调，像被水浸泡太久的羊皮纸。','第一滴雨落在你的手背上——很重，不像雨滴，像一枚硬币。然后第二滴，第三滴——然后天裂开了。雨水不是落下来的——是倒下来的，像有人在天空上打翻了一个巨大的水桶。','这场雨不会停——你会后来才知道。不是下几天，不是下几周——是下四年。'], clues: [{ triggerText: '被水浸泡太久的羊皮纸', itemId: 'water_stained_parchment', narrative: '你从水里捞起一张被浸泡的羊皮纸——字迹已经模糊了，但你还能辨认出几个梵文字母。纸在你手中慢慢展开——它没有被水冲走。它等了四年——等你把它捞起来。', unlocksIn: ['chapter17'] }] }, choices:null, nextScene:'ch11_r1_choice' },

    ch11_r1_choice: { id:'ch11_r1_choice', type:'choice', chapter:11, round:1, title:'第一轮选择 · 面对洪水', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['雨下了一个月了。街道变成了河——泥水没过门槛，流进屋子里。鸡淹死了——它们浮在水面上，羽毛湿透，像被遗弃的枕头。','乌尔苏拉站在厨房里——水没过她的脚踝。她还在揉面——仿佛雨不存在。但她的手指在抖——不是因为冷，是因为她知道这场雨不寻常。'], transition:'你选择——' }, choices:[
      { id:'ch11_r1_a', label:'组织救援——加固房子', description:'你不能等雨停。组织家人：堆沙袋，通水渠，把粮食搬到高处。', nextScene:'ch11_r1a', effects:{ tags:['组织者'], memory:null , fate:-1, bond:2 } },
      { id:'ch11_r1_b', label:'等待——相信雨会停', description:'大雨总会停的。让家人聚在一起——保存体力。雨不会永远下。', nextScene:'ch11_r1b', effects:{ tags:['等待者'], memory:null , fate:1, bond:0 } },
      { id:'ch11_r1_c', label:'离开——去高处避雨', description:'马孔多会被淹没。带上能带的人——去山上的高地。等雨停了再回来。', nextScene:'ch11_r1c', effects:{ tags:['撤离者'], memory:null , fate:1, bond:-1 } }
    ], settlement:'ch11_r1_settlement' },
    ch11_r1a: { id:'ch11_r1a', type:'narrative', chapter:11, round:1, title:'组织者', leftPage:{ speaker:'奥雷里亚诺第二', speakerColor:'#1a3a4a', paragraphs:['你卷起裤腿，开始搬沙袋。乌尔苏拉看着你——她的手指不再抖了。你们在水里干了一整天。晚上——雨还在下，但房子是干的。你坐在门槛上——累得说不出话——但你知道：只要房顶还在，家就还在。']}, choices:null, nextScene:'ch11_r1_settlement' },
    ch11_r1b: { id:'ch11_r1b', type:'narrative', chapter:11, round:1, title:'等待者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你让大家聚在客厅里——乌尔苏拉在角落念经，孩子们在玩积木。雨声很大——但你们在一起。第一个晚上你听见屋顶在漏水——你用盆接住。第二个晚上漏得更多——你加了两个盆。第三个晚上——你放弃了数。但你们还在。']}, choices:null, nextScene:'ch11_r1_settlement' },
    ch11_r1c: { id:'ch11_r1c', type:'narrative', chapter:11, round:1, title:'撤离者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你带着家人往山上走。路很滑——乌尔苏拉摔了一跤，但她站起来继续走。你在山上的岩洞里住了几个月——看着马孔多在雨雾中渐渐模糊。你不知道房子是否还在——但你知道家人还在。这也许就够了。']}, choices:null, nextScene:'ch11_r1_settlement' },
    ch11_r1_settlement: { id:'ch11_r1_settlement', type:'settlement', chapter:11, round:1, title:'第一轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['雨还在下。第一个月过去了——然后是第二个月。人们开始忘记太阳的颜色。街道变成了河道——船取代了骡子。马孔多正在变成一片沼泽。']}, settlement:{ summary:'第一轮完成。你面对了四年大雨的开始。', nextScene:'ch11_r2_choice', nextLabel:'进入第二轮', quadrantNarratives: { guardian: '雨下了四年——你修了四年屋顶。不是因为相信雨会停——是因为有人在下面。', prophet: '大雨冲走了一切——标签、名字、记忆。你站在雨里，什么都不剩——但也什么都不怕了。', follower: '你守着乌尔苏拉——在雨声中听她的呼吸。这比任何标签都更让你记得你是谁。', rebel: '你拒绝被冲走——站在齐膝的泥水里，咬着牙。雨可以下四年——但你可以站四十年。' } } },

    ch11_r2_choice: { id:'ch11_r2_choice', type:'choice', chapter:11, round:2, title:'第二轮选择 · 衰败的迹象', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['雨下了一年了。房子开始腐烂——墙壁上长出了蘑菇，木梁上生了白蚁，衣服上全是霉斑。乌尔苏拉每天擦洗——但她擦完一块墙壁，另一块又开始滴水。','费尔南达把自己关在房间里——不是怕湿，是怕看到她祖母留下的家具在霉变。奥雷里亚诺第二不笑了——他的胃口消失了。雨水把一切味道都冲淡了。'], transition:'你选择——' }, choices:[
      { id:'ch11_r2_a', label:'坚持清理——对抗腐坏', description:'每天擦洗，每天修补。腐烂是敌人——你必须和它战斗到最后一刻。', nextScene:'ch11_r2a', effects:{ tags:['不屈者'], memory:null , fate:0, bond:2 } },
      { id:'ch11_r2_b', label:'接受衰败——保存核心', description:'有些东西注定会毁掉。集中精力保护最重要的东西——人和记忆。', nextScene:'ch11_r2b', effects:{ tags:['务实者'], memory:null , fate:-1, bond:2 } },
      { id:'ch11_r2_c', label:'寻找雨停的迹象', description:'出去——在雨中寻找任何可能意味着雨要停了的迹象。哪怕只是一线希望。', nextScene:'ch11_r2c', effects:{ tags:['希望寻找者'], memory:null , fate:1, bond:0 } }
    ], settlement:'ch11_r2_settlement' },
    ch11_r2a: { id:'ch11_r2a', type:'narrative', chapter:11, round:2, title:'不屈者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你每天擦洗墙壁——蘑菇擦了又长，长了又擦。你的手泡在水里太久——皮肤开始脱落。但房子还在——每一块被你擦拭过的墙壁都在为你撑着。乌尔苏拉说："这房子不会倒——只要还有人愿意为它擦墙。"']}, choices:null, nextScene:'ch11_r2_settlement' },
    ch11_r2b: { id:'ch11_r2b', type:'narrative', chapter:11, round:2, title:'务实者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你不再擦墙了。你把全家人的照片、乌尔苏拉的银器、父亲的手稿——所有最重要的东西搬到了最高的房间。墙可以烂——但这些东西不能丢。因为它们是这个家族曾经存在过的证据。']}, choices:null, nextScene:'ch11_r2_settlement' },
    ch11_r2c: { id:'ch11_r2c', type:'narrative', chapter:11, round:2, title:'希望寻找者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你撑着一只小船划到河边——水面已经宽到看不见对岸。你在雨中坐了整整一天。你没有找到任何雨要停的迹象——但你看见一只鸟。不是溺死的——是活的，它正站在一根漂浮的木头上，抖掉翅膀上的水。如果一只鸟还在坚持——也许人也可以。']}, choices:null, nextScene:'ch11_r2_settlement' },
    ch11_r2_settlement: { id:'ch11_r2_settlement', type:'settlement', chapter:11, round:2, title:'第二轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['雨下了一年。墙在腐烂，粮食在发霉，希望在一寸一寸地被泡软。但人还在——只要人还在，马孔多就没有彻底沉没。']}, settlement:{ summary:'第二轮完成。你在雨中找到了自己的节奏。', nextScene:'ch11_r3_choice', nextLabel:'进入第三轮', quadrantNarratives: { guardian: '雨下了四年——你修了四年屋顶。不是因为相信雨会停——是因为有人在下面。', prophet: '大雨冲走了一切——标签、名字、记忆。你站在雨里，什么都不剩——但也什么都不怕了。', follower: '你守着乌尔苏拉——在雨声中听她的呼吸。这比任何标签都更让你记得你是谁。', rebel: '你拒绝被冲走——站在齐膝的泥水里，咬着牙。雨可以下四年——但你可以站四十年。' } } },

    ch11_r3_choice: { id:'ch11_r3_choice', type:'choice', chapter:11, round:3, title:'第三轮选择 · 佩特拉与费尔南达', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['奥雷里亚诺第二在两个家之间划着他的小船。佩特拉的房子在低处——已经被水淹了一半。他每天划船去给她送饭——一小袋米，几块干面包。','费尔南达在家里数着剩下的蜡烛——她已经很久没有见到丈夫了。她不说——但她在窗口放了一盏灯。不是为了照亮房间——是为了让他划船回来的时候能看到。'], transition:'你选择——' }, choices:[
      { id:'ch11_r3_a', label:'留在佩特拉身边', description:'在灾难中——他需要她，她也需要他。真正的爱在雨中更清晰。', nextScene:'ch11_r3a', effects:{ tags:['忠诚的爱人'], memory:null, fate:1, bond:1 } },
      { id:'ch11_r3_b', label:'回到费尔南达身边', description:'她是妻子。灾难面前——家庭的责任比个人情感更重要。', nextScene:'ch11_r3b', effects:{ tags:['尽责的丈夫'], memory:null, fate:-1, bond:2 } },
      { id:'ch11_r3_c', label:'把两个女人接到一起', description:'不能让任何一个人在雨中独自挨饿。把佩特拉接过来——不管费尔南达怎么想。', nextScene:'ch11_r3c', effects:{ tags:['统一者'], memory:null, fate:1, bond:1 } }
    ], settlement:'ch11_r3_settlement' },
    ch11_r3a: { id:'ch11_r3a', type:'narrative', chapter:11, round:3, title:'忠诚的爱人', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你留在佩特拉身边——她的房子水已经齐腰了，但她还在笑。"只要水位不到脖子，"她说，"我们就有饭吃。"你把米分成两份——一份煮粥，一份留着明天。你们在屋顶上看着雨——不说话，但手牵着手。']}, choices:null, nextScene:'ch11_r3_settlement' },
    ch11_r3b: { id:'ch11_r3b', type:'narrative', chapter:11, round:3, title:'尽责的丈夫', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你划船回家。费尔南达站在门廊上——她看见你的时候，手里的蜡烛灭了。你没有说话——她也没有。你只是把一袋米放在桌上——然后坐下来。她隔了很久才坐下——但她坐下了。雨声中——你听见她轻轻叹了口气。']}, choices:null, nextScene:'ch11_r3_settlement' },
    ch11_r3c: { id:'ch11_r3c', type:'narrative', chapter:11, round:3, title:'统一者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你用船把佩特拉接了过来。费尔南达站在门口——脸像石像。但佩特拉没有争吵——她只是走进厨房，开始帮忙揉面。她们没有成为朋友——但她们在同一张桌子上一起做了晚饭。这在布恩迪亚家是最接近奇迹的事。']}, choices:null, nextScene:'ch11_r3_settlement' },
    ch11_r3_settlement: { id:'ch11_r3_settlement', type:'settlement', chapter:11, round:3, title:'第三轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['雨声里——爱和责任的边界变得模糊。在灾难中，人们不再计较谁对谁错——只计较谁能在一起。']}, settlement:{ summary:'第三轮完成。你在大雨中面对了爱与责任的抉择。', nextScene:'ch11_r4_choice', nextLabel:'进入第四轮', quadrantNarratives: { guardian: '雨下了四年——你修了四年屋顶。不是因为相信雨会停——是因为有人在下面。', prophet: '大雨冲走了一切——标签、名字、记忆。你站在雨里，什么都不剩——但也什么都不怕了。', follower: '你守着乌尔苏拉——在雨声中听她的呼吸。这比任何标签都更让你记得你是谁。', rebel: '你拒绝被冲走——站在齐膝的泥水里，咬着牙。雨可以下四年——但你可以站四十年。' } } },

    ch11_r4_choice: { id:'ch11_r4_choice', type:'choice', chapter:11, round:4, title:'第四轮选择 · 牲畜与生存', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['奥雷里亚诺第二的牲口——那些靠着他好胃口而无限繁殖的牛和猪——正在雨水中一匹匹死去。不是因为饿——是因为绝望。它们站在齐膝深的水里，不再吃东西，不再走动，只是站着——等死。','他的财富在溶化。布恩迪亚家曾经靠他的牲口过上好日子——现在那些日子像雨水一样流走了。他看着最后一头牛在雨中倒下去——它的眼睛看着他，像在问：你当初答应过我要照顾好我们的。'], transition:'你选择——' }, choices:[
      { id:'ch11_r4_a', label:'卖掉剩下的牲口', description:'趁它们还活着——换成钱，买粮食。这是理性的选择——哪怕残忍。', nextScene:'ch11_r4a', effects:{ tags:['理性者'], memory:null, fate:1, bond:0 } },
      { id:'ch11_r4_b', label:'让它们自由——打开栅栏', description:'不卖，不杀。把栅栏打开——让它们自己寻找活路。也许大自然知道该怎么办。', nextScene:'ch11_r4b', effects:{ tags:['慈悲者'], memory:null, fate:0, bond:1 } },
      { id:'ch11_r4_c', label:'和它们一起等死', description:'它们是他的朋友——不是财产。他不能背叛它们。如果它们要死——至少有人在它们身边。', nextScene:'ch11_r4c', effects:{ tags:['忠诚者'], memory:'最后一头牛的凝视', fate:-1, bond:2 } }
    ], settlement:'ch11_r4_settlement' },
    ch11_r4a: { id:'ch11_r4a', type:'narrative', chapter:11, round:4, title:'理性者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你把剩下的牲口卖掉了——价格低得可怜，但至少换了钱。你用那笔钱给全家买了一个月的口粮。你没有回头看那些被牵走的牛。但那天晚上——你梦见它们站在雨里看着你。']}, choices:null, nextScene:'ch11_r4_settlement' },
    ch11_r4b: { id:'ch11_r4b', type:'narrative', chapter:11, round:4, title:'慈悲者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你打开了栅栏。牲口们犹豫了一下——然后慢慢地走入雨中。你不知道它们去了哪里——但你想，至少它们死的时候是在走的。不是站在原地等着被水淹没。']}, choices:null, nextScene:'ch11_r4_settlement' },
    ch11_r4c: { id:'ch11_r4c', type:'narrative', chapter:11, round:4, title:'忠诚者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你没有离开。你站在雨中——和那些牛在一起，直到最后一头倒下。它倒下去的时候，你坐在它身边，把手放在它的脖子上。它没有抗拒——它只是闭上了眼睛。你坐在雨里——很久——直到佩特拉划船来找你。']}, choices:null, nextScene:'ch11_r4_settlement' },
    ch11_r4_settlement: { id:'ch11_r4_settlement', type:'settlement', chapter:11, round:4, title:'第四轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['牲口死了——或走了。布恩迪亚家的财富在雨水中溶化。但重要的是：人们还活着。只要人活着——一切都可以重新开始。']}, settlement:{ summary:'第四轮完成。你面对了财富的消逝。', nextScene:'ch11_r5_choice', nextLabel:'进入最终轮', quadrantNarratives: { guardian: '雨下了四年——你修了四年屋顶。不是因为相信雨会停——是因为有人在下面。', prophet: '大雨冲走了一切——标签、名字、记忆。你站在雨里，什么都不剩——但也什么都不怕了。', follower: '你守着乌尔苏拉——在雨声中听她的呼吸。这比任何标签都更让你记得你是谁。', rebel: '你拒绝被冲走——站在齐膝的泥水里，咬着牙。雨可以下四年——但你可以站四十年。' } } },

    ch11_r5_choice: { id:'ch11_r5_choice', type:'choice', chapter:11, round:5, title:'第五轮选择 · 雨停了', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['雨开始变小了。不是突然停——是像一个人哭累了，从嚎啕变成啜泣，从啜泣变成沉默。最后一滴雨落下来的时候——马孔多已经变了。不是那个你认识的村子了——街道上长满了青苔，房子歪了，栗树还在——但叶子掉光了。','你走出门——阳光刺眼。你已经四年没见过太阳了。你的皮肤苍白如纸——但你能感觉到：空气在变干。土地在呼吸。世界还没有忘记马孔多。'], transition:'你选择——' }, choices:[
      { id:'ch11_r5_a', label:'开始重建', description:'拿起铲子——清理淤泥，修复房子，把马孔多从泥泞中拉回来。重建从来不是一个人的事。', nextScene:'ch11_r5a', effects:{ tags:['重建者'], memory:null, fate:1, bond:1 } },
      { id:'ch11_r5_b', label:'跪下——感谢天', description:'你从不信神——但四年雨后你懂了：有些力量比人更大。跪下，不是屈服，是感恩。', nextScene:'ch11_r5b', effects:{ tags:['感恩者'], memory:null, fate:-1, bond:1 } },
      { id:'ch11_r5_c', label:'看着废墟——不知道从何开始', description:'太多了——需要做的太多了。你站在原地，不知道第一铲该挖在哪里。', nextScene:'ch11_r5c', effects:{ tags:['茫然者'], memory:'四年雨后的阳光', fate:0, bond:0 } }
    ], settlement:'ch11_r5_settlement' },
    ch11_r5a: { id:'ch11_r5a', type:'narrative', chapter:11, round:5, title:'重建者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你拿起铲子。第一天——你一个人。第二天——佩特拉来了。第三天——几个邻居也来了。你们在泥泞中挖着——不是权力，是直觉：人总要住在一个干的地方。他们在你的铲子落下去的地方挖下了第一铲。']}, choices:null, nextScene:'ch11_r5_settlement' },
    ch11_r5b: { id:'ch11_r5b', type:'narrative', chapter:11, round:5, title:'感恩者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你跪在湿漉漉的泥土上——膝盖陷进泥里。你没有祷词——你只是在心里说了一声"谢谢"。不是为了雨停——是为了那些在雨中还牵着你的手的人。你站起来的时候——膝盖是湿的，但心是干的。']}, choices:null, nextScene:'ch11_r5_settlement' },
    ch11_r5c: { id:'ch11_r5c', type:'narrative', chapter:11, round:5, title:'茫然者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你站在及膝深的泥泞里——看着马孔多。它已经不是那个白墙耀眼的小镇了——它是废墟。你不知道该从哪里开始。但阳光在你背上——温暖的。四年来的第一次温暖。也许不需要知道——也许开始就够了。你向前迈了一步——泥在脚下发出吮吸的声音。第一步。']}, choices:null, nextScene:'ch11_r5_settlement' },
    ch11_r5_settlement: { id:'ch11_r5_settlement', type:'settlement', chapter:11, round:5, title:'第五轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['四年雨停了。马孔多像一个从水中被捞起来的溺水者——苍白的，虚弱的，但还在呼吸。阳光第一次照在湿透的墙壁上——水汽在蒸发，像大地在长叹一口气。']}, settlement:{ summary:'最终轮完成。雨停了——你在废墟中找到了站起来的力气。', nextScene:'chapter11_end', nextLabel:'查看章末结算', quadrantNarratives: { guardian: '雨下了四年——你修了四年屋顶。不是因为相信雨会停——是因为有人在下面。', prophet: '大雨冲走了一切——标签、名字、记忆。你站在雨里，什么都不剩——但也什么都不怕了。', follower: '你守着乌尔苏拉——在雨声中听她的呼吸。这比任何标签都更让你记得你是谁。', rebel: '你拒绝被冲走——站在齐膝的泥水里，咬着牙。雨可以下四年——但你可以站四十年。' } } },
    chapter11_end: { id:'chapter11_end', type:'settlement', chapter:11, round:6, title:'第十一章 · 章末结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['第十一章完结。四年大雨过去了——但马孔多永远不会回到以前的样子了。','在废墟中——有一个老人正在失去了她的视力。她是乌尔苏拉。她看不见废墟——但她摸得到。她的手在一寸一寸地数着这个家的伤口。']}, settlement:{ summary:'第十一章完结。大雨冲刷了一切——但有些东西在泥泞中生了根。', isChapterEnd:true, nextLabel:'进入第十二章 · 乌尔苏拉之死', quadrantNarratives: { guardian: '雨下了四年——你修了四年屋顶。不是因为相信雨会停——是因为有人在下面。', prophet: '大雨冲走了一切——标签、名字、记忆。你站在雨里，什么都不剩——但也什么都不怕了。', follower: '你守着乌尔苏拉——在雨声中听她的呼吸。这比任何标签都更让你记得你是谁。', rebel: '你拒绝被冲走——站在齐膝的泥水里，咬着牙。雨可以下四年——但你可以站四十年。' } } }
  },
  memories: {
    '最后一头牛的凝视': { id:'最后一头牛的凝视', title:'最后一头牛的凝视', description:'你坐在雨中，看着最后一头牛倒下。它看着你——像在问：你答应过要照顾好我们的。', chapter:11 },
    '四年雨后的阳光': { id:'四年雨后的阳光', title:'四年雨后的阳光', description:'你四年没见过太阳。第一缕阳光照在你苍白的皮肤上——世界还没有忘记马孔多。', chapter:11 }
  },
  familyMembers: []
});

/* ================================================================
   第十二章 · 乌尔苏拉之死
   ================================================================ */
registerChapter({
  id: 'chapter12', title: '第十二章 · 乌尔苏拉之死',
  initialScene: 'ch12_opening', possessedCharacter: '乌尔苏拉·伊瓜兰', chapterNumber: 12,
  preview: '<p>第十三章 · 梅梅与马乌里肖·巴比伦</p>',
  nextLabel: '进入第十三章 · 梅梅与黄蝴蝶',
  scenes: {
    ch12_opening: { id:'ch12_opening', type:'narrative', chapter:12, round:0, title:'盲者的目光', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你睁开眼睛——或者说，你觉得你睁开了眼睛。但实际上——光线已经很久没有穿过你的瞳孔了。你的世界不是黑暗的——而是由声音、气味、触觉构成的。你年轻的时候叫它"直觉"——现在你叫它"记忆"。','你是乌尔苏拉·伊瓜兰。你一百多岁了——你已经记不清确切数字。你的眼睛瞎了——但你知道太阳在哪边。你知道厨房里还有几袋米。你知道每个人的脚步声——谁在高兴，谁在害怕，谁在试图不被你听见。','你的身体老了——但你的手还记得揉面的节奏。你的耳朵还能分辨十二种不同的雨声。你的心——你的心还在为这所房子里的每一个孩子跳动。缝纫机在角落里安静地站着——针还插在布里，最后一针只缝了一半。'], clues: [
      { triggerText: '缝纫机', itemId: 'last_stitch', narrative: '缝纫机停了。针还插在布里——最后一针只缝了一半。乌尔苏拉的手从转轮上滑下来。你看着那半针——等着它自己缝完。但它不缝了。', unlocksIn: ['epilogue'] }
    ] }, echoText: '你记得她站在门口的样子——双手叉腰。"别死。"她只说了这两个字。你打了三十二场败仗——从来没有忘记。现在轮到你了。她躺在床上——你不能对她说"别死"。因为这一次，是命运在扣扳机。', choices:null, nextScene:'ch12_r1_choice' },

    ch12_r1_choice: { id:'ch12_r1_choice', type:'choice', chapter:12, round:1, title:'第一轮选择 · 失明的力量', leftPage:{ speaker:'乌尔苏拉', speakerColor:'#a52020', paragraphs:['你失明了。但你不告诉任何人。你学会了用耳朵分辨方位，用手指记忆墙壁的每一道裂缝。你假装还能看见——因为你不想让孩子们担心。你不想让他们觉得你变成了需要被照顾的人。','这一天——你听见了走廊里有什么不对劲。一个脚步——很轻，是孩子在哭。你知道是谁——是梅梅。你不需要眼睛就能知道。'], transition:'你选择——' }, choices:[
      { id:'ch12_r1_a', label:'去找她——用你的方式', description:'你不需要眼睛——你需要手臂。摸着墙壁走到她身边，把她搂在怀里。', nextScene:'ch12_r1a', effects:{ tags:['看不见的母亲'], memory:null , fate:-1, bond:2 } },
      { id:'ch12_r1_b', label:'假装没听见——让她自己疗愈', description:'有些眼泪需要独处。你知道她在哪——但你选择不过去。不是因为冷漠——是因为信任。', nextScene:'ch12_r1b', effects:{ tags:['沉默的守护者'], memory:null , fate:1, bond:0 } },
      { id:'ch12_r1_c', label:'叫人去帮她', description:'你走不了那么快——但你可以叫阿玛兰妲去。有时候需要让活人能做的事让活人去做。', nextScene:'ch12_r1c', effects:{ tags:['智慧的调度者'], memory:null , fate:1, bond:-1 } }
    ], settlement:'ch12_r1_settlement' },
    ch12_r1a: { id:'ch12_r1a', type:'narrative', chapter:12, round:1, title:'看不见的母亲', leftPage:{ speaker:'乌尔苏拉', speakerColor:'#a52020', paragraphs:['你摸索着墙壁——手指沿着你亲手扩建的走廊前行。你找到了梅梅——她蹲在角落里，脸埋在膝盖上。你坐下来——把她的头放在你腿上。你没有说话——但你的手在她头发上轻轻拍着。这个动作你做过几百次——给每一个在这所房子里哭过的布恩迪亚。']}, choices:null, nextScene:'ch12_r1_settlement' },
    ch12_r1b: { id:'ch12_r1b', type:'narrative', chapter:12, round:1, title:'沉默的守护者', leftPage:{ speaker:'乌尔苏拉', speakerColor:'#a52020', paragraphs:['你站在原地——听着梅梅的啜泣声。你没有过去——但你一直在那里。你记得自己年轻时——有些眼泪需要别人，有些眼泪只需要自己的膝盖和一只没有人能看到的手。你让她哭完——然后在心里为她讲了一段祷告。']}, choices:null, nextScene:'ch12_r1_settlement' },
    ch12_r1c: { id:'ch12_r1c', type:'narrative', chapter:12, round:1, title:'智慧的调度者', leftPage:{ speaker:'乌尔苏拉', speakerColor:'#a52020', paragraphs:['你叫来了阿玛兰妲。"梅梅在走廊尽头——去陪她。"阿玛兰妲没有说话，但她去了。你听见两个脚步声重叠在一起——然后哭声渐渐小了。不是你亲自做的——但你做了更重要的：你知道把对的人送到对的地方。']}, choices:null, nextScene:'ch12_r1_settlement' },
    ch12_r1_settlement: { id:'ch12_r1_settlement', type:'settlement', chapter:12, round:1, title:'第一轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['乌尔苏拉的失明没有让她变得无用——反而让她看得更清楚了。不是用眼睛看——是用一百年的经验去看。她不需要窗户——她心里有一张这所房子的地图。']}, settlement:{ summary:'第一轮完成。盲目的乌尔苏拉比任何明眼人都看得更清。', nextScene:'ch12_r2_choice', nextLabel:'进入第二轮', quadrantNarratives: { guardian: '你握着她的手——她最后一次睁开眼睛。"你瘦了。"缝纫机停了。但你的手没停——你还在缝。', prophet: '乌尔苏拉走了——带着整个家族的重量。你站在门外——不是不想进去，是进去了就出不来了。', follower: '你在她身边——从第一碗汤到最后一次呼吸。她走了——但碗还摆在桌上。你知道她的位置。', rebel: '她走了——你不接受。你继续在桌上摆两副碗筷。命运说该停了——你说不。' } } },

    ch12_r2_choice: { id:'ch12_r2_choice', type:'choice', chapter:12, round:2, title:'第二轮选择 · 房子在腐烂', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['大雨过后——房子在腐烂。不是墙壁——是根基。白蚁在木梁里做窝，老鼠在地板下繁殖，蘑菇在各个角落生长。乌尔苏拉能闻到——霉菌、腐朽、死亡的气味。','费尔南达试图维持体面——但她擦不过来。房子太大了——四十多间房，只有几个人住。大多数房间已经很多年没有打开过了。乌尔苏拉想去清理——但她的身体不允许了。'], transition:'你选择——' }, choices:[
      { id:'ch12_r2_a', label:'召集家人——大扫除', description:'这所房子让她亲手扩建起来——不能让它烂掉。召集每一个能动手的人。', nextScene:'ch12_r2a', effects:{ tags:['不屈的家长'], memory:null , fate:-1, bond:2 } },
      { id:'ch12_r2_b', label:'封掉没用的房间', description:'既然没人住——就把它们封起来。保存剩下的——放弃已经坏掉的。', nextScene:'ch12_r2b', effects:{ tags:['务实者'], memory:null , fate:0, bond:2 } },
      { id:'ch12_r2_c', label:'接受——房子和人一起老去', description:'她老了，房子也老了。老去不是一个需要被修复的问题——它是一个需要被接受的季节。', nextScene:'ch12_r2c', effects:{ tags:['顺应者'], memory:'老房子的呼吸' , fate:1, bond:0 } }
    ], settlement:'ch12_r2_settlement' },
    ch12_r2a: { id:'ch12_r2a', type:'narrative', chapter:12, round:2, title:'不屈的家长', leftPage:{ speaker:'乌尔苏拉', speakerColor:'#a52020', paragraphs:['你站在走廊上——手扶着墙——大声喊着每一个人的名字。他们来了——不是因为你吓人，是因为你从来没喊过这么多人。那一天你们打开了很多年没开过的房间——灰尘像时间本身一样呛人。但到了晚上——房子闻起来不再像腐烂了。']}, choices:null, nextScene:'ch12_r2_settlement' },
    ch12_r2b: { id:'ch12_r2b', type:'narrative', chapter:12, round:2, title:'务实者', leftPage:{ speaker:'乌尔苏拉', speakerColor:'#a52020', paragraphs:['你让人把空房间的门钉上。不是放弃——是划定边界。剩下的房间还能住——把它们打扫干净，让活着的人继续生活。被钉上的门后面——霉菌和白蚁可以自由工作。但在门外——家还在。']}, choices:null, nextScene:'ch12_r2_settlement' },
    ch12_r2c: { id:'ch12_r2c', type:'narrative', chapter:12, round:2, title:'顺应者', leftPage:{ speaker:'乌尔苏拉', speakerColor:'#a52020', paragraphs:['你坐在走廊上——听着白蚁在墙里啃木头的声音。它听起来不像破坏——像一种缓慢的咀嚼，像这所房子在自己吃自己。你不去阻止——不是因为你不在乎，是因为你明白了：房子和人一样——生来就带着死的种子。让它走吧。']}, choices:null, nextScene:'ch12_r2_settlement' },
    ch12_r2_settlement: { id:'ch12_r2_settlement', type:'settlement', chapter:12, round:2, title:'第二轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['房子在衰老——和家人一样。但有乌尔苏拉在——它不会倒。不是因为墙更坚固了，是因为有一个人仍然在每天擦洗同一块地板。']}, settlement:{ summary:'第二轮完成。你选择如何面对房子的衰败。', nextScene:'ch12_r3_choice', nextLabel:'进入第三轮', quadrantNarratives: { guardian: '你握着她的手——她最后一次睁开眼睛。"你瘦了。"缝纫机停了。但你的手没停——你还在缝。', prophet: '乌尔苏拉走了——带着整个家族的重量。你站在门外——不是不想进去，是进去了就出不来了。', follower: '你在她身边——从第一碗汤到最后一次呼吸。她走了——但碗还摆在桌上。你知道她的位置。', rebel: '她走了——你不接受。你继续在桌上摆两副碗筷。命运说该停了——你说不。' } } },

    ch12_r3_choice: { id:'ch12_r3_choice', type:'choice', chapter:12, round:3, title:'第三轮选择 · 家族的回忆', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['乌尔苏拉坐在她的摇椅上——她开始回忆。不是偶尔想起——是被回忆淹没。她每天在脑海里重走一遍马孔多的街道——不是现在的马孔多，是那个只有二十多间泥巴房的马孔多。','她想起了何塞·阿尔卡蒂奥·布恩迪亚年轻时的脸——狂热，确信，手里攥着两块磁铁。她想起了蕾梅黛丝升天的那个下午。想起了三千人尸体的火车——她从来没见过，但她感觉到了。','她的一生太长了——长到可以装下整整一个世纪的孤独。'], transition:'你选择——' }, choices:[
      { id:'ch12_r3_a', label:'讲述——把故事传给下一代', description:'让年轻人坐下来——听你讲。不是讲历史，是讲故事。让他们知道他们从哪里来。', nextScene:'ch12_r3a', effects:{ tags:['讲述者'], memory:null , fate:0, bond:1 } },
      { id:'ch12_r3_b', label:'把回忆写下来', description:'你识字不多——但可以让人代笔。把你还记得的事都写下来——留给以后的人。', nextScene:'ch12_r3b', effects:{ tags:['记录者'], memory:'摇椅上的口述' , fate:1, bond:-2 } },
      { id:'ch12_r3_c', label:'沉默——把回忆带进坟墓', description:'有些故事只属于亲历者。让它们和你一起离开——不需要被任何人继承。', nextScene:'ch12_r3c', effects:{ tags:['沉默的守护者'], memory:null , fate:-1, bond:2 } }
    ], settlement:'ch12_r3_settlement' },
    ch12_r3a: { id:'ch12_r3a', type:'narrative', chapter:12, round:3, title:'讲述者', leftPage:{ speaker:'乌尔苏拉', speakerColor:'#a52020', paragraphs:['你把孩子们叫到身边。他们有些人在听——有些人在玩手指。但没关系——你说的每一个字都会沉入这所房子的墙壁里。很多年后——当他们站在同样的走廊上时，他们会想起你的声音。不是具体的字——是声音本身。那种在黑暗中仍然安稳的声音。']}, choices:null, nextScene:'ch12_r3_settlement' },
    ch12_r3b: { id:'ch12_r3b', type:'narrative', chapter:12, round:3, title:'记录者', leftPage:{ speaker:'乌尔苏拉', speakerColor:'#a52020', paragraphs:['你让阿玛兰妲帮你写。你口述——从建村的那天说起。你说到了磁铁，说到了冰块，说到了蕾梅黛丝升天的下午。阿玛兰妲写着写着停下了笔——她在哭。你没有停——不是因为你狠心，是因为有些故事需要被写完。']}, choices:null, nextScene:'ch12_r3_settlement' },
    ch12_r3c: { id:'ch12_r3c', type:'narrative', chapter:12, round:3, title:'沉默的守护者', leftPage:{ speaker:'乌尔苏拉', speakerColor:'#a52020', paragraphs:['你没有说。你把回忆留在心里——像她放在床底下的那些金币。它们不需要被花掉才能证明它们存在过。你坐下来——闭上眼睛——让一世纪的画面在你脑海里放映。这是你一个人的电影——不需要观众。']}, choices:null, nextScene:'ch12_r3_settlement' },
    ch12_r3_settlement: { id:'ch12_r3_settlement', type:'settlement', chapter:12, round:3, title:'第三轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['乌尔苏拉的记忆是这个家族最后的档案。它们不一定准确——但它们是真实的。因为记忆从来不是关于事实的——是关于那些你曾经爱过的人的。']}, settlement:{ summary:'第三轮完成。你选择了家族记忆的去向。', nextScene:'ch12_r4_choice', nextLabel:'进入最终轮', quadrantNarratives: { guardian: '你握着她的手——她最后一次睁开眼睛。"你瘦了。"缝纫机停了。但你的手没停——你还在缝。', prophet: '乌尔苏拉走了——带着整个家族的重量。你站在门外——不是不想进去，是进去了就出不来了。', follower: '你在她身边——从第一碗汤到最后一次呼吸。她走了——但碗还摆在桌上。你知道她的位置。', rebel: '她走了——你不接受。你继续在桌上摆两副碗筷。命运说该停了——你说不。' } } },

    ch12_r4_choice: { id:'ch12_r4_choice', type:'choice', chapter:12, round:4, title:'第四轮选择 · 告别', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['乌尔苏拉知道自己要走了。一百多年的生命——她知道身体什么时候要停下。但她的眼睛是瞎的——她看不见那些围在她床边的人。她的耳朵还在工作——她听见了呼吸声。有些呼吸她认得——有些已经不认得。但它们在——这就够了。','她伸出手——有人在握着。是阿玛兰妲？是梅梅？是费尔南达？她不确定——但那只手是温热的。这让她想起了她第一次握住何塞·阿尔卡蒂奥·布恩迪亚的手——那天她十八岁，穿着白裙子，裙摆沾了泥。'], transition:'你选择——' }, choices:[
      { id:'ch12_r4_a', label:'说再见——叫每个人的名字', description:'用最后的力气，一个一个地叫出他们的名字。让他们知道你记得每一个人。', nextScene:'ch12_r4a', effects:{ tags:['完整的告别'], memory:'最后的点名', fate:0, bond:1 } },
      { id:'ch12_r4_b', label:'安静离开——不要惊动任何人', description:'你不想让他们看见这一刻。在睡梦中慢慢松开手——让他们在你走了之后才发现。', nextScene:'ch12_r4b', effects:{ tags:['安静的告别'], memory:null, fate:-1, bond:1 } },
      { id:'ch12_r4_c', label:'说一句——然后把空间留给他们', description:'只说一句——"吃饭了。"——然后闭上眼睛。让他们记住你在喊他们吃饭的样子。', nextScene:'ch12_r4c', effects:{ tags:['日常的告别'], memory:'最后的晚饭', fate:0, bond:1 } }
    ], settlement:'ch12_r4_settlement' },
    ch12_r4a: { id:'ch12_r4a', type:'narrative', chapter:12, round:4, title:'完整的告别', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你一个一个地叫出他们的名字——从这一代到那一代。有些人听到了——有些人没有。但你说了出口——那些名字在你嘴里像最后的面团被揉完。最后一个名字——你说了何塞·阿尔卡蒂奥·布恩迪亚。他在栗树下——听不到。但风会把你的声音带过去。']}, choices:null, nextScene:'ch12_r4_settlement' },
    ch12_r4b: { id:'ch12_r4b', type:'narrative', chapter:12, round:4, title:'安静的告别', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你在睡梦中松开了手。床边的孩子们没有发现——直到你的呼吸变得很慢很慢，然后停了。他们没有哭——不是不难过，是你走得太安静了，安静得让他们觉得你只是在休息。你确实是——你一直在休息——只是这次你不会再醒来去厨房揉面了。']}, choices:null, nextScene:'ch12_r4_settlement' },
    ch12_r4c: { id:'ch12_r4c', type:'narrative', chapter:12, round:4, title:'日常的告别', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你用最后的力气说了一句："吃饭了。"声音很轻——但厨房里的每一个人都听到了。他们不知道这是你最后一句话——但他们都在那天晚上坐到了饭桌前。桌子上摆满了碗筷——很多年没有这么满过了。你闭着眼睛——但你知道：他们都在。这就够了。']}, choices:null, nextScene:'ch12_r4_settlement' },
    ch12_r4_settlement: { id:'ch12_r4_settlement', type:'settlement', chapter:12, round:4, title:'最终轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['乌尔苏拉·伊瓜兰——布恩迪亚家族的基石，马孔多的母亲——离开了。她活了一百多年——比她的丈夫、她的儿女、她的孙辈都久。她看过建村，看过战争，看过大雨，看过一切——然后用她自己的方式说了再见。','厨房空了。没有人在揉面。但火还没有灭——她走的时候把最后一把柴塞进了炉膛里。']}, settlement:{ summary:'最终轮完成。乌尔苏拉走了——她以她选择的方式告别了这个世界。', nextScene:'chapter12_end', nextLabel:'查看章末结算', quadrantNarratives: { guardian: '你握着她的手——她最后一次睁开眼睛。"你瘦了。"缝纫机停了。但你的手没停——你还在缝。', prophet: '乌尔苏拉走了——带着整个家族的重量。你站在门外——不是不想进去，是进去了就出不来了。', follower: '你在她身边——从第一碗汤到最后一次呼吸。她走了——但碗还摆在桌上。你知道她的位置。', rebel: '她走了——你不接受。你继续在桌上摆两副碗筷。命运说该停了——你说不。' } } },
    chapter12_end: { id:'chapter12_end', type:'settlement', chapter:12, round:5, title:'第十二章 · 章末结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['第十二章完结。乌尔苏拉不在了——这个家失去了它最后的一根柱子。','走廊空了。但在走廊尽头——一只黄色的蝴蝶正扇动着翅膀。它代表着一个新的爱情故事——梅梅的故事。']}, settlement:{ summary:'第十二章完结。乌尔苏拉的离世标志着一个时代的结束。', isChapterEnd:true, nextLabel:'进入第十三章 · 梅梅与黄蝴蝶', quadrantNarratives: { guardian: '你握着她的手——她最后一次睁开眼睛。"你瘦了。"缝纫机停了。但你的手没停——你还在缝。', prophet: '乌尔苏拉走了——带着整个家族的重量。你站在门外——不是不想进去，是进去了就出不来了。', follower: '你在她身边——从第一碗汤到最后一次呼吸。她走了——但碗还摆在桌上。你知道她的位置。', rebel: '她走了——你不接受。你继续在桌上摆两副碗筷。命运说该停了——你说不。' } } }
  },
  memories: {
    '老房子的呼吸': { id:'老房子的呼吸', title:'老房子的呼吸', description:'你听着白蚁在墙里啃木头——像这所房子在自己吃自己。让它走吧——房子和人一样，生来就带着死的种子。', chapter:12 },
    '摇椅上的口述': { id:'摇椅上的口述', title:'摇椅上的口述', description:'你口述——阿玛兰妲写。她停下笔哭了——你没有停。有些故事需要被写完。', chapter:12 },
    '最后的点名': { id:'最后的点名', title:'最后的点名', description:'你一个一个叫出他们的名字——最后一个是何塞·阿尔卡蒂奥·布恩迪亚。风会把声音带过去。', chapter:12 },
    '最后的晚饭': { id:'最后的晚饭', title:'最后的晚饭', description:'最后一句话是"吃饭了"。那天晚上——所有人都坐到了饭桌前。你闭着眼睛——但你知道。', chapter:12 }
  },
  familyMembers: []
});
