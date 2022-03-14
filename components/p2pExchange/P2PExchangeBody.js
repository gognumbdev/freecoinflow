import LocalOffer from "./Local/LocalOffer"
import GlobalOffer from "./Global/GlobalOffer"
import OffersListLocal from "./Local/OffersListLocal"
import OffersListGlobal from "./Global/OffersListGlobal"
import { useSelector } from "react-redux"


const P2PExchangeBody = ({scope}) => {
  const {transaction,crypto,currency,payment} = useSelector(state => state.trade)
  const {publicAddress} = useSelector(state => state.user)
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
          publicAddress ? <LocalOffer /> : <p className="text-4xl font-bold">Please connect your MetaMask wallet</p>
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