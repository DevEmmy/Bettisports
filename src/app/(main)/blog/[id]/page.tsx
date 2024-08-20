'use client';
import BlogContent from '@/components/Blog/BlogContent'
import OtherSections from '@/components/Blog/OtherSections'
import React, {useEffect} from 'react'
import { useReadQuery } from '@/hooks/PostRequests'

const Blog = ({params}: any) => {
  const { id } = params;
  
  useEffect(() => {
    try {
      useReadQuery(id);
    } catch (err) {
      console.log(err)
    }
  },[])

  return (
    <div className='md:grid grid-cols-[4fr_1.5fr] gap-10 px-5 md:px-xPadding my-10'>
        <BlogContent id={id}/>

        <OtherSections />
    </div>
  )
}

export default Blog