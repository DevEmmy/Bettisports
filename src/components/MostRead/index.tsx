'use client';
import React from 'react';
import Line from '../UI/Line';
import { useFetchPopular } from '@/hooks/PostRequests';
import Loader from '../Loader';
import parser from 'html-react-parser';
import ReactTimeago from 'react-timeago';
import Link from 'next/link';
import LikeCommentShare from '../UI/LikeCommentShare';

const MostRead = () => {
  const { isError, isLoading, popular } = useFetchPopular();
  return (
    <div className='px-4 md:px-xPadding my-20 py-10'>
      <div className='md:flex items-center gap-3'>
        <h1 className='text-black md:w-1/6 font-[600] text-base '>Most Read</h1>
        <Line />
      </div>

      <div className='md:grid grid-cols-3 md:mx-20 divide-x gap-5'>
        {isLoading ? (
          <Loader />
        ) : popular?.length > 0 ? (
          popular?.slice(0, 6).map((item: any, i: number) => {
            return (
              <div className='p-3 flex gap-2' key={i}>
                <p className='text-defaultYellow text-[24px] font-[600]'>
                  {i + 1}.
                </p>
                <div className='flex flex-col gap-3'>
                  <Link href={`/blog/${item?._id}`}>
                    <p className='font-[500]'>{item?.title}</p>
                    <p className='text-[14px] text-grayColor parser line-clamp-2'>
                      {parser(item?.content)}
                    </p>
                  </Link>
                  <div className='flex items-center text-[12px] justify-between'>
                    <ReactTimeago date={item?.createdAt || 'July 4, 2024'} />

                    <LikeCommentShare id={item._id} size={18} />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>There are no editor's picks available</p>
        )}
      </div>
    </div>
  );
};

export default MostRead;