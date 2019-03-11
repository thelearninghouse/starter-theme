<?php

namespace Pusher\ActionHandlers;

use Pusher\Actions\ThemeWasUpdated;
use Pusher\Log\Logger;

class LogWhenThemeWasUpdated
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
     * @param ThemeWasUpdated $action
     */
    public function handle(ThemeWasUpdated $action)
    {
        $this->log->info(
            "Theme '{name}' was successfully updated.",
            array('name' => $action->theme->name)
        );
    }
}
