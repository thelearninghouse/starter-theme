/*
 * Put all your regular jQuery in here.
*/
jQuery(document).ready(function($) {
	$(".accordion .accord").on("click", function() {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			$(".accordion .accord").removeClass("active");
			$(this).addClass("active");
		}
	});

	// Pullquote functionality so the content is not repeated
	$(function() {
		$("span.pullquote").each(function() {
			var $parentParagraph = $(this).parent("p");
			$parentParagraph.css("position", "relative");
			$(this)
				.clone()
				.addClass("pulledquote")
				.prependTo($parentParagraph);
		});
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

	// Remove Select menu error classs on load
	$(window).load(function() {
		$(".requestinfo select").removeClass("error");
	});

	// Mobile Nav Trigger
	$(".js__menu-trigger").on("click", function(e) {
		e.preventDefault();
		$(".header__nav").toggleClass("visible");
	});
}); /* end of as page load scripts */

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
	var MainMenu = $("#menu-main-menu"),
		MenuItemsWithChildren = MainMenu.find(".menu-item-has-children"),
		LinksForSubmenus = MenuItemsWithChildren.find("> a"),
		ButtonHTML =
			'<button class="sub-menu__toggle" aria-hidden="true"><img src="/wp-content/themes/starter-theme/library/images/icon-dropdown.svg" alt="Toggle Sub Menu"></button>',
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
