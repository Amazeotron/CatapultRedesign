<div class="search-box clearfix">
  <ul class="filters clearfix">
    <li><a class="link-secondary header-title <?php if ($_SERVER["REQUEST_URI"] == '/news/') echo 'active'; ?>" href="<?php echo home_url('/news'); ?>" title="News">View All</a></li>
    <li><a class="link-secondary header-title <?php if ($_SERVER["REQUEST_URI"] == '/articles/') echo 'active'; ?>" href="<?php echo home_url('/articles'); ?>" title="Articles">Articles</a></li>
    <li><a class="link-secondary header-title <?php if ($_SERVER["REQUEST_URI"] == '/projects/') echo 'active'; ?>" href="<?php echo home_url('/projects'); ?>" title="Projects">Projects</a></li>
    <li><a class="link-secondary header-title <?php if ($_SERVER["REQUEST_URI"] == '/events/') echo 'active'; ?>" href="<?php echo home_url('/events'); ?>" title="Events">Events</a></li>
    <li><a class="link-secondary header-title <?php if ($_SERVER["REQUEST_URI"] == '/featured-articles/') echo 'active'; ?>" href="<?php echo home_url('/featured-articles'); ?>" title="Featured Articles">Featured Articles</a></li>
  </ul>
  <?php get_search_form(); ?>
</div>