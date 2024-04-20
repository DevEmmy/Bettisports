import React from 'react'
import Line from '../UI/Line'

const QuickLinks = () => {
    return (
        <div className='grid grid-cols-[4fr_1.5fr] gap-10 mx-xPadding'>
            <div className='flex gap-5 flex-col'>
                <img src="./frame.png" alt="" />

                <div className="flex items-center">
                    <p className='uppercase text-[24px] leading-[24px] gap-5 font-[700] w-1/4 '>Quick Links</p>
                    <Line />
                </div>
            </div>

            <div className='bg-[#E8E8E8] p-5 text-center flex flex-col gap-3'>
                <h1 className='font-[600]'>JOIN THE NEWSLETTER</h1>
                <p className='text-[14px]'>Receive the latest news and updates on your favourites </p>
                <input type="text" placeholder='Email Address' className='p-3 text-[14px]'/>
                <button className='bg-defaultYellow p-3 text-[14px]'>Submit</button>
            </div>
        </div>
    )
}

export default QuickLinks