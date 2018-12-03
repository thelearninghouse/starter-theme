<?php

namespace Pusher\ActionHandlers;

use Pusher\Actions\PluginWasUnlinked;
use Pusher\Dashboard;

class ShowMessageWhenPluginWasUnlinked
{
    /**
     * @var Dashboard
     */
    private $dashboard;

    /**
     * @param Dashboard $dashboard
     */
    public function __construct(Dashboard $dashboard)
    {
        $this->dashboard = $dashboard;
    }

    /**
     * @param PluginWasUnlinked $action
     */
    public function handle(PluginWasUnlinked $action)
    {
        $this->dashboard->addMessage("Plugin was unlinked from WP Pusher. You can re-connect it with 'Dry run'.");
    }
}
