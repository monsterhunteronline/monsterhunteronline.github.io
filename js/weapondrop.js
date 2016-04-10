$(function() {

document.getElementById("weapondrop").innerHTML = '<div class="w3-row">' +
'<div class="w3-col s3 m1 l1"><a href="http://monsterhunteronline.in/weapons/lance"><img src="../../images/lanceicon.png" style="max-width: 100px"></a></div>' +
'<div class="w3-col s3 m1 l1"><a href="http://monsterhunteronline.in/weapons/gunlance"><img src="../../images/gunlanceicon.png" style="max-width: 100px"></a></div>' +
'<div class="w3-col s3 m1 l1"><a href="http://monsterhunteronline.in/weapons/sword-and-shield/"><img src="../../images/swordandshieldicon.png" style="max-width: 100px"></a></div>' +
'<div class="w3-col s3 m1 l1"><a href="http://monsterhunteronline.in/weapons/greatsword"><img src="../../images/greatswordicon.png" style="max-width: 100px"></a></div>' +
'<div class="w3-col s3 m1 l1"><a href="http://monsterhunteronline.in/weapons/longsword"><img src="../../images/longswordicon.png" style="max-width: 100px"></a></div>' +
'<div class="w3-col s3 m1 l1"><a href="http://monsterhunteronline.in/weapons/hammer"><img src="../../images/hammericon.png" style="max-width: 100px"></a></div>' +
'<div class="w3-col s3 m1 l1"><a href="http://monsterhunteronline.in/weapons/dual-blades"><img src="../../images/dualbladesicon.png" style="max-width: 100px"></a></div>' +
'<div class="w3-col s3 m1 l1"><a href="http://monsterhunteronline.in/weapons/bowgun"><img src="../../images/bowgunicon.png" style="max-width: 100px"></a></div>' +
'<div class="w3-col s3 m1 l1"><a href="http://monsterhunteronline.in/weapons/bow"><img src="../../images/bowicon.png" style="max-width: 100px"></a></div>' +
'<div class="w3-col s3 m1 l1"><a href="http://monsterhunteronline.in/weapons/hunting-horn"><img src="../../images/huntinghornicon.png" style="max-width: 100px"></a></div>' +
'</div>'

});

function weapon_toggle() {
	var el = document.getElementsByClassName("weapondrop")[0]
	if ( el.style.display != 'block' ) {

		el.style.display = 'block';

	}

	else {

		el.style.display = 'none';

	}
};