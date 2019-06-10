<?php
  require_once plugin_dir_path( __FILE__ ) . 'admin-helpers.php';
  require_once plugin_dir_path( __FILE__ ) . 'settings-page.php';
  require_once plugin_dir_path( __FILE__ ) . 'add-form-meta.php';
  require_once plugin_dir_path( __FILE__ ) . 'add-form-meta-to-rest.php';


  function handle_admin_meta() {

			wp_enqueue_style('app-css', plugin_dir_url( __FILE__ ) . 'production/css/app.css' );
			wp_enqueue_script( 'app-manifest', plugin_dir_url( __FILE__ ) . 'production/js/manifest.js', array(), '1.0', true );

			wp_enqueue_script( 'app-vendor', plugin_dir_url( __FILE__ ) . 'production/js/vendor.js', array('app-manifest'), '1.0', true );

			wp_enqueue_script( 'vue-admin-meta', plugin_dir_url( __FILE__ ) . 'production/js/vue-admin-meta.js', array('app-manifest', 'app-vendor'), '1.0', true );

			// Add a nonce field so we can check for it later.
			wp_nonce_field( 'forms_script_nonce', 'forms_script_nonce' );
			// wp_nonce_field( 'forms_script_nonce', 'forms_script_nonce' );

			$show_form_value = get_post_meta( $post->ID, '_show_form', true );
			$partnership_value = get_post_meta( $post->ID, '_partnership_id', true );
			$promotion_value = get_post_meta( $post->ID, '_promotion_id', true );
			$event_value = get_post_meta( $post->ID, '_event_id', true );
			$form_name_value = get_post_meta( $post->ID, '_form_name', true );
			$script_id_value = get_post_meta( $post->ID, '_script_id', true );
			$script_type_value = get_post_meta( $post->ID, '_script_type', true );

			// Localize the script with our data that we want to use
			$data = array(
				'showForm'         => $show_form_value,
				'formName'         => $form_name_value,
				'partnershipID'    => $partnership_value,
				'promotionID'      => $promotion_value,
				'eventID'          => $event_value,
				'scriptID'         => $script_id_value,
				'scriptType'       => $script_type_value,
				'nonce'            => wp_create_nonce( 'wp_rest' ),
				'site_name'        => get_bloginfo( 'name' ),
        'formTemplates'    => get_option('repo_form_templates'),
			);

			wp_localize_script( 'vue-admin-meta', 'CurrentFormData', $data );
	}



  function enqueue_settings_page_scripts($hook) {

    if( $hook == 'toplevel_page_form-settings' ) {
      handle_admin_form_settings();
    }

  }
  add_action( 'admin_enqueue_scripts', 'enqueue_settings_page_scripts' );
?>
