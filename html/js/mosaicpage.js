var page = "mosaic";
function mosaicjs() {
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
	var arr = mosaicArray;
	var out = '';
	var i;
  var search = $('#inputText').val();
  console.log(search);
	for(i = 0; i < arr.length; i ++) {
		var hide = "no";
		jewelryString = arr[i].data[2]+' '+translate(arr[i].data[2])+' '+arr[i].data[5]+' '+translate(arr[i].data[5])+' '+arr[i].data[8]+' '+translate(arr[i].data[8])+' '+arr[i].data[13]+' '+translate(arr[i].data[13])+' '+arr[i].data[15]+' '+translate(arr[i].data[15])+' '+arr[i].data[17]+' '+translate(arr[i].data[17]);
		if (jewelryString.toUpperCase().indexOf(search.toUpperCase()) >= 0) {
			hide = "yes"
		};
		out += ''+
	'<tr class="'+hide+'">'+
		'<td>'+
			'<img src="../images/item/'+arr[i].data[10]+'.png">'+
		'</td>'+
		'<td>'+translate(arr[i].data[2])+'<br>'+arr[i].data[2]+'</td>'+
		'<td>'+arr[i].data[3]+'</td>'+
		'<td>'+translate(arr[i].data[5])+' '+arr[i].data[6]+'</td>'+
		'<td>'+translate(arr[i].data[8])+' '+arr[i].data[9]+'</td>'+
		'<td><a href="/materials/?search='+translate(arr[i].data[13])+'" target="_blank">'+translate(arr[i].data[13])+' '+arr[i].data[14]+'</a><br><a href="/materials/?search='+translate(arr[i].data[15])+'" target="_blank">'+translate(arr[i].data[15])+' '+arr[i].data[16]+'</a><br><a href="/materials/?search='+translate(arr[i].data[17])+'" target="_blank">'+translate(arr[i].data[17])+' '+arr[i].data[18]+'</a></td>'+
	'</tr>';
	}
	document.getElementById("mosaicTable").innerHTML = out;
});