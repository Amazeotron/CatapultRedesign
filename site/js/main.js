

$(document).ready(function() {

	// Begin the intro animation
	intro.init();

	// Load and add images to the case study
	// TODO: This should get encapsulated in a plugin that handles all apsects of Case Studies
	$("#anza .casestudy-images").css({
		"background-image": 'url(img/casestudies/handcart/IMG_0065.jpg)'
	});
});