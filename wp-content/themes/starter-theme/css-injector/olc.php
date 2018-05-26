<?php require_once(get_template_directory() . '/mix-helpers.php'); ?>

<?php if ( is_front_page() ): ?>
  <style><?php include get_template_directory() . '/public/css/critical-home.css'; ?></style>
  <script><?php include 'loadcss-js.php'; ?></script>
  <script>loadCSS( "<?php echo mix('/css/style.css'); ?>" );</script>
  <noscript><link rel="stylesheet" href="<?php echo mix('/css/style.css'); ?>"></noscript>

<?php else: ?>
  <link rel="stylesheet" href="<?php echo mix('/css/style.css'); ?>">

<?php endif; ?>
