$(document).ready(function() {
	
	cataCommon.init();
	
	// Handle post hover
	$(".post-box").hover(function(event) {
		// change the brightness of the image
		$(this).addClass("hover");
	}, function(event) {
		$(this).removeClass("hover");
	});
	
});