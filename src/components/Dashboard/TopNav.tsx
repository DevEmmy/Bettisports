"use client"
import { getUser } from '@/hooks/UserRequests'
import Image from 'next/image'
import React from 'react'
import { HiOutlineBell } from 'react-icons/hi'
import { HiChevronDown } from 'react-icons/hi2'
import { RiBellLine } from 'react-icons/ri'

const TopNav = () => {
  const user = getUser()

  if (!user) {
    return null
  }

  return (
    <div className='flex-center justify-between py-4 px-xPadding bg-white border-b fixed top-0 w-4/5 right-0'>
      <p className='font-[600]'>Howdy, {user.firstName}</p>

      <div className='flex-center gap-10 '>
        <HiOutlineBell size={24} />

        <div className='flex-center gap-5'>
          <Image width={0} height={0} unoptimized src={user.profilePicture} alt="" className='pp' />
          <HiChevronDown />
        </div>
      </div>
    </div>
  )
}

export default TopNav