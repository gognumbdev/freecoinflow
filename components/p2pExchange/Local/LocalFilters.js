import PaymentFilter from "../PaymentFilter"
import { SwitchHorizontalIcon } from '@heroicons/react/outline'
import SelectCrypto from "../../p2pExchange/SelectCrypto.js"
import SelectCurrency from "../../p2pExchange/SelectCurrency.js"

const LocalFilters = ({transaction,currency,setCurrency,crypto,setCrypto,payment,setPayment,currencyAmount,setCurrencyAmount}) => {
    return (
    <div>
        {/* Fiat Crypto Filter ,Amount, Payment */}
        {(transaction === "buy" || transaction === "sell") && (
                <div className='grid grid-cols-1 px-4 py-2 space-x-10 space-y-4'>
                    <div className='flex items-center justify-center space-x-10'>
                        <SelectCurrency  setCurrency={setCurrency} />
                        <SwitchHorizontalIcon className='h-8' />
                        <SelectCrypto crypto={crypto} setCrypto={setCrypto} label="Cryptocurrency" />
                        
                    </div>
                    <div className='flex items-center justify-center space-x-28 '>
                        <PaymentFilter payment={payment} setPayment={setPayment} />
                        {/* Amount */}
                        <div className='w-fit'>
                            <label htmlFor="price" className="block text-lg font-medium text-gray-700">
                                Amount
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm border-2 flex p-2">
                                <input
                                type="number"
                                name="amount"
                                id="amount"
                                className="outline-none"
                                placeholder="0.00"
                                step={10}
                                value={currencyAmount}
                                onChange={(e) => setCurrencyAmount(e.target.value)}
                                />
                                {/* Currency Units */}
                                <span className=''>{currency.code}</span>
                            </div>
                        </div>
                    </div>
                    
                </div>    
        )}
    </div>
  )
}

export default LocalFilters