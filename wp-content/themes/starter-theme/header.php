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

		<?php // icons & favicons (for more: http://www.jonathantneal.com/blog/understand-the-favicon/) ?>
		<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/library/images/apple-touch-icon.png">
		<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
		<?php // or, set /favicon.ico for IE10 win ?>
		<meta name="msapplication-TileColor" content="#f01d4f">
		<meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/library/images/win8-tile-icon.png">
    <meta name="theme-color" content="#121212">

		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<?php wp_head(); ?>

		<?php if (is_front_page()) { ?>
				<style><?php include 'library/css/critical-home.min.css'; ?></style>
		<?php } ?>

		<script>!function(a){"use strict";var b=function(b,c,d){function j(a){return e.body?a():void setTimeout(function(){j(a)})}function l(){f.addEventListener&&f.removeEventListener("load",l),f.media=d||"all"}var g,e=a.document,f=e.createElement("link");if(c)g=c;else{var h=(e.body||e.getElementsByTagName("head")[0]).childNodes;g=h[h.length-1]}var i=e.styleSheets;f.rel="stylesheet",f.href=b,f.media="only x",j(function(){g.parentNode.insertBefore(f,c?g:g.nextSibling)});var k=function(a){for(var b=f.href,c=i.length;c--;)if(i[c].href===b)return a();setTimeout(function(){k(a)})};return f.addEventListener&&f.addEventListener("load",l),f.onloadcssdefined=k,k(l),f};"undefined"!=typeof exports?exports.loadCSS=b:a.loadCSS=b}("undefined"!=typeof global?global:this);</script>
		<script>loadCSS( "<?php echo get_template_directory_uri(); ?>/library/css/style.min.css" );</script>
		<noscript><link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/library/css/style.min.css"></noscript>

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
		<?php if ( get_field('gtm_id', 'options') ) { ?>
			<!-- Google Tag Manager (noscript) -->
			<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-<?php the_field('gtm_id', 'options'); ?>" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
			<!-- End Google Tag Manager (noscript) -->
		<?php } ?>

		<?php // If is blog page show the progress bar ?>
		<?php if ( is_singular( 'post' ) ) { ?><progress value="0"></progress><?php } ?>

		<div id="container" class="container">

			<header class="header" role="banner" itemscope itemtype="http://schema.org/WPHeader">

				<div class="wrap cf">

					<p class="logo header__logo h1" itemscope itemtype="http://schema.org/Organization"><a href="<?php echo home_url(); ?>" rel="nofollow"><?php bloginfo('name'); ?></a></p>

          <a class="button header__button js__menu-trigger" href="#">Menu</a>

					<nav class="header__nav" role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">
						<?php wp_nav_menu(array(
    					         'container' => false,														// remove nav container
    					         'container_class' => 'header__menu header__menu-secondary cf',		// class of container (should you choose to use it)
    					         'menu' => __( 'Secondary Menu', 'tlh_theme' ),  // nav name
    					         'menu_class' => 'nav secondary-nav cf',					// adding custom nav class
    					         'theme_location' => 'secondary',                 // where it's located in the theme
											 'depth' => 0																			// limit the depth of the nav
						)); ?>
						<?php wp_nav_menu(array(
    					         'container' => false,                           // remove nav container
    					         'container_class' => 'header__menu cf',                 // class of container (should you choose to use it)
    					         'menu' => __( 'The Main Menu', 'tlh_theme' ),  // nav name
    					         'menu_class' => 'nav top-nav cf',               // adding custom nav class
    					         'theme_location' => 'main',                 // where it's located in the theme
        			         'depth' => 0			                               // limit the depth of the nav
						)); ?>

					</nav>

				</div>

			</header>
