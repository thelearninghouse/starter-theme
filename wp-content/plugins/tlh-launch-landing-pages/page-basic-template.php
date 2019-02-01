<?php /* Template Name: Launch Page */ ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

	<head>
		<meta charset="utf-8">

		<?php // force Internet Explorer to use the latest rendering engine available ?>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">

		<title><?php wp_title(''); ?></title>

		<?php // mobile meta (hooray!) ?>
		<meta name="HandheedFriendly" content="True">
		<meta name="MobileOptimized" content="320">
		<meta name="viewport" content="width=device-width, initial-scale=1"/>

		<link rel="icon" type="image/png" sizes="32x32" href="<?php the_field('favicon', 'options'); ?>">

		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<?php wp_head(); ?>

		<?php // Get fonts from Google
			$body_font = get_field('body_font', 'options');

			$font_url = 'https://fonts.googleapis.com/css?family=' . str_replace(' ', '+', $body_font['label']) . ':400,700';
		?>
		<link href="<?php echo $font_url ?>" rel="stylesheet">

		<link rel="stylesheet" href="<?php echo plugin_dir_url( __FILE__ ) ?>assets/css/basic-page-style.css">
		<?php
			$image = get_field('thank_you_background_image', 'options');
			$medium = $image['sizes'][ 'medium' ];
			$large = $image['sizes'][ 'large' ];
			$full = $image[ 'url' ];
		?>
		<style>
		body {
			font-family: <?php echo $body_font['value']; ?>;
		}

		@media screen and (min-width: 1200px) {
			.container__background {
				background-image: url(<?php echo $full; ?>);
			}
		}
		@media screen and (min-width: 801px) and (max-width: 1200px) {
			.container__background {
				background-image: url(<?php echo $large; ?>);
			}
		}
		@media screen and (max-width: 800px) {
			.container__background {
				background-image: url(<?php echo $medium; ?>);
			}
		}
		</style>

		<?php include 'template-parts/tag-manager-script.php'; ?>
	</head>

	<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">
		<?php include 'template-parts/tag-manager-iframe.php'; ?>

		<div id="container" class="container">
			<div class="container__background"></div>
			<div class="container__content">

				<header class="headerBasic" itemscope itemtype="http://schema.org/WPHeader">
					<div class="wrapMd">
						<span class="headerBasic__logo" href="<?php echo home_url(); ?>" rel="nofollow" title="Go to the <?php bloginfo( 'name' ); ?> Homepage ">
							<?php
								$school_logo = get_field('school_logo_alternative', 'options');
								$school_logo_compact = get_field('school_logo_compact_alternative', 'options');
								if ( $school_logo ) { ?>
									<picture>
										<source srcset="<?php echo $school_logo['url']; ?>" media="(min-width: 768px)">
										<img src="<?php echo $school_logo_compact['url']; ?>" alt="<?php echo $school_logo['alt']; ?>">
									</picture>
							<?php } else { ?>
								<span><?php the_field( 'school_name', 'options' ); ?></span>
								<?php } ?>
						</span>
					</div>
				</header>

				<main class="mainContent" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
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

				<footer class="footerBasic" itemscope itemtype="http://schema.org/WPFooter">
					<div class="wrapMd">
						<p><span><?php the_field('school_address_1', 'option'); ?>, <?php the_field('school_address_2', 'option'); ?> | <a href="tel:<?php echo str_replace( ['-', '(', ')', ' ', '.'], '', get_field( 'school_phone', 'options' ) ); ?>"><?php the_field( 'school_phone', 'options' ); ?></a></p>
						<p>&copy; <?php echo date('Y'); ?> <?php the_field('school_name', 'options'); ?> | <a href="/privacy-policy" title="View our privacy policy">Privacy Policy</a></p>
					</div>
				</footer>

			</div>
		</div>
		<?php tlh_responsive_bg_style( 'container__background', 'hero_background_image' ); ?>

		<?php // all js scripts are loaded in library/bones.php ?>
		<?php get_template_part( 'template-parts/footer-scripts/lp' ); ?>
		<?php wp_footer(); ?>

	</body>

</html> <!-- end of site -->
