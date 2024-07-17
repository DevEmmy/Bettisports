'use client';
import React from 'react'
import Collection from './Collection'

const PollContainer = (poll : any) => {
    const options = [
        "Man United",
        "Man City"
    ]

    // console.log(poll)
    
    return (
        <div className='border border-gray-300 shadow-md'>
            <img src="./img.jpg" alt="" className='h-[150px] w-full' />
            <div className="p-3 flex flex-col gap-2">
                <p className='text-[14px] font-[500]'>{poll.question}</p>

                <Collection polls={options} pollId='' />

                <div className='text-[12px] flex items-center justify-between'>
                    <p className='font-[500] text-secondaryBlue'>Total Votes 26</p>

                    <p>{poll.duration} days left</p>
                    
                </div>
            </div>
        </div>
    )
}

export default PollContainer