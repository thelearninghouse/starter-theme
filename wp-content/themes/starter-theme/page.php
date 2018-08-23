<?php get_header(); ?>

<main id="content" class="mainContent" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/page-title' ); ?>

		<div class="wrapLg pageWrapper">

			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

				<section class="pageContent">
					<?php the_content(); ?>
				</section> <?php // end article section ?>

			<?php endwhile; endif; ?>

			<?php get_sidebar(); ?>

		</div>

</main>

<?php get_footer(); ?>
