<?php get_header(); ?>

			<div class="hero-title">
				<div class="wrap-lg">
					<h1>Blog</h1>
				</div>
			</div>

			<div id="content">

				<div id="inner-content">

						<main id="main" class="cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

							<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							<article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article">

								<section class="entry-content cf">

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
                  <h2 class="entry-title">
										<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a>
									</h2>

								</section>

								<?php $blog_class_name = 'featured-image-' . get_the_ID(); ?>
                <div class="featured-image <?php echo $blog_class_name; ?>"></div>

								<?php /* If page has a featured image, use it. Otherwise defaults to image set from main stylesheet */ ?>
								<?php if( has_post_thumbnail() ) : ?>
								<?php tlh_responsive_bg_style( $blog_class_name ); ?>
								<?php endif; ?>


							</article>

							<?php endwhile; ?>

									<?php bones_page_navi(); ?>

							<?php else : ?>

									<article id="post-not-found" class="hentry cf">
											<header class="article-header">
												<h1><?php _e( 'Oops, Post Not Found!', 'bonestheme' ); ?></h1>
										</header>
											<section class="entry-content">
												<p><?php _e( 'Uh Oh. Something is missing. Try double checking things.', 'bonestheme' ); ?></p>
										</section>
										<footer class="article-footer">
												<p><?php _e( 'This is the error message in the index.php template.', 'bonestheme' ); ?></p>
										</footer>
									</article>

							<?php endif; ?>


						</main>

                         <!--<div id="sidebar_blog" class="sidebar cf" role="complementary">

                            <?php dynamic_sidebar( 'Sidebar Blog' ); ?>

                        </div>-->

				</div>

			</div>


<?php get_footer(); ?>
