<?php

if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
    exit; // Exit if accessed directly
}

require 'wppusher.php';

$pusher->make('Pusher\Storage\Database')->uninstall();

// Deactivate license
$client = $pusher->make('Pusher\License\LicenseApi');

$key = get_option('wppusher_license_key', false);

if ($key) {
    $client->removeLicenseFomSite($key);
}

// Clean up
delete_option('hide-wppusher-welcome');
delete_option('wppusher_token');
delete_option('wppusher_license_key');
delete_option('gh_token');
delete_option('bb_user');
delete_option('bb_pass');
delete_option('bb_token');
delete_option('gl_base_url');
delete_option('gl_private_token');
delete_option('pusher_logging_enabled');
