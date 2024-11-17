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
import parser from "html-react-parser"

const EachBlog = ({item}: any) => {
  
  return (
    <div className='border border-gray-300 shadow-md h-fit'>
      <img src={item?.media} className='md:h-[150px] max-md:max-h-[200px] w-full' alt='' />
      <div className='p-3 flex flex-col gap-3'>
        <p className='text-[12px] text-gray-500'>
          <TimeAgo date={item?.createdAt} /> | {' '}
          {item?.categories?.map((category: string, i: number) => {
            category;
          })}
        </p>
        <p className='text-[14px] font-[500]'>{item?.title}</p>
        <p className='parser line-clamp-2'>
          {parser(item?.content || "")}
        </p>
        <LikeCommentShare id={item?._id} size={16} />
      </div>
    </div>
  );
};

export default EachBlog;
