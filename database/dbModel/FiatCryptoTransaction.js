const mongoose = require("mongoose")

const TransactionInfo = new mongoose.Schema({
    name:String,
    code:String,
    amount:Number
})

const TransactionDetail = new mongoose.Schema({
    order:Number,
    offerNo:Number,
    blockchain:String,
    fromAddress:String,
    toAddress:String,
    payment:String,
    fiatCurrecy:TransactionInfo,
    cryptocurrency:TransactionInfo,
    date:String,
    transactionState:String,
    description:String,
})

const UserTransactionsInfo = new mongoose.Schema({
    number:Number,
    success:Number,
    fail:Number,
    transactionDetails:[{
        offerNo:Number,
        order:Number,
        transactioState:String
    }]
})

const FiatCryptoTransactionSchema = new mongoose.Schema({
    publicAddress:String,
    transactionsList:[TransactionDetail],
    complete:Number,
    sellInfo:[UserTransactionsInfo],
    buyInfo:[UserTransactionsInfo],
})

let FiatCryptoTransactionModel =  (mongoose.models && mongoose.models.FiatCryptoTransaction
    ? mongoose.models.FiatCryptoTransaction
    : mongoose.model('FiatCryptoTransaction', FiatCryptoTransactionSchema))

module.exports = {FiatCryptoTransactionModel}