var CenterTag = {
		_canvas: null, _stage: null, _images: null, _maskImage: null, _maskedImage: null, _alphaMask: null,
		_callback: null, _isReady: false, _tileName: "", 
		
		init: function(canvasID, rootURL, callback) {
			this._callback = callback;
			this._canvas = document.getElementById(canvasID);
			this._images = this._images || {};
			var manifest = [
				{src: rootURL + "wp-content/themes/catapult/img/homepage/casestudies/bgtile/bgtile-systems-thinking.png", id: "systems-thinking"},
				{src: rootURL + "wp-content/themes/catapult/img/homepage/casestudies/bgtile/bgtile-engineering.png", id: "engineering"},
				{src: rootURL + "wp-content/themes/catapult/img/homepage/casestudies/bgtile/bgtile-ideation.png", id: "ideation"},
				{src: rootURL + "wp-content/themes/catapult/img/homepage/casestudies/bgtile/bgtile-innovation.png", id: "innovation"},
				{src: rootURL + "wp-content/themes/catapult/img/homepage/casestudies/bgtile/bgtile-education.png", id: "education"},
				{src: rootURL + "wp-content/themes/catapult/img/homepage/casestudies/bgtile/bgtile-insights.png", id: "insights"},
				{src: rootURL + "wp-content/themes/catapult/img/homepage/bg/center-tag-mask.png", id: "maskImage"},
				{src: rootURL + "wp-content/themes/catapult/img/homepage/bg/center-tag-shadow.png", id: "maskShadow"},
			];
			var loader = new createjs.PreloadJS(false);
			var self = this;
			loader.onFileLoad = function(obj) {
				if (obj.type == "image") { self._images[obj.id] = obj.result; }
			};
			loader.onComplete = function(obj) {
				self._stage = new Stage(self._canvas);
				var shadowImage = new Bitmap(self._images['maskShadow']);
				self._stage.addChild(shadowImage);
				self._maskImage = new Bitmap(self._images['maskImage']);
				self._alphaMask = new AlphaMaskFilter(self._maskImage.image);
				
				self._stage.update();
				self._isReady = true;
				self._callback();
			};
			loader.loadManifest(manifest);
		},
		
		update: function(tileName) {
			// if the images haven't loaded yet, delay calling this till it's ready
			// console.log("Center tag is ready: " + this._isReady);
			var self = this;
			if (this._isReady == false) {
				this._tileName = tileName;
				var timer = setInterval(function(){
					// console.log("Center tag is ready: " + self._isReady);
					if (self._isReady == true) {
						self.update(self._tileName);
						clearInterval(timer);
					}
				}, 100);
				return;
			}
			if (this._maskedImage) this._stage.removeChild(this._maskedImage);
			this._maskedImage = null;
			this._maskedImage = new Bitmap(this._images[tileName]);
			this._maskedImage.filters = [this._alphaMask];
			this._maskedImage.cache(0, 0, this._maskImage.image.width, this._maskImage.image.height);
			this._stage.addChild(this._maskedImage);
			this._stage.update();
		}
	}