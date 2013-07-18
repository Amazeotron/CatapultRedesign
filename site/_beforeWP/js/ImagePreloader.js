function ImagePreloader(){

	var _data = null,
	_numImages = 0,
	_numLoaded = 0,
	_callback = null;

	var init = function(data, callback) {
		_data = data,
		_numImages = _data.length,
		_callback = callback;
		for (var i = 0; i < _numImages; i++) {
			var obj = _data[i];
			img = new Image();
			img.src = obj.imgURL;
			img.onload = function(event) { handleLoaded(event); };
		}
	}

	var handleLoaded = function(event) {
		_numLoaded++;
		if (_numLoaded >= _numImages) {
			_callback();
		}
	}

	return {
		init: init
	}
};
