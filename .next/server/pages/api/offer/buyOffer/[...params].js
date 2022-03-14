"use strict";
(() => {
var exports = {};
exports.id = 661;
exports.ids = [661];
exports.modules = {

/***/ 2663:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 658:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const mongoose = __webpack_require__(2663);
const FiatCurrency = new mongoose.Schema({
    name: String,
    code: String
});
const Cryptocurrency = new mongoose.Schema({
    name: String,
    code: String,
    blockchain: String
});
//P2P exchange edition
const BuyOfferSchema = new mongoose.Schema({
    offerNo: Number,
    username: String,
    publicAddress: String,
    profileImage: String,
    description: String,
    fiatCurrency: FiatCurrency,
    cryptocurrency: Cryptocurrency,
    payment: String,
    price: Number,
    amount: Number,
    minimum: Number,
    maximum: Number,
    termAndCondition: String
});
let BuyOfferModel = mongoose.models && mongoose.models.BuyOffer ? mongoose.models.BuyOffer : mongoose.model('BuyOffer', BuyOfferSchema);
module.exports = {
    BuyOfferModel
};


/***/ }),

/***/ 3386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7873);
/* harmony import */ var _database_dbConnect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database_dbConnect__WEBPACK_IMPORTED_MODULE_1__);


const { BuyOfferModel  } = __webpack_require__(658);
async function handler(req, res) {
    // Connect to MongoDB dattabase
    _database_dbConnect__WEBPACK_IMPORTED_MODULE_1___default()();
    const { params  } = req.query;
    let crypto = params[0];
    let currency = params[1];
    let payment = params[2];
    try {
        const offers = await BuyOfferModel.find({
            'cryptocurrency.code': crypto,
            'fiatCurrency.code': currency,
            payment: payment
        });
        res.status(200).send(offers);
    } catch (error) {
        console.log(error);
        res.status(400).send("Sorry it's fail");
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [873], () => (__webpack_exec__(3386)));
module.exports = __webpack_exports__;

})();