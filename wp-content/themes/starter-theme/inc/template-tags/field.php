<?php

function tlh_get_field( $field_name, $default_value = false ) {
	// $field_data = get_field_object( $field_name );
	$field_post_value    = get_field( $field_name );
	$field_default_value = false != $default_value ? $default_value : get_field( $field_name, 'options' );

	if ( current_user_can( 'editor' ) || current_user_can( 'administrator' ) ) {
		$missing_default = '<span title="Either set a default in the Admin or pass a default to the function" class="u-missingValue">Missing default! [<code>' . $field_name . '</code>]</span>';
	} else {
		$missing_default = false;
	}

	return $field_post_value ? $field_post_value : ( $field_default_value ? $field_default_value : $missing_default );
}

function tlh_field( $field_name, $default_value = false ) {
	echo tlh_get_field( $field_name, $default_value );
}
