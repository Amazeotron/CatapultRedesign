var partners = {
	
	_container: null, 
	_content: null, 
	_isOpen: false,
	
	init: function() {
		
		var self = this;
		
		this._container = $("#partners");
		this._content = $("#js-partners-content");
		
		$("#partners-center-tag, #partners .close-button").click(function(event) {
			
			event.preventDefault();
			
			(self._isOpen) ? self.close() : self.open();
			
			return false;
		});
		
		$("#partners").on("webkitTransitionEnd transitionend", function(event) {
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
		$("#partners .close-button").show();
	}, 
	
	close: function() {
		this._isOpen = false;
		this._content
			.css({height:this._getHeight()+"px"})
			.children().not(".bottom-peek").css({"opacity":"0"});
		$("#partners .close-button").hide();
	},
	
	_getHeight: function() {
		if (this._isOpen) {
			return 650;
		} else {
			return 2;
		}
		return 0;
	}
	
}