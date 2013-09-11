<?php get_header(); the_post(); ?>
	
	<div id="page-wrap" class="page-top">
    <? include(ABSPATH . 'wp-content/themes/catapult/inc/posts-landing-header.php'); ?>
	<section id="main-section">
	<div id="posts">
		<article class="post">
			
			<?php
			$headerImage = get_field('event_image');
			$croppedImage;
			
			if ($headerImage) :
				$croppedImage = wp_get_attachment_image_src($headerImage["id"], array(643, 183));
				$croppedImage = $croppedImage[0]; ?>
				<div class="post-border">
					<figure class="post-figure">
						<img class="post-image" src="<?php echo $croppedImage; ?>" alt="<?php the_title(); ?>" width="100%">
					</figure>
				</div>
			<? endif; ?>
			
			<header class="post-top">
				<h1 class="post-title header-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
			</header><!-- end post-top -->
			
			<div class="post-body">
				<?php the_content(); ?>
			</div>
			
			<div class="divider"></div>
			
			<div class="event-date">
				<?php
				
				$dateInSecs = intval(get_field("date"))/1000;
				$startHour = floatval(get_field("start_time"));
				$endHour = floatval(get_field("end_time"));
				$startTimeInSecs = $startHour * 60 * 60;
				$endTimeInSecs = $endHour * 60 * 60;
				$startTimeInSecs += $dateInSecs;
				$endTimeInSecs += $dateInSecs;
				$patterns = array();
				$patterns[0] = "/-|:/";
				$patterns[1] = "/\+\d+/";
				$replace = array();
				$replace[0] = "";
				$replace[1] = "";
				
				$date1 = date("c", $startTimeInSecs);
				$date2 = date("c", $endTimeInSecs);
				$date1 = preg_replace($patterns, $replace, $date1). "Z";
				$date2 = preg_replace($patterns, $replace, $date2). "Z";
				
				date_default_timezone_set('America/Los_Angeles');
				
				$niceDate = date("F m, Y", $dateInSecs);
				$niceStartTime = date("h:i a T", $startTimeInSecs);
				$niceEndTime = date("h:i a T", $endTimeInSecs);
				
				$googleCalLink = "http://www.google.com/calendar/event?action=TEMPLATE&text=" . get_the_title() . "&dates=" . $date1 . "/" . $date2 . "&sprop=website:catapultdesign.org" . "&details=" . get_the_excerpt() . "&location=" . get_field("location_address");
				?>
				<h4>When: <? echo $niceDate; ?></h4>
				<h4>Starts: <? echo $niceStartTime; ?></h4>
				<h4>Ends: <? echo $niceEndTime; ?></h4>
				
				<p><a href="<?php echo $googleCalLink; ?>" target="_blank">Add to Google Calendar</a></p>
			</div>
			
			<div class="post-map">
				<h4>Location:</h4>
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
        <script>
          var map;
          var myLatLang = new google.maps.LatLng(<?php $location = get_field('location'); echo $location['coordinates']; ?>);
          function initialize() {
            var mapOptions = {
              zoom: 15,
              center: myLatLang,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);
            var marker = new google.maps.Marker({
              position: myLatLang,
              map: map,
              title:"<?php echo the_title(); ?>"
            });
          };
          google.maps.event.addDomListener(window, 'load', initialize);
        </script>
        <div id="map-canvas" style="height: 300px;"></div>
			</div>
			
		</article><!-- end post -->
	</div><!-- end posts -->
	</section><!-- end main-section -->
	<?php get_sidebar(); ?>
	</div><!-- end page-wrap -->


<?php get_footer(); ?>