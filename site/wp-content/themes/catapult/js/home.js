
/*
* These are common methods for all pages (home, blog landing, single blog, etc).
*/
$(document).ready(function() {
	
	var _shouldShowBigLogo = true, 
			_self = this;
	
	cataCommon.init();
	keyofferings.init();
	
	// If there's a hash, intercept it so we can do our own scrolling
	function checkHash() {
		var hash = window.location.hash;
		if (hash != "") {
			window.scrollTo(0,0);
			cataCommon.handleNav(hash);
		}
	}
	
	// Main nav
	function handleMainNav() {
		var self = this;
		$(".mainnav-item:not(.blog) a, #what-we-do").click(function(event) {
			
			// if we're already on the homepage, just do the scrolling.
			// Otherwise, change URLs
			var href = $(this).attr("href");
			if (window.location.href.indexOf("blog/") != -1) {
				
			} else {
				event.preventDefault();
				href = href.substring(href.indexOf("#"), href.length);
				// console.log(href);
				cataCommon.handleNav(href);
				return false;
			}
		});
	}
	
	checkHash();
	handleMainNav();
	
	// When the page scrolls past 100 px vertically, change the nav to mini version
	$(window).scroll(function(event) {
		
		var scrollPos = $(this).scrollTop();
		// console.log(scrollPos);
		
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
			
			match: function() {
				_shouldShowBigLogo = false;
				$(".logo .logo--full").removeClass("show").addClass("hide");
				$(".logo .logo--partial").removeClass("hide").addClass("show");
			}, 
			
			unmatch: function() {
				_shouldShowBigLogo = true;
				$(".logo .logo--full").removeClass("hide").addClass("show");
				$(".logo .logo--partial").removeClass("show").addClass("hide");
			}
			
		});
	}
	
	// Change the nav on scroll
	$(window).scroll(function(event) {
		var scrollPos = $(this).scrollTop();
		// console.log(scrollPos);
		// Remove all active styles if it's in the intro
		if (scrollPos <= 589) {
			$(".mainnav-item a").removeClass("active");
		}
		// Projects (Case Studies)
		else if (scrollPos >= 590 && scrollPos <= 2000) {
			// Change first nav element
			$(".mainnav-item a").removeClass("active");
			$("#mainnav-projects a").addClass("active");
		}
		// Team
		else if (scrollPos >= 2001 && scrollPos <= 2916) {
			$(".mainnav-item a").removeClass("active");
			$("#mainnav-team a").addClass("active");
		}
		// Contact
		else if (scrollPos >= 2917 && scrollPos <= 3684) {
			$(".mainnav-item a").removeClass("active");
			$("#mainnav-contact a").addClass("active");
		}
		// Donate
		else if (scrollPos >= 3685) {
			$(".mainnav-item a").removeClass("active");
			$("#mainnav-donate a").addClass("active");
		}
	});
	
	// CenterTag.init("centerTagLocationsMap", cataCommon.getRootURL(), function() {
	// 	console.log("Center Tag is Ready!");
	// });


  // -------------------------------------------------------------------------
  // INTRO SLIDESHOW
  // -------------------------------------------------------------------------
  
  $('#slides').slidesjs({
    width: 900,
    height: 506
  });
  
  
  
//	intro.init(cataCommon.getRootURL() + "wp-content/themes/catapult/", function() {
//		
//    // Show Key Offerings buttons
//    $(".keyofferings").removeClass("hide");
//    
//    // Open News, but only if we're on the homepage, and only if we're at the top of the page
//		if (Number($("body").scrollTop()) < 100 && Modernizr.cssanimations) {
//			cataCommon.peekNews();
//			
//			setTimeout(function() {
//				cataCommon.hideNews();
//			}, 1500);
//		}
//	});
	
	// get case studies
	// var casestudiesURL = cataCommon.getRootURL() + '?json=get_recent_posts&dev=1&post_type=casestudy&custom_fields=category,category_description,client,main_image,header_image,display_order&meta_key=display_order&order_by=meta_value&order=ASC&Duration=0&callback=';
	// $.getJSON(casestudiesURL, 'jsonp', function(data, textStatus, jqXHR) {
	// 	console.log("Case Studies data: " + data);
	// 	if (data) {
	// 		casestudies.init(cataCommon.getRootURL() + "wp-content/themes/catapult/", data.posts);
	// 	} else {
	// 		$("#casestudies").hide();
	// 	}
	// })
	// .success(function() {
	// 	console.log("Successfully loaded the case studies.");
	// })
	// .error(function(error) {
	// 	console.log("There was an error loading the Case Studies. Error:");
	// 	console.log(error);
	// 	$("#casestudies").hide();
	// });
	
	//casestudies.init(null, null);
	
	// Locations Map
	//locations.init();
  
  
  // -------------------------------------------------------------------------
  // LOCATIONS MAP
  // -------------------------------------------------------------------------
  
  var map = new L.Map('locations-map', {
    scrollWheelZoom: false
  }).setView([13.662, 10.019], 2);
  L.tileLayer('http://{s}.tile.cloudmade.com/e92b182bf4084fa88391e1b310961939/103976/256/{z}/{x}/{y}.png', {
    maxZoom: 10
  }).addTo(map);

  var myIcon = L.icon({
    iconUrl: '/dev/wp-content/themes/catapult/js/libs/leaflet/images/marker-icon.png',
    iconRetinaUrl: '/dev/wp-content/themes/catapult/js/libs/leaflet/images/marker-icon.png',
    iconSize: [33, 39],
    iconAnchor: [16, 39],
    popupAnchor: [-3, -20],
    shadowUrl: '/dev/wp-content/themes/catapult/js/libs/leaflet/images/marker-shadow.png',
    shadowRetinaUrl: '/dev/wp-content/themes/catapult/js/libs/leaflet/images/marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [16, 39]
  });

  map.on('click', function(event) {
    console.log(event);
    hideMapMarker();
  });
  
  map.on('dragstart', function(event) {
    hideMapMarker();
  });
  
  var locsURL = cataCommon.getRootURL() + "?json=get_recent_posts&dev=1&post_type=casestudy&custom_fields=client,category,location,main_image&count=-1",
      markers = new L.MarkerClusterGroup(),
      caseStudiesData = {};
  
  $.getJSON(locsURL, handleLocationsLoaded);
  
  function handleLocationsLoaded(data, textStatus, jqXHR) {
    caseStudiesData = data.posts;
    for (var i = 0; i < data.posts.length; i++) {
      addMarker(data.posts[i]);
    }
    map.addLayer(markers);
  }
  
  function addMarker(data) {
    var loc = data.custom_fields.location;
    if (typeof loc !== 'undefined') {
      loc = loc[0];
      var latlon = loc.substring(loc.indexOf('|')+1, loc.length).split(',');
      var marker = new L.Marker([latlon[0], latlon[1]], {
        icon: myIcon,
        clickable: true,
        riseOnHover: true
      });
      markers.addLayer(marker);
      marker.cataInfo = data;

      marker.on('click', handleMarkerClick);
    }
  }

  // Filter project data by category
  function filterCasestudies(data, category) {
    return _.filter(data, function(post) {
      return post.custom_fields.category[0] == category;
    });
  }
  
  function redrawMarkersWithFilter(filter) {
    var filteredData = filter === 'all' ? caseStudiesData : filterCasestudies(caseStudiesData, filter);
    markers.clearLayers();
    for (var i = 0, len = filteredData.length; i < len; i++) {
      addMarker(filteredData[i]);
    }
    // Zoom back out to world view
    map.setZoom(2, {animate: true});
  }
  
  function handleMarkerClick(event) {
    console.log(event);
    console.log('Clicked on marker: ' + event.latlng);
    console.log("Marker coordinates: " + map.latLngToContainerPoint(event.latlng));
    console.log("Marker coordinates: " + map.latLngToLayerPoint(event.latlng));
    console.log("Marker coordinates: " + map.project(event.latlng));

    // Center map
    map.setView(event.latlng, map.getZoom(), {
      pan: {
        animate: true
      },
      zoom: {
        animate: true
      }
    });

    showMapCallout(event.target.cataInfo);
  }
  
  function showMapCallout(data) {
    var callout = $('#map-callout');
    callout.removeClass('hide');
    
    // populate callout
    var img = $('<img src="' + data.attachments[0].images.thumbnail.url + '" />'),
        loc = data.custom_fields.location[0];
    
    loc = loc.substring(0, loc.indexOf('|'));
    
    console.log("location: " + loc);
    callout.find('.map-callout-img').append(img);
    callout.find('h2').append(data.title);
    callout.find('h3').append(loc);
    callout.find('p').append(data.excerpt);
  }
  
  function hideMapMarker() {
    var callout = $('#map-callout');
    callout.addClass('hide');
    callout.find('img').remove();
    callout.find('h2').empty();
    callout.find('h3').empty();
    callout.find('p').empty();
  }

  $('#map-callout').find('.close-button').on('click', function(event) {
    event.preventDefault();
    hideMapMarker();
  });
  
  // Deal with filtering
  $('#js-location-filter-all').on('click', function(event) {
    if (typeof event !== 'undefined') event.preventDefault();
    // Turn off all markers
    $('.location-filter').each(function() {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
    redrawMarkersWithFilter('all');
  });
  $('#js-location-filter-water').on('click', function(event) {
    if (typeof event !== 'undefined') event.preventDefault();
    $('.location-filter').each(function() {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
    redrawMarkersWithFilter('water');
  });
  $('#js-location-filter-enterprise').on('click', function(event) {
    if (typeof event !== 'undefined') event.preventDefault();
    $('.location-filter').each(function() {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
    redrawMarkersWithFilter('enterprise');
  });
  $('#js-location-filter-energy').on('click', function(event) {
    if (typeof event !== 'undefined') event.preventDefault();
    $('.location-filter').each(function() {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
    redrawMarkersWithFilter('energy');
  });
  $('#js-location-filter-health').on('click', function(event) {
    if (typeof event !== 'undefined') event.preventDefault();
    $('.location-filter').each(function() {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
    redrawMarkersWithFilter('health');
  });
  $('#js-location-filter-mobility').on('click', function(event) {
    if (typeof event !== 'undefined') event.preventDefault();
    $('.location-filter').each(function() {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
    redrawMarkersWithFilter('mobility');
  });



  // -------------------------------------------------------------------------
  // TEAM
  // -------------------------------------------------------------------------
  
	// Make the team section
	var teamURL = cataCommon.getRootURL() + "?json=get_recent_posts&dev=1&post_type=teammember&custom_fields=level,job_title,company_name,excerpt,headshot,twitter_handle&count=20";
	$.getJSON(teamURL, function(data, textStatus, jqXHR) {
		team.init(data.posts, cataCommon.getRootURL());
	}).success(function() {
		console.log("Successfully loaded the team data.");
	})
	.error(function(error) {
		console.log("There was an error loading the team json:");
		console.log(error);
	});
	
	// Events section
	events.init();
	
	// Partners Section
	partners.init();
	
	// Donations section
	donations.init();
	
});