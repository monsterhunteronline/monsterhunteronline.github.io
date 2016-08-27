var page;
(function($){
  $(function(){
// my functions
	if (page == "home") {
		sliderjs();
	}
	if (page == "armor") {
		armorjs();
		displayData();
	}
	if (page == "jewelry") {
		jewelryjs();
	}
	if (page == "monstermain") {
		monsternav();
	}
	if (page == "monsters") {
		navdata();
		monsterjs();
	}
	if (page == "materials") {
		materialsjs();
	}
	if (page == "talismans") {
		talismansjs();
	}
	if (page == "skills") {
		skillsjs();
	}
	if (page == "weapons") {
		weaponjs();
	}
	if (page == "mosaic") {
		mosaicjs();
	}
	if (page == "weapons2") {
		skillbookjs();
	}
	if (page == "setsearch") {
		setsearchjs();
	}
	if (page == "cats") {
		catbookjs();
	}
	if (page == "crafting") {
		craftingjs();
	}
	if (page == "gathering") {
		gatheringjs();
	}
// materialize functions
	$('.button-collapse').sideNav();
	$('.collapsible').collapsible({accordion : false});
	$('.tooltipped').tooltip({delay: 10});
	$('.slider').slider({full_width: true});
	$('select').material_select();
// last function to take away loadingMask
	$('#loadingMask').fadeOut();
	
  }); // end of document ready
})(jQuery); // end of jQuery name space