import OfferToBuy from "../Local/OfferToBuy"
import TraderInfo from "./TraderInfo"

const SellerOffer = ({sellerInfo,currency,crypto,offerInfo}) => {
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
            <p className='font-medium text-gray-900'>{offerInfo?.price?.toFixed(2)}</p>
            <p className='text-gray-800'>{offerInfo?.currency}</p>
        </td>
        
        {/* Limit/Available */}
        <td className=" py-4 whitespace-nowrap w-3/12">
            <div className='grid grid-cols-4 gap-4 place-items-center'>
                <div className='col-span-1'>
                    <p className='text-gray-500 text-sm '>Available </p>
                    <p className='text-gray-500 text-sm '>Limit </p>
                </div>
                <div className='col-span-3'>
                    <p className=''>{offerInfo?.available} {crypto}</p>
                    <p className=''>{offerInfo?.min} {currency} ~ {offerInfo?.max} {currency}</p>
                </div>
            </div>
        </td>
        
        {/* Payment */}
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 w-2/12 capitalize grid grid-cols-1 place-items-start ">
            <p>{offerInfo?.payment}</p>
            <TraderInfo traderInfo={sellerInfo} crypto={crypto} currency={currency} fiatCryptoInfo={offerInfo} />
        </td>
        
        {/* Offer */}
        <td className="px-6 py-4 whitespace-nowrap text-right w-1/12">
            <OfferToBuy crypto={crypto} currency={currency} fiatCryptoInfo={offerInfo} sellerUid={sellerInfo?.uid} />
        </td>
    </tr>
  )
}

export default SellerOffer