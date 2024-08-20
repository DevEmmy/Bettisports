import React from 'react'
import Line from '../UI/Line';

interface Props{
    text: string;
    endText?: string;
}

const HorizontalHeader = ({text, endText}: Props) => {
  return (
    <div className='flex items-center gap-10 uppercase'>
        <p className='font-[600]'>{text}</p>
        <Line />
        {
            endText && 
            <p className='font-[600] hidden md:flex'>
                {endText}
            </p>
        }
    </div>
  )
}

export default HorizontalHeader