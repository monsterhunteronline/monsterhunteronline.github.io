function translate(text) {
	var out = text;
//Bow Coating
	if (text == '强击瓶') {out = 'Power Coating';};
	if (text == '毒瓶') {out = 'Poison Coating';};
	if (text == '麻瓶') {out = 'Para Coating';};
	if (text == '接击瓶') {out = 'C.Range Coating';};
	if (text == '眠瓶') {out = 'Sleep Coating';};
//Bow Lob
	if (text == '天型1级') {out = 'Arrow Rain Lv1';};
	if (text == '天型2级') {out = 'Arrow Rain Lv2';};
	if (text == '天型3级') {out = 'Arrow Rain Lv3';};
	if (text == '地型1级') {out = 'Arrow Bomb Lv1';};
	if (text == '地型2级') {out = 'Arrow Bomb Lv2';};
	if (text == '地型3级') {out = 'Arrow Bomb Lv3';};
//Sizes
	if (text == '小') {out = 'Small';};
	if (text == '中') {out = 'Med';};
	if (text == '大') {out = 'Large';};
	if (text == '慢') {out = 'Slow';};
	if (text == '快') {out = 'Fast';};
//Bowgun Ammo
	if (text == '通常弹1级') {out = 'Normal S Lv1';};
	if (text == '通常弹2级') {out = 'Normal S Lv2';};
	if (text == '通常弹3级') {out = 'Normal S Lv3';};
	if (text == '散弹1级') {out = 'Pellet S Lv1';};
	if (text == '散弹2级') {out = 'Pellet S Lv2';};
	if (text == '散弹3级') {out = 'Pellet S Lv3';};
	if (text == '贯通弹1级') {out = 'Pierce S Lv1';};
	if (text == '贯通弹2级') {out = 'Pierce S Lv2';};
	if (text == '贯通弹3级') {out = 'Pierce S Lv3';};
	if (text == '彻甲榴弹1级') {out = 'Crag S Lv1';};
	if (text == '彻甲榴弹2级') {out = 'Crag S Lv2';};
	if (text == '彻甲榴弹3级') {out = 'Crag S Lv3';};
	if (text == '麻痹弹') {out = 'Para S';};
	if (text == '致眠弹') {out = 'Sleep S';};
	if (text == '火焰弹') {out = 'Flaming S';};
	if (text == '猛毒弹') {out = 'Poison S';};
	if (text == '水冷弹') {out = 'Water S';};
	if (text == '电击弹') {out = 'Thunder S';};
	if (text == '冰结弹') {out = 'Freeze S';};
//Bowgun Secondary Title
	if (text == '速射2发') {out = 'Rapid ';};
	if (text == '速射3发') {out = 'Rapid ';};
	if (text == '蓄力') {out = 'Charge ';};
//Armor Skills
	if (text == '伏击') {out = 'Ambush';};
	if (text == '抗菌') {out = 'Anti-bacterial';};
	if (text == '攻击') {out = 'Attack';};
	if (text == '蝶舞') {out = 'Butterfly Dance';};
	if (text == '耐寒') {out = 'Cold Res';};
	if (text == '体术') {out = 'Constitution';};
	if (text == '匠') {out = 'Handicraft';};
	if (text == '拔刀会心') {out = 'Crit Draw';};
	if (text == '防御') {out = 'Defense';};
	if (text == '重击') {out = 'Destroyer';};
	if (text == '龙属性攻击') {out = 'Dragon Atk';};
	if (text == '食事') {out = 'Eating';};
	if (text == '回避距离') {out = 'Evade Dist';};
	if (text == '回避性能') {out = 'Evasion';};
	if (text == '达人') {out = 'Expert';};
	if (text == '集中') {out = 'FastCharge';};
	if (text == '剑术') {out = 'Fencing';};
	if (text == '火属性攻击') {out = 'Fire Atk';};
	if (text == '火耐性') {out = 'Fire Res';};
	if (text == '吃货') {out = 'Gluttony';};
	if (text == '防御性能') {out = 'Guard';};
	if (text == '防御强化') {out = 'Guard Up';};
	if (text == '根性') {out = 'Guts';};
	if (text == '体力') {out = 'Health';};
	if (text == '听觉保护') {out = 'Hearing';};
	if (text == '耐暑') {out = 'Heat Res';};
	if (text == '药王') {out = 'Herb King';};
	if (text == '荷尔蒙') {out = 'Hormone';};
	if (text == '饥饿感') {out = 'Hunger';};
	if (text == '冰属性攻击') {out = 'Ice Atk';};
	if (text == '冰耐性') {out = 'Ice Res';};
	if (text == '会心术') {out = 'Knowing Technique';};
	if (text == 'KO术') {out = 'KO';};
	if (text == '装填术') {out = 'Loading';};
	if (text == '耐泥雪') {out = 'Mud/Snow';};
	if (text == '通常弹强化') {out = 'Normal Up';};
	if (text == '麻痹抵抗') {out = 'Paralysis';};
	if (text == '散弹强化') {out = 'Pellet Up';};
	if (text == '观察眼') {out = 'Perception';};
	if (text == '贯通弹强化') {out = 'Pierce Up';};
	if (text == '毒抵抗') {out = 'Poison';};
	if (text == '底力') {out = 'Potential';};
	if (text == '加护') {out = 'Protection';};
	if (text == '千里眼') {out = 'Psychic';};
	if (text == '回复速度') {out = 'Rec Speed';};
	if (text == '反动') {out = 'Recoil';};
	if (text == '快速装填') {out = 'Reload Spd';};
	if (text == '强韧') {out = 'Resilience';};
	if (text == '气息') {out = 'Sense';};
	if (text == '研磨师') {out = 'Sharpener';};
	if (text == '锋利度') {out = 'Sharpness';};
	if (text == '睡眠抵抗') {out = 'Sleep';};
	if (text == '高速设置') {out = 'SpeedSetup';};
	if (text == '斗魂') {out = 'Spirit';};
	if (text == '耐力回复') {out = 'Stam Recov';};
	if (text == '特殊攻击') {out = 'Status';};
	if (text == '气绝抵抗') {out = 'Stun';};
	if (text == '逆境') {out = 'Survivor';};
	if (text == '痛击') {out = 'Tenderizer';};
	if (text == '刺伤') {out = 'Bleeding';};
	if (text == '雷耐性') {out = 'Thunder Res';};
	if (text == '雷属性攻击') {out = 'ThunderAtk';};
	if (text == '耐震') {out = 'Tremor Res';};
	if (text == '倒地之力') {out = 'Tripping Power';};
	if (text == '无伤') {out = 'Unscathed';};
	if (text == '水属性攻击') {out = 'Water Atk';};
	if (text == '广域化') {out = 'Wide-Range';};
	if (text == '风压抵抗') {out = 'Wind Res';};
	if (text == '甲壳猎人') {out = 'Crustaceans Hunter';};
	if (text == '鸟龙猎人') {out = 'Bird Dragons Hunter';};
	if (text == '飞龙猎人') {out = 'Dragons Hunter';};


	if (text == '真晓风') {out = 'True Dawnwind';};

//Monster Names
	if (text == '灰晶蝎') {out = '<a href="/monsters/akura-jebia/" target="_blank">Akura Jebia</a>';};
	if (text == '尾晶蝎') {out = '<a href="/monsters/akura-vashimu/" target="_blank">Akura Vashimu</a>';};
	if (text == '苍火龙') {out = '<a href="/monsters/azure-rathalos/" target="_blank">Azure Rathalos</a>';};
	if (text == '鬼狩蛛') {out = '<a href="/monsters/baelidae/" target="_blank">Baelidae</a>';};
	if (text == '岩龙') {out = '<a href="/monsters/basarios/" target="_blank">Basarios</a>';};
	if (text == '铠龙') {out = '<a href="/monsters/basarios/" target="_blank">Basarios?</a>';};
	if (text == '雪狮子王') {out = '<a href="/monsters/blangonga/" target="_blank">Blangonga</a>';};
	if (text == '青怪鸟') {out = '<a href="/monsters/blue-yian-kut-ku/" target="_blank">Blue Yian Kut-Ku</a>';};
	if (text == '大野猪王') {out = '<a href="/monsters/bulldrome/" target="_blank">Bulldrome</a>';};
	if (text == '河狸兽') {out = '<a href="/monsters/caeserber/" target="_blank">Caeserber</a>';};
	if (text == '沙龙王') {out = '<a href="/monsters/cephadrome/" target="_blank">Cephadrome</a>';};
	if (text == '沙雷鸟') {out = '<a href="/monsters/chramine/" target="_blank">Chramine</a>';};
	if (text == '烈焰女王') {out = '<a href="/monsters/conflagration-rathian/" target="_blank">Conflagration Rathian</a>';};
	if (text == '桃毛兽王') {out = '<a href="/monsters/congalala/" target="_blank">Congalala</a>';};
	if (text == '晶岩龙') {out = '<a href="/monsters/crystal-basarios/" target="_blank">Crystal Basarios</a>';};
	if (text == '大名盾蟹') {out = '<a href="/monsters/daimyo-hermitaur/" target="_blank">Daimyo Hermitaur</a>';};
	if (text == '角龙') {out = '<a href="/monsters/diablos/" target="_blank">Diablos</a>';};
	if (text == '祸星龙') {out = '<a href="/monsters/doom-estrellian/" target="_blank">Doom Estrellian</a>';};
	if (text == '骇狩蛛') {out = '<a href="/monsters/dread-baelidae/" target="_blank">Dread Baelidae</a>';};
	if (text == '星龙') {out = '<a href="/monsters/estrellian/" target="_blank">Estrellian</a>';};
	if (text == '黄速龙王') {out = '<a href="/monsters/gendrome/" target="_blank">Gendrome</a>';};
	if (text == '战鬼河狸兽') {out = '<a href="/monsters/ghost-caeserber/" target="_blank">Ghost Caeserber</a>';};
	if (text == '白速龙王') {out = '<a href="/monsters/giadrome/" target="_blank">Giadrome</a>';};
	if (text == '金毛兽王') {out = '<a href="/monsters/gold-congalala/" target="_blank">Gold Congalala</a>';};
	if (text == '金眠鸟') {out = '<a href="/monsters/gold-hypnocatrice/" target="_blank">Gold Hypnocatrice</a>';};
	if (text == '红莲砦蟹') {out = '<a href="/monsters/guren-shen-gaoren/" target="_blank">Guren Shen Gaoren</a>';};
	if (text == '毒怪鸟') {out = '<a href="/monsters/gypceros/" target="_blank">Gypceros</a>';};
	if (text == '眠鸟') {out = '<a href="/monsters/hypnocatrice/" target="_blank">Hypnocatrice</a>';};
	if (text == '冰雷鸟') {out = '<a href="/monsters/ice-chramine/" target="_blank">Ice Chramine</a>';};
	if (text == '红速龙王') {out = '<a href="/monsters/iodrome/" target="_blank">Iodrome</a>';};
	if (text == '电龙') {out = '<a href="/monsters/khezu/" target="_blank">Khezu</a>';};
	if (text == '钢龙') {out = '<a href="/monsters/kushala-daora/" target="_blank">Kushala Daora</a>';};
	if (text == '电甲虫') {out = '<a href="/monsters/lightenna/" target="_blank">Lightenna</a>';};
	if (text == '荒厄龙') {out = '<a href="/monsters/merphistophelin/" target="_blank">Merphistophelin</a>';};
	if (text == '一角龙') {out = '<a href="/monsters/monoblos/" target="_blank">Monoblos</a>';};
	if (text == '独耳黑狼鸟') {out = '<a href="/monsters/one-eared-yian-garuga/" target="_blank">One-Eared Yian Garuga</a>';};
	if (text == '樱火龙') {out = '<a href="/monsters/pink-rathian/" target="_blank">Pink Rathian</a>';};
	if (text == '水龙') {out = '<a href="/monsters/plesioth/" target="_blank">Plesioth</a>';};
	if (text == '紫毒鸟') {out = '<a href="/monsters/purple-gypceros/" target="_blank">Purple Gypceros</a>';};
	if (text == '雄火龙') {out = '<a href="/monsters/rathalos/" target="_blank">Rathalos</a>';};
	if (text == '雌火龙') {out = '<a href="/monsters/rathian/" target="_blank">Rathian</a>';};
	if (text == '红电龙') {out = '<a href="/monsters/red-khezu/" target="_blank">Red Khezu</a>';};
	if (text == '砂岩龙') {out = '<a href="/monsters/sandstone-basarios/" target="_blank">Sandstone Basarios</a>';};
	if (text == '断刃一角龙') {out = '<a href="/monsters/shattered-monoblos/" target="_blank">Shattered Monoblos</a>';};
	if (text == '砦蟹') {out = '<a href="/monsters/shen-gaoren/" target="_blank">Shen Gaoren</a>';};
	if (text == '将军镰蟹') {out = '<a href="/monsters/shogun-ceanataur/" target="_blank">Shogun Ceanataur</a>';};
	if (text == '银眠鸟') {out = '<a href="/monsters/silver-hypnocatrice/" target="_blank">Silver Hypnocatrice</a>';};
	if (text == '剑极狼') {out = '<a href="/monsters/slicemargl/" target="_blank">Slicemargl</a>';};
	if (text == '剑豪镰蟹') {out = '<a href="/monsters/swordmaster-shogun-ceanataur/" target="_blank">Swordmaster Shogun Ceanataur</a>';};
	if (text == '吞渊龙') {out = '<a href="/monsters/tartaronis/" target="_blank">Tartaronis</a>';};
	if (text == '铠岩砦蟹') {out = '<a href="/monsters/tepekki-shen-gaoren/" target="_blank">Tepekki Shen Gaoren</a>';};
	if (text == '轰龙') {out = '<a href="/monsters/tigrex/" target="_blank">Tigrex</a>';};
	if (text == '蓝速龙王') {out = '<a href="/monsters/velocidrome/" target="_blank">Velocidrome</a>';};
	if (text == '沙狸兽') {out = '<a href="/monsters/yellow-caeserber/" target="_blank">Yellow Caeserber</a>';};
	if (text == '黑狼鸟') {out = '<a href="/monsters/yian-garuga/" target="_blank">Yian Garuga</a>';};
	if (text == '大怪鸟') {out = '<a href="/monsters/yian-kut-ku/" target="_blank">Yian Kut-Ku</a>';};
	if (text == '红莲砦蟹，铠岩砦蟹') {out = '<a href="/monsters/guren-shen-gaoren/" target="_blank">Guren Shen Gaoren</a>, <a href="/monsters/tepekki-shen-gaoren/" target="_blank">Tepekki Shen Gaoren</a>';};
	if (text == '镰蟹') {out = '<a href="/monsters/shogun-ceanataur/" target="_blank">Ceanataur</a>';};
	if (text == '盾蟹') {out = '<a href="/monsters/daimyo-hermitaur/" target="_blank">Hermitaur</a>';};
	if (text == '雄火龙，苍火龙') {out = '<a href="/monsters/rathalos/" target="_blank">Rathalos</a>, <a href="/monsters/azure-rathalos/" target="_blank">Azure Rathalos</a>';};

	//Monster Names No Links
	if (text == 'nl灰晶蝎') {out = 'Akura Jebia';};
	if (text == 'nl尾晶蝎') {out = 'Akura Vashimu';};
	if (text == 'nl苍火龙') {out = 'Azure Rathalos';};
	if (text == 'nl鬼狩蛛') {out = 'Baelidae';};
	if (text == 'nl岩龙') {out = 'Basarios';};
	if (text == 'nl铠龙') {out = 'Basarios?';};
	if (text == 'nl雪狮子王') {out = 'Blangonga';};
	if (text == 'nl青怪鸟') {out = 'Blue Yian Kut-Ku';};
	if (text == 'nl大野猪王') {out = 'Bulldrome';};
	if (text == 'nl河狸兽') {out = 'Caeserber';};
	if (text == 'nl沙龙王') {out = 'Cephadrome';};
	if (text == 'nl沙雷鸟') {out = 'Chramine';};
	if (text == 'nl烈焰女王') {out = 'Conflagration Rathian';};
	if (text == 'nl桃毛兽王') {out = 'Congalala';};
	if (text == 'nl晶岩龙') {out = 'Crystal Basarios';};
	if (text == 'nl大名盾蟹') {out = 'Daimyo Hermitaur';};
	if (text == 'nl角龙') {out = 'Diablos';};
	if (text == 'nl祸星龙') {out = 'Doom Estrellian';};
	if (text == 'nl骇狩蛛') {out = 'Dread Baelidae';};
	if (text == 'nl星龙') {out = 'Estrellian';};
	if (text == 'nl黄速龙王') {out = 'Gendrome';};
	if (text == 'nl战鬼河狸兽') {out = 'Ghost Caeserber';};
	if (text == 'nl白速龙王') {out = 'Giadrome';};
	if (text == 'nl金毛兽王') {out = 'Gold Congalala';};
	if (text == 'nl金眠鸟') {out = 'Gold Hypnocatrice';};
	if (text == 'nl红莲砦蟹') {out = 'Guren Shen Gaoren';};
	if (text == 'nl毒怪鸟') {out = 'Gypceros';};
	if (text == 'nl眠鸟') {out = 'Hypnocatrice';};
	if (text == 'nl冰雷鸟') {out = 'Ice Chramine';};
	if (text == 'nl红速龙王') {out = 'Iodrome';};
	if (text == 'nl电龙') {out = 'Khezu';};
	if (text == 'nl钢龙') {out = 'Kushala Daora';};
	if (text == 'nl电甲虫') {out = 'Lightenna';};
	if (text == 'nl荒厄龙') {out = 'Merphistophelin';};
	if (text == 'nl一角龙') {out = 'Monoblos';};
	if (text == 'nl独耳黑狼鸟') {out = 'One-Eared Yian Garuga';};
	if (text == 'nl樱火龙') {out = 'Pink Rathian';};
	if (text == 'nl水龙') {out = 'Plesioth';};
	if (text == 'nl紫毒鸟') {out = 'Purple Gypceros';};
	if (text == 'nl雄火龙') {out = 'Rathalos';};
	if (text == 'nl雌火龙') {out = 'Rathian';};
	if (text == 'nl红电龙') {out = 'Red Khezu';};
	if (text == 'nl砂岩龙') {out = 'Sandstone Basarios';};
	if (text == 'nl断刃一角龙') {out = 'Shattered Monoblos';};
	if (text == 'nl砦蟹') {out = 'Shen Gaoren';};
	if (text == 'nl将军镰蟹') {out = 'Shogun Ceanataur';};
	if (text == 'nl银眠鸟') {out = 'Silver Hypnocatrice';};
	if (text == 'nl剑极狼') {out = 'Slicemargl';};
	if (text == 'nl剑豪镰蟹') {out = 'Swordmaster Shogun Ceanataur';};
	if (text == 'nl吞渊龙') {out = 'Tartaronis';};
	if (text == 'nl铠岩砦蟹') {out = 'Tepekki Shen Gaoren';};
	if (text == 'nl轰龙') {out = 'Tigrex';};
	if (text == 'nl蓝速龙王') {out = 'Velocidrome';};
	if (text == 'nl沙狸兽') {out = 'Yellow Caeserber';};
	if (text == 'nl黑狼鸟') {out = 'Yian Garuga';};
	if (text == 'nl大怪鸟') {out = 'Yian Kut-Ku';};
	if (text == 'nl红莲砦蟹，铠岩砦蟹') {out = 'Tepekki Shen Gaoren';};
	if (text == 'nl镰蟹') {out = 'Ceanataur';};
	if (text == 'nl盾蟹') {out = 'Hermitaur';};
	if (text == 'nl雄火龙，苍火龙') {out = 'Azure Rathalos';};
//Body Parts
	if (text == '头部') {out = 'Head';};
	if (text == '腹部') {out = 'Abdomen';};
	if (text == '左右手（钳）') {out = 'Left and Right Hands (Pincers)';};
	if (text == '壳') {out = 'Shell';};
	if (text == '背部') {out = 'Back';};
	if (text == '躯干（本体/胴体）') {out = 'Torso (Body/Carcass)';};
	if (text == '面部') {out = 'Face';};
	if (text == '左右翼') {out = 'Wings';};
	if (text == '尾部（尻尾）') {out = 'Tail (Rump)';};
	if (text == '右手（钳）') {out = 'Right Hand (Pincer)';};
	if (text == '左,右手（钳）') {out = 'Left and Right Hand (Pincers)';};
//Places
	if (text == '大型怪物狩猎') {out = 'Large Monster Hunting';};
	if (text == '大型怪物狩猎挑战难度、王立委托、王立精英委托') {out = 'Large Monster Hunting Difficult Challenge, Wang Li Commissioned, Wang Li Elite Commissioned';};
	if (text == '王立委托、王立精英、极限') {out = 'Wang Li Commissioned, Wang Li Elite, Limit Mode';};
	if (text == '王立委托、王立精英委托') {out = 'Wang Li Commissioned, Wang Li Elite Commissioned';};
	if (text == '活动') {out = 'Raid';};
	if (text == '王立精英委托') {out = 'Wang Li Elite Commissioned';};
	if (text == '王立委托') {out = 'Wang Li Commissioned';};
	if (text == '大湖围猎祭') {out = 'Great Lakes Hunting Festival';};
//Armor Skills
	if (text == '回复速度+1、观察眼、大胃王') {out = 'Rec Speed +1、Capture Guru、Gourmand';};
	if (text == '探知、速食') {out = 'Detect、Speed Eating';};
	if (text == '气绝减半、草药达人') {out = 'Halve Stun、Herbal Daren';};
	if (text == '砥石使用高速化、防御力提升（小）') {out = 'Speed Sharpening、Defense Up (S)';};
	if (text == '通常弹&连射矢强化、防御力提升（小）') {out = 'Normal/Rapid Up、Defense Up (S)';};
	if (text == '攻击力提升（小）、火属性耐性强化+1') {out = 'Attack Up (S)、Fire Res +1';};
	if (text == '麻痹免疫、状态异常攻击+1') {out = 'Negate Paralysis、Status Atk +1';};
	if (text == 'KO术、砥石使用高速化、挑衅') {out = 'KO King、Speed Sharpening、Taunt';};
	if (text == 'KO术、散弹/矢强化、挑衅') {out = 'KO King、Pellet/Spread Up、Taunt';};	
	if (text == '耐泥雪、陷阱师') {out = 'Mud/Snow、Trap Master';};
	if (text == '毒减半、雷属性耐性强化+1') {out = 'Halve Poison、Thunder Atk +1';};
	if (text == '抗菌、速食、饥饿感增加') {out = 'Anti-bacterial、Speed Eating、Raise Hunger';};
	if (text == '风压（小）无效、无伤') {out = 'Windproof (Lo)、Peak Performance';};
	if (text == '耐暑、暴击') {out = 'Heat Cancel、Violent Strike';};
	if (text == '防御力提升（小）、风压（小）无效、雷属性攻击弱化') {out = 'Defense Up (S)、Windproof (Lo)、Thunder Atk Down';};
	if (text == '见切+1、火属性攻击强化+1、体力弱化-1') {out = 'Critical Eye +1、Fire Atk +1、Health -1';};
	if (text == '回复速度+3、气绝倍化') {out = 'Rec Speed +3、Double Stun';};
	if (text == '睡眠免疫、防御等级+1、麻痹倍化') {out = 'Negate Sleep、Guard +1、Double Paralysis';};
	if (text == '睡眠免疫、上弹速度强化+1、麻痹倍化') {out = 'Negate Sleep、Reload Spd +1、Double Paralysis';};
	if (text == '睡眠免疫、吸引、耐力回复迟缓-1') {out = 'Negate Sleep、Attract、Stam Recov -1';};
	if (text == '火事场力+1、破坏王、防御力降低（小）') {out = 'Adrenaline +1、Partbreaker、Defense Down (S)';};
	if (text == '毒减半、麻痹免疫、睡眠倍化') {out = 'Halve Poison、Negate Paralysis、Double Sleep';};
	if (text == '气绝免疫、风压（小）无效、恶灵加持') {out = 'Negate Stun、Windproof (Lo)、Evil Blessing';};
	if (text == '业物、砥石使用高速化、体力弱化-2') {out = 'Sharp、Speed Sharpening、Health -2';};	
	if (text == '贯通弹/矢强化、上弹速度强化+1、体力弱化-2') {out = 'Pierce/Pierce Up、Reload Spd +1、Health -2';};
	if (text == '耐泥雪、耐寒、冰属性攻击强化+1、气绝倍化') {out = 'Mud/Snow、Cold Res、Ice Itk +1、Double Stun';};
	if (text == '化蝶、隐秘、见切-1') {out = 'Butterfly Form、Sneak、Critical Eye -1';};
	if (text == '通常弹&连射矢强化 、防御力提升（小）') {out = 'Normal/Rapid Up 、Defense Up (S)';};
	if (text == '体力强化+1、攻击力提升（小）') {out = 'Health +1、Attack Up (S)';};
	if (text == 'KO术、上弹速度强化+1、挑衅') {out = 'KO King、Reload Spd +1、Taunt';};
	if (text == '耐泥雪、陷阱师、回复速度+1') {out = '';};
	if (text == 'Mud/Snow、Trap Master、Rec Speed +1') {out = '';};
	if (text == '毒无效、雷属性耐性强化+1、饥饿感增加') {out = 'Negate Poison、Thunder Atk +1、Raise Hunger';};
	if (text == '抗菌、速食、看破+1、饥饿感增加') {out = 'Anti-bacterial、Speed Eating、See Through +1、Raise Hunger';};
	if (text == '风压（大）无效、无伤、耐力回复迟缓-1') {out = 'Windproof (Hi)、Peak Performance、Stam Recov -1';};
	if (text == '毒减半、体力强化+2、气绝倍化') {out = 'Halve Poison、Health +2、Double Stun';};
	if (text == '见切+1、状态异常攻击+1、火属性攻击强化+1、体力弱化-1') {out = 'Critical Eye +1、Status Atk +1、Fire Atk +1、Health -1';};
	if (text == '回复速度+3、雷属性攻击强化+1、气绝倍化') {out = 'Rec Speed +3、Thunder Atk +1、Double Stun';};
	if (text == '睡眠免疫、体术+1、吸引、耐力回复迟缓-1') {out = 'Negate Sleep、Constitution +1、Attract、Stam Recov -1';};
	if (text == '火事场力+1、破坏王、抗菌、防御力降低（小）') {out = 'Adrenaline +1、Partbreaker、Anti-bacterial、Defense Down (S)';};
	if (text == '毒无效、麻痹免疫、状态异常攻击+1、睡眠倍化') {out = 'Negate Poison、Negate Paralysis、Status Atk +1、Double Sleep';};
	if (text == '气绝免疫、风压（小）无效、耐力急速回复+1、恶灵加持') {out = 'Negate Stun、Windproof (Lo)、Stam Recov +1、Evil Blessing';};
	if (text == '冰属性攻击强化+1、耐寒、耐震、气绝倍化') {out = 'Ice Itk +1、Cold Res、Tremor Res、Double Stun';};
	if (text == '耐泥雪、探知、冰属性耐性强化+1、火属性耐性弱化') {out = 'Mud/Snow、Detect、Ice Res +1、Fire Res Down';};
	if (text == '砥石使用高速化、冰属性攻击强化+1、心眼、毒倍化') {out = "Speed Sharpening、Ice Itk +1、Mind's Eye、Double Poison";};
	if (text == '睡眠免疫、吸引、状态异常攻击+1、火属性耐性弱化') {out = 'Negate Sleep、Attract、Status Atk +1、Fire Res Down';};
	if (text == '不屈、根性、回复速度+1、耐力回复迟缓-1') {out = 'Fortify、Guts、Rec Speed +1、Stam Recov -1';};
	if (text == '见切+2、暴击、气绝倍化') {out = 'Critical Eye +2、Violent Strike、Double Stun';};
	if (text == '防御强化、速食、耐泥雪、攻击力降低（小）') {out = 'Guard Boost、Speed Eating、Mud/Snow、Attack Down (S)';};
	if (text == '散弹/矢强化、速食、耐泥雪、攻击力降低（小）') {out = 'Pellet/Spread Up、Speed Eating、Mud/Snow、Attack Down (S)';};
	if (text == '防御等级+1、攻击力提升（小）、状态异常攻击-1') {out = 'Guard +1、Attack Up (S)、Status Atk Down';};
	if (text == '上弹速度强化+1、攻击力提升（小）、状态异常攻击-1') {out = 'Reload Spd +1、Attack Up (S)、Status Atk Down';};
	if (text == '业物、见切+1、防御力降低（小）') {out = 'Sharp、Critical Eye +1、Defense Down (S)';};
	if (text == '贯通弹/矢强化、见切+1、防御力降低（小）') {out = 'Pierce/Pierce Up、Critical Eye +1、Defense Down (S)';};
	if (text == '广域化+1、耐力急速回复+1、回复速度-1') {out = 'Wide-Range +1、Stam Recov +1、Rec Speed -1';};
	if (text == '挑战者、火事场力+1、恶灵加持') {out = 'Challenger、Adrenaline +1、Evil Blessing';};
	if (text == '集中、破坏王、体力弱化-2') {out = 'Concentrate、Partbreaker、Health -2';};
	if (text == '毒减半、体力强化+2、探知') {out = 'Halve Poison、Health +2、Detect';};
	if (text == '耳栓、状态异常攻击+1、砥石使用高速化、回复速度-1') {out = 'Earplugs、Status Atk +1、Speed Sharpening、Rec Speed -1';};
	if (text == '耳栓、状态异常攻击+1、反动减轻+1、回复速度-1') {out = 'Earplugs、Status Atk +1、Recoil Down +1、Rec Speed -1';};
	if (text == '体术+1、弱点特效、挑衅') {out = 'Constitution +1、Weakness Exploit、Taunt';};
	if (text == '心眼、火属性攻击强化+2、防御力降低（小）') {out = "Mind's Eye、Fire Atk +2、Defense Down (S)";};
	if (text == '刺杀术+1、火属性攻击强化+2、防御力降低（小）') {out = 'Assassin Tech +1、Fire Atk +2、Defense Down (S)';};
	if (text == '火事场力+1、绊术、速食、回复速度-1') {out = 'Adrenaline +1、Tripping Power、Speed Eating、Rec Speed -1';};
	if (text == '耐震、根性、水属性攻击强化+1、慢食') {out = 'Tremor Res、Guts、Water Atk +1、Slow Eater';};
	if (text == '攻击力提升（大）、火属性攻击强化+1、体力弱化-1') {out = 'Attack Up (L)、Fire Atk +1、Health -1';};
	if (text == '心眼、回复速度+1、火属性攻击强化+1、钝刀') {out = "Mind's Eye、Rec Speed +1、Fire Atk +1、Blunt Edge";};
	if (text == '弱点特效、回复速度+1、火属性攻击强化+1、上弹速度强化-1') {out = 'Weakness Exploit、Rec Speed +1、Fire Atk +1、Reload Spd -1';};
	if (text == '耳栓、速食、防御力提升（小）、砥石使用低速化') {out = 'Earplugs、Speed Eating、Defense Up (S)、Slow Sharpening';};
	if (text == '耳栓、速食、防御力提升（小）、反动增大') {out = 'Earplugs、Speed Eating、Defense Up (S)、Recoil Up';};
	if (text == '回复速度+2、业物、挑战者+2、刺伤无效、降低耐力回复速度-1') {out = 'Rec Speed +2、Sharp、Challenger+2、Negate Thorns、Stam Recov -1';};
	if (text == '回复速度+2、业物、挑战者+2、刺伤无效、降低耐力回复速度-6') {out = 'Rec Speed +2、Sharp、Challenger+2、Negate Thorns、Stam Recov -1';};
	if (text == '不屈，特殊攻击+2，广域化+1') {out = 'Fortify，Status Atk +2，Wide-Range +1';};
	if (text == '拔刀术，耐震，耐力回复+1，砥石使用低速化') {out = 'Critical Draw，Tremor Res，Stam Recov +1，Slow Sharpening';};
	if (text == '上弹速度强化+1，贯通弹/矢强化，耐力回复+1，状态异常攻击-1') {out = 'Reload Spd +1，Pierce/Pierce Up，Stam Recov +1，Status Atk Down';};
	if (text == '雷属性攻击强化+1，回避性能，精灵的守护，砥石使用低速化') {out = 'Thunder Atk +1，Evasion，Holy Blessing，Slow Sharpening';};
	if (text == '雷属性攻击强化+1，回避性能，精灵的守护，上弹速度强化-1') {out = 'Thunder Atk +1，Evasion，Holy Blessing，Reload Spd -1';};
	if (text == '见切+2，耳栓，业物，体力弱化-1') {out = 'Critical Eye +2，Earplugs，Sharp，Health -1';};
	if (text == '见切+2，耳栓，通常弹&连射矢强化，体力弱化-1') {out = 'Critical Eye +2，Earplugs，Normal/Rapid Up，Health -1';};
	if (text == '耳栓，甲壳杀手，回复速度+1，体力弱化-1') {out = 'Earplugs，Crustaceans Killer，Rec Speed +1，Health -1';};
	if (text == '回避性能+2，集中，毒倍化') {out = 'Evasion+2，Concentrate，Double Poison';};
	if (text == 'KO术，集中，看破+1，耐力回复-1') {out = 'Knockout King，Concentrate，See Through +1，Stam Recov -1';};
	if (text == '体术+2，睡眠免疫，鸟龙杀手，防御力降低（小）') {out = 'Constitution +2，Negate Sleep，Bird Dragons Killer，Defense Down (S)';};
	if (text == '火事场力+2，风压（大）无效，火属性攻击强化+1') {out = 'Adrenaline +2，Windproof (Hi)，Fire Atk +1';};
	if (text == '破坏王，耐震，弱点特效，耐力回复-1') {out = 'Partbreaker，Tremor Res，Weakness Exploit，Stam Recov -1';};

//	if (text == '') {out = '';};
//	if (text == '') {out = '';};
//	if (text == '') {out = '';};
//	if (text == '') {out = '';};
//	if (text == '') {out = '';};
//	if (text == '') {out = '';};
//	if (text == '') {out = '';};
//	if (text == '') {out = '';};
//	if (text == '') {out = '';};
//	if (text == '') {out = '';};
//	if (text == '') {out = '';};

	return out;
}