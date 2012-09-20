
var casestudies = {

	_data: null,
	_activeIndex: 0,

	/*
	* Kick off the Case Studies. Pass in data array that represents the case studies.
	*/
	init: function(data) {
		this._data = data;
		this.showCaseStudy(this._activeIndex);

		var self = this;

		$("#casestudy-paddle-prev").click(function(event) {
			event.preventDefault();
			self.showCaseStudy(self.getPrevIndex());
			return false;
		});
		$("#casestudy-paddle-next").click(function(event) {
			event.preventDefault();
			self.showCaseStudy(self.getNextIndex());
			return false;
		});
	}, 

	showCaseStudy: function(index) {
		var study = this._data[index],
		container = $("#casestudy-content-sub");
		html = '<div class="casestudy-content-single" id="' + study.id + '">' +
						'<img src="' + study.headerImg + '" alt="' + study.title + '" class="casestudy-content-header" />' +
						'<h1>' + study.title + '</h1>' +
						'<p class="casestudy-body">' + study.body + '</p>' +
						'</div>';

		// container.empty();
		container.append(html);

		var offset = index*300+20;
		
		$("#"+study.id).css({left:offset});
		$(".casestudy-images").css({"background-image":"url(" + study.mainImg + ")"});

		// animate the container
		container.animate({
			left: -offset
		}, 500);
	}, 

	getNextIndex: function() {
		this._activeIndex++;
		if (this._activeIndex >= this._data.length) this._activeIndex = 0;
		console.log("active case study index: " + this._activeIndex);
		return this._activeIndex;
	},

	getPrevIndex: function() {
		this._activeIndex--;
		if (this._activeIndex < 0) this._activeIndex = this._data.length - 1;
		console.log("active case study index: " + this._activeIndex);
		return this._activeIndex;
	}
}