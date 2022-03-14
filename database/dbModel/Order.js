const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    order:Number,
    offerNo:Number,
    offerType:String,
    sellerPublicAddress:String,
    buyerPublicAddress:String,
    amountToPay:Number,
    amountToReceive:Number,
    description:String,
    transactionState:[String],
    date:String
})

let OrderModel =  (mongoose.models && mongoose.models.Order
    ? mongoose.models.Order
    : mongoose.model('Order', OrderSchema))

module.exports = {OrderModel}
