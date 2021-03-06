<!DOCTYPE html>
<html <?php language_attributes(); ?>>

	<head>
		<meta charset="utf-8">

		<?php // force Internet Explorer to use the latest rendering engine available ?>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">

		<title><?php wp_title( '' ); ?></title>

		<?php // mobile meta (hooray!) ?>
		<meta name="HandheedFriendly" content="True">
		<meta name="MobileOptimized" content="320">
		<meta name="viewport" content="width=device-width, initial-scale=1"/>

		<?php get_template_part( 'template-parts/header/favicons' ); ?>

		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

		<?php wp_head(); ?>
		<?php require_once( 'css-injector/olc.php' ); ?>

		<?php get_template_part( 'template-parts/header/tag-manager-script' ); ?>
	</head>

	<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">
		<a class="skipLink" href="#content">Skip to content</a>
		<?php get_template_part( 'template-parts/header/tag-manager-iframe' ); ?>

		<?php if ( is_singular( 'post' ) ) { ?>
			<progress value="0"></progress>
		<?php } ?>

		<div id="container" class="container">

		<header class="header" itemscope itemtype="http://schema.org/WPHeader">

				<div class="infoBar">
					<div class="wrapLg">
						<div class="infoBar__info">
							<?php $school_phone = get_field( 'school_phone', 'options' ); ?>
							<?php
								$phone_label = ' ' . $school_phone;
								tlh_phone_link( 'infoBar__phone', $phone_label );
							?>
							<?php
							$next_start_date = tlh_get_next_start_date();
							if ( $next_start_date ) {
								?>
									<span class="infoBar__start-date"><strong>Next Start Date:</strong> <?php echo $next_start_date; ?></span>
								<?php
							}
							?>
						</div>
						<nav class="infoBar__nav" role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">
							<?php
							wp_nav_menu(
								array(
									'container'      => false,
									'menu'           => __( 'Secondary Menu', 'tlh_theme' ),
									'theme_location' => 'secondary',
									'depth'          => 0,
								)
							);
							?>
						</nav>
					</div>
				</div>

				<div class="wrapLg">
					<a class="header__logo" href="<?php echo home_url(); ?>" rel="nofollow" title="Go to the <?php bloginfo( 'name' ); ?> Homepage ">
						<?php
						$school_logo = get_field( 'school_logo', 'options' );
						if ( $school_logo ) {
							?>
							<img src="<?php echo $school_logo['url']; ?>" alt="<?php echo $school_logo['alt']; ?>">
						<?php } elseif ( get_field( 'school_name', 'options' ) ) { ?>
							<span><?php the_field( 'school_name', 'options' ); ?>
						<?php } else { ?>
							<span>
							<?php
							$blog_title = get_bloginfo( 'name' );
							echo $blog_title;
							?>
							</span>
						<?php } ?>
					</a>
					<button class="js__menu-trigger navWrapper__open" aria-label="Open Navigation Menu"><?php tlh_icon( 'menu', '', 'Open Navigation Menu' ); ?></button>
					<div class="navWrapper">
						<button class="navWrapper__close js__menu-trigger" aria-label="Close Navigation Menu">Close</button>
						<nav class="header__nav" role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">
							<?php
							wp_nav_menu(
								array(
									'container'      => false,
									'menu'           => __( 'The Main Menu', 'tlh_theme' ),
									'menu_class'     => 'nav',
									'theme_location' => 'main',
									'depth'          => 0,
								)
							);
							?>
						</nav>
						<nav class="header__secondaryNav" role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">
							<?php
							wp_nav_menu(
								array(
									'container'      => false,
									'menu'           => __( 'Secondary Menu', 'tlh_theme' ),
									'menu_class'     => 'nav',
									'theme_location' => 'secondary',
									'depth'          => 0,
								)
							);
							?>
						</nav>
				</div>

			</header>
