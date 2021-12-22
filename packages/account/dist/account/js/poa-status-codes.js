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
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory();
	else
		root["@deriv/account"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Components/poa-status-codes/index.js":
/*!**********************************************!*\
  !*** ./Components/poa-status-codes/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _poa_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./poa-status-codes */ \"./Components/poa-status-codes/poa-status-codes.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_poa_status_codes__WEBPACK_IMPORTED_MODULE_0__.poa_status_codes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvYS1zdGF0dXMtY29kZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db21wb25lbnRzL3BvYS1zdGF0dXMtY29kZXMvaW5kZXguanM/MDlkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwb2Ffc3RhdHVzX2NvZGVzIH0gZnJvbSAnLi9wb2Etc3RhdHVzLWNvZGVzJztcblxuZXhwb3J0IGRlZmF1bHQgcG9hX3N0YXR1c19jb2RlcztcbiJdLCJuYW1lcyI6WyJwb2Ffc3RhdHVzX2NvZGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/poa-status-codes/index.js\n");

/***/ }),

/***/ "./Components/poa-status-codes/poa-status-codes.js":
/*!*********************************************************!*\
  !*** ./Components/poa-status-codes/poa-status-codes.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"poa_status_codes\": () => (/* binding */ poa_status_codes)\n/* harmony export */ });\nvar poa_status_codes = {\n  none: 'none',\n  pending: 'pending',\n  rejected: 'rejected',\n  verified: 'verified',\n  expired: 'expired',\n  suspected: 'suspected'\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvYS1zdGF0dXMtY29kZXMvcG9hLXN0YXR1cy1jb2Rlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9wb2Etc3RhdHVzLWNvZGVzL3BvYS1zdGF0dXMtY29kZXMuanM/ZDllOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcG9hX3N0YXR1c19jb2RlcyA9IHtcbiAgICBub25lOiAnbm9uZScsXG4gICAgcGVuZGluZzogJ3BlbmRpbmcnLFxuICAgIHJlamVjdGVkOiAncmVqZWN0ZWQnLFxuICAgIHZlcmlmaWVkOiAndmVyaWZpZWQnLFxuICAgIGV4cGlyZWQ6ICdleHBpcmVkJyxcbiAgICBzdXNwZWN0ZWQ6ICdzdXNwZWN0ZWQnLFxufTtcbiJdLCJuYW1lcyI6WyJwb2Ffc3RhdHVzX2NvZGVzIiwibm9uZSIsInBlbmRpbmciLCJyZWplY3RlZCIsInZlcmlmaWVkIiwiZXhwaXJlZCIsInN1c3BlY3RlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/poa-status-codes/poa-status-codes.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Components/poa-status-codes/index.js");
/******/ 	__webpack_exports__ = __webpack_exports__.default;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});