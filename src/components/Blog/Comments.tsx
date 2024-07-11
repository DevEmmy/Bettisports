'use client'
import React from 'react'
import EachComment from './EachComment'
import { useFetchPostComment } from '@/hooks/PostRequests';
import Loader from '../Loader';

interface Props {
  id: string;
}

const Comments = ({comments} : any) => {
  // const { comments, isErr, isLoad } = useFetchPostComment(id);
  // console.log(comments);
  // alert(comments)
  return (
    <div className='my-10 '>
        {/* // <p>{comments comments</p> */}
        
        <div className='my-5 flex flex-col gap-5'>
          
        { 
        comments.length > 0 ?
        comments.map((item : any, i: number) =>{
                return(
                  <EachComment key={i} item={item} />
                )
            })
            :
            (
              <p>no comments</p>
            )

        }
        </div>
    </div>
  )
}

export default Comments