'use client';
import React, { useState, useEffect } from 'react';
import { BiShow } from 'react-icons/bi';
import { FaPlay } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import PostedBy from '../Blog/PostedBy';
import LikeCommentShare from './LikeCommentShare';
import TitleHeader from './TitleHeader';
import parser from 'html-react-parser';

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
  return (
    <>
      <div
        className={`text-white cursor-pointer z-[10000] font-[700] bg-[#373A3C]/5 border border-[#373A3C] bg-opacity-80 backdrop-filter backdrop-blur-md border-opacity-20 shadow-xl  rounded-full ${
          otherStyles != '' ? otherStyles : ''
        }`}>
        <FaPlay className='text-defaultYellow' size={size} onClick={() => setShow(true)}/>
      </div>
      {show && (
        <div className=''>
          <div className='black__overlay' onClick={() => setShow(false)}></div>
          <div className='fixed z-[10000] bg-white md:top-[5vh] md:left-1/4 md:right-1/4  md:w-2/4 m:top-0  md:gap-5 flex flex-col place-items-center p-5 border rounded-lg overflow-x-hidden overflow-y-scroll'>
            <ReactPlayer url={video.mediaType = 'video' ? video?.media : ''} controls={true}/>
            <div className=' w-full flex flex-col gap-3'>
              <div className='md:flex items-center justify-between'>
                {/* <h2 className='text-2xl'>
                  {video?.title}
                </h2> */}
                <TitleHeader title={video?.title} />
                <LikeCommentShare id={video?._id} size={18} />
              </div>
              <PostedBy author={video.author} createdAt={video.createdAt} />

              <div>{parser(video?.content)}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Play;
