<?php

function getBaseURL() {
	$url = get_bloginfo('template_url') . "/img/homepage/team/";
	return $url;
}

function hyphenate($name) {
	$pattern = '/ /';
	$replace = "-";
	return preg_replace($pattern, $replace, $name);
}

$the_query = new WP_Query(array('post_type' => 'teammember', 'posts_per_page' => '-1')); ?>

<ul class="team-members">

<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
  <?php $index = 16; ?>
  <li class="team-member <? the_field('level'); ?>">
  <a class="team-member-link" href="#<? echo hyphenate(get_the_title()); ?>" tabindex="<? echo $index++; ?>">
    <img class="team-member-headshot" src="<?php the_field('headshot'); ?>" alt="<? the_title(); ?>" />
    <div class="team-member-details">
      <h3 class="header-title"><? the_title(); ?></h3>
      <h4><? the_field('job_title'); ?></h4>
      <h5><? the_field('company_name'); ?></h5>
      <p><? the_field('excerpt'); ?> more &raquo;</p>
    </div>
  </a>
  </li>
<?php endwhile; ?>
</ul>
<?php wp_reset_postdata();

/*
$items = array(
   array(
     "hierarchy" => "primary",
     "name" => "Heather Fleming",
     "img" => getBaseURL() . "heather.jpg",
     "title" => "Founder and CEO", 
     "company" => "Catapult Design",
     "blurb" => "Heather is a designer, an engineer, and an entrepreneur motivated by social..."
   ), 
   array(
     "hierarchy" => "primary",
     "name" => "Tyler Valiquette",
     "img" => getBaseURL() . "tyler.jpg",
     "title" => "Founder and COO", 
     "company" => "Catapult Design",
     "blurb" => "Having lived, worked, and traveled extensively in Latin America in..."
   ), 
   array(
     "hierarchy" => "primary",
     "name" => "Noel Wilson",
     "img" => getBaseURL() . "noel.jpg",
     "title" => "Lead Designer", 
     "company" => "Catapult Design",
     "blurb" => "An Industrial Designer by training, Noel previously worked in rapid proto..."
   ), 
   array(
     "hierarchy" => "primary",
     "name" => "Karin Carter",
     "img" => getBaseURL() . "karin.jpg",
     "title" => "Design Fellow", 
     "company" => "Catapult Design",
     "blurb" => "Karin is a designer and educator with diverse expertise as each. As an in-house..."
   ), 
   array(
     "hierarchy" => "primary",
     "name" => "Dr. Charlie Sellers",
     "img" => getBaseURL() . "charlie.jpg",
     "title" => "Technology Specialist", 
     "company" => "Catapult Design",
     "blurb" => "Combining a background in materials and..."
   ), 
   array(
     "hierarchy" => "secondary",
     "name" => "Tom Loughlin",
     "img" => getBaseURL() . "tom.jpg",
     "title" => "Executive Director", 
     "company" => "ASME",
     "blurb" => "Thomas G. Loughlin, CAE, is the executive director of ASME (American So..."
   ), 
   array(
     "hierarchy" => "secondary",
     "name" => "Dawn Danby",
     "img" => getBaseURL() . "dawn.jpg",
     "title" => "Senior Sustainability Design Manager", 
     "company" => "AutoDesk",
     "blurb" => "Interdisciplinary designer Dawn Danby, recognized by..."
   ), 
   array(
     "hierarchy" => "secondary",
     "name" => "Catherine Lovazzano",
     "img" => getBaseURL() . "catherine.jpg",
     "title" => "Senior Manager, Consumer Trends", 
     "company" => "Chrysler LLC",
     "blurb" => "In her current position, Catherine leads a hybrid team..."
   ), 
   array(
     "hierarchy" => "tertiary",
     "name" => "Graham Hill",
     "img" => getBaseURL() . "graham.jpg",
     "title" => "VP Interactive Planet Green, Discovery", 
     "company" => "Treehugger.com",
     "blurb" => "Alternately described as serial entre..."
   ), 
   array(
     "hierarchy" => "tertiary",
     "name" => "Hristo Gyoshev",
     "img" => getBaseURL() . "hristo.jpg",
     "title" => "Corporate Strategy &amp; Business Management", 
     "company" => "Yahoo!",
     "blurb" => "Hristo Gyoshev is a strategist with..."
   ), 
   array(
     "hierarchy" => "tertiary",
     "name" => "Lauren Peters",
     "img" => getBaseURL() . "lauren.jpg",
     "title" => "Art Director", 
     "company" => "Salesforce",
     "blurb" => "Lauren Peters began her work with Catapult Design in early 2009..."
   ), 
   array(
     "hierarchy" => "tertiary",
     "name" => "Evan Thomas",
     "img" => getBaseURL() . "evan.jpg",
     "title" => "Asst Professor", 
     "company" => "Portland State University",
     "blurb" => "Evan A. Thomas, Ph.D., P.E., is an Assistant Prof..."
   ), 
   array(
     "hierarchy" => "tertiary",
     "name" => "Nathalie Collins",
     "img" => getBaseURL() . "nathalie.jpg",
     "title" => "Design Strategist", 
     "company" => "Luminary Labs",
     "blurb" => "Nathalie Collins is a designer and innovator who has worked with businesses..."
   ), 
   array(
     "hierarchy" => "tertiary",
     "name" => "Brian Lamb",
     "img" => getBaseURL() . "brian.jpg",
     "title" => "Principal", 
     "company" => "Elevate Consulting",
     "blurb" => "Brian Lamb is a visionary business and design leader at Elevate Design Cons..."
   ), 
   array(
     "hierarchy" => "tertiary",
     "name" => "Gary Zieff",
     "img" => getBaseURL() . "gary.jpg",
     "title" => "COO", 
     "company" => "dissigno",
     "blurb" => "Gary Zieff co-founded dissigno, an emerging markets project developmen..."
   ), 
   array(
     "hierarchy" => "tertiary",
     "name" => "Joseph Beah",
     "img" => getBaseURL() . "joseph.jpg",
     "title" => "Solutions Architect and Program Manager", 
     "company" => "",
     "blurb" => "Joseph is a seasoned Program Manager and Solutions Ar..."
   )
);
*/
?>
