<?php

function tlh_get_phone_link( $number, $class = false, $label = false ) {
	$phone_link = str_replace( [ '-', '(', ')', ' ', '.' ], '', $number );
	$link_str   = '<a';
	if ( $class ) {
		$link_str .= ' class="' . $class . '"';
	}
	$link_str .= ' href="tel:' . $phone_link . '">';
	if ( $label ) {
		$link_str .= $label;
	} else {
		$link_str .= $number;
	}
	$link_str .= '</a>';

	return $link_str;
}

function tlh_phone_link( $number, $class = false, $label = false ) {
	echo tlh_get_phone_link( $number, $class, $label );
}
