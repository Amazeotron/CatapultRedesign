function ParsePostType() {
	
	var _callback = null,
			_data = null;
	
	/*
	* Kicks off the loading and parsing.
	* Params: 
			url: the URL of the JSON feed.
			callback: Method that gets called when loading is done.
	*/
	var _init = function(url, callback) {
		_callback = callback;
		// http://localhost:8888/wordpress/?json=get_recent_posts&dev=1&post_type=job
		var self = this;
		$.getJSON(url, function(data, textStatus, jqXHR) {
			_handleDataLoaded(data);
		})
		.error(function(error) {
			console.log("ParsePostType error parsing URL:");
			console.log(error);
		});
	};
	
	var _handleDataLoaded = function(data) {
		console.log("ParsePostType data loaded.");
		_data = data;
		_callback(_data.posts);
	}
	
	var _getPosts = function() {
		return _data.posts;
	}
	
	return {
		init: _init,
		getPosts: _getPosts
	}
	
}