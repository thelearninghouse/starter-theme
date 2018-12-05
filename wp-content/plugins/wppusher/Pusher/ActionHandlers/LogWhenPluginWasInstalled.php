<?php

namespace Pusher\ActionHandlers;

use Pusher\Actions\PluginWasInstalled;
use Pusher\Log\Logger;

class LogWhenPluginWasInstalled
{
    /**
     * @var Logger
     */
    private $log;

    /**
     * @param Logger $log
     */
    public function __construct(Logger $log)
    {
        $this->log = $log;
    }

    /**
     * @param PluginWasInstalled $action
     */
    public function handle(PluginWasInstalled $action)
    {
        $this->log->info(
            "Plugin '{name}' was successfully installed. File: '{file}'",
            array('name' => $action->plugin->name, 'file' => $action->plugin->file)
        );
    }
}
