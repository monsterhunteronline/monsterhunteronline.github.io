var page = "monstermain";
function monsternav() {
	var low = lowrankArray;
	var high = highrankArray;
	var outlow = '<span class="card-title">Low/High Rank Monsters</span><br>';
	var outhigh = '<span class="card-title">High Rank Monsters</span><br>';
	var i;

	for(i = 0; i < low.length; i ++) {
		outlow += ''+
	'<a class="tooltipped" data-position="right" data-delay="10" data-tooltip="'+
	low[i].data[0]+
	'" href="'+
	low[i].data[1]+
	'/"><div class="chip"><img src="images/'+
	low[i].data[2]+
	'" alt="'+
	low[i].data[0]+
	'">'+
	low[i].data[3]+
	'</div></a>'
	}
	for(i = 0; i < high.length; i ++) {
		outhigh += ''+
	'<a class="tooltipped" data-position="right" data-delay="10" data-tooltip="'+
	high[i].data[0]+
	'" href="'+
	high[i].data[1]+
	'/"><div class="chip"><img src="images/'+
	high[i].data[2]+
	'" alt="'+
	high[i].data[0]+
	'">'+
	high[i].data[3]+
	'</div></a>'
	}
	document.getElementById("lowranknav").innerHTML = outlow;
	document.getElementById("highranknav").innerHTML = outhigh;
};