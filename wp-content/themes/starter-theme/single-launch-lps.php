<!DOCTYPE html>
<html <?php language_attributes(); ?>>

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
		  $hero_image = get_field('lp_hero_image'); // Array: [url, alt, sizes[...]]
			$form_style = get_field('lp_form_color'); // Array: [color, color_custom, text_dark]
			$values_style = get_field('lp_values_color'); // Array: [color, color_custom, text_dark]
			$about_style = get_field('lp_about_color'); // Array: [color, color_custom, text_dark]
			$cta_button_style = get_field('lp_cta_button_color'); // Array: [color, color_custom, text_dark]
		?>
		<style>
			body {
				font-family: <?php echo $body_font['value']; ?>;
			}

			h1, h2, h3, h4, h5, h6 {
				font-family: <?php echo $headings_font['value']; ?>;
			}

			@media screen and (max-width: 767px) {
				#hero {
					background-image: url('<?php echo $hero_image['sizes']['medium_large']; ?>');
				}
			}

			@media screen and (min-width: 768px) {
				#hero {
					background-image: url('<?php echo $hero_image['url']; ?>');
				}
			}

			#form {
				background-color: <?php echo ($form_style['color'] === 'custom' ? $form_style['color_custom'] : ($form_style['color'] === 'primary' ? $color_1 : $color_2)); ?>;
			}

			#value-props .value-prop {
				background-color: <?php echo ($values_style['color'] === 'custom' ? $values_style['color_custom'] : ($values_style['color'] === 'primary' ? $color_1 : $color_2)); ?>;
			}

			#about {
				background-color: <?php echo ($about_style['color'] === 'custom' ? $about_style['color_custom'] : ($about_style['color'] === 'primary' ? $color_1 : $color_2)); ?>;
			}

			#cta .button {
				background-color: <?php echo ($cta_button_style['color'] === 'custom' ? $cta_button_style['color_custom'] : ($cta_button_style['color'] === 'primary' ? $color_1 : $color_2)); ?>;
			}
		</style>

		<style>
			<?php the_field('custom_css'); ?>
		</style>

	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-<?php the_field('gtm_id', 'options'); ?>');</script>
	</head>

	<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">
	<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-<?php the_field('gtm_id', 'options'); ?>" height="0" width="0" style="display:none;visibility:hidden"></iframe>

		<div class="container">

			<header class="header" role="banner" itemscope itemtype="http://schema.org/WPHeader">
				<section id="hero"<?php echo get_field('lp_hero_overlay') ? 'class="overlay"' : ''; ?>>
					<div class="wrap">
						<div class="school-info">
							<p class="logo" itemscope itemtype="http://schema.org/Organization">
								<?php // Get correct logo
									$school_logo = get_field('lp_logo_version') ? get_field('school_logo_alternative', 'options') : get_field('school_logo', 'options');
								?>
								<img src="<?php echo $school_logo['url']; ?>" alt="<?php echo $school_logo['alt']; ?>">
							</p>
							<p class="phone-number">
								<a href="tel:<?php the_field('school_phone', 'options'); ?>">
									<?php tlh_icon('phone'); ?>
									<?php the_field('school_phone', 'options'); ?>
								</a>
							</p>
						</div>
					</div>
				</section>
			</header>


			<main class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
				<div class="wrap">
					<section id="form"<?php echo $form_style['text_dark'] ? 'class="dark"' : ''; ?>>
						<h2><?php the_field('lp_hero_text'); ?></h2>
						<p>Required fields are marked by an asterisk.</p>
						<?php the_field('lp_form_code'); ?>
					</section>
				</div>

				<div id="program-information" class="wrap cf">
					<section id="content-area">
						<h1><?php the_field('lp_main_content_title'); ?></h1>
						<div><?php the_field('lp_main_content'); ?></div>
					</section>

					<section id="programs-list">
						<h3><?php the_field('lp_main_sidebar_title'); ?></h3>
						<div class="programs"><?php the_field('lp_main_sidebar'); ?></div>
					</section>
				</div>

				<section id="value-props">
					<div class="wrap">
						<h2><?php the_field('lp_values_title'); ?></h2>
						<div class="value-props-container<?php echo $values_style['text_dark'] ? ' text-dark' : ''; ?>">
							<?php if(get_field('lp_values')): ?>
								<?php while(the_repeater_field('lp_values')): ?>
									<div class="value-prop">
										<div class="value-prop__inner<?php echo $values_style['text_dark'] ? ' dark' : ''; ?>">
											<h3><?php the_sub_field('title'); ?></h3>
											<div><?php the_sub_field('description'); ?></div>
										</div>
									</div>
								<?php endwhile; ?>
							 <?php endif; ?>
						</div>
					</div>
				</section>

				<section id="about"<?php echo $about_style['text_dark'] ? 'class="dark"' : ''; ?>>
					<div class="wrap">
						<h2><?php the_field('lp_about_title'); ?></h2>
						<p><?php the_field('lp_about_paragraph'); ?></p>
					</div>
				</section>

				<section id="cta">
					<div class="wrap">
						<h4><?php the_field('lp_cta_text'); ?></h4>
						<a class="button<?php echo $cta_button_style['text_dark'] ? ' dark' : ''; ?>" href="#form"><?php the_field('lp_cta_button'); ?></a>
					</div>
				</section>

				<section id="accreditation">
					<div class="wrap">
						<div class="copy">
							<h3><?php the_field('lp_accreditation_title'); ?></h3>
							<div><?php the_field('lp_accreditation_paragraph'); ?></div>
						</div>
						<?php $images = get_field('lp_accreditation_logos');
							$size = 'full'; // (thumbnail, medium, large, full or custom size)
							if( $images ): ?>
								<div class="accred_images">
							    <ul>
						        <?php foreach( $images as $image ): ?>
					            <li>
					            	<?php echo wp_get_attachment_image( $image['ID'], $size ); ?>
					            </li>
						        <?php endforeach; ?>
							    </ul>
								</div>
							<?php endif; ?>
					</div>
				</section>

				<footer class="footer" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">
					<div class="wrap">
						<p class="footer__copyright">&copy; <?php echo date('Y'); ?> <?php the_field('school_name', 'options'); ?> | <?php the_field('school_address_1', 'options'); ?>, <?php the_field('school_address_2', 'options'); ?> | <a href="tel:<?php the_field('school_phone', 'options'); ?>"><?php the_field('school_phone', 'options'); ?></a> | <a href="/privacy-policy/">Privacy Policy</a></p>
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
