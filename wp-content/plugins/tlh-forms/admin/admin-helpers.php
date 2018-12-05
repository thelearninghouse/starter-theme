<?php
  require_once plugin_dir_path( __FILE__ ) . '../config.php';
  require_once plugin_dir_path( __FILE__ ) . '../helpers.php';
  require_once plugin_dir_path( __FILE__ ) . '../github.php';
  require_once plugin_dir_path( __FILE__ ) . '../mix-helpers.php';


  function handle_admin_form_settings() {
    global $plugin_private_key;

    $jsonpUrl = '/wp-content/plugins/tlh-forms/pluginFiles/js/jsonp.js';
    $formAnalyticsUrl = '/wp-content/plugins/tlh-forms/pluginFiles/js/form-analytics.js';

    wp_enqueue_style('app-css', plugin_dir_url( dirname(__FILE__) ) . 'dist/css/app.css' );

    wp_enqueue_style( 'vuetify-font-icons', 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' );

    wp_enqueue_script( 'form-analytics', $formAnalyticsUrl );
    wp_enqueue_script( 'jsonp', $jsonpUrl );
    wp_enqueue_script( 'axios', 'https://unpkg.com/axios/dist/axios.min.js' );

    wp_enqueue_script( 'vue', 'https://unpkg.com/vue/dist/vue.min.js' );
    wp_enqueue_script( 'vee-validate', 'https://unpkg.com/vee-validate' );

    wp_enqueue_script( 'vlh-forms', 'https://cdn.jsdelivr.net/gh/thelearninghouse/vlh-forms/dist/vlh-forms.umd.min.js', array('vue', 'vee-validate') );
    // wp_enqueue_script( 'vlh-forms', 'https://cdn.jsdelivr.net/gh/davidroyer/vlh-forms2/dist/vlh-forms.common.js', array('vue', 'vee-validate') );

    wp_register_script( 'manifest', tlhforms_mix('/js/manifest.js'), array(), '', true );
    wp_register_script( 'vendor', tlhforms_mix('/js/vendor.js'), array( 'manifest' ), '', true );
    wp_register_script( 'vue-admin',  tlhforms_mix('/js/vue-admin.js'), array( 'manifest', 'vendor' ), '', true );

    wp_enqueue_script( 'fetch-inject', 'https://cdn.jsdelivr.net/npm/fetch-inject', array('vendor') );
    wp_enqueue_script( 'manifest' );
    wp_enqueue_script( 'vendor' );
    wp_enqueue_script( 'vue-admin' );

    if ($plugin_private_key) {
      checkToken();
    }
    wp_localize_script( 'vue-admin', 'SchoolFormData', buildFormsDataArray() );
  }

?>
