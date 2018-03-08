			<footer class="footer cf" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">

				<div class="wrap cf">

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

					<p class="footer__copyright">&copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>. <a href="/privacy-policy/">Privacy Policy</a></p>

				</div>

			</footer>

		</div>

		<?php // all js scripts are loaded in library/bones.php ?>
		<?php wp_footer(); ?>

		<?php // On the Online Degrees page add MixItUp ?>
		<?php if ( is_page_template('page-online-degrees.php') ) { ?>
			<script src="<?php echo get_template_directory_uri(); ?>/library/js/mixitup.min.js"></script>
			<script>
				// Setup MixItUp for card filtering
				 var mixer = mixitup('.mixitup');

				 if ($('.mixitup')) {
					 var container = $('.mixitup')
					 var mixer = mixitup(container, {
						 callbacks: {
							 onMixStart: function(state, futureState) {
							 },
							 onMixEnd: function() {
								 container
									 .find('.card:visible:first')
									 .focus();
							 }
						 },
						 "animation": {
				        "duration": 133,
				        "nudge": false,
				        "reverseOut": false,
				        "effects": "fade stagger(30ms)"
				    }
					 });
					 if (location.hash) {
						 var hash = location.hash.replace('#', '.')
						 var oldBtn = $('button.selected');
						 var newBtn = $("button").find("[data-filter='" + hash + "']");
						 mixer.filter(hash)
						 oldBtn.removeClass('selected');
						 newBtn.addClass('selected');
					 }
				 }
			</script>
		<?php } ?>
	</body>

</html> <!-- end of site. what a ride! -->
