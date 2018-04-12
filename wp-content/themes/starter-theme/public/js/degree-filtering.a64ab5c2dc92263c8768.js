webpackJsonp([2],{

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixitup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixitup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mixitup__);

var Container = $('.mixitup');

var mixer = __WEBPACK_IMPORTED_MODULE_0_mixitup___default()(Container, {
	callbacks: {
		onMixStart: function onMixStart(state, futureState) {},
		onMixEnd: function onMixEnd(mixEvent) {
			// Focus code still doesn't seem to work
			/* JUST HAD A THOUGHT: You might need to wait with timeout for DOM */
			Container.find('.card:visible:first').focus();
		}
	}
});
handleUrlFilters();

function handleUrlFilters() {
	if (location.hash) {
		var FilterID = location.hash.replace('#', '.');
		var NewActive = $("button[data-filter='" + FilterID + "']");
		NewActive.trigger('click');
	}
}

/***/ }),

/***/ 51:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2RlZ3JlZS1maWx0ZXJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21peGl0dXAvZGlzdC9taXhpdHVwLmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIiQiLCJtaXhlciIsIm1peGl0dXAiLCJjYWxsYmFja3MiLCJvbk1peFN0YXJ0Iiwic3RhdGUiLCJmdXR1cmVTdGF0ZSIsIm9uTWl4RW5kIiwibWl4RXZlbnQiLCJmaW5kIiwiZm9jdXMiLCJoYW5kbGVVcmxGaWx0ZXJzIiwibG9jYXRpb24iLCJoYXNoIiwiRmlsdGVySUQiLCJyZXBsYWNlIiwiTmV3QWN0aXZlIiwidHJpZ2dlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxZQUFZQyxFQUFFLFVBQUYsQ0FBbEI7O0FBRUEsSUFBTUMsUUFBUSwrQ0FBQUMsQ0FBUUgsU0FBUixFQUFtQjtBQUNoQ0ksWUFBVztBQUNWQyxjQUFZLG9CQUFTQyxLQUFULEVBQWdCQyxXQUFoQixFQUE2QixDQUFFLENBRGpDO0FBRVZDLFlBQVUsa0JBQVNDLFFBQVQsRUFBbUI7QUFDNUI7QUFDQTtBQUNBVCxhQUNFVSxJQURGLENBQ08scUJBRFAsRUFFRUMsS0FGRjtBQUdBO0FBUlM7QUFEcUIsQ0FBbkIsQ0FBZDtBQVlBQzs7QUFHQSxTQUFTQSxnQkFBVCxHQUE0QjtBQUMzQixLQUFJQyxTQUFTQyxJQUFiLEVBQW1CO0FBQ2xCLE1BQU1DLFdBQVdGLFNBQVNDLElBQVQsQ0FBY0UsT0FBZCxDQUFzQixHQUF0QixFQUEyQixHQUEzQixDQUFqQjtBQUNBLE1BQU1DLFlBQVloQixFQUFFLHlCQUF5QmMsUUFBekIsR0FBb0MsSUFBdEMsQ0FBbEI7QUFDQUUsWUFBVUMsT0FBVixDQUFrQixPQUFsQjtBQUNBO0FBQ0QsQzs7Ozs7OztBQ3hCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixxREFBcUQ7QUFDeEU7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMscUJBQXFCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFLFNBQVM7QUFDOUU7QUFDQTtBQUNB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyx5QkFBeUIsU0FBUztBQUNsQyx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDLHlCQUF5QixFQUFFO0FBQzNCLHlCQUF5QixTQUFTO0FBQ2xDLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyx5QkFBeUIsT0FBTztBQUNoQyx5QkFBeUIsU0FBUztBQUNsQyx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQSxrRUFBa0U7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyx5QkFBeUIsT0FBTztBQUNoQyx5QkFBeUIsU0FBUztBQUNsQyx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RCxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUEsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLDZEQUE2RDtBQUM3RCxpREFBaUQ7QUFDakQsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSw2REFBNkQ7QUFDN0QsaURBQWlEO0FBQ2pELGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBLG1DQUFtQzs7QUFFbkM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLHVDQUF1QztBQUN2QztBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbUJBQW1CO0FBQ25ELG9DQUFvQyxNQUFNLHNCQUFzQixPQUFPO0FBQ3ZFLGdDQUFnQyxRQUFRO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyxtQ0FBbUMsTUFBTSxFQUFFLFdBQVcsSUFBSTtBQUMxRCxnQ0FBZ0MsUUFBUTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELG1CQUFtQixJQUFJLFFBQVEsT0FBTyxJQUFJLE9BQU8sSUFBSSxRQUFRO0FBQ3JIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCLHFCQUFxQixPQUFPO0FBQzVCLHFCQUFxQixRQUFRO0FBQzdCLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixPQUFPO0FBQzFCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0Isd0JBQXdCO0FBQ3ZEOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0EscUJBQXFCLFlBQVk7QUFDakMscUJBQXFCLE9BQU87QUFDNUIscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QixpQkFBaUIsUUFBUTtBQUN6QixpQkFBaUIsT0FBTztBQUN4QixpQkFBaUIsU0FBUztBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLDhCQUE4QjtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixVQUFVO0FBQy9CLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsOEJBQThCO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFVBQVU7QUFDL0IscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTs7QUFFQSx1QkFBdUIsOEJBQThCO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFVBQVU7QUFDL0IscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHVCQUF1Qiw4QkFBOEI7QUFDckQ7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsVUFBVTtBQUMvQixxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTs7QUFFQSx1QkFBdUIsOEJBQThCO0FBQ3JEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQyxxQkFBcUIsT0FBTztBQUM1QixxQkFBcUIsT0FBTztBQUM1QixxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QixxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0IscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUIscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsa0JBQWtCO0FBQ3ZDLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QixxQkFBcUIsT0FBTztBQUM1QixxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSx1QkFBdUIsOENBQThDO0FBQ3JFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrQkFBa0I7QUFDdkMscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsa0JBQWtCO0FBQ3ZDLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUIscUJBQXFCLE9BQU87QUFDNUIscUJBQXFCLE9BQU87QUFDNUIscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QixxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5QixxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixNQUFNO0FBQzNCLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE1BQU07QUFDM0IscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixRQUFRO0FBQzdCLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnQkFBZ0I7QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEUsb0JBQW9CO0FBQ3BCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdFQUFnRSxVQUFVLEdBQUcsV0FBVzs7QUFFeEY7QUFDQSwrQkFBK0IsY0FBYzs7QUFFN0M7QUFDQTs7QUFFQTtBQUNBLGdEQUFnRCxPQUFPOztBQUV2RDtBQUNBLGtDQUFrQyxJQUFJOztBQUV0QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0VBQXdFLFVBQVU7QUFDbEY7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixjQUFjO0FBQ25DOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxVIiwiZmlsZSI6ImpzL2RlZ3JlZS1maWx0ZXJpbmcuYTY0YWI1YzJkYzkyMjYzYzg3NjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWl4aXR1cCBmcm9tICdtaXhpdHVwJ1xuY29uc3QgQ29udGFpbmVyID0gJCgnLm1peGl0dXAnKVxuXG5jb25zdCBtaXhlciA9IG1peGl0dXAoQ29udGFpbmVyLCB7XG5cdGNhbGxiYWNrczoge1xuXHRcdG9uTWl4U3RhcnQ6IGZ1bmN0aW9uKHN0YXRlLCBmdXR1cmVTdGF0ZSkge30sXG5cdFx0b25NaXhFbmQ6IGZ1bmN0aW9uKG1peEV2ZW50KSB7XG5cdFx0XHQvLyBGb2N1cyBjb2RlIHN0aWxsIGRvZXNuJ3Qgc2VlbSB0byB3b3JrXG5cdFx0XHQvKiBKVVNUIEhBRCBBIFRIT1VHSFQ6IFlvdSBtaWdodCBuZWVkIHRvIHdhaXQgd2l0aCB0aW1lb3V0IGZvciBET00gKi9cblx0XHRcdENvbnRhaW5lclxuXHRcdFx0XHQuZmluZCgnLmNhcmQ6dmlzaWJsZTpmaXJzdCcpXG5cdFx0XHRcdC5mb2N1cygpO1xuXHRcdH1cblx0fVxufSk7XG5oYW5kbGVVcmxGaWx0ZXJzKCk7XG5cblxuZnVuY3Rpb24gaGFuZGxlVXJsRmlsdGVycygpIHtcblx0aWYgKGxvY2F0aW9uLmhhc2gpIHtcblx0XHRjb25zdCBGaWx0ZXJJRCA9IGxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcuJylcblx0XHRjb25zdCBOZXdBY3RpdmUgPSAkKFwiYnV0dG9uW2RhdGEtZmlsdGVyPSdcIiArIEZpbHRlcklEICsgXCInXVwiKTtcblx0XHROZXdBY3RpdmUudHJpZ2dlcignY2xpY2snKVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2RlZ3JlZS1maWx0ZXJpbmcuanMiLCIvKiohXG4gKiBNaXhJdFVwIHYzLjIuMlxuICogQSBoaWdoLXBlcmZvcm1hbmNlLCBkZXBlbmRlbmN5LWZyZWUgbGlicmFyeSBmb3IgYW5pbWF0ZWQgZmlsdGVyaW5nLCBzb3J0aW5nIGFuZCBtb3JlXG4gKiBCdWlsZCAyMGExYTE4Mi1kN2JkLTRjOGYtODA3ZC1iODg4ZTMyNWU0NGRcbiAqXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAyMDE0LTIwMTcgS3Vua2FMYWJzIExpbWl0ZWQuXG4gKiBAYXV0aG9yICAgIEt1bmthTGFicyBMaW1pdGVkLlxuICogQGxpbmsgICAgICBodHRwczovL3d3dy5rdW5rYWxhYnMuY29tL21peGl0dXAvXG4gKlxuICogQGxpY2Vuc2UgICBDb21tZXJjaWFsIHVzZSByZXF1aXJlcyBhIGNvbW1lcmNpYWwgbGljZW5zZS5cbiAqICAgICAgICAgICAgaHR0cHM6Ly93d3cua3Vua2FsYWJzLmNvbS9taXhpdHVwL2xpY2Vuc2VzL1xuICpcbiAqICAgICAgICAgICAgTm9uLWNvbW1lcmNpYWwgdXNlIHBlcm1pdHRlZCB1bmRlciBzYW1lIHRlcm1zIGFzIENDIEJZLU5DIDMuMCBsaWNlbnNlLlxuICogICAgICAgICAgICBodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1uYy8zLjAvXG4gKi9cblxuKGZ1bmN0aW9uKHdpbmRvdykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBtaXhpdHVwID0gbnVsbCxcbiAgICAgICAgaCAgICAgICA9IG51bGw7XG5cbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBWRU5ET1JTID0gWyd3ZWJraXQnLCAnbW96JywgJ28nLCAnbXMnXSxcbiAgICAgICAgICAgIGNhbmFyeSAgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgICAgICBpICAgICAgID0gLTE7XG5cbiAgICAgICAgLy8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBWRU5ET1JTLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgaSsrKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W1ZFTkRPUlNbaV0gKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2FuYXJ5Lm5leHRFbGVtZW50U2libGluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUsICduZXh0RWxlbWVudFNpYmxpbmcnLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gdGhpcy5uZXh0U2libGluZztcblxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZWwgPSBlbC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRWxlbWVudC5tYXRjaGVzXG5cbiAgICAgICAgKGZ1bmN0aW9uKEVsZW1lbnRQcm90b3R5cGUpIHtcbiAgICAgICAgICAgIEVsZW1lbnRQcm90b3R5cGUubWF0Y2hlcyA9XG4gICAgICAgICAgICAgICAgRWxlbWVudFByb3RvdHlwZS5tYXRjaGVzIHx8XG4gICAgICAgICAgICAgICAgRWxlbWVudFByb3RvdHlwZS5tYWNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgIEVsZW1lbnRQcm90b3R5cGUubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgRWxlbWVudFByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgIEVsZW1lbnRQcm90b3R5cGUub01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgIEVsZW1lbnRQcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSwgdGhpcykgPiAtMTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9KSh3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUpO1xuXG4gICAgICAgIC8vIE9iamVjdC5rZXlzXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9rZXlzXG5cbiAgICAgICAgaWYgKCFPYmplY3Qua2V5cykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhc093blByb3BlcnR5ICAgICAgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuICAgICAgICAgICAgICAgICAgICBoYXNEb250RW51bUJ1ZyAgICAgID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRvbnRFbnVtcyAgICAgICAgICAgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgZG9udEVudW1zTGVuZ3RoICAgICA9IC0xO1xuXG4gICAgICAgICAgICAgICAgaGFzRG9udEVudW1CdWcgPSAhKHtcbiAgICAgICAgICAgICAgICAgICAgdG9TdHJpbmc6IG51bGxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAucHJvcGVydHlJc0VudW1lcmFibGUoJ3RvU3RyaW5nJyk7XG5cbiAgICAgICAgICAgICAgICBkb250RW51bXMgPSBbXG4gICAgICAgICAgICAgICAgICAgICd0b1N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICd0b0xvY2FsZVN0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZU9mJyxcbiAgICAgICAgICAgICAgICAgICAgJ2hhc093blByb3BlcnR5JyxcbiAgICAgICAgICAgICAgICAgICAgJ2lzUHJvdG90eXBlT2YnLFxuICAgICAgICAgICAgICAgICAgICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAgICAgICAgICAgICAgICAgICAnY29uc3RydWN0b3InXG4gICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgIGRvbnRFbnVtc0xlbmd0aCA9IGRvbnRFbnVtcy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgID0gW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wICAgID0gJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnICYmICh0eXBlb2Ygb2JqICE9PSAnZnVuY3Rpb24nIHx8IG9iaiA9PT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5rZXlzIGNhbGxlZCBvbiBub24tb2JqZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzRG9udEVudW1CdWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkb250RW51bXNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgZG9udEVudW1zW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChkb250RW51bXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0oKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBcnJheS5pc0FycmF5XG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2lzQXJyYXlcblxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkpIHtcbiAgICAgICAgICAgIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT2JqZWN0LmNyZWF0ZVxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvY3JlYXRlXG5cbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBPYmplY3QuY3JlYXRlID0gKGZ1bmN0aW9uKHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhciBUZW1wID0gZnVuY3Rpb24oKSB7fTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocHJvdG90eXBlLCBwcm9wZXJ0aWVzT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm90b3R5cGUgIT09IE9iamVjdChwcm90b3R5cGUpICYmIHByb3RvdHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGFuIG9iamVjdCwgb3IgbnVsbCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgVGVtcC5wcm90b3R5cGUgPSBwcm90b3R5cGUgfHwge307XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBUZW1wKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgVGVtcC5wcm90b3R5cGUgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzT2JqZWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHJlc3VsdCwgcHJvcGVydGllc09iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvdG90eXBlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuX19wcm90b19fID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIGpzaGludCBpZ25vcmU6ZW5kICovXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RyaW5nLnByb3RvdHlvZS50cmltXG5cbiAgICAgICAgaWYgKCFTdHJpbmcucHJvdG90eXBlLnRyaW0pIHtcbiAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUudHJpbSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLCAnJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXJyYXkucHJvdG90eXBlLmluZGV4T2ZcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvaW5kZXhPZlxuXG4gICAgICAgIGlmICghQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24oc2VhcmNoRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBuLCBrLCB0LCBsZW47XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdCA9IE9iamVjdCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIGxlbiA9IHQubGVuZ3RoID4+PiAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbiA9IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbiA9IE51bWJlcihhcmd1bWVudHNbMV0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChuICE9PSBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuICE9PSAwICYmIG4gIT09IEluZmluaXR5ICYmIG4gIT09IC1JbmZpbml0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbiA9IChuID4gMCB8fCAtMSkgKiBNYXRoLmZsb29yKE1hdGguYWJzKG4pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChuID49IGxlbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChrID0gbiA+PSAwID8gbiA6IE1hdGgubWF4KGxlbiAtIE1hdGguYWJzKG4pLCAwKTsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrIGluIHQgJiYgdFtrXSA9PT0gc2VhcmNoRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX29iamVjdHMvRnVuY3Rpb24vYmluZFxuXG4gICAgICAgIGlmICghRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQpIHtcbiAgICAgICAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24ob1RoaXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgYUFyZ3MsIHNlbGYsIEZOT1AsIGZCb3VuZDtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYUFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgICAgICAgICAgICAgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICBGTk9QID0gZnVuY3Rpb24oKSB7fTtcblxuICAgICAgICAgICAgICAgIGZCb3VuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5hcHBseSh0aGlzIGluc3RhbmNlb2YgRk5PUCA/IHRoaXMgOiBvVGhpcywgYUFyZ3MuY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIEZOT1AucHJvdG90eXBlID0gdGhpcy5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZkJvdW5kLnByb3RvdHlwZSA9IG5ldyBGTk9QKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZkJvdW5kO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVsZW1lbnQucHJvdG90eXBlLmRpc3BhdGNoRXZlbnRcblxuICAgICAgICBpZiAoIXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlyZUV2ZW50KCdvbicgKyBldmVudC50eXBlLCBldmVudCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYG1peGl0dXAoKWAgXCJmYWN0b3J5XCIgZnVuY3Rpb24gY3JlYXRlcyBhbmQgcmV0dXJucyBpbmRpdmlkdWFsIGluc3RhbmNlc1xuICAgICAqIG9mIE1peEl0VXAsIGtub3duIGFzIFwibWl4ZXJzXCIsIG9uIHdoaWNoIEFQSSBtZXRob2RzIGNhbiBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBXaGVuIGxvYWRpbmcgTWl4SXRVcCB2aWEgYSBzY3JpcHQgdGFnLCB0aGUgZmFjdG9yeSBmdW5jdGlvbiBpcyBhY2Nlc3NlZFxuICAgICAqIHZpYSB0aGUgZ2xvYmFsIHZhcmlhYmxlIGBtaXhpdHVwYC4gV2hlbiB1c2luZyBhIG1vZHVsZSBsb2FkaW5nXG4gICAgICogc3lzdGVtIChlLmcuIEVTMjAxNSwgQ29tbW9uSlMsIFJlcXVpcmVKUyksIHRoZSBmYWN0b3J5IGZ1bmN0aW9uIGlzXG4gICAgICogZXhwb3J0ZWQgaW50byB5b3VyIG1vZHVsZSB3aGVuIHlvdSByZXF1aXJlIHRoZSBNaXhJdFVwIGxpYnJhcnkuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIG1peGl0dXAoY29udGFpbmVyIFssY29uZmlnXSBbLGZvcmVpZ25Eb2NdKVxuICAgICAqXG4gICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAxOiBDcmVhdGluZyBhIG1peGVyIGluc3RhbmNlIHdpdGggYW4gZWxlbWVudCByZWZlcmVuY2U8L2NhcHRpb24+XG4gICAgICogdmFyIGNvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgICAqXG4gICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCk7XG4gICAgICpcbiAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDI6IENyZWF0aW5nIGEgbWl4ZXIgaW5zdGFuY2Ugd2l0aCBhIHNlbGVjdG9yIHN0cmluZzwvY2FwdGlvbj5cbiAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKCcuY29udGFpbmVyJyk7XG4gICAgICpcbiAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDM6IFBhc3NpbmcgYSBjb25maWd1cmF0aW9uIG9iamVjdDwvY2FwdGlvbj5cbiAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICogICAgIGFuaW1hdGlvbjoge1xuICAgICAqICAgICAgICAgZWZmZWN0czogJ2ZhZGUgc2NhbGUoMC41KSdcbiAgICAgKiAgICAgfVxuICAgICAqIH0pO1xuICAgICAqXG4gICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSA0OiBQYXNzaW5nIGFuIGlmcmFtZSByZWZlcmVuY2U8L2NhcHRpb24+XG4gICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwgY29uZmlnLCBmb3JlaWduRG9jdW1lbnQpO1xuICAgICAqXG4gICAgICogQGdsb2JhbFxuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKiBAcHVibGljXG4gICAgICogQGtpbmQgICAgICAgIGZ1bmN0aW9uXG4gICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICogQHBhcmFtICAgICAgIHsoRWxlbWVudHxzdHJpbmcpfSAgY29udGFpbmVyXG4gICAgICogICAgICBBIERPTSBlbGVtZW50IG9yIHNlbGVjdG9yIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGNvbnRhaW5lcihzKSBvbiB3aGljaCB0byBpbnN0YW50aWF0ZSBNaXhJdFVwLlxuICAgICAqIEBwYXJhbSAgICAgICB7b2JqZWN0fSAgICAgICAgICAgIFtjb25maWddXG4gICAgICogICAgICBBbiBvcHRpb25hbCBcImNvbmZpZ3VyYXRpb24gb2JqZWN0XCIgdXNlZCB0byBjdXN0b21pemUgdGhlIGJlaGF2aW9yIG9mIHRoZSBNaXhJdFVwIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSAgICAgICB7b2JqZWN0fSAgICAgICAgICAgIFtmb3JlaWduRG9jXVxuICAgICAqICAgICAgQW4gb3B0aW9uYWwgcmVmZXJlbmNlIHRvIGEgYGRvY3VtZW50YCwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gY29udHJvbCBhIE1peEl0VXAgaW5zdGFuY2UgaW4gYW4gaWZyYW1lLlxuICAgICAqIEByZXR1cm4gICAgICB7bWl4aXR1cC5NaXhlcn1cbiAgICAgKiAgICAgIEEgXCJtaXhlclwiIG9iamVjdCBob2xkaW5nIHRoZSBNaXhJdFVwIGluc3RhbmNlLlxuICAgICAqL1xuXG4gICAgbWl4aXR1cCA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgY29uZmlnLCBmb3JlaWduRG9jKSB7XG4gICAgICAgIHZhciBlbCAgICAgICAgICAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgIHJldHVybkNvbGxlY3Rpb24gICAgPSBmYWxzZSxcbiAgICAgICAgICAgIGluc3RhbmNlICAgICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgZmFjYWRlICAgICAgICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICBkb2MgICAgICAgICAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgIG91dHB1dCAgICAgICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgaW5zdGFuY2VzICAgICAgICAgICA9IFtdLFxuICAgICAgICAgICAgaWQgICAgICAgICAgICAgICAgICA9ICcnLFxuICAgICAgICAgICAgZWxlbWVudHMgICAgICAgICAgICA9IFtdLFxuICAgICAgICAgICAgaSAgICAgICAgICAgICAgICAgICA9IC0xO1xuXG4gICAgICAgIGRvYyA9IGZvcmVpZ25Eb2MgfHwgd2luZG93LmRvY3VtZW50O1xuXG4gICAgICAgIGlmIChyZXR1cm5Db2xsZWN0aW9uID0gYXJndW1lbnRzWzNdKSB7XG4gICAgICAgICAgICAvLyBBIG5vbi1kb2N1bWVudGVkIDR0aCBwYXJhbWF0ZXIgZW5hYmxpbmcgY29udHJvbCBvZiBtdWx0aXBsZSBpbnN0YW5jZXNcblxuICAgICAgICAgICAgcmV0dXJuQ29sbGVjdGlvbiA9IHR5cGVvZiByZXR1cm5Db2xsZWN0aW9uID09PSAnYm9vbGVhbic7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRhaW5lciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoY29udGFpbmVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb250YWluZXIgJiYgdHlwZW9mIGNvbnRhaW5lciA9PT0gJ29iamVjdCcgJiYgaC5pc0VsZW1lbnQoY29udGFpbmVyLCBkb2MpKSB7XG4gICAgICAgICAgICBlbGVtZW50cyA9IFtjb250YWluZXJdO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbnRhaW5lciAmJiB0eXBlb2YgY29udGFpbmVyID09PSAnb2JqZWN0JyAmJiBjb250YWluZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBBbHRob3VnaCBub3QgZG9jdW1lbnRlZCwgdGhlIGNvbnRhaW5lciBtYXkgYWxzbyBiZSBhbiBhcnJheS1saWtlIGxpc3Qgb2ZcbiAgICAgICAgICAgIC8vIGVsZW1lbnRzIHN1Y2ggYXMgYSBOb2RlTGlzdCBvciBqUXVlcnkgY29sbGVjdGlvbiwgaXMgcmV0dXJuQ29sbGVjdGlvbiBpcyB0cnVlXG5cbiAgICAgICAgICAgIGVsZW1lbnRzID0gY29udGFpbmVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1peGl0dXAubWVzc2FnZXMuZXJyb3JGYWN0b3J5SW52YWxpZENvbnRhaW5lcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWl4aXR1cC5tZXNzYWdlcy5lcnJvckZhY3RvcnlDb250YWluZXJOb3RGb3VuZCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGVsID0gZWxlbWVudHNbaV07IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPiAwICYmICFyZXR1cm5Db2xsZWN0aW9uKSBicmVhaztcblxuICAgICAgICAgICAgaWYgKCFlbC5pZCkge1xuICAgICAgICAgICAgICAgIGlkID0gJ01peEl0VXAnICsgaC5yYW5kb21IZXgoKTtcblxuICAgICAgICAgICAgICAgIGVsLmlkID0gaWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlkID0gZWwuaWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtaXhpdHVwLmluc3RhbmNlc1tpZF0gaW5zdGFuY2VvZiBtaXhpdHVwLk1peGVyKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSBtaXhpdHVwLmluc3RhbmNlc1tpZF07XG5cbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZyB8fCAoY29uZmlnICYmIGNvbmZpZy5kZWJ1ZyAmJiBjb25maWcuZGVidWcuc2hvd1dhcm5pbmdzICE9PSBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKG1peGl0dXAubWVzc2FnZXMud2FybmluZ0ZhY3RvcnlQcmVleGlzdGluZ0luc3RhbmNlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgbWl4aXR1cC5NaXhlcigpO1xuXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuYXR0YWNoKGVsLCBkb2MsIGlkLCBjb25maWcpO1xuXG4gICAgICAgICAgICAgICAgbWl4aXR1cC5pbnN0YW5jZXNbaWRdID0gaW5zdGFuY2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZhY2FkZSA9IG5ldyBtaXhpdHVwLkZhY2FkZShpbnN0YW5jZSk7XG5cbiAgICAgICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLmRlYnVnICYmIGNvbmZpZy5kZWJ1Zy5lbmFibGUpIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlcy5wdXNoKGZhY2FkZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmV0dXJuQ29sbGVjdGlvbikge1xuICAgICAgICAgICAgb3V0cHV0ID0gbmV3IG1peGl0dXAuQ29sbGVjdGlvbihpbnN0YW5jZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBmaXJzdCBpbnN0YW5jZSByZWdhcmRsZXNzXG5cbiAgICAgICAgICAgIG91dHB1dCA9IGluc3RhbmNlc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgLnVzZSgpYCBzdGF0aWMgbWV0aG9kIGlzIHVzZWQgdG8gZXh0ZW5kIHRoZSBmdW5jdGlvbmFsaXR5IG9mIG1peGl0dXAgd2l0aCBjb21wYXRpYmxlXG4gICAgICogZXh0ZW5zaW9ucyBhbmQgbGlicmFyaWVzIGluIGFuIGVudmlyb25tZW50IHdpdGggbW9kdWxhciBzY29waW5nIGUuZy4gRVMyMDE1LCBDb21tb25KUywgb3IgUmVxdWlyZUpTLlxuICAgICAqXG4gICAgICogWW91IG5lZWQgb25seSBjYWxsIHRoZSBgLnVzZSgpYCBmdW5jdGlvbiBvbmNlIHBlciBwcm9qZWN0LCBwZXIgZXh0ZW5zaW9uLCBhcyBtb2R1bGUgbG9hZGVyc1xuICAgICAqIHdpbGwgY2FjaGUgYSBzaW5nbGUgcmVmZXJlbmNlIHRvIE1peEl0VXAgaW5jbHVzaXZlIG9mIGFsbCBjaGFuZ2VzIG1hZGUuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIG1peGl0dXAudXNlKGV4dGVuc2lvbilcbiAgICAgKlxuICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMTogRXh0ZW5kaW5nIE1peEl0VXAgd2l0aCB0aGUgUGFnaW5hdGlvbiBFeHRlbnNpb248L2NhcHRpb24+XG4gICAgICpcbiAgICAgKiBpbXBvcnQgbWl4aXR1cCBmcm9tICdtaXhpdHVwJztcbiAgICAgKiBpbXBvcnQgbWl4aXR1cFBhZ2luYXRpb24gZnJvbSAnbWl4aXR1cC1wYWdpbmF0aW9uJztcbiAgICAgKlxuICAgICAqIG1peGl0dXAudXNlKG1peGl0dXBQYWdpbmF0aW9uKTtcbiAgICAgKlxuICAgICAqIC8vIEFsbCBtaXhlcnMgY3JlYXRlZCBieSB0aGUgZmFjdG9yeSBmdW5jdGlvbiBpbiBhbGwgbW9kdWxlcyB3aWxsIG5vd1xuICAgICAqIC8vIGhhdmUgcGFnaW5hdGlvbiBmdW5jdGlvbmFsaXR5XG4gICAgICpcbiAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKCcuY29udGFpbmVyJyk7XG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICogQG5hbWUgICAgIHVzZVxuICAgICAqIEBtZW1iZXJvZiBtaXhpdHVwXG4gICAgICogQGtpbmQgICAgIGZ1bmN0aW9uXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBzaW5jZSAgICAzLjAuMFxuICAgICAqIEBwYXJhbSAgICB7Kn0gIGV4dGVuc2lvbiAgIEEgcmVmZXJlbmNlIHRvIHRoZSBleHRlbnNpb24gb3IgbGlicmFyeSB0byBiZSB1c2VkLlxuICAgICAqIEByZXR1cm4gICB7dm9pZH1cbiAgICAgKi9cblxuICAgIG1peGl0dXAudXNlID0gZnVuY3Rpb24oZXh0ZW5zaW9uKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5wcm90b3R5cGUuY2FsbEFjdGlvbnMuY2FsbChtaXhpdHVwLCAnYmVmb3JlVXNlJywgYXJndW1lbnRzKTtcblxuICAgICAgICAvLyBDYWxsIHRoZSBleHRlbnNpb24ncyBmYWN0b3J5IGZ1bmN0aW9uLCBwYXNzaW5nXG4gICAgICAgIC8vIHRoZSBtaXhpdHVwIGZhY3RvcnkgYXMgYSBwYXJhbWF0ZXJcblxuICAgICAgICBpZiAodHlwZW9mIGV4dGVuc2lvbiA9PT0gJ2Z1bmN0aW9uJyAmJiBleHRlbnNpb24uVFlQRSA9PT0gJ21peGl0dXAtZXh0ZW5zaW9uJykge1xuICAgICAgICAgICAgLy8gTWl4aXR1cCBleHRlbnNpb25cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtaXhpdHVwLmV4dGVuc2lvbnNbZXh0ZW5zaW9uLk5BTUVdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGV4dGVuc2lvbihtaXhpdHVwKTtcblxuICAgICAgICAgICAgICAgIG1peGl0dXAuZXh0ZW5zaW9uc1tleHRlbnNpb24uTkFNRV0gPSBleHRlbnNpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZXh0ZW5zaW9uLmZuICYmIGV4dGVuc2lvbi5mbi5qcXVlcnkpIHtcbiAgICAgICAgICAgIC8vIGpRdWVyeVxuXG4gICAgICAgICAgICBtaXhpdHVwLmxpYnJhcmllcy4kID0gZXh0ZW5zaW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgbWl4aXR1cC5CYXNlLnByb3RvdHlwZS5jYWxsQWN0aW9ucy5jYWxsKG1peGl0dXAsICdhZnRlclVzZScsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuaW5zdGFuY2VzICAgPSB7fTtcbiAgICBtaXhpdHVwLmV4dGVuc2lvbnMgID0ge307XG4gICAgbWl4aXR1cC5saWJyYXJpZXMgICA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cblxuICAgIGggPSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gICBlbFxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgY2xzXG4gICAgICAgICAqIEByZXR1cm4gIHtib29sZWFufVxuICAgICAgICAgKi9cblxuICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24oZWwsIGNscykge1xuICAgICAgICAgICAgcmV0dXJuICEhZWwuY2xhc3NOYW1lLm1hdGNoKG5ldyBSZWdFeHAoJyhcXFxcc3xeKScgKyBjbHMgKyAnKFxcXFxzfCQpJykpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7SFRNTEVsZW1lbnR9ICAgZWxcbiAgICAgICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICAgIGNsc1xuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uKGVsLCBjbHMpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNDbGFzcyhlbCwgY2xzKSkgZWwuY2xhc3NOYW1lICs9IGVsLmNsYXNzTmFtZSA/ICcgJyArIGNscyA6IGNscztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge0hUTUxFbGVtZW50fSAgIGVsXG4gICAgICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgICBjbHNcbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbihlbCwgY2xzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNDbGFzcyhlbCwgY2xzKSkge1xuICAgICAgICAgICAgICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKCcoXFxcXHN8XiknICsgY2xzICsgJyhcXFxcc3wkKScpO1xuXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UocmVnLCAnICcpLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBzb3VyY2Ugb2JqZWN0IG9udG8gdGhlXG4gICAgICAgICAqIHRhcmdldCBvYmplY3QuIEFsdGVycyB0aGUgdGFyZ2V0IG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge29iamVjdH0gICAgZGVzdGluYXRpb25cbiAgICAgICAgICogQHBhcmFtICAge29iamVjdH0gICAgc291cmNlXG4gICAgICAgICAqIEBwYXJhbSAgIHtib29sZWFufSAgIFtkZWVwPWZhbHNlXVxuICAgICAgICAgKiBAcGFyYW0gICB7Ym9vbGVhbn0gICBbaGFuZGxlRXJyb3JzPWZhbHNlXVxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgZXh0ZW5kOiBmdW5jdGlvbihkZXN0aW5hdGlvbiwgc291cmNlLCBkZWVwLCBoYW5kbGVFcnJvcnMpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2VLZXlzICA9IFtdLFxuICAgICAgICAgICAgICAgIGtleSAgICAgICAgID0gJycsXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgZGVlcCA9IGRlZXAgfHwgZmFsc2U7XG4gICAgICAgICAgICBoYW5kbGVFcnJvcnMgPSBoYW5kbGVFcnJvcnMgfHwgZmFsc2U7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VLZXlzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghZGVlcCB8fCB0eXBlb2Ygc291cmNlW2tleV0gIT09ICdvYmplY3QnIHx8IHRoaXMuaXNFbGVtZW50KHNvdXJjZVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWxsIG5vbi1vYmplY3QgcHJvcGVydGllcywgb3IgYWxsIHByb3BlcnRpZXMgaWYgc2hhbGxvdyBleHRlbmRcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc291cmNlW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBcnJheXNcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkZXN0aW5hdGlvbltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dGVuZChkZXN0aW5hdGlvbltrZXldLCBzb3VyY2Vba2V5XSwgZGVlcCwgaGFuZGxlRXJyb3JzKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9iamVjdHNcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkZXN0aW5hdGlvbltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dGVuZChkZXN0aW5hdGlvbltrZXldLCBzb3VyY2Vba2V5XSwgZGVlcCwgaGFuZGxlRXJyb3JzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZUVycm9ycykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUV4dGVuZEVycm9yKGVyciwgZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZXN0aW5hdGlvbjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge0Vycm9yfSAgZXJyXG4gICAgICAgICAqIEBwYXJhbSAgIHtvYmplY3R9IGRlc3RpbmF0aW9uXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBoYW5kbGVFeHRlbmRFcnJvcjogZnVuY3Rpb24oZXJyLCBkZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgdmFyIHJlICAgICAgICAgICAgICAgICAgPSAvcHJvcGVydHkgXCI/KFxcdyopXCI/Wyw6XSBvYmplY3QvaSxcbiAgICAgICAgICAgICAgICBtYXRjaGVzICAgICAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBlcnJvbmVvdXMgICAgICAgICAgID0gJycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZSAgICAgICAgICAgICA9ICcnLFxuICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb24gICAgICAgICAgPSAnJyxcbiAgICAgICAgICAgICAgICBwcm9iYWJsZU1hdGNoICAgICAgID0gJycsXG4gICAgICAgICAgICAgICAga2V5ICAgICAgICAgICAgICAgICA9ICcnLFxuICAgICAgICAgICAgICAgIG1vc3RNYXRjaGluZ0NoYXJzICAgPSAtMSxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICAgICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBUeXBlRXJyb3IgJiYgKG1hdGNoZXMgPSByZS5leGVjKGVyci5tZXNzYWdlKSkpIHtcbiAgICAgICAgICAgICAgICBlcnJvbmVvdXMgPSBtYXRjaGVzWzFdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChrZXkgaW4gZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGkgPCBlcnJvbmVvdXMubGVuZ3RoICYmIGVycm9uZW91cy5jaGFyQXQoaSkgPT09IGtleS5jaGFyQXQoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID4gbW9zdE1hdGNoaW5nQ2hhcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vc3RNYXRjaGluZ0NoYXJzID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2JhYmxlTWF0Y2ggPSBrZXk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobW9zdE1hdGNoaW5nQ2hhcnMgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb24gPSBtaXhpdHVwLm1lc3NhZ2VzLmVycm9yQ29uZmlnSW52YWxpZFByb3BlcnR5U3VnZ2VzdGlvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9iYWJsZU1hdGNoOiBwcm9iYWJsZU1hdGNoXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtaXhpdHVwLm1lc3NhZ2VzLmVycm9yQ29uZmlnSW52YWxpZFByb3BlcnR5KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb25lb3VzOiBlcnJvbmVvdXMsXG4gICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb246IHN1Z2dlc3Rpb25cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge3N0cmluZ30gc3RyXG4gICAgICAgICAqIEByZXR1cm4gIHtmdW5jdGlvbn1cbiAgICAgICAgICovXG5cbiAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICAgICAgdmFyIHJlICAgICAgICAgID0gL1xcJHsoW1xcd10qKX0vZyxcbiAgICAgICAgICAgICAgICBkeW5hbWljcyAgICA9IHt9LFxuICAgICAgICAgICAgICAgIG1hdGNoZXMgICAgID0gbnVsbDtcblxuICAgICAgICAgICAgd2hpbGUgKChtYXRjaGVzID0gcmUuZXhlYyhzdHIpKSkge1xuICAgICAgICAgICAgICAgIGR5bmFtaWNzW21hdGNoZXNbMV1dID0gbmV3IFJlZ0V4cCgnXFxcXCR7JyArIG1hdGNoZXNbMV0gKyAnfScsICdnJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSAgICAgPSAnJyxcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICA9IHN0cjtcblxuICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgZm9yIChrZXkgaW4gZHluYW1pY3MpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LnJlcGxhY2UoZHluYW1pY3Nba2V5XSwgdHlwZW9mIGRhdGFba2V5XSAhPT0gJ3VuZGVmaW5lZCcgPyBkYXRhW2tleV0gOiAnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gICBlbFxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgdHlwZVxuICAgICAgICAgKiBAcGFyYW0gICB7ZnVuY3Rpb259ICAgICAgZm5cbiAgICAgICAgICogQHBhcmFtICAge2Jvb2xlYW59ICAgICAgIHVzZUNhcHR1cmVcbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIG9uOiBmdW5jdGlvbihlbCwgdHlwZSwgZm4sIHVzZUNhcHR1cmUpIHtcbiAgICAgICAgICAgIGlmICghZWwpIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWwuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBlbFsnZScgKyB0eXBlICsgZm5dID0gZm47XG5cbiAgICAgICAgICAgICAgICBlbFt0eXBlICsgZm5dID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsWydlJyArIHR5cGUgKyBmbl0od2luZG93LmV2ZW50KTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgZWwuYXR0YWNoRXZlbnQoJ29uJyArIHR5cGUsIGVsW3R5cGUgKyBmbl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7SFRNTEVsZW1lbnR9ICAgZWxcbiAgICAgICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICAgIHR5cGVcbiAgICAgICAgICogQHBhcmFtICAge2Z1bmN0aW9ufSAgICAgIGZuXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBvZmY6IGZ1bmN0aW9uKGVsLCB0eXBlLCBmbikge1xuICAgICAgICAgICAgaWYgKCFlbCkgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAoZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWwuZGV0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBlbC5kZXRhY2hFdmVudCgnb24nICsgdHlwZSwgZWxbdHlwZSArIGZuXSk7XG4gICAgICAgICAgICAgICAgZWxbdHlwZSArIGZuXSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgZXZlbnRUeXBlXG4gICAgICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgICAgZGV0YWlsXG4gICAgICAgICAqIEBwYXJhbSAgIHtEb2N1bWVudH0gICAgW2RvY11cbiAgICAgICAgICogQHJldHVybiAge0N1c3RvbUV2ZW50fVxuICAgICAgICAgKi9cblxuICAgICAgICBnZXRDdXN0b21FdmVudDogZnVuY3Rpb24oZXZlbnRUeXBlLCBkZXRhaWwsIGRvYykge1xuICAgICAgICAgICAgdmFyIGV2ZW50ID0gbnVsbDtcblxuICAgICAgICAgICAgZG9jID0gZG9jIHx8IHdpbmRvdy5kb2N1bWVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBldmVudCA9IG5ldyB3aW5kb3cuQ3VzdG9tRXZlbnQoZXZlbnRUeXBlLCB7XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbDogZGV0YWlsLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2MuY3JlYXRlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBldmVudCA9IGRvYy5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgICAgICAgICBldmVudC5pbml0Q3VzdG9tRXZlbnQoZXZlbnRUeXBlLCB0cnVlLCB0cnVlLCBkZXRhaWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBldmVudCA9IGRvYy5jcmVhdGVFdmVudE9iamVjdCgpLFxuICAgICAgICAgICAgICAgIGV2ZW50LnR5cGUgPSBldmVudFR5cGU7XG5cbiAgICAgICAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGV2ZW50LmRldGFpbCA9IGRldGFpbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7RXZlbnR9IGVcbiAgICAgICAgICogQHJldHVybiAge0V2ZW50fVxuICAgICAgICAgKi9cblxuICAgICAgICBnZXRPcmlnaW5hbEV2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS50b3VjaGVzICYmIGUudG91Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZS50b3VjaGVzWzBdO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7SFRNTEVsZW1lbnR9ICAgZWxcbiAgICAgICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICAgIHNlbGVjdG9yXG4gICAgICAgICAqIEByZXR1cm4gIHtOdW1iZXJ9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGluZGV4OiBmdW5jdGlvbihlbCwgc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHZhciBpID0gMDtcblxuICAgICAgICAgICAgd2hpbGUgKChlbCA9IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgICAgICAgICArK2k7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29udmVydHMgYSBkYXNoIG9yIHNuYWtlLWNhc2Ugc3RyaW5nIHRvIGNhbWVsIGNhc2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgIHN0clxuICAgICAgICAgKiBAcGFyYW0gICB7Ym9vbGVhbn0gICBbaXNQYXNjYWxdXG4gICAgICAgICAqIEByZXR1cm4gIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGNhbWVsQ2FzZTogZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvKFtfLV1bYS16XSkvZywgZnVuY3Rpb24oJDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJDEudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9bXy1dLywgJycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnZlcnRzIGEgZGFzaCBvciBzbmFrZS1jYXNlIHN0cmluZyB0byBwYXNjYWwgY2FzZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge3N0cmluZ30gICAgc3RyXG4gICAgICAgICAqIEBwYXJhbSAgIHtib29sZWFufSAgIFtpc1Bhc2NhbF1cbiAgICAgICAgICogQHJldHVybiAge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICAgICAgcGFzY2FsQ2FzZTogZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gKHN0ciA9IHRoaXMuY2FtZWxDYXNlKHN0cikpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb252ZXJ0cyBhIGNhbWVsIG9yIHBhc2NhbC1jYXNlIHN0cmluZyB0byBkYXNoIGNhc2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgIHN0clxuICAgICAgICAgKiBAcmV0dXJuICB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgICAgICBkYXNoQ2FzZTogZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgJy0kMScpLnJlcGxhY2UoL14tLywgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gICAgICAgZWxcbiAgICAgICAgICogQHBhcmFtICAge0hUTUxIdG1sRWxlbWVudH0gICBbZG9jXVxuICAgICAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn1cbiAgICAgICAgICovXG5cbiAgICAgICAgaXNFbGVtZW50OiBmdW5jdGlvbihlbCwgZG9jKSB7XG4gICAgICAgICAgICBkb2MgPSBkb2MgfHwgd2luZG93LmRvY3VtZW50O1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgd2luZG93LkhUTUxFbGVtZW50ICYmXG4gICAgICAgICAgICAgICAgZWwgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICBkb2MuZGVmYXVsdFZpZXcgJiZcbiAgICAgICAgICAgICAgICBkb2MuZGVmYXVsdFZpZXcuSFRNTEVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICBlbCBpbnN0YW5jZW9mIGRvYy5kZWZhdWx0Vmlldy5IVE1MRWxlbWVudFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIGVsICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgIGVsLm5vZGVUeXBlID09PSAxICYmXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBlbC5ub2RlTmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgICAgIGh0bWxTdHJpbmdcbiAgICAgICAgICogQHBhcmFtICAge0hUTUxIdG1sRWxlbWVudH0gICBbZG9jXVxuICAgICAgICAgKiBAcmV0dXJuICB7RG9jdW1lbnRGcmFnbWVudH1cbiAgICAgICAgICovXG5cbiAgICAgICAgY3JlYXRlRWxlbWVudDogZnVuY3Rpb24oaHRtbFN0cmluZywgZG9jKSB7XG4gICAgICAgICAgICB2YXIgZnJhZyA9IG51bGwsXG4gICAgICAgICAgICAgICAgdGVtcCA9IG51bGw7XG5cbiAgICAgICAgICAgIGRvYyA9IGRvYyB8fCB3aW5kb3cuZG9jdW1lbnQ7XG5cbiAgICAgICAgICAgIGZyYWcgPSBkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgdGVtcCA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgdGVtcC5pbm5lckhUTUwgPSBodG1sU3RyaW5nLnRyaW0oKTtcblxuICAgICAgICAgICAgd2hpbGUgKHRlbXAuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGZyYWcuYXBwZW5kQ2hpbGQodGVtcC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZyYWc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtOb2RlfSBub2RlXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICByZW1vdmVXaGl0ZXNwYWNlOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICB2YXIgZGVsZXRpbmc7XG5cbiAgICAgICAgICAgIHdoaWxlIChub2RlICYmIG5vZGUubm9kZU5hbWUgPT09ICcjdGV4dCcpIHtcbiAgICAgICAgICAgICAgICBkZWxldGluZyA9IG5vZGU7XG5cbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5wcmV2aW91c1NpYmxpbmc7XG5cbiAgICAgICAgICAgICAgICBkZWxldGluZy5wYXJlbnRFbGVtZW50ICYmIGRlbGV0aW5nLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZGVsZXRpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7QXJyYXk8Kj59ICBhXG4gICAgICAgICAqIEBwYXJhbSAgIHtBcnJheTwqPn0gIGJcbiAgICAgICAgICogQHJldHVybiAge2Jvb2xlYW59XG4gICAgICAgICAqL1xuXG4gICAgICAgIGlzRXF1YWxBcnJheTogZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgdmFyIGkgPSBhLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKGkgIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge29iamVjdH0gIGFcbiAgICAgICAgICogQHBhcmFtICAge29iamVjdH0gIGJcbiAgICAgICAgICogQHJldHVybiAge2Jvb2xlYW59XG4gICAgICAgICAqL1xuXG4gICAgICAgIGRlZXBFcXVhbHM6IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcgJiYgYSAmJiB0eXBlb2YgYiA9PT0gJ29iamVjdCcgJiYgYikge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhhKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgZm9yIChrZXkgaW4gYSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWIuaGFzT3duUHJvcGVydHkoa2V5KSB8fCAhdGhpcy5kZWVwRXF1YWxzKGFba2V5XSwgYltrZXldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYSAhPT0gYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtBcnJheTwqPn0gIG9sZEFycmF5XG4gICAgICAgICAqIEByZXR1cm4gIHtBcnJheTwqPn1cbiAgICAgICAgICovXG5cbiAgICAgICAgYXJyYXlTaHVmZmxlOiBmdW5jdGlvbihvbGRBcnJheSkge1xuICAgICAgICAgICAgdmFyIG5ld0FycmF5ICAgID0gb2xkQXJyYXkuc2xpY2UoKSxcbiAgICAgICAgICAgICAgICBsZW4gICAgICAgICA9IG5ld0FycmF5Lmxlbmd0aCxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICA9IGxlbixcbiAgICAgICAgICAgICAgICBwICAgICAgICAgICA9IC0xLFxuICAgICAgICAgICAgICAgIHQgICAgICAgICAgID0gW107XG5cbiAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgICBwID0gfn4oTWF0aC5yYW5kb20oKSAqIGxlbik7XG4gICAgICAgICAgICAgICAgdCA9IG5ld0FycmF5W2ldO1xuXG4gICAgICAgICAgICAgICAgbmV3QXJyYXlbaV0gPSBuZXdBcnJheVtwXTtcbiAgICAgICAgICAgICAgICBuZXdBcnJheVtwXSA9IHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge29iamVjdH0gICAgbGlzdFxuICAgICAgICAgKi9cblxuICAgICAgICBhcnJheUZyb21MaXN0OiBmdW5jdGlvbihsaXN0KSB7XG4gICAgICAgICAgICB2YXIgb3V0cHV0LCBpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChsaXN0KTtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gW107XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChsaXN0W2ldKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7ZnVuY3Rpb259ICBmdW5jXG4gICAgICAgICAqIEBwYXJhbSAgIHtOdW1iZXJ9ICAgIHdhaXRcbiAgICAgICAgICogQHBhcmFtICAge2Jvb2xlYW59ICAgaW1tZWRpYXRlXG4gICAgICAgICAqIEByZXR1cm4gIHtmdW5jdGlvbn1cbiAgICAgICAgICovXG5cbiAgICAgICAgZGVib3VuY2U6IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgICAgICAgICAgdmFyIHRpbWVvdXQ7XG5cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBhcmdzICAgICA9IGFyZ3VtZW50cyxcbiAgICAgICAgICAgICAgICAgICAgY2FsbE5vdyAgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgIGxhdGVyICAgID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuYy5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG5cbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gICBlbGVtZW50XG4gICAgICAgICAqIEByZXR1cm4gIHtvYmplY3R9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHBvc2l0aW9uOiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgeFBvc2l0aW9uICAgICAgID0gMCxcbiAgICAgICAgICAgICAgICB5UG9zaXRpb24gICAgICAgPSAwLFxuICAgICAgICAgICAgICAgIG9mZnNldFBhcmVudCAgICA9IGVsZW1lbnQ7XG5cbiAgICAgICAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgeFBvc2l0aW9uIC09IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICB5UG9zaXRpb24gLT0gZWxlbWVudC5zY3JvbGxUb3A7XG5cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gb2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHhQb3NpdGlvbiArPSBlbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHlQb3NpdGlvbiArPSBlbGVtZW50Lm9mZnNldFRvcDtcblxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRQYXJlbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IHhQb3NpdGlvbixcbiAgICAgICAgICAgICAgICB5OiB5UG9zaXRpb25cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgIG5vZGUxXG4gICAgICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgIG5vZGUyXG4gICAgICAgICAqIEByZXR1cm4gIHtOdW1iZXJ9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGdldEh5cG90ZW51c2U6IGZ1bmN0aW9uKG5vZGUxLCBub2RlMikge1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlWCA9IG5vZGUxLnggLSBub2RlMi54LFxuICAgICAgICAgICAgICAgIGRpc3RhbmNlWSA9IG5vZGUxLnkgLSBub2RlMi55O1xuXG4gICAgICAgICAgICBkaXN0YW5jZVggPSBkaXN0YW5jZVggPCAwID8gZGlzdGFuY2VYICogLTEgOiBkaXN0YW5jZVgsXG4gICAgICAgICAgICBkaXN0YW5jZVkgPSBkaXN0YW5jZVkgPCAwID8gZGlzdGFuY2VZICogLTEgOiBkaXN0YW5jZVk7XG5cbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coZGlzdGFuY2VYLCAyKSArIE1hdGgucG93KGRpc3RhbmNlWSwgMikpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxjdWF0ZXMgdGhlIGFyZWEgb2YgaW50ZXJzZWN0aW9uIGJldHdlZW4gdHdvIHJlY3RhbmdsZXMgYW5kIGV4cHJlc3NlcyBpdCBhc1xuICAgICAgICAgKiBhIHJhdGlvIGluIGNvbXBhcmlzb24gdG8gdGhlIGFyZWEgb2YgdGhlIGZpcnN0IHJlY3RhbmdsZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge1JlY3R9ICBib3gxXG4gICAgICAgICAqIEBwYXJhbSAgIHtSZWN0fSAgYm94MlxuICAgICAgICAgKiBAcmV0dXJuICB7bnVtYmVyfVxuICAgICAgICAgKi9cblxuICAgICAgICBnZXRJbnRlcnNlY3Rpb25SYXRpbzogZnVuY3Rpb24oYm94MSwgYm94Mikge1xuICAgICAgICAgICAgdmFyIGNvbnRyb2xBcmVhICAgICAgICAgPSBib3gxLndpZHRoICogYm94MS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgaW50ZXJzZWN0aW9uWCAgICAgICA9IC0xLFxuICAgICAgICAgICAgICAgIGludGVyc2VjdGlvblkgICAgICAgPSAtMSxcbiAgICAgICAgICAgICAgICBpbnRlcnNlY3Rpb25BcmVhICAgID0gLTEsXG4gICAgICAgICAgICAgICAgcmF0aW8gICAgICAgICAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBpbnRlcnNlY3Rpb25YID1cbiAgICAgICAgICAgICAgICBNYXRoLm1heCgwLCBNYXRoLm1pbihib3gxLmxlZnQgKyBib3gxLndpZHRoLCBib3gyLmxlZnQgKyBib3gyLndpZHRoKSAtIE1hdGgubWF4KGJveDEubGVmdCwgYm94Mi5sZWZ0KSk7XG5cbiAgICAgICAgICAgIGludGVyc2VjdGlvblkgPVxuICAgICAgICAgICAgICAgIE1hdGgubWF4KDAsIE1hdGgubWluKGJveDEudG9wICsgYm94MS5oZWlnaHQsIGJveDIudG9wICsgYm94Mi5oZWlnaHQpIC0gTWF0aC5tYXgoYm94MS50b3AsIGJveDIudG9wKSk7XG5cbiAgICAgICAgICAgIGludGVyc2VjdGlvbkFyZWEgPSBpbnRlcnNlY3Rpb25ZICogaW50ZXJzZWN0aW9uWDtcblxuICAgICAgICAgICAgcmF0aW8gPSBpbnRlcnNlY3Rpb25BcmVhIC8gY29udHJvbEFyZWE7XG5cbiAgICAgICAgICAgIHJldHVybiByYXRpbztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge29iamVjdH0gICAgICAgICAgICBlbFxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgICAgIHNlbGVjdG9yXG4gICAgICAgICAqIEBwYXJhbSAgIHtib29sZWFufSAgICAgICAgICAgW2luY2x1ZGVTZWxmXVxuICAgICAgICAgKiBAcGFyYW0gICB7SFRNTEh0bWxFbGVtZW50fSAgIFtkb2NdXG4gICAgICAgICAqIEByZXR1cm4gIHtFbGVtZW50fG51bGx9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGNsb3Nlc3RQYXJlbnQ6IGZ1bmN0aW9uKGVsLCBzZWxlY3RvciwgaW5jbHVkZVNlbGYsIGRvYykge1xuICAgICAgICAgICAgdmFyIHBhcmVudCAgPSBlbC5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICBkb2MgPSBkb2MgfHwgd2luZG93LmRvY3VtZW50O1xuXG4gICAgICAgICAgICBpZiAoaW5jbHVkZVNlbGYgJiYgZWwubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50ICE9IGRvYy5ib2R5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5tYXRjaGVzICYmIHBhcmVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge0hUTUxFbGVtZW50fSAgICAgICBlbFxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgICAgIHNlbGVjdG9yXG4gICAgICAgICAqIEBwYXJhbSAgIHtIVE1MSHRtbEVsZW1lbnR9ICAgW2RvY11cbiAgICAgICAgICogQHJldHVybiAge05vZGVMaXN0fVxuICAgICAgICAgKi9cblxuICAgICAgICBjaGlsZHJlbjogZnVuY3Rpb24oZWwsIHNlbGVjdG9yLCBkb2MpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiAgICA9IFtdLFxuICAgICAgICAgICAgICAgIHRlbXBJZCAgICAgID0gJyc7XG5cbiAgICAgICAgICAgIGRvYyA9IGRvYyB8fCB3aW5kb3cuZG9jO1xuXG4gICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWVsLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBJZCA9ICdUZW1wJyArIHRoaXMucmFuZG9tSGV4S2V5KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgZWwuaWQgPSB0ZW1wSWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gPSBkb2MucXVlcnlTZWxlY3RvckFsbCgnIycgKyBlbC5pZCArICcgPiAnICsgc2VsZWN0b3IpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRlbXBJZCkge1xuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBjbG9uZSBvZiBhIHByb3ZpZGVkIGFycmF5LCB3aXRoIGFueSBlbXB0eSBzdHJpbmdzIHJlbW92ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtBcnJheTwqPn0gb3JpZ2luYWxBcnJheVxuICAgICAgICAgKiBAcmV0dXJuICB7QXJyYXk8Kj59XG4gICAgICAgICAqL1xuXG4gICAgICAgIGNsZWFuOiBmdW5jdGlvbihvcmlnaW5hbEFycmF5KSB7XG4gICAgICAgICAgICB2YXIgY2xlYW5BcnJheSA9IFtdLFxuICAgICAgICAgICAgICAgIGkgPSAtMTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG9yaWdpbmFsQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxBcnJheVtpXSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW5BcnJheS5wdXNoKG9yaWdpbmFsQXJyYXlbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNsZWFuQXJyYXk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFic3RyYWN0cyBhbiBFUzYgcHJvbWlzZSBpbnRvIGEgcS1saWtlIGRlZmVycmVkIGludGVyZmFjZSBmb3Igc3RvcmFnZSBhbmQgZGVmZXJyZWQgcmVzb2x1dGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICB7b2JqZWN0fSBsaWJyYXJpZXNcbiAgICAgICAgICogQHJldHVybiB7aC5EZWZlcnJlZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgZGVmZXI6IGZ1bmN0aW9uKGxpYnJhcmllcykge1xuICAgICAgICAgICAgdmFyIGRlZmVycmVkICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBwcm9taXNlV3JhcHBlciA9IG51bGwsXG4gICAgICAgICAgICAgICAgJCAgICAgICAgICAgICAgPSBudWxsO1xuXG4gICAgICAgICAgICBwcm9taXNlV3JhcHBlciA9IG5ldyB0aGlzLkRlZmVycmVkKCk7XG5cbiAgICAgICAgICAgIGlmIChtaXhpdHVwLmZlYXR1cmVzLmhhcy5wcm9taXNlcykge1xuICAgICAgICAgICAgICAgIC8vIEVTNiBuYXRpdmUgcHJvbWlzZSBvciBwb2x5ZmlsbFxuXG4gICAgICAgICAgICAgICAgcHJvbWlzZVdyYXBwZXIucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlV3JhcHBlci5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZVdyYXBwZXIucmVqZWN0ICA9IHJlamVjdDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKCQgPSAod2luZG93LmpRdWVyeSB8fCBsaWJyYXJpZXMuJCkpICYmIHR5cGVvZiAkLkRlZmVycmVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgLy8galF1ZXJ5XG5cbiAgICAgICAgICAgICAgICBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblxuICAgICAgICAgICAgICAgIHByb21pc2VXcmFwcGVyLnByb21pc2UgPSBkZWZlcnJlZC5wcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgcHJvbWlzZVdyYXBwZXIucmVzb2x2ZSA9IGRlZmVycmVkLnJlc29sdmU7XG4gICAgICAgICAgICAgICAgcHJvbWlzZVdyYXBwZXIucmVqZWN0ICA9IGRlZmVycmVkLnJlamVjdDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmNvbnNvbGUpIHtcbiAgICAgICAgICAgICAgICAvLyBObyBpbXBsZW1lbnRhdGlvblxuXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKG1peGl0dXAubWVzc2FnZXMud2FybmluZ05vUHJvbWlzZUltcGxlbWVudGF0aW9uKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVdyYXBwZXI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtBcnJheTxQcm9taXNlPn0gICAgdGFza3NcbiAgICAgICAgICogQHBhcmFtICAge29iamVjdH0gICAgICAgICAgICBsaWJyYXJpZXNcbiAgICAgICAgICogQHJldHVybiAge1Byb21pc2U8QXJyYXk+fVxuICAgICAgICAgKi9cblxuICAgICAgICBhbGw6IGZ1bmN0aW9uKHRhc2tzLCBsaWJyYXJpZXMpIHtcbiAgICAgICAgICAgIHZhciAkID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKG1peGl0dXAuZmVhdHVyZXMuaGFzLnByb21pc2VzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHRhc2tzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKCQgPSAod2luZG93LmpRdWVyeSB8fCBsaWJyYXJpZXMuJCkpICYmIHR5cGVvZiAkLndoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJC53aGVuLmFwcGx5KCQsIHRhc2tzKVxuICAgICAgICAgICAgICAgICAgICAuZG9uZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGpRdWVyeSB3aGVuIHJldHVybnMgc3ByZWFkIGFyZ3VtZW50cyByYXRoZXIgdGhhbiBhbiBhcnJheSBvciByZXNvbHV0aW9uc1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTm8gaW1wbGVtZW50YXRpb25cblxuICAgICAgICAgICAgaWYgKHdpbmRvdy5jb25zb2xlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKG1peGl0dXAubWVzc2FnZXMud2FybmluZ05vUHJvbWlzZUltcGxlbWVudGF0aW9uKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gICBlbFxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgcHJvcGVydHlcbiAgICAgICAgICogQHBhcmFtICAge0FycmF5PHN0cmluZz59IHZlbmRvcnNcbiAgICAgICAgICogQHJldHVybiAge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICAgICAgZ2V0UHJlZml4OiBmdW5jdGlvbihlbCwgcHJvcGVydHksIHZlbmRvcnMpIHtcbiAgICAgICAgICAgIHZhciBpICAgICAgID0gLTEsXG4gICAgICAgICAgICAgICAgcHJlZml4ICA9ICcnO1xuXG4gICAgICAgICAgICBpZiAoaC5kYXNoQ2FzZShwcm9wZXJ0eSkgaW4gZWwuc3R5bGUpIHJldHVybiAnJztcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgcHJlZml4ID0gdmVuZG9yc1tpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCArIHByb3BlcnR5IGluIGVsLnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmVmaXgudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAndW5zdXBwb3J0ZWQnO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJuICB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgICAgICByYW5kb21IZXg6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICgnMDAwMDAnICsgKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNiA8PCAwKS50b1N0cmluZygxNikpLnN1YnN0cigtNikudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge0hUTUxEb2N1bWVudH0gIFtkb2NdXG4gICAgICAgICAqIEByZXR1cm4gIHtvYmplY3R9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGdldERvY3VtZW50U3RhdGU6IGZ1bmN0aW9uKGRvYykge1xuICAgICAgICAgICAgZG9jID0gdHlwZW9mIGRvYy5ib2R5ID09PSAnb2JqZWN0JyA/IGRvYyA6IHdpbmRvdy5kb2N1bWVudDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0OiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgZG9jSGVpZ2h0OiBkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgICAgICBkb2NXaWR0aDogZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCxcbiAgICAgICAgICAgICAgICB2aWV3cG9ydEhlaWdodDogZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgICAgICAgdmlld3BvcnRXaWR0aDogZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge29iamVjdH0gICAgb2JqXG4gICAgICAgICAqIEBwYXJhbSAgIHtmdW5jdGlvbn0gIGZuXG4gICAgICAgICAqIEByZXR1cm4gIHtmdW5jdGlvbn1cbiAgICAgICAgICovXG5cbiAgICAgICAgYmluZDogZnVuY3Rpb24ob2JqLCBmbikge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShvYmosIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7SFRNTEVsZW1lbnR9ICAgZWxcbiAgICAgICAgICogQHJldHVybiAge2Jvb2xlYW59XG4gICAgICAgICAqL1xuXG4gICAgICAgIGlzVmlzaWJsZTogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZXMgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoZWwub2Zmc2V0UGFyZW50KSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgc3R5bGVzLnBvc2l0aW9uID09PSAnZml4ZWQnICYmXG4gICAgICAgICAgICAgICAgc3R5bGVzLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nICYmXG4gICAgICAgICAgICAgICAgc3R5bGVzLm9wYWNpdHkgIT09ICcwJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy8gRml4ZWQgZWxlbWVudHMgcmVwb3J0IG5vIG9mZnNldFBhcmVudCxcbiAgICAgICAgICAgICAgICAvLyBidXQgbWF5IHN0aWxsIGJlIGludmlzaWJsZVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICAge29iamVjdH0gICAgb2JqXG4gICAgICAgICAqL1xuXG4gICAgICAgIHNlYWw6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBPYmplY3Quc2VhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5zZWFsKG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgIG9ialxuICAgICAgICAgKi9cblxuICAgICAgICBmcmVlemU6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZnJlZXplID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICBjb250cm9sXG4gICAgICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgIHNwZWNpbWVuXG4gICAgICAgICAqIEByZXR1cm4gIHtib29sZWFufVxuICAgICAgICAgKi9cblxuICAgICAgICBjb21wYXJlVmVyc2lvbnM6IGZ1bmN0aW9uKGNvbnRyb2wsIHNwZWNpbWVuKSB7XG4gICAgICAgICAgICB2YXIgY29udHJvbFBhcnRzICAgID0gY29udHJvbC5zcGxpdCgnLicpLFxuICAgICAgICAgICAgICAgIHNwZWNpbWVuUGFydHMgICA9IHNwZWNpbWVuLnNwbGl0KCcuJyksXG4gICAgICAgICAgICAgICAgY29udHJvbFBhcnQgICAgID0gLTEsXG4gICAgICAgICAgICAgICAgc3BlY2ltZW5QYXJ0ICAgID0gLTEsXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb250cm9sUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb250cm9sUGFydCAgICAgPSBwYXJzZUludChjb250cm9sUGFydHNbaV0ucmVwbGFjZSgvW15cXGQuXS9nLCAnJykpO1xuICAgICAgICAgICAgICAgIHNwZWNpbWVuUGFydCAgICA9IHBhcnNlSW50KHNwZWNpbWVuUGFydHNbaV0ucmVwbGFjZSgvW15cXGQuXS9nLCAnJykgfHwgMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3BlY2ltZW5QYXJ0IDwgY29udHJvbFBhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3BlY2ltZW5QYXJ0ID4gY29udHJvbFBhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGNvbnN0cnVjdG9yXG4gICAgICAgICAqL1xuXG4gICAgICAgIERlZmVycmVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMucHJvbWlzZSAgICA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnJlc29sdmUgICAgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5yZWplY3QgICAgID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaWQgICAgICAgICA9IGgucmFuZG9tSGV4KCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICBvYmpcbiAgICAgICAgICogQHJldHVybiAge2Jvb2xlYW59XG4gICAgICAgICAqL1xuXG4gICAgICAgIGlzRW1wdHlPYmplY3Q6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgdmFyIGtleSA9ICcnO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5rZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSAgIHttaXhpdHVwLkNvbmZpZy5DbGFzc05hbWVzfSAgIGNsYXNzTmFtZXNcbiAgICAgICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgZWxlbWVudE5hbWVcbiAgICAgICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgW21vZGlmaWVyXVxuICAgICAgICAgKiBAcmV0dXJuICB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgICAgICBnZXRDbGFzc25hbWU6IGZ1bmN0aW9uKGNsYXNzTmFtZXMsIGVsZW1lbnROYW1lLCBtb2RpZmllcikge1xuICAgICAgICAgICAgdmFyIGNsYXNzbmFtZSA9ICcnO1xuXG4gICAgICAgICAgICBjbGFzc25hbWUgKz0gY2xhc3NOYW1lcy5ibG9jaztcblxuICAgICAgICAgICAgaWYgKGNsYXNzbmFtZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjbGFzc25hbWUgKz0gY2xhc3NOYW1lcy5kZWxpbmVhdG9yRWxlbWVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2xhc3NuYW1lICs9IGNsYXNzTmFtZXNbJ2VsZW1lbnQnICsgdGhpcy5wYXNjYWxDYXNlKGVsZW1lbnROYW1lKV07XG5cbiAgICAgICAgICAgIGlmICghbW9kaWZpZXIpIHJldHVybiBjbGFzc25hbWU7XG5cbiAgICAgICAgICAgIGlmIChjbGFzc25hbWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NuYW1lICs9IGNsYXNzTmFtZXMuZGVsaW5lYXRvck1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbGFzc25hbWUgKz0gbW9kaWZpZXI7XG5cbiAgICAgICAgICAgIHJldHVybiBjbGFzc25hbWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIGEgcHJvcGVydHkgb24gYSBnaXZlbiBvYmplY3QgdmlhIGl0cyBzdHJpbmcga2V5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgICBvYmpcbiAgICAgICAgICogQHBhcmFtICAge3N0cmluZ30gICAgc3RyaW5nS2V5XG4gICAgICAgICAqIEByZXR1cm4gIHsqfSB2YWx1ZVxuICAgICAgICAgKi9cblxuICAgICAgICBnZXRQcm9wZXJ0eTogZnVuY3Rpb24ob2JqLCBzdHJpbmdLZXkpIHtcbiAgICAgICAgICAgIHZhciBwYXJ0cyAgICAgICAgICAgPSBzdHJpbmdLZXkuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgICAgICByZXR1cm5DdXJyZW50ICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnQgICAgICAgICA9ICcnLFxuICAgICAgICAgICAgICAgIGkgICAgICAgICAgICAgICA9IDA7XG5cbiAgICAgICAgICAgIGlmICghc3RyaW5nS2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuQ3VycmVudCA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgICAgIGlmICghb2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmpbY3VycmVudF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgd2hpbGUgKGkgPCBwYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gcGFydHNbaV07XG5cbiAgICAgICAgICAgICAgICBvYmogPSByZXR1cm5DdXJyZW50KG9iaik7XG5cbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIG1peGl0dXAuaCA9IGg7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgQmFzZSBjbGFzcyBhZGRzIGluc3RhbmNlIG1ldGhvZHMgdG8gYWxsIG90aGVyIGV4dGVuc2libGUgTWl4SXRVcCBjbGFzc2VzLFxuICAgICAqIGVuYWJsaW5nIHRoZSBjYWxsaW5nIG9mIGFueSByZWdpc3RlcmVkIGhvb2tzLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuQmFzZSA9IGZ1bmN0aW9uKCkge307XG5cbiAgICBtaXhpdHVwLkJhc2UucHJvdG90eXBlID0ge1xuICAgICAgICBjb25zdHJ1Y3RvcjogbWl4aXR1cC5CYXNlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxscyBhbnkgcmVnaXN0ZXJlZCBob29rcyBmb3IgdGhlIHByb3ZpZGVkIGFjdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQmFzZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgICAgIDIuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7c3RyaW5nfSAgICBhY3Rpb25OYW1lXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7QXJyYXk8Kj59ICBhcmdzXG4gICAgICAgICAqIEByZXR1cm4gICAgICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgY2FsbEFjdGlvbnM6IGZ1bmN0aW9uKGFjdGlvbk5hbWUsIGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGhvb2tzICAgICAgICAgICA9IHNlbGYuY29uc3RydWN0b3IuYWN0aW9uc1thY3Rpb25OYW1lXSxcbiAgICAgICAgICAgICAgICBleHRlbnNpb25OYW1lICAgPSAnJztcblxuICAgICAgICAgICAgaWYgKCFob29rcyB8fCBoLmlzRW1wdHlPYmplY3QoaG9va3MpKSByZXR1cm47XG5cbiAgICAgICAgICAgIGZvciAoZXh0ZW5zaW9uTmFtZSBpbiBob29rcykge1xuICAgICAgICAgICAgICAgIGhvb2tzW2V4dGVuc2lvbk5hbWVdLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxscyBhbnkgcmVnaXN0ZXJlZCBob29rcyBmb3IgdGhlIHByb3ZpZGVkIGZpbHRlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQmFzZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgICAgIDIuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7c3RyaW5nfSAgICBmaWx0ZXJOYW1lXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7Kn0gICAgICAgICBpbnB1dFxuICAgICAgICAgKiBAcGFyYW0gICAgICAge0FycmF5PCo+fSAgYXJnc1xuICAgICAgICAgKiBAcmV0dXJuICAgICAgeyp9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGNhbGxGaWx0ZXJzOiBmdW5jdGlvbihmaWx0ZXJOYW1lLCBpbnB1dCwgYXJncykge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgaG9va3MgICAgICAgICAgID0gc2VsZi5jb25zdHJ1Y3Rvci5maWx0ZXJzW2ZpbHRlck5hbWVdLFxuICAgICAgICAgICAgICAgIG91dHB1dCAgICAgICAgICA9IGlucHV0LFxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbk5hbWUgICA9ICcnO1xuXG4gICAgICAgICAgICBpZiAoIWhvb2tzIHx8IGguaXNFbXB0eU9iamVjdChob29rcykpIHJldHVybiBvdXRwdXQ7XG5cbiAgICAgICAgICAgIGFyZ3MgPSBhcmdzIHx8IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGV4dGVuc2lvbk5hbWUgaW4gaG9va3MpIHtcbiAgICAgICAgICAgICAgICBhcmdzID0gaC5hcnJheUZyb21MaXN0KGFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgYXJncy51bnNoaWZ0KG91dHB1dCk7XG5cbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBob29rc1tleHRlbnNpb25OYW1lXS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgQmFzZVN0YXRpYyBjbGFzcyBob2xkcyBhIHNldCBvZiBzdGF0aWMgbWV0aG9kcyB3aGljaCBhcmUgdGhlbiBhZGRlZCB0byBhbGwgb3RoZXJcbiAgICAgKiBleHRlbnNpYmxlIE1peEl0VXAgY2xhc3NlcyBhcyBhIG1lYW5zIG9mIGludGVncmF0aW5nIGV4dGVuc2lvbnMgdmlhIHRoZSBhZGRpdGlvbiBvZiBuZXdcbiAgICAgKiBtZXRob2RzIGFuZC9vciBhY3Rpb25zIGFuZCBob29rcy5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMuZmlsdGVycyA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQZXJmb3JtcyBhIHNoYWxsb3cgZXh0ZW5kIG9uIHRoZSBjbGFzcydzIHByb3RvdHlwZSwgYWRkaW5nIG9uZSBvciBtb3JlIG5ldyBtZW1iZXJzIHRvXG4gICAgICAgICAqIHRoZSBjbGFzcyBpbiBhIHNpbmdsZSBvcGVyYXRpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkJhc2VTdGF0aWNcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBzaW5jZSAgICAgICAyLjEuMFxuICAgICAgICAgKiBAcGFyYW0gICAgICAge29iamVjdH0gZXh0ZW5zaW9uXG4gICAgICAgICAqIEByZXR1cm4gICAgICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5leHRlbmQgPSBmdW5jdGlvbihleHRlbnNpb24pIHtcbiAgICAgICAgICAgIGguZXh0ZW5kKHRoaXMucHJvdG90eXBlLCBleHRlbnNpb24pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gdGhlIGFjdGlvbiBob29rIG9mIHRoZSBwcm92aWRlZCBuYW1lLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5CYXNlU3RhdGljXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAc2luY2UgICAgICAgMi4xLjBcbiAgICAgICAgICogQHBhcmFtICAgICAgIHtzdHJpbmd9ICAgIGhvb2tOYW1lXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7c3RyaW5nfSAgICBleHRlbnNpb25OYW1lXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7ZnVuY3Rpb259ICBmdW5jXG4gICAgICAgICAqIEByZXR1cm4gICAgICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5yZWdpc3RlckFjdGlvbiA9IGZ1bmN0aW9uKGhvb2tOYW1lLCBleHRlbnNpb25OYW1lLCBmdW5jKSB7XG4gICAgICAgICAgICAodGhpcy5hY3Rpb25zW2hvb2tOYW1lXSA9IHRoaXMuYWN0aW9uc1tob29rTmFtZV0gfHwge30pW2V4dGVuc2lvbk5hbWVdID0gZnVuYztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXJzIGEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIHRoZSBmaWx0ZXIgb2YgdGhlIHByb3ZpZGVkIG5hbWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkJhc2VTdGF0aWNcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBzaW5jZSAgICAgICAyLjEuMFxuICAgICAgICAgKiBAcGFyYW0gICAgICAge3N0cmluZ30gICAgaG9va05hbWVcbiAgICAgICAgICogQHBhcmFtICAgICAgIHtzdHJpbmd9ICAgIGV4dGVuc2lvbk5hbWVcbiAgICAgICAgICogQHBhcmFtICAgICAgIHtmdW5jdGlvbn0gIGZ1bmNcbiAgICAgICAgICogQHJldHVybiAgICAgIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLnJlZ2lzdGVyRmlsdGVyID0gZnVuY3Rpb24oaG9va05hbWUsIGV4dGVuc2lvbk5hbWUsIGZ1bmMpIHtcbiAgICAgICAgICAgICh0aGlzLmZpbHRlcnNbaG9va05hbWVdID0gdGhpcy5maWx0ZXJzW2hvb2tOYW1lXSB8fCB7fSlbZXh0ZW5zaW9uTmFtZV0gPSBmdW5jO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYG1peGl0dXAuRmVhdHVyZXNgIGNsYXNzIHBlcmZvcm1zIGFsbCBmZWF0dXJlIGFuZCBDU1MgcHJlZml4IGRldGVjdGlvblxuICAgICAqIG5lY2Nlc3NhcnkgZm9yIE1peEl0VXAgdG8gZnVuY3Rpb24gY29ycmVjdGx5LCBhcyB3ZWxsIGFzIHN0b3JpbmcgdmFyaW91c1xuICAgICAqIHN0cmluZyBhbmQgYXJyYXkgY29uc3RhbnRzLiBBbGwgZmVhdHVyZSBkZWNlY3Rpb24gaXMgb24gZXZhbHVhdGlvbiBvZiB0aGVcbiAgICAgKiBsaWJyYXJ5IGFuZCBzdG9yZWQgaW4gYSBzaW5nbGV0b24gaW5zdGFuY2UgZm9yIHVzZSBieSBvdGhlciBpbnRlcm5hbCBjbGFzc2VzLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuRmVhdHVyZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgdGhpcy5ib3hTaXppbmdQcmVmaXggICAgICAgICAgICA9ICcnO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCAgICAgICAgICAgID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvblByZWZpeCAgICAgICAgICAgPSAnJztcblxuICAgICAgICB0aGlzLmJveFNpemluZ1ByZWZpeCAgICAgICAgICAgID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtUHJvcCAgICAgICAgICAgICAgPSAnJztcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1SdWxlICAgICAgICAgICAgICA9ICcnO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25Qcm9wICAgICAgICAgICAgID0gJyc7XG4gICAgICAgIHRoaXMucGVyc3BlY3RpdmVQcm9wICAgICAgICAgICAgPSAnJztcbiAgICAgICAgdGhpcy5wZXJzcGVjdGl2ZU9yaWdpblByb3AgICAgICA9ICcnO1xuXG4gICAgICAgIHRoaXMuaGFzICAgICAgICAgICAgICAgICAgICAgICAgPSBuZXcgbWl4aXR1cC5IYXMoKTtcblxuICAgICAgICB0aGlzLmNhbmFyeSAgICAgICAgICAgICAgICAgICAgID0gbnVsbDtcblxuICAgICAgICB0aGlzLkJPWF9TSVpJTkdfUFJPUCAgICAgICAgICAgID0gJ2JveFNpemluZyc7XG4gICAgICAgIHRoaXMuVFJBTlNJVElPTl9QUk9QICAgICAgICAgICAgPSAndHJhbnNpdGlvbic7XG4gICAgICAgIHRoaXMuVFJBTlNGT1JNX1BST1AgICAgICAgICAgICAgPSAndHJhbnNmb3JtJztcbiAgICAgICAgdGhpcy5QRVJTUEVDVElWRV9QUk9QICAgICAgICAgICA9ICdwZXJzcGVjdGl2ZSc7XG4gICAgICAgIHRoaXMuUEVSU1BFQ1RJVkVfT1JJR0lOX1BST1AgICAgPSAncGVyc3BlY3RpdmVPcmlnaW4nO1xuICAgICAgICB0aGlzLlZFTkRPUlMgICAgICAgICAgICAgICAgICAgID0gWydXZWJraXQnLCAnbW96JywgJ08nLCAnbXMnXTtcblxuICAgICAgICB0aGlzLlRXRUVOQUJMRSA9IFtcbiAgICAgICAgICAgICdvcGFjaXR5JyxcbiAgICAgICAgICAgICd3aWR0aCcsICdoZWlnaHQnLFxuICAgICAgICAgICAgJ21hcmdpblJpZ2h0JywgJ21hcmdpbkJvdHRvbScsXG4gICAgICAgICAgICAneCcsICd5JyxcbiAgICAgICAgICAgICdzY2FsZScsXG4gICAgICAgICAgICAndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJywgJ3RyYW5zbGF0ZVonLFxuICAgICAgICAgICAgJ3JvdGF0ZVgnLCAncm90YXRlWScsICdyb3RhdGVaJ1xuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuRmVhdHVyZXMpO1xuXG4gICAgbWl4aXR1cC5GZWF0dXJlcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgaC5leHRlbmQobWl4aXR1cC5GZWF0dXJlcy5wcm90b3R5cGUsXG4gICAgLyoqIEBsZW5kcyBtaXhpdHVwLkZlYXR1cmVzICovXG4gICAge1xuICAgICAgICBjb25zdHJ1Y3RvcjogbWl4aXR1cC5GZWF0dXJlcyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVJbml0JywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgc2VsZi5jYW5hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgc2VsZi5zZXRQcmVmaXhlcygpO1xuICAgICAgICAgICAgc2VsZi5ydW5UZXN0cygpO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVJbml0JywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHJ1blRlc3RzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlUnVuVGVzdHMnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBzZWxmLmhhcy5wcm9taXNlcyAgICAgICA9IHR5cGVvZiB3aW5kb3cuUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgICAgIHNlbGYuaGFzLnRyYW5zaXRpb25zICAgID0gc2VsZi50cmFuc2l0aW9uUHJlZml4ICE9PSAndW5zdXBwb3J0ZWQnO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlclJ1blRlc3RzJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaC5mcmVlemUoc2VsZi5oYXMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgc2V0UHJlZml4ZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVTZXRQcmVmaXhlcycsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHNlbGYudHJhbnNpdGlvblByZWZpeCAgID0gaC5nZXRQcmVmaXgoc2VsZi5jYW5hcnksICdUcmFuc2l0aW9uJywgc2VsZi5WRU5ET1JTKTtcbiAgICAgICAgICAgIHNlbGYudHJhbnNmb3JtUHJlZml4ICAgID0gaC5nZXRQcmVmaXgoc2VsZi5jYW5hcnksICdUcmFuc2Zvcm0nLCBzZWxmLlZFTkRPUlMpO1xuICAgICAgICAgICAgc2VsZi5ib3hTaXppbmdQcmVmaXggICAgPSBoLmdldFByZWZpeChzZWxmLmNhbmFyeSwgJ0JveFNpemluZycsIHNlbGYuVkVORE9SUyk7XG5cbiAgICAgICAgICAgIHNlbGYuYm94U2l6aW5nUHJvcCA9IHNlbGYuYm94U2l6aW5nUHJlZml4ID9cbiAgICAgICAgICAgICAgICBzZWxmLmJveFNpemluZ1ByZWZpeCArIGgucGFzY2FsQ2FzZShzZWxmLkJPWF9TSVpJTkdfUFJPUCkgOiBzZWxmLkJPWF9TSVpJTkdfUFJPUDtcblxuICAgICAgICAgICAgc2VsZi50cmFuc2l0aW9uUHJvcCA9IHNlbGYudHJhbnNpdGlvblByZWZpeCA/XG4gICAgICAgICAgICAgICAgc2VsZi50cmFuc2l0aW9uUHJlZml4ICsgaC5wYXNjYWxDYXNlKHNlbGYuVFJBTlNJVElPTl9QUk9QKSA6IHNlbGYuVFJBTlNJVElPTl9QUk9QO1xuXG4gICAgICAgICAgICBzZWxmLnRyYW5zZm9ybVByb3AgPSBzZWxmLnRyYW5zZm9ybVByZWZpeCA/XG4gICAgICAgICAgICAgICAgc2VsZi50cmFuc2Zvcm1QcmVmaXggKyBoLnBhc2NhbENhc2Uoc2VsZi5UUkFOU0ZPUk1fUFJPUCkgOiBzZWxmLlRSQU5TRk9STV9QUk9QO1xuXG4gICAgICAgICAgICBzZWxmLnRyYW5zZm9ybVJ1bGUgPSBzZWxmLnRyYW5zZm9ybVByZWZpeCA/XG4gICAgICAgICAgICAgICAgJy0nICsgc2VsZi50cmFuc2Zvcm1QcmVmaXggKyAnLScgKyBzZWxmLlRSQU5TRk9STV9QUk9QIDogc2VsZi5UUkFOU0ZPUk1fUFJPUDtcblxuICAgICAgICAgICAgc2VsZi5wZXJzcGVjdGl2ZVByb3AgPSBzZWxmLnRyYW5zZm9ybVByZWZpeCA/XG4gICAgICAgICAgICAgICAgc2VsZi50cmFuc2Zvcm1QcmVmaXggKyBoLnBhc2NhbENhc2Uoc2VsZi5QRVJTUEVDVElWRV9QUk9QKSA6IHNlbGYuUEVSU1BFQ1RJVkVfUFJPUDtcblxuICAgICAgICAgICAgc2VsZi5wZXJzcGVjdGl2ZU9yaWdpblByb3AgPSBzZWxmLnRyYW5zZm9ybVByZWZpeCA/XG4gICAgICAgICAgICAgICAgc2VsZi50cmFuc2Zvcm1QcmVmaXggKyBoLnBhc2NhbENhc2Uoc2VsZi5QRVJTUEVDVElWRV9PUklHSU5fUFJPUCkgOlxuICAgICAgICAgICAgICAgIHNlbGYuUEVSU1BFQ1RJVkVfT1JJR0lOX1BST1A7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyU2V0UHJlZml4ZXMnLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLkhhcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25zICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvbWlzZXMgICAgICAgPSBmYWxzZTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIC8vIEFzc2lnbiBhIHNpbmdsZXRvbiBpbnN0YW5jZSB0byBgbWl4aXR1cC5mZWF0dXJlc2AgYW5kIGluaXRpYWxpc2U6XG5cbiAgICBtaXhpdHVwLmZlYXR1cmVzID0gbmV3IG1peGl0dXAuRmVhdHVyZXMoKTtcblxuICAgIG1peGl0dXAuZmVhdHVyZXMuaW5pdCgpO1xuXG4gICAgLyoqXG4gICAgICogQSBncm91cCBvZiBwcm9wZXJ0aWVzIGRlZmluaW5nIHRoZSBtaXhlcidzIGFuaW1hdGlvbiBhbmQgZWZmZWN0cyBzZXR0aW5ncy5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZ1xuICAgICAqIEBuYW1lICAgICAgICBhbmltYXRpb25cbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBzaW5jZSAgICAgICAyLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5Db25maWdBbmltYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciBvciBub3QgYW5pbWF0aW9uIHNob3VsZCBiZSBlbmFibGVkIGZvciB0aGUgTWl4SXRVcCBpbnN0YW5jZS5cbiAgICAgICAgICogSWYgYGZhbHNlYCwgYWxsIG9wZXJhdGlvbnMgd2lsbCBvY2N1ciBpbnN0YW50bHkgYW5kIHN5bmNyb25vdXNseSwgYWx0aG91Z2ggY2FsbGJhY2tcbiAgICAgICAgICogZnVuY3Rpb25zIGFuZCBhbnkgcmV0dXJuZWQgcHJvbWlzZXMgd2lsbCBzdGlsbCBiZSBmdWxmaWxsZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IENyZWF0ZSBhIG1peGVyIHdpdGggYWxsIGFuaW1hdGlvbnMgZGlzYWJsZWQ8L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgKiAgICAgICAgIGVuYWJsZTogZmFsc2VcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBlbmFibGVcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmFuaW1hdGlvblxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtib29sZWFufVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgdHJ1ZVxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmVuYWJsZSA9IHRydWU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgc3RyaW5nIG9mIG9uZSBvciBtb3JlIHNwYWNlLXNlcGVyYXRlZCBwcm9wZXJ0aWVzIHRvIHdoaWNoIHRyYW5zaXRpb25zIHdpbGwgYmVcbiAgICAgICAgICogYXBwbGllZCBmb3IgYWxsIGZpbHRlcmluZyBhbmltYXRpb25zLlxuICAgICAgICAgKlxuICAgICAgICAgKiBQcm9wZXJ0aWVzIGNhbiBiZSBsaXN0ZWQgYW55IG9yZGVyIG9yIGNvbWJpbmF0aW9uLCBhbHRob3VnaCB0aGV5IHdpbGwgYmUgYXBwbGllZCBpbiBhIHNwZWNpZmljXG4gICAgICAgICAqIHByZWRlZmluZWQgb3JkZXIgdG8gcHJvZHVjZSBjb25zaXN0ZW50IHJlc3VsdHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRvIGxlYXJuIG1vcmUgYWJvdXQgYXZhaWxhYmxlIGVmZmVjdHMsIGV4cGVyaW1lbnQgd2l0aCBvdXIgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmt1bmthbGFicy5jb20vbWl4aXR1cC9cIj5cbiAgICAgICAgICogc2FuZGJveCBkZW1vPC9hPiBhbmQgdHJ5IG91dCB0aGUgXCJFeHBvcnQgY29uZmlnXCIgYnV0dG9uIGluIHRoZSBBbmltYXRpb24gb3B0aW9ucyBkcm9wIGRvd24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IEFwcGx5IFwiZmFkZVwiIGFuZCBcInRyYW5zbGF0ZVpcIiBlZmZlY3RzIHRvIGFsbCBhbmltYXRpb25zPC9jYXB0aW9uPlxuICAgICAgICAgKiAvLyBBcyB0YXJnZXRzIGFyZSBmaWx0ZXJlZCBpbiBhbmQgb3V0LCB0aGV5IHdpbGwgZmFkZSBiZXR3ZWVuXG4gICAgICAgICAqIC8vIG9wYWNpdHkgMSBhbmQgMCBhbmQgdHJhbnNmb3JtIGJldHdlZW4gdHJhbnNsYXRlWigtMTAwcHgpIGFuZFxuICAgICAgICAgKiAvLyB0cmFuc2xhdGVaKDApLlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICogICAgICAgICBlZmZlY3RzOiAnZmFkZSB0cmFuc2xhdGVaKC0xMDBweCknXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgZWZmZWN0c1xuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuYW5pbWF0aW9uXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge3N0cmluZ31cbiAgICAgICAgICogQGRlZmF1bHQgICAgICdmYWRlIHNjYWxlJ1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmVmZmVjdHMgPSAnZmFkZSBzY2FsZSc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgc3RyaW5nIG9mIG9uZSBvciBtb3JlIHNwYWNlLXNlcGVyYXRlZCBlZmZlY3RzIHRvIGJlIGFwcGxpZWQgb25seSB0byBmaWx0ZXItaW5cbiAgICAgICAgICogYW5pbWF0aW9ucywgb3ZlcnJpZGluZyBgY29uZmlnLmFuaW1hdGlvbi5lZmZlY3RzYCBpZiBzZXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IEFwcGx5IGRvd253YXJkcyB2ZXJ0aWNhbCB0cmFuc2xhdGUgdG8gdGFyZ2V0cyBiZWluZyBmaWx0ZXJlZCBpbjwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAqICAgICAgICAgZWZmZWN0c0luOiAnZmFkZSB0cmFuc2xhdGVZKC0xMDAlKSdcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBlZmZlY3RzSW5cbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmFuaW1hdGlvblxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnJ1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmVmZmVjdHNJbiA9ICcnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHN0cmluZyBvZiBvbmUgb3IgbW9yZSBzcGFjZS1zZXBlcmF0ZWQgZWZmZWN0cyB0byBiZSBhcHBsaWVkIG9ubHkgdG8gZmlsdGVyLW91dFxuICAgICAgICAgKiBhbmltYXRpb25zLCBvdmVycmlkaW5nIGBjb25maWcuYW5pbWF0aW9uLmVmZmVjdHNgIGlmIHNldC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogQXBwbHkgdXB3YXJkcyB2ZXJ0aWNhbCB0cmFuc2xhdGUgdG8gdGFyZ2V0cyBiZWluZyBmaWx0ZXJlZCBvdXQ8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgKiAgICAgICAgIGVmZmVjdHNPdXQ6ICdmYWRlIHRyYW5zbGF0ZVkoLTEwMCUpJ1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGVmZmVjdHNPdXRcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmFuaW1hdGlvblxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnJ1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmVmZmVjdHNPdXQgPSAnJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gaW50ZWdlciBkaWN0YXRpbmcgdGhlIGR1cmF0aW9uIG9mIGFsbCBNaXhJdFVwIGFuaW1hdGlvbnMgaW4gbWlsbGlzZWNvbmRzLCBub3RcbiAgICAgICAgICogaW5jbHVkaW5nIGFueSBhZGRpdGlvbmFsIGRlbGF5IGFwbGxpZWQgdmlhIHRoZSBgJ3N0YWdnZXInYCBlZmZlY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IEFwcGx5IGFuIGFuaW1hdGlvbiBkdXJhdGlvbiBvZiAyMDBtcyB0byBhbGwgbWl4aXR1cCBhbmltYXRpb25zPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICogICAgICAgICBkdXJhdGlvbjogMjAwXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgZHVyYXRpb25cbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmFuaW1hdGlvblxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtudW1iZXJ9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICA2MDBcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDYwMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSB2YWxpZCBDU1MzIHRyYW5zaXRpb24tdGltaW5nIGZ1bmN0aW9uIG9yIHNob3J0aGFuZC4gRm9yIGEgZnVsbCBsaXN0IG9mIGFjY2VwdGVkXG4gICAgICAgICAqIHZhbHVlcywgdmlzaXQgPGEgaHJlZj1cImh0dHA6Ly9lYXNpbmdzLm5ldFwiIHRhcmdldD1cIl9ibGFua1wiPmVhc2luZ3MubmV0PC9hPi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAxOiBBcHBseSBcImVhc2UtaW4tb3V0XCIgZWFzaW5nIHRvIGFsbCBhbmltYXRpb25zPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICogICAgICAgICBlYXNpbmc6ICdlYXNlLWluLW91dCdcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMjogQXBwbHkgYSBjdXN0b20gXCJjdWJpYy1iZXppZXJcIiBlYXNpbmcgZnVuY3Rpb24gdG8gYWxsIGFuaW1hdGlvbnM8L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgKiAgICAgICAgIGVhc2luZzogJ2N1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSdcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBlYXNpbmdcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmFuaW1hdGlvblxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnZWFzZSdcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5lYXNpbmcgPSAnZWFzZSc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciBvciBub3QgdG8gYXBwbHkgcGVyc3BlY3RpdmUgdG8gdGhlIE1peEl0VXAgY29udGFpbmVyXG4gICAgICAgICAqIGR1cmluZyBhbmltYXRpb25zLiBCeSBkZWZhdWx0LCBwZXJzcGVjdGl2ZSBpcyBhbHdheXMgYXBwbGllZCBhbmQgY3JlYXRlcyB0aGVcbiAgICAgICAgICogaWxsdXNpb24gb2YgdGhyZWUtZGltZW5zaW9uYWwgc3BhY2UgZm9yIGVmZmVjdHMgc3VjaCBhcyBgdHJhbnNsYXRlWmAsIGByb3RhdGVYYCxcbiAgICAgICAgICogYW5kIGByb3RhdGVZYC5cbiAgICAgICAgICpcbiAgICAgICAgICogWW91IG1heSB3aXNoIHRvIGRpc2FibGUgdGhpcyBhbmQgZGVmaW5lIHlvdXIgb3duIHBlcnNwZWN0aXZlIHNldHRpbmdzIHZpYSBDU1MuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IFByZXZlbnQgcGVyc3BlY3RpdmUgZnJvbSBiZWluZyBhcHBsaWVkIHRvIGFueSAzRCB0cmFuc2Zvcm1zPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICogICAgICAgICBhcHBseVBlcnNwZWN0aXZlOiBmYWxzZVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGFwcGx5UGVyc3BlY3RpdmVcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmFuaW1hdGlvblxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtib2xlYW59XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICB0cnVlXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuYXBwbHlQZXJzcGVjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwZXJzcGVjdGl2ZSBkaXN0YW5jZSB2YWx1ZSB0byBiZSBhcHBsaWVkIHRvIHRoZSBjb250YWluZXIgZHVyaW5nIGFuaW1hdGlvbnMsXG4gICAgICAgICAqIGFmZmVjdGluZyBhbnkgM0QtdHJhbnNmb3JtLWJhc2VkIGVmZmVjdHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IFNldCBhIHBlcnNwZWN0aXZlIGRpc3RhbmNlIG9mIDIwMDBweDwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAqICAgICAgICAgZWZmZWN0czogJ3JvdGF0ZVkoLTI1ZGVnKScsXG4gICAgICAgICAqICAgICAgICAgcGVyc3BlY3RpdmVEaXN0YW5jZTogJzIwMDBweCdcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBwZXJzcGVjdGl2ZURpc3RhbmNlXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5hbmltYXRpb25cbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7c3RyaW5nfVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgJzMwMDBweCdcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5wZXJzcGVjdGl2ZURpc3RhbmNlID0gJzMwMDBweCc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwZXJzcGVjdGl2ZS1vcmlnaW4gdmFsdWUgdG8gYmUgYXBwbGllZCB0byB0aGUgY29udGFpbmVyIGR1cmluZyBhbmltYXRpb25zLFxuICAgICAgICAgKiBhZmZlY3RpbmcgYW55IDNELXRyYW5zZm9ybS1iYXNlZCBlZmZlY3RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBTZXQgYSBwZXJzcGVjdGl2ZSBvcmlnaW4gaW4gdGhlIHRvcC1yaWdodCBvZiB0aGUgY29udGFpbmVyPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICogICAgICAgICBlZmZlY3RzOiAndHJhbnNhdGVaKC0yMDBweCknLFxuICAgICAgICAgKiAgICAgICAgIHBlcnNwZWN0aXZlT3JpZ2luOiAnMTAwJSAwJ1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIHBlcnNwZWN0aXZlT3JpZ2luXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5hbmltYXRpb25cbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7c3RyaW5nfVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgJzUwJSA1MCUnXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMucGVyc3BlY3RpdmVPcmlnaW4gPSAnNTAlIDUwJSc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciBvciBub3QgdG8gZW5hYmxlIHRoZSBxdWV1aW5nIG9mIG9wZXJhdGlvbnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIGB0cnVlYCAoZGVmYXVsdCksIGFuZCBhIGNvbnRyb2wgaXMgY2xpY2tlZCBvciBhbiBBUEkgY2FsbCBpcyBtYWRlIHdoaWxlIGFub3RoZXJcbiAgICAgICAgICogb3BlcmF0aW9uIGlzIHByb2dyZXNzLCB0aGUgb3BlcmF0aW9uIHdpbGwgZ28gaW50byB0aGUgcXVldWUgYW5kIHdpbGwgYmUgYXV0b21hdGljYWxseSBleGVjdHV0ZWRcbiAgICAgICAgICogd2hlbiB0aGUgcHJldmlvdXMgb3BlcmFpdG9ucyBpcyBmaW5pc2hlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgYGZhbHNlYCwgYW55IHJlcXVlc3RlZCBvcGVyYXRpb25zIHdpbGwgYmUgaWdub3JlZCwgYW5kIHRoZSBgb25NaXhCdXN5YCBjYWxsYmFjayBhbmQgYG1peEJ1c3lgXG4gICAgICAgICAqIGV2ZW50IHdpbGwgYmUgZmlyZWQuIElmIGBkZWJ1Zy5zaG93V2FybmluZ3NgIGlzIGVuYWJsZWQsIGEgY29uc29sZSB3YXJuaW5nIHdpbGwgYWxzbyBvY2N1ci5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogRGlzYWJsZSBxdWV1aW5nPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICogICAgICAgICBxdWV1ZTogZmFsc2VcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBxdWV1ZVxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuYW5pbWF0aW9uXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge2Jvb2xlYW59XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICB0cnVlXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMucXVldWUgPSB0cnVlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBpbnRlZ2VyIGRpY3RhY3RpbmcgdGhlIG1heGltdW0gbnVtYmVyIG9mIG9wZXJhdGlvbnMgYWxsb3dlZCBpbiB0aGUgcXVldWUgYXRcbiAgICAgICAgICogYW55IHRpbWUsIHdoZW4gcXVldWluZyBpcyBlbmFibGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBBbGxvdyBhIG1heGltdW0gb2YgNSBvcGVyYXRpb25zIGluIHRoZSBxdWV1ZSBhdCBhbnkgdGltZTwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAqICAgICAgICAgcXVldWVMaW1pdDogNVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIHF1ZXVlTGltaXRcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmFuaW1hdGlvblxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtudW1iZXJ9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAzXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMucXVldWVMaW1pdCA9IDM7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciBvciBub3QgdG8gdHJhbnNpdGlvbiB0aGUgaGVpZ2h0IGFuZCB3aWR0aCBvZiB0aGVcbiAgICAgICAgICogY29udGFpbmVyIGFzIGVsZW1lbnRzIGFyZSBmaWx0ZXJlZCBpbiBhbmQgb3V0LiBJZiBkaXNhYmxlZCwgdGhlIGNvbnRhaW5lciBoZWlnaHRcbiAgICAgICAgICogd2lsbCBjaGFuZ2UgYWJydXB0bHkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEl0IG1heSBiZSBkZXNpcmFibGUgdG8gZGlzYWJsZSB0aGlzIG9uIG1vYmlsZSBkZXZpY2VzIGFzIHRoZSBDU1MgYGhlaWdodGAgYW5kXG4gICAgICAgICAqIGB3aWR0aGAgcHJvcGVydGllcyBkbyBub3QgcmVjZWl2ZSBHUFUtYWNjZWxlcmF0aW9uIGFuZCBjYW4gdGhlcmVmb3JlIGNhdXNlIHN0dXR0ZXJpbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMTogRGlzYWJsZSB0aGUgdHJhbnNpdGlvbmluZyBvZiB0aGUgY29udGFpbmVyIGhlaWdodCBhbmQvb3Igd2lkdGg8L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgKiAgICAgICAgIGFuaW1hdGVSZXNpemVDb250YWluZXI6IGZhbHNlXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDI6IERpc2FibGUgdGhlIHRyYW5zaXRpb25pbmcgb2YgdGhlIGNvbnRhaW5lciBoZWlnaHQgYW5kL29yIHdpZHRoIGZvciBtb2JpbGUgZGV2aWNlcyBvbmx5PC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICogICAgICAgICBhbmltYXRlUmVzaXplQ29udGFpbmVyOiBteUZlYXR1cmVUZXN0cy5pc01vYmlsZSA/IGZhbHNlIDogdHJ1ZVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGFuaW1hdGVSZXNpemVDb250YWluZXJcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmFuaW1hdGlvblxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtib29sZWFufVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgdHJ1ZVxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmFuaW1hdGVSZXNpemVDb250YWluZXIgPSB0cnVlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGJvb2xlYW4gZGljdGF0aW5nIHdoZXRoZXIgb3Igbm90IHRvIHRyYW5zaXRpb24gdGhlIGhlaWdodCBhbmQgd2lkdGggb2YgdGFyZ2V0XG4gICAgICAgICAqIGVsZW1lbnRzIGFzIHRoZXkgY2hhbmdlIHRocm91Z2hvdXQgdGhlIGNvdXJzZSBvZiBhbiBhbmltYXRpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgaXMgb2Z0ZW4gYSBtdXN0IGZvciBmbGV4LWJveCBncmlkIGxheW91dHMgd2hlcmUgdGhlIHNpemUgb2YgdGFyZ2V0IGVsZW1lbnRzIG1heSBjaGFuZ2VcbiAgICAgICAgICogZGVwZW5kaW5nIG9uIGZpbmFsIHRoZWlyIHBvc2l0aW9uIGluIHJlbGF0aW9uIHRvIHRoZWlyIHNpYmxpbmdzLCBvciBmb3IgYC5jaGFuZ2VMYXlvdXQoKWBcbiAgICAgICAgICogb3BlcmF0aW9ucyB3aGVyZSB0aGUgc2l6ZSBvZiB0YXJnZXRzIGNoYW5nZSBiZXR3ZWVuIGxheW91dHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIE5COiBUaGlzIGZlYXR1cmUgcmVxdWlyZXMgYWRkaXRpb25hbCBjYWxjdWxhdGlvbnMgYW5kIG1hbmlwdWxhdGlvbiB0byBub24taGFyZHdhcmUtYWNjZWxlcmF0ZWRcbiAgICAgICAgICogcHJvcGVydGllcyB3aGljaCBtYXkgYWR2ZXJzZWx5IGFmZmVjdCBwZXJmb3JtYW5jZSBvbiBzbG93ZXIgZGV2aWNlcywgYW5kIGlzIHRoZXJlZm9yZVxuICAgICAgICAgKiBkaXNhYmxlZCBieSBkZWZhdWx0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBFbmFibGUgdGhlIHRyYW5zaXRpb25pbmcgb2YgdGFyZ2V0IHdpZHRocyBhbmQgaGVpZ2h0czwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAqICAgICAgICAgYW5pbWF0ZVJlc2l6ZVRhcmdldHM6IHRydWVcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBhbmltYXRlUmVzaXplVGFyZ2V0c1xuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuYW5pbWF0aW9uXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge2Jvb2xlYW59XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICBmYWxzZVxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmFuaW1hdGVSZXNpemVUYXJnZXRzID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgY3VzdG9tIGZ1bmN0aW9uIHVzZWQgdG8gbWFuaXB1bGF0ZSB0aGUgb3JkZXIgaW4gd2hpY2ggdGhlIHN0YWdnZXIgZGVsYXkgaXNcbiAgICAgICAgICogaW5jcmVtZW50ZWQgd2hlbiB1c2luZyB0aGUg4oCYc3RhZ2dlcuKAmSBlZmZlY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIFdoZW4gdXNpbmcgdGhlICdzdGFnZ2VyJyBlZmZlY3QsIHRoZSBkZWxheSBhcHBsaWVkIHRvIGVhY2ggdGFyZ2V0IGVsZW1lbnQgaXMgaW5jcmVtZW50ZWRcbiAgICAgICAgICogYmFzZWQgb24gaXRzIGluZGV4LiBZb3UgbWF5IGNyZWF0ZSBhIGN1c3RvbSBmdW5jdGlvbiB0byBtYW5pcHVsYXRlIHRoZSBvcmRlciBpbiB3aGljaCB0aGVcbiAgICAgICAgICogZGVsYXkgaXMgaW5jcmVtZW50ZWQgYW5kIGNyZWF0ZSBlbmdhZ2luZyBub24tbGluZWFyIHN0YWdnZXIgZWZmZWN0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIGZ1bmN0aW9uIHJlY2VpdmVzIHRoZSBpbmRleCBvZiB0aGUgdGFyZ2V0IGVsZW1lbnQgYXMgYSBwYXJhbWV0ZXIsIGFuZCBtdXN0XG4gICAgICAgICAqIHJldHVybiBhbiBpbnRlZ2VyIHdoaWNoIHNlcnZlcyBhcyB0aGUgbXVsdGlwbGllciBmb3IgdGhlIHN0YWdnZXIgZGVsYXkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMTogU3RhZ2dlciB0YXJnZXQgZWxlbWVudHMgYnkgY29sdW1uIGluIGEgMy1jb2x1bW4gZ3JpZDwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAqICAgICAgICAgZWZmZWN0czogJ2ZhZGUgc3RhZ2dlcigxMDBtcyknLFxuICAgICAgICAgKiAgICAgICAgIHN0YWdnZXJTZXF1ZW5jZTogZnVuY3Rpb24oaSkge1xuICAgICAgICAgKiAgICAgICAgICAgICByZXR1cm4gaSAlIDM7XG4gICAgICAgICAqICAgICAgICAgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAyOiBVc2luZyBhbiBhbGdvcml0aG0gdG8gcHJvZHVjZSBhIG1vcmUgY29tcGxleCBzZXF1ZW5jZTwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAqICAgICAgICAgZWZmZWN0czogJ2ZhZGUgc3RhZ2dlcigxMDBtcyknLFxuICAgICAgICAgKiAgICAgICAgIHN0YWdnZXJTZXF1ZW5jZTogZnVuY3Rpb24oaSkge1xuICAgICAgICAgKiAgICAgICAgICAgICByZXR1cm4gKDIqaSkgLSAoNSooKGkvMykgLSAoKDEvMykgKiAoaSUzKSkpKTtcbiAgICAgICAgICogICAgICAgICB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgc3RhZ2dlclNlcXVlbmNlXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5hbmltYXRpb25cbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7ZnVuY3Rpb259XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICBudWxsXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuc3RhZ2dlclNlcXVlbmNlID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBib29sZWFuIGRpY3RhdGluZyB3aGV0aGVyIG9yIG5vdCB0byByZXZlcnNlIHRoZSBkaXJlY3Rpb24gb2YgYHRyYW5zbGF0ZWBcbiAgICAgICAgICogYW5kIGByb3RhdGVgIHRyYW5zZm9ybXMgZm9yIGVsZW1lbnRzIGJlaW5nIGZpbHRlcmVkIG91dC5cbiAgICAgICAgICpcbiAgICAgICAgICogSXQgY2FuIGJlIHVzZWQgdG8gY3JlYXRlIGNhcm91c2VsLWxpa2UgYW5pbWF0aW9ucyB3aGVyZSBlbGVtZW50cyBlbnRlciBhbmQgZXhpdFxuICAgICAgICAgKiBmcm9tIG9wcG9zaXRlIGRpcmVjdGlvbnMuIElmIGVuYWJsZWQsIHRoZSBlZmZlY3QgYHRyYW5zbGF0ZVgoLTEwMCUpYCBmb3IgZWxlbWVudHNcbiAgICAgICAgICogYmVpbmcgZmlsdGVyZWQgaW4gd291bGQgYmVjb21lIGB0cmFuc2xhdGVYKDEwMCUpYCBmb3IgdGFyZ2V0cyBiZWluZyBmaWx0ZXJlZCBvdXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgZnVuY3Rpb25hbGl0eSBjYW4gYWxzbyBiZSBhY2hpZXZlZCBieSBwcm92aWRpbmcgc2VwZXJhdGUgZWZmZWN0c1xuICAgICAgICAgKiBzdHJpbmdzIGZvciBgY29uZmlnLmFuaW1hdGlvbi5lZmZlY3RzSW5gIGFuZCBgY29uZmlnLmFuaW1hdGlvbi5lZmZlY3RzT3V0YC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogUmV2ZXJzZSB0aGUgZGVzaXJlZCBkaXJlY3Rpb24gb24gYW55IHRyYW5zbGF0ZS9yb3RhdGUgZWZmZWN0IGZvciB0YXJnZXRzIGJlaW5nIGZpbHRlcmVkIG91dDwvY2FwdGlvbj5cbiAgICAgICAgICogLy8gRWxlbWVudHMgYmVpbmcgZmlsdGVyZWQgaW4gd2lsbCBiZSB0cmFuc2xhdGVkIGZyb20gJzEwMCUnIHRvICcwJyB3aGlsZVxuICAgICAgICAgKiAvLyBlbGVtZW50cyBiZWluZyBmaWx0ZXJlZCBvdXQgd2lsbCBiZSB0cmFuc2xhdGVkIGZyb20gMCB0byAnLTEwMCUnXG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgKiAgICAgICAgIGVmZmVjdHM6ICdmYWRlIHRyYW5zbGF0ZVgoMTAwJSknLFxuICAgICAgICAgKiAgICAgICAgIHJldmVyc2VPdXQ6IHRydWUsXG4gICAgICAgICAqICAgICAgICAgbnVkZ2U6IGZhbHNlIC8vIERpc2FibGUgbnVkZ2luZyB0byBjcmVhdGUgYSBjYXJvdXNlbC1saWtlIGVmZmVjdFxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIHJldmVyc2VPdXRcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmFuaW1hdGlvblxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtib29sZWFufVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgZmFsc2VcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5yZXZlcnNlT3V0ID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciBvciBub3QgdG8gXCJudWRnZVwiIHRoZSBhbmltYXRpb24gcGF0aCBvZiB0YXJnZXRzXG4gICAgICAgICAqIHdoZW4gdGhleSBhcmUgYmVpbmcgZmlsdGVyZWQgaW4gYW5kIG91dCBzaW11bGF0ZW5vdXNseS5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBoYXMgYmVlbiB0aGUgZGVmYXVsdCBiZWhhdmlvciBvZiBNaXhJdFVwIHNpbmNlIHZlcnNpb24gMSwgYnV0IGl0XG4gICAgICAgICAqIG1heSBiZSBkZXNpcmFibGUgdG8gZGlzYWJsZSB0aGlzIGVmZmVjdCB3aGVuIGZpbHRlcmluZyBkaXJlY3RseSBmcm9tXG4gICAgICAgICAqIG9uZSBleGNsdXNpdmUgc2V0IG9mIHRhcmdldHMgdG8gYSBkaWZmZXJlbnQgZXhjbHVzaXZlIHNldCBvZiB0YXJnZXRzLFxuICAgICAgICAgKiB0byBjcmVhdGUgYSBjYXJvdXNlbC1saWtlIGVmZmVjdCwgb3IgYSBnZW5lcmFsbHkgbW9yZSBzdWJ0bGUgYW5pbWF0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBEaXNhYmxlIHRoZSBcIm51ZGdpbmdcIiBvZiB0YXJnZXRzIGJlaW5nIGZpbHRlcmVkIGluIGFuZCBvdXQgc2ltdWxhdGVub3VzbHk8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgKiAgICAgICAgIG51ZGdlOiBmYWxzZVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIG51ZGdlXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5hbmltYXRpb25cbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7Ym9vbGVhbn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIHRydWVcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5udWRnZSA9IHRydWU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciBvciBub3QgdG8gY2xhbXAgdGhlIGhlaWdodCBvZiB0aGUgY29udGFpbmVyIHdoaWxlIE1peEl0VXAnc1xuICAgICAgICAgKiBnZW9tZXRyeSB0ZXN0cyBhcmUgY2FycmllZCBvdXQgYmVmb3JlIGFuIG9wZXJhdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogVG8gcHJldmVudCBzY3JvbGwtYmFyIGZsaWNrZXIsIGNsYW1waW5nIGlzIHR1cm5lZCBvbiBieSBkZWZhdWx0LiBCdXQgaW4gdGhlIGNhc2Ugd2hlcmUgdGhlXG4gICAgICAgICAqIGhlaWdodCBvZiB0aGUgY29udGFpbmVyIG1pZ2h0IGFmZmVjdCBpdHMgdmVydGljYWwgcG9zaXRpb25pbmcgaW4gdGhlIHZpZXdwb3J0XG4gICAgICAgICAqIChlLmcuIGEgdmVydGljYWxseS1jZW50ZXJlZCBjb250YWluZXIpLCB0aGlzIHNob3VsZCBiZSB0dXJuZWQgb2ZmIHRvIGVuc3VyZSBhY2N1cmF0ZVxuICAgICAgICAgKiB0ZXN0IHJlc3VsdHMgYW5kIGEgc21vb3RoIGFuaW1hdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogRGlzYWJsZSBjb250YWluZXIgaGVpZ2h0LWNsYW1waW5nPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICogICAgICAgICBjbGFtcEhlaWdodDogZmFsc2VcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBjbGFtcEhlaWdodFxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuYW5pbWF0aW9uXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge2Jvb2xlYW59XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICB0cnVlXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuY2xhbXBIZWlnaHQgPSB0cnVlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGJvb2xlYW4gZGljdGF0aW5nIHdoZXRoZXIgb3Igbm90IHRvIGNsYW1wIHRoZSB3aWR0aCBvZiB0aGUgY29udGFpbmVyIHdoaWxlIE1peEl0VXAnc1xuICAgICAgICAgKiBnZW9tZXRyeSB0ZXN0cyBhcmUgY2FycmllZCBvdXQgYmVmb3JlIGFuIG9wZXJhdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogVG8gcHJldmVudCBzY3JvbGwtYmFyIGZsaWNrZXIsIGNsYW1waW5nIGlzIHR1cm5lZCBvbiBieSBkZWZhdWx0LiBCdXQgaW4gdGhlIGNhc2Ugd2hlcmUgdGhlXG4gICAgICAgICAqIHdpZHRoIG9mIHRoZSBjb250YWluZXIgbWlnaHQgYWZmZWN0IGl0cyBob3JpdHpvbnRhbCBwb3NpdGlvbmluZyBpbiB0aGUgdmlld3BvcnRcbiAgICAgICAgICogKGUuZy4gYSBob3Jpem9udGFsbC1jZW50ZXJlZCBjb250YWluZXIpLCB0aGlzIHNob3VsZCBiZSB0dXJuZWQgb2ZmIHRvIGVuc3VyZSBhY2N1cmF0ZVxuICAgICAgICAgKiB0ZXN0IHJlc3VsdHMgYW5kIGEgc21vb3RoIGFuaW1hdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogRGlzYWJsZSBjb250YWluZXIgd2lkdGgtY2xhbXBpbmc8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgKiAgICAgICAgIGNsYW1wV2lkdGg6IGZhbHNlXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgY2xhbXBXaWR0aFxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuYW5pbWF0aW9uXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge2Jvb2xlYW59XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICB0cnVlXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuY2xhbXBXaWR0aCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuQ29uZmlnQW5pbWF0aW9uKTtcblxuICAgIG1peGl0dXAuQ29uZmlnQW5pbWF0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLkNvbmZpZ0FuaW1hdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLkNvbmZpZ0FuaW1hdGlvbjtcblxuICAgIC8qKlxuICAgICAqIEEgZ3JvdXAgb2YgcHJvcGVydGllcyByZWxhdGluZyB0byB0aGUgYmVoYXZpb3Igb2YgdGhlIE1peGVyLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnXG4gICAgICogQG5hbWUgICAgICAgIGJlaGF2aW9yXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAc2luY2UgICAgICAgMy4xLjEyXG4gICAgICovXG5cbiAgICBtaXhpdHVwLkNvbmZpZ0JlaGF2aW9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGJvb2xlYW4gZGljdGF0aW5nIHdoZXRoZXIgdG8gYWxsb3cgXCJsaXZlXCIgc29ydGluZyBvZiB0aGUgbWl4ZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEJlY2F1c2Ugb2YgdGhlIGV4cGVuc2l2ZSBuYXR1cmUgb2Ygc29ydGluZywgTWl4SXRVcCBtYWtlcyB1c2Ugb2Ygc2V2ZXJhbFxuICAgICAgICAgKiBpbnRlcm5hbCBvcHRpbWl6YXRpb25zIHRvIHNraXAgcmVkdW5kYW50IHNvcnRpbmcgb3BlcmF0aW9ucywgc3VjaCBhcyB3aGVuXG4gICAgICAgICAqIHRoZSBuZXdseSByZXF1ZXN0ZWQgc29ydCBjb21tYW5kIGlzIHRoZSBzYW1lIGFzIHRoZSBhY3RpdmUgb25lLiBUaGUgY2F2ZWF0XG4gICAgICAgICAqIHRvIHRoaXMgb3B0aW1pemF0aW9uIGlzIHRoYXQgXCJsaXZlXCIgZWRpdHMgdG8gdGhlIHZhbHVlIG9mIGEgdGFyZ2V0J3Mgc29ydGluZ1xuICAgICAgICAgKiBhdHRyaWJ1dGUgd2lsbCBiZSBpZ25vcmVkIHdoZW4gcmVxdWVzdGluZyBhIHJlLXNvcnQgYnkgdGhlIHNhbWUgYXR0cmlidXRlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBCeSBzZXR0aW5nIHRvIGBiZWhhdmlvci5saXZlU29ydGAgdG8gYHRydWVgLCB0aGUgbWl4ZXIgd2lsbCBhbHdheXMgcmUtc29ydFxuICAgICAgICAgKiByZWdhcmRsZXNzIG9mIHdoZXRoZXIgb3Igbm90IHRoZSBzb3J0aW5nIGF0dHJpYnV0ZSBhbmQgb3JkZXIgaGF2ZSBjaGFuZ2VkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBFbmFibGluZyBgbGl2ZVNvcnRgIHRvIGFsbG93IGZvciByZS1zb3J0aW5nPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBiZWhhdmlvcjoge1xuICAgICAgICAgKiAgICAgICAgIGxpdmVTb3J0OiB0cnVlXG4gICAgICAgICAqICAgICB9LFxuICAgICAgICAgKiAgICAgbG9hZDoge1xuICAgICAgICAgKiAgICAgICAgIHNvcnQ6ICdlZGl0ZWQ6ZGVzYydcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciB0YXJnZXQgPSBjb250YWluZXJFbC5jaGlsZHJlblszXTtcbiAgICAgICAgICpcbiAgICAgICAgICogY29uc29sZS5sb2codGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1lZGl0ZWQnKSk7IC8vICcyMDE1LTA0LTI0J1xuICAgICAgICAgKlxuICAgICAgICAgKiB0YXJnZXQuc2V0QXR0cmlidXRlKCdkYXRhLWVkaXRlZCcsICcyMDE3LTA4LTEwJyk7IC8vIFVwZGF0ZSB0aGUgdGFyZ2V0J3MgZWRpdGVkIGRhdGVcbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIuc29ydCgnZWRpdGVkOmRlc2MnKVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICAvLyBUaGUgdGFyZ2V0IGlzIG5vdyBhdCB0aGUgdG9wIG9mIHRoZSBsaXN0XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudGFyZ2V0c1swXSA9PT0gdGFyZ2V0KTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBsaXZlU29ydFxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuYmVoYXZpb3JcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7Ym9vbGVhbn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIGZhbHNlXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMubGl2ZVNvcnQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5Db25maWdCZWhhdmlvcik7XG5cbiAgICBtaXhpdHVwLkNvbmZpZ0JlaGF2aW9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLkNvbmZpZ0JlaGF2aW9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG1peGl0dXAuQ29uZmlnQmVoYXZpb3I7XG5cbiAgICAvKipcbiAgICAgKiBBIGdyb3VwIG9mIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9ucyB0byBiZSBpbnZva2VkIGF0IHZhcmlvdXNcbiAgICAgKiBwb2ludHMgd2l0aGluIHRoZSBsaWZlY3ljbGUgb2YgYSBtaXhlciBvcGVyYXRpb24uXG4gICAgICpcbiAgICAgKiBFYWNoIGZ1bmN0aW9uIGlzIGFuYWxvZ291cyB0byBhbiBldmVudCBvZiB0aGUgc2FtZSBuYW1lIHRyaWdnZXJlZCBmcm9tIHRoZVxuICAgICAqIGNvbnRhaW5lciBlbGVtZW50LCBhbmQgaXMgaW52b2tlZCBpbW1lZGlhdGVseSBhZnRlciBpdC5cbiAgICAgKlxuICAgICAqIEFsbCBjYWxsYmFjayBmdW5jdGlvbnMgcmVjZWl2ZSB0aGUgY3VycmVudCBgc3RhdGVgIG9iamVjdCBhcyB0aGVpciBmaXJzdFxuICAgICAqIGFyZ3VtZW50LCBhcyB3ZWxsIGFzIG90aGVyIG1vcmUgc3BlY2lmaWMgYXJndW1lbnRzIGRlc2NyaWJlZCBiZWxvdy5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZ1xuICAgICAqIEBuYW1lICAgICAgICBjYWxsYmFja3NcbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBzaW5jZSAgICAgICAyLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5Db25maWdDYWxsYmFja3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gaW52b2tlZCBpbW1lZGlhdGVseSBhZnRlciBhbnkgTWl4SXRVcCBvcGVyYXRpb24gaXMgcmVxdWVzdGVkXG4gICAgICAgICAqIGFuZCBiZWZvcmUgYW5pbWF0aW9ucyBoYXZlIGJlZ3VuLlxuICAgICAgICAgKlxuICAgICAgICAgKiBBIHNlY29uZCBgZnV0dXJlU3RhdGVgIGFyZ3VtZW50IGlzIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24gd2hpY2ggcmVwcmVzZW50cyB0aGUgZmluYWxcbiAgICAgICAgICogc3RhdGUgb2YgdGhlIG1peGVyIG9uY2UgdGhlIHJlcXVlc3RlZCBvcGVyYXRpb24gaGFzIGNvbXBsZXRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogQWRkaW5nIGFuIGBvbk1peFN0YXJ0YCBjYWxsYmFjayBmdW5jdGlvbjwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAqICAgICAgICAgb25NaXhTdGFydDogZnVuY3Rpb24oc3RhdGUsIGZ1dHVyZVN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3RhcnRpbmcgb3BlcmF0aW9uLi4uJyk7XG4gICAgICAgICAqICAgICAgICAgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIG9uTWl4U3RhcnRcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmNhbGxiYWNrc1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtmdW5jdGlvbn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIG51bGxcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5vbk1peFN0YXJ0ID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiBpbnZva2VkIHdoZW4gYSBNaXhJdFVwIG9wZXJhdGlvbiBpcyByZXF1ZXN0ZWQgd2hpbGUgYW5vdGhlclxuICAgICAgICAgKiBvcGVyYXRpb24gaXMgaW4gcHJvZ3Jlc3MsIGFuZCB0aGUgYW5pbWF0aW9uIHF1ZXVlIGlzIGZ1bGwsIG9yIHF1ZXVlaW5nXG4gICAgICAgICAqIGlzIGRpc2FibGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBBZGRpbmcgYW4gYG9uTWl4QnVzeWAgY2FsbGJhY2sgZnVuY3Rpb248L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgKiAgICAgICAgIG9uTWl4QnVzeTogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNaXhlciBidXN5Jyk7XG4gICAgICAgICAqICAgICAgICAgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIG9uTWl4QnVzeVxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuY2FsbGJhY2tzXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge2Z1bmN0aW9ufVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgbnVsbFxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLm9uTWl4QnVzeSAgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIGludm9rZWQgYWZ0ZXIgYW55IE1peEl0VXAgb3BlcmF0aW9uIGhhcyBjb21wbGV0ZWQsIGFuZCB0aGVcbiAgICAgICAgICogc3RhdGUgaGFzIGJlZW4gdXBkYXRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogQWRkaW5nIGFuIGBvbk1peEVuZGAgY2FsbGJhY2sgZnVuY3Rpb248L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgKiAgICAgICAgIG9uTWl4RW5kOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ09wZXJhdGlvbiBjb21wbGV0ZScpO1xuICAgICAgICAgKiAgICAgICAgIH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBvbk1peEVuZFxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuY2FsbGJhY2tzXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge2Z1bmN0aW9ufVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgbnVsbFxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLm9uTWl4RW5kICAgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIGludm9rZWQgd2hlbmV2ZXIgYW4gb3BlcmF0aW9uIFwiZmFpbHNcIiwgaS5lLiBubyB0YXJnZXRzXG4gICAgICAgICAqIGNvdWxkIGJlIGZvdW5kIG1hdGNoaW5nIHRoZSByZXF1ZXN0ZWQgZmlsdGVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBBZGRpbmcgYW4gYG9uTWl4RmFpbGAgY2FsbGJhY2sgZnVuY3Rpb248L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgKiAgICAgICAgIG9uTWl4RmFpbDogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBpdGVtcyBjb3VsZCBiZSBmb3VuZCBtYXRjaGluZyB0aGUgcmVxdWVzdGVkIGZpbHRlcicpO1xuICAgICAgICAgKiAgICAgICAgIH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBvbk1peEZhaWxcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmNhbGxiYWNrc1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtmdW5jdGlvbn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIG51bGxcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5vbk1peEZhaWwgID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiBpbnZva2VkIHdoZW5ldmVyIGEgTWl4SXRVcCBjb250cm9sIGlzIGNsaWNrZWQsIGFuZCBiZWZvcmUgaXRzXG4gICAgICAgICAqIHJlc3BlY3RpdmUgb3BlcmF0aW9uIGlzIHJlcXVlc3RlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIGNsaWNrZWQgZWxlbWVudCBpcyBhc3NpZ25lZCB0byB0aGUgYHRoaXNgIGtleXdvcmQgd2l0aGluIHRoZSBmdW5jdGlvbi4gVGhlIG9yaWdpbmFsXG4gICAgICAgICAqIGNsaWNrIGV2ZW50IGlzIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24gYXMgdGhlIHNlY29uZCBhcmd1bWVudCwgd2hpY2ggY2FuIGJlIHVzZWZ1bCBpZlxuICAgICAgICAgKiB1c2luZyBgPGE+YCB0YWdzIGFzIGNvbnRyb2xzIHdoZXJlIHRoZSBkZWZhdWx0IGJlaGF2aW9yIG5lZWRzIHRvIGJlIHByZXZlbnRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogUmV0dXJuaW5nIGBmYWxzZWAgZnJvbSB0aGUgY2FsbGJhY2sgd2lsbCBwcmV2ZW50IHRoZSBjb250cm9sIGNsaWNrIGZyb20gdHJpZ2dlcmluZ1xuICAgICAgICAgKiBhbiBvcGVyYXRpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMTogQWRkaW5nIGFuIGBvbk1peENsaWNrYCBjYWxsYmFjayBmdW5jdGlvbjwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAqICAgICAgICAgb25NaXhDbGljazogZnVuY3Rpb24oc3RhdGUsIG9yaWdpbmFsRXZlbnQpIHtcbiAgICAgICAgICogICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGUgY29udHJvbCBcIicgKyB0aGlzLmlubmVyVGV4dCArICdcIiB3YXMgY2xpY2tlZCcpO1xuICAgICAgICAgKiAgICAgICAgIH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMjogVXNpbmcgYG9uTWl4Q2xpY2tgIHRvIG1hbmlwdWxhdGUgdGhlIG9yaWdpbmFsIGNsaWNrIGV2ZW50PC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICogICAgICAgICBvbk1peENsaWNrOiBmdW5jdGlvbihzdGF0ZSwgb3JpZ2luYWxFdmVudCkge1xuICAgICAgICAgKiAgICAgICAgICAgICAgLy8gUHJldmVudCBvcmlnaW5hbCBjbGljayBldmVudCBmcm9tIGJ1YmJsaW5nIHVwOlxuICAgICAgICAgKiAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBiZWhhdmlvciBvZiBjbGlja2VkIGVsZW1lbnQ6XG4gICAgICAgICAqICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAqICAgICAgICAgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAzOiBVc2luZyBgb25NaXhDbGlja2AgdG8gY29uZGl0aW9uYWxseSBjYW5jZWwgb3BlcmF0aW9uczwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAqICAgICAgICAgb25NaXhDbGljazogZnVuY3Rpb24oc3RhdGUsIG9yaWdpbmFsRXZlbnQpIHtcbiAgICAgICAgICogICAgICAgICAgICAgIC8vIFBlcmZvcm0gc29tZSBjb25kaXRpb25hbCBjaGVjazpcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICAgICAgIGlmIChteUFwcC5pc0xvYWRpbmcpIHtcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAvLyBCeSByZXR1cm5pbmcgZmFsc2UsIHdlIGNhbiBwcmV2ZW50IHRoZSBjb250cm9sIGNsaWNrIGZyb20gdHJpZ2dlcmluZyBhbiBvcGVyYXRpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgKiAgICAgICAgICAgICAgfVxuICAgICAgICAgKiAgICAgICAgIH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBvbk1peENsaWNrXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5jYWxsYmFja3NcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7ZnVuY3Rpb259XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICBudWxsXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMub25NaXhDbGljayA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuQ29uZmlnQ2FsbGJhY2tzKTtcblxuICAgIG1peGl0dXAuQ29uZmlnQ2FsbGJhY2tzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLkNvbmZpZ0NhbGxiYWNrcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLkNvbmZpZ0NhbGxiYWNrcztcblxuICAgIC8qKlxuICAgICAqIEEgZ3JvdXAgb2YgcHJvcGVydGllcyByZWxhdGluZyB0byBjbGlja2FibGUgY29udHJvbCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZ1xuICAgICAqIEBuYW1lICAgICAgICBjb250cm9sc1xuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKiBAcHVibGljXG4gICAgICogQHNpbmNlICAgICAgIDIuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLkNvbmZpZ0NvbnRyb2xzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGJvb2xlYW4gZGljdGF0aW5nIHdoZXRoZXIgb3Igbm90IGNvbnRyb2xzIHNob3VsZCBiZSBlbmFibGVkIGZvciB0aGUgbWl4ZXIgaW5zdGFuY2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIGB0cnVlYCAoZGVmYXVsdCBiZWhhdmlvciksIE1peEl0VXAgd2lsbCBzZWFyY2ggdGhlIERPTSBmb3IgYW55IGNsaWNrYWJsZSBlbGVtZW50cyB3aXRoXG4gICAgICAgICAqIGBkYXRhLWZpbHRlcmAsIGBkYXRhLXNvcnRgIG9yIGBkYXRhLXRvZ2dsZWAgYXR0cmlidXRlcywgYW5kIGJpbmQgdGhlbSBmb3IgY2xpY2sgZXZlbnRzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiBgZmFsc2VgLCBubyBjbGljayBoYW5kbGVycyB3aWxsIGJlIGJvdW5kLCBhbmQgYWxsIGZ1bmN0aW9uYWxpdHkgbXVzdCB0aGVyZWZvcmUgYmUgcGVyZm9ybWVkXG4gICAgICAgICAqIHZpYSB0aGUgbWl4ZXIncyBBUEkgbWV0aG9kcy5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgeW91IGRvIG5vdCBpbnRlbmQgdG8gdXNlIHRoZSBkZWZhdWx0IGNvbnRyb2xzLCBzZXR0aW5nIHRoaXMgcHJvcGVydHkgdG8gYGZhbHNlYCB3aWxsXG4gICAgICAgICAqIG1hcmdpbmFsbHkgaW1wcm92ZSB0aGUgc3RhcnR1cCB0aW1lIG9mIHlvdXIgbWl4ZXIgaW5zdGFuY2UsIGFuZCB3aWxsIGFsc28gcHJldmVudCBhbnkgb3RoZXIgYWN0aXZlXG4gICAgICAgICAqIG1peGVyIGluc3RhbmNlcyBpbiB0aGUgRE9NIHdoaWNoIGFyZSBib3VuZCB0byBjb250cm9scyBmcm9tIGNvbnRyb2xsaW5nIHRoZSBpbnN0YW5jZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogRGlzYWJsaW5nIGNvbnRyb2xzPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBjb250cm9sczoge1xuICAgICAgICAgKiAgICAgICAgIGVuYWJsZTogZmFsc2VcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIFdpdGggdGhlIGRlZmF1bHQgY29udHJvbHMgZGlzYWJsZWQsIHdlIGNhbiBvbmx5IGNvbnRyb2xcbiAgICAgICAgICogLy8gdGhlIG1peGVyIHZpYSBpdHMgQVBJIG1ldGhvZHMsIGUuZy46XG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLmZpbHRlcignLmNhdC0xJyk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBlbmFibGVcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmNvbnRyb2xzXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge2Jvb2xlYW59XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICB0cnVlXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuZW5hYmxlID0gdHJ1ZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBib29sZWFuIGRpY3RhdGluZyB3aGV0aGVyIG9yIG5vdCB0byB1c2UgZXZlbnQgZGVsZWdhdGlvbiB3aGVuIGJpbmRpbmcgY2xpY2sgZXZlbnRzXG4gICAgICAgICAqIHRvIHRoZSBkZWZhdWx0IGNvbnRyb2xzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiBgZmFsc2VgIChkZWZhdWx0IGJlaGF2aW9yKSwgZWFjaCBjb250cm9sIGJ1dHRvbiBpbiB0aGUgRE9NIHdpbGwgYmUgZm91bmQgYW5kXG4gICAgICAgICAqIGluZGl2aWR1YWxseSBib3VuZCB3aGVuIGEgbWl4ZXIgaXMgaW5zdGFudGlhdGVkLCB3aXRoIHRoZWlyIGNvcnJlc3BvbmRpbmcgYWN0aW9uc1xuICAgICAgICAgKiBjYWNoZWQgZm9yIHBlcmZvcm1hbmNlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIGEgc2luZ2xlIGNsaWNrIGhhbmRsZXIgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBgd2luZG93YCAob3IgY29udGFpbmVyIGVsZW1lbnQgLSBzZWVcbiAgICAgICAgICogYGNvbmZpZy5jb250cm9scy5zY29wZWApLCBhbmQgYW55IGNsaWNrIGV2ZW50cyB0cmlnZ2VyZWQgYnkgZWxlbWVudHMgd2l0aCBgZGF0YS1maWx0ZXJgLFxuICAgICAgICAgKiBgZGF0YS1zb3J0YCBvciBgZGF0YS10b2dnbGVgIGF0dHJpYnV0ZXMgcHJlc2VudCB3aWxsIGJlIGhhbmRsZWQgYXMgdGhleSBwcm9wYWdhdGUgdXB3YXJkcy5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgeW91IHJlcXVpcmUgYSB1c2VyIGludGVyZmFjZSB3aGVyZSBjb250cm9sIGJ1dHRvbnMgbWF5IGJlIGFkZGVkLCByZW1vdmVkLCBvciBjaGFuZ2VkIGR1cmluZyB0aGVcbiAgICAgICAgICogbGlmZXRpbWUgb2YgYSBtaXhlciwgYGNvbnRyb2xzLmxpdmVgIHNob3VsZCBiZSBzZXQgdG8gYHRydWVgLiBUaGVyZSBpcyBhIG1hcmdpbmFsIGJ1dCB1bmF2b2lkYWJsZVxuICAgICAgICAgKiBwZXJmb3JtYW5jZSBkZWZpY2l0IHdoZW4gdXNpbmcgbGl2ZSBjb250cm9scywgYXMgdGhlIHZhbHVlIG9mIGVhY2ggY29udHJvbCBidXR0b24gbXVzdCBiZSByZWFkXG4gICAgICAgICAqIGZyb20gdGhlIERPTSBpbiByZWFsIHRpbWUgb25jZSB0aGUgY2xpY2sgZXZlbnQgaGFzIHByb3BhZ2F0ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IFNldHRpbmcgbGl2ZSBjb250cm9sczwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgY29udHJvbHM6IHtcbiAgICAgICAgICogICAgICAgICBsaXZlOiB0cnVlXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBDb250cm9sIGJ1dHRvbnMgY2FuIG5vdyBiZSBhZGRlZCwgcmVtb3ZlIGFuZCBjaGFuZ2VkIHdpdGhvdXQgYnJlYWtpbmdcbiAgICAgICAgICogLy8gdGhlIG1peGVyJ3MgVUlcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGxpdmVcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmNvbnRyb2xzXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge2Jvb2xlYW59XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICB0cnVlXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMubGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHN0cmluZyBkaWN0YXRpbmcgdGhlIFwic2NvcGVcIiB0byB1c2Ugd2hlbiBiaW5kaW5nIG9yIHF1ZXJ5aW5nIHRoZSBkZWZhdWx0IGNvbnRyb2xzLiBUaGUgYXZhaWxhYmxlXG4gICAgICAgICAqIHZhbHVlcyBhcmUgYCdnbG9iYWwnYCBvciBgJ2xvY2FsJ2AuXG4gICAgICAgICAqXG4gICAgICAgICAqIFdoZW4gc2V0IHRvIGAnZ2xvYmFsJ2AgKGRlZmF1bHQgYmVoYXZpb3IpLCBNaXhJdFVwIHdpbGwgcXVlcnkgdGhlIGVudGlyZSBkb2N1bWVudCBmb3IgY29udHJvbCBidXR0b25zXG4gICAgICAgICAqIHRvIGJpbmQsIG9yIGRlbGVnYXRlIGNsaWNrIGV2ZW50cyBmcm9tIChzZWUgYGNvbmZpZy5jb250cm9scy5saXZlYCkuXG4gICAgICAgICAqXG4gICAgICAgICAqIFdoZW4gc2V0IHRvIGAnbG9jYWwnYCwgTWl4SXRVcCB3aWxsIG9ubHkgcXVlcnkgKG9yIGJpbmQgY2xpY2sgZXZlbnRzIHRvKSBpdHMgb3duIGNvbnRhaW5lciBlbGVtZW50LlxuICAgICAgICAgKiBUaGlzIG1heSBiZSBkZXNpcmVhYmxlIGlmIHlvdSByZXF1aXJlIG11bHRpcGxlIGFjdGl2ZSBtaXhlciBpbnN0YW5jZXMgd2l0aGluIHRoZSBzYW1lIGRvY3VtZW50LCB3aXRoXG4gICAgICAgICAqIGNvbnRyb2xzIHRoYXQgd291bGQgb3RoZXJ3aXNlIGludGVmZXJlIHdpdGggZWFjaCBvdGhlciBpZiBzY29wZWQgZ2xvYmFsbHkuXG4gICAgICAgICAqXG4gICAgICAgICAqIENvbnZlcnNlbHksIGlmIHlvdSB3aXNoIHRvIGNvbnRyb2wgbXVsdGlwbGUgaW5zdGFuY2VzIHdpdGggYSBzaW5nbGUgVUksIHlvdSB3b3VsZCBjcmVhdGUgb25lXG4gICAgICAgICAqIHNldCBvZiBjb250cm9scyBhbmQga2VlcCB0aGUgY29udHJvbHMgc2NvcGUgb2YgZWFjaCBtaXhlciBzZXQgdG8gYGdsb2JhbGAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IFNldHRpbmcgJ2xvY2FsJyBzY29wZWQgY29udHJvbHM8L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlck9uZSA9IG1peGl0dXAoY29udGFpbmVyT25lLCB7XG4gICAgICAgICAqICAgICBjb250cm9sczoge1xuICAgICAgICAgKiAgICAgICAgIHNjb3BlOiAnbG9jYWwnXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbWl4ZXJUd28gPSBtaXhpdHVwKGNvbnRhaW5lclR3bywge1xuICAgICAgICAgKiAgICAgY29udHJvbHM6IHtcbiAgICAgICAgICogICAgICAgICBzY29wZTogJ2xvY2FsJ1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gQm90aCBtaXhlcnMgY2FuIG5vdyBleGlzdCB3aXRoaW4gdGhlIHNhbWUgZG9jdW1lbnQgd2l0aFxuICAgICAgICAgKiAvLyBpc29sYXRlZCBjb250cm9scyBwbGFjZWQgd2l0aGluIHRoZWlyIGNvbnRhaW5lciBlbGVtZW50cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIHNjb3BlXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5jb250cm9sc1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnZ2xvYmFsJ1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLnNjb3BlID0gJ2dsb2JhbCc7IC8vIGVudW06IFsnbG9jYWwnICwnZ2xvYmFsJ11cblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBzdHJpbmcgZGljdGF0aW5nIHRoZSB0eXBlIG9mIGxvZ2ljIHRvIGFwcGx5IHdoZW4gY29uY2F0ZW5hdGluZyB0aGUgZmlsdGVyIHNlbGVjdG9ycyBvZlxuICAgICAgICAgKiBhY3RpdmUgdG9nZ2xlIGJ1dHRvbnMgKGkuZS4gYW55IGNsaWNrYWJsZSBlbGVtZW50IHdpdGggYSBgZGF0YS10b2dnbGVgIGF0dHJpYnV0ZSkuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHNldCB0byBgJ29yJ2AgKGRlZmF1bHQgYmVoYXZpb3IpLCBzZWxlY3RvcnMgd2lsbCBiZSBjb25jYXRlbmF0ZWQgdG9nZXRoZXIgYXNcbiAgICAgICAgICogYSBjb21tYS1zZXBlcmF0ZWQgbGlzdC4gRm9yIGV4YW1wbGU6XG4gICAgICAgICAqXG4gICAgICAgICAqIGAnLmNhdC0xLCAuY2F0LTInYCAoc2hvd3MgYW55IGVsZW1lbnRzIG1hdGNoaW5nIGAnLmNhdC0xJ2AgT1IgYCcuY2F0LTInYClcbiAgICAgICAgICpcbiAgICAgICAgICogSWYgc2V0IHRvIGAnYW5kJ2AsIHNlbGVjdG9ycyB3aWxsIGJlIGRpcmVjdGx5IGNvbmNhdGVuYXRlZCB0b2dldGhlci4gRm9yIGV4YW1wbGU6XG4gICAgICAgICAqXG4gICAgICAgICAqIGAnLmNhdC0xLmNhdC0yJ2AgKHNob3dzIGFueSBlbGVtZW50cyB3aGljaCBtYXRjaCBib3RoIGAnLmNhdC0xJ2AgQU5EIGAnLmNhdC0yJ2ApXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IFNldHRpbmcgXCJhbmRcIiB0b2dnbGUgbG9naWM8L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGNvbnRyb2xzOiB7XG4gICAgICAgICAqICAgICAgICAgdG9nZ2xlTG9naWM6ICdhbmQnXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgdG9nZ2xlTG9naWNcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmNvbnRyb2xzXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge3N0cmluZ31cbiAgICAgICAgICogQGRlZmF1bHQgICAgICdvcidcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy50b2dnbGVMb2dpYyA9ICdvcic7IC8vIGVudW06IFsnb3InLCAnYW5kJ11cblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBzdHJpbmcgZGljdGF0aW5nIHRoZSBmaWx0ZXIgYmVoYXZpb3Igd2hlbiBhbGwgdG9nZ2xlcyBhcmUgaW5hY3RpdmUuXG4gICAgICAgICAqXG4gICAgICAgICAqIFdoZW4gc2V0IHRvIGAnYWxsJ2AgKGRlZmF1bHQgYmVoYXZpb3IpLCAqYWxsKiB0YXJnZXRzIHdpbGwgYmUgc2hvd24gYnkgZGVmYXVsdFxuICAgICAgICAgKiB3aGVuIG5vIHRvZ2dsZXMgYXJlIGFjdGl2ZSwgb3IgYXQgdGhlIG1vbWVudCBhbGwgYWN0aXZlIHRvZ2dsZXMgYXJlIHRvZ2dsZWQgb2ZmLlxuICAgICAgICAgKlxuICAgICAgICAgKiBXaGVuIHNldCB0byBgJ25vbmUnYCwgbm8gdGFyZ2V0cyB3aWxsIGJlIHNob3duIGJ5IGRlZmF1bHQgd2hlbiBubyB0b2dnbGVzIGFyZVxuICAgICAgICAgKiBhY3RpdmUsIG9yIGF0IHRoZSBtb21lbnQgYWxsIGFjdGl2ZSB0b2dnbGVzIGFyZSB0b2dnbGVkIG9mZi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAxOiBTZXR0aW5nIHRoZSBkZWZhdWx0IHRvZ2dsZSBiZWhhdmlvciB0byBgJ2FsbCdgPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBjb250cm9sczoge1xuICAgICAgICAgKiAgICAgICAgIHRvZ2dsZURlZmF1bHQ6ICdhbGwnXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci50b2dnbGVPbignLmNhdC0yJylcbiAgICAgICAgICogICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgKiAgICAgICAgIC8vIERlYWN0aXZhdGUgYWxsIGFjdGl2ZSB0b2dnbGVzXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgcmV0dXJuIG1peGVyLnRvZ2dsZU9mZignLmNhdC0yJylcbiAgICAgICAgICogICAgIH0pXG4gICAgICAgICAqICAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5hY3RpdmVGaWx0ZXIuc2VsZWN0b3IpOyAvLyAnYWxsJ1xuICAgICAgICAgKiAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS50b3RhbFNob3cpOyAvLyAxMlxuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMjogU2V0dGluZyB0aGUgZGVmYXVsdCB0b2dnbGUgYmVoYXZpb3IgdG8gYCdub25lJ2A8L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGNvbnRyb2xzOiB7XG4gICAgICAgICAqICAgICAgICAgdG9nZ2xlRGVmYXVsdDogJ25vbmUnXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci50b2dnbGVPbignLmNhdC0yJylcbiAgICAgICAgICogICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgKiAgICAgICAgIC8vIERlYWN0aXZhdGUgYWxsIGFjdGl2ZSB0b2dnbGVzXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgcmV0dXJuIG1peGVyLnRvZ2dsZU9mZignLmNhdC0yJylcbiAgICAgICAgICogICAgIH0pXG4gICAgICAgICAqICAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5hY3RpdmVGaWx0ZXIuc2VsZWN0b3IpOyAvLyAnbm9uZSdcbiAgICAgICAgICogICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudG90YWxTaG93KTsgLy8gMFxuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICB0b2dnbGVEZWZhdWx0XG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5jb250cm9sc1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnYWxsJ1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLnRvZ2dsZURlZmF1bHQgPSAnYWxsJzsgLy8gZW51bTogWydhbGwnLCAnbm9uZSddXG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuQ29uZmlnQ29udHJvbHMpO1xuXG4gICAgbWl4aXR1cC5Db25maWdDb250cm9scy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5Db25maWdDb250cm9scy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLkNvbmZpZ0NvbnRyb2xzO1xuXG4gICAgLyoqXG4gICAgICogQSBncm91cCBvZiBwcm9wZXJ0aWVzIGRlZmluaW5nIHRoZSBvdXRwdXQgYW5kIHN0cnVjdHVyZSBvZiBjbGFzcyBuYW1lcyBwcm9ncmFtbWF0aWNhbGx5XG4gICAgICogYWRkZWQgdG8gY29udHJvbHMgYW5kIGNvbnRhaW5lcnMgdG8gcmVmbGVjdCB0aGUgc3RhdGUgb2YgdGhlIG1peGVyLlxuICAgICAqXG4gICAgICogTW9zdCBjb21tb25seSwgY2xhc3MgbmFtZXMgYXJlIGFkZGVkIHRvIGNvbnRyb2xzIGJ5IE1peEl0VXAgdG8gaW5kaWNhdGUgdGhhdFxuICAgICAqIHRoZSBjb250cm9sIGlzIGFjdGl2ZSBzbyB0aGF0IGl0IGNhbiBiZSBzdHlsZWQgYWNjb3JkaW5nbHkgLSBgJ21peGl0dXAtY29udHJvbC1hY3RpdmUnYCBieSBkZWZhdWx0LlxuICAgICAqXG4gICAgICogVXNpbmcgYSBcIkJFTVwiIGxpa2Ugc3RydWN0dXJlLCBlYWNoIGNsYXNzbmFtZSBpcyBicm9rZW4gaW50byB0aGUgdGhyZWUgcGFydHM6XG4gICAgICogYSBibG9jayBuYW1lc3BhY2UgKGAnbWl4aXR1cCdgKSwgYW4gZWxlbWVudCBuYW1lIChlLmcuIGAnY29udHJvbCdgKSwgYW5kIGFuIG9wdGlvbmFsIG1vZGlmaWVyXG4gICAgICogbmFtZSAoZS5nLiBgJ2FjdGl2ZSdgKSByZWZsZWN0aW5nIHRoZSBzdGF0ZSBvZiB0aGUgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEJ5IGRlZmF1bHQsIGVhY2ggcGFydCBvZiB0aGUgY2xhc3NuYW1lIGlzIGNvbmNhdGVuYXRlZCB0b2dldGhlciB1c2luZyBzaW5nbGUgaHlwaGVucyBhc1xuICAgICAqIGRlbGluZWF0b3JzLCBidXQgdGhpcyBjYW4gYmUgZWFzaWx5IGN1c3RvbWlzZWQgdG8gbWF0Y2ggdGhlIG5hbWluZyBjb252ZW50aW9uIGFuZCBzdHlsZSBvZlxuICAgICAqIHlvdXIgcHJvamVjdC5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZ1xuICAgICAqIEBuYW1lICAgICAgICBjbGFzc05hbWVzXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuQ29uZmlnQ2xhc3NOYW1lcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtaXhpdHVwLkJhc2UuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVDb25zdHJ1Y3QnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIFwiYmxvY2tcIiBwb3J0aW9uLCBvciB0b3AtbGV2ZWwgbmFtZXNwYWNlIGFkZGVkIHRvIHRoZSBzdGFydCBvZiBhbnkgY2xhc3MgbmFtZXMgY3JlYXRlZCBieSBNaXhJdFVwLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDE6IGNoYW5naW5nIHRoZSBgY29uZmlnLmNsYXNzTmFtZXMuYmxvY2tgIHZhbHVlPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBjbGFzc05hbWVzOiB7XG4gICAgICAgICAqICAgICAgICAgYmxvY2s6ICdwb3J0Zm9saW8nXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBBY3RpdmUgY29udHJvbCBvdXRwdXQ6IFwicG9ydGZvbGlvLWNvbnRyb2wtYWN0aXZlXCJcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAyOiBSZW1vdmluZyBgY29uZmlnLmNsYXNzTmFtZXMuYmxvY2tgPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBjbGFzc05hbWVzOiB7XG4gICAgICAgICAqICAgICAgICAgYmxvY2s6ICcnXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBBY3RpdmUgY29udHJvbCBvdXRwdXQ6IFwiY29udHJvbC1hY3RpdmVcIlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgYmxvY2tcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmNsYXNzTmFtZXNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7c3RyaW5nfVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgJ21peGl0dXAnXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuYmxvY2sgPSAnbWl4aXR1cCc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBcImVsZW1lbnRcIiBwb3J0aW9uIG9mIHRoZSBjbGFzcyBuYW1lIGFkZGVkIHRvIGNvbnRhaW5lci5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGVsZW1lbnRDb250YWluZXJcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmNsYXNzTmFtZXNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7c3RyaW5nfVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgJ2NvbnRhaW5lcidcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5lbGVtZW50Q29udGFpbmVyID0gJ2NvbnRhaW5lcic7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBcImVsZW1lbnRcIiBwb3J0aW9uIG9mIHRoZSBjbGFzcyBuYW1lIGFkZGVkIHRvIGZpbHRlciBjb250cm9scy5cbiAgICAgICAgICpcbiAgICAgICAgICogQnkgZGVmYXVsdCwgYWxsIGZpbHRlciwgc29ydCwgbXVsdGltaXggYW5kIHRvZ2dsZSBjb250cm9scyB0YWtlIHRoZSBzYW1lIGVsZW1lbnQgdmFsdWUgb2YgYCdjb250cm9sJ2AsIGJ1dFxuICAgICAgICAgKiBlYWNoIHR5cGUncyBlbGVtZW50IHZhbHVlIGNhbiBiZSBpbmRpdmlkdWFsbHkgb3ZlcndyaXR0ZW4gdG8gbWF0Y2ggdGhlIHVuaXF1ZSBjbGFzc05hbWVzIG9mIHlvdXIgY29udHJvbHMgYXMgbmVlZGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDE6IGNoYW5naW5nIHRoZSBgY29uZmlnLmNsYXNzTmFtZXMuZWxlbWVudEZpbHRlcmAgdmFsdWU8L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGNsYXNzTmFtZXM6IHtcbiAgICAgICAgICogICAgICAgICBlbGVtZW50RmlsdGVyOiAnZmlsdGVyJ1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gQWN0aXZlIGZpbHRlciBvdXRwdXQ6IFwibWl4aXR1cC1maWx0ZXItYWN0aXZlXCJcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAyOiBjaGFuZ2luZyB0aGUgYGNvbmZpZy5jbGFzc05hbWVzLmJsb2NrYCBhbmQgYGNvbmZpZy5jbGFzc05hbWVzLmVsZW1lbnRGaWx0ZXJgIHZhbHVlczwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgY2xhc3NOYW1lczoge1xuICAgICAgICAgKiAgICAgICAgIGJsb2NrOiAncG9ydGZvbGlvJyxcbiAgICAgICAgICogICAgICAgICBlbGVtZW50RmlsdGVyOiAnZmlsdGVyJ1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gQWN0aXZlIGZpbHRlciBvdXRwdXQ6IFwicG9ydGZvbGlvLWZpbHRlci1hY3RpdmVcIlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgZWxlbWVudEZpbHRlclxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuY2xhc3NOYW1lc1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnY29udHJvbCdcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5lbGVtZW50RmlsdGVyID0gJ2NvbnRyb2wnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgXCJlbGVtZW50XCIgcG9ydGlvbiBvZiB0aGUgY2xhc3MgbmFtZSBhZGRlZCB0byBzb3J0IGNvbnRyb2xzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBCeSBkZWZhdWx0LCBhbGwgZmlsdGVyLCBzb3J0LCBtdWx0aW1peCBhbmQgdG9nZ2xlIGNvbnRyb2xzIHRha2UgdGhlIHNhbWUgZWxlbWVudCB2YWx1ZSBvZiBgJ2NvbnRyb2wnYCwgYnV0XG4gICAgICAgICAqIGVhY2ggdHlwZSdzIGVsZW1lbnQgdmFsdWUgY2FuIGJlIGluZGl2aWR1YWxseSBvdmVyd3JpdHRlbiB0byBtYXRjaCB0aGUgdW5pcXVlIGNsYXNzTmFtZXMgb2YgeW91ciBjb250cm9scyBhcyBuZWVkZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMTogY2hhbmdpbmcgdGhlIGBjb25maWcuY2xhc3NOYW1lcy5lbGVtZW50U29ydGAgdmFsdWU8L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGNsYXNzTmFtZXM6IHtcbiAgICAgICAgICogICAgICAgICBlbGVtZW50U29ydDogJ3NvcnQnXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBBY3RpdmUgc29ydCBvdXRwdXQ6IFwibWl4aXR1cC1zb3J0LWFjdGl2ZVwiXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMjogY2hhbmdpbmcgdGhlIGBjb25maWcuY2xhc3NOYW1lcy5ibG9ja2AgYW5kIGBjb25maWcuY2xhc3NOYW1lcy5lbGVtZW50U29ydGAgdmFsdWVzPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBjbGFzc05hbWVzOiB7XG4gICAgICAgICAqICAgICAgICAgYmxvY2s6ICdwb3J0Zm9saW8nLFxuICAgICAgICAgKiAgICAgICAgIGVsZW1lbnRTb3J0OiAnc29ydCdcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIEFjdGl2ZSBzb3J0IG91dHB1dDogXCJwb3J0Zm9saW8tc29ydC1hY3RpdmVcIlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgZWxlbWVudFNvcnRcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmNsYXNzTmFtZXNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7c3RyaW5nfVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgJ2NvbnRyb2wnXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuZWxlbWVudFNvcnQgPSAnY29udHJvbCc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBcImVsZW1lbnRcIiBwb3J0aW9uIG9mIHRoZSBjbGFzcyBuYW1lIGFkZGVkIHRvIG11bHRpbWl4IGNvbnRyb2xzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBCeSBkZWZhdWx0LCBhbGwgZmlsdGVyLCBzb3J0LCBtdWx0aW1peCBhbmQgdG9nZ2xlIGNvbnRyb2xzIHRha2UgdGhlIHNhbWUgZWxlbWVudCB2YWx1ZSBvZiBgJ2NvbnRyb2wnYCwgYnV0XG4gICAgICAgICAqIGVhY2ggdHlwZSdzIGVsZW1lbnQgdmFsdWUgY2FuIGJlIGluZGl2aWR1YWxseSBvdmVyd3JpdHRlbiB0byBtYXRjaCB0aGUgdW5pcXVlIGNsYXNzTmFtZXMgb2YgeW91ciBjb250cm9scyBhcyBuZWVkZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMTogY2hhbmdpbmcgdGhlIGBjb25maWcuY2xhc3NOYW1lcy5lbGVtZW50TXVsdGltaXhgIHZhbHVlPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBjbGFzc05hbWVzOiB7XG4gICAgICAgICAqICAgICAgICAgZWxlbWVudE11bHRpbWl4OiAnbXVsdGltaXgnXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBBY3RpdmUgbXVsdGltaXggb3V0cHV0OiBcIm1peGl0dXAtbXVsdGltaXgtYWN0aXZlXCJcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAyOiBjaGFuZ2luZyB0aGUgYGNvbmZpZy5jbGFzc05hbWVzLmJsb2NrYCBhbmQgYGNvbmZpZy5jbGFzc05hbWVzLmVsZW1lbnRNdWx0aW1peGAgdmFsdWVzPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBjbGFzc05hbWVzOiB7XG4gICAgICAgICAqICAgICAgICAgYmxvY2s6ICdwb3J0Zm9saW8nLFxuICAgICAgICAgKiAgICAgICAgIGVsZW1lbnRTb3J0OiAnbXVsdGltaXgnXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBBY3RpdmUgbXVsdGltaXggb3V0cHV0OiBcInBvcnRmb2xpby1tdWx0aW1peC1hY3RpdmVcIlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgZWxlbWVudE11bHRpbWl4XG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5jbGFzc05hbWVzXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge3N0cmluZ31cbiAgICAgICAgICogQGRlZmF1bHQgICAgICdjb250cm9sJ1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmVsZW1lbnRNdWx0aW1peCA9ICdjb250cm9sJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIFwiZWxlbWVudFwiIHBvcnRpb24gb2YgdGhlIGNsYXNzIG5hbWUgYWRkZWQgdG8gdG9nZ2xlIGNvbnRyb2xzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBCeSBkZWZhdWx0LCBhbGwgZmlsdGVyLCBzb3J0LCBtdWx0aW1peCBhbmQgdG9nZ2xlIGNvbnRyb2xzIHRha2UgdGhlIHNhbWUgZWxlbWVudCB2YWx1ZSBvZiBgJ2NvbnRyb2wnYCwgYnV0XG4gICAgICAgICAqIGVhY2ggdHlwZSdzIGVsZW1lbnQgdmFsdWUgY2FuIGJlIGluZGl2aWR1YWxseSBvdmVyd3JpdHRlbiB0byBtYXRjaCB0aGUgdW5pcXVlIGNsYXNzTmFtZXMgb2YgeW91ciBjb250cm9scyBhcyBuZWVkZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMTogY2hhbmdpbmcgdGhlIGBjb25maWcuY2xhc3NOYW1lcy5lbGVtZW50VG9nZ2xlYCB2YWx1ZTwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgY2xhc3NOYW1lczoge1xuICAgICAgICAgKiAgICAgICAgIGVsZW1lbnRUb2dnbGU6ICd0b2dnbGUnXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBBY3RpdmUgdG9nZ2xlIG91dHB1dDogXCJtaXhpdHVwLXRvZ2dsZS1hY3RpdmVcIlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDI6IGNoYW5naW5nIHRoZSBgY29uZmlnLmNsYXNzTmFtZXMuYmxvY2tgIGFuZCBgY29uZmlnLmNsYXNzTmFtZXMuZWxlbWVudFRvZ2dsZWAgdmFsdWVzPC9jYXB0aW9uPlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBjbGFzc05hbWVzOiB7XG4gICAgICAgICAqICAgICAgICAgYmxvY2s6ICdwb3J0Zm9saW8nLFxuICAgICAgICAgKiAgICAgICAgIGVsZW1lbnRUb2dnbGU6ICd0b2dnbGUnXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBBY3RpdmUgdG9nZ2xlIG91dHB1dDogXCJwb3J0Zm9saW8tdG9nZ2xlLWFjdGl2ZVwiXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBlbGVtZW50VG9nZ2xlXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5jbGFzc05hbWVzXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge3N0cmluZ31cbiAgICAgICAgICogQGRlZmF1bHQgICAgICdjb250cm9sJ1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmVsZW1lbnRUb2dnbGUgPSAnY29udHJvbCc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBcIm1vZGlmaWVyXCIgcG9ydGlvbiBvZiB0aGUgY2xhc3MgbmFtZSBhZGRlZCB0byBhY3RpdmUgY29udHJvbHMuXG4gICAgICAgICAqIEBuYW1lICAgICAgICBtb2RpZmllckFjdGl2ZVxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuY2xhc3NOYW1lc1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnYWN0aXZlJ1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLm1vZGlmaWVyQWN0aXZlID0gJ2FjdGl2ZSc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBcIm1vZGlmaWVyXCIgcG9ydGlvbiBvZiB0aGUgY2xhc3MgbmFtZSBhZGRlZCB0byBkaXNhYmxlZCBjb250cm9scy5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIG1vZGlmaWVyRGlzYWJsZWRcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmNsYXNzTmFtZXNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7c3RyaW5nfVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgJ2Rpc2FibGVkJ1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLm1vZGlmaWVyRGlzYWJsZWQgPSAnZGlzYWJsZWQnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgXCJtb2RpZmllclwiIHBvcnRpb24gb2YgdGhlIGNsYXNzIG5hbWUgYWRkZWQgdG8gdGhlIGNvbnRhaW5lciB3aGVuIGluIGEgXCJmYWlsZWRcIiBzdGF0ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIG1vZGlmaWVyRmFpbGVkXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5jbGFzc05hbWVzXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge3N0cmluZ31cbiAgICAgICAgICogQGRlZmF1bHQgICAgICdmYWlsZWQnXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMubW9kaWZpZXJGYWlsZWQgPSAnZmFpbGVkJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRlbGluZWF0b3IgdXNlZCBiZXR3ZWVuIHRoZSBcImJsb2NrXCIgYW5kIFwiZWxlbWVudFwiIHBvcnRpb25zIG9mIGFueSBjbGFzcyBuYW1lIGFkZGVkIGJ5IE1peEl0VXAuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHRoZSBibG9jayBwb3J0aW9uIGlzIG9tbWl0ZWQgYnkgc2V0dGluZyBpdCB0byBhbiBlbXB0eSBzdHJpbmcsIG5vIGRlbGluZWF0b3Igd2lsbCBiZSBhZGRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogY2hhbmdpbmcgdGhlIGRlbGluZWF0b3IgdG8gbWF0Y2ggQkVNIGNvbnZlbnRpb248L2NhcHRpb24+XG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGNsYXNzTmFtZXM6IHtcbiAgICAgICAgICogICAgICAgICBkZWxpbmVhdG9yRWxlbWVudDogJ19fJ1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gZXhhbXBsZSBhY3RpdmUgY29udHJvbCBvdXRwdXQ6IFwibWl4aXR1cF9fY29udHJvbC1hY3RpdmVcIlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgZGVsaW5lYXRvckVsZW1lbnRcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmNsYXNzTmFtZXNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7c3RyaW5nfVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgJy0nXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuZGVsaW5lYXRvckVsZW1lbnQgPSAnLSc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkZWxpbmVhdG9yIHVzZWQgYmV0d2VlbiB0aGUgXCJlbGVtZW50XCIgYW5kIFwibW9kaWZpZXJcIiBwb3J0aW9ucyBvZiBhbnkgY2xhc3MgbmFtZSBhZGRlZCBieSBNaXhJdFVwLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB0aGUgZWxlbWVudCBwb3J0aW9uIGlzIG9tbWl0ZWQgYnkgc2V0dGluZyBpdCB0byBhbiBlbXB0eSBzdHJpbmcsIG5vIGRlbGluZWF0b3Igd2lsbCBiZSBhZGRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogY2hhbmdpbmcgYm90aCBkZWxpbmVhdG9ycyB0byBtYXRjaCBCRU0gY29udmVudGlvbjwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgY2xhc3NOYW1lczoge1xuICAgICAgICAgKiAgICAgICAgIGRlbGluZWF0b3JFbGVtZW50OiAnX18nXG4gICAgICAgICAqICAgICAgICAgZGVsaW5lYXRvck1vZGlmaWVyOiAnLS0nXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBBY3RpdmUgY29udHJvbCBvdXRwdXQ6IFwibWl4aXR1cF9fY29udHJvbC0tYWN0aXZlXCJcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGRlbGluZWF0b3JNb2RpZmllclxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuY2xhc3NOYW1lc1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnLSdcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5kZWxpbmVhdG9yTW9kaWZpZXIgPSAnLSc7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuQ29uZmlnQ2xhc3NOYW1lcyk7XG5cbiAgICBtaXhpdHVwLkNvbmZpZ0NsYXNzTmFtZXMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLkJhc2UucHJvdG90eXBlKTtcblxuICAgIG1peGl0dXAuQ29uZmlnQ2xhc3NOYW1lcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLkNvbmZpZ0NsYXNzTmFtZXM7XG5cbiAgICAvKipcbiAgICAgKiBBIGdyb3VwIG9mIHByb3BlcnRpZXMgcmVsYXRpbmcgdG8gTWl4SXRVcCdzIGRhdGFzZXQgQVBJLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnXG4gICAgICogQG5hbWUgICAgICAgIGRhdGFcbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5Db25maWdEYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHN0cmluZyBzcGVjaWZ5aW5nIHRoZSBuYW1lIG9mIHRoZSBrZXkgY29udGFpbmluZyB5b3VyIGRhdGEgbW9kZWwncyB1bmlxdWVcbiAgICAgICAgICogaWRlbnRpZmllciAoVUlEKS4gVG8gdXNlIHRoZSBkYXRhc2V0IEFQSSwgYSBVSUQga2V5IG11c3QgYmUgc3BlY2lmaWVkIGFuZFxuICAgICAgICAgKiBiZSBwcmVzZW50IGFuZCB1bmlxdWUgb24gYWxsIG9iamVjdHMgaW4gdGhlIGRhdGFzZXQgeW91IHByb3ZpZGUgdG8gTWl4SXRVcC5cbiAgICAgICAgICpcbiAgICAgICAgICogRm9yIGV4YW1wbGUsIGlmIHlvdXIgZGF0YXNldCBpcyBtYWRlIHVwIG9mIE1vbmdvREIgZG9jdW1lbnRzLCB0aGUgVUlEXG4gICAgICAgICAqIGtleSB3b3VsZCBiZSBgJ2lkJ2Agb3IgYCdfaWQnYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogU2V0dGluZyB0aGUgVUlEIHRvIGAnaWQnYDwvY2FwdGlvbj5cbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgZGF0YToge1xuICAgICAgICAgKiAgICAgICAgIHVpZEtleTogJ2lkJ1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIHVpZEtleVxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuZGF0YVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnJ1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLnVpZEtleSA9ICcnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGJvb2xlYW4gZGljdGF0aW5nIHdoZXRoZXIgb3Igbm90IE1peEl0VXAgc2hvdWxkIFwiZGlydHkgY2hlY2tcIiBlYWNoIG9iamVjdCBpblxuICAgICAgICAgKiB5b3VyIGRhdGFzZXQgZm9yIGNoYW5nZXMgd2hlbmV2ZXIgYC5kYXRhc2V0KClgIGlzIGNhbGxlZCwgYW5kIHJlLXJlbmRlciBhbnkgdGFyZ2V0c1xuICAgICAgICAgKiBmb3Igd2hpY2ggYSBjaGFuZ2UgaXMgZm91bmQuXG4gICAgICAgICAqXG4gICAgICAgICAqIERlcGVuZGluZyBvbiB0aGUgY29tcGxleGl0eSBvZiB5b3VyIGRhdGEgbW9kZWwsIGRpcnR5IGNoZWNraW5nIGNhbiBiZSBleHBlbnNpdmVcbiAgICAgICAgICogYW5kIGlzIHRoZXJlZm9yZSBkaXNhYmxlZCBieSBkZWZhdWx0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBOQjogRm9yIGNoYW5nZXMgdG8gYmUgZGV0ZWN0ZWQsIGEgbmV3IGltbXV0YWJsZSBpbnN0YW5jZSBvZiB0aGUgZWRpdGVkIG1vZGVsIG11c3QgYmVcbiAgICAgICAgICogcHJvdmlkZWQgdG8gbWl4aXR1cCwgcmF0aGVyIHRoYW4gbWFuaXB1bGF0aW5nIHByb3BlcnRpZXMgb24gdGhlIGV4aXN0aW5nIGluc3RhbmNlLlxuICAgICAgICAgKiBJZiB5b3VyIGNoYW5nZXMgYXJlIGEgcmVzdWx0IG9mIGEgREIgd3JpdGUgYW5kIHJlYWQsIHlvdSB3aWxsIG1vc3QgbGlrZWx5IGJlIGNhbGxpbmdcbiAgICAgICAgICogYC5kYXRhc2V0KClgIHdpdGggYSBjbGVhbiBzZXQgb2Ygb2JqZWN0cyBlYWNoIHRpbWUsIHNvIHRoaXMgd2lsbCBub3QgYmUgYW4gaXNzdWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IEVuYWJsaW5nIGRpcnR5IGNoZWNraW5nPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbXlEYXRhc2V0ID0gW1xuICAgICAgICAgKiAgICAge1xuICAgICAgICAgKiAgICAgICAgIGlkOiAwLFxuICAgICAgICAgKiAgICAgICAgIHRpdGxlOiBcIkJsb2cgUG9zdCBUaXRsZSAwXCJcbiAgICAgICAgICogICAgICAgICAuLi5cbiAgICAgICAgICogICAgIH0sXG4gICAgICAgICAqICAgICB7XG4gICAgICAgICAqICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAqICAgICAgICAgdGl0bGU6IFwiQmxvZyBQb3N0IFRpdGxlIDFcIlxuICAgICAgICAgKiAgICAgICAgIC4uLlxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiBdO1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBJbnN0YW50aWF0ZSBhIG1peGVyIHdpdGggYSBwcmUtbG9hZGVkIGRhdGFzZXQsIGFuZCBhIHRhcmdldCByZW5kZXJlclxuICAgICAgICAgKiAvLyBmdW5jdGlvbiBkZWZpbmVkXG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGRhdGE6IHtcbiAgICAgICAgICogICAgICAgICB1aWRLZXk6ICdpZCcsXG4gICAgICAgICAqICAgICAgICAgZGlydHlDaGVjazogdHJ1ZVxuICAgICAgICAgKiAgICAgfSxcbiAgICAgICAgICogICAgIGxvYWQ6IHtcbiAgICAgICAgICogICAgICAgICBkYXRhc2V0OiBteURhdGFzZXRcbiAgICAgICAgICogICAgIH0sXG4gICAgICAgICAqICAgICByZW5kZXI6IHtcbiAgICAgICAgICogICAgICAgICB0YXJnZXQ6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gRm9yIGlsbHVzdHJhdGlvbiwgd2Ugd2lsbCBjbG9uZSBhbmQgZWRpdCB0aGUgc2Vjb25kIG9iamVjdCBpbiB0aGUgZGF0YXNldC5cbiAgICAgICAgICogLy8gTkI6IHRoaXMgd291bGQgdHlwaWNhbGx5IGJlIGRvbmUgc2VydmVyLXNpZGUgaW4gcmVzcG9uc2UgdG8gYSBEQiB1cGRhdGUsXG4gICAgICAgICAqIGFuZCB0aGVuIHJlLXF1ZXJpZWQgdmlhIGFuIEFQSS5cbiAgICAgICAgICpcbiAgICAgICAgICogbXlEYXRhc2V0WzFdID0gT2JqZWN0LmFzc2lnbih7fSwgbXlEYXRhc2V0WzFdKTtcbiAgICAgICAgICpcbiAgICAgICAgICogbXlEYXRhc2V0WzFdLnRpdGxlID0gJ0Jsb2cgUG9zdCBUaXRsZSAxMSc7XG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLmRhdGFzZXQobXlEYXRhc2V0KVxuICAgICAgICAgKiAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICogICAgICAgIC8vIHRoZSB0YXJnZXQgd2l0aCBJRCBcIjFcIiwgd2lsbCBiZSByZS1yZW5kZXJlZCByZWZsZWN0aW5nIGl0cyBuZXcgdGl0bGVcbiAgICAgICAgICogICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBkaXJ0eUNoZWNrXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5kYXRhXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge2Jvb2xlYW59XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICBmYWxzZVxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmRpcnR5Q2hlY2sgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5Db25maWdEYXRhKTtcblxuICAgIG1peGl0dXAuQ29uZmlnRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5Db25maWdEYXRhLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG1peGl0dXAuQ29uZmlnRGF0YTtcblxuICAgIC8qKlxuICAgICAqIEEgZ3JvdXAgb2YgcHJvcGVydGllcyBhbGxvd2luZyB0aGUgdG9nZ2xpbmcgb2YgdmFyaW91cyBkZWJ1ZyBmZWF0dXJlcy5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZ1xuICAgICAqIEBuYW1lICAgICAgICBkZWJ1Z1xuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKiBAcHVibGljXG4gICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLkNvbmZpZ0RlYnVnID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGJvb2xlYW4gZGljdGF0aW5nIHdoZXRoZXIgb3Igbm90IHRoZSBtaXhlciBpbnN0YW5jZSByZXR1cm5lZCBieSB0aGVcbiAgICAgICAgICogYG1peGl0dXAoKWAgZmFjdG9yeSBmdW5jdGlvbiBzaG91bGQgZXhwb3NlIHByaXZhdGUgcHJvcGVydGllcyBhbmQgbWV0aG9kcy5cbiAgICAgICAgICpcbiAgICAgICAgICogQnkgZGVmYXVsdCwgbWl4ZXIgaW5zdGFuY2VzIG9ubHkgZXhwb3NlIHRoZWlyIHB1YmxpYyBBUEksIGJ1dCBlbmFibGluZ1xuICAgICAgICAgKiBkZWJ1ZyBtb2RlIHdpbGwgZ2l2ZSB5b3UgYWNjZXNzIHRvIHZhcmlvdXMgbWl4ZXIgaW50ZXJuYWxzIHdoaWNoIG1heSBhaWRcbiAgICAgICAgICogaW4gZGVidWdnaW5nLCBvciB0aGUgYXV0aG9yaW5nIG9mIGV4dGVuc2lvbnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IEVuYWJsaW5nIGRlYnVnIG1vZGU8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGRlYnVnOiB7XG4gICAgICAgICAqICAgICAgICAgZW5hYmxlOiB0cnVlXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBQcml2YXRlIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgd2lsbCBub3cgYmUgdmlzaWJsZSBvbiB0aGUgbWl4ZXIgaW5zdGFuY2U6XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKG1peGVyKTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGVuYWJsZVxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuZGVidWdcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7Ym9vbGVhbn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIGZhbHNlXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuZW5hYmxlID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciBvciBub3Qgd2FybmluZ3Mgc2hvdWxkIGJlIHNob3duIHdoZW4gdmFyaW91c1xuICAgICAgICAgKiBjb21tb24gZ290Y2hhcyBvY2N1ci5cbiAgICAgICAgICpcbiAgICAgICAgICogV2FybmluZ3MgYXJlIGludGVuZGVkIHRvIHByb3ZpZGUgaW5zaWdodHMgZHVyaW5nIGRldmVsb3BtZW50IHdoZW4gc29tZXRoaW5nXG4gICAgICAgICAqIG9jY3VycyB0aGF0IGlzIG5vdCBhIGZhdGFsLCBidXQgbWF5IGluZGljYXRlIGFuIGlzc3VlIHdpdGggeW91ciBpbnRlZ3JhdGlvbixcbiAgICAgICAgICogYW5kIGFyZSB0aGVyZWZvcmUgdHVybmVkIG9uIGJ5IGRlZmF1bHQuIEhvd2V2ZXIsIHlvdSBtYXkgd2lzaCB0byBkaXNhYmxlXG4gICAgICAgICAqIHRoZW0gaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAxOiBEaXNhYmxpbmcgd2FybmluZ3M8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGRlYnVnOiB7XG4gICAgICAgICAqICAgICAgICAgc2hvd1dhcm5pbmdzOiBmYWxzZVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAyOiBEaXNhYmxpbmcgd2FybmluZ3MgYmFzZWQgb24gZW52aXJvbm1lbnQ8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBzaG93V2FybmluZ3MgPSBteUFwcENvbmZpZy5lbnZpcm9ubWVudCA9PT0gJ2RldmVsb3BtZW50JyA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgZGVidWc6IHtcbiAgICAgICAgICogICAgICAgICBzaG93V2FybmluZ3M6IHNob3dXYXJuaW5nc1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIHNob3dXYXJuaW5nc1xuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcuZGVidWdcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7Ym9vbGVhbn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIHRydWVcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5zaG93V2FybmluZ3MgPSB0cnVlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVc2VkIGZvciBzZXJ2ZXItc2lkZSB0ZXN0aW5nIG9ubHkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBuYW1lICAgICAgICBmYXV4QXN5bmNcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmRlYnVnXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge2Jvb2xlYW59XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICBmYWxzZVxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmZhdXhBc3luYyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLkNvbmZpZ0RlYnVnKTtcblxuICAgIG1peGl0dXAuQ29uZmlnRGVidWcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLkJhc2UucHJvdG90eXBlKTtcblxuICAgIG1peGl0dXAuQ29uZmlnRGVidWcucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbWl4aXR1cC5Db25maWdEZWJ1ZztcblxuICAgIC8qKlxuICAgICAqIEEgZ3JvdXAgb2YgcHJvcGVydGllcyByZWxhdGluZyB0byB0aGUgbGF5b3V0IG9mIHRoZSBjb250YWluZXIuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWdcbiAgICAgKiBAbmFtZSAgICAgICAgbGF5b3V0XG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuQ29uZmlnTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGJvb2xlYW4gZGljdGF0aW5nIHdoZXRoZXIgb3Igbm90IG1peGl0dXAgc2hvdWxkIHF1ZXJ5IGFsbCBkZXNjZW5kYW50c1xuICAgICAgICAgKiBvZiB0aGUgY29udGFpbmVyIGZvciB0YXJnZXRzLCBvciBvbmx5IGltbWVkaWF0ZSBjaGlsZHJlbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQnkgZGVmYXVsdCwgbWl4aXR1cCB3aWxsIHF1ZXJ5IGFsbCBkZXNjZW5kYW50cyBtYXRjaGluZyB0aGVcbiAgICAgICAgICogYHNlbGVjdG9ycy50YXJnZXRgIHNlbGVjdG9yIHdoZW4gaW5kZXhpbmcgdGFyZ2V0cyB1cG9uIGluc3RhbnRpYXRpb24uXG4gICAgICAgICAqIFRoaXMgYWxsb3dzIGZvciB0YXJnZXRzIHRvIGJlIG5lc3RlZCBpbnNpZGUgYSBzdWItY29udGFpbmVyIHdoaWNoIGlzXG4gICAgICAgICAqIHVzZWZ1bCB3aGVuIHJpbmctZmVuY2luZyB0YXJnZXRzIGZyb20gbG9jYWxseSBzY29wZWQgY29udHJvbHMgaW4geW91clxuICAgICAgICAgKiBtYXJrdXAgKHNlZSBgY29udHJvbHMuc2NvcGVgKS5cbiAgICAgICAgICpcbiAgICAgICAgICogSG93ZXZlciwgaWYgeW91IGFyZSBidWlsZGluZyBhIG1vcmUgY29tcGxleCBVSSByZXF1aXJpbmcgdGhlIG5lc3RpbmdcbiAgICAgICAgICogb2YgbWl4ZXJzIHdpdGhpbiBtaXhlcnMsIHlvdSB3aWxsIG1vc3QgbGlrZWx5IHdhbnQgdG8gbGltaXQgdGFyZ2V0cyB0b1xuICAgICAgICAgKiBpbW1lZGlhdGUgY2hpbGRyZW4gb2YgdGhlIGNvbnRhaW5lciBieSBzZXR0aW5nIHRoaXMgcHJvcGVydHkgdG8gYGZhbHNlYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogUmVzdHJpY3RpbmcgdGFyZ2V0cyB0byBpbW1lZGlhdGUgY2hpbGRyZW48L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGxheW91dDoge1xuICAgICAgICAgKiAgICAgICAgIGFsbG93TmVzdGVkVGFyZ2V0czogZmFsc2VcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBhbGxvd05lc3RlZFRhcmdldHNcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmxheW91dFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtib29sZWFufVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgdHJ1ZVxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmFsbG93TmVzdGVkVGFyZ2V0cyA9IHRydWU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgc3RyaW5nIHNwZWNpZnlpbmcgYW4gb3B0aW9uYWwgY2xhc3MgbmFtZSB0byBhcHBseSB0byB0aGUgY29udGFpbmVyIHdoZW4gaW5cbiAgICAgICAgICogaXRzIGRlZmF1bHQgc3RhdGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEJ5IGNoYW5naW5nIHRoaXMgY2xhc3MgbmFtZSBvciBhZGRpbmcgYSBjbGFzcyBuYW1lIHRvIHRoZSBjb250YWluZXIgdmlhIHRoZVxuICAgICAgICAgKiBgLmNoYW5nZUxheW91dCgpYCBBUEkgbWV0aG9kLCB0aGUgQ1NTIGxheW91dCBvZiB0aGUgY29udGFpbmVyIGNhbiBiZSBjaGFuZ2VkLFxuICAgICAgICAgKiBhbmQgTWl4SXRVcCB3aWxsIGF0dGVtcCB0byBncmFjZWZ1bGx5IGFuaW1hdGUgdGhlIGNvbnRhaW5lciBhbmQgaXRzIHRhcmdldHNcbiAgICAgICAgICogYmV0d2VlbiBzdGF0ZXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMTogU3BlY2lmeWluZyBhIGNvbnRhaW5lciBjbGFzcyBuYW1lPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICogICAgICAgICBjb250YWluZXJDbGFzc05hbWU6ICdncmlkJ1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAyOiBDaGFuZ2luZyB0aGUgZGVmYXVsdCBjbGFzcyBuYW1lIHdpdGggYC5jaGFuZ2VMYXlvdXQoKWA8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGxheW91dDoge1xuICAgICAgICAgKiAgICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZTogJ2dyaWQnXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5jaGFuZ2VMYXlvdXQoJ2xpc3QnKVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICAgY29uc29sZS5sb2coc3RhdGUuYWN0aXZlQ29udGFpbmVyQ2xhc3MpOyAvLyBcImxpc3RcIlxuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBjb250YWluZXJDbGFzc05hbWVcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmxheW91dFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnJ1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmNvbnRhaW5lckNsYXNzTmFtZSA9ICcnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHJlZmVyZW5jZSB0byBhIG5vbi10YXJnZXQgc2libGluZyBlbGVtZW50IGFmdGVyIHdoaWNoIHRvIGluc2VydCB0YXJnZXRzXG4gICAgICAgICAqIHdoZW4gdGhlcmUgYXJlIG5vIHRhcmdldHMgaW4gdGhlIGNvbnRhaW5lci5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogU2V0dGluZyBhIGBzaWJsaW5nQmVmb3JlYCByZWZlcmVuY2UgZWxlbWVudDwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIGFkZEJ1dHRvbiA9IGNvbnRhaW5lckVsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICogICAgICAgICBzaWJsaW5nQmVmb3JlOiBhZGRCdXR0b25cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBzaWJsaW5nQmVmb3JlXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5sYXlvdXRcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7SFRNTEVsZW1lbnR9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICBudWxsXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuc2libGluZ0JlZm9yZSA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcmVmZXJlbmNlIHRvIGEgbm9uLXRhcmdldCBzaWJsaW5nIGVsZW1lbnQgYmVmb3JlIHdoaWNoIHRvIGluc2VydCB0YXJnZXRzXG4gICAgICAgICAqIHdoZW4gdGhlcmUgYXJlIG5vIHRhcmdldHMgaW4gdGhlIGNvbnRhaW5lci5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogU2V0dGluZyBhbiBgc2libGluZ0FmdGVyYCByZWZlcmVuY2UgZWxlbWVudDwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIGdhcCA9IGNvbnRhaW5lckVsLnF1ZXJ5U2VsZWN0b3IoJy5nYXAnKTtcbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgbGF5b3V0OiB7XG4gICAgICAgICAqICAgICAgICAgc2libGluZ0FmdGVyOiBnYXBcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBzaWJsaW5nQWZ0ZXJcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmxheW91dFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtIVE1MRWxlbWVudH1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIG51bGxcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5zaWJsaW5nQWZ0ZXIgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLkNvbmZpZ0xheW91dCk7XG5cbiAgICBtaXhpdHVwLkNvbmZpZ0xheW91dC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5Db25maWdMYXlvdXQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbWl4aXR1cC5Db25maWdMYXlvdXQ7XG5cbiAgICAvKipcbiAgICAgKiBBIGdyb3VwIG9mIHByb3BlcnRpZXMgZGVmaW5pbmcgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIG1peGVyIG9uIGxvYWQgKGluc3RhbnRpYXRpb24pLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnXG4gICAgICogQG5hbWUgICAgICAgIGxvYWRcbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBzaW5jZSAgICAgICAyLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5Db25maWdMb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHN0cmluZyBkZWZpbmluZyBhbnkgZmlsdGVyaW5nIHRvIGJlIHN0YXRpY2FsbHkgYXBwbGllZCB0byB0aGUgbWl4ZXIgb24gbG9hZC5cbiAgICAgICAgICogQXMgcGVyIHRoZSBgLmZpbHRlcigpYCBBUEksIHRoaXMgY2FuIGJlIGFueSB2YWxpZCBzZWxlY3RvciBzdHJpbmcsIG9yIHRoZVxuICAgICAgICAgKiB2YWx1ZXMgYCdhbGwnYCBvciBgJ25vbmUnYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAxOiBEZWZpbmluZyBhbiBpbml0aWFsIGZpbHRlciBzZWxlY3RvciB0byBiZSBhcHBsaWVkIG9uIGxvYWQ8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIFRoZSBtaXhlciB3aWxsIHNob3cgb25seSB0aG9zZSB0YXJnZXRzIG1hdGNoaW5nICcuY2F0ZWdvcnktYScgb24gbG9hZC5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgbG9hZDoge1xuICAgICAgICAgKiAgICAgICAgIGZpbHRlcjogJy5jYXRlZ29yeS1hJ1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAyOiBIaWRpbmcgYWxsIHRhcmdldHMgb24gbG9hZDwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogLy8gVGhlIG1peGVyIHdpbGwgc2hvdyBoaWRlIGFsbCB0YXJnZXRzIG9uIGxvYWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGxvYWQ6IHtcbiAgICAgICAgICogICAgICAgICBmaWx0ZXI6ICdub25lJ1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGZpbHRlclxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5Db25maWcubG9hZFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnYWxsJ1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmZpbHRlciA9ICdhbGwnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHN0cmluZyBkZWZpbmluZyBhbnkgc29ydGluZyB0byBiZSBzdGF0aWNhbGx5IGFwcGxpZWQgdG8gdGhlIG1peGVyIG9uIGxvYWQuXG4gICAgICAgICAqIEFzIHBlciB0aGUgYC5zb3J0KClgIEFQSSwgdGhpcyBzaG91bGQgYmUgYSB2YWxpZCBcInNvcnQgc3RyaW5nXCIgbWFkZSB1cCBvZlxuICAgICAgICAgKiBhbiBhdHRyaWJ1dGUgdG8gc29ydCBieSAob3IgYCdkZWZhdWx0J2ApIGZvbGxvd2VkIGJ5IGFuIG9wdGlvbmFsIHNvcnRpbmdcbiAgICAgICAgICogb3JkZXIsIG9yIHRoZSB2YWx1ZSBgJ3JhbmRvbSdgO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBEZWZpbmluZyBzb3J0aW5nIHRvIGJlIGFwcGxpZWQgb24gbG9hZDwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogLy8gVGhlIG1peGVyIHdpbGwgc29ydCB0aGUgY29udGFpbmVyIGJ5IHRoZSB2YWx1ZSBvZiB0aGUgYGRhdGEtcHVibGlzaGVkLWRhdGVgXG4gICAgICAgICAqIC8vIGF0dHJpYnV0ZSwgaW4gZGVzY2VuZGluZyBvcmRlci5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgbG9hZDoge1xuICAgICAgICAgKiAgICAgICAgIHNvcnQ6ICdwdWJsaXNoZWQtZGF0ZTpkZXNjJ1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIHNvcnRcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmxvYWRcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7c3RyaW5nfVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgJ2RlZmF1bHQ6YXNjJ1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLnNvcnQgPSAnZGVmYXVsdDphc2MnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBhcnJheSBvZiBvYmplY3RzIHJlcHJlc2VudGluZyB0aGUgdW5kZXJseWluZyBkYXRhIG9mIGFueSBwcmUtcmVuZGVyZWQgdGFyZ2V0cyxcbiAgICAgICAgICogd2hlbiB1c2luZyB0aGUgYC5kYXRhc2V0KClgIEFQSS5cbiAgICAgICAgICpcbiAgICAgICAgICogTkI6IElmIHRhcmdldHMgYXJlIHByZS1yZW5kZXJlZCB3aGVuIHRoZSBtaXhlciBpcyBpbnN0YW50aWF0ZWQsIHRoaXMgbXVzdCBiZSBzZXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IERlZmluaW5nIHRoZSBpbml0aWFsIHVuZGVyeWxpbmcgZGF0YXNldDwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIG15RGF0YXNldCA9IFtcbiAgICAgICAgICogICAgIHtcbiAgICAgICAgICogICAgICAgICBpZDogMCxcbiAgICAgICAgICogICAgICAgICB0aXRsZTogXCJCbG9nIFBvc3QgVGl0bGUgMFwiLFxuICAgICAgICAgKiAgICAgICAgIC4uLlxuICAgICAgICAgKiAgICAgfSxcbiAgICAgICAgICogICAgIHtcbiAgICAgICAgICogICAgICAgICBpZDogMSxcbiAgICAgICAgICogICAgICAgICB0aXRsZTogXCJCbG9nIFBvc3QgVGl0bGUgMVwiLFxuICAgICAgICAgKiAgICAgICAgIC4uLlxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiBdO1xuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBkYXRhOiB7XG4gICAgICAgICAqICAgICAgICAgdWlkS2V5OiAnaWQnXG4gICAgICAgICAqICAgICB9LFxuICAgICAgICAgKiAgICAgbG9hZDoge1xuICAgICAgICAgKiAgICAgICAgIGRhdGFzZXQ6IG15RGF0YXNldFxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGRhdGFzZXRcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLmxvYWRcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7QXJyYXkuPG9iamVjdD59XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICBudWxsXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuZGF0YXNldCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuQ29uZmlnTG9hZCk7XG5cbiAgICBtaXhpdHVwLkNvbmZpZ0xvYWQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLkJhc2UucHJvdG90eXBlKTtcblxuICAgIG1peGl0dXAuQ29uZmlnTG9hZC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLkNvbmZpZ0xvYWQ7XG5cbiAgICAvKipcbiAgICAgKiBBIGdyb3VwIG9mIHByb3BlcnRpZXMgZGVmaW5pbmcgdGhlIHNlbGVjdG9ycyB1c2VkIHRvIHF1ZXJ5IGVsZW1lbnRzIHdpdGhpbiBhIG1peGl0dXAgY29udGFpbmVyLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnXG4gICAgICogQG5hbWUgICAgICAgIHNlbGVjdG9yc1xuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKiBAcHVibGljXG4gICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLkNvbmZpZ1NlbGVjdG9ycyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtaXhpdHVwLkJhc2UuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVDb25zdHJ1Y3QnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBzZWxlY3RvciBzdHJpbmcgdXNlZCB0byBxdWVyeSBhbmQgaW5kZXggdGFyZ2V0IGVsZW1lbnRzIHdpdGhpbiB0aGUgY29udGFpbmVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBCeSBkZWZhdWx0LCB0aGUgY2xhc3Mgc2VsZWN0b3IgYCcubWl4J2AgaXMgdXNlZCwgYnV0IHRoaXMgY2FuIGJlIGNoYW5nZWQgdG8gYW5cbiAgICAgICAgICogYXR0cmlidXRlIG9yIGVsZW1lbnQgc2VsZWN0b3IgdG8gbWF0Y2ggdGhlIHN0eWxlIG9mIHlvdXIgcHJvamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAxOiBDaGFuZ2luZyB0aGUgdGFyZ2V0IHNlbGVjdG9yPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBzZWxlY3RvcnM6IHtcbiAgICAgICAgICogICAgICAgICB0YXJnZXQ6ICcucG9ydGZvbGlvLWl0ZW0nXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDI6IFVzaW5nIGFuIGF0dHJpYnV0ZSBzZWxlY3RvciBhcyBhIHRhcmdldCBzZWxlY3RvcjwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogLy8gVGhlIG1peGVyIHdpbGwgc2VhcmNoIGZvciBhbnkgY2hpbGRyZW4gd2l0aCB0aGUgYXR0cmlidXRlIGBkYXRhLXJlZj1cIm1peFwiYFxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBzZWxlY3RvcnM6IHtcbiAgICAgICAgICogICAgICAgICB0YXJnZXQ6ICdbZGF0YS1yZWY9XCJtaXhcIl0nXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgdGFyZ2V0XG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5zZWxlY3RvcnNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7c3RyaW5nfVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgJy5taXgnXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gJy5taXgnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIG9wdGlvbmFsIHNlbGVjdG9yIHN0cmluZyB1c2VkIHRvIGFkZCBmdXJ0aGVyIHNwZWNpZmljaXR5IHRvIHRoZSBxdWVyeWluZyBvZiBjb250cm9sIGVsZW1lbnRzLFxuICAgICAgICAgKiBpbiBhZGRpdGlvbiB0byB0aGVpciBtYW5kYXRvcnkgZGF0YSBhdHRyaWJ1dGUgKGUuZy4gYGRhdGEtZmlsdGVyYCwgYGRhdGEtdG9nZ2xlYCwgYGRhdGEtc29ydGApLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGNhbiBiZSB1c2VkIGlmIG90aGVyIGVsZW1lbnRzIGluIHlvdXIgZG9jdW1lbnQgbXVzdCBjb250YWluIHRoZSBhYm92ZSBhdHRyaWJ1dGVzXG4gICAgICAgICAqIChlLmcuIGZvciB1c2UgaW4gdGhpcmQtcGFydHkgc2NyaXB0cyksIGFuZCB3b3VsZCBvdGhlcndpc2UgaW50ZXJmZXJlIHdpdGggTWl4SXRVcC4gQWRkaW5nXG4gICAgICAgICAqIGFuIGFkZGl0aW9uYWwgYGNvbnRyb2xgIHNlbGVjdG9yIG9mIHlvdXIgY2hvaWNlIGFsbG93cyBNaXhJdFVwIHRvIHJlc3RyaWN0IGV2ZW50IGhhbmRsaW5nXG4gICAgICAgICAqIHRvIG9ubHkgdGhvc2UgZWxlbWVudHMgbWF0Y2hpbmcgdGhlIGRlZmluZWQgc2VsZWN0b3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBjb250cm9sXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZy5zZWxlY3RvcnNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7c3RyaW5nfVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgJydcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAxOiBBZGRpbmcgYSBgc2VsZWN0b3JzLmNvbnRyb2xgIHNlbGVjdG9yPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICBzZWxlY3RvcnM6IHtcbiAgICAgICAgICogICAgICAgICBjb250cm9sOiAnLm1peGl0dXAtY29udHJvbCdcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIFdpbGwgbm90IGJlIGhhbmRsZWQ6XG4gICAgICAgICAqIC8vIDxidXR0b24gZGF0YS1maWx0ZXI9XCIuY2F0ZWdvcnktYVwiPjwvYnV0dG9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBXaWxsIGJlIGhhbmRsZWQ6XG4gICAgICAgICAqIC8vIDxidXR0b24gY2xhc3M9XCJtaXhpdHVwLWNvbnRyb2xcIiBkYXRhLWZpbHRlcj1cIi5jYXRlZ29yeS1hXCI+PC9idXR0b24+XG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuY29udHJvbCA9ICcnO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLkNvbmZpZ1NlbGVjdG9ycyk7XG5cbiAgICBtaXhpdHVwLkNvbmZpZ1NlbGVjdG9ycy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5Db25maWdTZWxlY3RvcnMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbWl4aXR1cC5Db25maWdTZWxlY3RvcnM7XG5cbiAgICAvKipcbiAgICAgKiBBIGdyb3VwIG9mIG9wdGlvbmFsIHJlbmRlciBmdW5jdGlvbnMgZm9yIGNyZWF0aW5nIGFuZCB1cGRhdGluZyBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEFsbCByZW5kZXIgZnVuY3Rpb25zIHJlY2VpdmUgYSBkYXRhIG9iamVjdCwgYW5kIHNob3VsZCByZXR1cm4gYSB2YWxpZCBIVE1MIHN0cmluZy5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkNvbmZpZ1xuICAgICAqIEBuYW1lICAgICAgICByZW5kZXJcbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5Db25maWdSZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgZnVuY3Rpb24gcmV0dXJuaW5nIGFuIEhUTUwgc3RyaW5nIHJlcHJlc2VudGluZyBhIHRhcmdldCBlbGVtZW50LCBvciBhIHJlZmVyZW5jZSB0byBhXG4gICAgICAgICAqIHNpbmdsZSBET00gZWxlbWVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIGZ1bmN0aW9uIGlzIGludm9rZWQgYXMgcGFydCBvZiB0aGUgYC5kYXRhc2V0KClgIEFQSSwgd2hlbmV2ZXIgYSBuZXcgaXRlbSBpcyBhZGRlZFxuICAgICAgICAgKiB0byB0aGUgZGF0YXNldCwgb3IgYW4gaXRlbSBpbiB0aGUgZGF0YXNldCBjaGFuZ2VzIChpZiBgZGF0YXNldC5kaXJ0eUNoZWNrYCBpcyBlbmFibGVkKS5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIGZ1bmN0aW9uIHJlY2VpdmVzIHRoZSByZWxldmFudCBkYXRhc2V0IGl0ZW0gYXMgaXRzIGZpcnN0IHBhcmFtZXRlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAxOiBVc2luZyBzdHJpbmcgY29uY2F0ZW5hdGlvbjwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgcmVuZGVyOiB7XG4gICAgICAgICAqICAgICAgICAgdGFyZ2V0OiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAqICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAnJmx0O2RpdiBjbGFzcz1cIm1peFwiJmd0OycgK1xuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICcmbHQ7aDImZ3Q7JyArIGl0ZW0udGl0bGUgKyAnJmx0Oy9oMiZndDsnICtcbiAgICAgICAgICogICAgICAgICAgICAgICAgICcmbHQ7L2RpdiZndDsnXG4gICAgICAgICAqICAgICAgICAgICAgICk7XG4gICAgICAgICAqICAgICAgICAgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAyOiBVc2luZyBhbiBFUzIwMTUgdGVtcGxhdGUgbGl0ZXJhbDwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIG1peGVyID0gbWl4aXR1cChjb250YWluZXJFbCwge1xuICAgICAgICAgKiAgICAgcmVuZGVyOiB7XG4gICAgICAgICAqICAgICAgICAgdGFyZ2V0OiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAqICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAqICAgICAgICAgICAgICAgICBgJmx0O2RpdiBjbGFzcz1cIm1peFwiJmd0O1xuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICZsdDtoMiZndDske2l0ZW0udGl0bGV9Jmx0Oy9oMiZndDtcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAmbHQ7L2RpdiZndDtgXG4gICAgICAgICAqICAgICAgICAgICAgICk7XG4gICAgICAgICAqICAgICAgICAgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAzOiBVc2luZyBhIEhhbmRsZWJhcnMgdGVtcGxhdGU8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciB0YXJnZXRUZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZSgnJmx0O2RpdiBjbGFzcz1cIm1peFwiJmd0OyZsdDtoMiZndDt7e3RpdGxlfX0mbHQ7L2gyJmd0OyZsdDsvZGl2Jmd0OycpO1xuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICByZW5kZXI6IHtcbiAgICAgICAgICogICAgICAgICB0YXJnZXQ6IHRhcmdldFRlbXBsYXRlXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDQ6IFJldHVybmluZyBhIERPTSBlbGVtZW50PC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAqICAgICByZW5kZXI6IHtcbiAgICAgICAgICogICAgICAgICB0YXJnZXQ6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICogICAgICAgICAgICAgIC8vIENyZWF0ZSBhIHNpbmdsZSBlbGVtZW50IHVzaW5nIHlvdXIgZnJhbWV3b3JrJ3MgYnVpbHQtaW4gcmVuZGVyZXJcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICAgICAgIHZhciBlbCA9IC4uLlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICAgKiAgICAgICAgIH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICB0YXJnZXRcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuQ29uZmlnLnJlbmRlclxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtmdW5jdGlvbn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgICdudWxsJ1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuQ29uZmlnUmVuZGVyKTtcblxuICAgIG1peGl0dXAuQ29uZmlnUmVuZGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLkNvbmZpZ1JlbmRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLkNvbmZpZ1JlbmRlcjtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuQ29uZmlnVGVtcGxhdGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLkNvbmZpZ1RlbXBsYXRlcyk7XG5cbiAgICBtaXhpdHVwLkNvbmZpZ1RlbXBsYXRlcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5Db25maWdUZW1wbGF0ZXMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbWl4aXR1cC5Db25maWdUZW1wbGF0ZXM7XG5cbiAgICAvKipcbiAgICAgKiBgbWl4aXR1cC5Db25maWdgIGlzIGFuIGludGVyZmFjZSB1c2VkIGZvciBjdXN0b21pc2luZyB0aGUgZnVuY3Rpb25hbGl0eSBvZiBhXG4gICAgICogbWl4ZXIgaW5zdGFuY2UuIEl0IGlzIG9yZ2FuaXNlZCBpbnRvIHNldmVyYWwgc2VtYW50aWNhbGx5IGRpc3RpbmN0IHN1Yi1vYmplY3RzLFxuICAgICAqIGVhY2ggb25lIHBlcnRhaW5pbmcgdG8gYSBwYXJ0aWN1bGFyIGFzcGVjdCBvZiBNaXhJdFVwIGZ1bmN0aW9uYWxpdHkuXG4gICAgICpcbiAgICAgKiBBbiBvYmplY3QgbGl0ZXJhbCBjb250YWluaW5nIGFueSBvciBhbGwgb2YgdGhlIGF2YWlsYWJsZSBwcm9wZXJpZXMsXG4gICAgICoga25vd24gYXMgdGhlIFwiY29uZmlndXJhdGlvbiBvYmplY3RcIiwgY2FuIGJlIHBhc3NlZCBhcyB0aGUgc2Vjb25kIHBhcmFtZXRlciB0b1xuICAgICAqIHRoZSBgbWl4aXR1cGAgZmFjdG9yeSBmdW5jdGlvbiB3aGVuIGNyZWF0aW5nIGEgbWl4ZXIgaW5zdGFuY2UgdG8gY3VzdG9taXNlIGl0c1xuICAgICAqIGZ1bmN0aW9uYWxpdHkgYXMgbmVlZGVkLlxuICAgICAqXG4gICAgICogSWYgbm8gY29uZmlndXJhdGlvbiBvYmplY3QgaXMgcGFzc2VkLCB0aGUgbWl4ZXIgaW5zdGFuY2Ugd2lsbCB0YWtlIG9uIHRoZSBkZWZhdWx0XG4gICAgICogY29uZmlndXJhdGlvbiB2YWx1ZXMgZGV0YWlsZWQgYmVsb3cuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDE6IENyZWF0aW5nIGFuZCBwYXNzaW5nIHRoZSBjb25maWd1cmF0aW9uIG9iamVjdDwvY2FwdGlvbj5cbiAgICAgKiAvLyBDcmVhdGUgYSBjb25maWd1cmF0aW9uIG9iamVjdCB3aXRoIGRlc2lyZWQgdmFsdWVzXG4gICAgICpcbiAgICAgKiB2YXIgY29uZmlnID0ge1xuICAgICAqICAgICBhbmltYXRpb246IHtcbiAgICAgKiAgICAgICAgIGVuYWJsZTogZmFsc2VcbiAgICAgKiAgICAgfSxcbiAgICAgKiAgICAgc2VsZWN0b3JzOiB7XG4gICAgICogICAgICAgICB0YXJnZXQ6ICcuaXRlbSdcbiAgICAgKiAgICAgfVxuICAgICAqIH07XG4gICAgICpcbiAgICAgKiAvLyBQYXNzIHRoZSBjb25maWd1cmF0aW9uIG9iamVjdCB0byB0aGUgbWl4aXR1cCBmYWN0b3J5IGZ1bmN0aW9uXG4gICAgICpcbiAgICAgKiB2YXIgbWl4ZXIgPSBtaXhpdHVwKGNvbnRhaW5lckVsLCBjb25maWcpO1xuICAgICAqXG4gICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAyOiBQYXNzaW5nIHRoZSBjb25maWd1cmF0aW9uIG9iamVjdCBpbmxpbmU8L2NhcHRpb24+XG4gICAgICogLy8gVHlwaWNhbGx5LCB0aGUgY29uZmlndXJhdGlvbiBvYmplY3QgaXMgcGFzc2VkIGlubGluZSBmb3IgYnJldml0eS5cbiAgICAgKlxuICAgICAqIHZhciBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgKiAgICAgY29udHJvbHM6IHtcbiAgICAgKiAgICAgICAgIGxpdmU6IHRydWUsXG4gICAgICogICAgICAgICB0b2dnbGVMb2dpYzogJ2FuZCdcbiAgICAgKiAgICAgfVxuICAgICAqIH0pO1xuICAgICAqXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cFxuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKiBAcHVibGljXG4gICAgICogQHNpbmNlICAgICAgIDIuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLkNvbmZpZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtaXhpdHVwLkJhc2UuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVDb25zdHJ1Y3QnKTtcblxuICAgICAgICB0aGlzLmFuaW1hdGlvbiAgICAgICAgICA9IG5ldyBtaXhpdHVwLkNvbmZpZ0FuaW1hdGlvbigpO1xuICAgICAgICB0aGlzLmJlaGF2aW9yICAgICAgICAgICA9IG5ldyBtaXhpdHVwLkNvbmZpZ0JlaGF2aW9yKCk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzICAgICAgICAgID0gbmV3IG1peGl0dXAuQ29uZmlnQ2FsbGJhY2tzKCk7XG4gICAgICAgIHRoaXMuY29udHJvbHMgICAgICAgICAgID0gbmV3IG1peGl0dXAuQ29uZmlnQ29udHJvbHMoKTtcbiAgICAgICAgdGhpcy5jbGFzc05hbWVzICAgICAgICAgPSBuZXcgbWl4aXR1cC5Db25maWdDbGFzc05hbWVzKCk7XG4gICAgICAgIHRoaXMuZGF0YSAgICAgICAgICAgICAgID0gbmV3IG1peGl0dXAuQ29uZmlnRGF0YSgpO1xuICAgICAgICB0aGlzLmRlYnVnICAgICAgICAgICAgICA9IG5ldyBtaXhpdHVwLkNvbmZpZ0RlYnVnKCk7XG4gICAgICAgIHRoaXMubGF5b3V0ICAgICAgICAgICAgID0gbmV3IG1peGl0dXAuQ29uZmlnTGF5b3V0KCk7XG4gICAgICAgIHRoaXMubG9hZCAgICAgICAgICAgICAgID0gbmV3IG1peGl0dXAuQ29uZmlnTG9hZCgpO1xuICAgICAgICB0aGlzLnNlbGVjdG9ycyAgICAgICAgICA9IG5ldyBtaXhpdHVwLkNvbmZpZ1NlbGVjdG9ycygpO1xuICAgICAgICB0aGlzLnJlbmRlciAgICAgICAgICAgICA9IG5ldyBtaXhpdHVwLkNvbmZpZ1JlbmRlcigpO1xuICAgICAgICB0aGlzLnRlbXBsYXRlcyAgICAgICAgICA9IG5ldyBtaXhpdHVwLkNvbmZpZ1RlbXBsYXRlcygpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLkNvbmZpZyk7XG5cbiAgICBtaXhpdHVwLkNvbmZpZy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5Db25maWcucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbWl4aXR1cC5Db25maWc7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLk1peGVyRG9tID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMuZG9jdW1lbnQgICAgICAgICAgICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMuYm9keSAgICAgICAgICAgICAgICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMuY29udGFpbmVyICAgICAgICAgICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMucGFyZW50ICAgICAgICAgICAgICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMudGFyZ2V0cyAgICAgICAgICAgICAgICA9IFtdO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLk1peGVyRG9tKTtcblxuICAgIG1peGl0dXAuTWl4ZXJEb20ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLkJhc2UucHJvdG90eXBlKTtcblxuICAgIG1peGl0dXAuTWl4ZXJEb20ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbWl4aXR1cC5NaXhlckRvbTtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuVWlDbGFzc05hbWVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMuYmFzZSAgICAgICA9ICcnO1xuICAgICAgICB0aGlzLmFjdGl2ZSAgICAgPSAnJztcbiAgICAgICAgdGhpcy5kaXNhYmxlZCAgID0gJyc7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuVWlDbGFzc05hbWVzKTtcblxuICAgIG1peGl0dXAuVWlDbGFzc05hbWVzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLlVpQ2xhc3NOYW1lcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLlVpQ2xhc3NOYW1lcztcblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCBpbnRvIHdoaWNoIGFsbCBhcmJpdHJhcnkgYXJndW1lbnRzIHNlbnQgdG8gJy5kYXRhc2V0KCknIGFyZSBtYXBwZWQuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLkNvbW1hbmREYXRhc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMuZGF0YXNldCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuQ29tbWFuZERhdGFzZXQpO1xuXG4gICAgbWl4aXR1cC5Db21tYW5kRGF0YXNldC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5Db21tYW5kRGF0YXNldC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLkNvbW1hbmREYXRhc2V0O1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IGludG8gd2hpY2ggYWxsIGFyYml0cmFyeSBhcmd1bWVudHMgc2VudCB0byAnLm11bHRpbWl4KCknIGFyZSBtYXBwZWQuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLkNvbW1hbmRNdWx0aW1peCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtaXhpdHVwLkJhc2UuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVDb25zdHJ1Y3QnKTtcblxuICAgICAgICB0aGlzLmZpbHRlciAgICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMuc29ydCAgICAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbnNlcnQgICAgICAgPSBudWxsO1xuICAgICAgICB0aGlzLnJlbW92ZSAgICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hhbmdlTGF5b3V0ID0gbnVsbDtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5Db21tYW5kTXVsdGltaXgpO1xuXG4gICAgbWl4aXR1cC5Db21tYW5kTXVsdGltaXgucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLkJhc2UucHJvdG90eXBlKTtcblxuICAgIG1peGl0dXAuQ29tbWFuZE11bHRpbWl4LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG1peGl0dXAuQ29tbWFuZE11bHRpbWl4O1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IGludG8gd2hpY2ggYWxsIGFyYml0cmFyeSBhcmd1bWVudHMgc2VudCB0byAnLmZpbHRlcigpJyBhcmUgbWFwcGVkLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5Db21tYW5kRmlsdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgICA9ICcnO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmFjdGlvbiAgICAgPSAnc2hvdyc7IC8vIGVudW06IFsnc2hvdycsICdoaWRlJ11cblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5Db21tYW5kRmlsdGVyKTtcblxuICAgIG1peGl0dXAuQ29tbWFuZEZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5Db21tYW5kRmlsdGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG1peGl0dXAuQ29tbWFuZEZpbHRlcjtcblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCBpbnRvIHdoaWNoIGFsbCBhcmJpdHJhcnkgYXJndW1lbnRzIHNlbnQgdG8gJy5zb3J0KCknIGFyZSBtYXBwZWQuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLkNvbW1hbmRTb3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMuc29ydFN0cmluZyA9ICcnO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZSAgPSAnJztcbiAgICAgICAgdGhpcy5vcmRlciAgICAgID0gJ2FzYyc7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMubmV4dCAgICAgICA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuQ29tbWFuZFNvcnQpO1xuXG4gICAgbWl4aXR1cC5Db21tYW5kU29ydC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5Db21tYW5kU29ydC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLkNvbW1hbmRTb3J0O1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IGludG8gd2hpY2ggYWxsIGFyYml0cmFyeSBhcmd1bWVudHMgc2VudCB0byAnLmluc2VydCgpJyBhcmUgbWFwcGVkLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5Db21tYW5kSW5zZXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMuaW5kZXggICAgICA9IDA7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uICAgPSAnYmVmb3JlJzsgLy8gZW51bTogWydiZWZvcmUnLCAnYWZ0ZXInXVxuICAgICAgICB0aGlzLnNpYmxpbmcgICAgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLkNvbW1hbmRJbnNlcnQpO1xuXG4gICAgbWl4aXR1cC5Db21tYW5kSW5zZXJ0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLkNvbW1hbmRJbnNlcnQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbWl4aXR1cC5Db21tYW5kSW5zZXJ0O1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IGludG8gd2hpY2ggYWxsIGFyYml0cmFyeSBhcmd1bWVudHMgc2VudCB0byAnLnJlbW92ZSgpJyBhcmUgbWFwcGVkLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqL1xuXG4gICAgbWl4aXR1cC5Db21tYW5kUmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMudGFyZ2V0cyAgICA9IFtdO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBbXTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5Db21tYW5kUmVtb3ZlKTtcblxuICAgIG1peGl0dXAuQ29tbWFuZFJlbW92ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5Db21tYW5kUmVtb3ZlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG1peGl0dXAuQ29tbWFuZFJlbW92ZTtcblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCBpbnRvIHdoaWNoIGFsbCBhcmJpdHJhcnkgYXJndW1lbnRzIHNlbnQgdG8gJy5jaGFuZ2VMYXlvdXQoKScgYXJlIG1hcHBlZC5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuQ29tbWFuZENoYW5nZUxheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtaXhpdHVwLkJhc2UuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVDb25zdHJ1Y3QnKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lckNsYXNzTmFtZSA9ICcnO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLkNvbW1hbmRDaGFuZ2VMYXlvdXQpO1xuXG4gICAgbWl4aXR1cC5Db21tYW5kQ2hhbmdlTGF5b3V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLkNvbW1hbmRDaGFuZ2VMYXlvdXQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbWl4aXR1cC5Db21tYW5kQ2hhbmdlTGF5b3V0O1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqIEBwYXJhbSAgICAgICB7c3RyaW5nfSAgICAgICAgdHlwZVxuICAgICAqIEBwYXJhbSAgICAgICB7c3RyaW5nfSAgICAgICAgc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gICAgICAge2Jvb2xlYW59ICAgICAgIFtsaXZlXVxuICAgICAqIEBwYXJhbSAgICAgICB7c3RyaW5nfSAgICAgICAgW3BhcmVudF1cbiAgICAgKiAgICAgQW4gb3B0aW9uYWwgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbmFtZSBvZiB0aGUgbWl4ZXIuZG9tIHByb3BlcnR5IGNvbnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gYSBwYXJlbnQgZWxlbWVudC5cbiAgICAgKi9cblxuICAgIG1peGl0dXAuQ29udHJvbERlZmluaXRpb24gPSBmdW5jdGlvbih0eXBlLCBzZWxlY3RvciwgbGl2ZSwgcGFyZW50KSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMudHlwZSAgICA9IHR5cGU7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IgID0gc2VsZWN0b3I7XG4gICAgICAgIHRoaXMubGl2ZSAgICAgID0gbGl2ZSB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXJlbnQgICAgPSBwYXJlbnQgfHwgJyc7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLmZyZWV6ZSh0aGlzKTtcbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLkNvbnRyb2xEZWZpbml0aW9uKTtcblxuICAgIG1peGl0dXAuQ29udHJvbERlZmluaXRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLkJhc2UucHJvdG90eXBlKTtcblxuICAgIG1peGl0dXAuQ29udHJvbERlZmluaXRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbWl4aXR1cC5Db250cm9sRGVmaW5pdGlvbjtcblxuICAgIG1peGl0dXAuY29udHJvbERlZmluaXRpb25zID0gW107XG5cbiAgICBtaXhpdHVwLmNvbnRyb2xEZWZpbml0aW9ucy5wdXNoKG5ldyBtaXhpdHVwLkNvbnRyb2xEZWZpbml0aW9uKCdtdWx0aW1peCcsICdbZGF0YS1maWx0ZXJdW2RhdGEtc29ydF0nKSk7XG4gICAgbWl4aXR1cC5jb250cm9sRGVmaW5pdGlvbnMucHVzaChuZXcgbWl4aXR1cC5Db250cm9sRGVmaW5pdGlvbignZmlsdGVyJywgJ1tkYXRhLWZpbHRlcl0nKSk7XG4gICAgbWl4aXR1cC5jb250cm9sRGVmaW5pdGlvbnMucHVzaChuZXcgbWl4aXR1cC5Db250cm9sRGVmaW5pdGlvbignc29ydCcsICdbZGF0YS1zb3J0XScpKTtcbiAgICBtaXhpdHVwLmNvbnRyb2xEZWZpbml0aW9ucy5wdXNoKG5ldyBtaXhpdHVwLkNvbnRyb2xEZWZpbml0aW9uKCd0b2dnbGUnLCAnW2RhdGEtdG9nZ2xlXScpKTtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuQ29udHJvbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtaXhpdHVwLkJhc2UuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVDb25zdHJ1Y3QnKTtcblxuICAgICAgICB0aGlzLmVsICAgICAgICAgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdG9yICAgPSAnJztcbiAgICAgICAgdGhpcy5ib3VuZCAgICAgID0gW107XG4gICAgICAgIHRoaXMucGVuZGluZyAgICA9IC0xO1xuICAgICAgICB0aGlzLnR5cGUgICAgICAgPSAnJztcbiAgICAgICAgdGhpcy5zdGF0dXMgICAgID0gJ2luYWN0aXZlJzsgLy8gZW51bTogWydpbmFjdGl2ZScsICdhY3RpdmUnLCAnZGlzYWJsZWQnLCAnbGl2ZSddXG4gICAgICAgIHRoaXMuZmlsdGVyICAgICA9ICcnO1xuICAgICAgICB0aGlzLnNvcnQgICAgICAgPSAnJztcbiAgICAgICAgdGhpcy5jYW5EaXNhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFuZGxlciAgICA9IG51bGw7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lcyA9IG5ldyBtaXhpdHVwLlVpQ2xhc3NOYW1lcygpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLkNvbnRyb2wpO1xuXG4gICAgbWl4aXR1cC5Db250cm9sLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBoLmV4dGVuZChtaXhpdHVwLkNvbnRyb2wucHJvdG90eXBlLFxuICAgIC8qKiBAbGVuZHMgbWl4aXR1cC5Db250cm9sICovXG4gICAge1xuICAgICAgICBjb25zdHJ1Y3RvcjogbWl4aXR1cC5Db250cm9sLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gICAgICB0eXBlXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgICAgIHNlbGVjdG9yXG4gICAgICAgICAqL1xuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKGVsLCB0eXBlLCBzZWxlY3Rvcikge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVJbml0JywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgc2VsZi5lbCAgICAgICAgID0gZWw7XG4gICAgICAgICAgICBzZWxmLnR5cGUgICAgICAgPSB0eXBlO1xuICAgICAgICAgICAgc2VsZi5zZWxlY3RvciAgID0gc2VsZWN0b3I7XG5cbiAgICAgICAgICAgIGlmIChzZWxmLnNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zdGF0dXMgPSAnbGl2ZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuY2FuRGlzYWJsZSA9IHR5cGVvZiBzZWxmLmVsLmRpc2FibGUgPT09ICdib29sZWFuJztcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc2VsZi50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ZpbHRlcic6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZpbHRlciA9IHNlbGYuZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9nZ2xlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZmlsdGVyID0gc2VsZi5lbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzb3J0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc29ydCAgID0gc2VsZi5lbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc29ydCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbXVsdGltaXgnOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5maWx0ZXIgPSBzZWxmLmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1maWx0ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc29ydCAgID0gc2VsZi5lbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc29ydCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuYmluZENsaWNrKCk7XG5cbiAgICAgICAgICAgIG1peGl0dXAuY29udHJvbHMucHVzaChzZWxmKTtcblxuICAgICAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJJbml0JywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICB7bWl4aXR1cC5NaXhlcn0gbWl4ZXJcbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgICAgICovXG5cbiAgICAgICAgaXNCb3VuZDogZnVuY3Rpb24obWl4ZXIpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBpc0JvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUlzQm91bmQnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBpc0JvdW5kID0gc2VsZi5ib3VuZC5pbmRleE9mKG1peGVyKSA+IC0xO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jYWxsRmlsdGVycygnYWZ0ZXJJc0JvdW5kJywgaXNCb3VuZCwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtICB7bWl4aXR1cC5NaXhlcn0gbWl4ZXJcbiAgICAgICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgYWRkQmluZGluZzogZnVuY3Rpb24obWl4ZXIpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQWRkQmluZGluZycsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmICghc2VsZi5pc0JvdW5kKCkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmJvdW5kLnB1c2gobWl4ZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckFkZEJpbmRpbmcnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gIHttaXhpdHVwLk1peGVyfSBtaXhlclxuICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICByZW1vdmVCaW5kaW5nOiBmdW5jdGlvbihtaXhlcikge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICByZW1vdmVJbmRleCA9IC0xO1xuXG4gICAgICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVSZW1vdmVCaW5kaW5nJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaWYgKChyZW1vdmVJbmRleCA9IHNlbGYuYm91bmQuaW5kZXhPZihtaXhlcikpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmJvdW5kLnNwbGljZShyZW1vdmVJbmRleCwgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxmLmJvdW5kLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBObyBiaW5kaW5ncyBleGlzdCwgdW5iaW5kIGV2ZW50IGNsaWNrIGhhbmRsZXJzXG5cbiAgICAgICAgICAgICAgICBzZWxmLnVuYmluZENsaWNrKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZnJvbSBgbWl4aXR1cC5jb250cm9sc2AgbGlzdFxuXG4gICAgICAgICAgICAgICAgcmVtb3ZlSW5kZXggPSBtaXhpdHVwLmNvbnRyb2xzLmluZGV4T2Yoc2VsZik7XG5cbiAgICAgICAgICAgICAgICBtaXhpdHVwLmNvbnRyb2xzLnNwbGljZShyZW1vdmVJbmRleCwgMSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5zdGF0dXMgPT09ICdhY3RpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVuZGVyU3RhdHVzKHNlbGYuZWwsICdpbmFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJSZW1vdmVCaW5kaW5nJywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgYmluZENsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQmluZENsaWNrJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgc2VsZi5oYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuaGFuZGxlQ2xpY2soZSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBoLm9uKHNlbGYuZWwsICdjbGljaycsIHNlbGYuaGFuZGxlcik7XG5cbiAgICAgICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQmluZENsaWNrJywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgdW5iaW5kQ2xpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVVbmJpbmRDbGljaycsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGgub2ZmKHNlbGYuZWwsICdjbGljaycsIHNlbGYuaGFuZGxlcik7XG5cbiAgICAgICAgICAgIHNlbGYuaGFuZGxlciA9IG51bGw7XG5cbiAgICAgICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyVW5iaW5kQ2xpY2snLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7TW91c2VFdmVudH0gZVxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgYnV0dG9uICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIG1peGVyICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZSAgICA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gdm9pZCgwKSxcbiAgICAgICAgICAgICAgICBjb21tYW5kICAgICA9IHt9LFxuICAgICAgICAgICAgICAgIGNsb25lICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBjb21tYW5kcyAgICA9IFtdLFxuICAgICAgICAgICAgICAgIGkgICAgICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUhhbmRsZUNsaWNrJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgdGhpcy5wZW5kaW5nID0gMDtcblxuICAgICAgICAgICAgbWl4ZXIgPSBzZWxmLmJvdW5kWzBdO1xuXG4gICAgICAgICAgICBpZiAoIXNlbGYuc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBidXR0b24gPSBzZWxmLmVsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidXR0b24gPSBoLmNsb3Nlc3RQYXJlbnQoZS50YXJnZXQsIG1peGVyLmNvbmZpZy5zZWxlY3RvcnMuY29udHJvbCArIHNlbGYuc2VsZWN0b3IsIHRydWUsIG1peGVyLmRvbS5kb2N1bWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghYnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJIYW5kbGVDbGljaycsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAoc2VsZi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZmlsdGVyJzpcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC5maWx0ZXIgPSBzZWxmLmZpbHRlciB8fCBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NvcnQnOlxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnNvcnQgPSBzZWxmLnNvcnQgfHwgYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1zb3J0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbXVsdGltaXgnOlxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLmZpbHRlciAgPSBzZWxmLmZpbHRlciB8fCBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicpO1xuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnNvcnQgICAgPSBzZWxmLnNvcnQgfHwgYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1zb3J0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAndG9nZ2xlJzpcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC5maWx0ZXIgID0gc2VsZi5maWx0ZXIgfHwgYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5zdGF0dXMgPT09ICdsaXZlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPSBoLmhhc0NsYXNzKGJ1dHRvbiwgc2VsZi5jbGFzc05hbWVzLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA9IHNlbGYuc3RhdHVzID09PSAnYWN0aXZlJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2VsZi5ib3VuZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIGNsb25lIG9mIHRoZSBjb21tYW5kIGZvciBlYWNoIGJvdW5kIG1peGVyIGluc3RhbmNlXG5cbiAgICAgICAgICAgICAgICBjbG9uZSA9IG5ldyBtaXhpdHVwLkNvbW1hbmRNdWx0aW1peCgpO1xuXG4gICAgICAgICAgICAgICAgaC5leHRlbmQoY2xvbmUsIGNvbW1hbmQpO1xuXG4gICAgICAgICAgICAgICAgY29tbWFuZHMucHVzaChjbG9uZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbW1hbmRzID0gc2VsZi5jYWxsRmlsdGVycygnY29tbWFuZHNIYW5kbGVDbGljaycsIGNvbW1hbmRzLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBzZWxmLnBlbmRpbmcgPSBzZWxmLmJvdW5kLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgbWl4ZXIgPSBzZWxmLmJvdW5kW2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb21tYW5kID0gY29tbWFuZHNbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIWNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQW4gZXh0ZW5zaW9uIG1heSBzZXQgYSBjb21tYW5kIG51bGwgdG8gaW5kaWNhdGUgdGhhdCB0aGUgY2xpY2sgc2hvdWxkIG5vdCBiZSBoYW5kbGVkXG5cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFtaXhlci5sYXN0Q2xpY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBtaXhlci5sYXN0Q2xpY2tlZCA9IGJ1dHRvbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtaXhpdHVwLmV2ZW50cy5maXJlKCdtaXhDbGljaycsIG1peGVyLmRvbS5jb250YWluZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IG1peGVyLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogbWl4ZXIsXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGUsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w6IG1peGVyLmxhc3RDbGlja2VkXG4gICAgICAgICAgICAgICAgfSwgbWl4ZXIuZG9tLmRvY3VtZW50KTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWl4ZXIuY29uZmlnLmNhbGxiYWNrcy5vbk1peENsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gbWl4ZXIuY29uZmlnLmNhbGxiYWNrcy5vbk1peENsaWNrLmNhbGwobWl4ZXIubGFzdENsaWNrZWQsIG1peGVyLnN0YXRlLCBlLCBtaXhlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldHVyblZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXNlciBoYXMgcmV0dXJuZWQgYGZhbHNlYCBmcm9tIHRoZSBjYWxsYmFjaywgc28gZG8gbm90IGhhbmRsZSBjbGlja1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzZWxmLnR5cGUgPT09ICd0b2dnbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gbWl4ZXIudG9nZ2xlT2ZmKGNvbW1hbmQuZmlsdGVyKSA6IG1peGVyLnRvZ2dsZU9uKGNvbW1hbmQuZmlsdGVyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtaXhlci5tdWx0aW1peChjb21tYW5kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVySGFuZGxlQ2xpY2snLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgICAgICAgICBjb21tYW5kXG4gICAgICAgICAqIEBwYXJhbSAgIHtBcnJheTxzdHJpbmc+fSAgIHRvZ2dsZUFycmF5XG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uKGNvbW1hbmQsIHRvZ2dsZUFycmF5KSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgYWN0aW9ucyA9IG5ldyBtaXhpdHVwLkNvbW1hbmRNdWx0aW1peCgpO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVVcGRhdGUnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBzZWxmLnBlbmRpbmctLTtcblxuICAgICAgICAgICAgc2VsZi5wZW5kaW5nID0gTWF0aC5tYXgoMCwgc2VsZi5wZW5kaW5nKTtcblxuICAgICAgICAgICAgaWYgKHNlbGYucGVuZGluZyA+IDApIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKHNlbGYuc3RhdHVzID09PSAnbGl2ZScpIHtcbiAgICAgICAgICAgICAgICAvLyBMaXZlIGNvbnRyb2wgKHN0YXR1cyB1bmtub3duKVxuXG4gICAgICAgICAgICAgICAgc2VsZi51cGRhdGVMaXZlKGNvbW1hbmQsIHRvZ2dsZUFycmF5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gU3RhdGljIGNvbnRyb2xcblxuICAgICAgICAgICAgICAgIGFjdGlvbnMuc29ydCAgICA9IHNlbGYuc29ydDtcbiAgICAgICAgICAgICAgICBhY3Rpb25zLmZpbHRlciAgPSBzZWxmLmZpbHRlcjtcblxuICAgICAgICAgICAgICAgIHNlbGYuY2FsbEZpbHRlcnMoJ2FjdGlvbnNVcGRhdGUnLCBhY3Rpb25zLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5wYXJzZVN0YXR1c0NoYW5nZShzZWxmLmVsLCBjb21tYW5kLCBhY3Rpb25zLCB0b2dnbGVBcnJheSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyVXBkYXRlJywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtICAge21peGl0dXAuQ29tbWFuZE11bHRpbWl4fSBjb21tYW5kXG4gICAgICAgICAqIEBwYXJhbSAgIHtBcnJheTxzdHJpbmc+fSAgICAgICAgICAgdG9nZ2xlQXJyYXlcbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHVwZGF0ZUxpdmU6IGZ1bmN0aW9uKGNvbW1hbmQsIHRvZ2dsZUFycmF5KSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBjb250cm9sQnV0dG9ucyAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGFjdGlvbnMgICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgYnV0dG9uICAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlVXBkYXRlTGl2ZScsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmICghc2VsZi5lbCkgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb250cm9sQnV0dG9ucyA9IHNlbGYuZWwucXVlcnlTZWxlY3RvckFsbChzZWxmLnNlbGVjdG9yKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgYnV0dG9uID0gY29udHJvbEJ1dHRvbnNbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIGFjdGlvbnMgPSBuZXcgbWl4aXR1cC5Db21tYW5kTXVsdGltaXgoKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc2VsZi50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ZpbHRlcic6XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLmZpbHRlciA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzb3J0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMuc29ydCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc29ydCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbXVsdGltaXgnOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5maWx0ZXIgID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1maWx0ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMuc29ydCAgICA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc29ydCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9nZ2xlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMuZmlsdGVyICA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFjdGlvbnMgPSBzZWxmLmNhbGxGaWx0ZXJzKCdhY3Rpb25zVXBkYXRlTGl2ZScsIGFjdGlvbnMsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgICBzZWxmLnBhcnNlU3RhdHVzQ2hhbmdlKGJ1dHRvbiwgY29tbWFuZCwgYWN0aW9ucywgdG9nZ2xlQXJyYXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlclVwZGF0ZUxpdmUnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gICB7SFRNTEVsZW1lbnR9ICAgICAgICAgICAgIGJ1dHRvblxuICAgICAgICAgKiBAcGFyYW0gICB7bWl4aXR1cC5Db21tYW5kTXVsdGltaXh9IGNvbW1hbmRcbiAgICAgICAgICogQHBhcmFtICAge21peGl0dXAuQ29tbWFuZE11bHRpbWl4fSBhY3Rpb25zXG4gICAgICAgICAqIEBwYXJhbSAgIHtBcnJheTxzdHJpbmc+fSAgICAgICAgICAgdG9nZ2xlQXJyYXlcbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHBhcnNlU3RhdHVzQ2hhbmdlOiBmdW5jdGlvbihidXR0b24sIGNvbW1hbmQsIGFjdGlvbnMsIHRvZ2dsZUFycmF5KSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgYWxpYXMgICA9ICcnLFxuICAgICAgICAgICAgICAgIHRvZ2dsZSAgPSAnJyxcbiAgICAgICAgICAgICAgICBpICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZVBhcnNlU3RhdHVzQ2hhbmdlJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgc3dpdGNoIChzZWxmLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdmaWx0ZXInOlxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tbWFuZC5maWx0ZXIgPT09IGFjdGlvbnMuZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlbmRlclN0YXR1cyhidXR0b24sICdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVuZGVyU3RhdHVzKGJ1dHRvbiwgJ2luYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtdWx0aW1peCc6XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21tYW5kLnNvcnQgPT09IGFjdGlvbnMuc29ydCAmJiBjb21tYW5kLmZpbHRlciA9PT0gYWN0aW9ucy5maWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVuZGVyU3RhdHVzKGJ1dHRvbiwgJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZW5kZXJTdGF0dXMoYnV0dG9uLCAnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NvcnQnOlxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tbWFuZC5zb3J0Lm1hdGNoKC86YXNjL2cpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhcyA9IGNvbW1hbmQuc29ydC5yZXBsYWNlKC86YXNjL2csICcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21tYW5kLnNvcnQgPT09IGFjdGlvbnMuc29ydCB8fCBhbGlhcyA9PT0gYWN0aW9ucy5zb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlbmRlclN0YXR1cyhidXR0b24sICdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVuZGVyU3RhdHVzKGJ1dHRvbiwgJ2luYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd0b2dnbGUnOlxuICAgICAgICAgICAgICAgICAgICBpZiAodG9nZ2xlQXJyYXkubGVuZ3RoIDwgMSkgc2VsZi5yZW5kZXJTdGF0dXMoYnV0dG9uLCAnaW5hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tbWFuZC5maWx0ZXIgPT09IGFjdGlvbnMuZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlbmRlclN0YXR1cyhidXR0b24sICdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0b2dnbGVBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlID0gdG9nZ2xlQXJyYXlbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2dnbGUgPT09IGFjdGlvbnMuZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnV0dG9uIG1hdGNoZXMgb25lIGFjdGl2ZSB0b2dnbGVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVuZGVyU3RhdHVzKGJ1dHRvbiwgJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVuZGVyU3RhdHVzKGJ1dHRvbiwgJ2luYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJQYXJzZVN0YXR1c0NoYW5nZScsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gICBidXR0b25cbiAgICAgICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICAgIHN0YXR1c1xuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgcmVuZGVyU3RhdHVzOiBmdW5jdGlvbihidXR0b24sIHN0YXR1cykge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVSZW5kZXJTdGF0dXMnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2FjdGl2ZSc6XG4gICAgICAgICAgICAgICAgICAgIGguYWRkQ2xhc3MoYnV0dG9uLCBzZWxmLmNsYXNzTmFtZXMuYWN0aXZlKTtcbiAgICAgICAgICAgICAgICAgICAgaC5yZW1vdmVDbGFzcyhidXR0b24sIHNlbGYuY2xhc3NOYW1lcy5kaXNhYmxlZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuY2FuRGlzYWJsZSkgc2VsZi5lbC5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2luYWN0aXZlJzpcbiAgICAgICAgICAgICAgICAgICAgaC5yZW1vdmVDbGFzcyhidXR0b24sIHNlbGYuY2xhc3NOYW1lcy5hY3RpdmUpO1xuICAgICAgICAgICAgICAgICAgICBoLnJlbW92ZUNsYXNzKGJ1dHRvbiwgc2VsZi5jbGFzc05hbWVzLmRpc2FibGVkKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5jYW5EaXNhYmxlKSBzZWxmLmVsLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZGlzYWJsZWQnOlxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5jYW5EaXNhYmxlKSBzZWxmLmVsLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBoLmFkZENsYXNzKGJ1dHRvbiwgc2VsZi5jbGFzc05hbWVzLmRpc2FibGVkKTtcbiAgICAgICAgICAgICAgICAgICAgaC5yZW1vdmVDbGFzcyhidXR0b24sIHNlbGYuY2xhc3NOYW1lcy5hY3RpdmUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZi5zdGF0dXMgIT09ICdsaXZlJykge1xuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgY29udHJvbCdzIHN0YXR1cyBwcm9wZXJ5IGlmIG5vdCBsaXZlXG5cbiAgICAgICAgICAgICAgICBzZWxmLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJSZW5kZXJTdGF0dXMnLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBtaXhpdHVwLmNvbnRyb2xzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLlN0eWxlRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtaXhpdHVwLkJhc2UuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVDb25zdHJ1Y3QnKTtcblxuICAgICAgICB0aGlzLnggICAgICAgICAgICAgID0gMDtcbiAgICAgICAgdGhpcy55ICAgICAgICAgICAgICA9IDA7XG4gICAgICAgIHRoaXMudG9wICAgICAgICAgICAgPSAwO1xuICAgICAgICB0aGlzLnJpZ2h0ICAgICAgICAgID0gMDtcbiAgICAgICAgdGhpcy5ib3R0b20gICAgICAgICA9IDA7XG4gICAgICAgIHRoaXMubGVmdCAgICAgICAgICAgPSAwO1xuICAgICAgICB0aGlzLndpZHRoICAgICAgICAgID0gMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgICAgICAgICA9IDA7XG4gICAgICAgIHRoaXMubWFyZ2luUmlnaHQgICAgPSAwO1xuICAgICAgICB0aGlzLm1hcmdpbkJvdHRvbSAgID0gMDtcbiAgICAgICAgdGhpcy5vcGFjaXR5ICAgICAgICA9IDA7XG4gICAgICAgIHRoaXMuc2NhbGUgICAgICAgICAgPSBuZXcgbWl4aXR1cC5UcmFuc2Zvcm1EYXRhKCk7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlWCAgICAgPSBuZXcgbWl4aXR1cC5UcmFuc2Zvcm1EYXRhKCk7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlWSAgICAgPSBuZXcgbWl4aXR1cC5UcmFuc2Zvcm1EYXRhKCk7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlWiAgICAgPSBuZXcgbWl4aXR1cC5UcmFuc2Zvcm1EYXRhKCk7XG4gICAgICAgIHRoaXMucm90YXRlWCAgICAgICAgPSBuZXcgbWl4aXR1cC5UcmFuc2Zvcm1EYXRhKCk7XG4gICAgICAgIHRoaXMucm90YXRlWSAgICAgICAgPSBuZXcgbWl4aXR1cC5UcmFuc2Zvcm1EYXRhKCk7XG4gICAgICAgIHRoaXMucm90YXRlWiAgICAgICAgPSBuZXcgbWl4aXR1cC5UcmFuc2Zvcm1EYXRhKCk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuU3R5bGVEYXRhKTtcblxuICAgIG1peGl0dXAuU3R5bGVEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLlN0eWxlRGF0YS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLlN0eWxlRGF0YTtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuVHJhbnNmb3JtRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtaXhpdHVwLkJhc2UuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVDb25zdHJ1Y3QnKTtcblxuICAgICAgICB0aGlzLnZhbHVlICA9IDA7XG4gICAgICAgIHRoaXMudW5pdCAgID0gJyc7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuVHJhbnNmb3JtRGF0YSk7XG5cbiAgICBtaXhpdHVwLlRyYW5zZm9ybURhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLkJhc2UucHJvdG90eXBlKTtcblxuICAgIG1peGl0dXAuVHJhbnNmb3JtRGF0YS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLlRyYW5zZm9ybURhdGE7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLlRyYW5zZm9ybURlZmF1bHRzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuU3R5bGVEYXRhLmFwcGx5KHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMuc2NhbGUudmFsdWUgICAgICAgID0gMC4wMTtcbiAgICAgICAgdGhpcy5zY2FsZS51bml0ICAgICAgICAgPSAnJztcblxuICAgICAgICB0aGlzLnRyYW5zbGF0ZVgudmFsdWUgICA9IDIwO1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZVgudW5pdCAgICA9ICdweCc7XG5cbiAgICAgICAgdGhpcy50cmFuc2xhdGVZLnZhbHVlICAgPSAyMDtcbiAgICAgICAgdGhpcy50cmFuc2xhdGVZLnVuaXQgICAgPSAncHgnO1xuXG4gICAgICAgIHRoaXMudHJhbnNsYXRlWi52YWx1ZSAgID0gMjA7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlWi51bml0ICAgID0gJ3B4JztcblxuICAgICAgICB0aGlzLnJvdGF0ZVgudmFsdWUgICAgICA9IDkwO1xuICAgICAgICB0aGlzLnJvdGF0ZVgudW5pdCAgICAgICA9ICdkZWcnO1xuXG4gICAgICAgIHRoaXMucm90YXRlWS52YWx1ZSAgICAgID0gOTA7XG4gICAgICAgIHRoaXMucm90YXRlWS51bml0ICAgICAgID0gJ2RlZyc7XG5cbiAgICAgICAgdGhpcy5yb3RhdGVYLnZhbHVlICAgICAgPSA5MDtcbiAgICAgICAgdGhpcy5yb3RhdGVYLnVuaXQgICAgICAgPSAnZGVnJztcblxuICAgICAgICB0aGlzLnJvdGF0ZVoudmFsdWUgICAgICA9IDE4MDtcbiAgICAgICAgdGhpcy5yb3RhdGVaLnVuaXQgICAgICAgPSAnZGVnJztcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5UcmFuc2Zvcm1EZWZhdWx0cyk7XG5cbiAgICBtaXhpdHVwLlRyYW5zZm9ybURlZmF1bHRzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5TdHlsZURhdGEucHJvdG90eXBlKTtcblxuICAgIG1peGl0dXAuVHJhbnNmb3JtRGVmYXVsdHMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbWl4aXR1cC5UcmFuc2Zvcm1EZWZhdWx0cztcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBzaW5jZSAgIDMuMC4wXG4gICAgICogQHR5cGUgICAge21peGl0dXAuVHJhbnNmb3JtRGVmYXVsdHN9XG4gICAgICovXG5cbiAgICBtaXhpdHVwLnRyYW5zZm9ybURlZmF1bHRzID0gbmV3IG1peGl0dXAuVHJhbnNmb3JtRGVmYXVsdHMoKTtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuRXZlbnREZXRhaWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSAgICAgICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMuZnV0dXJlU3RhdGUgICAgPSBudWxsO1xuICAgICAgICB0aGlzLmluc3RhbmNlICAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcmlnaW5hbEV2ZW50ICA9IG51bGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgbWl4aXR1cC5FdmVudHNgIGNsYXNzIGNvbnRhaW5zIGFsbCBjdXN0b20gZXZlbnRzIGRpc3BhdGNoZWQgYnkgTWl4SXRVcCBhdCB2YXJpb3VzXG4gICAgICogcG9pbnRzIHdpdGhpbiB0aGUgbGlmZWN5Y2xlIG9mIGEgbWl4ZXIgb3BlcmF0aW9uLlxuICAgICAqXG4gICAgICogRWFjaCBldmVudCBpcyBhbmFsb2dvdXMgdG8gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIG9mIHRoZSBzYW1lIG5hbWUgZGVmaW5lZCBpblxuICAgICAqIHRoZSBgY2FsbGJhY2tzYCBjb25maWd1cmF0aW9uIG9iamVjdCwgYW5kIGlzIHRyaWdnZXJlZCBpbW1lZGlhdGVseSBiZWZvcmUgaXQuXG4gICAgICpcbiAgICAgKiBFdmVudHMgYXJlIGFsd2F5cyB0cmlnZ2VyZWQgZnJvbSB0aGUgY29udGFpbmVyIGVsZW1lbnQgb24gd2hpY2ggTWl4SXRVcCBpcyBpbnN0YW50aWF0ZWRcbiAgICAgKiB1cG9uLlxuICAgICAqXG4gICAgICogQXMgd2l0aCBhbnkgZXZlbnQsIHJlZ2lzdGVyZWQgZXZlbnQgaGFuZGxlcnMgcmVjZWl2ZSB0aGUgZXZlbnQgb2JqZWN0IGFzIGEgcGFyYW1ldGVyXG4gICAgICogd2hpY2ggaW5jbHVkZXMgYSBgZGV0YWlsYCBwcm9wZXJ0eSBjb250YWludGluZyByZWZlcmVuY2VzIHRvIHRoZSBjdXJyZW50IGBzdGF0ZWAsXG4gICAgICogdGhlIGBtaXhlcmAgaW5zdGFuY2UsIGFuZCBvdGhlciBldmVudC1zcGVjaWZpYyBwcm9wZXJ0aWVzIGRlc2NyaWJlZCBiZWxvdy5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cFxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGN1c3RvbSBldmVudCB0cmlnZ2VyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgYW55IE1peEl0VXAgb3BlcmF0aW9uIGlzIHJlcXVlc3RlZFxuICAgICAgICAgKiBhbmQgYmVmb3JlIGFuaW1hdGlvbnMgaGF2ZSBiZWd1bi5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIGBtaXhTdGFydGAgZXZlbnQgYWxzbyBleHBvc2VzIGEgYGZ1dHVyZVN0YXRlYCBwcm9wZXJ0eSB2aWEgdGhlXG4gICAgICAgICAqIGBldmVudC5kZXRhaWxgIG9iamVjdCwgd2hpY2ggcmVwcmVzZW50cyB0aGUgZmluYWwgc3RhdGUgb2YgdGhlIG1peGVyIG9uY2VcbiAgICAgICAgICogdGhlIHJlcXVlc3RlZCBvcGVyYXRpb24gaGFzIGNvbXBsZXRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIG1peFN0YXJ0XG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkV2ZW50c1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7Q3VzdG9tRXZlbnR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMubWl4U3RhcnQgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGN1c3RvbSBldmVudCB0cmlnZ2VyZWQgd2hlbiBhIE1peEl0VXAgb3BlcmF0aW9uIGlzIHJlcXVlc3RlZCB3aGlsZSBhbm90aGVyXG4gICAgICAgICAqIG9wZXJhdGlvbiBpcyBpbiBwcm9ncmVzcywgYW5kIHRoZSBhbmltYXRpb24gcXVldWUgaXMgZnVsbCwgb3IgcXVldWVpbmdcbiAgICAgICAgICogaXMgZGlzYWJsZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBtaXhCdXN5XG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkV2ZW50c1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7Q3VzdG9tRXZlbnR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMubWl4QnVzeSA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgY3VzdG9tIGV2ZW50IHRyaWdnZXJlZCBhZnRlciBhbnkgTWl4SXRVcCBvcGVyYXRpb24gaGFzIGNvbXBsZXRlZCwgYW5kIHRoZVxuICAgICAgICAgKiBzdGF0ZSBoYXMgYmVlbiB1cGRhdGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgbWl4RW5kXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLkV2ZW50c1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7Q3VzdG9tRXZlbnR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMubWl4RW5kID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBjdXN0b20gZXZlbnQgdHJpZ2dlcmVkIHdoZW5ldmVyIGEgZmlsdGVyIG9wZXJhdGlvbiBcImZhaWxzXCIsIGkuZS4gbm8gdGFyZ2V0c1xuICAgICAgICAgKiBjb3VsZCBiZSBmb3VuZCBtYXRjaGluZyB0aGUgcmVxdWVzdGVkIGZpbHRlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIG1peEZhaWxcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuRXZlbnRzXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtDdXN0b21FdmVudH1cbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5taXhGYWlsID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBjdXN0b20gZXZlbnQgdHJpZ2dlcmVkIHdoZW5ldmVyIGEgTWl4SXRVcCBjb250cm9sIGlzIGNsaWNrZWQsIGFuZCBiZWZvcmUgaXRzXG4gICAgICAgICAqIHJlc3BlY3RpdmUgb3BlcmF0aW9uIGlzIHJlcXVlc3RlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBldmVudCBhbHNvIGV4cG9zZXMgYW4gYG9yaWdpbmFsRXZlbnRgIHByb3BlcnR5IHZpYSB0aGUgYGV2ZW50LmRldGFpbGBcbiAgICAgICAgICogb2JqZWN0LCB3aGljaCBob2xkcyBhIHJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgY2xpY2sgZXZlbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBtaXhDbGlja1xuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5FdmVudHNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAdHlwZSAgICAgICAge0N1c3RvbUV2ZW50fVxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLm1peENsaWNrID0gbnVsbDtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5FdmVudHMpO1xuXG4gICAgbWl4aXR1cC5FdmVudHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLkJhc2UucHJvdG90eXBlKTtcblxuICAgIG1peGl0dXAuRXZlbnRzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG1peGl0dXAuRXZlbnRzO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgIGV2ZW50VHlwZVxuICAgICAqIEBwYXJhbSAgIHtFbGVtZW50fSAgICAgZWxcbiAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgICAgIGRldGFpbFxuICAgICAqIEBwYXJhbSAgIHtEb2N1bWVudH0gICAgW2RvY11cbiAgICAgKi9cblxuICAgIG1peGl0dXAuRXZlbnRzLnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24oZXZlbnRUeXBlLCBlbCwgZGV0YWlsLCBkb2MpIHtcbiAgICAgICAgdmFyIHNlbGYgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGV2ZW50ICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgIGV2ZW50RGV0YWlsID0gbmV3IG1peGl0dXAuRXZlbnREZXRhaWwoKTtcblxuICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVGaXJlJywgYXJndW1lbnRzKTtcblxuICAgICAgICBpZiAodHlwZW9mIHNlbGZbZXZlbnRUeXBlXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXZlbnQgdHlwZSBcIicgKyBldmVudFR5cGUgKyAnXCIgbm90IGZvdW5kLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnREZXRhaWwuc3RhdGUgPSBuZXcgbWl4aXR1cC5TdGF0ZSgpO1xuXG4gICAgICAgIGguZXh0ZW5kKGV2ZW50RGV0YWlsLnN0YXRlLCBkZXRhaWwuc3RhdGUpO1xuXG4gICAgICAgIGlmIChkZXRhaWwuZnV0dXJlU3RhdGUpIHtcbiAgICAgICAgICAgIGV2ZW50RGV0YWlsLmZ1dHVyZVN0YXRlID0gbmV3IG1peGl0dXAuU3RhdGUoKTtcblxuICAgICAgICAgICAgaC5leHRlbmQoZXZlbnREZXRhaWwuZnV0dXJlU3RhdGUsIGRldGFpbC5mdXR1cmVTdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudERldGFpbC5pbnN0YW5jZSA9IGRldGFpbC5pbnN0YW5jZTtcblxuICAgICAgICBpZiAoZGV0YWlsLm9yaWdpbmFsRXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50RGV0YWlsLm9yaWdpbmFsRXZlbnQgPSBkZXRhaWwub3JpZ2luYWxFdmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50ID0gaC5nZXRDdXN0b21FdmVudChldmVudFR5cGUsIGV2ZW50RGV0YWlsLCBkb2MpO1xuXG4gICAgICAgIHNlbGYuY2FsbEZpbHRlcnMoJ2V2ZW50RmlyZScsIGV2ZW50LCBhcmd1bWVudHMpO1xuXG4gICAgICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH07XG5cbiAgICAvLyBBc2lnbiBhIHNpbmdsZXRvbiBpbnN0YW5jZSB0byBgbWl4aXR1cC5ldmVudHNgOlxuXG4gICAgbWl4aXR1cC5ldmVudHMgPSBuZXcgbWl4aXR1cC5FdmVudHMoKTtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuUXVldWVJdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMuYXJncyAgICAgICAgICAgPSBbXTtcbiAgICAgICAgdGhpcy5pbnN0cnVjdGlvbiAgICA9IG51bGw7XG4gICAgICAgIHRoaXMudHJpZ2dlckVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmRlZmVycmVkICAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc1RvZ2dsaW5nICAgICA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLlF1ZXVlSXRlbSk7XG5cbiAgICBtaXhpdHVwLlF1ZXVlSXRlbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5RdWV1ZUl0ZW0ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbWl4aXR1cC5RdWV1ZUl0ZW07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYG1peGl0dXAuTWl4ZXJgIGNsYXNzIGlzIHVzZWQgdG8gaG9sZCBkaXNjcmVldCwgdXNlci1jb25maWd1cmVkXG4gICAgICogaW5zdGFuY2VzIG9mIE1peEl0VXAgb24gYSBwcm92aWRlZCBjb250YWluZXIgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIE1peGVyIGluc3RhbmNlcyBhcmUgcmV0dXJuZWQgd2hlbmV2ZXIgdGhlIGBtaXhpdHVwKClgIGZhY3RvcnkgZnVuY3Rpb24gaXMgY2FsbGVkLFxuICAgICAqIHdoaWNoIGV4cG9zZSBhIHJhbmdlIG9mIG1ldGhvZHMgZW5hYmxpbmcgQVBJLWJhc2VkIGZpbHRlcmluZywgc29ydGluZyxcbiAgICAgKiBpbnNlcnRpb24sIHJlbW92YWwgYW5kIG1vcmUuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXBcbiAgICAgKiBAcHVibGljXG4gICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLk1peGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMuY29uZmlnICAgICAgICAgICAgPSBuZXcgbWl4aXR1cC5Db25maWcoKTtcblxuICAgICAgICB0aGlzLmlkICAgICAgICAgICAgICAgID0gJyc7XG5cbiAgICAgICAgdGhpcy5pc0J1c3kgICAgICAgICAgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzVG9nZ2xpbmcgICAgICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5jUGFkZGluZyAgICAgICAgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuY29udHJvbHMgICAgICAgICAgPSBbXTtcbiAgICAgICAgdGhpcy50YXJnZXRzICAgICAgICAgICA9IFtdO1xuICAgICAgICB0aGlzLm9yaWdPcmRlciAgICAgICAgID0gW107XG4gICAgICAgIHRoaXMuY2FjaGUgICAgICAgICAgICAgPSB7fTtcblxuICAgICAgICB0aGlzLnRvZ2dsZUFycmF5ICAgICAgID0gW107XG5cbiAgICAgICAgdGhpcy50YXJnZXRzTW92ZWQgICAgICA9IDA7XG4gICAgICAgIHRoaXMudGFyZ2V0c0ltbW92YWJsZSAgPSAwO1xuICAgICAgICB0aGlzLnRhcmdldHNCb3VuZCAgICAgID0gMDtcbiAgICAgICAgdGhpcy50YXJnZXRzRG9uZSAgICAgICA9IDA7XG5cbiAgICAgICAgdGhpcy5zdGFnZ2VyRHVyYXRpb24gICA9IDA7XG4gICAgICAgIHRoaXMuZWZmZWN0c0luICAgICAgICAgPSBudWxsO1xuICAgICAgICB0aGlzLmVmZmVjdHNPdXQgICAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1JbiAgICAgICA9IFtdO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybU91dCAgICAgID0gW107XG4gICAgICAgIHRoaXMucXVldWUgICAgICAgICAgICAgPSBbXTtcblxuICAgICAgICB0aGlzLnN0YXRlICAgICAgICAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0T3BlcmF0aW9uICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdENsaWNrZWQgICAgICAgPSBudWxsO1xuICAgICAgICB0aGlzLnVzZXJDYWxsYmFjayAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy51c2VyRGVmZXJyZWQgICAgICA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5kb20gICAgICAgICAgICAgICA9IG5ldyBtaXhpdHVwLk1peGVyRG9tKCk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuTWl4ZXIpO1xuXG4gICAgbWl4aXR1cC5NaXhlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgaC5leHRlbmQobWl4aXR1cC5NaXhlci5wcm90b3R5cGUsXG4gICAgLyoqIEBsZW5kcyBtaXhpdHVwLk1peGVyICovXG4gICAge1xuICAgICAgICBjb25zdHJ1Y3RvcjogbWl4aXR1cC5NaXhlcixcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcbiAgICAgICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZG9jdW1lbnRcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9ICAgICAgaWRcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9ICAgICAgW2NvbmZpZ11cbiAgICAgICAgICovXG5cbiAgICAgICAgYXR0YWNoOiBmdW5jdGlvbihjb250YWluZXIsIGRvY3VtZW50LCBpZCwgY29uZmlnKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgdGFyZ2V0ICA9IG51bGwsXG4gICAgICAgICAgICAgICAgaSAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVBdHRhY2gnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBzZWxmLmlkID0gaWQ7XG5cbiAgICAgICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICAgICAgICBoLmV4dGVuZChzZWxmLmNvbmZpZywgY29uZmlnLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5zYW5pdGl6ZUNvbmZpZygpO1xuXG4gICAgICAgICAgICBzZWxmLmNhY2hlRG9tKGNvbnRhaW5lciwgZG9jdW1lbnQpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubGF5b3V0LmNvbnRhaW5lckNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIGguYWRkQ2xhc3Moc2VsZi5kb20uY29udGFpbmVyLCBzZWxmLmNvbmZpZy5sYXlvdXQuY29udGFpbmVyQ2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFtaXhpdHVwLmZlYXR1cmVzLmhhcy50cmFuc2l0aW9ucykge1xuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLmFuaW1hdGlvbi5lbmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5kZWJ1Zy5zaG93V2FybmluZ3MgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmRhdGEudWlkS2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGRhdGFzZXQgQVBJIGlzIGluIHVzZSwgZm9yY2UgZGlzYWJsZSBjb250cm9sc1xuXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcuY29udHJvbHMuZW5hYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuaW5kZXhUYXJnZXRzKCk7XG5cbiAgICAgICAgICAgIHNlbGYuc3RhdGUgPSBzZWxmLmdldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyB0YXJnZXQgPSBzZWxmLmxhc3RPcGVyYXRpb24udG9IaWRlW2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuaGlkZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuY29udHJvbHMuZW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5pbml0Q29udHJvbHMoKTtcblxuICAgICAgICAgICAgICAgIHNlbGYuYnVpbGRUb2dnbGVBcnJheShudWxsLCBzZWxmLnN0YXRlKTtcblxuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlQ29udHJvbHMoe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHNlbGYuc3RhdGUuYWN0aXZlRmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICBzb3J0OiBzZWxmLnN0YXRlLmFjdGl2ZVNvcnRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5wYXJzZUVmZmVjdHMoKTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJBdHRhY2gnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlIDMuMC4wXG4gICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHNhbml0aXplQ29uZmlnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlU2FuaXRpemVDb25maWcnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAvLyBTYW5pdGl6ZSBlbnVtL3N0cmluZyBjb25maWcgb3B0aW9uc1xuXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5jb250cm9scy5zY29wZSAgICAgICAgICA9IHNlbGYuY29uZmlnLmNvbnRyb2xzLnNjb3BlLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICAgICAgICAgICAgc2VsZi5jb25maWcuY29udHJvbHMudG9nZ2xlTG9naWMgICAgPSBzZWxmLmNvbmZpZy5jb250cm9scy50b2dnbGVMb2dpYy50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLmNvbnRyb2xzLnRvZ2dsZURlZmF1bHQgID0gc2VsZi5jb25maWcuY29udHJvbHMudG9nZ2xlRGVmYXVsdC50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcblxuICAgICAgICAgICAgc2VsZi5jb25maWcuYW5pbWF0aW9uLmVmZmVjdHMgICAgICAgPSBzZWxmLmNvbmZpZy5hbmltYXRpb24uZWZmZWN0cy50cmltKCk7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyU2FuaXRpemVDb25maWcnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHJldHVybiAge21peGl0dXAuU3RhdGV9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHN0YXRlICAgICAgID0gbmV3IG1peGl0dXAuU3RhdGUoKSxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24gICA9IG5ldyBtaXhpdHVwLk9wZXJhdGlvbigpO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVHZXRJbml0aWFsU3RhdGUnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAvLyBNYXAgaW5pdGlhbCB2YWx1ZXMgaW50byBhIG1vY2sgc3RhdGUgb2JqZWN0IGluIG9yZGVyIHRvIGNvbnN0cnVjdCBhbiBvcGVyYXRpb25cblxuICAgICAgICAgICAgc3RhdGUuYWN0aXZlQ29udGFpbmVyQ2xhc3NOYW1lID0gc2VsZi5jb25maWcubGF5b3V0LmNvbnRhaW5lckNsYXNzTmFtZTtcblxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmxvYWQuZGF0YXNldCkge1xuICAgICAgICAgICAgICAgIC8vIERhdGFzZXQgQVBJXG5cbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYuY29uZmlnLmRhdGEudWlkS2V5IHx8IHR5cGVvZiBzZWxmLmNvbmZpZy5kYXRhLnVpZEtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihtaXhpdHVwLm1lc3NhZ2VzLmVycm9yQ29uZmlnRGF0YVVpZEtleU5vdFNldCgpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBvcGVyYXRpb24uc3RhcnREYXRhc2V0ID0gb3BlcmF0aW9uLm5ld0RhdGFzZXQgPSBzdGF0ZS5hY3RpdmVEYXRhc2V0ID0gc2VsZi5jb25maWcubG9hZC5kYXRhc2V0LnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnN0YXJ0Q29udGFpbmVyQ2xhc3NOYW1lID0gb3BlcmF0aW9uLm5ld0NvbnRhaW5lckNsYXNzTmFtZSA9IHN0YXRlLmFjdGl2ZUNvbnRhaW5lckNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24uc2hvdyA9IHNlbGYudGFyZ2V0cy5zbGljZSgpO1xuXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBzZWxmLmNhbGxGaWx0ZXJzKCdzdGF0ZUdldEluaXRpYWxTdGF0ZScsIHN0YXRlLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBET00gQVBJXG5cbiAgICAgICAgICAgICAgICBzdGF0ZS5hY3RpdmVGaWx0ZXIgICAgICAgICAgICAgID0gc2VsZi5wYXJzZUZpbHRlckFyZ3MoW3NlbGYuY29uZmlnLmxvYWQuZmlsdGVyXSkuY29tbWFuZDtcbiAgICAgICAgICAgICAgICBzdGF0ZS5hY3RpdmVTb3J0ICAgICAgICAgICAgICAgID0gc2VsZi5wYXJzZVNvcnRBcmdzKFtzZWxmLmNvbmZpZy5sb2FkLnNvcnRdKS5jb21tYW5kO1xuICAgICAgICAgICAgICAgIHN0YXRlLnRvdGFsVGFyZ2V0cyAgICAgICAgICAgICAgPSBzZWxmLnRhcmdldHMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBzZWxmLmNhbGxGaWx0ZXJzKCdzdGF0ZUdldEluaXRpYWxTdGF0ZScsIHN0YXRlLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5hY3RpdmVTb3J0LmNvbGxlY3Rpb24gfHwgc3RhdGUuYWN0aXZlU29ydC5hdHRyaWJ1dGUgfHxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYWN0aXZlU29ydC5vcmRlciA9PT0gJ3JhbmRvbScgfHwgc3RhdGUuYWN0aXZlU29ydC5vcmRlciA9PT0gJ2Rlc2MnXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNvcnRpbmcgb24gbG9hZFxuXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5uZXdTb3J0ID0gc3RhdGUuYWN0aXZlU29ydDtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNvcnRPcGVyYXRpb24ob3BlcmF0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLnByaW50U29ydChmYWxzZSwgb3BlcmF0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRhcmdldHMgPSBvcGVyYXRpb24ubmV3T3JkZXI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnN0YXJ0T3JkZXIgPSBvcGVyYXRpb24ubmV3T3JkZXIgPSBzZWxmLnRhcmdldHM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnN0YXJ0RmlsdGVyICAgICAgICAgICAgICAgPSBvcGVyYXRpb24ubmV3RmlsdGVyICAgICAgICAgICAgICAgPSBzdGF0ZS5hY3RpdmVGaWx0ZXI7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnN0YXJ0U29ydCAgICAgICAgICAgICAgICAgPSBvcGVyYXRpb24ubmV3U29ydCAgICAgICAgICAgICAgICAgPSBzdGF0ZS5hY3RpdmVTb3J0O1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5zdGFydENvbnRhaW5lckNsYXNzTmFtZSAgID0gb3BlcmF0aW9uLm5ld0NvbnRhaW5lckNsYXNzTmFtZSAgID0gc3RhdGUuYWN0aXZlQ29udGFpbmVyQ2xhc3NOYW1lO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi5uZXdGaWx0ZXIuc2VsZWN0b3IgPT09ICdhbGwnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5uZXdGaWx0ZXIuc2VsZWN0b3IgPSBzZWxmLmNvbmZpZy5zZWxlY3RvcnMudGFyZ2V0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uLm5ld0ZpbHRlci5zZWxlY3RvciA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5uZXdGaWx0ZXIuc2VsZWN0b3IgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9wZXJhdGlvbiA9IHNlbGYuY2FsbEZpbHRlcnMoJ29wZXJhdGlvbkdldEluaXRpYWxTdGF0ZScsIG9wZXJhdGlvbiwgW3N0YXRlXSk7XG5cbiAgICAgICAgICAgIHNlbGYubGFzdE9wZXJhdGlvbiA9IG9wZXJhdGlvbjtcblxuICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi5uZXdGaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmZpbHRlck9wZXJhdGlvbihvcGVyYXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGF0ZSA9IHNlbGYuYnVpbGRTdGF0ZShvcGVyYXRpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhY2hlcyByZWZlcmVuY2VzIG9mIERPTSBlbGVtZW50cyBuZWNjZXNzYXJ5IGZvciB0aGUgbWl4ZXIncyBmdW5jdGlvbmFsaXR5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAge0hUTUxFbGVtZW50fSAgICAgICBlbFxuICAgICAgICAgKiBAcGFyYW0gICB7SFRNTEh0bWxFbGVtZW50fSAgIGRvY3VtZW50XG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBjYWNoZURvbTogZnVuY3Rpb24oZWwsIGRvY3VtZW50KSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUNhY2hlRG9tJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgc2VsZi5kb20uZG9jdW1lbnQgID0gZG9jdW1lbnQ7XG4gICAgICAgICAgICBzZWxmLmRvbS5ib2R5ICAgICAgPSBzZWxmLmRvbS5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgICAgICBzZWxmLmRvbS5jb250YWluZXIgPSBlbDtcbiAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudCAgICA9IGVsO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlckNhY2hlRG9tJywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5kZXhlcyBhbGwgY2hpbGQgZWxlbWVudHMgb2YgdGhlIG1peGVyIG1hdGNoaW5nIHRoZSBgc2VsZWN0b3JzLnRhcmdldGBcbiAgICAgICAgICogc2VsZWN0b3IsIGluc3RhbnRpYXRpbmcgYSBtaXhpdHVwLlRhcmdldCBmb3IgZWFjaCBvbmUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgaW5kZXhUYXJnZXRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHRhcmdldCAgICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgZWwgICAgICAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBkYXRhc2V0ICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGkgICAgICAgICAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVJbmRleFRhcmdldHMnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBzZWxmLmRvbS50YXJnZXRzID0gc2VsZi5jb25maWcubGF5b3V0LmFsbG93TmVzdGVkVGFyZ2V0cyA/XG4gICAgICAgICAgICAgICAgc2VsZi5kb20uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZi5jb25maWcuc2VsZWN0b3JzLnRhcmdldCkgOlxuICAgICAgICAgICAgICAgIGguY2hpbGRyZW4oc2VsZi5kb20uY29udGFpbmVyLCBzZWxmLmNvbmZpZy5zZWxlY3RvcnMudGFyZ2V0LCBzZWxmLmRvbS5kb2N1bWVudCk7XG5cbiAgICAgICAgICAgIHNlbGYuZG9tLnRhcmdldHMgPSBoLmFycmF5RnJvbUxpc3Qoc2VsZi5kb20udGFyZ2V0cyk7XG5cbiAgICAgICAgICAgIHNlbGYudGFyZ2V0cyA9IFtdO1xuXG4gICAgICAgICAgICBpZiAoKGRhdGFzZXQgPSBzZWxmLmNvbmZpZy5sb2FkLmRhdGFzZXQpICYmIGRhdGFzZXQubGVuZ3RoICE9PSBzZWxmLmRvbS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtaXhpdHVwLm1lc3NhZ2VzLmVycm9yRGF0YXNldFByZXJlbmRlcmVkTWlzbWF0Y2goKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxmLmRvbS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGVsID0gc2VsZi5kb20udGFyZ2V0c1tpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IG5ldyBtaXhpdHVwLlRhcmdldCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5pbml0KGVsLCBzZWxmLCBkYXRhc2V0ID8gZGF0YXNldFtpXSA6IHZvaWQoMCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5pc0luRG9tID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRhcmdldHMucHVzaCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudCA9IHNlbGYuZG9tLnRhcmdldHNbMF0ucGFyZW50RWxlbWVudCA9PT0gc2VsZi5kb20uY29udGFpbmVyID9cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kb20uY29udGFpbmVyIDpcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kb20udGFyZ2V0c1swXS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLm9yaWdPcmRlciA9IHNlbGYudGFyZ2V0cztcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJJbmRleFRhcmdldHMnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRDb250cm9sczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvbiAgICAgICAgICA9ICcnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xFbGVtZW50cyAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGVsICAgICAgICAgICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIHBhcmVudCAgICAgICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGRlbGFnYXRvcnMgICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGNvbnRyb2wgICAgICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGkgICAgICAgICAgICAgICAgICAgPSAtMSxcbiAgICAgICAgICAgICAgICBqICAgICAgICAgICAgICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUluaXRDb250cm9scycsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoc2VsZi5jb25maWcuY29udHJvbHMuc2NvcGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsb2NhbCc6XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudCA9IHNlbGYuZG9tLmNvbnRhaW5lcjtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdnbG9iYWwnOlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBzZWxmLmRvbS5kb2N1bWVudDtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWl4aXR1cC5tZXNzYWdlcy5lcnJvckNvbmZpZ0ludmFsaWRDb250cm9sc1Njb3BlKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBkZWZpbml0aW9uID0gbWl4aXR1cC5jb250cm9sRGVmaW5pdGlvbnNbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5jb250cm9scy5saXZlIHx8IGRlZmluaXRpb24ubGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVmaW5pdGlvbi5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGFnYXRvcnMgPSBzZWxmLmRvbVtkZWZpbml0aW9uLnBhcmVudF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGVsYWdhdG9ycyB8fCBkZWxhZ2F0b3JzLmxlbmd0aCA8IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRlbGFnYXRvcnMubGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGFnYXRvcnMgPSBbZGVsYWdhdG9yc107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxhZ2F0b3JzID0gW3BhcmVudF07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyAoZWwgPSBkZWxhZ2F0b3JzW2pdKTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sID0gc2VsZi5nZXRDb250cm9sKGVsLCAgZGVmaW5pdGlvbi50eXBlLCBkZWZpbml0aW9uLnNlbGVjdG9yKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250cm9scy5wdXNoKGNvbnRyb2wpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbEVsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZi5jb25maWcuc2VsZWN0b3JzLmNvbnRyb2wgKyBkZWZpbml0aW9uLnNlbGVjdG9yKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyAoZWwgPSBjb250cm9sRWxlbWVudHNbal0pOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2wgPSBzZWxmLmdldENvbnRyb2woZWwsIGRlZmluaXRpb24udHlwZSwgJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRyb2wpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRyb2xzLnB1c2goY29udHJvbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVySW5pdENvbnRyb2xzJywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gZWxcbiAgICAgICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICB0eXBlXG4gICAgICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgc2VsZWN0b3JcbiAgICAgICAgICogQHJldHVybiAge21peGl0dXAuQ29udHJvbHxudWxsfVxuICAgICAgICAgKi9cblxuICAgICAgICBnZXRDb250cm9sOiBmdW5jdGlvbihlbCwgdHlwZSwgc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBjb250cm9sID0gbnVsbCxcbiAgICAgICAgICAgICAgICBpICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUdldENvbnRyb2wnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgLy8gU3RhdGljIGNvbnRyb2xzIG9ubHlcblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGNvbnRyb2wgPSBtaXhpdHVwLmNvbnRyb2xzW2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wuZWwgPT09IGVsICYmIGNvbnRyb2wuaXNCb3VuZChzZWxmKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udHJvbCBhbHJlYWR5IGJvdW5kIHRvIHRoaXMgbWl4ZXIgKGFzIGFub3RoZXIgdHlwZSkuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5COiBUaGlzIHByZXZlbnRzIGR1cGxpY2F0ZSBjb250cm9scyBmcm9tIGJlaW5nIHJlZ2lzdGVyZWQgd2hlcmUgYSBzZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWlnaHQgY29sbGlkZSwgZWc6IFwiW2RhdGEtZmlsdGVyXVwiIGFuZCBcIltkYXRhLWZpbHRlcl1bZGF0YS1zb3J0XVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmNhbGxGaWx0ZXJzKCdjb250cm9sR2V0Q29udHJvbCcsIG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udHJvbC5lbCA9PT0gZWwgJiYgY29udHJvbC50eXBlID09PSB0eXBlICYmIGNvbnRyb2wuc2VsZWN0b3IgPT09IHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbm90aGVyIG1peGVyIGlzIGFscmVhZHkgdXNpbmcgdGhpcyBjb250cm9sLCBhZGQgdGhpcyBtaXhlciBhcyBhIGJpbmRpbmdcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbC5hZGRCaW5kaW5nKHNlbGYpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5jYWxsRmlsdGVycygnY29udHJvbEdldENvbnRyb2wnLCBjb250cm9sLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgbmV3IGNvbnRyb2xcblxuICAgICAgICAgICAgY29udHJvbCA9IG5ldyBtaXhpdHVwLkNvbnRyb2woKTtcblxuICAgICAgICAgICAgY29udHJvbC5pbml0KGVsLCB0eXBlLCBzZWxlY3Rvcik7XG5cbiAgICAgICAgICAgIGNvbnRyb2wuY2xhc3NOYW1lcy5iYXNlICAgICA9IGguZ2V0Q2xhc3NuYW1lKHNlbGYuY29uZmlnLmNsYXNzTmFtZXMsIHR5cGUpO1xuICAgICAgICAgICAgY29udHJvbC5jbGFzc05hbWVzLmFjdGl2ZSAgID0gaC5nZXRDbGFzc25hbWUoc2VsZi5jb25maWcuY2xhc3NOYW1lcywgdHlwZSwgc2VsZi5jb25maWcuY2xhc3NOYW1lcy5tb2RpZmllckFjdGl2ZSk7XG4gICAgICAgICAgICBjb250cm9sLmNsYXNzTmFtZXMuZGlzYWJsZWQgPSBoLmdldENsYXNzbmFtZShzZWxmLmNvbmZpZy5jbGFzc05hbWVzLCB0eXBlLCBzZWxmLmNvbmZpZy5jbGFzc05hbWVzLm1vZGlmaWVyRGlzYWJsZWQpO1xuXG4gICAgICAgICAgICAvLyBBZGQgYSByZWZlcmVuY2UgdG8gdGhpcyBtaXhlciBhcyBhIGJpbmRpbmdcblxuICAgICAgICAgICAgY29udHJvbC5hZGRCaW5kaW5nKHNlbGYpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jYWxsRmlsdGVycygnY29udHJvbEdldENvbnRyb2wnLCBjb250cm9sLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgY29tcG91bmQgc2VsZWN0b3IgYnkgam9pbmluZyB0aGUgYHRvZ2dsZUFycmF5YCB2YWx1ZSBhcyBwZXIgdGhlXG4gICAgICAgICAqIGRlZmluZWQgdG9nZ2xlIGxvZ2ljLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHJldHVybiAge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICAgICAgZ2V0VG9nZ2xlU2VsZWN0b3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgZGVsaW5lYXRvciAgICAgID0gc2VsZi5jb25maWcuY29udHJvbHMudG9nZ2xlTG9naWMgPT09ICdvcicgPyAnLCAnIDogJycsXG4gICAgICAgICAgICAgICAgdG9nZ2xlU2VsZWN0b3IgID0gJyc7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUdldFRvZ2dsZVNlbGVjdG9yJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgc2VsZi50b2dnbGVBcnJheSA9IGguY2xlYW4oc2VsZi50b2dnbGVBcnJheSk7XG5cbiAgICAgICAgICAgIHRvZ2dsZVNlbGVjdG9yID0gc2VsZi50b2dnbGVBcnJheS5qb2luKGRlbGluZWF0b3IpO1xuXG4gICAgICAgICAgICBpZiAodG9nZ2xlU2VsZWN0b3IgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlU2VsZWN0b3IgPSBzZWxmLmNvbmZpZy5jb250cm9scy50b2dnbGVEZWZhdWx0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jYWxsRmlsdGVycygnc2VsZWN0b3JHZXRUb2dnbGVTZWxlY3RvcicsIHRvZ2dsZVNlbGVjdG9yLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCcmVha3MgY29tcG91bmQgc2VsZWN0b3Igc3RyaW5ncyBpbiBhbiBhcnJheSBvZiBkaXNjcmVldCBzZWxlY3RvcnMsXG4gICAgICAgICAqIGFzIHBlciB0aGUgYWN0aXZlIGBjb250cm9scy50b2dnbGVMb2dpY2AgY29uZmlndXJhdGlvbiBvcHRpb24uIEFjY2VwdHNcbiAgICAgICAgICogZWl0aGVyIGEgZHluYW1pYyBjb21tYW5kIG9iamVjdCwgb3IgYSBzdGF0ZSBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAyLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgICAgICAgW2NvbW1hbmRdXG4gICAgICAgICAqIEBwYXJhbSAgIHttaXhpdHVwLlN0YXRlfSBbc3RhdGVdXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBidWlsZFRvZ2dsZUFycmF5OiBmdW5jdGlvbihjb21tYW5kLCBzdGF0ZSkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBhY3RpdmVGaWx0ZXJTZWxlY3RvciAgICA9ICcnO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVCdWlsZFRvZ2dsZUFycmF5JywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaWYgKGNvbW1hbmQgJiYgY29tbWFuZC5maWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVGaWx0ZXJTZWxlY3RvciA9IGNvbW1hbmQuZmlsdGVyLnNlbGVjdG9yLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlRmlsdGVyU2VsZWN0b3IgPSBzdGF0ZS5hY3RpdmVGaWx0ZXIuc2VsZWN0b3IucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWN0aXZlRmlsdGVyU2VsZWN0b3IgPT09IHNlbGYuY29uZmlnLnNlbGVjdG9ycy50YXJnZXQgfHwgYWN0aXZlRmlsdGVyU2VsZWN0b3IgPT09ICdhbGwnKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlRmlsdGVyU2VsZWN0b3IgPSAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmNvbnRyb2xzLnRvZ2dsZUxvZ2ljID09PSAnb3InKSB7XG4gICAgICAgICAgICAgICAgc2VsZi50b2dnbGVBcnJheSA9IGFjdGl2ZUZpbHRlclNlbGVjdG9yLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYudG9nZ2xlQXJyYXkgPSBzZWxmLnNwbGl0Q29tcG91bmRTZWxlY3RvcihhY3RpdmVGaWx0ZXJTZWxlY3Rvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYudG9nZ2xlQXJyYXkgPSBoLmNsZWFuKHNlbGYudG9nZ2xlQXJyYXkpO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlckJ1aWxkVG9nZ2xlQXJyYXknLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUYWtlcyBhIGNvbXBvdW5kIHNlbGVjdG9yIChlLmcuIGAuY2F0LTEuY2F0LTJgLCBgW2RhdGEtY2F0PVwiMVwiXVtkYXRhLWNhdD1cIjJcIl1gKVxuICAgICAgICAgKiBhbmQgYnJlYWtzIGludG8gaXRzIGluZGl2aWR1YWwgc2VsZWN0b3JzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAge3N0cmluZ30gY29tcG91bmRTZWxlY3RvclxuICAgICAgICAgKiBAcmV0dXJuICB7c3RyaW5nW119XG4gICAgICAgICAqL1xuXG4gICAgICAgIHNwbGl0Q29tcG91bmRTZWxlY3RvcjogZnVuY3Rpb24oY29tcG91bmRTZWxlY3Rvcikge1xuICAgICAgICAgICAgLy8gQnJlYWsgYXQgYSBgLmAgb3IgYFtgLCBjYXB0dXJpbmcgdGhlIGRlbGluZWF0b3JcblxuICAgICAgICAgICAgdmFyIHBhcnRpYWxzICAgID0gY29tcG91bmRTZWxlY3Rvci5zcGxpdCgvKFtcXC5cXFtdKS9nKSxcbiAgICAgICAgICAgICAgICB0b2dnbGVBcnJheSA9IFtdLFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yICAgID0gJycsXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgaWYgKHBhcnRpYWxzWzBdID09PSAnJykge1xuICAgICAgICAgICAgICAgIHBhcnRpYWxzLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0aWFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvciA9ICcnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGVjdG9yICs9IHBhcnRpYWxzW2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGkgJSAyICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFycmF5LnB1c2goc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRvZ2dsZUFycmF5O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGVzIGNvbnRyb2xzIHRvIHRoZWlyIGFjdGl2ZS9pbmFjdGl2ZSBzdGF0ZSBiYXNlZCBvbiB0aGUgY29tbWFuZCBvclxuICAgICAgICAgKiBjdXJyZW50IHN0YXRlIG9mIHRoZSBtaXhlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDIuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtvYmplY3R9IGNvbW1hbmRcbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHVwZGF0ZUNvbnRyb2xzOiBmdW5jdGlvbihjb21tYW5kKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgY29udHJvbCA9IG51bGwsXG4gICAgICAgICAgICAgICAgb3V0cHV0ICA9IG5ldyBtaXhpdHVwLkNvbW1hbmRNdWx0aW1peCgpLFxuICAgICAgICAgICAgICAgIGkgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlVXBkYXRlQ29udHJvbHMnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAvLyBTYW5pdGlzZSB0byBkZWZhdWx0c1xuXG4gICAgICAgICAgICBpZiAoY29tbWFuZC5maWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQuZmlsdGVyID0gY29tbWFuZC5maWx0ZXIuc2VsZWN0b3I7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dHB1dC5maWx0ZXIgPSBzZWxmLnN0YXRlLmFjdGl2ZUZpbHRlci5zZWxlY3RvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbW1hbmQuc29ydCkge1xuICAgICAgICAgICAgICAgIG91dHB1dC5zb3J0ID0gc2VsZi5idWlsZFNvcnRTdHJpbmcoY29tbWFuZC5zb3J0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnNvcnQgPSBzZWxmLmJ1aWxkU29ydFN0cmluZyhzZWxmLnN0YXRlLmFjdGl2ZVNvcnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3V0cHV0LmZpbHRlciA9PT0gc2VsZi5jb25maWcuc2VsZWN0b3JzLnRhcmdldCkge1xuICAgICAgICAgICAgICAgIG91dHB1dC5maWx0ZXIgPSAnYWxsJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG91dHB1dC5maWx0ZXIgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0LmZpbHRlciA9ICdub25lJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaC5mcmVlemUob3V0cHV0KTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgY29udHJvbCA9IHNlbGYuY29udHJvbHNbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnRyb2wudXBkYXRlKG91dHB1dCwgc2VsZi50b2dnbGVBcnJheSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyVXBkYXRlQ29udHJvbHMnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAge21peGl0dXAuQ29tbWFuZFNvcnR9ICAgY29tbWFuZFxuICAgICAgICAgKiBAcmV0dXJuICB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgICAgICBidWlsZFNvcnRTdHJpbmc6IGZ1bmN0aW9uKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgID0gdGhpcztcbiAgICAgICAgICAgIHZhciBvdXRwdXQgID0gJyc7XG5cbiAgICAgICAgICAgIG91dHB1dCArPSBjb21tYW5kLnNvcnRTdHJpbmc7XG5cbiAgICAgICAgICAgIGlmIChjb21tYW5kLm5leHQpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gJyAnICsgc2VsZi5idWlsZFNvcnRTdHJpbmcoY29tbWFuZC5uZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgICAgICBjb21tYW5kXG4gICAgICAgICAqIEBwYXJhbSAgIHtPcGVyYXRpb259ICAgICBvcGVyYXRpb25cbiAgICAgICAgICogQHJldHVybiAge1Byb21pc2UuPG1peGl0dXAuU3RhdGU+fVxuICAgICAgICAgKi9cblxuICAgICAgICBpbnNlcnRUYXJnZXRzOiBmdW5jdGlvbihjb21tYW5kLCBvcGVyYXRpb24pIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIG5leHRTaWJsaW5nICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgaW5zZXJ0aW9uSW5kZXggID0gLTEsXG4gICAgICAgICAgICAgICAgZnJhZyAgICAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICB0YXJnZXQgICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGVsICAgICAgICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUluc2VydFRhcmdldHMnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbW1hbmQuaW5kZXggPT09ICd1bmRlZmluZWQnKSBjb21tYW5kLmluZGV4ID0gMDtcblxuICAgICAgICAgICAgbmV4dFNpYmxpbmcgPSBzZWxmLmdldE5leHRTaWJsaW5nKGNvbW1hbmQuaW5kZXgsIGNvbW1hbmQuc2libGluZywgY29tbWFuZC5wb3NpdGlvbik7XG4gICAgICAgICAgICBmcmFnICAgICAgICA9IHNlbGYuZG9tLmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgICAgICAgaWYgKG5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0aW9uSW5kZXggPSBoLmluZGV4KG5leHRTaWJsaW5nLCBzZWxmLmNvbmZpZy5zZWxlY3RvcnMudGFyZ2V0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0aW9uSW5kZXggPSBzZWxmLnRhcmdldHMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY29tbWFuZC5jb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgZWwgPSBjb21tYW5kLmNvbGxlY3Rpb25baV07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5kb20udGFyZ2V0cy5pbmRleE9mKGVsKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWl4aXR1cC5tZXNzYWdlcy5lcnJvckluc2VydFByZWV4aXN0aW5nRWxlbWVudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEVuc3VyZSBlbGVtZW50cyBhcmUgaGlkZGVuIHdoZW4gdGhleSBhcmUgYWRkZWQgdG8gdGhlIERPTSwgc28gdGhleSBjYW5cbiAgICAgICAgICAgICAgICAgICAgLy8gYmUgYW5pbWF0ZWQgaW4gZ3JhY2VmdWxseVxuXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgZnJhZy5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgICAgICAgICAgICAgIGZyYWcuYXBwZW5kQ2hpbGQoc2VsZi5kb20uZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyAnKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoLmlzRWxlbWVudChlbCwgc2VsZi5kb20uZG9jdW1lbnQpIHx8ICFlbC5tYXRjaGVzKHNlbGYuY29uZmlnLnNlbGVjdG9ycy50YXJnZXQpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBuZXcgbWl4aXR1cC5UYXJnZXQoKTtcblxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuaW5pdChlbCwgc2VsZik7XG5cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmlzSW5Eb20gPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGFyZ2V0cy5zcGxpY2UoaW5zZXJ0aW9uSW5kZXgsIDAsIHRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0aW9uSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5wYXJlbnQuaW5zZXJ0QmVmb3JlKGZyYWcsIG5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2luY2UgdGFyZ2V0cyBoYXZlIGJlZW4gYWRkZWQsIHRoZSBvcmlnaW5hbCBvcmRlciBtdXN0IGJlIHVwZGF0ZWRcblxuICAgICAgICAgICAgb3BlcmF0aW9uLnN0YXJ0T3JkZXIgPSBzZWxmLm9yaWdPcmRlciA9IHNlbGYudGFyZ2V0cztcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJJbnNlcnRUYXJnZXRzJywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtOdW1iZXJ9ICAgICAgW2luZGV4XVxuICAgICAgICAgKiBAcGFyYW0gICB7RWxlbWVudH0gICAgIFtzaWJsaW5nXVxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgIFtwb3NpdGlvbl1cbiAgICAgICAgICogQHJldHVybiAge0VsZW1lbnR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGdldE5leHRTaWJsaW5nOiBmdW5jdGlvbihpbmRleCwgc2libGluZywgcG9zaXRpb24pIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gbnVsbDtcblxuICAgICAgICAgICAgaW5kZXggPSBNYXRoLm1heChpbmRleCwgMCk7XG5cbiAgICAgICAgICAgIGlmIChzaWJsaW5nICYmIHBvc2l0aW9uID09PSAnYmVmb3JlJykge1xuICAgICAgICAgICAgICAgIC8vIEV4cGxpY2l0IHNpYmxpbmdcblxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBzaWJsaW5nO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaWJsaW5nICYmIHBvc2l0aW9uID09PSAnYWZ0ZXInKSB7XG4gICAgICAgICAgICAgICAgLy8gRXhwbGljaXQgc2libGluZ1xuXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IHNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nIHx8IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGYudGFyZ2V0cy5sZW5ndGggPiAwICYmIHR5cGVvZiBpbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAvLyBJbmRleCBhbmQgdGFyZ2V0cyBleGlzdFxuXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IChpbmRleCA8IHNlbGYudGFyZ2V0cy5sZW5ndGggfHwgIXNlbGYudGFyZ2V0cy5sZW5ndGgpID9cbiAgICAgICAgICAgICAgICAgICAgc2VsZi50YXJnZXRzW2luZGV4XS5kb20uZWwgOlxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRhcmdldHNbc2VsZi50YXJnZXRzLmxlbmd0aCAtIDFdLmRvbS5lbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGYudGFyZ2V0cy5sZW5ndGggPT09IDAgJiYgc2VsZi5kb20ucGFyZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBObyB0YXJnZXRzIGJ1dCBvdGhlciBzaWJsaW5nc1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmxheW91dC5zaWJsaW5nQWZ0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IHNlbGYuY29uZmlnLmxheW91dC5zaWJsaW5nQWZ0ZXI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxmLmNvbmZpZy5sYXlvdXQuc2libGluZ0JlZm9yZSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gc2VsZi5jb25maWcubGF5b3V0LnNpYmxpbmdCZWZvcmUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudC5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPT09IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNhbGxGaWx0ZXJzKCdlbGVtZW50R2V0TmV4dFNpYmxpbmcnLCBlbGVtZW50LCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMi4wLjBcbiAgICAgICAgICogQHBhcmFtICAge09wZXJhdGlvbn0gICAgIG9wZXJhdGlvblxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgZmlsdGVyT3BlcmF0aW9uOiBmdW5jdGlvbihvcGVyYXRpb24pIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgdGVzdFJlc3VsdCAgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmRleCAgICAgICA9IC0xLFxuICAgICAgICAgICAgICAgIGFjdGlvbiAgICAgID0gJycsXG4gICAgICAgICAgICAgICAgdGFyZ2V0ICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGkgICAgICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUZpbHRlck9wZXJhdGlvbicsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGFjdGlvbiA9IG9wZXJhdGlvbi5uZXdGaWx0ZXIuYWN0aW9uO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyB0YXJnZXQgPSBvcGVyYXRpb24ubmV3T3JkZXJbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChvcGVyYXRpb24ubmV3RmlsdGVyLmNvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2hvdyB2aWEgY29sbGVjdGlvblxuXG4gICAgICAgICAgICAgICAgICAgIHRlc3RSZXN1bHQgPSBvcGVyYXRpb24ubmV3RmlsdGVyLmNvbGxlY3Rpb24uaW5kZXhPZih0YXJnZXQuZG9tLmVsKSA+IC0xO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3cgdmlhIHNlbGVjdG9yXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi5uZXdGaWx0ZXIuc2VsZWN0b3IgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0UmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0UmVzdWx0ID0gdGFyZ2V0LmRvbS5lbC5tYXRjaGVzKG9wZXJhdGlvbi5uZXdGaWx0ZXIuc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZi5ldmFsdWF0ZUhpZGVTaG93KHRlc3RSZXN1bHQsIHRhcmdldCwgYWN0aW9uLCBvcGVyYXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3BlcmF0aW9uLnRvUmVtb3ZlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IG9wZXJhdGlvbi5zaG93W2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi50b1JlbW92ZS5pbmRleE9mKHRhcmdldCkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgYW55IHNob3duIHRhcmdldHMgc2hvdWxkIGJlIHJlbW92ZWQsIG1vdmUgdGhlbSBpbnRvIHRoZSB0b0hpZGUgYXJyYXlcblxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnNob3cuc3BsaWNlKGksIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGluZGV4ID0gb3BlcmF0aW9uLnRvU2hvdy5pbmRleE9mKHRhcmdldCkpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb24udG9TaG93LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi50b0hpZGUucHVzaCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLmhpZGUucHVzaCh0YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9wZXJhdGlvbi5tYXRjaGluZyA9IG9wZXJhdGlvbi5zaG93LnNsaWNlKCk7XG5cbiAgICAgICAgICAgIGlmIChvcGVyYXRpb24uc2hvdy5sZW5ndGggPT09IDAgJiYgb3BlcmF0aW9uLm5ld0ZpbHRlci5zZWxlY3RvciAhPT0gJycgJiYgc2VsZi50YXJnZXRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5oYXNGYWlsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlckZpbHRlck9wZXJhdGlvbicsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7Ym9vbGVhbn0gICB0ZXN0UmVzdWx0XG4gICAgICAgICAqIEBwYXJhbSAgIHtFbGVtZW50fSAgIHRhcmdldFxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICBhY3Rpb25cbiAgICAgICAgICogQHBhcmFtICAge09wZXJhdGlvbn0gb3BlcmF0aW9uXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBldmFsdWF0ZUhpZGVTaG93OiBmdW5jdGlvbih0ZXN0UmVzdWx0LCB0YXJnZXQsIGFjdGlvbiwgb3BlcmF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUV2YWx1YXRlSGlkZVNob3cnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBpZiAodGVzdFJlc3VsdCA9PT0gdHJ1ZSAmJiBhY3Rpb24gPT09ICdzaG93JyB8fCB0ZXN0UmVzdWx0ID09PSBmYWxzZSAmJiBhY3Rpb24gPT09ICdoaWRlJykge1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5zaG93LnB1c2godGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgICF0YXJnZXQuaXNTaG93biAmJiBvcGVyYXRpb24udG9TaG93LnB1c2godGFyZ2V0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLmhpZGUucHVzaCh0YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmlzU2hvd24gJiYgb3BlcmF0aW9uLnRvSGlkZS5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyRXZhbHVhdGVIaWRlU2hvdycsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAyLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7T3BlcmF0aW9ufSAgICAgb3BlcmF0aW9uXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBzb3J0T3BlcmF0aW9uOiBmdW5jdGlvbihvcGVyYXRpb24pIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlU29ydE9wZXJhdGlvbicsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIG9wZXJhdGlvbi5zdGFydE9yZGVyID0gc2VsZi50YXJnZXRzO1xuXG4gICAgICAgICAgICBpZiAob3BlcmF0aW9uLm5ld1NvcnQuY29sbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIFNvcnQgYnkgY29sbGVjdGlvblxuXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLm5ld09yZGVyID0gb3BlcmF0aW9uLm5ld1NvcnQuY29sbGVjdGlvbjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uLm5ld1NvcnQub3JkZXIgPT09ICdyYW5kb20nKSB7XG4gICAgICAgICAgICAgICAgLy8gU29ydCByYW5kb21cblxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5uZXdPcmRlciA9IGguYXJyYXlTaHVmZmxlKG9wZXJhdGlvbi5zdGFydE9yZGVyKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uLm5ld1NvcnQuYXR0cmlidXRlID09PSAnJykge1xuICAgICAgICAgICAgICAgIC8vIFNvcnQgYnkgZGVmYXVsdFxuXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLm5ld09yZGVyID0gc2VsZi5vcmlnT3JkZXIuc2xpY2UoKTtcblxuICAgICAgICAgICAgICAgIGlmIChvcGVyYXRpb24ubmV3U29ydC5vcmRlciA9PT0gJ2Rlc2MnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5uZXdPcmRlci5yZXZlcnNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBTb3J0IGJ5IGF0dHJpYnV0ZVxuXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLm5ld09yZGVyID0gb3BlcmF0aW9uLnN0YXJ0T3JkZXIuc2xpY2UoKTtcblxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5uZXdPcmRlci5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuY29tcGFyZShhLCBiLCBvcGVyYXRpb24ubmV3U29ydCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoLmlzRXF1YWxBcnJheShvcGVyYXRpb24ubmV3T3JkZXIsIG9wZXJhdGlvbi5zdGFydE9yZGVyKSkge1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi53aWxsU29ydCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlclNvcnRPcGVyYXRpb24nLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMi4wLjBcbiAgICAgICAgICogQHBhcmFtICAge21peGl0dXAuVGFyZ2V0fSAgICAgICAgYVxuICAgICAgICAgKiBAcGFyYW0gICB7bWl4aXR1cC5UYXJnZXR9ICAgICAgICBiXG4gICAgICAgICAqIEBwYXJhbSAgIHttaXhpdHVwLkNvbW1hbmRTb3J0fSAgIGNvbW1hbmRcbiAgICAgICAgICogQHJldHVybiAge051bWJlcn1cbiAgICAgICAgICovXG5cbiAgICAgICAgY29tcGFyZTogZnVuY3Rpb24oYSwgYiwgY29tbWFuZCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBvcmRlciAgICAgICA9IGNvbW1hbmQub3JkZXIsXG4gICAgICAgICAgICAgICAgYXR0ckEgICAgICAgPSBzZWxmLmdldEF0dHJpYnV0ZVZhbHVlKGEsIGNvbW1hbmQuYXR0cmlidXRlKSxcbiAgICAgICAgICAgICAgICBhdHRyQiAgICAgICA9IHNlbGYuZ2V0QXR0cmlidXRlVmFsdWUoYiwgY29tbWFuZC5hdHRyaWJ1dGUpO1xuXG4gICAgICAgICAgICBpZiAoaXNOYU4oYXR0ckEgKiAxKSB8fCBpc05hTihhdHRyQiAqIDEpKSB7XG4gICAgICAgICAgICAgICAgYXR0ckEgPSBhdHRyQS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGF0dHJCID0gYXR0ckIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXR0ckEgPSBhdHRyQSAqIDE7XG4gICAgICAgICAgICAgICAgYXR0ckIgPSBhdHRyQiAqIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhdHRyQSA8IGF0dHJCKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yZGVyID09PSAnYXNjJyA/IC0xIDogMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGF0dHJBID4gYXR0ckIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JkZXIgPT09ICdhc2MnID8gMSA6IC0xO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYXR0ckEgPT09IGF0dHJCICYmIGNvbW1hbmQubmV4dCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmNvbXBhcmUoYSwgYiwgY29tbWFuZC5uZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlYWRzIHRoZSB2YWx1ZXMgb2YgYW55IGRhdGEgYXR0cmlidXRlcyBwcmVzZW50IHRoZSBwcm92aWRlZCB0YXJnZXQgZWxlbWVudFxuICAgICAgICAgKiB3aGljaCBtYXRjaCB0aGUgY3VycmVudCBzb3J0IGNvbW1hbmQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7bWl4aXR1cC5UYXJnZXR9ICAgIHRhcmdldFxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgICAgIFthdHRyaWJ1dGVdXG4gICAgICAgICAqIEByZXR1cm4gIHsoU3RyaW5nfE51bWJlcil9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGdldEF0dHJpYnV0ZVZhbHVlOiBmdW5jdGlvbih0YXJnZXQsIGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgPSAnJztcblxuICAgICAgICAgICAgdmFsdWUgPSB0YXJnZXQuZG9tLmVsLmdldEF0dHJpYnV0ZSgnZGF0YS0nICsgYXR0cmlidXRlKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmRlYnVnLnNob3dXYXJuaW5ncykge1xuICAgICAgICAgICAgICAgICAgICAvLyBFbmNvdXJhZ2UgdXNlcnMgdG8gYXNzaWduIHZhbHVlcyB0byBhbGwgdGFyZ2V0cyB0byBhdm9pZCBlcnJvbmVvdXMgc29ydGluZ1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHR5cGVzIGFyZSBtaXhlZFxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihtaXhpdHVwLm1lc3NhZ2VzLndhcm5pbmdJbmNvbnNpc3RlbnRTb3J0aW5nQXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6ICdkYXRhLScgKyBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgYW4gYXR0cmlidXRlIGlzIG5vdCBwcmVzZW50LCByZXR1cm4gMCBhcyBhIHNhZmV0eSB2YWx1ZVxuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jYWxsRmlsdGVycygndmFsdWVHZXRBdHRyaWJ1dGVWYWx1ZScsIHZhbHVlIHx8IDAsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluc2VydHMgZWxlbWVudHMgaW50byB0aGUgRE9NIGluIHRoZSBhcHByb3ByaWF0ZVxuICAgICAgICAgKiBvcmRlciB1c2luZyBhIGRvY3VtZW50IGZyYWdtZW50IGZvciBtaW5pbWFsXG4gICAgICAgICAqIERPTSB0aHJhc2hpbmdcbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDIuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtib29sZWFufSAgIGlzUmVzZXR0aW5nXG4gICAgICAgICAqIEBwYXJhbSAgIHtPcGVyYXRpb259IG9wZXJhdGlvblxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgcHJpbnRTb3J0OiBmdW5jdGlvbihpc1Jlc2V0dGluZywgb3BlcmF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHN0YXJ0T3JkZXIgID0gaXNSZXNldHRpbmcgPyBvcGVyYXRpb24ubmV3T3JkZXIgOiBvcGVyYXRpb24uc3RhcnRPcmRlcixcbiAgICAgICAgICAgICAgICBuZXdPcmRlciAgICA9IGlzUmVzZXR0aW5nID8gb3BlcmF0aW9uLnN0YXJ0T3JkZXIgOiBvcGVyYXRpb24ubmV3T3JkZXIsXG4gICAgICAgICAgICAgICAgbmV4dFNpYmxpbmcgPSBzdGFydE9yZGVyLmxlbmd0aCA/IHN0YXJ0T3JkZXJbc3RhcnRPcmRlci5sZW5ndGggLSAxXS5kb20uZWwubmV4dEVsZW1lbnRTaWJsaW5nIDogbnVsbCxcbiAgICAgICAgICAgICAgICBmcmFnICAgICAgICA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgICAgICAgICAgICAgd2hpdGVzcGFjZSAgPSBudWxsLFxuICAgICAgICAgICAgICAgIHRhcmdldCAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBlbCAgICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlUHJpbnRTb3J0JywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgLy8gRW1wdHkgdGhlIGNvbnRhaW5lclxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyB0YXJnZXQgPSBzdGFydE9yZGVyW2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICBlbCA9IHRhcmdldC5kb20uZWw7XG5cbiAgICAgICAgICAgICAgICBpZiAoZWwuc3R5bGUucG9zaXRpb24gPT09ICdhYnNvbHV0ZScpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgaC5yZW1vdmVXaGl0ZXNwYWNlKGVsLnByZXZpb3VzU2libGluZyk7XG5cbiAgICAgICAgICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2hpdGVzcGFjZSA9IG5leHRTaWJsaW5nID8gbmV4dFNpYmxpbmcucHJldmlvdXNTaWJsaW5nIDogc2VsZi5kb20ucGFyZW50Lmxhc3RDaGlsZDtcblxuICAgICAgICAgICAgaWYgKHdoaXRlc3BhY2UgJiYgd2hpdGVzcGFjZS5ub2RlTmFtZSA9PT0gJyN0ZXh0Jykge1xuICAgICAgICAgICAgICAgIGgucmVtb3ZlV2hpdGVzcGFjZSh3aGl0ZXNwYWNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgdGFyZ2V0ID0gbmV3T3JkZXJbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIEFkZCB0YXJnZXRzIGludG8gYSBkb2N1bWVudCBmcmFnbWVudFxuXG4gICAgICAgICAgICAgICAgZWwgPSB0YXJnZXQuZG9tLmVsO1xuXG4gICAgICAgICAgICAgICAgaWYgKGguaXNFbGVtZW50KGZyYWcubGFzdENoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkKHdpbmRvdy5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnICcpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSW5zZXJ0IHRoZSBkb2N1bWVudCBmcmFnbWVudCBpbnRvIHRoZSBjb250YWluZXJcbiAgICAgICAgICAgIC8vIGJlZm9yZSBhbnkgb3RoZXIgbm9uLXRhcmdldCBlbGVtZW50c1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5kb20ucGFyZW50LmZpcnN0Q2hpbGQgJiYgc2VsZi5kb20ucGFyZW50LmZpcnN0Q2hpbGQgIT09IG5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgZnJhZy5pbnNlcnRCZWZvcmUod2luZG93LmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJyksIGZyYWcuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXh0U2libGluZykge1xuICAgICAgICAgICAgICAgIGZyYWcuYXBwZW5kQ2hpbGQod2luZG93LmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJykpO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50Lmluc2VydEJlZm9yZShmcmFnLCBuZXh0U2libGluZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudC5hcHBlbmRDaGlsZChmcmFnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJQcmludFNvcnQnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXJzZXMgdXNlci1kZWZpbmVkIHNvcnQgc3RyaW5ncyAoaS5lLiBgZGVmYXVsdDphc2NgKSBpbnRvIHNvcnQgY29tbWFuZHMgb2JqZWN0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgICAgICAgICAgIHNvcnRTdHJpbmdcbiAgICAgICAgICogQHBhcmFtICAge21peGl0dXAuQ29tbWFuZFNvcnR9ICAgY29tbWFuZFxuICAgICAgICAgKiBAcmV0dXJuICB7bWl4aXR1cC5Db21tYW5kU29ydH1cbiAgICAgICAgICovXG5cbiAgICAgICAgcGFyc2VTb3J0U3RyaW5nOiBmdW5jdGlvbihzb3J0U3RyaW5nLCBjb21tYW5kKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHJ1bGVzICAgICAgID0gc29ydFN0cmluZy5zcGxpdCgnICcpLFxuICAgICAgICAgICAgICAgIGN1cnJlbnQgICAgID0gY29tbWFuZCxcbiAgICAgICAgICAgICAgICBydWxlICAgICAgICA9IFtdLFxuICAgICAgICAgICAgICAgIGkgICAgICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIC8vIGNvbW1hbmQuc29ydFN0cmluZyA9IHNvcnRTdHJpbmc7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHJ1bGUgPSBydWxlc1tpXS5zcGxpdCgnOicpO1xuXG4gICAgICAgICAgICAgICAgY3VycmVudC5zb3J0U3RyaW5nICA9IHJ1bGVzW2ldO1xuICAgICAgICAgICAgICAgIGN1cnJlbnQuYXR0cmlidXRlICAgPSBoLmRhc2hDYXNlKHJ1bGVbMF0pO1xuICAgICAgICAgICAgICAgIGN1cnJlbnQub3JkZXIgICAgICAgPSBydWxlWzFdIHx8ICdhc2MnO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChjdXJyZW50LmF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyZWF0IFwiZGVmYXVsdFwiIGFzIHNvcnRpbmcgYnkgbm8gYXR0cmlidXRlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuYXR0cmlidXRlID0gJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdyYW5kb20nOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJlYXQgXCJyYW5kb21cIiBhcyBhbiBvcmRlciBub3QgYW4gYXR0cmlidXRlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuYXR0cmlidXRlICAgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQub3JkZXIgICAgICAgPSAncmFuZG9tJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50LmF0dHJpYnV0ZSB8fCBjdXJyZW50Lm9yZGVyID09PSAncmFuZG9tJykgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBpZiAoaSA8IHJ1bGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRW1iZWQgcmVmZXJlbmNlIHRvIHRoZSBuZXh0IGNvbW1hbmRcblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Lm5leHQgPSBuZXcgbWl4aXR1cC5Db21tYW5kU29ydCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGguZnJlZXplKGN1cnJlbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jYWxsRmlsdGVycygnY29tbWFuZHNQYXJzZVNvcnQnLCBjb21tYW5kLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXJzZXMgYWxsIGVmZmVjdHMgb3V0IG9mIHRoZSB1c2VyLWRlZmluZWQgYGFuaW1hdGlvbi5lZmZlY3RzYCBzdHJpbmcgaW50b1xuICAgICAgICAgKiB0aGVpciByZXNwZWN0aXZlIHByb3BlcnRpZXMgYW5kIHVuaXRzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMi4wLjBcbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHBhcnNlRWZmZWN0czogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1OYW1lICAgPSAnJyxcbiAgICAgICAgICAgICAgICBlZmZlY3RzSW4gICAgICAgPSBzZWxmLmNvbmZpZy5hbmltYXRpb24uZWZmZWN0c0luIHx8IHNlbGYuY29uZmlnLmFuaW1hdGlvbi5lZmZlY3RzLFxuICAgICAgICAgICAgICAgIGVmZmVjdHNPdXQgICAgICA9IHNlbGYuY29uZmlnLmFuaW1hdGlvbi5lZmZlY3RzT3V0IHx8IHNlbGYuY29uZmlnLmFuaW1hdGlvbi5lZmZlY3RzO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVQYXJzZUVmZmVjdHMnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBzZWxmLmVmZmVjdHNJbiAgICAgID0gbmV3IG1peGl0dXAuU3R5bGVEYXRhKCk7XG4gICAgICAgICAgICBzZWxmLmVmZmVjdHNPdXQgICAgID0gbmV3IG1peGl0dXAuU3R5bGVEYXRhKCk7XG4gICAgICAgICAgICBzZWxmLnRyYW5zZm9ybUluICAgID0gW107XG4gICAgICAgICAgICBzZWxmLnRyYW5zZm9ybU91dCAgID0gW107XG5cbiAgICAgICAgICAgIHNlbGYuZWZmZWN0c0luLm9wYWNpdHkgPSBzZWxmLmVmZmVjdHNPdXQub3BhY2l0eSA9IDE7XG5cbiAgICAgICAgICAgIHNlbGYucGFyc2VFZmZlY3QoJ2ZhZGUnLCBlZmZlY3RzSW4sIHNlbGYuZWZmZWN0c0luLCBzZWxmLnRyYW5zZm9ybUluKTtcbiAgICAgICAgICAgIHNlbGYucGFyc2VFZmZlY3QoJ2ZhZGUnLCBlZmZlY3RzT3V0LCBzZWxmLmVmZmVjdHNPdXQsIHNlbGYudHJhbnNmb3JtT3V0LCB0cnVlKTtcblxuICAgICAgICAgICAgZm9yICh0cmFuc2Zvcm1OYW1lIGluIG1peGl0dXAudHJhbnNmb3JtRGVmYXVsdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShtaXhpdHVwLnRyYW5zZm9ybURlZmF1bHRzW3RyYW5zZm9ybU5hbWVdIGluc3RhbmNlb2YgbWl4aXR1cC5UcmFuc2Zvcm1EYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWxmLnBhcnNlRWZmZWN0KHRyYW5zZm9ybU5hbWUsIGVmZmVjdHNJbiwgc2VsZi5lZmZlY3RzSW4sIHNlbGYudHJhbnNmb3JtSW4pO1xuICAgICAgICAgICAgICAgIHNlbGYucGFyc2VFZmZlY3QodHJhbnNmb3JtTmFtZSwgZWZmZWN0c091dCwgc2VsZi5lZmZlY3RzT3V0LCBzZWxmLnRyYW5zZm9ybU91dCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYucGFyc2VFZmZlY3QoJ3N0YWdnZXInLCBlZmZlY3RzSW4sIHNlbGYuZWZmZWN0c0luLCBzZWxmLnRyYW5zZm9ybUluKTtcbiAgICAgICAgICAgIHNlbGYucGFyc2VFZmZlY3QoJ3N0YWdnZXInLCBlZmZlY3RzT3V0LCBzZWxmLmVmZmVjdHNPdXQsIHNlbGYudHJhbnNmb3JtT3V0LCB0cnVlKTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJQYXJzZUVmZmVjdHMnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMi4wLjBcbiAgICAgICAgICogQHBhcmFtICAge3N0cmluZ30gICAgZWZmZWN0TmFtZVxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICBlZmZlY3RTdHJpbmdcbiAgICAgICAgICogQHBhcmFtICAge1N0eWxlRGF0YX0gZWZmZWN0c1xuICAgICAgICAgKiBAcGFyYW0gICB7U3RyaW5nW119ICB0cmFuc2Zvcm1cbiAgICAgICAgICogQHBhcmFtICAge2Jvb2xlYW59ICAgW2lzT3V0XVxuICAgICAgICAgKi9cblxuICAgICAgICBwYXJzZUVmZmVjdDogZnVuY3Rpb24oZWZmZWN0TmFtZSwgZWZmZWN0U3RyaW5nLCBlZmZlY3RzLCB0cmFuc2Zvcm0sIGlzT3V0KSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHJlICAgICAgICAgID0gL1xcKChbXildKylcXCkvLFxuICAgICAgICAgICAgICAgIHByb3BJbmRleCAgID0gLTEsXG4gICAgICAgICAgICAgICAgc3RyICAgICAgICAgPSAnJyxcbiAgICAgICAgICAgICAgICBtYXRjaCAgICAgICA9IFtdLFxuICAgICAgICAgICAgICAgIHZhbCAgICAgICAgID0gJycsXG4gICAgICAgICAgICAgICAgdW5pdHMgICAgICAgPSBbJyUnLCAncHgnLCAnZW0nLCAncmVtJywgJ3ZoJywgJ3Z3JywgJ2RlZyddLFxuICAgICAgICAgICAgICAgIHVuaXQgICAgICAgID0gJycsXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlUGFyc2VFZmZlY3QnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGVmZmVjdFN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKG1peGl0dXAubWVzc2FnZXMuZXJyb3JDb25maWdJbnZhbGlkQW5pbWF0aW9uRWZmZWN0cygpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVmZmVjdFN0cmluZy5pbmRleE9mKGVmZmVjdE5hbWUpIDwgMCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBlZmZlY3QgaXMgbm90IHByZXNlbnQgaW4gdGhlIGVmZmVjdHMgc3RyaW5nXG5cbiAgICAgICAgICAgICAgICBpZiAoZWZmZWN0TmFtZSA9PT0gJ3N0YWdnZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IHN0YWdnZXIgdG8gMFxuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc3RhZ2dlckR1cmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRoZSBlZmZlY3QgaXMgcHJlc2VudFxuXG4gICAgICAgICAgICBwcm9wSW5kZXggPSBlZmZlY3RTdHJpbmcuaW5kZXhPZihlZmZlY3ROYW1lICsgJygnKTtcblxuICAgICAgICAgICAgaWYgKHByb3BJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGVmZmVjdCBoYXMgYSB1c2VyIGRlZmluZWQgdmFsdWUgaW4gcGFyZW50aGVzZXNcblxuICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgZnJvbSB0aGUgZmlyc3QgcGFyZW50aGVzaXMgdG8gdGhlIGVuZCBvZiBzdHJpbmdcblxuICAgICAgICAgICAgICAgIHN0ciA9IGVmZmVjdFN0cmluZy5zdWJzdHJpbmcocHJvcEluZGV4KTtcblxuICAgICAgICAgICAgICAgIC8vIE1hdGNoIGFueSBudW1iZXIgb2YgY2hhcmFjdGVycyBiZXR3ZWVuIFwiKFwiIGFuZCBcIilcIlxuXG4gICAgICAgICAgICAgICAgbWF0Y2ggPSByZS5leGVjKHN0cik7XG5cbiAgICAgICAgICAgICAgICB2YWwgPSBtYXRjaFsxXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChlZmZlY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZmFkZSc6XG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdHMub3BhY2l0eSA9IHZhbCA/IHBhcnNlRmxvYXQodmFsKSA6IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3RhZ2dlcic6XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc3RhZ2dlckR1cmF0aW9uID0gdmFsID8gcGFyc2VGbG9hdCh2YWwpIDogMTAwO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IEN1cnJlbnRseSBzdGFnZ2VyIG11c3QgYmUgYXBwbGllZCBnbG9iYWxseSwgYnV0XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHNlcGVyYXRlIHZhbHVlcyBhcmUgc3BlY2lmaWVkIGZvciBpbi9vdXQsIHRoaXMgc2hvdWxkXG4gICAgICAgICAgICAgICAgICAgIC8vIGJlIHJlc3BlY3RlZFxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIC8vIEFsbCBvdGhlciBlZmZlY3RzIGFyZSB0cmFuc2Zvcm1zIGZvbGxvd2luZyB0aGUgc2FtZSBzdHJ1Y3R1cmVcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPdXQgJiYgc2VsZi5jb25maWcuYW5pbWF0aW9uLnJldmVyc2VPdXQgJiYgZWZmZWN0TmFtZSAhPT0gJ3NjYWxlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0c1tlZmZlY3ROYW1lXS52YWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZhbCA/IHBhcnNlRmxvYXQodmFsKSA6IG1peGl0dXAudHJhbnNmb3JtRGVmYXVsdHNbZWZmZWN0TmFtZV0udmFsdWUpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3RzW2VmZmVjdE5hbWVdLnZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmFsID8gcGFyc2VGbG9hdCh2YWwpIDogbWl4aXR1cC50cmFuc2Zvcm1EZWZhdWx0c1tlZmZlY3ROYW1lXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyB1bml0ID0gdW5pdHNbaV07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWwuaW5kZXhPZih1bml0KSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdHNbZWZmZWN0TmFtZV0udW5pdCA9IHVuaXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0c1tlZmZlY3ROYW1lXS51bml0ID0gbWl4aXR1cC50cmFuc2Zvcm1EZWZhdWx0c1tlZmZlY3ROYW1lXS51bml0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3ROYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArXG4gICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3RzW2VmZmVjdE5hbWVdLnZhbHVlICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdHNbZWZmZWN0TmFtZV0udW5pdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKSdcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJQYXJzZUVmZmVjdCcsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAyLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7T3BlcmF0aW9ufSAgICAgb3BlcmF0aW9uXG4gICAgICAgICAqIEByZXR1cm4gIHtTdGF0ZX1cbiAgICAgICAgICovXG5cbiAgICAgICAgYnVpbGRTdGF0ZTogZnVuY3Rpb24ob3BlcmF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHN0YXRlICAgICAgID0gbmV3IG1peGl0dXAuU3RhdGUoKSxcbiAgICAgICAgICAgICAgICB0YXJnZXQgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlQnVpbGRTdGF0ZScsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIC8vIE1hcCB0YXJnZXQgZWxlbWVudHMgaW50byBzdGF0ZSBhcnJheXMuXG4gICAgICAgICAgICAvLyB0aGUgcmVhbCB0YXJnZXQgb2JqZWN0cyBzaG91bGQgbmV2ZXIgYmUgZXhwb3NlZFxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyB0YXJnZXQgPSBzZWxmLnRhcmdldHNbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghb3BlcmF0aW9uLnRvUmVtb3ZlLmxlbmd0aCB8fCBvcGVyYXRpb24udG9SZW1vdmUuaW5kZXhPZih0YXJnZXQpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS50YXJnZXRzLnB1c2godGFyZ2V0LmRvbS5lbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyB0YXJnZXQgPSBvcGVyYXRpb24ubWF0Y2hpbmdbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIHN0YXRlLm1hdGNoaW5nLnB1c2godGFyZ2V0LmRvbS5lbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IG9wZXJhdGlvbi5zaG93W2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zaG93LnB1c2godGFyZ2V0LmRvbS5lbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IG9wZXJhdGlvbi5oaWRlW2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIW9wZXJhdGlvbi50b1JlbW92ZS5sZW5ndGggfHwgb3BlcmF0aW9uLnRvUmVtb3ZlLmluZGV4T2YodGFyZ2V0KSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuaGlkZS5wdXNoKHRhcmdldC5kb20uZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhdGUuaWQgICAgICAgICAgICAgICAgICAgICAgICA9IHNlbGYuaWQ7XG4gICAgICAgICAgICBzdGF0ZS5jb250YWluZXIgICAgICAgICAgICAgICAgID0gc2VsZi5kb20uY29udGFpbmVyO1xuICAgICAgICAgICAgc3RhdGUuYWN0aXZlRmlsdGVyICAgICAgICAgICAgICA9IG9wZXJhdGlvbi5uZXdGaWx0ZXI7XG4gICAgICAgICAgICBzdGF0ZS5hY3RpdmVTb3J0ICAgICAgICAgICAgICAgID0gb3BlcmF0aW9uLm5ld1NvcnQ7XG4gICAgICAgICAgICBzdGF0ZS5hY3RpdmVEYXRhc2V0ICAgICAgICAgICAgID0gb3BlcmF0aW9uLm5ld0RhdGFzZXQ7XG4gICAgICAgICAgICBzdGF0ZS5hY3RpdmVDb250YWluZXJDbGFzc05hbWUgID0gb3BlcmF0aW9uLm5ld0NvbnRhaW5lckNsYXNzTmFtZTtcbiAgICAgICAgICAgIHN0YXRlLmhhc0ZhaWxlZCAgICAgICAgICAgICAgICAgPSBvcGVyYXRpb24uaGFzRmFpbGVkO1xuICAgICAgICAgICAgc3RhdGUudG90YWxUYXJnZXRzICAgICAgICAgICAgICA9IHNlbGYudGFyZ2V0cy5sZW5ndGg7XG4gICAgICAgICAgICBzdGF0ZS50b3RhbFNob3cgICAgICAgICAgICAgICAgID0gb3BlcmF0aW9uLnNob3cubGVuZ3RoO1xuICAgICAgICAgICAgc3RhdGUudG90YWxIaWRlICAgICAgICAgICAgICAgICA9IG9wZXJhdGlvbi5oaWRlLmxlbmd0aDtcbiAgICAgICAgICAgIHN0YXRlLnRvdGFsTWF0Y2hpbmcgICAgICAgICAgICAgPSBvcGVyYXRpb24ubWF0Y2hpbmcubGVuZ3RoO1xuICAgICAgICAgICAgc3RhdGUudHJpZ2dlckVsZW1lbnQgICAgICAgICAgICA9IG9wZXJhdGlvbi50cmlnZ2VyRWxlbWVudDtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuY2FsbEZpbHRlcnMoJ3N0YXRlQnVpbGRTdGF0ZScsIHN0YXRlLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMi4wLjBcbiAgICAgICAgICogQHBhcmFtICAge2Jvb2xlYW59ICAgc2hvdWxkQW5pbWF0ZVxuICAgICAgICAgKiBAcGFyYW0gICB7T3BlcmF0aW9ufSBvcGVyYXRpb25cbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGdvTWl4OiBmdW5jdGlvbihzaG91bGRBbmltYXRlLCBvcGVyYXRpb24pIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQgICAgPSBudWxsO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVHb01peCcsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBhbmltYXRpb24gZHVyYXRpb24gaXMgc2V0IHRvIDBtcyxcbiAgICAgICAgICAgIC8vIG9yIG5vIGVmZmVjdHMgc3BlY2lmaWVkLFxuICAgICAgICAgICAgLy8gb3IgdGhlIGNvbnRhaW5lciBpcyBoaWRkZW5cbiAgICAgICAgICAgIC8vIHRoZW4gYWJvcnQgYW5pbWF0aW9uXG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhc2VsZi5jb25maWcuYW5pbWF0aW9uLmR1cmF0aW9uIHx8ICFzZWxmLmNvbmZpZy5hbmltYXRpb24uZWZmZWN0cyB8fCAhaC5pc1Zpc2libGUoc2VsZi5kb20uY29udGFpbmVyKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc2hvdWxkQW5pbWF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgIW9wZXJhdGlvbi50b1Nob3cubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgIW9wZXJhdGlvbi50b0hpZGUubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgIW9wZXJhdGlvbi53aWxsU29ydCAmJlxuICAgICAgICAgICAgICAgICFvcGVyYXRpb24ud2lsbENoYW5nZUxheW91dFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgbm90aGluZyB0byBzaG93IG9yIGhpZGUsIGFuZCBub3Qgc29ydGluZyBvclxuICAgICAgICAgICAgICAgIC8vIGNoYW5naW5nIGxheW91dFxuXG4gICAgICAgICAgICAgICAgc2hvdWxkQW5pbWF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgIW9wZXJhdGlvbi5zdGFydFN0YXRlLnNob3cubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgIW9wZXJhdGlvbi5zaG93Lmxlbmd0aFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgbm90aGluZyBjdXJyZW50bHkgc2hvd24sIG5vdGhpbmcgdG8gc2hvd1xuXG4gICAgICAgICAgICAgICAgc2hvdWxkQW5pbWF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtaXhpdHVwLmV2ZW50cy5maXJlKCdtaXhTdGFydCcsIHNlbGYuZG9tLmNvbnRhaW5lciwge1xuICAgICAgICAgICAgICAgIHN0YXRlOiBvcGVyYXRpb24uc3RhcnRTdGF0ZSxcbiAgICAgICAgICAgICAgICBmdXR1cmVTdGF0ZTogb3BlcmF0aW9uLm5ld1N0YXRlLFxuICAgICAgICAgICAgICAgIGluc3RhbmNlOiBzZWxmXG4gICAgICAgICAgICB9LCBzZWxmLmRvbS5kb2N1bWVudCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZi5jb25maWcuY2FsbGJhY2tzLm9uTWl4U3RhcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5jYWxsYmFja3Mub25NaXhTdGFydC5jYWxsKFxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRvbS5jb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5zdGFydFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb24ubmV3U3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHNlbGZcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoLnJlbW92ZUNsYXNzKHNlbGYuZG9tLmNvbnRhaW5lciwgaC5nZXRDbGFzc25hbWUoc2VsZi5jb25maWcuY2xhc3NOYW1lcywgJ2NvbnRhaW5lcicsIHNlbGYuY29uZmlnLmNsYXNzTmFtZXMubW9kaWZpZXJGYWlsZWQpKTtcblxuICAgICAgICAgICAgaWYgKCFzZWxmLnVzZXJEZWZlcnJlZCkge1xuICAgICAgICAgICAgICAgIC8vIFF1ZXVlIGVtcHR5LCBubyBwZW5kaW5nIG9wZXJhdGlvbnNcblxuICAgICAgICAgICAgICAgIGRlZmVycmVkID0gc2VsZi51c2VyRGVmZXJyZWQgPSBoLmRlZmVyKG1peGl0dXAubGlicmFyaWVzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVXNlIGV4aXN0aW5nIGRlZmVycmVkXG5cbiAgICAgICAgICAgICAgICBkZWZlcnJlZCA9IHNlbGYudXNlckRlZmVycmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmlzQnVzeSA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICghc2hvdWxkQW5pbWF0ZSB8fCAhbWl4aXR1cC5mZWF0dXJlcy5oYXMudHJhbnNpdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBBYm9ydFxuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmRlYnVnLmZhdXhBc3luYykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhblVwKG9wZXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH0sIHNlbGYuY29uZmlnLmFuaW1hdGlvbi5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhblVwKG9wZXJhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuY2FsbEZpbHRlcnMoJ3Byb21pc2VHb01peCcsIGRlZmVycmVkLnByb21pc2UsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHdlIHNob3VsZCBhbmltYXRlIGFuZCB0aGUgcGxhdGZvcm0gc3VwcG9ydHMgdHJhbnNpdGlvbnMsIGdvIGZvciBpdFxuXG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ICE9PSBvcGVyYXRpb24uZG9jU3RhdGUuc2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKG9wZXJhdGlvbi5kb2NTdGF0ZS5zY3JvbGxMZWZ0LCBvcGVyYXRpb24uZG9jU3RhdGUuc2Nyb2xsVG9wKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFuaW1hdGlvbi5hcHBseVBlcnNwZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50LnN0eWxlW21peGl0dXAuZmVhdHVyZXMucGVyc3BlY3RpdmVQcm9wXSA9XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLmFuaW1hdGlvbi5wZXJzcGVjdGl2ZURpc3RhbmNlO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50LnN0eWxlW21peGl0dXAuZmVhdHVyZXMucGVyc3BlY3RpdmVPcmlnaW5Qcm9wXSA9XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLmFuaW1hdGlvbi5wZXJzcGVjdGl2ZU9yaWdpbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLmFuaW1hdGlvbi5hbmltYXRlUmVzaXplQ29udGFpbmVyICYmXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnN0YXJ0SGVpZ2h0ICE9PSBvcGVyYXRpb24ubmV3SGVpZ2h0ICYmXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnZpZXdwb3J0RGVsdGFZICE9PSBvcGVyYXRpb24uc3RhcnRIZWlnaHQgLSBvcGVyYXRpb24ubmV3SGVpZ2h0XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5wYXJlbnQuc3R5bGUuaGVpZ2h0ID0gb3BlcmF0aW9uLnN0YXJ0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLmFuaW1hdGlvbi5hbmltYXRlUmVzaXplQ29udGFpbmVyICYmXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnN0YXJ0V2lkdGggIT09IG9wZXJhdGlvbi5uZXdXaWR0aCAmJlxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi52aWV3cG9ydERlbHRhWCAhPT0gb3BlcmF0aW9uLnN0YXJ0V2lkdGggLSBvcGVyYXRpb24ubmV3V2lkdGhcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudC5zdHlsZS53aWR0aCA9IG9wZXJhdGlvbi5zdGFydFdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi5zdGFydEhlaWdodCA9PT0gb3BlcmF0aW9uLm5ld0hlaWdodCkge1xuICAgICAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudC5zdHlsZS5oZWlnaHQgPSBvcGVyYXRpb24uc3RhcnRIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3BlcmF0aW9uLnN0YXJ0V2lkdGggPT09IG9wZXJhdGlvbi5uZXdXaWR0aCkge1xuICAgICAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudC5zdHlsZS53aWR0aCA9IG9wZXJhdGlvbi5zdGFydFdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi5zdGFydEhlaWdodCA9PT0gb3BlcmF0aW9uLm5ld0hlaWdodCAmJiBvcGVyYXRpb24uc3RhcnRXaWR0aCA9PT0gb3BlcmF0aW9uLm5ld1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vdmVUYXJnZXRzKG9wZXJhdGlvbik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuY2FsbEZpbHRlcnMoJ3Byb21pc2VHb01peCcsIGRlZmVycmVkLnByb21pc2UsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAyLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7T3BlcmF0aW9ufSAgICAgb3BlcmF0aW9uXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBnZXRTdGFydE1peERhdGE6IGZ1bmN0aW9uKG9wZXJhdGlvbikge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBwYXJlbnRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNlbGYuZG9tLnBhcmVudCksXG4gICAgICAgICAgICAgICAgcGFyZW50UmVjdCAgPSBzZWxmLmRvbS5wYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICAgICAgdGFyZ2V0ICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGRhdGEgICAgICAgID0ge30sXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgPSAtMSxcbiAgICAgICAgICAgICAgICBib3hTaXppbmcgICA9IHBhcmVudFN0eWxlW21peGl0dXAuZmVhdHVyZXMuYm94U2l6aW5nUHJvcF07XG5cbiAgICAgICAgICAgIHNlbGYuaW5jUGFkZGluZyA9IChib3hTaXppbmcgPT09ICdib3JkZXItYm94Jyk7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUdldFN0YXJ0TWl4RGF0YScsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IG9wZXJhdGlvbi5zaG93W2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gdGFyZ2V0LmdldFBvc0RhdGEoKTtcblxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5zaG93UG9zRGF0YVtpXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRQb3NEYXRhOiBkYXRhXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgdGFyZ2V0ID0gb3BlcmF0aW9uLnRvSGlkZVtpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHRhcmdldC5nZXRQb3NEYXRhKCk7XG5cbiAgICAgICAgICAgICAgICBvcGVyYXRpb24udG9IaWRlUG9zRGF0YVtpXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRQb3NEYXRhOiBkYXRhXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3BlcmF0aW9uLnN0YXJ0WCA9IHBhcmVudFJlY3QubGVmdDtcbiAgICAgICAgICAgIG9wZXJhdGlvbi5zdGFydFkgPSBwYXJlbnRSZWN0LnRvcDtcblxuICAgICAgICAgICAgb3BlcmF0aW9uLnN0YXJ0SGVpZ2h0ID0gc2VsZi5pbmNQYWRkaW5nID9cbiAgICAgICAgICAgICAgICBwYXJlbnRSZWN0LmhlaWdodCA6XG4gICAgICAgICAgICAgICAgcGFyZW50UmVjdC5oZWlnaHQgLVxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHBhcmVudFN0eWxlLnBhZGRpbmdUb3ApIC1cbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChwYXJlbnRTdHlsZS5wYWRkaW5nQm90dG9tKSAtXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocGFyZW50U3R5bGUuYm9yZGVyVG9wKSAtXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocGFyZW50U3R5bGUuYm9yZGVyQm90dG9tKTtcblxuICAgICAgICAgICAgb3BlcmF0aW9uLnN0YXJ0V2lkdGggPSBzZWxmLmluY1BhZGRpbmcgP1xuICAgICAgICAgICAgICAgIHBhcmVudFJlY3Qud2lkdGggOlxuICAgICAgICAgICAgICAgIHBhcmVudFJlY3Qud2lkdGggLVxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHBhcmVudFN0eWxlLnBhZGRpbmdMZWZ0KSAtXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocGFyZW50U3R5bGUucGFkZGluZ1JpZ2h0KSAtXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocGFyZW50U3R5bGUuYm9yZGVyTGVmdCkgLVxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHBhcmVudFN0eWxlLmJvcmRlclJpZ2h0KTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJHZXRTdGFydE1peERhdGEnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMi4wLjBcbiAgICAgICAgICogQHBhcmFtICAge09wZXJhdGlvbn0gICAgIG9wZXJhdGlvblxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgc2V0SW50ZXI6IGZ1bmN0aW9uKG9wZXJhdGlvbikge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHRhcmdldCAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGkgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlU2V0SW50ZXInLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAvLyBQcmV2ZW50IHNjcm9sbGJhciBmbGlja2VyIG9uIG5vbi1pbmVydGlhbCBzY3JvbGwgcGxhdGZvcm1zIGJ5IGNsYW1waW5nIGhlaWdodC93aWR0aFxuXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuYW5pbWF0aW9uLmNsYW1wSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50LnN0eWxlLmhlaWdodCAgICA9IG9wZXJhdGlvbi5zdGFydEhlaWdodCArICdweCc7XG4gICAgICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50LnN0eWxlLm92ZXJmbG93ICA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuYW5pbWF0aW9uLmNsYW1wV2lkdGgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5wYXJlbnQuc3R5bGUud2lkdGggICAgID0gb3BlcmF0aW9uLnN0YXJ0V2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudC5zdHlsZS5vdmVyZmxvdyAgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgdGFyZ2V0ID0gb3BlcmF0aW9uLnRvU2hvd1tpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnNob3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi53aWxsQ2hhbmdlTGF5b3V0KSB7XG4gICAgICAgICAgICAgICAgaC5yZW1vdmVDbGFzcyhzZWxmLmRvbS5jb250YWluZXIsIG9wZXJhdGlvbi5zdGFydENvbnRhaW5lckNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgaC5hZGRDbGFzcyhzZWxmLmRvbS5jb250YWluZXIsIG9wZXJhdGlvbi5uZXdDb250YWluZXJDbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlclNldEludGVyJywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDIuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtPcGVyYXRpb259ICAgICBvcGVyYXRpb25cbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGdldEludGVyTWl4RGF0YTogZnVuY3Rpb24ob3BlcmF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgdGFyZ2V0ICA9IG51bGwsXG4gICAgICAgICAgICAgICAgaSAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVHZXRJbnRlck1peERhdGEnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyB0YXJnZXQgPSBvcGVyYXRpb24uc2hvd1tpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnNob3dQb3NEYXRhW2ldLmludGVyUG9zRGF0YSA9IHRhcmdldC5nZXRQb3NEYXRhKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IG9wZXJhdGlvbi50b0hpZGVbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi50b0hpZGVQb3NEYXRhW2ldLmludGVyUG9zRGF0YSA9IHRhcmdldC5nZXRQb3NEYXRhKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyR2V0SW50ZXJNaXhEYXRhJywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDIuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtPcGVyYXRpb259ICAgICBvcGVyYXRpb25cbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHNldEZpbmFsOiBmdW5jdGlvbihvcGVyYXRpb24pIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB0YXJnZXQgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBpICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZVNldEZpbmFsJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgb3BlcmF0aW9uLndpbGxTb3J0ICYmIHNlbGYucHJpbnRTb3J0KGZhbHNlLCBvcGVyYXRpb24pO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyB0YXJnZXQgPSBvcGVyYXRpb24udG9IaWRlW2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuaGlkZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlclNldEZpbmFsJywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDIuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtPcGVyYXRpb259ICAgICBvcGVyYXRpb25cbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGdldEZpbmFsTWl4RGF0YTogZnVuY3Rpb24ob3BlcmF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHBhcmVudFN0eWxlID0gbnVsbCxcbiAgICAgICAgICAgICAgICBwYXJlbnRSZWN0ICA9IG51bGwsXG4gICAgICAgICAgICAgICAgdGFyZ2V0ICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGkgICAgICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUdldEZpbmFsTWl4RGF0YScsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IG9wZXJhdGlvbi5zaG93W2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24uc2hvd1Bvc0RhdGFbaV0uZmluYWxQb3NEYXRhID0gdGFyZ2V0LmdldFBvc0RhdGEoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgdGFyZ2V0ID0gb3BlcmF0aW9uLnRvSGlkZVtpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnRvSGlkZVBvc0RhdGFbaV0uZmluYWxQb3NEYXRhID0gdGFyZ2V0LmdldFBvc0RhdGEoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVtb3ZlIGNsYW1waW5nXG5cbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5hbmltYXRpb24uY2xhbXBIZWlnaHQgfHwgc2VsZi5jb25maWcuYW5pbWF0aW9uLmNsYW1wV2lkdGgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5wYXJlbnQuc3R5bGUuaGVpZ2h0ICAgID1cbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5wYXJlbnQuc3R5bGUud2lkdGggICAgID1cbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5wYXJlbnQuc3R5bGUub3ZlcmZsb3cgID0gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghc2VsZi5pbmNQYWRkaW5nKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzZWxmLmRvbS5wYXJlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYXJlbnRSZWN0ICA9IHNlbGYuZG9tLnBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgb3BlcmF0aW9uLm5ld1ggPSBwYXJlbnRSZWN0LmxlZnQ7XG4gICAgICAgICAgICBvcGVyYXRpb24ubmV3WSA9IHBhcmVudFJlY3QudG9wO1xuXG4gICAgICAgICAgICBvcGVyYXRpb24ubmV3SGVpZ2h0ID0gc2VsZi5pbmNQYWRkaW5nID9cbiAgICAgICAgICAgICAgICBwYXJlbnRSZWN0LmhlaWdodCA6XG4gICAgICAgICAgICAgICAgcGFyZW50UmVjdC5oZWlnaHQgLVxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHBhcmVudFN0eWxlLnBhZGRpbmdUb3ApIC1cbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChwYXJlbnRTdHlsZS5wYWRkaW5nQm90dG9tKSAtXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocGFyZW50U3R5bGUuYm9yZGVyVG9wKSAtXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocGFyZW50U3R5bGUuYm9yZGVyQm90dG9tKTtcblxuICAgICAgICAgICAgb3BlcmF0aW9uLm5ld1dpZHRoID0gc2VsZi5pbmNQYWRkaW5nID9cbiAgICAgICAgICAgICAgICBwYXJlbnRSZWN0LndpZHRoIDpcbiAgICAgICAgICAgICAgICBwYXJlbnRSZWN0LndpZHRoIC1cbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChwYXJlbnRTdHlsZS5wYWRkaW5nTGVmdCkgLVxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHBhcmVudFN0eWxlLnBhZGRpbmdSaWdodCkgLVxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHBhcmVudFN0eWxlLmJvcmRlckxlZnQpIC1cbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChwYXJlbnRTdHlsZS5ib3JkZXJSaWdodCk7XG5cbiAgICAgICAgICAgIG9wZXJhdGlvbi52aWV3cG9ydERlbHRhWCA9IG9wZXJhdGlvbi5kb2NTdGF0ZS52aWV3cG9ydFdpZHRoIC0gdGhpcy5kb20uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgb3BlcmF0aW9uLnZpZXdwb3J0RGVsdGFZID0gb3BlcmF0aW9uLmRvY1N0YXRlLnZpZXdwb3J0SGVpZ2h0IC0gdGhpcy5kb20uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi53aWxsU29ydCkge1xuICAgICAgICAgICAgICAgIHNlbGYucHJpbnRTb3J0KHRydWUsIG9wZXJhdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IG9wZXJhdGlvbi50b1Nob3dbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIHRhcmdldC5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IG9wZXJhdGlvbi50b0hpZGVbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIHRhcmdldC5zaG93KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcGVyYXRpb24ud2lsbENoYW5nZUxheW91dCkge1xuICAgICAgICAgICAgICAgIGgucmVtb3ZlQ2xhc3Moc2VsZi5kb20uY29udGFpbmVyLCBvcGVyYXRpb24ubmV3Q29udGFpbmVyQ2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICBoLmFkZENsYXNzKHNlbGYuZG9tLmNvbnRhaW5lciwgc2VsZi5jb25maWcubGF5b3V0LmNvbnRhaW5lckNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyR2V0RmluYWxNaXhEYXRhJywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICAge09wZXJhdGlvbn0gICAgIG9wZXJhdGlvblxuICAgICAgICAgKi9cblxuICAgICAgICBnZXRUd2VlbkRhdGE6IGZ1bmN0aW9uKG9wZXJhdGlvbikge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgdGFyZ2V0ICAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBwb3NEYXRhICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGVmZmVjdE5hbWVzICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNlbGYuZWZmZWN0c0luKSxcbiAgICAgICAgICAgICAgICBlZmZlY3ROYW1lICAgICAgPSAnJyxcbiAgICAgICAgICAgICAgICBlZmZlY3QgICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIHdpZHRoQ2hhbmdlICAgICA9IC0xLFxuICAgICAgICAgICAgICAgIGhlaWdodENoYW5nZSAgICA9IC0xLFxuICAgICAgICAgICAgICAgIGkgICAgICAgICAgICAgICA9IC0xLFxuICAgICAgICAgICAgICAgIGogICAgICAgICAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVHZXRUd2VlbkRhdGEnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyB0YXJnZXQgPSBvcGVyYXRpb24uc2hvd1tpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcG9zRGF0YSAgICAgICAgICAgICA9IG9wZXJhdGlvbi5zaG93UG9zRGF0YVtpXTtcbiAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc0luICAgICAgID0gbmV3IG1peGl0dXAuU3R5bGVEYXRhKCk7XG4gICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NPdXQgICAgICA9IG5ldyBtaXhpdHVwLlN0eWxlRGF0YSgpO1xuICAgICAgICAgICAgICAgIHBvc0RhdGEudHdlZW5EYXRhICAgPSBuZXcgbWl4aXR1cC5TdHlsZURhdGEoKTtcblxuICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgeCBhbmQgeVxuXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5pc1Nob3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zSW4ueCA9IHBvc0RhdGEuc3RhcnRQb3NEYXRhLnggLSBwb3NEYXRhLmludGVyUG9zRGF0YS54O1xuICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc0luLnkgPSBwb3NEYXRhLnN0YXJ0UG9zRGF0YS55IC0gcG9zRGF0YS5pbnRlclBvc0RhdGEueTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc0luLnggPSBwb3NEYXRhLnBvc0luLnkgPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zT3V0LnggPSBwb3NEYXRhLmZpbmFsUG9zRGF0YS54IC0gcG9zRGF0YS5pbnRlclBvc0RhdGEueDtcbiAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc091dC55ID0gcG9zRGF0YS5maW5hbFBvc0RhdGEueSAtIHBvc0RhdGEuaW50ZXJQb3NEYXRhLnk7XG5cbiAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIG9wYWNpdHlcblxuICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zSW4ub3BhY2l0eSAgICAgICA9IHRhcmdldC5pc1Nob3duID8gMSA6IHNlbGYuZWZmZWN0c0luLm9wYWNpdHk7XG4gICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NPdXQub3BhY2l0eSAgICAgID0gMTtcbiAgICAgICAgICAgICAgICBwb3NEYXRhLnR3ZWVuRGF0YS5vcGFjaXR5ICAgPSBwb3NEYXRhLnBvc091dC5vcGFjaXR5IC0gcG9zRGF0YS5wb3NJbi5vcGFjaXR5O1xuXG4gICAgICAgICAgICAgICAgLy8gQWRqdXN0IHggYW5kIHkgaWYgbm90IG51ZGdpbmdcblxuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0LmlzU2hvd24gJiYgIXNlbGYuY29uZmlnLmFuaW1hdGlvbi5udWRnZSkge1xuICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc0luLnggPSBwb3NEYXRhLnBvc091dC54O1xuICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc0luLnkgPSBwb3NEYXRhLnBvc091dC55O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBvc0RhdGEudHdlZW5EYXRhLnggPSBwb3NEYXRhLnBvc091dC54IC0gcG9zRGF0YS5wb3NJbi54O1xuICAgICAgICAgICAgICAgIHBvc0RhdGEudHdlZW5EYXRhLnkgPSBwb3NEYXRhLnBvc091dC55IC0gcG9zRGF0YS5wb3NJbi55O1xuXG4gICAgICAgICAgICAgICAgLy8gUHJvY2VzcyB3aWR0aCwgaGVpZ2h0LCBhbmQgbWFyZ2luc1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFuaW1hdGlvbi5hbmltYXRlUmVzaXplVGFyZ2V0cykge1xuICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc0luLndpZHRoICAgICA9IHBvc0RhdGEuc3RhcnRQb3NEYXRhLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc0luLmhlaWdodCAgICA9IHBvc0RhdGEuc3RhcnRQb3NEYXRhLmhlaWdodDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBcInx8XCIgUHJldmVudHMgd2lkdGgvaGVpZ2h0IGNoYW5nZSBmcm9tIGluY2x1ZGluZyAwIHdpZHRoL2hlaWdodCBpZiBoaWRpbmcgb3Igc2hvd2luZ1xuXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoQ2hhbmdlID0gKHBvc0RhdGEuc3RhcnRQb3NEYXRhLndpZHRoIHx8IHBvc0RhdGEuZmluYWxQb3NEYXRhLndpZHRoKSAtIHBvc0RhdGEuaW50ZXJQb3NEYXRhLndpZHRoO1xuXG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zSW4ubWFyZ2luUmlnaHQgPSBwb3NEYXRhLnN0YXJ0UG9zRGF0YS5tYXJnaW5SaWdodCAtIHdpZHRoQ2hhbmdlO1xuXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodENoYW5nZSA9IChwb3NEYXRhLnN0YXJ0UG9zRGF0YS5oZWlnaHQgfHwgcG9zRGF0YS5maW5hbFBvc0RhdGEuaGVpZ2h0KSAtIHBvc0RhdGEuaW50ZXJQb3NEYXRhLmhlaWdodDtcblxuICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc0luLm1hcmdpbkJvdHRvbSA9IHBvc0RhdGEuc3RhcnRQb3NEYXRhLm1hcmdpbkJvdHRvbSAtIGhlaWdodENoYW5nZTtcblxuICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc091dC53aWR0aCAgICA9IHBvc0RhdGEuZmluYWxQb3NEYXRhLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc091dC5oZWlnaHQgICA9IHBvc0RhdGEuZmluYWxQb3NEYXRhLmhlaWdodDtcblxuICAgICAgICAgICAgICAgICAgICB3aWR0aENoYW5nZSA9IChwb3NEYXRhLmZpbmFsUG9zRGF0YS53aWR0aCB8fCBwb3NEYXRhLnN0YXJ0UG9zRGF0YS53aWR0aCkgLSBwb3NEYXRhLmludGVyUG9zRGF0YS53aWR0aDtcblxuICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc091dC5tYXJnaW5SaWdodCA9IHBvc0RhdGEuZmluYWxQb3NEYXRhLm1hcmdpblJpZ2h0IC0gd2lkdGhDaGFuZ2U7XG5cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0Q2hhbmdlID0gKHBvc0RhdGEuZmluYWxQb3NEYXRhLmhlaWdodCB8fCBwb3NEYXRhLnN0YXJ0UG9zRGF0YS5oZWlnaHQpIC0gcG9zRGF0YS5pbnRlclBvc0RhdGEuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zT3V0Lm1hcmdpbkJvdHRvbSA9IHBvc0RhdGEuZmluYWxQb3NEYXRhLm1hcmdpbkJvdHRvbSAtIGhlaWdodENoYW5nZTtcblxuICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnR3ZWVuRGF0YS53aWR0aCAgICAgICAgID0gcG9zRGF0YS5wb3NPdXQud2lkdGggLSBwb3NEYXRhLnBvc0luLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnR3ZWVuRGF0YS5oZWlnaHQgICAgICAgID0gcG9zRGF0YS5wb3NPdXQuaGVpZ2h0IC0gcG9zRGF0YS5wb3NJbi5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEudHdlZW5EYXRhLm1hcmdpblJpZ2h0ICAgPSBwb3NEYXRhLnBvc091dC5tYXJnaW5SaWdodCAtIHBvc0RhdGEucG9zSW4ubWFyZ2luUmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEudHdlZW5EYXRhLm1hcmdpbkJvdHRvbSAgPSBwb3NEYXRhLnBvc091dC5tYXJnaW5Cb3R0b20gLSBwb3NEYXRhLnBvc0luLm1hcmdpbkJvdHRvbTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIHRyYW5zZm9ybXNcblxuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGVmZmVjdE5hbWUgPSBlZmZlY3ROYW1lc1tqXTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdCA9IHNlbGYuZWZmZWN0c0luW2VmZmVjdE5hbWVdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGVmZmVjdCBpbnN0YW5jZW9mIG1peGl0dXAuVHJhbnNmb3JtRGF0YSkgfHwgIWVmZmVjdC52YWx1ZSkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NJbltlZmZlY3ROYW1lXS52YWx1ZSAgICAgPSBlZmZlY3QudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zT3V0W2VmZmVjdE5hbWVdLnZhbHVlICAgID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnR3ZWVuRGF0YVtlZmZlY3ROYW1lXS52YWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc091dFtlZmZlY3ROYW1lXS52YWx1ZSAtIHBvc0RhdGEucG9zSW5bZWZmZWN0TmFtZV0udmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NJbltlZmZlY3ROYW1lXS51bml0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zT3V0W2VmZmVjdE5hbWVdLnVuaXQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zRGF0YS50d2VlbkRhdGFbZWZmZWN0TmFtZV0udW5pdCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3QudW5pdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IG9wZXJhdGlvbi50b0hpZGVbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIHBvc0RhdGEgICAgICAgICAgICAgPSBvcGVyYXRpb24udG9IaWRlUG9zRGF0YVtpXTtcbiAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc0luICAgICAgID0gbmV3IG1peGl0dXAuU3R5bGVEYXRhKCk7XG4gICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NPdXQgICAgICA9IG5ldyBtaXhpdHVwLlN0eWxlRGF0YSgpO1xuICAgICAgICAgICAgICAgIHBvc0RhdGEudHdlZW5EYXRhICAgPSBuZXcgbWl4aXR1cC5TdHlsZURhdGEoKTtcblxuICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgeCBhbmQgeVxuXG4gICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NJbi54ICAgICA9IHRhcmdldC5pc1Nob3duID8gcG9zRGF0YS5zdGFydFBvc0RhdGEueCAtIHBvc0RhdGEuaW50ZXJQb3NEYXRhLnggOiAwO1xuICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zSW4ueSAgICAgPSB0YXJnZXQuaXNTaG93biA/IHBvc0RhdGEuc3RhcnRQb3NEYXRhLnkgLSBwb3NEYXRhLmludGVyUG9zRGF0YS55IDogMDtcbiAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc091dC54ICAgID0gc2VsZi5jb25maWcuYW5pbWF0aW9uLm51ZGdlID8gMCA6IHBvc0RhdGEucG9zSW4ueDtcbiAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc091dC55ICAgID0gc2VsZi5jb25maWcuYW5pbWF0aW9uLm51ZGdlID8gMCA6IHBvc0RhdGEucG9zSW4ueTtcbiAgICAgICAgICAgICAgICBwb3NEYXRhLnR3ZWVuRGF0YS54ID0gcG9zRGF0YS5wb3NPdXQueCAtIHBvc0RhdGEucG9zSW4ueDtcbiAgICAgICAgICAgICAgICBwb3NEYXRhLnR3ZWVuRGF0YS55ID0gcG9zRGF0YS5wb3NPdXQueSAtIHBvc0RhdGEucG9zSW4ueTtcblxuICAgICAgICAgICAgICAgIC8vIFByb2Nlc3Mgd2lkdGgsIGhlaWdodCwgYW5kIG1hcmdpbnNcblxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5hbmltYXRpb24uYW5pbWF0ZVJlc2l6ZVRhcmdldHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NJbi53aWR0aCAgICAgICAgID0gcG9zRGF0YS5zdGFydFBvc0RhdGEud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zSW4uaGVpZ2h0ICAgICAgICA9IHBvc0RhdGEuc3RhcnRQb3NEYXRhLmhlaWdodDtcblxuICAgICAgICAgICAgICAgICAgICB3aWR0aENoYW5nZSA9IHBvc0RhdGEuc3RhcnRQb3NEYXRhLndpZHRoIC0gcG9zRGF0YS5pbnRlclBvc0RhdGEud2lkdGg7XG5cbiAgICAgICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NJbi5tYXJnaW5SaWdodCA9IHBvc0RhdGEuc3RhcnRQb3NEYXRhLm1hcmdpblJpZ2h0IC0gd2lkdGhDaGFuZ2U7XG5cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0Q2hhbmdlID0gcG9zRGF0YS5zdGFydFBvc0RhdGEuaGVpZ2h0IC0gcG9zRGF0YS5pbnRlclBvc0RhdGEuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zSW4ubWFyZ2luQm90dG9tID0gcG9zRGF0YS5zdGFydFBvc0RhdGEubWFyZ2luQm90dG9tIC0gaGVpZ2h0Q2hhbmdlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFByb2Nlc3Mgb3BhY2l0eVxuXG4gICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NJbi5vcGFjaXR5ICAgICAgID0gMTtcbiAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc091dC5vcGFjaXR5ICAgICAgPSBzZWxmLmVmZmVjdHNPdXQub3BhY2l0eTtcbiAgICAgICAgICAgICAgICBwb3NEYXRhLnR3ZWVuRGF0YS5vcGFjaXR5ICAgPSBwb3NEYXRhLnBvc091dC5vcGFjaXR5IC0gcG9zRGF0YS5wb3NJbi5vcGFjaXR5O1xuXG4gICAgICAgICAgICAgICAgLy8gUHJvY2VzcyB0cmFuc2Zvcm1zXG5cbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBlZmZlY3ROYW1lID0gZWZmZWN0TmFtZXNbal07IGorKykge1xuICAgICAgICAgICAgICAgICAgICBlZmZlY3QgPSBzZWxmLmVmZmVjdHNPdXRbZWZmZWN0TmFtZV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZWZmZWN0IGluc3RhbmNlb2YgbWl4aXR1cC5UcmFuc2Zvcm1EYXRhKSB8fCAhZWZmZWN0LnZhbHVlKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc0luW2VmZmVjdE5hbWVdLnZhbHVlICAgICA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zT3V0W2VmZmVjdE5hbWVdLnZhbHVlICAgID0gZWZmZWN0LnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEudHdlZW5EYXRhW2VmZmVjdE5hbWVdLnZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zT3V0W2VmZmVjdE5hbWVdLnZhbHVlIC0gcG9zRGF0YS5wb3NJbltlZmZlY3ROYW1lXS52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnBvc0luW2VmZmVjdE5hbWVdLnVuaXQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zRGF0YS5wb3NPdXRbZWZmZWN0TmFtZV0udW5pdCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NEYXRhLnR3ZWVuRGF0YVtlZmZlY3ROYW1lXS51bml0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdC51bml0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJHZXRUd2VlbkRhdGEnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAge09wZXJhdGlvbn0gICAgIG9wZXJhdGlvblxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgbW92ZVRhcmdldHM6IGZ1bmN0aW9uKG9wZXJhdGlvbikge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgdGFyZ2V0ICAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBtb3ZlRGF0YSAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIHBvc0RhdGEgICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgc3RhdHVzQ2hhbmdlICAgID0gJycsXG4gICAgICAgICAgICAgICAgd2lsbFRyYW5zaXRpb24gID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgc3RhZ2dlckluZGV4ICAgID0gLTEsXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgICAgID0gLTEsXG4gICAgICAgICAgICAgICAgY2hlY2tQcm9ncmVzcyAgID0gc2VsZi5jaGVja1Byb2dyZXNzLmJpbmQoc2VsZik7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZU1vdmVUYXJnZXRzJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgLy8gVE9ETzogdGhpcyBpcyBhbiBleHRyYSBsb29wIGluIGFkZGl0aW9uIHRvIHRoZSBjYWxjc1xuICAgICAgICAgICAgLy8gZG9uZSBpbiBnZXRPcGVyYXRpb24sIGNvdWxkIHNvbWUgb2YgdGhpcyBiZSBkb25lIHRoZXJlP1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyB0YXJnZXQgPSBvcGVyYXRpb24uc2hvd1tpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbW92ZURhdGEgICAgPSBuZXcgbWl4aXR1cC5JTW92ZURhdGEoKTtcbiAgICAgICAgICAgICAgICBwb3NEYXRhICAgICA9IG9wZXJhdGlvbi5zaG93UG9zRGF0YVtpXTtcblxuICAgICAgICAgICAgICAgIHN0YXR1c0NoYW5nZSA9IHRhcmdldC5pc1Nob3duID8gJ25vbmUnIDogJ3Nob3cnO1xuXG4gICAgICAgICAgICAgICAgd2lsbFRyYW5zaXRpb24gPSBzZWxmLndpbGxUcmFuc2l0aW9uKFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5oYXNFZmZlY3QsXG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zSW4sXG4gICAgICAgICAgICAgICAgICAgIHBvc0RhdGEucG9zT3V0XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGlmICh3aWxsVHJhbnNpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IG5vbi10cmFuc2l0aW9uaW5nIHRhcmdldHMgZnJvbSBpbmNyZW1lbnRpbmcgdGhlIHN0YWdnZXJJbmRleFxuXG4gICAgICAgICAgICAgICAgICAgIHN0YWdnZXJJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRhcmdldC5zaG93KCk7XG5cbiAgICAgICAgICAgICAgICBtb3ZlRGF0YS5wb3NJbiAgICAgICAgICA9IHBvc0RhdGEucG9zSW47XG4gICAgICAgICAgICAgICAgbW92ZURhdGEucG9zT3V0ICAgICAgICAgPSBwb3NEYXRhLnBvc091dDtcbiAgICAgICAgICAgICAgICBtb3ZlRGF0YS5zdGF0dXNDaGFuZ2UgICA9IHN0YXR1c0NoYW5nZTtcbiAgICAgICAgICAgICAgICBtb3ZlRGF0YS5zdGFnZ2VySW5kZXggICA9IHN0YWdnZXJJbmRleDtcbiAgICAgICAgICAgICAgICBtb3ZlRGF0YS5vcGVyYXRpb24gICAgICA9IG9wZXJhdGlvbjtcbiAgICAgICAgICAgICAgICBtb3ZlRGF0YS5jYWxsYmFjayAgICAgICA9IHdpbGxUcmFuc2l0aW9uID8gY2hlY2tQcm9ncmVzcyA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICB0YXJnZXQubW92ZShtb3ZlRGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IG9wZXJhdGlvbi50b0hpZGVbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIHBvc0RhdGEgID0gb3BlcmF0aW9uLnRvSGlkZVBvc0RhdGFbaV07XG4gICAgICAgICAgICAgICAgbW92ZURhdGEgPSBuZXcgbWl4aXR1cC5JTW92ZURhdGEoKTtcblxuICAgICAgICAgICAgICAgIHN0YXR1c0NoYW5nZSA9ICdoaWRlJztcblxuICAgICAgICAgICAgICAgIHdpbGxUcmFuc2l0aW9uID0gc2VsZi53aWxsVHJhbnNpdGlvbihzdGF0dXNDaGFuZ2UsIHBvc0RhdGEucG9zSW4sIHBvc0RhdGEucG9zT3V0KTtcblxuICAgICAgICAgICAgICAgIG1vdmVEYXRhLnBvc0luICAgICAgICAgID0gcG9zRGF0YS5wb3NJbjtcbiAgICAgICAgICAgICAgICBtb3ZlRGF0YS5wb3NPdXQgICAgICAgICA9IHBvc0RhdGEucG9zT3V0O1xuICAgICAgICAgICAgICAgIG1vdmVEYXRhLnN0YXR1c0NoYW5nZSAgID0gc3RhdHVzQ2hhbmdlO1xuICAgICAgICAgICAgICAgIG1vdmVEYXRhLnN0YWdnZXJJbmRleCAgID0gaTtcbiAgICAgICAgICAgICAgICBtb3ZlRGF0YS5vcGVyYXRpb24gICAgICA9IG9wZXJhdGlvbjtcbiAgICAgICAgICAgICAgICBtb3ZlRGF0YS5jYWxsYmFjayAgICAgICA9IHdpbGxUcmFuc2l0aW9uID8gY2hlY2tQcm9ncmVzcyA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICB0YXJnZXQubW92ZShtb3ZlRGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5hbmltYXRpb24uYW5pbWF0ZVJlc2l6ZUNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudC5zdHlsZVttaXhpdHVwLmZlYXR1cmVzLnRyYW5zaXRpb25Qcm9wXSA9XG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQgJyArIHNlbGYuY29uZmlnLmFuaW1hdGlvbi5kdXJhdGlvbiArICdtcyBlYXNlLCAnICtcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoICcgKyBzZWxmLmNvbmZpZy5hbmltYXRpb24uZHVyYXRpb24gKyAnbXMgZWFzZSAnO1xuXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb24uc3RhcnRIZWlnaHQgIT09IG9wZXJhdGlvbi5uZXdIZWlnaHQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi52aWV3cG9ydERlbHRhWSAhPT0gb3BlcmF0aW9uLnN0YXJ0SGVpZ2h0IC0gb3BlcmF0aW9uLm5ld0hlaWdodFxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudC5zdHlsZS5oZWlnaHQgPSBvcGVyYXRpb24ubmV3SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5zdGFydFdpZHRoICE9PSBvcGVyYXRpb24ubmV3V2lkdGggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi52aWV3cG9ydERlbHRhWCAhPT0gb3BlcmF0aW9uLnN0YXJ0V2lkdGggLSBvcGVyYXRpb24ubmV3V2lkdGhcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRvbS5wYXJlbnQuc3R5bGUud2lkdGggPSBvcGVyYXRpb24ubmV3V2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcGVyYXRpb24ud2lsbENoYW5nZUxheW91dCkge1xuICAgICAgICAgICAgICAgIGgucmVtb3ZlQ2xhc3Moc2VsZi5kb20uY29udGFpbmVyLCBzZWxmLmNvbmZpZy5sYXlvdXQuQ29udGFpbmVyQ2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICBoLmFkZENsYXNzKHNlbGYuZG9tLmNvbnRhaW5lciwgb3BlcmF0aW9uLm5ld0NvbnRhaW5lckNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyTW92ZVRhcmdldHMnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHJldHVybiAge2Jvb2xlYW59XG4gICAgICAgICAqL1xuXG4gICAgICAgIGhhc0VmZmVjdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIEVGRkVDVEFCTEVTID0gW1xuICAgICAgICAgICAgICAgICAgICAnc2NhbGUnLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJywgJ3RyYW5zbGF0ZVonLFxuICAgICAgICAgICAgICAgICAgICAncm90YXRlWCcsICdyb3RhdGVZJywgJ3JvdGF0ZVonXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBlZmZlY3ROYW1lICA9ICcnLFxuICAgICAgICAgICAgICAgIGVmZmVjdCAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICByZXN1bHQgICAgICA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICAgID0gLTEsXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgaWYgKHNlbGYuZWZmZWN0c0luLm9wYWNpdHkgIT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5jYWxsRmlsdGVycygncmVzdWx0SGFzRWZmZWN0JywgdHJ1ZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgZWZmZWN0TmFtZSA9IEVGRkVDVEFCTEVTW2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICBlZmZlY3QgID0gc2VsZi5lZmZlY3RzSW5bZWZmZWN0TmFtZV07XG4gICAgICAgICAgICAgICAgdmFsdWUgICA9ICh0eXBlb2YgZWZmZWN0ICYmIGVmZmVjdC52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpID9cbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0LnZhbHVlIDogZWZmZWN0O1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jYWxsRmlsdGVycygncmVzdWx0SGFzRWZmZWN0JywgcmVzdWx0LCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZXRlcm1pbmVzIGlmIGEgdGFyZ2V0IGVsZW1lbnQgd2lsbCB0cmFuc2l0aW9uIGluXG4gICAgICAgICAqIHNvbWUgZmFzaW9uIGFuZCB0aGVyZWZvcmUgcmVxdWlyZXMgYmluZGluZyBvZlxuICAgICAgICAgKiB0cmFuc2l0aW9uRW5kXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgc3RhdHVzQ2hhbmdlXG4gICAgICAgICAqIEBwYXJhbSAgIHtib29sZWFufSAgICAgICBoYXNFZmZlY3RcbiAgICAgICAgICogQHBhcmFtICAge1N0eWxlRGF0YX0gICAgIHBvc0luXG4gICAgICAgICAqIEBwYXJhbSAgIHtTdHlsZURhdGF9ICAgICBwb3NPdXRcbiAgICAgICAgICogQHJldHVybiAge2Jvb2xlYW59XG4gICAgICAgICAqL1xuXG4gICAgICAgIHdpbGxUcmFuc2l0aW9uOiBmdW5jdGlvbihzdGF0dXNDaGFuZ2UsIGhhc0VmZmVjdCwgcG9zSW4sIHBvc091dCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHJlc3VsdCAgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKCFoLmlzVmlzaWJsZShzZWxmLmRvbS5jb250YWluZXIpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNvbnRhaW5lciBpcyBub3QgdmlzaWJsZSwgdGhlIHRyYW5zaXRpb25FbmRcbiAgICAgICAgICAgICAgICAvLyBldmVudCB3aWxsIG5vdCBvY2N1ciBhbmQgTWl4SXRVcCB3aWxsIGhhbmdcblxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAoc3RhdHVzQ2hhbmdlICE9PSAnbm9uZScgJiYgaGFzRWZmZWN0KSB8fFxuICAgICAgICAgICAgICAgIHBvc0luLnggIT09IHBvc091dC54IHx8XG4gICAgICAgICAgICAgICAgcG9zSW4ueSAhPT0gcG9zT3V0LnlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vIElmIG9wYWNpdHkgYW5kL29yIHRyYW5zbGF0ZSB3aWxsIGNoYW5nZVxuXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5jb25maWcuYW5pbWF0aW9uLmFuaW1hdGVSZXNpemVUYXJnZXRzKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2lkdGgsIGhlaWdodCBvciBtYXJnaW5zIHdpbGwgY2hhbmdlXG5cbiAgICAgICAgICAgICAgICByZXN1bHQgPSAoXG4gICAgICAgICAgICAgICAgICAgIHBvc0luLndpZHRoICE9PSBwb3NPdXQud2lkdGggfHxcbiAgICAgICAgICAgICAgICAgICAgcG9zSW4uaGVpZ2h0ICE9PSBwb3NPdXQuaGVpZ2h0IHx8XG4gICAgICAgICAgICAgICAgICAgIHBvc0luLm1hcmdpblJpZ2h0ICE9PSBwb3NPdXQubWFyZ2luUmlnaHQgfHxcbiAgICAgICAgICAgICAgICAgICAgcG9zSW4ubWFyZ2luVG9wICE9PSBwb3NPdXQubWFyZ2luVG9wXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNhbGxGaWx0ZXJzKCdyZXN1bHRXaWxsVHJhbnNpdGlvbicsIHJlc3VsdCwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDIuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtPcGVyYXRpb259ICAgICBvcGVyYXRpb25cbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGNoZWNrUHJvZ3Jlc3M6IGZ1bmN0aW9uKG9wZXJhdGlvbikge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZWxmLnRhcmdldHNEb25lKys7XG5cbiAgICAgICAgICAgIGlmIChzZWxmLnRhcmdldHNCb3VuZCA9PT0gc2VsZi50YXJnZXRzRG9uZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2xlYW5VcChvcGVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMi4wLjBcbiAgICAgICAgICogQHBhcmFtICAge09wZXJhdGlvbn0gICAgIG9wZXJhdGlvblxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgY2xlYW5VcDogZnVuY3Rpb24ob3BlcmF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgdGFyZ2V0ICAgICAgICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgd2hpdGVzcGFjZUJlZm9yZSAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgd2hpdGVzcGFjZUFmdGVyICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgbmV4dEluUXVldWUgICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgICAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVDbGVhblVwJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgc2VsZi50YXJnZXRzTW92ZWQgICAgICAgICAgPVxuICAgICAgICAgICAgICAgIHNlbGYudGFyZ2V0c0ltbW92YWJsZSAgPVxuICAgICAgICAgICAgICAgIHNlbGYudGFyZ2V0c0JvdW5kICAgICAgPVxuICAgICAgICAgICAgICAgIHNlbGYudGFyZ2V0c0RvbmUgICAgICAgPSAwO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyB0YXJnZXQgPSBvcGVyYXRpb24uc2hvd1tpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsZWFuVXAoKTtcblxuICAgICAgICAgICAgICAgIHRhcmdldC5zaG93KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IG9wZXJhdGlvbi50b0hpZGVbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIHRhcmdldC5jbGVhblVwKCk7XG5cbiAgICAgICAgICAgICAgICB0YXJnZXQuaGlkZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3BlcmF0aW9uLndpbGxTb3J0KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wcmludFNvcnQoZmFsc2UsIG9wZXJhdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBhbnkgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIHBhcmVudCBjb250YWluZXJcblxuICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50LnN0eWxlW21peGl0dXAuZmVhdHVyZXMudHJhbnNpdGlvblByb3BdICAgICAgICAgICAgID1cbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5wYXJlbnQuc3R5bGUuaGVpZ2h0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9XG4gICAgICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50LnN0eWxlLndpZHRoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPVxuICAgICAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudC5zdHlsZS5vdmVyZmxvdyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID1cbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5wYXJlbnQuc3R5bGVbbWl4aXR1cC5mZWF0dXJlcy5wZXJzcGVjdGl2ZVByb3BdICAgICAgICA9XG4gICAgICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50LnN0eWxlW21peGl0dXAuZmVhdHVyZXMucGVyc3BlY3RpdmVPcmlnaW5Qcm9wXSAgPSAnJztcblxuICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi53aWxsQ2hhbmdlTGF5b3V0KSB7XG4gICAgICAgICAgICAgICAgaC5yZW1vdmVDbGFzcyhzZWxmLmRvbS5jb250YWluZXIsIG9wZXJhdGlvbi5zdGFydENvbnRhaW5lckNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgaC5hZGRDbGFzcyhzZWxmLmRvbS5jb250YWluZXIsIG9wZXJhdGlvbi5uZXdDb250YWluZXJDbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3BlcmF0aW9uLnRvUmVtb3ZlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IHNlbGYudGFyZ2V0c1tpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcGVyYXRpb24udG9SZW1vdmUuaW5kZXhPZih0YXJnZXQpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAod2hpdGVzcGFjZUJlZm9yZSA9IHRhcmdldC5kb20uZWwucHJldmlvdXNTaWJsaW5nKSAmJiB3aGl0ZXNwYWNlQmVmb3JlLm5vZGVOYW1lID09PSAnI3RleHQnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHdoaXRlc3BhY2VBZnRlciA9IHRhcmdldC5kb20uZWwubmV4dFNpYmxpbmcpICYmIHdoaXRlc3BhY2VBZnRlci5ub2RlTmFtZSA9PT0gJyN0ZXh0J1xuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaC5yZW1vdmVXaGl0ZXNwYWNlKHdoaXRlc3BhY2VCZWZvcmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wZXJhdGlvbi53aWxsU29ydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5COiBTb3J0aW5nIHdpbGwgcmVtb3ZlIHRhcmdldHMgYXMgYSBiaS1wcm9kdWN0IG9mIGBwcmludFNvcnQoKWBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudC5yZW1vdmVDaGlsZCh0YXJnZXQuZG9tLmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50YXJnZXRzLnNwbGljZShpLCAxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmlzSW5Eb20gPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU2luY2UgdGFyZ2V0cyBoYXZlIGJlZW4gcmVtb3ZlZCwgdGhlIG9yaWdpbmFsIG9yZGVyIG11c3QgYmUgdXBkYXRlZFxuXG4gICAgICAgICAgICAgICAgc2VsZi5vcmlnT3JkZXIgPSBzZWxmLnRhcmdldHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcGVyYXRpb24ud2lsbFNvcnQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnRhcmdldHMgPSBvcGVyYXRpb24ubmV3T3JkZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuc3RhdGUgPSBvcGVyYXRpb24ubmV3U3RhdGU7XG4gICAgICAgICAgICBzZWxmLmxhc3RPcGVyYXRpb24gPSBvcGVyYXRpb247XG5cbiAgICAgICAgICAgIHNlbGYuZG9tLnRhcmdldHMgPSBzZWxmLnN0YXRlLnRhcmdldHM7XG5cbiAgICAgICAgICAgIC8vIG1peEVuZFxuXG4gICAgICAgICAgICBtaXhpdHVwLmV2ZW50cy5maXJlKCdtaXhFbmQnLCBzZWxmLmRvbS5jb250YWluZXIsIHtcbiAgICAgICAgICAgICAgICBzdGF0ZTogc2VsZi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTogc2VsZlxuICAgICAgICAgICAgfSwgc2VsZi5kb20uZG9jdW1lbnQpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNlbGYuY29uZmlnLmNhbGxiYWNrcy5vbk1peEVuZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLmNhbGxiYWNrcy5vbk1peEVuZC5jYWxsKHNlbGYuZG9tLmNvbnRhaW5lciwgc2VsZi5zdGF0ZSwgc2VsZik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcGVyYXRpb24uaGFzRmFpbGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gbWl4RmFpbFxuXG4gICAgICAgICAgICAgICAgbWl4aXR1cC5ldmVudHMuZmlyZSgnbWl4RmFpbCcsIHNlbGYuZG9tLmNvbnRhaW5lciwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogc2VsZi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IHNlbGZcbiAgICAgICAgICAgICAgICB9LCBzZWxmLmRvbS5kb2N1bWVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNlbGYuY29uZmlnLmNhbGxiYWNrcy5vbk1peEZhaWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcuY2FsbGJhY2tzLm9uTWl4RmFpbC5jYWxsKHNlbGYuZG9tLmNvbnRhaW5lciwgc2VsZi5zdGF0ZSwgc2VsZik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaC5hZGRDbGFzcyhzZWxmLmRvbS5jb250YWluZXIsIGguZ2V0Q2xhc3NuYW1lKHNlbGYuY29uZmlnLmNsYXNzTmFtZXMsICdjb250YWluZXInLCBzZWxmLmNvbmZpZy5jbGFzc05hbWVzLm1vZGlmaWVyRmFpbGVkKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVzZXItZGVmaW5lZCBjYWxsYmFjayBmdW5jdGlvblxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNlbGYudXNlckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgc2VsZi51c2VyQ2FsbGJhY2suY2FsbChzZWxmLmRvbS5jb250YWluZXIsIHNlbGYuc3RhdGUsIHNlbGYpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNlbGYudXNlckRlZmVycmVkLnJlc29sdmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnVzZXJEZWZlcnJlZC5yZXNvbHZlKHNlbGYuc3RhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLnVzZXJDYWxsYmFjayAgPSBudWxsO1xuICAgICAgICAgICAgc2VsZi51c2VyRGVmZXJyZWQgID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYubGFzdENsaWNrZWQgICA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLmlzVG9nZ2xpbmcgICAgPSBmYWxzZTtcbiAgICAgICAgICAgIHNlbGYuaXNCdXN5ICAgICAgICA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5xdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVSZWFkUXVldWVDbGVhblVwJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICAgIG5leHRJblF1ZXVlID0gc2VsZi5xdWV1ZS5zaGlmdCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIG5vbi1wdWJsaWMgQVBJIHByb3BlcnRpZXMgc3RvcmVkIGluIHF1ZXVlXG5cbiAgICAgICAgICAgICAgICBzZWxmLnVzZXJEZWZlcnJlZCAgPSBuZXh0SW5RdWV1ZS5kZWZlcnJlZDtcbiAgICAgICAgICAgICAgICBzZWxmLmlzVG9nZ2xpbmcgICAgPSBuZXh0SW5RdWV1ZS5pc1RvZ2dsaW5nO1xuICAgICAgICAgICAgICAgIHNlbGYubGFzdENsaWNrZWQgICA9IG5leHRJblF1ZXVlLnRyaWdnZXJFbGVtZW50O1xuXG4gICAgICAgICAgICAgICAgaWYgKG5leHRJblF1ZXVlLmluc3RydWN0aW9uLmNvbW1hbmQgaW5zdGFuY2VvZiBtaXhpdHVwLkNvbW1hbmRNdWx0aW1peCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm11bHRpbWl4LmFwcGx5KHNlbGYsIG5leHRJblF1ZXVlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGF0YXNldC5hcHBseShzZWxmLCBuZXh0SW5RdWV1ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyQ2xlYW5VcCcsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAyLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7QXJyYXk8Kj59ICBhcmdzXG4gICAgICAgICAqIEByZXR1cm4gIHttaXhpdHVwLlVzZXJJbnN0cnVjdGlvbn1cbiAgICAgICAgICovXG5cbiAgICAgICAgcGFyc2VNdWx0aW1peEFyZ3M6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24gPSBuZXcgbWl4aXR1cC5Vc2VySW5zdHJ1Y3Rpb24oKSxcbiAgICAgICAgICAgICAgICBhcmcgICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uYW5pbWF0ZSA9IHNlbGYuY29uZmlnLmFuaW1hdGlvbi5lbmFibGU7XG4gICAgICAgICAgICBpbnN0cnVjdGlvbi5jb21tYW5kID0gbmV3IG1peGl0dXAuQ29tbWFuZE11bHRpbWl4KCk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnID0gYXJnc1tpXTtcblxuICAgICAgICAgICAgICAgIGlmIChhcmcgPT09IG51bGwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGguZXh0ZW5kKGluc3RydWN0aW9uLmNvbW1hbmQsIGFyZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uYW5pbWF0ZSA9IGFyZztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY2FsbGJhY2sgPSBhcmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDb2VyY2UgYXJiaXRyYXJ5IGNvbW1hbmQgYXJndW1lbnRzIGludG8gdHlwZWQgY29tbWFuZCBvYmplY3RzXG5cbiAgICAgICAgICAgIGlmIChpbnN0cnVjdGlvbi5jb21tYW5kLmluc2VydCAmJiAhKGluc3RydWN0aW9uLmNvbW1hbmQuaW5zZXJ0IGluc3RhbmNlb2YgbWl4aXR1cC5Db21tYW5kSW5zZXJ0KSkge1xuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmNvbW1hbmQuaW5zZXJ0ID0gc2VsZi5wYXJzZUluc2VydEFyZ3MoW2luc3RydWN0aW9uLmNvbW1hbmQuaW5zZXJ0XSkuY29tbWFuZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluc3RydWN0aW9uLmNvbW1hbmQucmVtb3ZlICYmICEoaW5zdHJ1Y3Rpb24uY29tbWFuZC5yZW1vdmUgaW5zdGFuY2VvZiBtaXhpdHVwLkNvbW1hbmRSZW1vdmUpKSB7XG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY29tbWFuZC5yZW1vdmUgPSBzZWxmLnBhcnNlUmVtb3ZlQXJncyhbaW5zdHJ1Y3Rpb24uY29tbWFuZC5yZW1vdmVdKS5jb21tYW5kO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5zdHJ1Y3Rpb24uY29tbWFuZC5maWx0ZXIgJiYgIShpbnN0cnVjdGlvbi5jb21tYW5kLmZpbHRlciBpbnN0YW5jZW9mIG1peGl0dXAuQ29tbWFuZEZpbHRlcikpIHtcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5jb21tYW5kLmZpbHRlciA9IHNlbGYucGFyc2VGaWx0ZXJBcmdzKFtpbnN0cnVjdGlvbi5jb21tYW5kLmZpbHRlcl0pLmNvbW1hbmQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbnN0cnVjdGlvbi5jb21tYW5kLnNvcnQgJiYgIShpbnN0cnVjdGlvbi5jb21tYW5kLnNvcnQgaW5zdGFuY2VvZiBtaXhpdHVwLkNvbW1hbmRTb3J0KSkge1xuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmNvbW1hbmQuc29ydCA9IHNlbGYucGFyc2VTb3J0QXJncyhbaW5zdHJ1Y3Rpb24uY29tbWFuZC5zb3J0XSkuY29tbWFuZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluc3RydWN0aW9uLmNvbW1hbmQuY2hhbmdlTGF5b3V0ICYmICEoaW5zdHJ1Y3Rpb24uY29tbWFuZC5jaGFuZ2VMYXlvdXQgaW5zdGFuY2VvZiBtaXhpdHVwLkNvbW1hbmRDaGFuZ2VMYXlvdXQpKSB7XG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY29tbWFuZC5jaGFuZ2VMYXlvdXQgPSBzZWxmLnBhcnNlQ2hhbmdlTGF5b3V0QXJncyhbaW5zdHJ1Y3Rpb24uY29tbWFuZC5jaGFuZ2VMYXlvdXRdKS5jb21tYW5kO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnN0cnVjdGlvbiA9IHNlbGYuY2FsbEZpbHRlcnMoJ2luc3RydWN0aW9uUGFyc2VNdWx0aW1peEFyZ3MnLCBpbnN0cnVjdGlvbiwgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaC5mcmVlemUoaW5zdHJ1Y3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gaW5zdHJ1Y3Rpb247XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAyLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7QXJyYXk8Kj59ICBhcmdzXG4gICAgICAgICAqIEByZXR1cm4gIHttaXhpdHVwLlVzZXJJbnN0cnVjdGlvbn1cbiAgICAgICAgICovXG5cbiAgICAgICAgcGFyc2VGaWx0ZXJBcmdzOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uID0gbmV3IG1peGl0dXAuVXNlckluc3RydWN0aW9uKCksXG4gICAgICAgICAgICAgICAgYXJnICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGkgICAgICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIGluc3RydWN0aW9uLmFuaW1hdGUgPSBzZWxmLmNvbmZpZy5hbmltYXRpb24uZW5hYmxlO1xuICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY29tbWFuZCA9IG5ldyBtaXhpdHVwLkNvbW1hbmRGaWx0ZXIoKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcmcgPSBhcmdzW2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNlbGVjdG9yXG5cbiAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY29tbWFuZC5zZWxlY3RvciA9IGFyZztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFyZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5jb21tYW5kLmNvbGxlY3Rpb24gPSBbXTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGguaXNFbGVtZW50KGFyZywgc2VsZi5kb20uZG9jdW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmdsZSBlbGVtZW50XG5cbiAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY29tbWFuZC5jb2xsZWN0aW9uID0gW2FyZ107XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYXJnLmxlbmd0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTXVsdGlwbGUgZWxlbWVudHMgaW4gYXJyYXksIE5vZGVMaXN0IG9yIGpRdWVyeSBjb2xsZWN0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY29tbWFuZC5jb2xsZWN0aW9uID0gaC5hcnJheUZyb21MaXN0KGFyZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyBGaWx0ZXIgY29tbWFuZFxuXG4gICAgICAgICAgICAgICAgICAgIGguZXh0ZW5kKGluc3RydWN0aW9uLmNvbW1hbmQsIGFyZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uYW5pbWF0ZSA9IGFyZztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY2FsbGJhY2sgPSBhcmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5zdHJ1Y3Rpb24uY29tbWFuZC5zZWxlY3RvciAmJiBpbnN0cnVjdGlvbi5jb21tYW5kLmNvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWl4aXR1cC5tZXNzYWdlcy5lcnJvckZpbHRlckludmFsaWRBcmd1bWVudHMoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluc3RydWN0aW9uID0gc2VsZi5jYWxsRmlsdGVycygnaW5zdHJ1Y3Rpb25QYXJzZUZpbHRlckFyZ3MnLCBpbnN0cnVjdGlvbiwgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaC5mcmVlemUoaW5zdHJ1Y3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gaW5zdHJ1Y3Rpb247XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFyc2VTb3J0QXJnczogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbiA9IG5ldyBtaXhpdHVwLlVzZXJJbnN0cnVjdGlvbigpLFxuICAgICAgICAgICAgICAgIGFyZyAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBzb3J0U3RyaW5nICA9ICcnLFxuICAgICAgICAgICAgICAgIGkgICAgICAgICAgID0gLTE7XG5cbiAgICAgICAgICAgIGluc3RydWN0aW9uLmFuaW1hdGUgPSBzZWxmLmNvbmZpZy5hbmltYXRpb24uZW5hYmxlO1xuICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY29tbWFuZCA9IG5ldyBtaXhpdHVwLkNvbW1hbmRTb3J0KCk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnID0gYXJnc1tpXTtcblxuICAgICAgICAgICAgICAgIGlmIChhcmcgPT09IG51bGwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgYXJnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTb3J0IHN0cmluZ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0U3RyaW5nID0gYXJnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFycmF5IG9mIGVsZW1lbnQgcmVmZXJlbmNlc1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJnLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmNvbW1hbmQuY29sbGVjdGlvbiA9IGguYXJyYXlGcm9tTGlzdChhcmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5hbmltYXRlID0gYXJnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY2FsbGJhY2sgPSBhcmc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNvcnRTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5jb21tYW5kID0gc2VsZi5wYXJzZVNvcnRTdHJpbmcoc29ydFN0cmluZywgaW5zdHJ1Y3Rpb24uY29tbWFuZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluc3RydWN0aW9uID0gc2VsZi5jYWxsRmlsdGVycygnaW5zdHJ1Y3Rpb25QYXJzZVNvcnRBcmdzJywgaW5zdHJ1Y3Rpb24sIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGguZnJlZXplKGluc3RydWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIGluc3RydWN0aW9uO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMi4wLjBcbiAgICAgICAgICogQHBhcmFtICAge0FycmF5PCo+fSAgYXJnc1xuICAgICAgICAgKiBAcmV0dXJuICB7bWl4aXR1cC5Vc2VySW5zdHJ1Y3Rpb259XG4gICAgICAgICAqL1xuXG4gICAgICAgIHBhcnNlSW5zZXJ0QXJnczogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbiA9IG5ldyBtaXhpdHVwLlVzZXJJbnN0cnVjdGlvbigpLFxuICAgICAgICAgICAgICAgIGFyZyAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBpbnN0cnVjdGlvbi5hbmltYXRlID0gc2VsZi5jb25maWcuYW5pbWF0aW9uLmVuYWJsZTtcbiAgICAgICAgICAgIGluc3RydWN0aW9uLmNvbW1hbmQgPSBuZXcgbWl4aXR1cC5Db21tYW5kSW5zZXJ0KCk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnID0gYXJnc1tpXTtcblxuICAgICAgICAgICAgICAgIGlmIChhcmcgPT09IG51bGwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluc2VydCBpbmRleFxuXG4gICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmNvbW1hbmQuaW5kZXggPSBhcmc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJyAmJiBbJ2JlZm9yZScsICdhZnRlciddLmluZGV4T2YoYXJnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICdiZWZvcmUnLydhZnRlcidcblxuICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5jb21tYW5kLnBvc2l0aW9uID0gYXJnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWFya3VwXG5cbiAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY29tbWFuZC5jb2xsZWN0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGguYXJyYXlGcm9tTGlzdChoLmNyZWF0ZUVsZW1lbnQoYXJnKS5jaGlsZE5vZGVzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGguaXNFbGVtZW50KGFyZywgc2VsZi5kb20uZG9jdW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmdsZSBlbGVtZW50XG5cbiAgICAgICAgICAgICAgICAgICAgIWluc3RydWN0aW9uLmNvbW1hbmQuY29sbGVjdGlvbi5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgKGluc3RydWN0aW9uLmNvbW1hbmQuY29sbGVjdGlvbiA9IFthcmddKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAoaW5zdHJ1Y3Rpb24uY29tbWFuZC5zaWJsaW5nID0gYXJnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTXVsdGlwbGUgZWxlbWVudHMgaW4gYXJyYXkgb3IgalF1ZXJ5IGNvbGxlY3Rpb25cblxuICAgICAgICAgICAgICAgICAgICAhaW5zdHJ1Y3Rpb24uY29tbWFuZC5jb2xsZWN0aW9uLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAoaW5zdHJ1Y3Rpb24uY29tbWFuZC5jb2xsZWN0aW9uID0gYXJnKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5jb21tYW5kLnNpYmxpbmcgPSBhcmdbMF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcuY2hpbGROb2RlcyAmJiBhcmcuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRG9jdW1lbnQgZnJhZ21lbnRcblxuICAgICAgICAgICAgICAgICAgICAhaW5zdHJ1Y3Rpb24uY29tbWFuZC5jb2xsZWN0aW9uLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5jb21tYW5kLmNvbGxlY3Rpb24gPSBoLmFycmF5RnJvbUxpc3QoYXJnLmNoaWxkTm9kZXMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmNvbW1hbmQuc2libGluZyA9IGFyZy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5zZXJ0IGNvbW1hbmRcblxuICAgICAgICAgICAgICAgICAgICBoLmV4dGVuZChpbnN0cnVjdGlvbi5jb21tYW5kLCBhcmcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmFuaW1hdGUgPSBhcmc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmNhbGxiYWNrID0gYXJnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluc3RydWN0aW9uLmNvbW1hbmQuaW5kZXggJiYgaW5zdHJ1Y3Rpb24uY29tbWFuZC5zaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1peGl0dXAubWVzc2FnZXMuZXJyb3JJbnNlcnRJbnZhbGlkQXJndW1lbnRzKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWluc3RydWN0aW9uLmNvbW1hbmQuY29sbGVjdGlvbi5sZW5ndGggJiYgc2VsZi5jb25maWcuZGVidWcuc2hvd1dhcm5pbmdzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKG1peGl0dXAubWVzc2FnZXMud2FybmluZ0luc2VydE5vRWxlbWVudHMoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluc3RydWN0aW9uID0gc2VsZi5jYWxsRmlsdGVycygnaW5zdHJ1Y3Rpb25QYXJzZUluc2VydEFyZ3MnLCBpbnN0cnVjdGlvbiwgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaC5mcmVlemUoaW5zdHJ1Y3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gaW5zdHJ1Y3Rpb247XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7QXJyYXk8Kj59ICBhcmdzXG4gICAgICAgICAqIEByZXR1cm4gIHttaXhpdHVwLlVzZXJJbnN0cnVjdGlvbn1cbiAgICAgICAgICovXG5cbiAgICAgICAgcGFyc2VSZW1vdmVBcmdzOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uID0gbmV3IG1peGl0dXAuVXNlckluc3RydWN0aW9uKCksXG4gICAgICAgICAgICAgICAgdGFyZ2V0ICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGFyZyAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBpbnN0cnVjdGlvbi5hbmltYXRlID0gc2VsZi5jb25maWcuYW5pbWF0aW9uLmVuYWJsZTtcbiAgICAgICAgICAgIGluc3RydWN0aW9uLmNvbW1hbmQgPSBuZXcgbWl4aXR1cC5Db21tYW5kUmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnID0gYXJnc1tpXTtcblxuICAgICAgICAgICAgICAgIGlmIChhcmcgPT09IG51bGwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgYXJnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi50YXJnZXRzW2FyZ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5jb21tYW5kLnRhcmdldHNbMF0gPSBzZWxmLnRhcmdldHNbYXJnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5jb21tYW5kLmNvbGxlY3Rpb24gPSBoLmFycmF5RnJvbUxpc3Qoc2VsZi5kb20ucGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYXJnKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZyAmJiBhcmcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uY29tbWFuZC5jb2xsZWN0aW9uID0gYXJnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChoLmlzRWxlbWVudChhcmcsIHNlbGYuZG9tLmRvY3VtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmNvbW1hbmQuY29sbGVjdGlvbiA9IFthcmddO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgY29tbWFuZFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaC5leHRlbmQoaW5zdHJ1Y3Rpb24uY29tbWFuZCwgYXJnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uYW5pbWF0ZSA9IGFyZztcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmNhbGxiYWNrID0gYXJnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbnN0cnVjdGlvbi5jb21tYW5kLmNvbGxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgdGFyZ2V0ID0gc2VsZi50YXJnZXRzW2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RydWN0aW9uLmNvbW1hbmQuY29sbGVjdGlvbi5pbmRleE9mKHRhcmdldC5kb20uZWwpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmNvbW1hbmQudGFyZ2V0cy5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaW5zdHJ1Y3Rpb24uY29tbWFuZC50YXJnZXRzLmxlbmd0aCAmJiBzZWxmLmNvbmZpZy5kZWJ1Zy5zaG93V2FybmluZ3MpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4obWl4aXR1cC5tZXNzYWdlcy53YXJuaW5nUmVtb3ZlTm9FbGVtZW50cygpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaC5mcmVlemUoaW5zdHJ1Y3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gaW5zdHJ1Y3Rpb247XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7QXJyYXk8Kj59ICBhcmdzXG4gICAgICAgICAqIEByZXR1cm4gIHttaXhpdHVwLlVzZXJJbnN0cnVjdGlvbn1cbiAgICAgICAgICovXG5cbiAgICAgICAgcGFyc2VEYXRhc2V0QXJnczogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbiA9IG5ldyBtaXhpdHVwLlVzZXJJbnN0cnVjdGlvbigpLFxuICAgICAgICAgICAgICAgIGFyZyAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBpbnN0cnVjdGlvbi5hbmltYXRlID0gc2VsZi5jb25maWcuYW5pbWF0aW9uLmVuYWJsZTtcbiAgICAgICAgICAgIGluc3RydWN0aW9uLmNvbW1hbmQgPSBuZXcgbWl4aXR1cC5Db21tYW5kRGF0YXNldCgpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFyZyA9IGFyZ3NbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAoYXJnID09PSBudWxsKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIGFyZykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSB8fCB0eXBlb2YgYXJnLmxlbmd0aCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5jb21tYW5kLmRhdGFzZXQgPSBhcmc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoYW5nZSBsYXlvdXQgY29tbWFuZFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaC5leHRlbmQoaW5zdHJ1Y3Rpb24uY29tbWFuZCwgYXJnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uYW5pbWF0ZSA9IGFyZztcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmNhbGxiYWNrID0gYXJnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGguZnJlZXplKGluc3RydWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIGluc3RydWN0aW9uO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAge0FycmF5PCo+fSAgYXJnc1xuICAgICAgICAgKiBAcmV0dXJuICB7bWl4aXR1cC5Vc2VySW5zdHJ1Y3Rpb259XG4gICAgICAgICAqL1xuXG4gICAgICAgIHBhcnNlQ2hhbmdlTGF5b3V0QXJnczogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbiA9IG5ldyBtaXhpdHVwLlVzZXJJbnN0cnVjdGlvbigpLFxuICAgICAgICAgICAgICAgIGFyZyAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBpbnN0cnVjdGlvbi5hbmltYXRlID0gc2VsZi5jb25maWcuYW5pbWF0aW9uLmVuYWJsZTtcbiAgICAgICAgICAgIGluc3RydWN0aW9uLmNvbW1hbmQgPSBuZXcgbWl4aXR1cC5Db21tYW5kQ2hhbmdlTGF5b3V0KCk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnID0gYXJnc1tpXTtcblxuICAgICAgICAgICAgICAgIGlmIChhcmcgPT09IG51bGwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgYXJnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbi5jb21tYW5kLmNvbnRhaW5lckNsYXNzTmFtZSA9IGFyZztcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2UgbGF5b3V0IGNvbW1hbmRcblxuICAgICAgICAgICAgICAgICAgICAgICAgaC5leHRlbmQoaW5zdHJ1Y3Rpb24uY29tbWFuZCwgYXJnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24uYW5pbWF0ZSA9IGFyZztcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmNhbGxiYWNrID0gYXJnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGguZnJlZXplKGluc3RydWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIGluc3RydWN0aW9uO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7bWl4aXR1cC5RdWV1ZUl0ZW19ICAgICAgICAgcXVldWVJdGVtXG4gICAgICAgICAqIEByZXR1cm4gICAgICB7UHJvbWlzZS48bWl4aXR1cC5TdGF0ZT59XG4gICAgICAgICAqL1xuXG4gICAgICAgIHF1ZXVlTWl4OiBmdW5jdGlvbihxdWV1ZUl0ZW0pIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGRlZmVycmVkICAgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgdG9nZ2xlU2VsZWN0b3IgID0gJyc7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZVF1ZXVlTWl4JywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgZGVmZXJyZWQgPSBoLmRlZmVyKG1peGl0dXAubGlicmFyaWVzKTtcblxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFuaW1hdGlvbi5xdWV1ZSAmJiBzZWxmLnF1ZXVlLmxlbmd0aCA8IHNlbGYuY29uZmlnLmFuaW1hdGlvbi5xdWV1ZUxpbWl0KSB7XG4gICAgICAgICAgICAgICAgcXVldWVJdGVtLmRlZmVycmVkID0gZGVmZXJyZWQ7XG5cbiAgICAgICAgICAgICAgICBzZWxmLnF1ZXVlLnB1c2gocXVldWVJdGVtKTtcblxuICAgICAgICAgICAgICAgIC8vIEtlZXAgY29udHJvbHMgaW4gc3luYyB3aXRoIHVzZXIgaW50ZXJhY3Rpb25zLiBNaXhlciB3aWxsIGNhdGNoIHVwIGFzIGl0IGRyYWlucyB0aGUgcXVldWUuXG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuY29udHJvbHMuZW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmlzVG9nZ2xpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYnVpbGRUb2dnbGVBcnJheShxdWV1ZUl0ZW0uaW5zdHJ1Y3Rpb24uY29tbWFuZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVNlbGVjdG9yID0gc2VsZi5nZXRUb2dnbGVTZWxlY3RvcigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZUNvbnRyb2xzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHRvZ2dsZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZUNvbnRyb2xzKHF1ZXVlSXRlbS5pbnN0cnVjdGlvbi5jb21tYW5kKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmRlYnVnLnNob3dXYXJuaW5ncykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4obWl4aXR1cC5tZXNzYWdlcy53YXJuaW5nTXVsdGltaXhJbnN0YW5jZVF1ZXVlRnVsbCgpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHNlbGYuc3RhdGUpO1xuXG4gICAgICAgICAgICAgICAgbWl4aXR1cC5ldmVudHMuZmlyZSgnbWl4QnVzeScsIHNlbGYuZG9tLmNvbnRhaW5lciwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogc2VsZi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IHNlbGZcbiAgICAgICAgICAgICAgICB9LCBzZWxmLmRvbS5kb2N1bWVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNlbGYuY29uZmlnLmNhbGxiYWNrcy5vbk1peEJ1c3kgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcuY2FsbGJhY2tzLm9uTWl4QnVzeS5jYWxsKHNlbGYuZG9tLmNvbnRhaW5lciwgc2VsZi5zdGF0ZSwgc2VsZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jYWxsRmlsdGVycygncHJvbWlzZVF1ZXVlTWl4JywgZGVmZXJyZWQucHJvbWlzZSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtBcnJheS48b2JqZWN0Pn0gICAgbmV3RGF0YXNldFxuICAgICAgICAgKiBAcmV0dXJuICB7T3BlcmF0aW9ufVxuICAgICAgICAgKi9cblxuICAgICAgICBnZXREYXRhT3BlcmF0aW9uOiBmdW5jdGlvbihuZXdEYXRhc2V0KSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uICAgICAgICAgICA9IG5ldyBtaXhpdHVwLk9wZXJhdGlvbigpLFxuICAgICAgICAgICAgICAgIHN0YXJ0RGF0YXNldCAgICAgICAgPSBbXTtcblxuICAgICAgICAgICAgb3BlcmF0aW9uID0gc2VsZi5jYWxsRmlsdGVycygnb3BlcmF0aW9uVW5tYXBwZWRHZXREYXRhT3BlcmF0aW9uJywgb3BlcmF0aW9uLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5kb20udGFyZ2V0cy5sZW5ndGggJiYgIShzdGFydERhdGFzZXQgPSAoc2VsZi5zdGF0ZS5hY3RpdmVEYXRhc2V0IHx8IFtdKSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1peGl0dXAubWVzc2FnZXMuZXJyb3JEYXRhc2V0Tm90U2V0KCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvcGVyYXRpb24uaWQgICAgICAgICAgICA9IGgucmFuZG9tSGV4KCk7XG4gICAgICAgICAgICBvcGVyYXRpb24uc3RhcnRTdGF0ZSAgICA9IHNlbGYuc3RhdGU7XG4gICAgICAgICAgICBvcGVyYXRpb24uc3RhcnREYXRhc2V0ICA9IHN0YXJ0RGF0YXNldDtcbiAgICAgICAgICAgIG9wZXJhdGlvbi5uZXdEYXRhc2V0ICAgID0gbmV3RGF0YXNldC5zbGljZSgpO1xuXG4gICAgICAgICAgICBzZWxmLmRpZmZEYXRhc2V0cyhvcGVyYXRpb24pO1xuXG4gICAgICAgICAgICBvcGVyYXRpb24uc3RhcnRPcmRlciA9IHNlbGYudGFyZ2V0cztcbiAgICAgICAgICAgIG9wZXJhdGlvbi5uZXdPcmRlciA9IG9wZXJhdGlvbi5zaG93O1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuYW5pbWF0aW9uLmVuYWJsZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZ2V0U3RhcnRNaXhEYXRhKG9wZXJhdGlvbik7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXRJbnRlcihvcGVyYXRpb24pO1xuXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLmRvY1N0YXRlID0gaC5nZXREb2N1bWVudFN0YXRlKHNlbGYuZG9tLmRvY3VtZW50KTtcblxuICAgICAgICAgICAgICAgIHNlbGYuZ2V0SW50ZXJNaXhEYXRhKG9wZXJhdGlvbik7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXRGaW5hbChvcGVyYXRpb24pO1xuICAgICAgICAgICAgICAgIHNlbGYuZ2V0RmluYWxNaXhEYXRhKG9wZXJhdGlvbik7XG5cbiAgICAgICAgICAgICAgICBzZWxmLnBhcnNlRWZmZWN0cygpO1xuXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLmhhc0VmZmVjdCA9IHNlbGYuaGFzRWZmZWN0KCk7XG5cbiAgICAgICAgICAgICAgICBzZWxmLmdldFR3ZWVuRGF0YShvcGVyYXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLnRhcmdldHMgPSBvcGVyYXRpb24uc2hvdy5zbGljZSgpO1xuXG4gICAgICAgICAgICBvcGVyYXRpb24ubmV3U3RhdGUgPSBzZWxmLmJ1aWxkU3RhdGUob3BlcmF0aW9uKTtcblxuICAgICAgICAgICAgLy8gTkI6IFRhcmdldHMgdG8gYmUgcmVtb3ZlZCBtdXN0IGJlIGluY2x1ZGVkIGluIGBzZWxmLnRhcmdldHNgIGZvciByZW1vdmFsIGR1cmluZyBjbGVhbiB1cCxcbiAgICAgICAgICAgIC8vIGJ1dCBhcmUgYWRkZWQgYWZ0ZXIgc3RhdGUgaXMgYnVpbHQgc28gdGhhdCBzdGF0ZSBpcyBhY2N1cmF0ZVxuXG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShzZWxmLnRhcmdldHMsIG9wZXJhdGlvbi50b1JlbW92ZSk7XG5cbiAgICAgICAgICAgIG9wZXJhdGlvbiA9IHNlbGYuY2FsbEZpbHRlcnMoJ29wZXJhdGlvbk1hcHBlZEdldERhdGFPcGVyYXRpb24nLCBvcGVyYXRpb24sIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHJldHVybiBvcGVyYXRpb247XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7bWl4aXR1cC5PcGVyYXRpb259IG9wZXJhdGlvblxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgZGlmZkRhdGFzZXRzOiBmdW5jdGlvbihvcGVyYXRpb24pIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBwZXJzaXN0YW50U3RhcnRJZHMgID0gW10sXG4gICAgICAgICAgICAgICAgcGVyc2lzdGFudE5ld0lkcyAgICA9IFtdLFxuICAgICAgICAgICAgICAgIGluc2VydGVkVGFyZ2V0cyAgICAgPSBbXSxcbiAgICAgICAgICAgICAgICBkYXRhICAgICAgICAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICB0YXJnZXQgICAgICAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBlbCAgICAgICAgICAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBmcmFnICAgICAgICAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBuZXh0RWwgICAgICAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICB1aWRzICAgICAgICAgICAgICAgID0ge30sXG4gICAgICAgICAgICAgICAgaWQgICAgICAgICAgICAgICAgICA9ICcnLFxuICAgICAgICAgICAgICAgIGkgICAgICAgICAgICAgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlRGlmZkRhdGFzZXRzJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgZGF0YSA9IG9wZXJhdGlvbi5uZXdEYXRhc2V0W2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChpZCA9IGRhdGFbc2VsZi5jb25maWcuZGF0YS51aWRLZXldKSA9PT0gJ3VuZGVmaW5lZCcgfHwgaWQudG9TdHJpbmcoKS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobWl4aXR1cC5tZXNzYWdlcy5lcnJvckRhdGFzZXRJbnZhbGlkVWlkS2V5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpZEtleTogc2VsZi5jb25maWcuZGF0YS51aWRLZXlcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghdWlkc1tpZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdWlkc1tpZF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtaXhpdHVwLm1lc3NhZ2VzLmVycm9yRGF0YXNldER1cGxpY2F0ZVVpZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoKHRhcmdldCA9IHNlbGYuY2FjaGVbaWRdKSBpbnN0YW5jZW9mIG1peGl0dXAuVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFscmVhZHkgaW4gY2FjaGVcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuZGF0YS5kaXJ0eUNoZWNrICYmICFoLmRlZXBFcXVhbHMoZGF0YSwgdGFyZ2V0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgZGV0ZWN0ZWRcblxuICAgICAgICAgICAgICAgICAgICAgICAgZWwgPSB0YXJnZXQucmVuZGVyKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuZGF0YSA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbCAhPT0gdGFyZ2V0LmRvbS5lbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0YXJnZXQgZWxlbWVudCByZWZlcmVuY2VcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuaXNJbkRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQudW5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kb20ucGFyZW50LnJlcGxhY2VDaGlsZChlbCwgdGFyZ2V0LmRvbS5lbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQuaXNTaG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5kb20uZWwgPSBlbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuaXNJbkRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGVsID0gdGFyZ2V0LmRvbS5lbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBOZXcgdGFyZ2V0XG5cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gbmV3IG1peGl0dXAuVGFyZ2V0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmluaXQobnVsbCwgc2VsZiwgZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldC5pc0luRG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZGluZyB0byBET01cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZyYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9wZW4gZnJhZ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFnID0gc2VsZi5kb20uZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyYWcubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJhZy5hcHBlbmRDaGlsZChzZWxmLmRvbS5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnICcpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZyYWcuYXBwZW5kQ2hpbGQodGFyZ2V0LmRvbS5lbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmlzSW5Eb20gPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC51bmJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmhpZGUoKTtcblxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb24udG9TaG93LnB1c2godGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRlZFRhcmdldHMucHVzaCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFscmVhZHkgaW4gRE9NXG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dEVsID0gdGFyZ2V0LmRvbS5lbC5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgcGVyc2lzdGFudE5ld0lkcy5wdXNoKGlkKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZnJhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xvc2UgYW5kIGluc2VydCBwcmV2aW91c2x5IG9wZW5lZCBmcmFnXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmcmFnLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkKHNlbGYuZG9tLmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmluc2VydERhdGFzZXRGcmFnKGZyYWcsIHRhcmdldC5kb20uZWwsIGluc2VydGVkVGFyZ2V0cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYWcgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnNob3cucHVzaCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZnJhZykge1xuICAgICAgICAgICAgICAgIC8vIFVuY2xvc2VkIGZyYWcgcmVtYWluaW5nXG5cbiAgICAgICAgICAgICAgICBuZXh0RWwgPSBuZXh0RWwgfHwgc2VsZi5jb25maWcubGF5b3V0LnNpYmxpbmdBZnRlcjtcblxuICAgICAgICAgICAgICAgIGlmIChuZXh0RWwpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJhZy5hcHBlbmRDaGlsZChzZWxmLmRvbS5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnICcpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWxmLmluc2VydERhdGFzZXRGcmFnKGZyYWcsIG5leHRFbCwgaW5zZXJ0ZWRUYXJnZXRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgZGF0YSA9IG9wZXJhdGlvbi5zdGFydERhdGFzZXRbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIGlkID0gZGF0YVtzZWxmLmNvbmZpZy5kYXRhLnVpZEtleV07XG5cbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzZWxmLmNhY2hlW2lkXTtcblxuICAgICAgICAgICAgICAgIGlmIChvcGVyYXRpb24uc2hvdy5pbmRleE9mKHRhcmdldCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFByZXZpb3VzbHkgc2hvd24gYnV0IG5vdyBhYnNlbnRcblxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb24uaGlkZS5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi50b0hpZGUucHVzaCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb24udG9SZW1vdmUucHVzaCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBlcnNpc3RhbnRTdGFydElkcy5wdXNoKGlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaC5pc0VxdWFsQXJyYXkocGVyc2lzdGFudFN0YXJ0SWRzLCBwZXJzaXN0YW50TmV3SWRzKSkge1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi53aWxsU29ydCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyRGlmZkRhdGFzZXRzJywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDMuMS41XG4gICAgICAgICAqIEBwYXJhbSAgIHtEb2N1bWVudEZyYWdtZW50fSAgICAgICAgICBmcmFnXG4gICAgICAgICAqIEBwYXJhbSAgIHsoSFRNTEVsZW1lbnR8bnVsbCl9ICAgICAgICBuZXh0RWxcbiAgICAgICAgICogQHBhcmFtICAge0FycmF5LjxtaXhpdHVwLlRhcmdldD59ICAgIHRhcmdldHNcbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGluc2VydERhdGFzZXRGcmFnOiBmdW5jdGlvbihmcmFnLCBuZXh0RWwsIHRhcmdldHMpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHZhciBpbnNlcnRBdCA9IG5leHRFbCA/IEFycmF5LmZyb20oc2VsZi5kb20ucGFyZW50LmNoaWxkcmVuKS5pbmRleE9mKG5leHRFbCkgOiBzZWxmLnRhcmdldHMubGVuZ3RoO1xuXG4gICAgICAgICAgICBzZWxmLmRvbS5wYXJlbnQuaW5zZXJ0QmVmb3JlKGZyYWcsIG5leHRFbCk7XG5cbiAgICAgICAgICAgIHdoaWxlICh0YXJnZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNlbGYudGFyZ2V0cy5zcGxpY2UoaW5zZXJ0QXQsIDAsIHRhcmdldHMuc2hpZnQoKSk7XG5cbiAgICAgICAgICAgICAgICBpbnNlcnRBdCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAge21peGl0dXAuQ29tbWFuZFNvcnR9IHNvcnRDb21tYW5kQVxuICAgICAgICAgKiBAcGFyYW0gICB7bWl4aXR1cC5Db21tYW5kU29ydH0gc29ydENvbW1hbmRCXG4gICAgICAgICAqIEByZXR1cm4gIHtib29sZWFufVxuICAgICAgICAgKi9cblxuICAgICAgICB3aWxsU29ydDogZnVuY3Rpb24oc29ydENvbW1hbmRBLCBzb3J0Q29tbWFuZEIpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICByZXN1bHQgID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5iZWhhdmlvci5saXZlU29ydCB8fFxuICAgICAgICAgICAgICAgIHNvcnRDb21tYW5kQS5vcmRlciAgICAgICA9PT0gJ3JhbmRvbScgfHxcbiAgICAgICAgICAgICAgICBzb3J0Q29tbWFuZEEuYXR0cmlidXRlICAgIT09IHNvcnRDb21tYW5kQi5hdHRyaWJ1dGUgfHxcbiAgICAgICAgICAgICAgICBzb3J0Q29tbWFuZEEub3JkZXIgICAgICAgIT09IHNvcnRDb21tYW5kQi5vcmRlciB8fFxuICAgICAgICAgICAgICAgIHNvcnRDb21tYW5kQS5jb2xsZWN0aW9uICAhPT0gc29ydENvbW1hbmRCLmNvbGxlY3Rpb24gfHxcbiAgICAgICAgICAgICAgICAoc29ydENvbW1hbmRBLm5leHQgPT09IG51bGwgJiYgc29ydENvbW1hbmRCLm5leHQpIHx8XG4gICAgICAgICAgICAgICAgKHNvcnRDb21tYW5kQS5uZXh0ICYmIHNvcnRDb21tYW5kQi5uZXh0ID09PSBudWxsKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc29ydENvbW1hbmRBLm5leHQgJiYgc29ydENvbW1hbmRCLm5leHQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBzZWxmLndpbGxTb3J0KHNvcnRDb21tYW5kQS5uZXh0LCBzb3J0Q29tbWFuZEIubmV4dCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jYWxsRmlsdGVycygncmVzdWx0V2lsbFNvcnQnLCByZXN1bHQsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgc2hvcnRoYW5kIG1ldGhvZCBmb3IgYC5maWx0ZXIoJ2FsbCcpYC4gU2hvd3MgYWxsIHRhcmdldHMgaW4gdGhlIGNvbnRhaW5lci5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogLnNob3coKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBTaG93aW5nIGFsbCB0YXJnZXRzPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5zaG93KClcbiAgICAgICAgICogICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudG90YWxTaG93ID09PSBzdGF0ZS50b3RhbFRhcmdldHMpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICAgICAqIEByZXR1cm4gICAgICB7UHJvbWlzZS48bWl4aXR1cC5TdGF0ZT59XG4gICAgICAgICAqL1xuXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5maWx0ZXIoJ2FsbCcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHNob3J0aGFuZCBtZXRob2QgZm9yIGAuZmlsdGVyKCdub25lJylgLiBIaWRlcyBhbGwgdGFyZ2V0cyBpbiB0aGUgY29udGFpbmVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAuaGlkZSgpXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IEhpZGluZyBhbGwgdGFyZ2V0czwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIuaGlkZSgpXG4gICAgICAgICAqICAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnRvdGFsU2hvdyA9PT0gMCk7IC8vIHRydWVcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS50b3RhbEhpZGUgPT09IHN0YXRlLnRvdGFsVGFyZ2V0cyk7IC8vIHRydWVcbiAgICAgICAgICogICAgIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgICAgICogQHJldHVybiAgICAgIHtQcm9taXNlLjxtaXhpdHVwLlN0YXRlPn1cbiAgICAgICAgICovXG5cbiAgICAgICAgaGlkZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmZpbHRlcignbm9uZScpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgYm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgb3Igbm90IGEgTWl4SXRVcCBvcGVyYXRpb24gaXNcbiAgICAgICAgICogY3VycmVudGx5IGluIHByb2dyZXNzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAuaXNNaXhpbmcoKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlOiBDaGVja2luZyB0aGUgc3RhdHVzIG9mIGEgbWl4ZXI8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLnNvcnQoJ3JhbmRvbScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgKiAgICAgY29uc29sZS5sb2cobWl4ZXIuaXNNaXhpbmcoKSkgLy8gZmFsc2VcbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKG1peGVyLmlzTWl4aW5nKCkpIC8vIHRydWVcbiAgICAgICAgICpcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMi4wLjBcbiAgICAgICAgICogQHJldHVybiAge2Jvb2xlYW59XG4gICAgICAgICAqL1xuXG4gICAgICAgIGlzTWl4aW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuaXNCdXN5O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWx0ZXJzIGFsbCB0YXJnZXRzIGluIHRoZSBjb250YWluZXIgYnkgYSBwcm92aWRlZCBzZWxlY3RvciBzdHJpbmcsIG9yIHRoZSB2YWx1ZXMgYCdhbGwnYFxuICAgICAgICAgKiBvciBgJ25vbmUnYC4gT25seSB0YXJnZXRzIG1hdGNoaW5nIHRoZSBzZWxlY3RvciB3aWxsIGJlIHNob3duLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAuZmlsdGVyKHNlbGVjdG9yIFssIGFuaW1hdGVdIFssIGNhbGxiYWNrXSlcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAxOiBGaWx0ZXJpbmcgdGFyZ2V0cyBieSBhIGNsYXNzIHNlbGVjdG9yPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5maWx0ZXIoJy5jYXRlZ29yeS1hJylcbiAgICAgICAgICogICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudG90YWxTaG93ID09PSBjb250YWluZXJFbC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnktYScpLmxlbmd0aCk7IC8vIHRydWVcbiAgICAgICAgICogICAgIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDI6IEZpbHRlcmluZyB0YXJnZXRzIGJ5IGFuIGF0dHJpYnV0ZSBzZWxlY3RvcjwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIuZmlsdGVyKCdbZGF0YS1jYXRlZ29yeX49XCJhXCJdJylcbiAgICAgICAgICogICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudG90YWxTaG93ID09PSBjb250YWluZXJFbC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jYXRlZ29yeX49XCJhXCJdJykubGVuZ3RoKTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMzogRmlsdGVyaW5nIHRhcmdldHMgYnkgYSBjb21wb3VuZCBzZWxlY3RvcjwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogLy8gU2hvdyBvbmx5IHRob3NlIHRhcmdldHMgd2l0aCB0aGUgY2xhc3NlcyAnY2F0ZWdvcnktYScgQU5EICdjYXRlZ29yeS1iJ1xuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5maWx0ZXIoJy5jYXRlZ29yeS1hLmNhdGVnb3J5LWMnKVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS50b3RhbFNob3cgPT09IGNvbnRhaW5lckVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlZ29yeS1hLmNhdGVnb3J5LWMnKS5sZW5ndGgpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSA0OiBGaWx0ZXJpbmcgdmlhIGFuIGVsZW1lbnQgY29sbGVjdGlvbjwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIGNvbGxlY3Rpb24gPSBBcnJheS5mcm9tKGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcubWl4JykpO1xuICAgICAgICAgKlxuICAgICAgICAgKiBjb25zb2xlLmxvZyhjb2xsZWN0aW9uLmxlbmd0aCk7IC8vIDM0XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIEZpbHRlciB0aGUgY29sbGVjdGlvbiBtYW51YWxseSB1c2luZyBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBmaWx0ZXJlZCA9IGNvbGxlY3Rpb24uZmlsdGVyKGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgKiAgICByZXR1cm4gcGFyc2VJbnQodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpKSA+IDEwO1xuICAgICAgICAgKiB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogY29uc29sZS5sb2coZmlsdGVyZWQubGVuZ3RoKTsgLy8gMjJcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gUGFzcyB0aGUgZmlsdGVyZWQgY29sbGVjdGlvbiB0byBNaXhJdFVwXG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLmZpbHRlcihmaWx0ZXJlZClcbiAgICAgICAgICogICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmFjdGl2ZUZpbHRlci5jb2xsZWN0aW9uLmxlbmd0aCA9PT0gMjIpOyAvLyB0cnVlXG4gICAgICAgICAqICAgIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAgICAgMi4wLjBcbiAgICAgICAgICogQHBhcmFtICAgICAgIHsoc3RyaW5nfEhUTUxFbGVtZW50fEFycmF5LjxIVE1MRWxlbWVudD4pfSBzZWxlY3RvclxuICAgICAgICAgKiAgICAgIEFueSB2YWxpZCBDU1Mgc2VsZWN0b3IgKGkuZS4gYCcuY2F0ZWdvcnktYSdgKSwgb3IgdGhlIHZhbHVlcyBgJ2FsbCdgIG9yIGAnbm9uZSdgLiBUaGUgZmlsdGVyIG1ldGhvZCBhbHNvIGFjY2VwdHMgYSByZWZlcmVuY2UgdG8gc2luZ2xlIHRhcmdldCBlbGVtZW50IG9yIGEgY29sbGVjdGlvbiBvZiB0YXJnZXQgZWxlbWVudHMgdG8gc2hvdy5cbiAgICAgICAgICogQHBhcmFtICAgICAgIHtib29sZWFufSAgIFthbmltYXRlPXRydWVdXG4gICAgICAgICAqICAgICAgQW4gb3B0aW9uYWwgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciB0aGUgb3BlcmF0aW9uIHNob3VsZCBhbmltYXRlLCBvciBvY2N1ciBzeW5jcm9ub3VzbHkgd2l0aCBubyBhbmltYXRpb24uIGB0cnVlYCBieSBkZWZhdWx0LlxuICAgICAgICAgKiBAcGFyYW0gICAgICAge2Z1bmN0aW9ufSAgW2NhbGxiYWNrPW51bGxdXG4gICAgICAgICAqICAgICAgQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgb3BlcmF0aW9uIGhhcyBjb21wbGV0ZWQuXG4gICAgICAgICAqIEByZXR1cm4gICAgICB7UHJvbWlzZS48bWl4aXR1cC5TdGF0ZT59XG4gICAgICAgICAqICAgICAgQSBwcm9taXNlIHJlc29sdmluZyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9iamVjdC5cbiAgICAgICAgICovXG5cbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24gPSBzZWxmLnBhcnNlRmlsdGVyQXJncyhhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5tdWx0aW1peCh7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBpbnN0cnVjdGlvbi5jb21tYW5kXG4gICAgICAgICAgICB9LCBpbnN0cnVjdGlvbi5hbmltYXRlLCBpbnN0cnVjdGlvbi5jYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZHMgYW4gYWRkaXRpb25hbCBzZWxlY3RvciB0byB0aGUgY3VycmVudGx5IGFjdGl2ZSBmaWx0ZXIgc2VsZWN0b3IsIGNvbmNhdGVuYXRpbmdcbiAgICAgICAgICogYXMgcGVyIHRoZSBsb2dpYyBkZWZpbmVkIGluIGBjb250cm9scy50b2dnbGVMb2dpY2AuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIC50b2dnbGVPbihzZWxlY3RvciBbLCBhbmltYXRlXSBbLCBjYWxsYmFja10pXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IFRvZ2dsaW5nIG9uIGEgZmlsdGVyIHNlbGVjdG9yPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiBjb25zb2xlLmxvZyhtaXhlci5nZXRTdGF0ZSgpLmFjdGl2ZUZpbHRlci5zZWxlY3Rvcik7IC8vICcuY2F0ZWdvcnktYSdcbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIudG9nZ2xlT24oJy5jYXRlZ29yeS1iJylcbiAgICAgICAgICogICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUuYWN0aXZlRmlsdGVyLnNlbGVjdG9yKTsgLy8gJy5jYXRlZ29yeS1hLCAuY2F0ZWdvcnktYidcbiAgICAgICAgICogICAgIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAgICAgIHtzdHJpbmd9ICAgIHNlbGVjdG9yXG4gICAgICAgICAqICAgICAgQW55IHZhbGlkIENTUyBzZWxlY3RvciAoaS5lLiBgJy5jYXRlZ29yeS1hJ2ApXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7Ym9vbGVhbn0gICBbYW5pbWF0ZT10cnVlXVxuICAgICAgICAgKiAgICAgIEFuIG9wdGlvbmFsIGJvb2xlYW4gZGljdGF0aW5nIHdoZXRoZXIgdGhlIG9wZXJhdGlvbiBzaG91bGQgYW5pbWF0ZSwgb3Igb2NjdXIgc3luY3Jvbm91c2x5IHdpdGggbm8gYW5pbWF0aW9uLiBgdHJ1ZWAgYnkgZGVmYXVsdC5cbiAgICAgICAgICogQHBhcmFtICAgICAgIHtmdW5jdGlvbn0gIFtjYWxsYmFjaz1udWxsXVxuICAgICAgICAgKiAgICAgIEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIG9wZXJhdGlvbiBoYXMgY29tcGxldGVkLlxuICAgICAgICAgKiBAcmV0dXJuICAgICAge1Byb21pc2UuPG1peGl0dXAuU3RhdGU+fVxuICAgICAgICAgKiAgICAgIEEgcHJvbWlzZSByZXNvbHZpbmcgd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBvYmplY3QuXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRvZ2dsZU9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uICAgICA9IHNlbGYucGFyc2VGaWx0ZXJBcmdzKGFyZ3VtZW50cyksXG4gICAgICAgICAgICAgICAgc2VsZWN0b3IgICAgICAgID0gaW5zdHJ1Y3Rpb24uY29tbWFuZC5zZWxlY3RvcixcbiAgICAgICAgICAgICAgICB0b2dnbGVTZWxlY3RvciAgPSAnJztcblxuICAgICAgICAgICAgc2VsZi5pc1RvZ2dsaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHNlbGYudG9nZ2xlQXJyYXkuaW5kZXhPZihzZWxlY3RvcikgPCAwKSB7XG4gICAgICAgICAgICAgICAgc2VsZi50b2dnbGVBcnJheS5wdXNoKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG9nZ2xlU2VsZWN0b3IgPSBzZWxmLmdldFRvZ2dsZVNlbGVjdG9yKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLm11bHRpbWl4KHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHRvZ2dsZVNlbGVjdG9yXG4gICAgICAgICAgICB9LCBpbnN0cnVjdGlvbi5hbmltYXRlLCBpbnN0cnVjdGlvbi5jYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgYSBzZWxlY3RvciBmcm9tIHRoZSBhY3RpdmUgZmlsdGVyIHNlbGVjdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAudG9nZ2xlT2ZmKHNlbGVjdG9yIFssIGFuaW1hdGVdIFssIGNhbGxiYWNrXSlcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogVG9nZ2xpbmcgb2ZmIGEgZmlsdGVyIHNlbGVjdG9yPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiBjb25zb2xlLmxvZyhtaXhlci5nZXRTdGF0ZSgpLmFjdGl2ZUZpbHRlci5zZWxlY3Rvcik7IC8vICcuY2F0ZWdvcnktYSwgLmNhdGVnb3J5LWInXG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLnRvZ2dsZU9mZignLmNhdGVnb3J5LWInKVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5hY3RpdmVGaWx0ZXIuc2VsZWN0b3IpOyAvLyAnLmNhdGVnb3J5LWEnXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7c3RyaW5nfSAgICBzZWxlY3RvclxuICAgICAgICAgKiAgICAgIEFueSB2YWxpZCBDU1Mgc2VsZWN0b3IgKGkuZS4gYCcuY2F0ZWdvcnktYSdgKVxuICAgICAgICAgKiBAcGFyYW0gICAgICAge2Jvb2xlYW59ICAgW2FuaW1hdGU9dHJ1ZV1cbiAgICAgICAgICogICAgICBBbiBvcHRpb25hbCBib29sZWFuIGRpY3RhdGluZyB3aGV0aGVyIHRoZSBvcGVyYXRpb24gc2hvdWxkIGFuaW1hdGUsIG9yIG9jY3VyIHN5bmNyb25vdXNseSB3aXRoIG5vIGFuaW1hdGlvbi4gYHRydWVgIGJ5IGRlZmF1bHQuXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7ZnVuY3Rpb259ICBbY2FsbGJhY2s9bnVsbF1cbiAgICAgICAgICogICAgICBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHRoZSBvcGVyYXRpb24gaGFzIGNvbXBsZXRlZC5cbiAgICAgICAgICogQHJldHVybiAgICAgIHtQcm9taXNlLjxtaXhpdHVwLlN0YXRlPn1cbiAgICAgICAgICogICAgICBBIHByb21pc2UgcmVzb2x2aW5nIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgb2JqZWN0LlxuICAgICAgICAgKi9cblxuICAgICAgICB0b2dnbGVPZmY6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb24gICAgID0gc2VsZi5wYXJzZUZpbHRlckFyZ3MoYXJndW1lbnRzKSxcbiAgICAgICAgICAgICAgICBzZWxlY3RvciAgICAgICAgPSBpbnN0cnVjdGlvbi5jb21tYW5kLnNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHNlbGVjdG9ySW5kZXggICA9IHNlbGYudG9nZ2xlQXJyYXkuaW5kZXhPZihzZWxlY3RvciksXG4gICAgICAgICAgICAgICAgdG9nZ2xlU2VsZWN0b3IgID0gJyc7XG5cbiAgICAgICAgICAgIHNlbGYuaXNUb2dnbGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RvckluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnRvZ2dsZUFycmF5LnNwbGljZShzZWxlY3RvckluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG9nZ2xlU2VsZWN0b3IgPSBzZWxmLmdldFRvZ2dsZVNlbGVjdG9yKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLm11bHRpbWl4KHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHRvZ2dsZVNlbGVjdG9yXG4gICAgICAgICAgICB9LCBpbnN0cnVjdGlvbi5hbmltYXRlLCBpbnN0cnVjdGlvbi5jYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNvcnRzIGFsbCB0YXJnZXRzIGluIHRoZSBjb250YWluZXIgYWNjb3JkaW5nIHRvIGEgcHJvdmlkZWQgc29ydCBzdHJpbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIC5zb3J0KHNvcnRTdHJpbmcgWywgYW5pbWF0ZV0gWywgY2FsbGJhY2tdKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDE6IFNvcnRpbmcgYnkgdGhlIGRlZmF1bHQgRE9NIG9yZGVyPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBSZXZlcnNlIHRoZSBkZWZhdWx0IG9yZGVyIG9mIHRoZSB0YXJnZXRzXG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLnNvcnQoJ2RlZmF1bHQ6ZGVzYycpXG4gICAgICAgICAqICAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmFjdGl2ZVNvcnQuYXR0cmlidXRlID09PSAnZGVmYXVsdCcpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUuYWN0aXZlU29ydC5vcmRlciA9PT0gJ2Rlc2MnKTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMjogU29ydGluZyBieSBhIGN1c3RvbSBkYXRhLWF0dHJpYnV0ZTwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogLy8gU29ydCB0aGUgdGFyZ2V0cyBieSB0aGUgdmFsdWUgb2YgYSBgZGF0YS1wdWJsaXNoZWQtZGF0ZWAgYXR0cmlidXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLnNvcnQoJ3B1Ymxpc2hlZC1kYXRlOmFzYycpXG4gICAgICAgICAqICAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmFjdGl2ZVNvcnQuYXR0cmlidXRlID09PSAncHVibGlzaGVkLWRhdGUnKTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmFjdGl2ZVNvcnQub3JkZXIgPT09ICdhc2MnKTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMzogU29ydGluZyBieSBtdWx0aXBsZSBhdHRyaWJ1dGVzPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBTb3J0IHRoZSB0YXJnZXRzIGJ5IHRoZSB2YWx1ZSBvZiBhIGBkYXRhLXB1Ymxpc2hlZC1kYXRlYCBhdHRyaWJ1dGUsIHRoZW4gYnkgYGRhdGEtdGl0bGVgXG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLnNvcnQoJ3B1Ymxpc2hlZC1kYXRlOmRlc2MgZGF0YS10aXRsZTphc2MnKVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5hY3RpdmVTb3J0LmF0dHJpYnV0ZSA9PT0gJ3B1Ymxpc2hlZC1kYXRlJyk7IC8vIHRydWVcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5hY3RpdmVTb3J0Lm9yZGVyID09PSAnZGVzYycpOyAvLyB0cnVlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUuYWN0aXZlU29ydC5uZXh0LmF0dHJpYnV0ZSA9PT0gJ3RpdGxlJyk7IC8vIHRydWVcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5hY3RpdmVTb3J0Lm5leHQub3JkZXIgPT09ICdhc2MnKTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgNDogU29ydGluZyBieSByYW5kb208L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLnNvcnQoJ3JhbmRvbScpXG4gICAgICAgICAqICAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmFjdGl2ZVNvcnQub3JkZXIgPT09ICdyYW5kb20nKSAvLyB0cnVlXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSA1OiBTb3J0aW5nIHZpYSBhbiBlbGVtZW50IGNvbGxlY3Rpb248L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBjb2xsZWN0aW9uID0gQXJyYXkuZnJvbShjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLm1peCcpKTtcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gU3dhcCB0aGUgcG9zaXRpb24gb2YgdHdvIGVsZW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uOlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgdGVtcCA9IGNvbGxlY3Rpb25bMV07XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbGxlY3Rpb25bMV0gPSBjb2xsZWN0aW9uWzBdO1xuICAgICAgICAgKiBjb2xsZWN0aW9uWzBdID0gdGVtcDtcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gUGFzcyB0aGUgc29ydGVkIGNvbGxlY3Rpb24gdG8gTWl4SXRVcFxuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5zb3J0KGNvbGxlY3Rpb24pXG4gICAgICAgICAqICAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnRhcmdldHNbMF0gPT09IGNvbGxlY3Rpb25bMF0pOyAvLyB0cnVlXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgICAgIDIuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7KHN0cmluZ3xBcnJheS48SFRNTEVsZW1lbnQ+KX0gICAgc29ydFN0cmluZ1xuICAgICAgICAgKiAgICAgIEEgdmFsaWQgc29ydCBzdHJpbmcgKGUuZy4gYCdkZWZhdWx0J2AsIGAncHVibGlzaGVkLWRhdGU6YXNjJ2AsIG9yIGAncmFuZG9tJ2ApLiBUaGUgc29ydCBtZXRob2QgYWxzbyBhY2NlcHRzIGFuIGFycmF5IG9mIGFsbCB0YXJnZXQgZWxlbWVudHMgaW4gYSB1c2VyLWRlZmluZWQgb3JkZXIuXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7Ym9vbGVhbn0gICBbYW5pbWF0ZT10cnVlXVxuICAgICAgICAgKiAgICAgIEFuIG9wdGlvbmFsIGJvb2xlYW4gZGljdGF0aW5nIHdoZXRoZXIgdGhlIG9wZXJhdGlvbiBzaG91bGQgYW5pbWF0ZSwgb3Igb2NjdXIgc3luY3Jvbm91c2x5IHdpdGggbm8gYW5pbWF0aW9uLiBgdHJ1ZWAgYnkgZGVmYXVsdC5cbiAgICAgICAgICogQHBhcmFtICAgICAgIHtmdW5jdGlvbn0gIFtjYWxsYmFjaz1udWxsXVxuICAgICAgICAgKiAgICAgIEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIG9wZXJhdGlvbiBoYXMgY29tcGxldGVkLlxuICAgICAgICAgKiBAcmV0dXJuICAgICAge1Byb21pc2UuPG1peGl0dXAuU3RhdGU+fVxuICAgICAgICAgKiAgICAgIEEgcHJvbWlzZSByZXNvbHZpbmcgd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBvYmplY3QuXG4gICAgICAgICAqL1xuXG4gICAgICAgIHNvcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbiA9IHNlbGYucGFyc2VTb3J0QXJncyhhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5tdWx0aW1peCh7XG4gICAgICAgICAgICAgICAgc29ydDogaW5zdHJ1Y3Rpb24uY29tbWFuZFxuICAgICAgICAgICAgfSwgaW5zdHJ1Y3Rpb24uYW5pbWF0ZSwgaW5zdHJ1Y3Rpb24uY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGFuZ2VzIHRoZSBsYXlvdXQgb2YgdGhlIGNvbnRhaW5lciBieSBhZGRpbmcsIHJlbW92aW5nIG9yIHVwZGF0aW5nIGFcbiAgICAgICAgICogbGF5b3V0LXNwZWNpZmljIGNsYXNzIG5hbWUuIElmIGBhbmltYXRpb24uYW5pbWF0ZVJlc2l6ZXRhcmdldHNgIGlzXG4gICAgICAgICAqIGVuYWJsZWQsIE1peEl0VXAgd2lsbCBhdHRlbXB0IHRvIGdyYWNlZnVsbHkgYW5pbWF0ZSB0aGUgd2lkdGgsIGhlaWdodCxcbiAgICAgICAgICogYW5kIHBvc2l0aW9uIG9mIHRhcmdldHMgYmV0d2VlbiBsYXlvdXQgc3RhdGVzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAuY2hhbmdlTGF5b3V0KGNvbnRhaW5lckNsYXNzTmFtZSBbLCBhbmltYXRlXSBbLCBjYWxsYmFja10pXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMTogQWRkaW5nIGEgbmV3IGNsYXNzIG5hbWUgdG8gdGhlIGNvbnRhaW5lcjwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIuY2hhbmdlTGF5b3V0KCdjb250YWluZXItbGlzdCcpXG4gICAgICAgICAqICAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICAgY29uc29sZS5sb2coc3RhdGUuYWN0aXZlQ29udGFpbmVyQ2xhc3MgPT09ICdjb250YWluZXItbGlzdCcpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMjogUmVtb3ZpbmcgYSBwcmV2aW91c2x5IGFkZGVkIGNsYXNzIG5hbWUgZnJvbSB0aGUgY29udGFpbmVyPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5jaGFuZ2VMYXlvdXQoJycpXG4gICAgICAgICAqICAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICAgY29uc29sZS5sb2coc3RhdGUuYWN0aXZlQ29udGFpbmVyQ2xhc3MgPT09ICcnKTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAgICAgMi4wLjBcbiAgICAgICAgICogQHBhcmFtICAgICAgIHtzdHJpbmd9ICAgIGNvbnRhaW5lckNsYXNzTmFtZVxuICAgICAgICAgKiAgICAgIEEgbGF5b3V0LXNwZWNpZmljIGNsYXNzIG5hbWUgdG8gYWRkIHRvIHRoZSBjb250YWluZXIuXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7Ym9vbGVhbn0gICBbYW5pbWF0ZT10cnVlXVxuICAgICAgICAgKiAgICAgIEFuIG9wdGlvbmFsIGJvb2xlYW4gZGljdGF0aW5nIHdoZXRoZXIgdGhlIG9wZXJhdGlvbiBzaG91bGQgYW5pbWF0ZSwgb3Igb2NjdXIgc3luY3Jvbm91c2x5IHdpdGggbm8gYW5pbWF0aW9uLiBgdHJ1ZWAgYnkgZGVmYXVsdC5cbiAgICAgICAgICogQHBhcmFtICAgICAgIHtmdW5jdGlvbn0gIFtjYWxsYmFjaz1udWxsXVxuICAgICAgICAgKiAgICAgIEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIG9wZXJhdGlvbiBoYXMgY29tcGxldGVkLlxuICAgICAgICAgKiBAcmV0dXJuICAgICAge1Byb21pc2UuPG1peGl0dXAuU3RhdGU+fVxuICAgICAgICAgKiAgICAgIEEgcHJvbWlzZSByZXNvbHZpbmcgd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBvYmplY3QuXG4gICAgICAgICAqL1xuXG4gICAgICAgIGNoYW5nZUxheW91dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uID0gc2VsZi5wYXJzZUNoYW5nZUxheW91dEFyZ3MoYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYubXVsdGltaXgoe1xuICAgICAgICAgICAgICAgIGNoYW5nZUxheW91dDogaW5zdHJ1Y3Rpb24uY29tbWFuZFxuICAgICAgICAgICAgfSwgaW5zdHJ1Y3Rpb24uYW5pbWF0ZSwgaW5zdHJ1Y3Rpb24uY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGVzIHRoZSBjb250ZW50cyBhbmQgb3JkZXIgb2YgdGhlIGNvbnRhaW5lciB0byByZWZsZWN0IHRoZSBwcm92aWRlZCBkYXRhc2V0LFxuICAgICAgICAgKiBpZiB0aGUgZGF0YXNldCBBUEkgaXMgaW4gdXNlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgZGF0YXNldCBBUEkgaXMgZGVzaWduZWQgZm9yIHVzZSBpbiBBUEktZHJpdmVuIEphdmFTY3JpcHQgYXBwbGljYXRpb25zLCBhbmRcbiAgICAgICAgICogY2FuIGJlIHVzZWQgaW5zdGVhZCBvZiBET00tYmFzZWQgbWV0aG9kcyBzdWNoIGFzIGAuZmlsdGVyKClgLCBgLnNvcnQoKWAsXG4gICAgICAgICAqIGAuaW5zZXJ0KClgLCBldGMuIFdoZW4gdXNlZCwgaW5zZXJ0aW9uLCByZW1vdmFsLCBzb3J0aW5nIGFuZCBwYWdpbmF0aW9uIGNhbiBiZVxuICAgICAgICAgKiBhY2hpZXZlZCBwdXJlbHkgdmlhIGNoYW5nZXMgdG8geW91ciBkYXRhIG1vZGVsLCB3aXRob3V0IHRoZSB1Z2x5bmVzcyBvZiBoYXZpbmdcbiAgICAgICAgICogdG8gaW50ZXJhY3Qgd2l0aCBvciBxdWVyeSB0aGUgRE9NIGRpcmVjdGx5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAuZGF0YXNldChkYXRhc2V0IFssIGFuaW1hdGVdIFssIGNhbGxiYWNrXSlcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAxOiBSZW5kZXJpbmcgYSBkYXRhc2V0PC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbXlEYXRhc2V0ID0gW1xuICAgICAgICAgKiAgICAge2lkOiAxLCAuLi59LFxuICAgICAgICAgKiAgICAge2lkOiAyLCAuLi59LFxuICAgICAgICAgKiAgICAge2lkOiAzLCAuLi59XG4gICAgICAgICAqIF07XG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLmRhdGFzZXQobXlEYXRhc2V0KVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS50b3RhbFNob3cgPT09IDMpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAyOiBTb3J0aW5nIGEgZGF0YXNldDwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogLy8gQ3JlYXRlIGEgbmV3IGRhdGFzZXQgaW4gcmV2ZXJzZSBvcmRlclxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbmV3RGF0YXNldCA9IG15RGF0YXNldC5zbGljZSgpLnJldmVyc2UoKTtcbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIuZGF0YXNldChuZXdEYXRhc2V0KVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5hY3RpdmVEYXRhc2V0WzBdID09PSBteURhdGFzZXRbMl0pOyAvLyB0cnVlXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAzOiBSZW1vdmluZyBhbiBpdGVtIGZyb20gdGhlIGRhdGFzZXQ8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKG15RGF0YXNldC5sZW5ndGgpOyAvLyAzXG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIENyZWF0ZSBhIG5ldyBkYXRhc2V0IHdpdGggdGhlIGxhc3QgaXRlbSByZW1vdmVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbmV3RGF0YXNldCA9IG15RGF0YXNldC5zbGljZSgpLnBvcCgpO1xuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5kYXRhc2V0KG5ld0RhdGFzZXQpXG4gICAgICAgICAqICAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnRvdGFsU2hvdyA9PT0gMik7IC8vIHRydWVcbiAgICAgICAgICogICAgIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAgICAgIHtBcnJheS48b2JqZWN0Pn0gICAgZGF0YXNldFxuICAgICAgICAgKiAgICAgIEFuIGFycmF5IG9mIG9iamVjdHMsIGVhY2ggb25lIHJlcHJlc2VudGluZyB0aGUgdW5kZXJseWluZyBkYXRhIG1vZGVsIG9mIGEgdGFyZ2V0IHRvIGJlIHJlbmRlcmVkLlxuICAgICAgICAgKiBAcGFyYW0gICAgICAge2Jvb2xlYW59ICAgICAgICAgICBbYW5pbWF0ZT10cnVlXVxuICAgICAgICAgKiAgICAgIEFuIG9wdGlvbmFsIGJvb2xlYW4gZGljdGF0aW5nIHdoZXRoZXIgdGhlIG9wZXJhdGlvbiBzaG91bGQgYW5pbWF0ZSwgb3Igb2NjdXIgc3luY3Jvbm91c2x5IHdpdGggbm8gYW5pbWF0aW9uLiBgdHJ1ZWAgYnkgZGVmYXVsdC5cbiAgICAgICAgICogQHBhcmFtICAgICAgIHtmdW5jdGlvbn0gICAgICAgICAgW2NhbGxiYWNrPW51bGxdXG4gICAgICAgICAqICAgICAgQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgb3BlcmF0aW9uIGhhcyBjb21wbGV0ZWQuXG4gICAgICAgICAqIEByZXR1cm4gICAgICB7UHJvbWlzZS48bWl4aXR1cC5TdGF0ZT59XG4gICAgICAgICAqICAgICAgQSBwcm9taXNlIHJlc29sdmluZyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9iamVjdC5cbiAgICAgICAgICovXG5cbiAgICAgICAgZGF0YXNldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uID0gc2VsZi5wYXJzZURhdGFzZXRBcmdzKGFyZ3VtZW50cyksXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIHF1ZXVlSXRlbSAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBhbmltYXRlICAgICA9IGZhbHNlO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVEYXRhc2V0JywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaWYgKCFzZWxmLmlzQnVzeSkge1xuICAgICAgICAgICAgICAgIGlmIChpbnN0cnVjdGlvbi5jYWxsYmFjaykgc2VsZi51c2VyQ2FsbGJhY2sgPSBpbnN0cnVjdGlvbi5jYWxsYmFjaztcblxuICAgICAgICAgICAgICAgIGFuaW1hdGUgPSAoaW5zdHJ1Y3Rpb24uYW5pbWF0ZSBeIHNlbGYuY29uZmlnLmFuaW1hdGlvbi5lbmFibGUpID8gaW5zdHJ1Y3Rpb24uYW5pbWF0ZSA6IHNlbGYuY29uZmlnLmFuaW1hdGlvbi5lbmFibGU7XG5cbiAgICAgICAgICAgICAgICBvcGVyYXRpb24gPSBzZWxmLmdldERhdGFPcGVyYXRpb24oaW5zdHJ1Y3Rpb24uY29tbWFuZC5kYXRhc2V0KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmdvTWl4KGFuaW1hdGUsIG9wZXJhdGlvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXVlSXRlbSA9IG5ldyBtaXhpdHVwLlF1ZXVlSXRlbSgpO1xuXG4gICAgICAgICAgICAgICAgcXVldWVJdGVtLmFyZ3MgICAgICAgICAgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICAgICAgcXVldWVJdGVtLmluc3RydWN0aW9uICAgPSBpbnN0cnVjdGlvbjtcblxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnF1ZXVlTWl4KHF1ZXVlSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBlcmZvcm1zIHNpbXVsdGFuZW91cyBgZmlsdGVyYCwgYHNvcnRgLCBgaW5zZXJ0YCwgYHJlbW92ZWAgYW5kIGBjaGFuZ2VMYXlvdXRgXG4gICAgICAgICAqIG9wZXJhdGlvbnMgYXMgcmVxdWVzdGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAubXVsdGltaXgobXVsdGltaXhDb21tYW5kIFssIGFuaW1hdGVdIFssIGNhbGxiYWNrXSlcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAxOiBQZXJmb3JtaW5nIHNpbXVsdGFuZW91cyBmaWx0ZXJpbmcgYW5kIHNvcnRpbmc8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLm11bHRpbWl4KHtcbiAgICAgICAgICogICAgIGZpbHRlcjogJy5jYXRlZ29yeS1iJyxcbiAgICAgICAgICogICAgIHNvcnQ6ICdwdWJsaXNoZWQtZGF0ZTpkZXNjJ1xuICAgICAgICAgKiB9KVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5hY3RpdmVGaWx0ZXIuc2VsZWN0b3IgPT09ICcuY2F0ZWdvcnktYicpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUuYWN0aXZlU29ydC5hdHRyaWJ1dGUgPT09ICdwdWJsaXNoZWQtZGF0ZScpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAyOiBQZXJmb3JtaW5nIHNpbXVsdGFuZW91cyBzb3J0aW5nLCBpbnNlcnRpb24sIGFuZCByZW1vdmFsPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiBjb25zb2xlLmxvZyhtaXhlci5nZXRTdGF0ZSgpLnRvdGFsU2hvdyk7IC8vIDZcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gTkI6IFdoZW4gaW5zZXJ0aW5nIHZpYSBgbXVsdGltaXgoKWAsIGFuIG9iamVjdCBzaG91bGQgYmUgcHJvdmlkZWQgYXMgdGhlIHZhbHVlXG4gICAgICAgICAqIC8vIGZvciB0aGUgYGluc2VydGAgcG9ydGlvbiBvZiB0aGUgY29tbWFuZCwgYWxsb3dpbmcgZm9yIGEgY29sbGVjdGlvbiBvZiBlbGVtZW50c1xuICAgICAgICAgKiAvLyBhbmQgYW4gaW5zZXJ0aW9uIGluZGV4IHRvIGJlIHNwZWNpZmllZC5cbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIubXVsdGltaXgoe1xuICAgICAgICAgKiAgICAgc29ydDogJ3B1Ymxpc2hlZC1kYXRlOmRlc2MnLCAvLyBTb3J0IHRoZSBjb250YWluZXIsIGluY2x1ZGluZyBhbnkgbmV3IGVsZW1lbnRzXG4gICAgICAgICAqICAgICBpbnNlcnQ6IHtcbiAgICAgICAgICogICAgICAgICBjb2xsZWN0aW9uOiBbbmV3RWxlbWVudFJlZmVyZW5jZUEsIG5ld0VsZW1lbnRSZWZlcmVuY2VCXSwgLy8gQWRkIDIgbmV3IGVsZW1lbnRzIGF0IGluZGV4IDVcbiAgICAgICAgICogICAgICAgICBpbmRleDogNVxuICAgICAgICAgKiAgICAgfSxcbiAgICAgICAgICogICAgIHJlbW92ZTogZXhpc3RpbmdFbGVtZW50UmVmZXJlbmNlIC8vIFJlbW92ZSAxIGV4aXN0aW5nIGVsZW1lbnRcbiAgICAgICAgICogfSlcbiAgICAgICAgICogICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUuYWN0aXZlU29ydC5hdHRyaWJ1dGUgPT09ICdwdWJsaXNoZWQtZGF0ZScpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudG90YWxTaG93ID09PSA3KTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgICAgICAyLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICAgICAge29iamVjdH0gICAgbXVsdGltaXhDb21tYW5kXG4gICAgICAgICAqICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgdGhpbmdzIHRvIGRvXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7Ym9vbGVhbn0gICBbYW5pbWF0ZT10cnVlXVxuICAgICAgICAgKiAgICAgIEFuIG9wdGlvbmFsIGJvb2xlYW4gZGljdGF0aW5nIHdoZXRoZXIgdGhlIG9wZXJhdGlvbiBzaG91bGQgYW5pbWF0ZSwgb3Igb2NjdXIgc3luY3Jvbm91c2x5IHdpdGggbm8gYW5pbWF0aW9uLiBgdHJ1ZWAgYnkgZGVmYXVsdC5cbiAgICAgICAgICogQHBhcmFtICAgICAgIHtmdW5jdGlvbn0gIFtjYWxsYmFjaz1udWxsXVxuICAgICAgICAgKiAgICAgIEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIG9wZXJhdGlvbiBoYXMgY29tcGxldGVkLlxuICAgICAgICAgKiBAcmV0dXJuICAgICAge1Byb21pc2UuPG1peGl0dXAuU3RhdGU+fVxuICAgICAgICAgKiAgICAgIEEgcHJvbWlzZSByZXNvbHZpbmcgd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBvYmplY3QuXG4gICAgICAgICAqL1xuXG4gICAgICAgIG11bHRpbWl4OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUgICAgID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgcXVldWVJdGVtICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uID0gc2VsZi5wYXJzZU11bHRpbWl4QXJncyhhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVNdWx0aW1peCcsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmICghc2VsZi5pc0J1c3kpIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24gPSBzZWxmLmdldE9wZXJhdGlvbihpbnN0cnVjdGlvbi5jb21tYW5kKTtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5jb250cm9scy5lbmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIGNvbnRyb2xzIGZvciBBUEkgY2FsbHNcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdHJ1Y3Rpb24uY29tbWFuZC5maWx0ZXIgJiYgIXNlbGYuaXNUb2dnbGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXMgd2UgYXJlIG5vdCB0b2dnbGluZywgcmVzZXQgdGhlIHRvZ2dsZSBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gbmV3IGZpbHRlciBvdmVycmlkZXMgZXhpc3RpbmcgdG9nZ2xlc1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRvZ2dsZUFycmF5Lmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJ1aWxkVG9nZ2xlQXJyYXkob3BlcmF0aW9uLmNvbW1hbmQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYucXVldWUubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGVDb250cm9scyhvcGVyYXRpb24uY29tbWFuZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5zdHJ1Y3Rpb24uY2FsbGJhY2spIHNlbGYudXNlckNhbGxiYWNrID0gaW5zdHJ1Y3Rpb24uY2FsbGJhY2s7XG5cbiAgICAgICAgICAgICAgICAvLyBBbHdheXMgYWxsb3cgdGhlIGluc3RydWN0aW9uIHRvIG92ZXJyaWRlIHRoZSBpbnN0YW5jZSBzZXR0aW5nXG5cbiAgICAgICAgICAgICAgICBhbmltYXRlID0gKGluc3RydWN0aW9uLmFuaW1hdGUgXiBzZWxmLmNvbmZpZy5hbmltYXRpb24uZW5hYmxlKSA/XG4gICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9uLmFuaW1hdGUgOlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5hbmltYXRpb24uZW5hYmxlO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5jYWxsRmlsdGVycygnb3BlcmF0aW9uTXVsdGltaXgnLCBvcGVyYXRpb24sIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5nb01peChhbmltYXRlLCBvcGVyYXRpb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWV1ZUl0ZW0gPSBuZXcgbWl4aXR1cC5RdWV1ZUl0ZW0oKTtcblxuICAgICAgICAgICAgICAgIHF1ZXVlSXRlbS5hcmdzICAgICAgICAgICA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgICAgICBxdWV1ZUl0ZW0uaW5zdHJ1Y3Rpb24gICAgPSBpbnN0cnVjdGlvbjtcbiAgICAgICAgICAgICAgICBxdWV1ZUl0ZW0udHJpZ2dlckVsZW1lbnQgPSBzZWxmLmxhc3RDbGlja2VkO1xuICAgICAgICAgICAgICAgIHF1ZXVlSXRlbS5pc1RvZ2dsaW5nICAgICA9IHNlbGYuaXNUb2dnbGluZztcblxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnF1ZXVlTWl4KHF1ZXVlSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgICAgICAgICAgIG11bHRpbWl4Q29tbWFuZFxuICAgICAgICAgKiBAcGFyYW0gICB7Ym9vbGVhbn0gICAgICAgICAgIFtpc1ByZUZldGNoXVxuICAgICAgICAgKiAgICAgIEFuIG9wdGlvbmFsIGJvb2xlYW4gaW5kaWNhdGluZyB0aGF0IHRoZSBvcGVyYXRpb24gaXMgYmVpbmcgcHJlLWZldGNoZWQgZm9yIGV4ZWN1dGlvbiBhdCBhIGxhdGVyIHRpbWUuXG4gICAgICAgICAqIEByZXR1cm4gIHtPcGVyYXRpb258bnVsbH1cbiAgICAgICAgICovXG5cbiAgICAgICAgZ2V0T3BlcmF0aW9uOiBmdW5jdGlvbihtdWx0aW1peENvbW1hbmQpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBzb3J0Q29tbWFuZCAgICAgICAgID0gbXVsdGltaXhDb21tYW5kLnNvcnQsXG4gICAgICAgICAgICAgICAgZmlsdGVyQ29tbWFuZCAgICAgICA9IG11bHRpbWl4Q29tbWFuZC5maWx0ZXIsXG4gICAgICAgICAgICAgICAgY2hhbmdlTGF5b3V0Q29tbWFuZCA9IG11bHRpbWl4Q29tbWFuZC5jaGFuZ2VMYXlvdXQsXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29tbWFuZCAgICAgICA9IG11bHRpbWl4Q29tbWFuZC5yZW1vdmUsXG4gICAgICAgICAgICAgICAgaW5zZXJ0Q29tbWFuZCAgICAgICA9IG11bHRpbWl4Q29tbWFuZC5pbnNlcnQsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uICAgICAgICAgICA9IG5ldyBtaXhpdHVwLk9wZXJhdGlvbigpO1xuXG4gICAgICAgICAgICBvcGVyYXRpb24gPSBzZWxmLmNhbGxGaWx0ZXJzKCdvcGVyYXRpb25Vbm1hcHBlZEdldE9wZXJhdGlvbicsIG9wZXJhdGlvbiwgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgb3BlcmF0aW9uLmlkICAgICAgICAgICAgICAgID0gaC5yYW5kb21IZXgoKTtcbiAgICAgICAgICAgIG9wZXJhdGlvbi5jb21tYW5kICAgICAgICAgICA9IG11bHRpbWl4Q29tbWFuZDtcbiAgICAgICAgICAgIG9wZXJhdGlvbi5zdGFydFN0YXRlICAgICAgICA9IHNlbGYuc3RhdGU7XG4gICAgICAgICAgICBvcGVyYXRpb24udHJpZ2dlckVsZW1lbnQgICAgPSBzZWxmLmxhc3RDbGlja2VkO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5pc0J1c3kpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuZGVidWcuc2hvd1dhcm5pbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihtaXhpdHVwLm1lc3NhZ2VzLndhcm5pbmdHZXRPcGVyYXRpb25JbnN0YW5jZUJ1c3koKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbnNlcnRDb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5pbnNlcnRUYXJnZXRzKGluc2VydENvbW1hbmQsIG9wZXJhdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZW1vdmVDb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnRvUmVtb3ZlID0gcmVtb3ZlQ29tbWFuZC50YXJnZXRzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvcGVyYXRpb24uc3RhcnRTb3J0ID0gb3BlcmF0aW9uLm5ld1NvcnQgPSBvcGVyYXRpb24uc3RhcnRTdGF0ZS5hY3RpdmVTb3J0O1xuICAgICAgICAgICAgb3BlcmF0aW9uLnN0YXJ0T3JkZXIgPSBvcGVyYXRpb24ubmV3T3JkZXIgPSBzZWxmLnRhcmdldHM7XG5cbiAgICAgICAgICAgIGlmIChzb3J0Q29tbWFuZCkge1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5zdGFydFNvcnQgPSBvcGVyYXRpb24uc3RhcnRTdGF0ZS5hY3RpdmVTb3J0O1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5uZXdTb3J0ICAgPSBzb3J0Q29tbWFuZDtcblxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi53aWxsU29ydCA9IHNlbGYud2lsbFNvcnQoc29ydENvbW1hbmQsIG9wZXJhdGlvbi5zdGFydFN0YXRlLmFjdGl2ZVNvcnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi53aWxsU29ydCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNvcnRPcGVyYXRpb24ob3BlcmF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9wZXJhdGlvbi5zdGFydEZpbHRlciA9IG9wZXJhdGlvbi5zdGFydFN0YXRlLmFjdGl2ZUZpbHRlcjtcblxuICAgICAgICAgICAgaWYgKGZpbHRlckNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24ubmV3RmlsdGVyID0gZmlsdGVyQ29tbWFuZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLm5ld0ZpbHRlciA9IGguZXh0ZW5kKG5ldyBtaXhpdHVwLkNvbW1hbmRGaWx0ZXIoKSwgb3BlcmF0aW9uLnN0YXJ0RmlsdGVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi5uZXdGaWx0ZXIuc2VsZWN0b3IgPT09ICdhbGwnKSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLm5ld0ZpbHRlci5zZWxlY3RvciA9IHNlbGYuY29uZmlnLnNlbGVjdG9ycy50YXJnZXQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbi5uZXdGaWx0ZXIuc2VsZWN0b3IgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5uZXdGaWx0ZXIuc2VsZWN0b3IgPSAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5maWx0ZXJPcGVyYXRpb24ob3BlcmF0aW9uKTtcblxuICAgICAgICAgICAgb3BlcmF0aW9uLnN0YXJ0Q29udGFpbmVyQ2xhc3NOYW1lID0gb3BlcmF0aW9uLnN0YXJ0U3RhdGUuYWN0aXZlQ29udGFpbmVyQ2xhc3NOYW1lO1xuXG4gICAgICAgICAgICBpZiAoY2hhbmdlTGF5b3V0Q29tbWFuZCkge1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5uZXdDb250YWluZXJDbGFzc05hbWUgPSBjaGFuZ2VMYXlvdXRDb21tYW5kLmNvbnRhaW5lckNsYXNzTmFtZTtcblxuICAgICAgICAgICAgICAgIGlmIChvcGVyYXRpb24ubmV3Q29udGFpbmVyQ2xhc3NOYW1lICE9PSBvcGVyYXRpb24uc3RhcnRDb250YWluZXJDbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLndpbGxDaGFuZ2VMYXlvdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLm5ld0NvbnRhaW5lckNsYXNzTmFtZSA9IG9wZXJhdGlvbi5zdGFydENvbnRhaW5lckNsYXNzTmFtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFuaW1hdGlvbi5lbmFibGUpIHtcbiAgICAgICAgICAgICAgICAvLyBQb3B1bGF0ZSB0aGUgb3BlcmF0aW9uJ3MgcG9zaXRpb24gZGF0YVxuXG4gICAgICAgICAgICAgICAgc2VsZi5nZXRTdGFydE1peERhdGEob3BlcmF0aW9uKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNldEludGVyKG9wZXJhdGlvbik7XG5cbiAgICAgICAgICAgICAgICBvcGVyYXRpb24uZG9jU3RhdGUgPSBoLmdldERvY3VtZW50U3RhdGUoc2VsZi5kb20uZG9jdW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5nZXRJbnRlck1peERhdGEob3BlcmF0aW9uKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNldEZpbmFsKG9wZXJhdGlvbik7XG4gICAgICAgICAgICAgICAgc2VsZi5nZXRGaW5hbE1peERhdGEob3BlcmF0aW9uKTtcblxuICAgICAgICAgICAgICAgIHNlbGYucGFyc2VFZmZlY3RzKCk7XG5cbiAgICAgICAgICAgICAgICBvcGVyYXRpb24uaGFzRWZmZWN0ID0gc2VsZi5oYXNFZmZlY3QoKTtcblxuICAgICAgICAgICAgICAgIHNlbGYuZ2V0VHdlZW5EYXRhKG9wZXJhdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcGVyYXRpb24ud2lsbFNvcnQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnRhcmdldHMgPSBvcGVyYXRpb24ubmV3T3JkZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9wZXJhdGlvbi5uZXdTdGF0ZSA9IHNlbGYuYnVpbGRTdGF0ZShvcGVyYXRpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jYWxsRmlsdGVycygnb3BlcmF0aW9uTWFwcGVkR2V0T3BlcmF0aW9uJywgb3BlcmF0aW9uLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW5kZXJzIGEgcHJldmlvdXNseSBjcmVhdGVkIG9wZXJhdGlvbiBhdCBhIHNwZWNpZmljIHBvaW50IGluIGl0cyBwYXRoLCBhc1xuICAgICAgICAgKiBkZXRlcm1pbmVkIGJ5IGEgbXVsdGlwbGllciBiZXR3ZWVuIDAgYW5kIDEuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIC50d2VlbihvcGVyYXRpb24sIG11bHRpcGxpZXIpXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7bWl4aXR1cC5PcGVyYXRpb259ICAgICBvcGVyYXRpb25cbiAgICAgICAgICogICAgICBBbiBvcGVyYXRpb24gb2JqZWN0IGNyZWF0ZWQgdmlhIHRoZSBgZ2V0T3BlcmF0aW9uYCBtZXRob2RcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtICAge0Zsb2F0fSAgICAgICAgICAgICAgICAgbXVsdGlwbGllclxuICAgICAgICAgKiAgICAgIEFueSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIHJlcHJlc2VudGluZyB0aGUgcGVyY2VudGFnZSBjb21wbGV0ZSBvZiB0aGUgb3BlcmF0aW9uXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICB0d2VlbjogZnVuY3Rpb24ob3BlcmF0aW9uLCBtdWx0aXBsaWVyKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ICAgICAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBwb3NEYXRhICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIHRvSGlkZUluZGV4ICAgICA9IC0xLFxuICAgICAgICAgICAgICAgIGkgICAgICAgICAgICAgICA9IC0xO1xuXG4gICAgICAgICAgICBtdWx0aXBsaWVyID0gTWF0aC5taW4obXVsdGlwbGllciwgMSk7XG4gICAgICAgICAgICBtdWx0aXBsaWVyID0gTWF0aC5tYXgobXVsdGlwbGllciwgMCk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IG9wZXJhdGlvbi5zaG93W2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwb3NEYXRhID0gb3BlcmF0aW9uLnNob3dQb3NEYXRhW2ldO1xuXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFwcGx5VHdlZW4ocG9zRGF0YSwgbXVsdGlwbGllcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IG9wZXJhdGlvbi5oaWRlW2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmlzU2hvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoKHRvSGlkZUluZGV4ID0gb3BlcmF0aW9uLnRvSGlkZS5pbmRleE9mKHRhcmdldCkpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zRGF0YSA9IG9wZXJhdGlvbi50b0hpZGVQb3NEYXRhW3RvSGlkZUluZGV4XTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldC5pc1Nob3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmFwcGx5VHdlZW4ocG9zRGF0YSwgbXVsdGlwbGllcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnNlcnRzIG9uZSBvciBtb3JlIG5ldyB0YXJnZXQgZWxlbWVudHMgaW50byB0aGUgY29udGFpbmVyIGF0IGEgc3BlY2lmaWVkXG4gICAgICAgICAqIGluZGV4LlxuICAgICAgICAgKlxuICAgICAgICAgKiBUbyBiZSBpbmRleGVkIGFzIHRhcmdldHMsIG5ldyBlbGVtZW50cyBtdXN0IG1hdGNoIHRoZSBgc2VsZWN0b3JzLnRhcmdldGBcbiAgICAgICAgICogc2VsZWN0b3IgKGAnLm1peCdgIGJ5IGRlZmF1bHQpLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAuaW5zZXJ0KG5ld0VsZW1lbnRzIFssIGluZGV4XSBbLCBhbmltYXRlXSwgWywgY2FsbGJhY2tdKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDE6IEluc2VydGluZyBhIHNpbmdsZSBlbGVtZW50IHZpYSByZWZlcmVuY2U8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKG1peGVyLmdldFN0YXRlKCkudG90YWxTaG93KTsgLy8gMFxuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBDcmVhdGUgYSBuZXcgZWxlbWVudFxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgKiBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21peCcpO1xuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5pbnNlcnQobmV3RWxlbWVudClcbiAgICAgICAgICogICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudG90YWxTaG93ID09PSAxKTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMjogSW5zZXJ0aW5nIGEgc2luZ2xlIGVsZW1lbnQgdmlhIEhUTUwgc3RyaW5nPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiBjb25zb2xlLmxvZyhtaXhlci5nZXRTdGF0ZSgpLnRvdGFsU2hvdyk7IC8vIDFcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gQ3JlYXRlIGEgbmV3IGVsZW1lbnQgdmlhIHJlZmVyZW5jZVxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbmV3RWxlbWVudEh0bWwgPSAnJmx0O2RpdiBjbGFzcz1cIm1peFwiJmd0OyZsdDsvZGl2Jmd0Oyc7XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIENyZWF0ZSBhbmQgaW5zZXJ0IHRoZSBuZXcgZWxlbWVudCBhdCBpbmRleCAxXG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLmluc2VydChuZXdFbGVtZW50SHRtbCwgMSlcbiAgICAgICAgICogICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudG90YWxTaG93ID09PSAyKTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnNob3dbMV0ub3V0ZXJIVE1MID09PSBuZXdFbGVtZW50SHRtbCk7IC8vIHRydWVcbiAgICAgICAgICogICAgIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDM6IEluc2VydGluZyBtdWx0aXBsZSBlbGVtZW50cyB2aWEgcmVmZXJlbmNlPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiBjb25zb2xlLmxvZyhtaXhlci5nZXRTdGF0ZSgpLnRvdGFsU2hvdyk7IC8vIDJcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gQ3JlYXRlIGFuIGFycmF5IG9mIG5ldyBlbGVtZW50cyB0byBpbnNlcnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBuZXdFbGVtZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgKiB2YXIgbmV3RWxlbWVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICpcbiAgICAgICAgICogbmV3RWxlbWVudDEuY2xhc3NMaXN0LmFkZCgnbWl4Jyk7XG4gICAgICAgICAqIG5ld0VsZW1lbnQyLmNsYXNzTGlzdC5hZGQoJ21peCcpO1xuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbmV3RWxlbWVudHNDb2xsZWN0aW9uID0gW25ld0VsZW1lbnQxLCBuZXdFbGVtZW50Ml07XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIEluc2VydCB0aGUgbmV3IGVsZW1lbnRzIHN0YXJ0aW5nIGF0IGluZGV4IDFcbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIuaW5zZXJ0KG5ld0VsZW1lbnRzQ29sbGVjdGlvbiwgMSlcbiAgICAgICAgICogICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudG90YWxTaG93ID09PSA0KTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnNob3dbMV0gPT09IG5ld0VsZW1lbnQxKTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnNob3dbMl0gPT09IG5ld0VsZW1lbnQyKTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgNDogSW5zZXJ0aW5nIGEgalF1ZXJ5IGNvbGxlY3Rpb24gb2JqZWN0IGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgZWxlbWVudHM8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKG1peGVyLmdldFN0YXRlKCkudG90YWxTaG93KTsgLy8gNFxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgJG5ld0VsZW1lbnQgPSAkKCcmbHQ7ZGl2IGNsYXNzPVwibWl4XCImZ3Q7Jmx0Oy9kaXYmZ3Q7Jyk7XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIEluc2VydCB0aGUgbmV3IGVsZW1lbnRzIHN0YXJ0aW5nIGF0IGluZGV4IDNcbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIuaW5zZXJ0KG5ld0VsZW1lbnRzQ29sbGVjdGlvbiwgMylcbiAgICAgICAgICogICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudG90YWxTaG93ID09PSA1KTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnNob3dbM10gPT09ICRuZXdFbGVtZW50WzBdKTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgICAgICAyLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICAgICAgeyhIVE1MRWxlbWVudHxBcnJheS48SFRNTEVsZW1lbnQ+fHN0cmluZyl9ICAgIG5ld0VsZW1lbnRzXG4gICAgICAgICAqICAgICAgQSByZWZlcmVuY2UgdG8gYSBzaW5nbGUgZWxlbWVudCB0byBpbnNlcnQsIGFuIGFycmF5LWxpa2UgY29sbGVjdGlvbiBvZiBlbGVtZW50cywgb3IgYW4gSFRNTCBzdHJpbmcgcmVwcmVzZW50aW5nIGEgc2luZ2xlIGVsZW1lbnQuXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7bnVtYmVyfSAgICBpbmRleD0wXG4gICAgICAgICAqICAgICAgVGhlIGluZGV4IGF0IHdoaWNoIHRvIGluc2VydCB0aGUgbmV3IGVsZW1lbnQocykuIGAwYCBieSBkZWZhdWx0LlxuICAgICAgICAgKiBAcGFyYW0gICAgICAge2Jvb2xlYW59ICAgW2FuaW1hdGU9dHJ1ZV1cbiAgICAgICAgICogICAgICBBbiBvcHRpb25hbCBib29sZWFuIGRpY3RhdGluZyB3aGV0aGVyIHRoZSBvcGVyYXRpb24gc2hvdWxkIGFuaW1hdGUsIG9yIG9jY3VyIHN5bmNyb25vdXNseSB3aXRoIG5vIGFuaW1hdGlvbi4gYHRydWVgIGJ5IGRlZmF1bHQuXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7ZnVuY3Rpb259ICBbY2FsbGJhY2s9bnVsbF1cbiAgICAgICAgICogICAgICBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHRoZSBvcGVyYXRpb24gaGFzIGNvbXBsZXRlZC5cbiAgICAgICAgICogQHJldHVybiAgICAgIHtQcm9taXNlLjxtaXhpdHVwLlN0YXRlPn1cbiAgICAgICAgICogICAgICBBIHByb21pc2UgcmVzb2x2aW5nIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgb2JqZWN0LlxuICAgICAgICAgKi9cblxuICAgICAgICBpbnNlcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGFyZ3MgPSBzZWxmLnBhcnNlSW5zZXJ0QXJncyhhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5tdWx0aW1peCh7XG4gICAgICAgICAgICAgICAgaW5zZXJ0OiBhcmdzLmNvbW1hbmRcbiAgICAgICAgICAgIH0sIGFyZ3MuYW5pbWF0ZSwgYXJncy5jYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluc2VydHMgb25lIG9yIG1vcmUgbmV3IGVsZW1lbnRzIGJlZm9yZSBhIHByb3ZpZGVkIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAuaW5zZXJ0QmVmb3JlKG5ld0VsZW1lbnRzLCByZWZlcmVuY2VFbGVtZW50IFssIGFuaW1hdGVdIFssIGNhbGxiYWNrXSlcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogSW5zZXJ0aW5nIGEgbmV3IGVsZW1lbnQgYmVmb3JlIGEgcmVmZXJlbmNlIGVsZW1lbnQ8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIEFuIGV4aXN0aW5nIHJlZmVyZW5jZSBlbGVtZW50IGlzIGNob3NlbiBhdCBpbmRleCAyXG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciByZWZlcmVuY2VFbGVtZW50ID0gbWl4ZXIuZ2V0U3RhdGUoKS5zaG93WzJdO1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBDcmVhdGUgYSBuZXcgZWxlbWVudFxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgKiBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21peCcpO1xuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5pbnNlcnRCZWZvcmUobmV3RWxlbWVudCwgcmVmZXJlbmNlRWxlbWVudClcbiAgICAgICAgICogICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgLy8gVGhlIG5ldyBlbGVtZW50IGlzIGluc2VydGVkIGludG8gdGhlIGNvbnRhaW5lciBhdCBpbmRleCAyLCBiZWZvcmUgdGhlIHJlZmVyZW5jZSBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc29sZS5sb2coc3RhdGUuc2hvd1syXSA9PT0gbmV3RWxlbWVudCk7IC8vIHRydWVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICAvLyBUaGUgcmVmZXJlbmNlIGVsZW1lbnQgaXMgbm93IGF0IGluZGV4IDNcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5zaG93WzNdID09PSByZWZlcmVuY2VFbGVtZW50KTsgLy8gdHJ1ZVxuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICAgICAgeyhIVE1MRWxlbWVudHxBcnJheS48SFRNTEVsZW1lbnQ+fHN0cmluZyl9ICAgIG5ld0VsZW1lbnRzXG4gICAgICAgICAqICAgICAgQSByZWZlcmVuY2UgdG8gYSBzaW5nbGUgZWxlbWVudCB0byBpbnNlcnQsIGFuIGFycmF5LWxpa2UgY29sbGVjdGlvbiBvZiBlbGVtZW50cywgb3IgYW4gSFRNTCBzdHJpbmcgcmVwcmVzZW50aW5nIGEgc2luZ2xlIGVsZW1lbnQuXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7SFRNTEVsZW1lbnR9ICAgIHJlZmVyZW5jZUVsZW1lbnRcbiAgICAgICAgICogICAgICBBIHJlZmVyZW5jZSB0byBhbiBleGlzdGluZyBlbGVtZW50IGluIHRoZSBjb250YWluZXIgdG8gaW5zZXJ0IG5ldyBlbGVtZW50cyBiZWZvcmUuXG4gICAgICAgICAqQHBhcmFtICAgICAgIHtib29sZWFufSAgIFthbmltYXRlPXRydWVdXG4gICAgICAgICAqICAgICAgQW4gb3B0aW9uYWwgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciB0aGUgb3BlcmF0aW9uIHNob3VsZCBhbmltYXRlLCBvciBvY2N1ciBzeW5jcm9ub3VzbHkgd2l0aCBubyBhbmltYXRpb24uIGB0cnVlYCBieSBkZWZhdWx0LlxuICAgICAgICAgKiBAcGFyYW0gICAgICAge2Z1bmN0aW9ufSAgW2NhbGxiYWNrPW51bGxdXG4gICAgICAgICAqICAgICAgQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgb3BlcmF0aW9uIGhhcyBjb21wbGV0ZWQuXG4gICAgICAgICAqIEByZXR1cm4gICAgICB7UHJvbWlzZS48bWl4aXR1cC5TdGF0ZT59XG4gICAgICAgICAqICAgICAgQSBwcm9taXNlIHJlc29sdmluZyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9iamVjdC5cbiAgICAgICAgICovXG5cbiAgICAgICAgaW5zZXJ0QmVmb3JlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgICAgICBhcmdzID0gc2VsZi5wYXJzZUluc2VydEFyZ3MoYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5zZXJ0KGFyZ3MuY29tbWFuZC5jb2xsZWN0aW9uLCAnYmVmb3JlJywgYXJncy5jb21tYW5kLnNpYmxpbmcsIGFyZ3MuYW5pbWF0ZSwgYXJncy5jYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluc2VydHMgb25lIG9yIG1vcmUgbmV3IGVsZW1lbnRzIGFmdGVyIGEgcHJvdmlkZWQgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIC5pbnNlcnRBZnRlcihuZXdFbGVtZW50cywgcmVmZXJlbmNlRWxlbWVudCBbLCBhbmltYXRlXSBbLCBjYWxsYmFja10pXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IEluc2VydGluZyBhIG5ldyBlbGVtZW50IGFmdGVyIGEgcmVmZXJlbmNlIGVsZW1lbnQ8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIEFuIGV4aXN0aW5nIHJlZmVyZW5jZSBlbGVtZW50IGlzIGNob3NlbiBhdCBpbmRleCAyXG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciByZWZlcmVuY2VFbGVtZW50ID0gbWl4ZXIuZ2V0U3RhdGUoKS5zaG93WzJdO1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBDcmVhdGUgYSBuZXcgZWxlbWVudFxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgKiBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21peCcpO1xuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5pbnNlcnRBZnRlcihuZXdFbGVtZW50LCByZWZlcmVuY2VFbGVtZW50KVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICAvLyBUaGUgbmV3IGVsZW1lbnQgaXMgaW5zZXJ0ZWQgaW50byB0aGUgY29udGFpbmVyIGF0IGluZGV4IDMsIGFmdGVyIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnNob3dbM10gPT09IG5ld0VsZW1lbnQpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7KEhUTUxFbGVtZW50fEFycmF5LjxIVE1MRWxlbWVudD58c3RyaW5nKX0gICAgbmV3RWxlbWVudHNcbiAgICAgICAgICogICAgICBBIHJlZmVyZW5jZSB0byBhIHNpbmdsZSBlbGVtZW50IHRvIGluc2VydCwgYW4gYXJyYXktbGlrZSBjb2xsZWN0aW9uIG9mIGVsZW1lbnRzLCBvciBhbiBIVE1MIHN0cmluZyByZXByZXNlbnRpbmcgYSBzaW5nbGUgZWxlbWVudC5cbiAgICAgICAgICogQHBhcmFtICAgICAgIHtIVE1MRWxlbWVudH0gICAgcmVmZXJlbmNlRWxlbWVudFxuICAgICAgICAgKiAgICAgIEEgcmVmZXJlbmNlIHRvIGFuIGV4aXN0aW5nIGVsZW1lbnQgaW4gdGhlIGNvbnRhaW5lciB0byBpbnNlcnQgbmV3IGVsZW1lbnRzIGFmdGVyLlxuICAgICAgICAgKiBAcGFyYW0gICAgICAge2Jvb2xlYW59ICAgW2FuaW1hdGU9dHJ1ZV1cbiAgICAgICAgICogICAgICBBbiBvcHRpb25hbCBib29sZWFuIGRpY3RhdGluZyB3aGV0aGVyIHRoZSBvcGVyYXRpb24gc2hvdWxkIGFuaW1hdGUsIG9yIG9jY3VyIHN5bmNyb25vdXNseSB3aXRoIG5vIGFuaW1hdGlvbi4gYHRydWVgIGJ5IGRlZmF1bHQuXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7ZnVuY3Rpb259ICBbY2FsbGJhY2s9bnVsbF1cbiAgICAgICAgICogICAgICBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHRoZSBvcGVyYXRpb24gaGFzIGNvbXBsZXRlZC5cbiAgICAgICAgICogQHJldHVybiAgICAgIHtQcm9taXNlLjxtaXhpdHVwLlN0YXRlPn1cbiAgICAgICAgICogICAgICBBIHByb21pc2UgcmVzb2x2aW5nIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgb2JqZWN0LlxuICAgICAgICAgKi9cblxuICAgICAgICBpbnNlcnRBZnRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICAgICAgYXJncyA9IHNlbGYucGFyc2VJbnNlcnRBcmdzKGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmluc2VydChhcmdzLmNvbW1hbmQuY29sbGVjdGlvbiwgJ2FmdGVyJywgYXJncy5jb21tYW5kLnNpYmxpbmcsIGFyZ3MuYW5pbWF0ZSwgYXJncy5jYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluc2VydHMgb25lIG9yIG1vcmUgbmV3IGVsZW1lbnRzIGludG8gdGhlIGNvbnRhaW5lciBiZWZvcmUgYWxsIGV4aXN0aW5nIHRhcmdldHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIC5wcmVwZW5kKG5ld0VsZW1lbnRzIFssYW5pbWF0ZV0gWyxjYWxsYmFja10pXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IFByZXBlbmRpbmcgYSBuZXcgZWxlbWVudDwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogLy8gQ3JlYXRlIGEgbmV3IGVsZW1lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICogbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtaXgnKTtcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gSW5zZXJ0IHRoZSBlbGVtZW50IGludG8gdGhlIGNvbnRhaW5lclxuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5wcmVwZW5kKG5ld0VsZW1lbnQpXG4gICAgICAgICAqICAgICAudGhlbihmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnNob3dbMF0gPT09IG5ld0VsZW1lbnQpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7KEhUTUxFbGVtZW50fEFycmF5LjxIVE1MRWxlbWVudD58c3RyaW5nKX0gICAgbmV3RWxlbWVudHNcbiAgICAgICAgICogICAgICBBIHJlZmVyZW5jZSB0byBhIHNpbmdsZSBlbGVtZW50IHRvIGluc2VydCwgYW4gYXJyYXktbGlrZSBjb2xsZWN0aW9uIG9mIGVsZW1lbnRzLCBvciBhbiBIVE1MIHN0cmluZyByZXByZXNlbnRpbmcgYSBzaW5nbGUgZWxlbWVudC5cbiAgICAgICAgICogQHBhcmFtICAgICAgIHtib29sZWFufSAgIFthbmltYXRlPXRydWVdXG4gICAgICAgICAqICAgICAgQW4gb3B0aW9uYWwgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciB0aGUgb3BlcmF0aW9uIHNob3VsZCBhbmltYXRlLCBvciBvY2N1ciBzeW5jcm9ub3VzbHkgd2l0aCBubyBhbmltYXRpb24uIGB0cnVlYCBieSBkZWZhdWx0LlxuICAgICAgICAgKiBAcGFyYW0gICAgICAge2Z1bmN0aW9ufSAgW2NhbGxiYWNrPW51bGxdXG4gICAgICAgICAqICAgICAgQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgb3BlcmF0aW9uIGhhcyBjb21wbGV0ZWQuXG4gICAgICAgICAqIEByZXR1cm4gICAgICB7UHJvbWlzZS48bWl4aXR1cC5TdGF0ZT59XG4gICAgICAgICAqICAgICAgQSBwcm9taXNlIHJlc29sdmluZyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9iamVjdC5cbiAgICAgICAgICovXG5cbiAgICAgICAgcHJlcGVuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICAgICAgYXJncyA9IHNlbGYucGFyc2VJbnNlcnRBcmdzKGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmluc2VydCgwLCBhcmdzLmNvbW1hbmQuY29sbGVjdGlvbiwgYXJncy5hbmltYXRlLCBhcmdzLmNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5zZXJ0cyBvbmUgb3IgbW9yZSBuZXcgZWxlbWVudHMgaW50byB0aGUgY29udGFpbmVyIGFmdGVyIGFsbCBleGlzdGluZyB0YXJnZXRzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAuYXBwZW5kKG5ld0VsZW1lbnRzIFssYW5pbWF0ZV0gWyxjYWxsYmFja10pXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IEFwcGVuZGluZyBhIG5ldyBlbGVtZW50PC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBDcmVhdGUgYSBuZXcgZWxlbWVudFxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgKiBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21peCcpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBJbnNlcnQgdGhlIGVsZW1lbnQgaW50byB0aGUgY29udGFpbmVyXG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLmFwcGVuZChuZXdFbGVtZW50KVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5zaG93W3N0YXRlLnNob3cubGVuZ3RoIC0gMV0gPT09IG5ld0VsZW1lbnQpOyAvLyB0cnVlXG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7KEhUTUxFbGVtZW50fEFycmF5LjxIVE1MRWxlbWVudD58c3RyaW5nKX0gICAgbmV3RWxlbWVudHNcbiAgICAgICAgICogICAgICBBIHJlZmVyZW5jZSB0byBhIHNpbmdsZSBlbGVtZW50IHRvIGluc2VydCwgYW4gYXJyYXktbGlrZSBjb2xsZWN0aW9uIG9mIGVsZW1lbnRzLCBvciBhbiBIVE1MIHN0cmluZyByZXByZXNlbnRpbmcgYSBzaW5nbGUgZWxlbWVudC5cbiAgICAgICAgICogQHBhcmFtICAgICAgIHtib29sZWFufSAgIFthbmltYXRlPXRydWVdXG4gICAgICAgICAqICAgICAgQW4gb3B0aW9uYWwgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciB0aGUgb3BlcmF0aW9uIHNob3VsZCBhbmltYXRlLCBvciBvY2N1ciBzeW5jcm9ub3VzbHkgd2l0aCBubyBhbmltYXRpb24uIGB0cnVlYCBieSBkZWZhdWx0LlxuICAgICAgICAgKiBAcGFyYW0gICAgICAge2Z1bmN0aW9ufSAgW2NhbGxiYWNrPW51bGxdXG4gICAgICAgICAqICAgICAgQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgb3BlcmF0aW9uIGhhcyBjb21wbGV0ZWQuXG4gICAgICAgICAqIEByZXR1cm4gICAgICB7UHJvbWlzZS48bWl4aXR1cC5TdGF0ZT59XG4gICAgICAgICAqICAgICAgQSBwcm9taXNlIHJlc29sdmluZyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9iamVjdC5cbiAgICAgICAgICovXG5cbiAgICAgICAgYXBwZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgICAgICBhcmdzID0gc2VsZi5wYXJzZUluc2VydEFyZ3MoYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5zZXJ0KHNlbGYuc3RhdGUudG90YWxUYXJnZXRzLCBhcmdzLmNvbW1hbmQuY29sbGVjdGlvbiwgYXJncy5hbmltYXRlLCBhcmdzLmNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyBvbmUgb3IgbW9yZSBleGlzdGluZyB0YXJnZXQgZWxlbWVudHMgZnJvbSB0aGUgY29udGFpbmVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAucmVtb3ZlKGVsZW1lbnRzIFssIGFuaW1hdGVdIFssIGNhbGxiYWNrXSlcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAxOiBSZW1vdmluZyBhbiBlbGVtZW50IGJ5IHJlZmVyZW5jZTwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIGVsZW1lbnRUb1JlbW92ZSA9IGNvbnRhaW5lckVsLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5yZW1vdmUoZWxlbWVudFRvUmVtb3ZlKVxuICAgICAgICAgKiAgICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAqICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnRhcmdldHMuaW5kZXhPZihlbGVtZW50VG9SZW1vdmUpID09PSAtMSk7IC8vIHRydWVcbiAgICAgICAgICogICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAyOiBSZW1vdmluZyBhIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMgYnkgcmVmZXJlbmNlPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiB2YXIgZWxlbWVudHNUb1JlbW92ZSA9IGNvbnRhaW5lckVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlZ29yeS1hJyk7XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKGVsZW1lbnRzVG9SZW1vdmUubGVuZ3RoKSAvLyAzXG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLnJlbW92ZShlbGVtZW50c1RvUmVtb3ZlKVxuICAgICAgICAgKiAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgKiAgICAgICAgICBjb25zb2xlLmxvZyhjb250YWluZXJFbC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnktYScpLmxlbmd0aCk7IC8vIDBcbiAgICAgICAgICogICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAzOiBSZW1vdmluZyBvbmUgb3IgbW9yZSBlbGVtZW50cyBieSBzZWxlY3RvcjwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIucmVtb3ZlKCcuY2F0ZWdvcnktYScpXG4gICAgICAgICAqICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAqICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRhaW5lckVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlZ29yeS1hJykubGVuZ3RoKTsgLy8gMFxuICAgICAgICAgKiAgICAgIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDQ6IFJlbW92aW5nIGFuIGVsZW1lbnQgYnkgaW5kZXg8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKG1peGVyLmdldFN0YXRlLnRvdGFsU2hvdyk7IC8vIDRcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gUmVtb3ZlIHRoZSBlbGVtZW50IGF0IGluZGV4IDNcbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIucmVtb3ZlKDMpXG4gICAgICAgICAqICAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICogICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudG90YWxTaG93KTsgLy8gM1xuICAgICAgICAgKiAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5zaG93WzNdKTsgLy8gdW5kZWZpbmVkXG4gICAgICAgICAqICAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICAgICAgeyhIVE1MRWxlbWVudHxBcnJheS48SFRNTEVsZW1lbnQ+fHN0cmluZ3xudW1iZXIpfSAgICBlbGVtZW50c1xuICAgICAgICAgKiAgICAgIEEgcmVmZXJlbmNlIHRvIGEgc2luZ2xlIGVsZW1lbnQgdG8gcmVtb3ZlLCBhbiBhcnJheS1saWtlIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMsIGEgc2VsZWN0b3Igc3RyaW5nLCBvciB0aGUgaW5kZXggb2YgYW4gZWxlbWVudCB0byByZW1vdmUuXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7Ym9vbGVhbn0gICBbYW5pbWF0ZT10cnVlXVxuICAgICAgICAgKiAgICAgIEFuIG9wdGlvbmFsIGJvb2xlYW4gZGljdGF0aW5nIHdoZXRoZXIgdGhlIG9wZXJhdGlvbiBzaG91bGQgYW5pbWF0ZSwgb3Igb2NjdXIgc3luY3Jvbm91c2x5IHdpdGggbm8gYW5pbWF0aW9uLiBgdHJ1ZWAgYnkgZGVmYXVsdC5cbiAgICAgICAgICogQHBhcmFtICAgICAgIHtmdW5jdGlvbn0gIFtjYWxsYmFjaz1udWxsXVxuICAgICAgICAgKiAgICAgIEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIG9wZXJhdGlvbiBoYXMgY29tcGxldGVkLlxuICAgICAgICAgKiBAcmV0dXJuICAgICAge1Byb21pc2UuPG1peGl0dXAuU3RhdGU+fVxuICAgICAgICAgKiAgICAgIEEgcHJvbWlzZSByZXNvbHZpbmcgd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBvYmplY3QuXG4gICAgICAgICAqL1xuXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICAgICAgYXJncyA9IHNlbGYucGFyc2VSZW1vdmVBcmdzKGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLm11bHRpbWl4KHtcbiAgICAgICAgICAgICAgICByZW1vdmU6IGFyZ3MuY29tbWFuZFxuICAgICAgICAgICAgfSwgYXJncy5hbmltYXRlLCBhcmdzLmNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0cmlldmVzIHRoZSB0aGUgdmFsdWUgb2YgYW55IHByb3BlcnR5IG9yIHN1Yi1vYmplY3Qgd2l0aGluIHRoZSBjdXJyZW50XG4gICAgICAgICAqIG1peGl0dXAgY29uZmlndXJhdGlvbiwgb3IgdGhlIHdob2xlIGNvbmZpZ3VyYXRpb24gb2JqZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAuZ2V0Q29uZmlnKFtzdHJpbmdLZXldKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDE6IHJldHJpZXZlIHRoZSBlbnRpcmUgY29uZmlndXJhdGlvbiBvYmplY3Q8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBjb25maWcgPSBtaXhlci5nZXRDb25maWcoKTsgLy8gQ29uZmlnIHsgLi4uIH1cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZSAyOiByZXRyaWV2ZSBhIG5hbWVkIHN1Yi1vYmplY3Qgb2YgY29uZmlndXJhdGlvbiBvYmplY3Q8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBhbmltYXRpb24gPSBtaXhlci5nZXRDb25maWcoJ2FuaW1hdGlvbicpOyAvLyBDb25maWdBbmltYXRpb24geyAuLi4gfVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDM6IHJldHJpZXZlIGEgdmFsdWUgb2YgY29uZmlndXJhdGlvbiBvYmplY3QgdmlhIGEgZG90LW5vdGF0aW9uIHN0cmluZyBrZXk8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBlZmZlY3RzID0gbWl4ZXIuZ2V0Q29uZmlnKCdhbmltYXRpb24uZWZmZWN0cycpOyAvLyAnZmFkZSBzY2FsZSdcbiAgICAgICAgICpcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgICAgIDIuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgICAgICB7c3RyaW5nfSAgICBbc3RyaW5nS2V5XSAgICBBIFwiZG90LW5vdGF0aW9uXCIgc3RyaW5nIGtleVxuICAgICAgICAgKiBAcmV0dXJuICAgICAgeyp9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGdldENvbmZpZzogZnVuY3Rpb24oc3RyaW5nS2V5KSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgdmFsdWUgICA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICghc3RyaW5nS2V5KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBzZWxmLmNvbmZpZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBoLmdldFByb3BlcnR5KHNlbGYuY29uZmlnLCBzdHJpbmdLZXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jYWxsRmlsdGVycygndmFsdWVHZXRDb25maWcnLCB2YWx1ZSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVXBkYXRlcyB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgbWl4ZXIsIGFmdGVyIGl0IGhhcyBiZWVuIGluc3RhbnRpYXRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogU2VlIHRoZSBDb25maWd1cmF0aW9uIE9iamVjdCBkb2N1bWVudGF0aW9uIGZvciBhIGZ1bGwgbGlzdCBvZiBhdmlsYWJsZVxuICAgICAgICAgKiBjb25maWd1cmF0aW9uIG9wdGlvbnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIC5jb25maWd1cmUoY29uZmlnKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeGFtcGxlIDE6IFVwZGF0aW5nIGFuaW1hdGlvbiBvcHRpb25zPC9jYXB0aW9uPlxuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5jb25maWd1cmUoe1xuICAgICAgICAgKiAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAqICAgICAgICAgZWZmZWN0czogJ2ZhZGUgdHJhbnNsYXRlWCgtMTAwJSknLFxuICAgICAgICAgKiAgICAgICAgIGR1cmF0aW9uOiAzMDBcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGUgMjogUmVtb3ZpbmcgYSBjYWxsYmFjayBhZnRlciBpdCBoYXMgYmVlbiBzZXQ8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIHZhciBtaXhlcjtcbiAgICAgICAgICpcbiAgICAgICAgICogZnVuY3Rpb24gaGFuZGxlTWl4RW5kT25jZSgpIHtcbiAgICAgICAgICogICAgIC8vIERvIHNvbWV0aGluZyAuLlxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gVGhlbiBudWxsaWZ5IHRoZSBjYWxsYmFja1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgbWl4ZXIuY29uZmlndXJlKHtcbiAgICAgICAgICogICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICogICAgICAgICAgICAgb25NaXhFbmQ6IG51bGxcbiAgICAgICAgICogICAgICAgICB9XG4gICAgICAgICAqICAgICB9KTtcbiAgICAgICAgICogfTtcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gSW5zdGFudGlhdGUgYSBtaXhlciB3aXRoIGEgY2FsbGJhY2sgZGVmaW5lZFxuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlciA9IG1peGl0dXAoY29udGFpbmVyRWwsIHtcbiAgICAgICAgICogICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgKiAgICAgICAgIG9uTWl4RW5kOiBoYW5kbGVNaXhFbmRPbmNlXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAgICAgIHtvYmplY3R9ICAgIGNvbmZpZ1xuICAgICAgICAgKiAgICAgIEFuIG9iamVjdCBjb250YWluaW5nIG9uZSBvZiBtb3JlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAgICAgICAgICogQHJldHVybiAgICAgIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBjb25maWd1cmU6IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVDb25maWd1cmUnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBoLmV4dGVuZChzZWxmLmNvbmZpZywgY29uZmlnLCB0cnVlLCB0cnVlKTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJDb25maWd1cmUnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZVxuICAgICAgICAgKiBtaXhlci4gU2VlIHRoZSBTdGF0ZSBPYmplY3QgZG9jdW1lbnRhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogTkI6IFN0YXRlIG9iamVjdHMgYXJlIGltbXV0YWJsZSBhbmQgc2hvdWxkIHRoZXJlZm9yZSBiZSByZWdlbmVyYXRlZFxuICAgICAgICAgKiBhZnRlciBhbnkgb3BlcmF0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAuZ2V0U3RhdGUoKTtcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogUmV0cmlldmluZyBhIHN0YXRlIG9iamVjdDwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogdmFyIHN0YXRlID0gbWl4ZXIuZ2V0U3RhdGUoKTtcbiAgICAgICAgICpcbiAgICAgICAgICogY29uc29sZS5sb2coc3RhdGUudG90YWxTaG93ICsgJ3RhcmdldHMgYXJlIGN1cnJlbnRseSBzaG93bicpO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAgICAgMi4wLjBcbiAgICAgICAgICogQHJldHVybiAgICAgIHttaXhpdHVwLlN0YXRlfSBBbiBvYmplY3QgcmVmbGVjdGluZyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgbWl4ZXIuXG4gICAgICAgICAqL1xuXG4gICAgICAgIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBzdGF0ZSAgID0gbnVsbDtcblxuICAgICAgICAgICAgc3RhdGUgPSBuZXcgbWl4aXR1cC5TdGF0ZSgpO1xuXG4gICAgICAgICAgICBoLmV4dGVuZChzdGF0ZSwgc2VsZi5zdGF0ZSk7XG5cbiAgICAgICAgICAgIGguZnJlZXplKHN0YXRlKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuY2FsbEZpbHRlcnMoJ3N0YXRlR2V0U3RhdGUnLCBzdGF0ZSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRm9yY2VzIHRoZSByZS1pbmRleGluZyBhbGwgdGFyZ2V0cyB3aXRoaW4gdGhlIGNvbnRhaW5lci5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBzaG91bGQgb25seSBiZSB1c2VkIGlmIHNvbWUgb3RoZXIgcGllY2Ugb2YgY29kZSBpbiB5b3VyIGFwcGxpY2F0aW9uXG4gICAgICAgICAqIGhhcyBtYW5pcHVsYXRlZCB0aGUgY29udGVudHMgb2YgeW91ciBjb250YWluZXIsIHdoaWNoIHNob3VsZCBiZSBhdm9pZGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB5b3UgbmVlZCB0byBhZGQgb3IgcmVtb3ZlIHRhcmdldCBlbGVtZW50cyBmcm9tIHRoZSBjb250YWluZXIsIHVzZVxuICAgICAgICAgKiB0aGUgYnVpbHQtaW4gYC5pbnNlcnQoKWAgb3IgYC5yZW1vdmUoKWAgbWV0aG9kcywgYW5kIE1peEl0VXAgd2lsbCBrZWVwXG4gICAgICAgICAqIGl0c2VsZiB1cCB0byBkYXRlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAuZm9yY2VSZWZyZXNoKClcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogRm9yY2UgcmVmcmVzaGluZyB0aGUgbWl4ZXIgYWZ0ZXIgZXh0ZXJuYWwgRE9NIG1hbmlwdWxhdGlvbjwvY2FwdGlvbj5cbiAgICAgICAgICpcbiAgICAgICAgICogY29uc29sZS5sb2cobWl4ZXIuZ2V0U3RhdGUoKS50b3RhbFNob3cpOyAvLyAzXG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIEFuIGVsZW1lbnQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBjb250YWluZXIgdmlhIHNvbWUgZXh0ZXJuYWwgRE9NIG1hbmlwdWxhdGlvbiBjb2RlOlxuICAgICAgICAgKlxuICAgICAgICAgKiBjb250YWluZXJFbC5yZW1vdmVDaGlsZChjb250YWluZXJFbC5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIFRoZSBtaXhlciBkb2VzIG5vdCBrbm93IHRoYXQgdGhlIG51bWJlciBvZiB0YXJnZXRzIGhhcyBjaGFuZ2VkOlxuICAgICAgICAgKlxuICAgICAgICAgKiBjb25zb2xlLmxvZyhtaXhlci5nZXRTdGF0ZSgpLnRvdGFsU2hvdyk7IC8vIDNcbiAgICAgICAgICpcbiAgICAgICAgICogbWl4ZXIuZm9yY2VSZWZyZXNoKCk7XG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIEFmdGVyIGZvcmNlUmVmcmVzaCwgdGhlIG1peGVyIGlzIGluIHN5bmMgYWdhaW46XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKG1peGVyLmdldFN0YXRlKCkudG90YWxTaG93KTsgLy8gMlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgMi4xLjJcbiAgICAgICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgZm9yY2VSZWZyZXNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgc2VsZi5pbmRleFRhcmdldHMoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRm9yY2VzIHRoZSByZS1yZW5kZXJpbmcgb2YgYWxsIHRhcmdldHMgd2hlbiB1c2luZyB0aGUgRGF0YXNldCBBUEkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEJ5IGRlZmF1bHQsIHRhcmdldHMgYXJlIG9ubHkgcmUtcmVuZGVyZWQgd2hlbiBgZGF0YS5kaXJ0eUNoZWNrYCBpc1xuICAgICAgICAgKiBlbmFibGVkLCBhbmQgYW4gaXRlbSdzIGRhdGEgaGFzIGNoYW5nZWQgd2hlbiBgZGF0YXNldCgpYCBpcyBjYWxsZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSBgZm9yY2VSZW5kZXIoKWAgbWV0aG9kIGFsbG93cyBmb3IgdGhlIHJlLXJlbmRlcmluZyBvZiBhbGwgdGFyZ2V0c1xuICAgICAgICAgKiBpbiByZXNwb25zZSB0byBzb21lIGFyYml0cmFyeSBldmVudCwgc3VjaCBhcyB0aGUgY2hhbmdpbmcgb2YgdGhlIHRhcmdldFxuICAgICAgICAgKiByZW5kZXIgZnVuY3Rpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIFRhcmdldHMgYXJlIHJlbmRlcmVkIGFnYWluc3QgdGhlaXIgZXhpc3RpbmcgZGF0YS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogLmZvcmNlUmVuZGVyKClcbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGUgPGNhcHRpb24+RXhhbXBsZTogRm9yY2UgcmVuZGVyIHRhcmdldHMgYWZ0ZXIgY2hhbmdpbmcgdGhlIHRhcmdldCByZW5kZXIgZnVuY3Rpb248L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIGNvbnNvbGUubG9nKGNvbnRhaW5lci5pbm5lckhUTUwpOyAvLyAuLi4gJmx0O3NwYW4gY2xhc3M9XCJtaXhcIiZndDtGb28mbHQ7L3NwYW4mZ3Q7IC4uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5jb25maWd1cmUoe1xuICAgICAgICAgKiAgICAgcmVuZGVyOiB7XG4gICAgICAgICAqICAgICAgICAgdGFyZ2V0OiAoaXRlbSkgPT4gYCZsdDthIGhyZWY9XCIvJHtpdGVtLnNsdWd9L1wiIGNsYXNzPVwibWl4XCImZ3Q7JHtpdGVtLnRpdGxlfSZsdDsvYSZndDtgXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBtaXhlci5mb3JjZVJlbmRlcigpO1xuICAgICAgICAgKlxuICAgICAgICAgKiBjb25zb2xlLmxvZyhjb250YWluZXIuaW5uZXJIVE1MKTsgLy8gLi4uICZsdDthIGhyZWY9XCIvZm9vL1wiIGNsYXNzPVwibWl4XCImZ3Q7Rm9vJmx0Oy9hJmd0OyAuLi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlIDMuMi4xXG4gICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGZvcmNlUmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB0YXJnZXQgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBlbCAgICAgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBpZCAgICAgID0gJyc7XG5cbiAgICAgICAgICAgIGZvciAoaWQgaW4gc2VsZi5jYWNoZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYuY2FjaGVbaWRdO1xuXG4gICAgICAgICAgICAgICAgZWwgPSB0YXJnZXQucmVuZGVyKHRhcmdldC5kYXRhKTtcblxuICAgICAgICAgICAgICAgIGlmIChlbCAhPT0gdGFyZ2V0LmRvbS5lbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGFyZ2V0IGVsZW1lbnQgcmVmZXJlbmNlXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5pc0luRG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQudW5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZG9tLnBhcmVudC5yZXBsYWNlQ2hpbGQoZWwsIHRhcmdldC5kb20uZWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQuaXNTaG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5kb20uZWwgPSBlbDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmlzSW5Eb20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5iaW5kRXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuc3RhdGUgPSBzZWxmLmJ1aWxkU3RhdGUoc2VsZi5sYXN0T3BlcmF0aW9uKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyBtaXhpdHVwIGZ1bmN0aW9uYWxpdHkgZnJvbSB0aGUgY29udGFpbmVyLCB1bmJpbmRzIGFsbCBjb250cm9sXG4gICAgICAgICAqIGV2ZW50IGhhbmRsZXJzLCBhbmQgZGVsZXRlcyB0aGUgbWl4ZXIgaW5zdGFuY2UgZnJvbSBNaXhJdFVwJ3MgaW50ZXJuYWxcbiAgICAgICAgICogY2FjaGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgc2hvdWxkIGJlIHBlcmZvcm1lZCB3aGVuZXZlciBhIG1peGVyJ3MgY29udGFpbmVyIGlzIHJlbW92ZWQgZnJvbVxuICAgICAgICAgKiB0aGUgRE9NLCBzdWNoIGFzIGR1cmluZyBhIHBhZ2UgY2hhbmdlIGluIGEgc2luZ2xlIHBhZ2UgYXBwbGljYXRpb24sXG4gICAgICAgICAqIG9yIFJlYWN0J3MgYGNvbXBvbmVudFdpbGxVbm1vdW50KClgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAuZGVzdHJveShbY2xlYW5VcF0pXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxjYXB0aW9uPkV4YW1wbGU6IERlc3Ryb3lpbmcgdGhlIG1peGVyIGJlZm9yZSByZW1vdmluZyBpdHMgY29udGFpbmVyIGVsZW1lbnQ8L2NhcHRpb24+XG4gICAgICAgICAqXG4gICAgICAgICAqIG1peGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICpcbiAgICAgICAgICogY29udGFpbmVyRWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChjb250YWluZXJFbCk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDIuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtib29sZWFufSAgIFtjbGVhblVwPWZhbHNlXVxuICAgICAgICAgKiAgICAgQW4gb3B0aW9uYWwgYm9vbGVhbiBkaWN0YXRpbmcgd2hldGhlciBvciBub3QgdG8gY2xlYW4gdXAgYW55IGlubGluZSBgZGlzcGxheTogbm9uZTtgIHN0eWxpbmcgYXBwbGllZCB0byBoaWRkZW4gdGFyZ2V0cy5cbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKGNsZWFuVXApIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBjb250cm9sID0gbnVsbCxcbiAgICAgICAgICAgICAgICB0YXJnZXQgID0gbnVsbCxcbiAgICAgICAgICAgICAgICBpICAgICAgID0gMDtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlRGVzdHJveScsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGNvbnRyb2wgPSBzZWxmLmNvbnRyb2xzW2ldOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb250cm9sLnJlbW92ZUJpbmRpbmcoc2VsZik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IHRhcmdldCA9IHNlbGYudGFyZ2V0c1tpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNsZWFuVXApIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnNob3coKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0YXJnZXQudW5iaW5kRXZlbnRzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxmLmRvbS5jb250YWluZXIuaWQubWF0Y2goL15NaXhJdFVwLykpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5jb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgbWl4aXR1cC5pbnN0YW5jZXNbc2VsZi5pZF07XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyRGVzdHJveScsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuSU1vdmVEYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMucG9zSW4gICAgICAgICAgPSBudWxsO1xuICAgICAgICB0aGlzLnBvc091dCAgICAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcGVyYXRpb24gICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgICAgICAgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXR1c0NoYW5nZSAgID0gJyc7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gICAgICAgPSAtMTtcbiAgICAgICAgdGhpcy5zdGFnZ2VySW5kZXggICA9IC0xO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLklNb3ZlRGF0YSk7XG5cbiAgICBtaXhpdHVwLklNb3ZlRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5JTW92ZURhdGEucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbWl4aXR1cC5JTW92ZURhdGE7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLlRhcmdldERvbSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtaXhpdHVwLkJhc2UuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVDb25zdHJ1Y3QnKTtcblxuICAgICAgICB0aGlzLmVsID0gbnVsbDtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5UYXJnZXREb20pO1xuXG4gICAgbWl4aXR1cC5UYXJnZXREb20ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLkJhc2UucHJvdG90eXBlKTtcblxuICAgIG1peGl0dXAuVGFyZ2V0RG9tLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG1peGl0dXAuVGFyZ2V0RG9tO1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuVGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMuaWQgICAgICAgICA9ICcnO1xuICAgICAgICB0aGlzLnNvcnRTdHJpbmcgPSAnJztcbiAgICAgICAgdGhpcy5taXhlciAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYWxsYmFjayAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc1Nob3duICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNCb3VuZCAgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRXhjbHVkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0luRG9tICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFuZGxlciAgICA9IG51bGw7XG4gICAgICAgIHRoaXMub3BlcmF0aW9uICA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YSAgICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMuZG9tICAgICAgICA9IG5ldyBtaXhpdHVwLlRhcmdldERvbSgpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLlRhcmdldCk7XG5cbiAgICBtaXhpdHVwLlRhcmdldC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgaC5leHRlbmQobWl4aXR1cC5UYXJnZXQucHJvdG90eXBlLCB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBtaXhpdHVwLlRhcmdldCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5pdGlhbGlzZXMgYSBuZXdseSBpbnN0YW50aWF0ZWQgVGFyZ2V0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAgeyhFbGVtZW50fG51bGwpfSAgICBlbFxuICAgICAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgICAgICAgICAgIG1peGVyXG4gICAgICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgICAgICAgICAgW2RhdGFdXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBpbml0OiBmdW5jdGlvbihlbCwgbWl4ZXIsIGRhdGEpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgICAgICBpZCAgID0gJyc7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUluaXQnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBzZWxmLm1peGVyID0gbWl4ZXI7XG5cbiAgICAgICAgICAgIGlmICghZWwpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBubyBlbGVtZW50IGlzIHByb3ZpZGVkLCByZW5kZXIgaXRcblxuICAgICAgICAgICAgICAgIGVsID0gc2VsZi5yZW5kZXIoZGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuY2FjaGVEb20oZWwpO1xuXG4gICAgICAgICAgICBzZWxmLmJpbmRFdmVudHMoKTtcblxuICAgICAgICAgICAgaWYgKHNlbGYuZG9tLmVsLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIHNlbGYuaXNTaG93biA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkYXRhICYmIG1peGVyLmNvbmZpZy5kYXRhLnVpZEtleSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGlkID0gZGF0YVttaXhlci5jb25maWcuZGF0YS51aWRLZXldKSA9PT0gJ3VuZGVmaW5lZCcgfHwgaWQudG9TdHJpbmcoKS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobWl4aXR1cC5tZXNzYWdlcy5lcnJvckRhdGFzZXRJbnZhbGlkVWlkS2V5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpZEtleTogbWl4ZXIuY29uZmlnLmRhdGEudWlkS2V5XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWxmLmlkICAgICA9IGlkO1xuICAgICAgICAgICAgICAgIHNlbGYuZGF0YSAgID0gZGF0YTtcblxuICAgICAgICAgICAgICAgIG1peGVyLmNhY2hlW2lkXSA9IHNlbGY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVySW5pdCcsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbmRlcnMgdGhlIHRhcmdldCBlbGVtZW50IHVzaW5nIGEgdXNlci1kZWZpbmVkIHJlbmRlcmVyIGZ1bmN0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4xLjRcbiAgICAgICAgICogQHBhcmFtICAge29iamVjdH0gZGF0YVxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgcmVuZGVyICA9IG51bGwsXG4gICAgICAgICAgICAgICAgZWwgICAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgdGVtcCAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgb3V0cHV0ICA9ICcnO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVSZW5kZXInLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICByZW5kZXIgPSBzZWxmLmNhbGxGaWx0ZXJzKCdyZW5kZXJSZW5kZXInLCBzZWxmLm1peGVyLmNvbmZpZy5yZW5kZXIudGFyZ2V0LCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobWl4aXR1cC5tZXNzYWdlcy5lcnJvckRhdGFzZXRSZW5kZXJlck5vdFNldCgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3V0cHV0ID0gcmVuZGVyKGRhdGEpO1xuXG4gICAgICAgICAgICBpZiAob3V0cHV0ICYmIHR5cGVvZiBvdXRwdXQgPT09ICdvYmplY3QnICYmIGguaXNFbGVtZW50KG91dHB1dCkpIHtcbiAgICAgICAgICAgICAgICBlbCA9IG91dHB1dDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG91dHB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGVtcC5pbm5lckhUTUwgPSBvdXRwdXQ7XG5cbiAgICAgICAgICAgICAgICBlbCA9IHRlbXAuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNhbGxGaWx0ZXJzKCdlbFJlbmRlcicsIGVsLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWNoZXMgcmVmZXJlbmNlcyBvZiBET00gZWxlbWVudHMgbmVjY2Vzc2FyeSBmb3IgdGhlIHRhcmdldCdzIGZ1bmN0aW9uYWxpdHkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAc2luY2UgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICB7RWxlbWVudH0gZWxcbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGNhY2hlRG9tOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVDYWNoZURvbScsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHNlbGYuZG9tLmVsID0gZWw7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyQ2FjaGVEb20nLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAge3N0cmluZ30gICAgYXR0cmlidXRlTmFtZVxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgZ2V0U29ydFN0cmluZzogZnVuY3Rpb24oYXR0cmlidXRlTmFtZSkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgPSBzZWxmLmRvbS5lbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIGF0dHJpYnV0ZU5hbWUpIHx8ICcnO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVHZXRTb3J0U3RyaW5nJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgdmFsdWUgPSBpc05hTih2YWx1ZSAqIDEpID9cbiAgICAgICAgICAgICAgICB2YWx1ZS50b0xvd2VyQ2FzZSgpIDpcbiAgICAgICAgICAgICAgICB2YWx1ZSAqIDE7XG5cbiAgICAgICAgICAgIHNlbGYuc29ydFN0cmluZyA9IHZhbHVlO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlckdldFNvcnRTdHJpbmcnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVTaG93JywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaWYgKCFzZWxmLmlzU2hvd24pIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5lbC5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cbiAgICAgICAgICAgICAgICBzZWxmLmlzU2hvd24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlclNob3cnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGhpZGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVIaWRlJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaWYgKHNlbGYuaXNTaG93bikge1xuICAgICAgICAgICAgICAgIHNlbGYuZG9tLmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgICAgICBzZWxmLmlzU2hvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJIaWRlJywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHttaXhpdHVwLklNb3ZlRGF0YX0gbW92ZURhdGFcbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIG1vdmU6IGZ1bmN0aW9uKG1vdmVEYXRhKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZU1vdmUnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBpZiAoIXNlbGYuaXNFeGNsdWRlZCkge1xuICAgICAgICAgICAgICAgIHNlbGYubWl4ZXIudGFyZ2V0c01vdmVkKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuYXBwbHlTdHlsZXNJbihtb3ZlRGF0YSk7XG5cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmFwcGx5U3R5bGVzT3V0KG1vdmVEYXRhKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlck1vdmUnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAge29iamVjdH0gICAgcG9zRGF0YVxuICAgICAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgICBtdWx0aXBsaWVyXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBhcHBseVR3ZWVuOiBmdW5jdGlvbihwb3NEYXRhLCBtdWx0aXBsaWVyKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZSAgICAgICAgICAgID0gJycsXG4gICAgICAgICAgICAgICAgdHdlZW5EYXRhICAgICAgICAgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgICAgIHBvc0luICAgICAgICAgICAgICAgICAgID0gcG9zRGF0YS5wb3NJbixcbiAgICAgICAgICAgICAgICBjdXJyZW50VHJhbnNmb3JtVmFsdWVzICA9IFtdLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXMgICAgICAgICAgID0gbmV3IG1peGl0dXAuU3R5bGVEYXRhKCksXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgICAgICAgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlQXBwbHlUd2VlbicsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXMueCAgICAgPSBwb3NJbi54O1xuICAgICAgICAgICAgY3VycmVudFZhbHVlcy55ICAgICA9IHBvc0luLnk7XG5cbiAgICAgICAgICAgIGlmIChtdWx0aXBsaWVyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5oaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFzZWxmLmlzU2hvd24pIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNob3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgcHJvcGVydHlOYW1lID0gbWl4aXR1cC5mZWF0dXJlcy5UV0VFTkFCTEVbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIHR3ZWVuRGF0YSA9IHBvc0RhdGEudHdlZW5EYXRhW3Byb3BlcnR5TmFtZV07XG5cbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlOYW1lID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0d2VlbkRhdGEpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXMueCA9IHBvc0luLnggKyAodHdlZW5EYXRhICogbXVsdGlwbGllcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eU5hbWUgPT09ICd5Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXR3ZWVuRGF0YSkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlcy55ID0gcG9zSW4ueSArICh0d2VlbkRhdGEgKiBtdWx0aXBsaWVyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR3ZWVuRGF0YSBpbnN0YW5jZW9mIG1peGl0dXAuVHJhbnNmb3JtRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXR3ZWVuRGF0YS52YWx1ZSkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlc1twcm9wZXJ0eU5hbWVdLnZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc0luW3Byb3BlcnR5TmFtZV0udmFsdWUgKyAodHdlZW5EYXRhLnZhbHVlICogbXVsdGlwbGllcik7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlc1twcm9wZXJ0eU5hbWVdLnVuaXQgID0gdHdlZW5EYXRhLnVuaXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYW5zZm9ybVZhbHVlcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lICsgJygnICsgY3VycmVudFZhbHVlc1twcm9wZXJ0eU5hbWVdLnZhbHVlICsgdHdlZW5EYXRhLnVuaXQgKyAnKSdcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXR3ZWVuRGF0YSkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlc1twcm9wZXJ0eU5hbWVdID0gcG9zSW5bcHJvcGVydHlOYW1lXSArICh0d2VlbkRhdGEgKiBtdWx0aXBsaWVyKTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRvbS5lbC5zdHlsZVtwcm9wZXJ0eU5hbWVdID0gY3VycmVudFZhbHVlc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZXMueCB8fCBjdXJyZW50VmFsdWVzLnkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VHJhbnNmb3JtVmFsdWVzLnVuc2hpZnQoJ3RyYW5zbGF0ZSgnICsgY3VycmVudFZhbHVlcy54ICsgJ3B4LCAnICsgY3VycmVudFZhbHVlcy55ICsgJ3B4KScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3VycmVudFRyYW5zZm9ybVZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5lbC5zdHlsZVttaXhpdHVwLmZlYXR1cmVzLnRyYW5zZm9ybVByb3BdID0gY3VycmVudFRyYW5zZm9ybVZhbHVlcy5qb2luKCcgJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2FmdGVyQXBwbHlUd2VlbicsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFwcGxpZXMgdGhlIGluaXRpYWwgc3R5bGluZyB0byBhIHRhcmdldCBlbGVtZW50IGJlZm9yZSBhbnkgdHJhbnNpdGlvblxuICAgICAgICAgKiBpcyBhcHBsaWVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHBhcmFtICAge21peGl0dXAuSU1vdmVEYXRhfSBtb3ZlRGF0YVxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgYXBwbHlTdHlsZXNJbjogZnVuY3Rpb24obW92ZURhdGEpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHBvc0luICAgICAgICAgICA9IG1vdmVEYXRhLnBvc0luLFxuICAgICAgICAgICAgICAgIGlzRmFkaW5nICAgICAgICA9IHNlbGYubWl4ZXIuZWZmZWN0c0luLm9wYWNpdHkgIT09IDEsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtVmFsdWVzID0gW107XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUFwcGx5U3R5bGVzSW4nLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICB0cmFuc2Zvcm1WYWx1ZXMucHVzaCgndHJhbnNsYXRlKCcgKyBwb3NJbi54ICsgJ3B4LCAnICsgcG9zSW4ueSArICdweCknKTtcblxuICAgICAgICAgICAgaWYgKHNlbGYubWl4ZXIuY29uZmlnLmFuaW1hdGlvbi5hbmltYXRlUmVzaXplVGFyZ2V0cykge1xuICAgICAgICAgICAgICAgIGlmIChtb3ZlRGF0YS5zdGF0dXNDaGFuZ2UgIT09ICdzaG93Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCBhcHBseSBwb3NJbiB3aWR0aCBvciBoZWlnaHQgb3Igc2hvd2luZywgYXMgd2lsbCBiZSAwXG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kb20uZWwuc3R5bGUud2lkdGggID0gcG9zSW4ud2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRvbS5lbC5zdHlsZS5oZWlnaHQgPSBwb3NJbi5oZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGYuZG9tLmVsLnN0eWxlLm1hcmdpblJpZ2h0ICA9IHBvc0luLm1hcmdpblJpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5lbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBwb3NJbi5tYXJnaW5Cb3R0b20gKyAncHgnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpc0ZhZGluZyAmJiAoc2VsZi5kb20uZWwuc3R5bGUub3BhY2l0eSA9IHBvc0luLm9wYWNpdHkpO1xuXG4gICAgICAgICAgICBpZiAobW92ZURhdGEuc3RhdHVzQ2hhbmdlID09PSAnc2hvdycpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1WYWx1ZXMgPSB0cmFuc2Zvcm1WYWx1ZXMuY29uY2F0KHNlbGYubWl4ZXIudHJhbnNmb3JtSW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmRvbS5lbC5zdHlsZVttaXhpdHVwLmZlYXR1cmVzLnRyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtVmFsdWVzLmpvaW4oJyAnKTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJBcHBseVN0eWxlc0luJywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQXBwbGllcyBhIHRyYW5zaXRpb24gZm9sbG93ZWQgYnkgdGhlIGZpbmFsIHN0eWxlcyBmb3IgdGhlIGVsZW1lbnQgdG9cbiAgICAgICAgICogdHJhbnNpdGlvbiB0b3dhcmRzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHBhcmFtICAge21peGl0dXAuSU1vdmVEYXRhfSBtb3ZlRGF0YVxuICAgICAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgYXBwbHlTdHlsZXNPdXQ6IGZ1bmN0aW9uKG1vdmVEYXRhKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uUnVsZXMgPSBbXSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1WYWx1ZXMgPSBbXSxcbiAgICAgICAgICAgICAgICBpc1Jlc2l6aW5nICAgICAgPSBzZWxmLm1peGVyLmNvbmZpZy5hbmltYXRpb24uYW5pbWF0ZVJlc2l6ZVRhcmdldHMsXG4gICAgICAgICAgICAgICAgaXNGYWRpbmcgICAgICAgID0gdHlwZW9mIHNlbGYubWl4ZXIuZWZmZWN0c0luLm9wYWNpdHkgIT09ICd1bmRlZmluZWQnO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVBcHBseVN0eWxlc091dCcsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIC8vIEJ1aWxkIHRoZSB0cmFuc2l0aW9uIHJ1bGVzXG5cbiAgICAgICAgICAgIHRyYW5zaXRpb25SdWxlcy5wdXNoKHNlbGYud3JpdGVUcmFuc2l0aW9uUnVsZShcbiAgICAgICAgICAgICAgICBtaXhpdHVwLmZlYXR1cmVzLnRyYW5zZm9ybVJ1bGUsXG4gICAgICAgICAgICAgICAgbW92ZURhdGEuc3RhZ2dlckluZGV4XG4gICAgICAgICAgICApKTtcblxuICAgICAgICAgICAgaWYgKG1vdmVEYXRhLnN0YXR1c0NoYW5nZSAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvblJ1bGVzLnB1c2goc2VsZi53cml0ZVRyYW5zaXRpb25SdWxlKFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eScsXG4gICAgICAgICAgICAgICAgICAgIG1vdmVEYXRhLnN0YWdnZXJJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgbW92ZURhdGEuZHVyYXRpb25cbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzUmVzaXppbmcpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uUnVsZXMucHVzaChzZWxmLndyaXRlVHJhbnNpdGlvblJ1bGUoXG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCcsXG4gICAgICAgICAgICAgICAgICAgIG1vdmVEYXRhLnN0YWdnZXJJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgbW92ZURhdGEuZHVyYXRpb25cbiAgICAgICAgICAgICAgICApKTtcblxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25SdWxlcy5wdXNoKHNlbGYud3JpdGVUcmFuc2l0aW9uUnVsZShcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCcsXG4gICAgICAgICAgICAgICAgICAgIG1vdmVEYXRhLnN0YWdnZXJJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgbW92ZURhdGEuZHVyYXRpb25cbiAgICAgICAgICAgICAgICApKTtcblxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25SdWxlcy5wdXNoKHNlbGYud3JpdGVUcmFuc2l0aW9uUnVsZShcbiAgICAgICAgICAgICAgICAgICAgJ21hcmdpbicsXG4gICAgICAgICAgICAgICAgICAgIG1vdmVEYXRhLnN0YWdnZXJJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgbW92ZURhdGEuZHVyYXRpb25cbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgbm8gY2FsbGJhY2sgd2FzIHByb3ZpZGVkLCB0aGUgZWxlbWVudCB3aWxsXG4gICAgICAgICAgICAvLyBub3QgdHJhbnNpdGlvbiBpbiBhbnkgd2F5IHNvIHRhZyBpdCBhcyBcImltbW92YWJsZVwiXG5cbiAgICAgICAgICAgIGlmICghbW92ZURhdGEuY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1peGVyLnRhcmdldHNJbW1vdmFibGUrKztcblxuICAgICAgICAgICAgICAgIGlmIChzZWxmLm1peGVyLnRhcmdldHNNb3ZlZCA9PT0gc2VsZi5taXhlci50YXJnZXRzSW1tb3ZhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0b3RhbCB0YXJnZXRzIG1vdmVkIGlzIGVxdWFsIHRvIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBudW1iZXIgb2YgaW1tb3ZhYmxlIHRhcmdldHMsIHRoZSBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgLy8gc2hvdWxkIGJlIGNvbnNpZGVyZWQgZmluaXNoZWRcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLm1peGVyLmNsZWFuVXAobW92ZURhdGEub3BlcmF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSB0YXJnZXQgd2lsbCB0cmFuc2l0aW9uIGluIHNvbWUgZmFzaW9uLFxuICAgICAgICAgICAgLy8gYXNzaWduIGEgY2FsbGJhY2sgZnVuY3Rpb25cblxuICAgICAgICAgICAgc2VsZi5vcGVyYXRpb24gPSBtb3ZlRGF0YS5vcGVyYXRpb247XG4gICAgICAgICAgICBzZWxmLmNhbGxiYWNrID0gbW92ZURhdGEuY2FsbGJhY2s7XG5cbiAgICAgICAgICAgIC8vIEFzIGxvbmcgYXMgdGhlIHRhcmdldCBpcyBub3QgZXhjbHVkZWQsIGluY3JlbWVudFxuICAgICAgICAgICAgLy8gdGhlIHRvdGFsIG51bWJlciBvZiB0YXJnZXRzIGJvdW5kXG5cbiAgICAgICAgICAgICFzZWxmLmlzRXhjbHVkZWQgJiYgc2VsZi5taXhlci50YXJnZXRzQm91bmQrKztcblxuICAgICAgICAgICAgLy8gVGFnIHRoZSB0YXJnZXQgYXMgYm91bmQgdG8gZGlmZmVyZW50aWF0ZSBmcm9tIHRyYW5zaXRpb25FbmRcbiAgICAgICAgICAgIC8vIGV2ZW50cyB0aGF0IG1heSBjb21lIGZyb20gc3R5bGVzaGVldCBkcml2ZW4gZWZmZWN0c1xuXG4gICAgICAgICAgICBzZWxmLmlzQm91bmQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgdHJhbnNpdGlvblxuXG4gICAgICAgICAgICBzZWxmLmFwcGx5VHJhbnNpdGlvbih0cmFuc2l0aW9uUnVsZXMpO1xuXG4gICAgICAgICAgICAvLyBBcHBseSB3aWR0aCwgaGVpZ2h0IGFuZCBtYXJnaW4gbmVnYXRpb25cblxuICAgICAgICAgICAgaWYgKGlzUmVzaXppbmcgJiYgbW92ZURhdGEucG9zT3V0LndpZHRoID4gMCAmJiBtb3ZlRGF0YS5wb3NPdXQuaGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICAgIHNlbGYuZG9tLmVsLnN0eWxlLndpZHRoICAgICAgICA9IG1vdmVEYXRhLnBvc091dC53aWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgc2VsZi5kb20uZWwuc3R5bGUuaGVpZ2h0ICAgICAgID0gbW92ZURhdGEucG9zT3V0LmhlaWdodCArICdweCc7XG4gICAgICAgICAgICAgICAgc2VsZi5kb20uZWwuc3R5bGUubWFyZ2luUmlnaHQgID0gbW92ZURhdGEucG9zT3V0Lm1hcmdpblJpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5lbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBtb3ZlRGF0YS5wb3NPdXQubWFyZ2luQm90dG9tICsgJ3B4JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzZWxmLm1peGVyLmNvbmZpZy5hbmltYXRpb24ubnVkZ2UgJiYgbW92ZURhdGEuc3RhdHVzQ2hhbmdlID09PSAnaGlkZScpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSBub3QgbnVkZ2luZywgdGhlIHRyYW5zbGF0aW9uIHNob3VsZCBiZVxuICAgICAgICAgICAgICAgIC8vIGFwcGxpZWQgYmVmb3JlIGFueSBvdGhlciB0cmFuc2Zvcm1zIHRvIHByZXZlbnRcbiAgICAgICAgICAgICAgICAvLyBsYXRlcmFsIG1vdmVtZW50XG5cbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1WYWx1ZXMucHVzaCgndHJhbnNsYXRlKCcgKyBtb3ZlRGF0YS5wb3NPdXQueCArICdweCwgJyArIG1vdmVEYXRhLnBvc091dC55ICsgJ3B4KScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBseSBmYWRlXG5cbiAgICAgICAgICAgIHN3aXRjaCAobW92ZURhdGEuc3RhdHVzQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnaGlkZSc6XG4gICAgICAgICAgICAgICAgICAgIGlzRmFkaW5nICYmIChzZWxmLmRvbS5lbC5zdHlsZS5vcGFjaXR5ID0gc2VsZi5taXhlci5lZmZlY3RzT3V0Lm9wYWNpdHkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVZhbHVlcyA9IHRyYW5zZm9ybVZhbHVlcy5jb25jYXQoc2VsZi5taXhlci50cmFuc2Zvcm1PdXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgICAgICAgICBpc0ZhZGluZyAmJiAoc2VsZi5kb20uZWwuc3R5bGUub3BhY2l0eSA9IDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgc2VsZi5taXhlci5jb25maWcuYW5pbWF0aW9uLm51ZGdlIHx8XG4gICAgICAgICAgICAgICAgKCFzZWxmLm1peGVyLmNvbmZpZy5hbmltYXRpb24ubnVkZ2UgJiYgbW92ZURhdGEuc3RhdHVzQ2hhbmdlICE9PSAnaGlkZScpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBPcHBvc2l0ZSBvZiBhYm92ZSAtIGFwcGx5IHRyYW5zbGF0ZSBhZnRlclxuICAgICAgICAgICAgICAgIC8vIG90aGVyIHRyYW5zZm9ybVxuXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtVmFsdWVzLnB1c2goJ3RyYW5zbGF0ZSgnICsgbW92ZURhdGEucG9zT3V0LnggKyAncHgsICcgKyBtb3ZlRGF0YS5wb3NPdXQueSArICdweCknKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgdHJhbnNmb3Jtc1xuXG4gICAgICAgICAgICBzZWxmLmRvbS5lbC5zdHlsZVttaXhpdHVwLmZlYXR1cmVzLnRyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtVmFsdWVzLmpvaW4oJyAnKTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJBcHBseVN0eWxlc091dCcsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbWJpbmVzIHRoZSBuYW1lIG9mIGEgQ1NTIHByb3BlcnR5IHdpdGggdGhlIGFwcHJvcHJpYXRlIGR1cmF0aW9uIGFuZCBkZWxheVxuICAgICAgICAgKiB2YWx1ZXMgdG8gY3JlYXRlZCBhIHZhbGlkIHRyYW5zaXRpb24gcnVsZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgIHByb3BlcnR5XG4gICAgICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICAgIHN0YWdnZXJJbmRleFxuICAgICAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgICBkdXJhdGlvblxuICAgICAgICAgKiBAcmV0dXJuICB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgICAgICB3cml0ZVRyYW5zaXRpb25SdWxlOiBmdW5jdGlvbihwcm9wZXJ0eSwgc3RhZ2dlckluZGV4LCBkdXJhdGlvbikge1xuICAgICAgICAgICAgdmFyIHNlbGYgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBkZWxheSA9IHNlbGYuZ2V0RGVsYXkoc3RhZ2dlckluZGV4KSxcbiAgICAgICAgICAgICAgICBydWxlICA9ICcnO1xuXG4gICAgICAgICAgICBydWxlID0gcHJvcGVydHkgKyAnICcgK1xuICAgICAgICAgICAgICAgIChkdXJhdGlvbiA+IDAgPyBkdXJhdGlvbiA6IHNlbGYubWl4ZXIuY29uZmlnLmFuaW1hdGlvbi5kdXJhdGlvbikgKyAnbXMgJyArXG4gICAgICAgICAgICAgICAgZGVsYXkgKyAnbXMgJyArXG4gICAgICAgICAgICAgICAgKHByb3BlcnR5ID09PSAnb3BhY2l0eScgPyAnbGluZWFyJyA6IHNlbGYubWl4ZXIuY29uZmlnLmFuaW1hdGlvbi5lYXNpbmcpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jYWxsRmlsdGVycygncnVsZVdyaXRlVHJhbnNpdGlvblJ1bGUnLCBydWxlLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxjdWxhdGVzIHRoZSB0cmFuc2l0aW9uIGRlbGF5IGZvciBlYWNoIHRhcmdldCBlbGVtZW50IGJhc2VkIG9uIGl0cyBpbmRleCwgaWZcbiAgICAgICAgICogc3RhZ2dlcmluZyBpcyBhcHBsaWVkLiBJZiBkZWZpbmVkLCBBIGN1c3RvbSBgYW5pbWF0aW9uLnN0YWdnZXJTZXFldWVuY2VgXG4gICAgICAgICAqIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvIG1hbmlwdWxhdGUgdGhlIG9yZGVyIG9mIGluZGljZXMgdG8gcHJvZHVjZSBjdXN0b21cbiAgICAgICAgICogc3RhZ2dlciBlZmZlY3RzIChlLmcuIGZvciB1c2UgaW4gYSBncmlkIHdpdGggaXJyZWd1bGFyIHJvdyBsZW5ndGhzKS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDIuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICAgIGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gIHtudW1iZXJ9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGdldERlbGF5OiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGRlbGF5ICAgPSAtMTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzZWxmLm1peGVyLmNvbmZpZy5hbmltYXRpb24uc3RhZ2dlclNlcXVlbmNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBzZWxmLm1peGVyLmNvbmZpZy5hbmltYXRpb24uc3RhZ2dlclNlcXVlbmNlLmNhbGwoc2VsZiwgaW5kZXgsIHNlbGYuc3RhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxheSA9ICEhc2VsZi5taXhlci5zdGFnZ2VyRHVyYXRpb24gPyBpbmRleCAqIHNlbGYubWl4ZXIuc3RhZ2dlckR1cmF0aW9uIDogMDtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuY2FsbEZpbHRlcnMoJ2RlbGF5R2V0RGVsYXknLCBkZWxheSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtzdHJpbmdbXX0gIHJ1bGVzXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBhcHBseVRyYW5zaXRpb246IGZ1bmN0aW9uKHJ1bGVzKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvblN0cmluZyAgICA9IHJ1bGVzLmpvaW4oJywgJyk7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUFwcGx5VHJhbnNpdGlvbicsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHNlbGYuZG9tLmVsLnN0eWxlW21peGl0dXAuZmVhdHVyZXMudHJhbnNpdGlvblByb3BdID0gdHJhbnNpdGlvblN0cmluZztcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJBcHBseVRyYW5zaXRpb24nLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHBhcmFtICAge0V2ZW50fSBlXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBoYW5kbGVUcmFuc2l0aW9uRW5kOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHByb3BOYW1lICAgID0gZS5wcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgY2FuUmVzaXplICAgPSBzZWxmLm1peGVyLmNvbmZpZy5hbmltYXRpb24uYW5pbWF0ZVJlc2l6ZVRhcmdldHM7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUhhbmRsZVRyYW5zaXRpb25FbmQnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgc2VsZi5pc0JvdW5kICYmXG4gICAgICAgICAgICAgICAgZS50YXJnZXQubWF0Y2hlcyhzZWxmLm1peGVyLmNvbmZpZy5zZWxlY3RvcnMudGFyZ2V0KSAmJlxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgcHJvcE5hbWUuaW5kZXhPZigndHJhbnNmb3JtJykgPiAtMSB8fFxuICAgICAgICAgICAgICAgICAgICBwcm9wTmFtZS5pbmRleE9mKCdvcGFjaXR5JykgPiAtMSB8fFxuICAgICAgICAgICAgICAgICAgICBjYW5SZXNpemUgJiYgcHJvcE5hbWUuaW5kZXhPZignaGVpZ2h0JykgPiAtMSB8fFxuICAgICAgICAgICAgICAgICAgICBjYW5SZXNpemUgJiYgcHJvcE5hbWUuaW5kZXhPZignd2lkdGgnKSA+IC0xIHx8XG4gICAgICAgICAgICAgICAgICAgIGNhblJlc2l6ZSAmJiBwcm9wTmFtZS5pbmRleE9mKCdtYXJnaW4nKSA+IC0xXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jYWxsYmFjay5jYWxsKHNlbGYsIHNlbGYub3BlcmF0aW9uKTtcblxuICAgICAgICAgICAgICAgIHNlbGYuaXNCb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNlbGYuY2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIHNlbGYub3BlcmF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJIYW5kbGVUcmFuc2l0aW9uRW5kJywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtFdmVudH0gICAgIGVcbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGV2ZW50QnVzOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUV2ZW50QnVzJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICd3ZWJraXRUcmFuc2l0aW9uRW5kJzpcbiAgICAgICAgICAgICAgICBjYXNlICd0cmFuc2l0aW9uZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5oYW5kbGVUcmFuc2l0aW9uRW5kKGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdhZnRlckV2ZW50QnVzJywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDMuMC4wXG4gICAgICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICB1bmJpbmRFdmVudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVVbmJpbmRFdmVudHMnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBoLm9mZihzZWxmLmRvbS5lbCwgJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBzZWxmLmhhbmRsZXIpO1xuICAgICAgICAgICAgaC5vZmYoc2VsZi5kb20uZWwsICd0cmFuc2l0aW9uZW5kJywgc2VsZi5oYW5kbGVyKTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJVbmJpbmRFdmVudHMnLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgMy4wLjBcbiAgICAgICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGJpbmRFdmVudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25FbmRFdmVudCAgPSAnJztcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYmVmb3JlQmluZEV2ZW50cycsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHRyYW5zaXRpb25FbmRFdmVudCA9IG1peGl0dXAuZmVhdHVyZXMudHJhbnNpdGlvblByZWZpeCA9PT0gJ3dlYmtpdCcgPyAnd2Via2l0VHJhbnNpdGlvbkVuZCcgOiAndHJhbnNpdGlvbmVuZCc7XG5cbiAgICAgICAgICAgIHNlbGYuaGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5ldmVudEJ1cyhlKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGgub24oc2VsZi5kb20uZWwsIHRyYW5zaXRpb25FbmRFdmVudCwgc2VsZi5oYW5kbGVyKTtcblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJCaW5kRXZlbnRzJywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgIDMuMC4wXG4gICAgICAgICAqIEBwYXJhbSAgIHtib29sZWFufSAgIFtnZXRCb3hdXG4gICAgICAgICAqIEByZXR1cm4gIHtQb3NEYXRhfVxuICAgICAgICAgKi9cblxuICAgICAgICBnZXRQb3NEYXRhOiBmdW5jdGlvbihnZXRCb3gpIHtcbiAgICAgICAgICAgIHZhciBzZWxmICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBzdHlsZXMgID0ge30sXG4gICAgICAgICAgICAgICAgcmVjdCAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgcG9zRGF0YSA9IG5ldyBtaXhpdHVwLlN0eWxlRGF0YSgpO1xuXG4gICAgICAgICAgICBzZWxmLmNhbGxBY3Rpb25zKCdiZWZvcmVHZXRQb3NEYXRhJywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgcG9zRGF0YS54ID0gc2VsZi5kb20uZWwub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIHBvc0RhdGEueSA9IHNlbGYuZG9tLmVsLm9mZnNldFRvcDtcblxuICAgICAgICAgICAgaWYgKHNlbGYubWl4ZXIuY29uZmlnLmFuaW1hdGlvbi5hbmltYXRlUmVzaXplVGFyZ2V0cyB8fCBnZXRCb3gpIHtcbiAgICAgICAgICAgICAgICByZWN0ID0gc2VsZi5kb20uZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgICAgICBwb3NEYXRhLnRvcCAgICAgPSByZWN0LnRvcDtcbiAgICAgICAgICAgICAgICBwb3NEYXRhLnJpZ2h0ICAgPSByZWN0LnJpZ2h0O1xuICAgICAgICAgICAgICAgIHBvc0RhdGEuYm90dG9tICA9IHJlY3QuYm90dG9tO1xuICAgICAgICAgICAgICAgIHBvc0RhdGEubGVmdCAgICA9IHJlY3QubGVmdDtcblxuICAgICAgICAgICAgICAgIHBvc0RhdGEud2lkdGggID0gcmVjdC53aWR0aDtcbiAgICAgICAgICAgICAgICBwb3NEYXRhLmhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZi5taXhlci5jb25maWcuYW5pbWF0aW9uLmFuaW1hdGVSZXNpemVUYXJnZXRzKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoc2VsZi5kb20uZWwpO1xuXG4gICAgICAgICAgICAgICAgcG9zRGF0YS5tYXJnaW5Cb3R0b20gPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Cb3R0b20pO1xuICAgICAgICAgICAgICAgIHBvc0RhdGEubWFyZ2luUmlnaHQgID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luUmlnaHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jYWxsRmlsdGVycygncG9zRGF0YUdldFBvc0RhdGEnLCBwb3NEYXRhLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICAgICAqIEByZXR1cm4gICAgICB7dm9pZH1cbiAgICAgICAgICovXG5cbiAgICAgICAgY2xlYW5VcDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNlbGYuY2FsbEFjdGlvbnMoJ2JlZm9yZUNsZWFuVXAnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBzZWxmLmRvbS5lbC5zdHlsZVttaXhpdHVwLmZlYXR1cmVzLnRyYW5zZm9ybVByb3BdICA9ICcnO1xuICAgICAgICAgICAgc2VsZi5kb20uZWwuc3R5bGVbbWl4aXR1cC5mZWF0dXJlcy50cmFuc2l0aW9uUHJvcF0gPSAnJztcbiAgICAgICAgICAgIHNlbGYuZG9tLmVsLnN0eWxlLm9wYWNpdHkgICAgICAgICAgICAgICAgICAgICAgICAgID0gJyc7XG5cbiAgICAgICAgICAgIGlmIChzZWxmLm1peGVyLmNvbmZpZy5hbmltYXRpb24uYW5pbWF0ZVJlc2l6ZVRhcmdldHMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5lbC5zdHlsZS53aWR0aCAgICAgICAgPSAnJztcbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5lbC5zdHlsZS5oZWlnaHQgICAgICAgPSAnJztcbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5lbC5zdHlsZS5tYXJnaW5SaWdodCAgPSAnJztcbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5lbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5jYWxsQWN0aW9ucygnYWZ0ZXJDbGVhblVwJywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQSBqUXVlcnktY29sbGVjdGlvbi1saWtlIHdyYXBwZXIgYXJvdW5kIG9uZSBvciBtb3JlIGBtaXhpdHVwLk1peGVyYCBpbnN0YW5jZXNcbiAgICAgKiBhbGxvd2luZyBzaW11bHRhbmVvdXMgY29udHJvbCBvZiBzYWlkIGluc3RhbmNlcyBzaW1pbGFyIHRvIHRoZSBNaXhJdFVwIDIgQVBJLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBuZXcgbWl4aXR1cC5Db2xsZWN0aW9uKGluc3RhbmNlcylcbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICogQHBhcmFtICAgICAgIHttaXhpdHVwLk1peGVyW119ICAgaW5zdGFuY2VzXG4gICAgICovXG5cbiAgICBtaXhpdHVwLkNvbGxlY3Rpb24gPSBmdW5jdGlvbihpbnN0YW5jZXMpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlICAgID0gbnVsbCxcbiAgICAgICAgICAgIGkgICAgICAgICAgID0gLTE7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaW5zdGFuY2UgPSBpbnN0YW5jZXNbaV07IGkrKykge1xuICAgICAgICAgICAgdGhpc1tpXSA9IGluc3RhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sZW5ndGggPSBpbnN0YW5jZXMubGVuZ3RoO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5mcmVlemUodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuQ29sbGVjdGlvbik7XG5cbiAgICBtaXhpdHVwLkNvbGxlY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtaXhpdHVwLkJhc2UucHJvdG90eXBlKTtcblxuICAgIGguZXh0ZW5kKG1peGl0dXAuQ29sbGVjdGlvbi5wcm90b3R5cGUsXG4gICAgLyoqIEBsZW5kcyBtaXhpdHVwLkNvbGxlY3Rpb24gKi9cbiAgICB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBtaXhpdHVwLkNvbGxlY3Rpb24sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxzIGEgbWV0aG9kIG9uIGFsbCBpbnN0YW5jZXMgaW4gdGhlIGNvbGxlY3Rpb24gYnkgcGFzc2luZyB0aGUgbWV0aG9kXG4gICAgICAgICAqIG5hbWUgYXMgYSBzdHJpbmcgZm9sbG93ZWQgYnkgYW55IGFwcGxpY2FibGUgcGFyYW1ldGVycyB0byBiZSBjdXJyaWVkIGludG9cbiAgICAgICAgICogdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogLm1peGl0dXAobWV0aG9kTmFtZVssYXJnMV1bLGFyZzIuLl0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiB2YXIgY29sbGVjdGlvbiA9IG5ldyBDb2xsZWN0aW9uKFttaXhlcjEsIG1peGVyMl0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiByZXR1cm4gY29sbGVjdGlvbi5taXhpdHVwKCdmaWx0ZXInLCAnLmNhdGVnb3J5LWEnKVxuICAgICAgICAgKiAgICAgLnRoZW4oZnVuY3Rpb24oc3RhdGVzKSB7XG4gICAgICAgICAqICAgICAgICAgc3RhdGUuZm9yRWFjaChmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgKiAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5hY3RpdmVGaWx0ZXIuc2VsZWN0b3IpOyAvLyAuY2F0ZWdvcnktYVxuICAgICAgICAgKiAgICAgICAgIH0pO1xuICAgICAgICAgKiAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAgICAgKiBAcGFyYW0gICAgICAge3N0cmluZ30gIG1ldGhvZE5hbWVcbiAgICAgICAgICogQHJldHVybiAgICAgIHtQcm9taXNlPEFycmF5PG1peGl0dXAuU3RhdGU+Pn1cbiAgICAgICAgICovXG5cbiAgICAgICAgbWl4aXR1cDogZnVuY3Rpb24obWV0aG9kTmFtZSkge1xuICAgICAgICAgICAgdmFyIHNlbGYgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSAgICA9IG51bGwsXG4gICAgICAgICAgICAgICAgYXJncyAgICAgICAgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICAgICAgICAgIHRhc2tzICAgICAgID0gW10sXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgPSAtMTtcblxuICAgICAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlTWl4aXR1cCcpO1xuXG4gICAgICAgICAgICBhcmdzLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGluc3RhbmNlID0gc2VsZltpXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGFza3MucHVzaChpbnN0YW5jZVttZXRob2ROYW1lXS5hcHBseShpbnN0YW5jZSwgYXJncykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jYWxsRmlsdGVycygncHJvbWlzZU1peGl0dXAnLCBoLmFsbCh0YXNrcywgbWl4aXR1cC5saWJyYXJpZXMpLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBgbWl4aXR1cC5PcGVyYXRpb25gIG9iamVjdHMgY29udGFpbiBhbGwgZGF0YSBuZWNjZXNzYXJ5IHRvIGRlc2NyaWJlIHRoZSBmdWxsXG4gICAgICogbGlmZWN5Y2xlIG9mIGFueSBNaXhJdFVwIG9wZXJhdGlvbi4gVGhleSBjYW4gYmUgdXNlZCB0byBjb21wdXRlIGFuZCBzdG9yZSBhblxuICAgICAqIG9wZXJhdGlvbiBmb3IgdXNlIGF0IGEgbGF0ZXIgdGltZSAoZS5nLiBwcm9ncmFtbWF0aWMgdHdlZW5pbmcpLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuT3BlcmF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1peGl0dXAuQmFzZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2JlZm9yZUNvbnN0cnVjdCcpO1xuXG4gICAgICAgIHRoaXMuaWQgICAgICAgICAgICAgICAgICAgICAgPSAnJztcblxuICAgICAgICB0aGlzLmFyZ3MgICAgICAgICAgICAgICAgICAgID0gW107XG4gICAgICAgIHRoaXMuY29tbWFuZCAgICAgICAgICAgICAgICAgPSBudWxsO1xuICAgICAgICB0aGlzLnNob3dQb3NEYXRhICAgICAgICAgICAgID0gW107XG4gICAgICAgIHRoaXMudG9IaWRlUG9zRGF0YSAgICAgICAgICAgPSBbXTtcblxuICAgICAgICB0aGlzLnN0YXJ0U3RhdGUgICAgICAgICAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5uZXdTdGF0ZSAgICAgICAgICAgICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMuZG9jU3RhdGUgICAgICAgICAgICAgICAgPSBudWxsO1xuXG4gICAgICAgIHRoaXMud2lsbFNvcnQgICAgICAgICAgICAgICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy53aWxsQ2hhbmdlTGF5b3V0ICAgICAgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc0VmZmVjdCAgICAgICAgICAgICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzRmFpbGVkICAgICAgICAgICAgICAgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnRyaWdnZXJFbGVtZW50ICAgICAgICAgID0gbnVsbDtcblxuICAgICAgICB0aGlzLnNob3cgICAgICAgICAgICAgICAgICAgID0gW107XG4gICAgICAgIHRoaXMuaGlkZSAgICAgICAgICAgICAgICAgICAgPSBbXTtcbiAgICAgICAgdGhpcy5tYXRjaGluZyAgICAgICAgICAgICAgICA9IFtdO1xuICAgICAgICB0aGlzLnRvU2hvdyAgICAgICAgICAgICAgICAgID0gW107XG4gICAgICAgIHRoaXMudG9IaWRlICAgICAgICAgICAgICAgICAgPSBbXTtcbiAgICAgICAgdGhpcy50b01vdmUgICAgICAgICAgICAgICAgICA9IFtdO1xuICAgICAgICB0aGlzLnRvUmVtb3ZlICAgICAgICAgICAgICAgID0gW107XG4gICAgICAgIHRoaXMuc3RhcnRPcmRlciAgICAgICAgICAgICAgPSBbXTtcbiAgICAgICAgdGhpcy5uZXdPcmRlciAgICAgICAgICAgICAgICA9IFtdO1xuICAgICAgICB0aGlzLnN0YXJ0U29ydCAgICAgICAgICAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5uZXdTb3J0ICAgICAgICAgICAgICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhcnRGaWx0ZXIgICAgICAgICAgICAgPSBudWxsO1xuICAgICAgICB0aGlzLm5ld0ZpbHRlciAgICAgICAgICAgICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGFydERhdGFzZXQgICAgICAgICAgICA9IG51bGw7XG4gICAgICAgIHRoaXMubmV3RGF0YXNldCAgICAgICAgICAgICAgPSBudWxsO1xuICAgICAgICB0aGlzLnZpZXdwb3J0RGVsdGFYICAgICAgICAgID0gMDtcbiAgICAgICAgdGhpcy52aWV3cG9ydERlbHRhWSAgICAgICAgICA9IDA7XG4gICAgICAgIHRoaXMuc3RhcnRYICAgICAgICAgICAgICAgICAgPSAwO1xuICAgICAgICB0aGlzLnN0YXJ0WSAgICAgICAgICAgICAgICAgID0gMDtcbiAgICAgICAgdGhpcy5zdGFydEhlaWdodCAgICAgICAgICAgICA9IDA7XG4gICAgICAgIHRoaXMuc3RhcnRXaWR0aCAgICAgICAgICAgICAgPSAwO1xuICAgICAgICB0aGlzLm5ld1ggICAgICAgICAgICAgICAgICAgID0gMDtcbiAgICAgICAgdGhpcy5uZXdZICAgICAgICAgICAgICAgICAgICA9IDA7XG4gICAgICAgIHRoaXMubmV3SGVpZ2h0ICAgICAgICAgICAgICAgPSAwO1xuICAgICAgICB0aGlzLm5ld1dpZHRoICAgICAgICAgICAgICAgID0gMDtcbiAgICAgICAgdGhpcy5zdGFydENvbnRhaW5lckNsYXNzTmFtZSA9ICcnO1xuICAgICAgICB0aGlzLnN0YXJ0RGlzcGxheSAgICAgICAgICAgID0gJyc7XG4gICAgICAgIHRoaXMubmV3Q29udGFpbmVyQ2xhc3NOYW1lICAgPSAnJztcbiAgICAgICAgdGhpcy5uZXdEaXNwbGF5ICAgICAgICAgICAgICA9ICcnO1xuXG4gICAgICAgIHRoaXMuY2FsbEFjdGlvbnMoJ2FmdGVyQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgaC5zZWFsKHRoaXMpO1xuICAgIH07XG5cbiAgICBtaXhpdHVwLkJhc2VTdGF0aWMuY2FsbChtaXhpdHVwLk9wZXJhdGlvbik7XG5cbiAgICBtaXhpdHVwLk9wZXJhdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5PcGVyYXRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbWl4aXR1cC5PcGVyYXRpb247XG5cbiAgICAvKipcbiAgICAgKiBgbWl4aXR1cC5TdGF0ZWAgb2JqZWN0cyBleHBvc2UgdmFyaW91cyBwaWVjZXMgb2YgZGF0YSBkZXRhaWxpbmcgdGhlIHN0YXRlIG9mXG4gICAgICogYSBNaXhJdFVwIGluc3RhbmNlLiBUaGV5IGFyZSBwcm92aWRlZCBhdCB0aGUgc3RhcnQgYW5kIGVuZCBvZiBhbnkgb3BlcmF0aW9uIHZpYVxuICAgICAqIGNhbGxiYWNrcyBhbmQgZXZlbnRzLCB3aXRoIHRoZSBtb3N0IHJlY2VudCBzdGF0ZSBzdG9yZWQgYmV0d2VlbiBvcGVyYXRpb25zXG4gICAgICogZm9yIHJldHJpZXZhbCBhdCBhbnkgdGltZSB2aWEgdGhlIEFQSS5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cFxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBJRCBvZiB0aGUgbWl4ZXIgaW5zdGFuY2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBpZFxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5TdGF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtzdHJpbmd9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAnJ1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmlkID0gJyc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGZpbHRlciBjb21tYW5kIGFzIHNldCBieSBhIGNvbnRyb2wgY2xpY2sgb3IgQVBJIGNhbGwuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBhY3RpdmVGaWx0ZXJcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuU3RhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7bWl4aXR1cC5Db21tYW5kRmlsdGVyfVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgbnVsbFxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmFjdGl2ZUZpbHRlciA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIHNvcnQgY29tbWFuZCBhcyBzZXQgYnkgYSBjb250cm9sIGNsaWNrIG9yIEFQSSBjYWxsLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgYWN0aXZlU29ydFxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5TdGF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHttaXhpdHVwLkNvbW1hbmRTb3J0fVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgbnVsbFxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmFjdGl2ZVNvcnQgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3VycmVudCBsYXlvdXQtc3BlY2lmaWMgY29udGFpbmVyIGNsYXNzIG5hbWUsIGlmIGFwcGxpZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBhY3RpdmVDb250YWluZXJDbGFzc05hbWVcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuU3RhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7c3RyaW5nfVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgJydcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5hY3RpdmVDb250YWluZXJDbGFzc05hbWUgPSAnJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNvbnRhaW5lciBlbGVtZW50IHRoYXQgdGhlIG1peGVyIGlzIGluc3RhbnRpYXRlZCBvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5TdGF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtFbGVtZW50fVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgbnVsbFxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IG9mIGFsbCB0YXJnZXQgZWxlbWVudHMgaW5kZXhlZCBieSB0aGUgbWl4ZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICB0YXJnZXRzXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLlN0YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge0FycmF5LjxFbGVtZW50Pn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIFtdXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMudGFyZ2V0cyA9IFtdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBhcnJheSBvZiBhbGwgdGFyZ2V0IGVsZW1lbnRzIG5vdCBtYXRjaGluZyB0aGUgY3VycmVudCBmaWx0ZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICBoaWRlXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLlN0YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge0FycmF5LjxFbGVtZW50Pn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIFtdXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuaGlkZSA9IFtdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBhcnJheSBvZiBhbGwgdGFyZ2V0IGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBjdXJyZW50IGZpbHRlciBhbmQgYW55IGFkZGl0aW9uYWxcbiAgICAgICAgICogbGltaXRzIGFwcGxpZWQgc3VjaCBhcyBwYWdpbmF0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgc2hvd1xuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5TdGF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtBcnJheS48RWxlbWVudD59XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICBbXVxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLnNob3cgPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gYXJyYXkgb2YgYWxsIHRhcmdldCBlbGVtZW50cyBtYXRjaGluZyB0aGUgY3VycmVudCBmaWx0ZXIgaXJyZXNwZWN0aXZlIG9mXG4gICAgICAgICAqIGFueSBhZGRpdGlvbmFsIGxpbWl0cyBhcHBsaWVkIHN1Y2ggYXMgcGFnaW5hdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIG1hdGNoaW5nXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLlN0YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge0FycmF5LjxFbGVtZW50Pn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIFtdXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMubWF0Y2hpbmcgPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIHRvdGFsIG51bWJlciBvZiB0YXJnZXQgZWxlbWVudHMgaW5kZXhlZCBieSB0aGVcbiAgICAgICAgICogbWl4ZXIuIEVxdWl2YWxlbnQgdG8gYHN0YXRlLnRhcmdldHMubGVuZ3RoYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIHRvdGFsVGFyZ2V0c1xuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5TdGF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtudW1iZXJ9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAtMVxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLnRvdGFsVGFyZ2V0cyA9IC0xO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgdG90YWwgbnVtYmVyIG9mIHRhcmdldCBlbGVtZW50cyBtYXRjaGluZyB0aGVcbiAgICAgICAgICogY3VycmVudCBmaWx0ZXIgYW5kIGFueSBhZGRpdGlvbmFsIGxpbWl0cyBhcHBsaWVkIHN1Y2ggYXMgcGFnaW5hdGlvbi5cbiAgICAgICAgICogRXF1aXZhbGVudCB0byBgc3RhdGUuc2hvdy5sZW5ndGhgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgdG90YWxTaG93XG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLlN0YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge251bWJlcn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIC0xXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMudG90YWxTaG93ID0gLTE7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSB0b3RhbCBudW1iZXIgb2YgdGFyZ2V0IGVsZW1lbnRzIG5vdCBtYXRjaGluZ1xuICAgICAgICAgKiB0aGUgY3VycmVudCBmaWx0ZXIuIEVxdWl2YWxlbnQgdG8gYHN0YXRlLmhpZGUubGVuZ3RoYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIHRvdGFsSGlkZVxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5TdGF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtudW1iZXJ9XG4gICAgICAgICAqIEBkZWZhdWx0ICAgICAtMVxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLnRvdGFsSGlkZSA9IC0xO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgdG90YWwgbnVtYmVyIG9mIHRhcmdldCBlbGVtZW50cyBtYXRjaGluZyB0aGVcbiAgICAgICAgICogY3VycmVudCBmaWx0ZXIgaXJyZXNwZWN0aXZlIG9mIGFueSBvdGhlciBsaW1pdHMgYXBwbGllZCBzdWNoIGFzIHBhZ2luYXRpb24uXG4gICAgICAgICAqIEVxdWl2YWxlbnQgdG8gYHN0YXRlLm1hdGNoaW5nLmxlbmd0aGAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lICAgICAgICB0b3RhbE1hdGNoaW5nXG4gICAgICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwLlN0YXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSAgICAgICAge251bWJlcn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIC0xXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMudG90YWxNYXRjaGluZyA9IC0xO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBsYXN0IG9wZXJhdGlvbiBcImZhaWxlZFwiLCBpLmUuIG5vIHRhcmdldHNcbiAgICAgICAgICogY291bGQgYmUgZm91bmQgbWF0Y2hpbmcgdGhlIGZpbHRlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgICAgICAgIGhhc0ZhaWxlZFxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5TdGF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtib29sZWFufVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgZmFsc2VcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5oYXNGYWlsZWQgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIERPTSBlbGVtZW50IHRoYXQgd2FzIGNsaWNrZWQgaWYgdGhlIGxhc3Qgb3BlcmF0aW9uIHdhcyB0cmlnZ2VyZWQgYnkgdGhlXG4gICAgICAgICAqIGNsaWNraW5nIG9mIGEgY29udHJvbCBhbmQgbm90IGFuIEFQSSBjYWxsLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgdHJpZ2dlckVsZW1lbnRcbiAgICAgICAgICogQG1lbWJlcm9mICAgIG1peGl0dXAuU3RhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlICAgICAgICB7RWxlbWVudHxudWxsfVxuICAgICAgICAgKiBAZGVmYXVsdCAgICAgbnVsbFxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLnRyaWdnZXJFbGVtZW50ID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGF0YXNldCB1bmRlcmx5aW5nIHRoZSByZW5kZXJlZCB0YXJnZXRzLCBpZiB0aGVcbiAgICAgICAgICogZGF0YXNldCBBUEkgaXMgaW4gdXNlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSAgICAgICAgYWN0aXZlRGF0YXNldFxuICAgICAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cC5TdGF0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUgICAgICAgIHtBcnJheS48b2JqZWN0Pn1cbiAgICAgICAgICogQGRlZmF1bHQgICAgIG51bGxcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5hY3RpdmVEYXRhc2V0ID0gbnVsbDtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdhZnRlckNvbnN0cnVjdCcpO1xuXG4gICAgICAgIGguc2VhbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5TdGF0ZSk7XG5cbiAgICBtaXhpdHVwLlN0YXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLlN0YXRlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG1peGl0dXAuU3RhdGU7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAbWVtYmVyb2YgICAgbWl4aXR1cFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHNpbmNlICAgICAgIDMuMC4wXG4gICAgICovXG5cbiAgICBtaXhpdHVwLlVzZXJJbnN0cnVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtaXhpdHVwLkJhc2UuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNhbGxBY3Rpb25zKCdiZWZvcmVDb25zdHJ1Y3QnKTtcblxuICAgICAgICB0aGlzLmNvbW1hbmQgICAgPSB7fTtcbiAgICAgICAgdGhpcy5hbmltYXRlICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgICA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuVXNlckluc3RydWN0aW9uKTtcblxuICAgIG1peGl0dXAuVXNlckluc3RydWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLlVzZXJJbnN0cnVjdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLlVzZXJJbnN0cnVjdGlvbjtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBtZW1iZXJvZiAgICBtaXhpdHVwXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAc2luY2UgICAgICAgMy4wLjBcbiAgICAgKi9cblxuICAgIG1peGl0dXAuTWVzc2FnZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0Jyk7XG5cbiAgICAgICAgLyogRXJyb3JzXG4gICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAgICAgdGhpcy5FUlJPUl9GQUNUT1JZX0lOVkFMSURfQ09OVEFJTkVSID1cbiAgICAgICAgICAgICdbTWl4SXRVcF0gQW4gaW52YWxpZCBzZWxlY3RvciBvciBlbGVtZW50IHJlZmVyZW5jZSB3YXMgcGFzc2VkIHRvIHRoZSBtaXhpdHVwIGZhY3RvcnkgZnVuY3Rpb24nO1xuXG4gICAgICAgIHRoaXMuRVJST1JfRkFDVE9SWV9DT05UQUlORVJfTk9UX0ZPVU5EID1cbiAgICAgICAgICAgICdbTWl4SXRVcF0gVGhlIHByb3ZpZGVkIHNlbGVjdG9yIHlpZWxkZWQgbm8gY29udGFpbmVyIGVsZW1lbnQnO1xuXG4gICAgICAgIHRoaXMuRVJST1JfQ09ORklHX0lOVkFMSURfQU5JTUFUSU9OX0VGRkVDVFMgPVxuICAgICAgICAgICAgJ1tNaXhJdFVwXSBJbnZhbGlkIHZhbHVlIGZvciBgYW5pbWF0aW9uLmVmZmVjdHNgJztcblxuICAgICAgICB0aGlzLkVSUk9SX0NPTkZJR19JTlZBTElEX0NPTlRST0xTX1NDT1BFID1cbiAgICAgICAgICAgICdbTWl4SXRVcF0gSW52YWxpZCB2YWx1ZSBmb3IgYGNvbnRyb2xzLnNjb3BlYCc7XG5cbiAgICAgICAgdGhpcy5FUlJPUl9DT05GSUdfSU5WQUxJRF9QUk9QRVJUWSA9XG4gICAgICAgICAgICAnW01peGl0VXBdIEludmFsaWQgY29uZmlndXJhdGlvbiBvYmplY3QgcHJvcGVydHkgXCIke2Vycm9uZW91c31cIiR7c3VnZ2VzdGlvbn0nO1xuXG4gICAgICAgIHRoaXMuRVJST1JfQ09ORklHX0lOVkFMSURfUFJPUEVSVFlfU1VHR0VTVElPTiA9XG4gICAgICAgICAgICAnLiBEaWQgeW91IG1lYW4gXCIke3Byb2JhYmxlTWF0Y2h9XCI/JztcblxuICAgICAgICB0aGlzLkVSUk9SX0NPTkZJR19EQVRBX1VJRF9LRVlfTk9UX1NFVCA9XG4gICAgICAgICAgICAnW01peEl0VXBdIFRvIHVzZSB0aGUgZGF0YXNldCBBUEksIGEgVUlEIGtleSBtdXN0IGJlIHNwZWNpZmllZCB1c2luZyBgZGF0YS51aWRLZXlgJztcblxuICAgICAgICB0aGlzLkVSUk9SX0RBVEFTRVRfSU5WQUxJRF9VSURfS0VZID1cbiAgICAgICAgICAgICdbTWl4SXRVcF0gVGhlIHNwZWNpZmllZCBVSUQga2V5IFwiJHt1aWRLZXl9XCIgaXMgbm90IHByZXNlbnQgb24gb25lIG9yIG1vcmUgZGF0YXNldCBpdGVtcyc7XG5cbiAgICAgICAgdGhpcy5FUlJPUl9EQVRBU0VUX0RVUExJQ0FURV9VSUQgPVxuICAgICAgICAgICAgJ1tNaXhJdFVwXSBUaGUgVUlEIFwiJHt1aWR9XCIgd2FzIGZvdW5kIG9uIHR3byBvciBtb3JlIGRhdGFzZXQgaXRlbXMuIFVJRHMgbXVzdCBiZSB1bmlxdWUuJztcblxuICAgICAgICB0aGlzLkVSUk9SX0lOU0VSVF9JTlZBTElEX0FSR1VNRU5UUyA9XG4gICAgICAgICAgICAnW01peEl0VXBdIFBsZWFzZSBwcm92aWRlciBlaXRoZXIgYW4gaW5kZXggb3IgYSBzaWJsaW5nIGFuZCBwb3NpdGlvbiB0byBpbnNlcnQsIG5vdCBib3RoJztcblxuICAgICAgICB0aGlzLkVSUk9SX0lOU0VSVF9QUkVFWElTVElOR19FTEVNRU5UID1cbiAgICAgICAgICAgICdbTWl4SXRVcF0gQW4gZWxlbWVudCB0byBiZSBpbnNlcnRlZCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgY29udGFpbmVyJztcblxuICAgICAgICB0aGlzLkVSUk9SX0ZJTFRFUl9JTlZBTElEX0FSR1VNRU5UUyA9XG4gICAgICAgICAgICAnW01peEl0VXBdIFBsZWFzZSBwcm92aWRlIGVpdGhlciBhIHNlbGVjdG9yIG9yIGNvbGxlY3Rpb24gYC5maWx0ZXIoKWAsIG5vdCBib3RoJztcblxuICAgICAgICB0aGlzLkVSUk9SX0RBVEFTRVRfTk9UX1NFVCA9XG4gICAgICAgICAgICAnW01peEl0VXBdIFRvIHVzZSB0aGUgZGF0YXNldCBBUEkgd2l0aCBwcmUtcmVuZGVyZWQgdGFyZ2V0cywgYSBzdGFydGluZyBkYXRhc2V0IG11c3QgYmUgc2V0IHVzaW5nIGBsb2FkLmRhdGFzZXRgJztcblxuICAgICAgICB0aGlzLkVSUk9SX0RBVEFTRVRfUFJFUkVOREVSRURfTUlTTUFUQ0ggPVxuICAgICAgICAgICAgJ1tNaXhJdFVwXSBgbG9hZC5kYXRhc2V0YCBkb2VzIG5vdCBtYXRjaCBwcmUtcmVuZGVyZWQgdGFyZ2V0cyc7XG5cbiAgICAgICAgdGhpcy5FUlJPUl9EQVRBU0VUX1JFTkRFUkVSX05PVF9TRVQgPVxuICAgICAgICAgICAgJ1tNaXhJdFVwXSBUbyBpbnNlcnQgYW4gZWxlbWVudCB2aWEgdGhlIGRhdGFzZXQgQVBJLCBhIHRhcmdldCByZW5kZXJlciBmdW5jdGlvbiBtdXN0IGJlIHByb3ZpZGVkIHRvIGByZW5kZXIudGFyZ2V0YCc7XG5cbiAgICAgICAgLyogV2FybmluZ3NcbiAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgICAgICB0aGlzLldBUk5JTkdfRkFDVE9SWV9QUkVFWElTVElOR19JTlNUQU5DRSA9XG4gICAgICAgICAgICAnW01peEl0VXBdIFdBUk5JTkc6IFRoaXMgZWxlbWVudCBhbHJlYWR5IGhhcyBhbiBhY3RpdmUgTWl4SXRVcCBpbnN0YW5jZS4gVGhlIHByb3ZpZGVkIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHdpbGwgYmUgaWdub3JlZC4nICtcbiAgICAgICAgICAgICcgSWYgeW91IHdpc2ggdG8gcGVyZm9ybSBhZGRpdGlvbmFsIG1ldGhvZHMgb24gdGhpcyBpbnN0YW5jZSwgcGxlYXNlIGNyZWF0ZSBhIHJlZmVyZW5jZS4nO1xuXG4gICAgICAgIHRoaXMuV0FSTklOR19JTlNFUlRfTk9fRUxFTUVOVFMgPVxuICAgICAgICAgICAgJ1tNaXhJdFVwXSBXQVJOSU5HOiBObyB2YWxpZCBlbGVtZW50cyB3ZXJlIHBhc3NlZCB0byBgLmluc2VydCgpYCc7XG5cbiAgICAgICAgdGhpcy5XQVJOSU5HX1JFTU9WRV9OT19FTEVNRU5UUyA9XG4gICAgICAgICAgICAnW01peEl0VXBdIFdBUk5JTkc6IE5vIHZhbGlkIGVsZW1lbnRzIHdlcmUgcGFzc2VkIHRvIGAucmVtb3ZlKClgJztcblxuICAgICAgICB0aGlzLldBUk5JTkdfTVVMVElNSVhfSU5TVEFOQ0VfUVVFVUVfRlVMTCA9XG4gICAgICAgICAgICAnW01peEl0VXBdIFdBUk5JTkc6IEFuIG9wZXJhdGlvbiB3YXMgcmVxdWVzdGVkIGJ1dCB0aGUgTWl4SXRVcCBpbnN0YW5jZSB3YXMgYnVzeS4gVGhlIG9wZXJhdGlvbiB3YXMgcmVqZWN0ZWQgYmVjYXVzZSB0aGUgJyArXG4gICAgICAgICAgICAncXVldWUgaXMgZnVsbCBvciBxdWV1aW5nIGlzIGRpc2FibGVkLic7XG5cbiAgICAgICAgdGhpcy5XQVJOSU5HX0dFVF9PUEVSQVRJT05fSU5TVEFOQ0VfQlVTWSA9XG4gICAgICAgICAgICAnW01peEl0VXBdIFdBUk5JTkc6IE9wZXJhdGlvbnMgY2FuIGJlIGJlIGNyZWF0ZWQgd2hpbGUgdGhlIE1peEl0VXAgaW5zdGFuY2UgaXMgYnVzeS4nO1xuXG4gICAgICAgIHRoaXMuV0FSTklOR19OT19QUk9NSVNFX0lNUExFTUVOVEFUSU9OID1cbiAgICAgICAgICAgICdbTWl4SXRVcF0gV0FSTklORzogTm8gUHJvbWlzZSBpbXBsZW1lbnRhdGlvbnMgY291bGQgYmUgZm91bmQuIElmIHlvdSB3aXNoIHRvIHVzZSBwcm9taXNlcyB3aXRoIE1peEl0VXAgcGxlYXNlIGluc3RhbGwnICtcbiAgICAgICAgICAgICcgYW4gRVM2IFByb21pc2UgcG9seWZpbGwuJztcblxuICAgICAgICB0aGlzLldBUk5JTkdfSU5DT05TSVNURU5UX1NPUlRJTkdfQVRUUklCVVRFUyA9XG4gICAgICAgICAgICAnW01peEl0VXBdIFdBUk5JTkc6IFRoZSByZXF1ZXN0ZWQgc29ydGluZyBkYXRhIGF0dHJpYnV0ZSBcIiR7YXR0cmlidXRlfVwiIHdhcyBub3QgcHJlc2VudCBvbiBvbmUgb3IgbW9yZSB0YXJnZXQgZWxlbWVudHMnICtcbiAgICAgICAgICAgICcgd2hpY2ggbWF5IHByb2R1Y3QgdW5leHBlY3RlZCBzb3J0IG91dHB1dCc7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnKTtcblxuICAgICAgICB0aGlzLmNvbXBpbGVUZW1wbGF0ZXMoKTtcblxuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuTWVzc2FnZXMpO1xuXG4gICAgbWl4aXR1cC5NZXNzYWdlcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG1peGl0dXAuQmFzZS5wcm90b3R5cGUpO1xuXG4gICAgbWl4aXR1cC5NZXNzYWdlcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLk1lc3NhZ2VzO1xuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICAgIG1peGl0dXAuTWVzc2FnZXMucHJvdG90eXBlLmNvbXBpbGVUZW1wbGF0ZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVycm9yS2V5ICAgICAgICA9ICcnO1xuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlICAgID0gJyc7XG5cbiAgICAgICAgZm9yIChlcnJvcktleSBpbiB0aGlzKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIChlcnJvck1lc3NhZ2UgPSB0aGlzW2Vycm9yS2V5XSkgIT09ICdzdHJpbmcnKSBjb250aW51ZTtcblxuICAgICAgICAgICAgdGhpc1toLmNhbWVsQ2FzZShlcnJvcktleSldID0gaC50ZW1wbGF0ZShlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG1peGl0dXAubWVzc2FnZXMgPSBuZXcgbWl4aXR1cC5NZXNzYWdlcygpO1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQG1lbWJlcm9mICAgIG1peGl0dXBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBzaW5jZSAgICAgICAzLjAuMFxuICAgICAqIEBwYXJhbSAgICAgICB7bWl4aXR1cC5NaXhlcn0gbWl4ZXJcbiAgICAgKi9cblxuICAgIG1peGl0dXAuRmFjYWRlID0gZnVuY3Rpb24gTWl4ZXIobWl4ZXIpIHtcbiAgICAgICAgbWl4aXR1cC5CYXNlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYmVmb3JlQ29uc3RydWN0JywgYXJndW1lbnRzKTtcblxuICAgICAgICB0aGlzLmNvbmZpZ3VyZSAgICAgICAgICA9IG1peGVyLmNvbmZpZ3VyZS5iaW5kKG1peGVyKTtcbiAgICAgICAgdGhpcy5zaG93ICAgICAgICAgICAgICAgPSBtaXhlci5zaG93LmJpbmQobWl4ZXIpO1xuICAgICAgICB0aGlzLmhpZGUgICAgICAgICAgICAgICA9IG1peGVyLmhpZGUuYmluZChtaXhlcik7XG4gICAgICAgIHRoaXMuZmlsdGVyICAgICAgICAgICAgID0gbWl4ZXIuZmlsdGVyLmJpbmQobWl4ZXIpO1xuICAgICAgICB0aGlzLnRvZ2dsZU9uICAgICAgICAgICA9IG1peGVyLnRvZ2dsZU9uLmJpbmQobWl4ZXIpO1xuICAgICAgICB0aGlzLnRvZ2dsZU9mZiAgICAgICAgICA9IG1peGVyLnRvZ2dsZU9mZi5iaW5kKG1peGVyKTtcbiAgICAgICAgdGhpcy5zb3J0ICAgICAgICAgICAgICAgPSBtaXhlci5zb3J0LmJpbmQobWl4ZXIpO1xuICAgICAgICB0aGlzLmNoYW5nZUxheW91dCAgICAgICA9IG1peGVyLmNoYW5nZUxheW91dC5iaW5kKG1peGVyKTtcbiAgICAgICAgdGhpcy5tdWx0aW1peCAgICAgICAgICAgPSBtaXhlci5tdWx0aW1peC5iaW5kKG1peGVyKTtcbiAgICAgICAgdGhpcy5kYXRhc2V0ICAgICAgICAgICAgPSBtaXhlci5kYXRhc2V0LmJpbmQobWl4ZXIpO1xuICAgICAgICB0aGlzLnR3ZWVuICAgICAgICAgICAgICA9IG1peGVyLnR3ZWVuLmJpbmQobWl4ZXIpO1xuICAgICAgICB0aGlzLmluc2VydCAgICAgICAgICAgICA9IG1peGVyLmluc2VydC5iaW5kKG1peGVyKTtcbiAgICAgICAgdGhpcy5pbnNlcnRCZWZvcmUgICAgICAgPSBtaXhlci5pbnNlcnRCZWZvcmUuYmluZChtaXhlcik7XG4gICAgICAgIHRoaXMuaW5zZXJ0QWZ0ZXIgICAgICAgID0gbWl4ZXIuaW5zZXJ0QWZ0ZXIuYmluZChtaXhlcik7XG4gICAgICAgIHRoaXMucHJlcGVuZCAgICAgICAgICAgID0gbWl4ZXIucHJlcGVuZC5iaW5kKG1peGVyKTtcbiAgICAgICAgdGhpcy5hcHBlbmQgICAgICAgICAgICAgPSBtaXhlci5hcHBlbmQuYmluZChtaXhlcik7XG4gICAgICAgIHRoaXMucmVtb3ZlICAgICAgICAgICAgID0gbWl4ZXIucmVtb3ZlLmJpbmQobWl4ZXIpO1xuICAgICAgICB0aGlzLmRlc3Ryb3kgICAgICAgICAgICA9IG1peGVyLmRlc3Ryb3kuYmluZChtaXhlcik7XG4gICAgICAgIHRoaXMuZm9yY2VSZWZyZXNoICAgICAgID0gbWl4ZXIuZm9yY2VSZWZyZXNoLmJpbmQobWl4ZXIpO1xuICAgICAgICB0aGlzLmZvcmNlUmVuZGVyICAgICAgICA9IG1peGVyLmZvcmNlUmVuZGVyLmJpbmQobWl4ZXIpO1xuICAgICAgICB0aGlzLmlzTWl4aW5nICAgICAgICAgICA9IG1peGVyLmlzTWl4aW5nLmJpbmQobWl4ZXIpO1xuICAgICAgICB0aGlzLmdldE9wZXJhdGlvbiAgICAgICA9IG1peGVyLmdldE9wZXJhdGlvbi5iaW5kKG1peGVyKTtcbiAgICAgICAgdGhpcy5nZXRDb25maWcgICAgICAgICAgPSBtaXhlci5nZXRDb25maWcuYmluZChtaXhlcik7XG4gICAgICAgIHRoaXMuZ2V0U3RhdGUgICAgICAgICAgID0gbWl4ZXIuZ2V0U3RhdGUuYmluZChtaXhlcik7XG5cbiAgICAgICAgdGhpcy5jYWxsQWN0aW9ucygnYWZ0ZXJDb25zdHJ1Y3QnLCBhcmd1bWVudHMpO1xuXG4gICAgICAgIGguZnJlZXplKHRoaXMpO1xuICAgICAgICBoLnNlYWwodGhpcyk7XG4gICAgfTtcblxuICAgIG1peGl0dXAuQmFzZVN0YXRpYy5jYWxsKG1peGl0dXAuRmFjYWRlKTtcblxuICAgIG1peGl0dXAuRmFjYWRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWl4aXR1cC5CYXNlLnByb3RvdHlwZSk7XG5cbiAgICBtaXhpdHVwLkZhY2FkZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBtaXhpdHVwLkZhY2FkZTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBtaXhpdHVwO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBtaXhpdHVwO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cubWl4aXR1cCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdy5taXhpdHVwICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdpbmRvdy5taXhpdHVwID0gbWl4aXR1cDtcbiAgICB9XG4gICAgbWl4aXR1cC5CYXNlU3RhdGljLmNhbGwobWl4aXR1cC5jb25zdHJ1Y3Rvcik7XG5cbiAgICBtaXhpdHVwLk5BTUUgPSAnbWl4aXR1cCc7XG4gICAgbWl4aXR1cC5DT1JFX1ZFUlNJT04gPSAnMy4yLjInO1xufSkod2luZG93KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9taXhpdHVwL2Rpc3QvbWl4aXR1cC5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==