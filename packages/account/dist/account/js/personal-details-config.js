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

/***/ "./Configs/personal-details-config.js":
/*!********************************************!*\
  !*** ./Configs/personal-details-config.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deriv/shared */ \"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/translations */ \"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\nvar personal_details_config = function personal_details_config(_ref) {\n  var _account_settings$acc, _account_settings$sal, _account_settings$fir, _account_settings$las, _residence_list$find, _residence_list$find2, _account_settings$pho, _residence_list$find3, _account_settings$tax;\n\n  var residence_list = _ref.residence_list,\n      account_settings = _ref.account_settings,\n      is_dashboard = _ref.is_dashboard;\n\n  if (!residence_list || !account_settings) {\n    return {};\n  }\n\n  var disabled_items = _toConsumableArray(Object.keys(account_settings).filter(function (field_name) {\n    return field_name !== 'account_opening_reason' && !!field_name;\n  })); // minimum characters required is 9 numbers (excluding +- signs or space)\n\n\n  var min_phone_number = 9;\n  var max_phone_number = 35;\n  var config = {\n    account_opening_reason: {\n      supported_in: ['iom', 'malta', 'maltainvest'],\n      default_value: (_account_settings$acc = account_settings.account_opening_reason) !== null && _account_settings$acc !== void 0 ? _account_settings$acc : '',\n      rules: [['req', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Account opening reason is required.')]]\n    },\n    salutation: {\n      supported_in: ['iom', 'malta', 'maltainvest'],\n      default_value: (_account_settings$sal = account_settings.salutation) !== null && _account_settings$sal !== void 0 ? _account_settings$sal : '',\n      rules: [['req', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Salutation is required.')]]\n    },\n    first_name: {\n      supported_in: ['svg', 'iom', 'malta', 'maltainvest'],\n      default_value: (_account_settings$fir = account_settings.first_name) !== null && _account_settings$fir !== void 0 ? _account_settings$fir : '',\n      rules: [['req', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('First name is required.')], ['length', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('First name should be between 2 and 50 characters.'), {\n        min: 2,\n        max: 50\n      }], ['letter_symbol', (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.getErrorMessages)().letter_symbol()]]\n    },\n    last_name: {\n      supported_in: ['svg', 'iom', 'malta', 'maltainvest'],\n      default_value: (_account_settings$las = account_settings.last_name) !== null && _account_settings$las !== void 0 ? _account_settings$las : '',\n      rules: [['req', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Last name is required.')], ['length', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Last name should be between 2 and 50 characters.'), {\n        min: 2,\n        max: 50\n      }], ['letter_symbol', (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.getErrorMessages)().letter_symbol()]]\n    },\n    date_of_birth: {\n      supported_in: ['svg', 'iom', 'malta', 'maltainvest'],\n      default_value: account_settings.date_of_birth ? (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.toMoment)(account_settings.date_of_birth).format('YYYY-MM-DD') : '',\n      rules: [['req', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Date of birth is required.')], [function (v) {\n        return (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.toMoment)(v).isValid() && (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.toMoment)(v).isBefore((0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.toMoment)().subtract(18, 'years'));\n      }, (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('You must be 18 years old and above.')]]\n    },\n    place_of_birth: {\n      supported_in: ['maltainvest', 'iom', 'malta'],\n      default_value: account_settings.place_of_birth ? (_residence_list$find = residence_list.find(function (item) {\n        return item.value === account_settings.place_of_birth;\n      })) === null || _residence_list$find === void 0 ? void 0 : _residence_list$find.text : '',\n      rules: [['req', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Place of birth is required.')]]\n    },\n    citizen: {\n      supported_in: ['iom', 'malta', 'maltainvest'],\n      default_value: account_settings.citizen ? (_residence_list$find2 = residence_list.find(function (item) {\n        return item.value === account_settings.citizen;\n      })) === null || _residence_list$find2 === void 0 ? void 0 : _residence_list$find2.text : '',\n      rules: [['req', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Citizenship is required')]]\n    },\n    phone: {\n      supported_in: ['svg', 'iom', 'malta', 'maltainvest'],\n      default_value: (_account_settings$pho = account_settings.phone) !== null && _account_settings$pho !== void 0 ? _account_settings$pho : '',\n      rules: [['req', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Phone is required.')], ['phone', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Phone is not in a proper format.')], [function (value) {\n        // phone_trim uses regex that trims non-digits\n        var phone_trim = value.replace(/\\D/g, '');\n        return (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.validLength)(phone_trim, {\n          min: min_phone_number,\n          max: max_phone_number\n        });\n      }, (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('You should enter {{min}}-{{max}} numbers.', {\n        min: min_phone_number,\n        max: max_phone_number\n      })]]\n    },\n    tax_residence: {\n      default_value: account_settings.tax_residence ? (_residence_list$find3 = residence_list.find(function (item) {\n        return item.value === account_settings.tax_residence;\n      })) === null || _residence_list$find3 === void 0 ? void 0 : _residence_list$find3.text : '',\n      supported_in: ['maltainvest'],\n      rules: [['req', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Tax residence is required.')]]\n    },\n    tax_identification_number: {\n      default_value: (_account_settings$tax = account_settings.tax_identification_number) !== null && _account_settings$tax !== void 0 ? _account_settings$tax : '',\n      supported_in: ['maltainvest'],\n      rules: [['req', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Tax Identification Number is required.')], ['length', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)(\"Tax Identification Number can't be longer than 25 characters.\"), {\n        min: 0,\n        max: 25\n      }], ['regular', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Letters, numbers, spaces, periods, hyphens and forward slashes only.'), {\n        regex: /^(?!^$|\\s+)[A-Za-z0-9.\\/\\s-]{0,25}$/\n      }], [function (value, options, _ref2) {\n        var tax_residence = _ref2.tax_residence;\n        return !!tax_residence;\n      }, (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Please fill in Tax residence.')], [function (value, options, _ref3) {\n        var _from_list$, _from_list$$tin_forma;\n\n        var tax_residence = _ref3.tax_residence;\n        var from_list = residence_list.filter(function (res) {\n          return res.text === tax_residence && res.tin_format;\n        });\n        var tax_regex = (_from_list$ = from_list[0]) === null || _from_list$ === void 0 ? void 0 : (_from_list$$tin_forma = _from_list$.tin_format) === null || _from_list$$tin_forma === void 0 ? void 0 : _from_list$$tin_forma[0];\n        return tax_regex ? new RegExp(tax_regex).test(value) : true;\n      }, ['warn', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('This Tax Identification Number (TIN) is invalid. You may continue with account creation, but to facilitate future payment processes, valid tax information will be required.')]]]\n    },\n    tax_identification_confirm: {\n      default_value: false,\n      supported_in: ['maltainvest'],\n      rules: [['confirm', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Please confirm your tax information.')]]\n    }\n  };\n\n  var getConfig = function getConfig() {\n    if (is_dashboard) {\n      var allowed_fields = ['first_name', 'last_name', 'date_of_birth', 'phone'];\n      return Object.keys(config).reduce(function (new_config, key) {\n        if (allowed_fields.includes(key)) {\n          new_config[key] = config[key];\n        }\n\n        return new_config;\n      }, {});\n    }\n\n    return config;\n  };\n\n  return [getConfig(), disabled_items];\n};\n\nvar personalDetailsConfig = function personalDetailsConfig(_ref4, PersonalDetails) {\n  var upgrade_info = _ref4.upgrade_info,\n      real_account_signup_target = _ref4.real_account_signup_target,\n      residence_list = _ref4.residence_list,\n      account_settings = _ref4.account_settings;\n  var is_dashboard = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n  var _personal_details_con = personal_details_config({\n    residence_list: residence_list,\n    account_settings: account_settings,\n    is_dashboard: is_dashboard\n  }),\n      _personal_details_con2 = _slicedToArray(_personal_details_con, 2),\n      config = _personal_details_con2[0],\n      disabled_items = _personal_details_con2[1];\n\n  return {\n    header: {\n      active_title: is_dashboard ? (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('A few personal details') : (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Complete your personal details'),\n      title: is_dashboard ? (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('PERSONAL') : (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Personal details')\n    },\n    body: PersonalDetails,\n    form_value: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.getDefaultFields)(real_account_signup_target, config),\n    props: {\n      validate: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.generateValidationFunction)(real_account_signup_target, transformConfig(config, {\n        real_account_signup_target: real_account_signup_target\n      })),\n      is_svg: (upgrade_info === null || upgrade_info === void 0 ? void 0 : upgrade_info.can_upgrade_to) === 'svg',\n      account_opening_reason_list: [{\n        text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Hedging'),\n        value: 'Hedging'\n      }, {\n        text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Income Earning'),\n        value: 'Income Earning'\n      }, {\n        text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Speculative'),\n        value: 'Speculative'\n      }],\n      salutation_list: [{\n        label: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Mr'),\n        value: 'Mr'\n      }, {\n        label: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Ms'),\n        value: 'Ms'\n      }],\n      disabled_items: disabled_items\n    },\n    passthrough: ['residence_list', 'is_fully_authenticated'],\n    icon: 'IcDashboardPersonalDetails'\n  };\n};\n\nvar transformConfig = function transformConfig(config, _ref5) {\n  var real_account_signup_target = _ref5.real_account_signup_target;\n\n  // Remove required rule for malta and iom\n  if (['malta', 'iom'].includes(real_account_signup_target) && config.tax_residence) {\n    config.tax_residence.rules.shift();\n  }\n\n  return config;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (personalDetailsConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db25maWdzL3BlcnNvbmFsLWRldGFpbHMtY29uZmlnLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7OztBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQUE7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBWkE7QUFtQkE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQU1BO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFJQTs7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTVCQTtBQXNDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBeEhBOztBQStIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRkE7QUFLQTtBQS9CQTtBQWlDQTtBQUNBO0FBM0NBO0FBNkNBOztBQUVBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29uZmlncy9wZXJzb25hbC1kZXRhaWxzLWNvbmZpZy5qcz80MDFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvTW9tZW50LCBnZXRFcnJvck1lc3NhZ2VzLCBnZW5lcmF0ZVZhbGlkYXRpb25GdW5jdGlvbiwgZ2V0RGVmYXVsdEZpZWxkcywgdmFsaWRMZW5ndGggfSBmcm9tICdAZGVyaXYvc2hhcmVkJztcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5cbmNvbnN0IHBlcnNvbmFsX2RldGFpbHNfY29uZmlnID0gKHsgcmVzaWRlbmNlX2xpc3QsIGFjY291bnRfc2V0dGluZ3MsIGlzX2Rhc2hib2FyZCB9KSA9PiB7XG4gICAgaWYgKCFyZXNpZGVuY2VfbGlzdCB8fCAhYWNjb3VudF9zZXR0aW5ncykge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgY29uc3QgZGlzYWJsZWRfaXRlbXMgPSBbXG4gICAgICAgIC4uLk9iamVjdC5rZXlzKGFjY291bnRfc2V0dGluZ3MpLmZpbHRlcihmaWVsZF9uYW1lID0+IGZpZWxkX25hbWUgIT09ICdhY2NvdW50X29wZW5pbmdfcmVhc29uJyAmJiAhIWZpZWxkX25hbWUpLFxuICAgIF07XG5cbiAgICAvLyBtaW5pbXVtIGNoYXJhY3RlcnMgcmVxdWlyZWQgaXMgOSBudW1iZXJzIChleGNsdWRpbmcgKy0gc2lnbnMgb3Igc3BhY2UpXG4gICAgY29uc3QgbWluX3Bob25lX251bWJlciA9IDk7XG4gICAgY29uc3QgbWF4X3Bob25lX251bWJlciA9IDM1O1xuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICBhY2NvdW50X29wZW5pbmdfcmVhc29uOiB7XG4gICAgICAgICAgICBzdXBwb3J0ZWRfaW46IFsnaW9tJywgJ21hbHRhJywgJ21hbHRhaW52ZXN0J10sXG4gICAgICAgICAgICBkZWZhdWx0X3ZhbHVlOiBhY2NvdW50X3NldHRpbmdzLmFjY291bnRfb3BlbmluZ19yZWFzb24gPz8gJycsXG4gICAgICAgICAgICBydWxlczogW1sncmVxJywgbG9jYWxpemUoJ0FjY291bnQgb3BlbmluZyByZWFzb24gaXMgcmVxdWlyZWQuJyldXSxcbiAgICAgICAgfSxcbiAgICAgICAgc2FsdXRhdGlvbjoge1xuICAgICAgICAgICAgc3VwcG9ydGVkX2luOiBbJ2lvbScsICdtYWx0YScsICdtYWx0YWludmVzdCddLFxuICAgICAgICAgICAgZGVmYXVsdF92YWx1ZTogYWNjb3VudF9zZXR0aW5ncy5zYWx1dGF0aW9uID8/ICcnLFxuICAgICAgICAgICAgcnVsZXM6IFtbJ3JlcScsIGxvY2FsaXplKCdTYWx1dGF0aW9uIGlzIHJlcXVpcmVkLicpXV0sXG4gICAgICAgIH0sXG4gICAgICAgIGZpcnN0X25hbWU6IHtcbiAgICAgICAgICAgIHN1cHBvcnRlZF9pbjogWydzdmcnLCAnaW9tJywgJ21hbHRhJywgJ21hbHRhaW52ZXN0J10sXG4gICAgICAgICAgICBkZWZhdWx0X3ZhbHVlOiBhY2NvdW50X3NldHRpbmdzLmZpcnN0X25hbWUgPz8gJycsXG4gICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIFsncmVxJywgbG9jYWxpemUoJ0ZpcnN0IG5hbWUgaXMgcmVxdWlyZWQuJyldLFxuICAgICAgICAgICAgICAgIFsnbGVuZ3RoJywgbG9jYWxpemUoJ0ZpcnN0IG5hbWUgc2hvdWxkIGJlIGJldHdlZW4gMiBhbmQgNTAgY2hhcmFjdGVycy4nKSwgeyBtaW46IDIsIG1heDogNTAgfV0sXG4gICAgICAgICAgICAgICAgWydsZXR0ZXJfc3ltYm9sJywgZ2V0RXJyb3JNZXNzYWdlcygpLmxldHRlcl9zeW1ib2woKV0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBsYXN0X25hbWU6IHtcbiAgICAgICAgICAgIHN1cHBvcnRlZF9pbjogWydzdmcnLCAnaW9tJywgJ21hbHRhJywgJ21hbHRhaW52ZXN0J10sXG4gICAgICAgICAgICBkZWZhdWx0X3ZhbHVlOiBhY2NvdW50X3NldHRpbmdzLmxhc3RfbmFtZSA/PyAnJyxcbiAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgWydyZXEnLCBsb2NhbGl6ZSgnTGFzdCBuYW1lIGlzIHJlcXVpcmVkLicpXSxcbiAgICAgICAgICAgICAgICBbJ2xlbmd0aCcsIGxvY2FsaXplKCdMYXN0IG5hbWUgc2hvdWxkIGJlIGJldHdlZW4gMiBhbmQgNTAgY2hhcmFjdGVycy4nKSwgeyBtaW46IDIsIG1heDogNTAgfV0sXG4gICAgICAgICAgICAgICAgWydsZXR0ZXJfc3ltYm9sJywgZ2V0RXJyb3JNZXNzYWdlcygpLmxldHRlcl9zeW1ib2woKV0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBkYXRlX29mX2JpcnRoOiB7XG4gICAgICAgICAgICBzdXBwb3J0ZWRfaW46IFsnc3ZnJywgJ2lvbScsICdtYWx0YScsICdtYWx0YWludmVzdCddLFxuICAgICAgICAgICAgZGVmYXVsdF92YWx1ZTogYWNjb3VudF9zZXR0aW5ncy5kYXRlX29mX2JpcnRoXG4gICAgICAgICAgICAgICAgPyB0b01vbWVudChhY2NvdW50X3NldHRpbmdzLmRhdGVfb2ZfYmlydGgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG4gICAgICAgICAgICAgICAgOiAnJyxcbiAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgWydyZXEnLCBsb2NhbGl6ZSgnRGF0ZSBvZiBiaXJ0aCBpcyByZXF1aXJlZC4nKV0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB2ID0+IHRvTW9tZW50KHYpLmlzVmFsaWQoKSAmJiB0b01vbWVudCh2KS5pc0JlZm9yZSh0b01vbWVudCgpLnN1YnRyYWN0KDE4LCAneWVhcnMnKSksXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsaXplKCdZb3UgbXVzdCBiZSAxOCB5ZWFycyBvbGQgYW5kIGFib3ZlLicpLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBwbGFjZV9vZl9iaXJ0aDoge1xuICAgICAgICAgICAgc3VwcG9ydGVkX2luOiBbJ21hbHRhaW52ZXN0JywgJ2lvbScsICdtYWx0YSddLFxuICAgICAgICAgICAgZGVmYXVsdF92YWx1ZTogYWNjb3VudF9zZXR0aW5ncy5wbGFjZV9vZl9iaXJ0aFxuICAgICAgICAgICAgICAgID8gcmVzaWRlbmNlX2xpc3QuZmluZChpdGVtID0+IGl0ZW0udmFsdWUgPT09IGFjY291bnRfc2V0dGluZ3MucGxhY2Vfb2ZfYmlydGgpPy50ZXh0XG4gICAgICAgICAgICAgICAgOiAnJyxcbiAgICAgICAgICAgIHJ1bGVzOiBbWydyZXEnLCBsb2NhbGl6ZSgnUGxhY2Ugb2YgYmlydGggaXMgcmVxdWlyZWQuJyldXSxcbiAgICAgICAgfSxcbiAgICAgICAgY2l0aXplbjoge1xuICAgICAgICAgICAgc3VwcG9ydGVkX2luOiBbJ2lvbScsICdtYWx0YScsICdtYWx0YWludmVzdCddLFxuICAgICAgICAgICAgZGVmYXVsdF92YWx1ZTogYWNjb3VudF9zZXR0aW5ncy5jaXRpemVuXG4gICAgICAgICAgICAgICAgPyByZXNpZGVuY2VfbGlzdC5maW5kKGl0ZW0gPT4gaXRlbS52YWx1ZSA9PT0gYWNjb3VudF9zZXR0aW5ncy5jaXRpemVuKT8udGV4dFxuICAgICAgICAgICAgICAgIDogJycsXG4gICAgICAgICAgICBydWxlczogW1sncmVxJywgbG9jYWxpemUoJ0NpdGl6ZW5zaGlwIGlzIHJlcXVpcmVkJyldXSxcbiAgICAgICAgfSxcbiAgICAgICAgcGhvbmU6IHtcbiAgICAgICAgICAgIHN1cHBvcnRlZF9pbjogWydzdmcnLCAnaW9tJywgJ21hbHRhJywgJ21hbHRhaW52ZXN0J10sXG4gICAgICAgICAgICBkZWZhdWx0X3ZhbHVlOiBhY2NvdW50X3NldHRpbmdzLnBob25lID8/ICcnLFxuICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICBbJ3JlcScsIGxvY2FsaXplKCdQaG9uZSBpcyByZXF1aXJlZC4nKV0sXG4gICAgICAgICAgICAgICAgWydwaG9uZScsIGxvY2FsaXplKCdQaG9uZSBpcyBub3QgaW4gYSBwcm9wZXIgZm9ybWF0LicpXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBob25lX3RyaW0gdXNlcyByZWdleCB0aGF0IHRyaW1zIG5vbi1kaWdpdHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBob25lX3RyaW0gPSB2YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkTGVuZ3RoKHBob25lX3RyaW0sIHsgbWluOiBtaW5fcGhvbmVfbnVtYmVyLCBtYXg6IG1heF9waG9uZV9udW1iZXIgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsaXplKCdZb3Ugc2hvdWxkIGVudGVyIHt7bWlufX0te3ttYXh9fSBudW1iZXJzLicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogbWluX3Bob25lX251bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heDogbWF4X3Bob25lX251bWJlcixcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHRheF9yZXNpZGVuY2U6IHtcbiAgICAgICAgICAgIGRlZmF1bHRfdmFsdWU6IGFjY291bnRfc2V0dGluZ3MudGF4X3Jlc2lkZW5jZVxuICAgICAgICAgICAgICAgID8gcmVzaWRlbmNlX2xpc3QuZmluZChpdGVtID0+IGl0ZW0udmFsdWUgPT09IGFjY291bnRfc2V0dGluZ3MudGF4X3Jlc2lkZW5jZSk/LnRleHRcbiAgICAgICAgICAgICAgICA6ICcnLFxuICAgICAgICAgICAgc3VwcG9ydGVkX2luOiBbJ21hbHRhaW52ZXN0J10sXG4gICAgICAgICAgICBydWxlczogW1sncmVxJywgbG9jYWxpemUoJ1RheCByZXNpZGVuY2UgaXMgcmVxdWlyZWQuJyldXSxcbiAgICAgICAgfSxcbiAgICAgICAgdGF4X2lkZW50aWZpY2F0aW9uX251bWJlcjoge1xuICAgICAgICAgICAgZGVmYXVsdF92YWx1ZTogYWNjb3VudF9zZXR0aW5ncy50YXhfaWRlbnRpZmljYXRpb25fbnVtYmVyID8/ICcnLFxuICAgICAgICAgICAgc3VwcG9ydGVkX2luOiBbJ21hbHRhaW52ZXN0J10sXG4gICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIFsncmVxJywgbG9jYWxpemUoJ1RheCBJZGVudGlmaWNhdGlvbiBOdW1iZXIgaXMgcmVxdWlyZWQuJyldLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgJ2xlbmd0aCcsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsaXplKFwiVGF4IElkZW50aWZpY2F0aW9uIE51bWJlciBjYW4ndCBiZSBsb25nZXIgdGhhbiAyNSBjaGFyYWN0ZXJzLlwiKSxcbiAgICAgICAgICAgICAgICAgICAgeyBtaW46IDAsIG1heDogMjUgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgJ3JlZ3VsYXInLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGl6ZSgnTGV0dGVycywgbnVtYmVycywgc3BhY2VzLCBwZXJpb2RzLCBoeXBoZW5zIGFuZCBmb3J3YXJkIHNsYXNoZXMgb25seS4nKSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXg6IC9eKD8hXiR8XFxzKylbQS1aYS16MC05LlxcL1xccy1dezAsMjV9JC8sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICh2YWx1ZSwgb3B0aW9ucywgeyB0YXhfcmVzaWRlbmNlIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhIXRheF9yZXNpZGVuY2U7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsaXplKCdQbGVhc2UgZmlsbCBpbiBUYXggcmVzaWRlbmNlLicpLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAodmFsdWUsIG9wdGlvbnMsIHsgdGF4X3Jlc2lkZW5jZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmcm9tX2xpc3QgPSByZXNpZGVuY2VfbGlzdC5maWx0ZXIocmVzID0+IHJlcy50ZXh0ID09PSB0YXhfcmVzaWRlbmNlICYmIHJlcy50aW5fZm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRheF9yZWdleCA9IGZyb21fbGlzdFswXT8udGluX2Zvcm1hdD8uWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRheF9yZWdleCA/IG5ldyBSZWdFeHAodGF4X3JlZ2V4KS50ZXN0KHZhbHVlKSA6IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICd3YXJuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdUaGlzIFRheCBJZGVudGlmaWNhdGlvbiBOdW1iZXIgKFRJTikgaXMgaW52YWxpZC4gWW91IG1heSBjb250aW51ZSB3aXRoIGFjY291bnQgY3JlYXRpb24sIGJ1dCB0byBmYWNpbGl0YXRlIGZ1dHVyZSBwYXltZW50IHByb2Nlc3NlcywgdmFsaWQgdGF4IGluZm9ybWF0aW9uIHdpbGwgYmUgcmVxdWlyZWQuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgdGF4X2lkZW50aWZpY2F0aW9uX2NvbmZpcm06IHtcbiAgICAgICAgICAgIGRlZmF1bHRfdmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgc3VwcG9ydGVkX2luOiBbJ21hbHRhaW52ZXN0J10sXG4gICAgICAgICAgICBydWxlczogW1snY29uZmlybScsIGxvY2FsaXplKCdQbGVhc2UgY29uZmlybSB5b3VyIHRheCBpbmZvcm1hdGlvbi4nKV1dLFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBjb25zdCBnZXRDb25maWcgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpc19kYXNoYm9hcmQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFsbG93ZWRfZmllbGRzID0gWydmaXJzdF9uYW1lJywgJ2xhc3RfbmFtZScsICdkYXRlX29mX2JpcnRoJywgJ3Bob25lJ107XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoY29uZmlnKS5yZWR1Y2UoKG5ld19jb25maWcsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhbGxvd2VkX2ZpZWxkcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld19jb25maWdba2V5XSA9IGNvbmZpZ1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3X2NvbmZpZztcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG5cbiAgICByZXR1cm4gW2dldENvbmZpZygpLCBkaXNhYmxlZF9pdGVtc107XG59O1xuXG5jb25zdCBwZXJzb25hbERldGFpbHNDb25maWcgPSAoXG4gICAgeyB1cGdyYWRlX2luZm8sIHJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0LCByZXNpZGVuY2VfbGlzdCwgYWNjb3VudF9zZXR0aW5ncyB9LFxuICAgIFBlcnNvbmFsRGV0YWlscyxcbiAgICBpc19kYXNoYm9hcmQgPSBmYWxzZVxuKSA9PiB7XG4gICAgY29uc3QgW2NvbmZpZywgZGlzYWJsZWRfaXRlbXNdID0gcGVyc29uYWxfZGV0YWlsc19jb25maWcoeyByZXNpZGVuY2VfbGlzdCwgYWNjb3VudF9zZXR0aW5ncywgaXNfZGFzaGJvYXJkIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgYWN0aXZlX3RpdGxlOiBpc19kYXNoYm9hcmRcbiAgICAgICAgICAgICAgICA/IGxvY2FsaXplKCdBIGZldyBwZXJzb25hbCBkZXRhaWxzJylcbiAgICAgICAgICAgICAgICA6IGxvY2FsaXplKCdDb21wbGV0ZSB5b3VyIHBlcnNvbmFsIGRldGFpbHMnKSxcbiAgICAgICAgICAgIHRpdGxlOiBpc19kYXNoYm9hcmQgPyBsb2NhbGl6ZSgnUEVSU09OQUwnKSA6IGxvY2FsaXplKCdQZXJzb25hbCBkZXRhaWxzJyksXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IFBlcnNvbmFsRGV0YWlscyxcbiAgICAgICAgZm9ybV92YWx1ZTogZ2V0RGVmYXVsdEZpZWxkcyhyZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCwgY29uZmlnKSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZhbGlkYXRlOiBnZW5lcmF0ZVZhbGlkYXRpb25GdW5jdGlvbihcbiAgICAgICAgICAgICAgICByZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Db25maWcoY29uZmlnLCB7IHJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0IH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgaXNfc3ZnOiB1cGdyYWRlX2luZm8/LmNhbl91cGdyYWRlX3RvID09PSAnc3ZnJyxcbiAgICAgICAgICAgIGFjY291bnRfb3BlbmluZ19yZWFzb25fbGlzdDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbG9jYWxpemUoJ0hlZGdpbmcnKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdIZWRnaW5nJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbG9jYWxpemUoJ0luY29tZSBFYXJuaW5nJyksXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnSW5jb21lIEVhcm5pbmcnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBsb2NhbGl6ZSgnU3BlY3VsYXRpdmUnKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdTcGVjdWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzYWx1dGF0aW9uX2xpc3Q6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBsb2NhbGl6ZSgnTXInKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdNcicsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGxvY2FsaXplKCdNcycpLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ01zJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGRpc2FibGVkX2l0ZW1zLFxuICAgICAgICB9LFxuICAgICAgICBwYXNzdGhyb3VnaDogWydyZXNpZGVuY2VfbGlzdCcsICdpc19mdWxseV9hdXRoZW50aWNhdGVkJ10sXG4gICAgICAgIGljb246ICdJY0Rhc2hib2FyZFBlcnNvbmFsRGV0YWlscycsXG4gICAgfTtcbn07XG5cbmNvbnN0IHRyYW5zZm9ybUNvbmZpZyA9IChjb25maWcsIHsgcmVhbF9hY2NvdW50X3NpZ251cF90YXJnZXQgfSkgPT4ge1xuICAgIC8vIFJlbW92ZSByZXF1aXJlZCBydWxlIGZvciBtYWx0YSBhbmQgaW9tXG4gICAgaWYgKFsnbWFsdGEnLCAnaW9tJ10uaW5jbHVkZXMocmVhbF9hY2NvdW50X3NpZ251cF90YXJnZXQpICYmIGNvbmZpZy50YXhfcmVzaWRlbmNlKSB7XG4gICAgICAgIGNvbmZpZy50YXhfcmVzaWRlbmNlLnJ1bGVzLnNoaWZ0KCk7XG4gICAgfVxuICAgIHJldHVybiBjb25maWc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwZXJzb25hbERldGFpbHNDb25maWc7XG4iXSwibmFtZXMiOlsidG9Nb21lbnQiLCJnZXRFcnJvck1lc3NhZ2VzIiwiZ2VuZXJhdGVWYWxpZGF0aW9uRnVuY3Rpb24iLCJnZXREZWZhdWx0RmllbGRzIiwidmFsaWRMZW5ndGgiLCJsb2NhbGl6ZSIsInBlcnNvbmFsX2RldGFpbHNfY29uZmlnIiwicmVzaWRlbmNlX2xpc3QiLCJhY2NvdW50X3NldHRpbmdzIiwiaXNfZGFzaGJvYXJkIiwiZGlzYWJsZWRfaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwiZmllbGRfbmFtZSIsIm1pbl9waG9uZV9udW1iZXIiLCJtYXhfcGhvbmVfbnVtYmVyIiwiY29uZmlnIiwiYWNjb3VudF9vcGVuaW5nX3JlYXNvbiIsInN1cHBvcnRlZF9pbiIsImRlZmF1bHRfdmFsdWUiLCJydWxlcyIsInNhbHV0YXRpb24iLCJmaXJzdF9uYW1lIiwibWluIiwibWF4IiwibGV0dGVyX3N5bWJvbCIsImxhc3RfbmFtZSIsImRhdGVfb2ZfYmlydGgiLCJmb3JtYXQiLCJ2IiwiaXNWYWxpZCIsImlzQmVmb3JlIiwic3VidHJhY3QiLCJwbGFjZV9vZl9iaXJ0aCIsImZpbmQiLCJpdGVtIiwidmFsdWUiLCJ0ZXh0IiwiY2l0aXplbiIsInBob25lIiwicGhvbmVfdHJpbSIsInJlcGxhY2UiLCJ0YXhfcmVzaWRlbmNlIiwidGF4X2lkZW50aWZpY2F0aW9uX251bWJlciIsInJlZ2V4Iiwib3B0aW9ucyIsImZyb21fbGlzdCIsInJlcyIsInRpbl9mb3JtYXQiLCJ0YXhfcmVnZXgiLCJSZWdFeHAiLCJ0ZXN0IiwidGF4X2lkZW50aWZpY2F0aW9uX2NvbmZpcm0iLCJnZXRDb25maWciLCJhbGxvd2VkX2ZpZWxkcyIsInJlZHVjZSIsIm5ld19jb25maWciLCJrZXkiLCJpbmNsdWRlcyIsInBlcnNvbmFsRGV0YWlsc0NvbmZpZyIsIlBlcnNvbmFsRGV0YWlscyIsInVwZ3JhZGVfaW5mbyIsInJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0IiwiaGVhZGVyIiwiYWN0aXZlX3RpdGxlIiwidGl0bGUiLCJib2R5IiwiZm9ybV92YWx1ZSIsInByb3BzIiwidmFsaWRhdGUiLCJ0cmFuc2Zvcm1Db25maWciLCJpc19zdmciLCJjYW5fdXBncmFkZV90byIsImFjY291bnRfb3BlbmluZ19yZWFzb25fbGlzdCIsInNhbHV0YXRpb25fbGlzdCIsImxhYmVsIiwicGFzc3Rocm91Z2giLCJpY29uIiwic2hpZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Configs/personal-details-config.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Configs/personal-details-config.js");
/******/ 	__webpack_exports__ = __webpack_exports__.default;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});