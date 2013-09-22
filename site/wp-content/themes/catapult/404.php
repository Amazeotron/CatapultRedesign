<?php get_header(); ?>

  <div id="page-wrap">
    <section id="main-section">
      <div class="clearfix">
        <div class="two-col">
          <img src="<? bloginfo('template_url'); ?>/img/404.png" alt="404 Not Found"/>
        </div>
        <div class="two-col">
          <h1>File or page not found.</h1>
          <p>Sorry about that. Perhaps we can recommend our latest news:</p>
          <ul class="nolist">
          <?php
          $index = 0;
          $the_query = new WP_Query(array('post_type' => 'post', 'posts_per_page' => '5'));
          while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
            <li><a href="<? the_permalink(); ?>"><?php the_title(); ?></a></li>
          <?php endwhile; ?>
          </ul>
          <?php wp_reset_postdata(); ?>
        </div>
      </div>
    </section>
  </div><!-- end page-wrap -->
<?php get_footer(); ?>