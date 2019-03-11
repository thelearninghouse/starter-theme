<?php

namespace Pusher\Actions;

use Pusher\Plugin;

class PluginWasUpdated
{
    /**
     * @var Plugin
     */
    public $plugin;

    /**
     * @param Plugin $plugin
     */
    public function __construct(Plugin $plugin)
    {
        $this->plugin = $plugin;
    }
}
