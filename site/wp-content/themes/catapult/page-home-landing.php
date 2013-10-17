<?php

/*
  Template Name: Home Landing Page
*/

?>

<? include(ABSPATH . 'wp-content/themes/catapult/inc/homepage-stripe.php'); ?>

<?php get_header(); ?>
  <script>
    var formError = "<?php echo $error; ?>";
    var formErrorMessage = "<?php echo $error_message; ?>";
  </script>



  <section class="overlay hide" id="overlay">
    <div class="overlay-bg"></div>
    <div class="overlay-inner">
      <a href="#" class="close-button" id="overlay-close-button"></a>
      <div class="overlay-content"></div>
    </div>
  </section>

  <section class="intro page-top row">
    
    <a href="<? echo get_page_link(4363); ?>" class="header-link"><h1>At Catapult Design, we <span class="header-title level-one">EXPLORE</span>, <span class="header-title level-two">PROTOTYPE</span>, <span class="header-title level-three">REALIZE</span> &amp; <span class="header-title level-four">EDUCATE</span> to close the gap in equality &raquo;</h1></a>
    <div id="slides">
      <?php
      $index = 0;
      $the_query = new WP_Query(array('post_type' => 'homepageslideshow', 'posts_per_page' => '-1'));
      while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
        <div class="slideshow-item">
          <?
          $url = get_field('link');
          if (get_field('external_link')) {
            $url = get_field('external_link');
          }
          ?>
          <a href="<?php echo $url; ?>">
            <img src="<?php the_field('image'); ?>" alt="" class="slideshow-image" />
            <h3 class="slideshow-caption"><?php the_field('caption'); ?></h3>
          </a>
        </div>
        <?php $index++; ?>
      <?php endwhile; ?>
      
      <?php wp_reset_postdata(); ?>
    </div>
  </section>
  <hr />

  <section class="featured row" id="featured">
    <a href="<? echo get_page_link(4413); ?>" class="header-link"><h1>Our <span class="header-title level-one">FEATURES</span> &amp; <span class="header-title level-two">PUBLICATIONS</span> include &raquo;</h1></a>
    <ul class="featured-logos nolist clearfix">
    <?php
    $the_query = new WP_Query(array('post_type' => 'featured_article', 'posts_per_page' => '6'));
    while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
      <?
      $number_of_results = $the_query->found_posts;
      $image_id = get_field('image');
      $image_id = $image_id['id'];
      $image = wp_get_attachment_image_src($image_id, array(150, 150));
      ?>
      <li style="width: <? echo min(20, (1 / $number_of_results)*100) ?>%"><a href="<? the_permalink() ?>"><img src="<?php echo $image[0]; ?>" alt=""/></a></li>
    <?php endwhile; ?>
    <?php wp_reset_postdata(); ?>
    </ul>
  </section>
  <hr />

  <section class="locations row" id="projects">
    <div id="map-callout" class="clearfix hide">
      <a href="#" class="close-button"></a>
      <div class="map-callout-img"></div>
      <div class="map-callout-content">
        <a href="" class="header-title-link"><h2 class="header-title"></h2></a>
        <h3></h3>
        <p></p>
      </div>
    </div>
    <a href="<? echo get_page_link(4351); ?>" class="header-link"><h1>View our <span class="header-title level-one">PROJECTS</span> &raquo;</h1></a>
    <div id="locations-map"></div>
    <div class="map-footer clearfix">
      <h2><span class="header-title">FILTER</span> by <span class="header-title">SECTOR</span></h2>
      <ul class="locations-filter clearfix">
        <li class="locations-filter__item"><h2 class="header-title"><a href="#" class="location-filter active" id="js-location-filter-all" data-tag="all">ALL</a></h2></li>
        <li class="locations-filter__item"><h2 class="header-title"><a href="#" class="location-filter" id="js-location-filter-energy" data-tag="energy">ENERGY</a></h2></li>
        <li class="locations-filter__item"><h2 class="header-title"><a href="#" class="location-filter" id="js-location-filter-enterprise" data-tag="enterprise">ENTERPRISE</a></h2></li>
        <li class="locations-filter__item"><h2 class="header-title"><a href="#" class="location-filter" id="js-location-filter-health-agriculture" data-tag="health-agriculture">HEALTH/AGRICULTURE</a></h2></li>
        <li class="locations-filter__item"><h2 class="header-title"><a href="#" class="location-filter" id="js-location-filter-mobility" data-tag="mobility">MOBILITY</a></h2></li>
        <li class="locations-filter__item"><h2 class="header-title"><a href="#" class="location-filter" id="js-location-filter-water-sanitation" data-tag="water-sanitation">WATER/SANITATION</a></h2></li>
      </ul>
    </div>
  </section>
  <hr />

  <section class="team" id="team">
    <div class="row">
      <h1>Meet the Catapult <span class="header-title level-one">Team</span>, <span class="header-title level-two">Board</span> &amp; <span class="header-title level-three">Advisors</span>.</h1>
      <?php include(ABSPATH . "wp-content/themes/catapult/inc/team.php"); ?>
    </div>
  </section><!-- end team -->
  <hr />

  <section class="contact" id="contact">
    <div class="row">
      <h1><span class="header-title level-one">FOLLOW</span>, <span class="header-title level-two">LIKE</span> &amp; <span class="header-title level-three">CONTACT</span> Us.</h1>
      <div class="col-wrap contact-locations clearfix">
        <div class="contact__item float-left">
          <div class="contact-location">Contact Us</div>
          <h3 class="header-title">OPEN STUDIOS</h3>
          <h4 class="header-title">EVERY 1ST &amp; 3RD WED<br/>4-6P IN SF OR SKYPE</h4>
        </div>
        <div class="contact__item float-left">
          <div class="contact-location sf">Contact Us</div>
          <h3 class="header-title">SAN FRANCISCO</h3>
          <h4 class="header-title">972 MISSION ST, SUITE 500<br/>SAN FRANCISCO, CA 94103</h4>
        </div>
        <div class="contact__item float-left">
          <div class="contact-location co">Contact Us</div>
          <h3 class="header-title">DENVER</h3>
          <h4 class="header-title">1031 33RD STREET, STE 174<br/>DENVER, CO 80205</h4>
        </div>
        <div class="contact__item float-left">
          <div class="contact-location ny">Contact Us</div>
          <h3 class="header-title">NEW YORK CITY</h3>
          <h4 class="header-title">COMING SOON</h4>
        </div>
      </div>

      <div class="col-wrap contact__buttons">
        <div class="two-col margin-right">
          <a href="mailto:info@catapultdesign.org" class="contact-button contact-button--email header-title" tabindex="33">INFO&#64;CATAPULTDESIGN.ORG</a>
          <a href="https://twitter.com/Catapult_Design" class="contact-button contact-button--twitter header-title" tabindex="34">&#64;CATAPULT_DESIGN</a>
          <a href="https://www.facebook.com/CatapultDesign" class="contact-button contact-button--facebook header-title" tabindex="35">/CATAPULT-DESIGN</a>
        </div>
        <div class="two-col margin-left">
          <a href="http://oi.vresp.com/?fid=9fcbd66d02" class="contact-button contact-button--newsletter header-title" tabindex="36">SUBSCRIBE TO NEWSLETTER</a>
          <a href="http://vimeo.com/catapultdesign/" class="contact-button contact-button--video header-title" tabindex="37">/CATAPULTDESIGN</a>
          <a href="<? echo get_page_link(207); ?>" class="contact-button contact-button--faq header-title" tabindex="38">FAQ &amp; MEDIA KIT</a>
        </div>
      </div>
    </div>
  </section><!-- end contact -->
  <hr />

  <section class="donate" id="donate">
    <div class="row">
      <h1><span class="header-title level-one">SUPPORT</span> Catapult</h1>
      <h3 class="header-title">Catapult Design is a 501(c)(3) non-profit and all donations are tax-deductible.</h3>
      <h4 class="header-title">Your donation supports</h4>
      <p>Materials and prototype budget for our project work, tools (from wrenches to software) our designers need to get the job done, travel costs associated with assessment and implementation, and our designers who are committed to using their skills to make a difference. If you have questions regarding how your donation will be used, please contact us as info@catapultdesign.org.</p>
      <h4 class="header-title">Corporate matching</h4>
      <p>Catapult is currently registered with corporate matching programs at: Google, Microsoft, Applied Materials, and the Gordon and Betty Moore Foundation.</p>
      <h4 class="header-title">To donate by check</h4>
      <p>Write out your donation to “Catapult Design” and mail to Catapult Design, 972 Mission St. Suite 500, San Francisco, CA 94103.</p>
      <h4 class="header-title">To donate online</h4>
      <p>We accept secure online donations through both Google Checkout and Paypal. Recurring donations are only available through PayPal.</p>
      <?php include(ABSPATH . "wp-content/themes/catapult/inc/donation_form.php"); ?>
    </div>
    <!-- end row -->
  </section><!-- end donate -->

<?php get_footer(); ?>