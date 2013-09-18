<?php

/*
  Template Name: Thanks Landing Page
*/

/*
 * This page is a Thank you page that appears after donating.
 */

?>

<?php

require ABSPATH . "wp-admin/includes/image.php";
require ABSPATH . "wp-admin/includes/file.php";
require ABSPATH . "wp-admin/includes/media.php";

// If we're on this page and there's a quote, it means the person came here from adding a quote
if (isset($_POST['fullName'])) {

  // Grab their name and other info to add to WP

  // First, create a new Member post
  $post = array(
    'post_type' => 'member',
    'post_title' => $_POST['fullName'],
    'post_status' => 'pending',
    'post_author' => 1
  );

  $post_id = wp_insert_post($post);
  $upload_dir = wp_upload_dir();
  $overrides = array('test_form' => FALSE);

  // Second, upload and insert the image as their avatar (and the featured image on the post)
  /*$file_array = array(
    'name' => $_FILES['img']['name'][0],
    'type' => $_FILES['img']['type'][0],
    'tmp_name' => $_FILES['img']['tmp_name'][0],
    'error' => $_FILES['img']['error'][0],
    'size' => $_FILES['img']['size'][0]
  );

  if (!empty($file_array['name'])) {

    $attachment_id = media_handle_upload('img', $post_id);
    update_post_meta($post_id, '_thumbnail_id', $attachment_id);
    $attachment_data = array(
      'ID' => $attachment_id,
      'post_excerpt' => 'Person Avatar'
    );
    wp_update_post($attachment_data);
  }*/

  // Finally, add the metadata (custom fields) to the new Member.
  // These are things like email, address, etc.

  add_post_meta($post_id, "full_name", $_SESSION['fullName']);
  add_post_meta($post_id, "email_address", $_SESSION['email']);
  add_post_meta($post_id, "street", $_SESSION['street']);
  add_post_meta($post_id, "city", $_SESSION['city']);
  add_post_meta($post_id, "state", $_SESSION['state']);
  add_post_meta($post_id, "zip", $_SESSION['zip']);
  add_post_meta($post_id, "phone", $_SESSION['phone']);
  add_post_meta($post_id, "twitter_handle", $_POST['twitterHandle']);

  // Destroy the session
  $_SESSION = array();
  session_destroy();
}

?>
<?php get_header(); ?>

  <script>
    var $_SESSION = <?php echo json_encode($_SESSION); ?>;
    var $_POST = <?php echo json_encode($_POST); ?>;
  </script>
  <script src="<?php bloginfo('template_url'); ?>/js/thanks.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/thanks-page.js"></script>

  <section class="overlay hide" id="thanks-overlay">
    <div class="overlay-inner">
      <a href="#" class="close-button" id="overlay-close-button"></a>

      <div class="overlay-content">
        <h1 class="overlay-name header-title">Thank you! Your donation has been received.</h1>

        <p class="overlay-body">We'd love to tell the world about your support by listing your name on our site.</p>

        <form class="overlay__form" id="form-add-name" action="#" method="POST" enctype="multipart/form-data">

          <div class="overlay__form__item">
            <input id="js-add-name" class="overlay__form__input" type="radio" name="addname-yes" value="yes"/>
            <span>Yes, please include my name on catapultdesign.org.</span>
          </div>
          <div class="overlay__form__item">
            <input id="js-no-add-name" class="overlay__form__input" type="radio" name="addname-no" value="no"/>
            <span>No thanks. Please don't include my name.</span>
          </div>

          <div id="js-add-name-section" class="hide">
            <p>Name as you would like it to appear on catapultdesign.org:</p>
            <input type="text" class="overlay__form__input" placeholder="name" name="fullName" value="<?php if (isset($_SESSION['fullName'])) {
              echo $_SESSION['fullName'];
            } ?>">

            <p>If you&apos;d like us to thank you on Twitter, enter your Twitter handle here:</p>
            <input type="text" class="overlay__form__input" placeholder="Enter your Twitter handle" name="twitterHandle">
            <div class="overlay__form__item"><input id="js-quote-submit" class="clicky-button" type="Submit" value="Submit"></div>
          </div>

        </form>
      </div>
    </div>
  </section>

  <div id="page-wrap">

    <div class="row page-top">

      <h1>Our team <span class="header-title level-one">thanks you</span> for <span class="header-title level-two">your support</span>!</h1>

      <div class="donors">
        <ul class="donors__list">
          <li class="donors__list__item">
            <img src="<?php bloginfo('template_url'); ?>/img/homepage/team/155x155/heather.jpg" alt="Heather Fleming">
          </li>
          <li class="donors__list__item">
            <img src="<?php bloginfo('template_url'); ?>/img/homepage/team/155x155/tyler.jpg" alt="Tyler Valiquette">
          </li>
          <li class="donors__list__item">
            <img src="<?php bloginfo('template_url'); ?>/img/homepage/team/155x155/david.jpg" alt="Charlie Sellers">
          </li>
          <li class="donors__list__item">
            <img src="<?php bloginfo('template_url'); ?>/img/homepage/team/155x155/noel.jpg" alt="Noel Wilson">
          </li>
          <li class="donors__list__item">
            <img src="<?php bloginfo('template_url'); ?>/img/homepage/team/155x155/karin.jpg" alt="Karin Carter">
          </li>
        </ul>
      </div>
      <!-- end donors -->

      <div class="subhead">
        <?php the_content(); ?>
      </div>
      
      <?php
        $args = array(
          "posts_per_page" => 50,
          "post_type" => array("member")
        );
        query_posts($args);
        if (have_posts()) : ?>
          <h3>Thank you to <span class="header-title level-three">all of our donors</span>!</h3>
          <ul>
        <?php
          while (have_posts()) :
            the_post();
            $fullName = get_the_title();
      ?>
      <?php if (!empty($fullName)) : ?><li><?php echo $fullName; ?></li><?php endif; ?>
      <?php endwhile; ?>
        </ul>
      <?php endif; ?>
      <?php wp_reset_query(); ?>
    </div>
  </div><!-- end page-wrap -->

<?php get_footer(); ?>