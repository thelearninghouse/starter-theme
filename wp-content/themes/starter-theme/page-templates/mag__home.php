<?php /* Template Name: MAG Homepage */ ?>

<?php get_header( 'mag' ); ?>

<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

	<?php get_template_part( 'template-parts/page-title' ); ?>

	<?php get_template_part( 'template-parts/cta-boxed' ); ?>

	<section class="welcome" aria-labelledby="welcome-heading">
		<div class="wrapMd">
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
