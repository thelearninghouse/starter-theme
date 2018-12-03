<?php

namespace Pusher\Actions;

use Pusher\Theme;

class ThemeWasEdited
{
    /**
     * @var Theme
     */
    public $theme;

    public function __construct(Theme $theme) {
        $this->theme = $theme;
    }
}
