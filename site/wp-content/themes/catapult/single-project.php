<?php get_header();
the_post(); ?>

  <div id="page-wrap" class="page-top">
    <? include(ABSPATH . 'wp-content/themes/catapult/inc/posts-landing-header.php'); ?>
    <section id="main-section">
      <div id="posts">
        <article class="post">

          <header class="post-top">
            <h1 class="post-title header-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
          </header>

          <? if (get_field('locations')) : ?>
            <? 
            $locations = get_field('locations'); 
            $firstAddress = $locations[0]['location']['address'];
            ?>
            
            <h3>Project Location: <? echo $firstAddress; ?></h3>
            <div class="post-map"></div>
            <div id="locations-map"></div>

            <script type="text/javascript">
              $(document).ready(function() {
                var coordinates = [];
                <? 
                foreach ($locations as $location) : ?>
                coordinates.push("<?php echo $location['location']['coordinates']; ?>");
                <? endforeach; ?>
                var _map = new L.Map('locations-map', {
                  scrollWheelZoom: false
                });
                
                _map.setView(coordinates[0].split(','), 4);
                L.tileLayer('http://{s}.tile.cloudmade.com/e92b182bf4084fa88391e1b310961939/103976/256/{z}/{x}/{y}.png', {
                  maxZoom: 10
                }).addTo(_map);

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
                });

                for (var i = 0; i < coordinates.length; i++) {
                  addMarker(coordinates[i]);
                }

                function addMarker(data) {
                  var latlon = data.split(',');
                  var marker = new L.Marker([latlon[0], latlon[1]], {
                    icon: _mapIcon,
                    clickable: false,
                    riseOnHover: false
                  });
                  _map.addLayer(marker);
                }
                
              });
            </script>
          <? endif; ?>

          <? if (get_field('image')) : ?>
            <div class="post-image pad-top">
              <?
              $image_obj = get_field('image');
              ?>
              <img src="<? echo $image_obj['sizes']['medium'] ?>" alt="<? echo $image_obj['alt'] ?>" title="<? echo $image_obj['title'] ?>"/>
            </div>
          <? endif; ?>
          
          <div class="post-body">
            <?php the_content(); ?>
          </div>
          
        </article><!-- end post -->
      </div><!-- end posts -->
    </section><!-- end main-section -->
    <?php get_sidebar(); ?>
  </div><!-- end page-wrap -->
<?php get_footer(); ?>