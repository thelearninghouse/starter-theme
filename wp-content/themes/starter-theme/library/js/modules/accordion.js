$(".accordion .accord").on("click", function() {
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
	} else {
		$(".accordion .accord").removeClass("active");
		$(this).addClass("active");
	}
});
