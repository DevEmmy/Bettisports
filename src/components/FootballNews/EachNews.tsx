import React from 'react'
import { RiChat2Line, RiHeart2Line, RiShareForward2Line } from 'react-icons/ri'

const EachNews = () => {
    return (
        <div className='h-full flex flex-col gap-2'>
            <img src="img.jpg" alt="" className='w-full h-auto'/>
            <p>Alexander Isak Speaks Out On His Newcastle Future Amid Arsenal Links</p>
            <div className="flex items-center text-[12px] justify-between">
                <p>March 15, 2024</p>

                <div className='flex gap-3'>
                    <RiHeart2Line />
                    <RiChat2Line />
                    <RiShareForward2Line />
                </div>
            </div>
        </div>
    )
}

export default EachNews