<?php

namespace Pusher\Actions;

use Pusher\Theme;

class ThemeWasInstalled
{
    /**
     * @var Theme
     */
    public $theme;

    /**
     * @param Theme $theme
     */
    public function __construct(Theme $theme)
    {
        $this->theme = $theme;
    }
}
