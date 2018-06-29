<?php get_header(); ?>

<main id="main" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/page_title' ); ?>

	<div class="wrap">

		<?php if (have_posts()) { ?>
			<ul class="flex-grid flex-grid--stretch">

			<?php while (have_posts()) {
				the_post(); ?>
				<li class="flex-grid__item">
					<a class="card" href="<?php the_permalink(); ?>" title="View infographic: <?php the_title(); ?>, including a transcript.">
						<div>
							<div class="card__image">
								<?php $guide_cover_image = get_field( 'guide_cover_image' );
								if ( $guide_cover_image ) {
									echo wp_get_attachment_image( $guide_cover_image, 'large' );
								} else { ?>
									<img src="<?php echo get_template_directory_uri(); ?>/library/images/guide-placeholder.svg" width="300" height="157">
								<?php } ?>
							</div>
							<div class="card__copy">
								<h2 class="h4 card__heading"><?php the_title(); ?></h2>
								<?php $infographic_summary = get_field( 'resource_summary' );
								if ( $infographic_summary ) { ?>
									<p class="card__description"><?php the_field( 'resource_summary' ); ?></p>
								<?php } ?>
							</div>
						</div>
						<span class="card__action">Read More →</span>
					</a>
				</li>
			<?php } ?>

			</ul>

			<?php tlh_page_navi(); ?>

		<?php } else { ?>

			<p>There are currently no resources listed here.</p>

		<?php } ?>
		
	</div>

</main>

<?php get_footer(); ?>
