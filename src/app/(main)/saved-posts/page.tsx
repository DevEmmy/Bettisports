"use client"
import EachBlog from '@/components/Blog/EachBlog'
import EachNews from '@/components/FootballNews/EachNews';
import Loader from '@/components/Loader';
import { useFetchLikeAndSaved } from '@/hooks/UserRequests';
import React from 'react'

const page = () => {
    const {likesAndSaved,isError,isLoading} = useFetchLikeAndSaved();
  return (
    <div className='grid grid-cols-6 gap-5 mx-xPadding my-10'>
        <div className='grid grid-cols-6 col-span-6'>
            <div/>
            <p className='col-span-5 font-[600]'>Saved Posts</p>
        </div>
        <img src="./ads2.png"  alt="" />

        <div className='grid col-span-4 grid-cols-3 gap-5'>
            
            {isLoading ? <Loader /> :
            likesAndSaved?.saved.length > 0 ?
                likesAndSaved?.saved.map((item : any, i : number)=>{
                    return(
                        <EachNews key={i} item={item}/>
                    )
                })
                : (
                    <p>There an no liked posts</p>
                )
            }
            {/* {likesAndSaved?.likes.length} */}
        </div>

        <img src="./ads2.png" alt="" />
    </div>
  )
}

export default page