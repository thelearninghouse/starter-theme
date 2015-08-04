<?php
/*
Plugin Name: Parallax Gravity - Landing Page Builder
Plugin URI: http://sakuraplugins.com/
Description: Parallax Gravity, Create stunning landing pages.
Author: SakuraPlugins
Version: 2.2.0
Author URI: http://sakuraplugins.com/
*/
define('GRP_TEMPPATH', plugins_url('', __FILE__));
define('GRP_JS_ADMIN', GRP_TEMPPATH.'/com/sakuraplugins/js');
define('GRP_JS', GRP_TEMPPATH.'/js');
define('GRP_CLASS_PATH', plugin_dir_path(__FILE__));
define('GRP_PLUGIN_TEXTDOMAIN', 'grp_portfolio');
define('GRP_POST_SLUG', 'grp_pages');
define('GRP_POST_CUSTOM_META', 'grp_pages_post_options');
define('GRP_POST_OPTION_GROUP', 'grp_pages_option_group');
define('GRP_POST_REWRITE', 'gravity-landing');
define('GRID_POST_CATEGORIES', 'grp_pages_categories');
define('GRAVITY_FILE', __FILE__);
define('DEFAULT_REWRITE', 'gravity-landing');


require_once(GRP_CLASS_PATH.'/com/sakuraplugins/php/plugin_core.php');
$grp_plugin_core = new GravityCore();
$grp_plugin_core->start(array('PLUGIN_FILE'=>__FILE__));


?>