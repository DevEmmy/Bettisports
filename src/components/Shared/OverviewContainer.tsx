import React from 'react'

interface Props{
    title: String;
    children: React.ReactNode
}

const OverviewContainer = ({title, children}: Props) => {
  return (
    <div className='bg-white border'>
        <p className='p-4 border-b font-[600] text-[18px]'>{title}</p>

        <div className='p-4'>
            {children}
        </div>
    </div>
  )
}

export default OverviewContainer