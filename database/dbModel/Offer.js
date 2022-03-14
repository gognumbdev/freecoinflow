const mongoose = require("mongoose")

//P2P exchange edition
const OfferSchema = new mongoose.Schema({
    username: String,
    publicAddress:String,
    profileImage: String,
    promptpayID:String,
    description: String,
    transactionType:String,
    fiatCurrency:String,
    cryptocurrency:String,
    payment:String,
    price:Number,
    amount:Number,
    minimum:Number,
    maximum:Number,
    termAndCondition:String
})

let OfferModel =  (mongoose.models && mongoose.models.Offer
    ? mongoose.models.Offer
    : mongoose.model('Offer', OfferSchema))

module.exports = {OfferModel}