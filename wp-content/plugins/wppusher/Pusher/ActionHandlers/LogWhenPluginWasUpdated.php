<?php

namespace Pusher\ActionHandlers;

use Pusher\Actions\PluginWasUpdated;
use Pusher\Log\Logger;

class LogWhenPluginWasUpdated
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

    public function handle(PluginWasUpdated $action)
    {
        $this->log->info(
            "Plugin '{name}' was successfully updated. File: '{file}'",
            array('name' => $action->plugin->name, 'file' => $action->plugin->file)
        );
    }
}
