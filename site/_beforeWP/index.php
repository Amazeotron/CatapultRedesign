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
    <link rel="stylesheet" href="css/main.css">

    <script type="text/javascript">
    	var createjs = window; // assign the namespace to the window
    </script>
    <script type="text/javascript" src="js/libs/modernizr-2.6.1.min.js"></script>
    <script type="text/javascript" src="//use.typekit.net/ljv7wxs.js"></script>
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
    <script type="text/javascript" src="js/libs/easeljs-0.5.0.min.js"></script>
    <script type="text/javascript" src="js/libs/tweenjs-0.3.0.min.js"></script>
    <script type="text/javascript" src="js/libs/preloadjs-0.2.0.min.js"></script>
    <script type="text/javascript" src="js/libs/jquery-1.8.0.min.js"></script>
    <script type="text/javascript" src="js/libs/signalbox.js"></script>
    <script type="text/javascript" src="js/libs/jquery.uniform.min.js"></script>
    <script type="text/javascript" src="js/SignalBoxWrapper.js"></script>
    <script type="text/javascript" src="js/ImagePreloader.js"></script>
    <script type="text/javascript" src="js/intro.js"></script>
    <script type="text/javascript" src="js/casestudies.js"></script>
    <script type="text/javascript" src="js/team.js"></script>
    <script type="text/javascript" src="js/locations.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
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
					<li class="mainnav-item" id="mainnav-projects"><a class="fancy" href="#projects">PROJECTS</a></li>
					<li class="mainnav-item" id="mainnav-team"><a class="fancy" href="#team">TEAM</a></li>
					<li class="mainnav-item" id="mainnav-contact"><a class="fancy" href="#contact">CONTACT</a></li>
					<li class="mainnav-item" id="mainnav-donate"><a class="fancy" href="#donate">DONATE</a></li>
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

		<section class="intro">
			<div class="row">
				<canvas id="intro" width="900" height="500"></canvas>
				<div class="caption">
					<p class="intro-desc">Catapult Design is a non-profit design firm providing engineering and implementation support to the thousands of organizations in need of technologies or products. The net benefit of our activities is nothing less than a fundamental improvement in the lives of those who need it most.</p>
					<a href="#keyofferings" class="what-we-do" id="what-we-do">What we do</a>
				</div>
				
				<div class="divider"></div>
			</div><!-- end row -->
		</section><!-- end intro -->
		
		<section class="keyofferings" id="keyofferings">
			<div class="row">
				<h1>Our key offerings include:</h1>
				<ul class="keyofferings-list">
					<li class="keyofferings-list-item" id="engineering"><a href="#" class="engineering" id="keyoffering-engineering-button">ENGINEERING</a></li>
					<li class="keyofferings-list-item" id="ideation"><a href="#" class="ideation" id="keyoffering-ideation-button">IDEATION</a></li>
					<li class="keyofferings-list-item" id="innovation"><a href="#" class="innovation" id="keyoffering-innovation-button">TECHNOLOGY INNOVATION</a></li>
					<li class="keyofferings-list-item" id="education"><a href="#" class="education" id="keyoffering-education-button">EDUCATION</a></li>
					<li class="keyofferings-list-item" id="insights"><a href="#" class="insights" id="keyoffering-insights-button">INSIGHTS</a></li>
					<!--<li class="keyofferings-list-item" id="systhink"><a href="#" class="systhink" id="keyoffering-systems-button">SYSTEMS THINKING</a></li>-->
				</ul>
			</div><!-- end row -->
		</section><!-- end keyofferings -->

		<section class="casestudies drawer row" id="projects">
			<div id="casestudies-bg"></div>
			<div class="center-tag"></div>
			<div class="row-header">
				<h1 id="js-casestudies-header">CASE STUDY: ENGINEERING</h1>
				<p class="casestudies-desc" id="js-casestudies-desc">At Catapult, our hands-on teams work with your company on x, y, and z. Our Not-for-profit is dedicated to facilitating... and educational programs...where companies can meet, learn, work, and share. We invest in ... so other people may thrive. Something else goes here for a nice line break.</p>
			</div>
			<div id="casestudies-container">
				<article class="casestudy row" id="">
					<div class="casestudy-images"><div id="casestudy-images-sub"></div></div>
					<div id="casestudy-content"><div id="casestudy-content-sub"></div></div>
					<ul class="paddles">
						<li class="paddle prev"><a href="#" id="casestudy-paddle-prev"><img src="img/homepage/casestudies/arrow-left.png" /></a></li>
						<li class="paddle next"><a href="#" id="casestudy-paddle-next"><img src="img/homepage/casestudies/arrow-right.png" /></a></li>
					</ul>
				</article>
			</div><!-- end casestudies-container -->
		</section><!-- end case studies -->

		<section class="team" id="team">
			<div class="row">
				<h1>Meet the Catapult <span class="emphasized level-one">Team</span>, <span class="emphasized level-two">Board</span> &amp; <span class="emphasized level-three">Advisors</span>.</h1>

				<ul class="team-members">
					<li class="team-member primary">
						<img src="img/homepage/team/heather.jpg" />
						<div class="team-member-details">
							<h3>Heather Fleming</h3>
							<h4>Founder &amp; CEO</h4>
							<h5>Catapult Design</h5>
							<p>Heather is a designer, an engineer, and an entrepreneur motivated by social... <a href="#heather" class="more">more</a></p>
						</div>
					</li><!-- end Heather -->

					<li class="team-member primary">
						<img src="img/homepage/team/tyler.jpg" />
						<div class="team-member-details">
							<h3>Tyler Valiquette</h3>
							<h4>Founder &amp; COO</h4>
							<h5>Catapult Design</h5>
							<p>Having lived, worked, and traveled extensively in Latin America in his mid... <a href="#tyler" class="more">more</a></p>
						</div>
					</li>

					<li class="team-member primary">
						<img src="img/homepage/team/noel.jpg" />
						<div class="team-member-details">
							<h3>Noel Wilson</h3>
							<h4>Lead Designer</h4>
							<h5>Catapult Design</h5>
							<p>An Industrial Designer by training, Noel previously worked in rapid prototyp... <a href="#noel" class="more">more</a></p>
						</div>
					</li>

					<li class="team-member primary col-last">
						<img src="img/homepage/team/charlie.jpg" />
						<div class="team-member-details">
							<h3>Dr. Charlie Sellers</h3>
							<h4>Technology Specialist</h4>
							<h5>Catapult Design</h5>
							<p>Combining a background in materials and processes with manufacturing managem... <a href="#charlie" class="more">more</a></p>
						</div>
					</li>

					<li class="team-member primary">
						<img src="img/homepage/team/karin.jpg" />
						<div class="team-member-details">
							<h3>Karin Carter</h3>
							<h4>Design Fellow</h4>
							<h5>Catapult Design</h5>
							<p>Karin is a designer and educator with diverse expertise as each. As an in-house... <a href="#karin" class="more">more</a></p>
						</div>
					</li>

					<li class="team-member secondary">
						<img src="img/homepage/team/catherine.jpg" />
						<div class="team-member-details">
							<h3>Catherine Howard Lovazzano</h3>
							<h4>Senior Manager, Consumer Trends</h4>
							<h5>Chrysler LLC</h5>
							<p>In her current position, Catherine leads a hybrid team of social scientists,... <a href="#catherine" class="more">more</a></p>
						</div>
					</li>

					<li class="team-member secondary">
						<img src="img/homepage/team/graham.jpg" />
						<div class="team-member-details">
							<h3>Graham Hill</h3>
							<h4>VP Interactive Planet Green, Discovery Communications Founder</h4>
							<h5>Treehugger.com</h5>
							<p>Alternately described as serial entrepreneur, do-gooder and... <a href="#graham" class="more">more</a></p>
						</div>
					</li>

					<li class="team-member col-last secondary">
						<img src="img/homepage/team/dawn.jpg" />
						<div class="team-member-details">
							<h3>Dawn Danby</h3>
							<h4>Senior Sustainability Design Manager</h4>
							<h5>Autodesk</h5>
							<p>Interdisciplinary designer Dawn Danby, recognized by Fast Company as... <a href="#dawn" class="more">more</a></p>
						</div>
					</li>

					<li class="team-member secondary">
						<img src="img/homepage/team/tom.jpg" />
						<div class="team-member-details">
							<h3>Tom Loughlin</h3>
							<h4>Executive Director</h4>
							<h5>ASME</h5>
							<p>Thomas G. Loughlin, CAE, is the executive director of ASME (American So... <a href="#tom" class="more">more</a></p>
						</div>
					</li>

					<li class="team-member secondary">
						<img src="img/homepage/team/hristo.jpg" />
						<div class="team-member-details">
							<h3>Hristo Gyoshev</h3>
							<h4>Corporate Strategy &amp; Business Management</h4>
							<h5>Yahoo! Inc.</h5>
							<p>Hristo Gyoshev is a strategist with broad interest in business, technology,... <a href="#hristo" class="more">more</a></p>
						</div>
					</li>

					<li class="team-member tertiary">
						<img src="img/homepage/team/brian.jpg" />
						<div class="team-member-details">
							<h3>Brian Lamb</h3>
							<h4>Principal</h4>
							<h5>Elevate Consulting</h5>
							<p>Brian Lamb is a visionary business and design leader at Elevate Design Cons... <a href="#brian" class="more">more</a></p>
						</div>
					</li>

					<li class="team-member col-last tertiary">
						<img src="img/homepage/team/evan.jpg" />
						<div class="team-member-details">
							<h3>Evan Thomas</h3>
							<h4>Asst Professor</h4>
							<h5>Portland State University</h5>
							<p>Evan A. Thomas, Ph.D., P.E., is an Assistant Professor and Director of the S... <a href="#evan" class="more">more</a></p>
						</div>
					</li>

					<li class="team-member tertiary">
						<img src="img/homepage/team/nathalie.jpg" />
						<div class="team-member-details">
							<h3>Nathalie Collins</h3>
							<h4>Design Strategist</h4>
							<h5>Luminary Labs</h5>
							<p>Nathalie Collins is a designer and innovator who has worked with businesses... <a href="#nathalie" class="more">more</a></p>
						</div>
					</li>

					<li class="team-member tertiary">
						<img src="img/homepage/team/gary.jpg" />
						<div class="team-member-details">
							<h3>Gary Zieff</h3>
							<h4>COO</h4>
							<h5>dissigno</h5>
							<p>Gary Zieff co-founded dissigno, an emerging markets project developmen... <a href="#gary" class="more">more</a></p>
						</div>
					</li>

					<li class="team-member tertiary">
						<img src="img/homepage/team/lauren.jpg" />
						<div class="team-member-details">
							<h3>Lauren Peters</h3>
							<h4>Art Director</h4>
							<h5>Salesforce, Inc</h5>
							<p>Lauren Peters began her work with Catapult Design in early 2009, contributi... <a href="#lauren" class="more">more</a></p>
						</div>
					</li>

					<li class="team-member col-last tertiary">
						<img src="img/homepage/team/joseph.jpg" />
						<div class="team-member-details">
							<h3>Joseph Beah</h3>
							<h4>Solutions Architect and Program Manager</h4>
							<h5></h5>
							<p>Joseph is a seasoned Program Manager and Solutions Architect with a passion... <a href="#joseph" class="more">more</a></p>
						</div>
					</li>
				</ul>
			</div>

		</section><!-- end team -->
		
		<section class="locations hide" id="locations">
			<a href="#" class="center-tag fancy dark" id="locations-center-tag"><span>SEE WHERE WE'VE WORKED</span></a>
			<h1 class="hide">CATAPULT PROJECTS</h1>
			<div class="locations-markers"></div>
		</section><!-- end locations -->

		<section class="contact" id="contact">
			<div class="row">
				<h1><span class="emphasized level-one">FOLLOW</span>, <span class="emphasized level-two">LIKE</span> &amp; <span class="emphasized level-three">CONTACT</span> Us.</h1>
				<div class="divider"></div>
				<div class="columns">
					<div class="column left two">
						<div class="contact-button contact-section street">
							<h3>972 MISSION ST, 5TH FLOOR</h3>
							<h4>SAN FRANCISCO, CA 94103</h4>
						</div>
						<div class="contact-button contact-section openhouse">
							<h3>OPEN STUDIOS</h3>
							<h4>4-6PM EVERY 1ST AND 3RD WEDNESDAY</h4>
							<p>Have a question about Catapult, want to see our projects in person, or interested in working with us? Join us for open studios!</p>
						</div>
					</div><!-- end column -->
					<div class="column right two">
						<div class="map">
							<img src="https://maps.googleapis.com/maps/api/staticmap?center=972+Mission+Street,+San+Francisco,+CA&zoom=17&size=600x300&sensor=false" alt="">
						</div>
					</div><!-- end column -->
				</div>
				<div class="divider"></div>
				<div class="columns">
					<div class="column three">
						<a href="https://twitter.com/Catapult_Design" class="contact-button contact-section twitter"><h3>&#64;CATAPULT_DESIGN</h3></a>
						<a href="mailto:info@catapultdesign.org" class="contact-button contact-section email"><h3>INFO&#64;CATAPULTDESIGN.ORG</h3></a>
					</div>
					<div class="column three">
						<a href="https://www.facebook.com/CatapultDesign" class="contact-button contact-section facebook"><h3>/CATAPULT-DESIGN</h3></a>
						<a href="http://www.youtube.com/user/CatapultDesign" class="contact-button contact-section youtube"><h3>/CATAPULTDESIGN</h3></a>
					</div>
					<div class="column three">
						<a href="http://catapultdesign.org/blog/rss" class="contact-button contact-section rss"><h3>SUBSCRIBE TO BLOG</h3></a>
					</div>
				</div>
			</div>
		</section><!-- end contact -->
		
		<section class="labs drawer hide" id="labs">
			<a href="#" class="center-tag dark fancy" id="labs-center-tag"><span>ATTEND A CATAPULT LAB SESSION</span></a>
			<div class="row">
				<h1 class="hide">UPCOMING CATAPULT LABS</h1>
				<p class="hide">At Catapult, our hands-on teams work with your company on x, y, and z. Our Not-for-profit is dedicated to facilitating... and educational programs...where companies can meet, learn, work, and share. We invest in ... so other people may thrive. Something else goes here for a nice line break.</p>
			</div>
			<a href="#" class="close ir hide">Close</a>
		</section><!-- end labs -->
		
		<section class="donate" id="donate">
			<div class="row">
				<h1><span class="emphasized level-one">SUPPORT</span> Catapult</h1>
				
				<div class="divider"></div>
				
				<h3>Catapult Design is a 501(c)(3) non-profit and all donations are tax-deductible.</h3>
				
				<h4>Your donation supports</h4> 
				<p>Materials and prototype budget for our project work, tools (from wrenches to software) our designers need to get the job done, travel costs associated with assessment and implementation, and our designers who are committed to using their skills to make a difference. If you have questions regarding how your donation will be used, please contact us as info@catapultdesign.org.</p>

				<h4>Corporate matching</h4>
				<p>Catapult is currently registered with corporate matching programs at:  Google, Microsoft, Applied Materials, and the Gordon and Betty Moore Foundation.</p>

				<h4>To donate by check</h4>
				<p>Write out your donation to “Catapult Design” and mail to Catapult Design, 972 Mission St. Suite 500, San Francisco, CA 94103.</p>

				<h4>To donate online</h4>
				<p>We accept secure online donations through both Google Checkout and Paypal. As a Google Grants recipient we pay no transaction fees on donations made through Google Checkout. Recurring donations are only available through PayPal.</p>

				<!-- <div class="divider"></div> -->
				
				<!-- Select $$ amount -->
				<form id="donation-form" action="#" method="POST" accept-charset="utf-8">
					<div class="form-item">
						<select id="donation-amount" name="donation-amount" single>
							<option value="Choose Amount">Choose Amount</option>
							<option value="$25">$25</option>
							<option value="$50">$50</option>
							<option value="$75">$75</option>
							<option value="$100">$100</option>
							<option value="$250">$250</option>
							<option value="$500">$500</option>
						</select>
					</div><!-- end form-item -->
					
					<div class="cols" id="donation-form-body">
						<div class="credit-card-info two-col clearfix">
							<h3>Credit Card Info</h3>
							<div class="form-item">
								<label for="full-name">Name as appears on card:</label>
								<input id="card-full-name" type="text" name="full-name" value="" placeholder="full name">
							</div>
							
							<div class="form-item">
								<label for="card-type">Card Type:</label>
								<select id="card-type" name="card-type" single>
									<option value="card type">card type</option>
									<option value="Visa">Visa</option>
									<option value="MasterCard">MasterCard</option>
								</select>
							</div>
							
							<div class="form-item">
								<div class="two-col card-number">
									<label for="card-number">Card number:</label>
									<input id="card-number" type="text" name="card-number" value="" placeholder="card number">
								</div>
								<div class="two-col card-cvv right">
									<label for="card-cvv">CVV code:</label>
									<input id="card-cvv" type="text" name="card-cvv" value="" placeholder="cvv">
								</div>
							</div>
							
							<div class="form-item">
								<label for="expiration">Expiration Date:</label>
								<select id="card-expiration-month" name="expiration-month" single>
									<option value="month">month</option>
									<option value="January">January</option>
									<option value="February">February</option>
									<option value="March">March</option>
									<option value="April">April</option>
									<option value="May">May</option>
									<option value="June">June</option>
									<option value="July">July</option>
									<option value="August">August</option>
									<option value="September">September</option>
									<option value="October">October</option>
									<option value="November">November</option>
									<option value="December">December</option>
								</select>
								<select id="card-expiration-year" name="expiration-year" single>
									<option value="year">year</option>
									<option value="2013">2013</option>
									<option value="2014">2014</option>
									<option value="2015">2015</option>
									<option value="2016">2016</option>
									<option value="2017">2017</option>
								</select>
							</div>
						</div><!-- end credit-card-info -->
						
						<div class="billing-info two-col right clearfix">
							<h3>Billing Info</h3>
							
							<div class="form-item">
								<label for="street">Street:</label>
								<input id="billing-street" type="text" name="billing-street" value="" placeholder="Street address">
							</div>
							<div class="form-item">
								<div class="two-col city">
									<label for="city">City:</label>
									<input id="billing-city" type="text" name="billing-city" value="" placeholder="City">
								</div>
								<div class="two-col state right">
									<label for="state">State:</label>
									<select id="billing-state" name="State"> 
										<option value="" selected="selected">Select a State</option> 
										<option value="AL">Alabama</option> 
										<option value="AK">Alaska</option> 
										<option value="AZ">Arizona</option> 
										<option value="AR">Arkansas</option> 
										<option value="CA">California</option> 
										<option value="CO">Colorado</option> 
										<option value="CT">Connecticut</option> 
										<option value="DE">Delaware</option> 
										<option value="DC">District Of Columbia</option> 
										<option value="FL">Florida</option> 
										<option value="GA">Georgia</option> 
										<option value="HI">Hawaii</option> 
										<option value="ID">Idaho</option> 
										<option value="IL">Illinois</option> 
										<option value="IN">Indiana</option> 
										<option value="IA">Iowa</option> 
										<option value="KS">Kansas</option> 
										<option value="KY">Kentucky</option> 
										<option value="LA">Louisiana</option> 
										<option value="ME">Maine</option> 
										<option value="MD">Maryland</option> 
										<option value="MA">Massachusetts</option> 
										<option value="MI">Michigan</option> 
										<option value="MN">Minnesota</option> 
										<option value="MS">Mississippi</option> 
										<option value="MO">Missouri</option> 
										<option value="MT">Montana</option> 
										<option value="NE">Nebraska</option> 
										<option value="NV">Nevada</option> 
										<option value="NH">New Hampshire</option> 
										<option value="NJ">New Jersey</option> 
										<option value="NM">New Mexico</option> 
										<option value="NY">New York</option> 
										<option value="NC">North Carolina</option> 
										<option value="ND">North Dakota</option> 
										<option value="OH">Ohio</option> 
										<option value="OK">Oklahoma</option> 
										<option value="OR">Oregon</option> 
										<option value="PA">Pennsylvania</option> 
										<option value="RI">Rhode Island</option> 
										<option value="SC">South Carolina</option> 
										<option value="SD">South Dakota</option> 
										<option value="TN">Tennessee</option> 
										<option value="TX">Texas</option> 
										<option value="UT">Utah</option> 
										<option value="VT">Vermont</option> 
										<option value="VA">Virginia</option> 
										<option value="WA">Washington</option> 
										<option value="WV">West Virginia</option> 
										<option value="WI">Wisconsin</option> 
										<option value="WY">Wyoming</option>
									</select>
								</div>
							</div>
							<div class="form-item">
								<label for="zip">Zip code:</label>
								<input id="billing-zipcode" type="text" name="billing-zipcode" value="" placeholder="Zip code">
							</div>
							<div class="form-item">
								<div class="two-col telephone">
									<label for="street">Telephone number:</label>
									<input id="billing-telephone" type="text" name="billing-telephone" value="" placeholder="Telephone number">
								</div>
								<div class="two-col email right">
									<label for="street">E-mail address:</label>
									<input id="billing-email" type="text" name="billing-email" value="" placeholder="Email">
								</div>
							</div>
						</div><!-- end billing-info -->
					</div><!-- end cols -->
						
					<input id="donation-form-submit" class="submit" type="submit" name="commit" value="Submit">
				</form>
				<!-- Once a form item is selected, we can show the form -->
				
				
				<div class="divider"></div>
				<h2 class="donation-option">OR</h2>
				<!-- <ul>
					<li><a href="#" class="toggle orange half">CONTINUE WITH GOOGLE WALLET</a></li>
					<li><a href="#" class="toggle orange half">CONTINUE WITH PAYPAL</a></li>
				</ul> -->
				<script type="text/javascript"> 
				function validateAmount(amount){
					if(amount.value.match( /^[0-9]+(\.([0-9]+))?$/)){
						return true;
					}else{
						alert('You must enter a valid donation.');
						amount.focus();
						return false;
					}
				}
				</script>
				<div id="google-donate-button" class="donate-button two-col padded margin-right center">
					<div class="centered">
						<h3>Donate with Google Wallet</h3>
						<form action="https://checkout.google.com/cws/v2/Donations/303134597846187/checkoutForm" id="BB_BuyButtonForm" method="post" name="BB_BuyButtonForm" onSubmit="return validateAmount(this.item_price_1)" target="_top">
					    <input name="item_name_1" type="hidden" value="Donate to Catapult"/>
					    <input name="item_description_1" type="hidden" value="Please donate to Catapult."/>
					    <input name="item_quantity_1" type="hidden" value="1"/>
					    <input name="item_currency_1" type="hidden" value="USD"/>
					    <input name="item_is_modifiable_1" type="hidden" value="true"/>
					    <input name="item_min_price_1" type="hidden" value="25.0"/>
					    <input name="item_max_price_1" type="hidden" value="25000.0"/>
					    <input name="_charset_" type="hidden" value="utf-8"/>
					    <div class="form-item">
					    	<div class="float-left align-right">
					    		<span>$</span> <input id="item_price_1" name="item_price_1" onfocus="this.style.color='black'; this.value='';" size="6" type="text" value="" placeholder="25.00"/>
					    	</div>
					    	<div class="float-left align-left">
					    		<input alt="Donate" src="https://checkout.google.com/buttons/donateNow.gif?merchant_id=303134597846187&amp;w=115&amp;h=50&amp;style=trans&amp;variant=text&amp;loc=en_US" type="image"/>
					    	</div>
					    </div>
						</form>
					</div>
						
				</div><!-- end google-donate-button -->
				
				<div id="paypal-donate-button" class="donate-button two-col padded margin-left center">
					<div class="centered">
						<h3>Donate with PayPal</h3>
						<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
						<input type="hidden" name="cmd" value="_s-xclick">
						<input type="hidden" name="hosted_button_id" value="WZFTLEHXJEBYA">
						<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
						<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
						</form>
					</div>
				</div><!-- end paypal-donate-button-->

			</div><!-- end row -->
		</section><!-- end donate -->
		
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
