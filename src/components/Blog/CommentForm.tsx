import React from 'react'

const CommentForm = () => {
  return (
    <div className='flex flex-col gap-5 my-5'>
        <p className='text-[36px] font-[700]'>Leave a Reply</p>
        <p className='text-[#52575C]'>Your email address will not be published. Required fields are marked *</p>
        
        <div className="grid grid-cols-3 comment gap-3">
            <div>
                <label htmlFor="">Name *</label>
                <input type="text" />
            </div>

            <div>
                <label htmlFor="">Email *</label>
                <input type="text" />
            </div>

            <div>
                <label htmlFor="">Website *</label>
                <input type="text" />
            </div>

            <div className='col-span-3'>
                <label htmlFor="">Write your comments here. *</label>
                <textarea name="" id="" />
            </div>
        </div>
        <div className='flex items-center gap-5'>
            <input type="checkbox" name="" id="" />
            <p>Save my name, email, and website in this browser for the next time I comment.</p>
        </div>

        <button className='bg-primary1 w-fit p-3 text-white'>
            Post Comment
        </button>
    </div>
  )
}

export default CommentForm