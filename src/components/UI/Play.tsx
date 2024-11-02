'use client';
import React, { useState, useEffect } from 'react';
import { BiShow } from 'react-icons/bi';
import { FaPlay } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import PostedBy from '../Blog/PostedBy';
import LikeCommentShare from './LikeCommentShare';
import TitleHeader from './TitleHeader';
import parser from 'html-react-parser';
import CommentForm from '../Blog/CommentForm';
import { useFetchPostComment } from '@/hooks/PostRequests';
import { HiX } from 'react-icons/hi';
import Comments from '../Blog/Comments';
import Loader from '../Loader';

interface Props {
  size: number;
  otherStyles: string;
  video: {
    _id: string;
    title: string;
    author: {
      _id: string;
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      profilePicture: string;
      likes: string[];
      saved: string[];
      role: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
    content: string;
    media: string;
    publish: boolean;
    categories: string[];
    likes: string[];
    menCategories: string[];
    womenCategories: string[];
    excerpt: string;
    format: string;
    tags: string[];
    featuredImage: string;
    nationality: string;
    highlight: string;
    photoSplash: boolean;
    slug: string;
    fantasy: boolean;
    editorsPick: boolean;
    newsBreaking: boolean;
    reads: number;
    featured: boolean;
    article: boolean;
    inFocus: boolean;
    mediaType: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

const Play = ({ size, otherStyles, video }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const { comments, isErr, isLoad } = useFetchPostComment(video?._id);
  return (
    <>
      <div
        className={`text-white cursor-pointer z-[100] font-[700] bg-[#373A3C]/5 border border-[#373A3C] bg-opacity-80 backdrop-filter backdrop-blur-md border-opacity-20 shadow-xl  rounded-full ${
          otherStyles != '' ? otherStyles : ''
        }`}>
        <FaPlay
          className='text-defaultYellow'
          size={size}
          onClick={() => setShow(true)}
        />
      </div>
      {show && (
        <div className='h-[100vh] md:w-[100vw] overflow-x-hidden overflow-y-auto grid place-items-center top-0 black__overlay fixed'>
          <div className='relative z-[99999] flex flex-col gap-2 md:w-[80vw] left-0 right-0 md:top-0 bg-white px-3 md:mt-7 md:gap-5 max-w-full pb-32'>
            <div className="grid md:grid-cols-[4fr__1fr] gap-3 py-3">
              <div>
                <ReactPlayer
                  url={(video.mediaType == 'video' ? video?.media : '')}
                  controls={true}
                  className='w-full shadow border'
                  style={{
                    maxWidth: '100%',
                    backgroundColor: '#333'
                  }}
                  width='100%'
                />
            
                <div className=' w-full flex flex-col gap-3 px-3'>
                  <div className='flex items-center justify-between'>
                    <p className='text-[22px] md:text-3xl font-[700] text-primary1 my-3 leading-7'>
                      {video?.title}{' '}
                    </p>
                    <LikeCommentShare id={video?._id} size={18} />
                  </div>
                  <PostedBy author={video.author} createdAt={video.createdAt} />

                  <div>{parser(video?.content)}</div>
                  {isLoad ? (
                    <Loader />
                  ) : comments?.length > 0 ? (
                    <Comments comments={comments} className='w-full' />
                  ) : (
                    <p className='text-xs'>There are no comments</p>
                  )}
                  <CommentForm postId={video?._id} otherStyles='text-xl' />
                </div>
              </div>

              <div className='py-4'>
                <img src="./ads2.png" alt="" className='h-[90px] md:h-min w-full my-6 md:my-0 md:w-min' />
              </div>
            </div>

            <button
              onClick={() => setShow(false)}
              className='top-0 absolute right-0 text-white -mt-3 -mr-3 p-1.5 rounded-full bg-[#373A3C]/80'>
              <HiX className='cursor-pointer' size={20} />
            </button>

          </div>
        </div>
      )}
    </>
  );
};

export default Play;
