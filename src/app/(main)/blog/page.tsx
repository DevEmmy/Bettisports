import BlogContent from '@/components/Blog/BlogContent'
import OtherSections from '@/components/Blog/OtherSections'
import React from 'react'

const Blog = () => {
  return (
    <div className='grid grid-cols-[4fr_1.5fr] gap-10 mx-xPadding my-10'>
        <BlogContent />

        <OtherSections />
    </div>
  )
}

export default Blog