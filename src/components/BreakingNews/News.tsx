"use client"
import { useFetchNewsBreaking } from '@/hooks/PostRequests'
import React from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import Loader from '../Loader'
import parser from "html-react-parser"
import Link from 'next/link'

const News = () => {

    const news = [
        {
            title: "Romeo Lavia to Miss The Remainder of 2023",
            date: "March 15, 2024"
        },
        {
            title: "Romeo Lavia to Miss The Remainder of 2023",
            date: "March 15, 2024"
        },
        {
            title: "Romeo Lavia to Miss The Remainder of 2023",
            date: "March 15, 2024"
        },
        {
            title: "Romeo Lavia to Miss The Remainder of 2023",
            date: "March 15, 2024"
        },
    ]

    const { newsBreaking, isError, isLoading } = useFetchNewsBreaking()

    return (
        <div>
            <div className='grid grid-cols-[2fr_6fr_0.5fr] gap-5 w-full items-center'>
                <p className='uppercase text-[24px] leading-[24px] font-[700] '>News Breaking</p>
                <div className='w-full h-[5px] bg-secondaryBlue'></div>
                <div className="click-options flex gap-3">
                    <div className="flex">
                        <HiChevronLeft size={25} />
                    </div>

                    <div className="flex">
                        <HiChevronRight size={25} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 items-center divide-x my-10">
                {
                    isLoading
                        ?
                        <Loader />
                        :

                        newsBreaking?.length > 0
                            ?
                            newsBreaking.slice(0,4).map((item: any, i: number) => {
                                return (
                                    <Link href={`/blog/${item._id}`} className={`pr-5 ${i == 0 ? "pl-0" : "pl-5"} fle flex-col gap-2`}>
                                        <p className='text-[16px] line-clamp-2'>{item.title}</p>
                                        <p className='text-[14px] text-grayColor parser line-clamp-2'>{parser(item.content)}</p>
                                    </Link>
                                )
                            })
                            :
                            <p>There is no breaking news</p>
            }
            </div>
        </div>
    )
}

export default News