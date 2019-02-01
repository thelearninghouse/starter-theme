<?php

// // Create dynamic select for icons
// function tlh_load_icon_field_choices( $field ) {
//
//   // reset choices
//   $field['choices'] = array();
//
// 	$icon_dir = get_stylesheet_directory() . '/public/images/icons/detail/';
// 	$icon_files = scandir($icon_dir);
// 	foreach ($icon_files as $icon_file) {
// 		// append to choices
// 
// 		$icon_name = str_replace('.svg', '', $icon_file);
//
// 		if ( substr( $icon_name, 0, 1 ) !== '.' ) {
// 	  	$field['choices'][ $icon_name ] = $icon_name;
// 		}
// 	}
//
//   // return the field
//   return $field;
//
// }
// add_filter('acf/load_field/name=icon', 'tlh_load_icon_field_choices');
