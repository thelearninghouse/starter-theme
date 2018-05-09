webpackJsonp([7],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/scripts/VlhLibrary/ButtonCounter.vue":
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

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0fd75b78\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/scripts/VlhLibrary/ButtonCounter.vue":
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

/***/ "./src/scripts/VlhLibrary/ButtonCounter.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/scripts/VlhLibrary/ButtonCounter.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0fd75b78\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/scripts/VlhLibrary/ButtonCounter.vue")
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

/***/ "./src/scripts/VlhLibrary/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ButtonCounter__ = __webpack_require__("./src/scripts/VlhLibrary/ButtonCounter.vue");
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
          return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "./src/scripts/VlhLibrary/AsyncComponent.vue"));
        },
        Modal: function Modal() {
          return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "./src/scripts/VlhLibrary/Modal.vue"));
        }
      }
    });
  }
});

/***/ }),

/***/ "./src/scripts/components/main-navigation.js":
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

/***/ "./src/scripts/examples.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_examples_example_import1__ = __webpack_require__("./src/scripts/examples/example-import1.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_examples_example_import2__ = __webpack_require__("./src/scripts/examples/example-import2.js");



function examples() {
  Object(__WEBPACK_IMPORTED_MODULE_1__scripts_examples_example_import2__["a" /* exampleFunction */])();
  Object(__WEBPACK_IMPORTED_MODULE_0__scripts_examples_example_import1__["a" /* default */])();
  console.log(__WEBPACK_IMPORTED_MODULE_1__scripts_examples_example_import2__["b" /* exampleVariable */]);
}

/* harmony default export */ __webpack_exports__["default"] = (examples);

/***/ }),

/***/ "./src/scripts/examples/example-import1.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function initExampleImport() {
	$(document).ready(function () {
		console.log("I am the initExampleImport!");
	});
}

/* harmony default export */ __webpack_exports__["a"] = (initExampleImport);

/*
We will import this into another file with the following:

import initExampleImport from '@/scripts/examples/example-import1'

 */

/***/ }),

/***/ "./src/scripts/examples/example-import2.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return exampleVariable; });
/* harmony export (immutable) */ __webpack_exports__["a"] = exampleFunction;
var exampleVariable = 'I am exampleVariable';

function exampleFunction() {
  console.log("FROM: Example Import 2 - exampleFunction!");
}

/*
We will import this into another file with the following:

import { exampleVariable, exampleFunction } from '@/scripts/examples/example-import2'

 */

/***/ }),

/***/ "./src/scripts/helpers/utilities.js":
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

/***/ "./src/scripts/scripts.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_themeConfig__ = __webpack_require__("./theme.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_themeConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_themeConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_examples__ = __webpack_require__("./src/scripts/examples.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_helpers_utilities__ = __webpack_require__("./src/scripts/helpers/utilities.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_helpers_utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scripts_helpers_utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_components_main_navigation__ = __webpack_require__("./src/scripts/components/main-navigation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_components_main_navigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__scripts_components_main_navigation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_VlhLibrary__ = __webpack_require__("./src/scripts/VlhLibrary/index.js");
// Enable HMR
if (false) {
	module.hot.accept();
}

/* Get Theme Config File
*****************************/


/* ES6 import/export examples
*****************************/

Object(__WEBPACK_IMPORTED_MODULE_1__scripts_examples__["default"])();

/* Regular Imports - Include accross all pages
*****************************/



/* Importing Vue Components
*****************************/


if (__WEBPACK_IMPORTED_MODULE_0_themeConfig___default.a.useVue) {
	Object(__WEBPACK_IMPORTED_MODULE_4__scripts_VlhLibrary__["a" /* default */])();
}

/* Dynamic Imports - Loading based on conditions
*****************************/
function handleAccordions() {
	if (document.querySelector(__WEBPACK_IMPORTED_MODULE_0_themeConfig___default.a.selectors.accordion) !== null) {
		return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, "./src/scripts/components/accordion.js"));
	}
}

function handleDegreeFiltering() {
	if (document.querySelector(__WEBPACK_IMPORTED_MODULE_0_themeConfig___default.a.selectors.mixItUp) !== null) {
		return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, "./src/scripts/components/degree-filtering.js"));
	}
}

function handleSocialShare() {
	if (document.querySelector(__WEBPACK_IMPORTED_MODULE_0_themeConfig___default.a.selectors.socialShare) !== null) {
		return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, "./src/scripts/components/social-share-buttons.js"));
	}
}

function handleStickyElements() {
	if (document.querySelector(__WEBPACK_IMPORTED_MODULE_0_themeConfig___default.a.selectors.sticky) !== null) {
		return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, "./src/scripts/components/sticky.js"));
	}
}

function handleSlider() {
	if (document.querySelector(__WEBPACK_IMPORTED_MODULE_0_themeConfig___default.a.selectors.slider) !== null) {
		return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, "./src/scripts/components/slider.js"));
	}
}

/* Calling Dynamic Import Functions
*****************************/
handleAccordions();
handleDegreeFiltering();
handleSocialShare();
handleStickyElements();
handleSlider();

/***/ }),

/***/ "./theme.config.js":
/***/ (function(module, exports) {

module.exports = {
	directoryName: "starter-theme",
	selectors: {
		accordion: ".accordion",
		mixItUp: ".mixitup",
		socialShare: ".social-link",
		sticky: ".sticky",
		slider: '.glide'
	},
	useVue: true,
	purgecssWhitelist: ["requestinfo", "menu-main-menu", "current_page_item", "fieldset", "legend", "elp_submit", "formError"],
	purgecssWhitelistPatterns: []
};

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/scripts/scripts.js");


/***/ })

},[1]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9CdXR0b25Db3VudGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9CdXR0b25Db3VudGVyLnZ1ZT9hY2NlIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL1ZsaExpYnJhcnkvQnV0dG9uQ291bnRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL21haW4tbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9leGFtcGxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9leGFtcGxlcy9leGFtcGxlLWltcG9ydDEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZXhhbXBsZXMvZXhhbXBsZS1pbXBvcnQyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hlbHBlcnMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWUuY29uZmlnLmpzIl0sIm5hbWVzIjpbIlZ1ZSIsImNvbXBvbmVudCIsIlZsaEFwcEVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZsaEFwcCIsImVsIiwiZGF0YSIsIm1zZyIsInNob3dNb2RhbCIsImNvbXBvbmVudHMiLCJBc3luY0NvbXBvbmVudCIsIk1vZGFsIiwiJCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCJpbnNlcnRTdWJtZW51VG9nZ2xlQnV0dG9ucyIsInN1Ym1lbnVMaW5rcyIsInN1Ym1lbnVCdXR0b25zSFRNTCIsImFmdGVyIiwidG9nZ2xlU3VibWVudVN0YXRlIiwiQ3VycmVudFN1Ym1lbnUiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJoYW5kbGVBY3RpdmVTdWJtZW51IiwiUmVsZXZhbnRTdWJtZW51cyIsImFjdGl2ZVN1Ym1lbnUiLCJmaWx0ZXIiLCJhY3RpdmVTdWJtZW51QnV0dG9uIiwicHJldiIsInNsaWRlVXAiLCJNYWluTWVudSIsIk1lbnVJdGVtc1dpdGhDaGlsZHJlbiIsImZpbmQiLCJMaW5rc0ZvclN1Ym1lbnVzIiwiQnV0dG9uSFRNTCIsIlN1Ym1lbnVzIiwiY2hpbGRyZW4iLCJDaGlsZHJlblN1Ym1lbnVzIiwiU3VibWVudUJ1dHRvbnMiLCJDaGlsZHJlblN1Ym1lbnVCdXR0b25zIiwid2luZG93V2lkdGgiLCJTZXR1cCIsInRvZ2dsZVN1Ym1lbnUiLCJTdWJtZW51Iiwic2xpZGVUb2dnbGUiLCJzZXRXaW5kb3dXaWR0aCIsIndpbmRvdyIsIndpZHRoIiwid2luZG93V2F0Y2hlciIsInJlc2l6ZSIsImlzIiwicmVtb3ZlQXR0ciIsIm5ld0FjdGl2ZVN1Ym1lbnUiLCJwYXJlbnRzIiwibGFzdCIsImtleUNvZGUiLCJzaGlmdEtleSIsImNsaWNrRXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJuZXh0IiwiaGFzT3BlblN1Ym1lbnUiLCJsZW5ndGgiLCJvcGVuaW5nTmV3U3VibWVudSIsImlzQ2hpbGRTdWJtZW51IiwiaGFzT3BlbkNoaWxkU3VibWVudSIsIndpbiIsImV4YW1wbGVzIiwiZXhhbXBsZUZ1bmN0aW9uIiwiaW5pdEV4YW1wbGVJbXBvcnQiLCJjb25zb2xlIiwibG9nIiwicmVhZHkiLCJleGFtcGxlVmFyaWFibGUiLCJhZGRFdmVudExpc3RlbmVyIiwiRm9ybVNlbGVjdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VsZWN0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwiQ29uZmlnIiwidXNlVnVlIiwiaW5pdGlhbGl6ZVZsaExpYnJhcnkiLCJoYW5kbGVBY2NvcmRpb25zIiwicXVlcnlTZWxlY3RvciIsInNlbGVjdG9ycyIsImFjY29yZGlvbiIsImhhbmRsZURlZ3JlZUZpbHRlcmluZyIsIm1peEl0VXAiLCJoYW5kbGVTb2NpYWxTaGFyZSIsInNvY2lhbFNoYXJlIiwiaGFuZGxlU3RpY2t5RWxlbWVudHMiLCJzdGlja3kiLCJoYW5kbGVTbGlkZXIiLCJzbGlkZXIiLCJleHBvcnRzIiwiZGlyZWN0b3J5TmFtZSIsInB1cmdlY3NzV2hpdGVsaXN0IiwicHVyZ2Vjc3NXaGl0ZWxpc3RQYXR0ZXJucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBS0E7UUFFQTt3QkFDQTs7YUFHQTtBQUZBO0FBR0E7QUFOQSxHOzs7Ozs7O0FDTkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNB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QUFDQUU7QUFDQUUsZTs7Ozs7OztBQ3JFQWhCLE9BQU9rQixPQUFQLEdBQWlCO0FBQ2hCQyxnQkFBZSxlQURDO0FBRWhCWCxZQUFXO0FBQ1ZDLGFBQVcsWUFERDtBQUVWRSxXQUFTLFVBRkM7QUFHVkUsZUFBYSxjQUhIO0FBSVZFLFVBQVEsU0FKRTtBQUtWRSxVQUFRO0FBTEUsRUFGSztBQVNoQmIsU0FBUSxJQVRRO0FBVWhCZ0Isb0JBQW1CLENBQ2xCLGFBRGtCLEVBRWxCLGdCQUZrQixFQUdsQixtQkFIa0IsRUFJbEIsVUFKa0IsRUFLbEIsUUFMa0IsRUFNbEIsWUFOa0IsRUFPbEIsV0FQa0IsQ0FWSDtBQW1CaEJDLDRCQUEyQjtBQW5CWCxDQUFqQixDIiwiZmlsZSI6Ii9qcy9zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIGxhbmc9XCJodG1sXCI+XG4gIDxidXR0b24gdi1vbjpjbGljaz1cImNvdW50KytcIj5Zb3UgY2xpY2tlZCBtZSB7eyBjb3VudCB9fSB0aW1lcy48L2J1dHRvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdCdXR0b25Db3VudGVyJyxcbiAgZGF0YTogKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBjb3VudDogMFxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9CdXR0b25Db3VudGVyLnZ1ZSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqL1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgdmFyIGZ1bmN0aW9uYWwgPSBvcHRpb25zLmZ1bmN0aW9uYWxcbiAgICB2YXIgZXhpc3RpbmcgPSBmdW5jdGlvbmFsXG4gICAgICA/IG9wdGlvbnMucmVuZGVyXG4gICAgICA6IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG5cbiAgICBpZiAoIWZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gZXhpc3RpbmcoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJidXR0b25cIixcbiAgICB7XG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmNvdW50KytcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW192bS5fdihcIllvdSBjbGlja2VkIG1lIFwiICsgX3ZtLl9zKF92bS5jb3VudCkgKyBcIiB0aW1lcy5cIildXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMGZkNzViNzhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTBmZDc1Yjc4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9CdXR0b25Db3VudGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0wZmQ3NWI3OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9zY3JpcHRzL1ZsaExpYnJhcnkvQnV0dG9uQ291bnRlci52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQnV0dG9uQ291bnRlci52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTBmZDc1Yjc4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQnV0dG9uQ291bnRlci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3NjcmlwdHMvVmxoTGlicmFyeS9CdXR0b25Db3VudGVyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wZmQ3NWI3OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTBmZDc1Yjc4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2NyaXB0cy9WbGhMaWJyYXJ5L0J1dHRvbkNvdW50ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9zY3JpcHRzL1ZsaExpYnJhcnkvQnV0dG9uQ291bnRlci52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgQnV0dG9uQ291bnRlciBmcm9tICcuL0J1dHRvbkNvdW50ZXInXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblxuICAvLyBHbG9iYWwgQ29tcG9uZW50c1xuICBWdWUuY29tcG9uZW50KCdidXR0b24tY291bnRlcicsIEJ1dHRvbkNvdW50ZXIpXG5cblxuICBjb25zdCBWbGhBcHBFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2bGgtYXBwJyk7XG5cbiAgaWYgKFZsaEFwcEVsKSB7XG4gIFx0dmFyIHZsaEFwcCA9IG5ldyBWdWUoe1xuICBcdFx0ZWw6IFZsaEFwcEVsLFxuICBcdFx0ZGF0YToge1xuICBcdFx0XHRtc2c6ICdBIE1lc3NhZ2UgTmV3IDUnLFxuICBcdFx0XHRzaG93TW9kYWw6IGZhbHNlXG4gIFx0XHR9LFxuICBcdFx0Y29tcG9uZW50czoge1xuICBcdFx0XHRBc3luY0NvbXBvbmVudDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYXN5bmMtY29tcG9uZW50XCIgKi8gJ0Avc2NyaXB0cy9WbGhMaWJyYXJ5L0FzeW5jQ29tcG9uZW50LnZ1ZScpLFxuICBcdCAgICBNb2RhbDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibW9kYWxcIiAqLyAnQC9zY3JpcHRzL1ZsaExpYnJhcnkvTW9kYWwudnVlJylcbiAgXHQgIH1cbiAgXHR9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9WbGhMaWJyYXJ5L2luZGV4LmpzIiwiJChcIi5qc19fbWVudS10cmlnZ2VyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdCQoXCIubmF2LXdyYXBwZXJcIikudG9nZ2xlQ2xhc3MoXCJ2aXNpYmxlXCIpO1xufSk7XG5cbi8vIE1PQklMRSBNRU5VIFNVQk1FTlUgRklYXG4oZnVuY3Rpb24oKSB7XG5cdC8vIEhFTFBFUlNcblx0ZnVuY3Rpb24gaW5zZXJ0U3VibWVudVRvZ2dsZUJ1dHRvbnMoc3VibWVudUxpbmtzLCBzdWJtZW51QnV0dG9uc0hUTUwpIHtcblx0XHRzdWJtZW51TGlua3MuYWZ0ZXIoc3VibWVudUJ1dHRvbnNIVE1MKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHRvZ2dsZVN1Ym1lbnVTdGF0ZShDdXJyZW50U3VibWVudSkge1xuXHRcdGlmIChDdXJyZW50U3VibWVudS5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xuXHRcdFx0Q3VycmVudFN1Ym1lbnUucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdEN1cnJlbnRTdWJtZW51LmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZUFjdGl2ZVN1Ym1lbnUoUmVsZXZhbnRTdWJtZW51cykge1xuXHRcdHZhciBhY3RpdmVTdWJtZW51ID0gUmVsZXZhbnRTdWJtZW51cy5maWx0ZXIoXCIuYWN0aXZlXCIpO1xuXHRcdHZhciBhY3RpdmVTdWJtZW51QnV0dG9uID0gYWN0aXZlU3VibWVudS5wcmV2KFwiYnV0dG9uLmFjdGl2ZVwiKTtcblxuXHRcdGFjdGl2ZVN1Ym1lbnVCdXR0b24ucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG5cdFx0YWN0aXZlU3VibWVudS5zbGlkZVVwKDM1MCwgXCJzd2luZ1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdGFjdGl2ZVN1Ym1lbnUucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBFTkQgT0YgSEVMUEVSU1xuXHR2YXIgTWFpbk1lbnUgPSAkKFwiLmhlYWRlcl9fbmF2ID4gLm5hdlwiKSxcblx0XHRNZW51SXRlbXNXaXRoQ2hpbGRyZW4gPSBNYWluTWVudS5maW5kKFwiLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIiksXG5cdFx0TGlua3NGb3JTdWJtZW51cyA9IE1lbnVJdGVtc1dpdGhDaGlsZHJlbi5maW5kKFwiPiBhXCIpLFxuXHRcdEJ1dHRvbkhUTUwgPVxuXHRcdCc8YnV0dG9uIGNsYXNzPVwic3ViLW1lbnVfX3RvZ2dsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxpbWcgc3JjPVwiL3dwLWNvbnRlbnQvdGhlbWVzL3N0YXJ0ZXItdGhlbWUvcHVibGljL2ltYWdlcy9pY29ucy9kcm9wZG93bi5zdmdcIiBhbHQ9XCJUb2dnbGUgU3ViIE1lbnVcIj48L2J1dHRvbj4nLFxuXHRcdFN1Ym1lbnVzID0gTWVudUl0ZW1zV2l0aENoaWxkcmVuLmNoaWxkcmVuKFwiLnN1Yi1tZW51XCIpLFxuXHRcdENoaWxkcmVuU3VibWVudXMgPSBTdWJtZW51cy5maW5kKFwiLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gLnN1Yi1tZW51XCIpLFxuXHRcdFN1Ym1lbnVCdXR0b25zLFxuXHRcdENoaWxkcmVuU3VibWVudUJ1dHRvbnMsXG5cdFx0d2luZG93V2lkdGg7XG5cblx0ZnVuY3Rpb24gU2V0dXAoKSB7XG5cdFx0Q2hpbGRyZW5TdWJtZW51cy5hZGRDbGFzcyhcImNoaWxkcmVuU3VibWVudXNcIik7XG5cdFx0TGlua3NGb3JTdWJtZW51cyA9IE1lbnVJdGVtc1dpdGhDaGlsZHJlbi5maW5kKFwiPiBhXCIpO1xuXHRcdGluc2VydFN1Ym1lbnVUb2dnbGVCdXR0b25zKExpbmtzRm9yU3VibWVudXMsIEJ1dHRvbkhUTUwpO1xuXHRcdFN1Ym1lbnVCdXR0b25zID0gJChcIi5zdWItbWVudV9fdG9nZ2xlXCIpO1xuXHRcdENoaWxkcmVuU3VibWVudUJ1dHRvbnMgPSBTdWJtZW51cy5maW5kKFwiLnN1Yi1tZW51X190b2dnbGVcIik7XG5cdH1cblxuXHRmdW5jdGlvbiB0b2dnbGVTdWJtZW51KFN1Ym1lbnUpIHtcblx0XHRTdWJtZW51LnNsaWRlVG9nZ2xlKDM1MCwgXCJzd2luZ1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHRvZ2dsZVN1Ym1lbnVTdGF0ZShTdWJtZW51KTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNldFdpbmRvd1dpZHRoKCkge1xuXHRcdHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cdH1cblxuXHRmdW5jdGlvbiB3aW5kb3dXYXRjaGVyKCkge1xuXHRcdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG5cdFx0XHRzZXRXaW5kb3dXaWR0aCgpO1xuXHRcdFx0aWYgKHdpbmRvd1dpZHRoID4gMTAzOSAmJiBTdWJtZW51cy5pcyhcIjpoaWRkZW5cIikpIHtcblx0XHRcdFx0U3VibWVudXMucmVtb3ZlQXR0cihcInN0eWxlXCIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0c2V0V2luZG93V2lkdGgoKTtcblx0U2V0dXAoKTtcblx0d2luZG93V2F0Y2hlcigpO1xuXG5cdExpbmtzRm9yU3VibWVudXMub24oXCJmb2N1c1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3QWN0aXZlU3VibWVudSA9ICQodGhpcylcblx0XHRcdC5wYXJlbnRzKFwibGlcIilcblx0XHRcdC5maW5kKFwiLnN1Yi1tZW51XCIpO1xuXHRcdG5ld0FjdGl2ZVN1Ym1lbnUuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cblx0XHRuZXdBY3RpdmVTdWJtZW51XG5cdFx0XHQuZmluZChcImFcIilcblx0XHRcdC5sYXN0KClcblx0XHRcdC5vbihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5rZXlDb2RlID09IDkpIHtcblx0XHRcdFx0XHRuZXdBY3RpdmVTdWJtZW51LnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fSk7XG5cblx0TGlua3NGb3JTdWJtZW51cy5vbihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xuXHRcdGlmIChlLmtleUNvZGUgPT0gOSAmJiBlLnNoaWZ0S2V5ID09IHRydWUpIHtcblx0XHRcdCQoXCIuc3ViLW1lbnUuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXHRcdH1cblx0fSk7XG5cblx0U3VibWVudUJ1dHRvbnMub24oXCJjbGlja1wiLCBmdW5jdGlvbihjbGlja0V2ZW50KSB7XG5cdFx0Y2xpY2tFdmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuXG5cdFx0dmFyIEN1cnJlbnRTdWJtZW51ID0gJCh0aGlzKS5uZXh0KFwiLnN1Yi1tZW51XCIpO1xuXHRcdHZhciBoYXNPcGVuU3VibWVudSA9IFN1Ym1lbnVzLmZpbHRlcihcIi5hY3RpdmVcIikubGVuZ3RoID49IDEgPyB0cnVlIDogZmFsc2U7XG5cdFx0dmFyIG9wZW5pbmdOZXdTdWJtZW51ID0gQ3VycmVudFN1Ym1lbnUuaGFzQ2xhc3MoXCJhY3RpdmVcIikgPyBmYWxzZSA6IHRydWU7XG5cdFx0dmFyIGlzQ2hpbGRTdWJtZW51ID0gJCh0aGlzKS5wYXJlbnRzKFwiLmFjdGl2ZVwiKS5sZW5ndGggPiAxO1xuXHRcdHZhciBoYXNPcGVuQ2hpbGRTdWJtZW51ID1cblx0XHRcdENoaWxkcmVuU3VibWVudXMuZmlsdGVyKFwiLmFjdGl2ZVwiKS5sZW5ndGggPj0gMSA/IHRydWUgOiBmYWxzZTtcblxuXHRcdGlmIChpc0NoaWxkU3VibWVudSkge1xuXHRcdFx0aWYgKGhhc09wZW5DaGlsZFN1Ym1lbnUgJiYgb3BlbmluZ05ld1N1Ym1lbnUpIHtcblx0XHRcdFx0aGFuZGxlQWN0aXZlU3VibWVudShDaGlsZHJlblN1Ym1lbnVzKTtcblx0XHRcdH1cblx0XHRcdHRvZ2dsZVN1Ym1lbnUoQ3VycmVudFN1Ym1lbnUpO1xuXHRcdH1cblxuXHRcdGlmIChoYXNPcGVuU3VibWVudSAmJiBvcGVuaW5nTmV3U3VibWVudSAmJiAhaXNDaGlsZFN1Ym1lbnUpIHtcblx0XHRcdGhhbmRsZUFjdGl2ZVN1Ym1lbnUoU3VibWVudXMpO1xuXHRcdH1cblxuXHRcdGlmICghaXNDaGlsZFN1Ym1lbnUpIHtcblx0XHRcdHRvZ2dsZVN1Ym1lbnUoQ3VycmVudFN1Ym1lbnUpO1xuXHRcdH1cblx0fSk7XG59KSgpO1xuXG4vLyBPbiByZXNpemUgb2Ygd2luZG93IHJlbW92ZSBhY3RpdmUgY2xhc3MgZnJvbSBoZWFkZXIgc3ViIG1lbnVzXG4kKHdpbmRvdykub24oXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XG5cdHZhciB3aW4gPSAkKHRoaXMpOyAvL3RoaXMgPSB3aW5kb3dcblx0aWYgKHdpbi53aWR0aCgpID49IDc2OCkge1xuXHRcdCQoXCIuc3ViLW1lbnVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG5cdH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9tYWluLW5hdmlnYXRpb24uanMiLCJpbXBvcnQgaW5pdEV4YW1wbGVJbXBvcnQgZnJvbSAnQC9zY3JpcHRzL2V4YW1wbGVzL2V4YW1wbGUtaW1wb3J0MSc7XG5pbXBvcnQgeyBleGFtcGxlVmFyaWFibGUsIGV4YW1wbGVGdW5jdGlvbiB9IGZyb20gJ0Avc2NyaXB0cy9leGFtcGxlcy9leGFtcGxlLWltcG9ydDInO1xuXG5mdW5jdGlvbiBleGFtcGxlcygpIHtcbiAgZXhhbXBsZUZ1bmN0aW9uKCk7XG4gIGluaXRFeGFtcGxlSW1wb3J0KCk7XG4gIGNvbnNvbGUubG9nKGV4YW1wbGVWYXJpYWJsZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4YW1wbGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvZXhhbXBsZXMuanMiLCJmdW5jdGlvbiBpbml0RXhhbXBsZUltcG9ydCgpIHtcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coXCJJIGFtIHRoZSBpbml0RXhhbXBsZUltcG9ydCFcIik7XG5cdH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0RXhhbXBsZUltcG9ydDtcblxuXG4vKlxuV2Ugd2lsbCBpbXBvcnQgdGhpcyBpbnRvIGFub3RoZXIgZmlsZSB3aXRoIHRoZSBmb2xsb3dpbmc6XG5cbmltcG9ydCBpbml0RXhhbXBsZUltcG9ydCBmcm9tICdAL3NjcmlwdHMvZXhhbXBsZXMvZXhhbXBsZS1pbXBvcnQxJ1xuXG4gKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL2V4YW1wbGVzL2V4YW1wbGUtaW1wb3J0MS5qcyIsImV4cG9ydCBjb25zdCBleGFtcGxlVmFyaWFibGUgPSAnSSBhbSBleGFtcGxlVmFyaWFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZXhhbXBsZUZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZyggXCJGUk9NOiBFeGFtcGxlIEltcG9ydCAyIC0gZXhhbXBsZUZ1bmN0aW9uIVwiICk7XG59XG5cblxuLypcbldlIHdpbGwgaW1wb3J0IHRoaXMgaW50byBhbm90aGVyIGZpbGUgd2l0aCB0aGUgZm9sbG93aW5nOlxuXG5pbXBvcnQgeyBleGFtcGxlVmFyaWFibGUsIGV4YW1wbGVGdW5jdGlvbiB9IGZyb20gJ0Avc2NyaXB0cy9leGFtcGxlcy9leGFtcGxlLWltcG9ydDInXG5cbiAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvZXhhbXBsZXMvZXhhbXBsZS1pbXBvcnQyLmpzIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG5cdGNvbnN0IEZvcm1TZWxlY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlcXVlc3RpbmZvIHNlbGVjdCcpXG5cdGZvciAodmFyIHNlbGVjdCBvZiBGb3JtU2VsZWN0cykge1xuXHRcdHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpXG5cdH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvaGVscGVycy91dGlsaXRpZXMuanMiLCIvLyBFbmFibGUgSE1SXG5pZiAobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdCgpO1xufVxuXG4vKiBHZXQgVGhlbWUgQ29uZmlnIEZpbGVcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuaW1wb3J0IENvbmZpZyBmcm9tIFwidGhlbWVDb25maWdcIjtcblxuXG4vKiBFUzYgaW1wb3J0L2V4cG9ydCBleGFtcGxlc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgZXhhbXBsZXMgZnJvbSBcIkAvc2NyaXB0cy9leGFtcGxlc1wiO1xuZXhhbXBsZXMoKTtcblxuXG4vKiBSZWd1bGFyIEltcG9ydHMgLSBJbmNsdWRlIGFjY3Jvc3MgYWxsIHBhZ2VzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmltcG9ydCBcIkAvc2NyaXB0cy9oZWxwZXJzL3V0aWxpdGllc1wiO1xuaW1wb3J0IFwiQC9zY3JpcHRzL2NvbXBvbmVudHMvbWFpbi1uYXZpZ2F0aW9uXCI7XG5cblxuLyogSW1wb3J0aW5nIFZ1ZSBDb21wb25lbnRzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmltcG9ydCBpbml0aWFsaXplVmxoTGlicmFyeSBmcm9tIFwiQC9zY3JpcHRzL1ZsaExpYnJhcnlcIjtcblxuaWYgKENvbmZpZy51c2VWdWUpIHtcblx0aW5pdGlhbGl6ZVZsaExpYnJhcnkoKTtcbn1cblxuXG4vKiBEeW5hbWljIEltcG9ydHMgLSBMb2FkaW5nIGJhc2VkIG9uIGNvbmRpdGlvbnNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gaGFuZGxlQWNjb3JkaW9ucygpIHtcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoQ29uZmlnLnNlbGVjdG9ycy5hY2NvcmRpb24pICE9PSBudWxsKSB7XG5cdFx0cmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFjY29yZGlvblwiICovIFwiQC9zY3JpcHRzL2NvbXBvbmVudHMvYWNjb3JkaW9uXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURlZ3JlZUZpbHRlcmluZygpIHtcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoQ29uZmlnLnNlbGVjdG9ycy5taXhJdFVwKSAhPT0gbnVsbCkge1xuXHRcdHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJkZWdyZWUtZmlsdGVyaW5nXCIgKi8gXCJAL3NjcmlwdHMvY29tcG9uZW50cy9kZWdyZWUtZmlsdGVyaW5nXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNvY2lhbFNoYXJlKCkge1xuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDb25maWcuc2VsZWN0b3JzLnNvY2lhbFNoYXJlKSAhPT0gbnVsbCkge1xuXHRcdHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJzb2NpYWwtc2hhcmVcIiAqLyBcIkAvc2NyaXB0cy9jb21wb25lbnRzL3NvY2lhbC1zaGFyZS1idXR0b25zXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVN0aWNreUVsZW1lbnRzKCkge1xuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDb25maWcuc2VsZWN0b3JzLnN0aWNreSkgIT09IG51bGwpIHtcblx0XHRyZXR1cm4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwic3RpY2t5XCIgKi8gXCJAL3NjcmlwdHMvY29tcG9uZW50cy9zdGlja3lcIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlU2xpZGVyKCkge1xuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDb25maWcuc2VsZWN0b3JzLnNsaWRlcikgIT09IG51bGwpIHtcblx0XHRyZXR1cm4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwic2xpZGVyXCIgKi8gXCJAL3NjcmlwdHMvY29tcG9uZW50cy9zbGlkZXJcIik7XG5cdH1cbn1cblxuLyogQ2FsbGluZyBEeW5hbWljIEltcG9ydCBGdW5jdGlvbnNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuaGFuZGxlQWNjb3JkaW9ucygpO1xuaGFuZGxlRGVncmVlRmlsdGVyaW5nKCk7XG5oYW5kbGVTb2NpYWxTaGFyZSgpO1xuaGFuZGxlU3RpY2t5RWxlbWVudHMoKTtcbmhhbmRsZVNsaWRlcigpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvc2NyaXB0cy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRkaXJlY3RvcnlOYW1lOiBcInN0YXJ0ZXItdGhlbWVcIixcblx0c2VsZWN0b3JzOiB7XG5cdFx0YWNjb3JkaW9uOiBcIi5hY2NvcmRpb25cIixcblx0XHRtaXhJdFVwOiBcIi5taXhpdHVwXCIsXG5cdFx0c29jaWFsU2hhcmU6IFwiLnNvY2lhbC1saW5rXCIsXG5cdFx0c3RpY2t5OiBcIi5zdGlja3lcIixcblx0XHRzbGlkZXI6ICcuZ2xpZGUnXG5cdH0sXG5cdHVzZVZ1ZTogdHJ1ZSxcblx0cHVyZ2Vjc3NXaGl0ZWxpc3Q6IFtcblx0XHRcInJlcXVlc3RpbmZvXCIsXG5cdFx0XCJtZW51LW1haW4tbWVudVwiLFxuXHRcdFwiY3VycmVudF9wYWdlX2l0ZW1cIixcblx0XHRcImZpZWxkc2V0XCIsXG5cdFx0XCJsZWdlbmRcIixcblx0XHRcImVscF9zdWJtaXRcIixcblx0XHRcImZvcm1FcnJvclwiXG5cdF0sXG5cdHB1cmdlY3NzV2hpdGVsaXN0UGF0dGVybnM6IFtdXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGhlbWUuY29uZmlnLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==