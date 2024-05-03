import OtherSections from '@/components/Blog/OtherSections'
import MainPage from '@/components/Live/MainPage'
import React from 'react'

const LiveFootball = () => {
  return (
    <div className='grid grid-cols-[4fr_1.5fr] gap-10 mx-xPadding my-10'>
        <MainPage />

        <OtherSections />
    </div>
  )
}

export default LiveFootball