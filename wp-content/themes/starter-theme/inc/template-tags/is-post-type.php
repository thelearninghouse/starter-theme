<?php

function is_post_type( $type ) {
	global $wp_query;
	if ( get_post_type( $wp_query->post->ID ) == $type ) {
		return true;
	}
	return false;
}
