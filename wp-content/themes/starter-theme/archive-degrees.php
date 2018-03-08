<?php get_header(); ?>

			<div class="content">

				<div class="wrap cf">

					<h1 class="archive-title"><?php post_type_archive_title(); ?></h1>

					<main id="content" class="main-content cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

						<div class="program-list">
							<?php /* Call in Program Custom Post Type */ ?>
							<?php $loop = new WP_Query( array(
									'post_type' => 'degrees',
									'posts_per_page' => -1,
									'orderby' => 'name',
									'order'   => 'ASC'
							) ); ?>
							<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>

							<?php $feat_image = wp_get_attachment_url( get_post_thumbnail_id($post->ID) ); ?>
							<article <?php post_class( 'cf card' ); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting" style="background-image :url(<?php echo $feat_image;?>)">
									<h4 class="card__title" itemprop="headline"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
							</article>
							<?php endwhile; wp_reset_query(); ?>
						</div>

					</main>

				</div>

			</div>

<?php get_footer(); ?>
