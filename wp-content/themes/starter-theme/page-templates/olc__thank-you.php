<?php /* Template Name: OLC Thank You */ ?>

<?php get_header(); ?>

<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

	<?php get_template_part( 'template-parts/page-title' ); ?>

	<div class="pageContent wrapLg">
		<div class="pageContent__main">
			<?php if (have_posts()) : while (have_posts()) : the_post();
				the_content();
			endwhile; endif; ?>
		</div>
		<div class="pageContent__sidebar">
			<?php get_sidebar(); ?>
		</div>
	</div>

</main>

<?php get_template_part( 'template-parts/cta-footer' ); ?>


<?php get_footer(); ?>
