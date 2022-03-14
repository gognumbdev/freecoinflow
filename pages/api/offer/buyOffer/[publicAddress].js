import dbConnect from "../../../../database/dbConnect";
const {BuyOfferModel} = require("../../../../database/dbModel/BuyOffer.js")


export default async function handler(req,res) {
    dbConnect();
    //* Send back to client only the product data which match productId
    const {publicAddress} = req.query;
    if(req.method === "POST"){
        let {username,publicAddress,image,termAndCondition,amount,price,minimum,maximum,crypto,currency,payment} = JSON.parse(req.body)        
        let cryptocurrency = {
            name:crypto.name,
            code:crypto.code,
            blockchain:crypto.blockchain
        }
        let fiatCurrency = {
            name:currency.name,
            code:currency.code
        }
        let offerNo = Date.now()

        // Create new nft on MongoDB
        try {
            let data = await BuyOfferModel.create({
                offerNo:offerNo,
                username: username,
                publicAddress:publicAddress,
                profileImage: image,
                fiatCurrency:fiatCurrency,
                cryptocurrency:cryptocurrency,
                payment:payment,
                price:price,
                amount:amount,
                minimum:minimum,
                maximum:maximum,
                termAndCondition:termAndCondition,
            })
            res.status(201).json(data)
        } catch (error) {
            console.log(error);
        } 
    }
}

export const config = {
    api: {
      bodyParser: {
        sizeLimit: '4mb',
      },
    },
  }