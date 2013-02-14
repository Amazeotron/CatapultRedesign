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
	_rootURL: "",
	_swipe: null, 
	_imgSwipe: null, 

	/*
	* Kick off the Case Studies. Pass in data array that represents the case studies.
	*/
	init: function(rootURL, data) {
		this._rootURL = rootURL;
		this._data = data;
		this._numItems = this._data.length;
		this._container = $(".casestudies");

		var self = this
		    paddlePrev = $("#casestudy-paddle-prev"),
		    paddleNext = $("#casestudy-paddle-next"),
		    paddleBoth = $("#casestudy-paddle-prev, #casestudy-paddle-next");
		
		paddlePrev.click(function(event) {
			event.preventDefault();
			
			if ($(this).hasClass("disabled")) return;
			
			self._swipe.prev();
			self._imgSwipe.prev();
			
			return false;
		});
		paddleNext.click(function(event) {
			event.preventDefault();
			
			if ($(this).hasClass("disabled")) return;
			
			self._swipe.next();
			self._imgSwipe.next();
			
			return false;
		});

		// preload all images.
		// Create compatible array
		var imgData = [];
		for (var i = 0, len = this._numItems; i < len; i++) {
			//imgData[i] = {imgURL:this._data[i].main_image_path};
			imgData[i] = {imgURL:this._data[i].attachments[0].images.full.url};
		}
		var preload = new ImagePreloader();
		preload.init(imgData, function() { self.contentLoaded(); });
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
			// $("#casestudy-content-"+clientName).css({left:this.getContentOffset(i)});
			imgContainer.append('<li><img src="' + largeImageURL + '" id="casestudy-image-' + clientName + '" /></li>');
			// $("#casestudy-image-"+clientName).css({left:this.getImageOffset(i)});
		}
		
		this._swipe = new Swipe($("#casestudy-content")[0], { callback: this.swipeDone, callbackScope: this });
		this._imgSwipe = new Swipe($("#casestudy-images")[0], { canDrag:false });
	},
	
	swipeDone: function(event, index, content, scope) {
		// If the indices don't match, move the images
		
		console.log("swipe index: " + index);
		console.log("imgswipe index: " + scope._imgSwipe.getPos());
		
		if (index == scope._imgSwipe.getPos()) return;
		
		if (scope._swipe.getPos() < scope._imgSwipe.getPos()) {
			scope._imgSwipe.prev();
		} else {
			scope._imgSwipe.next();
		}
	},
	
	getCategory: function(study) {
		var cat = study.custom_fields.category[0];
		return cat;
	}, 
	
	getCategoryDescription: function(study) {
		return study.custom_fields.category_description[0];
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

	showCaseStudy: function(category, firstTime) {
		console.log("Showing Case Study: " + category);
		// Find the case study via the category
		var study, index;
		for (var i = this._numItems - 1; i >= 0; i--) {
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
		
		container.css({left:"-" + this.getContentOffset(index)});
		imgContainer.css({left:"-" + this.getImageOffset(index)});

		// Highlight proper category button
		$(".keyofferings-list-item a").removeClass("active");
		var what = $("#"+category);
		// Add the active class to the proper anchor
		what.find("a").addClass("active");

		// Do background switch
		// var bgURL = "url(" + this._rootURL + "img/homepage/casestudies/bgtile-" + category + ".png)";
		// console.log("Switching background: " + bgURL);
		// $("#casestudies-bg").css({"background-image": "none", "opacity":0})
		// 										.css({"background-image": bgURL})
		// 										.delay(400)
		// 										.animate({ opacity: 1 }, 500);
												
		// Switch out the Case Study: title and description
		// Replace any dashes with spaces, because this is the display name
		// $("#js-casestudies-header").text("CASE STUDY: " + category.replace(/-/gi, " ").toUpperCase());
		$("#js-casestudies-desc").text(categoryDescription);
		
		// Update the center tag
		CenterTag.update(category);
		
		// If the active index is equal to the number of case studies, or 0, disable the appropriate paddle.
		// Otherwise, enable it
		var prevPaddle = $("#casestudy-paddle-prev");
		var nextPaddle = $("#casestudy-paddle-next");
		prevPaddle.removeClass("disabled");
		nextPaddle.removeClass("disabled");
		
		if (this._activeIndex >= this._numItems-1) {
			// disable next paddle
			nextPaddle.addClass("disabled");
		} else if (this._activeIndex <= 0) {
			// disable prev paddle
			prevPaddle.addClass("disabled");
		}
	},

	getCaseStudyTemplate: function(studyData) {
		var template = 
			'<li class="casestudy-content-single" id="casestudy-content-' + this.getClientName(studyData) + '">' +
			'<img src="' + this.getSmallImageURL(studyData) + '" alt="' + studyData.title + '" class="casestudy-content-header" />' +
			'<h1 class="header-title">' + studyData.title + '</h1>' +
			'<p class="casestudy-body">' + studyData.content + '</p>' +
			'</li>';
			return template;
	},

	getContentOffset: function(index) {
		//return index*393+20;
		return (index * 100) + "%";
	},

	getImageOffset: function(index) {
		return index*901;
	},
	
	updateIndexTo: function(index) {
		this._lastIndex = this._activeIndex;
		this._activeIndex = index;
		this._activeIndex = Math.max(0, Math.min(this._activeIndex, this._numItems-1));
		console.log("active case study index: " + this._activeIndex);
	},

	getNextIndex: function() {
		this._lastIndex = this._activeIndex;
		this._activeIndex++;
		this._activeIndex = Math.min(this._activeIndex, this._numItems-1);
		console.log("active case study index: " + this._activeIndex);
		return this._activeIndex;
	},

	getPrevIndex: function() {
		this._lastIndex = this._activeIndex;
		this._activeIndex--;
		this._activeIndex = Math.max(this._activeIndex, 0);
		console.log("active case study index: " + this._activeIndex);
		return this._activeIndex;
	}
}