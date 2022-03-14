import { useState } from 'react'
import { HomeIcon,GlobeIcon,SwitchHorizontalIcon,CashIcon } from '@heroicons/react/outline'
import LocalFilters from './Local/LocalFilters.js'
import GlobalFilters from './Global/GlobalFilters.js'
import TransactionFilter from "./TransactionFilter"
import ScopeFilter from "./ScopeFilter"
import Image from "next/image"
import BTC from "../../public/icons/crypto/BTC.png"
import USDC from "../../public/icons/crypto/USDC.png"
import USD from "../../public/icons/currency/jpgSeries/USD.jpg"

const Filters = ({setTransaction,scope,setScope}) => {
    
    const handleTransaction = (transactionType) => {
        switch(transactionType) {
            case "buy":
                setTransaction("buy");
                break;
            case "sell":
                setTransaction("sell");
                break;
            case "offer":
                setTransaction("offer");
                break;
            default:
                setTransaction("buy");
                break;
        }
    }

    const handleScope = (scopeType) => {
        switch(scopeType) {
            case "local":
                setScope("local");
                break;
            case "global":
                setScope("global");
                break;
            default:
                setScope("local");
                break;
        }
    }

    return (
        <div className='grid grid-cols-1 md:w-4/6 py-4'>
            <div className='flex justify-between bg-white'>
                <TransactionFilter />
                <ScopeFilter setScope={setScope} />    
            </div>
            
            
            {/* Local filters */}
            {scope === "local" && (
                <LocalFilters />
            )}
            
            {/* Global filters */}
            {scope === "global" && (
                <div className=" grid grid-cols-1 place-items-center text-4xl font-bold">
                    
                </div>
                // <GlobalFilters
                //     transaction={transaction}
                //     spendCrypto={spendCrypto}
                //     setSpendCrypto={setSpendCrypto}
                //     receiveCrypto={receiveCrypto}
                //     setReceiveCrypto={setReceiveCrypto}
                //     spendAmount={spendAmount}
                //     setSpendAmount={setSpendAmount}
                //     receiveAmount={receiveAmount}
                //     setReceiveAmount={setReceiveAmount}
                // />
            )}
            
        </div>
  )
}

export default Filters