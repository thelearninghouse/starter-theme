<?php get_header(); ?>

<main id="main" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/page-title' ); ?>

	<div class="wrapLg pageWrapper">

		<section class="pageContent">
			<div class="resourceArchiveList">
				<p>Whether you’d like to advance your career or start on the path to a new one, a degree in your chosen field can help you improve your position. A study by the U.S. Census Bureau reports that individuals with a bachelor’s degree earn 75 percent more during their lifetime than workers with only a high school diploma.</p>
				<p>Earning the right degree is important, and we strive to provide the information you need to make the best decision for you. Explore our more than 60 programs and the various careers they support. Review the salary potentials and paths to these careers.</p>
				<?php include('template-parts/content/resource-archive.php'); ?>
			</div>
		</section>

		<?php get_sidebar(); ?>

	</div>

</main>

<?php get_footer(); ?>
