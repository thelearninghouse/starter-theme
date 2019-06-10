<?php

// WP Shortcode to display Form on page or post.
function tlh_form_shortode(){
  return '<div id="tlh-form"></div>';
}
add_shortcode('tlh-form', 'tlh_form_shortode');
