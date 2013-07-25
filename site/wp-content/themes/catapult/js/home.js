
/*
* These are common methods for all pages (home, blog landing, single blog, etc).
*/
$(document).ready(function() {
	
	var _shouldShowBigLogo = true, 
			_self = this;
	
	cataCommon.init();
	keyofferings.init();
	
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
				event.preventDefault();
				href = href.substring(href.indexOf("#"), href.length);
				// console.log(href);
				cataCommon.handleNav(href);
				return false;
			}
		});
	}
	
	checkHash();
	handleMainNav();
	
	// When the page scrolls past 100 px vertically, change the nav to mini version
	$(window).scroll(function(event) {
		
		var scrollPos = $(this).scrollTop();
		// console.log(scrollPos);
		
		if (scrollPos > 100) {
			$(".logo .logo--full").removeClass("show").addClass("hide");
			$(".logo .logo--partial").removeClass("hide").addClass("show");
			$(".mainnav, .header").addClass("compact");
			$("#header-drawer").removeClass("show peek hide").addClass("compact");
		} else {	
			if (_shouldShowBigLogo) {
				$(".logo .logo--full").removeClass("hide").addClass("show");
				$(".logo .logo--partial").removeClass("show").addClass("hide");
			}
			
			$(".mainnav, .header").removeClass("compact");
			$("#header-drawer").removeClass("show peek hide compact").addClass("hide");
		}
		
	});
	
	// Check for which logo is showing 
	if (typeof(enquire) != 'undefined') {
		enquire.register("screen and (max-width: 720px)", {
			
			match: function() {
				_shouldShowBigLogo = false;
				$(".logo .logo--full").removeClass("show").addClass("hide");
				$(".logo .logo--partial").removeClass("hide").addClass("show");
			}, 
			
			unmatch: function() {
				_shouldShowBigLogo = true;
				$(".logo .logo--full").removeClass("hide").addClass("show");
				$(".logo .logo--partial").removeClass("show").addClass("hide");
			}
			
		});
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
	
	// CenterTag.init("centerTagLocationsMap", cataCommon.getRootURL(), function() {
	// 	console.log("Center Tag is Ready!");
	// });

  $('#slides').slidesjs({
    width: 940,
    height: 528
  });
  
//	intro.init(cataCommon.getRootURL() + "wp-content/themes/catapult/", function() {
//		
//    // Show Key Offerings buttons
//    $(".keyofferings").removeClass("hide");
//    
//    // Open News, but only if we're on the homepage, and only if we're at the top of the page
//		if (Number($("body").scrollTop()) < 100 && Modernizr.cssanimations) {
//			cataCommon.peekNews();
//			
//			setTimeout(function() {
//				cataCommon.hideNews();
//			}, 1500);
//		}
//	});
	
	// get case studies
	// var casestudiesURL = cataCommon.getRootURL() + '?json=get_recent_posts&dev=1&post_type=casestudy&custom_fields=category,category_description,client,main_image,header_image,display_order&meta_key=display_order&order_by=meta_value&order=ASC&Duration=0&callback=';
	// $.getJSON(casestudiesURL, 'jsonp', function(data, textStatus, jqXHR) {
	// 	console.log("Case Studies data: " + data);
	// 	if (data) {
	// 		casestudies.init(cataCommon.getRootURL() + "wp-content/themes/catapult/", data.posts);
	// 	} else {
	// 		$("#casestudies").hide();
	// 	}
	// })
	// .success(function() {
	// 	console.log("Successfully loaded the case studies.");
	// })
	// .error(function(error) {
	// 	console.log("There was an error loading the Case Studies. Error:");
	// 	console.log(error);
	// 	$("#casestudies").hide();
	// });
	
	//casestudies.init(null, null);
	
	// Locations Map
	locations.init();
	
	
	// Make the team section
	var teamURL = cataCommon.getRootURL() + "?json=get_recent_posts&dev=1&post_type=teammember&custom_fields=level,job_title,company_name,excerpt,headshot,twitter_handle&count=20";
	$.getJSON(teamURL, function(data, textStatus, jqXHR) {
		team.init(data.posts, cataCommon.getRootURL());
	}).success(function() {
		console.log("Successfully loaded the team data.");
	})
	.error(function(error) {
		console.log("There was an error loading the team json:");
		console.log(error);
	});
	
	// Events section
	events.init();
	
	// Partners Section
	partners.init();
	
	// Donations section
	donations.init();
	
});