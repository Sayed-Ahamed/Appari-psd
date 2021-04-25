(function($){
	$(document).ready(function(){

	// meanmenu
$('#mobile-menu').meanmenu({
  meanMenuContainer: '.mobile-menu',
  meanScreenWidth: "992"
});
	

//counter up 
$('.counter').counterUp({
	delay: 10,
    time: 1000
});

// WOW js active
new WOW().init();






	});
})(jQuery)