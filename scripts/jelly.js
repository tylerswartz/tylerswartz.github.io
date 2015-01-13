$(document).ready(function() {

	$('#scene').parallax({
		scalarY: 75,
	});

	$('.close').click(function(){
		$('.overlay').addClass("hidden");
	});

});

