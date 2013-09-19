<?php

function getBaseURL() {
	$url = get_bloginfo('template_url') . "/img/homepage/team/";
	return $url;
}

function hyphenate($name) {
	$pattern = '/ /';
	$replace = "-";
	return preg_replace($pattern, $replace, $name);
}

$the_query = new WP_Query(array('post_type' => 'teammember', 'posts_per_page' => '-1')); ?>

<ul class="team-members">

<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
  <?php $index = 16; ?>
  <li class="team-member <? the_field('level'); ?>">
  <a class="team-member-link" href="#<? echo hyphenate(get_the_title()); ?>" tabindex="<? echo $index++; ?>">
    <img class="team-member-headshot" src="<?php the_field('headshot'); ?>" alt="<? the_title(); ?>" />
    <div class="team-member-details">
      <h3><? the_title(); ?></h3>
    </div>
  </a>
  </li>
<?php endwhile; ?>
</ul>
<?php wp_reset_postdata();
?>
