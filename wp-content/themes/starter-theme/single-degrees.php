<?php get_header(); ?>

			<?php get_template_part( 'template-parts/hero_title' ); ?>

			<div class="content">

				<div class="wrap">

						<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

							<?php if ( function_exists('yoast_breadcrumb') ) {
									yoast_breadcrumb('<p class="breadcrumbs">','</p>');
							} ?>

						</main>

				</div>

			</div>

<?php get_footer(); ?>
