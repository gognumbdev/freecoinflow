
import { SwitchHorizontalIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import SelectCurrency from '../SelectCurrency'
import SelectCrypto from '../SelectCrypto'
import PaymentFilter from "../PaymentFilter.js"

const LocalOffer = ({transaction,currency,setCurrency,crypto,setCrypto,payment,setPayment}) => 
{
    const [username, setUsername] = useState("")
    const [addressType, setAddressType] = useState("public address")
    const [transactionType, setTransactionType] = useState("buy")
    const [price, setPrice] = useState(0.0)
    return (
        <div className='grid grid-cols-1 place-items-start shadow-xl border-2 rounded px-4 py-4'>
            <h1 className='text-2xl font-bold my-2 place-self-center'>Fiat-Crypto exchange offer</h1>
            
            {/* <div className='flex-col px-14'>
                <p className='text-xl font-bold mt-2 '>Username</p>
                <input type="text" placeholder='username' className='ml-10 border-2 rounded mt-2 p-2 outline-none' value={username}
                    onChange={(e) => setUsername(e.target.value)} />
            </div>
             */}
            
            {/* Adress */}
            {/* <fieldset className='my-4 space-y-2 px-14'>
                <div>
                    <legend className="text-xl font-bold text-gray-900">Blockchain Address</legend>
                    <p className="text-base text-gray-500 px-10">Choose blockchain address which represent to others where for transfer value to you.</p>
                </div>
                <div className="flex items-center space-x-4 cursor-pointer px-10">
                    <div className="flex items-center cursor-pointer"  onClick={() => setAddressType("public address")}>
                        <input
                            id="public-address"
                            name="blockchain-address"
                            type="radio"
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 cursor-pointer"
                            value="public address"
                            defaultChecked
                        />
                        <label htmlFor="public-address" className="ml-3 block font-medium text-gray-700 cursor-pointer">
                        Public Address
                        </label>
                    </div>
                    <div className="flex items-center cursor-pointer" onClick={() => setAddressType("receive address")}>
                        <input
                            id="push-email"
                            name="blockchain-address"
                            type="radio"
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 cursor-pointer"
                            value="receive address"
                        />
                        <label htmlFor="push-email" className="ml-3 block font-medium text-gray-700 cursor-pointer">
                        Receive Address
                        </label>
                    </div>
                </div>
                <p className='font-medium ml-10'>{addressType === "receive address" ? "Receive" : "Public"} Address : 0x5593572e312C4F8Fc2fe924907624B39D1d6B65c</p>
            </fieldset>    */}
            
            {/* Transaction */}
            <fieldset className='my-4 space-y-2 px-14  '>
                <div>
                    <legend className="text-xl font-bold text-gray-900">Transaction</legend>
                    <p className="text-base text-gray-500 px-10">Choose transaction you want to offer with local currency on fiat-crypto exchange.</p>
                </div>
                {/* Radio */}
                <div className="flex items-center space-x-4 cursor-pointer px-10">
                    <div className="flex items-center cursor-pointer"  onClick={() => setTransactionType("buy")}>
                        <input
                            id="buy"
                            name="transaction"
                            type="radio"
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 cursor-pointer"
                            value="public address"
                            defaultChecked
                        />
                        <label htmlFor="buy" className="ml-3 block font-medium text-gray-700 cursor-pointer">
                        Buy
                        </label>
                    </div>
                    <div className="flex items-center cursor-pointer" onClick={() => setTransactionType("sell")}>
                        <input
                            id="sell"
                            name="transaction"
                            type="radio"
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 cursor-pointer"
                            value="receive address"
                        />
                        <label htmlFor="sell" className="ml-3 block font-medium text-gray-700 cursor-pointer">
                        Sell
                        </label>
                    </div>
                </div>
            </fieldset>   
            
            {/* Fiat Crypto filter */}
            <div className='grid grid-cols-1 px-10 lg:px-14 py-2 space-x-10 space-y-4'>
                    <div className='flex items-center justify-center space-x-10'>
                        <SelectCurrency setCurrency={setCurrency} />
                        <SwitchHorizontalIcon className='h-8' />
                        <SelectCrypto crypto={crypto} setCrypto={setCrypto} label="Cryptocurrency" />
                        
                    </div>
                    <div className='flex items-center justify-center space-x-28 '>
                        <PaymentFilter payment={payment} setPayment={setPayment} />
                        {/* Price */}
                        <div className='w-fit'>
                            <label htmlFor="price" className="block text-lg font-medium text-gray-700">
                                Price for 1 {crypto.code}
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm border-2 flex p-2">
                                <input
                                type="number"
                                name="amount"
                                id="price"
                                className="outline-none "
                                placeholder="0.00"
                                step={10}
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                />
                                {/* Currency Units */}
                                {transactionType === "buy" }
                                <span className=''>{currency.code}</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Avaiable/Limit */}
                    {/* Availiable Crypto */}
                    <div className='w-fit'>
                        <label htmlFor="price" className="block text-lg font-medium text-gray-700">
                            {transactionType === "buy" ? (
                                `Amount of ${crypto.name} need to buy`
                            ) : (
                                `Available ${crypto.name} need to sales`
                            )}
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm border-2 flex p-2">
                            <input
                            type="number"
                            name="amount"
                            id="amount"
                            className="outline-none"
                            placeholder="0.00"
                            step={10}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            />
                            {/* Currency Units */}
                            {transactionType === "buy" }
                            <span className=''>{crypto.code}</span>
                        </div>
                    </div>
                    
                    {/* Limit fiat */}
                    <div className='flex space-x-4'>
                        <div className='w-fit'>
                            <label htmlFor="price" className="block text-lg font-medium text-gray-700">
                                Minimum {currency.name} to {transactionType === "buy" ? "buy" :  "sell" }
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm border-2 flex p-2">
                                <input
                                type="number"
                                name="amount"
                                id="amount"
                                className="outline-none"
                                placeholder="0.00"
                                step={10}
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                />
                                {/* Currency Units */}
                                {transactionType === "buy" }
                                <span className=''>{currency.code}</span>
                            </div>
                        </div>
                        <div className='w-fit'>
                            <label htmlFor="price" className="block text-lg font-medium text-gray-700">
                                Maximum {currency.name} to {transactionType === "buy" ? "buy" :  "sell" } 
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm border-2 flex p-2">
                                <input
                                type="number"
                                name="amount"
                                id="amount"
                                className="outline-none"
                                placeholder="0.00"
                                step={10}
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                />
                                {/* Currency Units */}
                                {transactionType === "buy" }
                                <span className=''>{currency.code}</span>
                            </div>
                        </div>
                    </div>
                </div> 

            {/* Description */}
            <div className='pl-14 my-4 '>
                <label htmlFor="about" className="block text-xl font-bold ">
                    Term and Conditions
                    <p className="mt-2 text-sm text-gray-500 ml-10">
                        Brief description for people who will make transaction with you.
                    </p>
                </label>
                <div className="mt-1 ml-10">
                    <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
                    placeholder="Describe your term and conditions for people who will make transaction with you"
                    defaultValue={''}
                    />
                </div>
            </div>
            
            <button 
                className='place-self-center border-2 px-4 py-2 rounded text-xl bg-green-500 text-white font-bold
                transition dueation-200 transform ease-out hover:scale-105'>
                Submit
            </button>
            
        </div>
    )
}

export default LocalOffer