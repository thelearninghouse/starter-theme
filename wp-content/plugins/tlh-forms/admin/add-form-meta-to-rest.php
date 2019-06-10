<?php
  require_once plugin_dir_path( __FILE__ ) . '../helpers.php';

function update_form_meta_for_api( $value, $post, $field_name) {
  $value = sanitize_text_field( $value );
  $ret = update_post_meta( $post->ID, 'show_form', wp_slash( $value ) );
}

function get_form_meta_for_api( $object, $field_name, $request ) {
  return get_post_meta( $object[ 'id' ], $field_name, true );
}

function setup_meta_fields() {
  global $tlh_forms_meta_array;
	global $wp_post_types;

	$customPostTypesNamesArray = array();
	$customPostTypesArgs = array(
		'public'   => true,
		'_builtin' => true
	);
	$customPostTypes = get_post_types();
	// $customPostTypes = get_post_types($customPostTypesArgs);
	foreach($customPostTypes as $postType) {
	 $customPostTypesNamesArray[] = $postType;
  }
  
  foreach ($tlh_forms_meta_array as $field) {
    setup_field($field, $customPostTypesNamesArray);
  }
}

function setup_field($field, $customPostTypesNamesArray) {
  register_rest_field(
    $customPostTypesNamesArray,
    $field,
    array(
      'schema' => null,
      'get_callback' => function ( $data, $field ) {
        return get_post_meta( $data['id'], $field, 'true' );
      },
      'update_callback' => function ( $value, $data, $field ) {
        return update_post_meta( $data->ID, $field, $value );
      }
    )
  );
}

add_action( 'rest_api_init', 'setup_meta_fields');
