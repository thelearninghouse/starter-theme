<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Plugin_Name
 * @subpackage Plugin_Name/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Plugin_Name
 * @subpackage Plugin_Name/public
 * @author     Your Name <email@example.com>
 */
class Post_Summary_Public
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
     * @param      string $plugin_name The name of the plugin.
     * @param      string $version The version of this plugin.
     */
    public function __construct($plugin_name, $version)
    {

        $this->plugin_name = $plugin_name;
        $this->version = $version;
        $this->public_display = new Post_Summary_Public_Display($plugin_name, $version);

    }

    /**
     * Register the stylesheets for the public-facing side of the site.
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

        wp_enqueue_style($this->plugin_name, plugin_dir_url(__FILE__) . 'css/post-summary-public.css', array(), $this->version, 'all');

    }

    /**
     * Register the JavaScript for the public-facing side of the site.
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

        wp_enqueue_script($this->plugin_name . "-scrollto", plugin_dir_url(__FILE__) . 'js/jquery.scrollTo.min.js', array('jquery'), $this->version, false);
        wp_register_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/post-summary-public.js', array('jquery'), $this->version, false);


    }


    public function convert_ga_other_font($var_name, $other_font_family)
    {
        global $cta_google_fonts;
        $font_family = trim(esc_attr(get_option($var_name, '')));
        if ($font_family == '' || $font_family == false) {
            return false;
        }


        if ($font_family == 'other') {
            $font_family = trim(esc_attr(get_option($other_font_family, '')));
            return 'font-family:' . str_replace('&#039;', '\'', $font_family);
        }

        $google_font_parts = explode("|", $font_family);
        if (!empty($google_font_parts) && count($google_font_parts) == 2) {
            $google_font = $google_font_parts[1];
            if (!in_array($google_font, $cta_google_fonts)) {
                $cta_google_fonts[] = $google_font;
            }
            return str_replace('&#039;', '\'', $google_font_parts[0]);
        }

        return false;

    }

    public function get_cta_box_css()
    {
        global $cta_google_fonts;
        $style = '';
        global $post;
        $do_not_display_cta = get_post_meta($post->ID, '_do_not_display_cta', true);
        $cta_title = trim(get_post_meta($post->ID, '_post_summary_cta_title', true));
        // do not meet the condition to display CTA box
        if ($do_not_display_cta || $cta_title == '') {
            return $style;
        }
        $cta_box_settings = get_option('article_summary_cta_box_settings', array());
        $box_bg_color = (isset($cta_box_settings['box_bg']) && trim($cta_box_settings['box_bg']) != '') ? $cta_box_settings['box_bg'] : TLDR_CTA_BG_COLOR;
        $box_bg_font_color = (isset($cta_box_settings['font_color']) && trim($cta_box_settings['font_color']) != '') ? $cta_box_settings['font_color'] : TLDR_CTA_FONT_COLOR;
        $button_bg = (isset($cta_box_settings['btn_bg']) && trim($cta_box_settings['btn_bg']) != '') ? $cta_box_settings['btn_bg'] : TLDR_CTA_BTN_BG;
        $button_font_color = (isset($cta_box_settings['btn_font_color']) && trim($cta_box_settings['btn_font_color']) != '') ? $cta_box_settings['btn_font_color'] : TLDR_CTA_BTN_FNT_COLOR;


        $cta_title_font_size = (isset($cta_box_settings['cta_title_font_size']) && intval($cta_box_settings['cta_title_font_size']) >= 0) ? intval($cta_box_settings['cta_title_font_size']) : TLDR_CTA_TITLE_FONT_SIZE;
        $cta_desc_font_size = (isset($cta_box_settings['cta_desc_font_size']) && intval($cta_box_settings['cta_desc_font_size']) >= 0) ? intval($cta_box_settings['cta_desc_font_size']) : TLDR_CTA_DESC_FONT_SIZE;
        $cta_button_font_size = (isset($cta_box_settings['cta_btn_font_size']) && intval($cta_box_settings['cta_btn_font_size']) >= 0) ? intval($cta_box_settings['cta_btn_font_size']) : TLDR_CTA_BTN_FONT_SIZE;

        $cta_image_min_width_option = (isset($cta_box_settings['cta_image_min_width_option']) && $cta_box_settings['cta_image_min_width_option'] != '') ? $cta_box_settings['cta_image_min_width_option'] : TLDR_CTA_IMG_WIDTH_OPTION;
        $cta_image_min_width = (isset($cta_box_settings['cta_image_min_width']) && $cta_box_settings['cta_image_min_width'] != '') ? $cta_box_settings['cta_image_min_width'] : TLDR_CTA_IMG_WIDTH;

        $style .= '.tldr-summary-cta-box{';
        $style .= 'background:' . $box_bg_color . ';';
        if (isset($cta_box_settings['cta_box_border']) && $cta_box_settings['cta_box_border'] != false) {
            $thickness = (int)$cta_box_settings['border_thickness'];
            $color = $cta_box_settings['border_color'];
            $border = 'border:' . $thickness . 'px solid';
            $border .= ($color == '') ? ':' : ' ' . $color . ';';
            $style .= $border;
        }
        $style .= 'color:' . $box_bg_font_color . ';';
        $style .= '}';
        $style .= '.tldr-summary-cta-box .cta-description .calltoaction a{';
        $style .= 'background:' . $button_bg . ';';
        $style .= 'color:' . $button_font_color . ';';

        if ($cta_button_font_size > 0) {
            $style .= 'font-size:' . $cta_button_font_size . 'px;';
        }

        $cta_button_font = $this->convert_ga_other_font('article_summary_cta_button_font', 'article_summary_cta_button_other_font');
        if ($cta_button_font != false) {
            $style .= $cta_button_font;
        }

        $style .= '}';


        $cta_desc_font = $this->convert_ga_other_font('article_summary_cta_desc_font', 'article_summary_cta_desc_other_font');
        $style .= '.tldr-summary-cta-box .cta-description .short-desc{';
        if ($cta_desc_font_size > 0) {
            $style .= 'font-size:' . $cta_desc_font_size . 'px;';
        }
        if ($cta_desc_font != false) {
            $style .= $cta_desc_font;
        }
        $style .= '}';


        $cta_title_font = $this->convert_ga_other_font('article_summary_cta_title_font', 'article_summary_cta_title_other_font');
        $style .= '.tldr-summary-cta-box .cta-description p.title{';
        if ($cta_title_font_size > 0) {
            $style .= 'font-size:' . $cta_title_font_size . 'px;';
        }
        if ($cta_title_font != false) {
            $style .= $cta_title_font;
        }
        $style .= '}';


        $style .= '.tldr-summary-cta-box .cta-thumbnail{';
        $style .= 'max-width:' . $cta_image_min_width . $cta_image_min_width_option;
        $style .= '}';
        return $style;
    }

    public function post_summary_add_custom_css()
    {
        global $post;
        global $cta_google_fonts;
        $cta_google_fonts = array();
        $google_font = '';
        if ($this->public_display->logic_to_show_summary() || trim(get_post_meta($post->ID, '_tldr_post_summary', true)) == '') {
            $font_size = get_option('article_summary_button_font_size', TLDR_BUTTON_FONT_SIZE);
            $font_family = trim(esc_attr(get_option('article_summary_button_font_style', '')));
            $style = '<style type="text/css">';
            $style .= '#tldr-post-summary-buttons .summary-tldr-btn {';
            $style .= 'background:' . get_option('article_summary_button_background_color', TLDR_BUTTON_BG_COLOR) . ';';
            $style .= 'color:' . get_option('article_summary_button_font_color', TLDR_BUTTON_FONT_SIZE) . ';';
            $style .= 'width:' . get_option('article_summary_button_width', TLDR_BUTTON_WIDTH) . 'px;';
            if ($font_size > 0) {
                $style .= 'font-size:' . $font_size . 'px;';
            }


            $post_summary_btn_font = $this->convert_ga_other_font('article_summary_button_font_style', 'article_summary_button_other_font_style');

            if ($post_summary_btn_font != false) {
                $style .= $post_summary_btn_font;
            }

            $style .= '}';
            $style .= '#tldr-post-summary-buttons.position-2,#tldr-post-summary-buttons.position-3 {';
            $style .= 'background:' . get_option('article_summary_overlay_color', '#333333') . ';';
            $style .= 'opacity:' . get_option('article_summary_overlay_opacity', '0.9') . ';';
            $style .= '}';
            $style .= $this->get_cta_box_css();

            $style .= '</style>';
            if (!empty($cta_google_fonts)) {
                foreach ($cta_google_fonts as $google_font) {
                    echo '<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=' . $google_font . '">';
                }
            }
            echo $style;

        }
    }


    /**
     * @param $content
     * @return string
     */
    public function post_summary_add_summary($content)
    {

        global $post;

        /*
         * sorry we are not able
         */
        if (!$this->public_display->logic_to_show_summary() || trim(get_post_meta($post->ID, '_tldr_post_summary', true)) == '') {
            return $content;
        }
        $article_summary_ga_event_tracking = get_option('article_summary_ga_event_tracking', TLDR_GA_EVENT_TRACK);
        $event_track_settings = array(
            'track' => $article_summary_ga_event_tracking,
            'slug' => $post->post_name,
            'cta_title' => trim(get_post_meta($post->ID, '_post_summary_cta_title', true))
        );
        wp_localize_script($this->plugin_name, 'ga_event_track', $event_track_settings);
        wp_enqueue_script($this->plugin_name);

        return $this->public_display->add_summary_in_post($content);
    }

}
