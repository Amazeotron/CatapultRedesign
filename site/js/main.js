

$(document).ready(function() {

	// Begin the intro animation
	intro.init();

	// Init Case Studies
	var studies = [
		{
			"id": "anza",
			"mainImg": "img/casestudies/anza/anza-image-1.jpg",
			"headerImg": "img/casestudies/anza/anza-caption.jpg",
			"title": "SOLVING THE WORLD'S WORST COMMUTE WITH ANZA",
			"body": "<p>In tropical Tanzania – the rugged, mountainous home of Mt. Kilimanjaro – poor farmers and their families struggled to haul precious loads of water, firewood, and food to markets and homes. These incredibly heavy loads were carried on their heads, leading to injury and reduced incomes.</p><p>Anza Technologies proposed a durable and affordable handcart, a scalable solution suited to the unforgiving terrain. Over a 7-month period, Catapult stepped in with user research, competitive analysis, design, prototyping, CAD development, and user testing. The first clue was uncovered in a competitive analysis of the local handcart market: a vast gap between carts sold in stores (costing > $100 USD), and homemade carts (which resemble wooden sleighs).</p><p>So the Catapult team developed three rugged designs that packed flat and shipped easily. These prototypes - and Catapult teammates Noel and Tyler - were sent to Tanzania. Together in close collaboration with the Matala farming community, they tested, revised, reviewed and improved the field prototypes.</p><p>The solution: a basic $20 USD hand cart capable of carrying 300 lbs over long, rugged paths, and simple enough for the farming community to maintain. And the farmers not only avoided injuries -- they also nearly doubled their incomes. Mission accomplished.</p>"
		},
		{
			"id": "wello",
			"mainImg": "img/casestudies/wello/wello-image-1.jpg",
			"headerImg": "img/casestudies/wello/wello-caption.jpg",
			"title": "WATER TRANSPORTATION TRANSFORMED WITH WELLO",
			"body": "<p>lorem ipsum dolor ismet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin arcu enim, facilisis et dapibus ut, egestas sed nibh. Nulla sit amet sem sed lectus varius tempus nec ut orci. Donec convallis nisi id tellus rutrum quis commodo neque dictum. Morbi in dolor sem.</p><p>Donec tellus nulla, posuere non viverra non, cursus ac purus. Etiam placerat massa sit amet orci consectetur quis placerat lorem faucibus. Vestibulum euismod hendrerit diam, quis laoreet tortor luctus non. Fusce convallis felis fringilla risus dignissim aliquet. Quisque eleifend tortor vitae ligula interdum sollicitudin.</p><p>Iquam vel augue a nunc mattis ullamcorper at eget est. Sed tempus est non neque ornare in convallis lectus malesuada. Proin viverra vulputate metus, sit amet interdum enim condimentum id. Aliquam id nunc velit, eget tempor justo. Curabitur sollicitudin euismod mi id eleifend. Aliquam erat volutpat. Nulla non dui ante, ultrices feugiat dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Cras ultrices ullamcorper luctus. Sed vehicula, est elementum ornare pharetra, mauris risus tristique ut est sapien, nec tincidunt magna. Aliquam malesuada elit et dolor vehicula ac laoreet metus interdum. Sed sed purus sit amet turpis egestas sollicitudin et at dui. Praesent magna ligula, malesuada.</p>"
		},
		{
			"id": "worldbank",
			"mainImg": "img/casestudies/worldbank/worldbank-image-1.jpg",
			"headerImg": "img/casestudies/worldbank/worldbank-caption.jpg",
			"title": "CLEAN ENERGY ADOPTION WITH WORLD BANK",
			"body": "<p>lorem ipsum dolor ismet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin arcu enim, facilisis et dapibus ut, egestas sed nibh. Nulla sit amet sem sed lectus varius tempus nec ut orci. Donec convallis nisi id tellus rutrum quis commodo neque dictum. Morbi in dolor sem.</p><p>Donec tellus nulla, posuere non viverra non, cursus ac purus. Etiam placerat massa sit amet orci consectetur quis placerat lorem faucibus. Vestibulum euismod hendrerit diam, quis laoreet tortor luctus non. Fusce convallis felis fringilla risus dignissim aliquet. Quisque eleifend tortor vitae ligula interdum sollicitudin.</p><p>Iquam vel augue a nunc mattis ullamcorper at eget est. Sed tempus est non neque ornare in convallis lectus malesuada. Proin viverra vulputate metus, sit amet interdum enim condimentum id. Aliquam id nunc velit, eget tempor justo. Curabitur sollicitudin euismod mi id eleifend. Aliquam erat volutpat. Nulla non dui ante, ultrices feugiat dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Cras ultrices ullamcorper luctus. Sed vehicula, est elementum ornare pharetra, mauris risus tristique ut est sapien, nec tincidunt magna. Aliquam malesuada elit et dolor vehicula ac laoreet metus interdum. Sed sed purus sit amet turpis egestas sollicitudin et at dui. Praesent magna ligula, malesuada.</p>"
		},
		{
			"id": "peacecorps",
			"mainImg": "img/casestudies/peacecorps/peacecorps-image-1.jpg",
			"headerImg": "img/casestudies/peacecorps/peacecorps-caption.jpg",
			"title": "ENLIGHTENING THE PEACE CORPS",
			"body": "<p>lorem ipsum dolor ismet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin arcu enim, facilisis et dapibus ut, egestas sed nibh. Nulla sit amet sem sed lectus varius tempus nec ut orci. Donec convallis nisi id tellus rutrum quis commodo neque dictum. Morbi in dolor sem.</p><p>Donec tellus nulla, posuere non viverra non, cursus ac purus. Etiam placerat massa sit amet orci consectetur quis placerat lorem faucibus. Vestibulum euismod hendrerit diam, quis laoreet tortor luctus non. Fusce convallis felis fringilla risus dignissim aliquet. Quisque eleifend tortor vitae ligula interdum sollicitudin.</p><p>Iquam vel augue a nunc mattis ullamcorper at eget est. Sed tempus est non neque ornare in convallis lectus malesuada. Proin viverra vulputate metus, sit amet interdum enim condimentum id. Aliquam id nunc velit, eget tempor justo. Curabitur sollicitudin euismod mi id eleifend. Aliquam erat volutpat. Nulla non dui ante, ultrices feugiat dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Cras ultrices ullamcorper luctus. Sed vehicula, est elementum ornare pharetra, mauris risus tristique ut est sapien, nec tincidunt magna. Aliquam malesuada elit et dolor vehicula ac laoreet metus interdum. Sed sed purus sit amet turpis egestas sollicitudin et at dui. Praesent magna ligula, malesuada.</p>"
		},
		{
			"id": "simpa",
			"mainImg": "img/casestudies/simpa/simpa-image-1.jpg",
			"headerImg": "img/casestudies/simpa/simpa-caption.jpg",
			"title": "HUMAN-CENTERED DESIGN SPARKS AFFORDABLE ENERGY",
			"body": "<p>lorem ipsum dolor ismet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin arcu enim, facilisis et dapibus ut, egestas sed nibh. Nulla sit amet sem sed lectus varius tempus nec ut orci. Donec convallis nisi id tellus rutrum quis commodo neque dictum. Morbi in dolor sem.</p><p>Donec tellus nulla, posuere non viverra non, cursus ac purus. Etiam placerat massa sit amet orci consectetur quis placerat lorem faucibus. Vestibulum euismod hendrerit diam, quis laoreet tortor luctus non. Fusce convallis felis fringilla risus dignissim aliquet. Quisque eleifend tortor vitae ligula interdum sollicitudin.</p><p>Iquam vel augue a nunc mattis ullamcorper at eget est. Sed tempus est non neque ornare in convallis lectus malesuada. Proin viverra vulputate metus, sit amet interdum enim condimentum id. Aliquam id nunc velit, eget tempor justo. Curabitur sollicitudin euismod mi id eleifend. Aliquam erat volutpat. Nulla non dui ante, ultrices feugiat dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Cras ultrices ullamcorper luctus. Sed vehicula, est elementum ornare pharetra, mauris risus tristique ut est sapien, nec tincidunt magna. Aliquam malesuada elit et dolor vehicula ac laoreet metus interdum. Sed sed purus sit amet turpis egestas sollicitudin et at dui. Praesent magna ligula, malesuada.</p>"
		},
		{
			"id": "nyange",
			"mainImg": "img/casestudies/nyange/nyange-image-1.jpg",
			"headerImg": "img/casestudies/nyange/nyange-caption.jpg",
			"title": "TURNING ON THE LIGHTS AT THE NYANGE HEALTH CLINIC",
			"body": "<p>lorem ipsum dolor ismet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin arcu enim, facilisis et dapibus ut, egestas sed nibh. Nulla sit amet sem sed lectus varius tempus nec ut orci. Donec convallis nisi id tellus rutrum quis commodo neque dictum. Morbi in dolor sem.</p><p>Donec tellus nulla, posuere non viverra non, cursus ac purus. Etiam placerat massa sit amet orci consectetur quis placerat lorem faucibus. Vestibulum euismod hendrerit diam, quis laoreet tortor luctus non. Fusce convallis felis fringilla risus dignissim aliquet. Quisque eleifend tortor vitae ligula interdum sollicitudin.</p><p>Iquam vel augue a nunc mattis ullamcorper at eget est. Sed tempus est non neque ornare in convallis lectus malesuada. Proin viverra vulputate metus, sit amet interdum enim condimentum id. Aliquam id nunc velit, eget tempor justo. Curabitur sollicitudin euismod mi id eleifend. Aliquam erat volutpat. Nulla non dui ante, ultrices feugiat dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Cras ultrices ullamcorper luctus. Sed vehicula, est elementum ornare pharetra, mauris risus tristique ut est sapien, nec tincidunt magna. Aliquam malesuada elit et dolor vehicula ac laoreet metus interdum. Sed sed purus sit amet turpis egestas sollicitudin et at dui. Praesent magna ligula, malesuada.</p>"
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