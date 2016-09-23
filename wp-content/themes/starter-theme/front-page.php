<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap cf">

						<main id="main" class="cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

		          <h2>Undergraduate Programs</h2>
		          <div class="tax-description"><?php echo term_description( '3', '' ); ?></div>
		          <div class="card-container">
		              <?php /* Call in Program Custom Post Type */ ?>
		              <?php $loop = new WP_Query( array(
		                  'post_type' => 'degrees',
		                  'posts_per_page' => -1,
		                  'degree_level' => 'undergraduate',
		                  'orderby' => 'name',
		                  'order'   => 'ASC'
		              ) ); ?>
		              <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>

		              <?php $feat_image = wp_get_attachment_url( get_post_thumbnail_id($post->ID) ); ?>
		              <article id="post-<?php the_ID(); ?>" <?php post_class( 'cf card' ); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting" style="background-image :url(<?php echo $feat_image;?>)">
		                  <h4 class="page-title" itemprop="headline"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
		              </article>
		              <?php endwhile; wp_reset_query(); ?>
		          </div>

		          <h2>Graduate Programs</h2>
		          <div class="tax-description"><?php echo term_description( '7', '' ); ?></div>
		          <div class="card-container">
		              <?php /* Call in Program Custom Post Type */ ?>
		              <?php $loop = new WP_Query( array(
		                  'post_type' => 'degrees',
		                  'posts_per_page' => -1,
		                  'degree_level' => 'graduate',
		                  'orderby' => 'name',
		                  'order'   => 'ASC'
		              ) ); ?>
		              <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>

		              <?php $feat_image = wp_get_attachment_url( get_post_thumbnail_id($post->ID) ); ?>
		              <article id="post-<?php the_ID(); ?>" <?php post_class( 'cf card' ); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting" style="background-image :url(<?php echo $feat_image;?>)">
		                  <h4 class="page-title" itemprop="headline"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
		              </article>
		              <?php endwhile; wp_reset_query(); ?>
		          </div>

						</main>

				</div>

			</div>

<?php get_footer(); ?>
