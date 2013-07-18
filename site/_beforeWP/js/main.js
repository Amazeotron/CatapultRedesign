
$(document).ready(function() {
	
	// If there's a hash, intercept it so we can do our own scrolling
	var hash = window.location.hash;
	if (hash != "") {
		window.scrollTo(0,0);
		handleNav(hash);
	}
	
	// Main nav
	$(".mainnav-item:not(.blog) a, #what-we-do").click(function(event) {
		
		event.preventDefault();
		var href = $(this).attr("href");
		handleNav(href);
		return false;
	});
	
	function handleNav(target) {
		// Scroll positions for the sections
		var scrollPositions = [	{section: "#projects", offset:1016}, 
														{section: "#team", 		offset:2293},
														{section: "#contact", 	offset:3202},
														{section: "#donate", 	offset:3950} ],
				scrollTop = 0;
		
		for (var i = scrollPositions.length - 1; i >= 0; i--) {
			if (scrollPositions[i].section == target) {
				scrollTop = scrollPositions[i].offset;
			}
		};
		$("html, body").animate({scrollTop:scrollTop}, 500);
	}
	
	// Change the nav on scroll
	$(window).scroll(function(event) {
		var scrollPos = $(this).scrollTop();
		// console.log(scrollPos);
		// Remove all active styles if it's in the intro
		if (scrollPos <= 589) {
			$(".mainnav-item a").removeClass("active");
		}
		// Projects (Case Studies)
		else if (scrollPos >= 590 && scrollPos <= 2000) {
			// Change first nav element
			$(".mainnav-item a").removeClass("active");
			$("#mainnav-projects a").addClass("active");
		}
		// Team
		else if (scrollPos >= 2001 && scrollPos <= 2916) {
			$(".mainnav-item a").removeClass("active");
			$("#mainnav-team a").addClass("active");
		}
		// Contact
		else if (scrollPos >= 2917 && scrollPos <= 3684) {
			$(".mainnav-item a").removeClass("active");
			$("#mainnav-contact a").addClass("active");
		}
		// Donate
		else if (scrollPos >= 3685) {
			$(".mainnav-item a").removeClass("active");
			$("#mainnav-donate a").addClass("active");
		}
	});
	
	
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

	// Begin the intro animation
	intro.init();

	// get case studies
	$.getJSON('/dev/?json=get_recent_posts&dev=1&post_type=casestudy&custom_fields=category,category_description,client', function(data, textStatus, jqXHR) {
		casestudies.init(data.posts);
		console.log(data.posts);
	})
	.success(function() {
		console.log("Success loading the Case Studies");
	})
	.error(function(error) {
		console.log("Failed loading the Case Studies");
		console.log(error);
	});

	// var signalbox = new SignalBoxWrapper();
	// signalbox.init();
	// signalbox.getCaseStudies(function(studies) {
	// 	casestudies.init(studies);
	// });

	
	// Make the locations map
	// Locations Map
	$.getJSON("js/locations-json.js", function(data, textStatus, jqXHR) {
		locations.init(data.locations);
	});
	
	$("#locations-center-tag").click(function(event) {
		event.preventDefault();
		($("#locations").hasClass("hide")) ? locations.open() : locations.destroy();
		return false;
	});
	

	// Make the team section
	$.getJSON("js/team-json.js", function(data, textStatus, jqXHR) {
		team.init(data.teamData);
	});
	
	// Handle the social buttons
	$(".social .social-button").hover(function() {
		$(this).find("span").addClass("hover");
	}, function() {
		$(this).find("span").removeClass("hover");
	});
	
	// Labs Section
	$("#labs-center-tag, #labs .close").click(function(event) {
		event.preventDefault();
		var labsDiv = $("#labs");
		if (labsDiv.hasClass("hide")) {
			// show
			labsDiv.removeClass("hide");
			labsDiv.addClass("show");
			labsDiv.height(300);
		} else {
			// hide
			labsDiv.removeClass("show");
			labsDiv.addClass("hide");
			labsDiv.height(0);
			$("#labs h1, #labs p").removeClass("show");
			$("#labs h1, #labs p").addClass("hide");
			labsDiv.find(".close").removeClass("show");
			labsDiv.find(".close").addClass("hide");
		}
		return false;
	});
	
	$("#labs").on("webkitTransitionEnd transitionend", function(event) {
		if ($("#labs").hasClass("show")) {
			$("#labs h1, #labs p").removeClass("hide");
			$("#labs h1, #labs p").addClass("show");
			$("#labs").find(".close").removeClass("hide");
			$("#labs").find(".close").addClass("show");
		}
	});
	
	
	// Style the form
	$("select, button").uniform();
	
	// Only show the donation form once someone's selected a dollar amount
	$("#donation-amount").change(function() {
		$("#donation-form-body, #donation-form-submit").fadeIn();
	});
	
});