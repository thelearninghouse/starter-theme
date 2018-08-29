<?php
/*
Template Name: OLC Online Degrees List
*/
get_header(); ?>

<style media="screen">
	button:focus {
		/* border: 7px solid #ff6f6f; */
	}
	button.mixitup-control-active {
	    background: darkred;
	}
</style>
<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/page-title' ); ?>

	<div class="wrapLg">

		<div class="program-filters">
			 <button class="program-filters__button button" data-filter="all">All Degrees</button>
			 <button class="program-filters__button program-filters__button--undergraduate button" data-filter=".bachelors">Bachelor's</button>
			 <button class="program-filters__button program-filters__button--graduate button" data-filter=".masters">Master's</button>
		</div>

		<?php /* Call in Program Custom Post Type */ ?>
		<?php $loop = new WP_Query( array(
				'post_type' => 'degrees',
				'posts_per_page' => -1,
				'orderby' => 'name',
				'order'   => 'ASC'
		) );
		$program_count = $loop->post_count;
		// if ( $program_count > 5) {} ?>

		<ul id="mix-container" class="programList cardList flexGrid mixitup">
			<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
			<?php $tax_terms = get_the_terms($post->ID, 'degree_level'); ?>
			<?php $feat_image = wp_get_attachment_url( get_post_thumbnail_id($post->ID) ); ?>
				<li class="programList__item flexGrid__item">
					<a class="card programCard" href="<?php the_permalink(); ?>">
						<div>
							<div class="card__image">
								<?php
									$image = get_field('hero_background_image');
									$card = $image['sizes'][ 'medium' ];
									$alt = $image['alt'];
								?>
								<img src="<?php echo $card; ?>" alt="<?php echo $alt; ?>">
							</div>
							<div class="card__copy">
								<h3 class="h4 card__heading"><?php the_title(); ?></h3>
								<p class="card__description"><?php the_field('program_summary'); ?></p>
							</div>
						</div>
						<div class="card__action"><span class="button">View Program Information</span></div>
					</a>
				</li>
			<?php endwhile; wp_reset_query(); ?>
		</ul>
	</div>

</main>

<?php get_template_part( 'template-parts/cta-footer' ); ?>

<?php get_footer(); ?>
