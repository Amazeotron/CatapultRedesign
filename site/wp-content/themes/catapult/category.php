<?php get_header(); ?>

  <div id="page-wrap" class="page-top">
    <? include(ABSPATH . 'wp-content/themes/catapult/inc/posts-landing-header.php'); ?>
    <!-- end search-box -->

    <section id="main-section">
      <div id="posts">
        <?php
        preg_match('/\/category\/(.+)/', $_SERVER["REQUEST_URI"], $matches);
        $cat = substr($matches[1], 0, -1);
        $args = array(
          "posts_per_page" => -1,
          "post_type" => array("post", "event", "project", "job", "featured-article"),
          "category_name" => $cat 
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