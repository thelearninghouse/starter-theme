<?php
/*
Plugin Name: Title and Nofollow For Links
Plugin URI: http://wordpress.org/plugins/title-and-nofollow-for-links/
Description: The plugin adds a title and a rel="nofollow" checkbox to the insert link popup box.
Version: 1.01
Author: Flector
Author URI: https://profiles.wordpress.org/flector#content-plugins
License: GPLv2
License URI: http://www.opensource.org/licenses/GPL-2.0
*/ 

function tnl_add_nofollow() {
    wp_deregister_script('wplink');
    wp_register_script('wplink',  plugins_url( '/inc/nofollow.min.js', __FILE__ ), array('jquery'), false, 1);
    wp_enqueue_script('wplink');
    wp_localize_script('wplink', 'wpLinkL10n', array(
        'title' => __('Insert/edit link'),
        'update' => __('Update'),
        'save' => __('Add Link'),
        'noTitle' => __('(no title)'),
        'labelTitle' => __( 'Title' ),
        'noMatchesFound' => __('No results found.'),
        'noFollow' => __(' Add <code>rel="nofollow"</code> to link', 'title-and-nofollow-for-links')
    ));
}
add_action('wp_enqueue_editor', 'tnl_add_nofollow', 99999);

function title_nofollow_links_setup(){
    load_plugin_textdomain('title-and-nofollow-for-links', null, dirname( plugin_basename( __FILE__ ) ) . '/lang' );
}
add_action('init', 'title_nofollow_links_setup');

?>