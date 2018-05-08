<?php
  function isHMR() {
    $isHMR = file_exists(get_template_directory() . '/public/hot');
    return $isHMR;
  }

  function mix($file) {
    $mix_manifest_location = get_template_directory() . "/public/mix-manifest.json";
    $mix_manifest = json_decode(file_get_contents($mix_manifest_location), true);
    $style = $mix_manifest[$file];
    $assets_base_url = get_stylesheet_directory_uri() . '/public';
    $dev_asset_base_url = 'http://localhost:8080';

    if ( isHMR() ) {
      return $dev_asset_base_url . $style;
    } else {
      return $assets_base_url . $style;
    }
  }

  function enqueue_hmr_helpers() {
    wp_register_script( 'hmr-olc',  mix('/js/hmr-olc.js'), array( 'manifest', 'vendor' ), '', true );
    wp_register_script( 'hmr-lp',  mix('/js/hmr-lp.js'), array( 'manifest', 'vendor' ), '', true );

    if ( !is_post_type('landing-pages') ) {
      wp_enqueue_script( 'hmr-olc' );
    }

    if ( is_post_type('landing-pages') ) {
      wp_enqueue_script( 'hmr-lp' );
    }
  }

?>
