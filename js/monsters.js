var materialIcons = ["not_interested", "thumb_down", "thumbs_up_down", "thumb_up", "grade"];
var monsterArray = monsterArray;
var stagesArray = [];
var page = "monsters";
function monsterjs() {
	filtered = [];
	searchstring = monsterArray.name;
	if (searchstring === "红莲砦蟹" || searchstring === "铠岩砦蟹") {
		searchstring = "红莲砦蟹,铠岩砦蟹";
	}
	if (searchstring === "荒厄龙完全体") {
		searchstring = "御五相";
	}
	for(i = 0; i < materialArray.length; i ++) {
		if (materialArray[i].data[6]==searchstring) {
			filtered.push(materialArray[i]);
		}
	}
	arr = filtered;
	var out = '';
	var i;
	for(i = 0; i < arr.length; i ++) {
		out += ''+
	'<tr>'+
		'<td>'+
			'<img src="../../images/item/'+arr[i].data[4]+'.png">'+
		'</td>'+
		'<td><a href="/materials/?search='+translate(arr[i].data[1])+'" target="_blank">'+translate(arr[i].data[1])+'</a><br><a href="/materials/?search='+arr[i].data[1]+'" target="_blank">'+arr[i].data[1]+'</a></td>'+
		'<td>Source: '+translate(arr[i].data[6])+'('+translate(arr[i].data[7])+')</td>'+
		'<td>'+translate(arr[i].data[8])+'</td>'+
	'</tr>';
	}
	document.getElementById("material-drops").innerHTML = out;
	document.getElementById("monsterName").innerHTML = monsterArray.name+' | '+translate('nl'+monsterArray.name);
	var arr = monsterArray;
	out = '';
	if (arr.weakness[0].data[10] === "0") {
		for(i = 0; i < arr.weakness.length; i ++) {
			out += ''+
		'<tr>'+
			'<td>'+translate(arr.weakness[i].data[0])+'</td>'+
			'<td><i class="weak'+arr.weakness[i].data[1]+' material-icons flow-text">'+materialIcons[arr.weakness[i].data[1]]+'</i></td>'+
			'<td><i class="weak'+arr.weakness[i].data[2]+' material-icons flow-text">'+materialIcons[arr.weakness[i].data[2]]+'</i></td>'+
			'<td><i class="weak'+arr.weakness[i].data[3]+' material-icons flow-text">'+materialIcons[arr.weakness[i].data[3]]+'</i></td>'+
			'<td><i class="weak'+arr.weakness[i].data[4]+' material-icons flow-text">'+materialIcons[arr.weakness[i].data[4]]+'</i></td>'+
			'<td><i class="weak'+arr.weakness[i].data[5]+' material-icons flow-text">'+materialIcons[arr.weakness[i].data[5]]+'</i></td>'+
			'<td><i class="weak'+arr.weakness[i].data[6]+' material-icons flow-text">'+materialIcons[arr.weakness[i].data[6]]+'</i></td>'+
			'<td><i class="weak'+arr.weakness[i].data[7]+' material-icons flow-text">'+materialIcons[arr.weakness[i].data[7]]+'</i></td>'+
			'<td><i class="weak'+arr.weakness[i].data[8]+' material-icons flow-text">'+materialIcons[arr.weakness[i].data[8]]+'</i></td>'+
		'</tr>';
		}
	} else {
		for(i = 0; i < arr.weakness.length; i ++) {
			if (stagesArray.indexOf(arr.weakness[i].data[10]) === -1) {
				stagesArray.push(arr.weakness[i].data[10]);
			}
		}
		for(i = 0; i < stagesArray.length; i ++) {
			out += ''+
			'<tr>'+
				'<th colspan="9">'+translate(stagesArray[i])+'</th>'+
			'</tr>';
			for(x = 0; x < arr.weakness.length; x ++) {
				if (arr.weakness[x].data[10] === stagesArray[i]) {
					out += ''+
				'<tr>'+
					'<td>'+translate(arr.weakness[x].data[0])+'</td>'+
					'<td><i class="weak'+arr.weakness[x].data[1]+' material-icons flow-text">'+materialIcons[arr.weakness[x].data[1]]+'</i></td>'+
					'<td><i class="weak'+arr.weakness[x].data[2]+' material-icons flow-text">'+materialIcons[arr.weakness[x].data[2]]+'</i></td>'+
					'<td><i class="weak'+arr.weakness[x].data[3]+' material-icons flow-text">'+materialIcons[arr.weakness[x].data[3]]+'</i></td>'+
					'<td><i class="weak'+arr.weakness[x].data[4]+' material-icons flow-text">'+materialIcons[arr.weakness[x].data[4]]+'</i></td>'+
					'<td><i class="weak'+arr.weakness[x].data[5]+' material-icons flow-text">'+materialIcons[arr.weakness[x].data[5]]+'</i></td>'+
					'<td><i class="weak'+arr.weakness[x].data[6]+' material-icons flow-text">'+materialIcons[arr.weakness[x].data[6]]+'</i></td>'+
					'<td><i class="weak'+arr.weakness[x].data[7]+' material-icons flow-text">'+materialIcons[arr.weakness[x].data[7]]+'</i></td>'+
					'<td><i class="weak'+arr.weakness[x].data[8]+' material-icons flow-text">'+materialIcons[arr.weakness[x].data[8]]+'</i></td>'+
				'</tr>';
						}
			}
		}
	}


	document.getElementById("monster1").innerHTML = out;
	out = '<tr>'+
		'<td><i class="weak'+arr.other[11]+' material-icons flow-text">'+materialIcons[arr.other[0]]+'</i></td>'+
		'<td><i class="weak'+arr.other[12]+' material-icons flow-text">'+materialIcons[arr.other[1]]+'</i></td>'+
		'<td><i class="weak'+arr.other[13]+' material-icons flow-text">'+materialIcons[arr.other[2]]+'</i></td>'+
		'<td><i class="weak'+arr.other[14]+' material-icons flow-text">'+materialIcons[arr.other[3]]+'</i></td>'+
		'<td><i class="weak'+arr.other[15]+' material-icons flow-text">'+materialIcons[arr.other[4]]+'</i></td>'+
		'<td><i class="weak'+arr.other[16]+' material-icons flow-text">'+materialIcons[arr.other[5]]+'</i></td>'+
		'<td><i class="weak'+arr.other[17]+' material-icons flow-text">'+materialIcons[arr.other[6]]+'</i></td>'+
		'<td><i class="weak'+arr.other[18]+' material-icons flow-text">'+materialIcons[arr.other[7]]+'</i></td>'+
		'<td><i class="weak'+arr.other[20]+' material-icons flow-text">'+materialIcons[arr.other[8]]+'</i></td>'+
	'</tr>';
	document.getElementById("monster2").innerHTML = out;
	document.getElementById("monster3").innerHTML = translate(arr.other[9]);
}