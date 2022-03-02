/* This example requires Tailwind CSS v2.0+ */

import {findSellersById,findBuyersById,getOffers} from "../../utils/filter/local/fiatCryptoFilter"
import { useEffect, useState } from "react"
import SellerOffer from "./SellerOffer"
import BuyerOffer from "./BuyerOffer"

export default function OfferListLocal({transaction,crypto,currency,payment}) {
    const [sellers, setSellers] = useState([])
    const [buyers, setBuyers] = useState([])

    // useEffect(() => {
    //   let offers = getOffers(transaction,crypto.code,currency.code,payment.name);
    //   if(transaction==="buy"){
    //     let sellersResult = findSellersById(offers)
    //     setSellers(sellersResult);
    //   }else if(transaction === "sell"){
    //     let buyersResult = findBuyersById(offers);
    //     setBuyers(buyersResult);
    //   }
    
    // }, [transaction,currency,crypto,payment])


    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      { transaction === "buy" ? "Seller" : "Buyer"}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Limit/Available
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Payment
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Offer
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {transaction === "buy" ? (
                    sellers.map(seller => {
                      if(seller?.offerInfo){
                        return <SellerOffer sellerInfo={seller} crypto={crypto.code} currency={currency.code} payment={payment} offerInfo={seller?.offerInfo} />
                      }
                    })
                  ) : (
                    buyers.map(buyer => {
                      if(buyer?.offerInfo){
                        return <BuyerOffer buyerInfo={buyer} crypto={crypto.code} currency={currency.code} offerInfo={buyer?.offerInfo} />
                      }
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
