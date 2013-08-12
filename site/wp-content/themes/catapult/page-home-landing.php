<?php

/*
  Template Name: Home Landing Page
*/

?>

<?php

$error = 'false';
$error_message = 'No error';

// TODO -- If this page is loaded with an error from the form submission, we need to show the form with errors
// get the credit card details submitted by the form
// If we're on this page and there's a token, it means the person came here from the donation form
if (isset($_POST['stripeToken'])) {
  $token = $_POST['stripeToken'];

  // Capture parts of the form that we will insert into WP if the person decides to add a quote
  $_SESSION['fullName'] = $_POST['full-name'];
  $_SESSION['email'] = $_POST['billing-email'];
  $_SESSION['street'] = $_POST['billing-street'];
  $_SESSION['city'] = $_POST['billing-city'];
  $_SESSION['state'] = $_POST['billing-state'];
  $_SESSION['zip'] = $_POST['billing-zipcode'];
  $_SESSION['phone'] = $_POST['billing-telephone'];

  // session_write_close();

  // create the charge on Stripe's servers - this will charge the user's card

  include_once ABSPATH . "wp-content/themes/catapult/stripe-php/lib/Stripe.php";
  // set your secret key: remember to change this to your live secret key in production
  // see your keys here https://manage.stripe.com/account
  Stripe::setApiKey("sk_test_qEFmlubevcYzBN6nIgq0FNyb");

  try {
    $charge = Stripe_Charge::create(array(
        "amount" => intval($_POST['donation-amount']) * 100, // amount in cents
        "currency" => "usd",
        "card" => $token,
        "description" => $_POST['billing-email'])
    );
  } catch (Stripe_CardError $e) {
    // Since it's a decline, Stripe_CardError will be caught
    // $body = $e->getJsonBody();
    // $err  = $body['error'];
    // var_dump($e);
    $error_message = "Your credit card was declined.";
    $error = 'true';
  } catch (Stripe_InvalidRequestError $e) {
    // Invalid parameters were supplied to Stripe's API
    // var_dump($e);
    $error_message = "There was a problem on our side.";
    $error = 'true';
  } catch (Stripe_AuthenticationError $e) {
    // Authentication with Stripe's API failed
    // (maybe you changed API keys recently)
    // var_dump($e);
    $error_message = "There was a problem on our side.";
    $error = 'true';
  } catch (Stripe_ApiConnectionError $e) {
    // Network communication with Stripe failed
    // var_dump($e);
    $error_message = "There was a problem connecting to the server.";
    $error = 'true';
  } catch (Stripe_Error $e) {
    // Display a very generic error to the user, and maybe send
    // yourself an email
    // var_dump($e);
    $error_message = "There was an unknown problem.";
    $error = 'true';
  } catch (Exception $e) {
    // Something else happened, completely unrelated to Stripe
    // var_dump($e);
    $error_message = "There was an unknown problem.";
    $error = 'true';
  }

  // If there are no errors, show the thank you page
  if ($error == 'false') {
    header("Location: " . home_url('/thanks/'));
  }
}


?>
<?php get_header(); ?>
  <script>
    var formError = "<?php echo $error; ?>";
    var formErrorMessage = "<?php echo $error_message; ?>";
  </script>

  <section class="overlay hide" id="overlay">
    <div class="overlay-bg"></div>
    <div class="overlay-inner">
      <a href="#" class="close-button" id="overlay-close-button"></a>
      <div class="overlay-content"></div>
    </div>
  </section>

  <!--<section class="intro page-top" id="intro">
    <div class="row">
      <canvas id="intro__canvas" width="900px" height="500px">
        <p>Catapult Design is a non-profit design firm providing engineering and implementation support to the thousands of organizations in need of technologies or products. The net benefit of our activities is nothing less than a fundamental improvement in the lives of those who need it most.</p>
      </canvas>
    </div>
  </section>--><!-- end intro -->
  <section class="intro page-top row">
    <h1>At Catapult Design, we <span class="header-title level-one">IDEATE</span>, <span class="header-title level-two">PROTOTYPE</span>, <span class="header-title level-three">COMMECIALIZE</span>, <span class="header-title level-four">IMPLEMENT</span> &amp; <span class="header-title level-five">EDUCATE</span> to close the gap in equality &raquo;</h1>
    <div id="slides">
      <?php
      $index = 0;
      $the_query = new WP_Query(array('post_type' => 'homepageslideshow', 'posts_per_page' => '-1'));
      while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
        <div class="slideshow-item">
          <a href="<?php the_field('link'); ?>">
            <img src="<?php the_field('image'); ?>" alt="" class="slideshow-image" />
            <h3 class="slideshow-caption"><?php the_field('caption'); ?></h3>
          </a>
        </div>
        <?php $index++; ?>
      <?php endwhile; ?>
      
      <?php wp_reset_postdata(); ?>
    </div>
  </section>
  <hr />

  <!--<section class="keyofferings hide" id="keyofferings">
    <?php //include(ABSPATH . "wp-content/themes/catapult/inc/keyofferings.php"); ?>
  </section>--><!-- end keyofferings -->

  <!--<section class="casestudies" id="casestudies">
    <div id="casestudies-container">
      <article class="casestudy">
        <div id="casestudy-images" class="casestudy-images">
          <ul id="casestudy-images-sub">
            <?php //include(ABSPATH . "wp-content/themes/catapult/inc/casestudies-images.php"); ?>
          </ul>
        </div>
        <div id="casestudy-content" class="swipe">
          <ul id="casestudy-content-sub">
            <?php //include(ABSPATH . "wp-content/themes/catapult/inc/casestudies.php"); ?>
          </ul>
        </div>
        <div class="paddles">
          <a class="paddle prev" href="#" tabindex="13" id="casestudy-paddle-prev"><img src="<?php //bloginfo('template_url'); ?>/img/homepage/casestudies/arrows/arrow-left.png"/></a>
          <a class="paddle next" href="#" tabindex="14" id="casestudy-paddle-next"><img src="<?php //bloginfo('template_url'); ?>/img/homepage/casestudies/arrows/arrow-right.png"/></a>
        </div>
      </article>
    </div>
  </section>-->

  <section class="featured row">
    <h1>Our <span class="header-title level-one">FEATURES</span> &amp; <span class="header-title level-two">PUBLICATIONS</span> include &raquo;</h1>
    <ul class="featured-logos nolist clearfix">
      <li><a href=""><img src="<?php bloginfo('template_url'); ?>/img/logos/fast-company-logo.png" alt=""/></a></li>
      <li><a href=""><img src="<?php bloginfo('template_url'); ?>/img/logos/pop-tech-logo.png" alt=""/></a></li>
      <li><a href=""><img src="<?php bloginfo('template_url'); ?>/img/logos/new-yorker-logo.png" alt=""/></a></li>
      <li><a href=""><img src="<?php bloginfo('template_url'); ?>/img/logos/good-logo.png" alt=""/></a></li>
      <li><a href=""><img src="<?php bloginfo('template_url'); ?>/img/logos/wired-logo.png" alt=""/></a></li>
    </ul>
  </section>
  <hr />

  <section class="locations row" id="locations">
    <div id="map-callout" class="clearfix hide">
      <a href="#" class="close-button"></a>
      <div class="map-callout-img"></div>
      <div class="map-callout-content">
        <h2 class="header-title"></h2>
        <h3></h3>
        <p></p>
      </div>
    </div>
    <h1>Headline about <span class="header-title level-one">PROJECTS</span> here &raquo;</h1>
    <div id="locations-map"></div>
    <div class="map-footer clearfix">
      <h2><span class="header-title">FILTER</span> by <span class="header-title">INDUSTRY</span></h2>
      <ul class="clearfix">
        <li><h2 class="header-title"><a href="#" class="location-filter active" id="js-location-filter-all" data-tag="all">ALL</a></h2></li>
        <li><h2 class="header-title"><a href="#" class="location-filter" id="js-location-filter-water" data-tag="water">WATER</a></h2></li>
        <li><h2 class="header-title"><a href="#" class="location-filter" id="js-location-filter-enterprise" data-tag="enterprise">ENTERPRISE</a></h2></li>
        <li><h2 class="header-title"><a href="#" class="location-filter" id="js-location-filter-energy" data-tag="energy">ENERGY</a></h2></li>
        <li><h2 class="header-title"><a href="#" class="location-filter" id="js-location-filter-health" data-tag="health">HEALTH</a></h2></li>
        <li><h2 class="header-title"><a href="#" class="location-filter" id="js-location-filter-mobility" data-tag="mobility">MOBILITY</a></h2></li>
      </ul>
    </div>
  </section>
  <hr />

  <section class="team" id="team">
    <div class="row">
      <h1>Meet the Catapult <span class="header-title level-one">Team</span>, <span class="header-title level-two">Board</span> &amp; <span class="header-title level-three">Advisors</span>.</h1>
      <?php include(ABSPATH . "wp-content/themes/catapult/inc/team.php"); ?>
    </div>
  </section><!-- end team -->
  <hr />

  <!--<section class="partners drawer" id="partners">
    <div id="js-partners-content" class="drawer__content">
      <div class="row">
        <h1 class="title-shadow">our <span class="header-title orange">PARTNERS</span> &amp; <span class="header-title green">SPONSORS</span></h1>
        <p><span class="header-title">We&apos;re constantly working to build our network</span> to offer the best service possible to our clients. We invite organizations in this field to partner with us on funding, design, and distribution.</p>
        <?php //include(ABSPATH . "wp-content/themes/catapult/inc/partners.php"); ?>
        <p>If you&apos;re a company, individual, or service-provider interested in partnering with or sponsoring Catapult&apos;s work, please <a href="#contact">contact us</a>.</p>
      </div>
      <a href="#" class="close-button ir">Close</a>
      <div class="bottom-peek"></div>
    </div>
    <div class="center-tag-wrap">
      <a href="#" class="center-tag center-tag--purple center-tag--secondary header-title fancy on-dark-bg" id="partners-center-tag" tabindex="32"><span class="center-tag__title">MEET OUR PARTNERS</span></a>
    </div>
  </section>--><!-- end partners -->

  <section class="contact" id="contact">
    <div class="row">
      <h1><span class="header-title level-one">FOLLOW</span>, <span class="header-title level-two">LIKE</span> &amp; <span class="header-title level-three">CONTACT</span> Us.</h1>
      <div class="divider"></div>
      <div class="col-wrap">
        <div class="two-col margin-right">
          <div class="contact-section">
            <a href="https://maps.google.com/maps?q=972+Mission+Street,+San+Francisco,+CA&hl=en&sll=37.7577,-122.4376&sspn=0.330606,0.468636&oq=972+mission+&t=v&hnear=972+Mission+St,+San+Francisco,+California+94103&z=17"
                class="contact-button contact-button--street header-title">
              <span>972 Mission St, 5TH FLOOR</span>
            </a>
            <p class="contact__subtitle">San Francisco, CA 94103</p>
          </div>
          <div class="contact-section">
            <a href="<?php echo site_url('/events'); ?>" class="contact-button contact-button--openhouse header-title"><span>Open Studio</span></a>
            <p class="contact__subtitle">4-6PM Every 1st and 3rd Wednesday</p>
          </div>
          <p>Have a question about Catapult, want to see our projects in person, or interested in working with us? Join us for open studio!</p>
        </div>
        <!-- end column -->
        <div class="two-col margin-left">
          <div class="map">
            <img src="https://maps.googleapis.com/maps/api/staticmap?center=972+Mission+Street,+San+Francisco,+CA&zoom=17&size=600x300&sensor=false&markers=label:C%7C972+Mission+Street,+San+Francisco,+CA" alt="">
          </div>
        </div>
        <!-- end column -->
      </div>

      <div class="col-wrap contact__buttons">
        <div class="two-col margin-right">
          <a href="mailto:info@catapultdesign.org" class="contact-button contact-button--email header-title" tabindex="33">INFO&#64;CATAPULTDESIGN.ORG</a>
          <a href="https://twitter.com/Catapult_Design" class="contact-button contact-button--twitter header-title" tabindex="34">&#64;CATAPULT_DESIGN</a>
          <a href="https://www.facebook.com/CatapultDesign" class="contact-button contact-button--facebook header-title" tabindex="35">/CATAPULT-DESIGN</a>
        </div>
        <div class="two-col margin-left">
          <a href="http://oi.vresp.com/?fid=9fcbd66d02" class="contact-button contact-button--newsletter header-title" tabindex="36">SUBSCRIBE TO NEWSLETTER</a>
          <a href="http://www.youtube.com/user/CatapultDesign" class="contact-button contact-button--youtube header-title" tabindex="37">/CATAPULTDESIGN</a>
          <a href="<?php echo site_url('/faq-and-press-kit/'); ?>" class="contact-button contact-button--faq header-title" tabindex="38">FAQ &amp; PRESSKIT</a>
        </div>
      </div>
    </div>
  </section><!-- end contact -->
  <hr />

  <!--<section class="events drawer" id="events">
    <div id="js-events-content" class="drawer__content">
      <div class="row">
        <h1 class="drawer__content__title header-title title-shadow">Upcoming Events</h1>

        <?php
//        include_once(ABSPATH . "wp-content/themes/catapult/inc/NewsParser.php");
//        $eventJSON = NewsParser::loadJSON(NewsParser::getRootURL() . "/?json=get_recent_posts&dev=1&post_type=event&custom_fields=header_image");
//        $eventPosts = NewsParser::commonize($eventJSON["posts"], "post"); ?>
        <div class="events__group">
          <? //foreach ($eventPosts as $eventPost) : ?>
            <div class="events__group__event">
              <h3 class="events__group__event-title header-title"><? //echo $eventPost->title; ?></h3>
              <p class="events__group__event-body"><? //echo $eventPost->excerpt; ?> <a href="<? //echo $eventPost->link; ?>" title="">More details &raquo;</a></p>
            </div>
          <? //endforeach; ?>
        </div>
      </div>
      <a href="#" class="close-button ir">Close</a>
      <div class="bottom-peek"></div>
    </div>
    <div class="center-tag-wrap">
      <a href="#" class="center-tag center-tag--secondary header-title fancy on-dark-bg" id="events-center-tag" tabindex="39"><span class="center-tag__title">Attend a Catapult Event</span></a>
    </div>
  </section>--><!-- end events -->

  <section class="donate" id="donate">
    <div class="row">
      <h1><span class="header-title level-one">SUPPORT</span> Catapult</h1>
      <div class="divider"></div>
      <h3 class="header-title">Catapult Design is a 501(c)(3) non-profit and all donations are tax-deductible.</h3>
      <h4 class="header-title">Your donation supports</h4>
      <p>Materials and prototype budget for our project work, tools (from wrenches to software) our designers need to get the job done, travel costs associated with assessment and implementation, and our designers who are committed to using their skills to make a difference. If you have questions regarding how your donation will be used, please contact us as info@catapultdesign.org.</p>
      <h4 class="header-title">Corporate matching</h4>
      <p>Catapult is currently registered with corporate matching programs at: Google, Microsoft, Applied Materials, and the Gordon and Betty Moore Foundation.</p>
      <h4 class="header-title">To donate by check</h4>
      <p>Write out your donation to “Catapult Design” and mail to Catapult Design, 972 Mission St. Suite 500, San Francisco, CA 94103.</p>
      <h4 class="header-title">To donate online</h4>
      <p>We accept secure online donations through both Google Checkout and Paypal. Recurring donations are only available through PayPal.</p>
      <?php include(ABSPATH . "wp-content/themes/catapult/inc//donation_form.php"); ?>
    </div>
    <!-- end row -->
  </section><!-- end donate -->

<?php get_footer(); ?>