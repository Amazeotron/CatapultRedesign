var locations = {

	_locationData: null,
	_locationsDiv: null, 
	_markers: null,
	_isOpen: false,

	init: function(locationData) {
		this._locationData = locationData;
		this._locationsDiv = $("#locations");
		this._markers = $(".locations-markers");
		var self = this;
		
		$(window).resize(function() {
			if (self._locationsDiv.hasClass("show")) {
				self._locationsDiv.height(self._getHeight());
				self._repositionLocations(self._locationData);
			}
		});
		
		$("#locations-center-tag, #locations .close").click(function(event) {
			event.preventDefault();
			(self._locationsDiv.hasClass("hide") || self._locationsDiv.hasClass("peek")) ? self.open() : self.destroy();
			return false;
		});
		
		$("#locations").on("webkitTransitionEnd transitionend", function(event) {
			if (self._locationsDiv.hasClass("show") && $(".locations-markers").children().length == 0) {
				self.showLocations();
			}
		});
		
		// make the background scroll when page scrolls
		$(window).scroll(function(event) {
			var scrollPos = $(this).scrollTop()
					offsetTop = scrollPos - 2214;
			if (!self._isOpen && offsetTop < 0 && offsetTop > -1200) {
				self._locationsDiv.css({"background-position-y" : (offsetTop * 0.2) + "px"});
			} else {
				self._locationsDiv.css({"background-position-y" : "0px"});
			}
		});
		
	},
	
	open: function() {
		this._isOpen = true;
		this._locationsDiv
			.removeAttr("style")
			.height(this._getHeight())
			.removeClass("show hide peek")
			.addClass("show");
	}, 
	
	showLocations: function() {
		this._layoutLocations(this._locationData);
		//$(window).trigger('resize');
		$("#js-locations-content").removeClass("hide").addClass("show");
	}, 
	
	destroy: function() {
		this._isOpen = false;
		this._markers.empty();
		this._locationsDiv
			.height(57) // peek
			.removeClass("show hide peek")
			.addClass("peek");
		$("#js-locations-content").removeClass("show").addClass("hide");
	}, 
	
	_getHeight: function() {
		return $("body").width() * 0.3046272494;
	}, 

	_layoutLocations: function(locations) {
		var self = this;

		$(locations).each(function(index, item) {
			// calculate the xPos based on the window width
			var ratio = $(window).width() / 1024,
			xPos = item.xPos * ratio, 
			yPos = item.yPos * ratio;
			var marker = $('<a href="#" class="marker" data-index="' + index + '">' + 
				'<h2 class="header-title hide">' + item.name + '<br/>' + 
			 	item.location + '</h2>' + 
			 	'</a>');
			marker.css({
				"left": xPos,
				"top": yPos
			});
			marker.addClass("show");
			self._markers.append(marker);
		});
		
		// Handle clicking on the markers
		// This is done here because the markers are now in the DOM
		$(".marker").on("click", function(event) {
			event.preventDefault();
			
			// Show the marker title.
			//$(".marker").find("h2").removeClass("show").addClass("hide");
			//$(this).find("h2").removeClass("show hide").addClass("show");
			
			// Create the callout
			var xPos = $(this).css("left").split("px")[0] - 16,
					yPos = $(this).css("top").split("px")[0] - 75,
					content = $(this).html();
			
			// If there's already a callout, don't reuse the existing one
			var callout = $("#js-callout");
			if (callout.length > 0) { // Callout already exists, so just update it
				callout.find("h2").remove();
				callout
					.removeAttr("style")
					.removeClass("hide").addClass("show")
					.css({ "left":xPos, "top":yPos })
					.append(content);
			} else {
				callout = self._getCallout(xPos + "px", yPos + "px", content);
				self._locationsDiv.append(callout);
				$("#js-callout-close").on("click", function(event) {
					event.preventDefault();
					callout.removeClass("show").addClass("hide");
					return false;
				});
			}
			
			// Set the width of the callout based on the h2
			callout.width(callout.find("h2").width() + 20);
			
			return false;
		});
	},

	_repositionLocations: function(locations) {
		var ratio = this._locationsDiv.width() / 1024;
		$(".locations-markers").children().each(function(index, item) {
			var obj = locations[index],
			xPos = obj.xPos * ratio,
			yPos = obj.yPos * ratio;
			$(item).css({
				"left": xPos, 
				"top": yPos
			});
		});
	}, 
	
	_getCallout: function(xPos, yPos, content) {
		var callout = $('<div id="js-callout" class="callout"><a href="#" class="callout__close" id="js-callout-close">X</a></div>');
		callout
			.css({"left":xPos, "top":yPos})
			.append(content);
		return callout;
	}
}