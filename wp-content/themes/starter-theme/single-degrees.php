<?php get_header(); ?>

<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<header class="page-title page-title--image page-title--degree">
		<div>
			<div class="wrap-lg">
				<div class="page-title__badge">
					<?php echo wp_get_attachment_image( get_field( 'hero_badge_image' ), 'full', false, array( "class" => "page-title__badge-image" ) );	?>
					<span class="page-title__badge-text"><?php the_field('hero_badge_text'); ?></span>
				</div>
			</div>
			<div class="page-title__wrapper wrap-lg">
				<span class="page-title__subheading--top"><?php the_field('hero_subheading'); ?></span>
				<h1 class="page-title__heading"><?php the_field('hero_heading'); ?></h1>
			</div>
		</div>
	</header>
	<?php tlh_responsive_bg_style( 'page-title--image', 'hero_background_image' ); ?>

	<div class="wrap">
		<p>Content goes here.</p>
	</div>

</main>

<?php get_footer(); ?>
