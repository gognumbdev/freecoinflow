import BTC from "../../../public/icons/crypto/BTC.png"
import ETH from "../../../public/icons/crypto/ETH.png"
import Matic from "../../../public/icons/crypto/Matic.png"
import USDC from "../../../public/icons/crypto/USDC.png"
import USDT from "../../../public/icons/crypto/USDT.png"
import DAI from "../../../public/icons/crypto/DAI.png"
import BNB from "../../../public/icons/crypto/BNB.png"
import BUSD from "../../../public/icons/crypto/BUSD.png"
import THB from "../../../public/icons/currency/THB.png"
import USD from "../../../public/icons/currency/USD.png"
import Image from "next/image"
import { SwitchHorizontalIcon } from "@heroicons/react/solid"
import { useRouter } from "next/router"
const config = require("../../../next.config")

const Buyer = ({order,orderData,currency,crypto,offerData,pending,success,transferedNotify,qrCodeSVG,qrCodeSrc}) => {
  const router = useRouter();

  const goToFeedbackPage = () => {
    router.push(`${config.domainName}/feedback`)
  }  

  const cancelOrder = async () => {
    let res = await fetch(`${config.domainName}/api/fiatCrypto/${order}`,{
      method:"DELETE"
    })
    console.log(res)
    router.push(`${config.domainName}/p2pexchange/`)
  }

  return (
    <div className="grid grid-cols-1 ">
      
      {/* Order,Offer Info */}
      <div className="grid grid-cols-1 place-items-start gap-y-2">
        <p className='text-xl font-bold'>Order NO : {order}</p>
        <p className='text-lg font-medium'>Amount of {currency.name} {`(${currency.code})`} to pay : {orderData.amountToPay} {currency.code}</p>
        <p className='text-lg font-medium'>Amount of {crypto.name} {`(${crypto.code})`} to receive : {(orderData.amountToPay/offerData.price).toFixed(5)} {crypto.code}</p>

        <div className="grid grid-cols-3 gap-x-8">
          <Image
            src={currencies[currency.code].image}
            height={60}
            width={60}
          />
          <SwitchHorizontalIcon />
          <Image
            src={cryptos[crypto.code].image}
            height={60}
            width={60}
          />
        </div>
        

        {/* <p>You will receive {offerInfo?.currency} to pay : {receive} {offerInfo?.crypto}</p> */}
        <div className='grid grid-cols-1 mt-4 space-y-2 border-2 p-4 rounded-xl mb-4'>
          <div className="flex items-center space-x-4">
            <p className="text-gray-500 font-medium">Offer No </p>
            <p className='font-bold'>{offerData.offerNo}</p>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-gray-500 font-medium">Seller</p>
            <p className="font-bold">{offerData.username}</p>  
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-gray-500 font-medium">Price </p>
            <p className="font-bold">{offerData.price} {currency.code} for 1 {crypto.code}</p>  
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-gray-500 font-medium">Payment</p>
            <p className="font-bold">{offerData.payment}</p>  
          </div>
          
          <div className="flex items-center space-x-4">
            <p className="text-gray-500 font-medium">Term and condition</p>
            <p className="font-bold">{offerData.termAndCondition}</p>  
          </div>
          
        </div>
      </div>

      
      {/* Transaction Section */}
      {(offerData.fiatCurrency.code === "THB" && pending === false && success === false ) && (
          <div className="grid grid-cols-1 place-items-center space-y-4 border-2 p-4 rounded-xl border-amber-500">
              <div className='grid grid-cols-1 place-items-center'>
                <p className='text-xl font-bold mt-4'>Promptpay Qr code</p>
                <p>This is fake qr code to simulate real scenario for you to make payment.</p>
                {/* <div dangerouslySetInnerHTML={{__html:qrCodeSVG}}></div> */}
                <Image 
                  src={qrCodeSrc}
                  height={150} width={150}
                />
              </div>
              <p className="my-4">If you transfer {orderData.amountToPay} {currency.code} to promptpay ID {offerData.promptpayID}, Please click transferd notify button</p>
              <div className="flex justify-start space-x-4">
                <button 
                  className='p-4 border-2 rounded font-bold text-xl bg-blue-500 text-white' 
                  onClick={transferedNotify}
                >
                  Transfered Notify
                </button>
                <button
                  className='p-4 border-2 rounded transition transform duration-150 hover:bg-red-500 hover:text-white hover:font-bold font-medium text-gray-500' 
                  onClick={cancelOrder}
                >
                  Canel Order    
                </button>
              </div>
          </div>
      )}


      {(offerData.fiatCurrency.code === "USD" && pending === false && success === false ) && (
          <>
              <div className='grid grid-cols-1 place-items-center'>
                <p className='text-4xl font-bold mt-4'> Your Bank Transfer Payment with qr code</p>
                <p>This is fake qr code to simulate real scenario for you to make payment.</p>
                {/* <div dangerouslySetInnerHTML={{__html:qrCodeSVG}}></div> */}
                <Image 
                  src={qrCodeSrc}
                  height={150} width={150}
                />
              </div>
              <p className="my-4">If you transfer {orderData.amountToPay} {currency.code} to {offerData.username} bank account, Please click transferd notify button</p>
              <button 
              className='p-4 border-2 rounded font-bold text-xl bg-blue-500 text-white' 
              onClick={transferedNotify}
            >
              Transfered Notify
            </button>
          </>
      )}

      {pending === true && (
        <div className='grid grid-cols-1 place-items-start mt-10 space-y-4'>
          <p className='text-4xl font-bold text-amber-500'>Pending</p>
          <p className='text-2xl font-medium '>Please wait a minute for transaction proving and running smart contract ...</p>
        </div>
      )}

      {success === true && (
        <div className='grid grid-cols-1 place-items-start mt-10 space-y-4'>
          <p className='text-4xl font-bold text-green-500'>Transaction complete !</p>
          <p className='text-2xl font-medium '>Please check your cryptocurrency on your crypto wallet.</p>

          <button 
            className="mt-10 text-2xl font-bold border-2 bg-amber-400 p-4 rounded place-self-center"
            onClick={goToFeedbackPage}
          >
            Give us your Feedback !
          </button>
      </div>
      )}
    </div>
  )
}

export default Buyer

const cryptos = {
  "BTC":{
      code:"BTC",
      name:"Bitcoin",
      blockchain:"Bitcoin blockchain",
      image:BTC,
  },
  "ETH":{
      code:"ETH",
      name:"Ether",
      blockchain:"Ethereum blockchain",
      image:ETH
  },
  "BNB":{
    code:"BNB",
    name:"Binance Coin",
    blockchain:"BNB chain",
    image:BNB
  },
  "BUSD":{
    code:"BUSD",
    name:"Binance USD",
    blockchain:"BNB chain",
    image:BUSD
  },
  "Matic":{
    code:"Matic",
    name:"Polygon Matic",
    blockchain:"Polygon blockchain",
    image:Matic
  },
  "USDC":{
      code:"USDC",
      name:"USD Coin",
      blockchain:"Ethereum blockchain",
      image:USDC
  },
  "USDT":{
      code:"USDT",
      name:"USD Tether",
      blockchain:"Ethereum blockchain",
      image:USDT
  },
  "DAI":{
      code:"DAI",
      name:"DAI",
      blockchain:"Ethereum blockchain",
      image:DAI
  },
}


const currencies = {
  "THB":{
      code:"THB",
      name:"Thai bath",
      image:THB
  },
  "USD":{
      code:"USD",
      name:"US dollar",
      image:USD,
  },
}