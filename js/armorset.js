// initialize global variables
var armortype; var filterArmor; var helmet; var vambraces; var armor; var waist; var greaves; var necklace; var ring; var talisman; var helmetID; var vambracesID; var armorID; var waistID; var greavesID; var necklaceID; var ringID; var talismanID; var talismanSkill1ID; var talismanSkill1vID; var talismanSkill2ID; var talismanSkill2vID; var passive; var helmetType; var vambracesType; var armorType; var waistType; var greavesType;
var skills = { "Ambush":0, "Anti-bacterial":0, "Attack":0, "Butterfly Dance":0, "Cold Res":0, "Constitution":0, "Handicraft":0, "Crit Draw":0, "Defense":0, "Destroyer":0, "Dragon Atk":0, "Eating":0, "Evade Dist":0, "Evasion":0, "Expert":0, "FastCharge":0, "Fencing":0, "Fire Atk":0, "Fire Res":0, "Gluttony":0, "Guard":0, "Guard Up":0, "Guts":0, "Health":0, "Hearing":0, "Heat Res":0, "Herb King":0, "Hormone":0, "Hunger":0, "Ice Atk":0, "Ice Res":0, "Violent Strike":0, "KO":0, "Loading":0, "Mud/Snow":0, "Normal Up":0, "Paralysis":0, "Pellet Up":0, "Perception":0, "Pierce Up":0, "Poison":0, "Potential":0, "Protection":0, "Psychic":0, "Rec Speed":0, "Recoil":0, "Reload Spd":0, "Resilience":0, "Sense":0, "Sharpener":0, "Sharpness":0, "Sleep":0, "SpeedSetup":0, "Spirit":0, "Stam Recov":0, "Status":0, "Stun":0, "Survivor":0, "Tenderizer":0, "Bleeding":0, "Thunder Res":0, "ThunderAtk":0, "Tremor Res":0, "Tripping Power":0, "Unscathed":0, "Water Atk":0, "Wide-Range":0, "Wind Res":0, "Sleep C+":0, "Stamina":0, "Hunter Life":0, "Water Res":0, "Dragon Res":0, "Rec Level":0, "PowerEater":0, "BBQ Expert":0, "Rapid Fire":0, "Maestro":0, "Artillery":0, "Crustacians Hunter":0, "Bird Dragons Hunter":0, "Dragons Hunter":0};
// need second array for "for" loop
var skillNames = ["Ambush", "Anti-bacterial", "Artillery", "Attack", "BBQ Expert", "Bird Dragons Hunter", "Bleeding", "Butterfly Dance", "Cold Res", "Constitution", "Crit Draw", "Crustacians Hunter", "Defense", "Destroyer", "Dragon Atk", "Dragon Res", "Dragons Hunter", "Eating", "Evade Dist", "Evasion", "Expert", "FastCharge", "Fencing", "Fire Atk", "Fire Res", "Gluttony", "Guard Up", "Guard", "Guts", "Handicraft", "Health", "Hearing", "Heat Res", "Herb King", "Hormone", "Hunger", "Hunter Life", "Ice Atk", "Ice Res", "KO", "Loading", "Maestro", "Mud/Snow", "Normal Up", "Paralysis", "Pellet Up", "Perception", "Pierce Up", "Poison", "Potential", "PowerEater", "Protection", "Psychic", "Rapid Fire", "Rec Level", "Rec Speed", "Recoil", "Reload Spd", "Resilience", "Sense", "Sharpener", "Sharpness", "Sleep C+", "Sleep", "SpeedSetup", "Spirit", "Stam Recov", "Stamina", "Status", "Stun", "Survivor", "Tenderizer", "Thunder Res", "ThunderAtk", "Tremor Res", "Tripping Power", "Unscathed", "Violent Strike", "Water Atk", "Water Res", "Wide-Range", "Wind Res"];

$(function() {
	displayData();
});

$(document).on('change', 'select#necklaceSelect', function() {
    console.log($(this).val()); // the selected options’s value

    // if you want to do stuff based on the OPTION element:
    var opt = $(this).val();
    updateurl('6', opt);
    displayData();
    // use switch or if/else etc.
});

$(document).on('change', 'select#ringSelect', function() {
    console.log($(this).val()); // the selected options’s value

    // if you want to do stuff based on the OPTION element:
    var opt = $(this).val();
    updateurl('7', opt);
    displayData();
    // use switch or if/else etc.
});

$(document).on('change', 'select#talismanSelect', function() {
    console.log($(this).val()); // the selected options’s value

    // if you want to do stuff based on the OPTION element:
    var opt = $(this).val();
    updateurl('8', opt);
    displayData();
    // use switch or if/else etc.
});

$(document).on('change', 'select#talismanSkill1Select', function() {
    console.log($(this).val()); // the selected options’s value

    // if you want to do stuff based on the OPTION element:
    var opt = $(this).val();
    updateurl('9', opt);
    displayData();
    // use switch or if/else etc.
});

$(document).on('change', 'select#talismanSkill1vSelect', function() {
    console.log($(this).val()); // the selected options’s value

    // if you want to do stuff based on the OPTION element:
    var opt = $(this).val();
    updateurl('10', opt);
    displayData();
    // use switch or if/else etc.
});

$(document).on('change', 'select#talismanSkill2Select', function() {
    console.log($(this).val()); // the selected options’s value

    // if you want to do stuff based on the OPTION element:
    var opt = $(this).val();
    updateurl('11', opt);
    displayData();
    // use switch or if/else etc.
});

$(document).on('change', 'select#talismanSkill2vSelect', function() {
    console.log($(this).val()); // the selected options’s value

    // if you want to do stuff based on the OPTION element:
    var opt = $(this).val();
    updateurl('12', opt);
    displayData();
    // use switch or if/else etc.
});

function displayData() {
// grap parameters from URL
	helmetID = getUrlParameter('1'); vambracesID = getUrlParameter('2'); armorID = getUrlParameter('3'); waistID = getUrlParameter('4'); greavesID = getUrlParameter('5'); necklaceID = getUrlParameter('6'); ringID = getUrlParameter('7'); talismanID = getUrlParameter('8'); talismanSkill1ID = getUrlParameter('9'); talismanSkill1vID = getUrlParameter('10'); talismanSkill2ID = getUrlParameter('11'); talismanSkill2vID = getUrlParameter('12');
// get armor
	storeArmor();
// write HTML to IDs if URL parameters are VALID
	if (typeof helmet[0] !== 'undefined') {
		helmetType = helmet[0].data[3];
		document.getElementById("helmetImg").innerHTML = '<img src="../images/item/'+helmet[0].data[13]+'.png">';
		document.getElementById("helmet").innerHTML = helmet[0].data[1];
		document.getElementById("helmetSkills").innerHTML = ''+
		'<span class="'+helmet[0].data[38]+' skill'+helmet[0].data[39]+'">'+translate(helmet[0].data[38])+': <span class="skillamount">'+helmet[0].data[39]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+helmet[0].data[40]+' skill'+helmet[0].data[41]+'">'+translate(helmet[0].data[40])+': <span class="skillamount">'+helmet[0].data[41]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+helmet[0].data[42]+' skill'+helmet[0].data[43]+'">'+translate(helmet[0].data[42])+': <span class="skillamount">'+helmet[0].data[43]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+helmet[0].data[44]+' skill'+helmet[0].data[45]+'">'+translate(helmet[0].data[44])+': <span class="skillamount">'+helmet[0].data[45]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+helmet[0].data[46]+' skill'+helmet[0].data[47]+'">'+translate(helmet[0].data[46])+': <span class="skillamount">'+helmet[0].data[47]+'</span></span>';
// calculate and output mosaic slots
		var helmetMosaic = "";
		for (var i = helmet[0].data[5] - 1; i >= 0; i--) {helmetMosaic += "o";};
		document.getElementById("helmetMosaic").innerHTML = helmetMosaic;
	};
// write HTML to IDs if URL Parameters are VALID
	if (typeof vambraces[0] !== 'undefined') {
		vambracesType = vambraces[0].data[3];
		document.getElementById("vambracesImg").innerHTML = '<img src="../images/item/'+vambraces[0].data[13]+'.png">';
		document.getElementById("vambraces").innerHTML = vambraces[0].data[1];
		document.getElementById("vambracesSkills").innerHTML = ''+
		'<span class="'+vambraces[0].data[38]+' skill'+vambraces[0].data[39]+'">'+translate(vambraces[0].data[38])+': <span class="skillamount">'+vambraces[0].data[39]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+vambraces[0].data[40]+' skill'+vambraces[0].data[41]+'">'+translate(vambraces[0].data[40])+': <span class="skillamount">'+vambraces[0].data[41]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+vambraces[0].data[42]+' skill'+vambraces[0].data[43]+'">'+translate(vambraces[0].data[42])+': <span class="skillamount">'+vambraces[0].data[43]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+vambraces[0].data[44]+' skill'+vambraces[0].data[45]+'">'+translate(vambraces[0].data[44])+': <span class="skillamount">'+vambraces[0].data[45]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+vambraces[0].data[46]+' skill'+vambraces[0].data[47]+'">'+translate(vambraces[0].data[46])+': <span class="skillamount">'+vambraces[0].data[47]+'</span></span>';
// calculate and output mosaic slots
		var vambracesMosaic = "";
		for (var i = vambraces[0].data[5] - 1; i >= 0; i--) {vambracesMosaic += "o";};
		document.getElementById("vambracesMosaic").innerHTML = vambracesMosaic;
	};
// write HTML to IDs if URL Parameters are VALID
	if (typeof armor[0] !== 'undefined') {
		armorType = armor[0].data[3];
		document.getElementById("armorImg").innerHTML = '<img src="../images/item/'+armor[0].data[13]+'.png">';
		document.getElementById("armor").innerHTML = armor[0].data[1];
		document.getElementById("armorSkills").innerHTML = ''+
		'<span class="'+armor[0].data[38]+' skill'+armor[0].data[39]+'">'+translate(armor[0].data[38])+': <span class="skillamount">'+armor[0].data[39]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+armor[0].data[40]+' skill'+armor[0].data[41]+'">'+translate(armor[0].data[40])+': <span class="skillamount">'+armor[0].data[41]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+armor[0].data[42]+' skill'+armor[0].data[43]+'">'+translate(armor[0].data[42])+': <span class="skillamount">'+armor[0].data[43]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+armor[0].data[44]+' skill'+armor[0].data[45]+'">'+translate(armor[0].data[44])+': <span class="skillamount">'+armor[0].data[45]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+armor[0].data[46]+' skill'+armor[0].data[47]+'">'+translate(armor[0].data[46])+': <span class="skillamount">'+armor[0].data[47]+'</span></span>';
// calculate and output mosaic slots
		var armorMosaic = "";
		for (var i = armor[0].data[5] - 1; i >= 0; i--) {armorMosaic += "o";};
		document.getElementById("armorMosaic").innerHTML = armorMosaic;
	};
// write HTML to IDs if URL Parameters are VALID
	if (typeof waist[0] !== 'undefined') {
		waistType = waist[0].data[3];
		document.getElementById("waistImg").innerHTML = '<img src="../images/item/'+waist[0].data[13]+'.png">';
		document.getElementById("waist").innerHTML = waist[0].data[1];
		document.getElementById("waistSkills").innerHTML = ''+
		'<span class="'+waist[0].data[38]+' skill'+waist[0].data[39]+'">'+translate(waist[0].data[38])+': <span class="skillamount">'+waist[0].data[39]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+waist[0].data[40]+' skill'+waist[0].data[41]+'">'+translate(waist[0].data[40])+': <span class="skillamount">'+waist[0].data[41]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+waist[0].data[42]+' skill'+waist[0].data[43]+'">'+translate(waist[0].data[42])+': <span class="skillamount">'+waist[0].data[43]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+waist[0].data[44]+' skill'+waist[0].data[45]+'">'+translate(waist[0].data[44])+': <span class="skillamount">'+waist[0].data[45]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+waist[0].data[46]+' skill'+waist[0].data[47]+'">'+translate(waist[0].data[46])+': <span class="skillamount">'+waist[0].data[47]+'</span></span>';
// calculate and output mosaic slots
		var waistMosaic = "";
		for (var i = waist[0].data[5] - 1; i >= 0; i--) {waistMosaic += "o";};
		document.getElementById("waistMosaic").innerHTML = waistMosaic;
	};
// write HTML to IDs if URL Parameters are VALID
	if (typeof greaves[0] !== 'undefined') {
		greavesType = greaves[0].data[3];
		document.getElementById("greavesImg").innerHTML = '<img src="../images/item/'+greaves[0].data[13]+'.png">';
		document.getElementById("greaves").innerHTML = greaves[0].data[1];
		document.getElementById("greavesSkills").innerHTML = ''+
		'<span class="'+greaves[0].data[38]+' skill'+greaves[0].data[39]+'">'+translate(greaves[0].data[38])+': <span class="skillamount">'+greaves[0].data[39]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+greaves[0].data[40]+' skill'+greaves[0].data[41]+'">'+translate(greaves[0].data[40])+': <span class="skillamount">'+greaves[0].data[41]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+greaves[0].data[42]+' skill'+greaves[0].data[43]+'">'+translate(greaves[0].data[42])+': <span class="skillamount">'+greaves[0].data[43]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+greaves[0].data[44]+' skill'+greaves[0].data[45]+'">'+translate(greaves[0].data[44])+': <span class="skillamount">'+greaves[0].data[45]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+greaves[0].data[46]+' skill'+greaves[0].data[47]+'">'+translate(greaves[0].data[46])+': <span class="skillamount">'+greaves[0].data[47]+'</span></span>';
// calculate and output mosaic slots
		var greavesMosaic = "";
		for (var i = greaves[0].data[5] - 1; i >= 0; i--) {greavesMosaic += "o";};
		document.getElementById("greavesMosaic").innerHTML = greavesMosaic;
	};
// write HTML to IDs if URL Parameters are VALID
	if (typeof necklace[0] !== 'undefined') {
		document.getElementById("necklaceImg").innerHTML = '<img src="../images/item/'+necklace[0].data[6]+'.png">';
		document.getElementById("necklace").innerHTML = necklace[0].data[1];
		document.getElementById("necklaceSkills").innerHTML = 'Attack: '+necklace[0].data[9]+'&nbsp;&nbsp;<span class="no'+necklace[0].data[10]+'">Defense: '+necklace[0].data[10]+'&nbsp;&nbsp;</span><span class="no'+necklace[0].data[11]+'">Critical Rate: '+necklace[0].data[11]+'&nbsp;&nbsp;</span><span class="no'+necklace[0].data[12]+'">Water Atk: '+necklace[0].data[12]+'&nbsp;&nbsp;</span><span class="no'+necklace[0].data[13]+'">Fire Atk: '+necklace[0].data[13]+'&nbsp;&nbsp;</span><span class="no'+necklace[0].data[14]+'">Thunder Atk: '+necklace[0].data[14]+'&nbsp;&nbsp;</span><span class="no'+necklace[0].data[15]+'">Dragon Atk: '+necklace[0].data[15]+'&nbsp;&nbsp;</span><span class="no'+necklace[0].data[16]+'">Ice Atk: '+necklace[0].data[16]+'</span>';
	};
// write HTML to IDs if URL Parameters are VALID
	if (typeof ring[0] !== 'undefined') {
		document.getElementById("ringImg").innerHTML = '<img src="../images/item/'+ring[0].data[6]+'.png">';
		document.getElementById("ring").innerHTML = ring[0].data[1];
		document.getElementById("ringSkills").innerHTML = '<span class="no'+ring[0].data[10]+'">Defense: '+ring[0].data[10]+'&nbsp;&nbsp;</span><span class="no'+ring[0].data[11]+'">Critical Rate: '+ring[0].data[11]+'&nbsp;&nbsp;</span><span class="no'+ring[0].data[20]+'">Water Def: '+ring[0].data[20]+'&nbsp;&nbsp;</span><span class="no'+ring[0].data[21]+'">Fire Def: '+ring[0].data[21]+'&nbsp;&nbsp;</span><span class="no'+ring[0].data[22]+'">Thunder Def: '+ring[0].data[22]+'&nbsp;&nbsp;</span><span class="no'+ring[0].data[23]+'">Dragon Def: '+ring[0].data[23]+'&nbsp;&nbsp;</span><span class="no'+ring[0].data[24]+'">Ice Def: '+ring[0].data[24]+'</span>';
	};
// write HTML to IDs if URL Parameters are VALID
	if (typeof talisman[0] !== 'undefined') {
		document.getElementById("talismanImg").innerHTML = '<img src="../images/item/'+talisman[0].data[6]+'.png">';
		document.getElementById("talisman").innerHTML = talisman[0].data[1];
	};
	if (typeof talismanSkill1ID !== 'undefined') {
		document.getElementById("talismanSkills1").innerHTML = skillNames[parseInt(talismanSkill1ID)]+': ';
	};
	if (typeof talismanSkill1vID !== 'undefined') {
		document.getElementById("talismanSkills1Value").innerHTML = talismanSkill1vID;
	};
	if (typeof talismanSkill2ID !== 'undefined') {
		document.getElementById("talismanSkills2").innerHTML = skillNames[parseInt(talismanSkill2ID)]+': ';
	};
	if (typeof talismanSkill2vID !== 'undefined') {
		document.getElementById("talismanSkills2Value").innerHTML = talismanSkill2vID;
	};
// checks armor type of all armors by adding the strings together and checking them for differences. If the set is not complete it will not output as error, rather the border will be black
	var sumType = "";
	sumType = helmetType+vambracesType+armorType+waistType+greavesType;
	console.log("armor types: "+sumType);
	if (sumType == "00000") {console.log('Blademaster'); document.getElementById('typecolor').style.borderColor = '#8aff2b';} 
	if (sumType == "11111") {console.log('Gunner'); document.getElementById('typecolor').style.borderColor = '#5cbcfe';}
	if (sumType == "00001" || sumType == "00010" || sumType == "00011" || sumType == "00100" || sumType == "00101" || sumType == "00110" || sumType == "00111" || sumType == "01000" || sumType == "01001" || sumType == "01010" || sumType == "01011" || sumType == "01100" || sumType == "01101" || sumType == "01110" || sumType == "01111" || sumType == "10000" || sumType == "10001" || sumType == "10010" || sumType == "10011" || sumType == "10100" || sumType == "10101" || sumType == "10110" || sumType == "10111" || sumType == "11000" || sumType == "11001" || sumType == "11010" || sumType == "11011" || sumType == "11100" || sumType == "11101" || sumType == "11110") {console.log('not same type'); document.getElementById('typecolor').style.borderColor = '#f44336';}
// output skill values and get passive skill activation with getPassive(sname, value)
		var out = '';
	for (var i = 0; i < skillNames.length; i++) {
		out += '<tr class="skill'+skills[skillNames[i]]+'"><td>'+skillNames[i]+':</td><td>'+skills[skillNames[i]]+'</td><td>'+getPassive(skillNames[i], skills[skillNames[i]])+'</td></tr>';
		document.getElementById("skillTotals").innerHTML = out;
	};
	var arr = necklaceArray;
	var necklaceSelection = '<option value="" disabled selected>Necklace</option>';
	for(i = 0; i < arr.length; i ++) {
	necklaceSelection += ''+
	'<option value="'+arr[i].data[0]+'" data-icon="../images/item/'+arr[i].data[6]+'.png" class="left">'+arr[i].data[1]+'</option>';
	};
	document.getElementById("necklaceSelect").innerHTML = necklaceSelection;
	var arr = ringArray;
	var ringSelection = '<option value="" disabled selected>Ring</option>';
	for(i = 0; i < arr.length; i ++) {
	ringSelection += ''+
	'<option value="'+arr[i].data[0]+'" data-icon="../images/item/'+arr[i].data[6]+'.png" class="left">'+arr[i].data[1]+'</option>';
	};
	document.getElementById("ringSelect").innerHTML = ringSelection;
	var arr = talismanArray;
	var talismanSelection = '<option value="" disabled selected>Talisman</option>';
	for(i = 0; i < arr.length; i ++) {
	talismanSelection += ''+
	'<option value="'+arr[i].data[0]+'" data-icon="../images/item/'+arr[i].data[6]+'.png" class="left">'+arr[i].data[1]+'</option>';
	};
	document.getElementById("talismanSelect").innerHTML = talismanSelection;
	var talismanSkill1Selection = '<option value="" disabled selected>Skill 1</option>';
	for(i = 0; i < skillNames.length; i ++) {
	talismanSkill1Selection += ''+
	'<option value="'+i+'">'+skillNames[i]+'</option>';
	};
	document.getElementById("talismanSkill1Select").innerHTML = talismanSkill1Selection;
	var talismanSkill2Selection = '<option value="" disabled selected>Skill 2</option>';
	for(i = 0; i < skillNames.length; i ++) {
	talismanSkill2Selection += ''+
	'<option value="'+i+'">'+skillNames[i]+'</option>';
	};
	document.getElementById("talismanSkill2Select").innerHTML = talismanSkill2Selection;
};

function filter(aID) {
// initialize array
	var arr = armorArray;
// grep filter for ID
	filterArmor = $.grep(arr, function(element, index) {return element.iID == aID;});
// output new array
	return filterArmor;
};

function filterj(aID) {
// initialize array
	var arr = jewelryArray;
// grep filter for ID
	filterJewelry = $.grep(arr, function(element, index) {return element.iID == aID;});
// output new array
	return filterJewelry;
};

function storeArmor() {
// create arrays with filter(aID)
	helmet = filter(helmetID); vambraces = filter(vambracesID); armor = filter(armorID); waist = filter(waistID); greaves = filter(greavesID); necklace = filterj(necklaceID); ring = filterj(ringID); talisman = filterj(talismanID);
// clear skills to recalculate on armor addition
	skills = { "Ambush":0, "Anti-bacterial":0, "Attack":0, "Butterfly Dance":0, "Cold Res":0, "Constitution":0, "Handicraft":0, "Crit Draw":0, "Defense":0, "Destroyer":0, "Dragon Atk":0, "Eating":0, "Evade Dist":0, "Evasion":0, "Expert":0, "FastCharge":0, "Fencing":0, "Fire Atk":0, "Fire Res":0, "Gluttony":0, "Guard":0, "Guard Up":0, "Guts":0, "Health":0, "Hearing":0, "Heat Res":0, "Herb King":0, "Hormone":0, "Hunger":0, "Ice Atk":0, "Ice Res":0, "Violent Strike":0, "KO":0, "Loading":0, "Mud/Snow":0, "Normal Up":0, "Paralysis":0, "Pellet Up":0, "Perception":0, "Pierce Up":0, "Poison":0, "Potential":0, "Protection":0, "Psychic":0, "Rec Speed":0, "Recoil":0, "Reload Spd":0, "Resilience":0, "Sense":0, "Sharpener":0, "Sharpness":0, "Sleep":0, "SpeedSetup":0, "Spirit":0, "Stam Recov":0, "Status":0, "Stun":0, "Survivor":0, "Tenderizer":0, "Bleeding":0, "Thunder Res":0, "ThunderAtk":0, "Tremor Res":0, "Tripping Power":0, "Unscathed":0, "Water Atk":0, "Wide-Range":0, "Wind Res":0, "Sleep C+":0, "Stamina":0, "Hunter Life":0, "Water Res":0, "Dragon Res":0, "Rec Level":0, "PowerEater":0, "BBQ Expert":0, "Rapid Fire":0, "Maestro":0, "Artillery":0, "Crustacians Hunter":0, "Bird Dragons Hunter":0, "Dragons Hunter":0};
// if URL parameter exists parse new array values as integers and add to skills array
	if (typeof helmet[0] !== 'undefined') {skills[translate(helmet[0].data[38])] = skills[translate(helmet[0].data[38])] + parseInt(helmet[0].data[39]); skills[translate(helmet[0].data[40])] = skills[translate(helmet[0].data[40])] + parseInt(helmet[0].data[41]); skills[translate(helmet[0].data[42])] = skills[translate(helmet[0].data[42])] + parseInt(helmet[0].data[43]); skills[translate(helmet[0].data[44])] = skills[translate(helmet[0].data[44])] + parseInt(helmet[0].data[45]); skills[translate(helmet[0].data[46])] = skills[translate(helmet[0].data[46])] + parseInt(helmet[0].data[47]);};
	if (typeof vambraces[0] !== 'undefined') {skills[translate(vambraces[0].data[38])] = skills[translate(vambraces[0].data[38])] + parseInt(vambraces[0].data[39]); skills[translate(vambraces[0].data[40])] = skills[translate(vambraces[0].data[40])] + parseInt(vambraces[0].data[41]); skills[translate(vambraces[0].data[42])] = skills[translate(vambraces[0].data[42])] + parseInt(vambraces[0].data[43]); skills[translate(vambraces[0].data[44])] = skills[translate(vambraces[0].data[44])] + parseInt(vambraces[0].data[45]); skills[translate(vambraces[0].data[46])] = skills[translate(vambraces[0].data[46])] + parseInt(vambraces[0].data[47]);};
	if (typeof armor[0] !== 'undefined') {skills[translate(armor[0].data[38])] = skills[translate(armor[0].data[38])] + parseInt(armor[0].data[39]); skills[translate(armor[0].data[40])] = skills[translate(armor[0].data[40])] + parseInt(armor[0].data[41]); skills[translate(armor[0].data[42])] = skills[translate(armor[0].data[42])] + parseInt(armor[0].data[43]); skills[translate(armor[0].data[44])] = skills[translate(armor[0].data[44])] + parseInt(armor[0].data[45]); skills[translate(armor[0].data[46])] = skills[translate(armor[0].data[46])] + parseInt(armor[0].data[47]);};
	if (typeof waist[0] !== 'undefined') {skills[translate(waist[0].data[38])] = skills[translate(waist[0].data[38])] + parseInt(waist[0].data[39]); skills[translate(waist[0].data[40])] = skills[translate(waist[0].data[40])] + parseInt(waist[0].data[41]); skills[translate(waist[0].data[42])] = skills[translate(waist[0].data[42])] + parseInt(waist[0].data[43]); skills[translate(waist[0].data[44])] = skills[translate(waist[0].data[44])] + parseInt(waist[0].data[45]); skills[translate(waist[0].data[46])] = skills[translate(waist[0].data[46])] + parseInt(waist[0].data[47]);};
	if (typeof greaves[0] !== 'undefined') {skills[translate(greaves[0].data[38])] = skills[translate(greaves[0].data[38])] + parseInt(greaves[0].data[39]); skills[translate(greaves[0].data[40])] = skills[translate(greaves[0].data[40])] + parseInt(greaves[0].data[41]); skills[translate(greaves[0].data[42])] = skills[translate(greaves[0].data[42])] + parseInt(greaves[0].data[43]); skills[translate(greaves[0].data[44])] = skills[translate(greaves[0].data[44])] + parseInt(greaves[0].data[45]); skills[translate(greaves[0].data[46])] = skills[translate(greaves[0].data[46])] + parseInt(greaves[0].data[47]);};
	if (typeof talismanSkill1ID !== 'undefined' && talismanSkill1vID !== 'undefined') {skills[translate(skillNames[parseInt(talismanSkill1ID)])] = skills[translate(skillNames[parseInt(talismanSkill1ID)])] + parseInt(talismanSkill1vID);};
	if (typeof talismanSkill2ID !== 'undefined' && talismanSkill2vID !== 'undefined') {skills[translate(skillNames[parseInt(talismanSkill2ID)])] = skills[translate(skillNames[parseInt(talismanSkill2ID)])] + parseInt(talismanSkill2vID);};
};

function getPassive(sname, value) {
// check skill value and store passive if it meets the criteria
	passive='';
	if (sname=='Ambush'&&value>=10) {passive='Assassin Tech +1';};
	if (sname=='Ambush'&&value>=15) {passive='Assassin Tech +2';};
	if (sname=='Anti-bacterial'&&value>=10) {passive='Bacteria Cancel';};
	if (sname=='Attack'&&value>=10) {passive='Attack Up (S)';};
	if (sname=='Attack'&&value>=15) {passive='Attack Up (M)';};
	if (sname=='Attack'&&value>=20) {passive='Attack Up (L)';};
	if (sname=='Attack'&&value>=25) {passive='Attack Up (XL)';};
	if (sname=='Attack'&&value>=30) {passive='Attack Up (XXL)';};
	if (sname=='Attack'&&value<=-10) {passive='Attack Down (S)';};
	if (sname=='Attack'&&value<=-15) {passive='Attack Down (M)';};
	if (sname=='Attack'&&value<=-20) {passive='Attack Down (L)';};
	if (sname=='Attack'&&value<=-25) {passive='Attack Down (XL)';};
	if (sname=='Butterfly Dance'&&value>=10) {passive='Butterfly Form';};
	if (sname=='Cold Res'&&value>=10) {passive='Cold Cancel';};
	if (sname=='Constitution'&&value>=10) {passive='Constitution +1';};
	if (sname=='Constitution'&&value>=15) {passive='Constitution +2';};
	if (sname=='Constitution'&&value>=20) {passive='Constitution +3';};
	if (sname=='Constitution'&&value<=-10) {passive='Constitution -1';};
	if (sname=='Constitution'&&value<=-15) {passive='Constitution -2';};
	if (sname=='Handicraft'&&value>=10) {passive='Sharpness +1';};
	if (sname=='Crit Draw'&&value>=10) {passive='Critical Draw';};
	if (sname=='Crit Draw'&&value>=15) {passive='Critical Draw Max';};
	if (sname=='Defense'&&value>=10) {passive='Defense Up (S)';};
	if (sname=='Defense'&&value>=15) {passive='Defense Up (M)';};
	if (sname=='Defense'&&value>=20) {passive='Defense Up (L)';};
	if (sname=='Defense'&&value>=25) {passive='Defense Up (XL)';};
	if (sname=='Defense'&&value>=30) {passive='Defense Up (XXL)';};
	if (sname=='Defense'&&value<=-10) {passive='Defense Down (S)';};
	if (sname=='Defense'&&value<=-15) {passive='Defense Down (M)';};
	if (sname=='Defense'&&value<=-20) {passive='Defense Down (L)';};
	if (sname=='Defense'&&value<=-25) {passive='Defense Down (XL)';};
	if (sname=='Destroyer'&&value>=10) {passive='Partbreaker';};
	if (sname=='Destroyer'&&value>=15) {passive='Destruction God';};
	if (sname=='Dragon Atk'&&value>=10) {passive='Dragon Atk +1';};
	if (sname=='Dragon Atk'&&value>=15) {passive='Dragon Atk +2';};
	if (sname=='Dragon Atk'&&value>=20) {passive='Dragon Atk +3';};
	if (sname=='Dragon Atk'&&value<=-10) {passive='Dragon Atk Down';};
	if (sname=='Eating'&&value>=10) {passive='Speed Eating';};
	if (sname=='Eating'&&value<=-10) {passive='Slow Eater';};
	if (sname=='Evade Dist'&&value>=10) {passive='Evade Dist +1';};
	if (sname=='Evade Dist'&&value>=15) {passive='Evade Dist +2';};
	if (sname=='Evasion'&&value>=10) {passive='Evasion +1';};
	if (sname=='Evasion'&&value>=15) {passive='Evasion +2';};
	if (sname=='Evasion'&&value>=20) {passive='Evasion +3';};
	if (sname=='Expert'&&value>=10) {passive='Critical Eye +1';};
	if (sname=='Expert'&&value>=15) {passive='Critical Eye +2';};
	if (sname=='Expert'&&value>=20) {passive='Critical Eye +3';};
	if (sname=='Expert'&&value>=25) {passive='Critical Eye +4';};
	if (sname=='Expert'&&value>=30) {passive='Critical Eye +5';};
	if (sname=='Expert'&&value<=-10) {passive='Critical Eye -1';};
	if (sname=='Expert'&&value<=-15) {passive='Critical Eye -2';};
	if (sname=='Expert'&&value<=-20) {passive='Critical Eye -3';};
	if (sname=='Expert'&&value<=-25) {passive='Critical Eye -4';};
	if (sname=='FastCharge'&&value>=10) {passive='Concentrate';};
	if (sname=='FastCharge'&&value>=15) {passive='Focus';};
	if (sname=='FastCharge'&&value>=20) {passive='Attentive';};
	if (sname=='FastCharge'&&value<=-10) {passive='Distraction';};
	if (sname=='Fencing'&&value>=10) {passive="Mind's Eye";};
	if (sname=='Fire Atk'&&value>=10) {passive='Fire Atk +1';};
	if (sname=='Fire Atk'&&value>=15) {passive='Fire Atk +2';};
	if (sname=='Fire Atk'&&value>=20) {passive='Fire Atk +3';};
	if (sname=='Fire Atk'&&value<=-10) {passive='Fire Atk Down';};
	if (sname=='Fire Res'&&value>=10) {passive='Fire Res +1';};
	if (sname=='Fire Res'&&value>=15) {passive='Fire Res +2';};
	if (sname=='Fire Res'&&value>=20) {passive='Fire Res +3';};
	if (sname=='Fire Res'&&value<=-10) {passive='Fire Res Down';};
	if (sname=='Gluttony'&&value>=10) {passive='Gourmand';};
	if (sname=='Guard'&&value>=10) {passive='Guard +1';};
	if (sname=='Guard'&&value>=15) {passive='Guard +2';};
	if (sname=='Guard'&&value>=20) {passive='Guard +3';};
	if (sname=='Guard Up'&&value>=10) {passive='Guard Boost';};
	if (sname=='Guts'&&value>=10) {passive='Guts';};
	if (sname=='Health'&&value>=10) {passive='Health +1';};
	if (sname=='Health'&&value>=15) {passive='Health +2';};
	if (sname=='Health'&&value>=20) {passive='Health +3';};
	if (sname=='Health'&&value>=25) {passive='Health +4';};
	if (sname=='Health'&&value>=30) {passive='Health +5';};
	if (sname=='Health'&&value<=-10) {passive='Health -1';};
	if (sname=='Health'&&value<=-15) {passive='Health -2';};
	if (sname=='Health'&&value<=-20) {passive='Health -3';};
	if (sname=='Health'&&value<=-25) {passive='Health -4';};
	if (sname=='Hearing'&&value>=10) {passive='Earplugs';};
	if (sname=='Hearing'&&value>=20) {passive='HG Earplugs';};
	if (sname=='Heat Res'&&value>=10) {passive='Heat Cancel';};
	if (sname=='Herb King'&&value>=10) {passive='Herbal Daren';};
	if (sname=='Hormone'&&value>=10) {passive='Attract';};
	if (sname=='Hunger'&&value>=10) {passive='Halve Hunger';};
	if (sname=='Hunger'&&value>=15) {passive='Negate Hunger';};
	if (sname=='Hunger'&&value<=-10) {passive='Raise Hunger';};
	if (sname=='Ice Atk'&&value>=10) {passive='Ice Itk +1';};
	if (sname=='Ice Atk'&&value>=15) {passive='Ice Atk +2';};
	if (sname=='Ice Atk'&&value>=20) {passive='Ice Atk +3';};
	if (sname=='Ice Atk'&&value<=-10) {passive='Ice Atk Down';};
	if (sname=='Ice Res'&&value>=10) {passive='Ice Res +1';};
	if (sname=='Ice Res'&&value>=15) {passive='Ice Res +2';};
	if (sname=='Ice Res'&&value>=20) {passive='Ice Res +3';};
	if (sname=='Ice Res'&&value<=-10) {passive='Ice Res Down';};
	if (sname=='Violent Strike'&&value>=10) {passive='Violent Strike';};
	if (sname=='KO'&&value>=10) {passive='Knockout King';};
	if (sname=='Loading'&&value>=10) {passive='Load Up';};
	if (sname=='Mud/Snow'&&value>=10) {passive='Negate Mud/Snow';};
	if (sname=='Normal Up'&&value>=10) {passive='Normal/Rapid Up';};
	if (sname=='Paralysis'&&value>=10) {passive='Negate Paralysis';};
	if (sname=='Paralysis'&&value<=-10) {passive='Double Paralysis';};
	if (sname=='Pellet Up'&&value>=10) {passive='Pellet/Spread Up';};
	if (sname=='Perception'&&value>=10) {passive='Capture Guru';};
	if (sname=='Pierce Up'&&value>=10) {passive='Pierce/Pierce Up';};
	if (sname=='Poison'&&value>=10) {passive='Halve Poison';};
	if (sname=='Poison'&&value>=15) {passive='Negate Poison';};
	if (sname=='Poison'&&value<=-10) {passive='Double Poison';};
	if (sname=='Potential'&&value>=10) {passive='Adrenaline +1';};
	if (sname=='Potential'&&value>=15) {passive='Adrenaline +2';};
	if (sname=='Potential'&&value>=20) {passive='Adrenaline +3';};
	if (sname=='Potential'&&value<=-10) {passive='Worrywart';};
	if (sname=='Protection'&&value>=10) {passive='Holy Blessing';};
	if (sname=='Protection'&&value>=15) {passive='Divine Blessing';};
	if (sname=='Protection'&&value<=-10) {passive='Evil Blessing';};
	if (sname=='Protection'&&value<=-15) {passive='Demonic Blessing';};
	if (sname=='Psychic'&&value>=10) {passive='Detect';};
	if (sname=='Psychic'&&value>=15) {passive='Autotracker';};
	if (sname=='Rec Speed'&&value>=10) {passive='Rec Speed +1';};
	if (sname=='Rec Speed'&&value>=15) {passive='Rec Speed +2';};
	if (sname=='Rec Speed'&&value>=20) {passive='Rec Speed +3';};
	if (sname=='Rec Speed'&&value<=-10) {passive='Rec Speed -1';};
	if (sname=='Rec Speed'&&value<=-15) {passive='Rec Speed -2 ';};
	if (sname=='Rec Speed'&&value<=-20) {passive='Rec Speed -3';};
	if (sname=='Recoil'&&value>=10) {passive='Recoil Down +1';};
	if (sname=='Recoil'&&value>=15) {passive='Recoil Down +2';};
	if (sname=='Recoil'&&value<=-10) {passive='Recoil Up';};
	if (sname=='Reload Spd'&&value>=10) {passive='Reload Spd +1';};
	if (sname=='Reload Spd'&&value>=15) {passive='Reload Spd +2';};
	if (sname=='Reload Spd'&&value>=20) {passive='Reload Spd +3';};
	if (sname=='Reload Spd'&&value<=-10) {passive='Reload Spd -1';};
	if (sname=='Reload Spd'&&value<=-15) {passive='Reload Spd -2';};
	if (sname=='Resilience'&&value>=10) {passive='See Through +1';};
	if (sname=='Resilience'&&value>=15) {passive='See Through +2';};
	if (sname=='Sense'&&value>=10) {passive='Sneak';};
	if (sname=='Sense'&&value<=-10) {passive='Taunt';};
	if (sname=='Sharpener'&&value>=10) {passive='Speed Sharpening';};
	if (sname=='Sharpener'&&value>=15) {passive='High Speed Sharpening';};
	if (sname=='Sharpener'&&value<=-10) {passive='Slow Sharpening';};
	if (sname=='Sharpness'&&value>=10) {passive='Sharp';};
	if (sname=='Sharpness'&&value>=15) {passive='Razor Sharp';};
	if (sname=='Sharpness'&&value<=-10) {passive='Blunt Edge';};
	if (sname=='Sleep'&&value>=10) {passive='Negate Sleep';};
	if (sname=='Sleep'&&value<=-10) {passive='Double Sleep';};
	if (sname=='SpeedSetup'&&value>=10) {passive='Trap Master';};
	if (sname=='Spirit'&&value>=10) {passive='Challenger +1';};
	if (sname=='Spirit'&&value>=15) {passive='Challenger +2';};
	if (sname=='Stam Recov'&&value>=10) {passive='Stam Recov +1';};
	if (sname=='Stam Recov'&&value>=15) {passive='Stam Recov +2';};
	if (sname=='Stam Recov'&&value>=20) {passive='Stam Recov +3';};
	if (sname=='Stam Recov'&&value<=-10) {passive='Stam Recov -1';};
	if (sname=='Stam Recov'&&value<=-15) {passive='Stam Recov -2';};
	if (sname=='Status'&&value>=10) {passive='Status Atk +1';};
	if (sname=='Status'&&value>=15) {passive='Status Atk +2';};
	if (sname=='Status'&&value>=20) {passive='Status Atk +3';};
	if (sname=='Status'&&value<=-10) {passive='Status Atk Down';};
	if (sname=='Stun'&&value>=10) {passive='Halve Stun';};
	if (sname=='Stun'&&value>=15) {passive='Negate Stun';};
	if (sname=='Stun'&&value<=-10) {passive='Double Stun';};
	if (sname=='Survivor'&&value>=10) {passive='Fortify';};
	if (sname=='Tenderizer'&&value>=10) {passive='Weakness Exploit';};
	if (sname=='Bleeding'&&value>=10) {passive='Negate Bleeding';};
	if (sname=='Thunder Res'&&value>=10) {passive='Thunder Res +1';};
	if (sname=='Thunder Res'&&value>=15) {passive='Thunder Res +2';};
	if (sname=='Thunder Res'&&value>=20) {passive='Thunder Res +3';};
	if (sname=='Thunder Res'&&value<=-10) {passive='Thunder Res Down';};
	if (sname=='ThunderAtk'&&value>=10) {passive='Thunder Atk +1';};
	if (sname=='ThunderAtk'&&value>=15) {passive='Thunder Atk +2';};
	if (sname=='ThunderAtk'&&value>=20) {passive='Thunder Atk +3';};
	if (sname=='ThunderAtk'&&value<=-10) {passive='Thunder Atk Down';};
	if (sname=='Tremor Res'&&value>=10) {passive='Tremor Res';};
	if (sname=='Tripping Power'&&value>=10) {passive='Tripping Power';};
	if (sname=='Unscathed'&&value>=10) {passive='Peak Performance';};
	if (sname=='Water Atk'&&value>=10) {passive='Water Atk +1';};
	if (sname=='Water Atk'&&value>=15) {passive='Water Atk +2';};
	if (sname=='Water Atk'&&value>=20) {passive='Water Atk +3';};
	if (sname=='Water Atk'&&value<=-10) {passive='Water Atk Down';};
	if (sname=='Wide-Range'&&value>=10) {passive='Wide-Range +1';};
	if (sname=='Wide-Range'&&value>=15) {passive='Wide-Range +2';};
	if (sname=='Wide-Range'&&value>=20) {passive='Wide-Range +3';};
	if (sname=='Wind Res'&&value>=10) {passive='Windproof (Lo)';};
	if (sname=='Wind Res'&&value>=15) {passive='Windproof (Hi)';};
	if (sname=='Wind Res'&&value>=20) {passive='Dragon Windproof';};
	if (sname=='Sleep C+'&&value>=10) {passive='Use Sleep Coat';};
	if (sname=='Stamina'&&value>=10) {passive='Marathon Runner +1';};
	if (sname=='Stamina'&&value>=15) {passive='Marathon Runner +2';};
	if (sname=='Stamina'&&value<=-10) {passive='Short Sprinter';};
	if (sname=='Hunter Life'&&value>=10) {passive='Wilderness Survival';};
	if (sname=='Water Res'&&value>=10) {passive='Water Res +1';};
	if (sname=='Water Res'&&value>=15) {passive='Water Res +2';};
	if (sname=='Water Res'&&value>=20) {passive='Water Res +3';};
	if (sname=='Water Res'&&value<=-10) {passive='Water Res Down';};
	if (sname=='Dragon Res'&&value>=10) {passive='Dragon Res +1';};
	if (sname=='Dragon Res'&&value>=15) {passive='Dragon Res +2';};
	if (sname=='Dragon Res'&&value>=20) {passive='Dragon Res +3';};
	if (sname=='Dragon Res'&&value<=-10) {passive='Dragon Res Down';};
	if (sname=='Rec Level'&&value>=10) {passive='Recovery Up';};
	if (sname=='Rec Level'&&value>=15) {passive='Recovery Up Large';};
	if (sname=='Rec Level'&&value<=-10) {passive='Recovery Down';};
	if (sname=='PowerEater'&&value>=10) {passive='Alloy Stomach';};
	if (sname=='BBQ Expert'&&value>=10) {passive='BBQ Expert';};
	if (sname=='Rapid Fire'&&value>=10) {passive='Bonus Shot +1';};
	if (sname=='Maestro'&&value>=10) {passive='Horn Maestro';};
	if (sname=='Artillery'&&value>=10) {passive='Artillery Exptert';};
	if (sname=='Artillery'&&value>=15) {passive='Artillery God';};
	if (sname=='Crustacians Hunter'&&value>=10) {passive='Crustacians Killer';};
	if (sname=='Bird Dragons Hunter'&&value>=10) {passive='Bird Dragons Killer';};
	if (sname=='Dragons Hunter'&&value>=10) {passive='Dragons Killer';};
// output passive skill
	return passive
};