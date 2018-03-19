<?php get_header(); ?>

			<div class="hero-title">
				<div class="wrap-lg">
					<h1><?php the_archive_title(); ?></h1>
				</div>
			</div>

			<div class="content">

					<main class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

						<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> role="article">

								<section class="entry-content">

									<p class="byline entry-meta vcard">
									<span class="entry-date">Posted <?php echo get_the_date(); ?> by <?php the_author(); ?> | </span>
										<?php
										$categories = get_the_category();
										$separator = ', ';
										$output = '';
										if ( ! empty( $categories ) ) {
												foreach( $categories as $category ) {
														$output .= '<a href="' . esc_url( get_category_link( $category->term_id ) ) . '" alt="' . esc_attr( sprintf( __( 'View all posts in %s', 'textdomain' ), $category->name ) ) . '">' . esc_html( $category->name ) . '</a>' . $separator;
												}
												echo trim( $output, $separator );
										} ?>
									</p>
									<h2 class="entry-title"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>

								</section>

								<div class="featured-image"></div>

								<?php /* If page has a featured image, use it. Otherwise defaults to image set from main stylesheet */ ?>
								<?php if( has_post_thumbnail() ) : ?>

									<style>
									@media screen and (min-width: 1200px) {
										.featured-image {
											background-image: url(<?php the_post_thumbnail_url('large'); ?>);
										}
									}
									@media screen and (min-width: 801px) and (max-width: 1200px) {
										.featured-image {
											background-image: url(<?php the_post_thumbnail_url('medium_large'); ?>);
										}
									}
									@media screen and (max-width: 800px) {
										.featured-image {
											background-image: url(<?php the_post_thumbnail_url('medium'); ?>);
										}
									}
									</style>
								<?php endif; ?>


							</article>

						<?php endwhile; ?>

								<?php tlh_page_navi(); ?>

						<?php else : ?>

								<article id="post-not-found" class="hentry cf">
									<header class="post-header">
										<h1><?php _e( 'Oops, Post Not Found!', 'bonestheme' ); ?></h1>
									</header>
									<section class="post-content">
										<p><?php _e( 'Uh Oh. Something is missing. Try double checking things.', 'bonestheme' ); ?></p>
									</section>
									<footer class="post-footer">
											<p><?php _e( 'This is the error message in the archive.php template.', 'bonestheme' ); ?></p>
									</footer>
								</article>

						<?php endif; ?>

					</main>

			</div>

<?php get_footer(); ?>
