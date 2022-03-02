import sellers from "../../../../database/global/seller"
import buyers from "../../../../database/global/buyer"

const findSeller = (spendCrypto,receiveCrypto) => {
    let result;
    console.log(spendCrypto,receiveCrypto,sellers)
    result = sellers.filter(seller => {
        let globalOffer = seller.globalSellOffer
        let finding = globalOffer.find(obj => (obj.spendCrypto === receiveCrypto && obj.receiveCrypto === spendCrypto));
        if(finding) return true;
        else return false;
    })
    console.log(" seller result : ",result)
    return result
}

const findBuyer = (spendCrypto,receiveCrypto) => {
    let result;
    result = buyers.filter(buyer => {
        let globalOffer = buyer.globalBuyOffer
        let finding = globalOffer?.find(obj => (obj.spendCrypto === receiveCrypto && obj.receiveCrypto === spendCrypto));
        if(finding) return true;
        else return false;
    })
    return result
}

const findCryptoCryptoInfoForSell = (userGlobalSellOffer,spendCrypto,receiveCrypto) => {
    let result = userGlobalSellOffer.find(obj => (obj.receiveCrypto === spendCrypto && obj.spendCrypto === receiveCrypto));
    return result;
} 
const findCryptoCryptoInfoForBuy = (userGlobalBuyOffer,spendCrypto,receiveCrypto) => {spendCrypto
    let result = userGlobalBuyOffer.find(obj => (obj.receiveCrypto === spendCrypto && obj.spendCrypto === receiveCrypto));
    return result;
} 

export {findSeller,findBuyer,findCryptoCryptoInfoForSell,findCryptoCryptoInfoForBuy}