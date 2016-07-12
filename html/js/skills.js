var page = "skills";
function skillsjs() {
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
var skillString;
$('#button').on('click', function() {
	var search = $('#inputText').val();
	filtered = [];
	for(i = 0; i < skillsArray.length; i ++) {
		skillString = skillsArray[i].data[3]+' '+skillsArray[i].data[5]+' '+skillsArray[i].data[6]+' '+translate(skillsArray[i].data[3])+' '+translate(skillsArray[i].data[5])+' '+translate(skillsArray[i].data[6])
		if (skillString.toUpperCase().indexOf(search.toUpperCase()) >= 0) {
			filtered.push(skillsArray[i])
		}
	}
	arr = filtered;
	var out = '';
	var arr2 = []
	for(i = 0; i < arr.length; i ++) {

		var name = arr[i].data[3]
		if (isNaN(arr2[name])) {
			arr2[name] = 0
		}
		arr2[name] += 1
	}
	console.log(arr2)
	out = ''
	for(i = 0; i < arr.length; i += arr2[name]) {
		var name = arr[i].data[3]
		var count = arr2[name]+i
		out += '<tr><td rowspan="'+arr2[name]+'"><a href="/armor/?search='+arr[i].data[3]+'" target="_blank">'+translate(arr[i].data[3])+'<br>'+arr[i].data[3]+'</a></td><td>'+translate(arr[i].data[5])+'<br>'+arr[i].data[5]+'</td><td>'+translate(arr[i].data[6])+'</td><td>'+arr[i].data[7]+'</td></tr>';
		if (arr2[name] > 1) {
			for(x = i+1; x < count; x++) {
				out += '<tr><td>'+translate(arr[x].data[5])+'<br>'+arr[x].data[5]+'</td><td>'+translate(arr[x].data[6])+'</td><td>'+arr[x].data[7]+'</td></tr>';
			}
		}
	}
	document.getElementById("skillsList").innerHTML = out;
});