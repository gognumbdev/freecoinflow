import Head from 'next/head'
import React from 'react'
const parser = require("promptpay-emvco-parser")
const promptpayJS = require('promptpay-js')
const emvqr = require('@walletfactory/emvqr');


const Transaction = () => {
    let qrCode1 = "00020101021229370016A000000677010111011300668711111115802TH53037645406500.006304ABAC"
    let qrCode2 = '00020101021129370016A00000067701011101130066XXXXXXXXX53037645802TH6304D37F'
    let qrCodeFromPromptpayBill =  "00390006000001010300402180120611355138974785102TH91049847"

    const ppEmvcoParserTest = (qrCode) => {
        let object = parser(qrCode);
        console.log(" promptpay-emvco-parser : ",object)
    }

    const promptpayJSParserTest = (qrCode) => {
        const data = promptpayJS.parse(qrCode)
        console.log("promptpay-js : ",data)
    }

    const emvqrTest = (qrCode) => {
        const result = emvqr.decode(qrCode);
        console.log('emvqr : ', result);
    } 
    
    const testQrCode1 = (qrCode) => {
        ppEmvcoParserTest(qrCode);
        promptpayJSParserTest(qrCode);
    }

    const testQrCodeFromPromptPayBill = (qrCode) => {
        // ppEmvcoParserTest(qrCode);
        promptpayJSParserTest(qrCode);
        emvqrTest(qrCode)
    }

    // testQrCode1(qrCode1);
    testQrCodeFromPromptPayBill(qrCodeFromPromptpayBill);

    
    return (
        <div className='grid grid-cols-1 place-items-center pt-10'>
            <Head>
                <title>Transaction</title>
            </Head>
            <h1 className='text-4xl font-bold'>Transaction</h1>
            
        </div>
    )
}

export default Transaction