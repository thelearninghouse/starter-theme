<script type='text/javascript'>
<?php if ( $affiliate_id ): ?>
var affiliateId = <?php echo $affiliate_id; ?>;
<?php endif; ?>

<?php if ( $clientIdIndex ): ?>
var clientIdIndex = <?php echo $clientIdIndex; ?>;
<?php endif; ?>

<?php if ( $form_settings['_event_id'] ): ?>
var eventId = <?php echo $form_settings['_event_id']; ?>;
<?php endif; ?>

<?php if ( $form_settings['_partnership_id'] ): ?>
var partnershipId = <?php echo $form_settings['_partnership_id']; ?>;
<?php endif; ?>

<?php if ( $form_settings['_promotion_id'] ): ?>
var promotionId = <?php echo $form_settings['_promotion_id']; ?>;
<?php endif; ?>

<?php if ($schoolDisplayName): ?>
var schoolDisplayName = '<?php echo $schoolDisplayName; ?>';
<?php endif; ?>

<?php if ($colorTheme): ?>
var theme = '<?php echo $colorTheme; ?>';
<?php endif; ?>
</script>

<script src="<?php echo $FORM_SCRIPT_URL; ?>"></script>
