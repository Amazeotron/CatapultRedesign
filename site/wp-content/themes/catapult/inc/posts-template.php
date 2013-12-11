<?php if (have_posts()) : ?>
  <!-- there are two columns: big on the left, small on the right -->
  <?php while (have_posts()) :
    the_post();
    $headerImage = get_field('image');
    $croppedImage = '';

    if ($headerImage) {
      $croppedImage = wp_get_attachment_image_src($headerImage["id"], 'thumbnail');
      $croppedImage = $croppedImage[0];
    } else {
      $croppedImage = get_bloginfo('template_url') . "/img/cata-placeholder.png";
    }
    
    // Filter out any projects marked as disabled
    if (get_field('disabled') == false) :
    ?>
    <article class="post-box with-bg">
      <figure>
        <img class="post-image" src="<?php echo $croppedImage; ?>" alt="<?php the_title(); ?>">
      </figure>
      <header class="post-top">
        <h1 class="post-title header-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?> &raquo;</a></h1>

        <div class="post-meta">
          <?php
          if (get_post_type() == 'post') {
            $theName = implode(' ', array(get_the_author_meta('first_name'), get_the_author_meta('last_name'))); ?>
            <span>By <?php echo $theName; ?></span> | <span><?php the_time('F j, Y'); ?></span>
          <? } else if (get_post_type() == 'project') { ?>
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
          
        </div>

        <p class="post-excerpt"><? if (get_field('slug')) {the_field('slug');} else {the_excerpt();} ?></p>
        <?php
        $categories = (array)get_the_category();
        if ($categories) {
          echo '<ul class="categories clearfix">';
          foreach ($categories as $cat) {
            echo '<li class="category header-title"><a class="category-item ' . $cat->category_nicename . '" href="' . get_category_link($cat->term_id) . '">' . $cat->category_nicename . '</a></li>';
          }
          echo '</ul>';
        } ?>

        <?
        $posttags = get_the_tags();
        if ($posttags) {
          echo '<div class="tags">';
          $count = 0;
          echo '<span class="header-title">Tags: <span></span>';
          foreach($posttags as $tag) {
            echo '<a class="tag" href="' . get_tag_link($tag->term_id) . '">' . $tag->name . '</a>' . ($count < count($posttags)-1 ? ', ' : '');
            $count++;
          }
          echo '</div>';
        }
        ?>
      </header>
      <!-- end post-top -->
    </article>
    <?php endif; ?>
    <!-- end post-box -->

  <?php endwhile; ?>

<?php else : ?>

  <h2>No posts found.</h2>

<?php
endif; ?>