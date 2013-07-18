<!doctype html>
<html>
<head>
	<title>Catapult Design Twitter Feed</title>
	<style type="text/css" media="screen">
		html, body {
			color: #666;
			font-family: Helvetica, sans-serif;
			font-size: 14px;
		}
		a {
			color: rgba(220, 121, 50, 1.0);
			text-decoration: none;
		}
		a:hover {
			text-decoration: underline;
		}
		ul {
			overflow: hidden;
		}
		
		li {
			display: inline-block;
			width: 350px;
			border-top: 1px solid rgba(255,255,255,0.5);
			padding: 10px;
			margin: 10px;
			border-radius: 8px;
			background: #ededed;
			-webkit-box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
			box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
		}
	</style>
</head>
<body>
	<?php
	include 'TwitterRSSParser.php';
	$feed = new TwitterRSSParser();
	$output = $feed->init('https://api.twitter.com/1/statuses/user_timeline.rss?screen_name=Catapult_Design');
	echo $output;
	?>
</body>
</html>
