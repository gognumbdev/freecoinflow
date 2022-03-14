import { useSelector } from "react-redux";
import dbConnect from "../../../../database/dbConnect";
const {BuyOfferModel} = require("../../../../database/dbModel/SellOffer")

export default async function handler(req,res) {
    // Connect to MongoDB dattabase
    dbConnect();
    // get all of the data bbject
    const user = useSelector(state => state.user)
    // const  offers  = await SellOfferModel.find({
    //     cryptocurrency:crypto,
    //     fiatCurrency:currency,
    //     payment:payment
    // });
    
    res.status(200).send(offers);
}