import React from 'react'
import News from './News'
import Featured from './Featured'
import Standing from '../Standing'

const BreakingNews = () => {
  return (
    <div className='grid grid-cols-[4fr_1.5fr] px-xPadding my-10 gap-10'>
      <div>
        <News />
        <Featured />
        <img src="./hero2.png" alt="" className='my-10' />
      </div>

      <div>
        <img src="./ads.png" alt="" className='w-full object-cover' />
        <Standing />
      </div>

    </div>
  )
}

export default BreakingNews