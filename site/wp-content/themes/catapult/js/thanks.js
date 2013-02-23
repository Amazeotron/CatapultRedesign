var thanks = {
	
	_overlay: null,
	
	init: function() {
		
		var self = this;
		
		this._overlay = $("#thanks-overlay");
		
		// Handle form submit
		$("#form-add-name").submit(function(event) {
			// Disable the submit button
			$("#js-quote-submit").prop("disabled", true).addClass("disabled");
		});
		
		// Handle selection of if they'd like to include a quote
		$("#js-add-name, #js-no-add-name").change(function(event) {
			
			var id = $(this).attr("id");
			
			switch (id) {
				case "js-add-name":
					self.showSubform();
					break;
				
				case "js-no-add-name":
					self.hideOverlay();
					break;
			}
		});
		
		// TODO: Only show the overlay if this isn't after the add quote form submission!
		if ($_SESSION.fullName) {
			this.showOverlay();
		}
		console.log("Thank you page _SESSION vars: ");
		console.log($_SESSION);
	},
	
	showOverlay: function() {
		this._overlay.removeClass("hide").addClass("show");
	}, 
	
	hideOverlay: function() {
		this._overlay.removeClass("show").addClass("hide");
	}, 
	
	showSubform: function() {
		$("#js-add-name-section").removeClass("hide").addClass("show");
	}
	
}