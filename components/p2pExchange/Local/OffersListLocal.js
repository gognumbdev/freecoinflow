/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from "react"
import SellerOffer from "./SellerOffer"
import BuyerOffer from "./BuyerOffer"
import { useSelector } from "react-redux"
const config = require("../../../next.config")

export default function OfferListLocal() {
  const [sellers, setSellers] = useState([])
  const [buyers, setBuyers] = useState([])

  const {transaction,crypto,currency,payment} = useSelector(state => state.trade)
  
  useEffect(async () => {
    if(transaction === "buy"){
      let res = await fetch(`${config.domainName}/api/offer/sellOffer/${crypto.code}/${currency.code}/${payment.name}`)
      let sellersData = await res.json()
      // console.log("sellersData : ",sellersData)
      setSellers(sellersData);
    }else if (transaction === "sell") {
      let res = await fetch(`${config.domainName}/api/offer/buyOffer/${crypto.code}/${currency.code}/${payment.name}`)
      let buyersData = await res.json()
      // console.log("buyersData : ",buyersData)
      setBuyers(buyersData);
    }
  }, [transaction,crypto,currency,payment])
  
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
                    sellers.map(seller => 
                    <SellerOffer sellerInfo={seller}  />
                    )
                  ) : (
                    buyers.map(buyer => 
                      <BuyerOffer buyerInfo={buyer}  />
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
}

