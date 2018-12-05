<?php

namespace Pusher\Handlers;

use Pusher\Actions\ThemeWasUnlinked;
use Pusher\Commands\UnlinkTheme as UnlinkThemeCommand;
use Pusher\Storage\ThemeRepository;

class UnlinkTheme
{
    /**
     * @var ThemeRepository
     */
    private $themes;

    /**
     * @param ThemeRepository $themes
     */
    public function __construct(ThemeRepository $themes)
    {
        $this->themes = $themes;
    }

    public function handle(UnlinkThemeCommand $command)
    {
        $this->themes->unlink($command->stylesheet);

        do_action('wppusher_theme_was_unlinked', new ThemeWasUnlinked);
    }
}
