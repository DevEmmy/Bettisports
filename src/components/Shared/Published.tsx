import Link from 'next/link'
import React from 'react'

interface Props{
    dateTime: string,
    title: string,
}
const Published = ({dateTime, title}: Props) => {
  return (
    <div className='flex-center justify-between text-xs gap-3 sm:gap-10 md:gap-20 p-2'>
        <p className='text-gray-700 text-xs'>{dateTime}</p>
        <Link href={"/"} className='text-secondaryBlue w-4/5 sm:w-3/4 md:w-2/4'>
            {title}
        </Link>
    </div>
  )
}

export default Published