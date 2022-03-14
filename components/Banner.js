import {useRouter} from "next/router"
import LocalExchange from  "./presentation/LocalExchange"
import GlobalExchange from "./presentation/GlobalExchange"
const Banner = () => {
    const router = useRouter();
    const goToP2PExchange = () => {
        router.push("/p2pexchange")
    }
    return (
        <div className='grid grid-cols-1  w-4/6 px-12 py-14 justify-between space-y-16 text-black '>
                {/* Text */}
                <div className="grid grid-cols-1 place-items-start space-y-10 w-5/6 place-self-center">
                    <p className="text-4xl font-bold place-self-center">
                        Buy and sell your cryptocurrency directly to your own blockchain address.
                    </p>
                    <p className="text-2xl">
                        Neoflow facilitate peer to peer fiat-crypto exchange on local and crypto-cypto exchange on global. These can transact with your own crypto wallet such as MetaMask.
                    </p>
                    <p className="text-2xl font-regular ">
                        This is MVP of our platform so it doesn't charge your money, Just try it and give your feedback to Neoflow team.
                        We hope this platform help your life easier.
                    </p>
                </div>
                
                <div className="grid grid-cols-1">
                    <p className=" text-2xl font-bold  place-self-center">Fiat currency to Cryptocurrency</p>
                    <LocalExchange />
                </div>

                {/* <div className="grid grid-cols-1">
                    <p className=" text-2xl font-bold  place-self-center">Cryptocurrency to Cryptocurrency</p>
                    <GlobalExchange />
                </div>
                 */}
                <button className=" bg-amber-400 w-fit place-self-center p-4 rounded-full font-bold text-xl 
                    hover:scale-105 transition-200 transform duration-300 ease-out "
                    onClick={goToP2PExchange} >
                    Try it now !
                </button>
        </div>
    )
}

export default Banner
