/*
* This object depends on the Swipe lib. Make sure it's loaded before using.
*/
var casestudies = {

	_data: null,
	_activeIndex: 0,
	_lastIndex: 0,
	_numItems: 0,
	_container: null,
	_prevPaddle: $("#casestudy-paddle-prev"), 
	_nextPaddle: $("#casestudy-paddle-next"), 
	_imgContainer: null,
	_contentContainer: null,
	_rootURL: "",
	_swipe: null, 

	/*
	* Kick off the Case Studies. Pass in data array that represents the case studies.
	*/
	init: function(rootURL, data) {
		this._rootURL = rootURL;
		this._data = data;
		this._numItems = this._data.length;
		this._container = $(".casestudies");
		this._imgContainer = $("#casestudy-images-sub");
		this._contentContainer = $("#casestudy-content-sub");

		var self = this
		    paddlePrev = $("#casestudy-paddle-prev"),
		    paddleNext = $("#casestudy-paddle-next"),
		    paddleBoth = $("#casestudy-paddle-prev, #casestudy-paddle-next");
		
		paddlePrev.click(function(event) {
			event.preventDefault();
			
			if ($(this).hasClass("disabled")) return;
			
			self._swipe.prev();
			
			return false;
		});
		paddleNext.click(function(event) {
			event.preventDefault();
			
			if ($(this).hasClass("disabled")) return;
			
			self._swipe.next();
			
			return false;
		});

		// preload all images.
		// Create compatible array
		var imgData = [];
		for (var i = 0, len = this._numItems; i < len; i++) {
			imgData[i] = {imgURL:this._data[i].attachments[0].images.full.url};
		}
		var preload = new ImagePreloader();
		preload.init(imgData, function() { self.contentLoaded(); });
	},

	contentLoaded: function() {
		// Draw out all the content
		for (var i = 0; i < this._numItems; i++) {
			var study = this._data[i];
			this._contentContainer.append(this.getCaseStudyTemplate(study, i));
			this._imgContainer.append(this.getLargeImageTemplate(study, i));
		}
		
		this._swipe = new Swipe($("#casestudy-content")[0], { callback: this.swipeDone, callbackScope: this });
	},
	
	swipeDone: function(event, index, content, scope) {
		
		// If the indices don't match, move the images
		// if (index == scope._imgSwipe.getPos()) return;
		
		// if (scope._swipe.getPos() < scope._imgSwipe.getPos()) {
		// 	scope._imgSwipe.prev();
		// } else {
		// 	scope._imgSwipe.next();
		// }
		
		// Fade in/out background images.
		// Get the image that is fading in
		casestudies._imgContainer.find("li img").removeClass("show").addClass("hide");
		var activeImage = casestudies._imgContainer.find("li").map(function(__index, domElement) {
			var _index = $(this).data("index");
			if (_index === index) {
				return domElement;
			} else {
				return null;
			}
		}).find("img");
		activeImage.removeClass("hide").addClass("show");
	}, 
	
	getClientName: function(study) {
		var clientName = study.custom_fields.client[0];
		// replace space with dash, and lowercase
		clientName = clientName.toLowerCase().replace(/ /gi, "-");
		return clientName;
	}, 
	
	getLargeImageURL: function(study) {
		// match the attached image with the custom field image
		var mainImageID = study.custom_fields.main_image[0],
				imgURL = '';
		for (var i = 0; i < study.attachments.length; i++) {
			var imgId = study.attachments[i].id;
			if (mainImageID == imgId) {
				imgURL = study.attachments[i].images.full.url;
			}
		};
		
		return imgURL;
	}, 
	
	getSmallImageURL: function(study) {
		// match the attached image with the custom field image
		var mainImageID = study.custom_fields.header_image[0],
				imgURL = '';
		for (var i = 0; i < study.attachments.length; i++) {
			var imgId = study.attachments[i].id;
			if (mainImageID == imgId) {
				imgURL = study.attachments[i].images.full.url;
			}
		};
		
		return imgURL;
	}, 

	getCaseStudyTemplate: function(studyData, index) {
		var template = 
			'<li class="casestudy-content-single" id="casestudy-content-' + this.getClientName(studyData) + '" data-index="' + index + '">' +
			'<figure class="casestudy-content-figure">' + 
			'<img src="' + this.getSmallImageURL(studyData) + '" alt="' + studyData.title + '" class="casestudy-content-header" />' +
			'</figure>' + 
			'<h1 class="header-title">' + studyData.title + '</h1>' +
			'<p class="casestudy-body">' + studyData.content + '</p>' +
			'</li>';
			return template;
	}, 
	
	getLargeImageTemplate: function(studyData, index) {
		var template = '<li data-index="' + index + '"><img class="casestudy-image ' + (index === 0 ? "show" : "hide") + '" src="' + this.getLargeImageURL(studyData) + '" id="casestudy-image-' + this.getClientName(studyData) + '" /></li>';
		return template;
	}
}