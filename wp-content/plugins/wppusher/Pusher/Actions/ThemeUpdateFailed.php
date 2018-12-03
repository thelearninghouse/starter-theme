<?php

namespace Pusher\Actions;

class ThemeUpdateFailed
{
    public $message;

    public function __construct($message) {
        $this->message = $message;
    }
}
