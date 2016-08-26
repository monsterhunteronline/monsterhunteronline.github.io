function mosaicdrop(num) {
	out = '&nbsp;';
	for (var i = num.length - 1; i >= 0; i--) {out += 'o';}
	return out;
}
function helmetMosaicjs(num) {
	if(num === 0) {document.getElementById("helmetMosaic1").style.display = 'none'; document.getElementById("helmetMosaic2").style.display = 'none'; document.getElementById("helmetMosaic3").style.display = 'none';}
	if(num === 1) {document.getElementById("helmetMosaic1").style.display = 'inline'; document.getElementById("helmetMosaic2").style.display = 'none'; document.getElementById("helmetMosaic3").style.display = 'none';}
	if(num === 2) {document.getElementById("helmetMosaic1").style.display = 'inline'; document.getElementById("helmetMosaic2").style.display = 'inline'; document.getElementById("helmetMosaic3").style.display = 'none';}
	if(num === 3) {document.getElementById("helmetMosaic1").style.display = 'inline'; document.getElementById("helmetMosaic2").style.display = 'inline'; document.getElementById("helmetMosaic3").style.display = 'inline';}
}
function vambracesMosaicjs(num) {
	if(num === 0) {document.getElementById("vambracesMosaic1").style.display = 'none'; document.getElementById("vambracesMosaic2").style.display = 'none'; document.getElementById("vambracesMosaic3").style.display = 'none';}
	if(num === 1) {document.getElementById("vambracesMosaic1").style.display = 'inline'; document.getElementById("vambracesMosaic2").style.display = 'none'; document.getElementById("vambracesMosaic3").style.display = 'none';}
	if(num === 2) {document.getElementById("vambracesMosaic1").style.display = 'inline'; document.getElementById("vambracesMosaic2").style.display = 'inline'; document.getElementById("vambracesMosaic3").style.display = 'none';}
	if(num === 3) {document.getElementById("vambracesMosaic1").style.display = 'inline'; document.getElementById("vambracesMosaic2").style.display = 'inline'; document.getElementById("vambracesMosaic3").style.display = 'inline';}
}
function armorMosaicjs(num) {
	if(num === 0) {document.getElementById("armorMosaic1").style.display = 'none'; document.getElementById("armorMosaic2").style.display = 'none'; document.getElementById("armorMosaic3").style.display = 'none';}
	if(num === 1) {document.getElementById("armorMosaic1").style.display = 'inline'; document.getElementById("armorMosaic2").style.display = 'none'; document.getElementById("armorMosaic3").style.display = 'none';}
	if(num === 2) {document.getElementById("armorMosaic1").style.display = 'inline'; document.getElementById("armorMosaic2").style.display = 'inline'; document.getElementById("armorMosaic3").style.display = 'none';}
	if(num === 3) {document.getElementById("armorMosaic1").style.display = 'inline'; document.getElementById("armorMosaic2").style.display = 'inline'; document.getElementById("armorMosaic3").style.display = 'inline';}
}
function waistMosaicjs(num) {
	if(num === 0) {document.getElementById("waistMosaic1").style.display = 'none'; document.getElementById("waistMosaic2").style.display = 'none'; document.getElementById("waistMosaic3").style.display = 'none';}
	if(num === 1) {document.getElementById("waistMosaic1").style.display = 'inline'; document.getElementById("waistMosaic2").style.display = 'none'; document.getElementById("waistMosaic3").style.display = 'none';}
	if(num === 2) {document.getElementById("waistMosaic1").style.display = 'inline'; document.getElementById("waistMosaic2").style.display = 'inline'; document.getElementById("waistMosaic3").style.display = 'none';}
	if(num === 3) {document.getElementById("waistMosaic1").style.display = 'inline'; document.getElementById("waistMosaic2").style.display = 'inline'; document.getElementById("waistMosaic3").style.display = 'inline';}
}
function greavesMosaicjs(num) {
	if(num === 0) {document.getElementById("greavesMosaic1").style.display = 'none'; document.getElementById("greavesMosaic2").style.display = 'none'; document.getElementById("greavesMosaic3").style.display = 'none';}
	if(num === 1) {document.getElementById("greavesMosaic1").style.display = 'inline'; document.getElementById("greavesMosaic2").style.display = 'none'; document.getElementById("greavesMosaic3").style.display = 'none';}
	if(num === 2) {document.getElementById("greavesMosaic1").style.display = 'inline'; document.getElementById("greavesMosaic2").style.display = 'inline'; document.getElementById("greavesMosaic3").style.display = 'none';}
	if(num === 3) {document.getElementById("greavesMosaic1").style.display = 'inline'; document.getElementById("greavesMosaic2").style.display = 'inline'; document.getElementById("greavesMosaic3").style.display = 'inline';}
}
function mosaic1slot() {
	filtered = [];
	for(i = 0; i < mosaicArray.length; i ++) {if(mosaicArray[i].data[3]=="1"){filtered.push(mosaicArray[i]);}}
	return filtered;
}
function mosaic2slot() {
	filtered = [];
	for(i = 0; i < mosaicArray.length; i ++) {if(mosaicArray[i].data[3]=="1"||mosaicArray[i].data[3]=="2"){filtered.push(mosaicArray[i]);}}
	return filtered;
}
function getMosaicSkills(mID) {
	var skillTemp = [];
	for(i = 0; i < mosaicArray.length; i ++) {if(mosaicArray[i].data[1]==mID) {skillTemp = mosaicArray[i].data;}}
	return skillTemp;
}
function initializeMosaicOptions() {
	arr = mosaicArray;
	var out = '<option value="" disabled selected>Mosaic 1</option>';
	for(i = 0; i < arr.length; i ++) {
		out += ''+
		'<option value="'+arr[i].data[1]+'" data-icon="../images/item/'+arr[i].data[10]+'.png" class="left">'+translate(arr[i].data[2])+'</option>';
	}
	document.getElementById("mosaic1Select1").innerHTML = out; document.getElementById("mosaic2Select1").innerHTML = out; document.getElementById("mosaic3Select1").innerHTML = out; document.getElementById("mosaic4Select1").innerHTML = out; document.getElementById("mosaic5Select1").innerHTML = out;
	out = '<option value="" disabled selected>Mosaic 2</option>';
	for(i = 0; i < arr.length; i ++) {
		out += ''+
		'<option value="'+arr[i].data[1]+'" data-icon="../images/item/'+arr[i].data[10]+'.png" class="left">'+translate(arr[i].data[2])+'</option>';
	}
	document.getElementById("mosaic1Select2").innerHTML = out; document.getElementById("mosaic2Select2").innerHTML = out; document.getElementById("mosaic3Select2").innerHTML = out; document.getElementById("mosaic4Select2").innerHTML = out; document.getElementById("mosaic5Select2").innerHTML = out;
	out = '<option value="" disabled selected>Mosaic 3</option>';
	for(i = 0; i < arr.length; i ++) {
		out += ''+
		'<option value="'+arr[i].data[1]+'" data-icon="../images/item/'+arr[i].data[10]+'.png" class="left">'+translate(arr[i].data[2])+'</option>';
	}
	document.getElementById("mosaic1Select3").innerHTML = out; document.getElementById("mosaic2Select3").innerHTML = out; document.getElementById("mosaic3Select3").innerHTML = out; document.getElementById("mosaic4Select3").innerHTML = out; document.getElementById("mosaic5Select3").innerHTML = out;
}