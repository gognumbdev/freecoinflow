import { useSelector } from "react-redux"
import { DeviceMobileIcon, UserCircleIcon } from "@heroicons/react/outline"
import OfferToBuy from "../Local/OfferToBuy"
import TraderInfo from "./TraderInfo"

const SellerOffer = ({sellerInfo}) => {
    const {transaction,crypto,currency,payment} = useSelector(state => state.trade)
  return (
    <tr key={sellerInfo?.publicAddress} className="hover:bg-slate-50">
        {/* Seller */}
        <td className="pl-4 pr-1 w-3/12 py-4 whitespace-nowrap">
            <div className="flex items-center justify-start">
                <div className="flex-shrink-0 h-10 w-10 grid grid-cols-1 place-items-center">
                    {sellerInfo?.profileImage ? (
                        <img className="h-10 w-10 rounded-full object-cover" src={sellerInfo?.profileImage} alt={sellerInfo?.username} />
                    ) : (
                        <UserCircleIcon className="h-8" />
                    )}
                    
                </div>
                <div className="ml-4 flex space-x-2 items-center">
                    <div className="text-sm font-medium text-gray-900">{sellerInfo?.username}</div>
                    <TraderInfo traderInfo={sellerInfo}  />
                    {/* <div className="text-sm text-gray-500">{sellerInfo?.transactionHistory?.complete + "% completion"}</div> */}
                </div>
                {/* <span className="justify-self-end px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                </span> */}
            </div>
        </td>
        
        {/* Price */}
        <td className="px-6 w-3/12 py-4 whitespace-nowrap flex space-x-2 items-center">
            <p className='font-medium text-gray-900'>{sellerInfo?.price.toFixed(2)}</p>
            <p className='text-gray-800'>{sellerInfo?.fiatCurrency.code}</p>
        </td>
        
        {/* Limit/Available */}
        <td className=" py-4 whitespace-nowrap w-3/12">
            <div className='grid grid-cols-4 gap-4 place-items-center'>
                <div className='col-span-1'>
                    <p className='text-gray-500 text-sm '>Available </p>
                    <p className='text-gray-500 text-sm '>Limit </p>
                </div>
                <div className='col-span-3'>
                    <p className=''>{sellerInfo?.available} {crypto.code}</p>
                    <p className=''>{sellerInfo?.minimum} {currency.code} ~ {sellerInfo?.maximum} {currency.code}</p>
                </div>
            </div>
        </td>
        
        {/* Payment */}
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 w-2/12 capitalize grid grid-cols-1 place-items-start space-y-1 ">
            <DeviceMobileIcon className='h-6 text-blue-500 ' />
            <p>{sellerInfo?.payment}</p>
        </td>
        
        {/* Offer */}
        <td className="px-6 py-4 whitespace-nowrap text-right w-1/12">
            <OfferToBuy  sellerInfo={sellerInfo} />
        </td>
    </tr>
  )
}

export default SellerOffer