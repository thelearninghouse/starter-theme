<?php get_header(); ?>


<main id="content" class="mainContent" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/page-title' ); ?>
  
	<section aria-label="Page Content">
		<div class="pageContent wrapLg">
			<div class="pageContent__main">
				<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
						<?php the_content(); ?>
				<?php endwhile; endif; ?>
			</div>
			<div class="pageContent__sidebar">
				<?php get_sidebar(); ?>
			</div>
		</div>
	</section>

</main>

<!-- Progress Bar Script -->
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
