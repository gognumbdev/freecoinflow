"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/p2pexchange",{

/***/ "./pages/p2pexchange/index.js":
/*!************************************!*\
  !*** ./pages/p2pexchange/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_p2pExchange_Filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/p2pExchange/Filters */ \"./components/p2pExchange/Filters.js\");\n/* harmony import */ var _components_p2pExchange_P2PBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/p2pExchange/P2PBanner */ \"./components/p2pExchange/P2PBanner.js\");\n/* harmony import */ var _components_p2pExchange_P2PExchangeBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/p2pExchange/P2PExchangeBody */ \"./components/p2pExchange/P2PExchangeBody.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _public_icons_crypto_BTC_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/icons/crypto/BTC.png */ \"./public/icons/crypto/BTC.png\");\n/* harmony import */ var _public_icons_crypto_USDC_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/icons/crypto/USDC.png */ \"./public/icons/crypto/USDC.png\");\n/* harmony import */ var _public_icons_currency_jpgSeries_USD_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/icons/currency/jpgSeries/USD.jpg */ \"./public/icons/currency/jpgSeries/USD.jpg\");\n/* harmony import */ var _public_icons_crypto_BNB_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/icons/crypto/BNB.png */ \"./public/icons/crypto/BNB.png\");\n/* harmony import */ var _public_icons_currency_jpgSeries_THB_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/icons/currency/jpgSeries/THB.jpg */ \"./public/icons/currency/jpgSeries/THB.jpg\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions_tradeAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/actions/tradeAction */ \"./redux/actions/tradeAction.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar P2PExchange = function() {\n    _s();\n    var trade = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function(state) {\n        return state.trade;\n    });\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useDispatch)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"local\"), scope = ref[0], setScope = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (trade.transaction === \"offer\") {\n            dispatch((0,_redux_actions_tradeAction__WEBPACK_IMPORTED_MODULE_13__.selectTransaction)(\"buy\"));\n        }\n    }, []);\n    console.log(trade);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-1 place-items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Decentralized P2P Exchange\"\n                }, void 0, false, {\n                    fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/pages/p2pexchange/index.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/pages/p2pexchange/index.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_p2pExchange_P2PBanner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/pages/p2pexchange/index.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_p2pExchange_Filters__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                scope: scope,\n                setScope: setScope\n            }, void 0, false, {\n                fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/pages/p2pexchange/index.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_p2pExchange_P2PExchangeBody__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                scope: scope\n            }, void 0, false, {\n                fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/pages/p2pexchange/index.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/pages/p2pexchange/index.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this));\n};\n_s(P2PExchange, \"1v+Z02WI4//9zTi6Cxz5/C+UdZ8=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_12__.useDispatch\n    ];\n});\n_c = P2PExchange;\n/* harmony default export */ __webpack_exports__[\"default\"] = (P2PExchange);\nvar _c;\n$RefreshReg$(_c, \"P2PExchange\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wMnBleGNoYW5nZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNlO0FBQ2U7QUFDSTtBQUNZO0FBQ047QUFDakI7QUFDRTtBQUNVO0FBQ1o7QUFDWTtBQUN0QjtBQUNBO0FBQzBCOzs7QUFFbkUsR0FBSyxDQUFDZ0IsV0FBVyxHQUFHLFFBQ3BCLEdBRDBCLENBQUM7O0lBQ3pCLEdBQUssQ0FBQ0MsS0FBSyxHQUFHSix5REFBVyxDQUFDSyxRQUFRLENBQVJBLEtBQUs7UUFBSUEsTUFBTUQsQ0FBTkMsS0FBSyxDQUFDRCxLQUFLOztJQUM5QyxHQUFLLENBQUNFLFFBQVEsR0FBR0wseURBQVc7SUFDNUIsR0FBSyxDQUFxQlosR0FBaUIsR0FBakJBLCtDQUFRLENBQUMsQ0FBTyxTQUFuQ2tCLEtBQUssR0FBY2xCLEdBQWlCLEtBQTdCbUIsUUFBUSxHQUFJbkIsR0FBaUI7SUFFM0NELGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsRUFBRSxFQUFDZ0IsS0FBSyxDQUFDSyxXQUFXLEtBQUssQ0FBTyxRQUFFLENBQUM7WUFDakNILFFBQVEsQ0FBQ0osOEVBQWlCLENBQUMsQ0FBSztRQUNsQyxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsS0FBSztJQUVqQixNQUFNLDZFQUNIUSxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFxQzs7d0ZBQy9DMUIsa0RBQUk7c0dBQ0EyQixDQUFLOzhCQUFDLENBQTBCOzs7Ozs7Ozs7Ozt3RkFHcEN2Qix5RUFBUzs7Ozs7d0ZBRVRELHVFQUFPO2dCQUFDaUIsS0FBSyxFQUFFQSxLQUFLO2dCQUFFQyxRQUFRLEVBQUVBLFFBQVE7Ozs7Ozt3RkFFeENoQiwrRUFBZTtnQkFBQ2UsS0FBSyxFQUFFQSxLQUFLOzs7Ozs7Ozs7Ozs7QUFLckMsQ0FBQztHQTVCS0osV0FBVzs7UUFDREgscURBQVc7UUFDUkMscURBQVc7OztLQUZ4QkUsV0FBVztBQThCakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcDJwZXhjaGFuZ2UvaW5kZXguanM/OGFmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRmlsdGVycyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3AycEV4Y2hhbmdlL0ZpbHRlcnMnXG5pbXBvcnQgUDJQQmFubmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcDJwRXhjaGFuZ2UvUDJQQmFubmVyJ1xuaW1wb3J0IFAyUEV4Y2hhbmdlQm9keSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3AycEV4Y2hhbmdlL1AyUEV4Y2hhbmdlQm9keSdcbmltcG9ydCB7IENhc2hJY29uLCBEZXZpY2VNb2JpbGVJY29ufSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnO1xuaW1wb3J0IEJUQyBmcm9tIFwiLi4vLi4vcHVibGljL2ljb25zL2NyeXB0by9CVEMucG5nXCJcbmltcG9ydCBVU0RDIGZyb20gXCIuLi8uLi9wdWJsaWMvaWNvbnMvY3J5cHRvL1VTREMucG5nXCJcbmltcG9ydCBVU0QgZnJvbSBcIi4uLy4uL3B1YmxpYy9pY29ucy9jdXJyZW5jeS9qcGdTZXJpZXMvVVNELmpwZ1wiXG5pbXBvcnQgQk5CIGZyb20gXCIuLi8uLi9wdWJsaWMvaWNvbnMvY3J5cHRvL0JOQi5wbmdcIlxuaW1wb3J0IFRIQiBmcm9tIFwiLi4vLi4vcHVibGljL2ljb25zL2N1cnJlbmN5L2pwZ1Nlcmllcy9USEIuanBnXCJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgc2VsZWN0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3RyYWRlQWN0aW9uJ1xuXG5jb25zdCBQMlBFeGNoYW5nZSA9ICgpID0+IHtcbiAgY29uc3QgdHJhZGUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS50cmFkZSlcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbc2NvcGUsIHNldFNjb3BlXSA9IHVzZVN0YXRlKFwibG9jYWxcIilcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYodHJhZGUudHJhbnNhY3Rpb24gPT09IFwib2ZmZXJcIikge1xuICAgICAgZGlzcGF0Y2goc2VsZWN0VHJhbnNhY3Rpb24oXCJidXlcIikpXG4gICAgfVxuICB9LCBbXSlcbiAgXG4gIGNvbnNvbGUubG9nKHRyYWRlKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTEgcGxhY2UtaXRlbXMtY2VudGVyJz5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+RGVjZW50cmFsaXplZCBQMlAgRXhjaGFuZ2U8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPFAyUEJhbm5lciAvPlxuICAgICAgICBcbiAgICAgICAgPEZpbHRlcnMgc2NvcGU9e3Njb3BlfSBzZXRTY29wZT17c2V0U2NvcGV9IC8+XG5cbiAgICAgICAgPFAyUEV4Y2hhbmdlQm9keSBzY29wZT17c2NvcGV9Lz5cblxuICAgICAgICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQMlBFeGNoYW5nZSJdLCJuYW1lcyI6WyJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGaWx0ZXJzIiwiUDJQQmFubmVyIiwiUDJQRXhjaGFuZ2VCb2R5IiwiQ2FzaEljb24iLCJEZXZpY2VNb2JpbGVJY29uIiwiQlRDIiwiVVNEQyIsIlVTRCIsIkJOQiIsIlRIQiIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJzZWxlY3RUcmFuc2FjdGlvbiIsIlAyUEV4Y2hhbmdlIiwidHJhZGUiLCJzdGF0ZSIsImRpc3BhdGNoIiwic2NvcGUiLCJzZXRTY29wZSIsInRyYW5zYWN0aW9uIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/p2pexchange/index.js\n");

/***/ })

});