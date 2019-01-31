<?php get_header(); ?>

<main id="content" class="mainContent" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/page-title' ); ?>

	<section aria-label="Page Content">
		<div class="pageContent wrapLg">
			<div class="pageContent__main">
				<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
						<?php the_content(); ?>
				<?php endwhile; endif; ?>
				<?php
					$fruit_data = array(
						array(
							'title' => 'Apples',
							'content' => 'Fruit 1',
						),
						array(
							'title' => 'Oranges',
							'content' => 'Fruit 2',
						),
						array(
							'title' => 'Bananas',
							'content' => 'Fruit 3',
						),
					);

					$vegetable_data = array(
						array(
							'title' => 'Lettuce',
							'content' => 'Vegetable 1',
						),
						array(
							'title' => 'Carrots',
							'content' => 'Vegetable 2',
						),
					);

					$fruits_vegetables_data = array(
						array(
							'title' => 'Fruits',
							'content' => '<p>Here are some good fruits:</p>' . tlh_get_accordion( $fruit_data ),
						),
						array(
							'title' => 'Vegetables',
							'content' => '<p>Here are some good vegetables:</p>' . tlh_get_accordion( $vegetable_data ),
						),
					);

					$bread_data = array(
						array(
							'title' => 'Whole Wheat',
							'content' => 'Bread 1',
						),
						array(
							'title' => 'Sourdough',
							'content' => 'Bread 2',
						),
					);

					$accordion_data = array(
						array(
							'title' => 'Breads',
							'content' => '<p>Here are some good breads:</p>' . tlh_get_accordion( $bread_data ),
						),
						array(
							'title' => 'Fruits & Vegetables',
							'content' => '<p>There are many kinds of fruits and vegetables.</p>' . tlh_get_accordion( $fruits_vegetables_data ),
						),
					);

					tlh_accordion( $accordion_data );
				?>
			</div>
			<div class="pageContent__sidebar">
				<?php get_sidebar(); ?>
			</div>
		</div>
	</section>

</main>

<?php get_footer(); ?>
