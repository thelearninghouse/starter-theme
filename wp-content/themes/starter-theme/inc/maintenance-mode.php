<?php

// Add Settins Page
add_action( 'admin_menu', 'mnt_add_admin_menu' );

// Add Admin Settings
add_action( 'admin_init', 'mnt_settings_init' );

// Add Link to Menu
function mnt_add_admin_menu() {
	add_theme_page( 'Maintenance', 'Maintenance', 'manage_options', 'maintenance', 'mnt_options_page' );
}

// Content of the Setting Page
function mnt_options_page() { ?>

	<form action='options.php' method='post'>
		<?php
			settings_fields( 'pluginPage' );
			do_settings_sections( 'pluginPage' );
			submit_button();
		?>
	</form>

	<?php
}

function mnt_settings_init() {
	register_setting( 'pluginPage', 'mnt_settings' );

	// Add Section
	add_settings_section(
		'mnt_pluginPage_section',
		__( 'Maintenance Alert', 'WordPress' ),
		'mnt_settings_section_callback',
		'pluginPage'
	);

	// Add Checkbox
	add_settings_field(
		'mnt_checkbox_field_0',
		__( 'Turn Maintenance Message On', 'WordPress' ),
		'mnt_checkbox_field_0_render',
		'pluginPage',
		'mnt_pluginPage_section'
	);
}

// Section text
function mnt_settings_section_callback() {
	echo '<p>This will turn on a maintenance warning for all WordPress users on the dashboard and login page.</p>';
}

// The Checkbox Field
function mnt_checkbox_field_0_render() {

	$options = get_option( 'mnt_settings' );
	?>
	<input type='checkbox' name='mnt_settings[mnt_checkbox_field_0]' <?php checked( ( is_array( $options ) && '1' == $options['mnt_checkbox_field_0'] ), 1 ); ?> value='1'>
	<?php

}

// Turn on Notification when the box is checked and saved
$options = get_option( 'mnt_settings' );
if ( is_array( $options ) && '1' == $options['mnt_checkbox_field_0'] ) {
	// Add custom message to WordPress dashboard
	add_action( 'admin_notices', 'wps_wp_admin_area_notice' );
	function wps_wp_admin_area_notice() {
		echo ' <div class="error" style="background:red; color:white; padding:10px 5px; margin-left:0; margin-top: 20px;">This website is currently under development. Please DO NOT make any content changes unless approved by web development.</div>';
	}

	// Add custom message to WordPress login page
	add_filter( 'login_message', 'smallenvelop_login_message' );
	function smallenvelop_login_message() {
		if ( empty( $message ) ) {
			return "<p class='login-error' style='background:red; color:white; padding:10px 5px;'><strong>This website is currently under development. Please DO NOT make any content changes unless approved by web development.</strong></p>";
		} else {
			return $message;
		}
	}
}

?>
