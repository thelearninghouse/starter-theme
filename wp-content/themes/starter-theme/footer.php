			<footer class="footer" itemscope itemtype="http://schema.org/WPFooter">

				<div class="wrapLg">

					<nav role="navigation" class="footer__nav">
						<?php wp_nav_menu(array(
    					'container' => '',                           // enter '' to remove nav container (just make sure .footer-links in _base.scss isn't wrapping)
    					'menu' => __( 'Footer Links', 'tlh_theme' ),   // nav name
    					'menu_class' => 'nav footer__menu cf',            // adding custom nav class
    					'theme_location' => 'footer-links',             // where it's located in the theme
    					'before' => '',                                 // before the menu
    					'after' => '',                                  // after the menu
    					'link_before' => '',                            // before each link
    					'link_after' => '',                             // after each link
    					'depth' => 0,                                   // limit the depth of the nav
    					'fallback_cb' => 'tlh_footer_links_fallback'  // fallback function
						)); ?>
					</nav>

					<p class="footer__copyright">&copy; <?php echo date('Y'); ?><?php bloginfo( 'name' ); ?>
						<?php $address1 = the_field('school_address_1', 'option') ? ' | ' . $address1 : ''; ?>
						<?php $address2 = the_field('school_address_2', 'option') ? ' | ' . $address2 : ''; ?>
						<?php $phone = the_field('school_phone', 'option') ? ' | ' . $phone : '' ?>
						<?php $email = the_field('school_email_address', 'option') ? ' | <a href="mailto:' . $email . '">' . $email . '</a>' : ''; ?>
						<span id="privacy-link"> | <a href="/privacy-policy/">Privacy Policy</a></span>
					</p>

				</div>

			</footer>

		</div>

		<?php wp_footer(); ?>

		<?php // Page Specific Scripts ?>

	</body>

</html> <!-- end of site -->
