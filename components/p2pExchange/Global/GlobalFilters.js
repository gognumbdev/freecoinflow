import { useState } from "react"
import { SwitchHorizontalIcon } from "@heroicons/react/outline"
import SelectCrypto from "../SelectCrypto"

const GlobalFilters = ({transaction,spendCrypto,setSpendCrypto,receiveCrypto,setReceiveCrypto
    ,spendAmount,setSpendAmount,receiveAmount,setReceiveAmount,setReceiveCryptoIcon,setSpendCryptoIcon}) => {
    const [spendOrReceive, setSpendOrReceive] = useState("spend")

    return (
    <div>
        {/* Fiat Crypto Filter ,Amount, Payment */}
        {(transaction === "buy" || transaction === "sell") && (
            <div className='grid grid-cols-1 px-4 py-2 space-x-10'>
                <div className="flex items-center justify-center space-x-10">
                    <SelectCrypto crypto={spendCrypto} setCrypto={setSpendCrypto} label="Spend Crypto" />
                    <SwitchHorizontalIcon className='h-8' />
                    <SelectCrypto crypto={receiveCrypto} setCrypto={setReceiveCrypto} label="Receive Crypto"/>
                </div>
                <div className='w-fit place-self-center mt-4'>
                    <label htmlFor="price" className="block text-lg font-medium text-gray-700">
                        Amount
                    </label>
                    <div className="mt-1 rounded-md shadow-sm border-2 flex p-2 ">
                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            className="outline-none"
                            placeholder="0.00"
                            step={10}
                            value={spendAmount}
                            onChange={(e) => setSpendAmount(e.target.value)}
                            />
                        <span className=''>{spendCrypto.code}</span>
                    </div>
                </div>
            </div>    
        )}
    </div>
  )
}

export default GlobalFilters