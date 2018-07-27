import Config from "themeConfig";

function filterPath(string) {
	return string
		.replace(/^\//, "")
		.replace(/(index|default).[a-zA-Z]{3,4}$/, "")
		.replace(/\/$/, "");
}

var locationPath = filterPath(location.pathname);
$(Config.selectors.smoothScroll).each(function() {
	console.log(this.hash);
	var thisPath = filterPath(this.pathname) || locationPath;
	var hash = this.hash;
	if ($("#" + hash.replace(/#/, "")).length) {
		if (
			locationPath == thisPath &&
			(location.hostname == this.hostname || !this.hostname) &&
			this.hash.replace(/#/, "")
		) {
			var $target = $(hash),
				target = this.hash;
			if (target) {
				$(this).click(function(event) {
					event.preventDefault();
					$("html, body").animate(
						{ scrollTop: $target.offset().top },
						1000,
						function() {
							location.hash = target;
							$target.focus();
							if ($target.is(":focus")) {
								//checking if the target was focused
								return false;
							} else {
								$target.attr("tabindex", "-1"); //Adding tabindex for elements not focusable
								$target.focus(); //Setting focus
							}
						}
					);
				});
			}
		}
	}
});
