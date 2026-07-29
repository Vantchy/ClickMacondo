/* chapters-data-3.js — 第6-10章游戏数据 */

/* ================================================================
   第六章 · 第一次战争、阿尔卡蒂奥暴政
   ================================================================ */
registerChapter({
  id: 'chapter6', title: '第六章 · 第一次战争、阿尔卡蒂奥暴政',
  initialScene: 'ch6_opening', possessedCharacter: '奥雷里亚诺·布恩迪亚上校', chapterNumber: 6,
  preview: '<p>第七章 · 奥雷里亚诺上校的战争循环</p>',
  nextLabel: '进入第七章 · 战争循环',
  scenes: {
    ch6_opening: { id:'ch6_opening', type:'narrative', chapter:6, round:0, title:'穿上军装', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['远处有鼓声——更沉，更钝，像大地在咳嗽。你睁开眼睛。这次你不在河边，不在院子里，不在乌尔苏拉的厨房。','你站在简陋的作战室里。墙上钉着手绘地图，墨水还没干。空气里是硝石、汗水和干玉米饼的气味。你的肩膀很重——不是被压住的，是被你知道的事情压住的。','你低头。你穿着深蓝色军装，口袋上绣着三个金线字：布恩迪亚。你正在给乌尔苏拉写信："我很好。战争没有他们说的那么可怕。真正可怕的是无所事事地待在家里，等一场永远不会来的雨。"'], clues: [{ triggerText: '军装', itemId: 'gold_thread_pocket', narrative: '你用手摸了摸口袋上那三个字。金线已经磨得发白了——但"布恩迪亚"三个字还看得清。这军装穿过多少场战役？你数不清。你只知道——每次穿上它，你就离马孔多远了一步。', unlocksIn: ['chapter10'] }] }, choices:null, nextScene:'ch6_r1_choice' },

    ch6_r1_choice: { id:'ch6_r1_choice', type:'choice', chapter:6, round:1, title:'第一轮选择 · 初战', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你的第一场战役。敌人是保守党的正规军——人数比你们多三倍，武器比你们精良。你的手下是农民——他们手里是农具改造的矛。','一个中尉建议撤退，另外有人主张正面冲锋。所有人都在等你的命令。'], transition:'你选择——' }, choices:[
      { id:'ch6_r1_a', label:'夜袭——以少胜多', description:'利用地势和夜色。打游击战——你不是正规军，不需要按规则来。', nextScene:'ch6_r1a', effects:{ tags:['游击战术家'], memory:null, fate:1, bond:0 } },
      { id:'ch6_r1_b', label:'撤退——保存实力', description:'今天不打——等更好的时机。活着比勇敢更重要。', nextScene:'ch6_r1b', effects:{ tags:['谨慎的指挥官'], memory:null, fate:-1, bond:1 } },
      { id:'ch6_r1_c', label:'正面迎战——鼓舞士气', description:'站在最前面，让每个士兵都看见你的脸。恐惧只有在你转身的时候才会放大。', nextScene:'ch6_r1c', effects:{ tags:['勇敢的领袖'], memory:null, fate:2, bond:0 } }
    ], settlement:'ch6_r1_settlement' },
    ch6_r1a: { id:'ch6_r1a', type:'narrative', chapter:6, round:1, title:'游击战术家', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你在午夜发动突袭。你的士兵从三个方向同时进攻——他们不了解战术，但他们了解这片丛林。保守党军队在黑暗中乱成一团——你们赢了。损失了十二个人——但赢得了第一批真正的武器。']}, choices:null, nextScene:'ch6_r1_settlement' },
    ch6_r1b: { id:'ch6_r1b', type:'narrative', chapter:6, round:1, title:'谨慎的指挥官', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你下令撤退。士兵们不解——但服从了。三天后，你发现了更好的地形——一个峡谷。敌人追你们的时候正好进入峡谷——你从上方用滚石和少数的子弹击溃了他们。有时候后退就是前进。']}, choices:null, nextScene:'ch6_r1_settlement' },
    ch6_r1c: { id:'ch6_r1c', type:'narrative', chapter:6, round:1, title:'勇敢的领袖', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你站在最前面。你的士兵看着你——然后他们冲了上去。伤亡很重——但你们赢了。因为没有人愿意在后撤的时候看见上校站在最前面。你的肩膀中了一枪——那枚子弹在你体内留了三十多年，像一个迟到的句号。']}, choices:null, nextScene:'ch6_r1_settlement' },
    ch6_r1_settlement: { id:'ch6_r1_settlement', type:'settlement', chapter:6, round:1, title:'第一轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['首战告捷——或至少活下来了。你的名字开始在自由党控制的地区流传。人们叫你"布恩迪亚上校"——这个称号会跟随你直到死。']}, settlement:{ summary:'第一轮完成。你指挥了第一场战役。', nextScene:'ch6_r2_choice', nextLabel:'进入第二轮', quadrantNarratives: { guardian: '权力是火——你握住了它，但没有被它烧成灰。', prophet: '你看见了权力的真面目——不是力量，是孤独的放大器。', follower: '你选择了信任——信任乌尔苏拉，信任家。权力可以等。', rebel: '你拒绝了权力的诱惑——不是因为它不好，是因为它不是你想要的枷锁。' } } },

    ch6_r2_choice: { id:'ch6_r2_choice', type:'choice', chapter:6, round:2, title:'第二轮选择 · 阿尔卡蒂奥的暴政', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你不在马孔多的时候，阿尔卡蒂奥——你的侄子——接管了镇子。他穿上军装，学着你走路。他设立了军事法庭——实际上就是他自己坐在一张桌子后面，凭感觉判刑。','村民们开始害怕走进镇公所。他枪毙了一个卖鸡蛋的——因为鸡蛋涨价了。"投机倒把。"他说。乌尔苏拉冲进镇公所，脱下拖鞋——当着所有人的面打了阿尔卡蒂奥。'], transition:'你选择——' }, choices:[
      { id:'ch6_r2_a', label:'回去——制止阿尔卡蒂奥', description:'你不能让布恩迪亚的名字变成暴政的同义词。放下前线的事，回去整顿。', nextScene:'ch6_r2a', effects:{ tags:['纠正者'], memory:null, fate:0, bond:2 } },
      { id:'ch6_r2_b', label:'写信警告他', description:'你不能离开前线——但可以写信。告诉阿尔卡蒂奥：权力不是用来报仇的。', nextScene:'ch6_r2b', effects:{ tags:['远程的父亲'], memory:null, fate:0, bond:1 } },
      { id:'ch6_r2_c', label:'信任乌尔苏拉——她会处理', description:'乌尔苏拉不需要你的帮助。她已经用拖鞋教训了他——现在让他自己学会做人。', nextScene:'ch6_r2c', effects:{ tags:['放手者'], memory:null, fate:-1, bond:1 } }
    ], settlement:'ch6_r2_settlement' },
    ch6_r2a: { id:'ch6_r2a', type:'narrative', chapter:6, round:2, title:'纠正者', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你骑着马回到马孔多。阿尔卡蒂奥看见你的时候——脸白了。你没有说话。你只是摘下了他的军衔——那是你亲手给他的。"权力不是用来报仇的——是用来保护的。你连自己要保护谁都不知道。"他低下头——不是因为羞愧，是因为恐惧。']}, choices:null, nextScene:'ch6_r2_settlement' },
    ch6_r2b: { id:'ch6_r2b', type:'narrative', chapter:6, round:2, title:'远程的父亲', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你写了一封长信——不是命令，是劝诫。你告诉他：每一个被你枪毙的人都有一个母亲。阿尔卡蒂奥读了信——然后把信扔进了火里。但他那天晚上没有签署任何处决令。也许不是因为信——也许是因为乌尔苏拉的拖鞋还挂在他办公室的墙上。']}, choices:null, nextScene:'ch6_r2_settlement' },
    ch6_r2c: { id:'ch6_r2c', type:'narrative', chapter:6, round:2, title:'放手者', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你没有回去。你相信乌尔苏拉——她这辈子管住了比阿尔卡蒂奥更疯狂的人。果然——阿尔卡蒂奥最终被行刑队处决了。不是你的命令——是他的敌人。你听到消息时在前线——你没有哭，但你在当天的作战地图上，在他守卫的那个镇子旁边画了一个小圆圈。']}, choices:null, nextScene:'ch6_r2_settlement' },
    ch6_r2_settlement: { id:'ch6_r2_settlement', type:'settlement', chapter:6, round:2, title:'第二轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['阿尔卡蒂奥的暴政结束了——以这样或那样的方式。布恩迪亚的名字没有被玷污——但它已经被权力触碰过了。有些痕迹是洗不掉的。']}, settlement:{ summary:'第二轮完成。你面对了家族中产生的暴政。', nextScene:'ch6_r3_choice', nextLabel:'进入第三轮', quadrantNarratives: { guardian: '权力是火——你握住了它，但没有被它烧成灰。', prophet: '你看见了权力的真面目——不是力量，是孤独的放大器。', follower: '你选择了信任——信任乌尔苏拉，信任家。权力可以等。', rebel: '你拒绝了权力的诱惑——不是因为它不好，是因为它不是你想要的枷锁。' } } },

    ch6_r3_choice: { id:'ch6_r3_choice', type:'choice', chapter:6, round:3, title:'第三轮选择 · 处决令', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你的一个老朋友——和你一起从马孔多出征的人——被俘了。不是被敌人——是被自己人。他被指控叛变——但你知道他是无辜的。他只是在一封家书里写了一句"也许我们该和谈了"。','军事法庭判他死刑。但你有权否决。你的手下正看着你——他们中有的人认为叛变就是叛变，无论形式。'], transition:'你选择——' }, choices:[
      { id:'ch6_r3_a', label:'否决处决——救他', description:'他是无辜的——你知道。行使你的权力，撤销死刑。哪怕手下人不满。', nextScene:'ch6_r3a', effects:{ tags:['公正的裁决者'], memory:null, fate:-1, bond:2 } },
      { id:'ch6_r3_b', label:'签署处决令', description:'你不能因为一个人而动摇全军纪律。军法就是军法——即使你知道他不该死。', nextScene:'ch6_r3b', effects:{ tags:['铁血指挥官'], memory:'签署的名字', characterFlags: { 'signed_death': 1 }, fate:2, bond:-1 } },
      { id:'ch6_r3_c', label:'放他逃走', description:'你不能正式否决——但你可以在夜里让人放他走。让他带着秘密活着离开。', nextScene:'ch6_r3c', effects:{ tags:['暗中救赎者'], memory:null, fate:1, bond:1 } }
    ], settlement:'ch6_r3_settlement' },
    ch6_r3a: { id:'ch6_r3a', type:'narrative', chapter:6, round:3, title:'公正的裁决者', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你否决了处决。你的手下有人不满——有人离开了。但你看着那个老朋友的眼睛，知道你做对了。他跪下来，想吻你的手——你把他拉起来。"别跪。布恩迪亚从来不让人跪。"']}, choices:null, nextScene:'ch6_r3_settlement' },
    ch6_r3b: { id:'ch6_r3b', type:'narrative', chapter:6, round:3, title:'铁血指挥官', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你签了。笔划过纸的时候，你感觉自己的手指在抖——但你让你的脸保持平静。"执行。"你说。那天晚上你听见了枪声。你没睡。你在行军床上翻来覆去——你听见的不是枪声，是他在马孔多院子里和你一起分玉米饼的笑声。从那以后你签处决令再也不抖了。这不让你骄傲——但这是事实。']}, choices:null, nextScene:'ch6_r3_settlement' },
    ch6_r3c: { id:'ch6_r3c', type:'narrative', chapter:6, round:3, title:'暗中救赎者', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你让一个心腹在半夜打开牢门。他逃走了——带走了你给他的干粮和一封信。很多年后，当你已经归隐制作金鱼的时候，你会收到一封匿名信——信上只有一个名字："谢谢。"署名是空白。但你知道是谁。']}, choices:null, nextScene:'ch6_r3_settlement' },
    ch6_r3_settlement: { id:'ch6_r3_settlement', type:'settlement', chapter:6, round:3, title:'第三轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['处决或不处决——你的手上已经有了血迹。战争中没有人是干净的。区别只在于是谁的血——敌人的，朋友的，还是你自己的。']}, settlement:{ summary:'第三轮完成。你面对了战争中最难的抉择——朋友的生死。', nextScene:'ch6_r4_choice', nextLabel:'进入第四轮', quadrantNarratives: { guardian: '权力是火——你握住了它，但没有被它烧成灰。', prophet: '你看见了权力的真面目——不是力量，是孤独的放大器。', follower: '你选择了信任——信任乌尔苏拉，信任家。权力可以等。', rebel: '你拒绝了权力的诱惑——不是因为它不好，是因为它不是你想要的枷锁。' } } },

    ch6_r4_choice: { id:'ch6_r4_choice', type:'choice', chapter:6, round:4, title:'第四轮选择 · 孤独的将军', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你打了三十二场起义——三十二场全部失败。你和十七个女人生下十七个儿子——一夜之间全部被杀死。你躲过十四次暗杀、七十三次伏击和一次行刑队。','你拒绝共和国总统颁发的勋章。你已经不是最初那个为正义而战的年轻人了。你在打一场自己都不知道为什么要打的仗。'], transition:'你选择——' }, choices:[
      { id:'ch6_r4_a', label:'继续战斗——直到胜利或死亡', description:'你已经走了这么远。不能回头。哪怕路早就变成了圆圈——也必须走下去。', nextScene:'ch6_r4a', effects:{ tags:['至死不渝者'], memory:null, fate:2, bond:-1 } },
      { id:'ch6_r4_b', label:'寻求和平谈判', description:'战争已经吞噬了太多生命。是时候坐下来谈了——哪怕对方曾经想杀你。', nextScene:'ch6_r4b', effects:{ tags:['和平寻求者'], memory:'停战协议', fate:-1, bond:1 } },
      { id:'ch6_r4_c', label:'退回马孔多——做小金鱼', description:'你已经做完了你能做的一切。回家——做那条永远做不完的小金鱼。', nextScene:'ch6_r4c', effects:{ tags:['疲倦的归乡者'], memory:'作坊里的金鱼', fate:-2, bond:0 } }
    ], settlement:'ch6_r4_settlement' },
    ch6_r4a: { id:'ch6_r4a', type:'narrative', chapter:6, round:4, title:'至死不渝者', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你继续战斗。三十二次失败之后是第三十三次起义——你赢了。但你不知道赢了什么——因为当你站在被攻占的城市中央，你发现自己想不起为什么当初要出发。也许原因已经不重要了。也许从一开始就不重要。']}, choices:null, nextScene:'ch6_r4_settlement' },
    ch6_r4b: { id:'ch6_r4b', type:'narrative', chapter:6, round:4, title:'和平寻求者', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你坐在谈判桌前。对面的将军——那个曾经想杀你的人——看起来和你一样疲惫。你们签了停战协议。条款无所谓——你们都知道，战争真正的结束不是因为一纸协议，是因为双方都累得抬不起手了。']}, choices:null, nextScene:'ch6_r4_settlement' },
    ch6_r4c: { id:'ch6_r4c', type:'narrative', chapter:6, round:4, title:'疲倦的归乡者', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你脱下军装，骑上马，朝马孔多方向走了很久。你推开实验室的门——灰尘积了厚厚一层。你拿起坩埚，开始熔金——做一条小金鱼。做好之后，你把它熔掉——重新开始。一遍又一遍。你不是在制作金鱼——你是在重复一个让你不需要思考的动作。战争结束了。你的战争。']}, choices:null, nextScene:'ch6_r4_settlement' },
    ch6_r4_settlement: { id:'ch6_r4_settlement', type:'settlement', chapter:6, round:4, title:'第四轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['战争在继续——或结束了。但你已经不是最初那个人了。你的军装旧了，你的手上有老茧，你的眼睛里有某种永远不会再亮起来的东西。但你还活着——这本身就是一个奇迹。']}, settlement:{ summary:'第四轮完成。你面对了战争的无意义——选择了继续、和谈还是归乡。', nextScene:'ch6_r5_choice', nextLabel:'进入最终轮', quadrantNarratives: { guardian: '权力是火——你握住了它，但没有被它烧成灰。', prophet: '你看见了权力的真面目——不是力量，是孤独的放大器。', follower: '你选择了信任——信任乌尔苏拉，信任家。权力可以等。', rebel: '你拒绝了权力的诱惑——不是因为它不好，是因为它不是你想要的枷锁。' } } },

    ch6_r5_choice: { id:'ch6_r5_choice', type:'choice', chapter:6, round:5, title:'第五轮选择 · 权力的终局', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['战争终于结束了——真的结束了。你回到马孔多，把自己关在作坊里。你不接见任何人，不读信，不回答任何问题。你做一条小金鱼，卖掉——换来金币，然后把金币熔掉，重新做成金鱼。一个完美的循环。','有人来请你做总统——你拒绝了。有人来请你做将军——你拒绝了。有人来给你颁发勋章——你拒绝了。乌尔苏拉站在作坊门口："你在里面做什么？""做金鱼。"她转身走了——但她把一碗汤放在门口。'], transition:'你选择——' }, choices:[
      { id:'ch6_r5_a', label:'永远留在作坊里', description:'关上门。再不出去。让世界忘记你还活着——你也忘记世界还存在。', nextScene:'ch6_r5a', effects:{ tags:['永远的隐士'], memory:'金鱼的永恒循环', fate:0, bond:-2 } },
      { id:'ch6_r5_b', label:'偶尔出来——陪乌尔苏拉吃饭', description:'你不需要参与世界——但你需要陪母亲吃晚饭。这是你能做的最小的事。', nextScene:'ch6_r5b', effects:{ tags:['孝子'], memory:null, fate:-1, bond:2 } },
      { id:'ch6_r5_c', label:'重新开始——以另一种方式', description:'战争结束了，但世界还在。走出作坊，用你的双手建一些东西——不是武器，不是金鱼。', nextScene:'ch6_r5c', effects:{ tags:['重生者'], memory:'作坊外的阳光', fate:0, bond:1 } },
      { id:'ch6_r5_d', label:'你知道她在等你——去厨房坐一会儿', description:'乌尔苏拉从不叫你吃饭——她只是多摆一副碗筷。你知道那副碗筷还在桌上——去坐下来，让她看到你回来了。', nextScene:'ch6_r5b', requiredRelationship: { character: '乌尔苏拉·伊瓜兰', min: 75 }, effects:{ tags:['回到饭桌的人'], memory:null, fate: -1, bond: 2 } }
    ], settlement:'ch6_r5_settlement' },
    ch6_r5a: { id:'ch6_r5a', type:'narrative', chapter:6, round:5, title:'永远的隐士', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你关上了作坊的门。从此外界的一切都不再重要。你每天做金鱼，熔掉，再做。你的世界缩成了一间小屋子、一个坩埚和一堆闪光的金属。外面的人在衰老、在死去、在遗忘——而你在熔金。时间在你这里成了一个圆圈——没有起点，没有终点。']}, choices:null, nextScene:'ch6_r5_settlement' },
    ch6_r5b: { id:'ch6_r5b', type:'narrative', chapter:6, round:5, title:'孝子', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你仍然每天做金鱼——但每到黄昏，你会从作坊里出来，坐在饭桌前。乌尔苏拉把一碗汤放在你面前。你们不说话——不需要说话。你们只是在同一个房间里呼吸。她的手指苍老却有力——她活了太久，见过太多，但她仍然每天摆碗筷。你吃得很慢——不是因为不饿，是因为你想让这段时间延长。']}, choices:null, nextScene:'ch6_r5_settlement' },
    ch6_r5c: { id:'ch6_r5c', type:'narrative', chapter:6, round:5, title:'重生者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你走出作坊。阳光刺眼——你已经很久没见过正午的阳光了。你走到院子里，拿起一把很久没用过的锄头，开始翻地。不是因为你想种地——是因为你想用双手触摸这片土地。不是以战士的身份，不是以炼金术士的身份——是以一个人的身份。乌尔苏拉从窗口看着你——她没有说话，但她把一个新碗放在了桌上。']}, choices:null, nextScene:'ch6_r5_settlement' },
    ch6_r5_settlement: { id:'ch6_r5_settlement', type:'settlement', chapter:6, round:5, title:'第五轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['战争结束了。你的战争，阿尔卡蒂奥的战争，这场把整个国家撕裂成两半的战争——都结束了。马孔多还在。栗树还在。作坊里的坩埚还在——你还在。这也许就够了。']}, settlement:{ summary:'最终轮完成。战争结束了——剩下的日子是循环、陪伴或重生。', nextScene:'chapter6_end', nextLabel:'查看章末结算', quadrantNarratives: { guardian: '权力是火——你握住了它，但没有被它烧成灰。', prophet: '你看见了权力的真面目——不是力量，是孤独的放大器。', follower: '你选择了信任——信任乌尔苏拉，信任家。权力可以等。', rebel: '你拒绝了权力的诱惑——不是因为它不好，是因为它不是你想要的枷锁。' } } },
    chapter6_end: { id:'chapter6_end', type:'settlement', chapter:6, round:6, title:'第六章 · 章末结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['第六章完结。你经历了战争的开始与结束，权力的诱惑与拒绝。从现在开始，马孔多的历史将翻开新的一页——一个没有枪声但同样残酷的篇章。']}, settlement:{ summary:'第六章完结。战争教会你权力最可怕的一面——它不会让你变成怪物，它只会让你不再认识自己。', isChapterEnd:true, nextLabel:'进入第七章 · 战争循环', quadrantNarratives: { guardian: '权力是火——你握住了它，但没有被它烧成灰。', prophet: '你看见了权力的真面目——不是力量，是孤独的放大器。', follower: '你选择了信任——信任乌尔苏拉，信任家。权力可以等。', rebel: '你拒绝了权力的诱惑——不是因为它不好，是因为它不是你想要的枷锁。' } } }
  },
  memories: {
    '签署的名字': { id:'签署的名字', title:'签署的名字', description:'你签下了处决令——笔划过纸的时候手指在抖。从那以后你再也不抖了。这不是骄傲——是事实。', chapter:6 },
    '停战协议': { id:'停战协议', title:'停战协议', description:'你在谈判桌前签了字。对面的将军看起来和你一样疲惫——战争结束是因为双方都累得抬不起手了。', chapter:6 },
    '作坊里的金鱼': { id:'作坊里的金鱼', title:'作坊里的金鱼', description:'你脱下军装，回到作坊——做一条金鱼，熔掉，重新开始。一个完美的循环。', chapter:6 },
    '金鱼的永恒循环': { id:'金鱼的永恒循环', title:'金鱼的永恒循环', description:'你关上门，再也没有出去。时间变成了圆圈——没有起点，没有终点。', chapter:6 },
    '作坊外的阳光': { id:'作坊外的阳光', title:'作坊外的阳光', description:'你走出作坊，拿起锄头。阳光刺眼——但你想用手指触摸这片土地。以一个人的身份。', chapter:6 }
  },
  familyMembers: [
    { name:'阿尔卡蒂奥', relation:'侄子（已故）', generation:3, isCurrent:false, description:'何塞·阿尔卡蒂奥的儿子。在奥雷里亚诺上校离开时掌管马孔多，成为暴君。后被行刑队处决。' }
  ]
});

/* ================================================================
   第七章 · 奥雷里亚诺上校的战争循环
   ================================================================ */
registerChapter({
  id: 'chapter7', title: '第七章 · 奥雷里亚诺上校的战争循环',
  initialScene: 'ch7_opening', possessedCharacter: '奥雷里亚诺·布恩迪亚上校', chapterNumber: 7,
  preview: '<p>第八章 · 何塞·阿尔卡蒂奥归来、美人儿蕾梅黛丝</p>',
  nextLabel: '进入第八章 · 美人儿蕾梅黛丝',
  scenes: {
    ch7_opening: { id:'ch7_opening', type:'narrative', chapter:7, round:0, title:'蛇咬住了自己的尾巴', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你已经有三天没有换下这身军装了。汗、火药、泥水在领口和腋下结成硬壳——你不是穿着衣服，是被包裹在某种东西里面。像飞虫在松脂中，缓慢地变成不是自己的东西。','你坐在帐篷里的行军床边。右手还握着枪——左轮，六发子弹，枪管在油灯下泛着冷光。你没有在瞄准——你只是握着它。','地图上的点你早就背熟了。每一个点你都去过——不止一遍，是三四遍、五六遍。你在一个圆圈里行军——从一场败仗逃到下一场胜仗，从一封叛变信读到下一封。而你在回信里只写两个字："处决他。"桌角放着一条未完成的小金鱼——昨晚做的，今天就会熔掉。'], clues: [
      { triggerText: '小金鱼', itemId: 'goldfish_cycle', narrative: '一条小金鱼——鳞片还在闪光。你知道它会被熔掉，重新开始。一遍又一遍。不是徒劳——是仪式。是你在战争中唯一不需要瞄准的动作。', unlocksIn: ['chapter17'] }
    ] }, echoCondition: { memory: '糖苹果与墓石' }, echoText: '你记得蕾梅黛丝——不是她的脸，是她举着糖苹果站在街对面的姿势。你的手指现在在扳机上——但那天你的手指在她的糖壳上。', choices:null, nextScene:'ch7_r1_choice' },

    ch7_r1_choice: { id:'ch7_r1_choice', type:'choice', chapter:7, round:1, title:'第一轮选择 · 自杀未遂', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你把枪口抵在自己胸口。不是因为害怕敌人——是因为你知道：战争已经变成了一个圆圈。你杀的人越多，你要保护的人就越少。你已经不记得你最初是为了什么而拿起枪的。','你的手指在扳机上。帐篷外——有人在喊你的名字。不是"上校"，是"奥雷里亚诺"。那个声音很老——你认得。是乌尔苏拉。但她在马孔多——你不该在这里听见她。也许你已经疯了。'], transition:'你选择——' }, choices:[
      { id:'ch7_r1_a', label:'放下枪——继续活着', description:'不是因为怕死——是因为你还欠乌尔苏拉一碗汤。至少活着回去喝掉它。', nextScene:'ch7_r1a', effects:{ tags:['幸存者'], memory:null, fate:-1, bond:1 } },
      { id:'ch7_r1_b', label:'扣下扳机——结束一切', description:'你已经累了。让这个循环停止——哪怕不是以胜利的方式。', nextScene:'ch7_r1b', effects:{ tags:['自我毁灭者'], memory:'枪口的硝烟', fate:2, bond:-2 } },
      { id:'ch7_r1_c', label:'朝天开枪——释放信号', description:'不杀自己，也不继续战斗。朝天开一枪——让所有人都知道你在这里，然后就停下来了。', nextScene:'ch7_r1c', effects:{ tags:['宣言者'], memory:'天空中的枪声', fate:1, bond:0 } }
    ], settlement:'ch7_r1_settlement' },
    ch7_r1a: { id:'ch7_r1a', type:'narrative', chapter:7, round:1, title:'幸存者', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你放下了枪。不是因为害怕——是因为你忽然想起乌尔苏拉说过的话："别死。"你还没有完成这句话。你站起来，走出帐篷——外面的世界还在。它没有变好，但它还在。']}, choices:null, nextScene:'ch7_r1_settlement' },
    ch7_r1b: { id:'ch7_r1b', type:'narrative', chapter:7, round:1, title:'自我毁灭者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你扣下扳机——但枪没有响。不是卡壳了——是子弹早就被你取出来了。你不知道吗？也许你知道——但你的手指需要感觉到扳机的阻力。你的身体想活着，哪怕你的心已经不在了。你跪在帐篷地上，枪掉在旁边——你看着它，像一个父亲看着背叛了自己的儿子。']}, choices:null, nextScene:'ch7_r1_settlement' },
    ch7_r1c: { id:'ch7_r1c', type:'narrative', chapter:7, round:1, title:'宣言者', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你把枪举过肩膀，朝天空开了一枪。枪声在营地上空回荡——所有人都停下来了。你走出帐篷，站在所有人面前。"战争结束了。"你说。不是疑问句。不是你宣布——是你决定了。有人欢呼。有人沉默。有人在想：他是对的——还是他已经疯了。']}, choices:null, nextScene:'ch7_r1_settlement' },
    ch7_r1_settlement: { id:'ch7_r1_settlement', type:'settlement', chapter:7, round:1, title:'第一轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['你活下来了——或以某种方式。你走出了帐篷。战争还在继续——但你的战争已经结束了。你把自己的左轮枪埋在了帐篷外的一棵树下。没有人知道那棵树的位置——除了你。']}, settlement:{ summary:'第一轮完成。你在循环的底部触摸了死亡。', nextScene:'ch7_r2_choice', nextLabel:'进入第二轮', quadrantNarratives: { guardian: '你理解了循环——不是用头脑，是用骨头里的疲倦。', prophet: '你看透了战争的循环——蛇咬住自己的尾巴。你看透了一切——也失去了一切。', follower: '在循环的底部，你选择了活着——不是为自己，是为那些还在等你的人。', rebel: '你朝天开枪——让循环停在那一刻。不是你赢了——是你决定了结束的方式。' } } },

    ch7_r2_choice: { id:'ch7_r2_choice', type:'choice', chapter:7, round:2, title:'第二轮选择 · 十七个儿子', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['在战争期间，你和十七个女人生下了十七个儿子。不是爱——是一种更孤独的东西。她们来了又走——只有儿子们留下来了。你在每个儿子出生时寄去一封信，一封同样的信："你的父亲叫奥雷里亚诺·布恩迪亚上校。这不是你的幸运——是你的十字架。"','现在——你听说他们中有几个被暗杀了。不是因为战争——是因为他们姓布恩迪亚。有人在猎杀你的孩子们。'], transition:'你选择——' }, choices:[
      { id:'ch7_r2_a', label:'召集所有儿子——保护他们', description:'把他们全部叫到马孔多。在布恩迪亚家的庇护下——没有人能动他们。', nextScene:'ch7_r2a', effects:{ tags:['保护者父亲'], memory:null, fate:0, bond:2 } },
      { id:'ch7_r2_b', label:'让他们自己选择——不要来找你', description:'姓布恩迪亚已经够危险了——不要让这个姓氏变成他们的靶子。各自散去，各自保命。', nextScene:'ch7_r2b', effects:{ tags:['放手的父亲'], memory:null, fate:1, bond:-1 } },
      { id:'ch7_r2_c', label:'追查凶手——为他们复仇', description:'你不等——你去找那些暗杀者。一个都不留。用你的方式。', nextScene:'ch7_r2c', effects:{ tags:['复仇的父亲'], memory:'十七封信的灰烬', fate:1, bond:1 } }
    ], settlement:'ch7_r2_settlement' },
    ch7_r2a: { id:'ch7_r2a', type:'narrative', chapter:7, round:2, title:'保护者父亲', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你把十七个儿子全部召到马孔多。乌尔苏拉看着这群年轻人走进院子——他们的面孔各不相同，但眼睛都像你。她在每一个人的额头上画了一个十字——用圣灰。但你知道，圣灰挡不住子弹。']}, choices:null, nextScene:'ch7_r2_settlement' },
    ch7_r2b: { id:'ch7_r2b', type:'narrative', chapter:7, round:2, title:'放手的父亲', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你写了一封信——十七封相同的信。"不要来找我。不要承认你们姓布恩迪亚。活下去——这是你们唯一欠我的。"你把信投出去。你不知道有多少人收到了。你也不知道有多少人活着收到了。']}, choices:null, nextScene:'ch7_r2_settlement' },
    ch7_r2c: { id:'ch7_r2c', type:'narrative', chapter:7, round:2, title:'复仇的父亲', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你亲自追查。枪——不是谈判。那些暗杀者一个一个倒下——但你发现幕后的人已经死了，他的继承人也死了。仇恨是一个无底洞——你扔进去的每一铲土都只是为了听见它落地的回声。你的十七个儿子还是被杀了。但你至少让杀他们的人付出了代价。']}, choices:null, nextScene:'ch7_r2_settlement' },
    ch7_r2_settlement: { id:'ch7_r2_settlement', type:'settlement', chapter:7, round:2, title:'第二轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['十七个儿子。十七个被暗杀的目标。他们因你的名字而生——因同一个名字而死。你没有办法阻止子弹——你只能决定子弹射来时，你是挡在前面还是已经转身不看。']}, settlement:{ summary:'第二轮完成。你的儿子们被猎杀——你做了你能做的。', nextScene:'ch7_r3_choice', nextLabel:'进入第三轮', quadrantNarratives: { guardian: '你理解了循环——不是用头脑，是用骨头里的疲倦。', prophet: '你看透了战争的循环——蛇咬住自己的尾巴。你看透了一切——也失去了一切。', follower: '在循环的底部，你选择了活着——不是为自己，是为那些还在等你的人。', rebel: '你朝天开枪——让循环停在那一刻。不是你赢了——是你决定了结束的方式。' } } },

    ch7_r3_choice: { id:'ch7_r3_choice', type:'choice', chapter:7, round:3, title:'第三轮选择 · 勋章与拒绝', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['共和国总统派人送来一枚勋章——表彰你在战争中的贡献。金质的勋章在桌上闪闪发光。','你在作坊里做金鱼。你抬头看了一眼——然后继续做金鱼。使者等在门口，尴尬地端着那枚勋章。乌尔苏拉站在走廊上——她没有说话，但你在她眼睛里看见了一种你不需要翻译的语言。'], transition:'你选择——' }, choices:[
      { id:'ch7_r3_a', label:'拒绝勋章——让他拿回去', description:'你不是为了勋章才打仗的。让使者带着它回去——告诉总统他误解了一切。', nextScene:'ch7_r3a', effects:{ tags:['拒绝荣誉者'], memory:null, fate:1, bond:0 } },
      { id:'ch7_r3_b', label:'接受——但转送给阵亡将士家属', description:'这勋章不是你的——是那些回不来的人的。把它融掉，换成金币分给他们的家人。', nextScene:'ch7_r3b', effects:{ tags:['转赠者'], memory:null, fate:1, bond:-1 } },
      { id:'ch7_r3_c', label:'接受——把它放在蕾梅黛丝墓前', description:'你唯一想领受的荣誉——是让她看见。哪怕她在另一个世界。', nextScene:'ch7_r3c', effects:{ tags:['永恒的爱人'], memory:'墓前的勋章', fate:0, bond:0 } }
    ], settlement:'ch7_r3_settlement' },
    ch7_r3a: { id:'ch7_r3a', type:'narrative', chapter:7, round:3, title:'拒绝荣誉者', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你没有抬头。"拿回去。告诉他——勋章留给那些需要被记住的人。我已经不需要了。"使者走了。乌尔苏拉走进作坊，把你刚做好的一条金鱼拿起来，看了很久。然后她放回去——什么也没说。但你觉得那条金鱼比刚才重了一些。']}, choices:null, nextScene:'ch7_r3_settlement' },
    ch7_r3b: { id:'ch7_r3b', type:'narrative', chapter:7, round:3, title:'转赠者', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你接受了勋章——然后当场把它熔成了金子。坩埚里的金液和你的金鱼混在一起。你把金币分装成很多小袋子——每一袋附上一封信："你的丈夫/父亲/儿子没有回来——但这不是他的错。"']}, choices:null, nextScene:'ch7_r3_settlement' },
    ch7_r3c: { id:'ch7_r3c', type:'narrative', chapter:7, round:3, title:'永恒的爱人', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你把勋章放在蕾梅黛丝的墓石上。风很大——你怕它被吹走，用一块石头压住了。然后你站了很久——久到月亮升起来，久到乌尔苏拉走出来给你披了一件外套。你没有说话。你只是站在那里——让一个十四岁的女孩知道：她的丈夫赢得了战争。但他宁愿输掉战争——如果能换回她。']}, choices:null, nextScene:'ch7_r3_settlement' },
    ch7_r3_settlement: { id:'ch7_r3_settlement', type:'settlement', chapter:7, round:3, title:'第三轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['勋章被你以某种方式处理了。总统不会理解你为什么拒绝——他永远不会。但马孔多的人会——因为他们知道你从来不是为了勋章才出征的。']}, settlement:{ summary:'第三轮完成。你面对了荣誉——选择接受、转赠或拒绝。', nextScene:'ch7_r4_choice', nextLabel:'进入第四轮', quadrantNarratives: { guardian: '你理解了循环——不是用头脑，是用骨头里的疲倦。', prophet: '你看透了战争的循环——蛇咬住自己的尾巴。你看透了一切——也失去了一切。', follower: '在循环的底部，你选择了活着——不是为自己，是为那些还在等你的人。', rebel: '你朝天开枪——让循环停在那一刻。不是你赢了——是你决定了结束的方式。' } } },

    ch7_r4_choice: { id:'ch7_r4_choice', type:'choice', chapter:7, round:4, title:'第四轮选择 · 回归与空虚', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['战争结束了——这一次真的结束了。停战协议签了，军队解散了，将军们各回各家。你回到马孔多，推开作坊的门。灰尘。坩埚已经冷了——你的金鱼还在里面，但已经氧化变黑了。','你在作坊里站了很久。你不知道你还能做什么——你已经做了所有的事。战争、爱情、死亡、权力——你都经历过了。现在只剩下一件事：等死。但这也许不是唯一的选择。'], transition:'你选择——' }, choices:[
      { id:'ch7_r4_a', label:'继续做金鱼——让它成为你的修行', description:'金鱼不是逃避——是修行。在重复中寻找平静。把剩下的日子变成一件一件的小金鱼。', nextScene:'ch7_r4a', effects:{ tags:['工匠'], memory:null, fate:1, bond:0 } },
      { id:'ch7_r4_b', label:'写回忆录', description:'把你的经历写下来。不是为了出版——是为了记住。让后人知道这场战争到底是怎么回事。', nextScene:'ch7_r4b', effects:{ tags:['记录者'], memory:'未完成的回忆录', fate:1, bond:0 } },
      { id:'ch7_r4_c', label:'帮助重建马孔多', description:'不要整天关在作坊里。走出去——帮村里人修房子、挖水渠、教孩子们识字。用你的双手做有用的事。', nextScene:'ch7_r4c', effects:{ tags:['重建者'], memory:null, fate:0, bond:1 } },
      { id:'ch7_r4_d', label:'带孩子们去看冰块——就像当年父亲带你去看一样', description:'你忽然想起父亲的手覆在你手背上的重量。冰块还在——也许你父亲没有说出口的话，你可以替他说给下一代听。', nextScene:'ch7_r4a', requiredFlag: { flag: 'showed_ice', min: 1 }, effects:{ tags:['冰的传承者'], memory:null, fate: 0, bond: 2 } },
      { id:'ch7_r4_e', label:'你在循环中看见了意义——不是徒劳，是仪式', description:'金鱼做好了熔掉——一遍又一遍。你终于明白了：不是重复，是每一次都不同。每一次熔掉都是一次选择——选择重新开始。', nextScene:'ch7_r4a', requiredFate: { min: 4 }, effects:{ tags:['看见循环的人'], memory:null, fate: 1, bond: 0 } }
    ], settlement:'ch7_r4_settlement' },
    ch7_r4a: { id:'ch7_r4a', type:'narrative', chapter:7, round:4, title:'工匠', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你重新点燃坩埚。金子在火焰中慢慢变软——像你一样。你做了一条金鱼——然后把它熔掉。重新开始。一遍，又一遍。你不再数做了多少条——因为数字在这里没有意义。重要的不是金鱼——是你做金鱼的时候，你的心是安静的。']}, choices:null, nextScene:'ch7_r4_settlement' },
    ch7_r4b: { id:'ch7_r4b', type:'narrative', chapter:7, round:4, title:'记录者', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你拿出纸和笔。开始写——从冰块写起，从糖苹果写起，从第一次听见枪声的那个下午写起。你写了很久。乌尔苏拉偶尔推门进来，把一碗汤放在你手边，然后离开。她没有读你写了什么——但她知道你在写自己。']}, choices:null, nextScene:'ch7_r4_settlement' },
    ch7_r4c: { id:'ch7_r4c', type:'narrative', chapter:7, round:4, title:'重建者', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你走出作坊。村民们看见你的时候愣了一下——然后继续干活。你拿起一把铲子，加入了挖水渠的队伍。没有人说"上校回来了"——他们只是给你让了一个位置。那天晚上你的手上长了水泡——但你睡得比打完任何一场胜仗之后都更沉。']}, choices:null, nextScene:'ch7_r4_settlement' },
    ch7_r4_settlement: { id:'ch7_r4_settlement', type:'settlement', chapter:7, round:4, title:'第四轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['你回到了马孔多——不是以上校的身份，是以一个疲倦的人的身份。栗树还在。乌尔苏拉还在。作坊还在。你还在——这本身就是一个你从来没有料到的结局。']}, settlement:{ summary:'第四轮完成。战后余生——你选择了如何度过。', nextScene:'ch7_r5_choice', nextLabel:'进入最终轮', quadrantNarratives: { guardian: '你理解了循环——不是用头脑，是用骨头里的疲倦。', prophet: '你看透了战争的循环——蛇咬住自己的尾巴。你看透了一切——也失去了一切。', follower: '在循环的底部，你选择了活着——不是为自己，是为那些还在等你的人。', rebel: '你朝天开枪——让循环停在那一刻。不是你赢了——是你决定了结束的方式。' } } },

    ch7_r5_choice: { id:'ch7_r5_choice', type:'choice', chapter:7, round:5, title:'第五轮选择 · 死亡的到来', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你在作坊里做金鱼。手已经老了，手指不太听使唤了——金鱼做得越来越小，越来越简单。你听见心脏在胸腔里跳动——它跳得很慢，像是在数着什么。','你知道这一天会来。你从来不害怕它——你只是不确定：当你闭眼的时候，你会在脑海里看见什么？是冰块？是糖苹果？是行刑队的墙？还是乌尔苏拉站在门口把一双筷子放在空位上的样子？'], transition:'你选择——' }, choices:[
      { id:'ch7_r5_a', label:'在作坊里安静离世', description:'不需要大张旗鼓。坐在你熟悉的坩埚前，做完最后一条金鱼，然后闭上眼睛。', nextScene:'ch7_r5a', effects:{ tags:['安详的终结'], memory:'最后一条金鱼', fate:1, bond:0 } },
      { id:'ch7_r5_b', label:'走到栗树下——和父亲一起等死', description:'你已经很久没有和父亲说话了。走到栗树下，解开他的绳子——让他知道你也来了。', nextScene:'ch7_r5b', effects:{ tags:['回归的儿子'], memory:'栗树下的重逢', fate:-1, bond:2 } },
      { id:'ch7_r5_c', label:'坐在饭桌前——等乌尔苏拉摆碗筷', description:'死在哪里都可以——但你希望在走之前，再喝一碗她的汤。', nextScene:'ch7_r5c', effects:{ tags:['感恩的告别'], memory:'最后一碗汤', fate:-1, bond:2 } },
      { id:'ch7_r5_d', label:'让她知道——不是告别，是感谢', description:'你和她之间不需要"再见"。你只是走到厨房门口——看着她。不是最后一瞥——是你想让她知道，你记得每一碗汤的味道。', nextScene:'ch7_r5c', requiredRelationship: { character: '乌尔苏拉·伊瓜兰', min: 80 }, effects:{ tags:['用目光告别的人'], memory:null, fate: 0, bond: 2 } }
    ], settlement:'ch7_r5_settlement' },
    ch7_r5a: { id:'ch7_r5a', type:'narrative', chapter:7, round:5, title:'安详的终结', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你坐在作坊里，手里握着最后一条金鱼——很小，还没有你的拇指大。你的手慢慢松开。金鱼掉在地上——但它没有摔坏。它躺在地上，在正午的阳光里闪闪发光。乌尔苏拉后来发现你的时候，以为你只是在闭目养神。她把金鱼捡起来，放在你的掌心里，然后帮你合上了手。']}, choices:null, nextScene:'ch7_r5_settlement' },
    ch7_r5b: { id:'ch7_r5b', type:'narrative', chapter:7, round:5, title:'回归的儿子', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你走到栗树下。父亲正在画圆圈——他没有抬头。你坐到他旁边——没有说话。他继续画他的圆圈，你继续数你的心跳。夕阳把你们两人的影子拉得很长——它们重叠在一起，像两条被风吹到一起的绳子。','后来乌尔苏拉把你们两人都带回了屋里——她一手扶着一个布恩迪亚，把他们放到同一张床上。这是她第一次觉得这个家里有两个布恩迪亚是好事而不是负担。']}, choices:null, nextScene:'ch7_r5_settlement' },
    ch7_r5c: { id:'ch7_r5c', type:'narrative', chapter:7, round:5, title:'感恩的告别', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你坐在饭桌前。乌尔苏拉把汤放在你面前——汤很烫，她在围裙上擦手。"今天的汤有点咸。""没关系。"你喝了一口——确实咸了，但你没有说。你喝完了整碗——因为你知道这是最后一碗了。她看着你喝——她也许知道，也许不知道。但她在你对面坐了下来——这是她这辈子第一次坐下来和你一起吃饭。']}, choices:null, nextScene:'ch7_r5_settlement' },
    ch7_r5_settlement: { id:'ch7_r5_settlement', type:'settlement', chapter:7, round:5, title:'第五轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['奥雷里亚诺·布恩迪亚上校——那个曾经发动三十二场起义、有十七个儿子、躲过无数次暗杀的男人——最终以他选择的方式离开了这个世界。不是死在战场上——而是死在马孔多。死在家人中间。死在汤还没凉透的傍晚。']}, settlement:{ summary:'最终轮完成。上校的一生结束了——以一个安静的、属于他自己的方式。', nextScene:'chapter7_end', nextLabel:'查看章末结算', quadrantNarratives: { guardian: '你理解了循环——不是用头脑，是用骨头里的疲倦。', prophet: '你看透了战争的循环——蛇咬住自己的尾巴。你看透了一切——也失去了一切。', follower: '在循环的底部，你选择了活着——不是为自己，是为那些还在等你的人。', rebel: '你朝天开枪——让循环停在那一刻。不是你赢了——是你决定了结束的方式。' } } },
    chapter7_end: { id:'chapter7_end', type:'settlement', chapter:7, round:6, title:'第七章 · 章末结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['第七章完结。奥雷里亚诺上校的战争循环到此为止——不是以胜利，不是以投降，是以一种比两者都更深沉的安静。','羊皮卷翻到下一页。一个巨人即将回到马孔多——带着海风的气味，带着异国的纹身，带着一种将改变一切的力量。']}, settlement:{ summary:'第七章完结。战争循环结束了——但你在这个循环中做的每一个选择，都改变了布恩迪亚家族的命运。', isChapterEnd:true, nextLabel:'进入第八章 · 美人儿蕾梅黛丝', quadrantNarratives: { guardian: '你理解了循环——不是用头脑，是用骨头里的疲倦。', prophet: '你看透了战争的循环——蛇咬住自己的尾巴。你看透了一切——也失去了一切。', follower: '在循环的底部，你选择了活着——不是为自己，是为那些还在等你的人。', rebel: '你朝天开枪——让循环停在那一刻。不是你赢了——是你决定了结束的方式。' } } }
  },
  memories: {
    '枪口的硝烟': { id:'枪口的硝烟', title:'枪口的硝烟', description:'你扣下扳机——但枪没响。子弹早就被你取出来了。你的身体想活着，哪怕心已经不在了。', chapter:7 },
    '天空中的枪声': { id:'天空中的枪声', title:'天空中的枪声', description:'你朝天开枪，走出帐篷。"战争结束了。"有人欢呼。有人沉默——你不在乎。', chapter:7 },
    '十七封信的灰烬': { id:'十七封信的灰烬', title:'十七封信的灰烬', description:'你亲自追杀了暗杀者。仇恨是无底洞——你扔进去的每铲土只是为了听见落地的回声。', chapter:7 },
    '墓前的勋章': { id:'墓前的勋章', title:'墓前的勋章', description:'你把勋章放在蕾梅黛丝墓前。她应该知道：她丈夫赢得了战争——但宁愿输掉，如果能换回她。', chapter:7 },
    '未完成的回忆录': { id:'未完成的回忆录', title:'未完成的回忆录', description:'你开始写回忆录——从冰块写起。乌尔苏拉把汤放在你手边，没有读——但她知道你在写自己。', chapter:7 },
    '最后一条金鱼': { id:'最后一条金鱼', title:'最后一条金鱼', description:'你的手松开了。金鱼掉在地上——没有摔坏。乌尔苏拉把它放在你掌心，帮你合上了手。', chapter:7 },
    '栗树下的重逢': { id:'栗树下的重逢', title:'栗树下的重逢', description:'你走到栗树下，坐在父亲旁边。他画圆圈，你数心跳。影子重叠在一起——像两条绳子。', chapter:7 },
    '最后一碗汤': { id:'最后一碗汤', title:'最后一碗汤', description:'汤很咸——但你没有说。你喝完了整碗。她在你对面坐下来——这辈子第一次。', chapter:7 }
  },
  familyMembers: []
});

/* ================================================================
   第八章 · 何塞·阿尔卡蒂奥归来、美人儿蕾梅黛丝
   ================================================================ */
registerChapter({
  id: 'chapter8', title: '第八章 · 何塞·阿尔卡蒂奥归来、美人儿蕾梅黛丝',
  initialScene: 'ch8_opening', possessedCharacter: '奥雷里亚诺第二', chapterNumber: 8,
  preview: '<p>第九章 · 狂欢节屠杀、费尔南达登场</p>',
  nextLabel: '进入第九章 · 狂欢节屠杀',
  scenes: {
    ch8_opening: { id:'ch8_opening', type:'narrative', chapter:8, round:0, title:'一个巨人走进院子', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['一个巨人走进了院子。他肩膀宽度几乎撑破了门框，整个人像一座会移动的山。他站在那里，阳光从他背后照过来——把影子投在整个天井里。这个人——就是你多年前跟着吉卜赛人走了的兄弟何塞·阿尔卡蒂奥。','他蹲在栗树下看着被绑在那里的父亲——那个嘴里念叨着"冰"的老人。他不说话，只是从口袋里掏出一个干面包，掰成两半，一半放在父亲手里。老人看了看面包，又看了看他，然后继续画他的圆圈。他不知道这个巨人是谁——但巨人的手在发抖。'], clues: [{ triggerText: '阳光从他背后照过来', itemId: 'weight_of_wind', narrative: '晾床单的绳子在院子里晃——上面还挂着一件白床单。风吹过来，床单飘起来——像一只巨大的翅膀。你看着它——忽然想起一个你还没有遇见的人。她也很轻——轻到风一吹就能带走。', unlocksIn: ['chapter19'] }] }, choices:null, nextScene:'ch8_r1_choice' },

    ch8_r1_choice: { id:'ch8_r1_choice', type:'choice', chapter:8, round:1, title:'第一轮选择 · 迎接巨人', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['何塞·阿尔卡蒂奥坐在客厅里——那张椅子在他身下吱吱作响。他的身上刺满了纹身——每一幅都是一个国家的地图。他讲起他在海上的经历：与日本水手打架，用牙咬断桅杆绳，在六十多个国家的码头上醉过酒。','乌尔苏拉站在厨房门口——她认出了儿子，但她不敢上前。因为这个儿子离开的时候是个孩子，回来的时候是个陌生男人——一个身体比门还宽、声音比鼓还沉的男人。'], transition:'你选择——' }, choices:[
      { id:'ch8_r1_a', label:'张开双臂欢迎他', description:'他是布恩迪亚——不管走多远，他永远是这个家的人。', nextScene:'ch8_r1a', effects:{ tags:['欢迎的拥抱'], memory:null, fate:-1, bond:2 } },
      { id:'ch8_r1_b', label:'警惕——问清楚他为什么回来', description:'他走了这么多年，为什么现在回来？他身上有太多你不认识的纹身。', nextScene:'ch8_r1b', effects:{ tags:['审慎的家属'], memory:null, fate:1, bond:-1 } },
      { id:'ch8_r1_c', label:'让他自己找到回家的路', description:'不急着上前。给他时间——让他自己走进这所房子，就像那个下午他跟着吉卜赛人走时一样。', nextScene:'ch8_r1c', effects:{ tags:['沉默的接纳者'], memory:'门廊上的等待', fate:0, bond:0 } }
    ], settlement:'ch8_r1_settlement' },
    ch8_r1a: { id:'ch8_r1a', type:'narrative', chapter:8, round:1, title:'欢迎的拥抱', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你走上前——你的手几乎握不住他的肩膀。他比你记忆中更大——像一座山在十几年后膨胀到了地图上的尺寸。但他低下头——他让你抱住了他。他的肩膀在动——不是发抖，是更深层的震动。也许巨人也会哭——只是他们不叫它哭。']}, choices:null, nextScene:'ch8_r1_settlement' },
    ch8_r1b: { id:'ch8_r1b', type:'narrative', chapter:8, round:1, title:'审慎的家属', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你站在门口。"你回来做什么？"他看了你一眼——那眼神很平静。"我走了太久了。忘了回家的路长什么样——所以回来看一眼。"他的回答很简单——也许他说的就是真的。布恩迪亚家的人从不擅长撒谎——他们只是擅长离开。']}, choices:null, nextScene:'ch8_r1_settlement' },
    ch8_r1c: { id:'ch8_r1c', type:'narrative', chapter:8, round:1, title:'沉默的接纳者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你没有上前。你只是站在门廊上——给他让出了一条路。他看了看你，看了看门，看了看院子里那棵栗树。然后他走进去了——不是走进房子，是走进他的过去。他站在栗树下很久——老人还在画圆圈。巨人蹲下来，把掰成两半的面包放在地上。']}, choices:null, nextScene:'ch8_r1_settlement' },
    ch8_r1_settlement: { id:'ch8_r1_settlement', type:'settlement', chapter:8, round:1, title:'第一轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['何塞·阿尔卡蒂奥回来了。布恩迪亚家的院子再次被巨人的身影填满。他将住在这里，带来风暴——以他自己的方式。']}, settlement:{ summary:'第一轮完成。巨人回家了。', nextScene:'ch8_r2_choice', nextLabel:'进入第二轮', quadrantNarratives: { guardian: '美人儿升天时你没有惊讶——有些人不属于地面。', prophet: '你看着风把她带走——你知道自己留不住任何东西。但你还在看。', follower: '你试图挽留——但风不听你的。有些东西留不住——但挽留本身就是意义。', rebel: '你不相信她真的走了——你抬头看了很久。天空是空的。就像你。' } } },

    ch8_r2_choice: { id:'ch8_r2_choice', type:'choice', chapter:8, round:2, title:'第二轮选择 · 美人儿蕾梅黛丝', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['美人儿蕾梅黛丝——家族第四代的美人——这天下午站在院子里晾她的床单。风很大——床单在她手里鼓起来，像一面白色的帆。她仰起头——阳光穿过床单洒在她身上，把她染成半透明的白色。','但她不穿衣服。不是故意的——是她不在乎。她觉得衣服是这世界上最没有意义的东西——和名字一样没意义。她的美丽是一种危险的美丽——危险到每一个看过她的男人都会在接下来的很长一段时间里无法看别的女人。'], transition:'你选择——' }, choices:[
      { id:'ch8_r2_a', label:'保护她——把她藏在家里', description:'她的美貌是危险的。不让外人看到她——把她留在家里，确保她的安全。', nextScene:'ch8_r2a', effects:{ tags:['过度保护者'], memory:null, fate:1, bond:0 } },
      { id:'ch8_r2_b', label:'让她自由——不要限制她', description:'她的美是她的——不是你的，不是任何人的。让她做她自己想做的事。', nextScene:'ch8_r2b', effects:{ tags:['自由主义者'], memory:null, fate:0, bond:0 } },
      { id:'ch8_r2_c', label:'教她应对这个世界', description:'她需要知道外面的人会怎么看她。不是要改变她——是要让她有准备。', nextScene:'ch8_r2c', effects:{ tags:['引导者'], memory:'床单与风', fate:0, bond:1 } },
      { id:'ch8_r2_d', label:'你记得泥土的味道——理解她的饥饿', description:'丽贝卡当年吃泥的画面浮现在你眼前。那不是饥饿——那是渴望。美人儿蕾梅黛丝也在渴望什么——不是泥，是天空。', nextScene:'ch8_r2b', requiredClue: 'taste_of_mud', effects:{ tags:['泥土的记忆者'], memory:null, fate: 0, bond: 2 } }
    ], settlement:'ch8_r2_settlement' },
    ch8_r2a: { id:'ch8_r2a', type:'narrative', chapter:8, round:2, title:'过度保护者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你把她关在家里面。但她总是能找到出去的路——翻窗，翻墙，从你忘记锁上的任何一扇门溜出去。她的美像藤蔓一样从各个缝隙里钻出去——你永远关不住它。']}, choices:null, nextScene:'ch8_r2_settlement' },
    ch8_r2b: { id:'ch8_r2b', type:'narrative', chapter:8, round:2, title:'自由主义者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你让她自由来去。她在马孔多的街道上旁若无人地走着——不穿衣服，不施脂粉，像一个不属于这个世界的存在。人们被她吸引——然后被她灼伤。你不阻止她——因为她不是你能阻止的。']}, choices:null, nextScene:'ch8_r2_settlement' },
    ch8_r2c: { id:'ch8_r2c', type:'narrative', chapter:8, round:2, title:'引导者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你坐在她身边，告诉她外面的世界是什么样子。她听得很认真——但她的眼睛始终盯着院子里那根晾衣绳上的床单。它正被风吹起——像一片正在离去的云。"你觉得衣服能保护人吗？"她问。"不能。""那为什么要穿？"你无法回答。']}, choices:null, nextScene:'ch8_r2_settlement' },
    ch8_r2_settlement: { id:'ch8_r2_settlement', type:'settlement', chapter:8, round:2, title:'第二轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['美人儿蕾梅黛丝继续她的生活——以只有她能理解的方式。她的美不是武器，不是工具，不是礼物——它只是一种存在。像一个没有答案的问题。']}, settlement:{ summary:'第二轮完成。你面对了家族中最纯粹的美丽。', nextScene:'ch8_r3_choice', nextLabel:'进入第三轮', quadrantNarratives: { guardian: '美人儿升天时你没有惊讶——有些人不属于地面。', prophet: '你看着风把她带走——你知道自己留不住任何东西。但你还在看。', follower: '你试图挽留——但风不听你的。有些东西留不住——但挽留本身就是意义。', rebel: '你不相信她真的走了——你抬头看了很久。天空是空的。就像你。' } } },

    ch8_r3_choice: { id:'ch8_r3_choice', type:'choice', chapter:8, round:3, title:'第三轮选择 · 升天', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['一个普通的下午。美人儿蕾梅黛丝在院子里收床单。风突然大了起来——床单鼓胀起来，拉着她的手往上升。她没有松手。她也没有叫——她只是仰起头看着天空，看着那片白色的布在她手中变成了一对翅膀。','她升起来了。不是很快——是缓缓地，像一片被热气流托起的羽毛。她越升越高——超过了晾衣绳，超过了房顶，超过了栗树，超过了马孔多最高的教堂尖顶。她没有回头——不是因为她不想，是因为她的眼睛一直在看上面。'], transition:'你选择——' }, choices:[
      { id:'ch8_r3_a', label:'伸手抓住她', description:'你不能让她就这样走了。跳起来——抓住她的脚踝，把她拉回来。', nextScene:'ch8_r3a', effects:{ tags:['试图挽留者'], memory:null, fate:0, bond:1 } },
      { id:'ch8_r3_b', label:'目送她升天——不要打扰', description:'这是她的离开方式。不是死亡——是离开。你不能碰——只能看。', nextScene:'ch8_r3b', effects:{ tags:['目送者'], memory:'升天的床单', characterFlags: { 'let_her_go': 1 }, fate:-1, bond:2 } },
      { id:'ch8_r3_c', label:'闭上眼睛——然后记住', description:'你不看——但你记住了。把这一刻刻在脑海里——让它成为永不褪色的东西。', nextScene:'ch8_r3c', effects:{ tags:['内心的铭记者'], memory:'闭眼看见的光', fate:1, bond:-1 } }
    ], settlement:'ch8_r3_settlement' },
    ch8_r3a: { id:'ch8_r3a', type:'narrative', chapter:8, round:3, title:'试图挽留者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你跳起来——但你的手指只碰到了她的脚踝。她的皮肤很凉——像冰块。然后她继续上升——你的手指滑开了。你落在院子里，仰头看着她越变越小。你的指尖残留着她的温度——那是这个世界上最接近于永恒的东西。']}, choices:null, nextScene:'ch8_r3_settlement' },
    ch8_r3b: { id:'ch8_r3b', type:'narrative', chapter:8, round:3, title:'目送者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你站在院子里，仰头看着她越升越高。床单在她手中像一面白色的旗帜——不是投降的旗，是宣告自由的旗。她没有回头——但你看见她的手动了动，也许是在和你道别。也许只是风。你选择相信前者。']}, choices:null, nextScene:'ch8_r3_settlement' },
    ch8_r3c: { id:'ch8_r3c', type:'narrative', chapter:8, round:3, title:'内心的铭记者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你闭上了眼睛。但你看见了——比睁开眼睛看见的更多。你看见她站在晾衣绳旁边，床单在她手中鼓成一面帆。你看见阳光穿过她的身体——她几乎已经透明了。你看见她从不属于这个世界——她只是来这里借一件床单，然后把它还给了天空。','你睁开眼的时候，她已经不见了。但床单还挂在晾衣绳上——静静地垂着。风停了。']}, choices:null, nextScene:'ch8_r3_settlement' },
    ch8_r3_settlement: { id:'ch8_r3_settlement', type:'settlement', chapter:8, round:3, title:'第三轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['美人儿蕾梅黛丝升天了。没有人能解释——也不需要解释。马孔多的人只是看着天空，然后继续做自己的事。有些奇迹太大了——大到人只能选择忘记才能继续生活。但马孔多的天空以后看起来不一样了——它少了一点什么。也许是一个人的重量。']}, settlement:{ summary:'第三轮完成。你见证了美人儿蕾梅黛丝的升天。', nextScene:'ch8_r4_choice', nextLabel:'进入第四轮', quadrantNarratives: { guardian: '美人儿升天时你没有惊讶——有些人不属于地面。', prophet: '你看着风把她带走——你知道自己留不住任何东西。但你还在看。', follower: '你试图挽留——但风不听你的。有些东西留不住——但挽留本身就是意义。', rebel: '你不相信她真的走了——你抬头看了很久。天空是空的。就像你。' } } },

    ch8_r4_choice: { id:'ch8_r4_choice', type:'choice', chapter:8, round:4, title:'第四轮选择 · 何塞·阿尔卡蒂奥的死亡', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['何塞·阿尔卡蒂奥死了。不是死在海上——是死在自己的房子里。枪声在午后响起——不大，像一扇门被风猛地关上。没有人知道是谁开的枪，没有人知道为什么。','他的血从门缝里流出来——沿着走廊的地砖一直流到院子里，流到栗树下他父亲还在画圆圈的地方。老人低头看了看血，然后继续画圆圈——他以为那是雨水。'], transition:'你选择——' }, choices:[
      { id:'ch8_r4_a', label:'追查凶手', description:'不能让他就这样不明不白地死了。找出真相——用你的方式。', nextScene:'ch8_r4a', effects:{ tags:['追查者'], memory:null, fate:1, bond:-1 } },
      { id:'ch8_r4_b', label:'安葬他——让他的死成为一个秘密', description:'也许有些秘密不该被揭开。安葬他——让他像他活着时一样，安安静静地离开。', nextScene:'ch8_r4b', effects:{ tags:['沉默的送葬者'], memory:null, fate:0, bond:1 } },
      { id:'ch8_r4_c', label:'把房子锁起来——不去触碰', description:'把门锁上。让房子里的一切保持原样——让时间在那里停止。', nextScene:'ch8_r4c', effects:{ tags:['封存者'], memory:'锁上的房门', fate:0, bond:-1 } }
    ], settlement:'ch8_r4_settlement' },
    ch8_r4a: { id:'ch8_r4a', type:'narrative', chapter:8, round:4, title:'追查者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你查了很久。线索像丝线一样细——但你发现了：是一把猎枪。是谁的——不知道。动机——不知道。但枪声的方向指向他身后的某个地方——也许是他自己。也许不是。你最终没有找到答案——但你在追查的过程中发现了很多你不该知道的东西。']}, choices:null, nextScene:'ch8_r4_settlement' },
    ch8_r4b: { id:'ch8_r4b', type:'narrative', chapter:8, round:4, title:'沉默的送葬者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你把他葬在栗树旁边——就在父亲能看见的地方。老人偶尔会停下来，看着这座新土堆，然后继续画他的圆圈。他不知道是谁——但他知道是家人。因为泥土是温热的。']}, choices:null, nextScene:'ch8_r4_settlement' },
    ch8_r4c: { id:'ch8_r4c', type:'narrative', chapter:8, round:4, title:'封存者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你把房门锁上。钥匙扔进了河里。从此没有人再进过那所房子——里面的血干了，变成了地砖上暗红色的纹路。风从门缝里吹进去，在空房间里打着转——像是在找那个已经不在的人。']}, choices:null, nextScene:'ch8_r4_settlement' },
    ch8_r4_settlement: { id:'ch8_r4_settlement', type:'settlement', chapter:8, round:4, title:'第四轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['巨人倒下了。栗树下多了一座土堆。马孔多的地平线上少了一个过于高大的身影——但他的故事会被人反复讲述：讲他如何在海上用牙咬断桅杆绳，如何在码头上醉倒，如何在回家的那天弯下腰来看着父亲的画在泥土中的圆圈。']}, settlement:{ summary:'第四轮完成。何塞·阿尔卡蒂奥死了——你选择了如何面对他的死亡。', nextScene:'ch8_r5_choice', nextLabel:'进入最终轮', quadrantNarratives: { guardian: '美人儿升天时你没有惊讶——有些人不属于地面。', prophet: '你看着风把她带走——你知道自己留不住任何东西。但你还在看。', follower: '你试图挽留——但风不听你的。有些东西留不住——但挽留本身就是意义。', rebel: '你不相信她真的走了——你抬头看了很久。天空是空的。就像你。' } } },

    ch8_r5_choice: { id:'ch8_r5_choice', type:'choice', chapter:8, round:5, title:'第五轮选择 · 家族的新篇章', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['巨人不在了。美人也不在了。栗树下的老人还在画圆圈。但家里有了新的面孔——奥雷里亚诺第二和他的双胞胎兄弟何塞·阿尔卡蒂奥第二。两个孩子长得一模一样——连乌尔苏拉都分不清。','家族进入了一个新的时代——一个充满狂欢、盛宴和生育的时代。马孔多也在变化——铁路修过来了，外国人来了，香蕉公司来了。一切都好像在加速——像一辆刹车坏了的火车。'], transition:'你选择——' }, choices:[
      { id:'ch8_r5_a', label:'投身家族狂欢', description:'开派对！把房子开放给所有人。用盛宴和舞蹈填满每一个房间——生命太短了。', nextScene:'ch8_r5a', effects:{ tags:['狂欢者'], memory:null, fate:1, bond:1 } },
      { id:'ch8_r5_b', label:'保持清醒——为风暴做准备', description:'狂欢是假的。你感觉到了——一场巨大的风暴正在靠近。为家人做好准备。', nextScene:'ch8_r5b', effects:{ tags:['未雨绸缪者'], memory:null, fate:1, bond:0 } },
      { id:'ch8_r5_c', label:'记录——写下家族的历史', description:'这个家族有太多故事了。如果不写下来——它们会像美人儿一样升天，再也回不来。', nextScene:'ch8_r5c', effects:{ tags:['家族史官'], memory:'家族编年史', fate:0, bond:1 } },
      { id:'ch8_r5_d', label:'你知道这家族的根在哪里——回厨房去', description:'乌尔苏拉的厨房是这所房子的心脏。不管家族多大、人多少——一切重要的事都在那张桌子上决定。去那里——你不是在找食物，你是在找回方向。', nextScene:'ch8_r5a', requiredRelationship: { character: '乌尔苏拉·伊瓜兰', min: 70 }, effects:{ tags:['回到心脏的人'], memory:null, fate: 0, bond: 2 } },
      { id:'ch8_r5_e', label:'你没有抓住她——现在你知道为什么了', description:'美人儿蕾梅黛丝升天时你目送了她。你没有伸手——不是冷漠，是尊重。现在你明白了：有些离开不是抛弃——是完成。记录她的故事——让她在文字里继续存在。', nextScene:'ch8_r5c', requiredFlag: { flag: 'let_her_go', min: 1 }, effects:{ tags:['理解升天的人'], memory:null, fate: 0, bond: 1 } }
    ], settlement:'ch8_r5_settlement' },
    ch8_r5a: { id:'ch8_r5a', type:'narrative', chapter:8, round:5, title:'狂欢者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你把房子变成了马孔多最热闹的地方。宴席从早摆到晚——食物多到吃不完的喂了猪。奥雷里亚诺第二的胃口大到惊人——一顿能吃下一头牛。他在餐桌前挥舞着叉子大声说："活着就是为了吃！"你看着他，笑了。你不确定他说得对——但你确实很久没有这样笑过了。']}, choices:null, nextScene:'ch8_r5_settlement' },
    ch8_r5b: { id:'ch8_r5b', type:'narrative', chapter:8, round:5, title:'未雨绸缪者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你没有加入狂欢。你在角落里观察——你看见铁路的尽头有烟尘升起，看见外国人的账本上写满了数字，看见马孔多的天空正慢慢变成你不认识的颜色。你在心里列了一张清单——不是要做什么，是要记住：总有一天会需要这张清单。']}, choices:null, nextScene:'ch8_r5_settlement' },
    ch8_r5c: { id:'ch8_r5c', type:'narrative', chapter:8, round:5, title:'家族史官', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你拿出纸和笔——开始记录。你写了何塞·阿尔卡蒂奥的纹身，美人儿蕾梅黛丝的床单，父亲在栗树下画的圆圈。你写了磁铁、放大镜和冰块——你写了所有你还记得的事。你不知道谁会读——但你写了下来。因为有些故事如果没有人记下来，就会像风一样——来过，然后不留下任何痕迹。']}, choices:null, nextScene:'ch8_r5_settlement' },
    ch8_r5_settlement: { id:'ch8_r5_settlement', type:'settlement', chapter:8, round:5, title:'第五轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['时代在变。马孔多不再是一个只有二十多间泥巴房的小村子——它正在变成一座城镇。铁路伸进来，蒸汽机在河对岸喷着白烟。布恩迪亚家也在变——旧的面孔离去，新的面孔出现。这是一个新的开始——也是新的终结的开始。']}, settlement:{ summary:'最终轮完成。家族翻开了新的篇章。', nextScene:'chapter8_end', nextLabel:'查看章末结算', quadrantNarratives: { guardian: '美人儿升天时你没有惊讶——有些人不属于地面。', prophet: '你看着风把她带走——你知道自己留不住任何东西。但你还在看。', follower: '你试图挽留——但风不听你的。有些东西留不住——但挽留本身就是意义。', rebel: '你不相信她真的走了——你抬头看了很久。天空是空的。就像你。' } } },
    chapter8_end: { id:'chapter8_end', type:'settlement', chapter:8, round:6, title:'第八章 · 章末结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['第八章完结。巨人走了，美人升天了，家族进入了狂欢的年代。但狂欢之下——有什么东西正在悄悄腐烂。','下一章：面具、假面舞会和一场将永远改变马孔多的屠杀。']}, settlement:{ summary:'第八章完结。你见证了一个时代的结束和另一个时代的开始。', isChapterEnd:true, nextLabel:'进入第九章 · 狂欢节屠杀', quadrantNarratives: { guardian: '美人儿升天时你没有惊讶——有些人不属于地面。', prophet: '你看着风把她带走——你知道自己留不住任何东西。但你还在看。', follower: '你试图挽留——但风不听你的。有些东西留不住——但挽留本身就是意义。', rebel: '你不相信她真的走了——你抬头看了很久。天空是空的。就像你。' } } }
  },
  memories: {
    '门廊上的等待': { id:'门廊上的等待', title:'门廊上的等待', description:'你没有上前——只是让出了一条路。他走进了过去——在栗树下蹲了很久。', chapter:8 },
    '床单与风': { id:'床单与风', title:'床单与风', description:'"你觉得衣服能保护人吗？""不能。""那为什么要穿？"你无法回答。', chapter:8 },
    '升天的床单': { id:'升天的床单', title:'升天的床单', description:'她越升越高——没有回头。她的手动了动——也许是道别，也许只是风。你选择相信前者。', chapter:8 },
    '闭眼看见的光': { id:'闭眼看见的光', title:'闭眼看见的光', description:'你闭上眼睛——但看见了更多。她从不属于这个世界——只是来这里借一件床单。', chapter:8 },
    '锁上的房门': { id:'锁上的房门', title:'锁上的房门', description:'你把钥匙扔进河里。血干了——变成了地砖上的暗红纹路。风在空房间里打着转。', chapter:8 },
    '家族编年史': { id:'家族编年史', title:'家族编年史', description:'你开始记录——磁铁、放大镜、冰块、床单。有些故事不记下来，就会像风一样消失。', chapter:8 }
  },
  familyMembers: [
    { name:'美人儿蕾梅黛丝', relation:'家族第四代（已升天）', generation:4, isCurrent:false, description:'拥有无法用语言描述的美丽。在晾床单时被风吹起——升入了天空。' },
    { name:'奥雷里亚诺第二', relation:'第四代传人', generation:4, isCurrent:false, description:'双胞胎之一。胃口奇大，热爱狂欢。他的笑声可以震碎窗玻璃。' },
    { name:'何塞·阿尔卡蒂奥第二', relation:'第四代传人', generation:4, isCurrent:false, description:'双胞胎之一。性格阴沉，对香蕉公司的事务充满愤怒。' }
  ]
});

/* ================================================================
   第九章 · 狂欢节屠杀、费尔南达登场
   ================================================================ */
registerChapter({
  id: 'chapter9', title: '第九章 · 狂欢节屠杀、费尔南达登场',
  initialScene: 'ch9_opening', possessedCharacter: '奥雷里亚诺第二', chapterNumber: 9,
  preview: '<p>第十章 · 大罢工、三千人屠杀</p>',
  nextLabel: '进入第十章 · 大罢工',
  scenes: {
    ch9_opening: { id:'ch9_opening', type:'narrative', chapter:9, round:0, title:'假面舞会', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['马孔多从来没有举办过狂欢节。这第一次是奥雷里亚诺第二的主意。"我们打仗打得太久了——需要一些笑。"','彩带从每个窗台垂下来，纸花在风中开合像活物的肺叶。人们戴着假面——狮子、山羊、月光女神。笑声和手风琴声把整个马孔多泡得像个被快乐发酵的腌菜坛子。','但你在人群中看见了一个人——她没有戴假面。她的脸很白，像教堂里的圣像——不是纯洁，是苍白。她的名字是费尔南达·德尔·卡皮奥。她来这里不是为了狂欢——她来这里是为了被选中。'], clues: [{ triggerText: '假面', itemId: 'carnival_mask', narrative: '你捡起一个掉在地上的半截面具。面具上溅了几点暗褐色的斑点——不是酒，是血。狂欢节的第一滴血在人们还没意识到的时候就落下来了。你握紧面具——手指在纸上留下汗迹。', unlocksIn: ['chapter10'] }] }, choices:null, nextScene:'ch9_r1_choice' },

    ch9_r1_choice: { id:'ch9_r1_choice', type:'choice', chapter:9, round:1, title:'第一轮选择 · 费尔南达', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['费尔南达——从遥远的省城来的女孩，带着皇后一样的气质和一个家族使命。她从小被教导：她是女王。但现在她站在马孔多的狂欢节上——穿着旧裙子，脸上的妆已经被汗水融化了一半。','奥雷里亚诺第二看见了她。他停住了——手里的酒杯差点掉了。"我要娶她。"他说。没有人知道他是不是认真的——他总是在笑。但这一次他没有笑。'], transition:'你选择——' }, choices:[
      { id:'ch9_r1_a', label:'支持他——追求费尔南达', description:'奥雷里亚诺第二需要安定下来。费尔南达也许就是这个家的定海神针。', nextScene:'ch9_r1a', effects:{ tags:['支持者'], memory:null, fate:0, bond:1 } },
      { id:'ch9_r1_b', label:'警告他——她不合适', description:'费尔南达带着太多规则和"必须"。她不会融入布恩迪亚家——她会试图改造它。', nextScene:'ch9_r1b', effects:{ tags:['警告者'], memory:null, fate:1, bond:0 } },
      { id:'ch9_r1_c', label:'不干涉——让他自己决定', description:'布恩迪亚家的人从不听劝。让他自己走这条路——无论它通向哪里。', nextScene:'ch9_r1c', effects:{ tags:['沉默的旁观者'], memory:null, fate:0, bond:-1 } }
    ], settlement:'ch9_r1_settlement' },
    ch9_r1a: { id:'ch9_r1a', type:'narrative', chapter:9, round:1, title:'支持者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你鼓励奥雷里亚诺第二去追她。他去了——用他特有的方式：不是甜言蜜语，是把她一把抱起来放在肩膀上，让她看整个狂欢节的全貌。费尔南达尖叫——然后笑了。那是她来到马孔多之后第一次笑。也是最后一次。']}, choices:null, nextScene:'ch9_r1_settlement' },
    ch9_r1b: { id:'ch9_r1b', type:'narrative', chapter:9, round:1, title:'警告者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你拉住奥雷里亚诺第二。"她带着一座教堂和一本规则簿。不适合你。"他听了——然后说："我知道。但我可以吃下一头牛——也许我也能消化一座教堂。"他没有听你的——布恩迪亚家的人从不听劝。']}, choices:null, nextScene:'ch9_r1_settlement' },
    ch9_r1c: { id:'ch9_r1c', type:'narrative', chapter:9, round:1, title:'沉默的旁观者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你什么都没有说。你只是看着奥雷里亚诺第二走向费尔南达——像一个走向悬崖却以为是走向大海的人。你不知道结果会怎样——但你知道这个家里又多了一个你不认识的布恩迪亚。']}, choices:null, nextScene:'ch9_r1_settlement' },
    ch9_r1_settlement: { id:'ch9_r1_settlement', type:'settlement', chapter:9, round:1, title:'第一轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['费尔南达进入了布恩迪亚家——带着她的行李箱，她的祈祷书，和她不愿意放弃的皇后身份。她走进这所房子的时候，抬头看了看天花板——然后皱了一下眉。她不喜欢这里。但她无处可去。']}, settlement:{ summary:'第一轮完成。费尔南达走进了布恩迪亚家。', nextScene:'ch9_r2_choice', nextLabel:'进入第二轮', quadrantNarratives: { guardian: '血在石板地上——你冲进去了。不是因为不怕，是因为有人在里面。', prophet: '你看见了屠杀的全部——从开始到结束。你看得太清楚了——从此闭不上眼。', follower: '你喊了——但没有人听见。至少你喊了。', rebel: '你站在原地——动不了。不是害怕，是愤怒卡在喉咙里出不来。' } } },

    ch9_r2_choice: { id:'ch9_r2_choice', type:'choice', chapter:9, round:2, title:'第二轮选择 · 狂欢节的悲剧', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['狂欢节到了高潮。人们摘下假面，互相拥抱——以为今天之后，一切都会不一样。但枪响了。不是一支枪——是很多支。士兵从各个方向涌进广场——不是来庆祝，是来清场。','政府说狂欢节上藏了"叛乱分子"——但被杀的人手里握着的是彩带，不是枪。血混在纸花里，被踩成浆糊。你在人群中——你身边有一个抱着孩子的女人倒下去了。她的孩子在哭——但你拉不动她。'], transition:'你选择——' }, choices:[
      { id:'ch9_r2_a', label:'救人——拉上尽可能多的人逃走', description:'你不能救所有人——但你可以救身边的每一个。抓住每一个你能触碰的人，带他们离开。', nextScene:'ch9_r2a', effects:{ tags:['拯救者'], memory:null, fate:1, bond:1 } },
      { id:'ch9_r2_b', label:'面对士兵——试图阻止屠杀', description:'你是布恩迪亚。你的名字在马孔多还有分量。站在士兵面前——让他们停下来。', nextScene:'ch9_r2b', effects:{ tags:['对峙者'], memory:null, fate:0, bond:1 } },
      { id:'ch9_r2_c', label:'躲起来——活下去', description:'这不是你的战争。这不是任何人的战争。这是屠杀。活下去——为了以后记得。', nextScene:'ch9_r2c', effects:{ tags:['幸存者'], memory:'狂欢节的枪声', fate:-1, bond:-1 } }
    ], settlement:'ch9_r2_settlement' },
    ch9_r2a: { id:'ch9_r2a', type:'narrative', chapter:9, round:2, title:'拯救者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你拉起身边的人——一个老人，两个孩子，一个你从未见过的女人。你把他们推进了教堂，关上大门。门外的枪声像暴雨。你在黑暗的教堂里听着——每一声枪响都是一个名字被从马孔多的街道上擦去。但门里的几个人——他们在呼吸。这也许就够了。']}, choices:null, nextScene:'ch9_r2_settlement' },
    ch9_r2b: { id:'ch9_r2b', type:'narrative', chapter:9, round:2, title:'对峙者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你站出来。你的手是空的——你没有武器。你走向领头的军官——他年轻，脸上有青春痘，手里的枪在发抖。"停。"你说。他看着你——他知道你是谁。他命令士兵放下了枪。不是因为你有权力——是因为你的眼睛里有某种让他想起他父亲的东西。但只有这一队人停下了。别的方向——枪声还在继续。']}, choices:null, nextScene:'ch9_r2_settlement' },
    ch9_r2c: { id:'ch9_r2c', type:'narrative', chapter:9, round:2, title:'幸存者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你躲在一辆翻倒的马车后面。你听见枪声——一遍又一遍。你咬着自己的手不让自己叫出声。当你从马车后面出来的时候——广场上满地是彩带和血。你活下来了。这不是勇敢——这是事实。事实是：活下来的人和死去的人之间只有几米的距离。你刚好在几米之外。']}, choices:null, nextScene:'ch9_r2_settlement' },
    ch9_r2_settlement: { id:'ch9_r2_settlement', type:'settlement', chapter:9, round:2, title:'第二轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['狂欢节变成了一场屠杀。多少人在纸花和彩带之间倒下了——数字没有人知道。政府把尸体搬上火车，运走了。第二天马孔多的广场被水冲洗干净——但纸花的碎片还粘在墙缝里。阳光照在湿漉漉的石子上——看起来像眼泪。']}, settlement:{ summary:'第二轮完成。你经历了马孔多历史上第一次大屠杀。', nextScene:'ch9_r3_choice', nextLabel:'进入第三轮', quadrantNarratives: { guardian: '血在石板地上——你冲进去了。不是因为不怕，是因为有人在里面。', prophet: '你看见了屠杀的全部——从开始到结束。你看得太清楚了——从此闭不上眼。', follower: '你喊了——但没有人听见。至少你喊了。', rebel: '你站在原地——动不了。不是害怕，是愤怒卡在喉咙里出不来。' } } },

    ch9_r3_choice: { id:'ch9_r3_choice', type:'choice', chapter:9, round:3, title:'第三轮选择 · 费尔南达的家规', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['费尔南达开始实施她的规则。窗帘必须拉上——"阳光会弄脏家具。"吃饭时必须用刀叉——不能用手。说话声音必须放低——"布恩迪亚家不是市集。"走廊里不能奔跑——不能打赤脚——不能在客厅里做爱。','奥雷里亚诺第二的胃口没有了。不是因为吃不下——是因为每次吃饭她都要念一段祷词。他等不及阿门就伸手去抓面包——她拍他的手。整个家开始像一个被慢慢勒紧的拳头。'], transition:'你选择——' }, choices:[
      { id:'ch9_r3_a', label:'抵制——维护布恩迪亚的自由', description:'这个家从来不需要规则。站在奥雷里亚诺第二一边——抵抗费尔南达的统治。', nextScene:'ch9_r3a', effects:{ tags:['抵抗者'], memory:null, fate:2, bond:-1 } },
      { id:'ch9_r3_b', label:'妥协——给她一些空间', description:'也许这个家确实需要一些秩序。和费尔南达谈谈——找到中间地带。', nextScene:'ch9_r3b', effects:{ tags:['妥协者'], memory:null, fate:0, bond:1 } },
      { id:'ch9_r3_c', label:'搬出去——离开这个家', description:'你不需要忍受这个。收拾东西，搬到别处去——让费尔南达统治一个空房子。', nextScene:'ch9_r3c', effects:{ tags:['出走者'], memory:'空荡的走廊', fate:1, bond:-1 } }
    ], settlement:'ch9_r3_settlement' },
    ch9_r3a: { id:'ch9_r3a', type:'narrative', chapter:9, round:3, title:'抵抗者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你撕下了费尔南达的窗帘。你让阳光涌进来——乌尔苏拉在走廊尽头微笑了。费尔南达把自己关在房间里哭了三天。但第四天她走出来的时候——窗帘没有再挂上去。布恩迪亚家开始在一场没有硝烟的战争中分裂。']}, choices:null, nextScene:'ch9_r3_settlement' },
    ch9_r3b: { id:'ch9_r3b', type:'narrative', chapter:9, round:3, title:'妥协者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你和费尔南达谈了一次。不是争吵——是谈判。她需要被尊重，你需要自由。"你可以拉上东边的窗帘——但走廊的窗户必须开着。"她同意了。不是因为你说服了她——是因为她太累了。']}, choices:null, nextScene:'ch9_r3_settlement' },
    ch9_r3c: { id:'ch9_r3c', type:'narrative', chapter:9, round:3, title:'出走者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你收拾了东西，搬到了佩特拉·科特斯的房子里。那里的窗帘从来不拉——那里的食物从来不需要祷告。你看着这所大房子在远处变小——费尔南达的影子在窗口晃了一下。你不知道自己是不是后悔了——你只知道你终于可以呼吸了。']}, choices:null, nextScene:'ch9_r3_settlement' },
    ch9_r3_settlement: { id:'ch9_r3_settlement', type:'settlement', chapter:9, round:3, title:'第三轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['费尔南达的统治开始了——或退让了。布恩迪亚家不再是以前那个所有门窗都敞开的地方了。有些房间被锁上了，有些声音被压低了。但家还在——只是变得更像一座快要封顶的教堂了。']}, settlement:{ summary:'第三轮完成。你面对了费尔南达对这个家的改造。', nextScene:'ch9_r4_choice', nextLabel:'进入第四轮', quadrantNarratives: { guardian: '血在石板地上——你冲进去了。不是因为不怕，是因为有人在里面。', prophet: '你看见了屠杀的全部——从开始到结束。你看得太清楚了——从此闭不上眼。', follower: '你喊了——但没有人听见。至少你喊了。', rebel: '你站在原地——动不了。不是害怕，是愤怒卡在喉咙里出不来。' } } },

    ch9_r4_choice: { id:'ch9_r4_choice', type:'choice', chapter:9, round:4, title:'第四轮选择 · 奥雷里亚诺第二的逃离', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['奥雷里亚诺第二不再回家了。他住在佩特拉·科特斯家里——他的情妇那里。他的胃口回来了——他每天吃三头牛，喝整桶的酒。他的笑声又响起来了——在费尔南达听不到的地方。','但他不是为了佩特拉才不回家的。他是为了躲避那个说话像念祷告、走路像仪仗队的女人。他从来不承认他怕她——但他每次回家都只待到自己能忍耐的最后一秒。'], transition:'你选择——' }, choices:[
      { id:'ch9_r4_a', label:'劝他回家——挽回婚姻', description:'费尔南达也许不是最好的——但她是他的妻子。家庭需要他回去。', nextScene:'ch9_r4a', effects:{ tags:['劝和者'], memory:null, fate:0, bond:1 } },
      { id:'ch9_r4_b', label:'支持他——留在情妇身边', description:'他在佩特拉那里才真正活着。让他待在能让他笑的地方。', nextScene:'ch9_r4b', effects:{ tags:['自由的支持者'], memory:null, fate:1, bond:1 } },
      { id:'ch9_r4_c', label:'不评判——让他自己选择', description:'婚姻是两个人的事——你不是第三个人。让他自己决定在哪张床上醒来。', nextScene:'ch9_r4c', effects:{ tags:['中立者'], memory:null, fate:0, bond:0 } }
    ], settlement:'ch9_r4_settlement' },
    ch9_r4a: { id:'ch9_r4a', type:'narrative', chapter:9, round:4, title:'劝和者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你找到奥雷里亚诺第二，告诉他费尔南达在等他。他沉默了很久——然后回去了。不是因为你说了什么——是因为他看见乌尔苏拉站在门口，用围裙擦了擦眼睛。费尔南达没有说话——但她那天晚上在桌上多放了一副刀叉。']}, choices:null, nextScene:'ch9_r4_settlement' },
    ch9_r4b: { id:'ch9_r4b', type:'narrative', chapter:9, round:4, title:'自由的支持者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你告诉他："回去不回去——都是你的选择。但我不会让你觉得不回去是一种罪。"他笑了——拍了拍你的肩膀（力气大得几乎把你拍倒在地）。他继续留在佩特拉那里——每天大笑，大口吃肉。他不说，但你知道：他在那个小房子里找到了布恩迪亚家已经不存在的东西。']}, choices:null, nextScene:'ch9_r4_settlement' },
    ch9_r4c: { id:'ch9_r4c', type:'narrative', chapter:9, round:4, title:'中立者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你什么都没有说。你看着奥雷里亚诺第二在两个家之间来回奔波——一个家有妻子，一个家有爱情。他从来没有在这两个家之间做出选择——因为布恩迪亚家的人从不懂得如何在"必须"和"想要"之间做减法。']}, choices:null, nextScene:'ch9_r4_settlement' },
    ch9_r4_settlement: { id:'ch9_r4_settlement', type:'settlement', chapter:9, round:4, title:'第四轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['奥雷里亚诺第二在两个女人之间找到了他的平衡——或不平衡。费尔南达守着那所越来越空的房子。佩特拉在院子里的无花果树上看着他。布恩迪亚家的男人从来不会只爱一个人——他们要么不爱，要么爱太多。']}, settlement:{ summary:'第四轮完成。你面对了奥雷里亚诺第二的婚姻危机。', nextScene:'ch9_r5_choice', nextLabel:'进入最终轮', quadrantNarratives: { guardian: '血在石板地上——你冲进去了。不是因为不怕，是因为有人在里面。', prophet: '你看见了屠杀的全部——从开始到结束。你看得太清楚了——从此闭不上眼。', follower: '你喊了——但没有人听见。至少你喊了。', rebel: '你站在原地——动不了。不是害怕，是愤怒卡在喉咙里出不来。' } } },

    ch9_r5_choice: { id:'ch9_r5_choice', type:'choice', chapter:9, round:5, title:'第五轮选择 · 面具之下', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['狂欢节结束了。面具被收进了阁楼——但面具之下的伤口还在。马孔多再也没有举办过狂欢节。广场上的纸花碎片被风吹走——或被蚂蚁拖进巢穴里。','你坐在走廊上，看着夕阳把栗树的影子一寸一寸拉长。你想起那天晚上的枪声——想起你救下的人，你没能救下的人，你面对的那个年轻军官。你问自己：这一切到底是为了什么？但没有人回答。只有风吹过走廊——带着远处香蕉公司蒸汽机的轰鸣。'], transition:'你选择——' }, choices:[
      { id:'ch9_r5_a', label:'记住——发誓不忘记', description:'在栗树下挖一个坑，埋进一件狂欢节的东西——让它永远提醒你。', nextScene:'ch9_r5a', effects:{ tags:['记忆的守护者'], memory:'埋藏的假面', characterFlags: { 'remembered_carnival': 1 }, fate:0, bond:1 } },
      { id:'ch9_r5_b', label:'放手——继续生活', description:'人不能永远活在过去的阴影里。把狂欢节的事放在一边——继续往前走。', nextScene:'ch9_r5b', effects:{ tags:['前行者'], memory:null, fate:1, bond:0 } },
      { id:'ch9_r5_c', label:'化作行动——对抗不公', description:'你不只会记住——你会行动。加入那些正在对抗香蕉公司的人。让记忆变成力量。', nextScene:'ch9_r5c', effects:{ tags:['行动者'], memory:null, fate:2, bond:-1 } },
      { id:'ch9_r5_d', label:'你开始理解费尔南达——不是认同，是理解', description:'她不是布恩迪亚——她生来就是一个被规矩包裹的人。你开始看见那些规矩下面藏着什么：恐惧。和她谈谈——不是争论，是倾听。', nextScene:'ch9_r5a', requiredRelationship: { character: '费尔南达·德尔·卡皮奥', min: 50 }, effects:{ tags:['跨过门槛的人'], memory:null, fate: 0, bond: 1 } }
    ], settlement:'ch9_r5_settlement' },
    ch9_r5a: { id:'ch9_r5a', type:'narrative', chapter:9, round:5, title:'记忆的守护者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你在栗树下挖了一个坑，把一只狂欢节的假面埋了进去。狮子——它的鬃毛已经被血染成了暗红。很多年后会有人挖出这只假面——他们会以为它是玩具。他们不会知道——它曾经在一个下午见证了马孔多最黑暗的时刻。']}, choices:null, nextScene:'ch9_r5_settlement' },
    ch9_r5b: { id:'ch9_r5b', type:'narrative', chapter:9, round:5, title:'前行者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你把记忆放在了一边——不是因为遗忘，是因为你需要力气走接下来的路。香蕉公司还在扩张，马孔多还在变化。你不能总是回头——前面还有太多事情等着你。但你心里有一个角落永远留给那个广场。']}, choices:null, nextScene:'ch9_r5_settlement' },
    ch9_r5c: { id:'ch9_r5c', type:'narrative', chapter:9, round:5, title:'行动者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你加入了何塞·阿尔卡蒂奥第二——他正在组织工人抗议香蕉公司的剥削。你不是领袖——你是见证者。但你用你的存在告诉他们：有人记得。有人知道。有人在看。']}, choices:null, nextScene:'ch9_r5_settlement' },
    ch9_r5_settlement: { id:'ch9_r5_settlement', type:'settlement', chapter:9, round:5, title:'第五轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['狂欢节已经过去了——但它的影子还笼罩着马孔多。政府在广场上种了新的花——但没有人去闻它们。人们还记得那些倒下去的人——虽然他们的名字已经被从所有的官方记录里删除了。除了一个人的记忆——你的。']}, settlement:{ summary:'最终轮完成。狂欢节的记忆已经成为马孔多的一部分。', nextScene:'chapter9_end', nextLabel:'查看章末结算', quadrantNarratives: { guardian: '血在石板地上——你冲进去了。不是因为不怕，是因为有人在里面。', prophet: '你看见了屠杀的全部——从开始到结束。你看得太清楚了——从此闭不上眼。', follower: '你喊了——但没有人听见。至少你喊了。', rebel: '你站在原地——动不了。不是害怕，是愤怒卡在喉咙里出不来。' } } },
    chapter9_end: { id:'chapter9_end', type:'settlement', chapter:9, round:6, title:'第九章 · 章末结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['第九章完结。费尔南达在这个家里的统治开始——狂欢节的血还没有干透。','但乌云正在马孔多上空聚集。在河对岸——香蕉公司的烟囱日夜不停地喷着烟。下一章：三千人将在火车站被屠杀——而世界会说：什么都没发生。']}, settlement:{ summary:'第九章完结。你经历了狂欢、爱情、屠杀和一个试图改变布恩迪亚家的女人。', isChapterEnd:true, nextLabel:'进入第十章 · 大罢工', quadrantNarratives: { guardian: '血在石板地上——你冲进去了。不是因为不怕，是因为有人在里面。', prophet: '你看见了屠杀的全部——从开始到结束。你看得太清楚了——从此闭不上眼。', follower: '你喊了——但没有人听见。至少你喊了。', rebel: '你站在原地——动不了。不是害怕，是愤怒卡在喉咙里出不来。' } } }
  },
  memories: {
    '狂欢节的枪声': { id:'狂欢节的枪声', title:'狂欢节的枪声', description:'你躲在马车后面——听见枪声像暴雨。出来的时候广场上满地是彩带和血。', chapter:9 },
    '空荡的走廊': { id:'空荡的走廊', title:'空荡的走廊', description:'你搬出去了。看着那所大房子在远处变小——费尔南达的影子在窗口晃了一下。', chapter:9 },
    '埋藏的假面': { id:'埋藏的假面', title:'埋藏的假面', description:'你把染血的假面埋进栗树下。狮子鬃毛暗红——很多年后会有人挖出它，以为只是玩具。', chapter:9 }
  },
  familyMembers: [
    { name:'费尔南达·德尔·卡皮奥', relation:'妻子（奥雷里亚诺第二）', generation:4, isCurrent:false, description:'来自省城的贵族之女。带着规则簿和祈祷书进入布恩迪亚家，试图用秩序征服混乱。' },
    { name:'佩特拉·科特斯', relation:'情妇（奥雷里亚诺第二）', generation:0, isCurrent:false, description:'奥雷里亚诺第二真正爱的女人。她用爱让他保持活着——比费尔南达成功得多。' }
  ]
});

/* ================================================================
   第十章 · 大罢工、三千人屠杀
   ================================================================ */
registerChapter({
  id: 'chapter10', title: '第十章 · 大罢工、三千人屠杀',
  initialScene: 'ch10_opening', possessedCharacter: '何塞·阿尔卡蒂奥第二', chapterNumber: 10,
  preview: '<p>第十一章 · 四年大雨、衰败开始</p>',
  nextLabel: '进入第十一章 · 四年大雨',
  moods: {
    'ch10_opening': '铁轨在震颤 —— 金属藤蔓正伸进马孔多的腹地，带来了工程师、合同和一种全新的孤独',
    'ch10_r2_choice': '机枪架在三个制高点上 —— 三千人站在广场里，他们以为话语能保护自己。话语打不过子弹',
    'ch10_r3_choice': '从尸体堆里爬出来 —— 浑身是血。你敲开第一扇门："三千人死了。"——"别胡说，什么都没发生。"'
  },
  scenes: {
    ch10_opening: { id:'ch10_opening', type:'narrative', chapter:10, round:0, title:'铁轨伸进沼泽', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['第一样你感受到的不是光——是震动。地面在颤抖，规律地、像军队的行进步伐一样从东边传来。','你起身走到窗口。铁轨像一条金属藤蔓，从沼泽边缘伸进马孔多的腹地。河对岸的草地变成了工棚、碾磨厂和铁丝网——标牌上用英文写着：UNITED FRUIT COMPANY — PRIVATE PROPERTY。','你叫何塞·阿尔卡蒂奥第二。你不是你伯父——但你的血液里有布恩迪亚的愤怒。你看着工人们在铁丝网后面佝偻着干活——一天十四个小时，工资用香蕉公司的代金券支付。你看不下去了。远处火车站台上隐约架着机枪——铁轨上的火车正在装车，方向是海边。'], clues: [
      { triggerText: '机枪', itemId: 'machinegun_position', narrative: '三挺机枪——站台左边一挺、右边一挺、香蕉树后面一挺。你记住了位置。不是因为你想记住——是因为你的眼睛不听使唤地记住了每一个细节。', unlocksIn: ['chapter19'] },
      { triggerText: '火车', itemId: 'train_direction', narrative: '火车往海边开去了。两百节车厢——不是货厢，是装人的。他们被塞进车厢里，车门从外面锁上。你看着铁轨——它伸向远方，伸向一个没有人会承认的方向。', unlocksIn: ['chapter14'] }
    ] }, echoCondition: { clue: 'carnival_mask' }, echoText: '你记得狂欢节的血——不是颜色，是它在石板地上干涸的速度。比红酒快。比雨慢。这次你不会再犹豫。', choices:null, nextScene:'ch10_explore' },

    ch10_explore: {
      id: 'ch10_explore', type: 'exploration', chapter: 10, round: 0,
      title: '探索 · 火车站广场',
      leftPage: {
        speaker: '旁白', speakerColor: '#4a2a18',
        paragraphs: [
          '你站在火车站前的广场上。天还没亮——但空气中已经弥漫着紧张。地面还湿着——昨夜的雨水积在铁轨旁的低洼处，反射着远处工棚的灯光。',
          '工人们陆续从各个方向走来——他们穿着最干净的衣服，好像去教堂。他们不是来打仗的——他们是来要求一个厕所、一个医生、一份能用硬币支付的工资。',
          '在风暴来临之前的这一刻——这广场上有许多东西在低声说话。铁轨、弹壳、告示、远处的栗树。它们知道一些你不知道的事。触碰它们——听听它们说什么。'
        ]
      },
      hotspots: [
        { id: 'hs_platform', label: '站台上的脚印', position: { x: '50%', y: '60%' }, narrative: '站台上密密麻麻的脚印——光脚的、草鞋的、橡胶靴的。几千双脚在这个站台上站过——不是等火车，是等命运。有些不那么深的脚印——那是孩子的。大人带着他们来——因为罢工也是他们的。', discoveredText: '你数了站台上的脚印。' },
        { id: 'hs_notice', label: '香蕉公司的告示', position: { x: '75%', y: '20%' }, narrative: '一张告示钉在站台柱子上——上面的英文你不太认识。但你知道它的意思："正常运营。"不管今天发生什么——香蕉公司会说一切正常。因为他们一直这样说。墨水还没干——但你感觉它已经干了一百年。', discoveredText: '你读完了香蕉公司的告示。' },
        { id: 'hs_shell', label: '地上的弹壳', position: { x: '20%', y: '70%' }, narrative: '一枚铜弹壳——卡在石板缝里。已经生锈了，不是今天的。是上一次的。或者是下一次的。你把它捡起来——它比看起来要轻。死亡总是比看起来要轻——直到它落在你身上。', discoveredText: '你捡起了地上的弹壳。' },
        { id: 'hs_chestnut', label: '远处栗树的轮廓', position: { x: '10%', y: '15%' }, narrative: '从这里你能看见布恩迪亚家的栗树——很远，像一个黑色的逗号。你忽然想：如果现在走回去——沿着铁轨往回走，穿过沼泽——你可以在中午前到家。乌尔苏拉会在厨房里。汤可能还没凉。但你知道你不会走回去——因为你不是那种人。', discoveredText: '你看见了远处的栗树。' }
      ],
      requiredDiscoveries: 3,
      nextScene: 'ch10_r1_choice'
    },

    ch10_r1_choice: { id:'ch10_r1_choice', type:'choice', chapter:10, round:1, title:'第一轮选择 · 罢工前夜', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你在工人宿舍的门廊上。夜很热——香蕉皮在没有排水沟的街道上发酵。工人睡在铁皮搭成的铺位上——身上长着脓疮，没有人看医生。','明天——工人要罢工了。他们要求厕所、医疗、现金工资。香蕉公司的回答——你还没有听到，但你预感不会是一个"是"。'], transition:'你选择——' }, choices:[
      { id:'ch10_r1_a', label:'领导罢工', description:'你是布恩迪亚——你必须站在他们前面。组织工人，带领他们走上街头。', nextScene:'ch10_r1a', effects:{ tags:['罢工领袖'], memory:null, fate:1, bond:1 } },
      { id:'ch10_r1_b', label:'支持——但在幕后', description:'你可以帮忙写标语、筹钱、联系其他地方。但你不必站在最前面——你的位置应该在策略桌上。', nextScene:'ch10_r1b', effects:{ tags:['幕后支持者'], memory:null, fate:0, bond:2 } },
      { id:'ch10_r1_c', label:'劝阻——暴力即将来临', description:'你预感到这场罢工会以血收场。劝工人们通过谈判争取——而不是走上街头。', nextScene:'ch10_r1c', effects:{ tags:['谨慎的预警者'], memory:null, fate:1, bond:-1 } },
      { id:'ch10_r1_d', label:'你知道接下来会发生什么——这一次，也许能救一个人', description:'你上次站在这里时不知道机枪在哪里。这一次你知道了——站台左边，站台右边，香蕉树后面。也许提前告诉一个人就够了。也许一个人就能改变三千。', nextScene:'ch10_r1a', requiredPlaythrough: 2, effects:{ tags:['试图改写历史的人'], memory:null, fate: 2, bond: 1 } }
    ], settlement:'ch10_r1_settlement' },
    ch10_r1a: { id:'ch10_r1a', type:'narrative', chapter:10, round:1, title:'罢工领袖', leftPage:{ speaker:'何塞·阿尔卡蒂奥第二', speakerColor:'#1a3a4a', paragraphs:['你站在工人们面前——他们衣衫褴褛、疲惫不堪。你开始说话——不是大喊，是平静地告诉他们：他们应该得到一个厕所，一个医生，一份能买面包的工资。"明天——我们都不去上班。"他们看着你——有些人害怕，但没有人离开。']}, choices:null, nextScene:'ch10_r1_settlement' },
    ch10_r1b: { id:'ch10_r1b', type:'narrative', chapter:10, round:1, title:'幕后支持者', leftPage:{ speaker:'何塞·阿尔卡蒂奥第二', speakerColor:'#1a3a4a', paragraphs:['你没有站在队伍最前面——但你帮他们写了宣言，联系了省城的工会。你在后方工作——确保罢工不只是愤怒的爆发，而是一场有策略的行动。']}, choices:null, nextScene:'ch10_r1_settlement' },
    ch10_r1c: { id:'ch10_r1c', type:'narrative', chapter:10, round:1, title:'谨慎的预警者', leftPage:{ speaker:'何塞·阿尔卡蒂奥第二', speakerColor:'#1a3a4a', paragraphs:['你劝他们谈判。但他们太累了，太愤怒了——谈判从来没有给过他们任何东西。他们不听你的。你在他们脸上看见了布恩迪亚式的固执——你无法阻止。你只能祈祷。但上帝不常来马孔多。']}, choices:null, nextScene:'ch10_r1_settlement' },
    ch10_r1_settlement: { id:'ch10_r1_settlement', type:'settlement', chapter:10, round:1, title:'第一轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['罢工开始了。三千多工人——加上他们的妻儿——聚集在火车站前的广场上。他们手上没有枪，但手里有标语。他们以为话语能保护他们。但话语是打不过子弹的。']}, settlement:{ summary:'第一轮完成。罢工已经开始——你选择了自己的位置。', nextScene:'ch10_r2_choice', nextLabel:'进入第二轮', quadrantNarratives: { guardian: '三千人——你记住了。每一个。不是在纸上——是在骨头里。', prophet: '你写了真相——但没有人读。你会在作坊里一遍一遍地熔金鱼，每一遍都在默念那三千个名字。', follower: '你把真相告诉了乌尔苏拉——她是你唯一信任的人。有时候只需要一个人记住。', rebel: '你拒绝遗忘——即使整个世界都在合谋让你忘记。三千人——你念出他们的名字时，他们还活着。' } } },

    ch10_r2_choice: { id:'ch10_r2_choice', type:'choice', chapter:10, round:2, title:'第二轮选择 · 三千人屠杀', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['军队包围了火车站——不是一小支，是整个营。一个军官站在高处宣读一份公告：五分钟内撤离——否则开火。','五分钟到了。没有人离开。工人手挽着手——他们不相信士兵会开枪。可你不确定。你在人群中——你看见了士兵们脸上的表情：不是愤怒，是恐惧。他们在害怕——害怕的人最容易扣下扳机。','你看见了机枪。不止一挺——是三挺，分别架在三个制高点上。'], transition:'你选择——' }, choices:[
      { id:'ch10_r2_a', label:'大喊——让大家趴下', description:'枪要响了——你能感觉到。用最大的声音喊出来——哪怕只能救一个人。', nextScene:'ch10_r2a', effects:{ tags:['最后的呐喊者'], memory:null, fate:2, bond:1 } },
      { id:'ch10_r2_b', label:'冲上去——面对军官', description:'你是布恩迪亚——也许你的名字还能让一个军官犹豫几秒。冲上去——面对他。', nextScene:'ch10_r2b', effects:{ tags:['对峙者'], memory:null, fate:1, bond:0 } },
      { id:'ch10_r2_c', label:'保护身边的人——用自己的身体挡住', description:'你身边有一个带着孩子的母亲。你用身体挡住他们——也许子弹不会穿透你的身体。', nextScene:'ch10_r2c', effects:{ tags:['牺牲者'], memory:'三千人的名字', fate:-1, bond:-1 } },
      { id:'ch10_r2_d', label:'你记得狂欢节面具下的脸——认出人群中的便衣士兵', description:'那个狂欢节的假面还在你的记忆里。你扫过人群——认出那些藏在平民衣服下的便衣。你知道他们会在哪里开枪。', nextScene:'ch10_r2b', requiredClue: 'carnival_mask', effects:{ tags:['面具下的真相'], memory:null, fate: 1, bond: 1 } }
    ], settlement:'ch10_r2_settlement' },
    ch10_r2a: { id:'ch10_r2a', type:'narrative', chapter:10, round:2, title:'最后的呐喊者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你在枪响前零点几秒喊出了声——"趴下！"你附近的人趴下了。但你身后的人——他们没有听见。枪响了。子弹像暴雨一样收割着站在最前面的那些人。你的声音还在空气中——但已经没有人听了。']}, choices:null, nextScene:'ch10_r2_settlement' },
    ch10_r2b: { id:'ch10_r2b', type:'narrative', chapter:10, round:2, title:'对峙者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你冲出人群——朝军官跑去。你的手张开着——没有武器。你在他面前停下来。他看着你——他愣了一下。但你听见身后——枪响了。他没有下令开枪——但他也没有下令停止。你是布恩迪亚——但这只能让你多活三秒。三秒后你被推开了。枪声吞没了一切。']}, choices:null, nextScene:'ch10_r2_settlement' },
    ch10_r2c: { id:'ch10_r2c', type:'narrative', chapter:10, round:2, title:'牺牲者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你把那个母亲和孩子推到墙后面——用你的身体挡住了出口。枪响了。你感觉到热——不是子弹的热，是你自己的血在往外流的热。但母亲和孩子在你身后的墙缝里缩着——他们还在呼吸。你倒下去的时候想：这条命也许不值钱——但它挡住了足够多的东西。']}, choices:null, nextScene:'ch10_r2_settlement' },
    ch10_r2_settlement: { id:'ch10_r2_settlement', type:'settlement', chapter:10, round:2, title:'第二轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['三千多人——男人、女人、孩子——在火车站前被机枪扫倒了。尸体被装上火车——两百多节车厢满载着死人和垂死者。火车开往大海方向。没有人知道这些尸体最终去了哪里。','政府说：什么都没发生。马孔多没有人被杀——香蕉公司没有雇佣过任何工人。报纸上写着：马孔多一切正常。']}, settlement:{ summary:'第二轮完成。你经历了哥伦比亚历史上最黑暗的时刻之一。', nextScene:'ch10_r3_choice', nextLabel:'进入第三轮', quadrantNarratives: { guardian: '三千人——你记住了。每一个。不是在纸上——是在骨头里。', prophet: '你写了真相——但没有人读。你会在作坊里一遍一遍地熔金鱼，每一遍都在默念那三千个名字。', follower: '你把真相告诉了乌尔苏拉——她是你唯一信任的人。有时候只需要一个人记住。', rebel: '你拒绝遗忘——即使整个世界都在合谋让你忘记。三千人——你念出他们的名字时，他们还活着。' } } },

    ch10_r3_choice: { id:'ch10_r3_choice', type:'choice', chapter:10, round:3, title:'第三轮选择 · 活着的证词', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你活下来了——不知道是怎么活下来的。你从尸体堆里爬出来的时候，天已经黑了。火车站前空无一人——只有血。月光照在血上——让它看起来像黑色的水。','你走回马孔多——浑身是血。你敲开第一扇门——告诉他们：三千人死了。他们看着你——像看一个疯子。"别胡说——什么都没发生。"你敲开第二扇门——同样的反应。第三扇——第四扇——全马孔多的人都告诉你：你在做梦。'], transition:'你选择——' }, choices:[
      { id:'ch10_r3_a', label:'继续讲述——直到有人相信', description:'你不能让这场屠杀被遗忘。继续敲每一扇门——直到有一个人说："我相信你。"', nextScene:'ch10_r3a', effects:{ tags:['不倦的见证者'], memory:null, fate:1, bond:0 } },
      { id:'ch10_r3_b', label:'写下记录——藏起来', description:'你不求和活人争辩。你写下来——把真相藏在羊皮卷里，等将来的人发现。', nextScene:'ch10_r3b', effects:{ tags:['秘密记录者'], memory:'被藏起的真相', fate:-1, bond:2 } },
      { id:'ch10_r3_c', label:'停止讲述——用沉默纪念', description:'也许有些真相无法用语言传达。你不再说——但你在心里刻下了三千个名字。', nextScene:'ch10_r3c', effects:{ tags:['沉默的铭记者'], memory:'刻在心里的名单', fate:0, bond:-1 } }
    ], settlement:'ch10_r3_settlement' },
    ch10_r3a: { id:'ch10_r3a', type:'narrative', chapter:10, round:3, title:'不倦的见证者', leftPage:{ speaker:'何塞·阿尔卡蒂奥第二', speakerColor:'#1a3a4a', paragraphs:['你继续敲。你敲了每一扇门。大多数人不相信——但有一个孩子看着你。他的眼睛很大——他没有说信或不信，但他记住了你的脸。很多年后，这个孩子会成为唯一一个告诉后代："火车站前曾经有三千人被杀。有一个浑身是血的布恩迪亚从尸体堆里爬出来告诉我的。"']}, choices:null, nextScene:'ch10_r3_settlement' },
    ch10_r3b: { id:'ch10_r3b', type:'narrative', chapter:10, round:3, title:'秘密记录者', leftPage:{ speaker:'何塞·阿尔卡蒂奥第二', speakerColor:'#1a3a4a', paragraphs:['你走进梅尔基亚德斯的旧房间——那间已经很久没有人进去过的房间。你开始写——把你在火车站看到的一切都写了下来：机枪的位置，军官的脸，尸体的数量，火车开往的方向。你把这些纸藏在书架最深处。你不知道谁会读到——但你知道它们会在那里——等着。']}, choices:null, nextScene:'ch10_r3_settlement' },
    ch10_r3c: { id:'ch10_r3c', type:'narrative', chapter:10, round:3, title:'沉默的铭记者', leftPage:{ speaker:'何塞·阿尔卡蒂奥第二', speakerColor:'#1a3a4a', paragraphs:['你不再讲述。不是因为放弃——是因为语言太脆弱了。你在心里建了一座坟墓——三千个名字刻在墙壁上。你每天在心里默念它们——像一个仪式。没有人知道你在干什么——但你的嘴唇一直在动。后来有人说：何塞·阿尔卡蒂奥第二疯了。但你没有疯——你只是把真实藏进了别人看不见的地方。']}, choices:null, nextScene:'ch10_r3_settlement' },
    ch10_r3_settlement: { id:'ch10_r3_settlement', type:'settlement', chapter:10, round:3, title:'第三轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['马孔多官方记忆：什么都没发生。政府记录：香蕉公司从未雇佣超过一百名工人。报纸标题：马孔多一切正常。','但有一个布恩迪亚知道真相。他把它藏在语言里、纸张里或沉默里——藏在一个不会被删改的地方。']}, settlement:{ summary:'第三轮完成。你选择如何保存真相。', nextScene:'ch10_r4_choice', nextLabel:'进入第四轮', quadrantNarratives: { guardian: '三千人——你记住了。每一个。不是在纸上——是在骨头里。', prophet: '你写了真相——但没有人读。你会在作坊里一遍一遍地熔金鱼，每一遍都在默念那三千个名字。', follower: '你把真相告诉了乌尔苏拉——她是你唯一信任的人。有时候只需要一个人记住。', rebel: '你拒绝遗忘——即使整个世界都在合谋让你忘记。三千人——你念出他们的名字时，他们还活着。' } } },

    ch10_r4_choice: { id:'ch10_r4_choice', type:'choice', chapter:10, round:4, title:'第四轮选择 · 与遗忘对抗', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['香蕉公司撤走了——工人的尸体已经被鲨鱼吃掉。铁路被拆了，工棚被烧了，铁丝网被拆走了。河对岸重新变成了荒地——仿佛什么都没有发生过。','政府宣传说马孔多从来没有香蕉公司。年轻人相信了——因为他们没有见过。只有老人还记得——但他们正在一个接一个地死去。每一个老人的死，都是真相的一次缩小。'], transition:'你选择——' }, choices:[
      { id:'ch10_r4_a', label:'教年轻人——告诉他们真相', description:'不要让下一代活在他们编造的谎言里。把你知道的一切都教给年轻人。', nextScene:'ch10_r4a', effects:{ tags:['传道者'], memory:null, fate:1, bond:0 } },
      { id:'ch10_r4_b', label:'建一座纪念碑——哪怕私人的', description:'在你的院子里立一块石头——上面刻着"三千"。不需要解释——只需要存在。', nextScene:'ch10_r4b', effects:{ tags:['纪念碑建造者'], memory:'院子里的石头', fate:0, bond:1 } },
      { id:'ch10_r4_c', label:'闭上嘴——保护自己', description:'你是唯一知道真相的人了。如果你死了——真相就真的死了。活下去——哪怕这意味着沉默。', nextScene:'ch10_r4c', effects:{ tags:['沉默的保护者'], memory:null, fate:0, bond:-1 } },
      { id:'ch10_r4_d', label:'你记得军装上的金线——以布恩迪亚之名作证', description:'你摸到军装口袋上绣着的"布恩迪亚"——金线已经磨得发白。你不是一个人——你的姓氏就是证词。', nextScene:'ch10_r4a', requiredClue: 'gold_thread_pocket', effects:{ tags:['以名为证的人'], memory:null, fate: 1, bond: 1 } }
    ], settlement:'ch10_r4_settlement' },
    ch10_r4a: { id:'ch10_r4a', type:'narrative', chapter:10, round:4, title:'传道者', leftPage:{ speaker:'何塞·阿尔卡蒂奥第二', speakerColor:'#1a3a4a', paragraphs:['你把年轻人叫到栗树下——告诉他们：这里曾经有香蕉公司，有罢工，有机枪。他们有些人不信——有些人半信半疑。但你看见了几双眼睛——它们没有怀疑。这些眼睛里会继续保留真相，像保留火种。']}, choices:null, nextScene:'ch10_r4_settlement' },
    ch10_r4b: { id:'ch10_r4b', type:'narrative', chapter:10, round:4, title:'纪念碑建造者', leftPage:{ speaker:'何塞·阿尔卡蒂奥第二', speakerColor:'#1a3a4a', paragraphs:['你在栗树旁边立了一块石头。上面只刻着一个数字：3000。没有名字，没有日期。路过的人问她是什么。你说："数字。只是一个数字。"但你知道——它不是数字。它是三千个名字——压缩成了一块石头能承受的最小重量。']}, choices:null, nextScene:'ch10_r4_settlement' },
    ch10_r4c: { id:'ch10_r4c', type:'narrative', chapter:10, round:4, title:'沉默的保护者', leftPage:{ speaker:'何塞·阿尔卡蒂奥第二', speakerColor:'#1a3a4a', paragraphs:['你不再说话了。你把真相封存在体内的某个地方——像琥珀封存昆虫。你每天去梅尔基亚德斯的旧房间里读书——实际上你是去确认你的记忆还没有消失。你很老了——但你还记得。你是马孔多唯一还在默念那三千个名字的人。']}, choices:null, nextScene:'ch10_r4_settlement' },
    ch10_r4_settlement: { id:'ch10_r4_settlement', type:'settlement', chapter:10, round:4, title:'第四轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['遗忘像潮水一样淹没了马孔多。但海浪下有一块石头——刻着三千。它不会漂浮，但它也不会被冲走。']}, settlement:{ summary:'第四轮完成。你选择了对抗遗忘的方式。', nextScene:'ch10_r5_choice', nextLabel:'进入最终轮', quadrantNarratives: { guardian: '三千人——你记住了。每一个。不是在纸上——是在骨头里。', prophet: '你写了真相——但没有人读。你会在作坊里一遍一遍地熔金鱼，每一遍都在默念那三千个名字。', follower: '你把真相告诉了乌尔苏拉——她是你唯一信任的人。有时候只需要一个人记住。', rebel: '你拒绝遗忘——即使整个世界都在合谋让你忘记。三千人——你念出他们的名字时，他们还活着。' } } },

    ch10_r5_choice: { id:'ch10_r5_choice', type:'choice', chapter:10, round:5, title:'第五轮选择 · 最后的见证', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你很老了。你坐在梅尔基亚德斯的旧房间里——这间房间的时间不会流逝。你看着书架上那些羊皮卷——它们记录着这个家族的全部历史。你忽然想：也许这些羊皮卷里也有三千人的名字。也许没有。也许梅尔基亚德斯没有写到他们——因为他们不在布恩迪亚家的谱系里。','但你知道。你还活着——至少现在。你是三千人被遗忘的唯一阻止。当你也走了——他们就真的消失了。'], transition:'你选择——' }, choices:[
      { id:'ch10_r5_a', label:'把名字写进羊皮卷', description:'在梅尔基亚德斯的羊皮卷边缘，偷偷写下三千人的数字。让它成为家族记录的一部分。', nextScene:'ch10_r5a', isSecretOption: true, effects:{ tags:['篡改者'], memory:'羊皮卷边缘的数字', fate:2, bond:-1 } },
      { id:'ch10_r5_b', label:'在死亡前——最后讲述一次', description:'把你的故事讲给最后一个人——也许是你家族的某个人，也许是风。', nextScene:'ch10_r5b', effects:{ tags:['最后的讲述者'], memory:null, fate:1, bond:0 } },
      { id:'ch10_r5_c', label:'安静等待——让历史自己说话', description:'你已经做了够多了。也许历史不需要被见证——也许只需要它自己知道它发生过。', nextScene:'ch10_r5c', effects:{ tags:['安详的告别者'], memory:null, fate:-1, bond:1 } },
      { id:'ch10_r5_d', label:'你摸过墙上的弹孔——为每一颗子弹留一行', description:'你记得行刑队墙上的弹孔——它们等过你。现在你在羊皮卷上——为每一个没有墓碑的人写下一行。一行就够了。', nextScene:'ch10_r5a', requiredClue: 'bullet_holes_wall', effects:{ tags:['弹孔的记录者'], memory:null, fate: 1, bond: 0 } },
      { id:'ch10_r5_e', label:'你看见了羊皮卷的全貌——为未来的人写一段注释', description:'梅尔基亚德斯在羊皮卷边缘留了空白——不是疏忽，是邀请。你拿起笔——在空白的边缘写下：三千人没有名字，但他们来过。', nextScene:'ch10_r5a', requiredFate: { min: 4 }, effects:{ tags:['羊皮卷的注释者'], memory:null, fate: 1, bond: 0 } }
    ], settlement:'ch10_r5_settlement' },
    ch10_r5a: { id:'ch10_r5a', type:'narrative', chapter:10, round:5, title:'篡改者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你拿起笔——梅尔基亚德斯的鹅毛笔。在羊皮卷的边缘，你用很小的字写下了一行数字：3000。然后写上了一个日期——屠杀发生的日期。将来破解羊皮卷的人会看到这个数字。他们不知道它是什么意思——但他们会追问。追问就是记忆的开始。']}, choices:null, nextScene:'ch10_r5_settlement' },
    ch10_r5b: { id:'ch10_r5b', type:'narrative', chapter:10, round:5, title:'最后的讲述者', leftPage:{ speaker:'何塞·阿尔卡蒂奥第二', speakerColor:'#1a3a4a', paragraphs:['你坐在栗树下——对着风讲述。也许没有人听到——但你不在乎。你把三千人的事说完整了——从机枪架起到尸体被装车运走。你说完了每一个细节——然后闭上了眼睛。风把你说的话带走了——不是吹散，是带走。也许它会把它们带到某个地方——某个有耳朵等着听的地方。']}, choices:null, nextScene:'ch10_r5_settlement' },
    ch10_r5c: { id:'ch10_r5c', type:'narrative', chapter:10, round:5, title:'安详的告别者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你坐在那间古老房间里——时间在这里是静止的。你想起了你的一生——罢工、枪声、尸体堆、那些不相信你的人。你微笑了——没有苦涩。因为你知道：有些真相不需要被记住。它们发生了——这本身就足够。世界可以否认——但发生过的事永远发生过了。']}, choices:null, nextScene:'ch10_r5_settlement' },
    ch10_r5_settlement: { id:'ch10_r5_settlement', type:'settlement', chapter:10, round:5, title:'第五轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['何塞·阿尔卡蒂奥第二死了——以他选择的方式。他在那间时间静止的房间里度过了最后的岁月。他走的时候——羊皮卷上的字迹没有变。栗树下的石头没有变。但马孔多变了一点点——因为曾经有一个人记得。']}, settlement:{ summary:'最终轮完成。你作为最后一个见证者——选择了如何面对真相。', nextScene:'chapter10_end', nextLabel:'查看章末结算', quadrantNarratives: { guardian: '三千人——你记住了。每一个。不是在纸上——是在骨头里。', prophet: '你写了真相——但没有人读。你会在作坊里一遍一遍地熔金鱼，每一遍都在默念那三千个名字。', follower: '你把真相告诉了乌尔苏拉——她是你唯一信任的人。有时候只需要一个人记住。', rebel: '你拒绝遗忘——即使整个世界都在合谋让你忘记。三千人——你念出他们的名字时，他们还活着。' } } },
    chapter10_end: { id:'chapter10_end', type:'settlement', chapter:10, round:6, title:'第十章 · 章末结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['第十章完结。三千人被杀了——然后被遗忘了。但你记得。你在纸上、石头里或沉默中保存了这个真相。','天边有乌云正在聚集。不是比喻——是真正的云。那是将要在马孔多下四年的雨。']}, settlement:{ summary:'第十章完结。你见证了屠杀，并以你的方式对抗了遗忘。', isChapterEnd:true, nextLabel:'进入第十一章 · 四年大雨',  emotionalCost:'多年以后，当马孔多被飓风抹去——政府仍然会说"什么都没发生"。但你不会。你在火车站前做过的事——无论你喊出声、冲上去还是用身体挡住——将是你面对羊皮卷时唯一能说出口的话："我试过了。"', quadrantNarratives: { guardian: '三千人——你记住了。每一个。不是在纸上——是在骨头里。', prophet: '你写了真相——但没有人读。你会在作坊里一遍一遍地熔金鱼，每一遍都在默念那三千个名字。', follower: '你把真相告诉了乌尔苏拉——她是你唯一信任的人。有时候只需要一个人记住。', rebel: '你拒绝遗忘——即使整个世界都在合谋让你忘记。三千人——你念出他们的名字时，他们还活着。' } } }
  },
  memories: {
    '三千人的名字': { id:'三千人的名字', title:'三千人的名字', description:'你用身体挡住母子二人。子弹热的是你的血。倒下去时你想：这条命也许挡住了足够多的东西。', chapter:10 },
    '被藏起的真相': { id:'被藏起的真相', title:'被藏起的真相', description:'你在羊皮卷中写下了屠杀的一切——藏在书架深处。等着将来被发现。', chapter:10 },
    '刻在心里的名单': { id:'刻在心里的名单', title:'刻在心里的名单', description:'你不再讲述——但你在心里建了一座坟墓。每天默念三千个名字。你没有疯——你只是把真实藏起来了。', chapter:10 },
    '院子里的石头': { id:'院子里的石头', title:'院子里的石头', description:'你立了一块石头，只刻"3000"。路过的人问这是什么——"数字。只是一个数字。"', chapter:10 },
    '羊皮卷边缘的数字': { id:'羊皮卷边缘的数字', title:'羊皮卷边缘的数字', description:'你在羊皮卷边缘写下"3000"和一个日期。将来破解的人会追问——追问就是记忆的开始。', chapter:10 }
  },
  familyMembers: []
});
