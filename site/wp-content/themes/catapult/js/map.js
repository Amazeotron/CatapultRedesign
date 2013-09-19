var map = {
  
  init: function() {

    var _map = new L.Map('locations-map', {
      scrollWheelZoom: false
    }).setView([13.662, 10.019], 2);
    L.tileLayer('http://{s}.tile.cloudmade.com/e92b182bf4084fa88391e1b310961939/103976/256/{z}/{x}/{y}.png', {
      maxZoom: 10
    }).addTo(_map);

    var _callout = $('#map-callout');

    var _mapIcon = L.icon({
          iconUrl: '/wp-content/themes/catapult/js/libs/leaflet/images/marker-icon.png',
          iconRetinaUrl: '/wp-content/themes/catapult/js/libs/leaflet/images/marker-icon.png',
          iconSize: [33, 39],
          iconAnchor: [16, 39],
          popupAnchor: [-3, -20],
          shadowUrl: '/wp-content/themes/catapult/js/libs/leaflet/images/marker-shadow.png',
          shadowRetinaUrl: '/wp-content/themes/catapult/js/libs/leaflet/images/marker-shadow.png',
          shadowSize: [41, 41],
          shadowAnchor: [16, 39]
        }),
        _locsURL = "/api/get_posts/?post_type=project&custom_fields=client_name,disabled,slug,category,locations,image&count=-1&callback=?",
        _markers = new L.MarkerClusterGroup(),
        _projectsData = {};
    
    _map.on('click', function(event) {
      console.log(event);
      hideMapCallout();
    });

    _map.on('dragstart', function(event) {
      hideMapCallout();
    });

    _map.on('zoomstart', function(event) {
      hideMapCallout();
    });

    $.getJSON(_locsURL, handleLocationsLoaded);

    function handleLocationsLoaded(data, textStatus, jqXHR) {
      _projectsData = data.posts;
      
      // Look for projects that have multiple locations. For each location, duplicate the project.
      var dupes = [];
      _.each(_projectsData, function(elem, index) {
        if (elem.acf.locations && elem.acf.locations.length) {
          _.each(elem.acf.locations, function(elem2, index2) {
            // Make a copy of this item
            var copy = _.clone(elem);
            copy.location = {
              address: elem2.location.address,
              coordinates: elem2.location.coordinates
            };
            dupes.push(copy);
          });
        }
      });
      _projectsData = dupes;
      
      for (var i = 0; i < _projectsData.length; i++) {
        addMarker(_projectsData[i]);
      }
      _map.addLayer(_markers);
    }

    function addMarker(data) {
      var loc = data.location;
      if (typeof loc !== 'undefined') {
        var latlon = loc.coordinates.split(',');
        var marker = new L.Marker([latlon[0], latlon[1]], {
          icon: _mapIcon,
          clickable: true,
          riseOnHover: true
        });
        _markers.addLayer(marker);
        marker.cataInfo = data;
        marker.on('click', handleMarkerClick);
      }
    }

    // Filter project data by category
    function filterCasestudies(data, category) {
      return _.filter(data, function(post) {
        return post.categories[0].slug == category;
      });
    }

    function redrawMarkersWithFilter(filter) {
      var filteredData = filter === 'all' ? _projectsData : filterCasestudies(_projectsData, filter);
      console.log('filter: ' + filter);
      if ($('.leaflet-marker-icon').length > 0) {
        $('.leaflet-marker-icon, .leaflet-marker-shadow').transition({opacity: 0}, 300, function() {
          redrawMarkerDone(filteredData);
        });
      } else {
        redrawMarkerDone(filteredData);
      }
    }
    
    function redrawMarkerDone(filteredData) {
      _markers.clearLayers();

      for (var i = 0, len = filteredData.length; i < len; i++) {
        addMarker(filteredData[i]);
      }
      // Zoom back out to world view
      _map.setZoom(2, {animate: true});
    }

    function handleMarkerClick(event) {
      console.log(event);
      console.log('Clicked on marker: ' + event.latlng);
      console.log("Marker coordinates: " + _map.latLngToContainerPoint(event.latlng));
      console.log("Marker coordinates: " + _map.latLngToLayerPoint(event.latlng));
      console.log("Marker coordinates: " + _map.project(event.latlng));

      // Center _map
      _map.setView(event.latlng, _map.getZoom(), {
        pan: {
          animate: true
        },
        zoom: {
          animate: true
        }
      });

      hideMapCallout();
      showMapCallout(event.target.cataInfo);
    }

    function showMapCallout(data) {
      _callout.removeClass('hide');

      // populate callout
      var img = $('<img src="/wp-content/themes/catapult/getimageurl.php?imageID=' + data.custom_fields.image[0] + '" />'),
          loc = data.location.address,
          $h2 = _callout.find('h2');

      // Remove previous link, if one
      if ($h2.parent().is('a')) $h2.unwrap();
      // If the link isn't disabled, add it
      if (typeof data.custom_fields.disabled !== 'undefined' && data.custom_fields.disabled[0] === '0') {
        var $link = $('<a href="' + data.url + '" id="js-map-callout-link"></a>');
        $h2.wrap($link);
      }
      _callout.find('.map-callout-img').append(img);
      $h2.append(data.title);
      _callout.find('h3').append(loc);
      if (typeof data.custom_fields.slug !== 'undefined') _callout.find('p').append(data.custom_fields.slug);
    }

    function hideMapCallout() {
      _callout.addClass('hide');
      _callout.find('img').remove();
      _callout.find('h2').empty();
      _callout.find('h3').empty();
      _callout.find('p').empty();
    }

    _callout.find('.close-button').on('click', function(event) {
      event.preventDefault();
      hideMapCallout();
    });
    
    // Deal with filtering
    $('#js-location-filter-all, #js-location-filter-energy, #js-location-filter-enterprise, #js-location-filter-health-agriculture, #js-location-filter-mobility, #js-location-filter-water-sanitation').on('click', function(event) {
      if (typeof event !== 'undefined') event.preventDefault();
      // Turn off all _markers
      $('.location-filter').removeClass('active');
      $(this).addClass('active');
      
      redrawMarkersWithFilter($(this).data('tag'));
    });
  }

  


  
};