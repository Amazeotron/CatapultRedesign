<?php
	
	/*
		Template Name: Casestudies Landing Page
	*/

?>
<?php get_header(); ?>
	
	<div id="page-wrap">
	<section id="main-section">
	<div id="posts">
		<?php 
		$args = array(
		              "posts_per_page" => 25,
		              "post_type" => "casestudy"
		              );
		query_posts($args); 
		?>
	<?php if (have_posts()) : ?>
		<!-- there are two columns: big on the left, small on the right -->
		<?php while (have_posts()) : the_post(); ?>
			<article class="post-box">
				<header class="post-top">
					<h1 class="post-title header-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
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