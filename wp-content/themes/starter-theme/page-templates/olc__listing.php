<?php
/*
Template Name: OLC Child Page Listing
*/
get_header(); ?>

<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

	<?php get_template_part( 'template-parts/page-title' ); ?>

	<section class="magDegrees" aria-label="Degree Information">
		<div class="pageContent wrapLg">
			<div class="pageContent__main">
				<?php if (have_posts()) : while (have_posts()) : the_post();
					the_content();
				endwhile; endif; ?>
				<?php $args = array(
					'sort_order' => 'asc',
					'sort_column' => 'post_title',
					'parent' => get_the_ID(),
					'post_type' => 'page',
					'post_status' => 'publish'
				);
				$child_pages = get_pages($args);
				if ( $child_pages ) { ?>
					<ul class="cardList">
						<?php foreach ( $child_pages as $child_page ) {
							$child_id = $child_page->ID;

							$child_page_title = $child_page->post_title;
							$child_page_description = get_field( 'page_teaser_description', $child_id );
							$child_page_image = wp_get_attachment_image( get_field( 'page_teaser_image', $child_id ), 'full', false, array( 'class' => 'card__image' ) );
							$child_page_link = get_page_link( $child_id );
							$child_page_link_label = get_field( 'page_teaser_link_label', $child_id );
							?>
							<li class="card card--wideImage">
								<div>
									<?php echo $child_page_image ? $child_page_image : '<img class="card__image" src="' . get_template_directory_uri() . '/public/images/page-placeholder.svg" width="500" height="500" aria-hidden="true">'?>
								</div>
								<div>
									<div class="card__copy">
										<h2 class="h3 plain card__heading"><?php echo $child_page_title; ?></h2>
										<p class="card__description"><?php echo $child_page_description; ?></p>
									</div>
									<div class="card__action card__action--right">
										<a class="button button--outline button--arrow" href="<?php echo $child_page_link; ?>"><?php echo $child_page_link_label ? $child_page_link_label : 'View Page'; ?></a>
									</div>
								</div>
							</li>
						<?php } ?>
					</ul>
				<?php } ?>
			</div>
			<div class="pageContent__sidebar">
				<?php get_sidebar(); ?>
			</div>
		</div>
	</section>

</main>

<?php get_template_part( 'template-parts/cta-footer' ); ?>


<?php get_footer(); ?>
