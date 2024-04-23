import React from 'react'
import { RiChat2Line, RiHeart2Line, RiShareForward2Line } from 'react-icons/ri'

const MdFootballBlogHighlight = () => {
    return (
        <div className='grid grid-cols-[2fr_3fr] gap-3 py-2'>
            <img src="./img.jpg" alt="" />

            <div className='grid'>
                <p>Romeo Lavia to Miss The Remainder of 2023/24 Season</p>
                <div className="flex items-center text-[12px] justify-between">
                    <p>March 15, 2024</p>

                    <div className='flex gap-3'>
                        <RiHeart2Line />
                        <RiChat2Line />
                        <RiShareForward2Line />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MdFootballBlogHighlight