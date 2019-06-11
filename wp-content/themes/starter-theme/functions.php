<?php
/**
 * TLH functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package tlh-starter-theme
 */

function is_post_type( $type ) {
	global $wp_query;
	if ( get_post_type( $wp_query->post->ID ) === $type ) {
		return true;
	}
	return false;
}

// LOAD SETUP
require_once( 'inc/setup.php' );

// LOAD CLEANUP
require_once( 'inc/cleanup.php' );

// ADD CUSTOM MENU PAGE TO HOUSE RESOURCES
require_once( 'inc/resources_admin_page.php' );

// LOAD CUSTOM POST TYPES
require_once( 'inc/custom-post-types.php' );

// LOAD MAINTENANCE MODE
require_once( 'inc/maintenance-mode.php' );

// LOAD THEME SUPPORT
require_once( 'inc/theme-support.php' );

// LOAD TEMPLATE TAGS
require_once( 'inc/template-tags/byline.php' );
require_once( 'inc/template-tags/field.php' );
require_once( 'inc/template-tags/next-start-date.php' );
require_once( 'inc/template-tags/phone-link.php' );
require_once( 'inc/template-tags/responsive-bg-style.php' );

// LOAD SCRIPTS
require_once( 'inc/enqueue-scripts.php' );

// LOAD FIELD CUSTOMIZATION
require_once( 'inc/acf-customization.php' );

// LOAD GUTENBERG STUFF
require_once( 'inc/gutenberg.php' );

// LOAD COMPONENTS
require_once( 'inc/components/social-sharing.php' );
require_once( 'inc/components/accordion.php' );
require_once( 'inc/components/icon.php' );
require_once( 'inc/components/page-navi.php' );
