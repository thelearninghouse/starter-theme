<?php

/**
 * Fired during plugin deactivation
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Plugin_Name
 * @subpackage Plugin_Name/includes
 */

/**
 * Fired during plugin deactivation.
 *
 * This class defines all code necessary to run during the plugin's deactivation.
 *
 * @since      1.0.0
 * @package    Plugin_Name
 * @subpackage Plugin_Name/includes
 * @author     Your Name <email@example.com>
 */
class Post_Summary_Deactivator
{

    /**
     * Short Description. (use period)
     *
     * Long Description.
     *
     * @since    1.0.0
     */
    public static function deactivate()
    {
        $delete_settings = get_option('article_summary_delete_on_deactivate', false);
        if ($delete_settings != false) {
            delete_option('article_summary_ga_event_tracking');
            delete_option('full_article_button_text');
            delete_option('article_summary_button_text');
            delete_option('article_summary_enable_summary');
            delete_option('article_summary_button_settings');
            delete_option('article_summary_button_background_color');
            delete_option('article_summary_button_font_color');
            delete_option('article_summary_button_font_size');
            delete_option('article_summary_button_font_style');
            delete_option('article_summary_button_width');
            delete_option('article_summary_overlay_color');
            delete_option('article_summary_overlay_opacity');
            delete_option('article_summary_button_other_font_style');
            delete_option('article_summary_cta_box_settings');
            delete_option('article_summary_delete_on_deactivate');

            delete_option('article_summary_cta_title_other_font');
            delete_option('article_summary_cta_title_font');
            delete_option('article_summary_cta_desc_font');
            delete_option('article_summary_cta_desc_other_font');

            delete_option('article_summary_cta_button_other_font');
            delete_option('article_summary_cta_button_font');

        }
    }

}
