<?php

// If this file is called directly, abort.
if ( ! defined('WPINC')) {
    die;
}

?>

<br>

<?php settings_errors(); ?>

<form method="post" action="<?php echo admin_url(); ?>options.php">
    <?php settings_fields('pusher-gl-settings'); ?>
    <?php do_settings_sections('pusher-gl-settings'); ?>
    <table class="form-table">
        <tbody>
        <tr>
            <th scope="row">
                <label>GitLab base url</label>
            </th>
            <td>
                <input name="gl_base_url" type="text" id="gl_base_url" value="<?php echo esc_attr(get_option('gl_base_url')); ?>" class="regular-text">
                <p class="description">Defaults to 'https://gitlab.com'.</p>
            </td>
        </tr>
        <tr>
            <th scope="row">
                <label>GitLab private token</label>
            </th>
            <td>
                <input name="gl_private_token" type="text" id="gl_private_token" class="regular-text" placeholder="<?php echo (get_option('gl_private_token')) ? '********' : null; ?>">
                <p class="description">Find private token in <strong>Settings > Access Tokens</strong>.</p>
            </td>
        </tr>
        </tbody>
    </table>
    <?php submit_button('Save GitLab settings'); ?>
</form>
