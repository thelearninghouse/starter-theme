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

		<link rel="icon" type="image/png" sizes="32x32" href="<?php the_field('favicon', 'options'); ?>">

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
		<?php require_once('css-injector/launch-lp.php'); ?>

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

			h1, h2, h3, h4, h5, h6, .button, input[type="submit"] {
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

		<?php include 'template-parts/header/tag-manager-script.php' ; ?>
	</head>

	<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">
		<?php include 'template-parts/header/tag-manager-iframe.php'; ?>

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
									<span class="icon">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="35" viewBox="0 0 20 35">
										  <path fill-rule="evenodd" d="M3.8458278,8.8817842e-16 L16.1541722,0 C17.4914503,0 17.9763797,0.139238417 18.4652686,0.400699056 C18.9541574,0.662159695 19.3378403,1.04584256 19.5993009,1.53473144 C19.8607616,2.02362033 20,2.50854969 20,3.8458278 L20,31.1541722 C20,32.4914503 19.8607616,32.9763797 19.5993009,33.4652686 C19.3378403,33.9541574 18.9541574,34.3378403 18.4652686,34.5993009 C17.9763797,34.8607616 17.4914503,35 16.1541722,35 L3.8458278,35 C2.50854969,35 2.02362033,34.8607616 1.53473144,34.5993009 C1.04584256,34.3378403 0.662159695,33.9541574 0.400699056,33.4652686 C0.139238417,32.9763797 0,32.4914503 0,31.1541722 L0,3.8458278 C0,2.50854969 0.139238417,2.02362033 0.400699056,1.53473144 C0.662159695,1.04584256 1.04584256,0.662159695 1.53473144,0.400699056 C2.02362033,0.139238417 2.50854969,1.77635684e-15 3.8458278,8.8817842e-16 Z M2,5 L2,30 L18,30 L18,5 L2,5 Z M7.5,2 C7.22385763,2 7,2.22385763 7,2.5 C7,2.77614237 7.22385763,3 7.5,3 L12.5,3 C12.7761424,3 13,2.77614237 13,2.5 C13,2.22385763 12.7761424,2 12.5,2 L7.5,2 Z M10,34 C10.8284271,34 11.5,33.3284271 11.5,32.5 C11.5,31.6715729 10.8284271,31 10,31 C9.17157288,31 8.5,31.6715729 8.5,32.5 C8.5,33.3284271 9.17157288,34 10,34 Z"/>
										</svg>
									</span>
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
						<p>All fields are required.</p>
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


				<?php if ( get_field('lp_accreditation_title')) { ?>
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
				<?php } ?>

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

</body>

</html> <!-- end of site. what a ride! -->
