<?php

namespace Pusher;

use Pusher\Log\Logger;

class PusherServiceProvider implements ProviderInterface
{
    public function register(Pusher $pusher)
    {
        // Bind the Pusher instance itself to the container
        $pusher->bind('Pusher\Pusher', $pusher);

        // Initialise logger from log file
        $pusher->bind('Pusher\Log\Logger', function(Pusher $pusher) {
            $log = Logger::file(trailingslashit($pusher->pusherPath) . 'pusherlog');
            return $log;
        });

        // Use EDD for licensing
        $pusher->bind('Pusher\License\LicenseApi', 'Pusher\License\DashboardLicenseApi');

        // Singletons must be last for now, since they call "make()"
        $pusher->singleton('Pusher\Dashboard', 'Pusher\Dashboard');
    }
}
