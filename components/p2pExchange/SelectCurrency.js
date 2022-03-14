/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import USD from "../../public/icons/currency/USD.png"
import THB from "../../public/icons/currency/THB.png"
import Image from "next/image"
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrency } from '../../redux/actions/tradeAction'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
export default function SelectCurrency({setCurrency}) {
  const dispatch = useDispatch(); 
  const trade = useSelector(state => state.trade)
  const [selected, setSelected] = useState(trade.currency)

  useEffect(() => {
    dispatch(selectCurrency(selected))
  }, [selected])
  


return (
    <Listbox value={selected} onChange={setSelected} className="w-64">
    {({ open }) => (
        <div className='w-full'>
        <Listbox.Label className="block text-lg font-medium text-gray-700">Fiat Currency</Listbox.Label>
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
                {currencies.map((currency,index) => (
                <Listbox.Option
                    key={index}
                    className={({ active }) =>
                    classNames(
                        active ? 'bg-blue-100' : 'text-gray-900',
                        'cursor-pointer select-none relative py-2 pl-3 pr-9'
                    )
                    }
                    value={currency}
                >
                    {({ selected, active }) => (
                    <>
                        <div className="flex items-center">
                        <Image src={currency.image} height={30} width={30} objectFit="cover" className="flex-shrink-0 h-6 w-6 rounded-full" />
                        <section className='flex-col'>
                            <p className="ml-3 block truncate">{currency.code}</p>
                            <p className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate text-gray-500')}>{currency.name}</p>
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

const currencies = [
    {
        code:"THB",
        name:"Thai bath",
        image:THB
    },
    {
        code:"USD",
        name:"US dollar",
        image:USD,
    },
    // {
    //     code:"EUR",
    //     name:"EURO",
    //     image:EURO
    // },
    // {
    //     code:"CAD",
    //     name:"Canadian bollar",
    //     image:CND,
    // },
    // {
    //     code:"INR",
    //     name:"Indian rupee",
    //     image:INR,
        
    // },
    // {
    //     code:"RUB",
    //     name:"Russian ruble",
    //     image:RUB,
    // },
    // {
    //     code:"NGN",
    //     name:"Nigerian naira",
    //     image:NGN,
    // },
    // {
    //     code:"BRL",
    //     name:"Brazilian real",
    //     image:BRL,
    // },
    // {
    //     code:"PKR",
    //     name:"Pakistani repee",
    //     image:PKR,
    // },
    // {
    //     code:"IDR",
    //     name:"Indonesian rupiah",
    //     image:IDR,
    // },
    // {
    //     code:"VND",
    //     name:"Vietnamese dong",
    //     image:VND,
    // },
    // {
    //     code:"UAH",
    //     name:"Ukrainian hryvnia",
    //     image:UAH,
    // },
    // {
    //     code:"PHP",
    //     name:"Philippine peso",
    //     image:PHP,
    // },
    // {
    //     code:"GBP",
    //     name:"Pound sterling",
    //     image:GBP,
    // },
    // {
    //     code:"TRY",
    //     name:"Turkish lira",
    //     image:TRY,
    // },
    // {
    //     code:"JPY",
    //     name:"Japanese yen",
    //     image:JPY,
    // },
    // {
    //     code:"AUD",
    //     name:"Australian dollar",
    //     image:AUD,
    // },
    // {
    //     code:"HKD",
    //     name:"Hong Kong dollar",
    //     image:HKD,
    // },
]



