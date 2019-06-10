<?php

namespace Wpae\App\Migration;


class Migration
{
    public function __construct() {
        // ensure function is available ( admin_init has fired )
        if (!function_exists('is_plugin_active')) { 
            include_once(ABSPATH.'wp-admin/includes/plugin.php');
        }
    }

    public function addonAffectedExportsExist($postType)
    {
        $exports = new \PMXE_Export_List();
        $exports->getBy('parent_id', 0)->convertRecords();
        $hasAffectedExports = false;

        foreach ($exports as $export) {

            if(is_array($export['options']['cpt']) && in_array($postType, $export['options']['cpt']) || $export['options']['cpt'] == $postType) {
              if (\PMXE_Plugin::isExisistingExportById('1.5.4', $export['id'])) {
                    $hasAffectedExports = true;
                }
            }
        }

        return $hasAffectedExports;
    }

    public function acfAffectedExportsExist()
    {
        global $wpdb;
        $results = $wpdb->get_var("SELECT COUNT(*) FROM {$wpdb->prefix}pmxe_exports WHERE `options` LIKE '%ACF Add-On Pro%'");
        $results = !!$results;

        return $results;

    }

    public function oldCustomer()
    {
        $exports = new \PMXE_Export_List();
        $exports->getBy('parent_id', 0);

        foreach ($exports as $export) {
            if (\PMXE_Plugin::isExisistingExportById('1.5.4', $export['id'])) {
                return true;
            }
        }

        return false;
    }

    public function isUserAddonActive()
    {
        $isUserAddonActive = \is_plugin_active('wpai-user-add-on/wpai-user-add-on.php');

        if(!$isUserAddonActive) {
            return false;
        }

        if(!defined('PMUI_VERSION')) {
            return false;
        }

        if(version_compare('1.1.1', PMUI_VERSION) == -1) {
            return true;
        } else {
            return false;
        }
    }

    public function isWoocommerceAddonActive()
    {
        $isUserAddonActive = \is_plugin_active('wpai-woocommerce-add-on/wpai-woocommerce-add-on.php');

        if(!$isUserAddonActive) {
            return false;
        }

        if(!defined('PMUI_VERSION')) {
            return false;
        }

        if(version_compare('3.0.7', PMWI_VERSION) == -1) {
            return true;
        } else {
            return false;
        }
    }
    public function isAcfAddonActive()
    {
        $isUserAddonActive = \is_plugin_active('wpai-acf-add-on/wpai-acf-add-on.php');

        if(!$isUserAddonActive) {
            return false;
        }

        if(!defined('PMAI_VERSION')) {
            return false;
        }

        if(version_compare('3.1.9', PMAI_VERSION) == -1) {
            return true;
        } else {
            return false;
        }
    }

    public function isWpaeAtTheNewVersion()
    {
        return strpos(PMXE_VERSION, 'beta') === false && version_compare('1.5.4', PMXE_VERSION) === 0;
    }

}