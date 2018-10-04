<section class="cta-footer">
	<div class="cta-footer__wrapper wrapLg">
		<div class="cta-footer__copy">
			<h2 class="cta-footer__heading">CTA Footer Heading - Change Me</h2>
			<?php $school_phone = get_field('school_phone', 'options'); ?>
		</div>
		<div class="cta-footer__action-container">
			<a class="cta-footer__action button" href="https://jessup.edu/apply-now">Apply Now</a>
			<?php if ( !is_page_template( array( 'page-templates/olc__get-started.php', 'page-templates/olc__thank-you.php' ) ) ) { ?>
				<a class="cta-footer__action button button--blue" href="/get-started">Get Started</a>
			<?php } ?>
		</div>
	</div>
</section>
