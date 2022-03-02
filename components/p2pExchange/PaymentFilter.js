import { CashIcon,CreditCardIcon,LibraryIcon,DeviceMobileIcon } from '@heroicons/react/outline';
import { useEffect, useState,Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import Image from "next/image"
import promptpayIcon from "../../public/image/icons/promptpay.png"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PaymentFilter({setPayment}) {

  const [selected, setSelected] = useState(payments[0])

  useEffect(() => {
    setPayment(selected)
  }, [selected])
  

  return (
    <Listbox value={selected} onChange={setSelected} className="w-64">
      {({ open }) => (
        <div className='w-full'>
          <Listbox.Label className="block text-lg font-medium text-gray-700">Payment</Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm cursor-pointer">
              <div className="flex items-center">
                {selected.icon}
                <p className='ml-3 text-gray-500'>{selected.name}</p>
              </div>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {payments.map((payment,index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-blue-100' : 'text-gray-900',
                        'cursor-pointer select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={payment}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          {payment.icon}
                          <p className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate text-gray-500')}>{payment.name}</p>                          
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-gray-500' : 'text-blue-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  )
}
const payments = [
    // {
    //     name:"All Payments",
    //     icon:<CashIcon className='text-green-500 h-6'  />
    // },
    // {
    //     name:"Bank Transfer",
    //     icon:<LibraryIcon className='text-blue-600 h-6' />
    // },
    // {
    //     name:"Credit/Debit card",
    //     icon:<CreditCardIcon className='text-amber-500 h-6'/>
    // },
    {
      name:"Mobile Banking (Promptpay)",
      icon:<DeviceMobileIcon className='h-10 text-blue-500' />
    },
]
