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
const SellOfferSchema = new mongoose.Schema({
    offerNo:Number,
    username: String,
    publicAddress:String,
    profileImage: String,
    promptpayID:String,
    fiatCurrency:FiatCurrency,
    cryptocurrency:Cryptocurrency,
    payment:String,
    price:Number,
    available:Number,
    minimum:Number,
    maximum:Number,
    termAndCondition:String,
})

let SellOfferModel =  (mongoose.models && mongoose.models.SellOffer
    ? mongoose.models.SellOffer
    : mongoose.model('SellOffer', SellOfferSchema))

module.exports = {SellOfferModel}