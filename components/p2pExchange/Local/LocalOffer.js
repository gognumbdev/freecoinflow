
import { SwitchHorizontalIcon,ExclamationCircleIcon,CheckCircleIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import SelectCurrency from '../SelectCurrency'
import SelectCrypto from '../SelectCrypto'
import PaymentFilter from "../PaymentFilter.js"
import { Tab } from '@headlessui/react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { selectTransaction } from '../../../redux/actions/tradeAction'
import { useDispatch } from 'react-redux'
const config = require("../../../next.config")

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const LocalOffer = () => 
{   
    const dispatch = useDispatch()
    const {transaction,crypto,currency,payment} = useSelector(state => state.trade)
    const router = useRouter();
    const {username,publicAddress,image,description,promptpayID} = useSelector(state => state.user)
    const [transactionType, setTransactionType] = useState("buy")
    const [price, setPrice] = useState(0.0)
    const [amount, setAmount] = useState(0.0)
    const [minimum, setMinimum] = useState(0.0)
    const [maximum, setMaximum] = useState(0.0)
    const [termAndCondition, setTermAndCondition] = useState("")
    // Amount for buy offer , but it is available for sell offer

    const handleTabChange = (index) => {
        console.log(index)
        switch(index) {
            case 0:
                setTransactionType("buy");
                setAmount(0);
                setMaximum(0);
                setMinimum(0);
                break;
            case 1:
                setTransactionType("sell");
                setAmount(0);
                setMaximum(0);
                setMinimum(0);
                break;
            default:
                setTransactionType("buy");
                setAmount(0);
                setMaximum(0);
                setMinimum(0);
                break;
        }
    }
    // I will sell BNB to you as you transfer your THB from your bank account to my promptpay ID through mobile banking application which can process on Thailand.

    const handleSubmitOffer = async () => {

        let offerData = {username,publicAddress,image,promptpayID,crypto,currency,payment:payment.name,termAndCondition,amount,price,minimum,maximum};

        if(transactionType === "buy"){
            let res = await fetch(`${config.domainName}/api/offer/buyOffer/${publicAddress}`,{
                method:"POST",
                body:JSON.stringify(offerData)
            })
            let data = await res.json().then(() => dispatch(selectTransaction("sell")));
            console.log(`Respond fata from create ${transactionType} offer for address ${publicAddress} `,data);    
        } else if (transactionType === "sell") {
            let res = await fetch(`${config.domainName}/api/offer/sellOffer/${publicAddress}`,{
                method:"POST",
                body:JSON.stringify(offerData)
            })
            let data = await res.json().then(() => dispatch(selectTransaction("buy")));
            console.log(`Respond fata from create ${transactionType} offer for address ${publicAddress} `,data);    
        }    
        
        router.push({
            pathname:"/p2pexchange/",
        })
    }
    return (
        <div className='grid grid-cols-1 place-items-start shadow-xl border-2 rounded px-4 py-4'>
            <h1 className='text-2xl font-bold my-2 place-self-center'>Fiat-Crypto exchange offer</h1>
            
            {/* Transaction */}
            <fieldset className='my-4 space-y-2 px-14  '>
                <div>
                    <legend className="text-xl font-bold text-gray-900">Transaction</legend>
                    <p className="text-base text-gray-500 px-10">Choose transaction you want to offer with local currency on fiat-crypto exchange.</p>
                </div>

                <div className="w-6/12 max-w-md sm:px-0 ml-10">
                    <Tab.Group onChange={handleTabChange}>
                        <Tab.List className="flex p-1 space-x-1 bg-white border-2 rounded-xl">
                            {/* Buy */}
                            <Tab
                            key="0"
                            className={({ selected }) =>
                                classNames(
                                'w-full py-2.5 text-base leading-5 font-bold text-black rounded-lg',
                                'focus:outline-none',
                                selected
                                    ? 'bg-green-500 shadow text-white'
                                    : 'text-black hover:text-green-500'
                                )}>
                            Buy
                            </Tab>
                            {/* Sell */}
                            <Tab
                            key="1"
                            className={({ selected }) =>
                                classNames(
                                'w-full py-2.5 text-base leading-5 font-bold text-black rounded-lg',
                                'focus:outline-none',
                                selected
                                    ? 'bg-red-500 shadow text-white'
                                    : 'text-black hover:text-red-500'
                                )}>
                            Sell
                            </Tab>
                        </Tab.List>
                    </Tab.Group>
                    </div>
            </fieldset>   
            
            {/* Fiat Crypto filter */}
            <div className='grid grid-cols-1 px-10 lg:px-14 py-2 space-x-10 space-y-4'>
                    <div className='flex items-center justify-center space-x-10'>
                        <SelectCurrency  />
                        <SwitchHorizontalIcon className='h-8' />
                        <SelectCrypto label="Cryptocurrency" />
                        
                    </div>
                    <div className='flex items-center justify-center space-x-28 '>
                        <PaymentFilter />
                        {/* Price */}
                        <div className='w-fit'>
                            <label htmlFor="price" className="flex items-center space-x-2 text-lg font-medium text-gray-700">
                                <span>Price for 1 {crypto.code}</span>
                                
                                {(price>0) ? (
                                    <CheckCircleIcon className="h-6 text-green-500" />
                                ) : (
                                    <ExclamationCircleIcon className={`h-6 text-red-500`} />
                                )}
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

                    {/* Promptpay ID */}
                    {(transactionType === "sell" && currency.code == "THB" ) && (
                        <div className='w-fit'>
                            <label htmlFor="promptpayID" className="flex items-center space-x-2 text-lg font-medium text-gray-700 ">
                                <span>Promptpay ID</span>
                                {promptpayID ? (
                                    <CheckCircleIcon className="h-6 text-green-500" />
                                ) : (
                                    <ExclamationCircleIcon className={`h-6 text-red-500`} />
                                )}
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm border-2 flex p-2">
                                <input
                                type="text"
                                id="promptpayID"
                                className="outline-none"
                                placeholder="Identification Number/Mobile Number"
                                
                                value={promptpayID}
                                onChange={(e) => setAmount(e.target.value)}
                                />
                                {/* Currency Units */}
                                {transactionType === "buy" }
                                <span className=''>{crypto.code}</span>
                            </div>
                        </div>
                    )}
                    
                    
                    {/* Avaiable/Limit */}
                    {/* Availiable Crypto */}
                    <div className='w-fit'>
                        <label htmlFor="price" className="flex items-center space-x-2 text-lg font-medium text-gray-700">
                            <span>
                                {transactionType === "buy" ? (
                                    `Amount of ${crypto.name} need to buy`
                                ) : (
                                    `Available ${crypto.name} need to sell`
                                )}
                            </span>
                            {(amount>0) ? (
                                    <CheckCircleIcon className="h-6 text-green-500" />
                                ) : (
                                    <ExclamationCircleIcon className={`h-6 text-red-500`} />
                            )}
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm border-2 flex p-2">
                            <input
                            type="number"
                            name="amount"
                            id="amount"
                            className="outline-none"
                            placeholder="0.00"
                            step={1}
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            />
                            {/* Currency Units */}
                            {transactionType === "buy" }
                            <span className=''>{crypto.code}</span>
                        </div>
                    </div>
                    
                    {/* Limit fiat */}
                    <div className='flex space-x-4'>
                        <div className='w-fit'>
                            <label htmlFor="min" className="block text-lg font-medium text-gray-700">
                                Minimum {currency.name} to {transactionType === "buy" ? "buy" :  "sell" }
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm border-2 flex p-2">
                                <input
                                type="number"
                                id="min"
                                className="outline-none"
                                placeholder="0.00"
                                step={100}
                                value={minimum}
                                onChange={(e) => setMinimum(e.target.value)}
                                />
                                {/* Currency Units */}
                                {transactionType === "buy" }
                                <span className=''>{currency.code}</span>
                            </div>
                        </div>
                        <div className='w-fit'>
                            <label htmlFor="max" className="flex items-center space-x-2 text-lg font-medium text-gray-700">
                                <span>
                                    Maximum {currency.name} to {transactionType === "buy" ? "buy" :  "sell" } 
                                </span>
                                {(maximum>minimum) ? (
                                    <CheckCircleIcon className="h-6 text-green-500" />
                                ) : (
                                    <ExclamationCircleIcon className={`h-6 text-red-500`} />
                                )}
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm border-2 flex p-2">
                                <input
                                type="number"
                                id="max"
                                className="outline-none"
                                placeholder="0.00"
                                step={100}
                                value={maximum}
                                onChange={(e) => setMaximum(e.target.value)}
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
                    value={termAndCondition}
                    onChange={(e) => setTermAndCondition(e.target.value)}
                    />
                </div>
            </div>
            
            <button 
                className='place-self-center border-2 px-4 py-2 rounded text-xl bg-green-500 text-white font-bold
                transition dueation-200 transform ease-out hover:scale-105'
                onClick={handleSubmitOffer}
                >
                Submit
            </button>
            
        </div>
    )
}

export default LocalOffer