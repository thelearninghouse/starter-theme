<div class="programListing">
  <h2 class="programListing__heading">Undergraduate Programs</h2>
  <ul class="flexGrid flexGrid--stretch cardList">
    <?php $loop = new WP_Query( array(
        'post_type' => 'degrees',
        'posts_per_page' => -1,
        'degree_level' => 'undergraduate',
        'orderby' => 'name',
        'order'   => 'ASC'
    ) ); ?>
    <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
    <?php $tax_terms = get_the_terms($post->ID, 'degree_level'); ?>
      <li class=" flexGrid__item mix<?php if ( is_array( $tax_terms ) ) { foreach ( $tax_terms as $tax_term ) { echo ' ' . $tax_term->slug; } } ?>" role="article" itemscope itemtype="http://schema.org/BlogPosting">
        <a class="card programCard" href="<?php the_permalink(); ?>">
					<div>
            <div class="card__image">
              <?php
                $image = get_field('hero_background_image');
                $card = $image['sizes'][ 'medium' ];
                $alt = $image['alt'];
              ?>
              <img src="<?php echo $card; ?>" alt="<?php echo $alt; ?>">
            </div>
						<div class="card__copy">
	            <h3 class="h4 card__heading"><?php the_title(); ?></h3>
	            <p class="card__description"><?php the_field('program_summary'); ?></p>
						</div>
					</div>
          <div class="card__action"><span class="button">View Program Information</span></div>
        </a>
      </li>
    <?php endwhile; wp_reset_query(); ?>
  </ul>
	<h2 class="programListing__heading">Undergraduate Programs</h2>
	<ul class="flexGrid flexGrid--stretch cardList">
    <?php $loop = new WP_Query( array(
        'post_type' => 'degrees',
        'posts_per_page' => -1,
        'degree_level' => 'graduate',
        'orderby' => 'name',
        'order'   => 'ASC'
    ) ); ?>
    <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
    <?php $tax_terms = get_the_terms($post->ID, 'degree_level'); ?>
      <li class=" flexGrid__item mix<?php if ( is_array( $tax_terms ) ) { foreach ( $tax_terms as $tax_term ) { echo ' ' . $tax_term->slug; } } ?>" role="article" itemscope itemtype="http://schema.org/BlogPosting">
        <a class="card programCard" href="<?php the_permalink(); ?>">
					<div>
            <div class="card__image">
              <?php
                $image = get_field('hero_background_image');
                $card = $image['sizes'][ 'medium' ];
                $alt = $image['alt'];
              ?>
              <img src="<?php echo $card; ?>" alt="<?php echo $alt; ?>">
            </div>
						<div class="card__copy">
	            <h3 class="h4 card__heading"><?php the_title(); ?></h3>
	            <p class="card__description"><?php the_field('program_summary'); ?></p>
						</div>
					</div>
          <div class="card__action"><span class="button">View Program Information</span></div>
        </a>
      </li>
    <?php endwhile; wp_reset_query(); ?>
  </ul>
</div>
