webpackJsonp([1],{

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_themeConfig__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_themeConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_themeConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixitup__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixitup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mixitup__);



var Container = $(__WEBPACK_IMPORTED_MODULE_0_themeConfig___default.a.selectors.mixItUp);

var mixer = __WEBPACK_IMPORTED_MODULE_1_mixitup___default()(Container, {
	callbacks: {
		onMixStart: function onMixStart(state, futureState) {},
		onMixEnd: function onMixEnd(mixEvent) {
			// Focus code still doesn't seem to work
			/* JUST HAD A THOUGHT: You might need to wait with timeout for DOM */
			Container.find(".card:visible:first").focus();
		}
	}
});
handleUrlFilters();

function handleUrlFilters() {
	if (location.hash) {
		var FilterID = location.hash.replace("#", ".");
		var NewActive = $("button[data-filter='" + FilterID + "']");
		NewActive.trigger("click");
	}
}

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

/**!
 * MixItUp v3.2.2
 * A high-performance, dependency-free library for animated filtering, sorting and more
 * Build 20a1a182-d7bd-4c8f-807d-b888e325e44d
 *
 * @copyright Copyright 2014-2017 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup/licenses/
 *
 *            Non-commercial use permitted under same terms as CC BY-NC 3.0 license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */

(function(window) {
    'use strict';

    var mixitup = null,
        h       = null;

    (function() {
        var VENDORS = ['webkit', 'moz', 'o', 'ms'],
            canary  = window.document.createElement('div'),
            i       = -1;

        // window.requestAnimationFrame

        for (i = 0; i < VENDORS.length && !window.requestAnimationFrame; i++) {
            window.requestAnimationFrame = window[VENDORS[i] + 'RequestAnimationFrame'];
        }

        // Element.nextElementSibling

        if (typeof canary.nextElementSibling === 'undefined') {
            Object.defineProperty(window.Element.prototype, 'nextElementSibling', {
                get: function() {
                    var el = this.nextSibling;

                    while (el) {
                        if (el.nodeType === 1) {
                            return el;
                        }

                        el = el.nextSibling;
                    }

                    return null;
                }
            });
        }

        // Element.matches

        (function(ElementPrototype) {
            ElementPrototype.matches =
                ElementPrototype.matches ||
                ElementPrototype.machesSelector ||
                ElementPrototype.mozMatchesSelector ||
                ElementPrototype.msMatchesSelector ||
                ElementPrototype.oMatchesSelector ||
                ElementPrototype.webkitMatchesSelector ||
                function (selector) {
                    return Array.prototype.indexOf.call(this.parentElement.querySelectorAll(selector), this) > -1;
                };
        })(window.Element.prototype);

        // Object.keys
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

        if (!Object.keys) {
            Object.keys = (function() {
                var hasOwnProperty      = Object.prototype.hasOwnProperty,
                    hasDontEnumBug      = false,
                    dontEnums           = [],
                    dontEnumsLength     = -1;

                hasDontEnumBug = !({
                    toString: null
                })
                    .propertyIsEnumerable('toString');

                dontEnums = [
                    'toString',
                    'toLocaleString',
                    'valueOf',
                    'hasOwnProperty',
                    'isPrototypeOf',
                    'propertyIsEnumerable',
                    'constructor'
                ];

                dontEnumsLength = dontEnums.length;

                return function(obj) {
                    var result  = [],
                        prop    = '',
                        i       = -1;

                    if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                        throw new TypeError('Object.keys called on non-object');
                    }

                    for (prop in obj) {
                        if (hasOwnProperty.call(obj, prop)) {
                            result.push(prop);
                        }
                    }

                    if (hasDontEnumBug) {
                        for (i = 0; i < dontEnumsLength; i++) {
                            if (hasOwnProperty.call(obj, dontEnums[i])) {
                                result.push(dontEnums[i]);
                            }
                        }
                    }

                    return result;
                };
            }());
        }

        // Array.isArray
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

        if (!Array.isArray) {
            Array.isArray = function(arg) {
                return Object.prototype.toString.call(arg) === '[object Array]';
            };
        }

        // Object.create
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/create

        if (typeof Object.create !== 'function') {
            Object.create = (function(undefined) {
                var Temp = function() {};

                return function (prototype, propertiesObject) {
                    if (prototype !== Object(prototype) && prototype !== null) {
                        throw TypeError('Argument must be an object, or null');
                    }

                    Temp.prototype = prototype || {};

                    var result = new Temp();

                    Temp.prototype = null;

                    if (propertiesObject !== undefined) {
                        Object.defineProperties(result, propertiesObject);
                    }

                    if (prototype === null) {
                        /* jshint ignore:start */
                        result.__proto__ = null;
                        /* jshint ignore:end */
                    }

                    return result;
                };
            })();
        }

        // String.prototyoe.trim

        if (!String.prototype.trim) {
            String.prototype.trim = function() {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
            };
        }

        // Array.prototype.indexOf
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function(searchElement) {
                var n, k, t, len;

                if (this === null) {
                    throw new TypeError();
                }

                t = Object(this);

                len = t.length >>> 0;

                if (len === 0) {
                    return -1;
                }

                n = 0;

                if (arguments.length > 1) {
                    n = Number(arguments[1]);

                    if (n !== n) {
                        n = 0;
                    } else if (n !== 0 && n !== Infinity && n !== -Infinity) {
                        n = (n > 0 || -1) * Math.floor(Math.abs(n));
                    }
                }

                if (n >= len) {
                    return -1;
                }

                for (k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++) {
                    if (k in t && t[k] === searchElement) {
                        return k;
                    }
                }

                return -1;
            };
        }

        // Function.prototype.bind
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind

        if (!Function.prototype.bind) {
            Function.prototype.bind = function(oThis) {
                var aArgs, self, FNOP, fBound;

                if (typeof this !== 'function') {
                    throw new TypeError();
                }

                aArgs = Array.prototype.slice.call(arguments, 1);

                self = this;

                FNOP = function() {};

                fBound = function() {
                    return self.apply(this instanceof FNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
                };

                if (this.prototype) {
                    FNOP.prototype = this.prototype;
                }

                fBound.prototype = new FNOP();

                return fBound;
            };
        }

        // Element.prototype.dispatchEvent

        if (!window.Element.prototype.dispatchEvent) {
            window.Element.prototype.dispatchEvent = function(event) {
                try {
                    return this.fireEvent('on' + event.type, event);
                } catch (err) {}
            };
        }
    })();

    /**
     * The `mixitup()` "factory" function creates and returns individual instances
     * of MixItUp, known as "mixers", on which API methods can be called.
     *
     * When loading MixItUp via a script tag, the factory function is accessed
     * via the global variable `mixitup`. When using a module loading
     * system (e.g. ES2015, CommonJS, RequireJS), the factory function is
     * exported into your module when you require the MixItUp library.
     *
     * @example
     * mixitup(container [,config] [,foreignDoc])
     *
     * @example <caption>Example 1: Creating a mixer instance with an element reference</caption>
     * var containerEl = document.querySelector('.container');
     *
     * var mixer = mixitup(containerEl);
     *
     * @example <caption>Example 2: Creating a mixer instance with a selector string</caption>
     * var mixer = mixitup('.container');
     *
     * @example <caption>Example 3: Passing a configuration object</caption>
     * var mixer = mixitup(containerEl, {
     *     animation: {
     *         effects: 'fade scale(0.5)'
     *     }
     * });
     *
     * @example <caption>Example 4: Passing an iframe reference</caption>
     * var mixer = mixitup(containerEl, config, foreignDocument);
     *
     * @global
     * @namespace
     * @public
     * @kind        function
     * @since       3.0.0
     * @param       {(Element|string)}  container
     *      A DOM element or selector string representing the container(s) on which to instantiate MixItUp.
     * @param       {object}            [config]
     *      An optional "configuration object" used to customize the behavior of the MixItUp instance.
     * @param       {object}            [foreignDoc]
     *      An optional reference to a `document`, which can be used to control a MixItUp instance in an iframe.
     * @return      {mixitup.Mixer}
     *      A "mixer" object holding the MixItUp instance.
     */

    mixitup = function(container, config, foreignDoc) {
        var el                  = null,
            returnCollection    = false,
            instance            = null,
            facade              = null,
            doc                 = null,
            output              = null,
            instances           = [],
            id                  = '',
            elements            = [],
            i                   = -1;

        doc = foreignDoc || window.document;

        if (returnCollection = arguments[3]) {
            // A non-documented 4th paramater enabling control of multiple instances

            returnCollection = typeof returnCollection === 'boolean';
        }

        if (typeof container === 'string') {
            elements = doc.querySelectorAll(container);
        } else if (container && typeof container === 'object' && h.isElement(container, doc)) {
            elements = [container];
        } else if (container && typeof container === 'object' && container.length) {
            // Although not documented, the container may also be an array-like list of
            // elements such as a NodeList or jQuery collection, is returnCollection is true

            elements = container;
        } else {
            throw new Error(mixitup.messages.errorFactoryInvalidContainer());
        }

        if (elements.length < 1) {
            throw new Error(mixitup.messages.errorFactoryContainerNotFound());
        }

        for (i = 0; el = elements[i]; i++) {
            if (i > 0 && !returnCollection) break;

            if (!el.id) {
                id = 'MixItUp' + h.randomHex();

                el.id = id;
            } else {
                id = el.id;
            }

            if (mixitup.instances[id] instanceof mixitup.Mixer) {
                instance = mixitup.instances[id];

                if (!config || (config && config.debug && config.debug.showWarnings !== false)) {
                    console.warn(mixitup.messages.warningFactoryPreexistingInstance());
                }
            } else {
                instance = new mixitup.Mixer();

                instance.attach(el, doc, id, config);

                mixitup.instances[id] = instance;
            }

            facade = new mixitup.Facade(instance);

            if (config && config.debug && config.debug.enable) {
                instances.push(instance);
            } else {
                instances.push(facade);
            }
        }

        if (returnCollection) {
            output = new mixitup.Collection(instances);
        } else {
            // Return the first instance regardless

            output = instances[0];
        }

        return output;
    };

    /**
     * The `.use()` static method is used to extend the functionality of mixitup with compatible
     * extensions and libraries in an environment with modular scoping e.g. ES2015, CommonJS, or RequireJS.
     *
     * You need only call the `.use()` function once per project, per extension, as module loaders
     * will cache a single reference to MixItUp inclusive of all changes made.
     *
     * @example
     * mixitup.use(extension)
     *
     * @example <caption>Example 1: Extending MixItUp with the Pagination Extension</caption>
     *
     * import mixitup from 'mixitup';
     * import mixitupPagination from 'mixitup-pagination';
     *
     * mixitup.use(mixitupPagination);
     *
     * // All mixers created by the factory function in all modules will now
     * // have pagination functionality
     *
     * var mixer = mixitup('.container');
     *
     * @public
     * @name     use
     * @memberof mixitup
     * @kind     function
     * @static
     * @since    3.0.0
     * @param    {*}  extension   A reference to the extension or library to be used.
     * @return   {void}
     */

    mixitup.use = function(extension) {
        mixitup.Base.prototype.callActions.call(mixitup, 'beforeUse', arguments);

        // Call the extension's factory function, passing
        // the mixitup factory as a paramater

        if (typeof extension === 'function' && extension.TYPE === 'mixitup-extension') {
            // Mixitup extension

            if (typeof mixitup.extensions[extension.NAME] === 'undefined') {
                extension(mixitup);

                mixitup.extensions[extension.NAME] = extension;
            }
        } else if (extension.fn && extension.fn.jquery) {
            // jQuery

            mixitup.libraries.$ = extension;
        }

        mixitup.Base.prototype.callActions.call(mixitup, 'afterUse', arguments);
    };

    mixitup.instances   = {};
    mixitup.extensions  = {};
    mixitup.libraries   = {};

    /**
     * @private
     */

    h = {

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        cls
         * @return  {boolean}
         */

        hasClass: function(el, cls) {
            return !!el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        cls
         * @return  {void}
         */

        addClass: function(el, cls) {
            if (!this.hasClass(el, cls)) el.className += el.className ? ' ' + cls : cls;
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        cls
         * @return  {void}
         */

        removeClass: function(el, cls) {
            if (this.hasClass(el, cls)) {
                var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');

                el.className = el.className.replace(reg, ' ').trim();
            }
        },

        /**
         * Merges the properties of the source object onto the
         * target object. Alters the target object.
         *
         * @private
         * @param   {object}    destination
         * @param   {object}    source
         * @param   {boolean}   [deep=false]
         * @param   {boolean}   [handleErrors=false]
         * @return  {void}
         */

        extend: function(destination, source, deep, handleErrors) {
            var sourceKeys  = [],
                key         = '',
                i           = -1;

            deep = deep || false;
            handleErrors = handleErrors || false;

            try {
                if (Array.isArray(source)) {
                    for (i = 0; i < source.length; i++) {
                        sourceKeys.push(i);
                    }
                } else if (source) {
                    sourceKeys = Object.keys(source);
                }

                for (i = 0; i < sourceKeys.length; i++) {
                    key = sourceKeys[i];

                    if (!deep || typeof source[key] !== 'object' || this.isElement(source[key])) {
                        // All non-object properties, or all properties if shallow extend

                        destination[key] = source[key];
                    } else if (Array.isArray(source[key])) {
                        // Arrays

                        if (!destination[key]) {
                            destination[key] = [];
                        }

                        this.extend(destination[key], source[key], deep, handleErrors);
                    } else {
                        // Objects

                        if (!destination[key]) {
                            destination[key] = {};
                        }

                        this.extend(destination[key], source[key], deep, handleErrors);
                    }
                }
            } catch(err) {
                if (handleErrors) {
                    this.handleExtendError(err, destination);
                } else {
                    throw err;
                }
            }

            return destination;
        },

        /**
         * @private
         * @param   {Error}  err
         * @param   {object} destination
         * @return  {void}
         */

        handleExtendError: function(err, destination) {
            var re                  = /property "?(\w*)"?[,:] object/i,
                matches             = null,
                erroneous           = '',
                message             = '',
                suggestion          = '',
                probableMatch       = '',
                key                 = '',
                mostMatchingChars   = -1,
                i                   = -1;

            if (err instanceof TypeError && (matches = re.exec(err.message))) {
                erroneous = matches[1];

                for (key in destination) {
                    i = 0;

                    while (i < erroneous.length && erroneous.charAt(i) === key.charAt(i)) {
                        i++;
                    }

                    if (i > mostMatchingChars) {
                        mostMatchingChars = i;
                        probableMatch = key;
                    }
                }

                if (mostMatchingChars > 1) {
                    suggestion = mixitup.messages.errorConfigInvalidPropertySuggestion({
                        probableMatch: probableMatch
                    });
                }

                message = mixitup.messages.errorConfigInvalidProperty({
                    erroneous: erroneous,
                    suggestion: suggestion
                });

                throw new TypeError(message);
            }

            throw err;
        },

        /**
         * @private
         * @param   {string} str
         * @return  {function}
         */

        template: function(str) {
            var re          = /\${([\w]*)}/g,
                dynamics    = {},
                matches     = null;

            while ((matches = re.exec(str))) {
                dynamics[matches[1]] = new RegExp('\\${' + matches[1] + '}', 'g');
            }

            return function(data) {
                var key     = '',
                    output  = str;

                data = data || {};

                for (key in dynamics) {
                    output = output.replace(dynamics[key], typeof data[key] !== 'undefined' ? data[key] : '');
                }

                return output;
            };
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        type
         * @param   {function}      fn
         * @param   {boolean}       useCapture
         * @return  {void}
         */

        on: function(el, type, fn, useCapture) {
            if (!el) return;

            if (el.addEventListener) {
                el.addEventListener(type, fn, useCapture);
            } else if (el.attachEvent) {
                el['e' + type + fn] = fn;

                el[type + fn] = function() {
                    el['e' + type + fn](window.event);
                };

                el.attachEvent('on' + type, el[type + fn]);
            }
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        type
         * @param   {function}      fn
         * @return  {void}
         */

        off: function(el, type, fn) {
            if (!el) return;

            if (el.removeEventListener) {
                el.removeEventListener(type, fn, false);
            } else if (el.detachEvent) {
                el.detachEvent('on' + type, el[type + fn]);
                el[type + fn] = null;
            }
        },

        /**
         * @private
         * @param   {string}      eventType
         * @param   {object}      detail
         * @param   {Document}    [doc]
         * @return  {CustomEvent}
         */

        getCustomEvent: function(eventType, detail, doc) {
            var event = null;

            doc = doc || window.document;

            if (typeof window.CustomEvent === 'function') {
                event = new window.CustomEvent(eventType, {
                    detail: detail,
                    bubbles: true,
                    cancelable: true
                });
            } else if (typeof doc.createEvent === 'function') {
                event = doc.createEvent('CustomEvent');
                event.initCustomEvent(eventType, true, true, detail);
            } else {
                event = doc.createEventObject(),
                event.type = eventType;

                event.returnValue = false;
                event.cancelBubble = false;
                event.detail = detail;
            }

            return event;
        },

        /**
         * @private
         * @param   {Event} e
         * @return  {Event}
         */

        getOriginalEvent: function(e) {
            if (e.touches && e.touches.length) {
                return e.touches[0];
            } else if (e.changedTouches && e.changedTouches.length) {
                return e.changedTouches[0];
            } else {
                return e;
            }
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        selector
         * @return  {Number}
         */

        index: function(el, selector) {
            var i = 0;

            while ((el = el.previousElementSibling) !== null) {
                if (!selector || el.matches(selector)) {
                    ++i;
                }
            }

            return i;
        },

        /**
         * Converts a dash or snake-case string to camel case.
         *
         * @private
         * @param   {string}    str
         * @param   {boolean}   [isPascal]
         * @return  {string}
         */

        camelCase: function(str) {
            return str.toLowerCase().replace(/([_-][a-z])/g, function($1) {
                return $1.toUpperCase().replace(/[_-]/, '');
            });
        },

        /**
         * Converts a dash or snake-case string to pascal case.
         *
         * @private
         * @param   {string}    str
         * @param   {boolean}   [isPascal]
         * @return  {string}
         */

        pascalCase: function(str) {
            return (str = this.camelCase(str)).charAt(0).toUpperCase() + str.slice(1);
        },

        /**
         * Converts a camel or pascal-case string to dash case.
         *
         * @private
         * @param   {string}    str
         * @return  {string}
         */

        dashCase: function(str) {
            return str.replace(/([A-Z])/g, '-$1').replace(/^-/, '').toLowerCase();
        },

        /**
         * @private
         * @param   {HTMLElement}       el
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {boolean}
         */

        isElement: function(el, doc) {
            doc = doc || window.document;

            if (
                window.HTMLElement &&
                el instanceof window.HTMLElement
            ) {
                return true;
            } else if (
                doc.defaultView &&
                doc.defaultView.HTMLElement &&
                el instanceof doc.defaultView.HTMLElement
            ) {
                return true;
            } else {
                return (
                    el !== null &&
                    el.nodeType === 1 &&
                    typeof el.nodeName === 'string'
                );
            }
        },

        /**
         * @private
         * @param   {string}            htmlString
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {DocumentFragment}
         */

        createElement: function(htmlString, doc) {
            var frag = null,
                temp = null;

            doc = doc || window.document;

            frag = doc.createDocumentFragment();
            temp = doc.createElement('div');

            temp.innerHTML = htmlString.trim();

            while (temp.firstChild) {
                frag.appendChild(temp.firstChild);
            }

            return frag;
        },

        /**
         * @private
         * @param   {Node} node
         * @return  {void}
         */

        removeWhitespace: function(node) {
            var deleting;

            while (node && node.nodeName === '#text') {
                deleting = node;

                node = node.previousSibling;

                deleting.parentElement && deleting.parentElement.removeChild(deleting);
            }
        },

        /**
         * @private
         * @param   {Array<*>}  a
         * @param   {Array<*>}  b
         * @return  {boolean}
         */

        isEqualArray: function(a, b) {
            var i = a.length;

            if (i !== b.length) return false;

            while (i--) {
                if (a[i] !== b[i]) return false;
            }

            return true;
        },

        /**
         * @private
         * @param   {object}  a
         * @param   {object}  b
         * @return  {boolean}
         */

        deepEquals: function(a, b) {
            var key;

            if (typeof a === 'object' && a && typeof b === 'object' && b) {
                if (Object.keys(a).length !== Object.keys(b).length) return false;

                for (key in a) {
                    if (!b.hasOwnProperty(key) || !this.deepEquals(a[key], b[key])) return false;
                }
            } else if (a !== b) {
                return false;
            }

            return true;
        },

        /**
         * @private
         * @param   {Array<*>}  oldArray
         * @return  {Array<*>}
         */

        arrayShuffle: function(oldArray) {
            var newArray    = oldArray.slice(),
                len         = newArray.length,
                i           = len,
                p           = -1,
                t           = [];

            while (i--) {
                p = ~~(Math.random() * len);
                t = newArray[i];

                newArray[i] = newArray[p];
                newArray[p] = t;
            }

            return newArray;
        },

        /**
         * @private
         * @param   {object}    list
         */

        arrayFromList: function(list) {
            var output, i;

            try {
                return Array.prototype.slice.call(list);
            } catch(err) {
                output = [];

                for (i = 0; i < list.length; i++) {
                    output.push(list[i]);
                }

                return output;
            }
        },

        /**
         * @private
         * @param   {function}  func
         * @param   {Number}    wait
         * @param   {boolean}   immediate
         * @return  {function}
         */

        debounce: function(func, wait, immediate) {
            var timeout;

            return function() {
                var self     = this,
                    args     = arguments,
                    callNow  = immediate && !timeout,
                    later    = null;

                later = function() {
                    timeout  = null;

                    if (!immediate) {
                        func.apply(self, args);
                    }
                };

                clearTimeout(timeout);

                timeout = setTimeout(later, wait);

                if (callNow) func.apply(self, args);
            };
        },

        /**
         * @private
         * @param   {HTMLElement}   element
         * @return  {object}
         */

        position: function(element) {
            var xPosition       = 0,
                yPosition       = 0,
                offsetParent    = element;

            while (element) {
                xPosition -= element.scrollLeft;
                yPosition -= element.scrollTop;

                if (element === offsetParent) {
                    xPosition += element.offsetLeft;
                    yPosition += element.offsetTop;

                    offsetParent = element.offsetParent;
                }

                element = element.parentElement;
            }

            return {
                x: xPosition,
                y: yPosition
            };
        },

        /**
         * @private
         * @param   {object}    node1
         * @param   {object}    node2
         * @return  {Number}
         */

        getHypotenuse: function(node1, node2) {
            var distanceX = node1.x - node2.x,
                distanceY = node1.y - node2.y;

            distanceX = distanceX < 0 ? distanceX * -1 : distanceX,
            distanceY = distanceY < 0 ? distanceY * -1 : distanceY;

            return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
        },

        /**
         * Calcuates the area of intersection between two rectangles and expresses it as
         * a ratio in comparison to the area of the first rectangle.
         *
         * @private
         * @param   {Rect}  box1
         * @param   {Rect}  box2
         * @return  {number}
         */

        getIntersectionRatio: function(box1, box2) {
            var controlArea         = box1.width * box1.height,
                intersectionX       = -1,
                intersectionY       = -1,
                intersectionArea    = -1,
                ratio               = -1;

            intersectionX =
                Math.max(0, Math.min(box1.left + box1.width, box2.left + box2.width) - Math.max(box1.left, box2.left));

            intersectionY =
                Math.max(0, Math.min(box1.top + box1.height, box2.top + box2.height) - Math.max(box1.top, box2.top));

            intersectionArea = intersectionY * intersectionX;

            ratio = intersectionArea / controlArea;

            return ratio;
        },

        /**
         * @private
         * @param   {object}            el
         * @param   {string}            selector
         * @param   {boolean}           [includeSelf]
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {Element|null}
         */

        closestParent: function(el, selector, includeSelf, doc) {
            var parent  = el.parentNode;

            doc = doc || window.document;

            if (includeSelf && el.matches(selector)) {
                return el;
            }

            while (parent && parent != doc.body) {
                if (parent.matches && parent.matches(selector)) {
                    return parent;
                } else if (parent.parentNode) {
                    parent = parent.parentNode;
                } else {
                    return null;
                }
            }

            return null;
        },

        /**
         * @private
         * @param   {HTMLElement}       el
         * @param   {string}            selector
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {NodeList}
         */

        children: function(el, selector, doc) {
            var children    = [],
                tempId      = '';

            doc = doc || window.doc;

            if (el) {
                if (!el.id) {
                    tempId = 'Temp' + this.randomHexKey();

                    el.id = tempId;
                }

                children = doc.querySelectorAll('#' + el.id + ' > ' + selector);

                if (tempId) {
                    el.removeAttribute('id');
                }
            }

            return children;
        },

        /**
         * Creates a clone of a provided array, with any empty strings removed.
         *
         * @private
         * @param   {Array<*>} originalArray
         * @return  {Array<*>}
         */

        clean: function(originalArray) {
            var cleanArray = [],
                i = -1;

            for (i = 0; i < originalArray.length; i++) {
                if (originalArray[i] !== '') {
                    cleanArray.push(originalArray[i]);
                }
            }

            return cleanArray;
        },

        /**
         * Abstracts an ES6 promise into a q-like deferred interface for storage and deferred resolution.
         *
         * @private
         * @param  {object} libraries
         * @return {h.Deferred}
         */

        defer: function(libraries) {
            var deferred       = null,
                promiseWrapper = null,
                $              = null;

            promiseWrapper = new this.Deferred();

            if (mixitup.features.has.promises) {
                // ES6 native promise or polyfill

                promiseWrapper.promise = new Promise(function(resolve, reject) {
                    promiseWrapper.resolve = resolve;
                    promiseWrapper.reject  = reject;
                });
            } else if (($ = (window.jQuery || libraries.$)) && typeof $.Deferred === 'function') {
                // jQuery

                deferred = $.Deferred();

                promiseWrapper.promise = deferred.promise();
                promiseWrapper.resolve = deferred.resolve;
                promiseWrapper.reject  = deferred.reject;
            } else if (window.console) {
                // No implementation

                console.warn(mixitup.messages.warningNoPromiseImplementation());
            }

            return promiseWrapper;
        },

        /**
         * @private
         * @param   {Array<Promise>}    tasks
         * @param   {object}            libraries
         * @return  {Promise<Array>}
         */

        all: function(tasks, libraries) {
            var $ = null;

            if (mixitup.features.has.promises) {
                return Promise.all(tasks);
            } else if (($ = (window.jQuery || libraries.$)) && typeof $.when === 'function') {
                return $.when.apply($, tasks)
                    .done(function() {
                        // jQuery when returns spread arguments rather than an array or resolutions

                        return arguments;
                    });
            }

            // No implementation

            if (window.console) {
                console.warn(mixitup.messages.warningNoPromiseImplementation());
            }

            return [];
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        property
         * @param   {Array<string>} vendors
         * @return  {string}
         */

        getPrefix: function(el, property, vendors) {
            var i       = -1,
                prefix  = '';

            if (h.dashCase(property) in el.style) return '';

            for (i = 0; prefix = vendors[i]; i++) {
                if (prefix + property in el.style) {
                    return prefix.toLowerCase();
                }
            }

            return 'unsupported';
        },

        /**
         * @private
         * @return  {string}
         */

        randomHex: function() {
            return ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6).toUpperCase();
        },

        /**
         * @private
         * @param   {HTMLDocument}  [doc]
         * @return  {object}
         */

        getDocumentState: function(doc) {
            doc = typeof doc.body === 'object' ? doc : window.document;

            return {
                scrollTop: window.pageYOffset,
                scrollLeft: window.pageXOffset,
                docHeight: doc.documentElement.scrollHeight,
                docWidth: doc.documentElement.scrollWidth,
                viewportHeight: doc.documentElement.clientHeight,
                viewportWidth: doc.documentElement.clientWidth
            };
        },

        /**
         * @private
         * @param   {object}    obj
         * @param   {function}  fn
         * @return  {function}
         */

        bind: function(obj, fn) {
            return function() {
                return fn.apply(obj, arguments);
            };
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @return  {boolean}
         */

        isVisible: function(el) {
            var styles = null;

            if (el.offsetParent) return true;

            styles = window.getComputedStyle(el);

            if (
                styles.position === 'fixed' &&
                styles.visibility !== 'hidden' &&
                styles.opacity !== '0'
            ) {
                // Fixed elements report no offsetParent,
                // but may still be invisible

                return true;
            }

            return false;
        },

        /**
         * @private
         * @param   {object}    obj
         */

        seal: function(obj) {
            if (typeof Object.seal === 'function') {
                Object.seal(obj);
            }
        },

        /**
         * @private
         * @param   {object}    obj
         */

        freeze: function(obj) {
            if (typeof Object.freeze === 'function') {
                Object.freeze(obj);
            }
        },

        /**
         * @private
         * @param   {string}    control
         * @param   {string}    specimen
         * @return  {boolean}
         */

        compareVersions: function(control, specimen) {
            var controlParts    = control.split('.'),
                specimenParts   = specimen.split('.'),
                controlPart     = -1,
                specimenPart    = -1,
                i               = -1;

            for (i = 0; i < controlParts.length; i++) {
                controlPart     = parseInt(controlParts[i].replace(/[^\d.]/g, ''));
                specimenPart    = parseInt(specimenParts[i].replace(/[^\d.]/g, '') || 0);

                if (specimenPart < controlPart) {
                    return false;
                } else if (specimenPart > controlPart) {
                    return true;
                }
            }

            return true;
        },

        /**
         * @private
         * @constructor
         */

        Deferred: function() {
            this.promise    = null;
            this.resolve    = null;
            this.reject     = null;
            this.id         = h.randomHex();
        },

        /**
         * @private
         * @param   {object}  obj
         * @return  {boolean}
         */

        isEmptyObject: function(obj) {
            var key = '';

            if (typeof Object.keys === 'function') {
                return Object.keys(obj).length === 0;
            }

            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    return false;
                }
            }

            return true;
        },

        /**
         * @param   {mixitup.Config.ClassNames}   classNames
         * @param   {string}                      elementName
         * @param   {string}                      [modifier]
         * @return  {string}
         */

        getClassname: function(classNames, elementName, modifier) {
            var classname = '';

            classname += classNames.block;

            if (classname.length) {
                classname += classNames.delineatorElement;
            }

            classname += classNames['element' + this.pascalCase(elementName)];

            if (!modifier) return classname;

            if (classname.length) {
                classname += classNames.delineatorModifier;
            }

            classname += modifier;

            return classname;
        },

        /**
         * Returns the value of a property on a given object via its string key.
         *
         * @param   {object}    obj
         * @param   {string}    stringKey
         * @return  {*} value
         */

        getProperty: function(obj, stringKey) {
            var parts           = stringKey.split('.'),
                returnCurrent   = null,
                current         = '',
                i               = 0;

            if (!stringKey) {
                return obj;
            }

            returnCurrent = function(obj) {
                if (!obj) {
                    return null;
                } else {
                    return obj[current];
                }
            };

            while (i < parts.length) {
                current = parts[i];

                obj = returnCurrent(obj);

                i++;
            }

            if (typeof obj !== 'undefined') {
                return obj;
            } else {
                return null;
            }
        }
    };

    mixitup.h = h;

    /**
     * The Base class adds instance methods to all other extensible MixItUp classes,
     * enabling the calling of any registered hooks.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Base = function() {};

    mixitup.Base.prototype = {
        constructor: mixitup.Base,

        /**
         * Calls any registered hooks for the provided action.
         *
         * @memberof    mixitup.Base
         * @private
         * @instance
         * @since       2.0.0
         * @param       {string}    actionName
         * @param       {Array<*>}  args
         * @return      {void}
         */

        callActions: function(actionName, args) {
            var self            = this,
                hooks           = self.constructor.actions[actionName],
                extensionName   = '';

            if (!hooks || h.isEmptyObject(hooks)) return;

            for (extensionName in hooks) {
                hooks[extensionName].apply(self, args);
            }
        },

        /**
         * Calls any registered hooks for the provided filter.
         *
         * @memberof    mixitup.Base
         * @private
         * @instance
         * @since       2.0.0
         * @param       {string}    filterName
         * @param       {*}         input
         * @param       {Array<*>}  args
         * @return      {*}
         */

        callFilters: function(filterName, input, args) {
            var self            = this,
                hooks           = self.constructor.filters[filterName],
                output          = input,
                extensionName   = '';

            if (!hooks || h.isEmptyObject(hooks)) return output;

            args = args || [];

            for (extensionName in hooks) {
                args = h.arrayFromList(args);

                args.unshift(output);

                output = hooks[extensionName].apply(self, args);
            }

            return output;
        }
    };

    /**
     * The BaseStatic class holds a set of static methods which are then added to all other
     * extensible MixItUp classes as a means of integrating extensions via the addition of new
     * methods and/or actions and hooks.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.BaseStatic = function() {
        this.actions = {};
        this.filters = {};

        /**
         * Performs a shallow extend on the class's prototype, adding one or more new members to
         * the class in a single operation.
         *
         * @memberof    mixitup.BaseStatic
         * @public
         * @static
         * @since       2.1.0
         * @param       {object} extension
         * @return      {void}
         */

        this.extend = function(extension) {
            h.extend(this.prototype, extension);
        };

        /**
         * Registers a function to be called on the action hook of the provided name.
         *
         * @memberof    mixitup.BaseStatic
         * @public
         * @static
         * @since       2.1.0
         * @param       {string}    hookName
         * @param       {string}    extensionName
         * @param       {function}  func
         * @return      {void}
         */

        this.registerAction = function(hookName, extensionName, func) {
            (this.actions[hookName] = this.actions[hookName] || {})[extensionName] = func;
        };

        /**
         * Registers a function to be called on the filter of the provided name.
         *
         * @memberof    mixitup.BaseStatic
         * @public
         * @static
         * @since       2.1.0
         * @param       {string}    hookName
         * @param       {string}    extensionName
         * @param       {function}  func
         * @return      {void}
         */

        this.registerFilter = function(hookName, extensionName, func) {
            (this.filters[hookName] = this.filters[hookName] || {})[extensionName] = func;
        };
    };

    /**
     * The `mixitup.Features` class performs all feature and CSS prefix detection
     * neccessary for MixItUp to function correctly, as well as storing various
     * string and array constants. All feature decection is on evaluation of the
     * library and stored in a singleton instance for use by other internal classes.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Features = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.boxSizingPrefix            = '';
        this.transformPrefix            = '';
        this.transitionPrefix           = '';

        this.boxSizingPrefix            = '';
        this.transformProp              = '';
        this.transformRule              = '';
        this.transitionProp             = '';
        this.perspectiveProp            = '';
        this.perspectiveOriginProp      = '';

        this.has                        = new mixitup.Has();

        this.canary                     = null;

        this.BOX_SIZING_PROP            = 'boxSizing';
        this.TRANSITION_PROP            = 'transition';
        this.TRANSFORM_PROP             = 'transform';
        this.PERSPECTIVE_PROP           = 'perspective';
        this.PERSPECTIVE_ORIGIN_PROP    = 'perspectiveOrigin';
        this.VENDORS                    = ['Webkit', 'moz', 'O', 'ms'];

        this.TWEENABLE = [
            'opacity',
            'width', 'height',
            'marginRight', 'marginBottom',
            'x', 'y',
            'scale',
            'translateX', 'translateY', 'translateZ',
            'rotateX', 'rotateY', 'rotateZ'
        ];

        this.callActions('afterConstruct');
    };

    mixitup.BaseStatic.call(mixitup.Features);

    mixitup.Features.prototype = Object.create(mixitup.Base.prototype);

    h.extend(mixitup.Features.prototype,
    /** @lends mixitup.Features */
    {
        constructor: mixitup.Features,

        /**
         * @private
         * @return  {void}
         */

        init: function() {
            var self = this;

            self.callActions('beforeInit', arguments);

            self.canary = document.createElement('div');

            self.setPrefixes();
            self.runTests();

            self.callActions('beforeInit', arguments);
        },

        /**
         * @private
         * @return  {void}
         */

        runTests: function() {
            var self = this;

            self.callActions('beforeRunTests', arguments);

            self.has.promises       = typeof window.Promise === 'function';
            self.has.transitions    = self.transitionPrefix !== 'unsupported';

            self.callActions('afterRunTests', arguments);

            h.freeze(self.has);
        },

        /**
         * @private
         * @return  {void}
         */

        setPrefixes: function() {
            var self = this;

            self.callActions('beforeSetPrefixes', arguments);

            self.transitionPrefix   = h.getPrefix(self.canary, 'Transition', self.VENDORS);
            self.transformPrefix    = h.getPrefix(self.canary, 'Transform', self.VENDORS);
            self.boxSizingPrefix    = h.getPrefix(self.canary, 'BoxSizing', self.VENDORS);

            self.boxSizingProp = self.boxSizingPrefix ?
                self.boxSizingPrefix + h.pascalCase(self.BOX_SIZING_PROP) : self.BOX_SIZING_PROP;

            self.transitionProp = self.transitionPrefix ?
                self.transitionPrefix + h.pascalCase(self.TRANSITION_PROP) : self.TRANSITION_PROP;

            self.transformProp = self.transformPrefix ?
                self.transformPrefix + h.pascalCase(self.TRANSFORM_PROP) : self.TRANSFORM_PROP;

            self.transformRule = self.transformPrefix ?
                '-' + self.transformPrefix + '-' + self.TRANSFORM_PROP : self.TRANSFORM_PROP;

            self.perspectiveProp = self.transformPrefix ?
                self.transformPrefix + h.pascalCase(self.PERSPECTIVE_PROP) : self.PERSPECTIVE_PROP;

            self.perspectiveOriginProp = self.transformPrefix ?
                self.transformPrefix + h.pascalCase(self.PERSPECTIVE_ORIGIN_PROP) :
                self.PERSPECTIVE_ORIGIN_PROP;

            self.callActions('afterSetPrefixes', arguments);
        }
    });

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Has = function() {
        this.transitions    = false;
        this.promises       = false;

        h.seal(this);
    };

    // Assign a singleton instance to `mixitup.features` and initialise:

    mixitup.features = new mixitup.Features();

    mixitup.features.init();

    /**
     * A group of properties defining the mixer's animation and effects settings.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        animation
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.ConfigAnimation = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A boolean dictating whether or not animation should be enabled for the MixItUp instance.
         * If `false`, all operations will occur instantly and syncronously, although callback
         * functions and any returned promises will still be fulfilled.
         *
         * @example <caption>Example: Create a mixer with all animations disabled</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         enable: false
         *     }
         * });
         *
         * @name        enable
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.enable = true;

        /**
         * A string of one or more space-seperated properties to which transitions will be
         * applied for all filtering animations.
         *
         * Properties can be listed any order or combination, although they will be applied in a specific
         * predefined order to produce consistent results.
         *
         * To learn more about available effects, experiment with our <a href="https://www.kunkalabs.com/mixitup/">
         * sandbox demo</a> and try out the "Export config" button in the Animation options drop down.
         *
         * @example <caption>Example: Apply "fade" and "translateZ" effects to all animations</caption>
         * // As targets are filtered in and out, they will fade between
         * // opacity 1 and 0 and transform between translateZ(-100px) and
         * // translateZ(0).
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade translateZ(-100px)'
         *     }
         * });
         *
         * @name        effects
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     'fade scale'
         */

        this.effects = 'fade scale';

        /**
         * A string of one or more space-seperated effects to be applied only to filter-in
         * animations, overriding `config.animation.effects` if set.
         *
         * @example <caption>Example: Apply downwards vertical translate to targets being filtered in</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effectsIn: 'fade translateY(-100%)'
         *     }
         * });
         *
         * @name        effectsIn
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.effectsIn = '';

        /**
         * A string of one or more space-seperated effects to be applied only to filter-out
         * animations, overriding `config.animation.effects` if set.
         *
         * @example <caption>Example: Apply upwards vertical translate to targets being filtered out</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effectsOut: 'fade translateY(-100%)'
         *     }
         * });
         *
         * @name        effectsOut
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.effectsOut = '';

        /**
         * An integer dictating the duration of all MixItUp animations in milliseconds, not
         * including any additional delay apllied via the `'stagger'` effect.
         *
         * @example <caption>Example: Apply an animation duration of 200ms to all mixitup animations</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         duration: 200
         *     }
         * });
         *
         * @name        duration
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {number}
         * @default     600
         */

        this.duration = 600;

        /**
         * A valid CSS3 transition-timing function or shorthand. For a full list of accepted
         * values, visit <a href="http://easings.net" target="_blank">easings.net</a>.
         *
         * @example <caption>Example 1: Apply "ease-in-out" easing to all animations</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         easing: 'ease-in-out'
         *     }
         * });
         *
         * @example <caption>Example 2: Apply a custom "cubic-bezier" easing function to all animations</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
         *     }
         * });
         *
         * @name        easing
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     'ease'
         */

        this.easing = 'ease';

        /**
         * A boolean dictating whether or not to apply perspective to the MixItUp container
         * during animations. By default, perspective is always applied and creates the
         * illusion of three-dimensional space for effects such as `translateZ`, `rotateX`,
         * and `rotateY`.
         *
         * You may wish to disable this and define your own perspective settings via CSS.
         *
         * @example <caption>Example: Prevent perspective from being applied to any 3D transforms</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         applyPerspective: false
         *     }
         * });
         *
         * @name        applyPerspective
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {bolean}
         * @default     true
         */

        this.applyPerspective = true;

        /**
         * The perspective distance value to be applied to the container during animations,
         * affecting any 3D-transform-based effects.
         *
         * @example <caption>Example: Set a perspective distance of 2000px</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'rotateY(-25deg)',
         *         perspectiveDistance: '2000px'
         *     }
         * });
         *
         * @name        perspectiveDistance
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     '3000px'
         */

        this.perspectiveDistance = '3000px';

        /**
         * The perspective-origin value to be applied to the container during animations,
         * affecting any 3D-transform-based effects.
         *
         * @example <caption>Example: Set a perspective origin in the top-right of the container</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'transateZ(-200px)',
         *         perspectiveOrigin: '100% 0'
         *     }
         * });
         *
         * @name        perspectiveOrigin
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     '50% 50%'
         */

        this.perspectiveOrigin = '50% 50%';

        /**
         * A boolean dictating whether or not to enable the queuing of operations.
         *
         * If `true` (default), and a control is clicked or an API call is made while another
         * operation is progress, the operation will go into the queue and will be automatically exectuted
         * when the previous operaitons is finished.
         *
         * If `false`, any requested operations will be ignored, and the `onMixBusy` callback and `mixBusy`
         * event will be fired. If `debug.showWarnings` is enabled, a console warning will also occur.
         *
         * @example <caption>Example: Disable queuing</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         queue: false
         *     }
         * });
         *
         * @name        queue
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.queue = true;

        /**
         * An integer dictacting the maximum number of operations allowed in the queue at
         * any time, when queuing is enabled.
         *
         * @example <caption>Example: Allow a maximum of 5 operations in the queue at any time</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         queueLimit: 5
         *     }
         * });
         *
         * @name        queueLimit
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {number}
         * @default     3
         */

        this.queueLimit = 3;

        /**
         * A boolean dictating whether or not to transition the height and width of the
         * container as elements are filtered in and out. If disabled, the container height
         * will change abruptly.
         *
         * It may be desirable to disable this on mobile devices as the CSS `height` and
         * `width` properties do not receive GPU-acceleration and can therefore cause stuttering.
         *
         * @example <caption>Example 1: Disable the transitioning of the container height and/or width</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         animateResizeContainer: false
         *     }
         * });
         *
         * @example <caption>Example 2: Disable the transitioning of the container height and/or width for mobile devices only</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         animateResizeContainer: myFeatureTests.isMobile ? false : true
         *     }
         * });
         *
         * @name        animateResizeContainer
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.animateResizeContainer = true;

        /**
         * A boolean dictating whether or not to transition the height and width of target
         * elements as they change throughout the course of an animation.
         *
         * This is often a must for flex-box grid layouts where the size of target elements may change
         * depending on final their position in relation to their siblings, or for `.changeLayout()`
         * operations where the size of targets change between layouts.
         *
         * NB: This feature requires additional calculations and manipulation to non-hardware-accelerated
         * properties which may adversely affect performance on slower devices, and is therefore
         * disabled by default.
         *
         * @example <caption>Example: Enable the transitioning of target widths and heights</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         animateResizeTargets: true
         *     }
         * });
         *
         * @name        animateResizeTargets
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.animateResizeTargets = false;

        /**
         * A custom function used to manipulate the order in which the stagger delay is
         * incremented when using the ‘stagger’ effect.
         *
         * When using the 'stagger' effect, the delay applied to each target element is incremented
         * based on its index. You may create a custom function to manipulate the order in which the
         * delay is incremented and create engaging non-linear stagger effects.
         *
         * The function receives the index of the target element as a parameter, and must
         * return an integer which serves as the multiplier for the stagger delay.
         *
         * @example <caption>Example 1: Stagger target elements by column in a 3-column grid</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade stagger(100ms)',
         *         staggerSequence: function(i) {
         *             return i % 3;
         *         }
         *     }
         * });
         *
         * @example <caption>Example 2: Using an algorithm to produce a more complex sequence</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade stagger(100ms)',
         *         staggerSequence: function(i) {
         *             return (2*i) - (5*((i/3) - ((1/3) * (i%3))));
         *         }
         *     }
         * });
         *
         * @name        staggerSequence
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {function}
         * @default     null
         */

        this.staggerSequence = null;

        /**
         * A boolean dictating whether or not to reverse the direction of `translate`
         * and `rotate` transforms for elements being filtered out.
         *
         * It can be used to create carousel-like animations where elements enter and exit
         * from opposite directions. If enabled, the effect `translateX(-100%)` for elements
         * being filtered in would become `translateX(100%)` for targets being filtered out.
         *
         * This functionality can also be achieved by providing seperate effects
         * strings for `config.animation.effectsIn` and `config.animation.effectsOut`.
         *
         * @example <caption>Example: Reverse the desired direction on any translate/rotate effect for targets being filtered out</caption>
         * // Elements being filtered in will be translated from '100%' to '0' while
         * // elements being filtered out will be translated from 0 to '-100%'
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade translateX(100%)',
         *         reverseOut: true,
         *         nudge: false // Disable nudging to create a carousel-like effect
         *     }
         * });
         *
         * @name        reverseOut
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.reverseOut = false;

        /**
         * A boolean dictating whether or not to "nudge" the animation path of targets
         * when they are being filtered in and out simulatenously.
         *
         * This has been the default behavior of MixItUp since version 1, but it
         * may be desirable to disable this effect when filtering directly from
         * one exclusive set of targets to a different exclusive set of targets,
         * to create a carousel-like effect, or a generally more subtle animation.
         *
         * @example <caption>Example: Disable the "nudging" of targets being filtered in and out simulatenously</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         nudge: false
         *     }
         * });
         *
         * @name        nudge
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.nudge = true;

        /**
         * A boolean dictating whether or not to clamp the height of the container while MixItUp's
         * geometry tests are carried out before an operation.
         *
         * To prevent scroll-bar flicker, clamping is turned on by default. But in the case where the
         * height of the container might affect its vertical positioning in the viewport
         * (e.g. a vertically-centered container), this should be turned off to ensure accurate
         * test results and a smooth animation.
         *
         * @example <caption>Example: Disable container height-clamping</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         clampHeight: false
         *     }
         * });
         *
         * @name        clampHeight
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.clampHeight = true;

        /**
         * A boolean dictating whether or not to clamp the width of the container while MixItUp's
         * geometry tests are carried out before an operation.
         *
         * To prevent scroll-bar flicker, clamping is turned on by default. But in the case where the
         * width of the container might affect its horitzontal positioning in the viewport
         * (e.g. a horizontall-centered container), this should be turned off to ensure accurate
         * test results and a smooth animation.
         *
         * @example <caption>Example: Disable container width-clamping</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         clampWidth: false
         *     }
         * });
         *
         * @name        clampWidth
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.clampWidth = true;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigAnimation);

    mixitup.ConfigAnimation.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigAnimation.prototype.constructor = mixitup.ConfigAnimation;

    /**
     * A group of properties relating to the behavior of the Mixer.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        behavior
     * @namespace
     * @public
     * @since       3.1.12
     */

    mixitup.ConfigBehavior = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A boolean dictating whether to allow "live" sorting of the mixer.
         *
         * Because of the expensive nature of sorting, MixItUp makes use of several
         * internal optimizations to skip redundant sorting operations, such as when
         * the newly requested sort command is the same as the active one. The caveat
         * to this optimization is that "live" edits to the value of a target's sorting
         * attribute will be ignored when requesting a re-sort by the same attribute.
         *
         * By setting to `behavior.liveSort` to `true`, the mixer will always re-sort
         * regardless of whether or not the sorting attribute and order have changed.
         *
         * @example <caption>Example: Enabling `liveSort` to allow for re-sorting</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     behavior: {
         *         liveSort: true
         *     },
         *     load: {
         *         sort: 'edited:desc'
         *     }
         * });
         *
         * var target = containerEl.children[3];
         *
         * console.log(target.getAttribute('data-edited')); // '2015-04-24'
         *
         * target.setAttribute('data-edited', '2017-08-10'); // Update the target's edited date
         *
         * mixer.sort('edited:desc')
         *     .then(function(state) {
         *         // The target is now at the top of the list
         *
         *         console.log(state.targets[0] === target); // true
         *     });
         *
         * @name        liveSort
         * @memberof    mixitup.Config.behavior
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.liveSort = false;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigBehavior);

    mixitup.ConfigBehavior.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigBehavior.prototype.constructor = mixitup.ConfigBehavior;

    /**
     * A group of optional callback functions to be invoked at various
     * points within the lifecycle of a mixer operation.
     *
     * Each function is analogous to an event of the same name triggered from the
     * container element, and is invoked immediately after it.
     *
     * All callback functions receive the current `state` object as their first
     * argument, as well as other more specific arguments described below.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        callbacks
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.ConfigCallbacks = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A callback function invoked immediately after any MixItUp operation is requested
         * and before animations have begun.
         *
         * A second `futureState` argument is passed to the function which represents the final
         * state of the mixer once the requested operation has completed.
         *
         * @example <caption>Example: Adding an `onMixStart` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixStart: function(state, futureState) {
         *              console.log('Starting operation...');
         *         }
         *     }
         * });
         *
         * @name        onMixStart
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */

        this.onMixStart = null;

        /**
         * A callback function invoked when a MixItUp operation is requested while another
         * operation is in progress, and the animation queue is full, or queueing
         * is disabled.
         *
         * @example <caption>Example: Adding an `onMixBusy` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixBusy: function(state) {
         *              console.log('Mixer busy');
         *         }
         *     }
         * });
         *
         * @name        onMixBusy
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */

        this.onMixBusy  = null;

        /**
         * A callback function invoked after any MixItUp operation has completed, and the
         * state has been updated.
         *
         * @example <caption>Example: Adding an `onMixEnd` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixEnd: function(state) {
         *              console.log('Operation complete');
         *         }
         *     }
         * });
         *
         * @name        onMixEnd
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */

        this.onMixEnd   = null;

        /**
         * A callback function invoked whenever an operation "fails", i.e. no targets
         * could be found matching the requested filter.
         *
         * @example <caption>Example: Adding an `onMixFail` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixFail: function(state) {
         *              console.log('No items could be found matching the requested filter');
         *         }
         *     }
         * });
         *
         * @name        onMixFail
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */

        this.onMixFail  = null;

        /**
         * A callback function invoked whenever a MixItUp control is clicked, and before its
         * respective operation is requested.
         *
         * The clicked element is assigned to the `this` keyword within the function. The original
         * click event is passed to the function as the second argument, which can be useful if
         * using `<a>` tags as controls where the default behavior needs to be prevented.
         *
         * Returning `false` from the callback will prevent the control click from triggering
         * an operation.
         *
         * @example <caption>Example 1: Adding an `onMixClick` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixClick: function(state, originalEvent) {
         *              console.log('The control "' + this.innerText + '" was clicked');
         *         }
         *     }
         * });
         *
         * @example <caption>Example 2: Using `onMixClick` to manipulate the original click event</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixClick: function(state, originalEvent) {
         *              // Prevent original click event from bubbling up:
         *              originalEvent.stopPropagation();
         *
         *              // Prevent default behavior of clicked element:
         *              originalEvent.preventDefault();
         *         }
         *     }
         * });
         *
         * @example <caption>Example 3: Using `onMixClick` to conditionally cancel operations</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixClick: function(state, originalEvent) {
         *              // Perform some conditional check:
         *
         *              if (myApp.isLoading) {
         *                  // By returning false, we can prevent the control click from triggering an operation.
         *
         *                  return false;
         *              }
         *         }
         *     }
         * });
         *
         * @name        onMixClick
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */

        this.onMixClick = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigCallbacks);

    mixitup.ConfigCallbacks.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigCallbacks.prototype.constructor = mixitup.ConfigCallbacks;

    /**
     * A group of properties relating to clickable control elements.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        controls
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.ConfigControls = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A boolean dictating whether or not controls should be enabled for the mixer instance.
         *
         * If `true` (default behavior), MixItUp will search the DOM for any clickable elements with
         * `data-filter`, `data-sort` or `data-toggle` attributes, and bind them for click events.
         *
         * If `false`, no click handlers will be bound, and all functionality must therefore be performed
         * via the mixer's API methods.
         *
         * If you do not intend to use the default controls, setting this property to `false` will
         * marginally improve the startup time of your mixer instance, and will also prevent any other active
         * mixer instances in the DOM which are bound to controls from controlling the instance.
         *
         * @example <caption>Example: Disabling controls</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         enable: false
         *     }
         * });
         *
         * // With the default controls disabled, we can only control
         * // the mixer via its API methods, e.g.:
         *
         * mixer.filter('.cat-1');
         *
         * @name        enable
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.enable = true;

        /**
         * A boolean dictating whether or not to use event delegation when binding click events
         * to the default controls.
         *
         * If `false` (default behavior), each control button in the DOM will be found and
         * individually bound when a mixer is instantiated, with their corresponding actions
         * cached for performance.
         *
         * If `true`, a single click handler will be applied to the `window` (or container element - see
         * `config.controls.scope`), and any click events triggered by elements with `data-filter`,
         * `data-sort` or `data-toggle` attributes present will be handled as they propagate upwards.
         *
         * If you require a user interface where control buttons may be added, removed, or changed during the
         * lifetime of a mixer, `controls.live` should be set to `true`. There is a marginal but unavoidable
         * performance deficit when using live controls, as the value of each control button must be read
         * from the DOM in real time once the click event has propagated.
         *
         * @example <caption>Example: Setting live controls</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         live: true
         *     }
         * });
         *
         * // Control buttons can now be added, remove and changed without breaking
         * // the mixer's UI
         *
         * @name        live
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.live = false;

        /**
         * A string dictating the "scope" to use when binding or querying the default controls. The available
         * values are `'global'` or `'local'`.
         *
         * When set to `'global'` (default behavior), MixItUp will query the entire document for control buttons
         * to bind, or delegate click events from (see `config.controls.live`).
         *
         * When set to `'local'`, MixItUp will only query (or bind click events to) its own container element.
         * This may be desireable if you require multiple active mixer instances within the same document, with
         * controls that would otherwise intefere with each other if scoped globally.
         *
         * Conversely, if you wish to control multiple instances with a single UI, you would create one
         * set of controls and keep the controls scope of each mixer set to `global`.
         *
         * @example <caption>Example: Setting 'local' scoped controls</caption>
         * var mixerOne = mixitup(containerOne, {
         *     controls: {
         *         scope: 'local'
         *     }
         * });
         *
         * var mixerTwo = mixitup(containerTwo, {
         *     controls: {
         *         scope: 'local'
         *     }
         * });
         *
         * // Both mixers can now exist within the same document with
         * // isolated controls placed within their container elements.
         *
         * @name        scope
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {string}
         * @default     'global'
         */

        this.scope = 'global'; // enum: ['local' ,'global']

        /**
         * A string dictating the type of logic to apply when concatenating the filter selectors of
         * active toggle buttons (i.e. any clickable element with a `data-toggle` attribute).
         *
         * If set to `'or'` (default behavior), selectors will be concatenated together as
         * a comma-seperated list. For example:
         *
         * `'.cat-1, .cat-2'` (shows any elements matching `'.cat-1'` OR `'.cat-2'`)
         *
         * If set to `'and'`, selectors will be directly concatenated together. For example:
         *
         * `'.cat-1.cat-2'` (shows any elements which match both `'.cat-1'` AND `'.cat-2'`)
         *
         * @example <caption>Example: Setting "and" toggle logic</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         toggleLogic: 'and'
         *     }
         * });
         *
         * @name        toggleLogic
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {string}
         * @default     'or'
         */

        this.toggleLogic = 'or'; // enum: ['or', 'and']

        /**
         * A string dictating the filter behavior when all toggles are inactive.
         *
         * When set to `'all'` (default behavior), *all* targets will be shown by default
         * when no toggles are active, or at the moment all active toggles are toggled off.
         *
         * When set to `'none'`, no targets will be shown by default when no toggles are
         * active, or at the moment all active toggles are toggled off.
         *
         * @example <caption>Example 1: Setting the default toggle behavior to `'all'`</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         toggleDefault: 'all'
         *     }
         * });
         *
         * mixer.toggleOn('.cat-2')
         *     .then(function() {
         *         // Deactivate all active toggles
         *
         *         return mixer.toggleOff('.cat-2')
         *     })
         *     .then(function(state) {
         *          console.log(state.activeFilter.selector); // 'all'
         *          console.log(state.totalShow); // 12
         *     });
         *
         * @example <caption>Example 2: Setting the default toggle behavior to `'none'`</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         toggleDefault: 'none'
         *     }
         * });
         *
         * mixer.toggleOn('.cat-2')
         *     .then(function() {
         *         // Deactivate all active toggles
         *
         *         return mixer.toggleOff('.cat-2')
         *     })
         *     .then(function(state) {
         *          console.log(state.activeFilter.selector); // 'none'
         *          console.log(state.totalShow); // 0
         *     });
         *
         * @name        toggleDefault
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {string}
         * @default     'all'
         */

        this.toggleDefault = 'all'; // enum: ['all', 'none']

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigControls);

    mixitup.ConfigControls.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigControls.prototype.constructor = mixitup.ConfigControls;

    /**
     * A group of properties defining the output and structure of class names programmatically
     * added to controls and containers to reflect the state of the mixer.
     *
     * Most commonly, class names are added to controls by MixItUp to indicate that
     * the control is active so that it can be styled accordingly - `'mixitup-control-active'` by default.
     *
     * Using a "BEM" like structure, each classname is broken into the three parts:
     * a block namespace (`'mixitup'`), an element name (e.g. `'control'`), and an optional modifier
     * name (e.g. `'active'`) reflecting the state of the element.
     *
     * By default, each part of the classname is concatenated together using single hyphens as
     * delineators, but this can be easily customised to match the naming convention and style of
     * your project.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        classNames
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigClassNames = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * The "block" portion, or top-level namespace added to the start of any class names created by MixItUp.
         *
         * @example <caption>Example 1: changing the `config.classNames.block` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio'
         *     }
         * });
         *
         * // Active control output: "portfolio-control-active"
         *
         * @example <caption>Example 2: Removing `config.classNames.block`</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: ''
         *     }
         * });
         *
         * // Active control output: "control-active"
         *
         * @name        block
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'mixitup'
         */

        this.block = 'mixitup';

        /**
         * The "element" portion of the class name added to container.
         *
         * @name        elementContainer
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'container'
         */

        this.elementContainer = 'container';

        /**
         * The "element" portion of the class name added to filter controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementFilter` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementFilter: 'filter'
         *     }
         * });
         *
         * // Active filter output: "mixitup-filter-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementFilter` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementFilter: 'filter'
         *     }
         * });
         *
         * // Active filter output: "portfolio-filter-active"
         *
         * @name        elementFilter
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */

        this.elementFilter = 'control';

        /**
         * The "element" portion of the class name added to sort controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementSort` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementSort: 'sort'
         *     }
         * });
         *
         * // Active sort output: "mixitup-sort-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementSort` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementSort: 'sort'
         *     }
         * });
         *
         * // Active sort output: "portfolio-sort-active"
         *
         * @name        elementSort
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */

        this.elementSort = 'control';

        /**
         * The "element" portion of the class name added to multimix controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementMultimix` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementMultimix: 'multimix'
         *     }
         * });
         *
         * // Active multimix output: "mixitup-multimix-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementMultimix` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementSort: 'multimix'
         *     }
         * });
         *
         * // Active multimix output: "portfolio-multimix-active"
         *
         * @name        elementMultimix
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */

        this.elementMultimix = 'control';

        /**
         * The "element" portion of the class name added to toggle controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementToggle` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementToggle: 'toggle'
         *     }
         * });
         *
         * // Active toggle output: "mixitup-toggle-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementToggle` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementToggle: 'toggle'
         *     }
         * });
         *
         * // Active toggle output: "portfolio-toggle-active"
         *
         * @name        elementToggle
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */

        this.elementToggle = 'control';

        /**
         * The "modifier" portion of the class name added to active controls.
         * @name        modifierActive
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'active'
         */

        this.modifierActive = 'active';

        /**
         * The "modifier" portion of the class name added to disabled controls.
         *
         * @name        modifierDisabled
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'disabled'
         */

        this.modifierDisabled = 'disabled';

        /**
         * The "modifier" portion of the class name added to the container when in a "failed" state.
         *
         * @name        modifierFailed
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'failed'
         */

        this.modifierFailed = 'failed';

        /**
         * The delineator used between the "block" and "element" portions of any class name added by MixItUp.
         *
         * If the block portion is ommited by setting it to an empty string, no delineator will be added.
         *
         * @example <caption>Example: changing the delineator to match BEM convention</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         delineatorElement: '__'
         *     }
         * });
         *
         * // example active control output: "mixitup__control-active"
         *
         * @name        delineatorElement
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     '-'
         */

        this.delineatorElement = '-';

        /**
         * The delineator used between the "element" and "modifier" portions of any class name added by MixItUp.
         *
         * If the element portion is ommited by setting it to an empty string, no delineator will be added.
         *
         * @example <caption>Example: changing both delineators to match BEM convention</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         delineatorElement: '__'
         *         delineatorModifier: '--'
         *     }
         * });
         *
         * // Active control output: "mixitup__control--active"
         *
         * @name        delineatorModifier
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     '-'
         */

        this.delineatorModifier = '-';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigClassNames);

    mixitup.ConfigClassNames.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigClassNames.prototype.constructor = mixitup.ConfigClassNames;

    /**
     * A group of properties relating to MixItUp's dataset API.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        data
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigData = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A string specifying the name of the key containing your data model's unique
         * identifier (UID). To use the dataset API, a UID key must be specified and
         * be present and unique on all objects in the dataset you provide to MixItUp.
         *
         * For example, if your dataset is made up of MongoDB documents, the UID
         * key would be `'id'` or `'_id'`.
         *
         * @example <caption>Example: Setting the UID to `'id'`</caption>
         * var mixer = mixitup(containerEl, {
         *     data: {
         *         uidKey: 'id'
         *     }
         * });
         *
         * @name        uidKey
         * @memberof    mixitup.Config.data
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.uidKey = '';

        /**
         * A boolean dictating whether or not MixItUp should "dirty check" each object in
         * your dataset for changes whenever `.dataset()` is called, and re-render any targets
         * for which a change is found.
         *
         * Depending on the complexity of your data model, dirty checking can be expensive
         * and is therefore disabled by default.
         *
         * NB: For changes to be detected, a new immutable instance of the edited model must be
         * provided to mixitup, rather than manipulating properties on the existing instance.
         * If your changes are a result of a DB write and read, you will most likely be calling
         * `.dataset()` with a clean set of objects each time, so this will not be an issue.
         *
         * @example <caption>Example: Enabling dirty checking</caption>
         *
         * var myDataset = [
         *     {
         *         id: 0,
         *         title: "Blog Post Title 0"
         *         ...
         *     },
         *     {
         *         id: 1,
         *         title: "Blog Post Title 1"
         *         ...
         *     }
         * ];
         *
         * // Instantiate a mixer with a pre-loaded dataset, and a target renderer
         * // function defined
         *
         * var mixer = mixitup(containerEl, {
         *     data: {
         *         uidKey: 'id',
         *         dirtyCheck: true
         *     },
         *     load: {
         *         dataset: myDataset
         *     },
         *     render: {
         *         target: function() { ... }
         *     }
         * });
         *
         * // For illustration, we will clone and edit the second object in the dataset.
         * // NB: this would typically be done server-side in response to a DB update,
         * and then re-queried via an API.
         *
         * myDataset[1] = Object.assign({}, myDataset[1]);
         *
         * myDataset[1].title = 'Blog Post Title 11';
         *
         * mixer.dataset(myDataset)
         *    .then(function() {
         *        // the target with ID "1", will be re-rendered reflecting its new title
         *    });
         *
         * @name        dirtyCheck
         * @memberof    mixitup.Config.data
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.dirtyCheck = false;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigData);

    mixitup.ConfigData.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigData.prototype.constructor = mixitup.ConfigData;

    /**
     * A group of properties allowing the toggling of various debug features.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        debug
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigDebug = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A boolean dictating whether or not the mixer instance returned by the
         * `mixitup()` factory function should expose private properties and methods.
         *
         * By default, mixer instances only expose their public API, but enabling
         * debug mode will give you access to various mixer internals which may aid
         * in debugging, or the authoring of extensions.
         *
         * @example <caption>Example: Enabling debug mode</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     debug: {
         *         enable: true
         *     }
         * });
         *
         * // Private properties and methods will now be visible on the mixer instance:
         *
         * console.log(mixer);
         *
         * @name        enable
         * @memberof    mixitup.Config.debug
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.enable = false;

        /**
         * A boolean dictating whether or not warnings should be shown when various
         * common gotchas occur.
         *
         * Warnings are intended to provide insights during development when something
         * occurs that is not a fatal, but may indicate an issue with your integration,
         * and are therefore turned on by default. However, you may wish to disable
         * them in production.
         *
         * @example <caption>Example 1: Disabling warnings</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     debug: {
         *         showWarnings: false
         *     }
         * });
         *
         * @example <caption>Example 2: Disabling warnings based on environment</caption>
         *
         * var showWarnings = myAppConfig.environment === 'development' ? true : false;
         *
         * var mixer = mixitup(containerEl, {
         *     debug: {
         *         showWarnings: showWarnings
         *     }
         * });
         *
         * @name        showWarnings
         * @memberof    mixitup.Config.debug
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.showWarnings = true;

        /**
         * Used for server-side testing only.
         *
         * @private
         * @name        fauxAsync
         * @memberof    mixitup.Config.debug
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.fauxAsync = false;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigDebug);

    mixitup.ConfigDebug.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigDebug.prototype.constructor = mixitup.ConfigDebug;

    /**
     * A group of properties relating to the layout of the container.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        layout
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigLayout = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A boolean dictating whether or not mixitup should query all descendants
         * of the container for targets, or only immediate children.
         *
         * By default, mixitup will query all descendants matching the
         * `selectors.target` selector when indexing targets upon instantiation.
         * This allows for targets to be nested inside a sub-container which is
         * useful when ring-fencing targets from locally scoped controls in your
         * markup (see `controls.scope`).
         *
         * However, if you are building a more complex UI requiring the nesting
         * of mixers within mixers, you will most likely want to limit targets to
         * immediate children of the container by setting this property to `false`.
         *
         * @example <caption>Example: Restricting targets to immediate children</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         allowNestedTargets: false
         *     }
         * });
         *
         * @name        allowNestedTargets
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.allowNestedTargets = true;

        /**
         * A string specifying an optional class name to apply to the container when in
         * its default state.
         *
         * By changing this class name or adding a class name to the container via the
         * `.changeLayout()` API method, the CSS layout of the container can be changed,
         * and MixItUp will attemp to gracefully animate the container and its targets
         * between states.
         *
         * @example <caption>Example 1: Specifying a container class name</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         containerClassName: 'grid'
         *     }
         * });
         *
         * @example <caption>Example 2: Changing the default class name with `.changeLayout()`</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         containerClassName: 'grid'
         *     }
         * });
         *
         * mixer.changeLayout('list')
         *     .then(function(state) {
         *          console.log(state.activeContainerClass); // "list"
         *     });
         *
         * @name        containerClassName
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.containerClassName = '';

        /**
         * A reference to a non-target sibling element after which to insert targets
         * when there are no targets in the container.
         *
         * @example <caption>Example: Setting a `siblingBefore` reference element</caption>
         *
         * var addButton = containerEl.querySelector('button');
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         siblingBefore: addButton
         *     }
         * });
         *
         * @name        siblingBefore
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {HTMLElement}
         * @default     null
         */

        this.siblingBefore = null;

        /**
         * A reference to a non-target sibling element before which to insert targets
         * when there are no targets in the container.
         *
         * @example <caption>Example: Setting an `siblingAfter` reference element</caption>
         *
         * var gap = containerEl.querySelector('.gap');
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         siblingAfter: gap
         *     }
         * });
         *
         * @name        siblingAfter
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {HTMLElement}
         * @default     null
         */

        this.siblingAfter = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigLayout);

    mixitup.ConfigLayout.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigLayout.prototype.constructor = mixitup.ConfigLayout;

    /**
     * A group of properties defining the initial state of the mixer on load (instantiation).
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        load
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.ConfigLoad = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A string defining any filtering to be statically applied to the mixer on load.
         * As per the `.filter()` API, this can be any valid selector string, or the
         * values `'all'` or `'none'`.
         *
         * @example <caption>Example 1: Defining an initial filter selector to be applied on load</caption>
         *
         * // The mixer will show only those targets matching '.category-a' on load.
         *
         * var mixer = mixitup(containerEl, {
         *     load: {
         *         filter: '.category-a'
         *     }
         * });
         *
         * @example <caption>Example 2: Hiding all targets on load</caption>
         *
         * // The mixer will show hide all targets on load.
         *
         * var mixer = mixitup(containerEl, {
         *     load: {
         *         filter: 'none'
         *     }
         * });
         *
         * @name        filter
         * @memberof    mixitup.Config.load
         * @instance
         * @type        {string}
         * @default     'all'
         */

        this.filter = 'all';

        /**
         * A string defining any sorting to be statically applied to the mixer on load.
         * As per the `.sort()` API, this should be a valid "sort string" made up of
         * an attribute to sort by (or `'default'`) followed by an optional sorting
         * order, or the value `'random'`;
         *
         * @example <caption>Example: Defining sorting to be applied on load</caption>
         *
         * // The mixer will sort the container by the value of the `data-published-date`
         * // attribute, in descending order.
         *
         * var mixer = mixitup(containerEl, {
         *     load: {
         *         sort: 'published-date:desc'
         *     }
         * });
         *
         * @name        sort
         * @memberof    mixitup.Config.load
         * @instance
         * @type        {string}
         * @default     'default:asc'
         */

        this.sort = 'default:asc';

        /**
         * An array of objects representing the underlying data of any pre-rendered targets,
         * when using the `.dataset()` API.
         *
         * NB: If targets are pre-rendered when the mixer is instantiated, this must be set.
         *
         * @example <caption>Example: Defining the initial underyling dataset</caption>
         *
         * var myDataset = [
         *     {
         *         id: 0,
         *         title: "Blog Post Title 0",
         *         ...
         *     },
         *     {
         *         id: 1,
         *         title: "Blog Post Title 1",
         *         ...
         *     }
         * ];
         *
         * var mixer = mixitup(containerEl, {
         *     data: {
         *         uidKey: 'id'
         *     },
         *     load: {
         *         dataset: myDataset
         *     }
         * });
         *
         * @name        dataset
         * @memberof    mixitup.Config.load
         * @instance
         * @type        {Array.<object>}
         * @default     null
         */

        this.dataset = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigLoad);

    mixitup.ConfigLoad.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigLoad.prototype.constructor = mixitup.ConfigLoad;

    /**
     * A group of properties defining the selectors used to query elements within a mixitup container.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        selectors
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigSelectors = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A selector string used to query and index target elements within the container.
         *
         * By default, the class selector `'.mix'` is used, but this can be changed to an
         * attribute or element selector to match the style of your project.
         *
         * @example <caption>Example 1: Changing the target selector</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     selectors: {
         *         target: '.portfolio-item'
         *     }
         * });
         *
         * @example <caption>Example 2: Using an attribute selector as a target selector</caption>
         *
         * // The mixer will search for any children with the attribute `data-ref="mix"`
         *
         * var mixer = mixitup(containerEl, {
         *     selectors: {
         *         target: '[data-ref="mix"]'
         *     }
         * });
         *
         * @name        target
         * @memberof    mixitup.Config.selectors
         * @instance
         * @type        {string}
         * @default     '.mix'
         */

        this.target = '.mix';

        /**
         * A optional selector string used to add further specificity to the querying of control elements,
         * in addition to their mandatory data attribute (e.g. `data-filter`, `data-toggle`, `data-sort`).
         *
         * This can be used if other elements in your document must contain the above attributes
         * (e.g. for use in third-party scripts), and would otherwise interfere with MixItUp. Adding
         * an additional `control` selector of your choice allows MixItUp to restrict event handling
         * to only those elements matching the defined selector.
         *
         * @name        control
         * @memberof    mixitup.Config.selectors
         * @instance
         * @type        {string}
         * @default     ''
         *
         * @example <caption>Example 1: Adding a `selectors.control` selector</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     selectors: {
         *         control: '.mixitup-control'
         *     }
         * });
         *
         * // Will not be handled:
         * // <button data-filter=".category-a"></button>
         *
         * // Will be handled:
         * // <button class="mixitup-control" data-filter=".category-a"></button>
         */

        this.control = '';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigSelectors);

    mixitup.ConfigSelectors.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigSelectors.prototype.constructor = mixitup.ConfigSelectors;

    /**
     * A group of optional render functions for creating and updating elements.
     *
     * All render functions receive a data object, and should return a valid HTML string.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        render
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigRender = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A function returning an HTML string representing a target element, or a reference to a
         * single DOM element.
         *
         * The function is invoked as part of the `.dataset()` API, whenever a new item is added
         * to the dataset, or an item in the dataset changes (if `dataset.dirtyCheck` is enabled).
         *
         * The function receives the relevant dataset item as its first parameter.
         *
         * @example <caption>Example 1: Using string concatenation</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: function(item) {
         *             return (
         *                 '&lt;div class="mix"&gt;' +
         *                     '&lt;h2&gt;' + item.title + '&lt;/h2&gt;' +
         *                 '&lt;/div&gt;'
         *             );
         *         }
         *     }
         * });
         *
         * @example <caption>Example 2: Using an ES2015 template literal</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: function(item) {
         *             return (
         *                 `&lt;div class="mix"&gt;
         *                     &lt;h2&gt;${item.title}&lt;/h2&gt;
         *                  &lt;/div&gt;`
         *             );
         *         }
         *     }
         * });
         *
         * @example <caption>Example 3: Using a Handlebars template</caption>
         *
         * var targetTemplate = Handlebars.compile('&lt;div class="mix"&gt;&lt;h2&gt;{{title}}&lt;/h2&gt;&lt;/div&gt;');
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: targetTemplate
         *     }
         * });
         *
         * @example <caption>Example 4: Returning a DOM element</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: function(item) {
         *              // Create a single element using your framework's built-in renderer
         *
         *              var el = ...
         *
         *              return el;
         *         }
         *     }
         * });
         *
         * @name        target
         * @memberof    mixitup.Config.render
         * @instance
         * @type        {function}
         * @default     'null'
         */

        this.target = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigRender);

    mixitup.ConfigRender.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigRender.prototype.constructor = mixitup.ConfigRender;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.ConfigTemplates = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigTemplates);

    mixitup.ConfigTemplates.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigTemplates.prototype.constructor = mixitup.ConfigTemplates;

    /**
     * `mixitup.Config` is an interface used for customising the functionality of a
     * mixer instance. It is organised into several semantically distinct sub-objects,
     * each one pertaining to a particular aspect of MixItUp functionality.
     *
     * An object literal containing any or all of the available properies,
     * known as the "configuration object", can be passed as the second parameter to
     * the `mixitup` factory function when creating a mixer instance to customise its
     * functionality as needed.
     *
     * If no configuration object is passed, the mixer instance will take on the default
     * configuration values detailed below.
     *
     * @example <caption>Example 1: Creating and passing the configuration object</caption>
     * // Create a configuration object with desired values
     *
     * var config = {
     *     animation: {
     *         enable: false
     *     },
     *     selectors: {
     *         target: '.item'
     *     }
     * };
     *
     * // Pass the configuration object to the mixitup factory function
     *
     * var mixer = mixitup(containerEl, config);
     *
     * @example <caption>Example 2: Passing the configuration object inline</caption>
     * // Typically, the configuration object is passed inline for brevity.
     *
     * var mixer = mixitup(containerEl, {
     *     controls: {
     *         live: true,
     *         toggleLogic: 'and'
     *     }
     * });
     *
     *
     * @constructor
     * @memberof    mixitup
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.Config = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.animation          = new mixitup.ConfigAnimation();
        this.behavior           = new mixitup.ConfigBehavior();
        this.callbacks          = new mixitup.ConfigCallbacks();
        this.controls           = new mixitup.ConfigControls();
        this.classNames         = new mixitup.ConfigClassNames();
        this.data               = new mixitup.ConfigData();
        this.debug              = new mixitup.ConfigDebug();
        this.layout             = new mixitup.ConfigLayout();
        this.load               = new mixitup.ConfigLoad();
        this.selectors          = new mixitup.ConfigSelectors();
        this.render             = new mixitup.ConfigRender();
        this.templates          = new mixitup.ConfigTemplates();

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Config);

    mixitup.Config.prototype = Object.create(mixitup.Base.prototype);

    mixitup.Config.prototype.constructor = mixitup.Config;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.MixerDom = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.document               = null;
        this.body                   = null;
        this.container              = null;
        this.parent                 = null;
        this.targets                = [];

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.MixerDom);

    mixitup.MixerDom.prototype = Object.create(mixitup.Base.prototype);

    mixitup.MixerDom.prototype.constructor = mixitup.MixerDom;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.UiClassNames = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.base       = '';
        this.active     = '';
        this.disabled   = '';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.UiClassNames);

    mixitup.UiClassNames.prototype = Object.create(mixitup.Base.prototype);

    mixitup.UiClassNames.prototype.constructor = mixitup.UiClassNames;

    /**
     * An object into which all arbitrary arguments sent to '.dataset()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandDataset = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.dataset = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandDataset);

    mixitup.CommandDataset.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandDataset.prototype.constructor = mixitup.CommandDataset;

    /**
     * An object into which all arbitrary arguments sent to '.multimix()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandMultimix = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.filter       = null;
        this.sort         = null;
        this.insert       = null;
        this.remove       = null;
        this.changeLayout = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandMultimix);

    mixitup.CommandMultimix.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandMultimix.prototype.constructor = mixitup.CommandMultimix;

    /**
     * An object into which all arbitrary arguments sent to '.filter()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandFilter = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.selector   = '';
        this.collection = null;
        this.action     = 'show'; // enum: ['show', 'hide']

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandFilter);

    mixitup.CommandFilter.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandFilter.prototype.constructor = mixitup.CommandFilter;

    /**
     * An object into which all arbitrary arguments sent to '.sort()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandSort = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.sortString = '';
        this.attribute  = '';
        this.order      = 'asc';
        this.collection = null;
        this.next       = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandSort);

    mixitup.CommandSort.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandSort.prototype.constructor = mixitup.CommandSort;

    /**
     * An object into which all arbitrary arguments sent to '.insert()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandInsert = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.index      = 0;
        this.collection = [];
        this.position   = 'before'; // enum: ['before', 'after']
        this.sibling    = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandInsert);

    mixitup.CommandInsert.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandInsert.prototype.constructor = mixitup.CommandInsert;

    /**
     * An object into which all arbitrary arguments sent to '.remove()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandRemove = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.targets    = [];
        this.collection = [];

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandRemove);

    mixitup.CommandRemove.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandRemove.prototype.constructor = mixitup.CommandRemove;

    /**
     * An object into which all arbitrary arguments sent to '.changeLayout()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandChangeLayout = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.containerClassName = '';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandChangeLayout);

    mixitup.CommandChangeLayout.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandChangeLayout.prototype.constructor = mixitup.CommandChangeLayout;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     * @param       {string}        type
     * @param       {string}        selector
     * @param       {boolean}       [live]
     * @param       {string}        [parent]
     *     An optional string representing the name of the mixer.dom property containing a reference to a parent element.
     */

    mixitup.ControlDefinition = function(type, selector, live, parent) {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.type    = type;
        this.selector  = selector;
        this.live      = live || false;
        this.parent    = parent || '';

        this.callActions('afterConstruct');

        h.freeze(this);
        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ControlDefinition);

    mixitup.ControlDefinition.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ControlDefinition.prototype.constructor = mixitup.ControlDefinition;

    mixitup.controlDefinitions = [];

    mixitup.controlDefinitions.push(new mixitup.ControlDefinition('multimix', '[data-filter][data-sort]'));
    mixitup.controlDefinitions.push(new mixitup.ControlDefinition('filter', '[data-filter]'));
    mixitup.controlDefinitions.push(new mixitup.ControlDefinition('sort', '[data-sort]'));
    mixitup.controlDefinitions.push(new mixitup.ControlDefinition('toggle', '[data-toggle]'));

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Control = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.el         = null;
        this.selector   = '';
        this.bound      = [];
        this.pending    = -1;
        this.type       = '';
        this.status     = 'inactive'; // enum: ['inactive', 'active', 'disabled', 'live']
        this.filter     = '';
        this.sort       = '';
        this.canDisable = false;
        this.handler    = null;
        this.classNames = new mixitup.UiClassNames();

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Control);

    mixitup.Control.prototype = Object.create(mixitup.Base.prototype);

    h.extend(mixitup.Control.prototype,
    /** @lends mixitup.Control */
    {
        constructor: mixitup.Control,

        /**
         * @private
         * @param {HTMLElement} el
         * @param {string}      type
         * @param {string}      selector
         */

        init: function(el, type, selector) {
            var self = this;

            this.callActions('beforeInit', arguments);

            self.el         = el;
            self.type       = type;
            self.selector   = selector;

            if (self.selector) {
                self.status = 'live';
            } else {
                self.canDisable = typeof self.el.disable === 'boolean';

                switch (self.type) {
                    case 'filter':
                        self.filter = self.el.getAttribute('data-filter');

                        break;
                    case 'toggle':
                        self.filter = self.el.getAttribute('data-toggle');

                        break;
                    case 'sort':
                        self.sort   = self.el.getAttribute('data-sort');

                        break;
                    case 'multimix':
                        self.filter = self.el.getAttribute('data-filter');
                        self.sort   = self.el.getAttribute('data-sort');

                        break;
                }
            }

            self.bindClick();

            mixitup.controls.push(self);

            this.callActions('afterInit', arguments);
        },

        /**
         * @private
         * @param  {mixitup.Mixer} mixer
         * @return {boolean}
         */

        isBound: function(mixer) {
            var self    = this,
                isBound = false;

            this.callActions('beforeIsBound', arguments);

            isBound = self.bound.indexOf(mixer) > -1;

            return self.callFilters('afterIsBound', isBound, arguments);
        },

        /**
         * @private
         * @param  {mixitup.Mixer} mixer
         * @return {void}
         */

        addBinding: function(mixer) {
            var self = this;

            this.callActions('beforeAddBinding', arguments);

            if (!self.isBound()) {
                self.bound.push(mixer);
            }

            this.callActions('afterAddBinding', arguments);
        },

        /**
         * @private
         * @param  {mixitup.Mixer} mixer
         * @return {void}
         */

        removeBinding: function(mixer) {
            var self        = this,
                removeIndex = -1;

            this.callActions('beforeRemoveBinding', arguments);

            if ((removeIndex = self.bound.indexOf(mixer)) > -1) {
                self.bound.splice(removeIndex, 1);
            }

            if (self.bound.length < 1) {
                // No bindings exist, unbind event click handlers

                self.unbindClick();

                // Remove from `mixitup.controls` list

                removeIndex = mixitup.controls.indexOf(self);

                mixitup.controls.splice(removeIndex, 1);

                if (self.status === 'active') {
                    self.renderStatus(self.el, 'inactive');
                }
            }

            this.callActions('afterRemoveBinding', arguments);
        },

        /**
         * @private
         * @return {void}
         */

        bindClick: function() {
            var self = this;

            this.callActions('beforeBindClick', arguments);

            self.handler = function(e) {
                self.handleClick(e);
            };

            h.on(self.el, 'click', self.handler);

            this.callActions('afterBindClick', arguments);
        },

        /**
         * @private
         * @return {void}
         */

        unbindClick: function() {
            var self = this;

            this.callActions('beforeUnbindClick', arguments);

            h.off(self.el, 'click', self.handler);

            self.handler = null;

            this.callActions('afterUnbindClick', arguments);
        },

        /**
         * @private
         * @param   {MouseEvent} e
         * @return  {void}
         */

        handleClick: function(e) {
            var self        = this,
                button      = null,
                mixer       = null,
                isActive    = false,
                returnValue = void(0),
                command     = {},
                clone       = null,
                commands    = [],
                i           = -1;

            this.callActions('beforeHandleClick', arguments);

            this.pending = 0;

            mixer = self.bound[0];

            if (!self.selector) {
                button = self.el;
            } else {
                button = h.closestParent(e.target, mixer.config.selectors.control + self.selector, true, mixer.dom.document);
            }

            if (!button) {
                self.callActions('afterHandleClick', arguments);

                return;
            }

            switch (self.type) {
                case 'filter':
                    command.filter = self.filter || button.getAttribute('data-filter');

                    break;
                case 'sort':
                    command.sort = self.sort || button.getAttribute('data-sort');

                    break;
                case 'multimix':
                    command.filter  = self.filter || button.getAttribute('data-filter');
                    command.sort    = self.sort || button.getAttribute('data-sort');

                    break;
                case 'toggle':
                    command.filter  = self.filter || button.getAttribute('data-toggle');

                    if (self.status === 'live') {
                        isActive = h.hasClass(button, self.classNames.active);
                    } else {
                        isActive = self.status === 'active';
                    }

                    break;
            }

            for (i = 0; i < self.bound.length; i++) {
                // Create a clone of the command for each bound mixer instance

                clone = new mixitup.CommandMultimix();

                h.extend(clone, command);

                commands.push(clone);
            }

            commands = self.callFilters('commandsHandleClick', commands, arguments);

            self.pending = self.bound.length;

            for (i = 0; mixer = self.bound[i]; i++) {
                command = commands[i];

                if (!command) {
                    // An extension may set a command null to indicate that the click should not be handled

                    continue;
                }

                if (!mixer.lastClicked) {
                    mixer.lastClicked = button;
                }

                mixitup.events.fire('mixClick', mixer.dom.container, {
                    state: mixer.state,
                    instance: mixer,
                    originalEvent: e,
                    control: mixer.lastClicked
                }, mixer.dom.document);

                if (typeof mixer.config.callbacks.onMixClick === 'function') {
                    returnValue = mixer.config.callbacks.onMixClick.call(mixer.lastClicked, mixer.state, e, mixer);

                    if (returnValue === false) {
                        // User has returned `false` from the callback, so do not handle click

                        continue;
                    }
                }

                if (self.type === 'toggle') {
                    isActive ? mixer.toggleOff(command.filter) : mixer.toggleOn(command.filter);
                } else {
                    mixer.multimix(command);
                }
            }

            this.callActions('afterHandleClick', arguments);
        },

        /**
         * @param   {object}          command
         * @param   {Array<string>}   toggleArray
         * @return  {void}
         */

        update: function(command, toggleArray) {
            var self    = this,
                actions = new mixitup.CommandMultimix();

            self.callActions('beforeUpdate', arguments);

            self.pending--;

            self.pending = Math.max(0, self.pending);

            if (self.pending > 0) return;

            if (self.status === 'live') {
                // Live control (status unknown)

                self.updateLive(command, toggleArray);
            } else {
                // Static control

                actions.sort    = self.sort;
                actions.filter  = self.filter;

                self.callFilters('actionsUpdate', actions, arguments);

                self.parseStatusChange(self.el, command, actions, toggleArray);
            }

            self.callActions('afterUpdate', arguments);
        },

        /**
         * @param   {mixitup.CommandMultimix} command
         * @param   {Array<string>}           toggleArray
         * @return  {void}
         */

        updateLive: function(command, toggleArray) {
            var self            = this,
                controlButtons  = null,
                actions         = null,
                button          = null,
                i               = -1;

            self.callActions('beforeUpdateLive', arguments);

            if (!self.el) return;

            controlButtons = self.el.querySelectorAll(self.selector);

            for (i = 0; button = controlButtons[i]; i++) {
                actions = new mixitup.CommandMultimix();

                switch (self.type) {
                    case 'filter':
                        actions.filter = button.getAttribute('data-filter');

                        break;
                    case 'sort':
                        actions.sort = button.getAttribute('data-sort');

                        break;
                    case 'multimix':
                        actions.filter  = button.getAttribute('data-filter');
                        actions.sort    = button.getAttribute('data-sort');

                        break;
                    case 'toggle':
                        actions.filter  = button.getAttribute('data-toggle');

                        break;
                }

                actions = self.callFilters('actionsUpdateLive', actions, arguments);

                self.parseStatusChange(button, command, actions, toggleArray);
            }

            self.callActions('afterUpdateLive', arguments);
        },

        /**
         * @param   {HTMLElement}             button
         * @param   {mixitup.CommandMultimix} command
         * @param   {mixitup.CommandMultimix} actions
         * @param   {Array<string>}           toggleArray
         * @return  {void}
         */

        parseStatusChange: function(button, command, actions, toggleArray) {
            var self    = this,
                alias   = '',
                toggle  = '',
                i       = -1;

            self.callActions('beforeParseStatusChange', arguments);

            switch (self.type) {
                case 'filter':
                    if (command.filter === actions.filter) {
                        self.renderStatus(button, 'active');
                    } else {
                        self.renderStatus(button, 'inactive');
                    }

                    break;
                case 'multimix':
                    if (command.sort === actions.sort && command.filter === actions.filter) {
                        self.renderStatus(button, 'active');
                    } else {
                        self.renderStatus(button, 'inactive');
                    }

                    break;
                case 'sort':
                    if (command.sort.match(/:asc/g)) {
                        alias = command.sort.replace(/:asc/g, '');
                    }

                    if (command.sort === actions.sort || alias === actions.sort) {
                        self.renderStatus(button, 'active');
                    } else {
                        self.renderStatus(button, 'inactive');
                    }

                    break;
                case 'toggle':
                    if (toggleArray.length < 1) self.renderStatus(button, 'inactive');

                    if (command.filter === actions.filter) {
                        self.renderStatus(button, 'active');
                    }

                    for (i = 0; i < toggleArray.length; i++) {
                        toggle = toggleArray[i];

                        if (toggle === actions.filter) {
                            // Button matches one active toggle

                            self.renderStatus(button, 'active');

                            break;
                        }

                        self.renderStatus(button, 'inactive');
                    }

                    break;
            }

            self.callActions('afterParseStatusChange', arguments);
        },

        /**
         * @param   {HTMLElement}   button
         * @param   {string}        status
         * @return  {void}
         */

        renderStatus: function(button, status) {
            var self = this;

            self.callActions('beforeRenderStatus', arguments);

            switch (status) {
                case 'active':
                    h.addClass(button, self.classNames.active);
                    h.removeClass(button, self.classNames.disabled);

                    if (self.canDisable) self.el.disabled = false;

                    break;
                case 'inactive':
                    h.removeClass(button, self.classNames.active);
                    h.removeClass(button, self.classNames.disabled);

                    if (self.canDisable) self.el.disabled = false;

                    break;
                case 'disabled':
                    if (self.canDisable) self.el.disabled = true;

                    h.addClass(button, self.classNames.disabled);
                    h.removeClass(button, self.classNames.active);

                    break;
            }

            if (self.status !== 'live') {
                // Update the control's status propery if not live

                self.status = status;
            }

            self.callActions('afterRenderStatus', arguments);
        }
    });

    mixitup.controls = [];

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.StyleData = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.x              = 0;
        this.y              = 0;
        this.top            = 0;
        this.right          = 0;
        this.bottom         = 0;
        this.left           = 0;
        this.width          = 0;
        this.height         = 0;
        this.marginRight    = 0;
        this.marginBottom   = 0;
        this.opacity        = 0;
        this.scale          = new mixitup.TransformData();
        this.translateX     = new mixitup.TransformData();
        this.translateY     = new mixitup.TransformData();
        this.translateZ     = new mixitup.TransformData();
        this.rotateX        = new mixitup.TransformData();
        this.rotateY        = new mixitup.TransformData();
        this.rotateZ        = new mixitup.TransformData();

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.StyleData);

    mixitup.StyleData.prototype = Object.create(mixitup.Base.prototype);

    mixitup.StyleData.prototype.constructor = mixitup.StyleData;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.TransformData = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.value  = 0;
        this.unit   = '';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.TransformData);

    mixitup.TransformData.prototype = Object.create(mixitup.Base.prototype);

    mixitup.TransformData.prototype.constructor = mixitup.TransformData;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.TransformDefaults = function() {
        mixitup.StyleData.apply(this);

        this.callActions('beforeConstruct');

        this.scale.value        = 0.01;
        this.scale.unit         = '';

        this.translateX.value   = 20;
        this.translateX.unit    = 'px';

        this.translateY.value   = 20;
        this.translateY.unit    = 'px';

        this.translateZ.value   = 20;
        this.translateZ.unit    = 'px';

        this.rotateX.value      = 90;
        this.rotateX.unit       = 'deg';

        this.rotateY.value      = 90;
        this.rotateY.unit       = 'deg';

        this.rotateX.value      = 90;
        this.rotateX.unit       = 'deg';

        this.rotateZ.value      = 180;
        this.rotateZ.unit       = 'deg';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.TransformDefaults);

    mixitup.TransformDefaults.prototype = Object.create(mixitup.StyleData.prototype);

    mixitup.TransformDefaults.prototype.constructor = mixitup.TransformDefaults;

    /**
     * @private
     * @static
     * @since   3.0.0
     * @type    {mixitup.TransformDefaults}
     */

    mixitup.transformDefaults = new mixitup.TransformDefaults();

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.EventDetail = function() {
        this.state          = null;
        this.futureState    = null;
        this.instance       = null;
        this.originalEvent  = null;
    };

    /**
     * The `mixitup.Events` class contains all custom events dispatched by MixItUp at various
     * points within the lifecycle of a mixer operation.
     *
     * Each event is analogous to the callback function of the same name defined in
     * the `callbacks` configuration object, and is triggered immediately before it.
     *
     * Events are always triggered from the container element on which MixItUp is instantiated
     * upon.
     *
     * As with any event, registered event handlers receive the event object as a parameter
     * which includes a `detail` property containting references to the current `state`,
     * the `mixer` instance, and other event-specific properties described below.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @public
     * @since       3.0.0
     */

    mixitup.Events = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A custom event triggered immediately after any MixItUp operation is requested
         * and before animations have begun.
         *
         * The `mixStart` event also exposes a `futureState` property via the
         * `event.detail` object, which represents the final state of the mixer once
         * the requested operation has completed.
         *
         * @name        mixStart
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */

        this.mixStart = null;

        /**
         * A custom event triggered when a MixItUp operation is requested while another
         * operation is in progress, and the animation queue is full, or queueing
         * is disabled.
         *
         * @name        mixBusy
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */

        this.mixBusy = null;

        /**
         * A custom event triggered after any MixItUp operation has completed, and the
         * state has been updated.
         *
         * @name        mixEnd
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */

        this.mixEnd = null;

        /**
         * A custom event triggered whenever a filter operation "fails", i.e. no targets
         * could be found matching the requested filter.
         *
         * @name        mixFail
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */

        this.mixFail = null;

        /**
         * A custom event triggered whenever a MixItUp control is clicked, and before its
         * respective operation is requested.
         *
         * This event also exposes an `originalEvent` property via the `event.detail`
         * object, which holds a reference to the original click event.
         *
         * @name        mixClick
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */

        this.mixClick = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Events);

    mixitup.Events.prototype = Object.create(mixitup.Base.prototype);

    mixitup.Events.prototype.constructor = mixitup.Events;

    /**
     * @private
     * @param   {string}      eventType
     * @param   {Element}     el
     * @param   {object}      detail
     * @param   {Document}    [doc]
     */

    mixitup.Events.prototype.fire = function(eventType, el, detail, doc) {
        var self        = this,
            event       = null,
            eventDetail = new mixitup.EventDetail();

        self.callActions('beforeFire', arguments);

        if (typeof self[eventType] === 'undefined') {
            throw new Error('Event type "' + eventType + '" not found.');
        }

        eventDetail.state = new mixitup.State();

        h.extend(eventDetail.state, detail.state);

        if (detail.futureState) {
            eventDetail.futureState = new mixitup.State();

            h.extend(eventDetail.futureState, detail.futureState);
        }

        eventDetail.instance = detail.instance;

        if (detail.originalEvent) {
            eventDetail.originalEvent = detail.originalEvent;
        }

        event = h.getCustomEvent(eventType, eventDetail, doc);

        self.callFilters('eventFire', event, arguments);

        el.dispatchEvent(event);
    };

    // Asign a singleton instance to `mixitup.events`:

    mixitup.events = new mixitup.Events();

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.QueueItem = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.args           = [];
        this.instruction    = null;
        this.triggerElement = null;
        this.deferred       = null;
        this.isToggling     = false;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.QueueItem);

    mixitup.QueueItem.prototype = Object.create(mixitup.Base.prototype);

    mixitup.QueueItem.prototype.constructor = mixitup.QueueItem;

    /**
     * The `mixitup.Mixer` class is used to hold discreet, user-configured
     * instances of MixItUp on a provided container element.
     *
     * Mixer instances are returned whenever the `mixitup()` factory function is called,
     * which expose a range of methods enabling API-based filtering, sorting,
     * insertion, removal and more.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @public
     * @since       3.0.0
     */

    mixitup.Mixer = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.config            = new mixitup.Config();

        this.id                = '';

        this.isBusy            = false;
        this.isToggling        = false;
        this.incPadding        = true;

        this.controls          = [];
        this.targets           = [];
        this.origOrder         = [];
        this.cache             = {};

        this.toggleArray       = [];

        this.targetsMoved      = 0;
        this.targetsImmovable  = 0;
        this.targetsBound      = 0;
        this.targetsDone       = 0;

        this.staggerDuration   = 0;
        this.effectsIn         = null;
        this.effectsOut        = null;
        this.transformIn       = [];
        this.transformOut      = [];
        this.queue             = [];

        this.state             = null;
        this.lastOperation     = null;
        this.lastClicked       = null;
        this.userCallback      = null;
        this.userDeferred      = null;

        this.dom               = new mixitup.MixerDom();

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Mixer);

    mixitup.Mixer.prototype = Object.create(mixitup.Base.prototype);

    h.extend(mixitup.Mixer.prototype,
    /** @lends mixitup.Mixer */
    {
        constructor: mixitup.Mixer,

        /**
         * @private
         * @instance
         * @since 3.0.0
         * @param {HTMLElement} container
         * @param {HTMLElement} document
         * @param {string}      id
         * @param {object}      [config]
         */

        attach: function(container, document, id, config) {
            var self    = this,
                target  = null,
                i       = -1;

            self.callActions('beforeAttach', arguments);

            self.id = id;

            if (config) {
                h.extend(self.config, config, true, true);
            }

            self.sanitizeConfig();

            self.cacheDom(container, document);

            if (self.config.layout.containerClassName) {
                h.addClass(self.dom.container, self.config.layout.containerClassName);
            }

            if (!mixitup.features.has.transitions) {
                self.config.animation.enable = false;
            }

            if (typeof window.console === 'undefined') {
                self.config.debug.showWarnings = false;
            }

            if (self.config.data.uidKey) {
                // If the dataset API is in use, force disable controls

                self.config.controls.enable = false;
            }

            self.indexTargets();

            self.state = self.getInitialState();

            for (i = 0; target = self.lastOperation.toHide[i]; i++) {
                target.hide();
            }

            if (self.config.controls.enable) {
                self.initControls();

                self.buildToggleArray(null, self.state);

                self.updateControls({
                    filter: self.state.activeFilter,
                    sort: self.state.activeSort
                });
            }

            self.parseEffects();

            self.callActions('afterAttach', arguments);
        },

        /**
         * @private
         * @instance
         * @since 3.0.0
         * @return {void}
         */

        sanitizeConfig: function() {
            var self = this;

            self.callActions('beforeSanitizeConfig', arguments);

            // Sanitize enum/string config options

            self.config.controls.scope          = self.config.controls.scope.toLowerCase().trim();
            self.config.controls.toggleLogic    = self.config.controls.toggleLogic.toLowerCase().trim();
            self.config.controls.toggleDefault  = self.config.controls.toggleDefault.toLowerCase().trim();

            self.config.animation.effects       = self.config.animation.effects.trim();

            self.callActions('afterSanitizeConfig', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {mixitup.State}
         */

        getInitialState: function() {
            var self        = this,
                state       = new mixitup.State(),
                operation   = new mixitup.Operation();

            self.callActions('beforeGetInitialState', arguments);

            // Map initial values into a mock state object in order to construct an operation

            state.activeContainerClassName = self.config.layout.containerClassName;

            if (self.config.load.dataset) {
                // Dataset API

                if (!self.config.data.uidKey || typeof self.config.data.uidKey !== 'string') {
                    throw new TypeError(mixitup.messages.errorConfigDataUidKeyNotSet());
                }

                operation.startDataset = operation.newDataset = state.activeDataset = self.config.load.dataset.slice();
                operation.startContainerClassName = operation.newContainerClassName = state.activeContainerClassName;
                operation.show = self.targets.slice();

                state = self.callFilters('stateGetInitialState', state, arguments);
            } else {
                // DOM API

                state.activeFilter              = self.parseFilterArgs([self.config.load.filter]).command;
                state.activeSort                = self.parseSortArgs([self.config.load.sort]).command;
                state.totalTargets              = self.targets.length;

                state = self.callFilters('stateGetInitialState', state, arguments);

                if (
                    state.activeSort.collection || state.activeSort.attribute ||
                    state.activeSort.order === 'random' || state.activeSort.order === 'desc'
                ) {
                    // Sorting on load

                    operation.newSort = state.activeSort;

                    self.sortOperation(operation);

                    self.printSort(false, operation);

                    self.targets = operation.newOrder;
                } else {
                    operation.startOrder = operation.newOrder = self.targets;
                }

                operation.startFilter               = operation.newFilter               = state.activeFilter;
                operation.startSort                 = operation.newSort                 = state.activeSort;
                operation.startContainerClassName   = operation.newContainerClassName   = state.activeContainerClassName;

                if (operation.newFilter.selector === 'all') {
                    operation.newFilter.selector = self.config.selectors.target;
                } else if (operation.newFilter.selector === 'none') {
                    operation.newFilter.selector = '';
                }
            }

            operation = self.callFilters('operationGetInitialState', operation, [state]);

            self.lastOperation = operation;

            if (operation.newFilter) {
                self.filterOperation(operation);
            }

            state = self.buildState(operation);

            return state;
        },

        /**
         * Caches references of DOM elements neccessary for the mixer's functionality.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {HTMLElement}       el
         * @param   {HTMLHtmlElement}   document
         * @return  {void}
         */

        cacheDom: function(el, document) {
            var self    = this;

            self.callActions('beforeCacheDom', arguments);

            self.dom.document  = document;
            self.dom.body      = self.dom.document.querySelector('body');
            self.dom.container = el;
            self.dom.parent    = el;

            self.callActions('afterCacheDom', arguments);
        },

        /**
         * Indexes all child elements of the mixer matching the `selectors.target`
         * selector, instantiating a mixitup.Target for each one.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */

        indexTargets: function() {
            var self            = this,
                target          = null,
                el              = null,
                dataset         = null,
                i               = -1;

            self.callActions('beforeIndexTargets', arguments);

            self.dom.targets = self.config.layout.allowNestedTargets ?
                self.dom.container.querySelectorAll(self.config.selectors.target) :
                h.children(self.dom.container, self.config.selectors.target, self.dom.document);

            self.dom.targets = h.arrayFromList(self.dom.targets);

            self.targets = [];

            if ((dataset = self.config.load.dataset) && dataset.length !== self.dom.targets.length) {
                throw new Error(mixitup.messages.errorDatasetPrerenderedMismatch());
            }

            if (self.dom.targets.length) {
                for (i = 0; el = self.dom.targets[i]; i++) {
                    target = new mixitup.Target();

                    target.init(el, self, dataset ? dataset[i] : void(0));

                    target.isInDom = true;

                    self.targets.push(target);
                }

                self.dom.parent = self.dom.targets[0].parentElement === self.dom.container ?
                    self.dom.container :
                    self.dom.targets[0].parentElement;
            }

            self.origOrder = self.targets;

            self.callActions('afterIndexTargets', arguments);
        },

        initControls: function() {
            var self                = this,
                definition          = '',
                controlElements     = null,
                el                  = null,
                parent              = null,
                delagators          = null,
                control             = null,
                i                   = -1,
                j                   = -1;

            self.callActions('beforeInitControls', arguments);

            switch (self.config.controls.scope) {
                case 'local':
                    parent = self.dom.container;

                    break;
                case 'global':
                    parent = self.dom.document;

                    break;
                default:
                    throw new Error(mixitup.messages.errorConfigInvalidControlsScope());
            }

            for (i = 0; definition = mixitup.controlDefinitions[i]; i++) {
                if (self.config.controls.live || definition.live) {
                    if (definition.parent) {
                        delagators = self.dom[definition.parent];

                        if (!delagators || delagators.length < 0) continue;

                        if (typeof delagators.length !== 'number') {
                            delagators = [delagators];
                        }
                    } else {
                        delagators = [parent];
                    }

                    for (j = 0; (el = delagators[j]); j++) {
                        control = self.getControl(el,  definition.type, definition.selector);

                        self.controls.push(control);
                    }
                } else {
                    controlElements = parent.querySelectorAll(self.config.selectors.control + definition.selector);

                    for (j = 0; (el = controlElements[j]); j++) {
                        control = self.getControl(el, definition.type, '');

                        if (!control) continue;

                        self.controls.push(control);
                    }
                }
            }

            self.callActions('afterInitControls', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {HTMLElement} el
         * @param   {string}      type
         * @param   {string}      selector
         * @return  {mixitup.Control|null}
         */

        getControl: function(el, type, selector) {
            var self    = this,
                control = null,
                i       = -1;

            self.callActions('beforeGetControl', arguments);

            if (!selector) {
                // Static controls only

                for (i = 0; control = mixitup.controls[i]; i++) {
                    if (control.el === el && control.isBound(self)) {
                        // Control already bound to this mixer (as another type).

                        // NB: This prevents duplicate controls from being registered where a selector
                        // might collide, eg: "[data-filter]" and "[data-filter][data-sort]"

                        return self.callFilters('controlGetControl', null, arguments);
                    } else if (control.el === el && control.type === type && control.selector === selector) {
                        // Another mixer is already using this control, add this mixer as a binding

                        control.addBinding(self);

                        return self.callFilters('controlGetControl', control, arguments);
                    }
                }
            }

            // Create new control

            control = new mixitup.Control();

            control.init(el, type, selector);

            control.classNames.base     = h.getClassname(self.config.classNames, type);
            control.classNames.active   = h.getClassname(self.config.classNames, type, self.config.classNames.modifierActive);
            control.classNames.disabled = h.getClassname(self.config.classNames, type, self.config.classNames.modifierDisabled);

            // Add a reference to this mixer as a binding

            control.addBinding(self);

            return self.callFilters('controlGetControl', control, arguments);
        },

        /**
         * Creates a compound selector by joining the `toggleArray` value as per the
         * defined toggle logic.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @return  {string}
         */

        getToggleSelector: function() {
            var self            = this,
                delineator      = self.config.controls.toggleLogic === 'or' ? ', ' : '',
                toggleSelector  = '';

            self.callActions('beforeGetToggleSelector', arguments);

            self.toggleArray = h.clean(self.toggleArray);

            toggleSelector = self.toggleArray.join(delineator);

            if (toggleSelector === '') {
                toggleSelector = self.config.controls.toggleDefault;
            }

            return self.callFilters('selectorGetToggleSelector', toggleSelector, arguments);
        },

        /**
         * Breaks compound selector strings in an array of discreet selectors,
         * as per the active `controls.toggleLogic` configuration option. Accepts
         * either a dynamic command object, or a state object.
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {object}        [command]
         * @param   {mixitup.State} [state]
         * @return  {void}
         */

        buildToggleArray: function(command, state) {
            var self                    = this,
                activeFilterSelector    = '';

            self.callActions('beforeBuildToggleArray', arguments);

            if (command && command.filter) {
                activeFilterSelector = command.filter.selector.replace(/\s/g, '');
            } else if (state) {
                activeFilterSelector = state.activeFilter.selector.replace(/\s/g, '');
            } else {
                return;
            }

            if (activeFilterSelector === self.config.selectors.target || activeFilterSelector === 'all') {
                activeFilterSelector = '';
            }

            if (self.config.controls.toggleLogic === 'or') {
                self.toggleArray = activeFilterSelector.split(',');
            } else {
                self.toggleArray = self.splitCompoundSelector(activeFilterSelector);
            }

            self.toggleArray = h.clean(self.toggleArray);

            self.callActions('afterBuildToggleArray', arguments);
        },

        /**
         * Takes a compound selector (e.g. `.cat-1.cat-2`, `[data-cat="1"][data-cat="2"]`)
         * and breaks into its individual selectors.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string} compoundSelector
         * @return  {string[]}
         */

        splitCompoundSelector: function(compoundSelector) {
            // Break at a `.` or `[`, capturing the delineator

            var partials    = compoundSelector.split(/([\.\[])/g),
                toggleArray = [],
                selector    = '',
                i           = -1;

            if (partials[0] === '') {
                partials.shift();
            }

            for (i = 0; i < partials.length; i++) {
                if (i % 2 === 0) {
                    selector = '';
                }

                selector += partials[i];

                if (i % 2 !== 0) {
                    toggleArray.push(selector);
                }
            }

            return toggleArray;
        },

        /**
         * Updates controls to their active/inactive state based on the command or
         * current state of the mixer.
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {object} command
         * @return  {void}
         */

        updateControls: function(command) {
            var self    = this,
                control = null,
                output  = new mixitup.CommandMultimix(),
                i       = -1;

            self.callActions('beforeUpdateControls', arguments);

            // Sanitise to defaults

            if (command.filter) {
                output.filter = command.filter.selector;
            } else {
                output.filter = self.state.activeFilter.selector;
            }

            if (command.sort) {
                output.sort = self.buildSortString(command.sort);
            } else {
                output.sort = self.buildSortString(self.state.activeSort);
            }

            if (output.filter === self.config.selectors.target) {
                output.filter = 'all';
            }

            if (output.filter === '') {
                output.filter = 'none';
            }

            h.freeze(output);

            for (i = 0; control = self.controls[i]; i++) {
                control.update(output, self.toggleArray);
            }

            self.callActions('afterUpdateControls', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.CommandSort}   command
         * @return  {string}
         */

        buildSortString: function(command) {
            var self    = this;
            var output  = '';

            output += command.sortString;

            if (command.next) {
                output += ' ' + self.buildSortString(command.next);
            }

            return output;
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {object}        command
         * @param   {Operation}     operation
         * @return  {Promise.<mixitup.State>}
         */

        insertTargets: function(command, operation) {
            var self            = this,
                nextSibling     = null,
                insertionIndex  = -1,
                frag            = null,
                target          = null,
                el              = null,
                i               = -1;

            self.callActions('beforeInsertTargets', arguments);

            if (typeof command.index === 'undefined') command.index = 0;

            nextSibling = self.getNextSibling(command.index, command.sibling, command.position);
            frag        = self.dom.document.createDocumentFragment();

            if (nextSibling) {
                insertionIndex = h.index(nextSibling, self.config.selectors.target);
            } else {
                insertionIndex = self.targets.length;
            }

            if (command.collection) {
                for (i = 0; el = command.collection[i]; i++) {
                    if (self.dom.targets.indexOf(el) > -1) {
                        throw new Error(mixitup.messages.errorInsertPreexistingElement());
                    }

                    // Ensure elements are hidden when they are added to the DOM, so they can
                    // be animated in gracefully

                    el.style.display = 'none';

                    frag.appendChild(el);
                    frag.appendChild(self.dom.document.createTextNode(' '));

                    if (!h.isElement(el, self.dom.document) || !el.matches(self.config.selectors.target)) continue;

                    target = new mixitup.Target();

                    target.init(el, self);

                    target.isInDom = true;

                    self.targets.splice(insertionIndex, 0, target);

                    insertionIndex++;
                }

                self.dom.parent.insertBefore(frag, nextSibling);
            }

            // Since targets have been added, the original order must be updated

            operation.startOrder = self.origOrder = self.targets;

            self.callActions('afterInsertTargets', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Number}      [index]
         * @param   {Element}     [sibling]
         * @param   {string}      [position]
         * @return  {Element}
         */

        getNextSibling: function(index, sibling, position) {
            var self    = this,
                element = null;

            index = Math.max(index, 0);

            if (sibling && position === 'before') {
                // Explicit sibling

                element = sibling;
            } else if (sibling && position === 'after') {
                // Explicit sibling

                element = sibling.nextElementSibling || null;
            } else if (self.targets.length > 0 && typeof index !== 'undefined') {
                // Index and targets exist

                element = (index < self.targets.length || !self.targets.length) ?
                    self.targets[index].dom.el :
                    self.targets[self.targets.length - 1].dom.el.nextElementSibling;
            } else if (self.targets.length === 0 && self.dom.parent.children.length > 0) {
                // No targets but other siblings

                if (self.config.layout.siblingAfter) {
                    element = self.config.layout.siblingAfter;
                } else if (self.config.layout.siblingBefore) {
                    element = self.config.layout.siblingBefore.nextElementSibling;
                } else {
                    self.dom.parent.children[0];
                }
            } else {
                element === null;
            }

            return self.callFilters('elementGetNextSibling', element, arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        filterOperation: function(operation) {
            var self        = this,
                testResult  = false,
                index       = -1,
                action      = '',
                target      = null,
                i           = -1;

            self.callActions('beforeFilterOperation', arguments);

            action = operation.newFilter.action;

            for (i = 0; target = operation.newOrder[i]; i++) {
                if (operation.newFilter.collection) {
                    // show via collection

                    testResult = operation.newFilter.collection.indexOf(target.dom.el) > -1;
                } else {
                    // show via selector

                    if (operation.newFilter.selector === '') {
                        testResult = false;
                    } else {
                        testResult = target.dom.el.matches(operation.newFilter.selector);
                    }
                }

                self.evaluateHideShow(testResult, target, action, operation);
            }

            if (operation.toRemove.length) {
                for (i = 0; target = operation.show[i]; i++) {
                    if (operation.toRemove.indexOf(target) > -1) {
                        // If any shown targets should be removed, move them into the toHide array

                        operation.show.splice(i, 1);

                        if ((index = operation.toShow.indexOf(target)) > -1) {
                            operation.toShow.splice(index, 1);
                        }

                        operation.toHide.push(target);
                        operation.hide.push(target);

                        i--;
                    }
                }
            }

            operation.matching = operation.show.slice();

            if (operation.show.length === 0 && operation.newFilter.selector !== '' && self.targets.length !== 0) {
                operation.hasFailed = true;
            }

            self.callActions('afterFilterOperation', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {boolean}   testResult
         * @param   {Element}   target
         * @param   {string}    action
         * @param   {Operation} operation
         * @return  {void}
         */

        evaluateHideShow: function(testResult, target, action, operation) {
            var self = this;

            self.callActions('beforeEvaluateHideShow', arguments);

            if (testResult === true && action === 'show' || testResult === false && action === 'hide') {
                operation.show.push(target);

                !target.isShown && operation.toShow.push(target);
            } else {
                operation.hide.push(target);

                target.isShown && operation.toHide.push(target);
            }

            self.callActions('afterEvaluateHideShow', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        sortOperation: function(operation) {
            var self = this;

            self.callActions('beforeSortOperation', arguments);

            operation.startOrder = self.targets;

            if (operation.newSort.collection) {
                // Sort by collection

                operation.newOrder = operation.newSort.collection;
            } else if (operation.newSort.order === 'random') {
                // Sort random

                operation.newOrder = h.arrayShuffle(operation.startOrder);
            } else if (operation.newSort.attribute === '') {
                // Sort by default

                operation.newOrder = self.origOrder.slice();

                if (operation.newSort.order === 'desc') {
                    operation.newOrder.reverse();
                }
            } else {
                // Sort by attribute

                operation.newOrder = operation.startOrder.slice();

                operation.newOrder.sort(function(a, b) {
                    return self.compare(a, b, operation.newSort);
                });
            }

            if (h.isEqualArray(operation.newOrder, operation.startOrder)) {
                operation.willSort = false;
            }

            self.callActions('afterSortOperation', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {mixitup.Target}        a
         * @param   {mixitup.Target}        b
         * @param   {mixitup.CommandSort}   command
         * @return  {Number}
         */

        compare: function(a, b, command) {
            var self        = this,
                order       = command.order,
                attrA       = self.getAttributeValue(a, command.attribute),
                attrB       = self.getAttributeValue(b, command.attribute);

            if (isNaN(attrA * 1) || isNaN(attrB * 1)) {
                attrA = attrA.toLowerCase();
                attrB = attrB.toLowerCase();
            } else {
                attrA = attrA * 1;
                attrB = attrB * 1;
            }

            if (attrA < attrB) {
                return order === 'asc' ? -1 : 1;
            }

            if (attrA > attrB) {
                return order === 'asc' ? 1 : -1;
            }

            if (attrA === attrB && command.next) {
                return self.compare(a, b, command.next);
            }

            return 0;
        },

        /**
         * Reads the values of any data attributes present the provided target element
         * which match the current sort command.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.Target}    target
         * @param   {string}            [attribute]
         * @return  {(String|Number)}
         */

        getAttributeValue: function(target, attribute) {
            var self    = this,
                value   = '';

            value = target.dom.el.getAttribute('data-' + attribute);

            if (value === null) {
                if (self.config.debug.showWarnings) {
                    // Encourage users to assign values to all targets to avoid erroneous sorting
                    // when types are mixed

                    console.warn(mixitup.messages.warningInconsistentSortingAttributes({
                        attribute: 'data-' + attribute
                    }));
                }
            }

            // If an attribute is not present, return 0 as a safety value

            return self.callFilters('valueGetAttributeValue', value || 0, arguments);
        },

        /**
         * Inserts elements into the DOM in the appropriate
         * order using a document fragment for minimal
         * DOM thrashing
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {boolean}   isResetting
         * @param   {Operation} operation
         * @return  {void}
         */

        printSort: function(isResetting, operation) {
            var self        = this,
                startOrder  = isResetting ? operation.newOrder : operation.startOrder,
                newOrder    = isResetting ? operation.startOrder : operation.newOrder,
                nextSibling = startOrder.length ? startOrder[startOrder.length - 1].dom.el.nextElementSibling : null,
                frag        = window.document.createDocumentFragment(),
                whitespace  = null,
                target      = null,
                el          = null,
                i           = -1;

            self.callActions('beforePrintSort', arguments);

            // Empty the container

            for (i = 0; target = startOrder[i]; i++) {
                el = target.dom.el;

                if (el.style.position === 'absolute') continue;

                h.removeWhitespace(el.previousSibling);

                el.parentElement.removeChild(el);
            }

            whitespace = nextSibling ? nextSibling.previousSibling : self.dom.parent.lastChild;

            if (whitespace && whitespace.nodeName === '#text') {
                h.removeWhitespace(whitespace);
            }

            for (i = 0; target = newOrder[i]; i++) {
                // Add targets into a document fragment

                el = target.dom.el;

                if (h.isElement(frag.lastChild)) {
                    frag.appendChild(window.document.createTextNode(' '));
                }

                frag.appendChild(el);
            }

            // Insert the document fragment into the container
            // before any other non-target elements

            if (self.dom.parent.firstChild && self.dom.parent.firstChild !== nextSibling) {
                frag.insertBefore(window.document.createTextNode(' '), frag.childNodes[0]);
            }

            if (nextSibling) {
                frag.appendChild(window.document.createTextNode(' '));

                self.dom.parent.insertBefore(frag, nextSibling);
            } else {
                self.dom.parent.appendChild(frag);
            }

            self.callActions('afterPrintSort', arguments);
        },

        /**
         * Parses user-defined sort strings (i.e. `default:asc`) into sort commands objects.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}                sortString
         * @param   {mixitup.CommandSort}   command
         * @return  {mixitup.CommandSort}
         */

        parseSortString: function(sortString, command) {
            var self        = this,
                rules       = sortString.split(' '),
                current     = command,
                rule        = [],
                i           = -1;

            // command.sortString = sortString;

            for (i = 0; i < rules.length; i++) {
                rule = rules[i].split(':');

                current.sortString  = rules[i];
                current.attribute   = h.dashCase(rule[0]);
                current.order       = rule[1] || 'asc';

                switch (current.attribute) {
                    case 'default':
                        // treat "default" as sorting by no attribute

                        current.attribute = '';

                        break;
                    case 'random':
                        // treat "random" as an order not an attribute

                        current.attribute   = '';
                        current.order       = 'random';

                        break;
                }

                if (!current.attribute || current.order === 'random') break;

                if (i < rules.length - 1) {
                    // Embed reference to the next command

                    current.next = new mixitup.CommandSort();

                    h.freeze(current);

                    current = current.next;
                }
            }

            return self.callFilters('commandsParseSort', command, arguments);
        },

        /**
         * Parses all effects out of the user-defined `animation.effects` string into
         * their respective properties and units.
         *
         * @private
         * @instance
         * @since   2.0.0
         * @return  {void}
         */

        parseEffects: function() {
            var self            = this,
                transformName   = '',
                effectsIn       = self.config.animation.effectsIn || self.config.animation.effects,
                effectsOut      = self.config.animation.effectsOut || self.config.animation.effects;

            self.callActions('beforeParseEffects', arguments);

            self.effectsIn      = new mixitup.StyleData();
            self.effectsOut     = new mixitup.StyleData();
            self.transformIn    = [];
            self.transformOut   = [];

            self.effectsIn.opacity = self.effectsOut.opacity = 1;

            self.parseEffect('fade', effectsIn, self.effectsIn, self.transformIn);
            self.parseEffect('fade', effectsOut, self.effectsOut, self.transformOut, true);

            for (transformName in mixitup.transformDefaults) {
                if (!(mixitup.transformDefaults[transformName] instanceof mixitup.TransformData)) {
                    continue;
                }

                self.parseEffect(transformName, effectsIn, self.effectsIn, self.transformIn);
                self.parseEffect(transformName, effectsOut, self.effectsOut, self.transformOut, true);
            }

            self.parseEffect('stagger', effectsIn, self.effectsIn, self.transformIn);
            self.parseEffect('stagger', effectsOut, self.effectsOut, self.transformOut, true);

            self.callActions('afterParseEffects', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {string}    effectName
         * @param   {string}    effectString
         * @param   {StyleData} effects
         * @param   {String[]}  transform
         * @param   {boolean}   [isOut]
         */

        parseEffect: function(effectName, effectString, effects, transform, isOut) {
            var self        = this,
                re          = /\(([^)]+)\)/,
                propIndex   = -1,
                str         = '',
                match       = [],
                val         = '',
                units       = ['%', 'px', 'em', 'rem', 'vh', 'vw', 'deg'],
                unit        = '',
                i           = -1;

            self.callActions('beforeParseEffect', arguments);

            if (typeof effectString !== 'string') {
                throw new TypeError(mixitup.messages.errorConfigInvalidAnimationEffects());
            }

            if (effectString.indexOf(effectName) < 0) {
                // The effect is not present in the effects string

                if (effectName === 'stagger') {
                    // Reset stagger to 0

                    self.staggerDuration = 0;
                }

                return;
            }

            // The effect is present

            propIndex = effectString.indexOf(effectName + '(');

            if (propIndex > -1) {
                // The effect has a user defined value in parentheses

                // Extract from the first parenthesis to the end of string

                str = effectString.substring(propIndex);

                // Match any number of characters between "(" and ")"

                match = re.exec(str);

                val = match[1];
            }

            switch (effectName) {
                case 'fade':
                    effects.opacity = val ? parseFloat(val) : 0;

                    break;
                case 'stagger':
                    self.staggerDuration = val ? parseFloat(val) : 100;

                    // TODO: Currently stagger must be applied globally, but
                    // if seperate values are specified for in/out, this should
                    // be respected

                    break;
                default:
                    // All other effects are transforms following the same structure

                    if (isOut && self.config.animation.reverseOut && effectName !== 'scale') {
                        effects[effectName].value =
                            (val ? parseFloat(val) : mixitup.transformDefaults[effectName].value) * -1;
                    } else {
                        effects[effectName].value =
                            (val ? parseFloat(val) : mixitup.transformDefaults[effectName].value);
                    }

                    if (val) {
                        for (i = 0; unit = units[i]; i++) {
                            if (val.indexOf(unit) > -1) {
                                effects[effectName].unit = unit;

                                break;
                            }
                        }
                    } else {
                        effects[effectName].unit = mixitup.transformDefaults[effectName].unit;
                    }

                    transform.push(
                        effectName +
                        '(' +
                        effects[effectName].value +
                        effects[effectName].unit +
                        ')'
                    );
            }

            self.callActions('afterParseEffect', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {State}
         */

        buildState: function(operation) {
            var self        = this,
                state       = new mixitup.State(),
                target      = null,
                i           = -1;

            self.callActions('beforeBuildState', arguments);

            // Map target elements into state arrays.
            // the real target objects should never be exposed

            for (i = 0; target = self.targets[i]; i++) {
                if (!operation.toRemove.length || operation.toRemove.indexOf(target) < 0) {
                    state.targets.push(target.dom.el);
                }
            }

            for (i = 0; target = operation.matching[i]; i++) {
                state.matching.push(target.dom.el);
            }

            for (i = 0; target = operation.show[i]; i++) {
                state.show.push(target.dom.el);
            }

            for (i = 0; target = operation.hide[i]; i++) {
                if (!operation.toRemove.length || operation.toRemove.indexOf(target) < 0) {
                    state.hide.push(target.dom.el);
                }
            }

            state.id                        = self.id;
            state.container                 = self.dom.container;
            state.activeFilter              = operation.newFilter;
            state.activeSort                = operation.newSort;
            state.activeDataset             = operation.newDataset;
            state.activeContainerClassName  = operation.newContainerClassName;
            state.hasFailed                 = operation.hasFailed;
            state.totalTargets              = self.targets.length;
            state.totalShow                 = operation.show.length;
            state.totalHide                 = operation.hide.length;
            state.totalMatching             = operation.matching.length;
            state.triggerElement            = operation.triggerElement;

            return self.callFilters('stateBuildState', state, arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {boolean}   shouldAnimate
         * @param   {Operation} operation
         * @return  {void}
         */

        goMix: function(shouldAnimate, operation) {
            var self        = this,
                deferred    = null;

            self.callActions('beforeGoMix', arguments);

            // If the animation duration is set to 0ms,
            // or no effects specified,
            // or the container is hidden
            // then abort animation

            if (
                !self.config.animation.duration || !self.config.animation.effects || !h.isVisible(self.dom.container)
            ) {
                shouldAnimate = false;
            }

            if (
                !operation.toShow.length &&
                !operation.toHide.length &&
                !operation.willSort &&
                !operation.willChangeLayout
            ) {
                // If nothing to show or hide, and not sorting or
                // changing layout

                shouldAnimate = false;
            }

            if (
                !operation.startState.show.length &&
                !operation.show.length
            ) {
                // If nothing currently shown, nothing to show

                shouldAnimate = false;
            }

            mixitup.events.fire('mixStart', self.dom.container, {
                state: operation.startState,
                futureState: operation.newState,
                instance: self
            }, self.dom.document);

            if (typeof self.config.callbacks.onMixStart === 'function') {
                self.config.callbacks.onMixStart.call(
                    self.dom.container,
                    operation.startState,
                    operation.newState,
                    self
                );
            }

            h.removeClass(self.dom.container, h.getClassname(self.config.classNames, 'container', self.config.classNames.modifierFailed));

            if (!self.userDeferred) {
                // Queue empty, no pending operations

                deferred = self.userDeferred = h.defer(mixitup.libraries);
            } else {
                // Use existing deferred

                deferred = self.userDeferred;
            }

            self.isBusy = true;

            if (!shouldAnimate || !mixitup.features.has.transitions) {
                // Abort

                if (self.config.debug.fauxAsync) {
                    setTimeout(function() {
                        self.cleanUp(operation);
                    }, self.config.animation.duration);
                } else {
                    self.cleanUp(operation);
                }

                return self.callFilters('promiseGoMix', deferred.promise, arguments);
            }

            // If we should animate and the platform supports transitions, go for it

            if (window.pageYOffset !== operation.docState.scrollTop) {
                window.scrollTo(operation.docState.scrollLeft, operation.docState.scrollTop);
            }

            if (self.config.animation.applyPerspective) {
                self.dom.parent.style[mixitup.features.perspectiveProp] =
                    self.config.animation.perspectiveDistance;

                self.dom.parent.style[mixitup.features.perspectiveOriginProp] =
                    self.config.animation.perspectiveOrigin;
            }

            if (
                self.config.animation.animateResizeContainer &&
                operation.startHeight !== operation.newHeight &&
                operation.viewportDeltaY !== operation.startHeight - operation.newHeight
            ) {
                self.dom.parent.style.height = operation.startHeight + 'px';
            }

            if (
                self.config.animation.animateResizeContainer &&
                operation.startWidth !== operation.newWidth &&
                operation.viewportDeltaX !== operation.startWidth - operation.newWidth
            ) {
                self.dom.parent.style.width = operation.startWidth + 'px';
            }

            if (operation.startHeight === operation.newHeight) {
                self.dom.parent.style.height = operation.startHeight + 'px';
            }

            if (operation.startWidth === operation.newWidth) {
                self.dom.parent.style.width = operation.startWidth + 'px';
            }

            if (operation.startHeight === operation.newHeight && operation.startWidth === operation.newWidth) {
                self.dom.parent.style.overflow = 'hidden';
            }

            requestAnimationFrame(function() {
                self.moveTargets(operation);
            });

            return self.callFilters('promiseGoMix', deferred.promise, arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        getStartMixData: function(operation) {
            var self        = this,
                parentStyle = window.getComputedStyle(self.dom.parent),
                parentRect  = self.dom.parent.getBoundingClientRect(),
                target      = null,
                data        = {},
                i           = -1,
                boxSizing   = parentStyle[mixitup.features.boxSizingProp];

            self.incPadding = (boxSizing === 'border-box');

            self.callActions('beforeGetStartMixData', arguments);

            for (i = 0; target = operation.show[i]; i++) {
                data = target.getPosData();

                operation.showPosData[i] = {
                    startPosData: data
                };
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                data = target.getPosData();

                operation.toHidePosData[i] = {
                    startPosData: data
                };
            }

            operation.startX = parentRect.left;
            operation.startY = parentRect.top;

            operation.startHeight = self.incPadding ?
                parentRect.height :
                parentRect.height -
                    parseFloat(parentStyle.paddingTop) -
                    parseFloat(parentStyle.paddingBottom) -
                    parseFloat(parentStyle.borderTop) -
                    parseFloat(parentStyle.borderBottom);

            operation.startWidth = self.incPadding ?
                parentRect.width :
                parentRect.width -
                    parseFloat(parentStyle.paddingLeft) -
                    parseFloat(parentStyle.paddingRight) -
                    parseFloat(parentStyle.borderLeft) -
                    parseFloat(parentStyle.borderRight);

            self.callActions('afterGetStartMixData', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        setInter: function(operation) {
            var self    = this,
                target  = null,
                i       = -1;

            self.callActions('beforeSetInter', arguments);

            // Prevent scrollbar flicker on non-inertial scroll platforms by clamping height/width

            if (self.config.animation.clampHeight) {
                self.dom.parent.style.height    = operation.startHeight + 'px';
                self.dom.parent.style.overflow  = 'hidden';
            }

            if (self.config.animation.clampWidth) {
                self.dom.parent.style.width     = operation.startWidth + 'px';
                self.dom.parent.style.overflow  = 'hidden';
            }

            for (i = 0; target = operation.toShow[i]; i++) {
                target.show();
            }

            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, operation.startContainerClassName);
                h.addClass(self.dom.container, operation.newContainerClassName);
            }

            self.callActions('afterSetInter', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        getInterMixData: function(operation) {
            var self    = this,
                target  = null,
                i       = -1;

            self.callActions('beforeGetInterMixData', arguments);

            for (i = 0; target = operation.show[i]; i++) {
                operation.showPosData[i].interPosData = target.getPosData();
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                operation.toHidePosData[i].interPosData = target.getPosData();
            }

            self.callActions('afterGetInterMixData', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        setFinal: function(operation) {
            var self    = this,
                target  = null,
                i       = -1;

            self.callActions('beforeSetFinal', arguments);

            operation.willSort && self.printSort(false, operation);

            for (i = 0; target = operation.toHide[i]; i++) {
                target.hide();
            }

            self.callActions('afterSetFinal', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        getFinalMixData: function(operation) {
            var self        = this,
                parentStyle = null,
                parentRect  = null,
                target      = null,
                i           = -1;

            self.callActions('beforeGetFinalMixData', arguments);

            for (i = 0; target = operation.show[i]; i++) {
                operation.showPosData[i].finalPosData = target.getPosData();
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                operation.toHidePosData[i].finalPosData = target.getPosData();
            }

            // Remove clamping

            if (self.config.animation.clampHeight || self.config.animation.clampWidth) {
                self.dom.parent.style.height    =
                self.dom.parent.style.width     =
                self.dom.parent.style.overflow  = '';
            }

            if (!self.incPadding) {
                parentStyle = window.getComputedStyle(self.dom.parent);
            }

            parentRect  = self.dom.parent.getBoundingClientRect();

            operation.newX = parentRect.left;
            operation.newY = parentRect.top;

            operation.newHeight = self.incPadding ?
                parentRect.height :
                parentRect.height -
                    parseFloat(parentStyle.paddingTop) -
                    parseFloat(parentStyle.paddingBottom) -
                    parseFloat(parentStyle.borderTop) -
                    parseFloat(parentStyle.borderBottom);

            operation.newWidth = self.incPadding ?
                parentRect.width :
                parentRect.width -
                    parseFloat(parentStyle.paddingLeft) -
                    parseFloat(parentStyle.paddingRight) -
                    parseFloat(parentStyle.borderLeft) -
                    parseFloat(parentStyle.borderRight);

            operation.viewportDeltaX = operation.docState.viewportWidth - this.dom.document.documentElement.clientWidth;
            operation.viewportDeltaY = operation.docState.viewportHeight - this.dom.document.documentElement.clientHeight;

            if (operation.willSort) {
                self.printSort(true, operation);
            }

            for (i = 0; target = operation.toShow[i]; i++) {
                target.hide();
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                target.show();
            }

            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, operation.newContainerClassName);
                h.addClass(self.dom.container, self.config.layout.containerClassName);
            }

            self.callActions('afterGetFinalMixData', arguments);
        },

        /**
         * @private
         * @instance
         * @since    3.0.0
         * @param    {Operation}     operation
         */

        getTweenData: function(operation) {
            var self            = this,
                target          = null,
                posData         = null,
                effectNames     = Object.getOwnPropertyNames(self.effectsIn),
                effectName      = '',
                effect          = null,
                widthChange     = -1,
                heightChange    = -1,
                i               = -1,
                j               = -1;

            self.callActions('beforeGetTweenData', arguments);

            for (i = 0; target = operation.show[i]; i++) {
                posData             = operation.showPosData[i];
                posData.posIn       = new mixitup.StyleData();
                posData.posOut      = new mixitup.StyleData();
                posData.tweenData   = new mixitup.StyleData();

                // Process x and y

                if (target.isShown) {
                    posData.posIn.x = posData.startPosData.x - posData.interPosData.x;
                    posData.posIn.y = posData.startPosData.y - posData.interPosData.y;
                } else {
                    posData.posIn.x = posData.posIn.y = 0;
                }

                posData.posOut.x = posData.finalPosData.x - posData.interPosData.x;
                posData.posOut.y = posData.finalPosData.y - posData.interPosData.y;

                // Process opacity

                posData.posIn.opacity       = target.isShown ? 1 : self.effectsIn.opacity;
                posData.posOut.opacity      = 1;
                posData.tweenData.opacity   = posData.posOut.opacity - posData.posIn.opacity;

                // Adjust x and y if not nudging

                if (!target.isShown && !self.config.animation.nudge) {
                    posData.posIn.x = posData.posOut.x;
                    posData.posIn.y = posData.posOut.y;
                }

                posData.tweenData.x = posData.posOut.x - posData.posIn.x;
                posData.tweenData.y = posData.posOut.y - posData.posIn.y;

                // Process width, height, and margins

                if (self.config.animation.animateResizeTargets) {
                    posData.posIn.width     = posData.startPosData.width;
                    posData.posIn.height    = posData.startPosData.height;

                    // "||" Prevents width/height change from including 0 width/height if hiding or showing

                    widthChange = (posData.startPosData.width || posData.finalPosData.width) - posData.interPosData.width;

                    posData.posIn.marginRight = posData.startPosData.marginRight - widthChange;

                    heightChange = (posData.startPosData.height || posData.finalPosData.height) - posData.interPosData.height;

                    posData.posIn.marginBottom = posData.startPosData.marginBottom - heightChange;

                    posData.posOut.width    = posData.finalPosData.width;
                    posData.posOut.height   = posData.finalPosData.height;

                    widthChange = (posData.finalPosData.width || posData.startPosData.width) - posData.interPosData.width;

                    posData.posOut.marginRight = posData.finalPosData.marginRight - widthChange;

                    heightChange = (posData.finalPosData.height || posData.startPosData.height) - posData.interPosData.height;

                    posData.posOut.marginBottom = posData.finalPosData.marginBottom - heightChange;

                    posData.tweenData.width         = posData.posOut.width - posData.posIn.width;
                    posData.tweenData.height        = posData.posOut.height - posData.posIn.height;
                    posData.tweenData.marginRight   = posData.posOut.marginRight - posData.posIn.marginRight;
                    posData.tweenData.marginBottom  = posData.posOut.marginBottom - posData.posIn.marginBottom;
                }

                // Process transforms

                for (j = 0; effectName = effectNames[j]; j++) {
                    effect = self.effectsIn[effectName];

                    if (!(effect instanceof mixitup.TransformData) || !effect.value) continue;

                    posData.posIn[effectName].value     = effect.value;
                    posData.posOut[effectName].value    = 0;

                    posData.tweenData[effectName].value =
                        posData.posOut[effectName].value - posData.posIn[effectName].value;

                    posData.posIn[effectName].unit =
                        posData.posOut[effectName].unit =
                        posData.tweenData[effectName].unit =
                        effect.unit;
                }
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                posData             = operation.toHidePosData[i];
                posData.posIn       = new mixitup.StyleData();
                posData.posOut      = new mixitup.StyleData();
                posData.tweenData   = new mixitup.StyleData();

                // Process x and y

                posData.posIn.x     = target.isShown ? posData.startPosData.x - posData.interPosData.x : 0;
                posData.posIn.y     = target.isShown ? posData.startPosData.y - posData.interPosData.y : 0;
                posData.posOut.x    = self.config.animation.nudge ? 0 : posData.posIn.x;
                posData.posOut.y    = self.config.animation.nudge ? 0 : posData.posIn.y;
                posData.tweenData.x = posData.posOut.x - posData.posIn.x;
                posData.tweenData.y = posData.posOut.y - posData.posIn.y;

                // Process width, height, and margins

                if (self.config.animation.animateResizeTargets) {
                    posData.posIn.width         = posData.startPosData.width;
                    posData.posIn.height        = posData.startPosData.height;

                    widthChange = posData.startPosData.width - posData.interPosData.width;

                    posData.posIn.marginRight = posData.startPosData.marginRight - widthChange;

                    heightChange = posData.startPosData.height - posData.interPosData.height;

                    posData.posIn.marginBottom = posData.startPosData.marginBottom - heightChange;
                }

                // Process opacity

                posData.posIn.opacity       = 1;
                posData.posOut.opacity      = self.effectsOut.opacity;
                posData.tweenData.opacity   = posData.posOut.opacity - posData.posIn.opacity;

                // Process transforms

                for (j = 0; effectName = effectNames[j]; j++) {
                    effect = self.effectsOut[effectName];

                    if (!(effect instanceof mixitup.TransformData) || !effect.value) continue;

                    posData.posIn[effectName].value     = 0;
                    posData.posOut[effectName].value    = effect.value;

                    posData.tweenData[effectName].value =
                        posData.posOut[effectName].value - posData.posIn[effectName].value;

                    posData.posIn[effectName].unit =
                        posData.posOut[effectName].unit =
                        posData.tweenData[effectName].unit =
                        effect.unit;
                }
            }

            self.callActions('afterGetTweenData', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        moveTargets: function(operation) {
            var self            = this,
                target          = null,
                moveData        = null,
                posData         = null,
                statusChange    = '',
                willTransition  = false,
                staggerIndex    = -1,
                i               = -1,
                checkProgress   = self.checkProgress.bind(self);

            self.callActions('beforeMoveTargets', arguments);

            // TODO: this is an extra loop in addition to the calcs
            // done in getOperation, could some of this be done there?

            for (i = 0; target = operation.show[i]; i++) {
                moveData    = new mixitup.IMoveData();
                posData     = operation.showPosData[i];

                statusChange = target.isShown ? 'none' : 'show';

                willTransition = self.willTransition(
                    statusChange,
                    operation.hasEffect,
                    posData.posIn,
                    posData.posOut
                );

                if (willTransition) {
                    // Prevent non-transitioning targets from incrementing the staggerIndex

                    staggerIndex++;
                }

                target.show();

                moveData.posIn          = posData.posIn;
                moveData.posOut         = posData.posOut;
                moveData.statusChange   = statusChange;
                moveData.staggerIndex   = staggerIndex;
                moveData.operation      = operation;
                moveData.callback       = willTransition ? checkProgress : null;

                target.move(moveData);
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                posData  = operation.toHidePosData[i];
                moveData = new mixitup.IMoveData();

                statusChange = 'hide';

                willTransition = self.willTransition(statusChange, posData.posIn, posData.posOut);

                moveData.posIn          = posData.posIn;
                moveData.posOut         = posData.posOut;
                moveData.statusChange   = statusChange;
                moveData.staggerIndex   = i;
                moveData.operation      = operation;
                moveData.callback       = willTransition ? checkProgress : null;

                target.move(moveData);
            }

            if (self.config.animation.animateResizeContainer) {
                self.dom.parent.style[mixitup.features.transitionProp] =
                    'height ' + self.config.animation.duration + 'ms ease, ' +
                    'width ' + self.config.animation.duration + 'ms ease ';

                requestAnimationFrame(function() {
                    if (
                        operation.startHeight !== operation.newHeight &&
                        operation.viewportDeltaY !== operation.startHeight - operation.newHeight
                    ) {
                        self.dom.parent.style.height = operation.newHeight + 'px';
                    }

                    if (
                        operation.startWidth !== operation.newWidth &&
                        operation.viewportDeltaX !== operation.startWidth - operation.newWidth
                    ) {
                        self.dom.parent.style.width = operation.newWidth + 'px';
                    }
                });
            }

            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, self.config.layout.ContainerClassName);
                h.addClass(self.dom.container, operation.newContainerClassName);
            }

            self.callActions('afterMoveTargets', arguments);
        },

        /**
         * @private
         * @instance
         * @return  {boolean}
         */

        hasEffect: function() {
            var self        = this,
                EFFECTABLES = [
                    'scale',
                    'translateX', 'translateY', 'translateZ',
                    'rotateX', 'rotateY', 'rotateZ'
                ],
                effectName  = '',
                effect      = null,
                result      = false,
                value       = -1,
                i           = -1;

            if (self.effectsIn.opacity !== 1) {
                return self.callFilters('resultHasEffect', true, arguments);
            }

            for (i = 0; effectName = EFFECTABLES[i]; i++) {
                effect  = self.effectsIn[effectName];
                value   = (typeof effect && effect.value !== 'undefined') ?
                    effect.value : effect;

                if (value !== 0) {
                    result = true;

                    break;
                }
            }

            return self.callFilters('resultHasEffect', result, arguments);
        },

        /**
         * Determines if a target element will transition in
         * some fasion and therefore requires binding of
         * transitionEnd
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}        statusChange
         * @param   {boolean}       hasEffect
         * @param   {StyleData}     posIn
         * @param   {StyleData}     posOut
         * @return  {boolean}
         */

        willTransition: function(statusChange, hasEffect, posIn, posOut) {
            var self    = this,
                result  = false;

            if (!h.isVisible(self.dom.container)) {
                // If the container is not visible, the transitionEnd
                // event will not occur and MixItUp will hang

                result = false;
            } else if (
                (statusChange !== 'none' && hasEffect) ||
                posIn.x !== posOut.x ||
                posIn.y !== posOut.y
            ) {
                // If opacity and/or translate will change

                result = true;
            } else if (self.config.animation.animateResizeTargets) {
                // Check if width, height or margins will change

                result = (
                    posIn.width !== posOut.width ||
                    posIn.height !== posOut.height ||
                    posIn.marginRight !== posOut.marginRight ||
                    posIn.marginTop !== posOut.marginTop
                );
            } else {
                result = false;
            }

            return self.callFilters('resultWillTransition', result, arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        checkProgress: function(operation) {
            var self = this;

            self.targetsDone++;

            if (self.targetsBound === self.targetsDone) {
                self.cleanUp(operation);
            }
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        cleanUp: function(operation) {
            var self                = this,
                target              = null,
                whitespaceBefore    = null,
                whitespaceAfter     = null,
                nextInQueue         = null,
                i                   = -1;

            self.callActions('beforeCleanUp', arguments);

            self.targetsMoved          =
                self.targetsImmovable  =
                self.targetsBound      =
                self.targetsDone       = 0;

            for (i = 0; target = operation.show[i]; i++) {
                target.cleanUp();

                target.show();
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                target.cleanUp();

                target.hide();
            }

            if (operation.willSort) {
                self.printSort(false, operation);
            }

            // Remove any styles applied to the parent container

            self.dom.parent.style[mixitup.features.transitionProp]             =
                self.dom.parent.style.height                                   =
                self.dom.parent.style.width                                    =
                self.dom.parent.style.overflow                                 =
                self.dom.parent.style[mixitup.features.perspectiveProp]        =
                self.dom.parent.style[mixitup.features.perspectiveOriginProp]  = '';

            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, operation.startContainerClassName);
                h.addClass(self.dom.container, operation.newContainerClassName);
            }

            if (operation.toRemove.length) {
                for (i = 0; target = self.targets[i]; i++) {
                    if (operation.toRemove.indexOf(target) > -1) {
                        if (
                            (whitespaceBefore = target.dom.el.previousSibling) && whitespaceBefore.nodeName === '#text' &&
                            (whitespaceAfter = target.dom.el.nextSibling) && whitespaceAfter.nodeName === '#text'
                        ) {
                            h.removeWhitespace(whitespaceBefore);
                        }

                        if (!operation.willSort) {
                            // NB: Sorting will remove targets as a bi-product of `printSort()`

                            self.dom.parent.removeChild(target.dom.el);
                        }

                        self.targets.splice(i, 1);

                        target.isInDom = false;

                        i--;
                    }
                }

                // Since targets have been removed, the original order must be updated

                self.origOrder = self.targets;
            }

            if (operation.willSort) {
                self.targets = operation.newOrder;
            }

            self.state = operation.newState;
            self.lastOperation = operation;

            self.dom.targets = self.state.targets;

            // mixEnd

            mixitup.events.fire('mixEnd', self.dom.container, {
                state: self.state,
                instance: self
            }, self.dom.document);

            if (typeof self.config.callbacks.onMixEnd === 'function') {
                self.config.callbacks.onMixEnd.call(self.dom.container, self.state, self);
            }

            if (operation.hasFailed) {
                // mixFail

                mixitup.events.fire('mixFail', self.dom.container, {
                    state: self.state,
                    instance: self
                }, self.dom.document);

                if (typeof self.config.callbacks.onMixFail === 'function') {
                    self.config.callbacks.onMixFail.call(self.dom.container, self.state, self);
                }

                h.addClass(self.dom.container, h.getClassname(self.config.classNames, 'container', self.config.classNames.modifierFailed));
            }

            // User-defined callback function

            if (typeof self.userCallback === 'function') {
                self.userCallback.call(self.dom.container, self.state, self);
            }

            if (typeof self.userDeferred.resolve === 'function') {
                self.userDeferred.resolve(self.state);
            }

            self.userCallback  = null;
            self.userDeferred  = null;
            self.lastClicked   = null;
            self.isToggling    = false;
            self.isBusy        = false;

            if (self.queue.length) {
                self.callActions('beforeReadQueueCleanUp', arguments);

                nextInQueue = self.queue.shift();

                // Update non-public API properties stored in queue

                self.userDeferred  = nextInQueue.deferred;
                self.isToggling    = nextInQueue.isToggling;
                self.lastClicked   = nextInQueue.triggerElement;

                if (nextInQueue.instruction.command instanceof mixitup.CommandMultimix) {
                    self.multimix.apply(self, nextInQueue.args);
                } else {
                    self.dataset.apply(self, nextInQueue.args);
                }
            }

            self.callActions('afterCleanUp', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseMultimixArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandMultimix();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                if (typeof arg === 'object') {
                    h.extend(instruction.command, arg);
                } else if (typeof arg === 'boolean') {
                    instruction.animate = arg;
                } else if (typeof arg === 'function') {
                    instruction.callback = arg;
                }
            }

            // Coerce arbitrary command arguments into typed command objects

            if (instruction.command.insert && !(instruction.command.insert instanceof mixitup.CommandInsert)) {
                instruction.command.insert = self.parseInsertArgs([instruction.command.insert]).command;
            }

            if (instruction.command.remove && !(instruction.command.remove instanceof mixitup.CommandRemove)) {
                instruction.command.remove = self.parseRemoveArgs([instruction.command.remove]).command;
            }

            if (instruction.command.filter && !(instruction.command.filter instanceof mixitup.CommandFilter)) {
                instruction.command.filter = self.parseFilterArgs([instruction.command.filter]).command;
            }

            if (instruction.command.sort && !(instruction.command.sort instanceof mixitup.CommandSort)) {
                instruction.command.sort = self.parseSortArgs([instruction.command.sort]).command;
            }

            if (instruction.command.changeLayout && !(instruction.command.changeLayout instanceof mixitup.CommandChangeLayout)) {
                instruction.command.changeLayout = self.parseChangeLayoutArgs([instruction.command.changeLayout]).command;
            }

            instruction = self.callFilters('instructionParseMultimixArgs', instruction, arguments);

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseFilterArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandFilter();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (typeof arg === 'string') {
                    // Selector

                    instruction.command.selector = arg;
                } else if (arg === null) {
                    instruction.command.collection = [];
                } else if (typeof arg === 'object' && h.isElement(arg, self.dom.document)) {
                    // Single element

                    instruction.command.collection = [arg];
                } else if (typeof arg === 'object' && typeof arg.length !== 'undefined') {
                    // Multiple elements in array, NodeList or jQuery collection

                    instruction.command.collection = h.arrayFromList(arg);
                } else if (typeof arg === 'object') {
                    // Filter command

                    h.extend(instruction.command, arg);
                } else if (typeof arg === 'boolean') {
                    instruction.animate = arg;
                } else if (typeof arg === 'function') {
                    instruction.callback = arg;
                }
            }

            if (instruction.command.selector && instruction.command.collection) {
                throw new Error(mixitup.messages.errorFilterInvalidArguments());
            }

            instruction = self.callFilters('instructionParseFilterArgs', instruction, arguments);

            h.freeze(instruction);

            return instruction;
        },

        parseSortArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                sortString  = '',
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandSort();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                switch (typeof arg) {
                    case 'string':
                        // Sort string

                        sortString = arg;

                        break;
                    case 'object':
                        // Array of element references

                        if (arg.length) {
                            instruction.command.collection = h.arrayFromList(arg);
                        }

                        break;
                    case 'boolean':
                        instruction.animate = arg;

                        break;
                    case 'function':
                        instruction.callback = arg;

                        break;
                }
            }

            if (sortString) {
                instruction.command = self.parseSortString(sortString, instruction.command);
            }

            instruction = self.callFilters('instructionParseSortArgs', instruction, arguments);

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseInsertArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandInsert();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                if (typeof arg === 'number') {
                    // Insert index

                    instruction.command.index = arg;
                } else if (typeof arg === 'string' && ['before', 'after'].indexOf(arg) > -1) {
                    // 'before'/'after'

                    instruction.command.position = arg;
                } else if (typeof arg === 'string') {
                    // Markup

                    instruction.command.collection =
                        h.arrayFromList(h.createElement(arg).childNodes);
                } else if (typeof arg === 'object' && h.isElement(arg, self.dom.document)) {
                    // Single element

                    !instruction.command.collection.length ?
                        (instruction.command.collection = [arg]) :
                        (instruction.command.sibling = arg);
                } else if (typeof arg === 'object' && arg.length) {
                    // Multiple elements in array or jQuery collection

                    !instruction.command.collection.length ?
                        (instruction.command.collection = arg) :
                        instruction.command.sibling = arg[0];
                } else if (typeof arg === 'object' && arg.childNodes && arg.childNodes.length) {
                    // Document fragment

                    !instruction.command.collection.length ?
                        instruction.command.collection = h.arrayFromList(arg.childNodes) :
                        instruction.command.sibling = arg.childNodes[0];
                } else if (typeof arg === 'object') {
                    // Insert command

                    h.extend(instruction.command, arg);
                } else if (typeof arg === 'boolean') {
                    instruction.animate = arg;
                } else if (typeof arg === 'function') {
                    instruction.callback = arg;
                }
            }

            if (instruction.command.index && instruction.command.sibling) {
                throw new Error(mixitup.messages.errorInsertInvalidArguments());
            }

            if (!instruction.command.collection.length && self.config.debug.showWarnings) {
                console.warn(mixitup.messages.warningInsertNoElements());
            }

            instruction = self.callFilters('instructionParseInsertArgs', instruction, arguments);

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseRemoveArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                target      = null,
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandRemove();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                switch (typeof arg) {
                    case 'number':
                        if (self.targets[arg]) {
                            instruction.command.targets[0] = self.targets[arg];
                        }

                        break;
                    case 'string':
                        instruction.command.collection = h.arrayFromList(self.dom.parent.querySelectorAll(arg));

                        break;
                    case 'object':
                        if (arg && arg.length) {
                            instruction.command.collection = arg;
                        } else if (h.isElement(arg, self.dom.document)) {
                            instruction.command.collection = [arg];
                        } else {
                            // Remove command

                            h.extend(instruction.command, arg);
                        }

                        break;
                    case 'boolean':
                        instruction.animate = arg;

                        break;
                    case 'function':
                        instruction.callback = arg;

                        break;
                }
            }

            if (instruction.command.collection.length) {
                for (i = 0; target = self.targets[i]; i++) {
                    if (instruction.command.collection.indexOf(target.dom.el) > -1) {
                        instruction.command.targets.push(target);
                    }
                }
            }

            if (!instruction.command.targets.length && self.config.debug.showWarnings) {
                console.warn(mixitup.messages.warningRemoveNoElements());
            }

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseDatasetArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandDataset();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                switch (typeof arg) {
                    case 'object':
                        if (Array.isArray(arg) || typeof arg.length === 'number') {
                            instruction.command.dataset = arg;
                        } else {
                            // Change layout command

                            h.extend(instruction.command, arg);
                        }

                        break;
                    case 'boolean':
                        instruction.animate = arg;

                        break;
                    case 'function':
                        instruction.callback = arg;

                        break;
                }
            }

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseChangeLayoutArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandChangeLayout();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                switch (typeof arg) {
                    case 'string':
                        instruction.command.containerClassName = arg;

                        break;
                    case 'object':
                        // Change layout command

                        h.extend(instruction.command, arg);

                        break;
                    case 'boolean':
                        instruction.animate = arg;

                        break;
                    case 'function':
                        instruction.callback = arg;

                        break;
                }
            }

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since       3.0.0
         * @param       {mixitup.QueueItem}         queueItem
         * @return      {Promise.<mixitup.State>}
         */

        queueMix: function(queueItem) {
            var self            = this,
                deferred        = null,
                toggleSelector  = '';

            self.callActions('beforeQueueMix', arguments);

            deferred = h.defer(mixitup.libraries);

            if (self.config.animation.queue && self.queue.length < self.config.animation.queueLimit) {
                queueItem.deferred = deferred;

                self.queue.push(queueItem);

                // Keep controls in sync with user interactions. Mixer will catch up as it drains the queue.

                if (self.config.controls.enable) {
                    if (self.isToggling) {
                        self.buildToggleArray(queueItem.instruction.command);

                        toggleSelector = self.getToggleSelector();

                        self.updateControls({
                            filter: {
                                selector: toggleSelector
                            }
                        });
                    } else {
                        self.updateControls(queueItem.instruction.command);
                    }
                }
            } else {
                if (self.config.debug.showWarnings) {
                    console.warn(mixitup.messages.warningMultimixInstanceQueueFull());
                }

                deferred.resolve(self.state);

                mixitup.events.fire('mixBusy', self.dom.container, {
                    state: self.state,
                    instance: self
                }, self.dom.document);

                if (typeof self.config.callbacks.onMixBusy === 'function') {
                    self.config.callbacks.onMixBusy.call(self.dom.container, self.state, self);
                }
            }

            return self.callFilters('promiseQueueMix', deferred.promise, arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array.<object>}    newDataset
         * @return  {Operation}
         */

        getDataOperation: function(newDataset) {
            var self                = this,
                operation           = new mixitup.Operation(),
                startDataset        = [];

            operation = self.callFilters('operationUnmappedGetDataOperation', operation, arguments);

            if (self.dom.targets.length && !(startDataset = (self.state.activeDataset || [])).length) {
                throw new Error(mixitup.messages.errorDatasetNotSet());
            }

            operation.id            = h.randomHex();
            operation.startState    = self.state;
            operation.startDataset  = startDataset;
            operation.newDataset    = newDataset.slice();

            self.diffDatasets(operation);

            operation.startOrder = self.targets;
            operation.newOrder = operation.show;

            if (self.config.animation.enable) {
                self.getStartMixData(operation);
                self.setInter(operation);

                operation.docState = h.getDocumentState(self.dom.document);

                self.getInterMixData(operation);
                self.setFinal(operation);
                self.getFinalMixData(operation);

                self.parseEffects();

                operation.hasEffect = self.hasEffect();

                self.getTweenData(operation);
            }

            self.targets = operation.show.slice();

            operation.newState = self.buildState(operation);

            // NB: Targets to be removed must be included in `self.targets` for removal during clean up,
            // but are added after state is built so that state is accurate

            Array.prototype.push.apply(self.targets, operation.toRemove);

            operation = self.callFilters('operationMappedGetDataOperation', operation, arguments);

            return operation;
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.Operation} operation
         * @return  {void}
         */

        diffDatasets: function(operation) {
            var self                = this,
                persistantStartIds  = [],
                persistantNewIds    = [],
                insertedTargets     = [],
                data                = null,
                target              = null,
                el                  = null,
                frag                = null,
                nextEl              = null,
                uids                = {},
                id                  = '',
                i                   = -1;

            self.callActions('beforeDiffDatasets', arguments);

            for (i = 0; data = operation.newDataset[i]; i++) {
                if (typeof (id = data[self.config.data.uidKey]) === 'undefined' || id.toString().length < 1) {
                    throw new TypeError(mixitup.messages.errorDatasetInvalidUidKey({
                        uidKey: self.config.data.uidKey
                    }));
                }

                if (!uids[id]) {
                    uids[id] = true;
                } else {
                    throw new Error(mixitup.messages.errorDatasetDuplicateUid({
                        uid: id
                    }));
                }

                if ((target = self.cache[id]) instanceof mixitup.Target) {
                    // Already in cache

                    if (self.config.data.dirtyCheck && !h.deepEquals(data, target.data)) {
                        // change detected

                        el = target.render(data);

                        target.data = data;

                        if (el !== target.dom.el) {
                            // Update target element reference

                            if (target.isInDom) {
                                target.unbindEvents();

                                self.dom.parent.replaceChild(el, target.dom.el);
                            }

                            if (!target.isShown) {
                                el.style.display = 'none';
                            }

                            target.dom.el = el;

                            if (target.isInDom) {
                                target.bindEvents();
                            }
                        }
                    }

                    el = target.dom.el;
                } else {
                    // New target

                    target = new mixitup.Target();

                    target.init(null, self, data);

                    target.hide();
                }

                if (!target.isInDom) {
                    // Adding to DOM

                    if (!frag) {
                        // Open frag

                        frag = self.dom.document.createDocumentFragment();
                    }

                    if (frag.lastElementChild) {
                        frag.appendChild(self.dom.document.createTextNode(' '));
                    }

                    frag.appendChild(target.dom.el);

                    target.isInDom = true;

                    target.unbindEvents();
                    target.bindEvents();
                    target.hide();

                    operation.toShow.push(target);

                    insertedTargets.push(target);
                } else {
                    // Already in DOM

                    nextEl = target.dom.el.nextElementSibling;

                    persistantNewIds.push(id);

                    if (frag) {
                        // Close and insert previously opened frag

                        if (frag.lastElementChild) {
                            frag.appendChild(self.dom.document.createTextNode(' '));
                        }

                        self.insertDatasetFrag(frag, target.dom.el, insertedTargets);

                        frag = null;
                    }
                }

                operation.show.push(target);
            }

            if (frag) {
                // Unclosed frag remaining

                nextEl = nextEl || self.config.layout.siblingAfter;

                if (nextEl) {
                    frag.appendChild(self.dom.document.createTextNode(' '));
                }

                self.insertDatasetFrag(frag, nextEl, insertedTargets);
            }

            for (i = 0; data = operation.startDataset[i]; i++) {
                id = data[self.config.data.uidKey];

                target = self.cache[id];

                if (operation.show.indexOf(target) < 0) {
                    // Previously shown but now absent

                    operation.hide.push(target);
                    operation.toHide.push(target);
                    operation.toRemove.push(target);
                } else {
                    persistantStartIds.push(id);
                }
            }

            if (!h.isEqualArray(persistantStartIds, persistantNewIds)) {
                operation.willSort = true;
            }

            self.callActions('afterDiffDatasets', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.1.5
         * @param   {DocumentFragment}          frag
         * @param   {(HTMLElement|null)}        nextEl
         * @param   {Array.<mixitup.Target>}    targets
         * @return  {void}
         */

        insertDatasetFrag: function(frag, nextEl, targets) {
            var self = this;
            var insertAt = nextEl ? Array.from(self.dom.parent.children).indexOf(nextEl) : self.targets.length;

            self.dom.parent.insertBefore(frag, nextEl);

            while (targets.length) {
                self.targets.splice(insertAt, 0, targets.shift());

                insertAt++;
            }
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.CommandSort} sortCommandA
         * @param   {mixitup.CommandSort} sortCommandB
         * @return  {boolean}
         */

        willSort: function(sortCommandA, sortCommandB) {
            var self    = this,
                result  = false;

            if (
                self.config.behavior.liveSort ||
                sortCommandA.order       === 'random' ||
                sortCommandA.attribute   !== sortCommandB.attribute ||
                sortCommandA.order       !== sortCommandB.order ||
                sortCommandA.collection  !== sortCommandB.collection ||
                (sortCommandA.next === null && sortCommandB.next) ||
                (sortCommandA.next && sortCommandB.next === null)
            ) {
                result = true;
            } else if (sortCommandA.next && sortCommandB.next) {
                result = self.willSort(sortCommandA.next, sortCommandB.next);
            } else {
                result = false;
            }

            return self.callFilters('resultWillSort', result, arguments);
        },

        /**
         * A shorthand method for `.filter('all')`. Shows all targets in the container.
         *
         * @example
         *
         * .show()
         *
         * @example <caption>Example: Showing all targets</caption>
         *
         * mixer.show()
         *     .then(function(state) {
         *         console.log(state.totalShow === state.totalTargets); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @return      {Promise.<mixitup.State>}
         */

        show: function() {
            var self = this;

            return self.filter('all');
        },

        /**
         * A shorthand method for `.filter('none')`. Hides all targets in the container.
         *
         * @example
         *
         * .hide()
         *
         * @example <caption>Example: Hiding all targets</caption>
         *
         * mixer.hide()
         *     .then(function(state) {
         *         console.log(state.totalShow === 0); // true
         *         console.log(state.totalHide === state.totalTargets); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @return      {Promise.<mixitup.State>}
         */

        hide: function() {
            var self = this;

            return self.filter('none');
        },

        /**
         * Returns a boolean indicating whether or not a MixItUp operation is
         * currently in progress.
         *
         * @example
         *
         * .isMixing()
         *
         * @example <caption>Example: Checking the status of a mixer</caption>
         *
         * mixer.sort('random', function() {
         *     console.log(mixer.isMixing()) // false
         * });
         *
         * console.log(mixer.isMixing()) // true
         *
         * @public
         * @instance
         * @since   2.0.0
         * @return  {boolean}
         */

        isMixing: function() {
            var self = this;

            return self.isBusy;
        },

        /**
         * Filters all targets in the container by a provided selector string, or the values `'all'`
         * or `'none'`. Only targets matching the selector will be shown.
         *
         * @example
         *
         * .filter(selector [, animate] [, callback])
         *
         * @example <caption>Example 1: Filtering targets by a class selector</caption>
         *
         * mixer.filter('.category-a')
         *     .then(function(state) {
         *         console.log(state.totalShow === containerEl.querySelectorAll('.category-a').length); // true
         *     });
         *
         * @example <caption>Example 2: Filtering targets by an attribute selector</caption>
         *
         * mixer.filter('[data-category~="a"]')
         *     .then(function(state) {
         *         console.log(state.totalShow === containerEl.querySelectorAll('[data-category~="a"]').length); // true
         *     });
         *
         * @example <caption>Example 3: Filtering targets by a compound selector</caption>
         *
         * // Show only those targets with the classes 'category-a' AND 'category-b'
         *
         * mixer.filter('.category-a.category-c')
         *     .then(function(state) {
         *         console.log(state.totalShow === containerEl.querySelectorAll('.category-a.category-c').length); // true
         *     });
         *
         * @example <caption>Example 4: Filtering via an element collection</caption>
         *
         * var collection = Array.from(container.querySelectorAll('.mix'));
         *
         * console.log(collection.length); // 34
         *
         * // Filter the collection manually using Array.prototype.filter
         *
         * var filtered = collection.filter(function(target) {
         *    return parseInt(target.getAttribute('data-price')) > 10;
         * });
         *
         * console.log(filtered.length); // 22
         *
         * // Pass the filtered collection to MixItUp
         *
         * mixer.filter(filtered)
         *    .then(function(state) {
         *        console.log(state.activeFilter.collection.length === 22); // true
         *    });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {(string|HTMLElement|Array.<HTMLElement>)} selector
         *      Any valid CSS selector (i.e. `'.category-a'`), or the values `'all'` or `'none'`. The filter method also accepts a reference to single target element or a collection of target elements to show.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        filter: function() {
            var self        = this,
                instruction = self.parseFilterArgs(arguments);

            return self.multimix({
                filter: instruction.command
            }, instruction.animate, instruction.callback);
        },

        /**
         * Adds an additional selector to the currently active filter selector, concatenating
         * as per the logic defined in `controls.toggleLogic`.
         *
         * @example
         *
         * .toggleOn(selector [, animate] [, callback])
         *
         * @example <caption>Example: Toggling on a filter selector</caption>
         *
         * console.log(mixer.getState().activeFilter.selector); // '.category-a'
         *
         * mixer.toggleOn('.category-b')
         *     .then(function(state) {
         *         console.log(state.activeFilter.selector); // '.category-a, .category-b'
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {string}    selector
         *      Any valid CSS selector (i.e. `'.category-a'`)
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        toggleOn: function() {
            var self            = this,
                instruction     = self.parseFilterArgs(arguments),
                selector        = instruction.command.selector,
                toggleSelector  = '';

            self.isToggling = true;

            if (self.toggleArray.indexOf(selector) < 0) {
                self.toggleArray.push(selector);
            }

            toggleSelector = self.getToggleSelector();

            return self.multimix({
                filter: toggleSelector
            }, instruction.animate, instruction.callback);
        },

        /**
         * Removes a selector from the active filter selector.
         *
         * @example
         *
         * .toggleOff(selector [, animate] [, callback])
         *
         * @example <caption>Example: Toggling off a filter selector</caption>
         *
         * console.log(mixer.getState().activeFilter.selector); // '.category-a, .category-b'
         *
         * mixer.toggleOff('.category-b')
         *     .then(function(state) {
         *         console.log(state.activeFilter.selector); // '.category-a'
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {string}    selector
         *      Any valid CSS selector (i.e. `'.category-a'`)
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        toggleOff: function() {
            var self            = this,
                instruction     = self.parseFilterArgs(arguments),
                selector        = instruction.command.selector,
                selectorIndex   = self.toggleArray.indexOf(selector),
                toggleSelector  = '';

            self.isToggling = true;

            if (selectorIndex > -1) {
                self.toggleArray.splice(selectorIndex, 1);
            }

            toggleSelector = self.getToggleSelector();

            return self.multimix({
                filter: toggleSelector
            }, instruction.animate, instruction.callback);
        },

        /**
         * Sorts all targets in the container according to a provided sort string.
         *
         * @example
         *
         * .sort(sortString [, animate] [, callback])
         *
         * @example <caption>Example 1: Sorting by the default DOM order</caption>
         *
         * // Reverse the default order of the targets
         *
         * mixer.sort('default:desc')
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'default'); // true
         *         console.log(state.activeSort.order === 'desc'); // true
         *     });
         *
         * @example <caption>Example 2: Sorting by a custom data-attribute</caption>
         *
         * // Sort the targets by the value of a `data-published-date` attribute
         *
         * mixer.sort('published-date:asc')
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *         console.log(state.activeSort.order === 'asc'); // true
         *     });
         *
         * @example <caption>Example 3: Sorting by multiple attributes</caption>
         *
         * // Sort the targets by the value of a `data-published-date` attribute, then by `data-title`
         *
         * mixer.sort('published-date:desc data-title:asc')
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *         console.log(state.activeSort.order === 'desc'); // true
         *
         *         console.log(state.activeSort.next.attribute === 'title'); // true
         *         console.log(state.activeSort.next.order === 'asc'); // true
         *     });
         *
         * @example <caption>Example 4: Sorting by random</caption>
         *
         * mixer.sort('random')
         *     .then(function(state) {
         *         console.log(state.activeSort.order === 'random') // true
         *     });
         *
         * @example <caption>Example 5: Sorting via an element collection</caption>
         *
         * var collection = Array.from(container.querySelectorAll('.mix'));
         *
         * // Swap the position of two elements in the collection:
         *
         * var temp = collection[1];
         *
         * collection[1] = collection[0];
         * collection[0] = temp;
         *
         * // Pass the sorted collection to MixItUp
         *
         * mixer.sort(collection)
         *     .then(function(state) {
         *         console.log(state.targets[0] === collection[0]); // true
         *     });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {(string|Array.<HTMLElement>)}    sortString
         *      A valid sort string (e.g. `'default'`, `'published-date:asc'`, or `'random'`). The sort method also accepts an array of all target elements in a user-defined order.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        sort: function() {
            var self        = this,
                instruction = self.parseSortArgs(arguments);

            return self.multimix({
                sort: instruction.command
            }, instruction.animate, instruction.callback);
        },

        /**
         * Changes the layout of the container by adding, removing or updating a
         * layout-specific class name. If `animation.animateResizetargets` is
         * enabled, MixItUp will attempt to gracefully animate the width, height,
         * and position of targets between layout states.
         *
         * @example
         *
         * .changeLayout(containerClassName [, animate] [, callback])
         *
         * @example <caption>Example 1: Adding a new class name to the container</caption>
         *
         * mixer.changeLayout('container-list')
         *      .then(function(state) {
         *          console.log(state.activeContainerClass === 'container-list'); // true
         *      });
         *
         * @example <caption>Example 2: Removing a previously added class name from the container</caption>
         *
         * mixer.changeLayout('')
         *      .then(function(state) {
         *          console.log(state.activeContainerClass === ''); // true
         *      });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {string}    containerClassName
         *      A layout-specific class name to add to the container.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        changeLayout: function() {
            var self        = this,
                instruction = self.parseChangeLayoutArgs(arguments);

            return self.multimix({
                changeLayout: instruction.command
            }, instruction.animate, instruction.callback);
        },

        /**
         * Updates the contents and order of the container to reflect the provided dataset,
         * if the dataset API is in use.
         *
         * The dataset API is designed for use in API-driven JavaScript applications, and
         * can be used instead of DOM-based methods such as `.filter()`, `.sort()`,
         * `.insert()`, etc. When used, insertion, removal, sorting and pagination can be
         * achieved purely via changes to your data model, without the uglyness of having
         * to interact with or query the DOM directly.
         *
         * @example
         *
         * .dataset(dataset [, animate] [, callback])
         *
         * @example <caption>Example 1: Rendering a dataset</caption>
         *
         * var myDataset = [
         *     {id: 1, ...},
         *     {id: 2, ...},
         *     {id: 3, ...}
         * ];
         *
         * mixer.dataset(myDataset)
         *     .then(function(state) {
         *         console.log(state.totalShow === 3); // true
         *     });
         *
         * @example <caption>Example 2: Sorting a dataset</caption>
         *
         * // Create a new dataset in reverse order
         *
         * var newDataset = myDataset.slice().reverse();
         *
         * mixer.dataset(newDataset)
         *     .then(function(state) {
         *         console.log(state.activeDataset[0] === myDataset[2]); // true
         *     });
         *
         * @example <caption>Example 3: Removing an item from the dataset</caption>
         *
         * console.log(myDataset.length); // 3
         *
         * // Create a new dataset with the last item removed.
         *
         * var newDataset = myDataset.slice().pop();
         *
         * mixer.dataset(newDataset)
         *     .then(function(state) {
         *         console.log(state.totalShow === 2); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {Array.<object>}    dataset
         *      An array of objects, each one representing the underlying data model of a target to be rendered.
         * @param       {boolean}           [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}          [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        dataset: function() {
            var self        = this,
                instruction = self.parseDatasetArgs(arguments),
                operation   = null,
                queueItem   = null,
                animate     = false;

            self.callActions('beforeDataset', arguments);

            if (!self.isBusy) {
                if (instruction.callback) self.userCallback = instruction.callback;

                animate = (instruction.animate ^ self.config.animation.enable) ? instruction.animate : self.config.animation.enable;

                operation = self.getDataOperation(instruction.command.dataset);

                return self.goMix(animate, operation);
            } else {
                queueItem = new mixitup.QueueItem();

                queueItem.args          = arguments;
                queueItem.instruction   = instruction;

                return self.queueMix(queueItem);
            }
        },

        /**
         * Performs simultaneous `filter`, `sort`, `insert`, `remove` and `changeLayout`
         * operations as requested.
         *
         * @example
         *
         * .multimix(multimixCommand [, animate] [, callback])
         *
         * @example <caption>Example 1: Performing simultaneous filtering and sorting</caption>
         *
         * mixer.multimix({
         *     filter: '.category-b',
         *     sort: 'published-date:desc'
         * })
         *     .then(function(state) {
         *         console.log(state.activeFilter.selector === '.category-b'); // true
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *     });
         *
         * @example <caption>Example 2: Performing simultaneous sorting, insertion, and removal</caption>
         *
         * console.log(mixer.getState().totalShow); // 6
         *
         * // NB: When inserting via `multimix()`, an object should be provided as the value
         * // for the `insert` portion of the command, allowing for a collection of elements
         * // and an insertion index to be specified.
         *
         * mixer.multimix({
         *     sort: 'published-date:desc', // Sort the container, including any new elements
         *     insert: {
         *         collection: [newElementReferenceA, newElementReferenceB], // Add 2 new elements at index 5
         *         index: 5
         *     },
         *     remove: existingElementReference // Remove 1 existing element
         * })
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *         console.log(state.totalShow === 7); // true
         *     });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {object}    multimixCommand
         *      An object containing one or more things to do
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        multimix: function() {
            var self        = this,
                operation   = null,
                animate     = false,
                queueItem   = null,
                instruction = self.parseMultimixArgs(arguments);

            self.callActions('beforeMultimix', arguments);

            if (!self.isBusy) {
                operation = self.getOperation(instruction.command);

                if (self.config.controls.enable) {
                    // Update controls for API calls

                    if (instruction.command.filter && !self.isToggling) {
                        // As we are not toggling, reset the toggle array
                        // so new filter overrides existing toggles

                        self.toggleArray.length = 0;
                        self.buildToggleArray(operation.command);
                    }

                    if (self.queue.length < 1) {
                        self.updateControls(operation.command);
                    }
                }

                if (instruction.callback) self.userCallback = instruction.callback;

                // Always allow the instruction to override the instance setting

                animate = (instruction.animate ^ self.config.animation.enable) ?
                    instruction.animate :
                    self.config.animation.enable;

                self.callFilters('operationMultimix', operation, arguments);

                return self.goMix(animate, operation);
            } else {
                queueItem = new mixitup.QueueItem();

                queueItem.args           = arguments;
                queueItem.instruction    = instruction;
                queueItem.triggerElement = self.lastClicked;
                queueItem.isToggling     = self.isToggling;

                return self.queueMix(queueItem);
            }
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {object}            multimixCommand
         * @param   {boolean}           [isPreFetch]
         *      An optional boolean indicating that the operation is being pre-fetched for execution at a later time.
         * @return  {Operation|null}
         */

        getOperation: function(multimixCommand) {
            var self                = this,
                sortCommand         = multimixCommand.sort,
                filterCommand       = multimixCommand.filter,
                changeLayoutCommand = multimixCommand.changeLayout,
                removeCommand       = multimixCommand.remove,
                insertCommand       = multimixCommand.insert,
                operation           = new mixitup.Operation();

            operation = self.callFilters('operationUnmappedGetOperation', operation, arguments);

            operation.id                = h.randomHex();
            operation.command           = multimixCommand;
            operation.startState        = self.state;
            operation.triggerElement    = self.lastClicked;

            if (self.isBusy) {
                if (self.config.debug.showWarnings) {
                    console.warn(mixitup.messages.warningGetOperationInstanceBusy());
                }

                return null;
            }

            if (insertCommand) {
                self.insertTargets(insertCommand, operation);
            }

            if (removeCommand) {
                operation.toRemove = removeCommand.targets;
            }

            operation.startSort = operation.newSort = operation.startState.activeSort;
            operation.startOrder = operation.newOrder = self.targets;

            if (sortCommand) {
                operation.startSort = operation.startState.activeSort;
                operation.newSort   = sortCommand;

                operation.willSort = self.willSort(sortCommand, operation.startState.activeSort);

                if (operation.willSort) {
                    self.sortOperation(operation);
                }
            }

            operation.startFilter = operation.startState.activeFilter;

            if (filterCommand) {
                operation.newFilter = filterCommand;
            } else {
                operation.newFilter = h.extend(new mixitup.CommandFilter(), operation.startFilter);
            }

            if (operation.newFilter.selector === 'all') {
                operation.newFilter.selector = self.config.selectors.target;
            } else if (operation.newFilter.selector === 'none') {
                operation.newFilter.selector = '';
            }

            self.filterOperation(operation);

            operation.startContainerClassName = operation.startState.activeContainerClassName;

            if (changeLayoutCommand) {
                operation.newContainerClassName = changeLayoutCommand.containerClassName;

                if (operation.newContainerClassName !== operation.startContainerClassName) {
                    operation.willChangeLayout = true;
                }
            } else {
                operation.newContainerClassName = operation.startContainerClassName;
            }

            if (self.config.animation.enable) {
                // Populate the operation's position data

                self.getStartMixData(operation);
                self.setInter(operation);

                operation.docState = h.getDocumentState(self.dom.document);

                self.getInterMixData(operation);
                self.setFinal(operation);
                self.getFinalMixData(operation);

                self.parseEffects();

                operation.hasEffect = self.hasEffect();

                self.getTweenData(operation);
            }

            if (operation.willSort) {
                self.targets = operation.newOrder;
            }

            operation.newState = self.buildState(operation);

            return self.callFilters('operationMappedGetOperation', operation, arguments);
        },

        /**
         * Renders a previously created operation at a specific point in its path, as
         * determined by a multiplier between 0 and 1.
         *
         * @example
         * .tween(operation, multiplier)
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.Operation}     operation
         *      An operation object created via the `getOperation` method
         *
         * @param   {Float}                 multiplier
         *      Any number between 0 and 1 representing the percentage complete of the operation
         * @return  {void}
         */

        tween: function(operation, multiplier) {
            var target          = null,
                posData         = null,
                toHideIndex     = -1,
                i               = -1;

            multiplier = Math.min(multiplier, 1);
            multiplier = Math.max(multiplier, 0);

            for (i = 0; target = operation.show[i]; i++) {
                posData = operation.showPosData[i];

                target.applyTween(posData, multiplier);
            }

            for (i = 0; target = operation.hide[i]; i++) {
                if (target.isShown) {
                    target.hide();
                }

                if ((toHideIndex = operation.toHide.indexOf(target)) > -1) {
                    posData = operation.toHidePosData[toHideIndex];

                    if (!target.isShown) {
                        target.show();
                    }

                    target.applyTween(posData, multiplier);
                }
            }
        },

        /**
         * Inserts one or more new target elements into the container at a specified
         * index.
         *
         * To be indexed as targets, new elements must match the `selectors.target`
         * selector (`'.mix'` by default).
         *
         * @example
         *
         * .insert(newElements [, index] [, animate], [, callback])
         *
         * @example <caption>Example 1: Inserting a single element via reference</caption>
         *
         * console.log(mixer.getState().totalShow); // 0
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * mixer.insert(newElement)
         *     .then(function(state) {
         *         console.log(state.totalShow === 1); // true
         *     });
         *
         * @example <caption>Example 2: Inserting a single element via HTML string</caption>
         *
         * console.log(mixer.getState().totalShow); // 1
         *
         * // Create a new element via reference
         *
         * var newElementHtml = '&lt;div class="mix"&gt;&lt;/div&gt;';
         *
         * // Create and insert the new element at index 1
         *
         * mixer.insert(newElementHtml, 1)
         *     .then(function(state) {
         *         console.log(state.totalShow === 2); // true
         *         console.log(state.show[1].outerHTML === newElementHtml); // true
         *     });
         *
         * @example <caption>Example 3: Inserting multiple elements via reference</caption>
         *
         * console.log(mixer.getState().totalShow); // 2
         *
         * // Create an array of new elements to insert.
         *
         * var newElement1 = document.createElement('div');
         * var newElement2 = document.createElement('div');
         *
         * newElement1.classList.add('mix');
         * newElement2.classList.add('mix');
         *
         * var newElementsCollection = [newElement1, newElement2];
         *
         * // Insert the new elements starting at index 1
         *
         * mixer.insert(newElementsCollection, 1)
         *     .then(function(state) {
         *         console.log(state.totalShow === 4); // true
         *         console.log(state.show[1] === newElement1); // true
         *         console.log(state.show[2] === newElement2); // true
         *     });
         *
         * @example <caption>Example 4: Inserting a jQuery collection object containing one or more elements</caption>
         *
         * console.log(mixer.getState().totalShow); // 4
         *
         * var $newElement = $('&lt;div class="mix"&gt;&lt;/div&gt;');
         *
         * // Insert the new elements starting at index 3
         *
         * mixer.insert(newElementsCollection, 3)
         *     .then(function(state) {
         *         console.log(state.totalShow === 5); // true
         *         console.log(state.show[3] === $newElement[0]); // true
         *     });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {number}    index=0
         *      The index at which to insert the new element(s). `0` by default.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        insert: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);

            return self.multimix({
                insert: args.command
            }, args.animate, args.callback);
        },

        /**
         * Inserts one or more new elements before a provided reference element.
         *
         * @example
         *
         * .insertBefore(newElements, referenceElement [, animate] [, callback])
         *
         * @example <caption>Example: Inserting a new element before a reference element</caption>
         *
         * // An existing reference element is chosen at index 2
         *
         * var referenceElement = mixer.getState().show[2];
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * mixer.insertBefore(newElement, referenceElement)
         *     .then(function(state) {
         *         // The new element is inserted into the container at index 2, before the reference element
         *
         *         console.log(state.show[2] === newElement); // true
         *
         *         // The reference element is now at index 3
         *
         *         console.log(state.show[3] === referenceElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {HTMLElement}    referenceElement
         *      A reference to an existing element in the container to insert new elements before.
         *@param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        insertBefore: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);

            return self.insert(args.command.collection, 'before', args.command.sibling, args.animate, args.callback);
        },

        /**
         * Inserts one or more new elements after a provided reference element.
         *
         * @example
         *
         * .insertAfter(newElements, referenceElement [, animate] [, callback])
         *
         * @example <caption>Example: Inserting a new element after a reference element</caption>
         *
         * // An existing reference element is chosen at index 2
         *
         * var referenceElement = mixer.getState().show[2];
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * mixer.insertAfter(newElement, referenceElement)
         *     .then(function(state) {
         *         // The new element is inserted into the container at index 3, after the reference element
         *
         *         console.log(state.show[3] === newElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {HTMLElement}    referenceElement
         *      A reference to an existing element in the container to insert new elements after.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        insertAfter: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);

            return self.insert(args.command.collection, 'after', args.command.sibling, args.animate, args.callback);
        },

        /**
         * Inserts one or more new elements into the container before all existing targets.
         *
         * @example
         *
         * .prepend(newElements [,animate] [,callback])
         *
         * @example <caption>Example: Prepending a new element</caption>
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * // Insert the element into the container
         *
         * mixer.prepend(newElement)
         *     .then(function(state) {
         *         console.log(state.show[0] === newElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        prepend: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);

            return self.insert(0, args.command.collection, args.animate, args.callback);
        },

        /**
         * Inserts one or more new elements into the container after all existing targets.
         *
         * @example
         *
         * .append(newElements [,animate] [,callback])
         *
         * @example <caption>Example: Appending a new element</caption>
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * // Insert the element into the container
         *
         * mixer.append(newElement)
         *     .then(function(state) {
         *         console.log(state.show[state.show.length - 1] === newElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        append: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);

            return self.insert(self.state.totalTargets, args.command.collection, args.animate, args.callback);
        },

        /**
         * Removes one or more existing target elements from the container.
         *
         * @example
         *
         * .remove(elements [, animate] [, callback])
         *
         * @example <caption>Example 1: Removing an element by reference</caption>
         *
         * var elementToRemove = containerEl.firstElementChild;
         *
         * mixer.remove(elementToRemove)
         *      .then(function(state) {
         *          console.log(state.targets.indexOf(elementToRemove) === -1); // true
         *      });
         *
         * @example <caption>Example 2: Removing a collection of elements by reference</caption>
         *
         * var elementsToRemove = containerEl.querySelectorAll('.category-a');
         *
         * console.log(elementsToRemove.length) // 3
         *
         * mixer.remove(elementsToRemove)
         *      .then(function() {
         *          console.log(containerEl.querySelectorAll('.category-a').length); // 0
         *      });
         *
         * @example <caption>Example 3: Removing one or more elements by selector</caption>
         *
         * mixer.remove('.category-a')
         *      .then(function() {
         *          console.log(containerEl.querySelectorAll('.category-a').length); // 0
         *      });
         *
         * @example <caption>Example 4: Removing an element by index</caption>
         *
         * console.log(mixer.getState.totalShow); // 4
         *
         * // Remove the element at index 3
         *
         * mixer.remove(3)
         *      .then(function(state) {
         *          console.log(state.totalShow); // 3
         *          console.log(state.show[3]); // undefined
         *      });
         *
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string|number)}    elements
         *      A reference to a single element to remove, an array-like collection of elements, a selector string, or the index of an element to remove.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        remove: function() {
            var self = this,
                args = self.parseRemoveArgs(arguments);

            return self.multimix({
                remove: args.command
            }, args.animate, args.callback);
        },

        /**
         * Retrieves the the value of any property or sub-object within the current
         * mixitup configuration, or the whole configuration object.
         *
         * @example
         *
         * .getConfig([stringKey])
         *
         * @example <caption>Example 1: retrieve the entire configuration object</caption>
         *
         * var config = mixer.getConfig(); // Config { ... }
         *
         * @example <caption>Example 2: retrieve a named sub-object of configuration object</caption>
         *
         * var animation = mixer.getConfig('animation'); // ConfigAnimation { ... }
         *
         * @example <caption>Example 3: retrieve a value of configuration object via a dot-notation string key</caption>
         *
         * var effects = mixer.getConfig('animation.effects'); // 'fade scale'
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {string}    [stringKey]    A "dot-notation" string key
         * @return      {*}
         */

        getConfig: function(stringKey) {
            var self    = this,
                value   = null;

            if (!stringKey) {
                value = self.config;
            } else {
                value = h.getProperty(self.config, stringKey);
            }

            return self.callFilters('valueGetConfig', value, arguments);
        },

        /**
         * Updates the configuration of the mixer, after it has been instantiated.
         *
         * See the Configuration Object documentation for a full list of avilable
         * configuration options.
         *
         * @example
         *
         * .configure(config)
         *
         * @example <caption>Example 1: Updating animation options</caption>
         *
         * mixer.configure({
         *     animation: {
         *         effects: 'fade translateX(-100%)',
         *         duration: 300
         *     }
         * });
         *
         * @example <caption>Example 2: Removing a callback after it has been set</caption>
         *
         * var mixer;
         *
         * function handleMixEndOnce() {
         *     // Do something ..
         *
         *     // Then nullify the callback
         *
         *     mixer.configure({
         *         callbacks: {
         *             onMixEnd: null
         *         }
         *     });
         * };
         *
         * // Instantiate a mixer with a callback defined
         *
         * mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixEnd: handleMixEndOnce
         *     }
         * });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {object}    config
         *      An object containing one of more configuration options.
         * @return      {void}
         */

        configure: function(config) {
            var self = this;

            self.callActions('beforeConfigure', arguments);

            h.extend(self.config, config, true, true);

            self.callActions('afterConfigure', arguments);
        },

        /**
         * Returns an object containing information about the current state of the
         * mixer. See the State Object documentation for more information.
         *
         * NB: State objects are immutable and should therefore be regenerated
         * after any operation.
         *
         * @example
         *
         * .getState();
         *
         * @example <caption>Example: Retrieving a state object</caption>
         *
         * var state = mixer.getState();
         *
         * console.log(state.totalShow + 'targets are currently shown');
         *
         * @public
         * @instance
         * @since       2.0.0
         * @return      {mixitup.State} An object reflecting the current state of the mixer.
         */

        getState: function() {
            var self    = this,
                state   = null;

            state = new mixitup.State();

            h.extend(state, self.state);

            h.freeze(state);

            return self.callFilters('stateGetState', state, arguments);
        },

        /**
         * Forces the re-indexing all targets within the container.
         *
         * This should only be used if some other piece of code in your application
         * has manipulated the contents of your container, which should be avoided.
         *
         * If you need to add or remove target elements from the container, use
         * the built-in `.insert()` or `.remove()` methods, and MixItUp will keep
         * itself up to date.
         *
         * @example
         *
         * .forceRefresh()
         *
         * @example <caption>Example: Force refreshing the mixer after external DOM manipulation</caption>
         *
         * console.log(mixer.getState().totalShow); // 3
         *
         * // An element is removed from the container via some external DOM manipulation code:
         *
         * containerEl.removeChild(containerEl.firstElementChild);
         *
         * // The mixer does not know that the number of targets has changed:
         *
         * console.log(mixer.getState().totalShow); // 3
         *
         * mixer.forceRefresh();
         *
         * // After forceRefresh, the mixer is in sync again:
         *
         * console.log(mixer.getState().totalShow); // 2
         *
         * @public
         * @instance
         * @since 2.1.2
         * @return {void}
         */

        forceRefresh: function() {
            var self = this;

            self.indexTargets();
        },

        /**
         * Forces the re-rendering of all targets when using the Dataset API.
         *
         * By default, targets are only re-rendered when `data.dirtyCheck` is
         * enabled, and an item's data has changed when `dataset()` is called.
         *
         * The `forceRender()` method allows for the re-rendering of all targets
         * in response to some arbitrary event, such as the changing of the target
         * render function.
         *
         * Targets are rendered against their existing data.
         *
         * @example
         *
         * .forceRender()
         *
         * @example <caption>Example: Force render targets after changing the target render function</caption>
         *
         * console.log(container.innerHTML); // ... &lt;span class="mix"&gt;Foo&lt;/span&gt; ...
         *
         * mixer.configure({
         *     render: {
         *         target: (item) => `&lt;a href="/${item.slug}/" class="mix"&gt;${item.title}&lt;/a&gt;`
         *     }
         * });
         *
         * mixer.forceRender();
         *
         * console.log(container.innerHTML); // ... &lt;a href="/foo/" class="mix"&gt;Foo&lt;/a&gt; ...
         *
         * @public
         * @instance
         * @since 3.2.1
         * @return {void}
         */

        forceRender: function() {
            var self    = this,
                target  = null,
                el      = null,
                id      = '';

            for (id in self.cache) {
                target = self.cache[id];

                el = target.render(target.data);

                if (el !== target.dom.el) {
                    // Update target element reference

                    if (target.isInDom) {
                        target.unbindEvents();

                        self.dom.parent.replaceChild(el, target.dom.el);
                    }

                    if (!target.isShown) {
                        el.style.display = 'none';
                    }

                    target.dom.el = el;

                    if (target.isInDom) {
                        target.bindEvents();
                    }
                }
            }

            self.state = self.buildState(self.lastOperation);
        },

        /**
         * Removes mixitup functionality from the container, unbinds all control
         * event handlers, and deletes the mixer instance from MixItUp's internal
         * cache.
         *
         * This should be performed whenever a mixer's container is removed from
         * the DOM, such as during a page change in a single page application,
         * or React's `componentWillUnmount()`.
         *
         * @example
         *
         * .destroy([cleanUp])
         *
         * @example <caption>Example: Destroying the mixer before removing its container element</caption>
         *
         * mixer.destroy();
         *
         * containerEl.parentElement.removeChild(containerEl);
         *
         * @public
         * @instance
         * @since   2.0.0
         * @param   {boolean}   [cleanUp=false]
         *     An optional boolean dictating whether or not to clean up any inline `display: none;` styling applied to hidden targets.
         * @return  {void}
         */

        destroy: function(cleanUp) {
            var self    = this,
                control = null,
                target  = null,
                i       = 0;

            self.callActions('beforeDestroy', arguments);

            for (i = 0; control = self.controls[i]; i++) {
                control.removeBinding(self);
            }

            for (i = 0; target = self.targets[i]; i++) {
                if (cleanUp) {
                    target.show();
                }

                target.unbindEvents();
            }

            if (self.dom.container.id.match(/^MixItUp/)) {
                self.dom.container.removeAttribute('id');
            }

            delete mixitup.instances[self.id];

            self.callActions('afterDestroy', arguments);
        }
    });

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.IMoveData = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.posIn          = null;
        this.posOut         = null;
        this.operation      = null;
        this.callback       = null;
        this.statusChange   = '';
        this.duration       = -1;
        this.staggerIndex   = -1;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.IMoveData);

    mixitup.IMoveData.prototype = Object.create(mixitup.Base.prototype);

    mixitup.IMoveData.prototype.constructor = mixitup.IMoveData;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.TargetDom = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.el = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.TargetDom);

    mixitup.TargetDom.prototype = Object.create(mixitup.Base.prototype);

    mixitup.TargetDom.prototype.constructor = mixitup.TargetDom;

    /**
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Target = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.id         = '';
        this.sortString = '';
        this.mixer      = null;
        this.callback   = null;
        this.isShown    = false;
        this.isBound    = false;
        this.isExcluded = false;
        this.isInDom    = false;
        this.handler    = null;
        this.operation  = null;
        this.data       = null;
        this.dom        = new mixitup.TargetDom();

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Target);

    mixitup.Target.prototype = Object.create(mixitup.Base.prototype);

    h.extend(mixitup.Target.prototype, {
        constructor: mixitup.Target,

        /**
         * Initialises a newly instantiated Target.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {(Element|null)}    el
         * @param   {object}            mixer
         * @param   {object}            [data]
         * @return  {void}
         */

        init: function(el, mixer, data) {
            var self = this,
                id   = '';

            self.callActions('beforeInit', arguments);

            self.mixer = mixer;

            if (!el) {
                // If no element is provided, render it

                el = self.render(data);
            }

            self.cacheDom(el);

            self.bindEvents();

            if (self.dom.el.style.display !== 'none') {
                self.isShown = true;
            }

            if (data && mixer.config.data.uidKey) {
                if (typeof (id = data[mixer.config.data.uidKey]) === 'undefined' || id.toString().length < 1) {
                    throw new TypeError(mixitup.messages.errorDatasetInvalidUidKey({
                        uidKey: mixer.config.data.uidKey
                    }));
                }

                self.id     = id;
                self.data   = data;

                mixer.cache[id] = self;
            }

            self.callActions('afterInit', arguments);
        },

        /**
         * Renders the target element using a user-defined renderer function.
         *
         * @private
         * @instance
         * @since   3.1.4
         * @param   {object} data
         * @return  {void}
         */

        render: function(data) {
            var self    = this,
                render  = null,
                el      = null,
                temp    = null,
                output  = '';

            self.callActions('beforeRender', arguments);

            render = self.callFilters('renderRender', self.mixer.config.render.target, arguments);

            if (typeof render !== 'function') {
                throw new TypeError(mixitup.messages.errorDatasetRendererNotSet());
            }

            output = render(data);

            if (output && typeof output === 'object' && h.isElement(output)) {
                el = output;
            } else if (typeof output === 'string') {
                temp = document.createElement('div');
                temp.innerHTML = output;

                el = temp.firstElementChild;
            }

            return self.callFilters('elRender', el, arguments);
        },

        /**
         * Caches references of DOM elements neccessary for the target's functionality.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Element} el
         * @return  {void}
         */

        cacheDom: function(el) {
            var self = this;

            self.callActions('beforeCacheDom', arguments);

            self.dom.el = el;

            self.callActions('afterCacheDom', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}    attributeName
         * @return  {void}
         */

        getSortString: function(attributeName) {
            var self    = this,
                value   = self.dom.el.getAttribute('data-' + attributeName) || '';

            self.callActions('beforeGetSortString', arguments);

            value = isNaN(value * 1) ?
                value.toLowerCase() :
                value * 1;

            self.sortString = value;

            self.callActions('afterGetSortString', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */

        show: function() {
            var self = this;

            self.callActions('beforeShow', arguments);

            if (!self.isShown) {
                self.dom.el.style.display = '';

                self.isShown = true;
            }

            self.callActions('afterShow', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */

        hide: function() {
            var self = this;

            self.callActions('beforeHide', arguments);

            if (self.isShown) {
                self.dom.el.style.display = 'none';

                self.isShown = false;
            }

            self.callActions('afterHide', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.IMoveData} moveData
         * @return  {void}
         */

        move: function(moveData) {
            var self = this;

            self.callActions('beforeMove', arguments);

            if (!self.isExcluded) {
                self.mixer.targetsMoved++;
            }

            self.applyStylesIn(moveData);

            requestAnimationFrame(function() {
                self.applyStylesOut(moveData);
            });

            self.callActions('afterMove', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {object}    posData
         * @param   {number}    multiplier
         * @return  {void}
         */

        applyTween: function(posData, multiplier) {
            var self                    = this,
                propertyName            = '',
                tweenData               = null,
                posIn                   = posData.posIn,
                currentTransformValues  = [],
                currentValues           = new mixitup.StyleData(),
                i                       = -1;

            self.callActions('beforeApplyTween', arguments);

            currentValues.x     = posIn.x;
            currentValues.y     = posIn.y;

            if (multiplier === 0) {
                self.hide();
            } else if (!self.isShown) {
                self.show();
            }

            for (i = 0; propertyName = mixitup.features.TWEENABLE[i]; i++) {
                tweenData = posData.tweenData[propertyName];

                if (propertyName === 'x') {
                    if (!tweenData) continue;

                    currentValues.x = posIn.x + (tweenData * multiplier);
                } else if (propertyName === 'y') {
                    if (!tweenData) continue;

                    currentValues.y = posIn.y + (tweenData * multiplier);
                } else if (tweenData instanceof mixitup.TransformData) {
                    if (!tweenData.value) continue;

                    currentValues[propertyName].value =
                        posIn[propertyName].value + (tweenData.value * multiplier);

                    currentValues[propertyName].unit  = tweenData.unit;

                    currentTransformValues.push(
                        propertyName + '(' + currentValues[propertyName].value + tweenData.unit + ')'
                    );
                } else {
                    if (!tweenData) continue;

                    currentValues[propertyName] = posIn[propertyName] + (tweenData * multiplier);

                    self.dom.el.style[propertyName] = currentValues[propertyName];
                }
            }

            if (currentValues.x || currentValues.y) {
                currentTransformValues.unshift('translate(' + currentValues.x + 'px, ' + currentValues.y + 'px)');
            }

            if (currentTransformValues.length) {
                self.dom.el.style[mixitup.features.transformProp] = currentTransformValues.join(' ');
            }

            self.callActions('afterApplyTween', arguments);
        },

        /**
         * Applies the initial styling to a target element before any transition
         * is applied.
         *
         * @private
         * @instance
         * @param   {mixitup.IMoveData} moveData
         * @return  {void}
         */

        applyStylesIn: function(moveData) {
            var self            = this,
                posIn           = moveData.posIn,
                isFading        = self.mixer.effectsIn.opacity !== 1,
                transformValues = [];

            self.callActions('beforeApplyStylesIn', arguments);

            transformValues.push('translate(' + posIn.x + 'px, ' + posIn.y + 'px)');

            if (self.mixer.config.animation.animateResizeTargets) {
                if (moveData.statusChange !== 'show') {
                    // Don't apply posIn width or height or showing, as will be 0

                    self.dom.el.style.width  = posIn.width + 'px';
                    self.dom.el.style.height = posIn.height + 'px';
                }

                self.dom.el.style.marginRight  = posIn.marginRight + 'px';
                self.dom.el.style.marginBottom = posIn.marginBottom + 'px';
            }

            isFading && (self.dom.el.style.opacity = posIn.opacity);

            if (moveData.statusChange === 'show') {
                transformValues = transformValues.concat(self.mixer.transformIn);
            }

            self.dom.el.style[mixitup.features.transformProp] = transformValues.join(' ');

            self.callActions('afterApplyStylesIn', arguments);
        },

        /**
         * Applies a transition followed by the final styles for the element to
         * transition towards.
         *
         * @private
         * @instance
         * @param   {mixitup.IMoveData} moveData
         * @return  {void}
         */

        applyStylesOut: function(moveData) {
            var self            = this,
                transitionRules = [],
                transformValues = [],
                isResizing      = self.mixer.config.animation.animateResizeTargets,
                isFading        = typeof self.mixer.effectsIn.opacity !== 'undefined';

            self.callActions('beforeApplyStylesOut', arguments);

            // Build the transition rules

            transitionRules.push(self.writeTransitionRule(
                mixitup.features.transformRule,
                moveData.staggerIndex
            ));

            if (moveData.statusChange !== 'none') {
                transitionRules.push(self.writeTransitionRule(
                    'opacity',
                    moveData.staggerIndex,
                    moveData.duration
                ));
            }

            if (isResizing) {
                transitionRules.push(self.writeTransitionRule(
                    'width',
                    moveData.staggerIndex,
                    moveData.duration
                ));

                transitionRules.push(self.writeTransitionRule(
                    'height',
                    moveData.staggerIndex,
                    moveData.duration
                ));

                transitionRules.push(self.writeTransitionRule(
                    'margin',
                    moveData.staggerIndex,
                    moveData.duration
                ));
            }

            // If no callback was provided, the element will
            // not transition in any way so tag it as "immovable"

            if (!moveData.callback) {
                self.mixer.targetsImmovable++;

                if (self.mixer.targetsMoved === self.mixer.targetsImmovable) {
                    // If the total targets moved is equal to the
                    // number of immovable targets, the operation
                    // should be considered finished

                    self.mixer.cleanUp(moveData.operation);
                }

                return;
            }

            // If the target will transition in some fasion,
            // assign a callback function

            self.operation = moveData.operation;
            self.callback = moveData.callback;

            // As long as the target is not excluded, increment
            // the total number of targets bound

            !self.isExcluded && self.mixer.targetsBound++;

            // Tag the target as bound to differentiate from transitionEnd
            // events that may come from stylesheet driven effects

            self.isBound = true;

            // Apply the transition

            self.applyTransition(transitionRules);

            // Apply width, height and margin negation

            if (isResizing && moveData.posOut.width > 0 && moveData.posOut.height > 0) {
                self.dom.el.style.width        = moveData.posOut.width + 'px';
                self.dom.el.style.height       = moveData.posOut.height + 'px';
                self.dom.el.style.marginRight  = moveData.posOut.marginRight + 'px';
                self.dom.el.style.marginBottom = moveData.posOut.marginBottom + 'px';
            }

            if (!self.mixer.config.animation.nudge && moveData.statusChange === 'hide') {
                // If we're not nudging, the translation should be
                // applied before any other transforms to prevent
                // lateral movement

                transformValues.push('translate(' + moveData.posOut.x + 'px, ' + moveData.posOut.y + 'px)');
            }

            // Apply fade

            switch (moveData.statusChange) {
                case 'hide':
                    isFading && (self.dom.el.style.opacity = self.mixer.effectsOut.opacity);

                    transformValues = transformValues.concat(self.mixer.transformOut);

                    break;
                case 'show':
                    isFading && (self.dom.el.style.opacity = 1);
            }

            if (
                self.mixer.config.animation.nudge ||
                (!self.mixer.config.animation.nudge && moveData.statusChange !== 'hide')
            ) {
                // Opposite of above - apply translate after
                // other transform

                transformValues.push('translate(' + moveData.posOut.x + 'px, ' + moveData.posOut.y + 'px)');
            }

            // Apply transforms

            self.dom.el.style[mixitup.features.transformProp] = transformValues.join(' ');

            self.callActions('afterApplyStylesOut', arguments);
        },

        /**
         * Combines the name of a CSS property with the appropriate duration and delay
         * values to created a valid transition rule.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}    property
         * @param   {number}    staggerIndex
         * @param   {number}    duration
         * @return  {string}
         */

        writeTransitionRule: function(property, staggerIndex, duration) {
            var self  = this,
                delay = self.getDelay(staggerIndex),
                rule  = '';

            rule = property + ' ' +
                (duration > 0 ? duration : self.mixer.config.animation.duration) + 'ms ' +
                delay + 'ms ' +
                (property === 'opacity' ? 'linear' : self.mixer.config.animation.easing);

            return self.callFilters('ruleWriteTransitionRule', rule, arguments);
        },

        /**
         * Calculates the transition delay for each target element based on its index, if
         * staggering is applied. If defined, A custom `animation.staggerSeqeuence`
         * function can be used to manipulate the order of indices to produce custom
         * stagger effects (e.g. for use in a grid with irregular row lengths).
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {number}    index
         * @return  {number}
         */

        getDelay: function(index) {
            var self    = this,
                delay   = -1;

            if (typeof self.mixer.config.animation.staggerSequence === 'function') {
                index = self.mixer.config.animation.staggerSequence.call(self, index, self.state);
            }

            delay = !!self.mixer.staggerDuration ? index * self.mixer.staggerDuration : 0;

            return self.callFilters('delayGetDelay', delay, arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string[]}  rules
         * @return  {void}
         */

        applyTransition: function(rules) {
            var self                = this,
                transitionString    = rules.join(', ');

            self.callActions('beforeApplyTransition', arguments);

            self.dom.el.style[mixitup.features.transitionProp] = transitionString;

            self.callActions('afterApplyTransition', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Event} e
         * @return  {void}
         */

        handleTransitionEnd: function(e) {
            var self        = this,
                propName    = e.propertyName,
                canResize   = self.mixer.config.animation.animateResizeTargets;

            self.callActions('beforeHandleTransitionEnd', arguments);

            if (
                self.isBound &&
                e.target.matches(self.mixer.config.selectors.target) &&
                (
                    propName.indexOf('transform') > -1 ||
                    propName.indexOf('opacity') > -1 ||
                    canResize && propName.indexOf('height') > -1 ||
                    canResize && propName.indexOf('width') > -1 ||
                    canResize && propName.indexOf('margin') > -1
                )
            ) {
                self.callback.call(self, self.operation);

                self.isBound = false;
                self.callback = null;
                self.operation = null;
            }

            self.callActions('afterHandleTransitionEnd', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Event}     e
         * @return  {void}
         */

        eventBus: function(e) {
            var self = this;

            self.callActions('beforeEventBus', arguments);

            switch (e.type) {
                case 'webkitTransitionEnd':
                case 'transitionend':
                    self.handleTransitionEnd(e);
            }

            self.callActions('afterEventBus', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */

        unbindEvents: function() {
            var self = this;

            self.callActions('beforeUnbindEvents', arguments);

            h.off(self.dom.el, 'webkitTransitionEnd', self.handler);
            h.off(self.dom.el, 'transitionend', self.handler);

            self.callActions('afterUnbindEvents', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */

        bindEvents: function() {
            var self                = this,
                transitionEndEvent  = '';

            self.callActions('beforeBindEvents', arguments);

            transitionEndEvent = mixitup.features.transitionPrefix === 'webkit' ? 'webkitTransitionEnd' : 'transitionend';

            self.handler = function(e) {
                return self.eventBus(e);
            };

            h.on(self.dom.el, transitionEndEvent, self.handler);

            self.callActions('afterBindEvents', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {boolean}   [getBox]
         * @return  {PosData}
         */

        getPosData: function(getBox) {
            var self    = this,
                styles  = {},
                rect    = null,
                posData = new mixitup.StyleData();

            self.callActions('beforeGetPosData', arguments);

            posData.x = self.dom.el.offsetLeft;
            posData.y = self.dom.el.offsetTop;

            if (self.mixer.config.animation.animateResizeTargets || getBox) {
                rect = self.dom.el.getBoundingClientRect();

                posData.top     = rect.top;
                posData.right   = rect.right;
                posData.bottom  = rect.bottom;
                posData.left    = rect.left;

                posData.width  = rect.width;
                posData.height = rect.height;
            }

            if (self.mixer.config.animation.animateResizeTargets) {
                styles = window.getComputedStyle(self.dom.el);

                posData.marginBottom = parseFloat(styles.marginBottom);
                posData.marginRight  = parseFloat(styles.marginRight);
            }

            return self.callFilters('posDataGetPosData', posData, arguments);
        },

        /**
         * @private
         * @instance
         * @since       3.0.0
         * @return      {void}
         */

        cleanUp: function() {
            var self = this;

            self.callActions('beforeCleanUp', arguments);

            self.dom.el.style[mixitup.features.transformProp]  = '';
            self.dom.el.style[mixitup.features.transitionProp] = '';
            self.dom.el.style.opacity                          = '';

            if (self.mixer.config.animation.animateResizeTargets) {
                self.dom.el.style.width        = '';
                self.dom.el.style.height       = '';
                self.dom.el.style.marginRight  = '';
                self.dom.el.style.marginBottom = '';
            }

            self.callActions('afterCleanUp', arguments);
        }
    });

    /**
     * A jQuery-collection-like wrapper around one or more `mixitup.Mixer` instances
     * allowing simultaneous control of said instances similar to the MixItUp 2 API.
     *
     * @example
     * new mixitup.Collection(instances)
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     * @param       {mixitup.Mixer[]}   instances
     */

    mixitup.Collection = function(instances) {
        var instance    = null,
            i           = -1;

        this.callActions('beforeConstruct');

        for (i = 0; instance = instances[i]; i++) {
            this[i] = instance;
        }

        this.length = instances.length;

        this.callActions('afterConstruct');

        h.freeze(this);
    };

    mixitup.BaseStatic.call(mixitup.Collection);

    mixitup.Collection.prototype = Object.create(mixitup.Base.prototype);

    h.extend(mixitup.Collection.prototype,
    /** @lends mixitup.Collection */
    {
        constructor: mixitup.Collection,

        /**
         * Calls a method on all instances in the collection by passing the method
         * name as a string followed by any applicable parameters to be curried into
         * to the method.
         *
         * @example
         * .mixitup(methodName[,arg1][,arg2..]);
         *
         * @example
         * var collection = new Collection([mixer1, mixer2]);
         *
         * return collection.mixitup('filter', '.category-a')
         *     .then(function(states) {
         *         state.forEach(function(state) {
         *             console.log(state.activeFilter.selector); // .category-a
         *         });
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {string}  methodName
         * @return      {Promise<Array<mixitup.State>>}
         */

        mixitup: function(methodName) {
            var self        = this,
                instance    = null,
                args        = Array.prototype.slice.call(arguments),
                tasks       = [],
                i           = -1;

            this.callActions('beforeMixitup');

            args.shift();

            for (i = 0; instance = self[i]; i++) {
                tasks.push(instance[methodName].apply(instance, args));
            }

            return self.callFilters('promiseMixitup', h.all(tasks, mixitup.libraries), arguments);
        }
    });

    /**
     * `mixitup.Operation` objects contain all data neccessary to describe the full
     * lifecycle of any MixItUp operation. They can be used to compute and store an
     * operation for use at a later time (e.g. programmatic tweening).
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Operation = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.id                      = '';

        this.args                    = [];
        this.command                 = null;
        this.showPosData             = [];
        this.toHidePosData           = [];

        this.startState              = null;
        this.newState                = null;
        this.docState                = null;

        this.willSort                = false;
        this.willChangeLayout        = false;
        this.hasEffect               = false;
        this.hasFailed               = false;

        this.triggerElement          = null;

        this.show                    = [];
        this.hide                    = [];
        this.matching                = [];
        this.toShow                  = [];
        this.toHide                  = [];
        this.toMove                  = [];
        this.toRemove                = [];
        this.startOrder              = [];
        this.newOrder                = [];
        this.startSort               = null;
        this.newSort                 = null;
        this.startFilter             = null;
        this.newFilter               = null;
        this.startDataset            = null;
        this.newDataset              = null;
        this.viewportDeltaX          = 0;
        this.viewportDeltaY          = 0;
        this.startX                  = 0;
        this.startY                  = 0;
        this.startHeight             = 0;
        this.startWidth              = 0;
        this.newX                    = 0;
        this.newY                    = 0;
        this.newHeight               = 0;
        this.newWidth                = 0;
        this.startContainerClassName = '';
        this.startDisplay            = '';
        this.newContainerClassName   = '';
        this.newDisplay              = '';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Operation);

    mixitup.Operation.prototype = Object.create(mixitup.Base.prototype);

    mixitup.Operation.prototype.constructor = mixitup.Operation;

    /**
     * `mixitup.State` objects expose various pieces of data detailing the state of
     * a MixItUp instance. They are provided at the start and end of any operation via
     * callbacks and events, with the most recent state stored between operations
     * for retrieval at any time via the API.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @public
     * @since       3.0.0
     */

    mixitup.State = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * The ID of the mixer instance.
         *
         * @name        id
         * @memberof    mixitup.State
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.id = '';

        /**
         * The currently active filter command as set by a control click or API call.
         *
         * @name        activeFilter
         * @memberof    mixitup.State
         * @instance
         * @type        {mixitup.CommandFilter}
         * @default     null
         */

        this.activeFilter = null;

        /**
         * The currently active sort command as set by a control click or API call.
         *
         * @name        activeSort
         * @memberof    mixitup.State
         * @instance
         * @type        {mixitup.CommandSort}
         * @default     null
         */

        this.activeSort = null;

        /**
         * The current layout-specific container class name, if applied.
         *
         * @name        activeContainerClassName
         * @memberof    mixitup.State
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.activeContainerClassName = '';

        /**
         * A reference to the container element that the mixer is instantiated on.
         *
         * @name        container
         * @memberof    mixitup.State
         * @instance
         * @type        {Element}
         * @default     null
         */

        this.container = null;

        /**
         * An array of all target elements indexed by the mixer.
         *
         * @name        targets
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */

        this.targets = [];

        /**
         * An array of all target elements not matching the current filter.
         *
         * @name        hide
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */

        this.hide = [];

        /**
         * An array of all target elements matching the current filter and any additional
         * limits applied such as pagination.
         *
         * @name        show
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */

        this.show = [];

        /**
         * An array of all target elements matching the current filter irrespective of
         * any additional limits applied such as pagination.
         *
         * @name        matching
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */

        this.matching = [];

        /**
         * An integer representing the total number of target elements indexed by the
         * mixer. Equivalent to `state.targets.length`.
         *
         * @name        totalTargets
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */

        this.totalTargets = -1;

        /**
         * An integer representing the total number of target elements matching the
         * current filter and any additional limits applied such as pagination.
         * Equivalent to `state.show.length`.
         *
         * @name        totalShow
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */

        this.totalShow = -1;

        /**
         * An integer representing the total number of target elements not matching
         * the current filter. Equivalent to `state.hide.length`.
         *
         * @name        totalHide
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */

        this.totalHide = -1;

        /**
         * An integer representing the total number of target elements matching the
         * current filter irrespective of any other limits applied such as pagination.
         * Equivalent to `state.matching.length`.
         *
         * @name        totalMatching
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */

        this.totalMatching = -1;

        /**
         * A boolean indicating whether the last operation "failed", i.e. no targets
         * could be found matching the filter.
         *
         * @name        hasFailed
         * @memberof    mixitup.State
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.hasFailed = false;

        /**
         * The DOM element that was clicked if the last operation was triggered by the
         * clicking of a control and not an API call.
         *
         * @name        triggerElement
         * @memberof    mixitup.State
         * @instance
         * @type        {Element|null}
         * @default     null
         */

        this.triggerElement = null;

        /**
         * The currently active dataset underlying the rendered targets, if the
         * dataset API is in use.
         *
         * @name        activeDataset
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<object>}
         * @default     null
         */

        this.activeDataset = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.State);

    mixitup.State.prototype = Object.create(mixitup.Base.prototype);

    mixitup.State.prototype.constructor = mixitup.State;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.UserInstruction = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.command    = {};
        this.animate    = false;
        this.callback   = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.UserInstruction);

    mixitup.UserInstruction.prototype = Object.create(mixitup.Base.prototype);

    mixitup.UserInstruction.prototype.constructor = mixitup.UserInstruction;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Messages = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /* Errors
        ----------------------------------------------------------------------------- */

        this.ERROR_FACTORY_INVALID_CONTAINER =
            '[MixItUp] An invalid selector or element reference was passed to the mixitup factory function';

        this.ERROR_FACTORY_CONTAINER_NOT_FOUND =
            '[MixItUp] The provided selector yielded no container element';

        this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS =
            '[MixItUp] Invalid value for `animation.effects`';

        this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE =
            '[MixItUp] Invalid value for `controls.scope`';

        this.ERROR_CONFIG_INVALID_PROPERTY =
            '[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}';

        this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION =
            '. Did you mean "${probableMatch}"?';

        this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET =
            '[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`';

        this.ERROR_DATASET_INVALID_UID_KEY =
            '[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items';

        this.ERROR_DATASET_DUPLICATE_UID =
            '[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.';

        this.ERROR_INSERT_INVALID_ARGUMENTS =
            '[MixItUp] Please provider either an index or a sibling and position to insert, not both';

        this.ERROR_INSERT_PREEXISTING_ELEMENT =
            '[MixItUp] An element to be inserted already exists in the container';

        this.ERROR_FILTER_INVALID_ARGUMENTS =
            '[MixItUp] Please provide either a selector or collection `.filter()`, not both';

        this.ERROR_DATASET_NOT_SET =
            '[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`';

        this.ERROR_DATASET_PRERENDERED_MISMATCH =
            '[MixItUp] `load.dataset` does not match pre-rendered targets';

        this.ERROR_DATASET_RENDERER_NOT_SET =
            '[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`';

        /* Warnings
        ----------------------------------------------------------------------------- */

        this.WARNING_FACTORY_PREEXISTING_INSTANCE =
            '[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored.' +
            ' If you wish to perform additional methods on this instance, please create a reference.';

        this.WARNING_INSERT_NO_ELEMENTS =
            '[MixItUp] WARNING: No valid elements were passed to `.insert()`';

        this.WARNING_REMOVE_NO_ELEMENTS =
            '[MixItUp] WARNING: No valid elements were passed to `.remove()`';

        this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL =
            '[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the ' +
            'queue is full or queuing is disabled.';

        this.WARNING_GET_OPERATION_INSTANCE_BUSY =
            '[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy.';

        this.WARNING_NO_PROMISE_IMPLEMENTATION =
            '[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install' +
            ' an ES6 Promise polyfill.';

        this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES =
            '[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements' +
            ' which may product unexpected sort output';

        this.callActions('afterConstruct');

        this.compileTemplates();

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Messages);

    mixitup.Messages.prototype = Object.create(mixitup.Base.prototype);

    mixitup.Messages.prototype.constructor = mixitup.Messages;

    /**
     * @return {void}
     */

    mixitup.Messages.prototype.compileTemplates = function() {
        var errorKey        = '';
        var errorMessage    = '';

        for (errorKey in this) {
            if (typeof (errorMessage = this[errorKey]) !== 'string') continue;

            this[h.camelCase(errorKey)] = h.template(errorMessage);
        }
    };

    mixitup.messages = new mixitup.Messages();

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     * @param       {mixitup.Mixer} mixer
     */

    mixitup.Facade = function Mixer(mixer) {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct', arguments);

        this.configure          = mixer.configure.bind(mixer);
        this.show               = mixer.show.bind(mixer);
        this.hide               = mixer.hide.bind(mixer);
        this.filter             = mixer.filter.bind(mixer);
        this.toggleOn           = mixer.toggleOn.bind(mixer);
        this.toggleOff          = mixer.toggleOff.bind(mixer);
        this.sort               = mixer.sort.bind(mixer);
        this.changeLayout       = mixer.changeLayout.bind(mixer);
        this.multimix           = mixer.multimix.bind(mixer);
        this.dataset            = mixer.dataset.bind(mixer);
        this.tween              = mixer.tween.bind(mixer);
        this.insert             = mixer.insert.bind(mixer);
        this.insertBefore       = mixer.insertBefore.bind(mixer);
        this.insertAfter        = mixer.insertAfter.bind(mixer);
        this.prepend            = mixer.prepend.bind(mixer);
        this.append             = mixer.append.bind(mixer);
        this.remove             = mixer.remove.bind(mixer);
        this.destroy            = mixer.destroy.bind(mixer);
        this.forceRefresh       = mixer.forceRefresh.bind(mixer);
        this.forceRender        = mixer.forceRender.bind(mixer);
        this.isMixing           = mixer.isMixing.bind(mixer);
        this.getOperation       = mixer.getOperation.bind(mixer);
        this.getConfig          = mixer.getConfig.bind(mixer);
        this.getState           = mixer.getState.bind(mixer);

        this.callActions('afterConstruct', arguments);

        h.freeze(this);
        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Facade);

    mixitup.Facade.prototype = Object.create(mixitup.Base.prototype);

    mixitup.Facade.prototype.constructor = mixitup.Facade;

    if (true) {
        module.exports = mixitup;
    } else if (typeof define === 'function' && define.amd) {
        define(function() {
            return mixitup;
        });
    } else if (typeof window.mixitup === 'undefined' || typeof window.mixitup !== 'function') {
        window.mixitup = mixitup;
    }
    mixitup.BaseStatic.call(mixitup.constructor);

    mixitup.NAME = 'mixitup';
    mixitup.CORE_VERSION = '3.2.2';
})(window);

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2RlZ3JlZS1maWx0ZXJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21peGl0dXAvZGlzdC9taXhpdHVwLmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIiQiLCJDb25maWciLCJzZWxlY3RvcnMiLCJtaXhJdFVwIiwibWl4ZXIiLCJtaXhpdHVwIiwiY2FsbGJhY2tzIiwib25NaXhTdGFydCIsInN0YXRlIiwiZnV0dXJlU3RhdGUiLCJvbk1peEVuZCIsIm1peEV2ZW50IiwiZmluZCIsImZvY3VzIiwiaGFuZGxlVXJsRmlsdGVycyIsImxvY2F0aW9uIiwiaGFzaCIsIkZpbHRlcklEIiwicmVwbGFjZSIsIk5ld0FjdGl2ZSIsInRyaWdnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZQyxFQUFFLG1EQUFBQyxDQUFPQyxTQUFQLENBQWlCQyxPQUFuQixDQUFsQjs7QUFFQSxJQUFNQyxRQUFRLCtDQUFBQyxDQUFRTixTQUFSLEVBQW1CO0FBQ2hDTyxZQUFXO0FBQ1ZDLGNBQVksb0JBQVNDLEtBQVQsRUFBZ0JDLFdBQWhCLEVBQTZCLENBQUUsQ0FEakM7QUFFVkMsWUFBVSxrQkFBU0MsUUFBVCxFQUFtQjtBQUM1QjtBQUNBO0FBQ0FaLGFBQVVhLElBQVYsQ0FBZSxxQkFBZixFQUFzQ0MsS0FBdEM7QUFDQTtBQU5TO0FBRHFCLENBQW5CLENBQWQ7QUFVQUM7O0FBRUEsU0FBU0EsZ0JBQVQsR0FBNEI7QUFDM0IsS0FBSUMsU0FBU0MsSUFBYixFQUFtQjtBQUNsQixNQUFNQyxXQUFXRixTQUFTQyxJQUFULENBQWNFLE9BQWQsQ0FBc0IsR0FBdEIsRUFBMkIsR0FBM0IsQ0FBakI7QUFDQSxNQUFNQyxZQUFZbkIsRUFBRSx5QkFBeUJpQixRQUF6QixHQUFvQyxJQUF0QyxDQUFsQjtBQUNBRSxZQUFVQyxPQUFWLENBQWtCLE9BQWxCO0FBQ0E7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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVELGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RCxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtQkFBbUI7QUFDbkQsb0NBQW9DLE1BQU0sc0JBQXNCLE9BQU87QUFDdkUsZ0NBQWdDLFFBQVE7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLG1DQUFtQyxNQUFNLEVBQUUsV0FBVyxJQUFJO0FBQzFELGdDQUFnQyxRQUFRO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsbUJBQW1CLElBQUksUUFBUSxPQUFPLElBQUksT0FBTyxJQUFJLFFBQVE7QUFDckg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQzs7QUFFakM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUIscUJBQXFCLE9BQU87QUFDNUIscUJBQXFCLFFBQVE7QUFDN0IscUJBQXFCLE9BQU87QUFDNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0IsbUJBQW1CLE9BQU87QUFDMUIsbUJBQW1CLE9BQU87QUFDMUI7O0FBRUE7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cUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLCtCQUErQix3QkFBd0I7QUFDdkQ7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxxQkFBcUIsWUFBWTtBQUNqQyxxQkFBcUIsT0FBTztBQUM1QixxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCLGlCQUFpQixRQUFRO0FBQ3pCLGlCQUFpQixPQUFPO0FBQ3hCLGlCQUFpQixTQUFTO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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O0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLGlCQUFpQjtBQUN4Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLGlCQUFpQjtBQUN4Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVCQUF1QixpQkFBaUI7QUFDeEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7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QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixlQUFlO0FBQ3BDLHFCQUFxQixPQUFPO0FBQzVCLHFCQUFxQixPQUFPO0FBQzVCLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QixxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QixxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrQkFBa0I7QUFDdkMscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLHFCQUFxQixPQUFPO0FBQzVCLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLHVCQUF1Qiw4Q0FBOEM7QUFDckU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QyxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrQkFBa0I7QUFDdkMscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QixxQkFBcUIsT0FBTztBQUM1QixxQkFBcUIsT0FBTztBQUM1QixxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE1BQU07QUFDM0IscUJBQXFC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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0VBQWdFLFVBQVUsR0FBRyxXQUFXOztBQUV4RjtBQUNBLCtCQUErQixjQUFjOztBQUU3QztBQUNBOztBQUVBO0FBQ0EsZ0RBQWdELE9BQU87O0FBRXZEO0FBQ0Esa0NBQWtDLElBQUk7O0FBRXRDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3RUFBd0UsVUFBVTtBQUNsRjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGNBQWM7QUFDbkM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLFUiLCJmaWxlIjoianMvZGVncmVlLWZpbHRlcmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWcgZnJvbSBcInRoZW1lQ29uZmlnXCI7XG5pbXBvcnQgbWl4aXR1cCBmcm9tIFwibWl4aXR1cFwiO1xuXG5jb25zdCBDb250YWluZXIgPSAkKENvbmZpZy5zZWxlY3RvcnMubWl4SXRVcCk7XG5cbmNvbnN0IG1peGVyID0gbWl4aXR1cChDb250YWluZXIsIHtcblx0Y2FsbGJhY2tzOiB7XG5cdFx0b25NaXhTdGFydDogZnVuY3Rpb24oc3RhdGUsIGZ1dHVyZVN0YXRlKSB7fSxcblx0XHRvbk1peEVuZDogZnVuY3Rpb24obWl4RXZlbnQpIHtcblx0XHRcdC8vIEZvY3VzIGNvZGUgc3RpbGwgZG9lc24ndCBzZWVtIHRvIHdvcmtcblx0XHRcdC8qIEpVU1QgSEFEIEEgVEhPVUdIVDogWW91IG1pZ2h0IG5lZWQgdG8gd2FpdCB3aXRoIHRpbWVvdXQgZm9yIERPTSAqL1xuXHRcdFx0Q29udGFpbmVyLmZpbmQoXCIuY2FyZDp2aXNpYmxlOmZpcnN0XCIpLmZvY3VzKCk7XG5cdFx0fVxuXHR9XG59KTtcbmhhbmRsZVVybEZpbHRlcnMoKTtcblxuZnVuY3Rpb24gaGFuZGxlVXJsRmlsdGVycygpIHtcblx0aWYgKGxvY2F0aW9uLmhhc2gpIHtcblx0XHRjb25zdCBGaWx0ZXJJRCA9IGxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCIuXCIpO1xuXHRcdGNvbnN0IE5ld0FjdGl2ZSA9ICQoXCJidXR0b25bZGF0YS1maWx0ZXI9J1wiICsgRmlsdGVySUQgKyBcIiddXCIpO1xuXHRcdE5ld0FjdGl2ZS50cmlnZ2VyKFwiY2xpY2tcIik7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZGVncmVlLWZpbHRlcmluZy5qcyIsIi8qKiFcbiAqIE1peEl0VXAgdjMuMi4yXG4gKiBBIGhpZ2gtcGVyZm9ybWFuY2UsIGRlcGVuZGVuY3ktZnJlZSBsaWJyYXJ5IGZvciBhbmltYXRlZCBmaWx0ZXJpbmcsIHNvcnRpbmcgYW5kIG1vcmVcbiAqIEJ1aWxkIDIwYTFhMTgyLWQ3YmQtNGM4Zi04MDdkLWI4ODhlMzI1ZTQ0ZFxuICpcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IDIwMTQtMjAxNyBLdW5rYUxhYnMgTGltaXRlZC5cbiAqIEBhdXRob3IgICAgS3Vua2FMYWJzIExpbWl0ZWQuXG4gKiBAbGluayAgICAgIGh0dHBzOi8vd3d3Lmt1bmthbGFicy5jb20vbWl4aXR1cC9cbiAqXG4gKiBAbGljZW5zZSAgIENvbW1lcmNpYWwgdXNlIHJlcXVpcmVzIGEgY29tbWVyY2lhbCBsaWNlbnNlLlxuICogICAgICAgICAgICBodHRwczovL3d3dy5rdW5rYWxhYnMuY29tL21peGl0dXAvbGljZW5zZXMvXG4gKlxuICogICAgICAgICAgICBOb24tY29tbWVyY2lhbCB1c2UgcGVybWl0dGVkIHVuZGVyIHNhbWUgdGVybXMgYXMgQ0MgQlktTkMgMy4wIGxpY2Vuc2UuXG4gKiAgICAgICAgICAgIGh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LW5jLzMuMC9cbiAqL1xuXG4oZnVuY3Rpb24od2luZG93KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIG1peGl0dXAgPSBudWxsLFxuICAgICAgICBoICAgICAgID0gbnVsbDtcblxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIFZFTkRPUlMgPSBbJ3dlYmtpdCcsICdtb3onLCAnbycsICdtcyddLFxuICAgICAgICAgICAgY2FuYXJ5ICA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICAgIGkgICAgICAgPSAtMTtcblxuICAgICAgICAvLyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IFZFTkRPUlMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyBpKyspIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbVkVORE9SU1tpXSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nXG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYW5hcnkubmV4dEVsZW1lbnRTaWJsaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZSwgJ25leHRFbGVtZW50U2libGluZycsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSB0aGlzLm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbCA9IGVsLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbGVtZW50Lm1hdGNoZXNcblxuICAgICAgICAoZnVuY3Rpb24oRWxlbWVudFByb3RvdHlwZSkge1xuICAgICAgICAgICAgRWxlbWVudFByb3RvdHlwZS5tYXRjaGVzID1cbiAgICAgICAgICAgICAgICBFbGVtZW50UHJvdG90eXBlLm1hdGNoZXMgfHxcbiAgICAgICAgICAgICAgICBFbGVtZW50UHJvdG90eXBlLm1hY2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgRWxlbWVudFByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICBFbGVtZW50UHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgRWxlbWVudFByb3RvdHlwZS5vTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgRWxlbWVudFByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwodGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLCB0aGlzKSA+IC0xO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH0pKHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZSk7XG5cbiAgICAgICAgLy8gT2JqZWN0LmtleXNcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2tleXNcblxuICAgICAgICBpZiAoIU9iamVjdC5rZXlzKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFzT3duUHJvcGVydHkgICAgICA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG4gICAgICAgICAgICAgICAgICAgIGhhc0RvbnRFbnVtQnVnICAgICAgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZG9udEVudW1zICAgICAgICAgICA9IFtdLFxuICAgICAgICAgICAgICAgICAgICBkb250RW51bXNMZW5ndGggICAgID0gLTE7XG5cbiAgICAgICAgICAgICAgICBoYXNEb250RW51bUJ1ZyA9ICEoe1xuICAgICAgICAgICAgICAgICAgICB0b1N0cmluZzogbnVsbFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5wcm9wZXJ0eUlzRW51bWVyYWJsZSgndG9TdHJpbmcnKTtcblxuICAgICAgICAgICAgICAgIGRvbnRFbnVtcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ3RvU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlT2YnLFxuICAgICAgICAgICAgICAgICAgICAnaGFzT3duUHJvcGVydHknLFxuICAgICAgICAgICAgICAgICAgICAnaXNQcm90b3R5cGVPZicsXG4gICAgICAgICAgICAgICAgICAgICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICAgICAgICAgICAgICAgICAgICdjb25zdHJ1Y3RvcidcbiAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgZG9udEVudW1zTGVuZ3RoID0gZG9udEVudW1zLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCAgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3AgICAgPSAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgJiYgKHR5cGVvZiBvYmogIT09ICdmdW5jdGlvbicgfHwgb2JqID09PSBudWxsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmtleXMgY2FsbGVkIG9uIG5vbi1vYmplY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAocHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNEb250RW51bUJ1Zykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRvbnRFbnVtc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqLCBkb250RW51bXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGRvbnRFbnVtc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFycmF5LmlzQXJyYXlcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvaXNBcnJheVxuXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSkge1xuICAgICAgICAgICAgQXJyYXkuaXNBcnJheSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPYmplY3QuY3JlYXRlXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9jcmVhdGVcblxuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIE9iamVjdC5jcmVhdGUgPSAoZnVuY3Rpb24odW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIFRlbXAgPSBmdW5jdGlvbigpIHt9O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwcm90b3R5cGUsIHByb3BlcnRpZXNPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3RvdHlwZSAhPT0gT2JqZWN0KHByb3RvdHlwZSkgJiYgcHJvdG90eXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYW4gb2JqZWN0LCBvciBudWxsJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBUZW1wLnByb3RvdHlwZSA9IHByb3RvdHlwZSB8fCB7fTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IFRlbXAoKTtcblxuICAgICAgICAgICAgICAgICAgICBUZW1wLnByb3RvdHlwZSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNPYmplY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMocmVzdWx0LCBwcm9wZXJ0aWVzT2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm90b3R5cGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5fX3Byb3RvX18gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgLyoganNoaW50IGlnbm9yZTplbmQgKi9cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdHJpbmcucHJvdG90eW9lLnRyaW1cblxuICAgICAgICBpZiAoIVN0cmluZy5wcm90b3R5cGUudHJpbSkge1xuICAgICAgICAgICAgU3RyaW5nLnByb3RvdHlwZS50cmltID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csICcnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBcnJheS5wcm90b3R5cGUuaW5kZXhPZlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9pbmRleE9mXG5cbiAgICAgICAgaWYgKCFBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbihzZWFyY2hFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIG4sIGssIHQsIGxlbjtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0ID0gT2JqZWN0KHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgbGVuID0gdC5sZW5ndGggPj4+IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuID0gMDtcblxuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBuID0gTnVtYmVyKGFyZ3VtZW50c1sxXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gIT09IG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG4gIT09IDAgJiYgbiAhPT0gSW5maW5pdHkgJiYgbiAhPT0gLUluZmluaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuID0gKG4gPiAwIHx8IC0xKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG4gPj0gbGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGsgPSBuID49IDAgPyBuIDogTWF0aC5tYXgobGVuIC0gTWF0aC5hYnMobiksIDApOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGsgaW4gdCAmJiB0W2tdID09PSBzZWFyY2hFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfb2JqZWN0cy9GdW5jdGlvbi9iaW5kXG5cbiAgICAgICAgaWYgKCFGdW5jdGlvbi5wcm90b3R5cGUuYmluZCkge1xuICAgICAgICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbihvVGhpcykge1xuICAgICAgICAgICAgICAgIHZhciBhQXJncywgc2VsZiwgRk5PUCwgZkJvdW5kO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhQXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICAgICAgICAgICAgICBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgICAgIEZOT1AgPSBmdW5jdGlvbigpIHt9O1xuXG4gICAgICAgICAgICAgICAgZkJvdW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmFwcGx5KHRoaXMgaW5zdGFuY2VvZiBGTk9QID8gdGhpcyA6IG9UaGlzLCBhQXJncy5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgRk5PUC5wcm90b3R5cGUgPSB0aGlzLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmQm91bmQucHJvdG90eXBlID0gbmV3IEZOT1AoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmQm91bmQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRWxlbWVudC5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudFxuXG4gICAgICAgIGlmICghd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maXJlRXZlbnQoJ29uJyArIGV2ZW50LnR5cGUsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSkoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgbWl4aXR1cCgpYCBcImZhY3RvcnlcIiBmdW5jdGlvbiBjcmVhdGVzIGFuZCByZXR1cm5zIGluZGl2aWR1YWwgaW5zdGFuY2VzXG4gICAgICogb2YgTWl4SXRVcCwga25vd24gYXMgXCJtaXhlcnNcIiwgb24gd2hpY2ggQVBJIG1ldGhvZHMgY2FuIGJlIGNhbGxlZC5cbiAgICAgKlxuICAgICAqIFdoZW4gbG9hZGluZyBNaXhJdFVwIHZpYSBhIHNjcmlwdCB0YWcsIHRoZSBmYWN0b3J5IGZ1bmN0aW9uIGlzIGFjY2Vzc2VkXG4gICAgICogdmlhIHRoZSBnbG9iYWwgdmFyaWFibGUgYG1peGl0dXBgLiBXaGVuIHVzaW5nIGEgbW9kdWxlIGxvYWRpbmdcbiAgICAgKiBzeXN0ZW0gKGUuZy4gRVMyMDE1LCBDb21tb25KUywgUmVxdWlyZUpTKSwgdGhlIGZhY3RvcnkgZnVuY3Rpb24gaXNcbiAgICAgKiBleHBvcnRlZCBpbnRvIHlvdXIgbW9kdWxlIHdoZW4geW91IHJlcXVpcmUgdGhlIE1peEl0VXAgbGlicmFyeS5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogbWl4aXR1cChjb250YWluZXIgWyxjb25maWddIFssZm9yZWlnbkRvY10pXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDE6IENyZWF0aW5nIGEgbWl4ZXIgaW5zdGFuY2Ugd2l0aCBhbiBlbGVtZW50IHJlZmVyZW5jZTwvY2FwdGlvbj5cbiAgICAgKiB2YXIgY29udGFpbmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgICpcbiAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsKTtcbiAgICAgKlxuICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMjogQ3JlYXRpbmcgYSBtaXhlciBpbnN0YW5jZSB3aXRoIGEgc2VsZWN0b3Igc3RyaW5nPC9jYXB0aW9uPlxuICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoJy5jb250YWluZXInKTtcbiAgICAgKlxuICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMzogUGFzc2luZyBhIGNvbmZpZ3VyYXRpb24gb2JqZWN0PC9jYXB0aW9uPlxuICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgKiAgICAgYW5pbWF0aW9uOiB7XG4gICAgICogICAgICAgICBlZmZlY3RzOiAnZmFkZSBzY2FsZSgwLjUpJ1xuICAgICAqICAgICB9XG4gICAgICogfSk7XG4gICAgICpcbiAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDQ6IFBhc3NpbmcgYW4gaWZyYW1lIHJlZmVyZW5jZTwvY2FwdGlvbj5cbiAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCBjb25maWcsIGZvcmVpZ25Eb2N1bWVudCk7XG4gICAgICpcbiAgICAgKiBAZ2xvYmFsXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAa2luZCAgICAgICAgZnVuY3Rpb25cbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKiBAcGFyYW0gICAgICAgeyhFbGVtZW50fHN0cmluZyl9ICBjb250YWluZXJcbiAgICAgKiAgICAgIEEgRE9NIGVsZW1lbnQgb3Igc2VsZWN0b3Igc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgY29udGFpbmVyKHMpIG9uIHdoaWNoIHRvIGluc3RhbnRpYXRlIE1peEl0VXAuXG4gICAgICogQHBhcmFtICAgICAgIHtvYmplY3R9ICAgICAgICAgICAgW2NvbmZpZ11cbiAgICAgKiAgICAgIEFuIG9wdGlvbmFsIFwiY29uZmlndXJhdGlvbiBvYmplY3RcIiB1c2VkIHRvIGN1c3RvbWl6ZSB0aGUgYmVoYXZpb3Igb2YgdGhlIE1peEl0VXAgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtICAgICAgIHtvYmplY3R9ICAgICAgICAgICAgW2ZvcmVpZ25Eb2NdXG4gICAgICogICAgICBBbiBvcHRpb25hbCByZWZlcmVuY2UgdG8gYSBgZG9jdW1lbnRgLCB3aGljaCBjYW4gYmUgdXNlZCB0byBjb250cm9sIGEgTWl4SXRVcCBpbnN0YW5jZSBpbiBhbiBpZnJhbWUuXG4gICAgICogQHJldHVybiAgICAgIHttaXhpdHVwLk1peGVyfVxuICAgICAqICAgICAgQSBcIm1peGVyXCIgb2JqZWN0IGhvbGRpbmcgdGhlIE1peEl0VXAgaW5zdGFuY2UuXG4gICAgICovXG5cbiAgICBtaXhpdHVwID0gZnVuY3Rpb24oY29udGFpbmVyLCBjb25maWcsIGZvcmVpZ25Eb2MpIHtcbiAgICAgICAgdmFyIGVsICAgICAgICAgICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgcmV0dXJuQ29sbGVjdGlvbiAgICA9IGZhbHNlLFxuICAgICAgICAgICAgaW5zdGFuY2UgICAgICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICBmYWNhZGUgICAgICAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgIGRvYyAgICAgICAgICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgb3V0cHV0ICAgICAgICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICBpbnN0YW5jZXMgICAgICAgICAgID0gW10sXG4gICAgICAgICAgICBpZCAgICAgICAgICAgICAgICAgID0gJycsXG4gICAgICAgICAgICBlbGVtZW50cyAgICAgICAgICAgID0gW10sXG4gICAgICAgICAgICBpICAgICAgICAgICAgICAgICAgID0gLTE7XG5cbiAgICAgICAgZG9jID0gZm9yZWlnbkRvYyB8fCB3aW5kb3cuZG9jdW1lbnQ7XG5cbiAgICAgICAgaWYgKHJldHVybkNvbGxlY3Rpb24gPSBhcmd1bWVudHNbM10pIHtcbiAgICAgICAgICAgIC8vIEEgbm9uLWRvY3VtZW50ZWQgNHRoIHBhcmFtYXRlciBlbmFibGluZyBjb250cm9sIG9mIG11bHRpcGxlIGluc3RhbmNlc1xuXG4gICAgICAgICAgICByZXR1cm5Db2xsZWN0aW9uID0gdHlwZW9mIHJldHVybkNvbGxlY3Rpb24gPT09ICdib29sZWFuJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGFpbmVyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZWxlbWVudHMgPSBkb2MucXVlcnlTZWxlY3RvckFsbChjb250YWluZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbnRhaW5lciAmJiB0eXBlb2YgY29udGFpbmVyID09PSAnb2JqZWN0JyAmJiBoLmlzRWxlbWVudChjb250YWluZXIsIGRvYykpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzID0gW2NvbnRhaW5lcl07XG4gICAgICAgIH0gZWxzZSBpZiAoY29udGFpbmVyICYmIHR5cGVvZiBjb250YWluZXIgPT09ICdvYmplY3QnICYmIGNvbnRhaW5lci5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIEFsdGhvdWdoIG5vdCBkb2N1bWVudGVkLCB0aGUgY29udGFpbmVyIG1heSBhbHNvIGJlIGFuIGFycmF5LWxpa2UgbGlzdCBvZlxuICAgICAgICAgICAgLy8gZWxlbWVudHMgc3VjaCBhcyBhIE5vZGVMaXN0IG9yIGpRdWVyeSBjb2xsZWN0aW9uLCBpcyByZXR1cm5Db2xsZWN0aW9uIGlzIHRydWVcblxuICAgICAgICAgICAgZWxlbWVudHMgPSBjb250YWluZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWl4aXR1cC5tZXNzYWdlcy5lcnJvckZhY3RvcnlJbnZhbGlkQ29udGFpbmVyKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtaXhpdHVwLm1lc3NhZ2VzLmVycm9yRmFjdG9yeUNvbnRhaW5lck5vdEZvdW5kKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgZWwgPSBlbGVtZW50c1tpXTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDAgJiYgIXJldHVybkNvbGxlY3Rpb24pIGJyZWFrO1xuXG4gICAgICAgICAgICBpZiAoIWVsLmlkKSB7XG4gICAgICAgICAgICAgICAgaWQgPSAnTWl4SXRVcCcgKyBoLnJhbmRvbUhleCgpO1xuXG4gICAgICAgICAgICAgICAgZWwuaWQgPSBpZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWQgPSBlbC5pZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1peGl0dXAuaW5zdGFuY2VzW2lkXSBpbnN0YW5jZW9mIG1peGl0dXAuTWl4ZXIpIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IG1peGl0dXAuaW5zdGFuY2VzW2lkXTtcblxuICAgICAgICAgICAgICAgIGlmICghY29uZmlnIHx8IChjb25maWcgJiYgY29uZmlnLmRlYnVnICYmIGNvbmZpZy5kZWJ1Zy5zaG93V2FybmluZ3MgIT09IGZhbHNlKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4obWl4aXR1cC5tZXNzYWdlcy53YXJuaW5nRmFjdG9yeVByZWV4aXN0aW5nSW5zdGFuY2UoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBtaXhpdHVwLk1peGVyKCk7XG5cbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5hdHRhY2goZWwsIGRvYywgaWQsIGNvbmZpZyk7XG5cbiAgICAgICAgICAgICAgICBtaXhpdHVwLmluc3RhbmNlc1tpZF0gPSBpbnN0YW5jZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmFjYWRlID0gbmV3IG1peGl0dXAuRmFjYWRlKGluc3RhbmNlKTtcblxuICAgICAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcuZGVidWcgJiYgY29uZmlnLmRlYnVnLmVuYWJsZSkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2VzLnB1c2goZmFjYWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXR1cm5Db2xsZWN0aW9uKSB7XG4gICAgICAgICAgICBvdXRwdXQgPSBuZXcgbWl4aXR1cC5Db2xsZWN0aW9uKGluc3RhbmNlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIGZpcnN0IGluc3RhbmNlIHJlZ2FyZGxlc3NcblxuICAgICAgICAgICAgb3V0cHV0ID0gaW5zdGFuY2VzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGAudXNlKClgIHN0YXRpYyBtZXRob2QgaXMgdXNlZCB0byBleHRlbmQgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgbWl4aXR1cCB3aXRoIGNvbXBhdGlibGVcbiAgICAgKiBleHRlbnNpb25zIGFuZCBsaWJyYXJpZXMgaW4gYW4gZW52aXJvbm1lbnQgd2l0aCBtb2R1bGFyIHNjb3BpbmcgZS5nLiBFUzIwMTUsIENvbW1vbkpTLCBvciBSZXF1aXJlSlMuXG4gICAgICpcbiAgICAgKiBZb3UgbmVlZCBvbmx5IGNhbGwgdGhlIGAudXNlKClgIGZ1bmN0aW9uIG9uY2UgcGVyIHByb2plY3QsIHBlciBleHRlbnNpb24sIGFzIG1vZHVsZSBsb2FkZXJzXG4gICAgICogd2lsbCBjYWNoZSBhIHNpbmdsZSByZWZlcmVuY2UgdG8gTWl4SXRVcCBpbmNsdXNpdmUgb2YgYWxsIGNoYW5nZXMgbWFkZS5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogbWl4aXR1cC51c2UoZXh0ZW5zaW9uKVxuICAgICAqXG4gICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAxOiBFeHRlbmRpbmcgTWl4SXRVcCB3aXRoIHRoZSBQYWdpbmF0aW9uIEV4dGVuc2lvbjwvY2FwdGlvbj5cbiAgICAgKlxuICAgICAqIGltcG9ydCBtaXhpdHVwIGZyb20gJ21peGl0dXAnO1xuICAgICAqIGltcG9ydCBtaXhpdHVwUGFnaW5hdGlvbiBmcm9tICdtaXhpdHVwLXBhZ2luYXRpb24nO1xuICAgICAqXG4gICAgICogbWl4aXR1cC51c2UobWl4aXR1cFBhZ2luYXRpb24pO1xuICAgICAqXG4gICAgICogLy8gQWxsIG1peGVycyBjcmVhdGVkIGJ5IHRoZSBmYWN0b3J5IGZ1bmN0aW9uIGluIGFsbCBtb2R1bGVzIHdpbGwgbm93XG4gICAgICogLy8gaGF2ZSBwYWdpbmF0aW9uIGZ1bmN0aW9uYWxpdHlcbiAgICAgKlxuICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoJy5jb250YWluZXInKTtcbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAbmFtZSAgICAgdXNlXG4gICAgICogQG1lbWJlcm9mIG1peGl0dXBcbiAgICAgKiBAa2luZCAgICAgZnVuY3Rpb25cbiAgICAgKiBAc3RhdGljXG4gICAgICogQHNpbmNlICAgIDMuMC4wXG4gICAgICogQHBhcmFtICAgIHsqfSAgZXh0ZW5zaW9uICAgQSByZWZlcmVuY2UgdG8gdGhlIGV4dGVuc2lvbiBvciBsaWJyYXJ5IHRvIGJlIHVzZWQuXG4gICAgICogQHJldHVybiAgIHt2b2lkfVxuICAgICAqL1xuXG4gICAgbWl4aXR1cC51c2UgPSBmdW5jdGlvbihleHRlbnNpb24pIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLnByb3RvdHlwZS5jYWxsQWN0aW9ucy5jYWxsKG1peGl0dXAsICdiZWZvcmVVc2UnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgIC8vIENhbGwgdGhlIGV4dGVuc2lvbidzIGZhY3RvcnkgZnVuY3Rpb24sIHBhc3NpbmdcbiAgICAgICAgLy8gdGhlIG1peGl0dXAgZmFjdG9yeSBhcyBhIHBhcmFtYXRlclxuXG4gICAgICAgIGlmICh0eXBlb2YgZXh0ZW5zaW9uID09PSAnZnVuY3Rpb24nICYmIGV4dGVuc2lvbi5UWVBFID09PSAnbWl4aXR1cC1leHRlbnNpb24nKSB7XG4gICAgICAgICAgICAvLyBNaXhpdHVwIGV4dGVuc2lvblxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1peGl0dXAuZXh0ZW5zaW9uc1tleHRlbnNpb24uTkFNRV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uKG1peGl0dXApO1xuXG4gICAgICAgICAgICAgICAgbWl4aXR1cC5leHRlbnNpb25zW2V4dGVuc2lvbi5OQU1FXSA9IGV4dGVuc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChleHRlbnNpb24uZm4gJiYgZXh0ZW5zaW9uLmZuLmpxdWVyeSkge1xuICAgICAgICAgICAgLy8galF1ZXJ5XG5cbiAgICAgICAgICAgIG1peGl0dXAubGlicmFyaWVzLiQgPSBleHRlbnNpb247XG4gICAgICAgIH1cblxuICAgICAgICBtaXhpdHVwLkJhc2UucHJvdG90eXBlLmNhbGxBY3Rpb25zLmNhbGwobWl4aXR1cCwgJ2FmdGVyVXNlJywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5pbnN0YW5jZXMgICA9IHt9O1xuICAgIG1peGl0dXAuZXh0ZW5zaW9ucyAgPSB7fTtcbiAgICBtaXhpdHVwLmxpYnJhcmllcyAgID0ge307XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuXG4gICAgaCA9IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge0hUTUxFbGVtZW50fSAgIGVsXG4gICAgICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgICBjbHNcbiAgICAgICAgICogQHJldHVybiAge2Jvb2xlYW59XG4gICAgICAgICAqL1xuXG4gICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbihlbCwgY2xzKSB7XG4gICAgICAgICAgICByZXR1cm4gISFlbC5jbGFzc05hbWUubWF0Y2gobmV3IFJlZ0V4cCgnKFxcXFxzfF4pJyArIGNscyArICcoXFxcXHN8JCknKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gICBlbFxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgY2xzXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24oZWwsIGNscykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc0NsYXNzKGVsLCBjbHMpKSBlbC5jbGFzc05hbWUgKz0gZWwuY2xhc3NOYW1lID8gJyAnICsgY2xzIDogY2xzO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7SFRNTEVsZW1lbnR9ICAgZWxcbiAgICAgICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICAgIGNsc1xuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uKGVsLCBjbHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0NsYXNzKGVsLCBjbHMpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoJyhcXFxcc3xeKScgKyBjbHMgKyAnKFxcXFxzfCQpJyk7XG5cbiAgICAgICAgICAgICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShyZWcsICcgJykudHJpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgdGhlIHNvdXJjZSBvYmplY3Qgb250byB0aGVcbiAgICAgICAgICogdGFyZ2V0IG9iamVjdC4gQWx0ZXJzIHRoZSB0YXJnZXQgb2JqZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgICBkZXN0aW5hdGlvblxuICAgICAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgICBzb3VyY2VcbiAgICAgICAgICogQHBhcmFtICAge2Jvb2xlYW59ICAgW2RlZXA9ZmFsc2VdXG4gICAgICAgICAqIEBwYXJhbSAgIHtib29sZWFufSAgIFtoYW5kbGVFcnJvcnM9ZmFsc2VdXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBleHRlbmQ6IGZ1bmN0aW9uKGRlc3RpbmF0aW9uLCBzb3VyY2UsIGRlZXAsIGhhbmRsZUVycm9ycykge1xuICAgICAgICAgICAgdmFyIHNvdXJjZUtleXMgID0gW10sXG4gICAgICAgICAgICAgICAga2V5ICAgICAgICAgPSAnJyxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBkZWVwID0gZGVlcCB8fCBmYWxzZTtcbiAgICAgICAgICAgIGhhbmRsZUVycm9ycyA9IGhhbmRsZUVycm9ycyB8fCBmYWxzZTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUtleXMucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkZWVwIHx8IHR5cGVvZiBzb3VyY2Vba2V5XSAhPT0gJ29iamVjdCcgfHwgdGhpcy5pc0VsZW1lbnQoc291cmNlW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbGwgbm9uLW9iamVjdCBwcm9wZXJ0aWVzLCBvciBhbGwgcHJvcGVydGllcyBpZiBzaGFsbG93IGV4dGVuZFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFycmF5c1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRlc3RpbmF0aW9uW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0ZW5kKGRlc3RpbmF0aW9uW2tleV0sIHNvdXJjZVtrZXldLCBkZWVwLCBoYW5kbGVFcnJvcnMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT2JqZWN0c1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRlc3RpbmF0aW9uW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0ZW5kKGRlc3RpbmF0aW9uW2tleV0sIHNvdXJjZVtrZXldLCBkZWVwLCBoYW5kbGVFcnJvcnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlRXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXh0ZW5kRXJyb3IoZXJyLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlc3RpbmF0aW9uO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7RXJyb3J9ICBlcnJcbiAgICAgICAgICogQHBhcmFtICAge29iamVjdH0gZGVzdGluYXRpb25cbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGhhbmRsZUV4dGVuZEVycm9yOiBmdW5jdGlvbihlcnIsIGRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgcmUgICAgICAgICAgICAgICAgICA9IC9wcm9wZXJ0eSBcIj8oXFx3KilcIj9bLDpdIG9iamVjdC9pLFxuICAgICAgICAgICAgICAgIG1hdGNoZXMgICAgICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGVycm9uZW91cyAgICAgICAgICAgPSAnJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlICAgICAgICAgICAgID0gJycsXG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbiAgICAgICAgICA9ICcnLFxuICAgICAgICAgICAgICAgIHByb2JhYmxlTWF0Y2ggICAgICAgPSAnJyxcbiAgICAgICAgICAgICAgICBrZXkgICAgICAgICAgICAgICAgID0gJycsXG4gICAgICAgICAgICAgICAgbW9zdE1hdGNoaW5nQ2hhcnMgICA9IC0xLFxuICAgICAgICAgICAgICAgIGkgICAgICAgICAgICAgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIFR5cGVFcnJvciAmJiAobWF0Y2hlcyA9IHJlLmV4ZWMoZXJyLm1lc3NhZ2UpKSkge1xuICAgICAgICAgICAgICAgIGVycm9uZW91cyA9IG1hdGNoZXNbMV07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGtleSBpbiBkZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IGVycm9uZW91cy5sZW5ndGggJiYgZXJyb25lb3VzLmNoYXJBdChpKSA9PT0ga2V5LmNoYXJBdChpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiBtb3N0TWF0Y2hpbmdDaGFycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9zdE1hdGNoaW5nQ2hhcnMgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvYmFibGVNYXRjaCA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChtb3N0TWF0Y2hpbmdDaGFycyA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbiA9IG1peGl0dXAubWVzc2FnZXMuZXJyb3JDb25maWdJbnZhbGlkUHJvcGVydHlTdWdnZXN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2JhYmxlTWF0Y2g6IHByb2JhYmxlTWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1peGl0dXAubWVzc2FnZXMuZXJyb3JDb25maWdJbnZhbGlkUHJvcGVydHkoe1xuICAgICAgICAgICAgICAgICAgICBlcnJvbmVvdXM6IGVycm9uZW91cyxcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbjogc3VnZ2VzdGlvblxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSBzdHJcbiAgICAgICAgICogQHJldHVybiAge2Z1bmN0aW9ufVxuICAgICAgICAgKi9cblxuICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgICAgICB2YXIgcmUgICAgICAgICAgPSAvXFwkeyhbXFx3XSopfS9nLFxuICAgICAgICAgICAgICAgIGR5bmFtaWNzICAgID0ge30sXG4gICAgICAgICAgICAgICAgbWF0Y2hlcyAgICAgPSBudWxsO1xuXG4gICAgICAgICAgICB3aGlsZSAoKG1hdGNoZXMgPSByZS5leGVjKHN0cikpKSB7XG4gICAgICAgICAgICAgICAgZHluYW1pY3NbbWF0Y2hlc1sxXV0gPSBuZXcgUmVnRXhwKCdcXFxcJHsnICsgbWF0Y2hlc1sxXSArICd9JywgJ2cnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ICAgICA9ICcnLFxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgID0gc3RyO1xuXG4gICAgICAgICAgICAgICAgZGF0YSA9IGRhdGEgfHwge307XG5cbiAgICAgICAgICAgICAgICBmb3IgKGtleSBpbiBkeW5hbWljcykge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQucmVwbGFjZShkeW5hbWljc1trZXldLCB0eXBlb2YgZGF0YVtrZXldICE9PSAndW5kZWZpbmVkJyA/IGRhdGFba2V5XSA6ICcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge0hUTUxFbGVtZW50fSAgIGVsXG4gICAgICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgICB0eXBlXG4gICAgICAgICAqIEBwYXJhbSAgIHtmdW5jdGlvbn0gICAgICBmblxuICAgICAgICAgKiBAcGFyYW0gICB7Ym9vbGVhbn0gICAgICAgdXNlQ2FwdHVyZVxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgb246IGZ1bmN0aW9uKGVsLCB0eXBlLCBmbiwgdXNlQ2FwdHVyZSkge1xuICAgICAgICAgICAgaWYgKCFlbCkgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHVzZUNhcHR1cmUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbC5hdHRhY2hFdmVudCkge1xuICAgICAgICAgICAgICAgIGVsWydlJyArIHR5cGUgKyBmbl0gPSBmbjtcblxuICAgICAgICAgICAgICAgIGVsW3R5cGUgKyBmbl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxbJ2UnICsgdHlwZSArIGZuXSh3aW5kb3cuZXZlbnQpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgdHlwZSwgZWxbdHlwZSArIGZuXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gICBlbFxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgdHlwZVxuICAgICAgICAgKiBAcGFyYW0gICB7ZnVuY3Rpb259ICAgICAgZm5cbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIG9mZjogZnVuY3Rpb24oZWwsIHR5cGUsIGZuKSB7XG4gICAgICAgICAgICBpZiAoIWVsKSByZXR1cm47XG5cbiAgICAgICAgICAgIGlmIChlbC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbC5kZXRhY2hFdmVudCkge1xuICAgICAgICAgICAgICAgIGVsLmRldGFjaEV2ZW50KCdvbicgKyB0eXBlLCBlbFt0eXBlICsgZm5dKTtcbiAgICAgICAgICAgICAgICBlbFt0eXBlICsgZm5dID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICBldmVudFR5cGVcbiAgICAgICAgICogQHBhcmFtICAge29iamVjdH0gICAgICBkZXRhaWxcbiAgICAgICAgICogQHBhcmFtICAge0RvY3VtZW50fSAgICBbZG9jXVxuICAgICAgICAgKiBAcmV0dXJuICB7Q3VzdG9tRXZlbnR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGdldEN1c3RvbUV2ZW50OiBmdW5jdGlvbihldmVudFR5cGUsIGRldGFpbCwgZG9jKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBudWxsO1xuXG4gICAgICAgICAgICBkb2MgPSBkb2MgfHwgd2luZG93LmRvY3VtZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGV2ZW50ID0gbmV3IHdpbmRvdy5DdXN0b21FdmVudChldmVudFR5cGUsIHtcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiBkZXRhaWwsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvYy5jcmVhdGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGV2ZW50ID0gZG9jLmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgICAgICAgICAgIGV2ZW50LmluaXRDdXN0b21FdmVudChldmVudFR5cGUsIHRydWUsIHRydWUsIGRldGFpbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV2ZW50ID0gZG9jLmNyZWF0ZUV2ZW50T2JqZWN0KCksXG4gICAgICAgICAgICAgICAgZXZlbnQudHlwZSA9IGV2ZW50VHlwZTtcblxuICAgICAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZXZlbnQuY2FuY2VsQnViYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZXZlbnQuZGV0YWlsID0gZGV0YWlsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtFdmVudH0gZVxuICAgICAgICAgKiBAcmV0dXJuICB7RXZlbnR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGdldE9yaWdpbmFsRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlLnRvdWNoZXNbMF07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUuY2hhbmdlZFRvdWNoZXMgJiYgZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gICBlbFxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgc2VsZWN0b3JcbiAgICAgICAgICogQHJldHVybiAge051bWJlcn1cbiAgICAgICAgICovXG5cbiAgICAgICAgaW5kZXg6IGZ1bmN0aW9uKGVsLCBzZWxlY3Rvcikge1xuICAgICAgICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICAgICAgICB3aGlsZSAoKGVsID0gZWwucHJldmlvdXNFbGVtZW50U2libGluZykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IGVsLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb252ZXJ0cyBhIGRhc2ggb3Igc25ha2UtY2FzZSBzdHJpbmcgdG8gY2FtZWwgY2FzZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge3N0cmluZ30gICAgc3RyXG4gICAgICAgICAqIEBwYXJhbSAgIHtib29sZWFufSAgIFtpc1Bhc2NhbF1cbiAgICAgICAgICogQHJldHVybiAge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICAgICAgY2FtZWxDYXNlOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8oW18tXVthLXpdKS9nLCBmdW5jdGlvbigkMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAkMS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1tfLV0vLCAnJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29udmVydHMgYSBkYXNoIG9yIHNuYWtlLWNhc2Ugc3RyaW5nIHRvIHBhc2NhbCBjYXNlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICBzdHJcbiAgICAgICAgICogQHBhcmFtICAge2Jvb2xlYW59ICAgW2lzUGFzY2FsXVxuICAgICAgICAgKiBAcmV0dXJuICB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgICAgICBwYXNjYWxDYXNlOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiAoc3RyID0gdGhpcy5jYW1lbENhc2Uoc3RyKSkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnZlcnRzIGEgY2FtZWwgb3IgcGFzY2FsLWNhc2Ugc3RyaW5nIHRvIGRhc2ggY2FzZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge3N0cmluZ30gICAgc3RyXG4gICAgICAgICAqIEByZXR1cm4gIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGRhc2hDYXNlOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAnLSQxJykucmVwbGFjZSgvXi0vLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge0hUTUxFbGVtZW50fSAgICAgICBlbFxuICAgICAgICAgKiBAcGFyYW0gICB7SFRNTEh0bWxFbGVtZW50fSAgIFtkb2NdXG4gICAgICAgICAqIEByZXR1cm4gIHtib29sZWFufVxuICAgICAgICAgKi9cblxuICAgICAgICBpc0VsZW1lbnQ6IGZ1bmN0aW9uKGVsLCBkb2MpIHtcbiAgICAgICAgICAgIGRvYyA9IGRvYyB8fCB3aW5kb3cuZG9jdW1lbnQ7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB3aW5kb3cuSFRNTEVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICBlbCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIGRvYy5kZWZhdWx0VmlldyAmJlxuICAgICAgICAgICAgICAgIGRvYy5kZWZhdWx0Vmlldy5IVE1MRWxlbWVudCAmJlxuICAgICAgICAgICAgICAgIGVsIGluc3RhbmNlb2YgZG9jLmRlZmF1bHRWaWV3LkhUTUxFbGVtZW50XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgZWwgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgZWwubm9kZVR5cGUgPT09IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGVsLm5vZGVOYW1lID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgICAgICAgaHRtbFN0cmluZ1xuICAgICAgICAgKiBAcGFyYW0gICB7SFRNTEh0bWxFbGVtZW50fSAgIFtkb2NdXG4gICAgICAgICAqIEByZXR1cm4gIHtEb2N1bWVudEZyYWdtZW50fVxuICAgICAgICAgKi9cblxuICAgICAgICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbihodG1sU3RyaW5nLCBkb2MpIHtcbiAgICAgICAgICAgIHZhciBmcmFnID0gbnVsbCxcbiAgICAgICAgICAgICAgICB0ZW1wID0gbnVsbDtcblxuICAgICAgICAgICAgZG9jID0gZG9jIHx8IHdpbmRvdy5kb2N1bWVudDtcblxuICAgICAgICAgICAgZnJhZyA9IGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICB0ZW1wID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICB0ZW1wLmlubmVySFRNTCA9IGh0bWxTdHJpbmcudHJpbSgpO1xuXG4gICAgICAgICAgICB3aGlsZSAodGVtcC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgZnJhZy5hcHBlbmRDaGlsZCh0ZW1wLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZnJhZztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge05vZGV9IG5vZGVcbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHJlbW92ZVdoaXRlc3BhY2U6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgIHZhciBkZWxldGluZztcblxuICAgICAgICAgICAgd2hpbGUgKG5vZGUgJiYgbm9kZS5ub2RlTmFtZSA9PT0gJyN0ZXh0Jykge1xuICAgICAgICAgICAgICAgIGRlbGV0aW5nID0gbm9kZTtcblxuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLnByZXZpb3VzU2libGluZztcblxuICAgICAgICAgICAgICAgIGRlbGV0aW5nLnBhcmVudEVsZW1lbnQgJiYgZGVsZXRpbmcucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChkZWxldGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtBcnJheTwqPn0gIGFcbiAgICAgICAgICogQHBhcmFtICAge0FycmF5PCo+fSAgYlxuICAgICAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn1cbiAgICAgICAgICovXG5cbiAgICAgICAgaXNFcXVhbEFycmF5OiBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICB2YXIgaSA9IGEubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAoaSAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgYVxuICAgICAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgYlxuICAgICAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn1cbiAgICAgICAgICovXG5cbiAgICAgICAgZGVlcEVxdWFsczogZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgdmFyIGtleTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0JyAmJiBhICYmIHR5cGVvZiBiID09PSAnb2JqZWN0JyAmJiBiKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGEpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGtleSBpbiBhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYi5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8ICF0aGlzLmRlZXBFcXVhbHMoYVtrZXldLCBiW2tleV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChhICE9PSBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge0FycmF5PCo+fSAgb2xkQXJyYXlcbiAgICAgICAgICogQHJldHVybiAge0FycmF5PCo+fVxuICAgICAgICAgKi9cblxuICAgICAgICBhcnJheVNodWZmbGU6IGZ1bmN0aW9uKG9sZEFycmF5KSB7XG4gICAgICAgICAgICB2YXIgbmV3QXJyYXkgICAgPSBvbGRBcnJheS5zbGljZSgpLFxuICAgICAgICAgICAgICAgIGxlbiAgICAgICAgID0gbmV3QXJyYXkubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGkgICAgICAgICAgID0gbGVuLFxuICAgICAgICAgICAgICAgIHAgICAgICAgICAgID0gLTEsXG4gICAgICAgICAgICAgICAgdCAgICAgICAgICAgPSBbXTtcblxuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgIHAgPSB+fihNYXRoLnJhbmRvbSgpICogbGVuKTtcbiAgICAgICAgICAgICAgICB0ID0gbmV3QXJyYXlbaV07XG5cbiAgICAgICAgICAgICAgICBuZXdBcnJheVtpXSA9IG5ld0FycmF5W3BdO1xuICAgICAgICAgICAgICAgIG5ld0FycmF5W3BdID0gdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgICBsaXN0XG4gICAgICAgICAqL1xuXG4gICAgICAgIGFycmF5RnJvbUxpc3Q6IGZ1bmN0aW9uKGxpc3QpIHtcbiAgICAgICAgICAgIHZhciBvdXRwdXQsIGk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3QpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBbXTtcblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKGxpc3RbaV0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtmdW5jdGlvbn0gIGZ1bmNcbiAgICAgICAgICogQHBhcmFtICAge051bWJlcn0gICAgd2FpdFxuICAgICAgICAgKiBAcGFyYW0gICB7Ym9vbGVhbn0gICBpbW1lZGlhdGVcbiAgICAgICAgICogQHJldHVybiAge2Z1bmN0aW9ufVxuICAgICAgICAgKi9cblxuICAgICAgICBkZWJvdW5jZTogZnVuY3Rpb24oZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gICAgICAgICAgICB2YXIgdGltZW91dDtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxmICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MgICAgID0gYXJndW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICBjYWxsTm93ICA9IGltbWVkaWF0ZSAmJiAhdGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgbGF0ZXIgICAgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dCAgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblxuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblxuICAgICAgICAgICAgICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge0hUTUxFbGVtZW50fSAgIGVsZW1lbnRcbiAgICAgICAgICogQHJldHVybiAge29iamVjdH1cbiAgICAgICAgICovXG5cbiAgICAgICAgcG9zaXRpb246IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciB4UG9zaXRpb24gICAgICAgPSAwLFxuICAgICAgICAgICAgICAgIHlQb3NpdGlvbiAgICAgICA9IDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0UGFyZW50ICAgID0gZWxlbWVudDtcblxuICAgICAgICAgICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB4UG9zaXRpb24gLT0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIHlQb3NpdGlvbiAtPSBlbGVtZW50LnNjcm9sbFRvcDtcblxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSBvZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgeFBvc2l0aW9uICs9IGVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgICAgICAgICAgeVBvc2l0aW9uICs9IGVsZW1lbnQub2Zmc2V0VG9wO1xuXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFBhcmVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogeFBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIHk6IHlQb3NpdGlvblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge29iamVjdH0gICAgbm9kZTFcbiAgICAgICAgICogQHBhcmFtICAge29iamVjdH0gICAgbm9kZTJcbiAgICAgICAgICogQHJldHVybiAge051bWJlcn1cbiAgICAgICAgICovXG5cbiAgICAgICAgZ2V0SHlwb3RlbnVzZTogZnVuY3Rpb24obm9kZTEsIG5vZGUyKSB7XG4gICAgICAgICAgICB2YXIgZGlzdGFuY2VYID0gbm9kZTEueCAtIG5vZGUyLngsXG4gICAgICAgICAgICAgICAgZGlzdGFuY2VZID0gbm9kZTEueSAtIG5vZGUyLnk7XG5cbiAgICAgICAgICAgIGRpc3RhbmNlWCA9IGRpc3RhbmNlWCA8IDAgPyBkaXN0YW5jZVggKiAtMSA6IGRpc3RhbmNlWCxcbiAgICAgICAgICAgIGRpc3RhbmNlWSA9IGRpc3RhbmNlWSA8IDAgPyBkaXN0YW5jZVkgKiAtMSA6IGRpc3RhbmNlWTtcblxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhkaXN0YW5jZVgsIDIpICsgTWF0aC5wb3coZGlzdGFuY2VZLCAyKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGN1YXRlcyB0aGUgYXJlYSBvZiBpbnRlcnNlY3Rpb24gYmV0d2VlbiB0d28gcmVjdGFuZ2xlcyBhbmQgZXhwcmVzc2VzIGl0IGFzXG4gICAgICAgICAqIGEgcmF0aW8gaW4gY29tcGFyaXNvbiB0byB0aGUgYXJlYSBvZiB0aGUgZmlyc3QgcmVjdGFuZ2xlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7UmVjdH0gIGJveDFcbiAgICAgICAgICogQHBhcmFtICAge1JlY3R9ICBib3gyXG4gICAgICAgICAqIEByZXR1cm4gIHtudW1iZXJ9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGdldEludGVyc2VjdGlvblJhdGlvOiBmdW5jdGlvbihib3gxLCBib3gyKSB7XG4gICAgICAgICAgICB2YXIgY29udHJvbEFyZWEgICAgICAgICA9IGJveDEud2lkdGggKiBib3gxLmhlaWdodCxcbiAgICAgICAgICAgICAgICBpbnRlcnNlY3Rpb25YICAgICAgID0gLTEsXG4gICAgICAgICAgICAgICAgaW50ZXJzZWN0aW9uWSAgICAgICA9IC0xLFxuICAgICAgICAgICAgICAgIGludGVyc2VjdGlvbkFyZWEgICAgPSAtMSxcbiAgICAgICAgICAgICAgICByYXRpbyAgICAgICAgICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIGludGVyc2VjdGlvblggPVxuICAgICAgICAgICAgICAgIE1hdGgubWF4KDAsIE1hdGgubWluKGJveDEubGVmdCArIGJveDEud2lkdGgsIGJveDIubGVmdCArIGJveDIud2lkdGgpIC0gTWF0aC5tYXgoYm94MS5sZWZ0LCBib3gyLmxlZnQpKTtcblxuICAgICAgICAgICAgaW50ZXJzZWN0aW9uWSA9XG4gICAgICAgICAgICAgICAgTWF0aC5tYXgoMCwgTWF0aC5taW4oYm94MS50b3AgKyBib3gxLmhlaWdodCwgYm94Mi50b3AgKyBib3gyLmhlaWdodCkgLSBNYXRoLm1heChib3gxLnRvcCwgYm94Mi50b3ApKTtcblxuICAgICAgICAgICAgaW50ZXJzZWN0aW9uQXJlYSA9IGludGVyc2VjdGlvblkgKiBpbnRlcnNlY3Rpb25YO1xuXG4gICAgICAgICAgICByYXRpbyA9IGludGVyc2VjdGlvbkFyZWEgLyBjb250cm9sQXJlYTtcblxuICAgICAgICAgICAgcmV0dXJuIHJhdGlvO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgICAgICAgICAgIGVsXG4gICAgICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgICAgICAgc2VsZWN0b3JcbiAgICAgICAgICogQHBhcmFtICAge2Jvb2xlYW59ICAgICAgICAgICBbaW5jbHVkZVNlbGZdXG4gICAgICAgICAqIEBwYXJhbSAgIHtIVE1MSHRtbEVsZW1lbnR9ICAgW2RvY11cbiAgICAgICAgICogQHJldHVybiAge0VsZW1lbnR8bnVsbH1cbiAgICAgICAgICovXG5cbiAgICAgICAgY2xvc2VzdFBhcmVudDogZnVuY3Rpb24oZWwsIHNlbGVjdG9yLCBpbmNsdWRlU2VsZiwgZG9jKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50ICA9IGVsLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAgIGRvYyA9IGRvYyB8fCB3aW5kb3cuZG9jdW1lbnQ7XG5cbiAgICAgICAgICAgIGlmIChpbmNsdWRlU2VsZiAmJiBlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQgIT0gZG9jLmJvZHkpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Lm1hdGNoZXMgJiYgcGFyZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJlbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7SFRNTEVsZW1lbnR9ICAgICAgIGVsXG4gICAgICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgICAgICAgc2VsZWN0b3JcbiAgICAgICAgICogQHBhcmFtICAge0hUTUxIdG1sRWxlbWVudH0gICBbZG9jXVxuICAgICAgICAgKiBAcmV0dXJuICB7Tm9kZUxpc3R9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGNoaWxkcmVuOiBmdW5jdGlvbihlbCwgc2VsZWN0b3IsIGRvYykge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuICAgID0gW10sXG4gICAgICAgICAgICAgICAgdGVtcElkICAgICAgPSAnJztcblxuICAgICAgICAgICAgZG9jID0gZG9jIHx8IHdpbmRvdy5kb2M7XG5cbiAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgIGlmICghZWwuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcElkID0gJ1RlbXAnICsgdGhpcy5yYW5kb21IZXhLZXkoKTtcblxuICAgICAgICAgICAgICAgICAgICBlbC5pZCA9IHRlbXBJZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKCcjJyArIGVsLmlkICsgJyA+ICcgKyBzZWxlY3Rvcik7XG5cbiAgICAgICAgICAgICAgICBpZiAodGVtcElkKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIGNsb25lIG9mIGEgcHJvdmlkZWQgYXJyYXksIHdpdGggYW55IGVtcHR5IHN0cmluZ3MgcmVtb3ZlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge0FycmF5PCo+fSBvcmlnaW5hbEFycmF5XG4gICAgICAgICAqIEByZXR1cm4gIHtBcnJheTwqPn1cbiAgICAgICAgICovXG5cbiAgICAgICAgY2xlYW46IGZ1bmN0aW9uKG9yaWdpbmFsQXJyYXkpIHtcbiAgICAgICAgICAgIHZhciBjbGVhbkFycmF5ID0gW10sXG4gICAgICAgICAgICAgICAgaSA9IC0xO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb3JpZ2luYWxBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbEFycmF5W2ldICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBjbGVhbkFycmF5LnB1c2gob3JpZ2luYWxBcnJheVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2xlYW5BcnJheTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWJzdHJhY3RzIGFuIEVTNiBwcm9taXNlIGludG8gYSBxLWxpa2UgZGVmZXJyZWQgaW50ZXJmYWNlIGZvciBzdG9yYWdlIGFuZCBkZWZlcnJlZCByZXNvbHV0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gIHtvYmplY3R9IGxpYnJhcmllc1xuICAgICAgICAgKiBAcmV0dXJuIHtoLkRlZmVycmVkfVxuICAgICAgICAgKi9cblxuICAgICAgICBkZWZlcjogZnVuY3Rpb24obGlicmFyaWVzKSB7XG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIHByb21pc2VXcmFwcGVyID0gbnVsbCxcbiAgICAgICAgICAgICAgICAkICAgICAgICAgICAgICA9IG51bGw7XG5cbiAgICAgICAgICAgIHByb21pc2VXcmFwcGVyID0gbmV3IHRoaXMuRGVmZXJyZWQoKTtcblxuICAgICAgICAgICAgaWYgKG1peGl0dXAuZmVhdHVyZXMuaGFzLnByb21pc2VzKSB7XG4gICAgICAgICAgICAgICAgLy8gRVM2IG5hdGl2ZSBwcm9taXNlIG9yIHBvbHlmaWxsXG5cbiAgICAgICAgICAgICAgICBwcm9taXNlV3JhcHBlci5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VXcmFwcGVyLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlV3JhcHBlci5yZWplY3QgID0gcmVqZWN0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoJCA9ICh3aW5kb3cualF1ZXJ5IHx8IGxpYnJhcmllcy4kKSkgJiYgdHlwZW9mICQuRGVmZXJyZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAvLyBqUXVlcnlcblxuICAgICAgICAgICAgICAgIGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXG4gICAgICAgICAgICAgICAgcHJvbWlzZVdyYXBwZXIucHJvbWlzZSA9IGRlZmVycmVkLnByb21pc2UoKTtcbiAgICAgICAgICAgICAgICBwcm9taXNlV3JhcHBlci5yZXNvbHZlID0gZGVmZXJyZWQucmVzb2x2ZTtcbiAgICAgICAgICAgICAgICBwcm9taXNlV3JhcHBlci5yZWplY3QgID0gZGVmZXJyZWQucmVqZWN0O1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuY29uc29sZSkge1xuICAgICAgICAgICAgICAgIC8vIE5vIGltcGxlbWVudGF0aW9uXG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4obWl4aXR1cC5tZXNzYWdlcy53YXJuaW5nTm9Qcm9taXNlSW1wbGVtZW50YXRpb24oKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlV3JhcHBlcjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge0FycmF5PFByb21pc2U+fSAgICB0YXNrc1xuICAgICAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgICAgICAgICAgIGxpYnJhcmllc1xuICAgICAgICAgKiBAcmV0dXJuICB7UHJvbWlzZTxBcnJheT59XG4gICAgICAgICAqL1xuXG4gICAgICAgIGFsbDogZnVuY3Rpb24odGFza3MsIGxpYnJhcmllcykge1xuICAgICAgICAgICAgdmFyICQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAobWl4aXR1cC5mZWF0dXJlcy5oYXMucHJvbWlzZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwodGFza3MpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoJCA9ICh3aW5kb3cualF1ZXJ5IHx8IGxpYnJhcmllcy4kKSkgJiYgdHlwZW9mICQud2hlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAkLndoZW4uYXBwbHkoJCwgdGFza3MpXG4gICAgICAgICAgICAgICAgICAgIC5kb25lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8galF1ZXJ5IHdoZW4gcmV0dXJucyBzcHJlYWQgYXJndW1lbnRzIHJhdGhlciB0aGFuIGFuIGFycmF5IG9yIHJlc29sdXRpb25zXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmd1bWVudHM7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBObyBpbXBsZW1lbnRhdGlvblxuXG4gICAgICAgICAgICBpZiAod2luZG93LmNvbnNvbGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4obWl4aXR1cC5tZXNzYWdlcy53YXJuaW5nTm9Qcm9taXNlSW1wbGVtZW50YXRpb24oKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge0hUTUxFbGVtZW50fSAgIGVsXG4gICAgICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgICBwcm9wZXJ0eVxuICAgICAgICAgKiBAcGFyYW0gICB7QXJyYXk8c3RyaW5nPn0gdmVuZG9yc1xuICAgICAgICAgKiBAcmV0dXJuICB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgICAgICBnZXRQcmVmaXg6IGZ1bmN0aW9uKGVsLCBwcm9wZXJ0eSwgdmVuZG9ycykge1xuICAgICAgICAgICAgdmFyIGkgICAgICAgPSAtMSxcbiAgICAgICAgICAgICAgICBwcmVmaXggID0gJyc7XG5cbiAgICAgICAgICAgIGlmIChoLmRhc2hDYXNlKHByb3BlcnR5KSBpbiBlbC5zdHlsZSkgcmV0dXJuICcnO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBwcmVmaXggPSB2ZW5kb3JzW2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4ICsgcHJvcGVydHkgaW4gZWwuc3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZWZpeC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuICd1bnN1cHBvcnRlZCc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEByZXR1cm4gIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHJhbmRvbUhleDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gKCcwMDAwMCcgKyAoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE2IDw8IDApLnRvU3RyaW5nKDE2KSkuc3Vic3RyKC02KS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7SFRNTERvY3VtZW50fSAgW2RvY11cbiAgICAgICAgICogQHJldHVybiAge29iamVjdH1cbiAgICAgICAgICovXG5cbiAgICAgICAgZ2V0RG9jdW1lbnRTdGF0ZTogZnVuY3Rpb24oZG9jKSB7XG4gICAgICAgICAgICBkb2MgPSB0eXBlb2YgZG9jLmJvZHkgPT09ICdvYmplY3QnID8gZG9jIDogd2luZG93LmRvY3VtZW50O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogd2luZG93LnBhZ2VZT2Zmc2V0LFxuICAgICAgICAgICAgICAgIHNjcm9sbExlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICBkb2NIZWlnaHQ6IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgICAgIGRvY1dpZHRoOiBkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoLFxuICAgICAgICAgICAgICAgIHZpZXdwb3J0SGVpZ2h0OiBkb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgICAgICAgICB2aWV3cG9ydFdpZHRoOiBkb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgICBvYmpcbiAgICAgICAgICogQHBhcmFtICAge2Z1bmN0aW9ufSAgZm5cbiAgICAgICAgICogQHJldHVybiAge2Z1bmN0aW9ufVxuICAgICAgICAgKi9cblxuICAgICAgICBiaW5kOiBmdW5jdGlvbihvYmosIGZuKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gICBlbFxuICAgICAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn1cbiAgICAgICAgICovXG5cbiAgICAgICAgaXNWaXNpYmxlOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgdmFyIHN0eWxlcyA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChlbC5vZmZzZXRQYXJlbnQpIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBzdHlsZXMucG9zaXRpb24gPT09ICdmaXhlZCcgJiZcbiAgICAgICAgICAgICAgICBzdHlsZXMudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicgJiZcbiAgICAgICAgICAgICAgICBzdHlsZXMub3BhY2l0eSAhPT0gJzAnXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBGaXhlZCBlbGVtZW50cyByZXBvcnQgbm8gb2Zmc2V0UGFyZW50LFxuICAgICAgICAgICAgICAgIC8vIGJ1dCBtYXkgc3RpbGwgYmUgaW52aXNpYmxlXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgICBvYmpcbiAgICAgICAgICovXG5cbiAgICAgICAgc2VhbDogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5zZWFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LnNlYWwob2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge29iamVjdH0gICAgb2JqXG4gICAgICAgICAqL1xuXG4gICAgICAgIGZyZWV6ZTogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5mcmVlemUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgIGNvbnRyb2xcbiAgICAgICAgICogQHBhcmFtICAge3N0cmluZ30gICAgc3BlY2ltZW5cbiAgICAgICAgICogQHJldHVybiAge2Jvb2xlYW59XG4gICAgICAgICAqL1xuXG4gICAgICAgIGNvbXBhcmVWZXJzaW9uczogZnVuY3Rpb24oY29udHJvbCwgc3BlY2ltZW4pIHtcbiAgICAgICAgICAgIHZhciBjb250cm9sUGFydHMgICAgPSBjb250cm9sLnNwbGl0KCcuJyksXG4gICAgICAgICAgICAgICAgc3BlY2ltZW5QYXJ0cyAgID0gc3BlY2ltZW4uc3BsaXQoJy4nKSxcbiAgICAgICAgICAgICAgICBjb250cm9sUGFydCAgICAgPSAtMSxcbiAgICAgICAgICAgICAgICBzcGVjaW1lblBhcnQgICAgPSAtMSxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbnRyb2xQYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xQYXJ0ICAgICA9IHBhcnNlSW50KGNvbnRyb2xQYXJ0c1tpXS5yZXBsYWNlKC9bXlxcZC5dL2csICcnKSk7XG4gICAgICAgICAgICAgICAgc3BlY2ltZW5QYXJ0ICAgID0gcGFyc2VJbnQoc3BlY2ltZW5QYXJ0c1tpXS5yZXBsYWNlKC9bXlxcZC5dL2csICcnKSB8fCAwKTtcblxuICAgICAgICAgICAgICAgIGlmIChzcGVjaW1lblBhcnQgPCBjb250cm9sUGFydCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzcGVjaW1lblBhcnQgPiBjb250cm9sUGFydCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICovXG5cbiAgICAgICAgRGVmZXJyZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5wcm9taXNlICAgID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSAgICA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnJlamVjdCAgICAgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5pZCAgICAgICAgID0gaC5yYW5kb21IZXgoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge29iamVjdH0gIG9ialxuICAgICAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn1cbiAgICAgICAgICovXG5cbiAgICAgICAgaXNFbXB0eU9iamVjdDogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gJyc7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmtleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtICAge21peGl0dXAuQ29uZmlnLkNsYXNzTmFtZXN9ICAgY2xhc3NOYW1lc1xuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50TmFtZVxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICBbbW9kaWZpZXJdXG4gICAgICAgICAqIEByZXR1cm4gIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGdldENsYXNzbmFtZTogZnVuY3Rpb24oY2xhc3NOYW1lcywgZWxlbWVudE5hbWUsIG1vZGlmaWVyKSB7XG4gICAgICAgICAgICB2YXIgY2xhc3NuYW1lID0gJyc7XG5cbiAgICAgICAgICAgIGNsYXNzbmFtZSArPSBjbGFzc05hbWVzLmJsb2NrO1xuXG4gICAgICAgICAgICBpZiAoY2xhc3NuYW1lLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNsYXNzbmFtZSArPSBjbGFzc05hbWVzLmRlbGluZWF0b3JFbGVtZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbGFzc25hbWUgKz0gY2xhc3NOYW1lc1snZWxlbWVudCcgKyB0aGlzLnBhc2NhbENhc2UoZWxlbWVudE5hbWUpXTtcblxuICAgICAgICAgICAgaWYgKCFtb2RpZmllcikgcmV0dXJuIGNsYXNzbmFtZTtcblxuICAgICAgICAgICAgaWYgKGNsYXNzbmFtZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjbGFzc25hbWUgKz0gY2xhc3NOYW1lcy5kZWxpbmVhdG9yTW9kaWZpZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsYXNzbmFtZSArPSBtb2RpZmllcjtcblxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzbmFtZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgYSBwcm9wZXJ0eSBvbiBhIGdpdmVuIG9iamVjdCB2aWEgaXRzIHN0cmluZyBrZXkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgIG9ialxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICBzdHJpbmdLZXlcbiAgICAgICAgICogQHJldHVybiAgeyp9IHZhbHVlXG4gICAgICAgICAqL1xuXG4gICAgICAgIGdldFByb3BlcnR5OiBmdW5jdGlvbihvYmosIHN0cmluZ0tleSkge1xuICAgICAgICAgICAgdmFyIHBhcnRzICAgICAgICAgICA9IHN0cmluZ0tleS5zcGxpdCgnLicpLFxuICAgICAgICAgICAgICAgIHJldHVybkN1cnJlbnQgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudCAgICAgICAgID0gJycsXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgICAgID0gMDtcblxuICAgICAgICAgICAgaWYgKCFzdHJpbmdLZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm5DdXJyZW50ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9ialtjdXJyZW50XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB3aGlsZSAoaSA8IHBhcnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBwYXJ0c1tpXTtcblxuICAgICAgICAgICAgICAgIG9iaiA9IHJldHVybkN1cnJlbnQob2JqKTtcblxuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmogIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbWl4aXR1cC5oID0gaDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBCYXNlIGNsYXNzIGFkZHMgaW5zdGFuY2UgbWV0aG9kcyB0byBhbGwgb3RoZXIgZXh0ZW5zaWJsZSBNaXhJdFVwIGNsYXNzZXMsXG4gICAgICogZW5hYmxpbmcgdGhlIGNhbGxpbmcgb2YgYW55IHJlZ2lzdGVyZWQgaG9va3MuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5CYXNlID0gZnVuY3Rpb24oKSB7fTtcblxuICAgIG1peGl0dXAuQmFzZS5wcm90b3R5cGUgPSB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBtaXhpdHVwLkJhc2UsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxzIGFueSByZWdpc3RlcmVkIGhvb2tzIGZvciB0aGUgcHJvdmlkZWQgYWN0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5CYXNlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAgICAgMi4wLjBcbiAgICAgICAgICogQHBhcmFtICAgICAgIHtzdHJpbmd9ICAgIGFjdGlvbk5hbWVcbiAgICAgICAgICogQHBhcmFtICAgICAgIHtBcnJheTwqPn0gIGFyZ3NcbiAgICAgICAgICogQHJldHVybiAgICAgIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBjYWxsQWN0aW9uczogZnVuY3Rpb24oYWN0aW9uTmFtZSwgYXJncykge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgaG9va3MgICAgICAgICAgID0gc2VsZi5jb25zdHJ1Y3Rvci5hY3Rpb25zW2FjdGlvbk5hbWVdLFxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbk5hbWUgICA9ICcnO1xuXG4gICAgICAgICAgICBpZiAoIWhvb2tzIHx8IGguaXNFbXB0eU9iamVjdChob29rcykpIHJldHVybjtcblxuICAgICAgICAgICAgZm9yIChleHRlbnNpb25OYW1lIGluIGhvb2tzKSB7XG4gICAgICAgICAgICAgICAgaG9va3NbZXh0ZW5zaW9uTmFtZV0uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxzIGFueSByZWdpc3RlcmVkIGhvb2tzIGZvciB0aGUgcHJvdmlkZWQgZmlsdGVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5CYXNlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAgICAgMi4wLjBcbiAgICAgICAgICogQHBhcmFtICAgICAgIHtzdHJpbmd9ICAgIGZpbHRlck5hbWVcbiAgICAgICAgICogQHBhcmFtICAgICAgIHsqfSAgICAgICAgIGlucHV0XG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7QXJyYXk8Kj59ICBhcmdzXG4gICAgICAgICAqIEByZXR1cm4gICAgICB7Kn1cbiAgICAgICAgICovXG5cbiAgICAgICAgY2FsbEZpbHRlcnM6IGZ1bmN0aW9uKGZpbHRlck5hbWUsIGlucHV0LCBhcmdzKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBob29rcyAgICAgICAgICAgPSBzZWxmLmNvbnN0cnVjdG9yLmZpbHRlcnNbZmlsdGVyTmFtZV0sXG4gICAgICAgICAgICAgICAgb3V0cHV0ICAgICAgICAgID0gaW5wdXQsXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uTmFtZSAgID0gJyc7XG5cbiAgICAgICAgICAgIGlmICghaG9va3MgfHwgaC5pc0VtcHR5T2JqZWN0KGhvb2tzKSkgcmV0dXJuIG91dHB1dDtcblxuICAgICAgICAgICAgYXJncyA9IGFyZ3MgfHwgW107XG5cbiAgICAgICAgICAgIGZvciAoZXh0ZW5zaW9uTmFtZSBpbiBob29rcykge1xuICAgICAgICAgICAgICAgIGFyZ3MgPSBoLmFycmF5RnJvbUxpc3QoYXJncyk7XG5cbiAgICAgICAgICAgICAgICBhcmdzLnVuc2hpZnQob3V0cHV0KTtcblxuICAgICAgICAgICAgICAgIG91dHB1dCA9IGhvb2tzW2V4dGVuc2lvbk5hbWVdLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBCYXNlU3RhdGljIGNsYXNzIGhvbGRzIGEgc2V0IG9mIHN0YXRpYyBtZXRob2RzIHdoaWNoIGFyZSB0aGVuIGFkZGVkIHRvIGFsbCBvdGhlclxuICAgICAqIGV4dGVuc2libGUgTWl4SXRVcCBjbGFzc2VzIGFzIGEgbWVhbnMgb2YgaW50ZWdyYXRpbmcgZXh0ZW5zaW9ucyB2aWEgdGhlIGFkZGl0aW9uIG9mIG5ld1xuICAgICAqIG1ldGhvZHMgYW5kL29yIGFjdGlvbnMgYW5kIGhvb2tzLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmFjdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5maWx0ZXJzID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBlcmZvcm1zIGEgc2hhbGxvdyBleHRlbmQgb24gdGhlIGNsYXNzJ3MgcHJvdG90eXBlLCBhZGRpbmcgb25lIG9yIG1vcmUgbmV3IG1lbWJlcnMgdG9cbiAgICAgICAgICogdGhlIGNsYXNzIGluIGEgc2luZ2xlIG9wZXJhdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQmFzZVN0YXRpY1xuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHNpbmNlICAgICAgIDIuMS4wXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7b2JqZWN0fSBleHRlbnNpb25cbiAgICAgICAgICogQHJldHVybiAgICAgIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmV4dGVuZCA9IGZ1bmN0aW9uKGV4dGVuc2lvbikge1xuICAgICAgICAgICAgaC5leHRlbmQodGhpcy5wcm90b3R5cGUsIGV4dGVuc2lvbik7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVycyBhIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiB0aGUgYWN0aW9uIGhvb2sgb2YgdGhlIHByb3ZpZGVkIG5hbWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkJhc2VTdGF0aWNcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBzaW5jZSAgICAgICAyLjEuMFxuICAgICAgICAgKiBAcGFyYW0gICAgICAge3N0cmluZ30gICAgaG9va05hbWVcbiAgICAgICAgICogQHBhcmFtICAgICAgIHtzdHJpbmd9ICAgIGV4dGVuc2lvbk5hbWVcbiAgICAgICAgICogQHBhcmFtICAgICAgIHtmdW5jdGlvbn0gIGZ1bmNcbiAgICAgICAgICogQHJldHVybiAgICAgIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLnJlZ2lzdGVyQWN0aW9uID0gZnVuY3Rpb24oaG9va05hbWUsIGV4dGVuc2lvbk5hbWUsIGZ1bmMpIHtcbiAgICAgICAgICAgICh0aGlzLmFjdGlvbnNbaG9va05hbWVdID0gdGhpcy5hY3Rpb25zW2hvb2tOYW1lXSB8fCB7fSlbZXh0ZW5zaW9uTmFtZV0gPSBmdW5jO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gdGhlIGZpbHRlciBvZiB0aGUgcHJvdmlkZWQgbmFtZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQmFzZVN0YXRpY1xuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHNpbmNlICAgICAgIDIuMS4wXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7c3RyaW5nfSAgICBob29rTmFtZVxuICAgICAgICAgKiBAcGFyYW0gICAgICAge3N0cmluZ30gICAgZXh0ZW5zaW9uTmFtZVxuICAgICAgICAgKiBAcGFyYW0gICAgICAge2Z1bmN0aW9ufSAgZnVuY1xuICAgICAgICAgKiBAcmV0dXJuICAgICAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMucmVnaXN0ZXJGaWx0ZXIgPSBmdW5jdGlvbihob29rTmFtZSwgZXh0ZW5zaW9uTmFtZSwgZnVuYykge1xuICAgICAgICAgICAgKHRoaXMuZmlsdGVyc1tob29rTmFtZV0gPSB0aGlzLmZpbHRlcnNbaG9va05hbWVdIHx8IHt9KVtleHRlbnNpb25OYW1lXSA9IGZ1bmM7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgbWl4aXR1cC5GZWF0dXJlc2AgY2xhc3MgcGVyZm9ybXMgYWxsIGZlYXR1cmUgYW5kIENTUyBwcmVmaXggZGV0ZWN0aW9uXG4gICAgICogbmVjY2Vzc2FyeSBmb3IgTWl4SXRVcCB0byBmdW5jdGlvbiBjb3JyZWN0bHksIGFzIHdlbGwgYXMgc3RvcmluZyB2YXJpb3VzXG4gICAgICogc3RyaW5nIGFuZCBhcnJheSBjb25zdGFudHMuIEFsbCBmZWF0dXJlIGRlY2VjdGlvbiBpcyBvbiBldmFsdWF0aW9uIG9mIHRoZVxuICAgICAqIGxpYnJhcnkgYW5kIHN0b3JlZCBpbiBhIHNpbmdsZXRvbiBpbnN0YW5jZSBmb3IgdXNlIGJ5IG90aGVyIGludGVybmFsIGNsYXNzZXMuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5GZWF0dXJlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtaXhpdHVwLkJhc2UuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVDb25zdHJ1Y3QnKTtcblxuICAgICAgICB0aGlzLmJveFNpemluZ1ByZWZpeCAgICAgICAgICAgID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ICAgICAgICAgICAgPSAnJztcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uUHJlZml4ICAgICAgICAgICA9ICcnO1xuXG4gICAgICAgIHRoaXMuYm94U2l6aW5nUHJlZml4ICAgICAgICAgICAgPSAnJztcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1Qcm9wICAgICAgICAgICAgICA9ICcnO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybVJ1bGUgICAgICAgICAgICAgID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvblByb3AgICAgICAgICAgICAgPSAnJztcbiAgICAgICAgdGhpcy5wZXJzcGVjdGl2ZVByb3AgICAgICAgICAgICA9ICcnO1xuICAgICAgICB0aGlzLnBlcnNwZWN0aXZlT3JpZ2luUHJvcCAgICAgID0gJyc7XG5cbiAgICAgICAgdGhpcy5oYXMgICAgICAgICAgICAgICAgICAgICAgICA9IG5ldyBtaXhpdHVwLkhhcygpO1xuXG4gICAgICAgIHRoaXMuY2FuYXJ5ICAgICAgICAgICAgICAgICAgICAgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuQk9YX1NJWklOR19QUk9QICAgICAgICAgICAgPSAnYm94U2l6aW5nJztcbiAgICAgICAgdGhpcy5UUkFOU0lUSU9OX1BST1AgICAgICAgICAgICA9ICd0cmFuc2l0aW9uJztcbiAgICAgICAgdGhpcy5UUkFOU0ZPUk1fUFJPUCAgICAgICAgICAgICA9ICd0cmFuc2Zvcm0nO1xuICAgICAgICB0aGlzLlBFUlNQRUNUSVZFX1BST1AgICAgICAgICAgID0gJ3BlcnNwZWN0aXZlJztcbiAgICAgICAgdGhpcy5QRVJTUEVDVElWRV9PUklHSU5fUFJPUCAgICA9ICdwZXJzcGVjdGl2ZU9yaWdpbic7XG4gICAgICAgIHRoaXMuVkVORE9SUyAgICAgICAgICAgICAgICAgICAgPSBbJ1dlYmtpdCcsICdtb3onLCAnTycsICdtcyddO1xuXG4gICAgICAgIHRoaXMuVFdFRU5BQkxFID0gW1xuICAgICAgICAgICAgJ29wYWNpdHknLFxuICAgICAgICAgICAgJ3dpZHRoJywgJ2hlaWdodCcsXG4gICAgICAgICAgICAnbWFyZ2luUmlnaHQnLCAnbWFyZ2luQm90dG9tJyxcbiAgICAgICAgICAgICd4JywgJ3knLFxuICAgICAgICAgICAgJ3NjYWxlJyxcbiAgICAgICAgICAgICd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknLCAndHJhbnNsYXRlWicsXG4gICAgICAgICAgICAncm90YXRlWCcsICdyb3RhdGVZJywgJ3JvdGF0ZVonXG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5GZWF0dXJlcyk7XG5cbiAgICBtaXhpdHVwLkZlYXR1cmVzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBoLmV4dGVuZChtaXhpdHVwLkZlYXR1cmVzLnByb3RvdHlwZSxcbiAgICAvKiogQGxlbmRzIG1peGl0dXAuRmVhdHVyZXMgKi9cbiAgICB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBtaXhpdHVwLkZlYXR1cmVzLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUluaXQnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBzZWxmLmNhbmFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBzZWxmLnNldFByZWZpeGVzKCk7XG4gICAgICAgICAgICBzZWxmLnJ1blRlc3RzKCk7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUluaXQnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgcnVuVGVzdHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVSdW5UZXN0cycsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHNlbGYuaGFzLnByb21pc2VzICAgICAgID0gdHlwZW9mIHdpbmRvdy5Qcm9taXNlID09PSAnZnVuY3Rpb24nO1xuICAgICAgICAgICAgc2VsZi5oYXMudHJhbnNpdGlvbnMgICAgPSBzZWxmLnRyYW5zaXRpb25QcmVmaXggIT09ICd1bnN1cHBvcnRlZCc7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyUnVuVGVzdHMnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBoLmZyZWV6ZShzZWxmLmhhcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBzZXRQcmVmaXhlczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZVNldFByZWZpeGVzJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgc2VsZi50cmFuc2l0aW9uUHJlZml4ICAgPSBoLmdldFByZWZpeChzZWxmLmNhbmFyeSwgJ1RyYW5zaXRpb24nLCBzZWxmLlZFTkRPUlMpO1xuICAgICAgICAgICAgc2VsZi50cmFuc2Zvcm1QcmVmaXggICAgPSBoLmdldFByZWZpeChzZWxmLmNhbmFyeSwgJ1RyYW5zZm9ybScsIHNlbGYuVkVORE9SUyk7XG4gICAgICAgICAgICBzZWxmLmJveFNpemluZ1ByZWZpeCAgICA9IGguZ2V0UHJlZml4KHNlbGYuY2FuYXJ5LCAnQm94U2l6aW5nJywgc2VsZi5WRU5ET1JTKTtcblxuICAgICAgICAgICAgc2VsZi5ib3hTaXppbmdQcm9wID0gc2VsZi5ib3hTaXppbmdQcmVmaXggP1xuICAgICAgICAgICAgICAgIHNlbGYuYm94U2l6aW5nUHJlZml4ICsgaC5wYXNjYWxDYXNlKHNlbGYuQk9YX1NJWklOR19QUk9QKSA6IHNlbGYuQk9YX1NJWklOR19QUk9QO1xuXG4gICAgICAgICAgICBzZWxmLnRyYW5zaXRpb25Qcm9wID0gc2VsZi50cmFuc2l0aW9uUHJlZml4ID9cbiAgICAgICAgICAgICAgICBzZWxmLnRyYW5zaXRpb25QcmVmaXggKyBoLnBhc2NhbENhc2Uoc2VsZi5UUkFOU0lUSU9OX1BST1ApIDogc2VsZi5UUkFOU0lUSU9OX1BST1A7XG5cbiAgICAgICAgICAgIHNlbGYudHJhbnNmb3JtUHJvcCA9IHNlbGYudHJhbnNmb3JtUHJlZml4ID9cbiAgICAgICAgICAgICAgICBzZWxmLnRyYW5zZm9ybVByZWZpeCArIGgucGFzY2FsQ2FzZShzZWxmLlRSQU5TRk9STV9QUk9QKSA6IHNlbGYuVFJBTlNGT1JNX1BST1A7XG5cbiAgICAgICAgICAgIHNlbGYudHJhbnNmb3JtUnVsZSA9IHNlbGYudHJhbnNmb3JtUHJlZml4ID9cbiAgICAgICAgICAgICAgICAnLScgKyBzZWxmLnRyYW5zZm9ybVByZWZpeCArICctJyArIHNlbGYuVFJBTlNGT1JNX1BST1AgOiBzZWxmLlRSQU5TRk9STV9QUk9QO1xuXG4gICAgICAgICAgICBzZWxmLnBlcnNwZWN0aXZlUHJvcCA9IHNlbGYudHJhbnNmb3JtUHJlZml4ID9cbiAgICAgICAgICAgICAgICBzZWxmLnRyYW5zZm9ybVByZWZpeCArIGgucGFzY2FsQ2FzZShzZWxmLlBFUlNQRUNUSVZFX1BST1ApIDogc2VsZi5QRVJTUEVDVElWRV9QUk9QO1xuXG4gICAgICAgICAgICBzZWxmLnBlcnNwZWN0aXZlT3JpZ2luUHJvcCA9IHNlbGYudHJhbnNmb3JtUHJlZml4ID9cbiAgICAgICAgICAgICAgICBzZWxmLnRyYW5zZm9ybVByZWZpeCArIGgucGFzY2FsQ2FzZShzZWxmLlBFUlNQRUNUSVZFX09SSUdJTl9QUk9QKSA6XG4gICAgICAgICAgICAgICAgc2VsZi5QRVJTUEVDVElWRV9PUklHSU5fUFJPUDtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJTZXRQcmVmaXhlcycsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuSGFzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbnMgICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9taXNlcyAgICAgICA9IGZhbHNlO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgLy8gQXNzaWduIGEgc2luZ2xldG9uIGluc3RhbmNlIHRvIGBtaXhpdHVwLmZlYXR1cmVzYCBhbmQgaW5pdGlhbGlzZTpcblxuICAgIG1peGl0dXAuZmVhdHVyZXMgPSBuZXcgbWl4aXR1cC5GZWF0dXJlcygpO1xuXG4gICAgbWl4aXR1cC5mZWF0dXJlcy5pbml0KCk7XG5cbiAgICAvKipcbiAgICAgKiBBIGdyb3VwIG9mIHByb3BlcnRpZXMgZGVmaW5pbmcgdGhlIG1peGVyJ3MgYW5pbWF0aW9uIGFuZCBlZmZlY3RzIHNldHRpbmdzLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnXG4gICAgICogQG5hbWUgICAgICAgIGFuaW1hdGlvblxuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKiBAcHVibGljXG4gICAgICogQHNpbmNlICAgICAgIDIuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLkNvbmZpZ0FuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtaXhpdHVwLkJhc2UuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVDb25zdHJ1Y3QnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBib29sZWFuIGRpY3RhdGluZyB3aGV0aGVyIG9yIG5vdCBhbmltYXRpb24gc2hvdWxkIGJlIGVuYWJsZWQgZm9yIHRoZSBNaXhJdFVwIGluc3RhbmNlLlxuICAgICAgICAgKiBJZiBgZmFsc2VgLCBhbGwgb3BlcmF0aW9ucyB3aWxsIG9jY3VyIGluc3RhbnRseSBhbmQgc3luY3Jvbm91c2x5LCBhbHRob3VnaCBjYWxsYmFja1xuICAgICAgICAgKiBmdW5jdGlvbnMgYW5kIGFueSByZXR1cm5lZCBwcm9taXNlcyB3aWxsIHN0aWxsIGJlIGZ1bGZpbGxlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogQ3JlYXRlIGEgbWl4ZXIgd2l0aCBhbGwgYW5pbWF0aW9ucyBkaXNhYmxlZDwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAqICAgICAgICAgZW5hYmxlOiBmYWxzZVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGVuYWJsZVxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuYW5pbWF0aW9uXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge2Jvb2xlYW59XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICB0cnVlXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuZW5hYmxlID0gdHJ1ZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBzdHJpbmcgb2Ygb25lIG9yIG1vcmUgc3BhY2Utc2VwZXJhdGVkIHByb3BlcnRpZXMgdG8gd2hpY2ggdHJhbnNpdGlvbnMgd2lsbCBiZVxuICAgICAgICAgKiBhcHBsaWVkIGZvciBhbGwgZmlsdGVyaW5nIGFuaW1hdGlvbnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFByb3BlcnRpZXMgY2FuIGJlIGxpc3RlZCBhbnkgb3JkZXIgb3IgY29tYmluYXRpb24sIGFsdGhvdWdoIHRoZXkgd2lsbCBiZSBhcHBsaWVkIGluIGEgc3BlY2lmaWNcbiAgICAgICAgICogcHJlZGVmaW5lZCBvcmRlciB0byBwcm9kdWNlIGNvbnNpc3RlbnQgcmVzdWx0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogVG8gbGVhcm4gbW9yZSBhYm91dCBhdmFpbGFibGUgZWZmZWN0cywgZXhwZXJpbWVudCB3aXRoIG91ciA8YSBocmVmPVwiaHR0cHM6Ly93d3cua3Vua2FsYWJzLmNvbS9taXhpdHVwL1wiPlxuICAgICAgICAgKiBzYW5kYm94IGRlbW88L2E+IGFuZCB0cnkgb3V0IHRoZSBcIkV4cG9ydCBjb25maWdcIiBidXR0b24gaW4gdGhlIEFuaW1hdGlvbiBvcHRpb25zIGRyb3AgZG93bi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogQXBwbHkgXCJmYWRlXCIgYW5kIFwidHJhbnNsYXRlWlwiIGVmZmVjdHMgdG8gYWxsIGFuaW1hdGlvbnM8L2NhcHRpb24+XG4gICAgICAgICAqIC8vIEFzIHRhcmdldHMgYXJlIGZpbHRlcmVkIGluIGFuZCBvdXQsIHRoZXkgd2lsbCBmYWRlIGJldHdlZW5cbiAgICAgICAgICogLy8gb3BhY2l0eSAxIGFuZCAwIGFuZCB0cmFuc2Zvcm0gYmV0d2VlbiB0cmFuc2xhdGVaKC0xMDBweCkgYW5kXG4gICAgICAgICAqIC8vIHRyYW5zbGF0ZVooMCkuXG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgKiAgICAgICAgIGVmZmVjdHM6ICdmYWRlIHRyYW5zbGF0ZVooLTEwMHB4KSdcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBlZmZlY3RzXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5hbmltYXRpb25cbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7c3RyaW5nfVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgJ2ZhZGUgc2NhbGUnXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuZWZmZWN0cyA9ICdmYWRlIHNjYWxlJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBzdHJpbmcgb2Ygb25lIG9yIG1vcmUgc3BhY2Utc2VwZXJhdGVkIGVmZmVjdHMgdG8gYmUgYXBwbGllZCBvbmx5IHRvIGZpbHRlci1pblxuICAgICAgICAgKiBhbmltYXRpb25zLCBvdmVycmlkaW5nIGBjb25maWcuYW5pbWF0aW9uLmVmZmVjdHNgIGlmIHNldC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogQXBwbHkgZG93bndhcmRzIHZlcnRpY2FsIHRyYW5zbGF0ZSB0byB0YXJnZXRzIGJlaW5nIGZpbHRlcmVkIGluPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICogICAgICAgICBlZmZlY3RzSW46ICdmYWRlIHRyYW5zbGF0ZVkoLTEwMCUpJ1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGVmZmVjdHNJblxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuYW5pbWF0aW9uXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge3N0cmluZ31cbiAgICAgICAgICogQGRlZmF1bHQgICAgICcnXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuZWZmZWN0c0luID0gJyc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgc3RyaW5nIG9mIG9uZSBvciBtb3JlIHNwYWNlLXNlcGVyYXRlZCBlZmZlY3RzIHRvIGJlIGFwcGxpZWQgb25seSB0byBmaWx0ZXItb3V0XG4gICAgICAgICAqIGFuaW1hdGlvbnMsIG92ZXJyaWRpbmcgYGNvbmZpZy5hbmltYXRpb24uZWZmZWN0c2AgaWYgc2V0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBBcHBseSB1cHdhcmRzIHZlcnRpY2FsIHRyYW5zbGF0ZSB0byB0YXJnZXRzIGJlaW5nIGZpbHRlcmVkIG91dDwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAqICAgICAgICAgZWZmZWN0c091dDogJ2ZhZGUgdHJhbnNsYXRlWSgtMTAwJSknXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgZWZmZWN0c091dFxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuYW5pbWF0aW9uXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge3N0cmluZ31cbiAgICAgICAgICogQGRlZmF1bHQgICAgICcnXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuZWZmZWN0c091dCA9ICcnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBpbnRlZ2VyIGRpY3RhdGluZyB0aGUgZHVyYXRpb24gb2YgYWxsIE1peEl0VXAgYW5pbWF0aW9ucyBpbiBtaWxsaXNlY29uZHMsIG5vdFxuICAgICAgICAgKiBpbmNsdWRpbmcgYW55IGFkZGl0aW9uYWwgZGVsYXkgYXBsbGllZCB2aWEgdGhlIGAnc3RhZ2dlcidgIGVmZmVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogQXBwbHkgYW4gYW5pbWF0aW9uIGR1cmF0aW9uIG9mIDIwMG1zIHRvIGFsbCBtaXhpdHVwIGFuaW1hdGlvbnM8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgKiAgICAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBkdXJhdGlvblxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuYW5pbWF0aW9uXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge251bWJlcn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIDYwMFxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gNjAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHZhbGlkIENTUzMgdHJhbnNpdGlvbi10aW1pbmcgZnVuY3Rpb24gb3Igc2hvcnRoYW5kLiBGb3IgYSBmdWxsIGxpc3Qgb2YgYWNjZXB0ZWRcbiAgICAgICAgICogdmFsdWVzLCB2aXNpdCA8YSBocmVmPVwiaHR0cDovL2Vhc2luZ3MubmV0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+ZWFzaW5ncy5uZXQ8L2E+LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDE6IEFwcGx5IFwiZWFzZS1pbi1vdXRcIiBlYXNpbmcgdG8gYWxsIGFuaW1hdGlvbnM8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgKiAgICAgICAgIGVhc2luZzogJ2Vhc2UtaW4tb3V0J1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAyOiBBcHBseSBhIGN1c3RvbSBcImN1YmljLWJlemllclwiIGVhc2luZyBmdW5jdGlvbiB0byBhbGwgYW5pbWF0aW9uczwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAqICAgICAgICAgZWFzaW5nOiAnY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpJ1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGVhc2luZ1xuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuYW5pbWF0aW9uXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge3N0cmluZ31cbiAgICAgICAgICogQGRlZmF1bHQgICAgICdlYXNlJ1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmVhc2luZyA9ICdlYXNlJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBib29sZWFuIGRpY3RhdGluZyB3aGV0aGVyIG9yIG5vdCB0byBhcHBseSBwZXJzcGVjdGl2ZSB0byB0aGUgTWl4SXRVcCBjb250YWluZXJcbiAgICAgICAgICogZHVyaW5nIGFuaW1hdGlvbnMuIEJ5IGRlZmF1bHQsIHBlcnNwZWN0aXZlIGlzIGFsd2F5cyBhcHBsaWVkIGFuZCBjcmVhdGVzIHRoZVxuICAgICAgICAgKiBpbGx1c2lvbiBvZiB0aHJlZS1kaW1lbnNpb25hbCBzcGFjZSBmb3IgZWZmZWN0cyBzdWNoIGFzIGB0cmFuc2xhdGVaYCwgYHJvdGF0ZVhgLFxuICAgICAgICAgKiBhbmQgYHJvdGF0ZVlgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBZb3UgbWF5IHdpc2ggdG8gZGlzYWJsZSB0aGlzIGFuZCBkZWZpbmUgeW91ciBvd24gcGVyc3BlY3RpdmUgc2V0dGluZ3MgdmlhIENTUy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogUHJldmVudCBwZXJzcGVjdGl2ZSBmcm9tIGJlaW5nIGFwcGxpZWQgdG8gYW55IDNEIHRyYW5zZm9ybXM8L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgKiAgICAgICAgIGFwcGx5UGVyc3BlY3RpdmU6IGZhbHNlXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgYXBwbHlQZXJzcGVjdGl2ZVxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuYW5pbWF0aW9uXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge2JvbGVhbn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIHRydWVcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5hcHBseVBlcnNwZWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHBlcnNwZWN0aXZlIGRpc3RhbmNlIHZhbHVlIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGNvbnRhaW5lciBkdXJpbmcgYW5pbWF0aW9ucyxcbiAgICAgICAgICogYWZmZWN0aW5nIGFueSAzRC10cmFuc2Zvcm0tYmFzZWQgZWZmZWN0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogU2V0IGEgcGVyc3BlY3RpdmUgZGlzdGFuY2Ugb2YgMjAwMHB4PC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICogICAgICAgICBlZmZlY3RzOiAncm90YXRlWSgtMjVkZWcpJyxcbiAgICAgICAgICogICAgICAgICBwZXJzcGVjdGl2ZURpc3RhbmNlOiAnMjAwMHB4J1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIHBlcnNwZWN0aXZlRGlzdGFuY2VcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmFuaW1hdGlvblxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnMzAwMHB4J1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLnBlcnNwZWN0aXZlRGlzdGFuY2UgPSAnMzAwMHB4JztcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHBlcnNwZWN0aXZlLW9yaWdpbiB2YWx1ZSB0byBiZSBhcHBsaWVkIHRvIHRoZSBjb250YWluZXIgZHVyaW5nIGFuaW1hdGlvbnMsXG4gICAgICAgICAqIGFmZmVjdGluZyBhbnkgM0QtdHJhbnNmb3JtLWJhc2VkIGVmZmVjdHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IFNldCBhIHBlcnNwZWN0aXZlIG9yaWdpbiBpbiB0aGUgdG9wLXJpZ2h0IG9mIHRoZSBjb250YWluZXI8L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgKiAgICAgICAgIGVmZmVjdHM6ICd0cmFuc2F0ZVooLTIwMHB4KScsXG4gICAgICAgICAqICAgICAgICAgcGVyc3BlY3RpdmVPcmlnaW46ICcxMDAlIDAnXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgcGVyc3BlY3RpdmVPcmlnaW5cbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmFuaW1hdGlvblxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnNTAlIDUwJSdcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5wZXJzcGVjdGl2ZU9yaWdpbiA9ICc1MCUgNTAlJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBib29sZWFuIGRpY3RhdGluZyB3aGV0aGVyIG9yIG5vdCB0byBlbmFibGUgdGhlIHF1ZXVpbmcgb2Ygb3BlcmF0aW9ucy5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgYHRydWVgIChkZWZhdWx0KSwgYW5kIGEgY29udHJvbCBpcyBjbGlja2VkIG9yIGFuIEFQSSBjYWxsIGlzIG1hZGUgd2hpbGUgYW5vdGhlclxuICAgICAgICAgKiBvcGVyYXRpb24gaXMgcHJvZ3Jlc3MsIHRoZSBvcGVyYXRpb24gd2lsbCBnbyBpbnRvIHRoZSBxdWV1ZSBhbmQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGV4ZWN0dXRlZFxuICAgICAgICAgKiB3aGVuIHRoZSBwcmV2aW91cyBvcGVyYWl0b25zIGlzIGZpbmlzaGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiBgZmFsc2VgLCBhbnkgcmVxdWVzdGVkIG9wZXJhdGlvbnMgd2lsbCBiZSBpZ25vcmVkLCBhbmQgdGhlIGBvbk1peEJ1c3lgIGNhbGxiYWNrIGFuZCBgbWl4QnVzeWBcbiAgICAgICAgICogZXZlbnQgd2lsbCBiZSBmaXJlZC4gSWYgYGRlYnVnLnNob3dXYXJuaW5nc2AgaXMgZW5hYmxlZCwgYSBjb25zb2xlIHdhcm5pbmcgd2lsbCBhbHNvIG9jY3VyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBEaXNhYmxlIHF1ZXVpbmc8L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgKiAgICAgICAgIHF1ZXVlOiBmYWxzZVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIHF1ZXVlXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5hbmltYXRpb25cbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7Ym9vbGVhbn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIHRydWVcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5xdWV1ZSA9IHRydWU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGludGVnZXIgZGljdGFjdGluZyB0aGUgbWF4aW11bSBudW1iZXIgb2Ygb3BlcmF0aW9ucyBhbGxvd2VkIGluIHRoZSBxdWV1ZSBhdFxuICAgICAgICAgKiBhbnkgdGltZSwgd2hlbiBxdWV1aW5nIGlzIGVuYWJsZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IEFsbG93IGEgbWF4aW11bSBvZiA1IG9wZXJhdGlvbnMgaW4gdGhlIHF1ZXVlIGF0IGFueSB0aW1lPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICogICAgICAgICBxdWV1ZUxpbWl0OiA1XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgcXVldWVMaW1pdFxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuYW5pbWF0aW9uXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge251bWJlcn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIDNcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5xdWV1ZUxpbWl0ID0gMztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBib29sZWFuIGRpY3RhdGluZyB3aGV0aGVyIG9yIG5vdCB0byB0cmFuc2l0aW9uIHRoZSBoZWlnaHQgYW5kIHdpZHRoIG9mIHRoZVxuICAgICAgICAgKiBjb250YWluZXIgYXMgZWxlbWVudHMgYXJlIGZpbHRlcmVkIGluIGFuZCBvdXQuIElmIGRpc2FibGVkLCB0aGUgY29udGFpbmVyIGhlaWdodFxuICAgICAgICAgKiB3aWxsIGNoYW5nZSBhYnJ1cHRseS5cbiAgICAgICAgICpcbiAgICAgICAgICogSXQgbWF5IGJlIGRlc2lyYWJsZSB0byBkaXNhYmxlIHRoaXMgb24gbW9iaWxlIGRldmljZXMgYXMgdGhlIENTUyBgaGVpZ2h0YCBhbmRcbiAgICAgICAgICogYHdpZHRoYCBwcm9wZXJ0aWVzIGRvIG5vdCByZWNlaXZlIEdQVS1hY2NlbGVyYXRpb24gYW5kIGNhbiB0aGVyZWZvcmUgY2F1c2Ugc3R1dHRlcmluZy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAxOiBEaXNhYmxlIHRoZSB0cmFuc2l0aW9uaW5nIG9mIHRoZSBjb250YWluZXIgaGVpZ2h0IGFuZC9vciB3aWR0aDwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAqICAgICAgICAgYW5pbWF0ZVJlc2l6ZUNvbnRhaW5lcjogZmFsc2VcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMjogRGlzYWJsZSB0aGUgdHJhbnNpdGlvbmluZyBvZiB0aGUgY29udGFpbmVyIGhlaWdodCBhbmQvb3Igd2lkdGggZm9yIG1vYmlsZSBkZXZpY2VzIG9ubHk8L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgKiAgICAgICAgIGFuaW1hdGVSZXNpemVDb250YWluZXI6IG15RmVhdHVyZVRlc3RzLmlzTW9iaWxlID8gZmFsc2UgOiB0cnVlXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgYW5pbWF0ZVJlc2l6ZUNvbnRhaW5lclxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuYW5pbWF0aW9uXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge2Jvb2xlYW59XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICB0cnVlXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuYW5pbWF0ZVJlc2l6ZUNvbnRhaW5lciA9IHRydWU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciBvciBub3QgdG8gdHJhbnNpdGlvbiB0aGUgaGVpZ2h0IGFuZCB3aWR0aCBvZiB0YXJnZXRcbiAgICAgICAgICogZWxlbWVudHMgYXMgdGhleSBjaGFuZ2UgdGhyb3VnaG91dCB0aGUgY291cnNlIG9mIGFuIGFuaW1hdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBpcyBvZnRlbiBhIG11c3QgZm9yIGZsZXgtYm94IGdyaWQgbGF5b3V0cyB3aGVyZSB0aGUgc2l6ZSBvZiB0YXJnZXQgZWxlbWVudHMgbWF5IGNoYW5nZVxuICAgICAgICAgKiBkZXBlbmRpbmcgb24gZmluYWwgdGhlaXIgcG9zaXRpb24gaW4gcmVsYXRpb24gdG8gdGhlaXIgc2libGluZ3MsIG9yIGZvciBgLmNoYW5nZUxheW91dCgpYFxuICAgICAgICAgKiBvcGVyYXRpb25zIHdoZXJlIHRoZSBzaXplIG9mIHRhcmdldHMgY2hhbmdlIGJldHdlZW4gbGF5b3V0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogTkI6IFRoaXMgZmVhdHVyZSByZXF1aXJlcyBhZGRpdGlvbmFsIGNhbGN1bGF0aW9ucyBhbmQgbWFuaXB1bGF0aW9uIHRvIG5vbi1oYXJkd2FyZS1hY2NlbGVyYXRlZFxuICAgICAgICAgKiBwcm9wZXJ0aWVzIHdoaWNoIG1heSBhZHZlcnNlbHkgYWZmZWN0IHBlcmZvcm1hbmNlIG9uIHNsb3dlciBkZXZpY2VzLCBhbmQgaXMgdGhlcmVmb3JlXG4gICAgICAgICAqIGRpc2FibGVkIGJ5IGRlZmF1bHQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IEVuYWJsZSB0aGUgdHJhbnNpdGlvbmluZyBvZiB0YXJnZXQgd2lkdGhzIGFuZCBoZWlnaHRzPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICogICAgICAgICBhbmltYXRlUmVzaXplVGFyZ2V0czogdHJ1ZVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGFuaW1hdGVSZXNpemVUYXJnZXRzXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5hbmltYXRpb25cbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7Ym9vbGVhbn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIGZhbHNlXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuYW5pbWF0ZVJlc2l6ZVRhcmdldHMgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBjdXN0b20gZnVuY3Rpb24gdXNlZCB0byBtYW5pcHVsYXRlIHRoZSBvcmRlciBpbiB3aGljaCB0aGUgc3RhZ2dlciBkZWxheSBpc1xuICAgICAgICAgKiBpbmNyZW1lbnRlZCB3aGVuIHVzaW5nIHRoZSDigJhzdGFnZ2Vy4oCZIGVmZmVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogV2hlbiB1c2luZyB0aGUgJ3N0YWdnZXInIGVmZmVjdCwgdGhlIGRlbGF5IGFwcGxpZWQgdG8gZWFjaCB0YXJnZXQgZWxlbWVudCBpcyBpbmNyZW1lbnRlZFxuICAgICAgICAgKiBiYXNlZCBvbiBpdHMgaW5kZXguIFlvdSBtYXkgY3JlYXRlIGEgY3VzdG9tIGZ1bmN0aW9uIHRvIG1hbmlwdWxhdGUgdGhlIG9yZGVyIGluIHdoaWNoIHRoZVxuICAgICAgICAgKiBkZWxheSBpcyBpbmNyZW1lbnRlZCBhbmQgY3JlYXRlIGVuZ2FnaW5nIG5vbi1saW5lYXIgc3RhZ2dlciBlZmZlY3RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgZnVuY3Rpb24gcmVjZWl2ZXMgdGhlIGluZGV4IG9mIHRoZSB0YXJnZXQgZWxlbWVudCBhcyBhIHBhcmFtZXRlciwgYW5kIG11c3RcbiAgICAgICAgICogcmV0dXJuIGFuIGludGVnZXIgd2hpY2ggc2VydmVzIGFzIHRoZSBtdWx0aXBsaWVyIGZvciB0aGUgc3RhZ2dlciBkZWxheS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAxOiBTdGFnZ2VyIHRhcmdldCBlbGVtZW50cyBieSBjb2x1bW4gaW4gYSAzLWNvbHVtbiBncmlkPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICogICAgICAgICBlZmZlY3RzOiAnZmFkZSBzdGFnZ2VyKDEwMG1zKScsXG4gICAgICAgICAqICAgICAgICAgc3RhZ2dlclNlcXVlbmNlOiBmdW5jdGlvbihpKSB7XG4gICAgICAgICAqICAgICAgICAgICAgIHJldHVybiBpICUgMztcbiAgICAgICAgICogICAgICAgICB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDI6IFVzaW5nIGFuIGFsZ29yaXRobSB0byBwcm9kdWNlIGEgbW9yZSBjb21wbGV4IHNlcXVlbmNlPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICogICAgICAgICBlZmZlY3RzOiAnZmFkZSBzdGFnZ2VyKDEwMG1zKScsXG4gICAgICAgICAqICAgICAgICAgc3RhZ2dlclNlcXVlbmNlOiBmdW5jdGlvbihpKSB7XG4gICAgICAgICAqICAgICAgICAgICAgIHJldHVybiAoMippKSAtICg1KigoaS8zKSAtICgoMS8zKSAqIChpJTMpKSkpO1xuICAgICAgICAgKiAgICAgICAgIH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBzdGFnZ2VyU2VxdWVuY2VcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmFuaW1hdGlvblxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtmdW5jdGlvbn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIG51bGxcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5zdGFnZ2VyU2VxdWVuY2UgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGJvb2xlYW4gZGljdGF0aW5nIHdoZXRoZXIgb3Igbm90IHRvIHJldmVyc2UgdGhlIGRpcmVjdGlvbiBvZiBgdHJhbnNsYXRlYFxuICAgICAgICAgKiBhbmQgYHJvdGF0ZWAgdHJhbnNmb3JtcyBmb3IgZWxlbWVudHMgYmVpbmcgZmlsdGVyZWQgb3V0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBJdCBjYW4gYmUgdXNlZCB0byBjcmVhdGUgY2Fyb3VzZWwtbGlrZSBhbmltYXRpb25zIHdoZXJlIGVsZW1lbnRzIGVudGVyIGFuZCBleGl0XG4gICAgICAgICAqIGZyb20gb3Bwb3NpdGUgZGlyZWN0aW9ucy4gSWYgZW5hYmxlZCwgdGhlIGVmZmVjdCBgdHJhbnNsYXRlWCgtMTAwJSlgIGZvciBlbGVtZW50c1xuICAgICAgICAgKiBiZWluZyBmaWx0ZXJlZCBpbiB3b3VsZCBiZWNvbWUgYHRyYW5zbGF0ZVgoMTAwJSlgIGZvciB0YXJnZXRzIGJlaW5nIGZpbHRlcmVkIG91dC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBmdW5jdGlvbmFsaXR5IGNhbiBhbHNvIGJlIGFjaGlldmVkIGJ5IHByb3ZpZGluZyBzZXBlcmF0ZSBlZmZlY3RzXG4gICAgICAgICAqIHN0cmluZ3MgZm9yIGBjb25maWcuYW5pbWF0aW9uLmVmZmVjdHNJbmAgYW5kIGBjb25maWcuYW5pbWF0aW9uLmVmZmVjdHNPdXRgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBSZXZlcnNlIHRoZSBkZXNpcmVkIGRpcmVjdGlvbiBvbiBhbnkgdHJhbnNsYXRlL3JvdGF0ZSBlZmZlY3QgZm9yIHRhcmdldHMgYmVpbmcgZmlsdGVyZWQgb3V0PC9jYXB0aW9uPlxuICAgICAgICAgKiAvLyBFbGVtZW50cyBiZWluZyBmaWx0ZXJlZCBpbiB3aWxsIGJlIHRyYW5zbGF0ZWQgZnJvbSAnMTAwJScgdG8gJzAnIHdoaWxlXG4gICAgICAgICAqIC8vIGVsZW1lbnRzIGJlaW5nIGZpbHRlcmVkIG91dCB3aWxsIGJlIHRyYW5zbGF0ZWQgZnJvbSAwIHRvICctMTAwJSdcbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAqICAgICAgICAgZWZmZWN0czogJ2ZhZGUgdHJhbnNsYXRlWCgxMDAlKScsXG4gICAgICAgICAqICAgICAgICAgcmV2ZXJzZU91dDogdHJ1ZSxcbiAgICAgICAgICogICAgICAgICBudWRnZTogZmFsc2UgLy8gRGlzYWJsZSBudWRnaW5nIHRvIGNyZWF0ZSBhIGNhcm91c2VsLWxpa2UgZWZmZWN0XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgcmV2ZXJzZU91dFxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuYW5pbWF0aW9uXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge2Jvb2xlYW59XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICBmYWxzZVxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLnJldmVyc2VPdXQgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBib29sZWFuIGRpY3RhdGluZyB3aGV0aGVyIG9yIG5vdCB0byBcIm51ZGdlXCIgdGhlIGFuaW1hdGlvbiBwYXRoIG9mIHRhcmdldHNcbiAgICAgICAgICogd2hlbiB0aGV5IGFyZSBiZWluZyBmaWx0ZXJlZCBpbiBhbmQgb3V0IHNpbXVsYXRlbm91c2x5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGhhcyBiZWVuIHRoZSBkZWZhdWx0IGJlaGF2aW9yIG9mIE1peEl0VXAgc2luY2UgdmVyc2lvbiAxLCBidXQgaXRcbiAgICAgICAgICogbWF5IGJlIGRlc2lyYWJsZSB0byBkaXNhYmxlIHRoaXMgZWZmZWN0IHdoZW4gZmlsdGVyaW5nIGRpcmVjdGx5IGZyb21cbiAgICAgICAgICogb25lIGV4Y2x1c2l2ZSBzZXQgb2YgdGFyZ2V0cyB0byBhIGRpZmZlcmVudCBleGNsdXNpdmUgc2V0IG9mIHRhcmdldHMsXG4gICAgICAgICAqIHRvIGNyZWF0ZSBhIGNhcm91c2VsLWxpa2UgZWZmZWN0LCBvciBhIGdlbmVyYWxseSBtb3JlIHN1YnRsZSBhbmltYXRpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IERpc2FibGUgdGhlIFwibnVkZ2luZ1wiIG9mIHRhcmdldHMgYmVpbmcgZmlsdGVyZWQgaW4gYW5kIG91dCBzaW11bGF0ZW5vdXNseTwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAqICAgICAgICAgbnVkZ2U6IGZhbHNlXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgbnVkZ2VcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmFuaW1hdGlvblxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtib29sZWFufVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgdHJ1ZVxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLm51ZGdlID0gdHJ1ZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBib29sZWFuIGRpY3RhdGluZyB3aGV0aGVyIG9yIG5vdCB0byBjbGFtcCB0aGUgaGVpZ2h0IG9mIHRoZSBjb250YWluZXIgd2hpbGUgTWl4SXRVcCdzXG4gICAgICAgICAqIGdlb21ldHJ5IHRlc3RzIGFyZSBjYXJyaWVkIG91dCBiZWZvcmUgYW4gb3BlcmF0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUbyBwcmV2ZW50IHNjcm9sbC1iYXIgZmxpY2tlciwgY2xhbXBpbmcgaXMgdHVybmVkIG9uIGJ5IGRlZmF1bHQuIEJ1dCBpbiB0aGUgY2FzZSB3aGVyZSB0aGVcbiAgICAgICAgICogaGVpZ2h0IG9mIHRoZSBjb250YWluZXIgbWlnaHQgYWZmZWN0IGl0cyB2ZXJ0aWNhbCBwb3NpdGlvbmluZyBpbiB0aGUgdmlld3BvcnRcbiAgICAgICAgICogKGUuZy4gYSB2ZXJ0aWNhbGx5LWNlbnRlcmVkIGNvbnRhaW5lciksIHRoaXMgc2hvdWxkIGJlIHR1cm5lZCBvZmYgdG8gZW5zdXJlIGFjY3VyYXRlXG4gICAgICAgICAqIHRlc3QgcmVzdWx0cyBhbmQgYSBzbW9vdGggYW5pbWF0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBEaXNhYmxlIGNvbnRhaW5lciBoZWlnaHQtY2xhbXBpbmc8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgKiAgICAgICAgIGNsYW1wSGVpZ2h0OiBmYWxzZVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGNsYW1wSGVpZ2h0XG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5hbmltYXRpb25cbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7Ym9vbGVhbn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIHRydWVcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5jbGFtcEhlaWdodCA9IHRydWU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciBvciBub3QgdG8gY2xhbXAgdGhlIHdpZHRoIG9mIHRoZSBjb250YWluZXIgd2hpbGUgTWl4SXRVcCdzXG4gICAgICAgICAqIGdlb21ldHJ5IHRlc3RzIGFyZSBjYXJyaWVkIG91dCBiZWZvcmUgYW4gb3BlcmF0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUbyBwcmV2ZW50IHNjcm9sbC1iYXIgZmxpY2tlciwgY2xhbXBpbmcgaXMgdHVybmVkIG9uIGJ5IGRlZmF1bHQuIEJ1dCBpbiB0aGUgY2FzZSB3aGVyZSB0aGVcbiAgICAgICAgICogd2lkdGggb2YgdGhlIGNvbnRhaW5lciBtaWdodCBhZmZlY3QgaXRzIGhvcml0em9udGFsIHBvc2l0aW9uaW5nIGluIHRoZSB2aWV3cG9ydFxuICAgICAgICAgKiAoZS5nLiBhIGhvcml6b250YWxsLWNlbnRlcmVkIGNvbnRhaW5lciksIHRoaXMgc2hvdWxkIGJlIHR1cm5lZCBvZmYgdG8gZW5zdXJlIGFjY3VyYXRlXG4gICAgICAgICAqIHRlc3QgcmVzdWx0cyBhbmQgYSBzbW9vdGggYW5pbWF0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBEaXNhYmxlIGNvbnRhaW5lciB3aWR0aC1jbGFtcGluZzwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAqICAgICAgICAgY2xhbXBXaWR0aDogZmFsc2VcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBjbGFtcFdpZHRoXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5hbmltYXRpb25cbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7Ym9vbGVhbn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIHRydWVcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5jbGFtcFdpZHRoID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5Db25maWdBbmltYXRpb24pO1xuXG4gICAgbWl4aXR1cC5Db25maWdBbmltYXRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLkJhc2UucHJvdG90eXBlKTtcblxuICAgIG1peGl0dXAuQ29uZmlnQW5pbWF0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG1peGl0dXAuQ29uZmlnQW5pbWF0aW9uO1xuXG4gICAgLyoqXG4gICAgICogQSBncm91cCBvZiBwcm9wZXJ0aWVzIHJlbGF0aW5nIHRvIHRoZSBiZWhhdmlvciBvZiB0aGUgTWl4ZXIuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWdcbiAgICAgKiBAbmFtZSAgICAgICAgYmVoYXZpb3JcbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBzaW5jZSAgICAgICAzLjEuMTJcbiAgICAgKi9cblxuICAgIG1peGl0dXAuQ29uZmlnQmVoYXZpb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciB0byBhbGxvdyBcImxpdmVcIiBzb3J0aW5nIG9mIHRoZSBtaXhlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQmVjYXVzZSBvZiB0aGUgZXhwZW5zaXZlIG5hdHVyZSBvZiBzb3J0aW5nLCBNaXhJdFVwIG1ha2VzIHVzZSBvZiBzZXZlcmFsXG4gICAgICAgICAqIGludGVybmFsIG9wdGltaXphdGlvbnMgdG8gc2tpcCByZWR1bmRhbnQgc29ydGluZyBvcGVyYXRpb25zLCBzdWNoIGFzIHdoZW5cbiAgICAgICAgICogdGhlIG5ld2x5IHJlcXVlc3RlZCBzb3J0IGNvbW1hbmQgaXMgdGhlIHNhbWUgYXMgdGhlIGFjdGl2ZSBvbmUuIFRoZSBjYXZlYXRcbiAgICAgICAgICogdG8gdGhpcyBvcHRpbWl6YXRpb24gaXMgdGhhdCBcImxpdmVcIiBlZGl0cyB0byB0aGUgdmFsdWUgb2YgYSB0YXJnZXQncyBzb3J0aW5nXG4gICAgICAgICAqIGF0dHJpYnV0ZSB3aWxsIGJlIGlnbm9yZWQgd2hlbiByZXF1ZXN0aW5nIGEgcmUtc29ydCBieSB0aGUgc2FtZSBhdHRyaWJ1dGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEJ5IHNldHRpbmcgdG8gYGJlaGF2aW9yLmxpdmVTb3J0YCB0byBgdHJ1ZWAsIHRoZSBtaXhlciB3aWxsIGFsd2F5cyByZS1zb3J0XG4gICAgICAgICAqIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciBvciBub3QgdGhlIHNvcnRpbmcgYXR0cmlidXRlIGFuZCBvcmRlciBoYXZlIGNoYW5nZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IEVuYWJsaW5nIGBsaXZlU29ydGAgdG8gYWxsb3cgZm9yIHJlLXNvcnRpbmc8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGJlaGF2aW9yOiB7XG4gICAgICAgICAqICAgICAgICAgbGl2ZVNvcnQ6IHRydWVcbiAgICAgICAgICogICAgIH0sXG4gICAgICAgICAqICAgICBsb2FkOiB7XG4gICAgICAgICAqICAgICAgICAgc29ydDogJ2VkaXRlZDpkZXNjJ1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIHRhcmdldCA9IGNvbnRhaW5lckVsLmNoaWxkcmVuWzNdO1xuICAgICAgICAgKlxuICAgICAgICAgKiBjb25zb2xlLmxvZyh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWVkaXRlZCcpKTsgLy8gJzIwMTUtMDQtMjQnXG4gICAgICAgICAqXG4gICAgICAgICAqIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWRpdGVkJywgJzIwMTctMDgtMTAnKTsgLy8gVXBkYXRlIHRoZSB0YXJnZXQncyBlZGl0ZWQgZGF0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5zb3J0KCdlZGl0ZWQ6ZGVzYycpXG4gICAgICAgICAqICAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgIC8vIFRoZSB0YXJnZXQgaXMgbm93IGF0IHRoZSB0b3Agb2YgdGhlIGxpc3RcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS50YXJnZXRzWzBdID09PSB0YXJnZXQpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGxpdmVTb3J0XG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5iZWhhdmlvclxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtib29sZWFufVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgZmFsc2VcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5saXZlU29ydCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLkNvbmZpZ0JlaGF2aW9yKTtcblxuICAgIG1peGl0dXAuQ29uZmlnQmVoYXZpb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLkJhc2UucHJvdG90eXBlKTtcblxuICAgIG1peGl0dXAuQ29uZmlnQmVoYXZpb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbWl4aXR1cC5Db25maWdCZWhhdmlvcjtcblxuICAgIC8qKlxuICAgICAqIEEgZ3JvdXAgb2Ygb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb25zIHRvIGJlIGludm9rZWQgYXQgdmFyaW91c1xuICAgICAqIHBvaW50cyB3aXRoaW4gdGhlIGxpZmVjeWNsZSBvZiBhIG1peGVyIG9wZXJhdGlvbi5cbiAgICAgKlxuICAgICAqIEVhY2ggZnVuY3Rpb24gaXMgYW5hbG9nb3VzIHRvIGFuIGV2ZW50IG9mIHRoZSBzYW1lIG5hbWUgdHJpZ2dlcmVkIGZyb20gdGhlXG4gICAgICogY29udGFpbmVyIGVsZW1lbnQsIGFuZCBpcyBpbnZva2VkIGltbWVkaWF0ZWx5IGFmdGVyIGl0LlxuICAgICAqXG4gICAgICogQWxsIGNhbGxiYWNrIGZ1bmN0aW9ucyByZWNlaXZlIHRoZSBjdXJyZW50IGBzdGF0ZWAgb2JqZWN0IGFzIHRoZWlyIGZpcnN0XG4gICAgICogYXJndW1lbnQsIGFzIHdlbGwgYXMgb3RoZXIgbW9yZSBzcGVjaWZpYyBhcmd1bWVudHMgZGVzY3JpYmVkIGJlbG93LlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnXG4gICAgICogQG5hbWUgICAgICAgIGNhbGxiYWNrc1xuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKiBAcHVibGljXG4gICAgICogQHNpbmNlICAgICAgIDIuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLkNvbmZpZ0NhbGxiYWNrcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtaXhpdHVwLkJhc2UuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVDb25zdHJ1Y3QnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiBpbnZva2VkIGltbWVkaWF0ZWx5IGFmdGVyIGFueSBNaXhJdFVwIG9wZXJhdGlvbiBpcyByZXF1ZXN0ZWRcbiAgICAgICAgICogYW5kIGJlZm9yZSBhbmltYXRpb25zIGhhdmUgYmVndW4uXG4gICAgICAgICAqXG4gICAgICAgICAqIEEgc2Vjb25kIGBmdXR1cmVTdGF0ZWAgYXJndW1lbnQgaXMgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbiB3aGljaCByZXByZXNlbnRzIHRoZSBmaW5hbFxuICAgICAgICAgKiBzdGF0ZSBvZiB0aGUgbWl4ZXIgb25jZSB0aGUgcmVxdWVzdGVkIG9wZXJhdGlvbiBoYXMgY29tcGxldGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBBZGRpbmcgYW4gYG9uTWl4U3RhcnRgIGNhbGxiYWNrIGZ1bmN0aW9uPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICogICAgICAgICBvbk1peFN0YXJ0OiBmdW5jdGlvbihzdGF0ZSwgZnV0dXJlU3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdGFydGluZyBvcGVyYXRpb24uLi4nKTtcbiAgICAgICAgICogICAgICAgICB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgb25NaXhTdGFydFxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuY2FsbGJhY2tzXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge2Z1bmN0aW9ufVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgbnVsbFxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLm9uTWl4U3RhcnQgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIGludm9rZWQgd2hlbiBhIE1peEl0VXAgb3BlcmF0aW9uIGlzIHJlcXVlc3RlZCB3aGlsZSBhbm90aGVyXG4gICAgICAgICAqIG9wZXJhdGlvbiBpcyBpbiBwcm9ncmVzcywgYW5kIHRoZSBhbmltYXRpb24gcXVldWUgaXMgZnVsbCwgb3IgcXVldWVpbmdcbiAgICAgICAgICogaXMgZGlzYWJsZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IEFkZGluZyBhbiBgb25NaXhCdXN5YCBjYWxsYmFjayBmdW5jdGlvbjwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAqICAgICAgICAgb25NaXhCdXN5OiBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ01peGVyIGJ1c3knKTtcbiAgICAgICAgICogICAgICAgICB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgb25NaXhCdXN5XG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5jYWxsYmFja3NcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7ZnVuY3Rpb259XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICBudWxsXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMub25NaXhCdXN5ICA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gaW52b2tlZCBhZnRlciBhbnkgTWl4SXRVcCBvcGVyYXRpb24gaGFzIGNvbXBsZXRlZCwgYW5kIHRoZVxuICAgICAgICAgKiBzdGF0ZSBoYXMgYmVlbiB1cGRhdGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBBZGRpbmcgYW4gYG9uTWl4RW5kYCBjYWxsYmFjayBmdW5jdGlvbjwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAqICAgICAgICAgb25NaXhFbmQ6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgICAgICBjb25zb2xlLmxvZygnT3BlcmF0aW9uIGNvbXBsZXRlJyk7XG4gICAgICAgICAqICAgICAgICAgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIG9uTWl4RW5kXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5jYWxsYmFja3NcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7ZnVuY3Rpb259XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICBudWxsXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMub25NaXhFbmQgICA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gaW52b2tlZCB3aGVuZXZlciBhbiBvcGVyYXRpb24gXCJmYWlsc1wiLCBpLmUuIG5vIHRhcmdldHNcbiAgICAgICAgICogY291bGQgYmUgZm91bmQgbWF0Y2hpbmcgdGhlIHJlcXVlc3RlZCBmaWx0ZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IEFkZGluZyBhbiBgb25NaXhGYWlsYCBjYWxsYmFjayBmdW5jdGlvbjwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAqICAgICAgICAgb25NaXhGYWlsOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGl0ZW1zIGNvdWxkIGJlIGZvdW5kIG1hdGNoaW5nIHRoZSByZXF1ZXN0ZWQgZmlsdGVyJyk7XG4gICAgICAgICAqICAgICAgICAgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIG9uTWl4RmFpbFxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuY2FsbGJhY2tzXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge2Z1bmN0aW9ufVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgbnVsbFxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLm9uTWl4RmFpbCAgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIGludm9rZWQgd2hlbmV2ZXIgYSBNaXhJdFVwIGNvbnRyb2wgaXMgY2xpY2tlZCwgYW5kIGJlZm9yZSBpdHNcbiAgICAgICAgICogcmVzcGVjdGl2ZSBvcGVyYXRpb24gaXMgcmVxdWVzdGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgY2xpY2tlZCBlbGVtZW50IGlzIGFzc2lnbmVkIHRvIHRoZSBgdGhpc2Aga2V5d29yZCB3aXRoaW4gdGhlIGZ1bmN0aW9uLiBUaGUgb3JpZ2luYWxcbiAgICAgICAgICogY2xpY2sgZXZlbnQgaXMgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbiBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LCB3aGljaCBjYW4gYmUgdXNlZnVsIGlmXG4gICAgICAgICAqIHVzaW5nIGA8YT5gIHRhZ3MgYXMgY29udHJvbHMgd2hlcmUgdGhlIGRlZmF1bHQgYmVoYXZpb3IgbmVlZHMgdG8gYmUgcHJldmVudGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBSZXR1cm5pbmcgYGZhbHNlYCBmcm9tIHRoZSBjYWxsYmFjayB3aWxsIHByZXZlbnQgdGhlIGNvbnRyb2wgY2xpY2sgZnJvbSB0cmlnZ2VyaW5nXG4gICAgICAgICAqIGFuIG9wZXJhdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAxOiBBZGRpbmcgYW4gYG9uTWl4Q2xpY2tgIGNhbGxiYWNrIGZ1bmN0aW9uPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICogICAgICAgICBvbk1peENsaWNrOiBmdW5jdGlvbihzdGF0ZSwgb3JpZ2luYWxFdmVudCkge1xuICAgICAgICAgKiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZSBjb250cm9sIFwiJyArIHRoaXMuaW5uZXJUZXh0ICsgJ1wiIHdhcyBjbGlja2VkJyk7XG4gICAgICAgICAqICAgICAgICAgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAyOiBVc2luZyBgb25NaXhDbGlja2AgdG8gbWFuaXB1bGF0ZSB0aGUgb3JpZ2luYWwgY2xpY2sgZXZlbnQ8L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgKiAgICAgICAgIG9uTWl4Q2xpY2s6IGZ1bmN0aW9uKHN0YXRlLCBvcmlnaW5hbEV2ZW50KSB7XG4gICAgICAgICAqICAgICAgICAgICAgICAvLyBQcmV2ZW50IG9yaWdpbmFsIGNsaWNrIGV2ZW50IGZyb20gYnViYmxpbmcgdXA6XG4gICAgICAgICAqICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IGJlaGF2aW9yIG9mIGNsaWNrZWQgZWxlbWVudDpcbiAgICAgICAgICogICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICogICAgICAgICB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDM6IFVzaW5nIGBvbk1peENsaWNrYCB0byBjb25kaXRpb25hbGx5IGNhbmNlbCBvcGVyYXRpb25zPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICogICAgICAgICBvbk1peENsaWNrOiBmdW5jdGlvbihzdGF0ZSwgb3JpZ2luYWxFdmVudCkge1xuICAgICAgICAgKiAgICAgICAgICAgICAgLy8gUGVyZm9ybSBzb21lIGNvbmRpdGlvbmFsIGNoZWNrOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgICAgICAgaWYgKG15QXBwLmlzTG9hZGluZykge1xuICAgICAgICAgKiAgICAgICAgICAgICAgICAgIC8vIEJ5IHJldHVybmluZyBmYWxzZSwgd2UgY2FuIHByZXZlbnQgdGhlIGNvbnRyb2wgY2xpY2sgZnJvbSB0cmlnZ2VyaW5nIGFuIG9wZXJhdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAqICAgICAgICAgICAgICB9XG4gICAgICAgICAqICAgICAgICAgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIG9uTWl4Q2xpY2tcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmNhbGxiYWNrc1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtmdW5jdGlvbn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIG51bGxcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5vbk1peENsaWNrID0gbnVsbDtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5Db25maWdDYWxsYmFja3MpO1xuXG4gICAgbWl4aXR1cC5Db25maWdDYWxsYmFja3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLkJhc2UucHJvdG90eXBlKTtcblxuICAgIG1peGl0dXAuQ29uZmlnQ2FsbGJhY2tzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG1peGl0dXAuQ29uZmlnQ2FsbGJhY2tzO1xuXG4gICAgLyoqXG4gICAgICogQSBncm91cCBvZiBwcm9wZXJ0aWVzIHJlbGF0aW5nIHRvIGNsaWNrYWJsZSBjb250cm9sIGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnXG4gICAgICogQG5hbWUgICAgICAgIGNvbnRyb2xzXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAc2luY2UgICAgICAgMi4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuQ29uZmlnQ29udHJvbHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciBvciBub3QgY29udHJvbHMgc2hvdWxkIGJlIGVuYWJsZWQgZm9yIHRoZSBtaXhlciBpbnN0YW5jZS5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgYHRydWVgIChkZWZhdWx0IGJlaGF2aW9yKSwgTWl4SXRVcCB3aWxsIHNlYXJjaCB0aGUgRE9NIGZvciBhbnkgY2xpY2thYmxlIGVsZW1lbnRzIHdpdGhcbiAgICAgICAgICogYGRhdGEtZmlsdGVyYCwgYGRhdGEtc29ydGAgb3IgYGRhdGEtdG9nZ2xlYCBhdHRyaWJ1dGVzLCBhbmQgYmluZCB0aGVtIGZvciBjbGljayBldmVudHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIGBmYWxzZWAsIG5vIGNsaWNrIGhhbmRsZXJzIHdpbGwgYmUgYm91bmQsIGFuZCBhbGwgZnVuY3Rpb25hbGl0eSBtdXN0IHRoZXJlZm9yZSBiZSBwZXJmb3JtZWRcbiAgICAgICAgICogdmlhIHRoZSBtaXhlcidzIEFQSSBtZXRob2RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB5b3UgZG8gbm90IGludGVuZCB0byB1c2UgdGhlIGRlZmF1bHQgY29udHJvbHMsIHNldHRpbmcgdGhpcyBwcm9wZXJ0eSB0byBgZmFsc2VgIHdpbGxcbiAgICAgICAgICogbWFyZ2luYWxseSBpbXByb3ZlIHRoZSBzdGFydHVwIHRpbWUgb2YgeW91ciBtaXhlciBpbnN0YW5jZSwgYW5kIHdpbGwgYWxzbyBwcmV2ZW50IGFueSBvdGhlciBhY3RpdmVcbiAgICAgICAgICogbWl4ZXIgaW5zdGFuY2VzIGluIHRoZSBET00gd2hpY2ggYXJlIGJvdW5kIHRvIGNvbnRyb2xzIGZyb20gY29udHJvbGxpbmcgdGhlIGluc3RhbmNlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBEaXNhYmxpbmcgY29udHJvbHM8L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGNvbnRyb2xzOiB7XG4gICAgICAgICAqICAgICAgICAgZW5hYmxlOiBmYWxzZVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gV2l0aCB0aGUgZGVmYXVsdCBjb250cm9scyBkaXNhYmxlZCwgd2UgY2FuIG9ubHkgY29udHJvbFxuICAgICAgICAgKiAvLyB0aGUgbWl4ZXIgdmlhIGl0cyBBUEkgbWV0aG9kcywgZS5nLjpcbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIuZmlsdGVyKCcuY2F0LTEnKTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGVuYWJsZVxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuY29udHJvbHNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7Ym9vbGVhbn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIHRydWVcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5lbmFibGUgPSB0cnVlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGJvb2xlYW4gZGljdGF0aW5nIHdoZXRoZXIgb3Igbm90IHRvIHVzZSBldmVudCBkZWxlZ2F0aW9uIHdoZW4gYmluZGluZyBjbGljayBldmVudHNcbiAgICAgICAgICogdG8gdGhlIGRlZmF1bHQgY29udHJvbHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIGBmYWxzZWAgKGRlZmF1bHQgYmVoYXZpb3IpLCBlYWNoIGNvbnRyb2wgYnV0dG9uIGluIHRoZSBET00gd2lsbCBiZSBmb3VuZCBhbmRcbiAgICAgICAgICogaW5kaXZpZHVhbGx5IGJvdW5kIHdoZW4gYSBtaXhlciBpcyBpbnN0YW50aWF0ZWQsIHdpdGggdGhlaXIgY29ycmVzcG9uZGluZyBhY3Rpb25zXG4gICAgICAgICAqIGNhY2hlZCBmb3IgcGVyZm9ybWFuY2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIGB0cnVlYCwgYSBzaW5nbGUgY2xpY2sgaGFuZGxlciB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGB3aW5kb3dgIChvciBjb250YWluZXIgZWxlbWVudCAtIHNlZVxuICAgICAgICAgKiBgY29uZmlnLmNvbnRyb2xzLnNjb3BlYCksIGFuZCBhbnkgY2xpY2sgZXZlbnRzIHRyaWdnZXJlZCBieSBlbGVtZW50cyB3aXRoIGBkYXRhLWZpbHRlcmAsXG4gICAgICAgICAqIGBkYXRhLXNvcnRgIG9yIGBkYXRhLXRvZ2dsZWAgYXR0cmlidXRlcyBwcmVzZW50IHdpbGwgYmUgaGFuZGxlZCBhcyB0aGV5IHByb3BhZ2F0ZSB1cHdhcmRzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB5b3UgcmVxdWlyZSBhIHVzZXIgaW50ZXJmYWNlIHdoZXJlIGNvbnRyb2wgYnV0dG9ucyBtYXkgYmUgYWRkZWQsIHJlbW92ZWQsIG9yIGNoYW5nZWQgZHVyaW5nIHRoZVxuICAgICAgICAgKiBsaWZldGltZSBvZiBhIG1peGVyLCBgY29udHJvbHMubGl2ZWAgc2hvdWxkIGJlIHNldCB0byBgdHJ1ZWAuIFRoZXJlIGlzIGEgbWFyZ2luYWwgYnV0IHVuYXZvaWRhYmxlXG4gICAgICAgICAqIHBlcmZvcm1hbmNlIGRlZmljaXQgd2hlbiB1c2luZyBsaXZlIGNvbnRyb2xzLCBhcyB0aGUgdmFsdWUgb2YgZWFjaCBjb250cm9sIGJ1dHRvbiBtdXN0IGJlIHJlYWRcbiAgICAgICAgICogZnJvbSB0aGUgRE9NIGluIHJlYWwgdGltZSBvbmNlIHRoZSBjbGljayBldmVudCBoYXMgcHJvcGFnYXRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogU2V0dGluZyBsaXZlIGNvbnRyb2xzPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBjb250cm9sczoge1xuICAgICAgICAgKiAgICAgICAgIGxpdmU6IHRydWVcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIENvbnRyb2wgYnV0dG9ucyBjYW4gbm93IGJlIGFkZGVkLCByZW1vdmUgYW5kIGNoYW5nZWQgd2l0aG91dCBicmVha2luZ1xuICAgICAgICAgKiAvLyB0aGUgbWl4ZXIncyBVSVxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgbGl2ZVxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuY29udHJvbHNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7Ym9vbGVhbn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIHRydWVcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5saXZlID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgc3RyaW5nIGRpY3RhdGluZyB0aGUgXCJzY29wZVwiIHRvIHVzZSB3aGVuIGJpbmRpbmcgb3IgcXVlcnlpbmcgdGhlIGRlZmF1bHQgY29udHJvbHMuIFRoZSBhdmFpbGFibGVcbiAgICAgICAgICogdmFsdWVzIGFyZSBgJ2dsb2JhbCdgIG9yIGAnbG9jYWwnYC5cbiAgICAgICAgICpcbiAgICAgICAgICogV2hlbiBzZXQgdG8gYCdnbG9iYWwnYCAoZGVmYXVsdCBiZWhhdmlvciksIE1peEl0VXAgd2lsbCBxdWVyeSB0aGUgZW50aXJlIGRvY3VtZW50IGZvciBjb250cm9sIGJ1dHRvbnNcbiAgICAgICAgICogdG8gYmluZCwgb3IgZGVsZWdhdGUgY2xpY2sgZXZlbnRzIGZyb20gKHNlZSBgY29uZmlnLmNvbnRyb2xzLmxpdmVgKS5cbiAgICAgICAgICpcbiAgICAgICAgICogV2hlbiBzZXQgdG8gYCdsb2NhbCdgLCBNaXhJdFVwIHdpbGwgb25seSBxdWVyeSAob3IgYmluZCBjbGljayBldmVudHMgdG8pIGl0cyBvd24gY29udGFpbmVyIGVsZW1lbnQuXG4gICAgICAgICAqIFRoaXMgbWF5IGJlIGRlc2lyZWFibGUgaWYgeW91IHJlcXVpcmUgbXVsdGlwbGUgYWN0aXZlIG1peGVyIGluc3RhbmNlcyB3aXRoaW4gdGhlIHNhbWUgZG9jdW1lbnQsIHdpdGhcbiAgICAgICAgICogY29udHJvbHMgdGhhdCB3b3VsZCBvdGhlcndpc2UgaW50ZWZlcmUgd2l0aCBlYWNoIG90aGVyIGlmIHNjb3BlZCBnbG9iYWxseS5cbiAgICAgICAgICpcbiAgICAgICAgICogQ29udmVyc2VseSwgaWYgeW91IHdpc2ggdG8gY29udHJvbCBtdWx0aXBsZSBpbnN0YW5jZXMgd2l0aCBhIHNpbmdsZSBVSSwgeW91IHdvdWxkIGNyZWF0ZSBvbmVcbiAgICAgICAgICogc2V0IG9mIGNvbnRyb2xzIGFuZCBrZWVwIHRoZSBjb250cm9scyBzY29wZSBvZiBlYWNoIG1peGVyIHNldCB0byBgZ2xvYmFsYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogU2V0dGluZyAnbG9jYWwnIHNjb3BlZCBjb250cm9sczwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyT25lID0gbWl4aXR1cChjb250YWluZXJPbmUsIHtcbiAgICAgICAgICogICAgIGNvbnRyb2xzOiB7XG4gICAgICAgICAqICAgICAgICAgc2NvcGU6ICdsb2NhbCdcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlclR3byA9IG1peGl0dXAoY29udGFpbmVyVHdvLCB7XG4gICAgICAgICAqICAgICBjb250cm9sczoge1xuICAgICAgICAgKiAgICAgICAgIHNjb3BlOiAnbG9jYWwnXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBCb3RoIG1peGVycyBjYW4gbm93IGV4aXN0IHdpdGhpbiB0aGUgc2FtZSBkb2N1bWVudCB3aXRoXG4gICAgICAgICAqIC8vIGlzb2xhdGVkIGNvbnRyb2xzIHBsYWNlZCB3aXRoaW4gdGhlaXIgY29udGFpbmVyIGVsZW1lbnRzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgc2NvcGVcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmNvbnRyb2xzXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge3N0cmluZ31cbiAgICAgICAgICogQGRlZmF1bHQgICAgICdnbG9iYWwnXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuc2NvcGUgPSAnZ2xvYmFsJzsgLy8gZW51bTogWydsb2NhbCcgLCdnbG9iYWwnXVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHN0cmluZyBkaWN0YXRpbmcgdGhlIHR5cGUgb2YgbG9naWMgdG8gYXBwbHkgd2hlbiBjb25jYXRlbmF0aW5nIHRoZSBmaWx0ZXIgc2VsZWN0b3JzIG9mXG4gICAgICAgICAqIGFjdGl2ZSB0b2dnbGUgYnV0dG9ucyAoaS5lLiBhbnkgY2xpY2thYmxlIGVsZW1lbnQgd2l0aCBhIGBkYXRhLXRvZ2dsZWAgYXR0cmlidXRlKS5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgc2V0IHRvIGAnb3InYCAoZGVmYXVsdCBiZWhhdmlvciksIHNlbGVjdG9ycyB3aWxsIGJlIGNvbmNhdGVuYXRlZCB0b2dldGhlciBhc1xuICAgICAgICAgKiBhIGNvbW1hLXNlcGVyYXRlZCBsaXN0LiBGb3IgZXhhbXBsZTpcbiAgICAgICAgICpcbiAgICAgICAgICogYCcuY2F0LTEsIC5jYXQtMidgIChzaG93cyBhbnkgZWxlbWVudHMgbWF0Y2hpbmcgYCcuY2F0LTEnYCBPUiBgJy5jYXQtMidgKVxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiBzZXQgdG8gYCdhbmQnYCwgc2VsZWN0b3JzIHdpbGwgYmUgZGlyZWN0bHkgY29uY2F0ZW5hdGVkIHRvZ2V0aGVyLiBGb3IgZXhhbXBsZTpcbiAgICAgICAgICpcbiAgICAgICAgICogYCcuY2F0LTEuY2F0LTInYCAoc2hvd3MgYW55IGVsZW1lbnRzIHdoaWNoIG1hdGNoIGJvdGggYCcuY2F0LTEnYCBBTkQgYCcuY2F0LTInYClcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogU2V0dGluZyBcImFuZFwiIHRvZ2dsZSBsb2dpYzwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgY29udHJvbHM6IHtcbiAgICAgICAgICogICAgICAgICB0b2dnbGVMb2dpYzogJ2FuZCdcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICB0b2dnbGVMb2dpY1xuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuY29udHJvbHNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7c3RyaW5nfVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgJ29yJ1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLnRvZ2dsZUxvZ2ljID0gJ29yJzsgLy8gZW51bTogWydvcicsICdhbmQnXVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHN0cmluZyBkaWN0YXRpbmcgdGhlIGZpbHRlciBiZWhhdmlvciB3aGVuIGFsbCB0b2dnbGVzIGFyZSBpbmFjdGl2ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogV2hlbiBzZXQgdG8gYCdhbGwnYCAoZGVmYXVsdCBiZWhhdmlvciksICphbGwqIHRhcmdldHMgd2lsbCBiZSBzaG93biBieSBkZWZhdWx0XG4gICAgICAgICAqIHdoZW4gbm8gdG9nZ2xlcyBhcmUgYWN0aXZlLCBvciBhdCB0aGUgbW9tZW50IGFsbCBhY3RpdmUgdG9nZ2xlcyBhcmUgdG9nZ2xlZCBvZmYuXG4gICAgICAgICAqXG4gICAgICAgICAqIFdoZW4gc2V0IHRvIGAnbm9uZSdgLCBubyB0YXJnZXRzIHdpbGwgYmUgc2hvd24gYnkgZGVmYXVsdCB3aGVuIG5vIHRvZ2dsZXMgYXJlXG4gICAgICAgICAqIGFjdGl2ZSwgb3IgYXQgdGhlIG1vbWVudCBhbGwgYWN0aXZlIHRvZ2dsZXMgYXJlIHRvZ2dsZWQgb2ZmLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDE6IFNldHRpbmcgdGhlIGRlZmF1bHQgdG9nZ2xlIGJlaGF2aW9yIHRvIGAnYWxsJ2A8L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGNvbnRyb2xzOiB7XG4gICAgICAgICAqICAgICAgICAgdG9nZ2xlRGVmYXVsdDogJ2FsbCdcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLnRvZ2dsZU9uKCcuY2F0LTInKVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAqICAgICAgICAgLy8gRGVhY3RpdmF0ZSBhbGwgYWN0aXZlIHRvZ2dsZXNcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICByZXR1cm4gbWl4ZXIudG9nZ2xlT2ZmKCcuY2F0LTInKVxuICAgICAgICAgKiAgICAgfSlcbiAgICAgICAgICogICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmFjdGl2ZUZpbHRlci5zZWxlY3Rvcik7IC8vICdhbGwnXG4gICAgICAgICAqICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnRvdGFsU2hvdyk7IC8vIDEyXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAyOiBTZXR0aW5nIHRoZSBkZWZhdWx0IHRvZ2dsZSBiZWhhdmlvciB0byBgJ25vbmUnYDwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgY29udHJvbHM6IHtcbiAgICAgICAgICogICAgICAgICB0b2dnbGVEZWZhdWx0OiAnbm9uZSdcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLnRvZ2dsZU9uKCcuY2F0LTInKVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAqICAgICAgICAgLy8gRGVhY3RpdmF0ZSBhbGwgYWN0aXZlIHRvZ2dsZXNcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICByZXR1cm4gbWl4ZXIudG9nZ2xlT2ZmKCcuY2F0LTInKVxuICAgICAgICAgKiAgICAgfSlcbiAgICAgICAgICogICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmFjdGl2ZUZpbHRlci5zZWxlY3Rvcik7IC8vICdub25lJ1xuICAgICAgICAgKiAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS50b3RhbFNob3cpOyAvLyAwXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIHRvZ2dsZURlZmF1bHRcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmNvbnRyb2xzXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge3N0cmluZ31cbiAgICAgICAgICogQGRlZmF1bHQgICAgICdhbGwnXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMudG9nZ2xlRGVmYXVsdCA9ICdhbGwnOyAvLyBlbnVtOiBbJ2FsbCcsICdub25lJ11cblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5Db25maWdDb250cm9scyk7XG5cbiAgICBtaXhpdHVwLkNvbmZpZ0NvbnRyb2xzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLkNvbmZpZ0NvbnRyb2xzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG1peGl0dXAuQ29uZmlnQ29udHJvbHM7XG5cbiAgICAvKipcbiAgICAgKiBBIGdyb3VwIG9mIHByb3BlcnRpZXMgZGVmaW5pbmcgdGhlIG91dHB1dCBhbmQgc3RydWN0dXJlIG9mIGNsYXNzIG5hbWVzIHByb2dyYW1tYXRpY2FsbHlcbiAgICAgKiBhZGRlZCB0byBjb250cm9scyBhbmQgY29udGFpbmVycyB0byByZWZsZWN0IHRoZSBzdGF0ZSBvZiB0aGUgbWl4ZXIuXG4gICAgICpcbiAgICAgKiBNb3N0IGNvbW1vbmx5LCBjbGFzcyBuYW1lcyBhcmUgYWRkZWQgdG8gY29udHJvbHMgYnkgTWl4SXRVcCB0byBpbmRpY2F0ZSB0aGF0XG4gICAgICogdGhlIGNvbnRyb2wgaXMgYWN0aXZlIHNvIHRoYXQgaXQgY2FuIGJlIHN0eWxlZCBhY2NvcmRpbmdseSAtIGAnbWl4aXR1cC1jb250cm9sLWFjdGl2ZSdgIGJ5IGRlZmF1bHQuXG4gICAgICpcbiAgICAgKiBVc2luZyBhIFwiQkVNXCIgbGlrZSBzdHJ1Y3R1cmUsIGVhY2ggY2xhc3NuYW1lIGlzIGJyb2tlbiBpbnRvIHRoZSB0aHJlZSBwYXJ0czpcbiAgICAgKiBhIGJsb2NrIG5hbWVzcGFjZSAoYCdtaXhpdHVwJ2ApLCBhbiBlbGVtZW50IG5hbWUgKGUuZy4gYCdjb250cm9sJ2ApLCBhbmQgYW4gb3B0aW9uYWwgbW9kaWZpZXJcbiAgICAgKiBuYW1lIChlLmcuIGAnYWN0aXZlJ2ApIHJlZmxlY3RpbmcgdGhlIHN0YXRlIG9mIHRoZSBlbGVtZW50LlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgZWFjaCBwYXJ0IG9mIHRoZSBjbGFzc25hbWUgaXMgY29uY2F0ZW5hdGVkIHRvZ2V0aGVyIHVzaW5nIHNpbmdsZSBoeXBoZW5zIGFzXG4gICAgICogZGVsaW5lYXRvcnMsIGJ1dCB0aGlzIGNhbiBiZSBlYXNpbHkgY3VzdG9taXNlZCB0byBtYXRjaCB0aGUgbmFtaW5nIGNvbnZlbnRpb24gYW5kIHN0eWxlIG9mXG4gICAgICogeW91ciBwcm9qZWN0LlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnXG4gICAgICogQG5hbWUgICAgICAgIGNsYXNzTmFtZXNcbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5Db25maWdDbGFzc05hbWVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgXCJibG9ja1wiIHBvcnRpb24sIG9yIHRvcC1sZXZlbCBuYW1lc3BhY2UgYWRkZWQgdG8gdGhlIHN0YXJ0IG9mIGFueSBjbGFzcyBuYW1lcyBjcmVhdGVkIGJ5IE1peEl0VXAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMTogY2hhbmdpbmcgdGhlIGBjb25maWcuY2xhc3NOYW1lcy5ibG9ja2AgdmFsdWU8L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGNsYXNzTmFtZXM6IHtcbiAgICAgICAgICogICAgICAgICBibG9jazogJ3BvcnRmb2xpbydcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIEFjdGl2ZSBjb250cm9sIG91dHB1dDogXCJwb3J0Zm9saW8tY29udHJvbC1hY3RpdmVcIlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDI6IFJlbW92aW5nIGBjb25maWcuY2xhc3NOYW1lcy5ibG9ja2A8L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGNsYXNzTmFtZXM6IHtcbiAgICAgICAgICogICAgICAgICBibG9jazogJydcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIEFjdGl2ZSBjb250cm9sIG91dHB1dDogXCJjb250cm9sLWFjdGl2ZVwiXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBibG9ja1xuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuY2xhc3NOYW1lc1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnbWl4aXR1cCdcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5ibG9jayA9ICdtaXhpdHVwJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIFwiZWxlbWVudFwiIHBvcnRpb24gb2YgdGhlIGNsYXNzIG5hbWUgYWRkZWQgdG8gY29udGFpbmVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgZWxlbWVudENvbnRhaW5lclxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuY2xhc3NOYW1lc1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnY29udGFpbmVyJ1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmVsZW1lbnRDb250YWluZXIgPSAnY29udGFpbmVyJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIFwiZWxlbWVudFwiIHBvcnRpb24gb2YgdGhlIGNsYXNzIG5hbWUgYWRkZWQgdG8gZmlsdGVyIGNvbnRyb2xzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBCeSBkZWZhdWx0LCBhbGwgZmlsdGVyLCBzb3J0LCBtdWx0aW1peCBhbmQgdG9nZ2xlIGNvbnRyb2xzIHRha2UgdGhlIHNhbWUgZWxlbWVudCB2YWx1ZSBvZiBgJ2NvbnRyb2wnYCwgYnV0XG4gICAgICAgICAqIGVhY2ggdHlwZSdzIGVsZW1lbnQgdmFsdWUgY2FuIGJlIGluZGl2aWR1YWxseSBvdmVyd3JpdHRlbiB0byBtYXRjaCB0aGUgdW5pcXVlIGNsYXNzTmFtZXMgb2YgeW91ciBjb250cm9scyBhcyBuZWVkZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMTogY2hhbmdpbmcgdGhlIGBjb25maWcuY2xhc3NOYW1lcy5lbGVtZW50RmlsdGVyYCB2YWx1ZTwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgY2xhc3NOYW1lczoge1xuICAgICAgICAgKiAgICAgICAgIGVsZW1lbnRGaWx0ZXI6ICdmaWx0ZXInXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBBY3RpdmUgZmlsdGVyIG91dHB1dDogXCJtaXhpdHVwLWZpbHRlci1hY3RpdmVcIlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDI6IGNoYW5naW5nIHRoZSBgY29uZmlnLmNsYXNzTmFtZXMuYmxvY2tgIGFuZCBgY29uZmlnLmNsYXNzTmFtZXMuZWxlbWVudEZpbHRlcmAgdmFsdWVzPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBjbGFzc05hbWVzOiB7XG4gICAgICAgICAqICAgICAgICAgYmxvY2s6ICdwb3J0Zm9saW8nLFxuICAgICAgICAgKiAgICAgICAgIGVsZW1lbnRGaWx0ZXI6ICdmaWx0ZXInXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBBY3RpdmUgZmlsdGVyIG91dHB1dDogXCJwb3J0Zm9saW8tZmlsdGVyLWFjdGl2ZVwiXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBlbGVtZW50RmlsdGVyXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5jbGFzc05hbWVzXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge3N0cmluZ31cbiAgICAgICAgICogQGRlZmF1bHQgICAgICdjb250cm9sJ1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmVsZW1lbnRGaWx0ZXIgPSAnY29udHJvbCc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBcImVsZW1lbnRcIiBwb3J0aW9uIG9mIHRoZSBjbGFzcyBuYW1lIGFkZGVkIHRvIHNvcnQgY29udHJvbHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEJ5IGRlZmF1bHQsIGFsbCBmaWx0ZXIsIHNvcnQsIG11bHRpbWl4IGFuZCB0b2dnbGUgY29udHJvbHMgdGFrZSB0aGUgc2FtZSBlbGVtZW50IHZhbHVlIG9mIGAnY29udHJvbCdgLCBidXRcbiAgICAgICAgICogZWFjaCB0eXBlJ3MgZWxlbWVudCB2YWx1ZSBjYW4gYmUgaW5kaXZpZHVhbGx5IG92ZXJ3cml0dGVuIHRvIG1hdGNoIHRoZSB1bmlxdWUgY2xhc3NOYW1lcyBvZiB5b3VyIGNvbnRyb2xzIGFzIG5lZWRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAxOiBjaGFuZ2luZyB0aGUgYGNvbmZpZy5jbGFzc05hbWVzLmVsZW1lbnRTb3J0YCB2YWx1ZTwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgY2xhc3NOYW1lczoge1xuICAgICAgICAgKiAgICAgICAgIGVsZW1lbnRTb3J0OiAnc29ydCdcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIEFjdGl2ZSBzb3J0IG91dHB1dDogXCJtaXhpdHVwLXNvcnQtYWN0aXZlXCJcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAyOiBjaGFuZ2luZyB0aGUgYGNvbmZpZy5jbGFzc05hbWVzLmJsb2NrYCBhbmQgYGNvbmZpZy5jbGFzc05hbWVzLmVsZW1lbnRTb3J0YCB2YWx1ZXM8L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGNsYXNzTmFtZXM6IHtcbiAgICAgICAgICogICAgICAgICBibG9jazogJ3BvcnRmb2xpbycsXG4gICAgICAgICAqICAgICAgICAgZWxlbWVudFNvcnQ6ICdzb3J0J1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gQWN0aXZlIHNvcnQgb3V0cHV0OiBcInBvcnRmb2xpby1zb3J0LWFjdGl2ZVwiXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBlbGVtZW50U29ydFxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuY2xhc3NOYW1lc1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnY29udHJvbCdcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5lbGVtZW50U29ydCA9ICdjb250cm9sJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIFwiZWxlbWVudFwiIHBvcnRpb24gb2YgdGhlIGNsYXNzIG5hbWUgYWRkZWQgdG8gbXVsdGltaXggY29udHJvbHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEJ5IGRlZmF1bHQsIGFsbCBmaWx0ZXIsIHNvcnQsIG11bHRpbWl4IGFuZCB0b2dnbGUgY29udHJvbHMgdGFrZSB0aGUgc2FtZSBlbGVtZW50IHZhbHVlIG9mIGAnY29udHJvbCdgLCBidXRcbiAgICAgICAgICogZWFjaCB0eXBlJ3MgZWxlbWVudCB2YWx1ZSBjYW4gYmUgaW5kaXZpZHVhbGx5IG92ZXJ3cml0dGVuIHRvIG1hdGNoIHRoZSB1bmlxdWUgY2xhc3NOYW1lcyBvZiB5b3VyIGNvbnRyb2xzIGFzIG5lZWRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAxOiBjaGFuZ2luZyB0aGUgYGNvbmZpZy5jbGFzc05hbWVzLmVsZW1lbnRNdWx0aW1peGAgdmFsdWU8L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGNsYXNzTmFtZXM6IHtcbiAgICAgICAgICogICAgICAgICBlbGVtZW50TXVsdGltaXg6ICdtdWx0aW1peCdcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIEFjdGl2ZSBtdWx0aW1peCBvdXRwdXQ6IFwibWl4aXR1cC1tdWx0aW1peC1hY3RpdmVcIlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDI6IGNoYW5naW5nIHRoZSBgY29uZmlnLmNsYXNzTmFtZXMuYmxvY2tgIGFuZCBgY29uZmlnLmNsYXNzTmFtZXMuZWxlbWVudE11bHRpbWl4YCB2YWx1ZXM8L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGNsYXNzTmFtZXM6IHtcbiAgICAgICAgICogICAgICAgICBibG9jazogJ3BvcnRmb2xpbycsXG4gICAgICAgICAqICAgICAgICAgZWxlbWVudFNvcnQ6ICdtdWx0aW1peCdcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIEFjdGl2ZSBtdWx0aW1peCBvdXRwdXQ6IFwicG9ydGZvbGlvLW11bHRpbWl4LWFjdGl2ZVwiXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBlbGVtZW50TXVsdGltaXhcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmNsYXNzTmFtZXNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7c3RyaW5nfVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgJ2NvbnRyb2wnXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuZWxlbWVudE11bHRpbWl4ID0gJ2NvbnRyb2wnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgXCJlbGVtZW50XCIgcG9ydGlvbiBvZiB0aGUgY2xhc3MgbmFtZSBhZGRlZCB0byB0b2dnbGUgY29udHJvbHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEJ5IGRlZmF1bHQsIGFsbCBmaWx0ZXIsIHNvcnQsIG11bHRpbWl4IGFuZCB0b2dnbGUgY29udHJvbHMgdGFrZSB0aGUgc2FtZSBlbGVtZW50IHZhbHVlIG9mIGAnY29udHJvbCdgLCBidXRcbiAgICAgICAgICogZWFjaCB0eXBlJ3MgZWxlbWVudCB2YWx1ZSBjYW4gYmUgaW5kaXZpZHVhbGx5IG92ZXJ3cml0dGVuIHRvIG1hdGNoIHRoZSB1bmlxdWUgY2xhc3NOYW1lcyBvZiB5b3VyIGNvbnRyb2xzIGFzIG5lZWRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAxOiBjaGFuZ2luZyB0aGUgYGNvbmZpZy5jbGFzc05hbWVzLmVsZW1lbnRUb2dnbGVgIHZhbHVlPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBjbGFzc05hbWVzOiB7XG4gICAgICAgICAqICAgICAgICAgZWxlbWVudFRvZ2dsZTogJ3RvZ2dsZSdcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIEFjdGl2ZSB0b2dnbGUgb3V0cHV0OiBcIm1peGl0dXAtdG9nZ2xlLWFjdGl2ZVwiXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMjogY2hhbmdpbmcgdGhlIGBjb25maWcuY2xhc3NOYW1lcy5ibG9ja2AgYW5kIGBjb25maWcuY2xhc3NOYW1lcy5lbGVtZW50VG9nZ2xlYCB2YWx1ZXM8L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGNsYXNzTmFtZXM6IHtcbiAgICAgICAgICogICAgICAgICBibG9jazogJ3BvcnRmb2xpbycsXG4gICAgICAgICAqICAgICAgICAgZWxlbWVudFRvZ2dsZTogJ3RvZ2dsZSdcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIEFjdGl2ZSB0b2dnbGUgb3V0cHV0OiBcInBvcnRmb2xpby10b2dnbGUtYWN0aXZlXCJcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGVsZW1lbnRUb2dnbGVcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmNsYXNzTmFtZXNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7c3RyaW5nfVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgJ2NvbnRyb2wnXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuZWxlbWVudFRvZ2dsZSA9ICdjb250cm9sJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIFwibW9kaWZpZXJcIiBwb3J0aW9uIG9mIHRoZSBjbGFzcyBuYW1lIGFkZGVkIHRvIGFjdGl2ZSBjb250cm9scy5cbiAgICAgICAgICogQG5hbWUgICAgICAgIG1vZGlmaWVyQWN0aXZlXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5jbGFzc05hbWVzXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge3N0cmluZ31cbiAgICAgICAgICogQGRlZmF1bHQgICAgICdhY3RpdmUnXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMubW9kaWZpZXJBY3RpdmUgPSAnYWN0aXZlJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIFwibW9kaWZpZXJcIiBwb3J0aW9uIG9mIHRoZSBjbGFzcyBuYW1lIGFkZGVkIHRvIGRpc2FibGVkIGNvbnRyb2xzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgbW9kaWZpZXJEaXNhYmxlZFxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuY2xhc3NOYW1lc1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnZGlzYWJsZWQnXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMubW9kaWZpZXJEaXNhYmxlZCA9ICdkaXNhYmxlZCc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBcIm1vZGlmaWVyXCIgcG9ydGlvbiBvZiB0aGUgY2xhc3MgbmFtZSBhZGRlZCB0byB0aGUgY29udGFpbmVyIHdoZW4gaW4gYSBcImZhaWxlZFwiIHN0YXRlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgbW9kaWZpZXJGYWlsZWRcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmNsYXNzTmFtZXNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7c3RyaW5nfVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgJ2ZhaWxlZCdcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5tb2RpZmllckZhaWxlZCA9ICdmYWlsZWQnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGVsaW5lYXRvciB1c2VkIGJldHdlZW4gdGhlIFwiYmxvY2tcIiBhbmQgXCJlbGVtZW50XCIgcG9ydGlvbnMgb2YgYW55IGNsYXNzIG5hbWUgYWRkZWQgYnkgTWl4SXRVcC5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgdGhlIGJsb2NrIHBvcnRpb24gaXMgb21taXRlZCBieSBzZXR0aW5nIGl0IHRvIGFuIGVtcHR5IHN0cmluZywgbm8gZGVsaW5lYXRvciB3aWxsIGJlIGFkZGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBjaGFuZ2luZyB0aGUgZGVsaW5lYXRvciB0byBtYXRjaCBCRU0gY29udmVudGlvbjwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgY2xhc3NOYW1lczoge1xuICAgICAgICAgKiAgICAgICAgIGRlbGluZWF0b3JFbGVtZW50OiAnX18nXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBleGFtcGxlIGFjdGl2ZSBjb250cm9sIG91dHB1dDogXCJtaXhpdHVwX19jb250cm9sLWFjdGl2ZVwiXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBkZWxpbmVhdG9yRWxlbWVudFxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuY2xhc3NOYW1lc1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnLSdcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5kZWxpbmVhdG9yRWxlbWVudCA9ICctJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRlbGluZWF0b3IgdXNlZCBiZXR3ZWVuIHRoZSBcImVsZW1lbnRcIiBhbmQgXCJtb2RpZmllclwiIHBvcnRpb25zIG9mIGFueSBjbGFzcyBuYW1lIGFkZGVkIGJ5IE1peEl0VXAuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHRoZSBlbGVtZW50IHBvcnRpb24gaXMgb21taXRlZCBieSBzZXR0aW5nIGl0IHRvIGFuIGVtcHR5IHN0cmluZywgbm8gZGVsaW5lYXRvciB3aWxsIGJlIGFkZGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBjaGFuZ2luZyBib3RoIGRlbGluZWF0b3JzIHRvIG1hdGNoIEJFTSBjb252ZW50aW9uPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBjbGFzc05hbWVzOiB7XG4gICAgICAgICAqICAgICAgICAgZGVsaW5lYXRvckVsZW1lbnQ6ICdfXydcbiAgICAgICAgICogICAgICAgICBkZWxpbmVhdG9yTW9kaWZpZXI6ICctLSdcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIEFjdGl2ZSBjb250cm9sIG91dHB1dDogXCJtaXhpdHVwX19jb250cm9sLS1hY3RpdmVcIlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgZGVsaW5lYXRvck1vZGlmaWVyXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5jbGFzc05hbWVzXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge3N0cmluZ31cbiAgICAgICAgICogQGRlZmF1bHQgICAgICctJ1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmRlbGluZWF0b3JNb2RpZmllciA9ICctJztcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5Db25maWdDbGFzc05hbWVzKTtcblxuICAgIG1peGl0dXAuQ29uZmlnQ2xhc3NOYW1lcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5Db25maWdDbGFzc05hbWVzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG1peGl0dXAuQ29uZmlnQ2xhc3NOYW1lcztcblxuICAgIC8qKlxuICAgICAqIEEgZ3JvdXAgb2YgcHJvcGVydGllcyByZWxhdGluZyB0byBNaXhJdFVwJ3MgZGF0YXNldCBBUEkuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWdcbiAgICAgKiBAbmFtZSAgICAgICAgZGF0YVxuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKiBAcHVibGljXG4gICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLkNvbmZpZ0RhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgc3RyaW5nIHNwZWNpZnlpbmcgdGhlIG5hbWUgb2YgdGhlIGtleSBjb250YWluaW5nIHlvdXIgZGF0YSBtb2RlbCdzIHVuaXF1ZVxuICAgICAgICAgKiBpZGVudGlmaWVyIChVSUQpLiBUbyB1c2UgdGhlIGRhdGFzZXQgQVBJLCBhIFVJRCBrZXkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kXG4gICAgICAgICAqIGJlIHByZXNlbnQgYW5kIHVuaXF1ZSBvbiBhbGwgb2JqZWN0cyBpbiB0aGUgZGF0YXNldCB5b3UgcHJvdmlkZSB0byBNaXhJdFVwLlxuICAgICAgICAgKlxuICAgICAgICAgKiBGb3IgZXhhbXBsZSwgaWYgeW91ciBkYXRhc2V0IGlzIG1hZGUgdXAgb2YgTW9uZ29EQiBkb2N1bWVudHMsIHRoZSBVSURcbiAgICAgICAgICoga2V5IHdvdWxkIGJlIGAnaWQnYCBvciBgJ19pZCdgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBTZXR0aW5nIHRoZSBVSUQgdG8gYCdpZCdgPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBkYXRhOiB7XG4gICAgICAgICAqICAgICAgICAgdWlkS2V5OiAnaWQnXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgdWlkS2V5XG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5kYXRhXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge3N0cmluZ31cbiAgICAgICAgICogQGRlZmF1bHQgICAgICcnXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMudWlkS2V5ID0gJyc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciBvciBub3QgTWl4SXRVcCBzaG91bGQgXCJkaXJ0eSBjaGVja1wiIGVhY2ggb2JqZWN0IGluXG4gICAgICAgICAqIHlvdXIgZGF0YXNldCBmb3IgY2hhbmdlcyB3aGVuZXZlciBgLmRhdGFzZXQoKWAgaXMgY2FsbGVkLCBhbmQgcmUtcmVuZGVyIGFueSB0YXJnZXRzXG4gICAgICAgICAqIGZvciB3aGljaCBhIGNoYW5nZSBpcyBmb3VuZC5cbiAgICAgICAgICpcbiAgICAgICAgICogRGVwZW5kaW5nIG9uIHRoZSBjb21wbGV4aXR5IG9mIHlvdXIgZGF0YSBtb2RlbCwgZGlydHkgY2hlY2tpbmcgY2FuIGJlIGV4cGVuc2l2ZVxuICAgICAgICAgKiBhbmQgaXMgdGhlcmVmb3JlIGRpc2FibGVkIGJ5IGRlZmF1bHQuXG4gICAgICAgICAqXG4gICAgICAgICAqIE5COiBGb3IgY2hhbmdlcyB0byBiZSBkZXRlY3RlZCwgYSBuZXcgaW1tdXRhYmxlIGluc3RhbmNlIG9mIHRoZSBlZGl0ZWQgbW9kZWwgbXVzdCBiZVxuICAgICAgICAgKiBwcm92aWRlZCB0byBtaXhpdHVwLCByYXRoZXIgdGhhbiBtYW5pcHVsYXRpbmcgcHJvcGVydGllcyBvbiB0aGUgZXhpc3RpbmcgaW5zdGFuY2UuXG4gICAgICAgICAqIElmIHlvdXIgY2hhbmdlcyBhcmUgYSByZXN1bHQgb2YgYSBEQiB3cml0ZSBhbmQgcmVhZCwgeW91IHdpbGwgbW9zdCBsaWtlbHkgYmUgY2FsbGluZ1xuICAgICAgICAgKiBgLmRhdGFzZXQoKWAgd2l0aCBhIGNsZWFuIHNldCBvZiBvYmplY3RzIGVhY2ggdGltZSwgc28gdGhpcyB3aWxsIG5vdCBiZSBhbiBpc3N1ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogRW5hYmxpbmcgZGlydHkgY2hlY2tpbmc8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBteURhdGFzZXQgPSBbXG4gICAgICAgICAqICAgICB7XG4gICAgICAgICAqICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAqICAgICAgICAgdGl0bGU6IFwiQmxvZyBQb3N0IFRpdGxlIDBcIlxuICAgICAgICAgKiAgICAgICAgIC4uLlxuICAgICAgICAgKiAgICAgfSxcbiAgICAgICAgICogICAgIHtcbiAgICAgICAgICogICAgICAgICBpZDogMSxcbiAgICAgICAgICogICAgICAgICB0aXRsZTogXCJCbG9nIFBvc3QgVGl0bGUgMVwiXG4gICAgICAgICAqICAgICAgICAgLi4uXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIF07XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIEluc3RhbnRpYXRlIGEgbWl4ZXIgd2l0aCBhIHByZS1sb2FkZWQgZGF0YXNldCwgYW5kIGEgdGFyZ2V0IHJlbmRlcmVyXG4gICAgICAgICAqIC8vIGZ1bmN0aW9uIGRlZmluZWRcbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgZGF0YToge1xuICAgICAgICAgKiAgICAgICAgIHVpZEtleTogJ2lkJyxcbiAgICAgICAgICogICAgICAgICBkaXJ0eUNoZWNrOiB0cnVlXG4gICAgICAgICAqICAgICB9LFxuICAgICAgICAgKiAgICAgbG9hZDoge1xuICAgICAgICAgKiAgICAgICAgIGRhdGFzZXQ6IG15RGF0YXNldFxuICAgICAgICAgKiAgICAgfSxcbiAgICAgICAgICogICAgIHJlbmRlcjoge1xuICAgICAgICAgKiAgICAgICAgIHRhcmdldDogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBGb3IgaWxsdXN0cmF0aW9uLCB3ZSB3aWxsIGNsb25lIGFuZCBlZGl0IHRoZSBzZWNvbmQgb2JqZWN0IGluIHRoZSBkYXRhc2V0LlxuICAgICAgICAgKiAvLyBOQjogdGhpcyB3b3VsZCB0eXBpY2FsbHkgYmUgZG9uZSBzZXJ2ZXItc2lkZSBpbiByZXNwb25zZSB0byBhIERCIHVwZGF0ZSxcbiAgICAgICAgICogYW5kIHRoZW4gcmUtcXVlcmllZCB2aWEgYW4gQVBJLlxuICAgICAgICAgKlxuICAgICAgICAgKiBteURhdGFzZXRbMV0gPSBPYmplY3QuYXNzaWduKHt9LCBteURhdGFzZXRbMV0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBteURhdGFzZXRbMV0udGl0bGUgPSAnQmxvZyBQb3N0IFRpdGxlIDExJztcbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIuZGF0YXNldChteURhdGFzZXQpXG4gICAgICAgICAqICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgKiAgICAgICAgLy8gdGhlIHRhcmdldCB3aXRoIElEIFwiMVwiLCB3aWxsIGJlIHJlLXJlbmRlcmVkIHJlZmxlY3RpbmcgaXRzIG5ldyB0aXRsZVxuICAgICAgICAgKiAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGRpcnR5Q2hlY2tcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmRhdGFcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7Ym9vbGVhbn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIGZhbHNlXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuZGlydHlDaGVjayA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLkNvbmZpZ0RhdGEpO1xuXG4gICAgbWl4aXR1cC5Db25maWdEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLkNvbmZpZ0RhdGEucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbWl4aXR1cC5Db25maWdEYXRhO1xuXG4gICAgLyoqXG4gICAgICogQSBncm91cCBvZiBwcm9wZXJ0aWVzIGFsbG93aW5nIHRoZSB0b2dnbGluZyBvZiB2YXJpb3VzIGRlYnVnIGZlYXR1cmVzLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnXG4gICAgICogQG5hbWUgICAgICAgIGRlYnVnXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuQ29uZmlnRGVidWcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciBvciBub3QgdGhlIG1peGVyIGluc3RhbmNlIHJldHVybmVkIGJ5IHRoZVxuICAgICAgICAgKiBgbWl4aXR1cCgpYCBmYWN0b3J5IGZ1bmN0aW9uIHNob3VsZCBleHBvc2UgcHJpdmF0ZSBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBCeSBkZWZhdWx0LCBtaXhlciBpbnN0YW5jZXMgb25seSBleHBvc2UgdGhlaXIgcHVibGljIEFQSSwgYnV0IGVuYWJsaW5nXG4gICAgICAgICAqIGRlYnVnIG1vZGUgd2lsbCBnaXZlIHlvdSBhY2Nlc3MgdG8gdmFyaW91cyBtaXhlciBpbnRlcm5hbHMgd2hpY2ggbWF5IGFpZFxuICAgICAgICAgKiBpbiBkZWJ1Z2dpbmcsIG9yIHRoZSBhdXRob3Jpbmcgb2YgZXh0ZW5zaW9ucy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogRW5hYmxpbmcgZGVidWcgbW9kZTwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgZGVidWc6IHtcbiAgICAgICAgICogICAgICAgICBlbmFibGU6IHRydWVcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIFByaXZhdGUgcHJvcGVydGllcyBhbmQgbWV0aG9kcyB3aWxsIG5vdyBiZSB2aXNpYmxlIG9uIHRoZSBtaXhlciBpbnN0YW5jZTpcbiAgICAgICAgICpcbiAgICAgICAgICogY29uc29sZS5sb2cobWl4ZXIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgZW5hYmxlXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5kZWJ1Z1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtib29sZWFufVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgZmFsc2VcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5lbmFibGUgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBib29sZWFuIGRpY3RhdGluZyB3aGV0aGVyIG9yIG5vdCB3YXJuaW5ncyBzaG91bGQgYmUgc2hvd24gd2hlbiB2YXJpb3VzXG4gICAgICAgICAqIGNvbW1vbiBnb3RjaGFzIG9jY3VyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBXYXJuaW5ncyBhcmUgaW50ZW5kZWQgdG8gcHJvdmlkZSBpbnNpZ2h0cyBkdXJpbmcgZGV2ZWxvcG1lbnQgd2hlbiBzb21ldGhpbmdcbiAgICAgICAgICogb2NjdXJzIHRoYXQgaXMgbm90IGEgZmF0YWwsIGJ1dCBtYXkgaW5kaWNhdGUgYW4gaXNzdWUgd2l0aCB5b3VyIGludGVncmF0aW9uLFxuICAgICAgICAgKiBhbmQgYXJlIHRoZXJlZm9yZSB0dXJuZWQgb24gYnkgZGVmYXVsdC4gSG93ZXZlciwgeW91IG1heSB3aXNoIHRvIGRpc2FibGVcbiAgICAgICAgICogdGhlbSBpbiBwcm9kdWN0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDE6IERpc2FibGluZyB3YXJuaW5nczwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgZGVidWc6IHtcbiAgICAgICAgICogICAgICAgICBzaG93V2FybmluZ3M6IGZhbHNlXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDI6IERpc2FibGluZyB3YXJuaW5ncyBiYXNlZCBvbiBlbnZpcm9ubWVudDwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIHNob3dXYXJuaW5ncyA9IG15QXBwQ29uZmlnLmVudmlyb25tZW50ID09PSAnZGV2ZWxvcG1lbnQnID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBkZWJ1Zzoge1xuICAgICAgICAgKiAgICAgICAgIHNob3dXYXJuaW5nczogc2hvd1dhcm5pbmdzXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgc2hvd1dhcm5pbmdzXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5kZWJ1Z1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtib29sZWFufVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgdHJ1ZVxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLnNob3dXYXJuaW5ncyA9IHRydWU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVzZWQgZm9yIHNlcnZlci1zaWRlIHRlc3Rpbmcgb25seS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQG5hbWUgICAgICAgIGZhdXhBc3luY1xuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuZGVidWdcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7Ym9vbGVhbn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIGZhbHNlXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuZmF1eEFzeW5jID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuQ29uZmlnRGVidWcpO1xuXG4gICAgbWl4aXR1cC5Db25maWdEZWJ1Zy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5Db25maWdEZWJ1Zy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLkNvbmZpZ0RlYnVnO1xuXG4gICAgLyoqXG4gICAgICogQSBncm91cCBvZiBwcm9wZXJ0aWVzIHJlbGF0aW5nIHRvIHRoZSBsYXlvdXQgb2YgdGhlIGNvbnRhaW5lci5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZ1xuICAgICAqIEBuYW1lICAgICAgICBsYXlvdXRcbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5Db25maWdMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciBvciBub3QgbWl4aXR1cCBzaG91bGQgcXVlcnkgYWxsIGRlc2NlbmRhbnRzXG4gICAgICAgICAqIG9mIHRoZSBjb250YWluZXIgZm9yIHRhcmdldHMsIG9yIG9ubHkgaW1tZWRpYXRlIGNoaWxkcmVuLlxuICAgICAgICAgKlxuICAgICAgICAgKiBCeSBkZWZhdWx0LCBtaXhpdHVwIHdpbGwgcXVlcnkgYWxsIGRlc2NlbmRhbnRzIG1hdGNoaW5nIHRoZVxuICAgICAgICAgKiBgc2VsZWN0b3JzLnRhcmdldGAgc2VsZWN0b3Igd2hlbiBpbmRleGluZyB0YXJnZXRzIHVwb24gaW5zdGFudGlhdGlvbi5cbiAgICAgICAgICogVGhpcyBhbGxvd3MgZm9yIHRhcmdldHMgdG8gYmUgbmVzdGVkIGluc2lkZSBhIHN1Yi1jb250YWluZXIgd2hpY2ggaXNcbiAgICAgICAgICogdXNlZnVsIHdoZW4gcmluZy1mZW5jaW5nIHRhcmdldHMgZnJvbSBsb2NhbGx5IHNjb3BlZCBjb250cm9scyBpbiB5b3VyXG4gICAgICAgICAqIG1hcmt1cCAoc2VlIGBjb250cm9scy5zY29wZWApLlxuICAgICAgICAgKlxuICAgICAgICAgKiBIb3dldmVyLCBpZiB5b3UgYXJlIGJ1aWxkaW5nIGEgbW9yZSBjb21wbGV4IFVJIHJlcXVpcmluZyB0aGUgbmVzdGluZ1xuICAgICAgICAgKiBvZiBtaXhlcnMgd2l0aGluIG1peGVycywgeW91IHdpbGwgbW9zdCBsaWtlbHkgd2FudCB0byBsaW1pdCB0YXJnZXRzIHRvXG4gICAgICAgICAqIGltbWVkaWF0ZSBjaGlsZHJlbiBvZiB0aGUgY29udGFpbmVyIGJ5IHNldHRpbmcgdGhpcyBwcm9wZXJ0eSB0byBgZmFsc2VgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBSZXN0cmljdGluZyB0YXJnZXRzIHRvIGltbWVkaWF0ZSBjaGlsZHJlbjwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgbGF5b3V0OiB7XG4gICAgICAgICAqICAgICAgICAgYWxsb3dOZXN0ZWRUYXJnZXRzOiBmYWxzZVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGFsbG93TmVzdGVkVGFyZ2V0c1xuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcubGF5b3V0XG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge2Jvb2xlYW59XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICB0cnVlXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuYWxsb3dOZXN0ZWRUYXJnZXRzID0gdHJ1ZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBzdHJpbmcgc3BlY2lmeWluZyBhbiBvcHRpb25hbCBjbGFzcyBuYW1lIHRvIGFwcGx5IHRvIHRoZSBjb250YWluZXIgd2hlbiBpblxuICAgICAgICAgKiBpdHMgZGVmYXVsdCBzdGF0ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQnkgY2hhbmdpbmcgdGhpcyBjbGFzcyBuYW1lIG9yIGFkZGluZyBhIGNsYXNzIG5hbWUgdG8gdGhlIGNvbnRhaW5lciB2aWEgdGhlXG4gICAgICAgICAqIGAuY2hhbmdlTGF5b3V0KClgIEFQSSBtZXRob2QsIHRoZSBDU1MgbGF5b3V0IG9mIHRoZSBjb250YWluZXIgY2FuIGJlIGNoYW5nZWQsXG4gICAgICAgICAqIGFuZCBNaXhJdFVwIHdpbGwgYXR0ZW1wIHRvIGdyYWNlZnVsbHkgYW5pbWF0ZSB0aGUgY29udGFpbmVyIGFuZCBpdHMgdGFyZ2V0c1xuICAgICAgICAgKiBiZXR3ZWVuIHN0YXRlcy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAxOiBTcGVjaWZ5aW5nIGEgY29udGFpbmVyIGNsYXNzIG5hbWU8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGxheW91dDoge1xuICAgICAgICAgKiAgICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZTogJ2dyaWQnXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDI6IENoYW5naW5nIHRoZSBkZWZhdWx0IGNsYXNzIG5hbWUgd2l0aCBgLmNoYW5nZUxheW91dCgpYDwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgbGF5b3V0OiB7XG4gICAgICAgICAqICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lOiAnZ3JpZCdcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLmNoYW5nZUxheW91dCgnbGlzdCcpXG4gICAgICAgICAqICAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5hY3RpdmVDb250YWluZXJDbGFzcyk7IC8vIFwibGlzdFwiXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZVxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcubGF5b3V0XG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge3N0cmluZ31cbiAgICAgICAgICogQGRlZmF1bHQgICAgICcnXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyQ2xhc3NOYW1lID0gJyc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcmVmZXJlbmNlIHRvIGEgbm9uLXRhcmdldCBzaWJsaW5nIGVsZW1lbnQgYWZ0ZXIgd2hpY2ggdG8gaW5zZXJ0IHRhcmdldHNcbiAgICAgICAgICogd2hlbiB0aGVyZSBhcmUgbm8gdGFyZ2V0cyBpbiB0aGUgY29udGFpbmVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBTZXR0aW5nIGEgYHNpYmxpbmdCZWZvcmVgIHJlZmVyZW5jZSBlbGVtZW50PC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgYWRkQnV0dG9uID0gY29udGFpbmVyRWwucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGxheW91dDoge1xuICAgICAgICAgKiAgICAgICAgIHNpYmxpbmdCZWZvcmU6IGFkZEJ1dHRvblxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIHNpYmxpbmdCZWZvcmVcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmxheW91dFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtIVE1MRWxlbWVudH1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIG51bGxcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5zaWJsaW5nQmVmb3JlID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSByZWZlcmVuY2UgdG8gYSBub24tdGFyZ2V0IHNpYmxpbmcgZWxlbWVudCBiZWZvcmUgd2hpY2ggdG8gaW5zZXJ0IHRhcmdldHNcbiAgICAgICAgICogd2hlbiB0aGVyZSBhcmUgbm8gdGFyZ2V0cyBpbiB0aGUgY29udGFpbmVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBTZXR0aW5nIGFuIGBzaWJsaW5nQWZ0ZXJgIHJlZmVyZW5jZSBlbGVtZW50PC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgZ2FwID0gY29udGFpbmVyRWwucXVlcnlTZWxlY3RvcignLmdhcCcpO1xuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICogICAgICAgICBzaWJsaW5nQWZ0ZXI6IGdhcFxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIHNpYmxpbmdBZnRlclxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcubGF5b3V0XG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge0hUTUxFbGVtZW50fVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgbnVsbFxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLnNpYmxpbmdBZnRlciA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuQ29uZmlnTGF5b3V0KTtcblxuICAgIG1peGl0dXAuQ29uZmlnTGF5b3V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLkNvbmZpZ0xheW91dC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLkNvbmZpZ0xheW91dDtcblxuICAgIC8qKlxuICAgICAqIEEgZ3JvdXAgb2YgcHJvcGVydGllcyBkZWZpbmluZyB0aGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgbWl4ZXIgb24gbG9hZCAoaW5zdGFudGlhdGlvbikuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWdcbiAgICAgKiBAbmFtZSAgICAgICAgbG9hZFxuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKiBAcHVibGljXG4gICAgICogQHNpbmNlICAgICAgIDIuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLkNvbmZpZ0xvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgc3RyaW5nIGRlZmluaW5nIGFueSBmaWx0ZXJpbmcgdG8gYmUgc3RhdGljYWxseSBhcHBsaWVkIHRvIHRoZSBtaXhlciBvbiBsb2FkLlxuICAgICAgICAgKiBBcyBwZXIgdGhlIGAuZmlsdGVyKClgIEFQSSwgdGhpcyBjYW4gYmUgYW55IHZhbGlkIHNlbGVjdG9yIHN0cmluZywgb3IgdGhlXG4gICAgICAgICAqIHZhbHVlcyBgJ2FsbCdgIG9yIGAnbm9uZSdgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDE6IERlZmluaW5nIGFuIGluaXRpYWwgZmlsdGVyIHNlbGVjdG9yIHRvIGJlIGFwcGxpZWQgb24gbG9hZDwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogLy8gVGhlIG1peGVyIHdpbGwgc2hvdyBvbmx5IHRob3NlIHRhcmdldHMgbWF0Y2hpbmcgJy5jYXRlZ29yeS1hJyBvbiBsb2FkLlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBsb2FkOiB7XG4gICAgICAgICAqICAgICAgICAgZmlsdGVyOiAnLmNhdGVnb3J5LWEnXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDI6IEhpZGluZyBhbGwgdGFyZ2V0cyBvbiBsb2FkPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBUaGUgbWl4ZXIgd2lsbCBzaG93IGhpZGUgYWxsIHRhcmdldHMgb24gbG9hZC5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgbG9hZDoge1xuICAgICAgICAgKiAgICAgICAgIGZpbHRlcjogJ25vbmUnXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgZmlsdGVyXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5sb2FkXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge3N0cmluZ31cbiAgICAgICAgICogQGRlZmF1bHQgICAgICdhbGwnXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuZmlsdGVyID0gJ2FsbCc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgc3RyaW5nIGRlZmluaW5nIGFueSBzb3J0aW5nIHRvIGJlIHN0YXRpY2FsbHkgYXBwbGllZCB0byB0aGUgbWl4ZXIgb24gbG9hZC5cbiAgICAgICAgICogQXMgcGVyIHRoZSBgLnNvcnQoKWAgQVBJLCB0aGlzIHNob3VsZCBiZSBhIHZhbGlkIFwic29ydCBzdHJpbmdcIiBtYWRlIHVwIG9mXG4gICAgICAgICAqIGFuIGF0dHJpYnV0ZSB0byBzb3J0IGJ5IChvciBgJ2RlZmF1bHQnYCkgZm9sbG93ZWQgYnkgYW4gb3B0aW9uYWwgc29ydGluZ1xuICAgICAgICAgKiBvcmRlciwgb3IgdGhlIHZhbHVlIGAncmFuZG9tJ2A7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IERlZmluaW5nIHNvcnRpbmcgdG8gYmUgYXBwbGllZCBvbiBsb2FkPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBUaGUgbWl4ZXIgd2lsbCBzb3J0IHRoZSBjb250YWluZXIgYnkgdGhlIHZhbHVlIG9mIHRoZSBgZGF0YS1wdWJsaXNoZWQtZGF0ZWBcbiAgICAgICAgICogLy8gYXR0cmlidXRlLCBpbiBkZXNjZW5kaW5nIG9yZGVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBsb2FkOiB7XG4gICAgICAgICAqICAgICAgICAgc29ydDogJ3B1Ymxpc2hlZC1kYXRlOmRlc2MnXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgc29ydFxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcubG9hZFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnZGVmYXVsdDphc2MnXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuc29ydCA9ICdkZWZhdWx0OmFzYyc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IG9mIG9iamVjdHMgcmVwcmVzZW50aW5nIHRoZSB1bmRlcmx5aW5nIGRhdGEgb2YgYW55IHByZS1yZW5kZXJlZCB0YXJnZXRzLFxuICAgICAgICAgKiB3aGVuIHVzaW5nIHRoZSBgLmRhdGFzZXQoKWAgQVBJLlxuICAgICAgICAgKlxuICAgICAgICAgKiBOQjogSWYgdGFyZ2V0cyBhcmUgcHJlLXJlbmRlcmVkIHdoZW4gdGhlIG1peGVyIGlzIGluc3RhbnRpYXRlZCwgdGhpcyBtdXN0IGJlIHNldC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogRGVmaW5pbmcgdGhlIGluaXRpYWwgdW5kZXJ5bGluZyBkYXRhc2V0PC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbXlEYXRhc2V0ID0gW1xuICAgICAgICAgKiAgICAge1xuICAgICAgICAgKiAgICAgICAgIGlkOiAwLFxuICAgICAgICAgKiAgICAgICAgIHRpdGxlOiBcIkJsb2cgUG9zdCBUaXRsZSAwXCIsXG4gICAgICAgICAqICAgICAgICAgLi4uXG4gICAgICAgICAqICAgICB9LFxuICAgICAgICAgKiAgICAge1xuICAgICAgICAgKiAgICAgICAgIGlkOiAxLFxuICAgICAgICAgKiAgICAgICAgIHRpdGxlOiBcIkJsb2cgUG9zdCBUaXRsZSAxXCIsXG4gICAgICAgICAqICAgICAgICAgLi4uXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIF07XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGRhdGE6IHtcbiAgICAgICAgICogICAgICAgICB1aWRLZXk6ICdpZCdcbiAgICAgICAgICogICAgIH0sXG4gICAgICAgICAqICAgICBsb2FkOiB7XG4gICAgICAgICAqICAgICAgICAgZGF0YXNldDogbXlEYXRhc2V0XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgZGF0YXNldFxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcubG9hZFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtBcnJheS48b2JqZWN0Pn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIG51bGxcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5kYXRhc2V0ID0gbnVsbDtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5Db25maWdMb2FkKTtcblxuICAgIG1peGl0dXAuQ29uZmlnTG9hZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5Db25maWdMb2FkLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG1peGl0dXAuQ29uZmlnTG9hZDtcblxuICAgIC8qKlxuICAgICAqIEEgZ3JvdXAgb2YgcHJvcGVydGllcyBkZWZpbmluZyB0aGUgc2VsZWN0b3JzIHVzZWQgdG8gcXVlcnkgZWxlbWVudHMgd2l0aGluIGEgbWl4aXR1cCBjb250YWluZXIuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWdcbiAgICAgKiBAbmFtZSAgICAgICAgc2VsZWN0b3JzXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuQ29uZmlnU2VsZWN0b3JzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHNlbGVjdG9yIHN0cmluZyB1c2VkIHRvIHF1ZXJ5IGFuZCBpbmRleCB0YXJnZXQgZWxlbWVudHMgd2l0aGluIHRoZSBjb250YWluZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEJ5IGRlZmF1bHQsIHRoZSBjbGFzcyBzZWxlY3RvciBgJy5taXgnYCBpcyB1c2VkLCBidXQgdGhpcyBjYW4gYmUgY2hhbmdlZCB0byBhblxuICAgICAgICAgKiBhdHRyaWJ1dGUgb3IgZWxlbWVudCBzZWxlY3RvciB0byBtYXRjaCB0aGUgc3R5bGUgb2YgeW91ciBwcm9qZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDE6IENoYW5naW5nIHRoZSB0YXJnZXQgc2VsZWN0b3I8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIHNlbGVjdG9yczoge1xuICAgICAgICAgKiAgICAgICAgIHRhcmdldDogJy5wb3J0Zm9saW8taXRlbSdcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMjogVXNpbmcgYW4gYXR0cmlidXRlIHNlbGVjdG9yIGFzIGEgdGFyZ2V0IHNlbGVjdG9yPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBUaGUgbWl4ZXIgd2lsbCBzZWFyY2ggZm9yIGFueSBjaGlsZHJlbiB3aXRoIHRoZSBhdHRyaWJ1dGUgYGRhdGEtcmVmPVwibWl4XCJgXG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIHNlbGVjdG9yczoge1xuICAgICAgICAgKiAgICAgICAgIHRhcmdldDogJ1tkYXRhLXJlZj1cIm1peFwiXSdcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICB0YXJnZXRcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLnNlbGVjdG9yc1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnLm1peCdcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy50YXJnZXQgPSAnLm1peCc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgb3B0aW9uYWwgc2VsZWN0b3Igc3RyaW5nIHVzZWQgdG8gYWRkIGZ1cnRoZXIgc3BlY2lmaWNpdHkgdG8gdGhlIHF1ZXJ5aW5nIG9mIGNvbnRyb2wgZWxlbWVudHMsXG4gICAgICAgICAqIGluIGFkZGl0aW9uIHRvIHRoZWlyIG1hbmRhdG9yeSBkYXRhIGF0dHJpYnV0ZSAoZS5nLiBgZGF0YS1maWx0ZXJgLCBgZGF0YS10b2dnbGVgLCBgZGF0YS1zb3J0YCkuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgY2FuIGJlIHVzZWQgaWYgb3RoZXIgZWxlbWVudHMgaW4geW91ciBkb2N1bWVudCBtdXN0IGNvbnRhaW4gdGhlIGFib3ZlIGF0dHJpYnV0ZXNcbiAgICAgICAgICogKGUuZy4gZm9yIHVzZSBpbiB0aGlyZC1wYXJ0eSBzY3JpcHRzKSwgYW5kIHdvdWxkIG90aGVyd2lzZSBpbnRlcmZlcmUgd2l0aCBNaXhJdFVwLiBBZGRpbmdcbiAgICAgICAgICogYW4gYWRkaXRpb25hbCBgY29udHJvbGAgc2VsZWN0b3Igb2YgeW91ciBjaG9pY2UgYWxsb3dzIE1peEl0VXAgdG8gcmVzdHJpY3QgZXZlbnQgaGFuZGxpbmdcbiAgICAgICAgICogdG8gb25seSB0aG9zZSBlbGVtZW50cyBtYXRjaGluZyB0aGUgZGVmaW5lZCBzZWxlY3Rvci5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGNvbnRyb2xcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLnNlbGVjdG9yc1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnJ1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDE6IEFkZGluZyBhIGBzZWxlY3RvcnMuY29udHJvbGAgc2VsZWN0b3I8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIHNlbGVjdG9yczoge1xuICAgICAgICAgKiAgICAgICAgIGNvbnRyb2w6ICcubWl4aXR1cC1jb250cm9sJ1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gV2lsbCBub3QgYmUgaGFuZGxlZDpcbiAgICAgICAgICogLy8gPGJ1dHRvbiBkYXRhLWZpbHRlcj1cIi5jYXRlZ29yeS1hXCI+PC9idXR0b24+XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIFdpbGwgYmUgaGFuZGxlZDpcbiAgICAgICAgICogLy8gPGJ1dHRvbiBjbGFzcz1cIm1peGl0dXAtY29udHJvbFwiIGRhdGEtZmlsdGVyPVwiLmNhdGVnb3J5LWFcIj48L2J1dHRvbj5cbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5jb250cm9sID0gJyc7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuQ29uZmlnU2VsZWN0b3JzKTtcblxuICAgIG1peGl0dXAuQ29uZmlnU2VsZWN0b3JzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLkNvbmZpZ1NlbGVjdG9ycy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLkNvbmZpZ1NlbGVjdG9ycztcblxuICAgIC8qKlxuICAgICAqIEEgZ3JvdXAgb2Ygb3B0aW9uYWwgcmVuZGVyIGZ1bmN0aW9ucyBmb3IgY3JlYXRpbmcgYW5kIHVwZGF0aW5nIGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogQWxsIHJlbmRlciBmdW5jdGlvbnMgcmVjZWl2ZSBhIGRhdGEgb2JqZWN0LCBhbmQgc2hvdWxkIHJldHVybiBhIHZhbGlkIEhUTUwgc3RyaW5nLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnXG4gICAgICogQG5hbWUgICAgICAgIHJlbmRlclxuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKiBAcHVibGljXG4gICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLkNvbmZpZ1JlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtaXhpdHVwLkJhc2UuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVDb25zdHJ1Y3QnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBmdW5jdGlvbiByZXR1cm5pbmcgYW4gSFRNTCBzdHJpbmcgcmVwcmVzZW50aW5nIGEgdGFyZ2V0IGVsZW1lbnQsIG9yIGEgcmVmZXJlbmNlIHRvIGFcbiAgICAgICAgICogc2luZ2xlIERPTSBlbGVtZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgZnVuY3Rpb24gaXMgaW52b2tlZCBhcyBwYXJ0IG9mIHRoZSBgLmRhdGFzZXQoKWAgQVBJLCB3aGVuZXZlciBhIG5ldyBpdGVtIGlzIGFkZGVkXG4gICAgICAgICAqIHRvIHRoZSBkYXRhc2V0LCBvciBhbiBpdGVtIGluIHRoZSBkYXRhc2V0IGNoYW5nZXMgKGlmIGBkYXRhc2V0LmRpcnR5Q2hlY2tgIGlzIGVuYWJsZWQpLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgZnVuY3Rpb24gcmVjZWl2ZXMgdGhlIHJlbGV2YW50IGRhdGFzZXQgaXRlbSBhcyBpdHMgZmlyc3QgcGFyYW1ldGVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDE6IFVzaW5nIHN0cmluZyBjb25jYXRlbmF0aW9uPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICByZW5kZXI6IHtcbiAgICAgICAgICogICAgICAgICB0YXJnZXQ6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICogICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICogICAgICAgICAgICAgICAgICcmbHQ7ZGl2IGNsYXNzPVwibWl4XCImZ3Q7JyArXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgJyZsdDtoMiZndDsnICsgaXRlbS50aXRsZSArICcmbHQ7L2gyJmd0OycgK1xuICAgICAgICAgKiAgICAgICAgICAgICAgICAgJyZsdDsvZGl2Jmd0OydcbiAgICAgICAgICogICAgICAgICAgICAgKTtcbiAgICAgICAgICogICAgICAgICB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDI6IFVzaW5nIGFuIEVTMjAxNSB0ZW1wbGF0ZSBsaXRlcmFsPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICByZW5kZXI6IHtcbiAgICAgICAgICogICAgICAgICB0YXJnZXQ6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICogICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICogICAgICAgICAgICAgICAgIGAmbHQ7ZGl2IGNsYXNzPVwibWl4XCImZ3Q7XG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgJmx0O2gyJmd0OyR7aXRlbS50aXRsZX0mbHQ7L2gyJmd0O1xuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICZsdDsvZGl2Jmd0O2BcbiAgICAgICAgICogICAgICAgICAgICAgKTtcbiAgICAgICAgICogICAgICAgICB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDM6IFVzaW5nIGEgSGFuZGxlYmFycyB0ZW1wbGF0ZTwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIHRhcmdldFRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKCcmbHQ7ZGl2IGNsYXNzPVwibWl4XCImZ3Q7Jmx0O2gyJmd0O3t7dGl0bGV9fSZsdDsvaDImZ3Q7Jmx0Oy9kaXYmZ3Q7Jyk7XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIHJlbmRlcjoge1xuICAgICAgICAgKiAgICAgICAgIHRhcmdldDogdGFyZ2V0VGVtcGxhdGVcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgNDogUmV0dXJuaW5nIGEgRE9NIGVsZW1lbnQ8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIHJlbmRlcjoge1xuICAgICAgICAgKiAgICAgICAgIHRhcmdldDogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgKiAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgc2luZ2xlIGVsZW1lbnQgdXNpbmcgeW91ciBmcmFtZXdvcmsncyBidWlsdC1pbiByZW5kZXJlclxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgICAgICAgdmFyIGVsID0gLi4uXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgICAqICAgICAgICAgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIHRhcmdldFxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcucmVuZGVyXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge2Z1bmN0aW9ufVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgJ251bGwnXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5Db25maWdSZW5kZXIpO1xuXG4gICAgbWl4aXR1cC5Db25maWdSZW5kZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLkJhc2UucHJvdG90eXBlKTtcblxuICAgIG1peGl0dXAuQ29uZmlnUmVuZGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG1peGl0dXAuQ29uZmlnUmVuZGVyO1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5Db25maWdUZW1wbGF0ZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuQ29uZmlnVGVtcGxhdGVzKTtcblxuICAgIG1peGl0dXAuQ29uZmlnVGVtcGxhdGVzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLkNvbmZpZ1RlbXBsYXRlcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLkNvbmZpZ1RlbXBsYXRlcztcblxuICAgIC8qKlxuICAgICAqIGBtaXhpdHVwLkNvbmZpZ2AgaXMgYW4gaW50ZXJmYWNlIHVzZWQgZm9yIGN1c3RvbWlzaW5nIHRoZSBmdW5jdGlvbmFsaXR5IG9mIGFcbiAgICAgKiBtaXhlciBpbnN0YW5jZS4gSXQgaXMgb3JnYW5pc2VkIGludG8gc2V2ZXJhbCBzZW1hbnRpY2FsbHkgZGlzdGluY3Qgc3ViLW9iamVjdHMsXG4gICAgICogZWFjaCBvbmUgcGVydGFpbmluZyB0byBhIHBhcnRpY3VsYXIgYXNwZWN0IG9mIE1peEl0VXAgZnVuY3Rpb25hbGl0eS5cbiAgICAgKlxuICAgICAqIEFuIG9iamVjdCBsaXRlcmFsIGNvbnRhaW5pbmcgYW55IG9yIGFsbCBvZiB0aGUgYXZhaWxhYmxlIHByb3BlcmllcyxcbiAgICAgKiBrbm93biBhcyB0aGUgXCJjb25maWd1cmF0aW9uIG9iamVjdFwiLCBjYW4gYmUgcGFzc2VkIGFzIHRoZSBzZWNvbmQgcGFyYW1ldGVyIHRvXG4gICAgICogdGhlIGBtaXhpdHVwYCBmYWN0b3J5IGZ1bmN0aW9uIHdoZW4gY3JlYXRpbmcgYSBtaXhlciBpbnN0YW5jZSB0byBjdXN0b21pc2UgaXRzXG4gICAgICogZnVuY3Rpb25hbGl0eSBhcyBuZWVkZWQuXG4gICAgICpcbiAgICAgKiBJZiBubyBjb25maWd1cmF0aW9uIG9iamVjdCBpcyBwYXNzZWQsIHRoZSBtaXhlciBpbnN0YW5jZSB3aWxsIHRha2Ugb24gdGhlIGRlZmF1bHRcbiAgICAgKiBjb25maWd1cmF0aW9uIHZhbHVlcyBkZXRhaWxlZCBiZWxvdy5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMTogQ3JlYXRpbmcgYW5kIHBhc3NpbmcgdGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0PC9jYXB0aW9uPlxuICAgICAqIC8vIENyZWF0ZSBhIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHdpdGggZGVzaXJlZCB2YWx1ZXNcbiAgICAgKlxuICAgICAqIHZhciBjb25maWcgPSB7XG4gICAgICogICAgIGFuaW1hdGlvbjoge1xuICAgICAqICAgICAgICAgZW5hYmxlOiBmYWxzZVxuICAgICAqICAgICB9LFxuICAgICAqICAgICBzZWxlY3RvcnM6IHtcbiAgICAgKiAgICAgICAgIHRhcmdldDogJy5pdGVtJ1xuICAgICAqICAgICB9XG4gICAgICogfTtcbiAgICAgKlxuICAgICAqIC8vIFBhc3MgdGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHRvIHRoZSBtaXhpdHVwIGZhY3RvcnkgZnVuY3Rpb25cbiAgICAgKlxuICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIGNvbmZpZyk7XG4gICAgICpcbiAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDI6IFBhc3NpbmcgdGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGlubGluZTwvY2FwdGlvbj5cbiAgICAgKiAvLyBUeXBpY2FsbHksIHRoZSBjb25maWd1cmF0aW9uIG9iamVjdCBpcyBwYXNzZWQgaW5saW5lIGZvciBicmV2aXR5LlxuICAgICAqXG4gICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAqICAgICBjb250cm9sczoge1xuICAgICAqICAgICAgICAgbGl2ZTogdHJ1ZSxcbiAgICAgKiAgICAgICAgIHRvZ2dsZUxvZ2ljOiAnYW5kJ1xuICAgICAqICAgICB9XG4gICAgICogfSk7XG4gICAgICpcbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAc2luY2UgICAgICAgMi4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuQ29uZmlnID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uICAgICAgICAgID0gbmV3IG1peGl0dXAuQ29uZmlnQW5pbWF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmVoYXZpb3IgICAgICAgICAgID0gbmV3IG1peGl0dXAuQ29uZmlnQmVoYXZpb3IoKTtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgICAgICAgICAgPSBuZXcgbWl4aXR1cC5Db25maWdDYWxsYmFja3MoKTtcbiAgICAgICAgdGhpcy5jb250cm9scyAgICAgICAgICAgPSBuZXcgbWl4aXR1cC5Db25maWdDb250cm9scygpO1xuICAgICAgICB0aGlzLmNsYXNzTmFtZXMgICAgICAgICA9IG5ldyBtaXhpdHVwLkNvbmZpZ0NsYXNzTmFtZXMoKTtcbiAgICAgICAgdGhpcy5kYXRhICAgICAgICAgICAgICAgPSBuZXcgbWl4aXR1cC5Db25maWdEYXRhKCk7XG4gICAgICAgIHRoaXMuZGVidWcgICAgICAgICAgICAgID0gbmV3IG1peGl0dXAuQ29uZmlnRGVidWcoKTtcbiAgICAgICAgdGhpcy5sYXlvdXQgICAgICAgICAgICAgPSBuZXcgbWl4aXR1cC5Db25maWdMYXlvdXQoKTtcbiAgICAgICAgdGhpcy5sb2FkICAgICAgICAgICAgICAgPSBuZXcgbWl4aXR1cC5Db25maWdMb2FkKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3JzICAgICAgICAgID0gbmV3IG1peGl0dXAuQ29uZmlnU2VsZWN0b3JzKCk7XG4gICAgICAgIHRoaXMucmVuZGVyICAgICAgICAgICAgID0gbmV3IG1peGl0dXAuQ29uZmlnUmVuZGVyKCk7XG4gICAgICAgIHRoaXMudGVtcGxhdGVzICAgICAgICAgID0gbmV3IG1peGl0dXAuQ29uZmlnVGVtcGxhdGVzKCk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuQ29uZmlnKTtcblxuICAgIG1peGl0dXAuQ29uZmlnLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLkNvbmZpZy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLkNvbmZpZztcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuTWl4ZXJEb20gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgdGhpcy5kb2N1bWVudCAgICAgICAgICAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5ib2R5ICAgICAgICAgICAgICAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb250YWluZXIgICAgICAgICAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5wYXJlbnQgICAgICAgICAgICAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy50YXJnZXRzICAgICAgICAgICAgICAgID0gW107XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuTWl4ZXJEb20pO1xuXG4gICAgbWl4aXR1cC5NaXhlckRvbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5NaXhlckRvbS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLk1peGVyRG9tO1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5VaUNsYXNzTmFtZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgdGhpcy5iYXNlICAgICAgID0gJyc7XG4gICAgICAgIHRoaXMuYWN0aXZlICAgICA9ICcnO1xuICAgICAgICB0aGlzLmRpc2FibGVkICAgPSAnJztcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5VaUNsYXNzTmFtZXMpO1xuXG4gICAgbWl4aXR1cC5VaUNsYXNzTmFtZXMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLkJhc2UucHJvdG90eXBlKTtcblxuICAgIG1peGl0dXAuVWlDbGFzc05hbWVzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG1peGl0dXAuVWlDbGFzc05hbWVzO1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IGludG8gd2hpY2ggYWxsIGFyYml0cmFyeSBhcmd1bWVudHMgc2VudCB0byAnLmRhdGFzZXQoKScgYXJlIG1hcHBlZC5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuQ29tbWFuZERhdGFzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgdGhpcy5kYXRhc2V0ID0gbnVsbDtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5Db21tYW5kRGF0YXNldCk7XG5cbiAgICBtaXhpdHVwLkNvbW1hbmREYXRhc2V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLkNvbW1hbmREYXRhc2V0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG1peGl0dXAuQ29tbWFuZERhdGFzZXQ7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgaW50byB3aGljaCBhbGwgYXJiaXRyYXJ5IGFyZ3VtZW50cyBzZW50IHRvICcubXVsdGltaXgoKScgYXJlIG1hcHBlZC5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuQ29tbWFuZE11bHRpbWl4ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMuZmlsdGVyICAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5zb3J0ICAgICAgICAgPSBudWxsO1xuICAgICAgICB0aGlzLmluc2VydCAgICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMucmVtb3ZlICAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGFuZ2VMYXlvdXQgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLkNvbW1hbmRNdWx0aW1peCk7XG5cbiAgICBtaXhpdHVwLkNvbW1hbmRNdWx0aW1peC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5Db21tYW5kTXVsdGltaXgucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbWl4aXR1cC5Db21tYW5kTXVsdGltaXg7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgaW50byB3aGljaCBhbGwgYXJiaXRyYXJ5IGFyZ3VtZW50cyBzZW50IHRvICcuZmlsdGVyKCknIGFyZSBtYXBwZWQuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLkNvbW1hbmRGaWx0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RvciAgID0gJyc7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aW9uICAgICA9ICdzaG93JzsgLy8gZW51bTogWydzaG93JywgJ2hpZGUnXVxuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLkNvbW1hbmRGaWx0ZXIpO1xuXG4gICAgbWl4aXR1cC5Db21tYW5kRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLkNvbW1hbmRGaWx0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbWl4aXR1cC5Db21tYW5kRmlsdGVyO1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IGludG8gd2hpY2ggYWxsIGFyYml0cmFyeSBhcmd1bWVudHMgc2VudCB0byAnLnNvcnQoKScgYXJlIG1hcHBlZC5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuQ29tbWFuZFNvcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgdGhpcy5zb3J0U3RyaW5nID0gJyc7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlICA9ICcnO1xuICAgICAgICB0aGlzLm9yZGVyICAgICAgPSAnYXNjJztcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5uZXh0ICAgICAgID0gbnVsbDtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5Db21tYW5kU29ydCk7XG5cbiAgICBtaXhpdHVwLkNvbW1hbmRTb3J0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLkNvbW1hbmRTb3J0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG1peGl0dXAuQ29tbWFuZFNvcnQ7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgaW50byB3aGljaCBhbGwgYXJiaXRyYXJ5IGFyZ3VtZW50cyBzZW50IHRvICcuaW5zZXJ0KCknIGFyZSBtYXBwZWQuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLkNvbW1hbmRJbnNlcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgdGhpcy5pbmRleCAgICAgID0gMDtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24gICA9ICdiZWZvcmUnOyAvLyBlbnVtOiBbJ2JlZm9yZScsICdhZnRlciddXG4gICAgICAgIHRoaXMuc2libGluZyAgICA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuQ29tbWFuZEluc2VydCk7XG5cbiAgICBtaXhpdHVwLkNvbW1hbmRJbnNlcnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLkJhc2UucHJvdG90eXBlKTtcblxuICAgIG1peGl0dXAuQ29tbWFuZEluc2VydC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLkNvbW1hbmRJbnNlcnQ7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgaW50byB3aGljaCBhbGwgYXJiaXRyYXJ5IGFyZ3VtZW50cyBzZW50IHRvICcucmVtb3ZlKCknIGFyZSBtYXBwZWQuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLkNvbW1hbmRSZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgdGhpcy50YXJnZXRzICAgID0gW107XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IFtdO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLkNvbW1hbmRSZW1vdmUpO1xuXG4gICAgbWl4aXR1cC5Db21tYW5kUmVtb3ZlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLkNvbW1hbmRSZW1vdmUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbWl4aXR1cC5Db21tYW5kUmVtb3ZlO1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IGludG8gd2hpY2ggYWxsIGFyYml0cmFyeSBhcmd1bWVudHMgc2VudCB0byAnLmNoYW5nZUxheW91dCgpJyBhcmUgbWFwcGVkLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5Db21tYW5kQ2hhbmdlTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyQ2xhc3NOYW1lID0gJyc7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuQ29tbWFuZENoYW5nZUxheW91dCk7XG5cbiAgICBtaXhpdHVwLkNvbW1hbmRDaGFuZ2VMYXlvdXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLkJhc2UucHJvdG90eXBlKTtcblxuICAgIG1peGl0dXAuQ29tbWFuZENoYW5nZUxheW91dC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLkNvbW1hbmRDaGFuZ2VMYXlvdXQ7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICogQHBhcmFtICAgICAgIHtzdHJpbmd9ICAgICAgICB0eXBlXG4gICAgICogQHBhcmFtICAgICAgIHtzdHJpbmd9ICAgICAgICBzZWxlY3RvclxuICAgICAqIEBwYXJhbSAgICAgICB7Ym9vbGVhbn0gICAgICAgW2xpdmVdXG4gICAgICogQHBhcmFtICAgICAgIHtzdHJpbmd9ICAgICAgICBbcGFyZW50XVxuICAgICAqICAgICBBbiBvcHRpb25hbCBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBuYW1lIG9mIHRoZSBtaXhlci5kb20gcHJvcGVydHkgY29udGFpbmluZyBhIHJlZmVyZW5jZSB0byBhIHBhcmVudCBlbGVtZW50LlxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5Db250cm9sRGVmaW5pdGlvbiA9IGZ1bmN0aW9uKHR5cGUsIHNlbGVjdG9yLCBsaXZlLCBwYXJlbnQpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgdGhpcy50eXBlICAgID0gdHlwZTtcbiAgICAgICAgdGhpcy5zZWxlY3RvciAgPSBzZWxlY3RvcjtcbiAgICAgICAgdGhpcy5saXZlICAgICAgPSBsaXZlIHx8IGZhbHNlO1xuICAgICAgICB0aGlzLnBhcmVudCAgICA9IHBhcmVudCB8fCAnJztcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguZnJlZXplKHRoaXMpO1xuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuQ29udHJvbERlZmluaXRpb24pO1xuXG4gICAgbWl4aXR1cC5Db250cm9sRGVmaW5pdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5Db250cm9sRGVmaW5pdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLkNvbnRyb2xEZWZpbml0aW9uO1xuXG4gICAgbWl4aXR1cC5jb250cm9sRGVmaW5pdGlvbnMgPSBbXTtcblxuICAgIG1peGl0dXAuY29udHJvbERlZmluaXRpb25zLnB1c2gobmV3IG1peGl0dXAuQ29udHJvbERlZmluaXRpb24oJ211bHRpbWl4JywgJ1tkYXRhLWZpbHRlcl1bZGF0YS1zb3J0XScpKTtcbiAgICBtaXhpdHVwLmNvbnRyb2xEZWZpbml0aW9ucy5wdXNoKG5ldyBtaXhpdHVwLkNvbnRyb2xEZWZpbml0aW9uKCdmaWx0ZXInLCAnW2RhdGEtZmlsdGVyXScpKTtcbiAgICBtaXhpdHVwLmNvbnRyb2xEZWZpbml0aW9ucy5wdXNoKG5ldyBtaXhpdHVwLkNvbnRyb2xEZWZpbml0aW9uKCdzb3J0JywgJ1tkYXRhLXNvcnRdJykpO1xuICAgIG1peGl0dXAuY29udHJvbERlZmluaXRpb25zLnB1c2gobmV3IG1peGl0dXAuQ29udHJvbERlZmluaXRpb24oJ3RvZ2dsZScsICdbZGF0YS10b2dnbGVdJykpO1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5Db250cm9sID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMuZWwgICAgICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IgICA9ICcnO1xuICAgICAgICB0aGlzLmJvdW5kICAgICAgPSBbXTtcbiAgICAgICAgdGhpcy5wZW5kaW5nICAgID0gLTE7XG4gICAgICAgIHRoaXMudHlwZSAgICAgICA9ICcnO1xuICAgICAgICB0aGlzLnN0YXR1cyAgICAgPSAnaW5hY3RpdmUnOyAvLyBlbnVtOiBbJ2luYWN0aXZlJywgJ2FjdGl2ZScsICdkaXNhYmxlZCcsICdsaXZlJ11cbiAgICAgICAgdGhpcy5maWx0ZXIgICAgID0gJyc7XG4gICAgICAgIHRoaXMuc29ydCAgICAgICA9ICcnO1xuICAgICAgICB0aGlzLmNhbkRpc2FibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYW5kbGVyICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5jbGFzc05hbWVzID0gbmV3IG1peGl0dXAuVWlDbGFzc05hbWVzKCk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuQ29udHJvbCk7XG5cbiAgICBtaXhpdHVwLkNvbnRyb2wucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLkJhc2UucHJvdG90eXBlKTtcblxuICAgIGguZXh0ZW5kKG1peGl0dXAuQ29udHJvbC5wcm90b3R5cGUsXG4gICAgLyoqIEBsZW5kcyBtaXhpdHVwLkNvbnRyb2wgKi9cbiAgICB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBtaXhpdHVwLkNvbnRyb2wsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgICAgIHR5cGVcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9ICAgICAgc2VsZWN0b3JcbiAgICAgICAgICovXG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oZWwsIHR5cGUsIHNlbGVjdG9yKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUluaXQnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBzZWxmLmVsICAgICAgICAgPSBlbDtcbiAgICAgICAgICAgIHNlbGYudHlwZSAgICAgICA9IHR5cGU7XG4gICAgICAgICAgICBzZWxmLnNlbGVjdG9yICAgPSBzZWxlY3RvcjtcblxuICAgICAgICAgICAgaWYgKHNlbGYuc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnN0YXR1cyA9ICdsaXZlJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jYW5EaXNhYmxlID0gdHlwZW9mIHNlbGYuZWwuZGlzYWJsZSA9PT0gJ2Jvb2xlYW4nO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzZWxmLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZmlsdGVyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZmlsdGVyID0gc2VsZi5lbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd0b2dnbGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5maWx0ZXIgPSBzZWxmLmVsLmdldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NvcnQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zb3J0ICAgPSBzZWxmLmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zb3J0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdtdWx0aW1peCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZpbHRlciA9IHNlbGYuZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zb3J0ICAgPSBzZWxmLmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zb3J0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5iaW5kQ2xpY2soKTtcblxuICAgICAgICAgICAgbWl4aXR1cC5jb250cm9scy5wdXNoKHNlbGYpO1xuXG4gICAgICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckluaXQnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gIHttaXhpdHVwLk1peGVyfSBtaXhlclxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAgICAgKi9cblxuICAgICAgICBpc0JvdW5kOiBmdW5jdGlvbihtaXhlcikge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGlzQm91bmQgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlSXNCb3VuZCcsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlzQm91bmQgPSBzZWxmLmJvdW5kLmluZGV4T2YobWl4ZXIpID4gLTE7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNhbGxGaWx0ZXJzKCdhZnRlcklzQm91bmQnLCBpc0JvdW5kLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gIHttaXhpdHVwLk1peGVyfSBtaXhlclxuICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBhZGRCaW5kaW5nOiBmdW5jdGlvbihtaXhlcikge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVBZGRCaW5kaW5nJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaWYgKCFzZWxmLmlzQm91bmQoKSkge1xuICAgICAgICAgICAgICAgIHNlbGYuYm91bmQucHVzaChtaXhlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQWRkQmluZGluZycsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAge21peGl0dXAuTWl4ZXJ9IG1peGVyXG4gICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHJlbW92ZUJpbmRpbmc6IGZ1bmN0aW9uKG1peGVyKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHJlbW92ZUluZGV4ID0gLTE7XG5cbiAgICAgICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZVJlbW92ZUJpbmRpbmcnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBpZiAoKHJlbW92ZUluZGV4ID0gc2VsZi5ib3VuZC5pbmRleE9mKG1peGVyKSkgPiAtMSkge1xuICAgICAgICAgICAgICAgIHNlbGYuYm91bmQuc3BsaWNlKHJlbW92ZUluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlbGYuYm91bmQubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgIC8vIE5vIGJpbmRpbmdzIGV4aXN0LCB1bmJpbmQgZXZlbnQgY2xpY2sgaGFuZGxlcnNcblxuICAgICAgICAgICAgICAgIHNlbGYudW5iaW5kQ2xpY2soKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBmcm9tIGBtaXhpdHVwLmNvbnRyb2xzYCBsaXN0XG5cbiAgICAgICAgICAgICAgICByZW1vdmVJbmRleCA9IG1peGl0dXAuY29udHJvbHMuaW5kZXhPZihzZWxmKTtcblxuICAgICAgICAgICAgICAgIG1peGl0dXAuY29udHJvbHMuc3BsaWNlKHJlbW92ZUluZGV4LCAxKTtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxmLnN0YXR1cyA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZW5kZXJTdGF0dXMoc2VsZi5lbCwgJ2luYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlclJlbW92ZUJpbmRpbmcnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBiaW5kQ2xpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVCaW5kQ2xpY2snLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBzZWxmLmhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5oYW5kbGVDbGljayhlKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGgub24oc2VsZi5lbCwgJ2NsaWNrJywgc2VsZi5oYW5kbGVyKTtcblxuICAgICAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJCaW5kQ2xpY2snLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICB1bmJpbmRDbGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZVVuYmluZENsaWNrJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaC5vZmYoc2VsZi5lbCwgJ2NsaWNrJywgc2VsZi5oYW5kbGVyKTtcblxuICAgICAgICAgICAgc2VsZi5oYW5kbGVyID0gbnVsbDtcblxuICAgICAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJVbmJpbmRDbGljaycsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtNb3VzZUV2ZW50fSBlXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBoYW5kbGVDbGljazogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBidXR0b24gICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgbWl4ZXIgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGlzQWN0aXZlICAgID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2b2lkKDApLFxuICAgICAgICAgICAgICAgIGNvbW1hbmQgICAgID0ge30sXG4gICAgICAgICAgICAgICAgY2xvbmUgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGNvbW1hbmRzICAgID0gW10sXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlSGFuZGxlQ2xpY2snLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmcgPSAwO1xuXG4gICAgICAgICAgICBtaXhlciA9IHNlbGYuYm91bmRbMF07XG5cbiAgICAgICAgICAgIGlmICghc2VsZi5zZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIGJ1dHRvbiA9IHNlbGYuZWw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1dHRvbiA9IGguY2xvc2VzdFBhcmVudChlLnRhcmdldCwgbWl4ZXIuY29uZmlnLnNlbGVjdG9ycy5jb250cm9sICsgc2VsZi5zZWxlY3RvciwgdHJ1ZSwgbWl4ZXIuZG9tLmRvY3VtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFidXR0b24pIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlckhhbmRsZUNsaWNrJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChzZWxmLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdmaWx0ZXInOlxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLmZpbHRlciA9IHNlbGYuZmlsdGVyIHx8IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc29ydCc6XG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQuc29ydCA9IHNlbGYuc29ydCB8fCBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXNvcnQnKTtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtdWx0aW1peCc6XG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQuZmlsdGVyICA9IHNlbGYuZmlsdGVyIHx8IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQuc29ydCAgICA9IHNlbGYuc29ydCB8fCBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXNvcnQnKTtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd0b2dnbGUnOlxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLmZpbHRlciAgPSBzZWxmLmZpbHRlciB8fCBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnN0YXR1cyA9PT0gJ2xpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA9IGguaGFzQ2xhc3MoYnV0dG9uLCBzZWxmLmNsYXNzTmFtZXMuYWN0aXZlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID0gc2VsZi5zdGF0dXMgPT09ICdhY3RpdmUnO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzZWxmLmJvdW5kLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgY2xvbmUgb2YgdGhlIGNvbW1hbmQgZm9yIGVhY2ggYm91bmQgbWl4ZXIgaW5zdGFuY2VcblxuICAgICAgICAgICAgICAgIGNsb25lID0gbmV3IG1peGl0dXAuQ29tbWFuZE11bHRpbWl4KCk7XG5cbiAgICAgICAgICAgICAgICBoLmV4dGVuZChjbG9uZSwgY29tbWFuZCk7XG5cbiAgICAgICAgICAgICAgICBjb21tYW5kcy5wdXNoKGNsb25lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tbWFuZHMgPSBzZWxmLmNhbGxGaWx0ZXJzKCdjb21tYW5kc0hhbmRsZUNsaWNrJywgY29tbWFuZHMsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHNlbGYucGVuZGluZyA9IHNlbGYuYm91bmQubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBtaXhlciA9IHNlbGYuYm91bmRbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbW1hbmQgPSBjb21tYW5kc1tpXTtcblxuICAgICAgICAgICAgICAgIGlmICghY29tbWFuZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBbiBleHRlbnNpb24gbWF5IHNldCBhIGNvbW1hbmQgbnVsbCB0byBpbmRpY2F0ZSB0aGF0IHRoZSBjbGljayBzaG91bGQgbm90IGJlIGhhbmRsZWRcblxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIW1peGVyLmxhc3RDbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIG1peGVyLmxhc3RDbGlja2VkID0gYnV0dG9uO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1peGl0dXAuZXZlbnRzLmZpcmUoJ21peENsaWNrJywgbWl4ZXIuZG9tLmNvbnRhaW5lciwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogbWl4ZXIuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBtaXhlcixcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZSxcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbDogbWl4ZXIubGFzdENsaWNrZWRcbiAgICAgICAgICAgICAgICB9LCBtaXhlci5kb20uZG9jdW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtaXhlci5jb25maWcuY2FsbGJhY2tzLm9uTWl4Q2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBtaXhlci5jb25maWcuY2FsbGJhY2tzLm9uTWl4Q2xpY2suY2FsbChtaXhlci5sYXN0Q2xpY2tlZCwgbWl4ZXIuc3RhdGUsIGUsIG1peGVyKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmV0dXJuVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2VyIGhhcyByZXR1cm5lZCBgZmFsc2VgIGZyb20gdGhlIGNhbGxiYWNrLCBzbyBkbyBub3QgaGFuZGxlIGNsaWNrXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYudHlwZSA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPyBtaXhlci50b2dnbGVPZmYoY29tbWFuZC5maWx0ZXIpIDogbWl4ZXIudG9nZ2xlT24oY29tbWFuZC5maWx0ZXIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1peGVyLm11bHRpbWl4KGNvbW1hbmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJIYW5kbGVDbGljaycsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgICAgICAgIGNvbW1hbmRcbiAgICAgICAgICogQHBhcmFtICAge0FycmF5PHN0cmluZz59ICAgdG9nZ2xlQXJyYXlcbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oY29tbWFuZCwgdG9nZ2xlQXJyYXkpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBhY3Rpb25zID0gbmV3IG1peGl0dXAuQ29tbWFuZE11bHRpbWl4KCk7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZVVwZGF0ZScsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHNlbGYucGVuZGluZy0tO1xuXG4gICAgICAgICAgICBzZWxmLnBlbmRpbmcgPSBNYXRoLm1heCgwLCBzZWxmLnBlbmRpbmcpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5wZW5kaW5nID4gMCkgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5zdGF0dXMgPT09ICdsaXZlJykge1xuICAgICAgICAgICAgICAgIC8vIExpdmUgY29udHJvbCAoc3RhdHVzIHVua25vd24pXG5cbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZUxpdmUoY29tbWFuZCwgdG9nZ2xlQXJyYXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBTdGF0aWMgY29udHJvbFxuXG4gICAgICAgICAgICAgICAgYWN0aW9ucy5zb3J0ICAgID0gc2VsZi5zb3J0O1xuICAgICAgICAgICAgICAgIGFjdGlvbnMuZmlsdGVyICA9IHNlbGYuZmlsdGVyO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5jYWxsRmlsdGVycygnYWN0aW9uc1VwZGF0ZScsIGFjdGlvbnMsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgICBzZWxmLnBhcnNlU3RhdHVzQ2hhbmdlKHNlbGYuZWwsIGNvbW1hbmQsIGFjdGlvbnMsIHRvZ2dsZUFycmF5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJVcGRhdGUnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gICB7bWl4aXR1cC5Db21tYW5kTXVsdGltaXh9IGNvbW1hbmRcbiAgICAgICAgICogQHBhcmFtICAge0FycmF5PHN0cmluZz59ICAgICAgICAgICB0b2dnbGVBcnJheVxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgdXBkYXRlTGl2ZTogZnVuY3Rpb24oY29tbWFuZCwgdG9nZ2xlQXJyYXkpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xCdXR0b25zICA9IG51bGwsXG4gICAgICAgICAgICAgICAgYWN0aW9ucyAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBidXR0b24gICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGkgICAgICAgICAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVVcGRhdGVMaXZlJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaWYgKCFzZWxmLmVsKSByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbnRyb2xCdXR0b25zID0gc2VsZi5lbC5xdWVyeVNlbGVjdG9yQWxsKHNlbGYuc2VsZWN0b3IpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBidXR0b24gPSBjb250cm9sQnV0dG9uc1tpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9ucyA9IG5ldyBtaXhpdHVwLkNvbW1hbmRNdWx0aW1peCgpO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzZWxmLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZmlsdGVyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMuZmlsdGVyID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1maWx0ZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NvcnQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zb3J0ID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1zb3J0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdtdWx0aW1peCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLmZpbHRlciAgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zb3J0ICAgID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1zb3J0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd0b2dnbGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5maWx0ZXIgID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYWN0aW9ucyA9IHNlbGYuY2FsbEZpbHRlcnMoJ2FjdGlvbnNVcGRhdGVMaXZlJywgYWN0aW9ucywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICAgIHNlbGYucGFyc2VTdGF0dXNDaGFuZ2UoYnV0dG9uLCBjb21tYW5kLCBhY3Rpb25zLCB0b2dnbGVBcnJheSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyVXBkYXRlTGl2ZScsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gICAgICAgICAgICAgYnV0dG9uXG4gICAgICAgICAqIEBwYXJhbSAgIHttaXhpdHVwLkNvbW1hbmRNdWx0aW1peH0gY29tbWFuZFxuICAgICAgICAgKiBAcGFyYW0gICB7bWl4aXR1cC5Db21tYW5kTXVsdGltaXh9IGFjdGlvbnNcbiAgICAgICAgICogQHBhcmFtICAge0FycmF5PHN0cmluZz59ICAgICAgICAgICB0b2dnbGVBcnJheVxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgcGFyc2VTdGF0dXNDaGFuZ2U6IGZ1bmN0aW9uKGJ1dHRvbiwgY29tbWFuZCwgYWN0aW9ucywgdG9nZ2xlQXJyYXkpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBhbGlhcyAgID0gJycsXG4gICAgICAgICAgICAgICAgdG9nZ2xlICA9ICcnLFxuICAgICAgICAgICAgICAgIGkgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlUGFyc2VTdGF0dXNDaGFuZ2UnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHNlbGYudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpbHRlcic6XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21tYW5kLmZpbHRlciA9PT0gYWN0aW9ucy5maWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVuZGVyU3RhdHVzKGJ1dHRvbiwgJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZW5kZXJTdGF0dXMoYnV0dG9uLCAnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ211bHRpbWl4JzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbW1hbmQuc29ydCA9PT0gYWN0aW9ucy5zb3J0ICYmIGNvbW1hbmQuZmlsdGVyID09PSBhY3Rpb25zLmZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZW5kZXJTdGF0dXMoYnV0dG9uLCAnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlbmRlclN0YXR1cyhidXR0b24sICdpbmFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc29ydCc6XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21tYW5kLnNvcnQubWF0Y2goLzphc2MvZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzID0gY29tbWFuZC5zb3J0LnJlcGxhY2UoLzphc2MvZywgJycpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbW1hbmQuc29ydCA9PT0gYWN0aW9ucy5zb3J0IHx8IGFsaWFzID09PSBhY3Rpb25zLnNvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVuZGVyU3RhdHVzKGJ1dHRvbiwgJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZW5kZXJTdGF0dXMoYnV0dG9uLCAnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3RvZ2dsZSc6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2dnbGVBcnJheS5sZW5ndGggPCAxKSBzZWxmLnJlbmRlclN0YXR1cyhidXR0b24sICdpbmFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21tYW5kLmZpbHRlciA9PT0gYWN0aW9ucy5maWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVuZGVyU3RhdHVzKGJ1dHRvbiwgJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRvZ2dsZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGUgPSB0b2dnbGVBcnJheVtpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZ2dsZSA9PT0gYWN0aW9ucy5maWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCdXR0b24gbWF0Y2hlcyBvbmUgYWN0aXZlIHRvZ2dsZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZW5kZXJTdGF0dXMoYnV0dG9uLCAnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZW5kZXJTdGF0dXMoYnV0dG9uLCAnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlclBhcnNlU3RhdHVzQ2hhbmdlJywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtICAge0hUTUxFbGVtZW50fSAgIGJ1dHRvblxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgc3RhdHVzXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICByZW5kZXJTdGF0dXM6IGZ1bmN0aW9uKGJ1dHRvbiwgc3RhdHVzKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZVJlbmRlclN0YXR1cycsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnYWN0aXZlJzpcbiAgICAgICAgICAgICAgICAgICAgaC5hZGRDbGFzcyhidXR0b24sIHNlbGYuY2xhc3NOYW1lcy5hY3RpdmUpO1xuICAgICAgICAgICAgICAgICAgICBoLnJlbW92ZUNsYXNzKGJ1dHRvbiwgc2VsZi5jbGFzc05hbWVzLmRpc2FibGVkKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5jYW5EaXNhYmxlKSBzZWxmLmVsLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaW5hY3RpdmUnOlxuICAgICAgICAgICAgICAgICAgICBoLnJlbW92ZUNsYXNzKGJ1dHRvbiwgc2VsZi5jbGFzc05hbWVzLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgIGgucmVtb3ZlQ2xhc3MoYnV0dG9uLCBzZWxmLmNsYXNzTmFtZXMuZGlzYWJsZWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmNhbkRpc2FibGUpIHNlbGYuZWwuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdkaXNhYmxlZCc6XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmNhbkRpc2FibGUpIHNlbGYuZWwuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGguYWRkQ2xhc3MoYnV0dG9uLCBzZWxmLmNsYXNzTmFtZXMuZGlzYWJsZWQpO1xuICAgICAgICAgICAgICAgICAgICBoLnJlbW92ZUNsYXNzKGJ1dHRvbiwgc2VsZi5jbGFzc05hbWVzLmFjdGl2ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxmLnN0YXR1cyAhPT0gJ2xpdmUnKSB7XG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBjb250cm9sJ3Mgc3RhdHVzIHByb3BlcnkgaWYgbm90IGxpdmVcblxuICAgICAgICAgICAgICAgIHNlbGYuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlclJlbmRlclN0YXR1cycsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIG1peGl0dXAuY29udHJvbHMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuU3R5bGVEYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMueCAgICAgICAgICAgICAgPSAwO1xuICAgICAgICB0aGlzLnkgICAgICAgICAgICAgID0gMDtcbiAgICAgICAgdGhpcy50b3AgICAgICAgICAgICA9IDA7XG4gICAgICAgIHRoaXMucmlnaHQgICAgICAgICAgPSAwO1xuICAgICAgICB0aGlzLmJvdHRvbSAgICAgICAgID0gMDtcbiAgICAgICAgdGhpcy5sZWZ0ICAgICAgICAgICA9IDA7XG4gICAgICAgIHRoaXMud2lkdGggICAgICAgICAgPSAwO1xuICAgICAgICB0aGlzLmhlaWdodCAgICAgICAgID0gMDtcbiAgICAgICAgdGhpcy5tYXJnaW5SaWdodCAgICA9IDA7XG4gICAgICAgIHRoaXMubWFyZ2luQm90dG9tICAgPSAwO1xuICAgICAgICB0aGlzLm9wYWNpdHkgICAgICAgID0gMDtcbiAgICAgICAgdGhpcy5zY2FsZSAgICAgICAgICA9IG5ldyBtaXhpdHVwLlRyYW5zZm9ybURhdGEoKTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGVYICAgICA9IG5ldyBtaXhpdHVwLlRyYW5zZm9ybURhdGEoKTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGVZICAgICA9IG5ldyBtaXhpdHVwLlRyYW5zZm9ybURhdGEoKTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGVaICAgICA9IG5ldyBtaXhpdHVwLlRyYW5zZm9ybURhdGEoKTtcbiAgICAgICAgdGhpcy5yb3RhdGVYICAgICAgICA9IG5ldyBtaXhpdHVwLlRyYW5zZm9ybURhdGEoKTtcbiAgICAgICAgdGhpcy5yb3RhdGVZICAgICAgICA9IG5ldyBtaXhpdHVwLlRyYW5zZm9ybURhdGEoKTtcbiAgICAgICAgdGhpcy5yb3RhdGVaICAgICAgICA9IG5ldyBtaXhpdHVwLlRyYW5zZm9ybURhdGEoKTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5TdHlsZURhdGEpO1xuXG4gICAgbWl4aXR1cC5TdHlsZURhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLkJhc2UucHJvdG90eXBlKTtcblxuICAgIG1peGl0dXAuU3R5bGVEYXRhLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG1peGl0dXAuU3R5bGVEYXRhO1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5UcmFuc2Zvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMudmFsdWUgID0gMDtcbiAgICAgICAgdGhpcy51bml0ICAgPSAnJztcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5UcmFuc2Zvcm1EYXRhKTtcblxuICAgIG1peGl0dXAuVHJhbnNmb3JtRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5UcmFuc2Zvcm1EYXRhLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG1peGl0dXAuVHJhbnNmb3JtRGF0YTtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuVHJhbnNmb3JtRGVmYXVsdHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5TdHlsZURhdGEuYXBwbHkodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgdGhpcy5zY2FsZS52YWx1ZSAgICAgICAgPSAwLjAxO1xuICAgICAgICB0aGlzLnNjYWxlLnVuaXQgICAgICAgICA9ICcnO1xuXG4gICAgICAgIHRoaXMudHJhbnNsYXRlWC52YWx1ZSAgID0gMjA7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlWC51bml0ICAgID0gJ3B4JztcblxuICAgICAgICB0aGlzLnRyYW5zbGF0ZVkudmFsdWUgICA9IDIwO1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZVkudW5pdCAgICA9ICdweCc7XG5cbiAgICAgICAgdGhpcy50cmFuc2xhdGVaLnZhbHVlICAgPSAyMDtcbiAgICAgICAgdGhpcy50cmFuc2xhdGVaLnVuaXQgICAgPSAncHgnO1xuXG4gICAgICAgIHRoaXMucm90YXRlWC52YWx1ZSAgICAgID0gOTA7XG4gICAgICAgIHRoaXMucm90YXRlWC51bml0ICAgICAgID0gJ2RlZyc7XG5cbiAgICAgICAgdGhpcy5yb3RhdGVZLnZhbHVlICAgICAgPSA5MDtcbiAgICAgICAgdGhpcy5yb3RhdGVZLnVuaXQgICAgICAgPSAnZGVnJztcblxuICAgICAgICB0aGlzLnJvdGF0ZVgudmFsdWUgICAgICA9IDkwO1xuICAgICAgICB0aGlzLnJvdGF0ZVgudW5pdCAgICAgICA9ICdkZWcnO1xuXG4gICAgICAgIHRoaXMucm90YXRlWi52YWx1ZSAgICAgID0gMTgwO1xuICAgICAgICB0aGlzLnJvdGF0ZVoudW5pdCAgICAgICA9ICdkZWcnO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLlRyYW5zZm9ybURlZmF1bHRzKTtcblxuICAgIG1peGl0dXAuVHJhbnNmb3JtRGVmYXVsdHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLlN0eWxlRGF0YS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5UcmFuc2Zvcm1EZWZhdWx0cy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLlRyYW5zZm9ybURlZmF1bHRzO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgKiBAdHlwZSAgICB7bWl4aXR1cC5UcmFuc2Zvcm1EZWZhdWx0c31cbiAgICAgKi9cblxuICAgIG1peGl0dXAudHJhbnNmb3JtRGVmYXVsdHMgPSBuZXcgbWl4aXR1cC5UcmFuc2Zvcm1EZWZhdWx0cygpO1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5FdmVudERldGFpbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnN0YXRlICAgICAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5mdXR1cmVTdGF0ZSAgICA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgICAgICAgPSBudWxsO1xuICAgICAgICB0aGlzLm9yaWdpbmFsRXZlbnQgID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBtaXhpdHVwLkV2ZW50c2AgY2xhc3MgY29udGFpbnMgYWxsIGN1c3RvbSBldmVudHMgZGlzcGF0Y2hlZCBieSBNaXhJdFVwIGF0IHZhcmlvdXNcbiAgICAgKiBwb2ludHMgd2l0aGluIHRoZSBsaWZlY3ljbGUgb2YgYSBtaXhlciBvcGVyYXRpb24uXG4gICAgICpcbiAgICAgKiBFYWNoIGV2ZW50IGlzIGFuYWxvZ291cyB0byB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gb2YgdGhlIHNhbWUgbmFtZSBkZWZpbmVkIGluXG4gICAgICogdGhlIGBjYWxsYmFja3NgIGNvbmZpZ3VyYXRpb24gb2JqZWN0LCBhbmQgaXMgdHJpZ2dlcmVkIGltbWVkaWF0ZWx5IGJlZm9yZSBpdC5cbiAgICAgKlxuICAgICAqIEV2ZW50cyBhcmUgYWx3YXlzIHRyaWdnZXJlZCBmcm9tIHRoZSBjb250YWluZXIgZWxlbWVudCBvbiB3aGljaCBNaXhJdFVwIGlzIGluc3RhbnRpYXRlZFxuICAgICAqIHVwb24uXG4gICAgICpcbiAgICAgKiBBcyB3aXRoIGFueSBldmVudCwgcmVnaXN0ZXJlZCBldmVudCBoYW5kbGVycyByZWNlaXZlIHRoZSBldmVudCBvYmplY3QgYXMgYSBwYXJhbWV0ZXJcbiAgICAgKiB3aGljaCBpbmNsdWRlcyBhIGBkZXRhaWxgIHByb3BlcnR5IGNvbnRhaW50aW5nIHJlZmVyZW5jZXMgdG8gdGhlIGN1cnJlbnQgYHN0YXRlYCxcbiAgICAgKiB0aGUgYG1peGVyYCBpbnN0YW5jZSwgYW5kIG90aGVyIGV2ZW50LXNwZWNpZmljIHByb3BlcnRpZXMgZGVzY3JpYmVkIGJlbG93LlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5FdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgY3VzdG9tIGV2ZW50IHRyaWdnZXJlZCBpbW1lZGlhdGVseSBhZnRlciBhbnkgTWl4SXRVcCBvcGVyYXRpb24gaXMgcmVxdWVzdGVkXG4gICAgICAgICAqIGFuZCBiZWZvcmUgYW5pbWF0aW9ucyBoYXZlIGJlZ3VuLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgYG1peFN0YXJ0YCBldmVudCBhbHNvIGV4cG9zZXMgYSBgZnV0dXJlU3RhdGVgIHByb3BlcnR5IHZpYSB0aGVcbiAgICAgICAgICogYGV2ZW50LmRldGFpbGAgb2JqZWN0LCB3aGljaCByZXByZXNlbnRzIHRoZSBmaW5hbCBzdGF0ZSBvZiB0aGUgbWl4ZXIgb25jZVxuICAgICAgICAgKiB0aGUgcmVxdWVzdGVkIG9wZXJhdGlvbiBoYXMgY29tcGxldGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgbWl4U3RhcnRcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuRXZlbnRzXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtDdXN0b21FdmVudH1cbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5taXhTdGFydCA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgY3VzdG9tIGV2ZW50IHRyaWdnZXJlZCB3aGVuIGEgTWl4SXRVcCBvcGVyYXRpb24gaXMgcmVxdWVzdGVkIHdoaWxlIGFub3RoZXJcbiAgICAgICAgICogb3BlcmF0aW9uIGlzIGluIHByb2dyZXNzLCBhbmQgdGhlIGFuaW1hdGlvbiBxdWV1ZSBpcyBmdWxsLCBvciBxdWV1ZWluZ1xuICAgICAgICAgKiBpcyBkaXNhYmxlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIG1peEJ1c3lcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuRXZlbnRzXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtDdXN0b21FdmVudH1cbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5taXhCdXN5ID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBjdXN0b20gZXZlbnQgdHJpZ2dlcmVkIGFmdGVyIGFueSBNaXhJdFVwIG9wZXJhdGlvbiBoYXMgY29tcGxldGVkLCBhbmQgdGhlXG4gICAgICAgICAqIHN0YXRlIGhhcyBiZWVuIHVwZGF0ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBtaXhFbmRcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuRXZlbnRzXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtDdXN0b21FdmVudH1cbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5taXhFbmQgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGN1c3RvbSBldmVudCB0cmlnZ2VyZWQgd2hlbmV2ZXIgYSBmaWx0ZXIgb3BlcmF0aW9uIFwiZmFpbHNcIiwgaS5lLiBubyB0YXJnZXRzXG4gICAgICAgICAqIGNvdWxkIGJlIGZvdW5kIG1hdGNoaW5nIHRoZSByZXF1ZXN0ZWQgZmlsdGVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgbWl4RmFpbFxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5FdmVudHNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAdHlwZSAgICAgICAge0N1c3RvbUV2ZW50fVxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLm1peEZhaWwgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGN1c3RvbSBldmVudCB0cmlnZ2VyZWQgd2hlbmV2ZXIgYSBNaXhJdFVwIGNvbnRyb2wgaXMgY2xpY2tlZCwgYW5kIGJlZm9yZSBpdHNcbiAgICAgICAgICogcmVzcGVjdGl2ZSBvcGVyYXRpb24gaXMgcmVxdWVzdGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGFsc28gZXhwb3NlcyBhbiBgb3JpZ2luYWxFdmVudGAgcHJvcGVydHkgdmlhIHRoZSBgZXZlbnQuZGV0YWlsYFxuICAgICAgICAgKiBvYmplY3QsIHdoaWNoIGhvbGRzIGEgcmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBjbGljayBldmVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIG1peENsaWNrXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkV2ZW50c1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7Q3VzdG9tRXZlbnR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMubWl4Q2xpY2sgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLkV2ZW50cyk7XG5cbiAgICBtaXhpdHVwLkV2ZW50cy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5FdmVudHMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbWl4aXR1cC5FdmVudHM7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgZXZlbnRUeXBlXG4gICAgICogQHBhcmFtICAge0VsZW1lbnR9ICAgICBlbFxuICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgICAgZGV0YWlsXG4gICAgICogQHBhcmFtICAge0RvY3VtZW50fSAgICBbZG9jXVxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5FdmVudHMucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbihldmVudFR5cGUsIGVsLCBkZXRhaWwsIGRvYykge1xuICAgICAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZXZlbnQgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgZXZlbnREZXRhaWwgPSBuZXcgbWl4aXR1cC5FdmVudERldGFpbCgpO1xuXG4gICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUZpcmUnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZltldmVudFR5cGVdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFdmVudCB0eXBlIFwiJyArIGV2ZW50VHlwZSArICdcIiBub3QgZm91bmQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudERldGFpbC5zdGF0ZSA9IG5ldyBtaXhpdHVwLlN0YXRlKCk7XG5cbiAgICAgICAgaC5leHRlbmQoZXZlbnREZXRhaWwuc3RhdGUsIGRldGFpbC5zdGF0ZSk7XG5cbiAgICAgICAgaWYgKGRldGFpbC5mdXR1cmVTdGF0ZSkge1xuICAgICAgICAgICAgZXZlbnREZXRhaWwuZnV0dXJlU3RhdGUgPSBuZXcgbWl4aXR1cC5TdGF0ZSgpO1xuXG4gICAgICAgICAgICBoLmV4dGVuZChldmVudERldGFpbC5mdXR1cmVTdGF0ZSwgZGV0YWlsLmZ1dHVyZVN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50RGV0YWlsLmluc3RhbmNlID0gZGV0YWlsLmluc3RhbmNlO1xuXG4gICAgICAgIGlmIChkZXRhaWwub3JpZ2luYWxFdmVudCkge1xuICAgICAgICAgICAgZXZlbnREZXRhaWwub3JpZ2luYWxFdmVudCA9IGRldGFpbC5vcmlnaW5hbEV2ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQgPSBoLmdldEN1c3RvbUV2ZW50KGV2ZW50VHlwZSwgZXZlbnREZXRhaWwsIGRvYyk7XG5cbiAgICAgICAgc2VsZi5jYWxsRmlsdGVycygnZXZlbnRGaXJlJywgZXZlbnQsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfTtcblxuICAgIC8vIEFzaWduIGEgc2luZ2xldG9uIGluc3RhbmNlIHRvIGBtaXhpdHVwLmV2ZW50c2A6XG5cbiAgICBtaXhpdHVwLmV2ZW50cyA9IG5ldyBtaXhpdHVwLkV2ZW50cygpO1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5RdWV1ZUl0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgdGhpcy5hcmdzICAgICAgICAgICA9IFtdO1xuICAgICAgICB0aGlzLmluc3RydWN0aW9uICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy50cmlnZ2VyRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGVmZXJyZWQgICAgICAgPSBudWxsO1xuICAgICAgICB0aGlzLmlzVG9nZ2xpbmcgICAgID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuUXVldWVJdGVtKTtcblxuICAgIG1peGl0dXAuUXVldWVJdGVtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLlF1ZXVlSXRlbS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLlF1ZXVlSXRlbTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgbWl4aXR1cC5NaXhlcmAgY2xhc3MgaXMgdXNlZCB0byBob2xkIGRpc2NyZWV0LCB1c2VyLWNvbmZpZ3VyZWRcbiAgICAgKiBpbnN0YW5jZXMgb2YgTWl4SXRVcCBvbiBhIHByb3ZpZGVkIGNvbnRhaW5lciBlbGVtZW50LlxuICAgICAqXG4gICAgICogTWl4ZXIgaW5zdGFuY2VzIGFyZSByZXR1cm5lZCB3aGVuZXZlciB0aGUgYG1peGl0dXAoKWAgZmFjdG9yeSBmdW5jdGlvbiBpcyBjYWxsZWQsXG4gICAgICogd2hpY2ggZXhwb3NlIGEgcmFuZ2Ugb2YgbWV0aG9kcyBlbmFibGluZyBBUEktYmFzZWQgZmlsdGVyaW5nLCBzb3J0aW5nLFxuICAgICAqIGluc2VydGlvbiwgcmVtb3ZhbCBhbmQgbW9yZS5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cFxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuTWl4ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgdGhpcy5jb25maWcgICAgICAgICAgICA9IG5ldyBtaXhpdHVwLkNvbmZpZygpO1xuXG4gICAgICAgIHRoaXMuaWQgICAgICAgICAgICAgICAgPSAnJztcblxuICAgICAgICB0aGlzLmlzQnVzeSAgICAgICAgICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNUb2dnbGluZyAgICAgICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbmNQYWRkaW5nICAgICAgICA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5jb250cm9scyAgICAgICAgICA9IFtdO1xuICAgICAgICB0aGlzLnRhcmdldHMgICAgICAgICAgID0gW107XG4gICAgICAgIHRoaXMub3JpZ09yZGVyICAgICAgICAgPSBbXTtcbiAgICAgICAgdGhpcy5jYWNoZSAgICAgICAgICAgICA9IHt9O1xuXG4gICAgICAgIHRoaXMudG9nZ2xlQXJyYXkgICAgICAgPSBbXTtcblxuICAgICAgICB0aGlzLnRhcmdldHNNb3ZlZCAgICAgID0gMDtcbiAgICAgICAgdGhpcy50YXJnZXRzSW1tb3ZhYmxlICA9IDA7XG4gICAgICAgIHRoaXMudGFyZ2V0c0JvdW5kICAgICAgPSAwO1xuICAgICAgICB0aGlzLnRhcmdldHNEb25lICAgICAgID0gMDtcblxuICAgICAgICB0aGlzLnN0YWdnZXJEdXJhdGlvbiAgID0gMDtcbiAgICAgICAgdGhpcy5lZmZlY3RzSW4gICAgICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMuZWZmZWN0c091dCAgICAgICAgPSBudWxsO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUluICAgICAgID0gW107XG4gICAgICAgIHRoaXMudHJhbnNmb3JtT3V0ICAgICAgPSBbXTtcbiAgICAgICAgdGhpcy5xdWV1ZSAgICAgICAgICAgICA9IFtdO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgICAgICAgICAgICAgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RPcGVyYXRpb24gICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0Q2xpY2tlZCAgICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMudXNlckNhbGxiYWNrICAgICAgPSBudWxsO1xuICAgICAgICB0aGlzLnVzZXJEZWZlcnJlZCAgICAgID0gbnVsbDtcblxuICAgICAgICB0aGlzLmRvbSAgICAgICAgICAgICAgID0gbmV3IG1peGl0dXAuTWl4ZXJEb20oKTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5NaXhlcik7XG5cbiAgICBtaXhpdHVwLk1peGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBoLmV4dGVuZChtaXhpdHVwLk1peGVyLnByb3RvdHlwZSxcbiAgICAvKiogQGxlbmRzIG1peGl0dXAuTWl4ZXIgKi9cbiAgICB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBtaXhpdHVwLk1peGVyLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxuICAgICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkb2N1bWVudFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gICAgICBpZFxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gICAgICBbY29uZmlnXVxuICAgICAgICAgKi9cblxuICAgICAgICBhdHRhY2g6IGZ1bmN0aW9uKGNvbnRhaW5lciwgZG9jdW1lbnQsIGlkLCBjb25maWcpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB0YXJnZXQgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBpICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUF0dGFjaCcsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHNlbGYuaWQgPSBpZDtcblxuICAgICAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgICAgICAgIGguZXh0ZW5kKHNlbGYuY29uZmlnLCBjb25maWcsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLnNhbml0aXplQ29uZmlnKCk7XG5cbiAgICAgICAgICAgIHNlbGYuY2FjaGVEb20oY29udGFpbmVyLCBkb2N1bWVudCk7XG5cbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5sYXlvdXQuY29udGFpbmVyQ2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgaC5hZGRDbGFzcyhzZWxmLmRvbS5jb250YWluZXIsIHNlbGYuY29uZmlnLmxheW91dC5jb250YWluZXJDbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW1peGl0dXAuZmVhdHVyZXMuaGFzLnRyYW5zaXRpb25zKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcuYW5pbWF0aW9uLmVuYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5jb25zb2xlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLmRlYnVnLnNob3dXYXJuaW5ncyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuZGF0YS51aWRLZXkpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZGF0YXNldCBBUEkgaXMgaW4gdXNlLCBmb3JjZSBkaXNhYmxlIGNvbnRyb2xzXG5cbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5jb250cm9scy5lbmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5pbmRleFRhcmdldHMoKTtcblxuICAgICAgICAgICAgc2VsZi5zdGF0ZSA9IHNlbGYuZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IHNlbGYubGFzdE9wZXJhdGlvbi50b0hpZGVbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIHRhcmdldC5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5jb250cm9scy5lbmFibGUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmluaXRDb250cm9scygpO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5idWlsZFRvZ2dsZUFycmF5KG51bGwsIHNlbGYuc3RhdGUpO1xuXG4gICAgICAgICAgICAgICAgc2VsZi51cGRhdGVDb250cm9scyh7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogc2VsZi5zdGF0ZS5hY3RpdmVGaWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IHNlbGYuc3RhdGUuYWN0aXZlU29ydFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLnBhcnNlRWZmZWN0cygpO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlckF0dGFjaCcsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgMy4wLjBcbiAgICAgICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgc2FuaXRpemVDb25maWc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVTYW5pdGl6ZUNvbmZpZycsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIC8vIFNhbml0aXplIGVudW0vc3RyaW5nIGNvbmZpZyBvcHRpb25zXG5cbiAgICAgICAgICAgIHNlbGYuY29uZmlnLmNvbnRyb2xzLnNjb3BlICAgICAgICAgID0gc2VsZi5jb25maWcuY29udHJvbHMuc2NvcGUudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5jb250cm9scy50b2dnbGVMb2dpYyAgICA9IHNlbGYuY29uZmlnLmNvbnRyb2xzLnRvZ2dsZUxvZ2ljLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICAgICAgICAgICAgc2VsZi5jb25maWcuY29udHJvbHMudG9nZ2xlRGVmYXVsdCAgPSBzZWxmLmNvbmZpZy5jb250cm9scy50b2dnbGVEZWZhdWx0LnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5hbmltYXRpb24uZWZmZWN0cyAgICAgICA9IHNlbGYuY29uZmlnLmFuaW1hdGlvbi5lZmZlY3RzLnRyaW0oKTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJTYW5pdGl6ZUNvbmZpZycsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcmV0dXJuICB7bWl4aXR1cC5TdGF0ZX1cbiAgICAgICAgICovXG5cbiAgICAgICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgc3RhdGUgICAgICAgPSBuZXcgbWl4aXR1cC5TdGF0ZSgpLFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbiAgID0gbmV3IG1peGl0dXAuT3BlcmF0aW9uKCk7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUdldEluaXRpYWxTdGF0ZScsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIC8vIE1hcCBpbml0aWFsIHZhbHVlcyBpbnRvIGEgbW9jayBzdGF0ZSBvYmplY3QgaW4gb3JkZXIgdG8gY29uc3RydWN0IGFuIG9wZXJhdGlvblxuXG4gICAgICAgICAgICBzdGF0ZS5hY3RpdmVDb250YWluZXJDbGFzc05hbWUgPSBzZWxmLmNvbmZpZy5sYXlvdXQuY29udGFpbmVyQ2xhc3NOYW1lO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubG9hZC5kYXRhc2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gRGF0YXNldCBBUElcblxuICAgICAgICAgICAgICAgIGlmICghc2VsZi5jb25maWcuZGF0YS51aWRLZXkgfHwgdHlwZW9mIHNlbGYuY29uZmlnLmRhdGEudWlkS2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKG1peGl0dXAubWVzc2FnZXMuZXJyb3JDb25maWdEYXRhVWlkS2V5Tm90U2V0KCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5zdGFydERhdGFzZXQgPSBvcGVyYXRpb24ubmV3RGF0YXNldCA9IHN0YXRlLmFjdGl2ZURhdGFzZXQgPSBzZWxmLmNvbmZpZy5sb2FkLmRhdGFzZXQuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24uc3RhcnRDb250YWluZXJDbGFzc05hbWUgPSBvcGVyYXRpb24ubmV3Q29udGFpbmVyQ2xhc3NOYW1lID0gc3RhdGUuYWN0aXZlQ29udGFpbmVyQ2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5zaG93ID0gc2VsZi50YXJnZXRzLnNsaWNlKCk7XG5cbiAgICAgICAgICAgICAgICBzdGF0ZSA9IHNlbGYuY2FsbEZpbHRlcnMoJ3N0YXRlR2V0SW5pdGlhbFN0YXRlJywgc3RhdGUsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIERPTSBBUElcblxuICAgICAgICAgICAgICAgIHN0YXRlLmFjdGl2ZUZpbHRlciAgICAgICAgICAgICAgPSBzZWxmLnBhcnNlRmlsdGVyQXJncyhbc2VsZi5jb25maWcubG9hZC5maWx0ZXJdKS5jb21tYW5kO1xuICAgICAgICAgICAgICAgIHN0YXRlLmFjdGl2ZVNvcnQgICAgICAgICAgICAgICAgPSBzZWxmLnBhcnNlU29ydEFyZ3MoW3NlbGYuY29uZmlnLmxvYWQuc29ydF0pLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgc3RhdGUudG90YWxUYXJnZXRzICAgICAgICAgICAgICA9IHNlbGYudGFyZ2V0cy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBzdGF0ZSA9IHNlbGYuY2FsbEZpbHRlcnMoJ3N0YXRlR2V0SW5pdGlhbFN0YXRlJywgc3RhdGUsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmFjdGl2ZVNvcnQuY29sbGVjdGlvbiB8fCBzdGF0ZS5hY3RpdmVTb3J0LmF0dHJpYnV0ZSB8fFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5hY3RpdmVTb3J0Lm9yZGVyID09PSAncmFuZG9tJyB8fCBzdGF0ZS5hY3RpdmVTb3J0Lm9yZGVyID09PSAnZGVzYydcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU29ydGluZyBvbiBsb2FkXG5cbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLm5ld1NvcnQgPSBzdGF0ZS5hY3RpdmVTb3J0O1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc29ydE9wZXJhdGlvbihvcGVyYXRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucHJpbnRTb3J0KGZhbHNlLCBvcGVyYXRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGFyZ2V0cyA9IG9wZXJhdGlvbi5uZXdPcmRlcjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb24uc3RhcnRPcmRlciA9IG9wZXJhdGlvbi5uZXdPcmRlciA9IHNlbGYudGFyZ2V0cztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBvcGVyYXRpb24uc3RhcnRGaWx0ZXIgICAgICAgICAgICAgICA9IG9wZXJhdGlvbi5uZXdGaWx0ZXIgICAgICAgICAgICAgICA9IHN0YXRlLmFjdGl2ZUZpbHRlcjtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24uc3RhcnRTb3J0ICAgICAgICAgICAgICAgICA9IG9wZXJhdGlvbi5uZXdTb3J0ICAgICAgICAgICAgICAgICA9IHN0YXRlLmFjdGl2ZVNvcnQ7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnN0YXJ0Q29udGFpbmVyQ2xhc3NOYW1lICAgPSBvcGVyYXRpb24ubmV3Q29udGFpbmVyQ2xhc3NOYW1lICAgPSBzdGF0ZS5hY3RpdmVDb250YWluZXJDbGFzc05hbWU7XG5cbiAgICAgICAgICAgICAgICBpZiAob3BlcmF0aW9uLm5ld0ZpbHRlci5zZWxlY3RvciA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLm5ld0ZpbHRlci5zZWxlY3RvciA9IHNlbGYuY29uZmlnLnNlbGVjdG9ycy50YXJnZXQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24ubmV3RmlsdGVyLnNlbGVjdG9yID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLm5ld0ZpbHRlci5zZWxlY3RvciA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3BlcmF0aW9uID0gc2VsZi5jYWxsRmlsdGVycygnb3BlcmF0aW9uR2V0SW5pdGlhbFN0YXRlJywgb3BlcmF0aW9uLCBbc3RhdGVdKTtcblxuICAgICAgICAgICAgc2VsZi5sYXN0T3BlcmF0aW9uID0gb3BlcmF0aW9uO1xuXG4gICAgICAgICAgICBpZiAob3BlcmF0aW9uLm5ld0ZpbHRlcikge1xuICAgICAgICAgICAgICAgIHNlbGYuZmlsdGVyT3BlcmF0aW9uKG9wZXJhdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlID0gc2VsZi5idWlsZFN0YXRlKG9wZXJhdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FjaGVzIHJlZmVyZW5jZXMgb2YgRE9NIGVsZW1lbnRzIG5lY2Nlc3NhcnkgZm9yIHRoZSBtaXhlcidzIGZ1bmN0aW9uYWxpdHkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7SFRNTEVsZW1lbnR9ICAgICAgIGVsXG4gICAgICAgICAqIEBwYXJhbSAgIHtIVE1MSHRtbEVsZW1lbnR9ICAgZG9jdW1lbnRcbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGNhY2hlRG9tOiBmdW5jdGlvbihlbCwgZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgID0gdGhpcztcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlQ2FjaGVEb20nLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBzZWxmLmRvbS5kb2N1bWVudCAgPSBkb2N1bWVudDtcbiAgICAgICAgICAgIHNlbGYuZG9tLmJvZHkgICAgICA9IHNlbGYuZG9tLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgICAgIHNlbGYuZG9tLmNvbnRhaW5lciA9IGVsO1xuICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50ICAgID0gZWw7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyQ2FjaGVEb20nLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmRleGVzIGFsbCBjaGlsZCBlbGVtZW50cyBvZiB0aGUgbWl4ZXIgbWF0Y2hpbmcgdGhlIGBzZWxlY3RvcnMudGFyZ2V0YFxuICAgICAgICAgKiBzZWxlY3RvciwgaW5zdGFudGlhdGluZyBhIG1peGl0dXAuVGFyZ2V0IGZvciBlYWNoIG9uZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDMuMC4wXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBpbmRleFRhcmdldHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgdGFyZ2V0ICAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBlbCAgICAgICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGRhdGFzZXQgICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUluZGV4VGFyZ2V0cycsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHNlbGYuZG9tLnRhcmdldHMgPSBzZWxmLmNvbmZpZy5sYXlvdXQuYWxsb3dOZXN0ZWRUYXJnZXRzID9cbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChzZWxmLmNvbmZpZy5zZWxlY3RvcnMudGFyZ2V0KSA6XG4gICAgICAgICAgICAgICAgaC5jaGlsZHJlbihzZWxmLmRvbS5jb250YWluZXIsIHNlbGYuY29uZmlnLnNlbGVjdG9ycy50YXJnZXQsIHNlbGYuZG9tLmRvY3VtZW50KTtcblxuICAgICAgICAgICAgc2VsZi5kb20udGFyZ2V0cyA9IGguYXJyYXlGcm9tTGlzdChzZWxmLmRvbS50YXJnZXRzKTtcblxuICAgICAgICAgICAgc2VsZi50YXJnZXRzID0gW107XG5cbiAgICAgICAgICAgIGlmICgoZGF0YXNldCA9IHNlbGYuY29uZmlnLmxvYWQuZGF0YXNldCkgJiYgZGF0YXNldC5sZW5ndGggIT09IHNlbGYuZG9tLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1peGl0dXAubWVzc2FnZXMuZXJyb3JEYXRhc2V0UHJlcmVuZGVyZWRNaXNtYXRjaCgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlbGYuZG9tLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgZWwgPSBzZWxmLmRvbS50YXJnZXRzW2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gbmV3IG1peGl0dXAuVGFyZ2V0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmluaXQoZWwsIHNlbGYsIGRhdGFzZXQgPyBkYXRhc2V0W2ldIDogdm9pZCgwKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmlzSW5Eb20gPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGFyZ2V0cy5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50ID0gc2VsZi5kb20udGFyZ2V0c1swXS5wYXJlbnRFbGVtZW50ID09PSBzZWxmLmRvbS5jb250YWluZXIgP1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRvbS5jb250YWluZXIgOlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRvbS50YXJnZXRzWzBdLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYub3JpZ09yZGVyID0gc2VsZi50YXJnZXRzO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlckluZGV4VGFyZ2V0cycsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdENvbnRyb2xzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uICAgICAgICAgID0gJycsXG4gICAgICAgICAgICAgICAgY29udHJvbEVsZW1lbnRzICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgZWwgICAgICAgICAgICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgcGFyZW50ICAgICAgICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgZGVsYWdhdG9ycyAgICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgY29udHJvbCAgICAgICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgICAgICAgICA9IC0xLFxuICAgICAgICAgICAgICAgIGogICAgICAgICAgICAgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlSW5pdENvbnRyb2xzJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgc3dpdGNoIChzZWxmLmNvbmZpZy5jb250cm9scy5zY29wZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xvY2FsJzpcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gc2VsZi5kb20uY29udGFpbmVyO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2dsb2JhbCc6XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudCA9IHNlbGYuZG9tLmRvY3VtZW50O1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtaXhpdHVwLm1lc3NhZ2VzLmVycm9yQ29uZmlnSW52YWxpZENvbnRyb2xzU2NvcGUoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGRlZmluaXRpb24gPSBtaXhpdHVwLmNvbnRyb2xEZWZpbml0aW9uc1tpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmNvbnRyb2xzLmxpdmUgfHwgZGVmaW5pdGlvbi5saXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWZpbml0aW9uLnBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYWdhdG9ycyA9IHNlbGYuZG9tW2RlZmluaXRpb24ucGFyZW50XTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkZWxhZ2F0b3JzIHx8IGRlbGFnYXRvcnMubGVuZ3RoIDwgMCkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGVsYWdhdG9ycy5sZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYWdhdG9ycyA9IFtkZWxhZ2F0b3JzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGFnYXRvcnMgPSBbcGFyZW50XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IChlbCA9IGRlbGFnYXRvcnNbal0pOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2wgPSBzZWxmLmdldENvbnRyb2woZWwsICBkZWZpbml0aW9uLnR5cGUsIGRlZmluaXRpb24uc2VsZWN0b3IpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRyb2xzLnB1c2goY29udHJvbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sRWxlbWVudHMgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxmLmNvbmZpZy5zZWxlY3RvcnMuY29udHJvbCArIGRlZmluaXRpb24uc2VsZWN0b3IpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IChlbCA9IGNvbnRyb2xFbGVtZW50c1tqXSk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbCA9IHNlbGYuZ2V0Q29udHJvbChlbCwgZGVmaW5pdGlvbi50eXBlLCAnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29udHJvbCkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29udHJvbHMucHVzaChjb250cm9sKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJJbml0Q29udHJvbHMnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAge0hUTUxFbGVtZW50fSBlbFxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgIHR5cGVcbiAgICAgICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICBzZWxlY3RvclxuICAgICAgICAgKiBAcmV0dXJuICB7bWl4aXR1cC5Db250cm9sfG51bGx9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGdldENvbnRyb2w6IGZ1bmN0aW9uKGVsLCB0eXBlLCBzZWxlY3Rvcikge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGNvbnRyb2wgPSBudWxsLFxuICAgICAgICAgICAgICAgIGkgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlR2V0Q29udHJvbCcsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAvLyBTdGF0aWMgY29udHJvbHMgb25seVxuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgY29udHJvbCA9IG1peGl0dXAuY29udHJvbHNbaV07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udHJvbC5lbCA9PT0gZWwgJiYgY29udHJvbC5pc0JvdW5kKHNlbGYpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb250cm9sIGFscmVhZHkgYm91bmQgdG8gdGhpcyBtaXhlciAoYXMgYW5vdGhlciB0eXBlKS5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTkI6IFRoaXMgcHJldmVudHMgZHVwbGljYXRlIGNvbnRyb2xzIGZyb20gYmVpbmcgcmVnaXN0ZXJlZCB3aGVyZSBhIHNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtaWdodCBjb2xsaWRlLCBlZzogXCJbZGF0YS1maWx0ZXJdXCIgYW5kIFwiW2RhdGEtZmlsdGVyXVtkYXRhLXNvcnRdXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuY2FsbEZpbHRlcnMoJ2NvbnRyb2xHZXRDb250cm9sJywgbnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb250cm9sLmVsID09PSBlbCAmJiBjb250cm9sLnR5cGUgPT09IHR5cGUgJiYgY29udHJvbC5zZWxlY3RvciA9PT0gc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFub3RoZXIgbWl4ZXIgaXMgYWxyZWFkeSB1c2luZyB0aGlzIGNvbnRyb2wsIGFkZCB0aGlzIG1peGVyIGFzIGEgYmluZGluZ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sLmFkZEJpbmRpbmcoc2VsZik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmNhbGxGaWx0ZXJzKCdjb250cm9sR2V0Q29udHJvbCcsIGNvbnRyb2wsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgY29udHJvbFxuXG4gICAgICAgICAgICBjb250cm9sID0gbmV3IG1peGl0dXAuQ29udHJvbCgpO1xuXG4gICAgICAgICAgICBjb250cm9sLmluaXQoZWwsIHR5cGUsIHNlbGVjdG9yKTtcblxuICAgICAgICAgICAgY29udHJvbC5jbGFzc05hbWVzLmJhc2UgICAgID0gaC5nZXRDbGFzc25hbWUoc2VsZi5jb25maWcuY2xhc3NOYW1lcywgdHlwZSk7XG4gICAgICAgICAgICBjb250cm9sLmNsYXNzTmFtZXMuYWN0aXZlICAgPSBoLmdldENsYXNzbmFtZShzZWxmLmNvbmZpZy5jbGFzc05hbWVzLCB0eXBlLCBzZWxmLmNvbmZpZy5jbGFzc05hbWVzLm1vZGlmaWVyQWN0aXZlKTtcbiAgICAgICAgICAgIGNvbnRyb2wuY2xhc3NOYW1lcy5kaXNhYmxlZCA9IGguZ2V0Q2xhc3NuYW1lKHNlbGYuY29uZmlnLmNsYXNzTmFtZXMsIHR5cGUsIHNlbGYuY29uZmlnLmNsYXNzTmFtZXMubW9kaWZpZXJEaXNhYmxlZCk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBhIHJlZmVyZW5jZSB0byB0aGlzIG1peGVyIGFzIGEgYmluZGluZ1xuXG4gICAgICAgICAgICBjb250cm9sLmFkZEJpbmRpbmcoc2VsZik7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNhbGxGaWx0ZXJzKCdjb250cm9sR2V0Q29udHJvbCcsIGNvbnRyb2wsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBjb21wb3VuZCBzZWxlY3RvciBieSBqb2luaW5nIHRoZSBgdG9nZ2xlQXJyYXlgIHZhbHVlIGFzIHBlciB0aGVcbiAgICAgICAgICogZGVmaW5lZCB0b2dnbGUgbG9naWMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcmV0dXJuICB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgICAgICBnZXRUb2dnbGVTZWxlY3RvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBkZWxpbmVhdG9yICAgICAgPSBzZWxmLmNvbmZpZy5jb250cm9scy50b2dnbGVMb2dpYyA9PT0gJ29yJyA/ICcsICcgOiAnJyxcbiAgICAgICAgICAgICAgICB0b2dnbGVTZWxlY3RvciAgPSAnJztcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlR2V0VG9nZ2xlU2VsZWN0b3InLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBzZWxmLnRvZ2dsZUFycmF5ID0gaC5jbGVhbihzZWxmLnRvZ2dsZUFycmF5KTtcblxuICAgICAgICAgICAgdG9nZ2xlU2VsZWN0b3IgPSBzZWxmLnRvZ2dsZUFycmF5LmpvaW4oZGVsaW5lYXRvcik7XG5cbiAgICAgICAgICAgIGlmICh0b2dnbGVTZWxlY3RvciA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICB0b2dnbGVTZWxlY3RvciA9IHNlbGYuY29uZmlnLmNvbnRyb2xzLnRvZ2dsZURlZmF1bHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNhbGxGaWx0ZXJzKCdzZWxlY3RvckdldFRvZ2dsZVNlbGVjdG9yJywgdG9nZ2xlU2VsZWN0b3IsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJyZWFrcyBjb21wb3VuZCBzZWxlY3RvciBzdHJpbmdzIGluIGFuIGFycmF5IG9mIGRpc2NyZWV0IHNlbGVjdG9ycyxcbiAgICAgICAgICogYXMgcGVyIHRoZSBhY3RpdmUgYGNvbnRyb2xzLnRvZ2dsZUxvZ2ljYCBjb25maWd1cmF0aW9uIG9wdGlvbi4gQWNjZXB0c1xuICAgICAgICAgKiBlaXRoZXIgYSBkeW5hbWljIGNvbW1hbmQgb2JqZWN0LCBvciBhIHN0YXRlIG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDIuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgICAgICBbY29tbWFuZF1cbiAgICAgICAgICogQHBhcmFtICAge21peGl0dXAuU3RhdGV9IFtzdGF0ZV1cbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGJ1aWxkVG9nZ2xlQXJyYXk6IGZ1bmN0aW9uKGNvbW1hbmQsIHN0YXRlKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUZpbHRlclNlbGVjdG9yICAgID0gJyc7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUJ1aWxkVG9nZ2xlQXJyYXknLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBpZiAoY29tbWFuZCAmJiBjb21tYW5kLmZpbHRlcikge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUZpbHRlclNlbGVjdG9yID0gY29tbWFuZC5maWx0ZXIuc2VsZWN0b3IucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVGaWx0ZXJTZWxlY3RvciA9IHN0YXRlLmFjdGl2ZUZpbHRlci5zZWxlY3Rvci5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhY3RpdmVGaWx0ZXJTZWxlY3RvciA9PT0gc2VsZi5jb25maWcuc2VsZWN0b3JzLnRhcmdldCB8fCBhY3RpdmVGaWx0ZXJTZWxlY3RvciA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVGaWx0ZXJTZWxlY3RvciA9ICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuY29udHJvbHMudG9nZ2xlTG9naWMgPT09ICdvcicpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnRvZ2dsZUFycmF5ID0gYWN0aXZlRmlsdGVyU2VsZWN0b3Iuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi50b2dnbGVBcnJheSA9IHNlbGYuc3BsaXRDb21wb3VuZFNlbGVjdG9yKGFjdGl2ZUZpbHRlclNlbGVjdG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi50b2dnbGVBcnJheSA9IGguY2xlYW4oc2VsZi50b2dnbGVBcnJheSk7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyQnVpbGRUb2dnbGVBcnJheScsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRha2VzIGEgY29tcG91bmQgc2VsZWN0b3IgKGUuZy4gYC5jYXQtMS5jYXQtMmAsIGBbZGF0YS1jYXQ9XCIxXCJdW2RhdGEtY2F0PVwiMlwiXWApXG4gICAgICAgICAqIGFuZCBicmVha3MgaW50byBpdHMgaW5kaXZpZHVhbCBzZWxlY3RvcnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSBjb21wb3VuZFNlbGVjdG9yXG4gICAgICAgICAqIEByZXR1cm4gIHtzdHJpbmdbXX1cbiAgICAgICAgICovXG5cbiAgICAgICAgc3BsaXRDb21wb3VuZFNlbGVjdG9yOiBmdW5jdGlvbihjb21wb3VuZFNlbGVjdG9yKSB7XG4gICAgICAgICAgICAvLyBCcmVhayBhdCBhIGAuYCBvciBgW2AsIGNhcHR1cmluZyB0aGUgZGVsaW5lYXRvclxuXG4gICAgICAgICAgICB2YXIgcGFydGlhbHMgICAgPSBjb21wb3VuZFNlbGVjdG9yLnNwbGl0KC8oW1xcLlxcW10pL2cpLFxuICAgICAgICAgICAgICAgIHRvZ2dsZUFycmF5ID0gW10sXG4gICAgICAgICAgICAgICAgc2VsZWN0b3IgICAgPSAnJyxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBpZiAocGFydGlhbHNbMF0gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcGFydGlhbHMuc2hpZnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcnRpYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZWN0b3IgKz0gcGFydGlhbHNbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAoaSAlIDIgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQXJyYXkucHVzaChzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdG9nZ2xlQXJyYXk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVwZGF0ZXMgY29udHJvbHMgdG8gdGhlaXIgYWN0aXZlL2luYWN0aXZlIHN0YXRlIGJhc2VkIG9uIHRoZSBjb21tYW5kIG9yXG4gICAgICAgICAqIGN1cnJlbnQgc3RhdGUgb2YgdGhlIG1peGVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMi4wLjBcbiAgICAgICAgICogQHBhcmFtICAge29iamVjdH0gY29tbWFuZFxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgdXBkYXRlQ29udHJvbHM6IGZ1bmN0aW9uKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBjb250cm9sID0gbnVsbCxcbiAgICAgICAgICAgICAgICBvdXRwdXQgID0gbmV3IG1peGl0dXAuQ29tbWFuZE11bHRpbWl4KCksXG4gICAgICAgICAgICAgICAgaSAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVVcGRhdGVDb250cm9scycsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIC8vIFNhbml0aXNlIHRvIGRlZmF1bHRzXG5cbiAgICAgICAgICAgIGlmIChjb21tYW5kLmZpbHRlcikge1xuICAgICAgICAgICAgICAgIG91dHB1dC5maWx0ZXIgPSBjb21tYW5kLmZpbHRlci5zZWxlY3RvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0LmZpbHRlciA9IHNlbGYuc3RhdGUuYWN0aXZlRmlsdGVyLnNlbGVjdG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY29tbWFuZC5zb3J0KSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnNvcnQgPSBzZWxmLmJ1aWxkU29ydFN0cmluZyhjb21tYW5kLnNvcnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQuc29ydCA9IHNlbGYuYnVpbGRTb3J0U3RyaW5nKHNlbGYuc3RhdGUuYWN0aXZlU29ydCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvdXRwdXQuZmlsdGVyID09PSBzZWxmLmNvbmZpZy5zZWxlY3RvcnMudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0LmZpbHRlciA9ICdhbGwnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3V0cHV0LmZpbHRlciA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQuZmlsdGVyID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoLmZyZWV6ZShvdXRwdXQpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBjb250cm9sID0gc2VsZi5jb250cm9sc1tpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbC51cGRhdGUob3V0cHV0LCBzZWxmLnRvZ2dsZUFycmF5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJVcGRhdGVDb250cm9scycsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7bWl4aXR1cC5Db21tYW5kU29ydH0gICBjb21tYW5kXG4gICAgICAgICAqIEByZXR1cm4gIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGJ1aWxkU29ydFN0cmluZzogZnVuY3Rpb24oY29tbWFuZCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIG91dHB1dCAgPSAnJztcblxuICAgICAgICAgICAgb3V0cHV0ICs9IGNvbW1hbmQuc29ydFN0cmluZztcblxuICAgICAgICAgICAgaWYgKGNvbW1hbmQubmV4dCkge1xuICAgICAgICAgICAgICAgIG91dHB1dCArPSAnICcgKyBzZWxmLmJ1aWxkU29ydFN0cmluZyhjb21tYW5kLm5leHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAge29iamVjdH0gICAgICAgIGNvbW1hbmRcbiAgICAgICAgICogQHBhcmFtICAge09wZXJhdGlvbn0gICAgIG9wZXJhdGlvblxuICAgICAgICAgKiBAcmV0dXJuICB7UHJvbWlzZS48bWl4aXR1cC5TdGF0ZT59XG4gICAgICAgICAqL1xuXG4gICAgICAgIGluc2VydFRhcmdldHM6IGZ1bmN0aW9uKGNvbW1hbmQsIG9wZXJhdGlvbikge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgbmV4dFNpYmxpbmcgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBpbnNlcnRpb25JbmRleCAgPSAtMSxcbiAgICAgICAgICAgICAgICBmcmFnICAgICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIHRhcmdldCAgICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgZWwgICAgICAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlSW5zZXJ0VGFyZ2V0cycsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29tbWFuZC5pbmRleCA9PT0gJ3VuZGVmaW5lZCcpIGNvbW1hbmQuaW5kZXggPSAwO1xuXG4gICAgICAgICAgICBuZXh0U2libGluZyA9IHNlbGYuZ2V0TmV4dFNpYmxpbmcoY29tbWFuZC5pbmRleCwgY29tbWFuZC5zaWJsaW5nLCBjb21tYW5kLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGZyYWcgICAgICAgID0gc2VsZi5kb20uZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICAgICAgICBpZiAobmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICBpbnNlcnRpb25JbmRleCA9IGguaW5kZXgobmV4dFNpYmxpbmcsIHNlbGYuY29uZmlnLnNlbGVjdG9ycy50YXJnZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnNlcnRpb25JbmRleCA9IHNlbGYudGFyZ2V0cy5sZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb21tYW5kLmNvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBlbCA9IGNvbW1hbmQuY29sbGVjdGlvbltpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmRvbS50YXJnZXRzLmluZGV4T2YoZWwpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtaXhpdHVwLm1lc3NhZ2VzLmVycm9ySW5zZXJ0UHJlZXhpc3RpbmdFbGVtZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRW5zdXJlIGVsZW1lbnRzIGFyZSBoaWRkZW4gd2hlbiB0aGV5IGFyZSBhZGRlZCB0byB0aGUgRE9NLCBzbyB0aGV5IGNhblxuICAgICAgICAgICAgICAgICAgICAvLyBiZSBhbmltYXRlZCBpbiBncmFjZWZ1bGx5XG5cbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgZnJhZy5hcHBlbmRDaGlsZChzZWxmLmRvbS5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnICcpKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWguaXNFbGVtZW50KGVsLCBzZWxmLmRvbS5kb2N1bWVudCkgfHwgIWVsLm1hdGNoZXMoc2VsZi5jb25maWcuc2VsZWN0b3JzLnRhcmdldCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IG5ldyBtaXhpdHVwLlRhcmdldCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5pbml0KGVsLCBzZWxmKTtcblxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuaXNJbkRvbSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi50YXJnZXRzLnNwbGljZShpbnNlcnRpb25JbmRleCwgMCwgdGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRpb25JbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudC5pbnNlcnRCZWZvcmUoZnJhZywgbmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTaW5jZSB0YXJnZXRzIGhhdmUgYmVlbiBhZGRlZCwgdGhlIG9yaWdpbmFsIG9yZGVyIG11c3QgYmUgdXBkYXRlZFxuXG4gICAgICAgICAgICBvcGVyYXRpb24uc3RhcnRPcmRlciA9IHNlbGYub3JpZ09yZGVyID0gc2VsZi50YXJnZXRzO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlckluc2VydFRhcmdldHMnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAge051bWJlcn0gICAgICBbaW5kZXhdXG4gICAgICAgICAqIEBwYXJhbSAgIHtFbGVtZW50fSAgICAgW3NpYmxpbmddXG4gICAgICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgW3Bvc2l0aW9uXVxuICAgICAgICAgKiBAcmV0dXJuICB7RWxlbWVudH1cbiAgICAgICAgICovXG5cbiAgICAgICAgZ2V0TmV4dFNpYmxpbmc6IGZ1bmN0aW9uKGluZGV4LCBzaWJsaW5nLCBwb3NpdGlvbikge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBudWxsO1xuXG4gICAgICAgICAgICBpbmRleCA9IE1hdGgubWF4KGluZGV4LCAwKTtcblxuICAgICAgICAgICAgaWYgKHNpYmxpbmcgJiYgcG9zaXRpb24gPT09ICdiZWZvcmUnKSB7XG4gICAgICAgICAgICAgICAgLy8gRXhwbGljaXQgc2libGluZ1xuXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IHNpYmxpbmc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNpYmxpbmcgJiYgcG9zaXRpb24gPT09ICdhZnRlcicpIHtcbiAgICAgICAgICAgICAgICAvLyBFeHBsaWNpdCBzaWJsaW5nXG5cbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gc2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcgfHwgbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi50YXJnZXRzLmxlbmd0aCA+IDAgJiYgdHlwZW9mIGluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIC8vIEluZGV4IGFuZCB0YXJnZXRzIGV4aXN0XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gKGluZGV4IDwgc2VsZi50YXJnZXRzLmxlbmd0aCB8fCAhc2VsZi50YXJnZXRzLmxlbmd0aCkgP1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnRhcmdldHNbaW5kZXhdLmRvbS5lbCA6XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGFyZ2V0c1tzZWxmLnRhcmdldHMubGVuZ3RoIC0gMV0uZG9tLmVsLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi50YXJnZXRzLmxlbmd0aCA9PT0gMCAmJiBzZWxmLmRvbS5wYXJlbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIE5vIHRhcmdldHMgYnV0IG90aGVyIHNpYmxpbmdzXG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubGF5b3V0LnNpYmxpbmdBZnRlcikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gc2VsZi5jb25maWcubGF5b3V0LnNpYmxpbmdBZnRlcjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGYuY29uZmlnLmxheW91dC5zaWJsaW5nQmVmb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBzZWxmLmNvbmZpZy5sYXlvdXQuc2libGluZ0JlZm9yZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50LmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9PT0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuY2FsbEZpbHRlcnMoJ2VsZW1lbnRHZXROZXh0U2libGluZycsIGVsZW1lbnQsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAyLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7T3BlcmF0aW9ufSAgICAgb3BlcmF0aW9uXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBmaWx0ZXJPcGVyYXRpb246IGZ1bmN0aW9uKG9wZXJhdGlvbikge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB0ZXN0UmVzdWx0ICA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZGV4ICAgICAgID0gLTEsXG4gICAgICAgICAgICAgICAgYWN0aW9uICAgICAgPSAnJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlRmlsdGVyT3BlcmF0aW9uJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgYWN0aW9uID0gb3BlcmF0aW9uLm5ld0ZpbHRlci5hY3Rpb247XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IG9wZXJhdGlvbi5uZXdPcmRlcltpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi5uZXdGaWx0ZXIuY29sbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAvLyBzaG93IHZpYSBjb2xsZWN0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgdGVzdFJlc3VsdCA9IG9wZXJhdGlvbi5uZXdGaWx0ZXIuY29sbGVjdGlvbi5pbmRleE9mKHRhcmdldC5kb20uZWwpID4gLTE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2hvdyB2aWEgc2VsZWN0b3JcblxuICAgICAgICAgICAgICAgICAgICBpZiAob3BlcmF0aW9uLm5ld0ZpbHRlci5zZWxlY3RvciA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlc3RSZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlc3RSZXN1bHQgPSB0YXJnZXQuZG9tLmVsLm1hdGNoZXMob3BlcmF0aW9uLm5ld0ZpbHRlci5zZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWxmLmV2YWx1YXRlSGlkZVNob3codGVzdFJlc3VsdCwgdGFyZ2V0LCBhY3Rpb24sIG9wZXJhdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcGVyYXRpb24udG9SZW1vdmUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgdGFyZ2V0ID0gb3BlcmF0aW9uLnNob3dbaV07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3BlcmF0aW9uLnRvUmVtb3ZlLmluZGV4T2YodGFyZ2V0KSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBhbnkgc2hvd24gdGFyZ2V0cyBzaG91bGQgYmUgcmVtb3ZlZCwgbW92ZSB0aGVtIGludG8gdGhlIHRvSGlkZSBhcnJheVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb24uc2hvdy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoaW5kZXggPSBvcGVyYXRpb24udG9TaG93LmluZGV4T2YodGFyZ2V0KSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi50b1Nob3cuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnRvSGlkZS5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb24uaGlkZS5wdXNoKHRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3BlcmF0aW9uLm1hdGNoaW5nID0gb3BlcmF0aW9uLnNob3cuc2xpY2UoKTtcblxuICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi5zaG93Lmxlbmd0aCA9PT0gMCAmJiBvcGVyYXRpb24ubmV3RmlsdGVyLnNlbGVjdG9yICE9PSAnJyAmJiBzZWxmLnRhcmdldHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLmhhc0ZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyRmlsdGVyT3BlcmF0aW9uJywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtib29sZWFufSAgIHRlc3RSZXN1bHRcbiAgICAgICAgICogQHBhcmFtICAge0VsZW1lbnR9ICAgdGFyZ2V0XG4gICAgICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgIGFjdGlvblxuICAgICAgICAgKiBAcGFyYW0gICB7T3BlcmF0aW9ufSBvcGVyYXRpb25cbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGV2YWx1YXRlSGlkZVNob3c6IGZ1bmN0aW9uKHRlc3RSZXN1bHQsIHRhcmdldCwgYWN0aW9uLCBvcGVyYXRpb24pIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlRXZhbHVhdGVIaWRlU2hvdycsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmICh0ZXN0UmVzdWx0ID09PSB0cnVlICYmIGFjdGlvbiA9PT0gJ3Nob3cnIHx8IHRlc3RSZXN1bHQgPT09IGZhbHNlICYmIGFjdGlvbiA9PT0gJ2hpZGUnKSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnNob3cucHVzaCh0YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgIXRhcmdldC5pc1Nob3duICYmIG9wZXJhdGlvbi50b1Nob3cucHVzaCh0YXJnZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24uaGlkZS5wdXNoKHRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICB0YXJnZXQuaXNTaG93biAmJiBvcGVyYXRpb24udG9IaWRlLnB1c2godGFyZ2V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJFdmFsdWF0ZUhpZGVTaG93JywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDIuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtPcGVyYXRpb259ICAgICBvcGVyYXRpb25cbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHNvcnRPcGVyYXRpb246IGZ1bmN0aW9uKG9wZXJhdGlvbikge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVTb3J0T3BlcmF0aW9uJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgb3BlcmF0aW9uLnN0YXJ0T3JkZXIgPSBzZWxmLnRhcmdldHM7XG5cbiAgICAgICAgICAgIGlmIChvcGVyYXRpb24ubmV3U29ydC5jb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gU29ydCBieSBjb2xsZWN0aW9uXG5cbiAgICAgICAgICAgICAgICBvcGVyYXRpb24ubmV3T3JkZXIgPSBvcGVyYXRpb24ubmV3U29ydC5jb2xsZWN0aW9uO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24ubmV3U29ydC5vcmRlciA9PT0gJ3JhbmRvbScpIHtcbiAgICAgICAgICAgICAgICAvLyBTb3J0IHJhbmRvbVxuXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLm5ld09yZGVyID0gaC5hcnJheVNodWZmbGUob3BlcmF0aW9uLnN0YXJ0T3JkZXIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24ubmV3U29ydC5hdHRyaWJ1dGUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgLy8gU29ydCBieSBkZWZhdWx0XG5cbiAgICAgICAgICAgICAgICBvcGVyYXRpb24ubmV3T3JkZXIgPSBzZWxmLm9yaWdPcmRlci5zbGljZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi5uZXdTb3J0Lm9yZGVyID09PSAnZGVzYycpIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLm5ld09yZGVyLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFNvcnQgYnkgYXR0cmlidXRlXG5cbiAgICAgICAgICAgICAgICBvcGVyYXRpb24ubmV3T3JkZXIgPSBvcGVyYXRpb24uc3RhcnRPcmRlci5zbGljZSgpO1xuXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLm5ld09yZGVyLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5jb21wYXJlKGEsIGIsIG9wZXJhdGlvbi5uZXdTb3J0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGguaXNFcXVhbEFycmF5KG9wZXJhdGlvbi5uZXdPcmRlciwgb3BlcmF0aW9uLnN0YXJ0T3JkZXIpKSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLndpbGxTb3J0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyU29ydE9wZXJhdGlvbicsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAyLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7bWl4aXR1cC5UYXJnZXR9ICAgICAgICBhXG4gICAgICAgICAqIEBwYXJhbSAgIHttaXhpdHVwLlRhcmdldH0gICAgICAgIGJcbiAgICAgICAgICogQHBhcmFtICAge21peGl0dXAuQ29tbWFuZFNvcnR9ICAgY29tbWFuZFxuICAgICAgICAgKiBAcmV0dXJuICB7TnVtYmVyfVxuICAgICAgICAgKi9cblxuICAgICAgICBjb21wYXJlOiBmdW5jdGlvbihhLCBiLCBjb21tYW5kKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIG9yZGVyICAgICAgID0gY29tbWFuZC5vcmRlcixcbiAgICAgICAgICAgICAgICBhdHRyQSAgICAgICA9IHNlbGYuZ2V0QXR0cmlidXRlVmFsdWUoYSwgY29tbWFuZC5hdHRyaWJ1dGUpLFxuICAgICAgICAgICAgICAgIGF0dHJCICAgICAgID0gc2VsZi5nZXRBdHRyaWJ1dGVWYWx1ZShiLCBjb21tYW5kLmF0dHJpYnV0ZSk7XG5cbiAgICAgICAgICAgIGlmIChpc05hTihhdHRyQSAqIDEpIHx8IGlzTmFOKGF0dHJCICogMSkpIHtcbiAgICAgICAgICAgICAgICBhdHRyQSA9IGF0dHJBLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgYXR0ckIgPSBhdHRyQi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhdHRyQSA9IGF0dHJBICogMTtcbiAgICAgICAgICAgICAgICBhdHRyQiA9IGF0dHJCICogMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGF0dHJBIDwgYXR0ckIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JkZXIgPT09ICdhc2MnID8gLTEgOiAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYXR0ckEgPiBhdHRyQikge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcmRlciA9PT0gJ2FzYycgPyAxIDogLTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhdHRyQSA9PT0gYXR0ckIgJiYgY29tbWFuZC5uZXh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuY29tcGFyZShhLCBiLCBjb21tYW5kLm5leHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVhZHMgdGhlIHZhbHVlcyBvZiBhbnkgZGF0YSBhdHRyaWJ1dGVzIHByZXNlbnQgdGhlIHByb3ZpZGVkIHRhcmdldCBlbGVtZW50XG4gICAgICAgICAqIHdoaWNoIG1hdGNoIHRoZSBjdXJyZW50IHNvcnQgY29tbWFuZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHttaXhpdHVwLlRhcmdldH0gICAgdGFyZ2V0XG4gICAgICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgICAgICAgW2F0dHJpYnV0ZV1cbiAgICAgICAgICogQHJldHVybiAgeyhTdHJpbmd8TnVtYmVyKX1cbiAgICAgICAgICovXG5cbiAgICAgICAgZ2V0QXR0cmlidXRlVmFsdWU6IGZ1bmN0aW9uKHRhcmdldCwgYXR0cmlidXRlKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgdmFsdWUgICA9ICcnO1xuXG4gICAgICAgICAgICB2YWx1ZSA9IHRhcmdldC5kb20uZWwuZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBhdHRyaWJ1dGUpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuZGVidWcuc2hvd1dhcm5pbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVuY291cmFnZSB1c2VycyB0byBhc3NpZ24gdmFsdWVzIHRvIGFsbCB0YXJnZXRzIHRvIGF2b2lkIGVycm9uZW91cyBzb3J0aW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gdHlwZXMgYXJlIG1peGVkXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKG1peGl0dXAubWVzc2FnZXMud2FybmluZ0luY29uc2lzdGVudFNvcnRpbmdBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2RhdGEtJyArIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBhbiBhdHRyaWJ1dGUgaXMgbm90IHByZXNlbnQsIHJldHVybiAwIGFzIGEgc2FmZXR5IHZhbHVlXG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNhbGxGaWx0ZXJzKCd2YWx1ZUdldEF0dHJpYnV0ZVZhbHVlJywgdmFsdWUgfHwgMCwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5zZXJ0cyBlbGVtZW50cyBpbnRvIHRoZSBET00gaW4gdGhlIGFwcHJvcHJpYXRlXG4gICAgICAgICAqIG9yZGVyIHVzaW5nIGEgZG9jdW1lbnQgZnJhZ21lbnQgZm9yIG1pbmltYWxcbiAgICAgICAgICogRE9NIHRocmFzaGluZ1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMi4wLjBcbiAgICAgICAgICogQHBhcmFtICAge2Jvb2xlYW59ICAgaXNSZXNldHRpbmdcbiAgICAgICAgICogQHBhcmFtICAge09wZXJhdGlvbn0gb3BlcmF0aW9uXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBwcmludFNvcnQ6IGZ1bmN0aW9uKGlzUmVzZXR0aW5nLCBvcGVyYXRpb24pIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgc3RhcnRPcmRlciAgPSBpc1Jlc2V0dGluZyA/IG9wZXJhdGlvbi5uZXdPcmRlciA6IG9wZXJhdGlvbi5zdGFydE9yZGVyLFxuICAgICAgICAgICAgICAgIG5ld09yZGVyICAgID0gaXNSZXNldHRpbmcgPyBvcGVyYXRpb24uc3RhcnRPcmRlciA6IG9wZXJhdGlvbi5uZXdPcmRlcixcbiAgICAgICAgICAgICAgICBuZXh0U2libGluZyA9IHN0YXJ0T3JkZXIubGVuZ3RoID8gc3RhcnRPcmRlcltzdGFydE9yZGVyLmxlbmd0aCAtIDFdLmRvbS5lbC5uZXh0RWxlbWVudFNpYmxpbmcgOiBudWxsLFxuICAgICAgICAgICAgICAgIGZyYWcgICAgICAgID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICAgICAgICAgICAgICB3aGl0ZXNwYWNlICA9IG51bGwsXG4gICAgICAgICAgICAgICAgdGFyZ2V0ICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGVsICAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVQcmludFNvcnQnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAvLyBFbXB0eSB0aGUgY29udGFpbmVyXG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IHN0YXJ0T3JkZXJbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIGVsID0gdGFyZ2V0LmRvbS5lbDtcblxuICAgICAgICAgICAgICAgIGlmIChlbC5zdHlsZS5wb3NpdGlvbiA9PT0gJ2Fic29sdXRlJykgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICBoLnJlbW92ZVdoaXRlc3BhY2UoZWwucHJldmlvdXNTaWJsaW5nKTtcblxuICAgICAgICAgICAgICAgIGVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aGl0ZXNwYWNlID0gbmV4dFNpYmxpbmcgPyBuZXh0U2libGluZy5wcmV2aW91c1NpYmxpbmcgOiBzZWxmLmRvbS5wYXJlbnQubGFzdENoaWxkO1xuXG4gICAgICAgICAgICBpZiAod2hpdGVzcGFjZSAmJiB3aGl0ZXNwYWNlLm5vZGVOYW1lID09PSAnI3RleHQnKSB7XG4gICAgICAgICAgICAgICAgaC5yZW1vdmVXaGl0ZXNwYWNlKHdoaXRlc3BhY2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyB0YXJnZXQgPSBuZXdPcmRlcltpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRhcmdldHMgaW50byBhIGRvY3VtZW50IGZyYWdtZW50XG5cbiAgICAgICAgICAgICAgICBlbCA9IHRhcmdldC5kb20uZWw7XG5cbiAgICAgICAgICAgICAgICBpZiAoaC5pc0VsZW1lbnQoZnJhZy5sYXN0Q2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyYWcuYXBwZW5kQ2hpbGQod2luZG93LmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJykpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZyYWcuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJbnNlcnQgdGhlIGRvY3VtZW50IGZyYWdtZW50IGludG8gdGhlIGNvbnRhaW5lclxuICAgICAgICAgICAgLy8gYmVmb3JlIGFueSBvdGhlciBub24tdGFyZ2V0IGVsZW1lbnRzXG5cbiAgICAgICAgICAgIGlmIChzZWxmLmRvbS5wYXJlbnQuZmlyc3RDaGlsZCAmJiBzZWxmLmRvbS5wYXJlbnQuZmlyc3RDaGlsZCAhPT0gbmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICBmcmFnLmluc2VydEJlZm9yZSh3aW5kb3cuZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyAnKSwgZnJhZy5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgZnJhZy5hcHBlbmRDaGlsZCh3aW5kb3cuZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyAnKSk7XG5cbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5wYXJlbnQuaW5zZXJ0QmVmb3JlKGZyYWcsIG5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50LmFwcGVuZENoaWxkKGZyYWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlclByaW50U29ydCcsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhcnNlcyB1c2VyLWRlZmluZWQgc29ydCBzdHJpbmdzIChpLmUuIGBkZWZhdWx0OmFzY2ApIGludG8gc29ydCBjb21tYW5kcyBvYmplY3RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgICAgICAgc29ydFN0cmluZ1xuICAgICAgICAgKiBAcGFyYW0gICB7bWl4aXR1cC5Db21tYW5kU29ydH0gICBjb21tYW5kXG4gICAgICAgICAqIEByZXR1cm4gIHttaXhpdHVwLkNvbW1hbmRTb3J0fVxuICAgICAgICAgKi9cblxuICAgICAgICBwYXJzZVNvcnRTdHJpbmc6IGZ1bmN0aW9uKHNvcnRTdHJpbmcsIGNvbW1hbmQpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgcnVsZXMgICAgICAgPSBzb3J0U3RyaW5nLnNwbGl0KCcgJyksXG4gICAgICAgICAgICAgICAgY3VycmVudCAgICAgPSBjb21tYW5kLFxuICAgICAgICAgICAgICAgIHJ1bGUgICAgICAgID0gW10sXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgLy8gY29tbWFuZC5zb3J0U3RyaW5nID0gc29ydFN0cmluZztcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcnVsZSA9IHJ1bGVzW2ldLnNwbGl0KCc6Jyk7XG5cbiAgICAgICAgICAgICAgICBjdXJyZW50LnNvcnRTdHJpbmcgID0gcnVsZXNbaV07XG4gICAgICAgICAgICAgICAgY3VycmVudC5hdHRyaWJ1dGUgICA9IGguZGFzaENhc2UocnVsZVswXSk7XG4gICAgICAgICAgICAgICAgY3VycmVudC5vcmRlciAgICAgICA9IHJ1bGVbMV0gfHwgJ2FzYyc7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGN1cnJlbnQuYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJlYXQgXCJkZWZhdWx0XCIgYXMgc29ydGluZyBieSBubyBhdHRyaWJ1dGVcblxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudC5hdHRyaWJ1dGUgPSAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JhbmRvbSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0cmVhdCBcInJhbmRvbVwiIGFzIGFuIG9yZGVyIG5vdCBhbiBhdHRyaWJ1dGVcblxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudC5hdHRyaWJ1dGUgICA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudC5vcmRlciAgICAgICA9ICdyYW5kb20nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnQuYXR0cmlidXRlIHx8IGN1cnJlbnQub3JkZXIgPT09ICdyYW5kb20nKSBicmVhaztcblxuICAgICAgICAgICAgICAgIGlmIChpIDwgcnVsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBFbWJlZCByZWZlcmVuY2UgdG8gdGhlIG5leHQgY29tbWFuZFxuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQubmV4dCA9IG5ldyBtaXhpdHVwLkNvbW1hbmRTb3J0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaC5mcmVlemUoY3VycmVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNhbGxGaWx0ZXJzKCdjb21tYW5kc1BhcnNlU29ydCcsIGNvbW1hbmQsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhcnNlcyBhbGwgZWZmZWN0cyBvdXQgb2YgdGhlIHVzZXItZGVmaW5lZCBgYW5pbWF0aW9uLmVmZmVjdHNgIHN0cmluZyBpbnRvXG4gICAgICAgICAqIHRoZWlyIHJlc3BlY3RpdmUgcHJvcGVydGllcyBhbmQgdW5pdHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAyLjAuMFxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgcGFyc2VFZmZlY3RzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU5hbWUgICA9ICcnLFxuICAgICAgICAgICAgICAgIGVmZmVjdHNJbiAgICAgICA9IHNlbGYuY29uZmlnLmFuaW1hdGlvbi5lZmZlY3RzSW4gfHwgc2VsZi5jb25maWcuYW5pbWF0aW9uLmVmZmVjdHMsXG4gICAgICAgICAgICAgICAgZWZmZWN0c091dCAgICAgID0gc2VsZi5jb25maWcuYW5pbWF0aW9uLmVmZmVjdHNPdXQgfHwgc2VsZi5jb25maWcuYW5pbWF0aW9uLmVmZmVjdHM7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZVBhcnNlRWZmZWN0cycsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHNlbGYuZWZmZWN0c0luICAgICAgPSBuZXcgbWl4aXR1cC5TdHlsZURhdGEoKTtcbiAgICAgICAgICAgIHNlbGYuZWZmZWN0c091dCAgICAgPSBuZXcgbWl4aXR1cC5TdHlsZURhdGEoKTtcbiAgICAgICAgICAgIHNlbGYudHJhbnNmb3JtSW4gICAgPSBbXTtcbiAgICAgICAgICAgIHNlbGYudHJhbnNmb3JtT3V0ICAgPSBbXTtcblxuICAgICAgICAgICAgc2VsZi5lZmZlY3RzSW4ub3BhY2l0eSA9IHNlbGYuZWZmZWN0c091dC5vcGFjaXR5ID0gMTtcblxuICAgICAgICAgICAgc2VsZi5wYXJzZUVmZmVjdCgnZmFkZScsIGVmZmVjdHNJbiwgc2VsZi5lZmZlY3RzSW4sIHNlbGYudHJhbnNmb3JtSW4pO1xuICAgICAgICAgICAgc2VsZi5wYXJzZUVmZmVjdCgnZmFkZScsIGVmZmVjdHNPdXQsIHNlbGYuZWZmZWN0c091dCwgc2VsZi50cmFuc2Zvcm1PdXQsIHRydWUpO1xuXG4gICAgICAgICAgICBmb3IgKHRyYW5zZm9ybU5hbWUgaW4gbWl4aXR1cC50cmFuc2Zvcm1EZWZhdWx0cykge1xuICAgICAgICAgICAgICAgIGlmICghKG1peGl0dXAudHJhbnNmb3JtRGVmYXVsdHNbdHJhbnNmb3JtTmFtZV0gaW5zdGFuY2VvZiBtaXhpdHVwLlRyYW5zZm9ybURhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGYucGFyc2VFZmZlY3QodHJhbnNmb3JtTmFtZSwgZWZmZWN0c0luLCBzZWxmLmVmZmVjdHNJbiwgc2VsZi50cmFuc2Zvcm1Jbik7XG4gICAgICAgICAgICAgICAgc2VsZi5wYXJzZUVmZmVjdCh0cmFuc2Zvcm1OYW1lLCBlZmZlY3RzT3V0LCBzZWxmLmVmZmVjdHNPdXQsIHNlbGYudHJhbnNmb3JtT3V0LCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5wYXJzZUVmZmVjdCgnc3RhZ2dlcicsIGVmZmVjdHNJbiwgc2VsZi5lZmZlY3RzSW4sIHNlbGYudHJhbnNmb3JtSW4pO1xuICAgICAgICAgICAgc2VsZi5wYXJzZUVmZmVjdCgnc3RhZ2dlcicsIGVmZmVjdHNPdXQsIHNlbGYuZWZmZWN0c091dCwgc2VsZi50cmFuc2Zvcm1PdXQsIHRydWUpO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlclBhcnNlRWZmZWN0cycsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAyLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICBlZmZlY3ROYW1lXG4gICAgICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgIGVmZmVjdFN0cmluZ1xuICAgICAgICAgKiBAcGFyYW0gICB7U3R5bGVEYXRhfSBlZmZlY3RzXG4gICAgICAgICAqIEBwYXJhbSAgIHtTdHJpbmdbXX0gIHRyYW5zZm9ybVxuICAgICAgICAgKiBAcGFyYW0gICB7Ym9vbGVhbn0gICBbaXNPdXRdXG4gICAgICAgICAqL1xuXG4gICAgICAgIHBhcnNlRWZmZWN0OiBmdW5jdGlvbihlZmZlY3ROYW1lLCBlZmZlY3RTdHJpbmcsIGVmZmVjdHMsIHRyYW5zZm9ybSwgaXNPdXQpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgcmUgICAgICAgICAgPSAvXFwoKFteKV0rKVxcKS8sXG4gICAgICAgICAgICAgICAgcHJvcEluZGV4ICAgPSAtMSxcbiAgICAgICAgICAgICAgICBzdHIgICAgICAgICA9ICcnLFxuICAgICAgICAgICAgICAgIG1hdGNoICAgICAgID0gW10sXG4gICAgICAgICAgICAgICAgdmFsICAgICAgICAgPSAnJyxcbiAgICAgICAgICAgICAgICB1bml0cyAgICAgICA9IFsnJScsICdweCcsICdlbScsICdyZW0nLCAndmgnLCAndncnLCAnZGVnJ10sXG4gICAgICAgICAgICAgICAgdW5pdCAgICAgICAgPSAnJyxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVQYXJzZUVmZmVjdCcsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWZmZWN0U3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobWl4aXR1cC5tZXNzYWdlcy5lcnJvckNvbmZpZ0ludmFsaWRBbmltYXRpb25FZmZlY3RzKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWZmZWN0U3RyaW5nLmluZGV4T2YoZWZmZWN0TmFtZSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGVmZmVjdCBpcyBub3QgcHJlc2VudCBpbiB0aGUgZWZmZWN0cyBzdHJpbmdcblxuICAgICAgICAgICAgICAgIGlmIChlZmZlY3ROYW1lID09PSAnc3RhZ2dlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgc3RhZ2dlciB0byAwXG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zdGFnZ2VyRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVGhlIGVmZmVjdCBpcyBwcmVzZW50XG5cbiAgICAgICAgICAgIHByb3BJbmRleCA9IGVmZmVjdFN0cmluZy5pbmRleE9mKGVmZmVjdE5hbWUgKyAnKCcpO1xuXG4gICAgICAgICAgICBpZiAocHJvcEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgZWZmZWN0IGhhcyBhIHVzZXIgZGVmaW5lZCB2YWx1ZSBpbiBwYXJlbnRoZXNlc1xuXG4gICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBmcm9tIHRoZSBmaXJzdCBwYXJlbnRoZXNpcyB0byB0aGUgZW5kIG9mIHN0cmluZ1xuXG4gICAgICAgICAgICAgICAgc3RyID0gZWZmZWN0U3RyaW5nLnN1YnN0cmluZyhwcm9wSW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgLy8gTWF0Y2ggYW55IG51bWJlciBvZiBjaGFyYWN0ZXJzIGJldHdlZW4gXCIoXCIgYW5kIFwiKVwiXG5cbiAgICAgICAgICAgICAgICBtYXRjaCA9IHJlLmV4ZWMoc3RyKTtcblxuICAgICAgICAgICAgICAgIHZhbCA9IG1hdGNoWzFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKGVmZmVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdmYWRlJzpcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0cy5vcGFjaXR5ID0gdmFsID8gcGFyc2VGbG9hdCh2YWwpIDogMDtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzdGFnZ2VyJzpcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zdGFnZ2VyRHVyYXRpb24gPSB2YWwgPyBwYXJzZUZsb2F0KHZhbCkgOiAxMDA7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogQ3VycmVudGx5IHN0YWdnZXIgbXVzdCBiZSBhcHBsaWVkIGdsb2JhbGx5LCBidXRcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgc2VwZXJhdGUgdmFsdWVzIGFyZSBzcGVjaWZpZWQgZm9yIGluL291dCwgdGhpcyBzaG91bGRcbiAgICAgICAgICAgICAgICAgICAgLy8gYmUgcmVzcGVjdGVkXG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgLy8gQWxsIG90aGVyIGVmZmVjdHMgYXJlIHRyYW5zZm9ybXMgZm9sbG93aW5nIHRoZSBzYW1lIHN0cnVjdHVyZVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc091dCAmJiBzZWxmLmNvbmZpZy5hbmltYXRpb24ucmV2ZXJzZU91dCAmJiBlZmZlY3ROYW1lICE9PSAnc2NhbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3RzW2VmZmVjdE5hbWVdLnZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmFsID8gcGFyc2VGbG9hdCh2YWwpIDogbWl4aXR1cC50cmFuc2Zvcm1EZWZhdWx0c1tlZmZlY3ROYW1lXS52YWx1ZSkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdHNbZWZmZWN0TmFtZV0udmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWwgPyBwYXJzZUZsb2F0KHZhbCkgOiBtaXhpdHVwLnRyYW5zZm9ybURlZmF1bHRzW2VmZmVjdE5hbWVdLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IHVuaXQgPSB1bml0c1tpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbC5pbmRleE9mKHVuaXQpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0c1tlZmZlY3ROYW1lXS51bml0ID0gdW5pdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3RzW2VmZmVjdE5hbWVdLnVuaXQgPSBtaXhpdHVwLnRyYW5zZm9ybURlZmF1bHRzW2VmZmVjdE5hbWVdLnVuaXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0ucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdE5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdHNbZWZmZWN0TmFtZV0udmFsdWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0c1tlZmZlY3ROYW1lXS51bml0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcpJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlclBhcnNlRWZmZWN0JywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDIuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtPcGVyYXRpb259ICAgICBvcGVyYXRpb25cbiAgICAgICAgICogQHJldHVybiAge1N0YXRlfVxuICAgICAgICAgKi9cblxuICAgICAgICBidWlsZFN0YXRlOiBmdW5jdGlvbihvcGVyYXRpb24pIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgc3RhdGUgICAgICAgPSBuZXcgbWl4aXR1cC5TdGF0ZSgpLFxuICAgICAgICAgICAgICAgIHRhcmdldCAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVCdWlsZFN0YXRlJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgLy8gTWFwIHRhcmdldCBlbGVtZW50cyBpbnRvIHN0YXRlIGFycmF5cy5cbiAgICAgICAgICAgIC8vIHRoZSByZWFsIHRhcmdldCBvYmplY3RzIHNob3VsZCBuZXZlciBiZSBleHBvc2VkXG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IHNlbGYudGFyZ2V0c1tpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvcGVyYXRpb24udG9SZW1vdmUubGVuZ3RoIHx8IG9wZXJhdGlvbi50b1JlbW92ZS5pbmRleE9mKHRhcmdldCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnRhcmdldHMucHVzaCh0YXJnZXQuZG9tLmVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IG9wZXJhdGlvbi5tYXRjaGluZ1tpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUubWF0Y2hpbmcucHVzaCh0YXJnZXQuZG9tLmVsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgdGFyZ2V0ID0gb3BlcmF0aW9uLnNob3dbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIHN0YXRlLnNob3cucHVzaCh0YXJnZXQuZG9tLmVsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgdGFyZ2V0ID0gb3BlcmF0aW9uLmhpZGVbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghb3BlcmF0aW9uLnRvUmVtb3ZlLmxlbmd0aCB8fCBvcGVyYXRpb24udG9SZW1vdmUuaW5kZXhPZih0YXJnZXQpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5oaWRlLnB1c2godGFyZ2V0LmRvbS5lbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGF0ZS5pZCAgICAgICAgICAgICAgICAgICAgICAgID0gc2VsZi5pZDtcbiAgICAgICAgICAgIHN0YXRlLmNvbnRhaW5lciAgICAgICAgICAgICAgICAgPSBzZWxmLmRvbS5jb250YWluZXI7XG4gICAgICAgICAgICBzdGF0ZS5hY3RpdmVGaWx0ZXIgICAgICAgICAgICAgID0gb3BlcmF0aW9uLm5ld0ZpbHRlcjtcbiAgICAgICAgICAgIHN0YXRlLmFjdGl2ZVNvcnQgICAgICAgICAgICAgICAgPSBvcGVyYXRpb24ubmV3U29ydDtcbiAgICAgICAgICAgIHN0YXRlLmFjdGl2ZURhdGFzZXQgICAgICAgICAgICAgPSBvcGVyYXRpb24ubmV3RGF0YXNldDtcbiAgICAgICAgICAgIHN0YXRlLmFjdGl2ZUNvbnRhaW5lckNsYXNzTmFtZSAgPSBvcGVyYXRpb24ubmV3Q29udGFpbmVyQ2xhc3NOYW1lO1xuICAgICAgICAgICAgc3RhdGUuaGFzRmFpbGVkICAgICAgICAgICAgICAgICA9IG9wZXJhdGlvbi5oYXNGYWlsZWQ7XG4gICAgICAgICAgICBzdGF0ZS50b3RhbFRhcmdldHMgICAgICAgICAgICAgID0gc2VsZi50YXJnZXRzLmxlbmd0aDtcbiAgICAgICAgICAgIHN0YXRlLnRvdGFsU2hvdyAgICAgICAgICAgICAgICAgPSBvcGVyYXRpb24uc2hvdy5sZW5ndGg7XG4gICAgICAgICAgICBzdGF0ZS50b3RhbEhpZGUgICAgICAgICAgICAgICAgID0gb3BlcmF0aW9uLmhpZGUubGVuZ3RoO1xuICAgICAgICAgICAgc3RhdGUudG90YWxNYXRjaGluZyAgICAgICAgICAgICA9IG9wZXJhdGlvbi5tYXRjaGluZy5sZW5ndGg7XG4gICAgICAgICAgICBzdGF0ZS50cmlnZ2VyRWxlbWVudCAgICAgICAgICAgID0gb3BlcmF0aW9uLnRyaWdnZXJFbGVtZW50O1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jYWxsRmlsdGVycygnc3RhdGVCdWlsZFN0YXRlJywgc3RhdGUsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAyLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7Ym9vbGVhbn0gICBzaG91bGRBbmltYXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtPcGVyYXRpb259IG9wZXJhdGlvblxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgZ29NaXg6IGZ1bmN0aW9uKHNob3VsZEFuaW1hdGUsIG9wZXJhdGlvbikge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBkZWZlcnJlZCAgICA9IG51bGw7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUdvTWl4JywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGFuaW1hdGlvbiBkdXJhdGlvbiBpcyBzZXQgdG8gMG1zLFxuICAgICAgICAgICAgLy8gb3Igbm8gZWZmZWN0cyBzcGVjaWZpZWQsXG4gICAgICAgICAgICAvLyBvciB0aGUgY29udGFpbmVyIGlzIGhpZGRlblxuICAgICAgICAgICAgLy8gdGhlbiBhYm9ydCBhbmltYXRpb25cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICFzZWxmLmNvbmZpZy5hbmltYXRpb24uZHVyYXRpb24gfHwgIXNlbGYuY29uZmlnLmFuaW1hdGlvbi5lZmZlY3RzIHx8ICFoLmlzVmlzaWJsZShzZWxmLmRvbS5jb250YWluZXIpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzaG91bGRBbmltYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhb3BlcmF0aW9uLnRvU2hvdy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAhb3BlcmF0aW9uLnRvSGlkZS5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAhb3BlcmF0aW9uLndpbGxTb3J0ICYmXG4gICAgICAgICAgICAgICAgIW9wZXJhdGlvbi53aWxsQ2hhbmdlTGF5b3V0XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBub3RoaW5nIHRvIHNob3cgb3IgaGlkZSwgYW5kIG5vdCBzb3J0aW5nIG9yXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdpbmcgbGF5b3V0XG5cbiAgICAgICAgICAgICAgICBzaG91bGRBbmltYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhb3BlcmF0aW9uLnN0YXJ0U3RhdGUuc2hvdy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAhb3BlcmF0aW9uLnNob3cubGVuZ3RoXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBub3RoaW5nIGN1cnJlbnRseSBzaG93biwgbm90aGluZyB0byBzaG93XG5cbiAgICAgICAgICAgICAgICBzaG91bGRBbmltYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1peGl0dXAuZXZlbnRzLmZpcmUoJ21peFN0YXJ0Jywgc2VsZi5kb20uY29udGFpbmVyLCB7XG4gICAgICAgICAgICAgICAgc3RhdGU6IG9wZXJhdGlvbi5zdGFydFN0YXRlLFxuICAgICAgICAgICAgICAgIGZ1dHVyZVN0YXRlOiBvcGVyYXRpb24ubmV3U3RhdGUsXG4gICAgICAgICAgICAgICAgaW5zdGFuY2U6IHNlbGZcbiAgICAgICAgICAgIH0sIHNlbGYuZG9tLmRvY3VtZW50KTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzZWxmLmNvbmZpZy5jYWxsYmFja3Mub25NaXhTdGFydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLmNhbGxiYWNrcy5vbk1peFN0YXJ0LmNhbGwoXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZG9tLmNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnN0YXJ0U3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5uZXdTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgc2VsZlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgucmVtb3ZlQ2xhc3Moc2VsZi5kb20uY29udGFpbmVyLCBoLmdldENsYXNzbmFtZShzZWxmLmNvbmZpZy5jbGFzc05hbWVzLCAnY29udGFpbmVyJywgc2VsZi5jb25maWcuY2xhc3NOYW1lcy5tb2RpZmllckZhaWxlZCkpO1xuXG4gICAgICAgICAgICBpZiAoIXNlbGYudXNlckRlZmVycmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gUXVldWUgZW1wdHksIG5vIHBlbmRpbmcgb3BlcmF0aW9uc1xuXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQgPSBzZWxmLnVzZXJEZWZlcnJlZCA9IGguZGVmZXIobWl4aXR1cC5saWJyYXJpZXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBVc2UgZXhpc3RpbmcgZGVmZXJyZWRcblxuICAgICAgICAgICAgICAgIGRlZmVycmVkID0gc2VsZi51c2VyRGVmZXJyZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuaXNCdXN5ID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKCFzaG91bGRBbmltYXRlIHx8ICFtaXhpdHVwLmZlYXR1cmVzLmhhcy50cmFuc2l0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIEFib3J0XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuZGVidWcuZmF1eEFzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNsZWFuVXAob3BlcmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgc2VsZi5jb25maWcuYW5pbWF0aW9uLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNsZWFuVXAob3BlcmF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5jYWxsRmlsdGVycygncHJvbWlzZUdvTWl4JywgZGVmZXJyZWQucHJvbWlzZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgd2Ugc2hvdWxkIGFuaW1hdGUgYW5kIHRoZSBwbGF0Zm9ybSBzdXBwb3J0cyB0cmFuc2l0aW9ucywgZ28gZm9yIGl0XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgIT09IG9wZXJhdGlvbi5kb2NTdGF0ZS5zY3JvbGxUb3ApIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8ob3BlcmF0aW9uLmRvY1N0YXRlLnNjcm9sbExlZnQsIG9wZXJhdGlvbi5kb2NTdGF0ZS5zY3JvbGxUb3ApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuYW5pbWF0aW9uLmFwcGx5UGVyc3BlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5wYXJlbnQuc3R5bGVbbWl4aXR1cC5mZWF0dXJlcy5wZXJzcGVjdGl2ZVByb3BdID1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcuYW5pbWF0aW9uLnBlcnNwZWN0aXZlRGlzdGFuY2U7XG5cbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5wYXJlbnQuc3R5bGVbbWl4aXR1cC5mZWF0dXJlcy5wZXJzcGVjdGl2ZU9yaWdpblByb3BdID1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcuYW5pbWF0aW9uLnBlcnNwZWN0aXZlT3JpZ2luO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcuYW5pbWF0aW9uLmFuaW1hdGVSZXNpemVDb250YWluZXIgJiZcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24uc3RhcnRIZWlnaHQgIT09IG9wZXJhdGlvbi5uZXdIZWlnaHQgJiZcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24udmlld3BvcnREZWx0YVkgIT09IG9wZXJhdGlvbi5zdGFydEhlaWdodCAtIG9wZXJhdGlvbi5uZXdIZWlnaHRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudC5zdHlsZS5oZWlnaHQgPSBvcGVyYXRpb24uc3RhcnRIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcuYW5pbWF0aW9uLmFuaW1hdGVSZXNpemVDb250YWluZXIgJiZcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24uc3RhcnRXaWR0aCAhPT0gb3BlcmF0aW9uLm5ld1dpZHRoICYmXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnZpZXdwb3J0RGVsdGFYICE9PSBvcGVyYXRpb24uc3RhcnRXaWR0aCAtIG9wZXJhdGlvbi5uZXdXaWR0aFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50LnN0eWxlLndpZHRoID0gb3BlcmF0aW9uLnN0YXJ0V2lkdGggKyAncHgnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3BlcmF0aW9uLnN0YXJ0SGVpZ2h0ID09PSBvcGVyYXRpb24ubmV3SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50LnN0eWxlLmhlaWdodCA9IG9wZXJhdGlvbi5zdGFydEhlaWdodCArICdweCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcGVyYXRpb24uc3RhcnRXaWR0aCA9PT0gb3BlcmF0aW9uLm5ld1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50LnN0eWxlLndpZHRoID0gb3BlcmF0aW9uLnN0YXJ0V2lkdGggKyAncHgnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3BlcmF0aW9uLnN0YXJ0SGVpZ2h0ID09PSBvcGVyYXRpb24ubmV3SGVpZ2h0ICYmIG9wZXJhdGlvbi5zdGFydFdpZHRoID09PSBvcGVyYXRpb24ubmV3V2lkdGgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5wYXJlbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNlbGYubW92ZVRhcmdldHMob3BlcmF0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jYWxsRmlsdGVycygncHJvbWlzZUdvTWl4JywgZGVmZXJyZWQucHJvbWlzZSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDIuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtPcGVyYXRpb259ICAgICBvcGVyYXRpb25cbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGdldFN0YXJ0TWl4RGF0YTogZnVuY3Rpb24ob3BlcmF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHBhcmVudFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoc2VsZi5kb20ucGFyZW50KSxcbiAgICAgICAgICAgICAgICBwYXJlbnRSZWN0ICA9IHNlbGYuZG9tLnBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgICB0YXJnZXQgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgZGF0YSAgICAgICAgPSB7fSxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICA9IC0xLFxuICAgICAgICAgICAgICAgIGJveFNpemluZyAgID0gcGFyZW50U3R5bGVbbWl4aXR1cC5mZWF0dXJlcy5ib3hTaXppbmdQcm9wXTtcblxuICAgICAgICAgICAgc2VsZi5pbmNQYWRkaW5nID0gKGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlR2V0U3RhcnRNaXhEYXRhJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgdGFyZ2V0ID0gb3BlcmF0aW9uLnNob3dbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIGRhdGEgPSB0YXJnZXQuZ2V0UG9zRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnNob3dQb3NEYXRhW2ldID0ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFBvc0RhdGE6IGRhdGFcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyB0YXJnZXQgPSBvcGVyYXRpb24udG9IaWRlW2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gdGFyZ2V0LmdldFBvc0RhdGEoKTtcblxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi50b0hpZGVQb3NEYXRhW2ldID0ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFBvc0RhdGE6IGRhdGFcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvcGVyYXRpb24uc3RhcnRYID0gcGFyZW50UmVjdC5sZWZ0O1xuICAgICAgICAgICAgb3BlcmF0aW9uLnN0YXJ0WSA9IHBhcmVudFJlY3QudG9wO1xuXG4gICAgICAgICAgICBvcGVyYXRpb24uc3RhcnRIZWlnaHQgPSBzZWxmLmluY1BhZGRpbmcgP1xuICAgICAgICAgICAgICAgIHBhcmVudFJlY3QuaGVpZ2h0IDpcbiAgICAgICAgICAgICAgICBwYXJlbnRSZWN0LmhlaWdodCAtXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocGFyZW50U3R5bGUucGFkZGluZ1RvcCkgLVxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHBhcmVudFN0eWxlLnBhZGRpbmdCb3R0b20pIC1cbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChwYXJlbnRTdHlsZS5ib3JkZXJUb3ApIC1cbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChwYXJlbnRTdHlsZS5ib3JkZXJCb3R0b20pO1xuXG4gICAgICAgICAgICBvcGVyYXRpb24uc3RhcnRXaWR0aCA9IHNlbGYuaW5jUGFkZGluZyA/XG4gICAgICAgICAgICAgICAgcGFyZW50UmVjdC53aWR0aCA6XG4gICAgICAgICAgICAgICAgcGFyZW50UmVjdC53aWR0aCAtXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocGFyZW50U3R5bGUucGFkZGluZ0xlZnQpIC1cbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChwYXJlbnRTdHlsZS5wYWRkaW5nUmlnaHQpIC1cbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChwYXJlbnRTdHlsZS5ib3JkZXJMZWZ0KSAtXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocGFyZW50U3R5bGUuYm9yZGVyUmlnaHQpO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlckdldFN0YXJ0TWl4RGF0YScsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAyLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7T3BlcmF0aW9ufSAgICAgb3BlcmF0aW9uXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBzZXRJbnRlcjogZnVuY3Rpb24ob3BlcmF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgdGFyZ2V0ICA9IG51bGwsXG4gICAgICAgICAgICAgICAgaSAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVTZXRJbnRlcicsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIC8vIFByZXZlbnQgc2Nyb2xsYmFyIGZsaWNrZXIgb24gbm9uLWluZXJ0aWFsIHNjcm9sbCBwbGF0Zm9ybXMgYnkgY2xhbXBpbmcgaGVpZ2h0L3dpZHRoXG5cbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5hbmltYXRpb24uY2xhbXBIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5wYXJlbnQuc3R5bGUuaGVpZ2h0ICAgID0gb3BlcmF0aW9uLnN0YXJ0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5wYXJlbnQuc3R5bGUub3ZlcmZsb3cgID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5hbmltYXRpb24uY2xhbXBXaWR0aCkge1xuICAgICAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudC5zdHlsZS53aWR0aCAgICAgPSBvcGVyYXRpb24uc3RhcnRXaWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50LnN0eWxlLm92ZXJmbG93ICA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyB0YXJnZXQgPSBvcGVyYXRpb24udG9TaG93W2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuc2hvdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3BlcmF0aW9uLndpbGxDaGFuZ2VMYXlvdXQpIHtcbiAgICAgICAgICAgICAgICBoLnJlbW92ZUNsYXNzKHNlbGYuZG9tLmNvbnRhaW5lciwgb3BlcmF0aW9uLnN0YXJ0Q29udGFpbmVyQ2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICBoLmFkZENsYXNzKHNlbGYuZG9tLmNvbnRhaW5lciwgb3BlcmF0aW9uLm5ld0NvbnRhaW5lckNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyU2V0SW50ZXInLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMi4wLjBcbiAgICAgICAgICogQHBhcmFtICAge09wZXJhdGlvbn0gICAgIG9wZXJhdGlvblxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgZ2V0SW50ZXJNaXhEYXRhOiBmdW5jdGlvbihvcGVyYXRpb24pIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB0YXJnZXQgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBpICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUdldEludGVyTWl4RGF0YScsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IG9wZXJhdGlvbi5zaG93W2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24uc2hvd1Bvc0RhdGFbaV0uaW50ZXJQb3NEYXRhID0gdGFyZ2V0LmdldFBvc0RhdGEoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgdGFyZ2V0ID0gb3BlcmF0aW9uLnRvSGlkZVtpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnRvSGlkZVBvc0RhdGFbaV0uaW50ZXJQb3NEYXRhID0gdGFyZ2V0LmdldFBvc0RhdGEoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJHZXRJbnRlck1peERhdGEnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMi4wLjBcbiAgICAgICAgICogQHBhcmFtICAge09wZXJhdGlvbn0gICAgIG9wZXJhdGlvblxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgc2V0RmluYWw6IGZ1bmN0aW9uKG9wZXJhdGlvbikge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHRhcmdldCAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGkgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlU2V0RmluYWwnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBvcGVyYXRpb24ud2lsbFNvcnQgJiYgc2VsZi5wcmludFNvcnQoZmFsc2UsIG9wZXJhdGlvbik7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IG9wZXJhdGlvbi50b0hpZGVbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIHRhcmdldC5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyU2V0RmluYWwnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMi4wLjBcbiAgICAgICAgICogQHBhcmFtICAge09wZXJhdGlvbn0gICAgIG9wZXJhdGlvblxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgZ2V0RmluYWxNaXhEYXRhOiBmdW5jdGlvbihvcGVyYXRpb24pIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgcGFyZW50U3R5bGUgPSBudWxsLFxuICAgICAgICAgICAgICAgIHBhcmVudFJlY3QgID0gbnVsbCxcbiAgICAgICAgICAgICAgICB0YXJnZXQgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlR2V0RmluYWxNaXhEYXRhJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgdGFyZ2V0ID0gb3BlcmF0aW9uLnNob3dbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5zaG93UG9zRGF0YVtpXS5maW5hbFBvc0RhdGEgPSB0YXJnZXQuZ2V0UG9zRGF0YSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyB0YXJnZXQgPSBvcGVyYXRpb24udG9IaWRlW2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24udG9IaWRlUG9zRGF0YVtpXS5maW5hbFBvc0RhdGEgPSB0YXJnZXQuZ2V0UG9zRGF0YSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZW1vdmUgY2xhbXBpbmdcblxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFuaW1hdGlvbi5jbGFtcEhlaWdodCB8fCBzZWxmLmNvbmZpZy5hbmltYXRpb24uY2xhbXBXaWR0aCkge1xuICAgICAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudC5zdHlsZS5oZWlnaHQgICAgPVxuICAgICAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudC5zdHlsZS53aWR0aCAgICAgPVxuICAgICAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudC5zdHlsZS5vdmVyZmxvdyAgPSAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzZWxmLmluY1BhZGRpbmcpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNlbGYuZG9tLnBhcmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhcmVudFJlY3QgID0gc2VsZi5kb20ucGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICBvcGVyYXRpb24ubmV3WCA9IHBhcmVudFJlY3QubGVmdDtcbiAgICAgICAgICAgIG9wZXJhdGlvbi5uZXdZID0gcGFyZW50UmVjdC50b3A7XG5cbiAgICAgICAgICAgIG9wZXJhdGlvbi5uZXdIZWlnaHQgPSBzZWxmLmluY1BhZGRpbmcgP1xuICAgICAgICAgICAgICAgIHBhcmVudFJlY3QuaGVpZ2h0IDpcbiAgICAgICAgICAgICAgICBwYXJlbnRSZWN0LmhlaWdodCAtXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocGFyZW50U3R5bGUucGFkZGluZ1RvcCkgLVxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHBhcmVudFN0eWxlLnBhZGRpbmdCb3R0b20pIC1cbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChwYXJlbnRTdHlsZS5ib3JkZXJUb3ApIC1cbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChwYXJlbnRTdHlsZS5ib3JkZXJCb3R0b20pO1xuXG4gICAgICAgICAgICBvcGVyYXRpb24ubmV3V2lkdGggPSBzZWxmLmluY1BhZGRpbmcgP1xuICAgICAgICAgICAgICAgIHBhcmVudFJlY3Qud2lkdGggOlxuICAgICAgICAgICAgICAgIHBhcmVudFJlY3Qud2lkdGggLVxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHBhcmVudFN0eWxlLnBhZGRpbmdMZWZ0KSAtXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocGFyZW50U3R5bGUucGFkZGluZ1JpZ2h0KSAtXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocGFyZW50U3R5bGUuYm9yZGVyTGVmdCkgLVxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHBhcmVudFN0eWxlLmJvcmRlclJpZ2h0KTtcblxuICAgICAgICAgICAgb3BlcmF0aW9uLnZpZXdwb3J0RGVsdGFYID0gb3BlcmF0aW9uLmRvY1N0YXRlLnZpZXdwb3J0V2lkdGggLSB0aGlzLmRvbS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICBvcGVyYXRpb24udmlld3BvcnREZWx0YVkgPSBvcGVyYXRpb24uZG9jU3RhdGUudmlld3BvcnRIZWlnaHQgLSB0aGlzLmRvbS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgICAgICBpZiAob3BlcmF0aW9uLndpbGxTb3J0KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wcmludFNvcnQodHJ1ZSwgb3BlcmF0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgdGFyZ2V0ID0gb3BlcmF0aW9uLnRvU2hvd1tpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmhpZGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgdGFyZ2V0ID0gb3BlcmF0aW9uLnRvSGlkZVtpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnNob3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi53aWxsQ2hhbmdlTGF5b3V0KSB7XG4gICAgICAgICAgICAgICAgaC5yZW1vdmVDbGFzcyhzZWxmLmRvbS5jb250YWluZXIsIG9wZXJhdGlvbi5uZXdDb250YWluZXJDbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIGguYWRkQ2xhc3Moc2VsZi5kb20uY29udGFpbmVyLCBzZWxmLmNvbmZpZy5sYXlvdXQuY29udGFpbmVyQ2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJHZXRGaW5hbE1peERhdGEnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgICB7T3BlcmF0aW9ufSAgICAgb3BlcmF0aW9uXG4gICAgICAgICAqL1xuXG4gICAgICAgIGdldFR3ZWVuRGF0YTogZnVuY3Rpb24ob3BlcmF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB0YXJnZXQgICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIHBvc0RhdGEgICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgZWZmZWN0TmFtZXMgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc2VsZi5lZmZlY3RzSW4pLFxuICAgICAgICAgICAgICAgIGVmZmVjdE5hbWUgICAgICA9ICcnLFxuICAgICAgICAgICAgICAgIGVmZmVjdCAgICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgd2lkdGhDaGFuZ2UgICAgID0gLTEsXG4gICAgICAgICAgICAgICAgaGVpZ2h0Q2hhbmdlICAgID0gLTEsXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgICAgID0gLTEsXG4gICAgICAgICAgICAgICAgaiAgICAgICAgICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUdldFR3ZWVuRGF0YScsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IG9wZXJhdGlvbi5zaG93W2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwb3NEYXRhICAgICAgICAgICAgID0gb3BlcmF0aW9uLnNob3dQb3NEYXRhW2ldO1xuICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zSW4gICAgICAgPSBuZXcgbWl4aXR1cC5TdHlsZURhdGEoKTtcbiAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc091dCAgICAgID0gbmV3IG1peGl0dXAuU3R5bGVEYXRhKCk7XG4gICAgICAgICAgICAgICAgcG9zRGF0YS50d2VlbkRhdGEgICA9IG5ldyBtaXhpdHVwLlN0eWxlRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gUHJvY2VzcyB4IGFuZCB5XG5cbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmlzU2hvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NJbi54ID0gcG9zRGF0YS5zdGFydFBvc0RhdGEueCAtIHBvc0RhdGEuaW50ZXJQb3NEYXRhLng7XG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zSW4ueSA9IHBvc0RhdGEuc3RhcnRQb3NEYXRhLnkgLSBwb3NEYXRhLmludGVyUG9zRGF0YS55O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zSW4ueCA9IHBvc0RhdGEucG9zSW4ueSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NPdXQueCA9IHBvc0RhdGEuZmluYWxQb3NEYXRhLnggLSBwb3NEYXRhLmludGVyUG9zRGF0YS54O1xuICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zT3V0LnkgPSBwb3NEYXRhLmZpbmFsUG9zRGF0YS55IC0gcG9zRGF0YS5pbnRlclBvc0RhdGEueTtcblxuICAgICAgICAgICAgICAgIC8vIFByb2Nlc3Mgb3BhY2l0eVxuXG4gICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NJbi5vcGFjaXR5ICAgICAgID0gdGFyZ2V0LmlzU2hvd24gPyAxIDogc2VsZi5lZmZlY3RzSW4ub3BhY2l0eTtcbiAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc091dC5vcGFjaXR5ICAgICAgPSAxO1xuICAgICAgICAgICAgICAgIHBvc0RhdGEudHdlZW5EYXRhLm9wYWNpdHkgICA9IHBvc0RhdGEucG9zT3V0Lm9wYWNpdHkgLSBwb3NEYXRhLnBvc0luLm9wYWNpdHk7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGp1c3QgeCBhbmQgeSBpZiBub3QgbnVkZ2luZ1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQuaXNTaG93biAmJiAhc2VsZi5jb25maWcuYW5pbWF0aW9uLm51ZGdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zSW4ueCA9IHBvc0RhdGEucG9zT3V0Lng7XG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zSW4ueSA9IHBvc0RhdGEucG9zT3V0Lnk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcG9zRGF0YS50d2VlbkRhdGEueCA9IHBvc0RhdGEucG9zT3V0LnggLSBwb3NEYXRhLnBvc0luLng7XG4gICAgICAgICAgICAgICAgcG9zRGF0YS50d2VlbkRhdGEueSA9IHBvc0RhdGEucG9zT3V0LnkgLSBwb3NEYXRhLnBvc0luLnk7XG5cbiAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIHdpZHRoLCBoZWlnaHQsIGFuZCBtYXJnaW5zXG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuYW5pbWF0aW9uLmFuaW1hdGVSZXNpemVUYXJnZXRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zSW4ud2lkdGggICAgID0gcG9zRGF0YS5zdGFydFBvc0RhdGEud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zSW4uaGVpZ2h0ICAgID0gcG9zRGF0YS5zdGFydFBvc0RhdGEuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFwifHxcIiBQcmV2ZW50cyB3aWR0aC9oZWlnaHQgY2hhbmdlIGZyb20gaW5jbHVkaW5nIDAgd2lkdGgvaGVpZ2h0IGlmIGhpZGluZyBvciBzaG93aW5nXG5cbiAgICAgICAgICAgICAgICAgICAgd2lkdGhDaGFuZ2UgPSAocG9zRGF0YS5zdGFydFBvc0RhdGEud2lkdGggfHwgcG9zRGF0YS5maW5hbFBvc0RhdGEud2lkdGgpIC0gcG9zRGF0YS5pbnRlclBvc0RhdGEud2lkdGg7XG5cbiAgICAgICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NJbi5tYXJnaW5SaWdodCA9IHBvc0RhdGEuc3RhcnRQb3NEYXRhLm1hcmdpblJpZ2h0IC0gd2lkdGhDaGFuZ2U7XG5cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0Q2hhbmdlID0gKHBvc0RhdGEuc3RhcnRQb3NEYXRhLmhlaWdodCB8fCBwb3NEYXRhLmZpbmFsUG9zRGF0YS5oZWlnaHQpIC0gcG9zRGF0YS5pbnRlclBvc0RhdGEuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zSW4ubWFyZ2luQm90dG9tID0gcG9zRGF0YS5zdGFydFBvc0RhdGEubWFyZ2luQm90dG9tIC0gaGVpZ2h0Q2hhbmdlO1xuXG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zT3V0LndpZHRoICAgID0gcG9zRGF0YS5maW5hbFBvc0RhdGEud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zT3V0LmhlaWdodCAgID0gcG9zRGF0YS5maW5hbFBvc0RhdGEuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoQ2hhbmdlID0gKHBvc0RhdGEuZmluYWxQb3NEYXRhLndpZHRoIHx8IHBvc0RhdGEuc3RhcnRQb3NEYXRhLndpZHRoKSAtIHBvc0RhdGEuaW50ZXJQb3NEYXRhLndpZHRoO1xuXG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zT3V0Lm1hcmdpblJpZ2h0ID0gcG9zRGF0YS5maW5hbFBvc0RhdGEubWFyZ2luUmlnaHQgLSB3aWR0aENoYW5nZTtcblxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRDaGFuZ2UgPSAocG9zRGF0YS5maW5hbFBvc0RhdGEuaGVpZ2h0IHx8IHBvc0RhdGEuc3RhcnRQb3NEYXRhLmhlaWdodCkgLSBwb3NEYXRhLmludGVyUG9zRGF0YS5oZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NPdXQubWFyZ2luQm90dG9tID0gcG9zRGF0YS5maW5hbFBvc0RhdGEubWFyZ2luQm90dG9tIC0gaGVpZ2h0Q2hhbmdlO1xuXG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEudHdlZW5EYXRhLndpZHRoICAgICAgICAgPSBwb3NEYXRhLnBvc091dC53aWR0aCAtIHBvc0RhdGEucG9zSW4ud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEudHdlZW5EYXRhLmhlaWdodCAgICAgICAgPSBwb3NEYXRhLnBvc091dC5oZWlnaHQgLSBwb3NEYXRhLnBvc0luLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgcG9zRGF0YS50d2VlbkRhdGEubWFyZ2luUmlnaHQgICA9IHBvc0RhdGEucG9zT3V0Lm1hcmdpblJpZ2h0IC0gcG9zRGF0YS5wb3NJbi5tYXJnaW5SaWdodDtcbiAgICAgICAgICAgICAgICAgICAgcG9zRGF0YS50d2VlbkRhdGEubWFyZ2luQm90dG9tICA9IHBvc0RhdGEucG9zT3V0Lm1hcmdpbkJvdHRvbSAtIHBvc0RhdGEucG9zSW4ubWFyZ2luQm90dG9tO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgdHJhbnNmb3Jtc1xuXG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgZWZmZWN0TmFtZSA9IGVmZmVjdE5hbWVzW2pdOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0ID0gc2VsZi5lZmZlY3RzSW5bZWZmZWN0TmFtZV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZWZmZWN0IGluc3RhbmNlb2YgbWl4aXR1cC5UcmFuc2Zvcm1EYXRhKSB8fCAhZWZmZWN0LnZhbHVlKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc0luW2VmZmVjdE5hbWVdLnZhbHVlICAgICA9IGVmZmVjdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NPdXRbZWZmZWN0TmFtZV0udmFsdWUgICAgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEudHdlZW5EYXRhW2VmZmVjdE5hbWVdLnZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zT3V0W2VmZmVjdE5hbWVdLnZhbHVlIC0gcG9zRGF0YS5wb3NJbltlZmZlY3ROYW1lXS52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc0luW2VmZmVjdE5hbWVdLnVuaXQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NPdXRbZWZmZWN0TmFtZV0udW5pdCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnR3ZWVuRGF0YVtlZmZlY3ROYW1lXS51bml0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdC51bml0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgdGFyZ2V0ID0gb3BlcmF0aW9uLnRvSGlkZVtpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcG9zRGF0YSAgICAgICAgICAgICA9IG9wZXJhdGlvbi50b0hpZGVQb3NEYXRhW2ldO1xuICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zSW4gICAgICAgPSBuZXcgbWl4aXR1cC5TdHlsZURhdGEoKTtcbiAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc091dCAgICAgID0gbmV3IG1peGl0dXAuU3R5bGVEYXRhKCk7XG4gICAgICAgICAgICAgICAgcG9zRGF0YS50d2VlbkRhdGEgICA9IG5ldyBtaXhpdHVwLlN0eWxlRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gUHJvY2VzcyB4IGFuZCB5XG5cbiAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc0luLnggICAgID0gdGFyZ2V0LmlzU2hvd24gPyBwb3NEYXRhLnN0YXJ0UG9zRGF0YS54IC0gcG9zRGF0YS5pbnRlclBvc0RhdGEueCA6IDA7XG4gICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NJbi55ICAgICA9IHRhcmdldC5pc1Nob3duID8gcG9zRGF0YS5zdGFydFBvc0RhdGEueSAtIHBvc0RhdGEuaW50ZXJQb3NEYXRhLnkgOiAwO1xuICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zT3V0LnggICAgPSBzZWxmLmNvbmZpZy5hbmltYXRpb24ubnVkZ2UgPyAwIDogcG9zRGF0YS5wb3NJbi54O1xuICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zT3V0LnkgICAgPSBzZWxmLmNvbmZpZy5hbmltYXRpb24ubnVkZ2UgPyAwIDogcG9zRGF0YS5wb3NJbi55O1xuICAgICAgICAgICAgICAgIHBvc0RhdGEudHdlZW5EYXRhLnggPSBwb3NEYXRhLnBvc091dC54IC0gcG9zRGF0YS5wb3NJbi54O1xuICAgICAgICAgICAgICAgIHBvc0RhdGEudHdlZW5EYXRhLnkgPSBwb3NEYXRhLnBvc091dC55IC0gcG9zRGF0YS5wb3NJbi55O1xuXG4gICAgICAgICAgICAgICAgLy8gUHJvY2VzcyB3aWR0aCwgaGVpZ2h0LCBhbmQgbWFyZ2luc1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFuaW1hdGlvbi5hbmltYXRlUmVzaXplVGFyZ2V0cykge1xuICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc0luLndpZHRoICAgICAgICAgPSBwb3NEYXRhLnN0YXJ0UG9zRGF0YS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NJbi5oZWlnaHQgICAgICAgID0gcG9zRGF0YS5zdGFydFBvc0RhdGEuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoQ2hhbmdlID0gcG9zRGF0YS5zdGFydFBvc0RhdGEud2lkdGggLSBwb3NEYXRhLmludGVyUG9zRGF0YS53aWR0aDtcblxuICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc0luLm1hcmdpblJpZ2h0ID0gcG9zRGF0YS5zdGFydFBvc0RhdGEubWFyZ2luUmlnaHQgLSB3aWR0aENoYW5nZTtcblxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRDaGFuZ2UgPSBwb3NEYXRhLnN0YXJ0UG9zRGF0YS5oZWlnaHQgLSBwb3NEYXRhLmludGVyUG9zRGF0YS5oZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NJbi5tYXJnaW5Cb3R0b20gPSBwb3NEYXRhLnN0YXJ0UG9zRGF0YS5tYXJnaW5Cb3R0b20gLSBoZWlnaHRDaGFuZ2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUHJvY2VzcyBvcGFjaXR5XG5cbiAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc0luLm9wYWNpdHkgICAgICAgPSAxO1xuICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zT3V0Lm9wYWNpdHkgICAgICA9IHNlbGYuZWZmZWN0c091dC5vcGFjaXR5O1xuICAgICAgICAgICAgICAgIHBvc0RhdGEudHdlZW5EYXRhLm9wYWNpdHkgICA9IHBvc0RhdGEucG9zT3V0Lm9wYWNpdHkgLSBwb3NEYXRhLnBvc0luLm9wYWNpdHk7XG5cbiAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIHRyYW5zZm9ybXNcblxuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGVmZmVjdE5hbWUgPSBlZmZlY3ROYW1lc1tqXTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdCA9IHNlbGYuZWZmZWN0c091dFtlZmZlY3ROYW1lXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIShlZmZlY3QgaW5zdGFuY2VvZiBtaXhpdHVwLlRyYW5zZm9ybURhdGEpIHx8ICFlZmZlY3QudmFsdWUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zSW5bZWZmZWN0TmFtZV0udmFsdWUgICAgID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NPdXRbZWZmZWN0TmFtZV0udmFsdWUgICAgPSBlZmZlY3QudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgcG9zRGF0YS50d2VlbkRhdGFbZWZmZWN0TmFtZV0udmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NPdXRbZWZmZWN0TmFtZV0udmFsdWUgLSBwb3NEYXRhLnBvc0luW2VmZmVjdE5hbWVdLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zSW5bZWZmZWN0TmFtZV0udW5pdCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc091dFtlZmZlY3ROYW1lXS51bml0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc0RhdGEudHdlZW5EYXRhW2VmZmVjdE5hbWVdLnVuaXQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0LnVuaXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlckdldFR3ZWVuRGF0YScsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7T3BlcmF0aW9ufSAgICAgb3BlcmF0aW9uXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBtb3ZlVGFyZ2V0czogZnVuY3Rpb24ob3BlcmF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB0YXJnZXQgICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIG1vdmVEYXRhICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgcG9zRGF0YSAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBzdGF0dXNDaGFuZ2UgICAgPSAnJyxcbiAgICAgICAgICAgICAgICB3aWxsVHJhbnNpdGlvbiAgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBzdGFnZ2VySW5kZXggICAgPSAtMSxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICAgICAgPSAtMSxcbiAgICAgICAgICAgICAgICBjaGVja1Byb2dyZXNzICAgPSBzZWxmLmNoZWNrUHJvZ3Jlc3MuYmluZChzZWxmKTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlTW92ZVRhcmdldHMnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiB0aGlzIGlzIGFuIGV4dHJhIGxvb3AgaW4gYWRkaXRpb24gdG8gdGhlIGNhbGNzXG4gICAgICAgICAgICAvLyBkb25lIGluIGdldE9wZXJhdGlvbiwgY291bGQgc29tZSBvZiB0aGlzIGJlIGRvbmUgdGhlcmU/XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IG9wZXJhdGlvbi5zaG93W2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICBtb3ZlRGF0YSAgICA9IG5ldyBtaXhpdHVwLklNb3ZlRGF0YSgpO1xuICAgICAgICAgICAgICAgIHBvc0RhdGEgICAgID0gb3BlcmF0aW9uLnNob3dQb3NEYXRhW2ldO1xuXG4gICAgICAgICAgICAgICAgc3RhdHVzQ2hhbmdlID0gdGFyZ2V0LmlzU2hvd24gPyAnbm9uZScgOiAnc2hvdyc7XG5cbiAgICAgICAgICAgICAgICB3aWxsVHJhbnNpdGlvbiA9IHNlbGYud2lsbFRyYW5zaXRpb24oXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0NoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLmhhc0VmZmVjdCxcbiAgICAgICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NJbixcbiAgICAgICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NPdXRcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpbGxUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgbm9uLXRyYW5zaXRpb25pbmcgdGFyZ2V0cyBmcm9tIGluY3JlbWVudGluZyB0aGUgc3RhZ2dlckluZGV4XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhZ2dlckluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnNob3coKTtcblxuICAgICAgICAgICAgICAgIG1vdmVEYXRhLnBvc0luICAgICAgICAgID0gcG9zRGF0YS5wb3NJbjtcbiAgICAgICAgICAgICAgICBtb3ZlRGF0YS5wb3NPdXQgICAgICAgICA9IHBvc0RhdGEucG9zT3V0O1xuICAgICAgICAgICAgICAgIG1vdmVEYXRhLnN0YXR1c0NoYW5nZSAgID0gc3RhdHVzQ2hhbmdlO1xuICAgICAgICAgICAgICAgIG1vdmVEYXRhLnN0YWdnZXJJbmRleCAgID0gc3RhZ2dlckluZGV4O1xuICAgICAgICAgICAgICAgIG1vdmVEYXRhLm9wZXJhdGlvbiAgICAgID0gb3BlcmF0aW9uO1xuICAgICAgICAgICAgICAgIG1vdmVEYXRhLmNhbGxiYWNrICAgICAgID0gd2lsbFRyYW5zaXRpb24gPyBjaGVja1Byb2dyZXNzIDogbnVsbDtcblxuICAgICAgICAgICAgICAgIHRhcmdldC5tb3ZlKG1vdmVEYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgdGFyZ2V0ID0gb3BlcmF0aW9uLnRvSGlkZVtpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcG9zRGF0YSAgPSBvcGVyYXRpb24udG9IaWRlUG9zRGF0YVtpXTtcbiAgICAgICAgICAgICAgICBtb3ZlRGF0YSA9IG5ldyBtaXhpdHVwLklNb3ZlRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgc3RhdHVzQ2hhbmdlID0gJ2hpZGUnO1xuXG4gICAgICAgICAgICAgICAgd2lsbFRyYW5zaXRpb24gPSBzZWxmLndpbGxUcmFuc2l0aW9uKHN0YXR1c0NoYW5nZSwgcG9zRGF0YS5wb3NJbiwgcG9zRGF0YS5wb3NPdXQpO1xuXG4gICAgICAgICAgICAgICAgbW92ZURhdGEucG9zSW4gICAgICAgICAgPSBwb3NEYXRhLnBvc0luO1xuICAgICAgICAgICAgICAgIG1vdmVEYXRhLnBvc091dCAgICAgICAgID0gcG9zRGF0YS5wb3NPdXQ7XG4gICAgICAgICAgICAgICAgbW92ZURhdGEuc3RhdHVzQ2hhbmdlICAgPSBzdGF0dXNDaGFuZ2U7XG4gICAgICAgICAgICAgICAgbW92ZURhdGEuc3RhZ2dlckluZGV4ICAgPSBpO1xuICAgICAgICAgICAgICAgIG1vdmVEYXRhLm9wZXJhdGlvbiAgICAgID0gb3BlcmF0aW9uO1xuICAgICAgICAgICAgICAgIG1vdmVEYXRhLmNhbGxiYWNrICAgICAgID0gd2lsbFRyYW5zaXRpb24gPyBjaGVja1Byb2dyZXNzIDogbnVsbDtcblxuICAgICAgICAgICAgICAgIHRhcmdldC5tb3ZlKG1vdmVEYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFuaW1hdGlvbi5hbmltYXRlUmVzaXplQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50LnN0eWxlW21peGl0dXAuZmVhdHVyZXMudHJhbnNpdGlvblByb3BdID1cbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCAnICsgc2VsZi5jb25maWcuYW5pbWF0aW9uLmR1cmF0aW9uICsgJ21zIGVhc2UsICcgK1xuICAgICAgICAgICAgICAgICAgICAnd2lkdGggJyArIHNlbGYuY29uZmlnLmFuaW1hdGlvbi5kdXJhdGlvbiArICdtcyBlYXNlICc7XG5cbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5zdGFydEhlaWdodCAhPT0gb3BlcmF0aW9uLm5ld0hlaWdodCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnZpZXdwb3J0RGVsdGFZICE9PSBvcGVyYXRpb24uc3RhcnRIZWlnaHQgLSBvcGVyYXRpb24ubmV3SGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50LnN0eWxlLmhlaWdodCA9IG9wZXJhdGlvbi5uZXdIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnN0YXJ0V2lkdGggIT09IG9wZXJhdGlvbi5uZXdXaWR0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnZpZXdwb3J0RGVsdGFYICE9PSBvcGVyYXRpb24uc3RhcnRXaWR0aCAtIG9wZXJhdGlvbi5uZXdXaWR0aFxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudC5zdHlsZS53aWR0aCA9IG9wZXJhdGlvbi5uZXdXaWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi53aWxsQ2hhbmdlTGF5b3V0KSB7XG4gICAgICAgICAgICAgICAgaC5yZW1vdmVDbGFzcyhzZWxmLmRvbS5jb250YWluZXIsIHNlbGYuY29uZmlnLmxheW91dC5Db250YWluZXJDbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIGguYWRkQ2xhc3Moc2VsZi5kb20uY29udGFpbmVyLCBvcGVyYXRpb24ubmV3Q29udGFpbmVyQ2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJNb3ZlVGFyZ2V0cycsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn1cbiAgICAgICAgICovXG5cbiAgICAgICAgaGFzRWZmZWN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgRUZGRUNUQUJMRVMgPSBbXG4gICAgICAgICAgICAgICAgICAgICdzY2FsZScsXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknLCAndHJhbnNsYXRlWicsXG4gICAgICAgICAgICAgICAgICAgICdyb3RhdGVYJywgJ3JvdGF0ZVknLCAncm90YXRlWidcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGVmZmVjdE5hbWUgID0gJycsXG4gICAgICAgICAgICAgICAgZWZmZWN0ICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIHJlc3VsdCAgICAgID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgICAgPSAtMSxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5lZmZlY3RzSW4ub3BhY2l0eSAhPT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmNhbGxGaWx0ZXJzKCdyZXN1bHRIYXNFZmZlY3QnLCB0cnVlLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBlZmZlY3ROYW1lID0gRUZGRUNUQUJMRVNbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIGVmZmVjdCAgPSBzZWxmLmVmZmVjdHNJbltlZmZlY3ROYW1lXTtcbiAgICAgICAgICAgICAgICB2YWx1ZSAgID0gKHR5cGVvZiBlZmZlY3QgJiYgZWZmZWN0LnZhbHVlICE9PSAndW5kZWZpbmVkJykgP1xuICAgICAgICAgICAgICAgICAgICBlZmZlY3QudmFsdWUgOiBlZmZlY3Q7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNhbGxGaWx0ZXJzKCdyZXN1bHRIYXNFZmZlY3QnLCByZXN1bHQsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERldGVybWluZXMgaWYgYSB0YXJnZXQgZWxlbWVudCB3aWxsIHRyYW5zaXRpb24gaW5cbiAgICAgICAgICogc29tZSBmYXNpb24gYW5kIHRoZXJlZm9yZSByZXF1aXJlcyBiaW5kaW5nIG9mXG4gICAgICAgICAqIHRyYW5zaXRpb25FbmRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgICBzdGF0dXNDaGFuZ2VcbiAgICAgICAgICogQHBhcmFtICAge2Jvb2xlYW59ICAgICAgIGhhc0VmZmVjdFxuICAgICAgICAgKiBAcGFyYW0gICB7U3R5bGVEYXRhfSAgICAgcG9zSW5cbiAgICAgICAgICogQHBhcmFtICAge1N0eWxlRGF0YX0gICAgIHBvc091dFxuICAgICAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn1cbiAgICAgICAgICovXG5cbiAgICAgICAgd2lsbFRyYW5zaXRpb246IGZ1bmN0aW9uKHN0YXR1c0NoYW5nZSwgaGFzRWZmZWN0LCBwb3NJbiwgcG9zT3V0KSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgcmVzdWx0ICA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoIWguaXNWaXNpYmxlKHNlbGYuZG9tLmNvbnRhaW5lcikpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY29udGFpbmVyIGlzIG5vdCB2aXNpYmxlLCB0aGUgdHJhbnNpdGlvbkVuZFxuICAgICAgICAgICAgICAgIC8vIGV2ZW50IHdpbGwgbm90IG9jY3VyIGFuZCBNaXhJdFVwIHdpbGwgaGFuZ1xuXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIChzdGF0dXNDaGFuZ2UgIT09ICdub25lJyAmJiBoYXNFZmZlY3QpIHx8XG4gICAgICAgICAgICAgICAgcG9zSW4ueCAhPT0gcG9zT3V0LnggfHxcbiAgICAgICAgICAgICAgICBwb3NJbi55ICE9PSBwb3NPdXQueVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgb3BhY2l0eSBhbmQvb3IgdHJhbnNsYXRlIHdpbGwgY2hhbmdlXG5cbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxmLmNvbmZpZy5hbmltYXRpb24uYW5pbWF0ZVJlc2l6ZVRhcmdldHMpIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB3aWR0aCwgaGVpZ2h0IG9yIG1hcmdpbnMgd2lsbCBjaGFuZ2VcblxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IChcbiAgICAgICAgICAgICAgICAgICAgcG9zSW4ud2lkdGggIT09IHBvc091dC53aWR0aCB8fFxuICAgICAgICAgICAgICAgICAgICBwb3NJbi5oZWlnaHQgIT09IHBvc091dC5oZWlnaHQgfHxcbiAgICAgICAgICAgICAgICAgICAgcG9zSW4ubWFyZ2luUmlnaHQgIT09IHBvc091dC5tYXJnaW5SaWdodCB8fFxuICAgICAgICAgICAgICAgICAgICBwb3NJbi5tYXJnaW5Ub3AgIT09IHBvc091dC5tYXJnaW5Ub3BcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuY2FsbEZpbHRlcnMoJ3Jlc3VsdFdpbGxUcmFuc2l0aW9uJywgcmVzdWx0LCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMi4wLjBcbiAgICAgICAgICogQHBhcmFtICAge09wZXJhdGlvbn0gICAgIG9wZXJhdGlvblxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgY2hlY2tQcm9ncmVzczogZnVuY3Rpb24ob3BlcmF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNlbGYudGFyZ2V0c0RvbmUrKztcblxuICAgICAgICAgICAgaWYgKHNlbGYudGFyZ2V0c0JvdW5kID09PSBzZWxmLnRhcmdldHNEb25lKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jbGVhblVwKG9wZXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAyLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7T3BlcmF0aW9ufSAgICAgb3BlcmF0aW9uXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBjbGVhblVwOiBmdW5jdGlvbihvcGVyYXRpb24pIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB0YXJnZXQgICAgICAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICB3aGl0ZXNwYWNlQmVmb3JlICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICB3aGl0ZXNwYWNlQWZ0ZXIgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBuZXh0SW5RdWV1ZSAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICAgICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUNsZWFuVXAnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBzZWxmLnRhcmdldHNNb3ZlZCAgICAgICAgICA9XG4gICAgICAgICAgICAgICAgc2VsZi50YXJnZXRzSW1tb3ZhYmxlICA9XG4gICAgICAgICAgICAgICAgc2VsZi50YXJnZXRzQm91bmQgICAgICA9XG4gICAgICAgICAgICAgICAgc2VsZi50YXJnZXRzRG9uZSAgICAgICA9IDA7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IG9wZXJhdGlvbi5zaG93W2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xlYW5VcCgpO1xuXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnNob3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgdGFyZ2V0ID0gb3BlcmF0aW9uLnRvSGlkZVtpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsZWFuVXAoKTtcblxuICAgICAgICAgICAgICAgIHRhcmdldC5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcGVyYXRpb24ud2lsbFNvcnQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnByaW50U29ydChmYWxzZSwgb3BlcmF0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVtb3ZlIGFueSBzdHlsZXMgYXBwbGllZCB0byB0aGUgcGFyZW50IGNvbnRhaW5lclxuXG4gICAgICAgICAgICBzZWxmLmRvbS5wYXJlbnQuc3R5bGVbbWl4aXR1cC5mZWF0dXJlcy50cmFuc2l0aW9uUHJvcF0gICAgICAgICAgICAgPVxuICAgICAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudC5zdHlsZS5oZWlnaHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID1cbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5wYXJlbnQuc3R5bGUud2lkdGggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9XG4gICAgICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50LnN0eWxlLm92ZXJmbG93ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPVxuICAgICAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudC5zdHlsZVttaXhpdHVwLmZlYXR1cmVzLnBlcnNwZWN0aXZlUHJvcF0gICAgICAgID1cbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5wYXJlbnQuc3R5bGVbbWl4aXR1cC5mZWF0dXJlcy5wZXJzcGVjdGl2ZU9yaWdpblByb3BdICA9ICcnO1xuXG4gICAgICAgICAgICBpZiAob3BlcmF0aW9uLndpbGxDaGFuZ2VMYXlvdXQpIHtcbiAgICAgICAgICAgICAgICBoLnJlbW92ZUNsYXNzKHNlbGYuZG9tLmNvbnRhaW5lciwgb3BlcmF0aW9uLnN0YXJ0Q29udGFpbmVyQ2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICBoLmFkZENsYXNzKHNlbGYuZG9tLmNvbnRhaW5lciwgb3BlcmF0aW9uLm5ld0NvbnRhaW5lckNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcGVyYXRpb24udG9SZW1vdmUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgdGFyZ2V0ID0gc2VsZi50YXJnZXRzW2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi50b1JlbW92ZS5pbmRleE9mKHRhcmdldCkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh3aGl0ZXNwYWNlQmVmb3JlID0gdGFyZ2V0LmRvbS5lbC5wcmV2aW91c1NpYmxpbmcpICYmIHdoaXRlc3BhY2VCZWZvcmUubm9kZU5hbWUgPT09ICcjdGV4dCcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAod2hpdGVzcGFjZUFmdGVyID0gdGFyZ2V0LmRvbS5lbC5uZXh0U2libGluZykgJiYgd2hpdGVzcGFjZUFmdGVyLm5vZGVOYW1lID09PSAnI3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoLnJlbW92ZVdoaXRlc3BhY2Uod2hpdGVzcGFjZUJlZm9yZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3BlcmF0aW9uLndpbGxTb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTkI6IFNvcnRpbmcgd2lsbCByZW1vdmUgdGFyZ2V0cyBhcyBhIGJpLXByb2R1Y3Qgb2YgYHByaW50U29ydCgpYFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50LnJlbW92ZUNoaWxkKHRhcmdldC5kb20uZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRhcmdldHMuc3BsaWNlKGksIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuaXNJbkRvbSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBTaW5jZSB0YXJnZXRzIGhhdmUgYmVlbiByZW1vdmVkLCB0aGUgb3JpZ2luYWwgb3JkZXIgbXVzdCBiZSB1cGRhdGVkXG5cbiAgICAgICAgICAgICAgICBzZWxmLm9yaWdPcmRlciA9IHNlbGYudGFyZ2V0cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi53aWxsU29ydCkge1xuICAgICAgICAgICAgICAgIHNlbGYudGFyZ2V0cyA9IG9wZXJhdGlvbi5uZXdPcmRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5zdGF0ZSA9IG9wZXJhdGlvbi5uZXdTdGF0ZTtcbiAgICAgICAgICAgIHNlbGYubGFzdE9wZXJhdGlvbiA9IG9wZXJhdGlvbjtcblxuICAgICAgICAgICAgc2VsZi5kb20udGFyZ2V0cyA9IHNlbGYuc3RhdGUudGFyZ2V0cztcblxuICAgICAgICAgICAgLy8gbWl4RW5kXG5cbiAgICAgICAgICAgIG1peGl0dXAuZXZlbnRzLmZpcmUoJ21peEVuZCcsIHNlbGYuZG9tLmNvbnRhaW5lciwge1xuICAgICAgICAgICAgICAgIHN0YXRlOiBzZWxmLnN0YXRlLFxuICAgICAgICAgICAgICAgIGluc3RhbmNlOiBzZWxmXG4gICAgICAgICAgICB9LCBzZWxmLmRvbS5kb2N1bWVudCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZi5jb25maWcuY2FsbGJhY2tzLm9uTWl4RW5kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcuY2FsbGJhY2tzLm9uTWl4RW5kLmNhbGwoc2VsZi5kb20uY29udGFpbmVyLCBzZWxmLnN0YXRlLCBzZWxmKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi5oYXNGYWlsZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBtaXhGYWlsXG5cbiAgICAgICAgICAgICAgICBtaXhpdHVwLmV2ZW50cy5maXJlKCdtaXhGYWlsJywgc2VsZi5kb20uY29udGFpbmVyLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBzZWxmLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogc2VsZlxuICAgICAgICAgICAgICAgIH0sIHNlbGYuZG9tLmRvY3VtZW50KTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZi5jb25maWcuY2FsbGJhY2tzLm9uTWl4RmFpbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5jYWxsYmFja3Mub25NaXhGYWlsLmNhbGwoc2VsZi5kb20uY29udGFpbmVyLCBzZWxmLnN0YXRlLCBzZWxmKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoLmFkZENsYXNzKHNlbGYuZG9tLmNvbnRhaW5lciwgaC5nZXRDbGFzc25hbWUoc2VsZi5jb25maWcuY2xhc3NOYW1lcywgJ2NvbnRhaW5lcicsIHNlbGYuY29uZmlnLmNsYXNzTmFtZXMubW9kaWZpZXJGYWlsZWQpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXNlci1kZWZpbmVkIGNhbGxiYWNrIGZ1bmN0aW9uXG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZi51c2VyQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnVzZXJDYWxsYmFjay5jYWxsKHNlbGYuZG9tLmNvbnRhaW5lciwgc2VsZi5zdGF0ZSwgc2VsZik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZi51c2VyRGVmZXJyZWQucmVzb2x2ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHNlbGYudXNlckRlZmVycmVkLnJlc29sdmUoc2VsZi5zdGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYudXNlckNhbGxiYWNrICA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLnVzZXJEZWZlcnJlZCAgPSBudWxsO1xuICAgICAgICAgICAgc2VsZi5sYXN0Q2xpY2tlZCAgID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYuaXNUb2dnbGluZyAgICA9IGZhbHNlO1xuICAgICAgICAgICAgc2VsZi5pc0J1c3kgICAgICAgID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChzZWxmLnF1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZVJlYWRRdWV1ZUNsZWFuVXAnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAgICAgbmV4dEluUXVldWUgPSBzZWxmLnF1ZXVlLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgbm9uLXB1YmxpYyBBUEkgcHJvcGVydGllcyBzdG9yZWQgaW4gcXVldWVcblxuICAgICAgICAgICAgICAgIHNlbGYudXNlckRlZmVycmVkICA9IG5leHRJblF1ZXVlLmRlZmVycmVkO1xuICAgICAgICAgICAgICAgIHNlbGYuaXNUb2dnbGluZyAgICA9IG5leHRJblF1ZXVlLmlzVG9nZ2xpbmc7XG4gICAgICAgICAgICAgICAgc2VsZi5sYXN0Q2xpY2tlZCAgID0gbmV4dEluUXVldWUudHJpZ2dlckVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiAobmV4dEluUXVldWUuaW5zdHJ1Y3Rpb24uY29tbWFuZCBpbnN0YW5jZW9mIG1peGl0dXAuQ29tbWFuZE11bHRpbWl4KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubXVsdGltaXguYXBwbHkoc2VsZiwgbmV4dEluUXVldWUuYXJncyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXRhc2V0LmFwcGx5KHNlbGYsIG5leHRJblF1ZXVlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJDbGVhblVwJywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDIuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtBcnJheTwqPn0gIGFyZ3NcbiAgICAgICAgICogQHJldHVybiAge21peGl0dXAuVXNlckluc3RydWN0aW9ufVxuICAgICAgICAgKi9cblxuICAgICAgICBwYXJzZU11bHRpbWl4QXJnczogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbiA9IG5ldyBtaXhpdHVwLlVzZXJJbnN0cnVjdGlvbigpLFxuICAgICAgICAgICAgICAgIGFyZyAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBpbnN0cnVjdGlvbi5hbmltYXRlID0gc2VsZi5jb25maWcuYW5pbWF0aW9uLmVuYWJsZTtcbiAgICAgICAgICAgIGluc3RydWN0aW9uLmNvbW1hbmQgPSBuZXcgbWl4aXR1cC5Db21tYW5kTXVsdGltaXgoKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcmcgPSBhcmdzW2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFyZyA9PT0gbnVsbCkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaC5leHRlbmQoaW5zdHJ1Y3Rpb24uY29tbWFuZCwgYXJnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5hbmltYXRlID0gYXJnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5jYWxsYmFjayA9IGFyZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENvZXJjZSBhcmJpdHJhcnkgY29tbWFuZCBhcmd1bWVudHMgaW50byB0eXBlZCBjb21tYW5kIG9iamVjdHNcblxuICAgICAgICAgICAgaWYgKGluc3RydWN0aW9uLmNvbW1hbmQuaW5zZXJ0ICYmICEoaW5zdHJ1Y3Rpb24uY29tbWFuZC5pbnNlcnQgaW5zdGFuY2VvZiBtaXhpdHVwLkNvbW1hbmRJbnNlcnQpKSB7XG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY29tbWFuZC5pbnNlcnQgPSBzZWxmLnBhcnNlSW5zZXJ0QXJncyhbaW5zdHJ1Y3Rpb24uY29tbWFuZC5pbnNlcnRdKS5jb21tYW5kO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5zdHJ1Y3Rpb24uY29tbWFuZC5yZW1vdmUgJiYgIShpbnN0cnVjdGlvbi5jb21tYW5kLnJlbW92ZSBpbnN0YW5jZW9mIG1peGl0dXAuQ29tbWFuZFJlbW92ZSkpIHtcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5jb21tYW5kLnJlbW92ZSA9IHNlbGYucGFyc2VSZW1vdmVBcmdzKFtpbnN0cnVjdGlvbi5jb21tYW5kLnJlbW92ZV0pLmNvbW1hbmQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbnN0cnVjdGlvbi5jb21tYW5kLmZpbHRlciAmJiAhKGluc3RydWN0aW9uLmNvbW1hbmQuZmlsdGVyIGluc3RhbmNlb2YgbWl4aXR1cC5Db21tYW5kRmlsdGVyKSkge1xuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmNvbW1hbmQuZmlsdGVyID0gc2VsZi5wYXJzZUZpbHRlckFyZ3MoW2luc3RydWN0aW9uLmNvbW1hbmQuZmlsdGVyXSkuY29tbWFuZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluc3RydWN0aW9uLmNvbW1hbmQuc29ydCAmJiAhKGluc3RydWN0aW9uLmNvbW1hbmQuc29ydCBpbnN0YW5jZW9mIG1peGl0dXAuQ29tbWFuZFNvcnQpKSB7XG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY29tbWFuZC5zb3J0ID0gc2VsZi5wYXJzZVNvcnRBcmdzKFtpbnN0cnVjdGlvbi5jb21tYW5kLnNvcnRdKS5jb21tYW5kO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5zdHJ1Y3Rpb24uY29tbWFuZC5jaGFuZ2VMYXlvdXQgJiYgIShpbnN0cnVjdGlvbi5jb21tYW5kLmNoYW5nZUxheW91dCBpbnN0YW5jZW9mIG1peGl0dXAuQ29tbWFuZENoYW5nZUxheW91dCkpIHtcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5jb21tYW5kLmNoYW5nZUxheW91dCA9IHNlbGYucGFyc2VDaGFuZ2VMYXlvdXRBcmdzKFtpbnN0cnVjdGlvbi5jb21tYW5kLmNoYW5nZUxheW91dF0pLmNvbW1hbmQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluc3RydWN0aW9uID0gc2VsZi5jYWxsRmlsdGVycygnaW5zdHJ1Y3Rpb25QYXJzZU11bHRpbWl4QXJncycsIGluc3RydWN0aW9uLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBoLmZyZWV6ZShpbnN0cnVjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnN0cnVjdGlvbjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDIuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtBcnJheTwqPn0gIGFyZ3NcbiAgICAgICAgICogQHJldHVybiAge21peGl0dXAuVXNlckluc3RydWN0aW9ufVxuICAgICAgICAgKi9cblxuICAgICAgICBwYXJzZUZpbHRlckFyZ3M6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24gPSBuZXcgbWl4aXR1cC5Vc2VySW5zdHJ1Y3Rpb24oKSxcbiAgICAgICAgICAgICAgICBhcmcgICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uYW5pbWF0ZSA9IHNlbGYuY29uZmlnLmFuaW1hdGlvbi5lbmFibGU7XG4gICAgICAgICAgICBpbnN0cnVjdGlvbi5jb21tYW5kID0gbmV3IG1peGl0dXAuQ29tbWFuZEZpbHRlcigpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFyZyA9IGFyZ3NbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VsZWN0b3JcblxuICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5jb21tYW5kLnNlbGVjdG9yID0gYXJnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJnID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmNvbW1hbmQuY29sbGVjdGlvbiA9IFtdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgaC5pc0VsZW1lbnQoYXJnLCBzZWxmLmRvbS5kb2N1bWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2luZ2xlIGVsZW1lbnRcblxuICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5jb21tYW5kLmNvbGxlY3Rpb24gPSBbYXJnXTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIHR5cGVvZiBhcmcubGVuZ3RoICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBNdWx0aXBsZSBlbGVtZW50cyBpbiBhcnJheSwgTm9kZUxpc3Qgb3IgalF1ZXJ5IGNvbGxlY3Rpb25cblxuICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5jb21tYW5kLmNvbGxlY3Rpb24gPSBoLmFycmF5RnJvbUxpc3QoYXJnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZpbHRlciBjb21tYW5kXG5cbiAgICAgICAgICAgICAgICAgICAgaC5leHRlbmQoaW5zdHJ1Y3Rpb24uY29tbWFuZCwgYXJnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5hbmltYXRlID0gYXJnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5jYWxsYmFjayA9IGFyZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbnN0cnVjdGlvbi5jb21tYW5kLnNlbGVjdG9yICYmIGluc3RydWN0aW9uLmNvbW1hbmQuY29sbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtaXhpdHVwLm1lc3NhZ2VzLmVycm9yRmlsdGVySW52YWxpZEFyZ3VtZW50cygpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5zdHJ1Y3Rpb24gPSBzZWxmLmNhbGxGaWx0ZXJzKCdpbnN0cnVjdGlvblBhcnNlRmlsdGVyQXJncycsIGluc3RydWN0aW9uLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBoLmZyZWV6ZShpbnN0cnVjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnN0cnVjdGlvbjtcbiAgICAgICAgfSxcblxuICAgICAgICBwYXJzZVNvcnRBcmdzOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uID0gbmV3IG1peGl0dXAuVXNlckluc3RydWN0aW9uKCksXG4gICAgICAgICAgICAgICAgYXJnICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIHNvcnRTdHJpbmcgID0gJycsXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uYW5pbWF0ZSA9IHNlbGYuY29uZmlnLmFuaW1hdGlvbi5lbmFibGU7XG4gICAgICAgICAgICBpbnN0cnVjdGlvbi5jb21tYW5kID0gbmV3IG1peGl0dXAuQ29tbWFuZFNvcnQoKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcmcgPSBhcmdzW2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFyZyA9PT0gbnVsbCkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiBhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvcnQgc3RyaW5nXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRTdHJpbmcgPSBhcmc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXJyYXkgb2YgZWxlbWVudCByZWZlcmVuY2VzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY29tbWFuZC5jb2xsZWN0aW9uID0gaC5hcnJheUZyb21MaXN0KGFyZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmFuaW1hdGUgPSBhcmc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5jYWxsYmFjayA9IGFyZztcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc29ydFN0cmluZykge1xuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmNvbW1hbmQgPSBzZWxmLnBhcnNlU29ydFN0cmluZyhzb3J0U3RyaW5nLCBpbnN0cnVjdGlvbi5jb21tYW5kKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5zdHJ1Y3Rpb24gPSBzZWxmLmNhbGxGaWx0ZXJzKCdpbnN0cnVjdGlvblBhcnNlU29ydEFyZ3MnLCBpbnN0cnVjdGlvbiwgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaC5mcmVlemUoaW5zdHJ1Y3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gaW5zdHJ1Y3Rpb247XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAyLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7QXJyYXk8Kj59ICBhcmdzXG4gICAgICAgICAqIEByZXR1cm4gIHttaXhpdHVwLlVzZXJJbnN0cnVjdGlvbn1cbiAgICAgICAgICovXG5cbiAgICAgICAgcGFyc2VJbnNlcnRBcmdzOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uID0gbmV3IG1peGl0dXAuVXNlckluc3RydWN0aW9uKCksXG4gICAgICAgICAgICAgICAgYXJnICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGkgICAgICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIGluc3RydWN0aW9uLmFuaW1hdGUgPSBzZWxmLmNvbmZpZy5hbmltYXRpb24uZW5hYmxlO1xuICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY29tbWFuZCA9IG5ldyBtaXhpdHVwLkNvbW1hbmRJbnNlcnQoKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcmcgPSBhcmdzW2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFyZyA9PT0gbnVsbCkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5zZXJ0IGluZGV4XG5cbiAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY29tbWFuZC5pbmRleCA9IGFyZztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnICYmIFsnYmVmb3JlJywgJ2FmdGVyJ10uaW5kZXhPZihhcmcpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gJ2JlZm9yZScvJ2FmdGVyJ1xuXG4gICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmNvbW1hbmQucG9zaXRpb24gPSBhcmc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBNYXJrdXBcblxuICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5jb21tYW5kLmNvbGxlY3Rpb24gPVxuICAgICAgICAgICAgICAgICAgICAgICAgaC5hcnJheUZyb21MaXN0KGguY3JlYXRlRWxlbWVudChhcmcpLmNoaWxkTm9kZXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgaC5pc0VsZW1lbnQoYXJnLCBzZWxmLmRvbS5kb2N1bWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2luZ2xlIGVsZW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAhaW5zdHJ1Y3Rpb24uY29tbWFuZC5jb2xsZWN0aW9uLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAoaW5zdHJ1Y3Rpb24uY29tbWFuZC5jb2xsZWN0aW9uID0gW2FyZ10pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIChpbnN0cnVjdGlvbi5jb21tYW5kLnNpYmxpbmcgPSBhcmcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBNdWx0aXBsZSBlbGVtZW50cyBpbiBhcnJheSBvciBqUXVlcnkgY29sbGVjdGlvblxuXG4gICAgICAgICAgICAgICAgICAgICFpbnN0cnVjdGlvbi5jb21tYW5kLmNvbGxlY3Rpb24ubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgIChpbnN0cnVjdGlvbi5jb21tYW5kLmNvbGxlY3Rpb24gPSBhcmcpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmNvbW1hbmQuc2libGluZyA9IGFyZ1swXTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZy5jaGlsZE5vZGVzICYmIGFyZy5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBEb2N1bWVudCBmcmFnbWVudFxuXG4gICAgICAgICAgICAgICAgICAgICFpbnN0cnVjdGlvbi5jb21tYW5kLmNvbGxlY3Rpb24ubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmNvbW1hbmQuY29sbGVjdGlvbiA9IGguYXJyYXlGcm9tTGlzdChhcmcuY2hpbGROb2RlcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY29tbWFuZC5zaWJsaW5nID0gYXJnLmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyBJbnNlcnQgY29tbWFuZFxuXG4gICAgICAgICAgICAgICAgICAgIGguZXh0ZW5kKGluc3RydWN0aW9uLmNvbW1hbmQsIGFyZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uYW5pbWF0ZSA9IGFyZztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY2FsbGJhY2sgPSBhcmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5zdHJ1Y3Rpb24uY29tbWFuZC5pbmRleCAmJiBpbnN0cnVjdGlvbi5jb21tYW5kLnNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWl4aXR1cC5tZXNzYWdlcy5lcnJvckluc2VydEludmFsaWRBcmd1bWVudHMoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaW5zdHJ1Y3Rpb24uY29tbWFuZC5jb2xsZWN0aW9uLmxlbmd0aCAmJiBzZWxmLmNvbmZpZy5kZWJ1Zy5zaG93V2FybmluZ3MpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4obWl4aXR1cC5tZXNzYWdlcy53YXJuaW5nSW5zZXJ0Tm9FbGVtZW50cygpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5zdHJ1Y3Rpb24gPSBzZWxmLmNhbGxGaWx0ZXJzKCdpbnN0cnVjdGlvblBhcnNlSW5zZXJ0QXJncycsIGluc3RydWN0aW9uLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBoLmZyZWV6ZShpbnN0cnVjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnN0cnVjdGlvbjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtBcnJheTwqPn0gIGFyZ3NcbiAgICAgICAgICogQHJldHVybiAge21peGl0dXAuVXNlckluc3RydWN0aW9ufVxuICAgICAgICAgKi9cblxuICAgICAgICBwYXJzZVJlbW92ZUFyZ3M6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24gPSBuZXcgbWl4aXR1cC5Vc2VySW5zdHJ1Y3Rpb24oKSxcbiAgICAgICAgICAgICAgICB0YXJnZXQgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgYXJnICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGkgICAgICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIGluc3RydWN0aW9uLmFuaW1hdGUgPSBzZWxmLmNvbmZpZy5hbmltYXRpb24uZW5hYmxlO1xuICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY29tbWFuZCA9IG5ldyBtaXhpdHVwLkNvbW1hbmRSZW1vdmUoKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcmcgPSBhcmdzW2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFyZyA9PT0gbnVsbCkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiBhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnRhcmdldHNbYXJnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmNvbW1hbmQudGFyZ2V0c1swXSA9IHNlbGYudGFyZ2V0c1thcmddO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmNvbW1hbmQuY29sbGVjdGlvbiA9IGguYXJyYXlGcm9tTGlzdChzZWxmLmRvbS5wYXJlbnQucXVlcnlTZWxlY3RvckFsbChhcmcpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJnICYmIGFyZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5jb21tYW5kLmNvbGxlY3Rpb24gPSBhcmc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGguaXNFbGVtZW50KGFyZywgc2VsZi5kb20uZG9jdW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY29tbWFuZC5jb2xsZWN0aW9uID0gW2FyZ107XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBjb21tYW5kXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoLmV4dGVuZChpbnN0cnVjdGlvbi5jb21tYW5kLCBhcmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5hbmltYXRlID0gYXJnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY2FsbGJhY2sgPSBhcmc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluc3RydWN0aW9uLmNvbW1hbmQuY29sbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyB0YXJnZXQgPSBzZWxmLnRhcmdldHNbaV07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdHJ1Y3Rpb24uY29tbWFuZC5jb2xsZWN0aW9uLmluZGV4T2YodGFyZ2V0LmRvbS5lbCkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY29tbWFuZC50YXJnZXRzLnB1c2godGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpbnN0cnVjdGlvbi5jb21tYW5kLnRhcmdldHMubGVuZ3RoICYmIHNlbGYuY29uZmlnLmRlYnVnLnNob3dXYXJuaW5ncykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihtaXhpdHVwLm1lc3NhZ2VzLndhcm5pbmdSZW1vdmVOb0VsZW1lbnRzKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoLmZyZWV6ZShpbnN0cnVjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnN0cnVjdGlvbjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtBcnJheTwqPn0gIGFyZ3NcbiAgICAgICAgICogQHJldHVybiAge21peGl0dXAuVXNlckluc3RydWN0aW9ufVxuICAgICAgICAgKi9cblxuICAgICAgICBwYXJzZURhdGFzZXRBcmdzOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uID0gbmV3IG1peGl0dXAuVXNlckluc3RydWN0aW9uKCksXG4gICAgICAgICAgICAgICAgYXJnICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGkgICAgICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIGluc3RydWN0aW9uLmFuaW1hdGUgPSBzZWxmLmNvbmZpZy5hbmltYXRpb24uZW5hYmxlO1xuICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY29tbWFuZCA9IG5ldyBtaXhpdHVwLkNvbW1hbmREYXRhc2V0KCk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnID0gYXJnc1tpXTtcblxuICAgICAgICAgICAgICAgIGlmIChhcmcgPT09IG51bGwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgYXJnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpIHx8IHR5cGVvZiBhcmcubGVuZ3RoID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmNvbW1hbmQuZGF0YXNldCA9IGFyZztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdlIGxheW91dCBjb21tYW5kXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoLmV4dGVuZChpbnN0cnVjdGlvbi5jb21tYW5kLCBhcmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5hbmltYXRlID0gYXJnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY2FsbGJhY2sgPSBhcmc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaC5mcmVlemUoaW5zdHJ1Y3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gaW5zdHJ1Y3Rpb247XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7QXJyYXk8Kj59ICBhcmdzXG4gICAgICAgICAqIEByZXR1cm4gIHttaXhpdHVwLlVzZXJJbnN0cnVjdGlvbn1cbiAgICAgICAgICovXG5cbiAgICAgICAgcGFyc2VDaGFuZ2VMYXlvdXRBcmdzOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uID0gbmV3IG1peGl0dXAuVXNlckluc3RydWN0aW9uKCksXG4gICAgICAgICAgICAgICAgYXJnICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGkgICAgICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIGluc3RydWN0aW9uLmFuaW1hdGUgPSBzZWxmLmNvbmZpZy5hbmltYXRpb24uZW5hYmxlO1xuICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY29tbWFuZCA9IG5ldyBtaXhpdHVwLkNvbW1hbmRDaGFuZ2VMYXlvdXQoKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcmcgPSBhcmdzW2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFyZyA9PT0gbnVsbCkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiBhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmNvbW1hbmQuY29udGFpbmVyQ2xhc3NOYW1lID0gYXJnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoYW5nZSBsYXlvdXQgY29tbWFuZFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBoLmV4dGVuZChpbnN0cnVjdGlvbi5jb21tYW5kLCBhcmcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5hbmltYXRlID0gYXJnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY2FsbGJhY2sgPSBhcmc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaC5mcmVlemUoaW5zdHJ1Y3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gaW5zdHJ1Y3Rpb247XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAgICAgIHttaXhpdHVwLlF1ZXVlSXRlbX0gICAgICAgICBxdWV1ZUl0ZW1cbiAgICAgICAgICogQHJldHVybiAgICAgIHtQcm9taXNlLjxtaXhpdHVwLlN0YXRlPn1cbiAgICAgICAgICovXG5cbiAgICAgICAgcXVldWVNaXg6IGZ1bmN0aW9uKHF1ZXVlSXRlbSkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICB0b2dnbGVTZWxlY3RvciAgPSAnJztcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlUXVldWVNaXgnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBkZWZlcnJlZCA9IGguZGVmZXIobWl4aXR1cC5saWJyYXJpZXMpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuYW5pbWF0aW9uLnF1ZXVlICYmIHNlbGYucXVldWUubGVuZ3RoIDwgc2VsZi5jb25maWcuYW5pbWF0aW9uLnF1ZXVlTGltaXQpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZUl0ZW0uZGVmZXJyZWQgPSBkZWZlcnJlZDtcblxuICAgICAgICAgICAgICAgIHNlbGYucXVldWUucHVzaChxdWV1ZUl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgLy8gS2VlcCBjb250cm9scyBpbiBzeW5jIHdpdGggdXNlciBpbnRlcmFjdGlvbnMuIE1peGVyIHdpbGwgY2F0Y2ggdXAgYXMgaXQgZHJhaW5zIHRoZSBxdWV1ZS5cblxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5jb250cm9scy5lbmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuaXNUb2dnbGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5idWlsZFRvZ2dsZUFycmF5KHF1ZXVlSXRlbS5pbnN0cnVjdGlvbi5jb21tYW5kKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlU2VsZWN0b3IgPSBzZWxmLmdldFRvZ2dsZVNlbGVjdG9yKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlQ29udHJvbHMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogdG9nZ2xlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlQ29udHJvbHMocXVldWVJdGVtLmluc3RydWN0aW9uLmNvbW1hbmQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuZGVidWcuc2hvd1dhcm5pbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihtaXhpdHVwLm1lc3NhZ2VzLndhcm5pbmdNdWx0aW1peEluc3RhbmNlUXVldWVGdWxsKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoc2VsZi5zdGF0ZSk7XG5cbiAgICAgICAgICAgICAgICBtaXhpdHVwLmV2ZW50cy5maXJlKCdtaXhCdXN5Jywgc2VsZi5kb20uY29udGFpbmVyLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBzZWxmLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogc2VsZlxuICAgICAgICAgICAgICAgIH0sIHNlbGYuZG9tLmRvY3VtZW50KTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZi5jb25maWcuY2FsbGJhY2tzLm9uTWl4QnVzeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5jYWxsYmFja3Mub25NaXhCdXN5LmNhbGwoc2VsZi5kb20uY29udGFpbmVyLCBzZWxmLnN0YXRlLCBzZWxmKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNhbGxGaWx0ZXJzKCdwcm9taXNlUXVldWVNaXgnLCBkZWZlcnJlZC5wcm9taXNlLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAge0FycmF5LjxvYmplY3Q+fSAgICBuZXdEYXRhc2V0XG4gICAgICAgICAqIEByZXR1cm4gIHtPcGVyYXRpb259XG4gICAgICAgICAqL1xuXG4gICAgICAgIGdldERhdGFPcGVyYXRpb246IGZ1bmN0aW9uKG5ld0RhdGFzZXQpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24gICAgICAgICAgID0gbmV3IG1peGl0dXAuT3BlcmF0aW9uKCksXG4gICAgICAgICAgICAgICAgc3RhcnREYXRhc2V0ICAgICAgICA9IFtdO1xuXG4gICAgICAgICAgICBvcGVyYXRpb24gPSBzZWxmLmNhbGxGaWx0ZXJzKCdvcGVyYXRpb25Vbm1hcHBlZEdldERhdGFPcGVyYXRpb24nLCBvcGVyYXRpb24sIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmIChzZWxmLmRvbS50YXJnZXRzLmxlbmd0aCAmJiAhKHN0YXJ0RGF0YXNldCA9IChzZWxmLnN0YXRlLmFjdGl2ZURhdGFzZXQgfHwgW10pKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWl4aXR1cC5tZXNzYWdlcy5lcnJvckRhdGFzZXROb3RTZXQoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9wZXJhdGlvbi5pZCAgICAgICAgICAgID0gaC5yYW5kb21IZXgoKTtcbiAgICAgICAgICAgIG9wZXJhdGlvbi5zdGFydFN0YXRlICAgID0gc2VsZi5zdGF0ZTtcbiAgICAgICAgICAgIG9wZXJhdGlvbi5zdGFydERhdGFzZXQgID0gc3RhcnREYXRhc2V0O1xuICAgICAgICAgICAgb3BlcmF0aW9uLm5ld0RhdGFzZXQgICAgPSBuZXdEYXRhc2V0LnNsaWNlKCk7XG5cbiAgICAgICAgICAgIHNlbGYuZGlmZkRhdGFzZXRzKG9wZXJhdGlvbik7XG5cbiAgICAgICAgICAgIG9wZXJhdGlvbi5zdGFydE9yZGVyID0gc2VsZi50YXJnZXRzO1xuICAgICAgICAgICAgb3BlcmF0aW9uLm5ld09yZGVyID0gb3BlcmF0aW9uLnNob3c7XG5cbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5hbmltYXRpb24uZW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5nZXRTdGFydE1peERhdGEob3BlcmF0aW9uKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNldEludGVyKG9wZXJhdGlvbik7XG5cbiAgICAgICAgICAgICAgICBvcGVyYXRpb24uZG9jU3RhdGUgPSBoLmdldERvY3VtZW50U3RhdGUoc2VsZi5kb20uZG9jdW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5nZXRJbnRlck1peERhdGEob3BlcmF0aW9uKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNldEZpbmFsKG9wZXJhdGlvbik7XG4gICAgICAgICAgICAgICAgc2VsZi5nZXRGaW5hbE1peERhdGEob3BlcmF0aW9uKTtcblxuICAgICAgICAgICAgICAgIHNlbGYucGFyc2VFZmZlY3RzKCk7XG5cbiAgICAgICAgICAgICAgICBvcGVyYXRpb24uaGFzRWZmZWN0ID0gc2VsZi5oYXNFZmZlY3QoKTtcblxuICAgICAgICAgICAgICAgIHNlbGYuZ2V0VHdlZW5EYXRhKG9wZXJhdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYudGFyZ2V0cyA9IG9wZXJhdGlvbi5zaG93LnNsaWNlKCk7XG5cbiAgICAgICAgICAgIG9wZXJhdGlvbi5uZXdTdGF0ZSA9IHNlbGYuYnVpbGRTdGF0ZShvcGVyYXRpb24pO1xuXG4gICAgICAgICAgICAvLyBOQjogVGFyZ2V0cyB0byBiZSByZW1vdmVkIG11c3QgYmUgaW5jbHVkZWQgaW4gYHNlbGYudGFyZ2V0c2AgZm9yIHJlbW92YWwgZHVyaW5nIGNsZWFuIHVwLFxuICAgICAgICAgICAgLy8gYnV0IGFyZSBhZGRlZCBhZnRlciBzdGF0ZSBpcyBidWlsdCBzbyB0aGF0IHN0YXRlIGlzIGFjY3VyYXRlXG5cbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHNlbGYudGFyZ2V0cywgb3BlcmF0aW9uLnRvUmVtb3ZlKTtcblxuICAgICAgICAgICAgb3BlcmF0aW9uID0gc2VsZi5jYWxsRmlsdGVycygnb3BlcmF0aW9uTWFwcGVkR2V0RGF0YU9wZXJhdGlvbicsIG9wZXJhdGlvbiwgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgcmV0dXJuIG9wZXJhdGlvbjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHttaXhpdHVwLk9wZXJhdGlvbn0gb3BlcmF0aW9uXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBkaWZmRGF0YXNldHM6IGZ1bmN0aW9uKG9wZXJhdGlvbikge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHBlcnNpc3RhbnRTdGFydElkcyAgPSBbXSxcbiAgICAgICAgICAgICAgICBwZXJzaXN0YW50TmV3SWRzICAgID0gW10sXG4gICAgICAgICAgICAgICAgaW5zZXJ0ZWRUYXJnZXRzICAgICA9IFtdLFxuICAgICAgICAgICAgICAgIGRhdGEgICAgICAgICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIHRhcmdldCAgICAgICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGVsICAgICAgICAgICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGZyYWcgICAgICAgICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIG5leHRFbCAgICAgICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIHVpZHMgICAgICAgICAgICAgICAgPSB7fSxcbiAgICAgICAgICAgICAgICBpZCAgICAgICAgICAgICAgICAgID0gJycsXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgICAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVEaWZmRGF0YXNldHMnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBkYXRhID0gb3BlcmF0aW9uLm5ld0RhdGFzZXRbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGlkID0gZGF0YVtzZWxmLmNvbmZpZy5kYXRhLnVpZEtleV0pID09PSAndW5kZWZpbmVkJyB8fCBpZC50b1N0cmluZygpLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihtaXhpdHVwLm1lc3NhZ2VzLmVycm9yRGF0YXNldEludmFsaWRVaWRLZXkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdWlkS2V5OiBzZWxmLmNvbmZpZy5kYXRhLnVpZEtleVxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCF1aWRzW2lkXSkge1xuICAgICAgICAgICAgICAgICAgICB1aWRzW2lkXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1peGl0dXAubWVzc2FnZXMuZXJyb3JEYXRhc2V0RHVwbGljYXRlVWlkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogaWRcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgodGFyZ2V0ID0gc2VsZi5jYWNoZVtpZF0pIGluc3RhbmNlb2YgbWl4aXR1cC5UYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWxyZWFkeSBpbiBjYWNoZVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5kYXRhLmRpcnR5Q2hlY2sgJiYgIWguZGVlcEVxdWFscyhkYXRhLCB0YXJnZXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoYW5nZSBkZXRlY3RlZFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbCA9IHRhcmdldC5yZW5kZXIoZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5kYXRhID0gZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsICE9PSB0YXJnZXQuZG9tLmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRhcmdldCBlbGVtZW50IHJlZmVyZW5jZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5pc0luRG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC51bmJpbmRFdmVudHMoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRvbS5wYXJlbnQucmVwbGFjZUNoaWxkKGVsLCB0YXJnZXQuZG9tLmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldC5pc1Nob3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmRvbS5lbCA9IGVsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5pc0luRG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5iaW5kRXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZWwgPSB0YXJnZXQuZG9tLmVsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5ldyB0YXJnZXRcblxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBuZXcgbWl4aXR1cC5UYXJnZXQoKTtcblxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuaW5pdChudWxsLCBzZWxmLCBkYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0LmlzSW5Eb20pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkaW5nIHRvIERPTVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghZnJhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3BlbiBmcmFnXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYWcgPSBzZWxmLmRvbS5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoZnJhZy5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkKHNlbGYuZG9tLmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZnJhZy5hcHBlbmRDaGlsZCh0YXJnZXQuZG9tLmVsKTtcblxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuaXNJbkRvbSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnVuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi50b1Nob3cucHVzaCh0YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGluc2VydGVkVGFyZ2V0cy5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWxyZWFkeSBpbiBET01cblxuICAgICAgICAgICAgICAgICAgICBuZXh0RWwgPSB0YXJnZXQuZG9tLmVsLm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0YW50TmV3SWRzLnB1c2goaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmcmFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDbG9zZSBhbmQgaW5zZXJ0IHByZXZpb3VzbHkgb3BlbmVkIGZyYWdcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZyYWcubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWcuYXBwZW5kQ2hpbGQoc2VsZi5kb20uZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyAnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW5zZXJ0RGF0YXNldEZyYWcoZnJhZywgdGFyZ2V0LmRvbS5lbCwgaW5zZXJ0ZWRUYXJnZXRzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhZyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBvcGVyYXRpb24uc2hvdy5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmcmFnKSB7XG4gICAgICAgICAgICAgICAgLy8gVW5jbG9zZWQgZnJhZyByZW1haW5pbmdcblxuICAgICAgICAgICAgICAgIG5leHRFbCA9IG5leHRFbCB8fCBzZWxmLmNvbmZpZy5sYXlvdXQuc2libGluZ0FmdGVyO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5leHRFbCkge1xuICAgICAgICAgICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkKHNlbGYuZG9tLmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJykpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGYuaW5zZXJ0RGF0YXNldEZyYWcoZnJhZywgbmV4dEVsLCBpbnNlcnRlZFRhcmdldHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBkYXRhID0gb3BlcmF0aW9uLnN0YXJ0RGF0YXNldFtpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWQgPSBkYXRhW3NlbGYuY29uZmlnLmRhdGEudWlkS2V5XTtcblxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYuY2FjaGVbaWRdO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi5zaG93LmluZGV4T2YodGFyZ2V0KSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUHJldmlvdXNseSBzaG93biBidXQgbm93IGFic2VudFxuXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5oaWRlLnB1c2godGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnRvSGlkZS5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi50b1JlbW92ZS5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGVyc2lzdGFudFN0YXJ0SWRzLnB1c2goaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFoLmlzRXF1YWxBcnJheShwZXJzaXN0YW50U3RhcnRJZHMsIHBlcnNpc3RhbnROZXdJZHMpKSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLndpbGxTb3J0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJEaWZmRGF0YXNldHMnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4xLjVcbiAgICAgICAgICogQHBhcmFtICAge0RvY3VtZW50RnJhZ21lbnR9ICAgICAgICAgIGZyYWdcbiAgICAgICAgICogQHBhcmFtICAgeyhIVE1MRWxlbWVudHxudWxsKX0gICAgICAgIG5leHRFbFxuICAgICAgICAgKiBAcGFyYW0gICB7QXJyYXkuPG1peGl0dXAuVGFyZ2V0Pn0gICAgdGFyZ2V0c1xuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgaW5zZXJ0RGF0YXNldEZyYWc6IGZ1bmN0aW9uKGZyYWcsIG5leHRFbCwgdGFyZ2V0cykge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGluc2VydEF0ID0gbmV4dEVsID8gQXJyYXkuZnJvbShzZWxmLmRvbS5wYXJlbnQuY2hpbGRyZW4pLmluZGV4T2YobmV4dEVsKSA6IHNlbGYudGFyZ2V0cy5sZW5ndGg7XG5cbiAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudC5pbnNlcnRCZWZvcmUoZnJhZywgbmV4dEVsKTtcblxuICAgICAgICAgICAgd2hpbGUgKHRhcmdldHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi50YXJnZXRzLnNwbGljZShpbnNlcnRBdCwgMCwgdGFyZ2V0cy5zaGlmdCgpKTtcblxuICAgICAgICAgICAgICAgIGluc2VydEF0Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7bWl4aXR1cC5Db21tYW5kU29ydH0gc29ydENvbW1hbmRBXG4gICAgICAgICAqIEBwYXJhbSAgIHttaXhpdHVwLkNvbW1hbmRTb3J0fSBzb3J0Q29tbWFuZEJcbiAgICAgICAgICogQHJldHVybiAge2Jvb2xlYW59XG4gICAgICAgICAqL1xuXG4gICAgICAgIHdpbGxTb3J0OiBmdW5jdGlvbihzb3J0Q29tbWFuZEEsIHNvcnRDb21tYW5kQikge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHJlc3VsdCAgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLmJlaGF2aW9yLmxpdmVTb3J0IHx8XG4gICAgICAgICAgICAgICAgc29ydENvbW1hbmRBLm9yZGVyICAgICAgID09PSAncmFuZG9tJyB8fFxuICAgICAgICAgICAgICAgIHNvcnRDb21tYW5kQS5hdHRyaWJ1dGUgICAhPT0gc29ydENvbW1hbmRCLmF0dHJpYnV0ZSB8fFxuICAgICAgICAgICAgICAgIHNvcnRDb21tYW5kQS5vcmRlciAgICAgICAhPT0gc29ydENvbW1hbmRCLm9yZGVyIHx8XG4gICAgICAgICAgICAgICAgc29ydENvbW1hbmRBLmNvbGxlY3Rpb24gICE9PSBzb3J0Q29tbWFuZEIuY29sbGVjdGlvbiB8fFxuICAgICAgICAgICAgICAgIChzb3J0Q29tbWFuZEEubmV4dCA9PT0gbnVsbCAmJiBzb3J0Q29tbWFuZEIubmV4dCkgfHxcbiAgICAgICAgICAgICAgICAoc29ydENvbW1hbmRBLm5leHQgJiYgc29ydENvbW1hbmRCLm5leHQgPT09IG51bGwpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzb3J0Q29tbWFuZEEubmV4dCAmJiBzb3J0Q29tbWFuZEIubmV4dCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHNlbGYud2lsbFNvcnQoc29ydENvbW1hbmRBLm5leHQsIHNvcnRDb21tYW5kQi5uZXh0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNhbGxGaWx0ZXJzKCdyZXN1bHRXaWxsU29ydCcsIHJlc3VsdCwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBzaG9ydGhhbmQgbWV0aG9kIGZvciBgLmZpbHRlcignYWxsJylgLiBTaG93cyBhbGwgdGFyZ2V0cyBpbiB0aGUgY29udGFpbmVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAuc2hvdygpXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IFNob3dpbmcgYWxsIHRhcmdldHM8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLnNob3coKVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS50b3RhbFNob3cgPT09IHN0YXRlLnRvdGFsVGFyZ2V0cyk7IC8vIHRydWVcbiAgICAgICAgICogICAgIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgICAgICogQHJldHVybiAgICAgIHtQcm9taXNlLjxtaXhpdHVwLlN0YXRlPn1cbiAgICAgICAgICovXG5cbiAgICAgICAgc2hvdzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmZpbHRlcignYWxsJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgc2hvcnRoYW5kIG1ldGhvZCBmb3IgYC5maWx0ZXIoJ25vbmUnKWAuIEhpZGVzIGFsbCB0YXJnZXRzIGluIHRoZSBjb250YWluZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIC5oaWRlKClcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogSGlkaW5nIGFsbCB0YXJnZXRzPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5oaWRlKClcbiAgICAgICAgICogICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudG90YWxTaG93ID09PSAwKTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnRvdGFsSGlkZSA9PT0gc3RhdGUudG90YWxUYXJnZXRzKTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAgICAgKiBAcmV0dXJuICAgICAge1Byb21pc2UuPG1peGl0dXAuU3RhdGU+fVxuICAgICAgICAgKi9cblxuICAgICAgICBoaWRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuZmlsdGVyKCdub25lJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciBvciBub3QgYSBNaXhJdFVwIG9wZXJhdGlvbiBpc1xuICAgICAgICAgKiBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIC5pc01peGluZygpXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IENoZWNraW5nIHRoZSBzdGF0dXMgb2YgYSBtaXhlcjwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIuc29ydCgncmFuZG9tJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAqICAgICBjb25zb2xlLmxvZyhtaXhlci5pc01peGluZygpKSAvLyBmYWxzZVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogY29uc29sZS5sb2cobWl4ZXIuaXNNaXhpbmcoKSkgLy8gdHJ1ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAyLjAuMFxuICAgICAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn1cbiAgICAgICAgICovXG5cbiAgICAgICAgaXNNaXhpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5pc0J1c3k7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpbHRlcnMgYWxsIHRhcmdldHMgaW4gdGhlIGNvbnRhaW5lciBieSBhIHByb3ZpZGVkIHNlbGVjdG9yIHN0cmluZywgb3IgdGhlIHZhbHVlcyBgJ2FsbCdgXG4gICAgICAgICAqIG9yIGAnbm9uZSdgLiBPbmx5IHRhcmdldHMgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yIHdpbGwgYmUgc2hvd24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIC5maWx0ZXIoc2VsZWN0b3IgWywgYW5pbWF0ZV0gWywgY2FsbGJhY2tdKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDE6IEZpbHRlcmluZyB0YXJnZXRzIGJ5IGEgY2xhc3Mgc2VsZWN0b3I8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLmZpbHRlcignLmNhdGVnb3J5LWEnKVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS50b3RhbFNob3cgPT09IGNvbnRhaW5lckVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlZ29yeS1hJykubGVuZ3RoKTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMjogRmlsdGVyaW5nIHRhcmdldHMgYnkgYW4gYXR0cmlidXRlIHNlbGVjdG9yPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5maWx0ZXIoJ1tkYXRhLWNhdGVnb3J5fj1cImFcIl0nKVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS50b3RhbFNob3cgPT09IGNvbnRhaW5lckVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNhdGVnb3J5fj1cImFcIl0nKS5sZW5ndGgpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAzOiBGaWx0ZXJpbmcgdGFyZ2V0cyBieSBhIGNvbXBvdW5kIHNlbGVjdG9yPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBTaG93IG9ubHkgdGhvc2UgdGFyZ2V0cyB3aXRoIHRoZSBjbGFzc2VzICdjYXRlZ29yeS1hJyBBTkQgJ2NhdGVnb3J5LWInXG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLmZpbHRlcignLmNhdGVnb3J5LWEuY2F0ZWdvcnktYycpXG4gICAgICAgICAqICAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnRvdGFsU2hvdyA9PT0gY29udGFpbmVyRWwucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5LWEuY2F0ZWdvcnktYycpLmxlbmd0aCk7IC8vIHRydWVcbiAgICAgICAgICogICAgIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDQ6IEZpbHRlcmluZyB2aWEgYW4gZWxlbWVudCBjb2xsZWN0aW9uPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgY29sbGVjdGlvbiA9IEFycmF5LmZyb20oY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5taXgnKSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKGNvbGxlY3Rpb24ubGVuZ3RoKTsgLy8gMzRcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gRmlsdGVyIHRoZSBjb2xsZWN0aW9uIG1hbnVhbGx5IHVzaW5nIEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIGZpbHRlcmVkID0gY29sbGVjdGlvbi5maWx0ZXIoZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAqICAgIHJldHVybiBwYXJzZUludCh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJykpID4gMTA7XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBjb25zb2xlLmxvZyhmaWx0ZXJlZC5sZW5ndGgpOyAvLyAyMlxuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBQYXNzIHRoZSBmaWx0ZXJlZCBjb2xsZWN0aW9uIHRvIE1peEl0VXBcbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIuZmlsdGVyKGZpbHRlcmVkKVxuICAgICAgICAgKiAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgY29uc29sZS5sb2coc3RhdGUuYWN0aXZlRmlsdGVyLmNvbGxlY3Rpb24ubGVuZ3RoID09PSAyMik7IC8vIHRydWVcbiAgICAgICAgICogICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgICAgICAyLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICAgICAgeyhzdHJpbmd8SFRNTEVsZW1lbnR8QXJyYXkuPEhUTUxFbGVtZW50Pil9IHNlbGVjdG9yXG4gICAgICAgICAqICAgICAgQW55IHZhbGlkIENTUyBzZWxlY3RvciAoaS5lLiBgJy5jYXRlZ29yeS1hJ2ApLCBvciB0aGUgdmFsdWVzIGAnYWxsJ2Agb3IgYCdub25lJ2AuIFRoZSBmaWx0ZXIgbWV0aG9kIGFsc28gYWNjZXB0cyBhIHJlZmVyZW5jZSB0byBzaW5nbGUgdGFyZ2V0IGVsZW1lbnQgb3IgYSBjb2xsZWN0aW9uIG9mIHRhcmdldCBlbGVtZW50cyB0byBzaG93LlxuICAgICAgICAgKiBAcGFyYW0gICAgICAge2Jvb2xlYW59ICAgW2FuaW1hdGU9dHJ1ZV1cbiAgICAgICAgICogICAgICBBbiBvcHRpb25hbCBib29sZWFuIGRpY3RhdGluZyB3aGV0aGVyIHRoZSBvcGVyYXRpb24gc2hvdWxkIGFuaW1hdGUsIG9yIG9jY3VyIHN5bmNyb25vdXNseSB3aXRoIG5vIGFuaW1hdGlvbi4gYHRydWVgIGJ5IGRlZmF1bHQuXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7ZnVuY3Rpb259ICBbY2FsbGJhY2s9bnVsbF1cbiAgICAgICAgICogICAgICBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHRoZSBvcGVyYXRpb24gaGFzIGNvbXBsZXRlZC5cbiAgICAgICAgICogQHJldHVybiAgICAgIHtQcm9taXNlLjxtaXhpdHVwLlN0YXRlPn1cbiAgICAgICAgICogICAgICBBIHByb21pc2UgcmVzb2x2aW5nIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgb2JqZWN0LlxuICAgICAgICAgKi9cblxuICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbiA9IHNlbGYucGFyc2VGaWx0ZXJBcmdzKGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLm11bHRpbWl4KHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGluc3RydWN0aW9uLmNvbW1hbmRcbiAgICAgICAgICAgIH0sIGluc3RydWN0aW9uLmFuaW1hdGUsIGluc3RydWN0aW9uLmNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkcyBhbiBhZGRpdGlvbmFsIHNlbGVjdG9yIHRvIHRoZSBjdXJyZW50bHkgYWN0aXZlIGZpbHRlciBzZWxlY3RvciwgY29uY2F0ZW5hdGluZ1xuICAgICAgICAgKiBhcyBwZXIgdGhlIGxvZ2ljIGRlZmluZWQgaW4gYGNvbnRyb2xzLnRvZ2dsZUxvZ2ljYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogLnRvZ2dsZU9uKHNlbGVjdG9yIFssIGFuaW1hdGVdIFssIGNhbGxiYWNrXSlcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogVG9nZ2xpbmcgb24gYSBmaWx0ZXIgc2VsZWN0b3I8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKG1peGVyLmdldFN0YXRlKCkuYWN0aXZlRmlsdGVyLnNlbGVjdG9yKTsgLy8gJy5jYXRlZ29yeS1hJ1xuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci50b2dnbGVPbignLmNhdGVnb3J5LWInKVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5hY3RpdmVGaWx0ZXIuc2VsZWN0b3IpOyAvLyAnLmNhdGVnb3J5LWEsIC5jYXRlZ29yeS1iJ1xuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICAgICAge3N0cmluZ30gICAgc2VsZWN0b3JcbiAgICAgICAgICogICAgICBBbnkgdmFsaWQgQ1NTIHNlbGVjdG9yIChpLmUuIGAnLmNhdGVnb3J5LWEnYClcbiAgICAgICAgICogQHBhcmFtICAgICAgIHtib29sZWFufSAgIFthbmltYXRlPXRydWVdXG4gICAgICAgICAqICAgICAgQW4gb3B0aW9uYWwgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciB0aGUgb3BlcmF0aW9uIHNob3VsZCBhbmltYXRlLCBvciBvY2N1ciBzeW5jcm9ub3VzbHkgd2l0aCBubyBhbmltYXRpb24uIGB0cnVlYCBieSBkZWZhdWx0LlxuICAgICAgICAgKiBAcGFyYW0gICAgICAge2Z1bmN0aW9ufSAgW2NhbGxiYWNrPW51bGxdXG4gICAgICAgICAqICAgICAgQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgb3BlcmF0aW9uIGhhcyBjb21wbGV0ZWQuXG4gICAgICAgICAqIEByZXR1cm4gICAgICB7UHJvbWlzZS48bWl4aXR1cC5TdGF0ZT59XG4gICAgICAgICAqICAgICAgQSBwcm9taXNlIHJlc29sdmluZyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9iamVjdC5cbiAgICAgICAgICovXG5cbiAgICAgICAgdG9nZ2xlT246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24gICAgID0gc2VsZi5wYXJzZUZpbHRlckFyZ3MoYXJndW1lbnRzKSxcbiAgICAgICAgICAgICAgICBzZWxlY3RvciAgICAgICAgPSBpbnN0cnVjdGlvbi5jb21tYW5kLnNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHRvZ2dsZVNlbGVjdG9yICA9ICcnO1xuXG4gICAgICAgICAgICBzZWxmLmlzVG9nZ2xpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi50b2dnbGVBcnJheS5pbmRleE9mKHNlbGVjdG9yKSA8IDApIHtcbiAgICAgICAgICAgICAgICBzZWxmLnRvZ2dsZUFycmF5LnB1c2goc2VsZWN0b3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b2dnbGVTZWxlY3RvciA9IHNlbGYuZ2V0VG9nZ2xlU2VsZWN0b3IoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYubXVsdGltaXgoe1xuICAgICAgICAgICAgICAgIGZpbHRlcjogdG9nZ2xlU2VsZWN0b3JcbiAgICAgICAgICAgIH0sIGluc3RydWN0aW9uLmFuaW1hdGUsIGluc3RydWN0aW9uLmNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyBhIHNlbGVjdG9yIGZyb20gdGhlIGFjdGl2ZSBmaWx0ZXIgc2VsZWN0b3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIC50b2dnbGVPZmYoc2VsZWN0b3IgWywgYW5pbWF0ZV0gWywgY2FsbGJhY2tdKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBUb2dnbGluZyBvZmYgYSBmaWx0ZXIgc2VsZWN0b3I8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKG1peGVyLmdldFN0YXRlKCkuYWN0aXZlRmlsdGVyLnNlbGVjdG9yKTsgLy8gJy5jYXRlZ29yeS1hLCAuY2F0ZWdvcnktYidcbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIudG9nZ2xlT2ZmKCcuY2F0ZWdvcnktYicpXG4gICAgICAgICAqICAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmFjdGl2ZUZpbHRlci5zZWxlY3Rvcik7IC8vICcuY2F0ZWdvcnktYSdcbiAgICAgICAgICogICAgIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAgICAgIHtzdHJpbmd9ICAgIHNlbGVjdG9yXG4gICAgICAgICAqICAgICAgQW55IHZhbGlkIENTUyBzZWxlY3RvciAoaS5lLiBgJy5jYXRlZ29yeS1hJ2ApXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7Ym9vbGVhbn0gICBbYW5pbWF0ZT10cnVlXVxuICAgICAgICAgKiAgICAgIEFuIG9wdGlvbmFsIGJvb2xlYW4gZGljdGF0aW5nIHdoZXRoZXIgdGhlIG9wZXJhdGlvbiBzaG91bGQgYW5pbWF0ZSwgb3Igb2NjdXIgc3luY3Jvbm91c2x5IHdpdGggbm8gYW5pbWF0aW9uLiBgdHJ1ZWAgYnkgZGVmYXVsdC5cbiAgICAgICAgICogQHBhcmFtICAgICAgIHtmdW5jdGlvbn0gIFtjYWxsYmFjaz1udWxsXVxuICAgICAgICAgKiAgICAgIEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIG9wZXJhdGlvbiBoYXMgY29tcGxldGVkLlxuICAgICAgICAgKiBAcmV0dXJuICAgICAge1Byb21pc2UuPG1peGl0dXAuU3RhdGU+fVxuICAgICAgICAgKiAgICAgIEEgcHJvbWlzZSByZXNvbHZpbmcgd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBvYmplY3QuXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRvZ2dsZU9mZjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbiAgICAgPSBzZWxmLnBhcnNlRmlsdGVyQXJncyhhcmd1bWVudHMpLFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yICAgICAgICA9IGluc3RydWN0aW9uLmNvbW1hbmQuc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3JJbmRleCAgID0gc2VsZi50b2dnbGVBcnJheS5pbmRleE9mKHNlbGVjdG9yKSxcbiAgICAgICAgICAgICAgICB0b2dnbGVTZWxlY3RvciAgPSAnJztcblxuICAgICAgICAgICAgc2VsZi5pc1RvZ2dsaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdG9ySW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHNlbGYudG9nZ2xlQXJyYXkuc3BsaWNlKHNlbGVjdG9ySW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b2dnbGVTZWxlY3RvciA9IHNlbGYuZ2V0VG9nZ2xlU2VsZWN0b3IoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYubXVsdGltaXgoe1xuICAgICAgICAgICAgICAgIGZpbHRlcjogdG9nZ2xlU2VsZWN0b3JcbiAgICAgICAgICAgIH0sIGluc3RydWN0aW9uLmFuaW1hdGUsIGluc3RydWN0aW9uLmNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU29ydHMgYWxsIHRhcmdldHMgaW4gdGhlIGNvbnRhaW5lciBhY2NvcmRpbmcgdG8gYSBwcm92aWRlZCBzb3J0IHN0cmluZy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogLnNvcnQoc29ydFN0cmluZyBbLCBhbmltYXRlXSBbLCBjYWxsYmFja10pXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMTogU29ydGluZyBieSB0aGUgZGVmYXVsdCBET00gb3JkZXI8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIFJldmVyc2UgdGhlIGRlZmF1bHQgb3JkZXIgb2YgdGhlIHRhcmdldHNcbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIuc29ydCgnZGVmYXVsdDpkZXNjJylcbiAgICAgICAgICogICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUuYWN0aXZlU29ydC5hdHRyaWJ1dGUgPT09ICdkZWZhdWx0Jyk7IC8vIHRydWVcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5hY3RpdmVTb3J0Lm9yZGVyID09PSAnZGVzYycpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAyOiBTb3J0aW5nIGJ5IGEgY3VzdG9tIGRhdGEtYXR0cmlidXRlPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBTb3J0IHRoZSB0YXJnZXRzIGJ5IHRoZSB2YWx1ZSBvZiBhIGBkYXRhLXB1Ymxpc2hlZC1kYXRlYCBhdHRyaWJ1dGVcbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIuc29ydCgncHVibGlzaGVkLWRhdGU6YXNjJylcbiAgICAgICAgICogICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUuYWN0aXZlU29ydC5hdHRyaWJ1dGUgPT09ICdwdWJsaXNoZWQtZGF0ZScpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUuYWN0aXZlU29ydC5vcmRlciA9PT0gJ2FzYycpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAzOiBTb3J0aW5nIGJ5IG11bHRpcGxlIGF0dHJpYnV0ZXM8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIFNvcnQgdGhlIHRhcmdldHMgYnkgdGhlIHZhbHVlIG9mIGEgYGRhdGEtcHVibGlzaGVkLWRhdGVgIGF0dHJpYnV0ZSwgdGhlbiBieSBgZGF0YS10aXRsZWBcbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIuc29ydCgncHVibGlzaGVkLWRhdGU6ZGVzYyBkYXRhLXRpdGxlOmFzYycpXG4gICAgICAgICAqICAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmFjdGl2ZVNvcnQuYXR0cmlidXRlID09PSAncHVibGlzaGVkLWRhdGUnKTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmFjdGl2ZVNvcnQub3JkZXIgPT09ICdkZXNjJyk7IC8vIHRydWVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5hY3RpdmVTb3J0Lm5leHQuYXR0cmlidXRlID09PSAndGl0bGUnKTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmFjdGl2ZVNvcnQubmV4dC5vcmRlciA9PT0gJ2FzYycpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSA0OiBTb3J0aW5nIGJ5IHJhbmRvbTwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIuc29ydCgncmFuZG9tJylcbiAgICAgICAgICogICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUuYWN0aXZlU29ydC5vcmRlciA9PT0gJ3JhbmRvbScpIC8vIHRydWVcbiAgICAgICAgICogICAgIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDU6IFNvcnRpbmcgdmlhIGFuIGVsZW1lbnQgY29sbGVjdGlvbjwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIGNvbGxlY3Rpb24gPSBBcnJheS5mcm9tKGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcubWl4JykpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBTd2FwIHRoZSBwb3NpdGlvbiBvZiB0d28gZWxlbWVudHMgaW4gdGhlIGNvbGxlY3Rpb246XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciB0ZW1wID0gY29sbGVjdGlvblsxXTtcbiAgICAgICAgICpcbiAgICAgICAgICogY29sbGVjdGlvblsxXSA9IGNvbGxlY3Rpb25bMF07XG4gICAgICAgICAqIGNvbGxlY3Rpb25bMF0gPSB0ZW1wO1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBQYXNzIHRoZSBzb3J0ZWQgY29sbGVjdGlvbiB0byBNaXhJdFVwXG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLnNvcnQoY29sbGVjdGlvbilcbiAgICAgICAgICogICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudGFyZ2V0c1swXSA9PT0gY29sbGVjdGlvblswXSk7IC8vIHRydWVcbiAgICAgICAgICogICAgIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAgICAgMi4wLjBcbiAgICAgICAgICogQHBhcmFtICAgICAgIHsoc3RyaW5nfEFycmF5LjxIVE1MRWxlbWVudD4pfSAgICBzb3J0U3RyaW5nXG4gICAgICAgICAqICAgICAgQSB2YWxpZCBzb3J0IHN0cmluZyAoZS5nLiBgJ2RlZmF1bHQnYCwgYCdwdWJsaXNoZWQtZGF0ZTphc2MnYCwgb3IgYCdyYW5kb20nYCkuIFRoZSBzb3J0IG1ldGhvZCBhbHNvIGFjY2VwdHMgYW4gYXJyYXkgb2YgYWxsIHRhcmdldCBlbGVtZW50cyBpbiBhIHVzZXItZGVmaW5lZCBvcmRlci5cbiAgICAgICAgICogQHBhcmFtICAgICAgIHtib29sZWFufSAgIFthbmltYXRlPXRydWVdXG4gICAgICAgICAqICAgICAgQW4gb3B0aW9uYWwgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciB0aGUgb3BlcmF0aW9uIHNob3VsZCBhbmltYXRlLCBvciBvY2N1ciBzeW5jcm9ub3VzbHkgd2l0aCBubyBhbmltYXRpb24uIGB0cnVlYCBieSBkZWZhdWx0LlxuICAgICAgICAgKiBAcGFyYW0gICAgICAge2Z1bmN0aW9ufSAgW2NhbGxiYWNrPW51bGxdXG4gICAgICAgICAqICAgICAgQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgb3BlcmF0aW9uIGhhcyBjb21wbGV0ZWQuXG4gICAgICAgICAqIEByZXR1cm4gICAgICB7UHJvbWlzZS48bWl4aXR1cC5TdGF0ZT59XG4gICAgICAgICAqICAgICAgQSBwcm9taXNlIHJlc29sdmluZyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9iamVjdC5cbiAgICAgICAgICovXG5cbiAgICAgICAgc29ydDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uID0gc2VsZi5wYXJzZVNvcnRBcmdzKGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLm11bHRpbWl4KHtcbiAgICAgICAgICAgICAgICBzb3J0OiBpbnN0cnVjdGlvbi5jb21tYW5kXG4gICAgICAgICAgICB9LCBpbnN0cnVjdGlvbi5hbmltYXRlLCBpbnN0cnVjdGlvbi5jYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoYW5nZXMgdGhlIGxheW91dCBvZiB0aGUgY29udGFpbmVyIGJ5IGFkZGluZywgcmVtb3Zpbmcgb3IgdXBkYXRpbmcgYVxuICAgICAgICAgKiBsYXlvdXQtc3BlY2lmaWMgY2xhc3MgbmFtZS4gSWYgYGFuaW1hdGlvbi5hbmltYXRlUmVzaXpldGFyZ2V0c2AgaXNcbiAgICAgICAgICogZW5hYmxlZCwgTWl4SXRVcCB3aWxsIGF0dGVtcHQgdG8gZ3JhY2VmdWxseSBhbmltYXRlIHRoZSB3aWR0aCwgaGVpZ2h0LFxuICAgICAgICAgKiBhbmQgcG9zaXRpb24gb2YgdGFyZ2V0cyBiZXR3ZWVuIGxheW91dCBzdGF0ZXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIC5jaGFuZ2VMYXlvdXQoY29udGFpbmVyQ2xhc3NOYW1lIFssIGFuaW1hdGVdIFssIGNhbGxiYWNrXSlcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAxOiBBZGRpbmcgYSBuZXcgY2xhc3MgbmFtZSB0byB0aGUgY29udGFpbmVyPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5jaGFuZ2VMYXlvdXQoJ2NvbnRhaW5lci1saXN0JylcbiAgICAgICAgICogICAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5hY3RpdmVDb250YWluZXJDbGFzcyA9PT0gJ2NvbnRhaW5lci1saXN0Jyk7IC8vIHRydWVcbiAgICAgICAgICogICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAyOiBSZW1vdmluZyBhIHByZXZpb3VzbHkgYWRkZWQgY2xhc3MgbmFtZSBmcm9tIHRoZSBjb250YWluZXI8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLmNoYW5nZUxheW91dCgnJylcbiAgICAgICAgICogICAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5hY3RpdmVDb250YWluZXJDbGFzcyA9PT0gJycpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgICAgICAyLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICAgICAge3N0cmluZ30gICAgY29udGFpbmVyQ2xhc3NOYW1lXG4gICAgICAgICAqICAgICAgQSBsYXlvdXQtc3BlY2lmaWMgY2xhc3MgbmFtZSB0byBhZGQgdG8gdGhlIGNvbnRhaW5lci5cbiAgICAgICAgICogQHBhcmFtICAgICAgIHtib29sZWFufSAgIFthbmltYXRlPXRydWVdXG4gICAgICAgICAqICAgICAgQW4gb3B0aW9uYWwgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciB0aGUgb3BlcmF0aW9uIHNob3VsZCBhbmltYXRlLCBvciBvY2N1ciBzeW5jcm9ub3VzbHkgd2l0aCBubyBhbmltYXRpb24uIGB0cnVlYCBieSBkZWZhdWx0LlxuICAgICAgICAgKiBAcGFyYW0gICAgICAge2Z1bmN0aW9ufSAgW2NhbGxiYWNrPW51bGxdXG4gICAgICAgICAqICAgICAgQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgb3BlcmF0aW9uIGhhcyBjb21wbGV0ZWQuXG4gICAgICAgICAqIEByZXR1cm4gICAgICB7UHJvbWlzZS48bWl4aXR1cC5TdGF0ZT59XG4gICAgICAgICAqICAgICAgQSBwcm9taXNlIHJlc29sdmluZyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9iamVjdC5cbiAgICAgICAgICovXG5cbiAgICAgICAgY2hhbmdlTGF5b3V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24gPSBzZWxmLnBhcnNlQ2hhbmdlTGF5b3V0QXJncyhhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5tdWx0aW1peCh7XG4gICAgICAgICAgICAgICAgY2hhbmdlTGF5b3V0OiBpbnN0cnVjdGlvbi5jb21tYW5kXG4gICAgICAgICAgICB9LCBpbnN0cnVjdGlvbi5hbmltYXRlLCBpbnN0cnVjdGlvbi5jYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVwZGF0ZXMgdGhlIGNvbnRlbnRzIGFuZCBvcmRlciBvZiB0aGUgY29udGFpbmVyIHRvIHJlZmxlY3QgdGhlIHByb3ZpZGVkIGRhdGFzZXQsXG4gICAgICAgICAqIGlmIHRoZSBkYXRhc2V0IEFQSSBpcyBpbiB1c2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSBkYXRhc2V0IEFQSSBpcyBkZXNpZ25lZCBmb3IgdXNlIGluIEFQSS1kcml2ZW4gSmF2YVNjcmlwdCBhcHBsaWNhdGlvbnMsIGFuZFxuICAgICAgICAgKiBjYW4gYmUgdXNlZCBpbnN0ZWFkIG9mIERPTS1iYXNlZCBtZXRob2RzIHN1Y2ggYXMgYC5maWx0ZXIoKWAsIGAuc29ydCgpYCxcbiAgICAgICAgICogYC5pbnNlcnQoKWAsIGV0Yy4gV2hlbiB1c2VkLCBpbnNlcnRpb24sIHJlbW92YWwsIHNvcnRpbmcgYW5kIHBhZ2luYXRpb24gY2FuIGJlXG4gICAgICAgICAqIGFjaGlldmVkIHB1cmVseSB2aWEgY2hhbmdlcyB0byB5b3VyIGRhdGEgbW9kZWwsIHdpdGhvdXQgdGhlIHVnbHluZXNzIG9mIGhhdmluZ1xuICAgICAgICAgKiB0byBpbnRlcmFjdCB3aXRoIG9yIHF1ZXJ5IHRoZSBET00gZGlyZWN0bHkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIC5kYXRhc2V0KGRhdGFzZXQgWywgYW5pbWF0ZV0gWywgY2FsbGJhY2tdKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDE6IFJlbmRlcmluZyBhIGRhdGFzZXQ8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBteURhdGFzZXQgPSBbXG4gICAgICAgICAqICAgICB7aWQ6IDEsIC4uLn0sXG4gICAgICAgICAqICAgICB7aWQ6IDIsIC4uLn0sXG4gICAgICAgICAqICAgICB7aWQ6IDMsIC4uLn1cbiAgICAgICAgICogXTtcbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIuZGF0YXNldChteURhdGFzZXQpXG4gICAgICAgICAqICAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnRvdGFsU2hvdyA9PT0gMyk7IC8vIHRydWVcbiAgICAgICAgICogICAgIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDI6IFNvcnRpbmcgYSBkYXRhc2V0PC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBDcmVhdGUgYSBuZXcgZGF0YXNldCBpbiByZXZlcnNlIG9yZGVyXG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBuZXdEYXRhc2V0ID0gbXlEYXRhc2V0LnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5kYXRhc2V0KG5ld0RhdGFzZXQpXG4gICAgICAgICAqICAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmFjdGl2ZURhdGFzZXRbMF0gPT09IG15RGF0YXNldFsyXSk7IC8vIHRydWVcbiAgICAgICAgICogICAgIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDM6IFJlbW92aW5nIGFuIGl0ZW0gZnJvbSB0aGUgZGF0YXNldDwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogY29uc29sZS5sb2cobXlEYXRhc2V0Lmxlbmd0aCk7IC8vIDNcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gQ3JlYXRlIGEgbmV3IGRhdGFzZXQgd2l0aCB0aGUgbGFzdCBpdGVtIHJlbW92ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBuZXdEYXRhc2V0ID0gbXlEYXRhc2V0LnNsaWNlKCkucG9wKCk7XG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLmRhdGFzZXQobmV3RGF0YXNldClcbiAgICAgICAgICogICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudG90YWxTaG93ID09PSAyKTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICAgICAge0FycmF5LjxvYmplY3Q+fSAgICBkYXRhc2V0XG4gICAgICAgICAqICAgICAgQW4gYXJyYXkgb2Ygb2JqZWN0cywgZWFjaCBvbmUgcmVwcmVzZW50aW5nIHRoZSB1bmRlcmx5aW5nIGRhdGEgbW9kZWwgb2YgYSB0YXJnZXQgdG8gYmUgcmVuZGVyZWQuXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7Ym9vbGVhbn0gICAgICAgICAgIFthbmltYXRlPXRydWVdXG4gICAgICAgICAqICAgICAgQW4gb3B0aW9uYWwgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciB0aGUgb3BlcmF0aW9uIHNob3VsZCBhbmltYXRlLCBvciBvY2N1ciBzeW5jcm9ub3VzbHkgd2l0aCBubyBhbmltYXRpb24uIGB0cnVlYCBieSBkZWZhdWx0LlxuICAgICAgICAgKiBAcGFyYW0gICAgICAge2Z1bmN0aW9ufSAgICAgICAgICBbY2FsbGJhY2s9bnVsbF1cbiAgICAgICAgICogICAgICBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHRoZSBvcGVyYXRpb24gaGFzIGNvbXBsZXRlZC5cbiAgICAgICAgICogQHJldHVybiAgICAgIHtQcm9taXNlLjxtaXhpdHVwLlN0YXRlPn1cbiAgICAgICAgICogICAgICBBIHByb21pc2UgcmVzb2x2aW5nIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgb2JqZWN0LlxuICAgICAgICAgKi9cblxuICAgICAgICBkYXRhc2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24gPSBzZWxmLnBhcnNlRGF0YXNldEFyZ3MoYXJndW1lbnRzKSxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24gICA9IG51bGwsXG4gICAgICAgICAgICAgICAgcXVldWVJdGVtICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUgICAgID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZURhdGFzZXQnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBpZiAoIXNlbGYuaXNCdXN5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGluc3RydWN0aW9uLmNhbGxiYWNrKSBzZWxmLnVzZXJDYWxsYmFjayA9IGluc3RydWN0aW9uLmNhbGxiYWNrO1xuXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSA9IChpbnN0cnVjdGlvbi5hbmltYXRlIF4gc2VsZi5jb25maWcuYW5pbWF0aW9uLmVuYWJsZSkgPyBpbnN0cnVjdGlvbi5hbmltYXRlIDogc2VsZi5jb25maWcuYW5pbWF0aW9uLmVuYWJsZTtcblxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbiA9IHNlbGYuZ2V0RGF0YU9wZXJhdGlvbihpbnN0cnVjdGlvbi5jb21tYW5kLmRhdGFzZXQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuZ29NaXgoYW5pbWF0ZSwgb3BlcmF0aW9uKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVldWVJdGVtID0gbmV3IG1peGl0dXAuUXVldWVJdGVtKCk7XG5cbiAgICAgICAgICAgICAgICBxdWV1ZUl0ZW0uYXJncyAgICAgICAgICA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgICAgICBxdWV1ZUl0ZW0uaW5zdHJ1Y3Rpb24gICA9IGluc3RydWN0aW9uO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYucXVldWVNaXgocXVldWVJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUGVyZm9ybXMgc2ltdWx0YW5lb3VzIGBmaWx0ZXJgLCBgc29ydGAsIGBpbnNlcnRgLCBgcmVtb3ZlYCBhbmQgYGNoYW5nZUxheW91dGBcbiAgICAgICAgICogb3BlcmF0aW9ucyBhcyByZXF1ZXN0ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIC5tdWx0aW1peChtdWx0aW1peENvbW1hbmQgWywgYW5pbWF0ZV0gWywgY2FsbGJhY2tdKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDE6IFBlcmZvcm1pbmcgc2ltdWx0YW5lb3VzIGZpbHRlcmluZyBhbmQgc29ydGluZzwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIubXVsdGltaXgoe1xuICAgICAgICAgKiAgICAgZmlsdGVyOiAnLmNhdGVnb3J5LWInLFxuICAgICAgICAgKiAgICAgc29ydDogJ3B1Ymxpc2hlZC1kYXRlOmRlc2MnXG4gICAgICAgICAqIH0pXG4gICAgICAgICAqICAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmFjdGl2ZUZpbHRlci5zZWxlY3RvciA9PT0gJy5jYXRlZ29yeS1iJyk7IC8vIHRydWVcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5hY3RpdmVTb3J0LmF0dHJpYnV0ZSA9PT0gJ3B1Ymxpc2hlZC1kYXRlJyk7IC8vIHRydWVcbiAgICAgICAgICogICAgIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDI6IFBlcmZvcm1pbmcgc2ltdWx0YW5lb3VzIHNvcnRpbmcsIGluc2VydGlvbiwgYW5kIHJlbW92YWw8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKG1peGVyLmdldFN0YXRlKCkudG90YWxTaG93KTsgLy8gNlxuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBOQjogV2hlbiBpbnNlcnRpbmcgdmlhIGBtdWx0aW1peCgpYCwgYW4gb2JqZWN0IHNob3VsZCBiZSBwcm92aWRlZCBhcyB0aGUgdmFsdWVcbiAgICAgICAgICogLy8gZm9yIHRoZSBgaW5zZXJ0YCBwb3J0aW9uIG9mIHRoZSBjb21tYW5kLCBhbGxvd2luZyBmb3IgYSBjb2xsZWN0aW9uIG9mIGVsZW1lbnRzXG4gICAgICAgICAqIC8vIGFuZCBhbiBpbnNlcnRpb24gaW5kZXggdG8gYmUgc3BlY2lmaWVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5tdWx0aW1peCh7XG4gICAgICAgICAqICAgICBzb3J0OiAncHVibGlzaGVkLWRhdGU6ZGVzYycsIC8vIFNvcnQgdGhlIGNvbnRhaW5lciwgaW5jbHVkaW5nIGFueSBuZXcgZWxlbWVudHNcbiAgICAgICAgICogICAgIGluc2VydDoge1xuICAgICAgICAgKiAgICAgICAgIGNvbGxlY3Rpb246IFtuZXdFbGVtZW50UmVmZXJlbmNlQSwgbmV3RWxlbWVudFJlZmVyZW5jZUJdLCAvLyBBZGQgMiBuZXcgZWxlbWVudHMgYXQgaW5kZXggNVxuICAgICAgICAgKiAgICAgICAgIGluZGV4OiA1XG4gICAgICAgICAqICAgICB9LFxuICAgICAgICAgKiAgICAgcmVtb3ZlOiBleGlzdGluZ0VsZW1lbnRSZWZlcmVuY2UgLy8gUmVtb3ZlIDEgZXhpc3RpbmcgZWxlbWVudFxuICAgICAgICAgKiB9KVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5hY3RpdmVTb3J0LmF0dHJpYnV0ZSA9PT0gJ3B1Ymxpc2hlZC1kYXRlJyk7IC8vIHRydWVcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS50b3RhbFNob3cgPT09IDcpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgICAgIDIuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7b2JqZWN0fSAgICBtdWx0aW1peENvbW1hbmRcbiAgICAgICAgICogICAgICBBbiBvYmplY3QgY29udGFpbmluZyBvbmUgb3IgbW9yZSB0aGluZ3MgdG8gZG9cbiAgICAgICAgICogQHBhcmFtICAgICAgIHtib29sZWFufSAgIFthbmltYXRlPXRydWVdXG4gICAgICAgICAqICAgICAgQW4gb3B0aW9uYWwgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciB0aGUgb3BlcmF0aW9uIHNob3VsZCBhbmltYXRlLCBvciBvY2N1ciBzeW5jcm9ub3VzbHkgd2l0aCBubyBhbmltYXRpb24uIGB0cnVlYCBieSBkZWZhdWx0LlxuICAgICAgICAgKiBAcGFyYW0gICAgICAge2Z1bmN0aW9ufSAgW2NhbGxiYWNrPW51bGxdXG4gICAgICAgICAqICAgICAgQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgb3BlcmF0aW9uIGhhcyBjb21wbGV0ZWQuXG4gICAgICAgICAqIEByZXR1cm4gICAgICB7UHJvbWlzZS48bWl4aXR1cC5TdGF0ZT59XG4gICAgICAgICAqICAgICAgQSBwcm9taXNlIHJlc29sdmluZyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9iamVjdC5cbiAgICAgICAgICovXG5cbiAgICAgICAgbXVsdGltaXg6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24gICA9IG51bGwsXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSAgICAgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBxdWV1ZUl0ZW0gICA9IG51bGwsXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24gPSBzZWxmLnBhcnNlTXVsdGltaXhBcmdzKGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZU11bHRpbWl4JywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaWYgKCFzZWxmLmlzQnVzeSkge1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbiA9IHNlbGYuZ2V0T3BlcmF0aW9uKGluc3RydWN0aW9uLmNvbW1hbmQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmNvbnRyb2xzLmVuYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgY29udHJvbHMgZm9yIEFQSSBjYWxsc1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnN0cnVjdGlvbi5jb21tYW5kLmZpbHRlciAmJiAhc2VsZi5pc1RvZ2dsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBcyB3ZSBhcmUgbm90IHRvZ2dsaW5nLCByZXNldCB0aGUgdG9nZ2xlIGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyBuZXcgZmlsdGVyIG92ZXJyaWRlcyBleGlzdGluZyB0b2dnbGVzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudG9nZ2xlQXJyYXkubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYnVpbGRUb2dnbGVBcnJheShvcGVyYXRpb24uY29tbWFuZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5xdWV1ZS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZUNvbnRyb2xzKG9wZXJhdGlvbi5jb21tYW5kKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpbnN0cnVjdGlvbi5jYWxsYmFjaykgc2VsZi51c2VyQ2FsbGJhY2sgPSBpbnN0cnVjdGlvbi5jYWxsYmFjaztcblxuICAgICAgICAgICAgICAgIC8vIEFsd2F5cyBhbGxvdyB0aGUgaW5zdHJ1Y3Rpb24gdG8gb3ZlcnJpZGUgdGhlIGluc3RhbmNlIHNldHRpbmdcblxuICAgICAgICAgICAgICAgIGFuaW1hdGUgPSAoaW5zdHJ1Y3Rpb24uYW5pbWF0ZSBeIHNlbGYuY29uZmlnLmFuaW1hdGlvbi5lbmFibGUpID9cbiAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uYW5pbWF0ZSA6XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLmFuaW1hdGlvbi5lbmFibGU7XG5cbiAgICAgICAgICAgICAgICBzZWxmLmNhbGxGaWx0ZXJzKCdvcGVyYXRpb25NdWx0aW1peCcsIG9wZXJhdGlvbiwgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmdvTWl4KGFuaW1hdGUsIG9wZXJhdGlvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXVlSXRlbSA9IG5ldyBtaXhpdHVwLlF1ZXVlSXRlbSgpO1xuXG4gICAgICAgICAgICAgICAgcXVldWVJdGVtLmFyZ3MgICAgICAgICAgID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgIHF1ZXVlSXRlbS5pbnN0cnVjdGlvbiAgICA9IGluc3RydWN0aW9uO1xuICAgICAgICAgICAgICAgIHF1ZXVlSXRlbS50cmlnZ2VyRWxlbWVudCA9IHNlbGYubGFzdENsaWNrZWQ7XG4gICAgICAgICAgICAgICAgcXVldWVJdGVtLmlzVG9nZ2xpbmcgICAgID0gc2VsZi5pc1RvZ2dsaW5nO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYucXVldWVNaXgocXVldWVJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgICAgICAgICAgbXVsdGltaXhDb21tYW5kXG4gICAgICAgICAqIEBwYXJhbSAgIHtib29sZWFufSAgICAgICAgICAgW2lzUHJlRmV0Y2hdXG4gICAgICAgICAqICAgICAgQW4gb3B0aW9uYWwgYm9vbGVhbiBpbmRpY2F0aW5nIHRoYXQgdGhlIG9wZXJhdGlvbiBpcyBiZWluZyBwcmUtZmV0Y2hlZCBmb3IgZXhlY3V0aW9uIGF0IGEgbGF0ZXIgdGltZS5cbiAgICAgICAgICogQHJldHVybiAge09wZXJhdGlvbnxudWxsfVxuICAgICAgICAgKi9cblxuICAgICAgICBnZXRPcGVyYXRpb246IGZ1bmN0aW9uKG11bHRpbWl4Q29tbWFuZCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHNvcnRDb21tYW5kICAgICAgICAgPSBtdWx0aW1peENvbW1hbmQuc29ydCxcbiAgICAgICAgICAgICAgICBmaWx0ZXJDb21tYW5kICAgICAgID0gbXVsdGltaXhDb21tYW5kLmZpbHRlcixcbiAgICAgICAgICAgICAgICBjaGFuZ2VMYXlvdXRDb21tYW5kID0gbXVsdGltaXhDb21tYW5kLmNoYW5nZUxheW91dCxcbiAgICAgICAgICAgICAgICByZW1vdmVDb21tYW5kICAgICAgID0gbXVsdGltaXhDb21tYW5kLnJlbW92ZSxcbiAgICAgICAgICAgICAgICBpbnNlcnRDb21tYW5kICAgICAgID0gbXVsdGltaXhDb21tYW5kLmluc2VydCxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24gICAgICAgICAgID0gbmV3IG1peGl0dXAuT3BlcmF0aW9uKCk7XG5cbiAgICAgICAgICAgIG9wZXJhdGlvbiA9IHNlbGYuY2FsbEZpbHRlcnMoJ29wZXJhdGlvblVubWFwcGVkR2V0T3BlcmF0aW9uJywgb3BlcmF0aW9uLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBvcGVyYXRpb24uaWQgICAgICAgICAgICAgICAgPSBoLnJhbmRvbUhleCgpO1xuICAgICAgICAgICAgb3BlcmF0aW9uLmNvbW1hbmQgICAgICAgICAgID0gbXVsdGltaXhDb21tYW5kO1xuICAgICAgICAgICAgb3BlcmF0aW9uLnN0YXJ0U3RhdGUgICAgICAgID0gc2VsZi5zdGF0ZTtcbiAgICAgICAgICAgIG9wZXJhdGlvbi50cmlnZ2VyRWxlbWVudCAgICA9IHNlbGYubGFzdENsaWNrZWQ7XG5cbiAgICAgICAgICAgIGlmIChzZWxmLmlzQnVzeSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5kZWJ1Zy5zaG93V2FybmluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKG1peGl0dXAubWVzc2FnZXMud2FybmluZ0dldE9wZXJhdGlvbkluc3RhbmNlQnVzeSgpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluc2VydENvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmluc2VydFRhcmdldHMoaW5zZXJ0Q29tbWFuZCwgb3BlcmF0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlbW92ZUNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24udG9SZW1vdmUgPSByZW1vdmVDb21tYW5kLnRhcmdldHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9wZXJhdGlvbi5zdGFydFNvcnQgPSBvcGVyYXRpb24ubmV3U29ydCA9IG9wZXJhdGlvbi5zdGFydFN0YXRlLmFjdGl2ZVNvcnQ7XG4gICAgICAgICAgICBvcGVyYXRpb24uc3RhcnRPcmRlciA9IG9wZXJhdGlvbi5uZXdPcmRlciA9IHNlbGYudGFyZ2V0cztcblxuICAgICAgICAgICAgaWYgKHNvcnRDb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnN0YXJ0U29ydCA9IG9wZXJhdGlvbi5zdGFydFN0YXRlLmFjdGl2ZVNvcnQ7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLm5ld1NvcnQgICA9IHNvcnRDb21tYW5kO1xuXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLndpbGxTb3J0ID0gc2VsZi53aWxsU29ydChzb3J0Q29tbWFuZCwgb3BlcmF0aW9uLnN0YXJ0U3RhdGUuYWN0aXZlU29ydCk7XG5cbiAgICAgICAgICAgICAgICBpZiAob3BlcmF0aW9uLndpbGxTb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc29ydE9wZXJhdGlvbihvcGVyYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3BlcmF0aW9uLnN0YXJ0RmlsdGVyID0gb3BlcmF0aW9uLnN0YXJ0U3RhdGUuYWN0aXZlRmlsdGVyO1xuXG4gICAgICAgICAgICBpZiAoZmlsdGVyQ29tbWFuZCkge1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5uZXdGaWx0ZXIgPSBmaWx0ZXJDb21tYW5kO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24ubmV3RmlsdGVyID0gaC5leHRlbmQobmV3IG1peGl0dXAuQ29tbWFuZEZpbHRlcigpLCBvcGVyYXRpb24uc3RhcnRGaWx0ZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3BlcmF0aW9uLm5ld0ZpbHRlci5zZWxlY3RvciA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24ubmV3RmlsdGVyLnNlbGVjdG9yID0gc2VsZi5jb25maWcuc2VsZWN0b3JzLnRhcmdldDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uLm5ld0ZpbHRlci5zZWxlY3RvciA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLm5ld0ZpbHRlci5zZWxlY3RvciA9ICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmZpbHRlck9wZXJhdGlvbihvcGVyYXRpb24pO1xuXG4gICAgICAgICAgICBvcGVyYXRpb24uc3RhcnRDb250YWluZXJDbGFzc05hbWUgPSBvcGVyYXRpb24uc3RhcnRTdGF0ZS5hY3RpdmVDb250YWluZXJDbGFzc05hbWU7XG5cbiAgICAgICAgICAgIGlmIChjaGFuZ2VMYXlvdXRDb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLm5ld0NvbnRhaW5lckNsYXNzTmFtZSA9IGNoYW5nZUxheW91dENvbW1hbmQuY29udGFpbmVyQ2xhc3NOYW1lO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi5uZXdDb250YWluZXJDbGFzc05hbWUgIT09IG9wZXJhdGlvbi5zdGFydENvbnRhaW5lckNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb24ud2lsbENoYW5nZUxheW91dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24ubmV3Q29udGFpbmVyQ2xhc3NOYW1lID0gb3BlcmF0aW9uLnN0YXJ0Q29udGFpbmVyQ2xhc3NOYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuYW5pbWF0aW9uLmVuYWJsZSkge1xuICAgICAgICAgICAgICAgIC8vIFBvcHVsYXRlIHRoZSBvcGVyYXRpb24ncyBwb3NpdGlvbiBkYXRhXG5cbiAgICAgICAgICAgICAgICBzZWxmLmdldFN0YXJ0TWl4RGF0YShvcGVyYXRpb24pO1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0SW50ZXIob3BlcmF0aW9uKTtcblxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5kb2NTdGF0ZSA9IGguZ2V0RG9jdW1lbnRTdGF0ZShzZWxmLmRvbS5kb2N1bWVudCk7XG5cbiAgICAgICAgICAgICAgICBzZWxmLmdldEludGVyTWl4RGF0YShvcGVyYXRpb24pO1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0RmluYWwob3BlcmF0aW9uKTtcbiAgICAgICAgICAgICAgICBzZWxmLmdldEZpbmFsTWl4RGF0YShvcGVyYXRpb24pO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5wYXJzZUVmZmVjdHMoKTtcblxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5oYXNFZmZlY3QgPSBzZWxmLmhhc0VmZmVjdCgpO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5nZXRUd2VlbkRhdGEob3BlcmF0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi53aWxsU29ydCkge1xuICAgICAgICAgICAgICAgIHNlbGYudGFyZ2V0cyA9IG9wZXJhdGlvbi5uZXdPcmRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3BlcmF0aW9uLm5ld1N0YXRlID0gc2VsZi5idWlsZFN0YXRlKG9wZXJhdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNhbGxGaWx0ZXJzKCdvcGVyYXRpb25NYXBwZWRHZXRPcGVyYXRpb24nLCBvcGVyYXRpb24sIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbmRlcnMgYSBwcmV2aW91c2x5IGNyZWF0ZWQgb3BlcmF0aW9uIGF0IGEgc3BlY2lmaWMgcG9pbnQgaW4gaXRzIHBhdGgsIGFzXG4gICAgICAgICAqIGRldGVybWluZWQgYnkgYSBtdWx0aXBsaWVyIGJldHdlZW4gMCBhbmQgMS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogLnR3ZWVuKG9wZXJhdGlvbiwgbXVsdGlwbGllcilcbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHttaXhpdHVwLk9wZXJhdGlvbn0gICAgIG9wZXJhdGlvblxuICAgICAgICAgKiAgICAgIEFuIG9wZXJhdGlvbiBvYmplY3QgY3JlYXRlZCB2aWEgdGhlIGBnZXRPcGVyYXRpb25gIG1ldGhvZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gICB7RmxvYXR9ICAgICAgICAgICAgICAgICBtdWx0aXBsaWVyXG4gICAgICAgICAqICAgICAgQW55IG51bWJlciBiZXR3ZWVuIDAgYW5kIDEgcmVwcmVzZW50aW5nIHRoZSBwZXJjZW50YWdlIGNvbXBsZXRlIG9mIHRoZSBvcGVyYXRpb25cbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHR3ZWVuOiBmdW5jdGlvbihvcGVyYXRpb24sIG11bHRpcGxpZXIpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIHBvc0RhdGEgICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgdG9IaWRlSW5kZXggICAgID0gLTEsXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIG11bHRpcGxpZXIgPSBNYXRoLm1pbihtdWx0aXBsaWVyLCAxKTtcbiAgICAgICAgICAgIG11bHRpcGxpZXIgPSBNYXRoLm1heChtdWx0aXBsaWVyLCAwKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgdGFyZ2V0ID0gb3BlcmF0aW9uLnNob3dbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIHBvc0RhdGEgPSBvcGVyYXRpb24uc2hvd1Bvc0RhdGFbaV07XG5cbiAgICAgICAgICAgICAgICB0YXJnZXQuYXBwbHlUd2Vlbihwb3NEYXRhLCBtdWx0aXBsaWVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgdGFyZ2V0ID0gb3BlcmF0aW9uLmhpZGVbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuaXNTaG93bikge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgodG9IaWRlSW5kZXggPSBvcGVyYXRpb24udG9IaWRlLmluZGV4T2YodGFyZ2V0KSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBwb3NEYXRhID0gb3BlcmF0aW9uLnRvSGlkZVBvc0RhdGFbdG9IaWRlSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0LmlzU2hvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuYXBwbHlUd2Vlbihwb3NEYXRhLCBtdWx0aXBsaWVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluc2VydHMgb25lIG9yIG1vcmUgbmV3IHRhcmdldCBlbGVtZW50cyBpbnRvIHRoZSBjb250YWluZXIgYXQgYSBzcGVjaWZpZWRcbiAgICAgICAgICogaW5kZXguXG4gICAgICAgICAqXG4gICAgICAgICAqIFRvIGJlIGluZGV4ZWQgYXMgdGFyZ2V0cywgbmV3IGVsZW1lbnRzIG11c3QgbWF0Y2ggdGhlIGBzZWxlY3RvcnMudGFyZ2V0YFxuICAgICAgICAgKiBzZWxlY3RvciAoYCcubWl4J2AgYnkgZGVmYXVsdCkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIC5pbnNlcnQobmV3RWxlbWVudHMgWywgaW5kZXhdIFssIGFuaW1hdGVdLCBbLCBjYWxsYmFja10pXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMTogSW5zZXJ0aW5nIGEgc2luZ2xlIGVsZW1lbnQgdmlhIHJlZmVyZW5jZTwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogY29uc29sZS5sb2cobWl4ZXIuZ2V0U3RhdGUoKS50b3RhbFNob3cpOyAvLyAwXG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIENyZWF0ZSBhIG5ldyBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAqIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWl4Jyk7XG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLmluc2VydChuZXdFbGVtZW50KVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS50b3RhbFNob3cgPT09IDEpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAyOiBJbnNlcnRpbmcgYSBzaW5nbGUgZWxlbWVudCB2aWEgSFRNTCBzdHJpbmc8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKG1peGVyLmdldFN0YXRlKCkudG90YWxTaG93KTsgLy8gMVxuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBDcmVhdGUgYSBuZXcgZWxlbWVudCB2aWEgcmVmZXJlbmNlXG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBuZXdFbGVtZW50SHRtbCA9ICcmbHQ7ZGl2IGNsYXNzPVwibWl4XCImZ3Q7Jmx0Oy9kaXYmZ3Q7JztcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gQ3JlYXRlIGFuZCBpbnNlcnQgdGhlIG5ldyBlbGVtZW50IGF0IGluZGV4IDFcbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIuaW5zZXJ0KG5ld0VsZW1lbnRIdG1sLCAxKVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS50b3RhbFNob3cgPT09IDIpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUuc2hvd1sxXS5vdXRlckhUTUwgPT09IG5ld0VsZW1lbnRIdG1sKTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMzogSW5zZXJ0aW5nIG11bHRpcGxlIGVsZW1lbnRzIHZpYSByZWZlcmVuY2U8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKG1peGVyLmdldFN0YXRlKCkudG90YWxTaG93KTsgLy8gMlxuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBDcmVhdGUgYW4gYXJyYXkgb2YgbmV3IGVsZW1lbnRzIHRvIGluc2VydC5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIG5ld0VsZW1lbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAqIHZhciBuZXdFbGVtZW50MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgKlxuICAgICAgICAgKiBuZXdFbGVtZW50MS5jbGFzc0xpc3QuYWRkKCdtaXgnKTtcbiAgICAgICAgICogbmV3RWxlbWVudDIuY2xhc3NMaXN0LmFkZCgnbWl4Jyk7XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBuZXdFbGVtZW50c0NvbGxlY3Rpb24gPSBbbmV3RWxlbWVudDEsIG5ld0VsZW1lbnQyXTtcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gSW5zZXJ0IHRoZSBuZXcgZWxlbWVudHMgc3RhcnRpbmcgYXQgaW5kZXggMVxuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5pbnNlcnQobmV3RWxlbWVudHNDb2xsZWN0aW9uLCAxKVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS50b3RhbFNob3cgPT09IDQpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUuc2hvd1sxXSA9PT0gbmV3RWxlbWVudDEpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUuc2hvd1syXSA9PT0gbmV3RWxlbWVudDIpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSA0OiBJbnNlcnRpbmcgYSBqUXVlcnkgY29sbGVjdGlvbiBvYmplY3QgY29udGFpbmluZyBvbmUgb3IgbW9yZSBlbGVtZW50czwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogY29uc29sZS5sb2cobWl4ZXIuZ2V0U3RhdGUoKS50b3RhbFNob3cpOyAvLyA0XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciAkbmV3RWxlbWVudCA9ICQoJyZsdDtkaXYgY2xhc3M9XCJtaXhcIiZndDsmbHQ7L2RpdiZndDsnKTtcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gSW5zZXJ0IHRoZSBuZXcgZWxlbWVudHMgc3RhcnRpbmcgYXQgaW5kZXggM1xuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5pbnNlcnQobmV3RWxlbWVudHNDb2xsZWN0aW9uLCAzKVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS50b3RhbFNob3cgPT09IDUpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUuc2hvd1szXSA9PT0gJG5ld0VsZW1lbnRbMF0pOyAvLyB0cnVlXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgICAgIDIuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7KEhUTUxFbGVtZW50fEFycmF5LjxIVE1MRWxlbWVudD58c3RyaW5nKX0gICAgbmV3RWxlbWVudHNcbiAgICAgICAgICogICAgICBBIHJlZmVyZW5jZSB0byBhIHNpbmdsZSBlbGVtZW50IHRvIGluc2VydCwgYW4gYXJyYXktbGlrZSBjb2xsZWN0aW9uIG9mIGVsZW1lbnRzLCBvciBhbiBIVE1MIHN0cmluZyByZXByZXNlbnRpbmcgYSBzaW5nbGUgZWxlbWVudC5cbiAgICAgICAgICogQHBhcmFtICAgICAgIHtudW1iZXJ9ICAgIGluZGV4PTBcbiAgICAgICAgICogICAgICBUaGUgaW5kZXggYXQgd2hpY2ggdG8gaW5zZXJ0IHRoZSBuZXcgZWxlbWVudChzKS4gYDBgIGJ5IGRlZmF1bHQuXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7Ym9vbGVhbn0gICBbYW5pbWF0ZT10cnVlXVxuICAgICAgICAgKiAgICAgIEFuIG9wdGlvbmFsIGJvb2xlYW4gZGljdGF0aW5nIHdoZXRoZXIgdGhlIG9wZXJhdGlvbiBzaG91bGQgYW5pbWF0ZSwgb3Igb2NjdXIgc3luY3Jvbm91c2x5IHdpdGggbm8gYW5pbWF0aW9uLiBgdHJ1ZWAgYnkgZGVmYXVsdC5cbiAgICAgICAgICogQHBhcmFtICAgICAgIHtmdW5jdGlvbn0gIFtjYWxsYmFjaz1udWxsXVxuICAgICAgICAgKiAgICAgIEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIG9wZXJhdGlvbiBoYXMgY29tcGxldGVkLlxuICAgICAgICAgKiBAcmV0dXJuICAgICAge1Byb21pc2UuPG1peGl0dXAuU3RhdGU+fVxuICAgICAgICAgKiAgICAgIEEgcHJvbWlzZSByZXNvbHZpbmcgd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBvYmplY3QuXG4gICAgICAgICAqL1xuXG4gICAgICAgIGluc2VydDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICAgICAgYXJncyA9IHNlbGYucGFyc2VJbnNlcnRBcmdzKGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLm11bHRpbWl4KHtcbiAgICAgICAgICAgICAgICBpbnNlcnQ6IGFyZ3MuY29tbWFuZFxuICAgICAgICAgICAgfSwgYXJncy5hbmltYXRlLCBhcmdzLmNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5zZXJ0cyBvbmUgb3IgbW9yZSBuZXcgZWxlbWVudHMgYmVmb3JlIGEgcHJvdmlkZWQgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIC5pbnNlcnRCZWZvcmUobmV3RWxlbWVudHMsIHJlZmVyZW5jZUVsZW1lbnQgWywgYW5pbWF0ZV0gWywgY2FsbGJhY2tdKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBJbnNlcnRpbmcgYSBuZXcgZWxlbWVudCBiZWZvcmUgYSByZWZlcmVuY2UgZWxlbWVudDwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogLy8gQW4gZXhpc3RpbmcgcmVmZXJlbmNlIGVsZW1lbnQgaXMgY2hvc2VuIGF0IGluZGV4IDJcbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIHJlZmVyZW5jZUVsZW1lbnQgPSBtaXhlci5nZXRTdGF0ZSgpLnNob3dbMl07XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIENyZWF0ZSBhIG5ldyBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAqIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWl4Jyk7XG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLmluc2VydEJlZm9yZShuZXdFbGVtZW50LCByZWZlcmVuY2VFbGVtZW50KVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICAvLyBUaGUgbmV3IGVsZW1lbnQgaXMgaW5zZXJ0ZWQgaW50byB0aGUgY29udGFpbmVyIGF0IGluZGV4IDIsIGJlZm9yZSB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5zaG93WzJdID09PSBuZXdFbGVtZW50KTsgLy8gdHJ1ZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIC8vIFRoZSByZWZlcmVuY2UgZWxlbWVudCBpcyBub3cgYXQgaW5kZXggM1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnNob3dbM10gPT09IHJlZmVyZW5jZUVsZW1lbnQpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7KEhUTUxFbGVtZW50fEFycmF5LjxIVE1MRWxlbWVudD58c3RyaW5nKX0gICAgbmV3RWxlbWVudHNcbiAgICAgICAgICogICAgICBBIHJlZmVyZW5jZSB0byBhIHNpbmdsZSBlbGVtZW50IHRvIGluc2VydCwgYW4gYXJyYXktbGlrZSBjb2xsZWN0aW9uIG9mIGVsZW1lbnRzLCBvciBhbiBIVE1MIHN0cmluZyByZXByZXNlbnRpbmcgYSBzaW5nbGUgZWxlbWVudC5cbiAgICAgICAgICogQHBhcmFtICAgICAgIHtIVE1MRWxlbWVudH0gICAgcmVmZXJlbmNlRWxlbWVudFxuICAgICAgICAgKiAgICAgIEEgcmVmZXJlbmNlIHRvIGFuIGV4aXN0aW5nIGVsZW1lbnQgaW4gdGhlIGNvbnRhaW5lciB0byBpbnNlcnQgbmV3IGVsZW1lbnRzIGJlZm9yZS5cbiAgICAgICAgICpAcGFyYW0gICAgICAge2Jvb2xlYW59ICAgW2FuaW1hdGU9dHJ1ZV1cbiAgICAgICAgICogICAgICBBbiBvcHRpb25hbCBib29sZWFuIGRpY3RhdGluZyB3aGV0aGVyIHRoZSBvcGVyYXRpb24gc2hvdWxkIGFuaW1hdGUsIG9yIG9jY3VyIHN5bmNyb25vdXNseSB3aXRoIG5vIGFuaW1hdGlvbi4gYHRydWVgIGJ5IGRlZmF1bHQuXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7ZnVuY3Rpb259ICBbY2FsbGJhY2s9bnVsbF1cbiAgICAgICAgICogICAgICBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHRoZSBvcGVyYXRpb24gaGFzIGNvbXBsZXRlZC5cbiAgICAgICAgICogQHJldHVybiAgICAgIHtQcm9taXNlLjxtaXhpdHVwLlN0YXRlPn1cbiAgICAgICAgICogICAgICBBIHByb21pc2UgcmVzb2x2aW5nIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgb2JqZWN0LlxuICAgICAgICAgKi9cblxuICAgICAgICBpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGFyZ3MgPSBzZWxmLnBhcnNlSW5zZXJ0QXJncyhhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5pbnNlcnQoYXJncy5jb21tYW5kLmNvbGxlY3Rpb24sICdiZWZvcmUnLCBhcmdzLmNvbW1hbmQuc2libGluZywgYXJncy5hbmltYXRlLCBhcmdzLmNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5zZXJ0cyBvbmUgb3IgbW9yZSBuZXcgZWxlbWVudHMgYWZ0ZXIgYSBwcm92aWRlZCByZWZlcmVuY2UgZWxlbWVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogLmluc2VydEFmdGVyKG5ld0VsZW1lbnRzLCByZWZlcmVuY2VFbGVtZW50IFssIGFuaW1hdGVdIFssIGNhbGxiYWNrXSlcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogSW5zZXJ0aW5nIGEgbmV3IGVsZW1lbnQgYWZ0ZXIgYSByZWZlcmVuY2UgZWxlbWVudDwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogLy8gQW4gZXhpc3RpbmcgcmVmZXJlbmNlIGVsZW1lbnQgaXMgY2hvc2VuIGF0IGluZGV4IDJcbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIHJlZmVyZW5jZUVsZW1lbnQgPSBtaXhlci5nZXRTdGF0ZSgpLnNob3dbMl07XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIENyZWF0ZSBhIG5ldyBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAqIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWl4Jyk7XG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLmluc2VydEFmdGVyKG5ld0VsZW1lbnQsIHJlZmVyZW5jZUVsZW1lbnQpXG4gICAgICAgICAqICAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgIC8vIFRoZSBuZXcgZWxlbWVudCBpcyBpbnNlcnRlZCBpbnRvIHRoZSBjb250YWluZXIgYXQgaW5kZXggMywgYWZ0ZXIgdGhlIHJlZmVyZW5jZSBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUuc2hvd1szXSA9PT0gbmV3RWxlbWVudCk7IC8vIHRydWVcbiAgICAgICAgICogICAgIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAgICAgIHsoSFRNTEVsZW1lbnR8QXJyYXkuPEhUTUxFbGVtZW50PnxzdHJpbmcpfSAgICBuZXdFbGVtZW50c1xuICAgICAgICAgKiAgICAgIEEgcmVmZXJlbmNlIHRvIGEgc2luZ2xlIGVsZW1lbnQgdG8gaW5zZXJ0LCBhbiBhcnJheS1saWtlIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMsIG9yIGFuIEhUTUwgc3RyaW5nIHJlcHJlc2VudGluZyBhIHNpbmdsZSBlbGVtZW50LlxuICAgICAgICAgKiBAcGFyYW0gICAgICAge0hUTUxFbGVtZW50fSAgICByZWZlcmVuY2VFbGVtZW50XG4gICAgICAgICAqICAgICAgQSByZWZlcmVuY2UgdG8gYW4gZXhpc3RpbmcgZWxlbWVudCBpbiB0aGUgY29udGFpbmVyIHRvIGluc2VydCBuZXcgZWxlbWVudHMgYWZ0ZXIuXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7Ym9vbGVhbn0gICBbYW5pbWF0ZT10cnVlXVxuICAgICAgICAgKiAgICAgIEFuIG9wdGlvbmFsIGJvb2xlYW4gZGljdGF0aW5nIHdoZXRoZXIgdGhlIG9wZXJhdGlvbiBzaG91bGQgYW5pbWF0ZSwgb3Igb2NjdXIgc3luY3Jvbm91c2x5IHdpdGggbm8gYW5pbWF0aW9uLiBgdHJ1ZWAgYnkgZGVmYXVsdC5cbiAgICAgICAgICogQHBhcmFtICAgICAgIHtmdW5jdGlvbn0gIFtjYWxsYmFjaz1udWxsXVxuICAgICAgICAgKiAgICAgIEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIG9wZXJhdGlvbiBoYXMgY29tcGxldGVkLlxuICAgICAgICAgKiBAcmV0dXJuICAgICAge1Byb21pc2UuPG1peGl0dXAuU3RhdGU+fVxuICAgICAgICAgKiAgICAgIEEgcHJvbWlzZSByZXNvbHZpbmcgd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBvYmplY3QuXG4gICAgICAgICAqL1xuXG4gICAgICAgIGluc2VydEFmdGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgICAgICBhcmdzID0gc2VsZi5wYXJzZUluc2VydEFyZ3MoYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5zZXJ0KGFyZ3MuY29tbWFuZC5jb2xsZWN0aW9uLCAnYWZ0ZXInLCBhcmdzLmNvbW1hbmQuc2libGluZywgYXJncy5hbmltYXRlLCBhcmdzLmNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5zZXJ0cyBvbmUgb3IgbW9yZSBuZXcgZWxlbWVudHMgaW50byB0aGUgY29udGFpbmVyIGJlZm9yZSBhbGwgZXhpc3RpbmcgdGFyZ2V0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogLnByZXBlbmQobmV3RWxlbWVudHMgWyxhbmltYXRlXSBbLGNhbGxiYWNrXSlcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogUHJlcGVuZGluZyBhIG5ldyBlbGVtZW50PC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBDcmVhdGUgYSBuZXcgZWxlbWVudFxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgKiBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21peCcpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBJbnNlcnQgdGhlIGVsZW1lbnQgaW50byB0aGUgY29udGFpbmVyXG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLnByZXBlbmQobmV3RWxlbWVudClcbiAgICAgICAgICogICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUuc2hvd1swXSA9PT0gbmV3RWxlbWVudCk7IC8vIHRydWVcbiAgICAgICAgICogICAgIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAgICAgIHsoSFRNTEVsZW1lbnR8QXJyYXkuPEhUTUxFbGVtZW50PnxzdHJpbmcpfSAgICBuZXdFbGVtZW50c1xuICAgICAgICAgKiAgICAgIEEgcmVmZXJlbmNlIHRvIGEgc2luZ2xlIGVsZW1lbnQgdG8gaW5zZXJ0LCBhbiBhcnJheS1saWtlIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMsIG9yIGFuIEhUTUwgc3RyaW5nIHJlcHJlc2VudGluZyBhIHNpbmdsZSBlbGVtZW50LlxuICAgICAgICAgKiBAcGFyYW0gICAgICAge2Jvb2xlYW59ICAgW2FuaW1hdGU9dHJ1ZV1cbiAgICAgICAgICogICAgICBBbiBvcHRpb25hbCBib29sZWFuIGRpY3RhdGluZyB3aGV0aGVyIHRoZSBvcGVyYXRpb24gc2hvdWxkIGFuaW1hdGUsIG9yIG9jY3VyIHN5bmNyb25vdXNseSB3aXRoIG5vIGFuaW1hdGlvbi4gYHRydWVgIGJ5IGRlZmF1bHQuXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7ZnVuY3Rpb259ICBbY2FsbGJhY2s9bnVsbF1cbiAgICAgICAgICogICAgICBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHRoZSBvcGVyYXRpb24gaGFzIGNvbXBsZXRlZC5cbiAgICAgICAgICogQHJldHVybiAgICAgIHtQcm9taXNlLjxtaXhpdHVwLlN0YXRlPn1cbiAgICAgICAgICogICAgICBBIHByb21pc2UgcmVzb2x2aW5nIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgb2JqZWN0LlxuICAgICAgICAgKi9cblxuICAgICAgICBwcmVwZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgICAgICBhcmdzID0gc2VsZi5wYXJzZUluc2VydEFyZ3MoYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5zZXJ0KDAsIGFyZ3MuY29tbWFuZC5jb2xsZWN0aW9uLCBhcmdzLmFuaW1hdGUsIGFyZ3MuY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnNlcnRzIG9uZSBvciBtb3JlIG5ldyBlbGVtZW50cyBpbnRvIHRoZSBjb250YWluZXIgYWZ0ZXIgYWxsIGV4aXN0aW5nIHRhcmdldHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIC5hcHBlbmQobmV3RWxlbWVudHMgWyxhbmltYXRlXSBbLGNhbGxiYWNrXSlcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogQXBwZW5kaW5nIGEgbmV3IGVsZW1lbnQ8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIENyZWF0ZSBhIG5ldyBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAqIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWl4Jyk7XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIEluc2VydCB0aGUgZWxlbWVudCBpbnRvIHRoZSBjb250YWluZXJcbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIuYXBwZW5kKG5ld0VsZW1lbnQpXG4gICAgICAgICAqICAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnNob3dbc3RhdGUuc2hvdy5sZW5ndGggLSAxXSA9PT0gbmV3RWxlbWVudCk7IC8vIHRydWVcbiAgICAgICAgICogICAgIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAgICAgIHsoSFRNTEVsZW1lbnR8QXJyYXkuPEhUTUxFbGVtZW50PnxzdHJpbmcpfSAgICBuZXdFbGVtZW50c1xuICAgICAgICAgKiAgICAgIEEgcmVmZXJlbmNlIHRvIGEgc2luZ2xlIGVsZW1lbnQgdG8gaW5zZXJ0LCBhbiBhcnJheS1saWtlIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMsIG9yIGFuIEhUTUwgc3RyaW5nIHJlcHJlc2VudGluZyBhIHNpbmdsZSBlbGVtZW50LlxuICAgICAgICAgKiBAcGFyYW0gICAgICAge2Jvb2xlYW59ICAgW2FuaW1hdGU9dHJ1ZV1cbiAgICAgICAgICogICAgICBBbiBvcHRpb25hbCBib29sZWFuIGRpY3RhdGluZyB3aGV0aGVyIHRoZSBvcGVyYXRpb24gc2hvdWxkIGFuaW1hdGUsIG9yIG9jY3VyIHN5bmNyb25vdXNseSB3aXRoIG5vIGFuaW1hdGlvbi4gYHRydWVgIGJ5IGRlZmF1bHQuXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7ZnVuY3Rpb259ICBbY2FsbGJhY2s9bnVsbF1cbiAgICAgICAgICogICAgICBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHRoZSBvcGVyYXRpb24gaGFzIGNvbXBsZXRlZC5cbiAgICAgICAgICogQHJldHVybiAgICAgIHtQcm9taXNlLjxtaXhpdHVwLlN0YXRlPn1cbiAgICAgICAgICogICAgICBBIHByb21pc2UgcmVzb2x2aW5nIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgb2JqZWN0LlxuICAgICAgICAgKi9cblxuICAgICAgICBhcHBlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGFyZ3MgPSBzZWxmLnBhcnNlSW5zZXJ0QXJncyhhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5pbnNlcnQoc2VsZi5zdGF0ZS50b3RhbFRhcmdldHMsIGFyZ3MuY29tbWFuZC5jb2xsZWN0aW9uLCBhcmdzLmFuaW1hdGUsIGFyZ3MuY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmVzIG9uZSBvciBtb3JlIGV4aXN0aW5nIHRhcmdldCBlbGVtZW50cyBmcm9tIHRoZSBjb250YWluZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIC5yZW1vdmUoZWxlbWVudHMgWywgYW5pbWF0ZV0gWywgY2FsbGJhY2tdKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDE6IFJlbW92aW5nIGFuIGVsZW1lbnQgYnkgcmVmZXJlbmNlPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgZWxlbWVudFRvUmVtb3ZlID0gY29udGFpbmVyRWwuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLnJlbW92ZShlbGVtZW50VG9SZW1vdmUpXG4gICAgICAgICAqICAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudGFyZ2V0cy5pbmRleE9mKGVsZW1lbnRUb1JlbW92ZSkgPT09IC0xKTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDI6IFJlbW92aW5nIGEgY29sbGVjdGlvbiBvZiBlbGVtZW50cyBieSByZWZlcmVuY2U8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBlbGVtZW50c1RvUmVtb3ZlID0gY29udGFpbmVyRWwucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5LWEnKTtcbiAgICAgICAgICpcbiAgICAgICAgICogY29uc29sZS5sb2coZWxlbWVudHNUb1JlbW92ZS5sZW5ndGgpIC8vIDNcbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIucmVtb3ZlKGVsZW1lbnRzVG9SZW1vdmUpXG4gICAgICAgICAqICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAqICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRhaW5lckVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlZ29yeS1hJykubGVuZ3RoKTsgLy8gMFxuICAgICAgICAgKiAgICAgIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDM6IFJlbW92aW5nIG9uZSBvciBtb3JlIGVsZW1lbnRzIGJ5IHNlbGVjdG9yPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5yZW1vdmUoJy5jYXRlZ29yeS1hJylcbiAgICAgICAgICogICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICogICAgICAgICAgY29uc29sZS5sb2coY29udGFpbmVyRWwucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5LWEnKS5sZW5ndGgpOyAvLyAwXG4gICAgICAgICAqICAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgNDogUmVtb3ZpbmcgYW4gZWxlbWVudCBieSBpbmRleDwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogY29uc29sZS5sb2cobWl4ZXIuZ2V0U3RhdGUudG90YWxTaG93KTsgLy8gNFxuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBSZW1vdmUgdGhlIGVsZW1lbnQgYXQgaW5kZXggM1xuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5yZW1vdmUoMylcbiAgICAgICAgICogICAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS50b3RhbFNob3cpOyAvLyAzXG4gICAgICAgICAqICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnNob3dbM10pOyAvLyB1bmRlZmluZWRcbiAgICAgICAgICogICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICpcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7KEhUTUxFbGVtZW50fEFycmF5LjxIVE1MRWxlbWVudD58c3RyaW5nfG51bWJlcil9ICAgIGVsZW1lbnRzXG4gICAgICAgICAqICAgICAgQSByZWZlcmVuY2UgdG8gYSBzaW5nbGUgZWxlbWVudCB0byByZW1vdmUsIGFuIGFycmF5LWxpa2UgY29sbGVjdGlvbiBvZiBlbGVtZW50cywgYSBzZWxlY3RvciBzdHJpbmcsIG9yIHRoZSBpbmRleCBvZiBhbiBlbGVtZW50IHRvIHJlbW92ZS5cbiAgICAgICAgICogQHBhcmFtICAgICAgIHtib29sZWFufSAgIFthbmltYXRlPXRydWVdXG4gICAgICAgICAqICAgICAgQW4gb3B0aW9uYWwgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciB0aGUgb3BlcmF0aW9uIHNob3VsZCBhbmltYXRlLCBvciBvY2N1ciBzeW5jcm9ub3VzbHkgd2l0aCBubyBhbmltYXRpb24uIGB0cnVlYCBieSBkZWZhdWx0LlxuICAgICAgICAgKiBAcGFyYW0gICAgICAge2Z1bmN0aW9ufSAgW2NhbGxiYWNrPW51bGxdXG4gICAgICAgICAqICAgICAgQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgb3BlcmF0aW9uIGhhcyBjb21wbGV0ZWQuXG4gICAgICAgICAqIEByZXR1cm4gICAgICB7UHJvbWlzZS48bWl4aXR1cC5TdGF0ZT59XG4gICAgICAgICAqICAgICAgQSBwcm9taXNlIHJlc29sdmluZyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9iamVjdC5cbiAgICAgICAgICovXG5cbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgICAgICBhcmdzID0gc2VsZi5wYXJzZVJlbW92ZUFyZ3MoYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYubXVsdGltaXgoe1xuICAgICAgICAgICAgICAgIHJlbW92ZTogYXJncy5jb21tYW5kXG4gICAgICAgICAgICB9LCBhcmdzLmFuaW1hdGUsIGFyZ3MuY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXRyaWV2ZXMgdGhlIHRoZSB2YWx1ZSBvZiBhbnkgcHJvcGVydHkgb3Igc3ViLW9iamVjdCB3aXRoaW4gdGhlIGN1cnJlbnRcbiAgICAgICAgICogbWl4aXR1cCBjb25maWd1cmF0aW9uLCBvciB0aGUgd2hvbGUgY29uZmlndXJhdGlvbiBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIC5nZXRDb25maWcoW3N0cmluZ0tleV0pXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMTogcmV0cmlldmUgdGhlIGVudGlyZSBjb25maWd1cmF0aW9uIG9iamVjdDwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIGNvbmZpZyA9IG1peGVyLmdldENvbmZpZygpOyAvLyBDb25maWcgeyAuLi4gfVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDI6IHJldHJpZXZlIGEgbmFtZWQgc3ViLW9iamVjdCBvZiBjb25maWd1cmF0aW9uIG9iamVjdDwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIGFuaW1hdGlvbiA9IG1peGVyLmdldENvbmZpZygnYW5pbWF0aW9uJyk7IC8vIENvbmZpZ0FuaW1hdGlvbiB7IC4uLiB9XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMzogcmV0cmlldmUgYSB2YWx1ZSBvZiBjb25maWd1cmF0aW9uIG9iamVjdCB2aWEgYSBkb3Qtbm90YXRpb24gc3RyaW5nIGtleTwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIGVmZmVjdHMgPSBtaXhlci5nZXRDb25maWcoJ2FuaW1hdGlvbi5lZmZlY3RzJyk7IC8vICdmYWRlIHNjYWxlJ1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAgICAgMi4wLjBcbiAgICAgICAgICogQHBhcmFtICAgICAgIHtzdHJpbmd9ICAgIFtzdHJpbmdLZXldICAgIEEgXCJkb3Qtbm90YXRpb25cIiBzdHJpbmcga2V5XG4gICAgICAgICAqIEByZXR1cm4gICAgICB7Kn1cbiAgICAgICAgICovXG5cbiAgICAgICAgZ2V0Q29uZmlnOiBmdW5jdGlvbihzdHJpbmdLZXkpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKCFzdHJpbmdLZXkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHNlbGYuY29uZmlnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGguZ2V0UHJvcGVydHkoc2VsZi5jb25maWcsIHN0cmluZ0tleSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNhbGxGaWx0ZXJzKCd2YWx1ZUdldENvbmZpZycsIHZhbHVlLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGVzIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBtaXhlciwgYWZ0ZXIgaXQgaGFzIGJlZW4gaW5zdGFudGlhdGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBTZWUgdGhlIENvbmZpZ3VyYXRpb24gT2JqZWN0IGRvY3VtZW50YXRpb24gZm9yIGEgZnVsbCBsaXN0IG9mIGF2aWxhYmxlXG4gICAgICAgICAqIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogLmNvbmZpZ3VyZShjb25maWcpXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMTogVXBkYXRpbmcgYW5pbWF0aW9uIG9wdGlvbnM8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLmNvbmZpZ3VyZSh7XG4gICAgICAgICAqICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICogICAgICAgICBlZmZlY3RzOiAnZmFkZSB0cmFuc2xhdGVYKC0xMDAlKScsXG4gICAgICAgICAqICAgICAgICAgZHVyYXRpb246IDMwMFxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAyOiBSZW1vdmluZyBhIGNhbGxiYWNrIGFmdGVyIGl0IGhhcyBiZWVuIHNldDwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIG1peGVyO1xuICAgICAgICAgKlxuICAgICAgICAgKiBmdW5jdGlvbiBoYW5kbGVNaXhFbmRPbmNlKCkge1xuICAgICAgICAgKiAgICAgLy8gRG8gc29tZXRoaW5nIC4uXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBUaGVuIG51bGxpZnkgdGhlIGNhbGxiYWNrXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBtaXhlci5jb25maWd1cmUoe1xuICAgICAgICAgKiAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgKiAgICAgICAgICAgICBvbk1peEVuZDogbnVsbFxuICAgICAgICAgKiAgICAgICAgIH1cbiAgICAgICAgICogICAgIH0pO1xuICAgICAgICAgKiB9O1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBJbnN0YW50aWF0ZSBhIG1peGVyIHdpdGggYSBjYWxsYmFjayBkZWZpbmVkXG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAqICAgICAgICAgb25NaXhFbmQ6IGhhbmRsZU1peEVuZE9uY2VcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICAgICAge29iamVjdH0gICAgY29uZmlnXG4gICAgICAgICAqICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgb25lIG9mIG1vcmUgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICAgICAgICAgKiBAcmV0dXJuICAgICAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGNvbmZpZ3VyZTogZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbmZpZ3VyZScsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGguZXh0ZW5kKHNlbGYuY29uZmlnLCBjb25maWcsIHRydWUsIHRydWUpO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlckNvbmZpZ3VyZScsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlXG4gICAgICAgICAqIG1peGVyLiBTZWUgdGhlIFN0YXRlIE9iamVjdCBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBOQjogU3RhdGUgb2JqZWN0cyBhcmUgaW1tdXRhYmxlIGFuZCBzaG91bGQgdGhlcmVmb3JlIGJlIHJlZ2VuZXJhdGVkXG4gICAgICAgICAqIGFmdGVyIGFueSBvcGVyYXRpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIC5nZXRTdGF0ZSgpO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBSZXRyaWV2aW5nIGEgc3RhdGUgb2JqZWN0PC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgc3RhdGUgPSBtaXhlci5nZXRTdGF0ZSgpO1xuICAgICAgICAgKlxuICAgICAgICAgKiBjb25zb2xlLmxvZyhzdGF0ZS50b3RhbFNob3cgKyAndGFyZ2V0cyBhcmUgY3VycmVudGx5IHNob3duJyk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgICAgICAyLjAuMFxuICAgICAgICAgKiBAcmV0dXJuICAgICAge21peGl0dXAuU3RhdGV9IEFuIG9iamVjdCByZWZsZWN0aW5nIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBtaXhlci5cbiAgICAgICAgICovXG5cbiAgICAgICAgZ2V0U3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHN0YXRlICAgPSBudWxsO1xuXG4gICAgICAgICAgICBzdGF0ZSA9IG5ldyBtaXhpdHVwLlN0YXRlKCk7XG5cbiAgICAgICAgICAgIGguZXh0ZW5kKHN0YXRlLCBzZWxmLnN0YXRlKTtcblxuICAgICAgICAgICAgaC5mcmVlemUoc3RhdGUpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jYWxsRmlsdGVycygnc3RhdGVHZXRTdGF0ZScsIHN0YXRlLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JjZXMgdGhlIHJlLWluZGV4aW5nIGFsbCB0YXJnZXRzIHdpdGhpbiB0aGUgY29udGFpbmVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIHNob3VsZCBvbmx5IGJlIHVzZWQgaWYgc29tZSBvdGhlciBwaWVjZSBvZiBjb2RlIGluIHlvdXIgYXBwbGljYXRpb25cbiAgICAgICAgICogaGFzIG1hbmlwdWxhdGVkIHRoZSBjb250ZW50cyBvZiB5b3VyIGNvbnRhaW5lciwgd2hpY2ggc2hvdWxkIGJlIGF2b2lkZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHlvdSBuZWVkIHRvIGFkZCBvciByZW1vdmUgdGFyZ2V0IGVsZW1lbnRzIGZyb20gdGhlIGNvbnRhaW5lciwgdXNlXG4gICAgICAgICAqIHRoZSBidWlsdC1pbiBgLmluc2VydCgpYCBvciBgLnJlbW92ZSgpYCBtZXRob2RzLCBhbmQgTWl4SXRVcCB3aWxsIGtlZXBcbiAgICAgICAgICogaXRzZWxmIHVwIHRvIGRhdGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIC5mb3JjZVJlZnJlc2goKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBGb3JjZSByZWZyZXNoaW5nIHRoZSBtaXhlciBhZnRlciBleHRlcm5hbCBET00gbWFuaXB1bGF0aW9uPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiBjb25zb2xlLmxvZyhtaXhlci5nZXRTdGF0ZSgpLnRvdGFsU2hvdyk7IC8vIDNcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gQW4gZWxlbWVudCBpcyByZW1vdmVkIGZyb20gdGhlIGNvbnRhaW5lciB2aWEgc29tZSBleHRlcm5hbCBET00gbWFuaXB1bGF0aW9uIGNvZGU6XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnRhaW5lckVsLnJlbW92ZUNoaWxkKGNvbnRhaW5lckVsLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gVGhlIG1peGVyIGRvZXMgbm90IGtub3cgdGhhdCB0aGUgbnVtYmVyIG9mIHRhcmdldHMgaGFzIGNoYW5nZWQ6XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKG1peGVyLmdldFN0YXRlKCkudG90YWxTaG93KTsgLy8gM1xuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5mb3JjZVJlZnJlc2goKTtcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gQWZ0ZXIgZm9yY2VSZWZyZXNoLCB0aGUgbWl4ZXIgaXMgaW4gc3luYyBhZ2FpbjpcbiAgICAgICAgICpcbiAgICAgICAgICogY29uc29sZS5sb2cobWl4ZXIuZ2V0U3RhdGUoKS50b3RhbFNob3cpOyAvLyAyXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAyLjEuMlxuICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBmb3JjZVJlZnJlc2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZWxmLmluZGV4VGFyZ2V0cygpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JjZXMgdGhlIHJlLXJlbmRlcmluZyBvZiBhbGwgdGFyZ2V0cyB3aGVuIHVzaW5nIHRoZSBEYXRhc2V0IEFQSS5cbiAgICAgICAgICpcbiAgICAgICAgICogQnkgZGVmYXVsdCwgdGFyZ2V0cyBhcmUgb25seSByZS1yZW5kZXJlZCB3aGVuIGBkYXRhLmRpcnR5Q2hlY2tgIGlzXG4gICAgICAgICAqIGVuYWJsZWQsIGFuZCBhbiBpdGVtJ3MgZGF0YSBoYXMgY2hhbmdlZCB3aGVuIGBkYXRhc2V0KClgIGlzIGNhbGxlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIGBmb3JjZVJlbmRlcigpYCBtZXRob2QgYWxsb3dzIGZvciB0aGUgcmUtcmVuZGVyaW5nIG9mIGFsbCB0YXJnZXRzXG4gICAgICAgICAqIGluIHJlc3BvbnNlIHRvIHNvbWUgYXJiaXRyYXJ5IGV2ZW50LCBzdWNoIGFzIHRoZSBjaGFuZ2luZyBvZiB0aGUgdGFyZ2V0XG4gICAgICAgICAqIHJlbmRlciBmdW5jdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogVGFyZ2V0cyBhcmUgcmVuZGVyZWQgYWdhaW5zdCB0aGVpciBleGlzdGluZyBkYXRhLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAuZm9yY2VSZW5kZXIoKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBGb3JjZSByZW5kZXIgdGFyZ2V0cyBhZnRlciBjaGFuZ2luZyB0aGUgdGFyZ2V0IHJlbmRlciBmdW5jdGlvbjwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogY29uc29sZS5sb2coY29udGFpbmVyLmlubmVySFRNTCk7IC8vIC4uLiAmbHQ7c3BhbiBjbGFzcz1cIm1peFwiJmd0O0ZvbyZsdDsvc3BhbiZndDsgLi4uXG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLmNvbmZpZ3VyZSh7XG4gICAgICAgICAqICAgICByZW5kZXI6IHtcbiAgICAgICAgICogICAgICAgICB0YXJnZXQ6IChpdGVtKSA9PiBgJmx0O2EgaHJlZj1cIi8ke2l0ZW0uc2x1Z30vXCIgY2xhc3M9XCJtaXhcIiZndDske2l0ZW0udGl0bGV9Jmx0Oy9hJmd0O2BcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLmZvcmNlUmVuZGVyKCk7XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKGNvbnRhaW5lci5pbm5lckhUTUwpOyAvLyAuLi4gJmx0O2EgaHJlZj1cIi9mb28vXCIgY2xhc3M9XCJtaXhcIiZndDtGb28mbHQ7L2EmZ3Q7IC4uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgMy4yLjFcbiAgICAgICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgZm9yY2VSZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHRhcmdldCAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGVsICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGlkICAgICAgPSAnJztcblxuICAgICAgICAgICAgZm9yIChpZCBpbiBzZWxmLmNhY2hlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gc2VsZi5jYWNoZVtpZF07XG5cbiAgICAgICAgICAgICAgICBlbCA9IHRhcmdldC5yZW5kZXIodGFyZ2V0LmRhdGEpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVsICE9PSB0YXJnZXQuZG9tLmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0YXJnZXQgZWxlbWVudCByZWZlcmVuY2VcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmlzSW5Eb20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC51bmJpbmRFdmVudHMoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50LnJlcGxhY2VDaGlsZChlbCwgdGFyZ2V0LmRvbS5lbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldC5pc1Nob3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmRvbS5lbCA9IGVsO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuaXNJbkRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5zdGF0ZSA9IHNlbGYuYnVpbGRTdGF0ZShzZWxmLmxhc3RPcGVyYXRpb24pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmVzIG1peGl0dXAgZnVuY3Rpb25hbGl0eSBmcm9tIHRoZSBjb250YWluZXIsIHVuYmluZHMgYWxsIGNvbnRyb2xcbiAgICAgICAgICogZXZlbnQgaGFuZGxlcnMsIGFuZCBkZWxldGVzIHRoZSBtaXhlciBpbnN0YW5jZSBmcm9tIE1peEl0VXAncyBpbnRlcm5hbFxuICAgICAgICAgKiBjYWNoZS5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBzaG91bGQgYmUgcGVyZm9ybWVkIHdoZW5ldmVyIGEgbWl4ZXIncyBjb250YWluZXIgaXMgcmVtb3ZlZCBmcm9tXG4gICAgICAgICAqIHRoZSBET00sIHN1Y2ggYXMgZHVyaW5nIGEgcGFnZSBjaGFuZ2UgaW4gYSBzaW5nbGUgcGFnZSBhcHBsaWNhdGlvbixcbiAgICAgICAgICogb3IgUmVhY3QncyBgY29tcG9uZW50V2lsbFVubW91bnQoKWAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIC5kZXN0cm95KFtjbGVhblVwXSlcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogRGVzdHJveWluZyB0aGUgbWl4ZXIgYmVmb3JlIHJlbW92aW5nIGl0cyBjb250YWluZXIgZWxlbWVudDwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIuZGVzdHJveSgpO1xuICAgICAgICAgKlxuICAgICAgICAgKiBjb250YWluZXJFbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNvbnRhaW5lckVsKTtcbiAgICAgICAgICpcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMi4wLjBcbiAgICAgICAgICogQHBhcmFtICAge2Jvb2xlYW59ICAgW2NsZWFuVXA9ZmFsc2VdXG4gICAgICAgICAqICAgICBBbiBvcHRpb25hbCBib29sZWFuIGRpY3RhdGluZyB3aGV0aGVyIG9yIG5vdCB0byBjbGVhbiB1cCBhbnkgaW5saW5lIGBkaXNwbGF5OiBub25lO2Agc3R5bGluZyBhcHBsaWVkIHRvIGhpZGRlbiB0YXJnZXRzLlxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oY2xlYW5VcCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGNvbnRyb2wgPSBudWxsLFxuICAgICAgICAgICAgICAgIHRhcmdldCAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGkgICAgICAgPSAwO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVEZXN0cm95JywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgY29udHJvbCA9IHNlbGYuY29udHJvbHNbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnRyb2wucmVtb3ZlQmluZGluZyhzZWxmKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgdGFyZ2V0ID0gc2VsZi50YXJnZXRzW2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY2xlYW5VcCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2hvdygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRhcmdldC51bmJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlbGYuZG9tLmNvbnRhaW5lci5pZC5tYXRjaCgvXk1peEl0VXAvKSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZG9tLmNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSBtaXhpdHVwLmluc3RhbmNlc1tzZWxmLmlkXTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJEZXN0cm95JywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5JTW92ZURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgdGhpcy5wb3NJbiAgICAgICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMucG9zT3V0ICAgICAgICAgPSBudWxsO1xuICAgICAgICB0aGlzLm9wZXJhdGlvbiAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYWxsYmFjayAgICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlICAgPSAnJztcbiAgICAgICAgdGhpcy5kdXJhdGlvbiAgICAgICA9IC0xO1xuICAgICAgICB0aGlzLnN0YWdnZXJJbmRleCAgID0gLTE7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuSU1vdmVEYXRhKTtcblxuICAgIG1peGl0dXAuSU1vdmVEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLklNb3ZlRGF0YS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLklNb3ZlRGF0YTtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuVGFyZ2V0RG9tID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMuZWwgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLlRhcmdldERvbSk7XG5cbiAgICBtaXhpdHVwLlRhcmdldERvbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5UYXJnZXREb20ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbWl4aXR1cC5UYXJnZXREb207XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5UYXJnZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgdGhpcy5pZCAgICAgICAgID0gJyc7XG4gICAgICAgIHRoaXMuc29ydFN0cmluZyA9ICcnO1xuICAgICAgICB0aGlzLm1peGVyICAgICAgPSBudWxsO1xuICAgICAgICB0aGlzLmNhbGxiYWNrICAgPSBudWxsO1xuICAgICAgICB0aGlzLmlzU2hvd24gICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0JvdW5kICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNFeGNsdWRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzSW5Eb20gICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYW5kbGVyICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcGVyYXRpb24gID0gbnVsbDtcbiAgICAgICAgdGhpcy5kYXRhICAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5kb20gICAgICAgID0gbmV3IG1peGl0dXAuVGFyZ2V0RG9tKCk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuVGFyZ2V0KTtcblxuICAgIG1peGl0dXAuVGFyZ2V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBoLmV4dGVuZChtaXhpdHVwLlRhcmdldC5wcm90b3R5cGUsIHtcbiAgICAgICAgY29uc3RydWN0b3I6IG1peGl0dXAuVGFyZ2V0LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0aWFsaXNlcyBhIG5ld2x5IGluc3RhbnRpYXRlZCBUYXJnZXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7KEVsZW1lbnR8bnVsbCl9ICAgIGVsXG4gICAgICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgICAgICAgICAgbWl4ZXJcbiAgICAgICAgICogQHBhcmFtICAge29iamVjdH0gICAgICAgICAgICBbZGF0YV1cbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKGVsLCBtaXhlciwgZGF0YSkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGlkICAgPSAnJztcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlSW5pdCcsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHNlbGYubWl4ZXIgPSBtaXhlcjtcblxuICAgICAgICAgICAgaWYgKCFlbCkge1xuICAgICAgICAgICAgICAgIC8vIElmIG5vIGVsZW1lbnQgaXMgcHJvdmlkZWQsIHJlbmRlciBpdFxuXG4gICAgICAgICAgICAgICAgZWwgPSBzZWxmLnJlbmRlcihkYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5jYWNoZURvbShlbCk7XG5cbiAgICAgICAgICAgIHNlbGYuYmluZEV2ZW50cygpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5kb20uZWwuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5pc1Nob3duID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRhdGEgJiYgbWl4ZXIuY29uZmlnLmRhdGEudWlkS2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoaWQgPSBkYXRhW21peGVyLmNvbmZpZy5kYXRhLnVpZEtleV0pID09PSAndW5kZWZpbmVkJyB8fCBpZC50b1N0cmluZygpLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihtaXhpdHVwLm1lc3NhZ2VzLmVycm9yRGF0YXNldEludmFsaWRVaWRLZXkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdWlkS2V5OiBtaXhlci5jb25maWcuZGF0YS51aWRLZXlcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGYuaWQgICAgID0gaWQ7XG4gICAgICAgICAgICAgICAgc2VsZi5kYXRhICAgPSBkYXRhO1xuXG4gICAgICAgICAgICAgICAgbWl4ZXIuY2FjaGVbaWRdID0gc2VsZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJJbml0JywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVuZGVycyB0aGUgdGFyZ2V0IGVsZW1lbnQgdXNpbmcgYSB1c2VyLWRlZmluZWQgcmVuZGVyZXIgZnVuY3Rpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjEuNFxuICAgICAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSBkYXRhXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICByZW5kZXIgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBlbCAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICB0ZW1wICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBvdXRwdXQgID0gJyc7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZVJlbmRlcicsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHJlbmRlciA9IHNlbGYuY2FsbEZpbHRlcnMoJ3JlbmRlclJlbmRlcicsIHNlbGYubWl4ZXIuY29uZmlnLnJlbmRlci50YXJnZXQsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihtaXhpdHVwLm1lc3NhZ2VzLmVycm9yRGF0YXNldFJlbmRlcmVyTm90U2V0KCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvdXRwdXQgPSByZW5kZXIoZGF0YSk7XG5cbiAgICAgICAgICAgIGlmIChvdXRwdXQgJiYgdHlwZW9mIG91dHB1dCA9PT0gJ29iamVjdCcgJiYgaC5pc0VsZW1lbnQob3V0cHV0KSkge1xuICAgICAgICAgICAgICAgIGVsID0gb3V0cHV0O1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3V0cHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0ZW1wLmlubmVySFRNTCA9IG91dHB1dDtcblxuICAgICAgICAgICAgICAgIGVsID0gdGVtcC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuY2FsbEZpbHRlcnMoJ2VsUmVuZGVyJywgZWwsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhY2hlcyByZWZlcmVuY2VzIG9mIERPTSBlbGVtZW50cyBuZWNjZXNzYXJ5IGZvciB0aGUgdGFyZ2V0J3MgZnVuY3Rpb25hbGl0eS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtFbGVtZW50fSBlbFxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgY2FjaGVEb206IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUNhY2hlRG9tJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgc2VsZi5kb20uZWwgPSBlbDtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJDYWNoZURvbScsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICBhdHRyaWJ1dGVOYW1lXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBnZXRTb3J0U3RyaW5nOiBmdW5jdGlvbihhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgdmFsdWUgICA9IHNlbGYuZG9tLmVsLmdldEF0dHJpYnV0ZSgnZGF0YS0nICsgYXR0cmlidXRlTmFtZSkgfHwgJyc7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUdldFNvcnRTdHJpbmcnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICB2YWx1ZSA9IGlzTmFOKHZhbHVlICogMSkgP1xuICAgICAgICAgICAgICAgIHZhbHVlLnRvTG93ZXJDYXNlKCkgOlxuICAgICAgICAgICAgICAgIHZhbHVlICogMTtcblxuICAgICAgICAgICAgc2VsZi5zb3J0U3RyaW5nID0gdmFsdWU7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyR2V0U29ydFN0cmluZycsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgc2hvdzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZVNob3cnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBpZiAoIXNlbGYuaXNTaG93bikge1xuICAgICAgICAgICAgICAgIHNlbGYuZG9tLmVsLnN0eWxlLmRpc3BsYXkgPSAnJztcblxuICAgICAgICAgICAgICAgIHNlbGYuaXNTaG93biA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyU2hvdycsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgaGlkZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUhpZGUnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5pc1Nob3duKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kb20uZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgICAgIHNlbGYuaXNTaG93biA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlckhpZGUnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAge21peGl0dXAuSU1vdmVEYXRhfSBtb3ZlRGF0YVxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgbW92ZTogZnVuY3Rpb24obW92ZURhdGEpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlTW92ZScsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmICghc2VsZi5pc0V4Y2x1ZGVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5taXhlci50YXJnZXRzTW92ZWQrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5hcHBseVN0eWxlc0luKG1vdmVEYXRhKTtcblxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuYXBwbHlTdHlsZXNPdXQobW92ZURhdGEpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyTW92ZScsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgICBwb3NEYXRhXG4gICAgICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICAgIG11bHRpcGxpZXJcbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGFwcGx5VHdlZW46IGZ1bmN0aW9uKHBvc0RhdGEsIG11bHRpcGxpZXIpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lICAgICAgICAgICAgPSAnJyxcbiAgICAgICAgICAgICAgICB0d2VlbkRhdGEgICAgICAgICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgcG9zSW4gICAgICAgICAgICAgICAgICAgPSBwb3NEYXRhLnBvc0luLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRUcmFuc2Zvcm1WYWx1ZXMgID0gW10sXG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlcyAgICAgICAgICAgPSBuZXcgbWl4aXR1cC5TdHlsZURhdGEoKSxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICAgICAgICAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVBcHBseVR3ZWVuJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgY3VycmVudFZhbHVlcy54ICAgICA9IHBvc0luLng7XG4gICAgICAgICAgICBjdXJyZW50VmFsdWVzLnkgICAgID0gcG9zSW4ueTtcblxuICAgICAgICAgICAgaWYgKG11bHRpcGxpZXIgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzZWxmLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXNlbGYuaXNTaG93bikge1xuICAgICAgICAgICAgICAgIHNlbGYuc2hvdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBwcm9wZXJ0eU5hbWUgPSBtaXhpdHVwLmZlYXR1cmVzLlRXRUVOQUJMRVtpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdHdlZW5EYXRhID0gcG9zRGF0YS50d2VlbkRhdGFbcHJvcGVydHlOYW1lXTtcblxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eU5hbWUgPT09ICd4Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXR3ZWVuRGF0YSkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlcy54ID0gcG9zSW4ueCArICh0d2VlbkRhdGEgKiBtdWx0aXBsaWVyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnR5TmFtZSA9PT0gJ3knKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdHdlZW5EYXRhKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWVzLnkgPSBwb3NJbi55ICsgKHR3ZWVuRGF0YSAqIG11bHRpcGxpZXIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHdlZW5EYXRhIGluc3RhbmNlb2YgbWl4aXR1cC5UcmFuc2Zvcm1EYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdHdlZW5EYXRhLnZhbHVlKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWVzW3Byb3BlcnR5TmFtZV0udmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zSW5bcHJvcGVydHlOYW1lXS52YWx1ZSArICh0d2VlbkRhdGEudmFsdWUgKiBtdWx0aXBsaWVyKTtcblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWVzW3Byb3BlcnR5TmFtZV0udW5pdCAgPSB0d2VlbkRhdGEudW5pdDtcblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHJhbnNmb3JtVmFsdWVzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUgKyAnKCcgKyBjdXJyZW50VmFsdWVzW3Byb3BlcnR5TmFtZV0udmFsdWUgKyB0d2VlbkRhdGEudW5pdCArICcpJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdHdlZW5EYXRhKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWVzW3Byb3BlcnR5TmFtZV0gPSBwb3NJbltwcm9wZXJ0eU5hbWVdICsgKHR3ZWVuRGF0YSAqIG11bHRpcGxpZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZG9tLmVsLnN0eWxlW3Byb3BlcnR5TmFtZV0gPSBjdXJyZW50VmFsdWVzW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlcy54IHx8IGN1cnJlbnRWYWx1ZXMueSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUcmFuc2Zvcm1WYWx1ZXMudW5zaGlmdCgndHJhbnNsYXRlKCcgKyBjdXJyZW50VmFsdWVzLnggKyAncHgsICcgKyBjdXJyZW50VmFsdWVzLnkgKyAncHgpJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50VHJhbnNmb3JtVmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNlbGYuZG9tLmVsLnN0eWxlW21peGl0dXAuZmVhdHVyZXMudHJhbnNmb3JtUHJvcF0gPSBjdXJyZW50VHJhbnNmb3JtVmFsdWVzLmpvaW4oJyAnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJBcHBseVR3ZWVuJywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQXBwbGllcyB0aGUgaW5pdGlhbCBzdHlsaW5nIHRvIGEgdGFyZ2V0IGVsZW1lbnQgYmVmb3JlIGFueSB0cmFuc2l0aW9uXG4gICAgICAgICAqIGlzIGFwcGxpZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAcGFyYW0gICB7bWl4aXR1cC5JTW92ZURhdGF9IG1vdmVEYXRhXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBhcHBseVN0eWxlc0luOiBmdW5jdGlvbihtb3ZlRGF0YSkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgcG9zSW4gICAgICAgICAgID0gbW92ZURhdGEucG9zSW4sXG4gICAgICAgICAgICAgICAgaXNGYWRpbmcgICAgICAgID0gc2VsZi5taXhlci5lZmZlY3RzSW4ub3BhY2l0eSAhPT0gMSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1WYWx1ZXMgPSBbXTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlQXBwbHlTdHlsZXNJbicsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHRyYW5zZm9ybVZhbHVlcy5wdXNoKCd0cmFuc2xhdGUoJyArIHBvc0luLnggKyAncHgsICcgKyBwb3NJbi55ICsgJ3B4KScpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5taXhlci5jb25maWcuYW5pbWF0aW9uLmFuaW1hdGVSZXNpemVUYXJnZXRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1vdmVEYXRhLnN0YXR1c0NoYW5nZSAhPT0gJ3Nob3cnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERvbid0IGFwcGx5IHBvc0luIHdpZHRoIG9yIGhlaWdodCBvciBzaG93aW5nLCBhcyB3aWxsIGJlIDBcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRvbS5lbC5zdHlsZS53aWR0aCAgPSBwb3NJbi53aWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZG9tLmVsLnN0eWxlLmhlaWdodCA9IHBvc0luLmhlaWdodCArICdweCc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZi5kb20uZWwuc3R5bGUubWFyZ2luUmlnaHQgID0gcG9zSW4ubWFyZ2luUmlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgIHNlbGYuZG9tLmVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IHBvc0luLm1hcmdpbkJvdHRvbSArICdweCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlzRmFkaW5nICYmIChzZWxmLmRvbS5lbC5zdHlsZS5vcGFjaXR5ID0gcG9zSW4ub3BhY2l0eSk7XG5cbiAgICAgICAgICAgIGlmIChtb3ZlRGF0YS5zdGF0dXNDaGFuZ2UgPT09ICdzaG93Jykge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVZhbHVlcyA9IHRyYW5zZm9ybVZhbHVlcy5jb25jYXQoc2VsZi5taXhlci50cmFuc2Zvcm1Jbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuZG9tLmVsLnN0eWxlW21peGl0dXAuZmVhdHVyZXMudHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm1WYWx1ZXMuam9pbignICcpO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlckFwcGx5U3R5bGVzSW4nLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcHBsaWVzIGEgdHJhbnNpdGlvbiBmb2xsb3dlZCBieSB0aGUgZmluYWwgc3R5bGVzIGZvciB0aGUgZWxlbWVudCB0b1xuICAgICAgICAgKiB0cmFuc2l0aW9uIHRvd2FyZHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAcGFyYW0gICB7bWl4aXR1cC5JTW92ZURhdGF9IG1vdmVEYXRhXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBhcHBseVN0eWxlc091dDogZnVuY3Rpb24obW92ZURhdGEpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25SdWxlcyA9IFtdLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVZhbHVlcyA9IFtdLFxuICAgICAgICAgICAgICAgIGlzUmVzaXppbmcgICAgICA9IHNlbGYubWl4ZXIuY29uZmlnLmFuaW1hdGlvbi5hbmltYXRlUmVzaXplVGFyZ2V0cyxcbiAgICAgICAgICAgICAgICBpc0ZhZGluZyAgICAgICAgPSB0eXBlb2Ygc2VsZi5taXhlci5lZmZlY3RzSW4ub3BhY2l0eSAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUFwcGx5U3R5bGVzT3V0JywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgLy8gQnVpbGQgdGhlIHRyYW5zaXRpb24gcnVsZXNcblxuICAgICAgICAgICAgdHJhbnNpdGlvblJ1bGVzLnB1c2goc2VsZi53cml0ZVRyYW5zaXRpb25SdWxlKFxuICAgICAgICAgICAgICAgIG1peGl0dXAuZmVhdHVyZXMudHJhbnNmb3JtUnVsZSxcbiAgICAgICAgICAgICAgICBtb3ZlRGF0YS5zdGFnZ2VySW5kZXhcbiAgICAgICAgICAgICkpO1xuXG4gICAgICAgICAgICBpZiAobW92ZURhdGEuc3RhdHVzQ2hhbmdlICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uUnVsZXMucHVzaChzZWxmLndyaXRlVHJhbnNpdGlvblJ1bGUoXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgbW92ZURhdGEuc3RhZ2dlckluZGV4LFxuICAgICAgICAgICAgICAgICAgICBtb3ZlRGF0YS5kdXJhdGlvblxuICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNSZXNpemluZykge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25SdWxlcy5wdXNoKHNlbGYud3JpdGVUcmFuc2l0aW9uUnVsZShcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJyxcbiAgICAgICAgICAgICAgICAgICAgbW92ZURhdGEuc3RhZ2dlckluZGV4LFxuICAgICAgICAgICAgICAgICAgICBtb3ZlRGF0YS5kdXJhdGlvblxuICAgICAgICAgICAgICAgICkpO1xuXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvblJ1bGVzLnB1c2goc2VsZi53cml0ZVRyYW5zaXRpb25SdWxlKFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgbW92ZURhdGEuc3RhZ2dlckluZGV4LFxuICAgICAgICAgICAgICAgICAgICBtb3ZlRGF0YS5kdXJhdGlvblxuICAgICAgICAgICAgICAgICkpO1xuXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvblJ1bGVzLnB1c2goc2VsZi53cml0ZVRyYW5zaXRpb25SdWxlKFxuICAgICAgICAgICAgICAgICAgICAnbWFyZ2luJyxcbiAgICAgICAgICAgICAgICAgICAgbW92ZURhdGEuc3RhZ2dlckluZGV4LFxuICAgICAgICAgICAgICAgICAgICBtb3ZlRGF0YS5kdXJhdGlvblxuICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBubyBjYWxsYmFjayB3YXMgcHJvdmlkZWQsIHRoZSBlbGVtZW50IHdpbGxcbiAgICAgICAgICAgIC8vIG5vdCB0cmFuc2l0aW9uIGluIGFueSB3YXkgc28gdGFnIGl0IGFzIFwiaW1tb3ZhYmxlXCJcblxuICAgICAgICAgICAgaWYgKCFtb3ZlRGF0YS5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNlbGYubWl4ZXIudGFyZ2V0c0ltbW92YWJsZSsrO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubWl4ZXIudGFyZ2V0c01vdmVkID09PSBzZWxmLm1peGVyLnRhcmdldHNJbW1vdmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRvdGFsIHRhcmdldHMgbW92ZWQgaXMgZXF1YWwgdG8gdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIG51bWJlciBvZiBpbW1vdmFibGUgdGFyZ2V0cywgdGhlIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAvLyBzaG91bGQgYmUgY29uc2lkZXJlZCBmaW5pc2hlZFxuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubWl4ZXIuY2xlYW5VcChtb3ZlRGF0YS5vcGVyYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhlIHRhcmdldCB3aWxsIHRyYW5zaXRpb24gaW4gc29tZSBmYXNpb24sXG4gICAgICAgICAgICAvLyBhc3NpZ24gYSBjYWxsYmFjayBmdW5jdGlvblxuXG4gICAgICAgICAgICBzZWxmLm9wZXJhdGlvbiA9IG1vdmVEYXRhLm9wZXJhdGlvbjtcbiAgICAgICAgICAgIHNlbGYuY2FsbGJhY2sgPSBtb3ZlRGF0YS5jYWxsYmFjaztcblxuICAgICAgICAgICAgLy8gQXMgbG9uZyBhcyB0aGUgdGFyZ2V0IGlzIG5vdCBleGNsdWRlZCwgaW5jcmVtZW50XG4gICAgICAgICAgICAvLyB0aGUgdG90YWwgbnVtYmVyIG9mIHRhcmdldHMgYm91bmRcblxuICAgICAgICAgICAgIXNlbGYuaXNFeGNsdWRlZCAmJiBzZWxmLm1peGVyLnRhcmdldHNCb3VuZCsrO1xuXG4gICAgICAgICAgICAvLyBUYWcgdGhlIHRhcmdldCBhcyBib3VuZCB0byBkaWZmZXJlbnRpYXRlIGZyb20gdHJhbnNpdGlvbkVuZFxuICAgICAgICAgICAgLy8gZXZlbnRzIHRoYXQgbWF5IGNvbWUgZnJvbSBzdHlsZXNoZWV0IGRyaXZlbiBlZmZlY3RzXG5cbiAgICAgICAgICAgIHNlbGYuaXNCb3VuZCA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IHRoZSB0cmFuc2l0aW9uXG5cbiAgICAgICAgICAgIHNlbGYuYXBwbHlUcmFuc2l0aW9uKHRyYW5zaXRpb25SdWxlcyk7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IHdpZHRoLCBoZWlnaHQgYW5kIG1hcmdpbiBuZWdhdGlvblxuXG4gICAgICAgICAgICBpZiAoaXNSZXNpemluZyAmJiBtb3ZlRGF0YS5wb3NPdXQud2lkdGggPiAwICYmIG1vdmVEYXRhLnBvc091dC5oZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kb20uZWwuc3R5bGUud2lkdGggICAgICAgID0gbW92ZURhdGEucG9zT3V0LndpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5lbC5zdHlsZS5oZWlnaHQgICAgICAgPSBtb3ZlRGF0YS5wb3NPdXQuaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5lbC5zdHlsZS5tYXJnaW5SaWdodCAgPSBtb3ZlRGF0YS5wb3NPdXQubWFyZ2luUmlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgIHNlbGYuZG9tLmVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IG1vdmVEYXRhLnBvc091dC5tYXJnaW5Cb3R0b20gKyAncHgnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXNlbGYubWl4ZXIuY29uZmlnLmFuaW1hdGlvbi5udWRnZSAmJiBtb3ZlRGF0YS5zdGF0dXNDaGFuZ2UgPT09ICdoaWRlJykge1xuICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIG5vdCBudWRnaW5nLCB0aGUgdHJhbnNsYXRpb24gc2hvdWxkIGJlXG4gICAgICAgICAgICAgICAgLy8gYXBwbGllZCBiZWZvcmUgYW55IG90aGVyIHRyYW5zZm9ybXMgdG8gcHJldmVudFxuICAgICAgICAgICAgICAgIC8vIGxhdGVyYWwgbW92ZW1lbnRcblxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVZhbHVlcy5wdXNoKCd0cmFuc2xhdGUoJyArIG1vdmVEYXRhLnBvc091dC54ICsgJ3B4LCAnICsgbW92ZURhdGEucG9zT3V0LnkgKyAncHgpJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGZhZGVcblxuICAgICAgICAgICAgc3dpdGNoIChtb3ZlRGF0YS5zdGF0dXNDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdoaWRlJzpcbiAgICAgICAgICAgICAgICAgICAgaXNGYWRpbmcgJiYgKHNlbGYuZG9tLmVsLnN0eWxlLm9wYWNpdHkgPSBzZWxmLm1peGVyLmVmZmVjdHNPdXQub3BhY2l0eSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtVmFsdWVzID0gdHJhbnNmb3JtVmFsdWVzLmNvbmNhdChzZWxmLm1peGVyLnRyYW5zZm9ybU91dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgICAgICAgICAgICAgIGlzRmFkaW5nICYmIChzZWxmLmRvbS5lbC5zdHlsZS5vcGFjaXR5ID0gMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBzZWxmLm1peGVyLmNvbmZpZy5hbmltYXRpb24ubnVkZ2UgfHxcbiAgICAgICAgICAgICAgICAoIXNlbGYubWl4ZXIuY29uZmlnLmFuaW1hdGlvbi5udWRnZSAmJiBtb3ZlRGF0YS5zdGF0dXNDaGFuZ2UgIT09ICdoaWRlJylcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vIE9wcG9zaXRlIG9mIGFib3ZlIC0gYXBwbHkgdHJhbnNsYXRlIGFmdGVyXG4gICAgICAgICAgICAgICAgLy8gb3RoZXIgdHJhbnNmb3JtXG5cbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1WYWx1ZXMucHVzaCgndHJhbnNsYXRlKCcgKyBtb3ZlRGF0YS5wb3NPdXQueCArICdweCwgJyArIG1vdmVEYXRhLnBvc091dC55ICsgJ3B4KScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBseSB0cmFuc2Zvcm1zXG5cbiAgICAgICAgICAgIHNlbGYuZG9tLmVsLnN0eWxlW21peGl0dXAuZmVhdHVyZXMudHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm1WYWx1ZXMuam9pbignICcpO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlckFwcGx5U3R5bGVzT3V0JywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29tYmluZXMgdGhlIG5hbWUgb2YgYSBDU1MgcHJvcGVydHkgd2l0aCB0aGUgYXBwcm9wcmlhdGUgZHVyYXRpb24gYW5kIGRlbGF5XG4gICAgICAgICAqIHZhbHVlcyB0byBjcmVhdGVkIGEgdmFsaWQgdHJhbnNpdGlvbiBydWxlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAge3N0cmluZ30gICAgcHJvcGVydHlcbiAgICAgICAgICogQHBhcmFtICAge251bWJlcn0gICAgc3RhZ2dlckluZGV4XG4gICAgICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICAgIGR1cmF0aW9uXG4gICAgICAgICAqIEByZXR1cm4gIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHdyaXRlVHJhbnNpdGlvblJ1bGU6IGZ1bmN0aW9uKHByb3BlcnR5LCBzdGFnZ2VySW5kZXgsIGR1cmF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGRlbGF5ID0gc2VsZi5nZXREZWxheShzdGFnZ2VySW5kZXgpLFxuICAgICAgICAgICAgICAgIHJ1bGUgID0gJyc7XG5cbiAgICAgICAgICAgIHJ1bGUgPSBwcm9wZXJ0eSArICcgJyArXG4gICAgICAgICAgICAgICAgKGR1cmF0aW9uID4gMCA/IGR1cmF0aW9uIDogc2VsZi5taXhlci5jb25maWcuYW5pbWF0aW9uLmR1cmF0aW9uKSArICdtcyAnICtcbiAgICAgICAgICAgICAgICBkZWxheSArICdtcyAnICtcbiAgICAgICAgICAgICAgICAocHJvcGVydHkgPT09ICdvcGFjaXR5JyA/ICdsaW5lYXInIDogc2VsZi5taXhlci5jb25maWcuYW5pbWF0aW9uLmVhc2luZyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNhbGxGaWx0ZXJzKCdydWxlV3JpdGVUcmFuc2l0aW9uUnVsZScsIHJ1bGUsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGN1bGF0ZXMgdGhlIHRyYW5zaXRpb24gZGVsYXkgZm9yIGVhY2ggdGFyZ2V0IGVsZW1lbnQgYmFzZWQgb24gaXRzIGluZGV4LCBpZlxuICAgICAgICAgKiBzdGFnZ2VyaW5nIGlzIGFwcGxpZWQuIElmIGRlZmluZWQsIEEgY3VzdG9tIGBhbmltYXRpb24uc3RhZ2dlclNlcWV1ZW5jZWBcbiAgICAgICAgICogZnVuY3Rpb24gY2FuIGJlIHVzZWQgdG8gbWFuaXB1bGF0ZSB0aGUgb3JkZXIgb2YgaW5kaWNlcyB0byBwcm9kdWNlIGN1c3RvbVxuICAgICAgICAgKiBzdGFnZ2VyIGVmZmVjdHMgKGUuZy4gZm9yIHVzZSBpbiBhIGdyaWQgd2l0aCBpcnJlZ3VsYXIgcm93IGxlbmd0aHMpLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMi4wLjBcbiAgICAgICAgICogQHBhcmFtICAge251bWJlcn0gICAgaW5kZXhcbiAgICAgICAgICogQHJldHVybiAge251bWJlcn1cbiAgICAgICAgICovXG5cbiAgICAgICAgZ2V0RGVsYXk6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgZGVsYXkgICA9IC0xO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNlbGYubWl4ZXIuY29uZmlnLmFuaW1hdGlvbi5zdGFnZ2VyU2VxdWVuY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IHNlbGYubWl4ZXIuY29uZmlnLmFuaW1hdGlvbi5zdGFnZ2VyU2VxdWVuY2UuY2FsbChzZWxmLCBpbmRleCwgc2VsZi5zdGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGF5ID0gISFzZWxmLm1peGVyLnN0YWdnZXJEdXJhdGlvbiA/IGluZGV4ICogc2VsZi5taXhlci5zdGFnZ2VyRHVyYXRpb24gOiAwO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jYWxsRmlsdGVycygnZGVsYXlHZXREZWxheScsIGRlbGF5LCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAge3N0cmluZ1tdfSAgcnVsZXNcbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGFwcGx5VHJhbnNpdGlvbjogZnVuY3Rpb24ocnVsZXMpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uU3RyaW5nICAgID0gcnVsZXMuam9pbignLCAnKTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlQXBwbHlUcmFuc2l0aW9uJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgc2VsZi5kb20uZWwuc3R5bGVbbWl4aXR1cC5mZWF0dXJlcy50cmFuc2l0aW9uUHJvcF0gPSB0cmFuc2l0aW9uU3RyaW5nO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlckFwcGx5VHJhbnNpdGlvbicsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7RXZlbnR9IGVcbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGhhbmRsZVRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgcHJvcE5hbWUgICAgPSBlLnByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICBjYW5SZXNpemUgICA9IHNlbGYubWl4ZXIuY29uZmlnLmFuaW1hdGlvbi5hbmltYXRlUmVzaXplVGFyZ2V0cztcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlSGFuZGxlVHJhbnNpdGlvbkVuZCcsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBzZWxmLmlzQm91bmQgJiZcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5tYXRjaGVzKHNlbGYubWl4ZXIuY29uZmlnLnNlbGVjdG9ycy50YXJnZXQpICYmXG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICBwcm9wTmFtZS5pbmRleE9mKCd0cmFuc2Zvcm0nKSA+IC0xIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3BOYW1lLmluZGV4T2YoJ29wYWNpdHknKSA+IC0xIHx8XG4gICAgICAgICAgICAgICAgICAgIGNhblJlc2l6ZSAmJiBwcm9wTmFtZS5pbmRleE9mKCdoZWlnaHQnKSA+IC0xIHx8XG4gICAgICAgICAgICAgICAgICAgIGNhblJlc2l6ZSAmJiBwcm9wTmFtZS5pbmRleE9mKCd3aWR0aCcpID4gLTEgfHxcbiAgICAgICAgICAgICAgICAgICAgY2FuUmVzaXplICYmIHByb3BOYW1lLmluZGV4T2YoJ21hcmdpbicpID4gLTFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNhbGxiYWNrLmNhbGwoc2VsZiwgc2VsZi5vcGVyYXRpb24pO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5pc0JvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2VsZi5jYWxsYmFjayA9IG51bGw7XG4gICAgICAgICAgICAgICAgc2VsZi5vcGVyYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlckhhbmRsZVRyYW5zaXRpb25FbmQnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAge0V2ZW50fSAgICAgZVxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgZXZlbnRCdXM6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlRXZlbnRCdXMnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3dlYmtpdFRyYW5zaXRpb25FbmQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3RyYW5zaXRpb25lbmQnOlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmhhbmRsZVRyYW5zaXRpb25FbmQoZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyRXZlbnRCdXMnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHVuYmluZEV2ZW50czogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZVVuYmluZEV2ZW50cycsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGgub2ZmKHNlbGYuZG9tLmVsLCAnd2Via2l0VHJhbnNpdGlvbkVuZCcsIHNlbGYuaGFuZGxlcik7XG4gICAgICAgICAgICBoLm9mZihzZWxmLmRvbS5lbCwgJ3RyYW5zaXRpb25lbmQnLCBzZWxmLmhhbmRsZXIpO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlclVuYmluZEV2ZW50cycsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgYmluZEV2ZW50czogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVuZEV2ZW50ICA9ICcnO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVCaW5kRXZlbnRzJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgdHJhbnNpdGlvbkVuZEV2ZW50ID0gbWl4aXR1cC5mZWF0dXJlcy50cmFuc2l0aW9uUHJlZml4ID09PSAnd2Via2l0JyA/ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyA6ICd0cmFuc2l0aW9uZW5kJztcblxuICAgICAgICAgICAgc2VsZi5oYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmV2ZW50QnVzKGUpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaC5vbihzZWxmLmRvbS5lbCwgdHJhbnNpdGlvbkVuZEV2ZW50LCBzZWxmLmhhbmRsZXIpO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlckJpbmRFdmVudHMnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAge2Jvb2xlYW59ICAgW2dldEJveF1cbiAgICAgICAgICogQHJldHVybiAge1Bvc0RhdGF9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGdldFBvc0RhdGE6IGZ1bmN0aW9uKGdldEJveCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHN0eWxlcyAgPSB7fSxcbiAgICAgICAgICAgICAgICByZWN0ICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBwb3NEYXRhID0gbmV3IG1peGl0dXAuU3R5bGVEYXRhKCk7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUdldFBvc0RhdGEnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBwb3NEYXRhLnggPSBzZWxmLmRvbS5lbC5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgcG9zRGF0YS55ID0gc2VsZi5kb20uZWwub2Zmc2V0VG9wO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5taXhlci5jb25maWcuYW5pbWF0aW9uLmFuaW1hdGVSZXNpemVUYXJnZXRzIHx8IGdldEJveCkge1xuICAgICAgICAgICAgICAgIHJlY3QgPSBzZWxmLmRvbS5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgICAgIHBvc0RhdGEudG9wICAgICA9IHJlY3QudG9wO1xuICAgICAgICAgICAgICAgIHBvc0RhdGEucmlnaHQgICA9IHJlY3QucmlnaHQ7XG4gICAgICAgICAgICAgICAgcG9zRGF0YS5ib3R0b20gID0gcmVjdC5ib3R0b207XG4gICAgICAgICAgICAgICAgcG9zRGF0YS5sZWZ0ICAgID0gcmVjdC5sZWZ0O1xuXG4gICAgICAgICAgICAgICAgcG9zRGF0YS53aWR0aCAgPSByZWN0LndpZHRoO1xuICAgICAgICAgICAgICAgIHBvc0RhdGEuaGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxmLm1peGVyLmNvbmZpZy5hbmltYXRpb24uYW5pbWF0ZVJlc2l6ZVRhcmdldHMpIHtcbiAgICAgICAgICAgICAgICBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzZWxmLmRvbS5lbCk7XG5cbiAgICAgICAgICAgICAgICBwb3NEYXRhLm1hcmdpbkJvdHRvbSA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkJvdHRvbSk7XG4gICAgICAgICAgICAgICAgcG9zRGF0YS5tYXJnaW5SaWdodCAgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5SaWdodCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNhbGxGaWx0ZXJzKCdwb3NEYXRhR2V0UG9zRGF0YScsIHBvc0RhdGEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgICAgICogQHJldHVybiAgICAgIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBjbGVhblVwOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlQ2xlYW5VcCcsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHNlbGYuZG9tLmVsLnN0eWxlW21peGl0dXAuZmVhdHVyZXMudHJhbnNmb3JtUHJvcF0gID0gJyc7XG4gICAgICAgICAgICBzZWxmLmRvbS5lbC5zdHlsZVttaXhpdHVwLmZlYXR1cmVzLnRyYW5zaXRpb25Qcm9wXSA9ICcnO1xuICAgICAgICAgICAgc2VsZi5kb20uZWwuc3R5bGUub3BhY2l0eSAgICAgICAgICAgICAgICAgICAgICAgICAgPSAnJztcblxuICAgICAgICAgICAgaWYgKHNlbGYubWl4ZXIuY29uZmlnLmFuaW1hdGlvbi5hbmltYXRlUmVzaXplVGFyZ2V0cykge1xuICAgICAgICAgICAgICAgIHNlbGYuZG9tLmVsLnN0eWxlLndpZHRoICAgICAgICA9ICcnO1xuICAgICAgICAgICAgICAgIHNlbGYuZG9tLmVsLnN0eWxlLmhlaWdodCAgICAgICA9ICcnO1xuICAgICAgICAgICAgICAgIHNlbGYuZG9tLmVsLnN0eWxlLm1hcmdpblJpZ2h0ICA9ICcnO1xuICAgICAgICAgICAgICAgIHNlbGYuZG9tLmVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlckNsZWFuVXAnLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBBIGpRdWVyeS1jb2xsZWN0aW9uLWxpa2Ugd3JhcHBlciBhcm91bmQgb25lIG9yIG1vcmUgYG1peGl0dXAuTWl4ZXJgIGluc3RhbmNlc1xuICAgICAqIGFsbG93aW5nIHNpbXVsdGFuZW91cyBjb250cm9sIG9mIHNhaWQgaW5zdGFuY2VzIHNpbWlsYXIgdG8gdGhlIE1peEl0VXAgMiBBUEkuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIG5ldyBtaXhpdHVwLkNvbGxlY3Rpb24oaW5zdGFuY2VzKVxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKiBAcGFyYW0gICAgICAge21peGl0dXAuTWl4ZXJbXX0gICBpbnN0YW5jZXNcbiAgICAgKi9cblxuICAgIG1peGl0dXAuQ29sbGVjdGlvbiA9IGZ1bmN0aW9uKGluc3RhbmNlcykge1xuICAgICAgICB2YXIgaW5zdGFuY2UgICAgPSBudWxsLFxuICAgICAgICAgICAgaSAgICAgICAgICAgPSAtMTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVDb25zdHJ1Y3QnKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpbnN0YW5jZSA9IGluc3RhbmNlc1tpXTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzW2ldID0gaW5zdGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxlbmd0aCA9IGluc3RhbmNlcy5sZW5ndGg7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLmZyZWV6ZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5Db2xsZWN0aW9uKTtcblxuICAgIG1peGl0dXAuQ29sbGVjdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgaC5leHRlbmQobWl4aXR1cC5Db2xsZWN0aW9uLnByb3RvdHlwZSxcbiAgICAvKiogQGxlbmRzIG1peGl0dXAuQ29sbGVjdGlvbiAqL1xuICAgIHtcbiAgICAgICAgY29uc3RydWN0b3I6IG1peGl0dXAuQ29sbGVjdGlvbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbHMgYSBtZXRob2Qgb24gYWxsIGluc3RhbmNlcyBpbiB0aGUgY29sbGVjdGlvbiBieSBwYXNzaW5nIHRoZSBtZXRob2RcbiAgICAgICAgICogbmFtZSBhcyBhIHN0cmluZyBmb2xsb3dlZCBieSBhbnkgYXBwbGljYWJsZSBwYXJhbWV0ZXJzIHRvIGJlIGN1cnJpZWQgaW50b1xuICAgICAgICAgKiB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAubWl4aXR1cChtZXRob2ROYW1lWyxhcmcxXVssYXJnMi4uXSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIHZhciBjb2xsZWN0aW9uID0gbmV3IENvbGxlY3Rpb24oW21peGVyMSwgbWl4ZXIyXSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIHJldHVybiBjb2xsZWN0aW9uLm1peGl0dXAoJ2ZpbHRlcicsICcuY2F0ZWdvcnktYScpXG4gICAgICAgICAqICAgICAudGhlbihmdW5jdGlvbihzdGF0ZXMpIHtcbiAgICAgICAgICogICAgICAgICBzdGF0ZS5mb3JFYWNoKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmFjdGl2ZUZpbHRlci5zZWxlY3Rvcik7IC8vIC5jYXRlZ29yeS1hXG4gICAgICAgICAqICAgICAgICAgfSk7XG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7c3RyaW5nfSAgbWV0aG9kTmFtZVxuICAgICAgICAgKiBAcmV0dXJuICAgICAge1Byb21pc2U8QXJyYXk8bWl4aXR1cC5TdGF0ZT4+fVxuICAgICAgICAgKi9cblxuICAgICAgICBtaXhpdHVwOiBmdW5jdGlvbihtZXRob2ROYW1lKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGluc3RhbmNlICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBhcmdzICAgICAgICA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksXG4gICAgICAgICAgICAgICAgdGFza3MgICAgICAgPSBbXSxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVNaXhpdHVwJyk7XG5cbiAgICAgICAgICAgIGFyZ3Muc2hpZnQoKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaW5zdGFuY2UgPSBzZWxmW2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0YXNrcy5wdXNoKGluc3RhbmNlW21ldGhvZE5hbWVdLmFwcGx5KGluc3RhbmNlLCBhcmdzKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNhbGxGaWx0ZXJzKCdwcm9taXNlTWl4aXR1cCcsIGguYWxsKHRhc2tzLCBtaXhpdHVwLmxpYnJhcmllcyksIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIGBtaXhpdHVwLk9wZXJhdGlvbmAgb2JqZWN0cyBjb250YWluIGFsbCBkYXRhIG5lY2Nlc3NhcnkgdG8gZGVzY3JpYmUgdGhlIGZ1bGxcbiAgICAgKiBsaWZlY3ljbGUgb2YgYW55IE1peEl0VXAgb3BlcmF0aW9uLiBUaGV5IGNhbiBiZSB1c2VkIHRvIGNvbXB1dGUgYW5kIHN0b3JlIGFuXG4gICAgICogb3BlcmF0aW9uIGZvciB1c2UgYXQgYSBsYXRlciB0aW1lIChlLmcuIHByb2dyYW1tYXRpYyB0d2VlbmluZykuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5PcGVyYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgdGhpcy5pZCAgICAgICAgICAgICAgICAgICAgICA9ICcnO1xuXG4gICAgICAgIHRoaXMuYXJncyAgICAgICAgICAgICAgICAgICAgPSBbXTtcbiAgICAgICAgdGhpcy5jb21tYW5kICAgICAgICAgICAgICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMuc2hvd1Bvc0RhdGEgICAgICAgICAgICAgPSBbXTtcbiAgICAgICAgdGhpcy50b0hpZGVQb3NEYXRhICAgICAgICAgICA9IFtdO1xuXG4gICAgICAgIHRoaXMuc3RhcnRTdGF0ZSAgICAgICAgICAgICAgPSBudWxsO1xuICAgICAgICB0aGlzLm5ld1N0YXRlICAgICAgICAgICAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5kb2NTdGF0ZSAgICAgICAgICAgICAgICA9IG51bGw7XG5cbiAgICAgICAgdGhpcy53aWxsU29ydCAgICAgICAgICAgICAgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLndpbGxDaGFuZ2VMYXlvdXQgICAgICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzRWZmZWN0ICAgICAgICAgICAgICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYXNGYWlsZWQgICAgICAgICAgICAgICA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudHJpZ2dlckVsZW1lbnQgICAgICAgICAgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuc2hvdyAgICAgICAgICAgICAgICAgICAgPSBbXTtcbiAgICAgICAgdGhpcy5oaWRlICAgICAgICAgICAgICAgICAgICA9IFtdO1xuICAgICAgICB0aGlzLm1hdGNoaW5nICAgICAgICAgICAgICAgID0gW107XG4gICAgICAgIHRoaXMudG9TaG93ICAgICAgICAgICAgICAgICAgPSBbXTtcbiAgICAgICAgdGhpcy50b0hpZGUgICAgICAgICAgICAgICAgICA9IFtdO1xuICAgICAgICB0aGlzLnRvTW92ZSAgICAgICAgICAgICAgICAgID0gW107XG4gICAgICAgIHRoaXMudG9SZW1vdmUgICAgICAgICAgICAgICAgPSBbXTtcbiAgICAgICAgdGhpcy5zdGFydE9yZGVyICAgICAgICAgICAgICA9IFtdO1xuICAgICAgICB0aGlzLm5ld09yZGVyICAgICAgICAgICAgICAgID0gW107XG4gICAgICAgIHRoaXMuc3RhcnRTb3J0ICAgICAgICAgICAgICAgPSBudWxsO1xuICAgICAgICB0aGlzLm5ld1NvcnQgICAgICAgICAgICAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGFydEZpbHRlciAgICAgICAgICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMubmV3RmlsdGVyICAgICAgICAgICAgICAgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXJ0RGF0YXNldCAgICAgICAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5uZXdEYXRhc2V0ICAgICAgICAgICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMudmlld3BvcnREZWx0YVggICAgICAgICAgPSAwO1xuICAgICAgICB0aGlzLnZpZXdwb3J0RGVsdGFZICAgICAgICAgID0gMDtcbiAgICAgICAgdGhpcy5zdGFydFggICAgICAgICAgICAgICAgICA9IDA7XG4gICAgICAgIHRoaXMuc3RhcnRZICAgICAgICAgICAgICAgICAgPSAwO1xuICAgICAgICB0aGlzLnN0YXJ0SGVpZ2h0ICAgICAgICAgICAgID0gMDtcbiAgICAgICAgdGhpcy5zdGFydFdpZHRoICAgICAgICAgICAgICA9IDA7XG4gICAgICAgIHRoaXMubmV3WCAgICAgICAgICAgICAgICAgICAgPSAwO1xuICAgICAgICB0aGlzLm5ld1kgICAgICAgICAgICAgICAgICAgID0gMDtcbiAgICAgICAgdGhpcy5uZXdIZWlnaHQgICAgICAgICAgICAgICA9IDA7XG4gICAgICAgIHRoaXMubmV3V2lkdGggICAgICAgICAgICAgICAgPSAwO1xuICAgICAgICB0aGlzLnN0YXJ0Q29udGFpbmVyQ2xhc3NOYW1lID0gJyc7XG4gICAgICAgIHRoaXMuc3RhcnREaXNwbGF5ICAgICAgICAgICAgPSAnJztcbiAgICAgICAgdGhpcy5uZXdDb250YWluZXJDbGFzc05hbWUgICA9ICcnO1xuICAgICAgICB0aGlzLm5ld0Rpc3BsYXkgICAgICAgICAgICAgID0gJyc7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuT3BlcmF0aW9uKTtcblxuICAgIG1peGl0dXAuT3BlcmF0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLk9wZXJhdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLk9wZXJhdGlvbjtcblxuICAgIC8qKlxuICAgICAqIGBtaXhpdHVwLlN0YXRlYCBvYmplY3RzIGV4cG9zZSB2YXJpb3VzIHBpZWNlcyBvZiBkYXRhIGRldGFpbGluZyB0aGUgc3RhdGUgb2ZcbiAgICAgKiBhIE1peEl0VXAgaW5zdGFuY2UuIFRoZXkgYXJlIHByb3ZpZGVkIGF0IHRoZSBzdGFydCBhbmQgZW5kIG9mIGFueSBvcGVyYXRpb24gdmlhXG4gICAgICogY2FsbGJhY2tzIGFuZCBldmVudHMsIHdpdGggdGhlIG1vc3QgcmVjZW50IHN0YXRlIHN0b3JlZCBiZXR3ZWVuIG9wZXJhdGlvbnNcbiAgICAgKiBmb3IgcmV0cmlldmFsIGF0IGFueSB0aW1lIHZpYSB0aGUgQVBJLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5TdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtaXhpdHVwLkJhc2UuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVDb25zdHJ1Y3QnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIElEIG9mIHRoZSBtaXhlciBpbnN0YW5jZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGlkXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLlN0YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge3N0cmluZ31cbiAgICAgICAgICogQGRlZmF1bHQgICAgICcnXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuaWQgPSAnJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGN1cnJlbnRseSBhY3RpdmUgZmlsdGVyIGNvbW1hbmQgYXMgc2V0IGJ5IGEgY29udHJvbCBjbGljayBvciBBUEkgY2FsbC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGFjdGl2ZUZpbHRlclxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5TdGF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHttaXhpdHVwLkNvbW1hbmRGaWx0ZXJ9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICBudWxsXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuYWN0aXZlRmlsdGVyID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGN1cnJlbnRseSBhY3RpdmUgc29ydCBjb21tYW5kIGFzIHNldCBieSBhIGNvbnRyb2wgY2xpY2sgb3IgQVBJIGNhbGwuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBhY3RpdmVTb3J0XG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLlN0YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge21peGl0dXAuQ29tbWFuZFNvcnR9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICBudWxsXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuYWN0aXZlU29ydCA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjdXJyZW50IGxheW91dC1zcGVjaWZpYyBjb250YWluZXIgY2xhc3MgbmFtZSwgaWYgYXBwbGllZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGFjdGl2ZUNvbnRhaW5lckNsYXNzTmFtZVxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5TdGF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnJ1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmFjdGl2ZUNvbnRhaW5lckNsYXNzTmFtZSA9ICcnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY29udGFpbmVyIGVsZW1lbnQgdGhhdCB0aGUgbWl4ZXIgaXMgaW5zdGFudGlhdGVkIG9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLlN0YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge0VsZW1lbnR9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICBudWxsXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gYXJyYXkgb2YgYWxsIHRhcmdldCBlbGVtZW50cyBpbmRleGVkIGJ5IHRoZSBtaXhlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIHRhcmdldHNcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuU3RhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7QXJyYXkuPEVsZW1lbnQ+fVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgW11cbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy50YXJnZXRzID0gW107XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IG9mIGFsbCB0YXJnZXQgZWxlbWVudHMgbm90IG1hdGNoaW5nIHRoZSBjdXJyZW50IGZpbHRlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGhpZGVcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuU3RhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7QXJyYXkuPEVsZW1lbnQ+fVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgW11cbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5oaWRlID0gW107XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IG9mIGFsbCB0YXJnZXQgZWxlbWVudHMgbWF0Y2hpbmcgdGhlIGN1cnJlbnQgZmlsdGVyIGFuZCBhbnkgYWRkaXRpb25hbFxuICAgICAgICAgKiBsaW1pdHMgYXBwbGllZCBzdWNoIGFzIHBhZ2luYXRpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBzaG93XG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLlN0YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge0FycmF5LjxFbGVtZW50Pn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIFtdXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuc2hvdyA9IFtdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBhcnJheSBvZiBhbGwgdGFyZ2V0IGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBjdXJyZW50IGZpbHRlciBpcnJlc3BlY3RpdmUgb2ZcbiAgICAgICAgICogYW55IGFkZGl0aW9uYWwgbGltaXRzIGFwcGxpZWQgc3VjaCBhcyBwYWdpbmF0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgbWF0Y2hpbmdcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuU3RhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7QXJyYXkuPEVsZW1lbnQ+fVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgW11cbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5tYXRjaGluZyA9IFtdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgdG90YWwgbnVtYmVyIG9mIHRhcmdldCBlbGVtZW50cyBpbmRleGVkIGJ5IHRoZVxuICAgICAgICAgKiBtaXhlci4gRXF1aXZhbGVudCB0byBgc3RhdGUudGFyZ2V0cy5sZW5ndGhgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgdG90YWxUYXJnZXRzXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLlN0YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge251bWJlcn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIC0xXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMudG90YWxUYXJnZXRzID0gLTE7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSB0b3RhbCBudW1iZXIgb2YgdGFyZ2V0IGVsZW1lbnRzIG1hdGNoaW5nIHRoZVxuICAgICAgICAgKiBjdXJyZW50IGZpbHRlciBhbmQgYW55IGFkZGl0aW9uYWwgbGltaXRzIGFwcGxpZWQgc3VjaCBhcyBwYWdpbmF0aW9uLlxuICAgICAgICAgKiBFcXVpdmFsZW50IHRvIGBzdGF0ZS5zaG93Lmxlbmd0aGAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICB0b3RhbFNob3dcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuU3RhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7bnVtYmVyfVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgLTFcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy50b3RhbFNob3cgPSAtMTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIHRvdGFsIG51bWJlciBvZiB0YXJnZXQgZWxlbWVudHMgbm90IG1hdGNoaW5nXG4gICAgICAgICAqIHRoZSBjdXJyZW50IGZpbHRlci4gRXF1aXZhbGVudCB0byBgc3RhdGUuaGlkZS5sZW5ndGhgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgdG90YWxIaWRlXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLlN0YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge251bWJlcn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIC0xXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMudG90YWxIaWRlID0gLTE7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSB0b3RhbCBudW1iZXIgb2YgdGFyZ2V0IGVsZW1lbnRzIG1hdGNoaW5nIHRoZVxuICAgICAgICAgKiBjdXJyZW50IGZpbHRlciBpcnJlc3BlY3RpdmUgb2YgYW55IG90aGVyIGxpbWl0cyBhcHBsaWVkIHN1Y2ggYXMgcGFnaW5hdGlvbi5cbiAgICAgICAgICogRXF1aXZhbGVudCB0byBgc3RhdGUubWF0Y2hpbmcubGVuZ3RoYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIHRvdGFsTWF0Y2hpbmdcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuU3RhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7bnVtYmVyfVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgLTFcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy50b3RhbE1hdGNoaW5nID0gLTE7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGxhc3Qgb3BlcmF0aW9uIFwiZmFpbGVkXCIsIGkuZS4gbm8gdGFyZ2V0c1xuICAgICAgICAgKiBjb3VsZCBiZSBmb3VuZCBtYXRjaGluZyB0aGUgZmlsdGVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgaGFzRmFpbGVkXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLlN0YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge2Jvb2xlYW59XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICBmYWxzZVxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmhhc0ZhaWxlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgRE9NIGVsZW1lbnQgdGhhdCB3YXMgY2xpY2tlZCBpZiB0aGUgbGFzdCBvcGVyYXRpb24gd2FzIHRyaWdnZXJlZCBieSB0aGVcbiAgICAgICAgICogY2xpY2tpbmcgb2YgYSBjb250cm9sIGFuZCBub3QgYW4gQVBJIGNhbGwuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICB0cmlnZ2VyRWxlbWVudFxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5TdGF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtFbGVtZW50fG51bGx9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICBudWxsXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMudHJpZ2dlckVsZW1lbnQgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkYXRhc2V0IHVuZGVybHlpbmcgdGhlIHJlbmRlcmVkIHRhcmdldHMsIGlmIHRoZVxuICAgICAgICAgKiBkYXRhc2V0IEFQSSBpcyBpbiB1c2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBhY3RpdmVEYXRhc2V0XG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLlN0YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge0FycmF5LjxvYmplY3Q+fVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgbnVsbFxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmFjdGl2ZURhdGFzZXQgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLlN0YXRlKTtcblxuICAgIG1peGl0dXAuU3RhdGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLkJhc2UucHJvdG90eXBlKTtcblxuICAgIG1peGl0dXAuU3RhdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbWl4aXR1cC5TdGF0ZTtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuVXNlckluc3RydWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMuY29tbWFuZCAgICA9IHt9O1xuICAgICAgICB0aGlzLmFuaW1hdGUgICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayAgID0gbnVsbDtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5Vc2VySW5zdHJ1Y3Rpb24pO1xuXG4gICAgbWl4aXR1cC5Vc2VySW5zdHJ1Y3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLkJhc2UucHJvdG90eXBlKTtcblxuICAgIG1peGl0dXAuVXNlckluc3RydWN0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG1peGl0dXAuVXNlckluc3RydWN0aW9uO1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5NZXNzYWdlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtaXhpdHVwLkJhc2UuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVDb25zdHJ1Y3QnKTtcblxuICAgICAgICAvKiBFcnJvcnNcbiAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgICAgICB0aGlzLkVSUk9SX0ZBQ1RPUllfSU5WQUxJRF9DT05UQUlORVIgPVxuICAgICAgICAgICAgJ1tNaXhJdFVwXSBBbiBpbnZhbGlkIHNlbGVjdG9yIG9yIGVsZW1lbnQgcmVmZXJlbmNlIHdhcyBwYXNzZWQgdG8gdGhlIG1peGl0dXAgZmFjdG9yeSBmdW5jdGlvbic7XG5cbiAgICAgICAgdGhpcy5FUlJPUl9GQUNUT1JZX0NPTlRBSU5FUl9OT1RfRk9VTkQgPVxuICAgICAgICAgICAgJ1tNaXhJdFVwXSBUaGUgcHJvdmlkZWQgc2VsZWN0b3IgeWllbGRlZCBubyBjb250YWluZXIgZWxlbWVudCc7XG5cbiAgICAgICAgdGhpcy5FUlJPUl9DT05GSUdfSU5WQUxJRF9BTklNQVRJT05fRUZGRUNUUyA9XG4gICAgICAgICAgICAnW01peEl0VXBdIEludmFsaWQgdmFsdWUgZm9yIGBhbmltYXRpb24uZWZmZWN0c2AnO1xuXG4gICAgICAgIHRoaXMuRVJST1JfQ09ORklHX0lOVkFMSURfQ09OVFJPTFNfU0NPUEUgPVxuICAgICAgICAgICAgJ1tNaXhJdFVwXSBJbnZhbGlkIHZhbHVlIGZvciBgY29udHJvbHMuc2NvcGVgJztcblxuICAgICAgICB0aGlzLkVSUk9SX0NPTkZJR19JTlZBTElEX1BST1BFUlRZID1cbiAgICAgICAgICAgICdbTWl4aXRVcF0gSW52YWxpZCBjb25maWd1cmF0aW9uIG9iamVjdCBwcm9wZXJ0eSBcIiR7ZXJyb25lb3VzfVwiJHtzdWdnZXN0aW9ufSc7XG5cbiAgICAgICAgdGhpcy5FUlJPUl9DT05GSUdfSU5WQUxJRF9QUk9QRVJUWV9TVUdHRVNUSU9OID1cbiAgICAgICAgICAgICcuIERpZCB5b3UgbWVhbiBcIiR7cHJvYmFibGVNYXRjaH1cIj8nO1xuXG4gICAgICAgIHRoaXMuRVJST1JfQ09ORklHX0RBVEFfVUlEX0tFWV9OT1RfU0VUID1cbiAgICAgICAgICAgICdbTWl4SXRVcF0gVG8gdXNlIHRoZSBkYXRhc2V0IEFQSSwgYSBVSUQga2V5IG11c3QgYmUgc3BlY2lmaWVkIHVzaW5nIGBkYXRhLnVpZEtleWAnO1xuXG4gICAgICAgIHRoaXMuRVJST1JfREFUQVNFVF9JTlZBTElEX1VJRF9LRVkgPVxuICAgICAgICAgICAgJ1tNaXhJdFVwXSBUaGUgc3BlY2lmaWVkIFVJRCBrZXkgXCIke3VpZEtleX1cIiBpcyBub3QgcHJlc2VudCBvbiBvbmUgb3IgbW9yZSBkYXRhc2V0IGl0ZW1zJztcblxuICAgICAgICB0aGlzLkVSUk9SX0RBVEFTRVRfRFVQTElDQVRFX1VJRCA9XG4gICAgICAgICAgICAnW01peEl0VXBdIFRoZSBVSUQgXCIke3VpZH1cIiB3YXMgZm91bmQgb24gdHdvIG9yIG1vcmUgZGF0YXNldCBpdGVtcy4gVUlEcyBtdXN0IGJlIHVuaXF1ZS4nO1xuXG4gICAgICAgIHRoaXMuRVJST1JfSU5TRVJUX0lOVkFMSURfQVJHVU1FTlRTID1cbiAgICAgICAgICAgICdbTWl4SXRVcF0gUGxlYXNlIHByb3ZpZGVyIGVpdGhlciBhbiBpbmRleCBvciBhIHNpYmxpbmcgYW5kIHBvc2l0aW9uIHRvIGluc2VydCwgbm90IGJvdGgnO1xuXG4gICAgICAgIHRoaXMuRVJST1JfSU5TRVJUX1BSRUVYSVNUSU5HX0VMRU1FTlQgPVxuICAgICAgICAgICAgJ1tNaXhJdFVwXSBBbiBlbGVtZW50IHRvIGJlIGluc2VydGVkIGFscmVhZHkgZXhpc3RzIGluIHRoZSBjb250YWluZXInO1xuXG4gICAgICAgIHRoaXMuRVJST1JfRklMVEVSX0lOVkFMSURfQVJHVU1FTlRTID1cbiAgICAgICAgICAgICdbTWl4SXRVcF0gUGxlYXNlIHByb3ZpZGUgZWl0aGVyIGEgc2VsZWN0b3Igb3IgY29sbGVjdGlvbiBgLmZpbHRlcigpYCwgbm90IGJvdGgnO1xuXG4gICAgICAgIHRoaXMuRVJST1JfREFUQVNFVF9OT1RfU0VUID1cbiAgICAgICAgICAgICdbTWl4SXRVcF0gVG8gdXNlIHRoZSBkYXRhc2V0IEFQSSB3aXRoIHByZS1yZW5kZXJlZCB0YXJnZXRzLCBhIHN0YXJ0aW5nIGRhdGFzZXQgbXVzdCBiZSBzZXQgdXNpbmcgYGxvYWQuZGF0YXNldGAnO1xuXG4gICAgICAgIHRoaXMuRVJST1JfREFUQVNFVF9QUkVSRU5ERVJFRF9NSVNNQVRDSCA9XG4gICAgICAgICAgICAnW01peEl0VXBdIGBsb2FkLmRhdGFzZXRgIGRvZXMgbm90IG1hdGNoIHByZS1yZW5kZXJlZCB0YXJnZXRzJztcblxuICAgICAgICB0aGlzLkVSUk9SX0RBVEFTRVRfUkVOREVSRVJfTk9UX1NFVCA9XG4gICAgICAgICAgICAnW01peEl0VXBdIFRvIGluc2VydCBhbiBlbGVtZW50IHZpYSB0aGUgZGF0YXNldCBBUEksIGEgdGFyZ2V0IHJlbmRlcmVyIGZ1bmN0aW9uIG11c3QgYmUgcHJvdmlkZWQgdG8gYHJlbmRlci50YXJnZXRgJztcblxuICAgICAgICAvKiBXYXJuaW5nc1xuICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgICAgIHRoaXMuV0FSTklOR19GQUNUT1JZX1BSRUVYSVNUSU5HX0lOU1RBTkNFID1cbiAgICAgICAgICAgICdbTWl4SXRVcF0gV0FSTklORzogVGhpcyBlbGVtZW50IGFscmVhZHkgaGFzIGFuIGFjdGl2ZSBNaXhJdFVwIGluc3RhbmNlLiBUaGUgcHJvdmlkZWQgY29uZmlndXJhdGlvbiBvYmplY3Qgd2lsbCBiZSBpZ25vcmVkLicgK1xuICAgICAgICAgICAgJyBJZiB5b3Ugd2lzaCB0byBwZXJmb3JtIGFkZGl0aW9uYWwgbWV0aG9kcyBvbiB0aGlzIGluc3RhbmNlLCBwbGVhc2UgY3JlYXRlIGEgcmVmZXJlbmNlLic7XG5cbiAgICAgICAgdGhpcy5XQVJOSU5HX0lOU0VSVF9OT19FTEVNRU5UUyA9XG4gICAgICAgICAgICAnW01peEl0VXBdIFdBUk5JTkc6IE5vIHZhbGlkIGVsZW1lbnRzIHdlcmUgcGFzc2VkIHRvIGAuaW5zZXJ0KClgJztcblxuICAgICAgICB0aGlzLldBUk5JTkdfUkVNT1ZFX05PX0VMRU1FTlRTID1cbiAgICAgICAgICAgICdbTWl4SXRVcF0gV0FSTklORzogTm8gdmFsaWQgZWxlbWVudHMgd2VyZSBwYXNzZWQgdG8gYC5yZW1vdmUoKWAnO1xuXG4gICAgICAgIHRoaXMuV0FSTklOR19NVUxUSU1JWF9JTlNUQU5DRV9RVUVVRV9GVUxMID1cbiAgICAgICAgICAgICdbTWl4SXRVcF0gV0FSTklORzogQW4gb3BlcmF0aW9uIHdhcyByZXF1ZXN0ZWQgYnV0IHRoZSBNaXhJdFVwIGluc3RhbmNlIHdhcyBidXN5LiBUaGUgb3BlcmF0aW9uIHdhcyByZWplY3RlZCBiZWNhdXNlIHRoZSAnICtcbiAgICAgICAgICAgICdxdWV1ZSBpcyBmdWxsIG9yIHF1ZXVpbmcgaXMgZGlzYWJsZWQuJztcblxuICAgICAgICB0aGlzLldBUk5JTkdfR0VUX09QRVJBVElPTl9JTlNUQU5DRV9CVVNZID1cbiAgICAgICAgICAgICdbTWl4SXRVcF0gV0FSTklORzogT3BlcmF0aW9ucyBjYW4gYmUgYmUgY3JlYXRlZCB3aGlsZSB0aGUgTWl4SXRVcCBpbnN0YW5jZSBpcyBidXN5Lic7XG5cbiAgICAgICAgdGhpcy5XQVJOSU5HX05PX1BST01JU0VfSU1QTEVNRU5UQVRJT04gPVxuICAgICAgICAgICAgJ1tNaXhJdFVwXSBXQVJOSU5HOiBObyBQcm9taXNlIGltcGxlbWVudGF0aW9ucyBjb3VsZCBiZSBmb3VuZC4gSWYgeW91IHdpc2ggdG8gdXNlIHByb21pc2VzIHdpdGggTWl4SXRVcCBwbGVhc2UgaW5zdGFsbCcgK1xuICAgICAgICAgICAgJyBhbiBFUzYgUHJvbWlzZSBwb2x5ZmlsbC4nO1xuXG4gICAgICAgIHRoaXMuV0FSTklOR19JTkNPTlNJU1RFTlRfU09SVElOR19BVFRSSUJVVEVTID1cbiAgICAgICAgICAgICdbTWl4SXRVcF0gV0FSTklORzogVGhlIHJlcXVlc3RlZCBzb3J0aW5nIGRhdGEgYXR0cmlidXRlIFwiJHthdHRyaWJ1dGV9XCIgd2FzIG5vdCBwcmVzZW50IG9uIG9uZSBvciBtb3JlIHRhcmdldCBlbGVtZW50cycgK1xuICAgICAgICAgICAgJyB3aGljaCBtYXkgcHJvZHVjdCB1bmV4cGVjdGVkIHNvcnQgb3V0cHV0JztcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMuY29tcGlsZVRlbXBsYXRlcygpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5NZXNzYWdlcyk7XG5cbiAgICBtaXhpdHVwLk1lc3NhZ2VzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLk1lc3NhZ2VzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG1peGl0dXAuTWVzc2FnZXM7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5NZXNzYWdlcy5wcm90b3R5cGUuY29tcGlsZVRlbXBsYXRlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZXJyb3JLZXkgICAgICAgID0gJyc7XG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2UgICAgPSAnJztcblxuICAgICAgICBmb3IgKGVycm9yS2V5IGluIHRoaXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKGVycm9yTWVzc2FnZSA9IHRoaXNbZXJyb3JLZXldKSAhPT0gJ3N0cmluZycpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB0aGlzW2guY2FtZWxDYXNlKGVycm9yS2V5KV0gPSBoLnRlbXBsYXRlKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbWl4aXR1cC5tZXNzYWdlcyA9IG5ldyBtaXhpdHVwLk1lc3NhZ2VzKCk7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICogQHBhcmFtICAgICAgIHttaXhpdHVwLk1peGVyfSBtaXhlclxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5GYWNhZGUgPSBmdW5jdGlvbiBNaXhlcihtaXhlcikge1xuICAgICAgICBtaXhpdHVwLkJhc2UuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVDb25zdHJ1Y3QnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgIHRoaXMuY29uZmlndXJlICAgICAgICAgID0gbWl4ZXIuY29uZmlndXJlLmJpbmQobWl4ZXIpO1xuICAgICAgICB0aGlzLnNob3cgICAgICAgICAgICAgICA9IG1peGVyLnNob3cuYmluZChtaXhlcik7XG4gICAgICAgIHRoaXMuaGlkZSAgICAgICAgICAgICAgID0gbWl4ZXIuaGlkZS5iaW5kKG1peGVyKTtcbiAgICAgICAgdGhpcy5maWx0ZXIgICAgICAgICAgICAgPSBtaXhlci5maWx0ZXIuYmluZChtaXhlcik7XG4gICAgICAgIHRoaXMudG9nZ2xlT24gICAgICAgICAgID0gbWl4ZXIudG9nZ2xlT24uYmluZChtaXhlcik7XG4gICAgICAgIHRoaXMudG9nZ2xlT2ZmICAgICAgICAgID0gbWl4ZXIudG9nZ2xlT2ZmLmJpbmQobWl4ZXIpO1xuICAgICAgICB0aGlzLnNvcnQgICAgICAgICAgICAgICA9IG1peGVyLnNvcnQuYmluZChtaXhlcik7XG4gICAgICAgIHRoaXMuY2hhbmdlTGF5b3V0ICAgICAgID0gbWl4ZXIuY2hhbmdlTGF5b3V0LmJpbmQobWl4ZXIpO1xuICAgICAgICB0aGlzLm11bHRpbWl4ICAgICAgICAgICA9IG1peGVyLm11bHRpbWl4LmJpbmQobWl4ZXIpO1xuICAgICAgICB0aGlzLmRhdGFzZXQgICAgICAgICAgICA9IG1peGVyLmRhdGFzZXQuYmluZChtaXhlcik7XG4gICAgICAgIHRoaXMudHdlZW4gICAgICAgICAgICAgID0gbWl4ZXIudHdlZW4uYmluZChtaXhlcik7XG4gICAgICAgIHRoaXMuaW5zZXJ0ICAgICAgICAgICAgID0gbWl4ZXIuaW5zZXJ0LmJpbmQobWl4ZXIpO1xuICAgICAgICB0aGlzLmluc2VydEJlZm9yZSAgICAgICA9IG1peGVyLmluc2VydEJlZm9yZS5iaW5kKG1peGVyKTtcbiAgICAgICAgdGhpcy5pbnNlcnRBZnRlciAgICAgICAgPSBtaXhlci5pbnNlcnRBZnRlci5iaW5kKG1peGVyKTtcbiAgICAgICAgdGhpcy5wcmVwZW5kICAgICAgICAgICAgPSBtaXhlci5wcmVwZW5kLmJpbmQobWl4ZXIpO1xuICAgICAgICB0aGlzLmFwcGVuZCAgICAgICAgICAgICA9IG1peGVyLmFwcGVuZC5iaW5kKG1peGVyKTtcbiAgICAgICAgdGhpcy5yZW1vdmUgICAgICAgICAgICAgPSBtaXhlci5yZW1vdmUuYmluZChtaXhlcik7XG4gICAgICAgIHRoaXMuZGVzdHJveSAgICAgICAgICAgID0gbWl4ZXIuZGVzdHJveS5iaW5kKG1peGVyKTtcbiAgICAgICAgdGhpcy5mb3JjZVJlZnJlc2ggICAgICAgPSBtaXhlci5mb3JjZVJlZnJlc2guYmluZChtaXhlcik7XG4gICAgICAgIHRoaXMuZm9yY2VSZW5kZXIgICAgICAgID0gbWl4ZXIuZm9yY2VSZW5kZXIuYmluZChtaXhlcik7XG4gICAgICAgIHRoaXMuaXNNaXhpbmcgICAgICAgICAgID0gbWl4ZXIuaXNNaXhpbmcuYmluZChtaXhlcik7XG4gICAgICAgIHRoaXMuZ2V0T3BlcmF0aW9uICAgICAgID0gbWl4ZXIuZ2V0T3BlcmF0aW9uLmJpbmQobWl4ZXIpO1xuICAgICAgICB0aGlzLmdldENvbmZpZyAgICAgICAgICA9IG1peGVyLmdldENvbmZpZy5iaW5kKG1peGVyKTtcbiAgICAgICAgdGhpcy5nZXRTdGF0ZSAgICAgICAgICAgPSBtaXhlci5nZXRTdGF0ZS5iaW5kKG1peGVyKTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgaC5mcmVlemUodGhpcyk7XG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5GYWNhZGUpO1xuXG4gICAgbWl4aXR1cC5GYWNhZGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLkJhc2UucHJvdG90eXBlKTtcblxuICAgIG1peGl0dXAuRmFjYWRlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG1peGl0dXAuRmFjYWRlO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IG1peGl0dXA7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIG1peGl0dXA7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdy5taXhpdHVwID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93Lm1peGl0dXAgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgd2luZG93Lm1peGl0dXAgPSBtaXhpdHVwO1xuICAgIH1cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLmNvbnN0cnVjdG9yKTtcblxuICAgIG1peGl0dXAuTkFNRSA9ICdtaXhpdHVwJztcbiAgICBtaXhpdHVwLkNPUkVfVkVSU0lPTiA9ICczLjIuMic7XG59KSh3aW5kb3cpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21peGl0dXAvZGlzdC9taXhpdHVwLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9