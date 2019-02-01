<?php
/*
Plugin Name: Title and Nofollow For Links
Plugin URI: http://wordpress.org/plugins/title-and-nofollow-for-links/
Description: The plugin adds a title and a rel="nofollow" checkbox to the insert link popup box.
Version: 1.07
Author: WPKube
Author URI: https://www.wpkube.com/
Text Domain: title-and-nofollow-for-links
*/ 

function tnl_add_nofollow() {
    wp_deregister_script('wplink');
    wp_register_script('wplink',  plugins_url( '/inc/nofollow.min.js', __FILE__ ), array('jquery'), '1.07', 1);
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

function tnl_add_nofollow_early() {

    if ( ! wp_script_is( 'wplink', 'registered' ) ) {
        return;
    }

    wp_deregister_script('wplink');
    wp_register_script('wplink',  plugins_url( '/inc/nofollow.min.js', __FILE__ ), array('jquery', 'wp-a11y'), '1.07', 1);
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
add_action('admin_enqueue_scripts', 'tnl_add_nofollow_early', 99999 );

function title_nofollow_links_setup(){
    load_plugin_textdomain('title-and-nofollow-for-links');
}
add_action('init', 'title_nofollow_links_setup');

