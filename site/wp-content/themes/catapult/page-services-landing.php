<?php

/*
  Template Name: Services Landing Page
*/

?>
<?php get_header(); ?>

  <div id="page-wrap" class="page-top">
  <div class="services">
    <?php while (have_posts()) : the_post(); ?>

      <?php the_content(); ?>

    <?php endwhile; ?>
  </div>
  </div><!-- end page-wrap -->

<?php get_footer(); ?>