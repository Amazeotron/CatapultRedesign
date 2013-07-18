var team = {

	_teamData: null,
	_dataLength: 0,

	init: function(teamData) {
		this._teamData = teamData;
		this._dataLength = this._teamData.length;
		var self = this;

		$(".team-member").hover(function() {
			$(this).find(".team-member-details").addClass("hover");
		}, function() {
			$(this).find(".team-member-details").removeClass("hover");
		});

		$(".team-member").click(function(event) {
			event.preventDefault();
			// populate the overlay with details about that person
			var index = $(this).find("h3").text();
			for (var i = 0; i < self._dataLength; i++) {
				if (index === self._teamData[i].name) {
					$("body").append(self.getOverlayTemplate(self._teamData[i]));
					break;
				}
			}
			$(".overlay-inner").addClass("show").parent().addClass("show");
			return false;
		});

		$(document).on("click", "#overlay-close-button, .overlay", function(event) {
			event.preventDefault();
			$(".overlay").remove();
			return false;
		});
	},

	getOverlayTemplate: function(teamMember) {
		var template = '<section class="overlay" id="team-overlay">' +
		'<div class="overlay-inner">' +
		'<a href="#" class="close" id="overlay-close-button"></a>' +
		'<h1 class="name">' + teamMember.name + '</h1>' +
		'<h2 class="title">' + teamMember.title + ', ' + teamMember.company + '</h2>' +
		'<h3 class="twitter">' + teamMember.twitter + '</h3>' +
		'<img src="' + teamMember.headshotURL + '" alt="" class="headshot" />' +
		'<p class="body">' + teamMember.description + '</p>' +
		'</div>' +
		'</section>'
		return template;
	}
}