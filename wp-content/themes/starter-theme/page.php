<?php
/**
 * The template for displaying all pages by default.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package tlh-starter-theme
 */

get_header(); ?>

	<div class="content">

		<div class="wrap">

				<main id="content" class="main-content cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

					<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

					<article <?php post_class( 'cf' ); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

						<?php get_template_part( 'template-parts/hero_title' ); ?>

						<section class="page-content cf" itemprop="articleBody">
							<?php the_content(); ?>
						</section> <?php // end article section ?>

					</article>

					<?php endwhile; endif; ?>
					
					<?php get_sidebar(); ?>

				</main>


		</div>

	</div>

<?php get_footer(); ?>
