"use strict";
(() => {
var exports = {};
exports.id = 554;
exports.ids = [554];
exports.modules = {

/***/ 7849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _order_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./public/icons/crypto/BTC.png
var BTC = __webpack_require__(4133);
// EXTERNAL MODULE: ./public/icons/crypto/ETH.png
var ETH = __webpack_require__(3994);
// EXTERNAL MODULE: ./public/icons/crypto/Matic.png
var Matic = __webpack_require__(1957);
// EXTERNAL MODULE: ./public/icons/crypto/USDC.png
var USDC = __webpack_require__(6514);
// EXTERNAL MODULE: ./public/icons/crypto/USDT.png
var USDT = __webpack_require__(6381);
// EXTERNAL MODULE: ./public/icons/crypto/DAI.png
var DAI = __webpack_require__(1755);
// EXTERNAL MODULE: ./public/icons/crypto/BNB.png
var BNB = __webpack_require__(2114);
// EXTERNAL MODULE: ./public/icons/crypto/BUSD.png
var BUSD = __webpack_require__(4158);
// EXTERNAL MODULE: ./public/icons/currency/THB.png
var THB = __webpack_require__(3770);
// EXTERNAL MODULE: ./public/icons/currency/USD.png
var USD = __webpack_require__(9535);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "@heroicons/react/solid"
var solid_ = __webpack_require__(1143);
;// CONCATENATED MODULE: ./components/p2pExchange/Order/Buyer.js














const config = __webpack_require__(5725);
const Buyer = ({ order , orderData , currency , crypto , offerData , pending , success , transferedNotify , qrCodeSVG , qrCodeSrc  })=>{
    const router = (0,router_.useRouter)();
    const goToFeedbackPage = ()=>{
        router.push(`${config.domainName}/feedback`);
    };
    const cancelOrder = async ()=>{
        let res = await fetch(`${config.domainName}/api/fiatCrypto/${order}`, {
            method: "DELETE"
        });
        console.log(res);
        router.push(`${config.domainName}/p2pexchange/`);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "grid grid-cols-1 ",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-1 place-items-start gap-y-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-xl font-bold",
                        children: [
                            "Order NO : ",
                            order
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-lg font-medium",
                        children: [
                            "Amount of ",
                            currency.name,
                            " ",
                            `(${currency.code})`,
                            " to pay : ",
                            orderData.amountToPay,
                            " ",
                            currency.code
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-lg font-medium",
                        children: [
                            "Amount of ",
                            crypto.name,
                            " ",
                            `(${crypto.code})`,
                            " to receive : ",
                            (orderData.amountToPay / offerData.price).toFixed(5),
                            " ",
                            crypto.code
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-3 gap-x-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: currencies[currency.code].image,
                                height: 60,
                                width: 60
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(solid_.SwitchHorizontalIcon, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: cryptos[crypto.code].image,
                                height: 60,
                                width: 60
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-1 mt-4 space-y-2 border-2 p-4 rounded-xl mb-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-gray-500 font-medium",
                                        children: "Offer No "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "font-bold",
                                        children: offerData.offerNo
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-gray-500 font-medium",
                                        children: "Seller"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "font-bold",
                                        children: offerData.username
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-gray-500 font-medium",
                                        children: "Price "
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "font-bold",
                                        children: [
                                            offerData.price,
                                            " ",
                                            currency.code,
                                            " for 1 ",
                                            crypto.code
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-gray-500 font-medium",
                                        children: "Payment"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "font-bold",
                                        children: offerData.payment
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-gray-500 font-medium",
                                        children: "Term and condition"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "font-bold",
                                        children: offerData.termAndCondition
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            offerData.fiatCurrency.code === "THB" && pending === false && success === false && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-1 place-items-center space-y-4 border-2 p-4 rounded-xl border-amber-500",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-1 place-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-xl font-bold mt-4",
                                children: "Promptpay Qr code"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "This is fake qr code to simulate real scenario for you to make payment."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: qrCodeSrc,
                                height: 150,
                                width: 150
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "my-4",
                        children: [
                            "If you transfer ",
                            orderData.amountToPay,
                            " ",
                            currency.code,
                            " to promptpay ID ",
                            offerData.promptpayID,
                            ", Please click transferd notify button"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-start space-x-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "p-4 border-2 rounded font-bold text-xl bg-blue-500 text-white",
                                onClick: transferedNotify,
                                children: "Transfered Notify"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "p-4 border-2 rounded transition transform duration-150 hover:bg-red-500 hover:text-white hover:font-bold font-medium text-gray-500",
                                onClick: cancelOrder,
                                children: "Canel Order"
                            })
                        ]
                    })
                ]
            }),
            offerData.fiatCurrency.code === "USD" && pending === false && success === false && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-1 place-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-4xl font-bold mt-4",
                                children: " Your Bank Transfer Payment with qr code"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "This is fake qr code to simulate real scenario for you to make payment."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: qrCodeSrc,
                                height: 150,
                                width: 150
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "my-4",
                        children: [
                            "If you transfer ",
                            orderData.amountToPay,
                            " ",
                            currency.code,
                            " to ",
                            offerData.username,
                            " bank account, Please click transferd notify button"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "p-4 border-2 rounded font-bold text-xl bg-blue-500 text-white",
                        onClick: transferedNotify,
                        children: "Transfered Notify"
                    })
                ]
            }),
            pending === true && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-1 place-items-start mt-10 space-y-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-4xl font-bold text-amber-500",
                        children: "Pending"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-2xl font-medium ",
                        children: "Please wait a minute for transaction proving and running smart contract ..."
                    })
                ]
            }),
            success === true && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-1 place-items-start mt-10 space-y-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-4xl font-bold text-green-500",
                        children: "Transaction complete !"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-2xl font-medium ",
                        children: "Please check your cryptocurrency on your crypto wallet."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "mt-10 text-2xl font-bold border-2 bg-amber-400 p-4 rounded place-self-center",
                        onClick: goToFeedbackPage,
                        children: "Give us your Feedback !"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Order_Buyer = (Buyer);
const cryptos = {
    "BTC": {
        code: "BTC",
        name: "Bitcoin",
        blockchain: "Bitcoin blockchain",
        image: BTC/* default */.Z
    },
    "ETH": {
        code: "ETH",
        name: "Ether",
        blockchain: "Ethereum blockchain",
        image: ETH/* default */.Z
    },
    "BNB": {
        code: "BNB",
        name: "Binance Coin",
        blockchain: "BNB chain",
        image: BNB/* default */.Z
    },
    "BUSD": {
        code: "BUSD",
        name: "Binance USD",
        blockchain: "BNB chain",
        image: BUSD/* default */.Z
    },
    "Matic": {
        code: "Matic",
        name: "Polygon Matic",
        blockchain: "Polygon blockchain",
        image: Matic/* default */.Z
    },
    "USDC": {
        code: "USDC",
        name: "USD Coin",
        blockchain: "Ethereum blockchain",
        image: USDC/* default */.Z
    },
    "USDT": {
        code: "USDT",
        name: "USD Tether",
        blockchain: "Ethereum blockchain",
        image: USDT/* default */.Z
    },
    "DAI": {
        code: "DAI",
        name: "DAI",
        blockchain: "Ethereum blockchain",
        image: DAI/* default */.Z
    }
};
const currencies = {
    "THB": {
        code: "THB",
        name: "Thai bath",
        image: THB/* default */.Z
    },
    "USD": {
        code: "USD",
        name: "US dollar",
        image: USD/* default */.Z
    }
};

;// CONCATENATED MODULE: ./components/p2pExchange/Order/Seller.js














const Seller_config = __webpack_require__(5725);
const Seller = ({ order , orderData , currency , crypto , offerData , pending , success , transferedNotify , qrCodeSVG  })=>{
    const router = (0,router_.useRouter)();
    const goToFeedbackPage = ()=>{
        router.push(`${Seller_config.domainName}/feedback`);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "grid grid-cols-1 ",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-1 place-items-start gap-y-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-xl font-bold",
                        children: [
                            "Order NO : ",
                            order
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-lg font-medium",
                        children: [
                            "Amount of ",
                            currency.name,
                            " ",
                            `(${currency.code})`,
                            " to receive : ",
                            orderData.amountToReceive,
                            " ",
                            currency.code
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-lg font-medium",
                        children: [
                            "Amount of ",
                            crypto.name,
                            " ",
                            `(${crypto.code})`,
                            " to sell : ",
                            orderData.amountToPay.toFixed(5),
                            " ",
                            crypto.code
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-3 gap-x-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: Seller_currencies[currency.code].image,
                                height: 60,
                                width: 60
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(solid_.SwitchHorizontalIcon, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: Seller_cryptos[crypto.code].image,
                                height: 60,
                                width: 60
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-1 mt-4 space-y-2 border-2 p-4 rounded-xl mb-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-gray-500 font-medium",
                                        children: "Offer No "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "font-bold",
                                        children: offerData.offerNo
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-gray-500 font-medium",
                                        children: "Buyer"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "font-bold",
                                        children: offerData.username
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-gray-500 font-medium",
                                        children: "Price "
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "font-bold",
                                        children: [
                                            offerData.price,
                                            " ",
                                            currency.code,
                                            " for 1 ",
                                            crypto.code
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-gray-500 font-medium",
                                        children: "Payment"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "font-bold",
                                        children: offerData.payment
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-gray-500 font-medium",
                                        children: "Term and condition"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "font-bold",
                                        children: offerData.termAndCondition
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            offerData?.fiatCurrency?.code === "THB" && pending === false && success === false && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-1 place-items-center border-2 p-4 gap-y-4 border-amber-500 rounded-xl",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-1 place-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-4xl font-bold mt-4",
                                children: "Checking your fund on your bank account"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-2xl font-bold mt-4",
                                children: [
                                    "Do you get the ",
                                    orderData.amountToPay,
                                    " ",
                                    currency.code,
                                    " ? from ",
                                    offerData.username
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-2xl font-bold mt-4",
                                children: "If you get, Please click complete transaction to notify our platform."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "font-bold mt-2 text-blue-500 text-lg",
                                children: "just click the below button for next mvp process. This is jus mvp,there aren't any fund transfer to your bank account."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "p-4 border-2 rounded font-bold text-xl bg-green-500 text-white",
                        onClick: transferedNotify,
                        children: "Complete Transaction"
                    })
                ]
            }),
            offerData.fiatCurrency.code === "USD" && pending === false && success === false && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-1 place-items-center border-2 p-4 gap-y-4 border-amber-500 rounded-xl",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-1 place-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-4xl font-bold mt-4",
                                children: "Checking your fund on your bank account"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-2xl font-bold mt-4",
                                children: [
                                    "Do you get the ",
                                    orderData.amountToPay,
                                    " ",
                                    currency.code,
                                    " ? from ",
                                    offerData.username
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-2xl font-bold mt-4",
                                children: "If you get, Please click complete transaction to notify our platform."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "font-bold mt-2 text-blue-500 text-lg",
                                children: "just click the below button for next mvp process. This is just mvp,there aren't any fund transfer to your bank account."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "p-4 border-2 rounded font-bold text-xl bg-green-500 text-white",
                        onClick: transferedNotify,
                        children: "Complete Transaction"
                    })
                ]
            }),
            pending === true && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-1 place-items-start mt-10 space-y-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-4xl font-bold text-amber-500",
                        children: "Pending"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-2xl font-medium ",
                        children: "Please wait a minute for transaction proving and running smart contract ..."
                    })
                ]
            }),
            success === true && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-1 place-items-start mt-10 space-y-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-4xl font-bold text-green-500",
                        children: "Transaction complete !"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-2xl font-medium ",
                        children: "Thank you for trust and sell crypto on our platform."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "mt-10 text-2xl font-bold border-2 bg-amber-400 p-4 rounded place-self-center",
                        onClick: goToFeedbackPage,
                        children: "Give us your Feedback !"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Order_Seller = (Seller);
const Seller_cryptos = {
    "BTC": {
        code: "BTC",
        name: "Bitcoin",
        blockchain: "Bitcoin blockchain",
        image: BTC/* default */.Z
    },
    "ETH": {
        code: "ETH",
        name: "Ether",
        blockchain: "Ethereum blockchain",
        image: ETH/* default */.Z
    },
    "BNB": {
        code: "BNB",
        name: "Binance Coin",
        blockchain: "BNB chain",
        image: BNB/* default */.Z
    },
    "BUSD": {
        code: "BUSD",
        name: "Binance USD",
        blockchain: "BNB chain",
        image: BUSD/* default */.Z
    },
    "Matic": {
        code: "Matic",
        name: "Polygon Matic",
        blockchain: "Polygon blockchain",
        image: Matic/* default */.Z
    },
    "USDC": {
        code: "USDC",
        name: "USD Coin",
        blockchain: "Ethereum blockchain",
        image: USDC/* default */.Z
    },
    "USDT": {
        code: "USDT",
        name: "USD Tether",
        blockchain: "Ethereum blockchain",
        image: USDT/* default */.Z
    },
    "DAI": {
        code: "DAI",
        name: "DAI",
        blockchain: "Ethereum blockchain",
        image: DAI/* default */.Z
    }
};
const Seller_currencies = {
    "THB": {
        code: "THB",
        name: "Thai bath",
        image: THB/* default */.Z
    },
    "USD": {
        code: "USD",
        name: "US dollar",
        image: USD/* default */.Z
    }
};

;// CONCATENATED MODULE: ./public/icons/crypto/qrCode/BTC.png
/* harmony default export */ const qrCode_BTC = ({"src":"/_next/static/media/BTC.81252a32.png","height":300,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAuElEQVR42hWOvQ6CMBhF+/JO6mB0Mjqp0UUGFTX9obSF8onSRCkRZId3MCZY1ntycw6ilHLOrbX3NL0BlGWJMWaMIbcGQQBJEiUg42S9XimlevCpa5NlSkPkexm/wCOrqirPc1QUlnDxlLiT859cmOA8GI6lEMg/nUaT6RtEFy2/bMa9DeXCgd5BCI4hrQ20tb1StttutdYoDEMp5fF4cGbzyr39PtbaRSJCiGPGGPdrmwYAhBBKqT8OBpHmk+F9XgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/icons/crypto/qrCode/BNB.png
/* harmony default export */ const qrCode_BNB = ({"src":"/_next/static/media/BNB.f3b763d9.png","height":300,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAv0lEQVR42hXOTYvCMBgE4Pz6hQWXXVgE7wr2Yg9aQZM0bfKm+VAblbSltQdv9icoiGC8zjMwgyilWZZVVbXf7aw1bdtijNM0RSFljBmjpTJCqtlsCgAfuPS9cyUUGnB8kFu7L7uu896juq4oy0+avprJ4/xXyu3X948QHK2TZPT73zh41uP7cZQlEWU8wGeDEFJo23s7XJsNTqNorpRCeZ4LIVarpZD6ePJxvCiUCidRqAdzzhGCh+FmjOGcA8AbKcGSLqzQLZsAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/icons/crypto/qrCode/ETH.png
/* harmony default export */ const qrCode_ETH = ({"src":"/_next/static/media/ETH.82241f58.png","height":300,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAqklEQVR42hWOuwqEMBRE8+12/oeFlY3IanwblWQFQaNsHhIsdhH8ih2byzDnwhlSFEVd19u2TdMkhFBKUUrLsiRoq6rinDPG2rYNggDhAcaYeZ67rgNblgVXay2lJPu+Zxm1Rtvjt8pDqY/nefgjSZL4vn+ezh7fVdq34HAAPA74+753zt33naavMAzHcSRN04DHcYwLWRRFwzBgJMnzHAwVwnVdkGMbY+wP3aaT/UDd4cgAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/icons/crypto/qrCode/BUSD.png
/* harmony default export */ const qrCode_BUSD = ({"src":"/_next/static/media/BUSD.60dfa149.png","height":300,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAtElEQVR42hWOywqDMBBF8/N2Uz9DqJu6EaH1EU3GxKg0KT7AR3eFxj8oFFo67oY5c+dckqZpnufDMLRtU9f1NE1xHGdZRnBLKVVKlaXgnHueBwA7WJZVaw2lFMC0vqmmnee573syjmOSJF3X/TbxedK7MY5zwCiJoujouvj6u1XvNWAFRSuC3YEJIavHumz2dbkmvn+SUpKiKJCHYcg5aGOC4CyExJIEz5GhHwdrLdZjjAHAH9Zgk+N4lvdqAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/icons/crypto/qrCode/DAI.png
/* harmony default export */ const qrCode_DAI = ({"src":"/_next/static/media/DAI.4b272881.png","height":300,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAu0lEQVR42hXOyw4BMRgF4L68hURigZUlCRIs3NNOO71M23/I1GVKZrCwwkMQOtvzneQcFEVRHMfe+912mwIURYExppSikDLGAGxiUqltv99TSlVwvd2cy5SGZD3OxAp2WVmWeZ6j89kTxk+W/o6db9bca1yrN6QUaLlYNJqtwiW/svvxbb4cRYwHqDYIIdqmd5++H5cNpsPhwBiDOA8u5/OZTKw75NPpRBsTTqJQD+acIwS/Xk8AEEIopf4yxZJNqDGU8gAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/icons/crypto/qrCode/USDC.png
/* harmony default export */ const qrCode_USDC = ({"src":"/_next/static/media/USDC.2f3bb6a8.png","height":300,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAvklEQVR42hXOwYrCMBgE4Lz9wi4su+hRvCjopUVpFUyapEnaP39rDWqrtFY8KOhrGK/zDcyQJEmklE3TlGWJWLRtSynlnBOfCiGsRbQ55NlkOjXGfKDvLzvnLGSLmFNhq6rsuq6ua9KcTlJwnVfj9WMY3oQufr6/lNIkjlf/f7+4PY5W90FwDZdUSu7hs8EYKxC27tz294RtZrM5AJA0TbXWURQBZMfDPghCgNyfJL7uzTlHGXs+X4iolDLGvAHGI5E6pLqJxwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/icons/crypto/qrCode/USDT.png
/* harmony default export */ const qrCode_USDT = ({"src":"/_next/static/media/USDT.cd18cc3f.png","height":300,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAtUlEQVR42hWOyQ6CMBiE++beXRKNJ69iwsEtComxC21paAtYolAjSLzyHP5kbvNNZgZRSjnn3vuiKKy1bdtijBljCNwkSYwFGZ3pYBcopUbQ972rnNXmfIvukrny0XVd0zTIv73kgigeOLLR8U3QxXQupURxHK+XK1WamdxP8Da8HCAHYNwghOQ2L57u8/syQsMw1FojIUSaptcoMpmuX/XxdAQXTiKIA6uqChMyDAM8hh6l1B9zHZBYruFdDwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/icons/crypto/qrCode/Matic.png
/* harmony default export */ const qrCode_Matic = ({"src":"/_next/static/media/Matic.ed72a9e3.png","height":300,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAuElEQVR42hWOuwqDMBiF8/J1qm/hIB1cRBCNxuRvgpeiorFVoTdKCaXQrZNQ+rsdzoXzEUopY0xrXZZVURTjOEZRlCQJQTdN0zzPpdpzzh3HAYA1mOe5rmsAkSbQdU1R5tM09X1PBj0wRoHVF728n8uhaixrI4QgQRDY9nbQp8/rd6y+3o6yjHIu1o84jpWS19v5cTdhGLquq5QiWZbh0Pd9bLVt43melBIhCdYxw38UxhjEQzYA+APanJP2eLvEXgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./pages/p2pexchange/fiatCrypto/[order].js
















const _order_config = __webpack_require__(5725);
const TransactionPage = ({ orderData , offerData , sellerData  })=>{
    const router = (0,router_.useRouter)();
    const { transaction , crypto , currency , payment  } = (0,external_react_redux_.useSelector)((state)=>state.trade
    );
    const { publicAddress  } = (0,external_react_redux_.useSelector)((state)=>state.user
    );
    const { fiatCurrency , cryptocurrency  } = offerData;
    const { order  } = router.query;
    const { 0: qrCodeSVG , 1: setQrCodeSVG  } = (0,external_react_.useState)(null);
    const { 0: pending , 1: setPending  } = (0,external_react_.useState)(false);
    const { 0: success , 1: setSuccess  } = (0,external_react_.useState)(false);
    // const [qrCodeSrc, setQrCodeSrc] = useState("")
    const transferedNotify = ()=>{
        setPending(true);
        setInterval(transactionComplete, 5000);
    };
    const transactionComplete = ()=>{
        setSuccess(true);
        setPending(false);
    };
    (0,external_react_.useEffect)(async ()=>{
        const promptpayQrCode = __webpack_require__(1121);
        const generatePayload = __webpack_require__(2068);
        const promptpayID = sellerData?.promptpayID;
        const amount = orderData.amountToPay;
        const payload = generatePayload(promptpayID, {
            amount
        });
        // setQrCode(payload);
        // Convert to SVG QR Code
        const options = {
            type: 'svg',
            color: {
                dark: '#003b6a',
                light: '#f7f8f7'
            }
        };
        let qrSVG = await new Promise((resolve, reject)=>{
            promptpayQrCode.toString(payload, options, (err, svg)=>{
                if (err) return reject(err);
                resolve(svg);
            });
        });
        setQrCodeSVG(qrSVG);
    // setQrCodeSrc(qrCodePng[offerData.cryptocurrency.code])
    }, [
        order
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "grid grid-cols-1 place-items-center py-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                    children: [
                        " ",
                        cryptocurrency.code,
                        " ",
                        fiatCurrency.code,
                        " Order ",
                        order
                    ]
                })
            }),
            publicAddress === orderData.buyerPublicAddress && /*#__PURE__*/ jsx_runtime_.jsx(Order_Buyer, {
                order: order,
                orderData: orderData,
                currency: fiatCurrency,
                crypto: cryptocurrency,
                offerData: offerData,
                pending: pending,
                success: success,
                transferedNotify: transferedNotify,
                qrCodeSVG: qrCodeSVG,
                qrCodeSrc: qrCodePng[offerData.cryptocurrency.code]
            }),
            publicAddress === orderData.sellerPublicAddress && /*#__PURE__*/ jsx_runtime_.jsx(Order_Seller, {
                order: order,
                orderData: orderData,
                currency: fiatCurrency,
                crypto: cryptocurrency,
                offerData: offerData,
                pending: pending,
                success: success,
                transferedNotify: transferedNotify,
                qrCodeSVG: qrCodeSVG,
                qrCodeSrc: qrCodePng[offerData.cryptocurrency.code]
            })
        ]
    }));
};
// This gets called on every request
async function getServerSideProps(context) {
    let order = context.params.order;
    // fetch order data
    const res = await fetch(`${_order_config.domainName}/api/fiatCrypto/${order}`);
    const orderData = await res.json();
    // fetch offerder data
    let offerData;
    if (orderData.offerType === "buy") {
        const offerRes = await fetch(`${_order_config.domainName}/api/offer/buyOffer/getOffer/${orderData.offerNo}`);
        offerData = await offerRes.json();
    } else if (orderData.offerType === "sell") {
        const offerRes = await fetch(`${_order_config.domainName}/api/offer/sellOffer/getOffer/${orderData.offerNo}`);
        offerData = await offerRes.json();
    }
    // fetch seller data
    const sellerRes = await fetch(`${_order_config.domainName}/api/user/${orderData.sellerPublicAddress}`);
    let sellerData = await sellerRes.json();
    return {
        props: {
            orderData,
            offerData,
            sellerData
        }
    };
}
/* harmony default export */ const _order_ = (TransactionPage);
let qrCodePng = {
    "BTC": qrCode_BTC,
    "ETH": qrCode_ETH,
    "BNB": qrCode_BNB,
    "BUSD": qrCode_BUSD,
    "Matic": qrCode_Matic,
    "DAI": qrCode_DAI,
    "USDC": qrCode_USDC,
    "USDT": qrCode_USDT
};


/***/ }),

/***/ 1143:
/***/ ((module) => {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 2068:
/***/ ((module) => {

module.exports = require("promptpay-qr");

/***/ }),

/***/ 1121:
/***/ ((module) => {

module.exports = require("qrcode");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,294,754], () => (__webpack_exec__(7849)));
module.exports = __webpack_exports__;

})();