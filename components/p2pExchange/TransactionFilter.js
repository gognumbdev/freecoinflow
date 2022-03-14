import { Tab } from '@headlessui/react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTransaction } from '../../redux/actions/tradeAction';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TransactionFilter() {
  const dispatch = useDispatch(); 
  const {transaction,crypto,currency,payment} = useSelector(state => state.trade)
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    switch(transaction){
      case "buy" :
        handleTabChange(0)
        break;
      case "sell" :
        handleTabChange(1)
        break;
      case "offer" :
        handleTabChange(2)
        break;
      default:
        handleTabChange(0)
        break;
    }
  
  }, [transaction])
  

  const handleTabChange = (index) => {
        console.log(index)
        switch(index) {
            case 0:
                dispatch(selectTransaction("buy"))
                setSelectedIndex(0);
                break;
            case 1:
                dispatch(selectTransaction("sell"))
                setSelectedIndex(1);
                break;
            case 2:
                dispatch(selectTransaction("offer"))
                setSelectedIndex(2);
                break;
            default:
                dispatch(selectTransaction("buy"))
                setSelectedIndex(0);
                break;
        }
    }
    
    

  return (
    <div className="w-full max-w-md px-2 py-8 sm:px-0">
      <Tab.Group onChange={handleTabChange} selectedIndex={selectedIndex}>
        <Tab.List className="flex p-1 space-x-1 bg-white border-2 rounded-xl">
            {/* Buy */}
            <Tab
              key="0"
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-xl leading-5 font-bold text-black rounded-lg',
                  'focus:outline-none',
                  selected
                    ? 'bg-green-500 shadow text-white'
                    : 'text-black hover:text-green-500'
                )}>
              Buy
            </Tab>
            {/* Sell */}
            <Tab
              key="1"
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-xl leading-5 font-bold text-black rounded-lg',
                  'focus:outline-none',
                  selected
                    ? 'bg-red-500 shadow text-white'
                    : 'text-black hover:text-red-500'
                )}>
              Sell
            </Tab>

            {/* Offer */}
            <Tab
              key="2"
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-xl leading-5 font-bold text-balck rounded-lg',
                  'focus:outline-none',
                  selected
                    ? 'bg-blue-500 text-white shadow'
                    : 'text-black hover:text-blue-500'
                )}>
              Offer
            </Tab>
          
        </Tab.List>
      </Tab.Group>
    </div>
  )
}
