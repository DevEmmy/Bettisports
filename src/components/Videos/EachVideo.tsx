import React from 'react';
import Play from '../UI/Play';
import { Post } from '@/requests/dto';


interface VideoProps {
    video: Post
  }

const EachVideo = ({video} : VideoProps) => {
  return (
    <div className='relative'>
      <Play size={16} video={video} otherStyles='absolute -translate-x-[50%] -translate-y-[50%] top-2/4 left-2/4 p-2.5'/>
      <img src='./img.jpg' alt='' />
      <div className='overlay' />
      <div className='details p-5'>
        <p className='text-[11px]'>March 28, 2024</p>
        <p className=' font-[600] line-clamp-1'>
          Alexander Isak Speaks Out On His Newcastle Future Amid Arsenal Links
        </p>
      </div>
    </div>
  );
};

export default EachVideo;
