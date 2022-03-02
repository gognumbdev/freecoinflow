import LocalOffer from "./Local/LocalOffer"
import GlobalOffer from "./Global/GlobalOffer"
import OffersListLocal from "./Local/OffersListLocal"
import OffersListGlobal from "./Global/OffersListGlobal"

let merchantType =  {
  "sell":"Buyer",
  "buy":"Seller"
}

const P2PExchangeBody = ({transaction,scope,currency,setCurrency,crypto,setCrypto,payment,setPayment,currencyAmount,setCurrencyAmount,spendCrypto,setSpendCrypto,receiveCrypto,setReceiveCrypto}) => {

  return (
    <div className='mt-4 w-4/6'>
      {(transaction == "buy" || transaction == "sell") && (
        scope === "local" ? (
          <OffersListLocal 
            transaction={transaction}
            currency={currency}
            crypto={crypto}
            payment={payment}
          />
        ) : (
          <div className=" grid grid-cols-1 place-items-center text-4xl font-bold">
            Sorry, This feature is unavailable for now.
          </div>
          // <OffersListGlobal 
          //   transaction={transaction}
          //   spendCrypto={spendCrypto}
          //   receiveCrypto={receiveCrypto}
          // />
        )
        
      )}

      {transaction === "offer" && (
        scope === "local" ? (
          <LocalOffer 
            transaction={transaction}
            currency={currency}
            setCurrency={setCurrency}
            crypto={crypto}
            setCrypto={setCrypto}
            payment={payment}
            setPayment={setPayment}
            currencyAmount={currencyAmount}
            setCurrencyAmount={setCurrencyAmount}
          />
         ) : (
          <div className=" grid grid-cols-1 place-items-center text-4xl font-bold">
            Sorry, This feature is unavailable for now.
          </div>
          // <GlobalOffer
          //   transaction={transaction}
          //   crypto={crypto}
          //   setCrypto={setCrypto}
          //   spendCrypto={spendCrypto}
          //   setSpendCrypto={setSpendCrypto}
          //   receiveCrypto={receiveCrypto}
          //   setReceiveCrypto={setReceiveCrypto}
          // />
         ) 
      )}
      
    </div>
  )
}

export default P2PExchangeBody