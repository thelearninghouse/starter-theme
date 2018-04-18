<?php get_header(); ?>
<style media="screen">
	.content--inner-container {
		margin-left: auto;
		margin-right: auto;
	}
</style>
<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
<div class="container content--inner-container">

<div id="vlh-app">
	<button-counter></button-counter>
</div>

<section id="tailwind">
	<h2>Tailwind</h2>
	<ul class="nav-list">
	  <li class="mr-6">
	    <a class="text-blue hover:text-blue-darker" href="#">Active</a>
	  </li>
	  <li class="mr-6">
	    <a class="text-blue hover:text-blue-darker" href="#">Link</a>
	  </li>
	  <li class="mr-6">
	    <a class="text-blue hover:text-blue-darker" href="#">Link</a>
	  </li>
	  <li class="mr-6">
	    <a class="text-grey-light cursor-not-allowed" href="#">Disabled</a>
	  </li>
	</ul>

	<div class="card">
	  <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
	  <div class="px-6 py-4">
	    <div class="card-title">The Coldest Sunset</div>
	    <p class="text-grey-darker text-base">
	      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
	    </p>
	  </div>
	  <div class="px-6 py-4">
	    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
	    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
	    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
	  </div>
	</div>
	<div class="bg-indigo-darkest text-center py-4 lg:px-4">
	  <div class="p-2 bg-indigo-darker items-center text-indigo-lightest leading-none lg:rounded-full flex lg:inline-flex" role="alert">
	    <span class="flex rounded-full bg-indigo uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
	    <span class="font-semibold mr-2 text-left flex-auto">Get the coolest t-shirts from our brand new store</span>
	    <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
	  </div>
	</div>
	<div role="alert">
	  <div class="bg-red text-white font-bold rounded-t px-4 py-2">
	    Danger
	  </div>
	  <div class="border border-t-0 border-red-light rounded-b bg-red-lightest px-4 py-3 text-red-dark">
	    <p>Something not ideal might be happening.</p>
	  </div>
	</div>
	<div class="bg-red-lightest border border-red-light text-red-dark px-4 py-3 rounded relative" role="alert">
	  <strong class="font-bold">Holy smokes!</strong>
	  <span class="block sm:inline">Something seriously bad happened.</span>
	  <span class="absolute pin-t pin-b pin-r px-4 py-3">
	    <svg class="fill-current h-6 w-6 text-red" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
	  </span>
	</div>

	<button class="btn btn-blue">
	  Button
	</button>
	<button class="btn btn-blue-outline">
	  Button
	</button>
</section>

<br>
<hr>
<br>


<section id="bulma">
	<h2>Bulma</h2>
	<div class="hero is-primary">
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
	</div>
</section>

<br>
<hr>
<br>

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
</div>
</main>

<?php get_footer(); ?>
