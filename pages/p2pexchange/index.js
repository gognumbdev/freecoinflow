import Head from 'next/head'
import { useState } from 'react'
import Filters from '../../components/p2pExchange/Filters'
import P2PBanner from '../../components/p2pExchange/P2PBanner'
import P2PExchangeBody from '../../components/p2pExchange/P2PExchangeBody'
import { CashIcon, DeviceMobileIcon} from '@heroicons/react/outline';
import BTC from "../../public/icons/crypto/BTC.png"
import USDC from "../../public/icons/crypto/USDC.png"
import USD from "../../public/icons/currency/jpgSeries/USD.jpg"
import BNB from "../../public/icons/crypto/BNB.png"
import THB from "../../public/icons/currency/jpgSeries/THB.jpg"

const P2PExchange = () => {
  const [transaction, setTransaction] = useState("buy")
  const [scope, setScope] = useState("local")
  const [currency, setCurrency] = useState(
    {
      code:"THB",
      name:"Thai bath",
      image:THB
    }
    )
  const [crypto, setCrypto] = useState(
    {
      code:"BNB",
      name:"Binance Coin",
      blockchain:"Polygon blockchain",
      image:BNB
    }
  )
  const [payment, setPayment] = useState(
    {
      name:"Mobile Banking (Promptpay)",
      icon:<DeviceMobileIcon className='h-10 text-blue-500' />
    }
  )
  const [currencyAmount, setCurrencyAmount] = useState(null)
  const [spendCrypto, setSpendCrypto] = useState(
  {
    code:"USDC",
    name:"USD Coin",
    blockchain:"Ethereum blockchain",
    image:USDC
  })
  const [receiveCrypto, setReceiveCrypto] = useState({
    code:"BTC",
    name:"Bitcoin",
    blockchain:"Btitcoin blockchain",
    image:BTC
  })
  const [spendAmount, setSpendAmount] = useState(null)
  const [receiveAmount, setReceiveAmount] = useState(null)

  return (
    <div className='grid grid-cols-1 place-items-center'>
        <Head>
            <title>Decentralized P2P Exchange</title>
        </Head>

        <P2PBanner />
        
        <Filters 
          transaction={transaction} setTransaction={setTransaction} scope={scope} setScope={setScope} 
          currency={currency} setCurrency={setCurrency} crypto={crypto} setCrypto={setCrypto} 
          currencyAmount={currencyAmount} setCurrencyAmount={setCurrencyAmount} payment={payment} setPayment={setPayment}
          spendCrypto={spendCrypto} setSpendCrypto={setSpendCrypto} receiveCrypto={receiveCrypto} setReceiveCrypto={setReceiveCrypto}
          spendAmount={spendAmount} setSpendAmount={setSpendAmount} receiveAmount={receiveAmount} setReceiveAmount={setReceiveAmount}
        />

        <P2PExchangeBody 
          transaction={transaction} 
          scope={scope}
          currency={currency}
          setCurrency={setCurrency}
          crypto={crypto}
          setCrypto={setCrypto}
          payment={payment}
          setPayment={setPayment}
          currencyAmount={currencyAmount}
          setCurrencyAmount={setCurrencyAmount}
          spendCrypto={spendCrypto} setSpendCrypto={setSpendCrypto} receiveCrypto={receiveCrypto} setReceiveCrypto={setReceiveCrypto}
          spendAmount={spendAmount} setSpendAmount={setSpendAmount} receiveAmount={receiveAmount} setReceiveAmount={setReceiveAmount}
        />

        
    </div>
  )
}

export default P2PExchange