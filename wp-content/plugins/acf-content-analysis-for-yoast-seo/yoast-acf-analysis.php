<?php
/**
 * @package YoastACFAnalysis
 */

/*
Plugin Name: ACF Content Analysis for Yoast SEO
Plugin URI: https://wordpress.org/plugins/acf-content-analysis-for-yoast-seo/
Description: Ensure that Yoast SEO analyzes all Advanced Custom Fields 4 and 5 content including Flexible Content and Repeaters.
Version: 2.0.1
Author: Thomas Kräftner, ViktorFroberg, marol87, pekz0r, angrycreative, Team Yoast
Author URI: http://angrycreative.se
License: GPL v3
Text Domain: acf-content-analysis-for-yoast-seo
Domain Path: /languages/
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'AC_SEO_ACF_ANALYSIS_PLUGIN_PATH' ) ) {
	define( 'AC_SEO_ACF_ANALYSIS_PLUGIN_SLUG', 'ac-yoast-seo-acf-content-analysis' );
	define( 'AC_SEO_ACF_ANALYSIS_PLUGIN_FILE', __FILE__ );
	define( 'AC_SEO_ACF_ANALYSIS_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
	define( 'AC_SEO_ACF_ANALYSIS_PLUGIN_URL', plugins_url( '', __FILE__ ) . '/' );
	define( 'AC_SEO_ACF_ANALYSIS_PLUGIN_NAME', untrailingslashit( plugin_basename( __FILE__ ) ) );
}

if ( is_file( AC_SEO_ACF_ANALYSIS_PLUGIN_PATH . '/vendor/autoload_52.php' ) ) {
	require AC_SEO_ACF_ANALYSIS_PLUGIN_PATH . '/vendor/autoload_52.php';

	$ac_yoast_seo_acf_analysis = new AC_Yoast_SEO_ACF_Content_Analysis();
	$ac_yoast_seo_acf_analysis->init();
}

/**
 * Loads translations.
 */
function yoast_acf_analysis_load_textdomain() {
	$plugin_path = str_replace( '\\', '/', AC_SEO_ACF_ANALYSIS_PLUGIN_PATH );
	$mu_path    = str_replace( '\\', '/', WPMU_PLUGIN_DIR );

	if ( 0 === stripos( $plugin_path, $mu_path ) ) {
		load_muplugin_textdomain( 'acf-content-analysis-for-yoast-seo', $plugin_path . '/languages' );
		return;
	}

	load_plugin_textdomain( 'acf-content-analysis-for-yoast-seo', false, $plugin_path . '/languages' );
}
add_action( 'plugins_loaded', 'yoast_acf_analysis_load_textdomain' );

/**
 * Triggers a message whenever the class is missing.
 */
if ( ! class_exists( 'AC_Yoast_SEO_ACF_Content_Analysis' ) && is_admin() ) {
	/* translators: %1$s resolves to ACF Content Analysis for Yoast SEO */
	$message = sprintf( __( '%1$s could not be loaded because of missing files.', 'acf-content-analysis-for-yoast-seo' ), 'ACF Content Analysis for Yoast SEO' );
	add_action(
		'admin_notices',
		create_function( '', "echo '<div class=\"error\"><p>$message</p></div>';" )
	);
}
