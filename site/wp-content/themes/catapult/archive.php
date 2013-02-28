<?php get_header(); ?>
	
	<div id="page-wrap">
	<section id="main-section">
	<div id="posts">
	<?php if (have_posts()) : ?>
		<!-- there are two columns: big on the left, small on the right -->
		<?php while (have_posts()) : the_post(); ?>
		<?php
		$headerImage = get_field('header_image');
		if ($headerImage) : ?>
			<div class="post-box">
		<?
			$croppedImage;
			$croppedImage = wp_get_attachment_image_src($headerImage["id"], array(643, 183));
			$croppedImage = $croppedImage[0]; ?>
			<div class="post-border">
				<figure class="post-figure">
				<img class="post-image" src="<?php echo $croppedImage; ?>" alt="<?php the_title(); ?>" width="100%">
				</figure>
			</div>
		<? else : ?>
			<div class="post-box with-bg">
		<? endif; ?>
				<div class="post-top">
					<h3 class="post-title header-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
					<ul class="tags">
		        <?php
		        $categories = (array) get_the_category();
		        foreach($categories as $cat) {
		            echo '<li class="tag header-title"><a class="category-item ' . $cat->category_nicename . '" href="' . get_category_link($cat->term_id) . '">' . $cat->category_nicename . '</a></li>';
		        }
		        ?>
	    		</ul>
				</div><!-- end post-top -->
				<div class="post-meta">
					<?php 
					$theName = implode(' ', array(get_the_author_meta('first_name'), get_the_author_meta('last_name')));
					?>
					<span>By <?php echo $theName; ?></span> | <span><?php the_time('F j, Y'); ?></span>
				</div>
			</div><!-- end post-box -->
					
		<?php endwhile; ?>
		
	<?php else : ?>

		<h2>No posts found.</h2>

	<?php endif; ?>
	</div><!-- end posts -->
	</section><!-- end main-section -->
	<?php get_sidebar(); ?>
	</div><!-- end page-wrap -->


<?php get_footer(); ?>