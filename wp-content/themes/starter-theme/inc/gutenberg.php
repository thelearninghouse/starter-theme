<?php

function tlh_allowed_block_types( $allowed_block_types, $post ) {
  // if ( $post->post_type !== 'post' ) {
	//   return $allowed_block_types;
  // }
  return array(
		'core/paragraph',
		'core/image',
		'core/heading',
		'core/list',
		'core/quote',
		'core/cover-image',
		'core/table',
		'core/code',
		'core/freeform',
		'core/pullquote',
		'core/nextpage',
		'core/separator',
		'core/shortcode',
		'acf/faq',
		'acf/cta',
	);
}

add_filter( 'allowed_block_types', 'tlh_allowed_block_types', 10, 2 );

?>
