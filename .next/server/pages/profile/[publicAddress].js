"use strict";
(() => {
var exports = {};
exports.id = 126;
exports.ids = [126];
exports.modules = {

/***/ 5725:
/***/ ((module) => {


module.exports = {
    reactStrictMode: true,
    env: {
        mongoDB_uri: "mongodb+srv://P2PExchangeAdmin:chGE0zr86MvYagdv@cryptoexchange.wcws5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        marketplacePrivateKey: "01290c7d6abff326948e1514d5a20eeede5b433d36d176e66b2a8d852d83a9cb",
        marketplaceWalletAddress: "0x518707e145604eA17eA6fd319Fa65DCD2E96Eb34",
        // This is hardhat localhost network
        nftMarketAddress: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
        nftAddress: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"
    },
    image: {
        domains: [
            '/public/image'
        ]
    },
    domainName: "http://localhost:3000",
    api: {
        bodyParser: {
            sizeLimit: '4mb'
        }
    }
};


/***/ }),

/***/ 2093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions_userAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7867);







const config = __webpack_require__(5725);
const Profile = ({ userData  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { publicAddress  } = router.query;
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const { username , image , promptpayID , description , bankAccount , bankName  } = userData;
    const { 0: edit , 1: setEdit  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: usernameInput , 1: setUsernameInput  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(username);
    const { 0: promptpayIDInput , 1: setPromptpayIDInput  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(promptpayID);
    const { 0: descriptionInput , 1: setDescriptionInput  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(description);
    const { 0: bankAccountInput , 1: setBankAccountInput  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: bankNameInput , 1: setBankNameInput  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const handleSubmitEditProfile = async ()=>{
        let editData = {
            usernameInput,
            promptpayIDInput,
            descriptionInput,
            bankAccountInput,
            bankNameInput
        };
        let res = await fetch(`${config.domainName}/api/user/${publicAddress}`, {
            method: "POST",
            body: JSON.stringify(editData)
        });
        let data = await res.json();
        dispatch((0,_redux_actions_userAction__WEBPACK_IMPORTED_MODULE_6__/* .logIn */ .I)({
            username: data.username,
            publicAddress: data.publicAddress,
            promptpayID: data.promptpayID || "",
            description: data.description,
            bankName: data.bankName,
            bankAccount: data.bankAccount
        }));
        console.log(data);
        router.push(`${config.domainName}/profile/${publicAddress}`);
        setEdit(!edit);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid grid-cols-1 place-items-start px-40 py-10 gap-y-4 font-bold w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        username,
                        " profile"
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-3xl font-bold",
                children: "Profile"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.UserCircleIcon, {
                className: "w-40 h-40 text-blue-500 ml-10"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "border-2 flex space-x-4 rounded px-4 py-1 items-center border-amber-500 cursor-pointer ml-10",
                onClick: ()=>setEdit(!edit)
                ,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.PencilAltIcon, {
                        className: "w-10 h-10 text-amber-500"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Edit your profile"
                    })
                ]
            }),
            edit ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-1 place-items-start px-10 py-10 gap-y-4 font-bold w-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-2xl",
                        children: "Edit"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-6 place-items-start text-xl gap-x-20",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-500 font-bold",
                                children: "username"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                value: usernameInput,
                                placeholder: usernameInput,
                                className: "border-2 rounded py-1 px-2 outlined-none font-medium",
                                onChange: (e)=>setUsernameInput(e.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-6 place-items-start text-xl gap-x-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-500 font-bold",
                                children: "Blockchain Address"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "col-span-4",
                                children: publicAddress
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-cols-1 place-items-start text-xl gap-x-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid grid-cols-6 gap-x-12",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-gray-500 font-bold",
                                    children: "PromptpayID"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    value: promptpayIDInput,
                                    placeholder: promptpayIDInput,
                                    className: "border-2 rounded py-1 px-2 outlined-none font-medium",
                                    onChange: (e)=>setPromptpayIDInput(e.target.value)
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-6 place-items-start text-xl gap-x-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-500 font-bold",
                                children: "Bank Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                value: bankNameInput,
                                placeholder: bankNameInput,
                                className: "border-2 rounded py-1 px-2 outlined-none font-medium",
                                onChange: (e)=>setBankNameInput(e.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-6 place-items-start text-xl gap-x-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-500 font-bold",
                                children: "Bank Account"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                value: bankAccountInput,
                                placeholder: bankAccountInput,
                                className: "border-2 rounded py-1 px-2 outlined-none font-medium",
                                onChange: (e)=>setBankAccountInput(e.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-6 place-items-start text-xl w-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-500 font-bold",
                                children: "Description"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                type: "text",
                                value: descriptionInput,
                                placeholder: descriptionInput,
                                className: "border-2 rounded py-1 px-2 outlined-none font-medium w-full col-span-4 h-fit",
                                onChange: (e)=>setDescriptionInput(e.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "border-2 p-4 text-xl font-bold bg-green-500 text-white rounded place-self-center",
                        onClick: handleSubmitEditProfile,
                        children: "Submit Edit"
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-1 place-items-start px-10 py-10 gap-y-4 font-bold",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-6 place-items-start text-xl gap-x-20",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-500 font-bold",
                                children: "username"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "col-span-4",
                                children: username
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-6 place-items-start text-xl",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-500 font-bold",
                                children: "Blockchain Address"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "col-span-4",
                                children: publicAddress
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-cols-1 place-items-start text-xl gap-x-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid grid-cols-6 gap-x-12",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-gray-500 font-bold",
                                    children: "PromptpayID"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "col-span-4",
                                    children: promptpayID
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-6 place-items-start text-xl gap-x-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-500 font-bold",
                                children: "Bank Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: bankName
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-6 place-items-start text-xl gap-x-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-500 font-bold",
                                children: "Bank Account"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: bankAccount
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-6 place-items-start text-xl",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-500 font-bold",
                                children: "Description"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "col-span-4",
                                children: description
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);
// This gets called on every request
async function getServerSideProps(context) {
    let publicAddress = context.params.publicAddress;
    // fetch order data
    const res = await fetch(`${config.domainName}/api/user/${publicAddress}`);
    const userData = await res.json();
    return {
        props: {
            userData
        }
    };
}


/***/ }),

/***/ 1143:
/***/ ((module) => {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [867], () => (__webpack_exec__(2093)));
module.exports = __webpack_exports__;

})();