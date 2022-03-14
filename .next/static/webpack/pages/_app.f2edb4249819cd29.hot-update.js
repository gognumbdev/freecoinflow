"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/utils/ConnectWallet.js":
/*!*******************************************!*\
  !*** ./components/utils/ConnectWallet.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ConnectWallet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_image_metamask_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/image/metamask.png */ \"./public/image/metamask.png\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ConnectWallet(param) {\n    var logUserIn = param.logUserIn;\n    var closeModal = function closeModal() {\n        setIsOpen(false);\n    };\n    var openModal = function openModal() {\n        setIsOpen(true);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref[0], setIsOpen = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: openModal,\n                    className: \"px-4 py-2 text-sm font-medium text-black bg-amber-500 rounded-md bg-opacity-70 hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition duration-100 transform ease-out\",\n                    children: \"Connect Wallet\"\n                }, void 0, false, {\n                    fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/components/utils/ConnectWallet.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/components/utils/ConnectWallet.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition, {\n                appear: true,\n                show: isOpen,\n                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Dialog, {\n                    as: \"div\",\n                    className: \"fixed inset-0 z-10 overflow-y-auto \",\n                    onClose: closeModal,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"min-h-screen px-4 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition.Child, {\n                                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                                enter: \"ease-out duration-300\",\n                                enterFrom: \"opacity-0\",\n                                enterTo: \"opacity-100\",\n                                leave: \"ease-in duration-200\",\n                                leaveFrom: \"opacity-100\",\n                                leaveTo: \"opacity-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Dialog.Overlay, {\n                                    className: \"fixed inset-0 bg-black opacity-40\"\n                                }, void 0, false, {\n                                    fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/components/utils/ConnectWallet.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/components/utils/ConnectWallet.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"inline-block h-screen align-middle\",\n                                \"aria-hidden\": \"true\",\n                                children: \"​\"\n                            }, void 0, false, {\n                                fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/components/utils/ConnectWallet.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition.Child, {\n                                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                                enter: \"ease-out duration-300\",\n                                enterFrom: \"opacity-0 scale-95\",\n                                enterTo: \"opacity-100 scale-100\",\n                                leave: \"ease-in duration-200\",\n                                leaveFrom: \"opacity-100 scale-100\",\n                                leaveTo: \"opacity-0 scale-95\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Dialog.Title, {\n                                            as: \"h3\",\n                                            className: \"text-lg font-medium leading-6 text-gray-900 flex justify-between\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"Connect crypto wallet\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/components/utils/ConnectWallet.js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.XCircleIcon, {\n                                                    className: \"h-8 text-red-500 cursor-pointer\",\n                                                    onClick: closeModal\n                                                }, void 0, false, {\n                                                    fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/components/utils/ConnectWallet.js\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/components/utils/ConnectWallet.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-full shadow-xl bg-white mt-5 p-2 transform transition duration-150 ease-in rounded-xl cursor-pointer active:scale-90 border-2 hover:-translate-y-1 hover:border-amber-500\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"flex space-x-5 rounded justify-start items-center\",\n                                                onClick: function() {\n                                                    close();\n                                                    logUserIn();\n                                                },\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                        height: 60,\n                                                        width: 60,\n                                                        src: _public_image_metamask_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                                        objectFit: \"cover\",\n                                                        alt: \"Logo of Metamask wallet\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/components/utils/ConnectWallet.js\",\n                                                        lineNumber: 78,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-xl grid grid-cols-1\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                children: \"MetaMask\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/components/utils/ConnectWallet.js\",\n                                                                lineNumber: 86,\n                                                                columnNumber: 25\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                className: \"text-base\",\n                                                                children: \"You may need to click the extension.\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/components/utils/ConnectWallet.js\",\n                                                                lineNumber: 87,\n                                                                columnNumber: 25\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/components/utils/ConnectWallet.js\",\n                                                        lineNumber: 85,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/components/utils/ConnectWallet.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/components/utils/ConnectWallet.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/components/utils/ConnectWallet.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/components/utils/ConnectWallet.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/components/utils/ConnectWallet.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/components/utils/ConnectWallet.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/components/utils/ConnectWallet.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(ConnectWallet, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = ConnectWallet;\nvar _c;\n$RefreshReg$(_c, \"ConnectWallet\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0IsQ0FBSTswRUFBQyxDQUFROzs7Ozs7d0lBQ2JBLENBQUk7Z0VBQUNoQixTQUFTLEVBQUMsQ0FBVzswRUFBQyxDQUFvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DeEYsQ0FBQztHQW5IdUJQLGFBQWE7S0FBYkEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3V0aWxzL0Nvbm5lY3RXYWxsZXQuanM/YjlkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaWFsb2csIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgWENpcmNsZUljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgbWV0YW1hc2tMb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2UvbWV0YW1hc2sucG5nXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29ubmVjdFdhbGxldCh7bG9nVXNlcklufSkge1xuICBsZXQgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgc2V0SXNPcGVuKGZhbHNlKVxuICB9XG5cbiAgZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgIHNldElzT3Blbih0cnVlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17b3Blbk1vZGFsfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtYmxhY2sgYmctYW1iZXItNTAwIHJvdW5kZWQtbWQgYmctb3BhY2l0eS03MCBob3ZlcjpiZy1vcGFjaXR5LTkwIFxuICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZy0yIGZvY3VzLXZpc2libGU6cmluZy13aGl0ZSBmb2N1cy12aXNpYmxlOnJpbmctb3BhY2l0eS03NSB0cmFuc2l0aW9uIGR1cmF0aW9uLTEwMCB0cmFuc2Zvcm0gZWFzZS1vdXRcIlxuICAgICAgICA+XG4gICAgICAgICAgQ29ubmVjdCBXYWxsZXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPFRyYW5zaXRpb24gYXBwZWFyIHNob3c9e2lzT3Blbn0gYXM9e0ZyYWdtZW50fT5cbiAgICAgICAgPERpYWxvZ1xuICAgICAgICAgIGFzPVwiZGl2XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotMTAgb3ZlcmZsb3cteS1hdXRvIFwiXG4gICAgICAgICAgb25DbG9zZT17Y2xvc2VNb2RhbH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHB4LTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXG4gICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cbiAgICAgICAgICAgICAgZW50ZXI9XCJlYXNlLW91dCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTBcIlxuICAgICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDBcIlxuICAgICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4gZHVyYXRpb24tMjAwXCJcbiAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxuICAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPERpYWxvZy5PdmVybGF5IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctYmxhY2sgb3BhY2l0eS00MFwiIC8+XG4gICAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XG5cbiAgICAgICAgICAgIHsvKiBUaGlzIGVsZW1lbnQgaXMgdG8gdHJpY2sgdGhlIGJyb3dzZXIgaW50byBjZW50ZXJpbmcgdGhlIG1vZGFsIGNvbnRlbnRzLiAqL31cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBoLXNjcmVlbiBhbGlnbi1taWRkbGVcIlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAmIzgyMDM7XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxuICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XG4gICAgICAgICAgICAgIGVudGVyPVwiZWFzZS1vdXQgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wIHNjYWxlLTk1XCJcbiAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXG4gICAgICAgICAgICAgIGxlYXZlPVwiZWFzZS1pbiBkdXJhdGlvbi0yMDBcIlxuICAgICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wIHNjYWxlLTk1XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy1mdWxsIG1heC13LW1kIHAtNiBteS04IG92ZXJmbG93LWhpZGRlbiB0ZXh0LWxlZnQgYWxpZ24tbWlkZGxlIHRyYW5zaXRpb24tYWxsIHRyYW5zZm9ybSBiZy13aGl0ZSBzaGFkb3cteGwgcm91bmRlZC0yeGxcIj5cbiAgICAgICAgICAgICAgICA8RGlhbG9nLlRpdGxlXG4gICAgICAgICAgICAgICAgICBhcz1cImgzXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS05MDAgZmxleCBqdXN0aWZ5LWJldHdlZW5cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkNvbm5lY3QgY3J5cHRvIHdhbGxldDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxYQ2lyY2xlSWNvbiBjbGFzc05hbWU9J2gtOCB0ZXh0LXJlZC01MDAgY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9Lz5cbiAgICAgICAgICAgICAgICA8L0RpYWxvZy5UaXRsZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzaGFkb3cteGwgYmctd2hpdGUgbXQtNSBwLTIgdHJhbnNmb3JtIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4gcm91bmRlZC14bFxuICAgICAgICAgICAgICAgICAgY3Vyc29yLXBvaW50ZXIgYWN0aXZlOnNjYWxlLTkwIGJvcmRlci0yIGhvdmVyOi10cmFuc2xhdGUteS0xIGhvdmVyOmJvcmRlci1hbWJlci01MDBcIiA+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC01IHJvdW5kZWQganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtjbG9zZSgpO2xvZ1VzZXJJbigpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezYwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bWV0YW1hc2tMb2dvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dvIG9mIE1ldGFtYXNrIHdhbGxldFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGdyaWQgZ3JpZC1jb2xzLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk1ldGFNYXNrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWJhc2UnPllvdSBtYXkgbmVlZCB0byBjbGljayB0aGUgZXh0ZW5zaW9uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHctZnVsbCByb3VuZGVkLXhsIGJnLXdoaXRlIG10LTUgcHktNiBweC0yIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOnNjYWxlLTEwNSBob3ZlcjpzaGFkb3cteGwgY3Vyc29yLXBvaW50ZXIgYWN0aXZlOnNjYWxlLTkwIFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTUgcm91bmRlZCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ1VzZXJJbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtYmx1ZS02MDAnPkZyZWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtYW1iZXItNTAwJz5Db2luPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWJsdWUtNjAwJz5GbG93PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPldhbGxldDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmFzZSBtbC0xMiB0ZXh0LXJlZC01MDBcIj5Db21pbmcgc29vbiAhPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG57LyogXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IGlubGluZS1mbGV4IGp1c3RpZnktY2VudGVyIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtYmx1ZS05MDAgYmctYmx1ZS0xMDAgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kXG4gICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy1ibHVlLTIwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLTIgZm9jdXMtdmlzaWJsZTpyaW5nLW9mZnNldC0yIGZvY3VzLXZpc2libGU6cmluZy1ibHVlLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZSBuZXcgd2FsbGV0XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0RpYWxvZz5cbiAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkRpYWxvZyIsIlRyYW5zaXRpb24iLCJGcmFnbWVudCIsInVzZVN0YXRlIiwiWENpcmNsZUljb24iLCJJbWFnZSIsIm1ldGFtYXNrTG9nbyIsIkNvbm5lY3RXYWxsZXQiLCJsb2dVc2VySW4iLCJjbG9zZU1vZGFsIiwic2V0SXNPcGVuIiwib3Blbk1vZGFsIiwiaXNPcGVuIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJhcHBlYXIiLCJzaG93IiwiYXMiLCJvbkNsb3NlIiwiQ2hpbGQiLCJlbnRlciIsImVudGVyRnJvbSIsImVudGVyVG8iLCJsZWF2ZSIsImxlYXZlRnJvbSIsImxlYXZlVG8iLCJPdmVybGF5Iiwic3BhbiIsImFyaWEtaGlkZGVuIiwiVGl0bGUiLCJjbG9zZSIsImhlaWdodCIsIndpZHRoIiwic3JjIiwib2JqZWN0Rml0IiwiYWx0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/utils/ConnectWallet.js\n");

/***/ })

});