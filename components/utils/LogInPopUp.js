import Popup from "reactjs-popup"
import Image from "next/image";
import metamaskLogo from "../../public/image/metamask.png"
import { useState } from "react";
import { EyeIcon,EyeOffIcon } from "@heroicons/react/outline";

const LogInPopUp = ({router,logUserIn,triggerPopUp}) => {

    
  return (
    <Popup 
    trigger={triggerPopUp} 
    position="right center"
    modal nested
    >
    {close => (
        <div className='relative h-fit w-full grid grid-cols-1 place-items-center rounded-full p-5 bg-white'>
            {/* Header */}
            <button className="absolute top-0 right-0 border-2 px-3 py-1 text-2xl rounded" onClick={close}>
            &times;
            </button>

            {/* Connect Wallet */}
            <div className="grid grid-cols-1 justify-start">
                <p className="text-4xl font-bold mb-5 place-self-center">Connect Wallet</p>
                <p className="text-xl">Connect your cryptocurrency wallet</p>
                {/* <p>Sorry for your inconvenient we have only 
                    <span
                        className='px-1 text-amber-500 font-bold cursor-pointer text-lg'
                        onClick={() => router.push("https://metamask.io/")}
                    > MetaMask 
                    </span> 
                    wallet for now.
                </p> */}
            </div>
            
            {/* Set of Crypto Wallet for user to cennect*/}
            {/* Metamask */}
            <div className="shadow-xl w-4/6 md:w-3/6 bg-white mt-5 p-2 transform transition duration-150 ease-in
                hover:scale-105 hover:shadow-xl cursor-pointer active:scale-90 " >
                <div className="flex space-x-5 rounded justify-start items-center"
                    onClick={() => {close();logUserIn()}}>
                    <Image 
                        height={60}
                        width={60}
                        src={metamaskLogo}
                        objectFit="cover" 
                        alt="Logo of Metamask wallet"
                    />
                    <p className="text-xl">MetaMask</p>
                </div>
            </div>
            
            <div className="shadow-xl w-4/6 md:w-3/6 bg-white mt-5 py-6 px-2 transform transition duration-150 ease-in
                    hover:scale-105 hover:shadow-xl cursor-pointer active:scale-90 ">
                <div className="flex space-x-5 rounded justify-start items-center"
                    onClick={logUserIn}>
                    <p className="text-xl font-bold">
                        <span className='text-blue-600'>Free</span>
                        <span className='text-amber-500'>Coin</span>
                        <span className='text-blue-600'>Flow</span>
                        <span className="ml-2">Wallet</span>
                        <span className="text-base ml-12 text-red-500">Coming soon !</span>
                    </p>
                </div>
            </div>
            
            {/* Don't have wallet ? Create Free Coin Flow wallet */}




                    
        </div>
            
    )}
    </Popup>
    );
};

export default LogInPopUp;

