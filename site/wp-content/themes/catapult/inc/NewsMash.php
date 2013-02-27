<?php
/*
* Mashes together the news from Catapult in chronological order. 
* News includes blog posts and events announcements.
*/

class NewsMash 
{
	public $allNews;
	
	public function __construct() {
		
		include_once(ABSPATH . "wp-content/themes/catapult/inc/NewsParser.php");
		
		$this->allNews = array();
		
		// ---------------- Removed Twitter from this list --------------------
		// Pull in XML feed for Twitter posts
		// include(ABSPATH . "wp-content/themes/catapult/inc/TwitterRSSParser.php");
		// $twitterParser = new TwitterRSSParser();
		// $tweets = NewsParser::commonize($twitterParser->init(), "twitter");
		// foreach ($tweets as $value) {
		// 	array_push($this->allNews, $value);
		// }
		
		// Pull in JSON feed for blog posts
		$blogJSONURL = NewsParser::getRootURL() . "/?json=get_recent_posts&dev=1&post_type=post&custom_fields=header_image";
		$blogJSON = NewsParser::loadJSON($blogJSONURL);
		$blogPosts = NewsParser::commonize($blogJSON["posts"], "post");
		foreach ($blogPosts as $value) {
			array_push($this->allNews, $value);
		}
		
		// Pull in JSON feed for Events
		$labJSONURL = NewsParser::getRootURL() . "/?json=get_recent_posts&dev=1&post_type=event&custom_fields=location,date";
		$labJSON = NewsParser::loadJSON($labJSONURL);
		$labs = NewsParser::commonize($labJSON["posts"], "event");
		foreach ($labs as $value) {
			array_push($this->allNews, $value);
		}
		
		usort($this->allNews, array('NewsMash', 'compareDatetime'));
	}
	
	public function getJSON() {
		return json_encode($this->allNews);
	}
	
	
	
	private static function compareDatetime($a, $b) {
		if ($a->date_created == $b->date_created) {
			return 0;
		}
		return ($a->date_created > $b->date_created) ? -1 : 1;
	}
}

?>