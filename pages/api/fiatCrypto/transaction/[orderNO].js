import {findSellerById,findBuyerById} from "../../../../components/utils/filter/local/fiatCryptoFilter"

export default async function handler(req,res) {
    dbConnect();
    //* Send back to client only the product data which match productId
    const {orderNO} = req.query;
    
    res.status(200).json()
}