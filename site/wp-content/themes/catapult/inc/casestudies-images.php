<?php 
  $index = 0;
  $the_query = new WP_Query(array('post_type' => 'casestudy', 'posts_per_page' => '-1'));
  while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
  <li data-index="<?php echo $index; ?>">
    <img class="casestudy-image show" src="<?php the_field('main_image'); ?>" id="casestudy-image-<?php the_field('client'); ?>" alt="Image of <?php the_field('client'); ?>" />
  </li>
  <?php $index++; ?>
<?php endwhile; ?>
</ul>
<?php wp_reset_postdata();
