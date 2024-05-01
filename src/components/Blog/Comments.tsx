import React from 'react'
import EachComment from './EachComment'

const Comments = () => {
  return (
    <div className='my-10 '>
        <p>3 comments</p>
        
        <div className='my-5 flex flex-col gap-5'>
        {
            [1,2,3].map((item, i: number)=>{
                return(
                    <EachComment key={i}/>
                )
            })
        }
        </div>
    </div>
  )
}

export default Comments