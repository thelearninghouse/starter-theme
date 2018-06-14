<?php /* Template Name: MAG Homepage */ ?>

<?php get_header( 'mag' ); ?>

<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

	<?php $heading_field = get_field('hero_heading');
		$page_title = $heading_field ? $heading_field : get_the_title();
	?>
	<header class="hero-title hero-title--banner">
		<div class="wrap-lg hero-title__heading-wrapper">
			<h1 class="hero-title__heading"><?php echo $page_title ?></h1>
		</div>
	</header>
	<?php tlh_responsive_bg_style( 'hero-title', 'hero_background_image' ); ?>

	<?php get_template_part( 'template-parts/cta-boxed' ); ?>

	<section class="welcome" aria-labelledby="welcome-heading">
		<div class="wrap-md">
			<h2 class="welcome__heading text-center" id="welcome-heading"><?php the_field( 'mag_home_welcome_heading' ); ?></h2>
			<?php the_field( 'mag_home_welcome_copy' ); ?>
		</div>
	</section>

	<section class="about" aria-labelledby="about-heading">
		<div class="left">
			<div class="content">
				<h2 class="about__heading" id="about-heading"><?php the_field( 'mag_home_about_heading' ); ?></h2>
				<?php the_field( 'mag_home_about_copy' ); ?>
			</div>
		</div>
		<div class="right">
		</div>
	</section>

</main>

<?php get_footer( 'mag' ); ?>
