<?php /* Template Name: OLC Calendar */ ?>

<?php get_header(); ?>

<main id="content" class="main-content" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/page-title' ); ?>

	<section class="page-content" aria-label="Page Content">
		<div class="pageContent wrapLg">
			<div class="pageContent__main">
				<?php	$loop = new WP_Query( array(
					'post_type' => 'semesters',
					'posts_per_page' => -1,
					'meta_key' => 'semester_end_date',
					'meta_value' => date('Ymd'), // Get today's date in the format that ACF saves dates in
					'meta_compare' => '>=',
					'orderby' => 'meta_value_num',
					'order'   => 'ASC'
				) ); // Get next earliest start date ?>
				<?php if (have_posts()) { ?>
					<ul class="academic-calendar">
					<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>

						<?php // Formatting dates
							$formatted_start_date = date( 'm/d/Y', strtotime( get_field( 'semester_start_date' ) ) );
							$formatted_add_date = date( 'm/d/Y', strtotime( get_field( 'semester_last_add_date' ) ) );
							$formatted_end_date = date( 'm/d/Y', strtotime( get_field( 'semester_end_date' ) ) );
						?>

						<li class="academic-calendar__semester">
							<h3 class="academic-calendar__semester-title"><?php the_title(); ?></h3>
							<dl class="academic-calendar__semester-dates">
								<dt>Start Date</dt>
								<dd><?php echo $formatted_start_date; ?></dd>
								<dt>Last Day to Add</dt>
								<dd><?php echo $formatted_add_date; ?></dd>
								<dt>Term Ends</dt>
								<dd><?php echo $formatted_end_date; ?></dd>
							</dl>
						</li>
					<?php endwhile; wp_reset_query(); ?>
					</ul>
					<hr>
				<?php } ?>
				<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
					<?php the_content(); ?>
				<?php endwhile; ?>
				<?php endif; ?>
			</div>
			<div class="pageContent__sidebar">
				<?php get_sidebar(); ?>
			</div>
		</div>
	</section>

</main>

<?php get_footer(); ?>
