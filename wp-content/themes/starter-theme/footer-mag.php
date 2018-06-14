<footer class="footer-mag" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">

	<?php $school_logo = get_field('school_logo_alternative', 'options');
	if ( $school_logo ) { ?>
		<div class="wrap footer-mag__logo">
			<img src="<?php echo $school_logo['url']; ?>" width="240" height="80" alt="<?php echo $school_logo['alt']; ?>">
			</a>
		</div>
	<?php } ?>

	<div class="wrap footer-mag__contact">

		<p><span class="footer-mag__address-1"><?php the_field('school_address_1', 'option'); ?>, </span><span class="footer-mag__address-2"><?php the_field('school_address_2', 'option'); ?></span> <a class="footer-mag__phone" title="Give us a call!" href="tel:<?php the_field('school_phone', 'option'); ?>"><?php the_field('school_phone', 'option'); ?></a></p>

	</div>

	<div class="footer-mag__copyright">
		<p class="wrap"><span class="footer-mag__copyright-text">&copy; <?php echo date('Y'); ?> <?php the_field('school_name', 'options'); ?></span> <a class="footer-mag__privacy" href="/privacy-policy" title="View our privacy policy">Privacy Policy</a></p>
	</div>

</footer>

</div>

<?php // all js scripts are loaded in library/bones.php ?>
<?php wp_footer(); ?>

</body>

</html> <!-- end of site -->
