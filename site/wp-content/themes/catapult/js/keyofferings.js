var keyofferings = {
	
	init: function() {
		var self = this;
		
		// Stagger-show key offerings buttons
		// $(".keyofferings-list__item").each(function(index) {
		// 	var self = $(this);
		// 	setTimeout(function() {
		// 		self.removeClass("hide").addClass("show");
		// 	}, (index * 150));
		// });
		
		// Key Offerings buttons
		$(".keyofferings-list__item a").click(function(event) {
			event.preventDefault();
			var id = $(this).attr("id"),
					section = id.substring(id.lastIndexOf("-")+1, id.length);
			self.showKeyOffering(section);
			return false;
		});
		
		self.showKeyOffering("engineering");
	}, 
	
	showKeyOffering: function(name) {
		// unselect the other buttons
		$(".keyofferings-list__item a").removeClass('active');
		// Activate the correct button
		$("#keyofferings-button-" + name).addClass("active");
		// Show correct key offering paragraph
		$(".keyofferings__offerings__item").removeClass("show").addClass("hide");
		$("#keyofferings-item-" + name).removeClass('hide').addClass("show");
	}
	
}