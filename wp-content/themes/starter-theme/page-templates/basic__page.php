<?php
/* Template Name: Basic Fullscreen Background */

get_header( 'basic' ); ?>

<main class="mainContent" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<div class="wrapMd">
		<?php
			$heading_field = get_field('hero_heading');
			$subheading_field = get_field('hero_subheading');
		?>
		<h1 class="mainContent__heading"><?php echo $heading_field ? $heading_field : get_the_title(); ?></h1>
		<?php if ( $subheading_field ) { ?>
			<p class="mainContent__subheading"><?php echo $subheading_field; ?></p>
		<?php } ?>
		<div class="mainContent__copy">
			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
				<?php the_content(); ?>
			<?php endwhile; endif; ?>
		</div>
		<?php if ( get_field( 'show_bottom_cta_boxes' ) ) { ?>
			<aside class="ctaBottom">
				<div class="ctaBottom__item ctaBox">
					<h2 class="ctaBox__heading">Ready to Apply?</h2>
					<p class="ctaBox__description">You don’t have to wait for us to get back to you. You can apply now!</p>
					<a class="ctaBox__action button button--white">Apply</a>
				</div>
				<div class="ctaBottom__item ctaBox ctaBox--grape">
					<h2 class="ctaBox__heading">Ready to Talk?</h2>
					<p class="ctaBox__description">Still have questions? Give us a call at <a title="Give us a call!" href="tel:<?php echo str_replace(array(' ', '-', '(', ')', '.'), '', get_field('school_phone', 'option')); ?>"><?php the_field('school_phone', 'option'); ?></a>, and we can answer them for you.</p>
				</div>
			</aside>
		<?php } ?>
	</div>
</main>

<?php get_footer( 'basic' ); ?>
