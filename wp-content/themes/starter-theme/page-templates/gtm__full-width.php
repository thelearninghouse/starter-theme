<?php /* Template Name: GTM Full Width */ ?>
<?php get_header( 'gtm' ); ?>

<main id="content" class="wrap-lg main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

	<h1><?php the_title(); ?></h1>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

	<article <?php post_class(); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

		<section class="page-content" itemprop="articleBody">
			<?php the_content(); ?>
		</section> <?php // end article section ?>

	</article>

	<?php endwhile; endif; ?>

</main>

<?php get_footer( 'gtm' ); ?>
