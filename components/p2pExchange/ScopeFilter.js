import { Tab } from '@headlessui/react'
import { GlobeIcon, HomeIcon } from '@heroicons/react/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TransactionFilter({setScope}) {
    
    const handleScopeChange = (index) => {
        switch(index) {
            case 0:
                setScope("local");
                break;
            case 1:
                setScope("global");
                break;
            default:
                setScope("local");
                break;
        }
    }

  return (
    <div className="w-full max-w-md px-2 py-8 sm:px-0">
      <Tab.Group onChange={handleScopeChange}>
        <Tab.List className="flex p-1 space-x-1 bg-white border-2 rounded-xl">
            {/* Buy */}
            <Tab
              key="0"
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-xl leading-5 font-bold text-black rounded-lg',
                  'focus:outline-none',
                  selected
                    ? 'bg-blue-500 shadow text-white'
                    : 'text-black hover:text-blue-500'
                )}>
                    <div className='flex space-x-2 items-center justify-center'>
                        <HomeIcon className='h-6'/>
                        <span>Local</span>
                    </div>
              
            </Tab>
            {/* Sell */}
            <Tab
              key="1"
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-xl leading-5 font-bold text-black rounded-lg',
                  'focus:outline-none',
                  selected
                    ? 'bg-green-500 shadow text-white'
                    : 'text-black hover:text-green-500'
                )}>
                    <div className='flex space-x-2 items-center justify-center'>
                        <GlobeIcon className='h-6' />
                        <span>Global</span>
                    </div>
            </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  )
}
