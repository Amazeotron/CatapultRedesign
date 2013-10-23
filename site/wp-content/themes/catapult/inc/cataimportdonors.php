<?php

header("Cache-Control: no-cache, must-revalidate");
define('WP_USE_THEMES', false);
require($_SERVER['DOCUMENT_ROOT'] . '/wp-load.php');

// Get the Google Spreadsheet feed
$jsonURL = 'https://script.google.com/macros/s/AKfycbxxSV9Ux739Re3f5YiWbgOL9KKoiSFgzN2r8IBp1agHngttADk/exec';
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_URL, $jsonURL);

$result = curl_exec($ch);
$json = json_decode($result, true);
$donors = $json['donors'];

// TODO: This should check if the name already exists, and if it does, don't add the person.
foreach ($donors as $donor) {
  $post = array(
    'post_type' => 'member',
    'post_title' => $donor,
    'post_status' => 'publish',
    'post_author' => 1,
    'comment_status'=> 'closed'
  );
  $post_id = wp_insert_post($post);
}

