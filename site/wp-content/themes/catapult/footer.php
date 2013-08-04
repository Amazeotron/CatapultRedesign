		<footer>
			<div class="row">
        <div class="clearfix">
          <a href="https://twitter.com/Catapult_Design" class="contact-button contact-button--twitter" tabindex="54">@catapult_design</a>
          <a href="https://www.facebook.com/CatapultDesign" class="contact-button contact-button--facebook" tabindex="55">facebook.com/catapult-design</a>
          <a href="mailto:info@catapultdesign.org" class="contact-button contact-button--email" tabindex="56">info@catapultdesign.org</a>
        </div>
        <ul class="footer-links clearfix">
          <li><a href="/dev/services" class="header-title">SERVICES &raquo;</a></li>
          <li><a href="/dev/press" class="header-title">PRESS &amp; PUBLICATIONS &raquo;</a></li>
          <li><a href="/dev/projects" class="header-title">PROJECTS &raquo;</a></li>
          <li><a href="/dev/partners" class="header-title">PARTNERS &amp; SPONSORS &raquo;</a></li>
          <li><a href="/dev/news" class="header-title">NEWS &raquo;</a></li>
        </ul>
        <p>Catapult Design is a non-profit design firm providing engineering and implementation support to the thousands of organizations in of technologies or products. The net benefit of our activities is nothing less than a fundamental improvement in the lives of those who need it most.</p>
        <h4 class="header-title">&copy; COPYRIGHT 2013</h4>
			</div>
		</footer>

	<?php wp_footer(); ?>

	<script src="<?php bloginfo('template_url'); ?>/js/common.js"></script>
  <!--<script src="<?php bloginfo('template_url'); ?>/js/libs/enquire.js"></script> -->
  <script src="<?php bloginfo('template_url'); ?>/js/libs/swipe.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/libs/underscore-min.js"></script>
  
  <!--<script src="<?php //bloginfo('template_url'); ?>/js/libs/jquery.transition.min.js"></script>-->
  <!--<script src="<?php //bloginfo('template_url'); ?>/js/libs/jquery.transform3d.js"></script>-->
  <script src="<?php bloginfo('template_url'); ?>/js/libs/jquery.slides.min.js"></script>
  
  <?php if (is_page("Home")) { ?>
	  <script src="https://js.stripe.com/v1/"></script>
		<script> Stripe.setPublishableKey('pk_test_WYPj12umdvftkbOTR5kQL8ni'); </script>
	  <script src="<?php bloginfo('template_url'); ?>/js/libs/easeljs-0.5.0.min.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/libs/tweenjs-0.3.0.min.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/libs/preloadjs-0.2.0.min.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/libs/filters/Filter.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/libs/filters/AlphaMaskFilter.js"></script>  
	  <script src="<?php bloginfo('template_url'); ?>/js/CenterTag.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/ImagePreloader.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/libs/parsley.min.js"></script>
    <script src="<?php bloginfo('template_url'); ?>/js/libs/leaflet/leaflet.js"></script>
    <script src="<?php bloginfo('template_url'); ?>/js/libs/leaflet/markercluster/leaflet.markercluster-src.js"></script>
	  
	  <!--<script src="<?php //bloginfo('template_url'); ?>/js/intro.js"></script>-->
	  <script src="<?php bloginfo('template_url'); ?>/js/keyofferings.js"></script>
	  <!--<script src="<?php //bloginfo('template_url'); ?>/js/casestudies.js"></script>-->
	  <script src="<?php bloginfo('template_url'); ?>/js/locations.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/team.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/partners.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/events.js"></script>
	  <script src="<?php bloginfo('template_url'); ?>/js/donations.js"></script>
	  
	  <script src="<?php bloginfo('template_url'); ?>/js/home.js"></script>
	  
	<?php } else if (is_page('faq-and-press-kit')) { ?>
	  
	  <script src="<?php bloginfo('template_url'); ?>/js/faq.js"></script>
	  
	<?php } else if (is_page('Thanks')) { ?>
  	
  	<script src="<?php bloginfo('template_url'); ?>/js/libs/parsley.min.js"></script>
  	<script src="<?php bloginfo('template_url'); ?>/js/thanks.js"></script>
  	<script src="<?php bloginfo('template_url'); ?>/js/thanks-page.js"></script>
  	
  <?php } else if (is_page() || is_single()) { ?>
  	
  	<script src="<?php bloginfo('template_url'); ?>/js/ParsePostType.js"></script>
  	<script src="<?php bloginfo('template_url'); ?>/js/blog.js"></script>
  	
  <?php  } ?>
	
	<!-- Don't forget analytics -->
	<script type="text/javascript">

		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-5196658-1']);
		_gaq.push(['_trackPageview']);

		(function() {
		  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();

	</script>
	
</body>
</html>
