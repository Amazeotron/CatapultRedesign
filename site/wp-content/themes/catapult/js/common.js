var cataCommon = {

  // Call this on page load, preferably on $()ready().
  init: function () {
    console.log("common init");
    this.handleHeader();
    this.handleSocial();

    $(document).on("click touchstart", "#overlay-close-button, .overlay-bg", function (event) {
      event.preventDefault();
      $(".overlay").removeClass("show").addClass("hide");
    });

    $('footer').waypoint(function(direction) {
      if (direction === 'down') {
        $('.floater.social').css({'display': 'none'});
      } else {
        $('.floater.social').css({'display': ''});
      }
    }, {
      offset: $(window).height()
    });
  },

  getRootURL: function () {
    if (window.location.href.indexOf(":8888") != -1) {
      return "http://llmac.local:8888/cata/"; // testing
    } else {
      return "http://catapult.staging.wpengine.com/"; // development
      // return "http://catapultdesign.org/"; // live
    }
  },

  hideNews: function () {
    this.getDrawerDiv().removeClass("show peek hide").addClass("hide");
  },

  showNews: function () {
    this.getDrawerDiv().removeClass("hide peek show").addClass("show");
  },

  peekNews: function () {
    this.getDrawerDiv().removeClass("hide peek show").addClass("peek");
  },

  isHome: function () {
    // remove the hash
    var loc = "";
    if (window.location.href.indexOf("#") == -1) {
      loc = window.location.href;
    } else {
      loc = window.location.href.substring(0, window.location.href.indexOf("#"));
    }
    console.log(loc);
    return loc == cataCommon.getRootURL();
  },

  handleNav: function (target) {
    // Scroll positions for the sections
    var scrollPositions = [
          {section: "#projects", offset: 1054},
          {section: "#team",     offset: 1755},
          {section: "#contact",  offset: 2847},
          {section: "#donate",   offset: 3400}
        ],
        scrollTop = 0;

    for (var i = scrollPositions.length - 1; i >= 0; i--) {
      if (scrollPositions[i].section == target) {
        scrollTop = scrollPositions[i].offset;
      }
    }

    // Update the URL
    if (cataCommon.isHome() === true) {
      window.location.hash = target;
    } else {
      window.location.href = cataCommon.getRootURL() + target;
    }

    $("html, body").animate({scrollTop: scrollTop}, 500);
  },

  loadJobs: function () {
    var jobs = new ParsePostType();
    jobs.init(getRootURL() + "?json=get_recent_posts&dev=1&post_type=job", function (jobs) {
      console.log("Jobs have loaded");
    });
  },

  getDrawerDiv: function () {
    return $("#header-drawer");
  },

  // Header
  handleHeader: function () {
    var self = this;
    this.getDrawerDiv().on("webkitTransitionEnd transitionend", function (event) {
    });

    $("#header-center-tag").click(function (event) {
      event.preventDefault();
      if (self.getDrawerDiv().hasClass("show")) {
        self.hideNews(self.getDrawerDiv());
      } else {
        self.showNews(self.getDrawerDiv());
      }
      return false;
    });
  },

  // Handle the social buttons
  handleSocial: function () {
    $(".social .social-button").hover(function () {
      $(this).find("span").addClass("hover");
    }, function () {
      $(this).find("span").removeClass("hover");
    });
  }
};