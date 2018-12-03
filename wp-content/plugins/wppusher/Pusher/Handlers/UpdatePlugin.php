<?php

namespace Pusher\Handlers;

use Pusher\Actions\PluginWasUpdated;
use Pusher\Commands\UpdatePlugin as UpdatePluginCommand;
use Pusher\Storage\PluginRepository;
use Pusher\WordPress\PluginUpgrader;

class UpdatePlugin
{
    /**
     * @var PluginRepository
     */
    private $plugins;

    /**
     * @var PluginUpgrader
     */
    private $upgrader;

    /**
     * @param PluginRepository $plugins
     * @param PluginUpgrader $upgrader
     */
    public function __construct(PluginRepository $plugins, PluginUpgrader $upgrader)
    {
        $this->plugins = $plugins;
        $this->upgrader = $upgrader;
    }

    public function handle(UpdatePluginCommand $command)
    {
        $plugin = $this->plugins->pusherPluginFromFile($command->file);

        $this->upgrader->upgradePlugin($plugin);

        do_action('wppusher_plugin_was_updated', new PluginWasUpdated($plugin));
    }
}
