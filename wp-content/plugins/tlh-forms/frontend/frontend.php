<?php
  require_once plugin_dir_path( __FILE__ ) . 'form-script-generator.php';

  function enqueue_frontend() {
      global $post;
      
    /**
     * If get_option returns false then that means it hasn't been set yet so load Vue library and Polyfill to prevent any errors.
     * If get_options returns "true" as a string then include it else don't
     */
    $includeVueLibrary = get_option('include_vue_library') === false ||  get_option('include_vue_library') === 'true' ? true : false;
    $includePolyfill =  get_option('include_polyfill') === false || get_option('include_polyfill') === 'true' ? true : false;      

    $form_styles = '/wp-content/plugins/tlh-forms/dist/frontend/css/form-styles.css';
  	$vendorsURL = $includeVueLibrary ? '/wp-content/plugins/tlh-forms/dist/frontend/js/vendors-bundle.js' : '/wp-content/plugins/tlh-forms/dist/frontend/js/vendors-bundle-without-vue.js';
    $vlh_forms_url =  '/wp-content/plugins/tlh-forms/dist/frontend/js/vlh-forms.js';

    $raven = 'https://cdn.ravenjs.com/3.22.1/vue/raven.min.js';
    $raven_config = 'https://7e13d150a425406da56c2bc4ec87b033@sentry.io/192500';
    $babelPolyfill = 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.js';
  	$form_is_active = get_post_meta( $post->ID, '_show_form', true );

  	if ($form_is_active == 'yes') {
        wp_enqueue_script( 'raven', $raven );
        wp_enqueue_script( 'raven-config', $raven );
    
        if ($includePolyfill) {
            wp_enqueue_script( 'polyfill', $babelPolyfill );
            wp_enqueue_script( 'tlh-forms-vendors', $vendorsURL );
            wp_enqueue_script( 'vlh-forms', $vlh_forms_url, array('polyfill', 'tlh-forms-vendors') );
            
        } else {
            wp_enqueue_script( 'tlh-forms-vendors', $vendorsURL );
            wp_enqueue_script( 'vlh-forms', $vlh_forms_url, array('tlh-forms-vendors') );
        }
  	}
  }
  add_action( 'wp_enqueue_scripts', 'enqueue_frontend' );



  add_filter( 'script_loader_tag', 'add_attribs_to_scripts', 10, 3 );
  function add_attribs_to_scripts( $tag, $handle, $src ) {

    // The handles of the enqueued scripts we want to defer
    $async_scripts = array(
    );

    $defer_scripts = array(
    );

    $raven = array(
        'raven'
    );

    $raven_config = array(
        'raven-config'
    );

    if ( in_array( $handle, $defer_scripts ) ) {
        return '<script src="' . $src . '" defer="defer" type="text/javascript"></script>' . "\n";
    }
    if ( in_array( $handle, $async_scripts ) ) {
        return '<script src="' . $src . '" async="async" type="text/javascript"></script>' . "\n";
    }
    if ( in_array( $handle, $raven ) ) {
        return '<script src="' . $src . '" crossorigin="anonymous"></script>' . "\n";
    }

    if ( in_array( $handle, $raven_config ) ) {
        $url = 'https://7e13d150a425406da56c2bc4ec87b033@sentry.io/192500';
        return '<script>Raven.config("' . $url . '").install();</script>' . "\n";
    }

    return $tag;
  }

?>
