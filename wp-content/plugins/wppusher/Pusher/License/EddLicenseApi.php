<?php

namespace Pusher\License;

class EddLicenseApi implements LicenseApi
{
    private $baseUrl = 'https://checkout.wppusher.com/';

    public function getLicenseKey($key)
    {
        if ( ! $key or $key === '') {
            return false;
        }

        $result = wp_remote_get($this->baseUrl . '?edd_action=check_license&item_name=WP+Pusher&license=' . $key . '&url=' . home_url());

        if (is_wp_error($result)) {
            add_settings_error('invalid-license-server-message', '', 'We couldn\'t check your license. Are you connected to the Internet?');
        }

        $code = wp_remote_retrieve_response_code($result);

        if ($code !== 200) {
            return false;
        }

        $body = wp_remote_retrieve_body($result);

        $array = json_decode($body, true);

        if ( ! $array) {
            return false;
        }

        if ($array['license'] === 'invalid') {
            return false;
        }

        if ($array['license'] !== 'active' and $array['license'] !== 'expired') {
            $key = $this->registerKeyForSite($key);

            if ( ! $key) {
                return false;
            }
        }

        // For backwards compatability:
        $array['token'] = $key;

        return LicenseKey::fromEddResponseArray($array);
    }

    public function registerKeyForSite($key)
    {
        // Try to register new license
        $args = array(
            'edd_action' => 'activate_license',
            'item_name' => 'WP+Pusher',
            'license' => $key,
            'url' => home_url(),
        );
        $result = wp_remote_get(add_query_arg($args, $this->baseUrl));

        // Error handling
        $body = wp_remote_retrieve_body($result);
        $array = json_decode($body, true);

        if ( ! $array) {
            return false;
        }

        if (isset($array['error']) and $array['error'] === 'no_activations_left') {
            add_settings_error('invalid-license-key', '', 'This license has reached the limit of active installs.');
            return false;
        }

        if ($array['license'] !== 'valid') {
            return false;
        }

        return $key;
    }

    public function removeLicenseFomSite($key)
    {
        $args = array(
            'edd_action' => 'deactivate_license',
            'item_name' => 'WP+Pusher',
            'license' => $key,
        );

        $result = wp_remote_get(add_query_arg($args, $this->baseUrl));
        $status = wp_remote_retrieve_response_code($result);

        if ($status == 200) {
            return false;
        }

        add_settings_error('invalid-license-server-message', '', 'License could not be deleted from site. Please contact support.');

        return $key;
    }
}
