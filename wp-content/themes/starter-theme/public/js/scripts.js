webpackJsonp([4],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
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
__webpack_require__(33);
__webpack_require__(34);
__webpack_require__(35);
module.exports = __webpack_require__(36);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_helpers_utilities__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_helpers_utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scripts_helpers_utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_components_main_navigation__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_components_main_navigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scripts_components_main_navigation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_components_social_share_buttons__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_components_social_share_buttons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scripts_components_social_share_buttons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_VlhLibrary__ = __webpack_require__(9);
/* Regular Imports
*****************************/




Object(__WEBPACK_IMPORTED_MODULE_3__scripts_VlhLibrary__["a" /* default */])();

/* Dynamic Imports - Loading based on conditions
*****************************/
function handleAccordions() {
	if (document.querySelector(".accordion") !== null) {
		return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 41)).then(function (initializeAccordions) {
			initializeAccordions.default();
		});
	}
}

function handleDegreeFiltering() {
	if (document.querySelector(".mixitup") !== null) {
		return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 42)).then(function (degreeFiltering) {
			console.log(degreeFiltering);
			// Do Nothing For Now
		});
	}
}

/* Calling Dynamic Import Functions
*****************************/
handleAccordions();
handleDegreeFiltering();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

jQuery(document).ready(function ($) {
	// Remove Select menu error classs on load
	$(window).load(function () {
		$(".requestinfo select").removeClass("error");
	});
}); /* end of as page load scripts */

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
/***/ (function(module, exports) {

// Making social share links pop up in new window
function windowPopup(url, width, height) {
	// Calculate the position of the popup so it’s centered on the screen.
	var left = screen.width / 2 - width / 2,
	    top = screen.height / 2 - height / 2;

	window.open(url, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left);
}

$(".social-link").on("click", function (e) {
	e.preventDefault();

	windowPopup($(this).attr("href"), 500, 300);
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ButtonCounter__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ButtonCounter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ButtonCounter__);


/* harmony default export */ __webpack_exports__["a"] = (function () {
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
          return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 38));
        },
        Modal: function Modal() {
          return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 39));
        }
      }
    });
  }
});

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(14)
/* template */
var __vue_template__ = __webpack_require__(32)
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_posthtml__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_posthtml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_posthtml__);
//
//
//
//
//
//



var html = '\n  <component>\n    <h2>Super Title</h2>\n    <p>Awesome Text</p>\n    <div class="php"><?php echo \'TEST1\'; ?></div>\n  </component>\n';

var result = __WEBPACK_IMPORTED_MODULE_0_posthtml___default()().use(__webpack_require__(31)()).process(html, {
  // sync: true,
  directives: [{ name: '?php', start: '<', end: '>' }]
}).then(function (result) {
  return console.log(result.html);
});
// result.html
console.log(result);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ButtonCounter',
  data: function data() {
    return {
      count: 0,
      content: result
    };
  }
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var objectAssign = __webpack_require__(2)

var pkg = __webpack_require__(16)
var Api = __webpack_require__(17)

var parser = __webpack_require__(18)
var render = __webpack_require__(30)

/**
 * @author Ivan Voischev (@voischev),
 *         Anton Winogradov (@awinogradov),
 *         Alexej Yaroshevich (@zxqfox),
 *         Vasiliy (@Yeti-or)
 *
 * @requires api
 * @requires posthtml-parser
 * @requires posthtml-render
 *
 * @constructor PostHTML
 * @param {Array} plugins - An array of PostHTML plugins
 */
function PostHTML (plugins) {
/**
 * PostHTML Instance
 *
 * @prop plugins
 * @prop options
 */
  this.version = pkg.version
  this.name = pkg.name
  this.plugins = typeof plugins === 'function' ? [plugins] : plugins || []

  /**
   * Tree messages to store and pass metadata between plugins
   *
   * @memberof tree
   * @type {Array} messages
   *
   * @example
   * ```js
   * export default function plugin (options = {}) {
   *   return function (tree) {
   *      tree.messages.push({
   *        type: 'dependency',
   *        file: 'path/to/dependency.html',
   *        from: tree.options.from
   *      })
   *
   *      return tree
   *   }
   * }
   * ```
   */
  this.messages = []

  // extend api methods
  Api.call(this)
}

/**
 * @requires posthtml-parser
 *
 * @param   {String} html - Input (HTML)
 * @returns {Array}  tree - PostHTMLTree (JSON)
 */
PostHTML.parser = parser
/**
 * @requires posthtml-render
 *
 * @param   {Array}  tree - PostHTMLTree (JSON)
 * @returns {String} html - HTML
 */
PostHTML.render = render

/**
* @this posthtml
* @param   {Function} plugin - A PostHTML plugin
* @returns {Constructor} - this(PostHTML)
*
* **Usage**
* ```js
* ph.use((tree) => { tag: 'div', content: tree })
*   .process('<html>..</html>', {})
*   .then((result) => result))
* ```
*/
PostHTML.prototype.use = function () {
  [].push.apply(this.plugins, arguments)
  return this
}

/**
 * @param   {String} html - Input (HTML)
 * @param   {?Object} options - PostHTML Options
 * @returns {Object<{html: String, tree: PostHTMLTree}>} - Sync Mode
 * @returns {Promise<{html: String, tree: PostHTMLTree}>} - Async Mode (default)
 *
 * **Usage**
 *
 * **Sync**
 * ```js
 * ph.process('<html>..</html>', { sync: true }).html
 * ```
 *
 * **Async**
 * ```js
 * ph.process('<html>..</html>', {}).then((result) => result))
 * ```
 */
PostHTML.prototype.process = function (tree, options) {
  /**
   * ## PostHTML Options
   *
   * @type {Object}
   * @prop {?Boolean} options.sync - enables sync mode, plugins will run synchronously, throws an error when used with async plugins
   * @prop {?Function} options.parser - use custom parser, replaces default (posthtml-parser)
   * @prop {?Function} options.render - use custom render, replaces default (posthtml-render)
   * @prop {?Boolean} options.skipParse - disable parsing
   */
  options = this.options = options || {}

  if (options.parser) parser = options.parser
  if (options.render) render = options.render

  tree = options.skipParse
    ? tree || []
    : parser(tree, options)

  // sync mode
  if (options.sync === true) {
    this.plugins.forEach(function (plugin, index) {
      _treeExtendApi(tree, this)

      var result

      if (plugin.length === 2 || isPromise(result = plugin(tree))) {
        throw new Error(
          'Can’t process contents in sync mode because of async plugin: ' + plugin.name
        )
      }

      // clearing the tree of options
      if (index !== this.plugins.length - 1 && !options.skipParse) {
        tree = [].concat(tree)
      }

      // return the previous tree unless result is fulfilled
      tree = result || tree
    }.bind(this))

    return lazyResult(render, tree)
  }

  // async mode
  var i = 0

  var next = function (result, cb) {
    _treeExtendApi(result, this)

    // all plugins called
    if (this.plugins.length <= i) {
      cb(null, result)
      return
    }

    // little helper to go to the next iteration
    function _next (res) {
      if (res && !options.skipParse) {
        res = [].concat(res)
      }

      return next(res || result, cb)
    }

    // call next
    var plugin = this.plugins[i++]

    if (plugin.length === 2) {
      plugin(result, function (err, res) {
        if (err) return cb(err)
        _next(res)
      })
      return
    }

    // sync and promised plugins
    var err = null

    var res = tryCatch(function () {
      return plugin(result)
    }, function (e) {
      err = e
      return e
    })

    if (err) {
      cb(err)
      return
    }

    if (isPromise(res)) {
      res.then(_next).catch(cb)
      return
    }

    _next(res)
  }.bind(this)

  return new Promise(function (resolve, reject) {
    next(tree, function (err, tree) {
      if (err) reject(err)
      else resolve(lazyResult(render, tree))
    })
  })
}

/**
 * @exports posthtml
 *
 * @param  {Array} plugins
 * @return {Function} posthtml
 *
 * **Usage**
 * ```js
 * import posthtml from 'posthtml'
 * import plugin from 'posthtml-plugin'
 *
 * const ph = posthtml([ plugin() ])
 * ```
 */
module.exports = function (plugins) {
  return new PostHTML(plugins)
}

/**
 * Extension of options tree
 *
 * @private
 *
 * @param   {Array}    tree
 * @param   {Object}   PostHTML
 * @returns {?*}
 */
function _treeExtendApi (t, _t) {
  if (typeof t === 'object') {
    t = objectAssign(t, _t)
  }
}

/**
 * Checks if parameter is a Promise (or thenable) object.
 *
 * @private
 *
 * @param   {*} promise - Target `{}` to test
 * @returns {Boolean}
 */
function isPromise (promise) {
  return !!promise && typeof promise.then === 'function'
}

/**
 * Simple try/catch helper, if exists, returns result
 *
 * @private
 *
 * @param   {Function} tryFn - try block
 * @param   {Function} catchFn - catch block
 * @returns {?*}
 */
function tryCatch (tryFn, catchFn) {
  try {
    return tryFn()
  } catch (err) {
    catchFn(err)
  }
}

 /**
 * Wraps the PostHTMLTree within an object using a getter to render HTML on demand.
 *
 * @private
 *
 * @param   {Function} render
 * @param   {Array}    tree
 * @returns {Object<{html: String, tree: Array}>}
 */
function lazyResult (render, tree) {
  return {
    get html () {
      return render(tree, tree.options)
    },
    tree: tree,
    messages: tree.messages
  }
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {"name":"posthtml","version":"0.11.3","description":"HTML/XML processor","keywords":["html","xml","postproccessor","parser","transform","transformations","manipulation","preprocessor","processor"],"main":"lib","files":["lib"],"engines":{"node":">=0.10.0"},"dependencies":{"object-assign":"^4.1.1","posthtml-parser":"^0.3.3","posthtml-render":"^1.1.0"},"devDependencies":{"chai":"^3.0.0","chai-as-promised":"^6.0.0","chai-subset":"^1.1.0","es6-promise":"^4.0.5","istanbul":"^0.4.2","jsdoc-to-markdown":"^3.0.0","mocha":"^3.4.0","mversion":"^1.10.0","object.assign":"^4.0.3","standard":"^10.0.2","standard-version":"^4.2.0"},"scripts":{"lint":"standard","test":"npm run lint && mocha -R dot && npm run cover","clean":"rm -rf coverage jsdoc-api","cover":"istanbul cover --report text --report html --report lcov node_modules/mocha/bin/_mocha -- -R tap","docs:api":"jsdoc2md lib/api.js > docs/api.md","docs:core":"jsdoc2md lib/index.js > docs/core.md","release":"standard-version"},"author":"Anton Winogradov <winogradovaa@gmail.com>","contributors":[{"name":"Ivan Voischev","email":"voischev.ivan@ya.ru"},{"name":"Anton Winogradov","email":"winogradovaa@gmail.com"},{"name":"Alexej Yaroshevich","email":"zxqfox@gmail.com"}],"homepage":"https://github.com/posthtml/posthtml","repository":"https://github.com/posthtml/posthtml.git","bugs":"https://github.com/posthtml/posthtml/issues","license":"MIT"}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * # API
 *
 * @author Ivan Voischev (@voischev),
 *         Anton Winogradov (@awinogradov),
 *         Alexej Yaroshevich (@zxqfox),
 *         Vasiliy (@Yeti-or)
 *
 * @namespace tree
 */
function Api () {
  this.walk = walk
  this.match = match
}

/**
 * Walks the tree and passes all nodes via a callback
 *
 * @memberof tree
 *
 * @param  {Function} cb  Callback
 * @return {Function}     Callback(node)
 *
 *@example
 * ```js
 * export const walk = (tree) => {
 *   tree.walk((node) => {
 *     let classes = node.attrs && node.attrs.class.split(' ') || []
 *
 *     if (classes.includes(className)) return cb(node)
 *       return node
 *   })
 * }
 * ```
 */
function walk (cb) {
  return traverse(this, cb)
}

/**
 * Matches an expression to search for nodes in the tree
 *
 * @memberof tree
 *
 * @param  {String|RegExp|Object|Array} expression - Matcher(s) to search
 * @param  {Function} cb Callback
 *
 * @return {Function} Callback(node)
 *
 * @example
 * ```js
 * export const match = (tree) => {
 *   // Single matcher
 *   tree.match({ tag: 'custom-tag' }, (node) => {
 *     let tag = node.tag
 *
 *     Object.assign(node, { tag: 'div', attrs: {class: tag} })
 *
 *     return node
 *   })
 *   // Multiple matchers
 *   tree.match([{ tag: 'b' }, { tag: 'strong' }], (node) => {
 *     let style = 'font-weight: bold;'
 *
 *     node.tag = 'span'
 *
 *     node.attrs
 *       ? ( node.attrs.style
 *         ? ( node.attrs.style += style )
 *         : node.attrs.style = style
 *       )
 *       : node.attrs = { style: style }
 *
 *     return node
 *   })
 * }
 * ```
 */
function match (expression, cb) {
  return Array.isArray(expression)
    ? traverse(this, function (node) {
      for (var i = 0; i < expression.length; i++) {
        if (compare(expression[i], node)) return cb(node)
      }

      return node
    })
    : traverse(this, function (node) {
      if (compare(expression, node)) return cb(node)

      return node
    })
}

module.exports = Api
module.exports.match = match
module.exports.walk = walk

/** @private */
function traverse (tree, cb) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      tree[i] = traverse(cb(tree[i]), cb)
    }
  } else if (
      tree &&
      typeof tree === 'object' &&
      tree.hasOwnProperty('content')
  ) traverse(tree.content, cb)

  return tree
}

/** @private */
function compare (expected, actual) {
  if (expected instanceof RegExp) {
    if (typeof actual === 'object') return false
    if (typeof actual === 'string') return expected.test(actual)
  }

  if (typeof expected !== typeof actual) return false
  if (typeof expected !== 'object' || expected === null) {
    return expected === actual
  }

  if (Array.isArray(expected)) {
    return expected.every(function (exp) {
      return [].some.call(actual, function (act) {
        return compare(exp, act)
      })
    })
  }

  return Object.keys(expected).every(function (key) {
    var ao = actual[key]
    var eo = expected[key]

    if (typeof eo === 'object' && eo !== null && ao !== null) {
      return compare(eo, ao)
    }
    if (typeof eo === 'boolean') {
      return eo !== (ao == null)
    }

    return ao === eo
  })
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Parser = __webpack_require__(19);
var isObject = __webpack_require__(28);
var objectAssign = __webpack_require__(2);

/**
 * @see https://github.com/fb55/htmlparser2/wiki/Parser-options
 */
var defaultOptions = {lowerCaseTags: false, lowerCaseAttributeNames: false};

var defaultDirectives = [{name: '!doctype', start: '<', end: '>'}];

/**
 * Parse html to PostHTMLTree
 * @param  {String} html
 * @param  {Object} [options=defaultOptions]
 * @return {PostHTMLTree}
 */
function postHTMLParser(html, options) {
    var bufArray = [],
        results = [];

    bufArray.last = function() {
        return this[this.length - 1];
    };

    function parserDirective(name, data) {
        var directives = [].concat(defaultDirectives, options.directives || []);
        var last = bufArray.last();

        for (var i = 0; i < directives.length; i++) {
            var directive = directives[i];
            var directiveText = directive.start + data + directive.end;

            if (name.toLowerCase() === directive.name) {
                if (!last) {
                    results.push(directiveText);
                    return;
                }

                last.content || (last.content = []);
                last.content.push(directiveText);
            }
        }
    }

    function normalizeArributes(attrs) {
        var result = {};
        Object.keys(attrs).forEach(function(key) {
            var obj = {};
                obj[key] = attrs[key].replace(/&quot;/g, '"');
            objectAssign(result, obj);
        });

        return result;
    }

    var parser = new Parser({
        onprocessinginstruction: parserDirective,
        oncomment: function(data) {
            var comment = '<!--' + data + '-->',
                last = bufArray.last();

            if (!last) {
                results.push(comment);
                return;
            }

            last.content || (last.content = []);
            last.content.push(comment);
        },
        onopentag: function(tag, attrs) {
            var buf = { tag: tag };

            if (Object.keys(attrs).length) {
                buf.attrs = normalizeArributes(attrs);
            }

            bufArray.push(buf);
        },
        onclosetag: function() {
            var buf = bufArray.pop();

            if (!bufArray.length) {
                results.push(buf);
                return;
            }

            var last = bufArray.last();
            if (!Array.isArray(last.content)) {
                last.content = [];
            }

            last.content.push(buf);
        },
        ontext: function(text) {
            var last = bufArray.last();
            if (!last) {
                results.push(text);
                return;
            }

            last.content || (last.content = []);
            last.content.push(text);
        }
    }, options || defaultOptions);

    parser.write(html);
    parser.end();

    return results;
}

function parserWrapper() {
    var option;

    function parser(html) {
        var opt = objectAssign(defaultOptions, option);
        return postHTMLParser(html, opt);
    }

    if (arguments.length === 1 && isObject(arguments[0])) {
        option = arguments[0];
        return parser;
    }

    option = arguments[1];
    return parser(arguments[0]);
}

module.exports = parserWrapper;
module.exports.defaultOptions = defaultOptions;
module.exports.defaultDirectives = defaultDirectives;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Tokenizer = __webpack_require__(20);

/*
	Options:

	xmlMode: Disables the special behavior for script/style tags (false by default)
	lowerCaseAttributeNames: call .toLowerCase for each attribute name (true if xmlMode is `false`)
	lowerCaseTags: call .toLowerCase for each tag name (true if xmlMode is `false`)
*/

/*
	Callbacks:

	oncdataend,
	oncdatastart,
	onclosetag,
	oncomment,
	oncommentend,
	onerror,
	onopentag,
	onprocessinginstruction,
	onreset,
	ontext
*/

var formTags = {
	input: true,
	option: true,
	optgroup: true,
	select: true,
	button: true,
	datalist: true,
	textarea: true
};

var openImpliesClose = {
	tr      : { tr:true, th:true, td:true },
	th      : { th:true },
	td      : { thead:true, th:true, td:true },
	body    : { head:true, link:true, script:true },
	li      : { li:true },
	p       : { p:true },
	h1      : { p:true },
	h2      : { p:true },
	h3      : { p:true },
	h4      : { p:true },
	h5      : { p:true },
	h6      : { p:true },
	select  : formTags,
	input   : formTags,
	output  : formTags,
	button  : formTags,
	datalist: formTags,
	textarea: formTags,
	option  : { option:true },
	optgroup: { optgroup:true }
};

var voidElements = {
	__proto__: null,
	area: true,
	base: true,
	basefont: true,
	br: true,
	col: true,
	command: true,
	embed: true,
	frame: true,
	hr: true,
	img: true,
	input: true,
	isindex: true,
	keygen: true,
	link: true,
	meta: true,
	param: true,
	source: true,
	track: true,
	wbr: true,

	//common self closing svg elements
	path: true,
	circle: true,
	ellipse: true,
	line: true,
	rect: true,
	use: true,
	stop: true,
	polyline: true,
	polygon: true
};

var re_nameEnd = /\s|\//;

function Parser(cbs, options){
	this._options = options || {};
	this._cbs = cbs || {};

	this._tagname = "";
	this._attribname = "";
	this._attribvalue = "";
	this._attribs = null;
	this._stack = [];

	this.startIndex = 0;
	this.endIndex = null;

	this._lowerCaseTagNames = "lowerCaseTags" in this._options ?
									!!this._options.lowerCaseTags :
									!this._options.xmlMode;
	this._lowerCaseAttributeNames = "lowerCaseAttributeNames" in this._options ?
									!!this._options.lowerCaseAttributeNames :
									!this._options.xmlMode;

	if(this._options.Tokenizer) {
		Tokenizer = this._options.Tokenizer;
	}
	this._tokenizer = new Tokenizer(this._options, this);

	if(this._cbs.onparserinit) this._cbs.onparserinit(this);
}

__webpack_require__(26)(Parser, __webpack_require__(27).EventEmitter);

Parser.prototype._updatePosition = function(initialOffset){
	if(this.endIndex === null){
		if(this._tokenizer._sectionStart <= initialOffset){
			this.startIndex = 0;
		} else {
			this.startIndex = this._tokenizer._sectionStart - initialOffset;
		}
	}
	else this.startIndex = this.endIndex + 1;
	this.endIndex = this._tokenizer.getAbsoluteIndex();
};

//Tokenizer event handlers
Parser.prototype.ontext = function(data){
	this._updatePosition(1);
	this.endIndex--;

	if(this._cbs.ontext) this._cbs.ontext(data);
};

Parser.prototype.onopentagname = function(name){
	if(this._lowerCaseTagNames){
		name = name.toLowerCase();
	}

	this._tagname = name;

	if(!this._options.xmlMode && name in openImpliesClose) {
		for(
			var el;
			(el = this._stack[this._stack.length - 1]) in openImpliesClose[name];
			this.onclosetag(el)
		);
	}

	if(this._options.xmlMode || !(name in voidElements)){
		this._stack.push(name);
	}

	if(this._cbs.onopentagname) this._cbs.onopentagname(name);
	if(this._cbs.onopentag) this._attribs = {};
};

Parser.prototype.onopentagend = function(){
	this._updatePosition(1);

	if(this._attribs){
		if(this._cbs.onopentag) this._cbs.onopentag(this._tagname, this._attribs);
		this._attribs = null;
	}

	if(!this._options.xmlMode && this._cbs.onclosetag && this._tagname in voidElements){
		this._cbs.onclosetag(this._tagname);
	}

	this._tagname = "";
};

Parser.prototype.onclosetag = function(name){
	this._updatePosition(1);

	if(this._lowerCaseTagNames){
		name = name.toLowerCase();
	}

	if(this._stack.length && (!(name in voidElements) || this._options.xmlMode)){
		var pos = this._stack.lastIndexOf(name);
		if(pos !== -1){
			if(this._cbs.onclosetag){
				pos = this._stack.length - pos;
				while(pos--) this._cbs.onclosetag(this._stack.pop());
			}
			else this._stack.length = pos;
		} else if(name === "p" && !this._options.xmlMode){
			this.onopentagname(name);
			this._closeCurrentTag();
		}
	} else if(!this._options.xmlMode && (name === "br" || name === "p")){
		this.onopentagname(name);
		this._closeCurrentTag();
	}
};

Parser.prototype.onselfclosingtag = function(){
	if(this._options.xmlMode || this._options.recognizeSelfClosing){
		this._closeCurrentTag();
	} else {
		this.onopentagend();
	}
};

Parser.prototype._closeCurrentTag = function(){
	var name = this._tagname;

	this.onopentagend();

	//self-closing tags will be on the top of the stack
	//(cheaper check than in onclosetag)
	if(this._stack[this._stack.length - 1] === name){
		if(this._cbs.onclosetag){
			this._cbs.onclosetag(name);
		}
		this._stack.pop();
	}
};

Parser.prototype.onattribname = function(name){
	if(this._lowerCaseAttributeNames){
		name = name.toLowerCase();
	}
	this._attribname = name;
};

Parser.prototype.onattribdata = function(value){
	this._attribvalue += value;
};

Parser.prototype.onattribend = function(){
	if(this._cbs.onattribute) this._cbs.onattribute(this._attribname, this._attribvalue);
	if(
		this._attribs &&
		!Object.prototype.hasOwnProperty.call(this._attribs, this._attribname)
	){
		this._attribs[this._attribname] = this._attribvalue;
	}
	this._attribname = "";
	this._attribvalue = "";
};

Parser.prototype._getInstructionName = function(value){
	var idx = value.search(re_nameEnd),
	    name = idx < 0 ? value : value.substr(0, idx);

	if(this._lowerCaseTagNames){
		name = name.toLowerCase();
	}

	return name;
};

Parser.prototype.ondeclaration = function(value){
	if(this._cbs.onprocessinginstruction){
		var name = this._getInstructionName(value);
		this._cbs.onprocessinginstruction("!" + name, "!" + value);
	}
};

Parser.prototype.onprocessinginstruction = function(value){
	if(this._cbs.onprocessinginstruction){
		var name = this._getInstructionName(value);
		this._cbs.onprocessinginstruction("?" + name, "?" + value);
	}
};

Parser.prototype.oncomment = function(value){
	this._updatePosition(4);

	if(this._cbs.oncomment) this._cbs.oncomment(value);
	if(this._cbs.oncommentend) this._cbs.oncommentend();
};

Parser.prototype.oncdata = function(value){
	this._updatePosition(1);

	if(this._options.xmlMode || this._options.recognizeCDATA){
		if(this._cbs.oncdatastart) this._cbs.oncdatastart();
		if(this._cbs.ontext) this._cbs.ontext(value);
		if(this._cbs.oncdataend) this._cbs.oncdataend();
	} else {
		this.oncomment("[CDATA[" + value + "]]");
	}
};

Parser.prototype.onerror = function(err){
	if(this._cbs.onerror) this._cbs.onerror(err);
};

Parser.prototype.onend = function(){
	if(this._cbs.onclosetag){
		for(
			var i = this._stack.length;
			i > 0;
			this._cbs.onclosetag(this._stack[--i])
		);
	}
	if(this._cbs.onend) this._cbs.onend();
};


//Resets the parser to a blank state, ready to parse a new HTML document
Parser.prototype.reset = function(){
	if(this._cbs.onreset) this._cbs.onreset();
	this._tokenizer.reset();

	this._tagname = "";
	this._attribname = "";
	this._attribs = null;
	this._stack = [];

	if(this._cbs.onparserinit) this._cbs.onparserinit(this);
};

//Parses a complete HTML document and pushes it to the handler
Parser.prototype.parseComplete = function(data){
	this.reset();
	this.end(data);
};

Parser.prototype.write = function(chunk){
	this._tokenizer.write(chunk);
};

Parser.prototype.end = function(chunk){
	this._tokenizer.end(chunk);
};

Parser.prototype.pause = function(){
	this._tokenizer.pause();
};

Parser.prototype.resume = function(){
	this._tokenizer.resume();
};

//alias for backwards compat
Parser.prototype.parseChunk = Parser.prototype.write;
Parser.prototype.done = Parser.prototype.end;

module.exports = Parser;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = Tokenizer;

var decodeCodePoint = __webpack_require__(21),
    entityMap = __webpack_require__(23),
    legacyMap = __webpack_require__(24),
    xmlMap    = __webpack_require__(25),

    i = 0,

    TEXT                      = i++,
    BEFORE_TAG_NAME           = i++, //after <
    IN_TAG_NAME               = i++,
    IN_SELF_CLOSING_TAG       = i++,
    BEFORE_CLOSING_TAG_NAME   = i++,
    IN_CLOSING_TAG_NAME       = i++,
    AFTER_CLOSING_TAG_NAME    = i++,

    //attributes
    BEFORE_ATTRIBUTE_NAME     = i++,
    IN_ATTRIBUTE_NAME         = i++,
    AFTER_ATTRIBUTE_NAME      = i++,
    BEFORE_ATTRIBUTE_VALUE    = i++,
    IN_ATTRIBUTE_VALUE_DQ     = i++, // "
    IN_ATTRIBUTE_VALUE_SQ     = i++, // '
    IN_ATTRIBUTE_VALUE_NQ     = i++,

    //declarations
    BEFORE_DECLARATION        = i++, // !
    IN_DECLARATION            = i++,

    //processing instructions
    IN_PROCESSING_INSTRUCTION = i++, // ?

    //comments
    BEFORE_COMMENT            = i++,
    IN_COMMENT                = i++,
    AFTER_COMMENT_1           = i++,
    AFTER_COMMENT_2           = i++,

    //cdata
    BEFORE_CDATA_1            = i++, // [
    BEFORE_CDATA_2            = i++, // C
    BEFORE_CDATA_3            = i++, // D
    BEFORE_CDATA_4            = i++, // A
    BEFORE_CDATA_5            = i++, // T
    BEFORE_CDATA_6            = i++, // A
    IN_CDATA                  = i++, // [
    AFTER_CDATA_1             = i++, // ]
    AFTER_CDATA_2             = i++, // ]

    //special tags
    BEFORE_SPECIAL            = i++, //S
    BEFORE_SPECIAL_END        = i++,   //S

    BEFORE_SCRIPT_1           = i++, //C
    BEFORE_SCRIPT_2           = i++, //R
    BEFORE_SCRIPT_3           = i++, //I
    BEFORE_SCRIPT_4           = i++, //P
    BEFORE_SCRIPT_5           = i++, //T
    AFTER_SCRIPT_1            = i++, //C
    AFTER_SCRIPT_2            = i++, //R
    AFTER_SCRIPT_3            = i++, //I
    AFTER_SCRIPT_4            = i++, //P
    AFTER_SCRIPT_5            = i++, //T

    BEFORE_STYLE_1            = i++, //T
    BEFORE_STYLE_2            = i++, //Y
    BEFORE_STYLE_3            = i++, //L
    BEFORE_STYLE_4            = i++, //E
    AFTER_STYLE_1             = i++, //T
    AFTER_STYLE_2             = i++, //Y
    AFTER_STYLE_3             = i++, //L
    AFTER_STYLE_4             = i++, //E

    BEFORE_ENTITY             = i++, //&
    BEFORE_NUMERIC_ENTITY     = i++, //#
    IN_NAMED_ENTITY           = i++,
    IN_NUMERIC_ENTITY         = i++,
    IN_HEX_ENTITY             = i++, //X

    j = 0,

    SPECIAL_NONE              = j++,
    SPECIAL_SCRIPT            = j++,
    SPECIAL_STYLE             = j++;

function whitespace(c){
	return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
}

function characterState(char, SUCCESS){
	return function(c){
		if(c === char) this._state = SUCCESS;
	};
}

function ifElseState(upper, SUCCESS, FAILURE){
	var lower = upper.toLowerCase();

	if(upper === lower){
		return function(c){
			if(c === lower){
				this._state = SUCCESS;
			} else {
				this._state = FAILURE;
				this._index--;
			}
		};
	} else {
		return function(c){
			if(c === lower || c === upper){
				this._state = SUCCESS;
			} else {
				this._state = FAILURE;
				this._index--;
			}
		};
	}
}

function consumeSpecialNameChar(upper, NEXT_STATE){
	var lower = upper.toLowerCase();

	return function(c){
		if(c === lower || c === upper){
			this._state = NEXT_STATE;
		} else {
			this._state = IN_TAG_NAME;
			this._index--; //consume the token again
		}
	};
}

function Tokenizer(options, cbs){
	this._state = TEXT;
	this._buffer = "";
	this._sectionStart = 0;
	this._index = 0;
	this._bufferOffset = 0; //chars removed from _buffer
	this._baseState = TEXT;
	this._special = SPECIAL_NONE;
	this._cbs = cbs;
	this._running = true;
	this._ended = false;
	this._xmlMode = !!(options && options.xmlMode);
	this._decodeEntities = !!(options && options.decodeEntities);
}

Tokenizer.prototype._stateText = function(c){
	if(c === "<"){
		if(this._index > this._sectionStart){
			this._cbs.ontext(this._getSection());
		}
		this._state = BEFORE_TAG_NAME;
		this._sectionStart = this._index;
	} else if(this._decodeEntities && this._special === SPECIAL_NONE && c === "&"){
		if(this._index > this._sectionStart){
			this._cbs.ontext(this._getSection());
		}
		this._baseState = TEXT;
		this._state = BEFORE_ENTITY;
		this._sectionStart = this._index;
	}
};

Tokenizer.prototype._stateBeforeTagName = function(c){
	if(c === "/"){
		this._state = BEFORE_CLOSING_TAG_NAME;
	} else if(c === "<"){
		this._cbs.ontext(this._getSection());
		this._sectionStart = this._index;
	} else if(c === ">" || this._special !== SPECIAL_NONE || whitespace(c)) {
		this._state = TEXT;
	} else if(c === "!"){
		this._state = BEFORE_DECLARATION;
		this._sectionStart = this._index + 1;
	} else if(c === "?"){
		this._state = IN_PROCESSING_INSTRUCTION;
		this._sectionStart = this._index + 1;
	} else {
		this._state = (!this._xmlMode && (c === "s" || c === "S")) ?
						BEFORE_SPECIAL : IN_TAG_NAME;
		this._sectionStart = this._index;
	}
};

Tokenizer.prototype._stateInTagName = function(c){
	if(c === "/" || c === ">" || whitespace(c)){
		this._emitToken("onopentagname");
		this._state = BEFORE_ATTRIBUTE_NAME;
		this._index--;
	}
};

Tokenizer.prototype._stateBeforeCloseingTagName = function(c){
	if(whitespace(c));
	else if(c === ">"){
		this._state = TEXT;
	} else if(this._special !== SPECIAL_NONE){
		if(c === "s" || c === "S"){
			this._state = BEFORE_SPECIAL_END;
		} else {
			this._state = TEXT;
			this._index--;
		}
	} else {
		this._state = IN_CLOSING_TAG_NAME;
		this._sectionStart = this._index;
	}
};

Tokenizer.prototype._stateInCloseingTagName = function(c){
	if(c === ">" || whitespace(c)){
		this._emitToken("onclosetag");
		this._state = AFTER_CLOSING_TAG_NAME;
		this._index--;
	}
};

Tokenizer.prototype._stateAfterCloseingTagName = function(c){
	//skip everything until ">"
	if(c === ">"){
		this._state = TEXT;
		this._sectionStart = this._index + 1;
	}
};

Tokenizer.prototype._stateBeforeAttributeName = function(c){
	if(c === ">"){
		this._cbs.onopentagend();
		this._state = TEXT;
		this._sectionStart = this._index + 1;
	} else if(c === "/"){
		this._state = IN_SELF_CLOSING_TAG;
	} else if(!whitespace(c)){
		this._state = IN_ATTRIBUTE_NAME;
		this._sectionStart = this._index;
	}
};

Tokenizer.prototype._stateInSelfClosingTag = function(c){
	if(c === ">"){
		this._cbs.onselfclosingtag();
		this._state = TEXT;
		this._sectionStart = this._index + 1;
	} else if(!whitespace(c)){
		this._state = BEFORE_ATTRIBUTE_NAME;
		this._index--;
	}
};

Tokenizer.prototype._stateInAttributeName = function(c){
	if(c === "=" || c === "/" || c === ">" || whitespace(c)){
		this._cbs.onattribname(this._getSection());
		this._sectionStart = -1;
		this._state = AFTER_ATTRIBUTE_NAME;
		this._index--;
	}
};

Tokenizer.prototype._stateAfterAttributeName = function(c){
	if(c === "="){
		this._state = BEFORE_ATTRIBUTE_VALUE;
	} else if(c === "/" || c === ">"){
		this._cbs.onattribend();
		this._state = BEFORE_ATTRIBUTE_NAME;
		this._index--;
	} else if(!whitespace(c)){
		this._cbs.onattribend();
		this._state = IN_ATTRIBUTE_NAME;
		this._sectionStart = this._index;
	}
};

Tokenizer.prototype._stateBeforeAttributeValue = function(c){
	if(c === "\""){
		this._state = IN_ATTRIBUTE_VALUE_DQ;
		this._sectionStart = this._index + 1;
	} else if(c === "'"){
		this._state = IN_ATTRIBUTE_VALUE_SQ;
		this._sectionStart = this._index + 1;
	} else if(!whitespace(c)){
		this._state = IN_ATTRIBUTE_VALUE_NQ;
		this._sectionStart = this._index;
		this._index--; //reconsume token
	}
};

Tokenizer.prototype._stateInAttributeValueDoubleQuotes = function(c){
	if(c === "\""){
		this._emitToken("onattribdata");
		this._cbs.onattribend();
		this._state = BEFORE_ATTRIBUTE_NAME;
	} else if(this._decodeEntities && c === "&"){
		this._emitToken("onattribdata");
		this._baseState = this._state;
		this._state = BEFORE_ENTITY;
		this._sectionStart = this._index;
	}
};

Tokenizer.prototype._stateInAttributeValueSingleQuotes = function(c){
	if(c === "'"){
		this._emitToken("onattribdata");
		this._cbs.onattribend();
		this._state = BEFORE_ATTRIBUTE_NAME;
	} else if(this._decodeEntities && c === "&"){
		this._emitToken("onattribdata");
		this._baseState = this._state;
		this._state = BEFORE_ENTITY;
		this._sectionStart = this._index;
	}
};

Tokenizer.prototype._stateInAttributeValueNoQuotes = function(c){
	if(whitespace(c) || c === ">"){
		this._emitToken("onattribdata");
		this._cbs.onattribend();
		this._state = BEFORE_ATTRIBUTE_NAME;
		this._index--;
	} else if(this._decodeEntities && c === "&"){
		this._emitToken("onattribdata");
		this._baseState = this._state;
		this._state = BEFORE_ENTITY;
		this._sectionStart = this._index;
	}
};

Tokenizer.prototype._stateBeforeDeclaration = function(c){
	this._state = c === "[" ? BEFORE_CDATA_1 :
					c === "-" ? BEFORE_COMMENT :
						IN_DECLARATION;
};

Tokenizer.prototype._stateInDeclaration = function(c){
	if(c === ">"){
		this._cbs.ondeclaration(this._getSection());
		this._state = TEXT;
		this._sectionStart = this._index + 1;
	}
};

Tokenizer.prototype._stateInProcessingInstruction = function(c){
	if(c === ">"){
		this._cbs.onprocessinginstruction(this._getSection());
		this._state = TEXT;
		this._sectionStart = this._index + 1;
	}
};

Tokenizer.prototype._stateBeforeComment = function(c){
	if(c === "-"){
		this._state = IN_COMMENT;
		this._sectionStart = this._index + 1;
	} else {
		this._state = IN_DECLARATION;
	}
};

Tokenizer.prototype._stateInComment = function(c){
	if(c === "-") this._state = AFTER_COMMENT_1;
};

Tokenizer.prototype._stateAfterComment1 = function(c){
	if(c === "-"){
		this._state = AFTER_COMMENT_2;
	} else {
		this._state = IN_COMMENT;
	}
};

Tokenizer.prototype._stateAfterComment2 = function(c){
	if(c === ">"){
		//remove 2 trailing chars
		this._cbs.oncomment(this._buffer.substring(this._sectionStart, this._index - 2));
		this._state = TEXT;
		this._sectionStart = this._index + 1;
	} else if(c !== "-"){
		this._state = IN_COMMENT;
	}
	// else: stay in AFTER_COMMENT_2 (`--->`)
};

Tokenizer.prototype._stateBeforeCdata1 = ifElseState("C", BEFORE_CDATA_2, IN_DECLARATION);
Tokenizer.prototype._stateBeforeCdata2 = ifElseState("D", BEFORE_CDATA_3, IN_DECLARATION);
Tokenizer.prototype._stateBeforeCdata3 = ifElseState("A", BEFORE_CDATA_4, IN_DECLARATION);
Tokenizer.prototype._stateBeforeCdata4 = ifElseState("T", BEFORE_CDATA_5, IN_DECLARATION);
Tokenizer.prototype._stateBeforeCdata5 = ifElseState("A", BEFORE_CDATA_6, IN_DECLARATION);

Tokenizer.prototype._stateBeforeCdata6 = function(c){
	if(c === "["){
		this._state = IN_CDATA;
		this._sectionStart = this._index + 1;
	} else {
		this._state = IN_DECLARATION;
		this._index--;
	}
};

Tokenizer.prototype._stateInCdata = function(c){
	if(c === "]") this._state = AFTER_CDATA_1;
};

Tokenizer.prototype._stateAfterCdata1 = characterState("]", AFTER_CDATA_2);

Tokenizer.prototype._stateAfterCdata2 = function(c){
	if(c === ">"){
		//remove 2 trailing chars
		this._cbs.oncdata(this._buffer.substring(this._sectionStart, this._index - 2));
		this._state = TEXT;
		this._sectionStart = this._index + 1;
	} else if(c !== "]") {
		this._state = IN_CDATA;
	}
	//else: stay in AFTER_CDATA_2 (`]]]>`)
};

Tokenizer.prototype._stateBeforeSpecial = function(c){
	if(c === "c" || c === "C"){
		this._state = BEFORE_SCRIPT_1;
	} else if(c === "t" || c === "T"){
		this._state = BEFORE_STYLE_1;
	} else {
		this._state = IN_TAG_NAME;
		this._index--; //consume the token again
	}
};

Tokenizer.prototype._stateBeforeSpecialEnd = function(c){
	if(this._special === SPECIAL_SCRIPT && (c === "c" || c === "C")){
		this._state = AFTER_SCRIPT_1;
	} else if(this._special === SPECIAL_STYLE && (c === "t" || c === "T")){
		this._state = AFTER_STYLE_1;
	}
	else this._state = TEXT;
};

Tokenizer.prototype._stateBeforeScript1 = consumeSpecialNameChar("R", BEFORE_SCRIPT_2);
Tokenizer.prototype._stateBeforeScript2 = consumeSpecialNameChar("I", BEFORE_SCRIPT_3);
Tokenizer.prototype._stateBeforeScript3 = consumeSpecialNameChar("P", BEFORE_SCRIPT_4);
Tokenizer.prototype._stateBeforeScript4 = consumeSpecialNameChar("T", BEFORE_SCRIPT_5);

Tokenizer.prototype._stateBeforeScript5 = function(c){
	if(c === "/" || c === ">" || whitespace(c)){
		this._special = SPECIAL_SCRIPT;
	}
	this._state = IN_TAG_NAME;
	this._index--; //consume the token again
};

Tokenizer.prototype._stateAfterScript1 = ifElseState("R", AFTER_SCRIPT_2, TEXT);
Tokenizer.prototype._stateAfterScript2 = ifElseState("I", AFTER_SCRIPT_3, TEXT);
Tokenizer.prototype._stateAfterScript3 = ifElseState("P", AFTER_SCRIPT_4, TEXT);
Tokenizer.prototype._stateAfterScript4 = ifElseState("T", AFTER_SCRIPT_5, TEXT);

Tokenizer.prototype._stateAfterScript5 = function(c){
	if(c === ">" || whitespace(c)){
		this._special = SPECIAL_NONE;
		this._state = IN_CLOSING_TAG_NAME;
		this._sectionStart = this._index - 6;
		this._index--; //reconsume the token
	}
	else this._state = TEXT;
};

Tokenizer.prototype._stateBeforeStyle1 = consumeSpecialNameChar("Y", BEFORE_STYLE_2);
Tokenizer.prototype._stateBeforeStyle2 = consumeSpecialNameChar("L", BEFORE_STYLE_3);
Tokenizer.prototype._stateBeforeStyle3 = consumeSpecialNameChar("E", BEFORE_STYLE_4);

Tokenizer.prototype._stateBeforeStyle4 = function(c){
	if(c === "/" || c === ">" || whitespace(c)){
		this._special = SPECIAL_STYLE;
	}
	this._state = IN_TAG_NAME;
	this._index--; //consume the token again
};

Tokenizer.prototype._stateAfterStyle1 = ifElseState("Y", AFTER_STYLE_2, TEXT);
Tokenizer.prototype._stateAfterStyle2 = ifElseState("L", AFTER_STYLE_3, TEXT);
Tokenizer.prototype._stateAfterStyle3 = ifElseState("E", AFTER_STYLE_4, TEXT);

Tokenizer.prototype._stateAfterStyle4 = function(c){
	if(c === ">" || whitespace(c)){
		this._special = SPECIAL_NONE;
		this._state = IN_CLOSING_TAG_NAME;
		this._sectionStart = this._index - 5;
		this._index--; //reconsume the token
	}
	else this._state = TEXT;
};

Tokenizer.prototype._stateBeforeEntity = ifElseState("#", BEFORE_NUMERIC_ENTITY, IN_NAMED_ENTITY);
Tokenizer.prototype._stateBeforeNumericEntity = ifElseState("X", IN_HEX_ENTITY, IN_NUMERIC_ENTITY);

//for entities terminated with a semicolon
Tokenizer.prototype._parseNamedEntityStrict = function(){
	//offset = 1
	if(this._sectionStart + 1 < this._index){
		var entity = this._buffer.substring(this._sectionStart + 1, this._index),
		    map = this._xmlMode ? xmlMap : entityMap;

		if(map.hasOwnProperty(entity)){
			this._emitPartial(map[entity]);
			this._sectionStart = this._index + 1;
		}
	}
};


//parses legacy entities (without trailing semicolon)
Tokenizer.prototype._parseLegacyEntity = function(){
	var start = this._sectionStart + 1,
	    limit = this._index - start;

	if(limit > 6) limit = 6; //the max length of legacy entities is 6

	while(limit >= 2){ //the min length of legacy entities is 2
		var entity = this._buffer.substr(start, limit);

		if(legacyMap.hasOwnProperty(entity)){
			this._emitPartial(legacyMap[entity]);
			this._sectionStart += limit + 1;
			return;
		} else {
			limit--;
		}
	}
};

Tokenizer.prototype._stateInNamedEntity = function(c){
	if(c === ";"){
		this._parseNamedEntityStrict();
		if(this._sectionStart + 1 < this._index && !this._xmlMode){
			this._parseLegacyEntity();
		}
		this._state = this._baseState;
	} else if((c < "a" || c > "z") && (c < "A" || c > "Z") && (c < "0" || c > "9")){
		if(this._xmlMode);
		else if(this._sectionStart + 1 === this._index);
		else if(this._baseState !== TEXT){
			if(c !== "="){
				this._parseNamedEntityStrict();
			}
		} else {
			this._parseLegacyEntity();
		}

		this._state = this._baseState;
		this._index--;
	}
};

Tokenizer.prototype._decodeNumericEntity = function(offset, base){
	var sectionStart = this._sectionStart + offset;

	if(sectionStart !== this._index){
		//parse entity
		var entity = this._buffer.substring(sectionStart, this._index);
		var parsed = parseInt(entity, base);

		this._emitPartial(decodeCodePoint(parsed));
		this._sectionStart = this._index;
	} else {
		this._sectionStart--;
	}

	this._state = this._baseState;
};

Tokenizer.prototype._stateInNumericEntity = function(c){
	if(c === ";"){
		this._decodeNumericEntity(2, 10);
		this._sectionStart++;
	} else if(c < "0" || c > "9"){
		if(!this._xmlMode){
			this._decodeNumericEntity(2, 10);
		} else {
			this._state = this._baseState;
		}
		this._index--;
	}
};

Tokenizer.prototype._stateInHexEntity = function(c){
	if(c === ";"){
		this._decodeNumericEntity(3, 16);
		this._sectionStart++;
	} else if((c < "a" || c > "f") && (c < "A" || c > "F") && (c < "0" || c > "9")){
		if(!this._xmlMode){
			this._decodeNumericEntity(3, 16);
		} else {
			this._state = this._baseState;
		}
		this._index--;
	}
};

Tokenizer.prototype._cleanup = function (){
	if(this._sectionStart < 0){
		this._buffer = "";
		this._bufferOffset += this._index;
		this._index = 0;
	} else if(this._running){
		if(this._state === TEXT){
			if(this._sectionStart !== this._index){
				this._cbs.ontext(this._buffer.substr(this._sectionStart));
			}
			this._buffer = "";
			this._bufferOffset += this._index;
			this._index = 0;
		} else if(this._sectionStart === this._index){
			//the section just started
			this._buffer = "";
			this._bufferOffset += this._index;
			this._index = 0;
		} else {
			//remove everything unnecessary
			this._buffer = this._buffer.substr(this._sectionStart);
			this._index -= this._sectionStart;
			this._bufferOffset += this._sectionStart;
		}

		this._sectionStart = 0;
	}
};

//TODO make events conditional
Tokenizer.prototype.write = function(chunk){
	if(this._ended) this._cbs.onerror(Error(".write() after done!"));

	this._buffer += chunk;
	this._parse();
};

Tokenizer.prototype._parse = function(){
	while(this._index < this._buffer.length && this._running){
		var c = this._buffer.charAt(this._index);
		if(this._state === TEXT) {
			this._stateText(c);
		} else if(this._state === BEFORE_TAG_NAME){
			this._stateBeforeTagName(c);
		} else if(this._state === IN_TAG_NAME) {
			this._stateInTagName(c);
		} else if(this._state === BEFORE_CLOSING_TAG_NAME){
			this._stateBeforeCloseingTagName(c);
		} else if(this._state === IN_CLOSING_TAG_NAME){
			this._stateInCloseingTagName(c);
		} else if(this._state === AFTER_CLOSING_TAG_NAME){
			this._stateAfterCloseingTagName(c);
		} else if(this._state === IN_SELF_CLOSING_TAG){
			this._stateInSelfClosingTag(c);
		}

		/*
		*	attributes
		*/
		else if(this._state === BEFORE_ATTRIBUTE_NAME){
			this._stateBeforeAttributeName(c);
		} else if(this._state === IN_ATTRIBUTE_NAME){
			this._stateInAttributeName(c);
		} else if(this._state === AFTER_ATTRIBUTE_NAME){
			this._stateAfterAttributeName(c);
		} else if(this._state === BEFORE_ATTRIBUTE_VALUE){
			this._stateBeforeAttributeValue(c);
		} else if(this._state === IN_ATTRIBUTE_VALUE_DQ){
			this._stateInAttributeValueDoubleQuotes(c);
		} else if(this._state === IN_ATTRIBUTE_VALUE_SQ){
			this._stateInAttributeValueSingleQuotes(c);
		} else if(this._state === IN_ATTRIBUTE_VALUE_NQ){
			this._stateInAttributeValueNoQuotes(c);
		}

		/*
		*	declarations
		*/
		else if(this._state === BEFORE_DECLARATION){
			this._stateBeforeDeclaration(c);
		} else if(this._state === IN_DECLARATION){
			this._stateInDeclaration(c);
		}

		/*
		*	processing instructions
		*/
		else if(this._state === IN_PROCESSING_INSTRUCTION){
			this._stateInProcessingInstruction(c);
		}

		/*
		*	comments
		*/
		else if(this._state === BEFORE_COMMENT){
			this._stateBeforeComment(c);
		} else if(this._state === IN_COMMENT){
			this._stateInComment(c);
		} else if(this._state === AFTER_COMMENT_1){
			this._stateAfterComment1(c);
		} else if(this._state === AFTER_COMMENT_2){
			this._stateAfterComment2(c);
		}

		/*
		*	cdata
		*/
		else if(this._state === BEFORE_CDATA_1){
			this._stateBeforeCdata1(c);
		} else if(this._state === BEFORE_CDATA_2){
			this._stateBeforeCdata2(c);
		} else if(this._state === BEFORE_CDATA_3){
			this._stateBeforeCdata3(c);
		} else if(this._state === BEFORE_CDATA_4){
			this._stateBeforeCdata4(c);
		} else if(this._state === BEFORE_CDATA_5){
			this._stateBeforeCdata5(c);
		} else if(this._state === BEFORE_CDATA_6){
			this._stateBeforeCdata6(c);
		} else if(this._state === IN_CDATA){
			this._stateInCdata(c);
		} else if(this._state === AFTER_CDATA_1){
			this._stateAfterCdata1(c);
		} else if(this._state === AFTER_CDATA_2){
			this._stateAfterCdata2(c);
		}

		/*
		* special tags
		*/
		else if(this._state === BEFORE_SPECIAL){
			this._stateBeforeSpecial(c);
		} else if(this._state === BEFORE_SPECIAL_END){
			this._stateBeforeSpecialEnd(c);
		}

		/*
		* script
		*/
		else if(this._state === BEFORE_SCRIPT_1){
			this._stateBeforeScript1(c);
		} else if(this._state === BEFORE_SCRIPT_2){
			this._stateBeforeScript2(c);
		} else if(this._state === BEFORE_SCRIPT_3){
			this._stateBeforeScript3(c);
		} else if(this._state === BEFORE_SCRIPT_4){
			this._stateBeforeScript4(c);
		} else if(this._state === BEFORE_SCRIPT_5){
			this._stateBeforeScript5(c);
		}

		else if(this._state === AFTER_SCRIPT_1){
			this._stateAfterScript1(c);
		} else if(this._state === AFTER_SCRIPT_2){
			this._stateAfterScript2(c);
		} else if(this._state === AFTER_SCRIPT_3){
			this._stateAfterScript3(c);
		} else if(this._state === AFTER_SCRIPT_4){
			this._stateAfterScript4(c);
		} else if(this._state === AFTER_SCRIPT_5){
			this._stateAfterScript5(c);
		}

		/*
		* style
		*/
		else if(this._state === BEFORE_STYLE_1){
			this._stateBeforeStyle1(c);
		} else if(this._state === BEFORE_STYLE_2){
			this._stateBeforeStyle2(c);
		} else if(this._state === BEFORE_STYLE_3){
			this._stateBeforeStyle3(c);
		} else if(this._state === BEFORE_STYLE_4){
			this._stateBeforeStyle4(c);
		}

		else if(this._state === AFTER_STYLE_1){
			this._stateAfterStyle1(c);
		} else if(this._state === AFTER_STYLE_2){
			this._stateAfterStyle2(c);
		} else if(this._state === AFTER_STYLE_3){
			this._stateAfterStyle3(c);
		} else if(this._state === AFTER_STYLE_4){
			this._stateAfterStyle4(c);
		}

		/*
		* entities
		*/
		else if(this._state === BEFORE_ENTITY){
			this._stateBeforeEntity(c);
		} else if(this._state === BEFORE_NUMERIC_ENTITY){
			this._stateBeforeNumericEntity(c);
		} else if(this._state === IN_NAMED_ENTITY){
			this._stateInNamedEntity(c);
		} else if(this._state === IN_NUMERIC_ENTITY){
			this._stateInNumericEntity(c);
		} else if(this._state === IN_HEX_ENTITY){
			this._stateInHexEntity(c);
		}

		else {
			this._cbs.onerror(Error("unknown _state"), this._state);
		}

		this._index++;
	}

	this._cleanup();
};

Tokenizer.prototype.pause = function(){
	this._running = false;
};
Tokenizer.prototype.resume = function(){
	this._running = true;

	if(this._index < this._buffer.length){
		this._parse();
	}
	if(this._ended){
		this._finish();
	}
};

Tokenizer.prototype.end = function(chunk){
	if(this._ended) this._cbs.onerror(Error(".end() after done!"));
	if(chunk) this.write(chunk);

	this._ended = true;

	if(this._running) this._finish();
};

Tokenizer.prototype._finish = function(){
	//if there is remaining data, emit it in a reasonable way
	if(this._sectionStart < this._index){
		this._handleTrailingData();
	}

	this._cbs.onend();
};

Tokenizer.prototype._handleTrailingData = function(){
	var data = this._buffer.substr(this._sectionStart);

	if(this._state === IN_CDATA || this._state === AFTER_CDATA_1 || this._state === AFTER_CDATA_2){
		this._cbs.oncdata(data);
	} else if(this._state === IN_COMMENT || this._state === AFTER_COMMENT_1 || this._state === AFTER_COMMENT_2){
		this._cbs.oncomment(data);
	} else if(this._state === IN_NAMED_ENTITY && !this._xmlMode){
		this._parseLegacyEntity();
		if(this._sectionStart < this._index){
			this._state = this._baseState;
			this._handleTrailingData();
		}
	} else if(this._state === IN_NUMERIC_ENTITY && !this._xmlMode){
		this._decodeNumericEntity(2, 10);
		if(this._sectionStart < this._index){
			this._state = this._baseState;
			this._handleTrailingData();
		}
	} else if(this._state === IN_HEX_ENTITY && !this._xmlMode){
		this._decodeNumericEntity(3, 16);
		if(this._sectionStart < this._index){
			this._state = this._baseState;
			this._handleTrailingData();
		}
	} else if(
		this._state !== IN_TAG_NAME &&
		this._state !== BEFORE_ATTRIBUTE_NAME &&
		this._state !== BEFORE_ATTRIBUTE_VALUE &&
		this._state !== AFTER_ATTRIBUTE_NAME &&
		this._state !== IN_ATTRIBUTE_NAME &&
		this._state !== IN_ATTRIBUTE_VALUE_SQ &&
		this._state !== IN_ATTRIBUTE_VALUE_DQ &&
		this._state !== IN_ATTRIBUTE_VALUE_NQ &&
		this._state !== IN_CLOSING_TAG_NAME
	){
		this._cbs.ontext(data);
	}
	//else, ignore remaining data
	//TODO add a way to remove current tag
};

Tokenizer.prototype.reset = function(){
	Tokenizer.call(this, {xmlMode: this._xmlMode, decodeEntities: this._decodeEntities}, this._cbs);
};

Tokenizer.prototype.getAbsoluteIndex = function(){
	return this._bufferOffset + this._index;
};

Tokenizer.prototype._getSection = function(){
	return this._buffer.substring(this._sectionStart, this._index);
};

Tokenizer.prototype._emitToken = function(name){
	this._cbs[name](this._getSection());
	this._sectionStart = -1;
};

Tokenizer.prototype._emitPartial = function(value){
	if(this._baseState !== TEXT){
		this._cbs.onattribdata(value); //TODO implement the new event
	} else {
		this._cbs.ontext(value);
	}
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var decodeMap = __webpack_require__(22);

module.exports = decodeCodePoint;

// modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
function decodeCodePoint(codePoint){

	if((codePoint >= 0xD800 && codePoint <= 0xDFFF) || codePoint > 0x10FFFF){
		return "\uFFFD";
	}

	if(codePoint in decodeMap){
		codePoint = decodeMap[codePoint];
	}

	var output = "";

	if(codePoint > 0xFFFF){
		codePoint -= 0x10000;
		output += String.fromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
		codePoint = 0xDC00 | codePoint & 0x3FF;
	}

	output += String.fromCharCode(codePoint);
	return output;
}


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\"","QUOT":"\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\"","QUOT":"\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {"amp":"&","apos":"'","gt":">","lt":"<","quot":"\""}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var isArray = __webpack_require__(29);

module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && isArray(val) === false;
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var SINGLE_TAGS = [
  'area',
  'base',
  'br',
  'col',
  'command',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'menuitem',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
  // Custom (PostHTML)
  'import',
  'include',
  'extend'
]

/**
 * Render PostHTML Tree to HTML
 *
 * @param  {Array|Object} tree PostHTML Tree
 * @param  {Object} options Options
 *
 * @return {String} HTML
 */
function render (tree, options) {
  /**
   * Options
   *
   * @type {Object}
   *
   * @prop {Array<String|RegExp>} singleTags  Custom single tags (selfClosing)
   * @prop {String} closingSingleTag Closing format for single tag
   *
   * Formats:
   *
   * ``` tag: `<br></br>` ```, slash: `<br />` ```, ```default: `<br>` ```
   */
  options = options || {}

  var singleTags = SINGLE_TAGS.concat(options.singleTags || [])
  var singleRegExp = singleTags.filter(function (tag) {
    return tag instanceof RegExp ? tag : false
  })

  var closingSingleTag = options.closingSingleTag

  return html(tree)

  /**
   * HTML Stringifier
   *
   * @param  {Array|Object} tree PostHTML Tree
   *
   * @return {String} result HTML
   */
  function html (tree) {
    var result = ''

    traverse([].concat(tree), function (node) {
      if (!node) return

      if (typeof node === 'string' || typeof node === 'number') {
        result += node

        return
      }

      if (typeof node.tag === 'boolean' && !node.tag) {
        typeof node.content !== 'object' && (result += node.content)

        return node.content
      }

      // treat as new root tree if node is an array
      if (Array.isArray(node)) {
        result += html(node)

        return
      }

      var tag = node.tag || 'div'

      if (isSingleTag(tag, singleTags, singleRegExp)) {
        result += '<' + tag + attrs(node.attrs)

        switch (closingSingleTag) {
          case 'tag':
            result += '></' + tag + '>'

            break
          case 'slash':
            result += ' />'

            break
          default:
            result += '>'
        }
      } else {
        result += '<' + tag + (node.attrs ? attrs(node.attrs) : '') + '>' + (node.content ? html(node.content) : '') + '</' + tag + '>'
      }
    })

    return result
  }
}

/**
 * @module posthtml-render
 *
 * @version 1.0.7
 * @license MIT
 */
module.exports = render

/** @private */
function attrs (obj) {
  var attr = ''

  for (var key in obj) {
    if (typeof obj[key] === 'boolean' && obj[key]) {
      attr += ' ' + key
    } else if (
      typeof obj[key] === 'string' ||
      typeof obj[key] === 'number'
    ) {
      attr += ' ' + key + '="' + obj[key] + '"'
    }
  }

  return attr
}

/** @private */
function traverse (tree, cb) {
  if (Array.isArray(tree)) {
    for (var i = 0, length = tree.length; i < length; i++) {
      traverse(cb(tree[i]), cb)
    }
  } else if (typeof tree === 'object' && tree.hasOwnProperty('content')) {
    traverse(tree.content, cb)
  }

  return tree
}

/** @private */
function isSingleTag (tag, singleTags, singleRegExp) {
  if (singleRegExp.length) {
    for (var i = 0; i < singleRegExp.length; i++) {
      return !!tag.match(singleRegExp[i])
    }
  }

  if (singleTags.indexOf(tag) === -1) {
    return false
  }

  return true
}


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function posthtmlCustomElements(options) {
    options = options || {};
    var defaultTag = options.defaultTag || 'div',
        skipTags = options.skipTags || [],
        html5tags = [
        'a','abbr','address','area','article','aside','audio','b','base','bdi','bdo','blockquote',
        'body','br','button','canvas','caption','cite','code','col','colgroup','datalist','dd','del','details','dfn',
        'dialog','div','dl','dt','em','embed','fieldset','figcaption','figure','footer','form',
        'h1','h2','h3','h4','h5','h6','head','header','hr','html','i','iframe','img','input','ins','kbd','keygen',
        'label','legend','li','link','main','map','mark','menu','menuitem','meta','meter','nav','noscript','object',
        'ol','optgroup','option','output','p','param','pre','progress','q','rp','rt','ruby','s','samp',
        'script','section','select','small','source','span','strong','style','sub','summary','sup',
        'table','tbody','td','textarea','tfoot','th','thead','time','title','tr','track','u','ul','var','video','wbr'
    ];

    return function(tree) {
        tree.walk(function(node) {
            if(node.tag) {
                var tag = node.tag;

                if (skipTags.indexOf(tag) !== -1 || html5tags.indexOf(tag.toLowerCase()) === -1) {

                    node.tag = defaultTag;

                    if (!node.attrs) {
                        node.attrs = { class: tag };
                    }

                    if (node.attrs.tag) {
                        node.tag = node.attrs.tag;
                        delete node.attrs.tag;
                    }

                    if (typeof node.attrs.class !== 'string') {
                        node.attrs.class = tag;
                    }

                    var classes = node.attrs.class.split(' ');
                    if(classes.indexOf(tag) === -1) {
                        node.attrs.class = [tag].concat(classes).join(' ');
                    }

                    return node;
                } else {
                    node.tag = node.tag.toLowerCase();
                }
            }
            return node;
        });
        return tree;
    };
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      on: {
        click: function($event) {
          _vm.count++
        }
      }
    },
    [
      _c("span", [_vm._v("You clicked me " + _vm._s(_vm.count) + " times.")]),
      _vm._v(" "),
      _c("div", { domProps: { innerHTML: _vm._s(_vm.content) } })
    ]
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
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[4]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9oZWxwZXJzL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL21haW4tbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3NvY2lhbC1zaGFyZS1idXR0b25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL1ZsaExpYnJhcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9CdXR0b25Db3VudGVyLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9CdXR0b25Db3VudGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcG9zdGh0bWwvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wb3N0aHRtbC9wYWNrYWdlLmpzb24iLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Bvc3RodG1sL2xpYi9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Bvc3RodG1sLXBhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbHBhcnNlcjIvbGliL1BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbHBhcnNlcjIvbGliL1Rva2VuaXplci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW50aXRpZXMvbGliL2RlY29kZV9jb2RlcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VudGl0aWVzL21hcHMvZGVjb2RlLmpzb24iLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VudGl0aWVzL21hcHMvZW50aXRpZXMuanNvbiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW50aXRpZXMvbWFwcy9sZWdhY3kuanNvbiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW50aXRpZXMvbWFwcy94bWwuanNvbiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcG9zdGh0bWwtcGFyc2VyL25vZGVfbW9kdWxlcy9pc29iamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcG9zdGh0bWwtcmVuZGVyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcG9zdGh0bWwtY3VzdG9tLWVsZW1lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL1ZsaExpYnJhcnkvQnV0dG9uQ291bnRlci52dWU/YWNjZSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/MjVkOSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NyaXRpY2FsLWhvbWUuc2Nzcz8xZWQxIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbGF1bmNoLWxwLXN0eWxlLnNjc3M/OGFjOSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2xwLXN0eWxlLnNjc3M/OTZmMiJdLCJuYW1lcyI6WyJpbml0aWFsaXplVmxoTGlicmFyeSIsImhhbmRsZUFjY29yZGlvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aGVuIiwiaW5pdGlhbGl6ZUFjY29yZGlvbnMiLCJkZWZhdWx0IiwiaGFuZGxlRGVncmVlRmlsdGVyaW5nIiwiY29uc29sZSIsImxvZyIsImRlZ3JlZUZpbHRlcmluZyIsImpRdWVyeSIsInJlYWR5IiwiJCIsIndpbmRvdyIsImxvYWQiLCJyZW1vdmVDbGFzcyIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCJpbnNlcnRTdWJtZW51VG9nZ2xlQnV0dG9ucyIsInN1Ym1lbnVMaW5rcyIsInN1Ym1lbnVCdXR0b25zSFRNTCIsImFmdGVyIiwidG9nZ2xlU3VibWVudVN0YXRlIiwiQ3VycmVudFN1Ym1lbnUiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwiaGFuZGxlQWN0aXZlU3VibWVudSIsIlJlbGV2YW50U3VibWVudXMiLCJhY3RpdmVTdWJtZW51IiwiZmlsdGVyIiwiYWN0aXZlU3VibWVudUJ1dHRvbiIsInByZXYiLCJzbGlkZVVwIiwiTWFpbk1lbnUiLCJNZW51SXRlbXNXaXRoQ2hpbGRyZW4iLCJmaW5kIiwiTGlua3NGb3JTdWJtZW51cyIsIkJ1dHRvbkhUTUwiLCJTdWJtZW51cyIsImNoaWxkcmVuIiwiQ2hpbGRyZW5TdWJtZW51cyIsIlN1Ym1lbnVCdXR0b25zIiwiQ2hpbGRyZW5TdWJtZW51QnV0dG9ucyIsIndpbmRvd1dpZHRoIiwiU2V0dXAiLCJ0b2dnbGVTdWJtZW51IiwiU3VibWVudSIsInNsaWRlVG9nZ2xlIiwic2V0V2luZG93V2lkdGgiLCJ3aWR0aCIsIndpbmRvd1dhdGNoZXIiLCJyZXNpemUiLCJpcyIsInJlbW92ZUF0dHIiLCJuZXdBY3RpdmVTdWJtZW51IiwicGFyZW50cyIsImxhc3QiLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJjbGlja0V2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwibmV4dCIsImhhc09wZW5TdWJtZW51IiwibGVuZ3RoIiwib3BlbmluZ05ld1N1Ym1lbnUiLCJpc0NoaWxkU3VibWVudSIsImhhc09wZW5DaGlsZFN1Ym1lbnUiLCJ3aW4iLCJ3aW5kb3dQb3B1cCIsInVybCIsImhlaWdodCIsImxlZnQiLCJzY3JlZW4iLCJ0b3AiLCJvcGVuIiwiYXR0ciIsIlZ1ZSIsImNvbXBvbmVudCIsIlZsaEFwcEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2bGhBcHAiLCJlbCIsImRhdGEiLCJtc2ciLCJzaG93TW9kYWwiLCJjb21wb25lbnRzIiwiQXN5bmNDb21wb25lbnQiLCJNb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixzQkFBc0I7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3pGQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBQUE7O0FBR0E7O0FBRUEsU0FBU0MsZ0JBQVQsR0FBNEI7QUFDM0IsS0FBS0MsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixNQUF5QyxJQUE5QyxFQUFxRDtBQUNwRCxTQUFPLGdGQUNOQyxJQURNLENBQ0QsZ0NBQXdCO0FBQzdCQyx3QkFBcUJDLE9BQXJCO0FBQ0EsR0FITSxDQUFQO0FBSUE7QUFDRDs7QUFFRCxTQUFTQyxxQkFBVCxHQUFpQztBQUNoQyxLQUFLTCxTQUFTQyxhQUFULENBQXVCLFVBQXZCLE1BQXVDLElBQTVDLEVBQW1EO0FBQ2xELFNBQU8sZ0ZBQ05DLElBRE0sQ0FDRCwyQkFBbUI7QUFDeEJJLFdBQVFDLEdBQVIsQ0FBWUMsZUFBWjtBQUNBO0FBQ0EsR0FKTSxDQUFQO0FBS0E7QUFDRDs7QUFHRDs7QUFFQVQ7QUFDQU0sd0I7Ozs7OztBQ2xDQUksT0FBT1QsUUFBUCxFQUFpQlUsS0FBakIsQ0FBdUIsVUFBU0MsQ0FBVCxFQUFZO0FBQ2xDO0FBQ0FBLEdBQUVDLE1BQUYsRUFBVUMsSUFBVixDQUFlLFlBQVc7QUFDekJGLElBQUUscUJBQUYsRUFBeUJHLFdBQXpCLENBQXFDLE9BQXJDO0FBQ0EsRUFGRDtBQUdBLENBTEQsRSxDQUtJLGlDOzs7Ozs7QUNMSkgsRUFBRSxtQkFBRixFQUF1QkksRUFBdkIsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBU0MsQ0FBVCxFQUFZO0FBQzlDQSxHQUFFQyxjQUFGO0FBQ0FOLEdBQUUsY0FBRixFQUFrQk8sV0FBbEIsQ0FBOEIsU0FBOUI7QUFDQSxDQUhEOztBQUtBO0FBQ0EsQ0FBQyxZQUFXO0FBQ1g7QUFDQSxVQUFTQywwQkFBVCxDQUFvQ0MsWUFBcEMsRUFBa0RDLGtCQUFsRCxFQUFzRTtBQUNyRUQsZUFBYUUsS0FBYixDQUFtQkQsa0JBQW5CO0FBQ0E7O0FBRUQsVUFBU0Usa0JBQVQsQ0FBNEJDLGNBQTVCLEVBQTRDO0FBQzNDLE1BQUlBLGVBQWVDLFFBQWYsQ0FBd0IsUUFBeEIsQ0FBSixFQUF1QztBQUN0Q0Qsa0JBQWVWLFdBQWYsQ0FBMkIsUUFBM0I7QUFDQSxHQUZELE1BRU87QUFDTlUsa0JBQWVFLFFBQWYsQ0FBd0IsUUFBeEI7QUFDQTtBQUNEOztBQUVELFVBQVNDLG1CQUFULENBQTZCQyxnQkFBN0IsRUFBK0M7QUFDOUMsTUFBSUMsZ0JBQWdCRCxpQkFBaUJFLE1BQWpCLENBQXdCLFNBQXhCLENBQXBCO0FBQ0EsTUFBSUMsc0JBQXNCRixjQUFjRyxJQUFkLENBQW1CLGVBQW5CLENBQTFCOztBQUVBRCxzQkFBb0JqQixXQUFwQixDQUFnQyxRQUFoQztBQUNBZSxnQkFBY0ksT0FBZCxDQUFzQixHQUF0QixFQUEyQixPQUEzQixFQUFvQyxZQUFXO0FBQzlDSixpQkFBY2YsV0FBZCxDQUEwQixRQUExQjtBQUNBLEdBRkQ7QUFHQTs7QUFFRDtBQUNBLEtBQUlvQixXQUFXdkIsRUFBRSxxQkFBRixDQUFmO0FBQUEsS0FDQ3dCLHdCQUF3QkQsU0FBU0UsSUFBVCxDQUFjLHlCQUFkLENBRHpCO0FBQUEsS0FFQ0MsbUJBQW1CRixzQkFBc0JDLElBQXRCLENBQTJCLEtBQTNCLENBRnBCO0FBQUEsS0FHQ0UsYUFDQSxrS0FKRDtBQUFBLEtBS0NDLFdBQVdKLHNCQUFzQkssUUFBdEIsQ0FBK0IsV0FBL0IsQ0FMWjtBQUFBLEtBTUNDLG1CQUFtQkYsU0FBU0gsSUFBVCxDQUFjLG1DQUFkLENBTnBCO0FBQUEsS0FPQ00sY0FQRDtBQUFBLEtBUUNDLHNCQVJEO0FBQUEsS0FTQ0MsV0FURDs7QUFXQSxVQUFTQyxLQUFULEdBQWlCO0FBQ2hCSixtQkFBaUJmLFFBQWpCLENBQTBCLGtCQUExQjtBQUNBVyxxQkFBbUJGLHNCQUFzQkMsSUFBdEIsQ0FBMkIsS0FBM0IsQ0FBbkI7QUFDQWpCLDZCQUEyQmtCLGdCQUEzQixFQUE2Q0MsVUFBN0M7QUFDQUksbUJBQWlCL0IsRUFBRSxtQkFBRixDQUFqQjtBQUNBZ0MsMkJBQXlCSixTQUFTSCxJQUFULENBQWMsbUJBQWQsQ0FBekI7QUFDQTs7QUFFRCxVQUFTVSxhQUFULENBQXVCQyxPQUF2QixFQUFnQztBQUMvQkEsVUFBUUMsV0FBUixDQUFvQixHQUFwQixFQUF5QixPQUF6QixFQUFrQyxZQUFXO0FBQzVDekIsc0JBQW1Cd0IsT0FBbkI7QUFDQSxHQUZEO0FBR0E7O0FBRUQsVUFBU0UsY0FBVCxHQUEwQjtBQUN6QkwsZ0JBQWNqQyxFQUFFQyxNQUFGLEVBQVVzQyxLQUFWLEVBQWQ7QUFDQTs7QUFFRCxVQUFTQyxhQUFULEdBQXlCO0FBQ3hCeEMsSUFBRUMsTUFBRixFQUFVd0MsTUFBVixDQUFpQixZQUFXO0FBQzNCSDtBQUNBLE9BQUlMLGNBQWMsSUFBZCxJQUFzQkwsU0FBU2MsRUFBVCxDQUFZLFNBQVosQ0FBMUIsRUFBa0Q7QUFDakRkLGFBQVNlLFVBQVQsQ0FBb0IsT0FBcEI7QUFDQTtBQUNELEdBTEQ7QUFNQTs7QUFFREw7QUFDQUo7QUFDQU07O0FBRUFkLGtCQUFpQnRCLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFlBQVc7QUFDdkMsTUFBSXdDLG1CQUFtQjVDLEVBQUUsSUFBRixFQUNyQjZDLE9BRHFCLENBQ2IsSUFEYSxFQUVyQnBCLElBRnFCLENBRWhCLFdBRmdCLENBQXZCO0FBR0FtQixtQkFBaUI3QixRQUFqQixDQUEwQixRQUExQjs7QUFFQTZCLG1CQUNFbkIsSUFERixDQUNPLEdBRFAsRUFFRXFCLElBRkYsR0FHRTFDLEVBSEYsQ0FHSyxTQUhMLEVBR2dCLFVBQVNDLENBQVQsRUFBWTtBQUMxQixPQUFJQSxFQUFFMEMsT0FBRixJQUFhLENBQWpCLEVBQW9CO0FBQ25CSCxxQkFBaUJ6QyxXQUFqQixDQUE2QixRQUE3QjtBQUNBO0FBQ0QsR0FQRjtBQVFBLEVBZEQ7O0FBZ0JBdUIsa0JBQWlCdEIsRUFBakIsQ0FBb0IsU0FBcEIsRUFBK0IsVUFBU0MsQ0FBVCxFQUFZO0FBQzFDLE1BQUlBLEVBQUUwQyxPQUFGLElBQWEsQ0FBYixJQUFrQjFDLEVBQUUyQyxRQUFGLElBQWMsSUFBcEMsRUFBMEM7QUFDekNoRCxLQUFFLGtCQUFGLEVBQXNCRyxXQUF0QixDQUFrQyxRQUFsQztBQUNBO0FBQ0QsRUFKRDs7QUFNQTRCLGdCQUFlM0IsRUFBZixDQUFrQixPQUFsQixFQUEyQixVQUFTNkMsVUFBVCxFQUFxQjtBQUMvQ0EsYUFBV0MsZUFBWDtBQUNBbEQsSUFBRSxJQUFGLEVBQVFPLFdBQVIsQ0FBb0IsUUFBcEI7O0FBRUEsTUFBSU0saUJBQWlCYixFQUFFLElBQUYsRUFBUW1ELElBQVIsQ0FBYSxXQUFiLENBQXJCO0FBQ0EsTUFBSUMsaUJBQWlCeEIsU0FBU1QsTUFBVCxDQUFnQixTQUFoQixFQUEyQmtDLE1BQTNCLElBQXFDLENBQXJDLEdBQXlDLElBQXpDLEdBQWdELEtBQXJFO0FBQ0EsTUFBSUMsb0JBQW9CekMsZUFBZUMsUUFBZixDQUF3QixRQUF4QixJQUFvQyxLQUFwQyxHQUE0QyxJQUFwRTtBQUNBLE1BQUl5QyxpQkFBaUJ2RCxFQUFFLElBQUYsRUFBUTZDLE9BQVIsQ0FBZ0IsU0FBaEIsRUFBMkJRLE1BQTNCLEdBQW9DLENBQXpEO0FBQ0EsTUFBSUcsc0JBQ0gxQixpQkFBaUJYLE1BQWpCLENBQXdCLFNBQXhCLEVBQW1Da0MsTUFBbkMsSUFBNkMsQ0FBN0MsR0FBaUQsSUFBakQsR0FBd0QsS0FEekQ7O0FBR0EsTUFBSUUsY0FBSixFQUFvQjtBQUNuQixPQUFJQyx1QkFBdUJGLGlCQUEzQixFQUE4QztBQUM3Q3RDLHdCQUFvQmMsZ0JBQXBCO0FBQ0E7QUFDREssaUJBQWN0QixjQUFkO0FBQ0E7O0FBRUQsTUFBSXVDLGtCQUFrQkUsaUJBQWxCLElBQXVDLENBQUNDLGNBQTVDLEVBQTREO0FBQzNEdkMsdUJBQW9CWSxRQUFwQjtBQUNBOztBQUVELE1BQUksQ0FBQzJCLGNBQUwsRUFBcUI7QUFDcEJwQixpQkFBY3RCLGNBQWQ7QUFDQTtBQUNELEVBekJEO0FBMEJBLENBbkhEOztBQXFIQTtBQUNBYixFQUFFQyxNQUFGLEVBQVVHLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFlBQVc7QUFDakMsS0FBSXFELE1BQU16RCxFQUFFLElBQUYsQ0FBVixDQURpQyxDQUNkO0FBQ25CLEtBQUl5RCxJQUFJbEIsS0FBSixNQUFlLEdBQW5CLEVBQXdCO0FBQ3ZCdkMsSUFBRSxXQUFGLEVBQWVHLFdBQWYsQ0FBMkIsUUFBM0I7QUFDQTtBQUNELENBTEQsRTs7Ozs7O0FDNUhBO0FBQ0EsU0FBU3VELFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCcEIsS0FBMUIsRUFBaUNxQixNQUFqQyxFQUF5QztBQUN4QztBQUNBLEtBQUlDLE9BQU9DLE9BQU92QixLQUFQLEdBQWUsQ0FBZixHQUFtQkEsUUFBUSxDQUF0QztBQUFBLEtBQ0N3QixNQUFNRCxPQUFPRixNQUFQLEdBQWdCLENBQWhCLEdBQW9CQSxTQUFTLENBRHBDOztBQUdBM0QsUUFBTytELElBQVAsQ0FDQ0wsR0FERCxFQUVDLEVBRkQsRUFHQyw4REFDQ3BCLEtBREQsR0FFQyxVQUZELEdBR0NxQixNQUhELEdBSUMsT0FKRCxHQUtDRyxHQUxELEdBTUMsUUFORCxHQU9DRixJQVZGO0FBWUE7O0FBRUQ3RCxFQUFFLGNBQUYsRUFBa0JJLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFVBQVNDLENBQVQsRUFBWTtBQUN6Q0EsR0FBRUMsY0FBRjs7QUFFQW9ELGFBQVkxRCxFQUFFLElBQUYsRUFBUWlFLElBQVIsQ0FBYSxNQUFiLENBQVosRUFBa0MsR0FBbEMsRUFBdUMsR0FBdkM7QUFDQSxDQUpELEU7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQSx5REFBZSxZQUFNO0FBQ25CQyxFQUFBLDJDQUFBQSxDQUFJQyxTQUFKLENBQWMsZ0JBQWQsRUFBZ0Msc0RBQWhDOztBQUVBLE1BQU1DLFdBQVcvRSxTQUFTZ0YsY0FBVCxDQUF3QixTQUF4QixDQUFqQjs7QUFFQSxNQUFJRCxRQUFKLEVBQWM7QUFDYixRQUFJRSxTQUFTLElBQUksMkNBQUosQ0FBUTtBQUNwQkMsVUFBSUgsUUFEZ0I7QUFFcEJJLFlBQU07QUFDTEMsYUFBSyxpQkFEQTtBQUVMQyxtQkFBVztBQUZOLE9BRmM7QUFNcEJDLGtCQUFZO0FBQ1hDLHdCQUFnQjtBQUFBLGlCQUFNLCtFQUFOO0FBQUEsU0FETDtBQUVUQyxlQUFPO0FBQUEsaUJBQU0sK0VBQU47QUFBQTtBQUZFO0FBTlEsS0FBUixDQUFiO0FBV0E7QUFDRixDQWxCRCxFOzs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBZ1Q7QUFDaFQ7QUFDQSw2Q0FBNks7QUFDN0s7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7O0FBRUEsSUFNQTs7QUFFQSx3RkFFQTtBQUVBO2NBQ0Esa0NBR0E7QUFMQSxDQUZBOzs7QUFRQTtBQUNBOztBQUVBO1FBRUE7d0JBQ0E7O2FBRUE7ZUFFQTtBQUhBO0FBSUE7QUFQQSxHOzs7Ozs7QUM5QkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckIsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVEsaUNBQWlDLEVBQUU7QUFDeEQsYUFBYSxTQUFTLGlDQUFpQyxFQUFFO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsYUFBYTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osWUFBWSxTQUFTO0FBQ3JCLFlBQVksVUFBVTtBQUN0QixZQUFZLFVBQVU7QUFDdEIsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCLFlBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixhQUFhLE9BQU87QUFDcEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxFQUFFLHFCQUFxQjtBQUNwQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixhQUFhLFNBQVM7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsTUFBTTtBQUNuQixhQUFhLFFBQVEsMEJBQTBCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN2U0Esa0JBQWtCLDRPQUE0TyxrQkFBa0IsaUJBQWlCLCtFQUErRSxvQkFBb0IsMlBBQTJQLFlBQVksdVZBQXVWLHVFQUF1RSxxREFBcUQsRUFBRSwyREFBMkQsRUFBRSx1REFBdUQsaUw7Ozs7Ozs7QUNBcHRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQixZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyQkFBMkI7QUFDdkMsWUFBWSxTQUFTO0FBQ3JCO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCLFdBQVcsRUFBRTtBQUM5RDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esa0JBQWtCLFdBQVcsR0FBRyxnQkFBZ0I7QUFDaEQsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7OztBQ3BKQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCOztBQUV0QiwwQkFBMEIsdUNBQXVDOztBQUVqRTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JJQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLDRCQUE0QjtBQUN4QyxZQUFZLFVBQVU7QUFDdEIsWUFBWSwrQkFBK0I7QUFDM0MsWUFBWSxvQ0FBb0M7QUFDaEQsWUFBWSxVQUFVO0FBQ3RCLFlBQVksU0FBUztBQUNyQixZQUFZLFNBQVM7QUFDckIsWUFBWSxTQUFTO0FBQ3JCLFlBQVksU0FBUztBQUNyQixZQUFZLFNBQVM7QUFDckIsWUFBWSxTQUFTO0FBQ3JCLFlBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUIsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNoV0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUI7O0FBRXpCLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1Qiw2REFBNkQ7QUFDcEY7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLEVBQUU7QUFDRjtBQUNBO0FBQ0E7Ozs7Ozs7QUN6NEJBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pCQSxrQkFBa0IseVM7Ozs7OztBQ0FsQixrQkFBa0Iscy9WQUFzL1YsZ0lBQWdJLHVxU0FBdXFTLGdJQUFnSSxvNERBQW80RCxxcE07Ozs7OztBQ0FuenNCLGtCQUFrQix3dUM7Ozs7OztBQ0FsQixrQkFBa0IsbUQ7Ozs7OztBQ0FsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSCxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ2JBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekIsWUFBWSxPQUFPO0FBQ25CO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxZQUFZLHFCQUFxQjtBQUNqQyxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxhQUFhO0FBQzNCO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxZQUFZO0FBQ3JEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxzQ0FBc0M7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVksaUNBQWlDLEVBQUU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDNUJBLHlDOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUEseUM7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6Ii9qcy9zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICB2YXIgZnVuY3Rpb25hbCA9IG9wdGlvbnMuZnVuY3Rpb25hbFxuICAgIHZhciBleGlzdGluZyA9IGZ1bmN0aW9uYWxcbiAgICAgID8gb3B0aW9ucy5yZW5kZXJcbiAgICAgIDogb3B0aW9ucy5iZWZvcmVDcmVhdGVcblxuICAgIGlmICghZnVuY3Rpb25hbCkge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBleGlzdGluZyhoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCIvKiBSZWd1bGFyIEltcG9ydHNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuaW1wb3J0ICdAL3NjcmlwdHMvaGVscGVycy91dGlsaXRpZXMnXG5pbXBvcnQgJ0Avc2NyaXB0cy9jb21wb25lbnRzL21haW4tbmF2aWdhdGlvbidcbmltcG9ydCAnQC9zY3JpcHRzL2NvbXBvbmVudHMvc29jaWFsLXNoYXJlLWJ1dHRvbnMnXG5pbXBvcnQgaW5pdGlhbGl6ZVZsaExpYnJhcnkgZnJvbSAnQC9zY3JpcHRzL1ZsaExpYnJhcnknXG5pbml0aWFsaXplVmxoTGlicmFyeSgpO1xuXG5cbi8qIER5bmFtaWMgSW1wb3J0cyAtIExvYWRpbmcgYmFzZWQgb24gY29uZGl0aW9uc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiBoYW5kbGVBY2NvcmRpb25zKCkge1xuXHRpZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3JkaW9uXCIpICE9PSBudWxsICkge1xuXHRcdHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJhY2NvcmRpb25cIiAqLyAnQC9zY3JpcHRzL2NvbXBvbmVudHMvYWNjb3JkaW9uJylcblx0XHQudGhlbihpbml0aWFsaXplQWNjb3JkaW9ucyA9PiB7XG5cdFx0XHRpbml0aWFsaXplQWNjb3JkaW9ucy5kZWZhdWx0KCk7XG5cdFx0fSlcblx0fVxufVxuXG5mdW5jdGlvbiBoYW5kbGVEZWdyZWVGaWx0ZXJpbmcoKSB7XG5cdGlmICggZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taXhpdHVwXCIpICE9PSBudWxsICkge1xuXHRcdHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJkZWdyZWUtZmlsdGVyaW5nXCIgKi8gJ0Avc2NyaXB0cy9jb21wb25lbnRzL2RlZ3JlZS1maWx0ZXJpbmcnKVxuXHRcdC50aGVuKGRlZ3JlZUZpbHRlcmluZyA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhkZWdyZWVGaWx0ZXJpbmcpO1xuXHRcdFx0Ly8gRG8gTm90aGluZyBGb3IgTm93XG5cdFx0fSlcblx0fVxufVxuXG5cbi8qIENhbGxpbmcgRHluYW1pYyBJbXBvcnQgRnVuY3Rpb25zXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmhhbmRsZUFjY29yZGlvbnMoKTtcbmhhbmRsZURlZ3JlZUZpbHRlcmluZygpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvc2NyaXB0cy5qcyIsImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xuXHQvLyBSZW1vdmUgU2VsZWN0IG1lbnUgZXJyb3IgY2xhc3NzIG9uIGxvYWRcblx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XG5cdFx0JChcIi5yZXF1ZXN0aW5mbyBzZWxlY3RcIikucmVtb3ZlQ2xhc3MoXCJlcnJvclwiKTtcblx0fSk7XG59KTsgLyogZW5kIG9mIGFzIHBhZ2UgbG9hZCBzY3JpcHRzICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9oZWxwZXJzL3V0aWxpdGllcy5qcyIsIiQoXCIuanNfX21lbnUtdHJpZ2dlclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHQkKFwiLm5hdi13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwidmlzaWJsZVwiKTtcbn0pO1xuXG4vLyBNT0JJTEUgTUVOVSBTVUJNRU5VIEZJWFxuKGZ1bmN0aW9uKCkge1xuXHQvLyBIRUxQRVJTXG5cdGZ1bmN0aW9uIGluc2VydFN1Ym1lbnVUb2dnbGVCdXR0b25zKHN1Ym1lbnVMaW5rcywgc3VibWVudUJ1dHRvbnNIVE1MKSB7XG5cdFx0c3VibWVudUxpbmtzLmFmdGVyKHN1Ym1lbnVCdXR0b25zSFRNTCk7XG5cdH1cblxuXHRmdW5jdGlvbiB0b2dnbGVTdWJtZW51U3RhdGUoQ3VycmVudFN1Ym1lbnUpIHtcblx0XHRpZiAoQ3VycmVudFN1Ym1lbnUuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcblx0XHRcdEN1cnJlbnRTdWJtZW51LnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRDdXJyZW50U3VibWVudS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVBY3RpdmVTdWJtZW51KFJlbGV2YW50U3VibWVudXMpIHtcblx0XHR2YXIgYWN0aXZlU3VibWVudSA9IFJlbGV2YW50U3VibWVudXMuZmlsdGVyKFwiLmFjdGl2ZVwiKTtcblx0XHR2YXIgYWN0aXZlU3VibWVudUJ1dHRvbiA9IGFjdGl2ZVN1Ym1lbnUucHJldihcImJ1dHRvbi5hY3RpdmVcIik7XG5cblx0XHRhY3RpdmVTdWJtZW51QnV0dG9uLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXHRcdGFjdGl2ZVN1Ym1lbnUuc2xpZGVVcCgzNTAsIFwic3dpbmdcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRhY3RpdmVTdWJtZW51LnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gRU5EIE9GIEhFTFBFUlNcblx0dmFyIE1haW5NZW51ID0gJChcIi5oZWFkZXJfX25hdiA+IC5uYXZcIiksXG5cdFx0TWVudUl0ZW1zV2l0aENoaWxkcmVuID0gTWFpbk1lbnUuZmluZChcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpLFxuXHRcdExpbmtzRm9yU3VibWVudXMgPSBNZW51SXRlbXNXaXRoQ2hpbGRyZW4uZmluZChcIj4gYVwiKSxcblx0XHRCdXR0b25IVE1MID1cblx0XHQnPGJ1dHRvbiBjbGFzcz1cInN1Yi1tZW51X190b2dnbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48aW1nIHNyYz1cIi93cC1jb250ZW50L3RoZW1lcy9zdGFydGVyLXRoZW1lL3B1YmxpYy9pbWFnZXMvaWNvbnMvZHJvcGRvd24uc3ZnXCIgYWx0PVwiVG9nZ2xlIFN1YiBNZW51XCI+PC9idXR0b24+Jyxcblx0XHRTdWJtZW51cyA9IE1lbnVJdGVtc1dpdGhDaGlsZHJlbi5jaGlsZHJlbihcIi5zdWItbWVudVwiKSxcblx0XHRDaGlsZHJlblN1Ym1lbnVzID0gU3VibWVudXMuZmluZChcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuIC5zdWItbWVudVwiKSxcblx0XHRTdWJtZW51QnV0dG9ucyxcblx0XHRDaGlsZHJlblN1Ym1lbnVCdXR0b25zLFxuXHRcdHdpbmRvd1dpZHRoO1xuXG5cdGZ1bmN0aW9uIFNldHVwKCkge1xuXHRcdENoaWxkcmVuU3VibWVudXMuYWRkQ2xhc3MoXCJjaGlsZHJlblN1Ym1lbnVzXCIpO1xuXHRcdExpbmtzRm9yU3VibWVudXMgPSBNZW51SXRlbXNXaXRoQ2hpbGRyZW4uZmluZChcIj4gYVwiKTtcblx0XHRpbnNlcnRTdWJtZW51VG9nZ2xlQnV0dG9ucyhMaW5rc0ZvclN1Ym1lbnVzLCBCdXR0b25IVE1MKTtcblx0XHRTdWJtZW51QnV0dG9ucyA9ICQoXCIuc3ViLW1lbnVfX3RvZ2dsZVwiKTtcblx0XHRDaGlsZHJlblN1Ym1lbnVCdXR0b25zID0gU3VibWVudXMuZmluZChcIi5zdWItbWVudV9fdG9nZ2xlXCIpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdG9nZ2xlU3VibWVudShTdWJtZW51KSB7XG5cdFx0U3VibWVudS5zbGlkZVRvZ2dsZSgzNTAsIFwic3dpbmdcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR0b2dnbGVTdWJtZW51U3RhdGUoU3VibWVudSk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRXaW5kb3dXaWR0aCgpIHtcblx0XHR3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gd2luZG93V2F0Y2hlcigpIHtcblx0XHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuXHRcdFx0c2V0V2luZG93V2lkdGgoKTtcblx0XHRcdGlmICh3aW5kb3dXaWR0aCA+IDEwMzkgJiYgU3VibWVudXMuaXMoXCI6aGlkZGVuXCIpKSB7XG5cdFx0XHRcdFN1Ym1lbnVzLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHNldFdpbmRvd1dpZHRoKCk7XG5cdFNldHVwKCk7XG5cdHdpbmRvd1dhdGNoZXIoKTtcblxuXHRMaW5rc0ZvclN1Ym1lbnVzLm9uKFwiZm9jdXNcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0FjdGl2ZVN1Ym1lbnUgPSAkKHRoaXMpXG5cdFx0XHQucGFyZW50cyhcImxpXCIpXG5cdFx0XHQuZmluZChcIi5zdWItbWVudVwiKTtcblx0XHRuZXdBY3RpdmVTdWJtZW51LmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuXG5cdFx0bmV3QWN0aXZlU3VibWVudVxuXHRcdFx0LmZpbmQoXCJhXCIpXG5cdFx0XHQubGFzdCgpXG5cdFx0XHQub24oXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUua2V5Q29kZSA9PSA5KSB7XG5cdFx0XHRcdFx0bmV3QWN0aXZlU3VibWVudS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH0pO1xuXG5cdExpbmtzRm9yU3VibWVudXMub24oXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZiAoZS5rZXlDb2RlID09IDkgJiYgZS5zaGlmdEtleSA9PSB0cnVlKSB7XG5cdFx0XHQkKFwiLnN1Yi1tZW51LmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblx0XHR9XG5cdH0pO1xuXG5cdFN1Ym1lbnVCdXR0b25zLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oY2xpY2tFdmVudCkge1xuXHRcdGNsaWNrRXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcblxuXHRcdHZhciBDdXJyZW50U3VibWVudSA9ICQodGhpcykubmV4dChcIi5zdWItbWVudVwiKTtcblx0XHR2YXIgaGFzT3BlblN1Ym1lbnUgPSBTdWJtZW51cy5maWx0ZXIoXCIuYWN0aXZlXCIpLmxlbmd0aCA+PSAxID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdHZhciBvcGVuaW5nTmV3U3VibWVudSA9IEN1cnJlbnRTdWJtZW51Lmhhc0NsYXNzKFwiYWN0aXZlXCIpID8gZmFsc2UgOiB0cnVlO1xuXHRcdHZhciBpc0NoaWxkU3VibWVudSA9ICQodGhpcykucGFyZW50cyhcIi5hY3RpdmVcIikubGVuZ3RoID4gMTtcblx0XHR2YXIgaGFzT3BlbkNoaWxkU3VibWVudSA9XG5cdFx0XHRDaGlsZHJlblN1Ym1lbnVzLmZpbHRlcihcIi5hY3RpdmVcIikubGVuZ3RoID49IDEgPyB0cnVlIDogZmFsc2U7XG5cblx0XHRpZiAoaXNDaGlsZFN1Ym1lbnUpIHtcblx0XHRcdGlmIChoYXNPcGVuQ2hpbGRTdWJtZW51ICYmIG9wZW5pbmdOZXdTdWJtZW51KSB7XG5cdFx0XHRcdGhhbmRsZUFjdGl2ZVN1Ym1lbnUoQ2hpbGRyZW5TdWJtZW51cyk7XG5cdFx0XHR9XG5cdFx0XHR0b2dnbGVTdWJtZW51KEN1cnJlbnRTdWJtZW51KTtcblx0XHR9XG5cblx0XHRpZiAoaGFzT3BlblN1Ym1lbnUgJiYgb3BlbmluZ05ld1N1Ym1lbnUgJiYgIWlzQ2hpbGRTdWJtZW51KSB7XG5cdFx0XHRoYW5kbGVBY3RpdmVTdWJtZW51KFN1Ym1lbnVzKTtcblx0XHR9XG5cblx0XHRpZiAoIWlzQ2hpbGRTdWJtZW51KSB7XG5cdFx0XHR0b2dnbGVTdWJtZW51KEN1cnJlbnRTdWJtZW51KTtcblx0XHR9XG5cdH0pO1xufSkoKTtcblxuLy8gT24gcmVzaXplIG9mIHdpbmRvdyByZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gaGVhZGVyIHN1YiBtZW51c1xuJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuXHR2YXIgd2luID0gJCh0aGlzKTsgLy90aGlzID0gd2luZG93XG5cdGlmICh3aW4ud2lkdGgoKSA+PSA3NjgpIHtcblx0XHQkKFwiLnN1Yi1tZW51XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXHR9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvbWFpbi1uYXZpZ2F0aW9uLmpzIiwiLy8gTWFraW5nIHNvY2lhbCBzaGFyZSBsaW5rcyBwb3AgdXAgaW4gbmV3IHdpbmRvd1xuZnVuY3Rpb24gd2luZG93UG9wdXAodXJsLCB3aWR0aCwgaGVpZ2h0KSB7XG5cdC8vIENhbGN1bGF0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIHBvcHVwIHNvIGl04oCZcyBjZW50ZXJlZCBvbiB0aGUgc2NyZWVuLlxuXHR2YXIgbGVmdCA9IHNjcmVlbi53aWR0aCAvIDIgLSB3aWR0aCAvIDIsXG5cdFx0dG9wID0gc2NyZWVuLmhlaWdodCAvIDIgLSBoZWlnaHQgLyAyO1xuXG5cdHdpbmRvdy5vcGVuKFxuXHRcdHVybCxcblx0XHRcIlwiLFxuXHRcdFwibWVudWJhcj1ubyx0b29sYmFyPW5vLHJlc2l6YWJsZT15ZXMsc2Nyb2xsYmFycz15ZXMsd2lkdGg9XCIgK1xuXHRcdFx0d2lkdGggK1xuXHRcdFx0XCIsaGVpZ2h0PVwiICtcblx0XHRcdGhlaWdodCArXG5cdFx0XHRcIix0b3A9XCIgK1xuXHRcdFx0dG9wICtcblx0XHRcdFwiLGxlZnQ9XCIgK1xuXHRcdFx0bGVmdFxuXHQpO1xufVxuXG4kKFwiLnNvY2lhbC1saW5rXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0d2luZG93UG9wdXAoJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSwgNTAwLCAzMDApO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3NvY2lhbC1zaGFyZS1idXR0b25zLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgQnV0dG9uQ291bnRlciBmcm9tICcuL0J1dHRvbkNvdW50ZXInXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIFZ1ZS5jb21wb25lbnQoJ2J1dHRvbi1jb3VudGVyJywgQnV0dG9uQ291bnRlcilcblxuICBjb25zdCBWbGhBcHBFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2bGgtYXBwJyk7XG5cbiAgaWYgKFZsaEFwcEVsKSB7XG4gIFx0dmFyIHZsaEFwcCA9IG5ldyBWdWUoe1xuICBcdFx0ZWw6IFZsaEFwcEVsLFxuICBcdFx0ZGF0YToge1xuICBcdFx0XHRtc2c6ICdBIE1lc3NhZ2UgTmV3IDUnLFxuICBcdFx0XHRzaG93TW9kYWw6IGZhbHNlXG4gIFx0XHR9LFxuICBcdFx0Y29tcG9uZW50czoge1xuICBcdFx0XHRBc3luY0NvbXBvbmVudDogKCkgPT4gaW1wb3J0KCdAL3NjcmlwdHMvVmxoTGlicmFyeS9Bc3luY0NvbXBvbmVudC52dWUnKSxcbiAgXHQgICAgTW9kYWw6ICgpID0+IGltcG9ydCgnQC9zY3JpcHRzL1ZsaExpYnJhcnkvTW9kYWwudnVlJylcbiAgXHQgIH1cbiAgXHR9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9WbGhMaWJyYXJ5L2luZGV4LmpzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQnV0dG9uQ291bnRlci52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTBmZDc1Yjc4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQnV0dG9uQ291bnRlci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3NjcmlwdHMvVmxoTGlicmFyeS9CdXR0b25Db3VudGVyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wZmQ3NWI3OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTBmZDc1Yjc4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2NyaXB0cy9WbGhMaWJyYXJ5L0J1dHRvbkNvdW50ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCI8dGVtcGxhdGUgbGFuZz1cImh0bWxcIj5cbiAgPGRpdiB2LW9uOmNsaWNrPVwiY291bnQrK1wiPjxzcGFuPllvdSBjbGlja2VkIG1lIHt7IGNvdW50IH19IHRpbWVzLjwvc3Bhbj5cbiAgICA8ZGl2IHYtaHRtbD1cImNvbnRlbnRcIj48L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHBvc3RodG1sIGZyb20gJ3Bvc3RodG1sJ1xuXG5jb25zdCBodG1sID0gYFxuICA8Y29tcG9uZW50PlxuICAgIDxoMj5TdXBlciBUaXRsZTwvaDI+XG4gICAgPHA+QXdlc29tZSBUZXh0PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJwaHBcIj48P3BocCBlY2hvICdURVNUMSc7ID8+PC9kaXY+XG4gIDwvY29tcG9uZW50PlxuYFxuXG5jb25zdCByZXN1bHQgPSBwb3N0aHRtbCgpXG4gIC51c2UocmVxdWlyZSgncG9zdGh0bWwtY3VzdG9tLWVsZW1lbnRzJykoKSlcbiAgLnByb2Nlc3MoaHRtbCwge1xuICAgIC8vIHN5bmM6IHRydWUsXG4gICAgZGlyZWN0aXZlczogW1xuICAgICAgeyBuYW1lOiAnP3BocCcsIHN0YXJ0OiAnPCcsIGVuZDogJz4nIH1cbiAgICBdXG4gIH0pXG4gIC50aGVuKChyZXN1bHQpID0+ICBjb25zb2xlLmxvZyhyZXN1bHQuaHRtbCkpXG4vLyByZXN1bHQuaHRtbFxuY29uc29sZS5sb2cocmVzdWx0KVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdCdXR0b25Db3VudGVyJyxcbiAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb3VudDogMCxcbiAgICAgIGNvbnRlbnQ6IHJlc3VsdFxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9CdXR0b25Db3VudGVyLnZ1ZSIsInZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJylcblxudmFyIHBrZyA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpXG52YXIgQXBpID0gcmVxdWlyZSgnLi9hcGkuanMnKVxuXG52YXIgcGFyc2VyID0gcmVxdWlyZSgncG9zdGh0bWwtcGFyc2VyJylcbnZhciByZW5kZXIgPSByZXF1aXJlKCdwb3N0aHRtbC1yZW5kZXInKVxuXG4vKipcbiAqIEBhdXRob3IgSXZhbiBWb2lzY2hldiAoQHZvaXNjaGV2KSxcbiAqICAgICAgICAgQW50b24gV2lub2dyYWRvdiAoQGF3aW5vZ3JhZG92KSxcbiAqICAgICAgICAgQWxleGVqIFlhcm9zaGV2aWNoIChAenhxZm94KSxcbiAqICAgICAgICAgVmFzaWxpeSAoQFlldGktb3IpXG4gKlxuICogQHJlcXVpcmVzIGFwaVxuICogQHJlcXVpcmVzIHBvc3RodG1sLXBhcnNlclxuICogQHJlcXVpcmVzIHBvc3RodG1sLXJlbmRlclxuICpcbiAqIEBjb25zdHJ1Y3RvciBQb3N0SFRNTFxuICogQHBhcmFtIHtBcnJheX0gcGx1Z2lucyAtIEFuIGFycmF5IG9mIFBvc3RIVE1MIHBsdWdpbnNcbiAqL1xuZnVuY3Rpb24gUG9zdEhUTUwgKHBsdWdpbnMpIHtcbi8qKlxuICogUG9zdEhUTUwgSW5zdGFuY2VcbiAqXG4gKiBAcHJvcCBwbHVnaW5zXG4gKiBAcHJvcCBvcHRpb25zXG4gKi9cbiAgdGhpcy52ZXJzaW9uID0gcGtnLnZlcnNpb25cbiAgdGhpcy5uYW1lID0gcGtnLm5hbWVcbiAgdGhpcy5wbHVnaW5zID0gdHlwZW9mIHBsdWdpbnMgPT09ICdmdW5jdGlvbicgPyBbcGx1Z2luc10gOiBwbHVnaW5zIHx8IFtdXG5cbiAgLyoqXG4gICAqIFRyZWUgbWVzc2FnZXMgdG8gc3RvcmUgYW5kIHBhc3MgbWV0YWRhdGEgYmV0d2VlbiBwbHVnaW5zXG4gICAqXG4gICAqIEBtZW1iZXJvZiB0cmVlXG4gICAqIEB0eXBlIHtBcnJheX0gbWVzc2FnZXNcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBganNcbiAgICogZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGx1Z2luIChvcHRpb25zID0ge30pIHtcbiAgICogICByZXR1cm4gZnVuY3Rpb24gKHRyZWUpIHtcbiAgICogICAgICB0cmVlLm1lc3NhZ2VzLnB1c2goe1xuICAgKiAgICAgICAgdHlwZTogJ2RlcGVuZGVuY3knLFxuICAgKiAgICAgICAgZmlsZTogJ3BhdGgvdG8vZGVwZW5kZW5jeS5odG1sJyxcbiAgICogICAgICAgIGZyb206IHRyZWUub3B0aW9ucy5mcm9tXG4gICAqICAgICAgfSlcbiAgICpcbiAgICogICAgICByZXR1cm4gdHJlZVxuICAgKiAgIH1cbiAgICogfVxuICAgKiBgYGBcbiAgICovXG4gIHRoaXMubWVzc2FnZXMgPSBbXVxuXG4gIC8vIGV4dGVuZCBhcGkgbWV0aG9kc1xuICBBcGkuY2FsbCh0aGlzKVxufVxuXG4vKipcbiAqIEByZXF1aXJlcyBwb3N0aHRtbC1wYXJzZXJcbiAqXG4gKiBAcGFyYW0gICB7U3RyaW5nfSBodG1sIC0gSW5wdXQgKEhUTUwpXG4gKiBAcmV0dXJucyB7QXJyYXl9ICB0cmVlIC0gUG9zdEhUTUxUcmVlIChKU09OKVxuICovXG5Qb3N0SFRNTC5wYXJzZXIgPSBwYXJzZXJcbi8qKlxuICogQHJlcXVpcmVzIHBvc3RodG1sLXJlbmRlclxuICpcbiAqIEBwYXJhbSAgIHtBcnJheX0gIHRyZWUgLSBQb3N0SFRNTFRyZWUgKEpTT04pXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBodG1sIC0gSFRNTFxuICovXG5Qb3N0SFRNTC5yZW5kZXIgPSByZW5kZXJcblxuLyoqXG4qIEB0aGlzIHBvc3RodG1sXG4qIEBwYXJhbSAgIHtGdW5jdGlvbn0gcGx1Z2luIC0gQSBQb3N0SFRNTCBwbHVnaW5cbiogQHJldHVybnMge0NvbnN0cnVjdG9yfSAtIHRoaXMoUG9zdEhUTUwpXG4qXG4qICoqVXNhZ2UqKlxuKiBgYGBqc1xuKiBwaC51c2UoKHRyZWUpID0+IHsgdGFnOiAnZGl2JywgY29udGVudDogdHJlZSB9KVxuKiAgIC5wcm9jZXNzKCc8aHRtbD4uLjwvaHRtbD4nLCB7fSlcbiogICAudGhlbigocmVzdWx0KSA9PiByZXN1bHQpKVxuKiBgYGBcbiovXG5Qb3N0SFRNTC5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gKCkge1xuICBbXS5wdXNoLmFwcGx5KHRoaXMucGx1Z2lucywgYXJndW1lbnRzKVxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIEBwYXJhbSAgIHtTdHJpbmd9IGh0bWwgLSBJbnB1dCAoSFRNTClcbiAqIEBwYXJhbSAgIHs/T2JqZWN0fSBvcHRpb25zIC0gUG9zdEhUTUwgT3B0aW9uc1xuICogQHJldHVybnMge09iamVjdDx7aHRtbDogU3RyaW5nLCB0cmVlOiBQb3N0SFRNTFRyZWV9Pn0gLSBTeW5jIE1vZGVcbiAqIEByZXR1cm5zIHtQcm9taXNlPHtodG1sOiBTdHJpbmcsIHRyZWU6IFBvc3RIVE1MVHJlZX0+fSAtIEFzeW5jIE1vZGUgKGRlZmF1bHQpXG4gKlxuICogKipVc2FnZSoqXG4gKlxuICogKipTeW5jKipcbiAqIGBgYGpzXG4gKiBwaC5wcm9jZXNzKCc8aHRtbD4uLjwvaHRtbD4nLCB7IHN5bmM6IHRydWUgfSkuaHRtbFxuICogYGBgXG4gKlxuICogKipBc3luYyoqXG4gKiBgYGBqc1xuICogcGgucHJvY2VzcygnPGh0bWw+Li48L2h0bWw+Jywge30pLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0KSlcbiAqIGBgYFxuICovXG5Qb3N0SFRNTC5wcm90b3R5cGUucHJvY2VzcyA9IGZ1bmN0aW9uICh0cmVlLCBvcHRpb25zKSB7XG4gIC8qKlxuICAgKiAjIyBQb3N0SFRNTCBPcHRpb25zXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqIEBwcm9wIHs/Qm9vbGVhbn0gb3B0aW9ucy5zeW5jIC0gZW5hYmxlcyBzeW5jIG1vZGUsIHBsdWdpbnMgd2lsbCBydW4gc3luY2hyb25vdXNseSwgdGhyb3dzIGFuIGVycm9yIHdoZW4gdXNlZCB3aXRoIGFzeW5jIHBsdWdpbnNcbiAgICogQHByb3Agez9GdW5jdGlvbn0gb3B0aW9ucy5wYXJzZXIgLSB1c2UgY3VzdG9tIHBhcnNlciwgcmVwbGFjZXMgZGVmYXVsdCAocG9zdGh0bWwtcGFyc2VyKVxuICAgKiBAcHJvcCB7P0Z1bmN0aW9ufSBvcHRpb25zLnJlbmRlciAtIHVzZSBjdXN0b20gcmVuZGVyLCByZXBsYWNlcyBkZWZhdWx0IChwb3N0aHRtbC1yZW5kZXIpXG4gICAqIEBwcm9wIHs/Qm9vbGVhbn0gb3B0aW9ucy5za2lwUGFyc2UgLSBkaXNhYmxlIHBhcnNpbmdcbiAgICovXG4gIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgaWYgKG9wdGlvbnMucGFyc2VyKSBwYXJzZXIgPSBvcHRpb25zLnBhcnNlclxuICBpZiAob3B0aW9ucy5yZW5kZXIpIHJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG5cbiAgdHJlZSA9IG9wdGlvbnMuc2tpcFBhcnNlXG4gICAgPyB0cmVlIHx8IFtdXG4gICAgOiBwYXJzZXIodHJlZSwgb3B0aW9ucylcblxuICAvLyBzeW5jIG1vZGVcbiAgaWYgKG9wdGlvbnMuc3luYyA9PT0gdHJ1ZSkge1xuICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4sIGluZGV4KSB7XG4gICAgICBfdHJlZUV4dGVuZEFwaSh0cmVlLCB0aGlzKVxuXG4gICAgICB2YXIgcmVzdWx0XG5cbiAgICAgIGlmIChwbHVnaW4ubGVuZ3RoID09PSAyIHx8IGlzUHJvbWlzZShyZXN1bHQgPSBwbHVnaW4odHJlZSkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnQ2Fu4oCZdCBwcm9jZXNzIGNvbnRlbnRzIGluIHN5bmMgbW9kZSBiZWNhdXNlIG9mIGFzeW5jIHBsdWdpbjogJyArIHBsdWdpbi5uYW1lXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgLy8gY2xlYXJpbmcgdGhlIHRyZWUgb2Ygb3B0aW9uc1xuICAgICAgaWYgKGluZGV4ICE9PSB0aGlzLnBsdWdpbnMubGVuZ3RoIC0gMSAmJiAhb3B0aW9ucy5za2lwUGFyc2UpIHtcbiAgICAgICAgdHJlZSA9IFtdLmNvbmNhdCh0cmVlKVxuICAgICAgfVxuXG4gICAgICAvLyByZXR1cm4gdGhlIHByZXZpb3VzIHRyZWUgdW5sZXNzIHJlc3VsdCBpcyBmdWxmaWxsZWRcbiAgICAgIHRyZWUgPSByZXN1bHQgfHwgdHJlZVxuICAgIH0uYmluZCh0aGlzKSlcblxuICAgIHJldHVybiBsYXp5UmVzdWx0KHJlbmRlciwgdHJlZSlcbiAgfVxuXG4gIC8vIGFzeW5jIG1vZGVcbiAgdmFyIGkgPSAwXG5cbiAgdmFyIG5leHQgPSBmdW5jdGlvbiAocmVzdWx0LCBjYikge1xuICAgIF90cmVlRXh0ZW5kQXBpKHJlc3VsdCwgdGhpcylcblxuICAgIC8vIGFsbCBwbHVnaW5zIGNhbGxlZFxuICAgIGlmICh0aGlzLnBsdWdpbnMubGVuZ3RoIDw9IGkpIHtcbiAgICAgIGNiKG51bGwsIHJlc3VsdClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGxpdHRsZSBoZWxwZXIgdG8gZ28gdG8gdGhlIG5leHQgaXRlcmF0aW9uXG4gICAgZnVuY3Rpb24gX25leHQgKHJlcykge1xuICAgICAgaWYgKHJlcyAmJiAhb3B0aW9ucy5za2lwUGFyc2UpIHtcbiAgICAgICAgcmVzID0gW10uY29uY2F0KHJlcylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5leHQocmVzIHx8IHJlc3VsdCwgY2IpXG4gICAgfVxuXG4gICAgLy8gY2FsbCBuZXh0XG4gICAgdmFyIHBsdWdpbiA9IHRoaXMucGx1Z2luc1tpKytdXG5cbiAgICBpZiAocGx1Z2luLmxlbmd0aCA9PT0gMikge1xuICAgICAgcGx1Z2luKHJlc3VsdCwgZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpXG4gICAgICAgIF9uZXh0KHJlcylcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBzeW5jIGFuZCBwcm9taXNlZCBwbHVnaW5zXG4gICAgdmFyIGVyciA9IG51bGxcblxuICAgIHZhciByZXMgPSB0cnlDYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcGx1Z2luKHJlc3VsdClcbiAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgZXJyID0gZVxuICAgICAgcmV0dXJuIGVcbiAgICB9KVxuXG4gICAgaWYgKGVycikge1xuICAgICAgY2IoZXJyKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzUHJvbWlzZShyZXMpKSB7XG4gICAgICByZXMudGhlbihfbmV4dCkuY2F0Y2goY2IpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBfbmV4dChyZXMpXG4gIH0uYmluZCh0aGlzKVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgbmV4dCh0cmVlLCBmdW5jdGlvbiAoZXJyLCB0cmVlKSB7XG4gICAgICBpZiAoZXJyKSByZWplY3QoZXJyKVxuICAgICAgZWxzZSByZXNvbHZlKGxhenlSZXN1bHQocmVuZGVyLCB0cmVlKSlcbiAgICB9KVxuICB9KVxufVxuXG4vKipcbiAqIEBleHBvcnRzIHBvc3RodG1sXG4gKlxuICogQHBhcmFtICB7QXJyYXl9IHBsdWdpbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBwb3N0aHRtbFxuICpcbiAqICoqVXNhZ2UqKlxuICogYGBganNcbiAqIGltcG9ydCBwb3N0aHRtbCBmcm9tICdwb3N0aHRtbCdcbiAqIGltcG9ydCBwbHVnaW4gZnJvbSAncG9zdGh0bWwtcGx1Z2luJ1xuICpcbiAqIGNvbnN0IHBoID0gcG9zdGh0bWwoWyBwbHVnaW4oKSBdKVxuICogYGBgXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBsdWdpbnMpIHtcbiAgcmV0dXJuIG5ldyBQb3N0SFRNTChwbHVnaW5zKVxufVxuXG4vKipcbiAqIEV4dGVuc2lvbiBvZiBvcHRpb25zIHRyZWVcbiAqXG4gKiBAcHJpdmF0ZVxuICpcbiAqIEBwYXJhbSAgIHtBcnJheX0gICAgdHJlZVxuICogQHBhcmFtICAge09iamVjdH0gICBQb3N0SFRNTFxuICogQHJldHVybnMgez8qfVxuICovXG5mdW5jdGlvbiBfdHJlZUV4dGVuZEFwaSAodCwgX3QpIHtcbiAgaWYgKHR5cGVvZiB0ID09PSAnb2JqZWN0Jykge1xuICAgIHQgPSBvYmplY3RBc3NpZ24odCwgX3QpXG4gIH1cbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgcGFyYW1ldGVyIGlzIGEgUHJvbWlzZSAob3IgdGhlbmFibGUpIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICpcbiAqIEBwYXJhbSAgIHsqfSBwcm9taXNlIC0gVGFyZ2V0IGB7fWAgdG8gdGVzdFxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzUHJvbWlzZSAocHJvbWlzZSkge1xuICByZXR1cm4gISFwcm9taXNlICYmIHR5cGVvZiBwcm9taXNlLnRoZW4gPT09ICdmdW5jdGlvbidcbn1cblxuLyoqXG4gKiBTaW1wbGUgdHJ5L2NhdGNoIGhlbHBlciwgaWYgZXhpc3RzLCByZXR1cm5zIHJlc3VsdFxuICpcbiAqIEBwcml2YXRlXG4gKlxuICogQHBhcmFtICAge0Z1bmN0aW9ufSB0cnlGbiAtIHRyeSBibG9ja1xuICogQHBhcmFtICAge0Z1bmN0aW9ufSBjYXRjaEZuIC0gY2F0Y2ggYmxvY2tcbiAqIEByZXR1cm5zIHs/Kn1cbiAqL1xuZnVuY3Rpb24gdHJ5Q2F0Y2ggKHRyeUZuLCBjYXRjaEZuKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHRyeUZuKClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY2F0Y2hGbihlcnIpXG4gIH1cbn1cblxuIC8qKlxuICogV3JhcHMgdGhlIFBvc3RIVE1MVHJlZSB3aXRoaW4gYW4gb2JqZWN0IHVzaW5nIGEgZ2V0dGVyIHRvIHJlbmRlciBIVE1MIG9uIGRlbWFuZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICpcbiAqIEBwYXJhbSAgIHtGdW5jdGlvbn0gcmVuZGVyXG4gKiBAcGFyYW0gICB7QXJyYXl9ICAgIHRyZWVcbiAqIEByZXR1cm5zIHtPYmplY3Q8e2h0bWw6IFN0cmluZywgdHJlZTogQXJyYXl9Pn1cbiAqL1xuZnVuY3Rpb24gbGF6eVJlc3VsdCAocmVuZGVyLCB0cmVlKSB7XG4gIHJldHVybiB7XG4gICAgZ2V0IGh0bWwgKCkge1xuICAgICAgcmV0dXJuIHJlbmRlcih0cmVlLCB0cmVlLm9wdGlvbnMpXG4gICAgfSxcbiAgICB0cmVlOiB0cmVlLFxuICAgIG1lc3NhZ2VzOiB0cmVlLm1lc3NhZ2VzXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Bvc3RodG1sL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJuYW1lXCI6XCJwb3N0aHRtbFwiLFwidmVyc2lvblwiOlwiMC4xMS4zXCIsXCJkZXNjcmlwdGlvblwiOlwiSFRNTC9YTUwgcHJvY2Vzc29yXCIsXCJrZXl3b3Jkc1wiOltcImh0bWxcIixcInhtbFwiLFwicG9zdHByb2NjZXNzb3JcIixcInBhcnNlclwiLFwidHJhbnNmb3JtXCIsXCJ0cmFuc2Zvcm1hdGlvbnNcIixcIm1hbmlwdWxhdGlvblwiLFwicHJlcHJvY2Vzc29yXCIsXCJwcm9jZXNzb3JcIl0sXCJtYWluXCI6XCJsaWJcIixcImZpbGVzXCI6W1wibGliXCJdLFwiZW5naW5lc1wiOntcIm5vZGVcIjpcIj49MC4xMC4wXCJ9LFwiZGVwZW5kZW5jaWVzXCI6e1wib2JqZWN0LWFzc2lnblwiOlwiXjQuMS4xXCIsXCJwb3N0aHRtbC1wYXJzZXJcIjpcIl4wLjMuM1wiLFwicG9zdGh0bWwtcmVuZGVyXCI6XCJeMS4xLjBcIn0sXCJkZXZEZXBlbmRlbmNpZXNcIjp7XCJjaGFpXCI6XCJeMy4wLjBcIixcImNoYWktYXMtcHJvbWlzZWRcIjpcIl42LjAuMFwiLFwiY2hhaS1zdWJzZXRcIjpcIl4xLjEuMFwiLFwiZXM2LXByb21pc2VcIjpcIl40LjAuNVwiLFwiaXN0YW5idWxcIjpcIl4wLjQuMlwiLFwianNkb2MtdG8tbWFya2Rvd25cIjpcIl4zLjAuMFwiLFwibW9jaGFcIjpcIl4zLjQuMFwiLFwibXZlcnNpb25cIjpcIl4xLjEwLjBcIixcIm9iamVjdC5hc3NpZ25cIjpcIl40LjAuM1wiLFwic3RhbmRhcmRcIjpcIl4xMC4wLjJcIixcInN0YW5kYXJkLXZlcnNpb25cIjpcIl40LjIuMFwifSxcInNjcmlwdHNcIjp7XCJsaW50XCI6XCJzdGFuZGFyZFwiLFwidGVzdFwiOlwibnBtIHJ1biBsaW50ICYmIG1vY2hhIC1SIGRvdCAmJiBucG0gcnVuIGNvdmVyXCIsXCJjbGVhblwiOlwicm0gLXJmIGNvdmVyYWdlIGpzZG9jLWFwaVwiLFwiY292ZXJcIjpcImlzdGFuYnVsIGNvdmVyIC0tcmVwb3J0IHRleHQgLS1yZXBvcnQgaHRtbCAtLXJlcG9ydCBsY292IG5vZGVfbW9kdWxlcy9tb2NoYS9iaW4vX21vY2hhIC0tIC1SIHRhcFwiLFwiZG9jczphcGlcIjpcImpzZG9jMm1kIGxpYi9hcGkuanMgPiBkb2NzL2FwaS5tZFwiLFwiZG9jczpjb3JlXCI6XCJqc2RvYzJtZCBsaWIvaW5kZXguanMgPiBkb2NzL2NvcmUubWRcIixcInJlbGVhc2VcIjpcInN0YW5kYXJkLXZlcnNpb25cIn0sXCJhdXRob3JcIjpcIkFudG9uIFdpbm9ncmFkb3YgPHdpbm9ncmFkb3ZhYUBnbWFpbC5jb20+XCIsXCJjb250cmlidXRvcnNcIjpbe1wibmFtZVwiOlwiSXZhbiBWb2lzY2hldlwiLFwiZW1haWxcIjpcInZvaXNjaGV2Lml2YW5AeWEucnVcIn0se1wibmFtZVwiOlwiQW50b24gV2lub2dyYWRvdlwiLFwiZW1haWxcIjpcIndpbm9ncmFkb3ZhYUBnbWFpbC5jb21cIn0se1wibmFtZVwiOlwiQWxleGVqIFlhcm9zaGV2aWNoXCIsXCJlbWFpbFwiOlwienhxZm94QGdtYWlsLmNvbVwifV0sXCJob21lcGFnZVwiOlwiaHR0cHM6Ly9naXRodWIuY29tL3Bvc3RodG1sL3Bvc3RodG1sXCIsXCJyZXBvc2l0b3J5XCI6XCJodHRwczovL2dpdGh1Yi5jb20vcG9zdGh0bWwvcG9zdGh0bWwuZ2l0XCIsXCJidWdzXCI6XCJodHRwczovL2dpdGh1Yi5jb20vcG9zdGh0bWwvcG9zdGh0bWwvaXNzdWVzXCIsXCJsaWNlbnNlXCI6XCJNSVRcIn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wb3N0aHRtbC9wYWNrYWdlLmpzb25cbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqICMgQVBJXG4gKlxuICogQGF1dGhvciBJdmFuIFZvaXNjaGV2IChAdm9pc2NoZXYpLFxuICogICAgICAgICBBbnRvbiBXaW5vZ3JhZG92IChAYXdpbm9ncmFkb3YpLFxuICogICAgICAgICBBbGV4ZWogWWFyb3NoZXZpY2ggKEB6eHFmb3gpLFxuICogICAgICAgICBWYXNpbGl5IChAWWV0aS1vcilcbiAqXG4gKiBAbmFtZXNwYWNlIHRyZWVcbiAqL1xuZnVuY3Rpb24gQXBpICgpIHtcbiAgdGhpcy53YWxrID0gd2Fsa1xuICB0aGlzLm1hdGNoID0gbWF0Y2hcbn1cblxuLyoqXG4gKiBXYWxrcyB0aGUgdHJlZSBhbmQgcGFzc2VzIGFsbCBub2RlcyB2aWEgYSBjYWxsYmFja1xuICpcbiAqIEBtZW1iZXJvZiB0cmVlXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IGNiICBDYWxsYmFja1xuICogQHJldHVybiB7RnVuY3Rpb259ICAgICBDYWxsYmFjayhub2RlKVxuICpcbiAqQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBleHBvcnQgY29uc3Qgd2FsayA9ICh0cmVlKSA9PiB7XG4gKiAgIHRyZWUud2Fsaygobm9kZSkgPT4ge1xuICogICAgIGxldCBjbGFzc2VzID0gbm9kZS5hdHRycyAmJiBub2RlLmF0dHJzLmNsYXNzLnNwbGl0KCcgJykgfHwgW11cbiAqXG4gKiAgICAgaWYgKGNsYXNzZXMuaW5jbHVkZXMoY2xhc3NOYW1lKSkgcmV0dXJuIGNiKG5vZGUpXG4gKiAgICAgICByZXR1cm4gbm9kZVxuICogICB9KVxuICogfVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIHdhbGsgKGNiKSB7XG4gIHJldHVybiB0cmF2ZXJzZSh0aGlzLCBjYilcbn1cblxuLyoqXG4gKiBNYXRjaGVzIGFuIGV4cHJlc3Npb24gdG8gc2VhcmNoIGZvciBub2RlcyBpbiB0aGUgdHJlZVxuICpcbiAqIEBtZW1iZXJvZiB0cmVlXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfFJlZ0V4cHxPYmplY3R8QXJyYXl9IGV4cHJlc3Npb24gLSBNYXRjaGVyKHMpIHRvIHNlYXJjaFxuICogQHBhcmFtICB7RnVuY3Rpb259IGNiIENhbGxiYWNrXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259IENhbGxiYWNrKG5vZGUpXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBleHBvcnQgY29uc3QgbWF0Y2ggPSAodHJlZSkgPT4ge1xuICogICAvLyBTaW5nbGUgbWF0Y2hlclxuICogICB0cmVlLm1hdGNoKHsgdGFnOiAnY3VzdG9tLXRhZycgfSwgKG5vZGUpID0+IHtcbiAqICAgICBsZXQgdGFnID0gbm9kZS50YWdcbiAqXG4gKiAgICAgT2JqZWN0LmFzc2lnbihub2RlLCB7IHRhZzogJ2RpdicsIGF0dHJzOiB7Y2xhc3M6IHRhZ30gfSlcbiAqXG4gKiAgICAgcmV0dXJuIG5vZGVcbiAqICAgfSlcbiAqICAgLy8gTXVsdGlwbGUgbWF0Y2hlcnNcbiAqICAgdHJlZS5tYXRjaChbeyB0YWc6ICdiJyB9LCB7IHRhZzogJ3N0cm9uZycgfV0sIChub2RlKSA9PiB7XG4gKiAgICAgbGV0IHN0eWxlID0gJ2ZvbnQtd2VpZ2h0OiBib2xkOydcbiAqXG4gKiAgICAgbm9kZS50YWcgPSAnc3BhbidcbiAqXG4gKiAgICAgbm9kZS5hdHRyc1xuICogICAgICAgPyAoIG5vZGUuYXR0cnMuc3R5bGVcbiAqICAgICAgICAgPyAoIG5vZGUuYXR0cnMuc3R5bGUgKz0gc3R5bGUgKVxuICogICAgICAgICA6IG5vZGUuYXR0cnMuc3R5bGUgPSBzdHlsZVxuICogICAgICAgKVxuICogICAgICAgOiBub2RlLmF0dHJzID0geyBzdHlsZTogc3R5bGUgfVxuICpcbiAqICAgICByZXR1cm4gbm9kZVxuICogICB9KVxuICogfVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIG1hdGNoIChleHByZXNzaW9uLCBjYikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShleHByZXNzaW9uKVxuICAgID8gdHJhdmVyc2UodGhpcywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwcmVzc2lvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY29tcGFyZShleHByZXNzaW9uW2ldLCBub2RlKSkgcmV0dXJuIGNiKG5vZGUpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub2RlXG4gICAgfSlcbiAgICA6IHRyYXZlcnNlKHRoaXMsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBpZiAoY29tcGFyZShleHByZXNzaW9uLCBub2RlKSkgcmV0dXJuIGNiKG5vZGUpXG5cbiAgICAgIHJldHVybiBub2RlXG4gICAgfSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcGlcbm1vZHVsZS5leHBvcnRzLm1hdGNoID0gbWF0Y2hcbm1vZHVsZS5leHBvcnRzLndhbGsgPSB3YWxrXG5cbi8qKiBAcHJpdmF0ZSAqL1xuZnVuY3Rpb24gdHJhdmVyc2UgKHRyZWUsIGNiKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHRyZWUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0cmVlW2ldID0gdHJhdmVyc2UoY2IodHJlZVtpXSksIGNiKVxuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICAgIHRyZWUgJiZcbiAgICAgIHR5cGVvZiB0cmVlID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHJlZS5oYXNPd25Qcm9wZXJ0eSgnY29udGVudCcpXG4gICkgdHJhdmVyc2UodHJlZS5jb250ZW50LCBjYilcblxuICByZXR1cm4gdHJlZVxufVxuXG4vKiogQHByaXZhdGUgKi9cbmZ1bmN0aW9uIGNvbXBhcmUgKGV4cGVjdGVkLCBhY3R1YWwpIHtcbiAgaWYgKGV4cGVjdGVkIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgaWYgKHR5cGVvZiBhY3R1YWwgPT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2VcbiAgICBpZiAodHlwZW9mIGFjdHVhbCA9PT0gJ3N0cmluZycpIHJldHVybiBleHBlY3RlZC50ZXN0KGFjdHVhbClcbiAgfVxuXG4gIGlmICh0eXBlb2YgZXhwZWN0ZWQgIT09IHR5cGVvZiBhY3R1YWwpIHJldHVybiBmYWxzZVxuICBpZiAodHlwZW9mIGV4cGVjdGVkICE9PSAnb2JqZWN0JyB8fCBleHBlY3RlZCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBleHBlY3RlZCA9PT0gYWN0dWFsXG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gZXhwZWN0ZWQuZXZlcnkoZnVuY3Rpb24gKGV4cCkge1xuICAgICAgcmV0dXJuIFtdLnNvbWUuY2FsbChhY3R1YWwsIGZ1bmN0aW9uIChhY3QpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmUoZXhwLCBhY3QpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmtleXMoZXhwZWN0ZWQpLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgYW8gPSBhY3R1YWxba2V5XVxuICAgIHZhciBlbyA9IGV4cGVjdGVkW2tleV1cblxuICAgIGlmICh0eXBlb2YgZW8gPT09ICdvYmplY3QnICYmIGVvICE9PSBudWxsICYmIGFvICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gY29tcGFyZShlbywgYW8pXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW8gPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIGVvICE9PSAoYW8gPT0gbnVsbClcbiAgICB9XG5cbiAgICByZXR1cm4gYW8gPT09IGVvXG4gIH0pXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wb3N0aHRtbC9saWIvYXBpLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCIndXNlIHN0cmljdCc7XG5cbnZhciBQYXJzZXIgPSByZXF1aXJlKCdodG1scGFyc2VyMi9saWIvUGFyc2VyJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCdpc29iamVjdCcpO1xudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYjU1L2h0bWxwYXJzZXIyL3dpa2kvUGFyc2VyLW9wdGlvbnNcbiAqL1xudmFyIGRlZmF1bHRPcHRpb25zID0ge2xvd2VyQ2FzZVRhZ3M6IGZhbHNlLCBsb3dlckNhc2VBdHRyaWJ1dGVOYW1lczogZmFsc2V9O1xuXG52YXIgZGVmYXVsdERpcmVjdGl2ZXMgPSBbe25hbWU6ICchZG9jdHlwZScsIHN0YXJ0OiAnPCcsIGVuZDogJz4nfV07XG5cbi8qKlxuICogUGFyc2UgaHRtbCB0byBQb3N0SFRNTFRyZWVcbiAqIEBwYXJhbSAge1N0cmluZ30gaHRtbFxuICogQHBhcmFtICB7T2JqZWN0fSBbb3B0aW9ucz1kZWZhdWx0T3B0aW9uc11cbiAqIEByZXR1cm4ge1Bvc3RIVE1MVHJlZX1cbiAqL1xuZnVuY3Rpb24gcG9zdEhUTUxQYXJzZXIoaHRtbCwgb3B0aW9ucykge1xuICAgIHZhciBidWZBcnJheSA9IFtdLFxuICAgICAgICByZXN1bHRzID0gW107XG5cbiAgICBidWZBcnJheS5sYXN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHBhcnNlckRpcmVjdGl2ZShuYW1lLCBkYXRhKSB7XG4gICAgICAgIHZhciBkaXJlY3RpdmVzID0gW10uY29uY2F0KGRlZmF1bHREaXJlY3RpdmVzLCBvcHRpb25zLmRpcmVjdGl2ZXMgfHwgW10pO1xuICAgICAgICB2YXIgbGFzdCA9IGJ1ZkFycmF5Lmxhc3QoKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpcmVjdGl2ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBkaXJlY3RpdmUgPSBkaXJlY3RpdmVzW2ldO1xuICAgICAgICAgICAgdmFyIGRpcmVjdGl2ZVRleHQgPSBkaXJlY3RpdmUuc3RhcnQgKyBkYXRhICsgZGlyZWN0aXZlLmVuZDtcblxuICAgICAgICAgICAgaWYgKG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gZGlyZWN0aXZlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGRpcmVjdGl2ZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGFzdC5jb250ZW50IHx8IChsYXN0LmNvbnRlbnQgPSBbXSk7XG4gICAgICAgICAgICAgICAgbGFzdC5jb250ZW50LnB1c2goZGlyZWN0aXZlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBub3JtYWxpemVBcnJpYnV0ZXMoYXR0cnMpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgICAgICAgICAgICBvYmpba2V5XSA9IGF0dHJzW2tleV0ucmVwbGFjZSgvJnF1b3Q7L2csICdcIicpO1xuICAgICAgICAgICAgb2JqZWN0QXNzaWduKHJlc3VsdCwgb2JqKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB2YXIgcGFyc2VyID0gbmV3IFBhcnNlcih7XG4gICAgICAgIG9ucHJvY2Vzc2luZ2luc3RydWN0aW9uOiBwYXJzZXJEaXJlY3RpdmUsXG4gICAgICAgIG9uY29tbWVudDogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSAnPCEtLScgKyBkYXRhICsgJy0tPicsXG4gICAgICAgICAgICAgICAgbGFzdCA9IGJ1ZkFycmF5Lmxhc3QoKTtcblxuICAgICAgICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGNvbW1lbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFzdC5jb250ZW50IHx8IChsYXN0LmNvbnRlbnQgPSBbXSk7XG4gICAgICAgICAgICBsYXN0LmNvbnRlbnQucHVzaChjb21tZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25vcGVudGFnOiBmdW5jdGlvbih0YWcsIGF0dHJzKSB7XG4gICAgICAgICAgICB2YXIgYnVmID0geyB0YWc6IHRhZyB9O1xuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoYXR0cnMpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGJ1Zi5hdHRycyA9IG5vcm1hbGl6ZUFycmlidXRlcyhhdHRycyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1ZkFycmF5LnB1c2goYnVmKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25jbG9zZXRhZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgYnVmID0gYnVmQXJyYXkucG9wKCk7XG5cbiAgICAgICAgICAgIGlmICghYnVmQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGJ1Zik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbGFzdCA9IGJ1ZkFycmF5Lmxhc3QoKTtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShsYXN0LmNvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgbGFzdC5jb250ZW50ID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxhc3QuY29udGVudC5wdXNoKGJ1Zik7XG4gICAgICAgIH0sXG4gICAgICAgIG9udGV4dDogZnVuY3Rpb24odGV4dCkge1xuICAgICAgICAgICAgdmFyIGxhc3QgPSBidWZBcnJheS5sYXN0KCk7XG4gICAgICAgICAgICBpZiAoIWxhc3QpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2godGV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYXN0LmNvbnRlbnQgfHwgKGxhc3QuY29udGVudCA9IFtdKTtcbiAgICAgICAgICAgIGxhc3QuY29udGVudC5wdXNoKHRleHQpO1xuICAgICAgICB9XG4gICAgfSwgb3B0aW9ucyB8fCBkZWZhdWx0T3B0aW9ucyk7XG5cbiAgICBwYXJzZXIud3JpdGUoaHRtbCk7XG4gICAgcGFyc2VyLmVuZCgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbmZ1bmN0aW9uIHBhcnNlcldyYXBwZXIoKSB7XG4gICAgdmFyIG9wdGlvbjtcblxuICAgIGZ1bmN0aW9uIHBhcnNlcihodG1sKSB7XG4gICAgICAgIHZhciBvcHQgPSBvYmplY3RBc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbik7XG4gICAgICAgIHJldHVybiBwb3N0SFRNTFBhcnNlcihodG1sLCBvcHQpO1xuICAgIH1cblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIGlzT2JqZWN0KGFyZ3VtZW50c1swXSkpIHtcbiAgICAgICAgb3B0aW9uID0gYXJndW1lbnRzWzBdO1xuICAgICAgICByZXR1cm4gcGFyc2VyO1xuICAgIH1cblxuICAgIG9wdGlvbiA9IGFyZ3VtZW50c1sxXTtcbiAgICByZXR1cm4gcGFyc2VyKGFyZ3VtZW50c1swXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VyV3JhcHBlcjtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHRPcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0RGlyZWN0aXZlcyA9IGRlZmF1bHREaXJlY3RpdmVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcG9zdGh0bWwtcGFyc2VyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJ2YXIgVG9rZW5pemVyID0gcmVxdWlyZShcIi4vVG9rZW5pemVyLmpzXCIpO1xuXG4vKlxuXHRPcHRpb25zOlxuXG5cdHhtbE1vZGU6IERpc2FibGVzIHRoZSBzcGVjaWFsIGJlaGF2aW9yIGZvciBzY3JpcHQvc3R5bGUgdGFncyAoZmFsc2UgYnkgZGVmYXVsdClcblx0bG93ZXJDYXNlQXR0cmlidXRlTmFtZXM6IGNhbGwgLnRvTG93ZXJDYXNlIGZvciBlYWNoIGF0dHJpYnV0ZSBuYW1lICh0cnVlIGlmIHhtbE1vZGUgaXMgYGZhbHNlYClcblx0bG93ZXJDYXNlVGFnczogY2FsbCAudG9Mb3dlckNhc2UgZm9yIGVhY2ggdGFnIG5hbWUgKHRydWUgaWYgeG1sTW9kZSBpcyBgZmFsc2VgKVxuKi9cblxuLypcblx0Q2FsbGJhY2tzOlxuXG5cdG9uY2RhdGFlbmQsXG5cdG9uY2RhdGFzdGFydCxcblx0b25jbG9zZXRhZyxcblx0b25jb21tZW50LFxuXHRvbmNvbW1lbnRlbmQsXG5cdG9uZXJyb3IsXG5cdG9ub3BlbnRhZyxcblx0b25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24sXG5cdG9ucmVzZXQsXG5cdG9udGV4dFxuKi9cblxudmFyIGZvcm1UYWdzID0ge1xuXHRpbnB1dDogdHJ1ZSxcblx0b3B0aW9uOiB0cnVlLFxuXHRvcHRncm91cDogdHJ1ZSxcblx0c2VsZWN0OiB0cnVlLFxuXHRidXR0b246IHRydWUsXG5cdGRhdGFsaXN0OiB0cnVlLFxuXHR0ZXh0YXJlYTogdHJ1ZVxufTtcblxudmFyIG9wZW5JbXBsaWVzQ2xvc2UgPSB7XG5cdHRyICAgICAgOiB7IHRyOnRydWUsIHRoOnRydWUsIHRkOnRydWUgfSxcblx0dGggICAgICA6IHsgdGg6dHJ1ZSB9LFxuXHR0ZCAgICAgIDogeyB0aGVhZDp0cnVlLCB0aDp0cnVlLCB0ZDp0cnVlIH0sXG5cdGJvZHkgICAgOiB7IGhlYWQ6dHJ1ZSwgbGluazp0cnVlLCBzY3JpcHQ6dHJ1ZSB9LFxuXHRsaSAgICAgIDogeyBsaTp0cnVlIH0sXG5cdHAgICAgICAgOiB7IHA6dHJ1ZSB9LFxuXHRoMSAgICAgIDogeyBwOnRydWUgfSxcblx0aDIgICAgICA6IHsgcDp0cnVlIH0sXG5cdGgzICAgICAgOiB7IHA6dHJ1ZSB9LFxuXHRoNCAgICAgIDogeyBwOnRydWUgfSxcblx0aDUgICAgICA6IHsgcDp0cnVlIH0sXG5cdGg2ICAgICAgOiB7IHA6dHJ1ZSB9LFxuXHRzZWxlY3QgIDogZm9ybVRhZ3MsXG5cdGlucHV0ICAgOiBmb3JtVGFncyxcblx0b3V0cHV0ICA6IGZvcm1UYWdzLFxuXHRidXR0b24gIDogZm9ybVRhZ3MsXG5cdGRhdGFsaXN0OiBmb3JtVGFncyxcblx0dGV4dGFyZWE6IGZvcm1UYWdzLFxuXHRvcHRpb24gIDogeyBvcHRpb246dHJ1ZSB9LFxuXHRvcHRncm91cDogeyBvcHRncm91cDp0cnVlIH1cbn07XG5cbnZhciB2b2lkRWxlbWVudHMgPSB7XG5cdF9fcHJvdG9fXzogbnVsbCxcblx0YXJlYTogdHJ1ZSxcblx0YmFzZTogdHJ1ZSxcblx0YmFzZWZvbnQ6IHRydWUsXG5cdGJyOiB0cnVlLFxuXHRjb2w6IHRydWUsXG5cdGNvbW1hbmQ6IHRydWUsXG5cdGVtYmVkOiB0cnVlLFxuXHRmcmFtZTogdHJ1ZSxcblx0aHI6IHRydWUsXG5cdGltZzogdHJ1ZSxcblx0aW5wdXQ6IHRydWUsXG5cdGlzaW5kZXg6IHRydWUsXG5cdGtleWdlbjogdHJ1ZSxcblx0bGluazogdHJ1ZSxcblx0bWV0YTogdHJ1ZSxcblx0cGFyYW06IHRydWUsXG5cdHNvdXJjZTogdHJ1ZSxcblx0dHJhY2s6IHRydWUsXG5cdHdicjogdHJ1ZSxcblxuXHQvL2NvbW1vbiBzZWxmIGNsb3Npbmcgc3ZnIGVsZW1lbnRzXG5cdHBhdGg6IHRydWUsXG5cdGNpcmNsZTogdHJ1ZSxcblx0ZWxsaXBzZTogdHJ1ZSxcblx0bGluZTogdHJ1ZSxcblx0cmVjdDogdHJ1ZSxcblx0dXNlOiB0cnVlLFxuXHRzdG9wOiB0cnVlLFxuXHRwb2x5bGluZTogdHJ1ZSxcblx0cG9seWdvbjogdHJ1ZVxufTtcblxudmFyIHJlX25hbWVFbmQgPSAvXFxzfFxcLy87XG5cbmZ1bmN0aW9uIFBhcnNlcihjYnMsIG9wdGlvbnMpe1xuXHR0aGlzLl9vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0dGhpcy5fY2JzID0gY2JzIHx8IHt9O1xuXG5cdHRoaXMuX3RhZ25hbWUgPSBcIlwiO1xuXHR0aGlzLl9hdHRyaWJuYW1lID0gXCJcIjtcblx0dGhpcy5fYXR0cmlidmFsdWUgPSBcIlwiO1xuXHR0aGlzLl9hdHRyaWJzID0gbnVsbDtcblx0dGhpcy5fc3RhY2sgPSBbXTtcblxuXHR0aGlzLnN0YXJ0SW5kZXggPSAwO1xuXHR0aGlzLmVuZEluZGV4ID0gbnVsbDtcblxuXHR0aGlzLl9sb3dlckNhc2VUYWdOYW1lcyA9IFwibG93ZXJDYXNlVGFnc1wiIGluIHRoaXMuX29wdGlvbnMgP1xuXHRcdFx0XHRcdFx0XHRcdFx0ISF0aGlzLl9vcHRpb25zLmxvd2VyQ2FzZVRhZ3MgOlxuXHRcdFx0XHRcdFx0XHRcdFx0IXRoaXMuX29wdGlvbnMueG1sTW9kZTtcblx0dGhpcy5fbG93ZXJDYXNlQXR0cmlidXRlTmFtZXMgPSBcImxvd2VyQ2FzZUF0dHJpYnV0ZU5hbWVzXCIgaW4gdGhpcy5fb3B0aW9ucyA/XG5cdFx0XHRcdFx0XHRcdFx0XHQhIXRoaXMuX29wdGlvbnMubG93ZXJDYXNlQXR0cmlidXRlTmFtZXMgOlxuXHRcdFx0XHRcdFx0XHRcdFx0IXRoaXMuX29wdGlvbnMueG1sTW9kZTtcblxuXHRpZih0aGlzLl9vcHRpb25zLlRva2VuaXplcikge1xuXHRcdFRva2VuaXplciA9IHRoaXMuX29wdGlvbnMuVG9rZW5pemVyO1xuXHR9XG5cdHRoaXMuX3Rva2VuaXplciA9IG5ldyBUb2tlbml6ZXIodGhpcy5fb3B0aW9ucywgdGhpcyk7XG5cblx0aWYodGhpcy5fY2JzLm9ucGFyc2VyaW5pdCkgdGhpcy5fY2JzLm9ucGFyc2VyaW5pdCh0aGlzKTtcbn1cblxucmVxdWlyZShcImluaGVyaXRzXCIpKFBhcnNlciwgcmVxdWlyZShcImV2ZW50c1wiKS5FdmVudEVtaXR0ZXIpO1xuXG5QYXJzZXIucHJvdG90eXBlLl91cGRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uKGluaXRpYWxPZmZzZXQpe1xuXHRpZih0aGlzLmVuZEluZGV4ID09PSBudWxsKXtcblx0XHRpZih0aGlzLl90b2tlbml6ZXIuX3NlY3Rpb25TdGFydCA8PSBpbml0aWFsT2Zmc2V0KXtcblx0XHRcdHRoaXMuc3RhcnRJbmRleCA9IDA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc3RhcnRJbmRleCA9IHRoaXMuX3Rva2VuaXplci5fc2VjdGlvblN0YXJ0IC0gaW5pdGlhbE9mZnNldDtcblx0XHR9XG5cdH1cblx0ZWxzZSB0aGlzLnN0YXJ0SW5kZXggPSB0aGlzLmVuZEluZGV4ICsgMTtcblx0dGhpcy5lbmRJbmRleCA9IHRoaXMuX3Rva2VuaXplci5nZXRBYnNvbHV0ZUluZGV4KCk7XG59O1xuXG4vL1Rva2VuaXplciBldmVudCBoYW5kbGVyc1xuUGFyc2VyLnByb3RvdHlwZS5vbnRleHQgPSBmdW5jdGlvbihkYXRhKXtcblx0dGhpcy5fdXBkYXRlUG9zaXRpb24oMSk7XG5cdHRoaXMuZW5kSW5kZXgtLTtcblxuXHRpZih0aGlzLl9jYnMub250ZXh0KSB0aGlzLl9jYnMub250ZXh0KGRhdGEpO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5vbm9wZW50YWduYW1lID0gZnVuY3Rpb24obmFtZSl7XG5cdGlmKHRoaXMuX2xvd2VyQ2FzZVRhZ05hbWVzKXtcblx0XHRuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0dGhpcy5fdGFnbmFtZSA9IG5hbWU7XG5cblx0aWYoIXRoaXMuX29wdGlvbnMueG1sTW9kZSAmJiBuYW1lIGluIG9wZW5JbXBsaWVzQ2xvc2UpIHtcblx0XHRmb3IoXG5cdFx0XHR2YXIgZWw7XG5cdFx0XHQoZWwgPSB0aGlzLl9zdGFja1t0aGlzLl9zdGFjay5sZW5ndGggLSAxXSkgaW4gb3BlbkltcGxpZXNDbG9zZVtuYW1lXTtcblx0XHRcdHRoaXMub25jbG9zZXRhZyhlbClcblx0XHQpO1xuXHR9XG5cblx0aWYodGhpcy5fb3B0aW9ucy54bWxNb2RlIHx8ICEobmFtZSBpbiB2b2lkRWxlbWVudHMpKXtcblx0XHR0aGlzLl9zdGFjay5wdXNoKG5hbWUpO1xuXHR9XG5cblx0aWYodGhpcy5fY2JzLm9ub3BlbnRhZ25hbWUpIHRoaXMuX2Nicy5vbm9wZW50YWduYW1lKG5hbWUpO1xuXHRpZih0aGlzLl9jYnMub25vcGVudGFnKSB0aGlzLl9hdHRyaWJzID0ge307XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm9ub3BlbnRhZ2VuZCA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuX3VwZGF0ZVBvc2l0aW9uKDEpO1xuXG5cdGlmKHRoaXMuX2F0dHJpYnMpe1xuXHRcdGlmKHRoaXMuX2Nicy5vbm9wZW50YWcpIHRoaXMuX2Nicy5vbm9wZW50YWcodGhpcy5fdGFnbmFtZSwgdGhpcy5fYXR0cmlicyk7XG5cdFx0dGhpcy5fYXR0cmlicyA9IG51bGw7XG5cdH1cblxuXHRpZighdGhpcy5fb3B0aW9ucy54bWxNb2RlICYmIHRoaXMuX2Nicy5vbmNsb3NldGFnICYmIHRoaXMuX3RhZ25hbWUgaW4gdm9pZEVsZW1lbnRzKXtcblx0XHR0aGlzLl9jYnMub25jbG9zZXRhZyh0aGlzLl90YWduYW1lKTtcblx0fVxuXG5cdHRoaXMuX3RhZ25hbWUgPSBcIlwiO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5vbmNsb3NldGFnID0gZnVuY3Rpb24obmFtZSl7XG5cdHRoaXMuX3VwZGF0ZVBvc2l0aW9uKDEpO1xuXG5cdGlmKHRoaXMuX2xvd2VyQ2FzZVRhZ05hbWVzKXtcblx0XHRuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0aWYodGhpcy5fc3RhY2subGVuZ3RoICYmICghKG5hbWUgaW4gdm9pZEVsZW1lbnRzKSB8fCB0aGlzLl9vcHRpb25zLnhtbE1vZGUpKXtcblx0XHR2YXIgcG9zID0gdGhpcy5fc3RhY2subGFzdEluZGV4T2YobmFtZSk7XG5cdFx0aWYocG9zICE9PSAtMSl7XG5cdFx0XHRpZih0aGlzLl9jYnMub25jbG9zZXRhZyl7XG5cdFx0XHRcdHBvcyA9IHRoaXMuX3N0YWNrLmxlbmd0aCAtIHBvcztcblx0XHRcdFx0d2hpbGUocG9zLS0pIHRoaXMuX2Nicy5vbmNsb3NldGFnKHRoaXMuX3N0YWNrLnBvcCgpKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgdGhpcy5fc3RhY2subGVuZ3RoID0gcG9zO1xuXHRcdH0gZWxzZSBpZihuYW1lID09PSBcInBcIiAmJiAhdGhpcy5fb3B0aW9ucy54bWxNb2RlKXtcblx0XHRcdHRoaXMub25vcGVudGFnbmFtZShuYW1lKTtcblx0XHRcdHRoaXMuX2Nsb3NlQ3VycmVudFRhZygpO1xuXHRcdH1cblx0fSBlbHNlIGlmKCF0aGlzLl9vcHRpb25zLnhtbE1vZGUgJiYgKG5hbWUgPT09IFwiYnJcIiB8fCBuYW1lID09PSBcInBcIikpe1xuXHRcdHRoaXMub25vcGVudGFnbmFtZShuYW1lKTtcblx0XHR0aGlzLl9jbG9zZUN1cnJlbnRUYWcoKTtcblx0fVxufTtcblxuUGFyc2VyLnByb3RvdHlwZS5vbnNlbGZjbG9zaW5ndGFnID0gZnVuY3Rpb24oKXtcblx0aWYodGhpcy5fb3B0aW9ucy54bWxNb2RlIHx8IHRoaXMuX29wdGlvbnMucmVjb2duaXplU2VsZkNsb3Npbmcpe1xuXHRcdHRoaXMuX2Nsb3NlQ3VycmVudFRhZygpO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMub25vcGVudGFnZW5kKCk7XG5cdH1cbn07XG5cblBhcnNlci5wcm90b3R5cGUuX2Nsb3NlQ3VycmVudFRhZyA9IGZ1bmN0aW9uKCl7XG5cdHZhciBuYW1lID0gdGhpcy5fdGFnbmFtZTtcblxuXHR0aGlzLm9ub3BlbnRhZ2VuZCgpO1xuXG5cdC8vc2VsZi1jbG9zaW5nIHRhZ3Mgd2lsbCBiZSBvbiB0aGUgdG9wIG9mIHRoZSBzdGFja1xuXHQvLyhjaGVhcGVyIGNoZWNrIHRoYW4gaW4gb25jbG9zZXRhZylcblx0aWYodGhpcy5fc3RhY2tbdGhpcy5fc3RhY2subGVuZ3RoIC0gMV0gPT09IG5hbWUpe1xuXHRcdGlmKHRoaXMuX2Nicy5vbmNsb3NldGFnKXtcblx0XHRcdHRoaXMuX2Nicy5vbmNsb3NldGFnKG5hbWUpO1xuXHRcdH1cblx0XHR0aGlzLl9zdGFjay5wb3AoKTtcblx0fVxufTtcblxuUGFyc2VyLnByb3RvdHlwZS5vbmF0dHJpYm5hbWUgPSBmdW5jdGlvbihuYW1lKXtcblx0aWYodGhpcy5fbG93ZXJDYXNlQXR0cmlidXRlTmFtZXMpe1xuXHRcdG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cdH1cblx0dGhpcy5fYXR0cmlibmFtZSA9IG5hbWU7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm9uYXR0cmliZGF0YSA9IGZ1bmN0aW9uKHZhbHVlKXtcblx0dGhpcy5fYXR0cmlidmFsdWUgKz0gdmFsdWU7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm9uYXR0cmliZW5kID0gZnVuY3Rpb24oKXtcblx0aWYodGhpcy5fY2JzLm9uYXR0cmlidXRlKSB0aGlzLl9jYnMub25hdHRyaWJ1dGUodGhpcy5fYXR0cmlibmFtZSwgdGhpcy5fYXR0cmlidmFsdWUpO1xuXHRpZihcblx0XHR0aGlzLl9hdHRyaWJzICYmXG5cdFx0IU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLl9hdHRyaWJzLCB0aGlzLl9hdHRyaWJuYW1lKVxuXHQpe1xuXHRcdHRoaXMuX2F0dHJpYnNbdGhpcy5fYXR0cmlibmFtZV0gPSB0aGlzLl9hdHRyaWJ2YWx1ZTtcblx0fVxuXHR0aGlzLl9hdHRyaWJuYW1lID0gXCJcIjtcblx0dGhpcy5fYXR0cmlidmFsdWUgPSBcIlwiO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5fZ2V0SW5zdHJ1Y3Rpb25OYW1lID0gZnVuY3Rpb24odmFsdWUpe1xuXHR2YXIgaWR4ID0gdmFsdWUuc2VhcmNoKHJlX25hbWVFbmQpLFxuXHQgICAgbmFtZSA9IGlkeCA8IDAgPyB2YWx1ZSA6IHZhbHVlLnN1YnN0cigwLCBpZHgpO1xuXG5cdGlmKHRoaXMuX2xvd2VyQ2FzZVRhZ05hbWVzKXtcblx0XHRuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0cmV0dXJuIG5hbWU7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm9uZGVjbGFyYXRpb24gPSBmdW5jdGlvbih2YWx1ZSl7XG5cdGlmKHRoaXMuX2Nicy5vbnByb2Nlc3NpbmdpbnN0cnVjdGlvbil7XG5cdFx0dmFyIG5hbWUgPSB0aGlzLl9nZXRJbnN0cnVjdGlvbk5hbWUodmFsdWUpO1xuXHRcdHRoaXMuX2Nicy5vbnByb2Nlc3NpbmdpbnN0cnVjdGlvbihcIiFcIiArIG5hbWUsIFwiIVwiICsgdmFsdWUpO1xuXHR9XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm9ucHJvY2Vzc2luZ2luc3RydWN0aW9uID0gZnVuY3Rpb24odmFsdWUpe1xuXHRpZih0aGlzLl9jYnMub25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24pe1xuXHRcdHZhciBuYW1lID0gdGhpcy5fZ2V0SW5zdHJ1Y3Rpb25OYW1lKHZhbHVlKTtcblx0XHR0aGlzLl9jYnMub25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24oXCI/XCIgKyBuYW1lLCBcIj9cIiArIHZhbHVlKTtcblx0fVxufTtcblxuUGFyc2VyLnByb3RvdHlwZS5vbmNvbW1lbnQgPSBmdW5jdGlvbih2YWx1ZSl7XG5cdHRoaXMuX3VwZGF0ZVBvc2l0aW9uKDQpO1xuXG5cdGlmKHRoaXMuX2Nicy5vbmNvbW1lbnQpIHRoaXMuX2Nicy5vbmNvbW1lbnQodmFsdWUpO1xuXHRpZih0aGlzLl9jYnMub25jb21tZW50ZW5kKSB0aGlzLl9jYnMub25jb21tZW50ZW5kKCk7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm9uY2RhdGEgPSBmdW5jdGlvbih2YWx1ZSl7XG5cdHRoaXMuX3VwZGF0ZVBvc2l0aW9uKDEpO1xuXG5cdGlmKHRoaXMuX29wdGlvbnMueG1sTW9kZSB8fCB0aGlzLl9vcHRpb25zLnJlY29nbml6ZUNEQVRBKXtcblx0XHRpZih0aGlzLl9jYnMub25jZGF0YXN0YXJ0KSB0aGlzLl9jYnMub25jZGF0YXN0YXJ0KCk7XG5cdFx0aWYodGhpcy5fY2JzLm9udGV4dCkgdGhpcy5fY2JzLm9udGV4dCh2YWx1ZSk7XG5cdFx0aWYodGhpcy5fY2JzLm9uY2RhdGFlbmQpIHRoaXMuX2Nicy5vbmNkYXRhZW5kKCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5vbmNvbW1lbnQoXCJbQ0RBVEFbXCIgKyB2YWx1ZSArIFwiXV1cIik7XG5cdH1cbn07XG5cblBhcnNlci5wcm90b3R5cGUub25lcnJvciA9IGZ1bmN0aW9uKGVycil7XG5cdGlmKHRoaXMuX2Nicy5vbmVycm9yKSB0aGlzLl9jYnMub25lcnJvcihlcnIpO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5vbmVuZCA9IGZ1bmN0aW9uKCl7XG5cdGlmKHRoaXMuX2Nicy5vbmNsb3NldGFnKXtcblx0XHRmb3IoXG5cdFx0XHR2YXIgaSA9IHRoaXMuX3N0YWNrLmxlbmd0aDtcblx0XHRcdGkgPiAwO1xuXHRcdFx0dGhpcy5fY2JzLm9uY2xvc2V0YWcodGhpcy5fc3RhY2tbLS1pXSlcblx0XHQpO1xuXHR9XG5cdGlmKHRoaXMuX2Nicy5vbmVuZCkgdGhpcy5fY2JzLm9uZW5kKCk7XG59O1xuXG5cbi8vUmVzZXRzIHRoZSBwYXJzZXIgdG8gYSBibGFuayBzdGF0ZSwgcmVhZHkgdG8gcGFyc2UgYSBuZXcgSFRNTCBkb2N1bWVudFxuUGFyc2VyLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCl7XG5cdGlmKHRoaXMuX2Nicy5vbnJlc2V0KSB0aGlzLl9jYnMub25yZXNldCgpO1xuXHR0aGlzLl90b2tlbml6ZXIucmVzZXQoKTtcblxuXHR0aGlzLl90YWduYW1lID0gXCJcIjtcblx0dGhpcy5fYXR0cmlibmFtZSA9IFwiXCI7XG5cdHRoaXMuX2F0dHJpYnMgPSBudWxsO1xuXHR0aGlzLl9zdGFjayA9IFtdO1xuXG5cdGlmKHRoaXMuX2Nicy5vbnBhcnNlcmluaXQpIHRoaXMuX2Nicy5vbnBhcnNlcmluaXQodGhpcyk7XG59O1xuXG4vL1BhcnNlcyBhIGNvbXBsZXRlIEhUTUwgZG9jdW1lbnQgYW5kIHB1c2hlcyBpdCB0byB0aGUgaGFuZGxlclxuUGFyc2VyLnByb3RvdHlwZS5wYXJzZUNvbXBsZXRlID0gZnVuY3Rpb24oZGF0YSl7XG5cdHRoaXMucmVzZXQoKTtcblx0dGhpcy5lbmQoZGF0YSk7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24oY2h1bmspe1xuXHR0aGlzLl90b2tlbml6ZXIud3JpdGUoY2h1bmspO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbihjaHVuayl7XG5cdHRoaXMuX3Rva2VuaXplci5lbmQoY2h1bmspO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuX3Rva2VuaXplci5wYXVzZSgpO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbigpe1xuXHR0aGlzLl90b2tlbml6ZXIucmVzdW1lKCk7XG59O1xuXG4vL2FsaWFzIGZvciBiYWNrd2FyZHMgY29tcGF0XG5QYXJzZXIucHJvdG90eXBlLnBhcnNlQ2h1bmsgPSBQYXJzZXIucHJvdG90eXBlLndyaXRlO1xuUGFyc2VyLnByb3RvdHlwZS5kb25lID0gUGFyc2VyLnByb3RvdHlwZS5lbmQ7XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaHRtbHBhcnNlcjIvbGliL1BhcnNlci5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSBUb2tlbml6ZXI7XG5cbnZhciBkZWNvZGVDb2RlUG9pbnQgPSByZXF1aXJlKFwiZW50aXRpZXMvbGliL2RlY29kZV9jb2RlcG9pbnQuanNcIiksXG4gICAgZW50aXR5TWFwID0gcmVxdWlyZShcImVudGl0aWVzL21hcHMvZW50aXRpZXMuanNvblwiKSxcbiAgICBsZWdhY3lNYXAgPSByZXF1aXJlKFwiZW50aXRpZXMvbWFwcy9sZWdhY3kuanNvblwiKSxcbiAgICB4bWxNYXAgICAgPSByZXF1aXJlKFwiZW50aXRpZXMvbWFwcy94bWwuanNvblwiKSxcblxuICAgIGkgPSAwLFxuXG4gICAgVEVYVCAgICAgICAgICAgICAgICAgICAgICA9IGkrKyxcbiAgICBCRUZPUkVfVEFHX05BTUUgICAgICAgICAgID0gaSsrLCAvL2FmdGVyIDxcbiAgICBJTl9UQUdfTkFNRSAgICAgICAgICAgICAgID0gaSsrLFxuICAgIElOX1NFTEZfQ0xPU0lOR19UQUcgICAgICAgPSBpKyssXG4gICAgQkVGT1JFX0NMT1NJTkdfVEFHX05BTUUgICA9IGkrKyxcbiAgICBJTl9DTE9TSU5HX1RBR19OQU1FICAgICAgID0gaSsrLFxuICAgIEFGVEVSX0NMT1NJTkdfVEFHX05BTUUgICAgPSBpKyssXG5cbiAgICAvL2F0dHJpYnV0ZXNcbiAgICBCRUZPUkVfQVRUUklCVVRFX05BTUUgICAgID0gaSsrLFxuICAgIElOX0FUVFJJQlVURV9OQU1FICAgICAgICAgPSBpKyssXG4gICAgQUZURVJfQVRUUklCVVRFX05BTUUgICAgICA9IGkrKyxcbiAgICBCRUZPUkVfQVRUUklCVVRFX1ZBTFVFICAgID0gaSsrLFxuICAgIElOX0FUVFJJQlVURV9WQUxVRV9EUSAgICAgPSBpKyssIC8vIFwiXG4gICAgSU5fQVRUUklCVVRFX1ZBTFVFX1NRICAgICA9IGkrKywgLy8gJ1xuICAgIElOX0FUVFJJQlVURV9WQUxVRV9OUSAgICAgPSBpKyssXG5cbiAgICAvL2RlY2xhcmF0aW9uc1xuICAgIEJFRk9SRV9ERUNMQVJBVElPTiAgICAgICAgPSBpKyssIC8vICFcbiAgICBJTl9ERUNMQVJBVElPTiAgICAgICAgICAgID0gaSsrLFxuXG4gICAgLy9wcm9jZXNzaW5nIGluc3RydWN0aW9uc1xuICAgIElOX1BST0NFU1NJTkdfSU5TVFJVQ1RJT04gPSBpKyssIC8vID9cblxuICAgIC8vY29tbWVudHNcbiAgICBCRUZPUkVfQ09NTUVOVCAgICAgICAgICAgID0gaSsrLFxuICAgIElOX0NPTU1FTlQgICAgICAgICAgICAgICAgPSBpKyssXG4gICAgQUZURVJfQ09NTUVOVF8xICAgICAgICAgICA9IGkrKyxcbiAgICBBRlRFUl9DT01NRU5UXzIgICAgICAgICAgID0gaSsrLFxuXG4gICAgLy9jZGF0YVxuICAgIEJFRk9SRV9DREFUQV8xICAgICAgICAgICAgPSBpKyssIC8vIFtcbiAgICBCRUZPUkVfQ0RBVEFfMiAgICAgICAgICAgID0gaSsrLCAvLyBDXG4gICAgQkVGT1JFX0NEQVRBXzMgICAgICAgICAgICA9IGkrKywgLy8gRFxuICAgIEJFRk9SRV9DREFUQV80ICAgICAgICAgICAgPSBpKyssIC8vIEFcbiAgICBCRUZPUkVfQ0RBVEFfNSAgICAgICAgICAgID0gaSsrLCAvLyBUXG4gICAgQkVGT1JFX0NEQVRBXzYgICAgICAgICAgICA9IGkrKywgLy8gQVxuICAgIElOX0NEQVRBICAgICAgICAgICAgICAgICAgPSBpKyssIC8vIFtcbiAgICBBRlRFUl9DREFUQV8xICAgICAgICAgICAgID0gaSsrLCAvLyBdXG4gICAgQUZURVJfQ0RBVEFfMiAgICAgICAgICAgICA9IGkrKywgLy8gXVxuXG4gICAgLy9zcGVjaWFsIHRhZ3NcbiAgICBCRUZPUkVfU1BFQ0lBTCAgICAgICAgICAgID0gaSsrLCAvL1NcbiAgICBCRUZPUkVfU1BFQ0lBTF9FTkQgICAgICAgID0gaSsrLCAgIC8vU1xuXG4gICAgQkVGT1JFX1NDUklQVF8xICAgICAgICAgICA9IGkrKywgLy9DXG4gICAgQkVGT1JFX1NDUklQVF8yICAgICAgICAgICA9IGkrKywgLy9SXG4gICAgQkVGT1JFX1NDUklQVF8zICAgICAgICAgICA9IGkrKywgLy9JXG4gICAgQkVGT1JFX1NDUklQVF80ICAgICAgICAgICA9IGkrKywgLy9QXG4gICAgQkVGT1JFX1NDUklQVF81ICAgICAgICAgICA9IGkrKywgLy9UXG4gICAgQUZURVJfU0NSSVBUXzEgICAgICAgICAgICA9IGkrKywgLy9DXG4gICAgQUZURVJfU0NSSVBUXzIgICAgICAgICAgICA9IGkrKywgLy9SXG4gICAgQUZURVJfU0NSSVBUXzMgICAgICAgICAgICA9IGkrKywgLy9JXG4gICAgQUZURVJfU0NSSVBUXzQgICAgICAgICAgICA9IGkrKywgLy9QXG4gICAgQUZURVJfU0NSSVBUXzUgICAgICAgICAgICA9IGkrKywgLy9UXG5cbiAgICBCRUZPUkVfU1RZTEVfMSAgICAgICAgICAgID0gaSsrLCAvL1RcbiAgICBCRUZPUkVfU1RZTEVfMiAgICAgICAgICAgID0gaSsrLCAvL1lcbiAgICBCRUZPUkVfU1RZTEVfMyAgICAgICAgICAgID0gaSsrLCAvL0xcbiAgICBCRUZPUkVfU1RZTEVfNCAgICAgICAgICAgID0gaSsrLCAvL0VcbiAgICBBRlRFUl9TVFlMRV8xICAgICAgICAgICAgID0gaSsrLCAvL1RcbiAgICBBRlRFUl9TVFlMRV8yICAgICAgICAgICAgID0gaSsrLCAvL1lcbiAgICBBRlRFUl9TVFlMRV8zICAgICAgICAgICAgID0gaSsrLCAvL0xcbiAgICBBRlRFUl9TVFlMRV80ICAgICAgICAgICAgID0gaSsrLCAvL0VcblxuICAgIEJFRk9SRV9FTlRJVFkgICAgICAgICAgICAgPSBpKyssIC8vJlxuICAgIEJFRk9SRV9OVU1FUklDX0VOVElUWSAgICAgPSBpKyssIC8vI1xuICAgIElOX05BTUVEX0VOVElUWSAgICAgICAgICAgPSBpKyssXG4gICAgSU5fTlVNRVJJQ19FTlRJVFkgICAgICAgICA9IGkrKyxcbiAgICBJTl9IRVhfRU5USVRZICAgICAgICAgICAgID0gaSsrLCAvL1hcblxuICAgIGogPSAwLFxuXG4gICAgU1BFQ0lBTF9OT05FICAgICAgICAgICAgICA9IGorKyxcbiAgICBTUEVDSUFMX1NDUklQVCAgICAgICAgICAgID0gaisrLFxuICAgIFNQRUNJQUxfU1RZTEUgICAgICAgICAgICAgPSBqKys7XG5cbmZ1bmN0aW9uIHdoaXRlc3BhY2UoYyl7XG5cdHJldHVybiBjID09PSBcIiBcIiB8fCBjID09PSBcIlxcblwiIHx8IGMgPT09IFwiXFx0XCIgfHwgYyA9PT0gXCJcXGZcIiB8fCBjID09PSBcIlxcclwiO1xufVxuXG5mdW5jdGlvbiBjaGFyYWN0ZXJTdGF0ZShjaGFyLCBTVUNDRVNTKXtcblx0cmV0dXJuIGZ1bmN0aW9uKGMpe1xuXHRcdGlmKGMgPT09IGNoYXIpIHRoaXMuX3N0YXRlID0gU1VDQ0VTUztcblx0fTtcbn1cblxuZnVuY3Rpb24gaWZFbHNlU3RhdGUodXBwZXIsIFNVQ0NFU1MsIEZBSUxVUkUpe1xuXHR2YXIgbG93ZXIgPSB1cHBlci50b0xvd2VyQ2FzZSgpO1xuXG5cdGlmKHVwcGVyID09PSBsb3dlcil7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGMpe1xuXHRcdFx0aWYoYyA9PT0gbG93ZXIpe1xuXHRcdFx0XHR0aGlzLl9zdGF0ZSA9IFNVQ0NFU1M7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9zdGF0ZSA9IEZBSUxVUkU7XG5cdFx0XHRcdHRoaXMuX2luZGV4LS07XG5cdFx0XHR9XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24oYyl7XG5cdFx0XHRpZihjID09PSBsb3dlciB8fCBjID09PSB1cHBlcil7XG5cdFx0XHRcdHRoaXMuX3N0YXRlID0gU1VDQ0VTUztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX3N0YXRlID0gRkFJTFVSRTtcblx0XHRcdFx0dGhpcy5faW5kZXgtLTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNvbnN1bWVTcGVjaWFsTmFtZUNoYXIodXBwZXIsIE5FWFRfU1RBVEUpe1xuXHR2YXIgbG93ZXIgPSB1cHBlci50b0xvd2VyQ2FzZSgpO1xuXG5cdHJldHVybiBmdW5jdGlvbihjKXtcblx0XHRpZihjID09PSBsb3dlciB8fCBjID09PSB1cHBlcil7XG5cdFx0XHR0aGlzLl9zdGF0ZSA9IE5FWFRfU1RBVEU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3N0YXRlID0gSU5fVEFHX05BTUU7XG5cdFx0XHR0aGlzLl9pbmRleC0tOyAvL2NvbnN1bWUgdGhlIHRva2VuIGFnYWluXG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBUb2tlbml6ZXIob3B0aW9ucywgY2JzKXtcblx0dGhpcy5fc3RhdGUgPSBURVhUO1xuXHR0aGlzLl9idWZmZXIgPSBcIlwiO1xuXHR0aGlzLl9zZWN0aW9uU3RhcnQgPSAwO1xuXHR0aGlzLl9pbmRleCA9IDA7XG5cdHRoaXMuX2J1ZmZlck9mZnNldCA9IDA7IC8vY2hhcnMgcmVtb3ZlZCBmcm9tIF9idWZmZXJcblx0dGhpcy5fYmFzZVN0YXRlID0gVEVYVDtcblx0dGhpcy5fc3BlY2lhbCA9IFNQRUNJQUxfTk9ORTtcblx0dGhpcy5fY2JzID0gY2JzO1xuXHR0aGlzLl9ydW5uaW5nID0gdHJ1ZTtcblx0dGhpcy5fZW5kZWQgPSBmYWxzZTtcblx0dGhpcy5feG1sTW9kZSA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy54bWxNb2RlKTtcblx0dGhpcy5fZGVjb2RlRW50aXRpZXMgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuZGVjb2RlRW50aXRpZXMpO1xufVxuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZVRleHQgPSBmdW5jdGlvbihjKXtcblx0aWYoYyA9PT0gXCI8XCIpe1xuXHRcdGlmKHRoaXMuX2luZGV4ID4gdGhpcy5fc2VjdGlvblN0YXJ0KXtcblx0XHRcdHRoaXMuX2Nicy5vbnRleHQodGhpcy5fZ2V0U2VjdGlvbigpKTtcblx0XHR9XG5cdFx0dGhpcy5fc3RhdGUgPSBCRUZPUkVfVEFHX05BTUU7XG5cdFx0dGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG5cdH0gZWxzZSBpZih0aGlzLl9kZWNvZGVFbnRpdGllcyAmJiB0aGlzLl9zcGVjaWFsID09PSBTUEVDSUFMX05PTkUgJiYgYyA9PT0gXCImXCIpe1xuXHRcdGlmKHRoaXMuX2luZGV4ID4gdGhpcy5fc2VjdGlvblN0YXJ0KXtcblx0XHRcdHRoaXMuX2Nicy5vbnRleHQodGhpcy5fZ2V0U2VjdGlvbigpKTtcblx0XHR9XG5cdFx0dGhpcy5fYmFzZVN0YXRlID0gVEVYVDtcblx0XHR0aGlzLl9zdGF0ZSA9IEJFRk9SRV9FTlRJVFk7XG5cdFx0dGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG5cdH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlVGFnTmFtZSA9IGZ1bmN0aW9uKGMpe1xuXHRpZihjID09PSBcIi9cIil7XG5cdFx0dGhpcy5fc3RhdGUgPSBCRUZPUkVfQ0xPU0lOR19UQUdfTkFNRTtcblx0fSBlbHNlIGlmKGMgPT09IFwiPFwiKXtcblx0XHR0aGlzLl9jYnMub250ZXh0KHRoaXMuX2dldFNlY3Rpb24oKSk7XG5cdFx0dGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG5cdH0gZWxzZSBpZihjID09PSBcIj5cIiB8fCB0aGlzLl9zcGVjaWFsICE9PSBTUEVDSUFMX05PTkUgfHwgd2hpdGVzcGFjZShjKSkge1xuXHRcdHRoaXMuX3N0YXRlID0gVEVYVDtcblx0fSBlbHNlIGlmKGMgPT09IFwiIVwiKXtcblx0XHR0aGlzLl9zdGF0ZSA9IEJFRk9SRV9ERUNMQVJBVElPTjtcblx0XHR0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG5cdH0gZWxzZSBpZihjID09PSBcIj9cIil7XG5cdFx0dGhpcy5fc3RhdGUgPSBJTl9QUk9DRVNTSU5HX0lOU1RSVUNUSU9OO1xuXHRcdHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLl9zdGF0ZSA9ICghdGhpcy5feG1sTW9kZSAmJiAoYyA9PT0gXCJzXCIgfHwgYyA9PT0gXCJTXCIpKSA/XG5cdFx0XHRcdFx0XHRCRUZPUkVfU1BFQ0lBTCA6IElOX1RBR19OQU1FO1xuXHRcdHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4O1xuXHR9XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluVGFnTmFtZSA9IGZ1bmN0aW9uKGMpe1xuXHRpZihjID09PSBcIi9cIiB8fCBjID09PSBcIj5cIiB8fCB3aGl0ZXNwYWNlKGMpKXtcblx0XHR0aGlzLl9lbWl0VG9rZW4oXCJvbm9wZW50YWduYW1lXCIpO1xuXHRcdHRoaXMuX3N0YXRlID0gQkVGT1JFX0FUVFJJQlVURV9OQU1FO1xuXHRcdHRoaXMuX2luZGV4LS07XG5cdH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlQ2xvc2VpbmdUYWdOYW1lID0gZnVuY3Rpb24oYyl7XG5cdGlmKHdoaXRlc3BhY2UoYykpO1xuXHRlbHNlIGlmKGMgPT09IFwiPlwiKXtcblx0XHR0aGlzLl9zdGF0ZSA9IFRFWFQ7XG5cdH0gZWxzZSBpZih0aGlzLl9zcGVjaWFsICE9PSBTUEVDSUFMX05PTkUpe1xuXHRcdGlmKGMgPT09IFwic1wiIHx8IGMgPT09IFwiU1wiKXtcblx0XHRcdHRoaXMuX3N0YXRlID0gQkVGT1JFX1NQRUNJQUxfRU5EO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9zdGF0ZSA9IFRFWFQ7XG5cdFx0XHR0aGlzLl9pbmRleC0tO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHR0aGlzLl9zdGF0ZSA9IElOX0NMT1NJTkdfVEFHX05BTUU7XG5cdFx0dGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG5cdH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5DbG9zZWluZ1RhZ05hbWUgPSBmdW5jdGlvbihjKXtcblx0aWYoYyA9PT0gXCI+XCIgfHwgd2hpdGVzcGFjZShjKSl7XG5cdFx0dGhpcy5fZW1pdFRva2VuKFwib25jbG9zZXRhZ1wiKTtcblx0XHR0aGlzLl9zdGF0ZSA9IEFGVEVSX0NMT1NJTkdfVEFHX05BTUU7XG5cdFx0dGhpcy5faW5kZXgtLTtcblx0fVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVBZnRlckNsb3NlaW5nVGFnTmFtZSA9IGZ1bmN0aW9uKGMpe1xuXHQvL3NraXAgZXZlcnl0aGluZyB1bnRpbCBcIj5cIlxuXHRpZihjID09PSBcIj5cIil7XG5cdFx0dGhpcy5fc3RhdGUgPSBURVhUO1xuXHRcdHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcblx0fVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVBdHRyaWJ1dGVOYW1lID0gZnVuY3Rpb24oYyl7XG5cdGlmKGMgPT09IFwiPlwiKXtcblx0XHR0aGlzLl9jYnMub25vcGVudGFnZW5kKCk7XG5cdFx0dGhpcy5fc3RhdGUgPSBURVhUO1xuXHRcdHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcblx0fSBlbHNlIGlmKGMgPT09IFwiL1wiKXtcblx0XHR0aGlzLl9zdGF0ZSA9IElOX1NFTEZfQ0xPU0lOR19UQUc7XG5cdH0gZWxzZSBpZighd2hpdGVzcGFjZShjKSl7XG5cdFx0dGhpcy5fc3RhdGUgPSBJTl9BVFRSSUJVVEVfTkFNRTtcblx0XHR0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcblx0fVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJblNlbGZDbG9zaW5nVGFnID0gZnVuY3Rpb24oYyl7XG5cdGlmKGMgPT09IFwiPlwiKXtcblx0XHR0aGlzLl9jYnMub25zZWxmY2xvc2luZ3RhZygpO1xuXHRcdHRoaXMuX3N0YXRlID0gVEVYVDtcblx0XHR0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG5cdH0gZWxzZSBpZighd2hpdGVzcGFjZShjKSl7XG5cdFx0dGhpcy5fc3RhdGUgPSBCRUZPUkVfQVRUUklCVVRFX05BTUU7XG5cdFx0dGhpcy5faW5kZXgtLTtcblx0fVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbkF0dHJpYnV0ZU5hbWUgPSBmdW5jdGlvbihjKXtcblx0aWYoYyA9PT0gXCI9XCIgfHwgYyA9PT0gXCIvXCIgfHwgYyA9PT0gXCI+XCIgfHwgd2hpdGVzcGFjZShjKSl7XG5cdFx0dGhpcy5fY2JzLm9uYXR0cmlibmFtZSh0aGlzLl9nZXRTZWN0aW9uKCkpO1xuXHRcdHRoaXMuX3NlY3Rpb25TdGFydCA9IC0xO1xuXHRcdHRoaXMuX3N0YXRlID0gQUZURVJfQVRUUklCVVRFX05BTUU7XG5cdFx0dGhpcy5faW5kZXgtLTtcblx0fVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVBZnRlckF0dHJpYnV0ZU5hbWUgPSBmdW5jdGlvbihjKXtcblx0aWYoYyA9PT0gXCI9XCIpe1xuXHRcdHRoaXMuX3N0YXRlID0gQkVGT1JFX0FUVFJJQlVURV9WQUxVRTtcblx0fSBlbHNlIGlmKGMgPT09IFwiL1wiIHx8IGMgPT09IFwiPlwiKXtcblx0XHR0aGlzLl9jYnMub25hdHRyaWJlbmQoKTtcblx0XHR0aGlzLl9zdGF0ZSA9IEJFRk9SRV9BVFRSSUJVVEVfTkFNRTtcblx0XHR0aGlzLl9pbmRleC0tO1xuXHR9IGVsc2UgaWYoIXdoaXRlc3BhY2UoYykpe1xuXHRcdHRoaXMuX2Nicy5vbmF0dHJpYmVuZCgpO1xuXHRcdHRoaXMuX3N0YXRlID0gSU5fQVRUUklCVVRFX05BTUU7XG5cdFx0dGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG5cdH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlQXR0cmlidXRlVmFsdWUgPSBmdW5jdGlvbihjKXtcblx0aWYoYyA9PT0gXCJcXFwiXCIpe1xuXHRcdHRoaXMuX3N0YXRlID0gSU5fQVRUUklCVVRFX1ZBTFVFX0RRO1xuXHRcdHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcblx0fSBlbHNlIGlmKGMgPT09IFwiJ1wiKXtcblx0XHR0aGlzLl9zdGF0ZSA9IElOX0FUVFJJQlVURV9WQUxVRV9TUTtcblx0XHR0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG5cdH0gZWxzZSBpZighd2hpdGVzcGFjZShjKSl7XG5cdFx0dGhpcy5fc3RhdGUgPSBJTl9BVFRSSUJVVEVfVkFMVUVfTlE7XG5cdFx0dGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG5cdFx0dGhpcy5faW5kZXgtLTsgLy9yZWNvbnN1bWUgdG9rZW5cblx0fVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbkF0dHJpYnV0ZVZhbHVlRG91YmxlUXVvdGVzID0gZnVuY3Rpb24oYyl7XG5cdGlmKGMgPT09IFwiXFxcIlwiKXtcblx0XHR0aGlzLl9lbWl0VG9rZW4oXCJvbmF0dHJpYmRhdGFcIik7XG5cdFx0dGhpcy5fY2JzLm9uYXR0cmliZW5kKCk7XG5cdFx0dGhpcy5fc3RhdGUgPSBCRUZPUkVfQVRUUklCVVRFX05BTUU7XG5cdH0gZWxzZSBpZih0aGlzLl9kZWNvZGVFbnRpdGllcyAmJiBjID09PSBcIiZcIil7XG5cdFx0dGhpcy5fZW1pdFRva2VuKFwib25hdHRyaWJkYXRhXCIpO1xuXHRcdHRoaXMuX2Jhc2VTdGF0ZSA9IHRoaXMuX3N0YXRlO1xuXHRcdHRoaXMuX3N0YXRlID0gQkVGT1JFX0VOVElUWTtcblx0XHR0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcblx0fVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbkF0dHJpYnV0ZVZhbHVlU2luZ2xlUXVvdGVzID0gZnVuY3Rpb24oYyl7XG5cdGlmKGMgPT09IFwiJ1wiKXtcblx0XHR0aGlzLl9lbWl0VG9rZW4oXCJvbmF0dHJpYmRhdGFcIik7XG5cdFx0dGhpcy5fY2JzLm9uYXR0cmliZW5kKCk7XG5cdFx0dGhpcy5fc3RhdGUgPSBCRUZPUkVfQVRUUklCVVRFX05BTUU7XG5cdH0gZWxzZSBpZih0aGlzLl9kZWNvZGVFbnRpdGllcyAmJiBjID09PSBcIiZcIil7XG5cdFx0dGhpcy5fZW1pdFRva2VuKFwib25hdHRyaWJkYXRhXCIpO1xuXHRcdHRoaXMuX2Jhc2VTdGF0ZSA9IHRoaXMuX3N0YXRlO1xuXHRcdHRoaXMuX3N0YXRlID0gQkVGT1JFX0VOVElUWTtcblx0XHR0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcblx0fVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbkF0dHJpYnV0ZVZhbHVlTm9RdW90ZXMgPSBmdW5jdGlvbihjKXtcblx0aWYod2hpdGVzcGFjZShjKSB8fCBjID09PSBcIj5cIil7XG5cdFx0dGhpcy5fZW1pdFRva2VuKFwib25hdHRyaWJkYXRhXCIpO1xuXHRcdHRoaXMuX2Nicy5vbmF0dHJpYmVuZCgpO1xuXHRcdHRoaXMuX3N0YXRlID0gQkVGT1JFX0FUVFJJQlVURV9OQU1FO1xuXHRcdHRoaXMuX2luZGV4LS07XG5cdH0gZWxzZSBpZih0aGlzLl9kZWNvZGVFbnRpdGllcyAmJiBjID09PSBcIiZcIil7XG5cdFx0dGhpcy5fZW1pdFRva2VuKFwib25hdHRyaWJkYXRhXCIpO1xuXHRcdHRoaXMuX2Jhc2VTdGF0ZSA9IHRoaXMuX3N0YXRlO1xuXHRcdHRoaXMuX3N0YXRlID0gQkVGT1JFX0VOVElUWTtcblx0XHR0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcblx0fVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVEZWNsYXJhdGlvbiA9IGZ1bmN0aW9uKGMpe1xuXHR0aGlzLl9zdGF0ZSA9IGMgPT09IFwiW1wiID8gQkVGT1JFX0NEQVRBXzEgOlxuXHRcdFx0XHRcdGMgPT09IFwiLVwiID8gQkVGT1JFX0NPTU1FTlQgOlxuXHRcdFx0XHRcdFx0SU5fREVDTEFSQVRJT047XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluRGVjbGFyYXRpb24gPSBmdW5jdGlvbihjKXtcblx0aWYoYyA9PT0gXCI+XCIpe1xuXHRcdHRoaXMuX2Nicy5vbmRlY2xhcmF0aW9uKHRoaXMuX2dldFNlY3Rpb24oKSk7XG5cdFx0dGhpcy5fc3RhdGUgPSBURVhUO1xuXHRcdHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcblx0fVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJblByb2Nlc3NpbmdJbnN0cnVjdGlvbiA9IGZ1bmN0aW9uKGMpe1xuXHRpZihjID09PSBcIj5cIil7XG5cdFx0dGhpcy5fY2JzLm9ucHJvY2Vzc2luZ2luc3RydWN0aW9uKHRoaXMuX2dldFNlY3Rpb24oKSk7XG5cdFx0dGhpcy5fc3RhdGUgPSBURVhUO1xuXHRcdHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcblx0fVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVDb21tZW50ID0gZnVuY3Rpb24oYyl7XG5cdGlmKGMgPT09IFwiLVwiKXtcblx0XHR0aGlzLl9zdGF0ZSA9IElOX0NPTU1FTlQ7XG5cdFx0dGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMuX3N0YXRlID0gSU5fREVDTEFSQVRJT047XG5cdH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5Db21tZW50ID0gZnVuY3Rpb24oYyl7XG5cdGlmKGMgPT09IFwiLVwiKSB0aGlzLl9zdGF0ZSA9IEFGVEVSX0NPTU1FTlRfMTtcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJDb21tZW50MSA9IGZ1bmN0aW9uKGMpe1xuXHRpZihjID09PSBcIi1cIil7XG5cdFx0dGhpcy5fc3RhdGUgPSBBRlRFUl9DT01NRU5UXzI7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5fc3RhdGUgPSBJTl9DT01NRU5UO1xuXHR9XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUFmdGVyQ29tbWVudDIgPSBmdW5jdGlvbihjKXtcblx0aWYoYyA9PT0gXCI+XCIpe1xuXHRcdC8vcmVtb3ZlIDIgdHJhaWxpbmcgY2hhcnNcblx0XHR0aGlzLl9jYnMub25jb21tZW50KHRoaXMuX2J1ZmZlci5zdWJzdHJpbmcodGhpcy5fc2VjdGlvblN0YXJ0LCB0aGlzLl9pbmRleCAtIDIpKTtcblx0XHR0aGlzLl9zdGF0ZSA9IFRFWFQ7XG5cdFx0dGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuXHR9IGVsc2UgaWYoYyAhPT0gXCItXCIpe1xuXHRcdHRoaXMuX3N0YXRlID0gSU5fQ09NTUVOVDtcblx0fVxuXHQvLyBlbHNlOiBzdGF5IGluIEFGVEVSX0NPTU1FTlRfMiAoYC0tLT5gKVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVDZGF0YTEgPSBpZkVsc2VTdGF0ZShcIkNcIiwgQkVGT1JFX0NEQVRBXzIsIElOX0RFQ0xBUkFUSU9OKTtcblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlQ2RhdGEyID0gaWZFbHNlU3RhdGUoXCJEXCIsIEJFRk9SRV9DREFUQV8zLCBJTl9ERUNMQVJBVElPTik7XG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZUNkYXRhMyA9IGlmRWxzZVN0YXRlKFwiQVwiLCBCRUZPUkVfQ0RBVEFfNCwgSU5fREVDTEFSQVRJT04pO1xuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVDZGF0YTQgPSBpZkVsc2VTdGF0ZShcIlRcIiwgQkVGT1JFX0NEQVRBXzUsIElOX0RFQ0xBUkFUSU9OKTtcblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlQ2RhdGE1ID0gaWZFbHNlU3RhdGUoXCJBXCIsIEJFRk9SRV9DREFUQV82LCBJTl9ERUNMQVJBVElPTik7XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlQ2RhdGE2ID0gZnVuY3Rpb24oYyl7XG5cdGlmKGMgPT09IFwiW1wiKXtcblx0XHR0aGlzLl9zdGF0ZSA9IElOX0NEQVRBO1xuXHRcdHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLl9zdGF0ZSA9IElOX0RFQ0xBUkFUSU9OO1xuXHRcdHRoaXMuX2luZGV4LS07XG5cdH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5DZGF0YSA9IGZ1bmN0aW9uKGMpe1xuXHRpZihjID09PSBcIl1cIikgdGhpcy5fc3RhdGUgPSBBRlRFUl9DREFUQV8xO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVBZnRlckNkYXRhMSA9IGNoYXJhY3RlclN0YXRlKFwiXVwiLCBBRlRFUl9DREFUQV8yKTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVBZnRlckNkYXRhMiA9IGZ1bmN0aW9uKGMpe1xuXHRpZihjID09PSBcIj5cIil7XG5cdFx0Ly9yZW1vdmUgMiB0cmFpbGluZyBjaGFyc1xuXHRcdHRoaXMuX2Nicy5vbmNkYXRhKHRoaXMuX2J1ZmZlci5zdWJzdHJpbmcodGhpcy5fc2VjdGlvblN0YXJ0LCB0aGlzLl9pbmRleCAtIDIpKTtcblx0XHR0aGlzLl9zdGF0ZSA9IFRFWFQ7XG5cdFx0dGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuXHR9IGVsc2UgaWYoYyAhPT0gXCJdXCIpIHtcblx0XHR0aGlzLl9zdGF0ZSA9IElOX0NEQVRBO1xuXHR9XG5cdC8vZWxzZTogc3RheSBpbiBBRlRFUl9DREFUQV8yIChgXV1dPmApXG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZVNwZWNpYWwgPSBmdW5jdGlvbihjKXtcblx0aWYoYyA9PT0gXCJjXCIgfHwgYyA9PT0gXCJDXCIpe1xuXHRcdHRoaXMuX3N0YXRlID0gQkVGT1JFX1NDUklQVF8xO1xuXHR9IGVsc2UgaWYoYyA9PT0gXCJ0XCIgfHwgYyA9PT0gXCJUXCIpe1xuXHRcdHRoaXMuX3N0YXRlID0gQkVGT1JFX1NUWUxFXzE7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5fc3RhdGUgPSBJTl9UQUdfTkFNRTtcblx0XHR0aGlzLl9pbmRleC0tOyAvL2NvbnN1bWUgdGhlIHRva2VuIGFnYWluXG5cdH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlU3BlY2lhbEVuZCA9IGZ1bmN0aW9uKGMpe1xuXHRpZih0aGlzLl9zcGVjaWFsID09PSBTUEVDSUFMX1NDUklQVCAmJiAoYyA9PT0gXCJjXCIgfHwgYyA9PT0gXCJDXCIpKXtcblx0XHR0aGlzLl9zdGF0ZSA9IEFGVEVSX1NDUklQVF8xO1xuXHR9IGVsc2UgaWYodGhpcy5fc3BlY2lhbCA9PT0gU1BFQ0lBTF9TVFlMRSAmJiAoYyA9PT0gXCJ0XCIgfHwgYyA9PT0gXCJUXCIpKXtcblx0XHR0aGlzLl9zdGF0ZSA9IEFGVEVSX1NUWUxFXzE7XG5cdH1cblx0ZWxzZSB0aGlzLl9zdGF0ZSA9IFRFWFQ7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZVNjcmlwdDEgPSBjb25zdW1lU3BlY2lhbE5hbWVDaGFyKFwiUlwiLCBCRUZPUkVfU0NSSVBUXzIpO1xuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVTY3JpcHQyID0gY29uc3VtZVNwZWNpYWxOYW1lQ2hhcihcIklcIiwgQkVGT1JFX1NDUklQVF8zKTtcblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlU2NyaXB0MyA9IGNvbnN1bWVTcGVjaWFsTmFtZUNoYXIoXCJQXCIsIEJFRk9SRV9TQ1JJUFRfNCk7XG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZVNjcmlwdDQgPSBjb25zdW1lU3BlY2lhbE5hbWVDaGFyKFwiVFwiLCBCRUZPUkVfU0NSSVBUXzUpO1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZVNjcmlwdDUgPSBmdW5jdGlvbihjKXtcblx0aWYoYyA9PT0gXCIvXCIgfHwgYyA9PT0gXCI+XCIgfHwgd2hpdGVzcGFjZShjKSl7XG5cdFx0dGhpcy5fc3BlY2lhbCA9IFNQRUNJQUxfU0NSSVBUO1xuXHR9XG5cdHRoaXMuX3N0YXRlID0gSU5fVEFHX05BTUU7XG5cdHRoaXMuX2luZGV4LS07IC8vY29uc3VtZSB0aGUgdG9rZW4gYWdhaW5cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJTY3JpcHQxID0gaWZFbHNlU3RhdGUoXCJSXCIsIEFGVEVSX1NDUklQVF8yLCBURVhUKTtcblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJTY3JpcHQyID0gaWZFbHNlU3RhdGUoXCJJXCIsIEFGVEVSX1NDUklQVF8zLCBURVhUKTtcblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJTY3JpcHQzID0gaWZFbHNlU3RhdGUoXCJQXCIsIEFGVEVSX1NDUklQVF80LCBURVhUKTtcblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJTY3JpcHQ0ID0gaWZFbHNlU3RhdGUoXCJUXCIsIEFGVEVSX1NDUklQVF81LCBURVhUKTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVBZnRlclNjcmlwdDUgPSBmdW5jdGlvbihjKXtcblx0aWYoYyA9PT0gXCI+XCIgfHwgd2hpdGVzcGFjZShjKSl7XG5cdFx0dGhpcy5fc3BlY2lhbCA9IFNQRUNJQUxfTk9ORTtcblx0XHR0aGlzLl9zdGF0ZSA9IElOX0NMT1NJTkdfVEFHX05BTUU7XG5cdFx0dGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggLSA2O1xuXHRcdHRoaXMuX2luZGV4LS07IC8vcmVjb25zdW1lIHRoZSB0b2tlblxuXHR9XG5cdGVsc2UgdGhpcy5fc3RhdGUgPSBURVhUO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVTdHlsZTEgPSBjb25zdW1lU3BlY2lhbE5hbWVDaGFyKFwiWVwiLCBCRUZPUkVfU1RZTEVfMik7XG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZVN0eWxlMiA9IGNvbnN1bWVTcGVjaWFsTmFtZUNoYXIoXCJMXCIsIEJFRk9SRV9TVFlMRV8zKTtcblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlU3R5bGUzID0gY29uc3VtZVNwZWNpYWxOYW1lQ2hhcihcIkVcIiwgQkVGT1JFX1NUWUxFXzQpO1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZVN0eWxlNCA9IGZ1bmN0aW9uKGMpe1xuXHRpZihjID09PSBcIi9cIiB8fCBjID09PSBcIj5cIiB8fCB3aGl0ZXNwYWNlKGMpKXtcblx0XHR0aGlzLl9zcGVjaWFsID0gU1BFQ0lBTF9TVFlMRTtcblx0fVxuXHR0aGlzLl9zdGF0ZSA9IElOX1RBR19OQU1FO1xuXHR0aGlzLl9pbmRleC0tOyAvL2NvbnN1bWUgdGhlIHRva2VuIGFnYWluXG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUFmdGVyU3R5bGUxID0gaWZFbHNlU3RhdGUoXCJZXCIsIEFGVEVSX1NUWUxFXzIsIFRFWFQpO1xuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVBZnRlclN0eWxlMiA9IGlmRWxzZVN0YXRlKFwiTFwiLCBBRlRFUl9TVFlMRV8zLCBURVhUKTtcblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJTdHlsZTMgPSBpZkVsc2VTdGF0ZShcIkVcIiwgQUZURVJfU1RZTEVfNCwgVEVYVCk7XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJTdHlsZTQgPSBmdW5jdGlvbihjKXtcblx0aWYoYyA9PT0gXCI+XCIgfHwgd2hpdGVzcGFjZShjKSl7XG5cdFx0dGhpcy5fc3BlY2lhbCA9IFNQRUNJQUxfTk9ORTtcblx0XHR0aGlzLl9zdGF0ZSA9IElOX0NMT1NJTkdfVEFHX05BTUU7XG5cdFx0dGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggLSA1O1xuXHRcdHRoaXMuX2luZGV4LS07IC8vcmVjb25zdW1lIHRoZSB0b2tlblxuXHR9XG5cdGVsc2UgdGhpcy5fc3RhdGUgPSBURVhUO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVFbnRpdHkgPSBpZkVsc2VTdGF0ZShcIiNcIiwgQkVGT1JFX05VTUVSSUNfRU5USVRZLCBJTl9OQU1FRF9FTlRJVFkpO1xuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVOdW1lcmljRW50aXR5ID0gaWZFbHNlU3RhdGUoXCJYXCIsIElOX0hFWF9FTlRJVFksIElOX05VTUVSSUNfRU5USVRZKTtcblxuLy9mb3IgZW50aXRpZXMgdGVybWluYXRlZCB3aXRoIGEgc2VtaWNvbG9uXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9wYXJzZU5hbWVkRW50aXR5U3RyaWN0ID0gZnVuY3Rpb24oKXtcblx0Ly9vZmZzZXQgPSAxXG5cdGlmKHRoaXMuX3NlY3Rpb25TdGFydCArIDEgPCB0aGlzLl9pbmRleCl7XG5cdFx0dmFyIGVudGl0eSA9IHRoaXMuX2J1ZmZlci5zdWJzdHJpbmcodGhpcy5fc2VjdGlvblN0YXJ0ICsgMSwgdGhpcy5faW5kZXgpLFxuXHRcdCAgICBtYXAgPSB0aGlzLl94bWxNb2RlID8geG1sTWFwIDogZW50aXR5TWFwO1xuXG5cdFx0aWYobWFwLmhhc093blByb3BlcnR5KGVudGl0eSkpe1xuXHRcdFx0dGhpcy5fZW1pdFBhcnRpYWwobWFwW2VudGl0eV0pO1xuXHRcdFx0dGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuXHRcdH1cblx0fVxufTtcblxuXG4vL3BhcnNlcyBsZWdhY3kgZW50aXRpZXMgKHdpdGhvdXQgdHJhaWxpbmcgc2VtaWNvbG9uKVxuVG9rZW5pemVyLnByb3RvdHlwZS5fcGFyc2VMZWdhY3lFbnRpdHkgPSBmdW5jdGlvbigpe1xuXHR2YXIgc3RhcnQgPSB0aGlzLl9zZWN0aW9uU3RhcnQgKyAxLFxuXHQgICAgbGltaXQgPSB0aGlzLl9pbmRleCAtIHN0YXJ0O1xuXG5cdGlmKGxpbWl0ID4gNikgbGltaXQgPSA2OyAvL3RoZSBtYXggbGVuZ3RoIG9mIGxlZ2FjeSBlbnRpdGllcyBpcyA2XG5cblx0d2hpbGUobGltaXQgPj0gMil7IC8vdGhlIG1pbiBsZW5ndGggb2YgbGVnYWN5IGVudGl0aWVzIGlzIDJcblx0XHR2YXIgZW50aXR5ID0gdGhpcy5fYnVmZmVyLnN1YnN0cihzdGFydCwgbGltaXQpO1xuXG5cdFx0aWYobGVnYWN5TWFwLmhhc093blByb3BlcnR5KGVudGl0eSkpe1xuXHRcdFx0dGhpcy5fZW1pdFBhcnRpYWwobGVnYWN5TWFwW2VudGl0eV0pO1xuXHRcdFx0dGhpcy5fc2VjdGlvblN0YXJ0ICs9IGxpbWl0ICsgMTtcblx0XHRcdHJldHVybjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGltaXQtLTtcblx0XHR9XG5cdH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5OYW1lZEVudGl0eSA9IGZ1bmN0aW9uKGMpe1xuXHRpZihjID09PSBcIjtcIil7XG5cdFx0dGhpcy5fcGFyc2VOYW1lZEVudGl0eVN0cmljdCgpO1xuXHRcdGlmKHRoaXMuX3NlY3Rpb25TdGFydCArIDEgPCB0aGlzLl9pbmRleCAmJiAhdGhpcy5feG1sTW9kZSl7XG5cdFx0XHR0aGlzLl9wYXJzZUxlZ2FjeUVudGl0eSgpO1xuXHRcdH1cblx0XHR0aGlzLl9zdGF0ZSA9IHRoaXMuX2Jhc2VTdGF0ZTtcblx0fSBlbHNlIGlmKChjIDwgXCJhXCIgfHwgYyA+IFwielwiKSAmJiAoYyA8IFwiQVwiIHx8IGMgPiBcIlpcIikgJiYgKGMgPCBcIjBcIiB8fCBjID4gXCI5XCIpKXtcblx0XHRpZih0aGlzLl94bWxNb2RlKTtcblx0XHRlbHNlIGlmKHRoaXMuX3NlY3Rpb25TdGFydCArIDEgPT09IHRoaXMuX2luZGV4KTtcblx0XHRlbHNlIGlmKHRoaXMuX2Jhc2VTdGF0ZSAhPT0gVEVYVCl7XG5cdFx0XHRpZihjICE9PSBcIj1cIil7XG5cdFx0XHRcdHRoaXMuX3BhcnNlTmFtZWRFbnRpdHlTdHJpY3QoKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fcGFyc2VMZWdhY3lFbnRpdHkoKTtcblx0XHR9XG5cblx0XHR0aGlzLl9zdGF0ZSA9IHRoaXMuX2Jhc2VTdGF0ZTtcblx0XHR0aGlzLl9pbmRleC0tO1xuXHR9XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9kZWNvZGVOdW1lcmljRW50aXR5ID0gZnVuY3Rpb24ob2Zmc2V0LCBiYXNlKXtcblx0dmFyIHNlY3Rpb25TdGFydCA9IHRoaXMuX3NlY3Rpb25TdGFydCArIG9mZnNldDtcblxuXHRpZihzZWN0aW9uU3RhcnQgIT09IHRoaXMuX2luZGV4KXtcblx0XHQvL3BhcnNlIGVudGl0eVxuXHRcdHZhciBlbnRpdHkgPSB0aGlzLl9idWZmZXIuc3Vic3RyaW5nKHNlY3Rpb25TdGFydCwgdGhpcy5faW5kZXgpO1xuXHRcdHZhciBwYXJzZWQgPSBwYXJzZUludChlbnRpdHksIGJhc2UpO1xuXG5cdFx0dGhpcy5fZW1pdFBhcnRpYWwoZGVjb2RlQ29kZVBvaW50KHBhcnNlZCkpO1xuXHRcdHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4O1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMuX3NlY3Rpb25TdGFydC0tO1xuXHR9XG5cblx0dGhpcy5fc3RhdGUgPSB0aGlzLl9iYXNlU3RhdGU7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluTnVtZXJpY0VudGl0eSA9IGZ1bmN0aW9uKGMpe1xuXHRpZihjID09PSBcIjtcIil7XG5cdFx0dGhpcy5fZGVjb2RlTnVtZXJpY0VudGl0eSgyLCAxMCk7XG5cdFx0dGhpcy5fc2VjdGlvblN0YXJ0Kys7XG5cdH0gZWxzZSBpZihjIDwgXCIwXCIgfHwgYyA+IFwiOVwiKXtcblx0XHRpZighdGhpcy5feG1sTW9kZSl7XG5cdFx0XHR0aGlzLl9kZWNvZGVOdW1lcmljRW50aXR5KDIsIDEwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fc3RhdGUgPSB0aGlzLl9iYXNlU3RhdGU7XG5cdFx0fVxuXHRcdHRoaXMuX2luZGV4LS07XG5cdH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5IZXhFbnRpdHkgPSBmdW5jdGlvbihjKXtcblx0aWYoYyA9PT0gXCI7XCIpe1xuXHRcdHRoaXMuX2RlY29kZU51bWVyaWNFbnRpdHkoMywgMTYpO1xuXHRcdHRoaXMuX3NlY3Rpb25TdGFydCsrO1xuXHR9IGVsc2UgaWYoKGMgPCBcImFcIiB8fCBjID4gXCJmXCIpICYmIChjIDwgXCJBXCIgfHwgYyA+IFwiRlwiKSAmJiAoYyA8IFwiMFwiIHx8IGMgPiBcIjlcIikpe1xuXHRcdGlmKCF0aGlzLl94bWxNb2RlKXtcblx0XHRcdHRoaXMuX2RlY29kZU51bWVyaWNFbnRpdHkoMywgMTYpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9zdGF0ZSA9IHRoaXMuX2Jhc2VTdGF0ZTtcblx0XHR9XG5cdFx0dGhpcy5faW5kZXgtLTtcblx0fVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fY2xlYW51cCA9IGZ1bmN0aW9uICgpe1xuXHRpZih0aGlzLl9zZWN0aW9uU3RhcnQgPCAwKXtcblx0XHR0aGlzLl9idWZmZXIgPSBcIlwiO1xuXHRcdHRoaXMuX2J1ZmZlck9mZnNldCArPSB0aGlzLl9pbmRleDtcblx0XHR0aGlzLl9pbmRleCA9IDA7XG5cdH0gZWxzZSBpZih0aGlzLl9ydW5uaW5nKXtcblx0XHRpZih0aGlzLl9zdGF0ZSA9PT0gVEVYVCl7XG5cdFx0XHRpZih0aGlzLl9zZWN0aW9uU3RhcnQgIT09IHRoaXMuX2luZGV4KXtcblx0XHRcdFx0dGhpcy5fY2JzLm9udGV4dCh0aGlzLl9idWZmZXIuc3Vic3RyKHRoaXMuX3NlY3Rpb25TdGFydCkpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fYnVmZmVyID0gXCJcIjtcblx0XHRcdHRoaXMuX2J1ZmZlck9mZnNldCArPSB0aGlzLl9pbmRleDtcblx0XHRcdHRoaXMuX2luZGV4ID0gMDtcblx0XHR9IGVsc2UgaWYodGhpcy5fc2VjdGlvblN0YXJ0ID09PSB0aGlzLl9pbmRleCl7XG5cdFx0XHQvL3RoZSBzZWN0aW9uIGp1c3Qgc3RhcnRlZFxuXHRcdFx0dGhpcy5fYnVmZmVyID0gXCJcIjtcblx0XHRcdHRoaXMuX2J1ZmZlck9mZnNldCArPSB0aGlzLl9pbmRleDtcblx0XHRcdHRoaXMuX2luZGV4ID0gMDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly9yZW1vdmUgZXZlcnl0aGluZyB1bm5lY2Vzc2FyeVxuXHRcdFx0dGhpcy5fYnVmZmVyID0gdGhpcy5fYnVmZmVyLnN1YnN0cih0aGlzLl9zZWN0aW9uU3RhcnQpO1xuXHRcdFx0dGhpcy5faW5kZXggLT0gdGhpcy5fc2VjdGlvblN0YXJ0O1xuXHRcdFx0dGhpcy5fYnVmZmVyT2Zmc2V0ICs9IHRoaXMuX3NlY3Rpb25TdGFydDtcblx0XHR9XG5cblx0XHR0aGlzLl9zZWN0aW9uU3RhcnQgPSAwO1xuXHR9XG59O1xuXG4vL1RPRE8gbWFrZSBldmVudHMgY29uZGl0aW9uYWxcblRva2VuaXplci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbihjaHVuayl7XG5cdGlmKHRoaXMuX2VuZGVkKSB0aGlzLl9jYnMub25lcnJvcihFcnJvcihcIi53cml0ZSgpIGFmdGVyIGRvbmUhXCIpKTtcblxuXHR0aGlzLl9idWZmZXIgKz0gY2h1bms7XG5cdHRoaXMuX3BhcnNlKCk7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9wYXJzZSA9IGZ1bmN0aW9uKCl7XG5cdHdoaWxlKHRoaXMuX2luZGV4IDwgdGhpcy5fYnVmZmVyLmxlbmd0aCAmJiB0aGlzLl9ydW5uaW5nKXtcblx0XHR2YXIgYyA9IHRoaXMuX2J1ZmZlci5jaGFyQXQodGhpcy5faW5kZXgpO1xuXHRcdGlmKHRoaXMuX3N0YXRlID09PSBURVhUKSB7XG5cdFx0XHR0aGlzLl9zdGF0ZVRleHQoYyk7XG5cdFx0fSBlbHNlIGlmKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfVEFHX05BTUUpe1xuXHRcdFx0dGhpcy5fc3RhdGVCZWZvcmVUYWdOYW1lKGMpO1xuXHRcdH0gZWxzZSBpZih0aGlzLl9zdGF0ZSA9PT0gSU5fVEFHX05BTUUpIHtcblx0XHRcdHRoaXMuX3N0YXRlSW5UYWdOYW1lKGMpO1xuXHRcdH0gZWxzZSBpZih0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX0NMT1NJTkdfVEFHX05BTUUpe1xuXHRcdFx0dGhpcy5fc3RhdGVCZWZvcmVDbG9zZWluZ1RhZ05hbWUoYyk7XG5cdFx0fSBlbHNlIGlmKHRoaXMuX3N0YXRlID09PSBJTl9DTE9TSU5HX1RBR19OQU1FKXtcblx0XHRcdHRoaXMuX3N0YXRlSW5DbG9zZWluZ1RhZ05hbWUoYyk7XG5cdFx0fSBlbHNlIGlmKHRoaXMuX3N0YXRlID09PSBBRlRFUl9DTE9TSU5HX1RBR19OQU1FKXtcblx0XHRcdHRoaXMuX3N0YXRlQWZ0ZXJDbG9zZWluZ1RhZ05hbWUoYyk7XG5cdFx0fSBlbHNlIGlmKHRoaXMuX3N0YXRlID09PSBJTl9TRUxGX0NMT1NJTkdfVEFHKXtcblx0XHRcdHRoaXMuX3N0YXRlSW5TZWxmQ2xvc2luZ1RhZyhjKTtcblx0XHR9XG5cblx0XHQvKlxuXHRcdCpcdGF0dHJpYnV0ZXNcblx0XHQqL1xuXHRcdGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9BVFRSSUJVVEVfTkFNRSl7XG5cdFx0XHR0aGlzLl9zdGF0ZUJlZm9yZUF0dHJpYnV0ZU5hbWUoYyk7XG5cdFx0fSBlbHNlIGlmKHRoaXMuX3N0YXRlID09PSBJTl9BVFRSSUJVVEVfTkFNRSl7XG5cdFx0XHR0aGlzLl9zdGF0ZUluQXR0cmlidXRlTmFtZShjKTtcblx0XHR9IGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IEFGVEVSX0FUVFJJQlVURV9OQU1FKXtcblx0XHRcdHRoaXMuX3N0YXRlQWZ0ZXJBdHRyaWJ1dGVOYW1lKGMpO1xuXHRcdH0gZWxzZSBpZih0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX0FUVFJJQlVURV9WQUxVRSl7XG5cdFx0XHR0aGlzLl9zdGF0ZUJlZm9yZUF0dHJpYnV0ZVZhbHVlKGMpO1xuXHRcdH0gZWxzZSBpZih0aGlzLl9zdGF0ZSA9PT0gSU5fQVRUUklCVVRFX1ZBTFVFX0RRKXtcblx0XHRcdHRoaXMuX3N0YXRlSW5BdHRyaWJ1dGVWYWx1ZURvdWJsZVF1b3RlcyhjKTtcblx0XHR9IGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IElOX0FUVFJJQlVURV9WQUxVRV9TUSl7XG5cdFx0XHR0aGlzLl9zdGF0ZUluQXR0cmlidXRlVmFsdWVTaW5nbGVRdW90ZXMoYyk7XG5cdFx0fSBlbHNlIGlmKHRoaXMuX3N0YXRlID09PSBJTl9BVFRSSUJVVEVfVkFMVUVfTlEpe1xuXHRcdFx0dGhpcy5fc3RhdGVJbkF0dHJpYnV0ZVZhbHVlTm9RdW90ZXMoYyk7XG5cdFx0fVxuXG5cdFx0Lypcblx0XHQqXHRkZWNsYXJhdGlvbnNcblx0XHQqL1xuXHRcdGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9ERUNMQVJBVElPTil7XG5cdFx0XHR0aGlzLl9zdGF0ZUJlZm9yZURlY2xhcmF0aW9uKGMpO1xuXHRcdH0gZWxzZSBpZih0aGlzLl9zdGF0ZSA9PT0gSU5fREVDTEFSQVRJT04pe1xuXHRcdFx0dGhpcy5fc3RhdGVJbkRlY2xhcmF0aW9uKGMpO1xuXHRcdH1cblxuXHRcdC8qXG5cdFx0Klx0cHJvY2Vzc2luZyBpbnN0cnVjdGlvbnNcblx0XHQqL1xuXHRcdGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IElOX1BST0NFU1NJTkdfSU5TVFJVQ1RJT04pe1xuXHRcdFx0dGhpcy5fc3RhdGVJblByb2Nlc3NpbmdJbnN0cnVjdGlvbihjKTtcblx0XHR9XG5cblx0XHQvKlxuXHRcdCpcdGNvbW1lbnRzXG5cdFx0Ki9cblx0XHRlbHNlIGlmKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfQ09NTUVOVCl7XG5cdFx0XHR0aGlzLl9zdGF0ZUJlZm9yZUNvbW1lbnQoYyk7XG5cdFx0fSBlbHNlIGlmKHRoaXMuX3N0YXRlID09PSBJTl9DT01NRU5UKXtcblx0XHRcdHRoaXMuX3N0YXRlSW5Db21tZW50KGMpO1xuXHRcdH0gZWxzZSBpZih0aGlzLl9zdGF0ZSA9PT0gQUZURVJfQ09NTUVOVF8xKXtcblx0XHRcdHRoaXMuX3N0YXRlQWZ0ZXJDb21tZW50MShjKTtcblx0XHR9IGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IEFGVEVSX0NPTU1FTlRfMil7XG5cdFx0XHR0aGlzLl9zdGF0ZUFmdGVyQ29tbWVudDIoYyk7XG5cdFx0fVxuXG5cdFx0Lypcblx0XHQqXHRjZGF0YVxuXHRcdCovXG5cdFx0ZWxzZSBpZih0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX0NEQVRBXzEpe1xuXHRcdFx0dGhpcy5fc3RhdGVCZWZvcmVDZGF0YTEoYyk7XG5cdFx0fSBlbHNlIGlmKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfQ0RBVEFfMil7XG5cdFx0XHR0aGlzLl9zdGF0ZUJlZm9yZUNkYXRhMihjKTtcblx0XHR9IGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9DREFUQV8zKXtcblx0XHRcdHRoaXMuX3N0YXRlQmVmb3JlQ2RhdGEzKGMpO1xuXHRcdH0gZWxzZSBpZih0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX0NEQVRBXzQpe1xuXHRcdFx0dGhpcy5fc3RhdGVCZWZvcmVDZGF0YTQoYyk7XG5cdFx0fSBlbHNlIGlmKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfQ0RBVEFfNSl7XG5cdFx0XHR0aGlzLl9zdGF0ZUJlZm9yZUNkYXRhNShjKTtcblx0XHR9IGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9DREFUQV82KXtcblx0XHRcdHRoaXMuX3N0YXRlQmVmb3JlQ2RhdGE2KGMpO1xuXHRcdH0gZWxzZSBpZih0aGlzLl9zdGF0ZSA9PT0gSU5fQ0RBVEEpe1xuXHRcdFx0dGhpcy5fc3RhdGVJbkNkYXRhKGMpO1xuXHRcdH0gZWxzZSBpZih0aGlzLl9zdGF0ZSA9PT0gQUZURVJfQ0RBVEFfMSl7XG5cdFx0XHR0aGlzLl9zdGF0ZUFmdGVyQ2RhdGExKGMpO1xuXHRcdH0gZWxzZSBpZih0aGlzLl9zdGF0ZSA9PT0gQUZURVJfQ0RBVEFfMil7XG5cdFx0XHR0aGlzLl9zdGF0ZUFmdGVyQ2RhdGEyKGMpO1xuXHRcdH1cblxuXHRcdC8qXG5cdFx0KiBzcGVjaWFsIHRhZ3Ncblx0XHQqL1xuXHRcdGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9TUEVDSUFMKXtcblx0XHRcdHRoaXMuX3N0YXRlQmVmb3JlU3BlY2lhbChjKTtcblx0XHR9IGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9TUEVDSUFMX0VORCl7XG5cdFx0XHR0aGlzLl9zdGF0ZUJlZm9yZVNwZWNpYWxFbmQoYyk7XG5cdFx0fVxuXG5cdFx0Lypcblx0XHQqIHNjcmlwdFxuXHRcdCovXG5cdFx0ZWxzZSBpZih0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX1NDUklQVF8xKXtcblx0XHRcdHRoaXMuX3N0YXRlQmVmb3JlU2NyaXB0MShjKTtcblx0XHR9IGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9TQ1JJUFRfMil7XG5cdFx0XHR0aGlzLl9zdGF0ZUJlZm9yZVNjcmlwdDIoYyk7XG5cdFx0fSBlbHNlIGlmKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfU0NSSVBUXzMpe1xuXHRcdFx0dGhpcy5fc3RhdGVCZWZvcmVTY3JpcHQzKGMpO1xuXHRcdH0gZWxzZSBpZih0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX1NDUklQVF80KXtcblx0XHRcdHRoaXMuX3N0YXRlQmVmb3JlU2NyaXB0NChjKTtcblx0XHR9IGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9TQ1JJUFRfNSl7XG5cdFx0XHR0aGlzLl9zdGF0ZUJlZm9yZVNjcmlwdDUoYyk7XG5cdFx0fVxuXG5cdFx0ZWxzZSBpZih0aGlzLl9zdGF0ZSA9PT0gQUZURVJfU0NSSVBUXzEpe1xuXHRcdFx0dGhpcy5fc3RhdGVBZnRlclNjcmlwdDEoYyk7XG5cdFx0fSBlbHNlIGlmKHRoaXMuX3N0YXRlID09PSBBRlRFUl9TQ1JJUFRfMil7XG5cdFx0XHR0aGlzLl9zdGF0ZUFmdGVyU2NyaXB0MihjKTtcblx0XHR9IGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IEFGVEVSX1NDUklQVF8zKXtcblx0XHRcdHRoaXMuX3N0YXRlQWZ0ZXJTY3JpcHQzKGMpO1xuXHRcdH0gZWxzZSBpZih0aGlzLl9zdGF0ZSA9PT0gQUZURVJfU0NSSVBUXzQpe1xuXHRcdFx0dGhpcy5fc3RhdGVBZnRlclNjcmlwdDQoYyk7XG5cdFx0fSBlbHNlIGlmKHRoaXMuX3N0YXRlID09PSBBRlRFUl9TQ1JJUFRfNSl7XG5cdFx0XHR0aGlzLl9zdGF0ZUFmdGVyU2NyaXB0NShjKTtcblx0XHR9XG5cblx0XHQvKlxuXHRcdCogc3R5bGVcblx0XHQqL1xuXHRcdGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9TVFlMRV8xKXtcblx0XHRcdHRoaXMuX3N0YXRlQmVmb3JlU3R5bGUxKGMpO1xuXHRcdH0gZWxzZSBpZih0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX1NUWUxFXzIpe1xuXHRcdFx0dGhpcy5fc3RhdGVCZWZvcmVTdHlsZTIoYyk7XG5cdFx0fSBlbHNlIGlmKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfU1RZTEVfMyl7XG5cdFx0XHR0aGlzLl9zdGF0ZUJlZm9yZVN0eWxlMyhjKTtcblx0XHR9IGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9TVFlMRV80KXtcblx0XHRcdHRoaXMuX3N0YXRlQmVmb3JlU3R5bGU0KGMpO1xuXHRcdH1cblxuXHRcdGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IEFGVEVSX1NUWUxFXzEpe1xuXHRcdFx0dGhpcy5fc3RhdGVBZnRlclN0eWxlMShjKTtcblx0XHR9IGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IEFGVEVSX1NUWUxFXzIpe1xuXHRcdFx0dGhpcy5fc3RhdGVBZnRlclN0eWxlMihjKTtcblx0XHR9IGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IEFGVEVSX1NUWUxFXzMpe1xuXHRcdFx0dGhpcy5fc3RhdGVBZnRlclN0eWxlMyhjKTtcblx0XHR9IGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IEFGVEVSX1NUWUxFXzQpe1xuXHRcdFx0dGhpcy5fc3RhdGVBZnRlclN0eWxlNChjKTtcblx0XHR9XG5cblx0XHQvKlxuXHRcdCogZW50aXRpZXNcblx0XHQqL1xuXHRcdGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9FTlRJVFkpe1xuXHRcdFx0dGhpcy5fc3RhdGVCZWZvcmVFbnRpdHkoYyk7XG5cdFx0fSBlbHNlIGlmKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfTlVNRVJJQ19FTlRJVFkpe1xuXHRcdFx0dGhpcy5fc3RhdGVCZWZvcmVOdW1lcmljRW50aXR5KGMpO1xuXHRcdH0gZWxzZSBpZih0aGlzLl9zdGF0ZSA9PT0gSU5fTkFNRURfRU5USVRZKXtcblx0XHRcdHRoaXMuX3N0YXRlSW5OYW1lZEVudGl0eShjKTtcblx0XHR9IGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IElOX05VTUVSSUNfRU5USVRZKXtcblx0XHRcdHRoaXMuX3N0YXRlSW5OdW1lcmljRW50aXR5KGMpO1xuXHRcdH0gZWxzZSBpZih0aGlzLl9zdGF0ZSA9PT0gSU5fSEVYX0VOVElUWSl7XG5cdFx0XHR0aGlzLl9zdGF0ZUluSGV4RW50aXR5KGMpO1xuXHRcdH1cblxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5fY2JzLm9uZXJyb3IoRXJyb3IoXCJ1bmtub3duIF9zdGF0ZVwiKSwgdGhpcy5fc3RhdGUpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2luZGV4Kys7XG5cdH1cblxuXHR0aGlzLl9jbGVhbnVwKCk7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKXtcblx0dGhpcy5fcnVubmluZyA9IGZhbHNlO1xufTtcblRva2VuaXplci5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24oKXtcblx0dGhpcy5fcnVubmluZyA9IHRydWU7XG5cblx0aWYodGhpcy5faW5kZXggPCB0aGlzLl9idWZmZXIubGVuZ3RoKXtcblx0XHR0aGlzLl9wYXJzZSgpO1xuXHR9XG5cdGlmKHRoaXMuX2VuZGVkKXtcblx0XHR0aGlzLl9maW5pc2goKTtcblx0fVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbihjaHVuayl7XG5cdGlmKHRoaXMuX2VuZGVkKSB0aGlzLl9jYnMub25lcnJvcihFcnJvcihcIi5lbmQoKSBhZnRlciBkb25lIVwiKSk7XG5cdGlmKGNodW5rKSB0aGlzLndyaXRlKGNodW5rKTtcblxuXHR0aGlzLl9lbmRlZCA9IHRydWU7XG5cblx0aWYodGhpcy5fcnVubmluZykgdGhpcy5fZmluaXNoKCk7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9maW5pc2ggPSBmdW5jdGlvbigpe1xuXHQvL2lmIHRoZXJlIGlzIHJlbWFpbmluZyBkYXRhLCBlbWl0IGl0IGluIGEgcmVhc29uYWJsZSB3YXlcblx0aWYodGhpcy5fc2VjdGlvblN0YXJ0IDwgdGhpcy5faW5kZXgpe1xuXHRcdHRoaXMuX2hhbmRsZVRyYWlsaW5nRGF0YSgpO1xuXHR9XG5cblx0dGhpcy5fY2JzLm9uZW5kKCk7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9oYW5kbGVUcmFpbGluZ0RhdGEgPSBmdW5jdGlvbigpe1xuXHR2YXIgZGF0YSA9IHRoaXMuX2J1ZmZlci5zdWJzdHIodGhpcy5fc2VjdGlvblN0YXJ0KTtcblxuXHRpZih0aGlzLl9zdGF0ZSA9PT0gSU5fQ0RBVEEgfHwgdGhpcy5fc3RhdGUgPT09IEFGVEVSX0NEQVRBXzEgfHwgdGhpcy5fc3RhdGUgPT09IEFGVEVSX0NEQVRBXzIpe1xuXHRcdHRoaXMuX2Nicy5vbmNkYXRhKGRhdGEpO1xuXHR9IGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IElOX0NPTU1FTlQgfHwgdGhpcy5fc3RhdGUgPT09IEFGVEVSX0NPTU1FTlRfMSB8fCB0aGlzLl9zdGF0ZSA9PT0gQUZURVJfQ09NTUVOVF8yKXtcblx0XHR0aGlzLl9jYnMub25jb21tZW50KGRhdGEpO1xuXHR9IGVsc2UgaWYodGhpcy5fc3RhdGUgPT09IElOX05BTUVEX0VOVElUWSAmJiAhdGhpcy5feG1sTW9kZSl7XG5cdFx0dGhpcy5fcGFyc2VMZWdhY3lFbnRpdHkoKTtcblx0XHRpZih0aGlzLl9zZWN0aW9uU3RhcnQgPCB0aGlzLl9pbmRleCl7XG5cdFx0XHR0aGlzLl9zdGF0ZSA9IHRoaXMuX2Jhc2VTdGF0ZTtcblx0XHRcdHRoaXMuX2hhbmRsZVRyYWlsaW5nRGF0YSgpO1xuXHRcdH1cblx0fSBlbHNlIGlmKHRoaXMuX3N0YXRlID09PSBJTl9OVU1FUklDX0VOVElUWSAmJiAhdGhpcy5feG1sTW9kZSl7XG5cdFx0dGhpcy5fZGVjb2RlTnVtZXJpY0VudGl0eSgyLCAxMCk7XG5cdFx0aWYodGhpcy5fc2VjdGlvblN0YXJ0IDwgdGhpcy5faW5kZXgpe1xuXHRcdFx0dGhpcy5fc3RhdGUgPSB0aGlzLl9iYXNlU3RhdGU7XG5cdFx0XHR0aGlzLl9oYW5kbGVUcmFpbGluZ0RhdGEoKTtcblx0XHR9XG5cdH0gZWxzZSBpZih0aGlzLl9zdGF0ZSA9PT0gSU5fSEVYX0VOVElUWSAmJiAhdGhpcy5feG1sTW9kZSl7XG5cdFx0dGhpcy5fZGVjb2RlTnVtZXJpY0VudGl0eSgzLCAxNik7XG5cdFx0aWYodGhpcy5fc2VjdGlvblN0YXJ0IDwgdGhpcy5faW5kZXgpe1xuXHRcdFx0dGhpcy5fc3RhdGUgPSB0aGlzLl9iYXNlU3RhdGU7XG5cdFx0XHR0aGlzLl9oYW5kbGVUcmFpbGluZ0RhdGEoKTtcblx0XHR9XG5cdH0gZWxzZSBpZihcblx0XHR0aGlzLl9zdGF0ZSAhPT0gSU5fVEFHX05BTUUgJiZcblx0XHR0aGlzLl9zdGF0ZSAhPT0gQkVGT1JFX0FUVFJJQlVURV9OQU1FICYmXG5cdFx0dGhpcy5fc3RhdGUgIT09IEJFRk9SRV9BVFRSSUJVVEVfVkFMVUUgJiZcblx0XHR0aGlzLl9zdGF0ZSAhPT0gQUZURVJfQVRUUklCVVRFX05BTUUgJiZcblx0XHR0aGlzLl9zdGF0ZSAhPT0gSU5fQVRUUklCVVRFX05BTUUgJiZcblx0XHR0aGlzLl9zdGF0ZSAhPT0gSU5fQVRUUklCVVRFX1ZBTFVFX1NRICYmXG5cdFx0dGhpcy5fc3RhdGUgIT09IElOX0FUVFJJQlVURV9WQUxVRV9EUSAmJlxuXHRcdHRoaXMuX3N0YXRlICE9PSBJTl9BVFRSSUJVVEVfVkFMVUVfTlEgJiZcblx0XHR0aGlzLl9zdGF0ZSAhPT0gSU5fQ0xPU0lOR19UQUdfTkFNRVxuXHQpe1xuXHRcdHRoaXMuX2Nicy5vbnRleHQoZGF0YSk7XG5cdH1cblx0Ly9lbHNlLCBpZ25vcmUgcmVtYWluaW5nIGRhdGFcblx0Ly9UT0RPIGFkZCBhIHdheSB0byByZW1vdmUgY3VycmVudCB0YWdcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpe1xuXHRUb2tlbml6ZXIuY2FsbCh0aGlzLCB7eG1sTW9kZTogdGhpcy5feG1sTW9kZSwgZGVjb2RlRW50aXRpZXM6IHRoaXMuX2RlY29kZUVudGl0aWVzfSwgdGhpcy5fY2JzKTtcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuZ2V0QWJzb2x1dGVJbmRleCA9IGZ1bmN0aW9uKCl7XG5cdHJldHVybiB0aGlzLl9idWZmZXJPZmZzZXQgKyB0aGlzLl9pbmRleDtcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX2dldFNlY3Rpb24gPSBmdW5jdGlvbigpe1xuXHRyZXR1cm4gdGhpcy5fYnVmZmVyLnN1YnN0cmluZyh0aGlzLl9zZWN0aW9uU3RhcnQsIHRoaXMuX2luZGV4KTtcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX2VtaXRUb2tlbiA9IGZ1bmN0aW9uKG5hbWUpe1xuXHR0aGlzLl9jYnNbbmFtZV0odGhpcy5fZ2V0U2VjdGlvbigpKTtcblx0dGhpcy5fc2VjdGlvblN0YXJ0ID0gLTE7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9lbWl0UGFydGlhbCA9IGZ1bmN0aW9uKHZhbHVlKXtcblx0aWYodGhpcy5fYmFzZVN0YXRlICE9PSBURVhUKXtcblx0XHR0aGlzLl9jYnMub25hdHRyaWJkYXRhKHZhbHVlKTsgLy9UT0RPIGltcGxlbWVudCB0aGUgbmV3IGV2ZW50XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5fY2JzLm9udGV4dCh2YWx1ZSk7XG5cdH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9odG1scGFyc2VyMi9saWIvVG9rZW5pemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJ2YXIgZGVjb2RlTWFwID0gcmVxdWlyZShcIi4uL21hcHMvZGVjb2RlLmpzb25cIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlQ29kZVBvaW50O1xuXG4vLyBtb2RpZmllZCB2ZXJzaW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL2hlL2Jsb2IvbWFzdGVyL3NyYy9oZS5qcyNMOTQtTDExOVxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50KGNvZGVQb2ludCl7XG5cblx0aWYoKGNvZGVQb2ludCA+PSAweEQ4MDAgJiYgY29kZVBvaW50IDw9IDB4REZGRikgfHwgY29kZVBvaW50ID4gMHgxMEZGRkYpe1xuXHRcdHJldHVybiBcIlxcdUZGRkRcIjtcblx0fVxuXG5cdGlmKGNvZGVQb2ludCBpbiBkZWNvZGVNYXApe1xuXHRcdGNvZGVQb2ludCA9IGRlY29kZU1hcFtjb2RlUG9pbnRdO1xuXHR9XG5cblx0dmFyIG91dHB1dCA9IFwiXCI7XG5cblx0aWYoY29kZVBvaW50ID4gMHhGRkZGKXtcblx0XHRjb2RlUG9pbnQgLT0gMHgxMDAwMDtcblx0XHRvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApO1xuXHRcdGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGO1xuXHR9XG5cblx0b3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KTtcblx0cmV0dXJuIG91dHB1dDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VudGl0aWVzL2xpYi9kZWNvZGVfY29kZXBvaW50LmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IHtcIjBcIjo2NTUzMyxcIjEyOFwiOjgzNjQsXCIxMzBcIjo4MjE4LFwiMTMxXCI6NDAyLFwiMTMyXCI6ODIyMixcIjEzM1wiOjgyMzAsXCIxMzRcIjo4MjI0LFwiMTM1XCI6ODIyNSxcIjEzNlwiOjcxMCxcIjEzN1wiOjgyNDAsXCIxMzhcIjozNTIsXCIxMzlcIjo4MjQ5LFwiMTQwXCI6MzM4LFwiMTQyXCI6MzgxLFwiMTQ1XCI6ODIxNixcIjE0NlwiOjgyMTcsXCIxNDdcIjo4MjIwLFwiMTQ4XCI6ODIyMSxcIjE0OVwiOjgyMjYsXCIxNTBcIjo4MjExLFwiMTUxXCI6ODIxMixcIjE1MlwiOjczMixcIjE1M1wiOjg0ODIsXCIxNTRcIjozNTMsXCIxNTVcIjo4MjUwLFwiMTU2XCI6MzM5LFwiMTU4XCI6MzgyLFwiMTU5XCI6Mzc2fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VudGl0aWVzL21hcHMvZGVjb2RlLmpzb25cbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0ge1wiQWFjdXRlXCI6XCLDgVwiLFwiYWFjdXRlXCI6XCLDoVwiLFwiQWJyZXZlXCI6XCLEglwiLFwiYWJyZXZlXCI6XCLEg1wiLFwiYWNcIjpcIuKIvlwiLFwiYWNkXCI6XCLiiL9cIixcImFjRVwiOlwi4oi+zLNcIixcIkFjaXJjXCI6XCLDglwiLFwiYWNpcmNcIjpcIsOiXCIsXCJhY3V0ZVwiOlwiwrRcIixcIkFjeVwiOlwi0JBcIixcImFjeVwiOlwi0LBcIixcIkFFbGlnXCI6XCLDhlwiLFwiYWVsaWdcIjpcIsOmXCIsXCJhZlwiOlwi4oGhXCIsXCJBZnJcIjpcIvCdlIRcIixcImFmclwiOlwi8J2UnlwiLFwiQWdyYXZlXCI6XCLDgFwiLFwiYWdyYXZlXCI6XCLDoFwiLFwiYWxlZnN5bVwiOlwi4oS1XCIsXCJhbGVwaFwiOlwi4oS1XCIsXCJBbHBoYVwiOlwizpFcIixcImFscGhhXCI6XCLOsVwiLFwiQW1hY3JcIjpcIsSAXCIsXCJhbWFjclwiOlwixIFcIixcImFtYWxnXCI6XCLiqL9cIixcImFtcFwiOlwiJlwiLFwiQU1QXCI6XCImXCIsXCJhbmRhbmRcIjpcIuKplVwiLFwiQW5kXCI6XCLiqZNcIixcImFuZFwiOlwi4oinXCIsXCJhbmRkXCI6XCLiqZxcIixcImFuZHNsb3BlXCI6XCLiqZhcIixcImFuZHZcIjpcIuKpmlwiLFwiYW5nXCI6XCLiiKBcIixcImFuZ2VcIjpcIuKmpFwiLFwiYW5nbGVcIjpcIuKIoFwiLFwiYW5nbXNkYWFcIjpcIuKmqFwiLFwiYW5nbXNkYWJcIjpcIuKmqVwiLFwiYW5nbXNkYWNcIjpcIuKmqlwiLFwiYW5nbXNkYWRcIjpcIuKmq1wiLFwiYW5nbXNkYWVcIjpcIuKmrFwiLFwiYW5nbXNkYWZcIjpcIuKmrVwiLFwiYW5nbXNkYWdcIjpcIuKmrlwiLFwiYW5nbXNkYWhcIjpcIuKmr1wiLFwiYW5nbXNkXCI6XCLiiKFcIixcImFuZ3J0XCI6XCLiiJ9cIixcImFuZ3J0dmJcIjpcIuKKvlwiLFwiYW5ncnR2YmRcIjpcIuKmnVwiLFwiYW5nc3BoXCI6XCLiiKJcIixcImFuZ3N0XCI6XCLDhVwiLFwiYW5nemFyclwiOlwi4o28XCIsXCJBb2dvblwiOlwixIRcIixcImFvZ29uXCI6XCLEhVwiLFwiQW9wZlwiOlwi8J2UuFwiLFwiYW9wZlwiOlwi8J2VklwiLFwiYXBhY2lyXCI6XCLiqa9cIixcImFwXCI6XCLiiYhcIixcImFwRVwiOlwi4qmwXCIsXCJhcGVcIjpcIuKJilwiLFwiYXBpZFwiOlwi4omLXCIsXCJhcG9zXCI6XCInXCIsXCJBcHBseUZ1bmN0aW9uXCI6XCLigaFcIixcImFwcHJveFwiOlwi4omIXCIsXCJhcHByb3hlcVwiOlwi4omKXCIsXCJBcmluZ1wiOlwiw4VcIixcImFyaW5nXCI6XCLDpVwiLFwiQXNjclwiOlwi8J2SnFwiLFwiYXNjclwiOlwi8J2StlwiLFwiQXNzaWduXCI6XCLiiZRcIixcImFzdFwiOlwiKlwiLFwiYXN5bXBcIjpcIuKJiFwiLFwiYXN5bXBlcVwiOlwi4omNXCIsXCJBdGlsZGVcIjpcIsODXCIsXCJhdGlsZGVcIjpcIsOjXCIsXCJBdW1sXCI6XCLDhFwiLFwiYXVtbFwiOlwiw6RcIixcImF3Y29uaW50XCI6XCLiiLNcIixcImF3aW50XCI6XCLiqJFcIixcImJhY2tjb25nXCI6XCLiiYxcIixcImJhY2tlcHNpbG9uXCI6XCLPtlwiLFwiYmFja3ByaW1lXCI6XCLigLVcIixcImJhY2tzaW1cIjpcIuKIvVwiLFwiYmFja3NpbWVxXCI6XCLii41cIixcIkJhY2tzbGFzaFwiOlwi4oiWXCIsXCJCYXJ2XCI6XCLiq6dcIixcImJhcnZlZVwiOlwi4oq9XCIsXCJiYXJ3ZWRcIjpcIuKMhVwiLFwiQmFyd2VkXCI6XCLijIZcIixcImJhcndlZGdlXCI6XCLijIVcIixcImJicmtcIjpcIuKOtVwiLFwiYmJya3RicmtcIjpcIuKOtlwiLFwiYmNvbmdcIjpcIuKJjFwiLFwiQmN5XCI6XCLQkVwiLFwiYmN5XCI6XCLQsVwiLFwiYmRxdW9cIjpcIuKAnlwiLFwiYmVjYXVzXCI6XCLiiLVcIixcImJlY2F1c2VcIjpcIuKItVwiLFwiQmVjYXVzZVwiOlwi4oi1XCIsXCJiZW1wdHl2XCI6XCLiprBcIixcImJlcHNpXCI6XCLPtlwiLFwiYmVybm91XCI6XCLihKxcIixcIkJlcm5vdWxsaXNcIjpcIuKErFwiLFwiQmV0YVwiOlwizpJcIixcImJldGFcIjpcIs6yXCIsXCJiZXRoXCI6XCLihLZcIixcImJldHdlZW5cIjpcIuKJrFwiLFwiQmZyXCI6XCLwnZSFXCIsXCJiZnJcIjpcIvCdlJ9cIixcImJpZ2NhcFwiOlwi4ouCXCIsXCJiaWdjaXJjXCI6XCLil69cIixcImJpZ2N1cFwiOlwi4ouDXCIsXCJiaWdvZG90XCI6XCLiqIBcIixcImJpZ29wbHVzXCI6XCLiqIFcIixcImJpZ290aW1lc1wiOlwi4qiCXCIsXCJiaWdzcWN1cFwiOlwi4qiGXCIsXCJiaWdzdGFyXCI6XCLimIVcIixcImJpZ3RyaWFuZ2xlZG93blwiOlwi4pa9XCIsXCJiaWd0cmlhbmdsZXVwXCI6XCLilrNcIixcImJpZ3VwbHVzXCI6XCLiqIRcIixcImJpZ3ZlZVwiOlwi4ouBXCIsXCJiaWd3ZWRnZVwiOlwi4ouAXCIsXCJia2Fyb3dcIjpcIuKkjVwiLFwiYmxhY2tsb3plbmdlXCI6XCLip6tcIixcImJsYWNrc3F1YXJlXCI6XCLilqpcIixcImJsYWNrdHJpYW5nbGVcIjpcIuKWtFwiLFwiYmxhY2t0cmlhbmdsZWRvd25cIjpcIuKWvlwiLFwiYmxhY2t0cmlhbmdsZWxlZnRcIjpcIuKXglwiLFwiYmxhY2t0cmlhbmdsZXJpZ2h0XCI6XCLilrhcIixcImJsYW5rXCI6XCLikKNcIixcImJsazEyXCI6XCLilpJcIixcImJsazE0XCI6XCLilpFcIixcImJsazM0XCI6XCLilpNcIixcImJsb2NrXCI6XCLilohcIixcImJuZVwiOlwiPeKDpVwiLFwiYm5lcXVpdlwiOlwi4omh4oOlXCIsXCJiTm90XCI6XCLiq61cIixcImJub3RcIjpcIuKMkFwiLFwiQm9wZlwiOlwi8J2UuVwiLFwiYm9wZlwiOlwi8J2Vk1wiLFwiYm90XCI6XCLiiqVcIixcImJvdHRvbVwiOlwi4oqlXCIsXCJib3d0aWVcIjpcIuKLiFwiLFwiYm94Ym94XCI6XCLip4lcIixcImJveGRsXCI6XCLilJBcIixcImJveGRMXCI6XCLilZVcIixcImJveERsXCI6XCLilZZcIixcImJveERMXCI6XCLilZdcIixcImJveGRyXCI6XCLilIxcIixcImJveGRSXCI6XCLilZJcIixcImJveERyXCI6XCLilZNcIixcImJveERSXCI6XCLilZRcIixcImJveGhcIjpcIuKUgFwiLFwiYm94SFwiOlwi4pWQXCIsXCJib3hoZFwiOlwi4pSsXCIsXCJib3hIZFwiOlwi4pWkXCIsXCJib3hoRFwiOlwi4pWlXCIsXCJib3hIRFwiOlwi4pWmXCIsXCJib3hodVwiOlwi4pS0XCIsXCJib3hIdVwiOlwi4pWnXCIsXCJib3hoVVwiOlwi4pWoXCIsXCJib3hIVVwiOlwi4pWpXCIsXCJib3htaW51c1wiOlwi4oqfXCIsXCJib3hwbHVzXCI6XCLiip5cIixcImJveHRpbWVzXCI6XCLiiqBcIixcImJveHVsXCI6XCLilJhcIixcImJveHVMXCI6XCLilZtcIixcImJveFVsXCI6XCLilZxcIixcImJveFVMXCI6XCLilZ1cIixcImJveHVyXCI6XCLilJRcIixcImJveHVSXCI6XCLilZhcIixcImJveFVyXCI6XCLilZlcIixcImJveFVSXCI6XCLilZpcIixcImJveHZcIjpcIuKUglwiLFwiYm94VlwiOlwi4pWRXCIsXCJib3h2aFwiOlwi4pS8XCIsXCJib3h2SFwiOlwi4pWqXCIsXCJib3hWaFwiOlwi4pWrXCIsXCJib3hWSFwiOlwi4pWsXCIsXCJib3h2bFwiOlwi4pSkXCIsXCJib3h2TFwiOlwi4pWhXCIsXCJib3hWbFwiOlwi4pWiXCIsXCJib3hWTFwiOlwi4pWjXCIsXCJib3h2clwiOlwi4pScXCIsXCJib3h2UlwiOlwi4pWeXCIsXCJib3hWclwiOlwi4pWfXCIsXCJib3hWUlwiOlwi4pWgXCIsXCJicHJpbWVcIjpcIuKAtVwiLFwiYnJldmVcIjpcIsuYXCIsXCJCcmV2ZVwiOlwiy5hcIixcImJydmJhclwiOlwiwqZcIixcImJzY3JcIjpcIvCdkrdcIixcIkJzY3JcIjpcIuKErFwiLFwiYnNlbWlcIjpcIuKBj1wiLFwiYnNpbVwiOlwi4oi9XCIsXCJic2ltZVwiOlwi4ouNXCIsXCJic29sYlwiOlwi4qeFXCIsXCJic29sXCI6XCJcXFxcXCIsXCJic29saHN1YlwiOlwi4p+IXCIsXCJidWxsXCI6XCLigKJcIixcImJ1bGxldFwiOlwi4oCiXCIsXCJidW1wXCI6XCLiiY5cIixcImJ1bXBFXCI6XCLiqq5cIixcImJ1bXBlXCI6XCLiiY9cIixcIkJ1bXBlcVwiOlwi4omOXCIsXCJidW1wZXFcIjpcIuKJj1wiLFwiQ2FjdXRlXCI6XCLEhlwiLFwiY2FjdXRlXCI6XCLEh1wiLFwiY2FwYW5kXCI6XCLiqYRcIixcImNhcGJyY3VwXCI6XCLiqYlcIixcImNhcGNhcFwiOlwi4qmLXCIsXCJjYXBcIjpcIuKIqVwiLFwiQ2FwXCI6XCLii5JcIixcImNhcGN1cFwiOlwi4qmHXCIsXCJjYXBkb3RcIjpcIuKpgFwiLFwiQ2FwaXRhbERpZmZlcmVudGlhbERcIjpcIuKFhVwiLFwiY2Fwc1wiOlwi4oip77iAXCIsXCJjYXJldFwiOlwi4oGBXCIsXCJjYXJvblwiOlwiy4dcIixcIkNheWxleXNcIjpcIuKErVwiLFwiY2NhcHNcIjpcIuKpjVwiLFwiQ2Nhcm9uXCI6XCLEjFwiLFwiY2Nhcm9uXCI6XCLEjVwiLFwiQ2NlZGlsXCI6XCLDh1wiLFwiY2NlZGlsXCI6XCLDp1wiLFwiQ2NpcmNcIjpcIsSIXCIsXCJjY2lyY1wiOlwixIlcIixcIkNjb25pbnRcIjpcIuKIsFwiLFwiY2N1cHNcIjpcIuKpjFwiLFwiY2N1cHNzbVwiOlwi4qmQXCIsXCJDZG90XCI6XCLEilwiLFwiY2RvdFwiOlwixItcIixcImNlZGlsXCI6XCLCuFwiLFwiQ2VkaWxsYVwiOlwiwrhcIixcImNlbXB0eXZcIjpcIuKmslwiLFwiY2VudFwiOlwiwqJcIixcImNlbnRlcmRvdFwiOlwiwrdcIixcIkNlbnRlckRvdFwiOlwiwrdcIixcImNmclwiOlwi8J2UoFwiLFwiQ2ZyXCI6XCLihK1cIixcIkNIY3lcIjpcItCnXCIsXCJjaGN5XCI6XCLRh1wiLFwiY2hlY2tcIjpcIuKck1wiLFwiY2hlY2ttYXJrXCI6XCLinJNcIixcIkNoaVwiOlwizqdcIixcImNoaVwiOlwiz4dcIixcImNpcmNcIjpcIsuGXCIsXCJjaXJjZXFcIjpcIuKJl1wiLFwiY2lyY2xlYXJyb3dsZWZ0XCI6XCLihrpcIixcImNpcmNsZWFycm93cmlnaHRcIjpcIuKGu1wiLFwiY2lyY2xlZGFzdFwiOlwi4oqbXCIsXCJjaXJjbGVkY2lyY1wiOlwi4oqaXCIsXCJjaXJjbGVkZGFzaFwiOlwi4oqdXCIsXCJDaXJjbGVEb3RcIjpcIuKKmVwiLFwiY2lyY2xlZFJcIjpcIsKuXCIsXCJjaXJjbGVkU1wiOlwi4pOIXCIsXCJDaXJjbGVNaW51c1wiOlwi4oqWXCIsXCJDaXJjbGVQbHVzXCI6XCLiipVcIixcIkNpcmNsZVRpbWVzXCI6XCLiipdcIixcImNpclwiOlwi4peLXCIsXCJjaXJFXCI6XCLip4NcIixcImNpcmVcIjpcIuKJl1wiLFwiY2lyZm5pbnRcIjpcIuKokFwiLFwiY2lybWlkXCI6XCLiq69cIixcImNpcnNjaXJcIjpcIuKnglwiLFwiQ2xvY2t3aXNlQ29udG91ckludGVncmFsXCI6XCLiiLJcIixcIkNsb3NlQ3VybHlEb3VibGVRdW90ZVwiOlwi4oCdXCIsXCJDbG9zZUN1cmx5UXVvdGVcIjpcIuKAmVwiLFwiY2x1YnNcIjpcIuKZo1wiLFwiY2x1YnN1aXRcIjpcIuKZo1wiLFwiY29sb25cIjpcIjpcIixcIkNvbG9uXCI6XCLiiLdcIixcIkNvbG9uZVwiOlwi4qm0XCIsXCJjb2xvbmVcIjpcIuKJlFwiLFwiY29sb25lcVwiOlwi4omUXCIsXCJjb21tYVwiOlwiLFwiLFwiY29tbWF0XCI6XCJAXCIsXCJjb21wXCI6XCLiiIFcIixcImNvbXBmblwiOlwi4oiYXCIsXCJjb21wbGVtZW50XCI6XCLiiIFcIixcImNvbXBsZXhlc1wiOlwi4oSCXCIsXCJjb25nXCI6XCLiiYVcIixcImNvbmdkb3RcIjpcIuKprVwiLFwiQ29uZ3J1ZW50XCI6XCLiiaFcIixcImNvbmludFwiOlwi4oiuXCIsXCJDb25pbnRcIjpcIuKIr1wiLFwiQ29udG91ckludGVncmFsXCI6XCLiiK5cIixcImNvcGZcIjpcIvCdlZRcIixcIkNvcGZcIjpcIuKEglwiLFwiY29wcm9kXCI6XCLiiJBcIixcIkNvcHJvZHVjdFwiOlwi4oiQXCIsXCJjb3B5XCI6XCLCqVwiLFwiQ09QWVwiOlwiwqlcIixcImNvcHlzclwiOlwi4oSXXCIsXCJDb3VudGVyQ2xvY2t3aXNlQ29udG91ckludGVncmFsXCI6XCLiiLNcIixcImNyYXJyXCI6XCLihrVcIixcImNyb3NzXCI6XCLinJdcIixcIkNyb3NzXCI6XCLiqK9cIixcIkNzY3JcIjpcIvCdkp5cIixcImNzY3JcIjpcIvCdkrhcIixcImNzdWJcIjpcIuKrj1wiLFwiY3N1YmVcIjpcIuKrkVwiLFwiY3N1cFwiOlwi4quQXCIsXCJjc3VwZVwiOlwi4quSXCIsXCJjdGRvdFwiOlwi4ouvXCIsXCJjdWRhcnJsXCI6XCLipLhcIixcImN1ZGFycnJcIjpcIuKktVwiLFwiY3VlcHJcIjpcIuKLnlwiLFwiY3Vlc2NcIjpcIuKLn1wiLFwiY3VsYXJyXCI6XCLihrZcIixcImN1bGFycnBcIjpcIuKkvVwiLFwiY3VwYnJjYXBcIjpcIuKpiFwiLFwiY3VwY2FwXCI6XCLiqYZcIixcIkN1cENhcFwiOlwi4omNXCIsXCJjdXBcIjpcIuKIqlwiLFwiQ3VwXCI6XCLii5NcIixcImN1cGN1cFwiOlwi4qmKXCIsXCJjdXBkb3RcIjpcIuKKjVwiLFwiY3Vwb3JcIjpcIuKphVwiLFwiY3Vwc1wiOlwi4oiq77iAXCIsXCJjdXJhcnJcIjpcIuKGt1wiLFwiY3VyYXJybVwiOlwi4qS8XCIsXCJjdXJseWVxcHJlY1wiOlwi4oueXCIsXCJjdXJseWVxc3VjY1wiOlwi4oufXCIsXCJjdXJseXZlZVwiOlwi4ouOXCIsXCJjdXJseXdlZGdlXCI6XCLii49cIixcImN1cnJlblwiOlwiwqRcIixcImN1cnZlYXJyb3dsZWZ0XCI6XCLihrZcIixcImN1cnZlYXJyb3dyaWdodFwiOlwi4oa3XCIsXCJjdXZlZVwiOlwi4ouOXCIsXCJjdXdlZFwiOlwi4ouPXCIsXCJjd2NvbmludFwiOlwi4oiyXCIsXCJjd2ludFwiOlwi4oixXCIsXCJjeWxjdHlcIjpcIuKMrVwiLFwiZGFnZ2VyXCI6XCLigKBcIixcIkRhZ2dlclwiOlwi4oChXCIsXCJkYWxldGhcIjpcIuKEuFwiLFwiZGFyclwiOlwi4oaTXCIsXCJEYXJyXCI6XCLihqFcIixcImRBcnJcIjpcIuKHk1wiLFwiZGFzaFwiOlwi4oCQXCIsXCJEYXNodlwiOlwi4qukXCIsXCJkYXNodlwiOlwi4oqjXCIsXCJkYmthcm93XCI6XCLipI9cIixcImRibGFjXCI6XCLLnVwiLFwiRGNhcm9uXCI6XCLEjlwiLFwiZGNhcm9uXCI6XCLEj1wiLFwiRGN5XCI6XCLQlFwiLFwiZGN5XCI6XCLQtFwiLFwiZGRhZ2dlclwiOlwi4oChXCIsXCJkZGFyclwiOlwi4oeKXCIsXCJERFwiOlwi4oWFXCIsXCJkZFwiOlwi4oWGXCIsXCJERG90cmFoZFwiOlwi4qSRXCIsXCJkZG90c2VxXCI6XCLiqbdcIixcImRlZ1wiOlwiwrBcIixcIkRlbFwiOlwi4oiHXCIsXCJEZWx0YVwiOlwizpRcIixcImRlbHRhXCI6XCLOtFwiLFwiZGVtcHR5dlwiOlwi4qaxXCIsXCJkZmlzaHRcIjpcIuKlv1wiLFwiRGZyXCI6XCLwnZSHXCIsXCJkZnJcIjpcIvCdlKFcIixcImRIYXJcIjpcIuKlpVwiLFwiZGhhcmxcIjpcIuKHg1wiLFwiZGhhcnJcIjpcIuKHglwiLFwiRGlhY3JpdGljYWxBY3V0ZVwiOlwiwrRcIixcIkRpYWNyaXRpY2FsRG90XCI6XCLLmVwiLFwiRGlhY3JpdGljYWxEb3VibGVBY3V0ZVwiOlwiy51cIixcIkRpYWNyaXRpY2FsR3JhdmVcIjpcImBcIixcIkRpYWNyaXRpY2FsVGlsZGVcIjpcIsucXCIsXCJkaWFtXCI6XCLii4RcIixcImRpYW1vbmRcIjpcIuKLhFwiLFwiRGlhbW9uZFwiOlwi4ouEXCIsXCJkaWFtb25kc3VpdFwiOlwi4pmmXCIsXCJkaWFtc1wiOlwi4pmmXCIsXCJkaWVcIjpcIsKoXCIsXCJEaWZmZXJlbnRpYWxEXCI6XCLihYZcIixcImRpZ2FtbWFcIjpcIs+dXCIsXCJkaXNpblwiOlwi4ouyXCIsXCJkaXZcIjpcIsO3XCIsXCJkaXZpZGVcIjpcIsO3XCIsXCJkaXZpZGVvbnRpbWVzXCI6XCLii4dcIixcImRpdm9ueFwiOlwi4ouHXCIsXCJESmN5XCI6XCLQglwiLFwiZGpjeVwiOlwi0ZJcIixcImRsY29yblwiOlwi4oyeXCIsXCJkbGNyb3BcIjpcIuKMjVwiLFwiZG9sbGFyXCI6XCIkXCIsXCJEb3BmXCI6XCLwnZS7XCIsXCJkb3BmXCI6XCLwnZWVXCIsXCJEb3RcIjpcIsKoXCIsXCJkb3RcIjpcIsuZXCIsXCJEb3REb3RcIjpcIuKDnFwiLFwiZG90ZXFcIjpcIuKJkFwiLFwiZG90ZXFkb3RcIjpcIuKJkVwiLFwiRG90RXF1YWxcIjpcIuKJkFwiLFwiZG90bWludXNcIjpcIuKIuFwiLFwiZG90cGx1c1wiOlwi4oiUXCIsXCJkb3RzcXVhcmVcIjpcIuKKoVwiLFwiZG91YmxlYmFyd2VkZ2VcIjpcIuKMhlwiLFwiRG91YmxlQ29udG91ckludGVncmFsXCI6XCLiiK9cIixcIkRvdWJsZURvdFwiOlwiwqhcIixcIkRvdWJsZURvd25BcnJvd1wiOlwi4oeTXCIsXCJEb3VibGVMZWZ0QXJyb3dcIjpcIuKHkFwiLFwiRG91YmxlTGVmdFJpZ2h0QXJyb3dcIjpcIuKHlFwiLFwiRG91YmxlTGVmdFRlZVwiOlwi4qukXCIsXCJEb3VibGVMb25nTGVmdEFycm93XCI6XCLin7hcIixcIkRvdWJsZUxvbmdMZWZ0UmlnaHRBcnJvd1wiOlwi4p+6XCIsXCJEb3VibGVMb25nUmlnaHRBcnJvd1wiOlwi4p+5XCIsXCJEb3VibGVSaWdodEFycm93XCI6XCLih5JcIixcIkRvdWJsZVJpZ2h0VGVlXCI6XCLiiqhcIixcIkRvdWJsZVVwQXJyb3dcIjpcIuKHkVwiLFwiRG91YmxlVXBEb3duQXJyb3dcIjpcIuKHlVwiLFwiRG91YmxlVmVydGljYWxCYXJcIjpcIuKIpVwiLFwiRG93bkFycm93QmFyXCI6XCLipJNcIixcImRvd25hcnJvd1wiOlwi4oaTXCIsXCJEb3duQXJyb3dcIjpcIuKGk1wiLFwiRG93bmFycm93XCI6XCLih5NcIixcIkRvd25BcnJvd1VwQXJyb3dcIjpcIuKHtVwiLFwiRG93bkJyZXZlXCI6XCLMkVwiLFwiZG93bmRvd25hcnJvd3NcIjpcIuKHilwiLFwiZG93bmhhcnBvb25sZWZ0XCI6XCLih4NcIixcImRvd25oYXJwb29ucmlnaHRcIjpcIuKHglwiLFwiRG93bkxlZnRSaWdodFZlY3RvclwiOlwi4qWQXCIsXCJEb3duTGVmdFRlZVZlY3RvclwiOlwi4qWeXCIsXCJEb3duTGVmdFZlY3RvckJhclwiOlwi4qWWXCIsXCJEb3duTGVmdFZlY3RvclwiOlwi4oa9XCIsXCJEb3duUmlnaHRUZWVWZWN0b3JcIjpcIuKln1wiLFwiRG93blJpZ2h0VmVjdG9yQmFyXCI6XCLipZdcIixcIkRvd25SaWdodFZlY3RvclwiOlwi4oeBXCIsXCJEb3duVGVlQXJyb3dcIjpcIuKGp1wiLFwiRG93blRlZVwiOlwi4oqkXCIsXCJkcmJrYXJvd1wiOlwi4qSQXCIsXCJkcmNvcm5cIjpcIuKMn1wiLFwiZHJjcm9wXCI6XCLijIxcIixcIkRzY3JcIjpcIvCdkp9cIixcImRzY3JcIjpcIvCdkrlcIixcIkRTY3lcIjpcItCFXCIsXCJkc2N5XCI6XCLRlVwiLFwiZHNvbFwiOlwi4qe2XCIsXCJEc3Ryb2tcIjpcIsSQXCIsXCJkc3Ryb2tcIjpcIsSRXCIsXCJkdGRvdFwiOlwi4ouxXCIsXCJkdHJpXCI6XCLilr9cIixcImR0cmlmXCI6XCLilr5cIixcImR1YXJyXCI6XCLih7VcIixcImR1aGFyXCI6XCLipa9cIixcImR3YW5nbGVcIjpcIuKmplwiLFwiRFpjeVwiOlwi0I9cIixcImR6Y3lcIjpcItGfXCIsXCJkemlncmFyclwiOlwi4p+/XCIsXCJFYWN1dGVcIjpcIsOJXCIsXCJlYWN1dGVcIjpcIsOpXCIsXCJlYXN0ZXJcIjpcIuKprlwiLFwiRWNhcm9uXCI6XCLEmlwiLFwiZWNhcm9uXCI6XCLEm1wiLFwiRWNpcmNcIjpcIsOKXCIsXCJlY2lyY1wiOlwiw6pcIixcImVjaXJcIjpcIuKJllwiLFwiZWNvbG9uXCI6XCLiiZVcIixcIkVjeVwiOlwi0K1cIixcImVjeVwiOlwi0Y1cIixcImVERG90XCI6XCLiqbdcIixcIkVkb3RcIjpcIsSWXCIsXCJlZG90XCI6XCLEl1wiLFwiZURvdFwiOlwi4omRXCIsXCJlZVwiOlwi4oWHXCIsXCJlZkRvdFwiOlwi4omSXCIsXCJFZnJcIjpcIvCdlIhcIixcImVmclwiOlwi8J2UolwiLFwiZWdcIjpcIuKqmlwiLFwiRWdyYXZlXCI6XCLDiFwiLFwiZWdyYXZlXCI6XCLDqFwiLFwiZWdzXCI6XCLiqpZcIixcImVnc2RvdFwiOlwi4qqYXCIsXCJlbFwiOlwi4qqZXCIsXCJFbGVtZW50XCI6XCLiiIhcIixcImVsaW50ZXJzXCI6XCLij6dcIixcImVsbFwiOlwi4oSTXCIsXCJlbHNcIjpcIuKqlVwiLFwiZWxzZG90XCI6XCLiqpdcIixcIkVtYWNyXCI6XCLEklwiLFwiZW1hY3JcIjpcIsSTXCIsXCJlbXB0eVwiOlwi4oiFXCIsXCJlbXB0eXNldFwiOlwi4oiFXCIsXCJFbXB0eVNtYWxsU3F1YXJlXCI6XCLil7tcIixcImVtcHR5dlwiOlwi4oiFXCIsXCJFbXB0eVZlcnlTbWFsbFNxdWFyZVwiOlwi4parXCIsXCJlbXNwMTNcIjpcIuKAhFwiLFwiZW1zcDE0XCI6XCLigIVcIixcImVtc3BcIjpcIuKAg1wiLFwiRU5HXCI6XCLFilwiLFwiZW5nXCI6XCLFi1wiLFwiZW5zcFwiOlwi4oCCXCIsXCJFb2dvblwiOlwixJhcIixcImVvZ29uXCI6XCLEmVwiLFwiRW9wZlwiOlwi8J2UvFwiLFwiZW9wZlwiOlwi8J2VllwiLFwiZXBhclwiOlwi4ouVXCIsXCJlcGFyc2xcIjpcIuKno1wiLFwiZXBsdXNcIjpcIuKpsVwiLFwiZXBzaVwiOlwizrVcIixcIkVwc2lsb25cIjpcIs6VXCIsXCJlcHNpbG9uXCI6XCLOtVwiLFwiZXBzaXZcIjpcIs+1XCIsXCJlcWNpcmNcIjpcIuKJllwiLFwiZXFjb2xvblwiOlwi4omVXCIsXCJlcXNpbVwiOlwi4omCXCIsXCJlcXNsYW50Z3RyXCI6XCLiqpZcIixcImVxc2xhbnRsZXNzXCI6XCLiqpVcIixcIkVxdWFsXCI6XCLiqbVcIixcImVxdWFsc1wiOlwiPVwiLFwiRXF1YWxUaWxkZVwiOlwi4omCXCIsXCJlcXVlc3RcIjpcIuKJn1wiLFwiRXF1aWxpYnJpdW1cIjpcIuKHjFwiLFwiZXF1aXZcIjpcIuKJoVwiLFwiZXF1aXZERFwiOlwi4qm4XCIsXCJlcXZwYXJzbFwiOlwi4qelXCIsXCJlcmFyclwiOlwi4qWxXCIsXCJlckRvdFwiOlwi4omTXCIsXCJlc2NyXCI6XCLihK9cIixcIkVzY3JcIjpcIuKEsFwiLFwiZXNkb3RcIjpcIuKJkFwiLFwiRXNpbVwiOlwi4qmzXCIsXCJlc2ltXCI6XCLiiYJcIixcIkV0YVwiOlwizpdcIixcImV0YVwiOlwizrdcIixcIkVUSFwiOlwiw5BcIixcImV0aFwiOlwiw7BcIixcIkV1bWxcIjpcIsOLXCIsXCJldW1sXCI6XCLDq1wiLFwiZXVyb1wiOlwi4oKsXCIsXCJleGNsXCI6XCIhXCIsXCJleGlzdFwiOlwi4oiDXCIsXCJFeGlzdHNcIjpcIuKIg1wiLFwiZXhwZWN0YXRpb25cIjpcIuKEsFwiLFwiZXhwb25lbnRpYWxlXCI6XCLihYdcIixcIkV4cG9uZW50aWFsRVwiOlwi4oWHXCIsXCJmYWxsaW5nZG90c2VxXCI6XCLiiZJcIixcIkZjeVwiOlwi0KRcIixcImZjeVwiOlwi0YRcIixcImZlbWFsZVwiOlwi4pmAXCIsXCJmZmlsaWdcIjpcIu+sg1wiLFwiZmZsaWdcIjpcIu+sgFwiLFwiZmZsbGlnXCI6XCLvrIRcIixcIkZmclwiOlwi8J2UiVwiLFwiZmZyXCI6XCLwnZSjXCIsXCJmaWxpZ1wiOlwi76yBXCIsXCJGaWxsZWRTbWFsbFNxdWFyZVwiOlwi4pe8XCIsXCJGaWxsZWRWZXJ5U21hbGxTcXVhcmVcIjpcIuKWqlwiLFwiZmpsaWdcIjpcImZqXCIsXCJmbGF0XCI6XCLima1cIixcImZsbGlnXCI6XCLvrIJcIixcImZsdG5zXCI6XCLilrFcIixcImZub2ZcIjpcIsaSXCIsXCJGb3BmXCI6XCLwnZS9XCIsXCJmb3BmXCI6XCLwnZWXXCIsXCJmb3JhbGxcIjpcIuKIgFwiLFwiRm9yQWxsXCI6XCLiiIBcIixcImZvcmtcIjpcIuKLlFwiLFwiZm9ya3ZcIjpcIuKrmVwiLFwiRm91cmllcnRyZlwiOlwi4oSxXCIsXCJmcGFydGludFwiOlwi4qiNXCIsXCJmcmFjMTJcIjpcIsK9XCIsXCJmcmFjMTNcIjpcIuKFk1wiLFwiZnJhYzE0XCI6XCLCvFwiLFwiZnJhYzE1XCI6XCLihZVcIixcImZyYWMxNlwiOlwi4oWZXCIsXCJmcmFjMThcIjpcIuKFm1wiLFwiZnJhYzIzXCI6XCLihZRcIixcImZyYWMyNVwiOlwi4oWWXCIsXCJmcmFjMzRcIjpcIsK+XCIsXCJmcmFjMzVcIjpcIuKFl1wiLFwiZnJhYzM4XCI6XCLihZxcIixcImZyYWM0NVwiOlwi4oWYXCIsXCJmcmFjNTZcIjpcIuKFmlwiLFwiZnJhYzU4XCI6XCLihZ1cIixcImZyYWM3OFwiOlwi4oWeXCIsXCJmcmFzbFwiOlwi4oGEXCIsXCJmcm93blwiOlwi4oyiXCIsXCJmc2NyXCI6XCLwnZK7XCIsXCJGc2NyXCI6XCLihLFcIixcImdhY3V0ZVwiOlwix7VcIixcIkdhbW1hXCI6XCLOk1wiLFwiZ2FtbWFcIjpcIs6zXCIsXCJHYW1tYWRcIjpcIs+cXCIsXCJnYW1tYWRcIjpcIs+dXCIsXCJnYXBcIjpcIuKqhlwiLFwiR2JyZXZlXCI6XCLEnlwiLFwiZ2JyZXZlXCI6XCLEn1wiLFwiR2NlZGlsXCI6XCLEolwiLFwiR2NpcmNcIjpcIsScXCIsXCJnY2lyY1wiOlwixJ1cIixcIkdjeVwiOlwi0JNcIixcImdjeVwiOlwi0LNcIixcIkdkb3RcIjpcIsSgXCIsXCJnZG90XCI6XCLEoVwiLFwiZ2VcIjpcIuKJpVwiLFwiZ0VcIjpcIuKJp1wiLFwiZ0VsXCI6XCLiqoxcIixcImdlbFwiOlwi4oubXCIsXCJnZXFcIjpcIuKJpVwiLFwiZ2VxcVwiOlwi4omnXCIsXCJnZXFzbGFudFwiOlwi4qm+XCIsXCJnZXNjY1wiOlwi4qqpXCIsXCJnZXNcIjpcIuKpvlwiLFwiZ2VzZG90XCI6XCLiqoBcIixcImdlc2RvdG9cIjpcIuKqglwiLFwiZ2VzZG90b2xcIjpcIuKqhFwiLFwiZ2VzbFwiOlwi4oub77iAXCIsXCJnZXNsZXNcIjpcIuKqlFwiLFwiR2ZyXCI6XCLwnZSKXCIsXCJnZnJcIjpcIvCdlKRcIixcImdnXCI6XCLiiatcIixcIkdnXCI6XCLii5lcIixcImdnZ1wiOlwi4ouZXCIsXCJnaW1lbFwiOlwi4oS3XCIsXCJHSmN5XCI6XCLQg1wiLFwiZ2pjeVwiOlwi0ZNcIixcImdsYVwiOlwi4qqlXCIsXCJnbFwiOlwi4om3XCIsXCJnbEVcIjpcIuKqklwiLFwiZ2xqXCI6XCLiqqRcIixcImduYXBcIjpcIuKqilwiLFwiZ25hcHByb3hcIjpcIuKqilwiLFwiZ25lXCI6XCLiqohcIixcImduRVwiOlwi4ompXCIsXCJnbmVxXCI6XCLiqohcIixcImduZXFxXCI6XCLiialcIixcImduc2ltXCI6XCLii6dcIixcIkdvcGZcIjpcIvCdlL5cIixcImdvcGZcIjpcIvCdlZhcIixcImdyYXZlXCI6XCJgXCIsXCJHcmVhdGVyRXF1YWxcIjpcIuKJpVwiLFwiR3JlYXRlckVxdWFsTGVzc1wiOlwi4oubXCIsXCJHcmVhdGVyRnVsbEVxdWFsXCI6XCLiiadcIixcIkdyZWF0ZXJHcmVhdGVyXCI6XCLiqqJcIixcIkdyZWF0ZXJMZXNzXCI6XCLiibdcIixcIkdyZWF0ZXJTbGFudEVxdWFsXCI6XCLiqb5cIixcIkdyZWF0ZXJUaWxkZVwiOlwi4omzXCIsXCJHc2NyXCI6XCLwnZKiXCIsXCJnc2NyXCI6XCLihIpcIixcImdzaW1cIjpcIuKJs1wiLFwiZ3NpbWVcIjpcIuKqjlwiLFwiZ3NpbWxcIjpcIuKqkFwiLFwiZ3RjY1wiOlwi4qqnXCIsXCJndGNpclwiOlwi4qm6XCIsXCJndFwiOlwiPlwiLFwiR1RcIjpcIj5cIixcIkd0XCI6XCLiiatcIixcImd0ZG90XCI6XCLii5dcIixcImd0bFBhclwiOlwi4qaVXCIsXCJndHF1ZXN0XCI6XCLiqbxcIixcImd0cmFwcHJveFwiOlwi4qqGXCIsXCJndHJhcnJcIjpcIuKluFwiLFwiZ3RyZG90XCI6XCLii5dcIixcImd0cmVxbGVzc1wiOlwi4oubXCIsXCJndHJlcXFsZXNzXCI6XCLiqoxcIixcImd0cmxlc3NcIjpcIuKJt1wiLFwiZ3Ryc2ltXCI6XCLiibNcIixcImd2ZXJ0bmVxcVwiOlwi4omp77iAXCIsXCJndm5FXCI6XCLiianvuIBcIixcIkhhY2VrXCI6XCLLh1wiLFwiaGFpcnNwXCI6XCLigIpcIixcImhhbGZcIjpcIsK9XCIsXCJoYW1pbHRcIjpcIuKEi1wiLFwiSEFSRGN5XCI6XCLQqlwiLFwiaGFyZGN5XCI6XCLRilwiLFwiaGFycmNpclwiOlwi4qWIXCIsXCJoYXJyXCI6XCLihpRcIixcImhBcnJcIjpcIuKHlFwiLFwiaGFycndcIjpcIuKGrVwiLFwiSGF0XCI6XCJeXCIsXCJoYmFyXCI6XCLihI9cIixcIkhjaXJjXCI6XCLEpFwiLFwiaGNpcmNcIjpcIsSlXCIsXCJoZWFydHNcIjpcIuKZpVwiLFwiaGVhcnRzdWl0XCI6XCLimaVcIixcImhlbGxpcFwiOlwi4oCmXCIsXCJoZXJjb25cIjpcIuKKuVwiLFwiaGZyXCI6XCLwnZSlXCIsXCJIZnJcIjpcIuKEjFwiLFwiSGlsYmVydFNwYWNlXCI6XCLihItcIixcImhrc2Vhcm93XCI6XCLipKVcIixcImhrc3dhcm93XCI6XCLipKZcIixcImhvYXJyXCI6XCLih79cIixcImhvbXRodFwiOlwi4oi7XCIsXCJob29rbGVmdGFycm93XCI6XCLihqlcIixcImhvb2tyaWdodGFycm93XCI6XCLihqpcIixcImhvcGZcIjpcIvCdlZlcIixcIkhvcGZcIjpcIuKEjVwiLFwiaG9yYmFyXCI6XCLigJVcIixcIkhvcml6b250YWxMaW5lXCI6XCLilIBcIixcImhzY3JcIjpcIvCdkr1cIixcIkhzY3JcIjpcIuKEi1wiLFwiaHNsYXNoXCI6XCLihI9cIixcIkhzdHJva1wiOlwixKZcIixcImhzdHJva1wiOlwixKdcIixcIkh1bXBEb3duSHVtcFwiOlwi4omOXCIsXCJIdW1wRXF1YWxcIjpcIuKJj1wiLFwiaHlidWxsXCI6XCLigYNcIixcImh5cGhlblwiOlwi4oCQXCIsXCJJYWN1dGVcIjpcIsONXCIsXCJpYWN1dGVcIjpcIsOtXCIsXCJpY1wiOlwi4oGjXCIsXCJJY2lyY1wiOlwiw45cIixcImljaXJjXCI6XCLDrlwiLFwiSWN5XCI6XCLQmFwiLFwiaWN5XCI6XCLQuFwiLFwiSWRvdFwiOlwixLBcIixcIklFY3lcIjpcItCVXCIsXCJpZWN5XCI6XCLQtVwiLFwiaWV4Y2xcIjpcIsKhXCIsXCJpZmZcIjpcIuKHlFwiLFwiaWZyXCI6XCLwnZSmXCIsXCJJZnJcIjpcIuKEkVwiLFwiSWdyYXZlXCI6XCLDjFwiLFwiaWdyYXZlXCI6XCLDrFwiLFwiaWlcIjpcIuKFiFwiLFwiaWlpaW50XCI6XCLiqIxcIixcImlpaW50XCI6XCLiiK1cIixcImlpbmZpblwiOlwi4qecXCIsXCJpaW90YVwiOlwi4oSpXCIsXCJJSmxpZ1wiOlwixLJcIixcImlqbGlnXCI6XCLEs1wiLFwiSW1hY3JcIjpcIsSqXCIsXCJpbWFjclwiOlwixKtcIixcImltYWdlXCI6XCLihJFcIixcIkltYWdpbmFyeUlcIjpcIuKFiFwiLFwiaW1hZ2xpbmVcIjpcIuKEkFwiLFwiaW1hZ3BhcnRcIjpcIuKEkVwiLFwiaW1hdGhcIjpcIsSxXCIsXCJJbVwiOlwi4oSRXCIsXCJpbW9mXCI6XCLiirdcIixcImltcGVkXCI6XCLGtVwiLFwiSW1wbGllc1wiOlwi4oeSXCIsXCJpbmNhcmVcIjpcIuKEhVwiLFwiaW5cIjpcIuKIiFwiLFwiaW5maW5cIjpcIuKInlwiLFwiaW5maW50aWVcIjpcIuKnnVwiLFwiaW5vZG90XCI6XCLEsVwiLFwiaW50Y2FsXCI6XCLiirpcIixcImludFwiOlwi4oirXCIsXCJJbnRcIjpcIuKIrFwiLFwiaW50ZWdlcnNcIjpcIuKEpFwiLFwiSW50ZWdyYWxcIjpcIuKIq1wiLFwiaW50ZXJjYWxcIjpcIuKKulwiLFwiSW50ZXJzZWN0aW9uXCI6XCLii4JcIixcImludGxhcmhrXCI6XCLiqJdcIixcImludHByb2RcIjpcIuKovFwiLFwiSW52aXNpYmxlQ29tbWFcIjpcIuKBo1wiLFwiSW52aXNpYmxlVGltZXNcIjpcIuKBolwiLFwiSU9jeVwiOlwi0IFcIixcImlvY3lcIjpcItGRXCIsXCJJb2dvblwiOlwixK5cIixcImlvZ29uXCI6XCLEr1wiLFwiSW9wZlwiOlwi8J2VgFwiLFwiaW9wZlwiOlwi8J2VmlwiLFwiSW90YVwiOlwizplcIixcImlvdGFcIjpcIs65XCIsXCJpcHJvZFwiOlwi4qi8XCIsXCJpcXVlc3RcIjpcIsK/XCIsXCJpc2NyXCI6XCLwnZK+XCIsXCJJc2NyXCI6XCLihJBcIixcImlzaW5cIjpcIuKIiFwiLFwiaXNpbmRvdFwiOlwi4ou1XCIsXCJpc2luRVwiOlwi4ou5XCIsXCJpc2luc1wiOlwi4ou0XCIsXCJpc2luc3ZcIjpcIuKLs1wiLFwiaXNpbnZcIjpcIuKIiFwiLFwiaXRcIjpcIuKBolwiLFwiSXRpbGRlXCI6XCLEqFwiLFwiaXRpbGRlXCI6XCLEqVwiLFwiSXVrY3lcIjpcItCGXCIsXCJpdWtjeVwiOlwi0ZZcIixcIkl1bWxcIjpcIsOPXCIsXCJpdW1sXCI6XCLDr1wiLFwiSmNpcmNcIjpcIsS0XCIsXCJqY2lyY1wiOlwixLVcIixcIkpjeVwiOlwi0JlcIixcImpjeVwiOlwi0LlcIixcIkpmclwiOlwi8J2UjVwiLFwiamZyXCI6XCLwnZSnXCIsXCJqbWF0aFwiOlwiyLdcIixcIkpvcGZcIjpcIvCdlYFcIixcImpvcGZcIjpcIvCdlZtcIixcIkpzY3JcIjpcIvCdkqVcIixcImpzY3JcIjpcIvCdkr9cIixcIkpzZXJjeVwiOlwi0IhcIixcImpzZXJjeVwiOlwi0ZhcIixcIkp1a2N5XCI6XCLQhFwiLFwianVrY3lcIjpcItGUXCIsXCJLYXBwYVwiOlwizppcIixcImthcHBhXCI6XCLOulwiLFwia2FwcGF2XCI6XCLPsFwiLFwiS2NlZGlsXCI6XCLEtlwiLFwia2NlZGlsXCI6XCLEt1wiLFwiS2N5XCI6XCLQmlwiLFwia2N5XCI6XCLQulwiLFwiS2ZyXCI6XCLwnZSOXCIsXCJrZnJcIjpcIvCdlKhcIixcImtncmVlblwiOlwixLhcIixcIktIY3lcIjpcItClXCIsXCJraGN5XCI6XCLRhVwiLFwiS0pjeVwiOlwi0IxcIixcImtqY3lcIjpcItGcXCIsXCJLb3BmXCI6XCLwnZWCXCIsXCJrb3BmXCI6XCLwnZWcXCIsXCJLc2NyXCI6XCLwnZKmXCIsXCJrc2NyXCI6XCLwnZOAXCIsXCJsQWFyclwiOlwi4oeaXCIsXCJMYWN1dGVcIjpcIsS5XCIsXCJsYWN1dGVcIjpcIsS6XCIsXCJsYWVtcHR5dlwiOlwi4qa0XCIsXCJsYWdyYW5cIjpcIuKEklwiLFwiTGFtYmRhXCI6XCLOm1wiLFwibGFtYmRhXCI6XCLOu1wiLFwibGFuZ1wiOlwi4p+oXCIsXCJMYW5nXCI6XCLin6pcIixcImxhbmdkXCI6XCLippFcIixcImxhbmdsZVwiOlwi4p+oXCIsXCJsYXBcIjpcIuKqhVwiLFwiTGFwbGFjZXRyZlwiOlwi4oSSXCIsXCJsYXF1b1wiOlwiwqtcIixcImxhcnJiXCI6XCLih6RcIixcImxhcnJiZnNcIjpcIuKkn1wiLFwibGFyclwiOlwi4oaQXCIsXCJMYXJyXCI6XCLihp5cIixcImxBcnJcIjpcIuKHkFwiLFwibGFycmZzXCI6XCLipJ1cIixcImxhcnJoa1wiOlwi4oapXCIsXCJsYXJybHBcIjpcIuKGq1wiLFwibGFycnBsXCI6XCLipLlcIixcImxhcnJzaW1cIjpcIuKls1wiLFwibGFycnRsXCI6XCLihqJcIixcImxhdGFpbFwiOlwi4qSZXCIsXCJsQXRhaWxcIjpcIuKkm1wiLFwibGF0XCI6XCLiqqtcIixcImxhdGVcIjpcIuKqrVwiLFwibGF0ZXNcIjpcIuKqre+4gFwiLFwibGJhcnJcIjpcIuKkjFwiLFwibEJhcnJcIjpcIuKkjlwiLFwibGJicmtcIjpcIuKdslwiLFwibGJyYWNlXCI6XCJ7XCIsXCJsYnJhY2tcIjpcIltcIixcImxicmtlXCI6XCLipotcIixcImxicmtzbGRcIjpcIuKmj1wiLFwibGJya3NsdVwiOlwi4qaNXCIsXCJMY2Fyb25cIjpcIsS9XCIsXCJsY2Fyb25cIjpcIsS+XCIsXCJMY2VkaWxcIjpcIsS7XCIsXCJsY2VkaWxcIjpcIsS8XCIsXCJsY2VpbFwiOlwi4oyIXCIsXCJsY3ViXCI6XCJ7XCIsXCJMY3lcIjpcItCbXCIsXCJsY3lcIjpcItC7XCIsXCJsZGNhXCI6XCLipLZcIixcImxkcXVvXCI6XCLigJxcIixcImxkcXVvclwiOlwi4oCeXCIsXCJsZHJkaGFyXCI6XCLipadcIixcImxkcnVzaGFyXCI6XCLipYtcIixcImxkc2hcIjpcIuKGslwiLFwibGVcIjpcIuKJpFwiLFwibEVcIjpcIuKJplwiLFwiTGVmdEFuZ2xlQnJhY2tldFwiOlwi4p+oXCIsXCJMZWZ0QXJyb3dCYXJcIjpcIuKHpFwiLFwibGVmdGFycm93XCI6XCLihpBcIixcIkxlZnRBcnJvd1wiOlwi4oaQXCIsXCJMZWZ0YXJyb3dcIjpcIuKHkFwiLFwiTGVmdEFycm93UmlnaHRBcnJvd1wiOlwi4oeGXCIsXCJsZWZ0YXJyb3d0YWlsXCI6XCLihqJcIixcIkxlZnRDZWlsaW5nXCI6XCLijIhcIixcIkxlZnREb3VibGVCcmFja2V0XCI6XCLin6ZcIixcIkxlZnREb3duVGVlVmVjdG9yXCI6XCLipaFcIixcIkxlZnREb3duVmVjdG9yQmFyXCI6XCLipZlcIixcIkxlZnREb3duVmVjdG9yXCI6XCLih4NcIixcIkxlZnRGbG9vclwiOlwi4oyKXCIsXCJsZWZ0aGFycG9vbmRvd25cIjpcIuKGvVwiLFwibGVmdGhhcnBvb251cFwiOlwi4oa8XCIsXCJsZWZ0bGVmdGFycm93c1wiOlwi4oeHXCIsXCJsZWZ0cmlnaHRhcnJvd1wiOlwi4oaUXCIsXCJMZWZ0UmlnaHRBcnJvd1wiOlwi4oaUXCIsXCJMZWZ0cmlnaHRhcnJvd1wiOlwi4oeUXCIsXCJsZWZ0cmlnaHRhcnJvd3NcIjpcIuKHhlwiLFwibGVmdHJpZ2h0aGFycG9vbnNcIjpcIuKHi1wiLFwibGVmdHJpZ2h0c3F1aWdhcnJvd1wiOlwi4oatXCIsXCJMZWZ0UmlnaHRWZWN0b3JcIjpcIuKljlwiLFwiTGVmdFRlZUFycm93XCI6XCLihqRcIixcIkxlZnRUZWVcIjpcIuKKo1wiLFwiTGVmdFRlZVZlY3RvclwiOlwi4qWaXCIsXCJsZWZ0dGhyZWV0aW1lc1wiOlwi4ouLXCIsXCJMZWZ0VHJpYW5nbGVCYXJcIjpcIuKnj1wiLFwiTGVmdFRyaWFuZ2xlXCI6XCLiirJcIixcIkxlZnRUcmlhbmdsZUVxdWFsXCI6XCLiirRcIixcIkxlZnRVcERvd25WZWN0b3JcIjpcIuKlkVwiLFwiTGVmdFVwVGVlVmVjdG9yXCI6XCLipaBcIixcIkxlZnRVcFZlY3RvckJhclwiOlwi4qWYXCIsXCJMZWZ0VXBWZWN0b3JcIjpcIuKGv1wiLFwiTGVmdFZlY3RvckJhclwiOlwi4qWSXCIsXCJMZWZ0VmVjdG9yXCI6XCLihrxcIixcImxFZ1wiOlwi4qqLXCIsXCJsZWdcIjpcIuKLmlwiLFwibGVxXCI6XCLiiaRcIixcImxlcXFcIjpcIuKJplwiLFwibGVxc2xhbnRcIjpcIuKpvVwiLFwibGVzY2NcIjpcIuKqqFwiLFwibGVzXCI6XCLiqb1cIixcImxlc2RvdFwiOlwi4qm/XCIsXCJsZXNkb3RvXCI6XCLiqoFcIixcImxlc2RvdG9yXCI6XCLiqoNcIixcImxlc2dcIjpcIuKLmu+4gFwiLFwibGVzZ2VzXCI6XCLiqpNcIixcImxlc3NhcHByb3hcIjpcIuKqhVwiLFwibGVzc2RvdFwiOlwi4ouWXCIsXCJsZXNzZXFndHJcIjpcIuKLmlwiLFwibGVzc2VxcWd0clwiOlwi4qqLXCIsXCJMZXNzRXF1YWxHcmVhdGVyXCI6XCLii5pcIixcIkxlc3NGdWxsRXF1YWxcIjpcIuKJplwiLFwiTGVzc0dyZWF0ZXJcIjpcIuKJtlwiLFwibGVzc2d0clwiOlwi4om2XCIsXCJMZXNzTGVzc1wiOlwi4qqhXCIsXCJsZXNzc2ltXCI6XCLiibJcIixcIkxlc3NTbGFudEVxdWFsXCI6XCLiqb1cIixcIkxlc3NUaWxkZVwiOlwi4omyXCIsXCJsZmlzaHRcIjpcIuKlvFwiLFwibGZsb29yXCI6XCLijIpcIixcIkxmclwiOlwi8J2Uj1wiLFwibGZyXCI6XCLwnZSpXCIsXCJsZ1wiOlwi4om2XCIsXCJsZ0VcIjpcIuKqkVwiLFwibEhhclwiOlwi4qWiXCIsXCJsaGFyZFwiOlwi4oa9XCIsXCJsaGFydVwiOlwi4oa8XCIsXCJsaGFydWxcIjpcIuKlqlwiLFwibGhibGtcIjpcIuKWhFwiLFwiTEpjeVwiOlwi0IlcIixcImxqY3lcIjpcItGZXCIsXCJsbGFyclwiOlwi4oeHXCIsXCJsbFwiOlwi4omqXCIsXCJMbFwiOlwi4ouYXCIsXCJsbGNvcm5lclwiOlwi4oyeXCIsXCJMbGVmdGFycm93XCI6XCLih5pcIixcImxsaGFyZFwiOlwi4qWrXCIsXCJsbHRyaVwiOlwi4pe6XCIsXCJMbWlkb3RcIjpcIsS/XCIsXCJsbWlkb3RcIjpcIsWAXCIsXCJsbW91c3RhY2hlXCI6XCLijrBcIixcImxtb3VzdFwiOlwi4o6wXCIsXCJsbmFwXCI6XCLiqolcIixcImxuYXBwcm94XCI6XCLiqolcIixcImxuZVwiOlwi4qqHXCIsXCJsbkVcIjpcIuKJqFwiLFwibG5lcVwiOlwi4qqHXCIsXCJsbmVxcVwiOlwi4omoXCIsXCJsbnNpbVwiOlwi4oumXCIsXCJsb2FuZ1wiOlwi4p+sXCIsXCJsb2FyclwiOlwi4oe9XCIsXCJsb2Jya1wiOlwi4p+mXCIsXCJsb25nbGVmdGFycm93XCI6XCLin7VcIixcIkxvbmdMZWZ0QXJyb3dcIjpcIuKftVwiLFwiTG9uZ2xlZnRhcnJvd1wiOlwi4p+4XCIsXCJsb25nbGVmdHJpZ2h0YXJyb3dcIjpcIuKft1wiLFwiTG9uZ0xlZnRSaWdodEFycm93XCI6XCLin7dcIixcIkxvbmdsZWZ0cmlnaHRhcnJvd1wiOlwi4p+6XCIsXCJsb25nbWFwc3RvXCI6XCLin7xcIixcImxvbmdyaWdodGFycm93XCI6XCLin7ZcIixcIkxvbmdSaWdodEFycm93XCI6XCLin7ZcIixcIkxvbmdyaWdodGFycm93XCI6XCLin7lcIixcImxvb3BhcnJvd2xlZnRcIjpcIuKGq1wiLFwibG9vcGFycm93cmlnaHRcIjpcIuKGrFwiLFwibG9wYXJcIjpcIuKmhVwiLFwiTG9wZlwiOlwi8J2Vg1wiLFwibG9wZlwiOlwi8J2VnVwiLFwibG9wbHVzXCI6XCLiqK1cIixcImxvdGltZXNcIjpcIuKotFwiLFwibG93YXN0XCI6XCLiiJdcIixcImxvd2JhclwiOlwiX1wiLFwiTG93ZXJMZWZ0QXJyb3dcIjpcIuKGmVwiLFwiTG93ZXJSaWdodEFycm93XCI6XCLihphcIixcImxvelwiOlwi4peKXCIsXCJsb3plbmdlXCI6XCLil4pcIixcImxvemZcIjpcIuKnq1wiLFwibHBhclwiOlwiKFwiLFwibHBhcmx0XCI6XCLippNcIixcImxyYXJyXCI6XCLih4ZcIixcImxyY29ybmVyXCI6XCLijJ9cIixcImxyaGFyXCI6XCLih4tcIixcImxyaGFyZFwiOlwi4qWtXCIsXCJscm1cIjpcIuKAjlwiLFwibHJ0cmlcIjpcIuKKv1wiLFwibHNhcXVvXCI6XCLigLlcIixcImxzY3JcIjpcIvCdk4FcIixcIkxzY3JcIjpcIuKEklwiLFwibHNoXCI6XCLihrBcIixcIkxzaFwiOlwi4oawXCIsXCJsc2ltXCI6XCLiibJcIixcImxzaW1lXCI6XCLiqo1cIixcImxzaW1nXCI6XCLiqo9cIixcImxzcWJcIjpcIltcIixcImxzcXVvXCI6XCLigJhcIixcImxzcXVvclwiOlwi4oCaXCIsXCJMc3Ryb2tcIjpcIsWBXCIsXCJsc3Ryb2tcIjpcIsWCXCIsXCJsdGNjXCI6XCLiqqZcIixcImx0Y2lyXCI6XCLiqblcIixcImx0XCI6XCI8XCIsXCJMVFwiOlwiPFwiLFwiTHRcIjpcIuKJqlwiLFwibHRkb3RcIjpcIuKLllwiLFwibHRocmVlXCI6XCLii4tcIixcImx0aW1lc1wiOlwi4ouJXCIsXCJsdGxhcnJcIjpcIuKltlwiLFwibHRxdWVzdFwiOlwi4qm7XCIsXCJsdHJpXCI6XCLil4NcIixcImx0cmllXCI6XCLiirRcIixcImx0cmlmXCI6XCLil4JcIixcImx0clBhclwiOlwi4qaWXCIsXCJsdXJkc2hhclwiOlwi4qWKXCIsXCJsdXJ1aGFyXCI6XCLipaZcIixcImx2ZXJ0bmVxcVwiOlwi4omo77iAXCIsXCJsdm5FXCI6XCLiiajvuIBcIixcIm1hY3JcIjpcIsKvXCIsXCJtYWxlXCI6XCLimYJcIixcIm1hbHRcIjpcIuKcoFwiLFwibWFsdGVzZVwiOlwi4pygXCIsXCJNYXBcIjpcIuKkhVwiLFwibWFwXCI6XCLihqZcIixcIm1hcHN0b1wiOlwi4oamXCIsXCJtYXBzdG9kb3duXCI6XCLihqdcIixcIm1hcHN0b2xlZnRcIjpcIuKGpFwiLFwibWFwc3RvdXBcIjpcIuKGpVwiLFwibWFya2VyXCI6XCLilq5cIixcIm1jb21tYVwiOlwi4qipXCIsXCJNY3lcIjpcItCcXCIsXCJtY3lcIjpcItC8XCIsXCJtZGFzaFwiOlwi4oCUXCIsXCJtRERvdFwiOlwi4oi6XCIsXCJtZWFzdXJlZGFuZ2xlXCI6XCLiiKFcIixcIk1lZGl1bVNwYWNlXCI6XCLigZ9cIixcIk1lbGxpbnRyZlwiOlwi4oSzXCIsXCJNZnJcIjpcIvCdlJBcIixcIm1mclwiOlwi8J2UqlwiLFwibWhvXCI6XCLihKdcIixcIm1pY3JvXCI6XCLCtVwiLFwibWlkYXN0XCI6XCIqXCIsXCJtaWRjaXJcIjpcIuKrsFwiLFwibWlkXCI6XCLiiKNcIixcIm1pZGRvdFwiOlwiwrdcIixcIm1pbnVzYlwiOlwi4oqfXCIsXCJtaW51c1wiOlwi4oiSXCIsXCJtaW51c2RcIjpcIuKIuFwiLFwibWludXNkdVwiOlwi4qiqXCIsXCJNaW51c1BsdXNcIjpcIuKIk1wiLFwibWxjcFwiOlwi4qubXCIsXCJtbGRyXCI6XCLigKZcIixcIm1ucGx1c1wiOlwi4oiTXCIsXCJtb2RlbHNcIjpcIuKKp1wiLFwiTW9wZlwiOlwi8J2VhFwiLFwibW9wZlwiOlwi8J2VnlwiLFwibXBcIjpcIuKIk1wiLFwibXNjclwiOlwi8J2TglwiLFwiTXNjclwiOlwi4oSzXCIsXCJtc3Rwb3NcIjpcIuKIvlwiLFwiTXVcIjpcIs6cXCIsXCJtdVwiOlwizrxcIixcIm11bHRpbWFwXCI6XCLiirhcIixcIm11bWFwXCI6XCLiirhcIixcIm5hYmxhXCI6XCLiiIdcIixcIk5hY3V0ZVwiOlwixYNcIixcIm5hY3V0ZVwiOlwixYRcIixcIm5hbmdcIjpcIuKIoOKDklwiLFwibmFwXCI6XCLiiYlcIixcIm5hcEVcIjpcIuKpsMy4XCIsXCJuYXBpZFwiOlwi4omLzLhcIixcIm5hcG9zXCI6XCLFiVwiLFwibmFwcHJveFwiOlwi4omJXCIsXCJuYXR1cmFsXCI6XCLima5cIixcIm5hdHVyYWxzXCI6XCLihJVcIixcIm5hdHVyXCI6XCLima5cIixcIm5ic3BcIjpcIsKgXCIsXCJuYnVtcFwiOlwi4omOzLhcIixcIm5idW1wZVwiOlwi4omPzLhcIixcIm5jYXBcIjpcIuKpg1wiLFwiTmNhcm9uXCI6XCLFh1wiLFwibmNhcm9uXCI6XCLFiFwiLFwiTmNlZGlsXCI6XCLFhVwiLFwibmNlZGlsXCI6XCLFhlwiLFwibmNvbmdcIjpcIuKJh1wiLFwibmNvbmdkb3RcIjpcIuKprcy4XCIsXCJuY3VwXCI6XCLiqYJcIixcIk5jeVwiOlwi0J1cIixcIm5jeVwiOlwi0L1cIixcIm5kYXNoXCI6XCLigJNcIixcIm5lYXJoa1wiOlwi4qSkXCIsXCJuZWFyclwiOlwi4oaXXCIsXCJuZUFyclwiOlwi4oeXXCIsXCJuZWFycm93XCI6XCLihpdcIixcIm5lXCI6XCLiiaBcIixcIm5lZG90XCI6XCLiiZDMuFwiLFwiTmVnYXRpdmVNZWRpdW1TcGFjZVwiOlwi4oCLXCIsXCJOZWdhdGl2ZVRoaWNrU3BhY2VcIjpcIuKAi1wiLFwiTmVnYXRpdmVUaGluU3BhY2VcIjpcIuKAi1wiLFwiTmVnYXRpdmVWZXJ5VGhpblNwYWNlXCI6XCLigItcIixcIm5lcXVpdlwiOlwi4omiXCIsXCJuZXNlYXJcIjpcIuKkqFwiLFwibmVzaW1cIjpcIuKJgsy4XCIsXCJOZXN0ZWRHcmVhdGVyR3JlYXRlclwiOlwi4omrXCIsXCJOZXN0ZWRMZXNzTGVzc1wiOlwi4omqXCIsXCJOZXdMaW5lXCI6XCJcXG5cIixcIm5leGlzdFwiOlwi4oiEXCIsXCJuZXhpc3RzXCI6XCLiiIRcIixcIk5mclwiOlwi8J2UkVwiLFwibmZyXCI6XCLwnZSrXCIsXCJuZ0VcIjpcIuKJp8y4XCIsXCJuZ2VcIjpcIuKJsVwiLFwibmdlcVwiOlwi4omxXCIsXCJuZ2VxcVwiOlwi4omnzLhcIixcIm5nZXFzbGFudFwiOlwi4qm+zLhcIixcIm5nZXNcIjpcIuKpvsy4XCIsXCJuR2dcIjpcIuKLmcy4XCIsXCJuZ3NpbVwiOlwi4om1XCIsXCJuR3RcIjpcIuKJq+KDklwiLFwibmd0XCI6XCLiia9cIixcIm5ndHJcIjpcIuKJr1wiLFwibkd0dlwiOlwi4omrzLhcIixcIm5oYXJyXCI6XCLihq5cIixcIm5oQXJyXCI6XCLih45cIixcIm5ocGFyXCI6XCLiq7JcIixcIm5pXCI6XCLiiItcIixcIm5pc1wiOlwi4ou8XCIsXCJuaXNkXCI6XCLii7pcIixcIm5pdlwiOlwi4oiLXCIsXCJOSmN5XCI6XCLQilwiLFwibmpjeVwiOlwi0ZpcIixcIm5sYXJyXCI6XCLihppcIixcIm5sQXJyXCI6XCLih41cIixcIm5sZHJcIjpcIuKApVwiLFwibmxFXCI6XCLiiabMuFwiLFwibmxlXCI6XCLiibBcIixcIm5sZWZ0YXJyb3dcIjpcIuKGmlwiLFwibkxlZnRhcnJvd1wiOlwi4oeNXCIsXCJubGVmdHJpZ2h0YXJyb3dcIjpcIuKGrlwiLFwibkxlZnRyaWdodGFycm93XCI6XCLih45cIixcIm5sZXFcIjpcIuKJsFwiLFwibmxlcXFcIjpcIuKJpsy4XCIsXCJubGVxc2xhbnRcIjpcIuKpvcy4XCIsXCJubGVzXCI6XCLiqb3MuFwiLFwibmxlc3NcIjpcIuKJrlwiLFwibkxsXCI6XCLii5jMuFwiLFwibmxzaW1cIjpcIuKJtFwiLFwibkx0XCI6XCLiiarig5JcIixcIm5sdFwiOlwi4omuXCIsXCJubHRyaVwiOlwi4ouqXCIsXCJubHRyaWVcIjpcIuKLrFwiLFwibkx0dlwiOlwi4omqzLhcIixcIm5taWRcIjpcIuKIpFwiLFwiTm9CcmVha1wiOlwi4oGgXCIsXCJOb25CcmVha2luZ1NwYWNlXCI6XCLCoFwiLFwibm9wZlwiOlwi8J2Vn1wiLFwiTm9wZlwiOlwi4oSVXCIsXCJOb3RcIjpcIuKrrFwiLFwibm90XCI6XCLCrFwiLFwiTm90Q29uZ3J1ZW50XCI6XCLiiaJcIixcIk5vdEN1cENhcFwiOlwi4omtXCIsXCJOb3REb3VibGVWZXJ0aWNhbEJhclwiOlwi4oimXCIsXCJOb3RFbGVtZW50XCI6XCLiiIlcIixcIk5vdEVxdWFsXCI6XCLiiaBcIixcIk5vdEVxdWFsVGlsZGVcIjpcIuKJgsy4XCIsXCJOb3RFeGlzdHNcIjpcIuKIhFwiLFwiTm90R3JlYXRlclwiOlwi4omvXCIsXCJOb3RHcmVhdGVyRXF1YWxcIjpcIuKJsVwiLFwiTm90R3JlYXRlckZ1bGxFcXVhbFwiOlwi4omnzLhcIixcIk5vdEdyZWF0ZXJHcmVhdGVyXCI6XCLiiavMuFwiLFwiTm90R3JlYXRlckxlc3NcIjpcIuKJuVwiLFwiTm90R3JlYXRlclNsYW50RXF1YWxcIjpcIuKpvsy4XCIsXCJOb3RHcmVhdGVyVGlsZGVcIjpcIuKJtVwiLFwiTm90SHVtcERvd25IdW1wXCI6XCLiiY7MuFwiLFwiTm90SHVtcEVxdWFsXCI6XCLiiY/MuFwiLFwibm90aW5cIjpcIuKIiVwiLFwibm90aW5kb3RcIjpcIuKLtcy4XCIsXCJub3RpbkVcIjpcIuKLucy4XCIsXCJub3RpbnZhXCI6XCLiiIlcIixcIm5vdGludmJcIjpcIuKLt1wiLFwibm90aW52Y1wiOlwi4ou2XCIsXCJOb3RMZWZ0VHJpYW5nbGVCYXJcIjpcIuKnj8y4XCIsXCJOb3RMZWZ0VHJpYW5nbGVcIjpcIuKLqlwiLFwiTm90TGVmdFRyaWFuZ2xlRXF1YWxcIjpcIuKLrFwiLFwiTm90TGVzc1wiOlwi4omuXCIsXCJOb3RMZXNzRXF1YWxcIjpcIuKJsFwiLFwiTm90TGVzc0dyZWF0ZXJcIjpcIuKJuFwiLFwiTm90TGVzc0xlc3NcIjpcIuKJqsy4XCIsXCJOb3RMZXNzU2xhbnRFcXVhbFwiOlwi4qm9zLhcIixcIk5vdExlc3NUaWxkZVwiOlwi4om0XCIsXCJOb3ROZXN0ZWRHcmVhdGVyR3JlYXRlclwiOlwi4qqizLhcIixcIk5vdE5lc3RlZExlc3NMZXNzXCI6XCLiqqHMuFwiLFwibm90bmlcIjpcIuKIjFwiLFwibm90bml2YVwiOlwi4oiMXCIsXCJub3RuaXZiXCI6XCLii75cIixcIm5vdG5pdmNcIjpcIuKLvVwiLFwiTm90UHJlY2VkZXNcIjpcIuKKgFwiLFwiTm90UHJlY2VkZXNFcXVhbFwiOlwi4qqvzLhcIixcIk5vdFByZWNlZGVzU2xhbnRFcXVhbFwiOlwi4ougXCIsXCJOb3RSZXZlcnNlRWxlbWVudFwiOlwi4oiMXCIsXCJOb3RSaWdodFRyaWFuZ2xlQmFyXCI6XCLip5DMuFwiLFwiTm90UmlnaHRUcmlhbmdsZVwiOlwi4ourXCIsXCJOb3RSaWdodFRyaWFuZ2xlRXF1YWxcIjpcIuKLrVwiLFwiTm90U3F1YXJlU3Vic2V0XCI6XCLiio/MuFwiLFwiTm90U3F1YXJlU3Vic2V0RXF1YWxcIjpcIuKLolwiLFwiTm90U3F1YXJlU3VwZXJzZXRcIjpcIuKKkMy4XCIsXCJOb3RTcXVhcmVTdXBlcnNldEVxdWFsXCI6XCLii6NcIixcIk5vdFN1YnNldFwiOlwi4oqC4oOSXCIsXCJOb3RTdWJzZXRFcXVhbFwiOlwi4oqIXCIsXCJOb3RTdWNjZWVkc1wiOlwi4oqBXCIsXCJOb3RTdWNjZWVkc0VxdWFsXCI6XCLiqrDMuFwiLFwiTm90U3VjY2VlZHNTbGFudEVxdWFsXCI6XCLii6FcIixcIk5vdFN1Y2NlZWRzVGlsZGVcIjpcIuKJv8y4XCIsXCJOb3RTdXBlcnNldFwiOlwi4oqD4oOSXCIsXCJOb3RTdXBlcnNldEVxdWFsXCI6XCLiiolcIixcIk5vdFRpbGRlXCI6XCLiiYFcIixcIk5vdFRpbGRlRXF1YWxcIjpcIuKJhFwiLFwiTm90VGlsZGVGdWxsRXF1YWxcIjpcIuKJh1wiLFwiTm90VGlsZGVUaWxkZVwiOlwi4omJXCIsXCJOb3RWZXJ0aWNhbEJhclwiOlwi4oikXCIsXCJucGFyYWxsZWxcIjpcIuKIplwiLFwibnBhclwiOlwi4oimXCIsXCJucGFyc2xcIjpcIuKrveKDpVwiLFwibnBhcnRcIjpcIuKIgsy4XCIsXCJucG9saW50XCI6XCLiqJRcIixcIm5wclwiOlwi4oqAXCIsXCJucHJjdWVcIjpcIuKLoFwiLFwibnByZWNcIjpcIuKKgFwiLFwibnByZWNlcVwiOlwi4qqvzLhcIixcIm5wcmVcIjpcIuKqr8y4XCIsXCJucmFycmNcIjpcIuKks8y4XCIsXCJucmFyclwiOlwi4oabXCIsXCJuckFyclwiOlwi4oePXCIsXCJucmFycndcIjpcIuKGncy4XCIsXCJucmlnaHRhcnJvd1wiOlwi4oabXCIsXCJuUmlnaHRhcnJvd1wiOlwi4oePXCIsXCJucnRyaVwiOlwi4ourXCIsXCJucnRyaWVcIjpcIuKLrVwiLFwibnNjXCI6XCLiioFcIixcIm5zY2N1ZVwiOlwi4ouhXCIsXCJuc2NlXCI6XCLiqrDMuFwiLFwiTnNjclwiOlwi8J2SqVwiLFwibnNjclwiOlwi8J2Tg1wiLFwibnNob3J0bWlkXCI6XCLiiKRcIixcIm5zaG9ydHBhcmFsbGVsXCI6XCLiiKZcIixcIm5zaW1cIjpcIuKJgVwiLFwibnNpbWVcIjpcIuKJhFwiLFwibnNpbWVxXCI6XCLiiYRcIixcIm5zbWlkXCI6XCLiiKRcIixcIm5zcGFyXCI6XCLiiKZcIixcIm5zcXN1YmVcIjpcIuKLolwiLFwibnNxc3VwZVwiOlwi4oujXCIsXCJuc3ViXCI6XCLiioRcIixcIm5zdWJFXCI6XCLiq4XMuFwiLFwibnN1YmVcIjpcIuKKiFwiLFwibnN1YnNldFwiOlwi4oqC4oOSXCIsXCJuc3Vic2V0ZXFcIjpcIuKKiFwiLFwibnN1YnNldGVxcVwiOlwi4quFzLhcIixcIm5zdWNjXCI6XCLiioFcIixcIm5zdWNjZXFcIjpcIuKqsMy4XCIsXCJuc3VwXCI6XCLiioVcIixcIm5zdXBFXCI6XCLiq4bMuFwiLFwibnN1cGVcIjpcIuKKiVwiLFwibnN1cHNldFwiOlwi4oqD4oOSXCIsXCJuc3Vwc2V0ZXFcIjpcIuKKiVwiLFwibnN1cHNldGVxcVwiOlwi4quGzLhcIixcIm50Z2xcIjpcIuKJuVwiLFwiTnRpbGRlXCI6XCLDkVwiLFwibnRpbGRlXCI6XCLDsVwiLFwibnRsZ1wiOlwi4om4XCIsXCJudHJpYW5nbGVsZWZ0XCI6XCLii6pcIixcIm50cmlhbmdsZWxlZnRlcVwiOlwi4ousXCIsXCJudHJpYW5nbGVyaWdodFwiOlwi4ourXCIsXCJudHJpYW5nbGVyaWdodGVxXCI6XCLii61cIixcIk51XCI6XCLOnVwiLFwibnVcIjpcIs69XCIsXCJudW1cIjpcIiNcIixcIm51bWVyb1wiOlwi4oSWXCIsXCJudW1zcFwiOlwi4oCHXCIsXCJudmFwXCI6XCLiiY3ig5JcIixcIm52ZGFzaFwiOlwi4oqsXCIsXCJudkRhc2hcIjpcIuKKrVwiLFwiblZkYXNoXCI6XCLiiq5cIixcIm5WRGFzaFwiOlwi4oqvXCIsXCJudmdlXCI6XCLiiaXig5JcIixcIm52Z3RcIjpcIj7ig5JcIixcIm52SGFyclwiOlwi4qSEXCIsXCJudmluZmluXCI6XCLip55cIixcIm52bEFyclwiOlwi4qSCXCIsXCJudmxlXCI6XCLiiaTig5JcIixcIm52bHRcIjpcIjzig5JcIixcIm52bHRyaWVcIjpcIuKKtOKDklwiLFwibnZyQXJyXCI6XCLipINcIixcIm52cnRyaWVcIjpcIuKKteKDklwiLFwibnZzaW1cIjpcIuKIvOKDklwiLFwibndhcmhrXCI6XCLipKNcIixcIm53YXJyXCI6XCLihpZcIixcIm53QXJyXCI6XCLih5ZcIixcIm53YXJyb3dcIjpcIuKGllwiLFwibnduZWFyXCI6XCLipKdcIixcIk9hY3V0ZVwiOlwiw5NcIixcIm9hY3V0ZVwiOlwiw7NcIixcIm9hc3RcIjpcIuKKm1wiLFwiT2NpcmNcIjpcIsOUXCIsXCJvY2lyY1wiOlwiw7RcIixcIm9jaXJcIjpcIuKKmlwiLFwiT2N5XCI6XCLQnlwiLFwib2N5XCI6XCLQvlwiLFwib2Rhc2hcIjpcIuKKnVwiLFwiT2RibGFjXCI6XCLFkFwiLFwib2RibGFjXCI6XCLFkVwiLFwib2RpdlwiOlwi4qi4XCIsXCJvZG90XCI6XCLiiplcIixcIm9kc29sZFwiOlwi4qa8XCIsXCJPRWxpZ1wiOlwixZJcIixcIm9lbGlnXCI6XCLFk1wiLFwib2ZjaXJcIjpcIuKmv1wiLFwiT2ZyXCI6XCLwnZSSXCIsXCJvZnJcIjpcIvCdlKxcIixcIm9nb25cIjpcIsubXCIsXCJPZ3JhdmVcIjpcIsOSXCIsXCJvZ3JhdmVcIjpcIsOyXCIsXCJvZ3RcIjpcIuKngVwiLFwib2hiYXJcIjpcIuKmtVwiLFwib2htXCI6XCLOqVwiLFwib2ludFwiOlwi4oiuXCIsXCJvbGFyclwiOlwi4oa6XCIsXCJvbGNpclwiOlwi4qa+XCIsXCJvbGNyb3NzXCI6XCLiprtcIixcIm9saW5lXCI6XCLigL5cIixcIm9sdFwiOlwi4qeAXCIsXCJPbWFjclwiOlwixYxcIixcIm9tYWNyXCI6XCLFjVwiLFwiT21lZ2FcIjpcIs6pXCIsXCJvbWVnYVwiOlwiz4lcIixcIk9taWNyb25cIjpcIs6fXCIsXCJvbWljcm9uXCI6XCLOv1wiLFwib21pZFwiOlwi4qa2XCIsXCJvbWludXNcIjpcIuKKllwiLFwiT29wZlwiOlwi8J2VhlwiLFwib29wZlwiOlwi8J2VoFwiLFwib3BhclwiOlwi4qa3XCIsXCJPcGVuQ3VybHlEb3VibGVRdW90ZVwiOlwi4oCcXCIsXCJPcGVuQ3VybHlRdW90ZVwiOlwi4oCYXCIsXCJvcGVycFwiOlwi4qa5XCIsXCJvcGx1c1wiOlwi4oqVXCIsXCJvcmFyclwiOlwi4oa7XCIsXCJPclwiOlwi4qmUXCIsXCJvclwiOlwi4oioXCIsXCJvcmRcIjpcIuKpnVwiLFwib3JkZXJcIjpcIuKEtFwiLFwib3JkZXJvZlwiOlwi4oS0XCIsXCJvcmRmXCI6XCLCqlwiLFwib3JkbVwiOlwiwrpcIixcIm9yaWdvZlwiOlwi4oq2XCIsXCJvcm9yXCI6XCLiqZZcIixcIm9yc2xvcGVcIjpcIuKpl1wiLFwib3J2XCI6XCLiqZtcIixcIm9TXCI6XCLik4hcIixcIk9zY3JcIjpcIvCdkqpcIixcIm9zY3JcIjpcIuKEtFwiLFwiT3NsYXNoXCI6XCLDmFwiLFwib3NsYXNoXCI6XCLDuFwiLFwib3NvbFwiOlwi4oqYXCIsXCJPdGlsZGVcIjpcIsOVXCIsXCJvdGlsZGVcIjpcIsO1XCIsXCJvdGltZXNhc1wiOlwi4qi2XCIsXCJPdGltZXNcIjpcIuKot1wiLFwib3RpbWVzXCI6XCLiipdcIixcIk91bWxcIjpcIsOWXCIsXCJvdW1sXCI6XCLDtlwiLFwib3ZiYXJcIjpcIuKMvVwiLFwiT3ZlckJhclwiOlwi4oC+XCIsXCJPdmVyQnJhY2VcIjpcIuKPnlwiLFwiT3ZlckJyYWNrZXRcIjpcIuKOtFwiLFwiT3ZlclBhcmVudGhlc2lzXCI6XCLij5xcIixcInBhcmFcIjpcIsK2XCIsXCJwYXJhbGxlbFwiOlwi4oilXCIsXCJwYXJcIjpcIuKIpVwiLFwicGFyc2ltXCI6XCLiq7NcIixcInBhcnNsXCI6XCLiq71cIixcInBhcnRcIjpcIuKIglwiLFwiUGFydGlhbERcIjpcIuKIglwiLFwiUGN5XCI6XCLQn1wiLFwicGN5XCI6XCLQv1wiLFwicGVyY250XCI6XCIlXCIsXCJwZXJpb2RcIjpcIi5cIixcInBlcm1pbFwiOlwi4oCwXCIsXCJwZXJwXCI6XCLiiqVcIixcInBlcnRlbmtcIjpcIuKAsVwiLFwiUGZyXCI6XCLwnZSTXCIsXCJwZnJcIjpcIvCdlK1cIixcIlBoaVwiOlwizqZcIixcInBoaVwiOlwiz4ZcIixcInBoaXZcIjpcIs+VXCIsXCJwaG1tYXRcIjpcIuKEs1wiLFwicGhvbmVcIjpcIuKYjlwiLFwiUGlcIjpcIs6gXCIsXCJwaVwiOlwiz4BcIixcInBpdGNoZm9ya1wiOlwi4ouUXCIsXCJwaXZcIjpcIs+WXCIsXCJwbGFuY2tcIjpcIuKEj1wiLFwicGxhbmNraFwiOlwi4oSOXCIsXCJwbGFua3ZcIjpcIuKEj1wiLFwicGx1c2FjaXJcIjpcIuKoo1wiLFwicGx1c2JcIjpcIuKKnlwiLFwicGx1c2NpclwiOlwi4qiiXCIsXCJwbHVzXCI6XCIrXCIsXCJwbHVzZG9cIjpcIuKIlFwiLFwicGx1c2R1XCI6XCLiqKVcIixcInBsdXNlXCI6XCLiqbJcIixcIlBsdXNNaW51c1wiOlwiwrFcIixcInBsdXNtblwiOlwiwrFcIixcInBsdXNzaW1cIjpcIuKoplwiLFwicGx1c3R3b1wiOlwi4qinXCIsXCJwbVwiOlwiwrFcIixcIlBvaW5jYXJlcGxhbmVcIjpcIuKEjFwiLFwicG9pbnRpbnRcIjpcIuKolVwiLFwicG9wZlwiOlwi8J2VoVwiLFwiUG9wZlwiOlwi4oSZXCIsXCJwb3VuZFwiOlwiwqNcIixcInByYXBcIjpcIuKqt1wiLFwiUHJcIjpcIuKqu1wiLFwicHJcIjpcIuKJulwiLFwicHJjdWVcIjpcIuKJvFwiLFwicHJlY2FwcHJveFwiOlwi4qq3XCIsXCJwcmVjXCI6XCLiibpcIixcInByZWNjdXJseWVxXCI6XCLiibxcIixcIlByZWNlZGVzXCI6XCLiibpcIixcIlByZWNlZGVzRXF1YWxcIjpcIuKqr1wiLFwiUHJlY2VkZXNTbGFudEVxdWFsXCI6XCLiibxcIixcIlByZWNlZGVzVGlsZGVcIjpcIuKJvlwiLFwicHJlY2VxXCI6XCLiqq9cIixcInByZWNuYXBwcm94XCI6XCLiqrlcIixcInByZWNuZXFxXCI6XCLiqrVcIixcInByZWNuc2ltXCI6XCLii6hcIixcInByZVwiOlwi4qqvXCIsXCJwckVcIjpcIuKqs1wiLFwicHJlY3NpbVwiOlwi4om+XCIsXCJwcmltZVwiOlwi4oCyXCIsXCJQcmltZVwiOlwi4oCzXCIsXCJwcmltZXNcIjpcIuKEmVwiLFwicHJuYXBcIjpcIuKquVwiLFwicHJuRVwiOlwi4qq1XCIsXCJwcm5zaW1cIjpcIuKLqFwiLFwicHJvZFwiOlwi4oiPXCIsXCJQcm9kdWN0XCI6XCLiiI9cIixcInByb2ZhbGFyXCI6XCLijK5cIixcInByb2ZsaW5lXCI6XCLijJJcIixcInByb2ZzdXJmXCI6XCLijJNcIixcInByb3BcIjpcIuKInVwiLFwiUHJvcG9ydGlvbmFsXCI6XCLiiJ1cIixcIlByb3BvcnRpb25cIjpcIuKIt1wiLFwicHJvcHRvXCI6XCLiiJ1cIixcInByc2ltXCI6XCLiib5cIixcInBydXJlbFwiOlwi4oqwXCIsXCJQc2NyXCI6XCLwnZKrXCIsXCJwc2NyXCI6XCLwnZOFXCIsXCJQc2lcIjpcIs6oXCIsXCJwc2lcIjpcIs+IXCIsXCJwdW5jc3BcIjpcIuKAiFwiLFwiUWZyXCI6XCLwnZSUXCIsXCJxZnJcIjpcIvCdlK5cIixcInFpbnRcIjpcIuKojFwiLFwicW9wZlwiOlwi8J2VolwiLFwiUW9wZlwiOlwi4oSaXCIsXCJxcHJpbWVcIjpcIuKBl1wiLFwiUXNjclwiOlwi8J2SrFwiLFwicXNjclwiOlwi8J2ThlwiLFwicXVhdGVybmlvbnNcIjpcIuKEjVwiLFwicXVhdGludFwiOlwi4qiWXCIsXCJxdWVzdFwiOlwiP1wiLFwicXVlc3RlcVwiOlwi4omfXCIsXCJxdW90XCI6XCJcXFwiXCIsXCJRVU9UXCI6XCJcXFwiXCIsXCJyQWFyclwiOlwi4oebXCIsXCJyYWNlXCI6XCLiiL3MsVwiLFwiUmFjdXRlXCI6XCLFlFwiLFwicmFjdXRlXCI6XCLFlVwiLFwicmFkaWNcIjpcIuKImlwiLFwicmFlbXB0eXZcIjpcIuKms1wiLFwicmFuZ1wiOlwi4p+pXCIsXCJSYW5nXCI6XCLin6tcIixcInJhbmdkXCI6XCLippJcIixcInJhbmdlXCI6XCLipqVcIixcInJhbmdsZVwiOlwi4p+pXCIsXCJyYXF1b1wiOlwiwrtcIixcInJhcnJhcFwiOlwi4qW1XCIsXCJyYXJyYlwiOlwi4oelXCIsXCJyYXJyYmZzXCI6XCLipKBcIixcInJhcnJjXCI6XCLipLNcIixcInJhcnJcIjpcIuKGklwiLFwiUmFyclwiOlwi4oagXCIsXCJyQXJyXCI6XCLih5JcIixcInJhcnJmc1wiOlwi4qSeXCIsXCJyYXJyaGtcIjpcIuKGqlwiLFwicmFycmxwXCI6XCLihqxcIixcInJhcnJwbFwiOlwi4qWFXCIsXCJyYXJyc2ltXCI6XCLipbRcIixcIlJhcnJ0bFwiOlwi4qSWXCIsXCJyYXJydGxcIjpcIuKGo1wiLFwicmFycndcIjpcIuKGnVwiLFwicmF0YWlsXCI6XCLipJpcIixcInJBdGFpbFwiOlwi4qScXCIsXCJyYXRpb1wiOlwi4oi2XCIsXCJyYXRpb25hbHNcIjpcIuKEmlwiLFwicmJhcnJcIjpcIuKkjVwiLFwickJhcnJcIjpcIuKkj1wiLFwiUkJhcnJcIjpcIuKkkFwiLFwicmJicmtcIjpcIuKds1wiLFwicmJyYWNlXCI6XCJ9XCIsXCJyYnJhY2tcIjpcIl1cIixcInJicmtlXCI6XCLipoxcIixcInJicmtzbGRcIjpcIuKmjlwiLFwicmJya3NsdVwiOlwi4qaQXCIsXCJSY2Fyb25cIjpcIsWYXCIsXCJyY2Fyb25cIjpcIsWZXCIsXCJSY2VkaWxcIjpcIsWWXCIsXCJyY2VkaWxcIjpcIsWXXCIsXCJyY2VpbFwiOlwi4oyJXCIsXCJyY3ViXCI6XCJ9XCIsXCJSY3lcIjpcItCgXCIsXCJyY3lcIjpcItGAXCIsXCJyZGNhXCI6XCLipLdcIixcInJkbGRoYXJcIjpcIuKlqVwiLFwicmRxdW9cIjpcIuKAnVwiLFwicmRxdW9yXCI6XCLigJ1cIixcInJkc2hcIjpcIuKGs1wiLFwicmVhbFwiOlwi4oScXCIsXCJyZWFsaW5lXCI6XCLihJtcIixcInJlYWxwYXJ0XCI6XCLihJxcIixcInJlYWxzXCI6XCLihJ1cIixcIlJlXCI6XCLihJxcIixcInJlY3RcIjpcIuKWrVwiLFwicmVnXCI6XCLCrlwiLFwiUkVHXCI6XCLCrlwiLFwiUmV2ZXJzZUVsZW1lbnRcIjpcIuKIi1wiLFwiUmV2ZXJzZUVxdWlsaWJyaXVtXCI6XCLih4tcIixcIlJldmVyc2VVcEVxdWlsaWJyaXVtXCI6XCLipa9cIixcInJmaXNodFwiOlwi4qW9XCIsXCJyZmxvb3JcIjpcIuKMi1wiLFwicmZyXCI6XCLwnZSvXCIsXCJSZnJcIjpcIuKEnFwiLFwickhhclwiOlwi4qWkXCIsXCJyaGFyZFwiOlwi4oeBXCIsXCJyaGFydVwiOlwi4oeAXCIsXCJyaGFydWxcIjpcIuKlrFwiLFwiUmhvXCI6XCLOoVwiLFwicmhvXCI6XCLPgVwiLFwicmhvdlwiOlwiz7FcIixcIlJpZ2h0QW5nbGVCcmFja2V0XCI6XCLin6lcIixcIlJpZ2h0QXJyb3dCYXJcIjpcIuKHpVwiLFwicmlnaHRhcnJvd1wiOlwi4oaSXCIsXCJSaWdodEFycm93XCI6XCLihpJcIixcIlJpZ2h0YXJyb3dcIjpcIuKHklwiLFwiUmlnaHRBcnJvd0xlZnRBcnJvd1wiOlwi4oeEXCIsXCJyaWdodGFycm93dGFpbFwiOlwi4oajXCIsXCJSaWdodENlaWxpbmdcIjpcIuKMiVwiLFwiUmlnaHREb3VibGVCcmFja2V0XCI6XCLin6dcIixcIlJpZ2h0RG93blRlZVZlY3RvclwiOlwi4qWdXCIsXCJSaWdodERvd25WZWN0b3JCYXJcIjpcIuKllVwiLFwiUmlnaHREb3duVmVjdG9yXCI6XCLih4JcIixcIlJpZ2h0Rmxvb3JcIjpcIuKMi1wiLFwicmlnaHRoYXJwb29uZG93blwiOlwi4oeBXCIsXCJyaWdodGhhcnBvb251cFwiOlwi4oeAXCIsXCJyaWdodGxlZnRhcnJvd3NcIjpcIuKHhFwiLFwicmlnaHRsZWZ0aGFycG9vbnNcIjpcIuKHjFwiLFwicmlnaHRyaWdodGFycm93c1wiOlwi4oeJXCIsXCJyaWdodHNxdWlnYXJyb3dcIjpcIuKGnVwiLFwiUmlnaHRUZWVBcnJvd1wiOlwi4oamXCIsXCJSaWdodFRlZVwiOlwi4oqiXCIsXCJSaWdodFRlZVZlY3RvclwiOlwi4qWbXCIsXCJyaWdodHRocmVldGltZXNcIjpcIuKLjFwiLFwiUmlnaHRUcmlhbmdsZUJhclwiOlwi4qeQXCIsXCJSaWdodFRyaWFuZ2xlXCI6XCLiirNcIixcIlJpZ2h0VHJpYW5nbGVFcXVhbFwiOlwi4oq1XCIsXCJSaWdodFVwRG93blZlY3RvclwiOlwi4qWPXCIsXCJSaWdodFVwVGVlVmVjdG9yXCI6XCLipZxcIixcIlJpZ2h0VXBWZWN0b3JCYXJcIjpcIuKllFwiLFwiUmlnaHRVcFZlY3RvclwiOlwi4oa+XCIsXCJSaWdodFZlY3RvckJhclwiOlwi4qWTXCIsXCJSaWdodFZlY3RvclwiOlwi4oeAXCIsXCJyaW5nXCI6XCLLmlwiLFwicmlzaW5nZG90c2VxXCI6XCLiiZNcIixcInJsYXJyXCI6XCLih4RcIixcInJsaGFyXCI6XCLih4xcIixcInJsbVwiOlwi4oCPXCIsXCJybW91c3RhY2hlXCI6XCLijrFcIixcInJtb3VzdFwiOlwi4o6xXCIsXCJybm1pZFwiOlwi4quuXCIsXCJyb2FuZ1wiOlwi4p+tXCIsXCJyb2FyclwiOlwi4oe+XCIsXCJyb2Jya1wiOlwi4p+nXCIsXCJyb3BhclwiOlwi4qaGXCIsXCJyb3BmXCI6XCLwnZWjXCIsXCJSb3BmXCI6XCLihJ1cIixcInJvcGx1c1wiOlwi4qiuXCIsXCJyb3RpbWVzXCI6XCLiqLVcIixcIlJvdW5kSW1wbGllc1wiOlwi4qWwXCIsXCJycGFyXCI6XCIpXCIsXCJycGFyZ3RcIjpcIuKmlFwiLFwicnBwb2xpbnRcIjpcIuKoklwiLFwicnJhcnJcIjpcIuKHiVwiLFwiUnJpZ2h0YXJyb3dcIjpcIuKHm1wiLFwicnNhcXVvXCI6XCLigLpcIixcInJzY3JcIjpcIvCdk4dcIixcIlJzY3JcIjpcIuKEm1wiLFwicnNoXCI6XCLihrFcIixcIlJzaFwiOlwi4oaxXCIsXCJyc3FiXCI6XCJdXCIsXCJyc3F1b1wiOlwi4oCZXCIsXCJyc3F1b3JcIjpcIuKAmVwiLFwicnRocmVlXCI6XCLii4xcIixcInJ0aW1lc1wiOlwi4ouKXCIsXCJydHJpXCI6XCLilrlcIixcInJ0cmllXCI6XCLiirVcIixcInJ0cmlmXCI6XCLilrhcIixcInJ0cmlsdHJpXCI6XCLip45cIixcIlJ1bGVEZWxheWVkXCI6XCLip7RcIixcInJ1bHVoYXJcIjpcIuKlqFwiLFwicnhcIjpcIuKEnlwiLFwiU2FjdXRlXCI6XCLFmlwiLFwic2FjdXRlXCI6XCLFm1wiLFwic2JxdW9cIjpcIuKAmlwiLFwic2NhcFwiOlwi4qq4XCIsXCJTY2Fyb25cIjpcIsWgXCIsXCJzY2Fyb25cIjpcIsWhXCIsXCJTY1wiOlwi4qq8XCIsXCJzY1wiOlwi4om7XCIsXCJzY2N1ZVwiOlwi4om9XCIsXCJzY2VcIjpcIuKqsFwiLFwic2NFXCI6XCLiqrRcIixcIlNjZWRpbFwiOlwixZ5cIixcInNjZWRpbFwiOlwixZ9cIixcIlNjaXJjXCI6XCLFnFwiLFwic2NpcmNcIjpcIsWdXCIsXCJzY25hcFwiOlwi4qq6XCIsXCJzY25FXCI6XCLiqrZcIixcInNjbnNpbVwiOlwi4oupXCIsXCJzY3BvbGludFwiOlwi4qiTXCIsXCJzY3NpbVwiOlwi4om/XCIsXCJTY3lcIjpcItChXCIsXCJzY3lcIjpcItGBXCIsXCJzZG90YlwiOlwi4oqhXCIsXCJzZG90XCI6XCLii4VcIixcInNkb3RlXCI6XCLiqaZcIixcInNlYXJoa1wiOlwi4qSlXCIsXCJzZWFyclwiOlwi4oaYXCIsXCJzZUFyclwiOlwi4oeYXCIsXCJzZWFycm93XCI6XCLihphcIixcInNlY3RcIjpcIsKnXCIsXCJzZW1pXCI6XCI7XCIsXCJzZXN3YXJcIjpcIuKkqVwiLFwic2V0bWludXNcIjpcIuKIllwiLFwic2V0bW5cIjpcIuKIllwiLFwic2V4dFwiOlwi4py2XCIsXCJTZnJcIjpcIvCdlJZcIixcInNmclwiOlwi8J2UsFwiLFwic2Zyb3duXCI6XCLijKJcIixcInNoYXJwXCI6XCLima9cIixcIlNIQ0hjeVwiOlwi0KlcIixcInNoY2hjeVwiOlwi0YlcIixcIlNIY3lcIjpcItCoXCIsXCJzaGN5XCI6XCLRiFwiLFwiU2hvcnREb3duQXJyb3dcIjpcIuKGk1wiLFwiU2hvcnRMZWZ0QXJyb3dcIjpcIuKGkFwiLFwic2hvcnRtaWRcIjpcIuKIo1wiLFwic2hvcnRwYXJhbGxlbFwiOlwi4oilXCIsXCJTaG9ydFJpZ2h0QXJyb3dcIjpcIuKGklwiLFwiU2hvcnRVcEFycm93XCI6XCLihpFcIixcInNoeVwiOlwiwq1cIixcIlNpZ21hXCI6XCLOo1wiLFwic2lnbWFcIjpcIs+DXCIsXCJzaWdtYWZcIjpcIs+CXCIsXCJzaWdtYXZcIjpcIs+CXCIsXCJzaW1cIjpcIuKIvFwiLFwic2ltZG90XCI6XCLiqapcIixcInNpbWVcIjpcIuKJg1wiLFwic2ltZXFcIjpcIuKJg1wiLFwic2ltZ1wiOlwi4qqeXCIsXCJzaW1nRVwiOlwi4qqgXCIsXCJzaW1sXCI6XCLiqp1cIixcInNpbWxFXCI6XCLiqp9cIixcInNpbW5lXCI6XCLiiYZcIixcInNpbXBsdXNcIjpcIuKopFwiLFwic2ltcmFyclwiOlwi4qWyXCIsXCJzbGFyclwiOlwi4oaQXCIsXCJTbWFsbENpcmNsZVwiOlwi4oiYXCIsXCJzbWFsbHNldG1pbnVzXCI6XCLiiJZcIixcInNtYXNocFwiOlwi4qizXCIsXCJzbWVwYXJzbFwiOlwi4qekXCIsXCJzbWlkXCI6XCLiiKNcIixcInNtaWxlXCI6XCLijKNcIixcInNtdFwiOlwi4qqqXCIsXCJzbXRlXCI6XCLiqqxcIixcInNtdGVzXCI6XCLiqqzvuIBcIixcIlNPRlRjeVwiOlwi0KxcIixcInNvZnRjeVwiOlwi0YxcIixcInNvbGJhclwiOlwi4oy/XCIsXCJzb2xiXCI6XCLip4RcIixcInNvbFwiOlwiL1wiLFwiU29wZlwiOlwi8J2VilwiLFwic29wZlwiOlwi8J2VpFwiLFwic3BhZGVzXCI6XCLimaBcIixcInNwYWRlc3VpdFwiOlwi4pmgXCIsXCJzcGFyXCI6XCLiiKVcIixcInNxY2FwXCI6XCLiipNcIixcInNxY2Fwc1wiOlwi4oqT77iAXCIsXCJzcWN1cFwiOlwi4oqUXCIsXCJzcWN1cHNcIjpcIuKKlO+4gFwiLFwiU3FydFwiOlwi4oiaXCIsXCJzcXN1YlwiOlwi4oqPXCIsXCJzcXN1YmVcIjpcIuKKkVwiLFwic3FzdWJzZXRcIjpcIuKKj1wiLFwic3FzdWJzZXRlcVwiOlwi4oqRXCIsXCJzcXN1cFwiOlwi4oqQXCIsXCJzcXN1cGVcIjpcIuKKklwiLFwic3FzdXBzZXRcIjpcIuKKkFwiLFwic3FzdXBzZXRlcVwiOlwi4oqSXCIsXCJzcXVhcmVcIjpcIuKWoVwiLFwiU3F1YXJlXCI6XCLilqFcIixcIlNxdWFyZUludGVyc2VjdGlvblwiOlwi4oqTXCIsXCJTcXVhcmVTdWJzZXRcIjpcIuKKj1wiLFwiU3F1YXJlU3Vic2V0RXF1YWxcIjpcIuKKkVwiLFwiU3F1YXJlU3VwZXJzZXRcIjpcIuKKkFwiLFwiU3F1YXJlU3VwZXJzZXRFcXVhbFwiOlwi4oqSXCIsXCJTcXVhcmVVbmlvblwiOlwi4oqUXCIsXCJzcXVhcmZcIjpcIuKWqlwiLFwic3F1XCI6XCLilqFcIixcInNxdWZcIjpcIuKWqlwiLFwic3JhcnJcIjpcIuKGklwiLFwiU3NjclwiOlwi8J2SrlwiLFwic3NjclwiOlwi8J2TiFwiLFwic3NldG1uXCI6XCLiiJZcIixcInNzbWlsZVwiOlwi4oyjXCIsXCJzc3RhcmZcIjpcIuKLhlwiLFwiU3RhclwiOlwi4ouGXCIsXCJzdGFyXCI6XCLimIZcIixcInN0YXJmXCI6XCLimIVcIixcInN0cmFpZ2h0ZXBzaWxvblwiOlwiz7VcIixcInN0cmFpZ2h0cGhpXCI6XCLPlVwiLFwic3RybnNcIjpcIsKvXCIsXCJzdWJcIjpcIuKKglwiLFwiU3ViXCI6XCLii5BcIixcInN1YmRvdFwiOlwi4qq9XCIsXCJzdWJFXCI6XCLiq4VcIixcInN1YmVcIjpcIuKKhlwiLFwic3ViZWRvdFwiOlwi4quDXCIsXCJzdWJtdWx0XCI6XCLiq4FcIixcInN1Ym5FXCI6XCLiq4tcIixcInN1Ym5lXCI6XCLiiopcIixcInN1YnBsdXNcIjpcIuKqv1wiLFwic3VicmFyclwiOlwi4qW5XCIsXCJzdWJzZXRcIjpcIuKKglwiLFwiU3Vic2V0XCI6XCLii5BcIixcInN1YnNldGVxXCI6XCLiioZcIixcInN1YnNldGVxcVwiOlwi4quFXCIsXCJTdWJzZXRFcXVhbFwiOlwi4oqGXCIsXCJzdWJzZXRuZXFcIjpcIuKKilwiLFwic3Vic2V0bmVxcVwiOlwi4quLXCIsXCJzdWJzaW1cIjpcIuKrh1wiLFwic3Vic3ViXCI6XCLiq5VcIixcInN1YnN1cFwiOlwi4quTXCIsXCJzdWNjYXBwcm94XCI6XCLiqrhcIixcInN1Y2NcIjpcIuKJu1wiLFwic3VjY2N1cmx5ZXFcIjpcIuKJvVwiLFwiU3VjY2VlZHNcIjpcIuKJu1wiLFwiU3VjY2VlZHNFcXVhbFwiOlwi4qqwXCIsXCJTdWNjZWVkc1NsYW50RXF1YWxcIjpcIuKJvVwiLFwiU3VjY2VlZHNUaWxkZVwiOlwi4om/XCIsXCJzdWNjZXFcIjpcIuKqsFwiLFwic3VjY25hcHByb3hcIjpcIuKqulwiLFwic3VjY25lcXFcIjpcIuKqtlwiLFwic3VjY25zaW1cIjpcIuKLqVwiLFwic3VjY3NpbVwiOlwi4om/XCIsXCJTdWNoVGhhdFwiOlwi4oiLXCIsXCJzdW1cIjpcIuKIkVwiLFwiU3VtXCI6XCLiiJFcIixcInN1bmdcIjpcIuKZqlwiLFwic3VwMVwiOlwiwrlcIixcInN1cDJcIjpcIsKyXCIsXCJzdXAzXCI6XCLCs1wiLFwic3VwXCI6XCLiioNcIixcIlN1cFwiOlwi4ouRXCIsXCJzdXBkb3RcIjpcIuKqvlwiLFwic3VwZHN1YlwiOlwi4quYXCIsXCJzdXBFXCI6XCLiq4ZcIixcInN1cGVcIjpcIuKKh1wiLFwic3VwZWRvdFwiOlwi4quEXCIsXCJTdXBlcnNldFwiOlwi4oqDXCIsXCJTdXBlcnNldEVxdWFsXCI6XCLiiodcIixcInN1cGhzb2xcIjpcIuKfiVwiLFwic3VwaHN1YlwiOlwi4quXXCIsXCJzdXBsYXJyXCI6XCLipbtcIixcInN1cG11bHRcIjpcIuKrglwiLFwic3VwbkVcIjpcIuKrjFwiLFwic3VwbmVcIjpcIuKKi1wiLFwic3VwcGx1c1wiOlwi4quAXCIsXCJzdXBzZXRcIjpcIuKKg1wiLFwiU3Vwc2V0XCI6XCLii5FcIixcInN1cHNldGVxXCI6XCLiiodcIixcInN1cHNldGVxcVwiOlwi4quGXCIsXCJzdXBzZXRuZXFcIjpcIuKKi1wiLFwic3Vwc2V0bmVxcVwiOlwi4quMXCIsXCJzdXBzaW1cIjpcIuKriFwiLFwic3Vwc3ViXCI6XCLiq5RcIixcInN1cHN1cFwiOlwi4quWXCIsXCJzd2FyaGtcIjpcIuKkplwiLFwic3dhcnJcIjpcIuKGmVwiLFwic3dBcnJcIjpcIuKHmVwiLFwic3dhcnJvd1wiOlwi4oaZXCIsXCJzd253YXJcIjpcIuKkqlwiLFwic3psaWdcIjpcIsOfXCIsXCJUYWJcIjpcIlxcdFwiLFwidGFyZ2V0XCI6XCLijJZcIixcIlRhdVwiOlwizqRcIixcInRhdVwiOlwiz4RcIixcInRicmtcIjpcIuKOtFwiLFwiVGNhcm9uXCI6XCLFpFwiLFwidGNhcm9uXCI6XCLFpVwiLFwiVGNlZGlsXCI6XCLFolwiLFwidGNlZGlsXCI6XCLFo1wiLFwiVGN5XCI6XCLQolwiLFwidGN5XCI6XCLRglwiLFwidGRvdFwiOlwi4oObXCIsXCJ0ZWxyZWNcIjpcIuKMlVwiLFwiVGZyXCI6XCLwnZSXXCIsXCJ0ZnJcIjpcIvCdlLFcIixcInRoZXJlNFwiOlwi4oi0XCIsXCJ0aGVyZWZvcmVcIjpcIuKItFwiLFwiVGhlcmVmb3JlXCI6XCLiiLRcIixcIlRoZXRhXCI6XCLOmFwiLFwidGhldGFcIjpcIs64XCIsXCJ0aGV0YXN5bVwiOlwiz5FcIixcInRoZXRhdlwiOlwiz5FcIixcInRoaWNrYXBwcm94XCI6XCLiiYhcIixcInRoaWNrc2ltXCI6XCLiiLxcIixcIlRoaWNrU3BhY2VcIjpcIuKBn+KAilwiLFwiVGhpblNwYWNlXCI6XCLigIlcIixcInRoaW5zcFwiOlwi4oCJXCIsXCJ0aGthcFwiOlwi4omIXCIsXCJ0aGtzaW1cIjpcIuKIvFwiLFwiVEhPUk5cIjpcIsOeXCIsXCJ0aG9yblwiOlwiw75cIixcInRpbGRlXCI6XCLLnFwiLFwiVGlsZGVcIjpcIuKIvFwiLFwiVGlsZGVFcXVhbFwiOlwi4omDXCIsXCJUaWxkZUZ1bGxFcXVhbFwiOlwi4omFXCIsXCJUaWxkZVRpbGRlXCI6XCLiiYhcIixcInRpbWVzYmFyXCI6XCLiqLFcIixcInRpbWVzYlwiOlwi4oqgXCIsXCJ0aW1lc1wiOlwiw5dcIixcInRpbWVzZFwiOlwi4qiwXCIsXCJ0aW50XCI6XCLiiK1cIixcInRvZWFcIjpcIuKkqFwiLFwidG9wYm90XCI6XCLijLZcIixcInRvcGNpclwiOlwi4quxXCIsXCJ0b3BcIjpcIuKKpFwiLFwiVG9wZlwiOlwi8J2Vi1wiLFwidG9wZlwiOlwi8J2VpVwiLFwidG9wZm9ya1wiOlwi4quaXCIsXCJ0b3NhXCI6XCLipKlcIixcInRwcmltZVwiOlwi4oC0XCIsXCJ0cmFkZVwiOlwi4oSiXCIsXCJUUkFERVwiOlwi4oSiXCIsXCJ0cmlhbmdsZVwiOlwi4pa1XCIsXCJ0cmlhbmdsZWRvd25cIjpcIuKWv1wiLFwidHJpYW5nbGVsZWZ0XCI6XCLil4NcIixcInRyaWFuZ2xlbGVmdGVxXCI6XCLiirRcIixcInRyaWFuZ2xlcVwiOlwi4omcXCIsXCJ0cmlhbmdsZXJpZ2h0XCI6XCLilrlcIixcInRyaWFuZ2xlcmlnaHRlcVwiOlwi4oq1XCIsXCJ0cmlkb3RcIjpcIuKXrFwiLFwidHJpZVwiOlwi4omcXCIsXCJ0cmltaW51c1wiOlwi4qi6XCIsXCJUcmlwbGVEb3RcIjpcIuKDm1wiLFwidHJpcGx1c1wiOlwi4qi5XCIsXCJ0cmlzYlwiOlwi4qeNXCIsXCJ0cml0aW1lXCI6XCLiqLtcIixcInRycGV6aXVtXCI6XCLij6JcIixcIlRzY3JcIjpcIvCdkq9cIixcInRzY3JcIjpcIvCdk4lcIixcIlRTY3lcIjpcItCmXCIsXCJ0c2N5XCI6XCLRhlwiLFwiVFNIY3lcIjpcItCLXCIsXCJ0c2hjeVwiOlwi0ZtcIixcIlRzdHJva1wiOlwixaZcIixcInRzdHJva1wiOlwixadcIixcInR3aXh0XCI6XCLiiaxcIixcInR3b2hlYWRsZWZ0YXJyb3dcIjpcIuKGnlwiLFwidHdvaGVhZHJpZ2h0YXJyb3dcIjpcIuKGoFwiLFwiVWFjdXRlXCI6XCLDmlwiLFwidWFjdXRlXCI6XCLDulwiLFwidWFyclwiOlwi4oaRXCIsXCJVYXJyXCI6XCLihp9cIixcInVBcnJcIjpcIuKHkVwiLFwiVWFycm9jaXJcIjpcIuKliVwiLFwiVWJyY3lcIjpcItCOXCIsXCJ1YnJjeVwiOlwi0Z5cIixcIlVicmV2ZVwiOlwixaxcIixcInVicmV2ZVwiOlwixa1cIixcIlVjaXJjXCI6XCLDm1wiLFwidWNpcmNcIjpcIsO7XCIsXCJVY3lcIjpcItCjXCIsXCJ1Y3lcIjpcItGDXCIsXCJ1ZGFyclwiOlwi4oeFXCIsXCJVZGJsYWNcIjpcIsWwXCIsXCJ1ZGJsYWNcIjpcIsWxXCIsXCJ1ZGhhclwiOlwi4qWuXCIsXCJ1ZmlzaHRcIjpcIuKlvlwiLFwiVWZyXCI6XCLwnZSYXCIsXCJ1ZnJcIjpcIvCdlLJcIixcIlVncmF2ZVwiOlwiw5lcIixcInVncmF2ZVwiOlwiw7lcIixcInVIYXJcIjpcIuKlo1wiLFwidWhhcmxcIjpcIuKGv1wiLFwidWhhcnJcIjpcIuKGvlwiLFwidWhibGtcIjpcIuKWgFwiLFwidWxjb3JuXCI6XCLijJxcIixcInVsY29ybmVyXCI6XCLijJxcIixcInVsY3JvcFwiOlwi4oyPXCIsXCJ1bHRyaVwiOlwi4pe4XCIsXCJVbWFjclwiOlwixapcIixcInVtYWNyXCI6XCLFq1wiLFwidW1sXCI6XCLCqFwiLFwiVW5kZXJCYXJcIjpcIl9cIixcIlVuZGVyQnJhY2VcIjpcIuKPn1wiLFwiVW5kZXJCcmFja2V0XCI6XCLijrVcIixcIlVuZGVyUGFyZW50aGVzaXNcIjpcIuKPnVwiLFwiVW5pb25cIjpcIuKLg1wiLFwiVW5pb25QbHVzXCI6XCLiio5cIixcIlVvZ29uXCI6XCLFslwiLFwidW9nb25cIjpcIsWzXCIsXCJVb3BmXCI6XCLwnZWMXCIsXCJ1b3BmXCI6XCLwnZWmXCIsXCJVcEFycm93QmFyXCI6XCLipJJcIixcInVwYXJyb3dcIjpcIuKGkVwiLFwiVXBBcnJvd1wiOlwi4oaRXCIsXCJVcGFycm93XCI6XCLih5FcIixcIlVwQXJyb3dEb3duQXJyb3dcIjpcIuKHhVwiLFwidXBkb3duYXJyb3dcIjpcIuKGlVwiLFwiVXBEb3duQXJyb3dcIjpcIuKGlVwiLFwiVXBkb3duYXJyb3dcIjpcIuKHlVwiLFwiVXBFcXVpbGlicml1bVwiOlwi4qWuXCIsXCJ1cGhhcnBvb25sZWZ0XCI6XCLihr9cIixcInVwaGFycG9vbnJpZ2h0XCI6XCLihr5cIixcInVwbHVzXCI6XCLiio5cIixcIlVwcGVyTGVmdEFycm93XCI6XCLihpZcIixcIlVwcGVyUmlnaHRBcnJvd1wiOlwi4oaXXCIsXCJ1cHNpXCI6XCLPhVwiLFwiVXBzaVwiOlwiz5JcIixcInVwc2loXCI6XCLPklwiLFwiVXBzaWxvblwiOlwizqVcIixcInVwc2lsb25cIjpcIs+FXCIsXCJVcFRlZUFycm93XCI6XCLihqVcIixcIlVwVGVlXCI6XCLiiqVcIixcInVwdXBhcnJvd3NcIjpcIuKHiFwiLFwidXJjb3JuXCI6XCLijJ1cIixcInVyY29ybmVyXCI6XCLijJ1cIixcInVyY3JvcFwiOlwi4oyOXCIsXCJVcmluZ1wiOlwixa5cIixcInVyaW5nXCI6XCLFr1wiLFwidXJ0cmlcIjpcIuKXuVwiLFwiVXNjclwiOlwi8J2SsFwiLFwidXNjclwiOlwi8J2TilwiLFwidXRkb3RcIjpcIuKLsFwiLFwiVXRpbGRlXCI6XCLFqFwiLFwidXRpbGRlXCI6XCLFqVwiLFwidXRyaVwiOlwi4pa1XCIsXCJ1dHJpZlwiOlwi4pa0XCIsXCJ1dWFyclwiOlwi4oeIXCIsXCJVdW1sXCI6XCLDnFwiLFwidXVtbFwiOlwiw7xcIixcInV3YW5nbGVcIjpcIuKmp1wiLFwidmFuZ3J0XCI6XCLippxcIixcInZhcmVwc2lsb25cIjpcIs+1XCIsXCJ2YXJrYXBwYVwiOlwiz7BcIixcInZhcm5vdGhpbmdcIjpcIuKIhVwiLFwidmFycGhpXCI6XCLPlVwiLFwidmFycGlcIjpcIs+WXCIsXCJ2YXJwcm9wdG9cIjpcIuKInVwiLFwidmFyclwiOlwi4oaVXCIsXCJ2QXJyXCI6XCLih5VcIixcInZhcnJob1wiOlwiz7FcIixcInZhcnNpZ21hXCI6XCLPglwiLFwidmFyc3Vic2V0bmVxXCI6XCLiiorvuIBcIixcInZhcnN1YnNldG5lcXFcIjpcIuKri++4gFwiLFwidmFyc3Vwc2V0bmVxXCI6XCLiiovvuIBcIixcInZhcnN1cHNldG5lcXFcIjpcIuKrjO+4gFwiLFwidmFydGhldGFcIjpcIs+RXCIsXCJ2YXJ0cmlhbmdsZWxlZnRcIjpcIuKKslwiLFwidmFydHJpYW5nbGVyaWdodFwiOlwi4oqzXCIsXCJ2QmFyXCI6XCLiq6hcIixcIlZiYXJcIjpcIuKrq1wiLFwidkJhcnZcIjpcIuKrqVwiLFwiVmN5XCI6XCLQklwiLFwidmN5XCI6XCLQslwiLFwidmRhc2hcIjpcIuKKolwiLFwidkRhc2hcIjpcIuKKqFwiLFwiVmRhc2hcIjpcIuKKqVwiLFwiVkRhc2hcIjpcIuKKq1wiLFwiVmRhc2hsXCI6XCLiq6ZcIixcInZlZWJhclwiOlwi4oq7XCIsXCJ2ZWVcIjpcIuKIqFwiLFwiVmVlXCI6XCLii4FcIixcInZlZWVxXCI6XCLiiZpcIixcInZlbGxpcFwiOlwi4ouuXCIsXCJ2ZXJiYXJcIjpcInxcIixcIlZlcmJhclwiOlwi4oCWXCIsXCJ2ZXJ0XCI6XCJ8XCIsXCJWZXJ0XCI6XCLigJZcIixcIlZlcnRpY2FsQmFyXCI6XCLiiKNcIixcIlZlcnRpY2FsTGluZVwiOlwifFwiLFwiVmVydGljYWxTZXBhcmF0b3JcIjpcIuKdmFwiLFwiVmVydGljYWxUaWxkZVwiOlwi4omAXCIsXCJWZXJ5VGhpblNwYWNlXCI6XCLigIpcIixcIlZmclwiOlwi8J2UmVwiLFwidmZyXCI6XCLwnZSzXCIsXCJ2bHRyaVwiOlwi4oqyXCIsXCJ2bnN1YlwiOlwi4oqC4oOSXCIsXCJ2bnN1cFwiOlwi4oqD4oOSXCIsXCJWb3BmXCI6XCLwnZWNXCIsXCJ2b3BmXCI6XCLwnZWnXCIsXCJ2cHJvcFwiOlwi4oidXCIsXCJ2cnRyaVwiOlwi4oqzXCIsXCJWc2NyXCI6XCLwnZKxXCIsXCJ2c2NyXCI6XCLwnZOLXCIsXCJ2c3VibkVcIjpcIuKri++4gFwiLFwidnN1Ym5lXCI6XCLiiorvuIBcIixcInZzdXBuRVwiOlwi4quM77iAXCIsXCJ2c3VwbmVcIjpcIuKKi++4gFwiLFwiVnZkYXNoXCI6XCLiiqpcIixcInZ6aWd6YWdcIjpcIuKmmlwiLFwiV2NpcmNcIjpcIsW0XCIsXCJ3Y2lyY1wiOlwixbVcIixcIndlZGJhclwiOlwi4qmfXCIsXCJ3ZWRnZVwiOlwi4oinXCIsXCJXZWRnZVwiOlwi4ouAXCIsXCJ3ZWRnZXFcIjpcIuKJmVwiLFwid2VpZXJwXCI6XCLihJhcIixcIldmclwiOlwi8J2UmlwiLFwid2ZyXCI6XCLwnZS0XCIsXCJXb3BmXCI6XCLwnZWOXCIsXCJ3b3BmXCI6XCLwnZWoXCIsXCJ3cFwiOlwi4oSYXCIsXCJ3clwiOlwi4omAXCIsXCJ3cmVhdGhcIjpcIuKJgFwiLFwiV3NjclwiOlwi8J2SslwiLFwid3NjclwiOlwi8J2TjFwiLFwieGNhcFwiOlwi4ouCXCIsXCJ4Y2lyY1wiOlwi4pevXCIsXCJ4Y3VwXCI6XCLii4NcIixcInhkdHJpXCI6XCLilr1cIixcIlhmclwiOlwi8J2Um1wiLFwieGZyXCI6XCLwnZS1XCIsXCJ4aGFyclwiOlwi4p+3XCIsXCJ4aEFyclwiOlwi4p+6XCIsXCJYaVwiOlwizp5cIixcInhpXCI6XCLOvlwiLFwieGxhcnJcIjpcIuKftVwiLFwieGxBcnJcIjpcIuKfuFwiLFwieG1hcFwiOlwi4p+8XCIsXCJ4bmlzXCI6XCLii7tcIixcInhvZG90XCI6XCLiqIBcIixcIlhvcGZcIjpcIvCdlY9cIixcInhvcGZcIjpcIvCdlalcIixcInhvcGx1c1wiOlwi4qiBXCIsXCJ4b3RpbWVcIjpcIuKoglwiLFwieHJhcnJcIjpcIuKftlwiLFwieHJBcnJcIjpcIuKfuVwiLFwiWHNjclwiOlwi8J2Ss1wiLFwieHNjclwiOlwi8J2TjVwiLFwieHNxY3VwXCI6XCLiqIZcIixcInh1cGx1c1wiOlwi4qiEXCIsXCJ4dXRyaVwiOlwi4pazXCIsXCJ4dmVlXCI6XCLii4FcIixcInh3ZWRnZVwiOlwi4ouAXCIsXCJZYWN1dGVcIjpcIsOdXCIsXCJ5YWN1dGVcIjpcIsO9XCIsXCJZQWN5XCI6XCLQr1wiLFwieWFjeVwiOlwi0Y9cIixcIlljaXJjXCI6XCLFtlwiLFwieWNpcmNcIjpcIsW3XCIsXCJZY3lcIjpcItCrXCIsXCJ5Y3lcIjpcItGLXCIsXCJ5ZW5cIjpcIsKlXCIsXCJZZnJcIjpcIvCdlJxcIixcInlmclwiOlwi8J2UtlwiLFwiWUljeVwiOlwi0IdcIixcInlpY3lcIjpcItGXXCIsXCJZb3BmXCI6XCLwnZWQXCIsXCJ5b3BmXCI6XCLwnZWqXCIsXCJZc2NyXCI6XCLwnZK0XCIsXCJ5c2NyXCI6XCLwnZOOXCIsXCJZVWN5XCI6XCLQrlwiLFwieXVjeVwiOlwi0Y5cIixcInl1bWxcIjpcIsO/XCIsXCJZdW1sXCI6XCLFuFwiLFwiWmFjdXRlXCI6XCLFuVwiLFwiemFjdXRlXCI6XCLFulwiLFwiWmNhcm9uXCI6XCLFvVwiLFwiemNhcm9uXCI6XCLFvlwiLFwiWmN5XCI6XCLQl1wiLFwiemN5XCI6XCLQt1wiLFwiWmRvdFwiOlwixbtcIixcInpkb3RcIjpcIsW8XCIsXCJ6ZWV0cmZcIjpcIuKEqFwiLFwiWmVyb1dpZHRoU3BhY2VcIjpcIuKAi1wiLFwiWmV0YVwiOlwizpZcIixcInpldGFcIjpcIs62XCIsXCJ6ZnJcIjpcIvCdlLdcIixcIlpmclwiOlwi4oSoXCIsXCJaSGN5XCI6XCLQllwiLFwiemhjeVwiOlwi0LZcIixcInppZ3JhcnJcIjpcIuKHnVwiLFwiem9wZlwiOlwi8J2Vq1wiLFwiWm9wZlwiOlwi4oSkXCIsXCJac2NyXCI6XCLwnZK1XCIsXCJ6c2NyXCI6XCLwnZOPXCIsXCJ6d2pcIjpcIuKAjVwiLFwiendualwiOlwi4oCMXCJ9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZW50aXRpZXMvbWFwcy9lbnRpdGllcy5qc29uXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IHtcIkFhY3V0ZVwiOlwiw4FcIixcImFhY3V0ZVwiOlwiw6FcIixcIkFjaXJjXCI6XCLDglwiLFwiYWNpcmNcIjpcIsOiXCIsXCJhY3V0ZVwiOlwiwrRcIixcIkFFbGlnXCI6XCLDhlwiLFwiYWVsaWdcIjpcIsOmXCIsXCJBZ3JhdmVcIjpcIsOAXCIsXCJhZ3JhdmVcIjpcIsOgXCIsXCJhbXBcIjpcIiZcIixcIkFNUFwiOlwiJlwiLFwiQXJpbmdcIjpcIsOFXCIsXCJhcmluZ1wiOlwiw6VcIixcIkF0aWxkZVwiOlwiw4NcIixcImF0aWxkZVwiOlwiw6NcIixcIkF1bWxcIjpcIsOEXCIsXCJhdW1sXCI6XCLDpFwiLFwiYnJ2YmFyXCI6XCLCplwiLFwiQ2NlZGlsXCI6XCLDh1wiLFwiY2NlZGlsXCI6XCLDp1wiLFwiY2VkaWxcIjpcIsK4XCIsXCJjZW50XCI6XCLColwiLFwiY29weVwiOlwiwqlcIixcIkNPUFlcIjpcIsKpXCIsXCJjdXJyZW5cIjpcIsKkXCIsXCJkZWdcIjpcIsKwXCIsXCJkaXZpZGVcIjpcIsO3XCIsXCJFYWN1dGVcIjpcIsOJXCIsXCJlYWN1dGVcIjpcIsOpXCIsXCJFY2lyY1wiOlwiw4pcIixcImVjaXJjXCI6XCLDqlwiLFwiRWdyYXZlXCI6XCLDiFwiLFwiZWdyYXZlXCI6XCLDqFwiLFwiRVRIXCI6XCLDkFwiLFwiZXRoXCI6XCLDsFwiLFwiRXVtbFwiOlwiw4tcIixcImV1bWxcIjpcIsOrXCIsXCJmcmFjMTJcIjpcIsK9XCIsXCJmcmFjMTRcIjpcIsK8XCIsXCJmcmFjMzRcIjpcIsK+XCIsXCJndFwiOlwiPlwiLFwiR1RcIjpcIj5cIixcIklhY3V0ZVwiOlwiw41cIixcImlhY3V0ZVwiOlwiw61cIixcIkljaXJjXCI6XCLDjlwiLFwiaWNpcmNcIjpcIsOuXCIsXCJpZXhjbFwiOlwiwqFcIixcIklncmF2ZVwiOlwiw4xcIixcImlncmF2ZVwiOlwiw6xcIixcImlxdWVzdFwiOlwiwr9cIixcIkl1bWxcIjpcIsOPXCIsXCJpdW1sXCI6XCLDr1wiLFwibGFxdW9cIjpcIsKrXCIsXCJsdFwiOlwiPFwiLFwiTFRcIjpcIjxcIixcIm1hY3JcIjpcIsKvXCIsXCJtaWNyb1wiOlwiwrVcIixcIm1pZGRvdFwiOlwiwrdcIixcIm5ic3BcIjpcIsKgXCIsXCJub3RcIjpcIsKsXCIsXCJOdGlsZGVcIjpcIsORXCIsXCJudGlsZGVcIjpcIsOxXCIsXCJPYWN1dGVcIjpcIsOTXCIsXCJvYWN1dGVcIjpcIsOzXCIsXCJPY2lyY1wiOlwiw5RcIixcIm9jaXJjXCI6XCLDtFwiLFwiT2dyYXZlXCI6XCLDklwiLFwib2dyYXZlXCI6XCLDslwiLFwib3JkZlwiOlwiwqpcIixcIm9yZG1cIjpcIsK6XCIsXCJPc2xhc2hcIjpcIsOYXCIsXCJvc2xhc2hcIjpcIsO4XCIsXCJPdGlsZGVcIjpcIsOVXCIsXCJvdGlsZGVcIjpcIsO1XCIsXCJPdW1sXCI6XCLDllwiLFwib3VtbFwiOlwiw7ZcIixcInBhcmFcIjpcIsK2XCIsXCJwbHVzbW5cIjpcIsKxXCIsXCJwb3VuZFwiOlwiwqNcIixcInF1b3RcIjpcIlxcXCJcIixcIlFVT1RcIjpcIlxcXCJcIixcInJhcXVvXCI6XCLCu1wiLFwicmVnXCI6XCLCrlwiLFwiUkVHXCI6XCLCrlwiLFwic2VjdFwiOlwiwqdcIixcInNoeVwiOlwiwq1cIixcInN1cDFcIjpcIsK5XCIsXCJzdXAyXCI6XCLCslwiLFwic3VwM1wiOlwiwrNcIixcInN6bGlnXCI6XCLDn1wiLFwiVEhPUk5cIjpcIsOeXCIsXCJ0aG9yblwiOlwiw75cIixcInRpbWVzXCI6XCLDl1wiLFwiVWFjdXRlXCI6XCLDmlwiLFwidWFjdXRlXCI6XCLDulwiLFwiVWNpcmNcIjpcIsObXCIsXCJ1Y2lyY1wiOlwiw7tcIixcIlVncmF2ZVwiOlwiw5lcIixcInVncmF2ZVwiOlwiw7lcIixcInVtbFwiOlwiwqhcIixcIlV1bWxcIjpcIsOcXCIsXCJ1dW1sXCI6XCLDvFwiLFwiWWFjdXRlXCI6XCLDnVwiLFwieWFjdXRlXCI6XCLDvVwiLFwieWVuXCI6XCLCpVwiLFwieXVtbFwiOlwiw79cIn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lbnRpdGllcy9tYXBzL2xlZ2FjeS5qc29uXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IHtcImFtcFwiOlwiJlwiLFwiYXBvc1wiOlwiJ1wiLFwiZ3RcIjpcIj5cIixcImx0XCI6XCI8XCIsXCJxdW90XCI6XCJcXFwiXCJ9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZW50aXRpZXMvbWFwcy94bWwuanNvblxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbkV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgaWYgKCFpc051bWJlcihuKSB8fCBuIDwgMCB8fCBpc05hTihuKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGVyLCBoYW5kbGVyLCBsZW4sIGFyZ3MsIGksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMuZXJyb3IgfHxcbiAgICAgICAgKGlzT2JqZWN0KHRoaXMuX2V2ZW50cy5lcnJvcikgJiYgIXRoaXMuX2V2ZW50cy5lcnJvci5sZW5ndGgpKSB7XG4gICAgICBlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LiAoJyArIGVyICsgJyknKTtcbiAgICAgICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzVW5kZWZpbmVkKGhhbmRsZXIpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy8gZmFzdCBjYXNlc1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2xvd2VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICBpZiAodGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKVxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICBlbHNlIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2VcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG5cbiAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX21heExpc3RlbmVycykpIHtcbiAgICAgIG0gPSB0aGlzLl9tYXhMaXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICB9XG5cbiAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIGluIElFIDEwXG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIGZpcmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuXG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBnLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHRoaXMub24odHlwZSwgZyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0LCBwb3NpdGlvbiwgbGVuZ3RoLCBpO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICBwb3NpdGlvbiA9IC0xO1xuXG4gIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fFxuICAgICAgKGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikgJiYgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIga2V5LCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICBpZiAoIXRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgZWxzZSBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAoa2V5IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICB9IGVsc2UgaWYgKGxpc3RlbmVycykge1xuICAgIC8vIExJRk8gb3JkZXJcbiAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gIGVsc2VcbiAgICByZXQgPSB0aGlzLl9ldmVudHNbdHlwZV0uc2xpY2UoKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgaWYgKHRoaXMuX2V2ZW50cykge1xuICAgIHZhciBldmxpc3RlbmVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKGlzRnVuY3Rpb24oZXZsaXN0ZW5lcikpXG4gICAgICByZXR1cm4gMTtcbiAgICBlbHNlIGlmIChldmxpc3RlbmVyKVxuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG59O1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCIvKiFcbiAqIGlzb2JqZWN0IDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pc29iamVjdD5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIGlzQXJyYXkodmFsKSA9PT0gZmFsc2U7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcG9zdGh0bWwtcGFyc2VyL25vZGVfbW9kdWxlcy9pc29iamVjdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJ2YXIgU0lOR0xFX1RBR1MgPSBbXG4gICdhcmVhJyxcbiAgJ2Jhc2UnLFxuICAnYnInLFxuICAnY29sJyxcbiAgJ2NvbW1hbmQnLFxuICAnZW1iZWQnLFxuICAnaHInLFxuICAnaW1nJyxcbiAgJ2lucHV0JyxcbiAgJ2tleWdlbicsXG4gICdsaW5rJyxcbiAgJ21lbnVpdGVtJyxcbiAgJ21ldGEnLFxuICAncGFyYW0nLFxuICAnc291cmNlJyxcbiAgJ3RyYWNrJyxcbiAgJ3dicicsXG4gIC8vIEN1c3RvbSAoUG9zdEhUTUwpXG4gICdpbXBvcnQnLFxuICAnaW5jbHVkZScsXG4gICdleHRlbmQnXG5dXG5cbi8qKlxuICogUmVuZGVyIFBvc3RIVE1MIFRyZWUgdG8gSFRNTFxuICpcbiAqIEBwYXJhbSAge0FycmF5fE9iamVjdH0gdHJlZSBQb3N0SFRNTCBUcmVlXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9uc1xuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gSFRNTFxuICovXG5mdW5jdGlvbiByZW5kZXIgKHRyZWUsIG9wdGlvbnMpIHtcbiAgLyoqXG4gICAqIE9wdGlvbnNcbiAgICpcbiAgICogQHR5cGUge09iamVjdH1cbiAgICpcbiAgICogQHByb3Age0FycmF5PFN0cmluZ3xSZWdFeHA+fSBzaW5nbGVUYWdzICBDdXN0b20gc2luZ2xlIHRhZ3MgKHNlbGZDbG9zaW5nKVxuICAgKiBAcHJvcCB7U3RyaW5nfSBjbG9zaW5nU2luZ2xlVGFnIENsb3NpbmcgZm9ybWF0IGZvciBzaW5nbGUgdGFnXG4gICAqXG4gICAqIEZvcm1hdHM6XG4gICAqXG4gICAqIGBgYCB0YWc6IGA8YnI+PC9icj5gIGBgYCwgc2xhc2g6IGA8YnIgLz5gIGBgYCwgYGBgZGVmYXVsdDogYDxicj5gIGBgYFxuICAgKi9cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICB2YXIgc2luZ2xlVGFncyA9IFNJTkdMRV9UQUdTLmNvbmNhdChvcHRpb25zLnNpbmdsZVRhZ3MgfHwgW10pXG4gIHZhciBzaW5nbGVSZWdFeHAgPSBzaW5nbGVUYWdzLmZpbHRlcihmdW5jdGlvbiAodGFnKSB7XG4gICAgcmV0dXJuIHRhZyBpbnN0YW5jZW9mIFJlZ0V4cCA/IHRhZyA6IGZhbHNlXG4gIH0pXG5cbiAgdmFyIGNsb3NpbmdTaW5nbGVUYWcgPSBvcHRpb25zLmNsb3NpbmdTaW5nbGVUYWdcblxuICByZXR1cm4gaHRtbCh0cmVlKVxuXG4gIC8qKlxuICAgKiBIVE1MIFN0cmluZ2lmaWVyXG4gICAqXG4gICAqIEBwYXJhbSAge0FycmF5fE9iamVjdH0gdHJlZSBQb3N0SFRNTCBUcmVlXG4gICAqXG4gICAqIEByZXR1cm4ge1N0cmluZ30gcmVzdWx0IEhUTUxcbiAgICovXG4gIGZ1bmN0aW9uIGh0bWwgKHRyZWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gJydcblxuICAgIHRyYXZlcnNlKFtdLmNvbmNhdCh0cmVlKSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIGlmICghbm9kZSkgcmV0dXJuXG5cbiAgICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG5vZGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJlc3VsdCArPSBub2RlXG5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygbm9kZS50YWcgPT09ICdib29sZWFuJyAmJiAhbm9kZS50YWcpIHtcbiAgICAgICAgdHlwZW9mIG5vZGUuY29udGVudCAhPT0gJ29iamVjdCcgJiYgKHJlc3VsdCArPSBub2RlLmNvbnRlbnQpXG5cbiAgICAgICAgcmV0dXJuIG5vZGUuY29udGVudFxuICAgICAgfVxuXG4gICAgICAvLyB0cmVhdCBhcyBuZXcgcm9vdCB0cmVlIGlmIG5vZGUgaXMgYW4gYXJyYXlcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICAgIHJlc3VsdCArPSBodG1sKG5vZGUpXG5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHZhciB0YWcgPSBub2RlLnRhZyB8fCAnZGl2J1xuXG4gICAgICBpZiAoaXNTaW5nbGVUYWcodGFnLCBzaW5nbGVUYWdzLCBzaW5nbGVSZWdFeHApKSB7XG4gICAgICAgIHJlc3VsdCArPSAnPCcgKyB0YWcgKyBhdHRycyhub2RlLmF0dHJzKVxuXG4gICAgICAgIHN3aXRjaCAoY2xvc2luZ1NpbmdsZVRhZykge1xuICAgICAgICAgIGNhc2UgJ3RhZyc6XG4gICAgICAgICAgICByZXN1bHQgKz0gJz48LycgKyB0YWcgKyAnPidcblxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICdzbGFzaCc6XG4gICAgICAgICAgICByZXN1bHQgKz0gJyAvPidcblxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmVzdWx0ICs9ICc+J1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gJzwnICsgdGFnICsgKG5vZGUuYXR0cnMgPyBhdHRycyhub2RlLmF0dHJzKSA6ICcnKSArICc+JyArIChub2RlLmNvbnRlbnQgPyBodG1sKG5vZGUuY29udGVudCkgOiAnJykgKyAnPC8nICsgdGFnICsgJz4nXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG4vKipcbiAqIEBtb2R1bGUgcG9zdGh0bWwtcmVuZGVyXG4gKlxuICogQHZlcnNpb24gMS4wLjdcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHJlbmRlclxuXG4vKiogQHByaXZhdGUgKi9cbmZ1bmN0aW9uIGF0dHJzIChvYmopIHtcbiAgdmFyIGF0dHIgPSAnJ1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAnYm9vbGVhbicgJiYgb2JqW2tleV0pIHtcbiAgICAgIGF0dHIgKz0gJyAnICsga2V5XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHR5cGVvZiBvYmpba2V5XSA9PT0gJ3N0cmluZycgfHxcbiAgICAgIHR5cGVvZiBvYmpba2V5XSA9PT0gJ251bWJlcidcbiAgICApIHtcbiAgICAgIGF0dHIgKz0gJyAnICsga2V5ICsgJz1cIicgKyBvYmpba2V5XSArICdcIidcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0clxufVxuXG4vKiogQHByaXZhdGUgKi9cbmZ1bmN0aW9uIHRyYXZlcnNlICh0cmVlLCBjYikge1xuICBpZiAoQXJyYXkuaXNBcnJheSh0cmVlKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSB0cmVlLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0cmF2ZXJzZShjYih0cmVlW2ldKSwgY2IpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB0cmVlID09PSAnb2JqZWN0JyAmJiB0cmVlLmhhc093blByb3BlcnR5KCdjb250ZW50JykpIHtcbiAgICB0cmF2ZXJzZSh0cmVlLmNvbnRlbnQsIGNiKVxuICB9XG5cbiAgcmV0dXJuIHRyZWVcbn1cblxuLyoqIEBwcml2YXRlICovXG5mdW5jdGlvbiBpc1NpbmdsZVRhZyAodGFnLCBzaW5nbGVUYWdzLCBzaW5nbGVSZWdFeHApIHtcbiAgaWYgKHNpbmdsZVJlZ0V4cC5sZW5ndGgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpbmdsZVJlZ0V4cC5sZW5ndGg7IGkrKykge1xuICAgICAgcmV0dXJuICEhdGFnLm1hdGNoKHNpbmdsZVJlZ0V4cFtpXSlcbiAgICB9XG4gIH1cblxuICBpZiAoc2luZ2xlVGFncy5pbmRleE9mKHRhZykgPT09IC0xKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcG9zdGh0bWwtcmVuZGVyL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwb3N0aHRtbEN1c3RvbUVsZW1lbnRzKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgZGVmYXVsdFRhZyA9IG9wdGlvbnMuZGVmYXVsdFRhZyB8fCAnZGl2JyxcbiAgICAgICAgc2tpcFRhZ3MgPSBvcHRpb25zLnNraXBUYWdzIHx8IFtdLFxuICAgICAgICBodG1sNXRhZ3MgPSBbXG4gICAgICAgICdhJywnYWJicicsJ2FkZHJlc3MnLCdhcmVhJywnYXJ0aWNsZScsJ2FzaWRlJywnYXVkaW8nLCdiJywnYmFzZScsJ2JkaScsJ2JkbycsJ2Jsb2NrcXVvdGUnLFxuICAgICAgICAnYm9keScsJ2JyJywnYnV0dG9uJywnY2FudmFzJywnY2FwdGlvbicsJ2NpdGUnLCdjb2RlJywnY29sJywnY29sZ3JvdXAnLCdkYXRhbGlzdCcsJ2RkJywnZGVsJywnZGV0YWlscycsJ2RmbicsXG4gICAgICAgICdkaWFsb2cnLCdkaXYnLCdkbCcsJ2R0JywnZW0nLCdlbWJlZCcsJ2ZpZWxkc2V0JywnZmlnY2FwdGlvbicsJ2ZpZ3VyZScsJ2Zvb3RlcicsJ2Zvcm0nLFxuICAgICAgICAnaDEnLCdoMicsJ2gzJywnaDQnLCdoNScsJ2g2JywnaGVhZCcsJ2hlYWRlcicsJ2hyJywnaHRtbCcsJ2knLCdpZnJhbWUnLCdpbWcnLCdpbnB1dCcsJ2lucycsJ2tiZCcsJ2tleWdlbicsXG4gICAgICAgICdsYWJlbCcsJ2xlZ2VuZCcsJ2xpJywnbGluaycsJ21haW4nLCdtYXAnLCdtYXJrJywnbWVudScsJ21lbnVpdGVtJywnbWV0YScsJ21ldGVyJywnbmF2Jywnbm9zY3JpcHQnLCdvYmplY3QnLFxuICAgICAgICAnb2wnLCdvcHRncm91cCcsJ29wdGlvbicsJ291dHB1dCcsJ3AnLCdwYXJhbScsJ3ByZScsJ3Byb2dyZXNzJywncScsJ3JwJywncnQnLCdydWJ5JywncycsJ3NhbXAnLFxuICAgICAgICAnc2NyaXB0Jywnc2VjdGlvbicsJ3NlbGVjdCcsJ3NtYWxsJywnc291cmNlJywnc3BhbicsJ3N0cm9uZycsJ3N0eWxlJywnc3ViJywnc3VtbWFyeScsJ3N1cCcsXG4gICAgICAgICd0YWJsZScsJ3Rib2R5JywndGQnLCd0ZXh0YXJlYScsJ3Rmb290JywndGgnLCd0aGVhZCcsJ3RpbWUnLCd0aXRsZScsJ3RyJywndHJhY2snLCd1JywndWwnLCd2YXInLCd2aWRlbycsJ3dicidcbiAgICBdO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHRyZWUpIHtcbiAgICAgICAgdHJlZS53YWxrKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgIGlmKG5vZGUudGFnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhZyA9IG5vZGUudGFnO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNraXBUYWdzLmluZGV4T2YodGFnKSAhPT0gLTEgfHwgaHRtbDV0YWdzLmluZGV4T2YodGFnLnRvTG93ZXJDYXNlKCkpID09PSAtMSkge1xuXG4gICAgICAgICAgICAgICAgICAgIG5vZGUudGFnID0gZGVmYXVsdFRhZztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGUuYXR0cnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXR0cnMgPSB7IGNsYXNzOiB0YWcgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmF0dHJzLnRhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS50YWcgPSBub2RlLmF0dHJzLnRhZztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBub2RlLmF0dHJzLnRhZztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygbm9kZS5hdHRycy5jbGFzcyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXR0cnMuY2xhc3MgPSB0YWc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgY2xhc3NlcyA9IG5vZGUuYXR0cnMuY2xhc3Muc3BsaXQoJyAnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoY2xhc3Nlcy5pbmRleE9mKHRhZykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmF0dHJzLmNsYXNzID0gW3RhZ10uY29uY2F0KGNsYXNzZXMpLmpvaW4oJyAnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudGFnID0gbm9kZS50YWcudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cmVlO1xuICAgIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcG9zdGh0bWwtY3VzdG9tLWVsZW1lbnRzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5jb3VudCsrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiWW91IGNsaWNrZWQgbWUgXCIgKyBfdm0uX3MoX3ZtLmNvdW50KSArIFwiIHRpbWVzLlwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmNvbnRlbnQpIH0gfSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMGZkNzViNzhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTBmZDc1Yjc4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9CdXR0b25Db3VudGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvY3JpdGljYWwtaG9tZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9sYXVuY2gtbHAtc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvbHAtc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSA0Il0sInNvdXJjZVJvb3QiOiIifQ==