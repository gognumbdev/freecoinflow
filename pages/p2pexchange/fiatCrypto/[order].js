import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import Head from 'next/head';
import Buyer from '../../../components/p2pExchange/Order/Buyer';
import Seller from '../../../components/p2pExchange/Order/Seller';
import BTC from "../../../public/icons/crypto/qrCode/BTC.png"
import BNB from "../../../public/icons/crypto/qrCode/BNB.png"
import ETH from "../../../public/icons/crypto/qrCode/ETH.png"
import BUSD from "../../../public/icons/crypto/qrCode/BUSD.png"
import DAI from "../../../public/icons/crypto/qrCode/DAI.png"
import USDC from "../../../public/icons/crypto/qrCode/USDC.png"
import USDT from "../../../public/icons/crypto/qrCode/USDT.png"
import Matic from "../../../public/icons/crypto/qrCode/Matic.png"
const config = require("../../../next.config")
import Image from "next/image"

const TransactionPage = ({orderData,offerData,sellerData}) => {
  const router = useRouter()
  const {transaction,crypto,currency,payment} = useSelector(state => state.trade)
  const {publicAddress} = useSelector(state => state.user)
  const {fiatCurrency,cryptocurrency} = offerData
  const {order} = router.query;
  const [qrCodeSVG, setQrCodeSVG] = useState(null)
  const [pending, setPending] = useState(false)
  const [success, setSuccess] = useState(false)
  // const [qrCodeSrc, setQrCodeSrc] = useState("")

  const transferedNotify = () => {
    setPending(true);
    setInterval(transactionComplete, 5000);
  }

  const transactionComplete = () => {
    setSuccess(true);
    setPending(false);
  }

  useEffect(async () => {

    const promptpayQrCode = require('qrcode')
    const generatePayload = require('promptpay-qr')

    const promptpayID = sellerData?.promptpayID
    const amount = orderData.amountToPay
    const payload = generatePayload(promptpayID, { amount })
    // setQrCode(payload);

    // Convert to SVG QR Code
    const options = { type: 'svg', color: { dark: '#003b6a', light: '#f7f8f7' } }
    let qrSVG = await new Promise((resolve, reject) => {
      promptpayQrCode.toString(payload, options, (err, svg) => {
        if (err) return reject(err)
        resolve(svg)
      })
    })
    setQrCodeSVG(qrSVG);
    // setQrCodeSrc(qrCodePng[offerData.cryptocurrency.code])
  }, [order])


  return (
    <div className='grid grid-cols-1 place-items-center py-4'>
      <Head>
        <title> {cryptocurrency.code} {fiatCurrency.code} Order {order}</title>
      </Head>  
      

      {publicAddress === orderData.buyerPublicAddress && (
        <Buyer order={order} orderData={orderData} currency={fiatCurrency} crypto={cryptocurrency} 
          offerData={offerData} pending={pending} success={success} transferedNotify={transferedNotify}
          qrCodeSVG={qrCodeSVG} qrCodeSrc={qrCodePng[offerData.cryptocurrency.code]}
        />
      )}

      {publicAddress === orderData.sellerPublicAddress && (
        <Seller order={order} orderData={orderData} currency={fiatCurrency} crypto={cryptocurrency} 
          offerData={offerData} pending={pending} success={success} transferedNotify={transferedNotify}
          qrCodeSVG={qrCodeSVG} qrCodeSrc={qrCodePng[offerData.cryptocurrency.code]}
        />
      )}

    </div>
  )
}
// This gets called on every request
export async function getServerSideProps(context) {
    let order = context.params.order;
    // fetch order data
    const res = await fetch(`${config.domainName}/api/fiatCrypto/${order}`)
    const orderData = await res.json()
    
    // fetch offerder data
    let offerData;
    if(orderData.offerType === "buy") {
      const offerRes = await fetch(`${config.domainName}/api/offer/buyOffer/getOffer/${orderData.offerNo}`)
      offerData = await offerRes.json()
    }else if (orderData.offerType === "sell") {
      const offerRes = await fetch(`${config.domainName}/api/offer/sellOffer/getOffer/${orderData.offerNo}`)
      offerData = await offerRes.json()
    }

    // fetch seller data
    const sellerRes = await fetch(`${config.domainName}/api/user/${orderData.sellerPublicAddress}`)
    let sellerData = await sellerRes.json()
    
    return { props: { orderData ,offerData,sellerData} }
}

export default TransactionPage

let qrCodePng = {
  "BTC":BTC,
  "ETH":ETH,
  "BNB":BNB,
  "BUSD":BUSD,
  "Matic":Matic,
  "DAI":DAI,
  "USDC":USDC,
  "USDT":USDT
}