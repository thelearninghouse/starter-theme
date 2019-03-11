<?php
require_once plugin_dir_path( __FILE__ ) . '../config.php';
require_once plugin_dir_path( __FILE__ ) . '../helpers.php';

// HELPERS
function checkForSchoolDisplayName() {
	$defaultDisplayName 	= get_bloginfo( 'name' );
	$displayNameValue 		= get_option('school_display_name') == '' ? $defaultDisplayName : get_option('school_display_name');
	return $displayNameValue;
}

function checkForColorTheme($post) {
	$globalColorTheme   = get_option('theme');
	$localColorTheme 		= get_post_meta( $post->ID, 'theme', true );
	// $localThemeIsDefault = $localColorTheme == '' || $localColorTheme == 'default' ? true : false;


	if ( !$globalColorTheme && !$localColorTheme ) {
		return 'theme-default';
	} else {
		$colorThemeValue =  !$localColorTheme ? $globalColorTheme : $localColorTheme;
		return $colorThemeValue;
	}

	if ( !$globalColorTheme && !$localColorTheme ) {
		return 'theme-default';
	}
}

function tlh_forms_footer_scripts(){
	global $post; // Get the current post data
	global $BASE_URL;

// THEME OPTIONS
	$school 							= get_option('school_name');
	$school_id 						= get_option('school_form_id');
	$affiliate_id 				= get_option('affiliate_id');
	$clientIdIndex				= get_option('client_id_index');
	$schoolDisplayName 		= checkForSchoolDisplayName();
	$colorTheme 					= checkForColorTheme($post);
	$form_settings 				= buildFormMetaArray($post);

	$form_script_id 			= $form_settings['_script_id'] ? $form_settings['_script_id'] : $school_id;
	$form_script_type 		= $form_settings['_script_type'];
	$template 						= $form_settings['_form_name'];

	$FORM_SCRIPT_URL = $BASE_URL . '/' . $school . '/' . $template . '?' . $form_script_type . '=' . $form_script_id;
?>

	<?php if ( $form_settings['_show_form'] == 'yes' ): ?>
		<?php require_once plugin_dir_path( __FILE__ ) . 'form-script-template.php'; ?>
	<?php endif; ?>

  <?php
}
add_action( 'wp_footer', 'tlh_forms_footer_scripts' );
