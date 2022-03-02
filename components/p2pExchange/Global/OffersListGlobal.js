/* This example requires Tailwind CSS v2.0+ */

import { findSeller,findBuyer } from "../../utils/filter/global/cryptoCryptoFilter"
import { useEffect, useState } from "react"
import SellerOffer from "./SellerOffer.js"
import BuyerOffer from "./BuyerOffer.js"

export default function OfferListGlobal({transaction,spendCrypto,receiveCrypto}) {
    const [sellers, setSellers] = useState([])
    const [buyers, setBuyers] = useState([])

    useEffect(() => {
      let sellerResult = findSeller(spendCrypto.code,receiveCrypto.code)
      let buyerResult = findBuyer(spendCrypto.code,receiveCrypto.code)
      setSellers(sellerResult)
      setBuyers(buyerResult)
    }, [transaction,receiveCrypto,spendCrypto])

    console.log(sellers,buyers,spendCrypto,receiveCrypto)
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
                      Available
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
                    sellers.map(seller => (
                      <SellerOffer sellerInfo={seller} spendCrypto={spendCrypto.code} receiveCrypto={receiveCrypto.code} />
                    ))
                  ) : (
                    buyers.map(buyer => (
                      <BuyerOffer buyerInfo={buyer} spendCrypto={spendCrypto.code} receiveCrypto={receiveCrypto.code} />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
