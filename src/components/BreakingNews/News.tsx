'use client';
import { useFetchNewsBreaking } from '@/hooks/PostRequests';
import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Loader from '../Loader';
import parser from 'html-react-parser';
import Link from 'next/link';
import { toastError, toastSuccess } from '@/utils/toast';
import LikeCommentShare from '../UI/LikeCommentShare';
import VerticalHeader from '../Shared/VerticalHeader';
import SectionHead from '../UI/SectionHead';

const News = () => {
  const { newsBreaking, isError, isLoading } = useFetchNewsBreaking();

  const [sliced, setSliced] = useState({
    start: 0,
    end: 10,
  });
  const { start, end } = sliced;

  const handleCarousel = (item: number) => {
    start == 0 && item < 0
      ? toastError(`That's the beginning`)
      : end < newsBreaking?.length
      ? setSliced({
          start: start + item,
          end: end + item,
        })
      : item < 0
      ? setSliced({
          start: start + item,
          end: end + item,
        })
      : toastError('No more breaking news');
  };
  return (
    <div>
      <div className='grid grid-cols-[2fr_6fr_0.5fr] gap-5 w-full items-center'>
        
        <SectionHead title='News Breaking'/>
        {/* <VerticalHeader title='News Breaking' /> */}
        <div className='w-full h-[5px] bg-secondaryBlue'></div>
        <div className='click-options flex gap-3'>
          <div className='flex'>
            <HiChevronLeft size={25} onClick={() => handleCarousel(-8)} />
          </div>

          <div className='flex'>
            <HiChevronRight size={25} onClick={() => handleCarousel(8)} />
          </div>
        </div>
      </div>

      <div className='md:grid md:grid-cols-4 items-center divide-x my-10'>
        {isLoading ? (
          <Loader />
        ) : newsBreaking?.length > 0 ? 
        (  newsBreaking.slice(start, end)?.map((item: any, i: number) => {
            return (
              <div key={i} className={`my-4 md:my-2 pr-5 ${i == 0 ? 'pl-0' : 'pl-5'} flex-col gap-2`}>
              
              <Link href={`/blog/${item?._id}`} >
                <p className='text-[16px] line-clamp-2'>
                    {item?.title}
                </p>
                <p className='text-[14px] text-grayColor parser line-clamp-2'>
                  {parser(item?.content)}
                </p>
              </Link>
              <LikeCommentShare id={item?._id} size={15} />
              </div>
            );
          })
        ) : (
          <p>There is no breaking news</p>
        )}
      </div>
    </div>
  );
};

export default News;
