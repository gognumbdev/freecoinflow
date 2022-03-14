import Head from 'next/head'
import { useEffect, useState } from 'react'
import Filters from '../../components/p2pExchange/Filters'
import P2PBanner from '../../components/p2pExchange/P2PBanner'
import P2PExchangeBody from '../../components/p2pExchange/P2PExchangeBody'
import { CashIcon, DeviceMobileIcon} from '@heroicons/react/outline';
import BTC from "../../public/icons/crypto/BTC.png"
import USDC from "../../public/icons/crypto/USDC.png"
import USD from "../../public/icons/currency/jpgSeries/USD.jpg"
import BNB from "../../public/icons/crypto/BNB.png"
import THB from "../../public/icons/currency/jpgSeries/THB.jpg"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { selectTransaction } from '../../redux/actions/tradeAction'

const P2PExchange = () => {
  const trade = useSelector(state => state.trade)
  const dispatch = useDispatch();
  const [scope, setScope] = useState("local")
  
  useEffect(() => {
    if(trade.transaction === "offer") {
      dispatch(selectTransaction("buy"))
    }
  }, [])
  
  console.log(trade)

  return (
    <div className='grid grid-cols-1 place-items-center'>
        <Head>
            <title>Neoflow P2P Exchange</title>
        </Head>

        <P2PBanner />
        
        <Filters scope={scope} setScope={setScope} />

        <P2PExchangeBody scope={scope}/>

        
    </div>
  )
}

export default P2PExchange