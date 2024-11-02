"use client"
import React from 'react'
import VerticalHeader from '../Shared/VerticalHeader'
import { useFetchEditorsPick } from '@/hooks/PostRequests'
import Loader from '../Loader'
import parse from 'html-react-parser';
import Link from 'next/link'
import LikeCommentShare from '../UI/LikeCommentShare'

const EditorsPick = () => {

  const { posts, isError, isLoading } = useFetchEditorsPick()
  return (
    <div className=''>
      <VerticalHeader title="Editor's Pick" />

      <div className='flex gap-5 flex-col pt-4'>
        {
          isLoading 
          ?
            <Loader />
          :
          
          posts?.length > 0
            ?
            posts.slice(0,3).map((item: any, i: number) => {
              return (
                <div className='w-full h-[200px] relative' key={i}>
                  <img src={item?.media} alt="" className='w-full h-full object-cover' />

                  <div className="overlay" />

                  <div className="details p-3">
                    
                  <Link href={`/blog/${item?._id}`}>
                    <p className='font-[600] text-[12px]'>
                      {item?.title}
                    </p>

                    <p className='!text-[10px] line-clamp-2 parser mb-2'>{parse(item?.content)}</p>
                    </Link>
                    <LikeCommentShare id={item._id} size={15}/>
                  </div>

                  

                </div>
              )
            })
            :

            <p>There are no editor's picks available</p>

          }
      </div>

    </div>
  )
}

export default EditorsPick