var page = "home";
var sliderArray = [
	{
	"data": [
		"left",
		"Screenshot0020_mh.jpg",
		"",
		""
		]
	},
	{
	"data": [
		"left",
		"Screenshot0037_mh.jpg",
		"",
		""
		]
	},
	{
	"data": [
		"left",
		"Screenshot0059_mh.jpg",
		"",
		""
		]
	},
	{
	"data": [
		"left",
		"Screenshot0079_mh.jpg",
		"",
		""
		]
	},
	{
	"data": [
		"left",
		"unknown.png",
		"",
		""
		]
	},
	{
	"data": [
		"left",
		"unknown1.png",
		"",
		""
		]
	},
	{
	"data": [
		"left",
		"Screenshot0409_mh.jpg",
		"",
		""
		]
	},
	{
	"data": [
		"left",
		"Screenshot0068_mh.jpg",
		"",
		""
		]
	},
	{
	"data": [
		"left",
		"Screenshot0069_mh.jpg",
		"",
		""
		]
	},
	{
	"data": [
		"left",
		"Screenshot0074_mh.jpg",
		"",
		""
		]
	},
	{
	"data": [
		"left",
		"Screenshot0076_mh.jpg",
		"",
		""
		]
	},
	{
	"data": [
		"left",
		"unknown3.png",
		"",
		""
		]
	},
	{
	"data": [
		"left",
		"Screenshot0002_mh.jpg",
		"",
		""
		]
	},
	{
	"data": [
		"left",
		"face2.jpg",
		"",
		""
		]
	},
];
function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

function sliderjs() {

	array = sliderArray
	var i = 0
	  , j = 0
      , temp = null

	for (i = array.length - 1; i > 0; i -= 1) {
    	j = Math.floor(Math.random() * (i + 1))
    	temp = array[i]
    	array[i] = array[j]
    	array[j] = temp
	}

	sliderArray = array

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