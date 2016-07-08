var page = "home";
var sliderArray = [
	{
	"data": [
		"left",
		"picture.png",
		"Placeholder",
		"No pictures to display"
		]
	},
];

function sliderjs() {
	var out = ''
	var i

	for(i = 0; i < sliderArray.length; i ++) {
		out += ''+
          '<li>'+
            '<img src="images/slider/'+sliderArray[i].data[1]+'">'+
            '<div class="caption '+sliderArray[i].data[0]+'-align">'+
              '<h3>'+sliderArray[i].data[2]+'</h3>'+
              '<h5 class="light grey-text text-lighten-3">'+sliderArray[i].data[3]+'</h5>'+
            '</div>'+
          '</li>';
    }
    document.getElementById("communitypics").innerHTML = out;
};