import { Dialog, RadioGroup, Switch, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { CashIcon, CreditCardIcon, LibraryIcon, XCircleIcon } from '@heroicons/react/outline';

            
export default function TraderInfo({crypto,currency,traderInfo,fiatCryptoInfo}) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="mt-1 px-4 py-1 font-medium text-black bg-amber-400 rounded-md hover:bg-opacity-90 text-base
            focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition duration-100 transform ease-out"
        >
          Info
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
                    <p>Payment info</p>
                  <XCircleIcon className='h-8 text-red-500 cursor-pointer' onClick={closeModal}/>
                </Dialog.Title>

                <div className="flex items-center justify-start mt-4">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full object-cover" src={traderInfo?.image} alt={traderInfo?.name} />
                    </div>
                    <div className="ml-4">
                        <div className="font-medium text-gray-900">{traderInfo?.name}</div>
                        <div className="text-gray-500">{traderInfo?.transactionHistory?.complete + "% completion"}</div>
                    </div>
                </div>
                
                <div className='w-5/6 mt-4 grid grid-cols-4 gap-6 place-items-start'>
                    <p className='col-span-1 text-gray-500'>Payment</p>
                    <div className='flex col-span-3 space-x-2'>
                        {fiatCryptoInfo?.payment === "All Payments" && <CashIcon className='text-green-500 h-6' />}
                        {fiatCryptoInfo?.payment === "Bank Transfer" && <LibraryIcon className='text-blue-600 h-6' />}
                        {fiatCryptoInfo?.payment === "Credit/Debit Card" && <CreditCardIcon className='text-amber-500 h-6'/>}
                        <p>{fiatCryptoInfo?.payment}</p>
                    </div>
                </div>

                <div className='w-5/6 mt-4'>
                    <div className='grid grid-cols-4 gap-6 place-items-start'>
                        <div className='col-span-1'>
                            <p className='text-gray-500'>Available </p>
                            <p className='text-gray-500'>Limit </p>
                        </div>
                        <div className='col-span-3'>
                            <p className=''>{fiatCryptoInfo?.available} {crypto}</p>
                            <p className=''>{fiatCryptoInfo?.min} {currency} ~ {fiatCryptoInfo?.max} {currency}</p>
                        </div>
                    </div>
                </div>

                <div className='w-5/6 mt-4 grid grid-cols-4 gap-6 place-items-start'>
                    <p className='col-span-1 text-gray-500'>Payment</p>
                    <div className='flex col-span-3 space-x-2'>
                        <p>{fiatCryptoInfo?.price} {currency}</p>
                        <p>for 1 {crypto}</p>
                    </div>
                </div>

                <div className='w-5/6 mt-4'>
                    <p className='font-medium mb-2 text-lg'>Term and Conditions</p>
                    <p>{traderInfo?.transactionDescription}</p>
                </div>
                


                {/* <div className="flex items-center justify-center mt-4">
                    <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 font-bold text-white bg-red-500 rounded-md bg-opacity-70 hover:bg-opacity-100
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition duration-100 transform ease-out"
                    >
                        Close
                    </button>
                </div> */}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
