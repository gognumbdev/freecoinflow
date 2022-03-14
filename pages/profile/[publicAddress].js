import { useRouter } from 'next/router'
import React, { useState } from 'react'
const config = require("../../next.config")
import { UserCircleIcon ,PencilAltIcon} from '@heroicons/react/solid'
import Head from 'next/head'
import { useDispatch } from 'react-redux'
import { logIn } from '../../redux/actions/userAction'

const Profile = ({userData}) => {
  const router = useRouter()
  const {publicAddress} = router.query
  const dispatch = useDispatch();
  const {username,image,promptpayID,description,bankAccount,bankName} = userData
  const [edit, setEdit] = useState(false)
  const [usernameInput, setUsernameInput] = useState(username)
  const [promptpayIDInput, setPromptpayIDInput] = useState(promptpayID)
  const [descriptionInput, setDescriptionInput] = useState(description)
  const [bankAccountInput, setBankAccountInput] = useState("")
  const [bankNameInput, setBankNameInput] = useState("")

  const handleSubmitEditProfile = async () => {
    let editData = {usernameInput,promptpayIDInput,descriptionInput,bankAccountInput,bankNameInput}
    let res = await fetch(`${config.domainName}/api/user/${publicAddress}`,{
      method:"POST",
      body:JSON.stringify(editData)
    })
    let data = await res.json();
    dispatch(logIn({
      username:data.username,
      publicAddress: data.publicAddress,
      promptpayID:data.promptpayID || "",
      description:data.description,
      bankName:data.bankName,
      bankAccount:data.bankAccount,
    }))
    console.log(data)
    router.push(`${config.domainName}/profile/${publicAddress}`)
    setEdit(!edit);
    
  }
  
  return (
    <div className='grid grid-cols-1 place-items-start px-40 py-10 gap-y-4 font-bold w-full'>
        <Head>
          <title>{username} profile</title>
        </Head>

        <h1 className='text-3xl font-bold'>Profile</h1>
        <UserCircleIcon className='w-40 h-40 text-blue-500 ml-10' />
        
        <div 
          className='border-2 flex space-x-4 rounded px-4 py-1 items-center border-amber-500 cursor-pointer ml-10'
          onClick={() => setEdit(!edit)}  
          >
          <PencilAltIcon className="w-10 h-10 text-amber-500" />
          <p>Edit your profile</p>
        </div>

        {edit ? (
          <div className='grid grid-cols-1 place-items-start px-10 py-10 gap-y-4 font-bold w-full'>
            <p className='text-2xl'>Edit</p>
            <div className='grid grid-cols-6 place-items-start text-xl gap-x-20'>
              <p className='text-gray-500 font-bold'>username</p>
              <input type="text" value={usernameInput} placeholder={usernameInput} 
                className="border-2 rounded py-1 px-2 outlined-none font-medium" 
                onChange={(e) => setUsernameInput(e.target.value)}
              />
            </div>

            <div className='grid grid-cols-6 place-items-start text-xl gap-x-4'>
              <p className='text-gray-500 font-bold'>Blockchain Address</p>
              <p className='col-span-4'>{publicAddress}</p>
            </div>
            
            <div className='grid grid-cols-1 place-items-start text-xl gap-x-4'>
              <div className='grid grid-cols-6 gap-x-12'>
                <p className='text-gray-500 font-bold'>PromptpayID</p>
                <input type="text" value={promptpayIDInput} placeholder={promptpayIDInput} 
                  className="border-2 rounded py-1 px-2 outlined-none font-medium" 
                  onChange={(e) => setPromptpayIDInput(e.target.value)}
                />
              </div>
            </div>

            <div className='grid grid-cols-6 place-items-start text-xl gap-x-4'>
              <p className='text-gray-500 font-bold'>Bank Name</p>
              <input type="text" value={bankNameInput} placeholder={bankNameInput} 
                className="border-2 rounded py-1 px-2 outlined-none font-medium" 
                onChange={(e) => setBankNameInput(e.target.value)}
              />
            </div>
            <div className='grid grid-cols-6 place-items-start text-xl gap-x-4'>
              <p className='text-gray-500 font-bold'>Bank Account</p>
              <input type="text" value={bankAccountInput} placeholder={bankAccountInput} 
                className="border-2 rounded py-1 px-2 outlined-none font-medium" 
                onChange={(e) => setBankAccountInput(e.target.value)}
              />
            </div>


            <div className='grid grid-cols-6 place-items-start text-xl w-full'>
              <p className='text-gray-500 font-bold'>Description</p>
              <textarea type="text" value={descriptionInput} placeholder={descriptionInput} 
                className="border-2 rounded py-1 px-2 outlined-none font-medium w-full col-span-4 h-fit" 
                onChange={(e) => setDescriptionInput(e.target.value)}
              />
            </div>            
            
            <button 
              className='border-2 p-4 text-xl font-bold bg-green-500 text-white rounded place-self-center'
              onClick={handleSubmitEditProfile}  
            >
              Submit Edit
            </button>
          </div>

        ) : (
          <div className='grid grid-cols-1 place-items-start px-10 py-10 gap-y-4 font-bold'>
            <div className='grid grid-cols-6 place-items-start text-xl gap-x-20'>
              <p className='text-gray-500 font-bold'>username</p>
              <p className='col-span-4'>{username}</p>
            </div>

            <div className='grid grid-cols-6 place-items-start text-xl'>
              <p className='text-gray-500 font-bold'>Blockchain Address</p>
              <p className='col-span-4'>{publicAddress}</p>
            </div>
            
            <div className='grid grid-cols-1 place-items-start text-xl gap-x-4'>
              <div className='grid grid-cols-6 gap-x-12'>
                <p className='text-gray-500 font-bold'>PromptpayID</p>
                <p className='col-span-4'>{promptpayID}</p>
              </div>
            </div>

            <div className='grid grid-cols-6 place-items-start text-xl gap-x-4'>
              <p className='text-gray-500 font-bold'>Bank Name</p>
              <p>{bankName}</p>
            </div>

            <div className='grid grid-cols-6 place-items-start text-xl gap-x-4'>
              <p className='text-gray-500 font-bold'>Bank Account</p>
              <p>{bankAccount}</p>
            </div>

            <div className='grid grid-cols-6 place-items-start text-xl'>
              <p className='text-gray-500 font-bold'>Description</p>
              <p className='col-span-4'>{description}</p>
            </div>            
          </div>
        )}
        

        
    </div>
  )
}

export default Profile

// This gets called on every request
export async function getServerSideProps(context) {
  let publicAddress = context.params.publicAddress;
  // fetch order data
  const res = await fetch(`${config.domainName}/api/user/${publicAddress}`)
  const userData = await res.json()
  
  return { props: { userData} }
}
