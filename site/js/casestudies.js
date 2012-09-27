
var casestudies = {

	_data: null,
	_activeIndex: 0,
	_lastIndex: 0,
	_numItems: 0,
	_container: null,

	/*
	* Kick off the Case Studies. Pass in data array that represents the case studies.
	*/
	init: function(data) {
		this._data = data;
		this._numItems = this._data.length;
		this._container = $(".casestudies");		

		var self = this;

		$("#casestudy-paddle-prev").click(function(event) {
			event.preventDefault();
			self.showCaseStudy(self.getPrevIndex(), false);
			return false;
		});
		$("#casestudy-paddle-next").click(function(event) {
			event.preventDefault();
			self.showCaseStudy(self.getNextIndex(), false);
			return false;
		});

		//Key Offerings buttons
		$(".keyofferings-list-item a").click(function(event) {
			event.preventDefault();
			self.showCaseStudy($(this).parent().index(), false);
		});

		// preload all images.
		// Create compatible array
		var imgData = [];
		for (var i = 0, len = this._data.length; i < len; i++) {
			imgData[i] = {imgURL:this._data[i].main_image_path};
		}
		var preload = new ImagePreloader();
		preload.init(imgData, function() { self.contentLoaded(); });

		// Show the first one
		this.showCaseStudy(this._activeIndex, true);
	},

	contentLoaded: function() {
		// Draw out all the content
		var container = $("#casestudy-content-sub"),
		imgContainer = $("#casestudy-images-sub");

		for (var i = 0; i < this._numItems; i++) {
			var study = this._data[i],
			template = this.getCaseStudyTemplate(study);
			container.append(template);
			$("#casestudy-content-"+study.client_name).css({left:this.getContentOffset(i)});
			imgContainer.append('<img src="' + study.main_image_path + '" id="casestudy-image-' + study.client_name + '" />');
			$("#casestudy-image-"+study.client_name).css({left:this.getImageOffset(i)});
		}
	},

	showCaseStudy: function(index, firstTime) {
		var study = this._data[index],
		container = $("#casestudy-content-sub"),
		imgContainer = $("#casestudy-images-sub"),
		category = study.category;

		container.css({left:-this.getContentOffset(index)});
		imgContainer.css({left:-this.getImageOffset(index)});

		// Highlight proper category button
		$(".keyofferings-list-item a").removeClass("active");
		var what = $("#"+category);
		// Add the active class to the proper anchor
		what.find("a").addClass("active");

		// Do background switch
		$("#casestudies-bg").css({"background-image": "none", "opacity":0})
												.css({"background-image": "url(img/homepage/casestudies/bgtile-" + category + ".png)"})
												.delay(400)
												.animate({ opacity: 1 }, 500);
	},

	getCaseStudyTemplate: function(studyData) {
		var template = 
			'<div class="casestudy-content-single" id="casestudy-content-' + studyData.client_name + '">' +
			'<img src="' + studyData.header_image_path + '" alt="' + studyData.title + '" class="casestudy-content-header" />' +
			'<h1>' + studyData.title + '</h1>' +
			'<p class="casestudy-body">' + studyData.body + '</p>' +
			'</div>';
			return template;
	},

	getContentOffset: function(index) {
		return index*393+20;
	},

	getImageOffset: function(index) {
		return index*900;
	},

	getNextIndex: function() {
		this._lastIndex = this._activeIndex;
		this._activeIndex++;
		if (this._activeIndex >= this._data.length) this._activeIndex = 0;
		console.log("active case study index: " + this._activeIndex);
		return this._activeIndex;
	},

	getPrevIndex: function() {
		this._lastIndex = this._activeIndex;
		this._activeIndex--;
		if (this._activeIndex < 0) this._activeIndex = this._data.length - 1;
		console.log("active case study index: " + this._activeIndex);
		return this._activeIndex;
	}
}