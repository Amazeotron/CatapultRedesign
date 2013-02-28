<?php get_header(); ?>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
			
		<!-- there are two columns: big on the left, small on the right -->
		<div id="page-wrap">
			<section id="main-section">
				<article id="post" class="post-<?php the_ID(); ?>">
					<?php
					$headerImage = the_field('header_image');
					if ($headerImage) : ?>
					<figure>
						<img class="post-image" src="<?php $headerImage; ?>" alt="Image 1">
					</figure>
				<?php endif; ?>
					<h1 class="post-title header-title"><?php the_title(); ?></h1>
					<?php include (TEMPLATEPATH . '/inc/meta.php' ); ?>
					
					<div class="post-body">
						<?php the_content(); ?>
					</div><!-- end post-body -->
					<hr />
					
					<?php //comments_template(); ?>
					
				</article><!-- end post -->
				
			</section><!-- end main-section -->
			
			<?php get_sidebar(); ?>
		</div><!-- end page-wrap -->
		
	<?php endwhile; endif; ?>

<?php get_footer(); ?>