'use client'

import React from 'react';
import Line from '../UI/Line';
import Loader from '../Loader';
import  {useFetchForYou}  from '@/hooks/PostRequests';


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
    <div className='mx-xPadding'>
      <div className='flex items-center'>
        <p className='uppercase text-[24px] leading-[24px] gap-5 font-[700] w-1/6 '>
          For You
        </p>
        <Line />
      </div>

      <div className='grid grid-cols-5 items-center divide-x my-10'>
        {isLoading ? (
          <Loader />
        ) : forYou?.length > 0 
        ? 
          forYou.map((item: any, i: number) => {
            return (
              <div
                key={i}
                className={`pr-5 ${
                  i == 0 ? 'pl-0' : 'pl-5'
                } flex flex-col gap-2`}>
                <h1 className='text-[40px]'>{dataId[item?.id - 1]}</h1>
                <p className='text-[10px]'>{item?.date}</p>
                <p>{item.text}</p>
              </div>
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
