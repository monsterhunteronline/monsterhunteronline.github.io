var page = "weapons2";
function skillbookjs() {
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
	$('#button').click();
});
var matString;
$('#button').on('click', function() {
	var arr = skillbookArray;
	var out = '';
	var i;
	var search = $('#inputText').val();
	console.log(search);
	filtered = [];
	for(i = 0; i < skillbookArray.length; i ++) {
    	skillString = arr[i].data[1]+' '+translate(arr[i].data[1])+' '+arr[i].data[2];+' '+arr[i].data[3]+' '+translate(arr[i].data[3])
    	if (skillString.toUpperCase().indexOf(search.toUpperCase()) >= 0) {
    		filtered.push(skillbookArray[i])
    	}
	}
	arr = filtered;
	for(i = 0; i < arr.length; i ++) {
		out += ''+
	'<tr>'+
		'<td>'+translate(arr[i].data[1])+'</td>'+
		'<td>'+arr[i].data[2]+'</td>'+
		'<td>'+arr[i].data[4]+'</td>'+
		'<td>'+translate(arr[i].data[3])+'</td>'+
	'</tr>';
	}
	document.getElementById("skillsList").innerHTML = out;
});