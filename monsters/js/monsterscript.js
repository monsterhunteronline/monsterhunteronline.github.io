function materialdrops(arr) {
	var out = '';
	var i;
	for(i = 0; i < arr.length; i ++) {
		out += '' +
	'<tr>' +
		'<td>' +
			'<img src="../../images/item/' + arr[i].data[6] + '.png">' +
		'</td>' +
		'<td>' + arr[i].data[1] + '</td>' +
		'<td>' + arr[i].data[5] + '</td>' +
		'<td>' + arr[i].data[4] + '</td>' +
	'</tr>';
	}
	document.getElementById("material-drops").innerHTML = out;
};
function monsterContent1(arr) {
	var out = "";
	var i;
	for(i = 0; i < arr.length; i ++) {
		out += '' +
	'<tr>' +
		'<td>' + arr[i].data[0] + '</td>' +
		'<td><i class="' + arr[i].data[1] + ' material-icons flow-text">' + arr[i].data[1] + '</i></td>' +
		'<td><i class="' + arr[i].data[2] + ' material-icons flow-text">' + arr[i].data[2] + '</i></td>' +
		'<td><i class="' + arr[i].data[3] + ' material-icons flow-text">' + arr[i].data[3] + '</i></td>' +
		'<td><i class="' + arr[i].data[4] + ' material-icons flow-text">' + arr[i].data[4] + '</i></td>' +
		'<td><i class="' + arr[i].data[5] + ' material-icons flow-text">' + arr[i].data[5] + '</i></td>' +
		'<td><i class="' + arr[i].data[6] + ' material-icons flow-text">' + arr[i].data[6] + '</i></td>' +
		'<td><i class="' + arr[i].data[7] + ' material-icons flow-text">' + arr[i].data[7] + '</i></td>' +
		'<td><i class="' + arr[i].data[8] + ' material-icons flow-text">' + arr[i].data[8] + '</i></td>' +
	'</tr>';
	}
	document.getElementById("monster1").innerHTML = out;
};
function monsterContent2(arr) {
	var out = "";
	var i;
	for(i = 0; i < arr.length; i ++) {
		out += '' +
	'<tr>' +
		'<td><i class="' + arr[i].data[0] + ' material-icons flow-text">' + arr[i].data[0] + '</i></td>' +
		'<td><i class="' + arr[i].data[1] + ' material-icons flow-text">' + arr[i].data[1] + '</i></td>' +
		'<td><i class="' + arr[i].data[2] + ' material-icons flow-text">' + arr[i].data[2] + '</i></td>' +
		'<td><i class="' + arr[i].data[3] + ' material-icons flow-text">' + arr[i].data[3] + '</i></td>' +
		'<td><i class="' + arr[i].data[4] + ' material-icons flow-text">' + arr[i].data[4] + '</i></td>' +
		'<td><i class="' + arr[i].data[5] + ' material-icons flow-text">' + arr[i].data[5] + '</i></td>' +
		'<td><i class="' + arr[i].data[6] + ' material-icons flow-text">' + arr[i].data[6] + '</i></td>' +
		'<td><i class="' + arr[i].data[7] + ' material-icons flow-text">' + arr[i].data[7] + '</i></td>' +
		'<td class="hide-on-small-only">' + arr[i].data[8] + '</td>' +
	'</tr>';
		out2 = arr[i].data[8]
	}
	document.getElementById("monster2").innerHTML = out;
	document.getElementById("monster3").innerHTML = out2;
};