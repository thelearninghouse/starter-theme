			<footer class="footerMag" itemscope itemtype="http://schema.org/WPFooter">

				<?php $school_logo = get_field('school_logo_alternative', 'options');
				if ( $school_logo ) { ?>
					<div class="wrapLg footerMag__logo">
						<img src="<?php echo $school_logo['url']; ?>" width="240" height="80" alt="<?php echo $school_logo['alt']; ?>">
						</a>
					</div>
				<?php } ?>

				<div class="wrapLg footerMag__contact">
					<p><span class="footerMag__address1"><?php the_field('school_address_1', 'option'); ?>, </span><span class="footerMag__address2"><?php the_field('school_address_2', 'option'); ?></span> <a class="footerMag__phone" title="Give us a call!" href="tel:<?php the_field('school_phone', 'option'); ?>"><?php the_field('school_phone', 'option'); ?></a></p>
				</div>

				<div class="footerMag__copyright">
					<p class="wrapLg"><span class="footerMag__copyrightText">&copy; <?php echo date('Y'); ?> <?php the_field('school_name', 'options'); ?></span> <a class="footerMag__privacy" href="/privacy-policy" title="View our privacy policy">Privacy Policy</a></p>
				</div>

			</footer>

		</div>

	<?php // all js scripts are loaded in library/bones.php ?>
	<?php wp_footer(); ?>

	</body>

</html> <!-- end of site -->
