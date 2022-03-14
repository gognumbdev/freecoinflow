import { useSelector } from "react-redux";
import dbConnect from "../../../../database/dbConnect";
const {SellOfferModel} = require("../../../../database/dbModel/SellOffer")

export default async function handler(req,res) {
    // Connect to MongoDB dattabase
    dbConnect();
    
    const {params} = req.query 
    let crypto = params[0]
    let currency = params[1]
    let payment = params[2]
    
    try {
        const offers  = await SellOfferModel.find({
            'cryptocurrency.code':crypto,
            'fiatCurrency.code':currency,
            payment:payment
        });
        res.status(200).send(offers);        
    } catch (error) {
        console.log(error)
        res.status(400).send("Sorry, it's fail.")
    }

}