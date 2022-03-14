"use strict";
exports.id = 873;
exports.ids = [873];
exports.modules = {

/***/ 7873:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const mongoose = __webpack_require__(2663);
const config = __webpack_require__(1602);
const dbConnect = async ()=>{
    let connection = mongoose.connection.readyState;
    if (connection === 0) {
        await mongoose.connect(config.env.mongoDB_uri).then(()=>console.log('MongoDB Connected Successfully')
        ).catch((err)=>console.error('Not Connected')
        );
    } else if (connection === 1) {
        console.log("MongoDB already connected");
    }
};
module.exports = dbConnect;


/***/ }),

/***/ 1602:
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


/***/ })

};
;