'use client'

import React from 'react';
import Line from '../UI/Line';
import Loader from '../Loader';
import  {useFetchForYou}  from '@/hooks/PostRequests';
import Link from 'next/link';
import SectionHead from '../UI/SectionHead';


const ForYou = () => {
  const dataForYou = [
    {
      id: '01',
      date: 'March 28, 2028 | Category',
      text: 'Romeo Lavia Set to Miss The Remainder of 2023/24',
    },
    {
      id: '02',
      date: 'March 28, 2028 | Category',
      text: 'Romeo Lavia Set to Miss The Remainder of 2023/24',
    },
    {
      id: '03',
      date: 'March 28, 2028 | Category',
      text: 'Romeo Lavia Set to Miss The Remainder of 2023/24',
    },
    {
      id: '04',
      date: 'March 28, 2028 | Category',
      text: 'Romeo Lavia Set to Miss The Remainder of 2023/24',
    },
    {
      id: '05',
      date: 'March 28, 2028 | Category',
      text: 'Romeo Lavia Set to Miss The Remainder of 2023/24',
    },
  ];

  const dataId = ['01', '02', '03', '04', '05'];

  const { forYou, isError, isLoading } = useFetchForYou()
  return (
    <div className='md:px-xPadding px-4'>
      <div className='flex items-center gap-3'>
        {/* <p className='uppercase md:text-[24px] text-[19px] leading-[24px] gap-5 font-[700] w-1/6 '>
          For You
        </p> */}
        <SectionHead title='for you' />
        <Line />
      </div>

      <div className='md:grid md:grid-cols-3 grid-cols-5 items-center divide-x my-10'>
        {isLoading ? (
          <Loader />
        ) : forYou?.length > 0 
        ? 
          forYou.map((item: any, i: number) => {
            return (
              <Link href={`/blog/${item?._id}`} className='my-2'>
              <div
                key={i}
                className={`pr-5 ${
                  i == 0 ? 'pl-0' : 'pl-5'
                } flex flex-col gap-2`}>
                <h1 className='text-[40px]'>{dataId[item?.id - 1]}</h1>
                <p className='text-[10px]'>{item?.date}</p>
                <p>{item?.text}</p>
              </div>
              </Link>
            );
          })
         : (
          <p>There are no available posts for you.</p>
        )}
      </div>
    </div>
  );
};

export default ForYou;
