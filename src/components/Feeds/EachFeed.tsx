import React from 'react'
import GrayLine from '../UI/GrayLine'
import { RiBookmark2Line, RiChat2Line, RiHeart2Line, RiShareForwardLine } from 'react-icons/ri'

const EachFeed = () => {
  return (
    <div className='flex gap-4 flex-col border-2 border-gray-600 py-5'>
        <div className='flex-center gap-2 mx-xPadding'>
            <img src="./img.jpg" alt="" className='size-[50px] rounded-full'/>
            <div>
                <p className='font-[600]'>Adam Smith</p>
                <p className='text-sm text-gray-500'>2h ago</p>
            </div>
        </div>

        <img src="./img.jpg" alt="" className='h-[400px] ' />

        <div className='flex gap-5 flex-col mx-xPadding'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt amet perspiciatis doloribus et earum. Libero soluta cum earum eveniet temporibus. Omnis necessitatibus itaque provident, dolorum harum accusamus praesentium nesciunt obcaecati?</p>

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