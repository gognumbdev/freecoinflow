/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import BTC from "../../public/icons/crypto/BTC.png"
import ETH from "../../public/icons/crypto/ETH.png"
import Matic from "../../public/icons/crypto/Matic.png"
import USDC from "../../public/icons/crypto/USDC.png"
import USDT from "../../public/icons/crypto/USDT.png"
import DAI from "../../public/icons/crypto/DAI.png"
import BNB from "../../public/icons/crypto/BNB.png"
import BUSD from "../../public/icons/crypto/BUSD.png"
import Image from "next/image"
import { useDispatch } from 'react-redux'
import { selectCrypto } from '../../redux/actions/tradeAction'
import { useSelector } from 'react-redux'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SelectCrypto({label}) {
  const dispatch = useDispatch(); 
  const trade = useSelector(state => state.trade)
  const [selected, setSelected] = useState(trade.crypto)

  useEffect(() => {
    dispatch(selectCrypto(selected))
  }, [selected])
  

  return (
    <Listbox value={selected} onChange={setSelected} className="w-64">
      {({ open }) => (
        <div className='w-full'>
          <Listbox.Label className="block text-lg font-medium text-gray-700">{label}</Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm cursor-pointer">
              <div className="flex items-center">
                <Image src={selected.image} height={30} width={30} objectFit="cover" className="flex-shrink-0 h-6 w-6 rounded-full" />
                <section className='flex-col'>
                    <p className="ml-3 block truncate">{selected.code}</p>
                    <p className='ml-3 text-gray-500'>{selected.name}</p>
                </section>
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
                {cryptos.map((crypto,index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-blue-100' : 'text-gray-900',
                        'cursor-pointer select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={crypto}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <Image src={crypto.image} height={30} width={30} objectFit="cover" className="flex-shrink-0 h-6 w-6 rounded-full" />
                          <section className='flex-col'>
                              <p className="ml-3 block truncate">{crypto.code}</p>
                              <p className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate text-gray-500')}>{crypto.name}</p>
                          </section>
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

const cryptos = [
    {
        code:"BTC",
        name:"Bitcoin",
        blockchain:"Bitcoin blockchain",
        image:BTC,
    },
    {
        code:"ETH",
        name:"Ether",
        blockchain:"Ethereum blockchain",
        image:ETH
    },
    {
      code:"BNB",
      name:"Binance Coin",
      blockchain:"BNB chain",
      image:BNB
    },
    {
      code:"BUSD",
      name:"Binance USD",
      blockchain:"BNB chain",
      image:BUSD
    },
    {
      code:"Matic",
      name:"Polygon Matic",
      blockchain:"Polygon blockchain",
      image:Matic
    },
    {
        code:"USDC",
        name:"USD Coin",
        blockchain:"Ethereum blockchain",
        image:USDC
    },
    {
        code:"USDT",
        name:"USD Tether",
        blockchain:"Ethereum blockchain",
        image:USDT
    },
    {
        code:"DAI",
        name:"DAI",
        blockchain:"Ethereum blockchain",
        image:DAI
    },
]