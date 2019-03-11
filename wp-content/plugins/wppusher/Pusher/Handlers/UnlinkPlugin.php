<?php

namespace Pusher\Handlers;

use Pusher\Actions\PluginWasUnlinked;
use Pusher\Commands\UnlinkPlugin as UnlinkPluginCommand;
use Pusher\Storage\PluginRepository;

class UnlinkPlugin
{
    /**
     * @var PluginRepository
     */
    private $plugins;

    /**
     * @param PluginRepository $plugins
     */
    public function __construct(PluginRepository $plugins)
    {
        $this->plugins = $plugins;
    }

    public function handle(UnlinkPluginCommand $command)
    {
        $this->plugins->unlink($command->file);

        do_action('wppusher_plugin_was_unlinked', new PluginWasUnlinked);
    }
}
