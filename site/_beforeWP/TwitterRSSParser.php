<?php
class TwitterRSSParser
{
	
	public function init($url, $ulClass) {
		$feed = simplexml_load_file($url);
	  $tweets = $feed->channel->item;
	  $output = '<ul class="' . $ulClass . '">';
	  foreach ($tweets as $key => $value) {
	  	$title = $value->title;
	  	$link = $value->link;
	  	$output .= '<li>' . $this->makeLinks($title) . ' <a href="' . $link . '">Read more</a></li>';
	  }
	  $output .= '</ul>';
	  return $output;
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