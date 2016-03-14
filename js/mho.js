function navbarContent(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i ++) {
		out += '<li class="navbar"><a class="navlink" href="http://monsterhunteronline.in' + arr[i].url + '">' + arr[i].pagename + '</a></li>';
    }
    document.getElementById("navlist").innerHTML = out;

}
function footerContent() {
	//because I am lazy
    document.getElementById("footer").innerHTML = 'This page is maintained by @Reaver01.'
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
		out += '<tr name="' + arr[i].data[0] + '"><td><img src="../images/' + arr[i].data[4] + '.png"></td><td>' + arr[i].data[1] + '</td><td>' + arr[i].data[2] + '</td><td>' + arr[i].data[8] + '</td></tr>';
    }
    document.getElementById("materialtable").innerHTML = out;

}