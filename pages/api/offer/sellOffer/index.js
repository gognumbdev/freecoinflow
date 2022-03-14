import { useSelector } from "react-redux";
import dbConnect from "../../../../database/dbConnect";
const {SellOfferModel} = require("../../../../database/dbModel/SellOffer")

export default async function handler(req,res) {
    // Connect to MongoDB dattabase
    dbConnect();
    
    // get all of the data bbject
    console.log("get into sell offer api")
    const  offers  = await SellOfferModel.find({
        cryptocurrency:{
            code:crypto
        },
        fiatCurrency:{
            code:currency
        },
        payment:payment
    });

    res.status(200).send(offers);
}