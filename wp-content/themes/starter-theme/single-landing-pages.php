<?php get_header( 'lp' ); ?>

<main id="content" class="mainContent" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/page-title' ); ?>

	<section class="magDegrees" aria-label="Degree Information">
		<div class="wrapLg">
			<div class="pageContent">
				<?php get_template_part( 'template-parts/content/flex-page-content' ); ?>
				<?php tlh_accordion(array(array('title' => 'Test 1', 'content' => 'haha.<br>test.'), array('title' => 'Test 2', 'content' => 'lol.')), true, true, 'plain'); ?>
				<?php tlh_accordion(array(array('title' => 'Test 1', 'content' => 'haha.')), false, false, 'plain accordion--dropdown'); ?>
			</div>
			<div class="sidebar">
				<?php get_template_part( 'template-parts/get-started-form' ); ?>
			</div>
		</div>
	</section>

	<?php get_template_part( 'template-parts/school-benefits-list' ); ?>

</main>

<?php get_footer( 'lp' ); ?>
