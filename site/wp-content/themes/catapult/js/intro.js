var intro = {

	NUM_PROJECTS: 6, // (Const) How many projects there are
	FIRE_TIME: 1, // (Const) How long to wait till next project, in seconds 400
	SANS_FONT: "franklin-gothic-ext-comp-urw",
	SERIF_FONT: "freight-text-pro",

	// top-level vars start with an underscore
	_canvas: null, 
	_stage: null,
	_numTicks: 0, // How many ticks have gone by
	_activeProject: -1, // Tracks which project is active
	_dotOff: 0.2,
	_dotSmall: 0.3, // Small dot size
	_dotMedium: 0.5, 
	_dotLarge: 0.7, 
	_titleField: null, 
	_imgMask: null, 
	_loadedImages: [], 
	_projectImagesContainer: null, 
	_titleContainer: null, 
	_dotsContainer: null, 
	_projectManifest: [], 
	_isLoaded: false,
	_rootURL: "",
	_callback: null, 
	
	init: function(rootURL, callback) {
		this._rootURL = rootURL;
		this._callback = callback;
		this._canvas = document.querySelector("#intro");
		this._stage = new Stage(this._canvas);

		this._projectManifest = [
			{
				src:rootURL + "/img/homepage/intro/handcart.jpg", 
				id:"handcart", 
				verb: "ENGINEER",
				titleColor: "hsl(178, 22.5806%, 57.4510%)", 
				skills:[
					{name:"User Research", size:this._dotSmall},
					{name:"Competitor Analysis", size:this._dotSmall},
					{name:"Conceptual Design", size:this._dotMedium},
					{name:"Prototyping", size:this._dotLarge},
					{name:"CAD Development", size:this._dotSmall},
					{name:"User Testing", size:this._dotMedium}
				], 
				dotPosition:{x:106, y:246}
			},
			{
				src:rootURL + "/img/homepage/intro/worldbank.jpg", 
				id:"worldbank", 
				verb:"INNOVATE",
				titleColor: "hsl(47, 88.4956%, 55.6863%)", 
				skills:[
					{name:"Market Research", size:this._dotMedium},
					{name:"Ethnographic Research", size:this._dotMedium},
					{name:"", size:this._dotOff},
					{name:"Business Planning", size:this._dotLarge},
					{name:"", size:this._dotOff},
					{name:"Concept Ideation", size:this._dotLarge}
				],
				dotPosition:{x:522, y:229}
			}, 
			{
				src:rootURL + "/img/homepage/intro/simpa.jpg", 
				id:"simpa",
				verb:"ANALYZE",
				titleColor: "hsl(34, 85.1064%, 63.1373%)", 
				skills: [
					{name:"Curriculum Development", size:this._dotMedium},
					{name:"", size:this._dotOff},
					{name:"Field Testing Protocol", size:this._dotLarge},
					{name:"Ethnographic Research", size:this._dotSmall},
					{name:"Data Collection", size:this._dotLarge},
					{name:"Data Analysis", size:this._dotSmall}
				], 
				dotPosition:{x:361, y:245}
			}, 
			{
				src:rootURL + "/img/homepage/intro/wello.jpg", 
				id:"wello", 
				verb:"IDEATE",
				titleColor: "hsl(353, 78.5714%, 61.5686%)", 
				skills:[
					{name:"Need Finding", size:this._dotMedium},
					{name:"", size:this._dotOff},
					{name:"Market Research", size:this._dotMedium},
					{name:"Ethnographic Research", size:this._dotMedium},
					{name:"Concept Ideation", size:this._dotLarge},
					{name:"Rapid Prototyping", size:this._dotSmall}
				], 
				dotPosition:{x:502, y:370}
			}, 
			{
				src:rootURL + "/img/homepage/intro/peacecorps.jpg", 
				id:"peacecorps", 
				verb:"EDUCATE",
				titleColor: "hsl(220, 1.6949%, 74.7059%)", 
				skills: [
					{name:"Curriculum Development", size:this._dotLarge},
					{name:"", size:this._dotOff},
					{name:"Workshop Definition", size:this._dotMedium},
					{name:"", size:this._dotOff},
					{name:"Presentation Generation", size:this._dotMedium},
					{name:"", size:this._dotOff},
				], 
				dotPosition:{x:298, y:371}
			},
			{
				src:rootURL + "/img/homepage/intro/ihangane.jpg", 
				id:"ihangane", 
				verb:"DESIGN",
				titleColor: "hsl(338, 20.0000%, 56.8627%)", 
				skills:[
					{name:"Ethnographic Research", size:this._dotMedium},
					{name:"Field Observation", size:this._dotMedium},
					{name:"", size:this._dotOff},
					{name:"Vendor Sourcing", size:this._dotMedium},
					{name:"Report Generation", size:this._dotSmall},
					{name:"Technology Assessment", size:this._dotLarge}
				], 
				dotPosition:{x:202, y:317}
			}
		];

		var preload = new PreloadJS();
		var self = this;
		preload.onProgress = function(event) {};
		preload.onFileLoad = function(event) {
			var bmp = new Bitmap(event.src);
			self._loadedImages.push(bmp);
		};
		preload.onComplete = function(event) {
			self.createTitle();
			self.createProjectCircles();
			self.createDots();
			self._isLoaded = true;
		}
		preload.loadManifest(this._projectManifest);

		// Render state
		Ticker.setFPS(60);
		Ticker.useRAF = true;
		Ticker.addListener(this,false);
	},

	createTitle: function() {
		// 132, 182, 180: greenish RGB
		this._titleContainer = new Container();
		this._stage.addChild(this._titleContainer);

		var title1 = new Text("We", "42px " + this.SERIF_FONT, "rgb(200,200,200)");
		title1.x = 130;
		title1.y = 50;
		this._titleContainer.addChild(title1);

		var title2 = new Text("to help people thrive.", "42px " + this.SERIF_FONT, "rgb(200,200,200)");
		title2.x = 340;
		title2.y = title1.y;
		this._titleContainer.addChild(title2);

		var underline = new Shape();
		underline.graphics.beginFill(Graphics.getRGB(170,170,170)).drawRect(190,105,150,1);
		this._titleContainer.addChild(underline);

		// Make words that loop
		this._titleField = new Text("", "45px " + this.SANS_FONT, "rgb(132,182,180)");
		this._titleField.textAlign = "center";
		this._titleField.width = 250;
		this._titleField.x = 265;
		this._titleField.y = 48;
		this._titleContainer.addChild(this._titleField);

		this._stage.update();
	},

	createProjectCircles: function() {
		// Make masked project images
		this._projectImagesContainer = new Container();
		this._projectImagesContainer.x = 725;
		this._projectImagesContainer.y = 325;
		this._stage.addChild(this._projectImagesContainer);
		
		this._imgMask = new Shape();
		this._imgMask.graphics.beginFill(Graphics.getRGB(0,0,0));
		this._imgMask.graphics.drawCircle(125,125,125);

		this._stage.update();
	},

	createDots: function() {
		this._dotsContainer = new Container();
		this._stage.addChild(this._dotsContainer);
		
		for (var i = 0, len = this._projectManifest.length; i < len; i++) {
			var data = this._projectManifest[i],
			    dot = this.getDot(this._projectManifest[0].titleColor);
			
			this._dotsContainer.addChild(dot);
			dot.x = data.dotPosition.x;
			dot.y = data.dotPosition.y;
		}
	},

	getMaskedImage: function(index) {
		var container = new Container();
		var bmp = this._loadedImages[index];
		bmp.mask = this._imgMask;
		// var shadow = this._imgMask.clone();
		// shadow.shadow = new Shadow("rgba(0,0,0,0.3)", 3, 6, 16);
		// container.addChild(shadow);
		container.addChild(bmp);
		container.alpha = 0;
		container.regX = container.regY = 125;
		container.scaleX = container.scaleY = 0.75;
		this._projectImagesContainer.addChild(container);
		return container;
	},

	getPrevMaskedImage: function(index) {
		return this._projectImagesContainer.getChildAt(index);
	},

	getDot: function(color) {
		var dot = new Shape(), 
		radius = 110, 
		container = new Container(), 
		label = new Text("", "50px " + this.SANS_FONT, "rgb(255,255,255)");
		label.x = 0;
		label.y = -30;
		label.lineWidth = radius*1.8;
		label.textAlign = "center";
		label.lineHeight = 50;

		this.updateDotFill(dot, color, radius);
		container.addChild(dot);
		container.addChild(label);
		return container;
	},
	
	updateDotFill: function(dot, hsl, radius) {
		// Take the dot (Shape) and update it's fill
		// extract the lightness value
		var reg = /\d+[\.\d+]*/g,
		    hue = hsl.match(reg)[0],
		    saturation = hsl.match(reg)[1],
		    lightness = hsl.match(reg)[2];
		lightness -= 10;
		var hslDark = "hsl(" + hue + "," + saturation + "%," + lightness + "%)";
		
		dot.graphics.clear();
		dot.graphics.beginRadialGradientFill([hsl, hslDark], [0,1], 0,0,radius*0.25, 0,0,radius);
		dot.graphics.drawCircle(0, 0, radius);
		return dot;
	},

	tick: function() {
		// Here's where the action happens
		if (!this._isLoaded) {
			this._stage.update();
			return;
		}
		
		var done = false;
		
		if (this._numTicks % (this.FIRE_TIME * 100) == 0 && this._activeProject < this.NUM_PROJECTS-1) {
			
			this._activeProject++;
			
			done = this._activeProject >= this.NUM_PROJECTS-1;
			
			var activeData = this._projectManifest[this._activeProject];

			// Make the title
			var self = this;
			Tween.get(this._titleField,{loop:false})
			.to({alpha:0},250,Ease.cubicOut)
			.wait(250)
			.call(function() {
				self._titleField.text = activeData.verb;
				self._titleField.color = activeData.titleColor;
			})
			.to({alpha:1},250,Ease.cubicOut);

			// Draw project images
			var maskedImage = this.getMaskedImage(this._activeProject);
			var prevImage = this.getPrevMaskedImage(this._activeProject-1);
			if (prevImage) {
				Tween.get(prevImage, {loop:false})
				.to({alpha:0, scaleX:0.75, scaleY:0.75},250,Ease.cubicOut);
			}
			Tween.get(maskedImage, {loop:false})
			.wait(500)
			.to({alpha:1,scaleX:1,scaleY:1},750,Ease.cubicOut);

			// Animate dots
			for (var i = 0, len = activeData.skills.length; i < len; i++) {
				var dot = this._dotsContainer.getChildAt(i),
						circle = dot.getChildAt(0),
						label = dot.getChildAt(1),
						scale = activeData.skills[i].size,
						alp = scale == this._dotOff ? 0.5 : 1.0;
				label.text = activeData.skills[i].name.toUpperCase();
				label.y = label.getMeasuredHeight() > 50 ? -55 : -30;
				this.updateDotFill(circle, activeData.titleColor, 110);
				
				Tween.get(dot, {loop:false})
				.to({scaleX:scale, scaleY:scale, alpha:alp}, 750,Ease.bounceOut);
			}
		}
		
		// End animation
		if (done) {
			
			// wait one more beat
			var self = this;
			setTimeout(function() {
				self.done();
			}, (self.FIRE_TIME + 1) * 1000);
			
		}

		this._numTicks++;
		// Update stage
		this._stage.update();
	}, 
	
	done: function() {
		
		// Remove title
		Tween.get(this._titleContainer,{loop:false})
		.to({alpha:0},250,Ease.cubicOut);
		
		// Remove image
		Tween.get(this._projectImagesContainer, {loop:false})
		.to({alpha:0,scaleX:0,scaleY:0},250,Ease.cubicOut)
		.call(function() {
			Ticker.removeListener(this,false);
		});
		
		// Remove all dots
		for (var i = 0, len = this._dotsContainer.getNumChildren(); i < len; i++) {
			var dot = this._dotsContainer.getChildAt(i);
							
			Tween.get(dot, {loop:false})
			.to({scaleX:0, scaleY:0, alpha:0}, 250,Ease.cubicOut);
		}
		
		// Show Catapult logo
		var preload = new PreloadJS(), 
				self = this,
				logoFull,
				logoPartial,
				letters,
				logoContainer = new Container();
		this._stage.addChild(logoContainer);
		logoContainer.x = 240;
		logoContainer.y = 150;
		logoContainer.scaleX = logoContainer.scaleY = 3.0;
		logoContainer.alpha = 0;
		
		preload.onProgress = function(event) {};
		preload.onFileLoad = function(event) {
			if (event.id == "full") {
				logoFull = new Bitmap(event.src);
				logoContainer.addChild(logoFull);
				logoFull.x = logoFull.y = -Math.floor(logoFull.image.width * 0.5);
			} else if (event.id == "partial") {
				logoPartial = new Bitmap(event.src);
				logoContainer.addChild(logoPartial);
				logoPartial.x = logoPartial.y = -Math.floor(logoPartial.image.width * 0.5);
			} else if (event.id == "letters") {
				letters = new Bitmap(event.src);
				letters.alpha = 0;
				letters.x = 50;
				letters.y = -15;
				logoContainer.addChild(letters);
			}
		};
		preload.onComplete = function(event) {
			Tween.get(logoContainer, {loop:false})
			.to({alpha:1},300,Ease.cubicOut);
			Tween.get(logoContainer, {loop:false})
			.to({rotation:360, scaleX:1, scaleY:1},1500,Ease.cubicOut)
			.call(function() {
				logoContainer.rotation = 0;
			});
			Tween.get(logoFull, {loop:false})
			.wait(1300)
			.to({alpha:0},250,Ease.cubicOut);
			Tween.get(letters)
			.wait(1550)
			.to({alpha:1},1500,Ease.CubicOut)
			.call(function() {
				self._callback();
			});
			
			var txt = "Engineering for those who need it most.",
					copyLine = new Text(txt, "50px " + self.SERIF_FONT, "rgb(255,255,255)");
			copyLine.textAlign = "center";
			copyLine.x = self._stage.canvas.width * 0.5;
			copyLine.y = 250;
			copyLine.width = self._stage.canvas.width;
			copyLine.height = 50;
			copyLine.alpha = 0;
			self._stage.addChild(copyLine);
			Tween.get(copyLine)
			.wait(2550)
			.to({alpha:1},1500,Ease.CubicOut)
		}
		preload.loadManifest([
			{
				src:self._rootURL + "/img/cog-partial.png", 
				id:"partial", 
			},
			{
				src:self._rootURL + "/img/cog-full.png", 
				id:"full", 
			},
			{
				src:self._rootURL + "/img/catapult-letters.png", 
				id:"letters", 
			}
		]);
		
	}
};