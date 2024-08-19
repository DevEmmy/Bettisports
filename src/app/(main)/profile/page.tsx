"use client"
import Line from '@/components/UI/Line';
import { getUser } from '@/hooks/UserRequests'
import React from 'react'

const Profile = () => {
    const user = getUser();

    if(!user){
        return null
    }

    return (
        <div className='md:grid grid-cols-5 gap-10 px-5 md:px-xPadding my-10'>
            <div className='flex items-center gap-2 md:grid grid-cols-5 col-span-5'>
                <div className='hidden md:flex' />
                <p className='col-span-4 font-[600] text-base'>Profile</p>
                <div className='grow'>
                    <Line/>
                </div>
            </div>
            
            {/* Ads will be here */}

            <div className='grid col-span-3 grid-cols-[1fr_3fr] my-2 md:my-0'>

                <div className='col-span-3 grid-cols-[1fr_3fr] grid my-2 md:my-0'>
                    <div className='flex flex-col gap-5'>
                        <img src={user.profilePicture} alt="" className='size-[60px] md:size-[120px] rounded-full' />
                        <p className='text-sm text-red-500 '>Remove Picture</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className=' font-[600]'>Account Data</p>

                        <div className='flex flex-col gap-2'>
                            <p className='text-sm'>Name</p>
                            <div className='border p-3 rounded-lg text-sm'>
                                {user.firstName + " " + user.lastName}
                            </div>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className='text-sm'>Email</p>
                            <p className='bg-gray-100 text-black p-3 rounded-lg text-sm'>{user.email}</p>
                        </div>
                    </div>
                </div>


                <div />
                <p className='text-sm text-red-500 underline'>Close my account</p>


            </div>



            <img src="./ads2.png" alt="" className='h-[90px] md:h-min w-full my-6 md:my-0 md:w-min' />
        </div>
    )
}

export default Profile