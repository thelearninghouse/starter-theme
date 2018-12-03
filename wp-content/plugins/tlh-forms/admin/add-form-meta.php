<?php

require_once plugin_dir_path( __FILE__ ) . '../config.php';
require_once plugin_dir_path( __FILE__ ) . '../helpers.php';
require_once plugin_dir_path( __FILE__ ) . '../github.php';
require_once plugin_dir_path( __FILE__ ) . '../mix-helpers.php';


function forms_script_meta_box() {

  $postTypes = get_post_types();

  foreach ( $postTypes as $post_type ) {
    add_meta_box(
      'forms_script', // Metabox ID
      'Form Script Details', // Title to display
      'forms_script_meta_box_callback', // Function to call that contains the metabox content
      // 'post', // Post type to display metabox on
      $post_type,
      'side', // Where to put it (normal = main colum, side = sidebar, etc.)
      'high' // Priority relative to other metaboxes
    );

  }
}


function forms_script_meta_box_callback( $post ) {
    global $plugin_private_key;
    $form_settings = buildFormMetaArray($post);

    // Add a nonce field so we can check for it later.
    wp_nonce_field( 'forms_script_nonce', 'forms_script_nonce' );
    // wp_nonce_field( 'forms_script_nonce', 'forms_script_nonce' );

    // Localize the script with our data that we want to use
    $data = array(
    	'nonce'                => wp_create_nonce( 'wp_rest' ),
    	'site_name'            => get_bloginfo( 'name' ),
      'schoolName' 	         => get_option('school_name'),
      'githubToken'          => get_option('github_token'),
      'schoolFormId'         => get_option('school_form_id'),
      'formTemplates'        => get_option('repo_form_templates')
    );


    wp_enqueue_style('app-css', tlhforms_mix('/css/app.css') );

    wp_register_script( 'manifest', tlhforms_mix('/js/manifest.js'), array(), '', true );
    wp_register_script( 'vendor', tlhforms_mix('/js/vendor.js'), array( 'manifest' ), '', true );
    wp_register_script( 'vue-admin',  tlhforms_mix('/js/vue-admin.js'), array( 'manifest', 'vendor' ), '', true );

    wp_enqueue_script( 'axios', 'https://unpkg.com/axios/dist/axios.min.js' );
    wp_enqueue_script( 'manifest' );
    wp_enqueue_script( 'vendor' );
    wp_enqueue_script( 'vue-admin' );

    if ($plugin_private_key) {
      checkToken();
    }
    wp_localize_script( 'vue-admin', 'CurrentFormData', array_merge($form_settings, $data) );

    ?>

      <div id="form-app">
        <form-meta :templates="formData.formTemplates" :form-data="formData"></form-meta>
      </div>

    <?php

}


/**
 * When the post is saved, saves our custom data.
 *
 * @param int $post_id
 */
function save_forms_script_meta_box_data( $post_id ) {

    // Check if our nonce is set.
    if ( ! isset( $_POST['forms_script_nonce'] ) ) {
        return;
    }

    // Verify that the nonce is valid.
    if ( ! wp_verify_nonce( $_POST['forms_script_nonce'], 'forms_script_nonce' ) ) {
        return;
    }

    // If this is an autosave, our form has not been submitted, so we don't want to do anything.
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
        return;
    }

    // Check the user's permissions.
    if ( isset( $_POST['post_type'] ) && 'page' == $_POST['post_type'] ) {

        if ( ! current_user_can( 'edit_page', $post_id ) ) {
            return;
        }

    }
    else {

        if ( ! current_user_can( 'edit_post', $post_id ) ) {
            return;
        }
    }

    /* OK, it's safe for us to save the data now. */

    // Make sure that it is set.
    if ( ! isset( $_POST['partnership_id'] ) ) {
        return;
    }


    // Sanitize user input.
    $data_partnership_id = sanitize_text_field( $_POST['partnership_id'] );
    $data_promotion_id = sanitize_text_field( $_POST['promotion_id'] );
    $data_event_id = sanitize_text_field( $_POST['event_id'] );
    $data_form_name = sanitize_text_field( $_POST['form_name'] );
    $data_script_id = sanitize_text_field( $_POST['script_id'] );
    $data_script_type = sanitize_text_field( $_POST['script_type'] );
    $data_show_form = ( $_POST['show_form'] );
    $data_theme = ( $_POST['theme'] );
    // $data_form_name = sanitize_text_field( $_POST['form_name'] );

    if ( isset( $_POST['show_form'] ) ) {
        $data_show_form = 'yes';
    } else {
        $data_show_form = 'no';
    }
    // Update the meta field in the database.
    update_post_meta( $post_id, '_partnership_id', $data_partnership_id );
    update_post_meta( $post_id, '_promotion_id', $data_promotion_id );
    update_post_meta( $post_id, '_event_id', $data_event_id );
    update_post_meta( $post_id, '_form_name', $data_form_name );
    update_post_meta( $post_id, '_show_form', $data_show_form );
    update_post_meta( $post_id, '_script_id', $data_script_id );
    update_post_meta( $post_id, '_script_type', $data_script_type );
    update_post_meta( $post_id, 'theme', $data_theme );
}

function loadForAdminsOnly() {
  if ( current_user_can( 'manage_options' ) ) {
    add_action( 'add_meta_boxes', 'forms_script_meta_box' );
    add_action( 'save_post', 'save_forms_script_meta_box_data' );
  }
}

loadForAdminsOnly();
?>
