import React from 'react'
import { HiOutlineBell } from 'react-icons/hi'
import { HiChevronDown } from 'react-icons/hi2'
import { RiBellLine } from 'react-icons/ri'

const TopNav = () => {
  return (
    <div className='flex-center justify-between py-5 px-xPadding bg-white border-b fixed top-0 w-4/5 right-0'>
        <p>Howdy, Williams</p>

        <div className='flex-center gap-20 '>
            <HiOutlineBell size={24} />

            <div className='flex-center gap-5'>
                <img src="./img.jpg" alt="" className='pp' />
                <HiChevronDown />
            </div>
        </div>
    </div>
  )
}

export default TopNav