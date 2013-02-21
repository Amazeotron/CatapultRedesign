<?php get_header(); the_post(); ?>
	
	<div id="page-wrap" class="page-top">
	<section id="main-section">
	<div id="posts">
		<article class="post">
			
			<?php
			$headerImage = get_field('header_image');
			$croppedImage;
			if ($headerImage) :
				$croppedImage = wp_get_attachment_image_src($headerImage, array(643, 183));
				$croppedImage = $croppedImage[0]; ?>
				<div class="post-border">
				<figure class="post-figure">
				<img class="post-image" src="<?php echo $croppedImage; ?>" alt="<?php the_title(); ?>" width="100%">
				</figure>
				</div>
			<? endif; ?>
			
			<header class="post-top">
				<h1 class="post-title header-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
			</header><!-- end post-top -->
			
			<div class="post-body">
				<?php the_content(); ?>
			</div>
			
			<hr>
			
			<div class="post-map">
				<h4>Location:</h4>
				<? the_field("location"); ?>
			</div>
			
			<hr>
			
			<div class="post-comments">
				<?php comments_template(); ?>
			</div>
			
		</article><!-- end post -->
	</div><!-- end posts -->
	</section><!-- end main-section -->
	<?php get_sidebar(); ?>
	</div><!-- end page-wrap -->


<?php get_footer(); ?>