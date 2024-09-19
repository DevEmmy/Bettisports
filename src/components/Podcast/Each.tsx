import React from 'react';
import { Post } from '@/requests/dto';
import parser from 'html-react-parser';
import TimeAgo from 'react-timeago';

interface Props {
  item : Post
}

const Each = ( {item} : Props) => {
  return (
    <div className='grid grid-cols-[1fr_5fr_1fr] gap-3  text-white py-3'>
        <img src={item?.media} alt="" className='w-full h-full'/>
        <div className='grid'>
            <p className='text-sm uppercase font-[600]'>
              {item?.title}
            </p>
            <p className='text-[12px] line-clamp-2'>
              {parser(item?.content)}
            </p>
        </div>
        <div className='grid'>
            <p className='text-[12px]'>
              <TimeAgo date={item?.createdAt} />
            </p>
            <p className='text-[12px]'></p>
        </div>
    </div>
  )
}

export default Each