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

    <div class="search-box clearfix">
      <ul class="filters clearfix">
        <li><a class="link-secondary header-title" href="<?php echo home_url('/news'); ?>" title="View All">View All</a></li>
        <li><a class="link-secondary header-title" href="<?php echo home_url('/blog'); ?>" title="Articles">Articles</a></li>
        <li><a class="link-secondary header-title" href="<?php echo home_url('/projects'); ?>" title="View All">Projects</a></li>
        <li><a class="link-secondary header-title" href="<?php echo home_url('/events'); ?>" title="Events">Events</a></li>
        <li><a class="link-secondary header-title" href="<?php echo home_url('/press'); ?>" title="View All">Press</a></li>
      </ul>
      <?php get_search_form(); ?>
    </div><!-- end search-box -->
    
		<section id="main-section">
			<div id="posts">
				
			<?php
			include(ABSPATH . "wp-content/themes/catapult/inc/NewsMash.php");
			$news = new NewsMash();
			$newsItems = $news->allNews;
			?>
			
			<?php foreach ($newsItems as $newsItem) : ?>
        <article class="post-box with-bg">
      <?php 
      $headerImage = $newsItem->header_image_id;
      $croppedImage = '';
      if ($headerImage) : 
        $croppedImage = wp_get_attachment_image_src($headerImage, 'thumbnail');
        $croppedImage = $croppedImage[0]; ?>
          <figure>
            <img class="post-image" src="<?php echo $croppedImage ?>" alt="<?php echo $newsItem->title; ?>" width="100%">
          </figure>
      <? endif; ?>    
          <header class="post-top <?php if (!$headerImage) { echo "full-width"; } ?>">
            <h1 class="post-title header-title"><a href="<?php echo $newsItem->link; ?>"><?php echo $newsItem->title; ?></a></h1>
  
            <?php if ($newsItem->type != "twitter") : ?>
              <div class="post-meta">
                <span>By <?php echo $newsItem->author; ?></span> | <span><?php echo $newsItem->nice_date; ?></span>
              </div>
            <? endif; ?>
            
            <?php echo $newsItem->excerpt; ?>
            
            <ul class="tags">
          <?php
          $categories = $newsItem->categories;
          foreach($categories as $cat) : ?>
            <li class="tag header-title"><a class="category-item <? echo $cat['slug']; ?>" href="<? echo get_category_link($cat['id']) ?>"><? echo $cat['slug']; ?></a></li>
          <? endforeach; ?>
            </ul>
          </header><!-- end post-top -->
        </article>
			<?php endforeach; ?>
			
			</div><!-- end posts -->
		</section><!-- end main-section -->
	<?php get_sidebar(); ?>
	</div><!-- end page-wrap -->


<?php get_footer(); ?>