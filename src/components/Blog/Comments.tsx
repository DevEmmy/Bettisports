'use client'
import React from 'react'
import EachComment from './EachComment'
import { useCommentsByPostIdQuery } from '@/hooks/PostRequests';
import Loader from '../Loader';



const Comments = (postId : any) => {
  const { comments, commentError, commentLoading } = useCommentsByPostIdQuery(postId);
  // alert(postId);
  return (
    <div className='my-10 '>
        <p>{comments?.length} comments</p>
        
        <div className='my-5 flex flex-col gap-5'>
        {
            comments?.map((item : any, i: number)=>{
                return(
                    <EachComment key={i} item={item} />
                )
            })

        }
        </div>
    </div>
  )
}

export default Comments