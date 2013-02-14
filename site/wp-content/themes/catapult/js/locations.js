var locations = {

	_locationData: null,
	_locationsDiv: null, 
	_content: null,
	_markers: null,
	_isOpen: false,

	init: function(locationData) {
		this._locationData = locationData;
		this._locationsDiv = $("#locations");
		this._content = $("#js-locations-content");
		this._markers = $(".locations-markers");
		var self = this;
		
		$(window).resize(function() {
			if (self._isOpen) {
				self.open(); // Call this to make the _content height correct.
				self._repositionLocations(self._locationData);
			}
		});
		
		$("#locations-center-tag, #locations .close").click(function(event) {
			event.preventDefault();
			(self._isOpen) ? self.close() : self.open();
			return false;
		});
		
		$("#locations").on("webkitTransitionEnd transitionend", function(event) {
			if (self._isOpen) {
				$("#locations-center-tag").removeClass("closed").addClass("open");
				self.open(); // Call this to make the _content height correct.
				self._repositionLocations(self._locationData);
			} else {
				$("#locations-center-tag").removeClass("open").addClass("closed");
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
		
		self.showLocations();
		self.close();
		
	},
	
	open: function() {
		this._isOpen = true;
		this._content.css({height:this._getHeight("open")+"px"});
		$("#locations .close").show();
	}, 
	
	close: function() {
		this._isOpen = false;
		this._content.css({height:this._getHeight("closed")+"px"});
		$("#locations .close").hide();
	}, 
	
	showLocations: function() {
		this._layoutLocations(this._locationData);
	}, 
	
	// Returns the world map width / height
	_getRatio: function() {
		// return 473.0 / 951.0; // Actual ratio, which is 0.4973711882
		return 0.4970896391; // What the browser is setting
	}, 
	
	_getHeight: function(state) {
		if (state == "open") {
			return $("body").width() * this._getRatio();
		} else if (state == "closed") {
			return 50;
		}
		return 0;
	}, 

	_layoutLocations: function(locations) {
		var self = this,
				wid = window.getComputedStyle(document.getElementById("locations")).width.split("px")[0],
				xRatio = wid / 941.0;
				yRatio = (wid * self._getRatio()) / 463.0;
				
		$(locations).each(function(index, item) {
			var xPos = item.xPos * xRatio, 
					yPos = item.yPos * yRatio,
					marker = $('<a href="#" class="marker" data-index="' + index + '">' + 
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
			
			// Create the callout
			var xPos = $(this).css("left").split("px")[0] - 16,
					yPos = $(this).css("top").split("px")[0] - 72,
					content = $(this).html();
			
			// If there's already a callout, don't reuse the existing one
			var callout = $("#js-callout");
			if (callout.length > 0) { // Callout already exists, so just update it
				callout.remove();
			}
			callout = self._getCallout(xPos + "px", yPos + "px", content);
			self._locationsDiv.append(callout);
			$("#js-callout-close").on("click", function(event) {
				event.preventDefault();
				callout.remove();
				return false;
			});
			
			// Set the width of the callout based on the h2
			callout.width(callout.find("h2").width() + 20);
			
			return false;
		});
	},

	_repositionLocations: function(locations) {
		var wid = Number(window.getComputedStyle(document.getElementById("locations")).width.split("px")[0]),
				xRatio = wid / 941.0,
				yRatio = (wid * this._getRatio()) / 463.0;
				
		$(".locations-markers").children().each(function(index, item) {
			var obj = locations[index],
			xPos = obj.xPos * xRatio,
			yPos = obj.yPos * yRatio;
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