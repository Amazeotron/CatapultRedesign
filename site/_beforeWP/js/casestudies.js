
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
			var index = self.getPrevIndex();
			var cat = self.getCategory(self._data[index]);
			self.showCaseStudy(cat, false);
			return false;
		});
		$("#casestudy-paddle-next").click(function(event) {
			event.preventDefault();
			var index = self.getNextIndex();
			var cat = self.getCategory(self._data[index]);
			self.showCaseStudy(cat, false);
			return false;
		});

		//Key Offerings buttons
		$(".keyofferings-list-item a").click(function(event) {
			event.preventDefault();
			self.showCaseStudy($(this).parent().attr("id"), false);
		});

		// preload all images.
		// Create compatible array
		var imgData = [];
		for (var i = 0, len = this._data.length; i < len; i++) {
			//imgData[i] = {imgURL:this._data[i].main_image_path};
			imgData[i] = {imgURL:this._data[i].attachments[0].url};
		}
		var preload = new ImagePreloader();
		preload.init(imgData, function() { self.contentLoaded(); });

		// Show the first one
		var cat = self.getCategory(self._data[0]);
		this.showCaseStudy(cat, true);
	},

	contentLoaded: function() {
		// Draw out all the content
		var container = $("#casestudy-content-sub"),
		imgContainer = $("#casestudy-images-sub");

		for (var i = 0; i < this._numItems; i++) {
			var study = this._data[i],
			template = this.getCaseStudyTemplate(study),
			clientName = this.getClientName(study),
			largeImageURL = this.getLargeImageURL(study);
			container.append(template);
			$("#casestudy-content-"+clientName).css({left:this.getContentOffset(i)});
			imgContainer.append('<img src="' + largeImageURL + '" id="casestudy-image-' + clientName + '" />');
			$("#casestudy-image-"+clientName).css({left:this.getImageOffset(i)});
		}
	},
	
	getCategory: function(study) {
		return study.custom_fields.category[0];
	}, 
	
	getCategoryDescription: function(study) {
		return study.custom_fields.category_description[0];
	},
	
	getClientName: function(study) {
		var clientName = study.custom_fields.client[0];
		// replace space with dash, and lowercase
		clientName = clientName.toLowerCase().replace(/ /, "-");
		return clientName;
	}, 
	
	getLargeImageURL: function(study) {
		return study.attachments[0].url;
	}, 
	
	getSmallImageURL: function(study) {
		return study.attachments[1].url;
	}, 

	showCaseStudy: function(category, firstTime) {
		// Find the case study via the category
		var study, index;
		for (var i = this._data.length - 1; i >= 0; i--) {
			var cat = this.getCategory(this._data[i]);
			if (cat == category) {
				study = this._data[i];
				index = i;
				break;
			};
		};
		var container = $("#casestudy-content-sub"),
				imgContainer = $("#casestudy-images-sub"),
				category = this.getCategory(study), 
				categoryDescription = this.getCategoryDescription(study);

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
												
		// Switch out the Case Study: title and description
		$("#js-casestudies-header").text("CASE STUDY: " + category.toUpperCase());
		$("#js-casestudies-desc").text(categoryDescription);
	},

	getCaseStudyTemplate: function(studyData) {
		var template = 
			'<div class="casestudy-content-single" id="casestudy-content-' + this.getClientName(studyData) + '">' +
			'<img src="' + this.getSmallImageURL(studyData) + '" alt="' + studyData.title + '" class="casestudy-content-header" />' +
			'<h1>' + studyData.title + '</h1>' +
			'<p class="casestudy-body">' + studyData.content + '</p>' +
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