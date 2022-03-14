import { OrderModel } from "../../../database/dbModel/Order";
import { FiatCryptoTransactionModel } from "../../../database/dbModel/FiatCryptoTransaction";
const dbConnect = require("../../../database/dbConnect")

export default async function handler(req,res) {
    dbConnect();
    //* Send back to client only the product data which match productId
    const {order} = req.query;
    console.log(order)

    if(req.method === "GET"){
        try {
            let orderData = await OrderModel.findOne({order:order});
            res.status(200).json(orderData);

        } catch (error) {
            console.log(error)
            res.status(400).json("Sorry, we can't found it.");
        }
        
        
    }else if (req.method === "POST"){
        let {order,offerNo,offerType,sellerPublicAddress,buyerPublicAddress,amountToPay,amountToReceive,description,transactionState,date,cryptoCode,currencyCode} = JSON.parse(req.body)
        try {
            let data = await OrderModel.create({
                order,
                offerNo,
                offerType,
                sellerPublicAddress,
                buyerPublicAddress,
                amountToPay,
                amountToReceive,
                description,
                transactionState,
                date
            });

            console.log("Success , we post this order")

            // Create Transaction for seller and buyer 
            // create transaction info for seller
            // await FiatCryptoTransactionModel.create({
            //     publicAddress:sellerPublicAddress,
            //     transactionsList:[{
            //         order,
            //         offerNo,
            //         blockchain:blockchainFilter[cryptoCode],
            //         fromAddress:sellerPublicAddress,
            //         toAddress:buyerPublicAddress,
            //         payment:"Mobile Banking (Promptpay)",
            //         fiatCurrecy:{
            //             name:cryptoName[cryptoCode],
            //             code:cryptoCode,
            //             amount:amountToPay
            //         },
            //         cryptocurrency:{
            //             name:currencyName[currencyCode],
            //             code:currencyCode,
            //             amount:amountToReceive
            //         },
            //         date,
            //         transactionState:"order",
            //         description:"",
            //     }],
            //     complete:0,
            //     sellInfo:[{
            //         number:1,
            //         success:0,
            //         fail:0,
            //         transactionDetails:[{
            //             offerNo,
            //             order,
            //             transactioState:"order"
            //         }]
            //     }],
            //     buyInfo:[],
            // });

            // create transaction info for buyer
            // await FiatCryptoTransactionModel.create({
            //     publicAddress:buyerPublicAddress,
            //     transactionsList:[{
            //         order,
            //         offerNo,
            //         blockchain:blockchainFilter[cryptoCode],
            //         fromAddress:sellerPublicAddress,
            //         toAddress:buyerPublicAddress,
            //         payment:"Mobile Banking (Promptpay)",
            //         fiatCurrecy:{
            //             name:cryptoName[cryptoCode],
            //             code:cryptoCode,
            //             amount:amountToPay
            //         },
            //         cryptocurrency:{
            //             name:currencyName[currencyCode],
            //             code:currencyCode,
            //             amount:amountToReceive
            //         },
            //         date,
            //         transactionState:"order",
            //         description:"",
            //     }],
            //     complete:0,
            //     sellInfo:[],
            //     buyInfo:[{
            //         number:1,
            //         success:0,
            //         fail:0,
            //         transactionDetails:[{
            //             offerNo,
            //             order,
            //             transactioState:"order"
            //         }]
            //     }],
            // });
        
            res.status(201).send(data);
        } catch (error) {
            console.log(error)
            res.status(400).json("Sorry, we can't found it.");
        }
    }else if (req.method === "DELETE"){
        try {
            await OrderModel.findOneAndDelete({order:order});
            res.status(200).send(`Delete order:${order} success.`)
        } catch (error) {
            console.log(error)
            res.status(500).json("The server has encountered a situation it does not know how to handle.");
        }
    }
    
}

let blockchainFilter = {
    "BTC":"Bitcoin Blockchain",
    "ETH":"Ethereum Blockchain",
    "BNB":"BNB Chain",
    "BUSD":"BNB Chain",
    "Matic":"Polygon Blockchain",
    "USDC":"Ethereum Blockchain",
    "USDT":"Ethereum Blockchain"
}

let cryptoName = {
    "BTC":"Bitcoin",
    "ETH":"Ether",
    "BNB":"Binance Coin",
    "BUSD":"Binance USD",
    "Matic":"Polygon Matic"
}

let currencyName = {
    "THB":"Thai Baht",
    "USD":"US Dollar"
}