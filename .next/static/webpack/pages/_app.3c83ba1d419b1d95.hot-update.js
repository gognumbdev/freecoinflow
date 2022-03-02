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

/***/ "./controllers/connectWallet.js":
/*!**************************************!*\
  !*** ./controllers/connectWallet.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectWallet\": function() { return /* binding */ connectWallet; },\n/* harmony export */   \"connectAndDispatch\": function() { return /* binding */ connectAndDispatch; },\n/* harmony export */   \"verifyMessage\": function() { return /* binding */ verifyMessage; }\n/* harmony export */ });\n/* harmony import */ var _home_khemmapich_Work_blockchain_freecoinflow_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_khemmapich_Work_blockchain_freecoinflow_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_khemmapich_Work_blockchain_freecoinflow_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _redux_actions_userAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/actions/userAction */ \"./redux/actions/userAction.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar connectWallet = function() {\n    var _ref = _asyncToGenerator(_home_khemmapich_Work_blockchain_freecoinflow_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var requestMessage, ethereum, provider, signer, signature, userNetwork, userAddress, userBalance, permission;\n        return _home_khemmapich_Work_blockchain_freecoinflow_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    requestMessage = \"Please sign to get sign in to our Decentralized P2P Exchange platform\";\n                    if (false) {}\n                    _ctx.prev = 2;\n                    ethereum = window.ethereum;\n                    _ctx.next = 6;\n                    return ethereum.enable();\n                case 6:\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(ethereum);\n                    signer = provider.getSigner();\n                    _ctx.next = 10;\n                    return signer.signMessage(requestMessage);\n                case 10:\n                    signature = _ctx.sent;\n                    _ctx.next = 13;\n                    return provider.getNetwork();\n                case 13:\n                    userNetwork = _ctx.sent;\n                    _ctx.next = 16;\n                    return signer.getAddress();\n                case 16:\n                    userAddress = _ctx.sent;\n                    _ctx.next = 19;\n                    return signer.getBalance();\n                case 19:\n                    userBalance = _ctx.sent;\n                    _ctx.next = 22;\n                    return verifyMessage({\n                        message: requestMessage,\n                        address: userAddress,\n                        signature: signature\n                    });\n                case 22:\n                    permission = _ctx.sent;\n                    console.log(permission);\n                    console.log(\"request result:\", userNetwork, userAddress, userBalance);\n                    return _ctx.abrupt(\"return\", {\n                        permission: permission,\n                        userAddress: userAddress,\n                        userNetwork: userNetwork,\n                        userBalance: userBalance\n                    });\n                case 28:\n                    _ctx.prev = 28;\n                    _ctx.t0 = _ctx[\"catch\"](2);\n                    return _ctx.abrupt(\"return\", {\n                        permission: false\n                    });\n                case 31:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                2,\n                28\n            ]\n        ]);\n    }));\n    return function connectWallet() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar connectAndDispatch = function(dispatch) {\n    connectWallet().then(function() {\n        var _ref = _asyncToGenerator(_home_khemmapich_Work_blockchain_freecoinflow_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var permission, userAddress, userBalance, userNetwork, res, userData;\n            return _home_khemmapich_Work_blockchain_freecoinflow_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        permission = param.permission, userAddress = param.userAddress, userBalance = param.userBalance, userNetwork = param.userNetwork;\n                        if (permission) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        console.log(\"You don't get permission\");\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        _ctx.next = 6;\n                        return fetch(\"http://localhost:3000/api/profile/\".concat(userAddress));\n                    case 6:\n                        res = _ctx.sent;\n                        _ctx.next = 9;\n                        return res.json();\n                    case 9:\n                        userData = _ctx.sent;\n                        dispatch((0,_redux_actions_userAction__WEBPACK_IMPORTED_MODULE_1__.logIn)({\n                            username: userData.username,\n                            publicAddress: userAddress,\n                            balance: userBalance,\n                            network: userNetwork,\n                            promptpayID: \"0956727039\",\n                            image: userData.image,\n                            description: userData.description\n                        }));\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function(_) {\n            return _ref.apply(this, arguments);\n        };\n    }());\n};\nvar verifyMessage = function() {\n    var _ref = _asyncToGenerator(_home_khemmapich_Work_blockchain_freecoinflow_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n        var message, address, signature, signerAddress;\n        return _home_khemmapich_Work_blockchain_freecoinflow_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    message = param.message, address = param.address, signature = param.signature;\n                    _ctx.prev = 1;\n                    _ctx.next = 4;\n                    return ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.verifyMessage(message, signature);\n                case 4:\n                    signerAddress = _ctx.sent;\n                    if (!(signerAddress !== address)) {\n                        _ctx.next = 7;\n                        break;\n                    }\n                    return _ctx.abrupt(\"return\", false);\n                case 7:\n                    return _ctx.abrupt(\"return\", true);\n                case 10:\n                    _ctx.prev = 10;\n                    _ctx.t0 = _ctx[\"catch\"](1);\n                    console.log(_ctx.t0);\n                    return _ctx.abrupt(\"return\", false);\n                case 14:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                1,\n                10\n            ]\n        ]);\n    }));\n    return function verifyMessage(_) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxFQUFFaEIsU0FBUyxFQUU5Q2lDLGFBQWE7Ozs7b0JBRk1sQixPQUFPLFNBQVBBLE9BQU8sRUFBRUMsT0FBTyxTQUFQQSxPQUFPLEVBQUVoQixTQUFTLFNBQVRBLFNBQVM7OzsyQkFFeEJQLDhEQUEwQixDQUFDc0IsT0FBTyxFQUFFZixTQUFTOztvQkFBbkVpQyxhQUFhOzBCQUNmQSxhQUFhLEtBQUtqQixPQUFPOzs7O2lEQUNwQixLQUFLOztpREFHUCxJQUFJOzs7O29CQUdUQyxPQUFPLENBQUNDLEdBQUc7aURBQ0osS0FBSzs7Ozs7Ozs7Ozs7SUFFcEIsQ0FBQztvQkFiS0osYUFBYTs7OztBQWVtQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250cm9sbGVycy9jb25uZWN0V2FsbGV0LmpzP2QxMmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgbG9nSW4gfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9uXCI7XG5cbmNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHJlcXVlc3RNZXNzYWdlID0gXCJQbGVhc2Ugc2lnbiB0byBnZXQgc2lnbiBpbiB0byBvdXIgRGVjZW50cmFsaXplZCBQMlAgRXhjaGFuZ2UgcGxhdGZvcm1cIlxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHtldGhlcmV1bX0gPXdpbmRvdztcbiAgICAgICAgXG4gICAgICAgICAgICBhd2FpdCBldGhlcmV1bS5lbmFibGUoKVxuXG4gICAgICAgICAgICAvLyogR2V0IHVzZXIgbG9nIGluIHdpdGggTWV0YW1hc2sgd2FsbGV0IFxuICAgICAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pXG4gICAgICAgICAgICBjb25zdCBzaWduZXIgPSAgcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgICAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBzaWduZXIuc2lnbk1lc3NhZ2UocmVxdWVzdE1lc3NhZ2UpO1xuICAgICAgICAgICAgY29uc3QgdXNlck5ldHdvcmsgPSBhd2FpdCBwcm92aWRlci5nZXROZXR3b3JrKCk7XG4gICAgICAgICAgICBjb25zdCB1c2VyQWRkcmVzcyA9IGF3YWl0IHNpZ25lci5nZXRBZGRyZXNzKCk7XG4gICAgICAgICAgICBjb25zdCB1c2VyQmFsYW5jZSA9IGF3YWl0IHNpZ25lci5nZXRCYWxhbmNlKClcblxuICAgICAgICAgICAgbGV0IHBlcm1pc3Npb24gPSBhd2FpdCB2ZXJpZnlNZXNzYWdlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTpyZXF1ZXN0TWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczp1c2VyQWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwZXJtaXNzaW9uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXF1ZXN0IHJlc3VsdDpcIix1c2VyTmV0d29yayx1c2VyQWRkcmVzcyx1c2VyQmFsYW5jZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiAoe3Blcm1pc3Npb24sdXNlckFkZHJlc3MsdXNlck5ldHdvcmssdXNlckJhbGFuY2V9KVxuICAgICAgICAgICAgXG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiAoe3Blcm1pc3Npb246ZmFsc2V9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBjb25uZWN0QW5kRGlzcGF0Y2ggPSAoZGlzcGF0Y2gpID0+IHtcbiAgICBcbiAgICBjb25uZWN0V2FsbGV0KCkudGhlbiggYXN5bmMgKHtwZXJtaXNzaW9uLHVzZXJBZGRyZXNzLHVzZXJCYWxhbmNlLHVzZXJOZXR3b3JrfSkgPT4ge1xuXG4gICAgICAgIC8vISBpZiAhcGVybWlzc2lvbiA9PT0gdHJ1ZSAtPiBZb3UgZG9uJ3QgZ2V0IHNpZ25hdHVyZSBwZXJtaXNzaW9uIGZyb20gdXNlciBmb3Igc2lnbiB0aGVtIGluIHlvdXIgd2ViIGFwcGxpY2F0aW9uLlxuICAgICAgICBpZiAoIXBlcm1pc3Npb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWW91IGRvbid0IGdldCBwZXJtaXNzaW9uXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vKiBpZiAhcGVybWlzc2lvbiA9PT0gZmFsc2UgLT4gWW91IGdldCBwZXJtaXNzaW9uIGZyb20gdXNlciB0byBzaWduIHRoZW0gaW4geW91ciB3ZWIgYXBwbGljYXRpb24gLCBsZXQncyBjb250aW51ZVxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wcm9maWxlLyR7dXNlckFkZHJlc3N9YClcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgIFxuICAgICAgICBkaXNwYXRjaChsb2dJbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlckRhdGEudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgcHVibGljQWRkcmVzczogdXNlckFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYmFsYW5jZTp1c2VyQmFsYW5jZSxcbiAgICAgICAgICAgICAgICBuZXR3b3JrOnVzZXJOZXR3b3JrLFxuICAgICAgICAgICAgICAgIHByb21wdHBheUlEOlwiMDk1NjcyNzAzOVwiLFxuICAgICAgICAgICAgICAgIGltYWdlOiB1c2VyRGF0YS5pbWFnZSAsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246dXNlckRhdGEuZGVzY3JpcHRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgKSlcblxuICAgIH0pXG59XG5cbmNvbnN0IHZlcmlmeU1lc3NhZ2UgPSBhc3luYyAoeyBtZXNzYWdlLCBhZGRyZXNzLCBzaWduYXR1cmUgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzaWduZXJBZGRyZXNzID0gYXdhaXQgZXRoZXJzLnV0aWxzLnZlcmlmeU1lc3NhZ2UobWVzc2FnZSwgc2lnbmF0dXJlKTtcbiAgICAgIGlmIChzaWduZXJBZGRyZXNzICE9PSBhZGRyZXNzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgXG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufTtcblxuZXhwb3J0IHtjb25uZWN0V2FsbGV0LGNvbm5lY3RBbmREaXNwYXRjaCx2ZXJpZnlNZXNzYWdlfSJdLCJuYW1lcyI6WyJldGhlcnMiLCJsb2dJbiIsImNvbm5lY3RXYWxsZXQiLCJyZXF1ZXN0TWVzc2FnZSIsImV0aGVyZXVtIiwicHJvdmlkZXIiLCJzaWduZXIiLCJzaWduYXR1cmUiLCJ1c2VyTmV0d29yayIsInVzZXJBZGRyZXNzIiwidXNlckJhbGFuY2UiLCJwZXJtaXNzaW9uIiwid2luZG93IiwiZW5hYmxlIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwic2lnbk1lc3NhZ2UiLCJnZXROZXR3b3JrIiwiZ2V0QWRkcmVzcyIsImdldEJhbGFuY2UiLCJ2ZXJpZnlNZXNzYWdlIiwibWVzc2FnZSIsImFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdEFuZERpc3BhdGNoIiwiZGlzcGF0Y2giLCJ0aGVuIiwicmVzIiwidXNlckRhdGEiLCJmZXRjaCIsImpzb24iLCJ1c2VybmFtZSIsInB1YmxpY0FkZHJlc3MiLCJiYWxhbmNlIiwibmV0d29yayIsInByb21wdHBheUlEIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsInNpZ25lckFkZHJlc3MiLCJ1dGlscyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./controllers/connectWallet.js\n");

/***/ })

});