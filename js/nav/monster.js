var page = "monstermain";
function monsternav() {
	var outB = '<span class="card-title">Beetle Type</span><br>';
	var outBW = '<span class="card-title">Bird Wyvern Type</span><br>';
	var outBrW = '<span class="card-title">Brute Wyvern Type</span><br>';
	var outC = '<span class="card-title">Carapace Type</span><br>';
	var outED = '<span class="card-title">Elder Dragon Type</span><br>';
	var outFB = '<span class="card-title">Fanged Beast Type</span><br>';
	var outFaW = '<span class="card-title">Fanged Wyvern Type</span><br>';
	var outFW = '<span class="card-title">Flying Wyvern Type</span><br>';
	var outPW = '<span class="card-title">Piscine Wyvern Type</span><br>';
	var outU = '<span class="card-title">Unknown Type</span><br>';
	var i;

	for(i = 0; i < beetleArray.length; i ++) {
		outB += ''+
	'<a class="tooltipped" data-position="right" data-delay="10" data-tooltip="'+
	beetleArray[i].data[0]+
	'" href="'+
	beetleArray[i].data[1]+
	'/"><div class="chip"><img src="images/'+
	beetleArray[i].data[2]+
	'" alt="'+
	beetleArray[i].data[0]+
	'">'+
	beetleArray[i].data[3]+
	'</div></a>';
	}
	
	for(i = 0; i < birdWyvernArray.length; i ++) {
		outBW += ''+
	'<a class="tooltipped" data-position="right" data-delay="10" data-tooltip="'+
	birdWyvernArray[i].data[0]+
	'" href="'+
	birdWyvernArray[i].data[1]+
	'/"><div class="chip"><img src="images/'+
	birdWyvernArray[i].data[2]+
	'" alt="'+
	birdWyvernArray[i].data[0]+
	'">'+
	birdWyvernArray[i].data[3]+
	'</div></a>';
	}
	
	for(i = 0; i < bruteWyvernArray.length; i ++) {
		outBrW += ''+
	'<a class="tooltipped" data-position="right" data-delay="10" data-tooltip="'+
	bruteWyvernArray[i].data[0]+
	'" href="'+
	bruteWyvernArray[i].data[1]+
	'/"><div class="chip"><img src="images/'+
	bruteWyvernArray[i].data[2]+
	'" alt="'+
	bruteWyvernArray[i].data[0]+
	'">'+
	bruteWyvernArray[i].data[3]+
	'</div></a>';
	}
	
	for(i = 0; i < carapaceArray.length; i ++) {
		outC += ''+
	'<a class="tooltipped" data-position="right" data-delay="10" data-tooltip="'+
	carapaceArray[i].data[0]+
	'" href="'+
	carapaceArray[i].data[1]+
	'/"><div class="chip"><img src="images/'+
	carapaceArray[i].data[2]+
	'" alt="'+
	carapaceArray[i].data[0]+
	'">'+
	carapaceArray[i].data[3]+
	'</div></a>';
	}

	for(i = 0; i < elderDragonArray.length; i ++) {
		outED += ''+
	'<a class="tooltipped" data-position="right" data-delay="10" data-tooltip="'+
	elderDragonArray[i].data[0]+
	'" href="'+
	elderDragonArray[i].data[1]+
	'/"><div class="chip"><img src="images/'+
	elderDragonArray[i].data[2]+
	'" alt="'+
	elderDragonArray[i].data[0]+
	'">'+
	elderDragonArray[i].data[3]+
	'</div></a>';
	}
	
	for(i = 0; i < fangedBeastArray.length; i ++) {
		outFB += ''+
	'<a class="tooltipped" data-position="right" data-delay="10" data-tooltip="'+
	fangedBeastArray[i].data[0]+
	'" href="'+
	fangedBeastArray[i].data[1]+
	'/"><div class="chip"><img src="images/'+
	fangedBeastArray[i].data[2]+
	'" alt="'+
	fangedBeastArray[i].data[0]+
	'">'+
	fangedBeastArray[i].data[3]+
	'</div></a>';
	}
	
	for(i = 0; i < fangedWyvernArray.length; i ++) {
		outFaW += ''+
	'<a class="tooltipped" data-position="right" data-delay="10" data-tooltip="'+
	fangedWyvernArray[i].data[0]+
	'" href="'+
	fangedWyvernArray[i].data[1]+
	'/"><div class="chip"><img src="images/'+
	fangedWyvernArray[i].data[2]+
	'" alt="'+
	fangedWyvernArray[i].data[0]+
	'">'+
	fangedWyvernArray[i].data[3]+
	'</div></a>';
	}
	
	for(i = 0; i < flyingWyvernArray.length; i ++) {
		outFW += ''+
	'<a class="tooltipped" data-position="right" data-delay="10" data-tooltip="'+
	flyingWyvernArray[i].data[0]+
	'" href="'+
	flyingWyvernArray[i].data[1]+
	'/"><div class="chip"><img src="images/'+
	flyingWyvernArray[i].data[2]+
	'" alt="'+
	flyingWyvernArray[i].data[0]+
	'">'+
	flyingWyvernArray[i].data[3]+
	'</div></a>';
	}
	
	for(i = 0; i < piscineWyvernArray.length; i ++) {
		outPW += ''+
	'<a class="tooltipped" data-position="right" data-delay="10" data-tooltip="'+
	piscineWyvernArray[i].data[0]+
	'" href="'+
	piscineWyvernArray[i].data[1]+
	'/"><div class="chip"><img src="images/'+
	piscineWyvernArray[i].data[2]+
	'" alt="'+
	piscineWyvernArray[i].data[0]+
	'">'+
	piscineWyvernArray[i].data[3]+
	'</div></a>';
	}
	
	for(i = 0; i < unknownArray.length; i ++) {
		outU += ''+
	'<a class="tooltipped" data-position="right" data-delay="10" data-tooltip="'+
	unknownArray[i].data[0]+
	'" href="'+
	unknownArray[i].data[1]+
	'/"><div class="chip"><img src="images/'+
	unknownArray[i].data[2]+
	'" alt="'+
	unknownArray[i].data[0]+
	'">'+
	unknownArray[i].data[3]+
	'</div></a>';
	}
	
	document.getElementById("beetle").innerHTML = outB;
	document.getElementById("birdWyvern").innerHTML = outBW;
	document.getElementById("bruteWyvern").innerHTML = outBrW;
	document.getElementById("carapace").innerHTML = outC;
	document.getElementById("elderDragon").innerHTML = outED;
	document.getElementById("fangedBeast").innerHTML = outFB;
	document.getElementById("fangedWyvern").innerHTML = outFaW;
	document.getElementById("flyingWyvern").innerHTML = outFW;
	document.getElementById("piscineWyvern").innerHTML = outPW;
	document.getElementById("unknown").innerHTML = outU;
}