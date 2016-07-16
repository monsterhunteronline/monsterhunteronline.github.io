// initialize global variables
var armortype; var filterArmor;
var helmet; var vambraces; var armor; var waist; var greaves;
var necklace; var ring; var talisman;
var helmetID; var vambracesID; var armorID; var waistID; var greavesID;
var necklaceID; var ringID; var talismanID;
var talismanSkill1ID; var talismanSkill1vID; var talismanSkill2ID; var talismanSkill2vID;
var helmCount; var vambracesCount; var armorCount; var waistCount; var greavesCount
var passive;
var helmetType; var vambracesType; var armorType; var waistType; var greavesType;
var helmetMosaicNum; var vambracesMosaicNum; var armorMosaicNum; var waistMosaicNum; var greavesMosaicNum;
var helmetMosaic; var vambracesMosaic; var armorMosaic; var waistMosaic; var greavesMosaic; 
var mosaicSkills1ID; var mosaic1Skills = []; var mosaicSkills2ID; var mosaic2Skills = []; var mosaicSkills3ID;
var mosaic3Skills = []; var mosaicSkills4ID; var mosaic4Skills = []; var mosaicSkills5ID; var mosaic5Skills = [];
var mosaicSkills6ID; var mosaic6Skills = []; var mosaicSkills7ID; var mosaic7Skills = []; var mosaicSkills8ID;
var mosaic8Skills = []; var mosaicSkills9ID; var mosaic9Skills = []; var mosaicSkills10ID; var mosaic10Skills = [];
var mosaicSkills11ID; var mosaic11Skills = []; var mosaicSkills12ID; var mosaic12Skills = []; var mosaicSkills13ID;
var mosaic13Skills = []; var mosaicSkills14ID; var mosaic14Skills = []; var mosaicSkills15ID; var mosaic15Skills = [];
var skillNames = skillnamesjs(); var skills = skillsjs();
var positiveSkills = [];
var negativeSkills = [];
$(document).on('change', 'select#necklaceSelect', function() {console.log($(this).val()); updateurl('6', $(this).val()); displayData();});
$(document).on('change', 'select#ringSelect', function() {console.log($(this).val()); updateurl('7', $(this).val()); displayData();});
$(document).on('change', 'select#talismanSelect', function() {console.log($(this).val()); updateurl('8', $(this).val()); displayData();});
$(document).on('change', 'select#talismanSkill1Select', function() {console.log($(this).val()); updateurl('9', $(this).val()); displayData();});
$(document).on('change', 'select#talismanSkill1vSelect', function() {console.log($(this).val()); updateurl('10', $(this).val()); displayData();});
$(document).on('change', 'select#talismanSkill2Select', function() {console.log($(this).val()); updateurl('11', $(this).val()); displayData();});
$(document).on('change', 'select#talismanSkill2vSelect', function() {console.log($(this).val()); updateurl('12', $(this).val()); displayData();});
$(document).on('change', 'select#talismanSkill3Select', function() {console.log($(this).val()); updateurl('13', $(this).val()); displayData();});
$(document).on('change', 'select#talismanSkill3vSelect', function() {console.log($(this).val()); updateurl('14', $(this).val()); displayData();});
$(document).on('change', 'select#mosaic1Select1', function() {console.log($(this).val()); updateurl('15', $(this).val()); displayData();});
$(document).on('change', 'select#mosaic1Select2', function() {console.log($(this).val()); updateurl('16', $(this).val()); displayData();});
$(document).on('change', 'select#mosaic1Select3', function() {console.log($(this).val()); updateurl('17', $(this).val()); displayData();});
$(document).on('change', 'select#mosaic2Select1', function() {console.log($(this).val()); updateurl('18', $(this).val()); displayData();});
$(document).on('change', 'select#mosaic2Select2', function() {console.log($(this).val()); updateurl('19', $(this).val()); displayData();});
$(document).on('change', 'select#mosaic2Select3', function() {console.log($(this).val()); updateurl('20', $(this).val()); displayData();});
$(document).on('change', 'select#mosaic3Select1', function() {console.log($(this).val()); updateurl('21', $(this).val()); displayData();});
$(document).on('change', 'select#mosaic3Select2', function() {console.log($(this).val()); updateurl('22', $(this).val()); displayData();});
$(document).on('change', 'select#mosaic3Select3', function() {console.log($(this).val()); updateurl('23', $(this).val()); displayData();});
$(document).on('change', 'select#mosaic4Select1', function() {console.log($(this).val()); updateurl('24', $(this).val()); displayData();});
$(document).on('change', 'select#mosaic4Select2', function() {console.log($(this).val()); updateurl('25', $(this).val()); displayData();});
$(document).on('change', 'select#mosaic4Select3', function() {console.log($(this).val()); updateurl('26', $(this).val()); displayData();});
$(document).on('change', 'select#mosaic5Select1', function() {console.log($(this).val()); updateurl('27', $(this).val()); displayData();});
$(document).on('change', 'select#mosaic5Select2', function() {console.log($(this).val()); updateurl('28', $(this).val()); displayData();});
$(document).on('change', 'select#mosaic5Select3', function() {console.log($(this).val()); updateurl('29', $(this).val()); displayData();});
function displayData() {
// grap parameters from URL
	helmetID = getUrlParameter('1'); vambracesID = getUrlParameter('2'); armorID = getUrlParameter('3'); waistID = getUrlParameter('4'); greavesID = getUrlParameter('5');
	necklaceID = getUrlParameter('6'); ringID = getUrlParameter('7'); talismanID = getUrlParameter('8');
	talismanSkill1ID = getUrlParameter('9'); talismanSkill1vID = getUrlParameter('10'); talismanSkill2ID = getUrlParameter('11'); talismanSkill2vID = getUrlParameter('12'); talismanSkill3ID = getUrlParameter('13'); talismanSkill3vID = getUrlParameter('14');
	mosaicSkills1ID = getUrlParameter('15'); mosaicSkills2ID = getUrlParameter('16'); mosaicSkills3ID = getUrlParameter('17'); 
	mosaicSkills4ID = getUrlParameter('18'); mosaicSkills5ID = getUrlParameter('19'); mosaicSkills6ID = getUrlParameter('20'); 
	mosaicSkills7ID = getUrlParameter('21'); mosaicSkills8ID = getUrlParameter('22'); mosaicSkills9ID = getUrlParameter('23'); 
	mosaicSkills10ID = getUrlParameter('24'); mosaicSkills11ID = getUrlParameter('25'); mosaicSkills12ID = getUrlParameter('26'); 
	mosaicSkills13ID = getUrlParameter('27'); mosaicSkills14ID = getUrlParameter('28'); mosaicSkills15ID = getUrlParameter('29');
	mosaic1Skills = getMosaicSkills(mosaicSkills1ID); mosaic2Skills = getMosaicSkills(mosaicSkills2ID); mosaic3Skills = getMosaicSkills(mosaicSkills3ID);
	mosaic4Skills = getMosaicSkills(mosaicSkills4ID); mosaic5Skills = getMosaicSkills(mosaicSkills5ID); mosaic6Skills = getMosaicSkills(mosaicSkills6ID);
	mosaic7Skills = getMosaicSkills(mosaicSkills7ID); mosaic8Skills = getMosaicSkills(mosaicSkills8ID); mosaic9Skills = getMosaicSkills(mosaicSkills9ID);
	mosaic10Skills = getMosaicSkills(mosaicSkills10ID); mosaic11Skills = getMosaicSkills(mosaicSkills11ID); mosaic12Skills = getMosaicSkills(mosaicSkills12ID);
	mosaic13Skills = getMosaicSkills(mosaicSkills13ID); mosaic14Skills = getMosaicSkills(mosaicSkills14ID); mosaic15Skills = getMosaicSkills(mosaicSkills15ID);
// get armor
	storeArmor();
// write HTML to IDs if URL parameters are VALID
	if (typeof helmet[0] !== 'undefined') {
		helmetType = helmet[0].data[3];
		document.getElementById("helmetImg").innerHTML = '<img src="../images/item/'+helmet[0].data[13]+'.png">';
		document.getElementById("helmet").innerHTML = helmet[0].data[1]+'<br>'+translate('nl'+helmet[0].data[2])+' '+helmet[0].data[57];
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
		document.getElementById("vambraces").innerHTML = vambraces[0].data[1]+'<br>'+translate('nl'+vambraces[0].data[2])+' '+vambraces[0].data[57];
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
		document.getElementById("armor").innerHTML = armor[0].data[1]+'<br>'+translate('nl'+armor[0].data[2])+' '+armor[0].data[57];
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
		document.getElementById("waist").innerHTML = waist[0].data[1]+'<br>'+translate('nl'+waist[0].data[2])+' '+waist[0].data[57];
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
		document.getElementById("greaves").innerHTML = greaves[0].data[1]+'<br>'+translate('nl'+greaves[0].data[2])+' '+greaves[0].data[57];
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
	if (typeof talisman[0] !== 'undefined') {document.getElementById("talismanImg").innerHTML = '<img src="../images/item/'+talisman[0].data[6]+'.png">'; document.getElementById("talisman").innerHTML = talisman[0].data[1];};
	if (typeof talismanSkill1ID !== 'undefined') {document.getElementById("talismanSkills1").innerHTML = skillNames[parseInt(talismanSkill1ID)]+': ';};
	if (typeof talismanSkill1vID !== 'undefined') {document.getElementById("talismanSkills1Value").innerHTML = talismanSkill1vID;};
	if (typeof talismanSkill2ID !== 'undefined') {document.getElementById("talismanSkills2").innerHTML = skillNames[parseInt(talismanSkill2ID)]+': ';};
	if (typeof talismanSkill2vID !== 'undefined') {document.getElementById("talismanSkills2Value").innerHTML = talismanSkill2vID;};
	if (typeof talismanSkill3ID !== 'undefined') {document.getElementById("talismanSkills3").innerHTML = skillNames[parseInt(talismanSkill3ID)]+': ';};
	if (typeof talismanSkill3vID !== 'undefined') {document.getElementById("talismanSkills3Value").innerHTML = talismanSkill3vID;};
	helmCount = 0
	if (typeof mosaic1Skills[0] !== 'undefined') {
		document.getElementById("mosaic1Img").innerHTML = '<img src="../images/item/'+mosaic1Skills[10]+'.png" class="mosaicImage"> '+translate(mosaic1Skills[2])+' - ';
	    document.getElementById("mosaic1Skills").innerHTML = '<span class"no'+mosaic1Skills[5]+'"><span class="skill'+mosaic1Skills[6]+'">'+translate(mosaic1Skills[5])+': '+mosaic1Skills[6]+'</span>&nbsp;&nbsp;&nbsp;<span class="no'+mosaic1Skills[8]+' skill'+mosaic1Skills[9]+'">'+translate(mosaic1Skills[8])+': '+mosaic1Skills[9]+'</span><br></span>';
	    helmCount += parseInt(mosaic1Skills[3])
	};
	if (typeof mosaic2Skills[0] !== 'undefined') {
		document.getElementById("mosaic2Img").innerHTML = '<img src="../images/item/'+mosaic2Skills[10]+'.png" class="mosaicImage"> '+translate(mosaic2Skills[2])+' - ';
	    document.getElementById("mosaic2Skills").innerHTML = '<span class"no'+mosaic2Skills[5]+'"><span class="skill'+mosaic2Skills[6]+'">'+translate(mosaic2Skills[5])+': '+mosaic2Skills[6]+'</span>&nbsp;&nbsp;&nbsp;<span class="no'+mosaic2Skills[8]+' skill'+mosaic2Skills[9]+'">'+translate(mosaic2Skills[8])+': '+mosaic2Skills[9]+'</span><br></span>';
	    helmCount += parseInt(mosaic2Skills[3])
	};
	if (typeof mosaic3Skills[0] !== 'undefined') {
		document.getElementById("mosaic3Img").innerHTML = '<img src="../images/item/'+mosaic3Skills[10]+'.png" class="mosaicImage"> '+translate(mosaic3Skills[2])+' - ';
	    document.getElementById("mosaic3Skills").innerHTML = '<span class"no'+mosaic3Skills[5]+'"><span class="skill'+mosaic3Skills[6]+'">'+translate(mosaic3Skills[5])+': '+mosaic3Skills[6]+'</span>&nbsp;&nbsp;&nbsp;<span class="no'+mosaic3Skills[8]+' skill'+mosaic3Skills[9]+'">'+translate(mosaic3Skills[8])+': '+mosaic3Skills[9]+'</span><br></span>';
	    helmCount += parseInt(mosaic3Skills[3])
	};
	vambracesCount = 0
	if (typeof mosaic4Skills[0] !== 'undefined') {
		document.getElementById("mosaic4Img").innerHTML = '<img src="../images/item/'+mosaic4Skills[10]+'.png" class="mosaicImage"> '+translate(mosaic4Skills[2])+' - ';
	    document.getElementById("mosaic4Skills").innerHTML = '<span class"no'+mosaic4Skills[5]+'"><span class="skill'+mosaic4Skills[6]+'">'+translate(mosaic4Skills[5])+': '+mosaic4Skills[6]+'</span>&nbsp;&nbsp;&nbsp;<span class="no'+mosaic4Skills[8]+' skill'+mosaic4Skills[9]+'">'+translate(mosaic4Skills[8])+': '+mosaic4Skills[9]+'</span><br></span>';
	    vambracesCount += parseInt(mosaic4Skills[3])
	};
	if (typeof mosaic5Skills[0] !== 'undefined') {
		document.getElementById("mosaic5Img").innerHTML = '<img src="../images/item/'+mosaic5Skills[10]+'.png" class="mosaicImage"> '+translate(mosaic5Skills[2])+' - ';
	    document.getElementById("mosaic5Skills").innerHTML = '<span class"no'+mosaic5Skills[5]+'"><span class="skill'+mosaic5Skills[6]+'">'+translate(mosaic5Skills[5])+': '+mosaic5Skills[6]+'</span>&nbsp;&nbsp;&nbsp;<span class="no'+mosaic5Skills[8]+' skill'+mosaic5Skills[9]+'">'+translate(mosaic5Skills[8])+': '+mosaic5Skills[9]+'</span><br></span>';
	    vambracesCount += parseInt(mosaic5Skills[3])
	};
	if (typeof mosaic6Skills[0] !== 'undefined') {
		document.getElementById("mosaic6Img").innerHTML = '<img src="../images/item/'+mosaic6Skills[10]+'.png" class="mosaicImage"> '+translate(mosaic6Skills[2])+' - ';
	    document.getElementById("mosaic6Skills").innerHTML = '<span class"no'+mosaic6Skills[5]+'"><span class="skill'+mosaic6Skills[6]+'">'+translate(mosaic6Skills[5])+': '+mosaic6Skills[6]+'</span>&nbsp;&nbsp;&nbsp;<span class="no'+mosaic6Skills[8]+' skill'+mosaic6Skills[9]+'">'+translate(mosaic6Skills[8])+': '+mosaic6Skills[9]+'</span><br></span>';
	    vambracesCount += parseInt(mosaic6Skills[3])
	};
	armorCount = 0
	if (typeof mosaic7Skills[0] !== 'undefined') {
		document.getElementById("mosaic7Img").innerHTML = '<img src="../images/item/'+mosaic7Skills[10]+'.png" class="mosaicImage"> '+translate(mosaic7Skills[2])+' - ';
	    document.getElementById("mosaic7Skills").innerHTML = '<span class"no'+mosaic7Skills[5]+'"><span class="skill'+mosaic7Skills[6]+'">'+translate(mosaic7Skills[5])+': '+mosaic7Skills[6]+'</span>&nbsp;&nbsp;&nbsp;<span class="no'+mosaic7Skills[8]+' skill'+mosaic7Skills[9]+'">'+translate(mosaic7Skills[8])+': '+mosaic7Skills[9]+'</span><br></span>';
	    armorCount += parseInt(mosaic7Skills[3])
	};
	if (typeof mosaic8Skills[0] !== 'undefined') {
		document.getElementById("mosaic8Img").innerHTML = '<img src="../images/item/'+mosaic8Skills[10]+'.png" class="mosaicImage"> '+translate(mosaic8Skills[2])+' - ';
	    document.getElementById("mosaic8Skills").innerHTML = '<span class"no'+mosaic8Skills[5]+'"><span class="skill'+mosaic8Skills[6]+'">'+translate(mosaic8Skills[5])+': '+mosaic8Skills[6]+'</span>&nbsp;&nbsp;&nbsp;<span class="no'+mosaic8Skills[8]+' skill'+mosaic8Skills[9]+'">'+translate(mosaic8Skills[8])+': '+mosaic8Skills[9]+'</span><br></span>';
	    armorCount += parseInt(mosaic8Skills[3])
	};
	if (typeof mosaic9Skills[0] !== 'undefined') {
		document.getElementById("mosaic9Img").innerHTML = '<img src="../images/item/'+mosaic9Skills[10]+'.png" class="mosaicImage"> '+translate(mosaic9Skills[2])+' - ';
	    document.getElementById("mosaic9Skills").innerHTML = '<span class"no'+mosaic9Skills[5]+'"><span class="skill'+mosaic9Skills[6]+'">'+translate(mosaic9Skills[5])+': '+mosaic9Skills[6]+'</span>&nbsp;&nbsp;&nbsp;<span class="no'+mosaic9Skills[8]+' skill'+mosaic9Skills[9]+'">'+translate(mosaic9Skills[8])+': '+mosaic9Skills[9]+'</span><br></span>';
	    armorCount += parseInt(mosaic9Skills[3])
	};
	waistCount = 0
	if (typeof mosaic10Skills[0] !== 'undefined') {
		document.getElementById("mosaic10Img").innerHTML = '<img src="../images/item/'+mosaic10Skills[10]+'.png" class="mosaicImage"> '+translate(mosaic10Skills[2])+' - ';
	    document.getElementById("mosaic10Skills").innerHTML = '<span class"no'+mosaic10Skills[5]+'"><span class="skill'+mosaic10Skills[6]+'">'+translate(mosaic10Skills[5])+': '+mosaic10Skills[6]+'</span>&nbsp;&nbsp;&nbsp;<span class="no'+mosaic10Skills[8]+' skill'+mosaic10Skills[9]+'">'+translate(mosaic10Skills[8])+': '+mosaic10Skills[9]+'</span><br></span>';
	    waistCount += parseInt(mosaic10Skills[3])
	};
	if (typeof mosaic11Skills[0] !== 'undefined') {
		document.getElementById("mosaic11Img").innerHTML = '<img src="../images/item/'+mosaic11Skills[10]+'.png" class="mosaicImage"> '+translate(mosaic11Skills[2])+' - ';
	    document.getElementById("mosaic11Skills").innerHTML = '<span class"no'+mosaic11Skills[5]+'"><span class="skill'+mosaic11Skills[6]+'">'+translate(mosaic11Skills[5])+': '+mosaic11Skills[6]+'</span>&nbsp;&nbsp;&nbsp;<span class="no'+mosaic11Skills[8]+' skill'+mosaic11Skills[9]+'">'+translate(mosaic11Skills[8])+': '+mosaic11Skills[9]+'</span><br></span>';
	    waistCount += parseInt(mosaic11Skills[3])
	};
	if (typeof mosaic12Skills[0] !== 'undefined') {
		document.getElementById("mosaic12Img").innerHTML = '<img src="../images/item/'+mosaic12Skills[10]+'.png" class="mosaicImage"> '+translate(mosaic12Skills[2])+' - ';
	    document.getElementById("mosaic12Skills").innerHTML = '<span class"no'+mosaic12Skills[5]+'"><span class="skill'+mosaic12Skills[6]+'">'+translate(mosaic12Skills[5])+': '+mosaic12Skills[6]+'</span>&nbsp;&nbsp;&nbsp;<span class="no'+mosaic12Skills[8]+' skill'+mosaic12Skills[9]+'">'+translate(mosaic12Skills[8])+': '+mosaic12Skills[9]+'</span><br></span>';
	    waistCount += parseInt(mosaic12Skills[3])
	};
	greavesCount = 0
	if (typeof mosaic13Skills[0] !== 'undefined') {
		document.getElementById("mosaic13Img").innerHTML = '<img src="../images/item/'+mosaic13Skills[10]+'.png" class="mosaicImage"> '+translate(mosaic13Skills[2])+' - ';
	    document.getElementById("mosaic13Skills").innerHTML = '<span class"no'+mosaic13Skills[5]+'"><span class="skill'+mosaic13Skills[6]+'">'+translate(mosaic13Skills[5])+': '+mosaic13Skills[6]+'</span>&nbsp;&nbsp;&nbsp;<span class="no'+mosaic13Skills[8]+' skill'+mosaic13Skills[9]+'">'+translate(mosaic13Skills[8])+': '+mosaic13Skills[9]+'</span><br></span>';
	greavesCount += parseInt(mosaic13Skills[3])
	};
	if (typeof mosaic14Skills[0] !== 'undefined') {
		document.getElementById("mosaic14Img").innerHTML = '<img src="../images/item/'+mosaic14Skills[10]+'.png" class="mosaicImage"> '+translate(mosaic14Skills[2])+' - ';
	    document.getElementById("mosaic14Skills").innerHTML = '<span class"no'+mosaic14Skills[5]+'"><span class="skill'+mosaic14Skills[6]+'">'+translate(mosaic14Skills[5])+': '+mosaic14Skills[6]+'</span>&nbsp;&nbsp;&nbsp;<span class="no'+mosaic14Skills[8]+' skill'+mosaic14Skills[9]+'">'+translate(mosaic14Skills[8])+': '+mosaic14Skills[9]+'</span><br></span>';
	greavesCount += parseInt(mosaic14Skills[3])
	};
	if (typeof mosaic15Skills[0] !== 'undefined') {
		document.getElementById("mosaic15Img").innerHTML = '<img src="../images/item/'+mosaic15Skills[10]+'.png" class="mosaicImage"> '+translate(mosaic15Skills[2])+' - ';
	    document.getElementById("mosaic15Skills").innerHTML = '<span class"no'+mosaic15Skills[5]+'"><span class="skill'+mosaic15Skills[6]+'">'+translate(mosaic15Skills[5])+': '+mosaic15Skills[6]+'</span>&nbsp;&nbsp;&nbsp;<span class="no'+mosaic15Skills[8]+' skill'+mosaic15Skills[9]+'">'+translate(mosaic15Skills[8])+': '+mosaic15Skills[9]+'</span><br></span>';
	greavesCount += parseInt(mosaic15Skills[3])
	};

// checks armor type of all armors by adding the strings together and checking them for differences. If the set is not complete it will not output as error, rather the border will be black
	var sumType = "";
	sumType = helmetType+vambracesType+armorType+waistType+greavesType;
	console.log("armor types: "+sumType);
	if (sumType == "00000") {console.log('Blademaster'); document.getElementById('typecolor').style.borderColor = '#8aff2b';} 
	if (sumType == "11111") {console.log('Gunner'); document.getElementById('typecolor').style.borderColor = '#5cbcfe';}
	if (sumType == "00001" || sumType == "00010" || sumType == "00011" || sumType == "00100" || sumType == "00101" || sumType == "00110" || sumType == "00111" || sumType == "01000" || sumType == "01001" || sumType == "01010" || sumType == "01011" || sumType == "01100" || sumType == "01101" || sumType == "01110" || sumType == "01111" || sumType == "10000" || sumType == "10001" || sumType == "10010" || sumType == "10011" || sumType == "10100" || sumType == "10101" || sumType == "10110" || sumType == "10111" || sumType == "11000" || sumType == "11001" || sumType == "11010" || sumType == "11011" || sumType == "11100" || sumType == "11101" || sumType == "11110") {console.log('not same type'); document.getElementById('typecolor').style.borderColor = '#f44336';}
	if (helmCount > helmetMosaicNum) {console.log('Too many mosaics'); document.getElementById('typecolor').style.borderColor = '#f44336';}
	if (vambracesCount > vambracesMosaicNum) {console.log('Too many mosaics'); document.getElementById('typecolor').style.borderColor = '#f44336';}
	if (armorCount > armorMosaicNum) {console.log('Too many mosaics'); document.getElementById('typecolor').style.borderColor = '#f44336';}
	if (waistCount > waistMosaicNum) {console.log('Too many mosaics'); document.getElementById('typecolor').style.borderColor = '#f44336';}
	if (greavesCount > greavesMosaicNum) {console.log('Too many mosaics'); document.getElementById('typecolor').style.borderColor = '#f44336';}
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
function filter(aID) {var arr = armorArray; filterArmor = $.grep(arr, function(element, index) {return element.iID == aID;}); return filterArmor;};
function filterj(aID) {var arr = jewelryArray; filterJewelry = $.grep(arr, function(element, index) {return element.iID == aID;}); return filterJewelry;};
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
	if (typeof mosaic2Skills[5] !== 'undefined') {skills[translate(mosaic2Skills[5])] = skills[translate(mosaic2Skills[5])] + parseInt(mosaic2Skills[6]);};
	if (typeof mosaic2Skills[8] !== 'undefined') {skills[translate(mosaic2Skills[8])] = skills[translate(mosaic2Skills[8])] + parseInt(mosaic2Skills[9]);};
	if (typeof mosaic3Skills[5] !== 'undefined') {skills[translate(mosaic3Skills[5])] = skills[translate(mosaic3Skills[5])] + parseInt(mosaic3Skills[6]);};
	if (typeof mosaic3Skills[8] !== 'undefined') {skills[translate(mosaic3Skills[8])] = skills[translate(mosaic3Skills[8])] + parseInt(mosaic3Skills[9]);};
	if (typeof mosaic4Skills[5] !== 'undefined') {skills[translate(mosaic4Skills[5])] = skills[translate(mosaic4Skills[5])] + parseInt(mosaic4Skills[6]);};
	if (typeof mosaic4Skills[8] !== 'undefined') {skills[translate(mosaic4Skills[8])] = skills[translate(mosaic4Skills[8])] + parseInt(mosaic4Skills[9]);};
	if (typeof mosaic5Skills[5] !== 'undefined') {skills[translate(mosaic5Skills[5])] = skills[translate(mosaic5Skills[5])] + parseInt(mosaic5Skills[6]);};
	if (typeof mosaic5Skills[8] !== 'undefined') {skills[translate(mosaic5Skills[8])] = skills[translate(mosaic5Skills[8])] + parseInt(mosaic5Skills[9]);};
	if (typeof mosaic6Skills[5] !== 'undefined') {skills[translate(mosaic6Skills[5])] = skills[translate(mosaic6Skills[5])] + parseInt(mosaic6Skills[6]);};
	if (typeof mosaic6Skills[8] !== 'undefined') {skills[translate(mosaic6Skills[8])] = skills[translate(mosaic6Skills[8])] + parseInt(mosaic6Skills[9]);};
	if (typeof mosaic7Skills[5] !== 'undefined') {skills[translate(mosaic7Skills[5])] = skills[translate(mosaic7Skills[5])] + parseInt(mosaic7Skills[6]);};
	if (typeof mosaic7Skills[8] !== 'undefined') {skills[translate(mosaic7Skills[8])] = skills[translate(mosaic7Skills[8])] + parseInt(mosaic7Skills[9]);};
	if (typeof mosaic8Skills[5] !== 'undefined') {skills[translate(mosaic8Skills[5])] = skills[translate(mosaic8Skills[5])] + parseInt(mosaic8Skills[6]);};
	if (typeof mosaic8Skills[8] !== 'undefined') {skills[translate(mosaic8Skills[8])] = skills[translate(mosaic8Skills[8])] + parseInt(mosaic8Skills[9]);};
	if (typeof mosaic9Skills[5] !== 'undefined') {skills[translate(mosaic9Skills[5])] = skills[translate(mosaic9Skills[5])] + parseInt(mosaic9Skills[6]);};
	if (typeof mosaic9Skills[8] !== 'undefined') {skills[translate(mosaic9Skills[8])] = skills[translate(mosaic9Skills[8])] + parseInt(mosaic9Skills[9]);};
	if (typeof mosaic10Skills[5] !== 'undefined') {skills[translate(mosaic10Skills[5])] = skills[translate(mosaic10Skills[5])] + parseInt(mosaic10Skills[6]);};
	if (typeof mosaic10Skills[8] !== 'undefined') {skills[translate(mosaic10Skills[8])] = skills[translate(mosaic10Skills[8])] + parseInt(mosaic10Skills[9]);};
	if (typeof mosaic11Skills[5] !== 'undefined') {skills[translate(mosaic11Skills[5])] = skills[translate(mosaic11Skills[5])] + parseInt(mosaic11Skills[6]);};
	if (typeof mosaic11Skills[8] !== 'undefined') {skills[translate(mosaic11Skills[8])] = skills[translate(mosaic11Skills[8])] + parseInt(mosaic11Skills[9]);};
	if (typeof mosaic12Skills[5] !== 'undefined') {skills[translate(mosaic12Skills[5])] = skills[translate(mosaic12Skills[5])] + parseInt(mosaic12Skills[6]);};
	if (typeof mosaic12Skills[8] !== 'undefined') {skills[translate(mosaic12Skills[8])] = skills[translate(mosaic12Skills[8])] + parseInt(mosaic12Skills[9]);};
	if (typeof mosaic13Skills[5] !== 'undefined') {skills[translate(mosaic13Skills[5])] = skills[translate(mosaic13Skills[5])] + parseInt(mosaic13Skills[6]);};
	if (typeof mosaic13Skills[8] !== 'undefined') {skills[translate(mosaic13Skills[8])] = skills[translate(mosaic13Skills[8])] + parseInt(mosaic13Skills[9]);};
	if (typeof mosaic14Skills[5] !== 'undefined') {skills[translate(mosaic14Skills[5])] = skills[translate(mosaic14Skills[5])] + parseInt(mosaic14Skills[6]);};
	if (typeof mosaic14Skills[8] !== 'undefined') {skills[translate(mosaic14Skills[8])] = skills[translate(mosaic14Skills[8])] + parseInt(mosaic14Skills[9]);};
	if (typeof mosaic15Skills[5] !== 'undefined') {skills[translate(mosaic15Skills[5])] = skills[translate(mosaic15Skills[5])] + parseInt(mosaic15Skills[6]);};
	if (typeof mosaic15Skills[8] !== 'undefined') {skills[translate(mosaic15Skills[8])] = skills[translate(mosaic15Skills[8])] + parseInt(mosaic15Skills[9]);};
};
function getPassive(sname, value) {
// check skill value and store passive if it meets the criteria
	passive = '';
	var positiveSkills = [];
	var negativeSkills = [];
	for(i = 0; i < skillsArray.length; i ++) {
		if (parseInt(skillsArray[i].data[7]) > 0) {positiveSkills.push(skillsArray[i])}
		if (parseInt(skillsArray[i].data[7]) < 0) {negativeSkills.push(skillsArray[i])}
	}
	if (value > 0) {
		for(i = positiveSkills.length-1; i > 0; i --) {
			if (sname == translate(positiveSkills[i].data[3]) && value >= parseInt(positiveSkills[i].data[7])) {passive = translate(positiveSkills[i].data[5]);};
		}
	}
	if (value < 0) {
		for(i = 0; i < negativeSkills.length; i ++) {
			if (sname == translate(negativeSkills[i].data[3]) && value <= parseInt(negativeSkills[i].data[7])) {passive = translate(negativeSkills[i].data[5]);};
		}
	}
// output passive skill
	return passive
};

function skillnamesjs() {
	var tempArr = [];
	for(i = 0; i < skillsArray.length; i ++) {
		var skillTemp = translate(skillsArray[i].data[3])
		tempArr.push(skillTemp)
	}
	var tempArr2 = [];
	$.each(tempArr, function(i, el) {
		if ($.inArray(el, tempArr2) === -1) tempArr2.push(el);
	});
	return tempArr2
};
function skillsjs() {
	var tempArr = {};
	for(i = 0; i < skillNames.length; i ++) {tempArr[translate(skillNames[i])] = 0;}
	return tempArr
};
function removeAll() {
  removeParam("1"); removeParam("2"); removeParam("3"); removeParam("4"); removeParam("5"); removeParam("6"); removeParam("7"); removeParam("8"); removeParam("9"); removeParam("10"); removeParam("11"); removeParam("12"); removeParam("13"); removeParam("14"); removeMosaics("1"); removeMosaics("2"); removeMosaics("3"); removeMosaics("4"); removeMosaics("5");
  delete helmetType; delete vambracesType; delete armorType; delete waistType; delete greavesType;
  var helmetType; var vambracesType; var armorType; var waistType; var greavesType;
  document.getElementById("helmetImg").innerHTML = '';
  document.getElementById("helmet").innerHTML = 'No Helmet';
  document.getElementById("helmetSkills").innerHTML = '';
  document.getElementById("helmetMosaic").innerHTML = '';
  document.getElementById("vambracesImg").innerHTML = '';
  document.getElementById("vambraces").innerHTML = 'No Vambraces';
  document.getElementById("vambracesSkills").innerHTML = '';
  document.getElementById("vambracesMosaic").innerHTML = '';
  document.getElementById("armorImg").innerHTML = '';
  document.getElementById("armor").innerHTML = 'No Armor';
  document.getElementById("armorSkills").innerHTML = '';
  document.getElementById("armorMosaic").innerHTML = '';
  document.getElementById("waistImg").innerHTML = '';
  document.getElementById("waist").innerHTML = 'No Waist';
  document.getElementById("waistSkills").innerHTML = '';
  document.getElementById("waistMosaic").innerHTML = '';
  document.getElementById("greavesImg").innerHTML = '';
  document.getElementById("greaves").innerHTML = 'No Greaves';
  document.getElementById("greavesSkills").innerHTML = '';
  document.getElementById("greavesMosaic").innerHTML = '';
  document.getElementById("mosaic1Img").innerHTML = '';
  document.getElementById("mosaic1Skills").innerHTML = '';
  document.getElementById("mosaic2Img").innerHTML = '';
  document.getElementById("mosaic2Skills").innerHTML = '';
  document.getElementById("mosaic3Img").innerHTML = '';
  document.getElementById("mosaic3Skills").innerHTML = '';
  document.getElementById("mosaic4Img").innerHTML = '';
  document.getElementById("mosaic4Skills").innerHTML = '';
  document.getElementById("mosaic5Img").innerHTML = '';
  document.getElementById("mosaic5Skills").innerHTML = '';
  document.getElementById("mosaic6Img").innerHTML = '';
  document.getElementById("mosaic6Skills").innerHTML = '';
  document.getElementById("mosaic7Img").innerHTML = '';
  document.getElementById("mosaic7Skills").innerHTML = '';
  document.getElementById("mosaic8Img").innerHTML = '';
  document.getElementById("mosaic8Skills").innerHTML = '';
  document.getElementById("mosaic9Img").innerHTML = '';
  document.getElementById("mosaic9Skills").innerHTML = '';
  document.getElementById("mosaic10Img").innerHTML = '';
  document.getElementById("mosaic10Skills").innerHTML = '';
  document.getElementById("mosaic11Img").innerHTML = '';
  document.getElementById("mosaic11Skills").innerHTML = '';
  document.getElementById("mosaic12Img").innerHTML = '';
  document.getElementById("mosaic12Skills").innerHTML = '';
  document.getElementById("mosaic13Img").innerHTML = '';
  document.getElementById("mosaic13Skills").innerHTML = '';
  document.getElementById("mosaic14Img").innerHTML = '';
  document.getElementById("mosaic14Skills").innerHTML = '';
  document.getElementById("mosaic15Img").innerHTML = '';
  document.getElementById("mosaic15Skills").innerHTML = '';
  document.getElementById("talismanImg").innerHTML = '';
  document.getElementById("talisman").innerHTML = 'No Talisman';
  document.getElementById("talismanSkills1").innerHTML = '';
  document.getElementById("talismanSkills1Value").innerHTML = '';
  document.getElementById("talismanSkills2").innerHTML = '';
  document.getElementById("talismanSkills2Value").innerHTML = '';
  document.getElementById("talismanSkills3").innerHTML = '';
  document.getElementById("talismanSkills3Value").innerHTML = '';
  document.getElementById("necklaceImg").innerHTML = '';
  document.getElementById("necklace").innerHTML = 'No Necklace';
  document.getElementById("necklaceSkills").innerHTML = '';
  document.getElementById("ringImg").innerHTML = '';
  document.getElementById("ring").innerHTML = 'No Ring';
  document.getElementById("ringSkills").innerHTML = '';
  document.getElementById('typecolor').style.borderColor = '#000000';
  helmetMosaicjs(0);
  vambracesMosaicjs(0);
  armorMosaicjs(0);
  waistMosaicjs(0);
  greavesMosaicjs(0);
  displayData();
}
function removeMosaics(type) {
  if(type=="1"){
    removeParam("15"); removeParam("16"); removeParam("17");
    document.getElementById("mosaic1Img").innerHTML = '';
    document.getElementById("mosaic1Skills").innerHTML = '';
    document.getElementById("mosaic2Img").innerHTML = '';
    document.getElementById("mosaic2Skills").innerHTML = '';
    document.getElementById("mosaic3Img").innerHTML = '';
    document.getElementById("mosaic3Skills").innerHTML = '';
  }
  if(type=="2"){
    removeParam("18"); removeParam("19"); removeParam("20");
    document.getElementById("mosaic4Img").innerHTML = '';
    document.getElementById("mosaic4Skills").innerHTML = '';
    document.getElementById("mosaic5Img").innerHTML = '';
    document.getElementById("mosaic5Skills").innerHTML = '';
    document.getElementById("mosaic6Img").innerHTML = '';
    document.getElementById("mosaic6Skills").innerHTML = '';
  }
  if(type=="3"){
    removeParam("21"); removeParam("22"); removeParam("23");
    document.getElementById("mosaic7Img").innerHTML = '';
    document.getElementById("mosaic7Skills").innerHTML = '';
    document.getElementById("mosaic8Img").innerHTML = '';
    document.getElementById("mosaic8Skills").innerHTML = '';
    document.getElementById("mosaic9Img").innerHTML = '';
    document.getElementById("mosaic9Skills").innerHTML = '';
  }
  if(type=="4"){
    removeParam("24"); removeParam("25"); removeParam("26");
    document.getElementById("mosaic10Img").innerHTML = '';
    document.getElementById("mosaic10Skills").innerHTML = '';
    document.getElementById("mosaic11Img").innerHTML = '';
    document.getElementById("mosaic11Skills").innerHTML = '';
    document.getElementById("mosaic12Img").innerHTML = '';
    document.getElementById("mosaic12Skills").innerHTML = '';
  }
  if(type=="5"){
    removeParam("27"); removeParam("28"); removeParam("29");
    document.getElementById("mosaic13Img").innerHTML = '';
    document.getElementById("mosaic13Skills").innerHTML = '';
    document.getElementById("mosaic14Img").innerHTML = '';
    document.getElementById("mosaic14Skills").innerHTML = '';
    document.getElementById("mosaic15Img").innerHTML = '';
    document.getElementById("mosaic15Skills").innerHTML = '';
  }
}