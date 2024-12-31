'use client';
import { useFetchFeatured } from '@/hooks/PostRequests';
import React from 'react';
import Loader from '../Loader';
import Link from 'next/link';
import SectionHead from '../UI/SectionHead';

const Featured = () => {
  const { featured, isError, isLoading } = useFetchFeatured();
  return (
    <div>
      <div className='flex justify-between pb-5 border-b-4 border-b-secondaryBlue'>
        {/* <p>Featured</p> */}
        <SectionHead title='Featured' />

        <div className='flex gap-10'>
          <p>ALL</p>
          <p>MEN</p>
          <p>WOMEN</p>
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : featured?.length > 0 ? (
        <div className='grid grid-cols-[2fr_3fr_2fr] mt-10 gap-5'>
          <div className='grid gap-5'>
            <img src='./ads.png' alt='' />

            <Link href={`/blog/${featured[0]?._id}`} className='flex gap-3 flex-col'>
              <img src={featured[0]?.media} alt='' />
              <div>
                <p className='text-[16px] line-clamp-2'>
                  {featured[0]?.content}
                </p>
                <p className='text-[14px] text-grayColor'>
                  {featured[0]?.date ? featured[0].date : 'March 23, 2024'}
                </p>
              </div>
            </Link>
          </div>

          <Link href={`/blog/${featured[1]?._id}`} className='flex gap-3 flex-col'>
            <img src={featured[1].media} alt='' />
            <div>
              <p className='text-[16px] line-clamp-2'>{featured[1]?.content}</p>
              <p className='text-[14px] text-grayColor'>
                {featured[1]?.date ? featured[1].date : 'March 23, 2024'}
              </p>
            </div>
          </Link>

          <div className='grid gap-5'>
            <Link href={`/blog/${featured[2]?._id}`} className='flex gap-3 flex-col'>
              <img src={featured[2]?.media} alt='' />
              <div>
                <p className='text-[16px] line-clamp-2'>
                  {featured[2]?.content}
                </p>
                <p className='text-[14px] text-grayColor'>
                  {featured[2]?.date ? featured[2].date : 'March 23, 2024'}
                </p>
              </div>
            </Link>

            <Link href={`/blog/${featured[3]?._id}`} className='flex gap-3 flex-col'>
              <img src={featured[3]?.media} alt='' />
              <div>
                <p className='text-[16px] line-clamp-2'>
                  {featured[3]?.content}
                </p>
                <p className='text-[14px] text-grayColor'>
                  {featured[3]?.date ? featured[3].date : 'March 23, 2024'}
                </p>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <p>There are no featured posts</p>
      )}
    </div>
  );
};

export default Featured;
