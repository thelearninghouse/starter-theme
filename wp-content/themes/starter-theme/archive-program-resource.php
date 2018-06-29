<?php get_header(); ?>

<main id="main" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/page_title' ); ?>

	<div class="wrap page-wrapper">

		<section class="page-content">
			<div class="resource-archive-list">
				<p>Whether you’re a new student trying to make a good decision in your choice of programs or you’re already enrolled and are thinking ahead to career goals, we want to make sure you have the resources to do so. University of West Alabama Online is here to help you make informed decisions that will positively impact your goals. Get the information you need to find the right education for you.</p>
				<?php include('template-parts/content-resource-archive.php'); ?>
			</div>
		</section>

		<?php get_sidebar(); ?>

	</div>

</main>

<?php get_footer(); ?>
