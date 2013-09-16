<?php

/*
  Template Name: Featured Articles Landing Page
*/

?>
<?php get_header(); ?>

  <div id="page-wrap" class="page-top">
    <? include(ABSPATH . 'wp-content/themes/catapult/inc/posts-landing-header.php'); ?>
    <!-- end search-box -->

    <section id="main-section">
      <div id="posts">
        <?php
        $args = array(
          "posts_per_page" => 25,
          "post_type" => array("featured_article")
        );
        query_posts($args);
        ?>
        <? include(ABSPATH . 'wp-content/themes/catapult/inc/posts-template.php'); ?>
      </div>
      <!-- end posts -->
    </section>
    <!-- end main-section -->
    <?php get_sidebar(); ?>
  </div><!-- end page-wrap -->


<?php get_footer(); ?>