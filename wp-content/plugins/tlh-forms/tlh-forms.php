<?php
/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://www.learninghouse.com
 * @package           Tlh_Forms
 *
 * @wordpress-plugin
 * Plugin Name:       TLH Forms
 * Plugin URI:        https://github.com/thelearninghouse/tlh-forms
 * Description:       Works with TLH Forms. View documentation here (link here).
 * Version:           0.3.5
 * Author:            David Royer
 * Author URI:        https://www.davidroyer.me/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       tlh-forms
 * Domain Path:       /languages
 */
// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}
define( 'PLUGIN_NAME_VERSION', '0.3.5' );
 /**
	* CURRENT SETUP BELOW
  */
require_once plugin_dir_path( __FILE__ ) . 'pluginFiles/plugin-helpers.php';
require_once plugin_dir_path( __FILE__ ) . 'frontend/frontend.php';
require_once plugin_dir_path( __FILE__ ) . 'admin/admin.php';
/**
 * END OF SETUP BELOW
 */
function activate_tlh_forms() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-tlh-forms-activator.php';
	Tlh_Forms_Activator::activate();
}
/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-tlh-forms-deactivator.php
 */
function deactivate_tlh_forms() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-tlh-forms-deactivator.php';
	Tlh_Forms_Deactivator::deactivate();
}
register_activation_hook( __FILE__, 'activate_tlh_forms' );
register_deactivation_hook( __FILE__, 'deactivate_tlh_forms' );
/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-tlh-forms.php';
/**
 * Add REST API support to an already registered post type.
 */
add_action( 'init', 'tlh_forms_custom_post_type_rest_support', 25 );
function tlh_forms_custom_post_type_rest_support() {
	global $wp_post_types;
	//be sure to set this to the name of your post type!
	$customPostTypesArray = ['degrees', 'landing-pages', 'grp_pages'];
	global $post;
	$args = array(
		'public'   => true,
		'_builtin' => false
	);
	$postTypes = get_post_types($args);
	foreach ($postTypes as $post_type_name) {
		if( isset( $wp_post_types[ $post_type_name ] ) ) {
			$wp_post_types[$post_type_name]->show_in_rest = true;
			// Optionally customize the rest_base or controller class
			$wp_post_types[$post_type_name]->rest_base = $post_type_name;
			$wp_post_types[$post_type_name]->rest_controller_class = 'WP_REST_Posts_Controller';
		}
	}
}