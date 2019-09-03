<?php get_header(); ?>

<main id="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/page-title' ); ?>

	<section class="pageContent" aria-label="Page Content">
		<div class="wrapLg pageContent">
			<div class="pageContent__main">
				<div class="resourceArchiveList">
					<?php if ( have_rows( 'resource_archive_content', 'option' ) ) : ?> 
						<?php
						while ( have_rows( 'resource_archive_content', 'option' ) ) :
							the_row();
							?>
							<?php the_sub_field( 'program_resources' ); ?>
						<?php endwhile; ?>
					<?php endif; ?>					<?php include( 'template-parts/content/resource-archive.php' ); ?>
				</div>
			</div>
			<div class="pageContent__sidebar">
				<?php get_sidebar(); ?>
			</div>
		</div>
	</section>

</main>

<?php get_footer(); ?>
