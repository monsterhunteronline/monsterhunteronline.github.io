(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.collapsible').collapsible({accordion : true});
    $('.tooltipped').tooltip({delay: 10});
    $('.slider').slider({full_width: true});

    //$(imagesLoaded( {
    //options
    //},
    //function() {
		$('#loadingMask').fadeOut();
    //}
    //)); // end of images loaded
    
  }); // end of document ready
})(jQuery); // end of jQuery name space