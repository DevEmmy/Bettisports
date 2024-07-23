'use client'
import React, { useEffect } from 'react'
import { RiChat2Line, RiHeart2Line, RiShareForward2Line } from 'react-icons/ri'
import TimeAgo from 'react-timeago'
import { useLikePost } from '@/hooks/PostRequests'

const MdFootballBlogHighlight = (item : any) => {
    const handleLike = () => {
        useLikePost(item?._id)
    }

    return (
        <div className='grid grid-cols-[2fr_3fr] gap-3 py-2'>
            <img src={item?.media} alt={item?.execrpt} />

            <div className='grid'>
                <p>
                    {item?.title}
                </p>
                <div className="flex items-center text-[12px] justify-between">
                    <p>
                        <TimeAgo date={item?.createdAt} />
                    </p>

                    <div className='flex gap-3'>
                        <RiHeart2Line onClick={handleLike}/>
                        <RiChat2Line />
                        <RiShareForward2Line />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MdFootballBlogHighlight