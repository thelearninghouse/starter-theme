<?php /* Template Name: MAG Page */ ?>

<?php get_header( 'mag' ); ?>

<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/hero_title' ); ?>

	<section class="mag-page-content wrap-md" aria-label="Page Content">
		<?php if (have_posts()) : while (have_posts()) : the_post();
			the_content();
		endwhile; endif; ?>
	</section>

</main>

<?php get_footer( 'mag' ); ?>
