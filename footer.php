			<footer class="footer" itemscope itemtype="http://schema.org/WPFooter">

				<div class="wrapLg">

					<nav role="navigation" class="footer__nav">
						<?php wp_nav_menu(
							array(
								'container'      => '',
								'menu'           => __( 'Footer Links', 'tlh_theme' ),
								'menu_class'     => 'nav footer__menu',
								'theme_location' => 'footer-links',
								'before'         => '',
								'after'          => '',
								'link_before'    => '',
								'link_after'     => '',
								'depth'          => 0,
								'fallback_cb'    => 'tlh_footer_links_fallback',
							)
						); ?>
					</nav>

					<p class="footer__copyright">&copy; <?php echo date( 'Y' ); ?><?php bloginfo( 'name' ); ?>
						<?php
						if ( get_field( 'school_address_1', 'option' ) ) {
							echo ' | ';
							the_field( 'school_address_1', 'option' ); }
						?>
						<?php
						if ( get_field( 'school_address_2', 'option' ) ) {
							the_field( 'school_address_2', 'option' ); }
						?>
						<?php
						if ( get_field( 'school_phone', 'option' ) ) {
							echo ' | ';
							the_field( 'school_phone', 'option' ); }
						?>
						<?php
						if ( get_field( 'school_email_address', 'option' ) ) {
							echo ' | <a href="mailto:' . get_field( 'school_email_address', 'option' ) . '">' . get_field( 'school_email_address', 'option' ) . '</a>'; }
						?>
						<span id="privacy-link"> | <a href="/privacy-policy/">Privacy Policy</a></span>
					</p>

				</div>

			</footer>

		</div>

		<?php wp_footer(); ?>

		<?php // Page Specific Scripts ?>

	</body>

</html> <!-- end of site -->
