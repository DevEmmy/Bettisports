import React from 'react'
import Line from '../UI/Line';

interface Props{
    text: string;
    endText?: string;
}

const HorizontalHeader = ({text, endText}: Props) => {
  return (
    <div className='flex items-center'>
        <p>{text}</p>
        <Line />
        {
            endText && 
            <p>
                {endText}
            </p>
        }
    </div>
  )
}

export default HorizontalHeader