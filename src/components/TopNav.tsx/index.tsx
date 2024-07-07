import Image from 'next/image'
import React from 'react'

const TopNav = () => {
  return (
    <div className='flex justify-between px-xPadding py-[25px]'>
        <Image src="/./logo.svg" unoptimized width={0} className='object-contain h-auto w-[200px]' height={0} alt='' />
        <Image src="/./hero2.svg" unoptimized width={200} height={200} alt='' className='h-[80px] w-auto object-cover'/>
    </div>
  )
}

export default TopNav