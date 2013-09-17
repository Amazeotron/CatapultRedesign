<?php

/*
  Template Name: FAQ Landing Page
*/

?>
<?php get_header(); ?>

  <div id="page-wrap" class="page-top">
    <section id="main-section">
      <div id="posts">
        <?php while (have_posts()) : the_post(); ?>

          <?php the_content(); ?>

          <hr>

          <h2>Press Kit</h2>

          <h4>Overview of Catapult Design</h4>
          <a href="<?php the_field('fact_sheet'); ?>"><?php the_field('fact_sheet_link_text'); ?></a>
          
          <?php 
          $pressReleases = get_field('press_releases');
          if ($pressReleases) { ?>
            <h4>Press Releases</h4>
            <a href="<?php $pressReleases['press_release']; ?>"><?php $pressReleases['press_release_title']; ?></a>
          <? } ?>
          
          <h4>Logos</h4>
          <p><a href="<?php the_field('web_logo'); ?>" title="Catapult Design logo">Download the Catapult Design logo for Web use</a>.</p>
          <p><a href="<?php the_field('print_logo'); ?>" title="Catapult Design logo">Download the Catapult Design logo for print use</a>.</p>

        <?php endwhile; ?>
      </div>
      <!-- end posts -->
    </section>
    <!-- end main-section -->
    <?php get_sidebar(); ?>
  </div><!-- end page-wrap -->

<?php get_footer(); ?>