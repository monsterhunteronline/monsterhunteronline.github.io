var typeArray = [
{"type": "(B)"}, 
{"type": "(G)"}
];
var page = "armor";
function armorjs() {
	helmetMosaicjs(0);
	armortype = "";
	var url = getUrlParameter('search');
	if (typeof url !== 'undefined') {
	$('#inputText').val(url);
	}
	$('#button').click();
};
$('#inputText').keyup(function(event) {
	if(event.keyCode == 13){
		$('#button').click();
	}
});
$('#blademaster').on('click', function() {
	armortype = "0";
	$('#button').click();
});
$('#gunner').on('click', function() {
	armortype = "1";
	$('#button').click();
});
$('#both').on('click', function() {
	armortype = "";
	$('#button').click();
});
$('#button').on('click', function() {
	var search = $('#inputText').val();
	if (search == "") {
		var arr = armorArray
	} else {
		var filtered = [];
		for(i = 0; i < armorArray.length; i ++) {
			if (armorArray[i].data[3].toUpperCase().indexOf(armortype.toUpperCase()) >= 0) {
				filtered.push(armorArray[i])
			}
		}
		var filtered1 = filtered;
		filtered = [];
		for(i = 0; i < filtered1.length; i += 5) {
			var skillstring = filtered1[i].data[57].toUpperCase()+' '+translate(filtered1[i].data[2]).toUpperCase()+' '+translate(filtered1[i].data[56]).toUpperCase()+' '+translate(filtered1[i].data[38]).toUpperCase()+' '+translate(filtered1[i].data[40]).toUpperCase()+' '+translate(filtered1[i].data[42]).toUpperCase()+' '+translate(filtered1[i].data[44]).toUpperCase()+' '+translate(filtered1[i].data[46]).toUpperCase()+' '+translate(filtered1[i+1].data[38]).toUpperCase()+' '+translate(filtered1[i+1].data[40]).toUpperCase()+' '+translate(filtered1[i+1].data[42]).toUpperCase()+' '+translate(filtered1[i+1].data[44]).toUpperCase()+' '+translate(filtered1[i+1].data[46]).toUpperCase()+' '+translate(filtered1[i+2].data[38]).toUpperCase()+' '+translate(filtered1[i+2].data[40]).toUpperCase()+' '+translate(filtered1[i+2].data[42]).toUpperCase()+' '+translate(filtered1[i+2].data[44]).toUpperCase()+' '+translate(filtered1[i+2].data[46]).toUpperCase()+' '+translate(filtered1[i+3].data[38]).toUpperCase()+' '+translate(filtered1[i+3].data[40]).toUpperCase()+' '+translate(filtered1[i+3].data[42]).toUpperCase()+' '+translate(filtered1[i+3].data[44]).toUpperCase()+' '+translate(filtered1[i+3].data[46]).toUpperCase()+' '+translate(filtered1[i+4].data[38]).toUpperCase()+' '+translate(filtered1[i+4].data[40]).toUpperCase()+' '+translate(filtered1[i+4].data[42]).toUpperCase()+' '+translate(filtered1[i+4].data[44]).toUpperCase()+' '+translate(filtered1[i+4].data[46]).toUpperCase()+' '+filtered1[i].data[57].toUpperCase()+' '+filtered1[i].data[2].toUpperCase()+' '+filtered1[i].data[56].toUpperCase()+' '+filtered1[i].data[38].toUpperCase()+' '+filtered1[i].data[40].toUpperCase()+' '+filtered1[i].data[42].toUpperCase()+' '+filtered1[i].data[44].toUpperCase()+' '+filtered1[i].data[46].toUpperCase()+' '+filtered1[i+1].data[38].toUpperCase()+' '+filtered1[i+1].data[40].toUpperCase()+' '+filtered1[i+1].data[42].toUpperCase()+' '+filtered1[i+1].data[44].toUpperCase()+' '+filtered1[i+1].data[46].toUpperCase()+' '+filtered1[i+2].data[38].toUpperCase()+' '+filtered1[i+2].data[40].toUpperCase()+' '+filtered1[i+2].data[42].toUpperCase()+' '+filtered1[i+2].data[44].toUpperCase()+' '+filtered1[i+2].data[46].toUpperCase()+' '+filtered1[i+3].data[38].toUpperCase()+' '+filtered1[i+3].data[40].toUpperCase()+' '+filtered1[i+3].data[42].toUpperCase()+' '+filtered1[i+3].data[44].toUpperCase()+' '+filtered1[i+3].data[46].toUpperCase()+' '+filtered1[i+4].data[38].toUpperCase()+' '+filtered1[i+4].data[40].toUpperCase()+' '+filtered1[i+4].data[42].toUpperCase()+' '+filtered1[i+4].data[44].toUpperCase()+' '+filtered1[i+4].data[46].toUpperCase();
			if (skillstring.toUpperCase().indexOf(search.toUpperCase()) >= 0) {
				filtered.push(filtered1[i])
				filtered.push(filtered1[i+1])
				filtered.push(filtered1[i+2])
				filtered.push(filtered1[i+3])
				filtered.push(filtered1[i+4])
			}
		}
		var arr = filtered
	}
	var out = "";
	var i;
	var ii;
$('#clear').on('click', function() {
	$('#inputText').val('');
	$('#button').click();
});
	for(i = 0; i < arr.length; i += 5) {
		var largescreen = "";
		for(ii = 0; ii < 5; ii ++) {
//Large Screen and Small Screen
			largescreen += '<div class="col s12 hide-on-med-only l2-10"><table class="left-margin"><thead><tr><th><img onclick="updateurl('+arr[i+ii].data[54]+', '+arr[i+ii].data[0]+'); removeMosaics('+arr[i+ii].data[54]+'); Materialize.toast(`'+arr[i+ii].data[1]+' Added!`, 3000); displayData();" src="../images/item/'+arr[i+ii].data[13]+'.png" class="armorimage img-link"></th><th class="bold">'+arr[i+ii].data[1]+'</th></tr></thead></table><table class="armorinfo left-margin"><tbody><tr>'+
			//defense
			'<td>Defense: '+arr[i+ii].data[6]+'</td></tr><tr class="attrib'+arr[i+ii].data[7]+arr[i+ii].data[8]+arr[i+ii].data[9]+arr[i+ii].data[10]+arr[i+ii].data[11]+'">'+
			//attributes
			'<td>[Attributes]</td></tr>'+
			//water	resistance
			'<tr class="blue no'+arr[i+ii].data[7]+'"><td class="blue no'+arr[i+ii].data[7]+'">Water Resistance: '+arr[i+ii].data[7]+'</td></tr>'+
			//fire resistance
			'<tr class="red no'+arr[i+ii].data[8]+'"><td>Fire Resistance: '+arr[i+ii].data[8]+'</td></tr>'+
			//thunder resistance
			'<tr class="yellow no'+arr[i+ii].data[9]+'"><td>Thunder Resistance: '+arr[i+ii].data[9]+'</td></tr>'+
			//dragon resistance
			'<tr class="purple no'+arr[i+ii].data[10]+'"><td>Dragon Resistance: '+arr[i+ii].data[10]+'</td></tr>'+
			//ice resistance
			'<tr class="light-blue no'+arr[i+ii].data[11]+'"><td>Ice Resistance: '+arr[i+ii].data[11]+'</td></tr><tr>'+
			//mosaic slots
			'<td>Mosaic Slots: '+arr[i+ii].data[5]+'</td></tr><tr>'+
			//passive skills
			'<td>[Passive Skills]</td></tr><tr class="'+translate(arr[i+ii].data[38])+' skill'+arr[i+ii].data[39]+'"><td><a href="/skills/?search='+translate(arr[i+ii].data[38])+'" target="_blank">'+translate(arr[i+ii].data[38])+': <span class="skillamount">'+arr[i+ii].data[39]+'</span></a></td></tr><tr class="'+translate(arr[i+ii].data[40])+' skill'+arr[i+ii].data[41]+'"><td><a href="/skills/?search='+translate(arr[i+ii].data[40])+'" target="_blank">'+translate(arr[i+ii].data[40])+': <span class="skillamount">'+arr[i+ii].data[41]+'</span></a></td></tr><tr class="'+translate(arr[i+ii].data[42])+' skill'+arr[i+ii].data[43]+'"><td><a href="/skills/?search='+translate(arr[i+ii].data[42])+'" target="_blank">'+translate(arr[i+ii].data[42])+': <span class="skillamount">'+arr[i+ii].data[43]+'</span></a></td></tr><tr class="'+translate(arr[i+ii].data[44])+' skill'+arr[i+ii].data[45]+'"><td><a href="/skills/?search='+translate(arr[i+ii].data[44])+'" target="_blank">'+translate(arr[i+ii].data[44])+': <span class="skillamount">'+arr[i+ii].data[45]+'</span></a></td></tr><tr class="'+translate(arr[i+ii].data[46])+' skill'+arr[i+ii].data[47]+'"><td><a href="/skills/?search='+translate(arr[i+ii].data[46])+'" target="_blank">'+translate(arr[i+ii].data[46])+': <span class="skillamount">'+arr[i+ii].data[47]+'</span></a></td></tr><tr>'+
			//forging mats
			'<td colspan="2">[Forging Material]</td></tr><tr class="no'+arr[i+ii].data[21]+'"><td><a href="/materials/?search='+translate(arr[i+ii].data[21])+'" target="_blank">'+translate(arr[i+ii].data[21])+'</a> x'+arr[i+ii].data[22]+'</td></tr><tr class="no'+arr[i+ii].data[24]+'"><td><a href="/materials/?search='+translate(arr[i+ii].data[24])+'" target="_blank">'+translate(arr[i+ii].data[24])+'</a> x'+arr[i+ii].data[25]+'</td></tr><tr class="no'+arr[i+ii].data[27]+'"><td><a href="/materials/?search='+translate(arr[i+ii].data[27])+'" target="_blank">'+translate(arr[i+ii].data[27])+'</a> x'+arr[i+ii].data[28]+'</td></tr><tr class="no'+arr[i+ii].data[30]+'"><td><a href="/materials/?search='+translate(arr[i+ii].data[30])+'" target="_blank">'+translate(arr[i+ii].data[30])+'</a> x'+arr[i+ii].data[31]+'</td></tr><tr class="no'+arr[i+ii].data[33]+'"><td><a href="/materials/?search='+translate(arr[i+ii].data[33])+'" target="_blank">'+translate(arr[i+ii].data[33])+'</a> x'+arr[i+ii].data[34]+'</td></tr><tr class="no'+arr[i+ii].data[37]+'"><td><a href="/materials/?search='+translate(arr[i+ii].data[36])+'" target="_blank">'+translate(arr[i+ii].data[36])+'</a> x'+arr[i+ii].data[37]+'</td></tr></tbody></table></div>';
		}
//Medium Screens 1
		var mediumscreenrow1 = "";
		for(ii = 0; ii < 3; ii ++) {
			mediumscreenrow1 += '<div class="col hide-on-small-only m4 hide-on-large-only"><table class="left-margin"><thead><tr><th><img onclick="updateurl('+arr[i+ii].data[54]+', '+arr[i+ii].data[0]+'); removeMosaics('+arr[i+ii].data[54]+'); Materialize.toast(`'+arr[i+ii].data[1]+' Added!`, 3000); displayData();" src="../images/item/'+arr[i+ii].data[13]+'.png" class="armorimage img-link"></th><th class="bold">'+arr[i+ii].data[1]+'</th></tr></thead></table><table class="armorinfo left-margin"><tbody><tr>'+
			//defense
			'<td>Defense: '+arr[i+ii].data[6]+'</td></tr><tr class="attrib'+arr[i+ii].data[7]+arr[i+ii].data[8]+arr[i+ii].data[9]+arr[i+ii].data[10]+arr[i+ii].data[11]+'">'+
			//attributes
			'<td>[Attributes]</td></tr>'+
			//water	resistance
			'<tr class="blue no'+arr[i+ii].data[7]+'"><td class="blue no'+arr[i+ii].data[7]+'">Water Resistance: '+arr[i+ii].data[7]+'</td></tr>'+
			//fire resistance
			'<tr class="red no'+arr[i+ii].data[8]+'"><td>Fire Resistance: '+arr[i+ii].data[8]+'</td></tr>'+
			//thunder resistance
			'<tr class="yellow no'+arr[i+ii].data[9]+'"><td>Thunder Resistance: '+arr[i+ii].data[9]+'</td></tr>'+
			//dragon resistance
			'<tr class="purple no'+arr[i+ii].data[10]+'"><td>Dragon Resistance: '+arr[i+ii].data[10]+'</td></tr>'+
			//ice resistance
			'<tr class="light-blue no'+arr[i+ii].data[11]+'"><td>Ice Resistance: '+arr[i+ii].data[11]+'</td></tr><tr>'+
			//mosaic slots
			'<td>Mosaic Slots: '+arr[i+ii].data[5]+'</td></tr><tr>'+
			//passive skills
			'<td>[Passive Skills]</td></tr><tr class="'+translate(arr[i+ii].data[38])+' skill'+arr[i+ii].data[39]+'"><td><a href="/skills/?search='+translate(arr[i+ii].data[38])+'" target="_blank">'+translate(arr[i+ii].data[38])+': <span class="skillamount">'+arr[i+ii].data[39]+'</span></a></td></tr><tr class="'+translate(arr[i+ii].data[40])+' skill'+arr[i+ii].data[41]+'"><td><a href="/skills/?search='+translate(arr[i+ii].data[40])+'" target="_blank">'+translate(arr[i+ii].data[40])+': <span class="skillamount">'+arr[i+ii].data[41]+'</span></a></td></tr><tr class="'+translate(arr[i+ii].data[42])+' skill'+arr[i+ii].data[43]+'"><td><a href="/skills/?search='+translate(arr[i+ii].data[42])+'" target="_blank">'+translate(arr[i+ii].data[42])+': <span class="skillamount">'+arr[i+ii].data[43]+'</span></a></td></tr><tr class="'+translate(arr[i+ii].data[44])+' skill'+arr[i+ii].data[45]+'"><td><a href="/skills/?search='+translate(arr[i+ii].data[44])+'" target="_blank">'+translate(arr[i+ii].data[44])+': <span class="skillamount">'+arr[i+ii].data[45]+'</span></a></td></tr><tr class="'+translate(arr[i+ii].data[46])+' skill'+arr[i+ii].data[47]+'"><td><a href="/skills/?search='+translate(arr[i+ii].data[46])+'" target="_blank">'+translate(arr[i+ii].data[46])+': <span class="skillamount">'+arr[i+ii].data[47]+'</span></a></td></tr><tr>'+
			//forging mats
			'<td colspan="2">[Forging Material]</td></tr><tr class="no'+arr[i+ii].data[21]+'"><td><a href="/materials/?search='+translate(arr[i+ii].data[21])+'" target="_blank">'+translate(arr[i+ii].data[21])+'</a> x'+arr[i+ii].data[22]+'</td></tr><tr class="no'+arr[i+ii].data[24]+'"><td><a href="/materials/?search='+translate(arr[i+ii].data[24])+'" target="_blank">'+translate(arr[i+ii].data[24])+'</a> x'+arr[i+ii].data[25]+'</td></tr><tr class="no'+arr[i+ii].data[27]+'"><td><a href="/materials/?search='+translate(arr[i+ii].data[27])+'" target="_blank">'+translate(arr[i+ii].data[27])+'</a> x'+arr[i+ii].data[28]+'</td></tr><tr class="no'+arr[i+ii].data[30]+'"><td><a href="/materials/?search='+translate(arr[i+ii].data[30])+'" target="_blank">'+translate(arr[i+ii].data[30])+'</a> x'+arr[i+ii].data[31]+'</td></tr><tr class="no'+arr[i+ii].data[33]+'"><td><a href="/materials/?search='+translate(arr[i+ii].data[33])+'" target="_blank">'+translate(arr[i+ii].data[33])+'</a> x'+arr[i+ii].data[34]+'</td></tr><tr class="no'+arr[i+ii].data[37]+'"><td><a href="/materials/?search='+translate(arr[i+ii].data[36])+'" target="_blank">'+translate(arr[i+ii].data[36])+'</a> x'+arr[i+ii].data[37]+'</td></tr></tbody></table></div>';
		}
//Medium screens 2
		var mediumscreenrow2 = "";
		for(ii = 3; ii < 5; ii ++) {
			mediumscreenrow2 += '<div class="col hide-on-small-only m4 hide-on-large-only"><table class="left-margin"><thead><tr><th><img onclick="updateurl('+arr[i+ii].data[54]+', '+arr[i+ii].data[0]+'); removeMosaics('+arr[i+ii].data[54]+'); Materialize.toast(`'+arr[i+ii].data[1]+' Added!`, 3000); displayData();" src="../images/item/'+arr[i+ii].data[13]+'.png" class="armorimage img-link"></th><th class="bold">'+arr[i+ii].data[1]+'</th></tr></thead></table><table class="armorinfo left-margin"><tbody><tr>'+
			//defense
			'<td>Defense: '+arr[i+ii].data[6]+'</td></tr><tr class="attrib'+arr[i+ii].data[7]+arr[i+ii].data[8]+arr[i+ii].data[9]+arr[i+ii].data[10]+arr[i+ii].data[11]+'">'+
			//attributes
			'<td>[Attributes]</td></tr>'+
			//water	resistance
			'<tr class="blue no'+arr[i+ii].data[7]+'"><td class="blue no'+arr[i+ii].data[7]+'">Water Resistance: '+arr[i+ii].data[7]+'</td></tr>'+
			//fire resistance
			'<tr class="red no'+arr[i+ii].data[8]+'"><td>Fire Resistance: '+arr[i+ii].data[8]+'</td></tr>'+
			//thunder resistance
			'<tr class="yellow no'+arr[i+ii].data[9]+'"><td>Thunder Resistance: '+arr[i+ii].data[9]+'</td></tr>'+
			//dragon resistance
			'<tr class="purple no'+arr[i+ii].data[10]+'"><td>Dragon Resistance: '+arr[i+ii].data[10]+'</td></tr>'+
			//ice resistance
			'<tr class="light-blue no'+arr[i+ii].data[11]+'"><td>Ice Resistance: '+arr[i+ii].data[11]+'</td></tr><tr>'+
			//mosaic slots
			'<td>Mosaic Slots: '+arr[i+ii].data[5]+'</td></tr><tr>'+
			//passive skills
			'<td>[Passive Skills]</td></tr><tr class="'+translate(arr[i+ii].data[38])+' skill'+arr[i+ii].data[39]+'"><td><a href="/skills/?search='+translate(arr[i+ii].data[38])+'" target="_blank">'+translate(arr[i+ii].data[38])+': <span class="skillamount">'+arr[i+ii].data[39]+'</span></a></td></tr><tr class="'+translate(arr[i+ii].data[40])+' skill'+arr[i+ii].data[41]+'"><td><a href="/skills/?search='+translate(arr[i+ii].data[40])+'" target="_blank">'+translate(arr[i+ii].data[40])+': <span class="skillamount">'+arr[i+ii].data[41]+'</span></a></td></tr><tr class="'+translate(arr[i+ii].data[42])+' skill'+arr[i+ii].data[43]+'"><td><a href="/skills/?search='+translate(arr[i+ii].data[42])+'" target="_blank">'+translate(arr[i+ii].data[42])+': <span class="skillamount">'+arr[i+ii].data[43]+'</span></a></td></tr><tr class="'+translate(arr[i+ii].data[44])+' skill'+arr[i+ii].data[45]+'"><td><a href="/skills/?search='+translate(arr[i+ii].data[44])+'" target="_blank">'+translate(arr[i+ii].data[44])+': <span class="skillamount">'+arr[i+ii].data[45]+'</span></a></td></tr><tr class="'+translate(arr[i+ii].data[46])+' skill'+arr[i+ii].data[47]+'"><td><a href="/skills/?search='+translate(arr[i+ii].data[46])+'" target="_blank">'+translate(arr[i+ii].data[46])+': <span class="skillamount">'+arr[i+ii].data[47]+'</span></a></td></tr><tr>'+
			//forging mats
			'<td colspan="2">[Forging Material]</td></tr><tr class="no'+arr[i+ii].data[21]+'"><td><a href="/materials/?search='+translate(arr[i+ii].data[21])+'" target="_blank">'+translate(arr[i+ii].data[21])+'</a> x'+arr[i+ii].data[22]+'</td></tr><tr class="no'+arr[i+ii].data[24]+'"><td><a href="/materials/?search='+translate(arr[i+ii].data[24])+'" target="_blank">'+translate(arr[i+ii].data[24])+'</a> x'+arr[i+ii].data[25]+'</td></tr><tr class="no'+arr[i+ii].data[27]+'"><td><a href="/materials/?search='+translate(arr[i+ii].data[27])+'" target="_blank">'+translate(arr[i+ii].data[27])+'</a> x'+arr[i+ii].data[28]+'</td></tr><tr class="no'+arr[i+ii].data[30]+'"><td><a href="/materials/?search='+translate(arr[i+ii].data[30])+'" target="_blank">'+translate(arr[i+ii].data[30])+'</a> x'+arr[i+ii].data[31]+'</td></tr><tr class="no'+arr[i+ii].data[33]+'"><td><a href="/materials/?search='+translate(arr[i+ii].data[33])+'" target="_blank">'+translate(arr[i+ii].data[33])+'</a> x'+arr[i+ii].data[34]+'</td></tr><tr class="no'+arr[i+ii].data[37]+'"><td><a href="/materials/?search='+translate(arr[i+ii].data[36])+'" target="_blank">'+translate(arr[i+ii].data[36])+'</a> x'+arr[i+ii].data[37]+'</td></tr></tbody></table></div>';
		}
		out+= '<li><div class="collapsible-header"><div><div class="left"><img src="../images/item/'+arr[i].data[13]+'.png" class="armorimage">&nbsp;&nbsp;&nbsp;&nbsp;<span class="type'+arr[i].data[3]+'">'+typeArray[arr[i].data[3]].type+'</span>&nbsp;&nbsp;</div><div class="truncate-small"><span class="Lv'+arr[i].data[57].substring(3,5)+'">Prototype </span>'+translate(arr[i].data[2])+' Armor</div><span class="right">'+arr[i].data[57]+'</span></div><span class="bold">'+translate(arr[i].data[56])+'</span></div><div class="collapsible-body grey lighten-2"><div class="row">'+largescreen+mediumscreenrow1+'</div><div class="row">'+mediumscreenrow2+'</div></div></li>';
	}
document.getElementById("armorlist").innerHTML = out;
initializeMosaicOptions();
});