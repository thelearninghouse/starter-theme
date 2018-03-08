<?php get_header(); ?>

	<?php get_template_part( 'template-parts/hero_title' ); ?>

	<div class="content">

		<div class="wrap cf">

				<main id="content" class="main-content cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

					<div class="program-list">
						<div class="program-list__text">
							<h2>Undergraduate Programs</h2>
							<p><?php echo term_description( '4', 'degree_level' ) ?>
						</div>
						<?php $loop = new WP_Query( array(
								'post_type' => 'degrees',
								'posts_per_page' => -1,
								'degree_level' => 'undergraduate',
								'orderby' => 'name',
								'order'   => 'ASC'
						) ); ?>
						<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
								<h4 class="program-list__program-name" itemprop="headline"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
						<?php endwhile; wp_reset_query(); ?>
					</div>

					<div class="program-list">
						<div class="program-list__text">
							<h2>Graduate Programs</h2>
							<p><?php echo term_description( '3', 'degree_level' ) ?>
						</div>
						<?php $loop = new WP_Query( array(
								'post_type' => 'degrees',
								'posts_per_page' => -1,
								'degree_level' => 'graduate',
								'orderby' => 'name',
								'order'   => 'ASC'
						) ); ?>
						<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
								<h4 class="program-list__program-name" itemprop="headline"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
						<?php endwhile; wp_reset_query(); ?>
					</div>

				</main>

		</div>

	</div>

<?php get_footer(); ?>
