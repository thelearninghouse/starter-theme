<?php /* Template Name: GTM Full Width */ ?>
<?php get_header( 'gtm' ); ?>

<main id="content" class="wrap-lg main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<h1 id="page-heading"><?php the_title(); ?></h1>
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		<section class="page-content" aria-labelledby="page-heading">
			<?php the_content(); ?>
		</section> <?php // end article section ?>
	<?php endwhile; endif; ?>
</main>

<?php get_footer( 'gtm' ); ?>
