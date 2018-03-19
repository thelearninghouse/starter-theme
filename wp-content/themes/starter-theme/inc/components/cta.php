<?php

  // Shortcode for Call to Action box in blog posts: [cta]
  function blog_post_cta( $atts ) {
    $cta_title = get_field('blog_cta_title');
  	$cta_message = get_field('blog_cta_message');
    $cta_button_label = get_field('blog_cta_button_label') ? get_field('blog_cta_button_label') : 'Learn More';
    $cta_button_link = get_field('blog_cta_button_link');

  	$output = '';

  	if ( !empty($cta_button_link) ) {
  		$output .= '<div class="cta-blog">';
  		if ( !empty($cta_title) ) {
  	  	$output .= '<h3 class="cta-blog__title">' . $cta_title . '</h3>';
  		}
  		if ( !empty($cta_message) ) {
  	  	$output .= '<p class="cta-blog__message">' . $cta_message . '</p>';
  		}
  	  $output .= '<a class="button cta-blog__button" href="' .$cta_button_link . '">' . $cta_button_label . '</a>';
  	  $output .= '</div>';
  	}

  	return $output;
  }
  add_shortcode( 'cta', 'blog_post_cta' );

?>
