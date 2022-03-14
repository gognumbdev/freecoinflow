import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { XCircleIcon } from '@heroicons/react/outline';
import Image from "next/image";
import metamaskLogo from "../../public/image/metamask.png"

export default function ConnectWallet({logUserIn}) {
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
          className="px-4 py-2 text-sm font-medium text-black bg-amber-500 rounded-md bg-opacity-70 hover:bg-opacity-90 
            focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition duration-100 transform ease-out"
        >
          Connect Wallet
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
                  className="text-lg font-medium leading-6 text-gray-900 flex justify-between"
                >
                  <span>Connect crypto wallet</span>
                  <XCircleIcon className='h-8 text-red-500 cursor-pointer' onClick={closeModal}/>
                </Dialog.Title>
                <div className="w-full shadow-xl bg-white mt-5 p-2 transform transition duration-150 ease-in rounded-xl
                  cursor-pointer active:scale-90 border-2 hover:-translate-y-1 hover:border-amber-500" >
                  <button className="flex space-x-5 rounded justify-start items-center"
                      onClick={() => {logUserIn();closeModal()}}>
                      <Image 
                          height={60}
                          width={60}
                          src={metamaskLogo}
                          objectFit="cover" 
                          alt="Logo of Metamask wallet"
                      />
                      <p className="text-xl grid grid-cols-1">
                        <span>MetaMask</span>
                        <span className='text-sm text-gray-500'>You may need to click the extension after you click this button.</span>
                      </p>
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
