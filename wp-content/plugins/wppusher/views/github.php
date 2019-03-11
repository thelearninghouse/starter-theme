<?php

// If this file is called directly, abort.
if ( ! defined('WPINC')) {
    die;
}

?>

<br>

<?php settings_errors(); ?>

<form method="post" action="<?php echo admin_url(); ?>options.php">
    <?php settings_fields('pusher-gh-settings'); ?>
    <?php do_settings_sections('pusher-gh-settings'); ?>
    <table class="form-table">
        <tbody>
        <tr>
            <th scope="row">
                <label>GitHub token</label>
            </th>
            <td>
                <input name="gh_token" type="text" id="gh_token"  placeholder="<?php echo (get_option('gh_token')) ? '********' : null; ?>" class="regular-text">
                &nbsp;
                <a href="#" onclick="window.open('https://cloud.wppusher.com/auth/github', 'WP Pusher Authentication', 'height=800,width=1100'); return false;" class="button">
                    <i class="fa fa-github"></i>&nbsp; Obtain a GitHub token
                </a>
            </td>
        </tr>
        </tbody>
    </table>
    <?php submit_button('Save GitHub token'); ?>
</form>
