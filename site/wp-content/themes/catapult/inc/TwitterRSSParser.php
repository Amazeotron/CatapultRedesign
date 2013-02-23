<?php
class TwitterRSSParser
{
	
	public function init() {
		$url = "https://api.twitter.com/1/statuses/user_timeline.rss?screen_name=catapult_design";
		$feed = simplexml_load_file($url);
	  $tweets = $feed->channel->item;
	  $link = $feed->channel->link;
	  $out = array();
	  foreach ($tweets as $key => $value) {
	  	$title = $value->title;
	  	$link = $value->link;
	  	$date = date('M d, Y', strtotime($value->pubDate));
	  	$content = $this->makeLinks($title);
	  	$arr = array(
	  	             "tweet"   => $content, 
	  	             "link"    => $link, 
	  	             "pubDate" => $date, 
	  	             "link"    => $link);
	  	
	  	array_push($out, $arr);
	  }
	  return $out;
	}
  
 private function makeLinks($string) {
 		$noCata = preg_replace('/Catapult_Design: /', '', $string);
  	$http = preg_replace('/https?:\/\/[\w.\/?=&]+/', '<a href="${0}">${0}</a>', $noCata);
  	$atSign = preg_replace('/(?<=@)[\w\d]+/', '<a href="http://twitter.com/${0}">${0}</a>', $http);
  	$search = preg_replace('/(?<=#)[a-zA-Z0-9_-]+/', '<a href="http://twitter.com/search?q=%23${0}&src=hash">${0}</a>', $atSign);
  	return $search;
  }
}
?>