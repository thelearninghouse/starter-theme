<?php
/**
 * TLH functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package tlh-starter-theme
 */

// include composer
require __DIR__ . '/vendor/autoload.php';

// setup timber
$timber          = new Timber\Timber();
Timber::$dirname = array( 'templates' );
// Timber::$locations = get_theme_file_path( '/blocks' );
// To enable Twig's autoescape, set this value to true
Timber::$autoescape = false;

function tlh_timber_context( $context ) {
	$context['site']          = new TimberSite();
	$context['options']       = get_fields( 'option' );
	$context['year']          = date( 'Y' );
	$context['primaryMenu']   = new Timber\Menu( 'primary' );
	$context['secondaryMenu'] = new Timber\Menu( 'secondary' );
	$context['footerLinks']   = new Timber\Menu( 'secondary' );
	$context['mag-menu']      = new Timber\Menu( 'mag' );
	return $context;
}
add_filter( 'timber_context', 'tlh_timber_context' );

// get list of blocks
function get_block_list() {
	$blocks = scandir( get_theme_file_path( '/blocks' ) );
	return array_filter(
		$blocks,
		function( $var ) {
			return ( '.' !== $var && '..' !== $var );
		}
	);
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

// Load Mix Helpers
require_once( 'inc/mix-helpers.php' );

// LOAD THEME SUPPORT
require_once( 'inc/theme-support.php' );

// Load functions for use in twig templates
require_once( 'inc/twig-functions.php' );

// LOAD SCRIPTS
require_once( 'inc/enqueue-scripts.php' );

// LOAD FIELD CUSTOMIZATION
require_once( 'inc/acf-customization.php' );

// LOAD GUTENBERG STUFF
require_once( 'inc/gutenberg.php' );
require_once( 'inc/acf-blocks.php' );

// LOAD TEMPLATE TAGS
require_once( 'inc/template-tags/byline.php' );
require_once( 'inc/template-tags/get-field.php' );
require_once( 'inc/template-tags/is-post-type.php' );
require_once( 'inc/template-tags/next-start-date.php' );
require_once( 'inc/template-tags/phone-link.php' );
require_once( 'inc/template-tags/responsive-bg-style.php' );

// LOAD COMPONENTS
require_once( 'inc/components/social-sharing.php' );
require_once( 'inc/components/cta.php' );
require_once( 'inc/components/accordion.php' );
require_once( 'inc/components/icon.php' );
require_once( 'inc/components/page-navi.php' );
