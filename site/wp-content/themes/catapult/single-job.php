<?php get_header(); the_post(); ?>
	
	<div id="page-wrap">
	<section id="main-section">
	<div id="posts">
		<article class="post">
			<header class="post-top">
				<h1 class="post-title header-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
			</header><!-- end post-top -->
			
			<div class="post-body">
				<?php the_content(); ?>
			</div>
			
			<hr>
			
		</article><!-- end post -->
	</div><!-- end posts -->
	</section><!-- end main-section -->
	<?php get_sidebar(); ?>
	</div><!-- end page-wrap -->


<?php get_footer(); ?>