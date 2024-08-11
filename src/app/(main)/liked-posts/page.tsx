'use client';
import EachBlog from '@/components/Blog/EachBlog'
import React from 'react'
import Loader from '@/components/Loader';
import { useFetchLikeAndSaved, getUser } from '@/hooks/UserRequests';
import parser from 'html-react-parser'
import EachNews from '@/components/FootballNews/EachNews';

const page = () => {
    
    const {likesAndSaved,isError,isLoading} = useFetchLikeAndSaved();

    // const {likesAndSaved,isError,isLoading} = useFetchLikeAndSaved(user?._id);

  return (
    <div className='grid grid-cols-6 gap-5 mx-xPadding my-10'>
        <div className='grid grid-cols-6 col-span-6'>
            
            <p className='col-span-5 font-[600]'>Liked Posts</p>
        </div>
        <img src="./ads2.png"  alt="" />

        <div className='grid col-span-4 grid-cols-3 gap-5'>
            
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