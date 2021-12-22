/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@deriv/shared"), require("@deriv/translations"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/shared", "@deriv/translations"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/shared"), require("@deriv/translations"));
	else
		root["@deriv/account"] = factory(root["@deriv/shared"], root["@deriv/translations"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__deriv_shared__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Configs/terms-of-use-config.js":
/*!****************************************!*\
  !*** ./Configs/terms-of-use-config.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deriv/shared */ \"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/translations */ \"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar terms_of_use_config = {\n  agreed_tos: {\n    supported_in: ['svg', 'iom'],\n    default_value: false\n  },\n  agreed_tnc: {\n    supported_in: ['svg', 'iom'],\n    default_value: false\n  }\n};\n\nvar termsOfUseConfig = function termsOfUseConfig(_ref, TermsOfUse) {\n  var real_account_signup_target = _ref.real_account_signup_target;\n  var is_dashboard = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var active_title = is_dashboard ? (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Our terms of use') : (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Terms of use');\n  return {\n    header: {\n      active_title: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.isDesktop)() ? active_title : null,\n      title: is_dashboard ? (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('TERMS OF USE') : (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Terms of use')\n    },\n    body: TermsOfUse,\n    form_value: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.getDefaultFields)(real_account_signup_target, terms_of_use_config),\n    props: {\n      real_account_signup_target: real_account_signup_target\n    },\n    icon: 'IcDashboardTermsOfUse'\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (termsOfUseConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db25maWdzL3Rlcm1zLW9mLXVzZS1jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7O0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBVkE7QUFZQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29uZmlncy90ZXJtcy1vZi11c2UtY29uZmlnLmpzPzJkOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNEZXNrdG9wLCBnZXREZWZhdWx0RmllbGRzIH0gZnJvbSAnQGRlcml2L3NoYXJlZCc7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi90cmFuc2xhdGlvbnMnO1xuXG5jb25zdCB0ZXJtc19vZl91c2VfY29uZmlnID0ge1xuICAgIGFncmVlZF90b3M6IHtcbiAgICAgICAgc3VwcG9ydGVkX2luOiBbJ3N2ZycsICdpb20nXSxcbiAgICAgICAgZGVmYXVsdF92YWx1ZTogZmFsc2UsXG4gICAgfSxcbiAgICBhZ3JlZWRfdG5jOiB7XG4gICAgICAgIHN1cHBvcnRlZF9pbjogWydzdmcnLCAnaW9tJ10sXG4gICAgICAgIGRlZmF1bHRfdmFsdWU6IGZhbHNlLFxuICAgIH0sXG59O1xuXG5jb25zdCB0ZXJtc09mVXNlQ29uZmlnID0gKHsgcmVhbF9hY2NvdW50X3NpZ251cF90YXJnZXQgfSwgVGVybXNPZlVzZSwgaXNfZGFzaGJvYXJkID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBhY3RpdmVfdGl0bGUgPSBpc19kYXNoYm9hcmQgPyBsb2NhbGl6ZSgnT3VyIHRlcm1zIG9mIHVzZScpIDogbG9jYWxpemUoJ1Rlcm1zIG9mIHVzZScpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgYWN0aXZlX3RpdGxlOiBpc0Rlc2t0b3AoKSA/IGFjdGl2ZV90aXRsZSA6IG51bGwsXG4gICAgICAgICAgICB0aXRsZTogaXNfZGFzaGJvYXJkID8gbG9jYWxpemUoJ1RFUk1TIE9GIFVTRScpIDogbG9jYWxpemUoJ1Rlcm1zIG9mIHVzZScpLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBUZXJtc09mVXNlLFxuICAgICAgICBmb3JtX3ZhbHVlOiBnZXREZWZhdWx0RmllbGRzKHJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0LCB0ZXJtc19vZl91c2VfY29uZmlnKSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0LFxuICAgICAgICB9LFxuICAgICAgICBpY29uOiAnSWNEYXNoYm9hcmRUZXJtc09mVXNlJyxcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGVybXNPZlVzZUNvbmZpZztcbiJdLCJuYW1lcyI6WyJpc0Rlc2t0b3AiLCJnZXREZWZhdWx0RmllbGRzIiwibG9jYWxpemUiLCJ0ZXJtc19vZl91c2VfY29uZmlnIiwiYWdyZWVkX3RvcyIsInN1cHBvcnRlZF9pbiIsImRlZmF1bHRfdmFsdWUiLCJhZ3JlZWRfdG5jIiwidGVybXNPZlVzZUNvbmZpZyIsIlRlcm1zT2ZVc2UiLCJyZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCIsImlzX2Rhc2hib2FyZCIsImFjdGl2ZV90aXRsZSIsImhlYWRlciIsInRpdGxlIiwiYm9keSIsImZvcm1fdmFsdWUiLCJwcm9wcyIsImljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Configs/terms-of-use-config.js\n");

/***/ }),

/***/ "@deriv/shared":
/*!********************************!*\
  !*** external "@deriv/shared" ***!
  \********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared__;

/***/ }),

/***/ "@deriv/translations":
/*!**************************************!*\
  !*** external "@deriv/translations" ***!
  \**************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_translations__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./Configs/terms-of-use-config.js");
/******/ 	__webpack_exports__ = __webpack_exports__.default;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});