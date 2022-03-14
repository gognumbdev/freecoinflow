"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 2663:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6158:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const mongoose = __webpack_require__(2663);
const TransactionInfo = new mongoose.Schema({
    name: String,
    code: String,
    amount: Number
});
const TransactionDetail = new mongoose.Schema({
    order: Number,
    offerNo: Number,
    blockchain: String,
    fromAddress: String,
    toAddress: String,
    payment: String,
    fiatCurrecy: TransactionInfo,
    cryptocurrency: TransactionInfo,
    date: String,
    transactionState: String,
    description: String
});
const UserTransactionsInfo = new mongoose.Schema({
    number: Number,
    success: Number,
    fail: Number,
    transactionDetails: [
        {
            offerNo: Number,
            order: Number,
            transactioState: String
        }
    ]
});
const FiatCryptoTransactionSchema = new mongoose.Schema({
    publicAddress: String,
    transactionsList: [
        TransactionDetail
    ],
    complete: Number,
    sellInfo: [
        UserTransactionsInfo
    ],
    buyInfo: [
        UserTransactionsInfo
    ]
});
let FiatCryptoTransactionModel = mongoose.models && mongoose.models.FiatCryptoTransaction ? mongoose.models.FiatCryptoTransaction : mongoose.model('FiatCryptoTransaction', FiatCryptoTransactionSchema);
module.exports = {
    FiatCryptoTransactionModel
};


/***/ }),

/***/ 8171:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const mongoose = __webpack_require__(2663);
const OrderSchema = new mongoose.Schema({
    order: Number,
    offerNo: Number,
    offerType: String,
    sellerPublicAddress: String,
    buyerPublicAddress: String,
    amountToPay: Number,
    amountToReceive: Number,
    description: String,
    transactionState: [
        String
    ],
    date: String
});
let OrderModel = mongoose.models && mongoose.models.Order ? mongoose.models.Order : mongoose.model('Order', OrderSchema);
module.exports = {
    OrderModel
};


/***/ }),

/***/ 3613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _database_dbModel_Order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8171);
/* harmony import */ var _database_dbModel_Order__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_database_dbModel_Order__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_dbModel_FiatCryptoTransaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6158);
/* harmony import */ var _database_dbModel_FiatCryptoTransaction__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database_dbModel_FiatCryptoTransaction__WEBPACK_IMPORTED_MODULE_1__);


const dbConnect = __webpack_require__(7873);
async function handler(req, res) {
    dbConnect();
    //* Send back to client only the product data which match productId
    const { order  } = req.query;
    console.log(order);
    if (req.method === "GET") {
        try {
            let orderData = await _database_dbModel_Order__WEBPACK_IMPORTED_MODULE_0__.OrderModel.findOne({
                order: order
            });
            res.status(200).json(orderData);
        } catch (error) {
            console.log(error);
            res.status(400).json("Sorry, we can't found it.");
        }
    } else if (req.method === "POST") {
        let { order , offerNo , offerType , sellerPublicAddress , buyerPublicAddress , amountToPay , amountToReceive , description , transactionState , date , cryptoCode , currencyCode  } = JSON.parse(req.body);
        try {
            let data = await _database_dbModel_Order__WEBPACK_IMPORTED_MODULE_0__.OrderModel.create({
                order,
                offerNo,
                offerType,
                sellerPublicAddress,
                buyerPublicAddress,
                amountToPay,
                amountToReceive,
                description,
                transactionState,
                date
            });
            console.log("Success , we post this order");
            // Create Transaction for seller and buyer 
            // create transaction info for seller
            // await FiatCryptoTransactionModel.create({
            //     publicAddress:sellerPublicAddress,
            //     transactionsList:[{
            //         order,
            //         offerNo,
            //         blockchain:blockchainFilter[cryptoCode],
            //         fromAddress:sellerPublicAddress,
            //         toAddress:buyerPublicAddress,
            //         payment:"Mobile Banking (Promptpay)",
            //         fiatCurrecy:{
            //             name:cryptoName[cryptoCode],
            //             code:cryptoCode,
            //             amount:amountToPay
            //         },
            //         cryptocurrency:{
            //             name:currencyName[currencyCode],
            //             code:currencyCode,
            //             amount:amountToReceive
            //         },
            //         date,
            //         transactionState:"order",
            //         description:"",
            //     }],
            //     complete:0,
            //     sellInfo:[{
            //         number:1,
            //         success:0,
            //         fail:0,
            //         transactionDetails:[{
            //             offerNo,
            //             order,
            //             transactioState:"order"
            //         }]
            //     }],
            //     buyInfo:[],
            // });
            // create transaction info for buyer
            // await FiatCryptoTransactionModel.create({
            //     publicAddress:buyerPublicAddress,
            //     transactionsList:[{
            //         order,
            //         offerNo,
            //         blockchain:blockchainFilter[cryptoCode],
            //         fromAddress:sellerPublicAddress,
            //         toAddress:buyerPublicAddress,
            //         payment:"Mobile Banking (Promptpay)",
            //         fiatCurrecy:{
            //             name:cryptoName[cryptoCode],
            //             code:cryptoCode,
            //             amount:amountToPay
            //         },
            //         cryptocurrency:{
            //             name:currencyName[currencyCode],
            //             code:currencyCode,
            //             amount:amountToReceive
            //         },
            //         date,
            //         transactionState:"order",
            //         description:"",
            //     }],
            //     complete:0,
            //     sellInfo:[],
            //     buyInfo:[{
            //         number:1,
            //         success:0,
            //         fail:0,
            //         transactionDetails:[{
            //             offerNo,
            //             order,
            //             transactioState:"order"
            //         }]
            //     }],
            // });
            res.status(201).send(data);
        } catch (error) {
            console.log(error);
            res.status(400).json("Sorry, we can't found it.");
        }
    } else if (req.method === "DELETE") {
        try {
            await _database_dbModel_Order__WEBPACK_IMPORTED_MODULE_0__.OrderModel.findOneAndDelete({
                order: order
            });
            res.status(200).send(`Delete order:${order} success.`);
        } catch (error) {
            console.log(error);
            res.status(500).json("The server has encountered a situation it does not know how to handle.");
        }
    }
};
let blockchainFilter = {
    "BTC": "Bitcoin Blockchain",
    "ETH": "Ethereum Blockchain",
    "BNB": "BNB Chain",
    "BUSD": "BNB Chain",
    "Matic": "Polygon Blockchain",
    "USDC": "Ethereum Blockchain",
    "USDT": "Ethereum Blockchain"
};
let cryptoName = {
    "BTC": "Bitcoin",
    "ETH": "Ether",
    "BNB": "Binance Coin",
    "BUSD": "Binance USD",
    "Matic": "Polygon Matic"
};
let currencyName = {
    "THB": "Thai Baht",
    "USD": "US Dollar"
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [873], () => (__webpack_exec__(3613)));
module.exports = __webpack_exports__;

})();