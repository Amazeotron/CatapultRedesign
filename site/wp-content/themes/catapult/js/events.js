var labs = {
	
	_container: null, 
	_content: null,
	_isOpen: false,
	
	init: function() {
		
		var self = this;
		
		this._container = $("#events");
		this._content = $("#js-events-content");
		
		$("#events-center-tag, #events .close-button").click(function(event) {
			
			event.preventDefault();
			
			(self._isOpen) ? self.close() : self.open();
			
			return false;
		});
		
		$("#events").on("webkitTransitionEnd transitionend", function(event) {
			if (self._isOpen) {
				self._content.children().not(".bottom-peek").css({"opacity":"1"});
			} else {
				self._content.children().not(".bottom-peek").css({"opacity":"0"});
			}
		});
		
		this.close();
	}, 
	
	open: function() {
		this._isOpen = true;
		this._content.css({height:this._getHeight()+"px"});
		$("#events .close-button").show();
	}, 
	
	close: function() {
		this._isOpen = false;
		this._content
			.css({height:this._getHeight()+"px"})
			.children().not(".bottom-peek").css({"opacity":"0"});
		$("#events .close-button").hide();
	},
	
	_getHeight: function() {
		if (this._isOpen) {
			return 400;
		} else {
			return 2;
		}
		return 0;
	}
	
}