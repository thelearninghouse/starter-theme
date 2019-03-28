<?php

// register field groups for blocks
function my_acf_json_load_point( $paths ) {

	$blocks = get_block_list();

	foreach ( $blocks as $block ) {
		// append path
		$paths[] = get_theme_file_path( "/blocks/{$block}/" );
	}

	// return
	return $paths;

}
add_filter( 'acf/settings/load_json', 'my_acf_json_load_point' );

// register blocks for use in gutenberg
function tlh_acf_init() {

	if ( function_exists( 'acf_register_block' ) ) {
		$blocks = get_block_list();

		foreach ( $blocks as $block ) {
			$block_settings                            = json_decode( file_get_contents( get_theme_file_path( "/blocks/{$block}/settings.json" ) ), true );
			$block_display_settings                    = $block_settings['display'];
			$block_display_settings['name']            = $block;
			$block_display_settings['render_callback'] = 'tlh_acf_block_render_callback';
			acf_register_block( $block_display_settings );
		}
	}
}
add_action( 'acf/init', 'tlh_acf_init' );

// render block templates
function tlh_acf_block_render_callback( $block, $content = '', $is_preview = false, $post_id = 0 ) {

	// convert name ("acf/testimonial") into path friendly slug ("testimonial")
	$slug = str_replace( 'acf/', '', $block['name'] );

	// include a template part from within the "template-parts/block" folder
	if ( file_exists( get_theme_file_path( "/blocks/{$slug}/functions.php" ) ) ) {
		include( get_theme_file_path( "/blocks/{$slug}/functions.php" ) );
	}
}

// enable access to current post that blocks are in
function tlh_acf_post_id() {
	if ( is_admin() && function_exists( 'acf_maybe_get_POST' ) ) :
		return intval( acf_maybe_get_POST( 'post_id' ) );
	else :
		global $post;
		return $post->ID;
	endif;
}

// Add editor styling for previews
function tlh_block_editor_assets() {
	wp_register_style( 'tlh_blocks_css', get_template_directory_uri() . '/public/css/blocks.css', false, '1.0.0' );
	wp_enqueue_style( 'tlh_blocks_css' );

}
add_action( 'enqueue_block_editor_assets', 'tlh_block_editor_assets' );
