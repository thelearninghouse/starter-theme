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
		<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
		<link rel="manifest" href="/favicons/site.webmanifest">
		<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#b12028">
		<meta name="msapplication-TileColor" content="#b12028">
		<meta name="theme-color" content="#ffffff">

		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<?php wp_head(); ?>

		<?php if (is_front_page()) { ?>
			<style><?php include 'public/css/critical-home.css'; ?></style>
			<script>!function(a){"use strict";var b=function(b,c,d){function j(a){return e.body?a():void setTimeout(function(){j(a)})}function l(){f.addEventListener&&f.removeEventListener("load",l),f.media=d||"all"}var g,e=a.document,f=e.createElement("link");if(c)g=c;else{var h=(e.body||e.getElementsByTagName("head")[0]).childNodes;g=h[h.length-1]}var i=e.styleSheets;f.rel="stylesheet",f.href=b,f.media="only x",j(function(){g.parentNode.insertBefore(f,c?g:g.nextSibling)});var k=function(a){for(var b=f.href,c=i.length;c--;)if(i[c].href===b)return a();setTimeout(function(){k(a)})};return f.addEventListener&&f.addEventListener("load",l),f.onloadcssdefined=k,k(l),f};"undefined"!=typeof exports?exports.loadCSS=b:a.loadCSS=b}("undefined"!=typeof global?global:this);</script>
			<script>loadCSS( "<?php echo get_template_directory_uri(); ?>/public/css/style.css" );</script>
			<noscript><link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/public/css/style.css"></noscript>
		<?php } else { ?>
			<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/public/css/style.css">
		<?php } ?>

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

		<?php // If is blog page show the progress bar ?>
		<?php if ( is_singular( 'post' ) ) { ?><progress value="0"></progress><?php } ?>

		<div id="container" class="container">

		<header class="header" role="banner" itemscope itemtype="http://schema.org/WPHeader">

				<div class="info-bar plain-links">
					<div class="wrap">
						<div class="info-bar__info">
							<?php $school_phone = get_field('school_phone', 'options'); ?>
							<a class="info-bar__phone" href="tel:<?php echo str_replace( ['-', '(', ')', ' '], '', $school_phone ); ?>"><strong>Call us today!</strong> <?php tlh_icon( 'phone', 'inline', 'Call us today!' ); ?><?php echo $school_phone; ?></a>
							<?php $next_start_date = tlh_get_next_date();
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