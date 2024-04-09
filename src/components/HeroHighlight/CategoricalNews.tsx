"use client"
import React, { useState } from 'react'
import { RiFacebookCircleFill, RiInstagramFill, RiTwitterXFill } from 'react-icons/ri'

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
  return (
    <div>
        <div className='flex justify-between items-center border-b border-b-gray-400 pb-3'>
            {
                filter.map((item: any, i: number)=> {
                    return(
                        <div className={`text-[20px] text-grayColor ${active === i && "text-black font-[800]"}`}>
                            {item.title}
                        </div>
                    )
                })
            }
        </div>

        <div className="flex flex-col my-4 divide-y">
            {
                news.map((item: any, i: number)=>{
                    return(
                        <div className='flex justify-between gap-2 py-3'>
                            <div className='flex gap-2 flex-col text-grayColor'>
                                <p className='text-[18px] font-[500]'>{item.title}</p>
                                <p className='text-[12px] font-[400]'>{item.date}</p>
                            </div>

                            <img src="./img.jpg" width={100} height={100} alt="" />
                        </div>
                    )
                })
            }
        </div>

        <div>
            <p className='text-[20px] font-[600]'>Follow us on Social Media</p>
            <div className="flex gap-3">
                <RiFacebookCircleFill size={30} />
                <RiTwitterXFill size={30}/>
                <RiInstagramFill size={30}/>
            </div>
        </div>
    </div>
  )
}

export default CategoricalNews