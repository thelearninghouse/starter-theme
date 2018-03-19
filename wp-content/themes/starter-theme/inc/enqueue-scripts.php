<?php

  // Main Enqueue Scripts function
  function tlh_scripts_and_styles() {

    // global $wp_styles; // call global $wp_styles variable to add conditional wrapper around ie stylesheet the WordPress way

    if (!is_admin()) {

  		// form validation and tracking script
  		wp_register_script( 'tlh-forms', 'https://requestforms.learninghouse.com/form/affiliate/568', array(), '', false );

  		// adding scripts file in the footer
  		wp_register_script( 'tlh-js', get_stylesheet_directory_uri() . '/library/js/build/production.min.js', array( 'jquery' ), '', true );

  		// enqueue styles and scripts
  		wp_enqueue_script( 'tlh-forms' );
  		wp_enqueue_script( 'jquery' );
  		wp_enqueue_script( 'tlh-js' );

  	}
  }

  /* Remove WP-EMBED script */
  function my_deregister_scripts(){
    wp_deregister_script( 'wp-embed' );
  }
  add_action( 'wp_footer', 'my_deregister_scripts' );

  // jQuery Conflict Fix
  function enqueue_jquery_version() {
    wp_deregister_script( 'jquery' );
    wp_register_script( 'jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js', false, false, false );
    wp_enqueue_script( 'jquery' );
  }
  add_action('wp_enqueue_scripts', 'enqueue_jquery_version');

?>
