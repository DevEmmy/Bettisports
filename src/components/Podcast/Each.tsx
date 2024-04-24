import React from 'react'

const Each = () => {
  return (
    <div className='grid grid-cols-[1fr_5fr_1fr] gap-3  text-white py-3'>
        <img src="./img.jpg" alt="" className='w-full h-full'/>
        <div className='grid'>
            <p className='text-sm uppercase font-[600]'>Podcast Title</p>
            <p className='text-[12px] line-clamp-2'>Lorem ipsum dolor sit amet consectetur. and why do kdhaid aiadd dl Adipiscing nisi suspendisse ullamcorper ornare nunc in. Massa habitasse.....</p>
        </div>
        <div className='grid'>
            <p className='text-[12px]'>25min</p>
            <p className='text-[12px]'>April 2</p>
        </div>
    </div>
  )
}

export default Each