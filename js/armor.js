var armortype;

$(function() {
	armortype = "";
	$('#button').click();
});
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
	var arr = armorArray;
	var out = "";
	var i;
	var ii;

	for(i = 0; i < arr.length; i += 5) {
		var out1 = "";
		for(ii = 0; ii < 5; ii ++) {
//Large Screen and Small Screen
			out1 += '<div class="col s12 hide-on-med-only l2-10">'+
						'<table class="left-margin">'+
							'<thead>'+
								'<tr>'+
									'<th><img src="../images/item/'+arr[i+ii].data[13]+'.png" class="armorimage"></th>'+
									'<th class="bold">'+arr[i+ii].data[1]+'</th>'+
								'</tr>'+
							'</thead>'+
						'</table>'+
						'<table class="armorinfo left-margin">'+
							'<tbody>'+
								'<tr>'+
			//defense
									'<td>Defense: '+arr[i+ii].data[6]+'</td>'+
								'</tr>'+
								'<tr class="attrib'+arr[i+ii].data[7]+arr[i+ii].data[8]+arr[i+ii].data[9]+arr[i+ii].data[10]+arr[i+ii].data[11]+'">'+
			//attributes
									'<td>[Attributes]</td>'+
								'</tr>'+
			//water	resistance
								'<tr class="blue no'+arr[i+ii].data[7]+'">'+
									'<td class="blue no'+arr[i+ii].data[7]+'">Water Resistance: '+arr[i+ii].data[7]+'</td>'+
								'</tr>'+
			//fire resistance
								'<tr class="red no'+arr[i+ii].data[8]+'">'+
									'<td>Fire Resistance: '+arr[i+ii].data[8]+'</td>'+
								'</tr>'+
			//thunder resistance
								'<tr class="yellow no'+arr[i+ii].data[9]+'">'+
									'<td>Thunder Resistance: '+arr[i+ii].data[9]+'</td>'+
								'</tr>'+
			//dragon resistance
								'<tr class="purple no'+arr[i+ii].data[10]+'">'+
									'<td>Dragon Resistance: '+arr[i+ii].data[10]+'</td>'+
								'</tr>'+
			//ice resistance
								'<tr class="light-blue no'+arr[i+ii].data[11]+'">'+
									'<td>Ice Resistance: '+arr[i+ii].data[11]+'</td>'+
								'</tr>'+
								'<tr>'+
			//mosaic slots
									'<td>Mosaic Slots: '+arr[i+ii].data[5]+'</td>'+
								'</tr>'+
								'<tr>'+
			//passive skills
									'<td>[Passive Skills]</td>'+
								'</tr>'+
								'<tr class="'+arr[i+ii].data[38]+' skill'+arr[i+ii].data[39]+'">'+
									'<td>'+arr[i+ii].data[38]+': <span class="skillamount">'+arr[i+ii].data[39]+'</span></td>'+
								'</tr>'+
								'<tr class="'+arr[i+ii].data[40]+' skill'+arr[i+ii].data[41]+'">'+
									'<td>'+arr[i+ii].data[40]+': <span class="skillamount">'+arr[i+ii].data[41]+'</span></td>'+
								'</tr>'+
								'<tr class="'+arr[i+ii].data[42]+' skill'+arr[i+ii].data[43]+'">'+
									'<td>'+arr[i+ii].data[42]+': <span class="skillamount">'+arr[i+ii].data[43]+'</span></td>'+
								'</tr>'+
								'<tr class="'+arr[i+ii].data[44]+' skill'+arr[i+ii].data[45]+'">'+
									'<td>'+arr[i+ii].data[44]+': <span class="skillamount">'+arr[i+ii].data[45]+'</span></td>'+
								'</tr>'+
								'<tr class="'+arr[i+ii].data[46]+' skill'+arr[i+ii].data[47]+'">'+
									'<td>'+arr[i+ii].data[46]+': <span class="skillamount">'+arr[i+ii].data[47]+'</span></td>'+
								'</tr>'+
								'<tr>'+
			//forging mats
									'<td colspan="2">[Forging Material]</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[21]+'">'+
									'<td>'+arr[i+ii].data[21]+'x'+arr[i+ii].data[22]+'</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[24]+'">'+
									'<td>'+arr[i+ii].data[24]+'x'+arr[i+ii].data[25]+'</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[27]+'">'+
									'<td>'+arr[i+ii].data[27]+'x'+arr[i+ii].data[28]+'</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[30]+'">'+
									'<td>'+arr[i+ii].data[30]+'x'+arr[i+ii].data[31]+'</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[33]+'">'+
									'<td>'+arr[i+ii].data[33]+'x'+arr[i+ii].data[34]+'</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[37]+'">'+
									'<td>'+arr[i+ii].data[36]+'x'+arr[i+ii].data[37]+'</td>'+
								'</tr>'+
							'</tbody>'+
						'</table>'+
					'</div>';
		}
//Medium Screens 1
		var out2 = "";
		for(ii = 0; ii < 3; ii ++) {
			out2 += '<div class="col hide-on-small-only m4 hide-on-large-only">'+
						'<table class="left-margin">'+
							'<thead>'+
								'<tr>'+
									'<th><img src="../images/item/'+arr[i+ii].data[13]+'.png" class="armorimage"></th>'+
									'<th class="bold">'+arr[i+ii].data[1]+'</th>'+
								'</tr>'+
							'</thead>'+
						'</table>'+
						'<table class="armorinfo left-margin">'+
							'<tbody>'+
								'<tr>'+
			//defense
									'<td>Defense: '+arr[i+ii].data[6]+'</td>'+
								'</tr>'+
								'<tr class="attrib'+arr[i+ii].data[7]+arr[i+ii].data[8]+arr[i+ii].data[9]+arr[i+ii].data[10]+arr[i+ii].data[11]+'">'+
			//attributes
									'<td>[Attributes]</td>'+
								'</tr>'+
			//water	resistance
								'<tr class="blue no'+arr[i+ii].data[7]+'">'+
									'<td class="blue no'+arr[i+ii].data[7]+'">Water Resistance: '+arr[i+ii].data[7]+'</td>'+
								'</tr>'+
			//fire resistance
								'<tr class="red no'+arr[i+ii].data[8]+'">'+
									'<td>Fire Resistance: '+arr[i+ii].data[8]+'</td>'+
								'</tr>'+
			//thunder resistance
								'<tr class="yellow no'+arr[i+ii].data[9]+'">'+
									'<td>Thunder Resistance: '+arr[i+ii].data[9]+'</td>'+
								'</tr>'+
			//dragon resistance
								'<tr class="purple no'+arr[i+ii].data[10]+'">'+
									'<td>Dragon Resistance: '+arr[i+ii].data[10]+'</td>'+
								'</tr>'+
			//ice resistance
								'<tr class="light-blue no'+arr[i+ii].data[11]+'">'+
									'<td>Ice Resistance: '+arr[i+ii].data[11]+'</td>'+
								'</tr>'+
								'<tr>'+
			//mosaic slots
									'<td>Mosaic Slots: '+arr[i+ii].data[5]+'</td>'+
								'</tr>'+
								'<tr>'+
			//passive skills
									'<td>[Passive Skills]</td>'+
								'</tr>'+
								'<tr class="'+arr[i+ii].data[38]+' skill'+arr[i+ii].data[39]+'">'+
									'<td>'+arr[i+ii].data[38]+': <span class="skillamount">'+arr[i+ii].data[39]+'</span></td>'+
								'</tr>'+
								'<tr class="'+arr[i+ii].data[40]+' skill'+arr[i+ii].data[41]+'">'+
									'<td>'+arr[i+ii].data[40]+': <span class="skillamount">'+arr[i+ii].data[41]+'</span></td>'+
								'</tr>'+
								'<tr class="'+arr[i+ii].data[42]+' skill'+arr[i+ii].data[43]+'">'+
									'<td>'+arr[i+ii].data[42]+': <span class="skillamount">'+arr[i+ii].data[43]+'</span></td>'+
								'</tr>'+
								'<tr class="'+arr[i+ii].data[44]+' skill'+arr[i+ii].data[45]+'">'+
									'<td>'+arr[i+ii].data[44]+': <span class="skillamount">'+arr[i+ii].data[45]+'</span></td>'+
								'</tr>'+
								'<tr class="'+arr[i+ii].data[46]+' skill'+arr[i+ii].data[47]+'">'+
									'<td>'+arr[i+ii].data[46]+': <span class="skillamount">'+arr[i+ii].data[47]+'</span></td>'+
								'</tr>'+
								'<tr>'+
			//forging mats
									'<td colspan="2">[Forging Material]</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[21]+'">'+
									'<td>'+arr[i+ii].data[21]+'x'+arr[i+ii].data[22]+'</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[24]+'">'+
									'<td>'+arr[i+ii].data[24]+'x'+arr[i+ii].data[25]+'</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[27]+'">'+
									'<td>'+arr[i+ii].data[27]+'x'+arr[i+ii].data[28]+'</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[30]+'">'+
									'<td>'+arr[i+ii].data[30]+'x'+arr[i+ii].data[31]+'</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[33]+'">'+
									'<td>'+arr[i+ii].data[33]+'x'+arr[i+ii].data[34]+'</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[37]+'">'+
									'<td>'+arr[i+ii].data[36]+'x'+arr[i+ii].data[37]+'</td>'+
								'</tr>'+
							'</tbody>'+
						'</table>'+
					'</div>';
		}
//Medium screens 2
		var out3 = "";
		for(ii = 3; ii < 5; ii ++) {
			out3 += '<div class="col hide-on-small-only m4 hide-on-large-only">'+
						'<table class="left-margin">'+
							'<thead>'+
								'<tr>'+
									'<th><img src="../images/item/'+arr[i+ii].data[13]+'.png" class="armorimage"></th>'+
									'<th class="bold">'+arr[i+ii].data[1]+'</th>'+
								'</tr>'+
							'</thead>'+
						'</table>'+
						'<table class="armorinfo left-margin">'+
							'<tbody>'+
								'<tr>'+
			//defense
									'<td>Defense: '+arr[i+ii].data[6]+'</td>'+
								'</tr>'+
								'<tr class="attrib'+arr[i+ii].data[7]+arr[i+ii].data[8]+arr[i+ii].data[9]+arr[i+ii].data[10]+arr[i+ii].data[11]+'">'+
			//attributes
									'<td>[Attributes]</td>'+
								'</tr>'+
			//water	resistance
								'<tr class="blue no'+arr[i+ii].data[7]+'">'+
									'<td class="blue no'+arr[i+ii].data[7]+'">Water Resistance: '+arr[i+ii].data[7]+'</td>'+
								'</tr>'+
			//fire resistance
								'<tr class="red no'+arr[i+ii].data[8]+'">'+
									'<td>Fire Resistance: '+arr[i+ii].data[8]+'</td>'+
								'</tr>'+
			//thunder resistance
								'<tr class="yellow no'+arr[i+ii].data[9]+'">'+
									'<td>Thunder Resistance: '+arr[i+ii].data[9]+'</td>'+
								'</tr>'+
			//dragon resistance
								'<tr class="purple no'+arr[i+ii].data[10]+'">'+
									'<td>Dragon Resistance: '+arr[i+ii].data[10]+'</td>'+
								'</tr>'+
			//ice resistance
								'<tr class="light-blue no'+arr[i+ii].data[11]+'">'+
									'<td>Ice Resistance: '+arr[i+ii].data[11]+'</td>'+
								'</tr>'+
								'<tr>'+
			//mosaic slots
									'<td>Mosaic Slots: '+arr[i+ii].data[5]+'</td>'+
								'</tr>'+
								'<tr>'+
			//passive skills
									'<td>[Passive Skills]</td>'+
								'</tr>'+
								'<tr class="'+arr[i+ii].data[38]+' skill'+arr[i+ii].data[39]+'">'+
									'<td>'+arr[i+ii].data[38]+': <span class="skillamount">'+arr[i+ii].data[39]+'</span></td>'+
								'</tr>'+
								'<tr class="'+arr[i+ii].data[40]+' skill'+arr[i+ii].data[41]+'">'+
									'<td>'+arr[i+ii].data[40]+': <span class="skillamount">'+arr[i+ii].data[41]+'</span></td>'+
								'</tr>'+
								'<tr class="'+arr[i+ii].data[42]+' skill'+arr[i+ii].data[43]+'">'+
									'<td>'+arr[i+ii].data[42]+': <span class="skillamount">'+arr[i+ii].data[43]+'</span></td>'+
								'</tr>'+
								'<tr class="'+arr[i+ii].data[44]+' skill'+arr[i+ii].data[45]+'">'+
									'<td>'+arr[i+ii].data[44]+': <span class="skillamount">'+arr[i+ii].data[45]+'</span></td>'+
								'</tr>'+
								'<tr class="'+arr[i+ii].data[46]+' skill'+arr[i+ii].data[47]+'">'+
									'<td>'+arr[i+ii].data[46]+': <span class="skillamount">'+arr[i+ii].data[47]+'</span></td>'+
								'</tr>'+
								'<tr>'+
			//forging mats
									'<td colspan="2">[Forging Material]</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[21]+'">'+
									'<td>'+arr[i+ii].data[21]+'x'+arr[i+ii].data[22]+'</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[24]+'">'+
									'<td>'+arr[i+ii].data[24]+'x'+arr[i+ii].data[25]+'</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[27]+'">'+
									'<td>'+arr[i+ii].data[27]+'x'+arr[i+ii].data[28]+'</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[30]+'">'+
									'<td>'+arr[i+ii].data[30]+'x'+arr[i+ii].data[31]+'</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[33]+'">'+
									'<td>'+arr[i+ii].data[33]+'x'+arr[i+ii].data[34]+'</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[37]+'">'+
									'<td>'+arr[i+ii].data[36]+'x'+arr[i+ii].data[37]+'</td>'+
								'</tr>'+
							'</tbody>'+
						'</table>'+
					'</div>';
		}
		var search = $('#inputText').val();
		var data1 = "no";
		if (arr[i].data[56].toUpperCase().indexOf(search.toUpperCase()) >= 0) {
			data1 = "yes"
		};
		var data2 = "no";
		if (arr[i].data[2].toUpperCase().indexOf(search.toUpperCase()) >= 0) {
			data2 = "yes"
		};
		var data3 = "no";
		if (arr[i].data[57].toUpperCase().indexOf(search.toUpperCase()) >= 0) {
			data3 = "yes"
		};
		var data3 = "armortypeno";
		if (arr[i].data[3].toUpperCase().indexOf(armortype.toUpperCase()) >= 0) {
			data3 = "armortypeyes"
		};
		var dataskill = "no";
		var skillstring = arr[i].data[38].toUpperCase()+' '+arr[i].data[40].toUpperCase()+' '+arr[i].data[42].toUpperCase()+' '+arr[i].data[44].toUpperCase()+' '+arr[i].data[46].toUpperCase()+' '+arr[i+1].data[38].toUpperCase()+' '+arr[i+1].data[40].toUpperCase()+' '+arr[i+1].data[42].toUpperCase()+' '+arr[i+1].data[44].toUpperCase()+' '+arr[i+1].data[46].toUpperCase()+' '+arr[i+2].data[38].toUpperCase()+' '+arr[i+2].data[40].toUpperCase()+' '+arr[i+2].data[42].toUpperCase()+' '+arr[i+2].data[44].toUpperCase()+' '+arr[i+2].data[46].toUpperCase()+' '+arr[i+3].data[38].toUpperCase()+' '+arr[i+3].data[40].toUpperCase()+' '+arr[i+3].data[42].toUpperCase()+' '+arr[i+3].data[44].toUpperCase()+' '+arr[i+3].data[46].toUpperCase()+' '+arr[i+4].data[38].toUpperCase()+' '+arr[i+4].data[40].toUpperCase()+' '+arr[i+4].data[42].toUpperCase()+' '+arr[i+4].data[44].toUpperCase()+' '+arr[i+4].data[46].toUpperCase()
		if (skillstring.toUpperCase().indexOf(search.toUpperCase()) >= 0) {
			dataskill = "yes"
		};
		out+= ''+
		'<li>'+
			'<div class="'+data1+' '+data2+' '+data3+' '+dataskill+' collapsible-header">'+
				'<div>'+
				'<div class="left">'+
					'<img src="../images/item/'+arr[i].data[13]+'.png" class="armorimage">&nbsp;&nbsp;&nbsp;&nbsp;'+
					'<span class="type'+arr[i].data[3]+'">'+typeArray[arr[i].data[3]].type+'</span>&nbsp;&nbsp;'+
				'</div>'+
				'<div class="truncate-small">'+
					'<span class="Lv'+arr[i].data[57].substring(3,5)+'">Prototype </span>'+
					arr[i].data[2]+' Armor'+
				'</div>'+
				'<span class="right">'+arr[i].data[57]+'</span>'+
				'</div>'+
				''+
				'<span class="bold">'+arr[i].data[56]+'</span>'+
			'</div>'+
			'<div class="collapsible-body grey lighten-2">'+
				'<div class="row">'+out1+out2+'</div>'+
				'<div class="row">'+out3+'</div>'+
			'</div>'+
		'</li>';
	}
document.getElementById("armorlist").innerHTML = out;
});

