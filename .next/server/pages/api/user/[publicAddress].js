"use strict";
(() => {
var exports = {};
exports.id = 490;
exports.ids = [490];
exports.modules = {

/***/ 2663:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 9970:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const mongoose = __webpack_require__(2663);
const networkSchema = new mongoose.Schema({
    chainId: Number,
    ensAddress: String,
    name: String
});
//P2P exchange edition
const UserSchema = new mongoose.Schema({
    username: String,
    publicAddress: String,
    promptpayID: String,
    image: String,
    description: String,
    bankName: String,
    bankAccount: String
});
let UserModel = mongoose.models && mongoose.models.User ? mongoose.models.User : mongoose.model('User', UserSchema);
module.exports = {
    UserModel
};


/***/ }),

/***/ 8927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _database_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7873);
/* harmony import */ var _database_dbConnect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_database_dbConnect__WEBPACK_IMPORTED_MODULE_0__);

const { UserModel  } = __webpack_require__(9970);
async function handler(req, res) {
    const { publicAddress  } = req.query;
    _database_dbConnect__WEBPACK_IMPORTED_MODULE_0___default()();
    const userData = await UserModel.findOne({
        publicAddress: publicAddress
    });
    console.log(req.method);
    if (req.method === "GET") {
        try {
            if (!userData) {
                console.log("Find Nothing !,Let's Create");
                await UserModel.create({
                    username: "unnamed",
                    publicAddress: publicAddress,
                    promptpayID: "",
                    image: "https://img.favpng.com/20/11/12/computer-icons-user-profile-png-favpng-0UAKKCpRRsMj5NaiELzw1pV7L.jpg",
                    description: "",
                    bankName: "",
                    bankAccount: ""
                }).then(async ()=>{
                    console.log("Created new user");
                    let newUserData = await UserModel.findOne({
                        publicAddress: publicAddress
                    });
                    res.status(201).json(newUserData);
                });
            }
            // return avaiable user in MongoDB
            res.status(200).json(userData);
        } catch (error) {
            console.log(error);
        }
    } else if (req.method === "POST") {
        const { usernameInput , descriptionInput , promptpayIDInput , bankNameInput , bankAccountInput  } = JSON.parse(req.body);
        // Update user data on MongoDB
        try {
            let data = await UserModel.findOneAndUpdate({
                publicAddress: publicAddress
            }, {
                username: usernameInput || userData.username,
                description: descriptionInput || userData.description,
                // image: image || userData.image,
                promptpayID: promptpayIDInput || userData.promptpayID,
                bankName: bankNameInput || userData.bankName,
                bankAccount: bankAccountInput || userData.bankAccount
            }, {
                new: true
            });
            res.status(201).json(data);
        } catch (error) {
            console.log(error);
        }
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [873], () => (__webpack_exec__(8927)));
module.exports = __webpack_exports__;

})();