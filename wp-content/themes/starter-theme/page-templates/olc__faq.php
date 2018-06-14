<?php /* Template Name: FAQ List */ ?>

<?php get_header(); ?>

<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/hero_title' ); ?>

		<div class="wrap page-wrapper">
			<section class="page-content" aria-label="Page Content">

			<?php if (have_posts()) : while (have_posts()) : the_post();
				the_content();
			endwhile; endif; ?>
			<?php

			if ( get_field( 'faq_list_include_hidden_faqs' ) ) {
				$faq_posts_query = new WP_Query( array(
					'post_type' => 'faq',
					'posts_per_page' => -1,
					'orderby' => 'name',
					'order'   => 'ASC'
				) );
			} else {
				$faq_posts_query = new WP_Query( array(
					'post_type' => 'faq',
					'posts_per_page' => -1,
					'meta_query' => array(
						'relation' => 'OR',
						array(
							'key' => 'faq_exclude_from_list',
							'compare' => 'NOT EXISTS',
							'value' => ''
						),
						array(
							'key' => 'faq_exclude_from_list',
							'value' => '0'
						)
					),
					'orderby' => 'name',
					'order'   => 'ASC'
				) );
			}

			$faq_posts = $faq_posts_query->posts;

			if ( $faq_posts ) {

				$faq_list = array();

				if ( get_field( 'faq_list_group_by_faq_category' ) ) {

					foreach( $faq_posts as $post) { // variable must be called $post (IMPORTANT)
						setup_postdata($post);
						$current_faq_category = get_the_terms( $post->ID , 'faq_category' );

						$faq_list_key = $current_faq_category == false ? 'uncategorized' : $current_faq_category[0]->slug;
						$faq_list_title = $current_faq_category == false ? 'Uncategorized' : $current_faq_category[0]->name;

						$faq_list[$faq_list_key]['title'] = $faq_list_title;
						$faq_list[$faq_list_key]['questions'][] = array(
							'title' => get_the_title(),
							'content' => get_the_content()
						);
					}

					ksort($faq_list);

					foreach ($faq_list as $key => $faq_cat_list) {
						echo '<h2>' . $faq_cat_list['title'] . '</h2>';
						tlh_accordion( $faq_cat_list['questions'] );
					}
				} else {

					foreach( $faq_posts as $post) { // variable must be called $post (IMPORTANT)
						setup_postdata($post);
						$faq_list[] = array(
							'title' => get_the_title(),
							'content' => get_the_content()
						);
					}

					tlh_accordion( $faq_list );
				}

				wp_reset_postdata();

			} ?>
		</section>

		<?php get_template_part( 'template-parts/sidebar' ); ?>

	</div>

	<?php if ( have_rows( 'page_read_more_items' ) ): ?>
		<section aria-label="Read More" class="related-pages">
			<div class="wrap-lg">
				<?php get_template_part( 'template-parts/read_more' ); ?>
			</div>
		</section>
	<?php endif; ?>

</main>

<?php get_template_part( 'template-parts/cta-footer' ); ?>


<?php get_footer(); ?>
