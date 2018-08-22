<?php /* Template Name: OLC Resources Overview */ ?>

<?php get_header(); ?>

<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/page-title' ); ?>

		<div class="wrapLg page-wrapper">

				<section class="page-content">
					<div class="resources-wrapper">
							<div class="resources-overview">
								<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
									<?php the_content(); ?>
								<?php endwhile; endif; ?>
							</div>
							<?php $resources_items = get_field( 'resources_items' );
							if ( $resources_items ) { ?>
								<div class="resources-list">
									<ul class="tile-list tile-list--large">
										<?php foreach ( $resources_items as $resource_item ) {
											if ( $resource_item['type']['value'] == 'single-resource' ) {
												$resource_post_id = $resource_item['spotlight_post']->ID;
												$resource_post_type = $resource_item['spotlight_post']->post_type;

												$card_title = $resource_item['title'] ? $resource_item['title'] : $resource_item['spotlight_post']->post_title;

												// Get a custom summary if available, otherwise use the automatically generated excerpt
												if ( in_array( $resource_post_type, array( 'guide', 'infographic') ) ) {
													$card_description = $resource_item['description'] ? $resource_item['description'] : get_field( 'resource_summary', $resource_post_id );
												} else {
													setup_postdata( $resource_item['spotlight_post'] );
													$card_description = get_the_excerpt();
													wp_reset_postdata();
												}

												$card_link = get_the_permalink( $resource_post_id );
												$card_link_label = 'View ' . get_post_type_object( $resource_post_type )->labels->singular_name;

											} else {
												$card_title = $resource_item['title'] ? $resource_item['title'] : $resource_item['type']['label'];
												$card_description = $resource_item['description'];
												$card_link = '/' . $resource_item['type']['value'] . '/';
												$card_link_label = 'View ' . $resource_item['type']['label'];
											}
										?>
											<li>
												<div class="resource-card">
													<div class="resource-card__copy">
														<h2 class="resource-card__title"><?php echo $card_title; ?></h2>
														<p><?php echo $card_description; ?></p>
													</div>
													<a class="resource-card__action btn" href="<?php echo $card_link; ?>"><?php echo $card_link_label; ?></a>
												</div>
											</li>
										<?php } ?>
									</ul>
								</div>
							<?php } ?>
						</div>
				</section> <?php // end article section ?>

			<?php get_sidebar(); ?>

		</div>

</main>

<?php get_footer(); ?>
