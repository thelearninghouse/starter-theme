<?php

// If this file is called directly, abort.
if ( ! defined('WPINC')) {
    die;
}

?>

<br>

<?php settings_errors(); ?>

<p>You can enable logging for debugging purposes. Log files can grow quickly, so don't leave this on.</p>

<form method="post" action="<?php echo admin_url(); ?>options.php">
    <?php settings_fields('pusher-enable-logging'); ?>
    <?php do_settings_sections('pusher-enable-logging'); ?>
    <?php if (get_option('pusher_logging_enabled') == 1) { ?>
        <input type="hidden" name="pusher_logging_enabled" value="0">
        <?php submit_button('Disable logging'); ?>
    <?php } else { ?>
        <input type="hidden" name="pusher_logging_enabled" value="1">
        <?php submit_button('Enable logging'); ?>
    <?php } ?>
</form>

<?php if (get_option('pusher_logging_enabled') == 1) { ?>
    <textarea rows="20" style="width: 100%;" disabled><?php echo $log; ?></textarea>
    <form method="post" action="" onsubmit="return confirm('The log is gonna be wiped clean. Sure about it?');">
        <?php wp_nonce_field('clear-log'); ?>
        <input type="hidden" name="wppusher[action]" value="clear-log">
        <p class="submit">
            <input type="submit" name="submit" id="submit" class="button button-primary" value="Clear log">
        </p>
    </form>
<?php } ?>
