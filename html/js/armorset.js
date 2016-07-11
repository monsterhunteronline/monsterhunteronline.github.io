// initialize global variables
var armortype; var filterArmor; var helmet; var vambraces; var armor; var waist; var greaves; var necklace; var ring; var talisman; var helmetID; var vambracesID; var armorID; var waistID; var greavesID; var necklaceID; var ringID; var talismanID; var talismanSkill1ID; var talismanSkill1vID; var talismanSkill2ID; var talismanSkill2vID; var passive; var helmetType; var vambracesType; var armorType; var waistType; var greavesType; var helmetMosaicNum; var vambracesMosaicNum; var armorMosaicNum; var waistMosaicNum; var greavesMosaicNum; var helmetMosaic; var vambracesMosaic; var armorMosaic; var waistMosaic; var greavesMosaic;var mosaicSkills1ID; var mosaic1Skills = [];
var skillNames = skillnamesjs();
var skills = skillsjs();
// need second array for "for" loop
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
$(document).on('change', 'select#talismanSkill3Select', function() {
    console.log($(this).val()); // the selected options’s value
    // if you want to do stuff based on the OPTION element:
    var opt = $(this).val();
    updateurl('13', opt);
    displayData();
    // use switch or if/else etc.
});
$(document).on('change', 'select#talismanSkill3vSelect', function() {
    console.log($(this).val()); // the selected options’s value

    // if you want to do stuff based on the OPTION element:
    var opt = $(this).val();
    updateurl('14', opt);
    displayData();
    // use switch or if/else etc.
});
$(document).on('change', 'select#mosaic1Select1', function() {
    console.log($(this).val()); // the selected options’s value
    // if you want to do stuff based on the OPTION element:
    var opt = $(this).val();
    updateurl('15', opt);
    displayData();
    // use switch or if/else etc.
});
$(document).on('change', 'select#mosaic1Select2', function() {
    console.log($(this).val()); // the selected options’s value
    // if you want to do stuff based on the OPTION element:
    var opt = $(this).val();
    updateurl('16', opt);
    displayData();
    // use switch or if/else etc.
});
$(document).on('change', 'select#mosaic1Select3', function() {
    console.log($(this).val()); // the selected options’s value
    // if you want to do stuff based on the OPTION element:
    var opt = $(this).val();
    updateurl('17', opt);
    displayData();
    // use switch or if/else etc.
});
function displayData() {
// grap parameters from URL
	helmetID = getUrlParameter('1'); vambracesID = getUrlParameter('2'); armorID = getUrlParameter('3'); waistID = getUrlParameter('4'); greavesID = getUrlParameter('5'); necklaceID = getUrlParameter('6'); ringID = getUrlParameter('7'); talismanID = getUrlParameter('8'); talismanSkill1ID = getUrlParameter('9'); talismanSkill1vID = getUrlParameter('10'); talismanSkill2ID = getUrlParameter('11'); talismanSkill2vID = getUrlParameter('12'); talismanSkill3ID = getUrlParameter('13'); talismanSkill3vID = getUrlParameter('14'); mosaicSkills1ID = getUrlParameter('15'); mosaicSkills2ID = getUrlParameter('16'); mosaicSkills3ID = getUrlParameter('17');
	mosaic1Skills = getMosaicSkills(mosaicSkills1ID)
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
		helmetMosaic = "";
		for (var i = helmet[0].data[5] - 1; i >= 0; i--) {helmetMosaic += "o";};
		helmetMosaicNum = helmetMosaic.length;
		helmetMosaicjs(helmetMosaicNum)
		document.getElementById("helmetMosaic").innerHTML = mosaicdrop(helmetMosaic);
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
		vambracesMosaic = "";
		for (var i = vambraces[0].data[5] - 1; i >= 0; i--) {vambracesMosaic += "o";};
		vambracesMosaicNum = vambracesMosaic.length;
		vambracesMosaicjs(vambracesMosaicNum)
		document.getElementById("vambracesMosaic").innerHTML = mosaicdrop(vambracesMosaic);
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
		armorMosaic = "";
		for (var i = armor[0].data[5] - 1; i >= 0; i--) {armorMosaic += "o";};
		armorMosaicNum = armorMosaic.length;
		armorMosaicjs(armorMosaicNum)
		document.getElementById("armorMosaic").innerHTML = mosaicdrop(armorMosaic);
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
		waistMosaic = "";
		for (var i = waist[0].data[5] - 1; i >= 0; i--) {waistMosaic += "o";};
		waistMosaicNum = waistMosaic.length;
		waistMosaicjs(waistMosaicNum)
		document.getElementById("waistMosaic").innerHTML = mosaicdrop(waistMosaic);
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
		greavesMosaic = "";
		for (var i = greaves[0].data[5] - 1; i >= 0; i--) {greavesMosaic += "o";};
		greavesMosaicNum = greavesMosaic.length;
		greavesMosaicjs(greavesMosaicNum)
		document.getElementById("greavesMosaic").innerHTML = mosaicdrop(greavesMosaic);
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
	if (typeof talismanSkill3ID !== 'undefined') {
		document.getElementById("talismanSkills3").innerHTML = skillNames[parseInt(talismanSkill3ID)]+': ';
	};
	if (typeof talismanSkill3vID !== 'undefined') {
		document.getElementById("talismanSkills3Value").innerHTML = talismanSkill3vID;
	};
	if (typeof mosaicSkills1ID !== 'undefined') {
	    document.getElementById("mosaicSkills1").innerHTML = translate(mosaic1Skills[5])+': ';
	    document.getElementById("mosaicSkills1Value").innerHTML = mosaic1Skills[6];
	    document.getElementById("mosaicSkills12").innerHTML = translate(mosaic1Skills[8])+'<span class="hide'+mosaic1Skills[8]+'">: </span>';
	    document.getElementById("mosaicSkills1Value2").innerHTML = mosaic1Skills[9];
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
	var talismanSkill3Selection = '<option value="" disabled selected>Skill 3</option>';
	for(i = 0; i < skillNames.length; i ++) {
	talismanSkill3Selection += ''+
	'<option value="'+i+'">'+skillNames[i]+'</option>';
	};
	document.getElementById("talismanSkill3Select").innerHTML = talismanSkill3Selection;
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
	skills = skillsjs();
// if URL parameter exists parse new array values as integers and add to skills array
	if (typeof helmet[0] !== 'undefined') {skills[translate(helmet[0].data[38])] = skills[translate(helmet[0].data[38])] + parseInt(helmet[0].data[39]); skills[translate(helmet[0].data[40])] = skills[translate(helmet[0].data[40])] + parseInt(helmet[0].data[41]); skills[translate(helmet[0].data[42])] = skills[translate(helmet[0].data[42])] + parseInt(helmet[0].data[43]); skills[translate(helmet[0].data[44])] = skills[translate(helmet[0].data[44])] + parseInt(helmet[0].data[45]); skills[translate(helmet[0].data[46])] = skills[translate(helmet[0].data[46])] + parseInt(helmet[0].data[47]);};
	if (typeof vambraces[0] !== 'undefined') {skills[translate(vambraces[0].data[38])] = skills[translate(vambraces[0].data[38])] + parseInt(vambraces[0].data[39]); skills[translate(vambraces[0].data[40])] = skills[translate(vambraces[0].data[40])] + parseInt(vambraces[0].data[41]); skills[translate(vambraces[0].data[42])] = skills[translate(vambraces[0].data[42])] + parseInt(vambraces[0].data[43]); skills[translate(vambraces[0].data[44])] = skills[translate(vambraces[0].data[44])] + parseInt(vambraces[0].data[45]); skills[translate(vambraces[0].data[46])] = skills[translate(vambraces[0].data[46])] + parseInt(vambraces[0].data[47]);};
	if (typeof armor[0] !== 'undefined') {skills[translate(armor[0].data[38])] = skills[translate(armor[0].data[38])] + parseInt(armor[0].data[39]); skills[translate(armor[0].data[40])] = skills[translate(armor[0].data[40])] + parseInt(armor[0].data[41]); skills[translate(armor[0].data[42])] = skills[translate(armor[0].data[42])] + parseInt(armor[0].data[43]); skills[translate(armor[0].data[44])] = skills[translate(armor[0].data[44])] + parseInt(armor[0].data[45]); skills[translate(armor[0].data[46])] = skills[translate(armor[0].data[46])] + parseInt(armor[0].data[47]);};
	if (typeof waist[0] !== 'undefined') {skills[translate(waist[0].data[38])] = skills[translate(waist[0].data[38])] + parseInt(waist[0].data[39]); skills[translate(waist[0].data[40])] = skills[translate(waist[0].data[40])] + parseInt(waist[0].data[41]); skills[translate(waist[0].data[42])] = skills[translate(waist[0].data[42])] + parseInt(waist[0].data[43]); skills[translate(waist[0].data[44])] = skills[translate(waist[0].data[44])] + parseInt(waist[0].data[45]); skills[translate(waist[0].data[46])] = skills[translate(waist[0].data[46])] + parseInt(waist[0].data[47]);};
	if (typeof greaves[0] !== 'undefined') {skills[translate(greaves[0].data[38])] = skills[translate(greaves[0].data[38])] + parseInt(greaves[0].data[39]); skills[translate(greaves[0].data[40])] = skills[translate(greaves[0].data[40])] + parseInt(greaves[0].data[41]); skills[translate(greaves[0].data[42])] = skills[translate(greaves[0].data[42])] + parseInt(greaves[0].data[43]); skills[translate(greaves[0].data[44])] = skills[translate(greaves[0].data[44])] + parseInt(greaves[0].data[45]); skills[translate(greaves[0].data[46])] = skills[translate(greaves[0].data[46])] + parseInt(greaves[0].data[47]);};
	if (typeof talismanSkill1ID !== 'undefined' && talismanSkill1vID !== 'undefined') {skills[translate(skillNames[parseInt(talismanSkill1ID)])] = skills[translate(skillNames[parseInt(talismanSkill1ID)])] + parseInt(talismanSkill1vID);};
	if (typeof talismanSkill2ID !== 'undefined' && talismanSkill2vID !== 'undefined') {skills[translate(skillNames[parseInt(talismanSkill2ID)])] = skills[translate(skillNames[parseInt(talismanSkill2ID)])] + parseInt(talismanSkill2vID);};
	if (typeof talismanSkill3ID !== 'undefined' && talismanSkill3vID !== 'undefined') {skills[translate(skillNames[parseInt(talismanSkill3ID)])] = skills[translate(skillNames[parseInt(talismanSkill3ID)])] + parseInt(talismanSkill3vID);};
	if (typeof mosaic1Skills[5] !== 'undefined') {skills[translate(mosaic1Skills[5])] = skills[translate(mosaic1Skills[5])] + parseInt(mosaic1Skills[6]);}; 
	if (typeof mosaic1Skills[8] !== 'undefined') {skills[translate(mosaic1Skills[8])] = skills[translate(mosaic1Skills[8])] + parseInt(mosaic1Skills[9]);}; 
};
function getPassive(sname, value) {
// check skill value and store passive if it meets the criteria
	passive='';
	if (value > 0){
		for(i = skillsArray.length-1; i > 0; i --) {
			if (sname==translate(skillsArray[i].data[3])&&value>=parseInt(skillsArray[i].data[7])) {passive=translate(skillsArray[i].data[5]);};
		}
	}
	if (value < 0){
		for(i = 0; i < skillsArray.length; i ++) {
			if (sname==translate(skillsArray[i].data[3])&&value<=parseInt(skillsArray[i].data[7])) {passive=translate(skillsArray[i].data[5]);};
		}
	}
// output passive skill
	return passive
};

function skillnamesjs() {
	var tempArr = []
	for(i = 0; i < skillsArray.length; i ++) {
		var skillTemp = translate(skillsArray[i].data[3])
		tempArr.push(skillTemp)
	}
	var tempArr2 = []
	$.each(tempArr, function(i, el){
		if($.inArray(el, tempArr2) === -1) tempArr2.push(el);
	});
	return tempArr2
};
function skillsjs() {
	var tempArr = {};
	for(i = 0; i < skillNames.length; i ++) {
		tempArr[translate(skillNames[i])] = 0;
	}
	return tempArr
};