import Config from "themeConfig";

// Making social share links pop up in new window
function windowPopup(url, width, height) {
	// Calculate the position of the popup so it’s centered on the screen.
	var left = screen.width / 2 - width / 2,
		top = screen.height / 2 - height / 2;

	window.open(
		url,
		"",
		"menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" +
			width +
			",height=" +
			height +
			",top=" +
			top +
			",left=" +
			left
	);
}

$(Config.selectors.socialShare).on("click", function(e) {
	e.preventDefault();

	windowPopup($(this).attr("href"), 500, 300);
});
