<?php /* Template Name: OLC Home Page */
?>
<?php get_header(); ?>

<main id="content" class="main-content" itemscope itemprop="mainContentOfPage">

	<?php get_template_part( 'template-parts/page-title' ); ?>
	
	<div class="wrapLg">
		<?php get_template_part( 'template-parts/home/program-list' ); ?>
	</div>

	<?php get_template_part( 'template-parts/cta-footer' ); ?>

</main>

<?php get_footer(); ?>
