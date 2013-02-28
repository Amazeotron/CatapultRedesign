<?php
$categories = (array) get_the_category();
$catNames = array();
$catIDs = array();
foreach($categories as $category) {
    array_push($catNames, $category->category_nicename);
    array_push($catIDs, $category->category_id);
}
$catIDsSeparated = implode(",", $catIDs);

?>
<aside id="main-aside">
    <div class="search-box">
        <?php get_search_form(); ?>
        <ul class="filters clearfix">
            <li><a class="link-secondary header-title" href="<?php echo home_url('/news'); ?>" title="View All">View All</a></li>
            <li><a class="link-secondary header-title" href="<?php echo home_url('/blog'); ?>" title="Articles">Articles</a></li>
            <li><a class="link-secondary header-title" href="<?php echo home_url('/events'); ?>" title="Events">Events</a></li>
        </ul>
    </div><!-- end search-box -->
    
    <div class="divider"></div>
    
    <ul class="tags">
        <?php
        foreach($categories as $cat) {
            echo '<li class="tag header-title"><a class="category-item ' . $cat->category_nicename . '" href="' . get_category_link($cat->term_id) . '">' . $cat->category_nicename . '</a></li>';
        }
        ?>
    </ul>
    
    <?php 
    $args = array(
                  'numberposts' => 5, 
                  'offset' => 0, 
                  'category' => $catIDsSeparated,
                  'orderby' => 'post_date',
                  'post_type' => 'post',
                  'exclude' => get_the_ID()
                  );
    $posts_array = get_posts( $args );
    
    ?>
    <h3 class="header-title related-header">Related Articles</h3>
    <ul class="related-articles">
        <?php foreach( $posts_array as $post ) :  setup_postdata($post); ?>
        <li class="related-article header-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
        <?php endforeach; ?>
    </ul>
        
</aside><!-- end main-aside -->