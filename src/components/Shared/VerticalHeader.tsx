import React from 'react'
import Line from '../UI/Line'

interface Props{
    title: string;
}

const VerticalHeader = ({title}: Props) => {
    return (
        <div className='flex flex-col gap-3'>
            <h1 className='font-[600]'>{title}</h1>
            <Line />
        </div>
    )
}

export default VerticalHeader