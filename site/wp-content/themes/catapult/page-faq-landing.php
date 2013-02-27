<?php
	
	/*
		Template Name: FAQ Landing Page
	*/

?>
<?php get_header(); ?>
	
	<div id="page-wrap" class="page-top">
	<section id="main-section">
		<div id="posts">
			<?php while (have_posts()) : the_post(); ?>
			
			<h2>FAQ</h2>
			<div class="accordion">
				<section class="accordion__item closed">
					<div class="pointer">&#9654;</div>
					<a href="#" class="accordion__link header-title">What type of organizations/clients do you work with?</a>
					<p class="accordion__body">To date, we average a split between work with nonprofit and for-profit entities.  We don’t discriminate – we work with NGOs, governments, start-up social ventures, Fortune 500 companies, etc.  As long as the project goal meets our mission.</p>
				</section>
				<section class="accordion__item closed">
					<div class="pointer">&#9654;</div>
					<a href="#" class="accordion__link header-title">You’re a non-profit, do you charge your clients?</a>
					<p class="accordion__body">Yes, we charge all of our clients.  Rates vary between the different types – we use a sliding scale to determine rate and it is generally subsidized by donations, grants, etc.  But we require all clients to pay – their financial investment ensures they give us the time and attention we need to drive a project to completion.  We don’t believe in freebies.</p>
				</section>
				<section class="accordion__item closed">
					<div class="pointer">&#9654;</div>
					<a href="#" class="accordion__link header-title">How do you find clients?</a>
					<p class="accordion__body">Word-of-mouth brings most of our clients our way.  But we do attend a lot of conferences and networking events in our space.  We also read a lot of blogs, articles, and publications related to our work which points us towards what people are doing in different places around the world.  We’re pretty good about sending people doing cool things an email to say Hi.</p>
				</section>
				<section class="accordion__item closed">
					<div class="pointer">&#9654;</div>
					<a href="#" class="accordion__link header-title">How did you (and how do I) get involved in the social impact design space?</a>
					<p class="accordion__body">Our founding team all met through their volunteer work with <a href="http://www.ewb-usa.org/" target="_blank">Engineers Without Borders</a>. We all had professional backgrounds in design, engineering, management and business before starting Catapult.  Doing the work as volunteers for a few years is how we each came up to speed on the realities, challenges and opportunities of working in impoverished communities.  We highly recommend getting your feet wet by volunteering with an org like EWB or working for an organization based in a part of the world you’re interested in.  It also helps to do your homework on the industry.  We really love “<a href="http://www.amazon.com/Mastering-Machine-Revisited-Poverty-Technology/dp/1853395072" target="_blank">Mastering the Machine: Technology, Aid, and Poverty</a>” (about the history of the social impact design space), “<a href="http://www.amazon.com/Small-Beautiful-Economics-People-Mattered/dp/0060916303" target="_blank">Small is Beautiful</a>” (a foundation in the philosophy behind design for social impact), and “<a href="http://www.amazon.com/Portfolios-Poor-How-Worlds-Live/dp/0691141487" target="_blank">Portfolios of the Poor</a>” (a good snapshot of the typical person you’d be designing for).  There are countless good books, blogs, and conferences about this space.  Read!  Attend!  Network!  Because the industry is relatively small; it’s an industry for proactive people.</p>
				</section>
				<section class="accordion__item closed">
					<div class="pointer">&#9654;</div>
					<a href="#" class="accordion__link header-title">Is there a particular degree I should get in order to find a job in social impact?</a>
					<p class="accordion__body">We believe it takes all kinds.  As an agency with expertise in products and services, we’re keen on product designers, design strategists, mechanical engineers, MBAs, anthropologists.  We hire people who aren’t afraid to build stuff with their hands (technical capacity) but also have appreciation and experience in the social science aspect of the work (empathy capacity).  Other design firms have different opportunities (graphic design, branding strategy, etc).</p>
				</section>
				<section class="accordion__item closed">
					<div class="pointer">&#9654;</div>
					<a href="#" class="accordion__link header-title">Who else out there is like you guys?</a>
					<p class="accordion__body">We should keep a running list.  There’s a good number of firms.  Some of our favorites: <a href="http://ideas42.iq.harvard.edu/" target="_blank">Ideas42</a>, <a href="http://www.participle.net/" target="_blank">Participle</a>, <a href="http://designthatmatters.org/" target="_blank">Design that Matters</a>, etc.  There are many more!  We each focus on different aspects of design and/or have a different approach to our work and/or employ different business models for our organizations.</p>
				</section>
				<section class="accordion__item closed">
					<div class="pointer">&#9654;</div>
					<a href="#" class="accordion__link header-title">Why did you decide to go the non-profit route?</a>
					<p class="accordion__body">Good question.  It wasn’t an easy decision.  In all honesty, we spent a month building a tradeoff matrix weighing the decision between building a non-profit, a for-profit, or being an umbrella organization of an existing non-profit or for-profit organization.  To make a long story short, we filed our 501(c)3 incorporation papers in 2008 so that we could more easily work with non-profit clients in addition to for-profits.  As a non-profit, it’s a little easier for our fellow non-profit clients to write us into their grant budgets.  Other advantages:  1) we can raise funds through donors and grants to subsidize our rate, and 2) we can still own for-profit entities (say we wanted to build a for-profit company around a product, for example) or create a hybrid organization.  Ultimately, we’re an impact driven organization and don’t want to work on projects we don’t believe in.  Needless to say, we’re happy with our decision.</p>
				</section>
				<section class="accordion__item closed">
					<div class="pointer">&#9654;</div>
					<a href="#" class="accordion__link header-title">What would you use my donation for?</a>
					<p class="accordion__body">Donations will go towards project work if that’s your passion.  Most of our donors give to our general fund, which enables us to build our capacity, train and retain staff, and give the staff the resources (software, office space, tools, money to pay their rent, etc) to get their work done.  The general fund also goes towards Catapult’s own initiatives, such as launching our affordable workshop series and providing free, downloadable resources for organizations to try out some of our methodologies.</p>
				</section>
			</div>
			
			<div class="divider"></div>
			
			<h2>Press Kit</h2>
			
			<h4>Overview of Catapult Design</h4>
			<a href="<?php the_field('face_sheet'); ?>"><?php the_field('fact_sheet_link_text'); ?></a>
			<h4>Press Releases</h4>
			<a href="<?php the_field('press_release'); ?>"><?php the_field('press_release_link_text'); ?></a>
			
			<h4>Logos</h4>
			<p><a href="<?php the_field('web_logo'); ?>" title="Catapult Design logo">Download the Catapult Design logo for Web use</a>.</p>
			<p><a href="<?php the_field('print_logo'); ?>" title="Catapult Design logo">Download the Catapult Design logo for print use</a>.</p>
			
			<?php endwhile; ?>
		</div><!-- end posts -->
	</section><!-- end main-section -->
	<?php get_sidebar(); ?>
	</div><!-- end page-wrap -->

<?php get_footer(); ?>