// initialize global variables
var armortype;
var filterArmor;
var helmet;
var vambraces;
var armor;
var waist;
var greaves;
var helmetID;
var vambracesID;
var armorID;
var waistID;
var greavesID;
var passive;
var helmetType;
var vambracesType;
var armorType;
var waistType;
var greavesType;
var skills = {	"Ambush":0,	"Anti-bacterial":0,	"Attack":0,	"Butterfly Dance":0,	"Cold Res":0,	"Constitution":0,	"Craftsman":0,	"Crit Draw":0,	"Defense":0,	"Destroyer":0,	"Dragon Atk":0,	"Eating":0,	"Evade Dist":0,	"Evasion":0,	"Expert":0,	"FastCharge":0,	"Fencing":0,	"Fire Atk":0,	"Fire Res":0,	"Gluttony":0,	"Guard":0,	"Guard Up":0,	"Guts":0,	"Health":0,	"Hearing":0,	"Heat Res":0,	"Herb King":0,	"Hormone":0,	"Hunger":0,	"Ice Atk":0,	"Ice Res":0,	"Knowing Technique":0,	"KO King":0,	"Loading":0,	"Mud/Snow":0,	"Normal Up":0,	"Paralysis":0,	"Pellet Up":0,	"Perception":0,	"Pierce Up":0,	"Poison":0,	"Potential":0,	"Protection":0,	"Psychic":0,	"Rec Speed":0,	"Recoil":0,	"Reload Spd":0,	"Resilience":0,	"Sense":0,	"Sharpener":0,	"Sharpness":0,	"Sleep":0,	"SpeedSetup":0,	"Spirit":0,	"Stam Recov":0,	"Status":0,	"Stun":0,	"Survivor":0,	"Tenderizer":0,	"Thorns":0,	"Thunder Res":0,	"ThunderAtk":0,	"Tremor Res":0,	"Tripping Power":0,	"Unscathed":0,	"Water Atk":0,	"Wide-Range":0,	"Wind Res":0,};
// need second array for "for" loop
var skillNames = ["Ambush",	"Anti-bacterial",	"Attack",	"Butterfly Dance",	"Cold Res",	"Constitution",	"Craftsman",	"Crit Draw",	"Defense",	"Destroyer",	"Dragon Atk",	"Eating",	"Evade Dist",	"Evasion",	"Expert",	"FastCharge",	"Fencing",	"Fire Atk",	"Fire Res",	"Gluttony",	"Guard",	"Guard Up",	"Guts",	"Health",	"Hearing",	"Heat Res",	"Herb King",	"Hormone",	"Hunger",	"Ice Atk",	"Ice Res",	"Knowing Technique",	"KO King",	"Loading",	"Mud/Snow",	"Normal Up",	"Paralysis",	"Pellet Up",	"Perception",	"Pierce Up",	"Poison",	"Potential",	"Protection",	"Psychic",	"Rec Speed",	"Recoil",	"Reload Spd",	"Resilience",	"Sense",	"Sharpener",	"Sharpness",	"Sleep",	"SpeedSetup",	"Spirit",	"Stam Recov",	"Status",	"Stun",	"Survivor",	"Tenderizer",	"Thorns",	"Thunder Res",	"ThunderAtk",	"Tremor Res",	"Tripping Power",	"Unscathed",	"Water Atk",	"Wide-Range",	"Wind Res"];

$(function() {
// display data
	displayData();
});

function displayData() {
// grap parameters from URL
	helmetID = getUrlParameter('1');
	vambracesID = getUrlParameter('2');
	armorID = getUrlParameter('3');
	waistID = getUrlParameter('4');
	greavesID = getUrlParameter('5');
// get armor
	storeArmor();
// write HTML to IDs if URL parameters are VALID
	if (typeof helmet[0] !== 'undefined') {
		helmetType = helmet[0].data[3];
		document.getElementById("helmetImg").innerHTML = '<img src="../images/item/'+helmet[0].data[13]+'.png">';
		document.getElementById("helmet").innerHTML = helmet[0].data[1];
		document.getElementById("helmetSkills").innerHTML = ''+
		'<span class="'+helmet[0].data[38]+' skill'+helmet[0].data[39]+'">'+helmet[0].data[38]+': <span class="skillamount">'+helmet[0].data[39]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+helmet[0].data[40]+' skill'+helmet[0].data[41]+'">'+helmet[0].data[40]+': <span class="skillamount">'+helmet[0].data[41]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+helmet[0].data[42]+' skill'+helmet[0].data[43]+'">'+helmet[0].data[42]+': <span class="skillamount">'+helmet[0].data[43]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+helmet[0].data[44]+' skill'+helmet[0].data[45]+'">'+helmet[0].data[44]+': <span class="skillamount">'+helmet[0].data[45]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+helmet[0].data[46]+' skill'+helmet[0].data[47]+'">'+helmet[0].data[46]+': <span class="skillamount">'+helmet[0].data[47]+'</span></span>';
// calculate and output mosaic slots
		var helmetMosaic = "";
		for (var i = helmet[0].data[5] - 1; i >= 0; i--) {
			helmetMosaic += "o";
		};
		document.getElementById("helmetMosaic").innerHTML = helmetMosaic;
	};
// write HTML to IDs if URL Parameters are VALID
	if (typeof vambraces[0] !== 'undefined') {
		vambracesType = vambraces[0].data[3];
		document.getElementById("vambracesImg").innerHTML = '<img src="../images/item/'+vambraces[0].data[13]+'.png">';
		document.getElementById("vambraces").innerHTML = vambraces[0].data[1];
		document.getElementById("vambracesSkills").innerHTML = ''+
		'<span class="'+vambraces[0].data[38]+' skill'+vambraces[0].data[39]+'">'+vambraces[0].data[38]+': <span class="skillamount">'+vambraces[0].data[39]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+vambraces[0].data[40]+' skill'+vambraces[0].data[41]+'">'+vambraces[0].data[40]+': <span class="skillamount">'+vambraces[0].data[41]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+vambraces[0].data[42]+' skill'+vambraces[0].data[43]+'">'+vambraces[0].data[42]+': <span class="skillamount">'+vambraces[0].data[43]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+vambraces[0].data[44]+' skill'+vambraces[0].data[45]+'">'+vambraces[0].data[44]+': <span class="skillamount">'+vambraces[0].data[45]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+vambraces[0].data[46]+' skill'+vambraces[0].data[47]+'">'+vambraces[0].data[46]+': <span class="skillamount">'+vambraces[0].data[47]+'</span></span>';
// calculate and output mosaic slots
		var vambracesMosaic = "";
		for (var i = vambraces[0].data[5] - 1; i >= 0; i--) {
			vambracesMosaic += "o";
		};
		document.getElementById("vambracesMosaic").innerHTML = vambracesMosaic;
	};
// write HTML to IDs if URL Parameters are VALID
	if (typeof armor[0] !== 'undefined') {
		armorType = armor[0].data[3];
		document.getElementById("armorImg").innerHTML = '<img src="../images/item/'+armor[0].data[13]+'.png">';
		document.getElementById("armor").innerHTML = armor[0].data[1];
		document.getElementById("armorSkills").innerHTML = ''+
		'<span class="'+armor[0].data[38]+' skill'+armor[0].data[39]+'">'+armor[0].data[38]+': <span class="skillamount">'+armor[0].data[39]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+armor[0].data[40]+' skill'+armor[0].data[41]+'">'+armor[0].data[40]+': <span class="skillamount">'+armor[0].data[41]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+armor[0].data[42]+' skill'+armor[0].data[43]+'">'+armor[0].data[42]+': <span class="skillamount">'+armor[0].data[43]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+armor[0].data[44]+' skill'+armor[0].data[45]+'">'+armor[0].data[44]+': <span class="skillamount">'+armor[0].data[45]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+armor[0].data[46]+' skill'+armor[0].data[47]+'">'+armor[0].data[46]+': <span class="skillamount">'+armor[0].data[47]+'</span></span>';
// calculate and output mosaic slots
		var armorMosaic = "";
		for (var i = armor[0].data[5] - 1; i >= 0; i--) {
			armorMosaic += "o";
		};
		document.getElementById("armorMosaic").innerHTML = armorMosaic;
	};
// write HTML to IDs if URL Parameters are VALID
	if (typeof waist[0] !== 'undefined') {
		waistType = waist[0].data[3];
		document.getElementById("waistImg").innerHTML = '<img src="../images/item/'+waist[0].data[13]+'.png">';
		document.getElementById("waist").innerHTML = waist[0].data[1];
		document.getElementById("waistSkills").innerHTML = ''+
		'<span class="'+waist[0].data[38]+' skill'+waist[0].data[39]+'">'+waist[0].data[38]+': <span class="skillamount">'+waist[0].data[39]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+waist[0].data[40]+' skill'+waist[0].data[41]+'">'+waist[0].data[40]+': <span class="skillamount">'+waist[0].data[41]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+waist[0].data[42]+' skill'+waist[0].data[43]+'">'+waist[0].data[42]+': <span class="skillamount">'+waist[0].data[43]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+waist[0].data[44]+' skill'+waist[0].data[45]+'">'+waist[0].data[44]+': <span class="skillamount">'+waist[0].data[45]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+waist[0].data[46]+' skill'+waist[0].data[47]+'">'+waist[0].data[46]+': <span class="skillamount">'+waist[0].data[47]+'</span></span>';
// calculate and output mosaic slots
		var waistMosaic = "";
		for (var i = waist[0].data[5] - 1; i >= 0; i--) {
			waistMosaic += "o";
		};
		document.getElementById("waistMosaic").innerHTML = waistMosaic;
	};
// write HTML to IDs if URL Parameters are VALID
	if (typeof greaves[0] !== 'undefined') {
		greavesType = greaves[0].data[3];
		document.getElementById("greavesImg").innerHTML = '<img src="../images/item/'+greaves[0].data[13]+'.png">';
		document.getElementById("greaves").innerHTML = greaves[0].data[1];
		document.getElementById("greavesSkills").innerHTML = ''+
		'<span class="'+greaves[0].data[38]+' skill'+greaves[0].data[39]+'">'+greaves[0].data[38]+': <span class="skillamount">'+greaves[0].data[39]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+greaves[0].data[40]+' skill'+greaves[0].data[41]+'">'+greaves[0].data[40]+': <span class="skillamount">'+greaves[0].data[41]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+greaves[0].data[42]+' skill'+greaves[0].data[43]+'">'+greaves[0].data[42]+': <span class="skillamount">'+greaves[0].data[43]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+greaves[0].data[44]+' skill'+greaves[0].data[45]+'">'+greaves[0].data[44]+': <span class="skillamount">'+greaves[0].data[45]+'</span></span>'+
		'&nbsp;&nbsp;&nbsp;<span class="'+greaves[0].data[46]+' skill'+greaves[0].data[47]+'">'+greaves[0].data[46]+': <span class="skillamount">'+greaves[0].data[47]+'</span></span>';
// calculate and output mosaic slots
		var greavesMosaic = "";
		for (var i = greaves[0].data[5] - 1; i >= 0; i--) {
			greavesMosaic += "o";
		};
		document.getElementById("greavesMosaic").innerHTML = greavesMosaic;
	};
	var sumType = "";
	sumType = helmetType+vambracesType+armorType+waistType+greavesType;
	console.log(sumType);
	if (sumType == "00000" || sumType == "11111") {
		console.log('same type');
		document.getElementById('typecolor').style.borderColor = '#fff';
	} 
	if (
sumType == "00001" || 
sumType == "00010" || 
sumType == "00011" || 
sumType == "00100" || 
sumType == "00101" || 
sumType == "00110" || 
sumType == "00111" || 
sumType == "01000" || 
sumType == "01001" || 
sumType == "01010" || 
sumType == "01011" || 
sumType == "01100" || 
sumType == "01101" || 
sumType == "01110" || 
sumType == "01111" || 
sumType == "10000" || 
sumType == "10001" || 
sumType == "10010" || 
sumType == "10011" || 
sumType == "10100" || 
sumType == "10101" || 
sumType == "10110" || 
sumType == "10111" || 
sumType == "11000" || 
sumType == "11001" || 
sumType == "11010" || 
sumType == "11011" || 
sumType == "11100" || 
sumType == "11101" || 
sumType == "11110"
		) {
		console.log('not same type');
		document.getElementById('typecolor').style.borderColor = '#f44336';
		}
// output skill values and get passive skill activation with getPassive(sname, value)
		var out = '';
	for (var i = 0; i < skillNames.length; i++) {
		out += '<tr class="skill'+skills[skillNames[i]]+'"><td>'+skillNames[i]+':</td><td>'+skills[skillNames[i]]+'</td><td>'+getPassive(skillNames[i], skills[skillNames[i]])+'</td></tr>';
		document.getElementById("skillTotals").innerHTML = out;
	};
};

function filter(aID) {
// initialize array
	var arr = armorArray;
// grep filter for ID
	filterArmor = $.grep(arr, function(element, index) {
		return element.iID == aID;
	});
// output new array
	return filterArmor;
};

function storeArmor() {
// create arrays with filter(aID)
	helmet = filter(helmetID);
	vambraces = filter(vambracesID);
	armor = filter(armorID);
	waist = filter(waistID);
	greaves = filter(greavesID);
// clear skills to recalculate on armor addition
	skills = {	"Ambush":0,	"Anti-bacterial":0,	"Attack":0,	"Butterfly Dance":0,	"Cold Res":0,	"Constitution":0,	"Craftsman":0,	"Crit Draw":0,	"Defense":0,	"Destroyer":0,	"Dragon Atk":0,	"Eating":0,	"Evade Dist":0,	"Evasion":0,	"Expert":0,	"FastCharge":0,	"Fencing":0,	"Fire Atk":0,	"Fire Res":0,	"Gluttony":0,	"Guard":0,	"Guard Up":0,	"Guts":0,	"Health":0,	"Hearing":0,	"Heat Res":0,	"Herb King":0,	"Hormone":0,	"Hunger":0,	"Ice Atk":0,	"Ice Res":0,	"Knowing Technique":0,	"KO King":0,	"Loading":0,	"Mud/Snow":0,	"Normal Up":0,	"Paralysis":0,	"Pellet Up":0,	"Perception":0,	"Pierce Up":0,	"Poison":0,	"Potential":0,	"Protection":0,	"Psychic":0,	"Rec Speed":0,	"Recoil":0,	"Reload Spd":0,	"Resilience":0,	"Sense":0,	"Sharpener":0,	"Sharpness":0,	"Sleep":0,	"SpeedSetup":0,	"Spirit":0,	"Stam Recov":0,	"Status":0,	"Stun":0,	"Survivor":0,	"Tenderizer":0,	"Thorns":0,	"Thunder Res":0,	"ThunderAtk":0,	"Tremor Res":0,	"Tripping Power":0,	"Unscathed":0,	"Water Atk":0,	"Wide-Range":0,	"Wind Res":0,};
// if URL parameter exists parse new array values as integers and add to skills array
	if (typeof helmet[0] !== 'undefined') {
		skills[helmet[0].data[38]] = skills[helmet[0].data[38]] + parseInt(helmet[0].data[39]);
		skills[helmet[0].data[40]] = skills[helmet[0].data[40]] + parseInt(helmet[0].data[41]);
		skills[helmet[0].data[42]] = skills[helmet[0].data[42]] + parseInt(helmet[0].data[43]);
		skills[helmet[0].data[44]] = skills[helmet[0].data[44]] + parseInt(helmet[0].data[45]);
		skills[helmet[0].data[46]] = skills[helmet[0].data[46]] + parseInt(helmet[0].data[47]);
	};
// if URL parameter exists parse new array values as integers and add to skills array
	if (typeof vambraces[0] !== 'undefined') {
		skills[vambraces[0].data[38]] = skills[vambraces[0].data[38]] + parseInt(vambraces[0].data[39]);
		skills[vambraces[0].data[40]] = skills[vambraces[0].data[40]] + parseInt(vambraces[0].data[41]);
		skills[vambraces[0].data[42]] = skills[vambraces[0].data[42]] + parseInt(vambraces[0].data[43]);
		skills[vambraces[0].data[44]] = skills[vambraces[0].data[44]] + parseInt(vambraces[0].data[45]);
		skills[vambraces[0].data[46]] = skills[vambraces[0].data[46]] + parseInt(vambraces[0].data[47]);
	};
// if URL parameter exists parse new array values as integers and add to skills array
	if (typeof armor[0] !== 'undefined') {
		skills[armor[0].data[38]] = skills[armor[0].data[38]] + parseInt(armor[0].data[39]);
		skills[armor[0].data[40]] = skills[armor[0].data[40]] + parseInt(armor[0].data[41]);
		skills[armor[0].data[42]] = skills[armor[0].data[42]] + parseInt(armor[0].data[43]);
		skills[armor[0].data[44]] = skills[armor[0].data[44]] + parseInt(armor[0].data[45]);
		skills[armor[0].data[46]] = skills[armor[0].data[46]] + parseInt(armor[0].data[47]);
	};
// if URL parameter exists parse new array values as integers and add to skills array
	if (typeof waist[0] !== 'undefined') {
		skills[waist[0].data[38]] = skills[waist[0].data[38]] + parseInt(waist[0].data[39]);
		skills[waist[0].data[40]] = skills[waist[0].data[40]] + parseInt(waist[0].data[41]);
		skills[waist[0].data[42]] = skills[waist[0].data[42]] + parseInt(waist[0].data[43]);
		skills[waist[0].data[44]] = skills[waist[0].data[44]] + parseInt(waist[0].data[45]);
		skills[waist[0].data[46]] = skills[waist[0].data[46]] + parseInt(waist[0].data[47]);
	};
// if URL parameter exists parse new array values as integers and add to skills array
	if (typeof greaves[0] !== 'undefined') {
		skills[greaves[0].data[38]] = skills[greaves[0].data[38]] + parseInt(greaves[0].data[39]);
		skills[greaves[0].data[40]] = skills[greaves[0].data[40]] + parseInt(greaves[0].data[41]);
		skills[greaves[0].data[42]] = skills[greaves[0].data[42]] + parseInt(greaves[0].data[43]);
		skills[greaves[0].data[44]] = skills[greaves[0].data[44]] + parseInt(greaves[0].data[45]);
		skills[greaves[0].data[46]] = skills[greaves[0].data[46]] + parseInt(greaves[0].data[47]);
	};
};

function getPassive(sname, value) {
// check skill value and store passive if it meets the criteria
	passive='';
	if (sname=='Ambush'&&value>=10) {
		passive='Assassin Tech +1';
	};
	if (sname=='Ambush'&&value>=15) {
		passive='Assassin Tech +2';
	};
	if (sname=='Anti-bacterial'&&value>=10) {
		passive='Bacteria Cancel';
	};
	if (sname=='Attack'&&value>=10) {
		passive='Attack Up (S)';
	};
	if (sname=='Attack'&&value>=15) {
		passive='Attack Up (M)';
	};
	if (sname=='Attack'&&value>=20) {
		passive='Attack Up (L)';
	};
	if (sname=='Attack'&&value>=25) {
		passive='Attack Up (XL)';
	};
	if (sname=='Attack'&&value>=30) {
		passive='Attack Up (XXL)';
	};
	if (sname=='Attack'&&value<=-10) {
		passive='Attack Down (S)';
	};
	if (sname=='Attack'&&value<=-15) {
		passive='Attack Down (M)';
	};
	if (sname=='Attack'&&value<=-20) {
		passive='Attack Down (L)';
	};
	if (sname=='Attack'&&value<=-25) {
		passive='Attack Down (XL)';
	};
	if (sname=='Butterfly Dance'&&value>=10) {
		passive='Butterfly Form';
	};
	if (sname=='Cold Res'&&value>=10) {
		passive='Cold Cancel';
	};
	if (sname=='Constitution'&&value>=10) {
		passive='Constitution +1';
	};
	if (sname=='Constitution'&&value>=15) {
		passive='Constitution +2';
	};
	if (sname=='Constitution'&&value>=20) {
		passive='Constitution +3';
	};
	if (sname=='Constitution'&&value<=-10) {
		passive='Constitution -1';
	};
	if (sname=='Constitution'&&value<=-15) {
		passive='Constitution -2';
	};
	if (sname=='Craftsman'&&value>=10) {
		passive='Sharpness +1';
	};
	if (sname=='Crit Draw'&&value>=10) {
		passive='Critical Draw';
	};
	if (sname=='Crit Draw'&&value>=15) {
		passive='Critical Draw Max';
	};
	if (sname=='Defense'&&value>=10) {
		passive='Defense Up (S)';
	};
	if (sname=='Defense'&&value>=15) {
		passive='Defense Up (M)';
	};
	if (sname=='Defense'&&value>=20) {
		passive='Defense Up (L)';
	};
	if (sname=='Defense'&&value>=25) {
		passive='Defense Up (XL)';
	};
	if (sname=='Defense'&&value>=30) {
		passive='Defense Up (XXL)';
	};
	if (sname=='Defense'&&value<=-10) {
		passive='Defense Down (S)';
	};
	if (sname=='Defense'&&value<=-15) {
		passive='Defense Down (M)';
	};
	if (sname=='Defense'&&value<=-20) {
		passive='Defense Down (L)';
	};
	if (sname=='Defense'&&value<=-25) {
		passive='Defense Down (XL)';
	};
	if (sname=='Destroyer'&&value>=10) {
		passive='Partbreaker';
	};
	if (sname=='Destroyer'&&value>=15) {
		passive='Destruction God';
	};
	if (sname=='Dragon Atk'&&value>=10) {
		passive='Dragon Atk +1';
	};
	if (sname=='Dragon Atk'&&value>=15) {
		passive='Dragon Atk +2';
	};
	if (sname=='Dragon Atk'&&value>=20) {
		passive='Dragon Atk +3';
	};
	if (sname=='Dragon Atk'&&value<=-10) {
		passive='Dragon Atk Down';
	};
	if (sname=='Eating'&&value>=10) {
		passive='Speed Eating';
	};
	if (sname=='Eating'&&value<=-10) {
		passive='Slow Eater';
	};
	if (sname=='Evade Dist'&&value>=10) {
		passive='Evade Dist +1';
	};
	if (sname=='Evade Dist'&&value>=15) {
		passive='Evade Dist +2';
	};
	if (sname=='Evasion'&&value>=10) {
		passive='Evasion +1';
	};
	if (sname=='Evasion'&&value>=15) {
		passive='Evasion +2';
	};
	if (sname=='Evasion'&&value>=20) {
		passive='Evasion +3';
	};
	if (sname=='Expert'&&value>=10) {
		passive='Critical Eye +1';
	};
	if (sname=='Expert'&&value>=15) {
		passive='Critical Eye +2';
	};
	if (sname=='Expert'&&value>=20) {
		passive='Critical Eye +3';
	};
	if (sname=='Expert'&&value>=25) {
		passive='Critical Eye +4';
	};
	if (sname=='Expert'&&value>=30) {
		passive='Critical Eye +5';
	};
	if (sname=='Expert'&&value<=-10) {
		passive='Critical Eye -1';
	};
	if (sname=='Expert'&&value<=-15) {
		passive='Critical Eye -2';
	};
	if (sname=='Expert'&&value<=-20) {
		passive='Critical Eye -3';
	};
	if (sname=='Expert'&&value<=-25) {
		passive='Critical Eye -4';
	};
	if (sname=='FastCharge'&&value>=10) {
		passive='Concentrate';
	};
	if (sname=='FastCharge'&&value>=15) {
		passive='Focus';
	};
	if (sname=='FastCharge'&&value>=20) {
		passive='Attentive';
	};
	if (sname=='FastCharge'&&value<=-10) {
		passive='Distraction';
	};
	if (sname=='Fencing'&&value>=10) {
		passive="Mind's Eye";
	};
	if (sname=='Fire Atk'&&value>=10) {
		passive='Fire Atk +1';
	};
	if (sname=='Fire Atk'&&value>=15) {
		passive='Fire Atk +2';
	};
	if (sname=='Fire Atk'&&value>=20) {
		passive='Fire Atk +3';
	};
	if (sname=='Fire Atk'&&value<=-10) {
		passive='Fire Atk Down';
	};
	if (sname=='Fire Res'&&value>=10) {
		passive='Fire Res +1';
	};
	if (sname=='Fire Res'&&value>=15) {
		passive='Fire Res +2';
	};
	if (sname=='Fire Res'&&value>=20) {
		passive='Fire Res +3';
	};
	if (sname=='Fire Res'&&value<=-10) {
		passive='Fire Res Down';
	};
	if (sname=='Gluttony'&&value>=10) {
		passive='Gourmand';
	};
	if (sname=='Guard'&&value>=10) {
		passive='Guard +1';
	};
	if (sname=='Guard'&&value>=15) {
		passive='Guard +2';
	};
	if (sname=='Guard'&&value>=20) {
		passive='Guard +3';
	};
	if (sname=='Guard Up'&&value>=10) {
		passive='Guard Boost';
	};
	if (sname=='Guts'&&value>=10) {
		passive='Guts';
	};
	if (sname=='Health'&&value>=10) {
		passive='Health +1';
	};
	if (sname=='Health'&&value>=15) {
		passive='Health +2';
	};
	if (sname=='Health'&&value>=20) {
		passive='Health +3';
	};
	if (sname=='Health'&&value>=25) {
		passive='Health +4';
	};
	if (sname=='Health'&&value>=30) {
		passive='Health +5';
	};
	if (sname=='Health'&&value<=-10) {
		passive='Health -1';
	};
	if (sname=='Health'&&value<=-15) {
		passive='Health -2';
	};
	if (sname=='Health'&&value<=-20) {
		passive='Health -3';
	};
	if (sname=='Health'&&value<=-25) {
		passive='Health -4';
	};
	if (sname=='Hearing'&&value>=10) {
		passive='Earplugs';
	};
	if (sname=='Hearing'&&value>=20) {
		passive='HG Earplugs';
	};
	if (sname=='Heat Res'&&value>=10) {
		passive='Heat Cancel';
	};
	if (sname=='Herb King'&&value>=10) {
		passive='Herbal Daren';
	};
	if (sname=='Hormone'&&value>=10) {
		passive='Attract';
	};
	if (sname=='Hunger'&&value>=10) {
		passive='Halve Hunger';
	};
	if (sname=='Hunger'&&value>=15) {
		passive='Negate Hunger';
	};
	if (sname=='Hunger'&&value<=-10) {
		passive='Raise Hunger';
	};
	if (sname=='Ice Atk'&&value>=10) {
		passive='Ice Itk +1';
	};
	if (sname=='Ice Atk'&&value>=15) {
		passive='Ice Atk +2';
	};
	if (sname=='Ice Atk'&&value>=20) {
		passive='Ice Atk +3';
	};
	if (sname=='Ice Atk'&&value<=-10) {
		passive='Ice Atk Down';
	};
	if (sname=='Ice Res'&&value>=10) {
		passive='Ice Res +1';
	};
	if (sname=='Ice Res'&&value>=15) {
		passive='Ice Res +2';
	};
	if (sname=='Ice Res'&&value>=20) {
		passive='Ice Res +3';
	};
	if (sname=='Ice Res'&&value<=-10) {
		passive='Ice Res Down';
	};
	if (sname=='Knowing Technique'&&value>=10) {
		passive='Violent Strike';
	};
	if (sname=='KO King'&&value>=10) {
		passive='KO King';
	};
	if (sname=='Loading'&&value>=10) {
		passive='Load Up';
	};
	if (sname=='Mud/Snow'&&value>=10) {
		passive='Negate Mud/Snow';
	};
	if (sname=='Normal Up'&&value>=10) {
		passive='Normal/Rapid Up';
	};
	if (sname=='Paralysis'&&value>=10) {
		passive='Negate Paralysis';
	};
	if (sname=='Paralysis'&&value<=-10) {
		passive='Double Paralysis';
	};
	if (sname=='Pellet Up'&&value>=10) {
		passive='Pellet/Spread Up';
	};
	if (sname=='Perception'&&value>=10) {
		passive='Capture Guru';
	};
	if (sname=='Pierce Up'&&value>=10) {
		passive='Pierce/Pierce Up';
	};
	if (sname=='Poison'&&value>=10) {
		passive='Halve Poison';
	};
	if (sname=='Poison'&&value>=15) {
		passive='Negate Poison';
	};
	if (sname=='Poison'&&value<=-10) {
		passive='Double Poison';
	};
	if (sname=='Potential'&&value>=10) {
		passive='Adrenaline +1';
	};
	if (sname=='Potential'&&value>=15) {
		passive='Adrenaline +2';
	};
	if (sname=='Potential'&&value>=20) {
		passive='Adrenaline +3';
	};
	if (sname=='Potential'&&value<=-10) {
		passive='Worrywart';
	};
	if (sname=='Protection'&&value>=10) {
		passive='Holy Blessing';
	};
	if (sname=='Protection'&&value>=15) {
		passive='Divine Blessing';
	};
	if (sname=='Protection'&&value<=-10) {
		passive='Evil Blessing';
	};
	if (sname=='Protection'&&value<=-15) {
		passive='Demonic Blessing';
	};
	if (sname=='Psychic'&&value>=10) {
		passive='Detect';
	};
	if (sname=='Psychic'&&value>=15) {
		passive='Autotracker';
	};
	if (sname=='Rec Speed'&&value>=10) {
		passive='Rec Speed +1';
	};
	if (sname=='Rec Speed'&&value>=15) {
		passive='Rec Speed +2';
	};
	if (sname=='Rec Speed'&&value>=20) {
		passive='Rec Speed +3';
	};
	if (sname=='Rec Speed'&&value<=-10) {
		passive='Rec Speed -1';
	};
	if (sname=='Rec Speed'&&value<=-15) {
		passive='Rec Speed -2 ';
	};
	if (sname=='Rec Speed'&&value<=-20) {
		passive='Rec Speed -3';
	};
	if (sname=='Recoil'&&value>=10) {
		passive='Recoil Down +1';
	};
	if (sname=='Recoil'&&value>=15) {
		passive='Recoil Down +2';
	};
	if (sname=='Recoil'&&value<=-10) {
		passive='Recoil Up';
	};
	if (sname=='Reload Spd'&&value>=10) {
		passive='Reload Spd +1';
	};
	if (sname=='Reload Spd'&&value>=15) {
		passive='Reload Spd +2';
	};
	if (sname=='Reload Spd'&&value>=20) {
		passive='Reload Spd +3';
	};
	if (sname=='Reload Spd'&&value<=-10) {
		passive='Reload Spd -1';
	};
	if (sname=='Reload Spd'&&value<=-15) {
		passive='Reload Spd -2';
	};
	if (sname=='Resilience'&&value>=10) {
    };
	if (sname=='Resilience'&&value>=15) {
    };
	if (sname=='Sense'&&value>=10) {
		passive='Sneak';
	};
	if (sname=='Sense'&&value<=-10) {
		passive='Taunt';
	};
	if (sname=='Sharpener'&&value>=10) {
		passive='Speed Sharpening';
	};
	if (sname=='Sharpener'&&value>=15) {
		passive='High Speed Sharpening';
	};
	if (sname=='Sharpener'&&value<=-10) {
		passive='Slow Sharpening';
	};
	if (sname=='Sharpness'&&value>=10) {
		passive='Sharp';
	};
	if (sname=='Sharpness'&&value>=15) {
		passive='Razor Sharp';
	};
	if (sname=='Sharpness'&&value<=-10) {
		passive='Blunt Edge';
	};
	if (sname=='Sleep'&&value>=10) {
		passive='Negate Sleep';
	};
	if (sname=='Sleep'&&value<=-10) {
		passive='Double Sleep';
	};
	if (sname=='SpeedSetup'&&value>=10) {
		passive='Trap Master';
	};
	if (sname=='Spirit'&&value>=10) {
		passive='Challenger +1';
	};
	if (sname=='Spirit'&&value>=15) {
		passive='Challenger +2';
	};
	if (sname=='Stam Recov'&&value>=10) {
		passive='Stam Recov +1';
	};
	if (sname=='Stam Recov'&&value>=15) {
		passive='Stam Recov +2';
	};
	if (sname=='Stam Recov'&&value>=20) {
		passive='Stam Recov +3';
	};
	if (sname=='Stam Recov'&&value<=-10) {
		passive='Stam Recov -1';
	};
	if (sname=='Stam Recov'&&value<=-15) {
		passive='Stam Recov -2';
	};
	if (sname=='Status'&&value>=10) {
		passive='Status Atk +1';
	};
	if (sname=='Status'&&value>=15) {
		passive='Status Atk +2';
	};
	if (sname=='Status'&&value>=20) {
		passive='Status Atk +3';
	};
	if (sname=='Status'&&value<=-10) {
		passive='Status Atk Down';
	};
	if (sname=='Stun'&&value>=10) {
		passive='Halve Stun';
	};
	if (sname=='Stun'&&value>=15) {
		passive='Negate Stun';
	};
	if (sname=='Stun'&&value<=-10) {
		passive='Double Stun';
	};
	if (sname=='Survivor'&&value>=10) {
		passive='Fortify';
	};
	if (sname=='Tenderizer'&&value>=10) {
		passive='Weakness Exploit';
	};
	if (sname=='Thorns'&&value>=10) {
		passive='Negate Thorns';
	};
	if (sname=='Thunder Res'&&value>=10) {
		passive='Thunder Res +1';
	};
	if (sname=='Thunder Res'&&value>=15) {
		passive='Thunder Res +2';
	};
	if (sname=='Thunder Res'&&value>=20) {
		passive='Thunder Res +3';
	};
	if (sname=='Thunder Res'&&value<=-10) {
		passive='Thunder Res Down';
	};
	if (sname=='ThunderAtk'&&value>=10) {
		passive='Thunder Atk +1';
	};
	if (sname=='ThunderAtk'&&value>=15) {
		passive='Thunder Atk +2';
	};
	if (sname=='ThunderAtk'&&value>=20) {
		passive='Thunder Atk +3';
	};
	if (sname=='ThunderAtk'&&value<=-10) {
		passive='Thunder Atk Down';
	};
	if (sname=='Tremor Res'&&value>=10) {
		passive='Tremor Res';
	};
	if (sname=='Tripping Power'&&value>=10) {
		passive='Tripping Power';
	};
	if (sname=='Unscathed'&&value>=10) {
		passive='Peak Performance';
	};
	if (sname=='Water Atk'&&value>=10) {
		passive='Water Atk +1';
	};
	if (sname=='Water Atk'&&value>=15) {
		passive='Water Atk +2';
	};
	if (sname=='Water Atk'&&value>=20) {
		passive='Water Atk +3';
	};
	if (sname=='Water Atk'&&value<=-10) {
		passive='Water Atk Down';
	};
	if (sname=='Wide-Range'&&value>=10) {
		passive='Wide-Range +1';
	};
	if (sname=='Wide-Range'&&value>=15) {
		passive='Wide-Range +2';
	};
	if (sname=='Wide-Range'&&value>=20) {
		passive='Wide-Range +3';
	};
	if (sname=='Wind Res'&&value>=10) {
		passive='Windproof (Lo)';
	};
	if (sname=='Wind Res'&&value>=15) {
		passive='Windproof (Hi)';
	};
	if (sname=='Wind Res'&&value>=20) {
		passive='Dragon Windproof';
	};
// output passive skill
	return passive
};

function updateurl(zname, value) {
  var href = window.location.href;
  var regex = new RegExp("[&\\?]" + zname + "=");
  if(regex.test(href))
  {
    regex = new RegExp("([&\\?])" + zname + "=\\d+");
    window.history.pushState("object or string", "Title", href.replace(regex, "$1" + zname + "=" + value));
  }
  else
  {
    if(href.indexOf("?") > -1)
    	window.history.pushState("object or string", "Title", href + "&" + zname + "=" + value);
    else
    	window.history.pushState("object or string", "Title", href + "?" + zname + "=" + value);
  }
};

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};