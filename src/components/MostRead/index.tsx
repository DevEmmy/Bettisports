"use client"
import React from 'react'
import Line from '../UI/Line'
import { RiChat2Line, RiHeart2Line, RiShareForward2Line } from 'react-icons/ri'
import { useFetchPopular } from '@/hooks/PostRequests'
import Loader from '../Loader'
import parser from "html-react-parser"
import ReactTimeago from 'react-timeago'
import Link from 'next/link'

const MostRead = () => {
    const { isError, isLoading, popular } = useFetchPopular()
    return (
        <div className=' px-xPadding my-20 py-10'>
            <div className='flex items-center gap-3'>
                <p className='text-black w-1/6'>Most Read</p>
                <Line />
            </div>

            <div className="grid grid-cols-3 mx-20 divide-x gap-5">
            

                {
                    isLoading
                        ?
                        <Loader />
                        :

                        popular.length > 0
                            ?
                            popular.slice(0, 6).map((item: any, i: number) => {
                                return (
                                    <Link href={`/blog/${item._id}`} className='p-3 flex gap-2' key={i}>
                                        <p className='text-defaultYellow text-[24px] font-[600]'>{i + 1}.</p>
                                        <div className='flex flex-col gap-3'>
                                            <p className='font-[500]'>{item.title}</p>
                                            <p className='text-[14px] text-grayColor parser line-clamp-2'>{parser(item.content)}</p>
                                            <div className="flex items-center text-[12px] justify-between">
                                                <ReactTimeago date={item.createdAt || "July 4, 2024"} />

                                                <div className='flex gap-3'>
                                                    <RiHeart2Line size={18}/>
                                                    <RiChat2Line size={18}/>
                                                    <RiShareForward2Line size={18}/>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                            :

                            <p>There are no editor's picks available</p>

                }
            </div>
        </div>
    )
}

export default MostRead