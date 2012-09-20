var locations = {

	_locationData: null,

	init: function(locationData) {
		this._locationData = locationData;
		var self = this;
		$(window).resize(function() {
			$(".locations").height($(window).width() * 0.32421875);
			self._repositionLocations(self._locationData);
		});

		this._layoutLocations(this._locationData);
		$(window).trigger('resize');
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