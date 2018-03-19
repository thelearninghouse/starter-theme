<?php

  // Head Cleanup
  function tlh_head_cleanup() {
  	// category feeds
  	remove_action( 'wp_head', 'feed_links_extra', 3 );
  	// post and comment feeds
  	remove_action( 'wp_head', 'feed_links', 2 );
  	// EditURI link
  	remove_action( 'wp_head', 'rsd_link' );
  	// windows live writer
  	remove_action( 'wp_head', 'wlwmanifest_link' );
  	// previous link
  	remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 );
  	// start link
  	remove_action( 'wp_head', 'start_post_rel_link', 10, 0 );
  	// links for adjacent posts
  	remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );
  	// WP version
  	remove_action( 'wp_head', 'wp_generator' );
  	// remove WP version from css
  	add_filter( 'style_loader_src', 'tlh_remove_wp_ver_css_js', 9999 );
  	// remove Wp version from scripts
  	add_filter( 'script_loader_src', 'tlh_remove_wp_ver_css_js', 9999 );
    // remove wpemoji nonsense
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    remove_action( 'admin_print_styles', 'print_emoji_styles' );

  } /* end head cleanup */

  // remove WP version from RSS
  function tlh_rss_version() { return ''; }

  // remove WP version from scripts
  function tlh_remove_wp_ver_css_js( $src ) {
  	if ( strpos( $src, 'ver=' ) )
  		$src = remove_query_arg( 'ver', $src );
  	return $src;
  }

  // remove injected CSS for recent comments widget
  function tlh_remove_wp_widget_recent_comments_style() {
  	if ( has_filter( 'wp_head', 'wp_widget_recent_comments_style' ) ) {
  		remove_filter( 'wp_head', 'wp_widget_recent_comments_style' );
  	}
  }

  // remove injected CSS from recent comments widget
  function tlh_remove_recent_comments_style() {
  	global $wp_widget_factory;
  	if (isset($wp_widget_factory->widgets['WP_Widget_Recent_Comments'])) {
  		remove_action( 'wp_head', array($wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style') );
  	}
  }

  // remove injected CSS from gallery
  function tlh_gallery_style($css) {
  	return preg_replace( "!<style type='text/css'>(.*?)</style>!s", '', $css );
  }

  // remove the p from around imgs (http://css-tricks.com/snippets/wordpress/remove-paragraph-tags-from-around-images/)
  function tlh_filter_ptags_on_images($content){
  	return preg_replace('/<p>\s*(<a .*>)?\s*(<img .* \/>)\s*(<\/a>)?\s*<\/p>/iU', '\1\2\3', $content);
  }

  // This removes the annoying […] to a Read More link
  function tlh_excerpt_more($more) {
  	global $post;
  	// edit here if you like
  	return '...  <a class="excerpt-read-more" href="'. get_permalink( $post->ID ) . '" title="'. __( 'Read ' ) . esc_attr( get_the_title( $post->ID ) ).'">'. __( 'Read more &raquo;' ) .'</a>';
  }


?>
