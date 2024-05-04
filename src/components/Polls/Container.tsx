import React from 'react'
import Collection from './Collection'

const PollContainer = () => {
    const options = [
        "Man United",
        "Man City"
    ]
    return (
        <div className='border border-gray-300 shadow-md'>
            <img src="./img.jpg" alt="" className='h-[150px] w-full' />
            <div className="p-3 flex flex-col gap-2">
                <p className='text-[14px] font-[500]'>Where will Ronaldo play his 2020/21 campaign?</p>

                <Collection polls={options} />

                <div className='text-[12px] flex items-center justify-between'>
                    <p className='font-[500] text-secondaryBlue'>Total Votes 26</p>

                    <p>5 days left</p>
                </div>
            </div>
        </div>
    )
}

export default PollContainer