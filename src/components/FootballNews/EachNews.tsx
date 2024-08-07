import React from 'react'
import { RiChat2Line, RiHeart2Line, RiShareForward2Line } from 'react-icons/ri'
import parser from "html-react-parser"
import Link from 'next/link';
import LikeCommentShare from '../UI/LikeCommentShare';

interface Props{
    size?: string | null;
    item: any;
}

const EachNews = ({size,item} : Props)  => {
    
    return (
        <div className='h-full flex flex-col gap-2'>
            <Link href={`/blog/${item?._id}`}>
            <img src={item?.media} alt="" className='w-full h-[180px] mb-1'/>
            <p className={`${size == "lg" && "text-[20px] font-[600]"}`}>
            {item?.title}
            </p>
            </Link>
            <div className={`flex items-center ${size == "lg" ? "text-[16px]" : "text-[12px]"} gap-10 text-gray-400`}>
                <p className='parser line-clamp-2'>
                    {parser(item?.content || "")}
                </p>

                <LikeCommentShare id={item?._id} size={18} />
            </div>
        </div>
    )
}

export default EachNews