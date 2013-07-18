<?php 
  $index = 0;
  $the_query = new WP_Query(array('post_type' => 'casestudy', 'posts_per_page' => '-1'));
  while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
  <li class="casestudy-content-single" id="casestudy-content-<?php the_title(); ?>" data-index="<?php echo $index; ?>">
    <figure class="casestudy-content-figure">
      <img src="<?php the_field('header_image'); ?>" alt="" class="casestudy-content-header" />
    </figure>
    <h1 class="header-title"><?php the_title(); ?></h1>
    <p class="casestudy-body"><?php the_content(); ?></p>
  </li>
  <?php $index++; ?>
<?php endwhile; ?>
</ul>
<?php wp_reset_postdata();