<?php

function buildFormsDataArray()
{
    global $fields_array;

    $customPostTypesArray = array();
    $customPostTypesArgs = array(
        'public' => true,
        '_builtin' => false,
    );
    $customPostTypes = get_post_types($customPostTypesArgs);

    foreach ($customPostTypes as $postType) {
        $customPostTypesArray[] = $postType;
    }

    $forms_settings_data = array(
        'root' => esc_url_raw(rest_url()),
        'nonce' => wp_create_nonce('wp_rest'),
        'formTemplates' => get_option('repo_form_templates'),
        'customPostTypes' => $customPostTypesArray
    );

    foreach ($fields_array as $field) {
        $setting_id = $field['id'];
        $setting = get_option($setting_id);

        $forms_settings_data[$setting_id] = $setting;
    }

    return $forms_settings_data;
}

function buildFormMetaArray($post)
{
    global $tlh_forms_meta_array;

    $form_settings_data = array(
        'root' => esc_url_raw(rest_url()),
        'nonce' => wp_create_nonce('wp_rest'),
        'site_name' => get_bloginfo('name'),
        'schoolName' => get_option('school_name'),
        'githubToken' => get_option('github_token'),
  );

    foreach ($tlh_forms_meta_array as $setting_id) {
        $setting = get_post_meta($post->ID, $setting_id, true);
        $forms_settings_data[$setting_id] = $setting;
    }

    return $forms_settings_data;
}

function buildFormInjectData($post)
{
    global $tlh_form_meta_array;

    $tlh_forms_meta_array = array(
        '_show_form',
        '_partnership_id',
        '_promotion_id',
        '_event_id',
        '_form_name',
        '_script_id',
        '_script_type',
        '_theme',
    );

    $form_data = array();

    foreach ($tlh_forms_meta_array as $setting_id) {
        $setting = get_post_meta($post->ID, $setting_id, true);
        $form_data[$setting_id] = $setting;
    }

    return $form_data;

    // foreach ( $tlh_forms_meta_array as $meta_item ) {
    // 	// $meta_item_name = $meta_item
    // 	// $meta_item_value =
    // 	$meta_item_value = get_post_meta( $post->ID, $meta_item, true );
    // 	// echo $meta_item_value;
    // 	$$meta_item = $$meta_item_value;
    // 	echo $$meta_item;
    // }
}
