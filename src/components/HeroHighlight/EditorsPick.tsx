"use client"
import React from 'react'
import VerticalHeader from '../Shared/VerticalHeader'
import { useFetchEditorsPick } from '@/hooks/PostRequests'
import Loader from '../Loader'
import parse from 'html-react-parser';

const EditorsPick = () => {

  const news = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg",
      date: "March 28, 2024",
      title: "Alexander Isak Speaks Out On His Newcastle Future Amid ",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg",
      date: "March 28, 2024",
      title: "Alexander Isak Speaks Out On His Newcastle Future Amid ",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg",
      date: "March 28, 2024",
      title: "Alexander Isak Speaks Out On His Newcastle Future Amid ",
    }
  ]

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
          
          posts.length > 0
            ?
            posts.map((item: any, i: number) => {
              return (
                <div className='w-full h-[200px] relative'>
                  <img src={item.media} alt="" className='w-full h-full object-cover' />

                  <div className="overlay" />

                  <div className="details p-3">
                    
                    <p className='font-[600] text-[12px]'>
                      {item.title}
                    </p>
                    <p className='!text-[10px] line-clamp-2 parser'>{parse(item.content)}</p>
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