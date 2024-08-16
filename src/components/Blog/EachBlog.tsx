import React from 'react';
import {
  RiBookmark2Line,
  RiChat2Line,
  RiForward5Line,
  RiHeart2Line,
  RiShareForwardLine,
} from 'react-icons/ri';
import LikeCommentShare from '../UI/LikeCommentShare';
import TimeAgo from 'react-timeago';

const EachBlog = ({item}: any) => {
  
  return (
    <div className='border border-gray-300 shadow-md'>
      <img src={item?.media} className='h-[150px] w-full' alt='' />
      <div className='p-3 flex flex-col gap-3'>
        <p className='text-[12px] text-gray-500'>
          <TimeAgo date={item?.createdAt} /> | {' '}
          {item?.categories?.map((category: string, i: number) => {
            category;
          })}
        </p>
        <p className='text-[14px] font-[500]'>{item?.title}</p>
        <div className='reactions flex gap-2 items-center text-gray-500'>
          <RiHeart2Line />
          <RiChat2Line />
          <RiBookmark2Line />
          <RiShareForwardLine />
          
        </div>
        <LikeCommentShare id={item?._id} size={16} />
      </div>
    </div>
  );
};

export default EachBlog;
