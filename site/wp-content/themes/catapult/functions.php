<?php

/**
 * init_sessions()
 *
 * @uses session_id()
 * @uses session_start()
 */
function init_sessions() {
    if (!session_id()) {
        session_start();
    }
}
add_action('init', 'init_sessions');

// Load homepage scripts
function do_scripts() {
	if (!is_admin()) {
		wp_deregister_script('jquery');
		wp_register_script('jquery', '/wp-content/themes/catapult/js/libs/jquery-1.8.0.min.js');
		wp_enqueue_script('jquery');
	}
}

add_action('wp_enqueue_scripts', 'do_scripts');

// add support for thumbnails
add_theme_support( 'post-thumbnails' ); 

// Add Case Study post type
add_action('init', 'casestudy_register');   

function casestudy_register() {
	$labels = array(
		'name' => _x('Case Studies', 'post type general name'), 
		'singular_name' => _x('Case Study', 'post type singular name'), 
		'add_new' => _x('Add New', 'casestudy'), 
		'add_new_item' => __('Case Study'), 
		'edit_item' => __('Edit Case Study'), 
		'new_item' => __('New Case Study'), 
		'view_item' => __('View Case Study'), 
		'search_items' => __('Search Case Studies'), 
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
		'supports' => array('title', 'editor') 
	);   
	register_post_type( 'casestudy' , $args ); 
}

// Add Lab post type
add_action('init', 'event_register');   

function event_register() {
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
		'supports' => array('title', 'editor') 
	);
	register_post_type( 'event' , $args ); 
}

// Add Job Openings post type
add_action('init', 'job_register');   

function job_register() {
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
		'supports' => array('title', 'editor', 'excerpt') 
	);
	register_post_type( 'job' , $args ); 
}

// Add Member post type
add_action('init', 'member_register');   

function member_register() {
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
		'supports' => array('title', 'editor', 'thumbnail', 'custom-fields') 
	);
	register_post_type( 'member' , $args ); 
}

// Add Team Member post type
// add_action('init', 'teammember_register');   

// function teammember_register() {
// 	$labels = array(
// 		'name' => _x('Team Members', 'post type general name'), 
// 		'singular_name' => _x('Team Member', 'post type singular name'), 
// 		'add_new' => _x('Add New', 'teammember'), 
// 		'add_new_item' => __('Team Member'), 
// 		'edit_item' => __('Edit Team Member'), 
// 		'new_item' => __('New Team Member'), 
// 		'view_item' => __('View Team Member'), 
// 		'search_items' => __('Search Team Members'), 
// 		'not_found' => __('Nothing found'), 
// 		'not_found_in_trash' => __('Nothing found in Trash'), 
// 		'parent_item_colon' => ''
// 	);   
// 	$args = array( 
// 		'labels' => $labels, 
// 		'public' => true, 
// 		'publicly_queryable' => true, 
// 		'show_ui' => true, 
// 		'query_var' => true, 
// 		'rewrite' => true, 
// 		'capability_type' => 'post', 
// 		'hierarchical' => false, 
// 		'menu_position' => null, 
// 		'supports' => array('title', 'editor') 
// 	);   
// 	register_post_type( 'teammember' , $args ); 
// }


add_filter('json_api_encode', 'my_encode_specs');

function my_encode_specs($response) {
  if (isset($response['posts'])) {
    foreach ($response['posts'] as $post) {
      my_add_specs($post); // Add specs to each post
    }
  } else if (isset($response['post'])) {
    my_add_specs($response['post']); // Add a specs property
  }
  return $response;
}

function my_add_specs(&$post) {
  $post->specs = get_field('casestudy', $post->id);
}

?>