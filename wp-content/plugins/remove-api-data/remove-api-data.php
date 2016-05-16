<?php
/*
Plugin Name: Remove API Data
*/

function remove_api_data( $data, $post, $context ) {
  // We only want to modify the 'view' context, for reading posts
  if ( $context !== 'view' || is_wp_error( $data ) ) {
    return $data;
  }

  // Here, we unset any data we don't want to see on the front end:
  unset( $data->data ['author'] );
  unset( $data->data ['status'] );
  // continue unsetting whatever other fields you want

  return $data;
}

add_filter( 'rest_prepare_post', 'remove_api_data', 12, 3 );

?>
