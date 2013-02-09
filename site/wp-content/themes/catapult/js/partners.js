partners = {
	
	_container: null, 
	_subContainer: null, 
	
	init: function() {
		
		var self = this;
		
		this._container = $("#partners");
		this._subContainer = $("#js-partners-content");
		
		$("#partners-center-tag, #partners .close").click(function(event) {
			
			event.preventDefault();
			
			if (self._container.hasClass("hide") || self._container.hasClass("peek")) {
				
				// show
				self._container
				.removeAttr("style")
				.removeClass("hide peek show")
				.addClass("show")
				.height(740);
				
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
		
		$("#partners").on("webkitTransitionEnd transitionend", function(event) {
			
			if (self._container.hasClass("show")) {
				self._subContainer
				.removeClass("hide peek show")
				.addClass("show");
			}
		});
		
	}
	
}