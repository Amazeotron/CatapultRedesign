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

		$(".team-member").on("click", function(event) {
			event.preventDefault();
			// populate the overlay with details about that person
			var index = $(this).find("h3").text();
			for (var i = 0; i < self._dataLength; i++) {
				if (index === self._teamData[i].title) {
					var headshotURL = $(this).find(".team-member-headshot").attr("src");
					$(".overlay").find(".overlay-content").empty().append(self.getOverlayTemplate(self._teamData[i], headshotURL));
					break;
				}
			}
			$(".overlay")
				.removeClass("hide").addClass("show")
				.focus();
				
			$(document).keyup(function(event) {
				// Bind ESC key to close the overlay
				if (event.keyCode === 27) {
					$(".overlay").removeClass("show").addClass("hide").find(".overlay-content").empty();
				}
			});
			
			return false;
		});
	},

	getOverlayTemplate: function(teamMember, headshotURL) {
		var twitter = teamMember.custom_fields.twitter_handle[0];
		var twitterSnippet = '';
		if (twitter != "") {
			twitterSnippet = '<h3 class="overlay-twitter">Twitter: <a href="https://twitter.com/' + twitter + '">@' + twitter + '</a></h3>';
		}
		var template = 
		'<h1 class="overlay-name header-title">' + teamMember.title + '</h1>' +
		'<h2 class="overlay-title">' + teamMember.custom_fields.job_title[0] + ', ' + teamMember.custom_fields.company_name[0] + '</h2>' +
		twitterSnippet +
		'<img src="' + headshotURL + '" alt="" class="overlay-headshot" />' +
		'<p class="overlay-body">' + teamMember.content + '</p>';
		return template;
	}
}