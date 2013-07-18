var locations = {

  _locationData: null,
  _locationsDiv: null, 
  _content: null,
  _markers: null,
  _isOpen: false,
  _hasLoadedLocations: false,
  _callout: null,

  init: function() {
    
    this._locationsDiv = $("#locations");
    this._content = $("#js-locations-content");
    this._markers = $(".locations-markers");
    var self = this;
    
    $(window).resize(function() {
      if (self._isOpen) {
        self.open(); // Call this to make the _content height correct.
        self._repositionLocations(self._locationData);
      }
    });
    
    $(document).on("click", "#locations-center-tag, #locations .close-button", function(event) {
      event.preventDefault();
      (self._isOpen) ? self.close() : self.open();
      return false;
    });
    
    this._content.on("webkitTransitionEnd transitionend", function(event) {
      self.showLocs();
    });
    
    // make the background scroll when page scrolls
    $(window).scroll(function(event) {
      var scrollPos = $(this).scrollTop()
          offsetTop = scrollPos - 2214;
      if (!self._isOpen && offsetTop < 0 && offsetTop > -1200) {
        self._locationsDiv.css({"background-position-y" : (offsetTop * 0.2) + "px"});
      } else {
        self._locationsDiv.css({"background-position-y" : "0px"});
      }
    });
    
    self.close();
    
  },
  
  showLocs: function() {
    if (this._isOpen === true) {
      $("#locations-center-tag").removeClass("closed").addClass("open");
      if (this._hasLoadedLocations === false) {
        this.loadLocations();
      }
    } else {
      
      $("#locations-center-tag").removeClass("open").addClass("closed");
    }
  }, 
  
  loadLocations: function() {
    //"wp-content/themes/catapult/getjson.php?json=locations-json&callback="
    var self = this, 
        url = cataCommon.getRootURL() + "wp-content/themes/catapult/json/locations.json";
    $.getJSON(url, 'jsonp', function(data, textStatus, jqXHR) {
      self._locationData = data.locations;
      self.showLocations();
      self._repositionLocations(self._locationData);
      self._hasLoadedLocations = true;
    });
  }, 
  
  open: function() {
    this._isOpen = true;
    
    if (Modernizr.cssanimations === false) {
      this.showLocs();
    }
    
    this._content.css({height:this._getHeight("open")+"px"});
    $("#locations .close-button").show();
  }, 
  
  close: function() {
    this._isOpen = false;
    this._content.css({height:this._getHeight("closed")+"px"});
    $("#locations .close-button").hide();
    this._removeCallout();
  }, 
  
  showLocations: function() {
    this._layoutLocations(this._locationData);
  }, 
  
  // Returns the world map width / height
  _getRatio: function() {
    // return 473.0 / 951.0; // Actual ratio, which is 0.4973711882
    return 0.4970896391; // What the browser is setting
  }, 
  
  _getHeight: function(state) {
    if (state == "open") {
      return $("body").width() * this._getRatio();
    } else if (state == "closed") {
      return 2;
    }
    return 0;
  }, 

  _layoutLocations: function(locations) {
    var self = this,
        wid = window.getComputedStyle(document.getElementById("locations")).width.split("px")[0],
        xRatio = wid / 941.0;
        yRatio = (wid * self._getRatio()) / 463.0;
        
    $(locations).each(function(index, item) {
      var xPos = item.xPos * xRatio, 
          yPos = item.yPos * yRatio,
          marker = $('<a href="#" class="marker" data-index="' + index + '">' + 
        '<h2 class="header-title hide">' + item.name + '<br/>' + 
        item.location + '</h2>' + 
        '</a>');
      marker.css({
        "left": xPos,
        "top": yPos
      });
      marker.addClass("show");
      self._markers.append(marker);
    });
    
    // Handle clicking on the markers
    // This is done here because the markers are now in the DOM
    $(".marker").on("click", function(event) {
      event.preventDefault();
      self._showCallout($(this));
      return false;
    });
  }, 
  
  _getCallout: function(xPos, yPos, content) {
    var callout = $('<div id="js-callout" class="callout"><a href="#" class="callout__close" id="js-callout-close">X</a></div>');
    callout
      .css({"left":xPos, "top":yPos})
      .append(content);
    return callout;
  },
  
  _showCallout: function(target) {
    // Create the callout
    var xPos = target.css("left").split("px")[0] - 16,
        yPos = target.css("top").split("px")[0] - 72,
        content = target.html(),
        self = this;
    
    // If there's already a callout, remove it
    this._removeCallout();
    this._callout = $("#js-callout");
    this._callout = this._getCallout(xPos + "px", yPos + "px", content);
    this._locationsDiv.append(this._callout);
    this._callout.css({'transition-duration': '0ms', 'transform': 'rotateX(90deg)'});
    this._callout.css({'transition-duration': '350ms', 'transition-property': 'rotation', 'transform-origin': '25px 65px'}).parent().css({'perspective': '1000', 'transform-style': 'preserve3d'});
    setTimeout(function() {
      self._callout.css({'transform': 'rotateX(0deg)'});
    }, 20);
    
    $("#js-callout-close").on("click", function(event) {
      event.preventDefault();
      self._removeCallout();
      return false;
    });
    
    // Set the width of the callout based on the h2
    this._callout.width(this._callout.find("h2").width() + 20);
  },
  
  _removeCallout: function() {
    if (this._callout != null) {
      this._callout.remove();
      this._callout = null;
    }
  }, 

  _repositionLocations: function(locations) {
    var wid = Number(window.getComputedStyle(document.getElementById("locations")).width.split("px")[0]),
        xRatio = wid / 941.0,
        yRatio = (wid * this._getRatio()) / 463.0;
        
    $(".locations-markers").children().each(function(index, item) {
      var obj = locations[index],
      xPos = obj.xPos * xRatio,
      yPos = obj.yPos * yRatio;
      $(item).css({
        "left": xPos, 
        "top": yPos
      });
    });
  }
}