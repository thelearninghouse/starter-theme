/*
 * Put all your regular jQuery in here.
*/
jQuery(document).ready(function($) {
	// Remove Select menu error classs on load
	$(window).load(function() {
		$(".requestinfo select").removeClass("error");
	});
}); /* end of as page load scripts */
