<?php

function tlh_responsive_bg_style( $selector, $field_name = NULL, $sub_field = false, $blog = false ) {
  // If no image can be found, no <style> will be echoed
  $has_image = false;

  if ( $field_name !== NULL ) {

    if ( $blog ) {
      // On the blog, we need to explicitly pass the page id used to display posts, since $posts has all the blog posts
      if ( $sub_field ) {
        $image = get_sub_field( $field_name, get_option('page_for_posts') );
      }
      else {
        $image = get_field( $field_name, get_option('page_for_posts') );
      }
    } else {
      if ( $sub_field ) {
        $image = get_sub_field( $field_name );
      }
      else {
        $image = get_field( $field_name );
      }
    }

    if ( !empty($image) ) {
      // We'll accept an array or ID integer. If ACF is set to return just a url, we can't get multiple sizes.
      if ( is_array($image) ) {
        $image_medium = $image['sizes']['medium_large'];
        $image_large = $image['sizes']['large'];
        $image_full = $image['url'];
        $has_image = true;
      }
      else if ( is_int($image) ) {
        $image_medium = wp_get_attachment_image_url( $image, 'medium_large' );
        $image_large = wp_get_attachment_image_url( $image, 'large' );
        $image_full = wp_get_attachment_image_url( $image, 'full' );
        $has_image = true;
      }
    }
  }
  else if ( has_post_thumbnail() ) {
    // Use the featured image if no field is specified
    $image_medium = get_the_post_thumbnail_url(get_the_ID(), 'medium_large');
    $image_large = get_the_post_thumbnail_url(get_the_ID(), 'large');
    $image_full = get_the_post_thumbnail_url(get_the_ID(), 'full');
    $has_image = true;
  }

  if ( $has_image ) {
    echo "<style>
      @media screen and (max-width: 800px) {
        .${selector} {
      	  background-image: url('${image_medium}');
        }
      }
      @media screen and (min-width: 801px) and (max-width: 1200px) {
        .${selector} {
      	  background-image: url('${image_large}');
        }
      }
      @media screen and (min-width: 1200px) {
        .${selector} {
      	  background-image: url('${image_full}');
        }
      }
    </style>";
  }
}

function tlh_get_byline() {
  $output = '<span class="byline"><span class="entry-date">Posted ' . get_the_date() . '</span>';

  $categories = get_the_category();
  $separator = ', ';
  if ( ! empty( $categories ) ) {
    $output .= ' | <span class="entry-categories">';
    foreach( $categories as $category ) {
        $output .= '<a href="' . esc_url( get_category_link( $category->term_id ) ) . '" title="' . esc_attr( sprintf( __( 'View all posts in %s', 'textdomain' ), $category->name ) ) . '">' . esc_html( $category->name ) . '</a>' . $separator;
    }
    $output = trim( $output, $separator );
		$output .= '</span>';
  }

	$output .= '</span>';

  return $output;
}

function tlh_byline() {
  echo tlh_get_byline();
}

function tlh_get_next_start_date( $date_format = 'F j' ) {
  $next_date = false;

  $next_semester = new WP_Query( array(
		'post_type' => 'semesters',
		'posts_per_page' => 1,
		'meta_key' => 'semester_start_date',
		'meta_value' => date('Ymd'), // Get today's date in the format that ACF saves dates in
		'meta_compare' => '>=',
		'orderby' => 'meta_value_num',
		'order'   => 'ASC'
  ) ); // Get next earliest start date

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

function tlh_get_phone_link( $class = false, $custom_label = false, $field = 'school_phone', $options = true ) {
	if ( $options ) {
		$phone = get_field( $field, 'options' );
	} else {
		$phone = get_field( $field );
	}
	$phone_link = str_replace( ['-', '(', ')', ' ', '.'], '', $phone );
	$link_str = '<a';
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

function tlh_get_field( $field_name, $default_value = false ) {
	// $field_data = get_field_object( $field_name );
	$field_post_value = get_field( $field_name );
	$field_default_value = false != $default_value ? $default_value : get_field( $field_name, 'options' );

	if ( current_user_can('editor') || current_user_can('administrator') ) {
		$missing_default = '<span title="Either set a default in the Admin or pass a default to the function" class="u-missingValue">Missing default! [<code>' . $field_name . '</code>]</span>';
	} else {
		$missing_default = false;
	}

	return $field_post_value ? $field_post_value : ( $field_default_value ? $field_default_value : $missing_default );
}

function tlh_field( $field_name, $default_value = false ) {
	echo tlh_get_field( $field_name, $default_value );
}

?>
