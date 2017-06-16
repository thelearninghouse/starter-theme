<!--#if expr="$HTTP_COOKIE=/fonts\-loaded\=true/" -->
<!doctype html>
<html lang="en" class="fonts-loaded">
<!--#else -->
<!doctype html>
<!--#endif -->

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->

	<head>
		<meta charset="utf-8">

		<?php // force Internet Explorer to use the latest rendering engine available ?>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">

		<title><?php the_field('school_name', 'options'); ?></title>

		<?php // mobile meta (hooray!) ?>
		<meta name="HandheldFriendly" content="True">
		<meta name="MobileOptimized" content="320">
		<meta name="viewport" content="width=device-width, initial-scale=1"/>

		<?php // icons & favicons (for more: http://www.jonathantneal.com/blog/understand-the-favicon/) ?>
		<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/library/images/apple-touch-icon.png">
		<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
		<?php // or, set /favicon.ico for IE10 win ?>
		<meta name="msapplication-TileColor" content="<?php the_field('color_1', 'options'); ?>">
		<meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/library/images/win8-tile-icon.png">
    <meta name="theme-color" content="<?php the_field('color_1', 'options'); ?>">

		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<?php wp_head(); ?>

		<link rel="stylesheet" href="/wp-content/themes/tlhstarter-avila/library/css/launch-lp-style.min.css">

		<link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=PT+Serif" rel="stylesheet">

		<style>
			h1, h2, h3, h4, h5, h6 {
				font-family: <?php the_field('headings_font', 'options') ?>;
			}
			p, ul, ol, li {
				font-family: <?php the_field('body_font', 'options') ?>;
			}
			#value-props .value-props-container .value-prop {
				background-color: <?php the_field('vp_bgcolor'); ?>;
			}
		</style>

		<style>
			<?php the_field('custom_css'); ?>
		</style>

	</head>

	<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">

		<div class="container">

			<header class="header" role="banner" itemscope itemtype="http://schema.org/WPHeader">
				<section id="hero" style="background-image:url('<?php the_field('hero_image'); ?>');">
					<div class="wrap">
						<p class="logo header__logo" itemscope itemtype="http://schema.org/Organization">
							<?php if (get_field('logo_version')) { ?>
								<img src="<?php the_field('school_logo_light', 'option'); ?>" alt="<?php the_field('school_name', 'option'); ?> Logo">
							<?php }
							else { ?>
									<img src="<?php the_field('school_logo_dark', 'option'); ?>" alt="<?php the_field('school_name', 'option'); ?> Logo">
							<?php } ?>
						</p>
						<p class="phone-number">
							<a href="tel:<?php the_field('phone_number', 'options'); ?>" style="color: <?php the_field('color_1', 'options'); ?>;">
								<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									 width="35px" height="35px" viewBox="0 0 35 35" xml:space="preserve" fill="<?php the_field('color_1', 'options'); ?>">
								<g>
									<path d="M25.302,0H9.698c-1.3,0-2.364,1.063-2.364,2.364v30.271C7.334,33.936,8.398,35,9.698,35h15.604
										c1.3,0,2.364-1.062,2.364-2.364V2.364C27.666,1.063,26.602,0,25.302,0z M15.004,1.704h4.992c0.158,0,0.286,0.128,0.286,0.287
										c0,0.158-0.128,0.286-0.286,0.286h-4.992c-0.158,0-0.286-0.128-0.286-0.286C14.718,1.832,14.846,1.704,15.004,1.704z M17.5,33.818
										c-0.653,0-1.182-0.529-1.182-1.183s0.529-1.182,1.182-1.182s1.182,0.528,1.182,1.182S18.153,33.818,17.5,33.818z M26.021,30.625
										H8.979V3.749h17.042V30.625z"/>
								</g>
								</svg>
								<?php the_field('phone_number', 'options'); ?>
							</a>
						</p>
					</div>
				</section>
			</header>


			<main class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
				<div class="wrap">
					<section id="form" style="background-color: <?php the_field('form_bg'); ?>;">
						<h2><?php the_field('hero_text'); ?></h2>
						<p>Required fields are marked by an asterisk.</p>
						<?php the_field('form_code'); ?>
					</section>
				</div>

				<div id="program-information" class="wrap cf">
					<section id="content-area">
						<h1><?php the_field('main_content_title'); ?></h1>
						<p><?php the_field('main_content'); ?></p>
					</section>

					<section id="programs-list">
						<h3><?php the_field('programs_title', 'options'); ?></h3>
						<ul class="programs">
							<?php if(get_field('programs_list', 'options')): ?>
									<?php while(the_repeater_field('programs_list', 'options')): ?>
										<li><?php the_sub_field('program_name', 'options'); ?></li>
									<?php endwhile; ?>
							 <?php endif; ?>
						</ul>
					</section>
				</div>

				<section id="value-props">
					<div class="wrap">
						<h2><?php the_field('value_props_title'); ?></h2>
						<div class="value-props-container">
							<?php if(get_field('value_propositions')): ?>
								<?php while(the_repeater_field('value_propositions')): ?>
									<div class="value-prop">
										<div class="value-prop__inner <?php if( get_field('vp_color') ) { echo 'dark'; } ?>">
											<h3><?php the_sub_field('vp_title'); ?></h3>
											<p><?php the_sub_field('vp_description'); ?></p>
										</div>
									</div>
								<?php endwhile; ?>
							 <?php endif; ?>
						</div>
					</div>
				</section>

				<section id="about" style="background-color: <?php the_field('color_1', 'options'); ?>;">
					<div class="wrap">
						<h2><?php the_field('about_title', 'options'); ?></h2>
						<p><?php the_field('about_paragraph', 'options'); ?></p>
					</div>
				</section>

				<section id="cta">
					<div class="wrap">
						<h4><?php the_field('cta_text'); ?></h4>
						<a class="button <?php if( get_field('cta_color') ) { echo 'dark'; } ?>" href="#form" style="background-color: <?php the_field('color_2', 'options'); ?>"><?php the_field('cta_button'); ?></a>
					</div>
				</section>

				<section id="accreditation" style="background-color: <?php the_field('color_3', 'options'); ?>">
					<div class="wrap">
						<div class="copy">
							<h3><?php the_field('accreditation_title', 'options'); ?></h3>
							<p><?php the_field('accreditation_paragraph', 'options'); ?></p>
						</div>
						<?php if(get_field('accreditation_images', 'options')): ?>
							<div class="accred_images">
								<?php while(the_repeater_field('accreditation_images', 'options')): ?>
									<img src="<?php the_sub_field('accreditation_image_url', 'options'); ?>" alt="<?php the_sub_field('accreditation_image_alt', 'options'); ?>">
								<?php endwhile; ?>
							 <?php endif; ?>
						 </div>
					</div>
				</section>

				<footer class="footer cf" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">
					<div class="wrap cf">
						<p class="footer__copyright">&copy; <?php echo date('Y'); ?> <?php the_field('school_name', 'options'); ?> | <?php the_field('school_address', 'options'); ?> | <a href="tel:<?php the_field('phone_number', 'options'); ?>"><?php the_field('phone_number', 'options'); ?></a> | <a href="/privacy-policy/">Privacy Policy</a></p>
					</div>
				</footer>

			</main>

</div>

<script type="text/javascript">
	<?php the_field('custom_js'); ?>
</script>

<?php wp_footer(); ?>

<script>
	// Scroll to specific values
	// scrollTo is the same
	window.scroll({
	  top: 2500,
	  left: 0,
	  behavior: 'smooth'
	});

	// Scroll certain amounts from current position
	window.scrollBy({
	  top: 100, // could be negative value
	  left: 0,
	  behavior: 'smooth'
	});

	// Scroll to a certain element
	document.querySelector('.hello').scrollIntoView({
	  behavior: 'smooth'
	});
</script>


</body>

</html> <!-- end of site. what a ride! -->
