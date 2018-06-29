<?php
/*
Plugin Name: ACF RGBA Color Picker
Plugin URI:  https://wordpress.org/plugins/acf-rgba-color-picker/
Description: Adds an Advanced Custom Fields field for an extended color picker with transparency option.
Version: 1.2.1
Author: Thomas Meyer
Author URI: https://dreihochzwo.de
Text Domain: acf-extended-color-picker
Domain Path: /languages
License: GPLv2 or later.
Copyright: Thomas Meyer
*/

// exit if accessed directly
if( ! defined( 'ABSPATH' ) ) exit;

// check if class already exists
if( !class_exists('dhz_acf_plugin_extended_color_picker') ) :

class dhz_acf_plugin_extended_color_picker {
	
	function __construct() {

		if ( ! defined( 'DHZ_SHOW_DONATION_LINK' ) )
			define( 'DHZ_SHOW_DONATION_LINK', true );
		
		// vars
		$this->settings = array(
			'plugin'			=> 'ACF RGBA Color Picker',
			'this_acf_version'	=> 0,
			'min_acf_version'	=> '5.5.0',
			'version'			=> '1.2.1',
			'url'				=> plugin_dir_url( __FILE__ ),
			'path'				=> plugin_dir_path( __FILE__ ),
			'plugin_path'		=> 'https://wordpress.org/plugins/acf-rgba-color-picker/'
		);		
		
		// set text domain
		load_plugin_textdomain( 'acf-extended-color-picker', false, dirname( plugin_basename(__FILE__) ) . '/languages/' );

		add_action( 'admin_init', array($this, 'acf_or_die'), 11);

		// include field
		add_action( 'acf/include_field_types', array($this, 'include_field_types') );
			
		if ( DHZ_SHOW_DONATION_LINK == true ) {

			// add plugin to $plugins array for the metabox
			add_filter( '_dhz_plugins_list', array($this, '_dhz_meta_box_data') );

			// metabox callback for plugins list and donation link
			add_action( 'add_meta_boxes_acf-field-group', array($this, '_dhz_plugins_list_meta_box') );

		}
		
	}

	/**
	 * Let's make sure ACF Pro is installed & activated
	 * If not, we give notice and kill the activation of ACF RGBA Color Picker.
	 * Also works if ACF Pro is deactivated.
	 */
	function acf_or_die() {

		if ( !class_exists('acf') ) {
			$this->kill_plugin();
		} else {
			$this->settings['this_acf_version'] = acf()->settings['version'];
			if ( version_compare( $this->settings['this_acf_version'], $this->settings['min_acf_version'], '<' ) ) {
				$this->kill_plugin();
			}
		}
	}

	function kill_plugin() {
		deactivate_plugins( plugin_basename( __FILE__ ) );   
			if ( isset( $_GET['activate'] ) ) {
				unset( $_GET['activate'] );
			}
		add_action( 'admin_notices', array($this, 'acf_dependent_plugin_notice') );
	}

	function acf_dependent_plugin_notice() {
		echo '<div class="error"><p>' . sprintf( __('%1$s requires ACF PRO v%2$s or higher to be installed and activated.', 'acf-extended-color-picker'), $this->settings['plugin'], $this->settings['min_acf_version']) . '</p></div>';
	}
	
	/**
	*  Include field type
	*/	
	function include_field_types() {			

		if ( class_exists('acf') ) {
			include_once('fields/acf-rgba-color-picker-v5.php');
		}

	}

	/*
	*  Add plugin to $plugins array for the metabox
	*/
	function _dhz_meta_box_data($plugins=array()) {
		
		$plugins[] = array(
			'title' => $this->settings['plugin'],
			'screens' => array('acf-field-group'),
			'doc' => $this->settings['plugin_path']
		);
		return $plugins;
		
	} // end function meta_box

	/*
	*  Add metabox for plugins list and donation link
	*/
	function _dhz_plugins_list_meta_box() {

		$plugins = apply_filters('_dhz_plugins_list', array());
			
		$id = 'plugins-by-dreihochzwo';
		$title = '<a style="text-decoration: none; font-size: 1em;" href="https://profiles.wordpress.org/tmconnect/#content-plugins" target="_blank">'.__("Plugins by dreihochzwo", "acf-extended-color-picker").'</a>';
		$callback = array($this, 'show_dhz_plugins_list_meta_box');
		$screens = array();
		foreach ($plugins as $plugin) {
			$screens = array_merge($screens, $plugin['screens']);
		}
		$context = 'side';
		$priority = 'default';
		add_meta_box($id, $title, $callback, $screens, $context, $priority);
		
		
	} // end function _dhz_plugins_list_meta_box

	/*
	*  Metabox callback for plugins list and donation link
	*/
	function show_dhz_plugins_list_meta_box() {

		$plugins = apply_filters('_dhz_plugins_list', array());
		?>
			<p style="margin-bottom: 10px; font-weight:500"><?php _e("Thank you for using my plugins!", "acf-extended-color-picker") ?></p>
			<ul style="margin-top: 0; margin-left: 5px;">
				<?php 
					foreach ($plugins as $plugin) {
						?>
							<li style="list-style-type: disc; list-style-position:inside; text-indent:-13px; margin-left:13px">
								<?php 
									echo $plugin['title']."<br/>";
									if ($plugin['doc']) {
										?> <a style="font-size:12px" href="<?php echo $plugin['doc']; ?>" target="_blank"><?php _e("Documentation", "acf-extended-color-picker") ?></a><?php 
									}
								?>
							</li>
						<?php 
					}
				?>
			</ul>
			<div style="margin-left:-12px; margin-right:-12px; margin-bottom: -12px; background: #2a9bd9; padding:14px 12px">
				<p style="margin:0; text-align:center"><a style="color: #fff;" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=XMLKD8H84HXB4&lc=US&item_name=Donation%20for%20WordPress%20Plugins&no_note=0&cn=Add%20a%20message%3a&no_shipping=1&currency_code=EUR" target="_blank"><?php _e("Please consider making a small donation!", "acf-extended-color-picker") ?></a></p>
			</div>
		<?php
	}
}
// initialize
new dhz_acf_plugin_extended_color_picker();

// class_exists check
endif;
	
?>