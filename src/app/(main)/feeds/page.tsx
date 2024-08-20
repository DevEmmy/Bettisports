'use client';
import { AnimatePresence, motion } from 'framer-motion';
import EachFeed from '@/components/Feeds/EachFeed';
import GrayLine from '@/components/UI/GrayLine';
import React, { useState, ChangeEvent, useEffect } from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import { getUser } from '@/hooks/UserRequests';
import { useCreateFeed, useFetchFeeds } from '@/hooks/PostRequests';
import { toastError, toastSuccess } from '@/utils/toast';
import Loader from '@/components/Loader';
import { GrSend } from 'react-icons/gr';
import FileBase64 from 'react-file-base64';
import { HiCog, HiX } from 'react-icons/hi';
import { PiImagesThin } from 'react-icons/pi';

const page = () => {
  const { feeds, isError, isLoading, refetch } = useFetchFeeds();
  const { createFeedFn, createFeedLoading, error, isSuccess } = useCreateFeed();
  const [active, setActive] = useState(0);
  const [feedContent, setFeedContent] = useState<string>('');
  const [media, setMedia] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (isSuccess) {
      refetch();
      setMedia('');
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
      image: media,
    };

    try {
      createFeedFn(postFeed);
      console.log('Success:', postFeed);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    closed: { opacity: 0, x: '-100%' },
  };

  return (
    <div>
      <div className='px-5 md:w-1/2 m-auto flex flex-col gap-2 my-10'>
        <p className='text-[24px] font-[700] text-primary1'>
          Hi, {user.firstName}.
        </p>
        <div className='flex-center justify-between'>
          <p className='text-gray-500'>Find topics you'd like to read.</p>
          <div className='bg-defaultYellow text-white size-[32px] md:size-[40px] rounded-full flex flex-all-center'>
            <RiSearch2Line className='size-[20] md:size-[30]' />
          </div>
        </div>

        <div className='flex gap-2 md:gap-5 items-center'>
          <img
            src={user.profilePicture}
            alt=''
            className='size-[50px] rounded-full'
          />
          <input
            type='text'
            placeholder="What's on your mind?"
            className='border w-full rounded-3xl p-3 text-[16px]'
            value={feedContent}
            onClick={() => setShowModal(true)}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFeedContent(e.target.value)
            }
          />

          <button className=' md:flex p-3 rounded-full border' onClick={handleSubmit}>
            {createFeedLoading ? 'Posting...' : <GrSend className='w-5 h-5' />}
          </button>
        </div>

        <GrayLine />
        <div className='flex-center py-2 gap-2 overflow-x-auto'>
          {filter?.map((f, i) => {
            return (
              <div
                key={i}
                className={`${
                  active == i
                    ? 'bg-secondaryBlue text-white'
                    : 'bg-transparent border text-gray-600'
                } py-2 px-5 cursor-pointer min-w-fit`}
                onClick={() => setActive(i)}>
                {f}
              </div>
            );
          })}
        </div>

        <div className='flex gap-5 flex-col my-5'>
          {isLoading ? (
            <Loader />
          ) : feeds?.length > 0 ? (
            feeds?.map((item: any, i: number) => {
              return <EachFeed item={item} key={i} />;
            })
          ) : (
            <p>There is no feeds..</p>
          )}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        <motion.div
          className={` h-[100vh] w-[100vw] md:p-5 place-items-center overflow-y-auto top-0 black__overlay fixed ${
            showModal ? 'grid' : 'hidden'
          }`}>
          <motion.div
            variants={variants}
            initial='closed'
            animate='open'
            className='bg-white h-full max-w-[99%] md:mx-5 p-8 w-full  lg:w-1/2 md:w-2/3 min-h-1/2 shadow-lg border relative'>
            <div className='flex gap-3 items-center mb-2'>
              <img
                src={user.profilePicture}
                alt=''
                className='size-[50px] rounded-full '
              />
              <p className='text-[19px] md:text-[24px] font-[700] text-primary'>
                Hi, {user.firstName}.
              </p>
            </div>
            <textarea
              placeholder='Whats on your mind?'
              rows={5}
              className='border w-full md:w-full p-3'
              value={feedContent}
              onClick={() => setShowModal(true)}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setFeedContent(e.target.value)
              }
            />

            {media && <img src={media} alt='' className='w-full max-h-[300px] md:max-h-[500px] object-cover' />}

            <div className=' md:flex gap-2 mt-2 w-full overflow-hidden'>
              <button className='border w-full  my-1 md:my-3 border-secondaryBlue text-secondaryBlue flex gap-2 px-1 md:px-5 py-2 items-center md:w-fit cursor-pointer'>
                <PiImagesThin size={20} className='text-grey-700' />
                <FileBase64
                  multiple={false}
                  onDone={(base64: any) => setMedia(base64.base64)}
                />
              </button>

              <button
                className='flex gap-2 border my-1 md:my-3 border-secondaryBlue text-secondaryBlue px-3 md:px-5 items-center p-2 md:w-fit cursor-pointer'
                onClick={handleSubmit}>
                {createFeedLoading ? (
                  'Posting...'
                ) : (
                  <>
                    <span>Post</span>
                    <GrSend className='size-5' />
                  </>
                )}
              </button>
            </div>
            <motion.button
              onClick={() => setShowModal(false)}
              className='top-0 absolute right-0 text-gray-500 p-3'>
              <HiX className='cursor-pointer' size={30} />
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default page;
