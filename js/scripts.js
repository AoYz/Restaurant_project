$(document).ready(function() {
	$('#parallax-front').parallax({imageSrc: './images/parallax.jpg'});

	$( ".cross" ).hide();
	$( ".toggle-menu" ).hide();
	$( ".hamburger" ).click(function() {
		$( ".toggle-menu" ).slideToggle( "slow", function() {
			$( ".hamburger" ).hide();
			$( ".cross" ).show();
		});
	});

	$( ".cross" ).click(function() {
		$( ".toggle-menu" ).slideToggle( "slow", function() {
			$( ".cross" ).hide();
			$( ".hamburger" ).show();
		});
	});

// Scroll
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


});

