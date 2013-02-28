<?php
header('Content-type: application/json');


$which = $_GET['json'];
$loc = $_SERVER['SERVER_NAME'];
if ($_SERVER['SERVER_PORT'] != 80) {
	$loc .= ":" . $_SERVER['SERVER_PORT'] . '/wordpress';
} else {
	$loc .= '/dev';
}
$loc .= '/wp-content/themes/catapult/js/' . $which . ".js";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $loc);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$data = curl_exec($ch);

echo $data;
curl_close($ch);


?>