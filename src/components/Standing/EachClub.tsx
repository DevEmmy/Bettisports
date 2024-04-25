import React from 'react'
import Clubs from '../Shared/Clubs';

interface Props{
    keyIndex: number,
    abb: string;
    p: number;
    w: number;
    pts: number;
}

const EachClub = ({keyIndex, abb, p, w, pts}: Props) => {
  return (
    <div className='grid grid-cols-10 gap-2 py-2'>
        <p>{keyIndex + 1}.</p>
        <div className='col-span-6'><Clubs abb={abb} full={true} /></div>
        <div className='col-span-3 grid grid-cols-3 gap-2'>
            <p>{p}</p>
            <p>{w}</p>
            <p>{pts}</p>
        </div>
    </div>
  )
}

export default EachClub