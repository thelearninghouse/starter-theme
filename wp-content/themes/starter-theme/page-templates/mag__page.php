<?php /* Template Name: MAG Page */ ?>

<?php get_header( 'mag' ); ?>

<main id="content" class="mainContent" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/page-title' ); ?>

	<section class="magPageContent wrapMd" aria-label="Page Content">
		<?php if (have_posts()) : while (have_posts()) : the_post();
			the_content();
		endwhile; endif; ?>
	</section>

	<?php if ( get_field( 'show_bottom_cta_boxes' ) ) { ?>
		<aside class="ctaBottom wrapMd">
			<div class="ctaBottom__item widget">
				<h2 class="widget__heading">Ready to Apply?</h2>
				<p class="widget__description">You don’t have to wait for us to get back to you. You can apply now!</p>
				<a class="widget__action button button--white">Apply</a>
			</div>
			<div class="ctaBottom__item widget">
				<h2 class="widget__heading">Ready to Talk?</h2>
				<p class="widget__description">Still have questions? Give us a call at <?php tlh_phone_link(); ?>, and we can answer them for you.</p>
			</div>
		</aside>
	<?php } ?>

</main>

<?php get_footer( 'mag' ); ?>
