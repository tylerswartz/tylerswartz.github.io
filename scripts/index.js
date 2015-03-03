$(document).ready(function() {

	$("#scroll-about").click(function(){
		$('html, body').animate({
      scrollTop: $(".about-tyler").offset().top
    }, 1500);
	});

	$("#scroll-contact").click(function(){
		$('html, body').animate({
      scrollTop: $(".get-in-touch").offset().top
    }, 1500);
	});

	$(".scroll-indicator").click(function(){
		$('html, body').animate({
      scrollTop: $(".portfolio").offset().top
    }, 1500);
	});
});

