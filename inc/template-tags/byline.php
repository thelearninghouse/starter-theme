<?php

function tlh_get_byline() {
	$output = '<span class="byline"><span class="entry-date">Posted ' . get_the_date() . '</span>';

	$categories = get_the_category();
	$separator  = ', ';
	if ( ! empty( $categories ) ) {
		$output .= ' | <span class="entry-categories">';
		foreach ( $categories as $category ) {
			$output .= '<a href="' . esc_url( get_category_link( $category->term_id ) ) . '" title="' . esc_attr( sprintf( __( 'View all posts in %s', 'textdomain' ), $category->name ) ) . '">' . esc_html( $category->name ) . '</a>' . $separator;
		}
		$output  = trim( $output, $separator );
		$output .= '</span>';
	}

	$output .= '</span>';

	return $output;
}

function tlh_byline() {
	echo tlh_get_byline();
}
