<?php

// If this file is called directly, abort.
if ( ! defined('WPINC')) {
    die;
}

?>

<br>

<?php settings_errors(); ?>

<form method="post" action="<?php echo admin_url(); ?>options.php">
    <?php settings_fields('pusher-bb-settings'); ?>
    <?php do_settings_sections('pusher-bb-settings'); ?>
    <table class="form-table">
        <tbody>
        <tr>
            <th scope="row">
                <label>Bitbucket token</label>
            </th>
            <td>
                <input name="bb_token" type="text" id="bb_token"  placeholder="<?php echo (get_option('bb_token')) ? '********' : null; ?>" class="regular-text">
                &nbsp;
                <a href="#" onclick="window.open('https://cloud.wppusher.com/auth/bitbucket', 'WP Pusher Authentication', 'height=800,width=1100'); return false;" class="button">
                    <i class="fa fa-bitbucket"></i>&nbsp; Obtain a Bitbucket token
                </a>
            </td>
        </tr>
        </tbody>
    </table>
    <?php submit_button('Save Bitbucket token'); ?>
</form>
