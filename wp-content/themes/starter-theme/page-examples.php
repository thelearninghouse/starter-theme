<?php get_header(); ?>
<style media="screen">
	.example {
		margin: .5em 2em .5em 2em;
		border-bottom: 2px solid lightgray;
		padding: 1.5em .5em 1.5em .5em;
		min-height: 150px;
	}
</style>
<main id="content" class="mainContent" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

<div id="vlh-app">
	{{msg}}
</div>


<div class="example">
	<h2>Slider with Glide.js</h2>
	<div id="glide-example" class="glide">
	  <div class="glide__track" data-glide-el="track">
	    <ul class="glide__slides">
	      <li class="glide__slide">
	      	<img src="https://via.placeholder.com/350x150" alt="">
	      </li>
	      <li class="glide__slide">
	      	<img src="https://via.placeholder.com/350x150" alt="">
	      </li>
	      <li class="glide__slide">
	      	<img src="https://via.placeholder.com/350x150" alt="">
	      </li>
				<li class="glide__slide">
	      	<img src="https://via.placeholder.com/350x150" alt="">
	      </li>
	      <li class="glide__slide">
	      	<img src="https://via.placeholder.com/350x150" alt="">
	      </li>
	      <li class="glide__slide">
	      	<img src="https://via.placeholder.com/350x150" alt="">
	      </li>
	    </ul>
	  </div>
		<div class="glide__arrows" data-glide-el="controls">
	    <button class="glide__arrow glide__arrow--prev" data-glide-dir="<">prev</button>
	    <button class="glide__arrow glide__arrow--next" data-glide-dir=">">next</button>
	  </div>
		<!-- <div class="glide__bullets" data-glide-el="controls">
	    <button class="glide__bullet" data-glide-dir="=0"></button>
	    <button class="glide__bullet" data-glide-dir="=1"></button>
	    <button class="glide__bullet" data-glide-dir="=2"></button>
	  </div> -->
	</div>
</div>

<div class="example accordions-example">
	<dl id="accordion-1" role="presentation" class="accordion" data-allow-toggle="">
		<dt role="heading" aria-level="3">
			<button aria-expanded="false" class="accordion__trigger" aria-controls="sect1" id="accordion-1-header-1" type="button">
				<span class="accordion__title">Faculty of Theology</span>
				<span class="accordion__icon"></span>
			</button>
		</dt>
		<dd id="sect1" role="region" aria-labelledby="accordion-1-header-1" class="accordion__panel">
			<div>
				<h3>Accordion Content 1</h3>
				<a href="#">A tabable element</a>
			</div>
		</dd>
		<dt role="heading" aria-level="3">
			<button aria-expanded="false" class="accordion__trigger" aria-controls="sect2" id="accordion-1-header-2" type="button">
				<span class="accordion__title">School of Christian Leadership</span>
				<span class="accordion__icon"></span>
			</button>
		</dt>
		<dd id="sect2" role="region" aria-labelledby="accordion-1-header-2" class="accordion__panel">
			<div>
				<h3>Accordion Content 2</h3>
			</div>
		</dd>
		<dt role="heading" aria-level="3">
			<button aria-expanded="false" class="accordion__trigger" aria-controls="sect3" id="accordion-1-header-3" type="button">
				<span class="accordion__title">Faculty of Natural &amp; Applied Sciences</span>
				<span class="accordion__icon"></span>
			</button>
		</dt>
		<dd id="sect3" role="region" aria-labelledby="accordion-1-header-3" class="accordion__panel">
			<div>
				<h3>Accordion Content 3</h3>
			</div>
		</dd>
	</dl>
</div>

<div class="accordions-nested wrapLg">
	<h2>Nested Accordions</h2>
	<?php
		$phobos_accordion_data = array(
			array(
				'title' => 'Mission 1',
				'content' => 'Diameter: 1,470km'
			),
			array(
				'title' => 'Mission 2',
				'content' => 'Diameter: 1,123km'
			),
			array(
				'title' => 'Mission 3',
				'content' => 'Diameter: 1,123km'
			),
			array(
				'title' => 'Mission 4',
				'content' => 'Diameter: 1,123km'
			),
			array(
				'title' => 'Mission 5',
				'content' => 'Diameter: 1,123km'
			)
		);
		$saturn_accordion_data = array(
			array(
				'title' => 'Iapetus',
				'content' => 'Diameter: 1,470km'
			),
			array(
				'title' => 'Dione',
				'content' => 'Diameter: 1,123km'
			)
		);

		$mars_accordion_data = array(
			array(
				'title' => 'Phobos',
				'content' => '<p>Diameter: 22.2km</p>' . tlh_get_accordion( $phobos_accordion_data )
			),
			array(
				'title' => 'Deimos',
				'content' => 'Diameter: 12.6km'
			)
		);

		$accordion_data = array(
			array(
				'title' => 'Saturn',
				'content' => '<p>Here are moons of Saturn:</p>' . tlh_get_accordion( $saturn_accordion_data )
			),
			array(
				'title' => 'Mars',
				'content' => '<ul><li>List 1</li><li>List 2</li></ul><p>Here are moons of Mars:</p>' . tlh_get_accordion( $mars_accordion_data )
			),
			array(
				'title' => 'Jupiter',
				'content' => 'content.'
			)
		);

		tlh_accordion( $accordion_data );
	?>
</div>

	<?php get_template_part( 'template-parts/page-title' ); ?>



	<div class="programList">
		<div class="programList__text">
			<h2>Undergraduate Programs</h2>
			<p><?php echo term_description( '4', 'degree_level' ) ?>
		</div>
		<div class="programListContainer">
			<?php $loop = new WP_Query( array(
					'post_type' => 'degrees',
					'posts_per_page' => -1,
					'degree_level' => 'undergraduate',
					'orderby' => 'name',
					'order'   => 'ASC'
			) ); ?>
			<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
			<?php $tax_terms = get_the_terms($post->ID, 'degree_level'); ?>
				<article class="card programCard mix<?php if ( is_array( $tax_terms ) ) { foreach ( $tax_terms as $tax_term ) { echo ' ' . $tax_term->slug; } } ?>" role="article" itemscope itemtype="http://schema.org/BlogPosting">
						<a href="<?php the_permalink(); ?>">
							<span class="programCard__image">
								<?php
									$image = get_field('hero_background_image');
									$card = $image['sizes'][ 'medium' ];
									$alt = $image['alt'];
								?>
								<img src="<?php echo $card; ?>" alt="<?php echo $alt; ?>">
							</span>
							<span class="h4 programCard__name"><?php the_field('program__short-name'); ?></span>
							<span class="programCard__excerpt"><?php the_field('program_summary'); ?></span>
							<span class="programCard__button button">View Program Information</span>
						</a>
				</article>
			<?php endwhile; wp_reset_query(); ?>
		</div>
	</div>

	<div class="programList">
		<div class="programList__text">
			<h2>Graduate Programs</h2>
			<p><?php echo term_description( '3', 'degree_level' ) ?>
		</div>
		<div class="programListContainer">
			<?php $loop = new WP_Query( array(
					'post_type' => 'degrees',
					'posts_per_page' => -1,
					'degree_level' => 'graduate',
					'orderby' => 'name',
					'order'   => 'ASC'
			) ); ?>
			<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
				<?php $tax_terms = get_the_terms($post->ID, 'degree_level'); ?>
					<article class="card programCard mix<?php if ( is_array( $tax_terms ) ) { foreach ( $tax_terms as $tax_term ) { echo ' ' . $tax_term->slug; } } ?>" role="article" itemscope itemtype="http://schema.org/BlogPosting">
							<a href="<?php the_permalink(); ?>">
								<span class="programCard__image">
									<?php
										$image = get_field('hero_background_image');
										$card = $image['sizes'][ 'medium' ];
										$alt = $image['alt'];
									?>
									<img src="<?php echo $card; ?>" alt="<?php echo $alt; ?>">
								</span>
								<span class="h4 programCard__name"><?php the_field('program__short-name'); ?></span>
								<span class="programCard__excerpt"><?php the_field('program_summary'); ?></span>
								<span class="programCard__button button">View Program Information</span>
							</a>
					</article>
				<?php endwhile; wp_reset_query(); ?>
			</div>
	</div>

</main>

<?php get_footer(); ?>
