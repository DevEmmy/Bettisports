import React from 'react'
import { RiFacebookFill, RiLinkedinLine, RiTwitterLine } from 'react-icons/ri'

const PostedBy = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
            <img src="./img.jpg" alt="" className='rounded-full w-[60px] h-[60px]'/>
            <div>
                <p>Author Name</p>
                <p>March 22, 2024</p>
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