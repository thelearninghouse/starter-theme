<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap cf">

					<main id="main" class="cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

						<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							<article id="post-<?php the_ID(); ?>" <?php post_class('cf'); ?> role="article" itemscope itemprop="blogPost" itemtype="http://schema.org/BlogPosting">

							  <header class="article-header entry-header">
	                <?php if ( function_exists('yoast_breadcrumb') ) {
	                    yoast_breadcrumb('<p id="breadcrumbs">','</p>');
	                } ?>

							    <h1 class="entry-title single-title" itemprop="headline" rel="bookmark"><?php the_title(); ?></h1>

							    <p class="byline entry-meta vcard">

							      <?php printf( __( 'Posted', 'bonestheme' ).' %1$s %2$s',
							         /* the time the post was published */
							         '<time class="updated entry-time" datetime="' . get_the_time('Y-m-d') . '" itemprop="datePublished">' . get_the_time(get_option('date_format')) . '</time>',
							         /* the author of the post */
							         '<span class="by">'.__( 'by', 'bonestheme' ).'</span> <span class="entry-author author" itemprop="author" itemscope itemptype="http://schema.org/Person">' . get_the_author_link( get_the_author_meta( 'ID' ) ) . '</span>'
							      ); ?>

							    </p>

							  </header> <?php // end article header ?>

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

					</main>

					<?php get_sidebar(); ?>

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

              console.log(docHeight);
              console.log(winHeight);

              $(document).on('scroll', function(){
                 value = $(window).scrollTop();
                 progressBar.attr('value', value);
              });
            });
            </script>

<?php get_footer(); ?>
