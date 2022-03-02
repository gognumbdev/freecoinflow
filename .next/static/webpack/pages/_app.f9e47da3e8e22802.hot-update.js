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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectWallet\": function() { return /* binding */ connectWallet; },\n/* harmony export */   \"connectAndDispatch\": function() { return /* binding */ connectAndDispatch; },\n/* harmony export */   \"verifyMessage\": function() { return /* binding */ verifyMessage; }\n/* harmony export */ });\n/* harmony import */ var _home_khemmapich_Work_blockchain_freecoinflow_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_khemmapich_Work_blockchain_freecoinflow_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_khemmapich_Work_blockchain_freecoinflow_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _redux_actions_userAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/actions/userAction */ \"./redux/actions/userAction.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar connectWallet = function() {\n    var _ref = _asyncToGenerator(_home_khemmapich_Work_blockchain_freecoinflow_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var requestMessage, ethereum, provider, signer, signature, userAddress, permission;\n        return _home_khemmapich_Work_blockchain_freecoinflow_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    requestMessage = \"Please sign to get sign in to our Decentralized P2P Exchange platform\";\n                    if (false) {}\n                    _ctx.prev = 2;\n                    ethereum = window.ethereum;\n                    _ctx.next = 6;\n                    return ethereum.enable();\n                case 6:\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(ethereum);\n                    signer = provider.getSigner();\n                    _ctx.next = 10;\n                    return signer.signMessage(requestMessage);\n                case 10:\n                    signature = _ctx.sent;\n                    _ctx.next = 13;\n                    return signer.getAddress();\n                case 13:\n                    userAddress = _ctx.sent;\n                    _ctx.next = 16;\n                    return verifyMessage({\n                        message: requestMessage,\n                        address: userAddress,\n                        signature: signature\n                    });\n                case 16:\n                    permission = _ctx.sent;\n                    console.log(permission);\n                    console.log(\"request result:\", userNetwork, userAddress, userBalance);\n                    return _ctx.abrupt(\"return\", {\n                        permission: permission,\n                        userAddress: userAddress,\n                        userNetwork: userNetwork,\n                        userBalance: userBalance\n                    });\n                case 22:\n                    _ctx.prev = 22;\n                    _ctx.t0 = _ctx[\"catch\"](2);\n                    return _ctx.abrupt(\"return\", {\n                        permission: false\n                    });\n                case 25:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                2,\n                22\n            ]\n        ]);\n    }));\n    return function connectWallet() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar connectAndDispatch = function(dispatch) {\n    connectWallet().then(function() {\n        var _ref = _asyncToGenerator(_home_khemmapich_Work_blockchain_freecoinflow_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var permission, userAddress, userBalance, userNetwork;\n            return _home_khemmapich_Work_blockchain_freecoinflow_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        permission = param.permission, userAddress = param.userAddress, userBalance = param.userBalance, userNetwork = param.userNetwork;\n                        if (permission) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        console.log(\"You don't get permission\");\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        dispatch((0,_redux_actions_userAction__WEBPACK_IMPORTED_MODULE_1__.logIn)({\n                            walletAddress: userAddress,\n                            balance: userBalance,\n                            network: userNetwork\n                        }));\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function(_) {\n            return _ref.apply(this, arguments);\n        };\n    }());\n};\nvar verifyMessage = function() {\n    var _ref = _asyncToGenerator(_home_khemmapich_Work_blockchain_freecoinflow_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n        var message, address, signature, signerAddress;\n        return _home_khemmapich_Work_blockchain_freecoinflow_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    message = param.message, address = param.address, signature = param.signature;\n                    _ctx.prev = 1;\n                    _ctx.next = 4;\n                    return ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.verifyMessage(message, signature);\n                case 4:\n                    signerAddress = _ctx.sent;\n                    if (!(signerAddress !== address)) {\n                        _ctx.next = 7;\n                        break;\n                    }\n                    return _ctx.abrupt(\"return\", false);\n                case 7:\n                    return _ctx.abrupt(\"return\", true);\n                case 10:\n                    _ctx.prev = 10;\n                    _ctx.t0 = _ctx[\"catch\"](1);\n                    console.log(_ctx.t0);\n                    return _ctx.abrupt(\"return\", false);\n                case 14:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                1,\n                10\n            ]\n        ]);\n    }));\n    return function verifyMessage(_) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250cm9sbGVycy9jb25uZWN0V2FsbGV0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUNvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5ELEdBQUssQ0FBQ0UsYUFBYTswTEFBRyxRQUFRLFdBQUksQ0FBQztZQUMzQkMsY0FBYyxFQUlIQyxRQUFRLEVBS1RDLFFBQVEsRUFDUkMsTUFBTSxFQUNOQyxTQUFTLEVBRVRDLFdBQVcsRUFHYkMsVUFBVTs7OztvQkFoQmxCTixjQUFjLEdBQUcsQ0FBdUU7NkJBRTNELEVBQUU7O29CQUVwQkMsUUFBUSxHQUFHTSxNQUFNLENBQWpCTixRQUFROzsyQkFFVEEsUUFBUSxDQUFDTyxNQUFNOztvQkFHZk4sUUFBUSxHQUFHLEdBQUcsQ0FBQ0wsaUVBQTZCLENBQUNJLFFBQVE7b0JBQ3JERSxNQUFNLEdBQUlELFFBQVEsQ0FBQ1MsU0FBUzs7MkJBQ1ZSLE1BQU0sQ0FBQ1MsV0FBVyxDQUFDWixjQUFjOztvQkFBbkRJLFNBQVM7OzJCQUVXRCxNQUFNLENBQUNVLFVBQVU7O29CQUFyQ1IsV0FBVzs7MkJBR01TLGFBQWEsQ0FDaEMsQ0FBQzt3QkFDR0MsT0FBTyxFQUFDZixjQUFjO3dCQUN0QmdCLE9BQU8sRUFBQ1gsV0FBVzt3QkFDbkJELFNBQVMsRUFBVEEsU0FBUztvQkFDYixDQUFDOztvQkFMREUsVUFBVTtvQkFRZFcsT0FBTyxDQUFDQyxHQUFHLENBQUNaLFVBQVU7b0JBRXRCVyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFpQixrQkFBQ0MsV0FBVyxFQUFDZCxXQUFXLEVBQUNlLFdBQVc7aURBRXpELENBQUNkO3dCQUFBQSxVQUFVLEVBQVZBLFVBQVU7d0JBQUNELFdBQVcsRUFBWEEsV0FBVzt3QkFBQ2MsV0FBVyxFQUFYQSxXQUFXO3dCQUFDQyxXQUFXLEVBQVhBLFdBQVc7b0JBQUEsQ0FBQzs7OztpREFJaEQsQ0FBQ2Q7d0JBQUFBLFVBQVUsRUFBQyxLQUFLO29CQUFBLENBQUM7Ozs7Ozs7Ozs7O0lBR3RDLENBQUM7b0JBcENLUCxhQUFhOzs7O0FBc0NuQixHQUFLLENBQUNzQixrQkFBa0IsR0FBRyxRQUFRLENBQVBDLFFBQVEsRUFBSyxDQUFDO0lBRXRDdkIsYUFBYSxHQUFHd0IsSUFBSTs4TEFBRSxRQUFRakIsZ0JBQW9ELENBQUM7Z0JBQXJEQSxVQUFVLEVBQUNELFdBQVcsRUFBQ2UsV0FBVyxFQUFDRCxXQUFXOzs7O3dCQUE5Q2IsVUFBVSxTQUFWQSxVQUFVLEVBQUNELFdBQVcsU0FBWEEsV0FBVyxFQUFDZSxXQUFXLFNBQVhBLFdBQVcsRUFBQ0QsV0FBVyxTQUFYQSxXQUFXOzRCQUduRWIsVUFBVTs7Ozt3QkFDWFcsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBMEI7Ozt3QkFJMUNJLFFBQVEsQ0FBQ3hCLGdFQUFLLENBQ1YsQ0FBQzs0QkFDRzBCLGFBQWEsRUFBRW5CLFdBQVc7NEJBQzFCb0IsT0FBTyxFQUFDTCxXQUFXOzRCQUNuQk0sT0FBTyxFQUFDUCxXQUFXO3dCQUN2QixDQUFDOzs7Ozs7UUFFVCxDQUFDOzs7OztBQUNMLENBQUM7QUFFRCxHQUFLLENBQUNMLGFBQWE7MExBQUcsUUFBUSxnQkFBbUMsQ0FBQztZQUFuQ0MsT0FBTyxFQUFFQyxPQUFPLEVBQUVaLFNBQVMsRUFFOUN1QixhQUFhOzs7O29CQUZNWixPQUFPLFNBQVBBLE9BQU8sRUFBRUMsT0FBTyxTQUFQQSxPQUFPLEVBQUVaLFNBQVMsU0FBVEEsU0FBUzs7OzJCQUV4QlAsOERBQTBCLENBQUNrQixPQUFPLEVBQUVYLFNBQVM7O29CQUFuRXVCLGFBQWE7MEJBQ2ZBLGFBQWEsS0FBS1gsT0FBTzs7OztpREFDcEIsS0FBSzs7aURBR1AsSUFBSTs7OztvQkFHVEMsT0FBTyxDQUFDQyxHQUFHO2lEQUNKLEtBQUs7Ozs7Ozs7Ozs7O0lBRXBCLENBQUM7b0JBYktKLGFBQWE7Ozs7QUFlbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udHJvbGxlcnMvY29ubmVjdFdhbGxldC5qcz9kMTJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IGxvZ0luIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvblwiO1xuXG5jb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCByZXF1ZXN0TWVzc2FnZSA9IFwiUGxlYXNlIHNpZ24gdG8gZ2V0IHNpZ24gaW4gdG8gb3VyIERlY2VudHJhbGl6ZWQgUDJQIEV4Y2hhbmdlIHBsYXRmb3JtXCJcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7ZXRoZXJldW19ID13aW5kb3c7XG4gICAgICAgIFxuICAgICAgICAgICAgYXdhaXQgZXRoZXJldW0uZW5hYmxlKClcblxuICAgICAgICAgICAgLy8qIEdldCB1c2VyIGxvZyBpbiB3aXRoIE1ldGFtYXNrIHdhbGxldCBcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtKVxuICAgICAgICAgICAgY29uc3Qgc2lnbmVyID0gIHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgc2lnbmVyLnNpZ25NZXNzYWdlKHJlcXVlc3RNZXNzYWdlKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IHVzZXJOZXR3b3JrID0gYXdhaXQgcHJvdmlkZXIuZ2V0TmV0d29yaygpO1xuICAgICAgICAgICAgY29uc3QgdXNlckFkZHJlc3MgPSBhd2FpdCBzaWduZXIuZ2V0QWRkcmVzcygpO1xuICAgICAgICAgICAgLy8gY29uc3QgdXNlckJhbGFuY2UgPSBhd2FpdCBzaWduZXIuZ2V0QmFsYW5jZSgpXG5cbiAgICAgICAgICAgIGxldCBwZXJtaXNzaW9uID0gYXdhaXQgdmVyaWZ5TWVzc2FnZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6cmVxdWVzdE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6dXNlckFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgY29uc29sZS5sb2cocGVybWlzc2lvbik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVxdWVzdCByZXN1bHQ6XCIsdXNlck5ldHdvcmssdXNlckFkZHJlc3MsdXNlckJhbGFuY2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gKHtwZXJtaXNzaW9uLHVzZXJBZGRyZXNzLHVzZXJOZXR3b3JrLHVzZXJCYWxhbmNlfSlcbiAgICAgICAgICAgIFxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gKHtwZXJtaXNzaW9uOmZhbHNlfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgY29ubmVjdEFuZERpc3BhdGNoID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgXG4gICAgY29ubmVjdFdhbGxldCgpLnRoZW4oIGFzeW5jICh7cGVybWlzc2lvbix1c2VyQWRkcmVzcyx1c2VyQmFsYW5jZSx1c2VyTmV0d29ya30pID0+IHtcblxuICAgICAgICAvLyEgaWYgIXBlcm1pc3Npb24gPT09IHRydWUgLT4gWW91IGRvbid0IGdldCBzaWduYXR1cmUgcGVybWlzc2lvbiBmcm9tIHVzZXIgZm9yIHNpZ24gdGhlbSBpbiB5b3VyIHdlYiBhcHBsaWNhdGlvbi5cbiAgICAgICAgaWYgKCFwZXJtaXNzaW9uKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIllvdSBkb24ndCBnZXQgcGVybWlzc2lvblwiKTtcbiAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH1cblxuICAgICAgICBkaXNwYXRjaChsb2dJbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3YWxsZXRBZGRyZXNzOiB1c2VyQWRkcmVzcyxcbiAgICAgICAgICAgICAgICBiYWxhbmNlOnVzZXJCYWxhbmNlLFxuICAgICAgICAgICAgICAgIG5ldHdvcms6dXNlck5ldHdvcmssXG4gICAgICAgICAgICB9XG4gICAgICAgICkpXG4gICAgfSlcbn1cblxuY29uc3QgdmVyaWZ5TWVzc2FnZSA9IGFzeW5jICh7IG1lc3NhZ2UsIGFkZHJlc3MsIHNpZ25hdHVyZSB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNpZ25lckFkZHJlc3MgPSBhd2FpdCBldGhlcnMudXRpbHMudmVyaWZ5TWVzc2FnZShtZXNzYWdlLCBzaWduYXR1cmUpO1xuICAgICAgaWYgKHNpZ25lckFkZHJlc3MgIT09IGFkZHJlc3MpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICBcbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuXG5leHBvcnQge2Nvbm5lY3RXYWxsZXQsY29ubmVjdEFuZERpc3BhdGNoLHZlcmlmeU1lc3NhZ2V9Il0sIm5hbWVzIjpbImV0aGVycyIsImxvZ0luIiwiY29ubmVjdFdhbGxldCIsInJlcXVlc3RNZXNzYWdlIiwiZXRoZXJldW0iLCJwcm92aWRlciIsInNpZ25lciIsInNpZ25hdHVyZSIsInVzZXJBZGRyZXNzIiwicGVybWlzc2lvbiIsIndpbmRvdyIsImVuYWJsZSIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImdldFNpZ25lciIsInNpZ25NZXNzYWdlIiwiZ2V0QWRkcmVzcyIsInZlcmlmeU1lc3NhZ2UiLCJtZXNzYWdlIiwiYWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyTmV0d29yayIsInVzZXJCYWxhbmNlIiwiY29ubmVjdEFuZERpc3BhdGNoIiwiZGlzcGF0Y2giLCJ0aGVuIiwid2FsbGV0QWRkcmVzcyIsImJhbGFuY2UiLCJuZXR3b3JrIiwic2lnbmVyQWRkcmVzcyIsInV0aWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./controllers/connectWallet.js\n");

/***/ })

});