$(function navbarContent() {

	document.getElementById("navbar").innerHTML = '<div class="headerspace"></div>' +
	'<a href="http://monsterhunteronline.in">Home</a>' +
	'<a href="http://monsterhunteronline.in/monsters/">Monsters</a>' +
	'<a href="http://monsterhunteronline.in/weapons">Weapons</a>' +
	'<a href="http://monsterhunteronline.in/armor/">Armor</a>' +
	'<a href="http://monsterhunteronline.in/set-builder/">Set Builder</a>' +
	'<a href="http://monsterhunteronline.in/quests/">Quests</a>' +
	'<a href="http://monsterhunteronline.in/crafting/">Crafting</a>' +
	'<a href="http://monsterhunteronline.in/gathering/">Gathering</a>' +
	'<a href="http://monsterhunteronline.in/jewelry/">Jewelry</a>' +
	'<a href="http://monsterhunteronline.in/hunting-groups/">Hunting Groups</a>' +
	'<a href="http://monsterhunteronline.in/npcs/">NPCs</a>' +
	'<a href="http://monsterhunteronline.in/cats/">Cats</a>' +
	'<a href="http://monsterhunteronline.in/food/">Food</a>' +
	'<a href="http://monsterhunteronline.in/skills/">Skills</a>' +
	'<a href="http://monsterhunteronline.in/materials/">Materials</a>' +
	'<a href="http://monsterhunteronline.in/install/">Install</a>' +
	'<a href="http://monsterhunteronline.in/translation/">Translation</a>' +
	'<a href="http://monsterhunteronline.in/vip/">VIP</a>'
});
function w3_toggle() {
	var el = document.getElementsByClassName("w3-sidenav")[0]
	if ( el.style.display != 'block' ) {

		el.style.display = 'block';

	}

	else {

		el.style.display = 'none';

	}
};
function w3_open() {
  document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
};
function w3_close() {
  document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
};
function materialsContent(arr) {
	var out = '<tr><td width="40px">Icon</td><td width="132px">Name</td><td width="800px">Explanation</td><td>Place</td></tr>';
	var i;
	for(i = 0; i < arr.length; i ++) {
		out += '' +
	'<tr>' +
		'<td>' +
			'<img src="../images/' + arr[i].data[4] + '.png">' +
		'</td>' +
		'<td>' + arr[i].data[1] + '</td>' +
		'<td>' + arr[i].data[2] + '</td>' +
		'<td>' + arr[i].data[8] + '</td>' +
	'</tr>';
	}
	document.getElementById("materialtable").innerHTML = out;
};
function materialsContent2(arr) {
	var out = '<tr><td width="40px">Icon</td><td width="132px">Name</td><td width="800px">Explanation</td><td>Place</td></tr>';
	var i;
	for(i = 0; i < arr.length; i ++) {
		out += '' +
	'<tr>' +
		'<td>' +
			'<img src="../../images/' + arr[i].data[6] + '.png">' +
		'</td>' +
		'<td>' + arr[i].data[1] + '</td>' +
		'<td>' + arr[i].data[5] + '</td>' +
		'<td>' + arr[i].data[4] + '</td>' +
	'</tr>';
	}
	document.getElementById("materialtable").innerHTML = out;
};
function monsterContent(arr) {
	var out = "";
	var i;
	for(i = 0; i < arr.length; i ++) {
		out += '' +
	'<tr>' +
		'<td>' + arr[i].data[0] + '</td>' +
		'<td>' + arr[i].data[1] + '</td>' +
		'<td>' + arr[i].data[2] + '</td>' +
		'<td>' + arr[i].data[3] + '</td>' +
		'<td>' + arr[i].data[4] + '</td>' +
		'<td>' + arr[i].data[5] + '</td>' +
		'<td>' + arr[i].data[6] + '</td>' +
		'<td>' + arr[i].data[7] + '</td>' +
		'<td>' + arr[i].data[8] + '</td>' +
	'</tr>';
	}
	document.getElementById("monstertable").innerHTML = out;
};
$(function footerContent() {
	//because I am lazy
	document.getElementById("footer").innerHTML = '' +
		'<center><p>This page is maintained and paid for by @Reaver01. If you would like to buy me a beer please click below.</p>' +
			'<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">' +
				'<input type="hidden" name="cmd" value="_s-xclick">' +
				'<input type="hidden" name="hosted_button_id" value="CRDPXKLXJTTY2">' +
				'<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">' +
				'<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">' +
			'</form></center>'
});
function preload(sources) {
	jQuery.each(sources, function(i,source) { jQuery.get(source); });
}
function addOrUpdateUrlParam(zname, value)
{
  var href = window.location.href;
  var regex = new RegExp("[&\\?]" + zname + "=");
  if(regex.test(href))
  {
    regex = new RegExp("([&\\?])" + zname + "=\\d+");
    window.location.href = href.replace(regex, "$1" + zname + "=" + value);
  }
  else
  {
    if(href.indexOf("?") > -1)
      window.location.href = href + "&" + zname + "=" + value;
    else
      window.location.href = href + "?" + zname + "=" + value;
  }
};
$(function(){
      $('.helmetbutton').click(function(e){
      	document.cookie= "helmetstate="+$( '#helmetselection' ).parents().is( ':hidden' );
            $(this).nextAll('.infosection:first').slideToggle('fast');
        });
      $('.vambracesbutton').click(function(e){
      	document.cookie= "vambracesstate="+$( '#vambracesselection' ).parents().is( ':hidden' );
            $(this).nextAll('.infosection:first').slideToggle('fast');
        });
      $('.armorbutton').click(function(e){
      	document.cookie= "armorstate="+$( '#armorselection' ).parents().is( ':hidden' );
            $(this).nextAll('.infosection:first').slideToggle('fast');
        });
      $('.waistbutton').click(function(e){
      	document.cookie= "waiststate="+$( '#waistselection' ).parents().is( ':hidden' );
            $(this).nextAll('.infosection:first').slideToggle('fast');
        });
      $('.greavesbutton').click(function(e){
      	document.cookie= "greavesstate="+$( '#greavesselection' ).parents().is( ':hidden' );
            $(this).nextAll('.infosection:first').slideToggle('fast');
        });
});
function cookieState(){
      $helmetcookie = getCookie('helmetstate')
      if ($helmetcookie=='true'){$( '#helmetselection' ).parents().slideDown('fast')};
      $vambracescookie = getCookie('vambracesstate')
      if ($vambracescookie=='true'){$( '#vambracesselection' ).parents().slideDown('fast')};
      $armorcookie = getCookie('armorstate')
      if ($armorcookie=='true'){$( '#armorselection' ).parents().slideDown('fast')};
      $waistcookie = getCookie('waiststate')
      if ($waistcookie=='true'){$( '#waistselection' ).parents().slideDown('fast')};
      $greavescookie = getCookie('greavesstate')
      if ($greavescookie=='true'){$( '#greavesselection' ).parents().slideDown('fast')};
};
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
};