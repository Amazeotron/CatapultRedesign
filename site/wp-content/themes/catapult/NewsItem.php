<?php

class NewsItem
{
	public $type;
	public $title;
	public $date_created;
	public $nice_date;
	public $body;
	public $excerpt;
	public $location;
	public $date_of_event;
	public $header_image_id;
	public $link;
	public $author;
	public $categories;
	
	public function __construct($_type, $_title, $_date_created, $_body, $_excerpt, $_location, $_date_of_event, $_header_image_id, $_link, $_author, $_categories)
	{
		$this->type = $_type;
		$this->title = $_title;
		$this->date_created = $_date_created;
		$this->nice_date = $this->convertToNiceDate($_date_created);
		$this->body = $_body;
		$this->excerpt = $_excerpt;
		$this->location = $_location;
		$this->date_of_event = $_date_of_event;
		$this->header_image_id = $_header_image_id;
		$this->link = $_link;
		$this->author = $_author;
		$this->categories = $_categories;
	}
	
	private function convertToNiceDate($date) {
		return date('F d, Y', $date);
	}
}

?>