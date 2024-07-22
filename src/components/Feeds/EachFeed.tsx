import React from 'react'
import GrayLine from '../UI/GrayLine'
import TimeAgo from 'react-timeago'
import { RiBookmark2Line, RiChat2Line, RiHeart2Line, RiShareForwardLine } from 'react-icons/ri'

const EachFeed = ({item} : any) => {
  return (
    <div className='flex gap-4 flex-col border-2 border-gray-600 py-5'>
        <div className='flex-center gap-2 mx-xPadding'>
            <img src="./img.jpg" alt="" className='size-[50px] rounded-full'/>
            <div>
                <p className='font-[600]'>{item?.postedBy}</p>
                <p className='text-sm text-gray-500'>
                    <TimeAgo date={item?.createdAt} />
                </p>
            </div>
        </div>

        <img src={item?.image ? item.image : './img.jpg'} alt="" className='h-[400px] ' />

        <div className='flex gap-5 flex-col mx-xPadding'>
            <p>
                {item?.content}
            </p>

            <GrayLine />

            <div className="reactions flex gap-2 text-[24px] items-center text-gray-500">
                <RiHeart2Line />
                <RiChat2Line />
                <RiBookmark2Line />
                <RiShareForwardLine />
            </div>
        </div>
    </div>
  )
}

export default EachFeed