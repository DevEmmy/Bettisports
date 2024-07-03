"use client"
import { useFetchTrending } from '@/hooks/PostRequests'
import React, { useState } from 'react'
import { RiFacebookCircleFill, RiInstagramFill, RiTwitterXFill } from 'react-icons/ri'
import Loader from '../Loader'
import Trending from './Trending'
import Popular from './Popular'

const CategoricalNews = () => {
    const [active, setActive] = useState(0)
    const filter = [
        {   id: 0,
            title: "Trending",
            tag: <Trending />
        },
        {   id: 1,
            title: "Recents",
            tag: ''
        },
        {   id: 2,
            title: "Popular",
            tag: <Popular/>
        }
    ]

    const news = [
        {
            url : "",
            title: "Five Reasons Why You Should Ride Elephants In France",
            date: "March 15, 2024"
        },
        {
            url : "",
            title: "Five Reasons Why You Should Ride Elephants In France",
            date: "March 15, 2024"
        },
        {
            url : "",
            title: "Five Reasons Why You Should Ride Elephants In France",
            date: "March 15, 2024"
        },
        {
            url : "",
            title: "Five Reasons Why You Should Ride Elephants In France",
            date: "March 15, 2024"
        }
    ]

    const {trending, isError, isLoading} = useFetchTrending()

  return (
    <div>
        <div className='flex justify-between items-center border-b border-b-gray-400 '>
            {
                filter.map((item: any, i: number)=> {
                    return(
                        <div key={i} className={`text-[14px] text-grayColor ${active == i && "text-black font-[800] border-b-2 border-b-secondaryBlue"} cursor-pointer transition-all pb-3`} onClick={()=> setActive(i)} >
                            {item.title}
                        </div>
                    )
                })
            }
        </div>

        <div className="flex flex-col my-4 divide-y">
            {filter[active].tag}
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