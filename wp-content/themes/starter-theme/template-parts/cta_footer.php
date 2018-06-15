<section class="cta_footer">
	<div class="cta_footer__wrapper wrap">
		<div class="cta_footer__copy">
			<h2 class="cta_footer__heading">Heading</h2>
			<?php $school_phone = get_field('school_phone', 'options'); ?>
			<p class="cta_footer__description">Change this in <code>template-parts/cta_footer.php</code>. <a href="tel:<?php echo str_replace( ['-', '(', ')', ' '], '', $school_phone ); ?>">Call <?php echo $school_phone; ?></a> to learn more.</p>
		</div>
		<div class="cta_footer__action-container">
			<a class="cta_footer__action button" href="https://jessup.edu/apply-now">Apply Now</a>
			<?php if ( !is_page_template( array( 'page-templates/olc__get-started.php', 'page-templates/olc__thank-you.php' ) ) ) { ?>
				<a class="cta_footer__action button button--blue" href="/get-started">Get Started</a>
			<?php } ?>
		</div>
	</div>
</section>
