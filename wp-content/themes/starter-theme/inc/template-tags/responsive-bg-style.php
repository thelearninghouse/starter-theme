<?php

function tlh_responsive_bg_style( $selector, $field_name = null, $sub_field = false, $blog = false, $options = false ) {
	// If no image can be found, no <style> will be echoed
	$has_image = false;

	// Get correct post ID on blog page, otherwise use global $post
	$current_post_id = $blog ? get_option( 'page_for_posts' ) : get_the_ID();
	$current_post_id = $options ? 'options' : get_the_ID();

	if ( $field_name !== null ) {

		if ( $sub_field ) {
			$image = get_sub_field( $field_name, $current_post_id );
		} else {
			$image = get_field( $field_name, $current_post_id );
		}

		if ( ! empty( $image ) ) {
			// As of 4.0 we can use attachment_url_to_postid(), so we will accept an array, id, or url from an ACF field.
			if ( is_array( $image ) ) {
				$image_medium = $image['sizes']['medium_large'];
				$image_large  = $image['sizes']['large'];
				$image_full   = $image['url'];
				$has_image    = true;
			} elseif ( is_int( $image ) ) {
				$image_medium = wp_get_attachment_image_url( $image, 'medium_large' );
				$image_large  = wp_get_attachment_image_url( $image, 'large' );
				$image_full   = wp_get_attachment_image_url( $image, 'full' );
				$has_image    = true;
			} elseif ( is_string( $image ) ) {
				$image_gallery_id = attachment_url_to_postid( $image );
				$image_medium     = wp_get_attachment_image_url( $image_gallery_id, 'medium_large' );
				$image_large      = wp_get_attachment_image_url( $image_gallery_id, 'large' );
				$image_full       = wp_get_attachment_image_url( $image_gallery_id, 'full' );
				$has_image        = true;
			}
		}
	} elseif ( has_post_thumbnail( $current_post_id ) ) {
		// Use the featured image if no field is specified
		$image_medium = get_the_post_thumbnail_url( $current_post_id, 'medium_large' );
		$image_large  = get_the_post_thumbnail_url( $current_post_id, 'large' );
		$image_full   = get_the_post_thumbnail_url( $current_post_id, 'full' );
		$has_image    = true;
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
