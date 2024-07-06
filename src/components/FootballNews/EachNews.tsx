import React from 'react'
import { RiChat2Line, RiHeart2Line, RiShareForward2Line } from 'react-icons/ri'

interface Props{
    size?: string | null;
    item: any;
}

const EachNews = ({size,item} : Props)  => {
    return (
        <div className='h-full flex flex-col gap-2'>
            <img src={item?.media} alt="" className='w-full h-auto'/>
            <p className={`${size == "lg" && "text-[20px] font-[600]"}`}>
                {item?.title}
            </p>
            <div className={`flex items-center ${size == "lg" ? "text-[16px]" : "text-[12px]"} gap-10 text-gray-400`}>
                <p>
                    {item?.date}
                </p>

                <div className='flex gap-3'>
                    <RiHeart2Line />
                    <RiChat2Line />
                    <RiShareForward2Line />
                </div>
            </div>
        </div>
    )
}

export default EachNews