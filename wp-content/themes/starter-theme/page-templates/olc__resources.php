<?php /* Template Name: OLC Resources Overview */ ?>

<?php get_header(); ?>

<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/hero_title' ); ?>

		<div class="wrap page-wrapper">

			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

				<section class="page-content">
					<?php the_content(); ?>
				</section> <?php // end article section ?>

			<?php endwhile; endif; ?>

			<?php get_sidebar(); ?>

		</div>

</main>

<?php get_footer(); ?>
