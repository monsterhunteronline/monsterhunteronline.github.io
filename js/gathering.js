var page = "gathering";
var mapdataArray = mapdataArray.result.rows;
var materialArray = materialArray.result.rows;
var material;
function gatheringjs() {
	var arr = mapdataArray,
		out = '',
		i;
	for(i = 0; i < arr.length; i ++) {
	material = filter(arr[i].data[16]);
	var picture = "blank";
		if (typeof material[0] !== 'undefined') { picture = material[0].data[4]; }
		out += ''+
	'<tr>'+
		'<td>'+arr[i].data[2]+'</td>'+
		'<td>'+arr[i].data[3]+'</td>'+
		'<td>'+translate(arr[i].data[7])+'</td>'+
		'<td>'+translate(arr[i].data[17])+'</td>'+
		'<td>'+
			'<img src="../images/item/'+picture+'.png">'+
		'</td>'+
	'</tr>';
	}
	document.getElementById("gatheringtable").innerHTML = out;
}
function filter(aID) {
	var arr1 = materialArray;
	filterMats = $.grep(arr1, function(element, index) {
		return element.iID == aID;
	}); 
	return filterMats;
}
