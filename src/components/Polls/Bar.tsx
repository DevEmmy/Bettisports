import React from 'react'

interface Props {
    title: string;
    value: number;
    mySelect?: boolean;
}

const Bar = ({title, value, mySelect=false}: Props) => {
  return (
    <div className={`${!mySelect ? "bg-[#E8E8E8]" : "bg-[#EEF6FD]"} ${mySelect && "border-l-2 border-l-secondaryBlue text-secondaryBlue"} flex justify-between p-3 cursor-pointer`}>
        <div>
            <p className='text-[12px] font-[500]'>{title}</p>
        </div>

        <p className='text-[12px]'>{value}%</p>
    </div>
  )
}

export default Bar