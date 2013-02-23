		<footer>
			<div class="row">
				
				<div class="address three-col">
					<p>Catapult Design<br/>
					972 Mission Street, 5th Floor<br/>
					San Francisco, CA 94103</p>
				</div>
				<div class="three-col">
					<a href="mailto:info@catapultdesign.org" class="contact-button contact-button--small contact-button--email header-title" tabindex="54">info@catapultdesign.org</a>
					<a href="https://twitter.com/Catapult_Design" class="contact-button contact-button--small contact-button--twitter header-title" tabindex="55">@catapult_design</a>
					<a href="https://www.facebook.com/CatapultDesign" class="contact-button contact-button--small contact-button--facebook header-title" tabindex="56">facebook.com/catapult-design</a>
				</div>
				<div class="three-col">
					<p>&copy; Copyright 2013 Catapult Design</p>
				</div>
			</div>
			
		</footer>

	<?php wp_footer(); ?>
	
	<script src="<?php bloginfo('template_url'); ?>/js/common.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/libs/enquire.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/libs/swipe.js"></script>
  
  <?php if (is_front_page()) { ?>
	  
	  <script src="https://js.stripe.com/v1/"></script>
		<script>
	  	Stripe.setPublishableKey('pk_test_WYPj12umdvftkbOTR5kQL8ni');
		</script>
		
	  <script src="<?php bloginfo('template_url'); ?>/js/libs/easeljs-0.5.0.min.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/libs/tweenjs-0.3.0.min.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/libs/preloadjs-0.2.0.min.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/libs/filters/Filter.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/libs/filters/AlphaMaskFilter.js"></script>  
	  <script src="<?php bloginfo('template_url'); ?>/js/CenterTag.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/ImagePreloader.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/libs/parsley.min.js"></script>
	  
	  <script src="<?php bloginfo('template_url'); ?>/js/intro.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/keyofferings.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/casestudies.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/locations.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/team.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/partners.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/events.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/donations.js"></script>
	  
	  <script src="<?php bloginfo('template_url'); ?>/js/home.js"></script>
	  
  <?php } else if (is_page('News') || is_single()) { ?>
  	
  	<script src="<?php bloginfo('template_url'); ?>/js/ParsePostType.js"></script>
  	<script src="<?php bloginfo('template_url'); ?>/js/blog.js"></script>
  	
  <?php } else if (is_page('Thanks')) { ?>
  	
  	<script src="<?php bloginfo('template_url'); ?>/js/libs/parsley.min.js"></script>
  	<script src="<?php bloginfo('template_url'); ?>/js/thanks.js"></script>
  	<script src="<?php bloginfo('template_url'); ?>/js/thanks-page.js"></script>
  	
  <?php  } ?>
	
	<!-- Don't forget analytics -->
	
</body>
</html>
