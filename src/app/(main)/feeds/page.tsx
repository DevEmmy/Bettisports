"use client";

import EachFeed from '@/components/Feeds/EachFeed';
import GrayLine from '@/components/UI/GrayLine'
import React, { useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { getUser } from '@/hooks/UserRequests'


const page = () => {
    const [active,setActive] = useState(0);

    const user = getUser()

    if (!user) {
      return null
    } 

    const filter = [
        "Trending",
        "Popular",
        "Recommended",
        "New Topic",
        "Mentions"
    ]


    return (
        <div>
            <div className='w-1/2 m-auto flex flex-col gap-2 my-10'>
                <p className='text-[24px] font-[700] text-primary1'>Hi, {user.firstName}.</p>
                <div className='flex-center justify-between'>
                    <p className='text-gray-500'>Find topics you'd like to read.</p>

                    <div className='bg-defaultYellow text-white size-[40px] rounded-full flex flex-all-center'>
                        <RiSearch2Line size={30}/>
                    </div>
                </div>

                <div className='flex gap-5 items-center'>
                    <img src="./img.jpg" alt="" className='size-[50px] rounded-full '/>
                    <input type="text" placeholder="What is new?" className='border w-full rounded-3xl p-3'/>
                </div>

                <GrayLine />

                <div className='flex-center gap-2 '>
                    {
                        filter.map((f, i)=>{
                            return(
                                <div className={`${active == i ? "bg-secondaryBlue text-white" : "bg-transparent border text-gray-600"} py-2 px-5 cursor-pointer`} onClick={()=> setActive(i)}>
                                    {f}
                                </div>
                            )
                        })
                    }
                </div>

                <div className='flex gap-5 flex-col my-5'>
                    <EachFeed />
                    <EachFeed />
                    <EachFeed />
                    <EachFeed />
                    <EachFeed />
                </div>

            </div>
        </div>
    )
}

export default page