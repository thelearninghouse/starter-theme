<?php
/*
Template Name: Get Started
*/
get_header(); ?>

<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
		<?php get_template_part( 'template-parts/hero_title' ); ?>

		<div class="wrap page-wrapper">

			<div class="sidebar-well">
				<h2 class="h3">Get Started</h2>
				<script src="https://requestforms.learninghouse.com/form/show/rivier-university/ppc-form-multi/600/3342/online.rivier.edu:thank-you:request_id" type="text/javascript"></script>
			</div>

			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

			<section class="page-content cf" itemprop="articleBody">
				<?php the_content(); ?>
			</section> <?php // end article section ?>

			<?php endwhile; endif; ?>
		</div>

</main>

<?php get_footer(); ?>
