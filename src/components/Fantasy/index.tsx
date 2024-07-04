'use client';
import React from 'react';
import Line from '../UI/Line';
import { useFetchFantasy } from '@/hooks/PostRequests';
import Loader from '../Loader';
import MdFootballBlogHighlight from '../FootballNews/MdFootallBlogHighlight';

const Fantasy = () => {
  const { fantasy, isError, isLoading } = useFetchFantasy();
  return (
    <div className='flex flex-col gap-5 mx-xPadding'>
      <h1 className='font-[600]'>FANTASY</h1>
      <Line />

      <div className='md:grid md:grid-cols-3 gap-3'>
        {/* first div */}
        <div className='flex flex-col gap-5 relative'>
          <img src='img.jpg' alt='' className='h-full w-full' />
          <div className='overlay' />
          <div className='details p-10'>
            <p>{fantasy[0]?.date}</p>
            <p className='text-[28px] font-[600]'>{fantasy[0]?.title}</p>
          </div>
        </div>

        <div className='flex-col border-x-2 px-3'>
          {isLoading ? (
            <Loader />
          ) : fantasy.length > 0 ? (
            fantasy.slice(1, 4).map((item: any, i: number) => {
              return (
                <MdFootballBlogHighlight
                  item={item}
                  key={item}
                  className={i == 2 ? 'border-y-2' : ''}
                />
              );
            })
          ) : (
            <p>There are no fantasy posts</p>
          )}
        </div>

        <div className='flex-col'>
          {isLoading ? (
            <Loader />
          ) : fantasy.length > 0 ? (
            fantasy.slice(4, 7).map((item: any, i: number) => {
              return (
                <MdFootballBlogHighlight
                  item={item}
                  key={item}
                  className={i == 5 ? 'border-y-2' : ''}
                />
              );
            })
          ) : (
            <p>There are no fantasy posts</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fantasy;
