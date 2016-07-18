var page = "cats";
var catbookArray = catbookArray.result.rows
function catbookjs() {
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
var bookstring;
$('#button').on('click', function() {
	var arr = catbookArray;
	var out = '';
	var i;
  var search = $('#inputText').val();
  console.log(search);
  filtered = [];
  for(i = 0; i < catbookArray.length; i ++) {
    bookstring = arr[i].data[1]+' '+translate(arr[i].data[1])+' '+arr[i].data[2]+' '+translate(arr[i].data[2]);
    if (bookstring.toUpperCase().indexOf(search.toUpperCase()) >= 0) {
      filtered.push(catbookArray[i])
    }
  }
  arr = filtered;
	for(i = 0; i < arr.length; i ++) {
		out += ''+
	'<tr>'+
		'<td>'+
			'<img src="../images/item/catskill_book_'+getimages(arr[i].data[1])+'.png">'+
		'</td>'+
		'<td><a href="/cats/?search='+translate(arr[i].data[1])+'">'+translate(arr[i].data[1])+'</a><br><a href="/cats/?search='+arr[i].data[1]+'">'+arr[i].data[1]+'</a></td>'+
		'<td>'+translate(arr[i].data[2])+'</td>'+
	'</tr>';
	}
	document.getElementById("skillbooktable").innerHTML = out;
});