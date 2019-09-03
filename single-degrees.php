<?php get_header(); ?>

<main id="content" class="main-content" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<header class="pageTitle pageTitle--image pageTitle--degree">
		<div>
			<div class="wrapLg">
				<div class="pageTitle__badge">
					<?php echo wp_get_attachment_image( get_field( 'hero_badge_image' ), 'full', false, array( 'class' => 'page-title__badge-image' ) ); ?>
					<span class="pageTitle__badge-text"><?php the_field( 'hero_badge_text' ); ?></span>
				</div>
			</div>
			<div class="pageTitle__wrapper wrapLg">
				<span class="pageTitle__subheading--top"><?php the_field( 'hero_subheading' ); ?></span>
				<h1 class="pageTitle__heading"><?php the_field( 'hero_heading' ); ?></h1>
			</div>
		</div>
	</header>
	<?php tlh_responsive_bg_style( 'pageTitle--image', 'hero_background_image' ); ?>

	<div class="wrapLg">
		<p>Content goes here.</p>
	</div>

</main>

<?php get_footer(); ?>
