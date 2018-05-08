<?php
/**
 * TLH functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package tlh-starter-theme
 */

 function is_post_type($type){
     global $wp_query;
     if($type == get_post_type($wp_query->post->ID)) return true;
     return false;
 }
 
// LOAD SETUP
require_once( 'inc/setup.php' );

// LOAD SETUP
require_once( 'inc/cleanup.php' );

// LOAD CUSTOM POST TYPES
require_once( 'inc/custom-post-types.php' );

// LOAD MAINTENANCE MODE
require_once( 'inc/maintenance-mode.php' );

// LOAD THEME SUPPORT
require_once( 'inc/theme-support.php' );

// LOAD TEMPLATE TAGES
require_once( 'inc/template-tags.php' );

// LOAD TEMPLATE TAGES
require_once( 'inc/enqueue-scripts.php' );

// LOAD COMPONENTS
require_once( 'inc/components/social-sharing.php' );
require_once( 'inc/components/cta.php' );
require_once( 'inc/components/accordion.php' );
require_once( 'inc/components/icon.php' );
require_once( 'inc/components/page-navi.php' );


/* DON'T DELETE THIS CLOSING TAG */ ?>
