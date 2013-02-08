
/*
* These are common methods for all pages (home, blog landing, single blog, etc).
*/
$(document).ready(function() {
	
	cataCommon.init();
	
	console.log("Window height: " + $(window).height());
	
	// If there's a hash, intercept it so we can do our own scrolling
	function checkHash() {
		var hash = window.location.hash;
		if (hash != "") {
			window.scrollTo(0,0);
			cataCommon.handleNav(hash);
		}
	}
	
	// Main nav
	function handleMainNav() {
		var self = this;
		$(".mainnav-item:not(.blog) a, #what-we-do").click(function(event) {
			// if we're already on the homepage, just do the scrolling.
			// Otherwise, change URLs
			var href = $(this).attr("href");
			if (window.location.href.indexOf("blog/") != -1) {
				
			} else {
				//event.preventDefault();
				href = href.substring(href.indexOf("#"), href.length);
				// console.log(href);
				cataCommon.handleNav(href);
				//return false;
			}
		});
	}
	
	checkHash();
	handleMainNav();
	
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
	
	CenterTag.init("centerTagLocationsMap", cataCommon.getRootURL(), function() {
		console.log("Center Tag is Ready!");
	});
	
	// Open News, but only if we're on the homepage, and only if we're at the top of the page
	setTimeout(function() {
		if (Number($("body").scrollTop()) < 100) {
			cataCommon.peekNews();
		}
		
		setTimeout(function() {
			cataCommon.hideNews();
		}, 1500);
	}, 1000);
	
	intro.init(cataCommon.getRootURL() + "wp-content/themes/catapult/", function() {
		// intro is done, so show Key Offerings buttons
		$(".keyofferings-list__item").each(function(index) {
			var self = $(this);
			setTimeout(function() {
				self.removeClass("hide").addClass("show");
			}, (index * 150));
			
		})
	});
	
	// Key Offerings buttons
	$(".keyofferings-list-item a").click(function(event) {
		event.preventDefault();
		var section = $(this).parent().attr("id");
		var index = $(this).attr("data-index");
		return false;
	});
	
	// get case studies
	$.getJSON(cataCommon.getRootURL() + '?json=get_recent_posts&dev=1&post_type=casestudy&custom_fields=category,category_description,client,main_image,header_image,display_order&meta_key=display_order&order_by=meta_value&order=ASC', function(data, textStatus, jqXHR) {
		casestudies.init(cataCommon.getRootURL() + "wp-content/themes/catapult/", data.posts);
		console.log(data.posts);
	})
	.success(function() {
		console.log("Success loading the Case Studies");
	})
	.error(function(error) {
		console.log("Failed loading the Case Studies");
		console.log(error);
	});
	
	// Make the locations map
	// Locations Map
	$.getJSON(cataCommon.getRootURL() + "wp-content/themes/catapult/js/locations-json.js", function(data, textStatus, jqXHR) {
		locations.init(data.locations);
	});
	
	$("#locations-center-tag").click(function(event) {
		event.preventDefault();
		($("#locations").hasClass("hide")) ? locations.open() : locations.destroy();
		return false;
	});
	

	// Make the team section
	$.getJSON(cataCommon.getRootURL() + "wp-content/themes/catapult/js/team-json.js", function(data, textStatus, jqXHR) {
		team.init(data.teamData, cataCommon.getRootURL());
	}).success(function() {
		console.log("Successfully loaded the team data");
	})
	.error(function(error) {
		console.log("There was an error loading the team json:");
		console.log(error);
	});
	
	// Labs Section
	$("#labs-center-tag, #labs .close").click(function(event) {
		event.preventDefault();
		var labsDiv = $("#labs");
		if (labsDiv.hasClass("hide")) {
			// show
			labsDiv.removeClass("hide").addClass("show");
			labsDiv.height(400);
		} else {
			// hide
			labsDiv.removeClass("show").addClass("hide");
			labsDiv.height(0);
			$("#js-labs-content").removeClass("show").addClass("hide");
		}
		return false;
	});
	
	$("#labs").on("webkitTransitionEnd transitionend", function(event) {
		var labsContent = $("#js-labs-content"),
				labsDiv = $("#labs");
		// It it's in the open state, show the content
		if (labsDiv.hasClass("show")) {
			labsContent.removeClass("hide").addClass("show");
		}
	});
	
	
	// Partners Section
	$("#partners-center-tag, #partners .close").click(function(event) {
		event.preventDefault();
		var partnersDiv = $("#partners");
		if (partnersDiv.hasClass("hide")) {
			// show
			partnersDiv.removeClass("hide").addClass("show");
			partnersDiv.height(740);
		} else {
			// hide
			partnersDiv.removeClass("show").addClass("hide");
			partnersDiv.height(0);
			$("#js-partners-content").removeClass("show").addClass("hide");
		}
		return false;
	});
	
	$("#partners").on("webkitTransitionEnd transitionend", function(event) {
		var partnersContent = $("#js-partners-content"),
				partnersDiv = $("#partners");
		if (partnersDiv.hasClass("show")) {
			partnersContent.removeClass("hide").addClass("show");
		}
	});
	
	
	// Only show the donation form once someone's selected a dollar amount
	$("#donation-amount").change(function(event) {
		var selected = $(this).find("option:selected"),
				form = $("#donation-form-body, #donation-form-submit");
		if (selected[0].value === "Choose Amount") {
			form.fadeOut();
			return;
		}
		form.fadeIn();
	});
	
});