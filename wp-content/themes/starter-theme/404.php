<?php get_header(); ?>

			<div class="hero-title">
				<div class="wrap-lg">
					<h1>404 - Article Not Found</h1>
				</div>
			</div>

			<div class="content">

				<div class="wrap cf">

					<main id="content" class="main-content cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

						<article class="post-not-found hentry cf">

							<header class="post-header">

								<h1 class="post-header__title"><?php _e( '404 - Article Not Found', 'tlh_theme' ); ?></h1>

							</header>

							<section class="post-content">

								<p><?php _e( 'The article you were looking for was not found, but maybe try looking again!'); ?></p>

							</section>

						</article>

						<?php get_sidebar(); ?>

					</main>

				</div>

			</div>

<?php get_footer(); ?>
