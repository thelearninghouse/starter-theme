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

		<?php require_once('css-injector/lp.php'); ?>

		<?php get_template_part( 'template-parts/header/tag-manager-script' ); ?>
	</head>

	<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">
		<a class="skip-link" href="#content">Skip to content</a>
		<?php get_template_part( 'template-parts/header/tag-manager-iframe' ); ?>

		<div id="container" class="container">

		<header class="headerMag" role="banner" itemscope itemtype="http://schema.org/WPHeader">

			<div class="wrapLg headerMag__nav-container">
				<span class="headerMag__logo" href="<?php echo home_url(); ?>" rel="nofollow" title="Go to the <?php bloginfo( 'name' ); ?> Homepage ">
					<?php $school_logo = get_field('school_logo', 'options');
					if ( $school_logo ) { ?>
						<img src="<?php echo $school_logo['url']; ?>" width="240" height="80" alt="<?php echo $school_logo['alt']; ?>">
					<?php } else { ?>
						<span><?php the_field( 'school_name', 'options' ); ?></span>
						<?php } ?>
				</span>
				<a class="headerMag__phone" aria-label="Give us a call at <?php the_field('school_phone', 'option'); ?>!" href="tel:<?php the_field('school_phone', 'option'); ?>"><?php the_field('school_phone', 'option'); ?></a>
			</div>

		</header>
