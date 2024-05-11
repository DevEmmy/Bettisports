import GrayLine from '@/components/UI/GrayLine'
import Link from 'next/link'
import React from 'react'
import { RiEye2Line, RiEyeLine, RiFacebookCircleFill, RiFacebookFill, RiGoogleFill } from 'react-icons/ri'

const page = () => {
    return (
        <div className='flex mt-32 flex-col text-start w-2/3 m-auto gap-5'>
            <div>
                <p className='text-[40px] font-[600]'>Log in</p>
                <p className='font-[500]'>Welcome back!</p>
            </div>

            <form action="" className='flex flex-col gap-3'>
                <input type="text" className='focus:outline-secondaryBlue bg-gray-50 focus:bg-white w-full p-4 rounded-xl' placeholder='Email' />
                <div className='flex-center gap-2 w-full p-4 bg-gray-50 focus:outline-secondaryBlue focus:bg-white  rounded-xl'>
                    <input type="text" className='focus:outline-none w-full bg-transparent ' />
                    <RiEyeLine className='cursor-pointer' />
                </div>
                <button className='bg-secondaryBlue text-white p-4 rounded-xl '>Login</button>
            </form>

            <Link href={"/reset-password"} className='text-secondaryBlue text-center text-[18px] font-[500]'>Forgot your Password?</Link>

            <div className='flex-center justify-center gap-2 '>
                <GrayLine />
                    <p className='text-gray-600'>OR</p>
                <GrayLine />
            </div>

            <div className="grid grid-cols-2 gap-5">
                <div className='flex-all-center rounded-2xl p-4 border gap-2 cursor-pointer'>
                    <RiFacebookCircleFill className='text-blue-500 ' size={30} />
                    <p>Facebook</p>
                </div>

                <div className='flex-all-center rounded-2xl p-4 border gap-2 cursor-pointer'>
                    <RiGoogleFill className='' size={30} />
                    <p>Google</p>
                </div>
            </div>

        </div>
    )
}

export default page