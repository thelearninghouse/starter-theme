			<footer class="footer" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">

				<div class="wrap">

					<p class="footer__copyright">&copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>. <a href="/privacy-policy/">Privacy Policy</a></p>

				</div>

			</footer>

		</div>

		<?php // all js scripts are loaded in library/bones.php ?>
		<?php wp_footer(); ?>
		<script src="<?php echo mix('/js/lp.js'); ?>" charset="utf-8"></script>		
	</body>

</html> <!-- end of site. what a ride! -->
