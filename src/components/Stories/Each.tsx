'use client'
import React from 'react'
import TimeAgo from 'react-timeago';
import parse from 'html-react-parser'
import { RiTimeFill } from 'react-icons/ri';

const Each = ({item}: any) => {
    return (
        <div className='h-[400px] md:w-1/3 sm:w-1/2 w-full relative'>
            <img src={item?.media} alt="" className='w-full h-full object-cover' />

            <div className="overlay" />

            <div className="details p-3">
                <p className='text-[10px] flex items-center gap-2'>
                    <RiTimeFill />
                    <TimeAgo date={item?.createdAt} />
                </p>
                <p className='font-[600] text-2xl'>
                    {item?.title.split(0,200)} {
                        item?.title?.length > 200 ? '...' : ''
                    }
                </p>
                <p className=' text-[11px] text-gray-300 parser'>
                    {parse(`${item?.content}`)}
                </p>
            </div>

        </div>
    )
}

export default Each