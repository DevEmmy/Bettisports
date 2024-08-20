"use client"
import EachBlog from '@/components/Blog/EachBlog'
import EachNotification from '@/components/Notifications/EachNotification'
import Settings from '@/components/Notifications/Settings'
import React, { useState } from 'react'
import { RiSettings2Line } from 'react-icons/ri'

const page = () => {
    const [showSettings, setShow] = useState(false)
    return (
        <div className='md:grid grid-cols-6 gap-5 px-5 md:px-xPadding my-10'>
            <div className='md:grid grid-cols-6 col-span-6 my-2.5 md:my-0'>
                <div />
                <div className='flex justify-between col-span-4 w-full items-center'>
                    <p className='text-[24px] font-[600]'>Notifications</p>

                    <div  className="flex gap-1.5 md:gap-3 items-center">
                        <RiSettings2Line onClick={()=> setShow(true)} className='cursor-pointer' />
                        
                        <div className='text-secondaryBlue font-[600]'>
                            <p>Mark all as read</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src="./ads.png" className='h-[90px] md:h-min object-cover bg-left-top w-full' alt="" />

            <div className='col-span-4 flex flex-col divide-y'>
                {
                    [0, 1]?.map((item, i) => {
                        return (
                            <EachNotification key={i}/>
                        )
                    })
                }
                <div className='grid grid-cols-[0.5fr_5fr_1.5fr] border-b-2 border-b-gray-400 py-2'>
                    <div />
                    <p className=''>
                        New post in Articles
                    </p>
                </div>
            </div>

            <img src="./ads2.png" className='my-3 h-[90px] md:h-min object-cover w-full' alt="" />

            {
                showSettings && <Settings close={()=> setShow(false)} />
            }
        </div>
    )
}

export default page