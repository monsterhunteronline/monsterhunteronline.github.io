var page = "crafting";
var combiningArray1 = combiningArray1.result.rows
var combiningArray2 = combiningArray2.result.rows
function craftingjs() {
	var arr = combiningArray1;
	var arr2 = combiningArray2;
	var out = '';
	var out2 = '';
	var i;
	for(i = 0; i < arr.length; i ++) {
		out += ''+
	'<tr>'+
		'<td>'+
			'<img src="../images/item/'+arr[i].data[5]+'.png">'+
		'</td>'+
		'<td>'+translate(arr[i].data[2])+'<br>'+arr[i].data[2]+'</a></td>'+
		'<td>'+translate(arr[i].data[3])+'</td>'+
		'<td><a href="/materials/?search='+translate(arr[i].data[7])+'">'+translate(arr[i].data[7])+' x'+arr[i].data[8]+'</a><br><a href="/materials/?search='+translate(arr[i].data[9])+'">'+translate(arr[i].data[9])+' x'+arr[i].data[10]+'</a><br><span class="no'+translate(arr[i].data[11])+'"><a href="/materials/?search='+translate(arr[i].data[11])+'">'+translate(arr[i].data[11])+' x'+arr[i].data[12]+'</a></span></td>'+
	'</tr>';
	}
	document.getElementById("creativetable").innerHTML = out;
	for(i = 0; i < arr2.length; i ++) {
		out2 += ''+
	'<tr>'+
		'<td>'+
			'<img src="../images/item/'+arr2[i].data[5]+'.png">'+
		'</td>'+
		'<td>'+translate(arr2[i].data[2])+'<br>'+arr2[i].data[2]+'</a></td>'+
		'<td>'+translate(arr2[i].data[3])+'</td>'+
		'<td><a href="/materials/?search='+translate(arr2[i].data[7])+'">'+translate(arr2[i].data[7])+' x'+arr2[i].data[8]+'</a><br><a href="/materials/?search='+translate(arr2[i].data[9])+'">'+translate(arr2[i].data[9])+' x'+arr2[i].data[10]+'</a><br><span class="no'+translate(arr2[i].data[11])+'"><a href="/materials/?search='+translate(arr2[i].data[11])+'">'+translate(arr2[i].data[11])+' x'+arr2[i].data[12]+'</a></span></td>'+
	'</tr>';
	}
	document.getElementById("pharmacytable").innerHTML = out2;
};