<?php
/*
Template Name: Online Degrees
*/
get_header(); ?>

			<?php get_template_part( 'template-parts/hero_title' ); ?>

			<div class="content">

				<div class="wrap cf">

					<main id="content" class="main-content cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

						<div class="program-filters">
							 <button class="program-filters__button button" data-filter="all">All Degrees</button>
							 <button class="program-filters__button program-filters__button--undergraduate button" data-filter=".undergraduate">Undergraduate</button>
							 <button class="program-filters__button program-filters__button--graduate button" data-filter=".graduate">Graduate</button>
						</div>

						<div class="program-list mixitup">
							<?php /* Call in Program Custom Post Type */ ?>
							<?php $loop = new WP_Query( array(
									'post_type' => 'degrees',
									'posts_per_page' => -1,
									'orderby' => 'name',
									'order'   => 'ASC'
							) ); ?>
							<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
							<?php $tax_terms = get_the_terms($post->ID, 'degree_level'); ?>
							<?php $feat_image = wp_get_attachment_url( get_post_thumbnail_id($post->ID) ); ?>
							<article class="card program-card mix<?php if ( is_array( $tax_terms ) ) { foreach ( $tax_terms as $tax_term ) { echo ' ' . $tax_term->slug; } } ?>" role="article" itemscope itemtype="http://schema.org/BlogPosting">
									<a href="<?php the_permalink(); ?>">
                    <span class="program-card__image">
                      <?php
                        $image = get_field('hero_background_image');
                        $card = $image['sizes'][ 'medium' ];
                        $alt = $image['alt'];
                      ?>
                      <img src="<?php echo $card; ?>" alt="<?php echo $alt; ?>">
                    </span>
                    <span class="h4 program-card__name"><?php the_field('program__short-name'); ?></span>
                    <span class="program-card__excerpt"><?php the_field('program_summary'); ?></span>
                    <span class="program-card__button button">View Program Information</span>
                  </a>
							</article>
							<?php endwhile; wp_reset_query(); ?>
						</div>

					</main>

				</div>

			</div>

<?php get_footer(); ?>
