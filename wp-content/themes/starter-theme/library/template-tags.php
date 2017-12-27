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

function tlh_icon ( $name, $class = NULL ) {
  echo '<i class="icon' . ($class ? ' ' . $class : '') . '">';
  include(get_stylesheet_directory() . '/library/images/icons/' . $name . '.svg');
  echo '</i>';
}

?>
