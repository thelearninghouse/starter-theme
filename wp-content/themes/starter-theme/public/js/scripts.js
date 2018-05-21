webpackJsonp([6],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/scripts/VlhFiltering.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vlh_library__ = __webpack_require__("./node_modules/vlh-library/dist/vlh-library.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vlh_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vlh_library__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_helpers_buildDegreeList__ = __webpack_require__("./src/scripts/helpers/buildDegreeList.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0_vlh_library__["degreeMixin"]],
  mounted: function mounted() {
    this.degrees = Object(__WEBPACK_IMPORTED_MODULE_1__scripts_helpers_buildDegreeList__["a" /* buildDegreeList */])(wpData.degrees);
    this.degreeLevels = wpData.degreeLevels;
    this.degreeAreas = wpData.degreeAreas;
  }
});

/***/ }),

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

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4f9632b8\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/scripts/VlhFiltering.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* Temporary */\n", "", {"version":3,"sources":["/Users/droyer/Local Sites/starter-20/app/public/wp-content/themes/starter-theme/src/scripts/VlhFiltering.vue"],"names":[],"mappings":"AAAA,eAAe","file":"VlhFiltering.vue","sourcesContent":["/* Temporary */\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
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


/***/ }),

/***/ "./node_modules/vlh-library/dist/vlh-library.js":
/***/ (function(module, exports, __webpack_require__) {

(function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VlhLibrary=t():e.VlhLibrary=t()})("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=10)}([function(e,t,n){"use strict";function r(e,t,n,r,i,s,a,o){e=e||{};var c=typeof e.default;"object"!==c&&"function"!==c||(e=e.default);var l="function"==typeof e?e.options:e;t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),s&&(l._scopeId=s);var u;if(a?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=u):i&&(u=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(l.functional){l._injectStyles=u;var f=l.render;l.render=function(e,t){return u.call(t),f(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:l}}t.a=r},function(e,t,n){"use strict";t.a={name:"FilterList",provide:function(){return{filterState:this.filterState}},props:{elementType:{type:String,default:"ul"},visible:{type:Boolean},selectedFilter:{type:[Object,String]}},data:function(){return{filterState:{active:null}}},created:function(){this.handleMobile()},watch:{"filterState.active":function(e,t){this.$emit("update:selectedFilter",e),this.mobile&&this.$emit("update:visible",!1)},selectedFilter:function(e,t){this.filterState.active=e},mobile:function(e,t){this.handleMobile()}},methods:{handleMobile:function(){this.mobile?this.$emit("update:visible",!1):this.$emit("update:visible",!0)}}}},function(e,t,n){"use strict";t.a={name:"FilterItem",inject:["filterState"],props:{item:{type:[Array,Object]},elementType:{type:String,default:"li"},handleSelected:Function},data:function(){return{showSubItems:!1}},computed:{filterListState:function(){return this.filterState},selectedFilter:function(){return this.filterState.active},isSelected:function(){return!!this.selectedFilter&&this.selectedFilter.term_id===this.item.term_id},hasSubItems:function(){return!(!this.item.sub_areas||!this.item.sub_areas.length)},childIsSelected:function(){return!!this.selectedFilter&&this.item.term_id===this.selectedFilter.parent},hasSelectedClass:function(){return this.isSelected||this.childIsSelected},dropdownIcon:function(){return!0===this.showSubItems?"HideSubfilters":"ShowSubfilters"}},methods:{updateSelected:function(){this.filterState.active=this.item},subitemIsSelected:function(e){return!!this.selectedFilter&&e.term_id===this.selectedFilter.term_id}}}},function(e,t,n){"use strict";t.a={name:"FilterListHeading",data:function(){return{currentIcon:"arrow-down"}},props:{selectedFilter:{type:[Object,String]},heading:String,listVisibility:Boolean,iconDropdownColor:String,iconResetColor:String},computed:{listToggleIcon:function(){}},methods:{handleToggle:function(){this.$emit("toggle-filter-visibility")}},watch:{listVisibility:function(e,t){this.currentIcon=!0===e?"arrow-up":"arrow-down"}}}},function(e,t,n){"use strict";t.a={name:"FilterReset",inject:["filterState"],props:{id:{type:String},title:{type:String,default:"All"},elementType:{type:String,default:"li"}},computed:{filterListState:function(){return this.filterState},selectedFilter:function(){return this.filterState.active},isSelected:function(){return null===this.selectedFilter}},methods:{updateSelected:function(){this.filterState.active=null}}}},function(e,t,n){"use strict";t.a={name:"DegreeList",props:{items:{type:Array},elementType:{type:String,default:"div"}}}},function(e,t,n){"use strict";t.a={name:"DegreeItem",props:{item:{required:!0,type:Object},elementType:{type:String,default:"li"}},data:function(){return{showContent:!1}},computed:{degreeClasses:function(){return this.getDegreeClasses(this.item)},toggleContentIcon:function(){return this.showContent?"remove-circle-outline":"add-circle-outline"}},methods:{getDegreeClasses:function(e){var t=e.degree_levels,n=e.degree_areas,r=t.map(function(e){return e.slug||""}),i=n.map(function(e){return e.slug?e.slug:""});return r.concat(i)}}}},function(e,t,n){"use strict";var r=n(32),i=n.n(r),s=n(33),a=n.n(s),o=n(34),c=n.n(o),l=n(35),u=n.n(l),f=n(36),d=n.n(f),h=n(37),p=n.n(h),v=n(38),m=n.n(v),g=n(39),b=n.n(g),w=n(40),_=n.n(w),S=n(41),y=n.n(S),C=n(42),x=n.n(C);t.a={name:"Icon",props:{id:{type:String},icon:{type:[String,Object,Function,Array]},color:{type:String,default:"#fff"},size:{type:String,default:"24px"}},components:{ArrowDown:_.a,ArrowUp:b.a,Check:i.a,ClearSearch:m.a,HideSubfilters:d.a,IconShow:c.a,IconHide:a.a,Search:p.a,ShowSubfilters:u.a,AddCircleOutline:y.a,RemoveCircleOutline:x.a}}},function(e,t,n){"use strict";var r=n(46);t.a={inheritAttrs:!1,name:"SearchFilter",props:{value:{type:String}},computed:{searchQueryExists:function(){return""!==this.value},searchFilterIcon:function(){return this.searchQueryExists?"clear-search":"search"}},created:function(){this.debouncedSearch=Object(r.a)(this.updateSearch,500)},methods:{clearSearch:function(){this.$emit("input","")},updateSearch:function(e){this.$emit("input",e)}}}},function(e,t,n){"use strict";t.a={name:"AccordionTransition",methods:{beforeEnter:function(e){e.style.height="0"},enter:function(e){e.style.height=e.scrollHeight+20+"px"},beforeLeave:function(e){e.style.height=e.scrollHeight+20+"px"},leave:function(e){e.style.height="0"}}}},function(e,t,n){e.exports=n(11)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(12),i=n(15),s=n(18),a=n(21),o=n(24),c=n(27),l=n(30),u=n(44),f=n(48),d=n(51),h=n(52),p=n(54);n.n(p);n.d(t,"AccordionTransition",function(){return f.a}),n.d(t,"FilterList",function(){return r.a}),n.d(t,"FilterItem",function(){return i.a}),n.d(t,"FilterListHeading",function(){return s.a}),n.d(t,"FilterReset",function(){return a.a}),n.d(t,"DegreeList",function(){return o.a}),n.d(t,"DegreeItem",function(){return c.a}),n.d(t,"Icon",function(){return l.a}),n.d(t,"SearchFilter",function(){return u.a}),n.d(t,"degreeMixin",function(){return h.a});var v={install:function(e,t){e.component(f.a.name,f.a),e.component(o.a.name,o.a),e.component(c.a.name,c.a),e.component(r.a.name,r.a),e.component(i.a.name,i.a),e.component(s.a.name,s.a),e.component(a.a.name,a.a),e.component(l.a.name,l.a),e.component(u.a.name,u.a),e.mixin(d.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(v),t.default=v},function(e,t,n){"use strict";function r(e){n(13)}var i=n(1),s=n(14),a=n(0),o=r,c=Object(a.a)(i.a,s.a,s.b,!1,o,null,null);t.a=c.exports},function(e,t){},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"slide-fade"}},[n(e.elementType,{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],tag:"component",staticClass:"filter-list"},[e._t("default")],2)],1)},i=[]},function(e,t,n){"use strict";function r(e){n(16)}var i=n(2),s=n(17),a=n(0),o=r,c=Object(a.a)(i.a,s.a,s.b,!1,o,null,null);t.a=c.exports},function(e,t){},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.elementType,{tag:"component",staticClass:"filter-item",class:{selected:e.hasSelectedClass,parent:e.hasSubItems}},[n("div",{staticClass:"filter-item-content",on:{click:e.updateSelected}},[e.isSelected?n("icon",{staticClass:"selected-indicator",attrs:{icon:"check"}}):e._e(),e._v(" "),n("span",{staticClass:"title",domProps:{innerHTML:e._s(e.item.name)}}),e._v(" "),e.hasSubItems?n("icon",{staticClass:"toggle-subitems",attrs:{icon:e.dropdownIcon,color:"#222"},nativeOn:{click:function(t){t.stopPropagation(),e.showSubItems=!e.showSubItems}}}):e._e()],1),e._v(" "),n("accordion-transition",[e.hasSubItems&&e.showSubItems?n("ul",{staticClass:"subfilter-list"},e._l(e.item.sub_areas,function(t){return n("FilterItem",{key:t.term_id,class:{selected:e.subitemIsSelected(t)},attrs:{selectedFilter:e.selectedFilter,item:t}})})):e._e()])],1)},i=[]},function(e,t,n){"use strict";function r(e){n(19)}var i=n(3),s=n(20),a=n(0),o=r,c=Object(a.a)(i.a,s.a,s.b,!1,o,null,null);t.a=c.exports},function(e,t){},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._g({staticClass:"filter-list-heading",on:{click:e.handleToggle}},e.$listeners),[n("h2",{staticClass:"heading",domProps:{innerHTML:e._s(e.heading)}}),e._v(" "),e.mobile?n("icon",{attrs:{icon:e.currentIcon,color:e.iconDropdownColor}}):e._e(),e._v(" "),!e.mobile&&e.selectedFilter?n("div",{staticClass:"filter-clear",on:{click:function(t){e.$emit("update:selectedFilter",null)}}},[e._t("filter-clear",[e._v("\n      Clear\n      "),n("icon",{staticClass:"icon-button",attrs:{icon:"clear-search",color:e.iconResetColor}})])],2):e._e()],1)},i=[]},function(e,t,n){"use strict";function r(e){n(22)}var i=n(4),s=n(23),a=n(0),o=r,c=Object(a.a)(i.a,s.a,s.b,!1,o,null,null);t.a=c.exports},function(e,t){},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.elementType,{tag:"component",staticClass:"filter-item filter-reset",class:{selected:e.isSelected}},[n("div",{staticClass:"filter-item-content",on:{click:e.updateSelected}},[e.isSelected?n("icon",{staticClass:"selected-indicator",attrs:{icon:"check"}}):e._e(),e._v(" "),n("span",{staticClass:"title",domProps:{innerHTML:e._s(e.title)}})],1)])},i=[]},function(e,t,n){"use strict";function r(e){n(25)}var i=n(5),s=n(26),a=n(0),o=r,c=Object(a.a)(i.a,s.a,s.b,!1,o,"data-v-1293770a",null);t.a=c.exports},function(e,t){},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition-group",{staticClass:"degree-list",attrs:{name:"animated-grid-items",tag:e.elementType,appear:""}},[e._t("default")],2)},i=[]},function(e,t,n){"use strict";function r(e){n(28)}var i=n(6),s=n(29),a=n(0),o=r,c=Object(a.a)(i.a,s.a,s.b,!1,o,"data-v-e0bd7812",null);t.a=c.exports},function(e,t){},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.elementType,{tag:"component",staticClass:"degree-item",class:[e.degreeClasses,{open:e.showContent}]},[e._t("default",[n("div",{staticClass:"degree-item-header"},[n("h2",{staticClass:"title",domProps:{innerHTML:e._s(e.item.post_title)}}),e._v(" "),n("icon",{staticClass:"icon-button",attrs:{icon:e.toggleContentIcon,size:"30px",color:"#222"},nativeOn:{click:function(t){t.stopPropagation(),e.showContent=!e.showContent}}})],1),e._v(" "),n("accordion-transition",[e.showContent?n("div",{staticClass:"degree-item-content"},[n("p",[e._v(e._s(e.item.summary))]),e._v(" "),n("div",{staticClass:"degree-item-cta"},[n("a",{attrs:{href:"/"+e.item.post_name}},[e._v("View Info")])])]):e._e()])],null,e.item)],2)},i=[]},function(e,t,n){"use strict";function r(e){n(31)}var i=n(7),s=n(43),a=n(0),o=r,c=Object(a.a)(i.a,s.a,s.b,!1,o,null,null);t.a=c.exports},function(e,t){},function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{fill:"#fff",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}})])},r=function(){return"/Users/droyer/Learning House/vlh-library/src/assets/images/check.svg"};e.exports={render:n,toString:r}},function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{fill:"#ca0000",height:"27",viewBox:"0 0 24 24",width:"27",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}}),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])},r=function(){return"/Users/droyer/Learning House/vlh-library/src/assets/images/icon-hide.svg"};e.exports={render:n,toString:r}},function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}})])},r=function(){return"/Users/droyer/Learning House/vlh-library/src/assets/images/icon-show.svg"};e.exports={render:n,toString:r}},function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{fill:"#9E9E9E",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}})])},r=function(){return"/Users/droyer/Learning House/vlh-library/src/assets/images/show-subfilters.svg"};e.exports={render:n,toString:r}},function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{fill:"#9e9e9e",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10z"}})])},r=function(){return"/Users/droyer/Learning House/vlh-library/src/assets/images/hide-subfilters.svg"};e.exports={render:n,toString:r}},function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{fill:"#fff",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}}),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])},r=function(){return"/Users/droyer/Learning House/vlh-library/src/assets/images/search.svg"};e.exports={render:n,toString:r}},function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{fill:"#fff",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])},r=function(){return"/Users/droyer/Learning House/vlh-library/src/assets/images/clear-search.svg"};e.exports={render:n,toString:r}},function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{fill:"#A81D32",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"}}),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])},r=function(){return"/Users/droyer/Learning House/vlh-library/src/assets/images/arrow-up.svg"};e.exports={render:n,toString:r}},function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{fill:"#A81D32",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}}),n("path",{attrs:{d:"M0-.75h24v24H0z",fill:"none"}})])},r=function(){return"/Users/droyer/Learning House/vlh-library/src/assets/images/arrow-down.svg"};e.exports={render:n,toString:r}},function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44.238 44.238"}},[n("path",{attrs:{d:"M22.119 44.237C9.922 44.237 0 34.315 0 22.12 0 9.924 9.922.001 22.119.001S44.238 9.923 44.238 22.12s-9.924 22.117-22.119 22.117zm0-42.736C10.75 1.501 1.5 10.751 1.5 22.12s9.25 20.619 20.619 20.619 20.619-9.25 20.619-20.619-9.25-20.619-20.619-20.619z"}}),n("path",{attrs:{d:"M31.434 22.869H12.805a.75.75 0 0 1 0-1.5h18.628a.75.75 0 0 1 .001 1.5z"}}),n("path",{attrs:{d:"M22.119 32.183a.75.75 0 0 1-.75-.75V12.806a.75.75 0 0 1 1.5 0v18.626a.75.75 0 0 1-.75.751z"}})])},r=function(){return"/Users/droyer/Learning House/vlh-library/src/assets/images/add-circle-outline.svg"};e.exports={render:n,toString:r}},function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44.238 44.238"}},[n("path",{attrs:{d:"M22.119 44.237C9.922 44.237 0 34.315 0 22.12 0 9.924 9.922.001 22.119.001S44.238 9.923 44.238 22.12s-9.922 22.117-22.119 22.117zm0-42.736C10.75 1.501 1.5 10.751 1.5 22.12s9.25 20.619 20.619 20.619 20.619-9.25 20.619-20.619-9.25-20.619-20.619-20.619z"}}),n("path",{attrs:{d:"M31.434 22.869H12.805a.75.75 0 0 1 0-1.5h18.628a.75.75 0 0 1 .001 1.5z"}})])},r=function(){return"/Users/droyer/Learning House/vlh-library/src/assets/images/remove-circle-outline.svg"};e.exports={render:n,toString:r}},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.icon,{tag:"component",staticClass:"icon",style:{fill:e.color,width:e.size,height:e.size},attrs:{id:e.id}})},i=[]},function(e,t,n){"use strict";function r(e){n(45)}var i=n(8),s=n(47),a=n(0),o=r,c=Object(a.a)(i.a,s.a,s.b,!1,o,null,null);t.a=c.exports},function(e,t){},function(e,t,n){"use strict";function r(e,t,n){var r;return function(){var i=this,s=arguments,a=function(){r=null,n||e.apply(i,s)},o=n&&!r;clearTimeout(r),r=setTimeout(a,t),o&&e.apply(i,s)}}t.a=r},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-filter"},[n("label",{staticClass:"sr-only",attrs:{for:"searchFilter"}},[e._v("Search For a Degree")]),e._v(" "),n("input",e._b({staticClass:"search-filter-input",attrs:{name:"searchFilter",type:"text"},domProps:{value:e.value},on:{input:function(t){e.debouncedSearch(t.target.value)}}},"input",e.$attrs,!1)),e._v(" "),n("div",{staticClass:"search-icon-wrapper",class:{clickable:e.searchQueryExists},attrs:{role:"button","aria-label":"Clear Search",tabindex:"0"},on:{click:e.clearSearch,keypress:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.clearSearch(t):null}}},[n("icon",{key:e.searchFilterIcon,staticClass:"search-icon",attrs:{size:"24px",icon:e.searchFilterIcon,alt:"Search Box"}})],1)])},i=[]},function(e,t,n){"use strict";function r(e){n(49)}var i=n(9),s=n(50),a=n(0),o=r,c=Object(a.a)(i.a,s.a,s.b,!1,o,null,null);t.a=c.exports},function(e,t){},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition",{attrs:{name:"accordion"},on:{"before-enter":e.beforeEnter,enter:e.enter,"before-leave":e.beforeLeave,leave:e.leave}},[e._t("default")],2)},i=[]},function(e,t,n){"use strict";t.a={data:function(){return{mobile:!1}},mounted:function(){var e=window.matchMedia("(min-width: 800px)");e.addListener(this.widthHandler),this.widthHandler(e)},methods:{widthHandler:function(e){e.matches?this.mobile=!1:this.mobile=!0}}}},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}n(53);t.a={data:function(){return{degrees:[],degreeLevels:[],degreeAreas:[],currentDegreeLevelFilter:null,currentDegreeAreaFilter:null,currentDegreeSearchFilter:"",showDegreeLevelFilter:!1,showDegreeAreaFilter:!1}},computed:{degreeList:function(){if(!this.degrees)return[];var e=new Set(this.filteredDegreesByArea),t=new Set(this.filteredDegreesByLevel),n=new Set(this.filteredDegreesBySearch);return[].concat(r(new Set([].concat(r(e)).filter(function(e){return t.has(e)&&n.has(e)}))))},filteredDegreesBySearch:function(){var e=this;return this.currentDegreeSearchFilter?this.degrees.filter(function(t){return t.post_title.toLowerCase().includes(e.currentDegreeSearchFilter.toLowerCase())}):this.degrees},filteredDegreesByArea:function(){var e=this;return this.currentDegreeAreaFilter?this.degrees.filter(function(t){return t.areas.includes(e.currentDegreeAreaFilter.term_id)}):this.degrees},filteredDegreesByLevel:function(){var e=this;return this.currentDegreeLevelFilter?this.degrees.filter(function(t){return t.levels.includes(e.currentDegreeLevelFilter.term_id)}):this.degrees}},methods:{handleFilterHeadingClick:function(e,t){this.mobile&&(t&&(this[t]=!1),this[e]=!this[e])},updateFilter:function(e){"degree_vertical"===e.taxonomy?this.currentDegreeAreaFilter=e:this.currentDegreeLevelFilter=e}}}},function(e,t,n){"use strict"},function(e,t){}])});

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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4f9632b8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/scripts/VlhFiltering.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "main",
    { staticClass: "content", attrs: { id: "app" } },
    [
      _c(
        "div",
        { staticClass: "degree-filters" },
        [
          _c("search-filter", {
            model: {
              value: _vm.currentDegreeSearchFilter,
              callback: function($$v) {
                _vm.currentDegreeSearchFilter = $$v
              },
              expression: "currentDegreeSearchFilter"
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "filter-list-wrapper" },
            [
              _c("filter-list-heading", {
                attrs: {
                  selectedFilter: _vm.currentDegreeLevelFilter,
                  "icon-dropdown-color": "#cc1f1b",
                  "icon-reset-color": "gray",
                  heading: "Degree Levels"
                },
                on: {
                  "toggle-filter-visibility": function($event) {
                    _vm.handleFilterHeadingClick(
                      "showDegreeLevelFilter",
                      "showDegreeAreaFilter"
                    )
                  },
                  "update:selectedFilter": function($event) {
                    _vm.currentDegreeLevelFilter = $event
                  }
                }
              }),
              _vm._v(" "),
              _vm.currentDegreeLevelFilter && _vm.mobile
                ? _c(
                    "div",
                    { staticClass: "filter-list-status" },
                    [
                      _c("span", {
                        staticClass: "text",
                        domProps: {
                          innerHTML: _vm._s(_vm.currentDegreeLevelFilter.name)
                        }
                      }),
                      _vm._v(" "),
                      _c("icon", {
                        staticClass: "icon-button",
                        attrs: {
                          icon: "clear-search",
                          color: "black",
                          size: "22px"
                        },
                        nativeOn: {
                          click: function($event) {
                            _vm.currentDegreeLevelFilter = null
                          }
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "filter-list",
                {
                  attrs: {
                    visible: _vm.showDegreeLevelFilter,
                    "selected-filter": _vm.currentDegreeLevelFilter
                  },
                  on: {
                    "update:visible": function($event) {
                      _vm.showDegreeLevelFilter = $event
                    },
                    "update:selectedFilter": function($event) {
                      _vm.currentDegreeLevelFilter = $event
                    }
                  }
                },
                [
                  _c("filter-reset", { attrs: { label: "All Levels" } }),
                  _vm._v(" "),
                  _vm._l(_vm.degreeLevels, function(item) {
                    return _c("filter-item", {
                      key: item.term_id,
                      attrs: { item: item }
                    })
                  })
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "filter-list-wrapper" },
            [
              _c("filter-list-heading", {
                attrs: {
                  selectedFilter: _vm.currentDegreeAreaFilter,
                  "icon-dropdown-color": "#cc1f1b",
                  "icon-reset-color": "gray",
                  heading: "Degree Areas"
                },
                on: {
                  "toggle-filter-visibility": function($event) {
                    _vm.handleFilterHeadingClick(
                      "showDegreeAreaFilter",
                      "showDegreeLevelFilter"
                    )
                  },
                  "update:selectedFilter": function($event) {
                    _vm.currentDegreeAreaFilter = $event
                  }
                }
              }),
              _vm._v(" "),
              _vm.currentDegreeAreaFilter && _vm.mobile
                ? _c(
                    "div",
                    { staticClass: "filter-list-status" },
                    [
                      _c("span", {
                        staticClass: "text",
                        domProps: {
                          innerHTML: _vm._s(_vm.currentDegreeAreaFilter.name)
                        }
                      }),
                      _vm._v(" "),
                      _c("icon", {
                        staticClass: "icon-button",
                        attrs: {
                          icon: "clear-search",
                          color: "black",
                          size: "22px"
                        },
                        nativeOn: {
                          click: function($event) {
                            _vm.currentDegreeAreaFilter = null
                          }
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "filter-list",
                {
                  attrs: {
                    visible: _vm.showDegreeAreaFilter,
                    "selected-filter": _vm.currentDegreeAreaFilter
                  },
                  on: {
                    "update:visible": function($event) {
                      _vm.showDegreeAreaFilter = $event
                    },
                    "update:selectedFilter": function($event) {
                      _vm.currentDegreeAreaFilter = $event
                    }
                  }
                },
                [
                  _c("filter-reset", { attrs: { label: "All Levels" } }),
                  _vm._v(" "),
                  _vm._l(_vm.degreeAreas, function(item) {
                    return _c("FilterItem", {
                      key: item.term_id,
                      attrs: { item: item }
                    })
                  })
                ],
                2
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "degree-list",
        _vm._l(_vm.degreeList, function(degree) {
          return _c("degree-item", { key: degree.ID, attrs: { item: degree } })
        })
      ),
      _vm._v(" "),
      !_vm.degreeList.length
        ? _c("h1", { staticClass: "no-results" }, [_vm._v("No Matches")])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4f9632b8", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4f9632b8\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/scripts/VlhFiltering.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4f9632b8\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/scripts/VlhFiltering.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("f931f7ce", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4f9632b8\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VlhFiltering.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4f9632b8\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VlhFiltering.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__("./node_modules/vue-style-loader/lib/listToStyles.js")

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./src/scripts/VlhFiltering.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4f9632b8\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/scripts/VlhFiltering.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/scripts/VlhFiltering.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4f9632b8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/scripts/VlhFiltering.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "src/scripts/VlhFiltering.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f9632b8", Component.options)
  } else {
    hotAPI.reload("data-v-4f9632b8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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

/***/ "./src/scripts/helpers/buildDegreeList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buildDegreeList;
function buildDegreeList(Degrees) {
  return Degrees.map(function (degree, index) {
    var levelsArray = [];
    var areasArray = [];

    if (degree.degree_levels) {
      levelsArray = degree.degree_levels.map(function (level) {
        return level.term_id;
      });
    }

    if (degree.degree_areas) {
      areasArray = degree.degree_areas.map(function (area) {
        return area.term_id;
      });
    }

    degree['levels'] = levelsArray;
    degree['areas'] = areasArray;
    return degree;
  });
}

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scripts_vlh_filtering__ = __webpack_require__("./src/scripts/vlh-filtering.js");
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
Object(__WEBPACK_IMPORTED_MODULE_5__scripts_vlh_filtering__["default"])();

/* Dynamic Imports - Loading based on conditions
*****************************/
function handleAccordions() {
	if (document.querySelector(__WEBPACK_IMPORTED_MODULE_0_themeConfig___default.a.selectors.accordion) !== null) {
		return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, "./src/scripts/components/accordion.js"));
	}
}

// function handleDegreeFiltering() {
// 	if (document.querySelector(Config.selectors.mixItUp) !== null) {
// 		return import(/* webpackChunkName: "degree-filtering" */ "@/scripts/components/degree-filtering");
// 	}
// }

function handleSocialShare() {
	if (document.querySelector(__WEBPACK_IMPORTED_MODULE_0_themeConfig___default.a.selectors.socialShare) !== null) {
		return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, "./src/scripts/components/social-share-buttons.js"));
	}
}

function handleStickyElements() {
	if (document.querySelector(__WEBPACK_IMPORTED_MODULE_0_themeConfig___default.a.selectors.sticky) !== null) {
		return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, "./src/scripts/components/sticky.js"));
	}
}

function handleSlider() {
	if (document.querySelector(__WEBPACK_IMPORTED_MODULE_0_themeConfig___default.a.selectors.slider) !== null) {
		return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, "./src/scripts/components/slider.js"));
	}
}

/* Calling Dynamic Import Functions
*****************************/
handleAccordions();
// handleDegreeFiltering();
handleSocialShare();
handleStickyElements();
handleSlider();

/***/ }),

/***/ "./src/scripts/vlh-filtering.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vlh_library__ = __webpack_require__("./node_modules/vlh-library/dist/vlh-library.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vlh_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vlh_library__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VlhFiltering__ = __webpack_require__("./src/scripts/VlhFiltering.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VlhFiltering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__VlhFiltering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_helpers_buildDegreeList__ = __webpack_require__("./src/scripts/helpers/buildDegreeList.js");




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vlh_library___default.a);

var VlhAppEl = document.getElementById('vlh-filtering');

/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (VlhAppEl) {
    var vlhApp = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
      el: VlhAppEl,
      mixins: [__WEBPACK_IMPORTED_MODULE_1_vlh_library__["degreeMixin"]],
      mounted: function mounted() {
        this.degrees = Object(__WEBPACK_IMPORTED_MODULE_3__scripts_helpers_buildDegreeList__["a" /* buildDegreeList */])(wpData.degrees);
        this.degreeLevels = wpData.degreeLevels;
        this.degreeAreas = wpData.degreeAreas;
      }
    });
  }
});

// export default () => {
//   if (VlhAppEl) {
//   	var VlhFilteringInstance = new Vue({
//   		el: VlhAppEl,
//       render: html => html(VlhFiltering)
//   	})
//   }
// }

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
	purgecssWhitelist: ["requestinfo", "menu-main-menu", "current_page_item", "fieldset", "legend", "label"],
	purgecssWhitelistPatterns: [/^elp(_.*)?$/, /^keep-nested-children/]
};

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/scripts/scripts.js");


/***/ })

},[1]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3NjcmlwdHMvVmxoRmlsdGVyaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9CdXR0b25Db3VudGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9WbGhGaWx0ZXJpbmcudnVlPzAxZGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92bGgtbGlicmFyeS9kaXN0L3ZsaC1saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9WbGhMaWJyYXJ5L0J1dHRvbkNvdW50ZXIudnVlP2FjY2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvVmxoRmlsdGVyaW5nLnZ1ZT82MTI3Iiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL1ZsaEZpbHRlcmluZy52dWU/OGEzMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvVmxoRmlsdGVyaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9WbGhMaWJyYXJ5L0J1dHRvbkNvdW50ZXIudnVlIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL1ZsaExpYnJhcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9tYWluLW5hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZXhhbXBsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZXhhbXBsZXMvZXhhbXBsZS1pbXBvcnQxLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2V4YW1wbGVzL2V4YW1wbGUtaW1wb3J0Mi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9oZWxwZXJzL2J1aWxkRGVncmVlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9oZWxwZXJzL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3ZsaC1maWx0ZXJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWUuY29uZmlnLmpzIl0sIm5hbWVzIjpbIlZ1ZSIsImNvbXBvbmVudCIsIlZsaEFwcEVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZsaEFwcCIsImVsIiwiZGF0YSIsIm1zZyIsInNob3dNb2RhbCIsImNvbXBvbmVudHMiLCJBc3luY0NvbXBvbmVudCIsIk1vZGFsIiwiJCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCJpbnNlcnRTdWJtZW51VG9nZ2xlQnV0dG9ucyIsInN1Ym1lbnVMaW5rcyIsInN1Ym1lbnVCdXR0b25zSFRNTCIsImFmdGVyIiwidG9nZ2xlU3VibWVudVN0YXRlIiwiQ3VycmVudFN1Ym1lbnUiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJoYW5kbGVBY3RpdmVTdWJtZW51IiwiUmVsZXZhbnRTdWJtZW51cyIsImFjdGl2ZVN1Ym1lbnUiLCJmaWx0ZXIiLCJhY3RpdmVTdWJtZW51QnV0dG9uIiwicHJldiIsInNsaWRlVXAiLCJNYWluTWVudSIsIk1lbnVJdGVtc1dpdGhDaGlsZHJlbiIsImZpbmQiLCJMaW5rc0ZvclN1Ym1lbnVzIiwiQnV0dG9uSFRNTCIsIlN1Ym1lbnVzIiwiY2hpbGRyZW4iLCJDaGlsZHJlblN1Ym1lbnVzIiwiU3VibWVudUJ1dHRvbnMiLCJDaGlsZHJlblN1Ym1lbnVCdXR0b25zIiwid2luZG93V2lkdGgiLCJTZXR1cCIsInRvZ2dsZVN1Ym1lbnUiLCJTdWJtZW51Iiwic2xpZGVUb2dnbGUiLCJzZXRXaW5kb3dXaWR0aCIsIndpbmRvdyIsIndpZHRoIiwid2luZG93V2F0Y2hlciIsInJlc2l6ZSIsImlzIiwicmVtb3ZlQXR0ciIsIm5ld0FjdGl2ZVN1Ym1lbnUiLCJwYXJlbnRzIiwibGFzdCIsImtleUNvZGUiLCJzaGlmdEtleSIsImNsaWNrRXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJuZXh0IiwiaGFzT3BlblN1Ym1lbnUiLCJsZW5ndGgiLCJvcGVuaW5nTmV3U3VibWVudSIsImlzQ2hpbGRTdWJtZW51IiwiaGFzT3BlbkNoaWxkU3VibWVudSIsIndpbiIsImV4YW1wbGVzIiwiZXhhbXBsZUZ1bmN0aW9uIiwiaW5pdEV4YW1wbGVJbXBvcnQiLCJjb25zb2xlIiwibG9nIiwicmVhZHkiLCJleGFtcGxlVmFyaWFibGUiLCJidWlsZERlZ3JlZUxpc3QiLCJEZWdyZWVzIiwibWFwIiwiZGVncmVlIiwiaW5kZXgiLCJsZXZlbHNBcnJheSIsImFyZWFzQXJyYXkiLCJkZWdyZWVfbGV2ZWxzIiwibGV2ZWwiLCJ0ZXJtX2lkIiwiZGVncmVlX2FyZWFzIiwiYXJlYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJGb3JtU2VsZWN0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWxlY3QiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJtb2R1bGUiLCJob3QiLCJhY2NlcHQiLCJDb25maWciLCJ1c2VWdWUiLCJpbml0aWFsaXplVmxoTGlicmFyeSIsImluaXRpYWxpemVWbGhGaWx0ZXJpbmciLCJoYW5kbGVBY2NvcmRpb25zIiwicXVlcnlTZWxlY3RvciIsInNlbGVjdG9ycyIsImFjY29yZGlvbiIsImhhbmRsZVNvY2lhbFNoYXJlIiwic29jaWFsU2hhcmUiLCJoYW5kbGVTdGlja3lFbGVtZW50cyIsInN0aWNreSIsImhhbmRsZVNsaWRlciIsInNsaWRlciIsInVzZSIsIm1peGlucyIsIm1vdW50ZWQiLCJkZWdyZWVzIiwid3BEYXRhIiwiZGVncmVlTGV2ZWxzIiwiZGVncmVlQXJlYXMiLCJleHBvcnRzIiwiZGlyZWN0b3J5TmFtZSIsIm1peEl0VXAiLCJwdXJnZWNzc1doaXRlbGlzdCIsInB1cmdlY3NzV2hpdGVsaXN0UGF0dGVybnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9FQTtBQUNBOztBQUVBO0FBQ0Esb0VBREE7QUFFQSxTQUZBLHFCQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQSxHOzs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUNBLHVCQURBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQU5BLEc7Ozs7Ozs7QUNMQTtBQUNBOzs7QUFHQTtBQUNBLGtEQUFtRCwwUEFBMFA7O0FBRTdTOzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCO0FBQ25ELElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7O0FBRWxFO0FBQ0E7Ozs7Ozs7O0FDM0VBLGVBQWUsNklBQXlMLGdEQUFnRCxtQkFBbUIsY0FBYyw0QkFBNEIsWUFBWSxxQkFB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QixPQU5rQixDQVZIO0FBa0JoQkMsNEJBQTJCLENBQzFCLGFBRDBCLEVBRTFCLHVCQUYwQjtBQWxCWCxDQUFqQixDIiwiZmlsZSI6Ii9qcy9zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8bWFpbiBpZD1cImFwcFwiIGNsYXNzPVwiY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJkZWdyZWUtZmlsdGVyc1wiPlxuXG4gICAgICA8c2VhcmNoLWZpbHRlciB2LW1vZGVsPVwiY3VycmVudERlZ3JlZVNlYXJjaEZpbHRlclwiPjwvc2VhcmNoLWZpbHRlcj5cblxuICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci1saXN0LXdyYXBwZXJcIj5cbiAgICAgICAgPGZpbHRlci1saXN0LWhlYWRpbmdcbiAgICAgICAgICBAdG9nZ2xlLWZpbHRlci12aXNpYmlsaXR5PVwiaGFuZGxlRmlsdGVySGVhZGluZ0NsaWNrKCdzaG93RGVncmVlTGV2ZWxGaWx0ZXInLCAnc2hvd0RlZ3JlZUFyZWFGaWx0ZXInKVwiXG4gICAgICAgICAgOnNlbGVjdGVkRmlsdGVyLnN5bmM9XCJjdXJyZW50RGVncmVlTGV2ZWxGaWx0ZXJcIlxuICAgICAgICAgIGljb24tZHJvcGRvd24tY29sb3I9XCIjY2MxZjFiXCJcbiAgICAgICAgICBpY29uLXJlc2V0LWNvbG9yPVwiZ3JheVwiXG4gICAgICAgICAgaGVhZGluZz1cIkRlZ3JlZSBMZXZlbHNcIj5cbiAgICAgICAgPC9maWx0ZXItbGlzdC1oZWFkaW5nPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItbGlzdC1zdGF0dXNcIiB2LWlmPVwiY3VycmVudERlZ3JlZUxldmVsRmlsdGVyICYmIG1vYmlsZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiIHYtaHRtbD1cImN1cnJlbnREZWdyZWVMZXZlbEZpbHRlci5uYW1lXCI+PC9zcGFuPlxuICAgICAgICAgIDxpY29uIGNsYXNzPVwiaWNvbi1idXR0b25cIiBAY2xpY2submF0aXZlPVwiY3VycmVudERlZ3JlZUxldmVsRmlsdGVyID0gbnVsbFwiIGljb249XCJjbGVhci1zZWFyY2hcIiBjb2xvcj1cImJsYWNrXCIgc2l6ZT1cIjIycHhcIj48L2ljb24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGZpbHRlci1saXN0XG4gICAgICAgICAgICA6dmlzaWJsZS5zeW5jPVwic2hvd0RlZ3JlZUxldmVsRmlsdGVyXCJcbiAgICAgICAgICAgIDpzZWxlY3RlZC1maWx0ZXIuc3luYz1cImN1cnJlbnREZWdyZWVMZXZlbEZpbHRlclwiPlxuICAgICAgICAgICAgPGZpbHRlci1yZXNldCBsYWJlbD1cIkFsbCBMZXZlbHNcIj48L2ZpbHRlci1yZXNldD5cbiAgICAgICAgICAgIDxmaWx0ZXItaXRlbVxuICAgICAgICAgICAgICB2LWZvcj1cIml0ZW0gaW4gZGVncmVlTGV2ZWxzXCJcbiAgICAgICAgICAgICAgOml0ZW09XCJpdGVtXCJcbiAgICAgICAgICAgICAgOmtleT1cIml0ZW0udGVybV9pZFwiPlxuICAgICAgICAgICAgPC9maWx0ZXItaXRlbT5cbiAgICAgICAgICA8L2ZpbHRlci1saXN0PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItbGlzdC13cmFwcGVyXCI+XG4gICAgICAgIDxmaWx0ZXItbGlzdC1oZWFkaW5nXG4gICAgICAgICAgQHRvZ2dsZS1maWx0ZXItdmlzaWJpbGl0eT1cImhhbmRsZUZpbHRlckhlYWRpbmdDbGljaygnc2hvd0RlZ3JlZUFyZWFGaWx0ZXInLCAnc2hvd0RlZ3JlZUxldmVsRmlsdGVyJylcIlxuICAgICAgICAgIDpzZWxlY3RlZEZpbHRlci5zeW5jPVwiY3VycmVudERlZ3JlZUFyZWFGaWx0ZXJcIlxuICAgICAgICAgIGljb24tZHJvcGRvd24tY29sb3I9XCIjY2MxZjFiXCJcbiAgICAgICAgICBpY29uLXJlc2V0LWNvbG9yPVwiZ3JheVwiXG4gICAgICAgICAgaGVhZGluZz1cIkRlZ3JlZSBBcmVhc1wiPlxuICAgICAgICA8L2ZpbHRlci1saXN0LWhlYWRpbmc+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci1saXN0LXN0YXR1c1wiIHYtaWY9XCJjdXJyZW50RGVncmVlQXJlYUZpbHRlciAmJiBtb2JpbGVcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIiB2LWh0bWw9XCJjdXJyZW50RGVncmVlQXJlYUZpbHRlci5uYW1lXCI+PC9zcGFuPlxuICAgICAgICAgIDxpY29uIGNsYXNzPVwiaWNvbi1idXR0b25cIiBAY2xpY2submF0aXZlPVwiY3VycmVudERlZ3JlZUFyZWFGaWx0ZXIgPSBudWxsXCIgaWNvbj1cImNsZWFyLXNlYXJjaFwiIGNvbG9yPVwiYmxhY2tcIiBzaXplPVwiMjJweFwiPjwvaWNvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGZpbHRlci1saXN0XG4gICAgICAgICAgOnZpc2libGUuc3luYz1cInNob3dEZWdyZWVBcmVhRmlsdGVyXCJcbiAgICAgICAgICA6c2VsZWN0ZWQtZmlsdGVyLnN5bmM9XCJjdXJyZW50RGVncmVlQXJlYUZpbHRlclwiPlxuICAgICAgICAgIDxmaWx0ZXItcmVzZXQgbGFiZWw9XCJBbGwgTGV2ZWxzXCI+PC9maWx0ZXItcmVzZXQ+XG4gICAgICAgICAgPEZpbHRlckl0ZW1cbiAgICAgICAgICAgIHYtZm9yPVwiaXRlbSBpbiBkZWdyZWVBcmVhc1wiXG4gICAgICAgICAgICA6aXRlbT1cIml0ZW1cIlxuICAgICAgICAgICAgOmtleT1cIml0ZW0udGVybV9pZFwiPlxuICAgICAgICAgIDwvRmlsdGVySXRlbT5cbiAgICAgICAgPC9maWx0ZXItbGlzdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRlZ3JlZS1saXN0PlxuICAgICAgPGRlZ3JlZS1pdGVtIHYtZm9yPVwiZGVncmVlIGluIGRlZ3JlZUxpc3RcIiA6aXRlbT1cImRlZ3JlZVwiIDprZXk9XCJkZWdyZWUuSURcIiAvPlxuICAgIDwvZGVncmVlLWxpc3Q+XG5cbiAgICA8aDEgY2xhc3M9XCJuby1yZXN1bHRzXCIgdi1pZj1cIiFkZWdyZWVMaXN0Lmxlbmd0aFwiPk5vIE1hdGNoZXM8L2gxPlxuICA8L21haW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHtkZWdyZWVNaXhpbn0gZnJvbSAndmxoLWxpYnJhcnknXG5pbXBvcnQge2J1aWxkRGVncmVlTGlzdH0gZnJvbSAnQC9zY3JpcHRzL2hlbHBlcnMvYnVpbGREZWdyZWVMaXN0J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW2RlZ3JlZU1peGluXSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmRlZ3JlZXMgPSBidWlsZERlZ3JlZUxpc3Qod3BEYXRhLmRlZ3JlZXMpO1xuICAgIHRoaXMuZGVncmVlTGV2ZWxzID0gd3BEYXRhLmRlZ3JlZUxldmVsc1xuICAgIHRoaXMuZGVncmVlQXJlYXMgPSB3cERhdGEuZGVncmVlQXJlYXNcbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4gIC8qIFRlbXBvcmFyeSAqL1xuICAvLyAuZGVncmVlLWZpbHRlcnMge1xuICAvLyAgIGZsZXg6IDEgMSAzMjBweDtcbiAgLy8gICBAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLy8gICAgIG1heC13aWR0aDogMzIwcHg7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vIC5kZWdyZWUtbGlzdCB7XG4gIC8vICAgZmxleDogMSAxIGNhbGMoMTAwJSAtIDM2MHB4KTtcbiAgLy8gfVxuICAvLyBtYWluLmNvbnRlbnQge1xuICAvLyAgIHdpZHRoOiAxNDQwcHg7XG4gIC8vICAgZGlzcGxheTogZmxleDtcbiAgLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC8vICAgbWFyZ2luOiA0ZW0gYXV0bztcbiAgLy8gICBtYXgtd2lkdGg6IDEwMCU7XG4gIC8vICAgcGFkZGluZzogMS4yNWVtO1xuICAvLyB9XG4gIC8vXG4gIC8vIC5maWx0ZXItY2xlYXIge1xuICAvLyAgIGRpc3BsYXk6IGZsZXg7XG4gIC8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8vIH1cblxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zY3JpcHRzL1ZsaEZpbHRlcmluZy52dWUiLCI8dGVtcGxhdGUgbGFuZz1cImh0bWxcIj5cbiAgPGJ1dHRvbiB2LW9uOmNsaWNrPVwiY291bnQrK1wiPllvdSBjbGlja2VkIG1lIHt7IGNvdW50IH19IHRpbWVzLjwvYnV0dG9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0J1dHRvbkNvdW50ZXInLFxuICBkYXRhOiAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvdW50OiAwXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2NyaXB0cy9WbGhMaWJyYXJ5L0J1dHRvbkNvdW50ZXIudnVlIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIFRlbXBvcmFyeSAqL1xcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvZHJveWVyL0xvY2FsIFNpdGVzL3N0YXJ0ZXItMjAvYXBwL3B1YmxpYy93cC1jb250ZW50L3RoZW1lcy9zdGFydGVyLXRoZW1lL3NyYy9zY3JpcHRzL1ZsaEZpbHRlcmluZy52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZUFBZVwiLFwiZmlsZVwiOlwiVmxoRmlsdGVyaW5nLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUZW1wb3JhcnkgKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNGY5NjMyYjhcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3NjcmlwdHMvVmxoRmlsdGVyaW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNGY5NjMyYjhcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3NjcmlwdHMvVmxoRmlsdGVyaW5nLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyIsIihmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuVmxoTGlicmFyeT10KCk6ZS5WbGhMaWJyYXJ5PXQoKX0pKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHIpe2lmKG5bcl0pcmV0dXJuIG5bcl0uZXhwb3J0czt2YXIgaT1uW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtyXS5jYWxsKGkuZXhwb3J0cyxpLGkuZXhwb3J0cyx0KSxpLmw9ITAsaS5leHBvcnRzfXZhciBuPXt9O3JldHVybiB0Lm09ZSx0LmM9bix0LmQ9ZnVuY3Rpb24oZSxuLHIpe3QubyhlLG4pfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6cn0pfSx0Lm49ZnVuY3Rpb24oZSl7dmFyIG49ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHQuZChuLFwiYVwiLG4pLG59LHQubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sdC5wPVwiL1wiLHQodC5zPTEwKX0oW2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUsdCxuLHIsaSxzLGEsbyl7ZT1lfHx7fTt2YXIgYz10eXBlb2YgZS5kZWZhdWx0O1wib2JqZWN0XCIhPT1jJiZcImZ1bmN0aW9uXCIhPT1jfHwoZT1lLmRlZmF1bHQpO3ZhciBsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZS5vcHRpb25zOmU7dCYmKGwucmVuZGVyPXQsbC5zdGF0aWNSZW5kZXJGbnM9bixsLl9jb21waWxlZD0hMCksciYmKGwuZnVuY3Rpb25hbD0hMCkscyYmKGwuX3Njb3BlSWQ9cyk7dmFyIHU7aWYoYT8odT1mdW5jdGlvbihlKXtlPWV8fHRoaXMuJHZub2RlJiZ0aGlzLiR2bm9kZS5zc3JDb250ZXh0fHx0aGlzLnBhcmVudCYmdGhpcy5wYXJlbnQuJHZub2RlJiZ0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCxlfHxcInVuZGVmaW5lZFwiPT10eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfX3x8KGU9X19WVUVfU1NSX0NPTlRFWFRfXyksaSYmaS5jYWxsKHRoaXMsZSksZSYmZS5fcmVnaXN0ZXJlZENvbXBvbmVudHMmJmUuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChhKX0sbC5fc3NyUmVnaXN0ZXI9dSk6aSYmKHU9bz9mdW5jdGlvbigpe2kuY2FsbCh0aGlzLHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCl9OmkpLHUpaWYobC5mdW5jdGlvbmFsKXtsLl9pbmplY3RTdHlsZXM9dTt2YXIgZj1sLnJlbmRlcjtsLnJlbmRlcj1mdW5jdGlvbihlLHQpe3JldHVybiB1LmNhbGwodCksZihlLHQpfX1lbHNle3ZhciBkPWwuYmVmb3JlQ3JlYXRlO2wuYmVmb3JlQ3JlYXRlPWQ/W10uY29uY2F0KGQsdSk6W3VdfXJldHVybntleHBvcnRzOmUsb3B0aW9uczpsfX10LmE9cn0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3QuYT17bmFtZTpcIkZpbHRlckxpc3RcIixwcm92aWRlOmZ1bmN0aW9uKCl7cmV0dXJue2ZpbHRlclN0YXRlOnRoaXMuZmlsdGVyU3RhdGV9fSxwcm9wczp7ZWxlbWVudFR5cGU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJ1bFwifSx2aXNpYmxlOnt0eXBlOkJvb2xlYW59LHNlbGVjdGVkRmlsdGVyOnt0eXBlOltPYmplY3QsU3RyaW5nXX19LGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57ZmlsdGVyU3RhdGU6e2FjdGl2ZTpudWxsfX19LGNyZWF0ZWQ6ZnVuY3Rpb24oKXt0aGlzLmhhbmRsZU1vYmlsZSgpfSx3YXRjaDp7XCJmaWx0ZXJTdGF0ZS5hY3RpdmVcIjpmdW5jdGlvbihlLHQpe3RoaXMuJGVtaXQoXCJ1cGRhdGU6c2VsZWN0ZWRGaWx0ZXJcIixlKSx0aGlzLm1vYmlsZSYmdGhpcy4kZW1pdChcInVwZGF0ZTp2aXNpYmxlXCIsITEpfSxzZWxlY3RlZEZpbHRlcjpmdW5jdGlvbihlLHQpe3RoaXMuZmlsdGVyU3RhdGUuYWN0aXZlPWV9LG1vYmlsZTpmdW5jdGlvbihlLHQpe3RoaXMuaGFuZGxlTW9iaWxlKCl9fSxtZXRob2RzOntoYW5kbGVNb2JpbGU6ZnVuY3Rpb24oKXt0aGlzLm1vYmlsZT90aGlzLiRlbWl0KFwidXBkYXRlOnZpc2libGVcIiwhMSk6dGhpcy4kZW1pdChcInVwZGF0ZTp2aXNpYmxlXCIsITApfX19fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dC5hPXtuYW1lOlwiRmlsdGVySXRlbVwiLGluamVjdDpbXCJmaWx0ZXJTdGF0ZVwiXSxwcm9wczp7aXRlbTp7dHlwZTpbQXJyYXksT2JqZWN0XX0sZWxlbWVudFR5cGU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJsaVwifSxoYW5kbGVTZWxlY3RlZDpGdW5jdGlvbn0sZGF0YTpmdW5jdGlvbigpe3JldHVybntzaG93U3ViSXRlbXM6ITF9fSxjb21wdXRlZDp7ZmlsdGVyTGlzdFN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZmlsdGVyU3RhdGV9LHNlbGVjdGVkRmlsdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZmlsdGVyU3RhdGUuYWN0aXZlfSxpc1NlbGVjdGVkOmZ1bmN0aW9uKCl7cmV0dXJuISF0aGlzLnNlbGVjdGVkRmlsdGVyJiZ0aGlzLnNlbGVjdGVkRmlsdGVyLnRlcm1faWQ9PT10aGlzLml0ZW0udGVybV9pZH0saGFzU3ViSXRlbXM6ZnVuY3Rpb24oKXtyZXR1cm4hKCF0aGlzLml0ZW0uc3ViX2FyZWFzfHwhdGhpcy5pdGVtLnN1Yl9hcmVhcy5sZW5ndGgpfSxjaGlsZElzU2VsZWN0ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIXRoaXMuc2VsZWN0ZWRGaWx0ZXImJnRoaXMuaXRlbS50ZXJtX2lkPT09dGhpcy5zZWxlY3RlZEZpbHRlci5wYXJlbnR9LGhhc1NlbGVjdGVkQ2xhc3M6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc1NlbGVjdGVkfHx0aGlzLmNoaWxkSXNTZWxlY3RlZH0sZHJvcGRvd25JY29uOmZ1bmN0aW9uKCl7cmV0dXJuITA9PT10aGlzLnNob3dTdWJJdGVtcz9cIkhpZGVTdWJmaWx0ZXJzXCI6XCJTaG93U3ViZmlsdGVyc1wifX0sbWV0aG9kczp7dXBkYXRlU2VsZWN0ZWQ6ZnVuY3Rpb24oKXt0aGlzLmZpbHRlclN0YXRlLmFjdGl2ZT10aGlzLml0ZW19LHN1Yml0ZW1Jc1NlbGVjdGVkOmZ1bmN0aW9uKGUpe3JldHVybiEhdGhpcy5zZWxlY3RlZEZpbHRlciYmZS50ZXJtX2lkPT09dGhpcy5zZWxlY3RlZEZpbHRlci50ZXJtX2lkfX19fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dC5hPXtuYW1lOlwiRmlsdGVyTGlzdEhlYWRpbmdcIixkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnRJY29uOlwiYXJyb3ctZG93blwifX0scHJvcHM6e3NlbGVjdGVkRmlsdGVyOnt0eXBlOltPYmplY3QsU3RyaW5nXX0saGVhZGluZzpTdHJpbmcsbGlzdFZpc2liaWxpdHk6Qm9vbGVhbixpY29uRHJvcGRvd25Db2xvcjpTdHJpbmcsaWNvblJlc2V0Q29sb3I6U3RyaW5nfSxjb21wdXRlZDp7bGlzdFRvZ2dsZUljb246ZnVuY3Rpb24oKXt9fSxtZXRob2RzOntoYW5kbGVUb2dnbGU6ZnVuY3Rpb24oKXt0aGlzLiRlbWl0KFwidG9nZ2xlLWZpbHRlci12aXNpYmlsaXR5XCIpfX0sd2F0Y2g6e2xpc3RWaXNpYmlsaXR5OmZ1bmN0aW9uKGUsdCl7dGhpcy5jdXJyZW50SWNvbj0hMD09PWU/XCJhcnJvdy11cFwiOlwiYXJyb3ctZG93blwifX19fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dC5hPXtuYW1lOlwiRmlsdGVyUmVzZXRcIixpbmplY3Q6W1wiZmlsdGVyU3RhdGVcIl0scHJvcHM6e2lkOnt0eXBlOlN0cmluZ30sdGl0bGU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJBbGxcIn0sZWxlbWVudFR5cGU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJsaVwifX0sY29tcHV0ZWQ6e2ZpbHRlckxpc3RTdGF0ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmZpbHRlclN0YXRlfSxzZWxlY3RlZEZpbHRlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmZpbHRlclN0YXRlLmFjdGl2ZX0saXNTZWxlY3RlZDpmdW5jdGlvbigpe3JldHVybiBudWxsPT09dGhpcy5zZWxlY3RlZEZpbHRlcn19LG1ldGhvZHM6e3VwZGF0ZVNlbGVjdGVkOmZ1bmN0aW9uKCl7dGhpcy5maWx0ZXJTdGF0ZS5hY3RpdmU9bnVsbH19fX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3QuYT17bmFtZTpcIkRlZ3JlZUxpc3RcIixwcm9wczp7aXRlbXM6e3R5cGU6QXJyYXl9LGVsZW1lbnRUeXBlOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiZGl2XCJ9fX19LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt0LmE9e25hbWU6XCJEZWdyZWVJdGVtXCIscHJvcHM6e2l0ZW06e3JlcXVpcmVkOiEwLHR5cGU6T2JqZWN0fSxlbGVtZW50VHlwZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcImxpXCJ9fSxkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue3Nob3dDb250ZW50OiExfX0sY29tcHV0ZWQ6e2RlZ3JlZUNsYXNzZXM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXREZWdyZWVDbGFzc2VzKHRoaXMuaXRlbSl9LHRvZ2dsZUNvbnRlbnRJY29uOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2hvd0NvbnRlbnQ/XCJyZW1vdmUtY2lyY2xlLW91dGxpbmVcIjpcImFkZC1jaXJjbGUtb3V0bGluZVwifX0sbWV0aG9kczp7Z2V0RGVncmVlQ2xhc3NlczpmdW5jdGlvbihlKXt2YXIgdD1lLmRlZ3JlZV9sZXZlbHMsbj1lLmRlZ3JlZV9hcmVhcyxyPXQubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlLnNsdWd8fFwiXCJ9KSxpPW4ubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlLnNsdWc/ZS5zbHVnOlwiXCJ9KTtyZXR1cm4gci5jb25jYXQoaSl9fX19LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDMyKSxpPW4ubihyKSxzPW4oMzMpLGE9bi5uKHMpLG89bigzNCksYz1uLm4obyksbD1uKDM1KSx1PW4ubihsKSxmPW4oMzYpLGQ9bi5uKGYpLGg9bigzNykscD1uLm4oaCksdj1uKDM4KSxtPW4ubih2KSxnPW4oMzkpLGI9bi5uKGcpLHc9big0MCksXz1uLm4odyksUz1uKDQxKSx5PW4ubihTKSxDPW4oNDIpLHg9bi5uKEMpO3QuYT17bmFtZTpcIkljb25cIixwcm9wczp7aWQ6e3R5cGU6U3RyaW5nfSxpY29uOnt0eXBlOltTdHJpbmcsT2JqZWN0LEZ1bmN0aW9uLEFycmF5XX0sY29sb3I6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCIjZmZmXCJ9LHNpemU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCIyNHB4XCJ9fSxjb21wb25lbnRzOntBcnJvd0Rvd246Xy5hLEFycm93VXA6Yi5hLENoZWNrOmkuYSxDbGVhclNlYXJjaDptLmEsSGlkZVN1YmZpbHRlcnM6ZC5hLEljb25TaG93OmMuYSxJY29uSGlkZTphLmEsU2VhcmNoOnAuYSxTaG93U3ViZmlsdGVyczp1LmEsQWRkQ2lyY2xlT3V0bGluZTp5LmEsUmVtb3ZlQ2lyY2xlT3V0bGluZTp4LmF9fX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oNDYpO3QuYT17aW5oZXJpdEF0dHJzOiExLG5hbWU6XCJTZWFyY2hGaWx0ZXJcIixwcm9wczp7dmFsdWU6e3R5cGU6U3RyaW5nfX0sY29tcHV0ZWQ6e3NlYXJjaFF1ZXJ5RXhpc3RzOmZ1bmN0aW9uKCl7cmV0dXJuXCJcIiE9PXRoaXMudmFsdWV9LHNlYXJjaEZpbHRlckljb246ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZWFyY2hRdWVyeUV4aXN0cz9cImNsZWFyLXNlYXJjaFwiOlwic2VhcmNoXCJ9fSxjcmVhdGVkOmZ1bmN0aW9uKCl7dGhpcy5kZWJvdW5jZWRTZWFyY2g9T2JqZWN0KHIuYSkodGhpcy51cGRhdGVTZWFyY2gsNTAwKX0sbWV0aG9kczp7Y2xlYXJTZWFyY2g6ZnVuY3Rpb24oKXt0aGlzLiRlbWl0KFwiaW5wdXRcIixcIlwiKX0sdXBkYXRlU2VhcmNoOmZ1bmN0aW9uKGUpe3RoaXMuJGVtaXQoXCJpbnB1dFwiLGUpfX19fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dC5hPXtuYW1lOlwiQWNjb3JkaW9uVHJhbnNpdGlvblwiLG1ldGhvZHM6e2JlZm9yZUVudGVyOmZ1bmN0aW9uKGUpe2Uuc3R5bGUuaGVpZ2h0PVwiMFwifSxlbnRlcjpmdW5jdGlvbihlKXtlLnN0eWxlLmhlaWdodD1lLnNjcm9sbEhlaWdodCsyMCtcInB4XCJ9LGJlZm9yZUxlYXZlOmZ1bmN0aW9uKGUpe2Uuc3R5bGUuaGVpZ2h0PWUuc2Nyb2xsSGVpZ2h0KzIwK1wicHhcIn0sbGVhdmU6ZnVuY3Rpb24oZSl7ZS5zdHlsZS5oZWlnaHQ9XCIwXCJ9fX19LGZ1bmN0aW9uKGUsdCxuKXtlLmV4cG9ydHM9bigxMSl9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1uKDEyKSxpPW4oMTUpLHM9bigxOCksYT1uKDIxKSxvPW4oMjQpLGM9bigyNyksbD1uKDMwKSx1PW4oNDQpLGY9big0OCksZD1uKDUxKSxoPW4oNTIpLHA9big1NCk7bi5uKHApO24uZCh0LFwiQWNjb3JkaW9uVHJhbnNpdGlvblwiLGZ1bmN0aW9uKCl7cmV0dXJuIGYuYX0pLG4uZCh0LFwiRmlsdGVyTGlzdFwiLGZ1bmN0aW9uKCl7cmV0dXJuIHIuYX0pLG4uZCh0LFwiRmlsdGVySXRlbVwiLGZ1bmN0aW9uKCl7cmV0dXJuIGkuYX0pLG4uZCh0LFwiRmlsdGVyTGlzdEhlYWRpbmdcIixmdW5jdGlvbigpe3JldHVybiBzLmF9KSxuLmQodCxcIkZpbHRlclJlc2V0XCIsZnVuY3Rpb24oKXtyZXR1cm4gYS5hfSksbi5kKHQsXCJEZWdyZWVMaXN0XCIsZnVuY3Rpb24oKXtyZXR1cm4gby5hfSksbi5kKHQsXCJEZWdyZWVJdGVtXCIsZnVuY3Rpb24oKXtyZXR1cm4gYy5hfSksbi5kKHQsXCJJY29uXCIsZnVuY3Rpb24oKXtyZXR1cm4gbC5hfSksbi5kKHQsXCJTZWFyY2hGaWx0ZXJcIixmdW5jdGlvbigpe3JldHVybiB1LmF9KSxuLmQodCxcImRlZ3JlZU1peGluXCIsZnVuY3Rpb24oKXtyZXR1cm4gaC5hfSk7dmFyIHY9e2luc3RhbGw6ZnVuY3Rpb24oZSx0KXtlLmNvbXBvbmVudChmLmEubmFtZSxmLmEpLGUuY29tcG9uZW50KG8uYS5uYW1lLG8uYSksZS5jb21wb25lbnQoYy5hLm5hbWUsYy5hKSxlLmNvbXBvbmVudChyLmEubmFtZSxyLmEpLGUuY29tcG9uZW50KGkuYS5uYW1lLGkuYSksZS5jb21wb25lbnQocy5hLm5hbWUscy5hKSxlLmNvbXBvbmVudChhLmEubmFtZSxhLmEpLGUuY29tcG9uZW50KGwuYS5uYW1lLGwuYSksZS5jb21wb25lbnQodS5hLm5hbWUsdS5hKSxlLm1peGluKGQuYSl9fTtcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuVnVlJiZ3aW5kb3cuVnVlLnVzZSh2KSx0LmRlZmF1bHQ9dn0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7bigxMyl9dmFyIGk9bigxKSxzPW4oMTQpLGE9bigwKSxvPXIsYz1PYmplY3QoYS5hKShpLmEscy5hLHMuYiwhMSxvLG51bGwsbnVsbCk7dC5hPWMuZXhwb3J0c30sZnVuY3Rpb24oZSx0KXt9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtuLmQodCxcImFcIixmdW5jdGlvbigpe3JldHVybiByfSksbi5kKHQsXCJiXCIsZnVuY3Rpb24oKXtyZXR1cm4gaX0pO3ZhciByPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwidHJhbnNpdGlvblwiLHthdHRyczp7bmFtZTpcInNsaWRlLWZhZGVcIn19LFtuKGUuZWxlbWVudFR5cGUse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTplLnZpc2libGUsZXhwcmVzc2lvbjpcInZpc2libGVcIn1dLHRhZzpcImNvbXBvbmVudFwiLHN0YXRpY0NsYXNzOlwiZmlsdGVyLWxpc3RcIn0sW2UuX3QoXCJkZWZhdWx0XCIpXSwyKV0sMSl9LGk9W119LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe24oMTYpfXZhciBpPW4oMikscz1uKDE3KSxhPW4oMCksbz1yLGM9T2JqZWN0KGEuYSkoaS5hLHMuYSxzLmIsITEsbyxudWxsLG51bGwpO3QuYT1jLmV4cG9ydHN9LGZ1bmN0aW9uKGUsdCl7fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7bi5kKHQsXCJhXCIsZnVuY3Rpb24oKXtyZXR1cm4gcn0pLG4uZCh0LFwiYlwiLGZ1bmN0aW9uKCl7cmV0dXJuIGl9KTt2YXIgcj1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihlLmVsZW1lbnRUeXBlLHt0YWc6XCJjb21wb25lbnRcIixzdGF0aWNDbGFzczpcImZpbHRlci1pdGVtXCIsY2xhc3M6e3NlbGVjdGVkOmUuaGFzU2VsZWN0ZWRDbGFzcyxwYXJlbnQ6ZS5oYXNTdWJJdGVtc319LFtuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwiZmlsdGVyLWl0ZW0tY29udGVudFwiLG9uOntjbGljazplLnVwZGF0ZVNlbGVjdGVkfX0sW2UuaXNTZWxlY3RlZD9uKFwiaWNvblwiLHtzdGF0aWNDbGFzczpcInNlbGVjdGVkLWluZGljYXRvclwiLGF0dHJzOntpY29uOlwiY2hlY2tcIn19KTplLl9lKCksZS5fdihcIiBcIiksbihcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ0aXRsZVwiLGRvbVByb3BzOntpbm5lckhUTUw6ZS5fcyhlLml0ZW0ubmFtZSl9fSksZS5fdihcIiBcIiksZS5oYXNTdWJJdGVtcz9uKFwiaWNvblwiLHtzdGF0aWNDbGFzczpcInRvZ2dsZS1zdWJpdGVtc1wiLGF0dHJzOntpY29uOmUuZHJvcGRvd25JY29uLGNvbG9yOlwiIzIyMlwifSxuYXRpdmVPbjp7Y2xpY2s6ZnVuY3Rpb24odCl7dC5zdG9wUHJvcGFnYXRpb24oKSxlLnNob3dTdWJJdGVtcz0hZS5zaG93U3ViSXRlbXN9fX0pOmUuX2UoKV0sMSksZS5fdihcIiBcIiksbihcImFjY29yZGlvbi10cmFuc2l0aW9uXCIsW2UuaGFzU3ViSXRlbXMmJmUuc2hvd1N1Ykl0ZW1zP24oXCJ1bFwiLHtzdGF0aWNDbGFzczpcInN1YmZpbHRlci1saXN0XCJ9LGUuX2woZS5pdGVtLnN1Yl9hcmVhcyxmdW5jdGlvbih0KXtyZXR1cm4gbihcIkZpbHRlckl0ZW1cIix7a2V5OnQudGVybV9pZCxjbGFzczp7c2VsZWN0ZWQ6ZS5zdWJpdGVtSXNTZWxlY3RlZCh0KX0sYXR0cnM6e3NlbGVjdGVkRmlsdGVyOmUuc2VsZWN0ZWRGaWx0ZXIsaXRlbTp0fX0pfSkpOmUuX2UoKV0pXSwxKX0saT1bXX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7bigxOSl9dmFyIGk9bigzKSxzPW4oMjApLGE9bigwKSxvPXIsYz1PYmplY3QoYS5hKShpLmEscy5hLHMuYiwhMSxvLG51bGwsbnVsbCk7dC5hPWMuZXhwb3J0c30sZnVuY3Rpb24oZSx0KXt9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtuLmQodCxcImFcIixmdW5jdGlvbigpe3JldHVybiByfSksbi5kKHQsXCJiXCIsZnVuY3Rpb24oKXtyZXR1cm4gaX0pO3ZhciByPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwiZGl2XCIsZS5fZyh7c3RhdGljQ2xhc3M6XCJmaWx0ZXItbGlzdC1oZWFkaW5nXCIsb246e2NsaWNrOmUuaGFuZGxlVG9nZ2xlfX0sZS4kbGlzdGVuZXJzKSxbbihcImgyXCIse3N0YXRpY0NsYXNzOlwiaGVhZGluZ1wiLGRvbVByb3BzOntpbm5lckhUTUw6ZS5fcyhlLmhlYWRpbmcpfX0pLGUuX3YoXCIgXCIpLGUubW9iaWxlP24oXCJpY29uXCIse2F0dHJzOntpY29uOmUuY3VycmVudEljb24sY29sb3I6ZS5pY29uRHJvcGRvd25Db2xvcn19KTplLl9lKCksZS5fdihcIiBcIiksIWUubW9iaWxlJiZlLnNlbGVjdGVkRmlsdGVyP24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJmaWx0ZXItY2xlYXJcIixvbjp7Y2xpY2s6ZnVuY3Rpb24odCl7ZS4kZW1pdChcInVwZGF0ZTpzZWxlY3RlZEZpbHRlclwiLG51bGwpfX19LFtlLl90KFwiZmlsdGVyLWNsZWFyXCIsW2UuX3YoXCJcXG4gICAgICBDbGVhclxcbiAgICAgIFwiKSxuKFwiaWNvblwiLHtzdGF0aWNDbGFzczpcImljb24tYnV0dG9uXCIsYXR0cnM6e2ljb246XCJjbGVhci1zZWFyY2hcIixjb2xvcjplLmljb25SZXNldENvbG9yfX0pXSldLDIpOmUuX2UoKV0sMSl9LGk9W119LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe24oMjIpfXZhciBpPW4oNCkscz1uKDIzKSxhPW4oMCksbz1yLGM9T2JqZWN0KGEuYSkoaS5hLHMuYSxzLmIsITEsbyxudWxsLG51bGwpO3QuYT1jLmV4cG9ydHN9LGZ1bmN0aW9uKGUsdCl7fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7bi5kKHQsXCJhXCIsZnVuY3Rpb24oKXtyZXR1cm4gcn0pLG4uZCh0LFwiYlwiLGZ1bmN0aW9uKCl7cmV0dXJuIGl9KTt2YXIgcj1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihlLmVsZW1lbnRUeXBlLHt0YWc6XCJjb21wb25lbnRcIixzdGF0aWNDbGFzczpcImZpbHRlci1pdGVtIGZpbHRlci1yZXNldFwiLGNsYXNzOntzZWxlY3RlZDplLmlzU2VsZWN0ZWR9fSxbbihcImRpdlwiLHtzdGF0aWNDbGFzczpcImZpbHRlci1pdGVtLWNvbnRlbnRcIixvbjp7Y2xpY2s6ZS51cGRhdGVTZWxlY3RlZH19LFtlLmlzU2VsZWN0ZWQ/bihcImljb25cIix7c3RhdGljQ2xhc3M6XCJzZWxlY3RlZC1pbmRpY2F0b3JcIixhdHRyczp7aWNvbjpcImNoZWNrXCJ9fSk6ZS5fZSgpLGUuX3YoXCIgXCIpLG4oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidGl0bGVcIixkb21Qcm9wczp7aW5uZXJIVE1MOmUuX3MoZS50aXRsZSl9fSldLDEpXSl9LGk9W119LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe24oMjUpfXZhciBpPW4oNSkscz1uKDI2KSxhPW4oMCksbz1yLGM9T2JqZWN0KGEuYSkoaS5hLHMuYSxzLmIsITEsbyxcImRhdGEtdi0xMjkzNzcwYVwiLG51bGwpO3QuYT1jLmV4cG9ydHN9LGZ1bmN0aW9uKGUsdCl7fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7bi5kKHQsXCJhXCIsZnVuY3Rpb24oKXtyZXR1cm4gcn0pLG4uZCh0LFwiYlwiLGZ1bmN0aW9uKCl7cmV0dXJuIGl9KTt2YXIgcj1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50O3JldHVybihlLl9zZWxmLl9jfHx0KShcInRyYW5zaXRpb24tZ3JvdXBcIix7c3RhdGljQ2xhc3M6XCJkZWdyZWUtbGlzdFwiLGF0dHJzOntuYW1lOlwiYW5pbWF0ZWQtZ3JpZC1pdGVtc1wiLHRhZzplLmVsZW1lbnRUeXBlLGFwcGVhcjpcIlwifX0sW2UuX3QoXCJkZWZhdWx0XCIpXSwyKX0saT1bXX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7bigyOCl9dmFyIGk9big2KSxzPW4oMjkpLGE9bigwKSxvPXIsYz1PYmplY3QoYS5hKShpLmEscy5hLHMuYiwhMSxvLFwiZGF0YS12LWUwYmQ3ODEyXCIsbnVsbCk7dC5hPWMuZXhwb3J0c30sZnVuY3Rpb24oZSx0KXt9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtuLmQodCxcImFcIixmdW5jdGlvbigpe3JldHVybiByfSksbi5kKHQsXCJiXCIsZnVuY3Rpb24oKXtyZXR1cm4gaX0pO3ZhciByPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKGUuZWxlbWVudFR5cGUse3RhZzpcImNvbXBvbmVudFwiLHN0YXRpY0NsYXNzOlwiZGVncmVlLWl0ZW1cIixjbGFzczpbZS5kZWdyZWVDbGFzc2VzLHtvcGVuOmUuc2hvd0NvbnRlbnR9XX0sW2UuX3QoXCJkZWZhdWx0XCIsW24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJkZWdyZWUtaXRlbS1oZWFkZXJcIn0sW24oXCJoMlwiLHtzdGF0aWNDbGFzczpcInRpdGxlXCIsZG9tUHJvcHM6e2lubmVySFRNTDplLl9zKGUuaXRlbS5wb3N0X3RpdGxlKX19KSxlLl92KFwiIFwiKSxuKFwiaWNvblwiLHtzdGF0aWNDbGFzczpcImljb24tYnV0dG9uXCIsYXR0cnM6e2ljb246ZS50b2dnbGVDb250ZW50SWNvbixzaXplOlwiMzBweFwiLGNvbG9yOlwiIzIyMlwifSxuYXRpdmVPbjp7Y2xpY2s6ZnVuY3Rpb24odCl7dC5zdG9wUHJvcGFnYXRpb24oKSxlLnNob3dDb250ZW50PSFlLnNob3dDb250ZW50fX19KV0sMSksZS5fdihcIiBcIiksbihcImFjY29yZGlvbi10cmFuc2l0aW9uXCIsW2Uuc2hvd0NvbnRlbnQ/bihcImRpdlwiLHtzdGF0aWNDbGFzczpcImRlZ3JlZS1pdGVtLWNvbnRlbnRcIn0sW24oXCJwXCIsW2UuX3YoZS5fcyhlLml0ZW0uc3VtbWFyeSkpXSksZS5fdihcIiBcIiksbihcImRpdlwiLHtzdGF0aWNDbGFzczpcImRlZ3JlZS1pdGVtLWN0YVwifSxbbihcImFcIix7YXR0cnM6e2hyZWY6XCIvXCIrZS5pdGVtLnBvc3RfbmFtZX19LFtlLl92KFwiVmlldyBJbmZvXCIpXSldKV0pOmUuX2UoKV0pXSxudWxsLGUuaXRlbSldLDIpfSxpPVtdfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtuKDMxKX12YXIgaT1uKDcpLHM9big0MyksYT1uKDApLG89cixjPU9iamVjdChhLmEpKGkuYSxzLmEscy5iLCExLG8sbnVsbCxudWxsKTt0LmE9Yy5leHBvcnRzfSxmdW5jdGlvbihlLHQpe30sZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcInN2Z1wiLHthdHRyczp7ZmlsbDpcIiNmZmZcIix2aWV3Qm94OlwiMCAwIDI0IDI0XCIseG1sbnM6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifX0sW24oXCJwYXRoXCIse2F0dHJzOntkOlwiTTAgMGgyNHYyNEgwelwiLGZpbGw6XCJub25lXCJ9fSksbihcInBhdGhcIix7YXR0cnM6e2Q6XCJNOSAxNi4xN0w0LjgzIDEybC0xLjQyIDEuNDFMOSAxOSAyMSA3bC0xLjQxLTEuNDF6XCJ9fSldKX0scj1mdW5jdGlvbigpe3JldHVyblwiL1VzZXJzL2Ryb3llci9MZWFybmluZyBIb3VzZS92bGgtbGlicmFyeS9zcmMvYXNzZXRzL2ltYWdlcy9jaGVjay5zdmdcIn07ZS5leHBvcnRzPXtyZW5kZXI6bix0b1N0cmluZzpyfX0sZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcInN2Z1wiLHthdHRyczp7ZmlsbDpcIiNjYTAwMDBcIixoZWlnaHQ6XCIyN1wiLHZpZXdCb3g6XCIwIDAgMjQgMjRcIix3aWR0aDpcIjI3XCIseG1sbnM6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifX0sW24oXCJwYXRoXCIse2F0dHJzOntkOlwiTTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTUgMTMuNTlMMTUuNTkgMTcgMTIgMTMuNDEgOC40MSAxNyA3IDE1LjU5IDEwLjU5IDEyIDcgOC40MSA4LjQxIDcgMTIgMTAuNTkgMTUuNTkgNyAxNyA4LjQxIDEzLjQxIDEyIDE3IDE1LjU5elwifX0pLG4oXCJwYXRoXCIse2F0dHJzOntkOlwiTTAgMGgyNHYyNEgwelwiLGZpbGw6XCJub25lXCJ9fSldKX0scj1mdW5jdGlvbigpe3JldHVyblwiL1VzZXJzL2Ryb3llci9MZWFybmluZyBIb3VzZS92bGgtbGlicmFyeS9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWhpZGUuc3ZnXCJ9O2UuZXhwb3J0cz17cmVuZGVyOm4sdG9TdHJpbmc6cn19LGZ1bmN0aW9uKGUsdCl7dmFyIG49ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJzdmdcIix7YXR0cnM6e2hlaWdodDpcIjI0XCIsd2lkdGg6XCIyNFwiLHhtbG5zOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn19LFtuKFwicGF0aFwiLHthdHRyczp7ZDpcIk0wIDBoMjR2MjRIMHpcIixmaWxsOlwibm9uZVwifX0pLG4oXCJwYXRoXCIse2F0dHJzOntkOlwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bS0yIDE1bC01LTUgMS40MS0xLjQxTDEwIDE0LjE3bDcuNTktNy41OUwxOSA4bC05IDl6XCJ9fSldKX0scj1mdW5jdGlvbigpe3JldHVyblwiL1VzZXJzL2Ryb3llci9MZWFybmluZyBIb3VzZS92bGgtbGlicmFyeS9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLXNob3cuc3ZnXCJ9O2UuZXhwb3J0cz17cmVuZGVyOm4sdG9TdHJpbmc6cn19LGZ1bmN0aW9uKGUsdCl7dmFyIG49ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJzdmdcIix7YXR0cnM6e2ZpbGw6XCIjOUU5RTlFXCIsdmlld0JveDpcIjAgMCAyNCAyNFwiLHhtbG5zOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn19LFtuKFwicGF0aFwiLHthdHRyczp7ZDpcIk0wIDBoMjR2MjRIMHpcIixmaWxsOlwibm9uZVwifX0pLG4oXCJwYXRoXCIse2F0dHJzOntkOlwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTUgMTFoLTR2NGgtMnYtNEg3di0yaDRWN2gydjRoNHYyelwifX0pXSl9LHI9ZnVuY3Rpb24oKXtyZXR1cm5cIi9Vc2Vycy9kcm95ZXIvTGVhcm5pbmcgSG91c2UvdmxoLWxpYnJhcnkvc3JjL2Fzc2V0cy9pbWFnZXMvc2hvdy1zdWJmaWx0ZXJzLnN2Z1wifTtlLmV4cG9ydHM9e3JlbmRlcjpuLHRvU3RyaW5nOnJ9fSxmdW5jdGlvbihlLHQpe3ZhciBuPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwic3ZnXCIse2F0dHJzOntmaWxsOlwiIzllOWU5ZVwiLGhlaWdodDpcIjI0XCIsd2lkdGg6XCIyNFwiLHhtbG5zOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn19LFtuKFwicGF0aFwiLHthdHRyczp7ZDpcIk0wIDBoMjR2MjRIMHpcIixmaWxsOlwibm9uZVwifX0pLG4oXCJwYXRoXCIse2F0dHJzOntkOlwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTUgMTFIN3YtMmgxMHpcIn19KV0pfSxyPWZ1bmN0aW9uKCl7cmV0dXJuXCIvVXNlcnMvZHJveWVyL0xlYXJuaW5nIEhvdXNlL3ZsaC1saWJyYXJ5L3NyYy9hc3NldHMvaW1hZ2VzL2hpZGUtc3ViZmlsdGVycy5zdmdcIn07ZS5leHBvcnRzPXtyZW5kZXI6bix0b1N0cmluZzpyfX0sZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcInN2Z1wiLHthdHRyczp7ZmlsbDpcIiNmZmZcIix2aWV3Qm94OlwiMCAwIDI0IDI0XCIseG1sbnM6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifX0sW24oXCJwYXRoXCIse2F0dHJzOntkOlwiTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAgMCAxNiA5LjUgNi41IDYuNSAwIDEgMCA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elwifX0pLG4oXCJwYXRoXCIse2F0dHJzOntkOlwiTTAgMGgyNHYyNEgwelwiLGZpbGw6XCJub25lXCJ9fSldKX0scj1mdW5jdGlvbigpe3JldHVyblwiL1VzZXJzL2Ryb3llci9MZWFybmluZyBIb3VzZS92bGgtbGlicmFyeS9zcmMvYXNzZXRzL2ltYWdlcy9zZWFyY2guc3ZnXCJ9O2UuZXhwb3J0cz17cmVuZGVyOm4sdG9TdHJpbmc6cn19LGZ1bmN0aW9uKGUsdCl7dmFyIG49ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJzdmdcIix7YXR0cnM6e2ZpbGw6XCIjZmZmXCIsdmlld0JveDpcIjAgMCAyNCAyNFwiLHhtbG5zOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn19LFtuKFwicGF0aFwiLHthdHRyczp7ZDpcIk0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XCJ9fSksbihcInBhdGhcIix7YXR0cnM6e2Q6XCJNMCAwaDI0djI0SDB6XCIsZmlsbDpcIm5vbmVcIn19KV0pfSxyPWZ1bmN0aW9uKCl7cmV0dXJuXCIvVXNlcnMvZHJveWVyL0xlYXJuaW5nIEhvdXNlL3ZsaC1saWJyYXJ5L3NyYy9hc3NldHMvaW1hZ2VzL2NsZWFyLXNlYXJjaC5zdmdcIn07ZS5leHBvcnRzPXtyZW5kZXI6bix0b1N0cmluZzpyfX0sZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcInN2Z1wiLHthdHRyczp7ZmlsbDpcIiNBODFEMzJcIixoZWlnaHQ6XCIyNFwiLHdpZHRoOlwiMjRcIix4bWxuczpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9fSxbbihcInBhdGhcIix7YXR0cnM6e2Q6XCJNNy40MSAxNS40MUwxMiAxMC44M2w0LjU5IDQuNThMMTggMTRsLTYtNi02IDZ6XCJ9fSksbihcInBhdGhcIix7YXR0cnM6e2Q6XCJNMCAwaDI0djI0SDB6XCIsZmlsbDpcIm5vbmVcIn19KV0pfSxyPWZ1bmN0aW9uKCl7cmV0dXJuXCIvVXNlcnMvZHJveWVyL0xlYXJuaW5nIEhvdXNlL3ZsaC1saWJyYXJ5L3NyYy9hc3NldHMvaW1hZ2VzL2Fycm93LXVwLnN2Z1wifTtlLmV4cG9ydHM9e3JlbmRlcjpuLHRvU3RyaW5nOnJ9fSxmdW5jdGlvbihlLHQpe3ZhciBuPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwic3ZnXCIse2F0dHJzOntmaWxsOlwiI0E4MUQzMlwiLGhlaWdodDpcIjI0XCIsd2lkdGg6XCIyNFwiLHhtbG5zOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn19LFtuKFwicGF0aFwiLHthdHRyczp7ZDpcIk03LjQxIDcuODRMMTIgMTIuNDJsNC41OS00LjU4TDE4IDkuMjVsLTYgNi02LTZ6XCJ9fSksbihcInBhdGhcIix7YXR0cnM6e2Q6XCJNMC0uNzVoMjR2MjRIMHpcIixmaWxsOlwibm9uZVwifX0pXSl9LHI9ZnVuY3Rpb24oKXtyZXR1cm5cIi9Vc2Vycy9kcm95ZXIvTGVhcm5pbmcgSG91c2UvdmxoLWxpYnJhcnkvc3JjL2Fzc2V0cy9pbWFnZXMvYXJyb3ctZG93bi5zdmdcIn07ZS5leHBvcnRzPXtyZW5kZXI6bix0b1N0cmluZzpyfX0sZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcInN2Z1wiLHthdHRyczp7eG1sbnM6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLHZpZXdCb3g6XCIwIDAgNDQuMjM4IDQ0LjIzOFwifX0sW24oXCJwYXRoXCIse2F0dHJzOntkOlwiTTIyLjExOSA0NC4yMzdDOS45MjIgNDQuMjM3IDAgMzQuMzE1IDAgMjIuMTIgMCA5LjkyNCA5LjkyMi4wMDEgMjIuMTE5LjAwMVM0NC4yMzggOS45MjMgNDQuMjM4IDIyLjEycy05LjkyNCAyMi4xMTctMjIuMTE5IDIyLjExN3ptMC00Mi43MzZDMTAuNzUgMS41MDEgMS41IDEwLjc1MSAxLjUgMjIuMTJzOS4yNSAyMC42MTkgMjAuNjE5IDIwLjYxOSAyMC42MTktOS4yNSAyMC42MTktMjAuNjE5LTkuMjUtMjAuNjE5LTIwLjYxOS0yMC42MTl6XCJ9fSksbihcInBhdGhcIix7YXR0cnM6e2Q6XCJNMzEuNDM0IDIyLjg2OUgxMi44MDVhLjc1Ljc1IDAgMCAxIDAtMS41aDE4LjYyOGEuNzUuNzUgMCAwIDEgLjAwMSAxLjV6XCJ9fSksbihcInBhdGhcIix7YXR0cnM6e2Q6XCJNMjIuMTE5IDMyLjE4M2EuNzUuNzUgMCAwIDEtLjc1LS43NVYxMi44MDZhLjc1Ljc1IDAgMCAxIDEuNSAwdjE4LjYyNmEuNzUuNzUgMCAwIDEtLjc1Ljc1MXpcIn19KV0pfSxyPWZ1bmN0aW9uKCl7cmV0dXJuXCIvVXNlcnMvZHJveWVyL0xlYXJuaW5nIEhvdXNlL3ZsaC1saWJyYXJ5L3NyYy9hc3NldHMvaW1hZ2VzL2FkZC1jaXJjbGUtb3V0bGluZS5zdmdcIn07ZS5leHBvcnRzPXtyZW5kZXI6bix0b1N0cmluZzpyfX0sZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcInN2Z1wiLHthdHRyczp7eG1sbnM6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLHZpZXdCb3g6XCIwIDAgNDQuMjM4IDQ0LjIzOFwifX0sW24oXCJwYXRoXCIse2F0dHJzOntkOlwiTTIyLjExOSA0NC4yMzdDOS45MjIgNDQuMjM3IDAgMzQuMzE1IDAgMjIuMTIgMCA5LjkyNCA5LjkyMi4wMDEgMjIuMTE5LjAwMVM0NC4yMzggOS45MjMgNDQuMjM4IDIyLjEycy05LjkyMiAyMi4xMTctMjIuMTE5IDIyLjExN3ptMC00Mi43MzZDMTAuNzUgMS41MDEgMS41IDEwLjc1MSAxLjUgMjIuMTJzOS4yNSAyMC42MTkgMjAuNjE5IDIwLjYxOSAyMC42MTktOS4yNSAyMC42MTktMjAuNjE5LTkuMjUtMjAuNjE5LTIwLjYxOS0yMC42MTl6XCJ9fSksbihcInBhdGhcIix7YXR0cnM6e2Q6XCJNMzEuNDM0IDIyLjg2OUgxMi44MDVhLjc1Ljc1IDAgMCAxIDAtMS41aDE4LjYyOGEuNzUuNzUgMCAwIDEgLjAwMSAxLjV6XCJ9fSldKX0scj1mdW5jdGlvbigpe3JldHVyblwiL1VzZXJzL2Ryb3llci9MZWFybmluZyBIb3VzZS92bGgtbGlicmFyeS9zcmMvYXNzZXRzL2ltYWdlcy9yZW1vdmUtY2lyY2xlLW91dGxpbmUuc3ZnXCJ9O2UuZXhwb3J0cz17cmVuZGVyOm4sdG9TdHJpbmc6cn19LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtuLmQodCxcImFcIixmdW5jdGlvbigpe3JldHVybiByfSksbi5kKHQsXCJiXCIsZnVuY3Rpb24oKXtyZXR1cm4gaX0pO3ZhciByPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQ7cmV0dXJuKGUuX3NlbGYuX2N8fHQpKGUuaWNvbix7dGFnOlwiY29tcG9uZW50XCIsc3RhdGljQ2xhc3M6XCJpY29uXCIsc3R5bGU6e2ZpbGw6ZS5jb2xvcix3aWR0aDplLnNpemUsaGVpZ2h0OmUuc2l6ZX0sYXR0cnM6e2lkOmUuaWR9fSl9LGk9W119LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe24oNDUpfXZhciBpPW4oOCkscz1uKDQ3KSxhPW4oMCksbz1yLGM9T2JqZWN0KGEuYSkoaS5hLHMuYSxzLmIsITEsbyxudWxsLG51bGwpO3QuYT1jLmV4cG9ydHN9LGZ1bmN0aW9uKGUsdCl7fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlLHQsbil7dmFyIHI7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGk9dGhpcyxzPWFyZ3VtZW50cyxhPWZ1bmN0aW9uKCl7cj1udWxsLG58fGUuYXBwbHkoaSxzKX0sbz1uJiYhcjtjbGVhclRpbWVvdXQocikscj1zZXRUaW1lb3V0KGEsdCksbyYmZS5hcHBseShpLHMpfX10LmE9cn0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO24uZCh0LFwiYVwiLGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KSxuLmQodCxcImJcIixmdW5jdGlvbigpe3JldHVybiBpfSk7dmFyIHI9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJzZWFyY2gtZmlsdGVyXCJ9LFtuKFwibGFiZWxcIix7c3RhdGljQ2xhc3M6XCJzci1vbmx5XCIsYXR0cnM6e2ZvcjpcInNlYXJjaEZpbHRlclwifX0sW2UuX3YoXCJTZWFyY2ggRm9yIGEgRGVncmVlXCIpXSksZS5fdihcIiBcIiksbihcImlucHV0XCIsZS5fYih7c3RhdGljQ2xhc3M6XCJzZWFyY2gtZmlsdGVyLWlucHV0XCIsYXR0cnM6e25hbWU6XCJzZWFyY2hGaWx0ZXJcIix0eXBlOlwidGV4dFwifSxkb21Qcm9wczp7dmFsdWU6ZS52YWx1ZX0sb246e2lucHV0OmZ1bmN0aW9uKHQpe2UuZGVib3VuY2VkU2VhcmNoKHQudGFyZ2V0LnZhbHVlKX19fSxcImlucHV0XCIsZS4kYXR0cnMsITEpKSxlLl92KFwiIFwiKSxuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwic2VhcmNoLWljb24td3JhcHBlclwiLGNsYXNzOntjbGlja2FibGU6ZS5zZWFyY2hRdWVyeUV4aXN0c30sYXR0cnM6e3JvbGU6XCJidXR0b25cIixcImFyaWEtbGFiZWxcIjpcIkNsZWFyIFNlYXJjaFwiLHRhYmluZGV4OlwiMFwifSxvbjp7Y2xpY2s6ZS5jbGVhclNlYXJjaCxrZXlwcmVzczpmdW5jdGlvbih0KXtyZXR1cm5cImJ1dHRvblwiaW4gdHx8IWUuX2sodC5rZXlDb2RlLFwiZW50ZXJcIiwxMyx0LmtleSxcIkVudGVyXCIpP2UuY2xlYXJTZWFyY2godCk6bnVsbH19fSxbbihcImljb25cIix7a2V5OmUuc2VhcmNoRmlsdGVySWNvbixzdGF0aWNDbGFzczpcInNlYXJjaC1pY29uXCIsYXR0cnM6e3NpemU6XCIyNHB4XCIsaWNvbjplLnNlYXJjaEZpbHRlckljb24sYWx0OlwiU2VhcmNoIEJveFwifX0pXSwxKV0pfSxpPVtdfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtuKDQ5KX12YXIgaT1uKDkpLHM9big1MCksYT1uKDApLG89cixjPU9iamVjdChhLmEpKGkuYSxzLmEscy5iLCExLG8sbnVsbCxudWxsKTt0LmE9Yy5leHBvcnRzfSxmdW5jdGlvbihlLHQpe30sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO24uZCh0LFwiYVwiLGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KSxuLmQodCxcImJcIixmdW5jdGlvbigpe3JldHVybiBpfSk7dmFyIHI9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudDtyZXR1cm4oZS5fc2VsZi5fY3x8dCkoXCJ0cmFuc2l0aW9uXCIse2F0dHJzOntuYW1lOlwiYWNjb3JkaW9uXCJ9LG9uOntcImJlZm9yZS1lbnRlclwiOmUuYmVmb3JlRW50ZXIsZW50ZXI6ZS5lbnRlcixcImJlZm9yZS1sZWF2ZVwiOmUuYmVmb3JlTGVhdmUsbGVhdmU6ZS5sZWF2ZX19LFtlLl90KFwiZGVmYXVsdFwiKV0sMil9LGk9W119LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt0LmE9e2RhdGE6ZnVuY3Rpb24oKXtyZXR1cm57bW9iaWxlOiExfX0sbW91bnRlZDpmdW5jdGlvbigpe3ZhciBlPXdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogODAwcHgpXCIpO2UuYWRkTGlzdGVuZXIodGhpcy53aWR0aEhhbmRsZXIpLHRoaXMud2lkdGhIYW5kbGVyKGUpfSxtZXRob2RzOnt3aWR0aEhhbmRsZXI6ZnVuY3Rpb24oZSl7ZS5tYXRjaGVzP3RoaXMubW9iaWxlPSExOnRoaXMubW9iaWxlPSEwfX19fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IodmFyIHQ9MCxuPUFycmF5KGUubGVuZ3RoKTt0PGUubGVuZ3RoO3QrKyluW3RdPWVbdF07cmV0dXJuIG59cmV0dXJuIEFycmF5LmZyb20oZSl9big1Myk7dC5hPXtkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue2RlZ3JlZXM6W10sZGVncmVlTGV2ZWxzOltdLGRlZ3JlZUFyZWFzOltdLGN1cnJlbnREZWdyZWVMZXZlbEZpbHRlcjpudWxsLGN1cnJlbnREZWdyZWVBcmVhRmlsdGVyOm51bGwsY3VycmVudERlZ3JlZVNlYXJjaEZpbHRlcjpcIlwiLHNob3dEZWdyZWVMZXZlbEZpbHRlcjohMSxzaG93RGVncmVlQXJlYUZpbHRlcjohMX19LGNvbXB1dGVkOntkZWdyZWVMaXN0OmZ1bmN0aW9uKCl7aWYoIXRoaXMuZGVncmVlcylyZXR1cm5bXTt2YXIgZT1uZXcgU2V0KHRoaXMuZmlsdGVyZWREZWdyZWVzQnlBcmVhKSx0PW5ldyBTZXQodGhpcy5maWx0ZXJlZERlZ3JlZXNCeUxldmVsKSxuPW5ldyBTZXQodGhpcy5maWx0ZXJlZERlZ3JlZXNCeVNlYXJjaCk7cmV0dXJuW10uY29uY2F0KHIobmV3IFNldChbXS5jb25jYXQocihlKSkuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiB0LmhhcyhlKSYmbi5oYXMoZSl9KSkpKX0sZmlsdGVyZWREZWdyZWVzQnlTZWFyY2g6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3JldHVybiB0aGlzLmN1cnJlbnREZWdyZWVTZWFyY2hGaWx0ZXI/dGhpcy5kZWdyZWVzLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gdC5wb3N0X3RpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZS5jdXJyZW50RGVncmVlU2VhcmNoRmlsdGVyLnRvTG93ZXJDYXNlKCkpfSk6dGhpcy5kZWdyZWVzfSxmaWx0ZXJlZERlZ3JlZXNCeUFyZWE6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3JldHVybiB0aGlzLmN1cnJlbnREZWdyZWVBcmVhRmlsdGVyP3RoaXMuZGVncmVlcy5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQuYXJlYXMuaW5jbHVkZXMoZS5jdXJyZW50RGVncmVlQXJlYUZpbHRlci50ZXJtX2lkKX0pOnRoaXMuZGVncmVlc30sZmlsdGVyZWREZWdyZWVzQnlMZXZlbDpmdW5jdGlvbigpe3ZhciBlPXRoaXM7cmV0dXJuIHRoaXMuY3VycmVudERlZ3JlZUxldmVsRmlsdGVyP3RoaXMuZGVncmVlcy5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQubGV2ZWxzLmluY2x1ZGVzKGUuY3VycmVudERlZ3JlZUxldmVsRmlsdGVyLnRlcm1faWQpfSk6dGhpcy5kZWdyZWVzfX0sbWV0aG9kczp7aGFuZGxlRmlsdGVySGVhZGluZ0NsaWNrOmZ1bmN0aW9uKGUsdCl7dGhpcy5tb2JpbGUmJih0JiYodGhpc1t0XT0hMSksdGhpc1tlXT0hdGhpc1tlXSl9LHVwZGF0ZUZpbHRlcjpmdW5jdGlvbihlKXtcImRlZ3JlZV92ZXJ0aWNhbFwiPT09ZS50YXhvbm9teT90aGlzLmN1cnJlbnREZWdyZWVBcmVhRmlsdGVyPWU6dGhpcy5jdXJyZW50RGVncmVlTGV2ZWxGaWx0ZXI9ZX19fX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwifSxmdW5jdGlvbihlLHQpe31dKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3ZsaC1saWJyYXJ5L2Rpc3QvdmxoLWxpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3ZsaC1saWJyYXJ5L2Rpc3QvdmxoLWxpYnJhcnkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDciLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIgLyogc2VydmVyIG9ubHkgKi9cbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIHZhciBmdW5jdGlvbmFsID0gb3B0aW9ucy5mdW5jdGlvbmFsXG4gICAgdmFyIGV4aXN0aW5nID0gZnVuY3Rpb25hbFxuICAgICAgPyBvcHRpb25zLnJlbmRlclxuICAgICAgOiBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuXG4gICAgaWYgKCFmdW5jdGlvbmFsKSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJidXR0b25cIixcbiAgICB7XG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmNvdW50KytcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW192bS5fdihcIllvdSBjbGlja2VkIG1lIFwiICsgX3ZtLl9zKF92bS5jb3VudCkgKyBcIiB0aW1lcy5cIildXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMGZkNzViNzhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTBmZDc1Yjc4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9CdXR0b25Db3VudGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0wZmQ3NWI3OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9zY3JpcHRzL1ZsaExpYnJhcnkvQnV0dG9uQ291bnRlci52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIm1haW5cIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiwgYXR0cnM6IHsgaWQ6IFwiYXBwXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRlZ3JlZS1maWx0ZXJzXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwic2VhcmNoLWZpbHRlclwiLCB7XG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmN1cnJlbnREZWdyZWVTZWFyY2hGaWx0ZXIsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uY3VycmVudERlZ3JlZVNlYXJjaEZpbHRlciA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImN1cnJlbnREZWdyZWVTZWFyY2hGaWx0ZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWx0ZXItbGlzdC13cmFwcGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJmaWx0ZXItbGlzdC1oZWFkaW5nXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWx0ZXI6IF92bS5jdXJyZW50RGVncmVlTGV2ZWxGaWx0ZXIsXG4gICAgICAgICAgICAgICAgICBcImljb24tZHJvcGRvd24tY29sb3JcIjogXCIjY2MxZjFiXCIsXG4gICAgICAgICAgICAgICAgICBcImljb24tcmVzZXQtY29sb3JcIjogXCJncmF5XCIsXG4gICAgICAgICAgICAgICAgICBoZWFkaW5nOiBcIkRlZ3JlZSBMZXZlbHNcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIFwidG9nZ2xlLWZpbHRlci12aXNpYmlsaXR5XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uaGFuZGxlRmlsdGVySGVhZGluZ0NsaWNrKFxuICAgICAgICAgICAgICAgICAgICAgIFwic2hvd0RlZ3JlZUxldmVsRmlsdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJzaG93RGVncmVlQXJlYUZpbHRlclwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcInVwZGF0ZTpzZWxlY3RlZEZpbHRlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnREZWdyZWVMZXZlbEZpbHRlciA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5jdXJyZW50RGVncmVlTGV2ZWxGaWx0ZXIgJiYgX3ZtLm1vYmlsZVxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmlsdGVyLWxpc3Qtc3RhdHVzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0uY3VycmVudERlZ3JlZUxldmVsRmlsdGVyLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiY2xlYXItc2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwiMjJweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50RGVncmVlTGV2ZWxGaWx0ZXIgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJmaWx0ZXItbGlzdFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6IF92bS5zaG93RGVncmVlTGV2ZWxGaWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWQtZmlsdGVyXCI6IF92bS5jdXJyZW50RGVncmVlTGV2ZWxGaWx0ZXJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTp2aXNpYmxlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93RGVncmVlTGV2ZWxGaWx0ZXIgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6c2VsZWN0ZWRGaWx0ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnREZWdyZWVMZXZlbEZpbHRlciA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImZpbHRlci1yZXNldFwiLCB7IGF0dHJzOiB7IGxhYmVsOiBcIkFsbCBMZXZlbHNcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZGVncmVlTGV2ZWxzLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImZpbHRlci1pdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IGl0ZW0udGVybV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBpdGVtIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmlsdGVyLWxpc3Qtd3JhcHBlclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZmlsdGVyLWxpc3QtaGVhZGluZ1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmlsdGVyOiBfdm0uY3VycmVudERlZ3JlZUFyZWFGaWx0ZXIsXG4gICAgICAgICAgICAgICAgICBcImljb24tZHJvcGRvd24tY29sb3JcIjogXCIjY2MxZjFiXCIsXG4gICAgICAgICAgICAgICAgICBcImljb24tcmVzZXQtY29sb3JcIjogXCJncmF5XCIsXG4gICAgICAgICAgICAgICAgICBoZWFkaW5nOiBcIkRlZ3JlZSBBcmVhc1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgXCJ0b2dnbGUtZmlsdGVyLXZpc2liaWxpdHlcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5oYW5kbGVGaWx0ZXJIZWFkaW5nQ2xpY2soXG4gICAgICAgICAgICAgICAgICAgICAgXCJzaG93RGVncmVlQXJlYUZpbHRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwic2hvd0RlZ3JlZUxldmVsRmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnNlbGVjdGVkRmlsdGVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudERlZ3JlZUFyZWFGaWx0ZXIgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uY3VycmVudERlZ3JlZUFyZWFGaWx0ZXIgJiYgX3ZtLm1vYmlsZVxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmlsdGVyLWxpc3Qtc3RhdHVzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0uY3VycmVudERlZ3JlZUFyZWFGaWx0ZXIubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJjbGVhci1zZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCIyMnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnREZWdyZWVBcmVhRmlsdGVyID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZmlsdGVyLWxpc3RcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBfdm0uc2hvd0RlZ3JlZUFyZWFGaWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWQtZmlsdGVyXCI6IF92bS5jdXJyZW50RGVncmVlQXJlYUZpbHRlclxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnZpc2libGVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dEZWdyZWVBcmVhRmlsdGVyID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnNlbGVjdGVkRmlsdGVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50RGVncmVlQXJlYUZpbHRlciA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImZpbHRlci1yZXNldFwiLCB7IGF0dHJzOiB7IGxhYmVsOiBcIkFsbCBMZXZlbHNcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZGVncmVlQXJlYXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiRmlsdGVySXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBpdGVtLnRlcm1faWQsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbTogaXRlbSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkZWdyZWUtbGlzdFwiLFxuICAgICAgICBfdm0uX2woX3ZtLmRlZ3JlZUxpc3QsIGZ1bmN0aW9uKGRlZ3JlZSkge1xuICAgICAgICAgIHJldHVybiBfYyhcImRlZ3JlZS1pdGVtXCIsIHsga2V5OiBkZWdyZWUuSUQsIGF0dHJzOiB7IGl0ZW06IGRlZ3JlZSB9IH0pXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICFfdm0uZGVncmVlTGlzdC5sZW5ndGhcbiAgICAgICAgPyBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwibm8tcmVzdWx0c1wiIH0sIFtfdm0uX3YoXCJObyBNYXRjaGVzXCIpXSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTRmOTYzMmI4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00Zjk2MzJiOFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9zY3JpcHRzL1ZsaEZpbHRlcmluZy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNGY5NjMyYjhcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvc2NyaXB0cy9WbGhGaWx0ZXJpbmcudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTRmOTYzMmI4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1ZsaEZpbHRlcmluZy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImY5MzFmN2NlXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00Zjk2MzJiOFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WbGhGaWx0ZXJpbmcudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTRmOTYzMmI4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1ZsaEZpbHRlcmluZy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNGY5NjMyYjhcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3NjcmlwdHMvVmxoRmlsdGVyaW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00Zjk2MzJiOFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvc2NyaXB0cy9WbGhGaWx0ZXJpbmcudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG52YXIgbGlzdFRvU3R5bGVzID0gcmVxdWlyZSgnLi9saXN0VG9TdHlsZXMnKVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24sIF9vcHRpb25zKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICBvcHRpb25zID0gX29wdGlvbnMgfHwge31cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVsnICsgc3NySWRLZXkgKyAnfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc3NySWQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKHNzcklkS2V5LCBvYmouaWQpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDciLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTRmOTYzMmI4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1ZsaEZpbHRlcmluZy52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVmxoRmlsdGVyaW5nLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGY5NjMyYjhcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WbGhGaWx0ZXJpbmcudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvc2NyaXB0cy9WbGhGaWx0ZXJpbmcudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTRmOTYzMmI4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNGY5NjMyYjhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3JpcHRzL1ZsaEZpbHRlcmluZy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL3NjcmlwdHMvVmxoRmlsdGVyaW5nLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0J1dHRvbkNvdW50ZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wZmQ3NWI3OFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0J1dHRvbkNvdW50ZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9zY3JpcHRzL1ZsaExpYnJhcnkvQnV0dG9uQ291bnRlci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMGZkNzViNzhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wZmQ3NWI3OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9CdXR0b25Db3VudGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9zcmMvc2NyaXB0cy9WbGhMaWJyYXJ5L0J1dHRvbkNvdW50ZXIudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IEJ1dHRvbkNvdW50ZXIgZnJvbSAnLi9CdXR0b25Db3VudGVyJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cbiAgLy8gR2xvYmFsIENvbXBvbmVudHNcbiAgVnVlLmNvbXBvbmVudCgnYnV0dG9uLWNvdW50ZXInLCBCdXR0b25Db3VudGVyKVxuXG5cbiAgY29uc3QgVmxoQXBwRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmxoLWFwcCcpO1xuXG4gIGlmIChWbGhBcHBFbCkge1xuICBcdHZhciB2bGhBcHAgPSBuZXcgVnVlKHtcbiAgXHRcdGVsOiBWbGhBcHBFbCxcbiAgXHRcdGRhdGE6IHtcbiAgXHRcdFx0bXNnOiAnQSBNZXNzYWdlIE5ldyA1JyxcbiAgXHRcdFx0c2hvd01vZGFsOiBmYWxzZVxuICBcdFx0fSxcbiAgXHRcdGNvbXBvbmVudHM6IHtcbiAgXHRcdFx0QXN5bmNDb21wb25lbnQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFzeW5jLWNvbXBvbmVudFwiICovICdAL3NjcmlwdHMvVmxoTGlicmFyeS9Bc3luY0NvbXBvbmVudC52dWUnKSxcbiAgXHQgICAgTW9kYWw6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1vZGFsXCIgKi8gJ0Avc2NyaXB0cy9WbGhMaWJyYXJ5L01vZGFsLnZ1ZScpXG4gIFx0ICB9XG4gIFx0fSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9pbmRleC5qcyIsIiQoXCIuanNfX21lbnUtdHJpZ2dlclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHQkKFwiLm5hdi13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwidmlzaWJsZVwiKTtcbn0pO1xuXG4vLyBNT0JJTEUgTUVOVSBTVUJNRU5VIEZJWFxuKGZ1bmN0aW9uKCkge1xuXHQvLyBIRUxQRVJTXG5cdGZ1bmN0aW9uIGluc2VydFN1Ym1lbnVUb2dnbGVCdXR0b25zKHN1Ym1lbnVMaW5rcywgc3VibWVudUJ1dHRvbnNIVE1MKSB7XG5cdFx0c3VibWVudUxpbmtzLmFmdGVyKHN1Ym1lbnVCdXR0b25zSFRNTCk7XG5cdH1cblxuXHRmdW5jdGlvbiB0b2dnbGVTdWJtZW51U3RhdGUoQ3VycmVudFN1Ym1lbnUpIHtcblx0XHRpZiAoQ3VycmVudFN1Ym1lbnUuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcblx0XHRcdEN1cnJlbnRTdWJtZW51LnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRDdXJyZW50U3VibWVudS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVBY3RpdmVTdWJtZW51KFJlbGV2YW50U3VibWVudXMpIHtcblx0XHR2YXIgYWN0aXZlU3VibWVudSA9IFJlbGV2YW50U3VibWVudXMuZmlsdGVyKFwiLmFjdGl2ZVwiKTtcblx0XHR2YXIgYWN0aXZlU3VibWVudUJ1dHRvbiA9IGFjdGl2ZVN1Ym1lbnUucHJldihcImJ1dHRvbi5hY3RpdmVcIik7XG5cblx0XHRhY3RpdmVTdWJtZW51QnV0dG9uLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXHRcdGFjdGl2ZVN1Ym1lbnUuc2xpZGVVcCgzNTAsIFwic3dpbmdcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRhY3RpdmVTdWJtZW51LnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gRU5EIE9GIEhFTFBFUlNcblx0dmFyIE1haW5NZW51ID0gJChcIi5oZWFkZXJfX25hdiA+IC5uYXZcIiksXG5cdFx0TWVudUl0ZW1zV2l0aENoaWxkcmVuID0gTWFpbk1lbnUuZmluZChcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpLFxuXHRcdExpbmtzRm9yU3VibWVudXMgPSBNZW51SXRlbXNXaXRoQ2hpbGRyZW4uZmluZChcIj4gYVwiKSxcblx0XHRCdXR0b25IVE1MID1cblx0XHQnPGJ1dHRvbiBjbGFzcz1cInN1Yi1tZW51X190b2dnbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48aW1nIHNyYz1cIi93cC1jb250ZW50L3RoZW1lcy9zdGFydGVyLXRoZW1lL3B1YmxpYy9pbWFnZXMvaWNvbnMvZHJvcGRvd24uc3ZnXCIgYWx0PVwiVG9nZ2xlIFN1YiBNZW51XCI+PC9idXR0b24+Jyxcblx0XHRTdWJtZW51cyA9IE1lbnVJdGVtc1dpdGhDaGlsZHJlbi5jaGlsZHJlbihcIi5zdWItbWVudVwiKSxcblx0XHRDaGlsZHJlblN1Ym1lbnVzID0gU3VibWVudXMuZmluZChcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuIC5zdWItbWVudVwiKSxcblx0XHRTdWJtZW51QnV0dG9ucyxcblx0XHRDaGlsZHJlblN1Ym1lbnVCdXR0b25zLFxuXHRcdHdpbmRvd1dpZHRoO1xuXG5cdGZ1bmN0aW9uIFNldHVwKCkge1xuXHRcdENoaWxkcmVuU3VibWVudXMuYWRkQ2xhc3MoXCJjaGlsZHJlblN1Ym1lbnVzXCIpO1xuXHRcdExpbmtzRm9yU3VibWVudXMgPSBNZW51SXRlbXNXaXRoQ2hpbGRyZW4uZmluZChcIj4gYVwiKTtcblx0XHRpbnNlcnRTdWJtZW51VG9nZ2xlQnV0dG9ucyhMaW5rc0ZvclN1Ym1lbnVzLCBCdXR0b25IVE1MKTtcblx0XHRTdWJtZW51QnV0dG9ucyA9ICQoXCIuc3ViLW1lbnVfX3RvZ2dsZVwiKTtcblx0XHRDaGlsZHJlblN1Ym1lbnVCdXR0b25zID0gU3VibWVudXMuZmluZChcIi5zdWItbWVudV9fdG9nZ2xlXCIpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdG9nZ2xlU3VibWVudShTdWJtZW51KSB7XG5cdFx0U3VibWVudS5zbGlkZVRvZ2dsZSgzNTAsIFwic3dpbmdcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR0b2dnbGVTdWJtZW51U3RhdGUoU3VibWVudSk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRXaW5kb3dXaWR0aCgpIHtcblx0XHR3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gd2luZG93V2F0Y2hlcigpIHtcblx0XHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuXHRcdFx0c2V0V2luZG93V2lkdGgoKTtcblx0XHRcdGlmICh3aW5kb3dXaWR0aCA+IDEwMzkgJiYgU3VibWVudXMuaXMoXCI6aGlkZGVuXCIpKSB7XG5cdFx0XHRcdFN1Ym1lbnVzLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHNldFdpbmRvd1dpZHRoKCk7XG5cdFNldHVwKCk7XG5cdHdpbmRvd1dhdGNoZXIoKTtcblxuXHRMaW5rc0ZvclN1Ym1lbnVzLm9uKFwiZm9jdXNcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0FjdGl2ZVN1Ym1lbnUgPSAkKHRoaXMpXG5cdFx0XHQucGFyZW50cyhcImxpXCIpXG5cdFx0XHQuZmluZChcIi5zdWItbWVudVwiKTtcblx0XHRuZXdBY3RpdmVTdWJtZW51LmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuXG5cdFx0bmV3QWN0aXZlU3VibWVudVxuXHRcdFx0LmZpbmQoXCJhXCIpXG5cdFx0XHQubGFzdCgpXG5cdFx0XHQub24oXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUua2V5Q29kZSA9PSA5KSB7XG5cdFx0XHRcdFx0bmV3QWN0aXZlU3VibWVudS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH0pO1xuXG5cdExpbmtzRm9yU3VibWVudXMub24oXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZiAoZS5rZXlDb2RlID09IDkgJiYgZS5zaGlmdEtleSA9PSB0cnVlKSB7XG5cdFx0XHQkKFwiLnN1Yi1tZW51LmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblx0XHR9XG5cdH0pO1xuXG5cdFN1Ym1lbnVCdXR0b25zLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oY2xpY2tFdmVudCkge1xuXHRcdGNsaWNrRXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcblxuXHRcdHZhciBDdXJyZW50U3VibWVudSA9ICQodGhpcykubmV4dChcIi5zdWItbWVudVwiKTtcblx0XHR2YXIgaGFzT3BlblN1Ym1lbnUgPSBTdWJtZW51cy5maWx0ZXIoXCIuYWN0aXZlXCIpLmxlbmd0aCA+PSAxID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdHZhciBvcGVuaW5nTmV3U3VibWVudSA9IEN1cnJlbnRTdWJtZW51Lmhhc0NsYXNzKFwiYWN0aXZlXCIpID8gZmFsc2UgOiB0cnVlO1xuXHRcdHZhciBpc0NoaWxkU3VibWVudSA9ICQodGhpcykucGFyZW50cyhcIi5hY3RpdmVcIikubGVuZ3RoID4gMTtcblx0XHR2YXIgaGFzT3BlbkNoaWxkU3VibWVudSA9XG5cdFx0XHRDaGlsZHJlblN1Ym1lbnVzLmZpbHRlcihcIi5hY3RpdmVcIikubGVuZ3RoID49IDEgPyB0cnVlIDogZmFsc2U7XG5cblx0XHRpZiAoaXNDaGlsZFN1Ym1lbnUpIHtcblx0XHRcdGlmIChoYXNPcGVuQ2hpbGRTdWJtZW51ICYmIG9wZW5pbmdOZXdTdWJtZW51KSB7XG5cdFx0XHRcdGhhbmRsZUFjdGl2ZVN1Ym1lbnUoQ2hpbGRyZW5TdWJtZW51cyk7XG5cdFx0XHR9XG5cdFx0XHR0b2dnbGVTdWJtZW51KEN1cnJlbnRTdWJtZW51KTtcblx0XHR9XG5cblx0XHRpZiAoaGFzT3BlblN1Ym1lbnUgJiYgb3BlbmluZ05ld1N1Ym1lbnUgJiYgIWlzQ2hpbGRTdWJtZW51KSB7XG5cdFx0XHRoYW5kbGVBY3RpdmVTdWJtZW51KFN1Ym1lbnVzKTtcblx0XHR9XG5cblx0XHRpZiAoIWlzQ2hpbGRTdWJtZW51KSB7XG5cdFx0XHR0b2dnbGVTdWJtZW51KEN1cnJlbnRTdWJtZW51KTtcblx0XHR9XG5cdH0pO1xufSkoKTtcblxuLy8gT24gcmVzaXplIG9mIHdpbmRvdyByZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gaGVhZGVyIHN1YiBtZW51c1xuJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuXHR2YXIgd2luID0gJCh0aGlzKTsgLy90aGlzID0gd2luZG93XG5cdGlmICh3aW4ud2lkdGgoKSA+PSA3NjgpIHtcblx0XHQkKFwiLnN1Yi1tZW51XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXHR9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvbWFpbi1uYXZpZ2F0aW9uLmpzIiwiaW1wb3J0IGluaXRFeGFtcGxlSW1wb3J0IGZyb20gJ0Avc2NyaXB0cy9leGFtcGxlcy9leGFtcGxlLWltcG9ydDEnO1xuaW1wb3J0IHsgZXhhbXBsZVZhcmlhYmxlLCBleGFtcGxlRnVuY3Rpb24gfSBmcm9tICdAL3NjcmlwdHMvZXhhbXBsZXMvZXhhbXBsZS1pbXBvcnQyJztcblxuZnVuY3Rpb24gZXhhbXBsZXMoKSB7XG4gIGV4YW1wbGVGdW5jdGlvbigpO1xuICBpbml0RXhhbXBsZUltcG9ydCgpO1xuICBjb25zb2xlLmxvZyhleGFtcGxlVmFyaWFibGUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBleGFtcGxlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL2V4YW1wbGVzLmpzIiwiZnVuY3Rpb24gaW5pdEV4YW1wbGVJbXBvcnQoKSB7XG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKFwiSSBhbSB0aGUgaW5pdEV4YW1wbGVJbXBvcnQhXCIpO1xuXHR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEV4YW1wbGVJbXBvcnQ7XG5cblxuLypcbldlIHdpbGwgaW1wb3J0IHRoaXMgaW50byBhbm90aGVyIGZpbGUgd2l0aCB0aGUgZm9sbG93aW5nOlxuXG5pbXBvcnQgaW5pdEV4YW1wbGVJbXBvcnQgZnJvbSAnQC9zY3JpcHRzL2V4YW1wbGVzL2V4YW1wbGUtaW1wb3J0MSdcblxuICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9leGFtcGxlcy9leGFtcGxlLWltcG9ydDEuanMiLCJleHBvcnQgY29uc3QgZXhhbXBsZVZhcmlhYmxlID0gJ0kgYW0gZXhhbXBsZVZhcmlhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGV4YW1wbGVGdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coIFwiRlJPTTogRXhhbXBsZSBJbXBvcnQgMiAtIGV4YW1wbGVGdW5jdGlvbiFcIiApO1xufVxuXG5cbi8qXG5XZSB3aWxsIGltcG9ydCB0aGlzIGludG8gYW5vdGhlciBmaWxlIHdpdGggdGhlIGZvbGxvd2luZzpcblxuaW1wb3J0IHsgZXhhbXBsZVZhcmlhYmxlLCBleGFtcGxlRnVuY3Rpb24gfSBmcm9tICdAL3NjcmlwdHMvZXhhbXBsZXMvZXhhbXBsZS1pbXBvcnQyJ1xuXG4gKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL2V4YW1wbGVzL2V4YW1wbGUtaW1wb3J0Mi5qcyIsImV4cG9ydCBmdW5jdGlvbiBidWlsZERlZ3JlZUxpc3QoRGVncmVlcykge1xuICByZXR1cm4gRGVncmVlcy5tYXAoKGRlZ3JlZSwgaW5kZXgpID0+IHtcbiAgICB2YXIgbGV2ZWxzQXJyYXkgPSBbXTtcbiAgICB2YXIgYXJlYXNBcnJheSA9IFtdO1xuXG4gICAgaWYgKGRlZ3JlZS5kZWdyZWVfbGV2ZWxzKSB7XG4gICAgICBsZXZlbHNBcnJheSA9IGRlZ3JlZS5kZWdyZWVfbGV2ZWxzLm1hcChsZXZlbCA9PiBsZXZlbC50ZXJtX2lkIClcbiAgICB9XG5cbiAgICBpZiAoZGVncmVlLmRlZ3JlZV9hcmVhcykge1xuICAgICAgYXJlYXNBcnJheSA9IGRlZ3JlZS5kZWdyZWVfYXJlYXMubWFwKGFyZWEgPT4gYXJlYS50ZXJtX2lkIClcbiAgICB9XG5cbiAgICBkZWdyZWVbJ2xldmVscyddID0gbGV2ZWxzQXJyYXlcbiAgICBkZWdyZWVbJ2FyZWFzJ10gPSBhcmVhc0FycmF5XG4gICAgcmV0dXJuIGRlZ3JlZVxuICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvaGVscGVycy9idWlsZERlZ3JlZUxpc3QuanMiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcblx0Y29uc3QgRm9ybVNlbGVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVxdWVzdGluZm8gc2VsZWN0Jylcblx0Zm9yICh2YXIgc2VsZWN0IG9mIEZvcm1TZWxlY3RzKSB7XG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJylcblx0fVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9oZWxwZXJzL3V0aWxpdGllcy5qcyIsIi8vIEVuYWJsZSBITVJcbmlmIChtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KCk7XG59XG5cbi8qIEdldCBUaGVtZSBDb25maWcgRmlsZVxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgQ29uZmlnIGZyb20gXCJ0aGVtZUNvbmZpZ1wiO1xuXG4vKiBFUzYgaW1wb3J0L2V4cG9ydCBleGFtcGxlc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgZXhhbXBsZXMgZnJvbSBcIkAvc2NyaXB0cy9leGFtcGxlc1wiO1xuZXhhbXBsZXMoKTtcblxuXG4vKiBSZWd1bGFyIEltcG9ydHMgLSBJbmNsdWRlIGFjY3Jvc3MgYWxsIHBhZ2VzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmltcG9ydCBcIkAvc2NyaXB0cy9oZWxwZXJzL3V0aWxpdGllc1wiO1xuaW1wb3J0IFwiQC9zY3JpcHRzL2NvbXBvbmVudHMvbWFpbi1uYXZpZ2F0aW9uXCI7XG5cblxuLyogSW1wb3J0aW5nIFZ1ZSBDb21wb25lbnRzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmltcG9ydCBpbml0aWFsaXplVmxoTGlicmFyeSBmcm9tIFwiQC9zY3JpcHRzL1ZsaExpYnJhcnlcIjtcbmltcG9ydCBpbml0aWFsaXplVmxoRmlsdGVyaW5nIGZyb20gXCJAL3NjcmlwdHMvdmxoLWZpbHRlcmluZ1wiO1xuXG5cbmlmIChDb25maWcudXNlVnVlKSB7XG5cdGluaXRpYWxpemVWbGhMaWJyYXJ5KCk7XG59XG5pbml0aWFsaXplVmxoRmlsdGVyaW5nKClcblxuLyogRHluYW1pYyBJbXBvcnRzIC0gTG9hZGluZyBiYXNlZCBvbiBjb25kaXRpb25zXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIGhhbmRsZUFjY29yZGlvbnMoKSB7XG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKENvbmZpZy5zZWxlY3RvcnMuYWNjb3JkaW9uKSAhPT0gbnVsbCkge1xuXHRcdHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJhY2NvcmRpb25cIiAqLyBcIkAvc2NyaXB0cy9jb21wb25lbnRzL2FjY29yZGlvblwiKTtcblx0fVxufVxuXG4vLyBmdW5jdGlvbiBoYW5kbGVEZWdyZWVGaWx0ZXJpbmcoKSB7XG4vLyBcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKENvbmZpZy5zZWxlY3RvcnMubWl4SXRVcCkgIT09IG51bGwpIHtcbi8vIFx0XHRyZXR1cm4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZGVncmVlLWZpbHRlcmluZ1wiICovIFwiQC9zY3JpcHRzL2NvbXBvbmVudHMvZGVncmVlLWZpbHRlcmluZ1wiKTtcbi8vIFx0fVxuLy8gfVxuXG5mdW5jdGlvbiBoYW5kbGVTb2NpYWxTaGFyZSgpIHtcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoQ29uZmlnLnNlbGVjdG9ycy5zb2NpYWxTaGFyZSkgIT09IG51bGwpIHtcblx0XHRyZXR1cm4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwic29jaWFsLXNoYXJlXCIgKi8gXCJAL3NjcmlwdHMvY29tcG9uZW50cy9zb2NpYWwtc2hhcmUtYnV0dG9uc1wiKTtcblx0fVxufVxuXG5mdW5jdGlvbiBoYW5kbGVTdGlja3lFbGVtZW50cygpIHtcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoQ29uZmlnLnNlbGVjdG9ycy5zdGlja3kpICE9PSBudWxsKSB7XG5cdFx0cmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInN0aWNreVwiICovIFwiQC9zY3JpcHRzL2NvbXBvbmVudHMvc3RpY2t5XCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNsaWRlcigpIHtcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoQ29uZmlnLnNlbGVjdG9ycy5zbGlkZXIpICE9PSBudWxsKSB7XG5cdFx0cmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInNsaWRlclwiICovIFwiQC9zY3JpcHRzL2NvbXBvbmVudHMvc2xpZGVyXCIpO1xuXHR9XG59XG5cbi8qIENhbGxpbmcgRHluYW1pYyBJbXBvcnQgRnVuY3Rpb25zXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmhhbmRsZUFjY29yZGlvbnMoKTtcbi8vIGhhbmRsZURlZ3JlZUZpbHRlcmluZygpO1xuaGFuZGxlU29jaWFsU2hhcmUoKTtcbmhhbmRsZVN0aWNreUVsZW1lbnRzKCk7XG5oYW5kbGVTbGlkZXIoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL3NjcmlwdHMuanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBWbGhMaWJyYXJ5LCB7ZGVncmVlTWl4aW59IGZyb20gJ3ZsaC1saWJyYXJ5J1xuaW1wb3J0IFZsaEZpbHRlcmluZyBmcm9tICcuL1ZsaEZpbHRlcmluZydcbmltcG9ydCB7YnVpbGREZWdyZWVMaXN0fSBmcm9tICdAL3NjcmlwdHMvaGVscGVycy9idWlsZERlZ3JlZUxpc3QnXG5WdWUudXNlKFZsaExpYnJhcnkpXG5cbmNvbnN0IFZsaEFwcEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZsaC1maWx0ZXJpbmcnKTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBpZiAoVmxoQXBwRWwpIHtcbiAgXHR2YXIgdmxoQXBwID0gbmV3IFZ1ZSh7XG4gIFx0XHRlbDogVmxoQXBwRWwsXG4gICAgICBtaXhpbnM6IFtkZWdyZWVNaXhpbl0sXG4gICAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmRlZ3JlZXMgPSBidWlsZERlZ3JlZUxpc3Qod3BEYXRhLmRlZ3JlZXMpO1xuICAgICAgICB0aGlzLmRlZ3JlZUxldmVscyA9IHdwRGF0YS5kZWdyZWVMZXZlbHNcbiAgICAgICAgdGhpcy5kZWdyZWVBcmVhcyA9IHdwRGF0YS5kZWdyZWVBcmVhc1xuICAgICAgfVxuICBcdH0pXG4gIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuLy8gICBpZiAoVmxoQXBwRWwpIHtcbi8vICAgXHR2YXIgVmxoRmlsdGVyaW5nSW5zdGFuY2UgPSBuZXcgVnVlKHtcbi8vICAgXHRcdGVsOiBWbGhBcHBFbCxcbi8vICAgICAgIHJlbmRlcjogaHRtbCA9PiBodG1sKFZsaEZpbHRlcmluZylcbi8vICAgXHR9KVxuLy8gICB9XG4vLyB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy92bGgtZmlsdGVyaW5nLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdGRpcmVjdG9yeU5hbWU6IFwic3RhcnRlci10aGVtZVwiLFxuXHRzZWxlY3RvcnM6IHtcblx0XHRhY2NvcmRpb246IFwiLmFjY29yZGlvblwiLFxuXHRcdG1peEl0VXA6IFwiLm1peGl0dXBcIixcblx0XHRzb2NpYWxTaGFyZTogXCIuc29jaWFsLWxpbmtcIixcblx0XHRzdGlja3k6IFwiLnN0aWNreVwiLFxuXHRcdHNsaWRlcjogJy5nbGlkZSdcblx0fSxcblx0dXNlVnVlOiB0cnVlLFxuXHRwdXJnZWNzc1doaXRlbGlzdDogW1xuXHRcdFwicmVxdWVzdGluZm9cIixcblx0XHRcIm1lbnUtbWFpbi1tZW51XCIsXG5cdFx0XCJjdXJyZW50X3BhZ2VfaXRlbVwiLFxuXHRcdFwiZmllbGRzZXRcIixcblx0XHRcImxlZ2VuZFwiLFxuXHRcdFwibGFiZWxcIixcblx0XSxcblx0cHVyZ2Vjc3NXaGl0ZWxpc3RQYXR0ZXJuczogW1xuXHRcdC9eZWxwKF8uKik/JC8sXG5cdFx0L15rZWVwLW5lc3RlZC1jaGlsZHJlbi9cblx0XVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RoZW1lLmNvbmZpZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=