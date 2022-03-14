const mongoose = require("mongoose")

const networkSchema = new mongoose.Schema({
    chainId:Number,
    ensAddress:String,
    name:String
})

//P2P exchange edition
const UserSchema = new mongoose.Schema({
    username: String,
    publicAddress:String,
    promptpayID:String,
    image:String,
    description: String,
    bankName:String,
    bankAccount:String
})

let UserModel =  (mongoose.models && mongoose.models.User
    ? mongoose.models.User
    : mongoose.model('User', UserSchema))

module.exports = {UserModel}