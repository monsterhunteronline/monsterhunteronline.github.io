$(".skill2").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
}); 

function armorContent(arr) {
	var out = "";
	var i;
	for(i = 0; i < arr.length; i ++) {
	//Level
		out += '<table class="armorinfo">' +
						'<tr>' +
	//name
							'<td class="w3-black w3-large w3-center" colspan="2">' + arr[i].data[1] + '</td>' +
						'</tr>' +
						'<tr>' +
	//defense
							'<td colspan="2">Defense: ' + arr[i].data[6] + '</td>' +
						'</tr>' +
						'<tr class="w3-grey attrib' + arr[i].data[7] + arr[i].data[8] + arr[i].data[9] + arr[i].data[10] + arr[i].data[11] + '">' +
	//attributes
							'<td colspan="2">[Attributes]</td>' +
						'</tr>' +
	//water	resistance
						'<tr class="w3-blue no' + arr[i].data[7] + '">' +
							'<td colspan="2" class="w3-blue no' + arr[i].data[7] + '">Water Resistance: ' + arr[i].data[7] + '</td>' +
						'</tr>' +
	//fire resistance
						'<tr class="w3-red no' + arr[i].data[8] + '">' +
							'<td colspan="2">Fire Resistance: ' + arr[i].data[8] + '</td>' +
						'</tr>' +
	//thunder resistance
						'<tr class="w3-yellow no' + arr[i].data[9] + '">' +
							'<td colspan="2">Thunder Resistance: ' + arr[i].data[9] + '</td>' +
						'</tr>' +
	//dragon resistance
						'<tr class="w3-purple no' + arr[i].data[10] + '">' +
							'<td colspan="2">Dragon Resistance: ' + arr[i].data[10] + '</td>' +
						'</tr>' +
	//ice resistance
						'<tr class="w3-light-blue no' + arr[i].data[11] + '">' +
							'<td colspan="2">Ice Resistance: ' + arr[i].data[11] + '</td>' +
						'</tr>' +
						'<tr class="w3-grey">' +
	//mosaic slots
							'<td colspan="2">Mosaic Slots: ' + arr[i].data[5] + '</td>' +
						'</tr>' +
						'<tr class="w3-black">' +
	//passive skills
							'<td colspan="2">[Passive Skills]</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i].data[38] + ' skill' + arr[i].data[39] + '">' +
							'<td>' + arr[i].data[38] + '</td>' +
							'<td class="skillamount">' + arr[i].data[39] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i].data[40] + ' skill' + arr[i].data[41] + '">' +
							'<td>' + arr[i].data[40] + '</td>' +
							'<td class="skillamount">' + arr[i].data[41] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i].data[42] + ' skill' + arr[i].data[43] + '">' +
							'<td>' + arr[i].data[42] + '</td>' +
							'<td class="skillamount">' + arr[i].data[43] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i].data[44] + ' skill' + arr[i].data[45] + '">' +
							'<td>' + arr[i].data[44] + '</td>' +
							'<td class="skillamount">' + arr[i].data[45] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i].data[46] + ' skill' + arr[i].data[47] + '">' +
							'<td>' + arr[i].data[46] + '</td>' +
							'<td class="skillamount">' + arr[i].data[47] + '</td>' +
						'</tr>' +
						'<tr>' +
	//forging mats
							'<td colspan="2">[Forging Material]</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[21] + '">' +
							'<td colspan="2">' + arr[i].data[21] + 'x' + arr[i].data[22] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[24] + '">' +
							'<td colspan="2">' + arr[i].data[24] + 'x' + arr[i].data[25] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[27] + '">' +
							'<td colspan="2">' + arr[i].data[27] + 'x' + arr[i].data[28] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[30] + '">' +
							'<td colspan="2">' + arr[i].data[30] + 'x' + arr[i].data[31] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[33] + '">' +
							'<td colspan="2">' + arr[i].data[33] + 'x' + arr[i].data[34] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i].data[37] + '">' +
							'<td colspan="2">' + arr[i].data[36] + 'x' + arr[i].data[37] + '</td>' +
						'</tr>' +
					'</table>';
	}
	document.getElementById("armortable").innerHTML = out;
};