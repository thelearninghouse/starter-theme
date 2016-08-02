<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              http://solvease.com
 * @since             1.0.0
 * @package           TLDR_Post_Sumamry
 *
 * @wordpress-plugin
 * Plugin Name:       TLDR
 * Plugin URI:        http://www.matthewbarby.com/tldr
 * Description:       Add summaries to your content with targeted CTAs. Increase leads whilst improving user experience.
 * Version:           1.1.2
 * Author:            Matthew Barby
 * Author URI:        http://www.matthewbarby.com
 * Text Domain:       post-summary
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}


define('TLDR_GA_EVENT_TRACK', false);

/**
 * default settings
 */
define('TLDR_BUTTON_FONT_SIZE', '16');
/**
 * width in px
 */
define('TLDR_BUTTON_WIDTH', '220');
define('TLDR_BUTTON_BG_COLOR', '#34b0d4');
define('TLDR_BUTTON_FONT_COLOR', '#ffffff');
define('TLDR_BUTTON_FULL_TEXT', 'Show Full Article');
define('TLDR_BUTTON_SUMMARY_TEXT', 'Show Article Summary');

/**
 * CTA Settings
 */
define('TLDR_CTA_TITLE_FONT_SIZE', '24');
define('TLDR_CTA_DESC_FONT_SIZE', '16');
define('TLDR_CTA_BTN_FONT_SIZE', '22');


define('TLDR_CTA_BG_COLOR', '#f8f8f8');
define('TLDR_CTA_FONT_COLOR', '#4f4f4f');
define('TLDR_CTA_BTN_BG', '#AF0909');
define('TLDR_CTA_BTN_FNT_COLOR', '#FFFFFF');

define('TLDR_CTA_IMG_WIDTH', '35');
define('TLDR_CTA_IMG_WIDTH_OPTION', '%');

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-post-summary-activator.php
 */
function activate_plugin_name()
{
    require_once plugin_dir_path(__FILE__) . 'includes/class-post-summary-activator.php';
    Post_Summary_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-post-summary-deactivator.php
 */
function deactivate_plugin_name()
{
    require_once plugin_dir_path(__FILE__) . 'includes/class-post-summary-deactivator.php';
    Post_Summary_Deactivator::deactivate();
}

register_activation_hook(__FILE__, 'activate_plugin_name');
register_deactivation_hook(__FILE__, 'deactivate_plugin_name');

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path(__FILE__) . 'includes/class-post-summary.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_plugin_name()
{

    $plugin = new Plugin_Name();
    $plugin->run();

}

run_plugin_name();
