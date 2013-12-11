
<aside id="main-aside">
  <div id="main-aside-inner">
    
    <?php 
    if (is_singular() && get_the_ID() != 207) :
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
        <hr/>
        <h3 class="header-title related-header">Related Articles</h3>
      <ul class="related-articles">
        <?php foreach ($posts_array as $post) :  setup_postdata($post); ?>
          <li class="related-article header-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
        <?php endforeach; ?>
      </ul>
    <? elseif (get_the_ID() == 207) : ?>

      <hr/>
      <?php
      $the_query = new WP_Query(array('page_id' => 207));
      while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
        <h2>Press Kit</h2>

        <h4>Overview of Catapult Design</h4>
        <a href="<?php the_field('fact_sheet'); ?>"><?php the_field('fact_sheet_link_text'); ?></a>

        <?php
        $pressReleases = get_field('press_releases');
        if ($pressReleases) { ?>
          <h4>Press Releases</h4>
          <a href="<?php $pressReleases['press_release']; ?>"><?php $pressReleases['press_release_title']; ?></a>
        <? } ?>

        <h4>Logos</h4>
        <p><a href="<?php the_field('web_logo'); ?>" title="Catapult Design logo">Download the Catapult Design logo for Web use</a>.</p>
        <p><a href="<?php the_field('print_logo'); ?>" title="Catapult Design logo">Download the Catapult Design logo for print use</a>.</p>
      <?php endwhile; ?>
      <?php wp_reset_postdata(); ?>
        
    <? endif; ?>
    
  </div>
  <hr/>
  <?php
  // Twitter Feed
  function getTwitterFeed($username) {
    include_once(ABSPATH . 'wp-content/themes/catapult/inc/TwitterAPIExchange.php');

    $settings = array(
      'oauth_access_token' => "44148814-WlXoeq49W90zNYIpgSxK5NIYs3milWoWFVeigIonc",
      'oauth_access_token_secret' => "Dsa93Sax5wBgyuax97YMyBdYW0H2mHInq4VmfZPeHX8",
      'consumer_key' => "0uFBpTicI4ol9l75AQVw",
      'consumer_secret' => "1IZAXGlCEI1wV6oixiL8TRAg692hj8QK4sEEhZrw4"
    );
    $url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
    $getfield = '?screen_name=' . $username . '&include_entities=true&include_rts=true&count=15';
    $requestMethod = 'GET';
    $twitter = new TwitterAPIExchange($settings);
    $twitter->setGetfield($getfield);
    $twitter->buildOauth($url, $requestMethod);
    return json_decode($twitter->performRequest());
  }
  echo '<div class="twitter-list-wrap">';
  echo '<ul id="js-twitter-list" class="twitter-list">';
  $tweets = getTwitterFeed('catapult_design');
  // Double the tweets so we can do a continuous loop
  foreach ($tweets as $tweet) {
    array_push($tweets, $tweet);
  }
  
  foreach ($tweets as $tweet) {
    $pattern = '/https?:\/\/\S+/i';
    $replaced = preg_replace($pattern, '<a href="$0" target="_blank">$0</a>', $tweet->text);
    $strTweet = preg_replace('/(?<=#)\S+/', '<a href="https://twitter.com/search?q=%23$0&src=hash" target="_blank">$0</a>', $replaced);
    $strTweet = preg_replace('/(?<=@)\w+/', '<a href="https://twitter.com/$0" target="_blank">$0</a>', $strTweet);
    echo '<li class="twitter-list__item">' . $strTweet . '</li>';
  }
  echo '</ul></div>';
  ?>
  <hr/>
  <div class="contact-buttons">
    <a href="http://oi.vresp.com/?fid=9fcbd66d02" title="Subscribe to Newsletter" class="header-title contact-button contact-button--newsletter">Subscribe to Newsletter</a>
    <a href="<?php echo home_url('/'); ?>?feed=rss2" class="header-title contact-button contact-button--rss">Subscribe to Blog</a>
  </div>
</aside><!-- end main-aside -->
