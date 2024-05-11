import Link from 'next/link'
import React from 'react'

interface Props{
    dateTime: string,
    title: string,
}
const Published = ({dateTime, title}: Props) => {
  return (
    <div className='flex-center justify-between text-sm gap-20 p-2'>
        <p className='text-gray-700'>{dateTime}</p>
        <Link href={"/"} className='text-secondaryBlue w-2/4'>
            {title}
        </Link>
    </div>
  )
}

export default Published