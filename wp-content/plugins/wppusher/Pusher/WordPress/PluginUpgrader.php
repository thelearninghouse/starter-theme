<?php

namespace Pusher\WordPress;

include_once(ABSPATH . 'wp-admin/includes/plugin.php');
include_once(ABSPATH . 'wp-admin/includes/file.php');
include_once(ABSPATH . 'wp-admin/includes/class-wp-upgrader.php');
include_once(ABSPATH . 'wp-admin/includes/misc.php');

use Plugin_Upgrader;
use Pusher\Log\Logger;
use Pusher\Plugin;

class PluginUpgrader extends Plugin_Upgrader
{
    public $plugin;

    /**
     * @param PluginUpgraderSkin $skin
     */
    public function __construct(PluginUpgraderSkin $skin)
    {
        parent::__construct($skin);
    }

    public function installPlugin(Plugin $plugin)
    {
        add_filter('upgrader_source_selection', array($this, 'upgraderSourceSelectionFilter'), 10, 3);

        $this->plugin = $plugin;

        $zipUrl = apply_filters('wppusher_get_zip_url', $this->plugin->repository->getZipUrl(), $plugin);

        parent::install($zipUrl);

        // Make sure we get out of maintenance mode
        $this->maintenance_mode(false);
    }

    public function upgradePlugin(Plugin $plugin)
    {
        $reActivatePlugin = is_plugin_active((string) $plugin);
        $reActivatePluginNetworkWide = is_plugin_active_for_network((string) $plugin);

        add_filter("pre_site_transient_update_plugins", array($this, 'preSiteTransientUpdatePluginsFilter'), 10, 3);
        add_filter('upgrader_source_selection', array($this, 'upgraderSourceSelectionFilter'), 10, 3);

        $this->plugin = $plugin;
        parent::upgrade($this->plugin->file);

        if ($reActivatePlugin) {
            if ( ! is_plugin_active((string) $plugin))
                activate_plugin($plugin, null, $network_wide = $reActivatePluginNetworkWide, $silent = true);
        }

        // Make sure we get out of maintenance mode
        $this->maintenance_mode(false);
    }

    public function upgraderSourceSelectionFilter($source, $remote_source, $upgrader)
    {
        if ($upgrader->plugin->hasSubdirectory()) {
            $source = trailingslashit($source) . trailingslashit($upgrader->plugin->getSubdirectory());
        }

        $newSource = trailingslashit($remote_source) . trailingslashit($upgrader->plugin->getSlug());

        global $wp_filesystem;

        if ( ! $wp_filesystem->move($source, $newSource, true))
            return new \WP_Error();

        return $newSource;
    }

    public function preSiteTransientUpdatePluginsFilter($transient)
    {
        $zipUrl = apply_filters('wppusher_get_zip_url', $this->plugin->repository->getZipUrl(), $this->plugin);

        $options = array('package' => $zipUrl);
        $transient->response[$this->plugin->file] = (object) $options;

        return $transient;
    }
}
