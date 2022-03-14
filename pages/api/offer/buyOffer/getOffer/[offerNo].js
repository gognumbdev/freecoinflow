import dbConnect from "../../../../../database/dbConnect";
const {BuyOfferModel} = require("../../../../../database/dbModel/BuyOffer")

export default async function handler(req,res) {
    // Connect to MongoDB dattabase
    dbConnect();

    const {offerNo} = req.query
    if(req.method === "GET"){
        try {
            const offerData  = await BuyOfferModel.findOne({
                offerNo:offerNo
            });
        
            res.status(200).send(offerData);
        } catch (error) {
            console.log(error)
            res.status(400).send(`Sorry we don't found ${offerNo} offer.`)
        }
    }
}