<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Plugin_Name
 * @subpackage Plugin_Name/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Plugin_Name
 * @subpackage Plugin_Name/admin
 * @author     Your Name <email@example.com>
 */
class Post_Summary_Admin
{

    /**
     * The ID of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string $plugin_name The ID of this plugin.
     */
    private $plugin_name;

    /**
     * The version of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string $version The current version of this plugin.
     */
    private $version;

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     * @param      string $plugin_name The name of this plugin.
     * @param      string $version The version of this plugin.
     */
    public function __construct($plugin_name, $version)
    {

        $this->plugin_name = $plugin_name;
        $this->version = $version;
        $this->admin_display = new Post_Summary_Admin_Display($plugin_name, $version);

    }

    /**
     * Register the stylesheets for the admin area.
     *
     * @since    1.0.0
     */
    public function enqueue_styles()
    {

        /**
         * This function is provided for demonstration purposes only.
         *
         * An instance of this class should be passed to the run() function
         * defined in Post_Summary_Loader as all of the hooks are defined
         * in that particular class.
         *
         * The Post_Summary_Loader will then create the relationship
         * between the defined hooks and the functions defined in this
         * class.
         */

        wp_enqueue_style($this->plugin_name, plugin_dir_url(__FILE__) . 'css/post-summary-admin.css', array(), $this->version, 'all');
        wp_enqueue_style('wp-color-picker');

    }

    /**
     * Register the JavaScript for the admin area.
     *
     * @since    1.0.0
     */
    public function enqueue_scripts()
    {

        /**
         * This function is provided for demonstration purposes only.
         *
         * An instance of this class should be passed to the run() function
         * defined in Post_Summary_Loader as all of the hooks are defined
         * in that particular class.
         *
         * The Post_Summary_Loader will then create the relationship
         * between the defined hooks and the functions defined in this
         * class.
         */

        wp_enqueue_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/post-summary-admin.js', array('jquery', 'wp-color-picker'), $this->version, false);

        // add the media scripts
        wp_enqueue_media();


    }

    /**
     * post summary meta box action
     */
    public function post_summary_meta_box_action()
    {
        add_meta_box('post-summary-custom', __('Post Summary', $this->plugin_name), array($this->admin_display, 'post_summary_meta_box_callback'), 'post');
        add_meta_box('post-summary-cta', __('Summary CTA', $this->plugin_name), array($this->admin_display, 'post_summary_cta_meta_box_callback'), 'post');
    }


    public function post_summary_settings_menu()
    {
        add_menu_page('TLDR Settings', 'TLDR Settings', 'manage_options', 'tldr', array($this->admin_display, 'post_summary_admin_settings_page'));

    }

    public function check_post_save_condition($nonce, $nonce_verifier, $post_id)
    {
        /*
         * We need to verify this came from the our screen and with proper authorization,
         * because save_post can be triggered at other times.
         */

        // Check if our nonce is set.
        if (!isset($_POST[$nonce])) {
            return false;
        }

        $nonce = $_POST[$nonce];

        // Verify that the nonce is valid.
        if (!wp_verify_nonce($nonce, $nonce_verifier)) {
            return false;
        }

        /*
         * If this is an autosave, our form has not been submitted,
         * so we don't want to do anything.
         */
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return false;
        }

        if ('page' == $_POST['post_type']) {
            return false;
        }


        if (!current_user_can('edit_post', $post_id)) {
            return false;
        }

        return true;
    }


    /**
     * Save Post summary
     * @param $post_id
     * @return bool
     */
    public function post_summary_save_post_summary($post_id)
    {
        if (!$this->check_post_save_condition('post_summary_meta_box_nonce', 'post_summary_meta_box', $post_id)) {
            return false;
        }

        $display_post_summary = isset($_POST['_do_not_display_summary']) ? true : false;
        update_post_meta($post_id, '_do_not_display_summary', $display_post_summary);
        update_post_meta($post_id, '_tldr_post_summary', $_POST['tldr_post_summary']);
        return true;

    }


    /**
     * Save CTA summary
     * @param $post_id
     * @return bool
     */
    public function post_summary_save_cta_summary($post_id)
    {
        if (!$this->check_post_save_condition('post_summary_cta_box_nonce', 'post_summary_cta_box', $post_id)) {
            return false;
        }

        $display_cta_summary = isset($_POST['_do_not_display_cta']) ? true : false;
        update_post_meta($post_id, '_do_not_display_cta', $display_cta_summary);
        update_post_meta($post_id, '_post_summary_cta_title', sanitize_text_field($_POST['_post_summary_cta_title']));
        update_post_meta($post_id, '_post_summary_landing_page_url', sanitize_text_field($_POST['_post_summary_landing_page_url']));
        update_post_meta($post_id, '_post_summary_short_description', $_POST['_post_summary_short_description']);
        update_post_meta($post_id, '_post_summary_short_description', $_POST['_post_summary_short_description']);
        update_post_meta($post_id, '_post_summary_button_text', sanitize_text_field($_POST['_post_summary_button_text']));
        update_post_meta($post_id, '_post_summary_uploaded_file_url', $_POST['_post_summary_uploaded_file_url']);


    }


    public function register_post_summary_settings()
    {
        register_setting('post_summary_tldr_settings_group', 'article_summary_ga_event_tracking');
        register_setting('post_summary_tldr_settings_group', 'full_article_button_text');
        register_setting('post_summary_tldr_settings_group', 'article_summary_button_text');
        register_setting('post_summary_tldr_settings_group', 'article_summary_tldr_branding');
        register_setting('post_summary_tldr_settings_group', 'article_summary_button_settings');
        register_setting('post_summary_tldr_settings_group', 'article_summary_button_background_color');
        register_setting('post_summary_tldr_settings_group', 'article_summary_button_font_color');
        register_setting('post_summary_tldr_settings_group', 'article_summary_button_font_size');
        register_setting('post_summary_tldr_settings_group', 'article_summary_button_font_style');
        register_setting('post_summary_tldr_settings_group', 'article_summary_button_width');
        register_setting('post_summary_tldr_settings_group', 'article_summary_overlay_color');
        register_setting('post_summary_tldr_settings_group', 'article_summary_overlay_opacity');
        register_setting('post_summary_tldr_settings_group', 'article_summary_button_other_font_style');
        register_setting('post_summary_tldr_settings_group', 'article_summary_cta_box_settings');
        register_setting('post_summary_tldr_settings_group', 'article_summary_delete_on_deactivate');

        register_setting('post_summary_tldr_settings_group', 'article_summary_cta_title_font');
        register_setting('post_summary_tldr_settings_group', 'article_summary_cta_title_other_font');
        register_setting('post_summary_tldr_settings_group', 'article_summary_cta_desc_font');
        register_setting('post_summary_tldr_settings_group', 'article_summary_cta_desc_other_font');

        register_setting('post_summary_tldr_settings_group', 'article_summary_cta_button_font');
        register_setting('post_summary_tldr_settings_group', 'article_summary_cta_button_other_font');

    }

}
