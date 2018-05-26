webpackJsonp([5],[
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
		sticky: ".sticky",
		slider: '.glide'
	},
	useVue: true,
	purgecssWhitelist: ["requestinfo", "menu-main-menu", "current_page_item", "fieldset", "legend", "label", "current-menu-item"],
	purgecssWhitelistPatterns: [/^elp(_.*)?$/, /^keep-nested-children/]
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
__webpack_require__(14);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
module.exports = __webpack_require__(18);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_hotHelper_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_themeConfig__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_themeConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_themeConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_helpers_utilities__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_helpers_utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scripts_helpers_utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_components_main_navigation__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_components_main_navigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__scripts_components_main_navigation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_VlhLibrary__ = __webpack_require__(10);

if (false) {
	hotHelper(module);
}

/* Get Theme Config File
*****************************/


/* Regular Imports - Include accross all pages
*****************************/



/* Importing Vue Components
*****************************/

if (__WEBPACK_IMPORTED_MODULE_1_themeConfig___default.a.useVue) {
	Object(__WEBPACK_IMPORTED_MODULE_4__scripts_VlhLibrary__["a" /* default */])();
}

/* Dynamic Imports - Loading based on conditions
*****************************/
function handleAccordions() {
	if (document.querySelector(__WEBPACK_IMPORTED_MODULE_1_themeConfig___default.a.selectors.accordion) !== null) {
		return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 20));
	}
}

function handleDegreeFiltering() {
	if (document.querySelector(__WEBPACK_IMPORTED_MODULE_1_themeConfig___default.a.selectors.mixItUp) !== null) {
		return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 21));
	}
}

function handleSocialShare() {
	if (document.querySelector(__WEBPACK_IMPORTED_MODULE_1_themeConfig___default.a.selectors.socialShare) !== null) {
		return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 22));
	}
}

function handleStickyElements() {
	if (document.querySelector(__WEBPACK_IMPORTED_MODULE_1_themeConfig___default.a.selectors.sticky) !== null) {
		return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 23));
	}
}

function handleSlider() {
	if (document.querySelector(__WEBPACK_IMPORTED_MODULE_1_themeConfig___default.a.selectors.slider) !== null) {
		return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 24));
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hotHelper */
function hotHelper(module) {
  module.hot.accept();

  var hotEmitter = __webpack_require__(6);
  var DEAD_CSS_TIMEOUT = 2000;

  hotEmitter.on("webpackHotUpdate", function (currentHash) {
    document.querySelectorAll("link[href][rel=stylesheet]").forEach(function (link) {
      var nextStyleHref = link.href.replace(/(\?\d+)?$/, "?" + Date.now());
      var newLink = link.cloneNode();

      newLink.href = nextStyleHref;
      link.parentNode.appendChild(newLink);

      setTimeout(function () {
        link.parentNode.removeChild(link);
      }, DEAD_CSS_TIMEOUT);
    });
  });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var EventEmitter = __webpack_require__(7);
module.exports = new EventEmitter();


/***/ }),
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


/* harmony default export */ __webpack_exports__["a"] = (function () {
	var VlhAppEl = document.getElementById('vlh-app');

	if (VlhAppEl) {
		var vlhApp = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
			el: VlhAppEl,
			data: {
				msg: 'A Message From Vue!',
				showModal: false
			}
		});
	}
});

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ })
],[3]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZS5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9oZWxwZXJzL2hvdEhlbHBlci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2hvdC9lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hlbHBlcnMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvbWFpbi1uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL1ZsaExpYnJhcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jcml0aWNhbC1ob21lLnNjc3M/M2VmOSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2xhdW5jaC1scC1zdHlsZS5zY3NzPzE4MTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9scC1jcml0aWNhbC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbHAtc3R5bGUuc2Nzcz85NmYyIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzcz81NDllIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJkaXJlY3RvcnlOYW1lIiwic2VsZWN0b3JzIiwiYWNjb3JkaW9uIiwibWl4SXRVcCIsInNvY2lhbFNoYXJlIiwic3RpY2t5Iiwic2xpZGVyIiwidXNlVnVlIiwicHVyZ2Vjc3NXaGl0ZWxpc3QiLCJwdXJnZWNzc1doaXRlbGlzdFBhdHRlcm5zIiwiaG90SGVscGVyIiwidGhlbWVDb25maWciLCJpbml0aWFsaXplVmxoTGlicmFyeSIsImhhbmRsZUFjY29yZGlvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYW5kbGVEZWdyZWVGaWx0ZXJpbmciLCJoYW5kbGVTb2NpYWxTaGFyZSIsImhhbmRsZVN0aWNreUVsZW1lbnRzIiwiaGFuZGxlU2xpZGVyIiwiaG90IiwiYWNjZXB0IiwiaG90RW1pdHRlciIsInJlcXVpcmUiLCJERUFEX0NTU19USU1FT1VUIiwib24iLCJjdXJyZW50SGFzaCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibGluayIsIm5leHRTdHlsZUhyZWYiLCJocmVmIiwicmVwbGFjZSIsIkRhdGUiLCJub3ciLCJuZXdMaW5rIiwiY2xvbmVOb2RlIiwicGFyZW50Tm9kZSIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsInJlbW92ZUNoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkZvcm1TZWxlY3RzIiwic2VsZWN0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiJCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZUNsYXNzIiwiaW5zZXJ0U3VibWVudVRvZ2dsZUJ1dHRvbnMiLCJzdWJtZW51TGlua3MiLCJzdWJtZW51QnV0dG9uc0hUTUwiLCJhZnRlciIsInRvZ2dsZVN1Ym1lbnVTdGF0ZSIsIkN1cnJlbnRTdWJtZW51IiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaGFuZGxlQWN0aXZlU3VibWVudSIsIlJlbGV2YW50U3VibWVudXMiLCJhY3RpdmVTdWJtZW51IiwiZmlsdGVyIiwiYWN0aXZlU3VibWVudUJ1dHRvbiIsInByZXYiLCJzbGlkZVVwIiwiTWFpbk1lbnUiLCJNZW51SXRlbXNXaXRoQ2hpbGRyZW4iLCJmaW5kIiwiTGlua3NGb3JTdWJtZW51cyIsIkJ1dHRvbkhUTUwiLCJTdWJtZW51cyIsImNoaWxkcmVuIiwiQ2hpbGRyZW5TdWJtZW51cyIsIlN1Ym1lbnVCdXR0b25zIiwiQ2hpbGRyZW5TdWJtZW51QnV0dG9ucyIsIndpbmRvd1dpZHRoIiwiU2V0dXAiLCJ0b2dnbGVTdWJtZW51IiwiU3VibWVudSIsInNsaWRlVG9nZ2xlIiwic2V0V2luZG93V2lkdGgiLCJ3aW5kb3ciLCJ3aWR0aCIsIndpbmRvd1dhdGNoZXIiLCJyZXNpemUiLCJpcyIsInJlbW92ZUF0dHIiLCJuZXdBY3RpdmVTdWJtZW51IiwicGFyZW50cyIsImxhc3QiLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJjbGlja0V2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwibmV4dCIsImhhc09wZW5TdWJtZW51IiwibGVuZ3RoIiwib3BlbmluZ05ld1N1Ym1lbnUiLCJpc0NoaWxkU3VibWVudSIsImhhc09wZW5DaGlsZFN1Ym1lbnUiLCJ3aW4iLCJWbGhBcHBFbCIsImdldEVsZW1lbnRCeUlkIiwidmxoQXBwIiwiZWwiLCJkYXRhIiwibXNnIiwic2hvd01vZGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQjtBQUNoQkMsZ0JBQWUsZUFEQztBQUVoQkMsWUFBVztBQUNWQyxhQUFXLFlBREQ7QUFFVkMsV0FBUyxVQUZDO0FBR1ZDLGVBQWEsY0FISDtBQUlWQyxVQUFRLFNBSkU7QUFLVkMsVUFBUTtBQUxFLEVBRks7QUFTaEJDLFNBQVEsSUFUUTtBQVVoQkMsb0JBQW1CLENBQ2xCLGFBRGtCLEVBRWxCLGdCQUZrQixFQUdsQixtQkFIa0IsRUFJbEIsVUFKa0IsRUFLbEIsUUFMa0IsRUFNbEIsT0FOa0IsRUFPbEIsbUJBUGtCLENBVkg7QUFtQmhCQyw0QkFBMkIsQ0FDMUIsYUFEMEIsRUFFMUIsdUJBRjBCO0FBbkJYLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBLElBQUksS0FBSixFQUFnQjtBQUFFQyxXQUFVWixNQUFWO0FBQW9COztBQUd0Qzs7QUFFQTs7QUFHQTs7QUFFQTtBQUNBOztBQUdBOztBQUVBO0FBQ0EsSUFBSSxtREFBQWEsQ0FBWUosTUFBaEIsRUFBd0I7QUFBRUssQ0FBQSw0RUFBQUE7QUFBeUI7O0FBR25EOztBQUVBLFNBQVNDLGdCQUFULEdBQTRCO0FBQzNCLEtBQUlDLFNBQVNDLGFBQVQsQ0FBdUIsbURBQUFKLENBQVlWLFNBQVosQ0FBc0JDLFNBQTdDLE1BQTRELElB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ZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuXHRkaXJlY3RvcnlOYW1lOiBcInN0YXJ0ZXItdGhlbWVcIixcblx0c2VsZWN0b3JzOiB7XG5cdFx0YWNjb3JkaW9uOiBcIi5hY2NvcmRpb25cIixcblx0XHRtaXhJdFVwOiBcIi5taXhpdHVwXCIsXG5cdFx0c29jaWFsU2hhcmU6IFwiLnNvY2lhbC1saW5rXCIsXG5cdFx0c3RpY2t5OiBcIi5zdGlja3lcIixcblx0XHRzbGlkZXI6ICcuZ2xpZGUnXG5cdH0sXG5cdHVzZVZ1ZTogdHJ1ZSxcblx0cHVyZ2Vjc3NXaGl0ZWxpc3Q6IFtcblx0XHRcInJlcXVlc3RpbmZvXCIsXG5cdFx0XCJtZW51LW1haW4tbWVudVwiLFxuXHRcdFwiY3VycmVudF9wYWdlX2l0ZW1cIixcblx0XHRcImZpZWxkc2V0XCIsXG5cdFx0XCJsZWdlbmRcIixcblx0XHRcImxhYmVsXCIsXG5cdFx0XCJjdXJyZW50LW1lbnUtaXRlbVwiLFxuXHRdLFxuXHRwdXJnZWNzc1doaXRlbGlzdFBhdHRlcm5zOiBbXG5cdFx0L15lbHAoXy4qKT8kLyxcblx0XHQvXmtlZXAtbmVzdGVkLWNoaWxkcmVuL1xuXHRdXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGhlbWUuY29uZmlnLmpzIiwiaW1wb3J0IHtob3RIZWxwZXJ9IGZyb20gJy4vaGVscGVycy9ob3RIZWxwZXIuanMnXG5pZiAobW9kdWxlLmhvdCkgeyBob3RIZWxwZXIobW9kdWxlKTsgfVxuXG5cbi8qIEdldCBUaGVtZSBDb25maWcgRmlsZVxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgdGhlbWVDb25maWcgZnJvbSBcInRoZW1lQ29uZmlnXCI7XG5cblxuLyogUmVndWxhciBJbXBvcnRzIC0gSW5jbHVkZSBhY2Nyb3NzIGFsbCBwYWdlc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgXCJAL3NjcmlwdHMvaGVscGVycy91dGlsaXRpZXNcIjtcbmltcG9ydCBcIkAvc2NyaXB0cy9jb21wb25lbnRzL21haW4tbmF2aWdhdGlvblwiO1xuXG5cbi8qIEltcG9ydGluZyBWdWUgQ29tcG9uZW50c1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgaW5pdGlhbGl6ZVZsaExpYnJhcnkgZnJvbSBcIkAvc2NyaXB0cy9WbGhMaWJyYXJ5XCI7XG5pZiAodGhlbWVDb25maWcudXNlVnVlKSB7IGluaXRpYWxpemVWbGhMaWJyYXJ5KCk7IH1cblxuXG4vKiBEeW5hbWljIEltcG9ydHMgLSBMb2FkaW5nIGJhc2VkIG9uIGNvbmRpdGlvbnNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gaGFuZGxlQWNjb3JkaW9ucygpIHtcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhlbWVDb25maWcuc2VsZWN0b3JzLmFjY29yZGlvbikgIT09IG51bGwpIHtcblx0XHRyZXR1cm4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYWNjb3JkaW9uXCIgKi8gXCJAL3NjcmlwdHMvY29tcG9uZW50cy9hY2NvcmRpb25cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRGVncmVlRmlsdGVyaW5nKCkge1xuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGVtZUNvbmZpZy5zZWxlY3RvcnMubWl4SXRVcCkgIT09IG51bGwpIHtcblx0XHRyZXR1cm4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZGVncmVlLWZpbHRlcmluZ1wiICovIFwiQC9zY3JpcHRzL2NvbXBvbmVudHMvZGVncmVlLWZpbHRlcmluZ1wiKTtcblx0fVxufVxuXG5mdW5jdGlvbiBoYW5kbGVTb2NpYWxTaGFyZSgpIHtcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhlbWVDb25maWcuc2VsZWN0b3JzLnNvY2lhbFNoYXJlKSAhPT0gbnVsbCkge1xuXHRcdHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJzb2NpYWwtc2hhcmVcIiAqLyBcIkAvc2NyaXB0cy9jb21wb25lbnRzL3NvY2lhbC1zaGFyZS1idXR0b25zXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVN0aWNreUVsZW1lbnRzKCkge1xuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGVtZUNvbmZpZy5zZWxlY3RvcnMuc3RpY2t5KSAhPT0gbnVsbCkge1xuXHRcdHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJzdGlja3lcIiAqLyBcIkAvc2NyaXB0cy9jb21wb25lbnRzL3N0aWNreVwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiBoYW5kbGVTbGlkZXIoKSB7XG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoZW1lQ29uZmlnLnNlbGVjdG9ycy5zbGlkZXIpICE9PSBudWxsKSB7XG5cdFx0cmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInNsaWRlclwiICovIFwiQC9zY3JpcHRzL2NvbXBvbmVudHMvc2xpZGVyXCIpO1xuXHR9XG59XG5cblxuLyogQ2FsbGluZyBEeW5hbWljIEltcG9ydCBGdW5jdGlvbnNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuaGFuZGxlQWNjb3JkaW9ucygpO1xuaGFuZGxlRGVncmVlRmlsdGVyaW5nKCk7XG5oYW5kbGVTb2NpYWxTaGFyZSgpO1xuaGFuZGxlU3RpY2t5RWxlbWVudHMoKTtcbmhhbmRsZVNsaWRlcigpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvc2NyaXB0cy5qcyIsImV4cG9ydCBmdW5jdGlvbiBob3RIZWxwZXIobW9kdWxlKSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KCk7XG5cbiAgY29uc3QgaG90RW1pdHRlciA9IHJlcXVpcmUoXCJ3ZWJwYWNrL2hvdC9lbWl0dGVyXCIpO1xuICBjb25zdCBERUFEX0NTU19USU1FT1VUID0gMjAwMDtcblxuICBob3RFbWl0dGVyLm9uKFwid2VicGFja0hvdFVwZGF0ZVwiLCBmdW5jdGlvbihjdXJyZW50SGFzaCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rW2hyZWZdW3JlbD1zdHlsZXNoZWV0XVwiKS5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICBjb25zdCBuZXh0U3R5bGVIcmVmID0gbGluay5ocmVmLnJlcGxhY2UoLyhcXD9cXGQrKT8kLywgYD8ke0RhdGUubm93KCl9YCk7XG4gICAgICBjb25zdCBuZXdMaW5rID0gbGluay5jbG9uZU5vZGUoKTtcblxuICAgICAgbmV3TGluay5ocmVmID0gbmV4dFN0eWxlSHJlZjtcbiAgICAgIGxpbmsucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdMaW5rKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxpbmsucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICAgIH0sIERFQURfQ1NTX1RJTUVPVVQpO1xuICAgIH0pO1xuICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvaGVscGVycy9ob3RIZWxwZXIuanMiLCJ2YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZShcImV2ZW50c1wiKTtcclxubW9kdWxlLmV4cG9ydHMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9ob3QvZW1pdHRlci5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbkV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgaWYgKCFpc051bWJlcihuKSB8fCBuIDwgMCB8fCBpc05hTihuKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGVyLCBoYW5kbGVyLCBsZW4sIGFyZ3MsIGksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMuZXJyb3IgfHxcbiAgICAgICAgKGlzT2JqZWN0KHRoaXMuX2V2ZW50cy5lcnJvcikgJiYgIXRoaXMuX2V2ZW50cy5lcnJvci5sZW5ndGgpKSB7XG4gICAgICBlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LiAoJyArIGVyICsgJyknKTtcbiAgICAgICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzVW5kZWZpbmVkKGhhbmRsZXIpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy8gZmFzdCBjYXNlc1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2xvd2VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICBpZiAodGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKVxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICBlbHNlIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2VcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG5cbiAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX21heExpc3RlbmVycykpIHtcbiAgICAgIG0gPSB0aGlzLl9tYXhMaXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICB9XG5cbiAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIGluIElFIDEwXG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIGZpcmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuXG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBnLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHRoaXMub24odHlwZSwgZyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0LCBwb3NpdGlvbiwgbGVuZ3RoLCBpO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICBwb3NpdGlvbiA9IC0xO1xuXG4gIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fFxuICAgICAgKGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikgJiYgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIga2V5LCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICBpZiAoIXRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgZWxzZSBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAoa2V5IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICB9IGVsc2UgaWYgKGxpc3RlbmVycykge1xuICAgIC8vIExJRk8gb3JkZXJcbiAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gIGVsc2VcbiAgICByZXQgPSB0aGlzLl9ldmVudHNbdHlwZV0uc2xpY2UoKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgaWYgKHRoaXMuX2V2ZW50cykge1xuICAgIHZhciBldmxpc3RlbmVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKGlzRnVuY3Rpb24oZXZsaXN0ZW5lcikpXG4gICAgICByZXR1cm4gMTtcbiAgICBlbHNlIGlmIChldmxpc3RlbmVyKVxuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG59O1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuXHRjb25zdCBGb3JtU2VsZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXF1ZXN0aW5mbyBzZWxlY3QnKVxuXHRmb3IgKHZhciBzZWxlY3Qgb2YgRm9ybVNlbGVjdHMpIHtcblx0XHRzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKVxuXHR9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL2hlbHBlcnMvdXRpbGl0aWVzLmpzIiwiJChcIi5qc19fbWVudS10cmlnZ2VyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdCQoXCIubmF2LXdyYXBwZXJcIikudG9nZ2xlQ2xhc3MoXCJ2aXNpYmxlXCIpO1xufSk7XG5cbi8vIE1PQklMRSBNRU5VIFNVQk1FTlUgRklYXG4oZnVuY3Rpb24oKSB7XG5cdC8vIEhFTFBFUlNcblx0ZnVuY3Rpb24gaW5zZXJ0U3VibWVudVRvZ2dsZUJ1dHRvbnMoc3VibWVudUxpbmtzLCBzdWJtZW51QnV0dG9uc0hUTUwpIHtcblx0XHRzdWJtZW51TGlua3MuYWZ0ZXIoc3VibWVudUJ1dHRvbnNIVE1MKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHRvZ2dsZVN1Ym1lbnVTdGF0ZShDdXJyZW50U3VibWVudSkge1xuXHRcdGlmIChDdXJyZW50U3VibWVudS5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xuXHRcdFx0Q3VycmVudFN1Ym1lbnUucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdEN1cnJlbnRTdWJtZW51LmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZUFjdGl2ZVN1Ym1lbnUoUmVsZXZhbnRTdWJtZW51cykge1xuXHRcdHZhciBhY3RpdmVTdWJtZW51ID0gUmVsZXZhbnRTdWJtZW51cy5maWx0ZXIoXCIuYWN0aXZlXCIpO1xuXHRcdHZhciBhY3RpdmVTdWJtZW51QnV0dG9uID0gYWN0aXZlU3VibWVudS5wcmV2KFwiYnV0dG9uLmFjdGl2ZVwiKTtcblxuXHRcdGFjdGl2ZVN1Ym1lbnVCdXR0b24ucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG5cdFx0YWN0aXZlU3VibWVudS5zbGlkZVVwKDM1MCwgXCJzd2luZ1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdGFjdGl2ZVN1Ym1lbnUucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBFTkQgT0YgSEVMUEVSU1xuXHR2YXIgTWFpbk1lbnUgPSAkKFwiLmhlYWRlcl9fbmF2ID4gLm5hdlwiKSxcblx0XHRNZW51SXRlbXNXaXRoQ2hpbGRyZW4gPSBNYWluTWVudS5maW5kKFwiLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIiksXG5cdFx0TGlua3NGb3JTdWJtZW51cyA9IE1lbnVJdGVtc1dpdGhDaGlsZHJlbi5maW5kKFwiPiBhXCIpLFxuXHRcdEJ1dHRvbkhUTUwgPVxuXHRcdCc8YnV0dG9uIGNsYXNzPVwic3ViLW1lbnVfX3RvZ2dsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxpbWcgc3JjPVwiL3dwLWNvbnRlbnQvdGhlbWVzL3N0YXJ0ZXItdGhlbWUvcHVibGljL2ltYWdlcy9pY29ucy9kcm9wZG93bi5zdmdcIiBhbHQ9XCJUb2dnbGUgU3ViIE1lbnVcIj48L2J1dHRvbj4nLFxuXHRcdFN1Ym1lbnVzID0gTWVudUl0ZW1zV2l0aENoaWxkcmVuLmNoaWxkcmVuKFwiLnN1Yi1tZW51XCIpLFxuXHRcdENoaWxkcmVuU3VibWVudXMgPSBTdWJtZW51cy5maW5kKFwiLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gLnN1Yi1tZW51XCIpLFxuXHRcdFN1Ym1lbnVCdXR0b25zLFxuXHRcdENoaWxkcmVuU3VibWVudUJ1dHRvbnMsXG5cdFx0d2luZG93V2lkdGg7XG5cblx0ZnVuY3Rpb24gU2V0dXAoKSB7XG5cdFx0Q2hpbGRyZW5TdWJtZW51cy5hZGRDbGFzcyhcImNoaWxkcmVuU3VibWVudXNcIik7XG5cdFx0TGlua3NGb3JTdWJtZW51cyA9IE1lbnVJdGVtc1dpdGhDaGlsZHJlbi5maW5kKFwiPiBhXCIpO1xuXHRcdGluc2VydFN1Ym1lbnVUb2dnbGVCdXR0b25zKExpbmtzRm9yU3VibWVudXMsIEJ1dHRvbkhUTUwpO1xuXHRcdFN1Ym1lbnVCdXR0b25zID0gJChcIi5zdWItbWVudV9fdG9nZ2xlXCIpO1xuXHRcdENoaWxkcmVuU3VibWVudUJ1dHRvbnMgPSBTdWJtZW51cy5maW5kKFwiLnN1Yi1tZW51X190b2dnbGVcIik7XG5cdH1cblxuXHRmdW5jdGlvbiB0b2dnbGVTdWJtZW51KFN1Ym1lbnUpIHtcblx0XHRTdWJtZW51LnNsaWRlVG9nZ2xlKDM1MCwgXCJzd2luZ1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHRvZ2dsZVN1Ym1lbnVTdGF0ZShTdWJtZW51KTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNldFdpbmRvd1dpZHRoKCkge1xuXHRcdHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cdH1cblxuXHRmdW5jdGlvbiB3aW5kb3dXYXRjaGVyKCkge1xuXHRcdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG5cdFx0XHRzZXRXaW5kb3dXaWR0aCgpO1xuXHRcdFx0aWYgKHdpbmRvd1dpZHRoID4gMTAzOSAmJiBTdWJtZW51cy5pcyhcIjpoaWRkZW5cIikpIHtcblx0XHRcdFx0U3VibWVudXMucmVtb3ZlQXR0cihcInN0eWxlXCIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0c2V0V2luZG93V2lkdGgoKTtcblx0U2V0dXAoKTtcblx0d2luZG93V2F0Y2hlcigpO1xuXG5cdExpbmtzRm9yU3VibWVudXMub24oXCJmb2N1c1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3QWN0aXZlU3VibWVudSA9ICQodGhpcylcblx0XHRcdC5wYXJlbnRzKFwibGlcIilcblx0XHRcdC5maW5kKFwiLnN1Yi1tZW51XCIpO1xuXHRcdG5ld0FjdGl2ZVN1Ym1lbnUuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cblx0XHRuZXdBY3RpdmVTdWJtZW51XG5cdFx0XHQuZmluZChcImFcIilcblx0XHRcdC5sYXN0KClcblx0XHRcdC5vbihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5rZXlDb2RlID09IDkpIHtcblx0XHRcdFx0XHRuZXdBY3RpdmVTdWJtZW51LnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fSk7XG5cblx0TGlua3NGb3JTdWJtZW51cy5vbihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xuXHRcdGlmIChlLmtleUNvZGUgPT0gOSAmJiBlLnNoaWZ0S2V5ID09IHRydWUpIHtcblx0XHRcdCQoXCIuc3ViLW1lbnUuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXHRcdH1cblx0fSk7XG5cblx0U3VibWVudUJ1dHRvbnMub24oXCJjbGlja1wiLCBmdW5jdGlvbihjbGlja0V2ZW50KSB7XG5cdFx0Y2xpY2tFdmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuXG5cdFx0dmFyIEN1cnJlbnRTdWJtZW51ID0gJCh0aGlzKS5uZXh0KFwiLnN1Yi1tZW51XCIpO1xuXHRcdHZhciBoYXNPcGVuU3VibWVudSA9IFN1Ym1lbnVzLmZpbHRlcihcIi5hY3RpdmVcIikubGVuZ3RoID49IDEgPyB0cnVlIDogZmFsc2U7XG5cdFx0dmFyIG9wZW5pbmdOZXdTdWJtZW51ID0gQ3VycmVudFN1Ym1lbnUuaGFzQ2xhc3MoXCJhY3RpdmVcIikgPyBmYWxzZSA6IHRydWU7XG5cdFx0dmFyIGlzQ2hpbGRTdWJtZW51ID0gJCh0aGlzKS5wYXJlbnRzKFwiLmFjdGl2ZVwiKS5sZW5ndGggPiAxO1xuXHRcdHZhciBoYXNPcGVuQ2hpbGRTdWJtZW51ID1cblx0XHRcdENoaWxkcmVuU3VibWVudXMuZmlsdGVyKFwiLmFjdGl2ZVwiKS5sZW5ndGggPj0gMSA/IHRydWUgOiBmYWxzZTtcblxuXHRcdGlmIChpc0NoaWxkU3VibWVudSkge1xuXHRcdFx0aWYgKGhhc09wZW5DaGlsZFN1Ym1lbnUgJiYgb3BlbmluZ05ld1N1Ym1lbnUpIHtcblx0XHRcdFx0aGFuZGxlQWN0aXZlU3VibWVudShDaGlsZHJlblN1Ym1lbnVzKTtcblx0XHRcdH1cblx0XHRcdHRvZ2dsZVN1Ym1lbnUoQ3VycmVudFN1Ym1lbnUpO1xuXHRcdH1cblxuXHRcdGlmIChoYXNPcGVuU3VibWVudSAmJiBvcGVuaW5nTmV3U3VibWVudSAmJiAhaXNDaGlsZFN1Ym1lbnUpIHtcblx0XHRcdGhhbmRsZUFjdGl2ZVN1Ym1lbnUoU3VibWVudXMpO1xuXHRcdH1cblxuXHRcdGlmICghaXNDaGlsZFN1Ym1lbnUpIHtcblx0XHRcdHRvZ2dsZVN1Ym1lbnUoQ3VycmVudFN1Ym1lbnUpO1xuXHRcdH1cblx0fSk7XG59KSgpO1xuXG4vLyBPbiByZXNpemUgb2Ygd2luZG93IHJlbW92ZSBhY3RpdmUgY2xhc3MgZnJvbSBoZWFkZXIgc3ViIG1lbnVzXG4kKHdpbmRvdykub24oXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XG5cdHZhciB3aW4gPSAkKHRoaXMpOyAvL3RoaXMgPSB3aW5kb3dcblx0aWYgKHdpbi53aWR0aCgpID49IDc2OCkge1xuXHRcdCQoXCIuc3ViLW1lbnVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG5cdH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9tYWluLW5hdmlnYXRpb24uanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Y29uc3QgVmxoQXBwRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmxoLWFwcCcpO1xuXG5cdGlmIChWbGhBcHBFbCkge1xuXHRcdHZhciB2bGhBcHAgPSBuZXcgVnVlKHtcblx0XHRcdGVsOiBWbGhBcHBFbCxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0bXNnOiAnQSBNZXNzYWdlIEZyb20gVnVlIScsXG5cdFx0XHRcdHNob3dNb2RhbDogZmFsc2Vcblx0XHRcdH1cblx0XHR9KVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9WbGhMaWJyYXJ5L2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvY3JpdGljYWwtaG9tZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9sYXVuY2gtbHAtc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvbHAtY3JpdGljYWwuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvbHAtc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sInNvdXJjZVJvb3QiOiIifQ==