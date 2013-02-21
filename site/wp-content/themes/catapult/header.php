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
		<title>Catapult Design</title>
		<meta charset="<?php bloginfo('charset'); ?>">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<meta name="description" content="">
			
		<?php if (is_search()) { ?>
		   <meta name="robots" content="noindex, nofollow" /> 
		<?php } ?>
		
		<link rel="shortcut icon" href="<?php bloginfo('stylesheet_directory'); ?>/img/favicon.ico" />
		<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/uniform.default.css">
    <?php if (is_front_page()) { ?>
    	<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/main.css">
    <?php } else if (is_page('News') || is_single()) { ?>
    	<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/blog.css">
    <?php } else if (is_page('Thanks')) { ?>
    	<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/thanks.css">
    <?php } ?>
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

    <script type="text/javascript">
    	var createjs = window; // assign the namespace to the window
    </script>
    
    <script src="<?php bloginfo('template_url'); ?>/js/libs/modernizr-2.6.1.min.js"></script>
    
    <!-- Load TypeKit Fonts -->
    <script type="text/javascript">
		  (function() {
		    var config = {
		      kitId: 'ljv7wxs',
		      scriptTimeout: 3000
		    };
		    var h=document.getElementsByTagName("html")[0];h.className+=" wf-loading";var t=setTimeout(function(){h.className=h.className.replace(/(\s|^)wf-loading(\s|$)/g," ");h.className+=" wf-inactive"},config.scriptTimeout);var tk=document.createElement("script"),d=false;tk.src='//use.typekit.net/'+config.kitId+'.js';tk.type="text/javascript";tk.async="true";tk.onload=tk.onreadystatechange=function(){var a=this.readyState;if(d||a&&a!="complete"&&a!="loaded")return;d=true;clearTimeout(t);try{Typekit.load(config)}catch(b){}};var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(tk,s)
		  })();
		</script>
      
    <?php wp_head(); ?>
    
	</head>
	<body <?php body_class(); ?>>
		<!--[if lt IE 7]>
      <p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
    <![endif]-->
    <div class="floater social">
    	<ul>
    		<li class="social-item"><a href="https://twitter.com/Catapult_Design" class="social-button twitter"><span class="header-title">Follow Us</span></a></li>
    		<li class="social-item"><a href="https://www.facebook.com/CatapultDesign" class="social-button facebook"><span class="header-title">Like Us</span></a></li>
    		<li class="social-item"><a href="<?php bloginfo('template_url'); ?>/?feed=rss2" class="social-button rss"><span class="header-title">RSS Feed</span></a></li>
    	</ul>
    </div><!-- end floater -->
    <header class="header">
			<a href="<?php echo home_url('/'); ?>" class="logo">
				<img class="logo--full" src="<?php bloginfo('template_url'); ?>/img/catapult-logo.svg" alt="Catapult Design" />
				<img class="logo--partial" src="<?php bloginfo('template_url'); ?>/img/cog-partial.png" alt="Catapult Design" />
			</a>
			<nav class="mainnav">
				<ul>
					<li class="mainnav-item" id="mainnav-projects"><a class="header-title fancy mainnav-item-link" href="<?php echo home_url('/#projects'); ?>">CASE STUDIES</a></li>
					<li class="mainnav-item" id="mainnav-team"><a class="header-title fancy mainnav-item-link" href="<?php echo home_url('/#team'); ?>">TEAM</a></li>
					<li class="mainnav-item" id="mainnav-contact"><a class="header-title fancy mainnav-item-link" href="<?php echo home_url('/#contact'); ?>">CONTACT</a></li>
					<li class="mainnav-item" id="mainnav-donate"><a class="header-title fancy mainnav-item-link" href="<?php echo home_url('/#donate'); ?>">DONATE</a></li>
					<li class="mainnav-item blog" id="mainnav-blog"><a class="header-title fancy mainnav-item-link" href="<?php echo home_url('/news'); ?>">NEWS</a></li>
				</ul>
			</nav>
			<div class="header-divider"></div>
		</header>
		
		<section id="header-drawer" class="hide">
			<div class="news">
				<div class="news-secondary">
					<h2 class="news-title header-title">Our Approach and Philosophy</h2>
					<div class="news-video">
						<iframe width="100%" height="70%" src="http://www.youtube.com/embed/sNqi2WRm5eQ?rel=0" frameborder="0" allowfullscreen></iframe>
					</div>
				</div><!-- end news-secondary -->
				<div class="news-primary">
					<h2 class="news-title header-title">Join the Team!</h2>
					<p class="news-body">Do you know who Martin Fisher is? Is Mastering the Machine your favorite book? Is your idea of vacation traveling to Malawi? You may be a perfect fit.</p>
					
					<?php
					include_once "NewsParser.php";
					$jobJSON = NewsParser::loadJSON(NewsParser::getRootURL() . "/?json=get_recent_posts&dev=1&post_type=job&custom_fields=header_image");
					$jobPosts = NewsParser::commonize($jobJSON["posts"], "post"); ?>
					<div class="news-jobs">
					<? foreach ($jobPosts as $jobPost) : ?>
						<div class="news-job">
						<h3 class="news-job-title header-title"><? echo $jobPost->title; ?></h3>
						<p class="news-body"><? echo $jobPost->excerpt; ?> <a href="<? echo $jobPost->link; ?>" title="">More details &raquo;</a></p>
						</div>
					<? endforeach; ?>
					</div>
					
				</div><!-- end news-primary -->
			</div><!-- end news -->
			<div class="center-tag-wrap">
				<a class="center-tag center-tag--primary header-title fancy" id="header-center-tag" href="#"><span class="center-tag__title">CURRENTLY</span></a>
			</div>
		</section><!-- end header-drawer -->