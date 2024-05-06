import EachBlog from '@/components/Blog/EachBlog'
import React from 'react'

const page = () => {
  return (
    <div className='grid grid-cols-6 gap-5 mx-xPadding my-10'>
        <div className='grid grid-cols-6 col-span-6'>
            <div/>
            <p className='col-span-5 font-[600]'>Liked Posts</p>
        </div>
        <img src="./ads2.png"  alt="" />

        <div className='grid col-span-4 grid-cols-4 gap-5'>
            
            {
                [1,2,3,4,5,6,7].map((item, i)=>{
                    return(
                        <EachBlog key={i}/>
                    )
                })
            }
        </div>

        <img src="./ads2.png" alt="" />
    </div>
  )
}

export default page