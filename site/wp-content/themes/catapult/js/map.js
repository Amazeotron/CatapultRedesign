var map = {
  
  init: function() {

    var _map = new L.Map('locations-map', {
      scrollWheelZoom: false
    }).setView([13.662, 10.019], 2);
    L.tileLayer('http://{s}.tile.cloudmade.com/e92b182bf4084fa88391e1b310961939/103976/256/{z}/{x}/{y}.png', {
      maxZoom: 10
    }).addTo(_map);

    var _mapIcon = L.icon({
          iconUrl: '/dev/wp-content/themes/catapult/js/libs/leaflet/images/marker-icon.png',
          iconRetinaUrl: '/dev/wp-content/themes/catapult/js/libs/leaflet/images/marker-icon.png',
          iconSize: [33, 39],
          iconAnchor: [16, 39],
          popupAnchor: [-3, -20],
          shadowUrl: '/dev/wp-content/themes/catapult/js/libs/leaflet/images/marker-shadow.png',
          shadowRetinaUrl: '/dev/wp-content/themes/catapult/js/libs/leaflet/images/marker-shadow.png',
          shadowSize: [41, 41],
          shadowAnchor: [16, 39]
        }),
        _locsURL = cataCommon.getRootURL() + "?json=get_recent_posts&dev=1&post_type=casestudy&custom_fields=client,category,location,main_image&count=-1",
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
      for (var i = 0; i < data.posts.length; i++) {
        addMarker(data.posts[i]);
      }
      _map.addLayer(_markers);
    }

    function addMarker(data) {
      var loc = data.custom_fields.location;
      if (typeof loc !== 'undefined') {
        loc = loc[0];
        var latlon = loc.substring(loc.indexOf('|')+1, loc.length).split(',');
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
        return post.custom_fields.category[0] == category;
      });
    }

    function redrawMarkersWithFilter(filter) {
      var filteredData = filter === 'all' ? _projectsData : filterCasestudies(_projectsData, filter);
      
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
      var callout = $('#_map-callout');

      callout.removeClass('hide');

      // populate callout
      var img = $('<img src="' + data.attachments[0].images.thumbnail.url + '" />'),
          loc = data.custom_fields.location[0];

      loc = loc.substring(0, loc.indexOf('|'));

      console.log("location: " + loc);
      callout.find('._map-callout-img').append(img);
      callout.find('h2').append(data.title);
      callout.find('h3').append(loc);
      callout.find('p').append(data.excerpt);
    }

    function hideMapCallout() {
      var callout = $('#_map-callout');
      callout.addClass('hide');
      callout.find('img').remove();
      callout.find('h2').empty();
      callout.find('h3').empty();
      callout.find('p').empty();
    }

    $('#_map-callout').find('.close-button').on('click', function(event) {
      event.preventDefault();
      hideMapCallout();
    });
    
    // Deal with filtering
    $('#js-location-filter-all, #js-location-filter-water, #js-location-filter-enterprise, #js-location-filter-energy, #js-location-filter-health, ' +
        '#js-location-filter-mobility').on('click', function(event) {
      if (typeof event !== 'undefined') event.preventDefault();
      // Turn off all _markers
      $('.location-filter').removeClass('active');
      $(this).addClass('active');
      
      redrawMarkersWithFilter($(this).data('tag'));
    });
  }

  


  
};