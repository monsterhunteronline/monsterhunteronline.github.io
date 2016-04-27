$(function() {
	var url = getUrlParameter('search');
	if (typeof url !== 'undefined') {
	$('#inputText').val(url);
	}
	$('#button').click();
});
$('#inputText').keyup(function(event) {
	if(event.keyCode == 13){
		$('#button').click();
	}
});
$('#clear').on('click', function() {
	$('#inputText').val('');
	$('#button').click();
});
var skillString;
$('#button').on('click', function() {
	var arr = skillsArray;
	var search = $('#inputText').val();
	var out = '';
	for(i = 0; i < arr.length; i ++) {
		var hide = "nohide";
		skillString = arr[i].data[0]+' '+arr[i].data[1]+' '+arr[i].data[2]+' '+arr[i].data[3]+' '+arr[i].data[4]+' '+arr[i].data[5]+' '+arr[i].data[6]+' '+arr[i].data[7]+' '+arr[i].data[8]+' '+arr[i].data[9]+' '+arr[i].data[10]+' '+arr[i].data[11]+' '+arr[i].data[12]+' '+arr[i].data[13]+' '+arr[i].data[14]+' '+arr[i].data[15]+' '+arr[i].data[16]+' '+arr[i].data[17]+' '+arr[i].data[18]+' '+arr[i].data[19];
		if (skillString.toUpperCase().indexOf(search.toUpperCase()) >= 0) {
			hide = "yeshide"
		};
		out += ''+
		'<tr class="grey lighten-3 '+hide+'">'+
			'<td><a href="/armor/?search='+arr[i].data[0]+'" target="_blank">'+arr[i].data[0]+'<br>'+arr[i].data[1]+'</a></td>'+
			'<td colspan="3">'+arr[i].data[20]+'</td>'+
		'</tr>'+
		'<tr class="no'+arr[i].data[2]+' '+hide+'">'+
			'<td></td>'+
			'<td></td>'+
			'<td>10</td>'+
			'<td>'+arr[i].data[2]+'<br>'+arr[i].data[3]+'</td>'+
		'</tr>'+
		'<tr class="no'+arr[i].data[4]+' '+hide+'">'+
			'<td></td>'+
			'<td></td>'+
			'<td>15</td>'+
			'<td>'+arr[i].data[4]+'<br>'+arr[i].data[5]+'</td>'+
		'</tr>'+
		'<tr class="no'+arr[i].data[6]+' '+hide+'">'+
			'<td></td>'+
			'<td></td>'+
			'<td>20</td>'+
			'<td>'+arr[i].data[6]+'<br>'+arr[i].data[7]+'</td>'+
		'</tr>'+
		'<tr class="no'+arr[i].data[8]+' '+hide+'">'+
			'<td></td>'+
			'<td></td>'+
			'<td>25</td>'+
			'<td>'+arr[i].data[8]+'<br>'+arr[i].data[9]+'</td>'+
		'</tr>'+
		'<tr class="no'+arr[i].data[10]+' '+hide+'">'+
			'<td></td>'+
			'<td></td>'+
			'<td>30</td>'+
			'<td>'+arr[i].data[10]+'<br>'+arr[i].data[11]+'</td>'+
		'</tr>'+
		'<tr class="no'+arr[i].data[12]+' '+hide+'">'+
			'<td></td>'+
			'<td></td>'+
			'<td>-10</td>'+
			'<td>'+arr[i].data[12]+'<br>'+arr[i].data[13]+'</td>'+
		'</tr>'+
		'<tr class="no'+arr[i].data[14]+' '+hide+'">'+
			'<td></td>'+
			'<td></td>'+
			'<td>-15</td>'+
			'<td>'+arr[i].data[14]+'<br>'+arr[i].data[15]+'</td>'+
		'</tr>'+
		'<tr class="no'+arr[i].data[16]+' '+hide+'">'+
			'<td></td>'+
			'<td></td>'+
			'<td>-20</td>'+
			'<td>'+arr[i].data[16]+'<br>'+arr[i].data[17]+'</td>'+
		'</tr>'+
		'<tr class="no'+arr[i].data[18]+' '+hide+'">'+
			'<td></td>'+
			'<td></td>'+
			'<td>-25</td>'+
			'<td>'+arr[i].data[18]+'<br>'+arr[i].data[19]+'</td>'+
		'</tr>';
	}
	document.getElementById("skillsList").innerHTML = out;
});