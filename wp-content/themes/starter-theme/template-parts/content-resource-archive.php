<?php if (have_posts()) { ?>

	<?php
	$vertical_args = array(
		'taxonomy' => 'degree_area',
		'parent' => 0
	);
	$verticals = get_terms($vertical_args);
	
	foreach($verticals as $vertical) {

		$args = array(
			'post_type' => get_query_var('post_type'),
			'posts_per_page' => -1,
			'orderby' => 'title',
			'order'   => 'ASC',
			'tax_query' => array(
				array(
					'taxonomy' => 'degree_area',
					'field' => 'slug',
					'terms' => $vertical->slug,
				),
			),
		);

		$vertical_resources = new WP_Query($args);

		if ( $vertical_resources->have_posts() ) { ?>
			<h2><?php echo $vertical->name; ?></h2>
			<ul class="resource-list">
				<?php while($vertical_resources->have_posts()) : $vertical_resources->the_post(); ?>
						<li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
				<?php endwhile; ?>
			</ul>
		<?php } ?>

<?php } ?>

<?php } else { ?>

	<p><em>There are currently no resources listed in this section.</em></p>

<?php } ?>
