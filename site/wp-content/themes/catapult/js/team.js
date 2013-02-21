var team = {

	_teamData: null,
	_dataLength: 0,
	_rootURL: "", 

	init: function(teamData, rootURL) {
		
		this._rootURL = rootURL;
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
	},

	getOverlayTemplate: function(teamMember) {
		var template = '<section class="overlay" id="team-overlay">' +
		'<div class="overlay-inner">' +
		'<a href="#" class="close-button" id="overlay-close-button"></a>' +
		'<h1 class="overlay-name header-title">' + teamMember.name + '</h1>' +
		'<h2 class="overlay-title">' + teamMember.title + ', ' + teamMember.company + '</h2>' +
		'<h3 class="overlay-twitter">' + teamMember.twitter + '</h3>' +
		'<img src="' + this._rootURL + teamMember.headshotURL + '" alt="" class="overlay-headshot" />' +
		'<p class="overlay-body">' + teamMember.description + '</p>' +
		'</div>' +
		'</section>'
		return template;
	}
}