
var casestudies = {

	_data: null,
	_activeIndex: 0,

	/*
	* Kick off the Case Studies. Pass in data array that represents the case studies.
	*/
	init: function(data) {
		this._data = data;
		this.showCaseStudy(this._activeIndex);
	}, 

	showCaseStudy: function(index) {
		var study = this._data[index],
		container = $("#casestudies-container"),
		self = this,
		html = '<article class="casestudy row" id="' + study.id + '">' +
		'<div class="casestudy-images"></div>' +
		'<div class="casestudy-content">' +
		'<ul class="paddles">' +
		'<li class="paddle prev"><a href="#" id="casestudy-paddle-prev">Prev</a></li>' +
		'<li class="paddle next"><a href="#" id="casestudy-paddle-next">Next</a></li>' +
		'</ul>' +
		'<img src="' + study.headerImg + '" alt="' + study.title + '" class="casestudy-content-header" />' +
		'<h1>' + study.title + '</h1>' +
		'<div class="casestudy-body">' + study.body + '</div>' +
		'</div>' +
		'</article>';

		container.empty();
		container.append(html);
		$("#"+study.id + " .casestudy-images").css({"background-image":"url(" + study.mainImg + ")"});
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