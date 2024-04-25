import React from 'react'
import { RiChat2Line, RiHeart2Line, RiShareForward2Line } from 'react-icons/ri'

const SmFootballBlogHighlight = () => {
  return (
    <div className='grid grid-cols-[4fr_1fr] gap-3 py-2'>
        <div className='flex flex-col gap-2'>
            <p className='text-[16px] font-[500]'>Five Reasons Why Alexander Isak Rides Elephants In France</p>
            <div className="flex items-center text-[12px] justify-between">
                <p>March 15, 2024</p>

                <div className='flex gap-3'>
                    <RiHeart2Line />
                    <RiChat2Line />
                    <RiShareForward2Line />
                </div>
            </div>
        </div>
        <img src="./img.jpg" alt="" className='h-full' />
    </div>
  )
}

export default SmFootballBlogHighlight