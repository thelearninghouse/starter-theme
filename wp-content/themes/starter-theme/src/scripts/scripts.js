function handleAccordions() {
	if ( document.querySelector(".accordion") !== null ) {
		return import(/* webpackChunkName: "accordion" */ '@/scripts/components/accordion')
		.then(initializeAccordions => {
			initializeAccordions.default();
		})
	}
}

handleAccordions();

jQuery(document).ready(function($) {
	// Remove Select menu error classs on load
	$(window).load(function() {
		$(".requestinfo select").removeClass("error");
	});
}); /* end of as page load scripts */
