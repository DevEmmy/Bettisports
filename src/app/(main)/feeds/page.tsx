'use client';
import EachFeed from '@/components/Feeds/EachFeed';
import GrayLine from '@/components/UI/GrayLine';
import React, { useState, ChangeEvent, useEffect } from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import { getUser } from '@/hooks/UserRequests';
import { useCreateFeed, useFetchFeeds } from '@/hooks/PostRequests';
import { toastError, toastSuccess } from '@/utils/toast';
import Loader from '@/components/Loader';
import axios from 'axios';
import { GrSend } from 'react-icons/gr';

const page = () => {
  const { feeds, isError, isLoading, refetch } = useFetchFeeds();
  const { createFeedFn, createFeedLoading, error, isSuccess } = useCreateFeed();
  const [active, setActive] = useState(0);
  const [feedContent, setFeedContent] = useState<string>('');
  useEffect(() => {
    if (isSuccess){
      refetch();
      toastSuccess('Feed uploaded');
      setFeedContent('');
    }
  }, [isSuccess]);

  const user = getUser();

  if (!user) {
    return null;
  }

  const filter = [
    'Trending',
    'Popular',
    'Recommended',
    'New Topic',
    'Mentions',
  ];

  const handleSubmit = async () => {
    if (!feedContent) {
      toastError('Cannot upload empty content!');
      return 0;
    }

    const postFeed = {
      content: feedContent,
      postedBy: user?._id,
      likes: [],
      image: '',
    };

    try {
      createFeedFn(postFeed);
      console.log('Success:', postFeed);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className='w-1/2 m-auto flex flex-col gap-2 my-10'>
        <p className='text-[24px] font-[700] text-primary1'>
          Hi, {user.firstName}.
        </p>
        <div className='flex-center justify-between'>
          <p className='text-gray-500'>Find topics you'd like to read.</p>
          <div className='bg-defaultYellow text-white size-[40px] rounded-full flex flex-all-center'>
            <RiSearch2Line size={30} />
          </div>
        </div>

        <div className='flex gap-5 items-center'>
          <img src='./img.jpg' alt='' className='size-[50px] rounded-full ' />
          <input
            type='text'
            placeholder='What is new?'
            className='border w-full rounded-3xl p-3'
            value={feedContent}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFeedContent(e.target.value)
            }
          />
          <button className='p-3 rounded-full border' onClick={handleSubmit}>
            {createFeedLoading ? 'Adding...' : <GrSend className='w-5 h-5' />}
          </button>
        </div>
        <GrayLine />
        <div className='flex-center gap-2 '>
          {filter?.map((f, i) => {
            return (
              <div
                key={i}
                className={`${
                  active == i
                    ? 'bg-secondaryBlue text-white'
                    : 'bg-transparent border text-gray-600'
                } py-2 px-5 cursor-pointer`}
                onClick={() => setActive(i)}>
                {f}
              </div>
            );
          })}
        </div>

        <div className='flex gap-5 flex-col my-5'>
          {isLoading ? (
            <Loader />
          ) : feeds.length > 0 ? (
            feeds.map((item: any, i: number) => {
              return <EachFeed item={item} key={i} />;
            })
          ) : (
            <p>There is no feeds..</p>
          )}

        </div>
      </div>
    </div>
  );
};

export default page;