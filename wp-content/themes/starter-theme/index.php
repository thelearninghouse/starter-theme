<?php get_header(); ?>

<main id="main" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/page-title' ); ?>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

	<article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article">

		<section class="entryContent cf">

			<p class="byline entryMeta vcard">
      	<?php tlh_byline(); ?>
			</p>
      <h2 class="entryTitle">
				<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a>
			</h2>

		</section>

		<?php $blog_class_name = 'featuredImage-' . get_the_ID(); ?>
    <div class="featuredImage <?php echo $blog_class_name; ?>"></div>

		<?php /* If page has a featured image, use it. Otherwise defaults to image set from main stylesheet */ ?>
		<?php if( has_post_thumbnail() ) : ?>
		<?php tlh_responsive_bg_style( $blog_class_name ); ?>
		<?php endif; ?>

	</article>

	<?php endwhile; ?>

			<?php tlh_page_navi(); ?>

	<?php else : ?>

			<article id="post-not-found" class="hentry cf">
					<header class="articleHeader">
						<h1><?php _e( 'Oops, Post Not Found!', 'bonestheme' ); ?></h1>
				</header>
					<section class="entryContent">
						<p><?php _e( 'Uh Oh. Something is missing. Try double checking things.', 'bonestheme' ); ?></p>
				</section>
				<footer class="articleFooter">
						<p><?php _e( 'This is the error message in the index.php template.', 'bonestheme' ); ?></p>
				</footer>
			</article>

	<?php endif; ?>

</main>

<?php get_footer(); ?>
