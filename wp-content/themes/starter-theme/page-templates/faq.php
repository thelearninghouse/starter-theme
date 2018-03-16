<?php /* Template Name: FAQ */ ?>
<?php get_header(); ?>

<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/hero_title' ); ?>

		<div class="wrap-lg page-wrapper">
			<section class="page-content" aria-label="Page Content">
				<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
					<?php the_content(); ?>
				<?php endwhile; ?>
				<?php endif; ?>
				<?php $faqs = get_field('page_faq_list'); ?>
				<?php tlh_accordion( $faqs, false, false ); ?>
			</section>
			<?php get_sidebar( 'page' ); ?>
		</div>
		<?php if ( have_rows( 'page_read_more_items' ) ): ?>
		 	<section aria-label="Read More" class="related-pages">
				<div class="wrap-lg">
					<?php get_template_part( 'template-parts/read_more' ); ?>
				</div>
			</section>
		<?php endif; ?>

</main>

<?php get_footer(); ?>
