import Head from 'next/head'
import React, { useState } from 'react'
const promptpay = require('promptpay-js')
// const payload = promptpay.generate({
//     method: 'QR_STATIC',
//     application: 'PROMPTPAY_CREDIT_TRANSFER',
//     mobileNumber: '0982682982',
//     currencyCode: '764',
//     countryCode: 'TH',
//     reference1: Date.now().toString(),
//   })
// console.log(payload)

const Transaction = () => {
    const [PromptpayID, setPromptpayID] = useState("")
    return (
        <div className='grid grid-cols-1 place-items-center pt-10'>
            <Head>
                <title>Transaction</title>
            </Head>
            <h1 className='text-4xl '>Transaction</h1>
          
            
        </div>
    )
}

export default Transaction