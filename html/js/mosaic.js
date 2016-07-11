function mosaicdrop(num) {
	out = '&nbsp;';
	for (var i = num.length - 1; i >= 0; i--) {
		out += 'o';
	}
	return out;
}
function helmetMosaicjs(num) {
	arr = mosaicArray
	var out = '<option value="" disabled selected>Mosaic 1</option>';
	for(i = 0; i < arr.length; i ++) {
		out += ''+
		'<option value="'+arr[i].data[1]+'" data-icon="../images/item/'+arr[i].data[10]+'.png" class="left">'+translate(arr[i].data[2])+'</option>';
	};
	document.getElementById("mosaic1Select1").innerHTML = out;
	var out = '<option value="" disabled selected>Mosaic 2</option>';
	for(i = 0; i < arr.length; i ++) {
		out += ''+
		'<option value="'+arr[i].data[1]+'" data-icon="../images/item/'+arr[i].data[10]+'.png" class="left">'+translate(arr[i].data[2])+'</option>';
	};
	document.getElementById("mosaic1Select2").innerHTML = out;
	var out = '<option value="" disabled selected>Mosaic 3</option>';
	for(i = 0; i < arr.length; i ++) {
		out += ''+
		'<option value="'+arr[i].data[1]+'" data-icon="../images/item/'+arr[i].data[10]+'.png" class="left">'+translate(arr[i].data[2])+'</option>';
	};
	document.getElementById("mosaic1Select3").innerHTML = out;
	if(num == 0) {
		document.getElementById("helmetMosaic1").style.display = 'none';
		document.getElementById("helmetMosaic2").style.display = 'none';
		document.getElementById("helmetMosaic3").style.display = 'none';
	}
	if(num == 1) {
		document.getElementById("helmetMosaic1").style.display = 'inline';
		document.getElementById("helmetMosaic2").style.display = 'none';
		document.getElementById("helmetMosaic3").style.display = 'none';
	}
	if(num == 2) {
		document.getElementById("helmetMosaic1").style.display = 'inline';
		document.getElementById("helmetMosaic2").style.display = 'inline';
		document.getElementById("helmetMosaic3").style.display = 'none';
	}
	if(num == 3) {
		document.getElementById("helmetMosaic1").style.display = 'inline';
		document.getElementById("helmetMosaic2").style.display = 'inline';
		document.getElementById("helmetMosaic3").style.display = 'inline';
	}
}
function mosaic1slot() {
	filtered = []
	for(i = 0; i < mosaicArray.length; i ++) {
		if(mosaicArray[i].data[3]=="1"){
			filtered.push(mosaicArray[i])
		}
	};
	return filtered
}
function mosaic2slot() {
	filtered = []
	for(i = 0; i < mosaicArray.length; i ++) {
		if(mosaicArray[i].data[3]=="1"||mosaicArray[i].data[3]=="2"){
			filtered.push(mosaicArray[i])
		}
	};
	return filtered
}
function getMosaicSkills(mID) {
	var skillTemp = []
	for(i = 0; i < mosaicArray.length; i ++) {
		if(mosaicArray[i].data[1]==mID) {
			skillTemp = mosaicArray[i].data
		}
	}
	return skillTemp
}