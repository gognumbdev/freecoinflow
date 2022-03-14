const mongoose = require("mongoose")

const FiatCurrency = new mongoose.Schema({
    name:String,
    code:String
}) 

const Cryptocurrency = new mongoose.Schema({
    name:String,
    code:String,
    blockchain:String
}) 

//P2P exchange edition
const BuyOfferSchema = new mongoose.Schema({
    offerNo:Number,
    username: String,
    publicAddress:String,
    profileImage: String,
    description: String,
    fiatCurrency:FiatCurrency,
    cryptocurrency:Cryptocurrency,
    payment:String,
    price:Number,
    amount:Number,
    minimum:Number,
    maximum:Number,
    termAndCondition:String,
})

let BuyOfferModel =  (mongoose.models && mongoose.models.BuyOffer
    ? mongoose.models.BuyOffer
    : mongoose.model('BuyOffer', BuyOfferSchema))

module.exports = {BuyOfferModel}