<?php get_header( 'lp' ); ?>

<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/page_title' ); ?>

	<section class="mag-degrees" aria-label="Degree Information">
		<div class="wrap-lg">
			<div class="page-content">
				<?php get_template_part( 'template-parts/flex_page_content' ); ?>
			</div>
			<div class="sidebar">
				<?php get_template_part( 'template-parts/get_started_form' ); ?>
			</div>
		</div>
	</section>

	<?php get_template_part( 'template-parts/school_benefits_list' ); ?>

</main>

<?php get_footer( 'lp' ); ?>
