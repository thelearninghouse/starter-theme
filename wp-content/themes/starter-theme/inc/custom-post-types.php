<?php

  // Flush rewrite rules for custom post types
  function tlh_flush_rewrite_rules() {
      flush_rewrite_rules();
  }
  add_action( 'after_switch_theme', 'tlh_flush_rewrite_rules' );


  /**************************************************
  ONLINE DEGREES POST TYPE
  **************************************************/

  function add_degrees() {
      // creating (registering) the custom type
      register_post_type( 'degrees', /* (http://codex.wordpress.org/Function_Reference/register_post_type) */
          // let's now add all the options for this post type
          array( 'labels' => array(
              'name' => __( 'Online Degrees'), /* This is the Title of the Group */
              'singular_name' => __( 'Degree'), /* This is the individual type */
              'all_items' => __( 'All Degrees'), /* the all items menu item */
              'add_new' => __( 'Add New'), /* The add new menu item */
              'add_new_item' => __( 'Add New Degree'), /* Add New Display Title */
              'edit' => __( 'Edit'), /* Edit Dialog */
              'edit_item' => __( 'Edit Degree'), /* Edit Display Title */
              'new_item' => __( 'New Degree'), /* New Display Title */
              'view_item' => __( 'View Degree'), /* View Display Title */
              'search_items' => __( 'Search Degrees'), /* Search Custom Type Title */
              'not_found' =>  __( 'Nothing found in the Database.'), /* This displays if there are no entries yet */
              'not_found_in_trash' => __( 'Nothing found in Trash'), /* This displays if there is nothing in the trash */
              'parent_item_colon' => ''
              ), /* end of arrays */
              'description' => __( 'Description'), /* Custom Type Description */
              'public' => true,
              'publicly_queryable' => true,
              'exclude_from_search' => false,
              'show_ui' => true,
              'query_var' => true,
              'menu_position' => 12, /* this is what order you want it to appear in on the left hand side menu */
              'menu_icon' => 'dashicons-screenoptions', /* the icon for the custom post type menu */
              'has_archive' => false,
              'capability_type' => 'post',
              'hierarchical' => false,
              'rewrite' => array('slug' => 'online-degrees', 'with_front' => false ),
              /* the next one is important, it tells what's enabled in the post editor */
              'supports' => array( 'title', 'author', 'thumbnail', 'revisions')
          ) /* end of options */
      ); /* end of register post type */
  }
  add_action( 'init', 'add_degrees');

  // Add taxonomies for Online Programs
  function taxonomies_area_of_study() {
    $labels = array(
      'name'              => _x( 'Area of Study', 'taxonomy general name' ),
      'singular_name'     => _x( 'Area of Study', 'taxonomy singular name' ),
      'search_items'      => __( 'Search Area of Studies' ),
      'all_items'         => __( 'All Area of Studies' ),
      'parent_item'       => __( 'Parent Area of Study' ),
      'parent_item_colon' => __( 'Parent Area of Study:' ),
      'edit_item'         => __( 'Edit Area of Study' ),
      'update_item'       => __( 'Update Area of Study' ),
      'add_new_item'      => __( 'Add New Area of Study' ),
      'new_item_name'     => __( 'New Area of Study' ),
      'menu_name'         => __( 'Area of Studies' )
    );

    $args = array (
      'labels' => $labels,
      'hierarchical' => true,
      'rewrite' => array('slug' => 'online-programs/area-of-study', 'with_front' => false )
    );

    register_taxonomy( 'degree_area', 'degrees', $args );

  }
  add_action( 'init', 'taxonomies_area_of_study', 0 );

  function taxonomies_degree_level() {
    $labels = array(
      'name'              => _x( 'Degree Levels', 'taxonomy general name' ),
      'singular_name'     => _x( 'Degree Level', 'taxonomy singular name' ),
      'search_items'      => __( 'Search Degree Levels' ),
      'all_items'         => __( 'All Degree Levels' ),
      'parent_item'       => __( 'Parent Degree Levels' ),
      'parent_item_colon' => __( 'Parent Degree Level' ),
      'edit_item'         => __( 'Edit Degree Level' ),
      'update_item'       => __( 'Update Degree Level' ),
      'add_new_item'      => __( 'Add New Degree Level' ),
      'new_item_name'     => __( 'New Degree Level' ),
      'menu_name'         => __( 'Degree Levels' )
    );

    $args = array (
      'labels' => $labels,
      'hierarchical' => true,
      'rewrite' => array('slug' => 'online-programs/degree-level', 'with_front' => false )
    );

    register_taxonomy( 'degree_level', 'degrees', $args );

  }
  add_action( 'init', 'taxonomies_degree_level', 0 );


  /************* FIX FOR ONLINE DEGREES CHILD PAGES *****************/

  add_filter( 'page_rewrite_rules', 'tlh_collect_page_rewrite_rules' );
  function tlh_collect_page_rewrite_rules( $page_rewrite_rules )
  {
      $GLOBALS['tlh_page_rewrite_rules'] = $page_rewrite_rules;
      return array();
  }

  add_filter( 'rewrite_rules_array', 'tlh_prepend_page_rewrite_rules' );
  function tlh_prepend_page_rewrite_rules( $rewrite_rules )
  {
      return $GLOBALS['tlh_page_rewrite_rules'] + $rewrite_rules;
  }


  /**************************************************
  LANDING PAGE POST TYPE
  **************************************************/

  function add_landing_pages() {
      // creating (registering) the custom type
      register_post_type( 'landing-pages', /* (http://codex.wordpress.org/Function_Reference/register_post_type) */
          // let's now add all the options for this post type
          array( 'labels' => array(
              'name' => __( 'Landing Pages'), /* This is the Title of the Group */
              'singular_name' => __( 'Landing Page'), /* This is the individual type */
              'all_items' => __( 'All Landing Pages'), /* the all items menu item */
              'add_new' => __( 'Add New'), /* The add new menu item */
              'add_new_item' => __( 'Add New Landing Page'), /* Add New Display Title */
              'edit' => __( 'Edit'), /* Edit Dialog */
              'edit_item' => __( 'Edit Landing Page'), /* Edit Display Title */
              'new_item' => __( 'New Landing Page'), /* New Display Title */
              'view_item' => __( 'View Landing Page'), /* View Display Title */
              'search_items' => __( 'Search Landing Pages'), /* Search Custom Type Title */
              'not_found' =>  __( 'Nothing found in the Database.'), /* This displays if there are no entries yet */
              'not_found_in_trash' => __( 'Nothing found in Trash'), /* This displays if there is nothing in the trash */
              'parent_item_colon' => ''
              ), /* end of arrays */
              'description' => __( 'Landing Pages'), /* Custom Type Description */
              'public' => true,
              'publicly_queryable' => true,
              'exclude_from_search' => false,
              'show_ui' => true,
              'query_var' => true,
              'menu_position' => 15, /* this is what order you want it to appear in on the left hand side menu */
              'menu_icon' => 'dashicons-align-left', /* the icon for the custom post type menu */
              'has_archive' => false, /* you can rename the slug here */
              'capability_type' => 'post',
              'hierarchical' => false,
              'rewrite' => array('slug' => 'my', 'with_front' => false ),
              /* the next one is important, it tells what's enabled in the post editor */
              'supports' => array( 'title', 'author', 'thumbnail', 'revisions')
          ) /* end of options */
      ); /* end of register post type */
  }
  add_action( 'init', 'add_landing_pages');


  /**************************************************
  LAUNCH LP'S POST TYPE
  **************************************************/

  function add_launch_lps() {
      // creating (registering) the custom type
      register_post_type( 'launch-lps', /* (http://codex.wordpress.org/Function_Reference/register_post_type) */
          // let's now add all the options for this post type
          array( 'labels' => array(
              'name' => __( 'Launch LPs' ), /* This is the Title of the Group */
              'singular_name' => __( 'Launch LP' ), /* This is the individual type */
              'all_items' => __( 'All Launch LPs'), /* the all items menu item */
              'add_new' => __( 'Add New'), /* The add new menu item */
              'add_new_item' => __( 'Add New Launch LP' ), /* Add New Display Title */
              'edit' => __( 'Edit' ), /* Edit Dialog */
              'edit_item' => __( 'Edit Launch LP' ), /* Edit Display Title */
              'new_item' => __( 'New Launch LP' ), /* New Display Title */
              'view_item' => __( 'View Launch LP'), /* View Display Title */
              'search_items' => __( 'Search Launch LPs' ), /* Search Custom Type Title */
              'not_found' =>  __( 'Nothing found in the Database.'), /* This displays if there are no entries yet */
              'not_found_in_trash' => __( 'Nothing found in Trash' ), /* This displays if there is nothing in the trash */
              'parent_item_colon' => ''
              ), /* end of arrays */
              'description' => __( 'Launch LPs' ), /* Custom Type Description */
              'public' => true,
              'publicly_queryable' => true,
              'exclude_from_search' => true,
              'show_ui' => true,
              'query_var' => true,
              'menu_position' => 11, /* this is what order you want it to appear in on the left hand side menu */
              'menu_icon' => 'dashicons-flag', /* the icon for the custom post type menu */
              'has_archive' => false, /* you can rename the slug here */
              'capability_type' => 'post',
              'hierarchical' => false,
              'rewrite' => array('slug' => 'lp', 'with_front' => false ),
              /* the next one is important, it tells what's enabled in the post editor */
              'supports' => array( 'title', 'revisions')
          ) /* end of options */
      ); /* end of register post type */
  }
  add_action( 'init', 'add_launch_lps');


  /**************************************************
  COURSES POST TYPE
  **************************************************/

  function add_courses() {
      // creating (registering) the custom type
      register_post_type( 'courses', /* (http://codex.wordpress.org/Function_Reference/register_post_type) */
          // let's now add all the options for this post type
          array( 'labels' => array(
              'name' => __( 'Courses'), /* This is the Title of the Group */
              'singular_name' => __( 'Course'), /* This is the individual type */
              'all_items' => __( 'All Courses'), /* the all items menu item */
              'add_new' => __( 'Add New'), /* The add new menu item */
              'add_new_item' => __( 'Add New Course'), /* Add New Display Title */
              'edit' => __( 'Edit'), /* Edit Dialog */
              'edit_item' => __( 'Edit Course'), /* Edit Display Title */
              'new_item' => __( 'New Course'), /* New Display Title */
              'view_item' => __( 'View Course'), /* View Display Title */
              'search_items' => __( 'Search Courses'), /* Search Custom Type Title */
              'not_found' =>  __( 'Nothing found in the Database.'), /* This displays if there are no entries yet */
              'not_found_in_trash' => __( 'Nothing found in Trash'), /* This displays if there is nothing in the trash */
              'parent_item_colon' => ''
              ), /* end of arrays */
              'description' => __( 'Courses'), /* Custom Type Description */
              'public' => true,
              'publicly_queryable' => false,
              'exclude_from_search' => true,
              'show_ui' => true,
              // 'show_in_menu' => false,
              'show_in_admin_bar' => true,
              'query_var' => true,
              'menu_position' => 16, /* this is what order you want it to appear in on the left hand side menu */
              'menu_icon' => 'dashicons-list-view', /* the icon for the custom post type menu */
              'has_archive' => false,
              'capability_type' => 'post',
              'hierarchical' => false,
              'rewrite' => array('slug' => 'courses', 'with_front' => false ),
              /* the next one is important, it tells what's enabled in the post editor */
              'supports' => array( 'title', 'revisions')
          ) /* end of options */
      ); /* end of register post type */
  }
  add_action( 'init', 'add_courses');

  // Add taxonomy for Courses
  function taxonomies_course_subjects() {
    $labels = array(
      'name'              => _x( 'Course Subjects', 'taxonomy general name' ),
      'singular_name'     => _x( 'Course Subject', 'taxonomy singular name' ),
      'search_items'      => __( 'Search Course Subjects' ),
      'all_items'         => __( 'All Course Subjects' ),
      'parent_item'       => __( 'Parent Course Subject' ),
      'parent_item_colon' => __( 'Parent Course Subject:' ),
      'edit_item'         => __( 'Edit Course Subject' ),
      'update_item'       => __( 'Update Course Subject' ),
      'add_new_item'      => __( 'Add New Course Subject' ),
      'new_item_name'     => __( 'New Course Subject' ),
      'menu_name'         => __( 'Course Subjects' )
    );

    $args = array (
      'labels' => $labels,
      'hierarchical' => false,
      'rewrite' => array('slug' => 'courses/subjects/', 'with_front' => false )
    );

    register_taxonomy( 'course_subject', 'courses', $args );

  }
  add_action( 'init', 'taxonomies_course_subjects', 0 );


  /**************************************************
  DATES POST TYPE
  **************************************************/

  function add_dates() {
      // creating (registering) the custom type
      register_post_type( 'dates', /* (http://codex.wordpress.org/Function_Reference/register_post_type) */
          // let's now add all the options for this post type
          array( 'labels' => array(
              'name' => __( 'Dates'), /* This is the Title of the Group */
              'singular_name' => __( 'Date'), /* This is the individual type */
              'all_items' => __( 'All Dates'), /* the all items menu item */
              'add_new' => __( 'Add New'), /* The add new menu item */
              'add_new_item' => __( 'Add New Date'), /* Add New Display Title */
              'edit' => __( 'Edit'), /* Edit Dialog */
              'edit_item' => __( 'Edit Date'), /* Edit Display Title */
              'new_item' => __( 'New Date'), /* New Display Title */
              'view_item' => __( 'View Date'), /* View Display Title */
              'search_items' => __( 'Search Dates'), /* Search Custom Type Title */
              'not_found' =>  __( 'Nothing found in the Database.'), /* This displays if there are no entries yet */
              'not_found_in_trash' => __( 'Nothing found in Trash'), /* This displays if there is nothing in the trash */
              'parent_item_colon' => ''
              ), /* end of arrays */
              'description' => __( 'Dates'), /* Custom Type Description */
              'public' => true,
              'publicly_queryable' => false,
              'exclude_from_search' => true,
              'show_ui' => true,
              // 'show_in_menu' => false,
              'show_in_admin_bar' => true,
              'query_var' => true,
              'menu_position' => 17, /* this is what order you want it to appear in on the left hand side menu */
              'menu_icon' => 'dashicons-calendar', /* the icon for the custom post type menu */
              'has_archive' => false,
              'capability_type' => 'post',
              'hierarchical' => false,
              'rewrite' => array('slug' => 'courses', 'with_front' => false ),
              /* the next one is important, it tells what's enabled in the post editor */
              'supports' => array( 'title', 'revisions')
          ) /* end of options */
      ); /* end of register post type */
  }
  add_action( 'init', 'add_dates');

  // Add type to Dates
  function taxonomies_date_types() {
    $labels = array(
      'name'              => _x( 'Date Types', 'taxonomy general name' ),
      'singular_name'     => _x( 'Date Type', 'taxonomy singular name' ),
      'search_items'      => __( 'Search Date Types' ),
      'all_items'         => __( 'All Date Types' ),
      'parent_item'       => __( 'Parent Date Type' ),
      'parent_item_colon' => __( 'Parent Date Type:' ),
      'edit_item'         => __( 'Edit Date Type' ),
      'update_item'       => __( 'Update Date Type' ),
      'add_new_item'      => __( 'Add New Date Type' ),
      'new_item_name'     => __( 'New Date Type' ),
      'menu_name'         => __( 'Date Types' )
    );

    $args = array (
      'labels' => $labels,
      'hierarchical' => false,
      'rewrite' => array('slug' => 'dates/types/', 'with_front' => false )
    );

    register_taxonomy( 'date_type', 'dates', $args );

  }
  add_action( 'init', 'taxonomies_date_types', 0 );

?>
