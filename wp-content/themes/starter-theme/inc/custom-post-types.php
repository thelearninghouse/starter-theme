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

    register_taxonomy( 'degree_area', array('degrees', 'career-outcome', 'program-resource'), $args );

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

	// Dates custom post type
	function add_semesters() {
	    // creating (registering) the custom type
	    register_post_type( 'semesters', /* (http://codex.wordpress.org/Function_Reference/register_post_type) */
	        // let's now add all the options for this post type
	        array( 'labels' => array(
	            'name' => __( 'Semesters'), /* This is the Title of the Group */
	            'singular_name' => __( 'Semester'), /* This is the individual type */
	            'all_items' => __( 'All Semesters'), /* the all items menu item */
	            'add_new' => __( 'Add Semester'), /* The add new menu item */
	            'add_new_item' => __( 'Add New Semester'), /* Add New Display Title */
	            'edit' => __( 'Edit'), /* Edit Dialog */
	            'edit_item' => __( 'Edit Semester'), /* Edit Display Title */
	            'new_item' => __( 'New Semester'), /* New Display Title */
	            'view_item' => __( 'View Semester'), /* View Display Title */
	            'search_items' => __( 'Search Semesters'), /* Search Custom Type Title */
	            'not_found' =>  __( 'Nothing found in the Database.'), /* This displays if there are no entries yet */
	            'not_found_in_trash' => __( 'Nothing found in Trash'), /* This displays if there is nothing in the trash */
	            'parent_item_colon' => ''
	            ), /* end of arrays */
	            'description' => __( 'Semesters'), /* Custom Type Description */
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
	            'rewrite' => array('slug' => 'semesters', 'with_front' => false ),
	            /* the next one is important, it tells what's enabled in the post editor */
	            'supports' => array( 'title', 'revisions')
	        ) /* end of options */
	    ); /* end of register post type */
	}
	add_action( 'init', 'add_semesters');

	/**************************************************
  FAQ POST TYPE
  **************************************************/

  function add_cpt_faq() {
      // creating (registering) the custom type
      register_post_type( 'faq', /* (http://codex.wordpress.org/Function_Reference/register_post_type) */
          // let's now add all the options for this post type
          array( 'labels' => array(
              'name' => __( 'FAQs'), /* This is the Title of the Group */
              'singular_name' => __( 'FAQ'), /* This is the individual type */
              'all_items' => __( 'All FAQs'), /* the all items menu item */
              'add_new' => __( 'Add New'), /* The add new menu item */
              'add_new_item' => __( 'Add New FAQ'), /* Add New Display Title */
              'edit' => __( 'Edit'), /* Edit Dialog */
              'edit_item' => __( 'Edit FAQ'), /* Edit Display Title */
              'new_item' => __( 'New FAQ'), /* New Display Title */
              'view_item' => __( 'View FAQ'), /* View Display Title */
              'search_items' => __( 'Search FAQs'), /* Search Custom Type Title */
              'not_found' =>  __( 'Nothing found in the Database.'), /* This displays if there are no entries yet */
              'not_found_in_trash' => __( 'Nothing found in Trash'), /* This displays if there is nothing in the trash */
              'parent_item_colon' => ''
              ), /* end of arrays */
              'description' => __( 'Frequently Asked Questions'), /* Custom Type Description */
              'public' => true,
              'publicly_queryable' => false,
              'exclude_from_search' => true,
              'show_ui' => true,
              // 'show_in_menu' => false,
              'show_in_admin_bar' => true,
              'query_var' => true,
              'menu_position' => 18, /* this is what order you want it to appear in on the left hand side menu */
              'menu_icon' => 'dashicons-editor-help', /* the icon for the custom post type menu */
              'has_archive' => false,
              'capability_type' => 'post',
              'hierarchical' => false,
              // 'rewrite' => array('slug' => 'faq', 'with_front' => false ),
              /* the next one is important, it tells what's enabled in the post editor */
              'supports' => array( 'title', 'editor', 'revisions')
          ) /* end of options */
      ); /* end of register post type */
  }
  add_action( 'init', 'add_cpt_faq' );

	// Add category to FAQ
  function taxonomies_faq_category() {
    $labels = array(
      'name'              => _x( 'FAQ Categories', 'taxonomy general name' ),
      'singular_name'     => _x( 'FAQ Category', 'taxonomy singular name' ),
      'search_items'      => __( 'Search FAQ Categories' ),
      'all_items'         => __( 'All FAQ Categories' ),
      'parent_item'       => __( 'Parent FAQ Category' ),
      'parent_item_colon' => __( 'Parent FAQ Category:' ),
      'edit_item'         => __( 'Edit FAQ Category' ),
      'update_item'       => __( 'Update FAQ Category' ),
      'add_new_item'      => __( 'Add New FAQ Category' ),
      'new_item_name'     => __( 'New FAQ Category' ),
      'menu_name'         => __( 'FAQ Categories' )
    );

    $args = array (
      'labels' => $labels,
      'hierarchical' => false,
			'meta_box_cb' => false,
      'rewrite' => array('slug' => 'faq/category/', 'with_front' => false )
    );

    register_taxonomy( 'faq_category', 'faq', $args );

  }
  add_action( 'init', 'taxonomies_faq_category', 0 );

	/**************************************************
	RESOURCES POST TYPES
	**************************************************/
	function add_cpt_career_outcomes() {
	  // creating (registering) the custom type
	  register_post_type( 'career-outcome', /* (http://codex.wordpress.org/Function_Reference/register_post_type) */
	    // let's now add all the options for this post type
	    array( 'labels' => array(
	      'name' => __( 'Career Outcomes', 'ndmu' ), /* This is the Title of the Group */
	      'singular_name' => __( 'Career Outcome', 'ndmu' ),
				'all_items' => __( 'All Career Outcomes', 'ndmu' ), /* the all items menu item */
	      'add_new' => __( 'Add New', 'ndmu' ), /* The add new menu item */
	      'add_new_item' => __( 'Add New Career Outcome', 'ndmu' ), /* Add New Display Title */
	      'edit' => __( 'Edit', 'ndmu' ), /* Edit Dialog */
	      'edit_item' => __( 'Edit Career Outcome', 'ndmu' ), /* Edit Display Title */
	      'new_item' => __( 'New Career Outcome', 'ndmu' ), /* New Display Title */
	      'view_item' => __( 'View Career Outcome', 'ndmu' ), /* View Display Title */
	      'search_items' => __( 'Search Career Outcomes', 'ndmu' ), /* Search Custom Type Title */
	      'not_found' =>  __( 'Nothing found in the Database.', 'ndmu' ), /* This displays if there are no entries yet */
	      'not_found_in_trash' => __( 'Nothing found in Trash', 'ndmu' ), /* This displays if there is nothing in the trash */
	      'parent_item_colon' => '' /* This is the individual type */
	      ), /* end of arrays */
	      'description' => __( 'Career Outcomes', 'ndmu' ), /* Custom Type Description */
	      'public' => true,
	      'publicly_queryable' => true,
	      'exclude_from_search' => false,
	      'show_ui' => true,
	      'show_in_rest'       => true,
	  		'rest_base'          => 'career-outcomes',
	  		'rest_controller_class' => 'WP_REST_Posts_Controller',
	      'query_var' => true,
	      'menu_position' => 20, /* this is what order you want it to appear in on the left hand side menu */
				'show_in_menu' => 'resources',
	      'menu_icon' => get_stylesheet_directory_uri() . '/library/images/custom-post-icon.png', /* the icon for the custom post type menu */
	      'has_archive' => true,
				'rewrite' => array('slug' => 'career-outcomes', 'with_front' => false ),
	      'capability_type' => 'post',
	      'hierarchical' => false,
	      // 'rewrite' => array('slug' => 'online-degrees', 'with_front' => false ),
	      /* the next one is important, it tells what's enabled in the post editor */
	      'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'revisions')
	    ) /* end of options */
	  ); /* end of register post type */
	}
	// adding the function to the Wordpress init
	add_action( 'init', 'add_cpt_career_outcomes');


	function add_cpt_program_resources() {
	  // creating (registering) the custom type
	  register_post_type( 'program-resource', /* (http://codex.wordpress.org/Function_Reference/register_post_type) */
	    // let's now add all the options for this post type
	    array( 'labels' => array(
	      'name' => __( 'Program Resources', 'ndmu' ), /* This is the Title of the Group */
	      'singular_name' => __( 'Program Resource', 'ndmu' ),
				'all_items' => __( 'All Program Resources', 'ndmu' ), /* the all items menu item */
	      'add_new' => __( 'Add New', 'ndmu' ), /* The add new menu item */
	      'add_new_item' => __( 'Add New Program Resource', 'ndmu' ), /* Add New Display Title */
	      'edit' => __( 'Edit', 'ndmu' ), /* Edit Dialog */
	      'edit_item' => __( 'Edit Program Resource', 'ndmu' ), /* Edit Display Title */
	      'new_item' => __( 'New Program Resource', 'ndmu' ), /* New Display Title */
	      'view_item' => __( 'View Program Resource', 'ndmu' ), /* View Display Title */
	      'search_items' => __( 'Search Program Resources', 'ndmu' ), /* Search Custom Type Title */
	      'not_found' =>  __( 'Nothing found in the Database.', 'ndmu' ), /* This displays if there are no entries yet */
	      'not_found_in_trash' => __( 'Nothing found in Trash', 'ndmu' ), /* This displays if there is nothing in the trash */
	      'parent_item_colon' => '' /* This is the individual type */
	      ), /* end of arrays */
	      'description' => __( 'Program Resources', 'ndmu' ), /* Custom Type Description */
	      'public' => true,
	      'publicly_queryable' => true,
	      'exclude_from_search' => false,
	      'show_ui' => true,
	      'show_in_rest'       => true,
	  		'rest_base'          => 'program-resources',
	  		'rest_controller_class' => 'WP_REST_Posts_Controller',
	      'query_var' => true,
	      'menu_position' => 21, /* this is what order you want it to appear in on the left hand side menu */
				'show_in_menu' => 'resources',
	      'menu_icon' => get_stylesheet_directory_uri() . '/library/images/custom-post-icon.png', /* the icon for the custom post type menu */
	      'has_archive' => true,
				'rewrite' => array('slug' => 'program-resources', 'with_front' => false ),
	      'capability_type' => 'post',
	      'hierarchical' => false,
	      // 'rewrite' => array('slug' => 'online-degrees', 'with_front' => false ),
	      /* the next one is important, it tells what's enabled in the post editor */
	      'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'revisions')
	    ) /* end of options */
	  ); /* end of register post type */
	}
	// adding the function to the Wordpress init
	add_action( 'init', 'add_cpt_program_resources');


	function add_cpt_guides() {
	  // creating (registering) the custom type
	  register_post_type( 'guide', /* (http://codex.wordpress.org/Function_Reference/register_post_type) */
	    // let's now add all the options for this post type
	    array( 'labels' => array(
	      'name' => __( 'Guides', 'ndmu' ), /* This is the Title of the Group */
	      'singular_name' => __( 'Guide', 'ndmu' ),
				'all_items' => __( 'All Guides', 'ndmu' ), /* the all items menu item */
	      'add_new' => __( 'Add New', 'ndmu' ), /* The add new menu item */
	      'add_new_item' => __( 'Add New Guide', 'ndmu' ), /* Add New Display Title */
	      'edit' => __( 'Edit', 'ndmu' ), /* Edit Dialog */
	      'edit_item' => __( 'Edit Guide', 'ndmu' ), /* Edit Display Title */
	      'new_item' => __( 'New Guide', 'ndmu' ), /* New Display Title */
	      'view_item' => __( 'View Guide', 'ndmu' ), /* View Display Title */
	      'search_items' => __( 'Search Guides', 'ndmu' ), /* Search Custom Type Title */
	      'not_found' =>  __( 'Nothing found in the Database.', 'ndmu' ), /* This displays if there are no entries yet */
	      'not_found_in_trash' => __( 'Nothing found in Trash', 'ndmu' ), /* This displays if there is nothing in the trash */
	      'parent_item_colon' => '' /* This is the individual type */
	      ), /* end of arrays */
	      'description' => __( 'Guides', 'ndmu' ), /* Custom Type Description */
	      'public' => true,
	      'publicly_queryable' => true,
	      'exclude_from_search' => false,
	      'show_ui' => true,
	      'show_in_rest'       => true,
	  		'rest_base'          => 'guides',
	  		'rest_controller_class' => 'WP_REST_Posts_Controller',
	      'query_var' => true,
	      'menu_position' => 22, /* this is what order you want it to appear in on the left hand side menu */
				'show_in_menu' => 'resources',
	      'menu_icon' => get_stylesheet_directory_uri() . '/library/images/custom-post-icon.png', /* the icon for the custom post type menu */
	      'has_archive' => true,
				'rewrite' => array('slug' => 'guides', 'with_front' => false ),
	      'capability_type' => 'post',
	      'hierarchical' => false,
	      // 'rewrite' => array('slug' => 'online-degrees', 'with_front' => false ),
	      /* the next one is important, it tells what's enabled in the post editor */
	      'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'revisions')
	    ) /* end of options */
	  ); /* end of register post type */
	}
	// adding the function to the Wordpress init
	add_action( 'init', 'add_cpt_guides');


	function add_cpt_infographics() {
	  // creating (registering) the custom type
	  register_post_type( 'infographic', /* (http://codex.wordpress.org/Function_Reference/register_post_type) */
	    // let's now add all the options for this post type
	    array( 'labels' => array(
	      'name' => __( 'Infographics', 'ndmu' ), /* This is the Title of the Group */
	      'singular_name' => __( 'Infographic', 'ndmu' ),
				'all_items' => __( 'All Infographics', 'ndmu' ), /* the all items menu item */
	      'add_new' => __( 'Add New', 'ndmu' ), /* The add new menu item */
	      'add_new_item' => __( 'Add New Infographic', 'ndmu' ), /* Add New Display Title */
	      'edit' => __( 'Edit', 'ndmu' ), /* Edit Dialog */
	      'edit_item' => __( 'Edit Infographic', 'ndmu' ), /* Edit Display Title */
	      'new_item' => __( 'New Infographic', 'ndmu' ), /* New Display Title */
	      'view_item' => __( 'View Infographic', 'ndmu' ), /* View Display Title */
	      'search_items' => __( 'Search Infographics', 'ndmu' ), /* Search Custom Type Title */
	      'not_found' =>  __( 'Nothing found in the Database.', 'ndmu' ), /* This displays if there are no entries yet */
	      'not_found_in_trash' => __( 'Nothing found in Trash', 'ndmu' ), /* This displays if there is nothing in the trash */
	      'parent_item_colon' => '' /* This is the individual type */
	      ), /* end of arrays */
	      'description' => __( 'Infographics', 'ndmu' ), /* Custom Type Description */
	      'public' => true,
	      'publicly_queryable' => true,
	      'exclude_from_search' => false,
	      'show_ui' => true,
	      'show_in_rest'       => true,
	  		'rest_base'          => 'infographics',
	  		'rest_controller_class' => 'WP_REST_Posts_Controller',
	      'query_var' => true,
	      'menu_position' => 22, /* this is what order you want it to appear in on the left hand side menu */
				'show_in_menu' => 'resources',
	      'menu_icon' => get_stylesheet_directory_uri() . '/library/images/custom-post-icon.png', /* the icon for the custom post type menu */
	      'has_archive' => true,
				'rewrite' => array('slug' => 'infographics', 'with_front' => false ),
	      'capability_type' => 'post',
	      'hierarchical' => false,
	      // 'rewrite' => array('slug' => 'online-degrees', 'with_front' => false ),
	      /* the next one is important, it tells what's enabled in the post editor */
	      'supports' => array( 'title', 'editor', 'author', 'revisions')
	    ) /* end of options */
	  ); /* end of register post type */
	}
	// adding the function to the Wordpress init
	add_action( 'init', 'add_cpt_infographics');

?>
