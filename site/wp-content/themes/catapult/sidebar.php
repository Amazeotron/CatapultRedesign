<?php
$categories = (array)get_the_category();
$catNames = array();
$catIDs = array();
foreach ($categories as $category) {
  array_push($catNames, $category->category_nicename);
  array_push($catIDs, $category->category_id);
}
$catIDsSeparated = implode(",", $catIDs);

?>
<aside id="main-aside">
  <div id="main-aside-inner">
    <hr/>
    <ul class="tags">
      <?php
      foreach ($categories as $cat) {
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
    $posts_array = get_posts($args);
    ?>
    <h3 class="header-title related-header">Related Articles</h3>
    <ul class="related-articles">
      <?php foreach ($posts_array as $post) :  setup_postdata($post); ?>
        <li class="related-article header-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
      <?php endforeach; ?>
    </ul>
  </div>
  <hr/>
  <?php
  // Twitter Feed
  function getTwitterFeed($username)
  {
    include_once(ABSPATH . 'wp-content/themes/catapult/inc/TwitterAPIExchange.php');

    $settings = array(
      'oauth_access_token' => "44148814-WlXoeq49W90zNYIpgSxK5NIYs3milWoWFVeigIonc",
      'oauth_access_token_secret' => "Dsa93Sax5wBgyuax97YMyBdYW0H2mHInq4VmfZPeHX8",
      'consumer_key' => "0uFBpTicI4ol9l75AQVw",
      'consumer_secret' => "1IZAXGlCEI1wV6oixiL8TRAg692hj8QK4sEEhZrw4"
    );
    $url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
    $getfield = '?screen_name=' . $username . '&include_entities=true&include_rts=true&count=5';
    $requestMethod = 'GET';
    $twitter = new TwitterAPIExchange($settings);
    $twitter->setGetfield($getfield);
    $twitter->buildOauth($url, $requestMethod);
    return json_decode($twitter->performRequest());
  }

  echo '<ul class="twitter-list">';
  foreach (getTwitterFeed('catapult_design') as $tweet) {
    echo '<li class="twitter-list__item">' . $tweet->text . '</li>';
  }
  echo '</ul>';
  ?>
  <hr/>
  <div class="contact-buttons">
    <a href="http://oi.vresp.com/?fid=9fcbd66d02" title="Subscribe to Newsletter" class="header-title contact-button contact-button--newsletter">Subscribe to Newsletter</a>
    <a href="<?php echo home_url('/'); ?>?feed=rss2" class="header-title contact-button contact-button--rss">Subscribe to Blog</a>
  </div>
</aside><!-- end main-aside -->
