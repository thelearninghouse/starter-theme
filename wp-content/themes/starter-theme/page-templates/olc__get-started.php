<?php
/*
Template Name: OLC Get Started
*/

get_header(); ?>

<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	
	<?php get_template_part( 'template-parts/page-title' ); ?>

	<div class="pageContent wrapLg">
		<div class="pageContent__main">
			<div class="request-info-form request-info-form--wide request-info-form--up">
				<h2 id="get-started-heading" class="request-info-form__title h3 plain"><?php the_field( 'get_started_form_heading' ); ?></h2>
				<?php the_field( 'form_code' ); ?>
			</div>
		</div>
		<div class="pageContent__sidebar">
			<?php if (have_posts()) : while (have_posts()) : the_post();
				the_content();
			endwhile; endif; ?>
		</div>
	</div>

</main>

<?php get_template_part( 'template-parts/cta-footer' ); ?>


<?php get_footer(); ?>
