function navbarContent(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i ++) {
		out += '<li class="navbar"><a class="navlink" href="http://monsterhunteronline.in' + arr[i].url + '">' + arr[i].pagename + '</a></li>';
    }
    document.getElementById("navlist").innerHTML = out;

}
function armorContent(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i += 5) {
    	//Level
		out += '<tr><td><span class="level">Lv.' +
		levelArray[i].level +
		//Name
		'</span></td><td class="armorname">' + 
		arr[i].data[2] + 
		' Armor <span class="type' + 
		arr[i].data[3] + '">' + 
		typeArray[arr[i].data[3]].type + 
		//First column
		'</span></td><td class="armorpiccell"><ul class="list"><li class="item"><img src="../images/' + 
		arr[i].data[13] + 
		'.png" class="armorpic"></li>' +
		//First column hover
		'<li class="info"><table class="armorinfo"><tr><td class="armorpiecename" colspan="2">' + 
		arr[i].data[1] + 
		'<hr /></td></tr><tr><td colspan="2">Defense: <span class="white">' +
		arr[i].data[6] + 
		'</span><hr /></td></tr><tr class="attrib' +
		arr[i].data[7] + arr[i].data[8] + arr[i].data[9] + arr[i].data[10] + arr[i].data[11] + 
		'"><td colspan="2">[Attributes]</td></tr><tr><td colspan="2" class="water' +
		arr[i].data[7] + 
		'">Water Resistance: <span class="white">' +
		arr[i].data[7] + 
		'</span></td></tr><tr class="fire' +
		arr[i].data[8] + 		
		'"><td colspan="2">Fire Resistance: <span class="white">' +
		arr[i].data[8] + 
		'</span></td></tr><tr class="thunder' +
		arr[i].data[9] + 
		'"><td colspan="2">Thunder Resistance: <span class="white">' +
		arr[i].data[9] + 
		'</span></td></tr><tr class="dragon' +
		arr[i].data[10] + 
		'"><td colspan="2">Dragon Resistance: <span class="white">' +
		arr[i].data[10] + 
		'</span></td></tr><tr class="ice' +
		arr[i].data[11] + 
		'"><td colspan="2">Ice Resistance: <span class="white">' +
		arr[i].data[11] + 
		'</span></td></tr><tr><td colspan="2"><hr class="attrib' +
		arr[i].data[7] + arr[i].data[8] + arr[i].data[9] + arr[i].data[10] + arr[i].data[11] + 
		'">Mosaic Slots: <span class="white">' +
		arr[i].data[5] + 
		'</span><hr /></td></tr><tr><td colspan="2">[Passive Skills]</td></tr><tr class="' +
		arr[i].data[38] + ' skill' + arr[i].data[39] +
		'"><td>' +
		arr[i].data[38] + 
		':</td><td class="skillamount">' +
		arr[i].data[39] + 
		'</td></tr><tr class="' +
		arr[i].data[40] + ' skill' + arr[i].data[41] +
		'"><td>' +
		arr[i].data[40] + 
		':</td><td class="skillamount">' +
		arr[i].data[41] + 
		'</td></tr><tr class="' +
		arr[i].data[42] + ' skill' + arr[i].data[43] +
		'"><td>' +
		arr[i].data[42] + 
		':</td><td class="skillamount">' +
		arr[i].data[43] + 
		'</td></tr><tr class="' +
		arr[i].data[44] + ' skill' + arr[i].data[45] +
		'"><td>' +
		arr[i].data[44] + 
		':</td><td class="skillamount">' +
		arr[i].data[45] + 
		'</td></tr><tr><td colspan="2"><hr />[Forging Material]</td></tr><tr class="white nomat' + 
		arr[i].data[21] +
		'"><td colspan="2">' +
		arr[i].data[21] + 'x' + arr[i].data[22] +
		'</td></tr><tr class="white nomat' + 
		arr[i].data[24] +
		'"><td colspan="2">' +
		arr[i].data[24] + 'x' + arr[i].data[25] +
		'</td></tr><tr class="white nomat' + 
		arr[i].data[27] +
		'"><td colspan="2">' +
		arr[i].data[27] + 'x' + arr[i].data[28] +
		'</td></tr><tr class="white nomat' + 
		arr[i].data[30] +
		'"><td colspan="2">' +
		arr[i].data[30] + 'x' + arr[i].data[31] +
		'</td></tr><tr class="white nomat' + 
		arr[i].data[33] +
		'"><td colspan="2">' +
		arr[i].data[33] + 'x' + arr[i].data[34] +
		'</td></tr><tr class="white nomat' + 
		arr[i].data[37] +
		'"><td colspan="2">' +
		arr[i].data[36] + 'x' + arr[i].data[37] +
		'</td></tr></table></li>' +
		//Second column
		'</ul></td><td class="armorpiccell"><ul class="list"><li class="item"><img src="../images/' + 
		arr[i+1].data[13] + 
		'.png" class="armorpic"></li>' +
		//Second column hover
		'<li class="info"><table class="armorinfo"><tr><td class="armorpiecename" colspan="2">' + 
		arr[i+1].data[1] + 
		'<hr /></td></tr><tr><td colspan="2">Defense: <span class="white">' +
		arr[i+1].data[6] + 
		'</span><hr /></td></tr><tr class="attrib' +
		arr[i+1].data[7] + arr[i+1].data[8] + arr[i+1].data[9] + arr[i+1].data[10] + arr[i+1].data[11] + 
		'"><td colspan="2">[Attributes]</td></tr><tr><td colspan="2" class="water' +
		arr[i+1].data[7] + 
		'">Water Resistance: <span class="white">' +
		arr[i+1].data[7] + 
		'</span></td></tr><tr class="fire' +
		arr[i+1].data[8] + 		
		'"><td colspan="2">Fire Resistance: <span class="white">' +
		arr[i+1].data[8] + 
		'</span></td></tr><tr class="thunder' +
		arr[i+1].data[9] + 
		'"><td colspan="2">Thunder Resistance: <span class="white">' +
		arr[i+1].data[9] + 
		'</span></td></tr><tr class="dragon' +
		arr[i+1].data[10] + 
		'"><td colspan="2">Dragon Resistance: <span class="white">' +
		arr[i+1].data[10] + 
		'</span></td></tr><tr class="ice' +
		arr[i+1].data[11] + 
		'"><td colspan="2">Ice Resistance: <span class="white">' +
		arr[i+1].data[11] + 
		'</span></td></tr><tr><td colspan="2"><hr class="attrib' +
		arr[i+1].data[7] + arr[i+1].data[8] + arr[i+1].data[9] + arr[i+1].data[10] + arr[i+1].data[11] + 
		'">Mosaic Slots: <span class="white">' +
		arr[i+1].data[5] + 
		'</span><hr /></td></tr><tr><td colspan="2">[Passive Skills]</td></tr><tr class="' +
		arr[i+1].data[38] + ' skill' + arr[i+1].data[39] +
		'"><td>' +
		arr[i+1].data[38] + 
		':</td><td class="skillamount">' +
		arr[i+1].data[39] + 
		'</td></tr><tr class="' +
		arr[i+1].data[40] + ' skill' + arr[i+1].data[41] +
		'"><td>' +
		arr[i+1].data[40] + 
		':</td><td class="skillamount">' +
		arr[i+1].data[41] + 
		'</td></tr><tr class="' +
		arr[i+1].data[42] + ' skill' + arr[i+1].data[43] +
		'"><td>' +
		arr[i+1].data[42] + 
		':</td><td class="skillamount">' +
		arr[i+1].data[43] + 
		'</td></tr><tr class="' +
		arr[i+1].data[44] + ' skill' + arr[i+1].data[45] +
		'"><td>' +
		arr[i+1].data[44] + 
		':</td><td class="skillamount">' +
		arr[i+1].data[45] + 
		'</td></tr><tr><td colspan="2"><hr />[Forging Material]</td></tr><tr class="white nomat' + 
		arr[i+1].data[21] +
		'"><td colspan="2">' +
		arr[i+1].data[21] + 'x' + arr[i+1].data[22] +
		'</td></tr><tr class="white nomat' + 
		arr[i+1].data[24] +
		'"><td colspan="2">' +
		arr[i+1].data[24] + 'x' + arr[i+1].data[25] +
		'</td></tr><tr class="white nomat' + 
		arr[i+1].data[27] +
		'"><td colspan="2">' +
		arr[i+1].data[27] + 'x' + arr[i+1].data[28] +
		'</td></tr><tr class="white nomat' + 
		arr[i+1].data[30] +
		'"><td colspan="2">' +
		arr[i+1].data[30] + 'x' + arr[i+1].data[31] +
		'</td></tr><tr class="white nomat' + 
		arr[i+1].data[33] +
		'"><td colspan="2">' +
		arr[i+1].data[33] + 'x' + arr[i+1].data[34] +
		'</td></tr><tr class="white nomat' + 
		arr[i+1].data[37] +
		'"><td colspan="2">' +
		arr[i+1].data[36] + 'x' + arr[i+1].data[37] +
		'</td></tr></table></li>' +
		//Third column
		'</ul></td><td class="armorpiccell"><ul class="list"><li class="item"><img src="../images/' + 
		arr[i+2].data[13] + 
		'.png" class="armorpic"></li>' +
		//Third column hover
		'<li class="info"><table class="armorinfo"><tr><td class="armorpiecename" colspan="2">' + 
		arr[i+2].data[1] + 
		'<hr /></td></tr><tr><td colspan="2">Defense: <span class="white">' +
		arr[i+2].data[6] + 
		'</span><hr /></td></tr><tr class="attrib' +
		arr[i+2].data[7] + arr[i+2].data[8] + arr[i+2].data[9] + arr[i+2].data[10] + arr[i+2].data[11] + 
		'"><td colspan="2">[Attributes]</td></tr><tr><td colspan="2" class="water' +
		arr[i+2].data[7] + 
		'">Water Resistance: <span class="white">' +
		arr[i+2].data[7] + 
		'</span></td></tr><tr class="fire' +
		arr[i+2].data[8] + 		
		'"><td colspan="2">Fire Resistance: <span class="white">' +
		arr[i+2].data[8] + 
		'</span></td></tr><tr class="thunder' +
		arr[i+2].data[9] + 
		'"><td colspan="2">Thunder Resistance: <span class="white">' +
		arr[i+2].data[9] + 
		'</span></td></tr><tr class="dragon' +
		arr[i+2].data[10] + 
		'"><td colspan="2">Dragon Resistance: <span class="white">' +
		arr[i+2].data[10] + 
		'</span></td></tr><tr class="ice' +
		arr[i+2].data[11] + 
		'"><td colspan="2">Ice Resistance: <span class="white">' +
		arr[i+2].data[11] + 
		'</span></td></tr><tr><td colspan="2"><hr class="attrib' +
		arr[i+2].data[7] + arr[i+2].data[8] + arr[i+2].data[9] + arr[i+2].data[10] + arr[i+2].data[11] + 
		'">Mosaic Slots: <span class="white">' +
		arr[i+2].data[5] + 
		'</span><hr /></td></tr><tr><td colspan="2">[Passive Skills]</td></tr><tr class="' +
		arr[i+2].data[38] + ' skill' + arr[i+2].data[39] +
		'"><td>' +
		arr[i+2].data[38] + 
		':</td><td class="skillamount">' +
		arr[i+2].data[39] + 
		'</td></tr><tr class="' +
		arr[i+2].data[40] + ' skill' + arr[i+2].data[41] +
		'"><td>' +
		arr[i+2].data[40] + 
		':</td><td class="skillamount">' +
		arr[i+2].data[41] + 
		'</td></tr><tr class="' +
		arr[i+2].data[42] + ' skill' + arr[i+2].data[43] +
		'"><td>' +
		arr[i+2].data[42] + 
		':</td><td class="skillamount">' +
		arr[i+2].data[43] + 
		'</td></tr><tr class="' +
		arr[i+2].data[44] + ' skill' + arr[i+2].data[45] +
		'"><td>' +
		arr[i+2].data[44] + 
		':</td><td class="skillamount">' +
		arr[i+2].data[45] + 
		'</td></tr><tr><td colspan="2"><hr />[Forging Material]</td></tr><tr class="white nomat' + 
		arr[i+2].data[21] +
		'"><td colspan="2">' +
		arr[i+2].data[21] + 'x' + arr[i+2].data[22] +
		'</td></tr><tr class="white nomat' + 
		arr[i+2].data[24] +
		'"><td colspan="2">' +
		arr[i+2].data[24] + 'x' + arr[i+2].data[25] +
		'</td></tr><tr class="white nomat' + 
		arr[i+2].data[27] +
		'"><td colspan="2">' +
		arr[i+2].data[27] + 'x' + arr[i+2].data[28] +
		'</td></tr><tr class="white nomat' + 
		arr[i+2].data[30] +
		'"><td colspan="2">' +
		arr[i+2].data[30] + 'x' + arr[i+2].data[31] +
		'</td></tr><tr class="white nomat' + 
		arr[i+2].data[33] +
		'"><td colspan="2">' +
		arr[i+2].data[33] + 'x' + arr[i+2].data[34] +
		'</td></tr><tr class="white nomat' + 
		arr[i+2].data[37] +
		'"><td colspan="2">' +
		arr[i+2].data[36] + 'x' + arr[i+2].data[37] +
		'</td></tr></table></li>' +
		//Fourth column
		'</ul></td><td class="armorpiccell"><ul class="list"><li class="item"><img src="../images/' + 
		arr[i+3].data[13] + 
		'.png" class="armorpic"></li>' +
		//Fourth column hover
		'<li class="info"><table class="armorinfo"><tr><td class="armorpiecename" colspan="2">' + 
		arr[i+3].data[1] + 
		'<hr /></td></tr><tr><td colspan="2">Defense: <span class="white">' +
		arr[i+3].data[6] + 
		'</span><hr /></td></tr><tr class="attrib' +
		arr[i+3].data[7] + arr[i+3].data[8] + arr[i+3].data[9] + arr[i+3].data[10] + arr[i+3].data[11] + 
		'"><td colspan="2">[Attributes]</td></tr><tr><td colspan="2" class="water' +
		arr[i+3].data[7] + 
		'">Water Resistance: <span class="white">' +
		arr[i+3].data[7] + 
		'</span></td></tr><tr class="fire' +
		arr[i+3].data[8] + 		
		'"><td colspan="2">Fire Resistance: <span class="white">' +
		arr[i+3].data[8] + 
		'</span></td></tr><tr class="thunder' +
		arr[i+3].data[9] + 
		'"><td colspan="2">Thunder Resistance: <span class="white">' +
		arr[i+3].data[9] + 
		'</span></td></tr><tr class="dragon' +
		arr[i+3].data[10] + 
		'"><td colspan="2">Dragon Resistance: <span class="white">' +
		arr[i+3].data[10] + 
		'</span></td></tr><tr class="ice' +
		arr[i+3].data[11] + 
		'"><td colspan="2">Ice Resistance: <span class="white">' +
		arr[i+3].data[11] + 
		'</span></td></tr><tr><td colspan="2"><hr class="attrib' +
		arr[i+3].data[7] + arr[i+3].data[8] + arr[i+3].data[9] + arr[i+3].data[10] + arr[i+3].data[11] + 
		'">Mosaic Slots: <span class="white">' +
		arr[i+3].data[5] + 
		'</span><hr /></td></tr><tr><td colspan="2">[Passive Skills]</td></tr><tr class="' +
		arr[i+3].data[38] + ' skill' + arr[i+3].data[39] +
		'"><td>' +
		arr[i+3].data[38] + 
		':</td><td class="skillamount">' +
		arr[i+3].data[39] + 
		'</td></tr><tr class="' +
		arr[i+3].data[40] + ' skill' + arr[i+3].data[41] +
		'"><td>' +
		arr[i+3].data[40] + 
		':</td><td class="skillamount">' +
		arr[i+3].data[41] + 
		'</td></tr><tr class="' +
		arr[i+3].data[42] + ' skill' + arr[i+3].data[43] +
		'"><td>' +
		arr[i+3].data[42] + 
		':</td><td class="skillamount">' +
		arr[i+3].data[43] + 
		'</td></tr><tr class="' +
		arr[i+3].data[44] + ' skill' + arr[i+3].data[45] +
		'"><td>' +
		arr[i+3].data[44] + 
		':</td><td class="skillamount">' +
		arr[i+3].data[45] + 
		'</td></tr><tr><td colspan="2"><hr />[Forging Material]</td></tr><tr class="white nomat' + 
		arr[i+3].data[21] +
		'"><td colspan="2">' +
		arr[i+3].data[21] + 'x' + arr[i+3].data[22] +
		'</td></tr><tr class="white nomat' + 
		arr[i+3].data[24] +
		'"><td colspan="2">' +
		arr[i+3].data[24] + 'x' + arr[i+3].data[25] +
		'</td></tr><tr class="white nomat' + 
		arr[i+3].data[27] +
		'"><td colspan="2">' +
		arr[i+3].data[27] + 'x' + arr[i+3].data[28] +
		'</td></tr><tr class="white nomat' + 
		arr[i+3].data[30] +
		'"><td colspan="2">' +
		arr[i+3].data[30] + 'x' + arr[i+3].data[31] +
		'</td></tr><tr class="white nomat' + 
		arr[i+3].data[33] +
		'"><td colspan="2">' +
		arr[i+3].data[33] + 'x' + arr[i+3].data[34] +
		'</td></tr><tr class="white nomat' + 
		arr[i+3].data[37] +
		'"><td colspan="2">' +
		arr[i+3].data[36] + 'x' + arr[i+3].data[37] +
		'</td></tr></table></li>' +
		//Fifth column
		'</ul></td><td class="armorpiccell"><ul class="list"><li class="item"><img src="../images/' + 
		arr[i+4].data[13] + 
		'.png" class="armorpic"></li>' +
		//Fifth column hover
		'<li class="info"><table class="armorinfo"><tr><td class="armorpiecename" colspan="2">' + 
		arr[i+4].data[1] + 
		'<hr /></td></tr><tr><td colspan="2">Defense: <span class="white">' +
		arr[i+4].data[6] + 
		'</span><hr /></td></tr><tr class="attrib' +
		arr[i+4].data[7] + arr[i+4].data[8] + arr[i+4].data[9] + arr[i+4].data[10] + arr[i+4].data[11] + 
		'"><td colspan="2">[Attributes]</td></tr><tr><td colspan="2" class="water' +
		arr[i+4].data[7] + 
		'">Water Resistance: <span class="white">' +
		arr[i+4].data[7] + 
		'</span></td></tr><tr class="fire' +
		arr[i+4].data[8] + 		
		'"><td colspan="2">Fire Resistance: <span class="white">' +
		arr[i+4].data[8] + 
		'</span></td></tr><tr class="thunder' +
		arr[i+4].data[9] + 
		'"><td colspan="2">Thunder Resistance: <span class="white">' +
		arr[i+4].data[9] + 
		'</span></td></tr><tr class="dragon' +
		arr[i+4].data[10] + 
		'"><td colspan="2">Dragon Resistance: <span class="white">' +
		arr[i+4].data[10] + 
		'</span></td></tr><tr class="ice' +
		arr[i+4].data[11] + 
		'"><td colspan="2">Ice Resistance: <span class="white">' +
		arr[i+4].data[11] + 
		'</span></td></tr><tr><td colspan="2"><hr class="attrib' +
		arr[i+4].data[7] + arr[i+4].data[8] + arr[i+4].data[9] + arr[i+4].data[10] + arr[i+4].data[11] + 
		'">Mosaic Slots: <span class="white">' +
		arr[i+4].data[5] + 
		'</span><hr /></td></tr><tr><td colspan="2">[Passive Skills]</td></tr><tr class="' +
		arr[i+4].data[38] + ' skill' + arr[i+4].data[39] +
		'"><td>' +
		arr[i+4].data[38] + 
		':</td><td class="skillamount">' +
		arr[i+4].data[39] + 
		'</td></tr><tr class="' +
		arr[i+4].data[40] + ' skill' + arr[i+4].data[41] +
		'"><td>' +
		arr[i+4].data[40] + 
		':</td><td class="skillamount">' +
		arr[i+4].data[41] + 
		'</td></tr><tr class="' +
		arr[i+4].data[42] + ' skill' + arr[i+4].data[43] +
		'"><td>' +
		arr[i+4].data[42] + 
		':</td><td class="skillamount">' +
		arr[i+4].data[43] + 
		'</td></tr><tr class="' +
		arr[i+4].data[44] + ' skill' + arr[i+4].data[45] +
		'"><td>' +
		arr[i+4].data[44] + 
		':</td><td class="skillamount">' +
		arr[i+4].data[45] + 
		'</td></tr><tr><td colspan="2"><hr />[Forging Material]</td></tr><tr class="white nomat' + 
		arr[i+4].data[21] +
		'"><td colspan="2">' +
		arr[i+4].data[21] + 'x' + arr[i+4].data[22] +
		'</td></tr><tr class="white nomat' + 
		arr[i+4].data[24] +
		'"><td colspan="2">' +
		arr[i+4].data[24] + 'x' + arr[i+4].data[25] +
		'</td></tr><tr class="white nomat' + 
		arr[i+4].data[27] +
		'"><td colspan="2">' +
		arr[i+4].data[27] + 'x' + arr[i+4].data[28] +
		'</td></tr><tr class="white nomat' + 
		arr[i+4].data[30] +
		'"><td colspan="2">' +
		arr[i+4].data[30] + 'x' + arr[i+4].data[31] +
		'</td></tr><tr class="white nomat' + 
		arr[i+4].data[33] +
		'"><td colspan="2">' +
		arr[i+4].data[33] + 'x' + arr[i+4].data[34] +
		'</td></tr><tr class="white nomat' + 
		arr[i+4].data[37] +
		'"><td colspan="2">' +
		arr[i+4].data[36] + 'x' + arr[i+4].data[37] +
		'</td></tr></table></li>' +
		//Skills
		'</ul></td><td class="armorskill">' + 
		arr[i].data[56] + '</td></tr>';
    }
    document.getElementById("armortable").innerHTML = out;

}
function materialsContent(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i ++) {
		out += '<tr><td class="matpiccell"><img src="../images/' + arr[i].data[4] + '.png"></td><td>' + arr[i].data[1] + '</td><td>' + arr[i].data[2] + '</td><td>' + arr[i].data[8] + '</td></tr>';
    }
    document.getElementById("materialtable").innerHTML = out;
}
function monsterContent(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i ++) {
		out += '<tr><td>' + arr[i].data[0] + '</td><td>' + arr[i].data[1] + '</td><td>' + arr[i].data[2] + '</td><td>' + arr[i].data[3] + '</td><td>' + arr[i].data[4] + '</td><td>' + arr[i].data[5] + '</td><td>' + arr[i].data[6] + '</td><td>' + arr[i].data[7] + '</td><td>' + arr[i].data[8] + '</td></tr>';
    }
    document.getElementById("monstertable").innerHTML = out;
}
function weaponContent(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i ++) {
    	var width = ["0", "0", "0", "0", "0", "0", "0", "0"]
    	width[0] = arr[i].data[17] * 100 / 4000000;
		width[1] = (arr[i].data[18] - arr[i].data[17]) * 100 / 4000000;
		width[2] = (arr[i].data[19] - arr[i].data[18]) * 100 / 4000000;
		width[3] = (arr[i].data[20] - arr[i].data[19]) * 100 / 4000000;
		width[4] = (arr[i].data[21] - arr[i].data[20]) * 100 / 4000000;
		width[5] = (arr[i].data[22] - arr[i].data[21]) * 100 / 4000000;
		width[7] = (arr[i].data[23] - arr[i].data[22]) * 100 / 4000000;
		width[6] = 100 - arr[i].data[16] * 100 / 4000000;
		out = '<div class="matpiccell weapon"><div class="weaponpic"><ul class="list"><li class="item"><img src="../../images/' + arr[i].data[4] + '.png"></li>' +
		//First column hover

		'<li class="info"><table class="weaponinfo"><tr><td class="armorpiecename" colspan="2">' + 
		arr[i].data[1] + 
		'<hr /></td></tr><tr><td colspan="2">Character Level: <span class="white">' +
		arr[i].data[7] + 
		'</span><hr /></td></tr><tr class="attrib' +
		arr[i].data[7] + arr[i].data[8] + arr[i].data[9] + arr[i].data[10] + arr[i].data[11] + 
		'"><td colspan="2">[Attributes]</td></tr>' +
		'<tr><td colspan="2">Sharpness</td></tr><tr><td class="sharpbar" colspan="2">' +
		'<div class="basePro clearfix"><div class="barWidth"><span class="colorBar bar-1" style="width:' +
		width[0] +
		'%"></span><span class="colorBar bar-2" style="width:' +
		width[1] +
		'%"></span><span class="colorBar bar-3" style="width:' +
		width[2] +
		'%"></span><span class="colorBar bar-4" style="width:' +
		width[3] +
		'%"></span><span class="colorBar bar-5" style="width:' +
		width[4] +
		'%"></span><span class="colorBar bar-6" style="width:' +
		width[5] +
		'%"></span><span class="colorBar bar-7" style="width:' +
		width[7] +
		'%"></span><span class="leaveBar" style="width:' +
		width[6] +
		'%"></span></div></div></td></tr><tr><td>Attack:</td><td class="white">' +
		arr[i].data[5] +
		'<tr><td>Critical Rate:</td><td class="white">' +
		arr[i].data[6] +
		'</td></tr><tr class="water' +
		arr[i].data[8] +
		'"><td>Water Attack:</td><td class="white">' +
		arr[i].data[8] +
		'</td></tr><tr class="fire' +
		arr[i].data[9] +
		'"><td>Fire Attack:</td><td class="white">' +
		arr[i].data[9] +
		'</td></tr><tr class="thunder' +
		arr[i].data[10] +
		'"><td>Thunder Attack:</td><td class="white">' +
		arr[i].data[10] +
		'</td></tr><tr class="dragon' +
		arr[i].data[11] +
		'"><td>Dragon Attack:</td><td class="white">' +
		arr[i].data[11] +
		'</td></tr><tr class="ice' +
		arr[i].data[12] +
		'"><td>Ice Attack:</td><td class="white">' +
		arr[i].data[12] +
		'</td></tr><tr class="poison poison' +
		arr[i].data[13] +
		'"><td>Poison+:</td><td>' +
		arr[i].data[13] +
		'</td></tr><tr class="paralysis paralysis' +
		arr[i].data[15] +
		'"><td>Paralysis+:</td><td>' +
		arr[i].data[15] +
		'</td></tr><tr class="sleep sleep' +
		arr[i].data[14] +
		'"><td>Sleep+:</td><td>' +
		arr[i].data[14] +
		'</td></tr><tr class="nomat' +
		arr[i].data[137] +
		'"><td colspan="2"><hr />[Shelling Properties]</td></tr><tr class="nomat' +
		arr[i].data[137] +
		'"><td>Shelling Type:</td><td class="white">' +
		arr[i].data[137] +
		'</tr><tr class="nomat' +
		arr[i].data[138] +
		'"><td>Shelling Rating:</td><td class="white">' +
		arr[i].data[138] +
		'</td></tr>' +
		'<tr class="nomat' + 
		arr[i].data[94] +
		'"><td colspan="2"><hr />[Forging Material]</td></tr><tr class="white nomat' + 
		arr[i].data[94] +
		'"><td colspan="2">' +
		arr[i].data[94] + 'x' + arr[i].data[95] +
		'</td></tr><tr class="white nomat' + 
		arr[i].data[97] +
		'"><td colspan="2">' +
		arr[i].data[97] + 'x' + arr[i].data[98] +
		'</td></tr><tr class="white nomat' + 
		arr[i].data[100] +
		'"><td colspan="2">' +
		arr[i].data[100] + 'x' + arr[i].data[101] +
		'</td></tr><tr class="white nomat' + 
		arr[i].data[103] +
		'"><td colspan="2">' +
		arr[i].data[103] + 'x' + arr[i].data[104] +
		'</td></tr><tr class="white nomat' + 
		arr[i].data[106] +
		'"><td colspan="2">' +
		arr[i].data[106] + 'x' + arr[i].data[107] +
		'</td></tr><tr class="white nomat' + 
		arr[i].data[109] +
		'"><td colspan="2">' +
		arr[i].data[109] + 'x' + arr[i].data[110] +
		'</td></tr><tr class="nomat' + 
		arr[i].data[113] +
		'"><td colspan="2"><hr />[Upgrade Material]</td></tr><tr class="white nomat' + 
		arr[i].data[117] +
		'"><td colspan="2">' +
		arr[i].data[117] + 'x' + arr[i].data[116] +
		'</td></tr><tr class="white nomat' + 
		arr[i].data[120] +
		'"><td colspan="2">' +
		arr[i].data[120] + 'x' + arr[i].data[119] +
		'</td></tr><tr class="white nomat' + 
		arr[i].data[123] +
		'"><td colspan="2">' +
		arr[i].data[123] + 'x' + arr[i].data[122] +
		'</td></tr><tr class="white nomat' + 
		arr[i].data[126] +
		'"><td colspan="2">' +
		arr[i].data[126] + 'x' + arr[i].data[125] +
		'</td></tr><tr class="white nomat' + 
		arr[i].data[129] +
		'"><td colspan="2">' +
		arr[i].data[129] + 'x' + arr[i].data[128] +
		'</td></tr><tr class="white nomat' + 
		arr[i].data[132] +
		'"><td colspan="2">' +
		arr[i].data[132] + 'x' + arr[i].data[131] +
		'</td></tr></table></li></div><div>';
    document.getElementById('id' + arr[i].data[0]).innerHTML = out;
    }
}

function footerContent() {
	//because I am lazy
    document.getElementById("footer").innerHTML = '<table style="margin: 0px auto; width: 1200px;"><tr><td class="footerspacing"></td></tr><tr><td class="footertop">This page is maintained and paid for by @Reaver01. If you would like to buy me a beer please click below.<br>' +
'<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">' +
'<input type="hidden" name="cmd" value="_s-xclick">' +
'<input type="hidden" name="hosted_button_id" value="CRDPXKLXJTTY2">' +
'<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">' +
'<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">' +
'</form></td></tr></table>'
}