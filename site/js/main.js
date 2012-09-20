

$(document).ready(function() {

	// Begin the intro animation
	intro.init();

	// Init Case Studies
	var studies = [
		{
			"id": "anza",
			"mainImg": "img/casestudies/handcart/IMG_0065.jpg",
			"headerImg": "img/casestudies/handcart/caption.jpg",
			"title": "RE-IMAGINING THE WHEEL WITH ANZA TECHNOLOGIES",
			"body": "<p>In resource-strapped Tanzania, farmers and their families spend an average of 5 hours a day carrying heavy loads of water, firewood, and food to their homes or market.</p><p>Anza Technologies was working to create an affordable yet durable handcart for rural communities. They had some ideas - including wheels made of inflated 2 liter bottles - but needed a scalable solution suited for a rugged environment.</p><p>Over the course of 7 months, Catapult stepped in to provide user research, competitive analysis, design, prototyping, CAD development, and user testing.</p><p>Beginning with a competitive analysis of the handcart market, the Catapult team found there was a distinct gap between carts sold in stores with an upwards cost of $100 USD, and homemade carts which resembled wooden sleighs.</p><p>The team began designing a handcart better suited to our customers’ needs. Three designs were developed that would pack flat, ship easily, and retain their durability. These prototypes were sent to Tanzania along with Noel and Tyler. Working with the Matala community the field prototypes were tested, revised, reviewed and improved.</p><p>The result was a $20 USD hand cart capable of carrying 300lb over long, rugged paths, and maintained within the local community.</p>"
		},
		{
			"id": "sample1",
			"mainImg": "img/casestudies/handcart/IMG_0487.jpg",
			"headerImg": "img/casestudies/handcart/caption.jpg",
			"title": "ANOTHER HEADLINE 1",
			"body": "<p>More body copy... 1</p>"
		},
		{
			"id": "sample2",
			"mainImg": "img/casestudies/handcart/IMG_0487.jpg",
			"headerImg": "img/casestudies/handcart/caption.jpg",
			"title": "ANOTHER HEADLINE 2",
			"body": "<p>More body copy... 2</p>"
		},
		{
			"id": "sample3",
			"mainImg": "img/casestudies/handcart/IMG_0487.jpg",
			"headerImg": "img/casestudies/handcart/caption.jpg",
			"title": "ANOTHER HEADLINE 3",
			"body": "<p>More body copy... 3</p>"
		},
		{
			"id": "sample4",
			"mainImg": "img/casestudies/handcart/IMG_0487.jpg",
			"headerImg": "img/casestudies/handcart/caption.jpg",
			"title": "ANOTHER HEADLINE 4",
			"body": "<p>More body copy... 4</p>"
		},
		{
			"id": "sample5",
			"mainImg": "img/casestudies/handcart/IMG_0487.jpg",
			"headerImg": "img/casestudies/handcart/caption.jpg",
			"title": "ANOTHER HEADLINE 5",
			"body": "<p>More body copy... 5</p>"
		}
	];
	casestudies.init(studies);

	// Make the locations map
	var locationData = [
		{
			"name":"Catpult Design", 
			"location": "San Francisco",
			"xPos": 35,
			"yPos": 48
		},
		{
			"name":"Cata-Camp", 
			"location": "New Mexico",
			"xPos": 53,
			"yPos": 79
		},
		{
			"name":"Wind Turbine", 
			"location": "Guatemala",
			"xPos": 135,
			"yPos": 157
		},
		{
			"name":"Peace Corps Training", 
			"location": "Costa Rica",
			"xPos": 143,
			"yPos": 182
		},
		{
			"name":"Solar Clinic", 
			"location": "Rwanda",
			"xPos": 509,
			"yPos": 218
		},
		{
			"name":"Second Life Ball", 
			"location": "Rwanda",
			"xPos": 526,
			"yPos": 193
		},
		{
			"name":"LED Lantern", 
			"location": "Tanzania",
			"xPos": 552,
			"yPos": 266
		},
		{
			"name":"Hand Cart", 
			"location": "Tanzania",
			"xPos": 564,
			"yPos": 241
		},
		{
			"name":"Rainwater Harvesting", 
			"location": "Kenya",
			"xPos": 587,
			"yPos": 216
		},
		{
			"name":"Clean Delivery Kit", 
			"location": "India",
			"xPos": 687,
			"yPos": 108
		},
		{
			"name":"Methodology Kit", 
			"location": "India",
			"xPos": 715,
			"yPos": 155
		},
		{
			"name":"Wello Barrel", 
			"location": "India",
			"xPos": 725,
			"yPos": 182
		},
		{
			"name":"BioLite", 
			"location": "India",
			"xPos": 729,
			"yPos": 134
		},
		{
			"name":"Mosquito Net", 
			"location": "Southeast Asia",
			"xPos": 808,
			"yPos": 188
		},
		{
			"name":"Clean Energy Adoption", 
			"location": "Indonesia",
			"xPos": 857,
			"yPos": 227
		}
	];

	locations.init(locationData);
	team.init();

	$(".social .social-button").hover(function() {
		$(this).find("span").addClass("hover");
	}, function() {
		$(this).find("span").removeClass("hover");
	});
	
	
});