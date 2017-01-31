			<footer class="footer cf" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">

				<div class="wrap cf">

					<p class="footer__copyright">&copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>. <a href="/privacy-policy/">Privacy Policy</a></p>

				</div>

			</footer>

		</div>

		<?php // all js scripts are loaded in library/bones.php ?>
		<?php wp_footer(); ?>

        <?php // better font loading with fontfaceobserver ?>
        <script src="<?php echo get_stylesheet_directory_uri(); ?>/library/bower_components/fontfaceobserver/fontfaceobserver.js">
        <script>
        new w.FontFaceObserver( "Source Sans Pro" )
            .check()
                .then( function(){
                        w.document.documentElement.className += " fonts-loaded";
                            });
        </script>


	</body>

</html> <!-- end of site. what a ride! -->
