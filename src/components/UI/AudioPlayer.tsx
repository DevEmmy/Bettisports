"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaBackward, FaPause, FaForward, FaPlay } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import Image from "next/image";
import ReactPlayer from "react-player";
import LikeCommentShare from "./LikeCommentShare";
import PostedBy from "../Blog/PostedBy";
import { useFetchPostComment } from "@/hooks/PostRequests";
import Loader from "../Loader";
import Comments from "../Blog/Comments";
import { HiX } from "react-icons/hi";
import CommentForm from "../Blog/CommentForm";
import parser from 'html-react-parser';

interface AudioPlayerProps {
  item: any;
  show: boolean;
  closeShow: any
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ item , show, closeShow}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showDetails, setShowDetails] = useState<boolean>(show);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const { comments, isErr, isLoad } = useFetchPostComment(item?._id);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(event.target.value);
      setCurrentTime(Number(event.target.value));
    }
  };

  return (
    <>
      {show && (
        <div className="flex w-fit items-center space-x-4 p-4 bg-white border shadow-lg  bottom-6 right-6 fixed z-[999999]">
          <div className="w-16 h-16 bg-gray-300 rounded-xl">
            <Image
              src={item?.thumbNail}
              width={1000}
              height={1000}
              alt=""
              className="w-full h-full object-cover rounded-xl"
              onClick={() => setShowDetails(true)}
            />
          </div>
          <div className="flex flex-col flex-grow">
            <div className="flex items-center space-x-4 mb-4">
              <span>
                {new Date(currentTime * 1000).toISOString().substr(14, 5)}
              </span>
              <div className="relative w-64 h-1 bg-gray-300">
                <input
                  type="range"
                  min="0"
                  max={duration}
                  value={currentTime}
                  onChange={handleSeek}
                  className="absolute top-0 left-0 w-full h-1 bg-transparent appearance-none"
                />
                <div
                  className="absolute top-0 left-0 h-1 bg-black"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                ></div>
                <div
                  className="absolute top-0 left-0 w-3 h-3 bg-black rounded-full transform -translate-y-1/2"
                  style={{ left: `${(currentTime / duration) * 100}%` }}
                ></div>
              </div>
              <span>
                {new Date(duration * 1000).toISOString().substr(14, 5)}
              </span>
            </div>
            <div className="flex items-center space-x-4 justify-between">
              <div>
                <p className="font-[600] text-lg text-black/80 cursor-pointer" onClick={() => setShowDetails(true)}>
                  {item?.title}
                </p>
              </div>
              <div className="flex items-center space-x-4 ">
                <FaBackward />
                {/* <FaPause /> */}
                <button onClick={handlePlayPause}>
                  {isPlaying ? (
                    <FaPause size={23} className="text-black/90" />
                  ) : (
                    <FaPlay size={23} />
                  )}
                </button>
                <FaForward />
              </div>
            </div>
          </div>
          <audio
            ref={audioRef}
            src={item?.media}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            className="w-3"
          ></audio>
          <button className="absolute -top-3 -right-3 rounded-full p-1.5 bg-[#373A3C]/80 cursor-pointer" onClick={closeShow}>
            <RiCloseLine  size={20} className="text-white"/>
          </button>
        </div>
      )}


      {/* Show comment are */}
      {
        showDetails && (
          <div className='h-[100vh] md:w-[100vw] overflow-x-hidden overflow-y-auto grid place-items-center top-0 black__overlay fixed bg-green-600'>
          <div className='relative z-[99999] flex flex-col gap-2 md:w-[80vw] left-0 right-0 md:top-0 bg-white px-3 md:mt-7 md:gap-5 max-w-full pb-32'>
            <div className="grid md:grid-cols-[4fr__1fr] gap-3 py-3">
              <div>
                <Image src={item?.thumbNail} alt="" width={1000} height={1000} className="max-h-[70vh]" />
                <div className=' w-full flex flex-col gap-3 px-3'>
                  <div className='flex items-center justify-between'>
                    <p className='text-[22px] md:text-3xl font-[700] text-primary1 my-3 leading-7'>
                      Title: {item?.title}{' '}
                    </p>
                    <LikeCommentShare id={item?._id} size={18} />
                  </div>
                  <PostedBy author={item.author} createdAt={item.createdAt} />

                  <div>{parser(item?.content)}</div>
                  {isLoad ? (
                    <Loader />
                  ) : comments?.length > 0 ? (
                    <Comments comments={comments} className='w-full' />
                  ) : (
                    <p className='text-xs'>There are no comments</p>
                  )}
                  <CommentForm postId={item?._id} otherStyles='text-xl' />
                </div>
              </div>

              <div className='py-4'>
                <img src="./ads2.png" alt="" className='h-[90px] md:h-min w-full my-6 md:my-0 md:w-min' />
              </div>
            </div>

            <button
              onClick={() => setShowDetails(false)}
              className='top-0 absolute right-0 text-white -mt-3 -mr-3 p-1.5 rounded-full bg-[#373A3C]/80'>
              <HiX className='cursor-pointer' size={20} />
            </button>

          </div>
        </div>
        )
      }
    </>
  );
};

export default AudioPlayer;