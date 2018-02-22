<?php get_header(); ?>

			<div class="content">

				<div class="wrap cf">

						<main id="content" class="main-content cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

							<div class="program-list">
								<h2>Undergraduate Programs</h2>
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
								<h2>Graduate Programs</h2>
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
