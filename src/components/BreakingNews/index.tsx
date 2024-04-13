import React from 'react'
import News from './News'
import Featured from './Featured'

const BreakingNews = () => {
  return (
    <div className='grid grid-cols-[4fr_1.5fr] px-xPadding my-10 gap-10'>
        <div>
            <News />
            <Featured />
            <img src="./hero2.png" alt="" className='my-10' />
        </div>

        <img src="./ads.png" alt="" className='w-full object-cover' />
    </div>
  )
}

export default BreakingNews