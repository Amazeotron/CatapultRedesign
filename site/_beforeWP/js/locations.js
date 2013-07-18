var locations = {

	_locationData: null,

	init: function(locationData) {
		this._locationData = locationData;
		var self = this;
		
		$(window).resize(function() {
			if ($("#locations").hasClass("show")) {
				$(".locations").height(self._getHeight());
				self._repositionLocations(self._locationData);
			}
		});
		
		$("#locations").on("webkitTransitionEnd transitionend", function(event) {
			if ($("#locations").hasClass("show") && $(".locations-markers").children().length == 0) {
				self.showLocations();
			}
		});
	},
	
	open: function() {
		var locsDiv = $("#locations");
		$(".locations").removeAttr("style");
		$(".locations").height(this._getHeight());
		locsDiv.removeClass("hide");
		locsDiv.addClass("show");	
	}, 
	
	showLocations: function() {
		var locsDiv = $("#locations");
		locsDiv.find("h1").removeClass("hide");
		locsDiv.find("h1").addClass("show");
		this._layoutLocations(this._locationData);
		//$(window).trigger('resize');
	}, 
	
	destroy: function() {
		$(".locations-markers").empty();
		$(".locations").height(0);
		var locsDiv = $("#locations");
		locsDiv.find("h1").removeClass("show");
		locsDiv.find("h1").addClass("hide");
		locsDiv.removeClass("show");
		locsDiv.addClass("hide");
	}, 
	
	_getHeight: function() {
		return $(window).width() * 0.32421875;
	}, 

	_layoutLocations: function(locations) {
		var container = $(".locations-markers");

		$(locations).each(function(index, item) {
			// calculate the xPos based on the window width
			var ratio = $(window).width() / 1024,
			xPos = item.xPos * ratio, 
			yPos = item.yPos * ratio;
			var marker = $('<div class="marker">' + 
				'<h2>' + item.name + '<br/>' + 
			 	item.location + '</h2>' + 
			 	'</div>');
			marker.css({
				"left": xPos,
				"top": yPos
			});
			marker.addClass("show");
			container.append(marker);
		});
	},

	_repositionLocations: function(locations) {
		var ratio = $(".locations").width() / 1024;
		$(".locations-markers").children().each(function(index, item) {
			var obj = locations[index],
			xPos = obj.xPos * ratio,
			yPos = obj.yPos * ratio;
			$(item).css({
				"left": xPos, 
				"top": yPos
			});
		});
	}
}