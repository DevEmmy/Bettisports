import React from 'react'
import { HiPlus, HiX } from 'react-icons/hi';

interface Props{
    title: string;
    selected?:boolean
}

const Element = ({title, selected=false}: Props) => {
  return (
    <div className={`border border-gray-600 rounded-md gap-2 p-2 ${selected && "bg-defaultYellow border-none"} flex w-fit gap-1 items-center`}>
        <p className='text-[14px] font-[500] w-fit'>{title}</p>
        {
            !selected ?
            <HiPlus size={12} />
            :
            <HiX size={12}/>
        }
    </div>
  )
}

export default Element