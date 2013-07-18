var CenterTag = {
		_canvas: null, _stage: null, _images: null, _maskImage: null, _maskedImage: null, _alphaMask: null, _self: this,
		_callback: null, 
		
		init: function(canvasID, callback) {
			this._callback = callback;
			this._canvas = document.getElementById(canvasID);
			this._images = this._images || {};
			var manifest = [
				{src: "systems-thinking.png", id: "systems-thinking"},
				{src: "engineering.png", id: "engineering"},
				{src: "ideation.png", id: "ideation"},
				{src: "innovation.png", id: "innovation"},
				{src: "education.png", id: "education"},
				{src: "insights.png", id: "insights"},
				{src: "pngmask.png", id: "maskImage"},
				{src: "maskShadow.png", id: "maskShadow"},
			];
			var loader = new createjs.PreloadJS(false);
			var self = this;
			loader.onFileLoad = function(obj) {
				if (obj.type == "image") { self._images[obj.id] = obj.result; }
			};
			loader.onComplete = function(obj) {
				self._stage = new createjs.Stage(self._canvas);
				var shadowImage = new Bitmap(self._images['maskShadow']);
				self._stage.addChild(shadowImage);
				self._maskImage = new Bitmap(self._images['maskImage']);
				self._alphaMask = new AlphaMaskFilter(self._maskImage.image);
				
				self._stage.update();
				self._callback();
			};
			loader.loadManifest(manifest);
		},
		
		update: function(tileName) {
			if (this._maskedImage) this._stage.removeChild(this._maskedImage);
			this._maskedImage = null;
			this._maskedImage = new Bitmap(this._images[tileName]);
			this._maskedImage.filters = [this._alphaMask];
			this._maskedImage.cache(0, 0, this._maskImage.image.width, this._maskImage.image.height);
			this._stage.addChild(this._maskedImage);
			this._stage.update();
		}
	}