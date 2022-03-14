"use strict";
(() => {
var exports = {};
exports.id = 895;
exports.ids = [895];
exports.modules = {

/***/ 2663:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5178:
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
const SellOfferSchema = new mongoose.Schema({
    offerNo: Number,
    username: String,
    publicAddress: String,
    profileImage: String,
    promptpayID: String,
    fiatCurrency: FiatCurrency,
    cryptocurrency: Cryptocurrency,
    payment: String,
    price: Number,
    available: Number,
    minimum: Number,
    maximum: Number,
    termAndCondition: String
});
let SellOfferModel = mongoose.models && mongoose.models.SellOffer ? mongoose.models.SellOffer : mongoose.model('SellOffer', SellOfferSchema);
module.exports = {
    SellOfferModel
};


/***/ }),

/***/ 6568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _database_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7873);
/* harmony import */ var _database_dbConnect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_database_dbConnect__WEBPACK_IMPORTED_MODULE_0__);

const { SellOfferModel  } = __webpack_require__(5178);
async function handler(req, res) {
    // Connect to MongoDB dattabase
    _database_dbConnect__WEBPACK_IMPORTED_MODULE_0___default()();
    const { offerNo  } = req.query;
    if (req.method === "GET") {
        try {
            const offerData = await SellOfferModel.findOne({
                offerNo: offerNo
            });
            res.status(200).send(offerData);
        } catch (error) {
            console.log(error);
            res.status(400).send(`Sorry we don't found ${offerNo} offer.`);
        }
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [873], () => (__webpack_exec__(6568)));
module.exports = __webpack_exports__;

})();