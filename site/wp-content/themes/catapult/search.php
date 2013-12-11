<?php get_header(); ?>
	
	<div id="page-wrap">
	<section id="main-section">
	<div id="posts">
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
				
				<div class="post-top">
					<h3 class="post-title header-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
					<ul class="categories">
		        <?php
		        $categories = (array) get_the_category();
		        foreach($categories as $cat) {
		            echo '<li class="category header-title "><a class="category-item ' . $cat->category_nicename . '" href="' . get_category_link($cat->term_id) . '">' . $cat->category_nicename . '</a></li>';
		        }
		        ?>
	    		</ul>
				</div><!-- end post-top -->
				<div class="post-meta">
					<span>Catapult Design Newsletter</span> | <span>December 31, 2012</span>
				</div>
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