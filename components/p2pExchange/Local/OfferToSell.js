import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { XCircleIcon } from '@heroicons/react/outline';
import Image from "next/image";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
const config = require("../../../next.config")

export default function OfferToBuy({buyerInfo}) {
  const router = useRouter();
  const {transaction,crypto,currency,payment} = useSelector(state => state.trade)
  const {publicAddress} = useSelector(state => state.user)
  let [isOpen, setIsOpen] = useState(false)
  const [spendCrypto, setSpendCrypto] = useState(0.0)
  const [receive, setReceive] = useState(0.0)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    if(publicAddress === buyerInfo?.publicAddress) {
      alert("Sorry it's your offer. You can't buy your own offer.")
    }else{
      setIsOpen(true)
    }
  }

  const handleSpendCrypto = (e) => {
    let spendAmount = e.target.value;
    let receiveAmount = spendAmount*buyerInfo.price
    setSpendCrypto(spendAmount);
    setReceive(receiveAmount)
  }
  
  // State -> order,pending,checked,transfer,(success or fail)
  const submitOrder = async () => {
    let order = Date.now();
    let orderData = {
      order:order,
      offerNo:buyerInfo.offerNo,
      offerType:"buy",
      sellerPublicAddress:publicAddress,
      buyerPublicAddress:buyerInfo.publicAddress,
      amountToPay:spendCrypto,
      amountToReceive:receive,
      description:`Order number ${order} was start.`,
      transactionState:["order"],
      date:new Date(order).toString(),
      cryptoCode:crypto.code,
      currencyCode:currency.code
    }

    let res = await fetch(`${config.domainName}/api/fiatCrypto/${order}`,{
      method:"POST",
      body:JSON.stringify(orderData)
    })
    let data = await res.json();

    
    console.log("Posted data : ",data)
    router.push({
      pathname:"/p2pexchange/fiatCrypto/[order]",
      query:{
        order:order,
      }
    })
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-opacity-90 
            focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition duration-100 transform ease-out"
        >
          Sell {crypto.code}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto "
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center"
                >
                  <p>Offer to Sell {crypto.name}</p>
                  <XCircleIcon className='h-8 text-red-500 cursor-pointer' onClick={closeModal}/>
                </Dialog.Title>
                 
                 {/* Body of this modal */}
                 <div className='w-5/6 mt-4'>
                    <label htmlFor="price" className="block text-lg font-medium text-gray-700">
                        Amount to spend
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm border-2 flex p-2 justify-between ">
                        <input
                        type="number"
                        name="amount"
                        id="price"
                        className="outline-none "
                        placeholder="0.00"
                        step={10}
                        value={spendCrypto}
                        onChange={handleSpendCrypto}
                        />
                        {/* Currency Units */}
                        <span className=''>{crypto.code}</span>
                    </div>
                </div>

                <div className='w-5/6 mt-4'>
                    <label htmlFor="price" className="block text-lg font-medium text-gray-700">
                        You will receive 
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm border-2 flex p-2 justify-between ">
                        <span>{receive}</span>
                        {/* Currency Units */}
                        <span className=''>{currency.code}</span>
                    </div>
                </div>

                <div className="flex items-center justify-center mt-4">
                    <button
                    type="button"
                    onClick={submitOrder}
                    className="px-4 py-2 font-bold text-white bg-red-500 rounded-md hover:bg-opacity-90 
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition duration-100 transform ease-out"
                    >
                        Sell {crypto.code}
                    </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
