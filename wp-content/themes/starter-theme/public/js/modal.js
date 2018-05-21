webpackJsonp([0],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/scripts/VlhLibrary/Modal.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
  // props: ['show'],
  // components: {
  //     Modal
  // }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2aeda9f2\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/scripts/VlhLibrary/Modal.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.modal-mask {\n  position: fixed;\n  z-index: 9998;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, .5);\n  display: table;\n  -webkit-transition: opacity .3s ease;\n  transition: opacity .3s ease;\n}\n.modal-wrapper {\n  display: table-cell;\n  vertical-align: middle;\n}\n.modal-container {\n  width: 300px;\n  margin: 0px auto;\n  padding: 20px 30px;\n  background-color: #fff;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n          box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n  font-family: Helvetica, Arial, sans-serif;\n}\n.modal-header h3 {\n  margin-top: 0;\n  color: #42b983;\n}\n.modal-body {\n  margin: 20px 0;\n}\n.modal-default-button {\n  float: right;\n}\n\n/*\n * The following styles are auto-applied to elements with\n * transition=\"modal\" when their visibility is toggled\n * by Vue.js.\n *\n * You can easily play with the modal transition by editing\n * these styles.\n */\n.modal-enter {\n  opacity: 0;\n}\n.modal-leave-active {\n  opacity: 0;\n}\n.modal-enter .modal-container,\n.modal-leave-active .modal-container {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n", "", {"version":3,"sources":["/Users/droyer/Local Sites/starter-20/app/public/wp-content/themes/starter-theme/src/scripts/VlhLibrary/src/scripts/VlhLibrary/Modal.vue"],"names":[],"mappings":";AAyCA;EACA,gBAAA;EACA,cAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,aAAA;EACA,oCAAA;EACA,eAAA;EACA,qCAAA;EAAA,6BAAA;CACA;AAEA;EACA,oBAAA;EACA,uBAAA;CACA;AAEA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,iDAAA;UAAA,yCAAA;EACA,iCAAA;EAAA,yBAAA;EACA,0CAAA;CACA;AAEA;EACA,cAAA;EACA,eAAA;CACA;AAEA;EACA,eAAA;CACA;AAEA;EACA,aAAA;CACA;;AAEA;;;;;;;GAOA;AAEA;EACA,WAAA;CACA;AAEA;EACA,WAAA;CACA;AAEA;;EAEA,8BAAA;EACA,sBAAA;CACA","file":"Modal.vue","sourcesContent":["<template>\n  <transition name=\"modal\">\n    <div class=\"modal-mask\">\n      <div class=\"modal-wrapper\">\n        <div class=\"modal-container\">\n          <div class=\"modal-header\">\n            <slot name=\"header\">\n              default header 2\n            </slot>\n          </div>\n\n          <div class=\"modal-body\">\n            <slot name=\"body\">\n              default body\n            </slot>\n          </div>\n\n          <div class=\"modal-footer\">\n            <slot name=\"footer\">\n              default footer\n              <button class=\"modal-default-button\" @click=\"$emit('close')\">\n                OK\n              </button>\n            </slot>\n          </div>\n        </div>\n      </div>\n    </div>\n  </transition>\n</template>\n\n<script>\n  export default {\n    // props: ['show'],\n    // components: {\n    //     Modal\n    // }\n  }\n</script>\n\n<style>\n.modal-mask {\n  position: fixed;\n  z-index: 9998;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, .5);\n  display: table;\n  transition: opacity .3s ease;\n}\n\n.modal-wrapper {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.modal-container {\n  width: 300px;\n  margin: 0px auto;\n  padding: 20px 30px;\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n  transition: all .3s ease;\n  font-family: Helvetica, Arial, sans-serif;\n}\n\n.modal-header h3 {\n  margin-top: 0;\n  color: #42b983;\n}\n\n.modal-body {\n  margin: 20px 0;\n}\n\n.modal-default-button {\n  float: right;\n}\n\n/*\n * The following styles are auto-applied to elements with\n * transition=\"modal\" when their visibility is toggled\n * by Vue.js.\n *\n * You can easily play with the modal transition by editing\n * these styles.\n */\n\n.modal-enter {\n  opacity: 0;\n}\n\n.modal-leave-active {\n  opacity: 0;\n}\n\n.modal-enter .modal-container,\n.modal-leave-active .modal-container {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2aeda9f2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/scripts/VlhLibrary/Modal.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "modal" } }, [
    _c("div", { staticClass: "modal-mask" }, [
      _c("div", { staticClass: "modal-wrapper" }, [
        _c("div", { staticClass: "modal-container" }, [
          _c(
            "div",
            { staticClass: "modal-header" },
            [
              _vm._t("header", [
                _vm._v("\n            default header 2\n          ")
              ])
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "modal-body" },
            [
              _vm._t("body", [_vm._v("\n            default body\n          ")])
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "modal-footer" },
            [
              _vm._t("footer", [
                _vm._v("\n            default footer\n            "),
                _c(
                  "button",
                  {
                    staticClass: "modal-default-button",
                    on: {
                      click: function($event) {
                        _vm.$emit("close")
                      }
                    }
                  },
                  [_vm._v("\n              OK\n            ")]
                )
              ])
            ],
            2
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2aeda9f2", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2aeda9f2\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/scripts/VlhLibrary/Modal.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2aeda9f2\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/scripts/VlhLibrary/Modal.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("acc8de06", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2aeda9f2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2aeda9f2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/scripts/VlhLibrary/Modal.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2aeda9f2\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/scripts/VlhLibrary/Modal.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/scripts/VlhLibrary/Modal.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2aeda9f2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/scripts/VlhLibrary/Modal.vue")
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
Component.options.__file = "src/scripts/VlhLibrary/Modal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2aeda9f2", Component.options)
  } else {
    hotAPI.reload("data-v-2aeda9f2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9Nb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9Nb2RhbC52dWU/NGQ0YiIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9WbGhMaWJyYXJ5L01vZGFsLnZ1ZT9hMGQ5Iiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL1ZsaExpYnJhcnkvTW9kYWwudnVlPzg5NmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9Nb2RhbC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQSxHOzs7Ozs7O0FDaENBO0FBQ0E7OztBQUdBO0FBQ0Esd0NBQXlDLG9CQUFvQixrQkFBa0IsV0FBVyxZQUFZLGdCQUFnQixpQkFBaUIsd0NBQXdDLG1CQUFtQix5Q0FBeUMsaUNBQWlDLEdBQUcsa0JBQWtCLHdCQUF3QiwyQkFBMkIsR0FBRyxvQkFBb0IsaUJBQWlCLHFCQUFxQix1QkFBdUIsMkJBQTJCLHVCQUF1QixxREFBcUQscURBQXFELHFDQUFxQyw2QkFBNkIsOENBQThDLEdBQUcsb0JBQW9CLGtCQUFrQixtQkFBbUIsR0FBRyxlQUFlLG1CQUFtQixHQUFHLHlCQUF5QixpQkFBaUIsR0FBRyxrUEFBa1AsZUFBZSxHQUFHLHVCQUF1QixlQUFlLEdBQUcsd0VBQXdFLGtDQUFrQywwQkFBMEIsR0FBRyxVQUFVLDBMQUEwTCxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sV0FBVyxXQUFXLDQxQkFBNDFCLCtDQUErQyw0QkFBNEIsS0FBSyxxQ0FBcUMsb0JBQW9CLGtCQUFrQixXQUFXLFlBQVksZ0JBQWdCLGlCQUFpQix3Q0FBd0MsbUJBQW1CLGlDQUFpQyxHQUFHLG9CQUFvQix3QkFBd0IsMkJBQTJCLEdBQUcsc0JBQXNCLGlCQUFpQixxQkFBcUIsdUJBQXVCLDJCQUEyQix1QkFBdUIsNkNBQTZDLDZCQUE2Qiw4Q0FBOEMsR0FBRyxzQkFBc0Isa0JBQWtCLG1CQUFtQixHQUFHLGlCQUFpQixtQkFBbUIsR0FBRywyQkFBMkIsaUJBQWlCLEdBQUcsb1BBQW9QLGVBQWUsR0FBRyx5QkFBeUIsZUFBZSxHQUFHLDBFQUEwRSxrQ0FBa0MsMEJBQTBCLEdBQUcsK0JBQStCOztBQUV2Nkg7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUyxnQkFBZ0IsRUFBRTtBQUN0RCxlQUFlLDRCQUE0QjtBQUMzQyxpQkFBaUIsK0JBQStCO0FBQ2hELG1CQUFtQixpQ0FBaUM7QUFDcEQ7QUFDQTtBQUNBLGFBQWEsOEJBQThCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw0QkFBNEI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsOEJBQThCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQy9EQTs7QUFFQTtBQUNBLDJUQUE2TjtBQUM3TjtBQUNBO0FBQ0E7QUFDQSx5SEFBcUg7QUFDckg7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSUFBMEksa0ZBQWtGO0FBQzVOLG1KQUFtSixrRkFBa0Y7QUFDck87QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBLHdWQUFnTTtBQUNoTTtBQUNBO0FBQ0E7QUFDQSx3YkFBZ1Q7QUFDaFQ7QUFDQSx1UkFBNks7QUFDN0s7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6ImpzL21vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8dHJhbnNpdGlvbiBuYW1lPVwibW9kYWxcIj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtbWFza1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgZGVmYXVsdCBoZWFkZXIgMlxuICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJib2R5XCI+XG4gICAgICAgICAgICAgIGRlZmF1bHQgYm9keVxuICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgICBkZWZhdWx0IGZvb3RlclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWwtZGVmYXVsdC1idXR0b25cIiBAY2xpY2s9XCIkZW1pdCgnY2xvc2UnKVwiPlxuICAgICAgICAgICAgICAgIE9LXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgLy8gcHJvcHM6IFsnc2hvdyddLFxuICAgIC8vIGNvbXBvbmVudHM6IHtcbiAgICAvLyAgICAgTW9kYWxcbiAgICAvLyB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4ubW9kYWwtbWFzayB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5ODtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcbiAgZGlzcGxheTogdGFibGU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XG59XG5cbi5tb2RhbC13cmFwcGVyIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIC4zMyk7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5tb2RhbC1oZWFkZXIgaDMge1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogIzQyYjk4Mztcbn1cblxuLm1vZGFsLWJvZHkge1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLm1vZGFsLWRlZmF1bHQtYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4vKlxuICogVGhlIGZvbGxvd2luZyBzdHlsZXMgYXJlIGF1dG8tYXBwbGllZCB0byBlbGVtZW50cyB3aXRoXG4gKiB0cmFuc2l0aW9uPVwibW9kYWxcIiB3aGVuIHRoZWlyIHZpc2liaWxpdHkgaXMgdG9nZ2xlZFxuICogYnkgVnVlLmpzLlxuICpcbiAqIFlvdSBjYW4gZWFzaWx5IHBsYXkgd2l0aCB0aGUgbW9kYWwgdHJhbnNpdGlvbiBieSBlZGl0aW5nXG4gKiB0aGVzZSBzdHlsZXMuXG4gKi9cblxuLm1vZGFsLWVudGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm1vZGFsLWxlYXZlLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tb2RhbC1lbnRlciAubW9kYWwtY29udGFpbmVyLFxuLm1vZGFsLWxlYXZlLWFjdGl2ZSAubW9kYWwtY29udGFpbmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9Nb2RhbC52dWUiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm1vZGFsLW1hc2sge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogOTk5ODtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlO1xcbn1cXG4ubW9kYWwtd3JhcHBlciB7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLm1vZGFsLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBtYXJnaW46IDBweCBhdXRvO1xcbiAgcGFkZGluZzogMjBweCAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgLjMzKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgLjMzKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcbi5tb2RhbC1oZWFkZXIgaDMge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGNvbG9yOiAjNDJiOTgzO1xcbn1cXG4ubW9kYWwtYm9keSB7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuLm1vZGFsLWRlZmF1bHQtYnV0dG9uIHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLypcXG4gKiBUaGUgZm9sbG93aW5nIHN0eWxlcyBhcmUgYXV0by1hcHBsaWVkIHRvIGVsZW1lbnRzIHdpdGhcXG4gKiB0cmFuc2l0aW9uPVxcXCJtb2RhbFxcXCIgd2hlbiB0aGVpciB2aXNpYmlsaXR5IGlzIHRvZ2dsZWRcXG4gKiBieSBWdWUuanMuXFxuICpcXG4gKiBZb3UgY2FuIGVhc2lseSBwbGF5IHdpdGggdGhlIG1vZGFsIHRyYW5zaXRpb24gYnkgZWRpdGluZ1xcbiAqIHRoZXNlIHN0eWxlcy5cXG4gKi9cXG4ubW9kYWwtZW50ZXIge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLm1vZGFsLWxlYXZlLWFjdGl2ZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ubW9kYWwtZW50ZXIgLm1vZGFsLWNvbnRhaW5lcixcXG4ubW9kYWwtbGVhdmUtYWN0aXZlIC5tb2RhbC1jb250YWluZXIge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvZHJveWVyL0xvY2FsIFNpdGVzL3N0YXJ0ZXItMjAvYXBwL3B1YmxpYy93cC1jb250ZW50L3RoZW1lcy9zdGFydGVyLXRoZW1lL3NyYy9zY3JpcHRzL1ZsaExpYnJhcnkvc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9Nb2RhbC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXlDQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtFQUFBLDZCQUFBO0NBQ0E7QUFFQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7Q0FDQTtBQUVBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQUEseUJBQUE7RUFDQSwwQ0FBQTtDQUNBO0FBRUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtDQUNBO0FBRUE7RUFDQSxlQUFBO0NBQ0E7QUFFQTtFQUNBLGFBQUE7Q0FDQTs7QUFFQTs7Ozs7OztHQU9BO0FBRUE7RUFDQSxXQUFBO0NBQ0E7QUFFQTtFQUNBLFdBQUE7Q0FDQTtBQUVBOztFQUVBLDhCQUFBO0VBQ0Esc0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiTW9kYWwudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDx0cmFuc2l0aW9uIG5hbWU9XFxcIm1vZGFsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtbWFza1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtd3JhcHBlclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcImhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICBkZWZhdWx0IGhlYWRlciAyXFxuICAgICAgICAgICAgPC9zbG90PlxcbiAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiYm9keVxcXCI+XFxuICAgICAgICAgICAgICBkZWZhdWx0IGJvZHlcXG4gICAgICAgICAgICA8L3Nsb3Q+XFxuICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcbiAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcImZvb3RlclxcXCI+XFxuICAgICAgICAgICAgICBkZWZhdWx0IGZvb3RlclxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwibW9kYWwtZGVmYXVsdC1idXR0b25cXFwiIEBjbGljaz1cXFwiJGVtaXQoJ2Nsb3NlJylcXFwiPlxcbiAgICAgICAgICAgICAgICBPS1xcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPC9zbG90PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvdHJhbnNpdGlvbj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICBleHBvcnQgZGVmYXVsdCB7XFxuICAgIC8vIHByb3BzOiBbJ3Nob3cnXSxcXG4gICAgLy8gY29tcG9uZW50czoge1xcbiAgICAvLyAgICAgTW9kYWxcXG4gICAgLy8gfVxcbiAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4ubW9kYWwtbWFzayB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA5OTk4O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XFxufVxcblxcbi5tb2RhbC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbjogMHB4IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgLjMzKTtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIGgzIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBjb2xvcjogIzQyYjk4MztcXG59XFxuXFxuLm1vZGFsLWJvZHkge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5tb2RhbC1kZWZhdWx0LWJ1dHRvbiB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi8qXFxuICogVGhlIGZvbGxvd2luZyBzdHlsZXMgYXJlIGF1dG8tYXBwbGllZCB0byBlbGVtZW50cyB3aXRoXFxuICogdHJhbnNpdGlvbj1cXFwibW9kYWxcXFwiIHdoZW4gdGhlaXIgdmlzaWJpbGl0eSBpcyB0b2dnbGVkXFxuICogYnkgVnVlLmpzLlxcbiAqXFxuICogWW91IGNhbiBlYXNpbHkgcGxheSB3aXRoIHRoZSBtb2RhbCB0cmFuc2l0aW9uIGJ5IGVkaXRpbmdcXG4gKiB0aGVzZSBzdHlsZXMuXFxuICovXFxuXFxuLm1vZGFsLWVudGVyIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5tb2RhbC1sZWF2ZS1hY3RpdmUge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm1vZGFsLWVudGVyIC5tb2RhbC1jb250YWluZXIsXFxuLm1vZGFsLWxlYXZlLWFjdGl2ZSAubW9kYWwtY29udGFpbmVyIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yYWVkYTlmMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9Nb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTJhZWRhOWYyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvc2NyaXB0cy9WbGhMaWJyYXJ5L01vZGFsLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwibW9kYWxcIiB9IH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLW1hc2tcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLXdyYXBwZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtaGVhZGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl90KFwiaGVhZGVyXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBkZWZhdWx0IGhlYWRlciAyXFxuICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1ib2R5XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl90KFwiYm9keVwiLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgZGVmYXVsdCBib2R5XFxuICAgICAgICAgIFwiKV0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvb3RlclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdChcImZvb3RlclwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgZGVmYXVsdCBmb290ZXJcXG4gICAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1kZWZhdWx0LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcImNsb3NlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgT0tcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTJhZWRhOWYyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yYWVkYTlmMlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9zY3JpcHRzL1ZsaExpYnJhcnkvTW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTJhZWRhOWYyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3NjcmlwdHMvVmxoTGlicmFyeS9Nb2RhbC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJhZWRhOWYyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01vZGFsLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiYWNjOGRlMDZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJhZWRhOWYyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01vZGFsLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYWVkYTlmMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMmFlZGE5ZjJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9zY3JpcHRzL1ZsaExpYnJhcnkvTW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTJhZWRhOWYyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvc2NyaXB0cy9WbGhMaWJyYXJ5L01vZGFsLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJhZWRhOWYyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01vZGFsLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Nb2RhbC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTJhZWRhOWYyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTW9kYWwudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvc2NyaXB0cy9WbGhMaWJyYXJ5L01vZGFsLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yYWVkYTlmMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJhZWRhOWYyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2NyaXB0cy9WbGhMaWJyYXJ5L01vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9zcmMvc2NyaXB0cy9WbGhMaWJyYXJ5L01vZGFsLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9