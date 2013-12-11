<?php get_header();
the_post(); ?>

  <div id="page-wrap" class="page-top">
    <? include(ABSPATH . 'wp-content/themes/catapult/inc/posts-landing-header.php'); ?>
    <section id="main-section">
      <div id="posts">
        <article class="post">
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
          <div class="post-header clearfix">
            <ul class="categories float-left clearfix">
              <?php
              foreach ($categories as $cat) {
                echo '<li class="category header-title"><a class="category-item ' . $cat->category_nicename . '" href="' . get_category_link($cat->term_id) . '">' . $cat->category_nicename . '</a></li>';
              }
              ?>
            </ul>
            <ul class="contact-buttons clearfix">
              <li><a href="#" class="contact-button contact-button--twitter">Twitter</a></li>
              <li><a href="#" class="contact-button contact-button--facebook">Facebook</a></li>
              <li><a href="#" class="contact-button contact-button--email">Email</a></li>
            </ul>
          </div>

          <header class="post-top">
            <h1 class="post-title header-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
          </header>
          <!-- end post-top -->

          <div class="post-meta">
            <?php if (get_post_type() == 'post') {
              $theName = implode(' ', array(get_the_author_meta('first_name'), get_the_author_meta('last_name'))); ?>
              <div class="post-author">By <?php echo $theName; ?> | <?php the_time('F j, Y'); ?></div>
            <? } else if (get_post_type() == 'project') { ?>
              <div class="post-author">Client: <?php the_field('client_name'); ?></div>
              <?php
              $location = array();
              if (get_field('locations')) {
                while (has_sub_field('locations')) {
                  $loc = get_sub_field('location');
                  $loc = $loc['address'];
                  array_push($location, $loc);
                }
              }
              ?>
              <div class="post-author">Location: <?php echo implode('; ', $location); ?></div>
            <? } ?>
            <?
            $posttags = get_the_tags();
            if ($posttags) {
              echo '<div class="tags">';
              $count = 0;
              echo 'Tags: ';
              foreach($posttags as $tag) {
                echo '<a class="tag" href="' . get_tag_link($tag->term_id) . '">' . $tag->name . '</a>' . ($count < count($posttags)-1 ? ', ' : '');
                $count++;
              }
              echo '</div>';
            }
            ?>
          </div>

          <div class="post-body">
            <?php the_content(); ?>
          </div>

          <div class="divider"></div>

          <div class="post-comments">
            <?php comments_template(); ?>
          </div>

        </article>
        <!-- end post -->

      </div>
      <!-- end posts -->
    </section>
    <!-- end main-section -->
    <?php get_sidebar(); ?>
  </div><!-- end page-wrap -->


<?php get_footer(); ?>