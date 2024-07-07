import React from 'react'
import { RiFacebookFill, RiLinkedinLine, RiTwitterLine } from 'react-icons/ri'
import ReactTimeago from 'react-timeago'

const PostedBy = ({author, createdAt}: any) => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
            <img src={author.profilePicture} alt="" className='rounded-full w-[60px] h-[60px]'/>
            <div>
                <p>{author.firstName + " " + author.lastName}</p>
                <p><ReactTimeago date={createdAt || "July 7, 2024"}/></p>
            </div>
        </div>

        <div className='flex items-center gap-2'>
            <RiLinkedinLine />
            <RiFacebookFill />
            <RiTwitterLine />
        </div>
    </div>
  )
}

export default PostedBy