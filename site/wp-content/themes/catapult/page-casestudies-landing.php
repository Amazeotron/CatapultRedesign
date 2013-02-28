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
			<?php
			$headerImage = get_field('header_image');
			$croppedImage;
			
			if ($headerImage) : ?>
			<article class="post-box">
				<figure>
					<?php
					$croppedImage = wp_get_attachment_image_src($headerImage["id"], array(643, 183));
					$croppedImage = $croppedImage[0];
					?>
					<img class="post-image" src="<?php echo $croppedImage; ?>" alt="<?php the_title(); ?>" width="100%">
				</figure>
			<?php else : ?>
			<article class="post-box with-bg">
			<?php endif; ?>
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