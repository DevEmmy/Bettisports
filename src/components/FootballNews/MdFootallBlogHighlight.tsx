'use client';
import React from 'react';
import TimeAgo from 'react-timeago';
import LikeCommentShare from '../UI/LikeCommentShare';
import parse from 'html-react-parser'
import Link from 'next/link';

const MdFootballBlogHighlight = ({item} : any) => {
  return (
    <div className='grid grid-cols-[2fr_3fr] gap-3 py-2'>
      <img src={item?.media} alt={item?.execrpt} />

      <div className='grid'>
      <Link href={`/blog/${item?._id}`}>
        <p>{item?.title}</p>
      </Link>
        <div className='flex items-center text-[12px] justify-between'>
          <p className=''>
            {/* <TimeAgo date={item?.createdAt} /> */}
          </p>

          <p className='!text-[10px] line-clamp-2 parser mb-2'>
            {parse(`${item?.content}`)}
          </p>

          <LikeCommentShare id={item?.id} size={12} />
        </div>
      </div>
    </div>
  );
};

export default MdFootballBlogHighlight;
