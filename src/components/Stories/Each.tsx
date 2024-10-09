'use client'
import React from 'react'
import TimeAgo from 'react-timeago';
import parse from 'html-react-parser'
import { RiTimeFill } from 'react-icons/ri';
import { Post } from '@/requests/dto';

interface Props {
    item: Post
}

const Each = ({item}: Props) => {
    return (
        <div className='h-[400px]  w-full relative'>
            <img src={item?.media} alt="" className='w-full h-full object-cover' />

            <div className="overlay" />

            <div className="details p-3">
                <p className='text-[10px] flex items-center gap-2'>
                    <RiTimeFill />
                    <TimeAgo date={item?.createdAt} />
                </p>
                <p className='font-[600] md:text-xl lg:text-2xl'>
                    {item?.title}
                </p>
                {/* <p className=' text-[11px] text-gray-300 parser'>
                    {parse(item?.content)}
                </p> */}
                <p className='!text-[11px] line-clamp-2 parser mb-2'>{parse(item?.content)}</p>
            </div>

        </div>
    )
}

export default Each