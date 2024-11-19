import React from 'react'
import { RiPlayCircleFill, RiTimeLine } from 'react-icons/ri';
import { Post } from '@/requests/dto';
import TimeAgo from 'react-timeago';
import parser from 'html-react-parser';


interface Props {
  item : Post
}

const Preview = ( {item} : any) => {
  return (
    <div className='flex md:gap-1 flex-col md:my-0 my-3 rounded-2xl'>
        <img src={item?.thumbNail} alt="" className=' h-[200px] rounded-2xl'/>
        
        
        <p className='font-[600] text-sm'>
          {item?.title}
        </p>
        <p className='text-[11px] flex items-center gap-0.5'>
          <RiTimeLine />
          <TimeAgo date = {item?.createdAt} />
        </p>
        <p className='text-[12px] text-black/80'>
          {parser(item?.content)}
        </p>



    </div>
  )
}

export default Preview