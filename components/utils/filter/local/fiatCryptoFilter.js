import sellers from "../../../../database/local/seller"
import buyers from "../../../../database/local/buyer"
import sellOffering from "../../../../database/local/sellOffering"
import buyOffering from "../../../../database/local/buyOffering"

const getOffers = (transaction,crypto,currency,payment) => {
    let result,offerList;
    if(transaction === "buy"){
        offerList = sellOffering[crypto][currency]
    }else if (transaction === "sell"){
        offerList = buyOffering[crypto][currency]
    }
    result = offerList.filter(offer => {
        if (payment === "All Payments") {
            return true
        }else{
            offer.payment === payment
        }
    })
    return result
}

// const getOffer = (transactionType,orderNO,crypto,currency) => {
//     let result;
//     if(transactionType === "sell"){
//         let offerList = sellOffering[crypto][currency]
//         result = offerList.find(offer => offer.sellOfferNo === orderNO)
//     }else if (transactionType === "buy"){

//     }
// }

const findSellersById = (offers) => {
    let result;
    let sellersUid = offers.map(offer => offer.uid)
    result = sellers.map(seller => {
        if(sellersUid.includes(seller.uid)){
            seller.offerInfo = offers.find(offer => offer.uid === seller.uid)
            return seller
        }else{
            return undefined
        }
    })
    return result;
}

const findBuyersById = (offers) => {
    let result;
    let buyersUid = offers.map(offer => offer.uid)
    result = buyers.map(buyer => {
        if(buyersUid.includes(buyer.uid)){
            buyer.offerInfo = offers.find(offer => offer.uid === buyer.uid)
            return buyer
        }else{
            return undefined
        }
    })
    return result;
}

const findSellerById = (uid) => {
    let result;
    result = sellers.filter(seller => seller.uid === uid)
    if(result) return result;
    else return {};
}

const findBuyerById = (uid) => {
    let result;
    result = buyers.filter(seller => seller.uid === uid)
    if(result) return result;
    else return {};
}

const findFiatCryptoInfoForSell = (userLocalSellOffer,currency,crypto) => {
    let result = userLocalSellOffer.find(obj => (obj.crypto === crypto && obj.currency === currency));
    return result;
} 
const findFiatCryptoInfoForBuy = (userLocalBuyOffer,currency,crypto) => {
    let result = userLocalBuyOffer.find(obj => (obj.crypto === crypto && obj.currency === currency));
    return result;
}

export {getOffers,findSellersById,findBuyersById,findSellerById,findBuyerById,findFiatCryptoInfoForSell,findFiatCryptoInfoForBuy}