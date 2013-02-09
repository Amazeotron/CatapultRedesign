labs = {
	
	_container: null, 
	_subContainer: null, 
	
	init: function() {
		
		var self = this;
		
		this._container = $("#events");
		this._subContainer = $("#js-events-content");
		
		$("#events-center-tag, #events .close").click(function(event) {
			
			event.preventDefault();
			
			if (self._container.hasClass("hide") || self._container.hasClass("peek")) {
				
				// show
				self._container
				.removeAttr("style")
				.removeClass("hide peek show")
				.addClass("show")
				.height(400);
				
			} else {
				
				// hide
				self._container
				.removeAttr("style")
				.removeClass("hide peek show")
				.addClass("peek");
				self._subContainer.removeClass("show").addClass("hide");
			}
			return false;
		});
		
		$("#events").on("webkitTransitionEnd transitionend", function(event) {
			// It it's in the open state, show the content
			if (self._container.hasClass("show")) {
				self._subContainer
				.removeClass("hide peek show")
				.addClass("show");
			}
		});
		
	}
	
}