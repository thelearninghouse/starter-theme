<?php

/*
*  ACF Color Picker Field Class
*
*  All the logic for this field type
*
*  @class 		dhz_acf_field_extended_color_picker
*  @extends		acf_field
*  @package		ACF
*  @subpackage	Fields
*/

if( ! class_exists('dhz_acf_field_extended_color_picker') ) :

class dhz_acf_field_extended_color_picker extends acf_field {
	
	
	/*
	*  __construct
	*
	*  This function will setup the field type data
	*
	*  @type	function
	*  @date	5/03/2014
	*  @since	5.0.0
	*
	*  @param	n/a
	*  @return	n/a
	*/
	
	function __construct() {
		
		// vars
		$this->name = 'extended-color-picker';
		$this->label = __("RGBA Color Picker",'acf-extended-color-picker');
		$this->category = 'jquery';
		$this->defaults = array(
			'hide_palette'	=> '',
			'color_palette'	=> '',
		);
		
		$this->settings = array(
			'version'	=> '1.2.0',
			'url'		=> plugin_dir_url( __DIR__ )
		);		
		
		// do not delete!
		parent::__construct();
		
	}	
	
	/*
	*  input_admin_enqueue_scripts
	*
	*  description
	*
	*  @type	function
	*  @date	16/12/2015
	*  @since	5.3.2
	*
	*  @param	$post_id (int)
	*  @return	$post_id (int)
	*/
	
	function input_admin_enqueue_scripts() {
		
		// globals
		global $wp_scripts, $wp_styles;		
		
		// register if not already (on front end)
		// http://wordpress.stackexchange.com/questions/82718/how-do-i-implement-the-wordpress-iris-picker-into-my-plugin-on-the-front-end
		if( !isset($wp_scripts->registered['iris']) ) {
			
			// styles
			wp_register_style('wp-color-picker', admin_url('css/color-picker.css'), array('wp-color-picker'), '', true);
			
			// scripts
			wp_register_script('iris', admin_url('js/iris.min.js'), array('jquery-ui-draggable', 'jquery-ui-slider', 'jquery-touch-punch'), '1.0.7', true);
			wp_register_script('wp-color-picker', admin_url('js/color-picker.min.js'), array('iris'), '', true);
			
			// localize
			wp_localize_script('wp-color-picker', 'wpColorPickerL10n', array(
				'clear'			=> __('Clear', 'acf' ),
				'defaultString'	=> __('Default', 'acf' ),
				'pick'			=> __('Select Color', 'acf' ),
				'current'		=> __('Current Color', 'acf' )
			));

		}

		$url = $this->settings['url'];
		$version = $this->settings['version'];

		// Add the Alpha Color Picker JS
		wp_enqueue_script( 'wp-color-picker-alpha', "{$url}/assets/js/wp-color-picker-alpha.min.js", array( 'wp-color-picker' ), '2.0.0', true );

		// register Extended Color Picker CSS
		wp_register_style( 'acf-rgba-color-picker-style', "{$url}/assets/css/acf-rgba-color-picker.css", false, $version);

		// register Extended Color Picker JS
		wp_register_script( 'acf-rgba-color-picker-script', "{$url}/assets/js/acf-rgba-color-picker.js", array('wp-color-picker-alpha'), $version, true );
		
		// enqueue styles & scripts
		wp_enqueue_style('wp-color-picker');
		wp_enqueue_style('acf-rgba-color-picker-style');
		wp_enqueue_script('wp-color-picker');
		wp_enqueue_script('acf-rgba-color-picker-script');
					
	}	
	
	/*
	*  render_field()
	*
	*  Create the HTML interface for your field
	*
	*  @param	$field - an array holding all the field's data
	*
	*  @type	action
	*  @since	3.6
	*  @date	23/01/13
	*/
	
	function render_field( $field ) {

		// vars
		$text = acf_get_sub_array( $field, array('id', 'class', 'name', 'value') );
		$hidden = acf_get_sub_array( $field, array('name', 'class', 'value') );

		$palettes = apply_filters( "acf/rgba_color_picker/palette", true );

		if ( $palettes == false ) {
			$palettes = 'no-palette';
		} else if ( !is_array($palettes) ) {
			if ( $field['hide_palette'] == 1 ) {
				$palettes = 'no-palette';
			} else {
				$palettes = $field['color_palette'];
			}
		} else {
			if ( $field['hide_palette'] == 1 ) {
				$palettes = 'no-palette';
			} else {
				$palettes = implode(";", $palettes);
			}
		}

		$text['class'] = 'valuetarget';
		$hidden['class'] = 'hiddentarget';
		
		// render
		?>
		<div class="acf-color-picker" data-target="target" data-palette='<?php echo $palettes ?>' data-default="<?php echo $field['default_value'] ?>">			
			<?php acf_hidden_input($hidden); ?>
			<input type="text" <?php echo acf_esc_attr($text); ?> data-alpha ="true" />
		</div>
		<?php
	}	
	
	/*
	*  render_field_settings()
	*
	*  Create extra options for your field. This is rendered when editing a field.
	*  The value of $field['name'] can be used (like bellow) to save extra data to the $field
	*
	*  @type	action
	*  @since	3.6
	*  @date	23/01/13
	*
	*  @param	$field	- an array holding all the field's data
	*/
	
	function render_field_settings( $field ) {
		
		// default value
		acf_render_field_setting( $field, array(
			'label'			=> __('Default Value','acf'),
			'instructions'	=> '',
			'type'			=> 'text',
			'name'			=> 'default_value',
			'placeholder'	=> '#FFFFFF'
		));
		
		// color palette
		acf_render_field_setting( $field, array(
			'label'			=> __('Color Palette','acf-extended-color-picker'),
			'instructions'	=> __('Enter color codes separated by semicolons. You can use HEX or RGBA color codes and can also mix them (e.g. #2ecc71; rgba(50,40,30,0.5).<br><br>This can (and is maybe) overwritten by the "acf/acfrb_color_picker/palette" filter.','acf-extended-color-picker'),
			'type'			=> 'text',
			'name'			=> 'color_palette'
		));
		
		// hide palette
		acf_render_field_setting( $field, array(
			'label'			=> __('Hide Color Palette','acf-extended-color-picker'),
			'instructions'	=> __('Don\'t show a color palette in the color picker','acf-extended-color-picker'),
			'type'			=> 'true_false',
			'name'			=> 'hide_palette',
			'ui'			=> 1,
		));
	}
	
}

// initialize
acf_register_field_type( new dhz_acf_field_extended_color_picker() );

endif; // class_exists check

?>