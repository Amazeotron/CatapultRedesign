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
    <script type="text/javascript" src="js/post.js"></script>
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
					<li class="mainnav-item" id="mainnav-projects"><a class="fancy" href="/dev/newsite/#projects">PROJECTS</a></li>
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
				<div id="post">
					<img class="post-image" src="img/blog/testing/1.jpg" alt="Image 1">
					<h1 class="post-title emphasized">4 Ways to Break the Design Process Mold</h1>
					<span class="post-meta">By Tyler Valiquette | July 16, 2012 | 2 Comments</span>
					<div class="post-body">
						<p>At Catapult, we often don’t know what we’re doing.</p>
						<p>That doesn’t mean we don’t have a clue, just that we frequently find ourselves doing things that haven’t been done before. At least not by our clients or us. But that is the hallmark of innovation – experimenting, exploring, pushing the boundaries of what we do and how we do it. And no place provides more fertile ground for the seeds of innovation than does design – creatively trying to solve a problem to achieve a specific goal. So how do we continue to push the boundaries?</p>
						<p>Design firms the world over tout their proprietary “design process” as a veritable secret sauce to innovation, treating their particular flavor of design thinking as a patented method replete with branded stages. This is understandable. After all, we are all just trying to differentiate ourselves. And to the uninitiated it works. But, if you were to take a quick survey of all the different design processes, they all follow the same general flow. Something that goes like: explore -> create -> produce.</p>
						<p>And that’s all well and good. But there’s only so much innovation that can go on around the branding of a well-established process for tackling difficult challenges. Our feeling is that one of the areas in which designers can deeply innovate is not by simply following a tried-and-true process and repeatedly applying the same methods; but by also devising new methods and approaches to fit into the process.</p>
						<p>1. Design mind-meld – Think of creative ways to integrate your expertise into the world of your clients. Instead of doing your own independent research and preparing a report or delivering a prototype, insert a designer into your client’s team for an extended foray. By including a mind steeped in design thinking into their efforts to develop and implement a product, your client will be able to leverage the power of design much more broadly and deeply than they would have through a typical consulting agreement.</p>
					</div><!-- end post-body -->
					<hr />
					<div id="post-comments">
						<h2 class="emphasized">Comments</h2>
						
						<div class="comment">
							<span class="comment-author">Comment Author</span> | <span class="comment-date">December 20, 2012</span>
							<p class="comment-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue tempor odio, euismod aliquam ante tincidunt vel. Etiam pharetra aliquet malesuada. Mauris eget risus tortor, vitae tincidunt eros. Nam laoreet eleifend orci luctus malesuada. Aenean ut leo at lorem aliquet dapibus.</p>
						</div><!-- end comment -->
						
						<div class="comment">
							<span class="comment-author">Another Author</span> | <span class="comment-date">January 2, 2013</span>
							<p class="comment-body">Morbi sollicitudin accumsan nibh, eu pharetra lacus laoreet non. Integer condimentum justo nec ipsum rhoncus egestas. Vivamus hendrerit leo eget risus tincidunt accumsan. Nullam tempor euismod nisi tempus pulvinar.</p>
						</div><!-- end comment -->
						
						<form class="comment-form clearfix" action="post_submit" method="get" accept-charset="utf-8">
							<div class="two-col">
								<input type="text" name="name" value="" placeholder="Name">
								<input type="text" name="email" value="" placeholder="Email">
								<input type="text" name="website" value="" placeholder="Website">
							</div>
							<div class="two-col">
								<textarea name="comment" placeholder="Comment"></textarea>
								<input type="submit" name="" value="Submit">
							</div>
						</form>
					</div>
				</div><!-- end post -->
				
			</section><!-- end main-section -->
			
			<aside id="main-aside">
				<div class="search-box">
					<form action="search" method="get" accept-charset="utf-8">
						<input type="text" name="searchterm" value="" placeholder="Search">
						<input type="submit" name="searchsubmit" value="Search">
					</form>
					<div class="filters">
						<a class="link-secondary emphasized" href="#" title="View All">View All</a>
						<a class="link-secondary emphasized" href="#" title="Articles">Articles</a>
						<a class="link-secondary emphasized" href="#" title="Events">Events</a>
					</div>
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
