<?php

namespace Pusher\ActionHandlers;

use Pusher\Actions\PluginWasEdited;
use Pusher\Dashboard;

class ShowMessageWhenPluginWasEdited
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

    public function handle(PluginWasEdited $action)
    {
        $this->dashboard->addMessage('Plugin changes was successfully saved.');
    }
}
