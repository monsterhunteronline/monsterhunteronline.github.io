var page = "jewelry";
function jewelryjs() {
	var url = getUrlParameter('search');
	if (typeof url !== 'undefined') {
	$('#inputText').val(url);
	}
	$('#button').click();
};
$('#inputText').keyup(function(event) {
	if(event.keyCode == 13){
		$('#button').click();
	}
});
$('#clear').on('click', function() {
	$('#inputText').val('');
    removeParam('search');
	$('#button').click();
});
var matString;
$('#button').on('click', function() {
	var arr = jewelryArray;
	var out = '';
	var i;
	var search = $('#inputText').val();
	console.log(search);
	filtered = [];
	for(i = 0; i < jewelryArray.length; i ++) {
    	jewelryString = arr[i].data[1]+' '+arr[i].data[2];
    	if (jewelryString.toUpperCase().indexOf(search.toUpperCase()) >= 0) {
    		filtered.push(jewelryArray[i])
    	}
	}
	arr = filtered;
	for(i = 0; i < arr.length; i ++) {
		out += ''+
	'<tr>'+
		'<td>'+
			'<img src="../images/item/'+arr[i].data[6]+'.png">'+
		'</td>'+
		'<td>'+arr[i].data[2]+'</td>'+
		'<td>'+arr[i].data[1]+'</td>'+
		'<td>'+
			'<span class="no'+arr[i].data[9]+'">Attack: '+arr[i].data[9]+'&nbsp;&nbsp;</span>'+
			'<span class="no'+arr[i].data[10]+'">Defense: '+arr[i].data[10]+'&nbsp;&nbsp;</span>'+
			'<span class="no'+arr[i].data[11]+'">Critical Rate: '+arr[i].data[11]+'&nbsp;&nbsp;</span>'+
			'<span class="no'+arr[i].data[12]+'">Water Atk: '+arr[i].data[12]+'&nbsp;&nbsp;</span>'+
			'<span class="no'+arr[i].data[13]+'">Fire Atk: '+arr[i].data[13]+'&nbsp;&nbsp;</span>'+
			'<span class="no'+arr[i].data[14]+'">Thunder Atk: '+arr[i].data[14]+'&nbsp;&nbsp;</span>'+
			'<span class="no'+arr[i].data[15]+'">Dragon Atk: '+arr[i].data[15]+'&nbsp;&nbsp;</span>'+
			'<span class="no'+arr[i].data[16]+'">Ice Atk: '+arr[i].data[16]+'</span>'+
			'<span class="no'+arr[i].data[11]+'">Critical Rate: '+arr[i].data[11]+'&nbsp;&nbsp;</span>'+
			'<span class="no'+arr[i].data[20]+'">Water Def: '+arr[i].data[20]+'&nbsp;&nbsp;</span>'+
			'<span class="no'+arr[i].data[21]+'">Fire Def: '+arr[i].data[21]+'&nbsp;&nbsp;</span>'+
			'<span class="no'+arr[i].data[22]+'">Thunder Def: '+arr[i].data[22]+'&nbsp;&nbsp;</span>'+
			'<span class="no'+arr[i].data[23]+'">Dragon Def: '+arr[i].data[23]+'&nbsp;&nbsp;</span>'+
			'<span class="no'+arr[i].data[24]+'">Ice Def: '+arr[i].data[24]+'</span>'+
		'</td>'+
	'</tr>';
	}
	document.getElementById("necklaceTable").innerHTML = out;
});