<?php

namespace Pusher\Handlers;

use Pusher\Actions\ThemeWasUpdated;
use Pusher\Commands\UpdateTheme as UpdateThemeCommand;
use Pusher\Storage\ThemeRepository;
use Pusher\WordPress\ThemeUpgrader;

class UpdateTheme
{
    /**
     * @var ThemeRepository
     */
    private $themes;

    /**
     * @var ThemeUpgrader
     */
    private $upgrader;

    /**
     * @param ThemeRepository $themes
     * @param ThemeUpgrader $upgrader
     */
    public function __construct(ThemeRepository $themes, ThemeUpgrader $upgrader)
    {
        $this->themes = $themes;
        $this->upgrader = $upgrader;
    }

    public function handle(UpdateThemeCommand $command)
    {
        $theme = $this->themes->pusherThemeFromStylesheet($command->stylesheet);

        $this->upgrader->upgradeTheme($theme);

        do_action('wppusher_theme_was_updated', new ThemeWasUpdated($theme));
    }
}
