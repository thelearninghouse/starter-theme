<?php

namespace Wpae\App\Migration;


class Notifications
{
    const NOTIFICATION_ON_PLUGINS_PAGE = 5;

    private $notifications = array();

    public function __construct()
    {
        $this->notifications[self::NOTIFICATION_ON_PLUGINS_PAGE] = \__('<br/><br/><strong>Important</strong> - Read This Before Installing
<br/><br/>
Some functionality in WP All Export Pro has been moved to add-ons: WooCommerce Add-On, User Add-On, and ACF Add-On. You\'ll need to install those add-ons to export that data.  There\'s a little more to the story, and you can read all about it here: <a href="http://www.wpallimport.com/2018/11/export-add-ons/" target="_blank">Export Add-Ons</a>
<br/><br/>
These add-ons are not free, but because you already own WP All Export Pro they have been added to your account, free of charge. You can download them here: <a href="http://www.wpallimport.com/portal/" target="_blank">http://www.wpallimport.com/portal/</a>
<br/><br/>
Please submit a support request if you run in to any problems: <a href="http://www.wpallimport.com/support/" target="_blank">http://www.wpallimport.com/support/</a>', \PMXE_Plugin::LANGUAGE_DOMAIN);

    }

    public function getNotification($key)
    {
        if (!isset($this->notifications[$key])) {
            throw new \Exception('The notification ' . $key . ' doesn\'t exist');
        } else {
            return $this->notifications[$key];
        }
    }

    public function outputNotification($key)
    {
        echo $this->getNotification($key);
    }


}