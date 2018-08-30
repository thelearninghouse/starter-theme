<?php

// Accordion
// $data = [['title' => 'Panel 1', 'content' => 'Panel 1 content'], ... ]
function tlh_get_accordion ( $data, $allow_multiple = true, $first_open = false, $class = false ) {
  static $accord_id = 1;
  $i = 1;
	$output = '';

  if ( $data ) {
    $output .= '<dl id="accordion-' . $accord_id . '" role="presentation" class="accordion';
		$output .= $class ? ' ' . $class : '';
		$output .= '" data-allow-toggle=""';
		$output .= $allow_multiple ? ' data-allow-multiple=""' : '';
		$output .= $first_open ? ' data-first-open=""' : '';
		$output .= '>';

  	foreach ( $data as $row ) {
			$accordion_header_id = 'accordion-'. $accord_id . '-header-' . $i;
			$accordion_panel_id = 'accordion-'. $accord_id . '-section-' . $i;

      $output .= '<dt role="heading" aria-level="3">';
      $output .= '<button aria-expanded="false" class="accordion__trigger" aria-controls="' . $accordion_panel_id . '" id="' . $accordion_header_id . '" type="button">';
      $output .= '<span class="accordion__title">' . $row['title'] . '</span>';
      $output .= '<span class="accordion__icon"></span>';
      $output .= '</button>';
      $output .= '</dt>';
      $output .= '<dd id="' . $accordion_panel_id . '" role="region" aria-labelledby="' . $accordion_header_id . '" class="accordion__panel">';
      $output .= '<div>';

      if ( is_array($row['content']) ) {
        foreach ( $row['content'] as $block ) {
          $output .= $block;
				}
      } else {
        $output .= $row['content'];
      }
			$output .= '</div></dd>';

			$i++;
    }
    $output .= '</dl>';
    $accord_id++;

		return $output;
  } else {
		return false;
	}
}

function tlh_accordion( $data, $allow_multiple = true, $first_open = false, $class = false ) {
	echo tlh_get_accordion( $data, $allow_multiple, $first_open, $class );
}

?>
