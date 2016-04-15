(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.collapsible').collapsible({accordion : true});
    $('.tooltipped').tooltip({delay: 10});
	$('#loadingMask').fadeOut();

  }); // end of document ready
})(jQuery); // end of jQuery name space