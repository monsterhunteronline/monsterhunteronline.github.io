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
	if (text == '通常弹Lv3') {out = 'Normal S Lv3';};
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
//Skills
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
	if (text == '甲壳猎人') {out = 'Carapacean Hunter';};
	if (text == '鸟龙猎人') {out = 'Bird Wyvern Hunter';};
	if (text == '飞龙猎人') {out = 'Flying Wyvern Hunter';};
	if (text == '眠弹增加') {out = 'Sleep C+';};
	if (text == '耐力消耗下降') {out = 'Endurance Consumption Down';};
	if (text == '猎人生活') {out = 'Hunter Life';};
	if (text == '水耐性') {out = 'Water Res';};
	if (text == '龙耐性') {out = 'Dragon Res';};
	if (text == '恢复量') {out = 'Recovery Amount';};
	if (text == '速射') {out = 'Rapid Fire';};
	if (text == '笛') {out = 'Flute';};
	if (text == '炮术') {out = 'Artillery';};
	if (text == '古龙猎人') {out = 'Elder Dragon Hunter';};
	if (text == '鱼龙猎人') {out = 'Piscine Wyvern Hunter';};
	if (text == '牙兽猎人') {out = 'Fanged Beast Hunter';};
	if (text == '贯通弹增加') {out = 'Pierce S Carry';};
	if (text == '散弹增加') {out = 'Pellet S Carry';};
	if (text == '榴弹增加') {out = 'Crag S Carry';};
	if (text == '麻痹弹增加') {out = 'Para C+';};
	if (text == '毒弹增加') {out = 'Poison C+';};
	if (text == '孤注一掷') {out = 'Desperation';};
	if (text == '采集') {out = 'Collection';};
	if (text == '通常弹增加') {out = 'Normal S Carry';};
	if (text == '锁气绝') {out = 'Stun Lock';};
	if (text == '快速防御') {out = 'Auto-Guard';};
	if (text == '烤肉达人') {out = 'Barbecue Daren';};
//Skill phase
	if (text == '刺杀术+1') {out = 'Assassin Tech +1';};
	if (text == '刺杀术+2') {out = 'Assassin Tech +2';};
	if (text == '耐菌') {out = 'Bacteria Cancel';};
	if (text == '攻击力提升（小）') {out = 'Attack Up (S)';};
	if (text == '攻击力提升（中）') {out = 'Attack Up (M)';};
	if (text == '攻击力提升（大）') {out = 'Attack Up (L)';};
	if (text == '攻击力提升（超）') {out = 'Attack Up (XL)';};
	if (text == '攻击力提升（极）') {out = 'Attack Up (XXL)';};
	if (text == '攻击力降低（小）') {out = 'Attack Down (S)';};
	if (text == '攻击力降低（中）') {out = 'Attack Down (M)';};
	if (text == '攻击力降低（大）') {out = 'Attack Down (L)';};
	if (text == '攻击力降低（超）') {out = 'Attack Down (XL)';};
	if (text == '刺伤无效') {out = 'Negate Bleeding';};
	if (text == '化蝶') {out = 'Butterfly Form';};
	if (text == '体术+1') {out = 'Constitution +1';};
	if (text == '体术+2') {out = 'Constitution +2';};
	if (text == '体术+3') {out = 'Constitution +3';};
	if (text == '体术-1') {out = 'Constitution -1';};
	if (text == '体术-2') {out = 'Constitution -2';};
	if (text == '斩味等级+1') {out = 'Sharpness +1';};
	if (text == '拔刀术') {out = 'Critical Draw';};
	if (text == '拔刀术极') {out = 'Critical Draw Max';};
	if (text == '防御力提升（小）') {out = 'Defense Up (S)';};
	if (text == '防御力提升（中）') {out = 'Defense Up (M)';};
	if (text == '防御力提升（大）') {out = 'Defense Up (L)';};
	if (text == '防御力提升（超）') {out = 'Defense Up (XL)';};
	if (text == '防御力提升（极）') {out = 'Defense Up (XXL)';};
	if (text == '防御力降低（小）') {out = 'Defense Down (S)';};
	if (text == '防御力降低（中）') {out = 'Defense Down (M)';};
	if (text == '防御力降低（大）') {out = 'Defense Down (L)';};
	if (text == '防御力降低（超）') {out = 'Defense Down (XL)';};
	if (text == '破坏王') {out = 'Partbreaker';};
	if (text == '破坏神') {out = 'Destruction God';};
	if (text == '龙属性攻击强化+1') {out = 'Dragon Atk +1';};
	if (text == '龙属性攻击强化+2') {out = 'Dragon Atk +2';};
	if (text == '龙属性攻击强化+3') {out = 'Dragon Atk +3';};
	if (text == '龙属性攻击弱化') {out = 'Dragon Atk Down';};
	if (text == '速食') {out = 'Speed Eating';};
	if (text == '慢食') {out = 'Slow Eater';};
	if (text == '回避距离+1') {out = 'Evade Dist +1';};
	if (text == '回避距离+2') {out = 'Evade Dist +2';};
	if (text == '回避性能+1') {out = 'Evasion +1';};
	if (text == '回避性能+2') {out = 'Evasion +2';};
	if (text == '回避性能+3') {out = 'Evasion +3';};
	if (text == '见切+1') {out = 'Critical Eye +1';};
	if (text == '见切+2') {out = 'Critical Eye +2';};
	if (text == '见切+3') {out = 'Critical Eye +3';};
	if (text == '见切+4') {out = 'Critical Eye +4';};
	if (text == '见切+5') {out = 'Critical Eye +5';};
	if (text == '见切-1') {out = 'Critical Eye -1';};
	if (text == '见切-2') {out = 'Critical Eye -2';};
	if (text == '见切-3') {out = 'Critical Eye -3';};
	if (text == '见切-4') {out = 'Critical Eye -4';};
	if (text == '集中') {out = 'Concentrate';};
	if (text == '专注') {out = 'Focus';};
	if (text == '凝神') {out = 'Attentive';};
	if (text == '杂念') {out = 'Distraction';};
	if (text == '心眼') {out = "Mind's Eye";};
	if (text == '火属性攻击强化+1') {out = 'Fire Atk +1';};
	if (text == '火属性攻击强化+2') {out = 'Fire Atk +2';};
	if (text == '火属性攻击强化+3') {out = 'Fire Atk +3';};
	if (text == '火属性攻击弱化') {out = 'Fire Atk Down';};
	if (text == '火属性耐性强化+1') {out = 'Fire Res +1';};
	if (text == '火属性耐性强化+2') {out = 'Fire Res +2';};
	if (text == '火属性耐性强化+3') {out = 'Fire Res +3';};
	if (text == '火属性耐性弱化') {out = 'Fire Res Down';};
	if (text == '大胃王') {out = 'Gourmand';};
	if (text == '防御性能+1') {out = 'Guard +1';};
	if (text == '防御性能+2') {out = 'Guard +2';};
	if (text == '防御性能+3') {out = 'Guard +3';};
	if (text == '防御强化') {out = 'Guard Boost';};
	if (text == '体力强化+1') {out = 'Health +1';};
	if (text == '体力强化+2') {out = 'Health +2';};
	if (text == '体力强化+3') {out = 'Health +3';};
	if (text == '体力强化+4') {out = 'Health +4';};
	if (text == '体力强化+5') {out = 'Health +5';};
	if (text == '体力弱化-1') {out = 'Health -1';};
	if (text == '体力弱化-2') {out = 'Health -2';};
	if (text == '体力弱化-3') {out = 'Health -3';};
	if (text == '体力弱化-4') {out = 'Health -4';};
	if (text == '耳栓') {out = 'Earplugs';};
	if (text == '高级耳栓') {out = 'HG Earplugs';};
	if (text == '耐暑') {out = 'Heat Cancel';};
	if (text == '草药达人') {out = 'Herbal Daren';};
	if (text == '吸引') {out = 'Attract';};
	if (text == '饥饿感减半') {out = 'Halve Hunger';};
	if (text == '饱腹') {out = 'Negate Hunger';};
	if (text == '饥饿感增加') {out = 'Raise Hunger';};
	if (text == '冰属性攻击强化+1') {out = 'Ice Itk +1';};
	if (text == '冰属性攻击强化+2') {out = 'Ice Atk +2';};
	if (text == '冰属性攻击强化+3') {out = 'Ice Atk +3';};
	if (text == '冰属性攻击弱化') {out = 'Ice Atk Down';};
	if (text == '冰属性耐性强化+1') {out = 'Ice Res +1';};
	if (text == '冰属性耐性强化+2') {out = 'Ice Res +2';};
	if (text == '冰属性耐性强化+3') {out = 'Ice Res +3';};
	if (text == '冰属性耐性弱化') {out = 'Ice Res Down';};
	if (text == '暴击') {out = 'Violent Strike';};
	if (text == '装填术') {out = 'Load Up';};
	if (text == '耐泥雪') {out = 'Negate Mud/Snow';};
	if (text == '通常弹&连射矢强化') {out = 'Normal/Rapid Up';};
	if (text == '麻痹免疫') {out = 'Negate Paralysis';};
	if (text == '麻痹倍化') {out = 'Double Paralysis';};
	if (text == '散弹/矢强化') {out = 'Pellet/Spread Up';};
	if (text == '贯通弹/矢强化') {out = 'Pierce/Pierce Up';};
	if (text == '毒减半') {out = 'Halve Poison';};
	if (text == '毒无效') {out = 'Negate Poison';};
	if (text == '毒倍化') {out = 'Double Poison';};
	if (text == '火事场力+1') {out = 'Adrenaline +1';};
	if (text == '火事场力+2') {out = 'Adrenaline +2';};
	if (text == '火事场力+3') {out = 'Adrenaline +3';};
	if (text == '不安') {out = 'Worrywart';};
	if (text == '精灵的守护') {out = 'Holy Blessing';};
	if (text == '精灵王的加护') {out = 'Divine Blessing';};
	if (text == '恶灵的加护') {out = 'Evil Blessing';};
	if (text == '恶灵王的加护') {out = 'Demonic Blessing';};
	if (text == '探知') {out = 'Detect';};
	if (text == '自动标记') {out = 'Autotracker';};
	if (text == '回复速度+1') {out = 'Rec Speed +1';};
	if (text == '回复速度+2') {out = 'Rec Speed +2';};
	if (text == '回复速度+3') {out = 'Rec Speed +3';};
	if (text == '回复速度-1') {out = 'Rec Speed -1';};
	if (text == '回复速度-2') {out = 'Rec Speed -2';};
	if (text == '回复速度-3') {out = 'Rec Speed -3';};
	if (text == '反动减轻+1') {out = 'Recoil Down +1';};
	if (text == '反动减轻+2') {out = 'Recoil Down +2';};
	if (text == '反动增大') {out = 'Recoil Up';};
	if (text == '上弹速度强化+1') {out = 'Reload Spd +1';};
	if (text == '上弹速度强化+2') {out = 'Reload Spd +2';};
	if (text == '上弹速度强化+3') {out = 'Reload Spd +3';};
	if (text == '上弹速度强化-1') {out = 'Reload Spd -1';};
	if (text == '上弹速度强化-2') {out = 'Reload Spd -2';};
	if (text == '看破+1') {out = 'See Through +1';};
	if (text == '看破+2') {out = 'See Through +2';};
	if (text == '隐秘') {out = 'Sneak';};
	if (text == '挑衅') {out = 'Taunt';};
	if (text == '砥石使用高速化') {out = 'Speed Sharpening';};
	if (text == '砥石使用极速化') {out = 'High Speed Sharpening';};
	if (text == '砥石使用低速化') {out = 'Slow Sharpening';};
	if (text == '业物') {out = 'Sharp';};
	if (text == '无锋') {out = 'Razor Sharp';};
	if (text == '钝刀') {out = 'Blunt Edge';};
	if (text == '睡眠免疫') {out = 'Negate Sleep';};
	if (text == '睡眠倍化') {out = 'Double Sleep';};
	if (text == '陷阱师') {out = 'Trap Master';};
	if (text == '挑战者+1') {out = 'Challenger +1';};
	if (text == '挑战者+2') {out = 'Challenger +2';};
	if (text == '耐力回复+1') {out = 'Stam Recov +1';};
	if (text == '耐力回复+2') {out = 'Stam Recov +2';};
	if (text == '耐力回复+3') {out = 'Stam Recov +3';};
	if (text == '耐力回复-1') {out = 'Stam Recov -1';};
	if (text == '耐力回复-2') {out = 'Stam Recov -2';};
	if (text == '状态异常攻击+1') {out = 'Status Atk +1';};
	if (text == '状态异常攻击+2') {out = 'Status Atk +2';};
	if (text == '状态异常攻击+3') {out = 'Status Atk +3';};
	if (text == '状态异常攻击-1') {out = 'Status Atk Down';};
	if (text == '气绝减半') {out = 'Halve Stun';};
	if (text == '气绝免疫') {out = 'Negate Stun';};
	if (text == '气绝倍化') {out = 'Double Stun';};
	if (text == '不屈') {out = 'Fortify';};
	if (text == '弱点特效') {out = 'Weakness Exploit';};
	if (text == '雷属性耐性强化+1') {out = 'Thunder Res +1';};
	if (text == '雷属性耐性强化+2') {out = 'Thunder Res +2';};
	if (text == '雷属性耐性强化+3') {out = 'Thunder Res +3';};
	if (text == '雷属性耐性弱化') {out = 'Thunder Res Down';};
	if (text == '雷属性攻击强化+1') {out = 'Thunder Atk +1';};
	if (text == '雷属性攻击强化+2') {out = 'Thunder Atk +2';};
	if (text == '雷属性攻击强化+3') {out = 'Thunder Atk +3';};
	if (text == '雷属性攻击弱化') {out = 'Thunder Atk Down';};
	if (text == '绊术') {out = 'Tripping Power';};
	if (text == '水属性攻击强化+1') {out = 'Water Atk +1';};
	if (text == '水属性攻击强化+2') {out = 'Water Atk +2';};
	if (text == '水属性攻击强化+3') {out = 'Water Atk +3';};
	if (text == '水属性攻击弱化') {out = 'Water Atk Down';};
	if (text == '广域化+1') {out = 'Wide-Range +1';};
	if (text == '广域化+2') {out = 'Wide-Range +2';};
	if (text == '广域化+3') {out = 'Wide-Range +3';};
	if (text == '风压（小）无效') {out = 'Windproof (Lo)';};
	if (text == '风压（大）无效') {out = 'Windproof (Hi)';};
	if (text == '龙风压无效') {out = 'Dragon Windproof';};
	if (text == '眠瓶/弹追加') {out = 'Use Sleep Coat';};
	if (text == '飞人+1') {out = 'Marathon Runner +1';};
	if (text == '飞人+2') {out = 'Marathon Runner +2';};
	if (text == '野外生存') {out = 'Wilderness Survival';};
	if (text == '水属性耐性强化+1') {out = 'Water Res +1';};
	if (text == '水属性耐性强化+2') {out = 'Water Res +2';};
	if (text == '水属性耐性强化+3') {out = 'Water Res +3';};
	if (text == '水属性耐性弱化') {out = 'Water Res Down';};
	if (text == '龙属性耐性强化+1') {out = 'Dragon Res +1';};
	if (text == '龙属性耐性强化+2') {out = 'Dragon Res +2';};
	if (text == '龙属性耐性强化+3') {out = 'Dragon Res +3';};
	if (text == '龙属性耐性弱化') {out = 'Dragon Res Down';};
	if (text == '吃血量增加') {out = 'Recovery Up';};
	if (text == '吃血量大幅增加') {out = 'Recovery Up Large';};
	if (text == '吃血量减少') {out = 'Recovery Down';};
	if (text == '茸食') {out = 'Alloy Stomach';};
	if (text == '速射子弹+1') {out = 'Bonus Shot +1';};
	if (text == '吹笛名人') {out = 'Horn Maestro';};
	if (text == '炮术师') {out = 'Artillery Exptert';};
	if (text == '炮术王') {out = 'Artillery God';};
	if (text == '甲壳杀手') {out = 'Carapacean Killer';};
	if (text == '鸟龙杀手') {out = 'Bird Wyvern Killer';};
	if (text == '飞龙杀手') {out = 'Flying Wyvern Killer';};
	if (text == '贯通弹LV1/2/3装填数+3') {out = 'Pierce S Lv1/2/3 +3';};
	if (text == '贯通弹LV1/2装填数+3') {out = 'Pierce S Lv1/2 +3';};
	if (text == '贯通弹LV1装填数+3') {out = 'Pierce S Lv1 +3';};
	if (text == '散弹LV1/2/3装填数+2') {out = 'Pellet S Lv1/2/3 +2';};
	if (text == '散弹LV1/2装填数+2') {out = 'Pellet S Lv1/2 +2';};
	if (text == '散弹LV1+2') {out = 'Pellet S Lv1 +2';};
	if (text == '榴弹LV1/2/3装填数+2') {out = 'Crag S Lv1/2/3 +2';};
	if (text == '榴弹LV1/2装填数+2') {out = 'Crag S Lv1/2 +2';};
	if (text == '榴弹LV1+2') {out = 'Crag S Lv1 +2';};
	if (text == '麻瓶/弹追加') {out = 'Use Para Coat';};
	if (text == '毒瓶/毒弹追加') {out = 'Use Poison Coat';};
	if (text == '顿足') {out = 'Slow Sprinter';};
	if (text == '卸甲') {out = 'Unload Armor';};
	if (text == '采取+2') {out = 'Take +2';};
	if (text == '采取+1') {out = 'Take +1';};
	if (text == '古龙杀手') {out = 'Elder Dragon Killer';};
	if (text == '鱼龙杀手') {out = 'Piscine Wyvern Killer';};
	if (text == '牙兽杀手') {out = 'Fanged Beast Killer';};
	if (text == '通常弹LV1/2/3装填数+3') {out = 'Normal S Lv1/2/3 +3';};
	if (text == '通常弹LV1/2装填数+3') {out = 'Normal S Lv1/2 +3';};
	if (text == '通常弹LV1装填数+3') {out = 'Normal S Lv1 +3';};
//Skill descriptions
	if (text == '极大提升攻击力') {out = 'Greatly increase Attack';};
	if (text == '大幅提升攻击力') {out = 'Dramatically increase Attack';};
	if (text == '显著提升攻击力') {out = 'Significantly increase Attack';};
	if (text == '中量提升攻击力') {out = 'Increase Attack';};
	if (text == '略微提升攻击力') {out = 'Slightly increase Attack';};
	if (text == '略微降低攻击力') {out = 'Slightly reduce Attack';};
	if (text == '中量降低攻击力') {out = 'Reduce Attack';};
	if (text == '显著降低攻击力') {out = 'Significantly reduce Attack';};
	if (text == '大幅降低攻击力') {out = 'Dramatically reduce Attack';};
	if (text == '极大提升防御力') {out = 'Greatly increase Defense';};
	if (text == '大幅提升防御力') {out = 'Dramatically increase Defense';};
	if (text == '显著提升防御力') {out = 'Significantly increase Defense';};
	if (text == '中量提升防御力') {out = 'Increase Defense';};
	if (text == '略微提升防御力') {out = 'Slightly increase Defense';};
	if (text == '略微降低防御力') {out = 'Slightly reduce Defense';};
	if (text == '中量降低防御力') {out = 'Reduce Defense';};
	if (text == '显著降低防御力') {out = 'Significantly reduce Defense';};
	if (text == '大幅降低防御力') {out = 'Dramatically reduce Defense';};
	if (text == '极大增加会心几率') {out = 'Greatly increase Critical Chance';};
	if (text == '大幅增加会心几率') {out = 'Dramatically increase Critical Chance';};
	if (text == '显著增加会心几率') {out = 'Significantly increase Critical Chance';};
	if (text == '中量增加会心几率') {out = 'Increase Critical Chance';};
	if (text == '略微增加会心几率') {out = 'Slightly increase Critical Chance';};
	if (text == '略微降低会心几率') {out = 'Slightly reduce Critical Chance';};
	if (text == '中量降低会心几率') {out = 'Reduce Critical Chance';};
	if (text == '显著降低会心几率') {out = 'Significantly reduce Critical Chance';};
	if (text == '食用速度加快') {out = 'Eating sped up';};
	if (text == '食用速度减慢') {out = 'Slow down the speed of eating';};
	if (text == '可以知道地图中大型怪物的濒死状态便于捕获') {out = 'Shows when monster is dying to help with monster capture';};
	if (text == '可以知道地图中大型怪物的位置') {out = 'Shows location of large monsers';};
	if (text == '在怪物身上存在染色效果时，可以知道大型怪物什么时候能被捕捉') {out = 'Shows when monster is dying (when marked with paintball) to help with monster capture';};
	if (text == '极大提升体力上限') {out = 'Greatly increase amount of Health';};
	if (text == '大幅提升体力上限') {out = 'Dramatically increase amount of Health';};
	if (text == '显著提升体力上限') {out = 'Significantly increase amount of Health';};
	if (text == '中量提升体力上限') {out = 'Increase amount of Health';};
	if (text == '略微提升体力上限') {out = 'Slightly increase amount of Health';};
	if (text == '略微降低体力上限') {out = 'Slightly reduce amount of Health';};
	if (text == '中量降低体力上限') {out = 'Reduce amount of Health';};
	if (text == '显著降低体力上限') {out = 'Significantly reduce amount of Health';};
	if (text == '大幅降低体力上限') {out = 'Dramatically reduce amount of Health';};
	if (text == '回复能力大幅增强') {out = 'Greatly increase Rec Speed';};
	if (text == '回复能力显著增强') {out = 'Significantly increase Rec Speed';};
	if (text == '回复能力略微增强') {out = 'Slightly increase Rec Speed';};
	if (text == '回复能力降低') {out = 'Reduce Rec Speed';};
	if (text == '水属性攻击伤害大幅提升') {out = 'Dramatically increase Water Attack';};
	if (text == '水属性攻击伤害显著提升') {out = 'Significantly increase Water Attack';};
	if (text == '水属性攻击伤害略微提升') {out = 'Slightly increase Water Attack';};
	if (text == '水属性攻击的伤害衰减') {out = 'Reduce Water Attack';};
	if (text == '火属性攻击伤害大幅提升') {out = 'Dramatically increase Fire Attack';};
	if (text == '火属性攻击伤害显著提升') {out = 'Significantly increase Fire Attack';};
	if (text == '火属性攻击伤害略微提升') {out = 'Slightly increase Fire Attack';};
	if (text == '火属性攻击的伤害衰减') {out = 'Reduce Fire Attack';};
	if (text == '雷属性攻击伤害大幅提升') {out = 'Dramatically increase Thunder Attack';};
	if (text == '雷属性攻击伤害显著提升') {out = 'Significantly increase Thunder Attack';};
	if (text == '雷属性攻击伤害略微提升') {out = 'Slightly increase Thunder Attack';};
	if (text == '雷属性攻击的伤害衰减') {out = 'Reduce Thunder Attack';};
	if (text == '龙属性攻击伤害大幅提升') {out = 'Dramatically increase Dragon Attack';};
	if (text == '龙属性攻击伤害显著提升') {out = 'Significantly increase Dragon Attack';};
	if (text == '龙属性攻击伤害略微提升') {out = 'Slightly increase Dragon Attack';};
	if (text == '龙属性攻击的伤害衰减') {out = 'Reduce Dragon Attack';};
	if (text == '冰属性攻击伤害大幅提升') {out = 'Dramatically increase Ice Attack';};
	if (text == '冰属性攻击伤害显著提升') {out = 'Significantly increase Ice Attack';};
	if (text == '冰属性攻击伤害略微提升') {out = 'Slightly increase Ice Attack';};
	if (text == '水属性攻击的伤害衰减') {out = 'Reduce Ice Attack';};
	if (text == '不会进入麻痹状态') {out = 'Cannot be Paralysed';};
	if (text == '麻痹状态的时间增长') {out = 'Paralysis time extended';};
	if (text == '不会进入气绝状态') {out = 'Cannot be Stunned';};
	if (text == '气绝状态的时间减半') {out = 'Stun time halved';};
	if (text == '气绝状态的时间延长') {out = 'Stun time extended';};
	if (text == '不会进入睡眠状态') {out = 'Cannot be put to Sleep';};
	if (text == '进入睡眠状态的时间延长') {out = 'Sleep time extended';};
	if (text == '不会进入中毒状态') {out = 'Cannot be Poisoned';};
	if (text == '中毒状态的时间减半') {out = 'Poison time halved';};
	if (text == '进入毒状态的时间延长') {out = 'Poison time extended';};
	if (text == '大剑、锤、弓蓄力时间缩短20%；双刀鬼人槽积攒效率+50%；太刀练气槽积攒效率+20%') {out = 'Sword, hammer, and bow charge time reduced by 20%; Dual blades Demon gauge accumulation efficiency +50%; Longsword Spirit guage accumulation efficiency +20%';};
	if (text == '大剑、锤、弓蓄力时间缩短10%；双刀鬼人槽积攒效率+30%；太刀练气槽积攒效率+10%') {out = 'Sword, hammer, and bow charge time reduced by 10%; Dual blades Demon gauge accumulation efficiency +30%; Longsword Spirit guage accumulation efficiency +10%';};
	if (text == '大剑、锤、弓蓄力时间缩短5%；双刀鬼人槽积攒效率+15%；太刀练气槽积攒效率+5%') {out = 'Sword, hammer, and bow charge time reduced by 5%; Dual blades Demon gauge accumulation efficiency +15%; Longsword Spirit guage accumulation efficiency +5%';};
	if (text == '大剑和锤蓄力所需时间延长') {out = 'Requirements extended';};
	if (text == '较大概率受到的伤害值明显降低') {out = 'Greater chance that when recieving damage it gets significantly reduced';};
	if (text == '一定概率受到的伤害值降低') {out = 'Chance that when recieving damage it gets reduced';};
	if (text == '一定概率受到的伤害值增加') {out = 'Chance that when recieving damage it gets increased';};
	if (text == '较大概率受到的伤害值明显增加') {out = 'Greater chance that when recieving damage it gets significantly increased';};
	if (text == '更容易对怪物造成部位破坏') {out = 'More likely to damage breakable parts of a monster';};
	if (text == '容易对怪物造成部位破坏') {out = 'Likely to damage breakable parts of a monster';};
	if (text == '体力较低时，防御力和攻击力得到大幅提升') {out = 'Dramatically increase Defense and Attack when at low health';};
	if (text == '体力较低时，防御力和攻击力得到提升') {out = 'Increase Defense and Attack when at low health';};
	if (text == '体力较低时，防御力提升') {out = 'Increase Defense and Attack when at low health';};
	if (text == '体力降低时，防御力和攻击力减少') {out = 'Decrease Defense and Attack when at low health';};
	if (text == '攻击时不会弹刀') {out = 'Prevents your attacks from being deflected';};
	if (text == '击中怪物弱点部位时，有额外伤害加成') {out = 'Increases damage when striking body parts that your attacks are highly effective';};
	if (text == '使得弩可以使用LV1/LV2/LV3贯通弹，如果已有该子弹，则弹夹变长') {out = 'You can use Pierce S Lvl1/2/3; if you already have these your clip size is extended';};
	if (text == '使得弩可以使用LV1/LV2贯通弹，如果已有该子弹，则弹夹变长') {out = 'You can use Pierce S Lvl1/2; if you already have these your clip size is extended';};
	if (text == '使得弩可以使用LV1贯通弹，如果已有该子弹，则弹夹变长') {out = 'You can use Pierce S Lvl1; if you already have these your clip size is extended';};
	if (text == '耐力上限值不会减少') {out = 'Stamina bar will not decrease';};
	if (text == '耐力上限的自然下降速度变慢') {out = 'Stamina bar will decrease slower';};
	if (text == '耐力上限的自然下降速度变快') {out = 'Stamina bar decreases faster';};
	if (text == '大幅减少翻滚及受身的耐力消耗') {out = 'Significantly reduce the stamina cost of dodging';};
	if (text == '显著减少翻滚及受身的耐力消耗') {out = 'Reduce the stamina cost of dodging';};
	if (text == '略微减少翻滚及受身的耐力消耗') {out = 'Slightly reduce the stamina cost of dodging';};
	if (text == '略微增加翻滚及受身的耐力消耗') {out = 'Slightly increase the stamina cost of dodging';};
	if (text == '显著增加翻滚及受身的耐力消耗') {out = 'Significantly increase the stamina cost of dodging';};
	if (text == '奥义槽全满是增加攻击力和防御力') {out = 'Increases Attack and Defense when Ultimate Guage is charged';};
	if (text == '使得弩可以使用LV1/LV2/LV3散弹，如果已有该子弹，则弹夹变长') {out = 'You can use Pellet S Lvl1/2/3; if you already have these your clip size is extended';};
	if (text == '使得弩可以使用LV1/LV2散弹，如果已有该子弹，则弹夹变长') {out = 'You can use Pellet S Lvl1/2; if you already have these your clip size is extended';};
	if (text == '使得弩可以使用LV1散弹，如果已有该子弹，则弹夹变长') {out = 'You can use Pellet S Lvl1; if you already have these your clip size is extended';};
	if (text == '弩子弹装填的速度显著提升') {out = 'Significantly improve speed of Bowgun bullet loading and Bow coat applying';};
	if (text == '弩子弹装填的速度中等提升') {out = 'Improve speed of Bowgun bullet loading and Bow coat applying';};
	if (text == '弩子弹装填的速度略微提升') {out = 'Slightly improve speed of Bowgun bullet loading and Bow coat applying';};
	if (text == '弩子弹装填的速度略微下降') {out = 'slightly decrease speed of Bowgun bullet loading and Bow coat applying';};
	if (text == '弩子弹装填的速度中等下降') {out = 'Decrease speed of Bowgun bullet loading and Bow coat applying';};
	if (text == '异常状态攻击的蓄积值大幅增加') {out = 'Dramatically increase Status Attack';};
	if (text == '异常状态攻击的蓄积值显著增加') {out = 'Significantly increase Status Attack';};
	if (text == '异常状态攻击的蓄积值少量增加') {out = 'Slightly increase Status Attack';};
	if (text == '异常状态攻击的蓄积值减少') {out = 'Reduce Status Attack';};
	if (text == '使得弩可以使用LV1/LV2/LV3榴弹，如果已有该子弹，则弹夹变长') {out = 'You can use Crag S Lvl1/2/3; if you already have these your clip size is extended';};
	if (text == '使得弩可以使用LV1/LV2榴弹，如果已有该子弹，则弹夹变长') {out = 'You can use Crag S Lvl1/2; if you already have these your clip size is extended';};
	if (text == '使得弩可以使用LV1榴弹，如果已有该子弹，则弹夹变长') {out = 'You can use Crag S Lvl1; if you already have these your clip size is extended';};
	if (text == '使用放置类道具时速度显著加快') {out = 'Speeds up trap-setting and bomb-setting time';};
	if (text == '增加连射矢和通常弹的伤害') {out = 'Increases the power of Normal S and Rapid-type arrows';};
	if (text == '增加贯通矢和贯通弹的伤害') {out = 'Increases the power of Pierce S and Pierce-type arrows';};
	if (text == '增加散弹和散射矢的伤害') {out = 'Increases the power of Pellet S and Sread-type arrows';};
	if (text == '不受到震地效果的影响') {out = 'Prevents staggering from tremors created by large monsters';};
	if (text == '受到攻击后15秒内再次受到的首次攻击伤害显著降低，一段时间内仅触发一次') {out = 'Significantly reduce damage after being attacked again within 15 seconds of the first attack; Has a cooldown';};
	if (text == '受到攻击后10秒内再次受到的首次攻击伤害降低,一段时间内仅触发一次') {out = 'Reduce damage after being attacked again within 10 seconds of the first attack; Has a cooldown';};
	if (text == '当队伍中存在异性的情况下，攻击力得到一定提升') {out = 'Increases your attack when in party with opposite sex';};
	if (text == '使用对应类型的远程武器时，可以使用眠瓶或眠弹') {out = 'Can use Sleep C (Bow) or Sleep S (Bowgun)';};
	if (text == '使用对应类型的远程武器时，可以使用麻瓶或麻弹') {out = 'Can use Para C (Bow) or Para S (Bowgun)';};
	if (text == '使用对应类型的远程武器时，可以使用毒瓶或毒弹') {out = 'Can use Poison C (Bow) or Poison S (Bowgun)';};
	if (text == '不容易成为怪物的目标') {out = 'Reduce chance of being targeted by monster';};
	if (text == '更容易成为怪物的目标') {out = 'Increase chance of being targeted by monster';};
	if (text == '可以抵御大多数大型怪物的咆哮') {out = 'Can withstand most large monster roars';};
	if (text == '可以抵御部分大型怪物的咆哮') {out = 'Can withstand some large monster roars';};
	if (text == '大幅增强防御时可抵御的攻击强度') {out = 'Greatly increase amount of attack you can guard against';};
	if (text == '显著增强防御时可抵御的攻击强度') {out = 'Significantly increase amount of attack you can guard against';};
	if (text == '增强防御时可抵御的攻击强度') {out = 'Increase amount of attack you can guard against';};
	if (text == '增加耐力回复速度') {out = 'Increase Stamina recovery speed';};
	if (text == '降低耐力回复速度') {out = 'Reduce Stamina recovery speed';};
	if (text == '大幅降低耐力回复速度') {out = 'Significantly reduce Stamina recovery speed';};
	if (text == '能够抵抗不可防御招式') {out = 'Causes previously unblockable attacks to become blockable';};
	if (text == '大幅增加翻滚的移动距离') {out = 'Significantly increase dodge roll distance';};
	if (text == '增加翻滚的移动距离') {out = 'Increase dodge roll distance';};
	if (text == '大幅增加翻滚的无敌时间') {out = 'Greatly increase dodge invincible time';};
	if (text == '显著增加翻滚的无敌时间') {out = 'Significantly increase dodge invincible time';};
	if (text == '增加翻滚的无敌时间') {out = 'Increase dodge invincible time';};
	if (text == '在剩余一定体力的情况下，不会被一击必杀') {out = 'Prevents fainting a single time if struck with a lethal blow; except one hit kills';};
	if (text == '当怪物愤怒时，攻击力提升') {out = 'Increase your Attack when monster is angry';};
	if (text == '当怪物愤怒时，攻击力小幅提升') {out = 'Slightly increase your Attack when monster is angry';};
	if (text == '不会进入臭气状态') {out = 'Prevent stench';};
	if (text == '每次死亡后攻击力和防御力都得到一定的提升（最多提升2次）') {out = 'After each death, attack and defense improved slightly (Stacks twice)';};
	if (text == '不会进入泥人或雪人状态') {out = 'Prevents being coated in snow or mud';};
	if (text == '免疫怪物造成的小型和大型风压以及古龙造成的龙风压') {out = 'Immune to small and large wind pressure (including elder dragons)';};
	if (text == '免疫怪物造成的小型和大型风压') {out = 'Immune to small and large wind pressure';};
	if (text == '免疫怪物造成的小型风压') {out = 'Immune to small wind pressure';};
	if (text == '耐力消耗显著降低') {out = 'Significantly reduce consumption cost of Stamina';};
	if (text == '耐力消耗降低') {out = 'Reduce consumption cost of Stamina';};
	if (text == '耐力消耗增加') {out = 'Increase consumption cost of Stamina';};
	if (text == '当血量值较高时，通过降低防御力增加伤害') {out = 'When health is high, increase your Attack by reducing your Defense';};
	if (text == '当持续一定时间没有触发会心时，下一次攻击增加会心机率') {out = 'After not dealing a critical strike for a while, your next attack will increase critical chance';};
	if (text == '当自己使用恢复类及肉类时，对同区域内的队员都提供较大比例的效果') {out = 'Transfers a large portion of the effects of certain items to companions in the same area';};
	if (text == '当自己使用恢复类道具时，对同区域内的队员提供较大比例的效果') {out = 'Transfers a greater portion of the effects of certain items to companions in the same area';};
	if (text == '当自己使用恢复类道具时，对一定范围内的队员提供一定比例的效果') {out = 'Transfers a portion of the effects of certain items to companions in the same area';};
	if (text == '非怪物仇恨目标时额外增加伤害，但对怪物的仇恨变高') {out = 'Increases damage to monsters not targeting you, but they will become more likely to target you';};
	if (text == '攻击时大幅降低斩味消耗') {out = 'Greatly reduce Sharpness consumption';};
	if (text == '攻击时降低斩味消耗') {out = 'Reduce Sharpness consumption';};
	if (text == '攻击时增加斩味消耗') {out = 'Increase Sharpness consumption';};
	if (text == '采集时80%几率多采一次') {out = 'When collecting there is an 80% chance of recieving more items';};
	if (text == '采集时50%几率多采一次') {out = 'When collecting there is an 50% chance of recieving more items';};
	if (text == '搬蛋时移动速度增加，并且偷盗免疫') {out = 'Increases movement speed when moving eggs; theft immunity';};
	if (text == '对飞龙种造成的伤害增加') {out = 'Increase the damage done to certain monster species';};
	if (text == '对鸟龙种造成的伤害增加') {out = 'Increase the damage done to certain monster species';};
	if (text == '对甲壳种造成的伤害增加') {out = 'Increase the damage done to certain monster species';};
	if (text == '对古龙种造成的伤害增加') {out = 'Increase the damage done to certain monster species';};
	if (text == '对鱼龙种造成的伤害增加') {out = 'Increase the damage done to certain monster species';};
	if (text == '对牙兽种造成的伤害增加') {out = 'Increase the damage done to certain monster species';};
	if (text == '增加攻击的气绝效果') {out = 'Makes it easier to Stun monsters';};
	if (text == '增加攻击的倒地效果') {out = 'Makes it easier to Trip monsters';};
	if (text == '暑热效果无效') {out = 'Negates Heat effects';};
	if (text == '寒冷效果无效') {out = 'Negates Cold effects';};
	if (text == '使得弩可以使用LV1/LV2/LV3通常弹，如果已有该子弹，则弹夹变长') {out = 'You can use Normal S Lvl1/2/3; if you already have these your clip size is extended';};
	if (text == '使得弩可以使用LV1/LV2通常弹，如果已有该子弹，则弹夹变长') {out = 'You can use Normal S Lvl1/2; if you already have these your clip size is extended';};
	if (text == '使得弩可以使用LV1通常弹，如果已有该子弹，则弹夹变长') {out = 'You can use Normal S Lvl1; if you already have these your clip size is extended';};
	if (text == '斩味增加一档') {out = 'Adds more sharpness to weapon';};
	if (text == '吃药品时候有一定几率恢复耐力') {out = 'Increases the effecacy of meat that raises max Stamina';};
	if (text == '体力满时攻击力增加') {out = 'Increases Attack at full health';};
	if (text == '弩装填数+1，可以使用弓箭4级蓄力') {out = 'Gives +1 shot to bowgun; Unlocks Bow Lvl4 charge';};
	if (text == '水属性耐性大幅提升') {out = 'Dramatically increase Water Res';};
	if (text == '水属性耐性显著提升') {out = 'Significantly increase Water Res';};
	if (text == '水属性耐性略微提升') {out = 'Slightly increase Water Res';};
	if (text == '水属性耐性衰减') {out = 'Reduce Water Res';};
	if (text == '火属性耐性大幅提升') {out = 'Dramatically increase Fire Res';};
	if (text == '火属性耐性显著提升') {out = 'Significantly increase Fire Res';};
	if (text == '火属性耐性略微提升') {out = 'Slightly increase Fire Res';};
	if (text == '火属性耐性衰减') {out = 'Reduce Fire Res';};
	if (text == '雷属性耐性大幅提升') {out = 'Dramatically increase Thunder Res';};
	if (text == '雷属性耐性显著提升') {out = 'Significantly increase Thunder Res';};
	if (text == '雷属性耐性略微提升') {out = 'Slightly increase Thunder Res';};
	if (text == '雷属性耐性衰减') {out = 'Reduce Thunder Res';};
	if (text == '龙属性耐性大幅提升') {out = 'Dramatically increase Dragon Res';};
	if (text == '龙属性耐性显著提升') {out = 'Significantly increase Dragon Res';};
	if (text == '龙属性耐性略微提升') {out = 'Slightly increase Dragon Res';};
	if (text == '龙属性耐性衰减') {out = 'Reduce Dragon Res';};
	if (text == '冰属性耐性大幅提升') {out = 'Dramatically increase Ice Res';};
	if (text == '冰属性耐性显著提升') {out = 'Significantly increase Ice Res';};
	if (text == '冰属性耐性略微提升') {out = 'Slightly increase Ice Res';};
	if (text == '冰属性耐性衰减') {out = 'Reduce Ice Res';};
	if (text == '能够使砥石进行磨刀的速度达到极速') {out = 'Greatly increases speed of whetstone sharpening';};
	if (text == '能够大幅加快使用砥石进行磨刀的速度') {out = 'Significantly increases speed of whetstone sharpening';};
	if (text == '降低使用砥石进行磨刀的速度') {out = 'Reduces the speed of whetstone sharpening';};
	if (text == '锤横扫重击、片手剑盾二连击、大剑拍击和防御拍击、弩炮近身攻击命中怪物头部将产生\n锁气绝效果，短时内让怪物气绝值停止恢复。') {out = 'Hammer blow, Sword and Shield Bash, Greatsword Slap, and Ranged head hits will lock up the monster. The monster will recover in a short amount of time';};
	if (text == '大剑或片手剑可以在招式的间隙转入防御状态') {out = 'When equiped with a Greatsword or Sword and Shield, you will automatically guard frontal attacks when not attacking ';};
	if (text == '使用回复药等道具时，恢复量大幅增加') {out = 'When using health recovery items gain a substantial amount of Recovery';};
	if (text == '使用回复药等道具时，恢复量增加') {out = 'When using health recovery items gain increased Recovery';};
	if (text == '使用回复药等道具时，恢复量较少') {out = 'When using health recovery items the amount recovered is lessened';};
	if (text == '食用草药就可以恢复大量体力') {out = 'Edible herbs can recover a large amount of health';};
	if (text == '吃蘑菇有不同效果') {out = 'Eating mushrooms have different effects';};
	if (text == '自动烤肉') {out = 'Auto Barbecue';};
	if (text == '拔刀攻击时，会心率大幅增加') {out = 'When attacking out of sheathe critical rate is increased substantially';};
	if (text == '拔刀攻击时，会心率增加') {out = 'When attacking out of sheathe critical rate is increased';};
	if (text == '弩炮速射时增加一发子弹') {out = 'Increase Rapid-Fire bullet count by one';};
	if (text == '弩炮射击时，后坐力大幅减少') {out = 'Significantly reduce Bowgun recoil';};
	if (text == '弩炮射击时，后坐力减少') {out = 'Reduce Bowgun recoil';};
	if (text == '弩炮射击时，后坐力变大') {out = 'Increase Bowgun recoil';};
	if (text == '狩猎笛旋律效果持续时间变长') {out = 'Hunting Horn Melody effects last for a longer time';};
	if (text == '炮击伤害小幅增加，龙击炮CD时间小幅缩减') {out = 'Shelling damage increased slightly, Wyvern Fire Cooldown reduced';};
	if (text == '炮击伤害略微增加，龙击炮CD时间略微缩减') {out = 'Shelling damage increased slightly, Wyvern Fire Cooldown slightly reduced';};
	if (text == '不会进入刺伤状态') {out = 'Negates Bleeding condition';};
//Other Armor
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
	if (text == '烈焰雌火龙') {out = '<a href="/monsters/conflagration-rathian/" target="_blank">Conflagration Rathian</a>';};
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
	if (text == 'NBY') {out = '<a href="/monsters/lightenna/" target="_blank">Lightenna</a>';};
	if (text == '荒厄龙') {out = '<a href="/monsters/merphistophelin/" target="_blank">Merphistophelin</a>';};
	if (text == 'NB5') {out = '<a href="/monsters/merphistophelin/" target="_blank">Merphistophelin</a>';};
	if (text == '一角龙') {out = '<a href="/monsters/monoblos/" target="_blank">Monoblos</a>';};
	if (text == '独耳黑狼鸟') {out = '<a href="/monsters/one-eared-yian-garuga/" target="_blank">One-Eared Yian Garuga</a>';};
	if (text == '片耳黑狼鸟') {out = '<a href="/monsters/one-eared-yian-garuga/" target="_blank">One-Eared Yian Garuga</a>';};
	if (text == '樱火龙') {out = '<a href="/monsters/pink-rathian/" target="_blank">Pink Rathian</a>';};
	if (text == '水龙') {out = '<a href="/monsters/plesioth/" target="_blank">Plesioth</a>';};
	if (text == '紫毒鸟') {out = '<a href="/monsters/purple-gypceros/" target="_blank">Purple Gypceros</a>';};
	if (text == '雄火龙') {out = '<a href="/monsters/rathalos/" target="_blank">Rathalos</a>';};
	if (text == '雌火龙') {out = '<a href="/monsters/rathian/" target="_blank">Rathian</a>';};
	if (text == '红电龙') {out = '<a href="/monsters/red-khezu/" target="_blank">Red Khezu</a>';};
	if (text == '砂岩龙') {out = '<a href="/monsters/sandstone-basarios/" target="_blank">Sandstone Basarios</a>';};
	if (text == '断刃一角龙') {out = '<a href="/monsters/shattered-monoblos/" target="_blank">Shattered Monoblos</a>';};
	if (text == '断角一角龙') {out = '<a href="/monsters/shattered-monoblos/" target="_blank">Shattered Monoblos</a>';};
	if (text == '砦蟹') {out = '<a href="/monsters/shen-gaoren/" target="_blank">Shen Gaoren</a>';};
	if (text == '老山蟹') {out = '<a href="/monsters/shen-gaoren/" target="_blank">Shen Gaoren</a>';};
	if (text == '将军镰蟹') {out = '<a href="/monsters/shogun-ceanataur/" target="_blank">Shogun Ceanataur</a>';};
	if (text == '银眠鸟') {out = '<a href="/monsters/silver-hypnocatrice/" target="_blank">Silver Hypnocatrice</a>';};
	if (text == '剑极狼') {out = '<a href="/monsters/slicemargl/" target="_blank">Slicemargl</a>';};
	if (text == 'NBX') {out = '<a href="/monsters/slicemargl/" target="_blank">Slicemargl</a>';};
	if (text == '剑豪镰蟹') {out = '<a href="/monsters/swordmaster-shogun-ceanataur/" target="_blank">Swordmaster Shogun Ceanataur</a>';};
	if (text == '吞渊龙') {out = '<a href="/monsters/tartaronis/" target="_blank">Tartaronis</a>';};
	if (text == '初阶吞渊龙') {out = '<a href="/monsters/tartaronis/" target="_blank">Tartaronis</a>';};
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
	if (text == '炎狮子') {out = '<a href="/monsters/flame-blangonga/" target="_blank">Flame Blangonga</a>';};
	if (text == '白一角龙') {out = '<a href="/monsters/white-monoblos/" target="_blank">White Monoblos</a>';};
	if (text == '熔岩龙') {out = '<a href="/monsters/lavasioth/" target="_blank">Lavasioth</a>';};
	if (text == '霞龙') {out = '<a href="/monsters/chameleos/" target="_blank">Chameleos</a>';};
	if (text == '老山蟹B') {out = '<a href="/monsters/guren-shen-gaoren/" target="_blank">Guren Shen Gaoren</a>';};
	if (text == 'PVP2') {out = '<a href="/monsters/merphistophelin/" target="_blank">Merphistophelin</a>';};
//Other monster for weapons
	if (text == '特殊铳枪') {out = 'Yian Kut-Ku + Bulldrome';};
	if (text == '新手') {out = 'Velociprey';};
	if (text == '骨') {out = 'Bones';};
	if (text == '铁') {out = 'Rocks';};
	if (text == '特殊枪') {out = 'Gendrome + Bulldrome';};
	if (text == 'sunaku') {out = 'Congalala + Velocidrome';};
	if (text == '鄂') {out = 'Congalala + Gendrome';};
	if (text == 'kurimu') {out = 'Gendrome';};
	if (text == 'subaku') {out = 'Bulldrome + Congalala';};
	if (text == 'hali') {out = 'Congalala';};
	if (text == '特殊笛') {out = 'Baelidae + Yian Kut-Ku';};
	if (text == '野性') {out = 'Congalala';};
	if (text == '爬虫') {out = 'Bones';};
	if (text == '十字枪') {out = 'Rocks';};
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
	if (text == 'nl炎狮子') {out = 'Flame Blangonga';};
	if (text == 'nl白一角龙') {out = 'White Monoblos';};
	if (text == 'nl熔岩龙') {out = 'Lavasioth';};
	if (text == 'nl霞龙') {out = 'Chameleos';};
//Body Parts
	if (text == '头部') {out = 'Head';};
	if (text == '腹部') {out = 'Abdomen';};
	if (text == '左右手（钳）') {out = 'Left and Right Hands (Pincers)';};
	if (text == '壳') {out = 'Shell';};
	if (text == '背部') {out = 'Back';};
	if (text == '躯干（本体/胴体）') {out = 'Torso (Body/Carcass)';};
	if (text == '面部') {out = 'Face';};
	if (text == '左右翼') {out = 'Wings';};
	if (text == '左,右翼') {out = 'Wings';};
	if (text == '尾部（尻尾）') {out = 'Tail (Rump)';};
	if (text == '右手（钳）') {out = 'Right Hand (Pincer)';};
	if (text == '左,右手（钳）') {out = 'Left and Right Hand (Pincers)';};
	if (text == '左/右臂') {out = 'Arms';};
	if (text == '左/右翼') {out = 'Wings';};
//Places
	if (text == '大型怪物狩猎') {out = 'Large Monster Hunting';};
	if (text == '大型怪物狩猎挑战难度，王立委托，王立精英委托') {out = 'Large Monster Hunting Difficult Challenge, HR Hunting, HR Elite Hunting';};
	if (text == '王立委托，王立精英，极限') {out = 'HR Hunting, HR Elite, Limit Mode';};
	if (text == '王立委托，王立精英委托') {out = 'HR Hunting, HR Elite Hunting';};
	if (text == '活动') {out = 'Raid';};
	if (text == '王立精英委托') {out = 'HR Elite Hunting';};
	if (text == '王立委托') {out = 'HR Hunting';};
	if (text == '大湖围猎祭') {out = 'Great Lakes Hunting Festival';};
//Armor Skills
	if (text == '回复速度+1、观察眼、大胃王') {out = 'Rec Speed +1，Capture Guru，Gourmand';};
	if (text == '探知、速食') {out = 'Detect，Speed Eating';};
	if (text == '气绝减半、草药达人') {out = 'Halve Stun，Herbal Daren';};
	if (text == '砥石使用高速化、防御力提升（小）') {out = 'Speed Sharpening，Defense Up (S)';};
	if (text == '通常弹&连射矢强化、防御力提升（小）') {out = 'Normal/Rapid Up，Defense Up (S)';};
	if (text == '攻击力提升（小）、火属性耐性强化+1') {out = 'Attack Up (S)，Fire Res +1';};
	if (text == '麻痹免疫、状态异常攻击+1') {out = 'Negate Paralysis，Status Atk +1';};
	if (text == 'KO术、砥石使用高速化、挑衅') {out = 'KO King，Speed Sharpening，Taunt';};
	if (text == 'KO术、散弹/矢强化、挑衅') {out = 'KO King，Pellet/Spread Up，Taunt';};	
	if (text == '耐泥雪、陷阱师') {out = 'Mud/Snow，Trap Master';};
	if (text == '毒减半、雷属性耐性强化+1') {out = 'Halve Poison，Thunder Atk +1';};
	if (text == '抗菌、速食、饥饿感增加') {out = 'Anti-bacterial，Speed Eating，Raise Hunger';};
	if (text == '风压（小）无效、无伤') {out = 'Windproof (Lo)，Peak Performance';};
	if (text == '耐暑、暴击') {out = 'Heat Cancel，Violent Strike';};
	if (text == '防御力提升（小）、风压（小）无效、雷属性攻击弱化') {out = 'Defense Up (S)，Windproof (Lo)，Thunder Atk Down';};
	if (text == '见切+1、火属性攻击强化+1、体力弱化-1') {out = 'Critical Eye +1，Fire Atk +1，Health -1';};
	if (text == '回复速度+3、气绝倍化') {out = 'Rec Speed +3，Double Stun';};
	if (text == '睡眠免疫、防御等级+1、麻痹倍化') {out = 'Negate Sleep，Guard +1，Double Paralysis';};
	if (text == '睡眠免疫、上弹速度强化+1、麻痹倍化') {out = 'Negate Sleep，Reload Spd +1，Double Paralysis';};
	if (text == '睡眠免疫、吸引、耐力回复迟缓-1') {out = 'Negate Sleep，Attract，Stam Recov -1';};
	if (text == '火事场力+1、破坏王、防御力降低（小）') {out = 'Adrenaline +1，Partbreaker，Defense Down (S)';};
	if (text == '毒减半、麻痹免疫、睡眠倍化') {out = 'Halve Poison，Negate Paralysis，Double Sleep';};
	if (text == '气绝免疫、风压（小）无效、恶灵加持') {out = 'Negate Stun，Windproof (Lo)，Evil Blessing';};
	if (text == '业物、砥石使用高速化、体力弱化-2') {out = 'Sharp，Speed Sharpening，Health -2';};	
	if (text == '贯通弹/矢强化、上弹速度强化+1、体力弱化-2') {out = 'Pierce/Pierce Up，Reload Spd +1，Health -2';};
	if (text == '耐泥雪、耐寒、冰属性攻击强化+1、气绝倍化') {out = 'Mud/Snow，Cold Res，Ice Itk +1，Double Stun';};
	if (text == '化蝶、隐秘、见切-1') {out = 'Butterfly Form，Sneak，Critical Eye -1';};
	if (text == '通常弹&连射矢强化 、防御力提升（小）') {out = 'Normal/Rapid Up ，Defense Up (S)';};
	if (text == '体力强化+1、攻击力提升（小）') {out = 'Health +1，Attack Up (S)';};
	if (text == 'KO术、上弹速度强化+1、挑衅') {out = 'KO King，Reload Spd +1，Taunt';};
	if (text == '耐泥雪、陷阱师、回复速度+1') {out = 'Mud/Snow，Trap Master，Rec Speed +1';};
	if (text == '毒无效、雷属性耐性强化+1、饥饿感增加') {out = 'Negate Poison，Thunder Atk +1，Raise Hunger';};
	if (text == '抗菌、速食、看破+1、饥饿感增加') {out = 'Anti-bacterial，Speed Eating，See Through +1，Raise Hunger';};
	if (text == '风压（大）无效、无伤、耐力回复迟缓-1') {out = 'Windproof (Hi)，Peak Performance，Stam Recov -1';};
	if (text == '毒减半、体力强化+2、气绝倍化') {out = 'Halve Poison，Health +2，Double Stun';};
	if (text == '见切+1、状态异常攻击+1、火属性攻击强化+1、体力弱化-1') {out = 'Critical Eye +1，Status Atk +1，Fire Atk +1，Health -1';};
	if (text == '回复速度+3、雷属性攻击强化+1、气绝倍化') {out = 'Rec Speed +3，Thunder Atk +1，Double Stun';};
	if (text == '睡眠免疫、体术+1、吸引、耐力回复迟缓-1') {out = 'Negate Sleep，Constitution +1，Attract，Stam Recov -1';};
	if (text == '火事场力+1、破坏王、抗菌、防御力降低（小）') {out = 'Adrenaline +1，Partbreaker，Anti-bacterial，Defense Down (S)';};
	if (text == '毒无效、麻痹免疫、状态异常攻击+1、睡眠倍化') {out = 'Negate Poison，Negate Paralysis，Status Atk +1，Double Sleep';};
	if (text == '气绝免疫、风压（小）无效、耐力急速回复+1、恶灵加持') {out = 'Negate Stun，Windproof (Lo)，Stam Recov +1，Evil Blessing';};
	if (text == '冰属性攻击强化+1、耐寒、耐震、气绝倍化') {out = 'Ice Itk +1，Cold Res，Tremor Res，Double Stun';};
	if (text == '耐泥雪、探知、冰属性耐性强化+1、火属性耐性弱化') {out = 'Mud/Snow，Detect，Ice Res +1，Fire Res Down';};
	if (text == '砥石使用高速化、冰属性攻击强化+1、心眼、毒倍化') {out = "Speed Sharpening，Ice Itk +1，Mind's Eye，Double Poison";};
	if (text == '体术+1、冰属性攻击强化+2、刺杀术+1、毒倍化') {out = "Constitution +1，Ice Itk +2，Assassin Tech +1，Double Poison";};
	if (text == '睡眠免疫、吸引、状态异常攻击+1、火属性耐性弱化') {out = 'Negate Sleep，Attract，Status Atk +1，Fire Res Down';};
	if (text == '不屈、根性、回复速度+1、耐力回复迟缓-1') {out = 'Fortify，Guts，Rec Speed +1，Stam Recov -1';};
	if (text == '见切+2、暴击、气绝倍化') {out = 'Critical Eye +2，Violent Strike，Double Stun';};
	if (text == '防御强化、速食、耐泥雪、攻击力降低（小）') {out = 'Guard Boost，Speed Eating，Mud/Snow，Attack Down (S)';};
	if (text == '散弹/矢强化、速食、耐泥雪、攻击力降低（小）') {out = 'Pellet/Spread Up，Speed Eating，Mud/Snow，Attack Down (S)';};
	if (text == '防御等级+1、攻击力提升（小）、状态异常攻击-1') {out = 'Guard +1，Attack Up (S)，Status Atk Down';};
	if (text == '上弹速度强化+1、攻击力提升（小）、状态异常攻击-1') {out = 'Reload Spd +1，Attack Up (S)，Status Atk Down';};
	if (text == '业物、见切+1、防御力降低（小）') {out = 'Sharp，Critical Eye +1，Defense Down (S)';};
	if (text == '贯通弹/矢强化、见切+1、防御力降低（小）') {out = 'Pierce/Pierce Up，Critical Eye +1，Defense Down (S)';};
	if (text == '广域化+1、耐力急速回复+1、回复速度-1') {out = 'Wide-Range +1，Stam Recov +1，Rec Speed -1';};
	if (text == '挑战者、火事场力+1、恶灵加持') {out = 'Challenger，Adrenaline +1，Evil Blessing';};
	if (text == '集中、破坏王、体力弱化-2') {out = 'Concentrate，Partbreaker，Health -2';};
	if (text == '毒减半、体力强化+2、探知') {out = 'Halve Poison，Health +2，Detect';};
	if (text == '耳栓、状态异常攻击+1、砥石使用高速化、回复速度-1') {out = 'Earplugs，Status Atk +1，Speed Sharpening，Rec Speed -1';};
	if (text == '耳栓、状态异常攻击+1、反动减轻+1、回复速度-1') {out = 'Earplugs，Status Atk +1，Recoil Down +1，Rec Speed -1';};
	if (text == '体术+1、弱点特效、挑衅') {out = 'Constitution +1，Weakness Exploit，Taunt';};
	if (text == '心眼、火属性攻击强化+2、防御力降低（小）') {out = "Mind's Eye，Fire Atk +2，Defense Down (S)";};
	if (text == '刺杀术+1、火属性攻击强化+2、防御力降低（小）') {out = 'Assassin Tech +1，Fire Atk +2，Defense Down (S)';};
	if (text == '火事场力+1、绊术、速食、回复速度-1') {out = 'Adrenaline +1，Tripping Power，Speed Eating，Rec Speed -1';};
	if (text == '耐震、根性、水属性攻击强化+1、慢食') {out = 'Tremor Res，Guts，Water Atk +1，Slow Eater';};
	if (text == '攻击力提升（大）、火属性攻击强化+1、体力弱化-1') {out = 'Attack Up (L)，Fire Atk +1，Health -1';};
	if (text == '心眼、回复速度+1、火属性攻击强化+1、钝刀') {out = "Mind's Eye，Rec Speed +1，Fire Atk +1，Blunt Edge";};
	if (text == '弱点特效、回复速度+1、火属性攻击强化+1、上弹速度强化-1') {out = 'Weakness Exploit，Rec Speed +1，Fire Atk +1，Reload Spd -1';};
	if (text == '耳栓、速食、防御力提升（小）、砥石使用低速化') {out = 'Earplugs，Speed Eating，Defense Up (S)，Slow Sharpening';};
	if (text == '耳栓、速食、防御力提升（小）、反动增大') {out = 'Earplugs，Speed Eating，Defense Up (S)，Recoil Up';};
	if (text == '回复速度+2、业物、挑战者+2、刺伤无效、降低耐力回复速度-1') {out = 'Rec Speed +2，Sharp，Challenger+2，Negate Thorns，Stam Recov -1';};
	if (text == '回复速度+2、业物、挑战者+2、刺伤无效、降低耐力回复速度-6') {out = 'Rec Speed +2，Sharp，Challenger+2，Negate Thorns，Stam Recov -1';};
	if (text == '不屈，特殊攻击+2，广域化+1') {out = 'Fortify，Status Atk +2，Wide-Range +1';};
	if (text == '拔刀术，耐震，耐力回复+1，砥石使用低速化') {out = 'Critical Draw，Tremor Res，Stam Recov +1，Slow Sharpening';};
	if (text == '上弹速度强化+1，贯通弹/矢强化，耐力回复+1，状态异常攻击-1') {out = 'Reload Spd +1，Pierce/Pierce Up，Stam Recov +1，Status Atk Down';};
	if (text == '雷属性攻击强化+1，回避性能，精灵的守护，砥石使用低速化') {out = 'Thunder Atk +1，Evasion，Holy Blessing，Slow Sharpening';};
	if (text == '雷属性攻击强化+1，回避性能，精灵的守护，上弹速度强化-1') {out = 'Thunder Atk +1，Evasion，Holy Blessing，Reload Spd -1';};
	if (text == '见切+2，耳栓，业物，体力弱化-1') {out = 'Critical Eye +2，Earplugs，Sharp，Health -1';};
	if (text == '见切+2，耳栓，通常弹&连射矢强化，体力弱化-1') {out = 'Critical Eye +2，Earplugs，Normal/Rapid Up，Health -1';};
	if (text == '耳栓，甲壳杀手，回复速度+1，体力弱化-1') {out = 'Earplugs，Crustaceans Killer，Rec Speed +1，Health -1';};
	if (text == '回避性能+2，集中，毒倍化') {out = 'Evasion +2，Concentrate，Double Poison';};
	if (text == 'KO术，集中，看破+1，耐力回复-1') {out = 'Knockout King，Concentrate，See Through +1，Stam Recov -1';};
	if (text == '体术+2，睡眠免疫，鸟龙杀手，防御力降低（小）') {out = 'Constitution +2，Negate Sleep，Bird Dragons Killer，Defense Down (S)';};
	if (text == '火事场力+2，风压（大）无效，火属性攻击强化+1') {out = 'Adrenaline +2，Windproof (Hi)，Fire Atk +1';};
	if (text == '破坏王，耐震，弱点特效，耐力回复-1') {out = 'Partbreaker，Tremor Res，Weakness Exploit，Stam Recov -1';};
	if (text == '业物，气绝减半，回避性能+1，耐暑') {out = 'Sharp，Halve Stun，Evasion +1，Heat Cancel';};
	if (text == '上弹速度强化+1，气绝减半，回避性能+1，耐暑') {out = 'Reload Spd +1，Halve Stun，Evasion +1，Heat Cancel';};
	if (text == '火事场力+2，见切+1，恶灵的加护') {out = 'Adrenaline +2，Critical Eye +1，Evil Blessing';};
	if (text == '集中，根性，火属性攻击强化+1，水属性耐性弱化，') {out = 'Concentrate，Guts，Fire Atk +1，Water Res Down';};
	if (text == '耳栓，隐秘，风压（大）无效，耐力回复-1') {out = 'Earplugs，Sneak，Windproof (Hi)，Stam Recov -1';};
//materials
	if (text == '山青虫') {out = 'Mountain Budworm';};
	if (text == '蓝速龙的鳞') {out = 'Velociprey Scale';};
	if (text == '圆蚂蚱') {out = 'Round Grasshopper';};
	if (text == '龙骨【小】') {out = 'Monster Bone S';};
	if (text == '棒状之骨') {out = 'Bone';};
	if (text == '兽骨【小】') {out = 'Brute Bone S';};
	if (text == '原盘石') {out = 'Disk Stone';};
	if (text == '圆盘石') {out = 'Disk Stone';};
	if (text == '小石子') {out = 'Stone';};
	if (text == '铁矿石') {out = 'Iron Ore';};
	if (text == '温暖的毛皮') {out = 'Warm Pelt';};
	if (text == '河狸兽的爪') {out = 'Caeserber Claw';};
	if (text == '蓝速龙王的皮') {out = 'Velocidrome Hide';};
	if (text == '蓝速龙王的爪') {out = 'Velocidrome Claw';};
	if (text == '大野猪王的鬃') {out = 'Bulldrome Mane';};
	if (text == '大野猪王的牙') {out = 'Bulldrome Tusk';};
	if (text == '鬼狩蛛的毛') {out = 'Baelidae Hair';};
	if (text == '鬼狩蛛的盾爪壳') {out = 'Baelidae Shield Claw';};
	if (text == '毒怪鸟的头') {out = 'Gypceros Head';};
	if (text == '变异的光水晶') {out = 'Weird Lightcrystal';};
	if (text == '低压的电气袋') {out = 'Electro Sac';};
	if (text == '白化里脊肉') {out = 'Pale Steak';};
	if (text == '绿色的粘液') {out = 'Green Mucus';};
	if (text == '沙雷鸟的嗉囊') {out = 'Chramine Crop';};
	if (text == '青怪鸟的背甲') {out = 'Blue Kut-Ku Shell';};
	if (text == '青怪鸟的耳') {out = 'Blue Kut-Ku Ear';};
	if (text == '燕雀石') {out = 'Machalite Ore';};
	if (text == '岩龙的甲壳') {out = 'Basarios Shell';};
	if (text == '岩龙的尾巴') {out = 'Basarios Tail';};
	if (text == '眠鸟的羽毛') {out = 'Hypnocatrice Feather';};
	if (text == '眠鸟的喙') {out = 'Hypnocatrice Beak';};
	if (text == '大地结晶') {out = 'Earth Crystal';};
	if (text == '金毛兽王的大骨') {out = 'G.Congalala Bone';};
	if (text == '金毛兽王的爪') {out = 'G.Congalala Claw';};
	if (text == '黏着白蚁') {out = 'Glueglopper';};
	if (text == '骇狩蛛的毛') {out = 'D.Baelidae Hair';};
	if (text == '骇狩蛛的盾爪壳') {out = 'D.Baelidae Shield Claw';};
	if (text == '雪狮子的毛') {out = 'Blango Pelt';};
	if (text == '雪狮子的尾巴') {out = 'Blangonga Tail';};
	if (text == '星龙的甲壳') {out = 'Estrellian Shell';};
	if (text == '星龙的爪') {out = 'Estrellian Claw';};
	if (text == '杀人蜂幼虫') {out = 'Snakebee Larvae';};
	if (text == '古龙之血') {out = 'Ancient Blood';};
	if (text == '吞渊龙的腕甲') {out = 'Tartaronis Wristguards';};
	if (text == '红角蝶') {out = 'Red-Horned Butterfly';};
	if (text == '银喵玉') {out = 'Silver Meow Sphere';};
	if (text == '剑豪镰蟹的坚钳') {out = 'S.Shogun Ceanataur Clamp+';};
	if (text == '剑豪之锋镰') {out = 'S.Shogun Ceanataur Scythe+';};
	if (text == '土蜂幼虫') {out = 'Earth Bee Larvae';};
	if (text == '金喵玉') {out = 'Golden Meow Sphere';};
	if (text == '亮蓝色的粘液') {out = 'Bright Blue Mucus';};
	if (text == '冰雷鸟的苍白鼻') {out = 'I.Chramine Pale Beak';};
	if (text == '兽骨【大】') {out = 'Brute Bone L';};
	if (text == '强光的电气袋') {out = 'Thunder Sac+';};
	if (text == '红色霜降肉') {out = 'Red Frosted Meat';};
	if (text == '龙骨【大】') {out = 'Monster Bone L';};
	if (text == '断刃一角龙的坚甲') {out = 'S.Monoblos Carapace+';};
	if (text == '断刃一角龙的靭尾') {out = 'S.Monoblos Tough Tail+';};
	if (text == '独耳黑狼鸟的韧翼膜') {out = 'One-Eared Garuga Edge Webbing';};
	if (text == '独耳黑狼鸟的刚翼') {out = 'One-Eared Garuga Wing+';};
	if (text == '光水晶') {out = 'Lightcrystal';};
	if (text == '尾晶蝎的紫晶') {out = 'A.Vashimu Amethyst+';};
	if (text == '尾晶蝎的巨钳') {out = 'A.Vashimu Giant Clamp';};
	if (text == '银眠鸟的银羽毛') {out = 'S.Hypnocatrice Feather+';};
	if (text == '银眠鸟的牙喙') {out = 'S.Hypnocatrice Beak+';};
	if (text == '荒厄龙的剑鳞') {out = 'Merphistrophelin Sword Scale';};
	if (text == '荒厄龙的骨翼') {out = 'Merphistrophelin Bone Wing';};
	if (text == '�厄的宝珠') {out = 'Disaster Orb';};
	if (text == '钢龙的宝玉') {out = 'Daora Gem';};
	if (text == '龙骨【中】') {out = 'Monster Bone M';};
	if (text == '兽骨【中】') {out = 'Brute Bone M';};
	if (text == '大野猪的皮') {out = 'Bullfango Hide';};
	if (text == '冰结晶') {out = 'Ice Crystal';};
	if (text == '迷之骨') {out = 'Mystery Bone';};
	if (text == '河狸兽的牙') {out = 'Caeserber Fang';};
	if (text == '河狸兽的皮') {out = 'Caeserber Hide';};
	if (text == '磨损的门牙') {out = 'Worn Incisor';};
	if (text == '蓝速龙王的牙') {out = 'Velocidrome Fang';};
	if (text == '蓝速龙王的头冠') {out = 'Velocidrome Head';};
	if (text == '大野猪王的蹄') {out = 'Bulldrome Hoof';};
	if (text == '大野猪王的卷曲牙') {out = 'Bulldrome Curved Fang';};
	if (text == '怪鸟的背甲') {out = 'Kut-Ku Shell';};
	if (text == '怪鸟的翼') {out = 'Kut-Ku Wing';};
	if (text == '怪鸟的耳') {out = 'Kut-Ku Ear';};
	if (text == '怪鸟的爪') {out = 'Kut-Ku Claw';};
	if (text == '怪鸟的鳞') {out = 'Kut-Ku Scale';};
	if (text == '破损的喙') {out = 'Broken Beak';};
	if (text == '黄速龙王的爪') {out = 'Gendrome Claw';};
	if (text == '黄速龙的鳞') {out = 'Genprey Scale';};
	if (text == '黄速龙王的麻痹牙') {out = 'Gendrome Fang';};
	if (text == '黄速龙王的皮') {out = 'Gendrome Hide';};
	if (text == '黄速龙王的头冠') {out = 'Gendrome Head';};
	if (text == '黄速龙王的尾巴') {out = 'Gendrome Tail';};
	if (text == '鬼狩蛛的爪') {out = 'Baelidae Claw';};
	if (text == '鬼狩蛛的甲壳') {out = 'Baelidae Shell';};
	if (text == '鬼狩蛛的体液') {out = 'Baelidae Fluid';};
	if (text == '鬼狩蛛的复眼') {out = 'Baelidae Eye';};
	if (text == '鬼狩蛛的蛛丝') {out = 'Baelidae Silk';};
	if (text == '沙狸兽的爪') {out = 'Y.Caeserber Claw';};
	if (text == '沙狸兽之皮') {out = 'Y.Caeserber Hide';};
	if (text == '储沙囊') {out = 'Sand Bladder';};
	if (text == '沙狸兽的牙') {out = 'Y.Caeserber Fang';};
	if (text == '沙狸兽的尾甲') {out = 'Y.Caeserber Tail';};
	if (text == '沙狸兽的门牙') {out = 'Y.Caeserber Worn Incisor';};
	if (text == '毒怪鸟的皮') {out = 'Gypceros Hide';};
	if (text == '毒怪鸟的嘴') {out = 'Gypceros Beak';};
	if (text == '橡胶质的尾巴') {out = 'Gypceros Tail';};
	if (text == '毒怪鸟的翼') {out = 'Gypceros Wing';};
	if (text == '桃毛兽王的牙') {out = 'Congalala Fang';};
	if (text == '桃毛兽王的大骨') {out = 'Congalala Bone';};
	if (text == '桃毛兽王的爪') {out = 'Congalala Claw';};
	if (text == '桃毛兽王的皮') {out = 'Congalala Pelt';};
	if (text == '淡彩色的毛') {out = 'Bright Pelt';};
	if (text == '桃毛兽的毛') {out = 'Conga Pelt';};
	if (text == '火红的鬃毛') {out = 'Red Mane';};
	if (text == '沙雷鸟的皮') {out = 'Chramine Hide';};
	if (text == '沙雷鸟的翼') {out = 'Chramine Wing';};
	if (text == '沙雷鸟的红鼻') {out = 'Chramine Red Beak';};
	if (text == '沙龙王的皮') {out = 'Cephadrome Hide';};
	if (text == '沙龙的鳞') {out = 'Cephalos Scale';};
	if (text == '沙龙王的牙') {out = 'Cephadrome Fang';};
	if (text == '沙龙王的储砂袋') {out = 'Cephadrome Sand Sac';};
	if (text == '弯月之头冠') {out = 'Cephadrome Head';};
	if (text == '桃色的鳞') {out = 'Pink Scale';};
	if (text == '盾蟹的爪') {out = 'Daimyo Hermitaur Claw';};
	if (text == '盾蟹的甲壳') {out = 'Daimyo Hermitaur Shell';};
	if (text == '盾蟹的脚') {out = 'Daimyo Hermitaur Leg';};
	if (text == '黑珍珠') {out = 'Black Pearl';};
	if (text == '盾蟹的小壳') {out = 'Small Hermitaur Shell';};
	if (text == '盾蟹的钳') {out = 'Daimyo Hermitaur Clamp';};
	if (text == '青怪鸟的爪') {out = 'Blue Kut-Ku Claw';};
	if (text == '青怪鸟的鳞') {out = 'Blue Kut-Ku Scale';};
	if (text == '青怪鸟的翼') {out = 'Blue Kut-Ku Wing';};
	if (text == '巨大的青鸟喙') {out = 'Blue Kut-Ku Beak';};
	if (text == '电龙的牙') {out = 'Khezu Fang';};
	if (text == '电龙的翼') {out = 'Khezu Wing';};
	if (text == '柔软的皮') {out = 'Pearly Hide';};
	if (text == '电龙的吸盘') {out = 'Khezu Sucker';};
	if (text == '岩龙的头壳') {out = 'Basarios Skull';};
	if (text == '岩龙的背壳') {out = 'Basarios Carapace';};
	if (text == '岩龙的泪') {out = 'Basarios Tear';};
	if (text == '岩龙的翼') {out = 'Basarios Wing';};
	if (text == '岩龙的腹甲') {out = 'Basarios Breastplate';};
	if (text == '眠鸟的爪') {out = 'Hypnocatrice Claw';};
	if (text == '稀释的眠液') {out = 'Diluted Sleep Solution';};
	if (text == '破损的眠袋') {out = 'Broken Sleep Sac';};
	if (text == '七色的尾羽') {out = 'Rainbow Feather';};
	if (text == '眠鸟的胃石') {out = 'Hypnocatrice Gastrolith';};
	if (text == '金毛兽王的毛') {out = 'G.Congalala Hair+';};
	if (text == '金毛兽王的皮') {out = 'G.Congalala Pelt';};
	if (text == '金毛兽王的牙') {out = 'G.Congalala Fang';};
	if (text == '淡金色的毛') {out = 'Pale Gold Hair';};
	if (text == '骇狩蛛的甲壳') {out = 'D.Baelidae Shell';};
	if (text == '骇狩蛛的眼') {out = 'D.Baelidae Eye';};
	if (text == '骇狩蛛的体液') {out = 'D.Baelidae Fluid';};
	if (text == '骇狩蛛的爪') {out = 'D.Baelidae Claw';};
	if (text == '骇狩蛛的蛛丝') {out = 'D.Baelidae Silk';};
	if (text == '毒鸟的紫翼') {out = 'P.Gypceros Wing';};
	if (text == '橡胶质的紫皮') {out = 'P.Rubbery Hide';};
	if (text == '紫毒鸟的嘴') {out = 'P.Gypceros Beak';};
	if (text == '毒鸟的紫头') {out = 'P.Gypceros Head';};
	if (text == '诡异的光水晶') {out = 'Strange Lightcrystal';};
	if (text == '橡胶质的绿尾') {out = 'P.Gypceros Tail';};
	if (text == '镰蟹的爪') {out = 'Shogun Ceanataur Claw';};
	if (text == '镰蟹的甲壳') {out = 'Shogun Ceanataur Carapace';};
	if (text == '镰蟹的脚') {out = 'Shogun Ceanataur Leg';};
	if (text == '镰蟹的小壳') {out = 'Ceanataur Shell';};
	if (text == '龙头壳') {out = 'Wyvern Scalp';};
	if (text == '金真珠') {out = 'Gold Pearl';};
	if (text == '雪狮子的爪') {out = 'Blangonga Claw';};
	if (text == '雪狮子的皮') {out = 'Blangonga Hide';};
	if (text == '雪狮子的大骨') {out = 'Blangonga Large Bone';};
	if (text == '雪狮子的髭') {out = 'Blangonga Mustache';};
	if (text == '雪狮子的牙') {out = 'Blangonga Fang';};
	if (text == '星龙的角') {out = 'Estrellian Horn';};
	if (text == '星羽蝶的羽翅') {out = 'Estrellian Wing Feather';};
	if (text == '微光的体液') {out = 'Shimmering Body Fluid';};
	if (text == '星龙的腹甲') {out = 'Estrellian Breastplate';};
	if (text == '星之龙鳞') {out = 'Estrellian Scale';};
	if (text == '河狸兽的尖爪') {out = 'Caeserber Claw+';};
	if (text == '河狸兽的优质皮') {out = 'Caeserber Hide+';};
	if (text == '河狸兽的尖牙') {out = 'Caeserber Fang+';};
	if (text == '历战的门牙') {out = 'Veteran Incisor';};
	if (text == '辉龙石') {out = 'Dragonite Ore';};
	if (text == '优质的毛皮') {out = 'High-Quality Pelt';};
	if (text == '蓝速龙王的尖爪') {out = 'Velocidrome Claw+';};
	if (text == '蓝速龙的优质鳞') {out = 'Velociprey Scale+';};
	if (text == '蓝速龙王的尖牙') {out = 'Velocidrome Fang+';};
	if (text == '蓝速龙王的大头冠') {out = 'Velocidrome Head+';};
	if (text == '蓝速龙王的优质皮') {out = 'Velocidrome Hide+';};
	if (text == '大野猪的硬皮') {out = 'Bullfango Hide+';};
	if (text == '大野猪王的硬蹄') {out = 'Bulldrome Hoof+';};
	if (text == '大野猪王的曲刚牙') {out = 'Bulldrome Curved Fang+';};
	if (text == '大野猪王的尖牙') {out = 'Bulldrome Tusk+';};
	if (text == '大野猪王的硬鬃') {out = 'Bulldrome Mane+';};
	if (text == '怪鸟的刚翼') {out = 'Kut-Ku Wing+';};
	if (text == '怪鸟的坚背甲') {out = 'Kut-Ku Carapace';};
	if (text == '怪鸟的地狱耳') {out = 'Kut-Ku Ear+';};
	if (text == '怪鸟的尖爪') {out = 'Kut-Ku Claw+';};
	if (text == '怪鸟的优质鳞') {out = 'Kut-Ku Scale+';};
	if (text == '漂亮的喙') {out = 'Beautiful Beak';};
	if (text == '黄速龙王的尖爪') {out = 'Gendrome Claw+';};
	if (text == '黄速龙的优质鳞') {out = 'Genprey Scale+';};
	if (text == '黄速龙王的麻痹尖牙') {out = 'Gendrome Fang+';};
	if (text == '黄速龙王的优质皮') {out = 'Gendrome Hide+';};
	if (text == '黄速龙王的大头冠') {out = 'Gendrome Head+';};
	if (text == '黄速龙王的韧尾') {out = 'Gendrome Tail+';};
	if (text == '鬼狩蛛的尖爪') {out = 'Baelidae Claw+';};
	if (text == '鬼狩蛛的坚壳') {out = 'Baelidae Shell+';};
	if (text == '鬼狩蛛的浓液') {out = 'Baelidae Broth';};
	if (text == '鬼狩蛛的鬼眼') {out = 'Baelidae Eye+';};
	if (text == '鬼狩蛛的刚毛') {out = 'Baelidae Hair+';};
	if (text == '鬼狩蛛的韧蛛丝') {out = 'Baelidae Silk+';};
	if (text == '沙狸兽的坚爪') {out = 'Y.Caeserber Claw+';};
	if (text == '沙狸兽重皮') {out = 'Y.Caeserber Hide+';};
	if (text == '沙狸兽的尖牙') {out = 'Y.Caeserber Fang+';};
	if (text == '厚实的储沙囊') {out = 'Heavy Sand Bladder';};
	if (text == '沙狸兽的坚尾甲') {out = 'Y.Caeserber Tail+';};
	if (text == '沙狸兽的尖门牙') {out = 'Y.Caeserber Veteran Incisor';};
	if (text == '毒怪鸟的刚翼') {out = 'Gypceros Wing+';};
	if (text == '毒怪鸟的优质皮') {out = 'Gypceros Hide+';};
	if (text == '毒怪鸟的坚硬嘴') {out = 'Gypceros Beak+';};
	if (text == '橡胶质的韧尾') {out = 'Gypceros Tail+';};
	if (text == '变异的新星水晶') {out = 'Weird Novacrystal';};
	if (text == '毒怪鸟的坚硬头') {out = 'Gypceros Head+';};
	if (text == '桃毛兽王的尖牙') {out = 'Congalala Fang+';};
	if (text == '桃毛兽王的坚骨') {out = 'Congalala Bone+';};
	if (text == '桃毛兽王的尖爪') {out = 'Congalala Claw+';};
	if (text == '桃毛兽王的优质皮') {out = 'Congalala Pelt+';};
	if (text == '极彩色的毛') {out = 'Vibrant Pelt';};
	if (text == '桃毛兽的刚毛') {out = 'Conga Pelt+';};
	if (text == '赤红的刚鬃') {out = 'Red Mane+';};
	if (text == '沙雷鸟的优质皮') {out = 'Chramine Hide+';};
	if (text == '沙雷鸟的刚翼') {out = 'Chramine Wing+';};
	if (text == '亮绿色的粘液') {out = 'Bright Green Mucus';};
	if (text == '沙雷鸟的厚实嗉囊') {out = 'Chramine Crop+';};
	if (text == '沙雷鸟的赤红鼻') {out = 'Chramine Crimson Beak';};
	if (text == '沙龙的优质鳞') {out = 'Cephalos Scale+';};
	if (text == '沙龙王的尖牙') {out = 'Cephadrome Fang+';};
	if (text == '桃色的优质鳞') {out = 'Pink Scale+';};
	if (text == '沙龙王的优质皮') {out = 'Cephadrome Hide+';};
	if (text == '沙龙王的大储砂袋') {out = 'Cephadrome Sand Sac+';};
	if (text == '新月之头冠') {out = 'Cephadrome Head+';};
	if (text == '盾蟹的尖爪') {out = 'Daimyo Hermitaur Claw+';};
	if (text == '盾蟹的坚壳') {out = 'Daimyo Hermitaur Shell+';};
	if (text == '盾蟹的长脚') {out = 'Daimyo Hermitaur Leg+';};
	if (text == '漆黑大珍珠') {out = 'Black Pearl+';};
	if (text == '盾蟹的小坚壳') {out = 'Small Hermitaur Shell+';};
	if (text == '盾蟹的巨钳') {out = 'Daimyo Hermitaur Clamp+';};
	if (text == '红速龙的优质鳞') {out = 'Iodrome Scale+';};
	if (text == '红速龙王的尖牙') {out = 'Iodrome Fang+';};
	if (text == '红速龙王的猛毒腺') {out = 'Iodrome Fierce Venom';};
	if (text == '红速龙王的尖爪') {out = 'Iodrome Claw+';};
	if (text == '红速龙王的优质皮') {out = 'Iodrome Hide+';};
	if (text == '红速龙王的大头冠') {out = 'Iodrome Crown+';};
	if (text == '青怪鸟的优质翼') {out = 'Blue Kut-Ku Wing+';};
	if (text == '青怪鸟的坚背甲') {out = 'Blue Kut-Ku Shell+';};
	if (text == '青怪鸟的地狱耳') {out = 'Blue Kut-Ku Ear+';};
	if (text == '青怪鸟的尖爪') {out = 'Blue Kut-Ku Claw+';};
	if (text == '青怪鸟的优质鳞') {out = 'Blue Kut-Ku Scale+';};
	if (text == '华丽的青鸟喙') {out = 'Blue Kut-Ku Beak+';};
	if (text == '电龙的优质翼') {out = 'Khezu Patagium+';};
	if (text == '珍珠色的柔皮') {out = 'Pearly Hide+';};
	if (text == '电龙的尖牙') {out = 'Khezu Fang+';};
	if (text == '高压的电气袋') {out = 'High-voltage Electro Sac';};
	if (text == '白化霜降肉') {out = 'Pearly Frosted Meat';};
	if (text == '电龙的强力吸盘') {out = 'Khezu Sucker+';};
	if (text == '岩龙的优质翼') {out = 'Basarios Wing+';};
	if (text == '岩龙的坚头壳') {out = 'Basarios Skull+';};
	if (text == '岩龙的坚背壳') {out = 'Basarios Shell+';};
	if (text == '岩龙的晶泪') {out = 'Basarios Tear+';};
	if (text == '岩龙的坚壳') {out = 'Basarios Armor+';};
	if (text == '岩龙的坚腹甲') {out = 'Basarios Breastplate+';};
	if (text == '完整的眠袋') {out = 'Sleep Sac';};
	if (text == '眠鸟的橙羽毛') {out = 'Hypnocatrice Orange Feather';};
	if (text == '多彩的尾羽') {out = 'Colorful Feather';};
	if (text == '眠鸟的尖爪') {out = 'Hypnocatrice Sharp Claw';};
	if (text == '浓缩的眠液') {out = 'Concentrated Sleep Solution';};
	if (text == '眠鸟的稀胃石') {out = 'Rare Bezoar';};
	if (text == '金毛兽王的刚毛') {out = 'G.Congalala Hair+';};
	if (text == '金毛兽王的优质皮') {out = 'G.Congalala Pelt+';};
	if (text == '金毛兽王的尖牙') {out = 'G.Congalala Fang+';};
	if (text == '金色的毛') {out = 'Golden Hair';};
	if (text == '金毛兽王的坚骨') {out = 'G.Congalala Bone+';};
	if (text == '金毛兽王的尖爪') {out = 'G.Congalala Claw+';};
	if (text == '骇狩蛛的坚壳') {out = 'D.Baelidae Shell+';};
	if (text == '骇狩蛛的复眼') {out = 'D.Baelidae Eye+';};
	if (text == '骇狩蛛的浓液') {out = 'D.Baelidae Broth';};
	if (text == '骇狩蛛的尖爪') {out = 'D.Baelidae Claw+';};
	if (text == '骇狩蛛的刚毛') {out = 'D.Baelidae Hair+';};
	if (text == '骇狩蛛的韧蛛丝') {out = 'D.Baelidae Silk+';};
	if (text == '毒鸟的紫刚翼') {out = 'P.Gypceros Wing+';};
	if (text == '橡胶质的紫柔皮') {out = 'P.Rubbery Hide+';};
	if (text == '紫毒鸟的坚硬嘴') {out = 'P.Gypceros Beak+';};
	if (text == '橡胶质的绿韧尾') {out = 'P.Gypceros Tail+';};
	if (text == '诡异的新星水晶') {out = 'Strange Novacrystal+';};
	if (text == '毒鸟的紫坚硬头') {out = 'P.Gypceros Head+';};
	if (text == '镰蟹的尖爪') {out = 'Shogun Ceanataur Claw+';};
	if (text == '镰蟹的坚壳') {out = 'Ceanataur Shell+';};
	if (text == '镰蟹的长脚') {out = 'Shogun Ceanataur Leg+';};
	if (text == '镰蟹的小坚壳') {out = 'Ceanataur Shell+';};
	if (text == '坚龙头壳') {out = 'Wyvern Scalp+';};
	if (text == '极上金真珠') {out = 'Large Gold Pearl+';};
	if (text == '雪狮子的尖爪') {out = 'Blangonga Claw+';};
	if (text == '雪狮子的优质皮') {out = 'Blangonga Hide+';};
	if (text == '雪狮子的坚骨') {out = 'Blangonga Strong Bone';};
	if (text == '雪狮子的刚髭') {out = 'Blangonga Mustache+';};
	if (text == '雪狮子的刚毛') {out = 'Blango Pelt+';};
	if (text == '雪狮子的尖牙') {out = 'Blangonga Fang+';};
	if (text == '星龙的尖角') {out = 'Estrellian Horn+';};
	if (text == '星龙的坚壳') {out = 'Estrellian Shell+';};
	if (text == '星羽蝶的薄羽翅') {out = 'Estrellian Wing Feather+';};
	if (text == '星光的体液') {out = 'Starlight Body Fluid';};
	if (text == '星龙的坚腹甲') {out = 'Estrellian Breastplate+';};
	if (text == '降星之龙鳞') {out = 'Estrellian Scale+';};
	if (text == '白速龙王的尖爪') {out = 'Giadrome Claw+';};
	if (text == '白速龙的优质鳞') {out = 'Giaprey Scale+';};
	if (text == '白速龙王的尖牙') {out = 'Giadrome Fang+';};
	if (text == '白速龙王的冻结腺') {out = 'Giadrome Frozen Gland';};
	if (text == '白速龙王的大头冠') {out = 'Giadrome Large Crown+';};
	if (text == '白速龙王的优质皮') {out = 'Giadrome Hide+';};
	if (text == '冰雷鸟的优质皮') {out = 'I.Chramine Hide+';};
	if (text == '冰雷鸟的刚翼') {out = 'I.Chramine Wing+';};
	if (text == '冰雷鸟的厚实嗉囊') {out = 'I.Chramine Crop+';};
	if (text == '湛蓝的刚鬃') {out = 'Blue Mane+';};
	if (text == '银眠鸟的尖爪') {out = 'S.Hypnocatrice Claw+';};
	if (text == '晶莹的眠液') {out = 'Crystal Clear Sleep Solution';};
	if (text == '圆鼓鼓的眠袋') {out = 'Bulging Sleep Sac';};
	if (text == '秘银尾羽') {out = 'Silver Tail+';};
	if (text == '银眠鸟的稀胃石') {out = 'Rare Silver Bezoar';};
	if (text == '剑豪镰蟹的尖爪') {out = 'S.Shogun Ceanataur Claw+';};
	if (text == '剑豪镰蟹的坚壳') {out = 'S.Shogun Ceanataur Hard Shell';};
	if (text == '剑豪镰蟹的坚脚') {out = 'S.Shogun Ceanataur Leg+';};
	if (text == '剑豪镰蟹的金色大真珠') {out = 'S.Shogun Ceanataur Gold Pearl+';};
	if (text == '尾晶蝎的尖爪') {out = 'A.Vashimu Claw+';};
	if (text == '尾晶蝎的刚毛') {out = 'A.Vashimu Hair+';};
	if (text == '尾晶蝎的坚壳') {out = 'A.Vashimu Shell+';};
	if (text == '尾晶蝎的大颚') {out = 'A.Vashimu Giant Jaw+';};
	if (text == '尾晶蝎的毒刚毛') {out = 'A.Vashimu Poison Hair+';};
	if (text == '黑狼鸟的优质鳞') {out = 'Garuga Scale+';};
	if (text == '黑狼鸟的坚壳') {out = 'Garuga Shell+';};
	if (text == '黑狼鸟的刚髭') {out = 'Garuga Mustache+';};
	if (text == '黑狼鸟的刚翼爪') {out = 'Garuga Claw+';};
	if (text == '黑狼鸟的韧翼膜') {out = 'Garuga Webbing+';};
	if (text == '黑狼鸟的地狱耳') {out = 'Garuga Hell Ear+';};
	if (text == '红电龙的刚翼') {out = 'R.Khezu Wing+';};
	if (text == '魅惑色的柔皮') {out = 'Alluring Hide+';};
	if (text == '红电龙的尖牙') {out = 'R.Khezu Fang+';};
	if (text == '红电龙的强力吸盘') {out = 'R.Khezu Sucker+';};
	if (text == '独耳黑狼鸟的刚翼爪') {out = 'One-Eared Garuga Claw+';};
	if (text == '独耳黑狼鸟的优质鳞') {out = 'One-Eared Garuga Scale+';};
	if (text == '独耳黑狼鸟的坚壳') {out = 'One-Eared Garuga Shell+';};
	if (text == '独耳黑狼鸟的刚髭') {out = 'One-Eared Garuga Mustache+';};
	if (text == '独耳黑狼鸟的地狱耳') {out = 'One-Eared Garuga Hell Ear+';};
	if (text == '断刃一角龙的坚壳') {out = 'S.Monoblos Hard Shell+';};
	if (text == '断刃一角龙的延髓') {out = 'S.Monoblos Medulla';};
	if (text == '断刃一角龙的脉动心脏') {out = 'S.Monoblos Pulsating Heart';};
	if (text == '断刃一角龙的刚翼') {out = 'S.Monoblos Wing+';};
	if (text == '剑极狼的刚毛') {out = 'Slicemargl Fur+';};
	if (text == '剑极狼的上腕甲') {out = 'Slicemargl Wristguard+';};
	if (text == '剑极狼的锐牙') {out = 'Slicemargl Fang+';};
	if (text == '剑极狼的凶戾眼') {out = 'Slicemargl Brutal Eye+';};
	if (text == '剑极狼的尖爪') {out = 'Slicemargl Claw+';};
	if (text == '剑极狼的獠齿') {out = 'Slicemargl Hunting Tooth';};
	if (text == '苍火龙的刚翼') {out = 'A.Rathalos Wing+';};
	if (text == '苍蓝的爆炎袋') {out = 'Pale Azure Flame Sac+';};
	if (text == '苍火龙的延髓') {out = 'A.Rathalos Medulla';};
	if (text == '苍火龙的上鳞') {out = 'A.Rathalos Scale+';};
	if (text == '苍火龙的坚壳') {out = 'A.Rathalos Shell+';};
	if (text == '苍火龙的逆鳞') {out = 'A.Rathalos Plate+';};
	if (text == '灰晶蝎的尖爪') {out = 'A.Jebia Claw+';};
	if (text == '灰晶蝎的刚毛') {out = 'A.Jebia Hair+';};
	if (text == '灰晶蝎的坚壳') {out = 'A.Jebia Carapace+';};
	if (text == '灰晶蝎的毒刚毛') {out = 'A.Jebia Poison Hair+';};
	if (text == '灰晶蝎的辉晶石') {out = 'A.Jebia Spar+';};
	if (text == '灰晶蝎的大颚') {out = 'A.Jebia Giant Jaw+';};
	if (text == '砂岩龙的坚头壳') {out = 'S.Basarios Skull+';};
	if (text == '砂岩龙的坚背壳') {out = 'S.Basarios Armor+';};
	if (text == '砂岩龙的沙泪') {out = 'S.Basarios Tear+';};
	if (text == '砂岩龙的坚壳') {out = 'S.Basarios Shell+';};
	if (text == '砂岩龙的优质翼') {out = 'S.Basarios Wing+';};
	if (text == '砂岩龙的坚腹甲') {out = 'S.Basarios Breastplate+';};
	if (text == '樱火龙的上鳞') {out = 'P.Rathian Scale+';};
	if (text == '樱火龙的坚壳') {out = 'P.Rathian Shell+';};
	if (text == '樱火龙的上棘') {out = 'P.Rathian Webbing+';};
	if (text == '樱火龙的逆鳞') {out = 'P.Rathian Spike+';};
	if (text == '樱红的爆炎袋') {out = 'P.Rathian Inferno Sac';};
	if (text == '樱火龙的延髓') {out = 'P.Rathian Marrow+';};
	if (text == '灰晶蝎的靭尾') {out = 'A.Jebia Tough Tail+';};
	if (text == '灰晶蝎的巨钳') {out = 'A.Jebia Clamp+';};
//Jewels
	if (text == '攻击珠【1】') {out = 'Attack Jewel 1'; }
	if (text == '攻击珠【2】') {out = 'Attack Jewel 2'; }
	if (text == '攻击珠【3】') {out = 'Attack Jewel 3'; }
	if (text == '达人珠【1】') {out = 'Expert Jewel 1'; }
	if (text == '达人珠【2】') {out = 'Expert Jewel 2'; }
	if (text == '达人珠【3】') {out = 'Expert Jewel 3'; }
	if (text == '特攻珠【1】') {out = 'Disabler Jewel 1'; }
	if (text == '特攻珠【2】') {out = 'Disabler Jewel 2'; }
	if (text == '火炎珠【1】') {out = 'Blaze Jewel 1'; }
	if (text == '火炎珠【2】') {out = 'Blaze Jewel 2'; }
	if (text == '流水珠【1】') {out = 'Stream Jewel 1'; }
	if (text == '流水珠【2】') {out = 'Stream Jewel 2'; }
	if (text == '雷光珠【1】') {out = 'Bolt Jewel 1'; }
	if (text == '雷光珠【2】') {out = 'Bolt Jewel 2'; }
	if (text == '冰结珠【1】') {out = 'Frost Jewel 1'; }
	if (text == '冰结珠【2】') {out = 'Frost Jewel 2'; }
	if (text == '破龙珠【1】') {out = 'Dragon Jewel 1'; }
	if (text == '破龙珠【2】') {out = 'Dragon Jewel 2'; }
	if (text == '痛击珠【1】') {out = 'Tenderizer Jewel 1'; }
	if (text == '痛击珠【3】') {out = 'Tenderizer Jewel 3'; }
	if (text == '重击珠【1】') {out = 'Destroyer Jewel 1'; }
	if (text == '重击珠【3】') {out = 'Destroyer Jewel 3'; }
	if (text == 'KO珠【1】') {out = 'KO Jewel 1'; }
	if (text == 'KO珠【3】') {out = 'KO Jewel 3'; }
	if (text == '底力珠【1】') {out = 'Potential Jewel 1'; }
	if (text == '底力珠【2】') {out = 'Potential Jewel 2'; }
	if (text == '逆境珠【1】') {out = 'Fortitude Jewel 1'; }
	if (text == '逆境珠【2】') {out = 'Fortitude Jewel 2'; }
	if (text == '斗魂珠【1】') {out = 'Spirit Jewel 1'; }
	if (text == '斗魂珠【2】') {out = 'Spirit Jewel 2'; }
	if (text == '看破珠【1】') {out = 'Hardy Jewel 1'; }
	if (text == '看破珠【2】') {out = 'Hardy Jewel 2'; }
	if (text == '无伤珠【1】') {out = 'Flawless Jewel 1'; }
	if (text == '无伤珠【2】') {out = 'Flawless Jewel 2'; }
	if (text == '吸引珠【1】') {out = 'Attraction Jewel 1'; }
	if (text == '吸引珠【2】') {out = 'Attraction Jewel 2'; }
	if (text == '背水珠【1】') {out = 'High Stakes Jewel 1'; }
	if (text == '背水珠【2】') {out = 'High Stakes Jewel 2'; }
	if (text == '倒地珠【1】') {out = 'Trip Jewel 1'; }
	if (text == '刺杀珠【1】') {out = 'Ambush Jewel 1'; }
	if (text == '刺杀珠【3】') {out = 'Ambush Jewel 3'; }
	if (text == '鼓笛珠【1】') {out = 'Sonorous Jewel 1'; }
	if (text == '炮术珠【1】') {out = 'Artillery Jewel 1'; }
	if (text == '防御珠【1】') {out = 'Defense Jewel 1'; }
	if (text == '防御珠【2】') {out = 'Defense Jewel 2'; }
	if (text == '防御珠【3】') {out = 'Defense Jewel 3'; }
	if (text == '耐火珠【1】') {out = 'Fire Res Jewel 1'; }
	if (text == '制火珠【1】') {out = 'Nul-Fire Jewel 1'; }
	if (text == '耐水珠【1】') {out = 'Water Res Jewel 1'; }
	if (text == '制水珠【1】') {out = 'Nul-Water Jewel 1'; }
	if (text == '耐雷珠【1】') {out = 'Thunder Res Jewel 1'; }
	if (text == '制雷珠【1】') {out = 'Nul-Thunder Jewel 1'; }
	if (text == '耐冰珠【1】') {out = 'Ice Res Jewel 1'; }
	if (text == '制冰珠【1】') {out = 'Nul-Ice Jewel 1'; }
	if (text == '耐龙珠【1】') {out = 'Dragon Res Jewel 1'; }
	if (text == '加护珠【1】') {out = 'Nul-Dragon Jewel 1'; }
	if (text == '体力珠【1】') {out = 'Vitality Jewel 1'; }
	if (text == '早复珠【1】') {out = 'Recovery Jewel 1'; }
	if (text == '早复珠【2】') {out = 'Recovery Jewel 2'; }
	if (text == '体术珠【1】') {out = 'Physique Jewel 1'; }
	if (text == '体术珠【2】') {out = 'Physique Jewel 2'; }
	if (text == '早气珠【1】') {out = 'Refresh Jewel 1'; }
	if (text == '早气珠【2】') {out = 'Refresh Jewel 2'; }
	if (text == '无食珠【1】') {out = 'Hungerless Jewel 1'; }
	if (text == '无食珠【2】') {out = 'Hungerless Jewel 2'; }
	if (text == '食汉珠【1】') {out = 'Metabolism Jewel 1'; }
	if (text == '根性珠【1】') {out = 'Guts Jewel 1'; }
	if (text == '根性珠【2】') {out = 'Guts Jewel 2'; }
	if (text == '治愈珠【1】') {out = 'Medicine Jewel 1'; }
	if (text == '治愈珠【2】') {out = 'Medicine Jewel 2'; }
	if (text == '短缩珠【1】') {out = 'Charger Jewel 1'; }
	if (text == '短缩珠【3】') {out = 'Charger Jewel 3'; }
	if (text == '匠珠【2】') {out = 'Handicraft Jewel 2'; }
	if (text == '剑术珠【1】') {out = 'Fencer Jewel 1'; }
	if (text == '剑术珠【3】') {out = 'Fencer Jewel 3'; }
	if (text == '斩铁珠【1】') {out = 'Razor Jewel 1'; }
	if (text == '斩铁珠【3】') {out = 'Razor Jewel 3'; }
	if (text == '铁壁珠【1】') {out = 'Ironwall Jewel 1'; }
	if (text == '铁壁珠【2】') {out = 'Ironwall Jewel 2'; }
	if (text == '强壁珠【1】') {out = 'Shield Jewel 1'; }
	if (text == '强壁珠【2】') {out = 'Shield Jewel 2'; }
	if (text == '研磨珠【1】') {out = 'Grinder Jewel 1'; }
	if (text == '锁气珠【1】') {out = 'Stun Lock Jewel 1'; }
	if (text == '锁气珠【3】') {out = 'Stun Lock Jewel 3'; }
	if (text == '拔刀珠【1】') {out = 'Draw Jewel 1'; }
	if (text == '拔刀珠【2】') {out = 'Draw Jewel 2'; }
	if (text == '装填珠【2】') {out = 'Capacity Jewel 2'; }
	if (text == '强弹珠【1】') {out = 'Forceshot Jewel 1'; }
	if (text == '贯通珠【1】') {out = 'Pierce Jewel 1'; }
	if (text == '散弹珠【1】') {out = 'Pellet Jewel 1'; }
	if (text == '加弹珠【1】') {out = 'ShotPlus Jewel 1'; }
	if (text == '加贯珠【1】') {out = 'PiercePlus Jewel 1'; }
	if (text == '加散珠【1】') {out = 'PelletPlus Jewel 1'; }
	if (text == '早填珠【1】') {out = 'Quickload Jewel 1'; }
	if (text == '毒瓶珠【1】') {out = 'PoisonPlus Jewel 1'; }
	if (text == '眠瓶珠【1】') {out = 'SleepPlus Jewel 1'; }
	if (text == '麻瓶珠【1】') {out = 'ParaPlus Jewel 1'; }
	if (text == '加榴珠【1】') {out = 'ClustPlus Jewel 1'; }
	if (text == '反动珠【1】') {out = 'Absorber Jewel 1'; }
	if (text == '速射珠【1】') {out = 'Salvo Jewel 1'; }
	if (text == '回避珠【1】') {out = 'Evasion Jewel 1'; }
	if (text == '回避珠【2】') {out = 'Evasion Jewel 2'; }
	if (text == '跳跃珠【1】') {out = 'Jumping Jewel 1'; }
	if (text == '陷阱珠【1】') {out = 'Trapmaster Jewel 1'; }
	if (text == '早食珠【1】') {out = 'Gobbler Jewel 1'; }
	if (text == '耐绝珠【1】') {out = 'Steadfast Jewel 1'; }
	if (text == '耐痹珠【1】') {out = 'Paralysis Jewel 1'; }
	if (text == '耐眠珠【1】') {out = 'Pep Jewel 1'; }
	if (text == '耐毒珠【1】') {out = 'Antidote Jewel 1'; }
	if (text == '耐粘珠【1】') {out = 'Tracker Jewel 1'; }
	if (text == '耐震珠【1】') {out = 'Tectonic Jewel 1'; }
	if (text == '抗震珠【1】') {out = 'Quake Jewel 1'; }
	if (text == '耐暑珠【1】') {out = 'Heat Res Jewel 1'; }
	if (text == '耐暑珠【2】') {out = 'Heat Res Jewel 2'; }
	if (text == '耐寒珠【1】') {out = 'Cold Res Jewel 1'; }
	if (text == '耐寒珠【2】') {out = 'Cold Res Jewel 2'; }
	if (text == '防音珠【1】') {out = 'Earplug Jewel 1'; }
	if (text == '防音珠【3】') {out = 'Earplug Jewel 3'; }
	if (text == '防风珠【1】') {out = 'Wind Res Jewel 1'; }
	if (text == '防风珠【2】') {out = 'Wind Res Jewel 2'; }
	if (text == '广域珠【1】') {out = 'Friendship Jewel 1'; }
	if (text == '广域珠【2】') {out = 'Friendship Jewel 2'; }
	if (text == '忍脚珠【1】') {out = 'Ninja Jewel 1'; }
	if (text == '耐菌珠【1】') {out = 'Antibacterial Jewel 1'; }
	if (text == '抗棘珠【1】') {out = 'Staunch Jewel 1'; }
	if (text == '草药珠【1】') {out = 'Herb Jewel 1'; }
	if (text == '名药珠【1】') {out = 'Herbalism Jewel 1'; }
	if (text == '千里珠【1】') {out = 'Psychic Jewel 1'; }
	if (text == '观察珠【1】') {out = 'Perception Jewel 1'; }
	if (text == '生存珠【1】') {out = 'Ranger Jewel 1'; }
	if (text == '飞龙珠【1】') {out = 'Flying Wyvern Jewel 1'; }
	if (text == '鸟龙珠【1】') {out = 'Bird Wyvern Jewel 1'; }
	if (text == '鸟龙珠【2】') {out = 'Bird Wyvern Jewel 2'; }
	if (text == '牙兽珠【1】') {out = 'Fanged Beast Jewel 1'; }
	if (text == '牙兽珠【2】') {out = 'Fanged Beast Jewel 2'; }
	if (text == '甲壳珠【1】') {out = 'Carapacean Jewel 1'; }
	if (text == '甲壳珠【2】') {out = 'Carapacean Jewel 2'; }
	if (text == '古龙珠【1】') {out = 'Elder Dragon Jewel 1'; }
	if (text == '鱼龙珠【1】') {out = 'Piscine Wyvern Jewel 1'; }
	if (text == '鱼龙珠【2】') {out = 'Piscine Wyvern Jewel 2'; }
	if (text == '') {out = '';};
	if (text == '') {out = '';};
	if (text == '') {out = '';};
	if (text == '') {out = '';};
	if (text == '') {out = '';};
	if (text == '') {out = '';};
	if (text == '') {out = '';};
	if (text == '') {out = '';};
	if (text == '') {out = '';};
	if (text == '') {out = '';};
	if (text == '') {out = '';};
	if (text == '') {out = '';};
	if (text == '') {out = '';};

	return out;
}