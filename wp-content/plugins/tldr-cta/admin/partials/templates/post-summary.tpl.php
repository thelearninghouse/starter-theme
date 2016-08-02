<div class="summary-checkbox">
    <input type="checkbox" name="_do_not_display_summary" <?php if ($do_not_display_summary) {
        print  'checked';
    } ?>>
    <label for="summary-checkbox-label">
        <strong><?php _e('Do not display summary for this post', $this->plugin_name); ?></strong>
    </label>
</div>

<div class="summary-desc">
    <?php
    $editor_settings = array(
        'textarea_rows' => 5
    );
    wp_editor($post_summary_content, 'tldr_post_summary', $editor_settings);
    ?>
</div>

