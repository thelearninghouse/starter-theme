webpackJsonp([2],{

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_themeConfig__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_themeConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_themeConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stickybits__ = __webpack_require__(36);



var stickyOptions = {
	stickyBitStickyOffset: 0
};

Object(__WEBPACK_IMPORTED_MODULE_1_stickybits__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0_themeConfig___default.a.selectors.sticky, stickyOptions);

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
  stickybits - Stickybits is a lightweight alternative to `position: sticky` polyfills
  @version v3.2.3
  @link https://github.com/dollarshaveclub/stickybits#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
/*
  STICKYBITS 💉
  --------
  > a lightweight alternative to `position: sticky` polyfills 🍬
  --------
  - each method is documented above it our view the readme
  - Stickybits does not manage polymorphic functionality (position like properties)
  * polymorphic functionality: (in the context of describing Stickybits)
    means making things like `position: sticky` be loosely supported with position fixed.
    It also means that features like `useStickyClasses` takes on styles like `position: fixed`.
  --------
  defaults 🔌
  --------
  - version = `package.json` version
  - userAgent = viewer browser agent
  - target = DOM element selector
  - noStyles = boolean
  - offset = number
  - parentClass = 'string'
  - scrollEl = window || DOM element selector
  - stickyClass = 'string'
  - stuckClass = 'string'
  - useStickyClasses = boolean
  - verticalPosition = 'string'
  --------
  props🔌
  --------
  - p = props {object}
  --------
  instance note
  --------
  - stickybits parent methods return this
  - stickybits instance methods return an instance item
  --------
  nomenclature
  --------
  - target => el => e
  - props => o || p
  - instance => item => it
  --------
  methods
  --------
  - .definePosition = defines sticky or fixed
  - .addInstance = an array of objects for each Stickybits Target
  - .getClosestParent = gets the parent for non-window scroll
  - .computeScrollOffsets = computes scroll position
  - .toggleClasses = older browser toggler
  - .manageState = manages sticky state
  - .removeClass = older browser support class remover
  - .removeInstance = removes an instance
  - .cleanup = removes all Stickybits instances and cleans up dom from stickybits
*/
function Stickybits(target, obj) {
  var o = typeof obj !== 'undefined' ? obj : {};
  this.version = '3.2.3';
  this.userAgent = window.navigator.userAgent || 'no `userAgent` provided by the browser';
  this.props = {
    customStickyChangeNumber: o.customStickyChangeNumber || null,
    noStyles: o.noStyles || false,
    stickyBitStickyOffset: o.stickyBitStickyOffset || 0,
    parentClass: o.parentClass || 'js-stickybit-parent',
    scrollEl: document.querySelector(o.scrollEl) || window,
    stickyClass: o.stickyClass || 'js-is-sticky',
    stuckClass: o.stuckClass || 'js-is-stuck',
    stickyChangeClass: o.stickyChangeClass || 'js-is-sticky--change',
    useStickyClasses: o.useStickyClasses || false,
    verticalPosition: o.verticalPosition || 'top'
  };
  var p = this.props;
  /*
    define positionVal
    ----
    -  uses a computed (`.definePosition()`)
    -  defined the position
  */

  p.positionVal = this.definePosition() || 'fixed';
  var vp = p.verticalPosition;
  var ns = p.noStyles;
  var pv = p.positionVal;
  this.els = typeof target === 'string' ? document.querySelectorAll(target) : target;
  if (!('length' in this.els)) this.els = [this.els];
  this.instances = [];

  for (var i = 0; i < this.els.length; i += 1) {
    var el = this.els[i];
    var styles = el.style; // set vertical position

    styles[vp] = vp === 'top' && !ns ? p.stickyBitStickyOffset + "px" : '';
    styles.position = pv !== 'fixed' ? pv : '';

    if (pv === 'fixed' || p.useStickyClasses) {
      var instance = this.addInstance(el, p); // instances are an array of objects

      this.instances.push(instance);
    }
  }

  return this;
}
/*
  setStickyPosition ✔️
  --------
  —  most basic thing stickybits does
  => checks to see if position sticky is supported
  => defined the position to be used
  => stickybits works accordingly
*/


Stickybits.prototype.definePosition = function () {
  var prefix = ['', '-o-', '-webkit-', '-moz-', '-ms-'];
  var test = document.head.style;

  for (var i = 0; i < prefix.length; i += 1) {
    test.position = prefix[i] + "sticky";
  }

  var stickyProp = test.position ? test.position : 'fixed';
  test.position = '';
  return stickyProp;
};
/*
  addInstance ✔️
  --------
  — manages instances of items
  - takes in an el and props
  - returns an item object
  ---
  - target = el
  - o = {object} = props
    - scrollEl = 'string'
    - verticalPosition = number
    - off = boolean
    - parentClass = 'string'
    - stickyClass = 'string'
    - stuckClass = 'string'
  ---
  - defined later
    - parent = dom element
    - state = 'string'
    - offset = number
    - stickyStart = number
    - stickyStop = number
  - returns an instance object
*/


Stickybits.prototype.addInstance = function addInstance(el, props) {
  var _this = this;

  var item = {
    el: el,
    parent: el.parentNode,
    props: props
  };
  this.isWin = this.props.scrollEl === window;
  var se = this.isWin ? window : this.getClosestParent(item.el, item.props.scrollEl);
  this.computeScrollOffsets(item);
  item.parent.className += " " + props.parentClass;
  item.state = 'default';

  item.stateContainer = function () {
    return _this.manageState(item);
  };

  se.addEventListener('scroll', item.stateContainer);
  return item;
};
/*
  --------
  getParent 👨‍
  --------
  - a helper function that gets the target element's parent selected el
  - only used for non `window` scroll elements
  - supports older browsers
*/


Stickybits.prototype.getClosestParent = function (el, match) {
  // p = parent element
  var p = match;
  var e = el;
  if (e.parentElement === p) return p; // traverse up the dom tree until we get to the parent

  while (e.parentElement !== p) {
    e = e.parentElement;
  } // return parent element


  return p;
};
/*
  computeScrollOffsets 📊
  ---
  computeScrollOffsets for Stickybits
  - defines
    - offset
    - start
    - stop
*/


Stickybits.prototype.computeScrollOffsets = function computeScrollOffsets(item) {
  var it = item;
  var p = it.props;
  var el = it.el;
  var parent = it.parent;
  var isCustom = !this.isWin && p.positionVal === 'fixed';
  var isBottom = p.verticalPosition !== 'bottom';
  var scrollElOffset = isCustom ? p.scrollEl.getBoundingClientRect().top : 0;
  var stickyStart = isCustom ? parent.getBoundingClientRect().top - scrollElOffset : parent.getBoundingClientRect().top;
  var stickyChangeOffset = p.customStickyChangeNumber !== null ? p.customStickyChangeNumber : el.offsetHeight;
  it.offset = scrollElOffset + p.stickyBitStickyOffset;
  it.stickyStart = isBottom ? stickyStart - it.offset : 0;
  it.stickyChange = it.stickyStart + stickyChangeOffset;
  it.stickyStop = isBottom ? stickyStart + parent.offsetHeight - (it.el.offsetHeight + it.offset) : stickyStart + parent.offsetHeight;
  return it;
};
/*
  toggleClasses ⚖️
  ---
  toggles classes (for older browser support)
  r = removed class
  a = added class
*/


Stickybits.prototype.toggleClasses = function (el, r, a) {
  var e = el;
  var cArray = e.className.split(' ');
  if (a && cArray.indexOf(a) === -1) cArray.push(a);
  var rItem = cArray.indexOf(r);
  if (rItem !== -1) cArray.splice(rItem, 1);
  e.className = cArray.join(' ');
};
/*
  manageState 📝
  ---
  - defines the state
    - normal
    - sticky
    - stuck
*/


Stickybits.prototype.manageState = function manageState(item) {
  // cache object
  var it = item;
  var e = it.el;
  var p = it.props;
  var state = it.state;
  var start = it.stickyStart;
  var change = it.stickyChange;
  var stop = it.stickyStop;
  var stl = e.style; // cache props

  var ns = p.noStyles;
  var pv = p.positionVal;
  var se = p.scrollEl;
  var sticky = p.stickyClass;
  var stickyChange = p.stickyChangeClass;
  var stuck = p.stuckClass;
  var vp = p.verticalPosition;
  /*
    requestAnimationFrame
    ---
    - use rAF
    - or stub rAF
  */

  var rAFStub = function rAFDummy(f) {
    f();
  };

  var rAF = !this.isWin ? rAFStub : window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || rAFStub;
  /*
    define scroll vars
    ---
    - scroll
    - notSticky
    - isSticky
    - isStuck
  */

  var tC = this.toggleClasses;
  var scroll = this.isWin ? window.scrollY || window.pageYOffset : se.scrollTop;
  var notSticky = scroll > start && scroll < stop && (state === 'default' || state === 'stuck');
  var isSticky = scroll <= start && state === 'sticky';
  var isStuck = scroll >= stop && state === 'sticky';
  /*
    Unnamed arrow functions within this block
    ---
    - help wanted or discussion
    - view test.stickybits.js
      - `stickybits .manageState  `position: fixed` interface` for more awareness 👀
  */

  if (notSticky) {
    it.state = 'sticky';
    rAF(function () {
      tC(e, stuck, sticky);
      stl.position = pv;
      if (ns) return;
      stl.bottom = '';
      stl[vp] = p.stickyBitStickyOffset + "px";
    });
  } else if (isSticky) {
    it.state = 'default';
    rAF(function () {
      tC(e, sticky);
      if (pv === 'fixed') stl.position = '';
    });
  } else if (isStuck) {
    it.state = 'stuck';
    rAF(function () {
      tC(e, sticky, stuck);
      if (pv !== 'fixed' || ns) return;
      stl.top = '';
      stl.bottom = '0';
      stl.position = 'absolute';
    });
  }

  var isStickyChange = scroll >= change && scroll <= stop;
  var isNotStickyChange = scroll < change || scroll > stop;
  var stub = 'stub'; // a stub css class to remove

  if (isNotStickyChange) {
    rAF(function () {
      tC(e, stickyChange);
    });
  } else if (isStickyChange) {
    rAF(function () {
      tC(e, stub, stickyChange);
    });
  }

  return it;
};
/*
  removes an instance 👋
  --------
  - cleanup instance
*/


Stickybits.prototype.removeInstance = function removeInstance(instance) {
  var e = instance.el;
  var p = instance.props;
  var tC = this.toggleClasses;
  e.style.position = '';
  e.style[p.verticalPosition] = '';
  tC(e, p.stickyClass);
  tC(e, p.stuckClass);
  tC(e.parentNode, p.parentClass);
};
/*
  cleanup 🛁
  --------
  - cleans up each instance
  - clears instance
*/


Stickybits.prototype.cleanup = function cleanup() {
  for (var i = 0; i < this.instances.length; i += 1) {
    var instance = this.instances[i];
    instance.props.scrollEl.removeEventListener('scroll', instance.stateContainer);
    this.removeInstance(instance);
  }

  this.manageState = false;
  this.instances = [];
};
/*
  export
  --------
  exports StickBits to be used 🏁
*/


function stickybits(target, o) {
  return new Stickybits(target, o);
}

/* harmony default export */ __webpack_exports__["a"] = (stickybits);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3N0aWNreS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3RpY2t5Yml0cy9kaXN0L3N0aWNreWJpdHMuZXMuanMiXSwibmFtZXMiOlsic3RpY2t5T3B0aW9ucyIsInN0aWNreUJpdFN0aWNreU9mZnNldCIsInN0aWNreSIsIkNvbmZpZyIsInNlbGVjdG9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCO0FBQ3JCQyx3QkFBdUI7QUFERixDQUF0Qjs7QUFJQSxtRUFBQUMsQ0FBTyxtREFBQUMsQ0FBT0MsU0FBUCxDQUFpQkYsTUFBeEIsRUFBZ0NGLGFBQWhDLEU7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxPQUFPO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJqcy9zdGlja3kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlnIGZyb20gXCJ0aGVtZUNvbmZpZ1wiO1xuaW1wb3J0IHN0aWNreSBmcm9tICdzdGlja3liaXRzJ1xuXG5jb25zdCBzdGlja3lPcHRpb25zID0ge1xuXHRzdGlja3lCaXRTdGlja3lPZmZzZXQ6IDBcbn1cblxuc3RpY2t5KENvbmZpZy5zZWxlY3RvcnMuc3RpY2t5LCBzdGlja3lPcHRpb25zKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9zdGlja3kuanMiLCIvKipcbiAgc3RpY2t5Yml0cyAtIFN0aWNreWJpdHMgaXMgYSBsaWdodHdlaWdodCBhbHRlcm5hdGl2ZSB0byBgcG9zaXRpb246IHN0aWNreWAgcG9seWZpbGxzXG4gIEB2ZXJzaW9uIHYzLjIuM1xuICBAbGluayBodHRwczovL2dpdGh1Yi5jb20vZG9sbGFyc2hhdmVjbHViL3N0aWNreWJpdHMjcmVhZG1lXG4gIEBhdXRob3IgSmVmZiBXYWlud3JpZ2h0IDx5b3dhaW53cmlnaHRAZ21haWwuY29tPiAoaHR0cHM6Ly9qZWZmcnkuaW4pXG4gIEBsaWNlbnNlIE1JVFxuKiovXG4vKlxuICBTVElDS1lCSVRTIPCfkolcbiAgLS0tLS0tLS1cbiAgPiBhIGxpZ2h0d2VpZ2h0IGFsdGVybmF0aXZlIHRvIGBwb3NpdGlvbjogc3RpY2t5YCBwb2x5ZmlsbHMg8J+NrFxuICAtLS0tLS0tLVxuICAtIGVhY2ggbWV0aG9kIGlzIGRvY3VtZW50ZWQgYWJvdmUgaXQgb3VyIHZpZXcgdGhlIHJlYWRtZVxuICAtIFN0aWNreWJpdHMgZG9lcyBub3QgbWFuYWdlIHBvbHltb3JwaGljIGZ1bmN0aW9uYWxpdHkgKHBvc2l0aW9uIGxpa2UgcHJvcGVydGllcylcbiAgKiBwb2x5bW9ycGhpYyBmdW5jdGlvbmFsaXR5OiAoaW4gdGhlIGNvbnRleHQgb2YgZGVzY3JpYmluZyBTdGlja3liaXRzKVxuICAgIG1lYW5zIG1ha2luZyB0aGluZ3MgbGlrZSBgcG9zaXRpb246IHN0aWNreWAgYmUgbG9vc2VseSBzdXBwb3J0ZWQgd2l0aCBwb3NpdGlvbiBmaXhlZC5cbiAgICBJdCBhbHNvIG1lYW5zIHRoYXQgZmVhdHVyZXMgbGlrZSBgdXNlU3RpY2t5Q2xhc3Nlc2AgdGFrZXMgb24gc3R5bGVzIGxpa2UgYHBvc2l0aW9uOiBmaXhlZGAuXG4gIC0tLS0tLS0tXG4gIGRlZmF1bHRzIPCflIxcbiAgLS0tLS0tLS1cbiAgLSB2ZXJzaW9uID0gYHBhY2thZ2UuanNvbmAgdmVyc2lvblxuICAtIHVzZXJBZ2VudCA9IHZpZXdlciBicm93c2VyIGFnZW50XG4gIC0gdGFyZ2V0ID0gRE9NIGVsZW1lbnQgc2VsZWN0b3JcbiAgLSBub1N0eWxlcyA9IGJvb2xlYW5cbiAgLSBvZmZzZXQgPSBudW1iZXJcbiAgLSBwYXJlbnRDbGFzcyA9ICdzdHJpbmcnXG4gIC0gc2Nyb2xsRWwgPSB3aW5kb3cgfHwgRE9NIGVsZW1lbnQgc2VsZWN0b3JcbiAgLSBzdGlja3lDbGFzcyA9ICdzdHJpbmcnXG4gIC0gc3R1Y2tDbGFzcyA9ICdzdHJpbmcnXG4gIC0gdXNlU3RpY2t5Q2xhc3NlcyA9IGJvb2xlYW5cbiAgLSB2ZXJ0aWNhbFBvc2l0aW9uID0gJ3N0cmluZydcbiAgLS0tLS0tLS1cbiAgcHJvcHPwn5SMXG4gIC0tLS0tLS0tXG4gIC0gcCA9IHByb3BzIHtvYmplY3R9XG4gIC0tLS0tLS0tXG4gIGluc3RhbmNlIG5vdGVcbiAgLS0tLS0tLS1cbiAgLSBzdGlja3liaXRzIHBhcmVudCBtZXRob2RzIHJldHVybiB0aGlzXG4gIC0gc3RpY2t5Yml0cyBpbnN0YW5jZSBtZXRob2RzIHJldHVybiBhbiBpbnN0YW5jZSBpdGVtXG4gIC0tLS0tLS0tXG4gIG5vbWVuY2xhdHVyZVxuICAtLS0tLS0tLVxuICAtIHRhcmdldCA9PiBlbCA9PiBlXG4gIC0gcHJvcHMgPT4gbyB8fCBwXG4gIC0gaW5zdGFuY2UgPT4gaXRlbSA9PiBpdFxuICAtLS0tLS0tLVxuICBtZXRob2RzXG4gIC0tLS0tLS0tXG4gIC0gLmRlZmluZVBvc2l0aW9uID0gZGVmaW5lcyBzdGlja3kgb3IgZml4ZWRcbiAgLSAuYWRkSW5zdGFuY2UgPSBhbiBhcnJheSBvZiBvYmplY3RzIGZvciBlYWNoIFN0aWNreWJpdHMgVGFyZ2V0XG4gIC0gLmdldENsb3Nlc3RQYXJlbnQgPSBnZXRzIHRoZSBwYXJlbnQgZm9yIG5vbi13aW5kb3cgc2Nyb2xsXG4gIC0gLmNvbXB1dGVTY3JvbGxPZmZzZXRzID0gY29tcHV0ZXMgc2Nyb2xsIHBvc2l0aW9uXG4gIC0gLnRvZ2dsZUNsYXNzZXMgPSBvbGRlciBicm93c2VyIHRvZ2dsZXJcbiAgLSAubWFuYWdlU3RhdGUgPSBtYW5hZ2VzIHN0aWNreSBzdGF0ZVxuICAtIC5yZW1vdmVDbGFzcyA9IG9sZGVyIGJyb3dzZXIgc3VwcG9ydCBjbGFzcyByZW1vdmVyXG4gIC0gLnJlbW92ZUluc3RhbmNlID0gcmVtb3ZlcyBhbiBpbnN0YW5jZVxuICAtIC5jbGVhbnVwID0gcmVtb3ZlcyBhbGwgU3RpY2t5Yml0cyBpbnN0YW5jZXMgYW5kIGNsZWFucyB1cCBkb20gZnJvbSBzdGlja3liaXRzXG4qL1xuZnVuY3Rpb24gU3RpY2t5Yml0cyh0YXJnZXQsIG9iaikge1xuICB2YXIgbyA9IHR5cGVvZiBvYmogIT09ICd1bmRlZmluZWQnID8gb2JqIDoge307XG4gIHRoaXMudmVyc2lvbiA9ICczLjIuMyc7XG4gIHRoaXMudXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgJ25vIGB1c2VyQWdlbnRgIHByb3ZpZGVkIGJ5IHRoZSBicm93c2VyJztcbiAgdGhpcy5wcm9wcyA9IHtcbiAgICBjdXN0b21TdGlja3lDaGFuZ2VOdW1iZXI6IG8uY3VzdG9tU3RpY2t5Q2hhbmdlTnVtYmVyIHx8IG51bGwsXG4gICAgbm9TdHlsZXM6IG8ubm9TdHlsZXMgfHwgZmFsc2UsXG4gICAgc3RpY2t5Qml0U3RpY2t5T2Zmc2V0OiBvLnN0aWNreUJpdFN0aWNreU9mZnNldCB8fCAwLFxuICAgIHBhcmVudENsYXNzOiBvLnBhcmVudENsYXNzIHx8ICdqcy1zdGlja3liaXQtcGFyZW50JyxcbiAgICBzY3JvbGxFbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvLnNjcm9sbEVsKSB8fCB3aW5kb3csXG4gICAgc3RpY2t5Q2xhc3M6IG8uc3RpY2t5Q2xhc3MgfHwgJ2pzLWlzLXN0aWNreScsXG4gICAgc3R1Y2tDbGFzczogby5zdHVja0NsYXNzIHx8ICdqcy1pcy1zdHVjaycsXG4gICAgc3RpY2t5Q2hhbmdlQ2xhc3M6IG8uc3RpY2t5Q2hhbmdlQ2xhc3MgfHwgJ2pzLWlzLXN0aWNreS0tY2hhbmdlJyxcbiAgICB1c2VTdGlja3lDbGFzc2VzOiBvLnVzZVN0aWNreUNsYXNzZXMgfHwgZmFsc2UsXG4gICAgdmVydGljYWxQb3NpdGlvbjogby52ZXJ0aWNhbFBvc2l0aW9uIHx8ICd0b3AnXG4gIH07XG4gIHZhciBwID0gdGhpcy5wcm9wcztcbiAgLypcbiAgICBkZWZpbmUgcG9zaXRpb25WYWxcbiAgICAtLS0tXG4gICAgLSAgdXNlcyBhIGNvbXB1dGVkIChgLmRlZmluZVBvc2l0aW9uKClgKVxuICAgIC0gIGRlZmluZWQgdGhlIHBvc2l0aW9uXG4gICovXG5cbiAgcC5wb3NpdGlvblZhbCA9IHRoaXMuZGVmaW5lUG9zaXRpb24oKSB8fCAnZml4ZWQnO1xuICB2YXIgdnAgPSBwLnZlcnRpY2FsUG9zaXRpb247XG4gIHZhciBucyA9IHAubm9TdHlsZXM7XG4gIHZhciBwdiA9IHAucG9zaXRpb25WYWw7XG4gIHRoaXMuZWxzID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldCkgOiB0YXJnZXQ7XG4gIGlmICghKCdsZW5ndGgnIGluIHRoaXMuZWxzKSkgdGhpcy5lbHMgPSBbdGhpcy5lbHNdO1xuICB0aGlzLmluc3RhbmNlcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5lbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgZWwgPSB0aGlzLmVsc1tpXTtcbiAgICB2YXIgc3R5bGVzID0gZWwuc3R5bGU7IC8vIHNldCB2ZXJ0aWNhbCBwb3NpdGlvblxuXG4gICAgc3R5bGVzW3ZwXSA9IHZwID09PSAndG9wJyAmJiAhbnMgPyBwLnN0aWNreUJpdFN0aWNreU9mZnNldCArIFwicHhcIiA6ICcnO1xuICAgIHN0eWxlcy5wb3NpdGlvbiA9IHB2ICE9PSAnZml4ZWQnID8gcHYgOiAnJztcblxuICAgIGlmIChwdiA9PT0gJ2ZpeGVkJyB8fCBwLnVzZVN0aWNreUNsYXNzZXMpIHtcbiAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuYWRkSW5zdGFuY2UoZWwsIHApOyAvLyBpbnN0YW5jZXMgYXJlIGFuIGFycmF5IG9mIG9iamVjdHNcblxuICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG4vKlxuICBzZXRTdGlja3lQb3NpdGlvbiDinJTvuI9cbiAgLS0tLS0tLS1cbiAg4oCUICBtb3N0IGJhc2ljIHRoaW5nIHN0aWNreWJpdHMgZG9lc1xuICA9PiBjaGVja3MgdG8gc2VlIGlmIHBvc2l0aW9uIHN0aWNreSBpcyBzdXBwb3J0ZWRcbiAgPT4gZGVmaW5lZCB0aGUgcG9zaXRpb24gdG8gYmUgdXNlZFxuICA9PiBzdGlja3liaXRzIHdvcmtzIGFjY29yZGluZ2x5XG4qL1xuXG5cblN0aWNreWJpdHMucHJvdG90eXBlLmRlZmluZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcHJlZml4ID0gWycnLCAnLW8tJywgJy13ZWJraXQtJywgJy1tb3otJywgJy1tcy0nXTtcbiAgdmFyIHRlc3QgPSBkb2N1bWVudC5oZWFkLnN0eWxlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGVzdC5wb3NpdGlvbiA9IHByZWZpeFtpXSArIFwic3RpY2t5XCI7XG4gIH1cblxuICB2YXIgc3RpY2t5UHJvcCA9IHRlc3QucG9zaXRpb24gPyB0ZXN0LnBvc2l0aW9uIDogJ2ZpeGVkJztcbiAgdGVzdC5wb3NpdGlvbiA9ICcnO1xuICByZXR1cm4gc3RpY2t5UHJvcDtcbn07XG4vKlxuICBhZGRJbnN0YW5jZSDinJTvuI9cbiAgLS0tLS0tLS1cbiAg4oCUIG1hbmFnZXMgaW5zdGFuY2VzIG9mIGl0ZW1zXG4gIC0gdGFrZXMgaW4gYW4gZWwgYW5kIHByb3BzXG4gIC0gcmV0dXJucyBhbiBpdGVtIG9iamVjdFxuICAtLS1cbiAgLSB0YXJnZXQgPSBlbFxuICAtIG8gPSB7b2JqZWN0fSA9IHByb3BzXG4gICAgLSBzY3JvbGxFbCA9ICdzdHJpbmcnXG4gICAgLSB2ZXJ0aWNhbFBvc2l0aW9uID0gbnVtYmVyXG4gICAgLSBvZmYgPSBib29sZWFuXG4gICAgLSBwYXJlbnRDbGFzcyA9ICdzdHJpbmcnXG4gICAgLSBzdGlja3lDbGFzcyA9ICdzdHJpbmcnXG4gICAgLSBzdHVja0NsYXNzID0gJ3N0cmluZydcbiAgLS0tXG4gIC0gZGVmaW5lZCBsYXRlclxuICAgIC0gcGFyZW50ID0gZG9tIGVsZW1lbnRcbiAgICAtIHN0YXRlID0gJ3N0cmluZydcbiAgICAtIG9mZnNldCA9IG51bWJlclxuICAgIC0gc3RpY2t5U3RhcnQgPSBudW1iZXJcbiAgICAtIHN0aWNreVN0b3AgPSBudW1iZXJcbiAgLSByZXR1cm5zIGFuIGluc3RhbmNlIG9iamVjdFxuKi9cblxuXG5TdGlja3liaXRzLnByb3RvdHlwZS5hZGRJbnN0YW5jZSA9IGZ1bmN0aW9uIGFkZEluc3RhbmNlKGVsLCBwcm9wcykge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHZhciBpdGVtID0ge1xuICAgIGVsOiBlbCxcbiAgICBwYXJlbnQ6IGVsLnBhcmVudE5vZGUsXG4gICAgcHJvcHM6IHByb3BzXG4gIH07XG4gIHRoaXMuaXNXaW4gPSB0aGlzLnByb3BzLnNjcm9sbEVsID09PSB3aW5kb3c7XG4gIHZhciBzZSA9IHRoaXMuaXNXaW4gPyB3aW5kb3cgOiB0aGlzLmdldENsb3Nlc3RQYXJlbnQoaXRlbS5lbCwgaXRlbS5wcm9wcy5zY3JvbGxFbCk7XG4gIHRoaXMuY29tcHV0ZVNjcm9sbE9mZnNldHMoaXRlbSk7XG4gIGl0ZW0ucGFyZW50LmNsYXNzTmFtZSArPSBcIiBcIiArIHByb3BzLnBhcmVudENsYXNzO1xuICBpdGVtLnN0YXRlID0gJ2RlZmF1bHQnO1xuXG4gIGl0ZW0uc3RhdGVDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzLm1hbmFnZVN0YXRlKGl0ZW0pO1xuICB9O1xuXG4gIHNlLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGl0ZW0uc3RhdGVDb250YWluZXIpO1xuICByZXR1cm4gaXRlbTtcbn07XG4vKlxuICAtLS0tLS0tLVxuICBnZXRQYXJlbnQg8J+RqOKAjVxuICAtLS0tLS0tLVxuICAtIGEgaGVscGVyIGZ1bmN0aW9uIHRoYXQgZ2V0cyB0aGUgdGFyZ2V0IGVsZW1lbnQncyBwYXJlbnQgc2VsZWN0ZWQgZWxcbiAgLSBvbmx5IHVzZWQgZm9yIG5vbiBgd2luZG93YCBzY3JvbGwgZWxlbWVudHNcbiAgLSBzdXBwb3J0cyBvbGRlciBicm93c2Vyc1xuKi9cblxuXG5TdGlja3liaXRzLnByb3RvdHlwZS5nZXRDbG9zZXN0UGFyZW50ID0gZnVuY3Rpb24gKGVsLCBtYXRjaCkge1xuICAvLyBwID0gcGFyZW50IGVsZW1lbnRcbiAgdmFyIHAgPSBtYXRjaDtcbiAgdmFyIGUgPSBlbDtcbiAgaWYgKGUucGFyZW50RWxlbWVudCA9PT0gcCkgcmV0dXJuIHA7IC8vIHRyYXZlcnNlIHVwIHRoZSBkb20gdHJlZSB1bnRpbCB3ZSBnZXQgdG8gdGhlIHBhcmVudFxuXG4gIHdoaWxlIChlLnBhcmVudEVsZW1lbnQgIT09IHApIHtcbiAgICBlID0gZS5wYXJlbnRFbGVtZW50O1xuICB9IC8vIHJldHVybiBwYXJlbnQgZWxlbWVudFxuXG5cbiAgcmV0dXJuIHA7XG59O1xuLypcbiAgY29tcHV0ZVNjcm9sbE9mZnNldHMg8J+TilxuICAtLS1cbiAgY29tcHV0ZVNjcm9sbE9mZnNldHMgZm9yIFN0aWNreWJpdHNcbiAgLSBkZWZpbmVzXG4gICAgLSBvZmZzZXRcbiAgICAtIHN0YXJ0XG4gICAgLSBzdG9wXG4qL1xuXG5cblN0aWNreWJpdHMucHJvdG90eXBlLmNvbXB1dGVTY3JvbGxPZmZzZXRzID0gZnVuY3Rpb24gY29tcHV0ZVNjcm9sbE9mZnNldHMoaXRlbSkge1xuICB2YXIgaXQgPSBpdGVtO1xuICB2YXIgcCA9IGl0LnByb3BzO1xuICB2YXIgZWwgPSBpdC5lbDtcbiAgdmFyIHBhcmVudCA9IGl0LnBhcmVudDtcbiAgdmFyIGlzQ3VzdG9tID0gIXRoaXMuaXNXaW4gJiYgcC5wb3NpdGlvblZhbCA9PT0gJ2ZpeGVkJztcbiAgdmFyIGlzQm90dG9tID0gcC52ZXJ0aWNhbFBvc2l0aW9uICE9PSAnYm90dG9tJztcbiAgdmFyIHNjcm9sbEVsT2Zmc2V0ID0gaXNDdXN0b20gPyBwLnNjcm9sbEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA6IDA7XG4gIHZhciBzdGlja3lTdGFydCA9IGlzQ3VzdG9tID8gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHNjcm9sbEVsT2Zmc2V0IDogcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgdmFyIHN0aWNreUNoYW5nZU9mZnNldCA9IHAuY3VzdG9tU3RpY2t5Q2hhbmdlTnVtYmVyICE9PSBudWxsID8gcC5jdXN0b21TdGlja3lDaGFuZ2VOdW1iZXIgOiBlbC5vZmZzZXRIZWlnaHQ7XG4gIGl0Lm9mZnNldCA9IHNjcm9sbEVsT2Zmc2V0ICsgcC5zdGlja3lCaXRTdGlja3lPZmZzZXQ7XG4gIGl0LnN0aWNreVN0YXJ0ID0gaXNCb3R0b20gPyBzdGlja3lTdGFydCAtIGl0Lm9mZnNldCA6IDA7XG4gIGl0LnN0aWNreUNoYW5nZSA9IGl0LnN0aWNreVN0YXJ0ICsgc3RpY2t5Q2hhbmdlT2Zmc2V0O1xuICBpdC5zdGlja3lTdG9wID0gaXNCb3R0b20gPyBzdGlja3lTdGFydCArIHBhcmVudC5vZmZzZXRIZWlnaHQgLSAoaXQuZWwub2Zmc2V0SGVpZ2h0ICsgaXQub2Zmc2V0KSA6IHN0aWNreVN0YXJ0ICsgcGFyZW50Lm9mZnNldEhlaWdodDtcbiAgcmV0dXJuIGl0O1xufTtcbi8qXG4gIHRvZ2dsZUNsYXNzZXMg4pqW77iPXG4gIC0tLVxuICB0b2dnbGVzIGNsYXNzZXMgKGZvciBvbGRlciBicm93c2VyIHN1cHBvcnQpXG4gIHIgPSByZW1vdmVkIGNsYXNzXG4gIGEgPSBhZGRlZCBjbGFzc1xuKi9cblxuXG5TdGlja3liaXRzLnByb3RvdHlwZS50b2dnbGVDbGFzc2VzID0gZnVuY3Rpb24gKGVsLCByLCBhKSB7XG4gIHZhciBlID0gZWw7XG4gIHZhciBjQXJyYXkgPSBlLmNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICBpZiAoYSAmJiBjQXJyYXkuaW5kZXhPZihhKSA9PT0gLTEpIGNBcnJheS5wdXNoKGEpO1xuICB2YXIgckl0ZW0gPSBjQXJyYXkuaW5kZXhPZihyKTtcbiAgaWYgKHJJdGVtICE9PSAtMSkgY0FycmF5LnNwbGljZShySXRlbSwgMSk7XG4gIGUuY2xhc3NOYW1lID0gY0FycmF5LmpvaW4oJyAnKTtcbn07XG4vKlxuICBtYW5hZ2VTdGF0ZSDwn5OdXG4gIC0tLVxuICAtIGRlZmluZXMgdGhlIHN0YXRlXG4gICAgLSBub3JtYWxcbiAgICAtIHN0aWNreVxuICAgIC0gc3R1Y2tcbiovXG5cblxuU3RpY2t5Yml0cy5wcm90b3R5cGUubWFuYWdlU3RhdGUgPSBmdW5jdGlvbiBtYW5hZ2VTdGF0ZShpdGVtKSB7XG4gIC8vIGNhY2hlIG9iamVjdFxuICB2YXIgaXQgPSBpdGVtO1xuICB2YXIgZSA9IGl0LmVsO1xuICB2YXIgcCA9IGl0LnByb3BzO1xuICB2YXIgc3RhdGUgPSBpdC5zdGF0ZTtcbiAgdmFyIHN0YXJ0ID0gaXQuc3RpY2t5U3RhcnQ7XG4gIHZhciBjaGFuZ2UgPSBpdC5zdGlja3lDaGFuZ2U7XG4gIHZhciBzdG9wID0gaXQuc3RpY2t5U3RvcDtcbiAgdmFyIHN0bCA9IGUuc3R5bGU7IC8vIGNhY2hlIHByb3BzXG5cbiAgdmFyIG5zID0gcC5ub1N0eWxlcztcbiAgdmFyIHB2ID0gcC5wb3NpdGlvblZhbDtcbiAgdmFyIHNlID0gcC5zY3JvbGxFbDtcbiAgdmFyIHN0aWNreSA9IHAuc3RpY2t5Q2xhc3M7XG4gIHZhciBzdGlja3lDaGFuZ2UgPSBwLnN0aWNreUNoYW5nZUNsYXNzO1xuICB2YXIgc3R1Y2sgPSBwLnN0dWNrQ2xhc3M7XG4gIHZhciB2cCA9IHAudmVydGljYWxQb3NpdGlvbjtcbiAgLypcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAtLS1cbiAgICAtIHVzZSByQUZcbiAgICAtIG9yIHN0dWIgckFGXG4gICovXG5cbiAgdmFyIHJBRlN0dWIgPSBmdW5jdGlvbiByQUZEdW1teShmKSB7XG4gICAgZigpO1xuICB9O1xuXG4gIHZhciByQUYgPSAhdGhpcy5pc1dpbiA/IHJBRlN0dWIgOiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgckFGU3R1YjtcbiAgLypcbiAgICBkZWZpbmUgc2Nyb2xsIHZhcnNcbiAgICAtLS1cbiAgICAtIHNjcm9sbFxuICAgIC0gbm90U3RpY2t5XG4gICAgLSBpc1N0aWNreVxuICAgIC0gaXNTdHVja1xuICAqL1xuXG4gIHZhciB0QyA9IHRoaXMudG9nZ2xlQ2xhc3NlcztcbiAgdmFyIHNjcm9sbCA9IHRoaXMuaXNXaW4gPyB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQgOiBzZS5zY3JvbGxUb3A7XG4gIHZhciBub3RTdGlja3kgPSBzY3JvbGwgPiBzdGFydCAmJiBzY3JvbGwgPCBzdG9wICYmIChzdGF0ZSA9PT0gJ2RlZmF1bHQnIHx8IHN0YXRlID09PSAnc3R1Y2snKTtcbiAgdmFyIGlzU3RpY2t5ID0gc2Nyb2xsIDw9IHN0YXJ0ICYmIHN0YXRlID09PSAnc3RpY2t5JztcbiAgdmFyIGlzU3R1Y2sgPSBzY3JvbGwgPj0gc3RvcCAmJiBzdGF0ZSA9PT0gJ3N0aWNreSc7XG4gIC8qXG4gICAgVW5uYW1lZCBhcnJvdyBmdW5jdGlvbnMgd2l0aGluIHRoaXMgYmxvY2tcbiAgICAtLS1cbiAgICAtIGhlbHAgd2FudGVkIG9yIGRpc2N1c3Npb25cbiAgICAtIHZpZXcgdGVzdC5zdGlja3liaXRzLmpzXG4gICAgICAtIGBzdGlja3liaXRzIC5tYW5hZ2VTdGF0ZSAgYHBvc2l0aW9uOiBmaXhlZGAgaW50ZXJmYWNlYCBmb3IgbW9yZSBhd2FyZW5lc3Mg8J+RgFxuICAqL1xuXG4gIGlmIChub3RTdGlja3kpIHtcbiAgICBpdC5zdGF0ZSA9ICdzdGlja3knO1xuICAgIHJBRihmdW5jdGlvbiAoKSB7XG4gICAgICB0QyhlLCBzdHVjaywgc3RpY2t5KTtcbiAgICAgIHN0bC5wb3NpdGlvbiA9IHB2O1xuICAgICAgaWYgKG5zKSByZXR1cm47XG4gICAgICBzdGwuYm90dG9tID0gJyc7XG4gICAgICBzdGxbdnBdID0gcC5zdGlja3lCaXRTdGlja3lPZmZzZXQgKyBcInB4XCI7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoaXNTdGlja3kpIHtcbiAgICBpdC5zdGF0ZSA9ICdkZWZhdWx0JztcbiAgICByQUYoZnVuY3Rpb24gKCkge1xuICAgICAgdEMoZSwgc3RpY2t5KTtcbiAgICAgIGlmIChwdiA9PT0gJ2ZpeGVkJykgc3RsLnBvc2l0aW9uID0gJyc7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoaXNTdHVjaykge1xuICAgIGl0LnN0YXRlID0gJ3N0dWNrJztcbiAgICByQUYoZnVuY3Rpb24gKCkge1xuICAgICAgdEMoZSwgc3RpY2t5LCBzdHVjayk7XG4gICAgICBpZiAocHYgIT09ICdmaXhlZCcgfHwgbnMpIHJldHVybjtcbiAgICAgIHN0bC50b3AgPSAnJztcbiAgICAgIHN0bC5ib3R0b20gPSAnMCc7XG4gICAgICBzdGwucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGlzU3RpY2t5Q2hhbmdlID0gc2Nyb2xsID49IGNoYW5nZSAmJiBzY3JvbGwgPD0gc3RvcDtcbiAgdmFyIGlzTm90U3RpY2t5Q2hhbmdlID0gc2Nyb2xsIDwgY2hhbmdlIHx8IHNjcm9sbCA+IHN0b3A7XG4gIHZhciBzdHViID0gJ3N0dWInOyAvLyBhIHN0dWIgY3NzIGNsYXNzIHRvIHJlbW92ZVxuXG4gIGlmIChpc05vdFN0aWNreUNoYW5nZSkge1xuICAgIHJBRihmdW5jdGlvbiAoKSB7XG4gICAgICB0QyhlLCBzdGlja3lDaGFuZ2UpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGlzU3RpY2t5Q2hhbmdlKSB7XG4gICAgckFGKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRDKGUsIHN0dWIsIHN0aWNreUNoYW5nZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gaXQ7XG59O1xuLypcbiAgcmVtb3ZlcyBhbiBpbnN0YW5jZSDwn5GLXG4gIC0tLS0tLS0tXG4gIC0gY2xlYW51cCBpbnN0YW5jZVxuKi9cblxuXG5TdGlja3liaXRzLnByb3RvdHlwZS5yZW1vdmVJbnN0YW5jZSA9IGZ1bmN0aW9uIHJlbW92ZUluc3RhbmNlKGluc3RhbmNlKSB7XG4gIHZhciBlID0gaW5zdGFuY2UuZWw7XG4gIHZhciBwID0gaW5zdGFuY2UucHJvcHM7XG4gIHZhciB0QyA9IHRoaXMudG9nZ2xlQ2xhc3NlcztcbiAgZS5zdHlsZS5wb3NpdGlvbiA9ICcnO1xuICBlLnN0eWxlW3AudmVydGljYWxQb3NpdGlvbl0gPSAnJztcbiAgdEMoZSwgcC5zdGlja3lDbGFzcyk7XG4gIHRDKGUsIHAuc3R1Y2tDbGFzcyk7XG4gIHRDKGUucGFyZW50Tm9kZSwgcC5wYXJlbnRDbGFzcyk7XG59O1xuLypcbiAgY2xlYW51cCDwn5uBXG4gIC0tLS0tLS0tXG4gIC0gY2xlYW5zIHVwIGVhY2ggaW5zdGFuY2VcbiAgLSBjbGVhcnMgaW5zdGFuY2VcbiovXG5cblxuU3RpY2t5Yml0cy5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pbnN0YW5jZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlc1tpXTtcbiAgICBpbnN0YW5jZS5wcm9wcy5zY3JvbGxFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS5zdGF0ZUNvbnRhaW5lcik7XG4gICAgdGhpcy5yZW1vdmVJbnN0YW5jZShpbnN0YW5jZSk7XG4gIH1cblxuICB0aGlzLm1hbmFnZVN0YXRlID0gZmFsc2U7XG4gIHRoaXMuaW5zdGFuY2VzID0gW107XG59O1xuLypcbiAgZXhwb3J0XG4gIC0tLS0tLS0tXG4gIGV4cG9ydHMgU3RpY2tCaXRzIHRvIGJlIHVzZWQg8J+PgVxuKi9cblxuXG5mdW5jdGlvbiBzdGlja3liaXRzKHRhcmdldCwgbykge1xuICByZXR1cm4gbmV3IFN0aWNreWJpdHModGFyZ2V0LCBvKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RpY2t5Yml0cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0aWNreWJpdHMvZGlzdC9zdGlja3liaXRzLmVzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9