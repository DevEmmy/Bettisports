'use client';
import React from 'react'
import LikeCommentShare from '../UI/LikeCommentShare';
import TimeAgo from 'react-timeago'
import parse from 'html-react-parser'
import Link from 'next/link';

const SmFootballBlogHighlight = ({item} : any) => {
  const content : string = item?.content;
  return (
    <div className='grid grid-cols-[2fr_1fr] gap-3 py-2'>
        <div className='flex flex-col gap-2'>
          <Link href={`/blog/${item?._id}`}>
            <p className='line-clamp-2'>{item?.title}</p>
          </Link>
            <div className="flex items-center text-[12px] gap-0.5 justify-between">
                <p className='text-[10px]'>
                  <TimeAgo date={item?.createdAt} />
                </p>
                {/* <p className='!text-[10px] line-clamp-2 parser mb-2'>
                  {parse(`${item?.content}`)}
                </p> */}

                <LikeCommentShare id={item?._id} size={12} />
            </div>
        </div>
        <img src={item?.media} alt="" className='h-full' />
    </div>
  )
}

export default SmFootballBlogHighlight