<div class="search-box clearfix">
  <ul class="filters clearfix">
    <li><a class="link-secondary header-title" href="<?php echo home_url('/news'); ?>" title="News">View All</a></li>
    <li><a class="link-secondary header-title" href="<?php echo home_url('/blog'); ?>" title="Articles">Articles</a></li>
    <li><a class="link-secondary header-title" href="<?php echo home_url('/casestudies'); ?>" title="Projects">Projects</a></li>
    <li><a class="link-secondary header-title" href="<?php echo home_url('/events'); ?>" title="Events">Events</a></li>
    <li><a class="link-secondary header-title" href="<?php echo home_url('/press'); ?>" title="Press">Press</a></li>
  </ul>
  <?php get_search_form(); ?>
</div>