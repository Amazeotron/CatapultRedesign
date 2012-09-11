(function() {

	document.addEventListener("DOMContentLoaded", init);

	// top-level vars start with an underscore
	var _canvas, 
			_stage, 
			FIRE_TIME = 200, // (Const) How long to wait till next project
			_numTicks = 0, // How many ticks have gone by
			_activeProject = -1, // Tracks which project is active
			NUM_PROJECTS = 6, // (Const) How many projects there are
			_dotOff = 0.2,
			_dotSmall = 0.3, // Small dot size
			_dotMedium = 0.5, 
			_dotLarge = 0.7, 
			_titleField, 
			_imgMask, 
			_loadedImages = [], 
			_projectImagesContainer, 
			_titleContainer, 
			_dotsContainer, 
			_projectManifest, 
			_isLoaded = false;
	
	function init(event) {
		_canvas = document.querySelector("#intro");
		_stage = new Stage(_canvas);

		_projectManifest = [
			{
				src:"img/intro/handcart.jpg", 
				id:"handcart", 
				verb: "ENGINEER",
				skills:[
					{name:"User Research", size:_dotSmall},
					{name:"Competitor Analysis", size:_dotSmall},
					{name:"Conceptual Design", size:_dotMedium},
					{name:"Prototyping", size:_dotLarge},
					{name:"CAD Development", size:_dotSmall},
					{name:"User Testing", size:_dotMedium}
				], 
				dotPosition:{x:106, y:246}
			}, 
			{
				src:"img/intro/ihangane.jpg", 
				id:"ihangane", 
				verb:"INNOVATE",
				skills:[
					{name:"Ethnographic Research", size:_dotMedium},
					{name:"Field Observation", size:_dotMedium},
					{name:"", size:_dotOff},
					{name:"Vendor Sourcing", size:_dotMedium},
					{name:"Report Generation", size:_dotSmall},
					{name:"Technology Assessment", size:_dotLarge}
				], 
				dotPosition:{x:202, y:317}
			}, 
			{
				src:"img/intro/peacecorps.jpg", 
				id:"peacecorps", 
				verb:"ANALYZE",
				skills: [
					{name:"Curriculum Development", size:_dotLarge},
					{name:"", size:_dotOff},
					{name:"Workshop Definition", size:_dotMedium},
					{name:"", size:_dotOff},
					{name:"Presentation Generation", size:_dotMedium},
					{name:"", size:_dotOff},
				], 
				dotPosition:{x:298, y:371}
			}, 
			{
				src:"img/intro/simpa.jpg", 
				id:"simpa",
				verb:"IDEATE",
				skills: [
					{name:"Curriculum Development", size:_dotMedium},
					{name:"", size:_dotOff},
					{name:"Field Testing Protocol", size:_dotLarge},
					{name:"Ethnographic Research", size:_dotSmall},
					{name:"Data Collection", size:_dotLarge},
					{name:"Data Analysis", size:_dotSmall}
				], 
				dotPosition:{x:361, y:245}
			}, 
			{
				src:"img/intro/wello.jpg", 
				id:"wello", 
				verb:"EDUCATE",
				skills:[
					{name:"Need Finding", size:_dotMedium},
					{name:"", size:_dotOff},
					{name:"Market Research", size:_dotMedium},
					{name:"Ethnographic Research", size:_dotMedium},
					{name:"Concept Ideation", size:_dotLarge},
					{name:"Rapid Prototyping", size:_dotSmall}
				], 
				dotPosition:{x:502, y:370}
			}, 
			{
				src:"img/intro/worldbank.jpg", 
				id:"worldbank", 
				verb:"DESIGN",
				skills:[
					{name:"Market Research", size:_dotMedium},
					{name:"Ethnographic Research", size:_dotMedium},
					{name:"", size:_dotOff},
					{name:"Business Planning", size:_dotLarge},
					{name:"", size:_dotOff},
					{name:"Concept Ideation", size:_dotLarge}
				],
				dotPosition:{x:522, y:229}
			}
		];

		var preload = new PreloadJS();
		preload.onProgress = handleProgress;
		preload.onFileLoad = handleFileLoad;
		preload.onComplete = handleLoadComplete;
		preload.loadManifest(_projectManifest);

		// Render state
		Ticker.setFPS(60);
		Ticker.useRAF = true;
		Ticker.addListener(tick,false);
	}

	function createTitle() {
		// 132, 182, 180: greenish RGB
		_titleContainer = new Container();
		_stage.addChild(_titleContainer);

		var title1 = new Text("We", "42px freight-text-pro", "rgba(100,100,100,1)");
		title1.x = 130;
		title1.y = 50;
		_titleContainer.addChild(title1);

		var title2 = new Text("to help people thrive.", "42px freight-text-pro", "rgba(100,100,100,1)");
		title2.x = 340;
		title2.y = title1.y;
		_titleContainer.addChild(title2);

		var underline = new Shape();
		underline.graphics.beginFill(Graphics.getRGB(100,100,100)).drawRect(190,105,150,1);
		_titleContainer.addChild(underline);

		// Make words that loop
		_titleField = new Text("", "45px franklin-gothic-ext-comp-urw", "rgb(132,182,180)");
		_titleField.textAlign = "center";
		_titleField.width = 250;
		_titleField.x = 265;
		_titleField.y = 48;
		_titleContainer.addChild(_titleField);

		_stage.update();
	}

	function createProjectCircles() {
		// Make masked project images
		_projectImagesContainer = new Container();
		_projectImagesContainer.x = 725;
		_projectImagesContainer.y = 325;
		_stage.addChild(_projectImagesContainer);
		
		_imgMask = new Shape();
		_imgMask.graphics.beginFill(Graphics.getRGB(0,0,0));
		_imgMask.graphics.drawCircle(125,125,125);

		_stage.update();
	}

	function createDots() {
		_dotsContainer = new Container();
		_stage.addChild(_dotsContainer);
		
		for (var i = 0, len = _projectManifest.length; i < len; i++) {
			var dot = getDot(), 
			data = _projectManifest[i];
			_dotsContainer.addChild(dot);
			dot.x = data.dotPosition.x;
			dot.y = data.dotPosition.y;
		}
	}

	function handleProgress(event) {
		// console.log(event);
	}

	function handleFileLoad(event) {
		var bmp = new Bitmap(event.src);
		_loadedImages.push(bmp);
	}

	function handleLoadComplete(event) {
		console.log("Load complete");

		createTitle();
		createProjectCircles();
		createDots();

		_isLoaded = true;
	}

	function getMaskedImage(index) {
		var container = new Container();
		var bmp = _loadedImages[index];
		bmp.mask = _imgMask;
		var shadow = _imgMask.clone();
		shadow.shadow = new Shadow("rgba(0,0,0,0.3)", 3, 6, 16);
		container.addChild(shadow);
		container.addChild(bmp);
		container.alpha = 0;
		container.regX = container.regY = 125;
		container.scaleX = container.scaleY = 0.75;
		_projectImagesContainer.addChild(container);
		return container;
	}

	function getPrevMaskedImage(index) {
		return _projectImagesContainer.getChildAt(index);
	}

	function getDot() {
		var dot = new Shape(), 
		radius = 110, 
		container = new Container(), 
		label = new Text("", "50px franklin-gothic-ext-comp-urw", "rgb(255,255,255)");
		label.x = 0;
		label.y = -30;
		label.lineWidth = radius*1.8;
		label.textAlign = "center";
		label.lineHeight = 50;

		dot.graphics.beginRadialGradientFill(["#6eaeab", "#52817f"], [0,1], 0,0,radius*0.5, 0,0,radius)
		.drawCircle(0, 0, radius);
		container.addChild(dot);
		container.addChild(label);
		return container;
	}

	function tick() {
		// Here's where the action happens
		if (!_isLoaded) {
			_stage.update();
			return;
		}
		if (_numTicks % FIRE_TIME == 0 && _activeProject < NUM_PROJECTS-1) {
			
			_activeProject++;
			var activeData = _projectManifest[_activeProject];

			// Make the title
			Tween.get(_titleField,{loop:false})
			.to({alpha:0},250,Ease.cubicOut)
			.wait(250)
			.call(function() {
				_titleField.text = activeData.verb;
			})
			.to({alpha:1},250,Ease.cubicOut);

			// Draw project images
			var maskedImage = getMaskedImage(_activeProject);
			var prevImage = getPrevMaskedImage(_activeProject-1);
			if (prevImage) {
				Tween.get(prevImage, {loop:false})
				.to({alpha:0, scaleX:0.75, scaleY:0.75},250,Ease.cubicOut);
			}
			Tween.get(maskedImage, {loop:false})
			.wait(500)
			.to({alpha:1,scaleX:1,scaleY:1},750,Ease.cubicOut);

			// Animate dots
			for (var i = 0, len = activeData.skills.length; i < len; i++) {
				var dot = _dotsContainer.getChildAt(i),
				label = dot.getChildAt(1),
				scale = activeData.skills[i].size,
				alp = scale == _dotOff ? 0.5 : 1.0;
				label.text = activeData.skills[i].name.toUpperCase();
				label.y = label.getMeasuredHeight() > 50 ? -55 : -30;
				
				Tween.get(dot, {loop:false})
				.to({scaleX:scale, scaleY:scale, alpha:alp}, 750,Ease.bounceOut);
			}
		}

		_numTicks++;
		// Update stage
		_stage.update();
	}
})();