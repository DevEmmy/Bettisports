"use client"
import React from 'react'
import { RiArrowRightDoubleLine } from 'react-icons/ri'
import { icons } from '../Shared/Clubs'

const Highlight = () => {
  return (
    <div className='flex my-2 justify-between mb-10'>
      <div className="flex gap-2">
        <p className='text-secondaryBlue flex gap-1 items-center'>Highlights <RiArrowRightDoubleLine /></p>
      </div>

      <div className='flex gap-2 items-center'>
        {
          icons?.map((icon: string, i: number)=>{
            return(
              <div>
                <img src={icon} alt="" className='w-[60px] h-[60px] rounded-full border-4 border-secondaryBlue'/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Highlight