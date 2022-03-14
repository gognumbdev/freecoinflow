"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/feedback";
exports.ids = ["pages/feedback"];
exports.modules = {

/***/ "./pages/feedback.js":
/*!***************************!*\
  !*** ./pages/feedback.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst feedback = ()=>{\n    const { 0: feedbackForm , 1: setFeedbackForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const goToGoogleForm = ()=>{\n        router.push(\"https://docs.google.com/forms/d/e/1FAIpQLSfwolAaPkgpsAyeI8AOPK2-8fndpzEqw5JoD2S28PihkM2zCQ/viewform?usp=sf_link\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-1 place-items-center py-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Feedback\"\n                }, void 0, false, {\n                    fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/pages/feedback.js\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/pages/feedback.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-4xl font-bold\",\n                children: \"Give us Feedback !\"\n            }, void 0, false, {\n                fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/pages/feedback.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-xl\",\n                children: \"Do yo like to answer on\"\n            }, void 0, false, {\n                fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/pages/feedback.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"p-4 border-2 rounded bg-violet-500 text-white font-bold text-xl my-2\",\n                onClick: goToGoogleForm,\n                children: \"Google Form website\"\n            }, void 0, false, {\n                fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/pages/feedback.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"\",\n                children: \"Or\"\n            }, void 0, false, {\n                fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/pages/feedback.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"p-4 border-2 rounded bg-amber-400 border-amber-400 font-bold text-xl my-2 \",\n                onClick: ()=>setFeedbackForm(!feedbackForm)\n                ,\n                children: \"Neoflow website\"\n            }, void 0, false, {\n                fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/pages/feedback.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, undefined),\n            feedbackForm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                className: \"w-full\",\n                src: \"https://docs.google.com/forms/d/e/1FAIpQLSfwolAaPkgpsAyeI8AOPK2-8fndpzEqw5JoD2S28PihkM2zCQ/viewform?embedded=true\",\n                width: \"640\",\n                height: \"1083\",\n                frameborder: \"0\",\n                marginheight: \"0\",\n                marginwidth: \"0\",\n                children: \"Loading…\"\n            }, void 0, false, {\n                fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/pages/feedback.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/khemmapich/Work/blockchain/freecoinflow/pages/feedback.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (feedback);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mZWVkYmFjay5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1g7QUFDUztBQUVyQyxLQUFLLENBQUNJLFFBQVEsT0FBUyxDQUFDO0lBQ3BCLEtBQUssTUFBRUMsWUFBWSxNQUFFQyxlQUFlLE1BQUlMLCtDQUFRLENBQUMsS0FBSztJQUN0RCxLQUFLLENBQUNNLE1BQU0sR0FBR0osc0RBQVM7SUFDeEIsS0FBSyxDQUFDSyxjQUFjLE9BQVMsQ0FBQztRQUMxQkQsTUFBTSxDQUFDRSxJQUFJLENBQUMsQ0FBaUg7SUFDakksQ0FBQztJQUVELE1BQU0sNkVBQ0xDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQTBDOzt3RkFDcERULGtEQUFJO3NHQUNBVSxDQUFLOzhCQUFDLENBQVE7Ozs7Ozs7Ozs7O3dGQUVsQkMsQ0FBQztnQkFBQ0YsU0FBUyxFQUFDLENBQW9COzBCQUFDLENBQWtCOzs7Ozs7d0ZBQ25ERSxDQUFDO2dCQUFDRixTQUFTLEVBQUMsQ0FBUzswQkFBQyxDQUF1Qjs7Ozs7O3dGQUM3Q0csQ0FBTTtnQkFDSEgsU0FBUyxFQUFDLENBQXNFO2dCQUNoRkksT0FBTyxFQUFFUCxjQUFjOzBCQUMxQixDQUVEOzs7Ozs7d0ZBQ0NLLENBQUM7Z0JBQUNGLFNBQVMsRUFBQyxDQUFFOzBCQUFDLENBQUU7Ozs7Ozt3RkFDakJHLENBQU07Z0JBQ0hILFNBQVMsRUFBQyxDQUE2RTtnQkFDdkZJLE9BQU8sTUFBUVQsZUFBZSxFQUFFRCxZQUFZOzswQkFDM0MsQ0FFTDs7Ozs7O1lBQ0NBLFlBQVksZ0ZBQ1JXLENBQU07Z0JBQUNMLFNBQVMsRUFBQyxDQUFRO2dCQUMxQk0sR0FBRyxFQUFDLENBQW1IO2dCQUFDQyxLQUFLLEVBQUMsQ0FBSztnQkFBQ0MsTUFBTSxFQUFDLENBQU07Z0JBQUNDLFdBQVcsRUFBQyxDQUFHO2dCQUFDQyxZQUFZLEVBQUMsQ0FBRztnQkFBQ0MsV0FBVyxFQUFDLENBQUc7MEJBQUMsQ0FBUTs7Ozs7Ozs7Ozs7O0FBS3ZOLENBQUM7QUFFRCxpRUFBZWxCLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQtbWFya2V0cGxhY2UtbXZwLy4vcGFnZXMvZmVlZGJhY2suanM/NTczMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5cbmNvbnN0IGZlZWRiYWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IFtmZWVkYmFja0Zvcm0sIHNldEZlZWRiYWNrRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBnb1RvR29vZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kL2UvMUZBSXBRTFNmd29sQWFQa2dwc0F5ZUk4QU9QSzItOGZuZHB6RXF3NUpvRDJTMjhQaWhrTTJ6Q1Evdmlld2Zvcm0/dXNwPXNmX2xpbmtcIilcbiAgICB9ICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMSBwbGFjZS1pdGVtcy1jZW50ZXIgcHktNCc+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPkZlZWRiYWNrPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtYm9sZCc+R2l2ZSB1cyBGZWVkYmFjayAhPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteGwnPkRvIHlvIGxpa2UgdG8gYW5zd2VyIG9uPC9wPlxuICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgY2xhc3NOYW1lPSdwLTQgYm9yZGVyLTIgcm91bmRlZCBiZy12aW9sZXQtNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQteGwgbXktMidcbiAgICAgICAgICAgIG9uQ2xpY2s9e2dvVG9Hb29nbGVGb3JtfVxuICAgICAgICA+XG4gICAgICAgICAgICBHb29nbGUgRm9ybSB3ZWJzaXRlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8cCBjbGFzc05hbWU9Jyc+T3I8L3A+XG4gICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBjbGFzc05hbWU9J3AtNCBib3JkZXItMiByb3VuZGVkIGJnLWFtYmVyLTQwMCBib3JkZXItYW1iZXItNDAwICBmb250LWJvbGQgdGV4dC14bCBteS0yICdcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZlZWRiYWNrRm9ybSghZmVlZGJhY2tGb3JtKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIE5lb2Zsb3cgd2Vic2l0ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAge2ZlZWRiYWNrRm9ybSAmJiBcbiAgICAgICAgICAgIDxpZnJhbWUgY2xhc3NOYW1lPSd3LWZ1bGwnXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kL2UvMUZBSXBRTFNmd29sQWFQa2dwc0F5ZUk4QU9QSzItOGZuZHB6RXF3NUpvRDJTMjhQaWhrTTJ6Q1Evdmlld2Zvcm0/ZW1iZWRkZWQ9dHJ1ZVwiIHdpZHRoPVwiNjQwXCIgaGVpZ2h0PVwiMTA4M1wiIGZyYW1lYm9yZGVyPVwiMFwiIG1hcmdpbmhlaWdodD1cIjBcIiBtYXJnaW53aWR0aD1cIjBcIj5Mb2FkaW5n4oCmPC9pZnJhbWU+XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmVlZGJhY2siXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJ1c2VSb3V0ZXIiLCJmZWVkYmFjayIsImZlZWRiYWNrRm9ybSIsInNldEZlZWRiYWNrRm9ybSIsInJvdXRlciIsImdvVG9Hb29nbGVGb3JtIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZnJhbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImZyYW1lYm9yZGVyIiwibWFyZ2luaGVpZ2h0IiwibWFyZ2lud2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/feedback.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/feedback.js"));
module.exports = __webpack_exports__;

})();