var donations = {
	
	init: function() {
		
		// Only show the donation form once someone's selected a dollar amount
		$("#donation-amount").change(function(event) {
			var selected = $(this).find("option:selected"),
					form = $("#donation-form-body, #donation-form-submit");
			if (selected[0].value === "Choose Amount") {
				form.fadeOut();
				return;
			}
			form.fadeIn();
		});
		
	}
	
}