import React from 'react'
import Clubs from '../Shared/Clubs';

interface Props{
    keyIndex: number,
    logo: string
    p: number;
    w: number;
    pts: number;
    name: string
}

const EachClub = ({keyIndex, logo, p, w, pts, name}: Props) => {
  return (
    <div className='grid grid-cols-10 gap-2 py-2'>
        <p>{keyIndex + 1}.</p>
        <div className='col-span-6'>
          
          <div className='flex gap-2 items-center'>
                <img src={logo} alt="" className='w-[20px] h-auto object-contain' />
                <p className='font-[600] text-sm'>{name}</p>
            </div>

          </div>
        <div className='col-span-3 grid grid-cols-3 gap-2'>
            <p>{p}</p>
            <p>{w}</p>
            <p>{pts}</p>
        </div>
    </div>
  )
}

export default EachClub