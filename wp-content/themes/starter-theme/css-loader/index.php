<?php require_once(get_template_directory() . '/mix.php'); ?>

<?php if ( !isHMR() ): ?>

  <?php if ( is_front_page() ): ?>
    <?php require_once('css/front-page.php'); ?>
  <?php else: ?>
    <link rel="stylesheet" href="<?php echo mix('/css/style.css'); ?>">
  <?php endif; ?>

<?php endif; ?>
