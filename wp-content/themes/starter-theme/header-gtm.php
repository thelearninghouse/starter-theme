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
		<link href="https://fonts.googleapis.com/css?family=Raleway:200,400,600|Roboto+Slab:400,700" rel="stylesheet">


		<script>!function(a){"use strict";var b=function(b,c,d){function j(a){return e.body?a():void setTimeout(function(){j(a)})}function l(){f.addEventListener&&f.removeEventListener("load",l),f.media=d||"all"}var g,e=a.document,f=e.createElement("link");if(c)g=c;else{var h=(e.body||e.getElementsByTagName("head")[0]).childNodes;g=h[h.length-1]}var i=e.styleSheets;f.rel="stylesheet",f.href=b,f.media="only x",j(function(){g.parentNode.insertBefore(f,c?g:g.nextSibling)});var k=function(a){for(var b=f.href,c=i.length;c--;)if(i[c].href===b)return a();setTimeout(function(){k(a)})};return f.addEventListener&&f.addEventListener("load",l),f.onloadcssdefined=k,k(l),f};"undefined"!=typeof exports?exports.loadCSS=b:a.loadCSS=b}("undefined"!=typeof global?global:this);</script>
		<script>loadCSS( "<?php echo get_template_directory_uri(); ?>/library/css/gtm-style.min.css" );</script>
		<noscript><link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/library/css/gtm-style.min.css"></noscript>

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

		<div id="container" class="container">

		<header class="header-gtm" role="banner" itemscope itemtype="http://schema.org/WPHeader">

				<div class="wrap-lg">
					<a class="header-gtm__logo" href="<?php echo home_url(); ?>" rel="nofollow" title="Go to the <?php bloginfo( 'name' ); ?> Homepage ">
						<?php if ( is_page_template( 'gtm__thank-you.php' ) ) {
							$school_logo = get_field('school_logo_alternative', 'options');
						} else {
							$school_logo = get_field('school_logo', 'options');
						}

						if ( $school_logo ) { ?>
							<img src="<?php echo $school_logo['url']; ?>" alt="<?php echo $school_logo['alt']; ?>">
						<?php } else { ?>
							<span><?php the_field( 'school_name', 'options' ); ?>
							<?php } ?>
					</a>
				</div>

			</header>
