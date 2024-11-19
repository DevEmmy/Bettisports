'use client';
import React, {useState, useEffect} from 'react';
import EachVideo from './EachVideo';
import Play from '../UI/Play';
import { useFetchVideos } from '@/hooks/PostRequests';
import Loader from '../Loader';
import TimeAgo from 'react-timeago';

const VideoComponent = () => {
  const { videos, isError, isLoading, refetch } = useFetchVideos();
  return (
    <div className='bg-[#25282B] px-5 md:px-xPadding my-20 py-10'>
      <div className='flex items-center gap-3'>
        <p className='text-white'>VIDEOS</p>
        <div className='w-full h-[3px] rounded-2xl bg-secondaryGray' />
      </div>

      {isLoading ? (
        <Loader />
      ) : videos?.length > 0 ? (
        <div className='md:grid grid-cols-[3fr_1fr] mt-10 gap-5 md:h-[80vh]'>
          <div className='relative my-3 min-h-[40vh] md:h-[80vh] overflow-hidden'>
            <Play
              size={23}
              otherStyles='absolute -translate-x-[50%] -translate-y-[50%] top-2/4 left-2/4 p-4'
              post={videos[0]}
            />
            {
                videos[0].mediaType == 'image' ? (
                    <img src={videos[0]?.media} alt={videos[0]?.title} />
                ) :
                (
                    <img src='./img.png' alt='' />
                )
            }
            <div className='overlay' />
            <div className='details p-3 md:p-10 flex flex-col gap-2'>
              <p className='text-xs md:text-[11px]'>
                <TimeAgo date={videos[0]?.createdAt} />
              </p>
              <p className='text-[20px] md:text-[28px] leading-normal font-[600]'>
                {videos[0]?.title}
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-5  md:h-[80vh] my-3 overflow-y-auto format-scrollbar'>
            {videos?.slice(1).map((video: any, i: number) => {
              return <EachVideo key={i} video={video}/>;
            })}
          </div>
        </div>
      )
      : 
      (
        <p>There is no available video right now.</p>
      )
    }
    </div>
  );
};

export default VideoComponent;
