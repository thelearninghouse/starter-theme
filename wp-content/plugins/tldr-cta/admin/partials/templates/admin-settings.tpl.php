<?php

$tldr_branding = get_option('article_summary_tldr_branding', false);

$delete_settings = get_option('article_summary_delete_on_deactivate', false);


$button_settings = get_option('article_summary_button_settings', 0);
$default_font_size = get_option('article_summary_button_font_size', TLDR_BUTTON_FONT_SIZE);
$saved_fonts = get_option('article_summary_button_font_style', '');

$cta_box_settings = get_option('article_summary_cta_box_settings', array());
$article_summary_ga_event_tracking = get_option('article_summary_ga_event_tracking', TLDR_GA_EVENT_TRACK);


$google_fonts = json_decode(file_get_contents(dirname(__FILE__) . "/google-fonts.json"));

?>

<div class="wrap">
    <h1>TLDR Settings</h1>
    <p style="max-width:600px;">This is where you can edit the look and feel of TLDR. This includes full customisation
        of the summary button and the call-to-action (CTA) box that will appear below each of your summaries. You can
        add the individual summaries to your posts within the post editor. Just scroll to the bottom of your blog post
        and you'll see two new options appear.</p>

    <form method="post" action="options.php">
        <?php settings_fields('post_summary_tldr_settings_group'); ?>
        <?php do_settings_sections('post_summary_tldr_settings_group'); ?>
        <table class="form-table">
            <tr valign="top">
                <td><input type="checkbox" id="boss_email" name="article_summary_tldr_branding"
                        <?php if ($tldr_branding) {
                            print 'checked';
                        } ?> /> Remove TLDR branding.
                </td>
            </tr>
        </table>
        <h2>TLDR Button Options</h2>
        <hr>
        <table class="form-table">
            <tr valign="top">
                <th scope="row">'Activate Summary' button text:</th>
                <td><input type="text" name="article_summary_button_text"
                           value="<?php echo esc_attr(get_option('article_summary_button_text', TLDR_BUTTON_SUMMARY_TEXT)); ?>"/>
                </td>
            </tr>

            <tr valign="top">
                <th scope="row">'Deactivate Summary' button text:</th>
                <td><input type="text" name="full_article_button_text"
                           value="<?php echo esc_attr(get_option('full_article_button_text', TLDR_BUTTON_FULL_TEXT)); ?>"/>
                </td>
            </tr>

            <tr valign="top">
                <th scope="row">Summary button location:</th>
                <td>
                    <select name="article_summary_button_settings">
                        <option value="0" <?php if ($button_settings == 0) {
                            print 'selected';
                        } ?>>Select one option
                        </option>
                        <option value="1" <?php if ($button_settings == 1) {
                            print 'selected';
                        } ?>>Button above content
                        </option>
                        <option value="2" <?php if ($button_settings == 2) {
                            print 'selected';
                        } ?>>Fixed bar button (top)
                        </option>
                        <option value="3" <?php if ($button_settings == 3) {
                            print 'selected';
                        } ?>>Fixed bar button (bottom)
                        </option>
                    </select>
                </td>
            </tr>

            <tr valign="top">
                <th scope="row">Button background color:</th>
                <td><input type="text" name="article_summary_button_background_color"
                           id="article_summary_button_background_color" class="tldr-post-summary-wp-color"
                           value="<?php echo esc_attr(get_option('article_summary_button_background_color', TLDR_BUTTON_BG_COLOR)); ?>"/>
                </td>
            </tr>

            <tr valign="top">
                <th scope="row">Button font color:</th>
                <td><input type="text" name="article_summary_button_font_color" id="article_summary_button_font_color"
                           class="tldr-post-summary-wp-color"
                           value="<?php echo esc_attr(get_option('article_summary_button_font_color', TLDR_BUTTON_FONT_COLOR)); ?>"/>
                </td>
            </tr>

            <tr valign="top">
                <th scope="row">Button font size (px):</th>
                <td>
                    <select name="article_summary_button_font_size">
                        <option value="0" <?php if ($default_font_size == 0) {
                            print 'selected';
                        } ?>>Website Default
                        </option>
                        <?php for ($i = 1; $i <= 30; $i++) { ?>
                            <option value="<?php print $i; ?>"<?php if ($default_font_size == $i) {
                                print 'selected';
                            } ?>><?php print $i; ?> px
                            </option>
                        <?php } ?>
                    </select>
                </td>
            </tr>

            <tr valign="top">
                <th scope="row">Button font:</th>
                <td><select name="article_summary_button_font_style" id="article_summary_button_font_style">
                        <option value="">Website Default font:</option>
                        <?php foreach ($google_fonts as $google_font) { ?>
                            <option
                                value="<?php print $google_font->{'font-family'} . "|" . $google_font->{'css-name'}; ?>" <?php if ($saved_fonts == $google_font->{'font-family'} . "|" . $google_font->{'css-name'}) {
                                print 'selected';
                            } ?>><?php print $google_font->{'font-name'} ?></option>
                        <?php } ?>
                        <option value="other" <?php if ($saved_fonts == 'other') {
                            print 'selected';
                        } ?>>Other
                        </option>
                    </select>
                    <div id="tldr-post-summary-other-fonts">
                        <br/>
                        <input type="text" name="article_summary_button_other_font_style"
                               id="article_summary_button_other_font_style"
                               value="<?php echo esc_attr(get_option('article_summary_button_other_font_style', '')); ?>"/><br/>
                        Write the name of your custom font family above (as it appears in your stylesheet).
                    </div>
                </td>
            </tr>

            <tr valign="top">
                <th scope="row">Button width (px):</th>
                <td><input type="text" name="article_summary_button_width"
                           value="<?php echo esc_attr(get_option('article_summary_button_width', TLDR_BUTTON_WIDTH)); ?>"/><br/>
                </td>
            </tr>

            <tr valign="top">
                <th scope="row">Top/Bottom bar overlay color (if selected):</th>
                <td><input type="text" name="article_summary_overlay_color" id="article_summary_overlay_color"
                           class="tldr-post-summary-wp-color"
                           value="<?php echo esc_attr(get_option('article_summary_overlay_color', '#333333')); ?>"/><br/>
                </td>
            </tr>

            <tr valign="top">
                <th scope="row">Top/Bottom bar overlay opacity (if selected):</th>
                <td><input type="text" name="article_summary_overlay_opacity"
                           value="<?php echo esc_attr(get_option('article_summary_overlay_opacity', '0.9')); ?>"/><br/>
                    Please use value less than 1
                </td>
            </tr>
        </table>
        <h2>CTA Box Options</h2>
        <hr>
        <table class="form-table">
            <tr valign="top">
                <th scope="row">CTA box background color:</th>
                <td><input type="text" name="article_summary_cta_box_settings[box_bg]"
                           class="tldr-post-summary-wp-color"
                           value="<?php print (isset($cta_box_settings['box_bg']) && trim($cta_box_settings['box_bg']) != '') ? $cta_box_settings['box_bg'] : TLDR_CTA_BG_COLOR; ?>"/><br/>
                </td>
            </tr>

            <tr valign="top">
                <th scope="row">CTA box font color:</th>
                <td><input type="text" name="article_summary_cta_box_settings[font_color]"
                           class="tldr-post-summary-wp-color"
                           value="<?php print (isset($cta_box_settings['font_color']) && trim($cta_box_settings['font_color']) != '') ? $cta_box_settings['font_color'] : TLDR_CTA_FONT_COLOR; ?>"/><br/>
                </td>
            </tr>


            <tr valign="top">
                <th scope="row">CTA box button background color:</th>
                <td><input type="text" name="article_summary_cta_box_settings[btn_bg]"
                           class="tldr-post-summary-wp-color"
                           value="<?php print (isset($cta_box_settings['btn_bg']) && trim($cta_box_settings['btn_bg']) != '') ? $cta_box_settings['btn_bg'] : TLDR_CTA_BTN_BG; ?>"/><br/>
                </td>
            </tr>


            <tr valign="top">
                <th scope="row">CTA box button font color:</th>
                <td><input type="text" name="article_summary_cta_box_settings[btn_font_color]"
                           class="tldr-post-summary-wp-color"
                           value="<?php print (isset($cta_box_settings['btn_font_color']) && trim($cta_box_settings['btn_font_color']) != '') ? $cta_box_settings['btn_font_color'] : TLDR_CTA_BTN_FNT_COLOR; ?>"/><br/>
                </td>
            </tr>


            <?php
            $cta_title_font_size = (isset($cta_box_settings['cta_title_font_size']) && intval($cta_box_settings['cta_title_font_size']) >= 0) ? intval($cta_box_settings['cta_title_font_size']) : TLDR_CTA_TITLE_FONT_SIZE;
            $cta_title_font = get_option('article_summary_cta_title_font', '');
            $cta_desc_font_size = (isset($cta_box_settings['cta_desc_font_size']) && intval($cta_box_settings['cta_desc_font_size']) >= 0) ? intval($cta_box_settings['cta_desc_font_size']) : TLDR_CTA_DESC_FONT_SIZE;
            $cta_button_font_size = (isset($cta_box_settings['cta_btn_font_size']) && intval($cta_box_settings['cta_btn_font_size']) >= 0) ? intval($cta_box_settings['cta_btn_font_size']) : TLDR_CTA_BTN_FONT_SIZE;
            $cta_desc_font = get_option('article_summary_cta_desc_font', '');
            $cta_button_font = get_option('article_summary_cta_button_font', '');

            ?>


            <tr valign="top">
                <th scope="row">CTA Title font:</th>
                <td><select name="article_summary_cta_title_font" id="article_summary_cta_title_font">
                        <option value="">Website Default font:</option>
                        <?php foreach ($google_fonts as $google_font) { ?>
                            <option
                                value="<?php print $google_font->{'font-family'} . "|" . $google_font->{'css-name'}; ?>" <?php if ($cta_title_font == $google_font->{'font-family'} . "|" . $google_font->{'css-name'}) {
                                print 'selected';
                            } ?>><?php print $google_font->{'font-name'} ?></option>
                        <?php } ?>
                        <option value="other" <?php if ($cta_title_font == 'other') {
                            print 'selected';
                        } ?>>Other
                        </option>
                    </select>
                    <div id="tldr-post-summary-cta-title-other-fonts">
                        <br/>
                        <input type="text" name="article_summary_cta_title_other_font"
                               id="article_summary_cta_title_other_font"
                               value="<?php echo esc_attr(get_option('article_summary_cta_title_other_font', '')); ?>"/><br/>
                        Write the name of your custom font family above (as it appears in your stylesheet).
                    </div>
                </td>
            </tr>


            <tr valign="top">
                <th scope="row">CTA title font size:</th>
                <td>
                    <select name="article_summary_cta_box_settings[cta_title_font_size]">
                        <option value="0" <?php if ($cta_title_font_size == 0) {
                            print 'selected';
                        } ?>>Website Default
                        </option>
                        <?php for ($i = 1; $i <= 50; $i++) { ?>
                            <option value="<?php print $i ?>" <?php if ($cta_title_font_size == $i) {
                                print 'selected';
                            } ?>><?php print $i ?></option>
                        <?php } ?>
                    </select>
                    px
                </td>
            </tr>


            <tr valign="top">
                <th scope="row">CTA description font:</th>
                <td><select name="article_summary_cta_desc_font" id="article_summary_cta_desc_font">
                        <option value="">Website Default font:</option>
                        <?php foreach ($google_fonts as $google_font) { ?>
                            <option
                                value="<?php print $google_font->{'font-family'} . "|" . $google_font->{'css-name'}; ?>" <?php if ($cta_desc_font == $google_font->{'font-family'} . "|" . $google_font->{'css-name'}) {
                                print 'selected';
                            } ?>><?php print $google_font->{'font-name'} ?></option>
                        <?php } ?>
                        <option value="other" <?php if ($cta_desc_font == 'other') {
                            print 'selected';
                        } ?>>Other
                        </option>
                    </select>
                    <div id="tldr-post-summary-cta-desc-other-fonts">
                        <br/>
                        <input type="text" name="article_summary_cta_desc_other_font"
                               id="article_summary_cta_desc_other_font"
                               value="<?php echo esc_attr(get_option('article_summary_cta_desc_other_font', '')); ?>"/><br/>
                        Write the name of your custom font family above (as it appears in your stylesheet).
                    </div>
                </td>
            </tr>


            <tr valign="top">
                <th scope="row">CTA description font size:</th>
                <td>
                    <select name="article_summary_cta_box_settings[cta_desc_font_size]">
                        <option value="0" <?php if ($cta_desc_font_size == 0) {
                            print 'selected';
                        } ?>>Website Default
                        </option>
                        <?php for ($i = 1; $i <= 50; $i++) { ?>
                            <option value="<?php print $i ?>" <?php if ($cta_desc_font_size == $i) {
                                print 'selected';
                            } ?>><?php print $i ?></option>
                        <?php } ?>
                    </select>
                    px
                </td>
            </tr>


            <tr valign="top">
                <th scope="row">CTA button font:</th>
                <td><select name="article_summary_cta_button_font" id="article_summary_cta_button_font">
                        <option value="">Website Default font:</option>
                        <?php foreach ($google_fonts as $google_font) { ?>
                            <option
                                value="<?php print $google_font->{'font-family'} . "|" . $google_font->{'css-name'}; ?>" <?php if ($cta_button_font == $google_font->{'font-family'} . "|" . $google_font->{'css-name'}) {
                                print 'selected';
                            } ?>><?php print $google_font->{'font-name'} ?></option>
                        <?php } ?>
                        <option value="other" <?php if ($cta_button_font == 'other') {
                            print 'selected';
                        } ?>>Other
                        </option>
                    </select>
                    <div id="tldr-post-summary-cta-button-other-fonts">
                        <br/>
                        <input type="text" name="article_summary_cta_button_other_font"
                               id="article_summary_cta_button_other_font"
                               value="<?php echo esc_attr(get_option('article_summary_cta_button_other_font', '')); ?>"/><br/>
                        Write the name of your custom font family above (as it appears in your stylesheet).
                    </div>
                </td>
            </tr>


            <tr valign="top">
                <th scope="row">CTA button font size:</th>
                <td>
                    <select name="article_summary_cta_box_settings[cta_btn_font_size]">
                        <option value="0" <?php if ($cta_button_font_size == 0) {
                            print 'selected';
                        } ?>>Website Default
                        </option>
                        <?php for ($i = 1; $i <= 50; $i++) { ?>
                            <option value="<?php print $i ?>" <?php if ($cta_button_font_size == $i) {
                                print 'selected';
                            } ?>><?php print $i ?></option>
                        <?php } ?>
                    </select>
                    px
                </td>
            </tr>

            <?php
            $cta_image_min_width_option = (isset($cta_box_settings['cta_image_min_width_option']) && $cta_box_settings['cta_image_min_width_option'] != '') ? $cta_box_settings['cta_image_min_width_option'] : TLDR_CTA_IMG_WIDTH_OPTION;
            ?>
            <tr valign="top">
                <th scope="row">CTA box image maximum width:</th>
                <td><input type="text" name="article_summary_cta_box_settings[cta_image_min_width]" style="width: 100px"
                           value="<?php print (isset($cta_box_settings['cta_image_min_width']) && trim($cta_box_settings['cta_image_min_width']) != '') ? $cta_box_settings['cta_image_min_width'] : TLDR_CTA_IMG_WIDTH; ?>"/>
                    <select name="article_summary_cta_box_settings[cta_image_min_width_option]">
                        <option value="%" <?php if ('%' == $cta_image_min_width_option) {
                            print 'selected';
                        } ?>>%
                        </option>
                        <option value="px"<?php if ('px' == $cta_image_min_width_option) {
                            print 'selected';
                        } ?>>px
                        </option>
                    </select>
                </td>
            </tr>

            <?php
            $cta_box_border = (isset($cta_box_settings['cta_box_border']) && trim($cta_box_settings['cta_box_border']) != '') ? $cta_box_settings['cta_box_border'] : false;
            ?>
            <tr valign="top">
                <td><input type="checkbox" id="cta_box_border" name="article_summary_cta_box_settings[cta_box_border]"
                        <?php if ($cta_box_border) {
                            print 'checked';
                        } ?> /><strong> Add border in CTA Box </strong>
                </td>
            </tr>

            <tr valign="top" class="cta-box-border-options">
                <th scope="row">CTA box border thickness:</th>
                <td><input type="text" name="article_summary_cta_box_settings[border_thickness]"
                           class="tldr-post-summary-border" size="2"
                           value="<?php print (isset($cta_box_settings['border_thickness']) && trim($cta_box_settings['border_thickness']) != '') ? $cta_box_settings['border_thickness'] : ''; ?>"/> px<br/>
                </td>
            </tr>

            <tr valign="top" class="cta-box-border-options">
                <th scope="row">CTA box border color:</th>
                <td><input type="text" name="article_summary_cta_box_settings[border_color]"
                           class="tldr-post-summary-wp-color"
                           value="<?php print (isset($cta_box_settings['border_color']) && trim($cta_box_settings['border_color']) != '') ? $cta_box_settings['border_color'] : ''; ?>"/><br/>
                </td>
            </tr>


        </table>
        <hr>
        <table class="form-table">
            <tr valign="top">
                <td><input type="checkbox" id="boss_email" name="article_summary_delete_on_deactivate"
                        <?php if ($delete_settings) {
                            print 'checked';
                        } ?> /> Delete settings on plugin deactivation.
                </td>
            </tr>


        </table>

        <?php submit_button(); ?>

        <p>For more information on TLDR, visit <a href="http://www.matthewbarby.com/tldr" target="_blank">matthewbarby.com/tldr</a>.
        </p>

    </form>
</div>
