<?php


class Post_Summary_Admin_Display
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

    }


    /**
     * @param $post
     * @return string
     */
    public function post_summary_meta_box_callback($post)
    {
        wp_nonce_field('post_summary_meta_box', 'post_summary_meta_box_nonce');
        $do_not_display_summary = get_post_meta($post->ID, '_do_not_display_summary', true);
        $post_summary_content = get_post_meta($post->ID, '_tldr_post_summary', true);
        require_once dirname(__FILE__) . "/templates/post-summary.tpl.php";
    }


    /**
     * s
     * @param $post
     */
    public function post_summary_cta_meta_box_callback($post)
    {
        wp_nonce_field('post_summary_cta_box', 'post_summary_cta_box_nonce');
        $cta_summary = get_post_meta($post->ID, '_do_not_display_cta', true);
        $cta_title = get_post_meta($post->ID, '_post_summary_cta_title', true);
        $landing_page_url = get_post_meta($post->ID, '_post_summary_landing_page_url', true);
        $short_description = get_post_meta($post->ID, '_post_summary_short_description', true);
        $button_text = get_post_meta($post->ID, '_post_summary_button_text', true);
        $cta_image = get_post_meta($post->ID, '_post_summary_uploaded_file_url', true);

        require_once dirname(__FILE__) . "/templates/post-summary-cta.tpl.php";
    }


    /**
     * admins settings page
     */
    public function post_summary_admin_settings_page()
    {
        require_once dirname(__FILE__) . "/templates/admin-settings.tpl.php";
    }


}
