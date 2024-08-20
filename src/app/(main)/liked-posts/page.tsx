'use client';
import EachBlog from '@/components/Blog/EachBlog'
import React from 'react'
import Loader from '@/components/Loader';
import { useFetchLikeAndSaved, getUser } from '@/hooks/UserRequests';
import parser from 'html-react-parser'
import EachNews from '@/components/FootballNews/EachNews';
import Line from '@/components/UI/Line';

const page = () => {
    
    const {likesAndSaved,isError,isLoading} = useFetchLikeAndSaved();

    // const {likesAndSaved,isError,isLoading} = useFetchLikeAndSaved(user?._id);

  return (
    <div className='md:grid grid-cols-6 gap-5 px-5 md:px-xPadding my-10'>
        <div className='flex gap-2 md:col-span-6 my-2.5 items-center'>
            <p className=' font-[600] text-[16px]'>Liked Posts</p>
            <div className='md:hidden grow'>
                <Line />
            </div>
        </div>
        <img src="./ads2.png"  alt="" />

        <div className='md:grid md:col-span-4 grid-cols-3 gap-3 md:gap-5'>
            
            {isLoading ? <Loader /> :
            likesAndSaved?.likes.length > 0 ?
                likesAndSaved?.likes.map((item : any, i : number)=>{
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