$(document).ready(function() {
	/* Parallax on Front Page */ 
	$('#parallax-front').parallax({imageSrc: './images/parallax.jpg'});

	// Navigation Bar change on Scroll 
	var $navbarHeight = $('.navbar').height();
	$(window).scroll(function() {
		var $scroll = $(window).scrollTop();
		console.log($scroll);
		if ($scroll >= $navbarHeight + 50) {
			console.log('x');
		  $(".navbar").addClass("navbar-scrolled");
	  } else {
	  	$('.navbar').removeClass("navbar-scrolled");
	  }
	});

	// Navbar on smaller devices

	var $hamburger = $('.navbar-toggle');
	var $navigation = $('.navbar');
	$hamburger.click(function() {
		$navigation.toggleClass('collapsed');
	});
});

