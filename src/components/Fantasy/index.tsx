'use client';
import React from 'react';
import Line from '../UI/Line';
import { useFetchFantasy } from '@/hooks/PostRequests';
import Loader from '../Loader';
import MdFootballBlogHighlight from '../FootballNews/MdFootallBlogHighlight';
import TimeAgo from 'react-timeago'
import parse from 'html-react-parser'

const Fantasy = () => {
  const { fantasy, isError, isLoading } = useFetchFantasy();
  return (
    <div className='flex flex-col gap-5 mx-xPadding'>
      <h1 className='font-[600]'>FANTASY</h1>
      <Line />

      <div className='md:grid md:grid-cols-3 gap-3'>
        {/* first div */}
        {
            isLoading ?
            <Loader/>
            :
            fantasy?.length > 0 ?
            fantasy.slice(0,1).map((item : any) => {
                return (
                <div className='flex flex-col gap-5 relative' key={item?._id}>
                    <img src={item?.media} alt='' className='h-full w-full' />
                    <div className='overlay' />
                    <div className='details p-10'>
                        <p><TimeAgo date={item?.createdAt} /></p>
                        <p className='text-[28px] font-[600]'>{item?.title}</p>
                        <p>
                          
                        </p>
                    </div>
                </div>
                )
            })
            :
            (
                <p>There are no fantasy posts</p>
            )
        }
        

        <div className='flex-col border-x-2 px-3'>
          {isLoading ? (
            <Loader />
          ) : fantasy?.length > 1 ? (
            fantasy.slice(1, 4).map((item: any, i: number) => {
              return (
                <MdFootballBlogHighlight
                  item={item}
                  key={i}
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
          ) : fantasy?.length > 4 ? (
            fantasy.slice(4, 7).map((item: any, i: number) => {
              return (
                <MdFootballBlogHighlight
                  item={item}
                  key={i}
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
