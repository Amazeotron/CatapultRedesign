<!--
   __          ________     _______     _______      __     __   __
  |\ \        |\ \ __\ \   |\  _____\  |\  _____\   |\ \   / /  |\ \
  \ \ \       \ \ \ __\ \  \ \ \ _/ /  \ \ \ _/ /   \ \ \ / /   \ \_\
   \ \ \____   \ \ \ _|\ \  \ \ \_ /__  \ \ \_ /__   \ \_  /     \|_|_
    \ \______\  \ \_\ \ \_\  \ \_\\|\_\  \ \_\\|\_\   \_/_/        |\_\
     \|______|   \|_|  \|_|   \| | \|_|   \| | \|_|    |_/          \_|
            Coded By Larry Lague, larrylague.com
-->

<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" <?php language_attributes(); ?>> <!--<![endif]-->
  <head>
    <title>Catapult Design - <?php the_title(); ?></title>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta name="description" content="">
      
    <?php if (is_search()) { ?>
       <meta name="robots" content="noindex, nofollow" /> 
    <?php } ?>
    
    <link rel="shortcut icon" href="<?php bloginfo('stylesheet_directory'); ?>/img/favicon.ico" />
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/uniform.default.css">
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/main.css">
    
    <?php if (is_page('Home')) { ?>
      <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/js/libs/leaflet/leaflet.css">
      <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/js/libs/leaflet/markercluster/MarkerCluster.css">
      <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/js/libs/leaflet/markercluster/MarkerCluster.Default.css">
    <!--[if lte IE 8]>
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/js/libs/leaflet/leaflet.ie.css">
    <![endif]-->
    
    <?php } ?>
    
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

    <script type="text/javascript">
      var createjs = window; // assign the namespace to the window
    </script>
    
    <script src="<?php bloginfo('template_url'); ?>/js/libs/modernizr-2.6.1.min.js"></script>
    <script>
    Modernizr.load({
      test: window.matchMedia,
      yep: "<?php bloginfo('template_url'); ?>/js/libs/enquire.js",
      nope: ["<?php bloginfo('template_url'); ?>/js/libs/matchMedia.js", "<?php bloginfo('template_url'); ?>/js/libs/matchMedia.addListener.js"]
    });
    </script>
    
    <!-- Load TypeKit Fonts -->
    <script type="text/javascript" src="//use.typekit.net/ljv7wxs.js"></script>
    <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
      
    <?php wp_head(); ?>
    
  </head>
  <body <?php body_class(); ?>>
    <!--[if lt IE 7]>
      <p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
    <![endif]-->
    <div class="floater social">
      <ul>
        <li class="social-item"><a href="https://twitter.com/Catapult_Design" class="social-button contact-button contact-button--twitter"><span class="header-title">Follow Us</span></a></li>
        <li class="social-item"><a href="https://www.facebook.com/CatapultDesign" class="social-button contact-button contact-button--facebook"><span class="header-title">Like Us</span></a></li>
        <li class="social-item"><a href="<?php echo home_url('/'); ?>?feed=rss2" class="social-button contact-button contact-button--link"><span class="header-title">RSS Feed</span></a></li>
      </ul>
    </div><!-- end floater -->
    <header class="header">
      <a href="<?php echo home_url('/'); ?>" class="logo" tabindex="1">
        <img class="logo--full" src="<?php bloginfo('template_url'); ?>/img/catapult-logo.svg" alt="Catapult Design" />
        <img class="logo--partial" src="<?php bloginfo('template_url'); ?>/img/cog-partial.png" alt="Catapult Design" />
      </a>
      <nav class="mainnav">
        <ul>
          <li class="mainnav-item" id="mainnav-projects"><a tabindex="2" class="header-title fancy mainnav-item-link" href="<?php echo home_url('/#projects'); ?>">PROJECTS</a></li>
          <li class="mainnav-item" id="mainnav-team"><a tabindex="3" class="header-title fancy mainnav-item-link" href="<?php echo home_url('/#team'); ?>">TEAM</a></li>
          <li class="mainnav-item" id="mainnav-contact"><a tabindex="4" class="header-title fancy mainnav-item-link" href="<?php echo home_url('/#contact'); ?>">CONTACT</a></li>
          <li class="mainnav-item" id="mainnav-donate"><a tabindex="5" class="header-title fancy mainnav-item-link" href="<?php echo home_url('/#donate'); ?>">DONATE</a></li>
          <li class="mainnav-item blog" id="mainnav-blog"><a tabindex="6" class="header-title fancy mainnav-item-link" href="<?php echo home_url('/news'); ?>">NEWS</a></li>
        </ul>
      </nav>
      <div class="header-divider"></div>
    </header>