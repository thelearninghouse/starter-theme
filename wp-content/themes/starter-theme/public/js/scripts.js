webpackJsonp([6],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = {
	directoryName: "starter-theme",
	selectors: {
		accordion: ".accordion",
		mixItUp: ".mixitup",
		socialShare: ".social-link",
		sticky: ".sticky"
	},
	useVue: true
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
module.exports = __webpack_require__(18);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_themeConfig__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_themeConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_themeConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_helpers_utilities__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_helpers_utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scripts_helpers_utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_components_main_navigation__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_components_main_navigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scripts_components_main_navigation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_VlhLibrary__ = __webpack_require__(8);
/* Get Theme Config File
*****************************/


/* Regular Imports - Include accross all pages
*****************************/



/* Importing Vue Components
*****************************/


if (__WEBPACK_IMPORTED_MODULE_0_themeConfig___default.a.useVue) {
	Object(__WEBPACK_IMPORTED_MODULE_3__scripts_VlhLibrary__["a" /* default */])();
}

/* Dynamic Imports - Loading based on conditions
*****************************/
function handleAccordions() {
	if (document.querySelector(__WEBPACK_IMPORTED_MODULE_0_themeConfig___default.a.selectors.accordion) !== null) {
		return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 23));
	}
}

function handleDegreeFiltering() {
	if (document.querySelector(__WEBPACK_IMPORTED_MODULE_0_themeConfig___default.a.selectors.mixItUp) !== null) {
		return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 24));
	}
}

function handleSocialShare() {
	if (document.querySelector(__WEBPACK_IMPORTED_MODULE_0_themeConfig___default.a.selectors.socialShare) !== null) {
		return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 25));
	}
}

function handleStickyElements() {
	if (document.querySelector(__WEBPACK_IMPORTED_MODULE_0_themeConfig___default.a.selectors.sticky) !== null) {
		return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 26));
	}
}

/* Calling Dynamic Import Functions
*****************************/
handleAccordions();
handleDegreeFiltering();
handleSocialShare();
handleStickyElements();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
	var FormSelects = document.querySelectorAll('.requestinfo select');
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = FormSelects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var select = _step.value;

			select.classList.remove('error');
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

$(".js__menu-trigger").on("click", function (e) {
	e.preventDefault();
	$(".nav-wrapper").toggleClass("visible");
});

// MOBILE MENU SUBMENU FIX
(function () {
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
		activeSubmenu.slideUp(350, "swing", function () {
			activeSubmenu.removeClass("active");
		});
	}

	// END OF HELPERS
	var MainMenu = $(".header__nav > .nav"),
	    MenuItemsWithChildren = MainMenu.find(".menu-item-has-children"),
	    LinksForSubmenus = MenuItemsWithChildren.find("> a"),
	    ButtonHTML = '<button class="sub-menu__toggle" aria-hidden="true"><img src="/wp-content/themes/starter-theme/public/images/icons/dropdown.svg" alt="Toggle Sub Menu"></button>',
	    Submenus = MenuItemsWithChildren.children(".sub-menu"),
	    ChildrenSubmenus = Submenus.find(".menu-item-has-children .sub-menu"),
	    SubmenuButtons,
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
		Submenu.slideToggle(350, "swing", function () {
			toggleSubmenuState(Submenu);
		});
	}

	function setWindowWidth() {
		windowWidth = $(window).width();
	}

	function windowWatcher() {
		$(window).resize(function () {
			setWindowWidth();
			if (windowWidth > 1039 && Submenus.is(":hidden")) {
				Submenus.removeAttr("style");
			}
		});
	}

	setWindowWidth();
	Setup();
	windowWatcher();

	LinksForSubmenus.on("focus", function () {
		var newActiveSubmenu = $(this).parents("li").find(".sub-menu");
		newActiveSubmenu.addClass("active");

		newActiveSubmenu.find("a").last().on("keydown", function (e) {
			if (e.keyCode == 9) {
				newActiveSubmenu.removeClass("active");
			}
		});
	});

	LinksForSubmenus.on("keydown", function (e) {
		if (e.keyCode == 9 && e.shiftKey == true) {
			$(".sub-menu.active").removeClass("active");
		}
	});

	SubmenuButtons.on("click", function (clickEvent) {
		clickEvent.stopPropagation();
		$(this).toggleClass("active");

		var CurrentSubmenu = $(this).next(".sub-menu");
		var hasOpenSubmenu = Submenus.filter(".active").length >= 1 ? true : false;
		var openingNewSubmenu = CurrentSubmenu.hasClass("active") ? false : true;
		var isChildSubmenu = $(this).parents(".active").length > 1;
		var hasOpenChildSubmenu = ChildrenSubmenus.filter(".active").length >= 1 ? true : false;

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
$(window).on("resize", function () {
	var win = $(this); //this = window
	if (win.width() >= 768) {
		$(".sub-menu").removeClass("active");
	}
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ButtonCounter__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ButtonCounter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ButtonCounter__);



/* harmony default export */ __webpack_exports__["a"] = (function () {

  // Global Components
  __WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('button-counter', __WEBPACK_IMPORTED_MODULE_1__ButtonCounter___default.a);

  var VlhAppEl = document.getElementById('vlh-app');

  if (VlhAppEl) {
    var vlhApp = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
      el: VlhAppEl,
      data: {
        msg: 'A Message New 5',
        showModal: false
      },
      components: {
        AsyncComponent: function AsyncComponent() {
          return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 20));
        },
        Modal: function Modal() {
          return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 21));
        }
      }
    });
  }
});

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(13)
/* template */
var __vue_template__ = __webpack_require__(14)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/scripts/VlhLibrary/ButtonCounter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0fd75b78", Component.options)
  } else {
    hotAPI.reload("data-v-0fd75b78", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ButtonCounter',
  data: function data() {
    return {
      count: 0
    };
  }
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      on: {
        click: function($event) {
          _vm.count++
        }
      }
    },
    [_vm._v("You clicked me " + _vm._s(_vm.count) + " times.")]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0fd75b78", module.exports)
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })
],[4]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZS5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaGVscGVycy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9tYWluLW5hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9WbGhMaWJyYXJ5L0J1dHRvbkNvdW50ZXIudnVlIiwid2VicGFjazovLy9zcmMvc2NyaXB0cy9WbGhMaWJyYXJ5L0J1dHRvbkNvdW50ZXIudnVlIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL1ZsaExpYnJhcnkvQnV0dG9uQ291bnRlci52dWU/YWNjZSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NyaXRpY2FsLWhvbWUuc2Nzcz8zZWY5Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbGF1bmNoLWxwLXN0eWxlLnNjc3M/MTgxNSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2xwLXN0eWxlLnNjc3M/MGRlOSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/OTY5YiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImRpcmVjdG9yeU5hbWUiLCJzZWxlY3RvcnMiLCJhY2NvcmRpb24iLCJtaXhJdFVwIiwic29jaWFsU2hhcmUiLCJzdGlja3kiLCJ1c2VWdWUiLCJDb25maWciLCJpbml0aWFsaXplVmxoTGlicmFyeSIsImhhbmRsZUFjY29yZGlvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYW5kbGVEZWdyZWVGaWx0ZXJpbmciLCJoYW5kbGVTb2NpYWxTaGFyZSIsImhhbmRsZVN0aWNreUVsZW1lbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkZvcm1TZWxlY3RzIiwicXVlcnlTZWxlY3RvckFsbCIsInNlbGVjdCIsImNsYXNzTGlzdCIsInJlbW92ZSIsIiQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZUNsYXNzIiwiaW5zZXJ0U3VibWVudVRvZ2dsZUJ1dHRvbnMiLCJzdWJtZW51TGlua3MiLCJzdWJtZW51QnV0dG9uc0hUTUwiLCJhZnRlciIsInRvZ2dsZVN1Ym1lbnVTdGF0ZSIsIkN1cnJlbnRTdWJtZW51IiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaGFuZGxlQWN0aXZlU3VibWVudSIsIlJlbGV2YW50U3VibWVudXMiLCJhY3RpdmVTdWJtZW51IiwiZmlsdGVyIiwiYWN0aXZlU3VibWVudUJ1dHRvbiIsInByZXYiLCJzbGlkZVVwIiwiTWFpbk1lbnUiLCJNZW51SXRlbXNXaXRoQ2hpbGRyZW4iLCJmaW5kIiwiTGlua3NGb3JTdWJtZW51cyIsIkJ1dHRvbkhUTUwiLCJTdWJtZW51cyIsImNoaWxkcmVuIiwiQ2hpbGRyZW5TdWJtZW51cyIsIlN1Ym1lbnVCdXR0b25zIiwiQ2hpbGRyZW5TdWJtZW51QnV0dG9ucyIsIndpbmRvd1dpZHRoIiwiU2V0dXAiLCJ0b2dnbGVTdWJtZW51IiwiU3VibWVudSIsInNsaWRlVG9nZ2xlIiwic2V0V2luZG93V2lkdGgiLCJ3aW5kb3ciLCJ3aWR0aCIsIndpbmRvd1dhdGNoZXIiLCJyZXNpemUiLCJpcyIsInJlbW92ZUF0dHIiLCJuZXdBY3RpdmVTdWJtZW51IiwicGFyZW50cyIsImxhc3QiLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJjbGlja0V2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwibmV4dCIsImhhc09wZW5TdWJtZW51IiwibGVuZ3RoIiwib3BlbmluZ05ld1N1Ym1lbnUiLCJpc0NoaWxkU3VibWVudSIsImhhc09wZW5DaGlsZFN1Ym1lbnUiLCJ3aW4iLCJWdWUiLCJjb21wb25lbnQiLCJWbGhBcHBFbCIsImdldEVsZW1lbnRCeUlkIiwidmxoQXBwIiwiZWwiLCJkYXRhIiwibXNnIiwic2hvd01vZGFsIiwiY29tcG9uZW50cyIsIkFzeW5jQ29tcG9uZW50IiwiTW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2hCQyxnQkFBZSxlQURDO0FBRWhCQyxZQUFXO0FBQ1ZDLGFBQVcsWUFERDtBQUVWQyxXQUFTLFVBRkM7QUFHVkMsZUFBYSxjQUhIO0FBSVZDLFVBQVE7QUFKRSxFQUZLO0FBUWhCQyxTQUFRO0FBUlEsQ0FBakIsQzs7Ozs7O0FDQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RHQTtBQUFBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBR0E7O0FBRUE7O0FB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dGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcblx0ZGlyZWN0b3J5TmFtZTogXCJzdGFydGVyLXRoZW1lXCIsXG5cdHNlbGVjdG9yczoge1xuXHRcdGFjY29yZGlvbjogXCIuYWNjb3JkaW9uXCIsXG5cdFx0bWl4SXRVcDogXCIubWl4aXR1cFwiLFxuXHRcdHNvY2lhbFNoYXJlOiBcIi5zb2NpYWwtbGlua1wiLFxuXHRcdHN0aWNreTogXCIuc3RpY2t5XCJcblx0fSxcblx0dXNlVnVlOiB0cnVlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGhlbWUuY29uZmlnLmpzIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICB2YXIgZnVuY3Rpb25hbCA9IG9wdGlvbnMuZnVuY3Rpb25hbFxuICAgIHZhciBleGlzdGluZyA9IGZ1bmN0aW9uYWxcbiAgICAgID8gb3B0aW9ucy5yZW5kZXJcbiAgICAgIDogb3B0aW9ucy5iZWZvcmVDcmVhdGVcblxuICAgIGlmICghZnVuY3Rpb25hbCkge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBleGlzdGluZyhoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIvKiBHZXQgVGhlbWUgQ29uZmlnIEZpbGVcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuaW1wb3J0IENvbmZpZyBmcm9tIFwidGhlbWVDb25maWdcIjtcblxuLyogUmVndWxhciBJbXBvcnRzIC0gSW5jbHVkZSBhY2Nyb3NzIGFsbCBwYWdlc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgXCJAL3NjcmlwdHMvaGVscGVycy91dGlsaXRpZXNcIjtcbmltcG9ydCBcIkAvc2NyaXB0cy9jb21wb25lbnRzL21haW4tbmF2aWdhdGlvblwiO1xuXG5cbi8qIEltcG9ydGluZyBWdWUgQ29tcG9uZW50c1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgaW5pdGlhbGl6ZVZsaExpYnJhcnkgZnJvbSBcIkAvc2NyaXB0cy9WbGhMaWJyYXJ5XCI7XG5cbmlmIChDb25maWcudXNlVnVlKSB7XG5cdGluaXRpYWxpemVWbGhMaWJyYXJ5KCk7XG59XG5cbi8qIER5bmFtaWMgSW1wb3J0cyAtIExvYWRpbmcgYmFzZWQgb24gY29uZGl0aW9uc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiBoYW5kbGVBY2NvcmRpb25zKCkge1xuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDb25maWcuc2VsZWN0b3JzLmFjY29yZGlvbikgIT09IG51bGwpIHtcblx0XHRyZXR1cm4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYWNjb3JkaW9uXCIgKi8gXCJAL3NjcmlwdHMvY29tcG9uZW50cy9hY2NvcmRpb25cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRGVncmVlRmlsdGVyaW5nKCkge1xuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDb25maWcuc2VsZWN0b3JzLm1peEl0VXApICE9PSBudWxsKSB7XG5cdFx0cmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImRlZ3JlZS1maWx0ZXJpbmdcIiAqLyBcIkAvc2NyaXB0cy9jb21wb25lbnRzL2RlZ3JlZS1maWx0ZXJpbmdcIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlU29jaWFsU2hhcmUoKSB7XG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKENvbmZpZy5zZWxlY3RvcnMuc29jaWFsU2hhcmUpICE9PSBudWxsKSB7XG5cdFx0cmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInNvY2lhbC1zaGFyZVwiICovIFwiQC9zY3JpcHRzL2NvbXBvbmVudHMvc29jaWFsLXNoYXJlLWJ1dHRvbnNcIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlU3RpY2t5RWxlbWVudHMoKSB7XG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKENvbmZpZy5zZWxlY3RvcnMuc3RpY2t5KSAhPT0gbnVsbCkge1xuXHRcdHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJzdGlja3lcIiAqLyBcIkAvc2NyaXB0cy9jb21wb25lbnRzL3N0aWNreVwiKTtcblx0fVxufVxuXG5cbi8qIENhbGxpbmcgRHluYW1pYyBJbXBvcnQgRnVuY3Rpb25zXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmhhbmRsZUFjY29yZGlvbnMoKTtcbmhhbmRsZURlZ3JlZUZpbHRlcmluZygpO1xuaGFuZGxlU29jaWFsU2hhcmUoKTtcbmhhbmRsZVN0aWNreUVsZW1lbnRzKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9zY3JpcHRzLmpzIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG5cdGNvbnN0IEZvcm1TZWxlY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlcXVlc3RpbmZvIHNlbGVjdCcpXG5cdGZvciAodmFyIHNlbGVjdCBvZiBGb3JtU2VsZWN0cykge1xuXHRcdHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpXG5cdH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvaGVscGVycy91dGlsaXRpZXMuanMiLCIkKFwiLmpzX19tZW51LXRyaWdnZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0JChcIi5uYXYtd3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInZpc2libGVcIik7XG59KTtcblxuLy8gTU9CSUxFIE1FTlUgU1VCTUVOVSBGSVhcbihmdW5jdGlvbigpIHtcblx0Ly8gSEVMUEVSU1xuXHRmdW5jdGlvbiBpbnNlcnRTdWJtZW51VG9nZ2xlQnV0dG9ucyhzdWJtZW51TGlua3MsIHN1Ym1lbnVCdXR0b25zSFRNTCkge1xuXHRcdHN1Ym1lbnVMaW5rcy5hZnRlcihzdWJtZW51QnV0dG9uc0hUTUwpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdG9nZ2xlU3VibWVudVN0YXRlKEN1cnJlbnRTdWJtZW51KSB7XG5cdFx0aWYgKEN1cnJlbnRTdWJtZW51Lmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XG5cdFx0XHRDdXJyZW50U3VibWVudS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Q3VycmVudFN1Ym1lbnUuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlQWN0aXZlU3VibWVudShSZWxldmFudFN1Ym1lbnVzKSB7XG5cdFx0dmFyIGFjdGl2ZVN1Ym1lbnUgPSBSZWxldmFudFN1Ym1lbnVzLmZpbHRlcihcIi5hY3RpdmVcIik7XG5cdFx0dmFyIGFjdGl2ZVN1Ym1lbnVCdXR0b24gPSBhY3RpdmVTdWJtZW51LnByZXYoXCJidXR0b24uYWN0aXZlXCIpO1xuXG5cdFx0YWN0aXZlU3VibWVudUJ1dHRvbi5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblx0XHRhY3RpdmVTdWJtZW51LnNsaWRlVXAoMzUwLCBcInN3aW5nXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0YWN0aXZlU3VibWVudS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIEVORCBPRiBIRUxQRVJTXG5cdHZhciBNYWluTWVudSA9ICQoXCIuaGVhZGVyX19uYXYgPiAubmF2XCIpLFxuXHRcdE1lbnVJdGVtc1dpdGhDaGlsZHJlbiA9IE1haW5NZW51LmZpbmQoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlblwiKSxcblx0XHRMaW5rc0ZvclN1Ym1lbnVzID0gTWVudUl0ZW1zV2l0aENoaWxkcmVuLmZpbmQoXCI+IGFcIiksXG5cdFx0QnV0dG9uSFRNTCA9XG5cdFx0JzxidXR0b24gY2xhc3M9XCJzdWItbWVudV9fdG9nZ2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PGltZyBzcmM9XCIvd3AtY29udGVudC90aGVtZXMvc3RhcnRlci10aGVtZS9wdWJsaWMvaW1hZ2VzL2ljb25zL2Ryb3Bkb3duLnN2Z1wiIGFsdD1cIlRvZ2dsZSBTdWIgTWVudVwiPjwvYnV0dG9uPicsXG5cdFx0U3VibWVudXMgPSBNZW51SXRlbXNXaXRoQ2hpbGRyZW4uY2hpbGRyZW4oXCIuc3ViLW1lbnVcIiksXG5cdFx0Q2hpbGRyZW5TdWJtZW51cyA9IFN1Ym1lbnVzLmZpbmQoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlbiAuc3ViLW1lbnVcIiksXG5cdFx0U3VibWVudUJ1dHRvbnMsXG5cdFx0Q2hpbGRyZW5TdWJtZW51QnV0dG9ucyxcblx0XHR3aW5kb3dXaWR0aDtcblxuXHRmdW5jdGlvbiBTZXR1cCgpIHtcblx0XHRDaGlsZHJlblN1Ym1lbnVzLmFkZENsYXNzKFwiY2hpbGRyZW5TdWJtZW51c1wiKTtcblx0XHRMaW5rc0ZvclN1Ym1lbnVzID0gTWVudUl0ZW1zV2l0aENoaWxkcmVuLmZpbmQoXCI+IGFcIik7XG5cdFx0aW5zZXJ0U3VibWVudVRvZ2dsZUJ1dHRvbnMoTGlua3NGb3JTdWJtZW51cywgQnV0dG9uSFRNTCk7XG5cdFx0U3VibWVudUJ1dHRvbnMgPSAkKFwiLnN1Yi1tZW51X190b2dnbGVcIik7XG5cdFx0Q2hpbGRyZW5TdWJtZW51QnV0dG9ucyA9IFN1Ym1lbnVzLmZpbmQoXCIuc3ViLW1lbnVfX3RvZ2dsZVwiKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHRvZ2dsZVN1Ym1lbnUoU3VibWVudSkge1xuXHRcdFN1Ym1lbnUuc2xpZGVUb2dnbGUoMzUwLCBcInN3aW5nXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dG9nZ2xlU3VibWVudVN0YXRlKFN1Ym1lbnUpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0V2luZG93V2lkdGgoKSB7XG5cdFx0d2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHdpbmRvd1dhdGNoZXIoKSB7XG5cdFx0JCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcblx0XHRcdHNldFdpbmRvd1dpZHRoKCk7XG5cdFx0XHRpZiAod2luZG93V2lkdGggPiAxMDM5ICYmIFN1Ym1lbnVzLmlzKFwiOmhpZGRlblwiKSkge1xuXHRcdFx0XHRTdWJtZW51cy5yZW1vdmVBdHRyKFwic3R5bGVcIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRzZXRXaW5kb3dXaWR0aCgpO1xuXHRTZXR1cCgpO1xuXHR3aW5kb3dXYXRjaGVyKCk7XG5cblx0TGlua3NGb3JTdWJtZW51cy5vbihcImZvY3VzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdBY3RpdmVTdWJtZW51ID0gJCh0aGlzKVxuXHRcdFx0LnBhcmVudHMoXCJsaVwiKVxuXHRcdFx0LmZpbmQoXCIuc3ViLW1lbnVcIik7XG5cdFx0bmV3QWN0aXZlU3VibWVudS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcblxuXHRcdG5ld0FjdGl2ZVN1Ym1lbnVcblx0XHRcdC5maW5kKFwiYVwiKVxuXHRcdFx0Lmxhc3QoKVxuXHRcdFx0Lm9uKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLmtleUNvZGUgPT0gOSkge1xuXHRcdFx0XHRcdG5ld0FjdGl2ZVN1Ym1lbnUucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9KTtcblxuXHRMaW5rc0ZvclN1Ym1lbnVzLm9uKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYgKGUua2V5Q29kZSA9PSA5ICYmIGUuc2hpZnRLZXkgPT0gdHJ1ZSkge1xuXHRcdFx0JChcIi5zdWItbWVudS5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG5cdFx0fVxuXHR9KTtcblxuXHRTdWJtZW51QnV0dG9ucy5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGNsaWNrRXZlbnQpIHtcblx0XHRjbGlja0V2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG5cblx0XHR2YXIgQ3VycmVudFN1Ym1lbnUgPSAkKHRoaXMpLm5leHQoXCIuc3ViLW1lbnVcIik7XG5cdFx0dmFyIGhhc09wZW5TdWJtZW51ID0gU3VibWVudXMuZmlsdGVyKFwiLmFjdGl2ZVwiKS5sZW5ndGggPj0gMSA/IHRydWUgOiBmYWxzZTtcblx0XHR2YXIgb3BlbmluZ05ld1N1Ym1lbnUgPSBDdXJyZW50U3VibWVudS5oYXNDbGFzcyhcImFjdGl2ZVwiKSA/IGZhbHNlIDogdHJ1ZTtcblx0XHR2YXIgaXNDaGlsZFN1Ym1lbnUgPSAkKHRoaXMpLnBhcmVudHMoXCIuYWN0aXZlXCIpLmxlbmd0aCA+IDE7XG5cdFx0dmFyIGhhc09wZW5DaGlsZFN1Ym1lbnUgPVxuXHRcdFx0Q2hpbGRyZW5TdWJtZW51cy5maWx0ZXIoXCIuYWN0aXZlXCIpLmxlbmd0aCA+PSAxID8gdHJ1ZSA6IGZhbHNlO1xuXG5cdFx0aWYgKGlzQ2hpbGRTdWJtZW51KSB7XG5cdFx0XHRpZiAoaGFzT3BlbkNoaWxkU3VibWVudSAmJiBvcGVuaW5nTmV3U3VibWVudSkge1xuXHRcdFx0XHRoYW5kbGVBY3RpdmVTdWJtZW51KENoaWxkcmVuU3VibWVudXMpO1xuXHRcdFx0fVxuXHRcdFx0dG9nZ2xlU3VibWVudShDdXJyZW50U3VibWVudSk7XG5cdFx0fVxuXG5cdFx0aWYgKGhhc09wZW5TdWJtZW51ICYmIG9wZW5pbmdOZXdTdWJtZW51ICYmICFpc0NoaWxkU3VibWVudSkge1xuXHRcdFx0aGFuZGxlQWN0aXZlU3VibWVudShTdWJtZW51cyk7XG5cdFx0fVxuXG5cdFx0aWYgKCFpc0NoaWxkU3VibWVudSkge1xuXHRcdFx0dG9nZ2xlU3VibWVudShDdXJyZW50U3VibWVudSk7XG5cdFx0fVxuXHR9KTtcbn0pKCk7XG5cbi8vIE9uIHJlc2l6ZSBvZiB3aW5kb3cgcmVtb3ZlIGFjdGl2ZSBjbGFzcyBmcm9tIGhlYWRlciBzdWIgbWVudXNcbiQod2luZG93KS5vbihcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcblx0dmFyIHdpbiA9ICQodGhpcyk7IC8vdGhpcyA9IHdpbmRvd1xuXHRpZiAod2luLndpZHRoKCkgPj0gNzY4KSB7XG5cdFx0JChcIi5zdWItbWVudVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblx0fVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL21haW4tbmF2aWdhdGlvbi5qcyIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IEJ1dHRvbkNvdW50ZXIgZnJvbSAnLi9CdXR0b25Db3VudGVyJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cbiAgLy8gR2xvYmFsIENvbXBvbmVudHNcbiAgVnVlLmNvbXBvbmVudCgnYnV0dG9uLWNvdW50ZXInLCBCdXR0b25Db3VudGVyKVxuXG5cbiAgY29uc3QgVmxoQXBwRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmxoLWFwcCcpO1xuXG4gIGlmIChWbGhBcHBFbCkge1xuICBcdHZhciB2bGhBcHAgPSBuZXcgVnVlKHtcbiAgXHRcdGVsOiBWbGhBcHBFbCxcbiAgXHRcdGRhdGE6IHtcbiAgXHRcdFx0bXNnOiAnQSBNZXNzYWdlIE5ldyA1JyxcbiAgXHRcdFx0c2hvd01vZGFsOiBmYWxzZVxuICBcdFx0fSxcbiAgXHRcdGNvbXBvbmVudHM6IHtcbiAgXHRcdFx0QXN5bmNDb21wb25lbnQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFzeW5jLWNvbXBvbmVudFwiICovICdAL3NjcmlwdHMvVmxoTGlicmFyeS9Bc3luY0NvbXBvbmVudC52dWUnKSxcbiAgXHQgICAgTW9kYWw6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1vZGFsXCIgKi8gJ0Avc2NyaXB0cy9WbGhMaWJyYXJ5L01vZGFsLnZ1ZScpXG4gIFx0ICB9XG4gIFx0fSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9pbmRleC5qcyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0J1dHRvbkNvdW50ZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wZmQ3NWI3OFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0J1dHRvbkNvdW50ZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9zY3JpcHRzL1ZsaExpYnJhcnkvQnV0dG9uQ291bnRlci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMGZkNzViNzhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wZmQ3NWI3OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9CdXR0b25Db3VudGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiPHRlbXBsYXRlIGxhbmc9XCJodG1sXCI+XG4gIDxidXR0b24gdi1vbjpjbGljaz1cImNvdW50KytcIj5Zb3UgY2xpY2tlZCBtZSB7eyBjb3VudCB9fSB0aW1lcy48L2J1dHRvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdCdXR0b25Db3VudGVyJyxcbiAgZGF0YTogKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBjb3VudDogMFxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9CdXR0b25Db3VudGVyLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJidXR0b25cIixcbiAgICB7XG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmNvdW50KytcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW192bS5fdihcIllvdSBjbGlja2VkIG1lIFwiICsgX3ZtLl9zKF92bS5jb3VudCkgKyBcIiB0aW1lcy5cIildXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMGZkNzViNzhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTBmZDc1Yjc4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9CdXR0b25Db3VudGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvY3JpdGljYWwtaG9tZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9sYXVuY2gtbHAtc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvbHAtc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gNiJdLCJzb3VyY2VSb290IjoiIn0=