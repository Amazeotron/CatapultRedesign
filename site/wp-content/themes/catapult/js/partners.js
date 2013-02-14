var partners = {
	
	_container: null, 
	_content: null, 
	_isOpen: false,
	
	init: function() {
		
		var self = this;
		
		this._container = $("#partners");
		this._content = $("#js-partners-content");
		
		$("#partners-center-tag, #partners .close").click(function(event) {
			
			event.preventDefault();
			
			(self._isOpen) ? self.close() : self.open();
			
			return false;
		});
		
		$("#partners").on("webkitTransitionEnd transitionend", function(event) {
			if (self._isOpen) {
				self._content.css({"opacity":"1"});
			} else {
				self._content.css({"opacity":"0"});
			}
		});
		
		this.close();
	}, 
	
	open: function() {
		this._isOpen = true;
		this._content.css({height:this._getHeight()+"px"});
		$("#locations .close").show();
	}, 
	
	close: function() {
		this._isOpen = false;
		this._content.css({height:this._getHeight()+"px", "opacity":"0"});
		$("#locations .close").hide();
	},
	
	_getHeight: function() {
		if (this._isOpen) {
			return 740;
		} else {
			return 50;
		}
		return 0;
	}
	
}