<?php /* Template Name: OLC Thank You */ ?>

<?php get_header(); ?>

<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

	<?php get_template_part( 'template-parts/page_title' ); ?>

	<div class="wrap-lg page-wrapper">
		<div class="page-content">

			<?php if (have_posts()) : while (have_posts()) : the_post();
				the_content();
			endwhile; endif; ?>

		</div>

		<div class="sidebar page-wrapper__sidebar page-wrapper__sidebar--content">
			<div class="widget widget--navy">
				<h3 class="widget__heading">Ready to Apply?</h3>
				<p class="widget__description">If you’re ready, you don’t have to wait for us.</p>
				<a class="widget__action button button--teal" href="https://jessup.edu/appy-now/">Apply Now</a>
			</div>
			<div class="widget">
				<h3 class="widget__heading">Ready to Talk?</h3>
				<?php $school_phone = get_field('school_phone', 'options'); ?>
				<p class="widget__description">If you have any more questions, feel free to give us a call at <a href="tel:<?php echo str_replace( ['-', '(', ')', ' '], '', $school_phone ); ?>"><?php echo $school_phone; ?></a>. We’ll be glad to answer them for you.</p>
			</div>
		</div>

	</div>

</main>

<?php get_template_part( 'template-parts/cta_footer' ); ?>


<?php get_footer(); ?>
