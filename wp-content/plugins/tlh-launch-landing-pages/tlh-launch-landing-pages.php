<?php

/*
Plugin Name: TLH Launch Landing Pages
Plugin URI: http://my-awesomeness-emporium.com
Description: Quickly customizable landing pages
Version: 1.0
Author: Kurt Rank - The Learning House
Author URI: http://mrtotallyawesome.com
License: GPL2
*/

// Register page templates in the plugin directory via https://www.wpexplorer.com/wordpress-page-templates-plugin/
class PageTemplater {

	/**
	 * A reference to an instance of this class.
	 */
	private static $instance;

	/**
	 * The array of templates that this plugin tracks.
	 */
	protected $templates;

	/**
	 * Returns an instance of this class.
	 */
	public static function get_instance() {

		if ( null == self::$instance ) {
			self::$instance = new PageTemplater();
		}

		return self::$instance;

	}

	/**
	 * Initializes the plugin by setting filters and administration functions.
	 */
	private function __construct() {

		$this->templates = array();


		// Add a filter to the attributes metabox to inject template into the cache.
		if ( version_compare( floatval( get_bloginfo( 'version' ) ), '4.7', '<' ) ) {

			// 4.6 and older
			add_filter(
				'page_attributes_dropdown_pages_args',
				array( $this, 'register_project_templates' )
			);

		} else {

			// Add a filter to the wp 4.7 version attributes metabox
			add_filter(
				'theme_page_templates', array( $this, 'add_new_template' )
			);

		}

		// Add a filter to the save post to inject out template into the page cache
		add_filter(
			'wp_insert_post_data',
			array( $this, 'register_project_templates' )
		);


		// Add a filter to the template include to determine if the page has our
		// template assigned and return it's path
		add_filter(
			'template_include',
			array( $this, 'view_project_template')
		);


		// Add your templates to this array.
		$this->templates = array(
			'page-basic-template.php' => 'Launch Page',
		);

	}

	/**
	 * Adds our template to the page dropdown for v4.7+
	 *
	 */
	public function add_new_template( $posts_templates ) {
		$posts_templates = array_merge( $posts_templates, $this->templates );
		return $posts_templates;
	}

	/**
	 * Adds our template to the pages cache in order to trick WordPress
	 * into thinking the template file exists where it doesn't really exist.
	 */
	public function register_project_templates( $atts ) {

		// Create the key used for the themes cache
		$cache_key = 'page_templates-' . md5( get_theme_root() . '/' . get_stylesheet() );

		// Retrieve the cache list.
		// If it doesn't exist, or it's empty prepare an array
		$templates = wp_get_theme()->get_page_templates();
		if ( empty( $templates ) ) {
			$templates = array();
		}

		// New cache, therefore remove the old one
		wp_cache_delete( $cache_key , 'themes');

		// Now add our template to the list of templates by merging our templates
		// with the existing templates array from the cache.
		$templates = array_merge( $templates, $this->templates );

		// Add the modified cache to allow WordPress to pick it up for listing
		// available templates
		wp_cache_add( $cache_key, $templates, 'themes', 1800 );

		return $atts;

	}

	/**
	 * Checks if the template is assigned to the page
	 */
	public function view_project_template( $template ) {

		// Get global post
		global $post;

		// Return template if post is empty
		if ( ! $post ) {
			return $template;
		}

		// Return default template if we don't have a custom one defined
		if ( ! isset( $this->templates[get_post_meta(
			$post->ID, '_wp_page_template', true
		)] ) ) {
			return $template;
		}

		$file = plugin_dir_path( __FILE__ ). get_post_meta(
			$post->ID, '_wp_page_template', true
		);

		// Just to be safe, we check if the file exist first
		if ( file_exists( $file ) ) {
			return $file;
		} else {
			echo $file;
		}

		// Return template
		return $template;

	}

}
add_action( 'plugins_loaded', array( 'PageTemplater', 'get_instance' ) );

// Register post type
function tlh_add_launch_lp() {
  // creating (registering) the custom type
  register_post_type( 'launch-lp', /* (http://codex.wordpress.org/Function_Reference/register_post_type) */
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

if ( !post_type_exists( 'launch-lp' ) ) {
	 add_action( 'init', 'tlh_add_launch_lp');
}

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

// Set up custom fields
require_once( 'lp_fields.php' );

// Load default template if one does not exist in active theme
function tlh_load_launch_lp_template($template) {
    global $post;

    if ( $post->post_type == 'launch-lp' && $template !== locate_template( array( 'single-launch-lp.php' ) ) ) {
        /* This is a launch-lp post
         * AND a 'single launch-lp template' is not found on
         * theme or child theme directories, so load it
         * from our plugin directory
         */
        return plugin_dir_path( __FILE__ ) . 'single-launch-lp.php';
    }

    return $template;
}
add_filter('single_template', 'tlh_load_launch_lp_template');

?>
