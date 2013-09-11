<?php
  define('WP_USE_THEMES', false);
  require($_SERVER['DOCUMENT_ROOT'] . '/wp-blog-header.php');
  $imgID = $_GET["imageID"];
  $imgurl = wp_get_attachment_image_src($imgID, $_GET["size"]);
  $imgurl = $imgurl[0];
  
  // echo $imgurl;
  if ($imgurl) {
    // open the file in a binary mode
    header("Content-Type: image/jpeg");
    $fp = fopen($imgurl, 'rb');
    // header("Content-Length: " . filesize($imgurl));
    // dump the picture and stop the script
    
    fpassthru($fp);
    exit;
  }