<?php get_header(); ?>


<main id="content" class="mainContent" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/page-title' ); ?>

	<div class="wrapLg pageWrapper">

		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

			<section class="pageContent">
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> role="article" itemscope itemprop="blogPost" itemtype="http://schema.org/BlogPosting">

				  <section class="entryContent" itemprop="articleBody">
				    <?php the_content(); ?>
				  </section> <?php // end article section ?>

				</article> <?php // end article ?>
			</section> <?php // end article section ?>

		<?php endwhile; endif; ?>

		<?php get_sidebar(); ?>

	</div>

</main>

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

        $(document).on('scroll', function(){
           value = $(window).scrollTop();
           progressBar.attr('value', value);
        });
      });
      </script>

<?php get_footer(); ?>
