<?php
// header('Content-type: application/json');

include "NewsMash.php";
$news = new NewsMash();
var_dump($news->allNews);

?>