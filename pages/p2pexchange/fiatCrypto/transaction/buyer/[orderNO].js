import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { findFiatCryptoInfoForSell,findSeller } from '../../../../../components/utils/filter/local/fiatCryptoFilter';

const TransactionPage = () => {
  const router = useRouter();
  const [offerInfo, setOfferInfo] = useState({})
  const [sellerInfo, setsellerInfo] = useState({})
  const {orderNO,sellOfferNO,sellerUid,crypto,currency} = router.query;

  // useEffect(() => {
  //   let info = findFiatCryptoInfoForSell(userLocalSellOffer,currency,crypto)
  //   setOfferInfo(onfo);
  // }, [])
  
  
  return (
    <div className=''>  
      <p>Order NO : {orderNO}</p>
      <p>Amount of {offerInfo?.currency} to pay : {amount} {offerInfo?.currency}</p>
      {/* <p>You will receive {offerInfo?.currency} to pay : {receive} {offerInfo?.crypto}</p> */}

    </div>
  )
}

export default TransactionPage