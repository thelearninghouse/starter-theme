<?php
/**
 * Create Custom Global Settings
 */

require_once plugin_dir_path( __FILE__ ) . '../config.php';

add_action('admin_init', function(){
  $post_types = get_post_types( array( 'public' => true, '_builtin' => false ), 'objects' );
});



function form_settings_page() { ?>
	<div class="formAdmin__wrapper wrap">
		<!-- <h1 class="formAdmin__heading">TLH Forms - Settings Page</h1> -->
		<?php settings_errors(); ?>
		<div id="form-settings">
			<form class="formAdmin__settingsForm" method="post" action="options.php">
				<?php settings_fields( 'section' ); ?>
				<form-settings :settings="schoolFormData" :templates="schoolFormData.formTemplates"></form-settings>
				<!-- <?php submit_button(); ?> -->
			</form>
			<!-- <form-viewer :templates="formTemplates" :form-data="schoolFormData"></form-viewer> -->
		</div>
	</div>
<?php }

function form_settings_add_menu() {
  add_menu_page( 'Form Settings', 'Form Settings', 'manage_options', 'form-settings', 'form_settings_page',  'dashicons-portfolio', 2 );
}
add_action( 'admin_menu', 'form_settings_add_menu' );

function setting_school_display_name() { ?>
	<?php
		$defaultDisplayName = get_bloginfo( 'name' );
		$displayNameValue = get_option('school_display_name') == '' ? $defaultDisplayName : get_option('school_display_name')
	?>

	<input type="text" name="school_display_name" id="school_display_name" value="<?php echo $displayNameValue; ?>" />
<?php }


// new callback functions for settings
function textField( $args )
{
	$id = $args['label_for'];
	$classes = $args['class'];
	$value = get_option( $id );
	echo '<input type="text" name="' . $id . '" value="' . $value . '" class="' . $classes . '">';
}

function form_settings_page_setup() {
	global $settings_array;
	global $fields_array;
	global $tlh_forms_settings_array;

	add_settings_section( 'section', 'Form Settings', null, 'theme-options' );

	// add settings field
	foreach ( $fields_array as $field ) {
		add_settings_field( $field["id"], $field["title"], ( isset( $field["callback"] ) ? $field["callback"] : '' ), $field["page"], $field["section"], ( isset( $field["args"] ) ? $field["args"] : '' ) );
	}

	foreach ( $tlh_forms_settings_array as $setting ) {
		register_setting( 'section', $setting );
	}
}
add_action( 'admin_init', 'form_settings_page_setup' );
