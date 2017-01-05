<?php
// Flush rewrite rules for custom post types
add_action( 'after_switch_theme', 'bones_flush_rewrite_rules' );
// Flush your rewrite rules
function bones_flush_rewrite_rules() {
    flush_rewrite_rules();
}

// let's create the function for the custom type
function add_degrees() {
    // creating (registering) the custom type
    register_post_type( 'degrees', /* (http://codex.wordpress.org/Function_Reference/register_post_type) */
        // let's now add all the options for this post type
        array( 'labels' => array(
            'name' => __( 'Online Programs', 'ndmu' ), /* This is the Title of the Group */
            'singular_name' => __( 'Program', 'ndmu' ), /* This is the individual type */
            'all_items' => __( 'All Programs', 'ndmu' ), /* the all items menu item */
            'add_new' => __( 'Add New', 'ndmu' ), /* The add new menu item */
            'add_new_item' => __( 'Add New Program', 'ndmu' ), /* Add New Display Title */
            'edit' => __( 'Edit', 'ndmu' ), /* Edit Dialog */
            'edit_item' => __( 'Edit Program', 'ndmu' ), /* Edit Display Title */
            'new_item' => __( 'New Program', 'ndmu' ), /* New Display Title */
            'view_item' => __( 'View Program', 'ndmu' ), /* View Display Title */
            'search_items' => __( 'Search Programs', 'ndmu' ), /* Search Custom Type Title */
            'not_found' =>  __( 'Nothing found in the Database.', 'ndmu' ), /* This displays if there are no entries yet */
            'not_found_in_trash' => __( 'Nothing found in Trash', 'ndmu' ), /* This displays if there is nothing in the trash */
            'parent_item_colon' => ''
            ), /* end of arrays */
            'description' => __( 'Online Programs', 'ndmu' ), /* Custom Type Description */
            'public' => true,
            'publicly_queryable' => true,
            'exclude_from_search' => false,
            'show_ui' => true,
            'query_var' => true,
            'menu_position' => 12, /* this is what order you want it to appear in on the left hand side menu */
            'menu_icon' => get_stylesheet_directory_uri() . '/library/images/custom-post-icon.png', /* the icon for the custom post type menu */
            'has_archive' => true,
            'capability_type' => 'post',
            'hierarchical' => false,
            'rewrite' => array('slug' => 'online-programs', 'with_front' => false ),
            /* the next one is important, it tells what's enabled in the post editor */
            'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'revisions')
        ) /* end of options */
    ); /* end of register post type */
}

    // adding the function to the Wordpress init
    add_action( 'init', 'add_degrees');


    function taxonomies_degree_verticals() {
      $labels = array(
        'name'              => _x( 'Degree Verticals', 'taxonomy general name' ),
        'singular_name'     => _x( 'Degree Vertical', 'taxonomy singular name' ),
        'search_items'      => __( 'Search Degree Verticals' ),
        'all_items'         => __( 'All Degree Verticals' ),
        'parent_item'       => __( 'Parent Degree Vertical' ),
        'parent_item_colon' => __( 'Parent Degree Vertical:' ),
        'edit_item'         => __( 'Edit Degree Vertical' ),
        'update_item'       => __( 'Update Degree Vertical' ),
        'add_new_item'      => __( 'Add New Degree Vertical' ),
        'new_item_name'     => __( 'New Degree Vertical' ),
        'menu_name'         => __( 'Degree Verticals' )
      );

      $args = array (
        'labels' => $labels,
        'hierarchical' => true,
        'rewrite' => array('slug' => 'online-programs/degrees', 'with_front' => false )
      );

      register_taxonomy( 'degree_vertical', 'degrees', $args );

    }

    add_action( 'init', 'taxonomies_degree_verticals', 0 );

    function taxonomies_degree_levels() {
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

    add_action( 'init', 'taxonomies_degree_levels', 0 );

    // let's create the function for the custom type
    function add_landing_pages() {
        // creating (registering) the custom type
        register_post_type( 'landing-pages', /* (http://codex.wordpress.org/Function_Reference/register_post_type) */
            // let's now add all the options for this post type
            array( 'labels' => array(
                'name' => __( 'Landing Pages', 'ndmu' ), /* This is the Title of the Group */
                'singular_name' => __( 'Landing Page', 'ndmu' ), /* This is the individual type */
                'all_items' => __( 'All Landing Pages', 'ndmu' ), /* the all items menu item */
                'add_new' => __( 'Add New', 'ndmu' ), /* The add new menu item */
                'add_new_item' => __( 'Add New Landing Page', 'ndmu' ), /* Add New Display Title */
                'edit' => __( 'Edit', 'ndmu' ), /* Edit Dialog */
                'edit_item' => __( 'Edit Landing Page', 'ndmu' ), /* Edit Display Title */
                'new_item' => __( 'New Landing Page', 'ndmu' ), /* New Display Title */
                'view_item' => __( 'View Landing Page', 'ndmu' ), /* View Display Title */
                'search_items' => __( 'Search Landing Pages', 'ndmu' ), /* Search Custom Type Title */
                'not_found' =>  __( 'Nothing found in the Database.', 'ndmu' ), /* This displays if there are no entries yet */
                'not_found_in_trash' => __( 'Nothing found in Trash', 'ndmu' ), /* This displays if there is nothing in the trash */
                'parent_item_colon' => ''
                ), /* end of arrays */
                'description' => __( 'Landing Pages', 'ndmu' ), /* Custom Type Description */
                'public' => true,
                'publicly_queryable' => true,
                'exclude_from_search' => false,
                'show_ui' => true,
                'query_var' => true,
                'menu_position' => 15, /* this is what order you want it to appear in on the left hand side menu */
                'menu_icon' => get_stylesheet_directory_uri() . '/library/images/custom-post-icon.png', /* the icon for the custom post type menu */
                'has_archive' => false, /* you can rename the slug here */
                'capability_type' => 'post',
                'hierarchical' => false,
                'rewrite' => array('slug' => 'my', 'with_front' => false ),
                /* the next one is important, it tells what's enabled in the post editor */
                'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'revisions')
            ) /* end of options */
        ); /* end of register post type */
    }

        // adding the function to the Wordpress init
        add_action( 'init', 'add_landing_pages');
?>
