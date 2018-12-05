<?php

namespace Pusher\ActionHandlers;

use Pusher\Actions\ThemeWasEdited;
use Pusher\Dashboard;

class ShowMessageWhenThemeWasEdited
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

    public function handle(ThemeWasEdited $action)
    {
        $this->dashboard->addMessage('Theme changes was successfully saved.');
    }
}
