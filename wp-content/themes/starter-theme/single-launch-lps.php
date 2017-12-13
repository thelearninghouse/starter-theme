<!--#if expr="$HTTP_COOKIE=/fonts\-loaded\=true/" -->
<!doctype html>
<html <?php language_attributes(); ?> class="fonts-loaded">
<!--#else -->
<!doctype html>
<!--#endif -->
<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><html <?php language_attributes(); ?> class="no-js"><![endif]-->
	<head>
		<meta charset="utf-8">
		<title><?php the_field('school_name', 'options'); ?></title>

		<?php // force Internet Explorer to use the latest rendering engine available ?>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">

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
		<?php // Get fonts from Google
			$headings_font = get_field('headings_font', 'options');
			$body_font = get_field('body_font', 'options');

			if ($headings_font['label'] === $body_font['label']) {
				$font_url = 'https://fonts.googleapis.com/css?family=' . str_replace(' ', '+', $headings_font['label']) . ':400,700';
			}
			else {
				$font_url = 'https://fonts.googleapis.com/css?family=' . str_replace(' ', '+', $headings_font['label']) . ':400,700|' . str_replace(' ', '+', $body_font['label']) . ':400,700';
			}
		?>
		<link href="<?php echo $font_url ?>" rel="stylesheet">
		<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/library/css/launch-lp-style.min.css">

		<?php // Load custom CSS for this page
			$color_1 = get_field('color_1', 'options'); // String: '#0000000'
			$color_2 = get_field('color_2', 'options'); // String: '#000000'
		  $hero_image = get_field('hero_image'); // Array: [url, alt, sizes[...]]
			$form_style = get_field('lp_form_color'); // Array: [color, color_custom, text_dark]
			$features_style = get_field('lp_features_color'); // Array: [color, color_custom, text_dark]
			$about_style = get_field('lp_about_color'); // Array: [color, color_custom, text_dark]
		?>
		<style>
		  body {
		    font-family: <?php echo $body_font['value']; ?>;
		  }

		  h1, h2, h3, h4, h5, h6 {
		    font-family: <?php echo $headings_font['value']; ?>;
		  }

		  @media screen and (max-width: 767px) {
		    .hero {
		      background-image: url('<?php echo $hero_image['sizes']['medium_large']; ?>');
		    }
		  }

		  @media screen and (min-width: 768px) {
		    .hero {
		      background-image: url('<?php echo $hero_image['url']; ?>');
		    }
		  }

		  .form {
		    background-color: <?php echo $form_style['color'] === 'custom' ? $form_style['color_custom'] : $form_style['color'] === 'primary' ? $color_1 : $color_2 ?>;
		  }

		  .value-props .value-props-container .value-prop {
		    background-color: <?php the_field('vp_bgcolor'); ?>;
		  }

			.about {
				background-color: <?php echo $about_style['color'] === 'custom' ? $about_style['color_custom'] : $about_style['color'] === 'primary' ? $color_1 : $color_2 ?>;
			}
		</style>

		<?php if (get_field('custom_css')) { ?>
			<style>
				<?php the_field('custom_css'); ?>
			</style>
		<?php } ?>
	</head>

	<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">

		<div class="container">
			<header class="header" role="banner" itemscope itemtype="http://schema.org/WPHeader">
				<section class="hero<?php echo get_field('lp_hero_overlay') ? ' overlay' : ''; ?>">
					<div class="school-info wrap">
						<p class="logo" itemscope itemtype="http://schema.org/Organization">
							<?php // Get correct logo
								$school_logo = get_field('lp_logo_version') ? get_field('school_logo_alternative', 'options') : get_field('school_logo', 'options');
							?>
							<img src="<?php echo $school_logo['url']; ?>" width="" alt="<?php echo $school_logo['alt']; ?>">
						</p>
						<p class="phone-number">
							<a href="tel:<?php the_field('school_phone', 'options'); ?>">
								<?php tlh_icon('phone'); ?>
								<?php the_field('school_phone', 'options'); ?>
							</a>
						</p>
					</div>
				</section>
			</header>


			<main class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
				<div class="wrap">
					<section class="form<?php echo $form_style['text_dark'] ? ' text-dark' : ''; ?>">
						<h2><?php the_field('hero_text'); ?></h2>
						<p>Required fields are marked by an asterisk.</p>
						<?php the_field('form_code'); ?>
					</section>
				</div>

				<div class="program-information wrap cf">
					<section class="program-content">
						<h1><?php the_field('main_content_title'); ?></h1>
						<p><?php the_field('main_content'); ?></p>
					</section>

					<section class="program-sidebar">
						<h2 class="text-xl"><?php the_field('programs_title', 'options'); ?></h2>
						<ul class="programs">
							<?php if(get_field('programs_list', 'options')): ?>
									<?php while(the_repeater_field('programs_list', 'options')): ?>
										<li><?php the_sub_field('program_name', 'options'); ?></li>
									<?php endwhile; ?>
							 <?php endif; ?>
						</ul>
					</section>
				</div>

				<section class="features">
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

				<section class="about" style="background-color: <?php the_field('color_1', 'options'); ?>;">
					<div class="wrap">
						<h2><?php the_field('about_title', 'options'); ?></h2>
						<p><?php the_field('about_paragraph', 'options'); ?></p>
					</div>
				</section>

				<section class="cta">
					<div class="wrap">
						<h4><?php the_field('cta_text'); ?></h4>
						<a class="button <?php if( get_field('cta_color') ) { echo 'dark'; } ?>" href="#form" style="background-color: <?php the_field('color_2', 'options'); ?>"><?php the_field('cta_button'); ?></a>
					</div>
				</section>

				<section class="accreditation" style="background-color: <?php the_field('color_3', 'options'); ?>">
					<div class="wrap">
						<div class="copy">
							<h2><?php the_field('accreditation_title', 'options'); ?></h2>
							<p><?php the_field('accreditation_paragraph', 'options'); ?></p>
						</div>
						<?php if(get_field('accreditation_images', 'options')): ?>
							<div class="accred_images">
								<?php while(the_repeater_field('accreditation_images', 'options')): ?>
									<img src="<?php the_sub_field('accreditation_image_url', 'options'); ?>" alt="<?php the_sub_field('accreditation_image_alt', 'options'); ?>">
								<?php endwhile; ?>
							</div>
						<?php endif; ?>
					</div>
				</section>

				<footer class="footer cf" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">
					<div class="wrap cf">
						<p class="footer__copyright">&copy; <?php echo date('Y'); ?> <?php the_field('school_name', 'options'); ?> | <?php the_field('school_address', 'options'); ?> | <a href="tel:<?php the_field('phone_number', 'options'); ?>"><?php the_field('phone_number', 'options'); ?></a> | <a href="/privacy-policy/">Privacy Policy</a></p>
					</div>
				</footer>
			</main>
</div>

<?php if (get_field('custom_js')) { ?>
	<script type="text/javascript">
		<?php the_field('custom_js'); ?>
	</script>
<?php } ?>

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
