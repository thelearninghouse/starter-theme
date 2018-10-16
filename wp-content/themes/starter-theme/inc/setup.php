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
	function tlh_max_image_size( $file ) {
	  $size = $file['size'];
	  $size = $size / 1024;
	  $type = $file['type'];

		// Requirements
		// pixels
		$max_width = '1600';
		// KB
		$max_size = 300;

	  $is_image = strpos( $type, 'image' ) !== false;

	  if ( $is_image ) {
			$image = getimagesize($file['tmp_name']);
			$image_width = $image[0];
	    $image_height = $image[1];

			$errors = array();

			if ( $size > $max_size ) {
				$errors[] = ' smaller than 300 KB';
			}
			if ( $image_width > $max_width ) {
				$errors[] = ' no larger than 1600px in width';
			}

			$error_str = 'Image files must be';

			foreach ($errors as $key => $error) {
				$error_str .= $error;
				if ( $key < (count($errors) - 2) ) {
					$error_str .= ',';
				} else if ( $key === (count($errors) - 2) ) {
					$error_str .= ' and';
				} else if ( $key === (count($errors) - 1) ) {
					$error_str .= '.';
				}
			}

			if ( !empty($errors) ) {
				$file['error'] = $error_str;
			}

		}

		return $file;

	}
	add_filter( 'wp_handle_upload_prefilter', 'tlh_max_image_size' );
