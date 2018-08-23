<?php /* Template Name: MAG Degrees */ ?>

<?php get_header( 'mag' ); ?>

<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/page-title' ); ?>

	<section class="mag-degrees" aria-label="Degree Information">
		<div class="wrapLg">
			<div class="page-content">
				<?php get_template_part( 'template-parts/flex-page-content' ); ?>
			</div>
			<div class="sidebar">
				<?php get_template_part( 'template-parts/get-started-form' ); ?>
			</div>
		</div>
	</section>

	<?php get_template_part( 'template-parts/school_benefits_list' ); ?>

</main>

<?php get_footer( 'mag' ); ?>
