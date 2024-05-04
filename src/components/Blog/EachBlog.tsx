import React from 'react'
import { RiBookmark2Line, RiChat2Line, RiForward5Line, RiHeart2Line, RiShareForwardLine } from 'react-icons/ri'

const EachBlog = () => {
  return (
    <div className='border border-gray-300 shadow-md'>
        <img src="./img.jpg" className='h-[150px] w-full' alt="" />
        <div className='p-3 flex flex-col gap-3'>
            <p className='text-[12px] text-gray-500'>March 15, 2024 | Category</p>
            <p className='text-[14px] font-[500]'>
            Alexander Isak Speaks Out On His Newcastle Future Amid ...
            </p>
            <div className="reactions flex gap-2 items-center text-gray-500">
                <RiHeart2Line />
                <RiChat2Line />
                <RiBookmark2Line />
                <RiShareForwardLine />
            </div>
        </div>
    </div>
  )
}

export default EachBlog