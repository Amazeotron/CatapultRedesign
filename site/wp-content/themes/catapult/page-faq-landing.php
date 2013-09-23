<?php

/*
  Template Name: FAQ Landing Page
*/

?>
<?php get_header(); ?>

  <div id="page-wrap" class="page-top">
    <section id="main-section">
    <div class="faqs">
    <?php while (have_posts()) : the_post(); ?>

      <?php the_content(); ?>

      <hr>
      <? // The media Kit download buttons live in sidebar.php  ?>
    <?php endwhile; ?>
    </div>
    </section>
    <?php get_sidebar(); ?>
  </div>
<?php get_footer(); ?>