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

		<?php // icons & favicons (generate here: https://realfavicongenerator.net/) (for more: http://www.jonathantneal.com/blog/understand-the-favicon/) ?>
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
		<link rel="manifest" href="/site.webmanifest">
		<meta name="msapplication-TileColor" content="#2b5797">
		<meta name="theme-color" content="#ffffff">

		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<?php wp_head(); ?>
		<link rel="stylesheet" href="https://use.typekit.net/fgs0bil.css">

		<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/public/css/lp-style.css">

		<?php if ( get_field('gtm_id', 'options') ) { ?>
			<!-- Google Tag Manager -->
			<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-<?php the_field('gtm_id', 'options'); ?>');</script>
			<!-- End Google Tag Manager -->
		<?php } ?>
	</head>

	<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">
		<a class="skip-link" href="#content">Skip to content</a>
		<?php if ( get_field('gtm_id', 'options') ) { ?>
			<!-- Google Tag Manager (noscript) -->
			<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-<?php the_field('gtm_id', 'options'); ?>" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
			<!-- End Google Tag Manager (noscript) -->
		<?php } ?>

		<div id="container" class="container">

		<header class="header-mag" role="banner" itemscope itemtype="http://schema.org/WPHeader">

				<div class="wrap header-mag__nav-container">
					<span class="header-mag__logo">
						<?php $school_logo = get_field('school_logo_alternative', 'options');
						if ( $school_logo ) { ?>
							<img src="<?php echo $school_logo['url']; ?>" alt="<?php echo $school_logo['alt']; ?>">
						<?php } else { ?>
							<span><?php the_field( 'school_name', 'options' ); ?></span>
							<?php } ?>
					</span>

					<a class="header-mag__phone" title="Give us a call!" href="tel:<?php the_field('school_phone', 'option'); ?>"><?php the_field('school_phone', 'option'); ?></a>

				</div>

				<?php // Get proper title
				  $heading_field = get_field('hero_heading');
				  $subheading_field = get_field('hero_subheading');

					$page_subtitle = $subheading_field;

				  switch(true)
				  {
				    case $heading_field:
				      $page_title = $heading_field;
				      break;
				    case is_home():
				      $page_title = get_the_title(get_option('page_for_posts'));
				      break;
				    case is_archive():
				      $page_title = get_the_archive_title();
				      break;
				    case is_404():
				      $page_title = '404: Page Not Found';
							$page_subtitle = 'Error';
				      break;
				    default:
				      $page_title = get_the_title();
				      break;
				  }

				  if ( is_singular( 'post' ) ) {
				    $page_subtitle = tlh_build_byline();
				  }
				  else {
				    $page_subtitle = $subheading_field;
				  }
				?>
				<div class="wrap-lg header-mag__heading-container">
			    <h1 class="header-mag__page-heading">
						<?php if ( $page_subtitle ) { ?>
				      <span class="header-mag__page-subheading"><?php echo $page_subtitle; ?></span>
				    <?php } ?>
						<?php echo $page_title ?>
					</h1>
				</div>

				<?php if ( is_page_template( 'page-templates/mag__home.php' ) ) { ?>
					<?php

					// check if the repeater field has rows of data
					if( have_rows('mag_home_cards') ) { ?>
						<section class="wrap-md" aria-label="Learn more about our degree programs">
							<div class="cta-boxed">
						 		<?php while ( have_rows('mag_home_cards') ) : the_row(); ?>
									<div class="cta-boxed__item">
										<div class="cta-boxed__card">
											<h3 class="cta-boxed__card-title"><?php the_sub_field('title'); ?></h3>
											<p class="cta-boxed__card-summary"><?php the_sub_field('summary'); ?></p>
											<a class="cta-boxed__card-action button <?php echo get_row_index() % 2 == 1 ? 'button--teal' : 'button--gold'; ?> button--angle button--wide" href="<?php the_sub_field('button_link'); ?>"><?php the_sub_field('button_label'); ?></a>
										</div>
									</div>
						    <?php endwhile; ?>
							</div>
						</section>
					<?php } ?>
				<? } ?>

			</header>
			<?php
				if ( is_singular( 'post' ) ) {
					tlh_responsive_bg_style( 'header-mag' );
				}
				else {
					tlh_responsive_bg_style( 'header-mag', 'hero_background_image' );
				}
			?>
