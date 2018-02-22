<?php get_header(); ?>

			<div class="content">

				<div class="wrap cf">

						<main id="content" class="main-content cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

							<?php if ( function_exists('yoast_breadcrumb') ) {
									yoast_breadcrumb('<p class="breadcrumbs">','</p>');
							} ?>

							<h1 class="degree-title"><?php the_title(); ?></h1>

						</main>

						<div class="sidebar cf" role="complementary">

								<div class="sidebar-well">
										<h3>Request My Info Packet</h3>
										<div class="step-form">
												<script src="http://requestforms.learninghouse.com/form/show/west-virginia-state-university/multi-step/686/3496/online.wvstateu.edu:thank-you:request_id" type="text/javascript"></script>
										</div>
								</div>

						</div>

				</div>

			</div>

<?php get_footer(); ?>
