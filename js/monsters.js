var materialIcons = ["not_interested", "thumb_down", "thumbs_up_down", "thumb_up", "grade"];
var weaknessArray = weaknessArray.result.rows;
var stagesArray = [];
var page = "monsters";
function monsterjs() {
	filtered = [];
	searchstring = weaknessArray[0].data[1];
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
	document.getElementById("monsterName").innerHTML = weaknessArray[0].data[1]+' | '+translate('nl'+weaknessArray[0].data[1]);
	var arr = weaknessArray;
	out = '';
	if (arr[0].data[21] === "0") {
		for(i = 0; i < arr.length; i ++) {
			out += ''+
		'<tr>'+
			'<td>'+translate(arr[i].data[2])+'</td>'+
			'<td><i class="weak'+arr[i].data[3]+' material-icons flow-text">'+materialIcons[arr[i].data[3]]+'</i></td>'+
			'<td><i class="weak'+arr[i].data[4]+' material-icons flow-text">'+materialIcons[arr[i].data[4]]+'</i></td>'+
			'<td><i class="weak'+arr[i].data[5]+' material-icons flow-text">'+materialIcons[arr[i].data[5]]+'</i></td>'+
			'<td><i class="weak'+arr[i].data[6]+' material-icons flow-text">'+materialIcons[arr[i].data[6]]+'</i></td>'+
			'<td><i class="weak'+arr[i].data[7]+' material-icons flow-text">'+materialIcons[arr[i].data[7]]+'</i></td>'+
			'<td><i class="weak'+arr[i].data[8]+' material-icons flow-text">'+materialIcons[arr[i].data[8]]+'</i></td>'+
			'<td><i class="weak'+arr[i].data[9]+' material-icons flow-text">'+materialIcons[arr[i].data[9]]+'</i></td>'+
			'<td><i class="weak'+arr[i].data[10]+' material-icons flow-text">'+materialIcons[arr[i].data[10]]+'</i></td>'+
		'</tr>';
		}
	} else {
		for(i = 0; i < arr.length; i ++) {
			if (stagesArray.indexOf(arr[i].data[21]) === -1) {
				stagesArray.push(arr[i].data[21]);
			}
		}
		for(i = 0; i < stagesArray.length; i ++) {
			out += ''+
			'<tr>'+
				'<th colspan="9">'+translate(stagesArray[i])+'</th>'+
			'</tr>';
			for(x = 0; x < arr.length; x ++) {
				if (arr[x].data[21] === stagesArray[i]) {
					out += ''+
				'<tr>'+
					'<td>'+translate(arr[x].data[2])+'</td>'+
					'<td><i class="weak'+arr[x].data[3]+' material-icons flow-text">'+materialIcons[arr[x].data[3]]+'</i></td>'+
					'<td><i class="weak'+arr[x].data[4]+' material-icons flow-text">'+materialIcons[arr[x].data[4]]+'</i></td>'+
					'<td><i class="weak'+arr[x].data[5]+' material-icons flow-text">'+materialIcons[arr[x].data[5]]+'</i></td>'+
					'<td><i class="weak'+arr[x].data[6]+' material-icons flow-text">'+materialIcons[arr[x].data[6]]+'</i></td>'+
					'<td><i class="weak'+arr[x].data[7]+' material-icons flow-text">'+materialIcons[arr[x].data[7]]+'</i></td>'+
					'<td><i class="weak'+arr[x].data[8]+' material-icons flow-text">'+materialIcons[arr[x].data[8]]+'</i></td>'+
					'<td><i class="weak'+arr[x].data[9]+' material-icons flow-text">'+materialIcons[arr[x].data[9]]+'</i></td>'+
					'<td><i class="weak'+arr[x].data[10]+' material-icons flow-text">'+materialIcons[arr[x].data[10]]+'</i></td>'+
				'</tr>';
						}
			}
		}
	}


	document.getElementById("monster1").innerHTML = out;
	out = '<tr>'+
		'<td><i class="weak'+arr[0].data[11]+' material-icons flow-text">'+materialIcons[arr[0].data[11]]+'</i></td>'+
		'<td><i class="weak'+arr[0].data[12]+' material-icons flow-text">'+materialIcons[arr[0].data[12]]+'</i></td>'+
		'<td><i class="weak'+arr[0].data[13]+' material-icons flow-text">'+materialIcons[arr[0].data[13]]+'</i></td>'+
		'<td><i class="weak'+arr[0].data[14]+' material-icons flow-text">'+materialIcons[arr[0].data[14]]+'</i></td>'+
		'<td><i class="weak'+arr[0].data[15]+' material-icons flow-text">'+materialIcons[arr[0].data[15]]+'</i></td>'+
		'<td><i class="weak'+arr[0].data[16]+' material-icons flow-text">'+materialIcons[arr[0].data[16]]+'</i></td>'+
		'<td><i class="weak'+arr[0].data[17]+' material-icons flow-text">'+materialIcons[arr[0].data[17]]+'</i></td>'+
		'<td><i class="weak'+arr[0].data[18]+' material-icons flow-text">'+materialIcons[arr[0].data[18]]+'</i></td>'+
		'<td><i class="weak'+arr[0].data[20]+' material-icons flow-text">'+materialIcons[arr[0].data[20]]+'</i></td>'+
	'</tr>';
	document.getElementById("monster2").innerHTML = out;
	document.getElementById("monster3").innerHTML = translate(arr[0].data[19]);
}