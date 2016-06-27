var materialIcons = ["not_interested", "thumb_down", "thumbs_up_down", "thumb_up", "grade",];
var page = "monsters";
function monsterjs() {
	var arr = materialArray;
	var out = '';
	var i;
	for(i = 0; i < arr.length; i ++) {
		out += ''+
	'<tr>'+
		'<td>'+
			'<img src="../../images/item/'+arr[i].data[6]+'.png">'+
		'</td>'+
		'<td><a href="/materials/?search='+translate(arr[i].data[1])+'" target="_blank">'+translate(arr[i].data[1])+'</a><br><a href="/materials/?search='+arr[i].data[1]+'" target="_blank">'+arr[i].data[1]+'</a></td>'+
		'<td>Source: '+translate(arr[i].data[2])+'('+translate(arr[i].data[3])+')</td>'+
		'<td>'+translate(arr[i].data[4])+'</td>'+
	'</tr>';
	}
	document.getElementById("material-drops").innerHTML = out;
	document.getElementById("monsterName").innerHTML = materialArray[0].data[2]+' | '+translate('nl'+materialArray[0].data[2]);
	var arr = weaknessArray;
	var out = '';
	var i;
	for(i = 0; i < arr.length; i ++) {
		out += ''+
	'<tr>'+
		'<td>'+arr[i].data[2]+'</td>'+
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
	document.getElementById("monster1").innerHTML = out;
	var out = '<tr>'+
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
	document.getElementById("monster3").innerHTML = arr[0].data[19];
};