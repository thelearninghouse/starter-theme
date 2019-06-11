<?php

function tlh_get_phone_link( $class = false, $custom_label = false, $field = 'school_phone', $options = true ) {
	if ( $options ) {
		$phone = get_field( $field, 'options' );
	} else {
		$phone = get_field( $field );
	}
	$phone_link = str_replace( [ '-', '(', ')', ' ', '.' ], '', $phone );
	$link_str   = '<a';
	if ( $class ) {
		$link_str .= ' class="' . $class . '"';
	}
	$link_str .= ' href="tel:' . $phone_link . '">';
	if ( $custom_label ) {
		$link_str .= $custom_label;
	} else {
		$link_str .= $phone;
	}
	$link_str .= '</a>';

	return $link_str;
}

function tlh_phone_link( $class = false, $custom_label = false, $field = 'school_phone', $options = true ) {
	echo tlh_get_phone_link( $class, $custom_label, $field, $options );
}
