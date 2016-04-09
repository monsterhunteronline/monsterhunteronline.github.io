function armorContent(arr) {
	var out = "";
	var i;
	for(i = 0; i < arr.length; i += 5) {
	//Level
		out += '<div class="w3-row border_bottom">' +
		'<div class="w3-col l1 m1 s5">' + arr[i].data[57] + '</div>' +
		'<div class="w3-col l2 m2 s7 armorname "><span class="Lv' + arr[i].data[57].substring(3,5) + '">Prototype </span>' + arr[i].data[2] + ' Armor <span class="type' + arr[i].data[3] + '">' +  typeArray[arr[i].data[3]].type + '</span>' + '</div>' +
	//first column
		'<div class="w3-col l1 m1 s2">' +
			'<ul class="list">' +
				'<li class="item">' +
					'<img src="../images/' + arr[i].data[13] + '.png">' +
				'</li>' +
	//first column hover
				'<li class="info w3-table w3-dark-grey">' +
					'<table class="armorinfo">' +
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
					'</table>' +
				'</li>' +
			'</ul>' +
		'</div>' +
	//second column
		'<div class="w3-col l1 m1 s2">' +
			'<ul class="list">' +
				'<li class="item">' +
					'<img src="../images/' + arr[i+1].data[13] + '.png">' +
				'</li>' +
	//first column hover
				'<li class="info w3-table w3-dark-grey">' +
					'<table class="armorinfo">' +
						'<tr>' +
	//name
							'<td class="w3-black w3-large w3-center" colspan="2">' + arr[i+1].data[1] + '</td>' +
						'</tr>' +
						'<tr>' +
	//defense
							'<td colspan="2">Defense: ' + arr[i+1].data[6] + '</td>' +
						'</tr>' +
						'<tr class="w3-grey attrib' + arr[i+1].data[7] + arr[i+1].data[8] + arr[i+1].data[9] + arr[i+1].data[10] + arr[i+1].data[11] + '">' +
	//attributes
							'<td colspan="2">[Attributes]</td>' +
						'</tr>' +
	//water	resistance
						'<tr class="w3-blue no' + arr[i+1].data[7] + '">' +
							'<td colspan="2" class="w3-blue no' + arr[i+1].data[7] + '">Water Resistance: ' + arr[i+1].data[7] + '</td>' +
						'</tr>' +
	//fire resistance
						'<tr class="w3-red no' + arr[i+1].data[8] + '">' +
							'<td colspan="2">Fire Resistance: ' + arr[i+1].data[8] + '</td>' +
						'</tr>' +
	//thunder resistance
						'<tr class="w3-yellow no' + arr[i+1].data[9] + '">' +
							'<td colspan="2">Thunder Resistance: ' + arr[i+1].data[9] + '</td>' +
						'</tr>' +
	//dragon resistance
						'<tr class="w3-purple no' + arr[i+1].data[10] + '">' +
							'<td colspan="2">Dragon Resistance: ' + arr[i+1].data[10] + '</td>' +
						'</tr>' +
	//ice resistance
						'<tr class="w3-light-blue no' + arr[i+1].data[11] + '">' +
							'<td colspan="2">Ice Resistance: ' + arr[i+1].data[11] + '</td>' +
						'</tr>' +
						'<tr class="w3-grey">' +
	//mosaic slots
							'<td colspan="2">Mosaic Slots: ' + arr[i+1].data[5] + '</td>' +
						'</tr>' +
						'<tr class="w3-black">' +
	//passive skills
							'<td colspan="2">[Passive Skills]</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+1].data[38] + ' skill' + arr[i+1].data[39] + '">' +
							'<td>' + arr[i+1].data[38] + '</td>' +
							'<td class="skillamount">' + arr[i+1].data[39] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+1].data[40] + ' skill' + arr[i+1].data[41] + '">' +
							'<td>' + arr[i+1].data[40] + '</td>' +
							'<td class="skillamount">' + arr[i+1].data[41] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+1].data[42] + ' skill' + arr[i+1].data[43] + '">' +
							'<td>' + arr[i+1].data[42] + '</td>' +
							'<td class="skillamount">' + arr[i+1].data[43] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+1].data[44] + ' skill' + arr[i+1].data[45] + '">' +
							'<td>' + arr[i+1].data[44] + '</td>' +
							'<td class="skillamount">' + arr[i+1].data[45] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+1].data[46] + ' skill' + arr[i+1].data[47] + '">' +
							'<td>' + arr[i+1].data[46] + '</td>' +
							'<td class="skillamount">' + arr[i+1].data[47] + '</td>' +
						'</tr>' +
						'<tr>' +
	//forging mats
							'<td colspan="2">[Forging Material]</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+1].data[21] + '">' +
							'<td colspan="2">' + arr[i+1].data[21] + 'x' + arr[i+1].data[22] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+1].data[24] + '">' +
							'<td colspan="2">' + arr[i+1].data[24] + 'x' + arr[i+1].data[25] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+1].data[27] + '">' +
							'<td colspan="2">' + arr[i+1].data[27] + 'x' + arr[i+1].data[28] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+1].data[30] + '">' +
							'<td colspan="2">' + arr[i+1].data[30] + 'x' + arr[i+1].data[31] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+1].data[33] + '">' +
							'<td colspan="2">' + arr[i+1].data[33] + 'x' + arr[i+1].data[34] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+1].data[37] + '">' +
							'<td colspan="2">' + arr[i+1].data[36] + 'x' + arr[i+1].data[37] + '</td>' +
						'</tr>' +
					'</table>' +
				'</li>' +
			'</ul>' +
		'</div>' +
	//third column
		'<div class="w3-col l1 m1 s2">' +
			'<ul class="list">' +
				'<li class="item">' +
					'<img src="../images/' + arr[i+2].data[13] + '.png">' +
				'</li>' +
	//third column hover
				'<li class="info w3-table w3-dark-grey">' +
					'<table class="armorinfo">' +
						'<tr>' +
	//name
							'<td class="w3-black w3-large w3-center" colspan="2">' + arr[i+2].data[1] + '</td>' +
						'</tr>' +
						'<tr>' +
	//defense
							'<td colspan="2">Defense: ' + arr[i+2].data[6] + '</td>' +
						'</tr>' +
						'<tr class="w3-grey attrib' + arr[i+2].data[7] + arr[i+2].data[8] + arr[i+2].data[9] + arr[i+2].data[10] + arr[i+2].data[11] + '">' +
	//attributes
							'<td colspan="2">[Attributes]</td>' +
						'</tr>' +
	//water	resistance
						'<tr class="w3-blue no' + arr[i+2].data[7] + '">' +
							'<td colspan="2" class="w3-blue no' + arr[i+2].data[7] + '">Water Resistance: ' + arr[i+2].data[7] + '</td>' +
						'</tr>' +
	//fire resistance
						'<tr class="w3-red no' + arr[i+2].data[8] + '">' +
							'<td colspan="2">Fire Resistance: ' + arr[i+2].data[8] + '</td>' +
						'</tr>' +
	//thunder resistance
						'<tr class="w3-yellow no' + arr[i+2].data[9] + '">' +
							'<td colspan="2">Thunder Resistance: ' + arr[i+2].data[9] + '</td>' +
						'</tr>' +
	//dragon resistance
						'<tr class="w3-purple no' + arr[i+2].data[10] + '">' +
							'<td colspan="2">Dragon Resistance: ' + arr[i+2].data[10] + '</td>' +
						'</tr>' +
	//ice resistance
						'<tr class="w3-light-blue no' + arr[i+2].data[11] + '">' +
							'<td colspan="2">Ice Resistance: ' + arr[i+2].data[11] + '</td>' +
						'</tr>' +
						'<tr class="w3-grey">' +
	//mosaic slots
							'<td colspan="2">Mosaic Slots: ' + arr[i+2].data[5] + '</td>' +
						'</tr>' +
						'<tr class="w3-black">' +
	//passive skills
							'<td colspan="2">[Passive Skills]</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+2].data[38] + ' skill' + arr[i+2].data[39] + '">' +
							'<td>' + arr[i+2].data[38] + '</td>' +
							'<td class="skillamount">' + arr[i+2].data[39] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+2].data[40] + ' skill' + arr[i+2].data[41] + '">' +
							'<td>' + arr[i+2].data[40] + '</td>' +
							'<td class="skillamount">' + arr[i+2].data[41] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+2].data[42] + ' skill' + arr[i+2].data[43] + '">' +
							'<td>' + arr[i+2].data[42] + '</td>' +
							'<td class="skillamount">' + arr[i+2].data[43] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+2].data[44] + ' skill' + arr[i+2].data[45] + '">' +
							'<td>' + arr[i+2].data[44] + '</td>' +
							'<td class="skillamount">' + arr[i+2].data[45] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+2].data[46] + ' skill' + arr[i+2].data[47] + '">' +
							'<td>' + arr[i+2].data[46] + '</td>' +
							'<td class="skillamount">' + arr[i+2].data[47] + '</td>' +
						'</tr>' +
						'<tr>' +
	//forging mats
							'<td colspan="2">[Forging Material]</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+2].data[21] + '">' +
							'<td colspan="2">' + arr[i+2].data[21] + 'x' + arr[i+2].data[22] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+2].data[24] + '">' +
							'<td colspan="2">' + arr[i+2].data[24] + 'x' + arr[i+2].data[25] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+2].data[27] + '">' +
							'<td colspan="2">' + arr[i+2].data[27] + 'x' + arr[i+2].data[28] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+2].data[30] + '">' +
							'<td colspan="2">' + arr[i+2].data[30] + 'x' + arr[i+2].data[31] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+2].data[33] + '">' +
							'<td colspan="2">' + arr[i+2].data[33] + 'x' + arr[i+2].data[34] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+2].data[37] + '">' +
							'<td colspan="2">' + arr[i+2].data[36] + 'x' + arr[i+2].data[37] + '</td>' +
						'</tr>' +
					'</table>' +
				'</li>' +
			'</ul>' +
		'</div>' +
	//fourth column
		'<div class="w3-col l1 m1 s2">' +
			'<ul class="list">' +
				'<li class="item">' +
					'<img src="../images/' + arr[i+3].data[13] + '.png">' +
				'</li>' +
	//fouth column hover
				'<li class="info w3-table w3-dark-grey">' +
					'<table class="armorinfo">' +
						'<tr>' +
	//name
							'<td class="w3-black w3-large w3-center" colspan="2">' + arr[i+3].data[1] + '</td>' +
						'</tr>' +
						'<tr>' +
	//defense
							'<td colspan="2">Defense: ' + arr[i+3].data[6] + '</td>' +
						'</tr>' +
						'<tr class="w3-grey attrib' + arr[i+3].data[7] + arr[i+3].data[8] + arr[i+3].data[9] + arr[i+3].data[10] + arr[i+3].data[11] + '">' +
	//attributes
							'<td colspan="2">[Attributes]</td>' +
						'</tr>' +
	//water	resistance
						'<tr class="w3-blue no' + arr[i+3].data[7] + '">' +
							'<td colspan="2" class="w3-blue no' + arr[i+3].data[7] + '">Water Resistance: ' + arr[i+3].data[7] + '</td>' +
						'</tr>' +
	//fire resistance
						'<tr class="w3-red no' + arr[i+3].data[8] + '">' +
							'<td colspan="2">Fire Resistance: ' + arr[i+3].data[8] + '</td>' +
						'</tr>' +
	//thunder resistance
						'<tr class="w3-yellow no' + arr[i+3].data[9] + '">' +
							'<td colspan="2">Thunder Resistance: ' + arr[i+3].data[9] + '</td>' +
						'</tr>' +
	//dragon resistance
						'<tr class="w3-purple no' + arr[i+3].data[10] + '">' +
							'<td colspan="2">Dragon Resistance: ' + arr[i+3].data[10] + '</td>' +
						'</tr>' +
	//ice resistance
						'<tr class="w3-light-blue no' + arr[i+3].data[11] + '">' +
							'<td colspan="2">Ice Resistance: ' + arr[i+3].data[11] + '</td>' +
						'</tr>' +
						'<tr class="w3-grey">' +
	//mosaic slots
							'<td colspan="2">Mosaic Slots: ' + arr[i+3].data[5] + '</td>' +
						'</tr>' +
						'<tr class="w3-black">' +
	//passive skills
							'<td colspan="2">[Passive Skills]</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+3].data[38] + ' skill' + arr[i+3].data[39] + '">' +
							'<td>' + arr[i+3].data[38] + '</td>' +
							'<td class="skillamount">' + arr[i+3].data[39] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+3].data[40] + ' skill' + arr[i+3].data[41] + '">' +
							'<td>' + arr[i+3].data[40] + '</td>' +
							'<td class="skillamount">' + arr[i+3].data[41] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+3].data[42] + ' skill' + arr[i+3].data[43] + '">' +
							'<td>' + arr[i+3].data[42] + '</td>' +
							'<td class="skillamount">' + arr[i+3].data[43] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+3].data[44] + ' skill' + arr[i+3].data[45] + '">' +
							'<td>' + arr[i+3].data[44] + '</td>' +
							'<td class="skillamount">' + arr[i+3].data[45] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+3].data[46] + ' skill' + arr[i+3].data[47] + '">' +
							'<td>' + arr[i+3].data[46] + '</td>' +
							'<td class="skillamount">' + arr[i+3].data[47] + '</td>' +
						'</tr>' +
						'<tr>' +
	//forging mats
							'<td colspan="2">[Forging Material]</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+3].data[21] + '">' +
							'<td colspan="2">' + arr[i+3].data[21] + 'x' + arr[i+3].data[22] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+3].data[24] + '">' +
							'<td colspan="2">' + arr[i+3].data[24] + 'x' + arr[i+3].data[25] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+3].data[27] + '">' +
							'<td colspan="2">' + arr[i+3].data[27] + 'x' + arr[i+3].data[28] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+3].data[30] + '">' +
							'<td colspan="2">' + arr[i+3].data[30] + 'x' + arr[i+3].data[31] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+3].data[33] + '">' +
							'<td colspan="2">' + arr[i+3].data[33] + 'x' + arr[i+3].data[34] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+3].data[37] + '">' +
							'<td colspan="2">' + arr[i+3].data[36] + 'x' + arr[i+3].data[37] + '</td>' +
						'</tr>' +
					'</table>' +
				'</li>' +
			'</ul>' +
		'</div>' +
	//fifth column
		'<div class="w3-col l1 m1 s2">' +
			'<ul class="list">' +
				'<li class="item">' +
					'<img src="../images/' + arr[i+4].data[13] + '.png">' +
				'</li>' +
	//fifth column hover
				'<li class="info w3-table w3-dark-grey">' +
					'<table class="armorinfo">' +
						'<tr>' +
	//name
							'<td class="w3-black w3-large w3-center" colspan="2">' + arr[i+4].data[1] + '</td>' +
						'</tr>' +
						'<tr>' +
	//defense
							'<td colspan="2">Defense: ' + arr[i+4].data[6] + '</td>' +
						'</tr>' +
						'<tr class="w3-grey attrib' + arr[i+4].data[7] + arr[i+4].data[8] + arr[i+4].data[9] + arr[i+4].data[10] + arr[i+4].data[11] + '">' +
	//attributes
							'<td colspan="2">[Attributes]</td>' +
						'</tr>' +
	//water	resistance
						'<tr class="w3-blue no' + arr[i+4].data[7] + '">' +
							'<td colspan="2" class="w3-blue no' + arr[i+4].data[7] + '">Water Resistance: ' + arr[i+4].data[7] + '</td>' +
						'</tr>' +
	//fire resistance
						'<tr class="w3-red no' + arr[i+4].data[8] + '">' +
							'<td colspan="2">Fire Resistance: ' + arr[i+4].data[8] + '</td>' +
						'</tr>' +
	//thunder resistance
						'<tr class="w3-yellow no' + arr[i+4].data[9] + '">' +
							'<td colspan="2">Thunder Resistance: ' + arr[i+4].data[9] + '</td>' +
						'</tr>' +
	//dragon resistance
						'<tr class="w3-purple no' + arr[i+4].data[10] + '">' +
							'<td colspan="2">Dragon Resistance: ' + arr[i+4].data[10] + '</td>' +
						'</tr>' +
	//ice resistance
						'<tr class="w3-light-blue no' + arr[i+4].data[11] + '">' +
							'<td colspan="2">Ice Resistance: ' + arr[i+4].data[11] + '</td>' +
						'</tr>' +
						'<tr class="w3-grey">' +
	//mosaic slots
							'<td colspan="2">Mosaic Slots: ' + arr[i+4].data[5] + '</td>' +
						'</tr>' +
						'<tr class="w3-black">' +
	//passive skills
							'<td colspan="2">[Passive Skills]</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+4].data[38] + ' skill' + arr[i+4].data[39] + '">' +
							'<td>' + arr[i+4].data[38] + '</td>' +
							'<td class="skillamount">' + arr[i+4].data[39] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+4].data[40] + ' skill' + arr[i+4].data[41] + '">' +
							'<td>' + arr[i+4].data[40] + '</td>' +
							'<td class="skillamount">' + arr[i+4].data[41] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+4].data[42] + ' skill' + arr[i+4].data[43] + '">' +
							'<td>' + arr[i+4].data[42] + '</td>' +
							'<td class="skillamount">' + arr[i+4].data[43] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+4].data[44] + ' skill' + arr[i+4].data[45] + '">' +
							'<td>' + arr[i+4].data[44] + '</td>' +
							'<td class="skillamount">' + arr[i+4].data[45] + '</td>' +
						'</tr>' +
						'<tr class="w3-black ' + arr[i+4].data[46] + ' skill' + arr[i+4].data[47] + '">' +
							'<td>' + arr[i+4].data[46] + '</td>' +
							'<td class="skillamount">' + arr[i+4].data[47] + '</td>' +
						'</tr>' +
						'<tr>' +
	//forging mats
							'<td colspan="2">[Forging Material]</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+4].data[21] + '">' +
							'<td colspan="2">' + arr[i+4].data[21] + 'x' + arr[i+4].data[22] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+4].data[24] + '">' +
							'<td colspan="2">' + arr[i+4].data[24] + 'x' + arr[i+4].data[25] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+4].data[27] + '">' +
							'<td colspan="2">' + arr[i+4].data[27] + 'x' + arr[i+4].data[28] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+4].data[30] + '">' +
							'<td colspan="2">' + arr[i+4].data[30] + 'x' + arr[i+4].data[31] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+4].data[33] + '">' +
							'<td colspan="2">' + arr[i+4].data[33] + 'x' + arr[i+4].data[34] + '</td>' +
						'</tr>' +
						'<tr class="no' + arr[i+4].data[37] + '">' +
							'<td colspan="2">' + arr[i+4].data[36] + 'x' + arr[i+4].data[37] + '</td>' +
						'</tr>' +
					'</table>' +
				'</li>' +
			'</ul>' +
		'</div>' +
	//skills
		'<div class="w3-col l4 m4 s12 armorskill">' + arr[i].data[56] + '</div></div>';
	}
	document.getElementById("armortable").innerHTML = out;
};