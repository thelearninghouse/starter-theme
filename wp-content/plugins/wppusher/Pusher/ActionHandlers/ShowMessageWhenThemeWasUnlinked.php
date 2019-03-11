<?php

namespace Pusher\ActionHandlers;

use Pusher\Actions\ThemeWasUnlinked;
use Pusher\Dashboard;

class ShowMessageWhenThemeWasUnlinked
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

    public function handle(ThemeWasUnlinked $action)
    {
        $this->dashboard->addMessage("Theme was unlinked from WP Pusher. You can re-connect it with 'Dry run'.");
    }
}
