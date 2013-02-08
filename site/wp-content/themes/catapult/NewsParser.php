<?php

class NewsParser 
{
	public function __construct() {
		
	}
	
	public static function getRootURL() {
		if ($_SERVER["SERVER_PORT"] == "8888" || $_SERVER['SERVER_NAME'] == "localhost") {
			return "http://localhost:8888/wordpress";
		} else if ($_SERVER["SERVER_PORT"] == "80" || preg_match('/\/dev/', $_SERVER['REQUEST_URI']) != 0) {
			return "http://catapultdesign.org/dev";
		}
		return "";
	}
	
	public static function loadJSON($url) {
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$result = curl_exec($ch);
		curl_close($ch);
		$json = json_decode($result, true);
		return $json;
	}
	
	/*
	* Creates a common object for a blog post, a Tweet, or a Lab
	* Params:
			$arr: Array pulled in via HTTP of posts, Tweets or Labs
			$type: The type of news. Can be "twitter", "post" or "lab"
	* Returns an array of NewsItem objects
	*/
	public static function commonize($arr, $type) {
		include_once "NewsItem.php";
		
		$newsItems = array();
		foreach ($arr as $post) {
			// Check for location
			$location = "";
			if (isset($post["custom_fields"]["location"])) {
				$location = $post["custom_fields"]["location"][0];
			}
			
			// Check for event date
			$eventDate = "";
			if (isset($post["custom_fields"]["date"])) {
				$eventDate = strtotime($post["custom_fields"]["date"][0]);
			}
			
			// Check for header image
			$headerImage = "";
			if (isset($post["custom_fields"]["header_image"])) {
				$headerImage = $post["custom_fields"]["header_image"][0];
			}
			
			$title = "";
			if (isset($post["title"])) {
				$title = $post["title"];
			} elseif (isset($post["tweet"])) {
				$title = $post["tweet"];
			}
			
			$date = "";
			if (isset($post["date"])) {
				$date = strtotime($post["date"]);
			} elseif (isset($post["pubDate"])) {
					$date = strtotime($post["pubDate"]);
			}
			
			$content = "";
			if (isset($post["content"])) {
				$content = $post["content"];
			} elseif (isset($post["tweet"])) {
				$content = $post["tweet"];
			}
			
			$excerpt = "";
			if (isset($post["excerpt"])) {
				$excerpt = $post["excerpt"];
			}
			
			$link = "";
			if (isset($post["link"])) {
				$link = $post["link"];
			} elseif (isset($post["url"])) {
				$link = $post["url"];
			}
			
			$author = "";
			if (isset($post["author"])) {
				$author = implode(' ', array($post['author']['first_name'], $post['author']['last_name']));
			}
			
			$categories = array();
			if (isset($post["categories"])) {
				$categories = $post["categories"];
			}
			
			
			$newsItem = new NewsItem($type, $title, $date, $content, $excerpt, $location, $eventDate, $headerImage, $link, $author, $categories);
			array_push($newsItems, $newsItem);
		}
		return $newsItems;
	}
}

?>