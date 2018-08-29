<?php /* Template Name: MAG Degrees */ ?>

<?php get_header( 'mag' ); ?>

<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/page-title' ); ?>

	<section class="magDegrees" aria-label="Degree Information">
		<div class="pageContent wrapLg">
			<div class="pageContent__main">
				<?php get_template_part( 'template-parts/content/flex-page-content' ); ?>
			</div>
			<div class="pageContent__sidebar">
				<?php get_template_part( 'template-parts/get-started-form' ); ?>
			</div>
		</div>
	</section>

	<div class="schoolBenefits">
		<div class="wrapLg">
			<h2 class="schoolBenefits__heading" id="schoolBenefitsHeading"><?php tlh_field('values_heading'); ?></h2>
			<?php get_template_part( 'template-parts/content/values-list' ); ?>
		</div>
	</div>

</main>

<?php get_footer( 'mag' ); ?>
