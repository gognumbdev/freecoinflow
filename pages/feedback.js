import React, { useState } from 'react'
import Head from "next/head"
import {useRouter} from "next/router"

const feedback = () => {
    const [feedbackForm, setFeedbackForm] = useState(false)
    const router = useRouter();
    const goToGoogleForm = () => {
        router.push("https://docs.google.com/forms/d/e/1FAIpQLSfwolAaPkgpsAyeI8AOPK2-8fndpzEqw5JoD2S28PihkM2zCQ/viewform?usp=sf_link")
    }    

    return (
    <div className='grid grid-cols-1 place-items-center py-4'>
        <Head>
            <title>Feedback</title>
        </Head>
        <p className='text-4xl font-bold'>Give us Feedback !</p>
        <p className='text-xl'>Do yo like to answer on</p>
        <button 
            className='p-4 border-2 rounded bg-violet-500 text-white font-bold text-xl my-2'
            onClick={goToGoogleForm}
        >
            Google Form website
        </button>
        <p className=''>Or</p>
        <button 
            className='p-4 border-2 rounded bg-amber-400 border-amber-400  font-bold text-xl my-2 '
            onClick={() => setFeedbackForm(!feedbackForm)}
            >
            Neoflow website
        </button>
        {feedbackForm && 
            <iframe className='w-full'
            src="https://docs.google.com/forms/d/e/1FAIpQLSfwolAaPkgpsAyeI8AOPK2-8fndpzEqw5JoD2S28PihkM2zCQ/viewform?embedded=true" width="640" height="1083" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        }
        
    </div>
  )
}

export default feedback