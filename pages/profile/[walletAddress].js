import { useRouter } from 'next/router'
import React from 'react'

const Profile = () => {
    const router = useRouter()
    const {walletAddress} = router.query
  return (
    <div>
        <h1 className='text-xl font-bold'>Profile</h1>
        <p className='text-lg font-medium'>{walletAddress}</p>
        <h1>asdasds</h1>
    </div>
  )
}

export default Profile