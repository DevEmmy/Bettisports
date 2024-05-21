import React from 'react'
import TitleHeader from '../UI/TitleHeader'
import VerticalHeader from '../Shared/VerticalHeader'
import EachNews from '../FootballNews/EachNews'
import SmFootballBlogHighlight from '../FootballNews/SmFootballBlogHighlight'

const LiveTransfer = () => {
  return (
    <div className='grid grid-cols-[4fr_1.5fr] px-xPadding my-10 gap-10'>
      <div className='flex flex-col gap-3'>
        <VerticalHeader title='Live Transfer' />

        <div className="grid grid-cols-2 gap-10">
          <EachNews size={"lg"}/>
          <EachNews size={"lg"}/>

          <div className='col-span-2 grid grid-cols-3 gap-10'>
            <SmFootballBlogHighlight />
            <SmFootballBlogHighlight />
            <SmFootballBlogHighlight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveTransfer