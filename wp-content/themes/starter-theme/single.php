<?php get_header(); ?>

			<header class="hero-title">
			  <div class="wrap-lg">
			    <h1>
						<?php the_title(); ?>
						<span class="entry-date">Posted <?php echo get_the_date(); ?> by <?php the_author(); ?> |
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
							</span>
					</h1>
			  </div>
			</header>
			<?php tlh_responsive_bg_style('hero-title'); ?>

			<div id="content">

				<div id="inner-content" class="wrap cf">

					<main id="main-content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

						<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							<article id="post-<?php the_ID(); ?>" <?php post_class('cf'); ?> role="article" itemscope itemprop="blogPost" itemtype="http://schema.org/BlogPosting">

							  <section class="entry-content cf" itemprop="articleBody">
							    <?php the_content(); ?>
							  </section> <?php // end article section ?>

							</article> <?php // end article ?>

						<?php endwhile; ?>

						<?php else : ?>

							<article id="post-not-found" class="hentry cf">
									<header class="article-header">
										<h1><?php _e( 'Oops, Post Not Found!', 'bonestheme' ); ?></h1>
									</header>
									<section class="entry-content">
										<p><?php _e( 'Uh Oh. Something is missing. Try double checking things.', 'bonestheme' ); ?></p>
									</section>
									<footer class="article-footer">
											<p><?php _e( 'This is the error message in the single.php template.', 'bonestheme' ); ?></p>
									</footer>
							</article>

						<?php endif; ?>

						<div id="sidebar_blog" class="sidebar cf" role="complementary">

							<div class="sidebar__widget sidebar__widget--request-info">
								<h2 class="h3">Request Your Free Info Packet</h2>
								<a href="/get-started/" class="button">Get Started</a>
							</div>

							<?php dynamic_sidebar( 'sidebar-1' ); ?>

						</div>

					</main>

				</div>

			</div>


      <script>
     	// Load document before calculating window height
      $(document).on('ready', function() {
        var winHeight = $(window).height(),
            docHeight = $(document).height(),
            progressBar = $('progress'),
            max, value;

        /* Set the max scrollable area */
        max = docHeight - winHeight;
        progressBar.attr('max', max);

        console.log(winHeight);

        $(document).on('scroll', function(){
           value = $(window).scrollTop();
           progressBar.attr('value', value);
        });
      });
      </script>

<?php get_footer(); ?>
