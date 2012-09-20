
var casestudies = {

	_data: null,
	_activeIndex: 0,
	_lastIndex: 0,

	/*
	* Kick off the Case Studies. Pass in data array that represents the case studies.
	*/
	init: function(data) {
		this._data = data;
		this.showCaseStudy(this._activeIndex, true);

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
			$(".keyofferings-list-item a").removeClass("active");
			$(this).addClass("active");
			$(".casestudies").removeClass("engineering ideation innovation education insights systhink");
			$(".casestudies").addClass($(this).attr("class"));
		});
	}, 

	showCaseStudy: function(index, firstTime) {
		var study = this._data[index],
		container = $("#casestudy-content-sub"),
		imgContainer = $("#casestudy-images-sub"),
		html = '<div class="casestudy-content-single" id="' + study.id + '">' +
						'<img src="' + study.headerImg + '" alt="' + study.title + '" class="casestudy-content-header" />' +
						'<h1>' + study.title + '</h1>' +
						'<p class="casestudy-body">' + study.body + '</p>' +
						'</div>',
		self = this;

		var bodyOffset = index*393+20, 
		imgId = 'IMG-'+study.id,
		imgOffset = index*900;
		
		// animate the container
		container.append(html);
		$("#"+study.id).css({left:bodyOffset});
		container.css({left:-bodyOffset});

		// Animate the large image
		imgContainer.append('<img src="' + study.mainImg + '" id="' + imgId + '" />');
		$("#"+imgId).css({left:imgOffset});
		imgContainer.css({left:-imgOffset});

		// Remove old content after delay
		if (firstTime === false) {
			setTimeout(function() {
				var lastId = "#"+self._data[self._lastIndex].id;
				$(lastId).remove();
			}, 500);
		}
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