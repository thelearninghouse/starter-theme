<?php get_header(); ?>

<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/hero_title' ); ?>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

	<article <?php post_class(); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

		<section class="page-content" itemprop="articleBody">
			<?php the_content(); ?>
		</section> <?php // end article section ?>

	</article>

	<?php endwhile; endif; ?>

	<?php get_sidebar(); ?>

</main>

<?php get_footer(); ?>
