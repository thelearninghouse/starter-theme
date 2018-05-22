<?php require_once(get_template_directory() . '/mix-helpers.php'); ?>

<?php if ( !isHMR() ): ?>
    <link rel="stylesheet" href="<?php echo mix('/css/mag-style.css'); ?>">
<?php endif; ?>
