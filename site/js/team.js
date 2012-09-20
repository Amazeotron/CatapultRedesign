var team = {

	init: function() {
		$(".team-member").hover(function() {
			$(this).find(".team-member-details").addClass("hover");
		}, function() {
			$(this).find(".team-member-details").removeClass("hover");
		});
	}
}