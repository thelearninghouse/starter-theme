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
  // adding sidebars to Wordpress (these are created in functions.php)
  add_action( 'widgets_init', 'tlh_register_sidebars' );
  // cleaning up random code around images
  add_filter( 'the_content', 'tlh_filter_ptags_on_images' );
  // cleaning up excerpt
  add_filter( 'excerpt_more', 'tlh_excerpt_more' );

} /* end tlh_setup */

// let's get this party started
add_action( 'after_setup_theme', 'tlh_setup' );

// Theme options for ACF
if( function_exists('acf_add_options_page') ) {

    acf_add_options_page(array(
        'page_title'    => 'Theme Settings',
        'menu_title'    => 'Theme Settings',
        'menu_slug'     => 'theme-general-settings',
        'capability'    => 'edit_posts',
        'redirect'      => false
    ));
}

// Allow SVG Uploads
function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

// Privacy Policy Shortcode
function privacy_policy() {
      $file = "http://www.learninghouse.com/privacy/privacy.txt";
            $data = file_get_contents($file);
            return $data;
              }
add_shortcode( 'privacy', 'privacy_policy' );

// Restrict Image Size and Dimensions
// function tlh_max_image_size( $file ) {
//   $size = $file['size'];
//   $size = $size / 1024;
//   $type = $file['type'];
//
// 	// Requirements
// 	// pixels
// 	$max_width = '1600';
// 	// KB
// 	$max_size = 300;
//
//   $is_image = strpos( $type, 'image' ) !== false;
//
//   if ( $is_image ) {
// 		$image = getimagesize($file['tmp_name']);
// 		$image_width = $image[0];
//     $image_height = $image[1];
//
// 		$errors = array();
//
// 		if ( $size > $max_size ) {
// 			$errors[] = ' smaller than 300 KB';
// 		}
// 		if ( $image_width > $max_width ) {
// 			$errors[] = ' no larger than 1600px in width';
// 		}
//
// 		$error_str = 'Image files must be';
//
// 		foreach ($errors as $key => $error) {
// 			$error_str .= $error;
// 			if ( $key < (count($errors) - 2) ) {
// 				$error_str .= ',';
// 			} else if ( $key === (count($errors) - 2) ) {
// 				$error_str .= ' and';
// 			} else if ( $key === (count($errors) - 1) ) {
// 				$error_str .= '.';
// 			}
// 		}
//
// 		if ( !empty($errors) ) {
// 			$file['error'] = $error_str;
// 		}
//
// 	}
//
// 	return $file;
//
// }
// add_filter( 'wp_handle_upload_prefilter', 'tlh_max_image_size' );

// Show current template in admin bar
function tlh_add_toolbar_items($admin_bar) {

	if ( !is_admin() ) {
		global $template;
		$template_file_name      = basename( $template );
		$template_relative_path  = str_replace( ABSPATH . 'wp-content/', '', $template );

		$admin_bar->add_menu( array(
		  'id'    => 'current-template',
		  'title' => 'Template: <span style="font-family: Courier New;">' . $template_file_name . '</span>',
		  'href'  => '#',
		  'meta'  => array(
		      'title' => __('Current Template'),
		  ),
		));

		$admin_bar->add_menu( array(
		  'id'    => 'template-path',
		  'parent' => 'current-template',
		  'title' =>  'Template relative path: <span style="font-family: Courier New;">' . $template_relative_path . '</span>',
		  'href'  => '#',
		  'meta'  => array(
		      'title' => __('Template Path'),
		      'target' => '_blank',
		      'class' => 'template-relative-path'
		  ),
		));
	}
}
add_action('admin_bar_menu', 'tlh_add_toolbar_items', 9999);

// Create dynamic select for icons that pulls from icons folder in theme
// function acf_load_icon_field_choices( $field ) {
//
//   // reset choices
//   $field['choices'] = array();
//
// 	$icon_dir = get_stylesheet_directory() . '/public/images/icons/';
// 	$icon_files = scandir($icon_dir);
// 	foreach ($icon_files as $icon_file) {
// 		// append to choices
//
// 		$icon_name = str_replace('.svg', '', $icon_file);
//
// 		if ( substr( $icon_name, 0, 1 ) !== '.' ) {
// 	  	$field['choices'][ $icon_name ] = $icon_name;
// 		}
// 	}
//
//   // return the field
//   return $field;
//
// }
// add_filter('acf/load_field/name=icon', 'acf_load_icon_field_choices');

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

// Customize tinymce editor
function tlh_tinymce_buttons( $buttons ) {
      // Add style selector to the beginning of the toolbar
      array_unshift( $buttons, 'styleselect' );

      return $buttons;
 }
add_filter( 'mce_buttons', 'tlh_tinymce_buttons' );

// UNCOMMENT BELOW TO ENABLE EDITOR STYLES

// // Callback function to filter the MCE settings
// function tlh_mce_before_init_insert_formats( $init_array ) {
// 	// Define the style_formats array
// 	$style_formats = array(
// 		// Each array child is a format with it's own settings
// 		array(
// 			'title' => 'Intro Paragraph',
// 			'block' => 'p',
// 			'selector' => 'p',
// 			'classes' => 'largeCopy',
// 		),
// 		array(
// 			'title' => 'Fancy Numbers',
// 			'block' => 'ol',
// 			'selector' => 'ol',
// 			'classes' => 'fancyNumbers',
// 		),
// 	);
// 	// Insert the array, JSON ENCODED, into 'style_formats'
// 	$init_array['style_formats'] = json_encode( $style_formats );
//
// 	return $init_array;
//
// }
// add_filter( 'tiny_mce_before_init', 'tlh_mce_before_init_insert_formats' );
//
// // Show custom styles in editor
// add_editor_style( 'public/css/editor-style.css' );

?>
