'use client';
import EachBlog from '@/components/Blog/EachBlog';
import PollContainer from '@/components/Polls/Container';
import { Container } from 'postcss';
import React from 'react';
import { useFetchPolls } from '@/hooks/PostRequests';
import Loader from '@/components/Loader';
import Collection from '@/components/Polls/Collection';
import { useVotePoll } from '@/hooks/PostRequests';
import { getUser } from '@/hooks/UserRequests';
import Line from '@/components/UI/Line';

const page = () => {
  const { polls, isLoading, isError } = useFetchPolls();
  const { votePollFn, error, isSuccess } = useVotePoll();
  const user = getUser();

  const calculateVotes = (choices: any) => {
    return choices.reduce((total: any, choice: any) => total + choice.votes, 0);
  };

  return (
    <div className='md:grid md:grid-cols-6 md:gap-5 px-5 md:px-xPadding my-10'>
      <div className='flex gap-2 col-span-6 my-3 items-center md:hidden'>
        {/* <div /> */}
        <p className='font-[600] text-[24px]'>Polls</p>
        <div className='grow'>
          <Line />
        </div>
      </div>
      <img
        src='./ads2.png'
        className='max-h-[100px] object-cover w-full'
        alt=''
      />

      <div className='md:grid col-span-4 grid-cols-3 gap-3 md:gap-5'>
        <p className='font-[600] text-[24px]'>Polls</p>
        {isLoading ? (
          <Loader />
        ) : polls?.length > 0 ? (
          polls?.map((item: any, i: number) => {
            const days = Math.floor(item.duration / 1440);
            const hours = Math.floor((item.duration % 1440) / 60);
            const remainingMinutes = item.duration % 60;

            return (
              <div
                className='border border-gray-300 shadow-md my-3 md:my-0.5'
                key={i}>
                <img src='./img.jpg' alt='' className='h-[150px] w-full' />
                <div className='p-3 flex flex-col gap-2'>
                  <p className='text-[14px] font-[500]'>{item.question}</p>

                  <Collection
                    choices={item?.choices?.map((choice: any) => choice)}
                    id={item?._id}
                    totalVotes={calculateVotes(item?.choices)}
                  />

                  <div className='text-[12px] flex items-center justify-between mt-2 end-2'>
                    <div className='font-[500] text-secondaryBlue'>
                      Total Votes {calculateVotes(item?.choices)}
                    </div>

                    <div>
                      {days > 0 && `${days} Days `}
                      {hours > 0 && `${hours} Hours `}
                      {remainingMinutes > 0 && `${remainingMinutes} Minutes `}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>There are no polls yet.</p>
        )}
      </div>

      <img src='./ads2.png' alt='' />
    </div>
  );
};

export default page;
