/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*
*   Simple accordion pattern example
*/
Array.prototype.slice
	.call(document.querySelectorAll(".accordion"))
	.forEach(function(accordion) {
		// Allow for multiple accordion sections to be expanded at the same time
		var allowMultiple = accordion.hasAttribute("data-allow-multiple");
		// Allow for each toggle to both open and close individually
		var allowToggle = allowMultiple
			? allowMultiple
			: accordion.hasAttribute("data-allow-toggle");
		// Determine if the first section should be open by default
		var firstOpen = accordion.hasAttribute("data-first-open");

		// Create the array of toggle elements for the accordion group
		var triggers = Array.prototype.slice.call(
			accordion.querySelectorAll(".accordion__trigger")
		);
		var panels = Array.prototype.slice.call(
			accordion.querySelectorAll(".accordion__panel")
		);

		// Close all panels to begin, optionally leaving first one open
		for (var i = 0; i < panels.length; i++) {
			if (firstOpen && i == 0) {
				triggers[i].setAttribute("aria-expanded", "true");
				document
					.getElementById(triggers[i].getAttribute("aria-controls"))
					.removeAttribute("hidden", "");
			} else {
				triggers[i].setAttribute("aria-expanded", "false");
				document
					.getElementById(triggers[i].getAttribute("aria-controls"))
					.setAttribute("hidden", "");
			}
		}

		accordion.addEventListener("click", function(event) {
			var target = event.target;

			if (target.classList.contains("accordion__trigger")) {
				// Check if the current toggle is expanded.
				var isExpanded = target.getAttribute("aria-expanded") == "true";
				var active = accordion.querySelector('[aria-expanded="true"]');

				// without allowMultiple, close the open accordion
				if (!allowMultiple && active && active !== target) {
					// Set the expanded state on the triggering element
					active.setAttribute("aria-expanded", "false");
					// Hide the accordion sections, using aria-controls to specify the desired section
					document
						.getElementById(active.getAttribute("aria-controls"))
						.setAttribute("hidden", "");

					// When toggling is not allowed, clean up disabled state
					if (!allowToggle) {
						active.removeAttribute("aria-disabled");
					}
				}

				if (!isExpanded) {
					// Set the expanded state on the triggering element
					target.setAttribute("aria-expanded", "true");
					// Hide the accordion sections, using aria-controls to specify the desired section
					document
						.getElementById(target.getAttribute("aria-controls"))
						.removeAttribute("hidden");

					// If toggling is not allowed, set disabled state on trigger
					if (!allowToggle) {
						target.setAttribute("aria-disabled", "true");
					}
				} else if (allowToggle && isExpanded) {
					// Set the expanded state on the triggering element
					target.setAttribute("aria-expanded", "false");
					// Hide the accordion sections, using aria-controls to specify the desired section
					document
						.getElementById(target.getAttribute("aria-controls"))
						.setAttribute("hidden", "");
				}

				event.preventDefault();
			}
		});

		// Bind keyboard behaviors on the main accordion container
		accordion.addEventListener("keydown", function(event) {
			var target = event.target;
			var key = event.which.toString();
			// 33 = Page Up, 34 = Page Down
			var ctrlModifier = event.ctrlKey && key.match(/33|34/);

			// Is this coming from an accordion header?
			if (target.classList.contains("accordion__trigger")) {
				// Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
				// 38 = Up, 40 = Down
				if (key.match(/38|40/) || ctrlModifier) {
					var index = triggers.indexOf(target);
					var direction = key.match(/34|40/) ? 1 : -1;
					var length = triggers.length;
					var newIndex = (index + length + direction) % length;

					triggers[newIndex].focus();

					event.preventDefault();
				} else if (key.match(/35|36/)) {
					// 35 = End, 36 = Home keyboard operations
					switch (key) {
						// Go to first accordion
						case "36":
							triggers[0].focus();
							break;
						// Go to last accordion
						case "35":
							triggers[triggers.length - 1].focus();
							break;
					}

					event.preventDefault();
				}
			} else if (ctrlModifier) {
				// Control + Page Up/ Page Down keyboard operations
				// Catches events that happen inside of panels
				panels.forEach(function(panel, index) {
					if (panel.contains(target)) {
						triggers[index].focus();

						event.preventDefault();
					}
				});
			}
		});

		// Minor setup: will set disabled state, via aria-disabled, to an
		// expanded/ active accordion which is not allowed to be toggled close
		if (!allowToggle) {
			// Get the first expanded/ active accordion
			var expanded = accordion.querySelector('[aria-expanded="true"]');

			// If an expanded/ active accordion is found, disable
			if (expanded) {
				expanded.setAttribute("aria-disabled", "true");
			}
		}
	});

// MOBILE NAV TRIGGER
$(".js__menu-trigger").on("click", function(e) {
	e.preventDefault();
	$(".nav-wrapper").toggleClass("visible");
});

// MOBILE MENU SUBMENU FIX
(function() {
	// HELPERS
	function insertSubmenuToggleButtons(submenuLinks, submenuButtonsHTML) {
		submenuLinks.after(submenuButtonsHTML);
	}

	function toggleSubmenuState(CurrentSubmenu) {
		if (CurrentSubmenu.hasClass("active")) {
			CurrentSubmenu.removeClass("active");
		} else {
			CurrentSubmenu.addClass("active");
		}
	}

	function handleActiveSubmenu(RelevantSubmenus) {
		var activeSubmenu = RelevantSubmenus.filter(".active");
		var activeSubmenuButton = activeSubmenu.prev("button.active");

		activeSubmenuButton.removeClass("active");
		activeSubmenu.slideUp(350, "swing", function() {
			activeSubmenu.removeClass("active");
		});
	}

	// END OF HELPERS
	var MainMenu = $(".header__nav > .nav"),
		MenuItemsWithChildren = MainMenu.find(".menu-item-has-children"),
		LinksForSubmenus = MenuItemsWithChildren.find("> a"),
		ButtonHTML =
			'<button class="sub-menu__toggle" aria-hidden="true"><img src="/wp-content/themes/starter-theme/library/images/icons/dropdown.svg" alt="Toggle Sub Menu"></button>',
		Submenus = MenuItemsWithChildren.children(".sub-menu"),
		ChildrenSubmenus = Submenus.find(".menu-item-has-children .sub-menu"),
		SubmenuButton,
		ChildrenSubmenuButtons,
		windowWidth;

	function Setup() {
		ChildrenSubmenus.addClass("childrenSubmenus");
		LinksForSubmenus = MenuItemsWithChildren.find("> a");
		insertSubmenuToggleButtons(LinksForSubmenus, ButtonHTML);
		SubmenuButtons = $(".sub-menu__toggle");
		ChildrenSubmenuButtons = Submenus.find(".sub-menu__toggle");
	}

	function toggleSubmenu(Submenu) {
		Submenu.slideToggle(350, "swing", function() {
			toggleSubmenuState(Submenu);
		});
	}

	function setWindowWidth() {
		windowWidth = $(window).width();
	}

	function windowWatcher() {
		$(window).resize(function() {
			setWindowWidth();
			if (windowWidth > 1039 && Submenus.is(":hidden")) {
				Submenus.removeAttr("style");
			}
		});
	}

	setWindowWidth();
	Setup();
	windowWatcher();

	LinksForSubmenus.on("focus", function() {
		var newActiveSubmenu = $(this)
			.parents("li")
			.find(".sub-menu");
		newActiveSubmenu.addClass("active");

		newActiveSubmenu
			.find("a")
			.last()
			.on("keydown", function(e) {
				if (e.keyCode == 9) {
					newActiveSubmenu.removeClass("active");
				}
			});
	});

	LinksForSubmenus.on("keydown", function(e) {
		if (e.keyCode == 9 && e.shiftKey == true) {
			$(".sub-menu.active").removeClass("active");
		}
	});

	SubmenuButtons.on("click", function(clickEvent) {
		clickEvent.stopPropagation();
		$(this).toggleClass("active");

		var CurrentSubmenu = $(this).next(".sub-menu");
		var hasOpenSubmenu = Submenus.filter(".active").length >= 1 ? true : false;
		var openingNewSubmenu = CurrentSubmenu.hasClass("active") ? false : true;
		var isChildSubmenu = $(this).parents(".active").length > 1;
		var hasOpenChildSubmenu =
			ChildrenSubmenus.filter(".active").length >= 1 ? true : false;

		if (isChildSubmenu) {
			if (hasOpenChildSubmenu && openingNewSubmenu) {
				handleActiveSubmenu(ChildrenSubmenus);
			}
			toggleSubmenu(CurrentSubmenu);
		}

		if (hasOpenSubmenu && openingNewSubmenu && !isChildSubmenu) {
			handleActiveSubmenu(Submenus);
		}

		if (!isChildSubmenu) {
			toggleSubmenu(CurrentSubmenu);
		}
	});
})();

// On resize of window remove active class from header sub menus
$(window).on("resize", function() {
	var win = $(this); //this = window
	if (win.width() >= 768) {
		$(".sub-menu").removeClass("active");
	}
});

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

$(".social-link").on("click", function(e) {
	e.preventDefault();

	windowPopup($(this).attr("href"), 500, 300);
});

/*
 * Put all your regular jQuery in here.
*/
jQuery(document).ready(function($) {
	// Remove Select menu error classs on load
	$(window).load(function() {
		$(".requestinfo select").removeClass("error");
	});
}); /* end of as page load scripts */
