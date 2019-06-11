				<footer class="footerBasic" itemscope itemtype="http://schema.org/WPFooter">

					<div class="wrapMd">
						<p><span><?php the_field( 'school_address_1', 'option' ); ?>, <?php the_field( 'school_address_2', 'option' ); ?> | <?php tlh_phone_link(); ?></p>
						<p>&copy; <?php echo date( 'Y' ); ?> <?php the_field( 'school_name', 'options' ); ?> | <a href="/privacy-policy" title="View our privacy policy">Privacy Policy</a></p>
					</div>
				</footer>
			</div>
		</div>
		<?php
		$hero_image = get_field( 'hero_background_image' );
		if ( $hero_image ) {
			tlh_responsive_bg_style( '.container__background', $hero_image['ID'] );
		} else {
			$default_bg = get_field( 'default_background_image', 'options' );
			tlh_responsive_bg_style( '.container__background', $default_bg['ID'] );
		}
		?>

	<?php // all js scripts are loaded in library/bones.php ?>
	<?php get_template_part( 'template-parts/footer-scripts/lp' ); ?>
	<?php wp_footer(); ?>

	</body>

</html> <!-- end of site -->
