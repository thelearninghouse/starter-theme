<?php

function tlh_get_next_start_date( $date_format = 'F j' ) {
	$next_date = false;

	$next_semester = new WP_Query(
		array(
			'post_type'      => 'semesters',
			'posts_per_page' => 1,
			'meta_key'       => 'semester_start_date',
			'meta_value'     => date( 'Ymd' ), // Get today's date in the format that ACF saves dates in
			'meta_compare'   => '>=',
			'orderby'        => 'meta_value_num',
			'order'          => 'ASC',
		)
	); // Get next earliest start date

	if ( $next_semester->have_posts() ) {
		$next_semester->the_post();
		$next_date = date( $date_format, strtotime( get_field( 'semester_start_date' ) ) );
	}
	wp_reset_postdata();

	return $next_date;
}

function tlh_next_start_date( $date_format = 'F j' ) {
	echo tlh_get_next_start_date( $date_format );
}
