'use client';
import React from 'react'
import Line from '../UI/Line'
import { RiArrowRightLine } from 'react-icons/ri'
import SmFootballBlogHighlight from '../FootballNews/SmFootballBlogHighlight'
import Loader from '../Loader'
import { useFetchInFocus } from '@/hooks/PostRequests'

const InFocus = () => {
    const competition = [
        {
            title: "AFCON"
        },
        {
            title: "EURO 2024"
        },
        {
            title: "2024 World Cup"
        },
        {
            title: "COPA AMERICA"
        },
        {
            title: "ASIAN CUP"
        },
        {
            title: "FIFA WOMEN WORLD CUP"
        },
        {
            title: "OLYMPICS"
        },
        {
            title: "UEFA CONFERENCE LEAGUE"
        }
    ]
    const {inFocus,isError,isLoading} = useFetchInFocus();
    return (
        <div className='px-xPadding my-10'>
            <div className='grid grid-cols-[4fr_1.5fr]  gap-10'>
                <div className='flex flex-col gap-5'>
                    <h1 className='font-[600]'>In Focus</h1>
                    <Line />


                    {
                        isLoading ?
                        <Loader/>
                        :
                        inFocus?.length > 0
                        ?
                        (
                        <div className="flex flex-col gap-5 relative">
                            <img src={inFocus[0].media} alt="" />
                            <div className="overlay" />
                            <div className="details p-10">
                                <p>
                                    {inFocus[0]?.date}
                                </p>
                                <p className='text-[28px] font-[600]'>
                                    {inFocus[0]?.title}
                                </p>
                            </div>
                        </div>
                        )
                        :
                        (
                            <p>There are no in focus posts</p>
                        )
                    }

                </div>

                <div className='flex flex-col gap-5'>
                    <h1 className='font-[600] uppercase'>Top Competition News</h1>
                    <Line />

                    <div className='flex flex-col divide-y'>
                        {
                            competition.map((comp: any, i: number) => {
                                return (
                                    <div className='flex items-center justify-between py-5' key={i}>
                                        <p>{comp.title}</p>
                                        <RiArrowRightLine />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="flex gap-5 my-5">
                {
                    isLoading ?
                    <Loader/>
                    : inFocus?.slice(1,4).length > 0 ?
                    inFocus?.slice(1,4).map((item: any, i:number) => {
                        return (
                            <SmFootballBlogHighlight key={i} item={item} />
                        )
                    }) :
                    (
                        <p>
                            There is no inFocus post
                        </p>
                    )
                }
            
            </div>
        </div>

    )
}

export default InFocus