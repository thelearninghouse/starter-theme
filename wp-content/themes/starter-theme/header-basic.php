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

		<?php require_once('css-injector/basic.php'); ?>

		<?php get_template_part( 'template-parts/header/tag-manager-script' ); ?>
	</head>

	<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">
		<?php get_template_part( 'template-parts/header/tag-manager-iframe' ); ?>

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
