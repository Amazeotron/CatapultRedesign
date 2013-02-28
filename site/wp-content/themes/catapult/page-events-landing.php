<?php
	
	/*
		Template Name: Events Landing Page
	*/

?>
<?php get_header(); ?>
	
	<div id="page-wrap">
	<section id="main-section">
	<div id="posts">
		<?php 
		$args = array(
		              "posts_per_page" => 25,
		              "post_type" => "event"
		              );
		query_posts($args); 
		?>
	<?php if (have_posts()) : ?>
		<!-- there are two columns: big on the left, small on the right -->
		<?php while (have_posts()) : the_post(); ?>
			<? 
			$eventImage = get_field("event_image");
			$eventImage = $eventImage["url"];
			
			if ($eventImage) : ?>
			<article class="post-box">
				<figure>
					<img class="post-image" src="<?php echo $eventImage; ?>" alt="Image 2" width="100%">
				</figure>
			<? else : ?>
			<article class="post-box with-bg">
			<? endif; ?>
				<header class="post-top">
					<h1 class="post-title header-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
					<?
					$fieldDate = get_field('date');
					$fieldDate /= 1000;
					$date = date('F d, Y', $fieldDate);
					?>
					<p class="post-subtitle">When: <? echo $date; ?></p>
					<p class="post-excerpt"><? the_excerpt(); ?></p>
				</header><!-- end post-top -->
			</article><!-- end post-box -->
					
		<?php endwhile; ?>
		
	<?php else : ?>

		<h2>No posts found.</h2>

	<?php endif; ?>
	</div><!-- end posts -->
	</section><!-- end main-section -->
	<?php get_sidebar(); ?>
	</div><!-- end page-wrap -->


<?php get_footer(); ?>