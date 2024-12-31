import React, { useState} from 'react';
import { Post } from '@/requests/dto';
import parser from 'html-react-parser';
import TimeAgo from 'react-timeago';
import { FaPlay } from 'react-icons/fa';

interface Props {
  item : Post
}

const Each = ( {item} : Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [audio, setAudio] = useState<any | null>(null);
  return (
    <div className='grid grid-cols-[1fr_5fr_1fr] gap-3  text-white py-3'>
        <img src={item?.thumbNail} alt="" className='w-full h-full'/>
        <div className='grid'>
            <p className='text-sm uppercase font-[600]'>
              {item?.title}
            </p>
            <p className='text-xs text-white/60 line-clamp-2'>
              {parser(item?.content)}
            </p>
        </div>
        <div className='grid'>
        <div
              className="absolute -translate-x-[50%] -translate-y-[50%] top-2/4 left-2/4 p-3 text-white cursor-pointer z-[100] font-[700] bg-[#373A3C]/5 border border-[#373A3C] bg-opacity-80 backdrop-filter backdrop-blur-md border-opacity-20 shadow-xl  rounded-full"
            >
              <FaPlay className="text-defaultYellow" size={23} />
            </div>
            <p className='text-[12px]'>
              <TimeAgo date={item?.createdAt} />
            </p>
            <p className='text-[12px]'></p>
        </div>
    </div>
  )
}

export default Each