<?php
  function tlhforms_isHMR() {
    $isHMR = file_exists(plugin_dir_path( __FILE__ ) . '/dist/hot');
    return $isHMR;
  }

  function tlhforms_mix($file) {
    $mix_manifest_location = plugin_dir_path( __FILE__ ) . "/dist/mix-manifest.json";
    $mix_manifest = json_decode(file_get_contents($mix_manifest_location), true);
    $style = $mix_manifest[$file];
    $assets_base_url = plugin_dir_url( __FILE__ ) . '/dist';
    $dev_asset_base_url = 'http://localhost:8080';

    if ( tlhforms_isHMR() ) {
      return $dev_asset_base_url . $style;
    } else {
      return $assets_base_url . $style;
    }
  }
?>
