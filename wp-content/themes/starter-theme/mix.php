<?php
function mix($file) {
  $mix_manifest_location = get_template_directory() . "/public/mix-manifest.json";
  $mix_manifest = json_decode(file_get_contents($mix_manifest_location), true);
  $style = $mix_manifest[$file];
  $assets_base_url = get_stylesheet_directory_uri() . '/public';
  $dev_asset_base_url = 'http://localhost:8080/';

  return $assets_base_url . $style;
}

?>
