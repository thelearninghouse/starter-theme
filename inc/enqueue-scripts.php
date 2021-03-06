<?php
require_once( get_template_directory() . '/mix-helpers.php' );
// Main Enqueue Scripts function
function tlh_scripts_and_styles() {
	// global $wp_styles; // call global $wp_styles variable to add conditional wrapper around ie stylesheet the WordPress way

	if ( ! is_admin() ) {

		// form validation and tracking script
		wp_register_script( 'manifest', mix( '/js/manifest.js' ), array(), '', true );
		wp_register_script( 'vendor', mix( '/js/vendor.js' ), array( 'manifest' ), '', true );
		wp_register_script( 'tlh-js', mix( '/js/scripts.js' ), array( 'manifest', 'vendor' ), '', true );

		// enqueue styles and scripts
		wp_enqueue_script( 'tlh-forms' );
		wp_enqueue_script( 'manifest' );
		wp_enqueue_script( 'vendor' );
		wp_enqueue_script( 'tlh-js' );
	}
}

/* Remove WP-EMBED script */
function my_deregister_scripts() {
	wp_deregister_script( 'wp-embed' );
}
add_action( 'wp_footer', 'my_deregister_scripts' );

// jQuery Conflict Fix
function enqueue_jquery_version() {
	wp_deregister_script( 'jquery' );
	wp_register_script( 'jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.js', false, false, false );
	wp_enqueue_script( 'jquery' );
}
add_action( 'wp_enqueue_scripts', 'enqueue_jquery_version' );


function extend_admin_js() {
	wp_enqueue_script( 'wp-admin-extender', get_template_directory_uri() . '/inc/admin.js', array( 'media-upload', 'swfupload', 'plupload' ), false, true );
}
add_action( 'admin_enqueue_scripts', 'extend_admin_js' );
