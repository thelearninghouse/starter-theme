<?php
/* Bones Custom Post Type Example
This page walks you through creating
a custom post type and taxonomies. You
can edit this one or copy the following code
to create another one.

I put this in a separate file so as to
keep it organized. I find it easier to edit
and change things if they are concentrated
in their own file.

Developed by: Eddie Machado
URL: http://themble.com/bones/
*/

// Flush rewrite rules for custom post types
add_action( 'after_switch_theme', 'bones_flush_rewrite_rules' );

// Flush your rewrite rules
function bones_flush_rewrite_rules() {
	flush_rewrite_rules();
}

// let's create the function for the custom type
function add_programs() {
	// creating (registering) the custom type
	register_post_type( 'programs', /* (http://codex.wordpress.org/Function_Reference/register_post_type) */
		// let's now add all the options for this post type
		array( 'labels' => array(
			'name' => __( 'Programs', 'bonestheme' ), /* This is the Title of the Group */
			'singular_name' => __( 'Program', 'bonestheme' ), /* This is the individual type */
			'all_items' => __( 'All Programs', 'bonestheme' ), /* the all items menu item */
			'add_new' => __( 'Add New', 'bonestheme' ), /* The add new menu item */
			'add_new_item' => __( 'Add New Program', 'bonestheme' ), /* Add New Display Title */
			'edit' => __( 'Edit', 'bonestheme' ), /* Edit Dialog */
			'edit_item' => __( 'Edit Programs', 'bonestheme' ), /* Edit Display Title */
			'new_item' => __( 'New Programe', 'bonestheme' ), /* New Display Title */
			'view_item' => __( 'View Program', 'bonestheme' ), /* View Display Title */
			'search_items' => __( 'Search Programs', 'bonestheme' ), /* Search Custom Type Title */
			'not_found' =>  __( 'Nothing found in the Database.', 'bonestheme' ), /* This displays if there are no entries yet */
			'not_found_in_trash' => __( 'Nothing found in Trash', 'bonestheme' ), /* This displays if there is nothing in the trash */
			'parent_item_colon' => ''
			), /* end of arrays */
			'description' => __( 'Programs', 'bonestheme' ), /* Custom Type Description */
			'public' => true,
			'publicly_queryable' => true,
			'exclude_from_search' => false,
			'show_ui' => true,
			'query_var' => true,
			'menu_position' => 8, /* this is what order you want it to appear in on the left hand side menu */
			'menu_icon' => get_stylesheet_directory_uri() . '/library/images/custom-post-icon.png', /* the icon for the custom post type menu */
			'rewrite'	=> array( 'slug' => 'online-degrees', 'with_front' => true ), /* you can specify its url slug */
			'has_archive' => 'programs', /* you can rename the slug here */
			'capability_type' => 'post',
			'hierarchical' => false,
			/* the next one is important, it tells what's enabled in the post editor */
			'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'revisions')
		) /* end of options */
	); /* end of register post type */
}

	// adding the function to the Wordpress init
	add_action( 'init', 'add_programs');

		/*
	for more information on taxonomies, go here:
	http://codex.wordpress.org/Function_Reference/register_taxonomy
	*/

	// now let's add custom categories (these act like categories)
	register_taxonomy( 'program_level',
		array('programs'), /* if you change the name of register_post_type( 'custom_type', then you have to change this */
		array('hierarchical' => true,     /* if this is true, it acts like categories */
			'labels' => array(
				'name' => __( 'Program Level', 'bonestheme' ), /* name of the custom taxonomy */
				'singular_name' => __( 'Program Level', 'bonestheme' ), /* single taxonomy name */
				'search_items' =>  __( 'Search Program Levels', 'bonestheme' ), /* search title for taxomony */
				'all_items' => __( 'All Program Levels', 'bonestheme' ), /* all title for taxonomies */
				'parent_item' => __( 'Parent Program Level', 'bonestheme' ), /* parent title for taxonomy */
				'parent_item_colon' => __( 'Parent Program Level:', 'bonestheme' ), /* parent taxonomy title */
				'edit_item' => __( 'Edit Program Level', 'bonestheme' ), /* edit custom taxonomy title */
				'update_item' => __( 'Update Program Level', 'bonestheme' ), /* update title for taxonomy */
				'add_new_item' => __( 'Add New Program Level', 'bonestheme' ), /* add new title for taxonomy */
				'new_item_name' => __( 'New Program Level', 'bonestheme' ) /* name title for taxonomy */
			),
			'show_admin_column' => true,
			'show_ui' => true,
			'query_var' => true,
			'rewrite' => array(
                'slug' => 'online-degrees',
            ),
		)
	);


		// now let's add custom categories (these act like categories)
		register_taxonomy( 'area-of-study',
			array('programs'), /* if you change the name of register_post_type( 'custom_type', then you have to change this */
			array('hierarchical' => true,     /* if this is true, it acts like categories */
				'labels' => array(
					'name' => __( 'Area of Study', 'bonestheme' ), /* name of the custom taxonomy */
					'singular_name' => __( 'Program Level', 'bonestheme' ), /* single taxonomy name */
					'search_items' =>  __( 'Search Program Levels', 'bonestheme' ), /* search title for taxomony */
					'all_items' => __( 'All Program Levels', 'bonestheme' ), /* all title for taxonomies */
					'parent_item' => __( 'Parent Program Level', 'bonestheme' ), /* parent title for taxonomy */
					'parent_item_colon' => __( 'Parent Program Level:', 'bonestheme' ), /* parent taxonomy title */
					'edit_item' => __( 'Edit Program Level', 'bonestheme' ), /* edit custom taxonomy title */
					'update_item' => __( 'Update Program Level', 'bonestheme' ), /* update title for taxonomy */
					'add_new_item' => __( 'Add New Program Level', 'bonestheme' ), /* add new title for taxonomy */
					'new_item_name' => __( 'New Program Level', 'bonestheme' ) /* name title for taxonomy */
				),
				'show_admin_column' => true,
				'show_ui' => true,
				'query_var' => true,
				'rewrite' => array(
	          'slug' => 'online-degrees',
	      ),
			)
		);

?>
