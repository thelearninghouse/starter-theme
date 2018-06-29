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
		<link href="https://fonts.googleapis.com/css?family=Raleway:200,400,600|Roboto+Slab:400,700" rel="stylesheet">
		<?php require_once('css-injector/gtm-page.php'); ?>

		<?php get_template_part( 'template-parts/header/tag_manager_script' ); ?>
	</head>

	<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">
		<?php get_template_part( 'template-parts/header/tag_manager_iframe' ); ?>

		<div id="container" class="container">
		<header class="header-gtm" role="banner" itemscope itemtype="http://schema.org/WPHeader">
			<div class="wrap-lg">
				<a class="header-gtm__logo" href="<?php echo home_url(); ?>" rel="nofollow" title="Go to the <?php bloginfo( 'name' ); ?> Homepage ">
					<?php if ( is_page_template( 'page-templates/gtm__thank-you.php' ) || is_404() ) {
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
