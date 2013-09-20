/*
 * These are common methods for all pages (home, blog landing, single blog, etc).
 */
$(document).ready(function () {

  var _shouldShowBigLogo = true,
      _self = this;

  cataCommon.init();

  // When the page scrolls past 100 px vertically, change the nav to mini version
  $(window).scroll(function (event) {

    var scrollPos = $(this).scrollTop();
//    console.log(scrollPos);

    if (scrollPos > 100) {
      $(".logo .logo--full").removeClass("show").addClass("hide");
      $(".logo .logo--partial").removeClass("hide").addClass("show");
      $(".mainnav, .header").addClass("compact");
      $("#header-drawer").removeClass("show peek hide").addClass("compact");
    } else {
      if (_shouldShowBigLogo) {
        $(".logo .logo--full").removeClass("hide").addClass("show");
        $(".logo .logo--partial").removeClass("show").addClass("hide");
      }

      $(".mainnav, .header").removeClass("compact");
      $("#header-drawer").removeClass("show peek hide compact").addClass("hide");
    }

  });

  // Check for which logo is showing 
  if (typeof(enquire) != 'undefined') {
    enquire.register("screen and (max-width: 720px)", {

      match: function () {
        _shouldShowBigLogo = false;
        $(".logo .logo--full").removeClass("show").addClass("hide");
        $(".logo .logo--partial").removeClass("hide").addClass("show");
      },

      unmatch: function () {
        _shouldShowBigLogo = true;
        $(".logo .logo--full").removeClass("hide").addClass("show");
        $(".logo .logo--partial").removeClass("show").addClass("hide");
      }

    });
  }

  // Change the nav on scroll
  var $navItems = $('#projects, #team, #contact, #donate');
  $navItems.waypoint(function(direction) {
    // Update the nav
    $('.mainnav-item').find('a').removeClass('active');
    $('#mainnav-' + $(this).attr('id')).find('a').addClass('active');
  });
  


  // -------------------------------------------------------------------------
  // INTRO SLIDESHOW
  // -------------------------------------------------------------------------

  $('#slides').slidesjs({
    width: 900,
    height: 506
  });


  // -------------------------------------------------------------------------
  // LOCATIONS MAP
  // -------------------------------------------------------------------------

  map.init();


  // -------------------------------------------------------------------------
  // TEAM
  // -------------------------------------------------------------------------

  // Make the team section
  var teamURL = "/api/get_posts/?post_type=teammember&custom_fields=level,job_title,company_name,excerpt,headshot,twitter_handle&count=20&callback=?";
  
  $.getJSON(teamURL, function (data, textStatus, jqXHR) {})
      .done(function (json) {
        console.log("Successfully loaded the team data.");
        team.init(json.posts, cataCommon.getRootURL());
      })
      .fail(function (jqxhr, textStatus, error) {
        console.log("There was an error loading the team json:");
        console.log(error);
      });

  
  // -------------------------------------------------------------------------
  // DONATIONS
  // -------------------------------------------------------------------------
  // Donations section
  donations.init();

});