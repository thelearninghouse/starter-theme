webpackJsonp([7],{

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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/scripts/vlh-filtering.js");


/***/ })

},[2]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3NjcmlwdHMvVmxoRmlsdGVyaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9WbGhGaWx0ZXJpbmcudnVlPzAxZGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92bGgtbGlicmFyeS9kaXN0L3ZsaC1saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9WbGhGaWx0ZXJpbmcudnVlPzYxMjciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvVmxoRmlsdGVyaW5nLnZ1ZT84YTMyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9WbGhGaWx0ZXJpbmcudnVlIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hlbHBlcnMvYnVpbGREZWdyZWVMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3ZsaC1maWx0ZXJpbmcuanMiXSwibmFtZXMiOlsiYnVpbGREZWdyZWVMaXN0IiwiRGVncmVlcyIsIm1hcCIsImRlZ3JlZSIsImluZGV4IiwibGV2ZWxzQXJyYXkiLCJhcmVhc0FycmF5IiwiZGVncmVlX2xldmVscyIsImxldmVsIiwidGVybV9pZCIsImRlZ3JlZV9hcmVhcyIsImFyZWEiLCJWdWUiLCJ1c2UiLCJWbGhBcHBFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2bGhBcHAiLCJlbCIsIm1peGlucyIsIm1vdW50ZWQiLCJk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QUFDRCxHQWZNLENBQVA7QUFnQkQsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUFBUyxDQUFJQyxHQUFKLENBQVEsbURBQVI7O0FBRUEsSUFBTUMsV0FBV0MsU0FBU0MsY0FBVCxDQUF3QixlQUF4QixDQUFqQjs7QUFFQSwrREFBZSxZQUFNO0FBQ25CLE1BQUlGLFFBQUosRUFBYztBQUNiLFFBQUlHLFNBQVMsSUFBSSwyQ0FBSixDQUFRO0FBQ3BCQyxVQUFJSixRQURnQjtBQUVsQkssY0FBUSxDQUFDLHdEQUFELENBRlU7QUFHbEJDLGFBSGtCLHFCQUdSO0FBQ1IsYUFBS0MsT0FBTCxHQUFlLGlHQUFBckIsQ0FBZ0JzQixPQUFPRCxPQUF2QixDQUFmO0FBQ0EsYUFBS0UsWUFBTCxHQUFvQkQsT0FBT0MsWUFBM0I7QUFDQSxhQUFLQyxXQUFMLEdBQW1CRixPQUFPRSxXQUExQjtBQUNEO0FBUGlCLEtBQVIsQ0FBYjtBQVNBO0FBQ0YsQ0FaRDs7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEkiLCJmaWxlIjoiL2pzL3ZsaC1maWx0ZXJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxtYWluIGlkPVwiYXBwXCIgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cImRlZ3JlZS1maWx0ZXJzXCI+XG5cbiAgICAgIDxzZWFyY2gtZmlsdGVyIHYtbW9kZWw9XCJjdXJyZW50RGVncmVlU2VhcmNoRmlsdGVyXCI+PC9zZWFyY2gtZmlsdGVyPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyLWxpc3Qtd3JhcHBlclwiPlxuICAgICAgICA8ZmlsdGVyLWxpc3QtaGVhZGluZ1xuICAgICAgICAgIEB0b2dnbGUtZmlsdGVyLXZpc2liaWxpdHk9XCJoYW5kbGVGaWx0ZXJIZWFkaW5nQ2xpY2soJ3Nob3dEZWdyZWVMZXZlbEZpbHRlcicsICdzaG93RGVncmVlQXJlYUZpbHRlcicpXCJcbiAgICAgICAgICA6c2VsZWN0ZWRGaWx0ZXIuc3luYz1cImN1cnJlbnREZWdyZWVMZXZlbEZpbHRlclwiXG4gICAgICAgICAgaWNvbi1kcm9wZG93bi1jb2xvcj1cIiNjYzFmMWJcIlxuICAgICAgICAgIGljb24tcmVzZXQtY29sb3I9XCJncmF5XCJcbiAgICAgICAgICBoZWFkaW5nPVwiRGVncmVlIExldmVsc1wiPlxuICAgICAgICA8L2ZpbHRlci1saXN0LWhlYWRpbmc+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci1saXN0LXN0YXR1c1wiIHYtaWY9XCJjdXJyZW50RGVncmVlTGV2ZWxGaWx0ZXIgJiYgbW9iaWxlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCIgdi1odG1sPVwiY3VycmVudERlZ3JlZUxldmVsRmlsdGVyLm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgPGljb24gY2xhc3M9XCJpY29uLWJ1dHRvblwiIEBjbGljay5uYXRpdmU9XCJjdXJyZW50RGVncmVlTGV2ZWxGaWx0ZXIgPSBudWxsXCIgaWNvbj1cImNsZWFyLXNlYXJjaFwiIGNvbG9yPVwiYmxhY2tcIiBzaXplPVwiMjJweFwiPjwvaWNvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZmlsdGVyLWxpc3RcbiAgICAgICAgICAgIDp2aXNpYmxlLnN5bmM9XCJzaG93RGVncmVlTGV2ZWxGaWx0ZXJcIlxuICAgICAgICAgICAgOnNlbGVjdGVkLWZpbHRlci5zeW5jPVwiY3VycmVudERlZ3JlZUxldmVsRmlsdGVyXCI+XG4gICAgICAgICAgICA8ZmlsdGVyLXJlc2V0IGxhYmVsPVwiQWxsIExldmVsc1wiPjwvZmlsdGVyLXJlc2V0PlxuICAgICAgICAgICAgPGZpbHRlci1pdGVtXG4gICAgICAgICAgICAgIHYtZm9yPVwiaXRlbSBpbiBkZWdyZWVMZXZlbHNcIlxuICAgICAgICAgICAgICA6aXRlbT1cIml0ZW1cIlxuICAgICAgICAgICAgICA6a2V5PVwiaXRlbS50ZXJtX2lkXCI+XG4gICAgICAgICAgICA8L2ZpbHRlci1pdGVtPlxuICAgICAgICAgIDwvZmlsdGVyLWxpc3Q+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci1saXN0LXdyYXBwZXJcIj5cbiAgICAgICAgPGZpbHRlci1saXN0LWhlYWRpbmdcbiAgICAgICAgICBAdG9nZ2xlLWZpbHRlci12aXNpYmlsaXR5PVwiaGFuZGxlRmlsdGVySGVhZGluZ0NsaWNrKCdzaG93RGVncmVlQXJlYUZpbHRlcicsICdzaG93RGVncmVlTGV2ZWxGaWx0ZXInKVwiXG4gICAgICAgICAgOnNlbGVjdGVkRmlsdGVyLnN5bmM9XCJjdXJyZW50RGVncmVlQXJlYUZpbHRlclwiXG4gICAgICAgICAgaWNvbi1kcm9wZG93bi1jb2xvcj1cIiNjYzFmMWJcIlxuICAgICAgICAgIGljb24tcmVzZXQtY29sb3I9XCJncmF5XCJcbiAgICAgICAgICBoZWFkaW5nPVwiRGVncmVlIEFyZWFzXCI+XG4gICAgICAgIDwvZmlsdGVyLWxpc3QtaGVhZGluZz5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyLWxpc3Qtc3RhdHVzXCIgdi1pZj1cImN1cnJlbnREZWdyZWVBcmVhRmlsdGVyICYmIG1vYmlsZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiIHYtaHRtbD1cImN1cnJlbnREZWdyZWVBcmVhRmlsdGVyLm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgPGljb24gY2xhc3M9XCJpY29uLWJ1dHRvblwiIEBjbGljay5uYXRpdmU9XCJjdXJyZW50RGVncmVlQXJlYUZpbHRlciA9IG51bGxcIiBpY29uPVwiY2xlYXItc2VhcmNoXCIgY29sb3I9XCJibGFja1wiIHNpemU9XCIyMnB4XCI+PC9pY29uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZmlsdGVyLWxpc3RcbiAgICAgICAgICA6dmlzaWJsZS5zeW5jPVwic2hvd0RlZ3JlZUFyZWFGaWx0ZXJcIlxuICAgICAgICAgIDpzZWxlY3RlZC1maWx0ZXIuc3luYz1cImN1cnJlbnREZWdyZWVBcmVhRmlsdGVyXCI+XG4gICAgICAgICAgPGZpbHRlci1yZXNldCBsYWJlbD1cIkFsbCBMZXZlbHNcIj48L2ZpbHRlci1yZXNldD5cbiAgICAgICAgICA8RmlsdGVySXRlbVxuICAgICAgICAgICAgdi1mb3I9XCJpdGVtIGluIGRlZ3JlZUFyZWFzXCJcbiAgICAgICAgICAgIDppdGVtPVwiaXRlbVwiXG4gICAgICAgICAgICA6a2V5PVwiaXRlbS50ZXJtX2lkXCI+XG4gICAgICAgICAgPC9GaWx0ZXJJdGVtPlxuICAgICAgICA8L2ZpbHRlci1saXN0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGVncmVlLWxpc3Q+XG4gICAgICA8ZGVncmVlLWl0ZW0gdi1mb3I9XCJkZWdyZWUgaW4gZGVncmVlTGlzdFwiIDppdGVtPVwiZGVncmVlXCIgOmtleT1cImRlZ3JlZS5JRFwiIC8+XG4gICAgPC9kZWdyZWUtbGlzdD5cblxuICAgIDxoMSBjbGFzcz1cIm5vLXJlc3VsdHNcIiB2LWlmPVwiIWRlZ3JlZUxpc3QubGVuZ3RoXCI+Tm8gTWF0Y2hlczwvaDE+XG4gIDwvbWFpbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQge2RlZ3JlZU1peGlufSBmcm9tICd2bGgtbGlicmFyeSdcbmltcG9ydCB7YnVpbGREZWdyZWVMaXN0fSBmcm9tICdAL3NjcmlwdHMvaGVscGVycy9idWlsZERlZ3JlZUxpc3QnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbZGVncmVlTWl4aW5dLFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZGVncmVlcyA9IGJ1aWxkRGVncmVlTGlzdCh3cERhdGEuZGVncmVlcyk7XG4gICAgdGhpcy5kZWdyZWVMZXZlbHMgPSB3cERhdGEuZGVncmVlTGV2ZWxzXG4gICAgdGhpcy5kZWdyZWVBcmVhcyA9IHdwRGF0YS5kZWdyZWVBcmVhc1xuICB9XG59XG48L3NjcmlwdD5cblxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiAgLyogVGVtcG9yYXJ5ICovXG4gIC8vIC5kZWdyZWUtZmlsdGVycyB7XG4gIC8vICAgZmxleDogMSAxIDMyMHB4O1xuICAvLyAgIEBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xuICAvLyAgICAgbWF4LXdpZHRoOiAzMjBweDtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy8gLmRlZ3JlZS1saXN0IHtcbiAgLy8gICBmbGV4OiAxIDEgY2FsYygxMDAlIC0gMzYwcHgpO1xuICAvLyB9XG4gIC8vIG1haW4uY29udGVudCB7XG4gIC8vICAgd2lkdGg6IDE0NDBweDtcbiAgLy8gICBkaXNwbGF5OiBmbGV4O1xuICAvLyAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLy8gICBtYXJnaW46IDRlbSBhdXRvO1xuICAvLyAgIG1heC13aWR0aDogMTAwJTtcbiAgLy8gICBwYWRkaW5nOiAxLjI1ZW07XG4gIC8vIH1cbiAgLy9cbiAgLy8gLmZpbHRlci1jbGVhciB7XG4gIC8vICAgZGlzcGxheTogZmxleDtcbiAgLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyAgIGN1cnNvcjogcG9pbnRlcjtcbiAgLy8gfVxuXG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3NjcmlwdHMvVmxoRmlsdGVyaW5nLnZ1ZSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBUZW1wb3JhcnkgKi9cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2Ryb3llci9Mb2NhbCBTaXRlcy9zdGFydGVyLTIwL2FwcC9wdWJsaWMvd3AtY29udGVudC90aGVtZXMvc3RhcnRlci10aGVtZS9zcmMvc2NyaXB0cy9WbGhGaWx0ZXJpbmcudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGVBQWVcIixcImZpbGVcIjpcIlZsaEZpbHRlcmluZy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVGVtcG9yYXJ5ICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTRmOTYzMmI4XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9zY3JpcHRzL1ZsaEZpbHRlcmluZy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTRmOTYzMmI4XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9zY3JpcHRzL1ZsaEZpbHRlcmluZy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDciLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDciLCIoZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlZsaExpYnJhcnk9dCgpOmUuVmxoTGlicmFyeT10KCl9KShcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChyKXtpZihuW3JdKXJldHVybiBuW3JdLmV4cG9ydHM7dmFyIGk9bltyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsdCksaS5sPSEwLGkuZXhwb3J0c312YXIgbj17fTtyZXR1cm4gdC5tPWUsdC5jPW4sdC5kPWZ1bmN0aW9uKGUsbixyKXt0Lm8oZSxuKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbix7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0OnJ9KX0sdC5uPWZ1bmN0aW9uKGUpe3ZhciBuPWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiB0LmQobixcImFcIixuKSxufSx0Lm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHQucD1cIi9cIix0KHQucz0xMCl9KFtmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlLHQsbixyLGkscyxhLG8pe2U9ZXx8e307dmFyIGM9dHlwZW9mIGUuZGVmYXVsdDtcIm9iamVjdFwiIT09YyYmXCJmdW5jdGlvblwiIT09Y3x8KGU9ZS5kZWZhdWx0KTt2YXIgbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2Uub3B0aW9uczplO3QmJihsLnJlbmRlcj10LGwuc3RhdGljUmVuZGVyRm5zPW4sbC5fY29tcGlsZWQ9ITApLHImJihsLmZ1bmN0aW9uYWw9ITApLHMmJihsLl9zY29wZUlkPXMpO3ZhciB1O2lmKGE/KHU9ZnVuY3Rpb24oZSl7ZT1lfHx0aGlzLiR2bm9kZSYmdGhpcy4kdm5vZGUuc3NyQ29udGV4dHx8dGhpcy5wYXJlbnQmJnRoaXMucGFyZW50LiR2bm9kZSYmdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQsZXx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX198fChlPV9fVlVFX1NTUl9DT05URVhUX18pLGkmJmkuY2FsbCh0aGlzLGUpLGUmJmUuX3JlZ2lzdGVyZWRDb21wb25lbnRzJiZlLl9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQoYSl9LGwuX3NzclJlZ2lzdGVyPXUpOmkmJih1PW8/ZnVuY3Rpb24oKXtpLmNhbGwodGhpcyx0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpfTppKSx1KWlmKGwuZnVuY3Rpb25hbCl7bC5faW5qZWN0U3R5bGVzPXU7dmFyIGY9bC5yZW5kZXI7bC5yZW5kZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdS5jYWxsKHQpLGYoZSx0KX19ZWxzZXt2YXIgZD1sLmJlZm9yZUNyZWF0ZTtsLmJlZm9yZUNyZWF0ZT1kP1tdLmNvbmNhdChkLHUpOlt1XX1yZXR1cm57ZXhwb3J0czplLG9wdGlvbnM6bH19dC5hPXJ9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt0LmE9e25hbWU6XCJGaWx0ZXJMaXN0XCIscHJvdmlkZTpmdW5jdGlvbigpe3JldHVybntmaWx0ZXJTdGF0ZTp0aGlzLmZpbHRlclN0YXRlfX0scHJvcHM6e2VsZW1lbnRUeXBlOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwidWxcIn0sdmlzaWJsZTp7dHlwZTpCb29sZWFufSxzZWxlY3RlZEZpbHRlcjp7dHlwZTpbT2JqZWN0LFN0cmluZ119fSxkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue2ZpbHRlclN0YXRlOnthY3RpdmU6bnVsbH19fSxjcmVhdGVkOmZ1bmN0aW9uKCl7dGhpcy5oYW5kbGVNb2JpbGUoKX0sd2F0Y2g6e1wiZmlsdGVyU3RhdGUuYWN0aXZlXCI6ZnVuY3Rpb24oZSx0KXt0aGlzLiRlbWl0KFwidXBkYXRlOnNlbGVjdGVkRmlsdGVyXCIsZSksdGhpcy5tb2JpbGUmJnRoaXMuJGVtaXQoXCJ1cGRhdGU6dmlzaWJsZVwiLCExKX0sc2VsZWN0ZWRGaWx0ZXI6ZnVuY3Rpb24oZSx0KXt0aGlzLmZpbHRlclN0YXRlLmFjdGl2ZT1lfSxtb2JpbGU6ZnVuY3Rpb24oZSx0KXt0aGlzLmhhbmRsZU1vYmlsZSgpfX0sbWV0aG9kczp7aGFuZGxlTW9iaWxlOmZ1bmN0aW9uKCl7dGhpcy5tb2JpbGU/dGhpcy4kZW1pdChcInVwZGF0ZTp2aXNpYmxlXCIsITEpOnRoaXMuJGVtaXQoXCJ1cGRhdGU6dmlzaWJsZVwiLCEwKX19fX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3QuYT17bmFtZTpcIkZpbHRlckl0ZW1cIixpbmplY3Q6W1wiZmlsdGVyU3RhdGVcIl0scHJvcHM6e2l0ZW06e3R5cGU6W0FycmF5LE9iamVjdF19LGVsZW1lbnRUeXBlOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwibGlcIn0saGFuZGxlU2VsZWN0ZWQ6RnVuY3Rpb259LGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57c2hvd1N1Ykl0ZW1zOiExfX0sY29tcHV0ZWQ6e2ZpbHRlckxpc3RTdGF0ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmZpbHRlclN0YXRlfSxzZWxlY3RlZEZpbHRlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmZpbHRlclN0YXRlLmFjdGl2ZX0saXNTZWxlY3RlZDpmdW5jdGlvbigpe3JldHVybiEhdGhpcy5zZWxlY3RlZEZpbHRlciYmdGhpcy5zZWxlY3RlZEZpbHRlci50ZXJtX2lkPT09dGhpcy5pdGVtLnRlcm1faWR9LGhhc1N1Ykl0ZW1zOmZ1bmN0aW9uKCl7cmV0dXJuISghdGhpcy5pdGVtLnN1Yl9hcmVhc3x8IXRoaXMuaXRlbS5zdWJfYXJlYXMubGVuZ3RoKX0sY2hpbGRJc1NlbGVjdGVkOmZ1bmN0aW9uKCl7cmV0dXJuISF0aGlzLnNlbGVjdGVkRmlsdGVyJiZ0aGlzLml0ZW0udGVybV9pZD09PXRoaXMuc2VsZWN0ZWRGaWx0ZXIucGFyZW50fSxoYXNTZWxlY3RlZENsYXNzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNTZWxlY3RlZHx8dGhpcy5jaGlsZElzU2VsZWN0ZWR9LGRyb3Bkb3duSWNvbjpmdW5jdGlvbigpe3JldHVybiEwPT09dGhpcy5zaG93U3ViSXRlbXM/XCJIaWRlU3ViZmlsdGVyc1wiOlwiU2hvd1N1YmZpbHRlcnNcIn19LG1ldGhvZHM6e3VwZGF0ZVNlbGVjdGVkOmZ1bmN0aW9uKCl7dGhpcy5maWx0ZXJTdGF0ZS5hY3RpdmU9dGhpcy5pdGVtfSxzdWJpdGVtSXNTZWxlY3RlZDpmdW5jdGlvbihlKXtyZXR1cm4hIXRoaXMuc2VsZWN0ZWRGaWx0ZXImJmUudGVybV9pZD09PXRoaXMuc2VsZWN0ZWRGaWx0ZXIudGVybV9pZH19fX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3QuYT17bmFtZTpcIkZpbHRlckxpc3RIZWFkaW5nXCIsZGF0YTpmdW5jdGlvbigpe3JldHVybntjdXJyZW50SWNvbjpcImFycm93LWRvd25cIn19LHByb3BzOntzZWxlY3RlZEZpbHRlcjp7dHlwZTpbT2JqZWN0LFN0cmluZ119LGhlYWRpbmc6U3RyaW5nLGxpc3RWaXNpYmlsaXR5OkJvb2xlYW4saWNvbkRyb3Bkb3duQ29sb3I6U3RyaW5nLGljb25SZXNldENvbG9yOlN0cmluZ30sY29tcHV0ZWQ6e2xpc3RUb2dnbGVJY29uOmZ1bmN0aW9uKCl7fX0sbWV0aG9kczp7aGFuZGxlVG9nZ2xlOmZ1bmN0aW9uKCl7dGhpcy4kZW1pdChcInRvZ2dsZS1maWx0ZXItdmlzaWJpbGl0eVwiKX19LHdhdGNoOntsaXN0VmlzaWJpbGl0eTpmdW5jdGlvbihlLHQpe3RoaXMuY3VycmVudEljb249ITA9PT1lP1wiYXJyb3ctdXBcIjpcImFycm93LWRvd25cIn19fX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3QuYT17bmFtZTpcIkZpbHRlclJlc2V0XCIsaW5qZWN0OltcImZpbHRlclN0YXRlXCJdLHByb3BzOntpZDp7dHlwZTpTdHJpbmd9LHRpdGxlOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiQWxsXCJ9LGVsZW1lbnRUeXBlOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwibGlcIn19LGNvbXB1dGVkOntmaWx0ZXJMaXN0U3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5maWx0ZXJTdGF0ZX0sc2VsZWN0ZWRGaWx0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5maWx0ZXJTdGF0ZS5hY3RpdmV9LGlzU2VsZWN0ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09PXRoaXMuc2VsZWN0ZWRGaWx0ZXJ9fSxtZXRob2RzOnt1cGRhdGVTZWxlY3RlZDpmdW5jdGlvbigpe3RoaXMuZmlsdGVyU3RhdGUuYWN0aXZlPW51bGx9fX19LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt0LmE9e25hbWU6XCJEZWdyZWVMaXN0XCIscHJvcHM6e2l0ZW1zOnt0eXBlOkFycmF5fSxlbGVtZW50VHlwZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcImRpdlwifX19fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dC5hPXtuYW1lOlwiRGVncmVlSXRlbVwiLHByb3BzOntpdGVtOntyZXF1aXJlZDohMCx0eXBlOk9iamVjdH0sZWxlbWVudFR5cGU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJsaVwifX0sZGF0YTpmdW5jdGlvbigpe3JldHVybntzaG93Q29udGVudDohMX19LGNvbXB1dGVkOntkZWdyZWVDbGFzc2VzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0RGVncmVlQ2xhc3Nlcyh0aGlzLml0ZW0pfSx0b2dnbGVDb250ZW50SWNvbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNob3dDb250ZW50P1wicmVtb3ZlLWNpcmNsZS1vdXRsaW5lXCI6XCJhZGQtY2lyY2xlLW91dGxpbmVcIn19LG1ldGhvZHM6e2dldERlZ3JlZUNsYXNzZXM6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5kZWdyZWVfbGV2ZWxzLG49ZS5kZWdyZWVfYXJlYXMscj10Lm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZS5zbHVnfHxcIlwifSksaT1uLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZS5zbHVnP2Uuc2x1ZzpcIlwifSk7cmV0dXJuIHIuY29uY2F0KGkpfX19fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigzMiksaT1uLm4ocikscz1uKDMzKSxhPW4ubihzKSxvPW4oMzQpLGM9bi5uKG8pLGw9bigzNSksdT1uLm4obCksZj1uKDM2KSxkPW4ubihmKSxoPW4oMzcpLHA9bi5uKGgpLHY9bigzOCksbT1uLm4odiksZz1uKDM5KSxiPW4ubihnKSx3PW4oNDApLF89bi5uKHcpLFM9big0MSkseT1uLm4oUyksQz1uKDQyKSx4PW4ubihDKTt0LmE9e25hbWU6XCJJY29uXCIscHJvcHM6e2lkOnt0eXBlOlN0cmluZ30saWNvbjp7dHlwZTpbU3RyaW5nLE9iamVjdCxGdW5jdGlvbixBcnJheV19LGNvbG9yOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiI2ZmZlwifSxzaXplOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiMjRweFwifX0sY29tcG9uZW50czp7QXJyb3dEb3duOl8uYSxBcnJvd1VwOmIuYSxDaGVjazppLmEsQ2xlYXJTZWFyY2g6bS5hLEhpZGVTdWJmaWx0ZXJzOmQuYSxJY29uU2hvdzpjLmEsSWNvbkhpZGU6YS5hLFNlYXJjaDpwLmEsU2hvd1N1YmZpbHRlcnM6dS5hLEFkZENpcmNsZU91dGxpbmU6eS5hLFJlbW92ZUNpcmNsZU91dGxpbmU6eC5hfX19LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDQ2KTt0LmE9e2luaGVyaXRBdHRyczohMSxuYW1lOlwiU2VhcmNoRmlsdGVyXCIscHJvcHM6e3ZhbHVlOnt0eXBlOlN0cmluZ319LGNvbXB1dGVkOntzZWFyY2hRdWVyeUV4aXN0czpmdW5jdGlvbigpe3JldHVyblwiXCIhPT10aGlzLnZhbHVlfSxzZWFyY2hGaWx0ZXJJY29uOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2VhcmNoUXVlcnlFeGlzdHM/XCJjbGVhci1zZWFyY2hcIjpcInNlYXJjaFwifX0sY3JlYXRlZDpmdW5jdGlvbigpe3RoaXMuZGVib3VuY2VkU2VhcmNoPU9iamVjdChyLmEpKHRoaXMudXBkYXRlU2VhcmNoLDUwMCl9LG1ldGhvZHM6e2NsZWFyU2VhcmNoOmZ1bmN0aW9uKCl7dGhpcy4kZW1pdChcImlucHV0XCIsXCJcIil9LHVwZGF0ZVNlYXJjaDpmdW5jdGlvbihlKXt0aGlzLiRlbWl0KFwiaW5wdXRcIixlKX19fX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3QuYT17bmFtZTpcIkFjY29yZGlvblRyYW5zaXRpb25cIixtZXRob2RzOntiZWZvcmVFbnRlcjpmdW5jdGlvbihlKXtlLnN0eWxlLmhlaWdodD1cIjBcIn0sZW50ZXI6ZnVuY3Rpb24oZSl7ZS5zdHlsZS5oZWlnaHQ9ZS5zY3JvbGxIZWlnaHQrMjArXCJweFwifSxiZWZvcmVMZWF2ZTpmdW5jdGlvbihlKXtlLnN0eWxlLmhlaWdodD1lLnNjcm9sbEhlaWdodCsyMCtcInB4XCJ9LGxlYXZlOmZ1bmN0aW9uKGUpe2Uuc3R5bGUuaGVpZ2h0PVwiMFwifX19fSxmdW5jdGlvbihlLHQsbil7ZS5leHBvcnRzPW4oMTEpfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9bigxMiksaT1uKDE1KSxzPW4oMTgpLGE9bigyMSksbz1uKDI0KSxjPW4oMjcpLGw9bigzMCksdT1uKDQ0KSxmPW4oNDgpLGQ9big1MSksaD1uKDUyKSxwPW4oNTQpO24ubihwKTtuLmQodCxcIkFjY29yZGlvblRyYW5zaXRpb25cIixmdW5jdGlvbigpe3JldHVybiBmLmF9KSxuLmQodCxcIkZpbHRlckxpc3RcIixmdW5jdGlvbigpe3JldHVybiByLmF9KSxuLmQodCxcIkZpbHRlckl0ZW1cIixmdW5jdGlvbigpe3JldHVybiBpLmF9KSxuLmQodCxcIkZpbHRlckxpc3RIZWFkaW5nXCIsZnVuY3Rpb24oKXtyZXR1cm4gcy5hfSksbi5kKHQsXCJGaWx0ZXJSZXNldFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGEuYX0pLG4uZCh0LFwiRGVncmVlTGlzdFwiLGZ1bmN0aW9uKCl7cmV0dXJuIG8uYX0pLG4uZCh0LFwiRGVncmVlSXRlbVwiLGZ1bmN0aW9uKCl7cmV0dXJuIGMuYX0pLG4uZCh0LFwiSWNvblwiLGZ1bmN0aW9uKCl7cmV0dXJuIGwuYX0pLG4uZCh0LFwiU2VhcmNoRmlsdGVyXCIsZnVuY3Rpb24oKXtyZXR1cm4gdS5hfSksbi5kKHQsXCJkZWdyZWVNaXhpblwiLGZ1bmN0aW9uKCl7cmV0dXJuIGguYX0pO3ZhciB2PXtpbnN0YWxsOmZ1bmN0aW9uKGUsdCl7ZS5jb21wb25lbnQoZi5hLm5hbWUsZi5hKSxlLmNvbXBvbmVudChvLmEubmFtZSxvLmEpLGUuY29tcG9uZW50KGMuYS5uYW1lLGMuYSksZS5jb21wb25lbnQoci5hLm5hbWUsci5hKSxlLmNvbXBvbmVudChpLmEubmFtZSxpLmEpLGUuY29tcG9uZW50KHMuYS5uYW1lLHMuYSksZS5jb21wb25lbnQoYS5hLm5hbWUsYS5hKSxlLmNvbXBvbmVudChsLmEubmFtZSxsLmEpLGUuY29tcG9uZW50KHUuYS5uYW1lLHUuYSksZS5taXhpbihkLmEpfX07XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93LlZ1ZSYmd2luZG93LlZ1ZS51c2UodiksdC5kZWZhdWx0PXZ9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe24oMTMpfXZhciBpPW4oMSkscz1uKDE0KSxhPW4oMCksbz1yLGM9T2JqZWN0KGEuYSkoaS5hLHMuYSxzLmIsITEsbyxudWxsLG51bGwpO3QuYT1jLmV4cG9ydHN9LGZ1bmN0aW9uKGUsdCl7fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7bi5kKHQsXCJhXCIsZnVuY3Rpb24oKXtyZXR1cm4gcn0pLG4uZCh0LFwiYlwiLGZ1bmN0aW9uKCl7cmV0dXJuIGl9KTt2YXIgcj1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcInRyYW5zaXRpb25cIix7YXR0cnM6e25hbWU6XCJzbGlkZS1mYWRlXCJ9fSxbbihlLmVsZW1lbnRUeXBlLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6ZS52aXNpYmxlLGV4cHJlc3Npb246XCJ2aXNpYmxlXCJ9XSx0YWc6XCJjb21wb25lbnRcIixzdGF0aWNDbGFzczpcImZpbHRlci1saXN0XCJ9LFtlLl90KFwiZGVmYXVsdFwiKV0sMildLDEpfSxpPVtdfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtuKDE2KX12YXIgaT1uKDIpLHM9bigxNyksYT1uKDApLG89cixjPU9iamVjdChhLmEpKGkuYSxzLmEscy5iLCExLG8sbnVsbCxudWxsKTt0LmE9Yy5leHBvcnRzfSxmdW5jdGlvbihlLHQpe30sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO24uZCh0LFwiYVwiLGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KSxuLmQodCxcImJcIixmdW5jdGlvbigpe3JldHVybiBpfSk7dmFyIHI9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oZS5lbGVtZW50VHlwZSx7dGFnOlwiY29tcG9uZW50XCIsc3RhdGljQ2xhc3M6XCJmaWx0ZXItaXRlbVwiLGNsYXNzOntzZWxlY3RlZDplLmhhc1NlbGVjdGVkQ2xhc3MscGFyZW50OmUuaGFzU3ViSXRlbXN9fSxbbihcImRpdlwiLHtzdGF0aWNDbGFzczpcImZpbHRlci1pdGVtLWNvbnRlbnRcIixvbjp7Y2xpY2s6ZS51cGRhdGVTZWxlY3RlZH19LFtlLmlzU2VsZWN0ZWQ/bihcImljb25cIix7c3RhdGljQ2xhc3M6XCJzZWxlY3RlZC1pbmRpY2F0b3JcIixhdHRyczp7aWNvbjpcImNoZWNrXCJ9fSk6ZS5fZSgpLGUuX3YoXCIgXCIpLG4oXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidGl0bGVcIixkb21Qcm9wczp7aW5uZXJIVE1MOmUuX3MoZS5pdGVtLm5hbWUpfX0pLGUuX3YoXCIgXCIpLGUuaGFzU3ViSXRlbXM/bihcImljb25cIix7c3RhdGljQ2xhc3M6XCJ0b2dnbGUtc3ViaXRlbXNcIixhdHRyczp7aWNvbjplLmRyb3Bkb3duSWNvbixjb2xvcjpcIiMyMjJcIn0sbmF0aXZlT246e2NsaWNrOmZ1bmN0aW9uKHQpe3Quc3RvcFByb3BhZ2F0aW9uKCksZS5zaG93U3ViSXRlbXM9IWUuc2hvd1N1Ykl0ZW1zfX19KTplLl9lKCldLDEpLGUuX3YoXCIgXCIpLG4oXCJhY2NvcmRpb24tdHJhbnNpdGlvblwiLFtlLmhhc1N1Ykl0ZW1zJiZlLnNob3dTdWJJdGVtcz9uKFwidWxcIix7c3RhdGljQ2xhc3M6XCJzdWJmaWx0ZXItbGlzdFwifSxlLl9sKGUuaXRlbS5zdWJfYXJlYXMsZnVuY3Rpb24odCl7cmV0dXJuIG4oXCJGaWx0ZXJJdGVtXCIse2tleTp0LnRlcm1faWQsY2xhc3M6e3NlbGVjdGVkOmUuc3ViaXRlbUlzU2VsZWN0ZWQodCl9LGF0dHJzOntzZWxlY3RlZEZpbHRlcjplLnNlbGVjdGVkRmlsdGVyLGl0ZW06dH19KX0pKTplLl9lKCldKV0sMSl9LGk9W119LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe24oMTkpfXZhciBpPW4oMykscz1uKDIwKSxhPW4oMCksbz1yLGM9T2JqZWN0KGEuYSkoaS5hLHMuYSxzLmIsITEsbyxudWxsLG51bGwpO3QuYT1jLmV4cG9ydHN9LGZ1bmN0aW9uKGUsdCl7fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7bi5kKHQsXCJhXCIsZnVuY3Rpb24oKXtyZXR1cm4gcn0pLG4uZCh0LFwiYlwiLGZ1bmN0aW9uKCl7cmV0dXJuIGl9KTt2YXIgcj1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcImRpdlwiLGUuX2coe3N0YXRpY0NsYXNzOlwiZmlsdGVyLWxpc3QtaGVhZGluZ1wiLG9uOntjbGljazplLmhhbmRsZVRvZ2dsZX19LGUuJGxpc3RlbmVycyksW24oXCJoMlwiLHtzdGF0aWNDbGFzczpcImhlYWRpbmdcIixkb21Qcm9wczp7aW5uZXJIVE1MOmUuX3MoZS5oZWFkaW5nKX19KSxlLl92KFwiIFwiKSxlLm1vYmlsZT9uKFwiaWNvblwiLHthdHRyczp7aWNvbjplLmN1cnJlbnRJY29uLGNvbG9yOmUuaWNvbkRyb3Bkb3duQ29sb3J9fSk6ZS5fZSgpLGUuX3YoXCIgXCIpLCFlLm1vYmlsZSYmZS5zZWxlY3RlZEZpbHRlcj9uKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwiZmlsdGVyLWNsZWFyXCIsb246e2NsaWNrOmZ1bmN0aW9uKHQpe2UuJGVtaXQoXCJ1cGRhdGU6c2VsZWN0ZWRGaWx0ZXJcIixudWxsKX19fSxbZS5fdChcImZpbHRlci1jbGVhclwiLFtlLl92KFwiXFxuICAgICAgQ2xlYXJcXG4gICAgICBcIiksbihcImljb25cIix7c3RhdGljQ2xhc3M6XCJpY29uLWJ1dHRvblwiLGF0dHJzOntpY29uOlwiY2xlYXItc2VhcmNoXCIsY29sb3I6ZS5pY29uUmVzZXRDb2xvcn19KV0pXSwyKTplLl9lKCldLDEpfSxpPVtdfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtuKDIyKX12YXIgaT1uKDQpLHM9bigyMyksYT1uKDApLG89cixjPU9iamVjdChhLmEpKGkuYSxzLmEscy5iLCExLG8sbnVsbCxudWxsKTt0LmE9Yy5leHBvcnRzfSxmdW5jdGlvbihlLHQpe30sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO24uZCh0LFwiYVwiLGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KSxuLmQodCxcImJcIixmdW5jdGlvbigpe3JldHVybiBpfSk7dmFyIHI9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oZS5lbGVtZW50VHlwZSx7dGFnOlwiY29tcG9uZW50XCIsc3RhdGljQ2xhc3M6XCJmaWx0ZXItaXRlbSBmaWx0ZXItcmVzZXRcIixjbGFzczp7c2VsZWN0ZWQ6ZS5pc1NlbGVjdGVkfX0sW24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJmaWx0ZXItaXRlbS1jb250ZW50XCIsb246e2NsaWNrOmUudXBkYXRlU2VsZWN0ZWR9fSxbZS5pc1NlbGVjdGVkP24oXCJpY29uXCIse3N0YXRpY0NsYXNzOlwic2VsZWN0ZWQtaW5kaWNhdG9yXCIsYXR0cnM6e2ljb246XCJjaGVja1wifX0pOmUuX2UoKSxlLl92KFwiIFwiKSxuKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInRpdGxlXCIsZG9tUHJvcHM6e2lubmVySFRNTDplLl9zKGUudGl0bGUpfX0pXSwxKV0pfSxpPVtdfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtuKDI1KX12YXIgaT1uKDUpLHM9bigyNiksYT1uKDApLG89cixjPU9iamVjdChhLmEpKGkuYSxzLmEscy5iLCExLG8sXCJkYXRhLXYtMTI5Mzc3MGFcIixudWxsKTt0LmE9Yy5leHBvcnRzfSxmdW5jdGlvbihlLHQpe30sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO24uZCh0LFwiYVwiLGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KSxuLmQodCxcImJcIixmdW5jdGlvbigpe3JldHVybiBpfSk7dmFyIHI9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudDtyZXR1cm4oZS5fc2VsZi5fY3x8dCkoXCJ0cmFuc2l0aW9uLWdyb3VwXCIse3N0YXRpY0NsYXNzOlwiZGVncmVlLWxpc3RcIixhdHRyczp7bmFtZTpcImFuaW1hdGVkLWdyaWQtaXRlbXNcIix0YWc6ZS5lbGVtZW50VHlwZSxhcHBlYXI6XCJcIn19LFtlLl90KFwiZGVmYXVsdFwiKV0sMil9LGk9W119LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe24oMjgpfXZhciBpPW4oNikscz1uKDI5KSxhPW4oMCksbz1yLGM9T2JqZWN0KGEuYSkoaS5hLHMuYSxzLmIsITEsbyxcImRhdGEtdi1lMGJkNzgxMlwiLG51bGwpO3QuYT1jLmV4cG9ydHN9LGZ1bmN0aW9uKGUsdCl7fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7bi5kKHQsXCJhXCIsZnVuY3Rpb24oKXtyZXR1cm4gcn0pLG4uZCh0LFwiYlwiLGZ1bmN0aW9uKCl7cmV0dXJuIGl9KTt2YXIgcj1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihlLmVsZW1lbnRUeXBlLHt0YWc6XCJjb21wb25lbnRcIixzdGF0aWNDbGFzczpcImRlZ3JlZS1pdGVtXCIsY2xhc3M6W2UuZGVncmVlQ2xhc3Nlcyx7b3BlbjplLnNob3dDb250ZW50fV19LFtlLl90KFwiZGVmYXVsdFwiLFtuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwiZGVncmVlLWl0ZW0taGVhZGVyXCJ9LFtuKFwiaDJcIix7c3RhdGljQ2xhc3M6XCJ0aXRsZVwiLGRvbVByb3BzOntpbm5lckhUTUw6ZS5fcyhlLml0ZW0ucG9zdF90aXRsZSl9fSksZS5fdihcIiBcIiksbihcImljb25cIix7c3RhdGljQ2xhc3M6XCJpY29uLWJ1dHRvblwiLGF0dHJzOntpY29uOmUudG9nZ2xlQ29udGVudEljb24sc2l6ZTpcIjMwcHhcIixjb2xvcjpcIiMyMjJcIn0sbmF0aXZlT246e2NsaWNrOmZ1bmN0aW9uKHQpe3Quc3RvcFByb3BhZ2F0aW9uKCksZS5zaG93Q29udGVudD0hZS5zaG93Q29udGVudH19fSldLDEpLGUuX3YoXCIgXCIpLG4oXCJhY2NvcmRpb24tdHJhbnNpdGlvblwiLFtlLnNob3dDb250ZW50P24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJkZWdyZWUtaXRlbS1jb250ZW50XCJ9LFtuKFwicFwiLFtlLl92KGUuX3MoZS5pdGVtLnN1bW1hcnkpKV0pLGUuX3YoXCIgXCIpLG4oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJkZWdyZWUtaXRlbS1jdGFcIn0sW24oXCJhXCIse2F0dHJzOntocmVmOlwiL1wiK2UuaXRlbS5wb3N0X25hbWV9fSxbZS5fdihcIlZpZXcgSW5mb1wiKV0pXSldKTplLl9lKCldKV0sbnVsbCxlLml0ZW0pXSwyKX0saT1bXX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7bigzMSl9dmFyIGk9big3KSxzPW4oNDMpLGE9bigwKSxvPXIsYz1PYmplY3QoYS5hKShpLmEscy5hLHMuYiwhMSxvLG51bGwsbnVsbCk7dC5hPWMuZXhwb3J0c30sZnVuY3Rpb24oZSx0KXt9LGZ1bmN0aW9uKGUsdCl7dmFyIG49ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJzdmdcIix7YXR0cnM6e2ZpbGw6XCIjZmZmXCIsdmlld0JveDpcIjAgMCAyNCAyNFwiLHhtbG5zOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn19LFtuKFwicGF0aFwiLHthdHRyczp7ZDpcIk0wIDBoMjR2MjRIMHpcIixmaWxsOlwibm9uZVwifX0pLG4oXCJwYXRoXCIse2F0dHJzOntkOlwiTTkgMTYuMTdMNC44MyAxMmwtMS40MiAxLjQxTDkgMTkgMjEgN2wtMS40MS0xLjQxelwifX0pXSl9LHI9ZnVuY3Rpb24oKXtyZXR1cm5cIi9Vc2Vycy9kcm95ZXIvTGVhcm5pbmcgSG91c2UvdmxoLWxpYnJhcnkvc3JjL2Fzc2V0cy9pbWFnZXMvY2hlY2suc3ZnXCJ9O2UuZXhwb3J0cz17cmVuZGVyOm4sdG9TdHJpbmc6cn19LGZ1bmN0aW9uKGUsdCl7dmFyIG49ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJzdmdcIix7YXR0cnM6e2ZpbGw6XCIjY2EwMDAwXCIsaGVpZ2h0OlwiMjdcIix2aWV3Qm94OlwiMCAwIDI0IDI0XCIsd2lkdGg6XCIyN1wiLHhtbG5zOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn19LFtuKFwicGF0aFwiLHthdHRyczp7ZDpcIk0xMiAyQzYuNDcgMiAyIDYuNDcgMiAxMnM0LjQ3IDEwIDEwIDEwIDEwLTQuNDcgMTAtMTBTMTcuNTMgMiAxMiAyem01IDEzLjU5TDE1LjU5IDE3IDEyIDEzLjQxIDguNDEgMTcgNyAxNS41OSAxMC41OSAxMiA3IDguNDEgOC40MSA3IDEyIDEwLjU5IDE1LjU5IDcgMTcgOC40MSAxMy40MSAxMiAxNyAxNS41OXpcIn19KSxuKFwicGF0aFwiLHthdHRyczp7ZDpcIk0wIDBoMjR2MjRIMHpcIixmaWxsOlwibm9uZVwifX0pXSl9LHI9ZnVuY3Rpb24oKXtyZXR1cm5cIi9Vc2Vycy9kcm95ZXIvTGVhcm5pbmcgSG91c2UvdmxoLWxpYnJhcnkvc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1oaWRlLnN2Z1wifTtlLmV4cG9ydHM9e3JlbmRlcjpuLHRvU3RyaW5nOnJ9fSxmdW5jdGlvbihlLHQpe3ZhciBuPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwic3ZnXCIse2F0dHJzOntoZWlnaHQ6XCIyNFwiLHdpZHRoOlwiMjRcIix4bWxuczpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9fSxbbihcInBhdGhcIix7YXR0cnM6e2Q6XCJNMCAwaDI0djI0SDB6XCIsZmlsbDpcIm5vbmVcIn19KSxuKFwicGF0aFwiLHthdHRyczp7ZDpcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxNWwtNS01IDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5elwifX0pXSl9LHI9ZnVuY3Rpb24oKXtyZXR1cm5cIi9Vc2Vycy9kcm95ZXIvTGVhcm5pbmcgSG91c2UvdmxoLWxpYnJhcnkvc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1zaG93LnN2Z1wifTtlLmV4cG9ydHM9e3JlbmRlcjpuLHRvU3RyaW5nOnJ9fSxmdW5jdGlvbihlLHQpe3ZhciBuPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwic3ZnXCIse2F0dHJzOntmaWxsOlwiIzlFOUU5RVwiLHZpZXdCb3g6XCIwIDAgMjQgMjRcIix4bWxuczpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9fSxbbihcInBhdGhcIix7YXR0cnM6e2Q6XCJNMCAwaDI0djI0SDB6XCIsZmlsbDpcIm5vbmVcIn19KSxuKFwicGF0aFwiLHthdHRyczp7ZDpcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem01IDExaC00djRoLTJ2LTRIN3YtMmg0VjdoMnY0aDR2MnpcIn19KV0pfSxyPWZ1bmN0aW9uKCl7cmV0dXJuXCIvVXNlcnMvZHJveWVyL0xlYXJuaW5nIEhvdXNlL3ZsaC1saWJyYXJ5L3NyYy9hc3NldHMvaW1hZ2VzL3Nob3ctc3ViZmlsdGVycy5zdmdcIn07ZS5leHBvcnRzPXtyZW5kZXI6bix0b1N0cmluZzpyfX0sZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcInN2Z1wiLHthdHRyczp7ZmlsbDpcIiM5ZTllOWVcIixoZWlnaHQ6XCIyNFwiLHdpZHRoOlwiMjRcIix4bWxuczpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9fSxbbihcInBhdGhcIix7YXR0cnM6e2Q6XCJNMCAwaDI0djI0SDB6XCIsZmlsbDpcIm5vbmVcIn19KSxuKFwicGF0aFwiLHthdHRyczp7ZDpcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem01IDExSDd2LTJoMTB6XCJ9fSldKX0scj1mdW5jdGlvbigpe3JldHVyblwiL1VzZXJzL2Ryb3llci9MZWFybmluZyBIb3VzZS92bGgtbGlicmFyeS9zcmMvYXNzZXRzL2ltYWdlcy9oaWRlLXN1YmZpbHRlcnMuc3ZnXCJ9O2UuZXhwb3J0cz17cmVuZGVyOm4sdG9TdHJpbmc6cn19LGZ1bmN0aW9uKGUsdCl7dmFyIG49ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJzdmdcIix7YXR0cnM6e2ZpbGw6XCIjZmZmXCIsdmlld0JveDpcIjAgMCAyNCAyNFwiLHhtbG5zOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn19LFtuKFwicGF0aFwiLHthdHRyczp7ZDpcIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdBNi40NzEgNi40NzEgMCAwIDAgMTYgOS41IDYuNSA2LjUgMCAxIDAgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpcIn19KSxuKFwicGF0aFwiLHthdHRyczp7ZDpcIk0wIDBoMjR2MjRIMHpcIixmaWxsOlwibm9uZVwifX0pXSl9LHI9ZnVuY3Rpb24oKXtyZXR1cm5cIi9Vc2Vycy9kcm95ZXIvTGVhcm5pbmcgSG91c2UvdmxoLWxpYnJhcnkvc3JjL2Fzc2V0cy9pbWFnZXMvc2VhcmNoLnN2Z1wifTtlLmV4cG9ydHM9e3JlbmRlcjpuLHRvU3RyaW5nOnJ9fSxmdW5jdGlvbihlLHQpe3ZhciBuPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwic3ZnXCIse2F0dHJzOntmaWxsOlwiI2ZmZlwiLHZpZXdCb3g6XCIwIDAgMjQgMjRcIix4bWxuczpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9fSxbbihcInBhdGhcIix7YXR0cnM6e2Q6XCJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyelwifX0pLG4oXCJwYXRoXCIse2F0dHJzOntkOlwiTTAgMGgyNHYyNEgwelwiLGZpbGw6XCJub25lXCJ9fSldKX0scj1mdW5jdGlvbigpe3JldHVyblwiL1VzZXJzL2Ryb3llci9MZWFybmluZyBIb3VzZS92bGgtbGlicmFyeS9zcmMvYXNzZXRzL2ltYWdlcy9jbGVhci1zZWFyY2guc3ZnXCJ9O2UuZXhwb3J0cz17cmVuZGVyOm4sdG9TdHJpbmc6cn19LGZ1bmN0aW9uKGUsdCl7dmFyIG49ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJzdmdcIix7YXR0cnM6e2ZpbGw6XCIjQTgxRDMyXCIsaGVpZ2h0OlwiMjRcIix3aWR0aDpcIjI0XCIseG1sbnM6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifX0sW24oXCJwYXRoXCIse2F0dHJzOntkOlwiTTcuNDEgMTUuNDFMMTIgMTAuODNsNC41OSA0LjU4TDE4IDE0bC02LTYtNiA2elwifX0pLG4oXCJwYXRoXCIse2F0dHJzOntkOlwiTTAgMGgyNHYyNEgwelwiLGZpbGw6XCJub25lXCJ9fSldKX0scj1mdW5jdGlvbigpe3JldHVyblwiL1VzZXJzL2Ryb3llci9MZWFybmluZyBIb3VzZS92bGgtbGlicmFyeS9zcmMvYXNzZXRzL2ltYWdlcy9hcnJvdy11cC5zdmdcIn07ZS5leHBvcnRzPXtyZW5kZXI6bix0b1N0cmluZzpyfX0sZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcInN2Z1wiLHthdHRyczp7ZmlsbDpcIiNBODFEMzJcIixoZWlnaHQ6XCIyNFwiLHdpZHRoOlwiMjRcIix4bWxuczpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9fSxbbihcInBhdGhcIix7YXR0cnM6e2Q6XCJNNy40MSA3Ljg0TDEyIDEyLjQybDQuNTktNC41OEwxOCA5LjI1bC02IDYtNi02elwifX0pLG4oXCJwYXRoXCIse2F0dHJzOntkOlwiTTAtLjc1aDI0djI0SDB6XCIsZmlsbDpcIm5vbmVcIn19KV0pfSxyPWZ1bmN0aW9uKCl7cmV0dXJuXCIvVXNlcnMvZHJveWVyL0xlYXJuaW5nIEhvdXNlL3ZsaC1saWJyYXJ5L3NyYy9hc3NldHMvaW1hZ2VzL2Fycm93LWRvd24uc3ZnXCJ9O2UuZXhwb3J0cz17cmVuZGVyOm4sdG9TdHJpbmc6cn19LGZ1bmN0aW9uKGUsdCl7dmFyIG49ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJzdmdcIix7YXR0cnM6e3htbG5zOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIix2aWV3Qm94OlwiMCAwIDQ0LjIzOCA0NC4yMzhcIn19LFtuKFwicGF0aFwiLHthdHRyczp7ZDpcIk0yMi4xMTkgNDQuMjM3QzkuOTIyIDQ0LjIzNyAwIDM0LjMxNSAwIDIyLjEyIDAgOS45MjQgOS45MjIuMDAxIDIyLjExOS4wMDFTNDQuMjM4IDkuOTIzIDQ0LjIzOCAyMi4xMnMtOS45MjQgMjIuMTE3LTIyLjExOSAyMi4xMTd6bTAtNDIuNzM2QzEwLjc1IDEuNTAxIDEuNSAxMC43NTEgMS41IDIyLjEyczkuMjUgMjAuNjE5IDIwLjYxOSAyMC42MTkgMjAuNjE5LTkuMjUgMjAuNjE5LTIwLjYxOS05LjI1LTIwLjYxOS0yMC42MTktMjAuNjE5elwifX0pLG4oXCJwYXRoXCIse2F0dHJzOntkOlwiTTMxLjQzNCAyMi44NjlIMTIuODA1YS43NS43NSAwIDAgMSAwLTEuNWgxOC42MjhhLjc1Ljc1IDAgMCAxIC4wMDEgMS41elwifX0pLG4oXCJwYXRoXCIse2F0dHJzOntkOlwiTTIyLjExOSAzMi4xODNhLjc1Ljc1IDAgMCAxLS43NS0uNzVWMTIuODA2YS43NS43NSAwIDAgMSAxLjUgMHYxOC42MjZhLjc1Ljc1IDAgMCAxLS43NS43NTF6XCJ9fSldKX0scj1mdW5jdGlvbigpe3JldHVyblwiL1VzZXJzL2Ryb3llci9MZWFybmluZyBIb3VzZS92bGgtbGlicmFyeS9zcmMvYXNzZXRzL2ltYWdlcy9hZGQtY2lyY2xlLW91dGxpbmUuc3ZnXCJ9O2UuZXhwb3J0cz17cmVuZGVyOm4sdG9TdHJpbmc6cn19LGZ1bmN0aW9uKGUsdCl7dmFyIG49ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJzdmdcIix7YXR0cnM6e3htbG5zOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIix2aWV3Qm94OlwiMCAwIDQ0LjIzOCA0NC4yMzhcIn19LFtuKFwicGF0aFwiLHthdHRyczp7ZDpcIk0yMi4xMTkgNDQuMjM3QzkuOTIyIDQ0LjIzNyAwIDM0LjMxNSAwIDIyLjEyIDAgOS45MjQgOS45MjIuMDAxIDIyLjExOS4wMDFTNDQuMjM4IDkuOTIzIDQ0LjIzOCAyMi4xMnMtOS45MjIgMjIuMTE3LTIyLjExOSAyMi4xMTd6bTAtNDIuNzM2QzEwLjc1IDEuNTAxIDEuNSAxMC43NTEgMS41IDIyLjEyczkuMjUgMjAuNjE5IDIwLjYxOSAyMC42MTkgMjAuNjE5LTkuMjUgMjAuNjE5LTIwLjYxOS05LjI1LTIwLjYxOS0yMC42MTktMjAuNjE5elwifX0pLG4oXCJwYXRoXCIse2F0dHJzOntkOlwiTTMxLjQzNCAyMi44NjlIMTIuODA1YS43NS43NSAwIDAgMSAwLTEuNWgxOC42MjhhLjc1Ljc1IDAgMCAxIC4wMDEgMS41elwifX0pXSl9LHI9ZnVuY3Rpb24oKXtyZXR1cm5cIi9Vc2Vycy9kcm95ZXIvTGVhcm5pbmcgSG91c2UvdmxoLWxpYnJhcnkvc3JjL2Fzc2V0cy9pbWFnZXMvcmVtb3ZlLWNpcmNsZS1vdXRsaW5lLnN2Z1wifTtlLmV4cG9ydHM9e3JlbmRlcjpuLHRvU3RyaW5nOnJ9fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7bi5kKHQsXCJhXCIsZnVuY3Rpb24oKXtyZXR1cm4gcn0pLG4uZCh0LFwiYlwiLGZ1bmN0aW9uKCl7cmV0dXJuIGl9KTt2YXIgcj1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50O3JldHVybihlLl9zZWxmLl9jfHx0KShlLmljb24se3RhZzpcImNvbXBvbmVudFwiLHN0YXRpY0NsYXNzOlwiaWNvblwiLHN0eWxlOntmaWxsOmUuY29sb3Isd2lkdGg6ZS5zaXplLGhlaWdodDplLnNpemV9LGF0dHJzOntpZDplLmlkfX0pfSxpPVtdfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtuKDQ1KX12YXIgaT1uKDgpLHM9big0NyksYT1uKDApLG89cixjPU9iamVjdChhLmEpKGkuYSxzLmEscy5iLCExLG8sbnVsbCxudWxsKTt0LmE9Yy5leHBvcnRzfSxmdW5jdGlvbihlLHQpe30sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSx0LG4pe3ZhciByO3JldHVybiBmdW5jdGlvbigpe3ZhciBpPXRoaXMscz1hcmd1bWVudHMsYT1mdW5jdGlvbigpe3I9bnVsbCxufHxlLmFwcGx5KGkscyl9LG89biYmIXI7Y2xlYXJUaW1lb3V0KHIpLHI9c2V0VGltZW91dChhLHQpLG8mJmUuYXBwbHkoaSxzKX19dC5hPXJ9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtuLmQodCxcImFcIixmdW5jdGlvbigpe3JldHVybiByfSksbi5kKHQsXCJiXCIsZnVuY3Rpb24oKXtyZXR1cm4gaX0pO3ZhciByPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsbj1lLl9zZWxmLl9jfHx0O3JldHVybiBuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwic2VhcmNoLWZpbHRlclwifSxbbihcImxhYmVsXCIse3N0YXRpY0NsYXNzOlwic3Itb25seVwiLGF0dHJzOntmb3I6XCJzZWFyY2hGaWx0ZXJcIn19LFtlLl92KFwiU2VhcmNoIEZvciBhIERlZ3JlZVwiKV0pLGUuX3YoXCIgXCIpLG4oXCJpbnB1dFwiLGUuX2Ioe3N0YXRpY0NsYXNzOlwic2VhcmNoLWZpbHRlci1pbnB1dFwiLGF0dHJzOntuYW1lOlwic2VhcmNoRmlsdGVyXCIsdHlwZTpcInRleHRcIn0sZG9tUHJvcHM6e3ZhbHVlOmUudmFsdWV9LG9uOntpbnB1dDpmdW5jdGlvbih0KXtlLmRlYm91bmNlZFNlYXJjaCh0LnRhcmdldC52YWx1ZSl9fX0sXCJpbnB1dFwiLGUuJGF0dHJzLCExKSksZS5fdihcIiBcIiksbihcImRpdlwiLHtzdGF0aWNDbGFzczpcInNlYXJjaC1pY29uLXdyYXBwZXJcIixjbGFzczp7Y2xpY2thYmxlOmUuc2VhcmNoUXVlcnlFeGlzdHN9LGF0dHJzOntyb2xlOlwiYnV0dG9uXCIsXCJhcmlhLWxhYmVsXCI6XCJDbGVhciBTZWFyY2hcIix0YWJpbmRleDpcIjBcIn0sb246e2NsaWNrOmUuY2xlYXJTZWFyY2gsa2V5cHJlc3M6ZnVuY3Rpb24odCl7cmV0dXJuXCJidXR0b25cImluIHR8fCFlLl9rKHQua2V5Q29kZSxcImVudGVyXCIsMTMsdC5rZXksXCJFbnRlclwiKT9lLmNsZWFyU2VhcmNoKHQpOm51bGx9fX0sW24oXCJpY29uXCIse2tleTplLnNlYXJjaEZpbHRlckljb24sc3RhdGljQ2xhc3M6XCJzZWFyY2gtaWNvblwiLGF0dHJzOntzaXplOlwiMjRweFwiLGljb246ZS5zZWFyY2hGaWx0ZXJJY29uLGFsdDpcIlNlYXJjaCBCb3hcIn19KV0sMSldKX0saT1bXX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7big0OSl9dmFyIGk9big5KSxzPW4oNTApLGE9bigwKSxvPXIsYz1PYmplY3QoYS5hKShpLmEscy5hLHMuYiwhMSxvLG51bGwsbnVsbCk7dC5hPWMuZXhwb3J0c30sZnVuY3Rpb24oZSx0KXt9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtuLmQodCxcImFcIixmdW5jdGlvbigpe3JldHVybiByfSksbi5kKHQsXCJiXCIsZnVuY3Rpb24oKXtyZXR1cm4gaX0pO3ZhciByPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQ7cmV0dXJuKGUuX3NlbGYuX2N8fHQpKFwidHJhbnNpdGlvblwiLHthdHRyczp7bmFtZTpcImFjY29yZGlvblwifSxvbjp7XCJiZWZvcmUtZW50ZXJcIjplLmJlZm9yZUVudGVyLGVudGVyOmUuZW50ZXIsXCJiZWZvcmUtbGVhdmVcIjplLmJlZm9yZUxlYXZlLGxlYXZlOmUubGVhdmV9fSxbZS5fdChcImRlZmF1bHRcIildLDIpfSxpPVtdfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dC5hPXtkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue21vYmlsZTohMX19LG1vdW50ZWQ6ZnVuY3Rpb24oKXt2YXIgZT13aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDgwMHB4KVwiKTtlLmFkZExpc3RlbmVyKHRoaXMud2lkdGhIYW5kbGVyKSx0aGlzLndpZHRoSGFuZGxlcihlKX0sbWV0aG9kczp7d2lkdGhIYW5kbGVyOmZ1bmN0aW9uKGUpe2UubWF0Y2hlcz90aGlzLm1vYmlsZT0hMTp0aGlzLm1vYmlsZT0hMH19fX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7aWYoQXJyYXkuaXNBcnJheShlKSl7Zm9yKHZhciB0PTAsbj1BcnJheShlLmxlbmd0aCk7dDxlLmxlbmd0aDt0Kyspblt0XT1lW3RdO3JldHVybiBufXJldHVybiBBcnJheS5mcm9tKGUpfW4oNTMpO3QuYT17ZGF0YTpmdW5jdGlvbigpe3JldHVybntkZWdyZWVzOltdLGRlZ3JlZUxldmVsczpbXSxkZWdyZWVBcmVhczpbXSxjdXJyZW50RGVncmVlTGV2ZWxGaWx0ZXI6bnVsbCxjdXJyZW50RGVncmVlQXJlYUZpbHRlcjpudWxsLGN1cnJlbnREZWdyZWVTZWFyY2hGaWx0ZXI6XCJcIixzaG93RGVncmVlTGV2ZWxGaWx0ZXI6ITEsc2hvd0RlZ3JlZUFyZWFGaWx0ZXI6ITF9fSxjb21wdXRlZDp7ZGVncmVlTGlzdDpmdW5jdGlvbigpe2lmKCF0aGlzLmRlZ3JlZXMpcmV0dXJuW107dmFyIGU9bmV3IFNldCh0aGlzLmZpbHRlcmVkRGVncmVlc0J5QXJlYSksdD1uZXcgU2V0KHRoaXMuZmlsdGVyZWREZWdyZWVzQnlMZXZlbCksbj1uZXcgU2V0KHRoaXMuZmlsdGVyZWREZWdyZWVzQnlTZWFyY2gpO3JldHVybltdLmNvbmNhdChyKG5ldyBTZXQoW10uY29uY2F0KHIoZSkpLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gdC5oYXMoZSkmJm4uaGFzKGUpfSkpKSl9LGZpbHRlcmVkRGVncmVlc0J5U2VhcmNoOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4gdGhpcy5jdXJyZW50RGVncmVlU2VhcmNoRmlsdGVyP3RoaXMuZGVncmVlcy5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQucG9zdF90aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGUuY3VycmVudERlZ3JlZVNlYXJjaEZpbHRlci50b0xvd2VyQ2FzZSgpKX0pOnRoaXMuZGVncmVlc30sZmlsdGVyZWREZWdyZWVzQnlBcmVhOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4gdGhpcy5jdXJyZW50RGVncmVlQXJlYUZpbHRlcj90aGlzLmRlZ3JlZXMuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiB0LmFyZWFzLmluY2x1ZGVzKGUuY3VycmVudERlZ3JlZUFyZWFGaWx0ZXIudGVybV9pZCl9KTp0aGlzLmRlZ3JlZXN9LGZpbHRlcmVkRGVncmVlc0J5TGV2ZWw6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3JldHVybiB0aGlzLmN1cnJlbnREZWdyZWVMZXZlbEZpbHRlcj90aGlzLmRlZ3JlZXMuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiB0LmxldmVscy5pbmNsdWRlcyhlLmN1cnJlbnREZWdyZWVMZXZlbEZpbHRlci50ZXJtX2lkKX0pOnRoaXMuZGVncmVlc319LG1ldGhvZHM6e2hhbmRsZUZpbHRlckhlYWRpbmdDbGljazpmdW5jdGlvbihlLHQpe3RoaXMubW9iaWxlJiYodCYmKHRoaXNbdF09ITEpLHRoaXNbZV09IXRoaXNbZV0pfSx1cGRhdGVGaWx0ZXI6ZnVuY3Rpb24oZSl7XCJkZWdyZWVfdmVydGljYWxcIj09PWUudGF4b25vbXk/dGhpcy5jdXJyZW50RGVncmVlQXJlYUZpbHRlcj1lOnRoaXMuY3VycmVudERlZ3JlZUxldmVsRmlsdGVyPWV9fX19LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIn0sZnVuY3Rpb24oZSx0KXt9XSl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92bGgtbGlicmFyeS9kaXN0L3ZsaC1saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92bGgtbGlicmFyeS9kaXN0L3ZsaC1saWJyYXJ5LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICB2YXIgZnVuY3Rpb25hbCA9IG9wdGlvbnMuZnVuY3Rpb25hbFxuICAgIHZhciBleGlzdGluZyA9IGZ1bmN0aW9uYWxcbiAgICAgID8gb3B0aW9ucy5yZW5kZXJcbiAgICAgIDogb3B0aW9ucy5iZWZvcmVDcmVhdGVcblxuICAgIGlmICghZnVuY3Rpb25hbCkge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBleGlzdGluZyhoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDciLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwibWFpblwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiLCBhdHRyczogeyBpZDogXCJhcHBcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGVncmVlLWZpbHRlcnNcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJzZWFyY2gtZmlsdGVyXCIsIHtcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uY3VycmVudERlZ3JlZVNlYXJjaEZpbHRlcixcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5jdXJyZW50RGVncmVlU2VhcmNoRmlsdGVyID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY3VycmVudERlZ3JlZVNlYXJjaEZpbHRlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZpbHRlci1saXN0LXdyYXBwZXJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImZpbHRlci1saXN0LWhlYWRpbmdcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZEZpbHRlcjogX3ZtLmN1cnJlbnREZWdyZWVMZXZlbEZpbHRlcixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1kcm9wZG93bi1jb2xvclwiOiBcIiNjYzFmMWJcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1yZXNldC1jb2xvclwiOiBcImdyYXlcIixcbiAgICAgICAgICAgICAgICAgIGhlYWRpbmc6IFwiRGVncmVlIExldmVsc1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgXCJ0b2dnbGUtZmlsdGVyLXZpc2liaWxpdHlcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5oYW5kbGVGaWx0ZXJIZWFkaW5nQ2xpY2soXG4gICAgICAgICAgICAgICAgICAgICAgXCJzaG93RGVncmVlTGV2ZWxGaWx0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInNob3dEZWdyZWVBcmVhRmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnNlbGVjdGVkRmlsdGVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudERlZ3JlZUxldmVsRmlsdGVyID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmN1cnJlbnREZWdyZWVMZXZlbEZpbHRlciAmJiBfdm0ubW9iaWxlXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWx0ZXItbGlzdC1zdGF0dXNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKF92bS5jdXJyZW50RGVncmVlTGV2ZWxGaWx0ZXIubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJjbGVhci1zZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCIyMnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnREZWdyZWVMZXZlbEZpbHRlciA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImZpbHRlci1saXN0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogX3ZtLnNob3dEZWdyZWVMZXZlbEZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RlZC1maWx0ZXJcIjogX3ZtLmN1cnJlbnREZWdyZWVMZXZlbEZpbHRlclxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnZpc2libGVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dEZWdyZWVMZXZlbEZpbHRlciA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpzZWxlY3RlZEZpbHRlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudERlZ3JlZUxldmVsRmlsdGVyID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZmlsdGVyLXJlc2V0XCIsIHsgYXR0cnM6IHsgbGFiZWw6IFwiQWxsIExldmVsc1wiIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5kZWdyZWVMZXZlbHMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZmlsdGVyLWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogaXRlbS50ZXJtX2lkLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW06IGl0ZW0gfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWx0ZXItbGlzdC13cmFwcGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJmaWx0ZXItbGlzdC1oZWFkaW5nXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWx0ZXI6IF92bS5jdXJyZW50RGVncmVlQXJlYUZpbHRlcixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1kcm9wZG93bi1jb2xvclwiOiBcIiNjYzFmMWJcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1yZXNldC1jb2xvclwiOiBcImdyYXlcIixcbiAgICAgICAgICAgICAgICAgIGhlYWRpbmc6IFwiRGVncmVlIEFyZWFzXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBcInRvZ2dsZS1maWx0ZXItdmlzaWJpbGl0eVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmhhbmRsZUZpbHRlckhlYWRpbmdDbGljayhcbiAgICAgICAgICAgICAgICAgICAgICBcInNob3dEZWdyZWVBcmVhRmlsdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJzaG93RGVncmVlTGV2ZWxGaWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6c2VsZWN0ZWRGaWx0ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50RGVncmVlQXJlYUZpbHRlciA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5jdXJyZW50RGVncmVlQXJlYUZpbHRlciAmJiBfdm0ubW9iaWxlXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWx0ZXItbGlzdC1zdGF0dXNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKF92bS5jdXJyZW50RGVncmVlQXJlYUZpbHRlci5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImNsZWFyLXNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjIycHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudERlZ3JlZUFyZWFGaWx0ZXIgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJmaWx0ZXItbGlzdFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6IF92bS5zaG93RGVncmVlQXJlYUZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RlZC1maWx0ZXJcIjogX3ZtLmN1cnJlbnREZWdyZWVBcmVhRmlsdGVyXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6dmlzaWJsZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0RlZ3JlZUFyZWFGaWx0ZXIgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6c2VsZWN0ZWRGaWx0ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnREZWdyZWVBcmVhRmlsdGVyID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZmlsdGVyLXJlc2V0XCIsIHsgYXR0cnM6IHsgbGFiZWw6IFwiQWxsIExldmVsc1wiIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5kZWdyZWVBcmVhcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJGaWx0ZXJJdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IGl0ZW0udGVybV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBpdGVtIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRlZ3JlZS1saXN0XCIsXG4gICAgICAgIF92bS5fbChfdm0uZGVncmVlTGlzdCwgZnVuY3Rpb24oZGVncmVlKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwiZGVncmVlLWl0ZW1cIiwgeyBrZXk6IGRlZ3JlZS5JRCwgYXR0cnM6IHsgaXRlbTogZGVncmVlIH0gfSlcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgIV92bS5kZWdyZWVMaXN0Lmxlbmd0aFxuICAgICAgICA/IF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJuby1yZXN1bHRzXCIgfSwgW192bS5fdihcIk5vIE1hdGNoZXNcIildKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNGY5NjMyYjhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTRmOTYzMmI4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3NjcmlwdHMvVmxoRmlsdGVyaW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi00Zjk2MzJiOFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9zY3JpcHRzL1ZsaEZpbHRlcmluZy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDciLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGY5NjMyYjhcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVmxoRmlsdGVyaW5nLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiZjkzMWY3Y2VcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTRmOTYzMmI4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1ZsaEZpbHRlcmluZy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGY5NjMyYjhcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVmxoRmlsdGVyaW5nLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00Zjk2MzJiOFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvc2NyaXB0cy9WbGhGaWx0ZXJpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTRmOTYzMmI4XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9zY3JpcHRzL1ZsaEZpbHRlcmluZy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDciLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbnZhciBsaXN0VG9TdHlsZXMgPSByZXF1aXJlKCcuL2xpc3RUb1N0eWxlcycpXG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxudmFyIG9wdGlvbnMgPSBudWxsXG52YXIgc3NySWRLZXkgPSAnZGF0YS12dWUtc3NyLWlkJ1xuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDciLCIvKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGY5NjMyYjhcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vVmxoRmlsdGVyaW5nLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WbGhGaWx0ZXJpbmcudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00Zjk2MzJiOFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZsaEZpbHRlcmluZy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9zY3JpcHRzL1ZsaEZpbHRlcmluZy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNGY5NjMyYjhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00Zjk2MzJiOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NjcmlwdHMvVmxoRmlsdGVyaW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9zcmMvc2NyaXB0cy9WbGhGaWx0ZXJpbmcudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRGVncmVlTGlzdChEZWdyZWVzKSB7XG4gIHJldHVybiBEZWdyZWVzLm1hcCgoZGVncmVlLCBpbmRleCkgPT4ge1xuICAgIHZhciBsZXZlbHNBcnJheSA9IFtdO1xuICAgIHZhciBhcmVhc0FycmF5ID0gW107XG5cbiAgICBpZiAoZGVncmVlLmRlZ3JlZV9sZXZlbHMpIHtcbiAgICAgIGxldmVsc0FycmF5ID0gZGVncmVlLmRlZ3JlZV9sZXZlbHMubWFwKGxldmVsID0+IGxldmVsLnRlcm1faWQgKVxuICAgIH1cblxuICAgIGlmIChkZWdyZWUuZGVncmVlX2FyZWFzKSB7XG4gICAgICBhcmVhc0FycmF5ID0gZGVncmVlLmRlZ3JlZV9hcmVhcy5tYXAoYXJlYSA9PiBhcmVhLnRlcm1faWQgKVxuICAgIH1cblxuICAgIGRlZ3JlZVsnbGV2ZWxzJ10gPSBsZXZlbHNBcnJheVxuICAgIGRlZ3JlZVsnYXJlYXMnXSA9IGFyZWFzQXJyYXlcbiAgICByZXR1cm4gZGVncmVlXG4gIH0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9oZWxwZXJzL2J1aWxkRGVncmVlTGlzdC5qcyIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFZsaExpYnJhcnksIHtkZWdyZWVNaXhpbn0gZnJvbSAndmxoLWxpYnJhcnknXG5pbXBvcnQgVmxoRmlsdGVyaW5nIGZyb20gJy4vVmxoRmlsdGVyaW5nJ1xuaW1wb3J0IHtidWlsZERlZ3JlZUxpc3R9IGZyb20gJ0Avc2NyaXB0cy9oZWxwZXJzL2J1aWxkRGVncmVlTGlzdCdcblZ1ZS51c2UoVmxoTGlicmFyeSlcblxuY29uc3QgVmxoQXBwRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmxoLWZpbHRlcmluZycpO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGlmIChWbGhBcHBFbCkge1xuICBcdHZhciB2bGhBcHAgPSBuZXcgVnVlKHtcbiAgXHRcdGVsOiBWbGhBcHBFbCxcbiAgICAgIG1peGluczogW2RlZ3JlZU1peGluXSxcbiAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuZGVncmVlcyA9IGJ1aWxkRGVncmVlTGlzdCh3cERhdGEuZGVncmVlcyk7XG4gICAgICAgIHRoaXMuZGVncmVlTGV2ZWxzID0gd3BEYXRhLmRlZ3JlZUxldmVsc1xuICAgICAgICB0aGlzLmRlZ3JlZUFyZWFzID0gd3BEYXRhLmRlZ3JlZUFyZWFzXG4gICAgICB9XG4gIFx0fSlcbiAgfVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4vLyAgIGlmIChWbGhBcHBFbCkge1xuLy8gICBcdHZhciBWbGhGaWx0ZXJpbmdJbnN0YW5jZSA9IG5ldyBWdWUoe1xuLy8gICBcdFx0ZWw6IFZsaEFwcEVsLFxuLy8gICAgICAgcmVuZGVyOiBodG1sID0+IGh0bWwoVmxoRmlsdGVyaW5nKVxuLy8gICBcdH0pXG4vLyAgIH1cbi8vIH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL3ZsaC1maWx0ZXJpbmcuanMiXSwic291cmNlUm9vdCI6IiJ9