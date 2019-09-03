<?php

function is_post_type( $type ) {
	global $wp_query;
	if ( get_post_type( $wp_query->post->ID ) === $type ) {
		return true;
	}
	return false;
}

// returns array of slugs pulled from folders or files
function tlh_get_filelist( $subdirectory, $json = false ) {
	$post_types = scandir( get_theme_file_path( '/' . $subdirectory ) );

	$filelist = array_filter(
		$post_types,
		function( $var ) {
			return ( '.' !== $var && '..' !== $var );
		}
	);

	if ( $json ) {
		return array_map(
			function( $filename ) {
				return str_replace( '.json', '', $filename );
			},
			$filelist
		);
	} else {
		return $filelist;
	}
}
