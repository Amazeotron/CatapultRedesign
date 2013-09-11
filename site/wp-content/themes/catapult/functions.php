<?php

/**
 * init_sessions()
 *
 * @uses session_id()
 * @uses session_start()
 */
function init_sessions()
{
  if (!session_id()) {
    session_start();
  }
}

add_action('init', 'init_sessions');

function custom_excerpt_length($length)
{
  return 15;
}

add_filter('excerpt_length', 'custom_excerpt_length', 999);

if (function_exists('register_sidebar')) {
  register_sidebar();
}

// Load homepage scripts
function do_scripts()
{
  // if (!is_admin()) {
  wp_deregister_script('jquery');
  wp_register_script('jquery', '/wp-content/themes/catapult/js/libs/jquery-1.8.0.min.js');
  wp_enqueue_script('jquery');
  // }
}

add_action('wp_enqueue_scripts', 'do_scripts');

// add support for thumbnails
add_theme_support('post-thumbnails');


// Rewrite default post type
add_action( 'init', 'my_new_default_post_type', 1 );
function my_new_default_post_type() {

  register_post_type( 'post', array(
    'labels' => array(
      'name_admin_bar' => _x( 'Post', 'add new on admin bar' ),
    ),
    'public'  => true,
    '_builtin' => false,
    '_edit_link' => 'post.php?post=%d',
    'capability_type' => 'post',
    'map_meta_cap' => true,
    'hierarchical' => false,
    'rewrite' => array( 'slug' => 'article' ),
    'query_var' => false,
    'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'trackbacks', 'custom-fields', 'comments', 'revisions', 'post-formats' ),
  ) );
}

// Add Lab post type
add_action('init', 'event_register');

function event_register()
{
  $labels = array(
    'name' => _x('Events', 'post type general name'),
    'singular_name' => _x('Event', 'post type singular name'),
    'add_new' => _x('Add New', 'event'),
    'add_new_item' => __('Event'),
    'edit_item' => __('Edit Event'),
    'new_item' => __('New Event'),
    'view_item' => __('View Event'),
    'search_items' => __('Search Events'),
    'not_found' => __('Nothing found'),
    'not_found_in_trash' => __('Nothing found in Trash'),
    'parent_item_colon' => ''
  );
  $args = array(
    'labels' => $labels,
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'query_var' => true,
    'rewrite' => true,
    'capability_type' => 'post',
    'hierarchical' => false,
    'menu_position' => null,
    'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'trackbacks', 'custom-fields', 'comments', 'revisions', 'page-attributes', 'post-formats')
  );
  register_post_type('event', $args);
}

// Add Job Openings post type
add_action('init', 'job_register');

function job_register()
{
  $labels = array(
    'name' => _x('Jobs', 'post type general name'),
    'singular_name' => _x('Job', 'post type singular name'),
    'add_new' => _x('Add New', 'job'),
    'add_new_item' => __('Job'),
    'edit_item' => __('Edit Job'),
    'new_item' => __('New Job'),
    'view_item' => __('View Job'),
    'search_items' => __('Search Jobs'),
    'not_found' => __('Nothing found'),
    'not_found_in_trash' => __('Nothing found in Trash'),
    'parent_item_colon' => ''
  );
  $args = array(
    'labels' => $labels,
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'query_var' => true,
    'rewrite' => true,
    'capability_type' => 'post',
    'hierarchical' => false,
    'menu_position' => null,
    'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'trackbacks', 'custom-fields', 'comments', 'revisions', 'page-attributes', 'post-formats')
  );
  register_post_type('job', $args);
}

// Add Member post type
add_action('init', 'member_register');

function member_register()
{
  $labels = array(
    'name' => _x('Members', 'post type general name'),
    'singular_name' => _x('Member', 'post type singular name'),
    'add_new' => _x('Add New', 'member'),
    'add_new_item' => __('Member'),
    'edit_item' => __('Edit Member'),
    'new_item' => __('New Member'),
    'view_item' => __('View Member'),
    'search_items' => __('Search Members'),
    'not_found' => __('Nothing found'),
    'not_found_in_trash' => __('Nothing found in Trash'),
    'parent_item_colon' => ''
  );
  $args = array(
    'labels' => $labels,
    'exclude_from_search' => 'true',
    'public' => false,
    'publicly_queryable' => false,
    'show_ui' => true,
    'query_var' => true,
    'rewrite' => true,
    'capability_type' => 'post',
    'hierarchical' => false,
    'menu_position' => null,
    'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'trackbacks', 'custom-fields', 'comments', 'revisions', 'page-attributes', 'post-formats')
  );
  register_post_type('member', $args);
}

// Add Team Member post type
add_action('init', 'teammember_register');

function teammember_register()
{
  $labels = array(
    'name' => _x('Team Members', 'post type general name'),
    'singular_name' => _x('Team Member', 'post type singular name'),
    'add_new' => _x('Add New', 'teammember'),
    'add_new_item' => __('Team Member'),
    'edit_item' => __('Edit Team Member'),
    'new_item' => __('New Team Member'),
    'view_item' => __('View Team Member'),
    'search_items' => __('Search Team Members'),
    'not_found' => __('Nothing found'),
    'not_found_in_trash' => __('Nothing found in Trash'),
    'parent_item_colon' => ''
  );
  $args = array(
    'labels' => $labels,
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'query_var' => true,
    'rewrite' => true,
    'capability_type' => 'post',
    'hierarchical' => false,
    'menu_position' => null,
    'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'trackbacks', 'custom-fields', 'comments', 'revisions', 'page-attributes', 'post-formats')
  );
  register_post_type('teammember', $args);
}

// Add Project post type
add_action('init', 'project_register');

function project_register()
{
  $labels = array(
    'name' => _x('Projects', 'post type general name'),
    'singular_name' => _x('Project', 'post type singular name'),
    'add_new' => _x('Add New', 'project'),
    'add_new_item' => __('Project'),
    'edit_item' => __('Edit Project'),
    'new_item' => __('New Project'),
    'view_item' => __('View Project'),
    'search_items' => __('Search Projects'),
    'not_found' => __('Nothing found'),
    'not_found_in_trash' => __('Nothing found in Trash'),
    'parent_item_colon' => ''
  );
  $args = array(
    'labels' => $labels,
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'query_var' => true,
    'rewrite' => true,
    'capability_type' => 'post',
    'hierarchical' => true,
    'menu_position' => null,
    'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'trackbacks', 'custom-fields', 'comments', 'revisions', 'page-attributes', 'post-formats'),
    'taxonomies' => array('category', 'post_tag'),
  );
  register_post_type('project', $args);
}

// Add Homepage Slideshow post type
add_action('init', 'homepageslideshow_register');

function homepageslideshow_register()
{
  $labels = array(
    'name' => _x('Homepage Slideshow', 'post type general name'),
    'singular_name' => _x('Homepage Slideshow', 'post type singular name'),
    'add_new' => _x('Add New', 'homepageslideshow'),
    'add_new_item' => __('Homepage Slideshow'),
    'edit_item' => __('Edit Homepage Slideshow'),
    'new_item' => __('New Homepage Slideshow'),
    'view_item' => __('View Homepage Slideshow'),
    'search_items' => __('Search Homepage Slideshows'),
    'not_found' => __('Nothing found'),
    'not_found_in_trash' => __('Nothing found in Trash'),
    'parent_item_colon' => ''
  );
  $args = array(
    'labels' => $labels,
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'query_var' => true,
    'rewrite' => true,
    'capability_type' => 'post',
    'hierarchical' => true,
    'menu_position' => null,
    'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'trackbacks', 'custom-fields', 'comments', 'revisions', 'page-attributes', 'post-formats')
  );
  register_post_type('homepageslideshow', $args);
}

// Add Project post type
add_action('init', 'featured_articles_register');

function featured_articles_register()
{
  $labels = array(
    'name' => _x('Featured Articles', 'post type general name'),
    'singular_name' => _x('Featured Article', 'post type singular name'),
    'add_new' => _x('Add New', 'Featured Article'),
    'add_new_item' => __('Featured Article'),
    'edit_item' => __('Edit Featured Article'),
    'new_item' => __('New Featured Article'),
    'view_item' => __('View Featured Article'),
    'search_items' => __('Search Featured Article'),
    'not_found' => __('Nothing found'),
    'not_found_in_trash' => __('Nothing found in Trash'),
    'parent_item_colon' => ''
  );
  $args = array(
    'labels' => $labels,
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'query_var' => true,
    'rewrite' => true,
    'capability_type' => 'post',
    'hierarchical' => true,
    'menu_position' => null,
    'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'trackbacks', 'custom-fields', 'comments', 'revisions', 'page-attributes', 'post-formats'),
    'taxonomies' => array('category', 'post_tag'),
  );
  register_post_type('Featured Article', $args);
}





add_filter('json_api_encode', 'my_encode_specs');

function my_encode_specs($response)
{
  if (isset($response['posts'])) {
    foreach ($response['posts'] as $post) {
      my_add_specs($post); // Add specs to each post
    }
  } else if (isset($response['post'])) {
    my_add_specs($response['post']); // Add a specs property
  }
  return $response;
}

function my_add_specs(&$post)
{
  $post->specs = get_field('casestudy', $post->id);
}

?>