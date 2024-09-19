'use client';
import React from 'react';
import Each from './Each';
import Play from '../UI/Play';
import { useFetchPodCast } from '@/hooks/PostRequests';
import Loader from '../Loader';
import parser from 'html-react-parser';
import TimeAgo from 'react-timeago';
import { Post } from '@/requests/dto';
import { FaPlay } from 'react-icons/fa';

const Podcast = () => {
  const { podcast, isError, isLoading, refetch } = useFetchPodCast();
  return (
    <div className='bg-[#25282B] px-5 md:px-xPadding my-20 py-10'>
      <div className='flex items-center gap-3'>
        <p className='text-white'>PODCASTS</p>
        <div className='w-full h-[3px] rounded-2xl bg-secondaryGray' />
      </div>

      {isLoading ? (
        <Loader />
      ) : podcast?.length ? (
        <div className='sm:grid grid-cols-[3fr_1fr] mt-10 gap-5 sm:h-[80vh]'>
          <div className='relative my-3 sm:h-[80vh] overflow-hidden'>
            <p className='text-sm'>
            <TimeAgo date={podcast[0]?.createdAt} />
            </p>
            <img src={podcast[0]?.media} alt='' />
            <div className='overlay' />
            <div className='details md:p-10 p-2 w-full flex md:flex-col gap-3  justify-between md:justify-normal'>
              <p className=' text-[20px] md:text-[28px] font-[700] line-clamp-3 text-left'>
                {podcast[0]?.title}
              </p>
              <p className='text-sm hidden md:flex'>
                {' '}
                <TimeAgo date={podcast[0]?.createdAt} /> |
              </p>
              <div className='flex justify-end items-center gap-2'>
                <p className='text-sm hidden md:flex'>
                  {parser(podcast[0]?.content)}
                </p>

                <div className='text-white cursor-pointer z-[100] font-[700] bg-[#373A3C]/5 border border-[#373A3C] bg-opacity-80 backdrop-filter backdrop-blur-md border-opacity-20 shadow-xl  rounded-full'>
                  <FaPlay
                    className='text-defaultYellow'
                    size={23}
                  />
                </div>

              </div>
            </div>
            <p className='md:hidden text-[8px] px-2 details  text-white'>
              <TimeAgo date={podcast[0]?.createdAt} /> | 25min
            </p>
          </div>

          <div className='flex flex-col divide-y sm:h-[80vh] overflow-y-auto format-scrollbar'>
            {podcast?.slice(1,10).map((item: any, i: number) => {
              return <Each key={i} item={item}  />;
            })}
          </div>
        </div>
      ) : (
        <p>There are no podcast</p>
      )}
    </div>
  );
};

export default Podcast;
