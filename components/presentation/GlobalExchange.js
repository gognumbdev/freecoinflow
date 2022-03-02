import { CashIcon, SwitchHorizontalIcon,CreditCardIcon,UserCircleIcon} from "@heroicons/react/outline"
import Image from "next/image"
import BTC from "../../public/icons/crypto/BTC.png"
import ETH from "../../public/icons/crypto/ETH.png"
import USDC from "../../public/icons/crypto/USDC.png"
import USDT from "../../public/icons/crypto/USDT.png"
import DAI from "../../public/icons/crypto/DAI.png"
import Matic from "../../public/icons/crypto/Matic.png"

const LocalExchange = () => {
  return (
        <div className="grid grid-cols-3">
             {/* Cryptocurrency user */}
             <div className="flex justify-center items-center space-x-6 px-2 py-4 bg-white shadow-xl rounded-xl">
                <div className="grid grid-cols-1 place-items-center">
                    <p className="text-xl font-bold ">Crypto user</p>
                    <UserCircleIcon className="h-12 rounded-full bg-white text-violet-500 " />
                </div>
                <div className="grdi grid-cols-1 w-3/6">
                    <div className="flex space-x-4 justify-around items-center py-2 px-1">
                        <Image 
                            src={BTC}
                            height={35}
                            width={35}
                            objectFit="cover"
                        />
                        <Image 
                            src={ETH}
                            height={35}
                            width={35}
                            objectFit="cover"
                        />
                        <Image 
                            src={Matic}
                            height={35}
                            width={35}
                            objectFit="cover"
                        />
                    </div>

                    <div className="flex space-x-2 justify-around items-center p-2">
                        <Image 
                            src={USDC}
                            height={35}
                            width={35}
                            objectFit="cover"
                        />
                        <Image 
                            src={USDT}
                            height={35}
                            width={35}
                            objectFit="cover"
                        />
                        <Image 
                            src={DAI}
                            height={35}
                            width={35}
                            objectFit="cover"
                        />
                    </div>
                    
                        
                </div>
            </div>
            
            {/* Exchange */}
            <div className="grid grid-cols-1 place-items-center">
                <p className="text-xl font-bold">Global Exchange</p>
                <SwitchHorizontalIcon className="h-16 text-blue-600" />
                <p>with prove mechanism</p>
            </div>

            {/* Cryptocurrency user */}
            <div className="flex justify-center items-center space-x-6 px-2 py-4 bg-white shadow-xl rounded-xl">
                <div className="grdi grid-cols-1 w-3/6">
                    <div className="flex space-x-4 justify-around items-center py-2 px-1">
                        <Image 
                            src={BTC}
                            height={35}
                            width={35}
                            objectFit="cover"
                        />
                        <Image 
                            src={ETH}
                            height={35}
                            width={35}
                            objectFit="cover"
                        />
                        <Image 
                            src={Matic}
                            height={35}
                            width={35}
                            objectFit="cover"
                        />
                    </div>

                    <div className="flex space-x-2 justify-around items-center p-2">
                        <Image 
                            src={USDC}
                            height={35}
                            width={35}
                            objectFit="cover"
                        />
                        <Image 
                            src={USDT}
                            height={35}
                            width={35}
                            objectFit="cover"
                        />
                        <Image 
                            src={DAI}
                            height={35}
                            width={35}
                            objectFit="cover"
                        />
                    </div>
                    
                        
                </div>
                <div className="grid grid-cols-1 place-items-center">
                    <p className="text-xl font-bold ">Crypto user</p>
                    <UserCircleIcon className="h-12 rounded-full bg-white text-violet-500 " />
                </div>
            </div>
        </div>
  )
}

export default LocalExchange