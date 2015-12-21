<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap cf">

						<main id="main" class="cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

								<?php /* Call in Program Custom Post Type */ ?>
								<?php $loop = new WP_Query( array( 'post_type' => 'programs', 'posts_per_page' => -1 ) ); ?>
								<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>

								<article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

										<h3 class="page-title" itemprop="headline"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>

								</article>

							<?php endwhile; wp_reset_query(); ?>

						</main>

				</div>

			</div>

<?php get_footer(); ?>
