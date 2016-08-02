<div class="summary-cta-checkbox">
    <div class="summary-checkbox">
        <input type="checkbox" name="_do_not_display_cta" <?php if ($cta_summary) {
            print  'checked';
        } ?>>
        <label for="myplugin_new_field">
            <?php _e('Do not display a CTA for this post.', $this->plugin_name); ?>
        </label>
    </div>

    <div class="cta-input-row">
        <div class="cta-input-row-label">
            <label for="post_summary_cta_title">
                <?php _e('CTA Title', $this->plugin_name); ?>
            </label>
        </div>
        <div class="cta-input-row-input">
            <input type="text" id="post_summary_cta_title" name="_post_summary_cta_title"
                   value="<?php echo esc_attr($cta_title); ?>"
                   size="25"/>
        </div>
    </div>


    <div class="cta-input-row">
        <div class="cta-input-row-label">
            <label for="post_summary_landing_page_url">
                <?php _e('Landing Page URL', $this->plugin_name); ?>
            </label>
        </div>
        <div class="cta-input-row-input">
            <input type="text" id="post_summary_landing_page_url" name="_post_summary_landing_page_url"
                   value="<?php echo esc_attr($landing_page_url); ?>"
                   size="25"/>
        </div>
    </div>

    <div class="cta-input-row">
        <div class="cta-input-row-label">
            <label for="post_summary_short_description">
                <?php _e('Short Description', $this->plugin_name); ?>
            </label>
        </div>
        <div class="cta-input-row-input">
        <textarea name="_post_summary_short_description"
                  id="post_summary_short_description"><?php echo esc_attr($short_description); ?></textarea>
        </div>
    </div>

    <div class="cta-input-row">
        <div class="cta-input-row-label">
            <label for="post_summary_short_description">
                <?php _e('Button Text', $this->plugin_name); ?>
            </label>
        </div>
        <div class="cta-input-row-input">
            <input type="text" id="post_summary_button_text" name="_post_summary_button_text"
                   value="<?php echo esc_attr($button_text); ?>"
                   size="25"/>
        </div>
    </div>

    <div class="cta-input-row upload-div">
        <div class="upload-input">
            <input type="button" name="upload-btn" id="cta-summary-upload-button" class="button-secondary"
                   value="Upload Image (Optional)"/>
            <br/> Optimal size: 182px x 205px
        </div>
        <div class="upload-hidden-input">
            <span id="post_summary_uploaded_file_url_name"><?php if (trim($cta_image) != '') {
                    print basename($cta_image);
                } ?></span>
            <?php if (trim($cta_image) != '') { ?>
                <span class="remove-this-image"><a href="#">Remove Image</a></span>
            <?php } ?>
            <input type="hidden" id="post_summary_uploaded_file_url" name="_post_summary_uploaded_file_url"
                   value="<?php print  $cta_image; ?>"/>
        </div>
    </div>


</div>

