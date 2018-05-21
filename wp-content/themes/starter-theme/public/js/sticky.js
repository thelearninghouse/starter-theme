webpackJsonp([2],{

/***/ "./node_modules/stickybits/dist/stickybits.es.js":
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


/***/ }),

/***/ "./src/scripts/components/sticky.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_themeConfig__ = __webpack_require__("./theme.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_themeConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_themeConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stickybits__ = __webpack_require__("./node_modules/stickybits/dist/stickybits.es.js");



var stickyOptions = {
	stickyBitStickyOffset: 0
};

Object(__WEBPACK_IMPORTED_MODULE_1_stickybits__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0_themeConfig___default.a.selectors.sticky, stickyOptions);

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3RpY2t5Yml0cy9kaXN0L3N0aWNreWJpdHMuZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9zdGlja3kuanMiXSwibmFtZXMiOlsic3RpY2t5T3B0aW9ucyIsInN0aWNreUJpdFN0aWNreU9mZnNldCIsInN0aWNreSIsIkNvbmZpZyIsInNlbGVjdG9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxPQUFPO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3pZQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQjtBQUNyQkMsd0JBQXVCO0FBREYsQ0FBdEI7O0FBSUEsbUVBQUFDLENBQU8sbURBQUFDLENBQU9DLFNBQVAsQ0FBaUJGLE1BQXhCLEVBQWdDRixhQUFoQyxFIiwiZmlsZSI6ImpzL3N0aWNreS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICBzdGlja3liaXRzIC0gU3RpY2t5Yml0cyBpcyBhIGxpZ2h0d2VpZ2h0IGFsdGVybmF0aXZlIHRvIGBwb3NpdGlvbjogc3RpY2t5YCBwb2x5ZmlsbHNcbiAgQHZlcnNpb24gdjMuMi4zXG4gIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9kb2xsYXJzaGF2ZWNsdWIvc3RpY2t5Yml0cyNyZWFkbWVcbiAgQGF1dGhvciBKZWZmIFdhaW53cmlnaHQgPHlvd2FpbndyaWdodEBnbWFpbC5jb20+IChodHRwczovL2plZmZyeS5pbilcbiAgQGxpY2Vuc2UgTUlUXG4qKi9cbi8qXG4gIFNUSUNLWUJJVFMg8J+SiVxuICAtLS0tLS0tLVxuICA+IGEgbGlnaHR3ZWlnaHQgYWx0ZXJuYXRpdmUgdG8gYHBvc2l0aW9uOiBzdGlja3lgIHBvbHlmaWxscyDwn42sXG4gIC0tLS0tLS0tXG4gIC0gZWFjaCBtZXRob2QgaXMgZG9jdW1lbnRlZCBhYm92ZSBpdCBvdXIgdmlldyB0aGUgcmVhZG1lXG4gIC0gU3RpY2t5Yml0cyBkb2VzIG5vdCBtYW5hZ2UgcG9seW1vcnBoaWMgZnVuY3Rpb25hbGl0eSAocG9zaXRpb24gbGlrZSBwcm9wZXJ0aWVzKVxuICAqIHBvbHltb3JwaGljIGZ1bmN0aW9uYWxpdHk6IChpbiB0aGUgY29udGV4dCBvZiBkZXNjcmliaW5nIFN0aWNreWJpdHMpXG4gICAgbWVhbnMgbWFraW5nIHRoaW5ncyBsaWtlIGBwb3NpdGlvbjogc3RpY2t5YCBiZSBsb29zZWx5IHN1cHBvcnRlZCB3aXRoIHBvc2l0aW9uIGZpeGVkLlxuICAgIEl0IGFsc28gbWVhbnMgdGhhdCBmZWF0dXJlcyBsaWtlIGB1c2VTdGlja3lDbGFzc2VzYCB0YWtlcyBvbiBzdHlsZXMgbGlrZSBgcG9zaXRpb246IGZpeGVkYC5cbiAgLS0tLS0tLS1cbiAgZGVmYXVsdHMg8J+UjFxuICAtLS0tLS0tLVxuICAtIHZlcnNpb24gPSBgcGFja2FnZS5qc29uYCB2ZXJzaW9uXG4gIC0gdXNlckFnZW50ID0gdmlld2VyIGJyb3dzZXIgYWdlbnRcbiAgLSB0YXJnZXQgPSBET00gZWxlbWVudCBzZWxlY3RvclxuICAtIG5vU3R5bGVzID0gYm9vbGVhblxuICAtIG9mZnNldCA9IG51bWJlclxuICAtIHBhcmVudENsYXNzID0gJ3N0cmluZydcbiAgLSBzY3JvbGxFbCA9IHdpbmRvdyB8fCBET00gZWxlbWVudCBzZWxlY3RvclxuICAtIHN0aWNreUNsYXNzID0gJ3N0cmluZydcbiAgLSBzdHVja0NsYXNzID0gJ3N0cmluZydcbiAgLSB1c2VTdGlja3lDbGFzc2VzID0gYm9vbGVhblxuICAtIHZlcnRpY2FsUG9zaXRpb24gPSAnc3RyaW5nJ1xuICAtLS0tLS0tLVxuICBwcm9wc/CflIxcbiAgLS0tLS0tLS1cbiAgLSBwID0gcHJvcHMge29iamVjdH1cbiAgLS0tLS0tLS1cbiAgaW5zdGFuY2Ugbm90ZVxuICAtLS0tLS0tLVxuICAtIHN0aWNreWJpdHMgcGFyZW50IG1ldGhvZHMgcmV0dXJuIHRoaXNcbiAgLSBzdGlja3liaXRzIGluc3RhbmNlIG1ldGhvZHMgcmV0dXJuIGFuIGluc3RhbmNlIGl0ZW1cbiAgLS0tLS0tLS1cbiAgbm9tZW5jbGF0dXJlXG4gIC0tLS0tLS0tXG4gIC0gdGFyZ2V0ID0+IGVsID0+IGVcbiAgLSBwcm9wcyA9PiBvIHx8IHBcbiAgLSBpbnN0YW5jZSA9PiBpdGVtID0+IGl0XG4gIC0tLS0tLS0tXG4gIG1ldGhvZHNcbiAgLS0tLS0tLS1cbiAgLSAuZGVmaW5lUG9zaXRpb24gPSBkZWZpbmVzIHN0aWNreSBvciBmaXhlZFxuICAtIC5hZGRJbnN0YW5jZSA9IGFuIGFycmF5IG9mIG9iamVjdHMgZm9yIGVhY2ggU3RpY2t5Yml0cyBUYXJnZXRcbiAgLSAuZ2V0Q2xvc2VzdFBhcmVudCA9IGdldHMgdGhlIHBhcmVudCBmb3Igbm9uLXdpbmRvdyBzY3JvbGxcbiAgLSAuY29tcHV0ZVNjcm9sbE9mZnNldHMgPSBjb21wdXRlcyBzY3JvbGwgcG9zaXRpb25cbiAgLSAudG9nZ2xlQ2xhc3NlcyA9IG9sZGVyIGJyb3dzZXIgdG9nZ2xlclxuICAtIC5tYW5hZ2VTdGF0ZSA9IG1hbmFnZXMgc3RpY2t5IHN0YXRlXG4gIC0gLnJlbW92ZUNsYXNzID0gb2xkZXIgYnJvd3NlciBzdXBwb3J0IGNsYXNzIHJlbW92ZXJcbiAgLSAucmVtb3ZlSW5zdGFuY2UgPSByZW1vdmVzIGFuIGluc3RhbmNlXG4gIC0gLmNsZWFudXAgPSByZW1vdmVzIGFsbCBTdGlja3liaXRzIGluc3RhbmNlcyBhbmQgY2xlYW5zIHVwIGRvbSBmcm9tIHN0aWNreWJpdHNcbiovXG5mdW5jdGlvbiBTdGlja3liaXRzKHRhcmdldCwgb2JqKSB7XG4gIHZhciBvID0gdHlwZW9mIG9iaiAhPT0gJ3VuZGVmaW5lZCcgPyBvYmogOiB7fTtcbiAgdGhpcy52ZXJzaW9uID0gJzMuMi4zJztcbiAgdGhpcy51c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnbm8gYHVzZXJBZ2VudGAgcHJvdmlkZWQgYnkgdGhlIGJyb3dzZXInO1xuICB0aGlzLnByb3BzID0ge1xuICAgIGN1c3RvbVN0aWNreUNoYW5nZU51bWJlcjogby5jdXN0b21TdGlja3lDaGFuZ2VOdW1iZXIgfHwgbnVsbCxcbiAgICBub1N0eWxlczogby5ub1N0eWxlcyB8fCBmYWxzZSxcbiAgICBzdGlja3lCaXRTdGlja3lPZmZzZXQ6IG8uc3RpY2t5Qml0U3RpY2t5T2Zmc2V0IHx8IDAsXG4gICAgcGFyZW50Q2xhc3M6IG8ucGFyZW50Q2xhc3MgfHwgJ2pzLXN0aWNreWJpdC1wYXJlbnQnLFxuICAgIHNjcm9sbEVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG8uc2Nyb2xsRWwpIHx8IHdpbmRvdyxcbiAgICBzdGlja3lDbGFzczogby5zdGlja3lDbGFzcyB8fCAnanMtaXMtc3RpY2t5JyxcbiAgICBzdHVja0NsYXNzOiBvLnN0dWNrQ2xhc3MgfHwgJ2pzLWlzLXN0dWNrJyxcbiAgICBzdGlja3lDaGFuZ2VDbGFzczogby5zdGlja3lDaGFuZ2VDbGFzcyB8fCAnanMtaXMtc3RpY2t5LS1jaGFuZ2UnLFxuICAgIHVzZVN0aWNreUNsYXNzZXM6IG8udXNlU3RpY2t5Q2xhc3NlcyB8fCBmYWxzZSxcbiAgICB2ZXJ0aWNhbFBvc2l0aW9uOiBvLnZlcnRpY2FsUG9zaXRpb24gfHwgJ3RvcCdcbiAgfTtcbiAgdmFyIHAgPSB0aGlzLnByb3BzO1xuICAvKlxuICAgIGRlZmluZSBwb3NpdGlvblZhbFxuICAgIC0tLS1cbiAgICAtICB1c2VzIGEgY29tcHV0ZWQgKGAuZGVmaW5lUG9zaXRpb24oKWApXG4gICAgLSAgZGVmaW5lZCB0aGUgcG9zaXRpb25cbiAgKi9cblxuICBwLnBvc2l0aW9uVmFsID0gdGhpcy5kZWZpbmVQb3NpdGlvbigpIHx8ICdmaXhlZCc7XG4gIHZhciB2cCA9IHAudmVydGljYWxQb3NpdGlvbjtcbiAgdmFyIG5zID0gcC5ub1N0eWxlcztcbiAgdmFyIHB2ID0gcC5wb3NpdGlvblZhbDtcbiAgdGhpcy5lbHMgPSB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0KSA6IHRhcmdldDtcbiAgaWYgKCEoJ2xlbmd0aCcgaW4gdGhpcy5lbHMpKSB0aGlzLmVscyA9IFt0aGlzLmVsc107XG4gIHRoaXMuaW5zdGFuY2VzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmVscy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBlbCA9IHRoaXMuZWxzW2ldO1xuICAgIHZhciBzdHlsZXMgPSBlbC5zdHlsZTsgLy8gc2V0IHZlcnRpY2FsIHBvc2l0aW9uXG5cbiAgICBzdHlsZXNbdnBdID0gdnAgPT09ICd0b3AnICYmICFucyA/IHAuc3RpY2t5Qml0U3RpY2t5T2Zmc2V0ICsgXCJweFwiIDogJyc7XG4gICAgc3R5bGVzLnBvc2l0aW9uID0gcHYgIT09ICdmaXhlZCcgPyBwdiA6ICcnO1xuXG4gICAgaWYgKHB2ID09PSAnZml4ZWQnIHx8IHAudXNlU3RpY2t5Q2xhc3Nlcykge1xuICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5hZGRJbnN0YW5jZShlbCwgcCk7IC8vIGluc3RhbmNlcyBhcmUgYW4gYXJyYXkgb2Ygb2JqZWN0c1xuXG4gICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cbi8qXG4gIHNldFN0aWNreVBvc2l0aW9uIOKclO+4j1xuICAtLS0tLS0tLVxuICDigJQgIG1vc3QgYmFzaWMgdGhpbmcgc3RpY2t5Yml0cyBkb2VzXG4gID0+IGNoZWNrcyB0byBzZWUgaWYgcG9zaXRpb24gc3RpY2t5IGlzIHN1cHBvcnRlZFxuICA9PiBkZWZpbmVkIHRoZSBwb3NpdGlvbiB0byBiZSB1c2VkXG4gID0+IHN0aWNreWJpdHMgd29ya3MgYWNjb3JkaW5nbHlcbiovXG5cblxuU3RpY2t5Yml0cy5wcm90b3R5cGUuZGVmaW5lUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwcmVmaXggPSBbJycsICctby0nLCAnLXdlYmtpdC0nLCAnLW1vei0nLCAnLW1zLSddO1xuICB2YXIgdGVzdCA9IGRvY3VtZW50LmhlYWQuc3R5bGU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXgubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0ZXN0LnBvc2l0aW9uID0gcHJlZml4W2ldICsgXCJzdGlja3lcIjtcbiAgfVxuXG4gIHZhciBzdGlja3lQcm9wID0gdGVzdC5wb3NpdGlvbiA/IHRlc3QucG9zaXRpb24gOiAnZml4ZWQnO1xuICB0ZXN0LnBvc2l0aW9uID0gJyc7XG4gIHJldHVybiBzdGlja3lQcm9wO1xufTtcbi8qXG4gIGFkZEluc3RhbmNlIOKclO+4j1xuICAtLS0tLS0tLVxuICDigJQgbWFuYWdlcyBpbnN0YW5jZXMgb2YgaXRlbXNcbiAgLSB0YWtlcyBpbiBhbiBlbCBhbmQgcHJvcHNcbiAgLSByZXR1cm5zIGFuIGl0ZW0gb2JqZWN0XG4gIC0tLVxuICAtIHRhcmdldCA9IGVsXG4gIC0gbyA9IHtvYmplY3R9ID0gcHJvcHNcbiAgICAtIHNjcm9sbEVsID0gJ3N0cmluZydcbiAgICAtIHZlcnRpY2FsUG9zaXRpb24gPSBudW1iZXJcbiAgICAtIG9mZiA9IGJvb2xlYW5cbiAgICAtIHBhcmVudENsYXNzID0gJ3N0cmluZydcbiAgICAtIHN0aWNreUNsYXNzID0gJ3N0cmluZydcbiAgICAtIHN0dWNrQ2xhc3MgPSAnc3RyaW5nJ1xuICAtLS1cbiAgLSBkZWZpbmVkIGxhdGVyXG4gICAgLSBwYXJlbnQgPSBkb20gZWxlbWVudFxuICAgIC0gc3RhdGUgPSAnc3RyaW5nJ1xuICAgIC0gb2Zmc2V0ID0gbnVtYmVyXG4gICAgLSBzdGlja3lTdGFydCA9IG51bWJlclxuICAgIC0gc3RpY2t5U3RvcCA9IG51bWJlclxuICAtIHJldHVybnMgYW4gaW5zdGFuY2Ugb2JqZWN0XG4qL1xuXG5cblN0aWNreWJpdHMucHJvdG90eXBlLmFkZEluc3RhbmNlID0gZnVuY3Rpb24gYWRkSW5zdGFuY2UoZWwsIHByb3BzKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIGl0ZW0gPSB7XG4gICAgZWw6IGVsLFxuICAgIHBhcmVudDogZWwucGFyZW50Tm9kZSxcbiAgICBwcm9wczogcHJvcHNcbiAgfTtcbiAgdGhpcy5pc1dpbiA9IHRoaXMucHJvcHMuc2Nyb2xsRWwgPT09IHdpbmRvdztcbiAgdmFyIHNlID0gdGhpcy5pc1dpbiA/IHdpbmRvdyA6IHRoaXMuZ2V0Q2xvc2VzdFBhcmVudChpdGVtLmVsLCBpdGVtLnByb3BzLnNjcm9sbEVsKTtcbiAgdGhpcy5jb21wdXRlU2Nyb2xsT2Zmc2V0cyhpdGVtKTtcbiAgaXRlbS5wYXJlbnQuY2xhc3NOYW1lICs9IFwiIFwiICsgcHJvcHMucGFyZW50Q2xhc3M7XG4gIGl0ZW0uc3RhdGUgPSAnZGVmYXVsdCc7XG5cbiAgaXRlbS5zdGF0ZUNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RoaXMubWFuYWdlU3RhdGUoaXRlbSk7XG4gIH07XG5cbiAgc2UuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaXRlbS5zdGF0ZUNvbnRhaW5lcik7XG4gIHJldHVybiBpdGVtO1xufTtcbi8qXG4gIC0tLS0tLS0tXG4gIGdldFBhcmVudCDwn5Go4oCNXG4gIC0tLS0tLS0tXG4gIC0gYSBoZWxwZXIgZnVuY3Rpb24gdGhhdCBnZXRzIHRoZSB0YXJnZXQgZWxlbWVudCdzIHBhcmVudCBzZWxlY3RlZCBlbFxuICAtIG9ubHkgdXNlZCBmb3Igbm9uIGB3aW5kb3dgIHNjcm9sbCBlbGVtZW50c1xuICAtIHN1cHBvcnRzIG9sZGVyIGJyb3dzZXJzXG4qL1xuXG5cblN0aWNreWJpdHMucHJvdG90eXBlLmdldENsb3Nlc3RQYXJlbnQgPSBmdW5jdGlvbiAoZWwsIG1hdGNoKSB7XG4gIC8vIHAgPSBwYXJlbnQgZWxlbWVudFxuICB2YXIgcCA9IG1hdGNoO1xuICB2YXIgZSA9IGVsO1xuICBpZiAoZS5wYXJlbnRFbGVtZW50ID09PSBwKSByZXR1cm4gcDsgLy8gdHJhdmVyc2UgdXAgdGhlIGRvbSB0cmVlIHVudGlsIHdlIGdldCB0byB0aGUgcGFyZW50XG5cbiAgd2hpbGUgKGUucGFyZW50RWxlbWVudCAhPT0gcCkge1xuICAgIGUgPSBlLnBhcmVudEVsZW1lbnQ7XG4gIH0gLy8gcmV0dXJuIHBhcmVudCBlbGVtZW50XG5cblxuICByZXR1cm4gcDtcbn07XG4vKlxuICBjb21wdXRlU2Nyb2xsT2Zmc2V0cyDwn5OKXG4gIC0tLVxuICBjb21wdXRlU2Nyb2xsT2Zmc2V0cyBmb3IgU3RpY2t5Yml0c1xuICAtIGRlZmluZXNcbiAgICAtIG9mZnNldFxuICAgIC0gc3RhcnRcbiAgICAtIHN0b3BcbiovXG5cblxuU3RpY2t5Yml0cy5wcm90b3R5cGUuY29tcHV0ZVNjcm9sbE9mZnNldHMgPSBmdW5jdGlvbiBjb21wdXRlU2Nyb2xsT2Zmc2V0cyhpdGVtKSB7XG4gIHZhciBpdCA9IGl0ZW07XG4gIHZhciBwID0gaXQucHJvcHM7XG4gIHZhciBlbCA9IGl0LmVsO1xuICB2YXIgcGFyZW50ID0gaXQucGFyZW50O1xuICB2YXIgaXNDdXN0b20gPSAhdGhpcy5pc1dpbiAmJiBwLnBvc2l0aW9uVmFsID09PSAnZml4ZWQnO1xuICB2YXIgaXNCb3R0b20gPSBwLnZlcnRpY2FsUG9zaXRpb24gIT09ICdib3R0b20nO1xuICB2YXIgc2Nyb2xsRWxPZmZzZXQgPSBpc0N1c3RvbSA/IHAuc2Nyb2xsRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDogMDtcbiAgdmFyIHN0aWNreVN0YXJ0ID0gaXNDdXN0b20gPyBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gc2Nyb2xsRWxPZmZzZXQgOiBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICB2YXIgc3RpY2t5Q2hhbmdlT2Zmc2V0ID0gcC5jdXN0b21TdGlja3lDaGFuZ2VOdW1iZXIgIT09IG51bGwgPyBwLmN1c3RvbVN0aWNreUNoYW5nZU51bWJlciA6IGVsLm9mZnNldEhlaWdodDtcbiAgaXQub2Zmc2V0ID0gc2Nyb2xsRWxPZmZzZXQgKyBwLnN0aWNreUJpdFN0aWNreU9mZnNldDtcbiAgaXQuc3RpY2t5U3RhcnQgPSBpc0JvdHRvbSA/IHN0aWNreVN0YXJ0IC0gaXQub2Zmc2V0IDogMDtcbiAgaXQuc3RpY2t5Q2hhbmdlID0gaXQuc3RpY2t5U3RhcnQgKyBzdGlja3lDaGFuZ2VPZmZzZXQ7XG4gIGl0LnN0aWNreVN0b3AgPSBpc0JvdHRvbSA/IHN0aWNreVN0YXJ0ICsgcGFyZW50Lm9mZnNldEhlaWdodCAtIChpdC5lbC5vZmZzZXRIZWlnaHQgKyBpdC5vZmZzZXQpIDogc3RpY2t5U3RhcnQgKyBwYXJlbnQub2Zmc2V0SGVpZ2h0O1xuICByZXR1cm4gaXQ7XG59O1xuLypcbiAgdG9nZ2xlQ2xhc3NlcyDimpbvuI9cbiAgLS0tXG4gIHRvZ2dsZXMgY2xhc3NlcyAoZm9yIG9sZGVyIGJyb3dzZXIgc3VwcG9ydClcbiAgciA9IHJlbW92ZWQgY2xhc3NcbiAgYSA9IGFkZGVkIGNsYXNzXG4qL1xuXG5cblN0aWNreWJpdHMucHJvdG90eXBlLnRvZ2dsZUNsYXNzZXMgPSBmdW5jdGlvbiAoZWwsIHIsIGEpIHtcbiAgdmFyIGUgPSBlbDtcbiAgdmFyIGNBcnJheSA9IGUuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gIGlmIChhICYmIGNBcnJheS5pbmRleE9mKGEpID09PSAtMSkgY0FycmF5LnB1c2goYSk7XG4gIHZhciBySXRlbSA9IGNBcnJheS5pbmRleE9mKHIpO1xuICBpZiAockl0ZW0gIT09IC0xKSBjQXJyYXkuc3BsaWNlKHJJdGVtLCAxKTtcbiAgZS5jbGFzc05hbWUgPSBjQXJyYXkuam9pbignICcpO1xufTtcbi8qXG4gIG1hbmFnZVN0YXRlIPCfk51cbiAgLS0tXG4gIC0gZGVmaW5lcyB0aGUgc3RhdGVcbiAgICAtIG5vcm1hbFxuICAgIC0gc3RpY2t5XG4gICAgLSBzdHVja1xuKi9cblxuXG5TdGlja3liaXRzLnByb3RvdHlwZS5tYW5hZ2VTdGF0ZSA9IGZ1bmN0aW9uIG1hbmFnZVN0YXRlKGl0ZW0pIHtcbiAgLy8gY2FjaGUgb2JqZWN0XG4gIHZhciBpdCA9IGl0ZW07XG4gIHZhciBlID0gaXQuZWw7XG4gIHZhciBwID0gaXQucHJvcHM7XG4gIHZhciBzdGF0ZSA9IGl0LnN0YXRlO1xuICB2YXIgc3RhcnQgPSBpdC5zdGlja3lTdGFydDtcbiAgdmFyIGNoYW5nZSA9IGl0LnN0aWNreUNoYW5nZTtcbiAgdmFyIHN0b3AgPSBpdC5zdGlja3lTdG9wO1xuICB2YXIgc3RsID0gZS5zdHlsZTsgLy8gY2FjaGUgcHJvcHNcblxuICB2YXIgbnMgPSBwLm5vU3R5bGVzO1xuICB2YXIgcHYgPSBwLnBvc2l0aW9uVmFsO1xuICB2YXIgc2UgPSBwLnNjcm9sbEVsO1xuICB2YXIgc3RpY2t5ID0gcC5zdGlja3lDbGFzcztcbiAgdmFyIHN0aWNreUNoYW5nZSA9IHAuc3RpY2t5Q2hhbmdlQ2xhc3M7XG4gIHZhciBzdHVjayA9IHAuc3R1Y2tDbGFzcztcbiAgdmFyIHZwID0gcC52ZXJ0aWNhbFBvc2l0aW9uO1xuICAvKlxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIC0tLVxuICAgIC0gdXNlIHJBRlxuICAgIC0gb3Igc3R1YiByQUZcbiAgKi9cblxuICB2YXIgckFGU3R1YiA9IGZ1bmN0aW9uIHJBRkR1bW15KGYpIHtcbiAgICBmKCk7XG4gIH07XG5cbiAgdmFyIHJBRiA9ICF0aGlzLmlzV2luID8gckFGU3R1YiA6IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCByQUZTdHViO1xuICAvKlxuICAgIGRlZmluZSBzY3JvbGwgdmFyc1xuICAgIC0tLVxuICAgIC0gc2Nyb2xsXG4gICAgLSBub3RTdGlja3lcbiAgICAtIGlzU3RpY2t5XG4gICAgLSBpc1N0dWNrXG4gICovXG5cbiAgdmFyIHRDID0gdGhpcy50b2dnbGVDbGFzc2VzO1xuICB2YXIgc2Nyb2xsID0gdGhpcy5pc1dpbiA/IHdpbmRvdy5zY3JvbGxZIHx8IHdpbmRvdy5wYWdlWU9mZnNldCA6IHNlLnNjcm9sbFRvcDtcbiAgdmFyIG5vdFN0aWNreSA9IHNjcm9sbCA+IHN0YXJ0ICYmIHNjcm9sbCA8IHN0b3AgJiYgKHN0YXRlID09PSAnZGVmYXVsdCcgfHwgc3RhdGUgPT09ICdzdHVjaycpO1xuICB2YXIgaXNTdGlja3kgPSBzY3JvbGwgPD0gc3RhcnQgJiYgc3RhdGUgPT09ICdzdGlja3knO1xuICB2YXIgaXNTdHVjayA9IHNjcm9sbCA+PSBzdG9wICYmIHN0YXRlID09PSAnc3RpY2t5JztcbiAgLypcbiAgICBVbm5hbWVkIGFycm93IGZ1bmN0aW9ucyB3aXRoaW4gdGhpcyBibG9ja1xuICAgIC0tLVxuICAgIC0gaGVscCB3YW50ZWQgb3IgZGlzY3Vzc2lvblxuICAgIC0gdmlldyB0ZXN0LnN0aWNreWJpdHMuanNcbiAgICAgIC0gYHN0aWNreWJpdHMgLm1hbmFnZVN0YXRlICBgcG9zaXRpb246IGZpeGVkYCBpbnRlcmZhY2VgIGZvciBtb3JlIGF3YXJlbmVzcyDwn5GAXG4gICovXG5cbiAgaWYgKG5vdFN0aWNreSkge1xuICAgIGl0LnN0YXRlID0gJ3N0aWNreSc7XG4gICAgckFGKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRDKGUsIHN0dWNrLCBzdGlja3kpO1xuICAgICAgc3RsLnBvc2l0aW9uID0gcHY7XG4gICAgICBpZiAobnMpIHJldHVybjtcbiAgICAgIHN0bC5ib3R0b20gPSAnJztcbiAgICAgIHN0bFt2cF0gPSBwLnN0aWNreUJpdFN0aWNreU9mZnNldCArIFwicHhcIjtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChpc1N0aWNreSkge1xuICAgIGl0LnN0YXRlID0gJ2RlZmF1bHQnO1xuICAgIHJBRihmdW5jdGlvbiAoKSB7XG4gICAgICB0QyhlLCBzdGlja3kpO1xuICAgICAgaWYgKHB2ID09PSAnZml4ZWQnKSBzdGwucG9zaXRpb24gPSAnJztcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChpc1N0dWNrKSB7XG4gICAgaXQuc3RhdGUgPSAnc3R1Y2snO1xuICAgIHJBRihmdW5jdGlvbiAoKSB7XG4gICAgICB0QyhlLCBzdGlja3ksIHN0dWNrKTtcbiAgICAgIGlmIChwdiAhPT0gJ2ZpeGVkJyB8fCBucykgcmV0dXJuO1xuICAgICAgc3RsLnRvcCA9ICcnO1xuICAgICAgc3RsLmJvdHRvbSA9ICcwJztcbiAgICAgIHN0bC5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgaXNTdGlja3lDaGFuZ2UgPSBzY3JvbGwgPj0gY2hhbmdlICYmIHNjcm9sbCA8PSBzdG9wO1xuICB2YXIgaXNOb3RTdGlja3lDaGFuZ2UgPSBzY3JvbGwgPCBjaGFuZ2UgfHwgc2Nyb2xsID4gc3RvcDtcbiAgdmFyIHN0dWIgPSAnc3R1Yic7IC8vIGEgc3R1YiBjc3MgY2xhc3MgdG8gcmVtb3ZlXG5cbiAgaWYgKGlzTm90U3RpY2t5Q2hhbmdlKSB7XG4gICAgckFGKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRDKGUsIHN0aWNreUNoYW5nZSk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoaXNTdGlja3lDaGFuZ2UpIHtcbiAgICByQUYoZnVuY3Rpb24gKCkge1xuICAgICAgdEMoZSwgc3R1Yiwgc3RpY2t5Q2hhbmdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBpdDtcbn07XG4vKlxuICByZW1vdmVzIGFuIGluc3RhbmNlIPCfkYtcbiAgLS0tLS0tLS1cbiAgLSBjbGVhbnVwIGluc3RhbmNlXG4qL1xuXG5cblN0aWNreWJpdHMucHJvdG90eXBlLnJlbW92ZUluc3RhbmNlID0gZnVuY3Rpb24gcmVtb3ZlSW5zdGFuY2UoaW5zdGFuY2UpIHtcbiAgdmFyIGUgPSBpbnN0YW5jZS5lbDtcbiAgdmFyIHAgPSBpbnN0YW5jZS5wcm9wcztcbiAgdmFyIHRDID0gdGhpcy50b2dnbGVDbGFzc2VzO1xuICBlLnN0eWxlLnBvc2l0aW9uID0gJyc7XG4gIGUuc3R5bGVbcC52ZXJ0aWNhbFBvc2l0aW9uXSA9ICcnO1xuICB0QyhlLCBwLnN0aWNreUNsYXNzKTtcbiAgdEMoZSwgcC5zdHVja0NsYXNzKTtcbiAgdEMoZS5wYXJlbnROb2RlLCBwLnBhcmVudENsYXNzKTtcbn07XG4vKlxuICBjbGVhbnVwIPCfm4FcbiAgLS0tLS0tLS1cbiAgLSBjbGVhbnMgdXAgZWFjaCBpbnN0YW5jZVxuICAtIGNsZWFycyBpbnN0YW5jZVxuKi9cblxuXG5TdGlja3liaXRzLnByb3RvdHlwZS5jbGVhbnVwID0gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmluc3RhbmNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzW2ldO1xuICAgIGluc3RhbmNlLnByb3BzLnNjcm9sbEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnN0YXRlQ29udGFpbmVyKTtcbiAgICB0aGlzLnJlbW92ZUluc3RhbmNlKGluc3RhbmNlKTtcbiAgfVxuXG4gIHRoaXMubWFuYWdlU3RhdGUgPSBmYWxzZTtcbiAgdGhpcy5pbnN0YW5jZXMgPSBbXTtcbn07XG4vKlxuICBleHBvcnRcbiAgLS0tLS0tLS1cbiAgZXhwb3J0cyBTdGlja0JpdHMgdG8gYmUgdXNlZCDwn4+BXG4qL1xuXG5cbmZ1bmN0aW9uIHN0aWNreWJpdHModGFyZ2V0LCBvKSB7XG4gIHJldHVybiBuZXcgU3RpY2t5Yml0cyh0YXJnZXQsIG8pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGlja3liaXRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3RpY2t5Yml0cy9kaXN0L3N0aWNreWJpdHMuZXMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3N0aWNreWJpdHMvZGlzdC9zdGlja3liaXRzLmVzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCBDb25maWcgZnJvbSBcInRoZW1lQ29uZmlnXCI7XG5pbXBvcnQgc3RpY2t5IGZyb20gJ3N0aWNreWJpdHMnXG5cbmNvbnN0IHN0aWNreU9wdGlvbnMgPSB7XG5cdHN0aWNreUJpdFN0aWNreU9mZnNldDogMFxufVxuXG5zdGlja3koQ29uZmlnLnNlbGVjdG9ycy5zdGlja3ksIHN0aWNreU9wdGlvbnMpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3N0aWNreS5qcyJdLCJzb3VyY2VSb290IjoiIn0=