import React from 'react'
import News from './News'
import Featured from './Featured'
import Standing from '../Standing'

const BreakingNews = () => {
  return (
    <div className='md:grid grid-cols-[4fr_1.5fr] md:px-xPadding px-5 my-10 gap-10'>
      <div className='my-2 md:my-0'>
        <News />
        <Featured />
        <img src="./hero2.png" alt="" className='my-10' />
      </div>

      <div className='my-2 md:my-0'>
        <img src="./ads.png" alt="" className='w-full object-cover' />
        <Standing />
      </div>

    </div>
  )
}

export default BreakingNews