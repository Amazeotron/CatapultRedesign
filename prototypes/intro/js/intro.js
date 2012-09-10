(function() {

	document.addEventListener("DOMContentLoaded", init);

	// top-level vars start with an underscore
	var _canvas, 
			_stage, 
			FIRE_TIME = 100, // (Const) How long to wait till next project
			_numTicks = 0, // How many ticks have gone by
			_activeProject = -1, // Tracks which project is active
			NUM_PROJECTS = 6, // (Const) How many projects there are
			_titleWords, 
			_titleField;
	
	function init(event) {
		_canvas = document.querySelector("#intro");
		_stage = new Stage(_canvas);

		createTitle(); // Create the title
		createProjectCircles();

		// Render state
		Ticker.setFPS(60);
		Ticker.useRAF = true;
		Ticker.addListener(tick,false);
	}

	function createTitle() {
		// 132, 182, 180: greenish RGB
		var title1 = new Text("We", "42px freight-text-pro", "rgba(100,100,100,1)");
		title1.x = 100;
		title1.y = 50;
		_stage.addChild(title1);

		var title2 = new Text("to help people thrive.", "42px freight-text-pro", "rgba(100,100,100,1)");
		title2.x = 350;
		title2.y = title1.y;
		_stage.addChild(title2);

		// Make words that loop
		_titleWords = ["ENGINEER", "INNOVATE", "ANALYZE", "IDEATE", "EDUCATE", "DESIGN"];
		_titleField = new Text("", "45px franklin-gothic-ext-comp-urw", "rgb(132,182,180)");
		_titleField.textAlign = "center";
		_titleField.width = 250;
		_titleField.x = 250;
		_titleField.y = 48;
		_stage.addChild(_titleField);

		_stage.update();
	}

	function createProjectCircles() {
		// Make masked project images
		// TODO: Should preload all images
		var container = new Container();
		container.x = 600;
		container.y = 200;
		_stage.addChild(container);
		
		var imgMask = new Shape();
		imgMask.graphics.beginFill(Graphics.getRGB(0,0,0));
		imgMask.graphics.drawCircle(125,125,125);

		var pc1 = new Image();
		pc1.src = "img/intro/PeaceCorp_1.jpeg";
		pc1.onload = function(event) {
			var pcBitmap = new Bitmap(pc1);
			container.addChild(pcBitmap);
			pcBitmap.mask = imgMask;
		}

		_stage.update();
	}

	function tick() {
		// Here's where the action happens
		if (_numTicks % FIRE_TIME == 0 && _activeProject < NUM_PROJECTS) {
			
			_activeProject++;

			// Make the title
			Tween.get(_titleField,{loop:false})
			.to({alpha:0},250,Ease.cubicOut)
			.wait(250)
			.call(function() {
				_titleField.text = _titleWords[_activeProject];
			})
			.to({alpha:1},250,Ease.cubicOut);

			// Draw project images with alpha mask

		}

		_numTicks++;
		// Update stage
		_stage.update();
	}
})();