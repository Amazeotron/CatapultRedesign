<div class="search-box clearfix">
  <ul class="filters clearfix">
    <li><a class="link-secondary header-title <?php if ($_SERVER["REQUEST_URI"] == '/news/') echo 'active'; ?>" href="<? echo get_page_link(4148); ?>" title="News">View All</a></li>
    <li><a class="link-secondary header-title <?php if ($_SERVER["REQUEST_URI"] == '/articles/') echo 'active'; ?>" href="<? echo get_page_link(105); ?>" title="Articles">Articles</a></li>
    <li><a class="link-secondary header-title <?php if ($_SERVER["REQUEST_URI"] == '/projects/') echo 'active'; ?>" href="<? echo get_page_link(4351); ?>" title="Projects">Projects</a></li>
    <li><a class="link-secondary header-title <?php if ($_SERVER["REQUEST_URI"] == '/events/') echo 'active'; ?>" href="<? echo get_page_link(192); ?>" title="Events">Events</a></li>
    <li><a class="link-secondary header-title <?php if ($_SERVER["REQUEST_URI"] == '/press/') echo 'active'; ?>" href="<? echo get_page_link(4413); ?>" title="Press">Press</a></li>
  </ul>
  <?php get_search_form(); ?>
</div>