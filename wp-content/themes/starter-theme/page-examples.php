<?php get_header(); ?>
<style media="screen">
	.example {
		margin: .5em 2em .5em 2em;
		border-bottom: 2px solid lightgray;
		padding: 1.5em .5em 1.5em .5em;
		min-height: 150px;
	}
</style>
<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

<div id="vlh-app">
	<button-counter></button-counter>
</div>

<div class="example">
	<h2>Slider with Glide.js</h2>
	<div class="glide">
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
		<div class="glide__bullets" data-glide-el="controls[nav]">
	    <button class="glide__bullet" data-glide-dir="=0"></button>
	    <button class="glide__bullet" data-glide-dir="=1"></button>
	    <button class="glide__bullet" data-glide-dir="=2"></button>
	  </div>
		<div class="glide__arrows" data-glide-el="controls">
	    <button class="glide__arrow glide__arrow--prev" data-glide-dir="<">prev</button>
	    <button class="glide__arrow glide__arrow--next" data-glide-dir=">">next</button>
	  </div>
	</div>
</div>
<!-- <div class="example">
	<h2>Using Bulma CSS Library</h2>

	<section class="hero is-primary">
	  <div class="hero-body">
	    <div class="container">
	      <h1 class="title">
	        Primary title
	      </h1>
	      <h2 class="subtitle">
	        Primary subtitle
	      </h2>
	    </div>
	  </div>
	</section>
</div> -->

<!-- <div class="example">
	<button class="button is-primary">Primary</button>
	<button class="button is-link">Link</button>
	<button class="button is-info">Info</button>
</div>

<div class="example">
	<h1 class="title">This Is a Title With a Tag</h1>
	<h2 class="subtitle">Subtitle</h2>
</div>

<div class="example">
	<span class="tag is-dark">Dark</span>
</div> -->

<div class="example accordions-example">
	<dl id="accordion-1" role="presentation" class="accordion" data-allow-toggle="">
	                <dt role="heading" aria-level="3">
	          <button aria-expanded="false" class="accordion__trigger" aria-controls="sect1" id="accordion-1-header-1" type="button">
	            <span class="accordion__title">Faculty of Theology</span>
	            <span class="accordion__icon"></span>
	          </button>
	        </dt>
	        <dd id="sect1" role="region" aria-labelledby="accordion-1-header-1" class="accordion__panel" hidden="">
	          <div>
	            <ul>
	<li>Biblical Studies (BA)
	<ul>
	<li>Archaeology</li>
	</ul>
	</li>
	</ul>
	<h4>Minors</h4>
	<ul>
	<li>Bible and Theology</li>
	</ul>
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
	            <ul>
	<li>Christian Leadership (BA)
	<ul>
	<li>Family &amp; Children's Ministry</li>
	<li>Intercultural Studies</li>
	<li>Pastoral Ministry</li>
	<li>Youth Ministry</li>
	<li>Interdisciplinary</li>
	</ul>
	</li>
	<li>Youth Ministry (BA)
	<ul>
	<li>General</li>
	<li>Ministering to Families</li>
	<li>Counseling Youth</li>
	<li>Intercultural Studies</li>
	</ul>
	</li>
	</ul>
	<h4>Minors</h4>
	<ul>
	<li>Family &amp; Children's Ministry</li>
	<li>Intercultural Studies</li>
	<li>Pastoral Ministry</li>
	<li>Youth Ministry</li>
	<li>Interdisciplinary</li>
	</ul>
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
	            <ul>
	<li>Biology (BS)
	<ul>
	<li>Gen biology</li>
	<li>Pre-Allied Health</li>
	<li>Human Biology</li>
	</ul>
	</li>
	<li>Computer Science (BS)
	<ul>
	<li>Web Systems and Applications</li>
	</ul>
	</li>
	<li>Environmental Science (BA)</li>
	<li>Environmental Science (BS)
	<ul>
	<li>Ecological Research</li>
	<li>Ecology and Field Biology</li>
	</ul>
	</li>
	<li>Environmental Science (BS – Honors)</li>
	<li>Kinesiology (BS)
	<ul>
	<li>Exercise Science</li>
	<li>Health &amp; Wellness</li>
	<li>Sports Management</li>
	<li>General Kinesiology</li>
	</ul>
	</li>
	<li>Mathematics (BA)</li>
	</ul>
	<h4>Minors</h4>
	<ul>
	<li>Environmental Science</li>
	<li>Mathematics</li>
	</ul>
	          </div>
	        </dd>
	              </dl>

	
</div>

	<?php get_template_part( 'template-parts/hero_title' ); ?>

	<dl id="accordion-1" role="presentation" class="accordion" data-allow-toggle="">
	                <dt role="heading" aria-level="3">
	          <button aria-expanded="false" class="accordion__trigger" aria-controls="sect1" id="accordion-1-header-1" type="button">
	            <span class="accordion__title">Faculty of Theology</span>
	            <span class="accordion__icon"></span>
	          </button>
	        </dt>
	        <dd id="sect1" role="region" aria-labelledby="accordion-1-header-1" class="accordion__panel" hidden="">
	          <div>
	            <ul>
	<li>Biblical Studies (BA)
	<ul>
	<li>Archaeology</li>
	</ul>
	</li>
	</ul>
	<h4>Minors</h4>
	<ul>
	<li>Bible and Theology</li>
	</ul>
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
	            <ul>
	<li>Christian Leadership (BA)
	<ul>
	<li>Family &amp; Children's Ministry</li>
	<li>Intercultural Studies</li>
	<li>Pastoral Ministry</li>
	<li>Youth Ministry</li>
	<li>Interdisciplinary</li>
	</ul>
	</li>
	<li>Youth Ministry (BA)
	<ul>
	<li>General</li>
	<li>Ministering to Families</li>
	<li>Counseling Youth</li>
	<li>Intercultural Studies</li>
	</ul>
	</li>
	</ul>
	<h4>Minors</h4>
	<ul>
	<li>Family &amp; Children's Ministry</li>
	<li>Intercultural Studies</li>
	<li>Pastoral Ministry</li>
	<li>Youth Ministry</li>
	<li>Interdisciplinary</li>
	</ul>
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
	            <ul>
	<li>Biology (BS)
	<ul>
	<li>Gen biology</li>
	<li>Pre-Allied Health</li>
	<li>Human Biology</li>
	</ul>
	</li>
	<li>Computer Science (BS)
	<ul>
	<li>Web Systems and Applications</li>
	</ul>
	</li>
	<li>Environmental Science (BA)</li>
	<li>Environmental Science (BS)
	<ul>
	<li>Ecological Research</li>
	<li>Ecology and Field Biology</li>
	</ul>
	</li>
	<li>Environmental Science (BS – Honors)</li>
	<li>Kinesiology (BS)
	<ul>
	<li>Exercise Science</li>
	<li>Health &amp; Wellness</li>
	<li>Sports Management</li>
	<li>General Kinesiology</li>
	</ul>
	</li>
	<li>Mathematics (BA)</li>
	</ul>
	<h4>Minors</h4>
	<ul>
	<li>Environmental Science</li>
	<li>Mathematics</li>
	</ul>
	          </div>
	        </dd>
	              </dl>


	<div class="program-list">
		<div class="program-list__text">
			<h2>Undergraduate Programs</h2>
			<p><?php echo term_description( '4', 'degree_level' ) ?>
		</div>
		<div class="program-list-container">
			<?php $loop = new WP_Query( array(
					'post_type' => 'degrees',
					'posts_per_page' => -1,
					'degree_level' => 'undergraduate',
					'orderby' => 'name',
					'order'   => 'ASC'
			) ); ?>
			<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
			<?php $tax_terms = get_the_terms($post->ID, 'degree_level'); ?>
				<article class="card program-card mix<?php if ( is_array( $tax_terms ) ) { foreach ( $tax_terms as $tax_term ) { echo ' ' . $tax_term->slug; } } ?>" role="article" itemscope itemtype="http://schema.org/BlogPosting">
						<a href="<?php the_permalink(); ?>">
							<span class="program-card__image">
								<?php
									$image = get_field('hero_background_image');
									$card = $image['sizes'][ 'medium' ];
									$alt = $image['alt'];
								?>
								<img src="<?php echo $card; ?>" alt="<?php echo $alt; ?>">
							</span>
							<span class="h4 program-card__name"><?php the_field('program__short-name'); ?></span>
							<span class="program-card__excerpt"><?php the_field('program_summary'); ?></span>
							<span class="program-card__button button">View Program Information</span>
						</a>
				</article>
			<?php endwhile; wp_reset_query(); ?>
		</div>
	</div>

	<div class="program-list">
		<div class="program-list__text">
			<h2>Graduate Programs</h2>
			<p><?php echo term_description( '3', 'degree_level' ) ?>
		</div>
		<div class="program-list-container">
			<?php $loop = new WP_Query( array(
					'post_type' => 'degrees',
					'posts_per_page' => -1,
					'degree_level' => 'graduate',
					'orderby' => 'name',
					'order'   => 'ASC'
			) ); ?>
			<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
				<?php $tax_terms = get_the_terms($post->ID, 'degree_level'); ?>
					<article class="card program-card mix<?php if ( is_array( $tax_terms ) ) { foreach ( $tax_terms as $tax_term ) { echo ' ' . $tax_term->slug; } } ?>" role="article" itemscope itemtype="http://schema.org/BlogPosting">
							<a href="<?php the_permalink(); ?>">
								<span class="program-card__image">
									<?php
										$image = get_field('hero_background_image');
										$card = $image['sizes'][ 'medium' ];
										$alt = $image['alt'];
									?>
									<img src="<?php echo $card; ?>" alt="<?php echo $alt; ?>">
								</span>
								<span class="h4 program-card__name"><?php the_field('program__short-name'); ?></span>
								<span class="program-card__excerpt"><?php the_field('program_summary'); ?></span>
								<span class="program-card__button button">View Program Information</span>
							</a>
					</article>
				<?php endwhile; wp_reset_query(); ?>
			</div>
	</div>

</main>

<?php get_footer(); ?>
