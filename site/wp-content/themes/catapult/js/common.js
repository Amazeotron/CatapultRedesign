var cataCommon = {
	
	// Call this on page load, preferably on $()ready().
	init: function() {
		this.handleHeader();
		this.handleSocial();
	}, 
	
	getRootURL: function() {
		if (window.location.href.indexOf(":8888") != -1) {
			return "http://localhost:8888/wordpress/"; // testing
		} else {
			return "http://catapultdesign.org/dev/"; // development
		// return "http://catapultdesign.org/"; // live
		}
	},
	
	hideNews: function() {
		this.getDrawerDiv().removeClass("show peek hide").addClass("hide");
	},
	
	showNews: function() {
		this.getDrawerDiv().removeClass("hide peek show").addClass("show");
	},
	
	peekNews: function() {
		this.getDrawerDiv().removeClass("hide peek show").addClass("peek");
	},
	
	isHome: function() {
		return window.location.href == getRootURL();
	},
	
	handleNav: function(target) {
		// Scroll positions for the sections
		var scrollPositions = [	
				{section: "#keyofferings", offset:653}, 
				{section: "#projects", offset:1100}, 
				{section: "#team", 		offset:2293},
				{section: "#contact", 	offset:3294},
				{section: "#donate", 	offset:3986}
			],
				scrollTop = 0;
		
		for (var i = scrollPositions.length - 1; i >= 0; i--) {
			if (scrollPositions[i].section == target) {
				scrollTop = scrollPositions[i].offset;
			}
		};
		$("html, body").animate({scrollTop:scrollTop}, 500);
	},
	
	loadJobs: function() {
		var jobs = new ParsePostType();
		jobs.init(getRootURL() + "?json=get_recent_posts&dev=1&post_type=job", function(jobs) {
			console.log("Jobs have loaded");
		});
	},
	
	getDrawerDiv: function() {
		return $("#header-drawer");
	}, 
	
	// Header
	handleHeader: function() {
		var self = this;
		this.getDrawerDiv().on("webkitTransitionEnd transitionend", function(event) {	});
		
		$("#header-center-tag").click(function(event) {
			event.preventDefault();
			if (self.getDrawerDiv().hasClass("show")) {
				self.hideNews(self.getDrawerDiv());
			} else {
				self.showNews(self.getDrawerDiv());
			}
			return false;
		});
	},
	
	// Handle the social buttons
	handleSocial: function() {
		$(".social .social-button").hover(function() {
			$(this).find("span").addClass("hover");
		}, function() {
			$(this).find("span").removeClass("hover");
		});
	}
}