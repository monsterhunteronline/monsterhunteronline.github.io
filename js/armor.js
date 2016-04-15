function armorContent(arr) {
	var out = "";
	var i;
	var ii;
	for(i = 0; i < arr.length; i += 5) {
		var out1 = "";
		for(ii = 0; ii < 5; ii ++) {
			out1 += '<div class="col s12 m4 l2">'+
						'<table>'+
							'<thead>'+
								'<tr>'+
									'<th><img src="../images/item/'+arr[i+ii].data[13]+'.png" class="armorimage"></th>'+
									'<th class="bold">'+arr[i+ii].data[1]+'</th>'+
								'</tr>'+
							'</thead>'+
						'</table>'+
						'<table class="armorinfo">'+
							'<tbody>'+
								'<tr>'+
			//defense
									'<td colspan="2">Defense: '+arr[i+ii].data[6]+'</td>'+
								'</tr>'+
								'<tr class="attrib'+arr[i+ii].data[7]+arr[i+ii].data[8]+arr[i+ii].data[9]+arr[i+ii].data[10]+arr[i+ii].data[11]+'">'+
			//attributes
									'<td colspan="2">[Attributes]</td>'+
								'</tr>'+
			//water	resistance
								'<tr class="blue no'+arr[i+ii].data[7]+'">'+
									'<td colspan="2" class="blue no'+arr[i+ii].data[7]+'">Water Resistance: '+arr[i+ii].data[7]+'</td>'+
								'</tr>'+
			//fire resistance
								'<tr class="red no'+arr[i+ii].data[8]+'">'+
									'<td colspan="2">Fire Resistance: '+arr[i+ii].data[8]+'</td>'+
								'</tr>'+
			//thunder resistance
								'<tr class="yellow no'+arr[i+ii].data[9]+'">'+
									'<td colspan="2">Thunder Resistance: '+arr[i+ii].data[9]+'</td>'+
								'</tr>'+
			//dragon resistance
								'<tr class="purple no'+arr[i+ii].data[10]+'">'+
									'<td colspan="2">Dragon Resistance: '+arr[i+ii].data[10]+'</td>'+
								'</tr>'+
			//ice resistance
								'<tr class="light-blue no'+arr[i+ii].data[11]+'">'+
									'<td colspan="2">Ice Resistance: '+arr[i+ii].data[11]+'</td>'+
								'</tr>'+
								'<tr>'+
			//mosaic slots
									'<td colspan="2">Mosaic Slots: '+arr[i+ii].data[5]+'</td>'+
								'</tr>'+
								'<tr>'+
			//passive skills
									'<td colspan="2">[Passive Skills]</td>'+
								'</tr>'+
								'<tr class="'+arr[i+ii].data[38]+' skill'+arr[i+ii].data[39]+'">'+
									'<td>'+arr[i+ii].data[38]+'</td>'+
									'<td class="skillamount">'+arr[i+ii].data[39]+'</td>'+
								'</tr>'+
								'<tr class="'+arr[i+ii].data[40]+' skill'+arr[i+ii].data[41]+'">'+
									'<td>'+arr[i+ii].data[40]+'</td>'+
									'<td class="skillamount">'+arr[i+ii].data[41]+'</td>'+
								'</tr>'+
								'<tr class="'+arr[i+ii].data[42]+' skill'+arr[i+ii].data[43]+'">'+
									'<td>'+arr[i+ii].data[42]+'</td>'+
									'<td class="skillamount">'+arr[i+ii].data[43]+'</td>'+
								'</tr>'+
								'<tr class="'+arr[i+ii].data[44]+' skill'+arr[i+ii].data[45]+'">'+
									'<td>'+arr[i+ii].data[44]+'</td>'+
									'<td class="skillamount">'+arr[i+ii].data[45]+'</td>'+
								'</tr>'+
								'<tr class="'+arr[i+ii].data[46]+' skill'+arr[i+ii].data[47]+'">'+
									'<td>'+arr[i+ii].data[46]+'</td>'+
									'<td class="skillamount">'+arr[i+ii].data[47]+'</td>'+
								'</tr>'+
								'<tr>'+
			//forging mats
									'<td colspan="2">[Forging Material]</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[21]+'">'+
									'<td colspan="2">'+arr[i+ii].data[21]+'x'+arr[i+ii].data[22]+'</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[24]+'">'+
									'<td colspan="2">'+arr[i+ii].data[24]+'x'+arr[i+ii].data[25]+'</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[27]+'">'+
									'<td colspan="2">'+arr[i+ii].data[27]+'x'+arr[i+ii].data[28]+'</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[30]+'">'+
									'<td colspan="2">'+arr[i+ii].data[30]+'x'+arr[i+ii].data[31]+'</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[33]+'">'+
									'<td colspan="2">'+arr[i+ii].data[33]+'x'+arr[i+ii].data[34]+'</td>'+
								'</tr>'+
								'<tr class="no'+arr[i+ii].data[37]+'">'+
									'<td colspan="2">'+arr[i+ii].data[36]+'x'+arr[i+ii].data[37]+'</td>'+
								'</tr>'+
							'</tbody>'+
						'</table>'+
					'</div>';
		}
		out+= ''+
		'<li>'+
			'<div class="collapsible-header">'+
			'<div class="left"><img src="../images/item/'+arr[i].data[13]+'.png" class="armorimage">&nbsp;&nbsp;'+
			'<span class="type'+arr[i].data[3]+'">'+typeArray[arr[i].data[3]].type+'</span>&nbsp;&nbsp;</div>'+
			'<div class="truncate-small"><span class="Lv'+arr[i].data[57].substring(3,5)+'">Prototype </span>'+arr[i].data[2]+' Armor </div>'+
			'<span class="right">'+arr[i].data[57]+'</span>'+
			'</div>'+
			'<div class="collapsible-body grey lighten-2">'+
			'<span class="bold center-align">'+arr[i].data[56]+'</span>'+
			'<div class="row center-align">'+out1+'</div>'+
			'</div>'+
		'</li>';
	}
document.getElementById("armorlist").innerHTML = out;
};