webpackJsonp([2,0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(9);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _Select = __webpack_require__(6);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	__webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.component('v-select', _Select2.default);
	
	new _vue2.default({
	  el: '#app',
	  data: function data() {
	    return {
	      loading: false,
	      selected: null,
	      options: [{
	        title: 'Read the Docs',
	        icon: 'octicon-book',
	        url: 'docs/'
	      }, {
	        title: 'View on GitHub',
	        icon: 'octicon-mark-github',
	        url: 'https://github.com/sagalbot/vue-select'
	      }, {
	        title: 'View on NPM',
	        icon: 'octicon-database',
	        url: 'https://www.npmjs.com/package/vue-select'
	      }, {
	        title: 'View Code Climate Analysis',
	        icon: 'octicon-graph',
	        url: 'https://codeclimate.com/github/sagalbot/vue-select'
	      }, {
	        title: 'View Codepen Examples',
	        icon: 'octicon-pencil',
	        url: 'https://codepen.io/collection/nrkgxV/'
	      }]
	    };
	  }
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	function injectStyle (ssrContext) {
	  __webpack_require__(2)
	}
	var normalizeComponent = __webpack_require__(7)
	/* script */
	export * from "!!babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./Select.vue"
	import __vue_script__ from "!!babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./Select.vue"
	/* template */
	import __vue_template__ from "!!../../node_modules/vue-loader/lib/template-compiler/index?{\"id\":\"data-v-c7c5c990\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./Select.vue"
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
	
	export default Component.exports


/***/ })
]);
//# sourceMappingURL=app.84dc3a2e62beb6fa1838.js.map