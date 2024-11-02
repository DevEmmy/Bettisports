"use client"
import React, { useState } from 'react'
import { RiFacebookCircleFill, RiInstagramFill, RiTwitterXFill } from 'react-icons/ri'
import Trending from './Trending'
import Recents from './Recents'
import Popular from './Popular'

const CategoricalNews = () => {
    const [active, setActive] = useState(0)
    const filter = [
        {
            title: "Trending",
            tag: <Trending howMany={3} />
        },
        {
            title: "Recents",
            tag: <Recents howMany={3}/>
        },
        {
            title: "Popular",
            tag: <Popular howMany={3}/>
        }
    ]

  return (
    <div className='p-3'>
        <div className='flex justify-between items-center border-b border-b-gray-400 '>
            {
                filter?.map((item: any, i: number)=> {
                    return(
                        <div key={i} className={`text-[14px] text-grayColor ${active == i && "text-black font-[800] border-b-2 border-b-secondaryBlue"} cursor-pointer transition-all pb-3`} onClick={()=> setActive(i)}>
                            {item?.title}
                        </div>
                    )
                })
            }
        </div>

        <div className="flex flex-col my-4 divide-y">
            {
                filter[active].tag
            }               
            
        </div>

        <div>
            <p className='text-[18px] font-[600]'>Follow us on Social Media</p>
            <div className="flex gap-3">
                <RiFacebookCircleFill size={25} />
                <RiTwitterXFill size={25}/>
                <RiInstagramFill size={25}/>
            </div>
        </div>
    </div>
  )
}

export default CategoricalNews