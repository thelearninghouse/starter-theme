<?php
/*
 * Plugin Name: Stepform Validation
 * Plugin URI: http://www.learninghouse.com
 * Description: This plugin adds validation to the forms that are Stepforms
 * Version: 1.0.0
 * Author: The Learning House - David Royer
 * Author URI:
 * License: GPL2
 */


add_action( 'admin_menu', 'sfvp_add_admin_menu' );
add_action( 'admin_init', 'sfvp_settings_init' );

// Register and Enqueue a Script

add_action('wp_enqueue_scripts', 'activate_stepform_js', 999);
function activate_stepform_js() {
	// wp_register_script( 'stepform_js', plugin_dir_url( __FILE__ ) . 'js/stepform_validation_v2.1.min.js', array( 'jquery' ), '', true );
	wp_register_script( 'stepform_js', plugin_dir_url( __FILE__ ) . 'js/stepform_validation_v2.1.min.js', array( 'jquery' ), '', true );
	if ( is_singular( 'degrees' ) || is_singular( 'landing-pages' ) )  {
		wp_enqueue_script('stepform_js');
	 }
}

function sfvp_add_admin_menu(  ) {

	add_menu_page( 'Stepform Plugin', 'Stepform Settings', 'manage_options', 'stepform-plugin', 'sfvp_options_page' );

}

function sfvp_options_page(  ) { ?>
	<form action='options.php' method='post'>
		<?php
		settings_fields( 'pluginPage' );
		do_settings_sections( 'pluginPage' );
		submit_button();
		?>
	</form>
	<?php }


function sfvp_settings_init(  ) {

	register_setting( 'pluginPage', 'sfvp_settings' );

	add_settings_section(
		'sfvp_pluginPage_section',
		__( 'Stepform Validation Plugin Options', 'wordpress' ),
		'sfvp_settings_section_callback',
		'pluginPage'
	);

	add_settings_field(
		'sfvp_checkbox_field_0',
		__( 'Use JavaScript globally', 'wordpress' ),
		'sfvp_checkbox_field_0_render',
		'pluginPage',
		'sfvp_pluginPage_section'
	);

}


function sfvp_settings_section_callback(  ) {

	echo '<p style="font-size: 1.1em;">The JavaScript will automaticlly be loaded and applied anytime you are on a Parallax Landing page and there is a stepform.</p><hr style="margin-top: 20px">';

}

function sfvp_checkbox_field_0_render(  ) {

	$options = get_option( 'sfvp_settings' );
	?>
	<p style="padding:0 300px 20px 0; font-size: 1em;">Check this if you want the JavaScript to load globally throughout the site.  If there are Step Forms on pages that are not Parallax Pages then this might be helpful</p>
	<input type='checkbox' name='sfvp_settings[sfvp_checkbox_field_0]' <?php checked( (is_array($options) && $options['sfvp_checkbox_field_0'] == '1'), 1 ); ?> value='1'>

	<?php

}


$options = get_option( 'sfvp_settings' );
if (is_array($options) && $options['sfvp_checkbox_field_0'] == '1' ) {

    add_action('wp_enqueue_scripts', 'use_code_globally', 999);
    function use_code_globally() {
             wp_enqueue_script('stepform_js');
    }
}


?>
