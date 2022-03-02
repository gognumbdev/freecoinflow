import { useEffect, useState } from 'react'
import {findCryptoCryptoInfoForSell} from "../../utils/filter/global/cryptoCryptoFilter"

// spendCrypto is spend of customer but receive for seller
// receiveCrypto is receive of customer but spend for seller
const SellerOffer = ({sellerInfo,spendCrypto,receiveCrypto}) => {
    const [cryptoCryptoInfo, setCryptoCryptoInfo] = useState({})
    
    useEffect(() => {
        let offer = sellerInfo.globalSellOffer;
        let info =  findCryptoCryptoInfoForSell(offer,spendCrypto,receiveCrypto);
        setCryptoCryptoInfo(info);
      
    }, [sellerInfo,spendCrypto,receiveCrypto])
    console.log(cryptoCryptoInfo)
  return (
    <tr key={sellerInfo?.publicKey} className="hover:bg-slate-50">
        {/* Seller */}
        <td className="pl-4 pr-1 w-3/12 py-4 whitespace-nowrap">
            <div className="flex items-center justify-start">
                <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 rounded-full object-cover" src={sellerInfo?.image} alt={sellerInfo?.name} />
                </div>
                <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{sellerInfo?.name}</div>
                    <div className="text-sm text-gray-500">{sellerInfo?.transactionHistory?.complete + "% completion"}</div>
                </div>
                {/* <span className="justify-self-end px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                </span> */}
            </div>
        </td>
        
        {/* Price */}
        <td className="px-6 w-3/12 py-4 whitespace-nowrap flex space-x-2 items-center">
            <p className='font-medium text-gray-900'>
                {(1 > Number.parseFloat(cryptoCryptoInfo?.price) > 0) ? Number.parseFloat(cryptoCryptoInfo?.price).toFixed(6) : Number.parseFloat(cryptoCryptoInfo?.price).toFixed(2)}
            </p>
            <p className='text-gray-800'>{spendCrypto}</p>
        </td>
        
        {/* Limit/Available */}
        <td className=" py-4 whitespace-nowrap w-3/12">
            <p className=''>{cryptoCryptoInfo?.available} {receiveCrypto}</p>
        </td>
        
        {/* Payment */}
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 w-2/12 capitalize">
            
        </td>
        
        {/* Offer */}
        <td className="px-6 py-4 whitespace-nowrap text-right w-1/12">
            <button className='border-2 bg-green-500 text-white rounded font-old px-4 py-1'>
                Buy
            </button>
        </td>
    </tr>
  )
}

export default SellerOffer