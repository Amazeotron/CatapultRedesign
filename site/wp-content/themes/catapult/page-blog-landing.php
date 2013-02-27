<?php
	
	/*
		Template Name: Blog Landing Page
	*/
		
	/*
	This page shows a list of recent "news" items, like upcoming learning labs, blog posts, and Tweets
	*/

?>
<?php get_header(); ?>
	
	<div id="page-wrap">
	<section id="main-section">
	<div id="posts">
		<?php 
		$args = array(
		              "posts_per_page" => 25,
		              "post_type" => "post"
		              );
		query_posts($args); 
		?>
	<?php if (have_posts()) : ?>
		<!-- there are two columns: big on the left, small on the right -->
		<?php while (have_posts()) : the_post(); ?>
			<article class="post-box">
				
				<figure>
					<?php
					$headerImage = get_field('header_image');
					$croppedImage;
					
					if (!$headerImage) {
						$croppedImage = get_bloginfo('template_url') . "/img/blog/default-blog-image.jpg";
					} else {
						$croppedImage = wp_get_attachment_image_src($headerImage["id"], array(643, 183))[0];
					}
					?>
					<img class="post-image" src="<?php echo $croppedImage; ?>" alt="<?php the_title(); ?>" width="100%">
				</figure>
				<header class="post-top">
					<h1 class="post-title header-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
					<ul class="tags">
		        <?php
		        $categories = (array) get_the_category();
		        foreach($categories as $cat) {
		            echo '<li class="tag header-title"><a class="category-item ' . $cat->category_nicename . '" href="' . get_category_link($cat->term_id) . '">' . $cat->category_nicename . '</a></li>';
		        }
		        ?>
	    		</ul>
				</header><!-- end post-top -->
				
				<div class="post-meta">
					<?php 
					$theName = implode(' ', array(get_the_author_meta('first_name'), get_the_author_meta('last_name')));
					?>
					<span>By <?php echo $theName; ?></span> | <span><?php the_time('F j, Y'); ?></span>
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