<?php

function tlh_get_responsive_image_set( $image_id = false ) {

	if ( $image_id ) {
		$image_set       = array();
		$image_set['sm'] = wp_get_attachment_image_url( $image_id, 'medium_large' );
		$image_set['md'] = wp_get_attachment_image_url( $image_id, 'large' );
		$image_set['lg'] = wp_get_attachment_image_url( $image_id, 'full' );
		return $image_set;
	}

	return false;
}

function tlh_get_responsive_bg_style( $selector = '.background', $image_id = 0 ) {

	$image_set = tlh_get_responsive_image_set( $image_id );

	// If no image can be found, no <style> will be echoed
	if ( $image_set ) {
		return "<style>
			@media screen and (max-width: 800px) {
				${selector} {
					background-image: url('${image_set["sm"]}');
				}
			}
			@media screen and (min-width: 801px) and (max-width: 1200px) {
				${selector} {
					background-image: url('${image_set["md"]}');
				}
			}
			@media screen and (min-width: 1200px) {
				${selector} {
					background-image: url('${image_set["lg"]}');
				}
			}
		</style>";
	}
}

function tlh_responsive_bg_style( $selector = '.background', $image_id = 0 ) {
	echo tlh_get_responsive_bg_style( $selector, $image_id );
}
