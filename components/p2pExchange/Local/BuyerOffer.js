import { UserCircleIcon } from "@heroicons/react/outline"
import { useSelector } from "react-redux"
import OfferToSell from "./OfferToSell"
import TraderInfo from './TraderInfo'
const BuyerOffer = ({buyerInfo}) => {
  const {transaction,crypto,currency,payment} = useSelector(state => state.trade)
    
  return (
    <tr key={buyerInfo?.publicAddress} className="hover:bg-slate-50">
        {/* Seller */}
        <td className="pl-4 pr-1 w-3/12 py-4 whitespace-nowrap">
            <div className="flex items-center justify-start">
                <div className="flex-shrink-0 h-10 w-10 grid grid-cols-1 place-items-center">
                    {buyerInfo?.profileImage ? (
                        <img className="h-10 w-10 rounded-full object-cover" src={sellerInfo?.profileImage} alt={sellerInfo?.username} />
                    ) : (
                        <UserCircleIcon className="h-8" />
                    )}
                    
                </div>
                <div className="ml-4 flex space-x-2 items-center">
                    <div className="text-sm font-medium text-gray-900">{buyerInfo?.username}</div>
                    <TraderInfo traderInfo={buyerInfo}  />
                    {/* <div className="text-sm text-gray-500">{buyerInfo?.transactionHistory?.complete + "% completion"}</div> */}
                </div>
                {/* <span className="justify-self-end px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                </span> */}
            </div>
        </td>
        
        {/* Price */}
        <td className="px-6 w-2/12 py-4 whitespace-nowrap">
            <p className='font-medium text-gray-900'>{buyerInfo?.price?.toFixed(2)} {currency.code}</p>
        </td>
        
        {/* Limit/Available */}
        <td className="py-4 whitespace-nowrap w-3/12">
            <div className='grid grid-cols-4 gap-4 place-items-center'>
                <div className='col-span-1'>
                    <p className='text-gray-500 text-sm '>Demand </p>
                    <p className='text-gray-500 text-sm '>Limit </p>
                </div>
                <div className='col-span-3'>
                    {/* <p className=''>{(buyerInfo?.minimum/buyerInfo?.price).toFixed(5)} {crypto.code} 
                    ~ {(buyerInfo?.maximum/buyerInfo?.price).toFixed(5)} {crypto.code}</p> */}
                    <p>~ {buyerInfo?.amount} {crypto.code}</p>
                    <p className=''>{buyerInfo?.minimum} {currency.code} ~ {buyerInfo?.maximum} {currency.code}</p>
                </div>
            </div>
        </td>
        
        {/* Payment */}
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 w-2/12 capitalize grid grid-cols-1 place-items-start">
            <p>{buyerInfo?.payment}</p>
        </td>
        
        {/* Offer */}
        <td className="px-6 py-4 whitespace-nowrap text-right w-1/12 ">
            <OfferToSell buyerInfo={buyerInfo} />
        </td>
    </tr>
  )
}

export default BuyerOffer