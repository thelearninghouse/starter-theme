<?php

function tlh_setup() {

	// launching operation cleanup
	add_action( 'init', 'tlh_head_cleanup' );
	// A better title
	add_filter( 'wp_title', 'rw_title', 10, 3 );
	// remove WP version from RSS
	add_filter( 'the_generator', 'tlh_rss_version' );
	// remove pesky injected css for recent comments widget
	add_filter( 'wp_head', 'tlh_remove_wp_widget_recent_comments_style', 1 );
	// clean up comment styles in the head
	add_action( 'wp_head', 'tlh_remove_recent_comments_style', 1 );
	// clean up gallery output in wp
	add_filter( 'gallery_style', 'tlh_gallery_style' );
	// enqueue base scripts and styles
	add_action( 'wp_enqueue_scripts', 'tlh_scripts_and_styles', 999 );
	// launching this stuff after theme setup
	tlh_theme_support();
	// adding sidebars to WordPress (these are created in functions.php)
	add_action( 'widgets_init', 'tlh_register_sidebars' );
	// cleaning up random code around images
	add_filter( 'the_content', 'tlh_filter_ptags_on_images' );
	// cleaning up excerpt
	add_filter( 'excerpt_more', 'tlh_excerpt_more' );

} /* end tlh_setup */

// let's get this party started
add_action( 'after_setup_theme', 'tlh_setup' );

// Theme options for ACF
if ( function_exists( 'acf_add_options_page' ) ) {

	acf_add_options_page(
		array(
			'page_title' => 'Theme Settings',
			'menu_title' => 'Theme Settings',
			'menu_slug'  => 'theme-general-settings',
			'capability' => 'edit_posts',
			'redirect'   => false,
		)
	);
}

// Allow SVG Uploads
function cc_mime_types( $mimes ) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter( 'upload_mimes', 'cc_mime_types' );

// Privacy Policy Shortcode
function privacy_policy() {
	  $file       = 'http://www.learninghouse.com/privacy/privacy.txt';
			$data = file_get_contents( $file );
			return $data;
}
add_shortcode( 'privacy', 'privacy_policy' );

// Show current template in admin bar
function tlh_add_toolbar_items( $admin_bar ) {

	if ( ! is_admin() ) {
		global $template;
		$template_file_name     = basename( $template );
		$template_relative_path = str_replace( ABSPATH . 'wp-content/', '', $template );

		$admin_bar->add_menu(
			array(
				'id'    => 'current-template',
				'title' => 'Template: <span style="font-family: Courier New;">' . $template_file_name . '</span>',
				'href'  => '#',
				'meta'  => array(
					'title' => __( 'Current Template' ),
				),
			)
		);

		$admin_bar->add_menu(
			array(
				'id'     => 'template-path',
				'parent' => 'current-template',
				'title'  => 'Template relative path: <span style="font-family: Courier New;">' . $template_relative_path . '</span>',
				'href'   => '#',
				'meta'   => array(
					'title'  => __( 'Template Path' ),
					'target' => '_blank',
					'class'  => 'template-relative-path',
				),
			)
		);
	}
}
add_action( 'admin_bar_menu', 'tlh_add_toolbar_items', 9999 );

// Remove Archive Labels
function tlh_theme_archive_title( $title ) {
	if ( is_category() ) {
		$title = single_cat_title( '', false );
	} elseif ( is_tag() ) {
		$title = single_tag_title( '', false );
	} elseif ( is_author() ) {
		$title = '<span class="vcard">' . get_the_author() . '</span>';
	} elseif ( is_post_type_archive() ) {
		$title = post_type_archive_title( '', false );
	} elseif ( is_tax() ) {
		$title = single_term_title( '', false );
	}

	return $title;
}
add_filter( 'get_the_archive_title', 'tlh_theme_archive_title' );

// Move Yoast to bottom
function tlh_move_yoast() {
	return 'low';
}
add_filter( 'wpseo_metabox_prio', 'tlh_move_yoast' );

// Customize tinymce editor
function tlh_tinymce_buttons( $buttons ) {
	  // Add style selector to the beginning of the toolbar
	  array_unshift( $buttons, 'styleselect' );

	  return $buttons;
}
add_filter( 'mce_buttons', 'tlh_tinymce_buttons' );
