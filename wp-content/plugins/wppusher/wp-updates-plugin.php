<?php

if( !class_exists('WPUpdatesPluginUpdater_957') ) {
    class WPUpdatesPluginUpdater_957 {
    
        var $api_url;
        var $plugin_id = 957;
        var $plugin_path;
        var $plugin_slug;
    
        function __construct($api_url, $plugin_path) {
            $this->api_url = $api_url;
            $this->plugin_path = $plugin_path;

            if (strstr($plugin_path, '/')) {
                list ($t1, $t2) = explode('/', $plugin_path);
            } else {
                $t2 = $plugin_path;
            }

            $this->plugin_slug = str_replace('.php', '', $t2);

            add_filter('pre_set_site_transient_update_plugins', array(&$this, 'check_for_update'));
            add_filter('plugins_api', array(&$this, 'plugin_api_call'), 10, 3);
        }
    
        function check_for_update($transient) {
            if (empty($transient->checked)) {
                return $transient;
            }

            if (! isset($transient->checked[$this->plugin_path])) {
                return $transient;
            }

            $raw_response = wp_remote_get($this->api_url . '?v=' . $transient->checked[$this->plugin_path]);

            $response = null;

            if ( ! is_wp_error($raw_response) && ($raw_response['response']['code'] == 200) ) {
                $response = json_decode($raw_response['body']);
            }

            if (is_object($response) && ! empty($response)) {
                // Feed the update data into WP updater
                $transient->response[$this->plugin_path] = $response;
                return $transient;
            }

            // Check to make sure there is not a similarly named plugin in the wordpress.org repository
            if (isset($transient->response[$this->plugin_path])) {
                if (strpos($transient->response[$this->plugin_path]->package, 'wordpress.org') !== false) {
                    unset($transient->response[$this->plugin_path]);
                }
            }

            return $transient;
        }
    
        function plugin_api_call($def, $action, $args) {
            if ( ! isset($args->slug) || $args->slug != $this->plugin_slug) {
                return $def;
            }

            $raw_response = wp_remote_get($this->api_url);

            if (is_wp_error($raw_response)) {
                $res = new WP_Error('plugins_api_failed', __('An Unexpected HTTP Error occurred during the API request.</p> <p><a href="?" onclick="document.location.reload(); return false;">Try again</a>'), $raw_response->get_error_message());
            } else {
                $res = json_decode($raw_response['body']);
                if ($res === false) {
                    $res = new WP_Error('plugins_api_failed', __('An unknown error occurred'), $raw_response['body']);
                }
            }

            $res->sections = (array) $res->sections;

            return $res;
        }
    }
}