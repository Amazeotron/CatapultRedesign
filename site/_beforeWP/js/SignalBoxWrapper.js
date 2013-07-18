function SignalBoxWrapper() {

	var init = function() {
		SignalBox.setup({
			app: 'catapult',
			username: 'sayhitolarry'
		});
	};

	var getCaseStudies = function(callback) {
		SignalBox.list('casestudies', {
			success: function(response, xhr) {
				callback(response.records);
			}
		});
	};

	return {
		init: init,
		getCaseStudies: getCaseStudies
	}
};