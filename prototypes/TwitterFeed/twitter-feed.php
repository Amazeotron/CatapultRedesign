<?php
class TwitterRSSParser
{
	
	public function init($url) {
		$feed = simplexml_load_file($url);
	  $tweets = $feed->channel->item;
	  foreach ($tweets as $key => $value) {
	  	$title = $value->title;
	  	$link = $value->link;
	  	// TODO: method that makes all @ and # and http into links
	  	echo makeLinks($title) . '<br/>';
	  	echo '<a href="' . $link . '">Read more</a><br/><br/>';
	  }
	}
  
  function makeLinks($string) {
  	$http = preg_replace('/https?:\/\/[\w.\/?=&]+/', '<a href="${0}">${0}</a>', $string);
  	$atSign = preg_replace('/(?<=@)[\w\S]+/', '<a href="http://twitter.com/${0}">${0}</a>', $http);
  	$search = preg_replace('/(?<=#)[a-zA-Z0-9_-]+/', '<a href="http://twitter.com/search?q=%23${0}&src=hash">${0}</a>', $atSign);
  	return $search;
  }
}
?>