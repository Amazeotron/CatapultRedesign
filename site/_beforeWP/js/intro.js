var intro = {

	NUM_PROJECTS: 6, // (Const) How many projects there are
	FIRE_TIME: 200, // (Const) How long to wait till next project

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
	
	init: function() {
		this._canvas = document.querySelector("#intro");
		this._stage = new Stage(this._canvas);

		this._projectManifest = [
			{
				src:"img/homepage/intro/handcart.jpg", 
				id:"handcart", 
				verb: "ENGINEER",
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
				src:"img/homepage/intro/ihangane.jpg", 
				id:"ihangane", 
				verb:"INNOVATE",
				skills:[
					{name:"Ethnographic Research", size:this._dotMedium},
					{name:"Field Observation", size:this._dotMedium},
					{name:"", size:this._dotOff},
					{name:"Vendor Sourcing", size:this._dotMedium},
					{name:"Report Generation", size:this._dotSmall},
					{name:"Technology Assessment", size:this._dotLarge}
				], 
				dotPosition:{x:202, y:317}
			}, 
			{
				src:"img/homepage/intro/peacecorps.jpg", 
				id:"peacecorps", 
				verb:"ANALYZE",
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
				src:"img/homepage/intro/simpa.jpg", 
				id:"simpa",
				verb:"IDEATE",
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
				src:"img/homepage/intro/wello.jpg", 
				id:"wello", 
				verb:"EDUCATE",
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
				src:"img/homepage/intro/worldbank.jpg", 
				id:"worldbank", 
				verb:"DESIGN",
				skills:[
					{name:"Market Research", size:this._dotMedium},
					{name:"Ethnographic Research", size:this._dotMedium},
					{name:"", size:this._dotOff},
					{name:"Business Planning", size:this._dotLarge},
					{name:"", size:this._dotOff},
					{name:"Concept Ideation", size:this._dotLarge}
				],
				dotPosition:{x:522, y:229}
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

		var title1 = new Text("We", "42px freight-text-pro", "rgb(200,200,200)");
		title1.x = 130;
		title1.y = 50;
		this._titleContainer.addChild(title1);

		var title2 = new Text("to help people thrive.", "42px freight-text-pro", "rgb(200,200,200)");
		title2.x = 340;
		title2.y = title1.y;
		this._titleContainer.addChild(title2);

		var underline = new Shape();
		underline.graphics.beginFill(Graphics.getRGB(170,170,170)).drawRect(190,105,150,1);
		this._titleContainer.addChild(underline);

		// Make words that loop
		this._titleField = new Text("", "45px franklin-gothic-ext-comp-urw", "rgb(132,182,180)");
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
			var dot = this.getDot(), 
			data = this._projectManifest[i];
			this._dotsContainer.addChild(dot);
			dot.x = data.dotPosition.x;
			dot.y = data.dotPosition.y;
		}
	},

	getMaskedImage: function(index) {
		var container = new Container();
		var bmp = this._loadedImages[index];
		bmp.mask = this._imgMask;
		var shadow = this._imgMask.clone();
		shadow.shadow = new Shadow("rgba(0,0,0,0.3)", 3, 6, 16);
		container.addChild(shadow);
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

	getDot: function() {
		var dot = new Shape(), 
		radius = 110, 
		container = new Container(), 
		label = new Text("", "50px franklin-gothic-ext-comp-urw", "rgb(255,255,255)");
		label.x = 0;
		label.y = -30;
		label.lineWidth = radius*1.8;
		label.textAlign = "center";
		label.lineHeight = 50;

		dot.graphics.beginRadialGradientFill(["rgb(143,192,190)", "rgb(108,173,170)"], [0,1], 0,0,radius*0.25, 0,0,radius)
		.drawCircle(0, 0, radius);
		container.addChild(dot);
		container.addChild(label);
		return container;
	},

	tick: function() {
		// Here's where the action happens
		if (!this._isLoaded) {
			this._stage.update();
			return;
		}
		if (this._numTicks % this.FIRE_TIME == 0 && this._activeProject < this.NUM_PROJECTS-1) {
			
			this._activeProject++;
			var activeData = this._projectManifest[this._activeProject];

			// Make the title
			var self = this;
			Tween.get(this._titleField,{loop:false})
			.to({alpha:0},250,Ease.cubicOut)
			.wait(250)
			.call(function() {
				self._titleField.text = activeData.verb;
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
				label = dot.getChildAt(1),
				scale = activeData.skills[i].size,
				alp = scale == this._dotOff ? 0.5 : 1.0;
				label.text = activeData.skills[i].name.toUpperCase();
				label.y = label.getMeasuredHeight() > 50 ? -55 : -30;
				
				Tween.get(dot, {loop:false})
				.to({scaleX:scale, scaleY:scale, alpha:alp}, 750,Ease.bounceOut);
			}
		}

		this._numTicks++;
		// Update stage
		this._stage.update();
	}
};