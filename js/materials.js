var page = "materials";
var materialArray = materialArray.result.rows;
function materialsjs() {
	var url = getUrlParameter('search');
	if (typeof url !== 'undefined') {
	$('#inputText').val(url);
	}
	$('#button').click();
}
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
	var arr = materialArray;
	var out = '';
	var i;
  var search = $('#inputText').val();
  filtered = [];
  for(i = 0; i < materialArray.length; i ++) {
    matString = arr[i].data[6]+' '+translate(arr[i].data[6])+' '+arr[i].data[1]+' '+translate(arr[i].data[1])+' '+arr[i].data[8]+' '+translate(arr[i].data[8])+' '+arr[i].data[2]+' '+translate(arr[i].data[2]);
    if (matString.toUpperCase().indexOf(search.toUpperCase()) >= 0) {
      filtered.push(materialArray[i]);
    }
  }
  arr = filtered;
	for(i = 0; i < arr.length; i ++) {
		out += ''+
	'<tr>'+
		'<td>'+
			'<img src="../images/item/'+arr[i].data[4]+'.png">'+
		'</td>'+
		'<td><a href="/materials/?search='+translate(arr[i].data[1])+'">'+translate(arr[i].data[1])+'</a><br><a href="/materials/?search='+arr[i].data[1]+'">'+arr[i].data[1]+'</a></td>'+
		'<td>'+
		'<div class="no'+arr[i].data[6]+'">Source: '+translate(arr[i].data[6])+'('+translate(arr[i].data[7])+')</div>'+
		'<div class="no yes'+arr[i].data[6]+'">'+translate(arr[i].data[2])+'</div>'+
		'</td>'+
		'<td class="yes">'+translate(arr[i].data[8])+'</td>'+
	'</tr>';
	}
	document.getElementById("materialtable").innerHTML = out;
});