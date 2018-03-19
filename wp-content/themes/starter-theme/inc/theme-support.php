<?php

  // Adding WP 3+ Functions & Theme Support
  function tlh_theme_support() {

  	// wp thumbnails (sizes handled in functions.php)
  	add_theme_support( 'post-thumbnails' );

  	// default thumb size
  	set_post_thumbnail_size(125, 125, true);

  	// rss thingy
  	add_theme_support('automatic-feed-links');

  	// wp menus
  	add_theme_support( 'menus' );

  	// registering wp3+ menus
  	register_nav_menus(
  		array(
  			'main' => __( 'Main Menu' ), // main nav in header
  			'footer-links' => __( 'Footer Links' ), // secondary nav in footer
  			'secondary' => __( 'Secondary Menu' ) // secondary nav in footer
  		)
  	);

  	// Enable support for HTML5 markup.
  	add_theme_support( 'html5', array(
  		'search-form',
  		'gallery',
  		'caption'
  	) );

  } /* end bones theme support */

  // Sidebars & Widgetizes Areas
  function tlh_register_sidebars() {
  	register_sidebar(array(
  		'id' => 'sidebar1',
  		'name' => __( 'Sidebar 1' ),
  		'description' => __( 'The first (primary) sidebar.' ),
  		'before_widget' => '<div id="%1$s" class="widget %2$s">',
  		'after_widget' => '</div>',
  		'before_title' => '<h4 class="widgettitle">',
  		'after_title' => '</h4>',
  	));
  } // don't remove this bracket!

  // A Better Title
  function rw_title( $title, $sep, $seplocation ) {
    global $page, $paged;

    // Don't affect in feeds.
    if ( is_feed() ) return $title;

    // Add the blog's name
    if ( 'right' == $seplocation ) {
      $title .= get_bloginfo( 'name' );
    } else {
      $title = get_bloginfo( 'name' ) . $title;
    }

    // Add the blog description for the home/front page.
    $site_description = get_bloginfo( 'description', 'display' );

    if ( $site_description && ( is_home() || is_front_page() ) ) {
      $title .= " {$sep} {$site_description}";
    }

    // Add a page number if necessary:
    if ( $paged >= 2 || $page >= 2 ) {
      $title .= " {$sep} " . sprintf( __( 'Page %s', 'dbt' ), max( $paged, $page ) );
    }

    return $title;

  } // end better title

?>
