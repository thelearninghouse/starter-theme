<?php function fetch_google_fonts () {

  $headings_font = get_field('headings_font', 'options');
  $body_font = get_field('body_font', 'options');

  if ($headings_font['label'] === $body_font['label']) {
    $font_url = 'https://fonts.googleapis.com/css?family=' . str_replace(' ', '+', $headings_font['label']) . ':400,700';
  }
  else {
    $font_url = 'https://fonts.googleapis.com/css?family=' . str_replace(' ', '+', $headings_font['label']) . ':400,700|' . str_replace(' ', '+', $body_font['label']) . ':400,700';
  }
  echo '<link href="' . $font_url . '" rel="stylesheet">';
}

function tlh_build_icon ( $name, $class = NULL, $title = NULL ) {
  $icon_file = get_stylesheet_directory() . '/library/images/icons/' . $name . '.svg';

  if ( ! file_exists( $icon_file ) ) {
    $icon_file = get_stylesheet_directory() . '/library/images/icons/unknown.svg';
  }

  $output  = '<i class="icon' . ($class ? ' ' . $class : '') . '"' . ($title ? ' title="' . $title . '"': '') . '>';
  $output .= file_get_contents($icon_file);
  $output .= '</i>';

  return $output;
}

function tlh_icon ( $name, $class = NULL, $title = NULL ) {
  echo tlh_build_icon( $name, $class, $title );
}

function tlh_shortcode_icon ( $atts ) {
  $a = shortcode_atts( array(
    'name' => 'info-circle',
    'class' => 'inline',
    'title' => NULL,
  ), $atts );

  return tlh_build_icon( $a['name'], $a['class'], $a['title'] );
}
add_shortcode( 'icon', 'tlh_shortcode_icon' );

function tlh_responsive_bg_style( $selector, $field_name = NULL ) {
  // If no image can be gotten, no <style> will be echoed
  $has_image = false;

  if ( $field_name !== NULL ) {
    $image = get_field( $field_name );
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

?>