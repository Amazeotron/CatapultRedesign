<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
	<head>
		<title>Catapult Design - Intro Canvas Prototype</title>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="description" content="">

		<link rel="stylesheet" href="css/uniform.default.css">
    <link rel="stylesheet" href="css/blog.css">

    <script type="text/javascript">
    	var createjs = window; // assign the namespace to the window
    </script>
    <script type="text/javascript" src="js/libs/modernizr-2.6.1.min.js"></script>
    <script type="text/javascript" src="//use.typekit.net/ljv7wxs.js"></script>
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
    <script type="text/javascript" src="js/libs/jquery-1.8.0.min.js"></script>
    <script type="text/javascript" src="js/libs/jquery.uniform.min.js"></script>
    <script type="text/javascript" src="js/blog.js"></script>
	</head>
	<body>
		<!--[if lt IE 7]>
      <p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
    <![endif]-->
    <div class="floater social">
    	<ul>
    		<li class="social-item"><a href="#" class="social-button twitter"><span>FOLLOW US</span></a></li>
    		<li class="social-item"><a href="#" class="social-button facebook"><span>LIKE US</span></a></li>
    		<li class="social-item"><a href="#" class="social-button rss"><span>RSS FEED</span></a></li>
    	</ul>
    </div><!-- end floater -->
    <header class="header">
			<object class="logo" data="img/homepage/catapult-logo.svg" type="image/svg+xml"></object>
			<nav class="mainnav">
				<ul>
					<li class="mainnav-item" id="mainnav-projects"><a class="fancy" href="/dev/newsite/index.php#projects">PROJECTS</a></li>
					<li class="mainnav-item" id="mainnav-team"><a class="fancy" href="/dev/newsite/#team">TEAM</a></li>
					<li class="mainnav-item" id="mainnav-contact"><a class="fancy" href="/dev/newsite/#contact">CONTACT</a></li>
					<li class="mainnav-item" id="mainnav-donate"><a class="fancy" href="/dev/newsite/#donate">DONATE</a></li>
					<li class="mainnav-item blog" id="mainnav-blog"><a class="fancy" href="http://catapultdesign.org/site/blog">BLOG</a></li>
				</ul>
			</nav>
			<div class="header-divider"></div>
		</header>
		
		<section class="hide" id="header-drawer">
			<a class="center-tag fancy" id="header-center-tag" href="#"><span>NEWS</span></a>
			<div class="news hide">
				<div class="news-primary">
					<?php
					include 'TwitterRSSParser.php';
					$feed = new TwitterRSSParser();
					$output = $feed->init('https://api.twitter.com/1/statuses/user_timeline.rss?screen_name=Catapult_Design', "");
					echo $output;
					?>
				</div>
				<div class="horiz-divider right"></div>
				<div class="horiz-divider left"></div>
				<div class="news-secondary">
					<p>This is some content in the news-secondary area.</p>
				</div>
			</div><!-- end news -->
		</section><!-- end header-drawer -->
		
		<!-- there are two columns: big on the left, small on the right -->
		<div id="page-wrap">
			<section id="main-section">
				<div id="posts">
					<div class="post-box">
						<img class="post-image" src="img/blog/testing/1.jpg" alt="Image 1" width="100%">
						<div class="post-top">
							<h3 class="post-title emphasized">This is a blog title</h3>
							<div class="tags">
								<span class="tag emphasized education">EDUCATION</span>
								<span class="tag emphasized newsletter">NEWSLETTER</span>
								<span class="tag emphasized insights">INSIGHTS</span>
								<span class="tag emphasized innovation">INNOVATION</span>
							</div>
						</div><!-- end post-top -->
						<div class="post-meta">
							<span>Catapult Design Newsletter</span> | <span>December 31, 2012</span>
						</div>
					</div><!-- end post-box -->
					
					<div class="post-box">
						<img class="post-image" src="img/blog/testing/2.jpg" alt="Image 2" width="100%">
						<div class="post-top">
							<h3 class="post-title emphasized">This is a blog title</h3>
							<div class="tags">
								<span class="tag emphasized education">EDUCATION</span>
								<span class="tag emphasized newsletter">NEWSLETTER</span>
								<span class="tag emphasized insights">INSIGHTS</span>
								<span class="tag emphasized innovation">INNOVATION</span>
							</div>
						</div><!-- end post-top -->
						<div class="post-meta">
							<span>Catapult Design Newsletter</span> | <span>December 31, 2012</span>
						</div>
					</div><!-- end post-box -->
					
					<div class="post-box">
						<img class="post-image" src="img/blog/testing/3.jpg" alt="Image 3" width="100%">
						<div class="post-top">
							<h3 class="post-title emphasized">This is a blog title</h3>
							<div class="tags">
								<span class="tag emphasized education">EDUCATION</span>
								<span class="tag emphasized newsletter">NEWSLETTER</span>
								<span class="tag emphasized insights">INSIGHTS</span>
								<span class="tag emphasized innovation">INNOVATION</span>
							</div>
						</div><!-- end post-top -->
						<div class="post-meta">
							<span>Catapult Design Newsletter</span> | <span>December 31, 2012</span>
						</div>
					</div><!-- end post-box -->
					
				</div><!-- end posts -->
			</section><!-- end main-section -->
			
			<aside id="main-aside">
				<div class="search-box">
					<form action="search" method="get" accept-charset="utf-8">
						<input type="text" name="searchterm" value="" placeholder="Search">
						<input type="submit" name="searchsubmit" value="Search">
					</form>
					<ul class="filters">
						<li><a class="link-secondary emphasized" href="#" title="View All">View All</a></li>
						<li><a class="link-secondary emphasized" href="#" title="Articles">Articles</a></li>
						<li><a class="link-secondary emphasized" href="#" title="Events">Events</a></li>
					</ul>
				</div><!-- end search-box -->
					
			</aside><!-- end main-aside -->
		</div><!-- end page-wrap -->
		
		
		<footer>
			<div class="row">
				
				<div class="address three-col">
					<p>Catapult Design<br/>
					972 Mission Street, 5th Floor<br/>
					San Francisco, CA 94103</p>
				</div>
				<div class="three-col">
					<a href="mailto:info@catapultdesign.org" class="contact-button small email"><h3>info@catapultdesign.org</h3></a>
					<a href="https://twitter.com/Catapult_Design" class="contact-button small twitter"><h3>@catapult_design</h3></a>
					<a href="https://www.facebook.com/CatapultDesign" class="contact-button small facebook"><h3>facebook.com/catapult-design</h3></a>
				</div>
				<div class="three-col">
					<p>&copy; Copyright 2013 Catapult Design</p>
				</div>
			</div>
			
		</footer>
	</body>
</html>
