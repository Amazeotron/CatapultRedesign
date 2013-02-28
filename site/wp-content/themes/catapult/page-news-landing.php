<?php
	
	/*
		Template Name: News Landing Page
	*/
		
	/*
	This page shows a list of recent "news" items, like upcoming learning labs, blog posts, and Tweets
	*/

?>
<?php get_header(); ?>
	
	<div id="page-wrap" class="page-top">
		<section id="main-section">
			<div id="posts">
				
			<?php
			include(ABSPATH . "wp-content/themes/catapult/inc/NewsMash.php");
			$news = new NewsMash();
			$newsItems = $news->allNews;
			?>
			
			<?php foreach ($newsItems as $newsItem) : ?>
					<?php if ($newsItem->type != "twitter") :
						$headerImage = $newsItem->header_image_id;
						$croppedImage;
						if ($headerImage) : 
							$croppedImage = wp_get_attachment_image_src($headerImage, array(643, 183));
							$croppedImage = $croppedImage[0]; ?>
						<article class="post-box">
						<figure>
							<img class="post-image" src="<?php echo $croppedImage ?>" alt="<?php echo $newsItem->title; ?>" width="100%">
						</figure>
							
						<? else : ?>
						<article class="post-box with-bg">	
						<? endif; ?>
						
						<header class="post-top">
							<h1 class="post-title header-title"><a href="<?php echo $newsItem->link; ?>"><?php echo $newsItem->title; ?></a></h1>
							<ul class="tags">
		        <?php
		        $categories = $newsItem->categories;
		        foreach($categories as $cat) : ?>
		        	<li class="tag header-title"><a class="category-item <? echo $cat['slug']; ?>" href="<? echo get_category_link($cat['id']) ?>"><? echo $cat['slug']; ?></a></li>
		        <? endforeach; ?>
	    		</ul>
	    		<? else : ?>
	    		<header class="post-top twitter">
						<p class="post-tweet"><?php echo $newsItem->title; ?></p>
						<span class="category-item header-title insights">TWEET</span> <a class="post-tweetlink" href="<?php echo $newsItem->link ?>">@catapult_design</a> <span class="post-tweetdate">| <?php echo $newsItem->nice_date; ?></span>
					<? endif; ?>
					
					
				</header><!-- end post-top -->
				
				<?php if ($newsItem->type != "twitter") : ?>
				<div class="post-meta">
					<span>By <?php echo $newsItem->author; ?></span> | <span><?php echo $newsItem->nice_date; ?></span>
				</div>
				<? endif; ?>
					
				</article>
			<?php endforeach; ?>
			
			</div><!-- end posts -->
		</section><!-- end main-section -->
	<?php get_sidebar(); ?>
	</div><!-- end page-wrap -->


<?php get_footer(); ?>