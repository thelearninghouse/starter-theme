<?php

namespace Pusher\Commands;

class UpdatePackageFromWebhook
{
    public $package;

    public function __construct($package)
    {
        $this->package = $package;
    }
}
