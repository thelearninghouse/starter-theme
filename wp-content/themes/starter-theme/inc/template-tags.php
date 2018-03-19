<?php

function tlh_responsive_bg_style( $selector, $field_name = NULL, $sub_field = false ) {
  // If no image can be found, no <style> will be echoed
  $has_image = false;

  if ( $field_name !== NULL ) {

    if ( is_home() ) {
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

function tlh_get_next_date( $date_type = 'start-date' ) {
  $loop = new WP_Query( array(
    'post_type' => 'dates',
    'posts_per_page' => 1,
    'date_type' => $date_type,
    'meta_key' => 'date_date',
    'meta_value' => date('Ymd'), // Get today's date in the format that ACF saves dates in
    'meta_compare' => '>',
    'orderby' => 'meta_value_num',
    'order'   => 'ASC'
  ) ); // Get next earliest start date
  if ( $loop->have_posts() ) {
    $loop->the_post();
    return get_field( 'date_date' );
  } else {
    return false;
  }
  wp_reset_query();
}

?>
