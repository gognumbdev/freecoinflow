"use strict";
exports.id = 867;
exports.ids = [867];
exports.modules = {

/***/ 3701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ym": () => (/* binding */ LOGIN),
/* harmony export */   "Nv": () => (/* binding */ LOGOUT),
/* harmony export */   "yN": () => (/* binding */ CRYPTO),
/* harmony export */   "wA": () => (/* binding */ CURRENCY),
/* harmony export */   "G_": () => (/* binding */ TRANSACTION),
/* harmony export */   "xc": () => (/* binding */ PAYMENT)
/* harmony export */ });
//* Redux action types
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const CRYPTO = "CRYPTO";
const CURRENCY = "CURRENCY";
const TRANSACTION = "TRANSACTION";
const PAYMENT = "PAYMENT";


/***/ }),

/***/ 7867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ logIn),
/* harmony export */   "n": () => (/* binding */ logOut)
/* harmony export */ });
/* harmony import */ var _actionTypes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3701);
/* harmony import */ var _reducers_userReducer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4884);


// LOGIN: Set User Data we get from wallets
const logIn = (userData)=>async (dispatch)=>{
        try {
            dispatch({
                type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_1__/* .LOGIN */ .ym,
                payload: {
                    username: userData.username,
                    publicAddress: userData.publicAddress,
                    balance: userData.balance,
                    network: userData.network,
                    promptpayID: userData.promptpayID || "",
                    image: userData.image,
                    description: userData.description,
                    bankName: userData.bankName,
                    bankAccount: userData.bankAccount
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
;
// LOGOUT: clear User Data we get from wallets
const logOut = ()=>(dispatch)=>dispatch({
            type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_1__/* .LOGOUT */ .Nv,
            payload: {
                ..._reducers_userReducer_js__WEBPACK_IMPORTED_MODULE_0__/* .InitailUserState */ .l
            }
        })
;


/***/ }),

/***/ 4884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ InitailUserState),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3701);

// Initial user state
const InitailUserState = {
    username: "",
    publicAddress: "",
    image: "",
    description: "",
    promptpayID: ""
};
const userReducer = (state = InitailUserState, { type , payload  })=>{
    switch(type){
        case _actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOGIN */ .ym:
            return {
                username: payload.username,
                publicAddress: payload.publicAddress,
                image: payload.profileImage,
                description: payload.description,
                promptpayID: payload.promptpayID,
                balance: payload.balance,
                network: payload.network,
                bankName: payload.bankName,
                bankAccount: payload.bankAccount
            };
        case _actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOGOUT */ .Nv:
            return {
                ...InitailUserState
            };
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userReducer); // {
 //     username: payload.username,
 //     walletAddress: payload.walletAddress,
 //     balance:payload.balance,
 //     network:payload.network,
 //     profileImage: payload.profileImage,
 //     description: payload.description,
 //     socialNetworks: payload.socialNetworks,
 // }


/***/ })

};
;