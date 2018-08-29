<?php get_header(); ?>

<main id="main" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/page-title' ); ?>

	<section class="pageContent" aria-label="Page Content">
		<div class="wrapLg pageContent">
			<div class="pageContent__main">
				<div class="resourceArchiveList">
					<p>Whether you’re a new student trying to make a good decision in your choice of programs or you’re already enrolled and are thinking ahead to career goals, we want to make sure you have the resources to do so. University of West Alabama Online is here to help you make informed decisions that will positively impact your goals. Get the information you need to find the right education for you.</p>
					<?php include('template-parts/content/resource-archive.php'); ?>
				</div>
			</div>
			<div class="pageContent__sidebar">
				<?php get_sidebar(); ?>
			</div>
		</div>
	</section>

</main>

<?php get_footer(); ?>
