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

		<?php get_template_part( 'template-parts/header/favicons' ); ?>

		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<?php wp_head(); ?>
		<?php require_once('css-injector/olc.php'); ?>

		<?php get_template_part( 'template-parts/header/tag_manager_script' ); ?>
	</head>

	<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">
		<a class="skip-link" href="#content">Skip to content</a>
		<?php get_template_part( 'template-parts/header/tag_manager_iframe' ); ?>

		<?php // If is blog page show the progress bar ?>
		<?php if ( is_singular( 'post' ) ) { ?><progress value="0"></progress><?php } ?>

		<div id="container" class="container">

		<header class="header" role="banner" itemscope itemtype="http://schema.org/WPHeader">

				<div class="info-bar plain-links">
					<div class="wrap">
						<div class="info-bar__info">
							<?php $school_phone = get_field('school_phone', 'options'); ?>
							<a class="info-bar__phone" href="tel:<?php echo str_replace( ['-', '(', ')', ' '], '', $school_phone ); ?>"><strong>Call us today!</strong> <?php tlh_icon( 'phone', 'inline', 'Call us today!' ); ?><?php echo $school_phone; ?></a>
							<?php $next_start_date = tlh_get_next_start_date();
								if ( $next_start_date ) { ?>
									<span class="info-bar__start-date"><strong>Next Start Date:</strong> <?php echo $next_start_date; ?></span>
								<?php }
							?>
						</div>
						<nav class="info-bar__nav" role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">
							<?php wp_nav_menu(array(
												 'container' => false,														// remove nav container
												 'menu' => __( 'Secondary Menu', 'tlh_theme' ),  // nav name
												 'theme_location' => 'secondary',                 // where it's located in the theme
												 'depth' => 0																			// limit the depth of the nav
							)); ?>
						</nav>
					</div>
				</div>

				<div class="wrap">
					<a class="header__logo" href="<?php echo home_url(); ?>" rel="nofollow" title="Go to the <?php bloginfo( 'name' ); ?> Homepage ">
						<?php $school_logo = get_field('school_logo', 'options');
						if ( $school_logo ) { ?>
							<img src="<?php echo $school_logo['url']; ?>" alt="<?php echo $school_logo['alt']; ?>">
						<?php } else { ?>
							<span><?php the_field( 'school_name', 'options' ); ?>
							<?php } ?>
					</a>
					<button class="js__menu-trigger nav-wrapper__open" aria-label="Open Navigation Menu"><?php tlh_icon('menu', '', 'Open Navigation Menu') ?></button>
					<div class="nav-wrapper">
						<button class="nav-wrapper__close js__menu-trigger" aria-label="Close Navigation Menu">Close</button>
						<nav class="header__nav" role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">
							<?php wp_nav_menu(array(
												 'container' => false,                           // remove nav container
												 'menu' => __( 'The Main Menu', 'tlh_theme' ),  // nav name
												 'menu_class' => 'nav',               // adding custom nav class
												 'theme_location' => 'main',                 // where it's located in the theme
												 'depth' => 0			                               // limit the depth of the nav
							)); ?>
						</nav>
						<nav class="header__secondary-nav" role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">
							<?php wp_nav_menu(array(
												 'container' => false,														// remove nav container
												 'menu' => __( 'Secondary Menu', 'tlh_theme' ),  // nav name
												 'menu_class' => 'nav',
												 'theme_location' => 'secondary',                 // where it's located in the theme
												 'depth' => 0																			// limit the depth of the nav
							)); ?>
						</nav>
				</div>

			</header>
