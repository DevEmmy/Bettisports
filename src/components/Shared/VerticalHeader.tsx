import React from 'react'
import Line from '../UI/Line'
import SectionHead from '../UI/SectionHead';

interface Props{
    title: string;
}

const VerticalHeader = ({title}: Props) => {
    return (
        <div className='flex flex-col gap-3'>
            {/* <h1 className='font-[600] uppercase'>{title}</h1>s */}
            <SectionHead title={title} otherStyles='w-full' />
            <Line />
        </div>
    )
}

export default VerticalHeader