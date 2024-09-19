"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { HiCheck } from 'react-icons/hi';


const page = () => {
  const [send, setSend] = useState(false);

  if (send) {
    return (
      <div className='flex mt-32 flex-col text-start w-4/5 md:w-2/3 m-auto gap-5'>
        <div className='bg-secondaryBlue size-[70px] rounded-full flex-all-center text-white'>
        <HiCheck size={36}/>
        </div>
        <div>
          <p className='text-[40px] font-[600] leading-none mb-2'>Check your email</p>
          <p className='font-[500]'>To confirm your account, click the link in the email that sent to Alexadams@gmail.com</p>
        </div>
        <p className='text-gray-500'>
          Did not receive the email? Check your spam filter, or <span className='cursor-pointer text-secondaryBlue' onClick={() => setSend(false)}>Try another email address.</span>
        </p>


      </div>
    )
  }

  else {
    return (
      <div className='flex mt-32 flex-col text-start w-4/5 md:w-2/3 m-auto gap-5'>
        <div>
          <p className='text-[40px] font-[600] leading-none mb-2'>Reset Password</p>
          <p className='font-[500]'>We will send you an email with instructions
            on how to reset your password.</p>
        </div>

        <form action="" className='flex flex-col gap-3'>
          <input type="text" className='focus:outline-secondaryBlue bg-gray-50 focus:bg-white w-full p-4 rounded-xl' placeholder='Email' />

          <button className='bg-secondaryBlue text-white p-4 rounded-xl ' onClick={() => setSend(true)}>Send</button>
        </form>

        <Link href={"/sign-in"} className='text-secondaryBlue text-center  font-[500]'>Return to Login</Link>
      </div>
    )
  }

}

export default page