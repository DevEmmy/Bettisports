"use client"
import { useFetchTrending } from '@/hooks/PostRequests'
import React, { useState } from 'react'
import { RiFacebookCircleFill, RiInstagramFill, RiTwitterXFill } from 'react-icons/ri'
import Loader from '../Loader'

const CategoricalNews = () => {
    const [active, setActive] = useState(0)
    const filter = [
        {
            title: "Trending"
        },
        {
            title: "Recents"
        },
        {
            title: "Popular"
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
            {
                isLoading
                ?
                    <Loader />
                :
                trending.length > 0
                ?
                trending.map((item: any, i: number)=>{
                    return(
                        <div className='flex justify-between gap-2 py-3' key={i}>
                            <div className='flex gap-2 flex-col text-grayColor'>
                                <p className='text-[14px] font-[500]'>{item.title}</p>
                                <p className='text-[12px] font-[400]'>{item?.date ? item?.date : 'March 23, 2024'}</p>
                            </div>

                            <img src={item?.media ? item?.media :  "./img.jpg"} width={100} height={100} alt={`${item.title} on ${item.date}`} />
                        </div>
                    )
                })
                :
                <p>There are no trending posts available</p>
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