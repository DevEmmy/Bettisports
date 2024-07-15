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

const page = () => {
  const { polls, isLoading, isError } = useFetchPolls();
  const {votePollFn, error, isSuccess} = useVotePoll(); 
  const user = getUser()

  
  
  return (
    <div className='grid grid-cols-6 gap-5 mx-xPadding my-10'>
      <div className='grid grid-cols-6 col-span-6'>
        <div />
        <p className='col-span-5 font-[600]'>Polls</p>
      </div>
      <img src='./ads2.png' alt='' />

      <div className='grid col-span-4 grid-cols-3 gap-5'>
        {isLoading ? (
          <Loader />
        ) : polls.length > 0 ? (
          polls.map((item: any, i: number) => {
            const days = Math.floor(item.duration / 1440);
            const hours = Math.floor((item.duration % 1440) / 60);
            const remainingMinutes = item.duration % 60;

            return (
              <div className='border border-gray-300 shadow-md'>
                <img src='./img.jpg' alt='' className='h-[150px] w-full' />
                <div className='p-3 flex flex-col gap-2'>
                  <p className='text-[14px] font-[500]'>{item.question} ghjk</p>

                  <Collection
                    polls={item.choices.map((choice: any) => choice.choiceText)}
                    

                  />

                  <div className='text-[12px] flex items-center justify-between mt-2 end-2'>
                    <div className='font-[500] text-secondaryBlue'>
                      Total Votes 26
                    </div>

                    <div>
                      { days > 0 && `${days} Days ` }
                      { hours > 0 && `${hours} Hours ` }
                      { remainingMinutes > 0 && `${remainingMinutes} Minutes ` }

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
