import React from 'react'
import LikeCommentShare from '../UI/LikeCommentShare'
import Link from 'next/link'
import parse from 'html-react-parser';

const CategoryBlog = ({item} : any) => {
  return (
    <div
            className='flex justify-between gap-2 py-3'>
            <div className='flex gap-2 flex-col'>
              <Link href={`/blog/${item?._id}`} >
                <p className='text-[14px] font-[500] line-clamp-2'>{item?.title}</p>
                {/* <p className='text-[12px] font-[400] line-clamp-2 parser'>
                  {parse(item?.content)}
                </p> */}
                <p className='!text-[10px] line-clamp-3 parser mb-2'>{parse(item?.content)}</p>
              </Link>
              
              <LikeCommentShare id={item._id} size={15} />
            </div>

            <img src={item?.thumbNail ? item?.thumbNail : item?.media } width={100} height={100} alt='' />
          </div>
  )
}

export default CategoryBlog