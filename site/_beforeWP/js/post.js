$(document).ready(function() {
	
	// Header
	var drawerDiv = $("#header-drawer");
	drawerDiv.on("webkitTransitionEnd transitionend", function(event) {
		if (drawerDiv.hasClass("show")) {
			var tweets = $("#header-drawer .news");
			tweets.removeClass("hide");
			tweets.addClass("show");
		}
	});
	
	$("#header-center-tag").click(function(event) {
		event.preventDefault();
		if (drawerDiv.hasClass("show")) {
			drawerDiv.height(0);
			drawerDiv.removeClass("show");
			drawerDiv.addClass("hide");
			var tweets = $("#header-drawer .news");
			tweets.removeClass("show");
			tweets.addClass("hide");
		} else {
			drawerDiv.height(160);
			drawerDiv.removeClass("hide");
			drawerDiv.addClass("show");
		}
		return false;
	});
	
	
	// Handle the social buttons
	$(".social .social-button").hover(function() {
		$(this).find("span").addClass("hover");
	}, function() {
		$(this).find("span").removeClass("hover");
	});
	
});