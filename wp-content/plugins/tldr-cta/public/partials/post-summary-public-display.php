<?php


class Post_Summary_Public_Display
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
     * logic to show summary
     * @return bool
     */
    public function logic_to_show_summary()
    {
        global $post;
        /**
         * does not meet our criteria
         */
        if (!is_single() || $post->post_type != 'post') {
            return false;
        }
        /**
         * globally show summary is turned off
         */
        return !get_post_meta($post->ID, '_do_not_display_summary', true);
    }

    /**
     * post summary button
     */
    public function get_button_html($position = 0)
    {
        $button_html = '<div class="summarytldrbtn position-' . $position . '" id="tldr-post-summary-buttons">';
        $button_html .= '<p class="summary-tldr-btn summary btn-position-' . $position . '">' . esc_attr(get_option('article_summary_button_text', TLDR_BUTTON_SUMMARY_TEXT)) . '</p><p class="summary-tldr-btn full-article  btn-position-' . $position . '">' . esc_attr(get_option('full_article_button_text', TLDR_BUTTON_FULL_TEXT)) . '</p>';
        $button_html .= '</div>';
        return $button_html;
    }


    /**
     * get CTA image HTML
     * @param $post_id
     * @return string
     */
    public function get_cta_image($post_id)
    {
        $cta_image = trim(get_post_meta($post_id, '_post_summary_uploaded_file_url', true));
        if (trim($cta_image) == '') {
            return '';
        }

        $html = '<div class="cta-thumbnail">';
        $html .= '<img src="' . $cta_image . '" />';
        $html .= '</div>';
        return $html;
    }

    /**
     * @param $post_id
     * @return string
     */
    public function get_summary_cta_box($post_id)
    {
        $do_not_display_cta = get_post_meta($post_id, '_do_not_display_cta', true);
        $cta_title = trim(get_post_meta($post_id, '_post_summary_cta_title', true));
        // do not meet the condition to display CTA box
        if ($do_not_display_cta || $cta_title == '') {
            return '';
        }

        $landing_page_url = get_post_meta($post_id, '_post_summary_landing_page_url', true);
        $short_description = get_post_meta($post_id, '_post_summary_short_description', true);
        $button_text = get_post_meta($post_id, '_post_summary_button_text', true);

        $cta_image = $this->get_cta_image($post_id);
        $class = ($cta_image == '') ? 'cta-has-no-image' : 'cta-has-image';

        $html = '';
        $html .= '<div class="tldr-summary-cta-box ' . $class . '">';
        $html .= $cta_image;
        $html .= '<div class="cta-description">';
        $html .= '<p class="title">' . $cta_title . '</p>';
        $html .= '<p class="short-desc">' . $short_description . '</p>';
        $html .= '<p class="calltoaction"><a href="' . $landing_page_url . '" target="_blank">' . $button_text . '</a></p>';
        $html .= '</div>';
        $html .= '</div>';
        return $html;
    }


    /**
     * get post summary
     * @param $post_id
     * @return string
     */
    public function get_post_summary($post_id)
    {
        $content = get_post_meta($post_id, '_tldr_post_summary', true);
        if (function_exists('wpautop')) {
            $content = wpautop($content);
        }
        $summary = '<div class="tldr-sumamry">' . $content . '</div>';
        $summary_cta = $this->get_summary_cta_box($post_id);
        $powerby = '<div class="powerby">Powered by <a href="http://www.matthewbarby.com/tldr" target="_blank">TLDR</a></div>';
        $tldr_branding = get_option('article_summary_tldr_branding', false);
        if ($tldr_branding) {
            $powerby = '';
        }

        return '<div id="tldr-post-summary">' . $summary . $summary_cta . '</div>' . $powerby;
    }

    /**
     * add the summary
     * @param $content
     * @return string
     */
    public function add_summary_in_post($content)
    {
        global $post;
        $button_position = get_option('article_summary_button_settings', 0);
        $button_html = $this->get_button_html($button_position);
        $content = '<div id="tldr-post-content">' . $content . '</div>';
        $post_summary = $this->get_post_summary($post->ID);

        // button position 3 means at the bottom
        return ($button_position == 3) ? $content . $post_summary . $button_html : $button_html . $content . $post_summary;
    }

}
