'use client';
import React, {useState} from 'react'
import GrayLine from '../UI/GrayLine'
import TimeAgo from 'react-timeago'
import LikeCommentShare from '../UI/LikeCommentShare'
import { RiBookmark2Line, RiChat2Line, RiHeart2Line, RiShareForwardLine } from 'react-icons/ri'


const EachFeed = ({item} : any ) => {
    const [isImgFull,setIsImgFull] = useState<boolean>(false);
  return (
    <div className='flex gap-4 flex-col border-2 border-gray-400 py-5'>
        <div className='flex-center gap-2 mx-5 md:mx-xPadding'>
            <img src={item?.postedBy?.profilePicture} alt="" className='size-[50px] rounded-full border'/>
            <div>
                <p className='font-[600]'>
                    {item?.postedBy?.firstName} {item?.postedBy?.lastName}
                </p>
                <p className='text-sm text-gray-500'>
                    <TimeAgo date={item?.createdAt} />
                </p>
            </div>
        </div>

        {item?.image  && (
            <img src={item?.image} alt="" className={`w-full ${!isImgFull ? 'max-h-[50vh]' : 'h-fit'}`} onClick={() => setIsImgFull(!isImgFull)} />
        )}

        <div className='flex gap-5 flex-col mx-5 md:mx-xPadding'>
            <p>
                {item?.content}
            </p>

            <GrayLine />

            <div className="reactions flex justify-around md:justify-normal gap-2 text-[20px] md:text-[24px] items-center text-gray-500">
                <RiHeart2Line />
                <RiChat2Line />
                <RiBookmark2Line />
                <RiShareForwardLine />
            </div>
            {/* <LikeCommentShare post={item} size={12} /> */}
        </div>
    </div>
  )
}

export default EachFeed